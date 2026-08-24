# 005 — Crashlytics

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 09 — Common Services      |
| **Nhóm nội dung**       | Firebase                         |
| **Nguồn roadmap**       | Common Services / Firebase       |
| **Loại bài**            | Service                          |
| **Thứ tự trong module** | 005                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

**Firebase Crashlytics** là dịch vụ theo dõi crash và lỗi runtime dành cho ứng dụng mobile.

Crashlytics giúp developer trả lời các câu hỏi như:

* App đang crash ở phiên bản nào?
* Crash xảy ra trên thiết bị hoặc Android version nào?
* Stack trace dẫn tới lỗi là gì?
* Bao nhiêu người dùng bị ảnh hưởng?
* Crash bắt đầu xuất hiện sau release nào?
* Một lỗi có xảy ra thường xuyên hay chỉ là trường hợp hiếm?
* Lỗi có nằm trong UI, network, database, coroutine hay background task?

Flow tổng quát:

```text
Android App
    │
    │ Crash / Exception
    ▼
Crashlytics SDK
    │
    │ gửi crash report
    ▼
Firebase Crashlytics
    │
    ▼
Dashboard
    │
    ├── Stack trace
    ├── Device
    ├── OS version
    ├── App version
    ├── Logs
    └── Custom keys
```

Crashlytics không làm ứng dụng hết lỗi.

Nó giúp developer:

> **phát hiện → phân tích → ưu tiên → sửa → theo dõi lỗi sau release.**

---

# 2. Mục tiêu học tập

Sau bài học, bạn có thể:

* [ ] Giải thích được Firebase Crashlytics bằng ngôn ngữ của mình.
* [ ] Hiểu crash report gồm những thông tin gì.
* [ ] Phân biệt fatal và non-fatal error.
* [ ] Ghi exception thủ công bằng `recordException()`.
* [ ] Gắn custom key để bổ sung context.
* [ ] Ghi breadcrumb/log hỗ trợ debug.
* [ ] Hiểu ảnh hưởng của obfuscation tới stack trace.
* [ ] Hiểu vai trò của mapping file trong build release.
* [ ] Không gửi dữ liệu nhạy cảm vào crash report.
* [ ] Biết cách ưu tiên crash dựa trên mức độ ảnh hưởng.
* [ ] Tích hợp Crashlytics vào release workflow.
* [ ] Tạo được artifact monitoring nhỏ cho portfolio.

---

# 3. Crashlytics là gì?

Crashlytics là một **crash reporting service**.

Khi ứng dụng gặp lỗi nghiêm trọng:

```text
App
 │
 ▼
Unhandled Exception
 │
 ▼
Process crash
 │
 ▼
Crashlytics SDK ghi report
 │
 ▼
Firebase
 │
 ▼
Developer xem dashboard
```

Ví dụ:

```kotlin
fun getUserName(user: User?): String {
    return user!!.name
}
```

Nếu `user == null`:

```text
NullPointerException
        │
        ▼
App crash
        │
        ▼
Crashlytics
        │
        ▼
Stack trace
```

Developer có thể tìm được vị trí lỗi và điều kiện liên quan.

---

# 4. Crash report chứa gì?

Một crash report thường có các nhóm thông tin:

```text
Crash Report
    │
    ├── Exception
    │
    ├── Stack trace
    │
    ├── Thread
    │
    ├── App version
    │
    ├── Device
    │
    ├── Android version
    │
    ├── Custom keys
    │
    └── Logs
```

Ví dụ stack trace:

```text
Fatal Exception: java.lang.NullPointerException
    at UserViewModel.loadUser(UserViewModel.kt:48)
    at ProfileScreen(...)
```

Điểm quan trọng nhất thường là:

```text
Exception type
      +
Stack trace
      +
Context
```

---

# 5. Crashlytics nằm ở đâu trong kiến trúc Android?

Crashlytics là một phần của **observability / monitoring layer**.

```text
┌───────────────────────────────┐
│              UI               │
├───────────────────────────────┤
│          ViewModel            │
├───────────────────────────────┤
│          Use Cases            │
├───────────────────────────────┤
│         Repository            │
├───────────────────────────────┤
│ API / Room / Firebase / Files │
└───────────────────────────────┘
               │
               │ error
               ▼
┌───────────────────────────────┐
│      Monitoring Layer         │
│                               │
│ Crashlytics / Logging         │
└───────────────────────────────┘
```

