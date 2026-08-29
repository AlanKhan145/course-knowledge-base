# 019 - Feature Flag

**Học phần:** 04 - Network, Async and Services
**Module:** Module 09 - Common Services
**Nhóm nội dung:** Service Integration
**Nguồn roadmap:** Common Services / Service Integration
**Loại bài:** lesson
**Thứ tự trong module:** 019
**Thời lượng gợi ý:** 24 phút

---

## 1. Tóm tắt

**Feature Flag** hay **Feature Toggle** là kỹ thuật cho phép ứng dụng **bật hoặc tắt một tính năng mà không nhất thiết phải phát hành một phiên bản ứng dụng mới**.

Thay vì viết:

```kotlin
NewCheckoutScreen()
```

ứng dụng có thể kiểm tra một flag:

```kotlin
if (featureFlags.isNewCheckoutEnabled) {
    NewCheckoutScreen()
} else {
    OldCheckoutScreen()
}
```

Giá trị flag có thể đến từ:

* Giá trị hard-code trong app.
* File cấu hình local.
* Backend API.
* Firebase Remote Config.
* Hệ thống quản lý feature flag riêng.
* Cấu hình theo môi trường `debug / staging / production`.

Feature Flag đặc biệt hữu ích trong Android vì quá trình phát hành ứng dụng phụ thuộc vào:

```text
Developer
   ↓
Build APK/AAB
   ↓
Google Play
   ↓
Review / rollout
   ↓
User update app
```

Nếu phát hiện vấn đề sau khi release, việc sửa code rồi phát hành bản mới có thể mất thời gian.

Với Feature Flag:

```text
App đã cài trên thiết bị
        ↓
   đọc Feature Flag
        ↓
   feature_enabled?
      /       \
    true      false
     ↓          ↓
 Feature mới  Feature cũ
```

Ta có thể vô hiệu hóa một tính năng gặp lỗi mà không cần chờ tất cả người dùng cập nhật ứng dụng.

---

# 2. Mục tiêu học tập

Sau bài này, bạn có thể:

* Giải thích **Feature Flag** bằng ngôn ngữ của mình.
* Phân biệt Feature Flag với cấu hình thông thường.
* Biết vị trí của Feature Flag trong kiến trúc Android.
* Sử dụng flag để bật/tắt UI hoặc business logic.
* Hiểu cách lấy flag từ server hoặc Remote Config.
* Quản lý trạng thái khi network không khả dụng.
* Thiết kế **default value** an toàn.
* Hiểu Feature Flag ảnh hưởng đến:

  * UX
  * reliability
  * maintainability
  * testing
  * release risk
* Biết những lỗi thường gặp khi sử dụng Feature Flag.
* Xây dựng một artifact nhỏ có thể đưa vào portfolio.

---

# 3. Feature Flag là gì?

Feature Flag là một biến cấu hình quyết định một tính năng có được phép chạy hay không.

Ví dụ:

```text
new_checkout_enabled = true
```

Nếu:

```text
true
```

thì sử dụng checkout mới.

Nếu:

```text
false
```

thì tiếp tục sử dụng checkout cũ.

Ví dụ khác:

```text
ai_chat_enabled = false

dark_mode_v2_enabled = true

new_payment_enabled = false

recommendation_v2_enabled = true
```

Feature Flag có thể đơn giản là Boolean nhưng trong thực tế có thể phức tạp hơn.

Ví dụ:

```json
{
  "new_checkout_enabled": true,
  "recommendation_algorithm": "v2",
  "max_home_items": 20
}
```

---

# 4. Feature Flag giải quyết vấn đề gì?

Giả sử team phát hành chức năng:

```text
New Payment Flow
```

Sau release:

```text
100.000 users
      ↓
New Payment Flow
      ↓
Một số thiết bị bị crash
```

Nếu không có Feature Flag:

```text
Phát hiện bug
    ↓
Fix code
    ↓
Build version mới
    ↓
Upload Google Play
    ↓
Rollout
    ↓
User update
```

Trong thời gian đó lỗi vẫn có thể xảy ra.

Với Feature Flag:

```text
Phát hiện bug
    ↓
Server:
new_payment_enabled = false
    ↓
App fetch config
    ↓
Payment mới bị tắt
    ↓
App sử dụng Payment cũ
```

Không cần build lại ứng dụng ngay lập tức.

