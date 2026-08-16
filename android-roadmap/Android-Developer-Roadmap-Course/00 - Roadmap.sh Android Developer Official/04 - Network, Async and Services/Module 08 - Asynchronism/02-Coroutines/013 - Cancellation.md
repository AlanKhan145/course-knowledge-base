# 013 — Cancellation

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 08 — Asynchronism         |
| **Nhóm nội dung**       | Coroutines                       |
| **Nguồn roadmap**       | Asynchronism / Coroutines        |
| **Loại bài**            | Async                            |
| **Thứ tự trong module** | 013                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

**Cancellation** là cơ chế cho phép một coroutine đang chạy được yêu cầu dừng khi công việc đó **không còn cần thiết**.

Trong Android, cancellation đặc biệt quan trọng vì giao diện và lifecycle liên tục thay đổi:

* Người dùng rời khỏi màn hình.
* `ViewModel` bị hủy.
* Composable rời khỏi Composition.
* Người dùng nhấn nút **Cancel**.
* Một truy vấn tìm kiếm mới thay thế truy vấn cũ.
* Một request không còn giá trị.
* Một tác vụ cha thất bại khiến các coroutine con không còn cần tiếp tục.

Cancellation của Kotlin Coroutine mang tính **cooperative — hợp tác**: gọi `cancel()` không có nghĩa hệ thống cưỡng ép giết đoạn code ngay lập tức. Coroutine phải đi tới một điểm suspension có hỗ trợ cancellation hoặc chủ động kiểm tra trạng thái cancellation bằng các API như `ensureActive()`, `isActive` hay `yield()`. ([Android Developers][1])

---

# 2. Mục tiêu học tập

Sau bài này, bạn nên có thể:

* Giải thích được **Coroutine Cancellation** là gì.
* Hiểu tại sao cancellation là **cooperative**.
* Phân biệt:

  * `cancel()`
  * `cancelAndJoin()`
  * `isActive`
  * `ensureActive()`
  * `yield()`
* Biết cách cleanup tài nguyên bằng `finally`.
* Hiểu vai trò của `CancellationException`.
* Không vô tình nuốt cancellation trong `catch`.
* Hiểu cancellation trong **Structured Concurrency**.
* Liên hệ cancellation với:

  * `viewModelScope`
  * `lifecycleScope`
  * `LaunchedEffect`
  * Flow
* Viết long-running task có khả năng bị cancel.
* Test cancellation bằng `runTest`.

---

# 3. Cancellation là gì?

Giả sử ứng dụng đang tải dữ liệu:

```text
User mở Screen A
       ↓
Start coroutine
       ↓
Network request
       ↓
Parse data
       ↓
Update UI
```

Nhưng trước khi request hoàn thành:

```text
User mở Screen A
       ↓
Start coroutine
       ↓
Network request
       ↓
User rời Screen A
       ↓
???
```

Nếu coroutine vẫn tiếp tục chạy:

```text
Network
 ↓
Parse
 ↓
Update state không còn cần thiết
```

ứng dụng đang lãng phí:

* CPU
* network
* pin
* bộ nhớ

và có thể tạo ra race condition hoặc state không mong muốn.

Cancellation cho phép:

```text
User rời màn hình
       ↓
Scope bị cancel
       ↓
Coroutine nhận cancellation
       ↓
Dừng công việc
       ↓
Cleanup
```

---

# 4. `Job` và Cancellation

Mỗi coroutine được quản lý bởi một `Job`.

Ví dụ:

```kotlin
val job = scope.launch {
    // asynchronous work
}
```

Ta có thể cancel:

```kotlin
job.cancel()
```

Hoặc:

```kotlin
job.cancelAndJoin()
```

Khác biệt cơ bản:

| API               | Ý nghĩa                           |
| ----------------- | --------------------------------- |
| `cancel()`        | gửi yêu cầu cancel                |
| `join()`          | đợi coroutine hoàn thành          |
| `cancelAndJoin()` | cancel rồi đợi coroutine kết thúc |