Crashlytics không nên trở thành dependency trực tiếp của mọi class.

Thay vì:

```text
ViewModel
Repository
UseCase
Worker
Activity
        │
        ▼
FirebaseCrashlytics
```

nên cân nhắc:

```text
Application code
      │
      ▼
ErrorReporter
      │
      ▼
CrashlyticsErrorReporter
      │
      ▼
Firebase Crashlytics
```

---

# 6. Tạo abstraction cho Crashlytics

Ví dụ:

```kotlin
interface ErrorReporter {

    fun recordException(
        throwable: Throwable
    )

    fun log(message: String)

    fun setKey(
        key: String,
        value: String
    )
}
```

Implementation:

```kotlin
class CrashlyticsErrorReporter :
    ErrorReporter {

    private val crashlytics =
        FirebaseCrashlytics.getInstance()

    override fun recordException(
        throwable: Throwable
    ) {
        crashlytics.recordException(throwable)
    }

    override fun log(message: String) {
        crashlytics.log(message)
    }

    override fun setKey(
        key: String,
        value: String
    ) {
        crashlytics.setCustomKey(key, value)
    }
}
```

Kiến trúc:

```text
Domain / Data
     │
     ▼
ErrorReporter
     │
     ▼
CrashlyticsErrorReporter
     │
     ▼
Firebase SDK
```

Lợi ích:

* Test dễ hơn.
* Không coupling mạnh với Firebase.
* Có thể thay Crashlytics bằng dịch vụ khác.
* Có thể disable trong test/debug.

---

# 7. Fatal Crash

**Fatal crash** là lỗi làm process của app bị dừng.

Ví dụ:

```kotlin
throw RuntimeException(
    "Test Crashlytics"
)
```

Flow:

```text
Unhandled Exception
        │
        ▼
Application process dies
        │
        ▼
Fatal crash report
        │
        ▼
Crashlytics Dashboard
```

Ví dụ lỗi:

```text
NullPointerException
IllegalStateException
IndexOutOfBoundsException
ClassCastException
```

Tuy nhiên không phải mọi fatal crash đều là lỗi code đơn giản.

Nó có thể liên quan đến:

* Lifecycle.
* Concurrency.
* Native code.
* Out of memory.
* Thiết bị đặc thù.
* Android version.
* Third-party SDK.

---

# 8. Non-Fatal Error

Có những exception không làm ứng dụng crash nhưng vẫn đáng theo dõi.

Ví dụ:

```kotlin
try {
    repository.sync()
} catch (e: Exception) {

    FirebaseCrashlytics
        .getInstance()
        .recordException(e)
}
```

Đây là **non-fatal error**.

Flow:

```text
Exception
   │
   ▼
catch
   │
   ├── App tiếp tục chạy
   │
   └── recordException()
             │
             ▼
        Crashlytics
```

---

# 9. Không record mọi exception

Sai:

```kotlin
try {
    ...
} catch (e: Exception) {
    crashlytics.recordException(e)
}
```

ở hàng trăm vị trí.

Nếu log mọi lỗi nhỏ:

```text
Crashlytics Dashboard
        │
        ▼
Hàng nghìn issue
        │
        ▼
Signal / Noise thấp
```

Nên record các exception:

* Bất thường.
* Có tác động tới user.
* Không được xử lý theo flow bình thường.
* Có giá trị chẩn đoán.

Ví dụ:

```text
HTTP 404 expected
        ↓
Không nhất thiết record

Database corruption
        ↓
Nên record

Unexpected JSON structure
        ↓
Có thể record

User nhập sai mật khẩu
        ↓
Không record như crash
```

---

# 10. Expected Error và Unexpected Error

Phân biệt:

```text
Error
 │
 ├── Expected
 │
 │     ├── No internet
 │
 │     ├── Invalid password
 │
 │     └── Server 404 hợp lệ
 │
 │
 └── Unexpected
       ├── Parser crash
       ├── Impossible state
       ├── DB corruption
       └── Null state không mong đợi
```

