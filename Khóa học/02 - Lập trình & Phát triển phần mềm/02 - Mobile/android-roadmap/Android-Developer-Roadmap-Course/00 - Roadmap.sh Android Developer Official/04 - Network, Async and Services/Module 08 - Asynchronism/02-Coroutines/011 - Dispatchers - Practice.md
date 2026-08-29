# 011 — Dispatchers

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 08 — Asynchronism         |
| **Nhóm nội dung**       | Coroutines                       |
| **Nguồn roadmap**       | Asynchronism / Coroutines        |
| **Loại bài**            | Async                            |
| **Thứ tự trong module** | 011                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

**Dispatcher** trong Kotlin Coroutines quyết định coroutine sẽ được thực thi trên **thread hoặc nhóm thread nào**.

Trong Android, lựa chọn dispatcher đúng đặc biệt quan trọng vì:

* UI phải được xử lý trên **Main Thread**.
* Công việc CPU nặng không được làm trên Main Thread.
* Blocking I/O như đọc file hoặc API cũ có thể làm UI bị đứng nếu chạy trên Main Thread.
* Coroutine phải phối hợp đúng với `ViewModel`, lifecycle và cancellation.
* Việc lựa chọn dispatcher ảnh hưởng trực tiếp tới:

  * UX.
  * hiệu năng.
  * ANR.
  * battery.
  * khả năng test.
  * maintainability.

Ý tưởng quan trọng nhất:

> **Dispatcher quyết định coroutine chạy ở đâu, còn CoroutineScope quyết định coroutine sống bao lâu.**

---

# 2. Mục tiêu học tập

Sau bài học này, có thể:

* Giải thích được Dispatcher trong Kotlin Coroutines.
* Phân biệt:

  * `Dispatchers.Main`
  * `Dispatchers.IO`
  * `Dispatchers.Default`
  * `Dispatchers.Unconfined`
* Biết khi nào sử dụng `withContext()`.
* Không thực hiện blocking work trên Main Thread.
* Hiểu mối quan hệ giữa:

  * Coroutine.
  * CoroutineScope.
  * Dispatcher.
  * Thread.
  * Lifecycle.
* Biết cách xử lý cancellation khi chuyển dispatcher.
* Thiết kế Data Layer theo nguyên tắc **main-safe**.
* Inject dispatcher để coroutine dễ test hơn.

---

# 3. Dispatcher là gì?

Một coroutine cần một **CoroutineContext** để xác định môi trường thực thi.

Dispatcher là một thành phần quan trọng trong context đó.

Ví dụ:

```kotlin
viewModelScope.launch(Dispatchers.IO) {
    loadData()
}
```

Ở đây:

```text
viewModelScope
     │
     ├── quản lý vòng đời coroutine
     │
     └── Dispatchers.IO
             │
             └── quyết định nơi coroutine thực thi
```

Có thể hiểu đơn giản:

```text
Coroutine
    │
    ▼
CoroutineScope
    │
    ▼
CoroutineContext
    │
    ├── Job
    │
    ├── Dispatcher
    │
    └── CoroutineName...
```

---

# 4. Tại sao Android cần Dispatcher?

Android có một thread đặc biệt:

```text
Main Thread
```

Main Thread chịu trách nhiệm cho:

* render UI.
* xử lý click.
* animation.
* Compose recomposition.
* lifecycle callback.
* cập nhật View.

Nếu thực hiện công việc nặng trên Main Thread:

```text
Main Thread
   │
   ├── Render UI
   ├── Handle click
   ├── Animation
   │
   └── Heavy task 5 giây ❌
           │
           ▼
       UI bị đứng
```

Người dùng có thể gặp:

* lag.
* animation giật.
* click không phản hồi.
* frozen screen.
* ANR.

Dispatcher giúp chuyển công việc phù hợp sang worker thread.

```text
                     ┌──────── Main
Coroutine ───────────┼──────── IO
                     └──────── Default
```

---

# 5. Các Dispatcher quan trọng

Kotlin Coroutines cung cấp một số dispatcher phổ biến.

| Dispatcher               | Công việc phù hợp              |
| ------------------------ | ------------------------------ |
| `Dispatchers.Main`       | UI                             |
| `Dispatchers.IO`         | Blocking I/O                   |
| `Dispatchers.Default`    | CPU-intensive                  |
| `Dispatchers.Unconfined` | Trường hợp đặc biệt, hiếm dùng |

---

# 6. Dispatchers.Main

`Dispatchers.Main` sử dụng **Main Thread** của Android.

Thích hợp cho:

* cập nhật UI.
* cập nhật state.
* thao tác với View.
* xử lý UI event.

