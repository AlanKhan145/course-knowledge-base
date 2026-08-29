# 009 - Google Play Services

**Học phần:** 04 - Network, Async and Services
**Module:** Module 09 - Common Services
**Nhóm nội dung:** Google Services
**Nguồn roadmap:** Common Services / Google Services
**Loại bài:** `service`
**Thứ tự trong module:** 009
**Thời lượng gợi ý:** 34 phút

---

## 1. Tóm tắt

**Google Play Services** là tập hợp các dịch vụ nền và SDK do Google cung cấp cho Android, giúp ứng dụng sử dụng những chức năng như:

* Location / Fused Location.
* Google Sign-In và các API xác thực.
* Google Maps.
* Google Wallet.
* Nearby.
* Cast.
* Google Play Games.
* Một số API bảo mật.
* Một số API Machine Learning và TensorFlow Lite.
* Các dịch vụ Google khác.

Điểm quan trọng là phần lớn logic thực thi không nằm hoàn toàn trong APK của ứng dụng.

Ứng dụng thường chỉ thêm một **client library nhỏ**, sau đó client giao tiếp với ứng dụng hệ thống **Google Play services (`com.google.android.gms`)** trên thiết bị. Google Play services có thể được Google cập nhật độc lập với bản cập nhật Android của nhà sản xuất. ([Google for Developers][1])

```text
┌───────────────────────────────┐
│        Android App            │
│                               │
│ Kotlin / Java                 │
│       │                       │
│       ▼                       │
│ play-services-* SDK           │
└───────────────┬───────────────┘
                │
                │ IPC / Google API
                ▼
┌───────────────────────────────┐
│    Google Play services       │
│    com.google.android.gms     │
│                               │
│ Location / Auth / Nearby ...  │
└───────────────┬───────────────┘
                │
                ▼
          Google Services
```

Google khuyến nghị thêm **chính xác SDK cần dùng** thay vì đưa toàn bộ Google Play services vào ứng dụng. R8 cũng có thể loại bỏ các phần không sử dụng khi build release. ([Google for Developers][1])

---

# 2. Mục tiêu học tập

Sau bài này, bạn có thể:

* [ ] Giải thích Google Play Services là gì.
* [ ] Phân biệt Google Play Services với Google Play Store.
* [ ] Phân biệt Google Play Services với Firebase.
* [ ] Biết cách thêm một `play-services-*` dependency.
* [ ] Biết cách lấy một Google API client.
* [ ] Kiểm tra Google Play services có khả dụng trên thiết bị hay không.
* [ ] Xử lý trường hợp Google Play services bị thiếu, tắt hoặc quá cũ.
* [ ] Hiểu ảnh hưởng của Google Play Services đến lifecycle và UX.
* [ ] Biết những permission nào phải xin runtime.
* [ ] Biết các vấn đề privacy cần lưu ý.
* [ ] Có một demo nhỏ làm artifact cho portfolio.

---

# 3. Google Play Services là gì?

Có thể hiểu:

> Google Play Services là lớp dịch vụ trung gian giữa ứng dụng Android và nhiều dịch vụ/API của Google.

Ví dụ ứng dụng muốn lấy vị trí.

Thay vì tự làm toàn bộ:

```text
GPS
 ↓
Wi-Fi
 ↓
Cell Tower
 ↓
Sensor
 ↓
Tính vị trí
 ↓
App
```

ứng dụng có thể dùng:

```text
Android App
     │
     ▼
FusedLocationProviderClient
     │
     ▼
Google Play Services
     │
     ├── GPS
     ├── Wi-Fi
     ├── Mobile Network
     └── Sensors
```

Google Play services giúp trừu tượng hóa rất nhiều logic phức tạp phía dưới.

---

# 4. Google Play Services không phải Google Play Store

Đây là điểm rất dễ nhầm.

