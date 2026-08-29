# 021 — Single

| Thuộc tính              | Nội dung                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| **Học phần**            | 04 — Network, Async and Services                                           |
| **Module**              | Module 08 — Asynchronism                                                   |
| **Nhóm nội dung**       | Rx and Background Work                                                     |
| **Nguồn roadmap**       | Asynchronism / Rx and Background Work                                      |
| **Loại bài**            | Async                                                                      |
| **Thứ tự trong module** | 021                                                                        |
| **Thời lượng gợi ý**    | 34 phút                                                                    |
| **Trọng tâm**           | RxJava `Single`, bất đồng bộ, xử lý thành công/lỗi, threading và lifecycle |

---

## 1. Tóm tắt

Bài này tìm hiểu **`Single` trong RxJava** trong bối cảnh phát triển ứng dụng Android.

`Single<T>` đại diện cho một tác vụ bất đồng bộ:

* chỉ phát ra **đúng một giá trị thành công**, hoặc
* kết thúc bằng **một lỗi**.

Nó đặc biệt phù hợp với những thao tác như:

* gọi API lấy thông tin một user;
* đăng nhập;
* lưu một bản ghi vào database;
* lấy cấu hình ứng dụng;
* tải chi tiết sản phẩm;
* thực hiện một phép tính nền và trả về một kết quả.

Sau bài học, cần hiểu được luồng:

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
Single<T>
 │
 ├── onSuccess(value)
 │
 └── onError(error)
```

và biết cách quản lý:

* thread;
* loading state;
* lỗi;
* lifecycle;
* cancellation;
* retry;
* testing.

---

# 2. Mục tiêu học tập

Sau bài này, bạn có thể:

* Giải thích được `Single` bằng ngôn ngữ của mình.
* Phân biệt `Single` với `Observable`, `Maybe` và `Completable`.
* Biết trường hợp nào nên sử dụng `Single`.
* Chuyển tác vụ nặng khỏi **Main Thread**.
* Sử dụng `subscribeOn()` và `observeOn()`.
* Xử lý `onSuccess` và `onError`.
* Quản lý subscription bằng `Disposable`.
* Tránh memory leak liên quan tới lifecycle.
* Thực hiện retry khi request thất bại.
* Viết test cho `Single`.
* Áp dụng `Single` vào Repository/ViewModel.
* Tạo một artifact nhỏ có thể đưa vào portfolio.

---

# 3. Khái niệm chính

## 3.1. `Single` là gì?

Trong RxJava:

```java
Single<T>
```

là một reactive source phát ra:

```text
1 giá trị
```

hoặc:

```text
1 lỗi
```

nhưng **không phát nhiều giá trị liên tục**.

Ví dụ:

```java
Single<User>
```

có thể phát:

```text
User
```

hoặc:

```text
Throwable
```

---

## 3.2. Marble diagram

```text
Single thành công

──────●──────>
      User

      onSuccess(User)
```

Trong trường hợp thất bại:

```text
──────X──────>
      Error

      onError(Throwable)
```

Điểm quan trọng:

```text
Single<T>
   │
   ├── Success(T)
   │
   └── Error(Throwable)
```

Hai nhánh này loại trừ nhau.

---

# 4. Tại sao Android cần `Single`?

Nhiều tác vụ trong Android có bản chất:

> "Thực hiện một việc và trả về một kết quả duy nhất."

Ví dụ:

```text
Nhấn Login
     │
     ▼
POST /login
     │
     ▼
Single<User>
     │
 ┌───┴────┐
 ▼        ▼
User     Error
```

Hoặc:

```text
Mở màn hình Product Detail
             │
             ▼
Repository.getProduct(id)
             │
             ▼
Single<Product>
             │
       ┌─────┴─────┐
       ▼           ▼
   Product       Error
```

Trong các trường hợp này, dùng stream có khả năng phát hàng trăm giá trị thường không cần thiết.

---

# 5. Tạo một `Single`

## 5.1. `Single.just()`

Khi đã có dữ liệu:

```kotlin
val single = Single.just("Hello RxJava")
```

Subscribe:

```kotlin
single.subscribe(
    { value ->
        println(value)
    },
    { error ->
        println(error.message)
    }
)
```

Kết quả:

```text
Hello RxJava
```

---

# 6. `onSuccess` và `onError`

Một `Single` chỉ có hai kết quả cuối cùng.

```text
             Single<T>
                 │
           ┌─────┴─────┐
           │           │
           ▼           ▼
      onSuccess(T)  onError(E)
