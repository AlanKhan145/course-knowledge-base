# 014 — Exception Handling in Coroutines

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 08 — Asynchronism         |
| **Nhóm nội dung**       | Coroutines                       |
| **Nguồn roadmap**       | Asynchronism / Coroutines        |
| **Loại bài**            | Async                            |
| **Thứ tự trong module** | 014                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

**Exception Handling in Coroutines** là cách xử lý lỗi phát sinh trong quá trình thực thi bất đồng bộ bằng Kotlin Coroutines.

Trong Android, exception có thể xuất hiện khi:

* Gọi API thất bại.
* Mất kết nối Internet.
* Server trả lỗi.
* Đọc hoặc ghi database thất bại.
* Parse JSON lỗi.
* Một coroutine con thất bại.
* Một tác vụ bị hủy do lifecycle.
* Nhiều coroutine chạy song song và một coroutine gặp lỗi.

Điểm quan trọng là exception trong coroutine **không chỉ ảnh hưởng tới coroutine gây lỗi**. Tùy vào cấu trúc coroutine, lỗi có thể:

* Hủy coroutine hiện tại.
* Hủy coroutine cha.
* Hủy các coroutine anh em.
* Được giữ lại cho đến khi gọi `await()`.
* Được chuyển thành UI state.
* Được xử lý bởi `CoroutineExceptionHandler`.

Một Android Developer cần hiểu mối quan hệ:

```text
Exception
   ↓
Coroutine
   ↓
CoroutineScope
   ↓
Structured Concurrency
   ↓
ViewModel / Repository
   ↓
UI State
   ↓
UX
```

Mục tiêu cuối cùng không phải chỉ là tránh crash mà là:

> **Biến lỗi kỹ thuật thành trạng thái ứng dụng có thể kiểm soát và trải nghiệm người dùng hợp lý.**

---

# 2. Mục tiêu học tập

Sau bài này, bạn nên có thể:

* Giải thích exception hoạt động như thế nào trong Coroutine.
* Phân biệt exception trong `launch` và `async`.
* Sử dụng `try/catch/finally`.
* Hiểu `CancellationException`.
* Sử dụng `CoroutineExceptionHandler`.
* Hiểu propagation của exception.
* Phân biệt `coroutineScope` và `supervisorScope`.
* Sử dụng `SupervisorJob`.
* Chuyển exception thành UI State.
* Thiết kế retry phù hợp.
* Không vô tình nuốt coroutine cancellation.
* Viết test cho các trường hợp lỗi.
* Debug coroutine trong ứng dụng Android.

---

# 3. Tại sao Exception Handling trong Coroutine đặc biệt?

Với code đồng bộ:

```kotlin
try {
    val result = loadData()
} catch (e: Exception) {
    println(e.message)
}
```

Luồng xử lý khá đơn giản:

```text
loadData()
   ↓
Exception
   ↓
catch
```

Nhưng với Coroutine:

```text
CoroutineScope
│
├── Coroutine A
│
├── Coroutine B
│   └── Exception ❌
│
└── Coroutine C
```

Exception của `Coroutine B` có thể ảnh hưởng tới:

```text
B
↓
Parent Scope
↓
A + C bị cancel
```

Đây là hệ quả của **Structured Concurrency**.

---

# 4. Kiến thức nền cần nhớ

Exception Handling nên được học sau:

```text
Coroutines
    ↓
CoroutineScope
    ↓
Suspend Function
    ↓
Dispatchers
    ↓
Structured Concurrency
    ↓
Exception Handling
```

Bạn cần hiểu ít nhất:

* `suspend`
* `launch`
* `async`
* `CoroutineScope`
* `Job`
* cancellation
* structured concurrency

---

# 5. `try/catch` trong Coroutine

Cách đơn giản nhất để xử lý exception là `try/catch`.

```kotlin
viewModelScope.launch {
    try {
        val users = repository.getUsers()
        println(users)
    } catch (e: Exception) {
        println("Error: ${e.message}")
    }
}
```

Luồng:

```text
viewModelScope.launch
        │
        ▼
repository.getUsers()
        │
   ┌────┴─────┐
   │          │
Success     Exception
   │          │
   ▼          ▼
showData    catch
              │
              ▼
           showError
```

---

# 6. `try/catch/finally`

Có thể sử dụng `finally` để thực hiện cleanup.

```kotlin
viewModelScope.launch {

    try {

        repository.syncData()

    } catch (e: Exception) {

        Log.e("Sync", "Sync failed", e)

    } finally {

        hideLoading()

    }
}
```

