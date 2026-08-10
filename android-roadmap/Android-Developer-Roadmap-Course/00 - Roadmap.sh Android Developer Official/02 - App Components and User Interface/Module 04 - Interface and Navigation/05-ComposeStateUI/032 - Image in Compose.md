# 032 - Image trong Jetpack Compose

> **Học phần:** 02 - App Components and User Interface  
> **Module:** Module 04 - Interface and Navigation  
> **Nhóm nội dung:** Jetpack Compose  
> **Nguồn roadmap:** Interface and Navigation / Jetpack Compose  
> **Loại bài:** UI  
> **Thứ tự trong module:** 032  
> **Thời lượng gợi ý:** 30 phút  

---

## 1. Tóm tắt

Trong Jetpack Compose, `Image` là composable dùng để **hiển thị hình ảnh trong giao diện Android**.

Hình ảnh có thể đến từ nhiều nguồn:

- Drawable nằm trong ứng dụng.
- Bitmap.
- Vector drawable.
- URL trên Internet.
- Dữ liệu được tải từ API hoặc backend.

Với ảnh nằm trong resources, Compose thường kết hợp:

```text
Image
  ↓
Painter
  ↓
painterResource(...)
  ↓
res/drawable
```

Với ảnh từ Internet, ứng dụng thường sử dụng thư viện tải ảnh như **Coil**:

```text
URL
 ↓
Image loader
 ↓
Network / Cache
 ↓
Decode
 ↓
AsyncImage
 ↓
UI
```

`Image` không chỉ liên quan đến việc "đưa ảnh lên màn hình". Một implementation tốt còn phải quan tâm đến:

- tỷ lệ ảnh;
- crop và scale;
- accessibility;
- loading/error state;
- cache;
- kích thước bitmap;
- recomposition;
- hiệu năng khi cuộn danh sách;
- trải nghiệm khi mạng chậm hoặc mất mạng.

---

## 2. Mục tiêu học tập

Sau bài này, bạn có thể:

- Giải thích được vai trò của `Image` trong Jetpack Compose.
- Hiển thị ảnh từ `res/drawable`.
- Hiểu vai trò của `Painter`.
- Sử dụng `Modifier` để thay đổi kích thước và hình dạng ảnh.
- Phân biệt các chế độ `ContentScale`.
- Viết `contentDescription` đúng cho accessibility.
- Hiển thị ảnh từ Internet bằng Coil.
- Hiểu cách state thay đổi ảnh và kích hoạt recomposition.
- Nhận biết các vấn đề hiệu năng thường gặp với ảnh.
- Tạo một mini UI đủ tốt để đưa vào portfolio.

---

# 3. `Image` nằm ở đâu trong kiến trúc Compose?

Một màn hình Compose thường có luồng như sau:

```text
┌─────────────────────────────┐
│          UI State           │
│ imageUrl / imageRes / mode  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        Composable UI        │
│                             │
│ Text     Image     Button   │
└──────────────┬──────────────┘
               │
        State thay đổi
               │
               ▼
┌─────────────────────────────┐
│        Recomposition        │
│                             │
│ Compose cập nhật phần UI    │
│ cần thiết                   │
└─────────────────────────────┘
```

Ví dụ:

```kotlin
var selectedImage by rememberSaveable {
    mutableIntStateOf(R.drawable.dog_1)
}

Image(
    painter = painterResource(selectedImage),
    contentDescription = "Ảnh chú chó"
)
```

Khi:

```kotlin
selectedImage = R.drawable.dog_2
```

state thay đổi và Compose sẽ cập nhật `Image`.

---

# 4. Cú pháp cơ bản

Ví dụ đơn giản nhất:

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Một chú chó"
)
```

Hai tham số quan trọng nhất là:

| Tham số | Vai trò |
|---|---|
| `painter` | Xác định nội dung cần vẽ |
| `contentDescription` | Mô tả ảnh cho accessibility |

---

# 5. Hiển thị ảnh từ `res/drawable`

Giả sử project có:

```text
app/
└── src/
    └── main/
        └── res/
            └── drawable/
                └── dog.jpg
```

Code:

```kotlin
import androidx.compose.foundation.Image
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.painterResource

