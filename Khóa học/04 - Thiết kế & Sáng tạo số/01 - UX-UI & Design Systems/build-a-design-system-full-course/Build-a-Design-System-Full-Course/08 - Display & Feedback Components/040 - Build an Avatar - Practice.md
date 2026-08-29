# 040 — Xây dựng Avatar Component

## 1. Thông tin bài học

| Thuộc tính            | Nội dung                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Module**            | Display & Feedback Components                                                                                         |
| **Thời điểm bắt đầu** | 2:37:36                                                                                                               |
| **Thành phần**        | Avatar                                                                                                                |
| **Mục tiêu chính**    | Xây dựng Avatar có nhiều kích thước, hỗ trợ ảnh đại diện, biểu tượng mặc định, tên viết tắt và các thành phần mở rộng |

---

## 2. Avatar là gì?

**Avatar** là thành phần dùng để đại diện trực quan cho:

* Người dùng
* Thành viên trong nhóm
* Tác giả nội dung
* Tài khoản
* Tổ chức hoặc workspace
* Bot hoặc trợ lý ảo

Avatar thường xuất hiện trong:

* Thanh điều hướng
* Hồ sơ cá nhân
* Danh sách thành viên
* Bình luận
* Tin nhắn
* Bảng dữ liệu
* Nhóm cộng tác
* Menu tài khoản

Ví dụ:

```text
┌───────────────┐
│  (AK)  An Khánh
└───────────────┘
```

Trong đó:

* `(AK)` là Avatar.
* `An Khánh` là nhãn tên người dùng.

---

## 3. Ý tưởng chính của bài học

Bài học xây dựng một hệ thống Avatar có thể tái sử dụng với ba cách hiển thị chính:

1. **Avatar bằng hình ảnh**
2. **Avatar bằng biểu tượng người dùng**
3. **Avatar bằng tên viết tắt**

Ngoài ra, Avatar được mở rộng thêm:

* Các biến thể kích thước
* Viền bao quanh
* Nhóm Avatar chồng lên nhau
* Nhãn tên người dùng
* Slot dành cho trạng thái hoặc badge

---

## 4. Cấu trúc tổng quát của Avatar

```text
Avatar
├── Container
│   ├── Background
│   ├── Border
│   ├── Border radius
│   └── Clip content
│
├── Content
│   ├── Image
│   ├── Icon
│   └── Initials
│
└── Overlay
    ├── Status indicator
    ├── Badge
    └── Notification count
```

Avatar phải có một vùng chứa cố định, bên trong hiển thị một trong ba dạng nội dung.

---

# 5. Xây dựng Avatar cơ bản

## Bước 1: Tạo Frame chính

Tạo một Frame với kích thước ban đầu:

```text
Width: 64 px
Height: 64 px
```

Đây sẽ là kích thước lớn nhất của Avatar trong bài học.

Áp dụng **Auto Layout** cho Frame để nội dung luôn được căn giữa.

### Thiết lập đề xuất

| Thuộc tính           | Giá trị |
| -------------------- | ------- |
| Width                | 64 px   |
| Height               | 64 px   |
| Horizontal alignment | Center  |
| Vertical alignment   | Center  |
| Padding              | 0       |
| Gap                  | 0       |

---

## Bước 2: Tạo hình tròn

Avatar thường có hình tròn, vì vậy cần đặt bán kính góc đủ lớn.

Có thể sử dụng:

```text
Corner radius: 999 px
```

Hoặc:

```text
Corner radius: 50%
```

Trong Figma, giá trị `999` thường được sử dụng để bảo đảm Frame luôn trở thành hình tròn khi chiều rộng và chiều cao bằng nhau.

```text
64 × 64 + Radius 999
          ↓
       Hình tròn
```

---

## Bước 3: Áp dụng màu nền

Gán màu nền bằng Semantic Token thay vì sử dụng màu trực tiếp.

Ví dụ:

```text
Fill → surface/default
```

Hoặc:

```text
Fill → avatar/background
```

Nên tránh:

```text
Fill → #F1F1F1
```

Sử dụng token giúp Avatar tự động thích nghi với:

* Light mode
* Dark mode
* Theme thương hiệu
* Trạng thái tương phản cao

---

## Bước 4: Thêm biểu tượng người dùng

Thêm biểu tượng dạng:

```text
person-outline
```

hoặc:

```text
user
account-circle
profile
```

Biểu tượng này đóng vai trò là trạng thái dự phòng khi người dùng chưa có:

* Ảnh đại diện
* Tên viết tắt
* Dữ liệu hồ sơ đầy đủ

---

## Bước 5: Điều chỉnh vị trí biểu tượng

Nếu biểu tượng người dùng không cân đối khi đặt trong Auto Layout, có thể:

1. Chuyển biểu tượng sang **Absolute position**.
2. Phóng to biểu tượng.
3. Đặt biểu tượng vào giữa Frame.
4. Điều chỉnh vị trí theo trục X và Y.

Ví dụ:

```text
Avatar Frame: 64 × 64
Icon:         72 × 72
Position:     Center
```

Biểu tượng có thể lớn hơn Frame vì phần dư sẽ được cắt đi ở bước tiếp theo.

---

## Bước 6: Bật Clip content

Chọn Frame Avatar và bật:

```text
Clip content: On
```

Cấu trúc hoạt động:

```text
Biểu tượng lớn hơn Frame
          ↓
Frame hình tròn cắt phần dư
          ↓
Avatar hiển thị cân đối
```

Nếu không bật `Clip content`, biểu tượng hoặc hình ảnh có thể tràn ra ngoài vùng Avatar.

---

## Bước 7: Thêm đường viền

Để Avatar dễ phân biệt với nền giao diện, có thể thêm Stroke.

Ví dụ:

```text
Stroke: border/default
Stroke width: 1 px
```

Cấu hình đề xuất:

| Thuộc tính   | Token             |
| ------------ | ----------------- |
| Fill         | `surface/default` |
| Stroke       | `border/default`  |
| Icon         | `icon/subtle`     |
| Initial text | `text/default`    |

Viền đặc biệt hữu ích trong các trường hợp:

* Ảnh đại diện có nền trắng
* Avatar nằm trên nền sáng
* Các Avatar trong nhóm bị chồng lên nhau

---

# 6. Tạo Size Variants

Sau khi hoàn thành Avatar 64 × 64, chuyển nó thành Component.

Sau đó chọn:

```text
Add variant
```

Tạo thuộc tính:

```text
Size
```

Với ba giá trị:

```text
Size = Small
Size = Medium
Size = Large
```

## Bảng kích thước đề xuất

| Size   | Kích thước | Ngữ cảnh sử dụng                   |
| ------ | ---------: | ---------------------------------- |
| Small  | 32 × 32 px | Table, danh sách, comment          |
| Medium | 48 × 48 px | Card, menu, danh sách thành viên   |
| Large  | 64 × 64 px | Profile, trang chi tiết người dùng |

Sơ đồ:

```text
Small          Medium           Large
32 × 32        48 × 48          64 × 64

  ◯              ◯                ◯
```

Mỗi kích thước cần điều chỉnh lại:

* Kích thước biểu tượng
* Cỡ chữ của initials
* Kích thước badge trạng thái
* Độ dày viền nếu cần

---

# 7. Tạo các loại nội dung Avatar

Tạo thêm thuộc tính Variant:

```text
Type
```

Các giá trị có thể gồm:

```text
Type = Image
Type = Initials
Type = Icon
```

Ma trận Variant:

| Type     | Small   | Medium  | Large   |
| -------- | ------- | ------- | ------- |
| Icon     | 32 × 32 | 48 × 48 | 64 × 64 |
| Image    | 32 × 32 | 48 × 48 | 64 × 64 |
| Initials | 32 × 32 | 48 × 48 | 64 × 64 |

Tổng cộng:

```text
3 loại × 3 kích thước = 9 variants
```

---

## 7.1. Avatar dạng Icon

Dạng Icon được dùng khi không có dữ liệu cá nhân phù hợp.

```text
┌─────────┐
│   👤    │
└─────────┘
```

Thuộc tính đề xuất:

```text
Type = Icon
```

Tên component:

```text
Avatar / Type=Icon / Size=Large
```

---

## 7.2. Avatar dạng Image

Với Avatar hình ảnh:

1. Xóa biểu tượng bên trong.
2. Chọn Fill của Frame.
3. Chuyển Fill từ màu sang Image.
4. Chọn chế độ hiển thị phù hợp.

Thiết lập thường dùng:

```text
Image mode: Fill
```

`Fill` giúp hình ảnh phủ toàn bộ vùng Avatar mà không tạo khoảng trống.

```text
Ảnh chữ nhật
     ↓ Fill
Ảnh phủ Frame
     ↓ Clip content
Avatar hình tròn
```

Cần kiểm tra vị trí khuôn mặt sau khi sử dụng `Fill`, vì Figma có thể cắt mất phần quan trọng của ảnh.

---

## 7.3. Avatar dạng Initials

Initials là các chữ cái đầu trong tên người dùng.

Ví dụ:

```text
Trần An Khánh → AK
Kevin Miller  → KM
Cole Palmer   → CP
```

Thay biểu tượng bằng một Text Layer:

```text
AK
```

### Cỡ chữ đề xuất

| Avatar  | Text style tham khảo               |
| ------- | ---------------------------------- |
| 32 × 32 | Body Small Semibold                |
| 48 × 48 | Body Medium Semibold               |
| 64 × 64 | Heading 6 hoặc Body Large Semibold |

Không nên dùng cùng một cỡ chữ cho tất cả các kích thước Avatar.

---

## 8. Tạo Text Property cho Initials

Không nên để nội dung `AK` cố định trong Main Component.

Chọn Text Layer và tạo Component Property:

```text
Property type: Text
Property name: Initials
Default value: AK
```

Khi sử dụng Instance, người thiết kế có thể đổi thành:

```text
AK
CP
KM
JD
```

mà không cần Detach Component.

### Cấu trúc đề xuất

```text
Avatar
├── Size: Small | Medium | Large
├── Type: Image | Initials | Icon
└── Initials: AK
```

---

# 9. Slot trạng thái hoặc Badge

Avatar thường có một thành phần nhỏ nằm ở góc để biểu thị trạng thái.

Ví dụ:

```text
     ┌─────────┐
     │ Avatar  │ ●
     └─────────┘
```

Badge có thể thể hiện:

* Đang hoạt động
* Ngoại tuyến
* Đang bận
* Đã xác minh
* Thông báo mới
* Vai trò quản trị viên

## Status Variant đề xuất

```text
Status = None
Status = Online
Status = Offline
Status = Busy
Status = Away
```

Có thể dùng Boolean Property:

```text
Show status = True / False
```

Hoặc Instance Swap Property:

```text
Status indicator = Online dot
```

### Vị trí đề xuất

```text
Horizontal constraint: Right
Vertical constraint: Bottom
Position: Absolute
```

Badge nên có Stroke cùng màu với nền trang để tạo khoảng tách rõ ràng với Avatar.

---

# 10. Xây dựng Avatar Group

Avatar Group được dùng để thể hiện nhiều thành viên trong cùng một nhóm.

Ví dụ:

```text
(Ảnh 1)(Ảnh 2)(Ảnh 3)(+12)
```

## Các bước thực hiện

1. Tạo một Auto Layout nằm ngang.
2. Thêm 4–5 Avatar instances.
3. Đặt khoảng cách âm giữa các Avatar.

Ví dụ:

```text
Gap: -4 px
```

Kết quả:

```text
◯◯◯◯
```

Các Avatar chồng lên nhau một phần, giúp tiết kiệm không gian.

### Avatar cuối cùng

