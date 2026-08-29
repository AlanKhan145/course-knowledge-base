# 010 — Suspend Function

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 08 — Asynchronism         |
| **Nhóm nội dung**       | Coroutines                       |
| **Nguồn roadmap**       | Asynchronism / Coroutines        |
| **Loại bài**            | Async                            |
| **Thứ tự trong module** | 010                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

Trong Kotlin Coroutines, **Suspend Function** là hàm có khả năng **tạm dừng việc thực thi mà không chặn thread hiện tại**, sau đó tiếp tục chạy khi kết quả hoặc tài nguyên cần thiết đã sẵn sàng.

Suspend Function là một trong những khái niệm nền tảng của lập trình bất đồng bộ trên Android và thường xuất hiện khi:

* gọi API qua network;
* đọc/ghi database;
* thực hiện tác vụ I/O;
* chờ timer;
* xử lý dữ liệu bất đồng bộ;
* phối hợp nhiều coroutine;
* triển khai Repository, UseCase và ViewModel.

Điểm rất quan trọng:

> `suspend` **không có nghĩa là tự động chạy trên background thread**.

Một `suspend function` vẫn chạy trên coroutine context hiện tại cho đến khi code bên trong chuyển dispatcher hoặc gọi một API suspend có cơ chế phù hợp.

---

# 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

* Giải thích được `suspend function` là gì.
* Phân biệt **suspend** với **block thread**.
* Biết nơi có thể gọi một suspend function.
* Hiểu rằng `suspend` không đồng nghĩa với `Dispatchers.IO`.
* Biết sử dụng `withContext()` để chuyển dispatcher khi cần.
* Biết cách gọi suspend function từ `ViewModel`.
* Hiểu mối quan hệ giữa Suspend Function với:

  * Coroutine Scope;
  * Dispatcher;
  * Cancellation;
  * Structured Concurrency;
  * Repository;
  * UI State.
* Xử lý exception và cancellation đúng cách.
* Viết và test một suspend function trong Android.

---

# 3. Suspend Function là gì?

Một suspend function được khai báo bằng từ khóa:

```kotlin
suspend
```

Ví dụ:

```kotlin
suspend fun loadUser(): User {
    return userRepository.getUser()
}
```

Hàm này có thể **tạm dừng coroutine** trong lúc chờ công việc hoàn thành.

Điều quan trọng là coroutine bị suspend, **không phải thread bị khóa**.

---

## 3.1 Ví dụ đơn giản

```kotlin
suspend fun loadData(): String {
    delay(1000)
    return "Data loaded"
}
```

`delay(1000)` sẽ tạm dừng coroutine khoảng 1 giây.

Trong thời gian đó, thread có thể làm công việc khác.

### Không giống với

```kotlin
fun loadData(): String {
    Thread.sleep(1000)
    return "Data loaded"
}
```

`Thread.sleep()` sẽ khóa thread trong 1 giây.

---

# 4. Suspend không phải Blocking

Đây là điểm quan trọng nhất của bài.

## Blocking

```text
Thread
  │
  ├── chạy task
  │
  ├──████████████ chờ network ████████████
  │
  └── chạy tiếp
```

Trong thời gian chờ:

```text
Thread = không thể làm việc khác
```

---

## Suspending

```text
Coroutine
   │
   ├── chạy
   │
   ├── suspend
   │
   │
   │       Thread làm việc khác
   │
   └──────────────▶ resume
```

Coroutine tạm dừng nhưng thread được giải phóng.

---

## So sánh

| Blocking                           | Suspending                         |
| ---------------------------------- | ---------------------------------- |
| Khóa thread                        | Không cần khóa thread              |
| Tốn tài nguyên khi phải chờ lâu    | Thread có thể xử lý coroutine khác |
| `Thread.sleep()`                   | `delay()`                          |
| Dễ gây lag UI nếu chạy Main Thread | Phù hợp với async workflow         |
| Thread chờ                         | Coroutine chờ                      |

---

# 5. Vì sao Android cần Suspend Function?

Android có một **Main Thread** chịu trách nhiệm cho UI.

```text
Main Thread
    │
    ├── Draw UI
    ├── Handle Click
    ├── Animation
    ├── Compose
    └── Update State
```

Nếu thực hiện công việc nặng trực tiếp trên Main Thread:

```text
Main Thread
    │
    ├── Render UI
    │
    ├── Network request  ────────────── 5 giây
    │
    └── Render UI
```

UI có thể:

* đứng hình;
* phản hồi chậm;
* drop frame;
* xuất hiện ANR trong trường hợp nghiêm trọng.

Vì vậy Android thường kết hợp:

```text
Coroutine
+
Suspend Function
+
Dispatcher
```

để tổ chức tác vụ bất đồng bộ.

---

# 6. Cú pháp Suspend Function

Cú pháp:

```kotlin
suspend fun functionName(): ResultType {
    // asynchronous work
}
```

Ví dụ:

```kotlin
suspend fun getUser(id: Long): User {
    return userApi.getUser(id)
}
```

Có thể có tham số:

```kotlin
suspend fun login(
    email: String,
    password: String
): User {
    return authApi.login(email, password)
}
```

Có thể không trả về giá trị:

```kotlin
suspend fun saveUser(user: User) {
    userDao.insert(user)
}
```

---

# 7. Suspend Function được gọi ở đâu?

Một suspend function chỉ có thể được gọi:

1. từ **một suspend function khác**;
2. hoặc từ **bên trong một coroutine**.

---

## 7.1 Suspend gọi Suspend

```kotlin
suspend fun getUser(): User {
    return fetchUser()
}

suspend fun fetchUser(): User {
    return api.getUser()
}
```

Luồng:

```text
getUser()
   │
   ▼
fetchUser()
   │
   ▼
API
```

---

## 7.2 Gọi từ Coroutine

Ví dụ trong ViewModel:

```kotlin
viewModelScope.launch {
    val user = repository.getUser()
}
```

Trong đó:

```kotlin
repository.getUser()
```

có thể là một suspend function.

---

# 8. Không thể gọi trực tiếp từ hàm thông thường

Sai:

```kotlin
fun loadUser() {
    val user = repository.getUser()
}
```

Nếu:

```kotlin
repository.getUser()
```

là suspend function thì compiler sẽ báo lỗi.

Ví dụ thông báo thường gặp:

```text
Suspend function should be called only from
a coroutine or another suspend function
```

---

## Cách đúng

```kotlin
fun loadUser() {
    viewModelScope.launch {
        val user = repository.getUser()
    }
}
```

Sơ đồ:

```text
Normal Function
      │
      ▼
viewModelScope.launch
      │
      ▼
Coroutine
      │
      ▼
Suspend Function
```

---

# 9. Suspend Function không tự chuyển sang background thread

Một nhầm lẫn phổ biến:

```kotlin
suspend fun loadData() {
    // không có nghĩa đoạn này tự chạy trên IO thread
}
```

Từ khóa:

```kotlin
suspend
```

chỉ cho phép function tham gia vào cơ chế suspension của coroutine.

Nó **không tự chọn Dispatcher**.

---

## Ví dụ nguy hiểm

```kotlin
suspend fun readHugeFile(): String {
    return File("data.txt").readText()
}
```

Nếu hàm này được gọi từ:

```kotlin
viewModelScope.launch {
    readHugeFile()
}
```

`viewModelScope` mặc định sử dụng Main dispatcher.

Nếu `readText()` là blocking I/O thì nó vẫn có thể block Main Thread.

---

# 10. Main-safe Suspend Function

Một thiết kế tốt là làm cho suspend function ở tầng Data/Repository trở thành **main-safe**.

Ví dụ:

```kotlin
suspend fun readFile(): String =
    withContext(Dispatchers.IO) {
        File("data.txt").readText()
    }
```

Khi ViewModel gọi:

```kotlin
viewModelScope.launch {
    val data = repository.readFile()
}
```

luồng có thể hiểu như:

```text
Main Thread
    │
    ▼
ViewModel
    │
    ▼
repository.readFile()
    │
    ▼
withContext(IO)
    │
    ├──────▶ IO Thread
    │          │
    │          ├── đọc file
    │          │
    │◀─────────┘
    │
    ▼
Main Thread
    │
    ▼
Update UI State
```

---

# 11. `withContext()`

`withContext()` thường dùng để chạy một đoạn code trên một dispatcher khác.

Ví dụ:

```kotlin
suspend fun loadJson(): String {
    return withContext(Dispatchers.IO) {
        File("data.json").readText()
    }
}
```

Ở đây:

```kotlin
Dispatchers.IO
```

phù hợp cho các công việc I/O blocking như:

* đọc file;
* ghi file;
* một số database API blocking;
* một số network API blocking.

---

# 12. Suspend Function với `delay()`

Ví dụ:

```kotlin
suspend fun countdown() {
    delay(1000)
    println("1 second passed")
}
```

Không nên thay bằng:

```kotlin
Thread.sleep(1000)
```

Trong coroutine, ưu tiên:

```kotlin
delay()
```

vì nó suspend coroutine thay vì block thread.

---

# 13. Suspend Function với Network

Một ví dụ phổ biến trong Android:

```kotlin
interface UserApi {

    @GET("users/{id}")
    suspend fun getUser(
        @Path("id") id: Long
    ): UserDto
}
```

Repository:

```kotlin
class UserRepository(
    private val api: UserApi
) {

    suspend fun getUser(id: Long): User {
        return api.getUser(id).toDomain()
    }
}
```

UseCase:

```kotlin
class GetUserUseCase(
    private val repository: UserRepository
) {

    suspend operator fun invoke(id: Long): User {
        return repository.getUser(id)
    }
}
```

ViewModel:

```kotlin
class UserViewModel(
    private val getUserUseCase: GetUserUseCase
) : ViewModel() {

    fun loadUser(id: Long) {

        viewModelScope.launch {

            val user = getUserUseCase(id)

            // update UI state
        }
    }
}
```

---

# 14. Suspend Function trong kiến trúc Android

Một luồng phổ biến:

```text
┌──────────────────────┐
│      Compose UI      │
└──────────┬───────────┘
           │ event
           ▼
┌──────────────────────┐
│      ViewModel       │
│ viewModelScope.launch│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       UseCase        │
│   suspend invoke()   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Repository      │
│ suspend getUser()    │
└──────────┬───────────┘
           │
      ┌────┴────┐
      ▼         ▼
   Network   Database
```

Suspend Function thường được sử dụng mạnh ở:

```text
ViewModel
    ↓
UseCase
    ↓
Repository
    ↓
Data Source
```

---

# 15. Suspend Function và UI State

Không nên chỉ gọi API rồi bỏ kết quả.

Một Android app production thường cần quản lý các trạng thái:

```text
Idle
 │
 ▼
Loading
 │
 ├───────── success ───────▶ Success
 │
 └───────── error ─────────▶ Error
```

Ví dụ:

```kotlin
sealed interface UserUiState {

    data object Idle : UserUiState

    data object Loading : UserUiState

    data class Success(
        val user: User
    ) : UserUiState

    data class Error(
        val message: String
    ) : UserUiState
}
```

ViewModel:

```kotlin
private val _uiState =
    MutableStateFlow<UserUiState>(UserUiState.Idle)

val uiState = _uiState.asStateFlow()
```

---

## Load data

```kotlin
fun loadUser(id: Long) {

    viewModelScope.launch {

        _uiState.value = UserUiState.Loading

        try {

            val user = repository.getUser(id)

            _uiState.value =
                UserUiState.Success(user)

        } catch (e: Exception) {

            _uiState.value =
                UserUiState.Error(
                    e.message ?: "Unknown error"
                )
        }
    }
}
```

---

# 16. Suspend Function và Cancellation

Coroutine hỗ trợ **cooperative cancellation**.

Ví dụ:

```kotlin
val job = viewModelScope.launch {

    loadData()
}

job.cancel()
```

Nếu `loadData()` đang ở một suspension point hỗ trợ cancellation, coroutine có thể bị hủy.

Ví dụ:

```kotlin
suspend fun loadData() {

    delay(5000)

    println("Finished")
}
```

Nếu coroutine bị cancel trong lúc:

```kotlin
delay(5000)
```

thì nó sẽ không tiếp tục bình thường tới:

```kotlin
println("Finished")
```

---

# 17. `CancellationException`

Đây là phần rất quan trọng khi xử lý exception.

Ví dụ sau có vấn đề:

```kotlin
try {

    repository.loadData()

} catch (e: Exception) {

    // xử lý tất cả lỗi
}
```

Vì cancellation của coroutine cũng có thể đi qua exception mechanism.

Nếu bắt exception quá rộng, cần đảm bảo không phá cơ chế cancellation.

Có thể xử lý:

```kotlin
try {

    repository.loadData()

} catch (e: CancellationException) {

    throw e

} catch (e: IOException) {

    // network error
}
```

Nguyên tắc:

> Không nên vô tình "nuốt" cancellation.

---

# 18. Suspend Function và Structured Concurrency

Suspend Function hoạt động tốt nhất khi được sử dụng trong **Structured Concurrency**.

Ví dụ:

```kotlin
suspend fun loadDashboard(): Dashboard =
    coroutineScope {

        val user = async {
            repository.getUser()
        }

        val notifications = async {
            repository.getNotifications()
        }

        Dashboard(
            user = user.await(),
            notifications = notifications.await()
        )
    }
```

Cây coroutine:

```text
loadDashboard()
      │
      ▼
 coroutineScope
      │
   ┌──┴───────────┐
   │              │
   ▼              ▼
getUser()   getNotifications()
   │              │
   └──────┬───────┘
          ▼
      Dashboard
```

Nếu parent scope bị hủy:

```text
Parent cancelled
      │
      ├── cancel getUser()
      │
      └── cancel getNotifications()
```

Đây chính là lợi ích của structured concurrency.

---

# 19. Tuần tự và song song

## Chạy tuần tự

```kotlin
suspend fun loadDashboard(): Dashboard {

    val user = repository.getUser()

    val posts = repository.getPosts()

    return Dashboard(
        user = user,
        posts = posts
    )
}
```

Luồng:

```text
getUser
   │
   ▼
getPosts
   │
   ▼
Dashboard
```