| Thành phần                        | Vai trò                                   |
| --------------------------------- | ----------------------------------------- |
| **Google Play Store**             | Cửa hàng để tải/cập nhật ứng dụng         |
| **Google Play Services**          | Dịch vụ nền cho các Google API            |
| **Google Play Console**           | Công cụ developer để phát hành app        |
| **Google Services Gradle Plugin** | Xử lý cấu hình như `google-services.json` |
| **Firebase**                      | Backend/cloud platform của Google         |

Ví dụ:

```text
Google Play Store
       │
       ├── tải app của bạn
       │
       └── cập nhật Google Play services
                    │
                    ▼
             Android Application
                    │
                    ▼
              Google APIs
```

---

# 5. Tại sao Google Play Services tồn tại?

Nếu tất cả API của Google đều phụ thuộc vào Android OS:

```text
Google API mới
     ↓
Android OS mới
     ↓
OEM cập nhật
     ↓
User cập nhật
```

quá trình triển khai có thể chậm.

Google Play services cho phép một phần dịch vụ được cập nhật độc lập:

```text
Google
  │
  ▼
Google Play services update
  │
  ▼
Device
```

không nhất thiết phải chờ cập nhật toàn bộ Android OS.

Tài liệu Google hiện mô tả Google Play services là tập hợp các background services trên thiết bị Android được Google chứng nhận và được cập nhật tương đối độc lập với carrier, OEM hoặc system image. ([Google for Developers][1])

---

# 6. Kiến trúc cơ bản

Một API Google Play Services thường có cấu trúc:

```text
┌──────────────────────┐
│ UI                   │
│ Compose / Activity   │
└──────────┬───────────┘
           │ event
           ▼
┌──────────────────────┐
│ ViewModel            │
│ UI State             │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Repository           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────────┐
│ Google API Client            │
│ FusedLocationProviderClient  │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│ Google Play Services         │
└──────────────────────────────┘
```

Trong production, không nên để UI gọi trực tiếp API khắp nơi.

Nên có:

```text
UI
 ↓
ViewModel
 ↓
Repository
 ↓
Google Service Client
```

để dễ:

* Test.
* Mock.
* Xử lý lỗi.
* Quản lý state.
* Thay đổi implementation.

---

# 7. Một số Google Play Services phổ biến

Google Play services có nhiều package thuộc namespace:

```text
com.google.android.gms.*
```

Ví dụ:

| Service                   | Mục đích              |
| ------------------------- | --------------------- |
| `play-services-location`  | Location              |
| Maps SDK                  | Google Maps           |
| `play-services-auth`      | Authentication        |
| `play-services-wallet`    | Google Wallet         |
| `play-services-nearby`    | Nearby                |
| `play-services-cast`      | Google Cast           |
| `play-services-games`     | Google Play Games     |
| `play-services-wearable`  | Wear OS communication |
| TFLite Play services APIs | ML inference          |

Danh sách API thực tế khá lớn và thay đổi theo thời gian. ([Google for Developers][2])

---

# 8. Thêm dependency

Ví dụ bài học sử dụng **Fused Location Provider**.

Trong:

```text
app/build.gradle.kts
```

thêm:

```kotlin
dependencies {
    implementation("com.google.android.gms:play-services-location:21.4.0")
}
```

Phiên bản `21.4.0` là phiên bản được tài liệu setup chính thức của Google liệt kê tại thời điểm tháng 8/2026. ([Google for Developers][3])

> Khi làm project thực tế, nên kiểm tra tài liệu chính thức để dùng phiên bản mới phù hợp thay vì cố định vào số phiên bản trong bài học.

---

# 9. Lấy Google API Client

Với Location:

```kotlin
import com.google.android.gms.location.LocationServices

val locationClient =
    LocationServices.getFusedLocationProviderClient(this)
```

`FusedLocationProviderClient` đóng vai trò client để ứng dụng giao tiếp với dịch vụ location phía Google Play services.

Google hiện khuyến nghị các API dựa trên `GoogleApi`/client chuyên biệt như trên thay cho `GoogleApiClient` cũ; `GoogleApiClient` đã deprecated. ([Google for Developers][4])

---

# 10. Permission vẫn là trách nhiệm của ứng dụng

