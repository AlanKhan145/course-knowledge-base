# 023 — Thư viện biểu tượng Material 3

## 1. Thông tin bài học

| Nội dung              | Chi tiết                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **Module**            | Icons, Variable Scoping & First Component                                                           |
| **Chủ đề module**     | Biểu tượng, giới hạn phạm vi biến và component đầu tiên                                             |
| **Thời điểm bắt đầu** | `1:14:35` trong video khóa học đầy đủ                                                               |
| **Trọng tâm**         | Cài đặt và tổ chức thư viện Material Symbols để sử dụng làm hệ thống icon chính trong design system |

---

## 2. Mục tiêu bài học

Bài học hướng dẫn cách đưa **Material Symbols của Material Design 3** vào Figma và tổ chức chúng thành một thư viện biểu tượng có thể tái sử dụng.

Sau khi được thiết lập, các icon có thể:

* Được sử dụng nhất quán trong toàn bộ sản phẩm.
* Dễ dàng tìm kiếm và thay thế.
* Được đổi màu bằng các **Mapped icon-color tokens**.
* Tự động thích ứng với Light Mode, Dark Mode hoặc các thương hiệu khác nhau.
* Được sử dụng trong các component như Button, Input, Navigation và Alert.

---

## 3. Ý tưởng chính

Thay vì tự vẽ hoặc nhập từng icon riêng lẻ, design system nên sử dụng một thư viện icon hoàn chỉnh và đạt tiêu chuẩn production.

Trong bài học này, **Material Symbols** được chọn làm bộ icon chính của hệ thống.

```text
Material Symbols
       │
       ▼
Tổ chức thành các component icon
       │
       ▼
Áp dụng Mapped icon-color tokens
       │
       ▼
Sử dụng trong Button, Input, Menu...
       │
       ▼
Tự động đổi màu theo theme và trạng thái
```

Icon không nên sử dụng màu cố định như:

```text
#1F1F1F
#FFFFFF
#999999
```

Thay vào đó, icon nên liên kết với các token có ý nghĩa sử dụng:

```text
icon/primary
icon/secondary
icon/disabled
icon/inverse
icon/brand
icon/error
```

---

## 4. Material Symbols là gì?

Material Symbols là hệ thống biểu tượng thuộc Material Design 3, được thiết kế để sử dụng trong các sản phẩm kỹ thuật số như:

* Website
* Ứng dụng di động
* Dashboard
* Hệ thống quản trị
* Sản phẩm đa nền tảng

Material Symbols cung cấp nhiều biểu tượng phổ biến như:

```text
Add
Delete
Edit
Search
Home
Settings
Close
Arrow
Menu
Profile
Favorite
Notification
```

Một số biến thể thường gặp gồm:

* Outlined
* Rounded
* Sharp

Trong một design system, đội ngũ nên chọn một biến thể chính và sử dụng thống nhất, tránh trộn lẫn nhiều phong cách icon không có chủ đích.

---

## 5. Các nội dung chính

### 5.1. Lựa chọn thư viện icon sẵn sàng cho production

Một thư viện icon phù hợp với design system cần đáp ứng các yêu cầu:

* Có số lượng icon đủ lớn.
* Phong cách hình ảnh nhất quán.
* Có quy tắc về kích thước và nét vẽ.
* Có thể sử dụng trên cả thiết kế và mã nguồn.
* Được duy trì và cập nhật thường xuyên.
* Có giấy phép sử dụng rõ ràng.
* Hỗ trợ nhiều trường hợp sử dụng trong sản phẩm.

Sử dụng một thư viện hoàn chỉnh giúp giảm thời gian tự thiết kế icon và hạn chế sự thiếu nhất quán giữa các màn hình.

---

### 5.2. Tổ chức icon để tái sử dụng

Sau khi đưa Material Symbols vào Figma, các icon cần được tổ chức theo một cấu trúc thống nhất.

Ví dụ:

```text
Icons
├── Actions
│   ├── Add
│   ├── Delete
│   ├── Edit
│   └── Search
├── Navigation
│   ├── Arrow Left
│   ├── Arrow Right
│   ├── Chevron Down
│   └── Menu
├── Communication
│   ├── Email
│   ├── Chat
│   └── Notification
├── Status
│   ├── Check
│   ├── Warning
│   ├── Error
│   └── Info
└── Media
    ├── Play
    ├── Pause
    ├── Volume
    └── Image
```

Ngoài cách phân nhóm theo chức năng, icon cũng có thể được đặt tên theo cấu trúc component:

```text
Icon/Action/Add
Icon/Action/Delete
Icon/Navigation/Menu
Icon/Navigation/Arrow Left
Icon/Status/Success
Icon/Status/Error
```

Cách đặt tên này giúp icon được phân nhóm tự động trong bảng Assets của Figma.

---

### 5.3. Chuẩn hóa khung icon

Các icon nên được đặt trong một frame có kích thước thống nhất.

Một số kích thước phổ biến:

| Token kích thước | Kích thước | Trường hợp sử dụng       |
| ---------------- | ---------: | ------------------------ |
| `icon/size/xs`   |       12px | Nhãn nhỏ, trạng thái phụ |
| `icon/size/sm`   |       16px | Button nhỏ, metadata     |
| `icon/size/md`   |       20px | Button và input mặc định |
| `icon/size/lg`   |       24px | Navigation, toolbar      |
| `icon/size/xl`   |       32px | Empty state, tiêu đề lớn |

Ví dụ, một icon có thể được chuẩn hóa trong frame `24 × 24px`:

```text
┌────────────────────────┐
│                        │
│       ┌────────┐       │
│       │  Icon  │       │
│       └────────┘       │
│                        │
└────────────────────────┘
          24 × 24
```

Việc chuẩn hóa frame giúp:

* Căn chỉnh icon dễ dàng hơn.
* Khoảng cách giữa icon và văn bản nhất quán.
* Thay thế icon mà không làm thay đổi layout.
* Component hoạt động ổn định hơn.

---

### 5.4. Chuyển icon thành component

Mỗi icon nên được tạo thành một component hoặc một variant trong hệ thống icon.

Ví dụ:

```text
Icon
├── Name = Add
├── Name = Close
├── Name = Search
├── Name = Settings
└── Name = Arrow Right
```

Khi icon được sử dụng dưới dạng component instance, designer có thể thay đổi icon thông qua thuộc tính **Instance Swap** mà không cần xóa và chèn lại thủ công.

Ví dụ trong Button:

```text
Button
├── Leading Icon: Icon/Search
├── Label: Search
└── Trailing Icon: None
```

Designer có thể đổi:

```text
Icon/Search → Icon/Add → Icon/Edit
```

mà không làm ảnh hưởng đến Auto Layout của Button.

---

### 5.5. Áp dụng Mapped icon-color tokens

Các icon không nên liên kết trực tiếp với Primitive token.

Không nên:

```text
Icon
└── Fill: blue/600
```

Nên:

```text
Icon
└── Fill: icon/primary
```

Luồng liên kết token có thể được tổ chức như sau:

```text
Primitive
blue/600
gray/900
white
   │
   ▼
Alias
color/brand
color/neutral/strong
color/neutral/inverse
   │
   ▼
Mapped
icon/primary
icon/secondary
icon/disabled
icon/inverse
   │
   ▼
Icon Component
Search
Add
Delete
Settings
```

Ví dụ ánh xạ theo chế độ:

| Mapped token     | Light Mode  | Dark Mode   |
| ---------------- | ----------- | ----------- |
| `icon/primary`   | Neutral 900 | Neutral 50  |
| `icon/secondary` | Neutral 600 | Neutral 400 |
| `icon/disabled`  | Neutral 300 | Neutral 700 |
| `icon/inverse`   | White       | Neutral 900 |
| `icon/brand`     | Brand 600   | Brand 400   |

Nhờ đó, icon có thể tự động đổi màu khi chuyển theme.

---

## 6. Cách áp dụng vào design system thực tế