@Composable
fun DogImage() {
    Image(
        painter = painterResource(id = R.drawable.dog),
        contentDescription = "Chú chó Golden Retriever"
    )
}
```

`painterResource()` có thể được sử dụng để đọc nhiều loại drawable phổ biến mà Android hỗ trợ.

---

## 5.1. Minh họa

![Ảnh nguồn dùng trong ví dụ Image Compose](https://developer.android.com/static/develop/ui/compose/quick-guides/content/dog.png)

*Nguồn minh họa: Android Developers.*

---

# 6. `Painter` là gì?

Trong Compose, `Image` thường không trực tiếp nhận một file ảnh.

Nó nhận một đối tượng có khả năng **vẽ nội dung**.

Có thể hình dung:

```text
File ảnh / Vector / Bitmap
          │
          ▼
       Painter
          │
          ▼
        Image
          │
          ▼
        Screen
```

Một số painter thường gặp:

```text
Painter
├── painterResource(...)
├── BitmapPainter
└── VectorPainter
```

Trong bài cơ bản này, trường hợp quan trọng nhất là:

```kotlin
painterResource(R.drawable.dog)
```

---

# 7. Kích thước ảnh với `Modifier`

`Image` có thể sử dụng hầu hết các `Modifier` quen thuộc của Compose.

Ví dụ:

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Chú chó",
    modifier = Modifier.size(180.dp)
)
```

Hoặc:

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Chú chó",
    modifier = Modifier
        .fillMaxWidth()
        .height(240.dp)
)
```

---

# 8. `ContentScale`

`ContentScale` quyết định ảnh được **co giãn hoặc crop như thế nào** khi kích thước ảnh nguồn không giống kích thước vùng chứa.

Ví dụ:

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Chú chó",
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .fillMaxWidth()
        .height(220.dp)
)
```

Các mode quan trọng:

| `ContentScale` | Ý nghĩa | Thường dùng |
|---|---|---|
| `Fit` | Giữ toàn bộ ảnh, giữ tỷ lệ | Logo, ảnh cần xem đầy đủ |
| `Crop` | Phóng và cắt để lấp đầy container | Avatar, card, thumbnail |
| `FillWidth` | Lấp đầy chiều rộng | Banner |
| `FillHeight` | Lấp đầy chiều cao | Một số layout đặc biệt |
| `FillBounds` | Kéo giãn theo cả hai chiều | Hiếm dùng vì dễ méo ảnh |
| `Inside` | Giữ ảnh nằm bên trong bounds | Ảnh nhỏ, icon lớn |
| `None` | Không scale | Trường hợp đặc biệt |

---

## 8.1. `ContentScale.Fit`

```kotlin
contentScale = ContentScale.Fit
```

Ảnh được giữ nguyên tỷ lệ và toàn bộ ảnh nằm trong vùng chứa.