---

# 5. Vị trí của Feature Flag trong Android App

Một kiến trúc đơn giản:

```text
┌───────────────────────────────┐
│          Remote Server        │
│                               │
│ new_checkout = true           │
│ recommendation_v2 = false     │
└──────────────┬────────────────┘
               │
               │ Fetch Config
               ▼
┌───────────────────────────────┐
│ FeatureFlagRepository         │
│                               │
│ fetch()                       │
│ getBoolean()                  │
│ getString()                   │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│ FeatureFlagManager            │
│                               │
│ isNewCheckoutEnabled          │
│ isRecommendationV2Enabled     │
└──────────────┬────────────────┘
               │
        ┌──────┴───────┐
        ▼              ▼
   ViewModel        Use Case
        │              │
        └──────┬───────┘
               ▼
              UI
```

Không nên để mọi màn hình trực tiếp gọi Remote Config hoặc API.

Thay vào đó nên có một abstraction như:

```text
Remote Config
      ↓
Repository
      ↓
FeatureFlagManager
      ↓
Domain / ViewModel
      ↓
UI
```

Cách này giúp code dễ test và dễ thay đổi provider.

---

# 6. Ví dụ Feature Flag đơn giản trong Android

Ta có tính năng:

```text
New Home Screen
```

Tạo model:

```kotlin
data class FeatureFlags(
    val newHomeEnabled: Boolean = false,
    val newCheckoutEnabled: Boolean = false
)
```

Sau đó:

```kotlin
class FeatureFlagManager(
    private var flags: FeatureFlags = FeatureFlags()
) {

    fun update(newFlags: FeatureFlags) {
        flags = newFlags
    }

    fun isNewHomeEnabled(): Boolean {
        return flags.newHomeEnabled
    }

    fun isNewCheckoutEnabled(): Boolean {
        return flags.newCheckoutEnabled
    }
}
```

Sử dụng:

```kotlin
if (featureFlagManager.isNewHomeEnabled()) {
    showNewHome()
} else {
    showOldHome()
}
```

---

# 7. Feature Flag trong Jetpack Compose

Ví dụ:

```kotlin
@Composable
fun HomeScreen(
    newHomeEnabled: Boolean
) {
    if (newHomeEnabled) {
        NewHomeScreen()
    } else {
        LegacyHomeScreen()
    }
}
```

ViewModel:

```kotlin
class HomeViewModel(
    featureFlagManager: FeatureFlagManager
) : ViewModel() {

    val newHomeEnabled =
        featureFlagManager.isNewHomeEnabled()
}
```

UI:

```kotlin
@Composable
fun HomeRoute(
    viewModel: HomeViewModel
) {
    HomeScreen(
        newHomeEnabled = viewModel.newHomeEnabled
    )
}
```

Điểm quan trọng là UI chỉ cần biết:

```text
newHomeEnabled = true / false
```

UI không cần biết flag đến từ:

```text
Firebase
API
SharedPreferences
BuildConfig
Local config
```

---

# 8. Feature Flag lấy từ server

Một API có thể trả:

```json
{
  "features": {
    "new_home": true,
    "new_checkout": false,
    "ai_recommendation": true
  }
}
```

Android gọi:

```text
GET /api/config
```

Flow:

```text
Application Start
      ↓
Load cached flags
      ↓
Render UI
      ↓
Fetch remote flags
      ↓
Fetch success?
   /         \
 yes          no
  ↓            ↓
Save cache   Keep cache
  ↓
Update state
```

Đây thường là chiến lược tốt hơn:

```text
Start app
   ↓
Local cache
   ↓
UI xuất hiện nhanh
   ↓
fetch remote config
   ↓
update cache
```

thay vì:

```text
Start app
   ↓
chờ network
   ↓
chờ config
   ↓
mới render UI
```

Cách thứ hai có thể làm startup chậm.

---

# 9. Default Value

Feature Flag phải có **default value**.

Ví dụ:

```kotlin
const val DEFAULT_NEW_PAYMENT_ENABLED = false
```

Nếu server không phản hồi:

```text
Server unavailable
        ↓
Default / Cached value
        ↓
App vẫn hoạt động
```

Đối với feature có rủi ro cao, thường dùng:

```text
default = false
```

Ví dụ:

```text
new_payment = false
experimental_ai = false
new_checkout = false
```