Ví dụ:

```kotlin
viewModelScope.launch(Dispatchers.Main) {
    uiState.value = UiState.Loading
}
```

Trong Android, coroutine được launch từ `viewModelScope` thường đã bắt đầu ở Main dispatcher, vì vậy thường không cần viết:

```kotlin
viewModelScope.launch(Dispatchers.Main)
```

mà chỉ cần:

```kotlin
viewModelScope.launch {
    uiState.value = UiState.Loading
}
```

---

## Ví dụ Compose

```kotlin
class UserViewModel : ViewModel() {

    private val _uiState = MutableStateFlow<UserUiState>(
        UserUiState.Loading
    )

    val uiState = _uiState.asStateFlow()

    fun loadUser() {
        viewModelScope.launch {
            _uiState.value = UserUiState.Loading

            // ...
        }
    }
}
```

State được cập nhật từ coroutine gắn với `ViewModel`.

---

# 7. Dispatchers.IO

`Dispatchers.IO` được thiết kế cho các tác vụ **blocking I/O**.

Ví dụ:

* đọc file.
* ghi file.
* đọc database thông qua API blocking.
* socket blocking.
* legacy HTTP client.
* thao tác filesystem.

Ví dụ:

```kotlin
suspend fun readFile(): String {
    return withContext(Dispatchers.IO) {
        File("data.txt").readText()
    }
}
```

Luồng xử lý:

```text
Main Thread
    │
    │ gọi readFile()
    ▼
withContext(IO)
    │
    ▼
IO Worker Thread
    │
    ├── đọc file
    │
    └── hoàn thành
    ▼
Main Thread
    │
    ▼
Update UI
```

---

# 8. Dispatchers.Default

`Dispatchers.Default` dành cho công việc **CPU-intensive**.

Ví dụ:

* sort lượng dữ liệu lớn.
* parse dữ liệu rất lớn.
* xử lý ảnh.
* mã hóa.
* tính toán toán học.
* thuật toán AI/ML chạy CPU.
* transformation dữ liệu nặng.

Ví dụ:

```kotlin
suspend fun calculateScore(
    values: List<Int>
): Int {
    return withContext(Dispatchers.Default) {
        values
            .map { it * it }
            .sum()
    }
}
```

---

## IO và Default khác nhau thế nào?

### CPU-bound

CPU phải liên tục tính toán.

```text
Input
  │
  ▼
CPU
  │
  ├── calculate
  ├── calculate
  ├── calculate
  └── calculate
```

→ sử dụng:

```kotlin
Dispatchers.Default
```

---

### I/O-bound

CPU chủ yếu phải chờ thiết bị hoặc hệ thống khác.

```text
CPU
 │
 ├── request file
 │
 ▼
WAIT...
 │
 ▼
Disk
 │
 ▼
Result
```

→ nếu API blocking, sử dụng:

```kotlin
Dispatchers.IO
```

---

# 9. Dispatchers.Unconfined

`Dispatchers.Unconfined` không cố định coroutine trên một thread cụ thể.

Ví dụ:

```kotlin
launch(Dispatchers.Unconfined) {
    println(Thread.currentThread().name)

    delay(100)

    println(Thread.currentThread().name)
}
```

Coroutine có thể:

```text
start
 │
 ▼
Thread A
 │
 │ suspend
 ▼
resume
 │
 ▼
Thread B
```

Điều này làm flow thực thi khó dự đoán hơn.

Trong Android application thông thường:

> Không nên chọn `Dispatchers.Unconfined` chỉ với mục đích "chạy nhanh hơn".

Nó chủ yếu hữu ích trong một số trường hợp framework hoặc testing đặc biệt.

---

# 10. Bảng lựa chọn nhanh

| Công việc                    | Dispatcher |
| ---------------------------- | ---------- |
| Update UI                    | `Main`     |
| Thay đổi UI state            | `Main`     |
| Đọc file blocking            | `IO`       |
| Ghi file blocking            | `IO`       |
| JDBC / API database blocking | `IO`       |
| Socket blocking              | `IO`       |
| Resize ảnh bằng CPU          | `Default`  |
| Thuật toán nặng              | `Default`  |
| Sort hàng triệu phần tử      | `Default`  |
| Parse dữ liệu cực lớn        | `Default`  |
| Compose UI                   | `Main`     |

Có thể nhớ:

```text
UI
 │
 ▼
MAIN

Waiting for I/O
 │
 ▼
IO

Heavy computation
 │
 ▼
DEFAULT
```

---

# 11. `withContext()`

Một trong những API quan trọng nhất khi làm việc với Dispatcher là:

```kotlin
withContext()
```

Ví dụ:

```kotlin
suspend fun loadUser(): User {

    return withContext(Dispatchers.IO) {
        userDao.getUser()
    }
}
```

`withContext()`:

1. suspend coroutine hiện tại.
2. chuyển execution context.
3. thực hiện block.
4. nhận kết quả.
5. tiếp tục coroutine.

---

## Sơ đồ

```text
viewModelScope.launch
        │
        ▼
   Main Dispatcher
        │
        │ loadUser()
        ▼
withContext(IO)
        │
        ▼
    IO Dispatcher
        │
        │ Database
        ▼
      User
        │
        ▼
   Main Dispatcher
        │
        ▼
   Update UI State
```

Điểm quan trọng:

> `withContext()` không tạo một coroutine độc lập mới giống `launch()`.

Nó chỉ chuyển context của một đoạn công việc trong coroutine hiện tại.

---

# 12. Ví dụ sai: block Main Thread

Ví dụ:

```kotlin
fun loadFile() {
    viewModelScope.launch {

        val text = File("large_file.txt").readText()

        _uiState.value = UiState.Success(text)
    }
}
```

Nếu thao tác đọc file mất lâu:

```text
Main
 │
 ├── read file...
 │
 ├── read file...
 │
 ├── read file...
 │
 └── UI frozen ❌
```

---

# 13. Cách đúng

```kotlin
fun loadFile() {

    viewModelScope.launch {

        val text = withContext(Dispatchers.IO) {
            File("large_file.txt").readText()
        }

        _uiState.value = UiState.Success(text)
    }
}
```

Execution:

```text
MAIN
 │
 ├── Loading
 │
 ▼
IO
 │
 ├── read file
 │
 ▼
MAIN
 │
 └── Success
```

---

# 14. Main-safe function

Một nguyên tắc thiết kế quan trọng:

> Suspend function ở Data Layer nên **main-safe**.

Nghĩa là caller có thể gọi nó từ Main Thread mà không lo function đó block UI.

Không nên bắt ViewModel phải biết:

```text
Repository đang dùng database gì?
Có blocking không?
Có đọc file không?
Có chạy CPU nặng không?
```

---

## Không tốt

```kotlin
class UserRepository {

    suspend fun loadUser(): User {
        return blockingDatabase.loadUser()
    }
}
```

ViewModel buộc phải nhớ:

```kotlin
viewModelScope.launch {

    val user = withContext(Dispatchers.IO) {
        repository.loadUser()
    }

}
```

ViewModel đang biết quá nhiều về implementation của Repository.

---

# 15. Thiết kế tốt hơn

Repository tự bảo đảm main-safety.

```kotlin
class UserRepository(
    private val ioDispatcher: CoroutineDispatcher =
        Dispatchers.IO
) {

    suspend fun loadUser(): User {
        return withContext(ioDispatcher) {
            blockingDatabase.loadUser()
        }
    }
}
```

ViewModel:

```kotlin
viewModelScope.launch {

    val user = repository.loadUser()

    _uiState.value = UserUiState.Success(user)
}
```

Kiến trúc:

```text
ViewModel
   │
   │ loadUser()
   ▼
Repository
   │
   ├── quyết định Dispatcher
   ▼
Data Source
```

Thay vì:

```text
ViewModel
   │
   ├── phải biết IO
   ├── phải biết database blocking
   └── phải quản lý implementation detail
```

---

# 16. Retrofit có cần `Dispatchers.IO` không?

Một hiểu nhầm phổ biến là:

```kotlin
withContext(Dispatchers.IO) {
    api.getUsers()
}
```

luôn bắt buộc.

Nếu đang sử dụng Retrofit với API dạng:

```kotlin
suspend fun getUsers(): List<User>
```

thì network execution đã được Retrofit/HTTP stack xử lý bất đồng bộ.

Vì vậy thường có thể viết:

```kotlin
suspend fun getUsers(): List<User> {
    return api.getUsers()
}
```

mà không bắt buộc bao thêm:

```kotlin
withContext(Dispatchers.IO)
```

Nguyên tắc cần nhớ:

```text
suspend ≠ automatically IO
```

Nhưng cũng:

```text
suspend API async
≠
luôn cần withContext(IO)
```

Cần xem chính API bên dưới có **block thread** hay không.

---

# 17. Room và Dispatcher

Room hỗ trợ coroutine với DAO dạng:

```kotlin
@Query("SELECT * FROM users")
suspend fun getUsers(): List<User>
```

Room quản lý việc thực thi query bất đồng bộ cho suspend DAO.

Do đó ViewModel thường có thể:

```kotlin
viewModelScope.launch {

    val users = repository.getUsers()

    _uiState.value =
        UserUiState.Success(users)
}
```

Không cần rải `Dispatchers.IO` khắp UI Layer.

---

# 18. Dispatcher và Structured Concurrency

Ví dụ:

```kotlin
viewModelScope.launch {

    val user = withContext(Dispatchers.IO) {
        repository.loadUser()
    }

}
```

Cấu trúc vẫn là:

```text
ViewModelScope
     │
     └── Coroutine
            │
            └── withContext(IO)
```

Không phải:

```text
ViewModelScope

Coroutine A

IO Coroutine B chạy độc lập
```

Do đó parent coroutine vẫn quản lý lifecycle của flow.

---

# 19. Dispatcher và Cancellation

Giả sử:

```kotlin
viewModelScope.launch {

    val data = withContext(Dispatchers.IO) {
        loadLargeData()
    }

}
```

Khi ViewModel bị clear:

```text
ViewModel
   │
   ▼
onCleared()
   │
   ▼
viewModelScope cancelled
   │
   ▼
Coroutine cancelled
```

Nếu các API bên dưới hỗ trợ cancellation, công việc có thể dừng theo coroutine.

---

# 20. CPU loop và cancellation

Một vòng lặp CPU dài có thể không có suspension point.

Ví dụ:

```kotlin
withContext(Dispatchers.Default) {

    for (i in 0 until 100_000_000) {
        calculate(i)
    }
}
```

Nếu muốn phản hồi cancellation tốt hơn:

```kotlin
withContext(Dispatchers.Default) {

    for (i in 0 until 100_000_000) {

        ensureActive()

        calculate(i)
    }
}
```

Hoặc trong một số tình huống:

```kotlin
yield()
```

---

## Luồng

```text
CPU LOOP
 │
 ├── work
 ├── ensureActive()
 ├── work
 ├── ensureActive()
 │
 └── cancelled?
          │
      YES ▼
        STOP
```

---

# 21. Blocking API và cancellation

Không phải mọi blocking API đều tự động dừng ngay khi coroutine bị cancel.

Ví dụ:

```kotlin
withContext(Dispatchers.IO) {
    someLegacyBlockingCall()
}
```

Coroutine bị cancel không có nghĩa mọi thư viện blocking bên dưới đều chắc chắn dừng ngay tức thì.

Vì vậy cần kiểm tra:

* API có hỗ trợ cancellation không?
* HTTP call có thể cancel không?
* stream có đóng được không?
* resource có được release không?

---

# 22. `launch()` và `withContext()`

Hai API thường bị nhầm.

## `launch()`

Tạo coroutine mới.

```kotlin
scope.launch(Dispatchers.IO) {
    saveData()
}
```

Trả về:

```kotlin
Job
```

---

## `withContext()`

Chuyển context và trả về kết quả.

```kotlin
val data = withContext(Dispatchers.IO) {
    loadData()
}
```

Có thể hình dung:

```text
launch()

Parent
 │
 └── Child Coroutine
```

Trong khi:

```text
withContext()

Coroutine
 │
 ├── Main
 │
 ├── IO
 │
 └── Main
```

---

# 23. `async()` và Dispatcher

Nếu cần nhiều kết quả chạy song song:

```kotlin
coroutineScope {

    val user = async(Dispatchers.IO) {
        loadUser()
    }

    val posts = async(Dispatchers.IO) {
        loadPosts()
    }

    UserProfile(
        user = user.await(),
        posts = posts.await()
    )
}
```

Sơ đồ:

```text
          coroutineScope
               │
       ┌───────┴───────┐
       ▼               ▼
 loadUser()         loadPosts()
       │               │
       └───────┬───────┘
               ▼
           await()
               │
               ▼
         UserProfile
```

Tuy nhiên nếu `loadUser()` và `loadPosts()` đã là các API main-safe, thường có thể để chúng tự quản lý dispatcher thay vì buộc dispatcher từ caller.

---

# 24. Dispatcher và ViewModel

Một flow phổ biến:

```kotlin
fun loadUsers() {

    viewModelScope.launch {

        _uiState.value =
            UserUiState.Loading

        try {

            val users =
                repository.getUsers()

            _uiState.value =
                UserUiState.Success(users)

        } catch (e: Exception) {

            _uiState.value =
                UserUiState.Error(
                    e.message ?: "Unknown error"
                )
        }
    }
}
```

Repository:

```kotlin
class UserRepository(
    private val ioDispatcher: CoroutineDispatcher
) {

    suspend fun getUsers(): List<User> =
        withContext(ioDispatcher) {

            localDataSource.getUsers()

        }
}
```