Có Google Play Services **không có nghĩa là bỏ qua Android permission system**.

Ví dụ Location cần khai báo:

```xml
<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION" />

<uses-permission
    android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

Sau đó vẫn cần runtime permission.

Ví dụ với Compose:

```kotlin
val permissionLauncher =
    rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->

        if (granted) {
            // Có thể sử dụng location
        } else {
            // Hiển thị UI fallback
        }
    }
```

---

# 11. Luồng permission đúng

```text
User mở tính năng
       │
       ▼
App cần location?
       │
       ▼
Đã có permission?
    ┌──┴──────┐
   Có        Chưa
    │          │
    │          ▼
    │    Xin permission
    │          │
    │      ┌───┴───┐
    │     Cho      Từ chối
    │      │          │
    ▼      ▼          ▼
  Gọi Location     Fallback UI
     API
```

Không nên xin permission ngay khi app khởi động nếu người dùng chưa hiểu vì sao ứng dụng cần quyền đó.

UX tốt hơn là:

```text
User bấm
"Use my location"
       ↓
Giải thích lý do
       ↓
Request permission
```

---

# 12. Kiểm tra Google Play Services

Không phải mọi Android device đều có Google Play Services.

Ví dụ:

* Một số thiết bị không có Google Mobile Services.
* Một số custom ROM.
* Thiết bị có Play Services nhưng user disable.
* Version quá cũ.
* Play Services đang update.

Google cung cấp:

```kotlin
GoogleApiAvailability
```

để kiểm tra trạng thái. ([Google for Developers][5])

---

## Ví dụ

```kotlin
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability

fun isGooglePlayServicesAvailable(
    context: Context
): Boolean {

    val availability =
        GoogleApiAvailability.getInstance()

    val result =
        availability.isGooglePlayServicesAvailable(context)

    return result == ConnectionResult.SUCCESS
}
```

---

# 13. Các trạng thái lỗi quan trọng

`GoogleApiAvailability` có thể báo các trạng thái như:

```text
SUCCESS
SERVICE_MISSING
SERVICE_UPDATING
SERVICE_VERSION_UPDATE_REQUIRED
SERVICE_DISABLED
SERVICE_INVALID
```

([Google for Developers][6])

Ý nghĩa:

| Status                            | Ý nghĩa                            |
| --------------------------------- | ---------------------------------- |
| `SUCCESS`                         | Có thể sử dụng                     |
| `SERVICE_MISSING`                 | Google Play services không tồn tại |
| `SERVICE_UPDATING`                | Đang được cập nhật                 |
| `SERVICE_VERSION_UPDATE_REQUIRED` | Phiên bản quá cũ                   |
| `SERVICE_DISABLED`                | User/device đã disable             |
| `SERVICE_INVALID`                 | Installation không hợp lệ          |

---

# 14. Không nên crash khi Play Services không tồn tại

Thiết kế xấu:

```text
Google Play Services unavailable
            ↓
         Exception
            ↓
           Crash
```

Thiết kế tốt:

```text
Google Play Services unavailable
            │
            ▼
    Có thể sửa không?
       ┌────┴────┐
      Có        Không
       │          │
       ▼          ▼
Update/Enable    Disable feature
       │          │
       └────┬─────┘
            ▼
        App vẫn chạy
```

Ví dụ:

```kotlin
val availability =
    GoogleApiAvailability.getInstance()

val status =
    availability.isGooglePlayServicesAvailable(this)

when {
    status == ConnectionResult.SUCCESS -> {
        loadLocation()
    }

    availability.isUserResolvableError(status) -> {
        availability.showErrorDialogFragment(
            this,
            status,
            1001
        )
    }

    else -> {
        showLocationUnavailable()
    }
}
```

---

# 15. Graceful degradation

Một app tốt không nên để toàn bộ app phụ thuộc cứng vào một Google API không thiết yếu.

Ví dụ app thời tiết:

```text
Google Location available
        │
        ▼
Detect location
        │
        ▼
