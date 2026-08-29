# Module 08 — Asynchronism — Bài 018: RxJava

| Thuộc tính              | Nội dung                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| **Học phần**            | 04 — Network, Async and Services                                           |
| **Module**              | Module 08 — Asynchronism                                                   |
| **Nhóm nội dung**       | Rx and Background Work                                                     |
| **Nguồn roadmap**       | Asynchronism / Rx and Background Work                                      |
| **Loại bài**            | Async                                                                      |
| **Thứ tự trong module** | 018                                                                        |
| **Thời lượng gợi ý**    | 34 phút                                                                    |
| **Trọng tâm**           | Reactive programming, threading, stream dữ liệu, lifecycle, error handling |

> Bài này tập trung vào **RxJava trong Android**: cách biểu diễn công việc bất đồng bộ dưới dạng luồng dữ liệu, chuyển công việc khỏi Main Thread, xử lý kết quả, lỗi và hủy subscription.

---

## 1. RxJava là gì?

**RxJava** là thư viện triển khai mô hình **Reactive Programming** cho Java.

Thay vì viết chương trình theo kiểu:

> Gọi tác vụ → chờ kết quả → xử lý kết quả

RxJava cho phép ta mô hình hóa dữ liệu và sự kiện thành các **stream**:

```text
Nguồn dữ liệu
     │
     ▼
Observable / Flowable
     │
     ▼
  Operators
 map / filter / flatMap
     │
     ▼
 Scheduler
     │
     ▼
 Observer / Subscriber
     │
     ▼
     UI
```

Có thể hiểu đơn giản:

> **RxJava = tạo một luồng dữ liệu → biến đổi luồng → chọn thread thực thi → lắng nghe kết quả.**

---

# 2. Vì sao cần RxJava trong Android?

Android có một nguyên tắc rất quan trọng:

> **Không được thực hiện công việc nặng trên Main Thread.**

Main Thread chịu trách nhiệm cho:

* render UI;
* animation;
* xử lý touch;
* click;
* navigation;
* cập nhật View.

Ví dụ không nên làm:

```text
Main Thread
    │
    ├── tải API 5 giây
    │
    ├── parse JSON
    │
    └── query database
```

Trong khoảng thời gian đó UI có thể:

```text
Lag
 ↓
Freeze
 ↓
ANR
```

RxJava giúp chuyển các công việc này sang background thread.

---

# 3. Mô hình Reactive Programming

Trong lập trình thông thường:

```text
App chủ động hỏi dữ liệu
        │
        ▼
   getData()
        │
        ▼
   nhận kết quả
```

Trong Reactive Programming:

```text
Data Source
    │
    │ phát dữ liệu
    ▼
 Observable
    │
    ├── Event 1
    ├── Event 2
    ├── Event 3
    ▼
 Observer
```

Observer không cần liên tục hỏi:

> "Có dữ liệu mới chưa?"

Thay vào đó:

> Khi dữ liệu xuất hiện, stream sẽ đẩy dữ liệu tới Observer.

---

# 4. Các thành phần chính của RxJava

## 4.1 Observable

`Observable` là nguồn phát dữ liệu.

Ví dụ:

```kotlin
val observable = Observable.just(
    "Android",
    "Kotlin",
    "RxJava"
)
```

Stream:

```text
Observable

Android
   │
Kotlin
   │
RxJava
   │
Complete
```

---

# 5. Observer

`Observer` là thành phần nhận dữ liệu từ `Observable`.

```kotlin
observable.subscribe(
    { value ->
        println(value)
    },
    { error ->
        println(error.message)
    },
    {
        println("Completed")
    }
)
```

Một Observer thường quan tâm tới ba trạng thái:

```text
onNext()
   │
   ├── dữ liệu
   ├── dữ liệu
   ├── dữ liệu
   │
   ▼
onComplete()
```

Nếu có lỗi:

```text
onNext()
   │
   ▼
onError()
```

Sau `onError()` hoặc `onComplete()` stream kết thúc.