---

# 25. State flow hoàn chỉnh

```text
User Action
    │
    ▼
ViewModel
    │
    ▼
viewModelScope
    │
    ├── Loading
    │
    ▼
Repository
    │
    ▼
Dispatcher.IO
    │
    ▼
Data Source
    │
    ├── Success
    │      │
    │      ▼
    │   UI State Success
    │
    └── Error
           │
           ▼
       UI State Error
```

---

# 26. Dispatcher và Lifecycle

Dispatcher và lifecycle giải quyết hai vấn đề khác nhau.

```text
CoroutineScope
       │
       └── Coroutine sống bao lâu?
```

Trong khi:

```text
Dispatcher
       │
       └── Coroutine chạy ở đâu?
```

Ví dụ:

```kotlin
viewModelScope.launch {
    repository.syncData()
}
```

`viewModelScope`:

```text
Lifecycle / lifetime
```

Repository:

```text
Dispatcher / execution
```

---

# 27. Không nên dùng `GlobalScope`

Ví dụ:

```kotlin
GlobalScope.launch(Dispatchers.IO) {
    repository.sync()
}
```

Coroutine có thể sống không gắn chặt với lifecycle mong muốn.

Trong Android thường ưu tiên:

```kotlin
viewModelScope
```

hoặc:

```kotlin
lifecycleScope
```

hoặc một application scope được thiết kế rõ ràng cho công việc thực sự cần sống lâu hơn màn hình.

---

# 28. Inject Dispatcher

Không nên hard-code dispatcher ở mọi nơi:

```kotlin
class Repository {

    suspend fun load() =
        withContext(Dispatchers.IO) {
            ...
        }
}
```

Có thể inject:

```kotlin
class Repository(
    private val ioDispatcher: CoroutineDispatcher
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
    ioDispatcher = Dispatchers.IO
)
```

Test có thể cung cấp dispatcher kiểm soát được:

```kotlin
Repository(
    ioDispatcher = testDispatcher
)
```

---

# 29. Tại sao Dispatcher Injection quan trọng?

Không inject:

```text
Test
 │
 ▼
Dispatchers.IO
 │
 ▼
Real threads
 │
 ▼
Timing khó kiểm soát
```

Inject:

```text
Test
 │
 ▼
TestDispatcher
 │
 ▼
Controlled scheduler
 │
 ▼
Deterministic test
```

Lợi ích:

* test nhanh.
* ít flaky.
* kiểm soát thời gian coroutine.
* dễ test cancellation.
* dễ test state transition.

---

# 30. Ví dụ hoàn chỉnh

## UI State

```kotlin
sealed interface UserUiState {

    data object Loading : UserUiState

    data class Success(
        val users: List<User>
    ) : UserUiState

    data class Error(
        val message: String
    ) : UserUiState
}
```

---

## Repository

```kotlin
class UserRepository(
    private val dataSource: UserDataSource,
    private val ioDispatcher: CoroutineDispatcher =
        Dispatchers.IO
) {

    suspend fun getUsers(): List<User> =
        withContext(ioDispatcher) {

            dataSource.getUsers()

        }
}
```

---

## ViewModel

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<UserUiState>(
            UserUiState.Loading
        )

    val uiState =
        _uiState.asStateFlow()

    fun loadUsers() {

        viewModelScope.launch {

            _uiState.value =
                UserUiState.Loading

            try {

                val users =
                    repository.getUsers()

                _uiState.value =
                    UserUiState.Success(users)

            } catch (
                e: CancellationException
            ) {

                throw e

            } catch (
                e: Exception
            ) {

                _uiState.value =
                    UserUiState.Error(
                        e.message ?: "Unknown error"
                    )
            }
        }
    }
}
```

Điểm đáng chú ý:

```kotlin
catch (e: CancellationException) {
    throw e
}
```

Không nên vô tình nuốt cancellation khi sử dụng `catch (Exception)`.

---

# 31. Sai lầm phổ biến

## 31.1 Dùng IO cho mọi thứ

Không nên:

```kotlin
withContext(Dispatchers.IO) {
    heavyImageProcessing()
}
```

nếu đây chủ yếu là CPU computation.

Nên:

```kotlin
withContext(Dispatchers.Default) {
    heavyImageProcessing()
}
```

---

## 31.2 Dùng Default cho network blocking

Không nên:

```kotlin
withContext(Dispatchers.Default) {
    blockingHttpCall()
}
```

Nếu API thực sự blocking:

```kotlin
withContext(Dispatchers.IO) {
    blockingHttpCall()
}
```

---

## 31.3 Chuyển dispatcher quá nhiều

Không cần:

```kotlin
withContext(Dispatchers.Main) {

    withContext(Dispatchers.IO) {

        withContext(Dispatchers.Default) {

            // ...

        }
    }
}
```

Dispatcher switching cũng có chi phí và khiến code khó hiểu hơn.

Hãy chuyển dispatcher tại nơi **thực sự sở hữu blocking/heavy work**.

---

# 32. `Dispatchers.Main.immediate`

Ngoài:

```kotlin
Dispatchers.Main
```

còn có:

```kotlin
Dispatchers.Main.immediate
```

Nếu coroutine hiện đã ở Main Thread, `Main.immediate` có thể thực thi ngay thay vì luôn schedule lại.

Đây thường là chi tiết framework/library-level hơn là thứ cần sử dụng ở mọi ViewModel.

Người mới nên ưu tiên hiểu:

```text
Main
IO
Default
withContext
main-safety
```

trước.

---

# 33. `limitedParallelism()`

Trong một số trường hợp production cần giới hạn mức song song.

Ví dụ:

```kotlin
val imageDispatcher =
    Dispatchers.Default
        .limitedParallelism(2)