Điều này tuân theo nguyên tắc:

> Khi cấu hình không xác định, ứng dụng quay về hành vi an toàn.

---

# 10. Cached Feature Flag

Không nên phụ thuộc hoàn toàn vào network.

Ví dụ:

```text
Remote Config
     ↓
 Feature Flag
     ↓
 Local Cache
     ↓
 Android App
```

Lần sau mở app:

```text
App start
   ↓
read cached flag
   ↓
render
   ↓
fetch latest flag
```

Pseudo-code:

```kotlin
suspend fun loadFlags(): FeatureFlags {

    val cached = localDataSource.getFlags()

    return try {
        val remote = remoteDataSource.getFlags()

        localDataSource.saveFlags(remote)

        remote
    } catch (e: Exception) {
        cached
    }
}
```

---

# 11. Feature Flag và Lifecycle

Đây là một vấn đề dễ bị bỏ qua.

Giả sử user đang checkout:

```text
Checkout Screen
      ↓
new_checkout = true
```

Trong lúc user đang nhập thông tin:

```text
Remote Config refresh
      ↓
new_checkout = false
```

Nếu UI lập tức đổi:

```text
NewCheckout
    ↓
OldCheckout
```

user có thể mất dữ liệu.

Vì vậy một số flag nên được **snapshot theo session**.

Ví dụ:

```kotlin
class CheckoutViewModel(
    featureFlagManager: FeatureFlagManager
) : ViewModel() {

    val useNewCheckout =
        featureFlagManager.isNewCheckoutEnabled()
}
```

Giá trị được xác định khi flow checkout bắt đầu.

Sau đó không đổi giữa chừng.

Flow tốt hơn:

```text
Start Checkout
      ↓
Read Feature Flag
      ↓
Snapshot value
      ↓
Checkout Session
      ↓
Không thay đổi cho tới khi flow kết thúc
```

---

# 12. Feature Flag và Process Death

Không nên giả định flag chỉ tồn tại trong RAM.

Android có thể kill process:

```text
App
 ↓
Background
 ↓
Memory pressure
 ↓
Process killed
 ↓
User quay lại
 ↓
Process recreated
```

Nếu flag quan trọng, nên có:

```text
Remote Flag
    ↓
Repository
    ↓
Persistent Cache
    ↓
DataStore / SharedPreferences
```

Sau khi process restart:

```text
Read cached flag
     ↓
Render đúng state
```

---

# 13. Feature Flag và Release Strategy

Một trong những ứng dụng quan trọng nhất của Feature Flag là **progressive rollout**.

Ví dụ:

```text
Release code
    ↓
Feature OFF
```

Sau đó:

```text
Internal users
      ↓
Feature ON
```

Ổn định:

```text
5% users
```

sau đó:

```text
10%
 ↓
25%
 ↓
50%
 ↓
100%
```

Quy trình:

```text
Deploy code
    ↓
Feature OFF
    ↓
Internal testing
    ↓
Enable 5%
    ↓
Monitor
    ↓
Enable 25%
    ↓
Monitor
    ↓
Enable 100%
```

Nếu có vấn đề:

```text
Crash tăng
   ↓
Disable Feature Flag
```

---

# 14. Kill Switch

Một loại Feature Flag đặc biệt là **Kill Switch**.

Ví dụ:

```text
payment_enabled = true
```

Nếu payment provider gặp lỗi:

```text
payment_enabled = false
```

App có thể chuyển sang:

```text
"Thanh toán hiện đang bảo trì."
```

Flow:

```text
Payment Provider
      │
      │ Problem
      ▼
Operations Team
      ↓
Disable Flag
      ↓
Android App
      ↓
Hide / Disable Payment
```

Kill Switch đặc biệt hữu ích với:

* Payment.
* AI services.
* Third-party APIs.
* Maps.
* Ads.
* Recommendation service.
* Push notification flow.
* Experimental features.

---

# 15. Feature Flag theo nhóm người dùng

Feature Flag không nhất thiết áp dụng cho mọi user.

Ví dụ:

```text
new_home = ON
```

nhưng chỉ với:

```text
Internal testers
```

hoặc:

```text
Beta users
```

hoặc:

```text
10% users
```

hoặc:

```text
Android >= 15
```

hoặc:

```text
Country = Vietnam
```

Ví dụ logic:

```text
                 User
                   │
         ┌─────────┴──────────┐
         │                    │
     Beta User            Normal User
         │                    │
      New UI                Old UI
```

---

# 16. Feature Flag và A/B Testing

Feature Flag và A/B Testing liên quan nhưng không hoàn toàn giống nhau.

### Feature Flag

Mục tiêu chính:

```text
Có bật feature hay không?
```

Ví dụ:

```text
new_home = true
```

### A/B Testing

Mục tiêu:

```text
Phiên bản nào tốt hơn?
```

Ví dụ:

```text
Group A
   ↓
Old Home

Group B
   ↓
New Home
```

Sau đó so sánh:

```text
conversion
retention
click rate
purchase rate
```

Feature Flag thường là nền tảng giúp triển khai A/B Testing.

---

# 17. Feature Flag và Remote Config

Một hệ thống phổ biến:

```text
Firebase Remote Config
           ↓
FeatureFlagRepository
           ↓
FeatureFlagManager
           ↓
ViewModel
           ↓
Compose UI
```

Ví dụ flag:

```text
new_home_enabled
```

Pseudo-code:

```kotlin
val enabled =
    remoteConfig.getBoolean("new_home_enabled")
```

Sau đó expose ra domain:

```kotlin
fun isNewHomeEnabled(): Boolean {
    return remoteConfig.getBoolean(
        "new_home_enabled"
    )
}
```

Tuy nhiên nên tránh việc toàn bộ codebase trực tiếp phụ thuộc vào Remote Config.

---

# 18. Abstraction tốt hơn

Không nên:

```kotlin
firebaseRemoteConfig
    .getBoolean("new_home_enabled")
```

xuất hiện ở hàng chục màn hình.

Nên tạo interface:

```kotlin
interface FeatureFlagProvider {

    fun isNewHomeEnabled(): Boolean

    fun isNewCheckoutEnabled(): Boolean
}
```

Implementation:

```kotlin
class RemoteFeatureFlagProvider(
    private val remoteConfig: RemoteConfig
) : FeatureFlagProvider {

    override fun isNewHomeEnabled(): Boolean {
        return remoteConfig.getBoolean(
            "new_home_enabled"
        )
    }

    override fun isNewCheckoutEnabled(): Boolean {
        return remoteConfig.getBoolean(
            "new_checkout_enabled"
        )
    }
}
```

UI chỉ phụ thuộc:

```text
FeatureFlagProvider
```

thay vì phụ thuộc trực tiếp:

```text
Firebase SDK
```

---

# 19. Test Feature Flag

Một feature có flag thường cần test ít nhất hai trạng thái.

```text
Feature OFF
Feature ON
```

Ví dụ:

```kotlin
@Test
fun `show legacy home when feature disabled`() {

    val flags = FakeFeatureFlags(
        newHomeEnabled = false
    )

    val result = createHome(flags)

    assertEquals(
        HomeType.LEGACY,
        result
    )
}
```

Và:

```kotlin
@Test
fun `show new home when feature enabled`() {

    val flags = FakeFeatureFlags(
        newHomeEnabled = true
    )

    val result = createHome(flags)

    assertEquals(
        HomeType.NEW,
        result
    )
}
```

Test matrix:

| Flag           | Network | Kỳ vọng               |
| -------------- | ------- | --------------------- |
| OFF            | Online  | Old feature           |
| ON             | Online  | New feature           |
| OFF            | Offline | Old feature           |
| ON cached      | Offline | New feature           |
| Missing config | Offline | Default safe behavior |

---

# 20. Debug Feature Flag

Một màn hình debug nội bộ rất hữu ích.

Ví dụ:

```text
Developer Settings

Feature Flags

[ON ] New Home
[OFF] New Checkout
[ON ] Recommendation V2
[OFF] Experimental AI
```

Developer có thể test nhanh:

```text
OFF
 ↓
Old Flow

ON
 ↓
New Flow
```

mà không phải liên tục thay Remote Config production.

---

# 21. Sai lầm thường gặp

## 21.1 Không có default value

Sai:

```text
Remote flag missing
       ↓
App không biết phải làm gì
```

Đúng:

```text
Remote flag missing
       ↓
Safe default
```

---

## 21.2 Fetch config trước khi render toàn bộ app

Sai:

```text
Launch
  ↓
Network
  ↓
Remote Config
  ↓
UI
```