```

Ví dụ:

```kotlin
repository.getUser()
    .subscribe(
        { user ->
            showUser(user)
        },
        { error ->
            showError(error)
        }
    )
```

Không tồn tại trường hợp:

```text
User1
User2
User3
User4
...
```

với `Single`.

Nếu cần stream nhiều giá trị, nên xem xét `Observable` hoặc `Flowable`.

---

# 7. Ví dụ Repository

Giả sử ứng dụng có:

```kotlin
interface UserApi {

    @GET("users/{id}")
    fun getUser(
        @Path("id") id: Long
    ): Single<User>
}
```

Repository:

```kotlin
class UserRepository(
    private val api: UserApi
) {

    fun getUser(id: Long): Single<User> {
        return api.getUser(id)
    }
}
```

Luồng:

```text
UI
 │
 ▼
ViewModel
 │
 ▼
UserRepository
 │
 ▼
Retrofit
 │
 ▼
HTTP API
 │
 ▼
Single<User>
```

---

# 8. Threading với `Single`

Đây là phần đặc biệt quan trọng trong Android.

Không nên thực hiện network hoặc tác vụ nặng trực tiếp trên UI thread.

Thông thường:

```kotlin
repository.getUser(id)
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
```

Ý nghĩa:

```text
subscribeOn(IO)
      │
      ▼
Network / Database
      │
      ▼
Single<User>
      │
observeOn(Main)
      │
      ▼
Update UI
```

---

## 8.1. `subscribeOn()`

Quy định nơi thực hiện công việc upstream.

Ví dụ:

```kotlin
.subscribeOn(Schedulers.io())
```

Phù hợp với:

* network;
* database;
* file I/O.

---

## 8.2. `observeOn()`

Quy định thread mà downstream tiếp tục xử lý.

```kotlin
.observeOn(AndroidSchedulers.mainThread())
```

Thường dùng để quay lại Main Thread trước khi:

* thay đổi UI;
* cập nhật state;
* gửi dữ liệu tới View.

---

# 9. Ví dụ hoàn chỉnh

```kotlin
repository.getUser(userId)
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(
        { user ->
            showUser(user)
        },
        { error ->
            showError(error)
        }
    )
```

Luồng thực thi:

```text
Main Thread
    │
    │ subscribe()
    ▼
──────────────────────────
       IO Thread
──────────────────────────
    │
    ├─ gọi API
    │
    ├─ nhận JSON
    │
    └─ map → User
            │
            ▼
──────────────────────────
       Main Thread
──────────────────────────
            │
            ▼
      showUser(user)
```

---

# 10. `Disposable`

Khi gọi:

```kotlin
subscribe()
```

RxJava tạo một subscription.

Subscription thường được biểu diễn bằng:

```kotlin
Disposable
```

Ví dụ:

```kotlin
val disposable =
    repository.getUser(id)
        .subscribeOn(Schedulers.io())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(
            { user ->
                showUser(user)
            },
            { error ->
                showError(error)
            }
        )
```

Có thể hủy bằng:

```kotlin
disposable.dispose()
```

---

# 11. `CompositeDisposable`

Trong Android, một màn hình có thể có nhiều subscription.

Ví dụ:

```text
ViewModel
 │
 ├── loadUser()
 ├── loadProfile()
 ├── saveSettings()
 └── login()
```

Nếu quản lý từng `Disposable` riêng lẻ sẽ khó kiểm soát.

RxJava cung cấp:

```kotlin
CompositeDisposable
```

Ví dụ:

```kotlin
private val disposables = CompositeDisposable()
```

Thêm subscription:

```kotlin
val disposable =
    repository.getUser(id)
        .subscribeOn(Schedulers.io())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(
            { user ->
                handleUser(user)
            },
            { error ->
                handleError(error)
            }
        )

disposables.add(disposable)
```

Khi ViewModel bị hủy:

```kotlin
override fun onCleared() {
    disposables.clear()
}
```

---

# 12. Lifecycle

Một lỗi phổ biến:

```text
Activity
   │
   ├── gọi API
   │
   ▼
Single
   │
   │ request vẫn chạy
   │
Activity bị destroy
   │
   ▼
