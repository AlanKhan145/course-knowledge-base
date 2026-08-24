# 006 — Remote Config

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 09 — Common Services      |
| **Nhóm nội dung**       | Firebase                         |
| **Nguồn roadmap**       | Common Services / Firebase       |
| **Loại bài**            | Service                          |
| **Thứ tự trong module** | 006                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

**Firebase Remote Config** là dịch vụ cho phép thay đổi một số giá trị cấu hình và hành vi của ứng dụng từ phía server mà **không cần phát hành APK/AAB mới**.

Một số trường hợp thường gặp:

* Bật/tắt một feature.
* Thay đổi text hoặc thông điệp.
* Thay đổi giới hạn mặc định.
* Chỉnh một số tham số UX.
* Tạo kill switch khi feature gặp lỗi.
* Triển khai feature theo từng nhóm user.
* Điều chỉnh onboarding.
* Thực hiện A/B testing khi kết hợp với các dịch vụ liên quan.
* Thay đổi cấu hình release mà không cần chờ người dùng cập nhật app.

Flow tổng quát:

```text
Firebase Console
      │
      │ publish config
      ▼
Firebase Remote Config
      │
      │ fetch
      ▼
Android App
      │
      ▼
RemoteConfigRepository
      │
      ▼
Domain / ViewModel
      │
      ▼
UI / Feature Behavior
```

Remote Config không nên được xem là một database chung hay một nơi lưu dữ liệu bí mật.

Mục tiêu đúng hơn là:

> **Điều khiển các tham số có thể thay đổi từ xa nhưng vẫn giữ ứng dụng an toàn, có default value và hoạt động được khi offline.**

---

# 2. Mục tiêu học tập

Sau bài học, bạn có thể:

* [ ] Giải thích được Firebase Remote Config bằng ngôn ngữ của mình.
* [ ] Hiểu khái niệm parameter, default value, fetch và activate.
* [ ] Hiểu sự khác nhau giữa local default và remote value.
* [ ] Thiết kế feature flag bằng Remote Config.
* [ ] Sử dụng Remote Config mà không coupling toàn bộ app trực tiếp với Firebase SDK.
* [ ] Hiểu Remote Config không phải nơi lưu secret.
* [ ] Xử lý trường hợp fetch thất bại.
* [ ] Xử lý offline.
* [ ] Hiểu ảnh hưởng tới app startup.
* [ ] Biết cách dùng kill switch.
* [ ] Thiết kế fallback an toàn.
* [ ] Test behavior khi config thay đổi.
* [ ] Viết release checklist liên quan Remote Config.
* [ ] Tạo được artifact nhỏ cho portfolio.

---

# 3. Remote Config là gì?

Thông thường, một giá trị được hard-code trong ứng dụng:

```kotlin
val maxItems = 10
```

Muốn đổi thành:

```kotlin
val maxItems = 20
```

developer phải:

```text
Sửa code
   │
   ▼
Build app
   │
   ▼
QA
   │
   ▼
Publish Store
   │
   ▼
User update app
```

Với Remote Config:

```text
Firebase Console

max_items = 20
       │
       ▼
Publish
       │
       ▼
Android fetch config
       │
       ▼
App dùng value mới
```

Không cần release binary mới nếu code đã hỗ trợ parameter đó.

---

# 4. Remote Config nằm ở đâu trong app?

Remote Config nên được xem là một phần của **configuration layer**.

```text
                  Application
┌────────────────────────────────────┐
│                                    │
│ UI                                 │
│  │                                 │
│  ▼                                 │
│ ViewModel                          │
│  │                                 │
│  ▼                                 │
│ Use Case                           │
│  │                                 │
│  ▼                                 │
│ Configuration Repository           │
│                                    │
└─────────────────┬──────────────────┘
                  │
                  ▼
         Firebase Remote Config
```

Không nên để UI truy cập Firebase trực tiếp ở khắp nơi:

```text
HomeScreen
CheckoutScreen
ProfileScreen
SettingsScreen
      │
      ▼
FirebaseRemoteConfig
```

Tốt hơn:

```text
UI
 │
 ▼
ViewModel
 │
 ▼
FeatureConfigRepository
 │
 ▼
Firebase Remote Config
```

---

# 5. Ba nguồn giá trị quan trọng

Một parameter Remote Config có thể có nhiều nguồn.

Có thể hình dung:

```text
Parameter
   │
   ├── Static Default
   │
   ├── Remote Default
   │
   └── Conditional Remote Value
```

Trong app, tư duy quan trọng nhất là:

```text
Remote Value available?
       │
   ┌───┴───┐
   │       │
  Yes      No
   │       │
   ▼       ▼
Remote    Local Default
```

Ứng dụng phải luôn có behavior hợp lệ ngay cả khi Firebase không hoạt động.

---

# 6. Default Value

Không nên viết app theo kiểu:

```text
Remote Config unavailable
       │
       ▼
Không có config
       │
       ▼
App không biết phải làm gì
```

Nên luôn có:

```text
Safe Local Defaults
```

Ví dụ:

```xml
<defaultsMap>

    new_checkout_enabled = false

    max_cart_items = 20

    welcome_message = "Chào mừng bạn"

</defaultsMap>
```