Expected error thường nên được xử lý trong business logic.

Unexpected error phù hợp hơn với Crashlytics.

---

# 11. Ghi log bằng Crashlytics

Crashlytics hỗ trợ ghi log để bổ sung context.

Ví dụ:

```kotlin
FirebaseCrashlytics
    .getInstance()
    .log("Starting profile sync")
```

Sau đó:

```text
Starting profile sync

Fetching user

Writing database

Crash
```

Khi xem report, developer có thể hiểu flow trước crash.

---

# 12. Log có cấu trúc

Không nên ghi:

```text
here
test
abc
failed
```

Nên ghi:

```text
profile_sync_started

profile_api_success

profile_db_write_started

profile_db_write_failed
```

Hoặc:

```kotlin
errorReporter.log(
    "profile_sync_started"
)
```

Log tốt giúp dựng lại timeline:

```text
User mở Profile
       │
       ▼
Load local data
       │
       ▼
Refresh API
       │
       ▼
Parse response
       │
       ▼
Crash
```

---

# 13. Custom Keys

Crashlytics hỗ trợ custom keys để bổ sung context.

Ví dụ:

```kotlin
FirebaseCrashlytics
    .getInstance()
    .setCustomKey(
        "screen",
        "checkout"
    )
```

Hoặc:

```kotlin
setCustomKey(
    "payment_provider",
    "provider_a"
)
```

Report:

```text
screen = checkout

payment_provider = provider_a

cart_size = 4
```

Điều này giúp xác định crash chỉ xuất hiện trong một điều kiện nhất định.

---

# 14. Custom Keys nên chứa gì?

Ví dụ hợp lý:

```text
screen
feature
flow
app_mode
sync_type
cache_state
experiment_variant
```

Ví dụ:

```text
screen = product_detail

flow = add_to_cart

cache_state = stale
```

---

# 15. Không đưa dữ liệu nhạy cảm vào Custom Keys

Không nên:

```text
password
access_token
credit_card
full_address
private_message
```

Ví dụ sai:

```kotlin
crashlytics.setCustomKey(
    "access_token",
    token
)
```

Đúng hơn:

```kotlin
crashlytics.setCustomKey(
    "auth_state",
    "authenticated"
)
```

Nguyên tắc:

> **Log trạng thái cần thiết để debug, không log bí mật của người dùng.**

---

# 16. User Identifier

Crashlytics có thể gắn một identifier cho user.

Mục đích:

```text
Crash
 │
 ▼
Có xảy ra liên tục với cùng user?
```

Nhưng nên dùng:

```text
Internal anonymous ID
```

thay vì thông tin nhạy cảm.

Ví dụ:

```text
user_28f7c
```

thay vì:

```text
john@example.com
```

Nếu không thực sự cần định danh user, có thể không sử dụng.

---

# 17. Lifecycle và Crashlytics

Crashlytics có thể ghi lỗi ở nhiều tầng:

```text
Activity
Fragment
Compose
ViewModel
Coroutine
Worker
Service
Repository
```

Crash có thể xảy ra khi:

```text
Activity visible
Activity background
Worker running
Service running
App startup
```

Do đó đừng suy nghĩ Crashlytics chỉ như một công cụ UI.

---

# 18. Crash khi rotate

Ví dụ:

```text
Activity
   │
   ▼
API request
   │
   ▼
Rotate
   │
   ▼
Activity destroyed
   │
   ▼
Callback dùng Activity cũ
   │
   ▼
Crash
```

Crashlytics có thể giúp developer phát hiện:

```text
IllegalStateException
```

hoặc:

```text
Fragment not attached
```

Sau đó cần sửa nguyên nhân lifecycle thay vì chỉ bắt exception.

---

# 19. Crash trong Coroutine

Ví dụ:

```kotlin
viewModelScope.launch {

    repository.loadData()

}
```

Nếu exception không được xử lý đúng:

```text
Coroutine
   │
   ▼
Exception
   │
   ▼
Potential crash
```

Một pattern:

```kotlin
viewModelScope.launch {

    runCatching {
        repository.loadData()
    }.onFailure {
        errorReporter.recordException(it)
    }
}
```

Tuy nhiên nếu lỗi là expected error, nên đưa về state:

```text
Loading
Success
Error
```

thay vì record mọi thứ lên Crashlytics.

---

# 20. Crash trong Flow

Ví dụ:

```kotlin
repository.observeData()
    .catch { throwable ->

        errorReporter
            .recordException(throwable)

        emit(emptyList())
    }
    .collect {
        ...
    }
```

Quan trọng:

> Không dùng `catch` để che giấu bug nghiêm trọng.

Ví dụ:

```text
Parser bug
   │
   ▼
catch
   │
   ▼
emit emptyList()
```

App không crash nhưng bug bị ẩn.

Developer cần quyết định:

```text
Có thể recover?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
Recover   Report / Fail
```

---

# 21. Crash trong WorkManager

Background work cũng có thể gặp lỗi.

```text
WorkManager
    │
    ▼
SyncWorker
    │
    ▼
Repository
    │
    ▼
Exception
```

Ví dụ:

```kotlin
override suspend fun doWork(): Result {

    return try {

        repository.sync()

        Result.success()

    } catch (e: IOException) {

        Result.retry()

    } catch (e: Exception) {

        errorReporter.recordException(e)

        Result.failure()
    }
}
```

Ở đây:

```text
IOException
      ↓
Expected network issue
      ↓
Retry

Unexpected exception
      ↓
Crashlytics
      ↓
Failure
```

---

# 22. Crash trong app startup

Startup crash đặc biệt nguy hiểm.

Flow:

```text
App Launch
    │
    ▼
Application.onCreate()
    │
    ▼
SDK initialization
    │
    ▼
Crash
```

Kết quả:

```text
User không thể mở app
```

Startup crash nên được ưu tiên rất cao vì ảnh hưởng toàn bộ UX.

---

# 23. Crash-Free Users

Một metric quan trọng:

```text
Crash-Free Users
```

Ví dụ:

```text
10,000 users

9,950 không crash

50 có crash
```

Crash-free users:

```text
99.5%
```

Metric này giúp hiểu mức ảnh hưởng tới người dùng tốt hơn chỉ nhìn số crash.

---

# 24. Crash-Free Sessions

Một user có thể mở app nhiều lần.

Ví dụ:

```text
User A

Session 1 → OK
Session 2 → OK
Session 3 → Crash
```

Do đó có thể đo thêm:

```text
Crash-Free Sessions
```

Hai metric khác nhau:

```text
Crash-Free Users

Crash-Free Sessions
```

đều có giá trị trong release monitoring.

---

# 25. Ưu tiên crash

Không nên sửa issue chỉ dựa vào số lần xuất hiện.

Có thể dùng:

```text
Priority =
Impact
×
Frequency
×
Severity
×
Release Risk
```

Ví dụ:

| Issue                 | Người dùng ảnh hưởng | Severity | Ưu tiên |
| --------------------- | -------------------: | -------- | ------- |
| Crash khi startup     |                   50 | Critical | Rất cao |
| Crash khi checkout    |                   10 | Critical | Rất cao |
| Crash màn settings    |                  500 | Medium   | Cao     |
| Crash feature ít dùng |                    3 | Low      | Thấp    |

---

# 26. Crash spike sau release

Ví dụ:

```text
v1.4.0
  │
  ▼
Release
  │
  ▼
Crash tăng mạnh
```

Timeline:

```text
v1.3.9      v1.4.0
   │           │
   │           ▼
   │       crash spike
   │           ████
   │         ██████
   │       ████████
───┴────────────────────
```

Crashlytics giúp correlate crash với:

```text
App Version
```

Developer có thể phát hiện:

> Crash xuất hiện từ phiên bản vừa release.

---

# 27. Release Health

Có thể hình dung:

```text
Build
 │
 ▼
QA
 │
 ▼
Release
 │
 ▼
Crashlytics Monitoring
 │
 ├── Healthy
 │
 │      └── Continue rollout
 │
 └── Crash spike
        ├── Pause rollout
        ├── Fix
        └── Hotfix
```

Crashlytics vì vậy là một phần của **release engineering**, không chỉ debugging.

---

# 28. Debug Build và Release Build

Không phải mọi crash từ debug build đều có giá trị.

Ví dụ:

```text
Developer cố tình:
throw RuntimeException()
```

Nếu gửi lên production dashboard:

```text
Noise
```

Có thể cân nhắc:

```text
Debug
    ↓
Crashlytics disabled

Release / Internal QA
    ↓
Crashlytics enabled
```

Tùy workflow của team.

---

# 29. Bật/tắt Crashlytics collection

Trong một số kiến trúc, app có thể cần kiểm soát việc thu thập dữ liệu.

Flow:

```text
User privacy choice
       │
       ▼
Crash reporting allowed?
       │
 ┌─────┴─────┐
 │           │
Yes          No
 │           │
 ▼           ▼
Enable      Disable
```

Điều này phụ thuộc:

* Chính sách riêng tư.
* Khu vực pháp lý.
* Consent model của ứng dụng.

---

# 30. Obfuscation

Production Android app thường dùng:

```text
R8 / ProGuard
```

Ví dụ source:

```text
com.example.payment.PaymentRepository
```

Sau obfuscation:

```text
a.b.c
```

Crash report có thể trở nên khó đọc nếu symbol mapping không đúng.

---

# 31. Mapping File

R8 tạo mapping file:

```text
mapping.txt
```

Ví dụ:

```text
com.example.UserRepository -> a.b:
```

Crashlytics cần mapping để chuyển:

```text
a.b.a()
```

thành:

```text
UserRepository.loadUser()
```

Process:

```text
Release build
     │
     ├── APK / AAB
     │
     └── mapping.txt
             │
             ▼
        Crashlytics
             │
             ▼
       Readable stack trace
```

---

# 32. Nếu mapping sai thì sao?

Crash report:

```text
a.a.a(SourceFile:2)
b.c.d(SourceFile:11)
```

Developer rất khó debug.

Do đó release pipeline cần đảm bảo:

```text
Build release
      │
      ▼
Generate mapping
      │
      ▼
Upload symbols/mapping
      │
      ▼
Publish
```

---

# 33. Native Crash

Nếu app sử dụng:

```text
C / C++ / NDK
```

có thể gặp native crash.

Ví dụ:

```text
SIGSEGV
```

Native crash cần symbol tương ứng để stack trace có ý nghĩa.

Concept tương tự:

```text
Native binary
      │
      ▼
Symbols
      │
      ▼
Crash report
      │
      ▼
Readable call stack
```

---

# 34. Breadcrumb

Breadcrumb là dấu vết về những hành động trước khi crash.

Ví dụ:

```text
App launched

Opened product_detail

Clicked add_to_cart

Opened checkout

Crash
```

Điều này quan trọng vì stack trace chỉ cho biết:

```text
Crash ở đâu
```

Breadcrumb giúp trả lời:

```text
User làm gì trước khi crash?
```

---

# 35. Context quan trọng hơn stack trace đơn thuần

Ví dụ stack trace:

```text
IllegalStateException
CheckoutViewModel.kt:91
```

Chưa đủ.

Thêm context:

```text
screen = checkout
payment_provider = A
cart_size = 8
network_state = connected
```

Bây giờ developer có thể phát hiện:

```text
Crash chỉ xảy ra khi:

payment_provider = A
AND
cart_size > 5
```

---

# 36. Ví dụ: lỗi Checkout

Flow:

```text
CheckoutScreen
      │
      ▼
Pay button
      │
      ▼
PaymentRepository
      │
      ▼
Unexpected response
      │
      ▼
IllegalStateException
      │
      ▼
Crashlytics
```

Custom keys:

```text
screen = checkout
payment_provider = stripe
cart_size = 3
```

Logs:

```text
checkout_opened
payment_started
payment_response_received
payment_parse_failed
```

Report lúc này có đủ thông tin để debug nhanh hơn.

---

# 37. Ví dụ: lỗi API Parser

Backend trả:

```json
{
  "user": null
}
```

App giả định:

```kotlin
val user =
    response.user!!
```

Crash:

```text
NullPointerException
```

Crashlytics giúp xác định:

```text
UserMapper.kt:42
```

Nhưng fix tốt không phải:

```kotlin
try {
    ...
} catch (e: Exception) {
}
```

Mà là:

```text
API nullable data
       │
       ▼
Validate
       │
       ▼
Domain Result
       │
       ├── Success
       └── Error
```

---

# 38. Crashlytics không thay thế Error Handling

Sai tư duy:

```text
Có Crashlytics
      ↓
Không cần xử lý lỗi
```

Đúng hơn:

```text
Expected errors
      │
      ▼
Error handling

Unexpected errors
      │
      ▼
Crashlytics
```

Crashlytics là công cụ quan sát.

Không phải cơ chế recovery.

---

# 39. Crashlytics không thay thế Logging

Logging và Crashlytics có mục đích khác nhau.

```text
Logging
  │
  └── Quan sát event / flow

Crashlytics
  │
  └── Phân tích crash / exception
```

Thực tế:

```text
Logging
   +
Crash reporting
   +
Analytics
   +
Performance monitoring
```

tạo thành observability tốt hơn.

---

# 40. Crashlytics không thay thế Testing

Crashlytics chỉ phát hiện lỗi sau khi chúng xảy ra.

Một hệ thống tốt vẫn cần:

```text
Unit Test
    │
Integration Test
    │
UI Test
    │
QA
    │
Release
    │
Crashlytics
```

Có thể hình dung:

```text
        Bugs
          │
    ┌─────┴─────┐
    ▼           ▼
Pre-release    Production
    │           │
    ▼           ▼
Tests       Crashlytics
```

Mục tiêu là bắt càng nhiều bug trước production càng tốt.

---

# 41. Testing ErrorReporter

Do có abstraction:

```kotlin
interface ErrorReporter
```

có thể tạo fake:

```kotlin
class FakeErrorReporter :
    ErrorReporter {

    val exceptions =
        mutableListOf<Throwable>()

    override fun recordException(
        throwable: Throwable
    ) {
        exceptions += throwable
    }

    override fun log(message: String) {}

    override fun setKey(
        key: String,
        value: String
    ) {}
}
```

Test:

```kotlin
@Test
fun `unexpected error is reported`() {

    // Trigger error.

    assertEquals(
        1,
        fakeErrorReporter.exceptions.size
    )
}
```

Không cần gọi Firebase thật trong unit test.

---

# 42. Test Failure Scenario

Ví dụ repository:

```text
Repository
   │
   ▼
Unexpected database exception
```

Expected:

```text
UI receives error state

AND

ErrorReporter receives exception
```

Test:

```text
FakeRepository throws
       │
       ▼
UseCase
       │
       ├── Error state
       │
       └── recordException()
```

---

# 43. Tạo test crash

Trong demo project có thể tạo nút:

```text
TEST CRASH
```

Khi nhấn:

```kotlin
throw RuntimeException(
    "Crashlytics test crash"
)
```

Flow:

```text
User taps
   │
   ▼
App crash
   │
   ▼
Restart app
   │
   ▼
Crash report upload
   │
   ▼
Firebase Console
```

Chỉ dùng cho development/testing.

Không để button test crash trong production UI.

---

# 44. Failure Scenario: Crashlytics không khả dụng

App không nên phụ thuộc vào việc Crashlytics phải gửi report thành công.

Sai:

```text
Crashlytics network failed
       │
       ▼
Application logic fails
```

Đúng:

```text
Application
    │
    ├── Business logic
    │
    └── Best-effort error reporting
```

Observability là hỗ trợ cho app, không phải dependency sống còn của business flow.

---

# 45. Offline Scenario

Thiết bị có thể crash khi offline.

```text
Crash
 │
 ▼
Local crash report
 │
 ▼
No internet
 │
 ▼
App mở lại
 │
 ▼
Network available
 │
 ▼
Upload report
```

Developer không nên giả định report sẽ xuất hiện tức thì.

---

# 46. Grouping Issues

Crashlytics thường gom các crash tương tự thành một issue.

```text
Crash A ─┐
Crash B ─┼──► Issue #1
Crash C ─┘
```

Điều này giúp developer không phải đọc từng crash riêng lẻ.

Một issue có thể cho thấy:

```text
1,250 events

312 users

App versions:
5.2.0
5.2.1
```

---

# 47. Regression

Một lỗi đã fix có thể xuất hiện lại.

Flow:

```text
Issue
 │
 ▼
Fix
 │
 ▼
Release
 │
 ▼
Stable
 │
 ▼
New release
 │
 ▼
Issue appears again
```

Đây là **regression**.

Crashlytics giúp theo dõi lỗi quay trở lại sau release.

---

# 48. Release Workflow đề xuất

```text
Feature Development
        │
        ▼
Unit / UI Tests
        │
        ▼
Internal QA
        │
        ▼
Release Build
        │
        ├── R8
        ├── mapping
        └── symbols
        │
        ▼
Staged Rollout
        │
        ▼
Crashlytics
        │
   ┌────┴─────┐
   ▼          ▼
Healthy      Spike
   │          │
   ▼          ▼
Continue    Pause
            │
            ▼
           Fix
```

---

# 49. Kiến trúc đề xuất

```text
                 APPLICATION
┌──────────────────────────────────────┐
│                                      │
│ UI                                   │
│  │                                   │
│  ▼                                   │
│ ViewModel                            │
│  │                                   │
│  ▼                                   │
│ Use Case                             │
│  │                                   │
│  ▼                                   │
│ Repository                           │
│                                      │
└───────────────┬──────────────────────┘
                │ unexpected error
                ▼
┌──────────────────────────────────────┐
│          ErrorReporter               │
└───────────────┬──────────────────────┘
                │
                ▼
┌──────────────────────────────────────┐
│  CrashlyticsErrorReporter            │
│                                      │
│ - recordException                    │
│ - log                                │
│ - setCustomKey                       │
└───────────────┬──────────────────────┘
                │
                ▼
       Firebase Crashlytics
```

---

# 50. Package Structure gợi ý

```text
com.example.app
│
├── monitoring
│   ├── ErrorReporter.kt
│   ├── CrashlyticsErrorReporter.kt
│   └── AppLogger.kt
│
├── data
│   ├── repository
│   └── remote
│
├── domain
│   └── usecase
│
├── worker
│   └── SyncWorker.kt
│
└── ui
    ├── home
    ├── profile
    └── checkout
```

---

# 51. Thực hành

Tạo một Android demo tích hợp Crashlytics.

## Bước 1 — Kết nối Firebase

```text
Android project
      │
      ▼
Firebase project
```

---

## Bước 2 — Thêm Crashlytics

Tích hợp Crashlytics SDK và cấu hình build cần thiết.

---

## Bước 3 — Tạo ErrorReporter

```text
ErrorReporter
      │
      ▼
CrashlyticsErrorReporter
```

Không gọi Firebase SDK trực tiếp từ mọi nơi.

---

## Bước 4 — Tạo Test Crash

```kotlin
fun createTestCrash() {

    throw RuntimeException(
        "Test Crashlytics"
    )
}
```

---

## Bước 5 — Gửi Non-Fatal Error

```kotlin
try {

    error("Demo error")

} catch (e: Exception) {

    errorReporter
        .recordException(e)
}
```

---

## Bước 6 — Thêm Custom Key

```kotlin
errorReporter.setKey(
    "screen",
    "home"
)
```

---

## Bước 7 — Thêm Log

```kotlin
errorReporter.log(
    "home_screen_opened"
)
```

---

## Bước 8 — Xem Crashlytics Dashboard

Kiểm tra:

```text
Exception
Stack trace
App version
Device
OS
Logs
Custom keys
```

---

# 52. Bài tập

Thiết kế Crashlytics monitoring cho ứng dụng thương mại điện tử.

App có các flow:

```text
Login
Product
Cart
Checkout
Payment
```

Yêu cầu:

1. Tạo `ErrorReporter`.
2. Tạo `CrashlyticsErrorReporter`.
3. Record unexpected exception.
4. Không record validation error bình thường.
5. Gắn custom key:

```text
screen
flow
payment_provider
```

6. Thêm logs cho checkout:

```text
checkout_started

payment_started

payment_response_received
```

7. Thiết kế một failure scenario cho `PaymentRepository`.
8. Tạo test crash.
9. Viết unit test bằng `FakeErrorReporter`.
10. Viết release checklist liên quan Crashlytics.

---

# 53. Artifact cho Portfolio

Một project nhỏ có thể trình bày:

```text
Android Crash Monitoring Demo
│
├── Firebase Crashlytics
├── ErrorReporter abstraction
├── Fatal crash demo
├── Non-fatal exception
├── Custom keys
├── Structured logs
├── Unit tests
├── Release checklist
└── Architecture diagram
```

README có thể mô tả:

```text
Unexpected Error
      │
      ▼
Application Layer
      │
      ▼
ErrorReporter
      │
      ▼
Crashlytics
      │
      ▼
Monitoring Dashboard
```

---

# 54. Checklist hoàn thành

## Kiến thức

* [ ] Giải thích được Crashlytics.
* [ ] Hiểu fatal crash.
* [ ] Hiểu non-fatal error.
* [ ] Hiểu stack trace.
* [ ] Hiểu custom keys.
* [ ] Hiểu logs/breadcrumb.
* [ ] Hiểu crash-free users.
* [ ] Hiểu crash-free sessions.
* [ ] Hiểu regression.

## Android

* [ ] Tích hợp Crashlytics.
* [ ] Tạo được test crash.
* [ ] Ghi được non-fatal exception.
* [ ] Ghi custom key.
* [ ] Ghi log.
* [ ] Xử lý exception trong coroutine phù hợp.
* [ ] Xử lý exception trong Worker phù hợp.

## Architecture

* [ ] Có `ErrorReporter` abstraction.
* [ ] Firebase SDK không bị gọi trực tiếp khắp codebase.
* [ ] Expected error và unexpected error được phân biệt.
* [ ] Business logic không phụ thuộc Crashlytics.
* [ ] Observability failure không phá business flow.

## Privacy

* [ ] Không log password.
* [ ] Không log access token.
* [ ] Không log dữ liệu thanh toán.
* [ ] Không log private message.
* [ ] User identifier được cân nhắc.
* [ ] Có ghi chú về consent nếu cần.

## Release

* [ ] Crashlytics hoạt động trên release build.
* [ ] Stack trace có thể đọc được.
* [ ] Mapping/symbol được xử lý đúng.
* [ ] Test crash đã được xác nhận.
* [ ] Theo dõi crash sau rollout.
* [ ] Có kế hoạch khi crash spike xuất hiện.

## Testing

* [ ] Có `FakeErrorReporter`.
* [ ] Test unexpected exception.
* [ ] Test expected error không bị report sai.
* [ ] Test flow khi monitoring bị disable.
* [ ] Có failure scenario thực tế.

## Portfolio

* [ ] Có source code.
* [ ] Có architecture diagram.
* [ ] Có screenshot Crashlytics dashboard.
* [ ] Có README.
* [ ] Có test.
* [ ] Có release checklist.

---

# 55. Ghi chú production

Khi đưa Crashlytics vào production, đừng chỉ hỏi:

```text
"Crashlytics đã được cài chưa?"
```

Hãy hỏi:

```text
Crash nào đang ảnh hưởng user nhiều nhất?

        ↓

Crash bắt đầu từ version nào?

        ↓

Có phải regression không?

        ↓

Stack trace có được de-obfuscate đúng không?

        ↓

Có đủ context để debug không?

        ↓

Custom key có chứa dữ liệu nhạy cảm không?

        ↓

Issue này có xảy ra ở một Android version cụ thể không?

        ↓

Có cần dừng rollout không?

        ↓

Test nào cần thêm để lỗi không quay lại?
```

Một workflow production tốt:

```text
                 Development
                     │
                     ▼
                   Tests
                     │
                     ▼
               Internal QA
                     │
                     ▼
                Release Build
                     │
                     ▼
               Staged Rollout
                     │
                     ▼
                Crashlytics
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
       Stable                Crash spike
          │                     │
          ▼                     ▼
 Continue rollout        Investigate issue
                                │
                                ▼
                             Hotfix
                                │
                                ▼
                        Regression test
```

Mục tiêu cuối cùng không phải chỉ là:

> **“App gửi được crash report lên Firebase.”**

Mà là:

> **“Team có một hệ thống phát hiện và phân tích lỗi production có cấu trúc, ít nhiễu, bảo vệ quyền riêng tư, hỗ trợ release decision và giúp ngăn regression.”**

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
