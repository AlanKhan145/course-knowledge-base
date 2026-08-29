# 011 - Maps Marker

**Học phần:** 04 - Network, Async and Services
**Module:** Module 09 - Common Services
**Nhóm nội dung:** Google Services
**Nguồn roadmap:** Common Services / Google Services
**Loại bài:** service
**Thứ tự trong module:** 011
**Thời lượng gợi ý:** 34 phút

---

## 1. Tóm tắt

**Maps Marker** là đối tượng dùng để đánh dấu một vị trí cụ thể trên Google Maps, thường được người dùng gọi là **pin** hoặc **ghim bản đồ**.

Trong Android, Marker thường được sử dụng để biểu diễn:

* Cửa hàng.
* Nhà hàng.
* Trạm xe buýt.
* Điểm giao hàng.
* Địa điểm du lịch.
* Vị trí sự kiện.
* Vị trí thiết bị IoT.
* Điểm đón/trả khách.
* Kết quả tìm kiếm theo địa điểm.

Một Marker cơ bản thường chứa:

```text
Marker
├── position: LatLng
├── title
├── snippet
├── icon
├── visibility
├── zIndex
└── click behavior
```

Ví dụ:

```text
LatLng(10.7721, 106.6579)
        │
        ▼
   ┌───────────┐
   │  Marker   │
   │ Bách Khoa │
   └───────────┘
        │
        ▼
   Google Maps
```

Trong ứng dụng thực tế, Marker không chỉ là UI. Nó thường là điểm cuối của một chuỗi dữ liệu:

```text
API / Database
      │
      ▼
Location model
      │
      ▼
ViewModel
      │
      ▼
UI State
      │
      ▼
GoogleMap
      │
      ▼
Marker
```

Vì vậy developer cần quan tâm đến:

* State.
* Lifecycle.
* Network.
* Hiệu năng.
* Xử lý click.
* Quyền riêng tư.
* API key.
* Dữ liệu vị trí.
* Testing.
* Số lượng Marker lớn.

---

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

* Giải thích được **Map Marker** là gì.
* Thêm Marker vào Google Maps trong Android.
* Hiểu mối quan hệ giữa `LatLng`, `MarkerState` và `Marker`.
* Hiển thị `title` và `snippet`.
* Xử lý sự kiện khi người dùng nhấn Marker.
* Hiểu cách quản lý Marker bằng state trong Jetpack Compose.
* Phân biệt **Marker thường** và **Advanced Marker**.
* Hiểu khi nào cần custom Marker.
* Biết khi nào cần quyền location và khi nào không cần.
* Xử lý trường hợp dữ liệu vị trí lỗi hoặc không có.
* Nhận biết vấn đề performance khi có hàng trăm hoặc hàng nghìn Marker.
* Tạo một demo Maps Marker có thể đưa vào portfolio.

---

# 3. Maps Marker là gì?

Marker là một biểu tượng nằm tại một tọa độ trên bản đồ.

Ví dụ:

```kotlin
val position = LatLng(
    10.7721,
    106.6579
)
```

Tọa độ gồm:

| Thuộc tính  | Ý nghĩa |
| ----------- | ------- |
| `latitude`  | Vĩ độ   |
| `longitude` | Kinh độ |

Marker sau đó được đặt tại `LatLng`.

```text
Latitude
    │
    │
    ▼
 ┌─────────┐
 │ LatLng  │
 └────┬────┘
      │
      │ position
      ▼
 ┌─────────┐
 │ Marker  │
 └────┬────┘
      │
      ▼
 Google Map
```

---

# 4. Marker trong kiến trúc Android

Một thiết kế tốt không nên để UI tự tải dữ liệu và tự tạo mọi logic Marker.

Ví dụ:

```text
REST API / Firestore
        │
        ▼
Repository
        │
        ▼
ViewModel
        │
        ▼
StateFlow<List<Location>>
        │
        ▼
Compose UI
        │
        ▼
GoogleMap
        │
        ├── Marker A
        ├── Marker B
        └── Marker C
```

Model có thể là:

```kotlin
data class Place(
    val id: String,
    val name: String,
    val description: String,
    val latitude: Double,
    val longitude: Double
)
```

UI không cần biết dữ liệu đến từ:

* REST API.
* Firebase.
* Room.
* Local JSON.
* GPS.
* WebSocket.

Nó chỉ cần nhận danh sách `Place`.

---

# 5. Marker với Jetpack Compose

Google cung cấp **Maps Compose Library**, cho phép Google Maps hoạt động theo mô hình declarative của Jetpack Compose.

Ví dụ một Marker cơ bản:

```kotlin
@Composable
fun MapScreen() {

    val location = LatLng(
        10.7721,
        106.6579
    )

    val markerState = rememberUpdatedMarkerState(
        position = location
    )

    GoogleMap(
        modifier = Modifier.fillMaxSize()
    ) {

        Marker(
            state = markerState,
            title = "Đại học Bách Khoa",
            snippet = "TP. Hồ Chí Minh"
        )
    }
}
```

Kết quả logic:

```text
GoogleMap
│
└── Marker
    │
    ├── position
    ├── title
    └── snippet
```

---

# 6. MarkerState

Trong Compose, vị trí Marker nên được biểu diễn bằng state.

Ví dụ:

```kotlin
val markerState = rememberUpdatedMarkerState(
    position = LatLng(
        10.7721,
        106.6579
    )
)
```

Sau đó:

```kotlin
Marker(
    state = markerState
)
```

Có thể hình dung:

```text
State thay đổi
     │
     ▼
Compose recomposition
     │
     ▼
MarkerState cập nhật
     │
     ▼
Marker di chuyển
```

Điều này đặc biệt hữu ích cho:

* Theo dõi phương tiện.
* Theo dõi shipper.
* GPS realtime.
* IoT tracking.
* Navigation.
* Multiplayer location.

---

# 7. Title và Snippet

Marker có thể chứa thông tin mô tả.

```kotlin
Marker(
    state = markerState,
    title = "Coffee Shop",
    snippet = "Mở cửa 07:00 - 22:00"
)
```

Khi người dùng nhấn vào Marker, bản đồ có thể hiển thị **Info Window**.

```text
         📍
         │
         ▼

┌──────────────────────┐
│ Coffee Shop          │
│ Mở cửa 07:00 - 22:00 │
└──────────────────────┘
```

Google Maps SDK hỗ trợ các thuộc tính như title, snippet, vị trí, visibility và khả năng tương tác trên Marker.

---

# 8. Xử lý click Marker

Marker thường là điểm bắt đầu cho một user flow.

Ví dụ:

```kotlin
Marker(
    state = markerState,
    title = place.name,
    onClick = {

        selectedPlace = place

        true
    }
)
```

Luồng:

```text
User
 │
 │ tap marker
 ▼
Marker
 │
 ▼
onClick()
 │
 ▼
Update selectedPlace
 │
 ▼
UI State
 │
 ▼
Bottom Sheet
 │
 ▼
Place Details
```

Ví dụ giao diện:

```text
┌───────────────────────┐
│       Google Map      │
│                       │
│       📍              │
│                       │
├───────────────────────┤
│ Coffee House          │
│ ⭐ 4.8                │
│ 200 m                 │
│                       │
│ [Xem chi tiết]        │
└───────────────────────┘
```

---

# 9. Hiển thị nhiều Marker

Trong ứng dụng thực tế thường có danh sách địa điểm.

```kotlin
data class Place(
    val id: String,
    val name: String,
    val latitude: Double,
    val longitude: Double
)
```

Ví dụ:

```kotlin
GoogleMap(
    modifier = Modifier.fillMaxSize()
) {

    places.forEach { place ->

        Marker(
            state = rememberUpdatedMarkerState(
                position = LatLng(
                    place.latitude,
                    place.longitude
                )
            ),
            title = place.name
        )
    }
}
```

Luồng dữ liệu:

```text
List<Place>
   │
   ├── Place A
   ├── Place B
   ├── Place C
   └── Place D
         │
         ▼
      GoogleMap
         │
   ┌─────┼─────┐
   ▼     ▼     ▼
  📍    📍    📍
```