![Minh họa ContentScale Fit](https://developer.android.com/static/develop/ui/compose/images/graphics-CSF-Portrait.png)

---

## 8.2. `ContentScale.Crop`

```kotlin
contentScale = ContentScale.Crop
```

Ảnh được scale để **lấp đầy vùng chứa**, phần dư có thể bị cắt.

![Minh họa ContentScale Crop](https://developer.android.com/static/develop/ui/compose/images/graphics-CSC-Portrait.png)

---

## 8.3. Không nên lạm dụng `FillBounds`

`FillBounds` có thể làm thay đổi tỷ lệ ngang/dọc của ảnh.

![Minh họa ảnh bị kéo giãn](https://developer.android.com/static/develop/ui/compose/images/graphics-CSFB-Portrait.png)

Trong UI thực tế, `Crop` hoặc `Fit` thường an toàn hơn.

---

# 9. Bo góc ảnh

Compose không cần một `ImageView` đặc biệt để tạo ảnh bo góc.

Chỉ cần dùng `Modifier.clip()`.

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Chú chó",
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .size(180.dp)
        .clip(RoundedCornerShape(24.dp))
)
```

Minh họa:

![Ảnh bo góc trong Jetpack Compose](https://developer.android.com/static/develop/ui/compose/images/graphics-roundedcorners.png)

---

# 10. Tạo avatar hình tròn

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Ảnh đại diện chú chó",
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .size(120.dp)
        .clip(CircleShape)
)
```

Kết quả:

![Ảnh được clip thành hình tròn](https://developer.android.com/static/develop/ui/compose/images/graphics-clipcircle.png)

---

# 11. `contentDescription` và Accessibility

`contentDescription` không phải là text phụ cho developer.

Nó được accessibility services như TalkBack sử dụng để mô tả hình ảnh.

Ví dụ tốt:

```kotlin
Image(
    painter = painterResource(R.drawable.profile),
    contentDescription = "Ảnh đại diện của Nguyễn An"
)
```

Nếu ảnh chỉ dùng để trang trí và không truyền tải thông tin:

```kotlin
Image(
    painter = painterResource(R.drawable.decorative_background),
    contentDescription = null
)
```

## Quy tắc

```text
Ảnh có ý nghĩa?
     │
 ┌───┴────┐
 │        │
Có       Không
 │        │
 ▼        ▼
Mô tả   null
rõ ràng
```

Không nên viết:

```kotlin
contentDescription = "image"
```

Vì TalkBack đọc ra từ `"image"` gần như không cung cấp thông tin hữu ích.

Tốt hơn:

```kotlin
contentDescription = "Ảnh sản phẩm tai nghe màu đen"
```

---

# 12. State và `Image`

Compose là UI theo state.

Không nên nghĩ:

```text
"Tìm Image rồi đổi ảnh"
```

Thay vào đó:

```text
State thay đổi
      ↓
Composable chạy lại
      ↓
Image nhận painter/model mới
      ↓
UI hiển thị ảnh mới
```

---

# 13. Ví dụ thực hành: đổi ảnh bằng Button

Chuẩn bị:

```text
res/drawable/
├── dog_1.jpg
└── dog_2.jpg
```

Code:

```kotlin
@Composable
fun ImageSwitcherScreen() {

    var showSecondImage by rememberSaveable {
        mutableStateOf(false)
    }

    val imageRes = if (showSecondImage) {
        R.drawable.dog_2
    } else {
        R.drawable.dog_1
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {

        Image(
            painter = painterResource(imageRes),
            contentDescription = if (showSecondImage) {
                "Ảnh chú chó thứ hai"
            } else {
                "Ảnh chú chó thứ nhất"
            },
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .size(240.dp)
                .clip(RoundedCornerShape(24.dp))
        )

        Button(
            onClick = {
                showSecondImage = !showSecondImage
            }
        ) {
            Text("Đổi ảnh")
        }
    }
}
```

---

# 14. Luồng hoạt động của ví dụ

```text
┌────────────────────────────┐
│ showSecondImage = false    │
└──────────────┬─────────────┘
               │
               ▼
       R.drawable.dog_1
               │
               ▼
             Image
               │
               ▼
       Người dùng bấm Button
               │
               ▼
┌────────────────────────────┐
│ showSecondImage = true     │
└──────────────┬─────────────┘
               │
               ▼
         Recomposition
               │
               ▼
       R.drawable.dog_2
               │
               ▼
             Image
```

Điểm quan trọng:

> Developer thay đổi **state**, không thao tác trực tiếp lên View như cách tư duy UI imperative truyền thống.

---

# 15. Vì sao dùng `rememberSaveable`?

Nếu chỉ dùng:

```kotlin
remember {
    mutableStateOf(false)
}
```

state có thể bị mất khi Activity bị recreate.

Trong ví dụ nhỏ này:

```kotlin
rememberSaveable {
    mutableStateOf(false)
}
```

phù hợp hơn vì giá trị boolean có thể được lưu và phục hồi.

Trong ứng dụng lớn, state màn hình thường được đặt trong:

```text
ViewModel
   │
   ▼
UiState
   │
   ▼
Composable
```

---

# 16. Không nên lưu Bitmap lớn trong UI State

Không nên thiết kế state như sau:

```kotlin
data class UiState(
    val bitmap: Bitmap
)
```

nếu không thực sự cần thiết.

Trong đa số trường hợp nên lưu:

```kotlin
data class UiState(
    val imageUrl: String
)
```

hoặc:

```kotlin
data class UiState(
    val imageRes: Int
)
```

Sau đó để image-loading layer chịu trách nhiệm decode và cache ảnh.

Điều này giúp:

- state nhẹ hơn;
- giảm nguy cơ dùng nhiều memory;
- dễ serialize;
- dễ test;
- dễ quản lý lifecycle.

---

# 17. Hiển thị ảnh từ Internet bằng Coil

Đối với ảnh từ URL, `Image` + `painterResource()` không đủ.

Một lựa chọn phổ biến trong Compose là **Coil**.

Với Coil 3.5.0:

```kotlin
dependencies {
    implementation("io.coil-kt.coil3:coil-compose:3.5.0")
    implementation("io.coil-kt.coil3:coil-network-okhttp:3.5.0")
}
```

Sau đó:

```kotlin
import coil3.compose.AsyncImage

@Composable
fun NetworkImage() {
    AsyncImage(
        model = "https://example.com/dog.jpg",
        contentDescription = "Ảnh chú chó được tải từ Internet",
        contentScale = ContentScale.Crop,
        modifier = Modifier
            .fillMaxWidth()
            .height(240.dp)
            .clip(RoundedCornerShape(24.dp))
    )
}
```

---

# 18. Luồng tải ảnh qua mạng

```text
imageUrl
   │
   ▼
AsyncImage
   │
   ▼
ImageLoader
   │
   ├────► Memory Cache
   │
   ├────► Disk Cache
   │
   └────► Network
             │
             ▼
           Decode
             │
             ▼
           Painter
             │
             ▼
             UI
```

Điều này quan trọng vì ứng dụng không nên tự:

```text
HTTP request
    ↓
download bytes
    ↓
decode bitmap
    ↓
manage cache
```

cho mọi `Image` nếu một image loader đã xử lý tốt các nhiệm vụ đó.

---

# 19. Loading, Success và Error

Ảnh mạng có nhiều trạng thái:

```text
          ┌──────────┐
          │ Loading  │
          └────┬─────┘
               │
       ┌───────┴────────┐
       ▼                ▼
   Success            Error
       │                │
       ▼                ▼
 Hiển thị ảnh      Placeholder /
                    Retry UI
```

Ví dụ với Coil:

```kotlin
AsyncImage(
    model = ImageRequest.Builder(LocalContext.current)
        .data(imageUrl)
        .crossfade(true)
        .build(),
    contentDescription = "Ảnh sản phẩm",
    placeholder = painterResource(R.drawable.placeholder),
    error = painterResource(R.drawable.image_error),
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .fillMaxWidth()
        .height(220.dp)
)
```

Imports:

```kotlin
import coil3.compose.AsyncImage
import coil3.request.ImageRequest
```

---

# 20. Ví dụ UI gần với production

```kotlin
@Composable
fun ProductImage(
    imageUrl: String,
    productName: String,
    modifier: Modifier = Modifier
) {
    AsyncImage(
        model = ImageRequest.Builder(LocalContext.current)
            .data(imageUrl)
            .crossfade(true)
            .build(),
        contentDescription = "Ảnh sản phẩm $productName",
        placeholder = painterResource(R.drawable.placeholder),
        error = painterResource(R.drawable.image_error),
        contentScale = ContentScale.Crop,
        modifier = modifier
            .fillMaxWidth()
            .aspectRatio(1f)
            .clip(RoundedCornerShape(20.dp))
    )
}
```

Composable trên có ưu điểm:

- nhỏ;
- dễ tái sử dụng;
- nhận dữ liệu qua parameters;
- không giữ business state;
- dễ Preview;
- dễ test;
- dễ dùng trong `LazyColumn`.

---

# 21. `aspectRatio`

Nếu một card sản phẩm luôn cần ảnh vuông:

```kotlin
Modifier.aspectRatio(1f)
```

Ví dụ:

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Chú chó",
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .fillMaxWidth()
        .aspectRatio(1f)
)
```

Nếu banner cần 16:9:

```kotlin
Modifier.aspectRatio(16f / 9f)
```

---

# 22. `Image` trong `LazyColumn`

Một pattern phổ biến:

```kotlin
LazyColumn {
    items(products) { product ->

        ProductImage(
            imageUrl = product.imageUrl,
            productName = product.name
        )
    }
}
```

Đây là lúc hiệu năng ảnh trở nên rất quan trọng.

Nếu mỗi item tải ảnh quá lớn hoặc liên tục decode lại bitmap:

```text
Scroll
  ↓
Decode nhiều bitmap lớn
  ↓
Memory tăng
  ↓
GC tăng
  ↓
Jank
  ↓
UX kém
```

Image loader giúp giảm nhiều vấn đề thông qua cache, downsampling và quản lý request.

---

# 23. Sai lầm thường gặp

## Sai lầm 1: Không có `contentDescription`

```kotlin
Image(
    painter = painterResource(R.drawable.product),
    contentDescription = null
)
```

Nếu đây là ảnh chứa thông tin quan trọng thì accessibility sẽ kém.

---

## Sai lầm 2: Mọi ảnh đều có `contentDescription`

Ảnh trang trí không cần TalkBack đọc.

Với ảnh decoration:

```kotlin
contentDescription = null
```

là phù hợp.

---

## Sai lầm 3: Dùng `FillBounds` làm méo ảnh

```kotlin
contentScale = ContentScale.FillBounds
```

có thể khiến khuôn mặt, sản phẩm hoặc logo bị kéo giãn.

---

## Sai lầm 4: Tải ảnh Internet thủ công trong Composable

Không nên:

```kotlin
@Composable
fun BadImage() {
    // tự gọi HTTP trực tiếp trong UI
}
```

Composable nên mô tả UI thay vì tự quản lý toàn bộ networking pipeline.

---

## Sai lầm 5: Không có error state

Nếu request thất bại mà UI trở thành vùng trắng:

```text
Network error
    ↓
No feedback
    ↓
User không biết chuyện gì xảy ra
```

Tối thiểu nên có:

```text
placeholder
error image
retry
```

tùy mức độ quan trọng của màn hình.

---

## Sai lầm 6: Ảnh nguồn quá lớn

Ví dụ:

```text
Ảnh gốc: 6000 × 4000 px
UI cần: 120 × 120 dp
```

Decode bitmap không hợp lý có thể gây lãng phí memory.

---

# 24. Image và lifecycle

Bản thân `Image` chỉ là một phần UI.

Lifecycle trở nên đáng chú ý khi:

- ảnh đến từ mạng;
- màn hình chuyển background/foreground;
- Activity được recreate;
- state thay đổi;
- request đang chạy;
- người dùng navigate sang màn hình khác.

Một image loader tốt thường chịu trách nhiệm quản lý request và cache phù hợp thay vì buộc UI tự xử lý từng request.

State của màn hình nên tập trung vào:

```text
image URL
selected image
loading intent
user choice
```

thay vì tự giữ toàn bộ decoded bitmap khi không cần.

---

# 25. Image và recomposition

Ví dụ:

```kotlin
@Composable
fun Avatar(
    imageUrl: String
) {
    AsyncImage(
        model = imageUrl,
        contentDescription = "Ảnh đại diện"
    )
}
```

Khi một state khác trên screen thay đổi:

```kotlin
var isFollowing by remember {
    mutableStateOf(false)
}
```

Compose có thể recompose UI.

Điều này **không có nghĩa** developer nên thiết kế để mỗi recomposition tạo ra một networking pipeline mới.

Hãy:

- giữ composable nhỏ;
- truyền model ổn định;
- dùng image loader;
- tránh tạo object nặng không cần thiết trong mỗi lần recompose.

---

# 26. Testing

Có hai nhóm kiểm tra quan trọng.

## 26.1. Kiểm tra semantics

Ví dụ:

```kotlin
composeTestRule
    .onNodeWithContentDescription("Ảnh sản phẩm Laptop")
    .assertIsDisplayed()
```

Điều này kiểm tra:

```text
UI node tồn tại
+
contentDescription đúng
```

---

## 26.2. Visual testing

Một UI test thông thường không đảm bảo:

```text
ảnh crop đẹp?
bo góc đúng?
placeholder hợp lý?
ảnh có bị méo?
```

Vì vậy nên kết hợp:

- `@Preview`;
- emulator/device;
- screenshot test;
- manual visual checklist.

---

# 27. `@Preview`

Ví dụ:

```kotlin
@Preview(showBackground = true)
@Composable
private fun ProductImagePreview() {
    Image(
        painter = painterResource(R.drawable.dog),
        contentDescription = "Ảnh preview",
        contentScale = ContentScale.Crop,
        modifier = Modifier
            .size(220.dp)
            .clip(RoundedCornerShape(24.dp))
    )
}
```

Preview rất hữu ích để kiểm tra nhanh:

```text
size
crop
shape
spacing
theme
```

mà không cần chạy toàn bộ ứng dụng mỗi lần.

---

# 28. Debugging checklist

Khi ảnh không hiển thị, kiểm tra lần lượt:

```text
Ảnh không xuất hiện
       │
       ▼
Resource / URL đúng?
       │
       ▼
Dependency đúng?
       │
       ▼
Internet permission?
       │
       ▼
Request thành công?
       │
       ▼
Container có size?
       │
       ▼
ContentScale?
       │
       ▼
Error painter?
       │
       ▼
Logcat
```

Với ảnh Internet, Android app thường cần permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

---

# 29. Mini project thực hành

## Yêu cầu

Tạo màn hình `ImageDemoScreen`.

Màn hình có:

```text
┌────────────────────────────┐
│        IMAGE DEMO          │
│                            │
│   ┌────────────────────┐   │
│   │                    │   │
│   │       IMAGE        │   │
│   │                    │   │
│   └────────────────────┘   │
│                            │
│      [ ĐỔI ẢNH ]           │
│                            │
│ Fit | Crop                 │
└────────────────────────────┘
```

Người dùng có thể:

1. xem ảnh;
2. đổi giữa hai ảnh;
3. đổi giữa `Fit` và `Crop`.

---

# 30. Gợi ý implementation

State:

```kotlin
var secondImage by rememberSaveable {
    mutableStateOf(false)
}

var cropMode by rememberSaveable {
    mutableStateOf(true)
}
```

Derived UI:

```kotlin
val imageRes = if (secondImage) {
    R.drawable.dog_2
} else {
    R.drawable.dog_1
}

val scale = if (cropMode) {
    ContentScale.Crop
} else {
    ContentScale.Fit
}
```

Image:

```kotlin
Image(
    painter = painterResource(imageRes),
    contentDescription = "Ảnh demo",
    contentScale = scale,
    modifier = Modifier
        .fillMaxWidth()
        .height(260.dp)
        .clip(RoundedCornerShape(24.dp))
)
```

---

# 31. Bài tập

## Bài 1 — Local Image

Tạo một `Image` đọc ảnh từ `drawable`.

Yêu cầu:

- kích thước `200.dp`;
- bo góc `20.dp`;
- `ContentScale.Crop`;
- `contentDescription` phù hợp.

---

## Bài 2 — State

Thêm Button:

```text
[ Đổi ảnh ]
```

Mỗi lần nhấn:

```text
Ảnh A
 ↓
Ảnh B
 ↓
Ảnh A
```

---

## Bài 3 — ContentScale

Cho phép chuyển:

```text
Fit ⇄ Crop
```

Quan sát phần ảnh bị cắt.

---

## Bài 4 — Network Image

Sử dụng Coil để tải một ảnh từ URL.

Phải có:

- placeholder;
- error image;
- `contentDescription`.

---

## Bài 5 — Accessibility

Kiểm tra bằng TalkBack:

- ảnh nội dung có mô tả;
- ảnh decoration không bị đọc thừa.

---

# 32. Manual test checklist

```text
[ ] Ảnh local hiển thị.
[ ] Ảnh không bị méo.
[ ] Crop hoạt động đúng.
[ ] Fit hoạt động đúng.
[ ] Bo góc đúng.
[ ] Button đổi ảnh hoạt động.
[ ] Rotate màn hình không làm mất state cần thiết.
[ ] contentDescription có ý nghĩa.
[ ] Decoration image dùng contentDescription = null.
[ ] Network image có loading/error handling.
[ ] Mạng chậm không làm UI bị treo.
[ ] Scroll danh sách ảnh vẫn mượt.
```

---

# 33. Production checklist

Trước khi release một feature dùng nhiều ảnh, kiểm tra:

### UX

```text
[ ] Loading có feedback.
[ ] Error có fallback.
[ ] Ảnh không méo.
[ ] Crop không cắt mất nội dung quan trọng.
```

### Accessibility

```text
[ ] Ảnh mang thông tin có contentDescription.
[ ] Ảnh trang trí không làm TalkBack đọc thừa.
[ ] Description có thể localization.
```

### Performance

```text
[ ] Không decode bitmap khổng lồ không cần thiết.
[ ] Có image cache.
[ ] Feed cuộn mượt.
[ ] Không tải lại cùng ảnh liên tục.
```

### Architecture

```text
[ ] UI state giữ URL/resource ID thay vì bitmap lớn khi có thể.
[ ] Composable không tự quản lý networking phức tạp.
[ ] Image component nhỏ và tái sử dụng được.
```

### Testing

```text
[ ] Preview.
[ ] UI semantics test.
[ ] Manual visual test.
[ ] Network failure test.
[ ] Slow network test.
```

---

# 34. Artifact cho portfolio

Một artifact tốt cho bài này có thể gồm:

```text
compose-image-demo/
├── screenshot/
│   ├── fit.png
│   ├── crop.png
│   └── network-error.png
│
├── ImageDemoScreen.kt
└── README.md
```

README nên ghi ngắn:

```markdown
## Jetpack Compose Image Demo

Demo sử dụng:

- Image
- painterResource
- Modifier
- ContentScale.Fit
- ContentScale.Crop
- RoundedCornerShape
- Coil AsyncImage
- Loading/Error state
- Accessibility contentDescription
```

---

# 35. Kiến thức cần nhớ

```text
Image
 │
 ├── Local resource
 │      └── painterResource
 │
 ├── Network
 │      └── Coil / image loader
 │
 ├── Layout
 │      ├── size
 │      ├── aspectRatio
 │      └── fillMaxWidth
 │
 ├── Appearance
 │      ├── ContentScale
 │      ├── clip
 │      └── colorFilter
 │
 ├── Accessibility
 │      └── contentDescription
 │
 └── Production
        ├── cache
        ├── loading
        ├── error
        ├── memory
        └── testing
```

---

# 36. Tổng kết

`Image` là composable cơ bản nhưng xuất hiện trong gần như mọi loại ứng dụng Android:

- avatar;
- sản phẩm;
- bài viết;
- banner;
- gallery;
- social feed;
- thumbnail;
- onboarding;
- background;
- media content.

Cú pháp đơn giản:

```kotlin
Image(
    painter = painterResource(R.drawable.dog),
    contentDescription = "Chú chó"
)
```

nhưng khi đưa vào production, developer cần nghĩ thêm:

```text
Image
  +
State
  +
Accessibility
  +
ContentScale
  +
Loading/Error
  +
Cache
  +
Performance
  +
Testing
```

Nếu nắm được các mối liên hệ này, bạn không chỉ biết **"cách hiển thị một ảnh"**, mà còn hiểu cách xây dựng một image component đúng với tư duy Jetpack Compose và phù hợp cho ứng dụng thực tế.

---

# 37. Checklist hoàn thành bài

- [ ] Giải thích được `Image` là gì.
- [ ] Dùng được `painterResource`.
- [ ] Hiểu `Painter`.
- [ ] Dùng được `Modifier` với Image.
- [ ] Phân biệt `Fit` và `Crop`.
- [ ] Biết khi nào dùng `contentDescription = null`.
- [ ] Tạo được state để đổi ảnh.
- [ ] Hiểu tác động của recomposition.
- [ ] Hiển thị được ảnh Internet bằng Coil.
- [ ] Có loading/error strategy.
- [ ] Biết các rủi ro về bitmap và memory.
- [ ] Có screenshot hoặc README để đưa vào portfolio.

---

## Tài liệu tham khảo

- Android Developers — Working with images in Jetpack Compose:  
  https://developer.android.com/develop/ui/compose/graphics/images

- Android Developers — Loading images:  
  https://developer.android.com/develop/ui/compose/graphics/images/loading

- Android Developers — Customize an image:  
  https://developer.android.com/develop/ui/compose/graphics/images/customize

- Coil — Getting Started:  
  https://coil-kt.github.io/coil/getting_started/

- Coil — Compose:  
  https://coil-kt.github.io/coil/compose/