### Bước 1: Chọn phong cách icon

Xác định một phong cách Material Symbols chính, chẳng hạn:

```text
Style: Rounded
Weight: 400
Grade: 0
Optical Size: 24
```

Không nên sử dụng ngẫu nhiên cả Rounded, Outlined và Sharp nếu chưa có quy tắc cụ thể.

---

### Bước 2: Nhập icon vào Figma

Đưa những icon cần thiết vào một trang riêng, ví dụ:

```text
Page: Foundations / Icons
```

Không nhất thiết phải nhập toàn bộ thư viện ngay từ đầu. Có thể bắt đầu với những icon thực sự được dùng trong sản phẩm.

---

### Bước 3: Chuẩn hóa kích thước

Đưa mỗi icon vào một frame chuẩn:

```text
16 × 16
20 × 20
24 × 24
32 × 32
```

Đảm bảo icon được căn giữa trong frame.

---

### Bước 4: Đặt tên nhất quán

Sử dụng một quy tắc đặt tên rõ ràng:

```text
Icon/Action/Add
Icon/Action/Delete
Icon/Navigation/Menu
Icon/Navigation/Chevron Down
Icon/Status/Warning
```

Tên trong Figma nên có khả năng ánh xạ với tên icon trong code.

Ví dụ:

```text
Figma: Icon/Action/Add
Code: add
```

---

### Bước 5: Tạo component

Chuyển từng icon thành component và đưa chúng vào một component set nếu cần.

Thiết lập các thuộc tính hỗ trợ:

* Instance Swap
* Kích thước
* Trạng thái
* Phong cách
* Màu sắc theo token

---

### Bước 6: Liên kết với Mapped tokens

Áp dụng các biến như:

```text
icon/primary
icon/secondary
icon/disabled
icon/inverse
icon/brand
icon/success
icon/warning
icon/error
```

Không đặt màu trực tiếp trên từng icon instance.

---

### Bước 7: Xuất bản thư viện

Publish thư viện icon để các file sản phẩm khác có thể sử dụng.

Cấu trúc thư viện tổng thể có thể là:

```text
Design System
├── Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Icons
├── Components
│   ├── Button
│   ├── Input
│   ├── Checkbox
│   └── Navigation
└── Patterns
    ├── Forms
    ├── Dialogs
    └── Empty States
```

---

## 7. Ví dụ sử dụng trong Button

Một Button có icon có thể sử dụng cấu trúc:

```text
Button
├── Container
│   ├── Leading Icon
│   ├── Label
│   └── Trailing Icon
└── Tokens
    ├── Surface token
    ├── Text token
    ├── Icon token
    ├── Spacing token
    └── Radius token
```

Ví dụ trạng thái mặc định:

```text
Button/Primary/Default
├── Background: surface/action/primary
├── Text: text/on-action
└── Icon: icon/on-action
```

Khi chuyển sang trạng thái disabled:

```text
Button/Primary/Disabled
├── Background: surface/disabled
├── Text: text/disabled
└── Icon: icon/disabled
```

Như vậy, icon trở thành một phần của hệ thống trạng thái thay vì chỉ là một hình ảnh trang trí độc lập.

---

## 8. Trả lời câu hỏi ôn tập

### Câu 1: Mục đích chính của Material 3 Icon Library là gì?

Mục đích chính là thiết lập một thư viện biểu tượng thống nhất, có thể tái sử dụng và phù hợp với môi trường production.

Thư viện icon này tạo nền tảng để:

* Sử dụng icon nhất quán trong toàn bộ sản phẩm.
* Thay đổi icon nhanh chóng trong component.
* Áp dụng các Mapped icon-color tokens.
* Hỗ trợ theme và nhiều thương hiệu.
* Xây dựng các component phức tạp hơn như Button.

---

### Câu 2: Áp dụng bài học này vào design system thực tế như thế nào?

Có thể áp dụng theo quy trình:

1. Chọn một phong cách Material Symbols thống nhất.
2. Nhập các icon cần thiết vào Figma.
3. Chuẩn hóa kích thước và khung bao.
4. Đặt tên theo nhóm chức năng.
5. Chuyển icon thành component.
6. Thiết lập Instance Swap.
7. Liên kết màu icon với Mapped tokens.
8. Publish thư viện để toàn bộ đội ngũ sử dụng.
9. Tích hợp icon vào Button, Input, Menu và các component khác.

---

### Câu 3: Các bước hoặc ý tưởng quan trọng trong bài học là gì?

Các ý tưởng quan trọng gồm:

* Không tự tạo icon rời rạc khi đã có thư viện production-ready.
* Thống nhất phong cách icon trong toàn bộ sản phẩm.
* Tổ chức icon theo cấu trúc có thể tìm kiếm.
* Chuẩn hóa kích thước và khung icon.
* Dùng component instance để tái sử dụng.
* Cho phép thay icon bằng Instance Swap.
* Không gán màu trực tiếp cho icon.
* Liên kết icon với các Mapped icon-color tokens.
* Chuẩn bị icon để sử dụng trong component Button.

---

### Câu 4: Rủi ro hoặc giới hạn cần lưu ý là gì?

#### Trộn lẫn nhiều phong cách icon

Việc sử dụng đồng thời icon Rounded, Sharp và Outlined có thể làm giao diện thiếu nhất quán.

#### Tên icon không đồng bộ với code

Nếu tên icon trong Figma khác hoàn toàn với tên trong code, quá trình bàn giao và phát triển sẽ khó khăn hơn.

#### Màu icon bị hard-code

Icon dùng mã màu trực tiếp sẽ không tự động cập nhật khi đổi theme hoặc thương hiệu.

#### Kích thước quang học không đồng đều

Hai icon cùng kích thước frame chưa chắc có cảm giác thị giác bằng nhau. Một số icon có thể trông quá nhỏ hoặc quá lớn.

#### Thư viện quá lớn

Nhập toàn bộ hàng nghìn icon có thể làm file Figma nặng và khiến việc tìm kiếm khó khăn. Nên ưu tiên những icon đang được sử dụng.

#### Icon không phù hợp với sản phẩm

Material Symbols có độ bao phủ lớn nhưng không phải lúc nào cũng phù hợp với nhận diện thương hiệu. Một số sản phẩm có thể cần thêm icon tùy chỉnh.

#### Lạm dụng icon không có nhãn

Một số icon có ý nghĩa không rõ ràng với người dùng. Trong trường hợp đó, nên bổ sung:

* Text label
* Tooltip
* Accessible label trong code

---

## 9. Nguyên tắc nên ghi nhớ

> Icon là một phần của ngôn ngữ giao diện, không chỉ là yếu tố trang trí.

Một hệ thống icon tốt cần đạt được bốn yếu tố:

```text
Nhất quán
    +
Tái sử dụng
    +
Có ý nghĩa
    +
Liên kết với token
    =
Icon system có khả năng mở rộng
```

Icon nên được quản lý giống như màu sắc, typography và spacing: có quy tắc, có token và có cấu trúc rõ ràng.

---

## 10. Tóm tắt bài học

Bài học **Material 3 Icon Library** thiết lập Material Symbols làm thư viện icon chính của design system.

Các icon được:

* Chọn từ một thư viện sẵn sàng cho production.
* Tổ chức để dễ tìm kiếm và tái sử dụng.
* Chuẩn hóa về tên gọi và kích thước.
* Chuyển thành component.
* Thiết lập để hỗ trợ Instance Swap.
* Liên kết với các Mapped icon-color tokens.
* Chuẩn bị để sử dụng trong Button và các component tiếp theo.

Bài học này là bước đầu tiên của module:

```text
Material 3 Icon Library
          ↓
Variable Scoping
          ↓
Button Component
          ↓
Component sử dụng toàn bộ token system
```

Sau khi hoàn thành bước này, design system đã có đầy đủ nền tảng về màu sắc, typography và icon để bắt đầu xây dựng component thực tế đầu tiên.
