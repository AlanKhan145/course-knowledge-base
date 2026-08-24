# 009 — Coroutine Scope

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 08 — Asynchronism         |
| **Nhóm nội dung**       | Coroutines                       |
| **Nguồn roadmap**       | Asynchronism / Coroutines        |
| **Loại bài**            | Async                            |
| **Thứ tự trong module** | 009                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tổng quan

**Coroutine Scope** là một trong những khái niệm quan trọng nhất khi sử dụng **Kotlin Coroutines** trong Android.

`CoroutineScope` xác định:

* Coroutine được chạy trong **ngữ cảnh nào**.
* Coroutine sống **bao lâu**.
* Coroutine bị **hủy khi nào**.
* Coroutine có quan hệ như thế nào với các coroutine khác.
* Công việc bất đồng bộ có gắn đúng với **lifecycle** của `Activity`, `Fragment` hay `ViewModel` hay không.

Có thể hiểu ngắn gọn:

> **CoroutineScope là phạm vi quản lý vòng đời của một nhóm coroutine.**

Ví dụ:

```kotlin
viewModelScope.launch {
    repository.loadUsers()
}
```

Coroutine trên thuộc `viewModelScope`, vì vậy khi `ViewModel` bị `clear`, coroutine cũng sẽ được hủy.

---

# 2. Coroutine Scope nằm ở đâu trong Android?

```text
Android App
│
├── UI Layer
│   ├── Activity
│   ├── Fragment
│   └── Jetpack Compose
│
├── ViewModel
│   └── viewModelScope
│
├── Data Layer
│   ├── Repository
│   ├── Network
│   └── Database
│
└── Background Work
    ├── Coroutines
    ├── WorkManager
    └── Services
```

Trong ứng dụng Android thông thường, coroutine thường được khởi chạy từ:

```text
UI
 ↓
ViewModel
 ↓
viewModelScope.launch
 ↓
Repository
 ↓
suspend function
 ↓
Network / Database
```

Ví dụ:

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    fun loadUsers() {
        viewModelScope.launch {
            repository.getUsers()
        }
    }
}
```

---

# 3. Mục tiêu học tập

Sau bài học này, bạn nên có thể:

* Giải thích được `CoroutineScope` bằng ngôn ngữ của mình.
* Hiểu mối quan hệ giữa:

  * `CoroutineScope`
  * `Job`
  * `CoroutineContext`
  * `Dispatcher`
* Biết cách khởi chạy coroutine bằng `launch`.
* Hiểu **Structured Concurrency**.
* Biết coroutine bị hủy như thế nào.
* Phân biệt:

  * `viewModelScope`
  * `lifecycleScope`
  * scope tự tạo.
* Biết tránh `GlobalScope`.
* Biết chọn `Dispatcher` phù hợp.
* Biết coroutine ảnh hưởng như thế nào đến:

  * UI
  * lifecycle
  * state
  * network
  * performance
  * debugging.

---

# 4. Vấn đề CoroutineScope giải quyết

Giả sử một màn hình cần gọi API:

```kotlin
fun loadData() {
    // gọi API
}
```

Nếu chạy công việc lâu trên **Main Thread**:

```text
Main Thread
│
├── Render UI
├── Handle Click
├── Animation
│
└── Network request ❌
      ↓
     Block
      ↓
 UI bị đứng
```

Kết quả có thể là:

* UI lag.
* Không phản hồi thao tác.
* Animation giật.
* Có nguy cơ ANR.

Coroutine giúp thực hiện công việc bất đồng bộ mà không chặn Main Thread.

Nhưng lại xuất hiện một vấn đề khác:

> Coroutine sẽ sống trong bao lâu?

Ví dụ:

```text
Activity
   │
   ├── Start Coroutine
   │
   ├── User rời màn hình
   │
   └── Activity Destroyed
            │
            └── Coroutine vẫn chạy? ❌