Ví dụ UI:

```text
User refresh
     ↓
loading = true
     ↓
request API
   /      \
success   error
   \      /
    finally
       ↓
loading = false
```

---

# 7. Ví dụ thực tế trong Android

Giả sử ứng dụng tải danh sách sản phẩm.

```kotlin
class ProductViewModel(
    private val repository: ProductRepository
) : ViewModel() {

    fun loadProducts() {

        viewModelScope.launch {

            try {

                val products = repository.getProducts()

                // cập nhật UI

            } catch (e: IOException) {

                // lỗi mạng

            } catch (e: HttpException) {

                // lỗi HTTP

            } catch (e: Exception) {

                // lỗi khác
            }
        }
    }
}
```

Thay vì xử lý tất cả lỗi giống nhau, nên phân loại:

```text
Exception
│
├── IOException
│      └── Network error
│
├── HttpException
│      ├── 401 → Authentication
│      ├── 404 → Not found
│      └── 500 → Server error
│
├── SerializationException
│      └── Invalid response
│
└── Unknown
       └── Generic error
```

---

# 8. Exception trong `launch`

`launch` trả về:

```kotlin
Job
```

Ví dụ:

```kotlin
scope.launch {
    throw RuntimeException("Something went wrong")
}
```

Nếu exception không được xử lý, nó có thể được truyền lên coroutine cha.

```text
Parent
│
├── Child A
├── Child B ❌ Exception
└── Child C
```

Trong structured concurrency thông thường:

```text
Child B fails
      ↓
Parent cancelled
      ↓
Child A cancelled
Child C cancelled
```

---

# 9. Exception trong `async`

`async` trả về:

```kotlin
Deferred<T>
```

Ví dụ:

```kotlin
val deferred = async {
    throw RuntimeException("API failed")
}
```

Exception của kết quả `async` được quan sát khi sử dụng:

```kotlin
deferred.await()
```

Ví dụ:

```kotlin
try {

    val result = async {
        repository.getUser()
    }.await()

} catch (e: Exception) {

    println(e.message)
}
```

---

# 10. `launch` vs `async`

| Đặc điểm       | `launch`                    | `async`                                 |
| -------------- | --------------------------- | --------------------------------------- |
| Giá trị trả về | `Job`                       | `Deferred<T>`                           |
| Mục đích       | Fire-and-forget task        | Tính toán trả về kết quả                |
| Nhận kết quả   | Không                       | `await()`                               |
| Exception      | Có thể propagate lên parent | Kết quả lỗi được quan sát qua `await()` |
| Use case       | Update state, sync          | Parallel computations                   |

Ví dụ:

```kotlin
launch {
    saveLog()
}
```

vs.

```kotlin
val user = async {
    repository.getUser()
}.await()
```

---

# 11. Exception Propagation

Một đặc điểm rất quan trọng của Coroutine là:

> Coroutine con thất bại có thể khiến coroutine cha thất bại.

Ví dụ:

```kotlin
coroutineScope {

    launch {
        loadUser()
    }

    launch {
        loadPosts()
    }
}
```

Giả sử:

```text
loadPosts()
   ↓
Exception
```

Kết quả:

```text
coroutineScope
│
├── loadUser()  ──────── CANCELLED
│
└── loadPosts() ──────── ERROR
          │
          ▼
Parent scope fails
```

Đây không phải bug.

Đây là hành vi của **Structured Concurrency**.

---

# 12. Vì sao Structured Concurrency làm như vậy?

Giả sử màn hình cần:

```text
User Profile
+
User Permissions
+
User Settings
```

Nếu các phần này tạo thành **một tác vụ logic duy nhất**, khi một phần thất bại, có thể không còn lý do tiếp tục phần còn lại.

```text
Load Screen
│
├── Profile
├── Permissions ❌
└── Settings
```

Structured concurrency có thể:

```text
Permissions failed
       ↓
Cancel whole operation
```

Điều này giúp tránh:

* Tác vụ orphan.
* Memory leak.
* Work không còn cần thiết.
* State không nhất quán.

---

# 13. Khi không muốn một child làm chết các child khác

Đôi khi các tác vụ độc lập.

Ví dụ màn hình dashboard:

```text
Dashboard
│
├── Weather
├── News
├── Stocks
└── Messages
```

Weather API thất bại không nhất thiết phải khiến News và Messages dừng.

Lúc này có thể dùng:

```kotlin
supervisorScope
```

---

# 14. `supervisorScope`

Ví dụ:

```kotlin
supervisorScope {

    launch {
        loadWeather()
    }

    launch {
        loadNews()
    }

    launch {
        loadMessages()
    }
}
```

Nếu Weather lỗi:

```text
supervisorScope
│
├── Weather ❌
├── News ✅
└── Messages ✅
```

Khác với:

```kotlin
coroutineScope
```

```text
coroutineScope
│
├── Weather ❌
├── News ❌ cancelled
└── Messages ❌ cancelled
```

---

# 15. `coroutineScope` vs `supervisorScope`

| `coroutineScope`                | `supervisorScope`                       |
| ------------------------------- | --------------------------------------- |
| Child lỗi có thể làm parent lỗi | Child lỗi không tự động làm sibling lỗi |
| Sibling thường bị cancel        | Sibling có thể tiếp tục                 |
| Dùng cho tác vụ phụ thuộc nhau  | Dùng cho tác vụ tương đối độc lập       |

### Chọn nhanh

```text
Các task có phụ thuộc nhau?
        │
   ┌────┴────┐
   │         │
  Có       Không
   │         │
   ▼         ▼
coroutine  supervisor
 Scope       Scope
```

---

# 16. `SupervisorJob`

Ngoài `supervisorScope`, Kotlin còn có:

```kotlin
SupervisorJob()
```

Ví dụ:

```kotlin
val scope = CoroutineScope(
    SupervisorJob() + Dispatchers.IO
)
```

Cấu trúc:

```text
SupervisorJob
│
├── Coroutine A ❌
├── Coroutine B ✅
└── Coroutine C ✅
```

Một child thất bại không tự động hủy các sibling.

---

# 17. Android `viewModelScope`

Thông thường ViewModel sử dụng:

```kotlin
viewModelScope.launch {
    // coroutine
}
```

Lifecycle:

```text
ViewModel created
      ↓
viewModelScope active
      ↓
run coroutine
      ↓
ViewModel cleared
      ↓
coroutines cancelled
```

Vì vậy bạn không cần tự tạo:

```kotlin
CoroutineScope(Dispatchers.IO)
```

cho phần lớn công việc của ViewModel.

---

# 18. `CancellationException`

Đây là phần cực kỳ quan trọng.

Coroutine sử dụng:

```kotlin
CancellationException
```

để thực hiện cancellation.

Ví dụ:

```text
ViewModel destroyed
      ↓
Job.cancel()
      ↓
CancellationException
      ↓
Coroutine stops
```

Cancellation **không nên được coi như lỗi thông thường**.

---

# 19. Sai lầm phổ biến: nuốt CancellationException

Đoạn code này có thể gây vấn đề:

```kotlin
try {

    repository.loadData()

} catch (e: Exception) {

    Log.e("App", "Error", e)
}
```

Vì cancellation có thể bị bắt bởi catch quá rộng.

Nên xử lý cẩn thận.

Ví dụ:

```kotlin
try {

    repository.loadData()

} catch (e: CancellationException) {

    throw e

} catch (e: Exception) {

    Log.e("App", "Error", e)
}
```

Nguyên tắc:

> **Không biến cancellation thành một lỗi ứng dụng thông thường.**

---

# 20. Vì sao phải rethrow `CancellationException`?

Giả sử người dùng rời màn hình:

```text
User leaves screen
      ↓
Coroutine cancelled
      ↓
CancellationException
```

Nếu bạn nuốt exception:

```text
Cancellation
     ↓
catch Exception
     ↓
ignored
     ↓
Coroutine có thể tiếp tục sai logic
```

Trong khi hành vi mong muốn:

```text
Cancellation
     ↓
rethrow
     ↓
Coroutine hierarchy receives cancellation
     ↓
Stop work
```

---

# 21. Cẩn thận với `runCatching`

Code đẹp:

```kotlin
val result = runCatching {
    repository.getUser()
}
```

Nhưng trong suspend code cần đặc biệt chú ý vì `runCatching` bắt `Throwable`, bao gồm cả cancellation.

Không nên vô tình biến:

```text
Coroutine cancellation
```

thành:

```text
Result.failure
```

và tiếp tục luồng như lỗi thông thường.

Một cách rõ ràng hơn:

```kotlin
suspend fun loadUser(): Result<User> {

    return try {

        Result.success(repository.getUser())

    } catch (e: CancellationException) {

        throw e

    } catch (e: Exception) {

        Result.failure(e)
    }
}
```

---

# 22. CoroutineExceptionHandler

Kotlin cung cấp:

```kotlin
CoroutineExceptionHandler
```

Ví dụ:

