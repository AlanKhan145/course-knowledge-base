# Module 08 — Asynchronism — Bài 016: Cold Flow

| Thuộc tính              | Nội dung                                                      |
| ----------------------- | ------------------------------------------------------------- |
| **Học phần**            | 04 — Network, Async and Services                              |
| **Module**              | Module 08 — Asynchronism                                      |
| **Nhóm nội dung**       | Coroutines                                                    |
| **Nguồn roadmap**       | Asynchronism / Coroutines                                     |
| **Loại bài**            | Async                                                         |
| **Thứ tự trong module** | 016                                                           |
| **Thời lượng gợi ý**    | 34 phút                                                       |
| **Trọng tâm**           | Cold Flow, collection, lifecycle, cancellation và data stream |

> **Cold Flow** là một `Flow` chỉ bắt đầu thực thi khi có collector gọi `collect()`. Mỗi collector mới thường kích hoạt một lần thực thi mới của flow.

---

## 1. Tóm tắt

Trong Kotlin Coroutines, `Flow` mặc định là **cold stream**.

Điều này có nghĩa:

* Khai báo `Flow` **không làm code bên trong chạy ngay**.
* Flow chỉ chạy khi có người **collect**.
* Nếu có nhiều collector, mỗi collector có thể khiến upstream chạy lại từ đầu.
* Khi collector bị cancel, quá trình thu thập dữ liệu cũng thường bị cancel theo.
* Cold Flow rất phù hợp với:

  * database query,
  * repository,
  * xử lý dữ liệu theo pipeline,
  * các tác vụ chỉ nên chạy khi thực sự có người cần kết quả.

Ví dụ:

```kotlin
val numbers = flow {
    println("Flow bắt đầu")

    emit(1)
    emit(2)
    emit(3)
}
```

Đoạn code trên **chưa chạy flow**.

Chỉ khi:

```kotlin
numbers.collect { value ->
    println(value)
}
```

thì block bên trong `flow {}` mới được thực thi.

---

# 2. Mục tiêu học tập

Sau bài này, bạn nên có thể:

* [ ] Giải thích được **Cold Flow là gì**.
* [ ] Phân biệt được **khai báo Flow** và **collect Flow**.
* [ ] Hiểu tại sao mỗi collector có thể kích hoạt upstream riêng.
* [ ] Hiểu mối quan hệ giữa Flow và coroutine cancellation.
* [ ] Không chạy công việc nặng trên Main Thread.
* [ ] Biết đưa Cold Flow vào Repository/ViewModel.
* [ ] Biết collect Flow theo lifecycle của Android.
* [ ] Biết khi nào nên chuyển Cold Flow thành `StateFlow` hoặc `SharedFlow`.
* [ ] Viết được test đơn giản cho Flow.

---

# 3. Khái niệm cốt lõi

## 3.1. Cold Flow là gì?

Có thể nhớ bằng một câu:

> **Không có collector → không có luồng dữ liệu chạy.**

Ví dụ:

```kotlin
fun getNumbers(): Flow<Int> = flow {
    println("START")

    emit(1)
    emit(2)
    emit(3)
}
```

Nếu chỉ gọi:

```kotlin
val flow = getNumbers()
```

thì:

```text
START
```

**không được in ra**.

Phải có:

```kotlin
getNumbers().collect {
    println(it)
}
```

khi đó mới có:

```text
START
1
2
3
```

---

# 4. Sơ đồ hoạt động của Cold Flow

```text
Tạo Flow
   │
   ▼
flow { ... }
   │
   │ chưa có collect()
   ▼
KHÔNG CHẠY
   │
   │ collect()
   ▼
Collector
   │
   ▼
Flow bắt đầu chạy
   │
   ├── emit(data 1)
   ├── emit(data 2)
   └── emit(data 3)
         │
         ▼
      Collector
```

Có thể hình dung Cold Flow giống như một **công thức**:

```text
Flow = công thức pha cà phê

        chưa có người gọi
              │
              ▼
        không pha gì cả

Collector A ──► pha một cốc
Collector B ──► pha thêm một cốc khác
```

Mỗi collector có thể tạo ra **một phiên thực thi riêng**.

---

# 5. Ví dụ cơ bản

```kotlin
val temperatureFlow = flow {
    println("Reading temperature...")

    emit(25)
    delay(1000)

    emit(26)
    delay(1000)

    emit(27)
}
```

Collect:

```kotlin
temperatureFlow.collect { temperature ->
    println("Temperature: $temperature")
}
```

Output:

```text
Reading temperature...
Temperature: 25
Temperature: 26
Temperature: 27
```

Điểm quan trọng:

```kotlin
val temperatureFlow = flow { ... }
```

không bắt đầu công việc.

Chính:

```kotlin
collect()
```

mới bắt đầu quá trình.

---

# 6. Nhiều collector thì chuyện gì xảy ra?

Giả sử:

```kotlin
val userFlow = flow {
    println("Loading user...")

    delay(1000)

    emit("An")
}
```

Collector 1:

```kotlin
userFlow.collect {
    println("Collector A: $it")
}
```

Collector 2:

```kotlin
userFlow.collect {
    println("Collector B: $it")
}
```

Kết quả về mặt ý tưởng:

```text
Loading user...
Collector A: An

Loading user...
Collector B: An
```

Tức là upstream được chạy **hai lần**.

---

## 6.1. Đây có thể là vấn đề với API

Ví dụ:

```kotlin
fun getProfile(): Flow<User> = flow {
    val user = api.getProfile()

    emit(user)
}
```

Nếu hai thành phần cùng collect:

```text
Collector A
    │
    └── API request #1

Collector B
    │
    └── API request #2
```

Bạn có thể vô tình tạo **hai HTTP request giống nhau**.

Đây là một lý do cần hiểu rõ Cold Flow trước khi sử dụng Flow trong production.

---

# 7. Cold Flow trong Android Architecture

Một cấu trúc phổ biến:

```text
┌─────────────┐
│     API     │
│  Database   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Repository  │
│ Flow<Data>  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ ViewModel   │
│ StateFlow   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│     UI      │
│  Compose    │
└─────────────┘
```

Repository có thể expose Cold Flow:

```kotlin
class UserRepository(
    private val dao: UserDao
) {

    fun observeUsers(): Flow<List<User>> {
        return dao.observeUsers()
    }
}
```

Sau đó ViewModel có thể chuyển thành `StateFlow`.

---

# 8. Cold Flow → StateFlow

Ví dụ:

```kotlin
class UserViewModel(
    repository: UserRepository
) : ViewModel() {

    val users = repository
        .observeUsers()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = emptyList()
        )
}
```

Pipeline:

```text
Room / Repository
      │
      │ Cold Flow
      ▼
    stateIn()
      │
      ▼
   StateFlow
      │
      ▼
      UI
```

Lợi ích:

* chia sẻ kết quả cho nhiều collector,
* giữ state hiện tại,
* tránh chạy lại upstream không cần thiết,
* phù hợp với UI state.

---

# 9. Cold Flow và Main Thread

Cold Flow **không tự động có nghĩa là chạy background thread**.

Ví dụ nguy hiểm:

```kotlin
flow {
    val result = veryHeavyCalculation()

    emit(result)
}
```

Nếu collect trên Main Dispatcher thì tác vụ CPU nặng có thể ảnh hưởng UI.

Có thể sử dụng:

```kotlin
flow {
    val result = veryHeavyCalculation()

    emit(result)
}.flowOn(Dispatchers.Default)
```

---

## 9.1. Dispatcher thường gặp

| Dispatcher            | Phù hợp                      |
| --------------------- | ---------------------------- |
| `Dispatchers.Main`    | UI                           |
| `Dispatchers.IO`      | File, database, blocking I/O |
| `Dispatchers.Default` | CPU-intensive computation    |

Ví dụ:

```kotlin
fun processImages(): Flow<Result> =
    flow {
        val result = processLargeImage()

        emit(result)
    }
    .flowOn(Dispatchers.Default)
```

---

# 10. `flowOn()`

`flowOn()` thay đổi coroutine context của **upstream**.

Ví dụ:

```kotlin
repository
    .loadData()
    .flowOn(Dispatchers.IO)
    .collect { data ->

        // Collector có thể đang ở Main
        render(data)
    }
```

Sơ đồ:

```text
Dispatchers.IO
────────────────────────────

API / DB
   │
   ▼
map()
   │
   ▼
Flow
   │
   │ flowOn(IO)
   ▼

────────────────────────────
Dispatchers.Main

collect()
   │
   ▼
Update UI
```

---

# 11. Cancellation

Flow hoạt động cùng coroutine cancellation.

Ví dụ:

```kotlin
val flow = flow {
    repeat(100) { index ->

        delay(1000)

        emit(index)
    }
}
```

Collect:

```kotlin
val job = launch {

    flow.collect {
        println(it)
    }
}
```

Sau đó:

```kotlin
job.cancel()
```

Flow sẽ ngừng collect.

---

## Vì sao quan trọng trên Android?

Nếu người dùng:

```text
Screen A
   │
   ▼
collect Flow
   │
   ▼
rời Screen A
```