Show weather
```

Nếu Location không khả dụng:

```text
Google Location unavailable
        │
        ▼
Cho user nhập thành phố
        │
        ▼
Show weather
```

Đây gọi là:

**Graceful degradation**

hay có thể hiểu là:

> Tính năng giảm cấp một cách có kiểm soát thay vì làm hỏng toàn bộ ứng dụng.

---

# 16. Ví dụ hoàn chỉnh: lấy vị trí cuối cùng

## Manifest

```xml
<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION" />

<uses-permission
    android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

---

## LocationRepository

```kotlin
class LocationRepository(
    context: Context
) {

    private val client =
        LocationServices.getFusedLocationProviderClient(context)

    @SuppressLint("MissingPermission")
    fun getLastLocation(
        onSuccess: (Location?) -> Unit,
        onError: (Exception) -> Unit
    ) {

        client.lastLocation
            .addOnSuccessListener { location ->
                onSuccess(location)
            }
            .addOnFailureListener { exception ->
                onError(exception)
            }
    }
}
```

---

# 17. Không trộn permission với Repository

Repository không nên tự bật permission dialog.

Sai:

```text
Repository
 ├─ requestPermission()
 └─ getLocation()
```

Nên:

```text
UI
 │
 ├── Permission handling
 │
 ▼
ViewModel
 │
 ▼
Repository
 │
 ▼
Google API
```

Lý do là permission dialog gắn với lifecycle/UI của Android.

---

# 18. State trong ViewModel

Có thể biểu diễn state:

```kotlin
sealed interface LocationUiState {

    data object Idle : LocationUiState

    data object Loading : LocationUiState

    data class Success(
        val latitude: Double,
        val longitude: Double
    ) : LocationUiState

    data class Error(
        val message: String
    ) : LocationUiState
}
```

ViewModel:

```kotlin
class LocationViewModel(
    private val repository: LocationRepository
) : ViewModel() {

    var state by mutableStateOf<LocationUiState>(
        LocationUiState.Idle
    )
        private set

    fun loadLocation() {

        state = LocationUiState.Loading

        repository.getLastLocation(
            onSuccess = { location ->

                if (location != null) {
                    state = LocationUiState.Success(
                        latitude = location.latitude,
                        longitude = location.longitude
                    )
                } else {
                    state = LocationUiState.Error(
                        "Không tìm thấy vị trí gần nhất."
                    )
                }
            },
            onError = { error ->

                state = LocationUiState.Error(
                    error.message ?: "Không thể lấy vị trí."
                )
            }
        )
    }
}
```

---

# 19. Luồng đầy đủ của tính năng

```text
┌─────────────────┐
│ User             │
│ "Use Location"  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Permission      │
│ granted?        │
└───────┬─────────┘
        │
    ┌───┴────┐
   No       Yes
    │         │
    ▼         ▼
Request    Check Google
Permission Play Services
              │
          ┌───┴────┐
         Fail      OK
          │         │
          ▼         ▼
      Fallback   ViewModel
                    │
                    ▼
                Repository
                    │
                    ▼
            Fused Location
                    │
                    ▼
            Google Play
              Services
                    │
                    ▼
              Location
                    │
                    ▼
                UI State
```

---

# 20. Lifecycle

Google Play Services không loại bỏ các vấn đề lifecycle Android.

Ví dụ user:

```text
Activity
  ↓
Start request
  ↓
Rotate device
  ↓
Activity destroyed
  ↓
Activity recreated
```

Nếu state chỉ nằm trong Activity:

```kotlin
var location = null
```

state có thể mất.

Nên đặt state vào:

```text
Activity / Compose
        │
        ▼
    ViewModel
        │
        ▼
    Repository
```

---

# 21. Async behavior

Nhiều Google Play Services API trả về:

```kotlin
Task<T>
```

Ví dụ:

```kotlin
client.lastLocation
    .addOnSuccessListener {
        // success
    }
    .addOnFailureListener {
        // failure
    }
```

Một lỗi beginner phổ biến là coi nó như synchronous code.