```

Sau đó:

```kotlin
withContext(imageDispatcher) {
    processImage()
}
```

Có thể dùng khi không muốn:

```text
100 tasks
   │
   ▼
100 heavy operations đồng thời
```

mà giới hạn:

```text
100 tasks
   │
   ▼
max 2 chạy đồng thời
```

Điều này đặc biệt hữu ích với:

* CPU processing.
* resource giới hạn.
* database/file workflow đặc biệt.
* batch processing.

---

# 34. Decision Tree chọn Dispatcher

```text
                Có phải UI work?
                     │
              ┌──────┴──────┐
             YES            NO
              │              │
              ▼              ▼
             Main       Có block thread?
                             │
                     ┌───────┴───────┐
                    YES              NO
                     │                │
                     ▼                ▼
                     IO         CPU nặng?
                                    │
                            ┌───────┴───────┐
                           YES              NO
                            │                │
                            ▼                ▼
                         Default      Có thể không cần
                                     đổi Dispatcher
```

---

# 35. Quy tắc nhớ nhanh

```text
MAIN
│
└── UI

IO
│
└── blocking I/O

DEFAULT
│
└── CPU intensive
```

Hoặc:

> **Main = hiển thị**

> **IO = chờ**

> **Default = tính**

---

# 36. Thực hành

## Bài thực hành: xử lý file lớn

Giả sử ứng dụng cần:

1. đọc file JSON.
2. parse dữ liệu.
3. hiển thị kết quả.

Pipeline phù hợp:

```text
Button Click
    │
    ▼
Main
    │
    ▼
Read File
    │
    ▼
Dispatchers.IO
    │
    ▼
JSON String
    │
    ▼
Parse Large JSON
    │
    ▼
Dispatchers.Default
    │
    ▼
Model
    │
    ▼
Main
    │
    ▼
UI State Success
```

---

## Code minh họa

```kotlin
suspend fun loadUsersFromFile(
    file: File
): List<User> {

    val json = withContext(Dispatchers.IO) {
        file.readText()
    }

    return withContext(Dispatchers.Default) {
        parseUsers(json)
    }
}
```

ViewModel:

```kotlin
fun loadFile(file: File) {

    viewModelScope.launch {

        _uiState.value =
            UserUiState.Loading

        try {

            val users =
                repository.loadUsersFromFile(file)

            _uiState.value =
                UserUiState.Success(users)

        } catch (
            e: CancellationException
        ) {

            throw e

        } catch (
            e: Exception
        ) {

            _uiState.value =
                UserUiState.Error(
                    e.message ?: "Load failed"
                )
        }
    }
}
```

---

# 37. Debugging Dispatcher

Có thể log thread hiện tại:

```kotlin
Log.d(
    "Coroutine",
    "Thread = ${Thread.currentThread().name}"
)
```

Ví dụ:

```kotlin
viewModelScope.launch {

    Log.d(
        "Coroutine",
        "Before = ${Thread.currentThread().name}"
    )

    withContext(Dispatchers.IO) {

        Log.d(
            "Coroutine",
            "IO = ${Thread.currentThread().name}"
        )
    }

    Log.d(
        "Coroutine",
        "After = ${Thread.currentThread().name}"
    )
}
```

Kết quả có thể tương tự:

```text
Before = main

IO = DefaultDispatcher-worker-1

After = main
```

Không nên phụ thuộc vào tên hay số thứ tự worker thread cụ thể.

---

# 38. State transition để debug

Khi xử lý async flow nên log:

```text
IDLE
 │
 ▼