Nếu:

```text
getUser  = 2 giây
getPosts = 2 giây
```

thì tổng thời gian gần:

```text
4 giây
```

---

## Chạy đồng thời

Nếu hai tác vụ độc lập:

```kotlin
suspend fun loadDashboard(): Dashboard =
    coroutineScope {

        val user = async {
            repository.getUser()
        }

        val posts = async {
            repository.getPosts()
        }

        Dashboard(
            user = user.await(),
            posts = posts.await()
        )
    }
```

Luồng:

```text
        Start
          │
     ┌────┴────┐
     ▼         ▼
 getUser    getPosts
     │         │
     └────┬────┘
          ▼
      Dashboard
```

Nếu cùng mất khoảng 2 giây thì tổng thời gian có thể gần:

```text
2 giây
```

thay vì 4 giây.

---

# 20. Suspend Function và Lifecycle

Suspend function tự nó **không biết Android Lifecycle**.

Lifecycle được quản lý bởi Coroutine Scope.

Ví dụ:

```kotlin
viewModelScope.launch {
    repository.loadData()
}
```

Khi ViewModel bị clear:

```text
ViewModel cleared
      │
      ▼
viewModelScope cancelled
      │
      ▼
Coroutine cancelled
      │
      ▼
Suspend operation cancelled
```

Điều này giúp tránh:

* coroutine chạy vô hạn;
* request không còn cần thiết;
* update UI sau khi màn hình đã mất;
* leak tài nguyên.

---

# 21. `viewModelScope`

Một pattern rất phổ biến:

```kotlin
fun loadUser() {

    viewModelScope.launch {

        val user = repository.getUser()

        _uiState.value =
            UserUiState.Success(user)
    }
}
```

Có thể hình dung:

```text
ViewModel
   │
   └── viewModelScope
          │
          └── Coroutine
                 │
                 └── suspend getUser()
```

Lifecycle của coroutine được gắn với ViewModel.

---

# 22. Không nên tạo scope tùy tiện

Không nên:

```kotlin
CoroutineScope(Dispatchers.IO).launch {
    repository.getUser()
}
```

ở khắp nơi trong application.

Điều này làm việc quản lý:

* lifecycle;
* cancellation;
* error;
* ownership;

trở nên khó khăn.

Ưu tiên scope có ownership rõ ràng như:

```kotlin
viewModelScope
```

hoặc:

```kotlin
lifecycleScope
```

hoặc một application scope được quản lý rõ ràng cho tác vụ thực sự cần sống lâu hơn màn hình.

---

# 23. Suspend Function trong Repository

Một thiết kế phổ biến:

```kotlin
interface UserRepository {

    suspend fun getUser(
        id: Long
    ): User
}
```

Implementation:

```kotlin
class UserRepositoryImpl(
    private val api: UserApi,
    private val dao: UserDao
) : UserRepository {

    override suspend fun getUser(
        id: Long
    ): User {

        val dto = api.getUser(id)

        return dto.toDomain()
    }
}
```

Điều này giúp:

* API đơn giản;
* dễ đọc;
* dễ test;
* dễ kết hợp với coroutine;
* tách ViewModel khỏi chi tiết network/database.

---

# 24. Suspend Function trong UseCase

UseCase cũng thường được định nghĩa là suspend.

```kotlin
class LoginUseCase(
    private val repository: AuthRepository
) {

    suspend operator fun invoke(
        email: String,
        password: String
    ): User {

        return repository.login(
            email,
            password
        )
    }
}
```

ViewModel:

```kotlin
viewModelScope.launch {

    val user = loginUseCase(
        email,
        password
    )
}
```

Luồng:

```text
LoginScreen
    │
    ▼
ViewModel
    │
    ▼
LoginUseCase
    │
    ▼
AuthRepository
    │
    ▼
API
```

---

# 25. Suspend Function với Room

DAO có thể sử dụng suspend:

```kotlin
@Dao
interface UserDao {

    @Insert
    suspend fun insert(
        user: UserEntity
    )

    @Query(
        "SELECT * FROM users WHERE id = :id"
    )
    suspend fun getUser(
        id: Long
    ): UserEntity?
}
```

Repository:

```kotlin
suspend fun saveUser(user: User) {

    userDao.insert(
        user.toEntity()
    )
}
```

---

# 26. Suspend Function với Retrofit

Retrofit API:

```kotlin
interface ProductApi {

    @GET("products")
    suspend fun getProducts():
        List<ProductDto>
}
```

Repository:

```kotlin
suspend fun getProducts():
    List<Product> {

    return api
        .getProducts()
        .map { it.toDomain() }
}
```

ViewModel:

```kotlin
viewModelScope.launch {

    val products =
        repository.getProducts()
}
```

---

# 27. Exception Handling