```

Đó là lý do cần **CoroutineScope**.

---

# 5. Cấu trúc cơ bản của CoroutineScope

Một `CoroutineScope` chứa một `CoroutineContext`.

Có thể hình dung:

```text
CoroutineScope
      │
      ▼
CoroutineContext
      │
      ├── Job
      │     └── quản lý lifecycle/cancellation
      │
      ├── Dispatcher
      │     └── quyết định coroutine chạy ở đâu
      │
      └── CoroutineExceptionHandler
            └── xử lý exception
```

Ví dụ:

```kotlin
val scope = CoroutineScope(
    SupervisorJob() + Dispatchers.Main
)
```

Ở đây:

```text
CoroutineScope
│
├── SupervisorJob
│
└── Dispatchers.Main
```

---

# 6. Tạo CoroutineScope

Có thể tạo scope thủ công:

```kotlin
val scope = CoroutineScope(
    Job() + Dispatchers.Main
)
```

Sau đó khởi chạy coroutine:

```kotlin
scope.launch {
    println("Coroutine started")
}
```

Cấu trúc:

```text
CoroutineScope
     │
     └── launch
           │
           └── Coroutine
```

---

# 7. `launch`

`launch` là một **coroutine builder**.

Ví dụ:

```kotlin
scope.launch {
    loadData()
}
```

`launch` trả về một:

```kotlin
Job
```

Ví dụ:

```kotlin
val job = scope.launch {
    loadData()
}
```

Có thể sử dụng `Job` để kiểm soát coroutine:

```kotlin
job.cancel()
```

---

# 8. Job và CoroutineScope

`Job` đại diện cho lifecycle của một coroutine.

```text
Job
│
├── Active
│
├── Completing
│
├── Completed
│
└── Cancelled
```

Ví dụ:

```kotlin
val job = scope.launch {
    delay(5000)
    println("Finished")
}
```

Hủy:

```kotlin
job.cancel()
```

Nếu coroutine đang ở:

```kotlin
delay(5000)
```

thì việc hủy sẽ được nhận biết và coroutine dừng lại.

---

# 9. Parent Job và Child Job

Một điểm quan trọng của Kotlin Coroutines là **Structured Concurrency**.

Ví dụ:

```kotlin
scope.launch {

    launch {
        taskA()
    }

    launch {
        taskB()
    }
}
```

Cấu trúc:

```text
Parent Coroutine
│
├── Child A
│
└── Child B
```

Nếu parent bị hủy:

```text
Parent cancelled
      │
      ├── Child A cancelled
      │
      └── Child B cancelled
```

Đây chính là cơ chế giúp quản lý coroutine có tổ chức.

---

# 10. Structured Concurrency

Structured Concurrency yêu cầu coroutine phải tồn tại bên trong một phạm vi rõ ràng.

Thay vì:

```text
Coroutine chạy ở đâu đó
không biết ai quản lý
không biết khi nào kết thúc
```

ta có:

```text
Scope
│
└── Parent Coroutine
      │
      ├── Child Coroutine
      ├── Child Coroutine
      └── Child Coroutine
```

Khi scope kết thúc:

```text
Scope cancelled
      │
      └── toàn bộ coroutine liên quan được hủy
```

### Lợi ích

* Tránh coroutine chạy không kiểm soát.
* Tránh memory leak.
* Dễ xử lý cancellation.
* Dễ xử lý exception.
* Dễ debugging.
* Lifecycle rõ ràng hơn.

---

# 11. `viewModelScope`

Trong Android, một trong những scope thường dùng nhất là:

```kotlin
viewModelScope
```

Ví dụ:

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    fun loadUsers() {

        viewModelScope.launch {

            val users = repository.getUsers()

        }
    }
}
```

Lifecycle:

```text
ViewModel Created
      │
      ▼
viewModelScope
      │
      ├── Coroutine A
      ├── Coroutine B
      └── Coroutine C
      │
      ▼
ViewModel cleared
      │
      ▼
viewModelScope.cancel()
      │
      └── tất cả coroutine bị hủy
```

