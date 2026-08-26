# 021 - Privacy Considerations

**Học phần:** 04 - Network, Async and Services
**Module:** Module 09 - Common Services
**Nhóm nội dung:** Service Integration
**Nguồn roadmap:** Common Services / Service Integration
**Loại bài:** lesson
**Thứ tự trong module:** 021
**Thời lượng gợi ý:** 24 phút

---

## 1. Tóm tắt

**Privacy Considerations** là tập hợp các nguyên tắc và quyết định kỹ thuật nhằm bảo vệ dữ liệu cá nhân của người dùng trong suốt vòng đời của một ứng dụng Android.

Privacy không chỉ là việc hiển thị một trang **Privacy Policy**. Developer cần suy nghĩ về:

* App đang thu thập dữ liệu gì?
* Dữ liệu đó có thực sự cần thiết không?
* Dữ liệu được lưu ở đâu?
* Có được gửi tới server hoặc SDK bên thứ ba không?
* Người dùng có biết việc đó không?
* Người dùng có quyền từ chối không?
* Nếu từ chối permission thì app có tiếp tục hoạt động được không?
* Log, analytics hoặc crash report có vô tình chứa thông tin nhạy cảm không?
* Data Safety trên Google Play có đúng với hành vi thật của app không?

Android khuyến nghị nguyên tắc **data minimization**: chỉ truy cập dữ liệu cần thiết cho chức năng mà người dùng đang sử dụng và chỉ yêu cầu permission khi thực sự cần. ([Android Developers][1])

Trong Service Integration, privacy đặc biệt quan trọng vì app thường kết nối với:

* Firebase Analytics
* Crashlytics
* FCM
* Google Maps
* AdMob
* Authentication providers
* Backend API
* AI API
* Analytics SDK
* Advertising SDK
* Social Login SDK

Mỗi SDK có thể làm thay đổi dữ liệu mà ứng dụng thu thập hoặc chia sẻ.

---

## 2. Mục tiêu học tập

Sau bài này, bạn có thể:

* Giải thích **Privacy Considerations** bằng ngôn ngữ của mình.
* Phân biệt:

  * permission,
  * consent,
  * authentication,
  * privacy policy.
* Xác định dữ liệu nhạy cảm trong một app Android.
* Áp dụng nguyên tắc **data minimization**.
* Biết khi nào nên yêu cầu runtime permission.
* Thiết kế app hoạt động hợp lý khi người dùng từ chối permission.
* Kiểm tra SDK bên thứ ba có thu thập dữ liệu hay không.
* Tránh đưa PII vào log, analytics và crash report.
* Hiểu mối quan hệ giữa code thực tế và **Google Play Data Safety**.
* Xây dựng một privacy checklist trước khi release.

---

# 3. Khái niệm chính

## 3.1. Privacy Considerations là gì?

Có thể hiểu đơn giản:

> Privacy Considerations là việc cân nhắc **app cần dữ liệu nào, tại sao cần, lấy bằng cách nào, lưu bao lâu, gửi cho ai và người dùng kiểm soát dữ liệu đó như thế nào**.

Ví dụ một ứng dụng thời tiết muốn hiển thị thời tiết hiện tại.

Có hai thiết kế:

### Thiết kế A

App yêu cầu:

```text
ACCESS_FINE_LOCATION
```

ngay khi app khởi động.

### Thiết kế B

App cho người dùng:

```text
Nhập thành phố
       ↓
Hoặc
       ↓
"Use my location"
       ↓
Request location permission
```

Thiết kế B thường tốt hơn về privacy vì app chỉ yêu cầu location khi chức năng thực sự cần nó.

Android hiện khuyến nghị yêu cầu số lượng permission tối thiểu và request permission càng gần hành động của người dùng càng tốt. ([Android Developers][1])

---

# 4. Privacy không chỉ là Permission

Một lỗi rất phổ biến:

```text
Có permission
     =
được phép làm mọi thứ với dữ liệu
```

Đây là cách hiểu sai.

Cần phân biệt:

| Khái niệm      | Ý nghĩa                                                 |
| -------------- | ------------------------------------------------------- |
| Permission     | Android cho phép truy cập resource/API                  |
| Consent        | Người dùng đồng ý với một mục đích xử lý dữ liệu        |
| Authentication | Xác minh người dùng là ai                               |
| Authorization  | Người dùng được phép thực hiện thao tác nào             |
| Privacy Policy | Công khai cách app xử lý dữ liệu                        |
| Data Safety    | Khai báo việc thu thập/chia sẻ dữ liệu trên Google Play |

Ví dụ:

Người dùng cho phép:

```text
ACCESS_FINE_LOCATION
```

để tìm cửa hàng gần họ.

Điều đó không tự động có nghĩa là app nên gửi location cho:

```text
Analytics SDK
Advertising SDK
AI service
Marketing server
```

nếu người dùng không được thông báo thích hợp.

---

# 5. Các nhóm dữ liệu cần đặc biệt chú ý

Một số dữ liệu thường có privacy risk cao:

```text
User Data
│
├── Identity
│   ├── Name
│   ├── Email
│   └── Phone number
│
├── Authentication
│   ├── Token
│   ├── Session
│   └── Credential
│
├── Location
│   ├── Approximate
│   └── Precise
│
├── Contacts
│
├── Photos / Videos
│
├── Camera
│
├── Microphone
│
├── Financial data
│
├── Health data
│
├── Device information
│
└── User behavior
    ├── Searches
    ├── Screens viewed
    └── Actions performed
```

Google Play coi nhiều loại dữ liệu như location, contacts, microphone, camera, authentication, financial information và các dạng dữ liệu cá nhân khác là dữ liệu cá nhân hoặc nhạy cảm, kéo theo yêu cầu minh bạch và xử lý an toàn. ([Google Help][2])

---

# 6. Nguyên tắc Data Minimization

Một trong những nguyên tắc quan trọng nhất:

> **Không thu thập dữ liệu chỉ vì bạn có thể thu thập nó.**

Hãy hỏi:

```text
App có thực sự cần dữ liệu này?
             │
       ┌─────┴─────┐
       │           │
      Không        Có
       │           │
       ▼           ▼
Không collect   Có API nào ít
                nhạy cảm hơn?
                     │
              ┌──────┴──────┐
              │             │
             Có            Không
              │             │
              ▼             ▼
        Dùng API đó      Request
                        permission
```

---

## Ví dụ

App chỉ cần biết người dùng đang ở **Hà Nội hay TP.HCM**.

Không nhất thiết cần:

```text
GPS ±5 mét
```

Có thể chỉ cần:

```text
Approximate Location
```

Android khuyến nghị dùng mức dữ liệu có độ chính xác thấp hơn khi mức chính xác cao không cần thiết. ([Android Developers][3])

---

# 7. Ưu tiên API không cần Permission

Một nguyên tắc rất hữu ích:

```text
Không cần permission
        >
Permission phạm vi nhỏ
        >
Permission rộng
```

Ví dụ với ảnh.

Thay vì:

```text
App
 ↓
Request access toàn bộ thư viện
 ↓
Đọc tất cả ảnh
```

có thể thiết kế:

```text
App
 ↓
Android Photo Picker
 ↓
User chọn 1 ảnh
 ↓
App chỉ nhận ảnh được chọn
```

Tương tự, Android cung cấp nhiều picker, Intent và API theo phạm vi để hạn chế việc app phải truy cập toàn bộ dữ liệu của người dùng. ([Android Developers][3])

---

# 8. Request Permission đúng thời điểm

Không nên:

```text
App opened
   ↓
Camera?
Location?
Microphone?
Contacts?
Notifications?
   ↓
User: ???
```

Nên:

```text
User mở chức năng
"Gửi voice message"
        ↓
Giải thích microphone dùng để làm gì
        ↓
Request RECORD_AUDIO
        ↓
┌───────────────┐
│ User decision │
└───────┬───────┘
    ┌───┴────┐
    │        │
  Allow     Deny
    │        │
    ▼        ▼
 Record    Text message
 audio     vẫn hoạt động
```