---

# 6. Disposable

Khi gọi:

```kotlin
observable.subscribe(...)
```

ta tạo ra một **subscription**.

RxJava trả về một:

```text
Disposable
```

Disposable dùng để hủy subscription.

```kotlin
val disposable =
    observable.subscribe {
        println(it)
    }

disposable.dispose()
```

Điều này rất quan trọng trong Android vì lifecycle của UI có thể kết thúc trước tác vụ background.

---

# 7. Lifecycle và RxJava

Ví dụ:

```text
Activity
   │
   ├── gọi API
   │
   ▼
RxJava stream
   │
   │
   │ user Back
   ▼
Activity destroyed
```

Nhưng nếu subscription vẫn tồn tại:

```text
Network Request
      │
      ▼
Observer
      │
      ▼
Activity đã bị destroy
```

Có thể gây:

* cập nhật UI không còn tồn tại;
* giữ reference không cần thiết;
* memory leak;
* crash;
* logic khó kiểm soát.

Vì vậy cần hủy subscription đúng lifecycle.

---

# 8. CompositeDisposable

Ứng dụng thực tế thường có nhiều subscription.

Thay vì quản lý từng cái:

```kotlin
disposable1.dispose()
disposable2.dispose()
disposable3.dispose()
```

có thể dùng:

```kotlin
private val disposables = CompositeDisposable()
```

Thêm subscription:

```kotlin
disposables.add(
    repository.getUsers()
        .subscribe(...)
)
```

Sau đó giải phóng:

```kotlin
override fun onCleared() {
    disposables.clear()
}
```

Ví dụ trong `ViewModel`:

```text
ViewModel
   │
   ├── Disposable A
   ├── Disposable B
   ├── Disposable C
   │
   ▼
onCleared()
   │
   ▼
CompositeDisposable.clear()
```

---

# 9. Scheduler

Một trong những phần quan trọng nhất của RxJava là **Scheduler**.

Scheduler quyết định:

> Code chạy trên thread nào?

Hai operator thường gặp:

```kotlin
subscribeOn(...)
observeOn(...)
```

---

## 9.1 subscribeOn()

Xác định thread thực hiện công việc phía upstream.

Ví dụ:

```kotlin
repository.getUsers()
    .subscribeOn(Schedulers.io())
```

Có nghĩa là:

```text
getUsers()
    │
    ▼
I/O Thread
```

Thường dùng cho:

* network;
* database;
* đọc file;
* ghi file.

---

# 10. observeOn()

`observeOn()` xác định thread mà các operator phía sau nó tiếp tục chạy.

Trong Android thường dùng:

```kotlin
.observeOn(AndroidSchedulers.mainThread())
```

để cập nhật UI.

---

# 11. subscribeOn và observeOn

Ví dụ:

```kotlin
repository.getUsers()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe { users ->
        updateUI(users)
    }
```

Luồng thực thi:

```text
Main Thread
     │
     │ subscribe
     ▼

IO Thread
     │
     ├── HTTP request
     ├── parse response
     │
     ▼

Main Thread
     │
     ▼
 update UI
```

Đây là pattern RxJava Android rất phổ biến.

---

# 12. Các loại Scheduler thường gặp

| Scheduler                        | Công dụng                         |
| -------------------------------- | --------------------------------- |
| `Schedulers.io()`                | Network, database, file           |
| `Schedulers.computation()`       | Công việc tính toán CPU           |
| `Schedulers.single()`            | Một thread duy nhất               |
| `Schedulers.trampoline()`        | Chạy tuần tự trên thread hiện tại |
| `AndroidSchedulers.mainThread()` | Android Main/UI Thread            |

Ví dụ:

```kotlin
api.getUsers()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
```

---

# 13. Các loại Reactive Source

RxJava không chỉ có `Observable`.

Một số loại quan trọng:

```text
RxJava
 │
 ├── Observable
 ├── Flowable
 ├── Single
 ├── Maybe
 └── Completable
```