thì công việc không còn cần thiết nên được dừng.

Điều này giúp giảm:

* network request thừa,
* CPU usage,
* memory usage,
* battery usage,
* update UI đã không còn tồn tại.

---

# 12. Lifecycle-aware collection

Trong Android, không nên tùy tiện:

```kotlin
lifecycleScope.launch {
    viewModel.data.collect {
        ...
    }
}
```

nếu muốn collection tự động phụ thuộc lifecycle.

Có thể sử dụng:

```kotlin
lifecycleScope.launch {

    repeatOnLifecycle(Lifecycle.State.STARTED) {

        viewModel.data.collect { data ->
            render(data)
        }
    }
}
```

Lifecycle:

```text
CREATED
   │
   ▼
STARTED
   │
   ├── collect Flow
   │
   ▼
RESUMED
   │
   ▼
STARTED
   │
   ▼
STOPPED
   │
   └── cancel collection
```

Khi Activity/Fragment quay lại `STARTED`, collection có thể bắt đầu lại.

Với **Cold Flow**, điều này cũng đồng nghĩa upstream có thể chạy lại.

---

# 13. Jetpack Compose

Trong Compose, với Flow đại diện cho UI state, thường collect thông qua lifecycle-aware API.

Ví dụ:

```kotlin
@Composable
fun UserScreen(
    viewModel: UserViewModel
) {

    val users by viewModel.users
        .collectAsStateWithLifecycle()

    UserList(users)
}
```

Pipeline:

```text
Repository
   │
   │ Cold Flow
   ▼
ViewModel
   │
   │ StateFlow
   ▼
collectAsStateWithLifecycle()
   │
   ▼
Compose UI
```

---

# 14. Xử lý lỗi với `catch`

Ví dụ:

```kotlin
repository
    .getUsers()
    .catch { error ->
        Log.e("Users", "Load failed", error)
    }
    .collect { users ->
        render(users)
    }
```

Hoặc chuyển thành UI state:

```kotlin
repository
    .getUsers()
    .map<List<User>, UiState> {
        UiState.Success(it)
    }
    .catch {
        emit(UiState.Error(it.message))
    }
```

---

# 15. Retry

Network Flow có thể dùng `retry`.

```kotlin
repository
    .loadUsers()
    .retry(3)
    .collect {
        render(it)
    }
```

Hoặc kiểm soát điều kiện retry:

```kotlin
.retryWhen { cause, attempt ->

    cause is IOException && attempt < 3
}
```

Pipeline:

```text
API Request
    │
    ▼
 Success? ── Yes ──► emit(data)
    │
    No
    │
    ▼
 IOException?
    │
    Yes
    ▼
 attempt < 3?
    │
    Yes
    └──────────────► Retry
```

---

# 16. Theo dõi trạng thái bằng log

Trong quá trình học và debug, có thể log lifecycle của stream.

```kotlin
repository
    .getUsers()
    .onStart {
        Log.d("UserFlow", "START")
    }
    .onEach {
        Log.d("UserFlow", "DATA: $it")
    }
    .catch {
        Log.e("UserFlow", "ERROR", it)
    }
    .onCompletion {
        Log.d("UserFlow", "COMPLETED")
    }
    .collect()
```

Một flow đơn giản có thể có:

```text
START
  │
  ▼
LOADING
  │
  ├─────────────┐
  ▼             ▼
SUCCESS        ERROR
  │             │
  └──────┬──────┘
         ▼
     COMPLETED
```

---

# 17. Cold Flow và Hot Flow

Đây là khác biệt rất quan trọng.

| Cold Flow                                | Hot Flow                             |
| ---------------------------------------- | ------------------------------------ |
| Chỉ chạy khi được collect                | Có thể tồn tại độc lập với collector |
| Mỗi collector có thể chạy upstream riêng | Có thể chia sẻ cùng một stream       |
| Không nhất thiết giữ giá trị cuối        | `StateFlow` giữ state hiện tại       |
| `flow {}` thường là cold                 | `StateFlow`, `SharedFlow` là hot     |
| Tốt cho pipeline dữ liệu                 | Tốt cho shared state/event           |

Ví dụ Cold Flow:

```kotlin
val users = flow {
    emit(api.getUsers())
}
```

Ví dụ Hot Flow:

```kotlin
private val _state =
    MutableStateFlow<UiState>(UiState.Loading)

val state: StateFlow<UiState> = _state
```

---

# 18. Một cách nhớ đơn giản

```text
Cold Flow
─────────

Collector
   │
   ▼
START FLOW
   │
   ▼
emit()
   │
   ▼
Collector


Hot Flow
────────

Producer
   │
   ▼
FLOW đang tồn tại
   │
   ├────► Collector A
   │
   ├────► Collector B
   │
   └────► Collector C
```