Network chậm sẽ làm startup chậm.

Tốt hơn:

```text
Launch
  ↓
Cached flags
  ↓
UI
  ↓
refresh flags
```

---

## 21.3 Thay đổi flag giữa một transaction

Ví dụ user đang thanh toán mà UI tự đổi giữa:

```text
Payment V1
```

và:

```text
Payment V2
```

có thể gây mất state.

Nên snapshot flag khi bắt đầu flow.

---

## 21.4 Feature Flag tồn tại vĩnh viễn

Một flag:

```text
new_home_enabled
```

được rollout 100% từ một năm trước nhưng code vẫn chứa:

```kotlin
if (newHomeEnabled) {
    NewHome()
} else {
    OldHome()
}
```

Điều này tạo **technical debt**.

Sau khi rollout ổn định:

```text
Old implementation
       ↓
remove

Feature Flag
       ↓
remove

New implementation
       ↓
becomes default
```

---

# 22. Feature Flag Debt

Nếu cứ thêm flag:

```text
flag_a
flag_b
flag_c
flag_d
flag_e
...
```

sẽ làm số lượng trạng thái tăng mạnh.

Ví dụ 3 boolean flags:

```text
2³ = 8 combinations
```

10 flags:

```text
2¹⁰ = 1024 combinations
```

Không thể test mọi tổ hợp.

Do đó Feature Flag phải có lifecycle:

```text
Create
  ↓
Develop
  ↓
Test
  ↓
Rollout
  ↓
100%
  ↓
Cleanup
  ↓
Delete flag
```

---

# 23. Quy trình Feature Flag tốt

```text
┌─────────────────────┐
│ 1. Create Flag      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 2. Default OFF      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 3. Develop Feature  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 4. Internal Test    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 5. Gradual Rollout  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 6. Monitor          │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 7. 100% Rollout     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 8. Remove Old Code  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 9. Delete Flag      │
└─────────────────────┘
```

---

# 24. Ảnh hưởng đến UX

Feature Flag có thể cải thiện UX vì team có thể:

* Rollout feature từ từ.
* Tắt feature gặp lỗi.
* Giảm số user bị ảnh hưởng khi có bug.
* Test UI mới trên nhóm nhỏ.
* Quay về implementation ổn định.

Nhưng nếu thiết kế sai, user có thể gặp:

```text
Mở app
 ↓
UI A

Remote Config update
 ↓
UI B

Rotate
 ↓
UI A
```

Đây là trải nghiệm rất khó hiểu.

Feature Flag vì vậy phải được tích hợp với state management một cách có chủ đích.

---

# 25. Ảnh hưởng đến Reliability

Feature Flag có thể đóng vai trò như một lớp bảo vệ:

```text
Third-party service lỗi
        ↓
Feature Flag OFF
        ↓
Disable integration
        ↓
Core app vẫn hoạt động
```

Ví dụ:

```text
AI Recommendation lỗi

        ↓

ai_recommendation_enabled = false

        ↓

App dùng recommendation mặc định
```

Thay vì:

```text
AI service lỗi
      ↓
Home Screen lỗi
```

---

# 26. Ảnh hưởng đến Maintainability

Feature Flag cải thiện release flexibility nhưng cũng có thể làm code phức tạp.

Ví dụ:

```kotlin
if (flagA) {

    if (flagB) {

        if (flagC) {
            ...
        }
    }
}
```

Đây là dấu hiệu cần refactor.

Feature Flag nên:

* Có owner.
* Có mục đích rõ ràng.
* Có ngày tạo.
* Có thời điểm dự kiến xóa.
* Có dashboard quản lý.
* Có test cho ON/OFF.
* Được xóa sau rollout.

---

# 27. Feature Flag và Performance

Không nên gọi server mỗi lần kiểm tra:

```kotlin
if (remoteApi.isFeatureEnabled()) {
    ...
}
```

Ví dụ nếu UI compose lại nhiều lần:

```text
Recomposition
     ↓
Network Call
     ↓
Recomposition
     ↓
Network Call
```

Đây là thiết kế sai.

Nên:

```text
Remote Server
     ↓
Fetch periodically
     ↓
Repository
     ↓
Memory / Persistent Cache
     ↓
UI State
```

Việc kiểm tra flag trong UI nên gần như:

```text
O(1)
```

chỉ là đọc state local.

---