Avatar cuối có thể hiển thị số lượng thành viên còn lại:

```text
+12
```

Nên sử dụng Avatar dạng Initials hoặc một Variant riêng:

```text
Type = Counter
Text = +12
```

Cấu trúc:

```text
Avatar Group
├── Avatar 1
├── Avatar 2
├── Avatar 3
├── Avatar 4
└── Overflow Counter: +12
```

---

## Lưu ý về thứ tự lớp

Khi Avatar chồng lên nhau, thứ tự Layer ảnh hưởng đến cách hiển thị.

```text
Avatar 1
  └── Avatar 2 đè lên
        └── Avatar 3 đè lên
```

Cần xác định rõ:

* Avatar đầu hay Avatar cuối nằm trên cùng
* Viền nào phân tách các Avatar
* Thứ tự có phản ánh mức độ ưu tiên hay không

---

# 11. Xây dựng Avatar Label

Avatar Label kết hợp Avatar với tên hoặc thông tin người dùng.

Ví dụ:

```text
┌──────────────────────┐
│  (CP)  Cole Palmer   │
└──────────────────────┘
```

Cấu trúc:

```text
Avatar Label
├── Avatar Instance
└── Label
```

Áp dụng Auto Layout theo chiều ngang:

| Thuộc tính | Giá trị đề xuất |
| ---------- | --------------- |
| Direction  | Horizontal      |
| Alignment  | Center          |
| Gap        | 8–12 px         |
| Width      | Hug contents    |
| Height     | Hug contents    |

---

## Tạo Text Property cho nhãn

Chọn Text Layer và tạo:

```text
Property type: Text
Property name: Label
Default value: Cole Palmer
```

Khi sử dụng Instance, có thể đổi trực tiếp:

```text
Cole Palmer
Trần An Khánh
Kevin Miller
```

---

## Thêm biểu tượng mở rộng

Avatar Label có thể chứa thêm biểu tượng như:

* Mũi tên xuống
* Menu
* Trạng thái
* Nút chỉnh sửa
* Emoji
* Badge vai trò

Cấu trúc mở rộng:

```text
Avatar Label
├── Avatar
├── Content
│   ├── Name
│   └── Supporting text
└── Trailing icon
```

Có thể tạo Boolean Property:

```text
Show trailing icon = True / False
```

Hoặc Instance Swap Property:

```text
Trailing icon = Chevron down
```

---

# 12. Kiến trúc Component đề xuất

```text
Avatar
├── Type
│   ├── Image
│   ├── Initials
│   └── Icon
│
├── Size
│   ├── Small
│   ├── Medium
│   └── Large
│
├── Status
│   ├── None
│   ├── Online
│   ├── Offline
│   ├── Away
│   └── Busy
│
├── Properties
│   ├── Initials
│   ├── Show status
│   └── Status indicator
│
└── Tokens
    ├── Background
    ├── Border
    ├── Text
    └── Icon
```

Tên Variant ví dụ:

```text
Avatar
Type=Initials
Size=Medium
Status=Online
```

---

# 13. Token nên sử dụng

## Color tokens

```text
avatar/background/default
avatar/background/brand
avatar/text/default
avatar/icon/default
avatar/border/default
status/online
status/offline
status/busy
status/away
```

## Size tokens

```text
avatar/size/small   = 32
avatar/size/medium  = 48
avatar/size/large   = 64
```

## Spacing tokens

```text
avatar-label/gap = 8
avatar-group/overlap = -4
```

## Border tokens

```text
avatar/border-width = 1
avatar/status-border-width = 2
avatar/radius = full
```

---

# 14. Áp dụng vào Design System thực tế

## Thanh điều hướng

```text
Logo                  Notification   (AK)
```

Avatar được dùng để mở menu tài khoản.

---

## Danh sách thành viên

```text
(AK)  Trần An Khánh       Admin
(CP)  Cole Palmer         Member
(KM)  Kevin Miller        Editor
```

