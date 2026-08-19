# 019 — RxKotlin

| Thuộc tính              | Nội dung                              |
| ----------------------- | ------------------------------------- |
| **Học phần**            | 04 — Network, Async and Services      |
| **Module**              | Module 08 — Asynchronism              |
| **Nhóm nội dung**       | Rx and Background Work                |
| **Nguồn roadmap**       | Asynchronism / Rx and Background Work |
| **Loại bài**            | Async                                 |
| **Thứ tự trong module** | 019                                   |
| **Thời lượng gợi ý**    | 34 phút                               |

---

## 1. Tóm tắt

**RxKotlin** là tập hợp các extension và tiện ích viết bằng Kotlin dành cho hệ sinh thái **ReactiveX/RxJava**.

Điểm quan trọng cần hiểu:

> **RxJava cung cấp Reactive API chính, còn RxKotlin giúp việc sử dụng RxJava trong Kotlin ngắn gọn và tự nhiên hơn.**

RxKotlin thường xuất hiện trong các Android project đang sử dụng:

* `Observable`
* `Flowable`
* `Single`
* `Maybe`
* `Completable`
* `Scheduler`
* `Disposable`
* `CompositeDisposable`

RxKotlin **không phải một hệ thống async hoàn toàn độc lập với RxJava**.

Có thể hình dung:

```text
ReactiveX
    │
    └── RxJava
          │
          ├── Observable
          ├── Single
          ├── Completable
          ├── Scheduler
          └── Disposable
                 │
                 ▼
             RxKotlin
        Kotlin-friendly APIs
```

Trong Android hiện đại, Kotlin Coroutines và Flow rất phổ biến, nhưng RxJava/RxKotlin vẫn quan trọng khi:

* bảo trì ứng dụng Android cũ;
* project hiện tại sử dụng RxJava;
* SDK/library trả về Rx streams;
* codebase có reactive pipeline phức tạp;
* cần hiểu hoặc migration từ Rx sang Coroutines/Flow.

---

# 2. Mục tiêu học tập

Sau bài này, bạn nên có thể:

* [ ] Giải thích được RxKotlin là gì.
* [ ] Phân biệt được **RxKotlin** và **RxJava**.
* [ ] Hiểu cách dữ liệu đi qua một reactive stream.
* [ ] Hiểu vai trò của `subscribe()`.
* [ ] Biết chuyển background work khỏi Main Thread.
* [ ] Hiểu `subscribeOn()` và `observeOn()`.
* [ ] Biết quản lý `Disposable`.
* [ ] Hiểu tác động của Rx stream tới Android Lifecycle.
* [ ] Biết xử lý success, error và cancellation.
* [ ] Biết khi nào nên dùng `Single`, `Observable`, `Completable`.
* [ ] Có thể tạo một ví dụ RxKotlin nhỏ cho portfolio.

---

# 3. RxKotlin là gì?

RxKotlin là một thư viện hỗ trợ Kotlin cho RxJava.

Ví dụ RxJava có thể cung cấp:

```kotlin
Observable
    .just("A", "B", "C")
    .subscribe { value ->
        println(value)
    }
```

RxKotlin bổ sung nhiều API tiện lợi hơn khi làm việc với Kotlin, chẳng hạn chuyển collection thành reactive stream.

Ví dụ:

```kotlin
val users = listOf("An", "Bình", "Chi")

users
    .toObservable()
    .subscribe { user ->
        println(user)
    }
```

Kết quả:

```text
An
Bình
Chi
```

---

# 4. Reactive Programming là gì?

Trong imperative programming, ta thường viết:

```text
Lấy dữ liệu
    ↓
Chờ kết quả
    ↓
Xử lý dữ liệu
    ↓
Hiển thị UI
```

Trong Reactive Programming:

```text
Data Source
    │
    │ phát dữ liệu
    ▼
Observable
    │
    ▼
Operators
    │
    ├── map
    ├── filter
    ├── debounce
    ├── retry
    └── flatMap
    │
    ▼
Subscriber
    │
    ▼
UI / Database / Logic
```

Subscriber phản ứng mỗi khi stream phát ra dữ liệu.

---

# 5. Mô hình cơ bản của Rx

Một reactive stream thường có ba thành phần:

```text
Producer
   │
   │ emit()
   ▼
Stream
   │
   │ operators
   ▼
Consumer
```