```kotlin
val handler = CoroutineExceptionHandler { _, throwable ->

    Log.e(
        "Coroutine",
        "Unhandled coroutine exception",
        throwable
    )
}
```

Sử dụng:

```kotlin
viewModelScope.launch(handler) {

    repository.syncData()
}
```

---

# 23. Vai trò của `CoroutineExceptionHandler`

Có thể coi handler là:

```text
Unhandled coroutine exception
          ↓
CoroutineExceptionHandler
          ↓
Logging / crash reporting
```

Nó phù hợp cho:

* Logging.
* Crash reporting.
* Catch lỗi cuối cùng.
* Theo dõi exception không được xử lý.

Nhưng không nên coi nó là phương pháp chính để triển khai business logic.

Không nên nghĩ:

```text
CoroutineExceptionHandler
=
try/catch replacement
```

---

# 24. Khi nào dùng `try/catch`?

Dùng khi bạn **có thể xử lý lỗi tại vị trí đó**.

Ví dụ:

```kotlin
try {

    repository.getProducts()

} catch (e: IOException) {

    _uiState.value = UiState.Error(
        "Không có kết nối mạng"
    )
}
```

---

# 25. Khi nào dùng `CoroutineExceptionHandler`?

Thường dành cho exception chưa được xử lý.

Ví dụ:

```kotlin
private val exceptionHandler =
    CoroutineExceptionHandler { _, throwable ->

        analytics.logError(throwable)

    }
```

Tư duy:

```text
Expected error
    ↓
try/catch
```

```text
Unexpected / uncaught exception
    ↓
CoroutineExceptionHandler
```

---

# 26. Exception nên được chuyển thành UI State

Không nên để UI trực tiếp xử lý exception kỹ thuật.

Không tốt:

```text
HttpException
IOException
SerializationException
      ↓
Composable
```

Tốt hơn:

```text
Technical Exception
       ↓
Repository / ViewModel
       ↓
UI State
       ↓
Composable
```

Ví dụ:

```kotlin
sealed interface ProductUiState {

    data object Loading : ProductUiState

    data class Success(
        val products: List<Product>
    ) : ProductUiState

    data class Error(
        val message: String
    ) : ProductUiState
}
```

---

# 27. ViewModel hoàn chỉnh hơn

```kotlin
class ProductViewModel(
    private val repository: ProductRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<ProductUiState>(
            ProductUiState.Loading
        )

    val uiState =
        _uiState.asStateFlow()

    fun loadProducts() {

        viewModelScope.launch {

            _uiState.value =
                ProductUiState.Loading

            try {

                val products =
                    repository.getProducts()

                _uiState.value =
                    ProductUiState.Success(
                        products
                    )

            } catch (e: CancellationException) {

                throw e

            } catch (e: IOException) {

                _uiState.value =
                    ProductUiState.Error(
                        "Không thể kết nối Internet."
                    )

            } catch (e: Exception) {

                _uiState.value =
                    ProductUiState.Error(
                        "Đã xảy ra lỗi."
                    )
            }
        }
    }
}
```

---

# 28. Luồng hoàn chỉnh

```text
User opens screen
       ↓
ViewModel.loadProducts()
       ↓
UiState.Loading
       ↓
Repository
       ↓
API Request
   ┌───┴────────────┐
   │                │
Success          Exception
   │                │
   ▼                ▼
Success       Classify error
   │                │
   └───────┬────────┘
           ▼
      StateFlow
           ↓
       Compose UI
           ↓
  ┌────────┼─────────┐
  ▼        ▼         ▼
Loading  Content    Error
```

---

# 29. Repository nên xử lý lỗi ở đâu?

Không có quy tắc rằng mọi exception phải được catch trong ViewModel.

Có thể chia trách nhiệm:

```text
Data Source
     ↓
Repository
     ↓
Use Case
     ↓
ViewModel
     ↓
UI
```

Một kiến trúc tốt có thể:

```text
IOException
     ↓
Repository
     ↓
Domain Error
     ↓
ViewModel
     ↓
Error UI State
```

---

# 30. Domain Error

Thay vì đưa exception framework lên UI:

```kotlin
HttpException
IOException
SQLException
```

có thể map thành lỗi domain.

```kotlin
sealed interface AppError {

    data object Network : AppError

    data object Unauthorized : AppError

    data object Server : AppError

    data object Unknown : AppError
}
```

---

# 31. Exception Mapping

Ví dụ:

```kotlin
fun Throwable.toAppError(): AppError {

    return when (this) {

        is IOException ->
            AppError.Network

        is HttpException ->
            when (code()) {

                401 ->
                    AppError.Unauthorized

                in 500..599 ->
                    AppError.Server

                else ->
                    AppError.Unknown
            }

        else ->
            AppError.Unknown
    }
}
```

Kiến trúc:

```text
Retrofit
   ↓
HttpException
   ↓
Repository
   ↓
AppError.Server
   ↓
ViewModel
   ↓
ProductUiState.Error
   ↓
"Máy chủ đang gặp sự cố"
```

---

# 32. Retry

Một số lỗi có thể retry.

Ví dụ:

```text
Network timeout
Server 503
Temporary connection issue
```

Không nên retry vô hạn.

Ví dụ đơn giản:

```kotlin
repeat(3) { attempt ->

    try {

        repository.loadData()

        return@launch

    } catch (e: IOException) {

        if (attempt == 2) {
            throw e
        }

        delay(1000)
    }
}
```

---

# 33. Exponential Backoff

Thay vì:

```text
1s
1s
1s
1s
```

có thể dùng:

```text
Attempt 1 → 1 s
Attempt 2 → 2 s
Attempt 3 → 4 s
Attempt 4 → 8 s
```

Công thức đơn giản:

$$
D_n = D_0 \times 2^n
$$

Trong đó:

* $D_0$: delay ban đầu.
* $n$: lần retry.

Ví dụ:

```kotlin
var delayMs = 1_000L

repeat(3) {

    try {

        repository.sync()

        return@launch

    } catch (e: IOException) {

        delay(delayMs)

        delayMs *= 2
    }
}
```

---

# 34. Không retry mọi exception

Ví dụ:

```text
IOException
       ↓
Maybe retry
```

Nhưng:

```text
HTTP 401
   ↓
Token / Login problem
   ↓
Retry liên tục ❌
```

Hoặc:

```text
Invalid JSON
   ↓
Programming / API contract problem
   ↓
Retry ❌
```

Có thể tư duy:

```text
Exception
    │
    ▼
Transient?
 │       │
Yes      No
 │       │
 ▼       ▼
Retry   Stop
```

---

# 35. Retry và cancellation

Retry loop phải cho phép coroutine bị cancel.

Ví dụ:

```kotlin
while (true) {

    try {

        repository.load()

        break

    } catch (e: CancellationException) {

        throw e

    } catch (e: IOException) {

        delay(2_000)
    }
}
```

`delay()` là suspending function nên cooperative với cancellation.

---

# 36. Parallel requests và exception

Giả sử cần tải:

```text
User
Posts
Notifications
```

Có thể chạy song song:

```kotlin
coroutineScope {

    val user = async {
        repository.getUser()
    }

    val posts = async {
        repository.getPosts()
    }

    val notifications = async {
        repository.getNotifications()
    }

    Dashboard(
        user.await(),
        posts.await(),
        notifications.await()
    )
}
```

---

# 37. Nếu một request thất bại?

Với `coroutineScope`:

```text
getUser()          ✅
getPosts()         ❌
getNotifications() ⏳
```

Có thể dẫn tới:

```text
getPosts failure
      ↓
scope cancelled
      ↓
notifications cancelled
      ↓
operation fails
```

Điều này phù hợp nếu cả ba dữ liệu đều bắt buộc.

---

# 38. Partial Failure

Nếu dashboard cho phép một widget lỗi nhưng các widget khác vẫn hiển thị:

```kotlin
supervisorScope {

    launch {
        try {
            loadWeather()
        } catch (e: Exception) {
            showWeatherError()
        }
    }

    launch {
        try {
            loadNews()
        } catch (e: Exception) {
            showNewsError()
        }
    }
}
```

UI:

```text
Dashboard
├── Weather      ❌ Retry
├── News         ✅
├── Messages     ✅
└── Notification ✅
```

Đây gọi là **partial failure handling**.

---

# 39. Exception và Lifecycle

Ví dụ:

```text
Screen
 ↓
ViewModel
 ↓
viewModelScope
 ↓
Network Request
```

Khi ViewModel bị clear:

```text
ViewModel cleared
      ↓
viewModelScope cancelled
      ↓
Network coroutine cancelled
```

Vì vậy cancellation là phần tự nhiên của lifecycle.

Không nên biến nó thành:

```text
"Đã xảy ra lỗi!"
```

trên UI.

---

# 40. Rotate màn hình có làm mất request không?

Với ViewModel:

```text
Activity
     ↓ rotate
New Activity
     ↓
Same ViewModel
```