Suspend function có thể throw exception như function thông thường.

Ví dụ:

```kotlin
suspend fun getUser(): User {

    return api.getUser()
}
```

Network request có thể gặp:

```text
IOException
Timeout
HTTP Error
Parsing Error
Server Error
```

ViewModel có thể xử lý:

```kotlin
viewModelScope.launch {

    try {

        val user =
            repository.getUser()

        _uiState.value =
            UserUiState.Success(user)

    } catch (e: IOException) {

        _uiState.value =
            UserUiState.Error(
                "Không có kết nối mạng"
            )
    }
}
```

---

# 28. Result Wrapper

Một hướng khác là Repository trả về domain result.

Ví dụ:

```kotlin
sealed interface Result<out T> {

    data class Success<T>(
        val data: T
    ) : Result<T>

    data class Error(
        val throwable: Throwable
    ) : Result<Nothing>
}
```

Repository:

```kotlin
suspend fun getUser(): Result<User> {

    return try {

        Result.Success(
            api.getUser().toDomain()
        )

    } catch (e: IOException) {

        Result.Error(e)
    }
}
```

ViewModel:

```kotlin
when (
    val result = repository.getUser()
) {

    is Result.Success -> {
        // show data
    }

    is Result.Error -> {
        // show error
    }
}
```

---

# 29. Retry

Không phải suspend function nào lỗi cũng nên retry.

Nhưng với lỗi mạng tạm thời, có thể có chiến lược:

```text
Request
   │
   ▼
Failure
   │
   ▼
Retry?
 ┌─┴───┐
 │     │
Yes    No
 │     │
 ▼     ▼
Retry  Error UI
```

Ví dụ đơn giản:

```kotlin
suspend fun loadWithRetry(): User {

    repeat(3) { attempt ->

        try {

            return repository.getUser()

        } catch (e: IOException) {

            if (attempt == 2) {
                throw e
            }

            delay(1000)
        }
    }

    error("Unreachable")
}
```

Trong production, retry thường cần:

* giới hạn số lần;
* exponential backoff;
* phân loại lỗi;
* cancellation;
* tránh retry lỗi không thể phục hồi.

---

# 30. Flow và Suspend Function khác nhau thế nào?

Hai khái niệm này thường bị nhầm.

## Suspend Function

Thường biểu diễn:

> Một request → một kết quả.

```kotlin
suspend fun getUser(): User
```

Luồng:

```text
Request
   │
   ▼
Wait
   │
   ▼
User
```

---

## Flow

Thường biểu diễn:

> Một stream → nhiều giá trị theo thời gian.

```kotlin
fun observeUsers(): Flow<List<User>>
```

Luồng:

```text
Time ─────────────────────────────▶

Users A
        Users B
                Users C
                        Users D
```

---

## So sánh

| Suspend Function       | Flow                      |
| ---------------------- | ------------------------- |
| Thường trả một kết quả | Có thể emit nhiều kết quả |
| One-shot operation     | Stream                    |
| API request            | Observe database          |
| Insert DB              | Observe state             |
| Login                  | Realtime updates          |

Ví dụ:

```kotlin
suspend fun getUser(): User
```

so với:

```kotlin
fun observeUser(): Flow<User>
```

---

# 31. Suspend Function vs Coroutine

Hai khái niệm không giống nhau.

### Suspend Function

```kotlin
suspend fun getUser()
```

là một function có thể suspend.

### Coroutine

```kotlin
viewModelScope.launch {
    getUser()
}
```

là một instance công việc đang chạy.

Có thể hình dung:

```text
Coroutine
   │
   ├── suspendFunctionA()
   │
   ├── suspendFunctionB()
   │
   └── suspendFunctionC()
```

Một coroutine có thể gọi nhiều suspend function.

---

# 32. Suspend Function vs `launch`

`launch`:

```kotlin
viewModelScope.launch {
    loadUser()
}
```

tạo coroutine.

Trong khi:

```kotlin
suspend fun loadUser()
```

chỉ định nghĩa một suspendable operation.

Luồng:

```text
CoroutineScope
     │
     ▼
   launch
     │
     ▼
 Coroutine
     │
     ▼
Suspend Function
```

---

# 33. Suspend Function vs `async`

`async` dùng khi cần một kết quả có thể await.

```kotlin
val deferred =
    async {
        repository.getUser()
    }

val user =
    deferred.await()
```

Trong khi suspend function có thể được gọi trực tiếp:

```kotlin
val user =
    repository.getUser()
```

Không nên dùng `async` chỉ vì function có `suspend`.

Chỉ dùng nó khi thật sự muốn **concurrent decomposition**.

---

# 34. Ví dụ hoàn chỉnh

Giả sử app có màn hình profile.

## Repository

```kotlin
interface ProfileRepository {

    suspend fun getProfile(
        userId: Long
    ): User
}
```