Ví dụ:

```kotlin
Observable
    .just(1, 2, 3, 4, 5)
    .filter { it % 2 == 0 }
    .map { it * 10 }
    .subscribe { value ->
        println(value)
    }
```

Pipeline:

```text
1  2  3  4  5
      │
      ▼
filter { even }
      │
      ▼
2       4
│       │
▼       ▼
20      40
```

Kết quả:

```text
20
40
```

---

# 6. RxKotlin nằm ở đâu trong Android?

Một kiến trúc đơn giản:

```text
┌───────────────┐
│      UI       │
│ Compose/View  │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│   ViewModel   │
│ Rx subscribe  │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  Repository   │
│ Single / Obs. │
└───────┬───────┘
        │
    ┌───┴────┐
    ▼        ▼
 Network     Room
```

Ví dụ Repository:

```kotlin
class UserRepository(
    private val api: UserApi
) {

    fun getUsers(): Single<List<User>> {
        return api.getUsers()
    }
}
```

ViewModel:

```kotlin
repository
    .getUsers()
    .subscribe(
        { users ->
            // Success
        },
        { error ->
            // Error
        }
    )
```

---

# 7. Các Reactive Type quan trọng

RxJava/RxKotlin cung cấp nhiều loại stream.

| Type            | Số lượng giá trị | Trường hợp sử dụng           |
| --------------- | ---------------: | ---------------------------- |
| `Single<T>`     |      Chính xác 1 | API request                  |
| `Maybe<T>`      |         0 hoặc 1 | Query có thể không tồn tại   |
| `Completable`   |   Không trả data | Save/Delete/Update           |
| `Observable<T>` |        0 → nhiều | Event stream                 |
| `Flowable<T>`   |        0 → nhiều | Stream lớn, cần backpressure |

---

## 7.1 `Single`

Phù hợp với API trả về đúng một kết quả.

```kotlin
fun getProfile(): Single<User>
```

Luồng:

```text
subscribe()
    │
    ▼
Network Request
    │
    ├── thành công ──► onSuccess(User)
    │
    └── thất bại ────► onError(Throwable)
```

---

## 7.2 `Observable`

Có thể emit nhiều giá trị.

```kotlin
Observable.just(1, 2, 3)
```

Luồng:

```text
subscribe
   │
   ▼
onNext(1)
   │
   ▼
onNext(2)
   │
   ▼
onNext(3)
   │
   ▼
onComplete()
```

---

## 7.3 `Completable`

Không quan tâm dữ liệu trả về, chỉ quan tâm:

```text
Success
hoặc
Error
```

Ví dụ:

```kotlin
fun deleteUser(id: Long): Completable
```

Phù hợp với:

```text
DELETE
SAVE
UPDATE
UPLOAD
CACHE
```

khi caller chỉ cần biết thao tác có thành công hay không.

---

# 8. Operators

Sức mạnh lớn của Rx nằm ở khả năng ghép nhiều **operator** thành pipeline.

Ví dụ:

```kotlin
users
    .toObservable()
    .filter { it.isActive }
    .map { it.name }
    .sorted()
    .subscribe {
        println(it)
    }
```

Pipeline:

```text
List<User>
    │
    ▼
toObservable()
    │
    ▼
filter(isActive)
    │
    ▼
map(User → name)
    │
    ▼
sorted()
    │
    ▼
Subscriber
```

---

# 9. Một số operator thường gặp

| Operator               | Công dụng                       |
| ---------------------- | ------------------------------- |
| `map`                  | Biến đổi dữ liệu                |
| `filter`               | Lọc dữ liệu                     |
| `flatMap`              | Chuyển sang stream khác         |
| `zip`                  | Ghép kết quả nhiều stream       |
| `merge`                | Gộp nhiều stream                |
| `debounce`             | Chờ input ổn định               |
| `distinctUntilChanged` | Bỏ giá trị liên tiếp giống nhau |
| `retry`                | Thử lại khi lỗi                 |
| `delay`                | Trì hoãn emission               |
| `take`                 | Lấy N phần tử                   |
| `timeout`              | Giới hạn thời gian              |

---

# 10. Ví dụ tìm kiếm với Rx

Một use case kinh điển là Search Box.

Người dùng gõ:

```text
a
an
and
andr
andro
android
```

Nếu gọi API mỗi lần gõ:

```text
a       ──► API
an      ──► API
and     ──► API
andr    ──► API
andro   ──► API
android ──► API
```

Có thể gây rất nhiều request không cần thiết.

Với `debounce`:

```text
a
an
and
andr
andro
android
          │
          │ user ngừng gõ
          ▼
       debounce
          │
          ▼
        API
```

Ví dụ conceptually:

```kotlin
searchObservable
    .debounce(300, TimeUnit.MILLISECONDS)
    .distinctUntilChanged()
    .flatMapSingle { query ->
        repository.search(query)
    }
    .subscribe { result ->
        // update UI
    }
```

---

# 11. Threading trong Rx

Đây là một phần cực kỳ quan trọng khi dùng Rx trong Android.

Android Main Thread chịu trách nhiệm cho UI.

Không nên thực hiện:

```text
Network
Database
File I/O
Heavy computation
```

trực tiếp trên Main Thread.

---

# 12. `subscribeOn()`

`subscribeOn()` xác định thread mà upstream/source bắt đầu thực thi.

Ví dụ:

```kotlin
repository
    .getUsers()
    .subscribeOn(Schedulers.io())
```

Ý nghĩa:

```text
Network / Database
        │
        ▼
Schedulers.io()
```

---

# 13. `observeOn()`

`observeOn()` xác định thread mà downstream tiếp tục xử lý.

Android UI phải cập nhật trên Main Thread:

```kotlin
repository
    .getUsers()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe { users ->
        updateUi(users)
    }
```

Sơ đồ:

```text
        Background Thread
              │
              ▼
┌────────────────────────────┐
│ Network / Database Request │
└─────────────┬──────────────┘
              │
        subscribeOn(IO)
              │
              ▼
        Receive data
              │
        observeOn(Main)
              │
              ▼
┌────────────────────────────┐
│         Update UI          │
└────────────────────────────┘
```

Có thể ghi nhớ:

```text
subscribeOn = công việc bắt đầu ở đâu?

observeOn   = từ đây trở đi chạy ở đâu?
```

---

