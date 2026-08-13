[![Multi-threading & callbacks primer | Training Courses | Android Developers](https://tse4.mm.bing.net/th/id/OIP.TNtc1N7vqh6aXFdXnrWU7gHaHi?r=0\&pid=Api)](https://developer.android.com/courses/extras/multithreading?utm_source=chatgpt.com)

# 002 - Background Thread

**Học phần:** 04 - Network, Async and Services
**Module:** Module 08 - Asynchronism
**Nhóm nội dung:** Threading Basics
**Nguồn roadmap:** Asynchronism / Threading Basics
**Loại bài:** Async
**Thứ tự trong module:** 002
**Thời lượng gợi ý:** 34 phút

> **Ảnh minh họa:** Main/UI Thread và các thread khác trong ứng dụng Android, từ tài liệu Android Developers. Main thread cần được giữ rảnh để xử lý UI, input và lifecycle callback. ([Android Developers][1])

---

## 1. Tóm tắt

**Background Thread** là cách gọi chung cho việc thực thi những công việc không nên chạy trực tiếp trên **Main Thread/UI Thread**, chẳng hạn:

* gọi network;
* đọc/ghi file;
* truy vấn dữ liệu có khả năng blocking;
* xử lý ảnh;
* parse dữ liệu lớn;
* mã hóa/giải mã;
* tính toán CPU nặng.

Mục đích chính là:

> **Không để công việc nặng chặn Main Thread và làm UI lag, đứng hình hoặc ANR.**

Trên Android hiện đại với Kotlin, **coroutines là giải pháp được Android khuyến nghị cho asynchronous programming**. Coroutines hỗ trợ structured concurrency, cancellation và tích hợp với Jetpack. ([Android Developers][2])

Một điểm rất quan trọng:

> **Background Thread không nhất thiết là một `Thread` cố định do bạn tự tạo.**

Với Kotlin Coroutines, một `CoroutineDispatcher` quyết định nơi công việc được thực thi. Coroutine thậm chí có thể resume trên thread khác sau khi suspend; vì vậy hãy suy nghĩ theo **dispatcher + scope + lifecycle**, thay vì cố quản lý từng `Thread` thủ công. ([Android Developers][3])

---

## 2. Mục tiêu học tập

Sau bài này, bạn nên có thể:

* Giải thích được Background Thread bằng ngôn ngữ của mình.
* Phân biệt **Main Thread** và công việc chạy ngoài Main Thread.
* Biết khi nào dùng:

  * `Dispatchers.Main`;
  * `Dispatchers.IO`;
  * `Dispatchers.Default`.
* Hiểu rằng `suspend` **không đồng nghĩa** với chạy background.
* Di chuyển một tác vụ blocking khỏi Main Thread bằng `withContext()`.
* Gắn coroutine với lifecycle bằng `viewModelScope`.
* Hiểu cancellation khi user rời màn hình.
* Biết khi nào Coroutine không đủ và phải dùng `WorkManager`.
* Viết unit test cho coroutine bằng `runTest` và `TestDispatcher`.
* Nhận biết các lỗi threading phổ biến trước khi đưa app lên production.

---

# 3. Background Thread là gì?

Giả sử màn hình Android đang hiển thị danh sách sản phẩm.

User nhấn:

```text
Refresh
```

App cần:

```text
Internet
   ↓
Download JSON
   ↓
Parse JSON
   ↓
Lưu database
   ↓
Hiển thị UI
```

Nếu toàn bộ công việc này chạy đồng bộ trên Main Thread:

```text
Main Thread

Touch
  ↓
Network request
  ↓
WAIT...
WAIT...
WAIT...
  ↓
Parse
  ↓
Database
  ↓
Render UI
```

Trong lúc `WAIT`, Main Thread không xử lý được việc vẽ UI và input như bình thường. Android cảnh báo rằng network, database và các công việc dài chạy trên UI thread có thể làm ứng dụng freeze, stutter hoặc dẫn đến ANR. ([Android Developers][1])

### Cách tốt hơn

```text
Main Thread                 Background work
    │                              │
    │ User click                   │
    │                              │
    ├──── Start coroutine ────────►│
    │                              │ Network / File
    │ UI vẫn responsive            │ Database / CPU
    │                              │
    │◄──────── Result ─────────────┤
    │
    │ Update state
    │
    ▼
Render UI
```

---

# 4. Main Thread và Background Work

## Main Thread

Main Thread chịu trách nhiệm chính cho:

```text
┌─────────────────────────────┐
│         MAIN THREAD         │
├─────────────────────────────┤
│ UI drawing                  │
│ Button click                │
│ Touch / gesture             │
│ Lifecycle callbacks         │
│ Compose recomposition       │
│ Update UI state             │
└─────────────────────────────┘
```

Android tạo main thread cho process của ứng dụng và dispatch UI events, drawing events cũng như component callbacks qua thread này. ([Android Developers][1])

### Vì vậy không nên đặt ở đây

```text
❌ Network blocking
❌ File I/O lớn
❌ CPU calculation nặng
❌ Decode bitmap lớn
❌ Long loops
❌ Blocking database operations
```

---

# 5. Coroutine Dispatcher

Trong Kotlin Coroutines, **Dispatcher** quyết định coroutine thực thi công việc ở đâu.

Ba dispatcher quan trọng nhất trên Android là: ([Android Developers][3])

| Dispatcher            | Dùng cho             | Ví dụ                         |
| --------------------- | -------------------- | ----------------------------- |
| `Dispatchers.Main`    | UI / công việc nhanh | cập nhật UI state             |
| `Dispatchers.IO`      | I/O blocking         | file, network, disk           |
| `Dispatchers.Default` | CPU-intensive        | sort, parse, image processing |

---

## 5.1 `Dispatchers.Main`

```kotlin
viewModelScope.launch {
    uiState.value = UiState.Loading
}
```

Phù hợp với:

```text
Update UI
Update StateFlow
Trigger UI state
Call main-safe suspend functions
```

Không phù hợp:

```kotlin
viewModelScope.launch {
    // ❌ Không nên
    val hugeFile = File(path).readText()
}
```

---

## 5.2 `Dispatchers.IO`

Dùng cho các tác vụ I/O blocking.

```kotlin
suspend fun readFile(file: File): String {
    return withContext(Dispatchers.IO) {
        file.readText()
    }
}
```

Luồng:

```text
Main
 │
 │ readFile()
 ▼
Coroutine suspended
 │
 ├─────────────► Dispatchers.IO
 │                  │
 │                  ├─ Read file
 │                  ├─ Wait disk
 │                  │
 │◄─────────────────┘
 │
 ▼
Main resumes
```

`Dispatchers.IO` được Android hướng dẫn sử dụng cho network/disk I/O, còn `withContext()` thường được đặt trong data layer để hàm trở thành **main-safe**. ([Android Developers][2])

---

## 5.3 `Dispatchers.Default`

Dùng cho công việc nặng về CPU.

Ví dụ:

```kotlin
suspend fun calculateScore(
    values: List<Int>
): Int = withContext(Dispatchers.Default) {

    values
        .map { it * it }
        .sum()
}
```

Các trường hợp điển hình:

```text
Image processing
      │
      ├── resize
      ├── filter
      └── transform

Large JSON
      │
      └── parsing

Large collection
      │
      ├── sorting
      └── calculation
```

Android mô tả `Dispatchers.Default` là dispatcher dành cho CPU-intensive work, trong khi `IO` dành cho disk/network I/O. ([Android Developers][3])

---

# 6. Một hiểu lầm rất phổ biến: `suspend` ≠ Background Thread

Code sau:

```kotlin
suspend fun loadSomething() {
    expensiveBlockingOperation()
}
```

**Không tự động chạy background.**

`suspend` chỉ cho phép coroutine **suspend/resume**.

Nếu `expensiveBlockingOperation()` thực sự blocking thì nó vẫn có thể block Main Thread nếu được gọi ở Main.

Android nhấn mạnh rằng đánh dấu một function bằng `suspend` không tự làm function đó chạy background; khi cần main-safety phải chuyển phần blocking/CPU-heavy sang dispatcher phù hợp. ([Android Developers][3])

### Đúng

```kotlin
suspend fun loadSomething() =
    withContext(Dispatchers.IO) {
        expensiveBlockingOperation()
    }
```

---

# 7. Main-safe function

Một nguyên tắc rất hữu ích trong Android Architecture:

> **Data layer nên tự chịu trách nhiệm chuyển công việc blocking khỏi Main Thread.**

Thay vì:

```kotlin
viewModelScope.launch(Dispatchers.IO) {
    repository.loadData()
}
```

có thể thiết kế Repository:

```kotlin
class UserRepository(
    private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO
) {

    suspend fun loadData(): List<User> =
        withContext(ioDispatcher) {
            loadUsersFromDisk()
        }
}
```

Sau đó ViewModel chỉ cần:

```kotlin
viewModelScope.launch {
    val users = repository.loadData()
}
```

Sơ đồ:

```text
ViewModel
    │
    │ loadData()
    ▼
Repository
    │
    ├── withContext(IO)
    │
    ▼
Background work
    │
    ▼
Result
    │
    ▼
ViewModel
    │
    ▼
UI State
```

Caller không cần biết Repository đang dùng thread nào. Android gọi kiểu thiết kế này là làm cho function **main-safe**. ([Android Developers][2])

---

# 8. Ví dụ hoàn chỉnh với ViewModel

## UI State

```kotlin
sealed interface FileUiState {

    data object Idle : FileUiState

    data object Loading : FileUiState

    data class Success(
        val text: String
    ) : FileUiState

    data class Error(
        val message: String
    ) : FileUiState
}
```

---

## Repository

```kotlin
class FileRepository(
    private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO
) {

    suspend fun readLargeFile(file: File): String =
        withContext(ioDispatcher) {

            file.bufferedReader().use {
                it.readText()
            }
        }
}
```

---

## ViewModel

```kotlin
class FileViewModel(
    private val repository: FileRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<FileUiState>(FileUiState.Idle)

    val uiState: StateFlow<FileUiState> =
        _uiState.asStateFlow()

    private var loadJob: Job? = null

    fun load(file: File) {

        loadJob?.cancel()

        loadJob = viewModelScope.launch {

            Log.d("FileFlow", "Loading")

            _uiState.value = FileUiState.Loading

            try {

                val text = repository.readLargeFile(file)

                Log.d("FileFlow", "Success")

                _uiState.value =
                    FileUiState.Success(text)

            } catch (e: CancellationException) {

                Log.d("FileFlow", "Cancelled")

                throw e

            } catch (e: Exception) {

                Log.e(
                    "FileFlow",
                    "Error",
                    e
                )

                _uiState.value =
                    FileUiState.Error(
                        e.message ?: "Unknown error"
                    )
            }
        }
    }

    fun cancel() {
        loadJob?.cancel()
    }
}
```

`viewModelScope` gắn coroutine với `ViewModel`; khi ViewModel bị clear, các coroutine trong scope này được cancel tự động. ([Android Developers][4])

---

# 9. State transition

Ví dụ trên có state machine:

```text
                    load()
                      │
                      ▼
                  ┌─────────┐
            ┌────►│ Loading │
            │     └────┬────┘
            │          │
            │     ┌────┴─────┐
            │     │          │
            │     ▼          ▼
            │ ┌─────────┐ ┌───────┐
            │ │ Success │ │ Error │
            │ └─────────┘ └───┬───┘
            │                  │
            │               Retry
            └──────────────────┘
```

Nếu user cancel:

```text
Loading
   │
   │ cancel()
   ▼
Cancelled
```

Việc model hóa trạng thái rõ ràng giúp UI không phải tự suy đoán:

```text
loading == false
data == null
error == null

→ trạng thái gì?
```

---

# 10. Cancellation

Cancellation đặc biệt quan trọng với background work.

Ví dụ user mở:

```text
Screen A
```

App bắt đầu download.

Sau đó user:

```text
Screen A → Screen B
```

Nếu kết quả của Screen A không còn giá trị, tiếp tục download chỉ làm tốn tài nguyên.

Với:

```kotlin
viewModelScope.launch {
    repository.loadData()
}
```

khi ViewModel thực sự bị clear, coroutine trong `viewModelScope` được cancel tự động. ([Android Developers][4])

---

## Rotation thì sao?

Đây là lý do ViewModel rất hữu ích.

```text
Activity
   │
Rotate
   ▼
Activity destroyed
   │
Activity recreated

        nhưng

ViewModel
   │
   └── vẫn tồn tại qua configuration change
```

Do đó công việc được khởi chạy trong `viewModelScope` có thể sống qua configuration change thay vì bị restart chỉ vì xoay màn hình. Android cũng khuyến nghị đặt business-logic coroutine trong ViewModel vì lý do lifecycle và testability. ([Android Developers][5])

---

# 11. Structured Concurrency

Một pattern rất quan trọng:

```text
Scope
 │
 ├── Coroutine A
 │
 ├── Coroutine B
 │
 └── Coroutine C
```

Nếu scope bị cancel:

```text
Scope CANCEL
 │
 ├── A cancel
 ├── B cancel
 └── C cancel
```

Đây là **structured concurrency**.

Coroutines trên Android cung cấp cancellation propagation theo hierarchy và cho phép các tác vụ được quản lý thông qua scope thay vì tạo background task không có owner. ([Android Developers][2])

---

# 12. `launch` và `async`

## `launch`

Dùng khi không cần trả kết quả trực tiếp:

```kotlin
viewModelScope.launch {
    repository.refresh()
}
```

Tư duy:

```text
start work
   │
   └── don't return value directly
```

---

## `async`

Dùng khi thực hiện các operation song song và cần kết quả:

```kotlin
coroutineScope {

    val profile = async {
        repository.loadProfile()
    }

    val posts = async {
        repository.loadPosts()
    }

    UserScreenData(
        profile = profile.await(),
        posts = posts.await()
    )
}
```

```text
            coroutineScope
                 │
          ┌──────┴──────┐
          ▼             ▼
     Load profile    Load posts
          │             │
          └──────┬──────┘
                 ▼
              await
                 │
                 ▼
              Result
```

Android hướng dẫn dùng `async` cho parallel decomposition bên trong một coroutine/suspend context, thay vì coi nó như một fire-and-forget mechanism. ([Android Developers][3])

---

# 13. Background Thread ≠ Background Work tồn tại mãi

Đây là phần rất dễ nhầm.

Coroutine như:

```kotlin
viewModelScope.launch {
    upload()
}
```

phù hợp khi:

```text
App đang chạy
       ↓
Perform work
       ↓
Return result
```

Nhưng nếu yêu cầu là:

```text
Upload phải hoàn thành

kể cả khi

user rời app
app process bị kill
device restart
```

thì coroutine thông thường không phải giải pháp thích hợp.

Android phân biệt **asynchronous in-process work** với **persistent work**; với công việc phải tiếp tục đáng tin cậy khi user rời màn hình/app hoặc sau restart, WorkManager là API phù hợp. ([Android Developers][6])

---

# 14. Coroutine hay WorkManager?

```text
                    Background work
                           │
                 Must survive app exit?
                    /              \
                  No                Yes
                  │                  │
            Coroutine          WorkManager
```

| Requirement                            | Công cụ     |
| -------------------------------------- | ----------- |
| Load màn hình                          | Coroutine   |
| API request hiện tại                   | Coroutine   |
| Đọc file                               | Coroutine   |
| Parse JSON                             | Coroutine   |
| CPU calculation                        | Coroutine   |
| Sync phải hoàn thành sau khi app thoát | WorkManager |
| Upload cần retry đáng tin cậy          | WorkManager |
| Periodic synchronization               | WorkManager |

Android hiện mô tả coroutine là lựa chọn tiêu chuẩn cho asynchronous work không cần tồn tại sau khi app đóng, và WorkManager cho work cần thực thi đáng tin cậy sau đó. ([Android Developers][7])

---

# 15. Background Thread không phải Service

Một lỗi khái niệm rất phổ biến:

```text
Service = Background Thread
```

**Sai.**

Android `Service` là một **application component**, không phải một thread.

Theo Android Developers, mặc định Service vẫn chạy trên **main thread của process chứa nó**; nếu Service thực hiện blocking hoặc CPU-heavy work thì vẫn phải chuyển công việc đó khỏi main thread. ([Android Developers][8])

```text
Service
  │
  │ callback
  ▼
Main Thread
  │
  │ blocking work?
  ▼
Coroutine / worker thread
```

---

# 16. Debug bằng log state transition

Thực hành tốt cho bài này:

```kotlin
Log.d(
    "BackgroundTask",
    "START thread=${Thread.currentThread().name}"
)
```

Sau đó:

```kotlin
withContext(Dispatchers.IO) {

    Log.d(
        "BackgroundTask",
        "IO thread=${Thread.currentThread().name}"
    )
}
```

Ví dụ Logcat:

```text
START thread=main

IO thread=DefaultDispatcher-worker-1

SUCCESS
```

### Lưu ý

Không nên viết logic production phụ thuộc vào tên thread như:

```kotlin
if (
    Thread.currentThread().name ==
    "DefaultDispatcher-worker-1"
)
```

Dispatcher dùng thread pool và coroutine không được đảm bảo phải chạy trên đúng một thread từ đầu đến cuối sau các lần suspend/resume. ([Android Developers][3])

---

# 17. Testing Background Work

Một thiết kế khó test:

```kotlin
class Repository {

    suspend fun load() =
        withContext(Dispatchers.IO) {
            ...
        }
}
```

Một thiết kế linh hoạt hơn:

```kotlin
class Repository(
    private val ioDispatcher:
        CoroutineDispatcher
) {

    suspend fun load() =
        withContext(ioDispatcher) {
            ...
        }
}
```

Production:

```kotlin
Repository(
    Dispatchers.IO
)
```

Test:

```kotlin
Repository(
    StandardTestDispatcher(
        testScheduler
    )
)
```

Android khuyến nghị sử dụng `runTest` cho coroutine tests và inject test dispatchers để execution trở nên kiểm soát, predictable hơn. ([Android Developers][9])

---

## Unit test ví dụ

```kotlin
@Test
fun load_returns_data() = runTest {

    val dispatcher =
        StandardTestDispatcher(
            testScheduler
        )

    val repository =
        FakeRepository(dispatcher)

    val result =
        repository.load()

    assertEquals(
        "Hello",
        result
    )
}
```

---

# 18. Những lỗi thường gặp

## ❌ 1. Blocking Main Thread

```kotlin
fun onClick() {
    Thread.sleep(5000)
}
```

Hậu quả:

```text
Button click
    ↓
Main blocked
    ↓
UI freeze
    ↓
No input
    ↓
Possible ANR
```

Blocking UI thread quá lâu là nguyên nhân trực tiếp dẫn tới trải nghiệm ứng dụng unresponsive và ANR. ([Android Developers][10])

---

## ❌ 2. Nghĩ rằng `suspend` tự chạy background

```kotlin
suspend fun calculate() {
    expensiveCalculation()
}
```

Không đúng.

Nên:

```kotlin
suspend fun calculate() =
    withContext(Dispatchers.Default) {
        expensiveCalculation()
    }
```

([Android Developers][3])

---

## ❌ 3. Dùng `IO` cho mọi thứ

```kotlin
withContext(Dispatchers.IO) {
    hugeCpuCalculation()
}
```

Nên:

```kotlin
withContext(Dispatchers.Default) {
    hugeCpuCalculation()
}
```

`IO` tối ưu cho disk/network I/O, còn `Default` dành cho CPU-intensive tasks. ([Android Developers][3])

---

## ❌ 4. Tạo `Thread()` khắp code

```kotlin
Thread {
    ...
}.start()
```

Không phải lúc nào cũng sai, nhưng với Android Kotlin hiện đại, coroutines cung cấp abstraction phù hợp hơn cho asynchronous work với cancellation, structured concurrency và Jetpack integration. ([Android Developers][2])

---

## ❌ 5. Fire-and-forget không có lifecycle owner

Ví dụ nên tránh trong application code:

```kotlin
GlobalScope.launch {
    ...
}
```

Tư duy tốt hơn:

```text
Task thuộc Screen?
        ↓
ViewModelScope

Task thuộc Composition?
        ↓
Composition-bound scope

Task phải tồn tại sau app?
        ↓
WorkManager
```

Lifecycle libraries cung cấp các scope gắn trực tiếp với ViewModel và Composition để coroutine được cancel theo owner thích hợp. ([Android Developers][4])

---

# 19. Sơ đồ kiến trúc đề xuất

```text
┌─────────────────────────────────────────────┐
│                    UI                       │
│              Jetpack Compose                │
└───────────────────┬─────────────────────────┘
                    │ event
                    ▼
┌─────────────────────────────────────────────┐
│                 ViewModel                   │
│                                             │
│ viewModelScope.launch                       │
│ Loading → Success / Error                   │
└───────────────────┬─────────────────────────┘
                    │ suspend
                    ▼
┌─────────────────────────────────────────────┐
│                 Repository                  │
│                                             │
│ main-safe API                               │
└───────────────┬───────────────┬─────────────┘
                │               │
                ▼               ▼

       Dispatchers.IO     Dispatchers.Default
            │                    │
       Network/File          CPU work
       Database              Parsing
            │                Algorithm
            └─────────┬──────────┘
                      │
                      ▼
                   Result
                      │
                      ▼
                 ViewModel
                      │
                      ▼
                  StateFlow
                      │
                      ▼
                     UI
```

---

# 20. Thực hành

## Bài thực hành: Load một file lớn

### Bước 1 — Tạo task blocking

```kotlin
fun readFile(file: File): String {
    return file.readText()
}
```

---

### Bước 2 — Chuyển khỏi Main Thread

```kotlin
suspend fun readFile(
    file: File
): String =
    withContext(Dispatchers.IO) {
        file.readText()
    }
```

---

### Bước 3 — Gọi từ ViewModel

```kotlin
viewModelScope.launch {

    val result =
        repository.readFile(file)

    _uiState.value =
        FileUiState.Success(result)
}
```

---

### Bước 4 — Thêm state

```text
Idle
 ↓
Loading
 ↓
Success

hoặc

Loading
 ↓
Error
```

---

### Bước 5 — Thêm cancellation

```kotlin
private var job: Job? = null

fun load() {

    job?.cancel()

    job = viewModelScope.launch {
        ...
    }
}
```

---

### Bước 6 — Log

```kotlin
Log.d(
    "FileTask",
    "state=Loading"
)
```

```kotlin
Log.d(
    "FileTask",
    "state=Success"
)
```

---

# 21. Bài tập

## Yêu cầu

Xây dựng một màn hình có nút:

```text
START LONG TASK
```

Khi nhấn:

```text
START
  │
  ▼
Loading
  │
  ├──────── Background work
  │
  ▼
Success
```

Thêm nút:

```text
CANCEL
```

Luồng hoàn chỉnh:

```text
                   ┌───────────┐
                   │   Idle    │
                   └─────┬─────┘
                         │ Start
                         ▼
                   ┌───────────┐
              ┌────│  Loading  │─────┐
              │    └───────────┘     │
              │                      │
          Cancel                   Complete
              │                      │
              ▼                      ▼
        ┌───────────┐          ┌───────────┐
        │ Cancelled │          │  Success  │
        └───────────┘          └───────────┘
```

### Giải thích trong README

Trả lời được:

1. Task nào đang chạy background?
2. Vì sao không chạy nó trên Main Thread?
3. Dispatcher nào được sử dụng?
4. Khi nào coroutine bị cancel?
5. Rotate màn hình có làm task mất không?
6. Nếu app bị kill thì task có tiếp tục không?
7. Nếu task phải tiếp tục sau app exit, sẽ đổi sang giải pháp nào?

---

# 22. Artifact cho Portfolio

Một artifact nhỏ nhưng khá tốt cho portfolio:

```text
background-thread-demo/
│
├── FileRepository.kt
├── FileViewModel.kt
├── FileUiState.kt
├── FileScreen.kt
├── FileRepositoryTest.kt
│
├── screenshots/
│   ├── idle.png
│   ├── loading.png
│   ├── success.png
│   └── cancelled.png
│
└── README.md
```

README có thể chứa:

```text
Problem
   ↓
Main Thread blocking

Solution
   ↓
Coroutine
   ↓
Dispatchers.IO
   ↓
ViewModelScope
   ↓
Cancellation
   ↓
StateFlow
```

---

# 23. Checklist hoàn thành

* [ ] Giải thích được Background Thread là gì.
* [ ] Phân biệt Background Thread và Main Thread.
* [ ] Hiểu `suspend` không có nghĩa là background.
* [ ] Biết `Dispatchers.Main`.
* [ ] Biết `Dispatchers.IO`.
* [ ] Biết `Dispatchers.Default`.
* [ ] Sử dụng được `withContext()`.
* [ ] Biết khái niệm **main-safe function**.
* [ ] Sử dụng được `viewModelScope`.
* [ ] Hiểu cancellation.
* [ ] Biết ảnh hưởng của configuration change.
* [ ] Không coi `Service` là một thread.
* [ ] Phân biệt Coroutine và WorkManager.
* [ ] Log được state transitions.
* [ ] Test coroutine bằng `runTest`.
* [ ] Có demo nhỏ đưa vào portfolio.

---

# 24. Ghi chú production

Trước khi release, hãy kiểm tra:

| Câu hỏi                                 | Cần kiểm tra            |
| --------------------------------------- | ----------------------- |
| Có blocking Main Thread không?          | Network, file, CPU      |
| Dispatcher đúng chưa?                   | IO vs Default           |
| Function có main-safe không?            | Data layer              |
| Task có lifecycle owner không?          | ViewModel/Composition   |
| User rời màn hình thì sao?              | Cancellation            |
| Rotate thì sao?                         | ViewModel + state       |
| App process chết thì sao?               | Có cần WorkManager?     |
| Error có được map thành UI state không? | Error handling          |
| Retry có hợp lý không?                  | Network/transient error |
| Có duplicate task không?                | Job management          |
| Test có deterministic không?            | Inject dispatcher       |
| Có log/debug thông tin cần thiết không? | State transitions       |

---

# 25. Ghi nhớ nhanh

```text
              BACKGROUND THREAD / WORK

                        │
          ┌─────────────┴─────────────┐
          │                           │
        I/O                         CPU
          │                           │
 Dispatchers.IO            Dispatchers.Default
          │                           │
 Network                    Calculation
 File                       Parsing
 Disk                       Image processing
          │                           │
          └─────────────┬─────────────┘
                        │
                 Coroutine Scope
                        │
                  viewModelScope
                        │
                   Cancellation
                        │
                     Result
                        │
                  Dispatchers.Main
                        │
                       UI
```

### Công thức cần nhớ

```text
Main Thread
    =
UI + quick work
```

```text
Blocking I/O
    →
Dispatchers.IO
```

```text
CPU-heavy work
    →
Dispatchers.Default
```

```text
suspend
    ≠
background thread
```

```text
Screen-related work
    →
Coroutine + lifecycle-aware scope
```

```text
Must survive app/process exit
    →
WorkManager
```

Đó là nền tảng quan trọng để đi tiếp từ **Threading Basics** sang **Coroutines, Coroutine Scope, Dispatcher, Job, Cancellation, Async/Await và structured concurrency** trong phần Asynchronism của Android. ([Android Developers][2])

[1]: https://developer.android.com/guide/components/processes-and-threads?utm_source=chatgpt.com "Processes and threads overview | App quality"
[2]: https://developer.android.com/kotlin/coroutines "Kotlin coroutines on Android  |  Android Developers"
[3]: https://developer.android.com/kotlin/coroutines/coroutines-adv "Improve app performance with Kotlin coroutines  |  Android Developers"
[4]: https://developer.android.com/topic/libraries/architecture/coroutines "Use Kotlin coroutines with lifecycle-aware components  |  App architecture  |  Android Developers"
[5]: https://developer.android.com/kotlin/coroutines/coroutines-best-practices "Best practices for coroutines in Android  |  Kotlin  |  Android Developers"
[6]: https://developer.android.com/develop/background-work/background-tasks/asynchronous "Asynchronous background processing  |  Background work  |  Android Developers"
[7]: https://developer.android.com/develop/background-work/background-tasks/persistent "Task scheduling  |  Background work  |  Android Developers"
[8]: https://developer.android.com/develop/background-work/services?utm_source=chatgpt.com "Services overview | Background work"
[9]: https://developer.android.com/kotlin/coroutines/test "Testing Kotlin coroutines on Android  |  Android Developers"
[10]: https://developer.android.com/topic/performance/vitals/anr?utm_source=chatgpt.com "ANRs | App quality"
