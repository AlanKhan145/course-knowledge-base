# 025 — PeriodicWorkRequest

| Thuộc tính              | Nội dung                              |
| ----------------------- | ------------------------------------- |
| **Học phần**            | 04 — Network, Async and Services      |
| **Module**              | Module 08 — Asynchronism              |
| **Nhóm nội dung**       | Rx and Background Work                |
| **Nguồn roadmap**       | Asynchronism / Rx and Background Work |
| **Loại bài**            | Async / Background Work               |
| **Thứ tự trong module** | 025                                   |
| **Thời lượng gợi ý**    | 34 phút                               |

---

## 1. Tóm tắt

`PeriodicWorkRequest` là thành phần của **Android WorkManager** dùng để lập lịch một công việc chạy **lặp lại theo chu kỳ** ở background.

Ví dụ:

* Đồng bộ dữ liệu với server mỗi vài giờ.
* Làm mới cache.
* Upload log định kỳ.
* Dọn dữ liệu cũ.
* Kiểm tra dữ liệu cần đồng bộ.
* Cập nhật nội dung khi có kết nối mạng.

Điểm quan trọng:

> `PeriodicWorkRequest` dành cho công việc **định kỳ nhưng không yêu cầu chạy chính xác tuyệt đối theo đồng hồ**.

Android có thể trì hoãn công việc vì:

* Doze Mode.
* Battery optimization.
* Constraints chưa thỏa mãn.
* Scheduler của hệ điều hành.
* Thiết bị đang thiếu tài nguyên.

Theo tài liệu Android hiện tại, khoảng lặp tối thiểu của `PeriodicWorkRequest` là **15 phút**. WorkManager cũng không đảm bảo worker chạy chính xác tại một thời điểm cụ thể.

---

## 2. Mục tiêu học tập

Sau bài này, bạn có thể:

* [ ] Giải thích được `PeriodicWorkRequest` là gì.
* [ ] Phân biệt `PeriodicWorkRequest` và `OneTimeWorkRequest`.
* [ ] Tạo một `Worker` chạy định kỳ.
* [ ] Thiết lập `Constraints`.
* [ ] Hiểu vòng đời của periodic work.
* [ ] Xử lý `success`, `retry` và lỗi.
* [ ] Thiết lập exponential backoff.
* [ ] Tránh tạo nhiều periodic worker trùng nhau.
* [ ] Biết khi nào nên sử dụng `enqueueUniquePeriodicWork()`.
* [ ] Theo dõi trạng thái công việc bằng `WorkInfo`.
* [ ] Kiểm thử periodic work bằng `WorkManagerTestInitHelper`.
* [ ] Biết những trường hợp **không nên** dùng `PeriodicWorkRequest`.
* [ ] Tạo được một artifact nhỏ cho portfolio.

---

# 3. PeriodicWorkRequest nằm ở đâu?

Một kiến trúc Android đơn giản có thể hình dung như sau:

```text
┌──────────────────────────┐
│            UI            │
│ Compose / Activity       │
└─────────────┬────────────┘
              │
              ▼
┌──────────────────────────┐
│ ViewModel / Use Case     │
└─────────────┬────────────┘
              │ schedule
              ▼
┌──────────────────────────┐
│       WorkManager        │
│                          │
│ PeriodicWorkRequest      │
│ Constraints              │
│ Retry / Backoff          │
└─────────────┬────────────┘
              │
              ▼
┌──────────────────────────┐
│ CoroutineWorker / Worker │
└─────────────┬────────────┘
              │
        ┌─────┴─────┐
        ▼           ▼
┌────────────┐ ┌────────────┐
│ Repository │ │ Local DB   │
│ / API      │ │ Room       │
└──────┬─────┘ └────────────┘
       │
       ▼
┌────────────┐
│   Server   │
└────────────┘
```

`PeriodicWorkRequest` không trực tiếp xử lý UI.

Nó chịu trách nhiệm **yêu cầu WorkManager thực hiện một Worker theo chu kỳ**.

---

# 4. WorkManager là gì?

`WorkManager` là thư viện Android Jetpack dành cho các tác vụ background có tính **persistent** và **deferrable**.

Nghĩa là công việc:

* Có thể không cần chạy ngay lập tức.
* Có thể chờ điều kiện thích hợp.
* Có thể tiếp tục được hệ thống quản lý ngay cả khi Activity hoặc màn hình đã biến mất.

Android khuyến nghị WorkManager cho persistent background work. WorkManager chỉ thực thi công việc khi các `Constraints` đã được đáp ứng.

---

# 5. PeriodicWorkRequest là gì?

Cấu trúc cơ bản:

```kotlin
val request =
    PeriodicWorkRequestBuilder<SyncWorker>(
        6,
        TimeUnit.HOURS
    ).build()
```

Ý nghĩa:

```text
PeriodicWorkRequest
│
├── Worker cần chạy
│
├── Khoảng thời gian lặp
│
├── Constraints
│
├── Input Data
│
├── Backoff Policy
│
└── Tag
```

Ví dụ trên có nghĩa gần đúng:

> Hãy cho `SyncWorker` cơ hội chạy khoảng mỗi 6 giờ, khi hệ thống cho phép và các điều kiện cần thiết được đáp ứng.

Nó **không có nghĩa**:

```text
00:00
06:00
12:00
18:00
```

sẽ luôn chạy chính xác từng giây như vậy.

---

# 6. Giới hạn 15 phút

Một trong những quy tắc quan trọng nhất:

```text
PeriodicWorkRequest
       │
       └── repeatInterval >= 15 phút
```

Ví dụ hợp lệ:

```kotlin
PeriodicWorkRequestBuilder<MyWorker>(
    15,
    TimeUnit.MINUTES
)
```

Ví dụ không phù hợp:

```kotlin
PeriodicWorkRequestBuilder<MyWorker>(
    30,
    TimeUnit.SECONDS
)
```

WorkManager không được thiết kế làm scheduler chạy liên tục vài giây một lần.

Android đặt khoảng chu kỳ tối thiểu của periodic work là **15 phút**.

---

# 7. Tạo Worker

Với ứng dụng Kotlin hiện đại, `CoroutineWorker` thường thuận tiện cho network/database asynchronous work.

Ví dụ:

```kotlin
class SyncWorker(
    appContext: Context,
    workerParams: WorkerParameters
) : CoroutineWorker(appContext, workerParams) {

    override suspend fun doWork(): Result {

        return try {

            syncData()

            Result.success()

        } catch (e: IOException) {

            Result.retry()

        } catch (e: Exception) {

            Result.failure()
        }
    }

    private suspend fun syncData() {
        // Call API
        // Update Room
        // Refresh cache
    }
}
```

### Ý nghĩa

```text
doWork()
   │
   ├── Thành công
   │      └── Result.success()
   │
   ├── Lỗi tạm thời
   │      └── Result.retry()
   │
   └── Lỗi không thể phục hồi
          └── Result.failure()
```

Ví dụ lỗi tạm thời:

* Timeout.
* Server tạm unavailable.
* Mạng bị ngắt.
* HTTP 503.

Những lỗi này thường phù hợp với:

```kotlin
Result.retry()
```

---

# 8. Tạo PeriodicWorkRequest

Ví dụ đồng bộ dữ liệu mỗi 6 giờ:

```kotlin
val syncRequest =
    PeriodicWorkRequestBuilder<SyncWorker>(
        6,
        TimeUnit.HOURS
    )
        .build()
```

Sau đó enqueue:

```kotlin
WorkManager
    .getInstance(context)
    .enqueue(syncRequest)
```

Luồng:

```text
Application
    │
    ▼
Create PeriodicWorkRequest
    │
    ▼
WorkManager.enqueue()
    │
    ▼
       ENQUEUED
           │
           ▼
    Wait for scheduler
           │
           ▼
        RUNNING
           │
           ▼
     Worker executes
           │
           ▼
      Wait next period
           │
           └──────────► chạy lại
```

---

# 9. Vòng đời của PeriodicWorkRequest

Một điểm dễ nhầm là periodic work không hoạt động giống one-time work.

Vòng đời thông thường:

```text
ENQUEUED
   │
   ▼
RUNNING
   │
   ▼
ENQUEUED
   │
   ▼
 chờ chu kỳ tiếp
   │
   ▼
RUNNING
   │
   ▼
ENQUEUED
   │
  ...
```

Theo tài liệu Android:

```text
ENQUEUED → RUNNING → ENQUEUED
```

Periodic work tiếp tục lặp cho đến khi bị huỷ. Nó không kết thúc bình thường ở trạng thái `SUCCEEDED` hoặc `FAILED` giống một one-time request.

---

# 10. Constraints

Không phải lúc nào worker cũng nên chạy.

Ví dụ đồng bộ dữ liệu có thể yêu cầu:

```text
Có Internet
+
Pin không quá yếu
+
Thiết bị có storage phù hợp
```

Ta sử dụng:

```kotlin
val constraints =
    Constraints.Builder()
        .setRequiredNetworkType(
            NetworkType.CONNECTED
        )
        .setRequiresBatteryNotLow(true)
        .build()
```

Sau đó:

```kotlin
val syncRequest =
    PeriodicWorkRequestBuilder<SyncWorker>(
        6,
        TimeUnit.HOURS
    )
        .setConstraints(constraints)
        .build()
```

---

# 11. Luồng Constraints

```text
Đến chu kỳ Worker
        │
        ▼
Constraints đã đạt?
        │
     ┌──┴───┐
     │      │
    Có    Không
     │      │
     ▼      ▼
  RUNNING   WAIT
     │      │
     │      └─────────────┐
     │                    │
     │              Constraints đạt
     │                    │
     ▼                    ▼
  doWork() ◄──────────────┘
```

Điều này giúp giảm:

* Battery drain.
* Network usage.
* Việc gọi API không cần thiết.
* Lỗi do thiết bị offline.

WorkManager hỗ trợ declarative constraints như yêu cầu network, pin hoặc những điều kiện hệ thống khác.

---

# 12. Ví dụ chỉ sync khi có Internet

```kotlin
val constraints =
    Constraints.Builder()
        .setRequiredNetworkType(
            NetworkType.CONNECTED
        )
        .build()

val request =
    PeriodicWorkRequestBuilder<SyncWorker>(
        6,
        TimeUnit.HOURS
    )
        .setConstraints(constraints)
        .build()
```

Nếu sau 6 giờ thiết bị đang offline:

```text
6 giờ đạt
   │
   ▼
Network available?
   │
   ├── No
   │    ↓
   │   WAIT
   │
   └── Yes
        ↓
      RUN
```

WorkManager không bỏ worker chỉ vì thời điểm lý tưởng đã qua.

Nó có thể chờ đến lúc constraints phù hợp.

---

# 13. Retry

Giả sử worker gọi server:

```text
Worker
  │
  ▼
API request
  │
  ├── 200
  │    ↓
  │  success
  │
  └── timeout
       ↓
     retry
```

Ví dụ:

```kotlin
override suspend fun doWork(): Result {

    return try {

        repository.sync()

        Result.success()

    } catch (e: IOException) {

        Result.retry()
    }
}
```

---

# 14. Backoff Policy

Nếu server đang lỗi, không nên:

```text
retry
retry
retry
retry
retry
```

liên tục.

Ta có thể sử dụng **backoff**.

Ví dụ:

```kotlin
val request =
    PeriodicWorkRequestBuilder<SyncWorker>(
        6,
        TimeUnit.HOURS
    )
        .setBackoffCriteria(
            BackoffPolicy.EXPONENTIAL,
            30,
            TimeUnit.SECONDS
        )
        .build()
```

Ý tưởng exponential backoff:

```text
Retry 1
   ↓
wait

Retry 2
   ↓
wait lâu hơn

Retry 3
   ↓
wait lâu hơn nữa
```

Periodic work vẫn áp dụng backoff khi worker yêu cầu retry.

---

# 15. Tại sao không nên enqueue nhiều lần?

Giả sử mỗi lần app mở, code này được gọi:

```kotlin
WorkManager
    .getInstance(context)
    .enqueue(syncRequest)
```

Người dùng mở app 10 lần.

Có nguy cơ tạo:

```text
SyncWorker #1
SyncWorker #2
SyncWorker #3
SyncWorker #4
...
SyncWorker #10
```

Sau đó cùng một API có thể được gọi nhiều lần không cần thiết.

---

# 16. Unique Periodic Work

Production code thường nên sử dụng:

```kotlin
enqueueUniquePeriodicWork()
```

Ví dụ:

```kotlin
WorkManager
    .getInstance(context)
    .enqueueUniquePeriodicWork(
        "periodic_sync",
        ExistingPeriodicWorkPolicy.KEEP,
        syncRequest
    )
```

Ý nghĩa:

```text
Tên duy nhất: periodic_sync
          │
          ▼
Worker đã tồn tại?
      ┌───┴───┐
      │       │
     Có      Không
      │       │
      ▼       ▼
    KEEP    Create
```

---

# 17. KEEP và UPDATE

Hai policy thường đáng chú ý:

## `KEEP`

```kotlin
ExistingPeriodicWorkPolicy.KEEP
```

Nếu work cùng tên đã tồn tại:

```text
Giữ worker cũ
Không tạo worker mới
```

Phù hợp khi cấu hình hiện tại không cần thay đổi.

---

## `UPDATE`

```kotlin
ExistingPeriodicWorkPolicy.UPDATE
```

Cho phép cập nhật periodic work hiện tại với cấu hình mới.

Phù hợp khi:

* Thay đổi constraints.
* Thay đổi input.
* Thay đổi lịch periodic.
* Phiên bản app mới cần cấu hình worker mới.