Ví dụ:

```kotlin
val job = scope.launch {
    repeat(100) {
        delay(500)
        println("Processing $it")
    }
}

delay(2000)

job.cancelAndJoin()

println("Job finished")
```

---

# 5. Cancellation là Cooperative

Đây là phần quan trọng nhất của bài.

Cancellation **không giống Thread.stop()**.

Khi:

```kotlin
job.cancel()
```

Coroutine không nhất thiết dừng ngay.

Nó cần:

```text
Coroutine running
      ↓
Job cancelled
      ↓
Coroutine tiếp tục?
      ↓
gặp cancellation check
      ↓
throw CancellationException
      ↓
Coroutine kết thúc
```

Android Developers cũng nhấn mạnh cancellation của coroutine là cooperative; với những đoạn xử lý blocking hoặc vòng lặp dài, code cần chủ động kiểm tra cancellation. ([Android Developers][1])

---

# 6. Suspend function và Cancellation

Nhiều suspending operation của coroutine library đã hỗ trợ cancellation.

Ví dụ:

```kotlin
delay(1000)
```

Nếu coroutine bị cancel trong lúc đang:

```kotlin
delay()
```

nó sẽ dừng.

Ví dụ:

```kotlin
val job = scope.launch {

    println("Start")

    delay(5000)

    println("Finished")
}

delay(1000)

job.cancel()
```

Kết quả:

```text
Start
```

`Finished` không được chạy.

---

# 7. Vấn đề với CPU-intensive Task

Xem ví dụ sau:

```kotlin
scope.launch(Dispatchers.Default) {

    for (i in 0..1_000_000_000) {
        calculate(i)
    }
}
```

Trong vòng lặp này không có:

```kotlin
delay()
```

hoặc suspension point khác.

Nếu gọi:

```kotlin
job.cancel()
```

vòng lặp có thể vẫn tiếp tục một thời gian vì code chưa kiểm tra cancellation.

---

# 8. `isActive`

Ta có thể kiểm tra:

```kotlin
while (isActive) {

    doSomeWork()
}
```

Ví dụ:

```kotlin
val job = scope.launch(Dispatchers.Default) {

    var i = 0

    while (isActive) {

        calculate(i)

        i++
    }
}
```

Khi:

```kotlin
job.cancel()
```

thì:

```text
isActive = false
```

và vòng lặp có thể kết thúc.

---

# 9. `ensureActive()`

Một cách thường rõ nghĩa hơn là:

```kotlin
ensureActive()
```

Ví dụ:

```kotlin
withContext(Dispatchers.Default) {

    for (item in items) {

        ensureActive()

        process(item)
    }
}
```

Nếu coroutine đã bị cancel:

```kotlin
ensureActive()
```

sẽ làm luồng coroutine thoát bằng cancellation.

Android Developers đưa ra chính pattern kiểm tra `ensureActive()` cho những tác vụ lặp dài, chẳng hạn xử lý nhiều file. ([Android Developers][1])

---

# 10. `yield()`

Một lựa chọn khác:

```kotlin
yield()
```

Ví dụ:

```kotlin
for (item in items) {

    yield()

    process(item)
}
```

`yield()`:

1. tạo cơ hội cho coroutine khác chạy;
2. đồng thời tạo cancellation point.

Có thể hình dung:

```text
process item
    ↓
yield()
    ├── cancelled → stop
    │
    └── active → continue
```

---

# 11. `isActive` vs `ensureActive()`

### `isActive`

Phù hợp khi bạn muốn tự quyết định cách thoát:

```kotlin
while (isActive) {
    work()
}
```

### `ensureActive()`

Phù hợp khi chỉ muốn nói:

> Nếu coroutine đã bị cancel thì dừng ngay.

```kotlin
repeat(1000) {

    ensureActive()

    process(it)
}
```

Trong nhiều long-running task:

```kotlin
ensureActive()
```