Sai tư duy:

```text
call API
 ↓
data có ngay
```

Thực tế:

```text
call API
 ↓
Task
 ↓
wait
 ↓
success / failure
```

Do đó UI nên có các state:

```text
Idle
 ↓
Loading
 ↓
Success
   hoặc
Error
```

---

# 22. Kiểm tra API cụ thể

Ngoài việc kiểm tra toàn bộ Google Play Services:

```kotlin
isGooglePlayServicesAvailable()
```

Google còn cung cấp:

```kotlin
checkApiAvailability()
```

để kiểm tra API client cụ thể.

Ví dụ tài liệu Google:

```kotlin
val client =
    LocationServices.getFusedLocationProviderClient(context)

GoogleApiAvailability
    .getInstance()
    .checkApiAvailability(client)
    .onSuccessTask {
        client.lastLocation
    }
    .addOnFailureListener {
        Log.d("Location", "Location unavailable")
    }
```

([Google for Developers][4])

---

# 23. `google-services.json` có phải Google Play Services không?

**Không.**

Đây là một nhầm lẫn rất phổ biến.

```text
Google Play Services
        ≠
google-services.json
```

`google-services.json` thường được sử dụng khi cấu hình các dịch vụ Google/Firebase cần thông tin project.

File thường đặt:

```text
project/
│
├── app/
│   ├── google-services.json
│   ├── build.gradle.kts
│   └── src/
│
└── build.gradle.kts
```

Google Services Gradle Plugin sẽ đọc file này và chuyển một số cấu hình thành Android resources. ([Google for Developers][7])

---

# 24. Google Services Gradle Plugin

Ví dụ plugin:

```kotlin
plugins {
    id("com.google.gms.google-services")
}
```

Chức năng chính của plugin là xử lý:

```text
google-services.json
        │
        ▼
Google Services Gradle Plugin
        │
        ▼
Generated Android resources
```

Google hiện mô tả hai nhiệm vụ chính của plugin là xử lý `google-services.json` và tạo các resource/dependency cần thiết cho một số dịch vụ đã cấu hình. ([Google for Developers][7])

---

# 25. Google Play Services và Firebase

Hai hệ thống có quan hệ nhưng không giống nhau.

```text
             Google Ecosystem
                    │
        ┌───────────┴───────────┐
        │                       │
 Google Play Services        Firebase
        │                       │
 Device services            Cloud services
        │                       │
 Location                  Firestore
 Auth APIs                 Analytics
 Nearby                    FCM
 Wallet                    Crashlytics
 ...                       Remote Config
```

Một ứng dụng có thể dùng:

```text
Fused Location Provider
        +
Firebase Firestore
        +
Firebase Crashlytics
```

cùng lúc.

---

# 26. Privacy

Khi sử dụng Google Play Services, đặc biệt với:

* Location.
* Advertising.
* Authentication.
* Nearby devices.
* Fitness.
* User account data.

developer phải xem xét:

```text
Data nào được thu thập?
        ↓
Có thật sự cần không?
        ↓
Có cần permission không?
        ↓
Có gửi lên server không?
        ↓
Lưu bao lâu?
        ↓
User có biết không?
```

---

# 27. Nguyên tắc permission tối thiểu

Không nên:

```text
"App có thể cần location sau này"
        ↓
Xin FINE_LOCATION ngay startup
```

Nên:

```text
User mở Find Nearby
        ↓
Feature cần location
        ↓
Giải thích
        ↓
Request permission
```

Nguyên tắc:

> Chỉ xin quyền khi tính năng thực sự cần nó.

---

# 28. API Key

Một số Google API yêu cầu API key.

Ví dụ Maps:

```text
Android App
    │
    ▼
Google Maps SDK
    │
    ▼
API Key
    │
    ▼
Google Cloud Project
```

Cần phân biệt:

```text
API Key
   ≠
Secret backend
```

Một API key đặt trong Android APK không thể được coi là secret tuyệt đối.

Do đó nên dùng các restriction phù hợp, chẳng hạn:

```text
Package name
+
Signing certificate
+
API restrictions
```

khi dịch vụ hỗ trợ.

---

# 29. Debugging

Nếu Google API không hoạt động, kiểm tra theo trình tự:

```text
1. Dependency
        ↓
2. Gradle sync
        ↓
3. Permission
        ↓
4. Google Play Services availability
        ↓
5. API configuration
        ↓
6. API key / OAuth
        ↓
7. SHA certificate
        ↓
8. Package name
        ↓
9. Device / emulator
        ↓
10. Logcat
```

---

# 30. Emulator

Khi test Google Play Services, cần dùng emulator image tương thích.

Không nên tùy ý chọn một AOSP emulator rồi giả định rằng Google Play services sẽ tồn tại.

Tài liệu Google hiện yêu cầu môi trường test có Google APIs/Google Play services phù hợp; đối với tài liệu setup hiện hành, Android 7.0/API 24 trở lên được dùng làm baseline hỗ trợ được mô tả. ([Google for Developers][1])

Trong Device Manager thường cần chú ý loại image:

```text
AOSP
Google APIs
Google Play
```

---

# 31. Các lỗi thường gặp

## Lỗi 1 — Không kiểm tra permission

```text
Location API
    ↓
SecurityException
```

---

## Lỗi 2 — Giả định mọi máy Android đều có GMS

```text
Android Device
    ↓
Google Play Services?
    ↓
Không
    ↓
Feature crash
```

---

## Lỗi 3 — Gọi API trực tiếp từ UI

```kotlin
Button(
    onClick = {
        locationClient.lastLocation
            // rất nhiều business logic ở đây
    }
)
```

Code sẽ khó test và khó maintain.

---

## Lỗi 4 — Không xử lý `null`

`lastLocation` hoàn toàn có thể trả về:

```kotlin
null
```

Ví dụ:

* Device chưa có cached location.
* Location vừa reset.
* Service chưa đủ dữ liệu.

---

## Lỗi 5 — Không xử lý failure

Sai:

```kotlin
client.lastLocation
    .addOnSuccessListener {
        // ...
    }
```

Tốt hơn:

```kotlin
client.lastLocation
    .addOnSuccessListener {
        // ...
    }
    .addOnFailureListener {
        // fallback
    }
```

---

# 32. Testing strategy

Nên test ít nhất các trường hợp:

| Test case                      | Expected                    |
| ------------------------------ | --------------------------- |
| Permission granted             | Lấy location                |
| Permission denied              | Không crash                 |
| Permission permanently denied  | Hướng dẫn Settings          |
| Google Play Services available | Feature hoạt động           |
| Play Services missing          | Fallback                    |
| Play Services disabled         | Hiển thị hướng dẫn          |
| Play Services outdated         | Cho phép update             |
| Location trả `null`            | Hiển thị trạng thái phù hợp |
| Network lỗi nếu API cần mạng   | Retry/fallback              |
| Rotate màn hình                | State hợp lý                |

---

# 33. Thiết kế testable

Thay vì ViewModel phụ thuộc trực tiếp:

```kotlin
FusedLocationProviderClient
```

có thể định nghĩa abstraction:

```kotlin
interface LocationProvider {

    suspend fun getLocation(): LocationResult
}
```

Implementation thật:

```kotlin
class GoogleLocationProvider(
    private val client: FusedLocationProviderClient
) : LocationProvider {

    override suspend fun getLocation(): LocationResult {
        // Google API
        TODO()
    }
}
```

Fake khi test:

```kotlin
class FakeLocationProvider : LocationProvider {

    override suspend fun getLocation(): LocationResult {
        return LocationResult.Success(
            latitude = 10.77,
            longitude = 106.69
        )
    }
}
```

Kiến trúc:

```text
              LocationProvider
               /          \
              /            \
             ▼              ▼
GoogleLocationProvider   FakeLocationProvider
        │                       │
     Production               Test
```

---

# 34. Bài thực hành

## Mini Project — Google Location Demo