LOADING
 │
 ├───────────────┐
 ▼               ▼
SUCCESS         ERROR
```

Ví dụ:

```kotlin
Log.d("UserFlow", "Loading")

val users = repository.getUsers()

Log.d("UserFlow", "Success=${users.size}")
```

Khi lỗi:

```kotlin
Log.e(
    "UserFlow",
    "Load failed",
    exception
)
```

---

# 39. Testing

Các trường hợp nên test:

### Success

```text
load()
 │
 ▼
Loading
 │
 ▼
Success
```

### Error

```text
load()
 │
 ▼
Loading
 │
 ▼
Error
```

### Cancellation

```text
load()
 │
 ▼
Loading
 │
 ▼
Cancel
 │
 ▼
Không phát Success sai
```

### Dispatcher

Repository nên có thể nhận:

```kotlin
TestDispatcher
```

thay vì phụ thuộc cứng vào real dispatcher.

---

# 40. Ảnh hưởng tới UX

Dispatcher không chỉ là vấn đề kỹ thuật.

Ví dụ người dùng bấm:

```text
"Import 50 MB JSON"
```

Nếu làm trên Main:

```text
Click
 │
 ▼
UI frozen
 │
 ▼
5 seconds
 │
 ▼
Result
```

UX rất tệ.

Nếu dispatcher đúng:

```text
Click
 │
 ▼
Loading indicator
 │
 ▼
Background work
 │
 ├── UI vẫn scroll được
 │
 ├── animation vẫn chạy
 │
 └── có thể cancel
 │
 ▼
Result
```

---

# 41. Ảnh hưởng tới Architecture

Một architecture tốt thường hướng tới:

```text
UI Layer
   │
   │ gọi suspend function
   ▼
Domain Layer
   │
   ▼
Data Layer
   │
   ├── Network
   ├── Database
   └── File
```

Dispatcher nên được quản lý gần nơi biết bản chất của operation.

Ví dụ:

```text
UI
 │
 │ "Tôi muốn User"
 ▼
Repository
 │
 │ "Data source này blocking"
 ▼
IO Dispatcher
```

UI không cần biết chi tiết đó.

---

# 42. Những câu hỏi thường gặp

## `suspend` có tự chạy background thread không?

**Không.**

```kotlin
suspend fun foo()
```

không đồng nghĩa với:

```text
background thread
```

`suspend` chỉ cho phép function tạm dừng mà không block coroutine thread theo cơ chế coroutine.

---

## `launch` có tự chạy background thread không?

Không nhất thiết.

```kotlin
viewModelScope.launch {
}
```

thường bắt đầu trên Main.

---

## `withContext(IO)` có tạo thread mới không?

Không nên hiểu như vậy.

Nó yêu cầu coroutine chạy trên dispatcher IO. Dispatcher quản lý pool/thread thực thi.

---

## UI update có bắt buộc dùng Main?

Các UI framework Android yêu cầu thao tác UI phù hợp với Main Thread. Với kiến trúc ViewModel + Compose/StateFlow, nên để UI state flow tuân theo lifecycle và structured concurrency thay vì tự quản lý thread thủ công.

---

# 43. Anti-pattern

Không nên biến code thành:

```kotlin
viewModelScope.launch(Dispatchers.IO) {

    val users = repository.getUsers()

    withContext(Dispatchers.Main) {
        _uiState.value =
            UserUiState.Success(users)
    }
}
```

Trong rất nhiều trường hợp, kiến trúc rõ ràng hơn là:

```kotlin
viewModelScope.launch {

    val users =
        repository.getUsers()

    _uiState.value =
        UserUiState.Success(users)
}
```

và Repository tự bảo đảm:

```kotlin
withContext(ioDispatcher)
```

nếu operation thực sự cần nó.

---

# 44. Mental Model

Hãy hình dung một nhà hàng.

```text
                  Coroutine
                     │
                     ▼
                 Công việc
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
      MAIN           IO        DEFAULT
        │            │            │
        ▼            ▼            ▼
     Phục vụ      Chờ hàng      Đầu bếp
      khách       / kho         tính toán
```

Dispatcher giống như người điều phối:

> Công việc này nên được gửi cho nhóm worker nào?

---

# 45. Bài tập

## Yêu cầu

Xây dựng một màn hình có nút:

```text
Load Large File
```

Khi bấm:

1. Hiển thị `Loading`.
2. Đọc một file lớn bằng `Dispatchers.IO`.
3. Xử lý dữ liệu bằng `Dispatchers.Default`.
4. Trả kết quả về UI.
5. Cho phép coroutine bị cancel khi ViewModel kết thúc.
6. Log state transition.

---

## Flow mong muốn

```text
User clicks
    │
    ▼