thường giúp intent của code rõ hơn.

---

# 12. CancellationException

Kotlin Coroutines sử dụng:

```kotlin
CancellationException
```

để truyền tín hiệu cancellation trong coroutine. ([Kotlin][2])

Ví dụ về mặt ý tưởng:

```text
job.cancel()
      ↓
Coroutine gặp cancellation point
      ↓
CancellationException
      ↓
finally
      ↓
Coroutine kết thúc
```

Điều này dẫn tới một lỗi rất thường gặp.

---

# 13. Không được nuốt CancellationException

Đoạn code sau có vấn đề:

```kotlin
try {

    repository.loadData()

} catch (e: Exception) {

    Log.e("App", "Error", e)
}
```

Vấn đề là một `catch` quá rộng có thể bắt cả cancellation signal.

Nếu code thực sự cần bắt `CancellationException`, cần propagate nó:

```kotlin
try {

    repository.loadData()

} catch (e: CancellationException) {

    throw e

} catch (e: IOException) {

    handleNetworkError(e)
}
```

Tư duy đúng là:

```text
NetworkException
      ↓
handle error

CancellationException
      ↓
Không phải lỗi nghiệp vụ
      ↓
propagate cancellation
```

Cancellation không nên được biến thành:

```text
Error loading data
```

chỉ vì user rời màn hình.

---

# 14. Cleanup bằng `finally`

Khi coroutine bị cancel, `finally` vẫn có vai trò cleanup.

Ví dụ:

```kotlin
val job = scope.launch {

    try {

        downloadFile()

    } finally {

        println("Cleanup")
    }
}
```

Luồng:

```text
downloadFile()
      ↓
cancel()
      ↓
CancellationException
      ↓
finally
      ↓
cleanup
```

Đây là nơi thích hợp để:

* đóng resource;
* clear temporary state;
* release lock;
* ghi log cần thiết.

---

# 15. `NonCancellable`

Đôi khi cleanup cần gọi một suspending function.

Ví dụ:

```kotlin
finally {

    withContext(NonCancellable) {

        saveCleanupState()
    }
}
```

Nhưng cần dùng `NonCancellable` rất hạn chế.

Không nên:

```kotlin
withContext(NonCancellable) {
    downloadHugeFile()
}
```

vì bạn vừa vô hiệu hóa mục đích của cancellation.

`NonCancellable` nên chủ yếu dành cho phần cleanup thực sự bắt buộc.

---

# 16. Cancellation và Structured Concurrency

Cancellation liên quan trực tiếp tới **Structured Concurrency**.

Ví dụ:

```kotlin
viewModelScope.launch {

    launch {
        loadProfile()
    }

    launch {
        loadPosts()
    }

    launch {
        loadNotifications()
    }
}
```

Có cấu trúc:

```text
Parent Job
│
├── loadProfile
│
├── loadPosts
│
└── loadNotifications
```

Khi parent scope bị cancel:

```text
Parent cancelled
        ↓
┌───────┼───────────┐
↓       ↓           ↓
Profile Posts Notifications
cancel  cancel      cancel
```

Quan hệ parent-child này là một phần quan trọng của structured concurrency. Kotlin scopes quản lý các coroutine con và cho phép cancellation lan truyền theo cấu trúc công việc. ([Kotlin][3])

---

# 17. Cancellation trong Android ViewModel

Android cung cấp:

```kotlin
viewModelScope
```

Ví dụ:

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    fun loadUser() {

        viewModelScope.launch {

            val user = repository.getUser()

            // update UI state
        }
    }
}
```

Coroutine trong `viewModelScope` được tự động cancel khi `ViewModel` bị clear. ([Android Developers][4])

Sơ đồ:

```text
Screen
  │
  ▼
ViewModel
  │
  ▼
viewModelScope
  │
  ├── Coroutine A
  ├── Coroutine B
  └── Coroutine C

ViewModel cleared
        ↓