# 14. Ví dụ hoàn chỉnh

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val disposables = CompositeDisposable()

    fun loadUsers() {

        val disposable = repository
            .getUsers()
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { users ->
                    println("Loaded ${users.size} users")
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

Luồng thực thi:

```text
ViewModel.loadUsers()
        │
        ▼
Repository.getUsers()
        │
        ▼
Schedulers.io()
        │
        ▼
Network
        │
        ├──── Error ──────────────┐
        │                         │
        ▼                         ▼
      Users                    Throwable
        │                         │
        └──────────┬──────────────┘
                   ▼
         Android Main Thread
                   │
          ┌────────┴────────┐
          ▼                 ▼
       UI State          Error State
```

---

# 15. Disposable là gì?

Khi gọi:

```kotlin
subscribe()
```

Rx thường trả về một:

```kotlin
Disposable
```

`Disposable` đại diện cho subscription đang tồn tại.

Ví dụ:

```kotlin
val disposable =
    observable.subscribe { value ->
        println(value)
    }
```

Khi không cần nữa:

```kotlin
disposable.dispose()
```

Luồng:

```text
subscribe()
    │
    ▼
Subscription active
    │
    ├── receive data
    ├── receive data
    ├── receive data
    │
dispose()
    │
    ▼
Subscription stopped
```

---

# 16. CompositeDisposable

Một màn hình có thể có nhiều subscription.

Ví dụ:

```text
Profile request
Search stream
Notification stream
Database listener
```

Không nên quản lý thủ công từng cái.

Dùng:

```kotlin
private val disposables = CompositeDisposable()
```

Thêm subscription:

```kotlin
repository
    .loadData()
    .subscribe(...)
    .addTo(disposables)
```

Đây là một ví dụ tiện ích đặc trưng của RxKotlin:

```kotlin
.addTo(disposables)
```

Sau đó:

```kotlin
override fun onCleared() {
    disposables.clear()
}
```

---

# 17. Lifecycle và RxKotlin

Một trong những lỗi phổ biến:

```text
Activity
    │
 subscribe
    │
    ▼
Network request
    │
    │
Activity destroyed
    │
    ▼
Network vẫn callback
```

Điều này có thể gây:

* memory leak;
* update UI đã bị destroy;
* crash;
* resource không được giải phóng;
* hành vi khó debug.

---

## Cách quản lý

Trong ViewModel:

```kotlin
private val disposables = CompositeDisposable()

override fun onCleared() {
    disposables.clear()
}
```

Sơ đồ:

```text
ViewModel created
      │
      ▼
subscriptions created
      │
      ▼
data emitted
      │
      ▼
ViewModel.onCleared()
      │
      ▼
CompositeDisposable.clear()
      │
      ▼
subscriptions disposed
```

---

# 18. Error handling

Reactive stream cần thiết kế error path rõ ràng.

Ví dụ:

```kotlin
repository
    .getUsers()
    .subscribe(
        { users ->
            showUsers(users)
        },
        { error ->
            showError(error)
        }
    )
```

Không nên chỉ nghĩ:

```text
Request
   │
   ▼
Success
```

Mà phải thiết kế:

```text
             Request
                │
          ┌─────┴─────┐
          ▼           ▼
       Success       Error
          │           │
          ▼           ▼
       Content      UI Error
```

---

# 19. Retry

Một request mạng có thể lỗi tạm thời.

Ví dụ:

```kotlin
repository
    .getUsers()
    .retry(2)
```

Pipeline:

```text
Request #1
   │
 error
   ▼
Request #2
   │
 error
   ▼
Request #3
   │
   ├── success
   └── final error
```

Tuy nhiên không nên retry mọi lỗi một cách mù quáng.

Ví dụ:

```text
Timeout        → có thể retry
HTTP 503       → có thể retry
Network lost   → cân nhắc retry

HTTP 401       → thường không retry vô hạn
HTTP 400       → retry thường không giải quyết
Validation     → không nên retry
```

---

# 20. State trong Android

Rx stream không nên trực tiếp điều khiển UI một cách hỗn loạn.

Nên chuyển kết quả thành state.

Ví dụ:

```kotlin
sealed interface UserState {
    data object Loading : UserState

    data class Success(
        val users: List<User>
    ) : UserState

    data class Error(
        val message: String
    ) : UserState
}
```

Luồng:

```text
             loadUsers()
                 │
                 ▼
              Loading
                 │
                 ▼
              Request
             /       \
            /         \
           ▼           ▼
       Success        Error
           │           │
           ▼           ▼
       User list    Error UI
```

---

# 21. Ví dụ Repository thực tế

```kotlin
interface UserApi {

    fun getUsers(): Single<List<User>>
}
```

Repository:

```kotlin
class UserRepository(
    private val api: UserApi
) {

    fun getUsers(): Single<List<User>> {
        return api
            .getUsers()
            .map { users ->
                users.filter { it.isActive }
            }
    }
}
```

ViewModel:

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val disposables = CompositeDisposable()

    fun loadUsers() {

        repository
            .getUsers()
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { users ->
                    println(users)
                },
                { throwable ->
                    println(throwable)
                }
            )
            .addTo(disposables)
    }

    override fun onCleared() {
        disposables.clear()
    }
}
```

---

# 22. Background Work với RxKotlin

Bài tập yêu cầu:

> Move a long-running task off the main thread and explain cancellation or retry behavior.

Ví dụ một tác vụ dài:

```kotlin
fun processFile(): Single<String> {
    return Single.fromCallable {
        Thread.sleep(2000)

        "File processed"
    }
}
```

Không chạy:

```text
Main Thread
     │
     ▼
processFile()
     │
  BLOCK 2s
     │
     ▼
UI freeze
```

Nên dùng:

```kotlin
processFile()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(
        { result ->
            println(result)
        },
        { error ->
            println(error)
        }
    )
```

Khi đó:

```text
Main Thread
     │
     ├──────────► UI vẫn responsive
     │
     ▼
IO Scheduler
     │
     ▼
Long-running work
     │
     ▼
Main Thread
     │
     ▼
Display result
```

---

# 23. Cancellation

Giả sử user đóng màn hình trước khi task hoàn thành.

```kotlin
val disposable =
    processFile()
        .subscribeOn(Schedulers.io())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(...)
```

Khi không còn cần:

```kotlin
disposable.dispose()
```

Concept:

```text
Task running
     │
     │
User leaves screen
     │
     ▼