---

# 10. Ví dụ với ViewModel

Một kiến trúc tốt hơn:

```kotlin
data class MapUiState(
    val places: List<Place> = emptyList(),
    val selectedPlace: Place? = null,
    val loading: Boolean = false,
    val error: String? = null
)
```

ViewModel:

```kotlin
class MapViewModel : ViewModel() {

    private val _uiState =
        MutableStateFlow(MapUiState())

    val uiState =
        _uiState.asStateFlow()

    fun selectPlace(place: Place) {

        _uiState.update {
            it.copy(
                selectedPlace = place
            )
        }
    }
}
```

Compose:

```kotlin
@Composable
fun MapScreen(
    viewModel: MapViewModel
) {

    val state by
        viewModel.uiState.collectAsStateWithLifecycle()

    GoogleMap(
        modifier = Modifier.fillMaxSize()
    ) {

        state.places.forEach { place ->

            Marker(
                state = rememberUpdatedMarkerState(
                    LatLng(
                        place.latitude,
                        place.longitude
                    )
                ),
                title = place.name,
                onClick = {

                    viewModel.selectPlace(place)

                    true
                }
            )
        }
    }
}
```

---

# 11. Marker thường và Advanced Marker

Google Maps SDK hiện hỗ trợ **Advanced Markers** để tùy biến Marker sâu hơn. Advanced Marker có thể tùy chỉnh:

* Màu nền.
* Màu viền.
* Glyph.
* Text.
* Graphic.
* Android `View`.
* Collision behavior.

Advanced Marker vẫn hỗ trợ các thuộc tính Marker thông thường như title, snippet, click và drag.

Có thể hình dung:

```text
Standard Marker
     │
     ▼
    📍


Advanced Marker
     │
     ├── background
     ├── border
     ├── glyph
     ├── custom View
     └── collision behavior
```

---

# 12. Advanced Marker

Ví dụ với Maps SDK truyền thống:

```kotlin
val marker = map.addMarker(
    AdvancedMarkerOptions()
        .position(
            LatLng(
                10.7721,
                106.6579
            )
        )
)
```

Có thể dùng `PinConfig` để thay đổi giao diện pin.

Ví dụ logic:

```text
PinConfig
│
├── Background color
├── Border color
└── Glyph
      │
      ▼
AdvancedMarkerOptions
      │
      ▼
GoogleMap.addMarker()
```

---

# 13. Custom Marker

Một số ứng dụng không dùng pin mặc định.

Ví dụ:

```text
Grab
──────
🚗 Driver


Food Delivery
─────────────
🍔 Restaurant


Real Estate
───────────
🏠 House


EV Charging
───────────
⚡ Charger
```

Advanced Marker có thể sử dụng Android `View` làm icon hoàn toàn tùy chỉnh. Tuy nhiên Google lưu ý Marker sử dụng `iconView` có thể có hiệu năng thấp hơn bitmap hoặc marker mặc định.

Do đó không nên tạo hàng nghìn custom View nếu không cần thiết.

---

# 14. Map ID và Advanced Marker

Advanced Marker yêu cầu sử dụng renderer mới của Maps SDK và cần **Map ID**.

Google khuyến nghị kiểm tra khả năng hỗ trợ tại runtime:

```kotlin
val capabilities =
    googleMap.mapCapabilities

if (
    capabilities.isAdvancedMarkersAvailable
) {

    // Advanced Marker

} else {

    // Standard Marker fallback
}
```

Một số thiết bị có thể không hỗ trợ Advanced Marker, vì vậy ứng dụng production nên có fallback về Marker thường.

Luồng:

```text
Google Map ready
       │
       ▼
MapCapabilities
       │
       ▼
Advanced Marker available?
       │
    ┌──┴───┐
   Yes     No
    │       │
    ▼       ▼
Advanced  Standard
Marker    Marker
```

---

# 15. API Key

Google Maps SDK yêu cầu API key.

Không nên viết trực tiếp:

```kotlin
const val API_KEY =
    "AIza...."
```

trong source code public.

Một cấu trúc thường dùng:

```text
Google Cloud
     │
     ▼
Maps API Key
     │
     ▼
secrets.properties
     │
     ▼
Gradle
     │
     ▼
AndroidManifest
```

Ví dụ:

```properties
MAPS_API_KEY=YOUR_API_KEY
```

Sau đó truyền vào manifest thông qua cấu hình Gradle phù hợp.

Google cũng cung cấp sample Android sử dụng `secrets.properties` để tránh đặt key trực tiếp trong code.

---

# 16. Có cần quyền Location không?

Một điểm rất dễ nhầm:

> **Thêm Marker vào bản đồ không tự động yêu cầu quyền GPS.**

Nếu bạn chỉ đặt Marker:

```kotlin
LatLng(
    10.7721,
    106.6579
)
```

thì không cần:

```xml
ACCESS_FINE_LOCATION
```

Quyền location chỉ cần khi ứng dụng muốn lấy vị trí thiết bị, ví dụ:

```text
Marker cửa hàng
       │
       └── Không cần GPS permission


Vị trí hiện tại của user
       │
       └── Có thể cần location permission
```

Ví dụ:

```text
User
 │
 ▼
Permission
 │
 ▼
Fused Location Provider
 │
 ▼
Current LatLng
 │
 ▼
Marker/User Location
```

Đây là khác biệt rất quan trọng khi thiết kế quyền riêng tư.

---

# 17. State và lifecycle

Maps Marker có thể phụ thuộc vào nhiều loại state:

```text
MapUiState
│
├── markers
├── selectedMarker
├── cameraPosition
├── loading
├── error
└── filter
```

Không nên đặt toàn bộ state quan trọng trong local UI nếu cần tồn tại sau:

* Rotate màn hình.
* Recomposition.
* Navigate sang màn hình khác.
* App background.
* Process recreation.

Ví dụ:

```text
Repository
    │
ViewModel
    │
StateFlow
    │
Compose
    │
Google Maps
```

---

# 18. Không lưu Marker object trong ViewModel

Một lỗi thiết kế phổ biến là đưa object thuộc SDK UI vào ViewModel.

Ví dụ không nên:

```kotlin
data class MapUiState(
    val marker: Marker?
)
```

Tốt hơn:

```kotlin
data class MarkerUiModel(
    val id: String,
    val latitude: Double,
    val longitude: Double,
    val title: String
)
```

Sau đó UI chuyển dữ liệu thành Marker.

```text
Domain/Data
     │
     ▼
MarkerUiModel
     │
     ▼
Compose
     │
     ▼
Marker
```

Ưu điểm:

* Dễ test.
* Giảm coupling với Maps SDK.
* Không đưa UI object vào business logic.
* State dễ serialize hơn.
* Dễ thay đổi map provider.

---

# 19. Marker từ REST API

Ví dụ API:

```json
[
  {
    "id": "store_01",
    "name": "Store A",
    "lat": 10.7721,
    "lng": 106.6579
  },
  {
    "id": "store_02",
    "name": "Store B",
    "lat": 10.7760,
    "lng": 106.6600
  }
]
```

Luồng:

```text
REST API
   │
   ▼
Retrofit
   │
   ▼
Repository
   │
   ▼
ViewModel
   │
   ▼
List<Place>
   │
   ▼
GoogleMap
   │
   ├── 📍 Store A
   └── 📍 Store B
```

Đây là mô hình rất phổ biến trong:

* Delivery.
* Booking.
* Real estate.
* Travel.
* Taxi.
* Social apps.

---

# 20. Loading State

Không nên để người dùng nhìn thấy bản đồ trống mà không biết chuyện gì xảy ra.

Ví dụ:

```kotlin
when {

    state.loading -> {
        CircularProgressIndicator()
    }

    state.error != null -> {
        ErrorView()
    }

    else -> {
        MapContent(
            places = state.places
        )
    }
}
```

State machine:

```text
        ┌─────────┐
        │ Loading │
        └────┬────┘
             │
       ┌─────┴─────┐
       ▼           ▼
   Success        Error
       │           │
       ▼           ▼
    Markers       Retry
```

---

# 21. Dữ liệu tọa độ lỗi

Server có thể trả về dữ liệu không hợp lệ.

Ví dụ:

```text
latitude = null

longitude = null
```

hoặc:

```text
latitude = 999
```

Trong khi phạm vi hợp lệ là:

```text
latitude
-90 → +90

longitude
-180 → +180
```

Có thể validation:

```kotlin
fun Place.hasValidLocation(): Boolean {

    return latitude in -90.0..90.0 &&
           longitude in -180.0..180.0
}
```

Sau đó:

```kotlin
places
    .filter { it.hasValidLocation() }
```

---

# 22. Marker Selection

Một UX thường gặp là thay đổi trạng thái Marker được chọn.

Ví dụ:

```text
Normal marker
     │
     ▼
    📍

User tap
     │
     ▼

Selected marker
     │
     ▼
    🔵
```

State:

```kotlin
var selectedPlaceId by
    rememberSaveable {
        mutableStateOf<String?>(null)
    }
```

Logic:

```text
Marker click
     │
     ▼
selectedPlaceId
     │
     ▼
Recomposition
     │
     ▼
Marker appearance
```

---

# 23. Marker và Camera

Khi người dùng chọn Marker, camera có thể di chuyển tới vị trí đó.

Ví dụ:

```text
Search Result
      │
      ▼
Select Place
      │
      ▼
Update selectedMarker
      │
      ▼
Animate Camera
      │
      ▼
Show Bottom Sheet
```

Một UX tốt thường kết hợp:

```text
Marker
+
Camera animation
+
Place detail
```

thay vì chỉ hiển thị pin.

---

# 24. Marker Collision

Khi nhiều Marker nằm gần nhau:

```text
📍📍📍📍📍
```

chúng có thể che nhau.

Advanced Marker hỗ trợ **collision behavior**, cho phép xác định Marker nào nên được ưu tiên khi Marker hoặc label trên bản đồ chồng lên nhau.

Ví dụ:

```text
Restaurant
     📍
    📍📍
   📍📍📍
```

Có thể ưu tiên:

```text
Selected marker
      >
Important marker
      >
Normal marker
```

---

# 25. Marker Clustering

Nếu có vài nghìn địa điểm, không nên luôn hiển thị toàn bộ Marker riêng lẻ.

Ví dụ:

```text
Không cluster

📍 📍 📍 📍
 📍📍📍
📍 📍 📍 📍


Cluster

     ┌────┐
     │ 48 │
     └────┘
```

Khi zoom:

```text
Zoom out

       128
        │
        ▼

Zoom in

 📍  📍  📍
   📍
 📍  📍
```

Clustering giúp:

* Giảm clutter.
* Dễ nhìn.
* Cải thiện UX.
* Có thể giảm số Marker phải render cùng lúc.

---

# 26. Performance

Một số lượng nhỏ Marker thường không gây vấn đề lớn.

Nhưng nếu dữ liệu có:

```text
10 Marker
100 Marker
1.000 Marker
10.000 Marker
```

developer cần xem xét:

* Clustering.
* Filtering theo viewport.
* Pagination.
* Server-side geo query.
* Cache dữ liệu.
* Hạn chế custom View.
* Tránh tạo object không cần thiết mỗi recomposition.

Kiến trúc tốt hơn:

```text
Database
    │
    ▼
Geo Query
    │
    ▼
Visible Bounding Box
    │
    ▼
Nearby Places
    │
    ▼
Clusters
    │
    ▼
Markers
```

---

# 27. Privacy

Marker có thể chứa dữ liệu nhạy cảm.

Ví dụ:

```text
User home location
Employee location
Delivery driver
Children location
Medical facility
```

Không nên tự động hiển thị dữ liệu vị trí cá nhân cho người khác.

Cần xem xét:

* User consent.
* Data retention.
* Location precision.
* Logging.
* Analytics.
* Backend authorization.
* API access control.