viewModelScope cancelled
        ↓
A + B + C cancelled
```

---

# 18. Configuration Change

Một điểm cần phân biệt:

```text
Rotate device
```

không nhất thiết có nghĩa:

```text
ViewModel destroyed
```

Công việc đặt trong `viewModelScope` có thể tiếp tục qua configuration change vì `ViewModel` được giữ lại. Android cũng khuyến nghị ViewModel sở hữu coroutine cho business logic của màn hình vì cách này phù hợp hơn với lifecycle và dễ test hơn. ([Android Developers][1])

Ví dụ:

```text
Activity A
   ↓ rotate
Activity A destroyed
   ↓
Activity A' created

        ViewModel
           │
           └── coroutine vẫn chạy
```

---

# 19. `lifecycleScope`

Với UI logic gắn trực tiếp với lifecycle:

```kotlin
lifecycleScope.launch {
    ...
}
```

scope sẽ gắn với lifecycle owner.

Trong API lifecycle của Android, các coroutine thuộc `LifecycleScope` được cancel khi lifecycle tương ứng bị destroy. ([Android Developers][5])

---

# 20. Cancellation với Flow

Một pattern phổ biến:

```kotlin
lifecycleScope.launch {

    repeatOnLifecycle(Lifecycle.State.STARTED) {

        viewModel.uiState.collect {
            render(it)
        }
    }
}
```

Ý tưởng:

```text
STARTED
   ↓
start collecting Flow
   ↓
STOPPED
   ↓
cancel collector
   ↓
STARTED
   ↓
launch collector mới
```

`repeatOnLifecycle` giúp việc collect Flow đi theo lifecycle thay vì giữ collector chạy khi UI không còn active. ([Android Developers][6])

---

# 21. Cancellation trong Jetpack Compose

Compose cũng tận dụng cancellation mạnh mẽ.

Ví dụ:

```kotlin
LaunchedEffect(userId) {

    viewModel.loadUser(userId)
}
```

`LaunchedEffect` gắn coroutine với Composition.

Nếu composable rời Composition:

```text
Composable removed
       ↓
LaunchedEffect scope cancelled
       ↓
Coroutine cancelled
```

Nếu key thay đổi:

```text
userId = 1
   ↓
Coroutine A

userId = 2
   ↓
Coroutine A cancelled
   ↓
Coroutine B started
```

Đây chính là behavior chính thức của `LaunchedEffect`: khi effect rời Composition hoặc key thay đổi, coroutine hiện tại sẽ bị cancel phù hợp với lifecycle của Composition. ([Android Developers][4])

---

# 22. Ví dụ thực tế — Search

Một tình huống cancellation rất phổ biến:

```text
User nhập "a"
        ↓
Search A

User nhập "android"
        ↓
Search A không còn cần
        ↓
Cancel A
        ↓
Search Android
```

Nếu không cancellation:

```text
Search "a" ───────────────→ result A
Search "android" ──→ result Android
```

Request A có thể hoàn thành sau request Android:

```text
Android result
      ↓
A result
      ↓
UI bị ghi đè bởi dữ liệu cũ
```

Cancellation giúp tránh công việc lỗi thời.

---

# 23. Ví dụ ViewModel có nút Cancel

```kotlin
class DownloadViewModel(
    private val repository: DownloadRepository
) : ViewModel() {

    private var downloadJob: Job? = null

    fun startDownload() {

        downloadJob?.cancel()

        downloadJob = viewModelScope.launch {

            try {

                repository.download()

            } catch (e: CancellationException) {

                throw e

            } catch (e: IOException) {

                // Show network error
            }
        }
    }

    fun cancelDownload() {

        downloadJob?.cancel()
    }
}
```

Luồng:

```text
Start Download
      ↓
downloadJob
      ↓
Downloading...
      ↓
User presses Cancel
      ↓
job.cancel()
      ↓
repository receives cancellation
      ↓
