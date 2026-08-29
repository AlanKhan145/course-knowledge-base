# 006 — Xây dựng Brand Collection

## Thông tin bài học

| Thuộc tính            | Nội dung                                          |
| --------------------- | ------------------------------------------------- |
| **Module**            | Design Tokens & Variables Setup                   |
| **Thời điểm bắt đầu** | 11:37                                             |
| **Chủ đề**            | Xây dựng tập hợp biến nguyên thủy cho thương hiệu |
| **Công cụ chính**     | Figma Variables                                   |
| **Lớp token**         | Primitive / Brand tokens                          |

---

## 1. Tổng quan

Trong bài học này, chúng ta hoàn thiện **Brand Collection** bằng cách đưa toàn bộ các giá trị thiết kế nguyên thủy vào một Variable Collection trong Figma.

Các giá trị này có thể bao gồm:

* Thang màu thương hiệu.
* Màu trạng thái như đỏ, xanh lá và cam.
* Màu trung tính như xám.
* Font family.
* Font weight.
* Font size.
* Spacing.
* Kích thước.
* Các giá trị số cơ sở khác.

Brand Collection đóng vai trò là **lớp nền thấp nhất** của hệ thống design token. Những giá trị này chưa mô tả mục đích sử dụng trong giao diện mà chỉ lưu trữ các giá trị thiết kế thuần túy.

```text
Brand Collection
      ↓
Alias Collection
      ↓
Mapped / Component Tokens
      ↓
UI Components
      ↓
Product Screens
```

Ví dụ:

```text
Brand/Purple/500
        ↓
Alias/Color/Primary
        ↓
Mapped/Button/Primary/Background
        ↓
Nền của nút Primary
```

---

## 2. Mục tiêu bài học

Sau bài học, bạn có thể:

1. Hiểu vai trò của Brand Collection trong kiến trúc design token.
2. Tạo đầy đủ các thang màu nguyên thủy trong Figma.
3. Tổ chức biến thành các nhóm rõ ràng.
4. Đặt tên các bước màu theo quy luật nhất quán.
5. Phân biệt giá trị nguyên thủy và giá trị ngữ nghĩa.
6. Chuẩn bị nền tảng để xây dựng Alias Collection.
7. Phát hiện lỗi sai trong thang màu trước khi hệ thống được sử dụng rộng rãi.

---

# 3. Brand Collection là gì?

**Brand Collection** là tập hợp chứa các giá trị thiết kế gốc của thương hiệu.

Ví dụ:

```text
Brand
├── Color
│   ├── Purple
│   ├── Red
│   ├── Green
│   ├── Gray
│   ├── Orange
│   └── Blue
├── Spacing
├── Size
├── Typography
└── Radius
```

Mỗi biến trong Brand Collection thường chứa một giá trị trực tiếp, chẳng hạn:

```text
Brand/Color/Purple/500 = #7C3AED
Brand/Spacing/16        = 16
Brand/Radius/Medium     = 8
Brand/Font/Weight/Bold  = 700
```

Đây được gọi là **primitive token**, hay token nguyên thủy.

Primitive token trả lời câu hỏi:

> Giá trị thiết kế cụ thể là gì?

Ví dụ:

* Màu tím nào?
* Khoảng cách bao nhiêu pixel?
* Bo góc bao nhiêu?
* Font weight là bao nhiêu?

Primitive token chưa trả lời:

> Giá trị này được sử dụng cho mục đích gì?

Tên như `Purple/500` không cho biết màu đó được dùng cho nút, văn bản, đường viền hay trạng thái tương tác.

---

# 4. Primitive token và Semantic token

## 4.1. Primitive token

Primitive token mô tả **giá trị trực tiếp**.

```text
Brand/Color/Purple/500 = #7C3AED
Brand/Color/Gray/900   = #111827
Brand/Spacing/16       = 16
```

Primitive token thường:

* Gắn với giá trị hex, số hoặc chuỗi cụ thể.
* Ít thay đổi theo ngữ cảnh giao diện.
* Không thể hiện mục đích sử dụng.
* Được tái sử dụng bởi các token ở lớp phía trên.

## 4.2. Semantic token

Semantic token mô tả **vai trò hoặc ý nghĩa** của giá trị.

```text
Alias/Color/Primary
Alias/Text/Default
Alias/Surface/Danger
Alias/Border/Muted
```

Semantic token thường tham chiếu đến primitive token:

```text
Alias/Color/Primary
    → Brand/Color/Purple/500
```

Khi thay đổi màu thương hiệu, chúng ta chỉ cần thay đổi primitive token hoặc ánh xạ alias mà không cần sửa từng component.

## 4.3. So sánh

| Primitive token        | Semantic token                  |
| ---------------------- | ------------------------------- |
| Mô tả giá trị          | Mô tả mục đích                  |
| `Purple/500`           | `Color/Primary`                 |
| `Gray/900`             | `Text/Default`                  |
| `Red/500`              | `Status/Danger`                 |
| Ít phụ thuộc ngữ cảnh  | Phụ thuộc vào vai trò giao diện |
| Thuộc Brand Collection | Thường thuộc Alias Collection   |

---

# 5. Đổi tên Variable Collection

Trước khi thêm các biến, cần đổi tên collection thành một tên rõ ràng, chẳng hạn:

```text
Brand
```

Không nên giữ các tên mặc định như:

```text
Collection 1
Local variables
New collection
```

Tên collection rõ ràng giúp người dùng hiểu đây là lớp chứa các giá trị thương hiệu nguyên thủy.

Cấu trúc tổng thể có thể là:

```text
Collections
├── Brand
├── Alias
└── Mapped
```

---

# 6. Xây dựng thang màu Purple

Bài học bắt đầu với thang màu tím — màu thương hiệu chính của hệ thống.

Một thang màu có thể gồm các bước:

```text
Purple/50
Purple/100
Purple/200
Purple/300
Purple/400
Purple/500
Purple/600
Purple/700
Purple/800
Purple/900
```

Trong đó:

* `50` thường là màu sáng nhất.
* `500` thường gần với màu thương hiệu gốc.
* `900` thường là màu tối nhất.

Ví dụ cấu trúc trong Figma:

```text
Brand
└── Color
    └── Purple
        ├── 50
        ├── 100
        ├── 200
        ├── 300
        ├── 400
        ├── 500
        ├── 600
        ├── 700
        ├── 800
        └── 900
```

Tên biến đầy đủ:

```text
Color/Purple/50
Color/Purple/100
Color/Purple/200
...
Color/Purple/900
```

---

# 7. Logic đặt tên các bước màu

Một điểm quan trọng trong bài học là tên của các bước màu nên phản ánh tương đối khoảng cách giữa các giá trị.

Giả sử một thang màu được tạo bằng các bước thay đổi đều nhau, mỗi bước chênh lệch khoảng 20%.

```text
20% → 40% → 60% → 80% → 100%
```

Khi đó, có thể ánh xạ thành:

```text
100 → 200 → 300 → 400 → 500
```

Nếu thêm một giá trị nằm giữa hai bước, tên của nó cũng nên nằm giữa hai số tương ứng.

Ví dụ:

```text
20% → 30% → 40%
100 → 150 → 200
```

## Minh họa

```text
Độ mạnh màu:

10%       20%       30%       40%
 │         │         │         │
 ▼         ▼         ▼         ▼
 50       100       150       200
```

Ở đây:

* Mức 20% được đặt là `100`.
* Mức 40% được đặt là `200`.
* Mức 30% nằm giữa nên được đặt là `150`.
* Mức 10% chỉ bằng một nửa bước 20% nên được đặt là `50`.

Quy tắc này giúp thang màu có thể mở rộng mà không phá vỡ cấu trúc đặt tên.

---

# 8. Tại sao cần có bước 50?

Trong ví dụ của bài học, phần lớn các màu được tạo theo khoảng cách 20%, nhưng màu sáng nhất chỉ có mức thay đổi khoảng 10%.

Nếu đặt màu 10% là `100`, hệ thống sẽ không còn thể hiện đúng quan hệ giữa các bước.

Ví dụ không nhất quán:

```text
10% → 100
20% → 200
40% → 300
```

Khoảng cách tên gọi giống nhau nhưng khoảng cách màu thực tế lại khác nhau.

Cách đặt tên hợp lý hơn:

```text
10% → 50
20% → 100
40% → 200
```

Sơ đồ:

```text
Mức màu thực tế
│
├── 10%  → Purple/50
├── 20%  → Purple/100
├── 40%  → Purple/200
├── 60%  → Purple/300
├── 80%  → Purple/400
└── 100% → Purple/500
```

Điều quan trọng không phải là mọi hệ thống đều phải sử dụng đúng công thức này. Điều quan trọng là:

> Tên các bước phải có logic rõ ràng và được áp dụng nhất quán.

---

# 9. Nhân bản nhóm màu

Sau khi hoàn thành thang màu Purple, thay vì tạo lại mọi biến từ đầu, chúng ta có thể:

1. Nhân bản nhóm `Purple`.
2. Đổi tên nhóm thành màu mới.
3. Thay giá trị màu của từng bước.
4. Kiểm tra lại thứ tự và tên biến.

Ví dụ:

```text
Purple
   ↓ Duplicate
Red
   ↓ Duplicate
Green
   ↓ Duplicate
Gray
   ↓ Duplicate
Orange
   ↓ Duplicate
Blue
```

Cấu trúc hoàn chỉnh:

```text
Brand
└── Color
    ├── Purple
    │   ├── 50
    │   ├── 100
    │   ├── 200
    │   ├── 300
    │   ├── 400
    │   ├── 500
    │   ├── 600
    │   ├── 700
    │   ├── 800
    │   └── 900
    │
    ├── Red
    ├── Green
    ├── Gray
    ├── Orange
    └── Blue
```

Việc nhân bản giúp:

* Tiết kiệm thời gian.
* Giữ nguyên cấu trúc đặt tên.
* Hạn chế thiếu bước.
* Đảm bảo các nhóm màu có cùng số lượng biến.

Tuy nhiên, nhân bản cũng có thể tạo ra lỗi nếu quên thay một hoặc nhiều giá trị màu.

---

# 10. Các nhóm màu trong Brand Collection

## 10.1. Purple

Màu tím có thể đóng vai trò màu thương hiệu chính.

Ứng dụng tiềm năng:

* Primary button.
* Link.
* Focus ring.
* Selected state.
* Brand illustration.

Tuy nhiên, những mục đích này không nên được gắn trực tiếp vào primitive token. Chúng sẽ được mô tả ở lớp Alias hoặc Mapped.

## 10.2. Red

Màu đỏ thường được dùng làm nền tảng cho:

* Error.
* Danger.
* Destructive action.
* Validation failure.

```text
Brand/Color/Red/500
        ↓
Alias/Color/Danger
```

## 10.3. Green

Màu xanh lá thường là nền tảng cho:

* Success.
* Positive state.
* Completion.
* Confirmation.

```text
Brand/Color/Green/500
        ↓
Alias/Color/Success
```

## 10.4. Gray

Màu xám thường được sử dụng cho:

* Văn bản.
* Nền.
* Đường viền.
* Trạng thái disabled.
* Surface trung tính.

Gray scale thường là một trong những thang màu được sử dụng nhiều nhất trong hệ thống.

```text
Gray/50  → nền rất sáng
Gray/100 → nền phụ
Gray/300 → đường viền
Gray/500 → văn bản phụ
Gray/900 → văn bản chính
```

## 10.5. Orange

Màu cam có thể được sử dụng làm nền tảng cho:

* Warning.
* Attention.
* Pending state.
* Highlight.

## 10.6. Blue

Màu xanh dương có thể được sử dụng cho:

* Information.
* Link.
* Interactive state.
* Secondary brand color.

---

# 11. Quy trình thực hiện trong Figma

## Bước 1: Mở bảng Variables

Trong Figma:

1. Mở phần **Local variables**.
2. Chọn collection đang làm việc.
3. Đổi tên collection thành `Brand`.

## Bước 2: Tạo nhóm màu

Tạo biến với đường dẫn:

```text
Color/Purple/50
```

Figma sẽ tự động hiển thị cấu trúc nhóm:

```text
Color
└── Purple
    └── 50
```

Tiếp tục tạo:

```text
Color/Purple/100
Color/Purple/200
Color/Purple/300
Color/Purple/400
Color/Purple/500
Color/Purple/600
Color/Purple/700
Color/Purple/800
Color/Purple/900
```

## Bước 3: Nhập giá trị màu

Sao chép mã hex từ bảng màu đã chuẩn bị và nhập vào từng biến.

Ví dụ:

```text
Color/Purple/50  = màu tím sáng nhất
Color/Purple/500 = màu tím cơ sở
Color/Purple/900 = màu tím tối nhất
```

## Bước 4: Nhân bản nhóm

Nhân bản `Purple`, sau đó đổi tên thành:

```text
Red
Green
Gray
Orange
Blue
```

## Bước 5: Thay mã màu