---

# 19. Ví dụ thực tế: Search Repository

```kotlin
class ProductRepository(
    private val api: ProductApi
) {

    fun search(query: String): Flow<List<Product>> =
        flow {

            val products = api.searchProducts(query)

            emit(products)
        }
        .flowOn(Dispatchers.IO)
}
```

ViewModel:

```kotlin
class ProductViewModel(
    private val repository: ProductRepository
) : ViewModel() {

    fun search(query: String): Flow<List<Product>> {
        return repository.search(query)
    }
}
```

Nếu UI collect:

```text
User Search
    │
    ▼
collect()
    │
    ▼
Cold Flow bắt đầu
    │
    ▼
API request
    │
    ▼
emit(products)
    │
    ▼
UI
```

---

# 20. Vấn đề khi rotate/background

Giả sử Activity trực tiếp collect một Cold Flow từ API.

```text
Activity
   │
   ▼
collect()
   │
   ▼
API Request #1
```

User rotate:

```text
Activity cũ destroyed
        │
        ▼
collection cancelled
        │
        ▼
Activity mới
        │
        ▼
collect()
        │
        ▼
API Request #2
```

Nếu đây là dữ liệu UI cần giữ, ta thường muốn đưa việc quản lý state lên ViewModel:

```text
Cold Flow
   │
   ▼
ViewModel
   │
 stateIn()
   ▼
StateFlow
   │
   ▼
Activity / Compose
```

Điều này giúp architecture ổn định hơn khi UI bị recreate.

---

# 21. Bài thực hành

## Yêu cầu

Di chuyển một tác vụ dài khỏi Main Thread và xử lý:

* cancellation,
* loading state,
* error,
* retry,
* logging.

Ví dụ:

```kotlin
fun loadData(): Flow<String> =
    flow {

        Log.d("Flow", "Loading started")

        delay(2000)

        emit("Data loaded")
    }
    .flowOn(Dispatchers.IO)
```

Collect:

```kotlin
viewModelScope.launch {

    loadData()
        .retry(2)
        .catch {
            Log.e("Flow", "Error", it)
        }
        .collect {

            Log.d("Flow", "Received: $it")
        }
}
```

---

# 22. Bài tập

Xây dựng một màn hình:

```text
Load Users
```

Khi mở màn hình:

```text
UI
 │
 ▼
ViewModel
 │
 ▼
Repository
 │
 ▼
Cold Flow
 │
 ▼
Network
```

Yêu cầu:

1. API giả lập mất `2 giây`.
2. Không block Main Thread.
3. Có state:

   * Loading
   * Success
   * Error
4. Retry tối đa 3 lần nếu lỗi network.
5. Cancel khi coroutine bị hủy.
6. Log:

   * Flow started
   * Data emitted
   * Error
   * Completion

---

# 23. Test Cold Flow

Ví dụ đơn giản:

```kotlin
@Test
fun flowEmitsNumbers() = runTest {

    val flow = flow {
        emit(1)
        emit(2)
        emit(3)
    }

    val result = flow.toList()

    assertEquals(
        listOf(1, 2, 3),
        result
    )
}
```

Có thể test thêm:

* emission order,
* error,
* retry,
* cancellation,
* state transformation.

---

# 24. Debug checklist

Khi Flow hoạt động không đúng, kiểm tra:

* Có `collect()` hay chưa?
* Flow có bị collect nhiều lần không?
* Có vô tình gọi API nhiều lần không?
* Công việc nặng đang chạy dispatcher nào?
* Collector có bị lifecycle cancel không?
* Có exception upstream không?
* `catch()` nằm đúng vị trí chưa?
* Có cần `StateFlow` thay vì Cold Flow không?
* Flow có restart sau rotation không?
* Có cần `stateIn()` hoặc `shareIn()` không?

---

# 25. Production checklist

Trước khi đưa Flow vào production, hãy hỏi:

### Thread

* [ ] Có công việc blocking Main Thread không?
* [ ] CPU-heavy task đã chuyển sang `Dispatchers.Default` chưa?
* [ ] Blocking I/O đã được xử lý thích hợp chưa?

### Lifecycle

* [ ] Collector có lifecycle-aware không?
* [ ] Rời màn hình thì collection có được cancel không?
* [ ] Rotate có làm network request chạy lại không?

### State

* [ ] UI state có được giữ ở ViewModel không?
* [ ] Cold Flow có nên chuyển sang `StateFlow` không?
* [ ] Có nhiều collector gây duplicate work không?