---

# 18. Ví dụ hoàn chỉnh

```kotlin
object SyncScheduler {

    private const val WORK_NAME = "content_periodic_sync"

    fun schedule(context: Context) {

        val constraints =
            Constraints.Builder()
                .setRequiredNetworkType(
                    NetworkType.CONNECTED
                )
                .setRequiresBatteryNotLow(true)
                .build()

        val request =
            PeriodicWorkRequestBuilder<SyncWorker>(
                6,
                TimeUnit.HOURS
            )
                .setConstraints(constraints)
                .setBackoffCriteria(
                    BackoffPolicy.EXPONENTIAL,
                    30,
                    TimeUnit.SECONDS
                )
                .addTag("sync")
                .build()

        WorkManager
            .getInstance(context)
            .enqueueUniquePeriodicWork(
                WORK_NAME,
                ExistingPeriodicWorkPolicy.KEEP,
                request
            )
    }
}
```

Luồng tổng thể:

```text
App starts
    │
    ▼
SyncScheduler.schedule()
    │
    ▼
Is "content_periodic_sync" registered?
    │
 ┌──┴────┐
 │       │
Yes      No
 │       │
KEEP     Create
 │       │
 └───┬───┘
     ▼
WorkManager
     │
     ▼
Wait for period
     │
     ▼
Check Constraints
     │
 ┌───┴────┐
 │        │
Fail     Pass
 │        │
Wait      ▼
 │     SyncWorker
 │        │
 │    ┌───┴─────────┐
 │    │             │
 │ success         retry
 │    │             │
 │    ▼             ▼
 │ next period    backoff
 │                  │
 └──────────────────┘
```

---

# 19. Không phụ thuộc Activity lifecycle

Một lợi ích lớn của WorkManager là worker không nên gắn trực tiếp với lifecycle của:

* Activity.
* Fragment.
* Composable.
* ViewModel.

Ví dụ:

```text
Activity
   │
   │ schedule()
   ▼
WorkManager
   │
   ├──────── Activity destroyed
   │
   ├──────── User changes screen
   │
   └──────── Worker vẫn do hệ thống quản lý
```

Do đó, đừng đặt logic periodic background sync trực tiếp vào:

```kotlin
LaunchedEffect(Unit)
```

và biến nó thành vòng lặp vô hạn như:

```kotlin
while (true) {

    sync()

    delay(6.hours)
}
```

Đây không phải giải pháp persistent background work đáng tin cậy.

---

# 20. PeriodicWorkRequest vs Coroutine

Không nên nhầm:

```text
Coroutine
```

với:

```text
WorkManager
```

## Coroutine

Phù hợp với:

```text
User mở màn hình
      ↓
ViewModel
      ↓
Coroutine
      ↓
API
      ↓
UI state
```

Lifecycle thường gắn với app process hoặc scope.

---

## WorkManager

Phù hợp với:

```text
App không cần đang mở
        ↓
WorkManager
        ↓
Scheduler
        ↓
Worker
        ↓
Sync data
```

---

# 21. PeriodicWorkRequest vs OneTimeWorkRequest

| Tiêu chí                     | `OneTimeWorkRequest` | `PeriodicWorkRequest` |
| ---------------------------- | -------------------- | --------------------- |
| Chạy một lần                 | ✅                    | ❌                     |
| Chạy lặp lại                 | ❌                    | ✅                     |
| Retry                        | ✅                    | ✅                     |
| Constraints                  | ✅                    | ✅                     |
| Chaining                     | ✅                    | ❌                     |
| Lịch chính xác tuyệt đối     | ❌                    | ❌                     |
| Background persistent        | ✅                    | ✅                     |
| Khoảng lặp tối thiểu 15 phút | Không áp dụng        | ✅                     |

Periodic work **không thể tham gia work chain/graph** như `OneTimeWorkRequest`.

---

# 22. Khi nào nên dùng PeriodicWorkRequest?

### Phù hợp

```text
PeriodicWorkRequest
├── Đồng bộ cache
├── Đồng bộ dữ liệu server
├── Upload analytics
├── Xoá cache cũ
├── Database maintenance
├── Refresh content
└── Periodic health check
```

Ví dụ:

```text
News App
   │
   └── Refresh article cache

Weather App
   │
   └── Refresh saved cities

E-commerce App
   │
   └── Sync pending data

Fitness App
   │
   └── Upload locally stored records
```

---

# 23. Khi nào không nên dùng?

## 23.1 Countdown timer

Ví dụ:

```text
10:00
09:59
09:58
...
```

Không dùng periodic worker.

---

## 23.2 Animation

Không phù hợp.

---