Điều này đặc biệt phù hợp với:

* Load API.
* Load database.
* Xử lý business logic.
* Cập nhật `StateFlow`.
* Refresh dữ liệu.

---

# 12. Ví dụ ViewModel hoàn chỉnh

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val _users = MutableStateFlow<List<User>>(emptyList())

    val users: StateFlow<List<User>> = _users

    fun loadUsers() {

        viewModelScope.launch {

            val result = repository.getUsers()

            _users.value = result
        }
    }
}
```

Luồng dữ liệu:

```text
UI
│
│ loadUsers()
▼
ViewModel
│
│ viewModelScope.launch
▼
Repository
│
│ suspend getUsers()
▼
API
│
▼
Result
│
▼
ViewModel
│
│ StateFlow
▼
UI
```

---

# 13. `lifecycleScope`

Activity và Fragment có thể sử dụng:

```kotlin
lifecycleScope
```

Ví dụ:

```kotlin
lifecycleScope.launch {
    loadData()
}
```

Coroutine được liên kết với lifecycle của component.

```text
Activity / Fragment
        │
        ▼
 lifecycleScope
        │
        ├── Coroutine
        ├── Coroutine
        └── Coroutine
        │
        ▼
 Lifecycle destroyed
        │
        ▼
 Coroutine cancelled
```

---

# 14. `viewModelScope` và `lifecycleScope`

| Scope            | Thuộc về            | Thường dùng cho                       |
| ---------------- | ------------------- | ------------------------------------- |
| `viewModelScope` | ViewModel           | Business logic, repository, load data |
| `lifecycleScope` | Activity / Fragment | Công việc gắn với UI lifecycle        |
| Scope tự tạo     | Component riêng     | Quản lý lifecycle đặc biệt            |

Ví dụ:

```text
Activity / Fragment
       │
       └── lifecycleScope

ViewModel
       │
       └── viewModelScope
```

---

# 15. Coroutine và xoay màn hình

Một lợi ích quan trọng của `viewModelScope` là xử lý configuration change tốt hơn.

Ví dụ user xoay điện thoại:

```text
Activity A
│
│ rotate
▼
Activity A destroyed
│
▼
Activity B created
```

Nhưng ViewModel có thể được giữ lại:

```text
Activity A
      │
      ▼
 ViewModel
      │
      │ API đang chạy
      │
Activity B
      │
      └──── sử dụng cùng ViewModel
```

Nếu request được chạy trong:

```kotlin
viewModelScope
```

nó không nhất thiết bị hủy chỉ vì Activity được tái tạo do configuration change.

Đây là một lý do không nên đặt toàn bộ business logic trực tiếp vào Activity.

---

# 16. Coroutine Dispatcher

`CoroutineScope` thường đi cùng với **Dispatcher**.

Dispatcher quyết định coroutine chạy trên thread nào hoặc thread pool nào.

Ba dispatcher phổ biến:

| Dispatcher            | Dùng cho           |
| --------------------- | ------------------ |
| `Dispatchers.Main`    | UI                 |
| `Dispatchers.IO`      | Blocking I/O       |
| `Dispatchers.Default` | CPU-intensive work |

---

## Dispatchers.Main

Dùng cho:

* Update UI.
* State liên quan UI.
* Interaction với Android UI APIs.

Ví dụ:

```kotlin
CoroutineScope(Dispatchers.Main).launch {
    textView.text = "Loaded"
}
```

---

## Dispatchers.IO

Thường dùng cho công việc I/O dạng blocking:

```kotlin
withContext(Dispatchers.IO) {
    readLargeFile()
}
```

Ví dụ:

```kotlin
viewModelScope.launch {

    val data = withContext(Dispatchers.IO) {
        readFile()
    }

    updateUi(data)
}
```

Luồng:

```text
Main
 │
 │ launch
 ▼
