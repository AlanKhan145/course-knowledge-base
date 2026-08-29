# 022 — Scheduler

| Thuộc tính              | Nội dung                              |
| ----------------------- | ------------------------------------- |
| **Học phần**            | 04 — Network, Async and Services      |
| **Module**              | Module 08 — Asynchronism              |
| **Nhóm nội dung**       | Rx and Background Work                |
| **Nguồn roadmap**       | Asynchronism / Rx and Background Work |
| **Loại bài**            | Async                                 |
| **Thứ tự trong module** | 022                                   |
| **Thời lượng gợi ý**    | 34 phút                               |

---

## 1. Tóm tắt

**Scheduler** trong RxJava quyết định **công việc sẽ được thực thi trên thread nào** và **kết quả sẽ được quan sát trên thread nào**.

Trong Android, đây là khái niệm rất quan trọng vì:

* Network request không nên chạy trên Main Thread.
* Đọc/ghi database không nên chặn UI.
* Tác vụ CPU nặng không nên làm UI bị giật.
* Kết quả dùng để cập nhật View thường phải quay trở lại **Main Thread**.

Mẫu phổ biến:

```text
UI
 │
 │ User action
 ▼
ViewModel
 │
 │ subscribeOn(IO)
 ▼
Repository / API / Database
 │
 │ background thread
 ▼
Result
 │
 │ observeOn(Main)
 ▼
UI
```

Ví dụ:

```kotlin
api.getUser()
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

Ý tưởng cốt lõi:

> **`subscribeOn()` quyết định nơi công việc bắt đầu chạy.
> `observeOn()` quyết định thread mà dữ liệu phía sau nó được xử lý.**

---

# 2. Mục tiêu học tập

Sau bài này, bạn nên có thể:

* Giải thích Scheduler trong RxJava bằng ngôn ngữ của mình.
* Hiểu sự khác nhau giữa `subscribeOn()` và `observeOn()`.
* Biết khi nào dùng:

  * `Schedulers.io()`
  * `Schedulers.computation()`
  * `Schedulers.single()`
  * `Schedulers.trampoline()`
  * `AndroidSchedulers.mainThread()`
* Di chuyển network/database/CPU work khỏi Main Thread.
* Đưa kết quả về Main Thread để cập nhật UI.
* Quản lý subscription theo lifecycle.
* Test RxJava code có Scheduler.
* Debug các lỗi thread thường gặp.
* Xây dựng một ví dụ nhỏ có thể đưa vào portfolio.

---

# 3. Scheduler là gì?

Trong RxJava, luồng dữ liệu có thể đi qua nhiều operator:

```text
Source
  ↓
map
  ↓
filter
  ↓
flatMap
  ↓
Subscriber
```

Nhưng câu hỏi quan trọng là:

> Những operator này đang chạy trên thread nào?

Scheduler là abstraction giúp RxJava quyết định **context thực thi**.

Ví dụ:

```kotlin
Single.fromCallable {
    database.loadUser()
}
.subscribeOn(Schedulers.io())
.observeOn(AndroidSchedulers.mainThread())
.subscribe { user ->
    render(user)
}
```

Ở đây:

```text
database.loadUser()
        │
        │ Schedulers.io()
        ▼
Background Thread
        │
        │ result
        ▼
Android Main Thread
        │
        ▼
render(user)
```

---

# 4. Vì sao Scheduler quan trọng trên Android?

Android có một **Main Thread**, còn gọi là UI Thread.

Main Thread chịu trách nhiệm cho:

* vẽ giao diện;
* xử lý touch;
* animation;
* layout;
* click event;
* cập nhật View.

Nếu thực hiện công việc nặng trên Main Thread:

```kotlin
button.setOnClickListener {
    val result = performVeryHeavyTask()
    textView.text = result
}
```

UI có thể:

```text
Click
 │
 ▼
Main Thread
 │
 ├── Heavy task ─────────────── 3 giây
 │
 └── UI không thể xử lý event
             ↓
       UI lag / freeze