---

## Repository Implementation

```kotlin
class ProfileRepositoryImpl(
    private val api: UserApi
) : ProfileRepository {

    override suspend fun getProfile(
        userId: Long
    ): User {

        return api
            .getUser(userId)
            .toDomain()
    }
}
```

---

## UI State

```kotlin
sealed interface ProfileUiState {

    data object Loading :
        ProfileUiState

    data class Success(
        val user: User
    ) : ProfileUiState

    data class Error(
        val message: String
    ) : ProfileUiState
}
```

---

## ViewModel

```kotlin
class ProfileViewModel(
    private val repository: ProfileRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<ProfileUiState>(
            ProfileUiState.Loading
        )

    val uiState =
        _uiState.asStateFlow()

    fun loadProfile(
        userId: Long
    ) {

        viewModelScope.launch {

            _uiState.value =
                ProfileUiState.Loading

            try {

                val user =
                    repository.getProfile(
                        userId
                    )

                _uiState.value =
                    ProfileUiState.Success(
                        user
                    )

            } catch (
                e: CancellationException
            ) {

                throw e

            } catch (
                e: IOException
            ) {

                _uiState.value =
                    ProfileUiState.Error(
                        "Không thể kết nối máy chủ"
                    )
            }
        }
    }
}
```

---

# 35. Luồng hoạt động hoàn chỉnh

```text
User mở Profile
       │
       ▼
ProfileScreen
       │
       ▼
ViewModel.loadProfile()
       │
       ▼
viewModelScope.launch
       │
       ▼
State = Loading
       │
       ▼
repository.getProfile()
       │
       ▼
suspend API request
       │
   ┌───┴────────┐
   │            │
Success       Error
   │            │
   ▼            ▼
Success UI    Error UI
```

---

# 36. Tác động tới UX

Suspend Function không chỉ là vấn đề cú pháp Kotlin.

Nếu async flow được thiết kế tốt:

```text
User Action
    │
    ▼
Loading
    │
    ▼
Background Work
    │
 ┌──┴──────┐
 │         │
 ▼         ▼
Data      Error
```

người dùng có:

* UI phản hồi nhanh;
* loading state rõ ràng;
* không freeze màn hình;
* error message phù hợp;
* khả năng retry;
* request được hủy khi không còn cần thiết.

Ngược lại, async code kém có thể dẫn đến:

```text
Freeze
ANR
Duplicate Request
Lost State
Stale Data
Memory Leak
Crash
```

---

# 37. Testing Suspend Function

Kotlin Coroutines cung cấp công cụ để test coroutine.

Ví dụ:

```kotlin
@Test
fun `getUser returns user`() =
    runTest {

        val user =
            repository.getUser()

        assertEquals(
            "An",
            user.name
        )
    }
```

`runTest` tạo môi trường phù hợp để chạy suspend code trong test.

---

## Test lỗi

```kotlin
@Test
fun `load user returns error when api fails`() =
    runTest {

        fakeApi.shouldFail = true

        val result =
            repository.getUser()

        assertTrue(
            result is Result.Error
        )
    }
```

---

# 38. Debugging Suspend Function

Khi debug async flow nên log:

```text
START
REQUEST
SUCCESS
ERROR
CANCELLED
```

Ví dụ:

```kotlin
suspend fun loadUser(): User {

    Log.d("UserRepository", "START")

    try {

        val user = api.getUser()

        Log.d(
            "UserRepository",
            "SUCCESS"
        )

        return user

    } catch (
        e: CancellationException
    ) {

        Log.d(
            "UserRepository",
            "CANCELLED"
        )

        throw e

    } catch (
        e: Exception
    ) {

        Log.e(
            "UserRepository",
            "ERROR",
            e
        )

        throw e
    }
}
```

---

# 39. Những lỗi phổ biến

## Lỗi 1 — Nghĩ rằng `suspend` tự chạy trên IO

Sai:

```text
suspend = background thread
```

Đúng:

```text
suspend
   │
   ▼
Function có khả năng suspend
```

Dispatcher là vấn đề riêng.

---

## Lỗi 2 — Dùng `Thread.sleep()`

Không nên:

```kotlin
suspend fun waitForSomething() {
    Thread.sleep(1000)
}
```

Nên:

```kotlin
suspend fun waitForSomething() {
    delay(1000)
}
```

---

## Lỗi 3 — Blocking I/O trên Main Dispatcher

Không nên:

```kotlin
suspend fun readFile(): String {
    return File("a.txt").readText()
}
```

Nếu đây là blocking call.

Nên:

```kotlin
suspend fun readFile(): String =
    withContext(Dispatchers.IO) {
        File("a.txt").readText()
    }
```

---

## Lỗi 4 — Tạo CoroutineScope không kiểm soát

Không nên tùy tiện:

```kotlin
CoroutineScope(
    Dispatchers.IO
).launch {
    loadData()
}
```

Ưu tiên scope có lifecycle/ownership rõ ràng.

---

## Lỗi 5 — Nuốt cancellation

Cẩn thận với:

```kotlin
catch (e: Exception) {
    // ignore
}
```

Cancellation nên tiếp tục được truyền đi khi phù hợp.

---

## Lỗi 6 — Dùng `async` cho mọi thứ

Không cần:

```kotlin
val user =
    async {
        repository.getUser()
    }.await()
```

nếu không có concurrency.

Đơn giản hơn:

```kotlin
val user =
    repository.getUser()
```

---

# 40. Mô hình tư duy nên nhớ

Có thể ghi nhớ Suspend Function bằng sơ đồ:

```text
                Coroutine Scope
                      │
                      ▼
                  Coroutine
                      │
                      ▼
              Suspend Function
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
    Suspension Point          Normal Code
          │
          ▼
      Coroutine
      suspended
          │
          ▼
 Thread available for
     other work
          │
          ▼
    Operation ready
          │
          ▼
       Resume
```

Điều cần nhớ nhất:

```text
suspend
   ≠
background thread
```

mà là:

```text
suspend
   =
coroutine có thể tạm dừng
mà không cần block thread
```

---

# 41. Mối quan hệ với các bài Coroutines khác

```text
Coroutines
    │
    ├── Coroutine Scope
    │       │
    │       └── Coroutine lifetime
    │
    ├── Suspend Function   ← bài này
    │       │
    │       └── Suspensible operation
    │
    ├── Dispatchers
    │       │
    │       └── Nơi code thực thi
    │
    ├── Structured Concurrency
    │       │
    │       └── Parent / Child
    │
    ├── Cancellation
    │       │
    │       └── Dừng công việc
    │
    └── Exception Handling
            │
            └── Xử lý lỗi
```

Có thể tư duy:

```text
Scope
  │
  ▼
Coroutine
  │
  ├── Dispatcher
  │
  ├── suspend function
  │
  ├── cancellation
  │
  └── exception
```

Các khái niệm này không độc lập mà kết hợp thành một hệ thống async hoàn chỉnh.

---

# 42. Thực hành

## Bài thực hành — Load Profile

Xây dựng một màn hình:

```text
ProfileScreen
```

có nút:

```text
Load Profile
```

Khi người dùng nhấn:

```text
Click
  │
  ▼
Loading
  │
  ▼
Suspend Function
  │
  ▼
Repository
  │
  ▼
Fake API / Retrofit
  │
 ┌┴─────┐
 │      │
 ▼      ▼
User   Error
```

---

## Repository

```kotlin
interface UserRepository {

    suspend fun getUser(): User
}
```

---

## Fake Repository

```kotlin
class FakeUserRepository :
    UserRepository {

    override suspend fun getUser(): User {

        delay(2000)

        return User(
            id = 1,
            name = "An Khánh"
        )
    }
}
```

---

## ViewModel

```kotlin
fun loadUser() {

    viewModelScope.launch {

        _uiState.value =
            UserUiState.Loading

        try {

            val user =
                repository.getUser()

            _uiState.value =
                UserUiState.Success(
                    user
                )

        } catch (
            e: CancellationException
        ) {

            throw e

        } catch (
            e: Exception
        ) {

            _uiState.value =
                UserUiState.Error(
                    e.message
                        ?: "Unknown error"
                )
        }
    }
}
```

---

# 43. Bài tập

## Bài 1 — Suspend cơ bản

Viết:

```kotlin
suspend fun simulateNetworkRequest(): String
```

Function phải:

1. chờ 2 giây bằng `delay()`;
2. trả về:

```text
Data loaded
```

Không sử dụng:

```kotlin
Thread.sleep()
```

---

## Bài 2 — Main-safe Function

Viết:

```kotlin
suspend fun readLargeFile(): String
```

và sử dụng:

```kotlin
withContext(Dispatchers.IO)
```

để đọc file.

Giải thích vì sao chỉ thêm:

```kotlin
suspend
```

là chưa đủ.

---

## Bài 3 — Cancellation

Tạo coroutine:

```kotlin
val job =
    viewModelScope.launch {
        longRunningTask()
    }
```

sau đó hủy:

```kotlin
job.cancel()
```

Quan sát xem tác vụ có tiếp tục hay không.

---

## Bài 4 — Error State

Tạo Fake Repository ngẫu nhiên:

```text
70% Success
30% Error
```

UI phải có:

```text
Loading
Success
Error
Retry
```

---

## Bài 5 — Parallel Requests

Giả sử:

```kotlin
suspend fun getUser()

suspend fun getPosts()
```

Hãy:

1. chạy tuần tự;
2. đo thời gian;
3. chạy song song với `async`;
4. so sánh kết quả.