Permission nên gắn với một hành động cụ thể của người dùng. ([Android Developers][1])

---

# 9. Graceful Degradation

Một privacy-friendly app không nên coi:

```text
Permission denied
```

là lỗi nghiêm trọng.

Ví dụ app tìm nhà hàng.

Nếu có location:

```text
Nearby restaurants
```

Nếu location bị từ chối:

```text
Enter city manually
```

Kiến trúc:

```text
                  User
                    │
             Find restaurants
                    │
          Location available?
               /         \
             Yes          No
              │            │
          GPS location   Ask city
              │            │
              └──────┬─────┘
                     ▼
                 Search API
```

UX vẫn hoạt động.

---

# 10. Privacy và Third-party SDK

Đây là phần rất quan trọng của **Service Integration**.

Giả sử app tích hợp:

```text
Android App
│
├── Firebase Analytics
├── Crashlytics
├── Ad SDK
├── Maps SDK
├── Login SDK
└── AI SDK
```

Developer phải biết:

```text
SDK lấy dữ liệu gì?
       ↓
Có gửi ra server không?
       ↓
Server thuộc ai?
       ↓
Dùng dữ liệu để làm gì?
       ↓
Có cần consent không?
       ↓
Data Safety đã khai báo chưa?
```

Google Play yêu cầu Data Safety phản ánh dữ liệu được thu thập/chia sẻ, bao gồm cả hành vi của SDK tích hợp trong ứng dụng. ([Google Help][2])

Đáng chú ý, cập nhật chính sách tháng 7/2026 còn làm rõ rằng trách nhiệm về User Data cũng áp dụng với **third-party AI integrations**; developer vẫn chịu trách nhiệm về disclosure, consent và limited use. ([Google Help][4])

---

# 11. Ví dụ: Analytics và Privacy

Giả sử app ghi analytics:

```kotlin
analytics.logEvent("checkout") {
    param("product", product.id)
}
```

Khá ổn.

Nhưng:

```kotlin
analytics.logEvent("checkout") {
    param("email", user.email)
    param("phone", user.phone)
    param("address", user.address)
}
```

có thể tạo privacy risk rất lớn.

Tốt hơn:

```kotlin
analytics.logEvent("checkout") {
    param("product_category", product.category)
    param("payment_method", paymentMethod)
}
```

Nguyên tắc:

```text
Analytics event
      │
      ▼
Có cần PII không?
      │
   ┌──┴──┐
   │     │
  No    Yes
   │     │
   ▼     ▼
Store   Có thực sự
event   bắt buộc?
         │
       thường là
          NO
```

---

# 12. Không log dữ liệu nhạy cảm

Sai:

```kotlin
Log.d(
    "LOGIN",
    "email=$email password=$password token=$accessToken"
)
```

Đặc biệt nguy hiểm vì log có thể xuất hiện trong:

* Logcat
* Debug reports
* Crash reports
* QA screenshots
* Cloud logging
* CI logs

Tốt hơn:

```kotlin
Log.d(
    "LOGIN",
    "Login request started"
)
```

Hoặc:

```kotlin
Log.d(
    "LOGIN",
    "Login result=$result"
)
```

---

# 13. Redaction

Nếu một số thông tin cần cho debugging, có thể mask/redact.

Ví dụ:

```kotlin
fun maskEmail(email: String): String {
    val parts = email.split("@")

    if (parts.size != 2) {
        return "***"
    }

    return "${parts[0].take(2)}***@${parts[1]}"
}
```

Ví dụ:

```text
Input

ankhanh@gmail.com

↓

Output

an***@gmail.com
```

Tuy nhiên:

> Masking không phải giấy phép để gửi dữ liệu đi mọi nơi.

Cách tốt nhất vẫn là **không collect khi không cần**.

---

# 14. Privacy và Crash Reporting

Crash report rất hữu ích nhưng cũng có rủi ro.

Ví dụ:

```text
Exception
    ↓
Crash Reporter
    ↓
Stack trace
    ↓
Custom logs
    ↓
User attributes
```

Nếu developer ghi:

```kotlin
crashReporter.log(
    "User email=$email"
)
```