Loading
    │
    ▼
IO
Read File
    │
    ▼
Default
Process Data
    │
    ▼
Success
    │
    ▼
UI
```

Nếu có lỗi:

```text
IO / Processing
      │
      ▼
    Error
      │
      ▼
Error UI State
```

Nếu bị hủy:

```text
Running
   │
   ▼
Cancellation
   │
   ▼
Stop work
```

---

# 46. Artifact cho Portfolio

Có thể tạo một project nhỏ:

```text
CoroutineDispatcherDemo/
│
├── data/
│   ├── UserRepository.kt
│   └── UserDataSource.kt
│
├── ui/
│   ├── UserViewModel.kt
│   ├── UserUiState.kt
│   └── UserScreen.kt
│
├── test/
│   └── UserRepositoryTest.kt
│
└── README.md
```

README nên giải thích:

```text
Main
  → UI state

IO
  → blocking I/O

Default
  → CPU processing

TestDispatcher
  → deterministic tests
```

Một artifact như vậy thể hiện được:

* Coroutine.
* Dispatcher.
* lifecycle.
* structured concurrency.
* state management.
* architecture.
* testing.

---

# 47. Checklist hoàn thành

* [ ] Giải thích được Dispatcher là gì.
* [ ] Phân biệt `Main`, `IO`, `Default`.
* [ ] Biết tại sao không được block Main Thread.
* [ ] Biết sử dụng `withContext()`.
* [ ] Hiểu `suspend` không đồng nghĩa với background thread.
* [ ] Hiểu khác biệt giữa Dispatcher và CoroutineScope.
* [ ] Biết lựa chọn IO cho blocking I/O.
* [ ] Biết lựa chọn Default cho CPU-heavy work.
* [ ] Hiểu cancellation khi coroutine đổi dispatcher.
* [ ] Biết sử dụng `ensureActive()` cho CPU loop dài.
* [ ] Biết thiết kế suspend function main-safe.
* [ ] Biết inject `CoroutineDispatcher`.
* [ ] Có test với `TestDispatcher`.
* [ ] Không lạm dụng `GlobalScope`.
* [ ] Có một demo nhỏ để đưa vào portfolio.

---

# 48. Ghi chú Production

Khi đưa coroutine vào production, nên kiểm tra:

### Main Thread

```text
Có blocking operation nào chạy trên Main không?
```

### Dispatcher

```text
Đây là:
UI?
I/O blocking?
CPU intensive?
```

### Lifecycle

```text
Coroutine sống theo ViewModel,
screen hay application?
```

### Cancellation

```text
Khi user rời màn hình,
operation có dừng đúng không?
```

### State

```text
Loading
Success
Error
```

có được quản lý rõ ràng không?

### Error

Network/storage failure có:

* retry?
* timeout?
* fallback?
* thông báo cho người dùng?

### Testing

Có thể thay:

```kotlin
Dispatchers.IO
```

bằng:

```kotlin
TestDispatcher
```

hay không?

---

# 49. Sơ đồ tổng kết

```text
                          COROUTINE
                              │
                              ▼
                       CoroutineScope
                              │
                    quản lý lifecycle
                              │
                              ▼
                         Dispatcher
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
            ▼                 ▼                 ▼
           MAIN              IO              DEFAULT
            │                 │                 │
            │                 │                 │
          UI work       Blocking I/O       CPU work
            │                 │                 │
            ▼                 ▼                 ▼
      UI / StateFlow     File / Legacy DB   Image / Sort
                              │              Calculation
                              │
                              ▼
                         Result/Error
                              │
                              ▼
                            MAIN
                              │
                              ▼
                         Update State
```

---

# 50. Ghi nhớ cốt lõi

```text
CoroutineScope
     =
Coroutine sống bao lâu?

Dispatcher
     =
Coroutine chạy ở đâu?

Suspend Function
     =
Coroutine có thể tạm dừng như thế nào?
```

Và quy tắc chọn Dispatcher:

```text
UI               → Dispatchers.Main

Blocking I/O     → Dispatchers.IO

CPU-heavy work   → Dispatchers.Default
```

Điểm quan trọng nhất khi phát triển Android:

> **Không phải cứ thấy `suspend` là thêm `Dispatchers.IO`. Hãy xác định công việc thực sự là UI, blocking I/O hay CPU-bound, đồng thời thiết kế Data Layer thành main-safe để UI Layer không phải biết chi tiết về thread.**

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