Single callback về Activity cũ
```

Điều này có thể gây:

* memory leak;
* cập nhật UI không còn tồn tại;
* crash;
* state không nhất quán.

---

## Cách xử lý

Một cách phổ biến:

```text
View
 │
 ▼
ViewModel
 │
 ▼
Repository
 │
 ▼
Single
```

và quản lý subscription trong ViewModel.

Ví dụ:

```kotlin
override fun onCleared() {
    disposables.clear()
}
```

---

# 13. Loading state

Một request thực tế thường không chỉ có:

```text
Success / Error
```

Mà UI có ba trạng thái cơ bản:

```text
Idle
 │
 ▼
Loading
 │
 ├──────────────┐
 ▼              ▼
Success        Error
```

Ví dụ:

```kotlin
repository.getUser(id)
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .doOnSubscribe {
        state.value = UiState.Loading
    }
    .subscribe(
        { user ->
            state.value = UiState.Success(user)
        },
        { error ->
            state.value = UiState.Error(error)
        }
    )
```

---

# 14. State model

Có thể định nghĩa:

```kotlin
sealed class UiState {

    data object Loading : UiState()

    data class Success(
        val user: User
    ) : UiState()

    data class Error(
        val throwable: Throwable
    ) : UiState()
}
```

Sau đó:

```text
Single<User>
      │
      ▼
   ViewModel
      │
      ▼
   UiState
      │
 ┌────┼─────┐
 ▼    ▼     ▼
Load Success Error
```

---

# 15. `map()`

`map()` dùng để biến đổi giá trị của `Single`.

Ví dụ:

```kotlin
Single<User>
```

thành:

```kotlin
Single<String>
```

Code:

```kotlin
repository.getUser(id)
    .map { user ->
        user.name
    }
```

Luồng:

```text
Single<User>
     │
     ▼
   map()
     │
     ▼
Single<String>
```

---

# 16. `flatMap()`

`flatMap()` rất quan trọng khi tác vụ thứ hai phụ thuộc vào kết quả tác vụ thứ nhất.

Ví dụ:

```text
Login
  │
  ▼
Single<Token>
  │
  ▼
getProfile(token)
  │
  ▼
Single<User>
```

Code:

```kotlin
authRepository.login(email, password)
    .flatMap { token ->
        userRepository.getProfile(token)
    }
```

Kết quả cuối cùng:

```kotlin
Single<User>
```

---

# 17. Ví dụ chuỗi API

Giả sử cần:

1. Login.
2. Lấy user profile.
3. Lấy user settings.

Có thể viết:

```kotlin
authRepository.login(email, password)
    .flatMap { token ->
        userRepository.getProfile(token)
    }
    .flatMap { user ->
        settingsRepository.getSettings(user.id)
    }
```

Sơ đồ:

```text
login()
   │
   ▼
Token
   │
   ▼
getProfile()
   │
   ▼
User
   │
   ▼
getSettings()
   │
   ▼
Settings
```

Không cần nested callback:

```text
login {
    getProfile {
        getSettings {
            ...
        }
    }
}
```

Đây là một lợi ích lớn của reactive programming.

---

# 18. Error handling

Ví dụ đơn giản:

```kotlin
.subscribe(
    { user ->
        showUser(user)
    },
    { error ->
        showError(error)
    }
)
```

Nhưng production thường cần phân loại lỗi.

Ví dụ:

```kotlin
when (error) {

    is IOException ->
        showNetworkError()

    is HttpException ->
        showServerError()

    else ->
        showUnknownError()
}
```

---

# 19. `onErrorReturn`

Có thể cung cấp fallback value:

```kotlin
repository.getUser(id)
    .onErrorReturn {
        User.guest()
    }
```

Luồng:

```text
API
 │
 ├── Success ────────> User
 │
 └── Error
       │
       ▼
   fallback
       │
       ▼
    Guest User
```

Chỉ nên dùng khi fallback thực sự có ý nghĩa nghiệp vụ.

---

# 20. Retry

Một số lỗi network tạm thời có thể retry.

```kotlin
repository.getUser(id)
    .retry(2)
```

Luồng:

```text
Request #1
   │
   X
   │
   ▼
Request #2
   │
   X
   │
   ▼
Request #3
   │
   ├── Success
   └── Error