# 28. Một implementation thực tế hơn

```kotlin
data class FeatureFlagState(
    val newHomeEnabled: Boolean = false,
    val aiRecommendationEnabled: Boolean = false
)
```

Repository:

```kotlin
class FeatureFlagRepository(
    private val remoteDataSource: FeatureFlagRemoteDataSource,
    private val localDataSource: FeatureFlagLocalDataSource
) {

    suspend fun refresh(): FeatureFlagState {

        return try {

            val remote = remoteDataSource.fetch()

            localDataSource.save(remote)

            remote

        } catch (e: Exception) {

            localDataSource.load()
        }
    }
}
```

ViewModel:

```kotlin
class MainViewModel(
    private val repository: FeatureFlagRepository
) : ViewModel() {

    private val _flags =
        MutableStateFlow(FeatureFlagState())

    val flags =
        _flags.asStateFlow()

    fun refreshFlags() {

        viewModelScope.launch {
            _flags.value =
                repository.refresh()
        }
    }
}
```

Compose:

```kotlin
@Composable
fun MainScreen(
    viewModel: MainViewModel
) {

    val flags by
        viewModel.flags.collectAsState()

    if (flags.newHomeEnabled) {
        NewHomeScreen()
    } else {
        LegacyHomeScreen()
    }
}
```

Luồng dữ liệu:

```text
Remote Config
      ↓
Repository
      ↓
StateFlow
      ↓
ViewModel
      ↓
Compose
      ↓
New / Legacy UI
```

---

# 29. Thực hành

## Bài thực hành: New Home Feature Flag

### Bước 1 — Tạo flag

```kotlin
data class FeatureFlags(
    val newHomeEnabled: Boolean = false
)
```

### Bước 2 — Tạo provider

```kotlin
interface FeatureFlagProvider {

    fun isNewHomeEnabled(): Boolean
}
```

### Bước 3 — Tạo fake provider

```kotlin
class FakeFeatureFlagProvider(
    private val enabled: Boolean
) : FeatureFlagProvider {

    override fun isNewHomeEnabled(): Boolean {
        return enabled
    }
}
```

### Bước 4 — Render UI

```kotlin
@Composable
fun HomeScreen(
    flags: FeatureFlagProvider
) {

    if (flags.isNewHomeEnabled()) {

        Text(
            text = "New Home"
        )

    } else {

        Text(
            text = "Legacy Home"
        )
    }
}
```

### Bước 5 — Test cả hai trạng thái

```text
Flag OFF
   ↓
Legacy Home

Flag ON
   ↓
New Home
```

---

# 30. Ghi chú 5 dòng về Feature Flag

Có thể ghi vào README:

> Feature Flag là cơ chế cho phép bật hoặc tắt một tính năng độc lập với việc phát hành phiên bản ứng dụng mới. Android app có thể lấy flag từ local config, backend hoặc Remote Config. Flag thường được cache để ứng dụng không phụ thuộc hoàn toàn vào network. Feature Flag rất hữu ích cho gradual rollout, kill switch và experimental features. Sau khi rollout hoàn tất, flag cũ cần được xóa để tránh technical debt.

---

# 31. Artifact cho Portfolio

Có thể xây một project nhỏ:

```text
FeatureFlagDemo/
│
├── featureflag/
│   ├── FeatureFlagProvider.kt
│   ├── FeatureFlagRepository.kt
│   └── FeatureFlags.kt
│
├── data/
│   ├── FeatureFlagRemoteDataSource.kt
│   └── FeatureFlagLocalDataSource.kt
│
├── ui/
│   ├── LegacyHomeScreen.kt
│   └── NewHomeScreen.kt
│
├── test/
│   └── FeatureFlagTest.kt
│
└── README.md
```

README có thể mô tả:

```text
Feature OFF
      ↓
Legacy UI

Feature ON
      ↓
New UI

Remote unavailable
      ↓
Cached / Default configuration
```

### Screenshot nên có

```text
Screenshot 1
Feature OFF → Old Home

Screenshot 2
Feature ON → New Home

Screenshot 3
Developer Feature Flag Panel
```

Đây là artifact nhỏ nhưng thể hiện được:

* Architecture.
* State management.
* Dependency inversion.
* Async configuration.
* Offline fallback.
* Testing.
* Release strategy.

---

# 32. Bài tập

## Bài 1

