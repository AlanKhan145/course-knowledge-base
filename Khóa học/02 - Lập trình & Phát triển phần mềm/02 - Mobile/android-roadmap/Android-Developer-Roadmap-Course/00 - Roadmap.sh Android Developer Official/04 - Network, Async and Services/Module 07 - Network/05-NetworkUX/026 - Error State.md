[![Guide to app architecture | App architecture | Android Developers](https://tse4.mm.bing.net/th/id/OIP.Bk1EiIKjFXu7XUcyZZ6M6wHaGj?r=0\&pid=Api)](https://developer.android.com/topic/architecture?utm_source=chatgpt.com)

# 026 - Error State

**Học phần:** 04 - Network, Async and Services
**Module:** Module 07 - Network
**Nhóm nội dung:** Network UI States
**Nguồn roadmap:** Network / Network UI States
**Loại bài:** Network
**Thứ tự trong module:** 026
**Thời lượng gợi ý:** 32 phút

---

## 1. Tóm tắt

**Error State** là trạng thái UI biểu diễn việc một thao tác không thể hoàn thành như mong đợi, chẳng hạn:

* Không có kết nối mạng.
* Request bị timeout.
* Server trả về lỗi.
* Người dùng hết phiên đăng nhập.
* API trả dữ liệu không hợp lệ.
* Không tìm thấy dữ liệu.
* Một thao tác tải hoặc gửi dữ liệu thất bại.

Trong kiến trúc Android hiện đại, UI nên được render từ một **UI State rõ ràng**, còn các thao tác của người dùng như `Retry` được gửi ngược lên state holder/ViewModel dưới dạng event. Đây chính là mô hình **Unidirectional Data Flow - UDF** được Android khuyến nghị. ([Android Developers][1])

```text
Repository / API
      │
      │ Result
      ▼
  ViewModel
      │
      │ UiState
      ▼
┌───────────────┐
│      UI       │
│ Loading       │
│ Success       │
│ Error         │
└──────┬────────┘
       │
       │ Retry event
       ▼
   ViewModel
```

Điểm quan trọng:

> Error State không chỉ là `"Something went wrong"`.

Một Error State tốt phải giúp người dùng hiểu:

1. Có chuyện gì xảy ra?
2. Họ còn tiếp tục được không?
3. Họ nên làm gì tiếp theo?
4. Dữ liệu cũ có còn sử dụng được không?
5. Có cần đăng nhập lại, thử lại hay kiểm tra kết nối không?

---

# 2. Mục tiêu học tập

Sau bài này, anh nên có thể:

* Giải thích Error State trong Android bằng ngôn ngữ của mình.
* Phân biệt `Loading`, `Success`, `Empty` và `Error`.
* Biểu diễn Error State bằng `sealed interface` hoặc immutable `data class`.
* Chuyển lỗi từ Repository/Data Layer thành lỗi mà UI hiểu được.
* Không để `Exception` lan trực tiếp vào composable.
* Hiển thị lỗi toàn màn hình hoặc lỗi cục bộ phù hợp với ngữ cảnh.
* Thiết kế nút `Retry`.
* Giữ state ổn định khi rotate hoặc thay đổi configuration.
* Collect `StateFlow` theo lifecycle.
* Viết unit test cho ViewModel và UI test cho màn hình lỗi.
* Biết cách xử lý lỗi khi refresh trong khi vẫn có dữ liệu cũ.

Android khuyến nghị các state holder như `ViewModel` expose state cho UI và giữ logic liên quan đến screen bên ngoài composable. `ViewModel` cũng giữ state qua configuration changes như xoay màn hình. ([Android Developers][2])

---

# 3. Error State nằm ở đâu trong kiến trúc Android?

Một flow phổ biến:

```text
┌──────────────────┐
│      Server      │
└─────────┬────────┘
          │ HTTP
          ▼
┌──────────────────┐
│ Retrofit / OkHttp│
└─────────┬────────┘
          │ DTO / Error
          ▼
┌──────────────────┐
│    Repository    │
│ map technical    │
│ error            │
└─────────┬────────┘
          │ Result
          ▼
┌──────────────────┐
│    ViewModel     │
│ produces UiState │
└─────────┬────────┘
          │ StateFlow
          ▼
┌──────────────────┐
│ Compose / Views  │
│ render Error UI  │
└──────────────────┘
```

Android mô tả UI layer theo hướng application data đi từ data layer tới ViewModel, `UiState` đi xuống UI và UI events đi trở lại ViewModel. ([Android Developers][1])

### Trách nhiệm từng layer

| Layer             | Trách nhiệm                                   |
| ----------------- | --------------------------------------------- |
| Retrofit / OkHttp | Thực hiện HTTP request                        |
| Repository        | Chuyển lỗi kỹ thuật thành kết quả domain/data |
| ViewModel         | Chuyển kết quả thành `UiState`                |
| Compose UI        | Render state                                  |
| User              | Retry / login / dismiss                       |
| ViewModel         | Xử lý event                                   |

### Không nên

```kotlin
@Composable
fun UserScreen() {
    try {
        api.getUsers()
    } catch (e: Exception) {
        Text(e.message ?: "Error")
    }
}
```

UI lúc này:

* biết trực tiếp API;
* biết exception;
* khó test;
* khó retry;
* khó quản lý lifecycle;
* khó tái sử dụng.

### Nên

```text
API
 ↓
Repository
 ↓
Result
 ↓
ViewModel
 ↓
UiState
 ↓
Composable
```

---

# 4. State machine cơ bản

Error State dễ hiểu nhất khi xem nó như một phần của **state machine**.

```text
                 request
┌─────────┐ ───────────────▶ ┌─────────┐
│  Idle   │                  │ Loading │
└─────────┘                  └────┬────┘
                                 │
                      ┌──────────┴──────────┐
                      │                     │
                   success                failure
                      │                     │
                      ▼                     ▼
               ┌───────────┐        ┌───────────┐
               │  Success  │        │   Error   │
               └───────────┘        └─────┬─────┘
                                          │
                                         Retry
                                          │
                                          ▼
                                      Loading
```

Một UI state observable như `StateFlow` cho phép state holder phát state mới và UI render lại khi state thay đổi. Android documentation liệt kê `StateFlow` và Compose `State` là những API phù hợp để expose output của quá trình tạo UI state. ([Android Developers][3])

---

# 5. Loading → Success → Error

Ví dụ request danh sách bài viết:

```text
User mở màn hình
       │
       ▼
    Loading
       │
       ▼
 GET /posts
   ┌───┴─────────────┐
   │                 │
 200 OK             Error
   │                 │
   ▼                 ▼
Success             Error
   │                 │
show list       show message
                     │
                  Retry
                     │
                     ▼
                  Loading
```

Đây là flow tối thiểu mà một màn hình network nên xử lý.

---

# 6. Phân loại Error State

Không phải tất cả lỗi đều nên được UI xử lý giống nhau.

## 6.1 Network / transport error

Ví dụ:

```text
Phone
  │
  X Internet unavailable
  │
Server
```

UI có thể hiển thị:

```text
Không thể kết nối Internet

Hãy kiểm tra kết nối mạng và thử lại.

[ Thử lại ]
```

---

## 6.2 Timeout

Request được gửi nhưng mất quá nhiều thời gian.

```text
App ───── request ─────────▶ Server
App ◀──── waiting... ────── Server
             │
             X timeout
```

UI:

```text
Kết nối đang mất nhiều thời gian hơn bình thường.

[ Thử lại ]
```

---

## 6.3 HTTP/server error

Ví dụ backend trả lỗi.

```text
Client
  │
  │ request
  ▼
Server
  │
  │ error response
  ▼
Client
```

Một mapping UI **phải phụ thuộc vào contract thực tế của backend**, nhưng trong ứng dụng thường sẽ có các nhóm như:

```text
Authentication problem
        ↓
Yêu cầu đăng nhập lại

Permission problem
        ↓
Không có quyền thực hiện

Resource unavailable
        ↓
Không tìm thấy nội dung

Server unavailable
        ↓
Có thể thử lại
```

Không nên hard-code mọi status code trực tiếp trong composable.

---

# 7. Technical Error ≠ UI Error

Một lỗi từ network layer có thể chứa thông tin như:

```text
IOException
SocketTimeoutException
HTTP status
JSON parsing failure
```

Nhưng người dùng không cần thấy:

```text
java.net.SocketTimeoutException:
failed to connect to api.example.com...
```

Thay vào đó:

```text
Network Error
       │
       ▼
Domain/App Error
       │
       ▼
UI Error
       │
       ▼
"Không thể tải dữ liệu"
```

Ví dụ:

```kotlin
sealed interface AppError {

    data object NoInternet : AppError

    data object Timeout : AppError

    data object Unauthorized : AppError

    data object Server : AppError

    data object Unknown : AppError
}
```

Repository chịu trách nhiệm map lỗi kỹ thuật:

```text
IOException
     ↓
NoInternet

Timeout
     ↓
Timeout

authentication failure
     ↓
Unauthorized

server failure
     ↓
Server
```

UI không cần biết Retrofit, OkHttp hoặc exception cụ thể nào được sử dụng.

---

# 8. Cách 1 — `sealed interface UiState`

Khi các trạng thái **loại trừ lẫn nhau**, mô hình này rất dễ hiểu.

```kotlin
sealed interface UserUiState {

    data object Loading : UserUiState

    data class Success(
        val users: List<UserUiModel>
    ) : UserUiState

    data class Error(
        val type: ErrorType
    ) : UserUiState
}
```

```kotlin
enum class ErrorType {
    NETWORK,
    TIMEOUT,
    UNAUTHORIZED,
    SERVER,
    UNKNOWN
}
```

Android Architecture Recommendations cũng cho phép UI state được mô hình hóa bằng immutable data class hoặc sealed class khi các state mang tính loại trừ nhau. ([Android Developers][4])

### State transition

```text
UserUiState.Loading
        │
        ├──────── success ───────▶ Success(users)
        │
        └──────── failure ───────▶ Error(type)
                                       │
                                      Retry
                                       │
                                       ▼
                                    Loading
```

---

# 9. ViewModel quản lý Error State

```kotlin
class UsersViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<UserUiState>(
            UserUiState.Loading
        )

    val uiState: StateFlow<UserUiState> =
        _uiState.asStateFlow()

    init {
        loadUsers()
    }

    fun loadUsers() {
        viewModelScope.launch {

            _uiState.value = UserUiState.Loading

            when (val result = repository.getUsers()) {

                is UserResult.Success -> {
                    _uiState.value =
                        UserUiState.Success(result.users)
                }

                is UserResult.Failure -> {
                    _uiState.value =
                        UserUiState.Error(result.error)
                }
            }
        }
    }

    fun retry() {
        loadUsers()
    }
}
```

`ViewModel` là screen-level state holder, còn `viewModelScope` gắn coroutine với vòng đời của ViewModel. Android cung cấp lifecycle-aware coroutine APIs để quản lý asynchronous work theo lifecycle của component. ([Android Developers][2])

---

# 10. Collect state trong Compose

```kotlin
@Composable
fun UsersRoute(
    viewModel: UsersViewModel
) {
    val uiState by
        viewModel.uiState.collectAsStateWithLifecycle()

    UsersScreen(
        uiState = uiState,
        onRetry = viewModel::retry
    )
}
```

Android hiện khuyến nghị `collectAsStateWithLifecycle()` để collect `Flow` trong Android Compose theo lifecycle, giúp việc collect dừng khi lifecycle không còn ở trạng thái thích hợp. ([Android Developers][5])

Luồng:

```text
StateFlow
    │
    ▼
collectAsStateWithLifecycle()
    │
    ▼
Compose State
    │
    ▼
Recomposition
```

---

# 11. Render Error State

```kotlin
@Composable
fun UsersScreen(
    uiState: UserUiState,
    onRetry: () -> Unit
) {
    when (uiState) {

        UserUiState.Loading -> {
            LoadingScreen()
        }

        is UserUiState.Success -> {
            UserList(
                users = uiState.users
            )
        }

        is UserUiState.Error -> {
            ErrorScreen(
                errorType = uiState.type,
                onRetry = onRetry
            )
        }
    }
}
```

Ưu điểm:

```text
UiState
   │
   ▼
when(state)
 ┌─┼─────────────┐
 │ │             │
 ▼ ▼             ▼
Loading       Success        Error
```

Composable chỉ làm nhiệm vụ:

> `State → UI`

chứ không quyết định network request phải hoạt động ra sao.

Đây phù hợp với UDF của Compose: state đi xuống UI và events đi lên state holder. ([Android Developers][6])

---

# 12. Xây dựng `ErrorScreen`

```kotlin
@Composable
fun ErrorScreen(
    errorType: ErrorType,
    onRetry: () -> Unit,
    modifier: Modifier = Modifier
) {
    val message = when (errorType) {

        ErrorType.NETWORK ->
            "Không thể kết nối Internet."

        ErrorType.TIMEOUT ->
            "Kết nối mất quá nhiều thời gian."

        ErrorType.UNAUTHORIZED ->
            "Phiên đăng nhập đã hết hạn."

        ErrorType.SERVER ->
            "Máy chủ đang gặp sự cố."

        ErrorType.UNKNOWN ->
            "Đã xảy ra lỗi."
    }

    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment =
            Alignment.CenterHorizontally,
        verticalArrangement =
            Arrangement.Center
    ) {

        Text(
            text = message,
            textAlign = TextAlign.Center
        )

        Spacer(
            modifier = Modifier.height(16.dp)
        )

        Button(
            onClick = onRetry
        ) {
            Text("Thử lại")
        }
    }
}
```

---

# 13. Error State nên có gì?

Một error UI hoàn chỉnh thường có cấu trúc:

```text
┌──────────────────────────────┐
│                              │
│            ⚠                 │
│                              │
│    Không thể tải dữ liệu     │
│                              │
│ Hãy kiểm tra kết nối mạng    │
│       và thử lại.            │
│                              │
│       [ Thử lại ]            │
│                              │
└──────────────────────────────┘
```

Các thành phần có thể gồm:

| Thành phần        | Vai trò                    |
| ----------------- | -------------------------- |
| Icon/illustration | Gợi ý trạng thái           |
| Title             | Nói ngắn gọn vấn đề        |
| Description       | Giải thích cần thiết       |
| Primary action    | Retry/Login/etc.           |
| Secondary action  | Back/Cancel                |
| Existing content  | Giữ dữ liệu cũ nếu phù hợp |

---

# 14. Không phải Error nào cũng nên chiếm toàn màn hình

Đây là điểm rất quan trọng.

Có ít nhất hai trường hợp.

## Trường hợp A — Không có dữ liệu nào

```text
Initial load
    ↓
Failure
    ↓
Full-screen error
```

Ví dụ:

```text
┌────────────────────────────┐
│                            │
│          Error             │
│                            │
│  Không thể tải sản phẩm    │
│                            │
│        [Retry]             │
│                            │
└────────────────────────────┘
```

---

## Trường hợp B — Đã có dữ liệu, refresh thất bại

```text
Success
   │
 pull refresh
   │
   ▼
 Refreshing
   │
 network error
   │
   ▼
Keep existing content
+
show local error
```

Không nên biến:

```text
Danh sách 100 sản phẩm
       ↓
refresh fails
       ↓
xóa hết màn hình
       ↓
FULL ERROR
```

Một UX tốt hơn thường là:

```text
┌────────────────────────────┐
│ Products                   │
│                            │
│ Product A                  │
│ Product B                  │
│ Product C                  │
│ Product D                  │
│                            │
│ Không thể làm mới dữ liệu  │
│                [Thử lại]   │
└────────────────────────────┘
```

Đây cũng là lý do một `sealed class Loading/Success/Error` đôi khi chưa đủ.

---

# 15. Khi `sealed UiState` chưa đủ

Giả sử:

```kotlin
sealed interface UiState {
    data object Loading
    data class Success(...)
    data class Error(...)
}
```

Vấn đề:

```text
Có data không?
Loading không?
Refresh lỗi không?
```

Một screen thực tế có thể đồng thời:

```text
users = existing list
isRefreshing = false
error = RefreshFailed
```

Khi đó immutable `data class` thường linh hoạt hơn:

```kotlin
data class UsersUiState(
    val users: List<UserUiModel> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false,
    val error: UiError? = null
)
```

Android documentation cũng mô tả `${Screen}UiState` có thể là một data class chứa data, loading và error signals; sealed class phù hợp hơn khi các state thực sự exclusive. ([Android Developers][7])

Ví dụ:

```text
UsersUiState
│
├── users
│
├── isLoading
│
├── isRefreshing
│
└── error
```

---

# 16. Error State và Empty State khác nhau

Một lỗi phổ biến là coi:

```kotlin
users.isEmpty()
```

là error.

Không đúng.

## Empty State

Request thành công:

```text
GET /users
     ↓
200
     ↓
[]
```

UI:

```text
Chưa có người dùng nào.
```

## Error State

Request không hoàn thành:

```text
GET /users
     ↓
network/server failure
```

UI:

```text
Không thể tải danh sách.
[Thử lại]
```

### Sơ đồ

```text
             Network request
                    │
        ┌───────────┴──────────┐
        │                      │
     Success                 Failure
        │                      │
   ┌────┴─────┐                ▼
   │          │              Error
has data    no data
   │          │
   ▼          ▼
Success      Empty
```

---

# 17. Error State và Validation Error khác nhau

Ví dụ form đăng nhập.

```text
Email: abc
Password:
```

Đây có thể là:

```text
Validation Error
```

không phải:

```text
Network Error
```

UI hợp lý:

```text
Email
[abc________________]

⚠ Email không hợp lệ
```

Không cần full-screen error.

---

# 18. Error State và one-off effect

Giả sử request thành công nhưng anh muốn:

```text
"Đã lưu thành công"
```

hoặc refresh lỗi và muốn hiện snackbar.

Không nên biến mọi thứ thành state kiểu:

```kotlin
showSnackbar = true
```

rồi vô tình hiện lại sau recomposition.

Compose có các Effect APIs dành cho side effects cần được thực hiện trong môi trường được kiểm soát theo lifecycle. Android cũng phân biệt UI state với UI events. ([Android Developers][8])

Có thể nghĩ:

```text
Persistent information
        ↓
      State

One-time UI behavior
        ↓
      Effect
```

Tuy nhiên, với lỗi ảnh hưởng trực tiếp tới nội dung của màn hình, thông tin đó thường nên được phản ánh trong UI state cho tới khi người dùng/app xử lý nó.

---

# 19. Retry flow

Một implementation rõ ràng:

```text
ErrorScreen
    │
    │ onRetry()
    ▼
ViewModel
    │
    │ repository.getUsers()
    ▼
Loading
    │
 ┌──┴───────────┐
 │              │
 ▼              ▼
Success        Error
```

Compose:

```kotlin
Button(
    onClick = onRetry
) {
    Text("Thử lại")
}
```

ViewModel:

```kotlin
fun retry() {
    loadUsers()
}
```

### Không nên

```kotlin
Button(
    onClick = {
        Retrofit.Builder()
            // ...
    }
)
```

Networking logic không thuộc composable.

---

# 20. Chặn nhiều lần Retry

Người dùng có thể spam:

```text
Retry Retry Retry Retry Retry
```

và tạo:

```text
Request #1
Request #2
Request #3
Request #4
Request #5
```

Một giải pháp đơn giản là state chuyển sang loading ngay khi request bắt đầu:

```kotlin
Button(
    onClick = onRetry,
    enabled = !isLoading
)
```

Hoặc:

```text
Error
 ↓ Retry
Loading
 ↓
disable Retry
```

Với các thao tác tạo/cập nhật/xóa dữ liệu, việc retry còn cần cân nhắc semantics của endpoint để tránh vô tình thực hiện cùng một hành động nhiều lần.

---

# 21. Repository không nên trả Exception trực tiếp cho UI

Thay vì:

```kotlin
suspend fun getUsers(): List<UserDto>
```

rồi bắt lỗi khắp nơi, có thể tạo result abstraction.

```kotlin
sealed interface UserResult {

    data class Success(
        val users: List<User>
    ) : UserResult

    data class Failure(
        val error: ErrorType
    ) : UserResult
}
```

Repository:

```kotlin
class UserRepository(
    private val api: UserApi
) {

    suspend fun getUsers(): UserResult {

        return try {

            val users = api.getUsers()
                .map { it.toDomain() }

            UserResult.Success(users)

        } catch (e: IOException) {

            UserResult.Failure(
                ErrorType.NETWORK
            )
        }
    }
}
```

Lúc này:

```text
Data Layer
    │
    │ UserResult
    ▼
ViewModel
    │
    │ UiState
    ▼
UI
```

---

# 22. Không đưa exception message trực tiếp ra UI

Ví dụ không nên:

```kotlin
Text(
    text = exception.message
        ?: "Unknown error"
)
```

Vì message kỹ thuật có thể:

* không thân thiện;
* thay đổi giữa implementation;
* quá chi tiết;
* không localization được;
* không hướng dẫn người dùng cách xử lý.

Nên map:

```kotlin
fun ErrorType.toMessage(): String {
    return when (this) {

        ErrorType.NETWORK ->
            "Không thể kết nối Internet."

        ErrorType.TIMEOUT ->
            "Kết nối mất quá nhiều thời gian."

        ErrorType.UNAUTHORIZED ->
            "Vui lòng đăng nhập lại."

        ErrorType.SERVER ->
            "Máy chủ đang gặp sự cố."

        ErrorType.UNKNOWN ->
            "Đã xảy ra lỗi."
    }
}
```

Trong production, text UI thường nên đặt trong string resources để hỗ trợ localization.

---

# 23. Lifecycle và Error State

Giả sử:

```text
Loading
   ↓
Error
   ↓
Rotate phone
```

Không mong muốn:

```text
Error
 ↓ rotate
Loading
 ↓
API request lại
```

Nếu state nằm trong screen-level `ViewModel`, ViewModel được giữ qua configuration changes và UI có thể tiếp tục render state hiện tại sau khi Activity/Fragment được recreate. ([Android Developers][2])

```text
Activity A
   │
   │ ViewModel → Error
   │
rotate
   │
Activity B
   │
   └── same screen ViewModel state
             │
             ▼
           Error
```

---

# 24. Configuration change khác Process Death

Một hiểu lầm phổ biến:

```text
ViewModel tồn tại vĩnh viễn.
```

Không đúng.

ViewModel rất hữu ích cho configuration changes, nhưng khi process bị Android hủy, dữ liệu chỉ nằm trong memory của ViewModel không tự động trở thành persistent state. Android cung cấp `SavedStateHandle` cho state cần phục hồi phù hợp, đồng thời tài liệu state-saving phân biệt rõ state UI nhỏ cần save với dữ liệu lớn nên được tái tạo từ data layer. ([Android Developers][9])

Ví dụ:

```text
Rotate
   ↓
ViewModel handles it

Process death
   ↓
Saved state / persistent data / reload
```

Không cần persist nguyên một:

```text
IOException object
```

Anh thường chỉ cần khôi phục những thông tin tối thiểu để reconstruct screen.

---

# 25. UDF với Error State

Flow hoàn chỉnh:

```text
┌────────────────────────────┐
│            UI              │
│                            │
│ render(Error)              │
└─────────────┬──────────────┘
              │
              │ Retry event
              ▼
┌────────────────────────────┐
│         ViewModel          │
│                            │
│ retry()                    │
│ state = Loading            │
└─────────────┬──────────────┘
              │
              ▼
┌────────────────────────────┐
│         Repository         │
└─────────────┬──────────────┘
              │
              ▼
             API
              │
              ▼
           Result
              │
              ▼
          ViewModel
              │
              │ state
              ▼
             UI
```

Compose Architecture mô tả UDF theo chu trình: event đi lên, state được cập nhật, sau đó state được truyền xuống UI để hiển thị. Cách này tăng khả năng test độc lập và giảm nguy cơ state không nhất quán.

---

# 26. Full-screen error vs inline error vs snackbar

## Full-screen

Dùng khi:

```text
Không có content để hiển thị.
```

```text
┌─────────────────────┐
│                     │
│       Error         │
│                     │
│      [ Retry ]      │
│                     │
└─────────────────────┘
```

---

## Inline error

Dùng khi chỉ một thành phần thất bại.

```text
Profile
────────────

Avatar      Anh Khánh

Recent activity

⚠ Không thể tải hoạt động
[Thử lại]
```

---

## Snackbar

Phù hợp với thông báo ngắn mà screen vẫn còn usable.

```text
┌──────────────────────────────┐
│ Existing content             │
│                              │
│                              │
│                              │
│ Không thể làm mới   [Retry]  │
└──────────────────────────────┘
```

Nếu snackbar được thực hiện như side effect trong Compose, cần quản lý nó theo Effect APIs thay vì gọi side-effect trực tiếp trong body của composable. ([Android Developers][8])

---

# 27. Accessibility

Error UI không chỉ cần nhìn thấy bằng mắt.

Compose semantics cung cấp metadata có ý nghĩa cho accessibility services và cũng chính là nền tảng được Compose testing APIs sử dụng để tìm và tương tác với UI elements. ([Android Developers][10])

Ví dụ:

```kotlin
Text(
    text = "Không thể tải dữ liệu",
    modifier = Modifier.semantics {
        liveRegion = LiveRegionMode.Polite
    }
)
```

Ngoài ra:

* nút Retry nên có text rõ ràng;
* icon trang trí không cần được đọc như thông tin quan trọng;
* không dựa hoàn toàn vào màu đỏ để truyền đạt lỗi;
* message phải đủ cụ thể để hiểu action tiếp theo.

---

# 28. Preview các Error State

Compose Preview rất hữu ích để kiểm tra state mà không cần thực sự làm hỏng server.

```kotlin
@Preview(showBackground = true)
@Composable
private fun NetworkErrorPreview() {
    ErrorScreen(
        errorType = ErrorType.NETWORK,
        onRetry = {}
    )
}
```

```kotlin
@Preview(showBackground = true)
@Composable
private fun ServerErrorPreview() {
    ErrorScreen(
        errorType = ErrorType.SERVER,
        onRetry = {}
    )
}
```

Anh có thể tạo preview cho:

```text
Loading
Success
Empty
Network Error
Timeout
Unauthorized
Server Error
```

Đây là một cách rất tốt để biến UI state thành artifact trực quan trong portfolio.

---

# 29. Testing Error State

Error State nên được kiểm tra ít nhất ở hai tầng:

```text
Repository/ViewModel test
          +
Compose UI test
```

Compose cung cấp testing APIs để tìm element, assert thuộc tính và thực hiện user actions thông qua semantics tree. ([Android Developers][11])

---

## 29.1 Unit test ViewModel

Fake repository:

```kotlin
class FakeUserRepository(
    private val result: UserResult
) : UserRepositoryContract {

    override suspend fun getUsers(): UserResult {
        return result
    }
}
```

Test mục tiêu:

```text
Given repository fails
When loadUsers()
Then UiState == Error
```

Pseudo test:

```kotlin
@Test
fun loadUsers_whenRepositoryFails_emitsError() =
    runTest {

        val repository =
            FakeUserRepository(
                UserResult.Failure(
                    ErrorType.NETWORK
                )
            )

        val viewModel =
            UsersViewModel(repository)

        // assert Error state
    }
```

---

# 30. Compose UI test

Ví dụ:

```kotlin
@Test
fun errorState_showsRetryButton() {

    composeTestRule.setContent {
        ErrorScreen(
            errorType = ErrorType.NETWORK,
            onRetry = {}
        )
    }

    composeTestRule
        .onNodeWithText(
            "Không thể kết nối Internet."
        )
        .assertIsDisplayed()

    composeTestRule
        .onNodeWithText("Thử lại")
        .assertIsDisplayed()
}
```

Test Retry:

```kotlin
@Test
fun clickingRetry_callsCallback() {

    var retryClicked = false

    composeTestRule.setContent {
        ErrorScreen(
            errorType = ErrorType.NETWORK,
            onRetry = {
                retryClicked = true
            }
        )
    }

    composeTestRule
        .onNodeWithText("Thử lại")
        .performClick()

    assertTrue(retryClicked)
}
```

Compose tests dựa vào semantics tree; khi test khó tìm node, Android documentation cũng hướng dẫn có thể inspect/print semantics tree để debug. ([Android Developers][12])

---

# 31. Các case nên test

```text
Network UI State
│
├── Loading
│
├── Success
│
├── Empty
│
└── Error
    ├── No Internet
    ├── Timeout
    ├── Unauthorized
    ├── Server Error
    └── Unknown
```

Checklist test:

* Request thành công.
* Request thất bại.
* Retry thành công.
* Retry tiếp tục thất bại.
* Loading xuất hiện đúng.
* Error message đúng.
* Retry button hoạt động.
* Existing data không bị xóa khi refresh fail.
* Rotate khi đang Error.
* Background → foreground.
* Không tạo duplicate request không cần thiết.
* Accessibility/semantics của action hoạt động.

---

# 32. Anti-pattern: `Boolean soup`

Không nên:

```kotlin
var isLoading = false
var hasError = false
var isSuccess = false
var isEmpty = false
```

Vì có thể tạo state vô nghĩa:

```text
isLoading = true
hasError = true
isSuccess = true
```

Câu hỏi:

```text
UI phải render cái gì?
```

không còn rõ ràng.

Nếu các trạng thái loại trừ:

```kotlin
sealed interface UiState
```

giúp giảm những combination bất hợp lệ.

---

# 33. Nhưng đừng lạm dụng sealed state

Ngược lại, screen phức tạp có thể có:

```text
Content loaded
+
Refreshing
+
Refresh error
+
Pagination loading
```

Khi đó:

```kotlin
data class FeedUiState(
    val items: List<Item> = emptyList(),
    val initialLoading: Boolean = false,
    val refreshing: Boolean = false,
    val loadingMore: Boolean = false,
    val refreshError: UiError? = null
)
```

có thể phản ánh UI chính xác hơn.

### Quy tắc suy nghĩ

```text
States mutually exclusive?
        │
     ┌──┴──┐
    Yes   No
     │     │
     ▼     ▼
 sealed   data class
 state    composite state
```

---

# 34. Error State trong Pagination

Sau này khi dùng Paging, một screen còn có thể phân biệt:

```text
Initial load error
        vs
Append error
```

Ví dụ:

```text
Initial request fails
        ↓
Full-screen error
```

Nhưng:

```text
Page 1 loaded
Page 2 loaded
Page 3 fails
        ↓
Keep existing items
+
Retry footer
```

Android Paging cung cấp `LoadState` để theo dõi trạng thái các load request và render các loading/error states cho paginated data. ([Android Developers][13])

---

# 35. Production flow thực tế

Một kiến trúc khá hoàn chỉnh:

```text
                   ┌─────────────┐
                   │     API     │
                   └──────┬──────┘
                          │
                          ▼
                   ┌─────────────┐
                   │ Repository  │
                   └──────┬──────┘
                          │
                       Result
                          │
                          ▼
                   ┌─────────────┐
                   │  ViewModel  │
                   │             │
                   │ StateFlow   │
                   └──────┬──────┘
                          │
                      UiState
                          │
                          ▼
                ┌────────────────────┐
                │      Compose       │
                │                    │
                │ Loading            │
                │ Success            │
                │ Empty              │
                │ Error              │
                └──────────┬─────────┘
                           │
                         event
                           │
                           ▼
                       ViewModel
```

Điểm cốt lõi là có **single source of truth** cho screen state và UI render từ state đó. Android Compose Architecture nhấn mạnh state encapsulation và UI consistency là hai lợi ích chính của UDF.

---

# 36. Ví dụ hoàn chỉnh

## Model

```kotlin
enum class ErrorType {
    NETWORK,
    SERVER,
    UNKNOWN
}
```

```kotlin
sealed interface UsersUiState {

    data object Loading : UsersUiState

    data class Success(
        val users: List<UserUiModel>
    ) : UsersUiState

    data class Error(
        val type: ErrorType
    ) : UsersUiState
}
```

---

## ViewModel

```kotlin
class UsersViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<UsersUiState>(
            UsersUiState.Loading
        )

    val uiState =
        _uiState.asStateFlow()

    init {
        load()
    }

    fun retry() {
        load()
    }

    private fun load() {

        viewModelScope.launch {

            _uiState.value =
                UsersUiState.Loading

            _uiState.value =
                when (
                    val result =
                        repository.getUsers()
                ) {

                    is UserResult.Success -> {

                        UsersUiState.Success(
                            users = result.users
                                .map {
                                    it.toUiModel()
                                }
                        )
                    }

                    is UserResult.Error -> {

                        UsersUiState.Error(
                            type = result.type
                        )
                    }
                }
        }
    }
}
```

---

## Route

```kotlin
@Composable
fun UsersRoute(
    viewModel: UsersViewModel
) {

    val uiState by
        viewModel.uiState
            .collectAsStateWithLifecycle()

    UsersScreen(
        uiState = uiState,
        onRetry = viewModel::retry
    )
}
```

---

## Screen

```kotlin
@Composable
fun UsersScreen(
    uiState: UsersUiState,
    onRetry: () -> Unit
) {

    when (uiState) {

        UsersUiState.Loading -> {
            CircularProgressIndicator()
        }

        is UsersUiState.Success -> {

            LazyColumn {

                items(uiState.users) { user ->

                    Text(
                        text = user.name
                    )
                }
            }
        }

        is UsersUiState.Error -> {

            ErrorScreen(
                errorType = uiState.type,
                onRetry = onRetry
            )
        }
    }
}
```

Kiến trúc trên tuân theo mô hình ViewModel/state holder → `StateFlow` → lifecycle-aware collection → Compose render, phù hợp với các hướng dẫn UI state hiện tại của Android. ([Android Developers][3])

---

# 37. Bài thực hành 32 phút

## Phần 1 — 5 phút: tạo state

Tạo:

```kotlin
sealed interface UserUiState
```

với:

```text
Loading
Success
Error
```

---

## Phần 2 — 8 phút: mock repository

```kotlin
class FakeRepository {

    suspend fun getUsers(): UserResult {

        delay(1500)

        return UserResult.Error(
            ErrorType.NETWORK
        )
    }
}
```

---

## Phần 3 — 8 phút: ViewModel

Flow:

```text
loadUsers()
     │
     ▼
Loading
     │
     ▼
repository
     │
     ▼
Error
```

---

## Phần 4 — 6 phút: Error UI

Hiển thị:

```text
⚠

Không thể tải dữ liệu

Kiểm tra kết nối mạng
và thử lại.

[ Thử lại ]
```

---

## Phần 5 — 5 phút: test Retry

Fake repository lần đầu:

```text
Error
```

lần hai:

```text
Success
```

Kỳ vọng:

```text
Error
 ↓ Retry
Loading
 ↓
Success
```

---

# 38. Bài tập

Xây dựng hoặc mock endpoint:

```http
GET /users
```

App phải thể hiện đủ:

```text
Loading
   │
   ├── Success
   │
   └── Error
          │
        Retry
          │
       Loading
```

### Yêu cầu

* `ViewModel`
* `StateFlow`
* `UiState`
* Loading screen
* Success screen
* Error screen
* Retry button
* Fake Repository
* Unit test hoặc Compose UI test

### Bonus

Thêm:

```text
Empty State
Timeout
Offline
Refresh error
Authentication error
```

---

# 39. Artifact portfolio

Một mini project rất phù hợp:

```text
network-ui-states/
│
├── data/
│   └── UserRepository.kt
│
├── ui/
│   ├── UsersScreen.kt
│   ├── ErrorScreen.kt
│   └── UsersUiState.kt
│
├── UsersViewModel.kt
│
├── test/
│   └── UsersViewModelTest.kt
│
└── README.md
```

README có thể trình bày flow:

```text
API
 ↓
Repository
 ↓
Result
 ↓
ViewModel
 ↓
StateFlow<UiState>
 ↓
Compose
 ↓
Loading / Success / Error
```

Screenshot portfolio:

```text
01-loading.png
02-success.png
03-no-internet.png
04-server-error.png
05-retry.png
```

---

# 40. Câu hỏi phỏng vấn

### Error State là gì?

Có thể trả lời:

> Error State là một trạng thái UI biểu diễn việc một operation thất bại. Thay vì để exception đi trực tiếp vào UI, tôi thường map lỗi tại data/repository layer thành application error, ViewModel chuyển nó thành immutable UI state và Compose render state đó. UI gửi những action như Retry trở lại ViewModel theo Unidirectional Data Flow.

---

### Tại sao không chỉ dùng `try/catch` trong Composable?

Vì composable nên tập trung render:

```text
State → UI
```

Networking và business logic nên nằm trong data/state holder phù hợp, giúp lifecycle, testing và state management rõ ràng hơn. Android architecture guidance đặt state holder như ViewModel giữa data/business logic và UI elements. ([Android Developers][14])

---

### Khi nào dùng sealed class?

Khi:

```text
Loading
Success
Error
```

loại trừ nhau.

---

### Khi nào dùng data class?

Khi có state kết hợp:

```text
data
+
refreshing
+
refresh error
```

---

### Retry đặt ở đâu?

UI tạo event:

```text
Retry click
```

ViewModel xử lý:

```text
retry()
```

Repository thực hiện operation.

---

# 41. Những lỗi thường gặp

## ❌ 1. Show exception trực tiếp

```kotlin
Text(exception.message!!)
```

### Nên

```text
Exception
   ↓
ErrorType
   ↓
Localized UI message
```

---

## ❌ 2. Networking trong composable

```text
Composable
   ↓
Retrofit
```

### Nên

```text
Composable
     ↓ event
ViewModel
     ↓
Repository
```

---

## ❌ 3. Refresh lỗi làm mất data cũ

```text
Existing data
     ↓
refresh fails
     ↓
wipe screen
```

### Nên

```text
Existing data remains
+
refresh error
```

---

## ❌ 4. Không có Retry

```text
Something went wrong
```

và hết.

### Tốt hơn

```text
Không thể tải dữ liệu.

[Thử lại]
```

nếu thao tác có khả năng retry hợp lý.

---

## ❌ 5. Retry tạo nhiều request

```text
Retry
Retry
Retry
Retry
```

→ nhiều operation song song.

---

## ❌ 6. Error reset khi rotate

State được giữ sai chỗ:

```text
Composable-local temporary state
```

thay vì screen state holder phù hợp.

---

## ❌ 7. Mọi lỗi đều full-screen

```text
avatar failed
        ↓
wipe whole screen
```

UX không hợp lý.

---

# 42. Mental model

Có thể ghi nhớ Error State bằng công thức:

```text
Technical Failure
        ↓
Application Error
        ↓
UI State
        ↓
Useful Message
        +
Recovery Action
```

Hay ngắn hơn:

> **Error State = Failure + Context + Recovery**

---

# 43. Checklist hoàn thành

* [ ] Giải thích được Error State.
* [ ] Phân biệt Error và Empty.
* [ ] Phân biệt initial error và refresh error.
* [ ] Biết full-screen error khi nào phù hợp.
* [ ] Có `UiState`.
* [ ] Có `ViewModel`.
* [ ] Có `StateFlow`.
* [ ] Collect bằng lifecycle-aware API trong Compose.
* [ ] Không để Retrofit/exception lọt trực tiếp vào UI.
* [ ] Có mapping lỗi.
* [ ] Có Retry.
* [ ] Retry không tạo request thừa.
* [ ] State không mất chỉ vì configuration change.
* [ ] Có ít nhất một unit test.
* [ ] Có ít nhất một Compose UI test.
* [ ] Test lỗi network.
* [ ] Test retry.
* [ ] Có preview Error State.
* [ ] Có screenshot để đưa vào portfolio.
* [ ] Có README mô tả state flow.

---

# 44. Ghi chú production

Trước khi release, với mỗi network screen hãy kiểm tra flow:

```text
               Request
                  │
       ┌──────────┼────────────┐
       │          │            │
       ▼          ▼            ▼
    Loading    Success       Failure
                  │            │
              Has data?     Has cache?
                  │            │
             ┌────┴────┐    ┌──┴─────┐
            Yes       No    Yes      No
             │         │     │        │
             ▼         ▼     ▼        ▼
          Content    Empty  Content   Error
                            + error   screen
```

Các câu hỏi cần trả lời:

1. **Request fail thì user thấy gì?**
2. **Có action để recover không?**
3. **Retry có an toàn không?**
4. **Refresh fail có giữ dữ liệu cũ không?**
5. **Error State có tồn tại hợp lý qua rotate không?**
6. **Background/foreground có tạo request không cần thiết không?**
7. **Process recreation cần restore gì?**
8. **Có localization cho error message không?**
9. **Screen reader hiểu error và Retry không?**
10. **Có test failure path, không chỉ success path không?**

Android khuyến nghị state được expose từ state holder thông qua observable holders như `StateFlow`, UI collect theo lifecycle và events đi từ UI trở lại ViewModel/state holder. Đây là nền tảng phù hợp để Error State trở thành một phần có thể dự đoán, test được và maintain được của application architecture. ([Android Developers][3])

---

# 45. Tóm tắt nhanh

```text
ERROR STATE
│
├── Network Error
├── Timeout
├── Authentication Error
├── Server Error
└── Unknown Error
        │
        ▼
    Repository
        │
       Result
        │
        ▼
     ViewModel
        │
      UiState
        │
        ▼
      Compose
        │
   ┌────┼────────┐
   ▼    ▼        ▼
Loading Success Error
                │
               Retry
                │
                └────▶ ViewModel
```

Ba nguyên tắc quan trọng nhất của bài:

> **1. Đừng để exception trở thành UI state trực tiếp.**
> **2. Error State phải cho người dùng một hướng xử lý hợp lý.**
> **3. UI render state; ViewModel xử lý event; Repository xử lý data/network.**

Nếu làm được mô hình **`Repository → Result → ViewModel → StateFlow<UiState> → Compose → Retry event`**, anh đã nắm được phần cốt lõi của **Error State trong Android Network UI**. ([Android Developers][1])

[1]: https://developer.android.com/topic/architecture/ui-layer?utm_source=chatgpt.com "UI layer | App architecture"
[2]: https://developer.android.com/topic/libraries/architecture/viewmodel?utm_source=chatgpt.com "ViewModel overview | App architecture"
[3]: https://developer.android.com/topic/architecture/ui-layer/state-production?utm_source=chatgpt.com "UI State production | App architecture"
[4]: https://developer.android.com/topic/architecture/recommendations?utm_source=chatgpt.com "Recommendations for Android architecture"
[5]: https://developer.android.com/develop/ui/compose/state?utm_source=chatgpt.com "State and Jetpack Compose"
[6]: https://developer.android.com/topic/architecture/ui-layer/events?utm_source=chatgpt.com "UI events | App architecture"
[7]: https://developer.android.com/topic/architecture/views/recommendations-views?utm_source=chatgpt.com "Recommendations for Android architecture (Views)"
[8]: https://developer.android.com/develop/ui/compose/side-effects?utm_source=chatgpt.com "Side-effects in Compose"
[9]: https://developer.android.com/topic/libraries/architecture/viewmodel/viewmodel-savedstate?utm_source=chatgpt.com "Saved State module for ViewModel | App architecture"
[10]: https://developer.android.com/develop/ui/compose/accessibility/semantics?utm_source=chatgpt.com "Semantics | Jetpack Compose"
[11]: https://developer.android.com/develop/ui/compose/testing?utm_source=chatgpt.com "Test your Compose layout"
[12]: https://developer.android.com/develop/ui/compose/testing/semantics?utm_source=chatgpt.com "Semantics | Jetpack Compose"
[13]: https://developer.android.com/topic/libraries/architecture/paging/load-state?utm_source=chatgpt.com "Manage and present loading states | App architecture"
[14]: https://developer.android.com/topic/architecture/ui-layer/stateholders?utm_source=chatgpt.com "State holders and UI state | App architecture"