```

Không nên retry mọi lỗi một cách mù quáng.

Ví dụ:

```text
Timeout        → có thể retry
Connection     → có thể retry

401            → thường không
403            → thường không
400            → thường không
Validation     → không
```

---

# 21. `retryWhen()`

Khi cần logic retry phức tạp hơn:

```kotlin
.retryWhen { errors ->
    errors.zipWith(
        Flowable.range(1, 3)
    ) { error, attempt ->
        attempt
    }
}
```

Trong production có thể kết hợp:

```text
retry
+
delay
+
exponential backoff
```

Ví dụ khái niệm:

```text
Fail
 │
 ▼
Wait 1s
 │
 ▼
Retry
 │
 X
 ▼
Wait 2s
 │
 ▼
Retry
 │
 X
 ▼
Wait 4s
 │
 ▼
Retry
```

---

# 22. Cancellation

Nếu user rời màn hình khi request đang chạy:

```text
Screen A
  │
  ├── request
  │
  ▼
Single
  │
  │
User Back
  │
  ▼
Screen destroyed
```

Nếu kết quả không còn cần thiết, subscription nên được dispose.

```kotlin
disposable.dispose()
```

Hoặc:

```kotlin
compositeDisposable.clear()
```

---

# 23. `Single` và Retrofit

Retrofit có thể tích hợp với RxJava.

Ví dụ:

```kotlin
interface ProductApi {

    @GET("products/{id}")
    fun getProduct(
        @Path("id") id: Long
    ): Single<ProductDto>
}
```

Repository:

```kotlin
class ProductRepository(
    private val api: ProductApi
) {

    fun getProduct(id: Long): Single<Product> {
        return api.getProduct(id)
            .map { dto ->
                dto.toDomain()
            }
    }
}
```

Kiến trúc:

```text
ProductScreen
      │
      ▼
ProductViewModel
      │
      ▼
ProductRepository
      │
      ▼
ProductApi
      │
      ▼
HTTP
      │
      ▼
ProductDto
      │
     map
      │
      ▼
Product
```

---

# 24. `Single` với database

Không chỉ network.

Ví dụ:

```kotlin
fun getUser(id: Long): Single<UserEntity>
```

Có thể dùng cho thao tác database trả về đúng một kết quả.

```text
Repository
   │
   ▼
Database
   │
   ▼
Single<UserEntity>
```

---

# 25. Phân biệt các loại Rx phổ biến

| Type            | Số giá trị | Có thể không có giá trị? | Có error? | Ví dụ                   |
| --------------- | ---------: | -----------------------: | --------: | ----------------------- |
| `Single<T>`     |          1 |                    Không |        Có | API lấy User            |
| `Maybe<T>`      |   0 hoặc 1 |                       Có |        Có | Tìm cache               |
| `Completable`   |          0 |                       Có |        Có | Xóa record              |
| `Observable<T>` |  0 → nhiều |                       Có |        Có | Search results          |
| `Flowable<T>`   |  0 → nhiều |                       Có |        Có | Stream lớn/backpressure |

---

# 26. `Single` vs `Maybe`

### `Single`

```text
Success(value)
      hoặc
Error
```

Bắt buộc phải có một value nếu thành công.

### `Maybe`

```text
Success(value)
      hoặc
Complete
      hoặc
Error
```

`Maybe` phù hợp khi dữ liệu có thể không tồn tại.

Ví dụ database:

```text
Tìm user trong cache
       │
       ├── Có → User
       │
       └── Không → Complete
```

---

# 27. `Single` vs `Completable`

Ví dụ:

```text
GET /user/12
```

trả về User:

```kotlin
Single<User>
```

Trong khi:

```text
DELETE /user/12
```

có thể chỉ cần biết thành công hay thất bại:

```kotlin
Completable
```

---

# 28. `Single` vs `Observable`

`Single`:

```text
──────●──────|
```

Một giá trị.

`Observable`:

```text
──●──●────●──●──|
```

Nhiều giá trị.

Ví dụ:

```text
Get User Profile
       │
       ▼
Single<User>
```

Trong khi:

```text
Search Query Changes
       │
       ▼