## 23.3 Refresh mỗi vài giây

Không phù hợp vì periodic interval tối thiểu là 15 phút.

---

## 23.4 Exact alarm

Nếu yêu cầu:

> Chính xác 07:00 sáng phải kích hoạt.

`PeriodicWorkRequest` không phải scheduler thời gian chính xác.

Android cũng lưu ý rằng periodic execution có thể bị trì hoãn bởi Doze, battery optimization và scheduler của hệ thống.

---

# 24. Một sai lầm kiến trúc phổ biến

Không nên:

```kotlin
while (true) {

    repository.sync()

    delay(15 * 60 * 1000)
}
```

trong ViewModel.

Vì:

```text
ViewModel destroyed
       │
       ▼
Coroutine cancelled
       │
       ▼
Periodic sync mất
```

Thay vào đó:

```text
Persistent background requirement
             │
             ▼
         WorkManager
             │
             ▼
    PeriodicWorkRequest
```

---

# 25. UI nên làm gì?

UI không nên biết quá nhiều về scheduler.

Ví dụ architecture:

```text
Compose UI
    │
    ▼
ViewModel
    │
    ▼
SyncScheduler
    │
    ▼
WorkManager
    │
    ▼
SyncWorker
    │
    ▼
Repository
```

UI có thể chỉ hiển thị:

```text
Last synced: 10:42
```

Thay vì trực tiếp điều khiển toàn bộ worker.

---

# 26. State của ứng dụng

Một thiết kế tốt thường lưu dữ liệu sync xuống local database.

Ví dụ:

```text
Periodic Worker
      │
      ▼
Remote API
      │
      ▼
Repository
      │
      ▼
Room Database
      │
      ▼
Flow
      │
      ▼
ViewModel
      │
      ▼
Compose UI
```

Điều này tạo mô hình:

> **Background worker cập nhật database → UI quan sát database.**

Thay vì:

> Background worker cố cập nhật trực tiếp TextView hoặc Compose state.

---

# 27. Logging và debugging

Trong worker:

```kotlin
override suspend fun doWork(): Result {

    Log.d(
        "SyncWorker",
        "Worker started: $id"
    )

    return try {

        repository.sync()

        Log.d(
            "SyncWorker",
            "Sync success"
        )

        Result.success()

    } catch (e: IOException) {

        Log.e(
            "SyncWorker",
            "Temporary failure",
            e
        )

        Result.retry()

    } catch (e: Exception) {

        Log.e(
            "SyncWorker",
            "Permanent failure",
            e
        )

        Result.failure()
    }
}
```

Nên log:

```text
Worker ID
Worker start
Worker end
Attempt number
Network result
Retry
Cancellation
Sync duration
Records updated
```

Có thể đọc:

```kotlin
runAttemptCount
```

trong Worker để biết worker đang retry lần thứ bao nhiêu.

---

# 28. Theo dõi WorkInfo

Có thể truy vấn:

```kotlin
WorkManager
    .getInstance(context)
    .getWorkInfosForUniqueWorkFlow(
        "content_periodic_sync"
    )
```

Sau đó observe:

```kotlin
workManager
    .getWorkInfosForUniqueWorkFlow(
        "content_periodic_sync"
    )
    .collect { workInfos ->

        val info = workInfos.firstOrNull()

        Log.d(
            "WorkState",
            "State = ${info?.state}"
        )
    }
```

Điều này rất hữu ích khi debug:

```text
ENQUEUED
RUNNING
BLOCKED
CANCELLED
```

---

# 29. Cancellation

Periodic worker sẽ tiếp tục được lập lịch cho đến khi bị huỷ.

Ví dụ:

```kotlin
WorkManager
    .getInstance(context)
    .cancelUniqueWork(
        "content_periodic_sync"
    )
```

Hoặc bằng tag:

```kotlin
WorkManager
    .getInstance(context)
    .cancelAllWorkByTag("sync")
```

---

# 30. Ví dụ thực tế — News Sync

Giả sử xây ứng dụng đọc tin.

Yêu cầu:

> Nếu có mạng, vài giờ một lần tải tin mới về Room để người dùng có thể mở app và thấy cache gần đây.

Kiến trúc:

```text
PeriodicWorkRequest
        │
        ▼
Constraints
Network = CONNECTED
        │
        ▼
NewsSyncWorker
        │
        ▼
NewsRepository
        │
    ┌───┴────┐
    ▼        ▼
Remote API  Room
              │
              ▼
         Flow<List<News>>
              │
              ▼
          ViewModel
              │
              ▼
          Compose UI
```

Đây là một use case phù hợp cho portfolio.

---

# 31. Ví dụ Worker cho Portfolio