thì crash report có thể chứa PII.

Nên ưu tiên:

```kotlin
crashReporter.log(
    "Checkout screen opened"
)
```

hoặc identifier không trực tiếp nhận diện người dùng nếu thực sự cần.

---

# 15. Privacy và Network

Dữ liệu nhạy cảm thường đi qua:

```text
Android App
    │
    │ HTTPS
    ▼
Backend
    │
    ├── Database
    ├── Logging
    ├── Analytics
    └── Third-party API
```

Privacy review không thể chỉ kiểm tra Android app.

Cần xem toàn bộ pipeline:

```text
Collect
   ↓
Transmit
   ↓
Process
   ↓
Store
   ↓
Share
   ↓
Delete
```

---

# 16. Privacy Data Lifecycle

Một mô hình quan trọng cần nhớ:

```text
                ┌─────────────┐
                │   Collect   │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │  Transmit   │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │   Process   │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │    Store    │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │    Share    │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │   Delete    │
                └─────────────┘
```

Developer nên có câu trả lời cho cả sáu bước.

---

# 17. Lưu dữ liệu trên thiết bị

Không nên đưa dữ liệu private vào nơi dễ bị ứng dụng khác truy cập.

Android khuyến nghị dữ liệu private nên được lưu trong **internal storage** khi phù hợp vì vùng này được sandbox theo ứng dụng. ([Android Developers][5])

Ví dụ:

```kotlin
File(context.filesDir, "profile.json")
    .writeText(json)
```

Không nên tùy tiện:

```text
Public Downloads/
```

với dữ liệu bí mật.

---

# 18. Token và Credential

Không nên:

```kotlin
val ACCESS_TOKEN =
    "secret-user-access-token"
```

Hoặc:

```text
Log.d("TOKEN", accessToken)
```

Hãy coi các giá trị sau là sensitive:

```text
access_token
refresh_token
session_id
authorization header
API credential
password
OTP
```

Lưu ý thêm:

> API key nhúng trong APK không nên được coi là một bí mật tuyệt đối, vì ứng dụng Android được phân phối tới thiết bị của người dùng và có thể bị phân tích.

Đối với credential thực sự bí mật:

```text
Android
   ↓
Backend
   ↓
Secret API
```

thường an toàn hơn:

```text
Android
   ↓
Secret API directly
```

---

# 19. Consent State

Nếu app có optional analytics:

```text
First launch
    ↓
Privacy preference
    ↓
┌───────────────────────┐
│ Analytics             │ ON/OFF
│ Crash diagnostics     │ ON/OFF
│ Personalization       │ ON/OFF
└──────────┬────────────┘
           │
           ▼
       Save state
```

Model:

```kotlin
data class PrivacyPreferences(
    val analyticsEnabled: Boolean = false,
    val crashReportingEnabled: Boolean = false,
    val personalizationEnabled: Boolean = false
)
```

Sau đó các service đọc cùng một source of truth.

---

# 20. Ví dụ PrivacyManager

```kotlin
data class PrivacyPreferences(
    val analyticsEnabled: Boolean,
    val crashReportingEnabled: Boolean
)

class PrivacyManager {

    private var preferences =
        PrivacyPreferences(
            analyticsEnabled = false,
            crashReportingEnabled = false
        )

    fun updatePreferences(
        analytics: Boolean,
        crashReporting: Boolean
    ) {
        preferences = PrivacyPreferences(
            analyticsEnabled = analytics,
            crashReportingEnabled = crashReporting
        )
    }

    fun canTrackAnalytics(): Boolean {
        return preferences.analyticsEnabled
    }

    fun canSendCrashReport(): Boolean {
        return preferences.crashReportingEnabled
    }
}
```

Service:

```kotlin
if (privacyManager.canTrackAnalytics()) {
    analytics.track("home_opened")
}
```

Thay vì:

```kotlin
analytics.track("home_opened")
```

ở mọi nơi.

---

# 21. Kiến trúc tốt hơn