```

Scheduler giúp chuyển task sang background:

```text
Main Thread
    │
    │ subscribe
    ▼
IO Scheduler
    │
    │ Network / Database
    │
    ▼
Result
    │
    ▼
Main Thread
    │
    ▼
Update UI
```

---

# 5. Các Scheduler quan trọng

## 5.1. `Schedulers.io()`

Dùng cho công việc **I/O-bound**.

Ví dụ:

* network;
* REST API;
* database;
* file;
* disk cache;
* socket.

```kotlin
repository.getUser()
    .subscribeOn(Schedulers.io())
```

Ví dụ đầy đủ:

```kotlin
api.getProfile()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(
        { profile ->
            showProfile(profile)
        },
        { error ->
            showError(error)
        }
    )
```

### Tư duy

```text
Network request
      ↓
Waiting for server
      ↓
IO-bound
      ↓
Schedulers.io()
```

---

# 6. `Schedulers.computation()`

Dùng cho các tác vụ **CPU-bound**.

Ví dụ:

* xử lý dữ liệu lớn;
* mã hóa;
* tính toán;
* xử lý ảnh;
* thuật toán;
* parse hoặc transform dữ liệu nặng.

```kotlin
Observable.fromIterable(numbers)
    .observeOn(Schedulers.computation())
    .map {
        expensiveCalculation(it)
    }
```

Sơ đồ:

```text
Dataset
   ↓
computation()
   ↓
CPU-intensive operations
   ↓
Result
```

### Không nên dùng

```kotlin
Schedulers.computation()
```

cho network request dài.

Lý do: computation scheduler được thiết kế cho tài nguyên CPU và số worker thường gắn với khả năng xử lý của CPU.

---

# 7. `Schedulers.single()`

`Schedulers.single()` cung cấp một Scheduler với **một thread dùng chung**.

Phù hợp khi các task cần được chạy tuần tự:

```text
Task A
   ↓
Task B
   ↓
Task C
```

Ví dụ:

```kotlin
observable
    .observeOn(Schedulers.single())
    .subscribe {
        processSequentially(it)
    }
```

Có thể hữu ích cho:

* tác vụ yêu cầu thứ tự;
* serialization;
* một số xử lý state tuần tự.

---

# 8. `Schedulers.trampoline()`

`Schedulers.trampoline()` thực thi công việc trên thread hiện tại nhưng đưa task vào queue.

Ví dụ:

```kotlin
Schedulers.trampoline()
```

Có thể hình dung:

```text
Current Thread

Task A
Task B
Task C

Queue:
[A] → [B] → [C]
```

Nó thường hữu ích trong:

* test;
* một số xử lý tuần tự;
* trường hợp cần deterministic execution.

Không phải lựa chọn phổ biến cho network/background work trong Android production.

---

# 9. `AndroidSchedulers.mainThread()`

Đây là Scheduler đặc biệt cho Android.

Dùng để chuyển execution trở về **Android Main Thread**.

```kotlin
.observeOn(AndroidSchedulers.mainThread())
```

Ví dụ:

```kotlin
api.loadData()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe { data ->
        textView.text = data.title
    }
```

Luồng thực thi:

```text
Main Thread
    │
    │ subscribe
    ▼
Schedulers.io()
    │
    │ HTTP
    │ Parse response
    ▼
observeOn(mainThread)
    │
    ▼
Main Thread
    │
    └── update View
```

---

# 10. Tổng hợp Scheduler

| Scheduler                        | Phù hợp với                                              |
| -------------------------------- | -------------------------------------------------------- |
| `Schedulers.io()`                | Network, database, file, socket                          |
| `Schedulers.computation()`       | CPU-heavy calculations                                   |
| `Schedulers.single()`            | Task cần chạy tuần tự trên một thread                    |
| `Schedulers.trampoline()`        | Queue task trên thread hiện tại, thường hữu ích khi test |
| `AndroidSchedulers.mainThread()` | Android UI                                               |

Quy tắc nhớ nhanh:

```text
Network / DB / File
        ↓
        IO