Observable<String>
```

---

# 29. Khi nào nên dùng `Single`?

Nên nghĩ tới `Single` nếu bài toán có dạng:

> "Thực hiện một tác vụ và trả về đúng một kết quả."

Ví dụ:

```text
Login
Get Product
Upload Image
Generate Report
Load Configuration
Calculate Result
Save Record
```

---

# 30. Khi nào không nên dùng `Single`?

Không phù hợp nếu dữ liệu thay đổi liên tục.

Ví dụ:

```text
GPS location
Sensor values
Text search events
WebSocket events
Database reactive observation
```

Các trường hợp này thường phù hợp hơn với:

```text
Observable
Flowable
Flow
StateFlow
SharedFlow
```

---

# 31. Kiến trúc Android

Một cấu trúc phổ biến:

```text
┌───────────────────────┐
│          UI           │
│ Activity / Compose UI │
└───────────┬───────────┘
            │ event
            ▼
┌───────────────────────┐
│       ViewModel       │
│       UI State        │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      Repository       │
└───────┬────────┬──────┘
        │        │
        ▼        ▼
      API       DB
        │
        └────┬───┘
             ▼
          Single<T>
```

---

# 32. Ví dụ ViewModel

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val disposables = CompositeDisposable()

    fun loadUser(id: Long) {

        val disposable =
            repository.getUser(id)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(
                    { user ->
                        handleSuccess(user)
                    },
                    { error ->
                        handleError(error)
                    }
                )

        disposables.add(disposable)
    }

    override fun onCleared() {
        disposables.clear()
    }
}
```

---

# 33. Production flow hoàn chỉnh

Một luồng thực tế hơn:

```text
User opens screen
       │
       ▼
ViewModel.loadUser()
       │
       ▼
State = Loading
       │
       ▼
Repository
       │
       ▼
Single<User>
       │
 subscribeOn(IO)
       │
       ▼
API / Database
       │
 ┌─────┴──────┐
 │            │
 ▼            ▼
Success      Error
 │            │
 ▼            ▼
State =      Retry?
Success       │
              ├─ Yes → request again
              │
              └─ No
                  │
                  ▼
              State = Error
```

---

# 34. Testing `Single`

RxJava cung cấp:

```kotlin
TestObserver
```

Ví dụ:

```kotlin
val testObserver =
    Single.just("Android")
        .test()

testObserver.assertValue("Android")
testObserver.assertComplete()
testObserver.assertNoErrors()
```

---

## Test error

```kotlin
val error = RuntimeException("Network error")

Single.error<String>(error)
    .test()
    .assertError(error)
```

---

# 35. Test Repository

Ví dụ:

```kotlin
@Test
fun `getUser returns expected user`() {

    val user = User(
        id = 1,
        name = "An"
    )

    whenever(api.getUser(1))
        .thenReturn(
            Single.just(user)
        )

    repository.getUser(1)
        .test()
        .assertValue(user)
        .assertNoErrors()
}
```

---

# 36. Debugging

Có thể log các bước bằng:

```kotlin
repository.getUser(id)
    .doOnSubscribe {
        Log.d("RX", "subscribe")
    }
    .doOnSuccess {
        Log.d("RX", "success")
    }
    .doOnError {
        Log.e("RX", "error", it)
    }
    .doFinally {
        Log.d("RX", "finished")
    }
```

Luồng log:

```text
subscribe
   │
   ▼
request
   │
 ┌─┴─────────────┐
 ▼               ▼
success         error
 │               │
 └──────┬────────┘
        ▼
     finally
```

---

# 37. Các lỗi thường gặp

## Lỗi 1 — Chạy công việc nặng trên Main Thread

Không nên:

```kotlin
repository.getUser(id)
    .subscribe(...)
```

nếu nguồn dữ liệu thực hiện I/O đồng bộ.

Nên xác định scheduler phù hợp.

```kotlin
.subscribeOn(Schedulers.io())
```

---

## Lỗi 2 — Không xử lý error

Không nên chỉ viết:

```kotlin
.subscribe { user ->
    showUser(user)
}
```

Trong production nên có error handler rõ ràng.

---

## Lỗi 3 — Không dispose subscription

```text
Activity destroyed
       │
       ▼
Subscription vẫn tồn tại
       │
       ▼
Memory leak / callback sai lifecycle
```

Cần quản lý `Disposable`.

---

## Lỗi 4 — Retry vô hạn

Không nên:

```text
Error
 ↓
Retry
 ↓
Error
 ↓
Retry
 ↓
...
```

Điều này có thể:

* gây spam server;
* tốn pin;
* tốn dữ liệu;
* làm request loop vô hạn.