```text
                   UI
                    │
             Privacy Settings
                    │
                    ▼
          ┌──────────────────┐
          │  PrivacyManager  │
          └────────┬─────────┘
                   │
             Privacy State
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
   Analytics   CrashReport   Ads
        │          │          │
        └──────────┴──────────┘
                   │
                   ▼
           External Services
```

Lợi ích:

* Privacy logic tập trung.
* Dễ test.
* Dễ audit.
* Dễ thay đổi SDK.
* Tránh mỗi feature tự xử lý consent theo một cách khác.

---

# 22. Lifecycle Considerations

Privacy state cũng là **application state**.

Không nên:

```text
Rotate screen
    ↓
Consent dialog xuất hiện lại
```

Hoặc:

```text
App background
    ↓
Process recreated
    ↓
Consent mất
```

Privacy preference nên nằm ở nơi tồn tại ngoài UI state:

```text
Compose UI
    │
ViewModel
    │
PrivacyRepository
    │
DataStore
```

Không nên chỉ dùng:

```kotlin
remember {
    mutableStateOf(false)
}
```

cho consent dài hạn.

---

# 23. Permission State cũng có thể thay đổi

Không được giả định:

```text
User allowed yesterday
        =
Permission vẫn còn today
```

Người dùng có thể thay đổi permission trong Settings.

Do đó:

```text
Feature opened
      ↓
Check permission
      ↓
┌───────────────┐
│ Granted?      │
└───────┬───────┘
    Yes │ No
        │
    ┌───┴───────┐
    ▼           ▼
Continue    Explain /
            request /
            fallback
```

Android khuyến nghị kiểm tra runtime permission tại thời điểm cần truy cập resource thay vì giả định permission vẫn còn. ([Android Developers][1])

---

# 24. Permission Denied

Không nên:

```kotlin
if (!locationGranted) {
    finish()
}
```

Nên:

```kotlin
if (locationGranted) {
    loadNearbyPlaces()
} else {
    showManualLocationInput()
}
```

UX tốt:

```text
Location denied

"Bạn vẫn có thể tìm kiếm bằng cách nhập thành phố."

[Nhập thành phố]
```

UX xấu:

```text
LOCATION REQUIRED

[EXIT]
```

nếu location thực sự không phải chức năng cốt lõi.

---

# 25. Data Safety trên Google Play

Một developer không chỉ viết code.

Trước release cần kiểm tra:

```text
Code
+
SDKs
+
Backend
+
Privacy Policy
+
Play Console Data Safety
```

phải nhất quán.

Ví dụ:

```text
App gửi analytics
      ↓
Data Safety:
"App does not collect data"
```

=> Có vấn đề.

Google Play yêu cầu developer khai báo Data Safety chính xác và cập nhật thông tin về dữ liệu app thu thập hoặc chia sẻ; developer cũng chịu trách nhiệm về hành vi của SDK tích hợp. ([Google Help][2])

---

# 26. Account Deletion

Nếu app tạo tài khoản và lưu user data, privacy design cũng phải nghĩ tới:

```text
Create account
      ↓
Generate user data
      ↓
...
      ↓
Delete account
      ↓
Delete associated data
```

Google Play yêu cầu các app thuộc phạm vi chính sách tài khoản phải cung cấp cơ chế phù hợp để người dùng yêu cầu xóa tài khoản và dữ liệu liên quan, thay vì chỉ khóa tài khoản. ([Google Help][2])

Backend vì vậy cần tính tới:

```text
DELETE /users/me
```

chứ không chỉ:

```text
users.active = false
```

nếu policy và use case yêu cầu dữ liệu phải được xóa.

---

# 27. UX Impact

Privacy ảnh hưởng trực tiếp tới UX.

### UX xấu

```text
Open app
 ↓
5 permission dialogs
 ↓
User deny
 ↓
App unusable
```

### UX tốt

```text
Open app
 ↓
Explore app
 ↓
Use feature requiring camera
 ↓
Short explanation
 ↓
Request camera
 ↓
Allow / deny
 ↓
Feature adapts
```

Privacy-friendly UX thường làm người dùng hiểu rõ:

* dữ liệu gì được dùng,
* tại sao cần,
* khi nào được dùng.