```kotlin
class NewsSyncWorker(
    appContext: Context,
    params: WorkerParameters
) : CoroutineWorker(
    appContext,
    params
) {

    override suspend fun doWork(): Result {

        val app =
            applicationContext as NewsApplication

        val repository =
            app.container.newsRepository

        return try {

            repository.syncNews()

            Result.success()

        } catch (e: IOException) {

            Result.retry()

        } catch (e: HttpException) {

            if (e.code() >= 500) {
                Result.retry()
            } else {
                Result.failure()
            }
        }
    }
}
```

---

# 32. Scheduler

```kotlin
class NewsSyncScheduler(
    private val context: Context
) {

    fun schedule() {

        val constraints =
            Constraints.Builder()
                .setRequiredNetworkType(
                    NetworkType.CONNECTED
                )
                .setRequiresBatteryNotLow(true)
                .build()

        val request =
            PeriodicWorkRequestBuilder<NewsSyncWorker>(
                6,
                TimeUnit.HOURS
            )
                .setConstraints(constraints)
                .setBackoffCriteria(
                    BackoffPolicy.EXPONENTIAL,
                    30,
                    TimeUnit.SECONDS
                )
                .addTag("news-sync")
                .build()

        WorkManager
            .getInstance(context)
            .enqueueUniquePeriodicWork(
                "news-sync",
                ExistingPeriodicWorkPolicy.KEEP,
                request
            )
    }
}
```

---

# 33. Dependency

Với WorkManager stable hiện tại trong tài liệu Android tháng 8/2026:

```kotlin
dependencies {
    implementation(
        "androidx.work:work-runtime:2.11.2"
    )
}
```

Tài liệu release Android Developers hiện liệt kê WorkManager **2.11.2** là stable release.

Khi làm dự án thực tế, vẫn nên kiểm tra version mới nhất trước khi nâng dependency.

---

# 34. Testing PeriodicWorkRequest

Không nên viết test rồi thật sự chờ:

```text
15 phút
```

WorkManager có thư viện testing cho phép giả lập việc chu kỳ đã đến.

Dependency:

```kotlin
androidTestImplementation(
    "androidx.work:work-testing:2.11.2"
)
```

Ví dụ:

```kotlin
val request =
    PeriodicWorkRequestBuilder<TestWorker>(
        15,
        TimeUnit.MINUTES
    ).build()

val workManager =
    WorkManager.getInstance(context)

workManager
    .enqueue(request)
    .result
    .get()

val testDriver =
    WorkManagerTestInitHelper.getTestDriver()

testDriver?.setPeriodDelayMet(
    request.id
)
```

`TestDriver.setPeriodDelayMet()` được Android cung cấp để mô phỏng việc khoảng thời gian của một `PeriodicWorkRequest` đã hoàn thành.

---

# 35. Những gì nên test

## Test Worker logic

```text
API success
    ↓
Result.success()
```

```text
Network error
    ↓
Result.retry()
```

```text
Invalid request
    ↓
Result.failure()
```

---

## Test Constraints

```text
Offline
  ↓
Worker không chạy

Online
  ↓
Worker được phép chạy
```

---

## Test periodic scheduling

```text
Period chưa đạt
      ↓
Không trigger

setPeriodDelayMet()
      ↓
Worker có thể chạy
```

---

## Test duplicate scheduling

Gọi:

```kotlin
schedule()
schedule()
schedule()
```

rồi xác minh chỉ tồn tại một unique periodic work thích hợp.

---

# 36. Các lỗi thường gặp

## Lỗi 1 — Nghĩ rằng periodic chạy chính xác

Sai:

```text
6 giờ = chạy đúng 06:00:00
```

Đúng hơn:

```text
Khoảng chu kỳ đạt
       +
Constraints đạt
       +
OS scheduler cho phép
       ↓
Worker chạy
```

---

## Lỗi 2 — Dùng cho task vài giây một lần

```text
PeriodicWorkRequest
      ≠
Real-time scheduler
```

---

## Lỗi 3 — Enqueue lại mỗi Activity start

Có thể gây duplicate work.

Dùng:

```kotlin
enqueueUniquePeriodicWork()
```

---

## Lỗi 4 — Không đặt network constraint

Worker gọi API dù thiết bị offline.

---

## Lỗi 5 — Retry mọi Exception

Không phải lỗi nào cũng có thể retry.

Ví dụ:

```text
500 → có thể retry

timeout → có thể retry

401 → thường phải refresh/auth xử lý

400 → request có thể đang sai

serialization schema sai
    → retry vô hạn thường không giải quyết được
```

---

## Lỗi 6 — Worker cập nhật UI trực tiếp