CPU calculation
        ↓
    Computation

Update Android UI
        ↓
    Main Thread
```

---

# 11. `subscribeOn()`

`subscribeOn()` quyết định **Scheduler được dùng khi subscription bắt đầu và source thực thi**.

Ví dụ:

```kotlin
api.getUser()
    .subscribeOn(Schedulers.io())
```

Luồng:

```text
Main Thread
     │
     │ subscribe()
     ▼
Schedulers.io()
     │
     └── api.getUser()
```

Ví dụ:

```kotlin
Single.fromCallable {
    println(Thread.currentThread().name)
    database.getUser()
}
.subscribeOn(Schedulers.io())
.subscribe()
```

`database.getUser()` sẽ chạy trên scheduler I/O.

---

# 12. `observeOn()`

`observeOn()` chuyển **các operator nằm phía sau nó** sang Scheduler được chỉ định.

Ví dụ:

```kotlin
api.getUser()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe { user ->
        showUser(user)
    }
```

Luồng:

```text
getUser()
   │
   │ IO Thread
   ▼
HTTP response
   │
   │ observeOn(mainThread)
   ▼
Main Thread
   │
   ▼
showUser()
```

---

# 13. `subscribeOn()` vs `observeOn()`

Đây là phần quan trọng nhất của bài.

|                  | `subscribeOn()`                 | `observeOn()`                      |
| ---------------- | ------------------------------- | ---------------------------------- |
| Mục đích         | Chọn thread cho upstream/source | Chuyển downstream sang thread khác |
| Thường dùng      | 1 lần                           | Có thể dùng nhiều lần              |
| Android phổ biến | `Schedulers.io()`               | `AndroidSchedulers.mainThread()`   |

Mẫu chuẩn:

```kotlin
repository.loadUser()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(...)
```

Nhớ:

```text
subscribeOn = công việc bắt đầu ở đâu

observeOn = từ đây trở đi quan sát ở đâu
```

---

# 14. `observeOn()` có thể xuất hiện nhiều lần

Ví dụ:

```kotlin
api.loadImage()
    .subscribeOn(Schedulers.io())

    .observeOn(Schedulers.computation())
    .map { image ->
        processImage(image)
    }

    .observeOn(AndroidSchedulers.mainThread())
    .subscribe { image ->
        imageView.setImageBitmap(image)
    }
```

Pipeline:

```text
                 IO Thread
                     │
                     ▼
                Download image
                     │
                     ▼
           observeOn(computation)
                     │
                     ▼
             Computation Thread
                     │
                     ▼
                Process image
                     │
                     ▼
             observeOn(main)
                     │
                     ▼
                 Main Thread
                     │
                     ▼
              Update ImageView
```

Đây là một ví dụ rất rõ về vai trò của Scheduler.

---

# 15. Ví dụ Android thực tế

Giả sử màn hình Profile cần tải dữ liệu user từ server.

## API

```kotlin
interface UserApi {

    @GET("users/{id}")
    fun getUser(
        @Path("id") id: Long
    ): Single<User>
}
```

---

## Repository

```kotlin
class UserRepository(
    private val api: UserApi
) {

    fun getUser(id: Long): Single<User> {
        return api.getUser(id)
    }
}
```

---

## ViewModel

```kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {

    private val disposables = CompositeDisposable()

    fun loadUser(id: Long) {

        repository.getUser(id)
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { user ->
                    println("Loaded: ${user.name}")
                },
                { error ->
                    println("Error: ${error.message}")
                }
            )
            .addTo(disposables)
    }

    override fun onCleared() {
        disposables.clear()
    }
}
```

Sơ đồ kiến trúc:

```text
┌────────────────────┐
│        UI          │
│ Activity / Compose │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     ViewModel      │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     Repository     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│      Retrofit      │
└────────────────────┘

          │
          │ subscribeOn(IO)
          ▼

      Network Thread

          │
          │ Result
          ▼

 observeOn(Main Thread)

          │
          ▼

        UI State