---

# 28. Reliability Impact

Privacy implementation kém cũng gây lỗi.

Ví dụ:

```kotlin
locationManager.getCurrentLocation(...)
```

nhưng không kiểm tra permission.

Có thể dẫn tới:

```text
SecurityException
```

Một implementation tốt:

```text
Check permission
     ↓
Call API
```

và xử lý cả:

```text
Granted
Denied
Revoked
Unavailable
Timeout
```

---

# 29. Maintainability Impact

Nếu privacy logic phân tán:

```text
HomeScreen
 └── consent

MapScreen
 └── consent

ProfileScreen
 └── consent

AnalyticsManager
 └── consent

CrashManager
 └── consent
```

sẽ khó maintain.

Tốt hơn:

```text
            PrivacyRepository
                    │
              PrivacyState
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
 Analytics       Crash        Features
```

---

# 30. Release Risk

Privacy bug có thể nghiêm trọng hơn UI bug.

Ví dụ:

```text
UI spacing sai
→ trải nghiệm không đẹp
```

Trong khi:

```text
Thu thập location không disclosure
→ privacy violation
→ Play policy issue
→ mất niềm tin
→ release bị ảnh hưởng
```

Google Play thường xuyên cập nhật chính sách privacy và permission. Các cập nhật 2026 tiếp tục nhấn mạnh việc hạn chế truy cập location/contacts và làm rõ trách nhiệm dữ liệu khi tích hợp AI bên thứ ba. ([Android Developers][6])

---

# 31. Một lỗi junior developer thường mắc

Một junior developer có thể nghĩ:

> "SDK này chỉ cần thêm dependency nên chắc không ảnh hưởng privacy."

Ví dụ:

```kotlin
implementation("some.analytics:sdk:x.y.z")
```

sau đó SDK tự thu thập:

```text
Device info
App events
Identifiers
Network info
```

nhưng developer không:

* đọc tài liệu SDK,
* kiểm tra network,
* cập nhật privacy policy,
* cập nhật Data Safety.

Đây là lỗi rất quan trọng.

Android cũng khuyến nghị developer phải xem xét permission requirements và hành vi của các dependencies mà app tích hợp. ([Android Developers][1])

---

# 32. Privacy Review Flow

Một flow có thể dùng khi thêm bất kỳ service mới nào:

```text
              Add new SDK/API
                    │
                    ▼
         What data does it access?
                    │
                    ▼
          Is the data necessary?
              /           \
            No             Yes
            │               │
            ▼               ▼
       Don't collect     Permission?
                            │
                            ▼
                       Consent?
                            │
                            ▼
                     Where stored?
                            │
                            ▼
                    Shared with whom?
                            │
                            ▼
                    Retention period?
                            │
                            ▼
                   Can user delete?
                            │
                            ▼
                Update Privacy Policy
                            │
                            ▼
                 Update Data Safety
                            │
                            ▼
                         TEST
```

---

# 33. Testing Privacy

Privacy cũng cần test như business logic.

## Test 1 — Permission allowed

```text
Given:
Location permission granted

When:
User mở Nearby

Then:
Nearby places loaded
```

---

## Test 2 — Permission denied

```text
Given:
Location permission denied

When:
User mở Nearby

Then:
Manual location search available
```

---

## Test 3 — Permission revoked

```text
Given:
Permission granted trước đó

When:
User revoke trong Android Settings

Then:
App không crash
```

---

## Test 4 — Analytics disabled

```text
Given:
analyticsEnabled = false

When:
User mở Home

Then:
Không có analytics event được gửi
```

---

## Test 5 — Process recreation

```text
Given:
User disables analytics

When:
App process bị kill và mở lại

Then:
Analytics vẫn disabled
```

---

# 34. Debugging Checklist

Khi debug privacy-related issue:

* [ ] Permission hiện tại là gì?
* [ ] Người dùng có từng deny permission không?
* [ ] Permission có bị revoke trong Settings không?
* [ ] Consent state đã persist chưa?
* [ ] SDK có initialize trước consent không?
* [ ] Analytics có gửi event khi opt-out không?
* [ ] Crash report có chứa PII không?
* [ ] Logcat có token/email/location không?
* [ ] Request network có gửi field không cần thiết không?
* [ ] Dependency mới có thêm permission vào merged manifest không?