`viewModelScope` thường tiếp tục tồn tại trong configuration change.

Nhưng khi ViewModel thực sự bị clear:

```text
ViewModel
   ↓
onCleared()
   ↓
viewModelScope.cancel()
```

---

# 41. Exception và Main Thread

Exception Handling không có nghĩa là:

```kotlin
try {
    doHeavyWork()
} catch (...) {
}
```

trên Main Thread.

Heavy work vẫn cần dispatcher thích hợp.

Ví dụ:

```kotlin
suspend fun parseLargeFile(): Data =
    withContext(Dispatchers.Default) {

        parseFile()

    }
```

---

# 42. Dispatcher và exception là hai vấn đề khác nhau

```text
Dispatcher
   ↓
"Code chạy ở đâu?"
```

```text
Exception Handling
   ↓
"Lỗi được xử lý thế nào?"
```

Có thể có code chạy đúng dispatcher nhưng xử lý exception sai.

Hoặc xử lý exception tốt nhưng lại block Main Thread.

Cần giải quyết cả hai.

---

# 43. Anti-pattern: Empty catch

Không nên:

```kotlin
try {
    repository.load()
} catch (e: Exception) {
}
```

Vì:

```text
Exception
   ↓
Swallowed
   ↓
No log
No UI state
No analytics
No debugging information
```

Sau này rất khó debug.

---

# 44. Anti-pattern: `catch(Throwable)`

Thường tránh:

```kotlin
catch (e: Throwable) {
}
```

trừ khi có lý do đặc biệt.

Nó có phạm vi quá rộng và dễ bắt cả những thứ không nên bị xử lý như lỗi business thông thường.

---

# 45. Anti-pattern: Hiển thị exception trực tiếp cho user

Không nên:

```kotlin
Text(error.localizedMessage ?: "")
```

Người dùng có thể thấy:

```text
java.net.UnknownHostException:
Unable to resolve host...
```

Thay vào đó:

```text
Không thể kết nối Internet.
Vui lòng kiểm tra kết nối và thử lại.
```

---

# 46. Technical Error vs User Error Message

```text
Technical layer
────────────────────────
UnknownHostException
SocketTimeoutException
HTTP 503
SerializationException


         ↓ mapping


UI layer
────────────────────────
Không có Internet
Máy chủ đang bận
Phiên đăng nhập hết hạn
Không thể tải dữ liệu
```

---

# 47. Error State nên chứa gì?

Ví dụ:

```kotlin
data class Error(
    val message: String,
    val canRetry: Boolean
)
```

Hoặc tốt hơn:

```kotlin
data class Error(
    val type: ErrorType
)
```

```kotlin
enum class ErrorType {
    NETWORK,
    SERVER,
    UNAUTHORIZED,
    UNKNOWN
}
```

UI quyết định message:

```text
NETWORK
   ↓
"Kiểm tra kết nối Internet"
```

---

# 48. Error State và Event khác nhau

Ví dụ:

```text
State:
Loading
Success
Error
```

Trong khi:

```text
Event:
Show Snackbar
Navigate Login
Show Toast
```

Ví dụ HTTP `401`:

```text
401
 ↓
Session expired
 ↓
Navigate Login
```

Không nhất thiết chỉ là:

```text
UiState.Error
```

---

# 49. Ví dụ Compose

```kotlin
@Composable
fun ProductScreen(
    state: ProductUiState,
    onRetry: () -> Unit
) {

    when (state) {

        ProductUiState.Loading -> {

            CircularProgressIndicator()
        }

        is ProductUiState.Success -> {

            ProductList(
                products = state.products
            )
        }

        is ProductUiState.Error -> {

            Column {

                Text(state.message)

                Button(
                    onClick = onRetry
                ) {
                    Text("Thử lại")
                }
            }
        }
    }
}
```

---

# 50. Flow tổng thể trong ứng dụng production

```text
┌─────────────────────┐
│        UI           │
│ Compose / Activity  │
└──────────┬──────────┘
           │
           │ user action
           ▼
┌─────────────────────┐
│      ViewModel      │
│   viewModelScope    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       UseCase       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Repository      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ API / DB / Storage  │
└──────────┬──────────┘
           │
        Exception
           │
           ▼
┌─────────────────────┐
│ Error Mapping       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Domain Result/Error │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      UI State       │
└──────────┬──────────┘
           │
           ▼
      Error UI / Retry
```

---

# 51. Logging

Exception trong production nên có đủ context.

Ví dụ:

```kotlin
catch (e: IOException) {

    Log.e(
        "ProductRepository",
        "Failed to load products",
        e
    )
}
```

Không nên chỉ:

```kotlin
println("error")
```

Thông tin hữu ích:

```text
Operation
Screen
Endpoint
Exception type
HTTP status
Relevant request ID
Timestamp
App version
```

Không log thông tin nhạy cảm như:

* Password.
* Access token.
* Refresh token.
* Thông tin thanh toán.
* Dữ liệu cá nhân không cần thiết.

---

# 52. Debug Coroutine Exception

Khi gặp lỗi, lần theo:

```text
Exception
   ↓
Coroutine nào?
   ↓
Parent scope nào?
   ↓
launch hay async?
   ↓
coroutineScope hay supervisorScope?
   ↓
Exception có bị catch không?
   ↓
Cancellation có bị nuốt không?
   ↓
UI State thay đổi thế nào?
```

---

# 53. Testing

Giả sử ViewModel:

```kotlin
fun loadProducts()
```

Bạn nên test ít nhất:

```text
1. API success
2. Network error
3. Server error
4. Unknown error
5. Retry success
6. Retry exhausted
7. Cancellation
```

---

# 54. Unit Test tư duy

### Success

```text
Repository
    ↓
return products
    ↓
ViewModel
    ↓
Loading
    ↓
Success(products)
```

### Failure

```text
Repository
    ↓
throw IOException
    ↓
ViewModel
    ↓
Loading
    ↓
Error(Network)
```

---

# 55. Cancellation Test

Một trường hợp thường bị bỏ quên:

```text
Start coroutine
      ↓
request running
      ↓
cancel Job
      ↓
request stopped
      ↓
NO fake error state
```

Bạn cần đảm bảo cancellation không tạo:

```text
"Something went wrong"
```

cho người dùng.

---

# 56. Bài thực hành

## Yêu cầu

Xây dựng màn hình tải danh sách bài viết từ API.

Luồng:

```text
Open Screen
    ↓
Loading
    ↓
GET /posts
   /     \
Success  Failure
   │       │
   ▼       ▼
Content   Error
            │
            ▼
          Retry
```

### Yêu cầu kỹ thuật

Sử dụng:

* `ViewModel`
* `viewModelScope`
* `StateFlow`
* `try/catch`
* `CancellationException`
* Repository
* Retrofit hoặc Fake API
* Error state
* Retry button

---

# 57. Bài tập nâng cao

Giả sử Dashboard tải 3 API:

```text
Dashboard
│
├── User
├── Weather
└── News
```

Yêu cầu:

### Phiên bản A

Nếu một API lỗi:

```text
Cancel tất cả
```

Sử dụng:

```kotlin
coroutineScope
```

### Phiên bản B

Nếu một API lỗi:

```text
Các API khác vẫn tiếp tục
```

Sử dụng:

```kotlin
supervisorScope
```

Sau đó giải thích vì sao hai phiên bản có behavior khác nhau.

---

# 58. Artifact cho Portfolio

Có thể tạo một project nhỏ:

```text
CoroutineErrorDemo/
│
├── data/
│   ├── ApiService.kt
│   └── ProductRepository.kt
│
├── domain/
│   └── AppError.kt
│
├── ui/
│   ├── ProductUiState.kt
│   ├── ProductViewModel.kt
│   └── ProductScreen.kt
│
├── test/
│   └── ProductViewModelTest.kt
│
└── README.md
```

README nên giải thích:

```text
Exception
   ↓
Repository
   ↓
Error Mapping
   ↓
ViewModel
   ↓
StateFlow
   ↓
Compose
```

---

# 59. Checklist hoàn thành

* [ ] Giải thích được exception trong Coroutine.
* [ ] Hiểu exception propagation.
* [ ] Biết sử dụng `try/catch/finally`.
* [ ] Phân biệt exception trong `launch` và `async`.
* [ ] Hiểu vai trò của `CancellationException`.
* [ ] Không nuốt cancellation.
* [ ] Biết sử dụng `CoroutineExceptionHandler`.
* [ ] Hiểu `coroutineScope`.
* [ ] Hiểu `supervisorScope`.
* [ ] Hiểu `SupervisorJob`.
* [ ] Chuyển technical exception thành domain error.
* [ ] Chuyển domain error thành UI State.
* [ ] Có Retry UI.
* [ ] Không retry vô hạn.
* [ ] Biết xử lý partial failure.
* [ ] Có unit test cho success.
* [ ] Có unit test cho exception.
* [ ] Có test hoặc ghi chú về cancellation.
* [ ] Có logging để debug.
* [ ] Có README hoặc diagram cho portfolio.