### Error

* [ ] Network error được xử lý chưa?
* [ ] Có retry hợp lý không?
* [ ] Có phân biệt lỗi retryable và non-retryable không?

### Testing

* [ ] Test giá trị emit.
* [ ] Test error.
* [ ] Test cancellation.
* [ ] Test retry.
* [ ] Test lifecycle/state nếu cần.

---

# 26. Artifact nhỏ cho Portfolio

Có thể tạo một mini project:

## **Cold Flow User Loader**

### Architecture

```text
Fake API
   │
   ▼
Repository
   │
   │ Flow<List<User>>
   ▼
ViewModel
   │
   │ stateIn()
   ▼
StateFlow<UiState>
   │
   ▼
Compose Screen
```

Portfolio nên có:

* source code,
* sơ đồ architecture,
* screenshot UI,
* Loading/Success/Error states,
* test Flow,
* README giải thích Cold Flow,
* ghi chú về lifecycle/cancellation.

Trong README có thể giải thích:

> Repository expose một Cold Flow. Flow chỉ bắt đầu khi được collect. ViewModel chuyển Cold Flow thành StateFlow để UI có state ổn định và tránh thực thi upstream không cần thiết khi nhiều UI component cùng quan sát dữ liệu.

---

# 27. Các lỗi tư duy thường gặp

### ❌ Sai: “Flow luôn chạy background”

Không đúng.

`Flow` không tự động đảm bảo code chạy trên background thread.

---

### ❌ Sai: “Tạo Flow là Flow chạy”

```kotlin
val flow = repository.getUsers()
```

chưa có nghĩa upstream đã chạy.

Phải có terminal operator như:

```kotlin
flow.collect()
```

---

### ❌ Sai: “Hai collector vẫn chỉ gọi API một lần”

Với Cold Flow:

```text
Collector A → upstream #1
Collector B → upstream #2
```

trừ khi bạn chủ động share stream.

---

### ❌ Sai: “Cold Flow luôn tốt hơn StateFlow”

Hai loại giải quyết hai bài toán khác nhau.

```text
Cold Flow
     │
     ├── lazy stream
     ├── query/pipeline
     └── independent collection

StateFlow
     │
     ├── UI state
     ├── state hiện tại
     └── nhiều subscriber
```

---

# 28. Công thức ghi nhớ

```text
Cold Flow
   =
Lazy
   +
Collect mới chạy
   +
Mỗi collector có thể chạy upstream riêng
   +
Cancellation theo coroutine
```

Với Android UI, pattern rất thường gặp là:

```text
Data Source
    ↓
Cold Flow
    ↓
Repository
    ↓
ViewModel
    ↓
stateIn()
    ↓
StateFlow
    ↓
Lifecycle-aware collection
    ↓
UI
```

---

# 29. Checklist hoàn thành bài

* [ ] Định nghĩa được Cold Flow.
* [ ] Hiểu `flow {}` chưa làm Flow chạy.
* [ ] Hiểu `collect()` kích hoạt upstream.
* [ ] Hiểu mỗi collector có thể tạo execution riêng.
* [ ] Biết nguy cơ duplicate API/database work.
* [ ] Hiểu cancellation.
* [ ] Biết lựa chọn dispatcher phù hợp.
* [ ] Biết dùng `flowOn()`.
* [ ] Biết xử lý `catch()` và `retry()`.
* [ ] Hiểu lifecycle-aware collection.
* [ ] Phân biệt Cold Flow với `StateFlow`/`SharedFlow`.
* [ ] Có ví dụ Android.
* [ ] Có test Flow.
* [ ] Có artifact nhỏ để đưa vào portfolio.

---

## 30. Kết luận

Điểm quan trọng nhất của bài:

> **Cold Flow là lazy stream: code upstream chỉ chạy khi có collector.**

Trong Android, cần suy nghĩ theo toàn bộ pipeline:

```text
Collector xuất hiện
      ↓
Cold Flow bắt đầu
      ↓
Data Source chạy
      ↓
emit()
      ↓
Transform
      ↓
UI nhận state
      ↓
Lifecycle dừng
      ↓
Collection bị cancel
```

Hiểu Cold Flow không chỉ là biết cú pháp `flow {}` và `collect()`. Điều quan trọng hơn là hiểu **ai kích hoạt stream, stream chạy ở đâu, khi nào bị hủy, có bao nhiêu collector, upstream có bị chạy lặp hay không và dữ liệu có cần chuyển thành shared state hay không**. Đây là nền tảng để học tiếp `StateFlow`, `SharedFlow`, `stateIn()`, `shareIn()` và reactive architecture trong Android.