Hoặc định nghĩa trong code.

Nguyên tắc:

> **Remote Config phải override một default hợp lệ, không phải tạo ra behavior duy nhất của ứng dụng.**

---

# 7. Ví dụ parameter

Ví dụ Firebase Console chứa:

```text
new_home_enabled       = false

max_cart_items         = 20

welcome_message        = Xin chào!

maintenance_enabled    = false
```

Các kiểu dữ liệu thường gặp:

```text
Boolean
String
Long
Double
JSON encoded as String
```

---

# 8. Naming Convention

Nên đặt tên parameter có cấu trúc.

Ví dụ:

```text
feature_new_home_enabled

checkout_max_items

onboarding_title

maintenance_enabled
```

Không nên dùng:

```text
flag1
abc
newThing
config123
```

Một convention tốt:

```text
<domain>_<purpose>_<type/state>
```

Ví dụ:

```text
home_new_layout_enabled

payment_retry_limit

profile_avatar_max_size
```

---

# 9. Feature Flag

Một ứng dụng có feature mới:

```text
New Checkout
```

Thay vì hard-code:

```kotlin
if (true) {
    NewCheckout()
}
```

có thể dùng:

```text
new_checkout_enabled
```

Flow:

```text
Remote Config
       │
       ▼
new_checkout_enabled
       │
   ┌───┴───┐
   │       │
 true     false
   │       │
   ▼       ▼
 New       Old
Checkout  Checkout
```

Đây là một dạng **feature flag**.

---

# 10. Ví dụ domain model

Thay vì truyền raw key khắp ứng dụng:

```kotlin
remoteConfig.getBoolean(
    "new_checkout_enabled"
)
```

ở nhiều nơi, nên tạo model:

```kotlin
data class AppConfig(
    val newCheckoutEnabled: Boolean,
    val maxCartItems: Int,
    val maintenanceEnabled: Boolean
)
```

Repository trả về:

```text
Firebase Values
      │
      ▼
RemoteConfigMapper
      │
      ▼
AppConfig
      │
      ▼
Domain / UI
```

---

# 11. Tạo abstraction

Ví dụ:

```kotlin
interface FeatureConfigRepository {

    suspend fun refresh()

    fun isNewCheckoutEnabled(): Boolean

    fun getMaxCartItems(): Int

    fun isMaintenanceEnabled(): Boolean
}
```

Implementation:

```kotlin
class FirebaseFeatureConfigRepository(
    private val remoteConfig: FirebaseRemoteConfig
) : FeatureConfigRepository {

    override suspend fun refresh() {
        // Fetch + activate.
    }

    override fun isNewCheckoutEnabled(): Boolean {
        return remoteConfig.getBoolean(
            "new_checkout_enabled"
        )
    }

    override fun getMaxCartItems(): Int {
        return remoteConfig
            .getLong("max_cart_items")
            .toInt()
    }

    override fun isMaintenanceEnabled(): Boolean {
        return remoteConfig.getBoolean(
            "maintenance_enabled"
        )
    }
}
```

---

# 12. Vì sao cần Repository?

Không abstraction:

```text
HomeViewModel
   │
   ▼
FirebaseRemoteConfig

CheckoutViewModel
   │
   ▼
FirebaseRemoteConfig

SettingsViewModel
   │
   ▼
FirebaseRemoteConfig
```

Kết quả:

* SDK coupling cao.
* Key bị lặp.
* Dễ typo.
* Khó test.
* Khó migrate dịch vụ.

Có repository:

```text
Application
    │
    ▼
FeatureConfigRepository
    │
    ▼
FirebaseRemoteConfig
```

Ứng dụng không cần biết nguồn config cụ thể.

---

# 13. Fetch và Activate

Remote Config thường có hai bước quan trọng:

```text
Fetch
   │
   ▼
Download remote values

Activate
   │
   ▼
Áp dụng values vừa fetch
```

Có thể hình dung:

```text
Server
  │
  │ fetch()
  ▼
Fetched Values
  │
  │ activate()
  ▼
Active Values
  │
  ▼
Application
```

Điều này giúp developer kiểm soát khi nào config mới thực sự được áp dụng.

---

# 14. fetchAndActivate()

Một flow phổ biến:

```text
fetch
  +
activate
```

được thực hiện cùng nhau:

```kotlin
remoteConfig
    .fetchAndActivate()
```

Concept:

```text
App
 │
 ▼
fetchAndActivate()
 │
 ├── Download config
 │
 └── Activate
       │
       ▼
    New config
```

---

# 15. Không fetch liên tục

Một anti-pattern:

```text
Every screen recomposition
       │
       ▼
fetch Remote Config
```

Hoặc:

```text
onResume()
   │
   ▼
Fetch

onResume()
   │
   ▼
Fetch

onResume()
   │
   ▼
Fetch
```

Remote Config không nên được coi như REST API realtime.

Nên có chiến lược:

```text
App startup
      │
      ▼
Fetch nếu cần
      │
      ▼
Cache
      │
      ▼
Các screen sử dụng cached config
```

---

# 16. Minimum Fetch Interval

Remote Config có cơ chế hạn chế tần suất fetch.

Concept:

```text
Last fetch
   │
   ▼
Enough time passed?
   │
 ┌─┴─┐
 │   │
No  Yes
 │   │
 ▼   ▼
Use  Fetch
Cache Server
```

Trong development có thể dùng interval ngắn hơn để test.

Trong production nên tránh fetch quá thường xuyên.

---

# 17. App Startup Strategy

Một câu hỏi quan trọng:

> Có cần đợi Remote Config trước khi hiển thị UI không?

Sai:

```text
App Launch
   │
   ▼
Wait for Remote Config
   │
   ▼
Network slow
   │
   ▼
Splash 8 seconds
```

UX sẽ rất kém.

Tốt hơn:

```text
App Launch
   │
   ├── Load local/default config
   │
   ▼
Render UI
   │
   └── Fetch config async
            │
            ▼
       Update behavior
```

---

# 18. Startup an toàn

Có thể dùng pattern:

```text
Local Default
      │
      ▼
App Startup
      │
      ▼
UI usable immediately
      │
      ▼
Remote Config refresh
      │
      ▼
Apply new config
```

Không để remote network trở thành dependency bắt buộc cho màn hình đầu tiên nếu không thực sự cần.

---

# 19. Cache-First Strategy

Một strategy phổ biến:

```text
          App Launch
              │
              ▼
       Cached Config
              │
              ▼
           Render
              │
              ▼
        Fetch Remote
              │
              ▼
        Activate New
```

Đây là tư duy tương tự:

```text
stale-while-revalidate
```

Ứng dụng có dữ liệu usable ngay, sau đó cập nhật khi config mới xuất hiện.

---

# 20. Feature Flag và UI

Ví dụ:

```text
feature_new_profile_enabled
```

UI:

```kotlin
if (
    configRepository
        .isNewProfileEnabled()
) {

    NewProfileScreen()

} else {

    LegacyProfileScreen()
}
```

Nhưng không nên gọi repository trực tiếp từ Composable ở mọi lần render.

Tốt hơn:

```text
Repository
    │
    ▼
ViewModel
    │
    ▼
UiState
    │
    ▼
Compose
```

---

# 21. Remote Config và State

Ví dụ:

```kotlin
data class HomeUiState(
    val newHomeEnabled: Boolean = false
)
```

Flow:

```text
Remote Config
      │
      ▼
Repository
      │
      ▼
ViewModel
      │
      ▼
StateFlow<HomeUiState>
      │
      ▼
Compose
```

Điều này giúp UI phụ thuộc vào state thay vì SDK.

---

# 22. Dynamic UI Configuration

Remote Config có thể điều khiển một số UX parameter.

Ví dụ:

```text
home_banner_enabled = true

home_banner_title =
"Ưu đãi cuối tuần"
```

Flow:

```text
Remote Config
      │
      ▼
HomeConfig
      │
      ▼
HomeUiState
      │
      ▼
Banner
```

Tuy nhiên không nên biến toàn bộ UI thành một hệ thống dựng layout động từ Remote Config nếu không cần thiết.

---

# 23. Remote Config không phải CMS

Anti-pattern:

```text
Remote Config
     │
     ├── 500 product descriptions
     ├── 200 articles
     ├── entire UI structure
     └── user database
```

Remote Config không được thiết kế để thay thế:

* CMS.
* Database.
* Backend API.
* Firestore.
* Content service.

Nó phù hợp cho **configuration nhỏ và có giới hạn rõ ràng**.

---

# 24. Remote Config không phải nơi lưu Secret

Không nên lưu:

```text
API private key

database password

JWT signing secret

admin credential

payment secret
```

vào Remote Config.

Lý do:

```text
Remote Config Value
       │
       ▼
Android Client
       │
       ▼
Có thể bị đọc / reverse engineer
```

Nguyên tắc:

> **Bất kỳ giá trị nào gửi xuống client đều không còn là secret.**

---

# 25. Dùng Remote Config cho Kill Switch

Một trong các use case production quan trọng nhất:

```text
feature_payment_v2_enabled
```

Giả sử release:

```text
Payment V2
```

sau đó phát hiện bug nghiêm trọng.

Không có feature flag:

```text
Bug
 │
 ▼
Fix code
 │
 ▼
Build
 │
 ▼
Store review
 │
 ▼
User update
```

Có kill switch:

```text
Bug detected
      │
      ▼
Firebase Console
      │
      ▼
payment_v2_enabled = false
      │
      ▼
Publish
      │
      ▼
App fallback to Payment V1
```

---

# 26. Thiết kế Kill Switch đúng

Không chỉ cần:

```text
feature_enabled = false
```

Mà code phải có đường fallback thực sự.

Sai:

```kotlin
if (featureEnabled) {
    newFlow()
}
```

không có `else`.

Tốt hơn:

```kotlin
if (featureEnabled) {

    newFlow()

} else {

    stableFlow()
}
```

---

# 27. Feature Flag Lifecycle

Feature flag không nên sống mãi.

Lifecycle:

```text
Create flag
    │
    ▼
Development
    │
    ▼
Partial rollout
    │
    ▼
100% enabled
    │
    ▼
Stable
    │
    ▼
Remove flag
```

Nếu không dọn:

```text
Codebase
   │
   ├── flag_2019
   ├── flag_2020
   ├── flag_old_checkout
   ├── flag_checkout_test_2
   └── flag_temp_new_ui
```

sẽ tạo **configuration debt**.

---

# 28. Configuration Debt

Khi quá nhiều feature flags:

```text
Flag A
Flag B
Flag C
Flag D
```

Các tổ hợp có thể tăng rất nhanh.

Ví dụ:

```text
4 boolean flags
      │
      ▼
2⁴ = 16 combinations
```

8 flags:

```text
2⁸ = 256 combinations
```

Không thể test tất cả tổ hợp một cách thực tế.

Do đó feature flag phải:

* Có owner.
* Có mục đích.
* Có ngày review.
* Được xóa khi không cần.

---

# 29. Progressive Rollout

Có thể dùng config để triển khai feature theo từng nhóm.

Concept:

```text
Users
  │
  ├── 5%  → New Feature
  │
  └── 95% → Old Feature
```

Sau khi ổn định:

```text
5%
 ↓
20%
 ↓
50%
 ↓
100%
```

Flow:

```text
Release binary
      │
      ▼
Feature disabled
      │
      ▼
Enable 5%
      │
      ▼
Monitor
      │
      ▼
Increase rollout
```

Giúp giảm blast radius của bug.

---

# 30. Conditional Values

Remote Config có thể áp dụng value dựa trên condition.

Concept:

```text
Parameter:
new_home_enabled

Default:
false

Condition A:
App Version >= X
      ↓
true
```

Hoặc:

```text
Region A
   │
   ▼
Value X

Region B
   │
   ▼
Value Y
```

Điều quan trọng:

> Condition logic cũng là một phần của release logic và cần được kiểm soát cẩn thận.

---

# 31. App Version Condition

Ví dụ một config chỉ phù hợp app mới:

```text
minimum supported code:
v3.2
```

Nếu bật cho app `v3.0`:

```text
Remote Config
      │
      ▼
Old app
      │
      ▼
Không hiểu config
      │
      ▼
Bug
```

Nên condition:

```text
App version >= 3.2
        │
        ▼
Feature enabled
```

---

# 32. Backward Compatibility

Remote Config phải tương thích với nhiều phiên bản app đang tồn tại.

Ví dụ:

```text
Users:
v2.9
v3.0
v3.1
v3.2
```

Server config mới phải hỏi:

```text
App version nào hiểu parameter này?
```

Tư duy:

```text
Remote configuration
        │
        ▼
Old clients still exist
        │
        ▼
Backward compatibility required
```

---

# 33. Ví dụ Maintenance Mode

Parameter:

```text
maintenance_enabled = false
```

Khi backend maintenance:

```text
maintenance_enabled = true
```

Flow:

```text
App
 │
 ▼
Remote Config
 │
 ▼
maintenance_enabled?
 │
 ├── false
 │     └── Normal app
 │
 └── true
       └── MaintenanceScreen
```

---

# 34. Maintenance Mode cần thiết kế cẩn thận

Không nên:

```text
maintenance_enabled = true
       │
       ▼
Block toàn app
```

nếu người dùng vẫn cần:

* Logout.
* Xem dữ liệu offline.
* Truy cập help.
* Truy cập emergency feature.

Nên xác định:

```text
Feature-level maintenance
```

hoặc:

```text
Whole-app maintenance
```

rõ ràng.

---

# 35. Force Update Config

Có thể thiết kế parameter:

```text
min_supported_version
```

Flow:

```text
Current App Version
        │
        ▼
Compare
        │
        ▼
min_supported_version
        │
   ┌────┴────┐
   │         │
supported  outdated
   │         │
   ▼         ▼
Continue   Update UI
```

Tuy nhiên force update là UX có ảnh hưởng lớn.

Nên có:

```text
recommended_version

minimum_version
```

Ví dụ:

```text
version < minimum
      ↓
Force update

version < recommended
      ↓
Optional update
```

---

# 36. Không dựa hoàn toàn vào Remote Config cho Security

Sai:

```text
premium_feature_enabled = false
```

và nghĩ rằng user không thể mở premium feature.

Kẻ tấn công có thể sửa client.

Các kiểm tra security quan trọng vẫn phải nằm ở backend:

```text
Client flag
     │
     ▼
UX decision

Backend authorization
     │
     ▼
Security decision
```

Nguyên tắc:

> **Remote Config kiểm soát behavior client, không thay thế authorization server-side.**

---

# 37. Ví dụ E-commerce

Parameters:

```text
new_checkout_enabled = true

max_cart_items = 30

free_shipping_threshold = 500000

promotion_banner_enabled = true
```

Flow:

```text
Remote Config
      │
      ▼
CommerceConfig
      │
      ├── Checkout
      ├── Cart
      └── Home
```

Không nên:

```text
Remote Config
      │
      ▼
Quyết định trực tiếp giá cuối cùng
```

Giá và các luật tài chính quan trọng nên được backend xác nhận.

---

# 38. Remote Config và Business Rules

Phân biệt:

```text
Configuration
     │
     ├── max visible recommendations
     ├── UI feature enabled
     └── onboarding variation

Business Rule
     │
     ├── payment authorization
     ├── final product price
     ├── account permission
     └── inventory validity
```