Xây dựng màn hình:

```text
┌───────────────────────────────┐
│       Location Demo           │
│                               │
│ Latitude:  10.772             │
│ Longitude: 106.657            │
│                               │
│ [ Get My Location ]           │
│                               │
│ Status: Ready                 │
└───────────────────────────────┘
```

---

## Yêu cầu

### Task 1 — Dependency

Thêm:

```kotlin
implementation(
    "com.google.android.gms:play-services-location:21.4.0"
)
```

---

### Task 2 — Permission

Thêm:

```xml
ACCESS_FINE_LOCATION
ACCESS_COARSE_LOCATION
```

và runtime permission.

---

### Task 3 — Availability

Kiểm tra:

```kotlin
GoogleApiAvailability
```

trước khi bật chức năng phụ thuộc GMS.

---

### Task 4 — Location

Sử dụng:

```kotlin
FusedLocationProviderClient
```

để lấy vị trí.

---

### Task 5 — UI State

Có ít nhất:

```text
Idle
Loading
Success
Error
```

---

### Task 6 — Failure scenario

Test ít nhất một tình huống:

```text
Permission denied
```

hoặc:

```text
Google Play Services unavailable
```

---

# 35. Artifact cho portfolio

Có thể tạo:

```text
google-play-services-demo/
│
├── screenshot/
│   ├── location-success.png
│   └── permission-denied.png
│
├── app/
│
├── README.md
│
└── architecture.md
```

README nên mô tả:

```markdown
# Google Play Services Location Demo

## Features

- Fused Location Provider
- Runtime permission
- Google Play Services availability handling
- Error state
- Graceful fallback
- ViewModel state management

## Architecture

UI → ViewModel → Repository → Google Play Services

## Failure Cases

- Permission denied
- Location unavailable
- Google Play Services unavailable
```

---

# 36. Sơ đồ kiến trúc artifact

```text
┌─────────────────────────────┐
│       Jetpack Compose       │
│                             │
│ Button / Permission UI      │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│         ViewModel           │
│                             │
│ LocationUiState             │
│ Idle / Loading / Success    │
│ Error                       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      LocationRepository     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FusedLocationProviderClient │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│    Google Play Services     │
└─────────────────────────────┘
```

---

# 37. Bài tập

## Bài 1 — Cơ bản

Giải thích bằng lời của bạn:

1. Google Play Services là gì?
2. Nó khác Google Play Store như thế nào?
3. Tại sao Google không đưa tất cả API trực tiếp vào Android OS?
4. `play-services-location` dùng để làm gì?

---

## Bài 2 — Tình huống

Ứng dụng cần lấy vị trí người dùng.

Nhưng user chọn:

```text
Don't allow
```

Hãy thiết kế flow để:

* App không crash.
* Hiển thị thông báo hợp lý.
* User vẫn có thể sử dụng phần còn lại của app.

---

## Bài 3 — Failure handling

Thiết kế state:

```text
Google Play Services missing
Google Play Services disabled
Google Play Services outdated
Location permission denied
Location unavailable
Success
```

---

## Bài 4 — Kiến trúc

Chuyển code:

```text
Activity
   ↓
FusedLocationProviderClient
```

thành:

```text
Compose
   ↓
ViewModel
   ↓
Repository
   ↓
LocationProvider
   ↓
Google Play Services
```

---

# 38. Câu hỏi kiểm tra nhanh

### Câu 1

Google Play Services có phải Google Play Store không?

**Đáp án:** Không.

---

### Câu 2

Package thường gặp của Google Play Services bắt đầu bằng gì?

```text
com.google.android.gms
```

---

### Câu 3

Có nên giả định mọi Android device đều có Google Play Services?

**Không.**

---

### Câu 4

Class nào có thể kiểm tra Google Play Services?

```kotlin
GoogleApiAvailability
```

---

### Câu 5

Google Play Services có thay thế Android runtime permission không?

**Không.**

---

### Câu 6

`GoogleApiClient` còn là cách được ưu tiên không?