Thay toàn bộ mã hex của nhóm mới bằng màu tương ứng.

## Bước 6: Kiểm tra lại

Kiểm tra:

* Có đủ tất cả các bước hay chưa.
* Các giá trị có đúng thứ tự sáng đến tối không.
* Có biến nào vẫn giữ màu của nhóm cũ không.
* Tên nhóm có đúng chính tả không.
* Có giá trị nào bị nhập nhầm không.

---

# 12. Tổ chức biến bằng group

Không nên tạo một danh sách phẳng như sau:

```text
Purple 50
Purple 100
Purple 200
Red 50
Red 100
Red 200
```

Cách này sẽ trở nên khó quản lý khi số lượng token tăng lên.

Nên sử dụng dấu `/` để tạo cấu trúc phân cấp:

```text
Color/Purple/50
Color/Purple/100
Color/Red/50
Color/Red/100
```

Figma sẽ tổ chức thành:

```text
Color
├── Purple
│   ├── 50
│   └── 100
└── Red
    ├── 50
    └── 100
```

## Lợi ích

* Dễ tìm kiếm.
* Dễ nhân bản.
* Dễ kiểm tra.
* Dễ mở rộng.
* Giảm lỗi đặt tên.
* Thuận lợi khi đồng bộ token sang code.

---

# 13. Không chỉ có màu sắc

Sau khi hoàn thiện các thang màu, Brand Collection vẫn chưa hoàn chỉnh.

Bài học chỉ ra rằng hệ thống còn cần bổ sung:

* Font family.
* Font size.
* Font weight.
* Line height.
* Letter spacing.
* Spacing scale.
* Size scale.
* Border radius.
* Border width.
* Shadow values nếu phù hợp.

Cấu trúc tương lai có thể là:

```text
Brand
├── Color
│   ├── Purple
│   ├── Red
│   ├── Green
│   ├── Gray
│   ├── Orange
│   └── Blue
│
├── Typography
│   ├── Font Family
│   ├── Font Size
│   ├── Font Weight
│   └── Line Height
│
├── Spacing
│   ├── 0
│   ├── 2
│   ├── 4
│   ├── 8
│   ├── 12
│   ├── 16
│   └── 24
│
├── Size
│   ├── 16
│   ├── 24
│   ├── 32
│   └── 48
│
└── Radius
    ├── Small
    ├── Medium
    ├── Large
    └── Full
```

---

# 14. Ví dụ về spacing scale

Một spacing scale đơn giản có thể là:

| Token        | Giá trị |
| ------------ | ------: |
| `Spacing/0`  |       0 |
| `Spacing/2`  |       2 |
| `Spacing/4`  |       4 |
| `Spacing/8`  |       8 |
| `Spacing/12` |      12 |
| `Spacing/16` |      16 |
| `Spacing/24` |      24 |
| `Spacing/32` |      32 |
| `Spacing/48` |      48 |
| `Spacing/64` |      64 |

Sau đó Alias Collection có thể ánh xạ:

```text
Alias/Spacing/Component/Small
    → Brand/Spacing/8

Alias/Spacing/Component/Medium
    → Brand/Spacing/16

Alias/Spacing/Layout/Large
    → Brand/Spacing/32
```

---

# 15. Ví dụ về typography primitives

```text
Brand/Typography/Font Family/Sans
Brand/Typography/Font Family/Mono

Brand/Typography/Font Weight/Regular
Brand/Typography/Font Weight/Medium
Brand/Typography/Font Weight/Semibold
Brand/Typography/Font Weight/Bold

Brand/Typography/Font Size/12
Brand/Typography/Font Size/14
Brand/Typography/Font Size/16
Brand/Typography/Font Size/20
Brand/Typography/Font Size/24
Brand/Typography/Font Size/32
```

Giá trị cụ thể:

```text
Font Weight/Regular  = 400
Font Weight/Medium   = 500
Font Weight/Semibold = 600
Font Weight/Bold     = 700
```

Các primitive này có thể được ánh xạ thành semantic token:

```text
Alias/Typography/Body/Weight
    → Brand/Typography/Font Weight/Regular

Alias/Typography/Heading/Weight
    → Brand/Typography/Font Weight/Bold
```

---

# 16. Kiến trúc token hoàn chỉnh