Coroutine
 │
 │ withContext(IO)
 ▼
IO Thread Pool
 │
 │ readFile()
 ▼
Result
 │
 ▼
Main
 │
 └── Update State
```

---

## Dispatchers.Default

Phù hợp với CPU-intensive task:

```kotlin
withContext(Dispatchers.Default) {
    processLargeImage()
}
```

Ví dụ:

* Sort dữ liệu lớn.
* Parse hoặc transform phức tạp.
* Image processing.
* Algorithm.
* CPU-heavy computation.

---

# 17. Không phải mọi `suspend` function đều cần `Dispatchers.IO`

Một hiểu nhầm phổ biến:

```kotlin
viewModelScope.launch(Dispatchers.IO) {
    retrofitApi.getUsers()
}
```

không phải lúc nào cũng cần thiết.

Nếu thư viện network đã cung cấp API bất đồng bộ dạng `suspend`, nó có thể tự xử lý việc chờ I/O mà không block Main Thread.

Điều quan trọng là phân biệt:

```text
Suspending I/O
vs
Blocking I/O
```

Ví dụ một blocking operation:

```kotlin
File("data.txt").readText()
```

nên được chuyển sang:

```kotlin
withContext(Dispatchers.IO) {
    File("data.txt").readText()
}
```

---

# 18. Cancellation

Coroutine hỗ trợ cancellation.

Ví dụ:

```kotlin
val job = scope.launch {

    delay(10_000)

    println("Finished")
}

job.cancel()
```

Flow:

```text
Coroutine Start
      │
      ▼
    delay()
      │
      ▼
job.cancel()
      │
      ▼
CancellationException
      │
      ▼
Coroutine End
```

---

# 19. Cancellation mang tính cooperative

Coroutine không bị "giết thread" một cách cưỡng ép.

Cancellation hoạt động theo kiểu **cooperative**.

Các suspend function như:

```kotlin
delay()
yield()
withContext()
```

đã hỗ trợ kiểm tra cancellation.

Nhưng với vòng lặp CPU nặng:

```kotlin
while (true) {
    calculate()
}
```

coroutine có thể không phản hồi cancellation nhanh.

Có thể kiểm tra:

```kotlin
while (isActive) {
    calculate()
}
```

Hoặc:

```kotlin
ensureActive()
```

Ví dụ:

```kotlin
viewModelScope.launch(Dispatchers.Default) {

    for (item in hugeList) {

        ensureActive()

        process(item)
    }
}
```

---

# 20. `coroutineScope`

Ngoài `CoroutineScope`, Kotlin còn có hàm:

```kotlin
coroutineScope { }
```

Ví dụ:

```kotlin
suspend fun loadDashboard() = coroutineScope {

    launch {
        loadProfile()
    }

    launch {
        loadNotifications()
    }
}
```

Cấu trúc:

```text
loadDashboard()
      │
      ▼
coroutineScope
      │
      ├── loadProfile()
      │
      └── loadNotifications()
      │
      ▼
Wait children
      │
      ▼
Return
```

`coroutineScope` sẽ không hoàn thành cho đến khi các child coroutine hoàn thành.

---

# 21. `supervisorScope`

Trong một số trường hợp, ta không muốn một child thất bại khiến các child khác bị hủy.

Có thể sử dụng:

```kotlin
supervisorScope
```

Ví dụ:

```kotlin
supervisorScope {

    launch {
        loadProfile()
    }

    launch {
        loadAds()
    }
}
```

Ý tưởng:

```text
supervisorScope
│
├── Profile Request
│      └── Success
│
└── Ads Request
       └── Failure
```

Failure của Ads không nhất thiết hủy Profile.

---

# 22. Job và SupervisorJob

### Job

```text
Parent Job
│
├── Child A
└── Child B
       │
       └── Exception
             │
             ▼
        Parent cancelled
             │
             ▼
        Child A cancelled