```

---

# 16. Scheduler và Lifecycle

Scheduler không tự giải quyết lifecycle.

Đây là một hiểu nhầm quan trọng.

Ví dụ:

```text
Activity
   │
   ├── Start request
   │
   ▼
Network request ──────────────►
   │
Activity destroyed
   X
                               │
                               ▼
                           Result arrives
```

Nếu subscription vẫn tồn tại, có thể dẫn đến:

* memory leak;
* callback vào object không còn cần thiết;
* update UI sai lifecycle;
* request không cần thiết vẫn tiếp tục.

Vì vậy thường dùng:

```kotlin
CompositeDisposable
```

Ví dụ:

```kotlin
private val disposables = CompositeDisposable()
```

Thêm subscription:

```kotlin
repository.getUser()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(...)
    .addTo(disposables)
```

Và clear:

```kotlin
override fun onCleared() {
    disposables.clear()
}
```

---

# 17. Cancellation với Disposable

Khi gọi:

```kotlin
val disposable =
    api.getUser()
        .subscribeOn(Schedulers.io())
        .subscribe()
```

Có thể hủy subscription:

```kotlin
disposable.dispose()
```

Kiểm tra:

```kotlin
if (!disposable.isDisposed) {
    disposable.dispose()
}
```

Luồng:

```text
Subscription
     │
     ▼
Background Task
     │
     │
 dispose()
     │
     X
```

Tuy nhiên, việc `dispose()` có thực sự hủy tác vụ nền tức thời hay không còn phụ thuộc source và API underlying có hỗ trợ cancellation hay không.

---

# 18. Retry

Scheduler thường được kết hợp với retry khi làm network.

Ví dụ:

```kotlin
api.getUser()
    .subscribeOn(Schedulers.io())
    .retry(2)
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

Luồng:

```text
Request
   │
   ▼
Failure
   │
   ├── Retry 1
   │      │
   │      ▼
   │    Failure
   │
   ├── Retry 2
   │      │
   │      ▼
   │    Success
   │
   ▼
Result
```

Production thường cần retry có kiểm soát hơn, tránh retry vô hạn.

---

# 19. Không phải mọi retry đều tốt

Ví dụ nguy hiểm:

```kotlin
.retry()
```

Nếu server luôn lỗi:

```text
Request
 ↓
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

Có thể gây:

* hao pin;
* tốn network;
* tăng server load;
* UX khó hiểu;
* request chạy vô hạn.

Nên xác định:

```text
Lỗi có recover được không?
        │
   ┌────┴────┐
   │         │
  Có       Không
   │         │
 retry    show error
```

---

# 20. Logging thread để debug

Khi học Scheduler, nên log thread.

```kotlin
Single.fromCallable {
    Log.d(
        "RxThread",
        "Source: ${Thread.currentThread().name}"
    )

    repository.loadData()
}
.subscribeOn(Schedulers.io())
.observeOn(AndroidSchedulers.mainThread())
.subscribe { data ->

    Log.d(
        "RxThread",
        "Observer: ${Thread.currentThread().name}"
    )
}
```

Ví dụ log:

```text
Source: RxCachedThreadScheduler-1
Observer: main
```

Đây là cách rất hiệu quả để hiểu Scheduler thực sự đang làm gì.

---

# 21. Lỗi phổ biến — chạy tác vụ nặng trên Main Thread

Ví dụ:

```kotlin
Single.fromCallable {
    expensiveDatabaseQuery()
}
.observeOn(AndroidSchedulers.mainThread())
.subscribe()
```

Thiếu:

```kotlin
subscribeOn(Schedulers.io())
```

Source có thể chạy trên thread gọi `subscribe()`.

Nếu đó là Main Thread:

```text
Main Thread
    ↓