```text
┌─────────────────────────────────────┐
│ Brand / Primitive Tokens            │
│                                     │
│ Purple/500 = #7C3AED                │
│ Gray/900   = #111827                │
│ Spacing/16 = 16                     │
│ Weight/700 = 700                    │
└──────────────────┬──────────────────┘
                   │ Tham chiếu
                   ▼
┌─────────────────────────────────────┐
│ Alias / Semantic Tokens             │
│                                     │
│ Color/Primary = Purple/500          │
│ Text/Default  = Gray/900            │
│ Space/Medium  = Spacing/16          │
└──────────────────┬──────────────────┘
                   │ Tham chiếu
                   ▼
┌─────────────────────────────────────┐
│ Mapped / Component Tokens           │
│                                     │
│ Button/Primary/Background           │
│ Input/Default/Border                │
│ Card/Content/Padding                │
└──────────────────┬──────────────────┘
                   │ Áp dụng
                   ▼
┌─────────────────────────────────────┐
│ Components & Screens                │
└─────────────────────────────────────┘
```

---

# 17. Áp dụng vào một design system thực tế

Giả sử một sản phẩm sử dụng màu tím làm màu thương hiệu.

## Brand layer

```text
Brand/Color/Purple/500 = #7C3AED
Brand/Color/Purple/600 = #6D28D9
Brand/Color/Gray/50    = #F9FAFB
Brand/Color/Gray/900   = #111827
```

## Alias layer

```text
Alias/Color/Primary        → Brand/Color/Purple/500
Alias/Color/Primary/Hover  → Brand/Color/Purple/600
Alias/Surface/Default      → Brand/Color/Gray/50
Alias/Text/Default         → Brand/Color/Gray/900
```

## Component layer

```text
Button/Primary/Background/Default
    → Alias/Color/Primary

Button/Primary/Background/Hover
    → Alias/Color/Primary/Hover

Card/Background
    → Alias/Surface/Default
```

Khi thương hiệu đổi màu từ tím sang xanh:

```text
Alias/Color/Primary
    → Brand/Color/Blue/500
```

Tất cả các component sử dụng `Color/Primary` sẽ được cập nhật mà không cần sửa từng component.

---

# 18. Các bước kiểm tra chất lượng màu

Việc thang màu trông đẹp bằng mắt chưa đủ. Cần kiểm tra thêm:

## 18.1. Thứ tự độ sáng

Mỗi bước phải thay đổi theo thứ tự hợp lý:

```text
50 → sáng nhất
...
500 → màu cơ sở
...
900 → tối nhất
```

Không nên xảy ra trường hợp:

```text
Purple/600 sáng hơn Purple/500
Purple/700 gần giống Purple/900
```

## 18.2. Khoảng cách thị giác

Các bước nên có khoảng cách tương đối đồng đều.

Một thang màu kém:

```text
50 ───── 100 ─ 200 ───────────── 300
```

Một thang màu tốt hơn:

```text
50 ─── 100 ─── 200 ─── 300 ─── 400
```

## 18.3. Độ tương phản

Cần kiểm tra các cặp màu sẽ được dùng cho văn bản và nền.

Ví dụ:

```text
Text trắng trên Purple/500
Text Gray/900 trên Purple/50
Text trắng trên Red/600
```

Không nên mặc định rằng bước `500` luôn đủ tương phản với chữ trắng.

## 18.4. Màu trạng thái

Các màu đỏ, xanh lá và cam phải có khả năng phân biệt rõ ràng.

Không nên chỉ truyền tải trạng thái bằng màu sắc. Hãy kết hợp thêm:

* Icon.
* Nội dung văn bản.
* Label.
* Hình dạng.
* Pattern hoặc border.

---

# 19. Rủi ro và hạn chế

## 19.1. Nhập mã màu thủ công dễ gây sai sót

Khi sao chép từng mã hex bằng tay, có thể xảy ra:

* Dán nhầm mã.
* Bỏ sót một bước.
* Lặp lại hai giá trị.
* Đảo thứ tự sáng và tối.
* Quên thay màu sau khi nhân bản nhóm.

### Cách giảm rủi ro

* Chuẩn bị bảng màu trước.
* So sánh từng biến với bảng nguồn.
* Kiểm tra bằng plugin hoặc script.
* Review theo nhóm màu.
* Không chỉ dựa vào mắt thường.

---

## 19.2. Tên bước không phản ánh chính xác khoảng cách màu

Các nhãn `50–900` là cách tổ chức, không phải đơn vị đo màu tuyệt đối.

Hai khoảng:

```text
Purple/100 → Purple/200
Purple/700 → Purple/800
```

không đảm bảo có khoảng cách thị giác hoàn toàn giống nhau.

Để xây dựng thang màu chính xác hơn, có thể sử dụng:

* HSL.
* LCH.
* OKLCH.
* Công cụ tạo color ramp.
* Kiểm tra contrast tự động.

---

## 19.3. Dùng primitive token trực tiếp trong component

Ví dụ không nên:

```text
Button background
    → Brand/Purple/500
```

Điều này khiến component phụ thuộc trực tiếp vào giá trị thương hiệu.

Nên sử dụng:

```text
Button background
    → Mapped/Button/Primary/Background
    → Alias/Color/Primary
    → Brand/Purple/500
```

---

## 19.4. Quá nhiều mức màu

Không phải hệ thống nào cũng cần đầy đủ từ `50` đến `900`.

Nếu nhiều bước không được sử dụng, chúng có thể:

* Làm collection khó quản lý.
* Khiến designer lựa chọn tùy ý.
* Tăng nguy cơ giao diện thiếu nhất quán.

Chỉ nên tạo số bước phù hợp với nhu cầu sản phẩm.

---

## 19.5. Thiếu quy trình quản trị

Khi nhiều người cùng chỉnh sửa Brand Collection, có thể xảy ra:

* Token trùng lặp.
* Tên biến không đồng nhất.
* Thay đổi giá trị làm ảnh hưởng toàn hệ thống.
* Không biết token nào đã lỗi thời.
* Không có lịch sử giải thích quyết định.

Nên có quy trình:

```text
Đề xuất
   ↓
Review thiết kế
   ↓
Kiểm tra accessibility
   ↓
Cập nhật Figma
   ↓
Đồng bộ code
   ↓
Ghi changelog
```

---

# 20. Những lỗi thường gặp

## Lỗi 1: Đặt tên theo giao diện ngay trong Brand Collection

Không nên:

```text
Brand/Button Purple
Brand/Error Red
Brand/Card Gray
```

Nên:

```text
Brand/Color/Purple/500
Brand/Color/Red/500
Brand/Color/Gray/50
```

Ý nghĩa giao diện sẽ được xử lý ở Alias Collection.

## Lỗi 2: Không nhóm biến

Không nên:

```text
purple-50
purple-100
red-50
red-100
spacing-small
spacing-medium
```

Nên:

```text
Color/Purple/50
Color/Purple/100
Color/Red/50
Color/Red/100
Spacing/8
Spacing/16
```

## Lỗi 3: Trộn giá trị và ngữ nghĩa

Không nên đặt cùng một collection:

```text
Purple/500
Primary
Button Background
Error
```

Các token này thuộc các lớp trừu tượng khác nhau.

## Lỗi 4: Chỉ kiểm tra bằng mắt

Hai màu có thể trông khác nhau nhưng vẫn không tạo đủ tương phản khi dùng cho nội dung.

Cần kiểm tra thêm bằng công cụ accessibility.

## Lỗi 5: Nhân bản nhưng quên thay giá trị

Ví dụ nhóm `Green` vẫn còn một biến mang giá trị màu đỏ.

Đây là lỗi phổ biến khi tạo hàng loạt token thủ công.

---

# 21. Checklist hoàn thiện Brand Collection

## Collection

* [ ] Collection đã được đổi tên thành `Brand`.
* [ ] Chỉ chứa các primitive token.
* [ ] Không chứa tên gắn với component cụ thể.
* [ ] Không trộn semantic token vào Brand Collection.

## Color

* [ ] Có đầy đủ các nhóm màu cần thiết.
* [ ] Tên các bước nhất quán.
* [ ] Các màu được sắp xếp từ sáng đến tối.
* [ ] Không có mã hex bị lặp ngoài chủ ý.
* [ ] Không còn màu cũ trong nhóm được nhân bản.
* [ ] Đã kiểm tra contrast cho các trường hợp quan trọng.

## Organization

* [ ] Biến được tổ chức bằng dấu `/`.
* [ ] Tên nhóm dùng chung một quy ước.
* [ ] Không có tên viết tắt khó hiểu.
* [ ] Không có lỗi chính tả.

## Foundation values

* [ ] Đã có spacing scale.
* [ ] Đã có size scale.
* [ ] Đã có font family.
* [ ] Đã có font weight.
* [ ] Đã có font size.
* [ ] Đã có radius nếu hệ thống cần.
* [ ] Các giá trị có thể được tái sử dụng bởi Alias Collection.