---

## Lỗi 5 — Dùng `Single` cho stream liên tục

Ví dụ sensor:

```text
value1
value2
value3
...
```

Không phải use case tự nhiên của `Single`.

---

# 38. UX và `Single`

Reactive programming không chỉ là kỹ thuật backend/data.

Một request chậm có ảnh hưởng trực tiếp tới UX.

Luồng tốt:

```text
User Action
   │
   ▼
Loading
   │
   ▼
Single
   │
 ┌─┴───────────┐
 ▼             ▼
Success       Error
 │             │
 ▼             ▼
Content      Error UI
```

UI nên cho user biết trạng thái đang diễn ra.

---

# 39. Performance

`Single` không tự động làm code nhanh hơn.

Performance phụ thuộc vào:

* scheduler;
* số lượng subscription;
* số request;
* retry policy;
* object allocation;
* API latency;
* database query;
* lifecycle cleanup.

Ví dụ nguy hiểm:

```text
RecyclerView 100 items
       │
       ├── Single request #1
       ├── Single request #2
       ├── Single request #3
       │
       ...
       └── Single request #100
```

Có thể tạo ra vấn đề N+1 request.

Không nên nghĩ:

> "Vì async nên chắc chắn performant."

---

# 40. `Single` và Kotlin Coroutines

Trong Android hiện đại, nhiều codebase sử dụng Kotlin Coroutines.

Một `Single<User>` về mặt ý tưởng gần với:

```kotlin
suspend fun getUser(): User
```

So sánh:

```text
RxJava
Single<User>
     │
     ▼
onSuccess / onError
```

với:

```text
Coroutine
suspend fun getUser(): User
        │
        ▼
return / throw
```

`Single` vẫn quan trọng khi:

* codebase hiện có dùng RxJava;
* SDK trả về Rx types;
* hệ thống reactive lớn đã xây dựng trên Rx;
* cần interoperability với code legacy.

---

# 41. Bài thực hành

## Bài toán

Tạo màn hình:

```text
User Detail
```

Khi người dùng nhập ID và nhấn:

```text
Load User
```

ứng dụng gọi API bằng:

```kotlin
Single<User>
```

---

## Yêu cầu

### 1. Repository

```kotlin
fun getUser(id: Long): Single<User>
```

### 2. Background thread

```kotlin
.subscribeOn(Schedulers.io())
```

### 3. Main Thread

```kotlin
.observeOn(AndroidSchedulers.mainThread())
```

### 4. State

Hỗ trợ:

```text
Loading
Success
Error
```

### 5. Error

Hiển thị lỗi network rõ ràng.

### 6. Retry

Cho phép retry tối đa:

```text
2 lần
```

### 7. Cancellation

Dispose subscription khi lifecycle kết thúc.

---

# 42. Sơ đồ bài thực hành

```text
┌────────────────────┐
│     User Screen    │
└─────────┬──────────┘
          │
          │ Load User
          ▼
┌────────────────────┐
│     ViewModel      │
│                    │
│ state = Loading    │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     Repository     │
└─────────┬──────────┘
          │
          ▼
      Single<User>
          │
          │ subscribeOn(IO)
          ▼
┌────────────────────┐
│      REST API      │
└─────────┬──────────┘
          │
       ┌──┴───┐
       │      │
       ▼      ▼
    Success  Error
       │      │
       │      ├── retry
       │      │
       ▼      ▼
     User    Error
       │      │
       └──┬───┘
          │
 observeOn(Main)
          │
          ▼
┌────────────────────┐
│      UI State      │
└────────────────────┘
```

---

# 43. Bài tập

## Bài tập chính

Chuyển một tác vụ chạy lâu khỏi Main Thread bằng `Single`.

Ví dụ:

```kotlin
fun calculateReport(): Single<Report>
```

Yêu cầu:

1. Tác vụ chạy ở background scheduler.
2. UI hiển thị loading.
3. Kết quả được trả về Main Thread.
4. Có xử lý lỗi.
5. Có cancellation.
6. Có retry nếu phù hợp.
7. Log được các state transition.

---

## Câu hỏi tự kiểm tra