Remote Config phù hợp hơn cho nhóm đầu tiên.

Các business rule quan trọng vẫn cần server authoritative.

---

# 39. Offline Behavior

Giả sử:

```text
App launch
    │
    ▼
No internet
```

Remote Config phải vẫn có:

```text
Local / cached value
```

Flow:

```text
No Network
   │
   ▼
Fetch Failed
   │
   ▼
Use Active / Default Config
   │
   ▼
App continues
```

Không nên:

```text
Fetch failed
   │
   ▼
Crash
```

---

# 40. Fetch Failure

Ví dụ:

```kotlin
try {

    configRepository.refresh()

} catch (e: Exception) {

    // Log nếu cần.
    // Tiếp tục dùng config hiện tại.
}
```

Tư duy:

```text
Refresh Config
      │
      ▼
Success?
  ┌───┴───┐
  │       │
 Yes      No
  │       │
  ▼       ▼
New     Existing
Config   Config
```

---

# 41. Invalid Configuration

Một vấn đề nguy hiểm là remote value hợp lệ về type nhưng sai về logic.

Ví dụ:

```text
max_retry = -10
```

hoặc:

```text
timeout_seconds = 999999
```

App không nên tin hoàn toàn remote value.

Có thể validate:

```kotlin
val retryCount =
    remoteConfig
        .getLong("max_retry")
        .coerceIn(0, 5)
        .toInt()
```

---

# 42. Configuration Validation

Flow tốt:

```text
Remote Value
      │
      ▼
Parser
      │
      ▼
Validator
      │
   ┌──┴──┐
   │     │
 Valid Invalid
   │     │
   ▼     ▼
 Use   Fallback
```

Ví dụ:

```text
max_cart_items
```

phải thỏa:

```text
1 <= value <= 100
```

---

# 43. Typed Configuration

Không nên để các string key và conversion rải rác khắp app.

Sai:

```kotlin
remoteConfig
    .getString("timeout")
    .toInt()
```

ở nhiều class.

Tốt hơn:

```kotlin
data class NetworkConfig(
    val timeoutSeconds: Int
)
```

Mapper:

```text
Firebase Value
      │
      ▼
Parse
      │
      ▼
Validate
      │
      ▼
NetworkConfig
```

---

# 44. JSON Config

Khi cấu hình có nhiều giá trị liên quan:

```json
{
  "title": "Summer Sale",
  "enabled": true,
  "maxItems": 5
}
```

có thể lưu JSON string.

Sau đó:

```text
Remote String
      │
      ▼
JSON Parser
      │
      ▼
Config Model
```

Nhưng nếu JSON trở nên quá lớn/phức tạp, có thể bạn đang dùng Remote Config như CMS.

---

# 45. Version Config Schema

Nếu JSON structure thay đổi:

```text
Schema v1
     │
     ▼
Schema v2
```

old app có thể không parse được.

Có thể thêm:

```json
{
  "version": 2,
  "..."
}
```

hoặc đảm bảo các field mới có default.

Nguyên tắc:

> Remote config schema cũng cần backward compatibility.

---

# 46. Concurrency

Không nên có nhiều nơi cùng refresh:

```text
HomeViewModel
     │
     ▼
refresh()

SettingsViewModel
     │
     ▼
refresh()

CheckoutViewModel
     │
     ▼
refresh()
```

Tốt hơn:

```text
Application / ConfigManager
        │
        ▼
Single refresh policy
        │
        ▼
Repository
```

---

# 47. Lifecycle

Remote Config không gắn trực tiếp với lifecycle của Activity.

Không nên:

```text
Activity rotate
      │
      ▼
Fetch again
```

Config nên thuộc application/data layer:

```text
Application
     │
     ▼
Config Repository
     │
     ▼
StateFlow
     │
     ▼
ViewModel
```

Rotate chỉ rebuild UI từ state hiện tại.

---

# 48. StateFlow cho Configuration

Ví dụ:

```kotlin
data class FeatureConfig(
    val newHomeEnabled: Boolean = false,
    val maintenanceEnabled: Boolean = false
)
```

Repository:

```text
Remote Config
     │
     ▼
FeatureConfig
     │
     ▼
StateFlow
```

ViewModel:

```text
StateFlow<FeatureConfig>
        │
        ▼
UiState
```

---

# 49. Khi config thay đổi giữa session

Một vấn đề UX:

```text
User đang checkout cũ
       │
       ▼
Remote config refresh
       │
       ▼
checkout_v2 = true
```

Có nên đổi UI ngay giữa flow?

Thường không nên.

Có thể phân loại:

```text
Config
  │
  ├── Safe to update live
  │
  │      └── banner text
  │
  └── Apply next session
         └── checkout architecture
```

---

# 50. Session-Stable Configuration

Với feature lớn:

```text
App session starts
       │
       ▼
Capture config snapshot
       │
       ▼
Use same config during flow
```

Ví dụ:

```text
Checkout starts with V1
       │
       ▼
Stay V1 until checkout ends
```

Không chuyển từ V1 sang V2 giữa payment flow.

---

# 51. Debugging

Có thể log:

```text
CONFIG_FETCH_STARTED

CONFIG_FETCH_SUCCESS

CONFIG_FETCH_FAILED

CONFIG_ACTIVATED

CONFIG_FALLBACK_USED
```

Ví dụ:

```text
Remote Config
      │
      ▼
fetch success
      │
      ▼
feature_new_home_enabled = true
```

Tuy nhiên không nên spam log mọi lần đọc parameter.

---

# 52. Debug Screen

Một app development/internal build có thể có màn:

```text
Remote Config Debug

new_home_enabled       true

maintenance_enabled    false

max_cart_items         20

Last fetch             success

Source                 remote
```

Rất hữu ích cho QA.

---

# 53. Tracking Config Source

Khi debug, nên biết value đến từ đâu.

Ví dụ:

```text
new_home_enabled

Value: true

Source:
REMOTE
```

hoặc:

```text
Source:
DEFAULT
```

Điều này giúp trả lời:

```text
"App có fetch config thành công không?"
```

---

# 54. Testing

Remote Config có thể test tốt hơn nếu có abstraction.

Ví dụ fake repository:

```kotlin
class FakeFeatureConfigRepository(
    var newCheckoutEnabled: Boolean
) : FeatureConfigRepository {

    override suspend fun refresh() = Unit

    override fun isNewCheckoutEnabled(): Boolean {
        return newCheckoutEnabled
    }
}
```

Test:

```kotlin
@Test
fun `new checkout appears when flag enabled`() {

    fakeConfig.newCheckoutEnabled = true

    // Assert UI state uses new checkout.
}
```

---

# 55. Test Flag OFF

Không chỉ test:

```text
Feature ON
```

Mà phải test cả:

```text
Feature OFF
```

Ví dụ:

```text
new_checkout_enabled = false
       │
       ▼
Legacy checkout works
```

Đường fallback phải được bảo vệ bằng test.

---

# 56. Test Fetch Failure

Scenario:

```text
Remote Config fetch
      │
      ▼
Network error
```

Expected:

```text
App không crash

Default/cached config vẫn hoạt động
```

Test:

```text
Fake Remote Source
      │
      ▼
throw IOException
      │
      ▼
Repository
      │
      ▼
Use fallback
```

---

# 57. Test Invalid Value

Ví dụ remote trả:

```text
max_items = -100
```

Expected:

```text
Validator
   │
   ▼
Reject
   │
   ▼
Default = 20
```

---

# 58. Test Old App Compatibility

Một test quan trọng khi config schema thay đổi:

```text
New Remote Config
       │
       ▼
Old parser
       │
       ▼
Does it still work?
```

Nếu không, rollout config có thể làm crash các version cũ.

---

# 59. Release Risk

Remote Config có một đặc điểm nguy hiểm:

> Có thể thay đổi production mà không cần release app.

Điều này rất mạnh nhưng cũng tạo rủi ro.

Flow:

```text
Developer changes config
        │
        ▼
Publish
        │
        ▼
Millions of clients
```

Một typo nhỏ có thể có blast radius lớn.

---

# 60. Configuration Change như một Release

Nên đối xử với thay đổi Remote Config gần giống release:

```text
Change Proposal
      │
      ▼
Review
      │
      ▼
Test
      │
      ▼
Publish small percentage
      │
      ▼
Monitor
      │
      ▼
Expand
```

Không nên:

```text
Open Firebase Console
      │
      ▼
Change production
      │
      ▼
Publish immediately
```

mà không review.

---

# 61. Rollback

Trước mỗi thay đổi lớn, phải biết cách rollback.

Ví dụ:

```text
Current:
new_checkout_enabled = false

Change:
true
```

Nếu bug:

```text
Rollback:
false
```

Một config tốt phải có:

```text
Known safe value
```

---

# 62. Release Checklist cho Remote Config

Trước publish:

* [ ] Parameter name đúng.
* [ ] Type đúng.
* [ ] Default an toàn.
* [ ] Value đã validate.
* [ ] Old app version vẫn hoạt động.
* [ ] Có fallback.
* [ ] Có test flag ON.
* [ ] Có test flag OFF.
* [ ] Có rollback plan.
* [ ] Không chứa secret.
* [ ] Không làm app startup phụ thuộc network.
* [ ] Nếu là feature lớn, có staged rollout.

---

# 63. Anti-pattern — Không có Default

Sai:

```text
Fetch
 │
 ▼
Failure
 │
 ▼
No Config
 │
 ▼
Crash
```

Đúng:

```text
Default
   │
   ▼
Remote override nếu có
```

---

# 64. Anti-pattern — Secret trong Remote Config

```text
payment_private_key
```

❌ Không nên.

Nếu client nhận được giá trị, nó không còn bí mật.

---

# 65. Anti-pattern — Điều khiển Authorization

Sai:

```text
is_admin_enabled = true
```

và dựa vào đó để cấp quyền admin.

Security phải là:

```text
Backend Authorization
```

Remote Config chỉ nên ảnh hưởng UX.

---

# 66. Anti-pattern — Quá nhiều Flag

```text
flag_a
flag_b
flag_c
flag_d
flag_e
flag_f
```

Nếu không quản lý lifecycle, code sẽ thành:

```kotlin
if (a && !b || c) {

    ...

} else if (d && e) {

    ...

}
```

Rất khó test và maintain.

---

# 67. Anti-pattern — Fetch trên mọi Screen

Sai:

```text
Screen A
   ↓
Fetch

Screen B
   ↓
Fetch

Screen C
   ↓
Fetch
```

Tốt hơn:

```text
Central Config Repository
       │
       ▼
Refresh policy
       │
       ▼
Cached config
```

---

# 68. Anti-pattern — Config thay đổi giữa Critical Flow

Ví dụ:

```text
Checkout V1
    │
    ▼
Payment started
    │
    ▼
Config changes
    │
    ▼
Checkout V2
```

Có thể gây inconsistent state.

Với flow quan trọng, nên dùng config snapshot theo session/flow.

---

# 69. Kiến trúc tổng thể đề xuất

```text
                  FIREBASE
┌──────────────────────────────────┐
│                                  │
│       Firebase Remote Config     │
│                                  │
└─────────────────┬────────────────┘
                  │
                  │ fetch
                  ▼
┌──────────────────────────────────┐
│      RemoteConfigDataSource      │
│                                  │
└─────────────────┬────────────────┘
                  │
                  ▼
┌──────────────────────────────────┐
│     FeatureConfigRepository      │
│                                  │
│  - Parse                         │
│  - Validate                      │
│  - Fallback                      │
│  - Cache                         │
└─────────────────┬────────────────┘
                  │
                  ▼
┌──────────────────────────────────┐
│          FeatureConfig           │
└─────────────────┬────────────────┘
                  │
                  ▼
┌──────────────────────────────────┐
│             ViewModel            │
└─────────────────┬────────────────┘
                  │
                  ▼
┌──────────────────────────────────┐
│           Compose UI             │
└──────────────────────────────────┘
```

---

# 70. Package Structure gợi ý

```text
com.example.app
│
├── config
│   ├── FeatureConfig.kt
│   ├── FeatureConfigRepository.kt
│   ├── FirebaseFeatureConfigRepository.kt
│   ├── RemoteConfigMapper.kt
│   ├── ConfigValidator.kt
│   └── ConfigKeys.kt
│
├── domain
│   └── usecase
│
├── data
│   └── ...
│
├── ui
│   ├── home
│   ├── checkout
│   └── settings
│
└── debug
    └── ConfigDebugScreen.kt
```

---

# 71. ConfigKeys

Thay vì string rải rác:

```kotlin
remoteConfig.getBoolean(
    "new_checkout_enabled"
)
```

có thể gom:

```kotlin
object ConfigKeys {

    const val NEW_CHECKOUT_ENABLED =
        "new_checkout_enabled"

    const val MAX_CART_ITEMS =
        "max_cart_items"

    const val MAINTENANCE_ENABLED =
        "maintenance_enabled"
}
```

Điều này giảm typo và hỗ trợ refactor.

---

# 72. Ví dụ Flow hoàn chỉnh

```text
                Firebase Console
                       │
                       ▼
                Publish Config
                       │
                       ▼
             Firebase Remote Config
                       │
                       ▼
                  Fetch / Activate
                       │
                       ▼
                ConfigDataSource
                       │
                       ▼
                Parse + Validate
                       │
                 ┌─────┴─────┐
                 │           │
               Valid       Invalid
                 │           │
                 ▼           ▼
              Remote       Default
                 │           │
                 └─────┬─────┘
                       ▼
                  AppConfig
                       │
                       ▼
                   ViewModel
                       │
                       ▼
                    UiState
                       │
                       ▼
                  Compose UI
```

---

# 73. Thực hành

Xây dựng một Android demo có ba Remote Config parameter:

```text
new_home_enabled

welcome_message

max_items
```

---

## Bước 1 — Kết nối Firebase

```text
Android Project
      │
      ▼
Firebase Project
```

---

## Bước 2 — Thêm Remote Config

Tích hợp Firebase Remote Config vào project.

---

## Bước 3 — Định nghĩa Defaults

Ví dụ:

```text
new_home_enabled = false

welcome_message = "Xin chào"

max_items = 10
```

Mục tiêu:

```text
App vẫn hoạt động nếu không có mạng.
```

---

## Bước 4 — Tạo Config Repository

```text
FeatureConfigRepository
        │
        ▼
FirebaseFeatureConfigRepository
```

---

## Bước 5 — Fetch Config

```text
App Startup
     │
     ▼
Use cached/default
     │
     ▼
Fetch Remote Config
     │
     ▼
Activate
```

---

## Bước 6 — Feature Flag

```text
new_home_enabled?
       │
    ┌──┴──┐
    │     │
   true  false
    │     │
    ▼     ▼
 New UI Old UI
```

---

## Bước 7 — Failure Scenario

Tắt network.

Expected:

```text
Fetch fails
    │
    ▼
App continues
    │
    ▼
Default values
```

---

## Bước 8 — Invalid Config

Firebase value:

```text
max_items = -100
```

Expected:

```text
Validation failed
      │
      ▼
Use default 10
```

---

# 74. Bài tập

Thiết kế Remote Config cho ứng dụng thương mại điện tử.

Các parameter:

```text
new_checkout_enabled

max_cart_items

promotion_banner_enabled

maintenance_enabled

recommended_app_version
```

Yêu cầu:

1. Tạo local defaults.
2. Tạo `ConfigKeys`.
3. Tạo `FeatureConfig`.
4. Tạo repository abstraction.
5. Fetch config bất đồng bộ.
6. Không block startup.
7. Validate numeric values.
8. Xử lý offline.
9. Xử lý fetch failure.
10. Test feature ON.
11. Test feature OFF.
12. Thêm kill switch cho checkout mới.
13. Viết rollback plan.
14. Không lưu secret.
15. Viết release checklist.

---

# 75. Artifact cho Portfolio

Một project portfolio có thể trình bày:

```text
Android Remote Config Demo
│
├── Firebase Remote Config
├── Feature Flags
├── Local Defaults
├── Config Repository
├── Validation
├── Offline Fallback
├── Kill Switch
├── StateFlow
├── Unit Tests
├── Debug Config Screen
└── README Architecture Diagram
```

README nên có sơ đồ:

```text
Firebase Remote Config
        │
        ▼
Remote Data Source
        │
        ▼
Config Repository
        │
        ├── Parse
        ├── Validate
        └── Fallback
        │
        ▼
AppConfig
        │
        ▼
ViewModel
        │
        ▼
UI
```

---

# 76. Checklist hoàn thành

## Kiến thức

* [ ] Giải thích được Remote Config.
* [ ] Hiểu parameter.
* [ ] Hiểu local default.
* [ ] Hiểu fetch.
* [ ] Hiểu activate.
* [ ] Hiểu feature flag.
* [ ] Hiểu kill switch.
* [ ] Hiểu conditional config.
* [ ] Hiểu progressive rollout.

## Android

* [ ] Tích hợp Remote Config.
* [ ] Có default values.
* [ ] Fetch được config.
* [ ] Activate được config.
* [ ] UI đọc config qua ViewModel/state.
* [ ] Không fetch ở mọi screen.
* [ ] App vẫn hoạt động offline.

## Architecture

* [ ] Có `FeatureConfigRepository`.
* [ ] Firebase SDK được cô lập.
* [ ] Có typed config model.
* [ ] Có `ConfigKeys`.
* [ ] Có parser.
* [ ] Có validator.
* [ ] Có fallback.
* [ ] Critical flow có chiến lược config ổn định.

## Security

* [ ] Không lưu secret.
* [ ] Không dùng Remote Config làm authorization.
* [ ] Backend vẫn kiểm tra business rule quan trọng.
* [ ] Config client không được xem là source of truth cho security.

## Testing

* [ ] Test config ON.
* [ ] Test config OFF.
* [ ] Test fetch failure.
* [ ] Test offline.
* [ ] Test invalid value.
* [ ] Test fallback.
* [ ] Test compatibility với app cũ nếu cần.

## Release

* [ ] Parameter đã review.
* [ ] Default an toàn.
* [ ] Có rollback value.
* [ ] Có kill switch nếu feature rủi ro cao.
* [ ] Có staged rollout nếu phù hợp.
* [ ] Theo dõi lỗi sau khi publish config.
* [ ] Flag cũ có kế hoạch xóa.

## Portfolio

* [ ] Có source code.
* [ ] Có architecture diagram.
* [ ] Có screenshot Firebase Console.
* [ ] Có demo feature ON/OFF.
* [ ] Có unit test.
* [ ] Có failure scenario.
* [ ] Có release checklist.

---

# 77. Ghi chú production

Khi đưa Remote Config vào production, không chỉ hỏi:

```text
"App fetch config được chưa?"
```

Hãy hỏi:

```text
Nếu Firebase không truy cập được thì sao?

        ↓

Default value có an toàn không?

        ↓

Config này có tương thích app version cũ không?

        ↓

Nếu value sai hoặc vượt range thì sao?

        ↓

Có rollback được ngay không?

        ↓

Feature OFF có thực sự hoạt động không?

        ↓

Config thay đổi giữa một flow quan trọng thì sao?

        ↓

Có đang lưu secret trên client không?

        ↓

Flag này sẽ được xóa khi nào?

        ↓

Ai chịu trách nhiệm cho config này?
```

Một workflow production tốt:

```text
             Develop Feature
                   │
                   ▼
            Create Feature Flag
                   │
                   ▼
             Safe Default OFF
                   │
                   ▼
                Tests
                   │
                   ▼
             Release Binary
                   │
                   ▼
              Enable 5%
                   │
                   ▼
                Monitor
                   │
          ┌────────┴─────────┐
          ▼                  ▼
       Healthy              Issue
          │                  │
          ▼                  ▼
         20%             Kill Switch
          │                  │
          ▼                  ▼
         50%               Fix
          │
          ▼
        100%
          │
          ▼
     Remove old flag
```

Mục tiêu cuối cùng không phải chỉ là:

> **“Ứng dụng lấy được một biến từ Firebase.”**

Mà là:

> **“Ứng dụng có một hệ thống configuration an toàn, có default, có validation, có fallback, test được, rollback được và hỗ trợ rollout feature mà không biến Remote Config thành nguồn gây rủi ro mới cho production.”**

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