Nên dùng kích thước Small hoặc Medium.

---

## Bình luận

```text
(AK)  An Khánh
      Nội dung bình luận...
```

Avatar giúp người dùng nhanh chóng nhận diện tác giả.

---

## Nhóm cộng tác

```text
◯◯◯◯ +12
```

Avatar Group phù hợp với:

* Danh sách người tham gia
* Thành viên dự án
* Người đang chỉnh sửa tài liệu
* Người được gán nhiệm vụ

---

## Hồ sơ cá nhân

```text
       ┌─────────┐
       │  Avatar │
       └─────────┘
       An Khánh
       AI Engineer
```

Nên sử dụng Avatar Large hoặc một kích thước mở rộng như `XL`.

---

# 15. Rủi ro và hạn chế cần lưu ý

## 15.1. Ảnh bị cắt sai vị trí

Khi sử dụng chế độ `Fill`, khuôn mặt có thể bị cắt mất.

Giải pháp:

* Điều chỉnh vị trí ảnh.
* Sử dụng ảnh có chủ thể nằm giữa.
* Hỗ trợ thao tác crop ảnh trong sản phẩm.

---

## 15.2. Initials quá dài

Một số tên có thể tạo ra ba hoặc bốn ký tự.

Ví dụ:

```text
Trần An Khánh → TAK
```

Ba ký tự có thể không vừa trong Avatar Small.

Nên quy định:

```text
Initials tối đa: 2 ký tự
```

Ví dụ:

```text
Trần An Khánh → AK
```

---

## 15.3. Khả năng tiếp cận

Không nên chỉ dựa vào màu trạng thái.

Ví dụ, người dùng mù màu có thể khó phân biệt:

* Online màu xanh
* Busy màu đỏ
* Away màu vàng

Giải pháp:

* Thêm tooltip.
* Thêm nhãn văn bản.
* Dùng biểu tượng khác nhau.
* Cung cấp accessible name trong code.

---

## 15.4. Số lượng Variant quá lớn

Nếu kết hợp quá nhiều thuộc tính:

```text
3 Type × 5 Size × 5 Status × 3 Border
```

Số Variant sẽ là:

```text
3 × 5 × 5 × 3 = 225 variants
```

Điều này khiến Component Set khó quản lý.

Nên dùng:

* Boolean Property
* Text Property
* Instance Swap Property
* Nested Components

thay vì tạo Variant cho mọi tổ hợp.

---

## 15.5. Avatar Group thiếu giới hạn

Hiển thị quá nhiều Avatar sẽ làm giao diện rối.

Nên quy định số lượng tối đa, ví dụ:

```text
Hiển thị tối đa 4 Avatar
Phần còn lại hiển thị bằng +N
```

---

## 15.6. Border không tương thích với nền

Nếu Avatar Group sử dụng Stroke màu trắng nhưng được đặt trên nền trắng, đường phân cách có thể biến mất.

Nên dùng Semantic Token phụ thuộc vào ngữ cảnh:

```text
avatar/group-separator
```

---

# 16. Trả lời câu hỏi ôn tập

## Câu 1. Mục đích chính của bài “Build an Avatar” là gì?

Mục đích chính là xây dựng một Avatar Component linh hoạt để đại diện cho người dùng trong hệ thống giao diện.

Avatar cần hỗ trợ:

* Ảnh đại diện
* Tên viết tắt
* Biểu tượng mặc định
* Nhiều kích thước
* Trạng thái hoặc badge
* Khả năng tái sử dụng trong các thành phần phức hợp

Trong module **Display & Feedback Components**, Avatar đóng vai trò là thành phần hiển thị danh tính người dùng và cung cấp phản hồi trực quan về trạng thái của họ.

---

## Câu 2. Áp dụng Avatar vào Design System thực tế như thế nào?

Trong một Design System thực tế, nên:

1. Xác định các kích thước chuẩn.
2. Tạo các Type gồm Image, Initials và Icon.
3. Kết nối màu sắc với Semantic Tokens.
4. Dùng Text Property cho initials.
5. Dùng Boolean hoặc Instance Swap cho status.
6. Xây dựng Avatar Group bằng các Avatar instances.
7. Xây dựng Avatar Label bằng Avatar và Text Property.
8. Ghi rõ quy tắc sử dụng trong tài liệu component.

Ví dụ API component:

```text
Avatar
- Type: Image | Initials | Icon
- Size: Small | Medium | Large
- Initials: AK
- Show status: True
- Status: Online
```

---

## Câu 3. Các bước và ý tưởng chính được trình bày là gì?

Quy trình chính:

```text
Tạo Frame 64 × 64
        ↓
Áp dụng Auto Layout
        ↓
Tạo hình tròn
        ↓
Thêm Surface Token
        ↓
Thêm biểu tượng người dùng
        ↓
Bật Clip content
        ↓
Tạo Component
        ↓
Tạo Size Variants
        ↓
Tạo Image, Initials và Icon
        ↓
Thêm Text Property
        ↓
Tạo Avatar Group
        ↓
Tạo Avatar Label
```

---

## Câu 4. Rủi ro hoặc hạn chế nào cần lưu ý?

Các rủi ro quan trọng gồm:

* Ảnh bị crop sai vị trí.
* Initials quá dài.
* Text không co giãn đúng theo kích thước Avatar.
* Badge trạng thái quá nhỏ.
* Số lượng Variant tăng quá nhanh.
* Avatar Group có quá nhiều thành viên.
* Trạng thái chỉ được truyền đạt bằng màu.
* Viền Avatar không tương thích với nền.
* Component bị Detach do thiếu properties cần thiết.

---

# 17. Checklist hoàn thiện Avatar

## Cấu trúc

* [ ] Avatar là Component.
* [ ] Frame có chiều rộng và chiều cao bằng nhau.
* [ ] Corner radius tạo thành hình tròn.
* [ ] Clip content đã được bật.
* [ ] Nội dung được căn giữa.

## Variants

* [ ] Có Small, Medium và Large.
* [ ] Có Image, Initials và Icon.
* [ ] Tên Variant thống nhất.
* [ ] Không tạo Variant dư thừa.

## Properties

* [ ] Initials là Text Property.
* [ ] Status sử dụng Boolean hoặc Instance Swap.
* [ ] Label là Text Property.
* [ ] Trailing icon có thể bật hoặc tắt.

## Design Tokens

* [ ] Fill sử dụng token.
* [ ] Stroke sử dụng token.
* [ ] Text sử dụng token.
* [ ] Icon sử dụng token.
* [ ] Status color sử dụng token.

## Khả năng sử dụng

* [ ] Initials không quá hai ký tự.
* [ ] Ảnh được crop đúng vị trí.
* [ ] Avatar Group có giới hạn hiển thị.
* [ ] Có trạng thái fallback khi ảnh lỗi.
* [ ] Trạng thái không chỉ phụ thuộc vào màu sắc.

---

# 18. Tóm tắt bài học

Bài học xây dựng một Avatar Component có thể mở rộng và tái sử dụng trong toàn bộ Design System.

Avatar cơ bản gồm:

```text
Container hình tròn
        +
Image / Initials / Icon
        +
Size Variant
        +
Status hoặc Badge
```

Từ Avatar cơ bản có thể xây dựng thêm:

```text
Avatar
├── Avatar Group
├── Avatar Label
├── User Menu
├── Member List
├── Comment Item
└── Profile Header
```

Điểm quan trọng nhất là không xem Avatar chỉ như một hình tròn chứa ảnh. Avatar cần được thiết kế như một hệ thống có:

* Trạng thái dự phòng
* Quy tắc kích thước
* Component Properties
* Design Tokens
* Khả năng mở rộng
* Quy tắc accessibility

Khi được xây dựng đúng, một Avatar Component duy nhất có thể phục vụ hầu hết tình huống hiển thị người dùng trong sản phẩm.

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