1. `Single` có thể phát bao nhiêu giá trị?
2. Khi nào `Single` gọi `onSuccess`?
3. Khi nào `Single` gọi `onError`?
4. `Single` khác `Maybe` như thế nào?
5. `Single` khác `Completable` như thế nào?
6. `Single` khác `Observable` như thế nào?
7. `subscribeOn()` dùng để làm gì?
8. `observeOn()` dùng để làm gì?
9. Tại sao cần `Disposable`?
10. Khi nào retry request là nguy hiểm?

---

# 44. Artifact cho portfolio

Có thể tạo project nhỏ:

```text
RxJava User Detail Demo
```

Cấu trúc:

```text
app/
├── data/
│   ├── api/
│   │   └── UserApi.kt
│   │
│   └── repository/
│       └── UserRepository.kt
│
├── domain/
│   └── User.kt
│
├── ui/
│   └── user/
│       ├── UserViewModel.kt
│       └── UserScreen.kt
│
└── test/
    └── UserRepositoryTest.kt
```

README nên mô tả:

```text
UI
 ↓
ViewModel
 ↓
Repository
 ↓
Retrofit
 ↓
Single<User>
 ↓
Success / Error
```

Kèm:

* screenshot loading;
* screenshot success;
* screenshot error;
* diagram kiến trúc;
* unit test;
* giải thích scheduler;
* giải thích lifecycle/disposal.

---

# 45. Checklist hoàn thành

* [ ] Giải thích được `Single<T>` là gì.
* [ ] Hiểu `onSuccess` và `onError`.
* [ ] Biết `Single` chỉ phát đúng một giá trị khi thành công.
* [ ] Phân biệt được `Single` với `Maybe`.
* [ ] Phân biệt được `Single` với `Completable`.
* [ ] Phân biệt được `Single` với `Observable`.
* [ ] Sử dụng được `map()`.
* [ ] Sử dụng được `flatMap()`.
* [ ] Hiểu `subscribeOn()`.
* [ ] Hiểu `observeOn()`.
* [ ] Chuyển network/database work khỏi Main Thread.
* [ ] Xử lý loading state.
* [ ] Xử lý error.
* [ ] Hiểu retry và giới hạn retry.
* [ ] Biết cancellation bằng `Disposable`.
* [ ] Biết sử dụng `CompositeDisposable`.
* [ ] Cleanup subscription theo lifecycle.
* [ ] Viết được test với `TestObserver`.
* [ ] Có ví dụ áp dụng trong Android app.
* [ ] Có artifact nhỏ để đưa vào portfolio.

---

# 46. Ghi chú production

Khi sử dụng `Single` trong production, nên kiểm tra toàn bộ chuỗi:

```text
User Action
     │
     ▼
UI State
     │
     ▼
ViewModel
     │
     ▼
Repository
     │
     ▼
Single<T>
     │
     ├── Scheduler đúng?
     ├── Có timeout?
     ├── Có retry?
     ├── Retry có giới hạn?
     ├── Error được map chưa?
     ├── Có cancellation?
     └── Có cleanup lifecycle?
             │
             ▼
        Success / Error
             │
             ▼
          UI State
```

Các câu hỏi production quan trọng:

* User nhìn thấy gì khi request đang chạy?
* Nếu mạng mất giữa request thì sao?
* Có retry vô hạn hay không?
* Retry có gây request trùng không?
* Nếu user rotate màn hình thì subscription có bị mất hoặc leak không?
* Nếu user Back ngay khi request đang chạy thì chuyện gì xảy ra?
* Error có được chuyển thành UI state rõ ràng không?
* Công việc nặng có chạy trên Main Thread không?
* Có test cho cả success lẫn error không?
* Có log đủ thông tin để debug không?
* Một màn hình có đang tạo quá nhiều `Single` độc lập hay không?

---

# 47. Tóm tắt ghi nhớ

```text
                 Single<T>
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
     onSuccess(T)          onError(Throwable)
```

Trong Android:

```text
UI Event
   │
   ▼
ViewModel
   │
   ▼
Repository
   │
   ▼
Single<T>
   │
subscribeOn(IO)
   │
   ▼
Network / Database
   │
observeOn(Main)
   │
   ▼
UI State
```

> **Cách nhớ ngắn gọn:**
> `Single<T>` = **một tác vụ → một kết quả hoặc một lỗi**.

Nếu dữ liệu là một kết quả duy nhất như **login, get user, get product, save record**, `Single` là một abstraction rất tự nhiên trong RxJava.

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