Database query
    ↓
UI blocked
```

---

# 22. Lỗi phổ biến — cập nhật UI từ background thread

Ví dụ:

```kotlin
api.getUser()
    .subscribeOn(Schedulers.io())
    .subscribe { user ->
        textView.text = user.name
    }
```

Callback có thể không nằm trên Main Thread.

Nên:

```kotlin
api.getUser()
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe { user ->
        textView.text = user.name
    }
```

---

# 23. Lỗi phổ biến — dùng `Schedulers.io()` cho tất cả mọi thứ

Ví dụ:

```kotlin
observable
    .observeOn(Schedulers.io())
    .map {
        extremelyHeavyCalculation(it)
    }
```

Nếu đó là công việc CPU-heavy thì nên cân nhắc:

```kotlin
Schedulers.computation()
```

Tư duy đúng:

```text
             Task
              │
       ┌──────┴───────┐
       │              │
   Waiting I/O     CPU heavy
       │              │
       ▼              ▼
      IO         Computation
```

---

# 24. Lỗi phổ biến — chuyển thread quá nhiều lần

Không nên tạo pipeline kiểu:

```kotlin
source
    .observeOn(Schedulers.io())
    .map(...)
    .observeOn(Schedulers.computation())
    .map(...)
    .observeOn(Schedulers.io())
    .map(...)
    .observeOn(AndroidSchedulers.mainThread())
```

nếu không có lý do rõ ràng.

Thread switching cũng có overhead.

Nguyên tắc:

> Chỉ chuyển Scheduler khi công việc phía sau thực sự cần một execution context khác.

---

# 25. Scheduler nên nằm ở đâu?

Một vấn đề kiến trúc thường gặp:

```kotlin
repository.getUser()
    .subscribeOn(Schedulers.io())
```

Có hai cách thiết kế.

### Cách A — Repository quyết định Scheduler

```kotlin
fun getUser(): Single<User> {
    return api.getUser()
        .subscribeOn(Schedulers.io())
}
```

Ưu điểm:

* caller không cần biết source chạy ở đâu.

Nhược điểm:

* khó kiểm soát Scheduler hơn trong một số test/flow.

---

### Cách B — Caller quyết định Scheduler

```kotlin
repository.getUser()
    .subscribeOn(Schedulers.io())
```

Ưu điểm:

* flexible;
* execution policy rõ tại use case/ViewModel.

Nhược điểm:

* có thể lặp code.

Trong project lớn có thể abstract Scheduler để tăng khả năng test.

---

# 26. Scheduler abstraction

Thay vì hard-code:

```kotlin
Schedulers.io()
AndroidSchedulers.mainThread()
```

có thể tạo:

```kotlin
interface SchedulerProvider {

    fun io(): Scheduler

    fun computation(): Scheduler

    fun ui(): Scheduler
}
```

Implementation:

```kotlin
class AppSchedulerProvider : SchedulerProvider {

    override fun io(): Scheduler =
        Schedulers.io()

    override fun computation(): Scheduler =
        Schedulers.computation()

    override fun ui(): Scheduler =
        AndroidSchedulers.mainThread()
}
```

Sau đó:

```kotlin
repository.getUser()
    .subscribeOn(schedulers.io())
    .observeOn(schedulers.ui())
```

Lợi ích:

```text
Production
   │
   └── Real Scheduler

Testing
   │
   └── Synchronous/Test Scheduler
```

Đây là thiết kế phù hợp để đưa vào portfolio.

---

# 27. Testing Scheduler

Async code có thể làm test khó đoán:

```text
Test Thread
    │
    └── Background Scheduler
             │
             └── callback không biết khi nào chạy
```

Trong unit test có thể thay Scheduler bằng scheduler đồng bộ/test scheduler.

Ví dụ provider:

```kotlin
class TestSchedulerProvider : SchedulerProvider {