```

---

### SupervisorJob

```text
SupervisorJob
│
├── Child A ───── Success
│
└── Child B ───── Failure

Child A vẫn có thể tiếp tục
```

Điều này hữu ích khi các task độc lập với nhau.

---

# 23. Không nên sử dụng `GlobalScope`

Ví dụ không nên:

```kotlin
GlobalScope.launch {
    repository.loadData()
}
```

Vấn đề:

```text
Activity
│
├── Start GlobalScope
│
└── Destroyed
       │
       ▼
Global Coroutine
       │
       └── vẫn chạy
```

Coroutine không còn gắn rõ với lifecycle của UI hoặc ViewModel.

Điều này có thể gây:

* Khó cancellation.
* Khó testing.
* Khó debugging.
* Công việc chạy lâu hơn cần thiết.
* Lifecycle không rõ ràng.

Trong Android thường ưu tiên:

```kotlin
viewModelScope
```

hoặc:

```kotlin
lifecycleScope
```

hoặc một scope được quản lý rõ ràng bởi application architecture.

---

# 24. Ví dụ thực tế: gọi API

## Repository

```kotlin
class UserRepository(
    private val api: UserApi
) {

    suspend fun getUsers(): List<User> {
        return api.getUsers()
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
        MutableStateFlow<UserUiState>(UserUiState.Idle)

    val uiState: StateFlow<UserUiState> = _uiState

    fun loadUsers() {

        viewModelScope.launch {

            _uiState.value = UserUiState.Loading

            try {

                val users = repository.getUsers()

                _uiState.value =
                    UserUiState.Success(users)

            } catch (e: Exception) {

                _uiState.value =
                    UserUiState.Error(e.message ?: "Unknown error")
            }
        }
    }
}
```

---

# 25. UI State

Có thể định nghĩa:

```kotlin
sealed interface UserUiState {

    data object Idle : UserUiState

    data object Loading : UserUiState

    data class Success(
        val users: List<User>
    ) : UserUiState

    data class Error(
        val message: String
    ) : UserUiState
}
```

State flow:

```text
Idle
 │
 │ loadUsers()
 ▼
Loading
 │
 ├───────────────┐
 │               │
 ▼               ▼
Success         Error
```

CoroutineScope đóng vai trò quản lý lifecycle của quá trình:

```text
Request
→ Loading
→ Success/Error
```

---

# 26. Cancellation và Exception

Cần đặc biệt chú ý không vô tình "nuốt" cancellation.

Ví dụ:

```kotlin
try {

    repository.getUsers()

} catch (e: Exception) {

    // xử lý lỗi
}
```

`CancellationException` liên quan đến cơ chế cancellation của coroutine, vì vậy không nên xử lý nó giống lỗi thông thường rồi tiếp tục công việc.

Một cách rõ ràng hơn:

```kotlin
try {

    repository.getUsers()

} catch (e: CancellationException) {

    throw e

} catch (e: Exception) {

    handleError(e)
}
```

---

# 27. Retry

Một số tác vụ network có thể retry.

Ví dụ đơn giản:

```kotlin
repeat(3) { attempt ->

    try {

        repository.loadData()

        return@launch

    } catch (e: IOException) {

        delay(1000)
    }
}
```

Trong production thường cần cân nhắc:

* Retry bao nhiêu lần.
* Retry loại lỗi nào.
* Exponential backoff.
* Internet connectivity.
* User cancellation.
* Request idempotency.

Không nên retry mọi exception một cách vô hạn.

---

# 28. Ví dụ luồng hoàn chỉnh

```text
User
 │
 │ Tap "Refresh"
 ▼
UI
 │
 ▼
ViewModel
 │
 │ viewModelScope.launch
 ▼
Set Loading
 │
 ▼
Repository
 │
 ▼
Network Request
 │
 ├──────────── Success
 │                 │
 │                 ▼
 │             Update State
 │                 │
 │                 ▼
 │                UI
 │
 └──────────── Failure
                   │
                   ▼
                Retry?
                   │
             ┌─────┴─────┐
             │           │
            Yes          No
             │           │
           Retry       Error State
```

---

# 29. Coroutine Scope và Clean Architecture

Trong kiến trúc Android:

```text
┌────────────────────────────┐
│ UI Layer                   │
│ Compose / Activity         │
└─────────────┬──────────────┘
              │
              ▼
┌────────────────────────────┐
│ ViewModel                  │
│ viewModelScope             │
└─────────────┬──────────────┘
              │
              ▼
┌────────────────────────────┐
│ Domain Layer               │
│ UseCase                    │
│ suspend function           │
└─────────────┬──────────────┘
              │
              ▼
┌────────────────────────────┐
│ Data Layer                 │
│ Repository                 │
└─────────────┬──────────────┘
              │
        ┌─────┴─────┐
        ▼           ▼
      REST         Room
```

Thông thường:

> **ViewModel quyết định khi nào công việc bắt đầu; các layer phía dưới cung cấp `suspend` API để thực hiện công việc.**

Không nhất thiết tạo `CoroutineScope` mới trong mọi Repository.

---

# 30. CoroutineScope và Lifecycle

Hãy luôn đặt câu hỏi:

> Coroutine này nên sống bao lâu?

Ví dụ:

| Công việc                            | Scope phù hợp                            |
| ------------------------------------ | ---------------------------------------- |
| Load màn hình                        | `viewModelScope`                         |
| UI animation phụ thuộc Activity      | `lifecycleScope`                         |
| Collect UI state                     | lifecycle-aware collection               |
| Business logic màn hình              | `viewModelScope`                         |
| Công việc phải tiếp tục dù app đóng  | Không nên chỉ dựa vào UI coroutine scope |
| Background task cần đảm bảo thực thi | Thường cân nhắc WorkManager              |

Điểm rất quan trọng:

```text
CoroutineScope
≠
Background task manager
```

Coroutine không tự bảo đảm rằng một tác vụ sẽ tiếp tục khi process Android bị hệ điều hành kill.

---

# 31. CoroutineScope và WorkManager

Ví dụ upload dữ liệu quan trọng:

```text
User đóng app
      │
      ▼
Process bị kill
      │
      ▼
Coroutine mất
```

Nếu task phải được đảm bảo chạy lại:

```text
Persistent Background Work
          │
          ▼
      WorkManager
```

Trong khi:

```text
Screen-level async work
          │
          ▼
    viewModelScope
```

Do đó:

```text
Coroutine
    │
    ├── Async logic
    ├── Concurrency
    └── Cancellation

WorkManager
    │
    ├── Persistent work
    ├── Constraints
    └── Scheduling
```

---

# 32. Các lỗi phổ biến

## Lỗi 1 — `GlobalScope`

```kotlin
GlobalScope.launch {
    loadData()
}
```

Nên tránh nếu không có lý do kiến trúc rất rõ ràng.

---

## Lỗi 2 — Blocking Main Thread

```kotlin
viewModelScope.launch {

    val text = File("huge.txt").readText()

}
```

Nếu đây là blocking I/O:

```kotlin
val text = withContext(Dispatchers.IO) {

    File("huge.txt").readText()

}
```

---

## Lỗi 3 — Tạo scope nhưng không cancel

```kotlin
val scope = CoroutineScope(Job())
```

nhưng không bao giờ:

```kotlin
scope.cancel()
```

Có thể khiến coroutine sống lâu hơn component sở hữu nó.

---

## Lỗi 4 — Không quan tâm lifecycle

```text
Fragment destroyed

↓

Coroutine vẫn cố update View
```

Có thể gây:

* Crash.
* State inconsistency.
* Memory leak.
* UI bất thường.

---

## Lỗi 5 — Retry vô hạn

```kotlin
while (true) {
    request()
}
```

Có thể gây:

* Tốn pin.
* Tốn dữ liệu mạng.
* Spam server.
* UX kém.

---

# 33. Debug Coroutine

Có thể log các state quan trọng:

```kotlin
viewModelScope.launch {

    Log.d("UserVM", "Request started")

    try {

        val data = repository.getUsers()

        Log.d("UserVM", "Request success")

    } catch (e: CancellationException) {

        Log.d("UserVM", "Request cancelled")

        throw e

    } catch (e: Exception) {

        Log.e("UserVM", "Request failed", e)
    }
}
```

Log hữu ích:

```text
Request started
      │
      ├── Success
      │
      ├── Error
      │
      └── Cancelled
```

---

# 34. Thực hành

## Bài thực hành: Load dữ liệu bất đồng bộ

### Yêu cầu

Xây dựng một màn hình có nút:

```text
Load Data
```

Khi user nhấn:

```text
Idle
 ↓
Loading
 ↓
Success / Error
```

### ViewModel

```kotlin
class DemoViewModel : ViewModel() {

    private val _state =
        MutableStateFlow<String>("Idle")

    val state = _state.asStateFlow()

    fun loadData() {

        viewModelScope.launch {

            _state.value = "Loading"

            try {

                delay(3000)

                _state.value = "Success"

            } catch (e: CancellationException) {

                _state.value = "Cancelled"

                throw e
            }
        }
    }
}
```

---

# 35. Bài tập

## Bài tập chính

Di chuyển một tác vụ chạy lâu ra khỏi luồng UI và giải thích:

1. Coroutine thuộc scope nào?
2. Ai sở hữu scope?
3. Coroutine bị hủy khi nào?
4. Dispatcher nào được sử dụng?
5. Nếu network lỗi thì xử lý thế nào?
6. Có retry không?
7. Nếu user rời màn hình thì chuyện gì xảy ra?
8. Nếu rotate màn hình thì chuyện gì xảy ra?

---

## Bài tập nâng cao

Xây dựng flow:

```text
Button Click
   │
   ▼
viewModelScope.launch
   │
   ▼
Loading
   │
   ▼
Network Request
   │
   ├── Success
   │      ↓
   │   Success State
   │
   ├── Error
   │      ↓
   │    Retry
   │
   └── Cancel
          ↓
      Cancelled
```

Log toàn bộ state transition để phục vụ debugging.

---

# 36. Mini Project cho Portfolio

## Async User Loader

Xây dựng một app nhỏ có:

* Retrofit API.
* Repository.
* ViewModel.
* `viewModelScope`.
* `StateFlow`.
* Loading state.
* Error state.
* Retry.
* Cancellation.
* Log state transition.

Kiến trúc:

```text
Compose UI
    │
    ▼
ViewModel
    │
    │ viewModelScope
    ▼
UseCase
    │
    ▼
Repository
    │
    ▼
Retrofit
    │
    ▼
REST API
```

Trong README giải thích:

```text
Why viewModelScope?
Why not GlobalScope?
How cancellation works?
How errors are handled?
How retry works?
How lifecycle changes affect the request?
```

Đây là một artifact tốt để chứng minh rằng bạn không chỉ biết syntax coroutine mà còn hiểu **lifecycle và architecture**.

---

# 37. Checklist hoàn thành

* [ ] Giải thích được `CoroutineScope` là gì.
* [ ] Hiểu `CoroutineScope` quản lý lifecycle của coroutine.
* [ ] Hiểu `Job`.
* [ ] Hiểu parent-child coroutine.
* [ ] Hiểu Structured Concurrency.
* [ ] Sử dụng được `launch`.
* [ ] Phân biệt `CoroutineScope` và `coroutineScope`.
* [ ] Hiểu `viewModelScope`.
* [ ] Hiểu `lifecycleScope`.
* [ ] Biết khi nào dùng `Dispatchers.Main`.
* [ ] Biết khi nào dùng `Dispatchers.IO`.
* [ ] Biết khi nào dùng `Dispatchers.Default`.
* [ ] Hiểu cancellation.
* [ ] Biết `isActive` và `ensureActive()`.
* [ ] Hiểu `SupervisorJob` / `supervisorScope`.
* [ ] Tránh lạm dụng `GlobalScope`.
* [ ] Biết xử lý error và retry.
* [ ] Hiểu rotate/background ảnh hưởng coroutine như thế nào.
* [ ] Phân biệt coroutine với persistent background work.
* [ ] Có mini project hoặc code demo cho portfolio.

---

# 38. Ghi chú khi đưa vào Production

Khi sử dụng Coroutine Scope trong production, hãy kiểm tra ít nhất các câu hỏi sau:

### Lifecycle

```text
Ai sở hữu coroutine?
↓
Coroutine sống bao lâu?
↓
Khi component biến mất có cancel không?
```

### Thread

```text
Task là gì?
│
├── UI → Main
├── Blocking I/O → IO
└── CPU-heavy → Default
```

### State

```text
Idle
 ↓
Loading
 ↓
Success / Error
```

Không để UI rơi vào trạng thái:

```text
Loading mãi mãi
```

### Error

Cần phân biệt:

```text
Network Error
Server Error
Parsing Error
Cancellation
Business Error
```

Không nên coi tất cả đều là cùng một loại lỗi.

### Retry

Kiểm tra:

```text
Có cần retry?
↓
Retry lỗi nào?
↓
Bao nhiêu lần?
↓
Delay bao lâu?
↓
Có backoff không?
```

### Testing

Nên kiểm thử:

* Success.
* Failure.
* Cancellation.
* Retry.
* Loading state.
* Multiple requests.
* User rời màn hình.
* Lifecycle thay đổi.

---

# 39. Sơ đồ tổng kết

```text
                    CoroutineScope
                          │
                  CoroutineContext
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
             Job      Dispatcher   Exception
              │
              ▼
      Structured Concurrency
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
    Child A Child B Child C
       │      │      │
       └──────┼──────┘
              │
           Cancel
              │
              ▼
       Lifecycle Safety
```

Trong Android:

```text
                    Android UI
                        │
                        ▼
                    ViewModel
                        │
                        ▼
                viewModelScope
                        │
                   launch { }
                        │
                        ▼
                    UseCase
                        │
                        ▼
                   Repository
                        │
               ┌────────┴────────┐
               ▼                 ▼
            Network            Database
               │                 │
               └────────┬────────┘
                        ▼
                     Result
                        │
                        ▼
                    StateFlow
                        │
                        ▼
                       UI
```

---

## 40. Ghi nhớ nhanh

> **Coroutine** = công việc bất đồng bộ.

> **CoroutineScope** = phạm vi quản lý các coroutine.

> **Job** = lifecycle và cancellation của coroutine.

> **Dispatcher** = quyết định coroutine thực thi ở đâu.

> **Structured Concurrency** = coroutine có quan hệ parent–child rõ ràng.

> **`viewModelScope`** = phù hợp với công việc thuộc ViewModel.

> **`lifecycleScope`** = phù hợp với công việc thuộc lifecycle của UI component.

> **Cancellation** = coroutine phải dừng khi công việc không còn cần thiết.

> **Không block Main Thread.**

> **Không dùng `GlobalScope` như lựa chọn mặc định.**

Cách tư duy quan trọng nhất khi sử dụng coroutine trong Android là:

```text
Coroutine này thuộc về ai?
        ↓
Nó cần sống bao lâu?
        ↓
Nó chạy loại công việc gì?
        ↓
Nó có thể bị cancel khi nào?
        ↓
Error và state được xử lý ra sao?
        ↓
Nếu lifecycle thay đổi thì chuyện gì xảy ra?
```

Nếu trả lời được sáu câu hỏi này, bạn đã hiểu phần cốt lõi của **Coroutine Scope trong Android**.

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