---

## 13.1 Observable

Có thể phát:

```text
0 → rất nhiều giá trị
```

Ví dụ:

```text
Search events
Location updates
UI events
Data streams
```

---

## 13.2 Single

Chỉ trả về:

```text
1 giá trị
hoặc
1 lỗi
```

Ví dụ:

```kotlin
Single<User>
```

Phù hợp cho API:

```text
GET /user/123
```

Luồng:

```text
Single
  │
  ├── onSuccess(User)
  │
  └── onError(Error)
```

---

# 14. Maybe

`Maybe` trả về:

```text
0 hoặc 1 giá trị
```

Ví dụ:

```kotlin
Maybe<User>
```

Có ba khả năng:

```text
onSuccess(User)

hoặc

onComplete()

hoặc

onError()
```

Hữu ích khi query database có thể không tìm thấy dữ liệu.

---

# 15. Completable

`Completable` không trả về dữ liệu.

Nó chỉ cho biết:

```text
Success
hoặc
Error
```

Ví dụ:

```kotlin
fun deleteUser(): Completable
```

Stream:

```text
deleteUser()
     │
     ├── onComplete()
     │
     └── onError()
```

Phù hợp với:

* INSERT;
* DELETE;
* UPDATE;
* upload không cần dữ liệu trả về.

---

# 16. Flowable

`Flowable` tương tự `Observable`, nhưng hỗ trợ:

> **Backpressure**

Backpressure xảy ra khi nguồn phát dữ liệu nhanh hơn khả năng consumer xử lý.

Ví dụ:

```text
Producer

10000 events / second
       │
       ▼
Consumer

100 events / second
```

Dữ liệu có thể tích tụ:

```text
Producer
████████████████████████
           │
           ▼
        Buffer
████████████████████
           │
           ▼
Consumer
██
```

`Flowable` cung cấp các chiến lược xử lý tình huống này.

---

# 17. Operator trong RxJava

Sức mạnh lớn của RxJava nằm ở các **operator**.

Ví dụ:

```text
Observable
    │
    ▼
  filter
    │
    ▼
   map
    │
    ▼
 flatMap
    │
    ▼
 Observer
```

---

## 17.1 map

Biến đổi từng phần tử.

```kotlin
Observable.just(1, 2, 3)
    .map { it * 10 }
```

Kết quả:

```text
1 → 10
2 → 20
3 → 30
```

---

# 18. filter

Lọc dữ liệu.

```kotlin
Observable.just(1, 2, 3, 4, 5)
    .filter { it % 2 == 0 }
```

Kết quả:

```text
1 ──X
2 ─────► 2
3 ──X
4 ─────► 4
5 ──X
```

---

# 19. flatMap

`flatMap()` thường được sử dụng khi một dữ liệu cần kích hoạt một stream khác.

Ví dụ:

```text
userId
  │
  ▼
getUser(userId)
  │
  ▼
User
```

Code:

```kotlin
Observable.just(123)
    .flatMap { id ->
        api.getUser(id)
    }
```

---

# 20. Chuỗi nhiều API

RxJava đặc biệt hữu ích khi xử lý nhiều tác vụ asynchronous phụ thuộc nhau.

Ví dụ:

```text
Login
  │
  ▼
User
  │
  ▼
Get Profile
  │
  ▼
Profile
  │
  ▼
Get Recommendations
```

Có thể biểu diễn bằng:

```kotlin
login()
    .flatMap { user ->
        getProfile(user.id)
    }
    .flatMap { profile ->
        getRecommendations(profile)
    }
```

---

# 21. Xử lý lỗi

Network luôn có khả năng lỗi.

```text
API
 │
 ├── Success
 │
 └── Error
```

RxJava cung cấp nhiều operator xử lý lỗi.

Ví dụ:

```kotlin
.onErrorReturn {
    emptyList()
}
```

hoặc:

```kotlin
.retry(3)
```

---

# 22. Retry

Ví dụ:

```kotlin
api.getUsers()
    .retry(3)
```

Có thể hình dung:

```text
Request
   │
   X
   │
Retry 1
   X
   │
Retry 2
   X
   │
Retry 3
   │
Success
```

Không nên retry vô hạn một cách thiếu kiểm soát.

Cần cân nhắc:

* loại lỗi;
* số lần retry;
* timeout;
* network availability;
* exponential backoff.

---

# 23. Ví dụ Android hoàn chỉnh

Giả sử cần tải danh sách người dùng.

Repository:

```kotlin
interface UserApi {

    @GET("users")
    fun getUsers(): Single<List<User>>
}
```

ViewModel:

```kotlin
class UserViewModel(
    private val api: UserApi
) : ViewModel() {

    private val disposables = CompositeDisposable()

    fun loadUsers() {

        val disposable = api.getUsers()
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { users ->
                    println("Loaded: ${users.size}")
                },
                { error ->
                    println("Error: ${error.message}")
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

# 24. Luồng dữ liệu trong ví dụ

```text
┌─────────────┐
│     UI      │
└──────┬──────┘
       │ loadUsers()
       ▼
┌─────────────┐
│  ViewModel  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Repository  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Retrofit API│
└──────┬──────┘
       │
       │ IO Scheduler
       ▼
   HTTP Request
       │
       ▼
 List<User>
       │
       │ Main Thread
       ▼
┌─────────────┐
│  ViewModel  │
└──────┬──────┘
       ▼
      UI
```

---

# 25. RxJava và State

Không nên để UI chỉ nhận một `List<User>`.

Trong ứng dụng thực tế thường cần trạng thái:

```text
Idle
 │
 ▼
Loading
 │
 ├────────► Success
 │
 └────────► Error
```

Ví dụ:

```kotlin
sealed class UiState {

    object Loading : UiState()

    data class Success(
        val users: List<User>
    ) : UiState()

    data class Error(
        val message: String
    ) : UiState()
}
```

UI từ đó có thể render:

```text
Loading
   │
   ├── ProgressBar
   │
Success
   │
   ├── User list
   │
Error
   │
   └── Retry button
```

---

# 26. Một ví dụ thực tế: Search

Giả sử người dùng nhập:

```text
a
an
and
andr
andro
android
```

Nếu mỗi ký tự gửi một API request:

```text
6 ký tự
   │
   ▼
6 API requests
```

Không tối ưu.

RxJava có thể xử lý:

```text
Text Input
    │
    ▼
 debounce
    │
    ▼
distinctUntilChanged
    │
    ▼
switchMap
    │
    ▼
Search API
```

Ví dụ logic:

```kotlin
searchEvents
    .debounce(300, TimeUnit.MILLISECONDS)
    .distinctUntilChanged()
    .switchMapSingle { query ->
        api.search(query)
    }
```

---

# 27. debounce

`debounce()` đợi người dùng ngừng nhập trong một khoảng thời gian.

Ví dụ:

```text
a ─ an ─ and ─ andr ─ android
                     │
                   300 ms
                     │
                     ▼
                API request
```

Giúp giảm:

* số lượng network request;
* tải server;
* traffic;
* UI flickering.

---

# 28. switchMap

Search còn có một vấn đề khác:

```text
Request "android"
      │
      │ chậm
      │
Request "android studio"
      │
      │ nhanh
      ▼
Result B
      │
      ▼
Result A ← kết quả cũ quay về sau
```

UI có thể hiển thị kết quả sai.

`switchMap` giúp chuyển sang stream mới và bỏ stream cũ không còn cần thiết.

```text
Query A
  │
  ├────────────X
  │
Query B
  │
  ▼
Result B
```

---

# 29. Cancellation

Cancellation là một phần quan trọng khi thiết kế asynchronous code.

Các tình huống cần hủy:

```text
User leaves screen
        │
        ▼
Cancel subscription
```

hoặc:

```text
Search "cat"
    │