Stop
```

---

# 24. Long-running Task đúng cách

Giả sử cần xử lý 10.000 ảnh.

Không nên chỉ viết:

```kotlin
withContext(Dispatchers.Default) {

    images.forEach {

        processImage(it)
    }
}
```

Tốt hơn:

```kotlin
withContext(Dispatchers.Default) {

    images.forEach { image ->

        ensureActive()

        processImage(image)
    }
}
```

Sơ đồ:

```text
Image 1
   ↓
ensureActive()
   ↓
Image 2
   ↓
ensureActive()
   ↓
Image 3
   ↓
CANCEL
   ↓
ensureActive()
   ↓
STOP
```

---

# 25. Cancellation không thay thế Dispatcher

Hai khái niệm giải quyết hai vấn đề khác nhau.

## Dispatcher

Trả lời câu hỏi:

> Công việc chạy ở đâu?

```kotlin
Dispatchers.Main
Dispatchers.IO
Dispatchers.Default
```

## Cancellation

Trả lời:

> Khi nào công việc nên dừng?

Ví dụ:

```kotlin
viewModelScope.launch {

    val result = withContext(Dispatchers.Default) {

        calculateLargeDataset()
    }
}
```

Có thể hiểu:

```text
viewModelScope
     │
     │ lifecycle
     ▼
Coroutine
     │
     │ dispatcher
     ▼
Dispatchers.Default
     │
     ▼
CPU work
```

Nếu ViewModel bị clear:

```text
viewModelScope cancelled
         ↓
Coroutine cancellation
         ↓
CPU work cần cooperate với cancellation
```

---

# 26. Cancellation không phải Retry

Đây cũng là hai khái niệm khác nhau.

### Cancellation

```text
"Không cần công việc này nữa."
```

### Retry

```text
"Công việc vẫn cần,
nhưng lần chạy vừa rồi thất bại."
```

Ví dụ network:

```text
Request
   │
   ├── Timeout/network error
   │        ↓
   │      Retry
   │
   └── User leaves screen
            ↓
          Cancel
```

Không nên retry một request đã bị cancel do user rời khỏi màn hình.

---

# 27. UI State

Một màn hình có thể có:

```kotlin
sealed interface UiState {

    data object Idle : UiState

    data object Loading : UiState

    data class Success(
        val data: List<Item>
    ) : UiState

    data class Error(
        val message: String
    ) : UiState
}
```

Cancellation thường **không nên tự động trở thành**:

```kotlin
UiState.Error("Cancelled")
```

Nếu user rời màn hình, cancellation đơn giản chỉ có nghĩa:

```text
UI không còn cần kết quả.
```

---

# 28. Sai lầm phổ biến

## Sai lầm 1 — CPU loop không kiểm tra cancellation

```kotlin
while (true) {
    calculate()
}
```

Nên:

```kotlin
while (isActive) {
    calculate()
}
```

hoặc:

```kotlin
while (true) {

    ensureActive()

    calculate()
}
```

---

## Sai lầm 2 — Nuốt cancellation

Không nên:

```kotlin
try {

    repository.load()

} catch (e: Exception) {

    showError()
}
```

Nếu cần catch rộng:

```kotlin
catch (e: CancellationException) {
    throw e
}
```

---

## Sai lầm 3 — Dùng `GlobalScope`

```kotlin
GlobalScope.launch {
    loadData()
}
```

Bạn làm mất mối liên hệ rõ ràng giữa công việc và lifecycle.

Android khuyến nghị tránh dùng `GlobalScope` trực tiếp; với công việc thực sự cần sống lâu hơn caller, nên dùng một external scope được quản lý/inject rõ ràng. ([Android Developers][1])

---

## Sai lầm 4 — Cancel công việc cần hoàn thành

Không phải việc nào cũng nên bị cancel khi user rời màn hình.

Ví dụ:

```text
User bookmark article
```

Có thể nghiệp vụ yêu cầu bookmark vẫn phải hoàn thành ngay cả khi user chuyển màn hình.

Trong trường hợp đó, scope của công việc phải được thiết kế để sống lâu hơn scope của screen. Android cũng phân biệt rõ công việc chỉ có ý nghĩa khi screen tồn tại với công việc cần tiếp tục ngoài lifecycle của ViewModel. ([Android Developers][1])

---

# 29. Chọn Scope theo Lifetime

Một cách tư duy hữu ích:

```text
Công việc thuộc về ai?
        │
        ├── Composable
        │      ↓
        │ LaunchedEffect
        │
        ├── Screen / ViewModel
        │      ↓
        │ viewModelScope
        │
        ├── Activity / Fragment lifecycle
        │      ↓
        │ lifecycleScope
        │
        └── App-level operation
               ↓
          managed external scope