Giải thích bằng lời của bạn:

> Tại sao Feature Flag giúp giảm release risk?

---

## Bài 2

Thiết kế flag:

```text
new_profile_screen
```

với:

```text
default = false
```

Sau đó triển khai:

```text
false
 ↓
Profile V1

true
 ↓
Profile V2
```

---

## Bài 3

Giả sử:

```text
new_payment_enabled = true
```

nhưng server Remote Config không truy cập được.

Hãy giải thích app nên:

```text
crash
```

hay:

```text
dùng cached/default value
```

và tại sao.

---

## Bài 4

Thiết kế release:

```text
Internal
 ↓
5%
 ↓
25%
 ↓
50%
 ↓
100%
```

và mô tả metric cần theo dõi:

```text
Crash rate
ANR
API error
Conversion
User feedback
```

---

# 33. Checklist hoàn thành

* [ ] Giải thích được Feature Flag là gì.
* [ ] Biết sự khác nhau giữa Feature Flag và A/B Testing.
* [ ] Tạo được một boolean feature flag.
* [ ] Có default value an toàn.
* [ ] Không để UI trực tiếp phụ thuộc Remote Config SDK.
* [ ] Có `FeatureFlagProvider` hoặc abstraction tương đương.
* [ ] Có local/cache fallback.
* [ ] Test được trạng thái `ON`.
* [ ] Test được trạng thái `OFF`.
* [ ] Test trường hợp network/config lỗi.
* [ ] Không fetch network mỗi lần đọc flag.
* [ ] Xem xét lifecycle khi flag thay đổi.
* [ ] Không thay implementation giữa một transaction quan trọng.
* [ ] Có kế hoạch gradual rollout.
* [ ] Có khả năng kill switch với feature quan trọng.
* [ ] Có kế hoạch xóa flag sau khi rollout hoàn tất.
* [ ] Có README hoặc diagram cho portfolio.

---

# 34. Ghi chú production

Khi sử dụng Feature Flag trong production, cần trả lời được các câu hỏi sau:

### State

* Flag được load lúc nào?
* Có được cache không?
* Khi process bị kill thì sao?
* Flag thay đổi giữa một user flow thì sao?

### Network

* Remote Config/API timeout thì sao?
* Offline dùng giá trị nào?
* Default value có an toàn không?

### UX

* UI có nhảy giữa feature cũ và mới không?
* User đang nhập dữ liệu có bị reset không?
* Feature bị disable có fallback UI không?

### Testing

Phải test tối thiểu:

```text
Flag ON
Flag OFF
Remote failure
Cached config
Missing config
Process recreation
```

### Release

Trước khi rollout:

```text
Feature default OFF
        ↓
Internal test
        ↓
Small rollout
        ↓
Monitor metrics
        ↓
Gradual increase
        ↓
100%
        ↓
Remove old code
        ↓
Remove flag
```

---

# 35. Kết luận

Feature Flag không đơn giản chỉ là:

```kotlin
if (enabled)
```

mà là một phần của chiến lược **release và vận hành ứng dụng**.

Một Android Developer nên nhìn Feature Flag theo toàn bộ luồng:

```text
             ┌─────────────────┐
             │ Remote Config   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Flag Repository │
             └────────┬────────┘
                      │
                 cache/default
                      │
                      ▼
             ┌─────────────────┐
             │ Feature Manager │
             └────────┬────────┘
                      │
             ┌────────┴─────────┐
             ▼                  ▼
        Feature OFF        Feature ON
             │                  │
             ▼                  ▼
        Stable Flow          New Flow
             │                  │
             └────────┬─────────┘
                      ▼
                Monitoring
                      │
            ┌─────────┴─────────┐
            ▼                   ▼
         Stable              Problem
            │                   │
            ▼                   ▼
       Rollout ↑             Flag OFF
            │
            ▼
          100%
            │
            ▼
       Remove Flag
```

Điểm quan trọng nhất cần nhớ là:

> **Feature Flag giúp tách việc deploy code khỏi việc release feature.**

Code có thể đã nằm trong ứng dụng, nhưng team vẫn kiểm soát **khi nào, với ai và trong điều kiện nào** tính năng thực sự được kích hoạt. Đây là một kỹ thuật quan trọng để giảm rủi ro release, hỗ trợ gradual rollout và xây dựng Android app ổn định hơn.