    override fun io(): Scheduler =
        Schedulers.trampoline()

    override fun computation(): Scheduler =
        Schedulers.trampoline()

    override fun ui(): Scheduler =
        Schedulers.trampoline()
}
```

Khi đó:

```text
Test
 │
 ▼
Source
 │
 ▼
Operator
 │
 ▼
Subscriber
```

chạy deterministic hơn.

---

# 28. Ví dụ test

```kotlin
@Test
fun `load user returns expected user`() {

    val testObserver =
        repository.getUser(1)
            .subscribeOn(Schedulers.trampoline())
            .observeOn(Schedulers.trampoline())
            .test()

    testObserver.assertComplete()
    testObserver.assertNoErrors()
}
```

Có thể kiểm tra:

```kotlin
testObserver.assertValue(expectedUser)
```

---

# 29. Scheduler và State

Trong Android hiện đại, kết quả từ Rx thường không nên cập nhật View trực tiếp ở tầng data.

Nên chuyển thành state:

```text
Rx Stream
   ↓
ViewModel
   ↓
UI State
   ↓
UI
```

Ví dụ:

```kotlin
sealed interface UserState {

    data object Loading : UserState

    data class Success(
        val user: User
    ) : UserState

    data class Error(
        val throwable: Throwable
    ) : UserState
}
```

Pipeline:

```text
              loadUser()
                   │
                   ▼
               Loading
                   │
                   ▼
          subscribeOn(IO)
                   │
                   ▼
              API call
             /        \
        Success       Error
           │            │
           └─────┬──────┘
                 ▼
          observeOn(Main)
                 │
                 ▼
              UI State
```

---

# 30. Scheduler không thay thế WorkManager

Một distinction quan trọng:

Scheduler giải quyết:

> **Task chạy trên thread nào?**

Nhưng không giải quyết đầy đủ:

> **Task có phải tiếp tục chạy sau khi app bị đóng/process bị kill hay không?**

Ví dụ tải dữ liệu đơn giản:

```text
User opens screen
      ↓
RxJava
      ↓
Schedulers.io()
```

Nhưng task cần đảm bảo thực thi:

```text
Upload backup
    ↓
App background
    ↓
Process killed
    ↓
Task vẫn cần tiếp tục

→ WorkManager phù hợp hơn
```

Tóm lại:

| Nhu cầu                              | Công cụ                       |
| ------------------------------------ | ----------------------------- |
| Chuyển execution thread trong Rx     | Scheduler                     |
| Async stream                         | RxJava                        |
| Background work cần đảm bảo thực thi | WorkManager                   |
| UI state/reactive stream Kotlin      | Flow/StateFlow thường phù hợp |

---

# 31. Scheduler và Coroutines

Nếu so với Kotlin Coroutines:

```kotlin
.subscribeOn(Schedulers.io())
```

gần với tư duy:

```kotlin
withContext(Dispatchers.IO)
```

Trong khi:

```kotlin
Schedulers.computation()
```

có vai trò gần với:

```kotlin
Dispatchers.Default
```

Có thể hình dung:

```text
RxJava                      Coroutines

Schedulers.io()       ≈     Dispatchers.IO

Schedulers.computation()
                      ≈     Dispatchers.Default

AndroidSchedulers
.mainThread()          ≈     Dispatchers.Main
```

Đây chỉ là so sánh về **vai trò execution context**, không có nghĩa API hoặc semantics hoàn toàn giống nhau.

---

# 32. Luồng hoàn chỉnh trong Android

Một flow production có thể trông như sau:

```text
┌──────────────────┐
│      User        │
│   Tap Refresh    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│    ViewModel     │
│ Loading = true   │
└────────┬─────────┘
         │
         ▼
   subscribeOn(IO)
         │
         ▼