Ví dụ:

```text
Exact location

10.77214512
106.65793622
```

đôi khi có thể thay bằng vùng gần đúng nếu nghiệp vụ không cần độ chính xác cao.

---

# 28. Failure Scenarios

Một Maps Marker implementation production-ready nên xử lý ít nhất các trường hợp sau.

### API key lỗi

```text
Map
 │
 ▼
Authentication error
 │
 ▼
Map không tải đúng
```

Kiểm tra:

* API key.
* Package name.
* SHA certificate.
* API restrictions.
* Billing/project configuration.

---

### Network lỗi

```text
Request places
     │
     ▼
No network
     │
     ▼
Cached data?
   ┌─┴─┐
  Yes No
   │   │
   ▼   ▼
Show  Error
cache  + Retry
```

---

### Không có Marker

Không nên coi danh sách rỗng là lỗi.

```text
places = []
```

UI có thể hiển thị:

> Không tìm thấy địa điểm trong khu vực này.

---

### Dữ liệu location sai

```text
lat = null
lng = null
```

Không tạo Marker.

---

### Advanced Marker không hỗ trợ

```text
Advanced available?
        │
    ┌───┴───┐
   Yes      No
    │        │
Advanced  Standard
Marker    Marker
```

Google khuyến nghị kiểm tra `MapCapabilities` và có fallback cho trường hợp này.

---

# 29. Mini Project — Nearby Places Map

## Yêu cầu

Xây dựng màn hình:

```text
┌───────────────────────────────┐
│ 🔎 Search places             │
├───────────────────────────────┤
│                               │
│       📍                      │
│                   📍          │
│              📍               │
│                               │
│          Google Maps          │
│                               │
├───────────────────────────────┤
│ Coffee House                  │
│ ⭐ 4.7 • 350 m                │
│                               │
│ [Xem chi tiết]               │
└───────────────────────────────┘
```

Ứng dụng phải có:

* Google Map.
* Ít nhất 5 Marker.
* Marker title.
* Marker snippet.
* Marker click.
* Selected place.
* Bottom sheet hoặc detail panel.
* Loading state.
* Empty state.
* Error state.

---

# 30. Dữ liệu mẫu

```kotlin
val places = listOf(

    Place(
        id = "1",
        name = "Coffee House",
        latitude = 10.7721,
        longitude = 106.6579
    ),

    Place(
        id = "2",
        name = "Restaurant",
        latitude = 10.7740,
        longitude = 106.6600
    ),

    Place(
        id = "3",
        name = "Library",
        latitude = 10.7700,
        longitude = 106.6550
    )
)
```

---

# 31. Code thực hành hoàn chỉnh

```kotlin
@Composable
fun PlacesMap(
    places: List<Place>,
    onPlaceSelected: (Place) -> Unit
) {

    GoogleMap(
        modifier = Modifier.fillMaxSize()
    ) {

        places.forEach { place ->

            Marker(
                state = rememberUpdatedMarkerState(
                    position = LatLng(
                        place.latitude,
                        place.longitude
                    )
                ),
                title = place.name,
                onClick = {

                    onPlaceSelected(place)

                    true
                }
            )
        }
    }
}
```

Screen:

```kotlin
@Composable
fun MapScreen(
    viewModel: MapViewModel
) {

    val state by
        viewModel.uiState.collectAsStateWithLifecycle()

    Box(
        modifier = Modifier.fillMaxSize()
    ) {

        PlacesMap(
            places = state.places,
            onPlaceSelected =
                viewModel::selectPlace
        )

        state.selectedPlace?.let { place ->

            PlaceBottomSheet(
                place = place
            )
        }
    }
}
```

---

# 32. Testing

## Unit Test

Có thể test logic validation tọa độ.

```kotlin
@Test
fun invalidLatitude_isRejected() {

    val place = Place(
        id = "1",
        name = "Test",
        latitude = 100.0,
        longitude = 106.0
    )

    assertFalse(
        place.hasValidLocation()
    )
}
```

---

## ViewModel Test

Kiểm tra Marker được chọn.