---

# 35. Kiểm tra Merged Manifest

Một dependency có thể thêm permission vào app.

Developer nên kiểm tra:

```text
Android Studio
    ↓
AndroidManifest.xml
    ↓
Merged Manifest
```

Ví dụ developer không trực tiếp viết:

```xml
<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION" />
```

nhưng một dependency có thể ảnh hưởng manifest.

Do đó:

```text
Dependency update
       ↓
Check merged manifest
       ↓
Check permissions
       ↓
Check privacy implications
```

---

# 36. Thực hành

## Bài thực hành: Privacy-aware Location Feature

Giả sử bạn có app:

```text
CoffeeFinder
```

Chức năng:

```text
Find coffee shops near me
```

Yêu cầu thiết kế:

```text
CoffeeFinder
      │
      ▼
User presses
"Near me"
      │
      ▼
Check location permission
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
Location   Explain
 │         │
 │      Request permission
 │         │
 │    ┌────┴─────┐
 │   Allow      Deny
 │     │          │
 └─────┘          ▼
              Manual city
                 input
```

---

## Code đơn giản

```kotlin
fun openNearbyCoffeeShops() {
    when {
        hasLocationPermission() -> {
            loadNearbyCoffeeShops()
        }

        shouldExplainLocationPermission() -> {
            showLocationExplanation()
        }

        else -> {
            requestLocationPermission()
        }
    }
}
```

Xử lý kết quả:

```kotlin
fun onLocationPermissionResult(
    granted: Boolean
) {
    if (granted) {
        loadNearbyCoffeeShops()
    } else {
        showManualCitySearch()
    }
}
```

Điểm quan trọng không phải chỉ là API permission.

Điểm quan trọng là:

```text
deny permission
      ≠
app unusable
```

---

# 37. Artifact cho Portfolio

Bạn có thể tạo:

```text
privacy/
├── README.md
├── privacy-flow.md
├── PrivacyManager.kt
├── PrivacyPreferences.kt
├── PrivacyRepository.kt
├── PrivacySettingsScreen.kt
├── PrivacyManagerTest.kt
└── screenshots/
    ├── permission_explanation.png
    ├── privacy_settings.png
    └── permission_denied_fallback.png
```

Trong `README.md`, giải thích:

```text
Problem
↓
Data being collected
↓
Why it is necessary
↓
Permission strategy
↓
Consent strategy
↓
Storage
↓
Third-party SDKs
↓
Testing
↓
Release checklist
```

Đây là artifact tốt vì cho thấy bạn không chỉ biết API Android mà còn hiểu **production engineering**.

---

# 38. Bài tập

## Bài 1

Viết 5 dòng giải thích:

> Privacy Considerations là gì?

---

## Bài 2

Một app fitness muốn yêu cầu:

```text
Location
Camera
Contacts
Microphone
Notifications
```

Hãy phân tích:

* Permission nào thực sự cần?
* Khi nào nên request?
* Nếu deny thì fallback là gì?

---

## Bài 3

App đang gửi event:

```text
signup:
email
phone
birthday
address
device_id
```

Hãy xác định field nào có thể loại bỏ hoặc thay thế.

---

## Bài 4

Thiết kế màn hình:

```text
Privacy Settings

Analytics          [ON]
Crash diagnostics  [ON]
Personalization    [OFF]
```

Persist state bằng DataStore.

---

## Bài 5

Kiểm tra một project Android của bạn:

```text
dependencies
      ↓
permissions
      ↓
network requests
      ↓
logs
      ↓
analytics
```

và viết một **Privacy Audit Report** ngắn.

---

# 39. Checklist hoàn thành

### Kiến thức

* [ ] Giải thích được Privacy Considerations.
* [ ] Hiểu data minimization.
* [ ] Phân biệt permission và consent.
* [ ] Hiểu privacy của third-party SDK.
* [ ] Hiểu Data Safety.