Search "cats"
    │
    ▼
Cancel old request
```

RxJava thường thực hiện thông qua:

* `Disposable`;
* `CompositeDisposable`;
* các operator như `switchMap`.

---

# 30. Logging và Debugging

Một stream RxJava có thể gồm rất nhiều bước:

```text
API
 ↓
map
 ↓
filter
 ↓
flatMap
 ↓
retry
 ↓
observeOn
 ↓
subscribe
```

Nếu không có log, rất khó biết lỗi nằm ở đâu.

Có thể dùng:

```kotlin
.doOnSubscribe {
    Log.d("Rx", "Subscribed")
}
.doOnNext {
    Log.d("Rx", "Data: $it")
}
.doOnError {
    Log.e("Rx", "Error", it)
}
.doOnComplete {
    Log.d("Rx", "Completed")
}
```

---

# 31. State transition nên log

Một luồng network tốt nên quan sát được:

```text
SUBSCRIBED
    │
    ▼
LOADING
    │
    ├── SUCCESS
    │
    └── ERROR
          │
          ▼
        RETRY
```

Điều này giúp debug các lỗi:

* request chạy nhiều lần;
* API không hoàn thành;
* retry vô hạn;
* subscription bị dispose quá sớm;
* UI không nhận dữ liệu.

---

# 32. RxJava trong kiến trúc Android

Một kiến trúc điển hình:

```text
┌───────────────────┐
│   Compose / View  │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│     ViewModel     │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│    Use Case       │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│    Repository     │
└──────┬───────┬────┘
       │       │
       ▼       ▼
     Room   Retrofit
       │       │
       └───┬───┘
           ▼
        RxJava
```

RxJava không nhất thiết là kiến trúc.

Nó là công cụ để quản lý:

* asynchronous execution;
* streams;
* event composition;
* threading;
* error propagation.

---

# 33. RxJava và Kotlin Coroutines

Trong Android hiện đại, bạn cũng sẽ thường gặp:

```text
Kotlin Coroutines
        +
       Flow
```

với những vấn đề tương tự RxJava:

| RxJava            | Coroutines / Flow  |
| ----------------- | ------------------ |
| `Observable<T>`   | `Flow<T>`          |
| `Single<T>`       | `suspend fun(): T` |
| `Completable`     | `suspend fun()`    |
| `subscribe()`     | `collect()`        |
| `Disposable`      | `Job`              |
| `Schedulers.io()` | `Dispatchers.IO`   |
| `map()`           | `map()`            |
| `filter()`        | `filter()`         |
| `flatMap...()`    | `flatMap...()`     |

Điều quan trọng khi học RxJava không chỉ là nhớ API mà phải hiểu:

```text
Async
 +
Stream
 +
Thread
 +
Cancellation
 +
Lifecycle
 +
Error handling
```

Các khái niệm này vẫn hữu ích khi chuyển sang Coroutines và Flow.

---

# 34. Khi nào có thể gặp RxJava?

RxJava vẫn đặc biệt quan trọng khi:

* bảo trì codebase Android cũ;
* dự án đã xây dựng trên RxJava;
* SDK hoặc library cung cấp Rx API;
* hệ thống có nhiều reactive stream phức tạp;
* cần đọc và refactor legacy code.

Không nên thay toàn bộ RxJava chỉ vì Coroutines tồn tại nếu chưa đánh giá:

```text
Migration cost
      +
Regression risk
      +
Testing effort
      +
Business value
```

---

# 35. Những lỗi thường gặp

## Sai 1 — Network trên Main Thread

```text
Main Thread
   │
   ▼
Network
   │
   ▼
UI Freeze
```

**Khắc phục:**

```kotlin
.subscribeOn(Schedulers.io())
```

---

## Sai 2 — Update UI từ background thread

```text
IO Thread
   │
   ▼
updateUI()
```

**Khắc phục:**

```kotlin
.observeOn(AndroidSchedulers.mainThread())
```

---

## Sai 3 — Không dispose subscription

```text
Activity destroyed