```text
Given
places loaded

When
selectPlace(placeA)

Then
selectedPlace == placeA
```

---

## UI Test

Kiểm tra:

```text
Map screen opens
      │
      ▼
Marker visible
      │
      ▼
Tap Marker
      │
      ▼
Place information appears
```

---

# 33. Debugging Checklist

Nếu Marker không xuất hiện:

* Kiểm tra latitude.
* Kiểm tra longitude.
* Kiểm tra camera đang nhìn đúng khu vực.
* Kiểm tra Marker có nằm ngoài viewport không.
* Kiểm tra danh sách dữ liệu có rỗng không.
* Kiểm tra Maps API key.
* Kiểm tra Maps SDK đã enable.
* Kiểm tra logcat.
* Kiểm tra network response.
* Kiểm tra Marker đang bị filter không.

Một lỗi rất thường gặp:

```text
Marker thực sự tồn tại
        │
        ▼
Camera đang ở vị trí khác
        │
        ▼
Developer tưởng Marker không render
```

---

# 34. Production Architecture

Một kiến trúc có thể dùng:

```text
┌───────────────────────────┐
│        Backend API        │
│       Places / Shops      │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│         Repository        │
│     Cache + Networking    │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│         ViewModel         │
│                           │
│ MapUiState                │
│ ├── places                │
│ ├── selectedPlace         │
│ ├── loading               │
│ └── error                 │
└─────────────┬─────────────┘
              │ StateFlow
              ▼
┌───────────────────────────┐
│       Compose Screen      │
│                           │
│ GoogleMap                 │
│ ├── Marker                │
│ ├── Marker                │
│ └── Marker                │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│        User Action        │
│                           │
│ Marker click              │
│ Search                    │
│ Filter                    │
│ Camera move               │
└───────────────────────────┘
```

---

# 35. Artifact cho Portfolio

Một artifact tốt cho bài này:

```text
maps-marker-demo/
│
├── data/
│   ├── Place.kt
│   └── PlaceRepository.kt
│
├── ui/
│   ├── MapScreen.kt
│   ├── PlacesMap.kt
│   └── PlaceBottomSheet.kt
│
├── viewmodel/
│   └── MapViewModel.kt
│
├── screenshots/
│   ├── map-markers.png
│   ├── selected-marker.png
│   └── error-state.png
│
└── README.md
```

README nên mô tả:

```markdown
# Google Maps Marker Demo

## Features

- Google Maps
- Multiple markers
- Marker selection
- Info window
- Bottom sheet
- Location validation
- Loading/error state
- Advanced Marker fallback

## Architecture

Repository
→ ViewModel
→ StateFlow
→ Compose
→ GoogleMap
```

---

# 36. Bài tập

## Bài 1 — Marker cơ bản

Hiển thị Marker tại một địa điểm cố định.

Yêu cầu:

* `LatLng`.
* `title`.
* `snippet`.

---

## Bài 2 — Multiple Markers

Tạo danh sách ít nhất:

```text
5 địa điểm
```

và hiển thị trên bản đồ.

---

## Bài 3 — Marker Click

Khi người dùng nhấn Marker:

```text
Marker
   │
   ▼
selectedPlace
   │
   ▼
Bottom Sheet
```

Hiển thị:

* Tên.
* Địa chỉ.
* Khoảng cách.
* Mô tả.

---

## Bài 4 — Failure Scenario

Giả lập:

```text
Repository
     │
     ▼
Network Error
```

Hiển thị:

```text
Không thể tải địa điểm

[Thử lại]
```

---

## Bài 5 — Advanced Marker

Nếu thiết bị hỗ trợ:

```text
Advanced Marker
```

Nếu không:

```text
Standard Marker
```

Triển khai fallback phù hợp.

---

# 37. Câu hỏi tự kiểm tra

### Câu 1

Marker dùng để làm gì?

**Đáp án:** Đánh dấu một tọa độ hoặc địa điểm cụ thể trên bản đồ.

---

### Câu 2

Kiểu dữ liệu nào thường biểu diễn vị trí Marker?