┌──────────────────┐
│    Repository    │
└────────┬─────────┘
         │
         ├─────────────┐
         ▼             ▼
      Retrofit        Room
         │             │
         └──────┬──────┘
                │
                ▼
             Result
                │
       observeOn(Main)
                │
       ┌────────┴────────┐
       │                 │
       ▼                 ▼
    Success            Error
       │                 │
       ▼                 ▼
 Success State       Error State
       │                 │
       └────────┬────────┘
                ▼
               UI
```

---

# 33. Thực hành

## Bài thực hành: tải User Profile

Yêu cầu:

1. Tạo một `Single<User>`.
2. Giả lập network/database delay.
3. Chạy task trên `Schedulers.io()`.
4. Log thread thực thi.
5. Trả kết quả về Main Thread.
6. Hiển thị loading.
7. Hiển thị success/error.
8. Lưu subscription trong `CompositeDisposable`.
9. Dispose subscription khi ViewModel bị clear.

Ví dụ:

```kotlin
fun loadProfile() {

    repository.getProfile()
        .subscribeOn(Schedulers.io())
        .doOnSubscribe {
            Log.d("Profile", "Loading")
        }
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(
            { profile ->
                Log.d(
                    "Profile",
                    "Success on ${Thread.currentThread().name}"
                )
            },
            { error ->
                Log.e(
                    "Profile",
                    "Error",
                    error
                )
            }
        )
        .addTo(disposables)
}
```

---

# 34. Bài tập

## Bài 1 — Chuyển task khỏi Main Thread

Cho:

```kotlin
Single.fromCallable {
    calculateLargeDataset()
}
.subscribe { result ->
    showResult(result)
}
```

Hãy chỉnh code sao cho:

* tính toán không chạy trên Main Thread;
* UI được cập nhật trên Main Thread.

Gợi ý:

```kotlin
Single.fromCallable {
    calculateLargeDataset()
}
.subscribeOn(Schedulers.computation())
.observeOn(AndroidSchedulers.mainThread())
.subscribe { result ->
    showResult(result)
}
```

---

## Bài 2 — Network

Viết pipeline:

```text
Retrofit
   ↓
IO Scheduler
   ↓
map response
   ↓
Main Thread
   ↓
UI
```

---

## Bài 3 — Lifecycle

Thêm:

```kotlin
CompositeDisposable
```

và chứng minh subscription được clear trong:

```kotlin
onCleared()
```

---

## Bài 4 — Retry

Thiết kế network flow:

```text
Request
   ↓
Error
   ↓
Retry tối đa 2 lần
   ↓
Success / Error UI
```

Giải thích tại sao không nên retry vô hạn.

---

# 35. Mini project cho portfolio

Có thể xây dựng project:

## `RxSchedulerDemo`

Tính năng:

```text
User
 │
 ├── Load API
 │
 ├── Query Database
 │
 └── Run CPU Task
```

Ba task sử dụng:

```text
API
 ↓
Schedulers.io()

Database
 ↓
Schedulers.io()

CPU calculation
 ↓
Schedulers.computation()

Results
 ↓
AndroidSchedulers.mainThread()
```

README nên giải thích:

```text
Schedulers.io()
        │
        ├── Retrofit
        └── Room

Schedulers.computation()
        │
        └── CPU Task

AndroidSchedulers.mainThread()
        │
        └── UI State