Rx subscription
      │
      └──── vẫn tồn tại
```

Có nguy cơ leak hoặc cập nhật UI sai lifecycle.

---

## Sai 4 — Retry vô hạn

```kotlin
.retry()
```

có thể tạo vòng:

```text
Error
 ↓
Retry
 ↓
Error
 ↓
Retry
 ↓
Error
 ↓
...
```

Cần policy rõ ràng.

---

## Sai 5 — Nested subscribe

Không nên:

```kotlin
getUser()
    .subscribe { user ->

        getProfile(user.id)
            .subscribe { profile ->

            }
    }
```

Dễ tạo:

```text
Callback-like nesting
        ↓
khó quản lý error
        ↓
khó dispose
        ↓
khó test
```

Nên compose stream:

```kotlin
getUser()
    .flatMap { user ->
        getProfile(user.id)
    }
```

---

# 36. Testing RxJava

Không nên viết test phụ thuộc vào thread thật.

Ví dụ production:

```text
Schedulers.io()
+
AndroidSchedulers.mainThread()
```

Test cần kiểm soát scheduler để đảm bảo deterministic.

Các phần nên test:

```text
Input
 │
 ▼
Operator chain
 │
 ├── Success?
 ├── Error?
 ├── Retry?
 ├── Filter?
 └── Cancellation?
```

---

# 37. Bài thực hành

## Yêu cầu

Tạo một màn hình tải danh sách dữ liệu từ API.

Pipeline:

```text
Button Click
    │
    ▼
ViewModel
    │
    ▼
RxJava
    │
    ▼
Schedulers.io()
    │
    ▼
API
    │
    ▼
Result
    │
    ▼
AndroidSchedulers.mainThread()
    │
    ▼
UI State
```

App phải có ít nhất ba trạng thái:

```text
Loading
Success
Error
```

---

## Phần 1 — Chuyển tác vụ khỏi Main Thread

```kotlin
repository.loadData()
    .subscribeOn(Schedulers.io())
```

Giải thích:

> Network request được thực hiện trên I/O thread thay vì Main Thread, tránh làm UI bị block.

---

## Phần 2 — Cập nhật UI

```kotlin
.observeOn(AndroidSchedulers.mainThread())
```

Sau đó render:

```text
Loading → Progress

Success → Content

Error → Error message + Retry
```

---

## Phần 3 — Cancellation

Lưu `Disposable`:

```kotlin
private val disposables =
    CompositeDisposable()
```

và giải phóng đúng lifecycle.

---

## Phần 4 — Retry

Thêm retry có giới hạn:

```kotlin
.retry(2)
```

Sau đó test:

```text
Request 1
    X
Request 2
    X
Request 3
    ✓
```

---

# 38. Bài tập

### Bài tập chính

Chuyển một tác vụ chạy lâu khỏi Main Thread bằng RxJava.

Ví dụ:

```text
Fetch API
```

hoặc:

```text
Database query
```

Pipeline:

```text
User Action
    │
    ▼
Loading
    │
    ▼
IO Scheduler
    │
    ▼
Long-running task
    │
    ├── Success
    │      │
    │      ▼
    │   Main Thread
    │      │
    │      ▼
    │   Success UI
    │
    └── Error
           │
           ▼
         Retry
```

Trong README hãy giải thích:

1. Vì sao công việc không chạy trên Main Thread?
2. Scheduler nào được sử dụng?
3. Khi nào subscription bị hủy?
4. Khi request lỗi thì chuyện gì xảy ra?
5. Retry tối đa bao nhiêu lần?
6. UI phản ánh `Loading / Success / Error` thế nào?

---

# 39. Mini artifact cho portfolio

Một artifact nhỏ nhưng khá tốt là:

```text
rxjava-network-demo/
│
├── data/
│   ├── UserApi.kt
│   └── UserRepository.kt
│
├── ui/
│   ├── UserViewModel.kt
│   └── UserScreen.kt
│
├── model/
│   └── User.kt
│
├── test/
│   └── UserViewModelTest.kt
│
└── README.md
```

README nên có sơ đồ:

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
Single<List<User>>
 │
 ▼
Schedulers.io()
 │
 ▼
Retrofit
 │
 ▼
observeOn(MainThread)
 │
 ▼
UI State
```