Sai kiến trúc:

```text
Worker → Compose
```

Nên:

```text
Worker
   ↓
Repository
   ↓
Room
   ↓
Flow
   ↓
ViewModel
   ↓
Compose
```

---

# 37. Performance

Một periodic worker kém thiết kế có thể:

```text
Wake device
   ↓
Start network
   ↓
Download quá nhiều
   ↓
Parse dữ liệu
   ↓
Write database
   ↓
Battery + bandwidth tăng
```

Vì vậy cần cân nhắc:

* Chu kỳ có thực sự cần 15 phút không?
* 1 giờ có đủ không?
* 6 giờ?
* 24 giờ?
* Có thể chỉ sync khi app mở không?
* Có cần `UNMETERED` network?
* Có thể sync delta thay vì full dataset không?

---

# 38. Production mindset

Trước khi tạo một periodic worker, hãy trả lời:

### User impact

```text
Worker này đem lại lợi ích gì cho user?
```

### Frequency

```text
Có thực sự cần chạy thường xuyên vậy không?
```

### Network

```text
Mỗi lần chạy tải bao nhiêu dữ liệu?
```

### Battery

```text
Worker có đáng để đánh thức thiết bị không?
```

### Retry

```text
Lỗi nào transient?
Lỗi nào permanent?
```

### Idempotency

Nếu worker chạy lại:

```text
sync()
sync()
```

dữ liệu có bị duplicate hay corruption không?

Một worker production tốt nên **idempotent** càng nhiều càng tốt.

---

# 39. Sơ đồ tư duy

```text
PeriodicWorkRequest
│
├── WorkManager
│   └── Persistent background work
│
├── Scheduling
│   ├── Repeating
│   ├── Minimum 15 minutes
│   └── Không exact
│
├── Worker
│   ├── Worker
│   ├── CoroutineWorker
│   └── RxWorker
│
├── Constraints
│   ├── Network
│   ├── Battery
│   ├── Charging
│   └── Storage
│
├── Result
│   ├── success
│   ├── retry
│   └── failure
│
├── Retry
│   └── Backoff
│
├── Unique Work
│   ├── KEEP
│   └── UPDATE
│
├── Lifecycle
│   └── ENQUEUED
│       ↓
│      RUNNING
│       ↓
│      ENQUEUED
│
└── Testing
    ├── WorkManagerTestInitHelper
    ├── TestDriver
    ├── setPeriodDelayMet()
    └── setAllConstraintsMet()
```

---

# 40. Thực hành

## Bài thực hành: Background News Sync

Xây dựng:

```text
News App
```

với yêu cầu:

1. Tạo `NewsSyncWorker`.
2. Sử dụng `CoroutineWorker`.
3. Đồng bộ dữ liệu từ API.
4. Lưu dữ liệu xuống Room.
5. Tạo periodic work mỗi 6 giờ.
6. Chỉ chạy khi có Internet.
7. Không chạy nếu pin yếu.
8. Retry khi có `IOException`.
9. Sử dụng exponential backoff.
10. Sử dụng unique periodic work.
11. Hiển thị thời gian sync gần nhất.
12. Viết ít nhất một integration test.

---

# 41. Artifact cho portfolio

Cấu trúc gợi ý:

```text
periodic-sync-demo/
│
├── worker/
│   └── NewsSyncWorker.kt
│
├── scheduler/
│   └── NewsSyncScheduler.kt
│
├── data/
│   ├── NewsRepository.kt
│   ├── NewsApi.kt
│   └── NewsDao.kt
│
├── ui/
│   └── SyncStatusScreen.kt
│
├── test/
│   └── NewsSyncWorkerTest.kt
│
└── README.md
```

README nên có:

```text
# Periodic Background Sync

## Problem

## Architecture

## Why WorkManager?

## PeriodicWorkRequest

## Constraints

## Retry Strategy

## Duplicate Work Prevention

## Testing

## Screenshots

## Lessons Learned
```

---

# 42. Bài tập

## Bài 1 — Cơ bản

Tạo worker:

```text
CacheCleanupWorker
```

chạy định kỳ và ghi log:

```text
Cache cleanup started
Cache cleanup completed
```

---

## Bài 2 — Network Constraint

Tạo:

```text
WeatherSyncWorker
```

chỉ chạy khi có Internet.

---

## Bài 3 — Retry

Mô phỏng:

```text
IOException
```

và trả về:

```kotlin
Result.retry()
```

Giải thích vì sao lỗi mạng tạm thời phù hợp với retry.

---

## Bài 4 — Unique work

Gọi scheduler ba lần:

```kotlin
schedule()
schedule()
schedule()
```