---

# 44. Mini Project cho Portfolio

Có thể tạo mini project:

```text
CoroutineProfileDemo
```

### Chức năng

```text
Load Profile
     │
     ▼
Loading
     │
     ▼
Fake Network
     │
 ┌───┴────┐
 │        │
 ▼        ▼
Success  Error
 │        │
 ▼        ▼
Profile Retry
```

Project nên thể hiện:

* `suspend function`;
* `viewModelScope`;
* Repository Pattern;
* StateFlow;
* Loading/Success/Error state;
* cancellation;
* exception handling;
* fake network delay;
* unit test.

---

# 45. Artifact gợi ý cho Portfolio

README có thể ghi:

```markdown
## Coroutine / Suspend Function Demo

Ứng dụng minh họa cách sử dụng Kotlin Coroutines
và Suspend Function trong Android.

### Concepts

- suspend function
- viewModelScope
- structured concurrency
- cancellation
- exception handling
- StateFlow
- Repository Pattern
- main-safe functions
```

Có thể kèm sơ đồ:

```text
UI
 │
 ▼
ViewModel
 │
 ▼
viewModelScope.launch
 │
 ▼
UseCase
 │
 ▼
suspend Repository
 │
 ▼
API / Database
```

---

# 46. Checklist hoàn thành

* [ ] Giải thích được Suspend Function là gì.
* [ ] Hiểu `suspend` không đồng nghĩa với background thread.
* [ ] Phân biệt được suspending và blocking.
* [ ] Biết suspend function chỉ được gọi từ coroutine hoặc suspend function khác.
* [ ] Biết sử dụng `viewModelScope.launch`.
* [ ] Biết khi nào cần `withContext(Dispatchers.IO)`.
* [ ] Hiểu main-safe suspend function.
* [ ] Biết xử lý Loading / Success / Error.
* [ ] Hiểu cancellation.
* [ ] Không vô tình nuốt `CancellationException`.
* [ ] Biết mối quan hệ giữa Suspend Function và Structured Concurrency.
* [ ] Phân biệt Suspend Function và Flow.
* [ ] Phân biệt Suspend Function và Coroutine.
* [ ] Có unit test sử dụng `runTest`.
* [ ] Có một mini project hoặc README làm artifact portfolio.

---

# 47. Ghi chú production

Khi sử dụng Suspend Function trong ứng dụng thật, cần tự hỏi:

### Threading

* Function này có thực sự main-safe không?
* Có blocking API nào đang chạy trên Main Thread không?
* Có cần `Dispatchers.IO` hoặc `Dispatchers.Default` không?

### Lifecycle

* Coroutine thuộc scope nào?
* Khi user rời màn hình, tác vụ có cần tiếp tục không?
* Coroutine có được cancel đúng lúc không?

### State

* UI có trạng thái `Loading` không?
* Thành công được biểu diễn thế nào?
* Lỗi được biểu diễn thế nào?
* Khi rotate/recreate UI, state có bị mất không?

### Error

* Network timeout xử lý thế nào?
* Offline xử lý thế nào?
* Có retry không?
* Retry tối đa bao nhiêu lần?
* Có phân biệt lỗi retry được và lỗi không retry được không?

### Cancellation

* Suspend API có hỗ trợ cancellation không?
* Có đoạn CPU/blocking code dài khiến cancellation bị chậm không?
* Có `catch(Exception)` làm mất cancellation không?

### Testing

* Success path đã được test chưa?
* Error path đã được test chưa?
* Cancellation đã được test chưa?
* Dispatcher trong test có kiểm soát được không?

---

# 48. Tóm tắt nhanh

```text
Suspend Function
      │
      ├── khai báo bằng `suspend`
      │
      ├── có thể tạm dừng coroutine
      │
      ├── không cần block thread khi suspension
      │
      ├── không tự chuyển sang background thread
      │
      ├── chỉ gọi từ coroutine/suspend function
      │
      ├── hỗ trợ cancellation
      │
      └── kết hợp với
            │
            ├── Coroutine Scope
            ├── Dispatchers
            ├── Structured Concurrency
            ├── Exception Handling
            └── UI State
```

## Công thức ghi nhớ

```text
Coroutine Scope
       ↓
    Coroutine
       ↓
 Suspend Function
       ↓
Suspension Point
       ↓
 Thread được giải phóng
       ↓
   Resume later
```

Và điểm **quan trọng nhất** của bài:

> **`suspend` không có nghĩa là "chạy trên background thread". `suspend` có nghĩa là function có thể tạm dừng coroutine mà không cần block thread tại các suspension point phù hợp.**

Đây là nền tảng để chuyển sang các chủ đề tiếp theo như **Dispatchers → Structured Concurrency → Cancellation → Exception Handling in Coroutines**.