**Đáp án:**

```kotlin
LatLng
```

---

### Câu 3

Thêm Marker cố định có cần quyền GPS không?

**Đáp án:** Không.

Chỉ cần quyền location khi ứng dụng muốn truy cập vị trí của thiết bị/người dùng.

---

### Câu 4

Có nên lưu `Marker` SDK object trong ViewModel không?

**Đáp án:** Thông thường không.

Nên lưu dữ liệu domain/UI model như:

```text
id
latitude
longitude
title
```

và để UI tạo Marker.

---

### Câu 5

Nếu có 10.000 địa điểm nên làm gì?

Không nên đơn giản render 10.000 custom Marker cùng lúc.

Nên cân nhắc:

```text
Clustering
+
Viewport filtering
+
Geo query
+
Caching
```

---

# 38. Checklist hoàn thành

* [ ] Giải thích được Maps Marker là gì.
* [ ] Hiểu `LatLng`.
* [ ] Hiển thị được Marker trên Google Maps.
* [ ] Sử dụng `MarkerState`.
* [ ] Thêm `title`.
* [ ] Thêm `snippet`.
* [ ] Xử lý Marker click.
* [ ] Hiển thị nhiều Marker.
* [ ] Quản lý Marker bằng state.
* [ ] Hiểu Marker không tự yêu cầu GPS permission.
* [ ] Validation latitude/longitude.
* [ ] Có loading state.
* [ ] Có empty state.
* [ ] Có error state.
* [ ] Biết Advanced Marker là gì.
* [ ] Biết Advanced Marker cần kiểm tra khả năng hỗ trợ.
* [ ] Có fallback sang Marker thường.
* [ ] Hiểu vấn đề Marker collision.
* [ ] Biết khi nào nên dùng clustering.
* [ ] Có ghi chú privacy.
* [ ] Có test cho logic liên quan.
* [ ] Có screenshot demo.
* [ ] Có README cho project.
* [ ] Có artifact nhỏ để đưa vào portfolio.

---

# 39. Ghi chú production

Trước khi release một tính năng Maps Marker, hãy kiểm tra toàn bộ chuỗi:

```text
API Key
   │
   ▼
Map load
   │
   ▼
Location Data
   │
   ▼
Validation
   │
   ▼
ViewModel State
   │
   ▼
Markers
   │
   ▼
Marker Click
   │
   ▼
Selected Place
   │
   ▼
User Action
```

Đặc biệt cần hỏi:

1. Marker lấy dữ liệu từ đâu?
2. Dữ liệu có thể null hoặc sai tọa độ không?
3. Khi network mất thì UI hiển thị gì?
4. Khi rotate màn hình, selected place có bị mất không?
5. Có vô tình yêu cầu GPS permission khi không cần thiết không?
6. API key đã được giới hạn đúng chưa?
7. Có log tọa độ nhạy cảm của user không?
8. Khi số Marker tăng lên 1.000+ thì performance ra sao?
9. Có cần clustering không?
10. Custom marker có quá nặng không?
11. Advanced Marker không hỗ trợ thì có fallback không?
12. Marker click có tạo ra user flow rõ ràng không?
13. Có test cho validation và state không?

---

## 40. Kết luận

**Maps Marker** nhìn bề ngoài chỉ là một chiếc pin trên Google Maps:

```text
📍
```

nhưng trong ứng dụng Android production, luồng thực tế thường là:

```text
Backend
   ↓
Repository
   ↓
ViewModel
   ↓
UI State
   ↓
Google Maps
   ↓
Marker
   ↓
User Interaction
   ↓
Place Detail / Navigation / Action
```

Mục tiêu của bài này không chỉ là biết viết:

```kotlin
Marker(...)
```

mà là hiểu cách Marker tham gia vào toàn bộ kiến trúc ứng dụng:

> **Data → State → Map → Marker → Interaction → User Experience**

Khi đã nắm được luồng này, bạn có thể phát triển tiếp các tính năng phức tạp hơn như **marker clustering, nearby search, live tracking, route navigation, geofencing và location-based services**.