```

Nguyên tắc:

> **Lifetime của coroutine nên phản ánh lifetime của công việc.**

---

# 30. Cancellation và UX

Cancellation không chỉ là vấn đề code.

Nó trực tiếp ảnh hưởng UX.

Ví dụ search:

```text
User: Android
       ↓
Loading Android

User: Kotlin
       ↓
Cancel Android
       ↓
Loading Kotlin
       ↓
Kotlin results
```

Nếu không cancellation:

```text
Loading Android
Loading Kotlin

Kotlin finishes
↓
Kotlin result

Android finishes later
↓
Android result replaces Kotlin result ❌
```

Cancellation giúp giảm:

* kết quả stale;
* race condition;
* loading không cần thiết;
* network request thừa;
* CPU work thừa.

---

# 31. Testing Cancellation

Android hiện khuyến nghị dùng:

```kotlin
runTest
```

cho unit test liên quan tới coroutine; `TestDispatcher` và `TestCoroutineScheduler` cho phép kiểm soát việc schedule và virtual time trong test. ([Android Developers][7])

Ví dụ:

```kotlin
@Test
fun cancellationStopsTask() = runTest {

    var processed = 0

    val job = launch {

        repeat(100) {

            delay(100)

            processed++
        }
    }

    advanceTimeBy(250)

    job.cancelAndJoin()

    val countAfterCancel = processed

    advanceUntilIdle()

    assertEquals(
        countAfterCancel,
        processed
    )
}
```

Ý tưởng cần test:

```text
Start task
   ↓
Process some work
   ↓
Cancel
   ↓
Advance scheduler
   ↓
Không có work mới
```

---

# 32. Logging và Debugging

Trong quá trình học có thể log:

```kotlin
Log.d("Download", "Started")

try {

    repository.download()

} catch (e: CancellationException) {

    Log.d("Download", "Cancelled")

    throw e

} finally {

    Log.d("Download", "Finished cleanup")
}
```

Luồng log mong muốn:

```text
Started
Downloading...
Downloading...
Cancelled
Finished cleanup
```

Không nên log cancellation thông thường thành:

```text
ERROR: Download failed
```

nếu đó chỉ là lifecycle/user cancellation.

---

# 33. Ví dụ tổng hợp

```kotlin
class ImageRepository(
    private val dispatcher: CoroutineDispatcher =
        Dispatchers.Default
) {

    suspend fun processImages(
        images: List<Image>
    ): List<ProcessedImage> {

        return withContext(dispatcher) {

            images.map { image ->

                ensureActive()

                processImage(image)
            }
        }
    }
}
```

ViewModel:

```kotlin
class ImageViewModel(
    private val repository: ImageRepository
) : ViewModel() {

    private var processJob: Job? = null

    fun process(images: List<Image>) {

        processJob?.cancel()

        processJob = viewModelScope.launch {

            try {

                val result =
                    repository.processImages(images)

                // update state

            } catch (e: CancellationException) {

                throw e

            } catch (e: Exception) {

                // update error state
            }
        }
    }

    fun cancel() {

        processJob?.cancel()
    }
}
```

Kiến trúc:

```text
UI
│
│ process()
▼
ViewModel
│
│ viewModelScope.launch
▼
Repository
│
│ withContext(Default)
▼
Process Images
│
├── ensureActive()
├── ensureActive()
├── ensureActive()
└── ...
```

Cancellation:

```text
UI presses Cancel
       ↓