### Android

* [ ] Request permission đúng thời điểm.
* [ ] Có fallback khi permission denied.
* [ ] Không giả định permission luôn được giữ.
* [ ] Privacy state tồn tại qua lifecycle.
* [ ] Không collect dữ liệu không cần thiết.

### Data

* [ ] Không log password.
* [ ] Không log access token.
* [ ] Không đưa PII không cần thiết vào analytics.
* [ ] Không đưa PII không cần thiết vào crash report.
* [ ] Dữ liệu private được lưu đúng nơi.
* [ ] Có chiến lược deletion/retention.

### Service Integration

* [ ] Biết SDK thu thập dữ liệu gì.
* [ ] Kiểm tra SDK mới trước khi tích hợp.
* [ ] Kiểm tra merged manifest.
* [ ] Kiểm tra network traffic.
* [ ] Kiểm tra SDK không chạy trái với privacy preference.

### Release

* [ ] Privacy Policy đúng với hành vi app.
* [ ] Data Safety đúng với hành vi app.
* [ ] Third-party SDK được khai báo phù hợp.
* [ ] Permission đã được review.
* [ ] Luồng account/data deletion được test nếu áp dụng.

---

# 40. Ghi chú sản xuất

Khi thêm một service mới vào production, đừng chỉ hỏi:

> "SDK có hoạt động không?"

Hãy hỏi cả:

```text
Service Integration
        │
        ├── Nó lấy dữ liệu gì?
        ├── Tại sao cần dữ liệu đó?
        ├── Người dùng có biết không?
        ├── Có lựa chọn ít dữ liệu hơn không?
        ├── Dữ liệu được gửi tới đâu?
        ├── Có third-party nào nhận dữ liệu không?
        ├── Data được giữ bao lâu?
        ├── Người dùng có thể opt-out không?
        ├── Người dùng có thể xóa không?
        ├── Log có chứa PII không?
        ├── Crash report có chứa PII không?
        ├── Privacy Policy đã cập nhật chưa?
        └── Data Safety đã cập nhật chưa?
```

Một Android developer tốt không chỉ làm cho service **chạy được**.

Developer production-ready phải làm cho service:

```text
Functional
+
Reliable
+
Secure
+
Privacy-aware
+
Policy-compliant
+
Maintainable
```

---

# 41. Ghi nhớ nhanh

```text
           PRIVACY CONSIDERATIONS

                 DATA
                  │
        ┌─────────┼─────────┐
        │         │         │
     Collect    Store     Share
        │         │         │
        └─────────┼─────────┘
                  │
              Minimize
                  │
        ┌─────────┼─────────┐
        │         │         │
 Permission    Consent    Security
        │         │         │
        └─────────┼─────────┘
                  │
              User Control
                  │
        ┌─────────┼─────────┐
        │         │         │
     Opt-out    Delete   Transparency
                  │
                  ▼
         Privacy-friendly App
```

**Câu cần nhớ:**

> **Chỉ thu thập dữ liệu cần thiết, vào đúng thời điểm, cho mục đích rõ ràng, với quyền kiểm soát thuộc về người dùng.**

[1]: https://developer.android.com/guide/topics/permissions/overview?utm_source=chatgpt.com "Permissions on Android  |  Privacy  |  Android Developers"
[2]: https://support.google.com/googleplay/android-developer/answer/10144311?hl=en&utm_source=chatgpt.com "User Data - Play Console Help"
[3]: https://developer.android.com/privacy-and-security/minimize-permission-requests?utm_source=chatgpt.com "Minimize your permission requests  |  Privacy  |  Android Developers"
[4]: https://support.google.com/googleplay/android-developer/answer/17134731?hl=en&utm_source=chatgpt.com "Policy announcement: July 15, 2026 - Play Console Help"
[5]: https://developer.android.com/privacy-and-security/security-best-practices?authuser=3&utm_source=chatgpt.com "Improve your app's security  |  Security  |  Android Developers"
[6]: https://developer.android.com/distribute/play-policies?utm_source=chatgpt.com "Google Play Policies  |  Android Developers"