dispose()
     │
     ▼
Ignore/stop subscription
```

Cần lưu ý:

> `dispose()` hủy subscription, nhưng khả năng dừng tức thời tác vụ phía dưới còn phụ thuộc vào source có hỗ trợ cancellation hay không.

---

# 24. Logging state transitions

Khi debug Rx pipeline, logging rất hữu ích.

Ví dụ:

```kotlin
repository
    .getUsers()
    .doOnSubscribe {
        println("SUBSCRIBED")
    }
    .doOnSuccess {
        println("SUCCESS")
    }
    .doOnError {
        println("ERROR: ${it.message}")
    }
    .doFinally {
        println("FINISHED")
    }
    .subscribe(...)
```

Bạn có thể thấy:

```text
SUBSCRIBED
    │
    ▼
LOADING
    │
    ▼
NETWORK
    │
    ├── SUCCESS
    │
    └── ERROR
    │
    ▼
FINISHED
```

Điều này đặc biệt hữu ích khi debug:

* request chạy nhiều lần;
* request không chạy;
* subscription bị dispose sớm;
* thread sai;
* exception bị nuốt;
* retry vô hạn.

---

# 25. UX ảnh hưởng như thế nào?

RxKotlin không chỉ là vấn đề syntax.

Việc thiết kế reactive stream ảnh hưởng trực tiếp tới UX.

Ví dụ search không có debounce:

```text
gõ chữ
  ↓
request
  ↓
gõ chữ
  ↓
request
  ↓
gõ chữ
  ↓
request
```

Có thể gây:

* lag;
* request thừa;
* kết quả cũ ghi đè kết quả mới;
* loading nhấp nháy;
* tốn pin và data.

Thiết kế tốt:

```text
Input
  │
  ▼
debounce
  │
  ▼
distinctUntilChanged
  │
  ▼
cancel old request
  │
  ▼
latest request
  │
  ▼
UI
```

---

# 26. RxKotlin và Coroutines

Hai hệ sinh thái đều giải quyết bài toán async/reactive nhưng cách tiếp cận khác nhau.

| RxJava/RxKotlin       | Kotlin Coroutines     |
| --------------------- | --------------------- |
| `Single<T>`           | `suspend fun(): T`    |
| `Completable`         | `suspend fun(): Unit` |
| `Observable<T>`       | `Flow<T>`             |
| `Disposable`          | `Job`                 |
| `CompositeDisposable` | `CoroutineScope`      |
| `Schedulers.io()`     | `Dispatchers.IO`      |
| `observeOn(Main)`     | `Dispatchers.Main`    |
| `map()`               | `map()`               |
| `flatMap()`           | `flatMap*()`          |

Ví dụ Rx:

```kotlin
repository
    .getUser()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(...)
```

Tương đương về ý tưởng với Coroutines:

```kotlin
viewModelScope.launch {

    val user = withContext(Dispatchers.IO) {
        repository.getUser()
    }

    // Update UI
}
```

---

# 27. Rx Observable và Kotlin Flow

Có thể hình dung:

```text
RxJava ecosystem                  Coroutine ecosystem

Observable<T>    ───────────────► Flow<T>

Single<T>        ───────────────► suspend fun(): T

Completable      ───────────────► suspend fun(): Unit

Disposable       ───────────────► Job
```

Không phải mapping hoàn toàn 1:1, nhưng rất hữu ích khi học hoặc migration.

---

# 28. Khi nào RxKotlin vẫn phù hợp?

RxKotlin hợp lý khi:

### Project đã sử dụng RxJava

Ví dụ:

```text
Retrofit
   │
   ▼
Single<Response>
   │
   ▼
Repository
   │
   ▼
ViewModel
```

Không nhất thiết rewrite toàn bộ chỉ vì Coroutines phổ biến hơn.

---

### SDK trả về Rx type

Ví dụ:

```kotlin
fun observeDevice(): Observable<Device>
```

Tiếp tục sử dụng reactive pipeline có thể đơn giản hơn.

---

### Xử lý stream phức tạp

Ví dụ:

```text
Search
 │
 ├─ debounce
 │
 ├─ filter
 │
 ├─ switchMap
 │
 ├─ retry
 │
 └─ combine