Sau đó kiểm tra vì sao không nên tạo ba periodic workers khác nhau.

---

## Bài 5 — Architecture

Giải thích luồng:

```text
PeriodicWorkRequest
        ↓
Worker
        ↓
Repository
        ↓
Remote API
        ↓
Room
        ↓
Flow
        ↓
ViewModel
        ↓
Compose
```

---

# 43. Câu hỏi tự kiểm tra

### Câu 1

`PeriodicWorkRequest` dùng để làm gì?

**Trả lời:** Lập lịch background work cần chạy lặp lại và có thể trì hoãn.

---

### Câu 2

Khoảng periodic tối thiểu là bao nhiêu?

**Trả lời:** 15 phút.

---

### Câu 3

Có đảm bảo chạy chính xác mỗi 15 phút không?

**Không.**

Thời gian thực tế phụ thuộc scheduler, Doze, battery optimization và constraints.

---

### Câu 4

Nếu cần Internet thì làm gì?

Sử dụng:

```kotlin
Constraints.Builder()
    .setRequiredNetworkType(
        NetworkType.CONNECTED
    )
```

---

### Câu 5

Lỗi mạng tạm thời nên trả gì?

```kotlin
Result.retry()
```

---

### Câu 6

Tại sao dùng unique periodic work?

Để tránh tạo nhiều periodic workers thực hiện cùng một nhiệm vụ.

---

### Câu 7

PeriodicWorkRequest có chain giống OneTimeWorkRequest không?

**Không.** Periodic work không thể nằm trong work chain/graph.

---

# 44. Checklist hoàn thành

## Kiến thức

* [ ] Giải thích được `PeriodicWorkRequest`.
* [ ] Hiểu WorkManager.
* [ ] Biết giới hạn tối thiểu 15 phút.
* [ ] Hiểu periodic work không phải exact scheduler.
* [ ] Phân biệt periodic và one-time work.

## Coding

* [ ] Tạo được `CoroutineWorker`.
* [ ] Tạo được `PeriodicWorkRequest`.
* [ ] Thiết lập `Constraints`.
* [ ] Sử dụng `Result.retry()`.
* [ ] Thiết lập backoff.
* [ ] Sử dụng `enqueueUniquePeriodicWork()`.

## Architecture

* [ ] Worker không phụ thuộc Activity.
* [ ] Worker không cập nhật UI trực tiếp.
* [ ] Business/data logic nằm ở Repository.
* [ ] Background sync ghi vào local database khi phù hợp.
* [ ] UI quan sát dữ liệu qua Flow/state.

## Testing

* [ ] Test success.
* [ ] Test retry.
* [ ] Test constraints.
* [ ] Test periodic delay.
* [ ] Test duplicate scheduling.
* [ ] Biết sử dụng `TestDriver.setPeriodDelayMet()`.

## Production

* [ ] Không chạy quá thường xuyên.
* [ ] Có chiến lược retry.
* [ ] Worker có tính idempotent.
* [ ] Có logging.
* [ ] Có monitoring/debug strategy.
* [ ] Đánh giá battery/network impact.

## Portfolio

* [ ] Có source code.
* [ ] Có architecture diagram.
* [ ] Có test.
* [ ] Có screenshot/log minh họa.
* [ ] Có README giải thích quyết định kỹ thuật.

---

# 45. Ghi nhớ nhanh

```text
PeriodicWorkRequest
        =
Background work
      +
Repeating
      +
Persistent
      +
Constraints
      +
Retry / Backoff
```

Nhưng:

```text
PeriodicWorkRequest
        ≠
Exact Timer
```

và:

```text
PeriodicWorkRequest
        ≠
while(true) + delay()
```

Mẫu tư duy production:

```text
Need repeated background work?
          │
          ▼
Does it need exact timing?
      ┌───┴────┐
     Yes      No
      │        │
      │        ▼
      │   Can it be deferred?
      │        │
      │       Yes
      │        │
      │        ▼
      │ PeriodicWorkRequest
      │        │
      │        ▼
      │ Constraints
      │        │
      │        ▼
      │ Unique Work
      │        │
      │        ▼
      │ Retry + Backoff
      │        │
      │        ▼
      │ Testing
      │
      └──► Chọn scheduling API phù hợp hơn
```

> **Kết luận:** `PeriodicWorkRequest` phù hợp cho các tác vụ background định kỳ có thể trì hoãn như sync, refresh cache và maintenance. Khi đưa vào production, phần quan trọng không chỉ là tạo request mà còn phải thiết kế đúng **constraints, retry, backoff, uniqueness, lifecycle, idempotency và testing**.

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