Và screenshot:

```text
01_loading.png
02_success.png
03_error.png
04_retry.png
```

---

# 40. Checklist hoàn thành

* [ ] Giải thích được Reactive Programming bằng ngôn ngữ của mình.
* [ ] Hiểu `Observable` và `Observer`.
* [ ] Hiểu `Single`, `Maybe`, `Completable` và `Flowable`.
* [ ] Biết vai trò của `subscribe()`.
* [ ] Biết `Disposable` dùng để làm gì.
* [ ] Biết sử dụng `CompositeDisposable`.
* [ ] Phân biệt `subscribeOn()` và `observeOn()`.
* [ ] Biết dùng `Schedulers.io()` cho I/O.
* [ ] Biết chuyển về Android Main Thread trước khi cập nhật UI.
* [ ] Hiểu `map`, `filter` và `flatMap`.
* [ ] Hiểu `debounce` trong search.
* [ ] Hiểu ý nghĩa của `switchMap`.
* [ ] Có chiến lược xử lý error.
* [ ] Có giới hạn retry.
* [ ] Có cancellation khi lifecycle kết thúc.
* [ ] Không để subscription gây leak.
* [ ] Có `Loading / Success / Error`.
* [ ] Có logging để theo dõi stream.
* [ ] Có ít nhất một test cho success.
* [ ] Có test cho error hoặc retry.
* [ ] Có README hoặc diagram mô tả luồng RxJava.

---

# 41. Ghi chú production

Khi sử dụng RxJava trong production, cần kiểm tra toàn bộ chuỗi:

```text
User Action
     │
     ▼
UI State = Loading
     │
     ▼
RxJava Stream
     │
     ├── Scheduler đúng?
     │
     ├── Lifecycle đúng?
     │
     ├── Cancellation?
     │
     ├── Timeout?
     │
     ├── Retry policy?
     │
     └── Error mapping?
     │
     ▼
Repository
     │
     ▼
Network / Database
     │
     ├──────── Success
     │             │
     │             ▼
     │        UI State.Success
     │
     └──────── Error
                   │
                   ▼
              UI State.Error
```

Đặc biệt cần tự hỏi:

* Request có vô tình chạy trên Main Thread không?
* Subscription được dispose ở đâu?
* Khi rotate hoặc rời màn hình thì tác vụ còn chạy không?
* Request cũ có thể ghi đè dữ liệu của request mới không?
* Error có được chuyển thành trạng thái UI rõ ràng không?
* Retry có giới hạn không?
* Offline có được xử lý không?
* Có log đủ để truy tìm lỗi production không?
* Test có bao phủ success, error và retry không?
* Việc migrate hoặc kết hợp RxJava với Coroutines/Flow có làm tăng độ phức tạp không?

---

# 42. Tóm tắt ghi nhớ

```text
                RxJava
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
     Stream    Operators   Scheduler
       │          │          │
       │      map/filter     ├── IO
       │      flatMap        └── Main
       │
       ▼
 Observable / Single
       │
       ▼
    Observer
       │
       ├── onNext / onSuccess
       ├── onError
       └── onComplete
       │
       ▼
   Disposable
       │
       ▼
 Lifecycle cleanup
```

Công thức ngắn gọn nhất để nhớ bài:

> **RxJava = Stream + Operators + Threading + Error Handling + Cancellation.**

Với Android, tư duy quan trọng nhất là:

```text
Công việc nặng
     ↓
Background Thread
     ↓
Xử lý dữ liệu
     ↓
Main Thread
     ↓
Cập nhật State/UI
     ↓
Dispose khi không còn cần
```

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