ViewModel
       ↓
Job.cancel()
       ↓
Repository coroutine
       ↓
ensureActive()
       ↓
CancellationException
       ↓
STOP
```

---

# 34. Liên hệ với các bài trước

Các kiến thức trong module kết nối với nhau như sau:

```text
008 — Coroutines
        ↓
009 — Coroutine Scope
        ↓
010 — Suspend Function
        ↓
011 — Dispatchers
        ↓
012 — Structured Concurrency
        ↓
013 — Cancellation
```

Có thể hiểu toàn bộ chuỗi bằng 5 câu hỏi:

| Chủ đề                 | Câu hỏi                                  |
| ---------------------- | ---------------------------------------- |
| Coroutine              | Làm async bằng cách nào?                 |
| CoroutineScope         | Coroutine thuộc về ai?                   |
| Suspend Function       | Công việc có thể suspend ở đâu?          |
| Dispatcher             | Công việc nên chạy trên thread pool nào? |
| Structured Concurrency | Parent-child được tổ chức thế nào?       |
| Cancellation           | Khi nào công việc phải dừng?             |

---

# 35. Bài thực hành

## Yêu cầu

Xây dựng một màn hình giả lập xử lý 100 item.

UI:

```text
┌──────────────────────────────┐
│ Process Images               │
│                              │
│ Progress: 37 / 100           │
│                              │
│ █████████░░░░░░░░░░░         │
│                              │
│ [ START ]       [ CANCEL ]   │
└──────────────────────────────┘
```

### Yêu cầu kỹ thuật

1. Khởi chạy công việc bằng:

```kotlin
viewModelScope.launch
```

2. Đưa CPU work sang:

```kotlin
Dispatchers.Default
```

3. Trong vòng lặp sử dụng:

```kotlin
ensureActive()
```

4. Cho phép user:

```text
START
CANCEL
```

5. Log:

```text
IDLE
↓
RUNNING
↓
CANCELLED
```

hoặc:

```text
IDLE
↓
RUNNING
↓
SUCCESS
```

---

# 36. Bài tập

### Bài 1

Giải thích tại sao đoạn code này khó cancel:

```kotlin
viewModelScope.launch(Dispatchers.Default) {

    while (true) {

        expensiveCalculation()
    }
}
```

Sửa lại bằng:

```kotlin
isActive
```

hoặc:

```kotlin
ensureActive()
```

---

### Bài 2

Tạo:

```kotlin
Job
```

và hai nút:

```text
Start Task
Cancel Task
```

Sau khi cancel, kiểm tra task không tiếp tục tăng progress.

---

### Bài 3

Tìm và sửa lỗi:

```kotlin
try {

    loadData()

} catch (e: Exception) {

    uiState.value = UiState.Error
}
```

Đảm bảo cancellation không bị biến thành business error.

---

# 37. Artifact cho Portfolio

Có thể tạo project nhỏ:

```text
CoroutineCancellationDemo/
│
├── ui/
│   └── ProcessingScreen.kt
│
├── viewmodel/
│   └── ProcessingViewModel.kt
│
├── data/
│   └── ProcessingRepository.kt
│
├── test/
│   └── CancellationTest.kt
│
└── README.md
```

README nên mô tả:

```text
Coroutine Cancellation Demo