---

# 60. Các lỗi thường gặp

| Lỗi                                                 | Hậu quả                          |
| --------------------------------------------------- | -------------------------------- |
| `catch(Exception)` nhưng không chú ý cancellation   | Coroutine không hủy đúng         |
| Empty `catch`                                       | Mất dấu lỗi                      |
| Retry vô hạn                                        | Hao pin, network, server load    |
| Hiển thị exception trực tiếp                        | UX kém                           |
| Catch mọi lỗi tại UI                                | Architecture rối                 |
| Dùng `GlobalScope`                                  | Lifecycle khó kiểm soát          |
| Không hiểu exception propagation                    | Coroutine khác bị cancel bất ngờ |
| Dùng `coroutineScope` cho task độc lập              | Một lỗi làm chết cả nhóm         |
| Dùng `supervisorScope` khi mọi kết quả đều bắt buộc | Có thể tạo state không nhất quán |
| Không log exception                                 | Khó debug production             |
| Dùng `runCatching` mà bỏ qua cancellation           | Có thể nuốt cancellation         |

---

# 61. Production Checklist

Trước khi release, hãy kiểm tra:

### Network

* API timeout được xử lý chưa?
* Không có Internet thì sao?
* HTTP `401`, `403`, `404`, `429`, `5xx` xử lý thế nào?

### Lifecycle

* User thoát màn hình khi request đang chạy thì sao?
* Coroutine có được cancel đúng không?
* Rotate screen có làm mất state không?

### UI State

Có đầy đủ:

```text
Loading
Success
Empty
Error
```

hay chưa?

### Retry

* Lỗi nào được retry?
* Retry tối đa bao nhiêu lần?
* Có backoff không?
* User có nút Retry không?

### Logging

* Exception có stacktrace?
* Có context đủ để debug?
* Có vô tình log token/password không?

### Testing

* Success path.
* Network error.
* Server error.
* Cancellation.
* Retry.
* Partial failure.

---

# 62. Ghi nhớ nhanh

```text
              EXCEPTION
                  │
        ┌─────────┴──────────┐
        │                    │
     Expected             Unhandled
        │                    │
        ▼                    ▼
    try / catch       CoroutineExceptionHandler
        │
        ▼
   Map exception
        │
        ▼
   Domain Error
        │
        ▼
     UI State
        │
   ┌────┴─────┐
   ▼          ▼
 Error UI    Retry
```

Với structured concurrency:

```text
coroutineScope

Parent
│
├── A
├── B ❌
└── C

B fails
  ↓
Parent fails
  ↓
A + C cancelled
```

Trong khi:

```text
supervisorScope

Supervisor
│
├── A ✅
├── B ❌
└── C ✅
```

---

# 63. Công thức tư duy

Khi gặp một coroutine có khả năng lỗi, hãy tự hỏi 6 câu:

```text
1. Lỗi có thể xảy ra ở đâu?
           ↓
2. Ai nên xử lý lỗi?
           ↓
3. Lỗi có nên hủy các coroutine khác?
           ↓
4. Có cần retry không?
           ↓
5. UI nên nhìn thấy state nào?
           ↓
6. Cancellation có còn hoạt động đúng không?
```

Nếu trả lời được sáu câu này, bạn đã nắm được phần cốt lõi của **Exception Handling in Coroutines**.

---

# 64. Kết luận

**Exception Handling in Coroutines** không đơn giản chỉ là thêm:

```kotlin
try {
    ...
} catch (e: Exception) {
    ...
}
```

Một implementation tốt phải xem xét toàn bộ luồng:

```text
Coroutine
    ↓
Exception
    ↓
Propagation
    ↓
Structured Concurrency
    ↓
Cancellation
    ↓
Error Mapping
    ↓
UI State
    ↓
Retry / Recovery
    ↓
Logging
    ↓
Testing
```

Trong Android production, mục tiêu là:

> **Một coroutine thất bại phải tạo ra hành vi có thể dự đoán: hủy đúng tác vụ, không phá lifecycle, không làm mất state, cung cấp thông báo hợp lý cho người dùng và đủ thông tin để developer debug.**

Đặc biệt cần nhớ ba nguyên tắc:

1. **Không nuốt `CancellationException`.**
2. **Hiểu rõ một child failure có hủy sibling hay không.**
3. **Đừng đưa exception kỹ thuật trực tiếp lên UI — hãy chuyển nó thành domain error/UI state phù hợp.**