**Không.** Nó đã deprecated; nên sử dụng các API client hiện đại dựa trên `GoogleApi` hoặc client chuyên biệt tương ứng. ([Google for Developers][4])

---

# 39. Checklist hoàn thành

## Kiến thức

* [ ] Giải thích được Google Play Services.
* [ ] Phân biệt Google Play Services và Play Store.
* [ ] Phân biệt Google Play Services và Firebase.
* [ ] Hiểu `com.google.android.gms`.
* [ ] Biết cách thêm từng `play-services-*` dependency.

## Code

* [ ] Tạo được Google API client.
* [ ] Kiểm tra Google Play Services availability.
* [ ] Xử lý success.
* [ ] Xử lý failure.
* [ ] Xử lý `null`.
* [ ] Xử lý runtime permission.

## Architecture

* [ ] Không đặt toàn bộ service logic trong UI.
* [ ] Có ViewModel.
* [ ] Có Repository/provider abstraction.
* [ ] UI có Loading/Success/Error state.

## Testing

* [ ] Test permission granted.
* [ ] Test permission denied.
* [ ] Test service unavailable.
* [ ] Test API failure.
* [ ] Test rotate/background nếu liên quan.

## Production

* [ ] Kiểm tra privacy.
* [ ] Chỉ xin permission thực sự cần.
* [ ] API key được restriction nếu có.
* [ ] Không giả định mọi device đều có GMS.
* [ ] Có fallback cho feature quan trọng.
* [ ] Kiểm tra Logcat và release build.

## Portfolio

* [ ] Có source code.
* [ ] Có README.
* [ ] Có screenshot thành công.
* [ ] Có screenshot failure state.
* [ ] Có architecture diagram.

---

# 40. Ghi chú sản xuất

Khi đưa Google Play Services vào production, hãy luôn đặt các câu hỏi:

```text
Feature này có thực sự cần Google Play Services?
                    │
                    ▼
Thiết bị không có GMS thì sao?
                    │
                    ▼
API/service bị disable thì sao?
                    │
                    ▼
Permission bị từ chối thì sao?
                    │
                    ▼
Request thất bại thì UI hiển thị gì?
                    │
                    ▼
State có sống qua rotate/background?
                    │
                    ▼
Dữ liệu user nào được thu thập?
                    │
                    ▼
Có fallback?
                    │
                    ▼
Có test?
```

Tư duy quan trọng không phải chỉ là:

> **“Tôi biết gọi Google API.”**

Mà là:

> **“Tôi biết tích hợp Google service theo cách có lifecycle rõ ràng, quản lý state tốt, xử lý permission và failure, không crash khi service không khả dụng, có fallback và có thể test được.”**

Đó mới là mức kiến thức phù hợp để biến bài **009 - Google Play Services** thành một phần có giá trị trong portfolio Android Developer.

[1]: https://developers.google.com/android/guides/overview?authuser=2&hl=en&utm_source=chatgpt.com "Overview of Google Play services  |  Google for Developers"
[2]: https://developers.google.com/android/reference/packages?utm_source=chatgpt.com "Package Index  |  Google Play services  |  Google for Developers"
[3]: https://developers.google.com/android/guides/setup?authuser=00&utm_source=chatgpt.com "Set up Google Play services  |  Google for Developers"
[4]: https://developers.google.com/android/guides/api-client?utm_source=chatgpt.com "Access Google APIs  |  Google Play services  |  Google for Developers"
[5]: https://developers.google.com/android/reference/com/google/android/gms/common/GoogleApiAvailability?utm_source=chatgpt.com "GoogleApiAvailability  |  Google Play services  |  Google for Developers"
[6]: https://developers.google.com/android/reference/kotlin/com/google/android/gms/common/GoogleApiAvailability?utm_source=chatgpt.com "GoogleApiAvailability  |  Google Play services  |  Google for Developers"
[7]: https://developers.google.com/android/guides/google-services-plugin?utm_source=chatgpt.com "The Google Services Gradle Plugin  |  Google Play services  |  Google for Developers"