Features
- Long-running background processing
- Manual cancellation
- viewModelScope
- Dispatchers.Default
- ensureActive()
- cancellation-safe exception handling
- progress state
- coroutine unit testing
```

Đây là artifact tốt hơn việc chỉ có một snippet vì nó chứng minh bạn hiểu mối quan hệ giữa:

```text
Lifecycle
+
CoroutineScope
+
Dispatcher
+
Cancellation
+
State
+
Testing
```

---

# 38. Checklist hoàn thành

* [ ] Giải thích được Cancellation là gì.
* [ ] Hiểu cancellation là cooperative.
* [ ] Biết `Job.cancel()`.
* [ ] Biết `cancelAndJoin()`.
* [ ] Hiểu `isActive`.
* [ ] Biết dùng `ensureActive()`.
* [ ] Hiểu vai trò của `yield()`.
* [ ] Biết `CancellationException`.
* [ ] Không nuốt `CancellationException`.
* [ ] Biết cleanup bằng `finally`.
* [ ] Hiểu trường hợp sử dụng `NonCancellable`.
* [ ] Hiểu parent-child cancellation.
* [ ] Biết cancellation trong `viewModelScope`.
* [ ] Biết cancellation trong lifecycle.
* [ ] Hiểu cancellation của `LaunchedEffect`.
* [ ] Phân biệt Cancellation với Retry.
* [ ] Biết làm CPU-intensive task cancellable.
* [ ] Có test cancellation bằng `runTest`.
* [ ] Có demo nhỏ để đưa vào portfolio.

---

# 39. Ghi chú Production

Khi đưa coroutine vào production, đừng chỉ hỏi:

> Coroutine có chạy không?

Hãy hỏi:

```text
1. Ai sở hữu công việc?
        ↓
2. Scope nào phù hợp?
        ↓
3. Công việc phải sống bao lâu?
        ↓
4. Khi user rời màn hình có cần tiếp tục không?
        ↓
5. Nếu cancel thì code có thực sự dừng không?
        ↓
6. Có cleanup resource không?
        ↓
7. CancellationException có bị catch nhầm không?
        ↓
8. UI State sau cancellation là gì?
        ↓
9. Có race condition với request mới không?
        ↓
10. Có test cancellation không?
```

Android khuyến nghị để data/business layer expose `suspend` function hoặc `Flow`, qua đó caller có thể kiểm soát lifecycle và cancel công việc khi phù hợp. ([Android Developers][1])

---

# 40. Ghi nhớ nhanh

```text
Cancellation
     │
     ├── Job.cancel()
     │
     ├── Cooperative
     │      ├── suspension point
     │      ├── ensureActive()
     │      ├── isActive
     │      └── yield()
     │
     ├── CancellationException
     │      └── không được nuốt
     │
     ├── Cleanup
     │      └── finally
     │
     └── Android Lifecycle
            ├── viewModelScope
            ├── lifecycleScope
            ├── repeatOnLifecycle
            └── LaunchedEffect
```

> **Quy tắc quan trọng nhất:** Coroutine không chỉ cần chạy đúng — nó còn phải **dừng đúng lúc**. Cancellation tốt giúp async code tuân theo lifecycle, giảm công việc thừa và ngăn các kết quả lỗi thời cập nhật vào UI.

[1]: https://developer.android.com/kotlin/coroutines/coroutines-best-practices "Best practices for coroutines in Android  |  Kotlin  |  Android Developers"
[2]: https://kotlinlang.org/docs/exception-handling.html?utm_source=chatgpt.com "Coroutine exceptions handling"
[3]: https://kotlinlang.org/docs/coroutines-and-channels.html?utm_source=chatgpt.com "Coroutines and channels − tutorial"
[4]: https://developer.android.com/topic/libraries/architecture/coroutines "Use Kotlin coroutines with lifecycle-aware components  |  App architecture  |  Android Developers"
[5]: https://developer.android.com/topic/libraries/architecture/views/coroutines-views?utm_source=chatgpt.com "Use Kotlin coroutines with lifecycle-aware components ..."
[6]: https://developer.android.com/topic/architecture/views/recommendations-views?utm_source=chatgpt.com "Recommendations for Android architecture (Views)"
[7]: https://developer.android.com/kotlin/coroutines/test "Testing Kotlin coroutines on Android  |  Android Developers"