```

Artifact portfolio có thể gồm:

* source code;
* diagram thread switching;
* screenshot app;
* log tên thread;
* unit test;
* README giải thích `subscribeOn()` / `observeOn()`.

---

# 36. Debugging checklist

Khi RxJava code hoạt động bất thường, kiểm tra:

* Operator này đang chạy trên thread nào?
* Có quên `subscribeOn()` không?
* Có cập nhật UI từ background thread không?
* Có gọi `observeOn(mainThread())` quá sớm không?
* Có switch Scheduler quá nhiều lần không?
* Subscription đã được dispose chưa?
* Error có được handle không?
* Retry có giới hạn không?
* Task này thực sự là I/O hay CPU-bound?
* Task có cần WorkManager thay vì Rx Scheduler không?

Một kỹ thuật debug đơn giản:

```kotlin
Log.d(
    "THREAD",
    Thread.currentThread().name
)
```

đặt ở nhiều operator khác nhau.

---

# 37. Checklist hoàn thành

* [ ] Giải thích được Scheduler là gì.
* [ ] Phân biệt được background thread và Main Thread.
* [ ] Biết `Schedulers.io()` dùng cho I/O.
* [ ] Biết `Schedulers.computation()` dùng cho CPU-bound work.
* [ ] Biết vai trò của `Schedulers.single()`.
* [ ] Biết vai trò cơ bản của `Schedulers.trampoline()`.
* [ ] Biết `AndroidSchedulers.mainThread()` dùng để cập nhật UI.
* [ ] Phân biệt được `subscribeOn()` và `observeOn()`.
* [ ] Viết được pipeline `IO → Main`.
* [ ] Biết cách chuyển nhiều Scheduler trong một pipeline khi thực sự cần.
* [ ] Biết quản lý subscription bằng `Disposable` / `CompositeDisposable`.
* [ ] Biết xử lý retry có giới hạn.
* [ ] Biết log thread để debug.
* [ ] Biết cách abstraction Scheduler để test.
* [ ] Phân biệt Scheduler với WorkManager.
* [ ] Có một demo nhỏ hoặc README để đưa vào portfolio.

---

# 38. Ghi chú production

Khi đưa Scheduler vào production, không nên chỉ hỏi:

> “Code có chạy async không?”

Hãy kiểm tra toàn bộ flow:

```text
                User Action
                     │
                     ▼
                  UI State
                     │
                     ▼
             Background Work
             /              \
           IO              CPU
           │                │
           ▼                ▼
     Schedulers.io()  computation()
           │                │
           └───────┬────────┘
                   ▼
                 Result
                   │
          observeOn(Main)
                   │
          ┌────────┴────────┐
          ▼                 ▼
       Success             Error
          │                 │
          └────────┬────────┘
                   ▼
                  UI
                   │
                   ▼
          Lifecycle cleanup
```

Đặc biệt cần xem xét:

**UX**

* Có loading state không?
* Task dài có làm UI bị freeze không?
* User có thể retry không?

**Lifecycle**

* Subscription có sống lâu hơn Activity/Fragment/ViewModel không?
* Khi user thoát màn hình có cần cancel task không?

**State**

* Rotate/background có làm mất state không?
* Result có được đưa vào ViewModel/UI state hợp lý không?

**Error**

* Network timeout được xử lý thế nào?
* Retry bao nhiêu lần?
* Có retry lỗi không thể phục hồi không?

**Performance**

* I/O có chạy trên Main Thread không?
* CPU-heavy work có chạy nhầm `Schedulers.io()` không?
* Có switch thread không cần thiết không?

**Testing**

* Scheduler có thể inject được không?
* Test có deterministic không?
* Success/error/cancellation có được test không?

---

# 39. Ghi nhớ nhanh

```text
Scheduler
│
├── Schedulers.io()
│     └── Network / Database / File
│
├── Schedulers.computation()
│     └── CPU-heavy calculations
│
├── Schedulers.single()
│     └── Sequential work
│
├── Schedulers.trampoline()
│     └── Current thread + queued execution
│
└── AndroidSchedulers.mainThread()
      └── Android UI
```

Và công thức quan trọng nhất của bài:

```kotlin
source
    .subscribeOn(Schedulers.io())
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(...)
```

Có thể ghi nhớ bằng một câu:

> **`subscribeOn()` đưa công việc đến đúng nơi để chạy; `observeOn()` đưa kết quả đến đúng nơi để xử lý tiếp.**

Scheduler vì vậy không chỉ là API để “chạy background”, mà là một phần quan trọng của việc thiết kế **threading, responsiveness, lifecycle, state, testing và performance** trong ứng dụng Android dùng RxJava.

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