```

Rx có bộ operator rất mạnh cho những bài toán dạng này.

---

# 29. Những lỗi thường gặp

## 29.1 Quên xử lý error

Không nên:

```kotlin
observable.subscribe {
    println(it)
}
```

nếu source có thể error mà không có chiến lược xử lý phù hợp.

Nên xác định rõ:

```kotlin
.subscribe(
    { result ->
        // success
    },
    { error ->
        // failure
    }
)
```

---

## 29.2 Quên dispose

Sai:

```text
Activity destroyed
       │
       ▼
subscription vẫn hoạt động
       │
       ▼
potential leak / stale callback
```

Nên:

```text
Lifecycle ends
      │
      ▼
clear/dispose
      │
      ▼
release subscription
```

---

## 29.3 Network trên Main Thread

Sai:

```text
Main Thread
   │
   ▼
HTTP Request
   │
   ▼
UI Freeze
```

Nên:

```text
Schedulers.io()
      │
      ▼
HTTP Request
      │
      ▼
Main Thread
      │
      ▼
UI
```

---

## 29.4 Lạm dụng `subscribeOn()` và `observeOn()`

Một pipeline chứa quá nhiều thread switch:

```text
IO → Main → IO → Computation → Main → IO
```

sẽ khó:

* debug;
* reasoning;
* test;
* maintain.

Chỉ chuyển thread khi thực sự cần.

---

## 29.5 Retry vô hạn

Ví dụ nguy hiểm:

```kotlin
.retry()
```

Có thể tạo:

```text
Request
  ↓
Error
  ↓
Request
  ↓
Error
  ↓
Request
  ↓
...
```

gây:

* tốn pin;
* spam server;
* tốn bandwidth;
* user không biết ứng dụng đang làm gì.

---

# 30. Testing RxKotlin

Một lợi thế của Rx là stream có thể test khá rõ ràng.

Ví dụ:

```kotlin
val testObserver =
    Observable
        .just(1, 2, 3)
        .map { it * 2 }
        .test()

testObserver.assertValues(
    2,
    4,
    6
)
```

Có thể kiểm tra:

```text
Input
 │
 ▼
Operator pipeline
 │
 ▼
TestObserver
 │
 ├── assertValue
 ├── assertValues
 ├── assertComplete
 ├── assertNoErrors
 └── assertError
```

---

# 31. Ví dụ test lỗi

```kotlin
Single
    .error<String>(IllegalStateException())
    .test()
    .assertError(IllegalStateException::class.java)
```

Một feature Rx tốt nên test ít nhất:

```text
Success path
Error path
Empty path
Retry path
Cancellation/dispose
```

nếu các tình huống đó có ý nghĩa với feature.

---

# 32. Debug checklist

Khi một Rx stream không chạy đúng, kiểm tra theo thứ tự:

```text
Source có được tạo?
       │
       ▼
Có subscribe?
       │
       ▼
subscribeOn đúng?
       │
       ▼
Source emit gì?
       │
       ▼
Operator nào làm mất data?
       │
       ▼
Có error?
       │
       ▼
Subscription có bị dispose?
       │
       ▼
observeOn đúng thread?
       │
       ▼
UI nhận state chưa?
```

---

# 33. Bài thực hành

## Yêu cầu

Di chuyển một tác vụ chạy lâu khỏi Main Thread.

Ví dụ:

```kotlin
fun calculate(): Single<Int> {

    return Single.fromCallable {

        Thread.sleep(2000)

        (1..1_000_000).sum()
    }
}
```

Chạy:

```kotlin
private val disposables = CompositeDisposable()

fun startCalculation() {

    calculate()
        .subscribeOn(Schedulers.computation())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(
            { result ->
                println("Result = $result")
            },
            { error ->
                println("Error = ${error.message}")
            }
        )
        .addTo(disposables)
}
```

Cleanup:

```kotlin
fun stop() {
    disposables.clear()
}
```

---

## Sơ đồ

```text
User taps Calculate
        │
        ▼
     UI Thread
        │
        ▼
subscribe()
        │
        ▼
Schedulers.computation()
        │
        ▼
Long calculation
        │
        ├── error ─────────────┐
        │                      │
        ▼                      ▼
      Result                Throwable
        │                      │
        └──────────┬───────────┘
                   ▼
             Main Thread
                   │
                   ▼
                  UI