---

# 22. Trả lời câu hỏi ôn tập

## Câu 1: Mục đích chính của việc xây dựng Brand Collection là gì?

Mục đích chính là tạo ra một **nguồn dữ liệu nền tảng duy nhất** cho toàn bộ hệ thống thiết kế.

Brand Collection chứa các giá trị nguyên thủy như:

* Mã màu.
* Khoảng cách.
* Kích thước.
* Font.
* Độ đậm.
* Bo góc.

Các lớp token phía trên sẽ tham chiếu đến Brand Collection thay vì sử dụng các giá trị hard-code. Điều này giúp hệ thống nhất quán, dễ bảo trì và có thể mở rộng.

---

## Câu 2: Áp dụng bài học vào một design system thực tế như thế nào?

Quy trình áp dụng có thể là:

1. Xác định bảng màu thương hiệu.
2. Tạo các color scale theo quy luật nhất quán.
3. Tạo Brand Collection trong Figma.
4. Thêm các biến màu theo nhóm.
5. Thêm spacing, size và typography primitives.
6. Kiểm tra tên, giá trị và accessibility.
7. Tạo Alias Collection tham chiếu đến Brand Collection.
8. Tạo component token tham chiếu đến Alias Collection.
9. Áp dụng token vào component.
10. Publish library để tái sử dụng giữa các file.

Ví dụ:

```text
Brand/Color/Purple/500
        ↓
Alias/Color/Primary
        ↓
Button/Primary/Background
```

---

## Câu 3: Các bước và ý tưởng chính được trình bày trong bài là gì?

Các ý tưởng chính gồm:

1. Đổi tên collection thành `Brand`.
2. Tạo thang màu Purple.
3. Đặt tên các bước dựa trên logic khoảng cách màu.
4. Sử dụng bước `50` khi cần biểu diễn một mức nằm trước `100`.
5. Sử dụng bước `150` nếu có một màu nằm giữa `100` và `200`.
6. Nhân bản nhóm màu để tạo Red, Green, Gray, Orange và Blue.
7. Thay từng mã màu trong nhóm được nhân bản.
8. Kiểm tra lỗi nhập liệu và sai thứ tự.
9. Nhận diện các primitive còn thiếu như spacing và typography.
10. Chuẩn bị Brand Collection làm nền cho Alias Collection.

---

## Câu 4: Rủi ro hoặc hạn chế cần lưu ý là gì?

Rủi ro lớn nhất là việc tạo token thủ công dễ gây sai sót:

* Nhập nhầm mã hex.
* Đặt sai tên.
* Thiếu bước màu.
* Sao chép nhưng quên thay giá trị.
* Tạo khoảng cách màu không đồng đều.
* Sử dụng màu không đạt độ tương phản.
* Cho component tham chiếu trực tiếp primitive token.
* Tạo quá nhiều token không thực sự cần thiết.

Ngoài ra, cách đặt tên `50–900` chỉ là quy ước. Nó không đảm bảo các bước có khoảng cách thị giác hoàn toàn bằng nhau. Vì vậy, cần kết hợp quy tắc đặt tên với kiểm tra màu thực tế và accessibility.

---

# 23. Tóm tắt bài học

**Building the Brand Collection** là bước hoàn thiện lớp nền của hệ thống design token.

Trong bài học, chúng ta:

* Tạo đầy đủ các thang màu thương hiệu.
* Tổ chức màu thành các nhóm trong Figma Variables.
* Sử dụng các bước như `50`, `100`, `150`, `200` để biểu diễn quan hệ giữa các mức màu.
* Nhân bản cấu trúc để tạo nhiều thang màu nhất quán.
* Kiểm tra và sửa lỗi trong quá trình nhập mã màu.
* Xác định các primitive token còn thiếu như font, spacing và sizing.
* Chuẩn bị dữ liệu cho Alias Collection ở bước tiếp theo.

Nguyên tắc quan trọng nhất là:

> Brand Collection chỉ nên lưu trữ các giá trị thiết kế nguyên thủy. Ý nghĩa và mục đích sử dụng của chúng sẽ được định nghĩa ở các lớp token phía trên.

```text
Giá trị thuần túy
       ↓
Ý nghĩa thiết kế
       ↓
Mục đích component
       ↓
Giao diện sản phẩm
```

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