```

---

# 34. Bài tập mở rộng — Retry

Thêm:

```kotlin
.retry(2)
```

Ví dụ:

```kotlin
repository
    .loadData()
    .subscribeOn(Schedulers.io())
    .retry(2)
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(...)
```

Giải thích trong README:

```text
Request đầu tiên
      │
      ├── success ──► UI
      │
      └── error
            │
            ▼
         Retry #1
            │
            └── error
                  │
                  ▼
               Retry #2
                  │
            ┌─────┴─────┐
            ▼           ▼
         Success     Final Error
```

---

# 35. Mini project gợi ý cho portfolio

Có thể xây một app:

## **Reactive User Search**

Tính năng:

```text
Search TextField
      │
      ▼
Rx Observable
      │
      ▼
debounce(300ms)
      │
      ▼
distinctUntilChanged()
      │
      ▼
API Search
      │
      ▼
Repository
      │
      ▼
ViewModel
      │
      ▼
UI State
```

Nên thể hiện:

* RxKotlin;
* Observable;
* Single;
* Scheduler;
* debounce;
* error handling;
* retry;
* Disposable;
* lifecycle;
* unit test.

README có thể giải thích:

```text
User input
   ↓
debounce
   ↓
API request
   ↓
loading
   ↓
success/error
   ↓
UI
```

Đây là artifact nhỏ nhưng thể hiện khá rõ kiến thức async/reactive.

---

# 36. Production considerations

Khi sử dụng RxKotlin trong production, cần đặt các câu hỏi sau.

### Lifecycle

```text
Màn hình bị rotate?
Activity bị destroy?
ViewModel bị clear?
Subscription có được dispose?
```

---

### State

```text
Loading được biểu diễn thế nào?
Error có được giữ lại không?
Retry có làm UI nhấp nháy không?
Request cũ có ghi đè request mới không?
```

---

### Network

```text
Timeout?
Offline?
HTTP 401?
HTTP 429?
HTTP 500?
Retry bao nhiêu lần?
```

---

### Performance

```text
Có chạy trên Main Thread?
Có quá nhiều subscription?
Có quá nhiều thread switch?
Có request trùng lặp?
Có stream nào không bao giờ dispose?
```

---

### Testing

```text
Success?
Error?
Retry?
Empty?
Dispose?
Operator logic?
```

---

# 37. Checklist hoàn thành

* [ ] Giải thích được RxKotlin bằng ngôn ngữ của mình.
* [ ] Biết RxKotlin xây trên RxJava.
* [ ] Hiểu Observable, Single và Completable.
* [ ] Hiểu `subscribe()`.
* [ ] Hiểu `subscribeOn()`.
* [ ] Hiểu `observeOn()`.
* [ ] Biết đưa network/I/O khỏi Main Thread.
* [ ] Biết xử lý error.
* [ ] Biết sử dụng retry có giới hạn.
* [ ] Hiểu `Disposable`.
* [ ] Biết sử dụng `CompositeDisposable`.
* [ ] Biết cleanup subscription theo lifecycle.
* [ ] Có ít nhất một unit test bằng `TestObserver`.
* [ ] Có diagram mô tả reactive pipeline.
* [ ] Có một mini project hoặc README artifact cho portfolio.

---

# 38. Ghi nhớ nhanh

```text
                    RxKotlin
                       │
                       ▼
                    RxJava
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Single       Observable     Completable
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                   Operators
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
         map         filter       flatMap
                       │
                       ▼
                   Scheduler
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
     subscribeOn(IO)          observeOn(Main)
          │                         │
          └────────────┬────────────┘
                       ▼
                   subscribe()
                       │
              ┌────────┴────────┐
              ▼                 ▼
           Success            Error
              │
              ▼
          Disposable
              │
              ▼
       Lifecycle cleanup
```

## Công thức nhớ

```text
RxKotlin
= RxJava
+ Kotlin-friendly extensions
```

```text
Source
→ subscribeOn(background)
→ operators
→ observeOn(main)
→ subscribe
→ UI
```

Và nguyên tắc quan trọng nhất khi đưa Rx vào Android production:

> **Không chỉ hỏi “stream có chạy không?”, mà phải hỏi “stream chạy trên thread nào, sống đến bao giờ, lỗi đi đâu, ai hủy nó và UI sẽ ở state nào?”.**
