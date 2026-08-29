# 021 – Responsive Collection

## Module

**Typography & Responsive System**

## Thời điểm trong video

**57:27** – Thời điểm bắt đầu bài học trong video đầy đủ.

---

## 1. Tổng quan

Bài học này hướng dẫn cách xây dựng một **Responsive Variable Collection** trong Figma.

Bộ sưu tập này sử dụng các **mode theo kích thước thiết bị** như:

* Desktop
* Tablet
* Mobile

Mỗi mode chứa các giá trị typography khác nhau, chẳng hạn:

* Font size
* Line height
* Paragraph spacing
* Kích thước thiết bị tham chiếu

Nhờ đó, cùng một hệ thống typography có thể thay đổi theo từng kích thước màn hình mà không cần tạo nhiều bộ text style trùng lặp.

---

## 2. Mục tiêu của Responsive Collection

Responsive Collection đóng vai trò là lớp điều khiển các giá trị thay đổi theo breakpoint.

```text
Responsive Collection
        │
        ├── Desktop mode
        │     ├── H1: 60 px
        │     ├── H2: 48 px
        │     └── Body: 16 px
        │
        ├── Tablet mode
        │     ├── H1: 52 px
        │     ├── H2: 44 px
        │     └── Body: 16 px
        │
        └── Mobile mode
              ├── H1: 48 px
              ├── H2: 40 px
              └── Body: 16 px
```

Khi mode của collection được thay đổi, các text layer hoặc text style liên kết với biến sẽ sử dụng giá trị tương ứng.

---

## 3. Vị trí trong hệ thống Design Token

Responsive Collection không thay thế các lớp token đã xây dựng trước đó. Nó bổ sung khả năng thay đổi giá trị theo kích thước thiết bị.

```text
Brand / Primitive Tokens
          │
          ▼
Alias Tokens
          │
          ▼
Mapped / Semantic Tokens
          │
          ▼
Responsive Typography Variables
          │
          ▼
Text Styles
          │
          ▼
Components và màn hình
```

Một cách tổ chức khác là để biến typography ngữ nghĩa tham chiếu đến Responsive Collection:

```text
typography/heading/h1/font-size
                │
                ▼
responsive/h1/font-size
                │
                ├── Desktop: 60
                ├── Tablet: 52
                └── Mobile: 48
```

Biến trung gian này đôi khi được gọi là **jumper variable** vì nó kết nối text style với các giá trị responsive.

---

## 4. Tại sao phải sử dụng Number Variable?

Các thuộc tính typography như font size và line height phải được xây dựng bằng **Number Variable**, không phải String Variable.

### Không nên sử dụng

```text
H1/font-size = "60px"
```

Đây là chuỗi văn bản nên không thể liên kết đúng với thuộc tính font size trong Figma.

### Nên sử dụng

```text
H1/font-size = 60
```

Giá trị số có thể được bind trực tiếp vào các thuộc tính hỗ trợ variable.

Các thuộc tính nên sử dụng Number Variable gồm:

* Font size
* Line height
* Paragraph spacing
* Letter spacing, khi được hỗ trợ trong quy trình
* Kích thước breakpoint tham chiếu
* Spacing responsive

---

## 5. Tạo Responsive Collection

Tạo một variable collection mới với tên:

```text
Responsive
```

Sau đó thêm các mode:

```text
Desktop
Mobile
```

Có thể bổ sung mode Tablet nếu hệ thống cần ba breakpoint:

```text
Desktop
Tablet
Mobile
```

### Cấu trúc đề xuất

```text
Responsive
├── device
│   └── width
│
├── heading
│   ├── h1
│   │   ├── font-size
│   │   ├── line-height
│   │   └── paragraph-spacing
│   │
│   ├── h2
│   ├── h3
│   ├── h4
│   ├── h5
│   └── h6
│
└── paragraph
    ├── large
    ├── medium
    ├── small
    └── extra-small
```

Tên biến đầy đủ có thể được tổ chức như sau:

```text
heading/h1/font-size
heading/h1/line-height
heading/h1/paragraph-spacing

heading/h2/font-size
heading/h2/line-height
heading/h2/paragraph-spacing

paragraph/large/font-size
paragraph/large/line-height
paragraph/large/paragraph-spacing
```

---

## 6. Kích thước thiết bị tham chiếu

Có thể tạo thêm một biến:

```text
device/width
```

Ví dụ:

| Mode    | Device width |
| ------- | -----------: |
| Desktop |         1440 |
| Mobile  |          440 |

Biến này chủ yếu dùng để ghi lại breakpoint tham chiếu của hệ thống.

> Figma không tự động chuyển mode dựa trên chiều rộng frame chỉ vì có biến `device/width`. Mode vẫn phải được áp dụng cho frame, section hoặc component phù hợp.

---

# 7. Typography cho Desktop

## 7.1. Font size

Các giá trị desktop được xây dựng theo một type scale giảm dần từ H1 đến paragraph.

| Typography            | Font size |
| --------------------- | --------: |
| H1                    |     60 px |
| H2                    |     48 px |
| H3                    |     40 px |
| H4                    |     32 px |
| H5                    |     24 px |
| H6                    |     20 px |
| Paragraph Large       |     20 px |
| Paragraph Medium      |     16 px |
| Paragraph Small       |     14 px |
| Paragraph Extra Small |     12 px |

H6 và Paragraph Large đều có kích thước `20 px`. Tuy nhiên, chúng vẫn có thể được phân biệt thông qua:

* Font weight
* Font family
* Letter spacing
* Line height
* Mục đích sử dụng
* Khoảng cách phía trên và phía dưới

Ví dụ:

```text
H6:
Font size: 20 px
Font weight: 600 hoặc 700

Paragraph Large:
Font size: 20 px
Font weight: 400
```

---

## 7.2. Line height

Một công thức tham khảo:

```text
Line height = Font size × 1.2
```

Sau đó làm tròn về giá trị phù hợp với hệ thống lưới, ví dụ lưới 4 px.

### Ví dụ

```text
60 × 1.2 = 72
48 × 1.2 = 57.6 ≈ 56
40 × 1.2 = 48
32 × 1.2 = 38.4 ≈ 40
24 × 1.2 = 28.8 ≈ 28
20 × 1.2 = 24
```

### Bảng Desktop hoàn chỉnh

| Typography            | Font size | Line height |
| --------------------- | --------: | ----------: |
| H1                    |     60 px |       72 px |
| H2                    |     48 px |       56 px |
| H3                    |     40 px |       48 px |
| H4                    |     32 px |       40 px |
| H5                    |     24 px |       28 px |
| H6                    |     20 px |       24 px |
| Paragraph Large       |     20 px |       24 px |
| Paragraph Medium      |     16 px |       20 px |
| Paragraph Small       |     14 px |       16 px |
| Paragraph Extra Small |     12 px |       16 px |

---

## 7.3. Không cần áp dụng một tỷ lệ duy nhất cho mọi text style

Tỷ lệ `1.2` chỉ là điểm bắt đầu.

Tiêu đề thường sử dụng line height chặt hơn:

```text
Heading line height ≈ 1.0–1.25
```

Nội dung dài thường cần line height thoáng hơn:

```text
Body line height ≈ 1.4–1.7
```

Ví dụ thực tế:

| Loại nội dung   | Font size | Line height | Tỷ lệ |
| --------------- | --------: | ----------: | ----: |
| Display Heading |        60 |          64 |  1.07 |
| Heading         |        32 |          40 |  1.25 |
| Body            |        16 |          24 |  1.50 |
| Small Text      |        14 |          20 |  1.43 |

Với bài học này, tỷ lệ gần `1.2` được sử dụng để giữ hệ thống đơn giản và dễ minh họa.

---

# 8. Typography cho Mobile

Trên thiết bị di động, các heading lớn được giảm kích thước để:

* Tránh xuống dòng quá nhiều
* Tạo bố cục cân đối hơn
* Giữ nội dung trong vùng hiển thị
* Hạn chế tiêu đề chiếm toàn bộ màn hình

## 8.1. Giá trị Mobile đề xuất

| Typography            | Font size | Line height |
| --------------------- | --------: | ----------: |
| H1                    |     48 px |       56 px |
| H2                    |     40 px |       48 px |
| H3                    |     32 px |       40 px |
| H4                    |     28 px |       32 px |
| H5                    |     24 px |       28 px |
| H6                    |     20 px |       24 px |
| Paragraph Large       |     20 px |       24 px |
| Paragraph Medium      |     16 px |       20 px |
| Paragraph Small       |     14 px |       16 px |
| Paragraph Extra Small |     12 px |       16 px |

### So sánh Desktop và Mobile

| Typography            | Desktop | Mobile |
| --------------------- | ------: | -----: |
| H1                    |   60 px |  48 px |
| H2                    |   48 px |  40 px |
| H3                    |   40 px |  32 px |
| H4                    |   32 px |  28 px |
| H5                    |   24 px |  24 px |
| H6                    |   20 px |  20 px |
| Paragraph Large       |   20 px |  20 px |
| Paragraph Medium      |   16 px |  16 px |
| Paragraph Small       |   14 px |  14 px |
| Paragraph Extra Small |   12 px |  12 px |

---

## 8.2. Không nên tùy tiện giảm kích thước paragraph trên Mobile

Một nguyên tắc quan trọng là giữ kích thước nội dung chính tương đối ổn định giữa Desktop và Mobile.

```text
Desktop body: 16 px
Mobile body: 16 px
```

Không nên làm như sau:

```text
Desktop body: 16 px
Mobile body: 12 px
```

Việc giảm body text quá nhiều có thể:

* Làm giảm khả năng đọc
* Gây khó khăn cho người dùng thị lực yếu
* Làm giảm accessibility
* Khiến người dùng phải phóng to màn hình

Responsive typography thường ưu tiên giảm kích thước heading, trong khi paragraph được giữ nguyên hoặc chỉ thay đổi rất ít.

---

# 9. Paragraph Spacing

Paragraph spacing là khoảng cách được đặt sau một đoạn văn hoặc một text block.

Không có một công thức bắt buộc duy nhất cho thuộc tính này. Giá trị phù hợp phụ thuộc vào:

* Font family
* Font size
* Line height
* Mật độ giao diện
* Phong cách thương hiệu
* Loại nội dung
* Khoảng cách của layout bên ngoài

## Giá trị tham khảo

| Typography            | Paragraph spacing |
| --------------------- | ----------------: |
| H1                    |             64 px |
| H2                    |             48 px |
| H3                    |             32 px |
| H4                    |             20 px |
| H5                    |             20 px |
| H6                    |             20 px |
| Paragraph Large       |             20 px |
| Paragraph Medium      |             20 px |
| Paragraph Small       |             20 px |
| Paragraph Extra Small |             20 px |

Đây chỉ là giá trị khởi đầu. Cần kiểm tra trong bố cục thực tế trước khi chốt.

---

## 9.1. Phân biệt Paragraph Spacing và Layout Gap

Hai khái niệm này không hoàn toàn giống nhau.

### Paragraph spacing

Khoảng cách giữa các đoạn trong cùng một text layer.

```text
Đoạn văn thứ nhất
        ↓ Paragraph spacing
Đoạn văn thứ hai
```

### Layout gap

Khoảng cách giữa hai layer hoặc hai thành phần trong Auto Layout.

```text
Text layer
    ↓ Auto Layout gap
Button
```

Trong nhiều design system, spacing giữa heading và paragraph nên được điều khiển bằng Auto Layout gap thay vì paragraph spacing. Điều này giúp bố cục linh hoạt và dễ kiểm soát hơn.

---

# 10. Quy trình xây dựng trong Figma

## Bước 1: Chuẩn bị type scale

Xác định trước:

* Các cấp heading
* Các cấp paragraph
* Font size
* Line height
* Paragraph spacing
* Font weight
* Breakpoint cần hỗ trợ

Không nên tạo biến trước khi chưa có type scale cơ bản.

---

## Bước 2: Tạo collection

```text
Collection name: Responsive
```

---

## Bước 3: Thêm mode

```text
Desktop
Mobile
```

Hoặc:

```text
Desktop
Tablet
Mobile
```

---

## Bước 4: Tạo Number Variables

Ví dụ:

```text
heading/h1/font-size
heading/h1/line-height
heading/h1/paragraph-spacing
```

Tiếp tục nhân bản cấu trúc cho:

```text
H2
H3
H4
H5
H6
Paragraph Large
Paragraph Medium
Paragraph Small
Paragraph Extra Small
```

---

## Bước 5: Điền giá trị Desktop

Ví dụ:

```text
heading/h1/font-size = 60
heading/h1/line-height = 72
heading/h1/paragraph-spacing = 64
```

---

## Bước 6: Điền giá trị Mobile

Ví dụ:

```text
heading/h1/font-size = 48
heading/h1/line-height = 56
heading/h1/paragraph-spacing = 64
```

Paragraph spacing có thể giữ nguyên hoặc được điều chỉnh theo bố cục mobile.

---

## Bước 7: Liên kết với text layer hoặc text style

```text
Text layer H1
├── Font size
│   └── heading/h1/font-size
│
├── Line height
│   └── heading/h1/line-height
│
└── Paragraph spacing
    └── heading/h1/paragraph-spacing
```

---

## Bước 8: Kiểm tra từng mode

Áp dụng lần lượt:

```text
Desktop mode
Mobile mode
```

Kiểm tra:

* Tiêu đề có xuống dòng bất thường không?
* Line height có quá chặt không?
* Heading có chiếm quá nhiều chiều cao không?
* Body text có dễ đọc không?
* Khoảng cách giữa các thành phần có nhất quán không?
* Text có bị tràn khỏi component không?

---

# 11. Responsive Variable và Jumper Variable

Responsive Collection chứa các giá trị thay đổi theo breakpoint. Tuy nhiên, text style hoặc component không nhất thiết phải liên kết trực tiếp với tên biến breakpoint.

Có thể tạo một lớp biến trung gian:

```text
Text Style
    │
    ▼
Typography Semantic Variable
    │
    ▼
Responsive Variable
```

Ví dụ:

```text
typography/display/large/font-size
                    │
                    ▼
responsive/heading/h1/font-size
```

Biến `typography/display/large/font-size` đóng vai trò như một **jumper variable**.

### Lợi ích

* Text style không phụ thuộc trực tiếp vào cấu trúc breakpoint
* Dễ thay đổi nguồn giá trị
* Có thể tái sử dụng cùng responsive token cho nhiều text style
* Tách biệt ngữ nghĩa typography và cơ chế responsive
* Dễ mở rộng cho nhiều brand hoặc theme

---

# 12. Ví dụ cấu trúc hoàn chỉnh

```text
Responsive
│
├── device
│   └── width
│       ├── Desktop: 1440
│       └── Mobile: 440
│
├── heading
│   ├── h1
│   │   ├── font-size
│   │   │   ├── Desktop: 60
│   │   │   └── Mobile: 48
│   │   ├── line-height
│   │   │   ├── Desktop: 72
│   │   │   └── Mobile: 56
│   │   └── paragraph-spacing
│   │       ├── Desktop: 64
│   │       └── Mobile: 64
│   │
│   ├── h2
│   ├── h3
│   ├── h4
│   ├── h5
│   └── h6
│
└── paragraph
    ├── large
    ├── medium
    ├── small
    └── extra-small
```

---

# 13. Những rủi ro và hạn chế

## 13.1. Figma không phải trình duyệt

Figma không tự động theo dõi chiều rộng frame và đổi variable mode giống CSS media query.

```css
@media (max-width: 768px) {
  /* Tự động áp dụng trong trình duyệt */
}
```

Trong Figma, designer thường phải:

* Chọn mode cho frame
* Thiết lập mode trên component hoặc section
* Tạo variant responsive
* Hoặc duy trì frame Desktop và Mobile riêng

---

## 13.2. Quá nhiều breakpoint làm hệ thống phức tạp

Không nên tạo quá nhiều mode khi chưa thực sự cần thiết.

Ví dụ dễ quản lý:

```text
Desktop
Tablet
Mobile
```

Ví dụ có thể gây dư thừa:

```text
Desktop XL
Desktop
Laptop
Tablet Landscape
Tablet Portrait
Mobile Large
Mobile Medium
Mobile Small
```

Chỉ nên thêm breakpoint khi bố cục thực sự thay đổi đáng kể.

---

## 13.3. Không nên scale mọi giá trị theo cùng một tỷ lệ

Nếu giảm toàn bộ typography xuống 80%, body text có thể trở nên quá nhỏ.

```text
Desktop body: 16 px
Mobile body: 12.8 px
```

Thay vào đó:

* Giảm mạnh display heading
* Giảm vừa phải heading trung bình
* Giữ nguyên body text
* Kiểm tra accessibility

---

## 13.4. Làm tròn không nhất quán

Các phép tính như:

```text
48 × 1.2 = 57.6
```

cần có quy tắc làm tròn rõ ràng.

Có thể chọn:

* Làm tròn về số nguyên gần nhất
* Làm tròn về bội số 2
* Làm tròn về bội số 4
* Sử dụng giá trị chính xác

Ví dụ với lưới 4 px:

```text
57.6 → 56
38.4 → 40
```

Điều quan trọng là toàn bộ hệ thống phải sử dụng cùng một quy tắc.

---

## 13.5. Paragraph Extra Small có thể không đạt accessibility

Kích thước `12 px` thường chỉ nên dùng cho:

* Caption
* Metadata
* Legal text
* Helper text ít quan trọng

Không nên sử dụng `12 px` cho nội dung đọc chính hoặc đoạn văn dài.

---

# 14. Câu hỏi ôn tập

## Câu 1

**Mục đích chính của Responsive Collection trong hệ thống Typography là gì?**

Responsive Collection lưu các giá trị typography khác nhau theo breakpoint, giúp font size, line height và spacing thay đổi giữa Desktop, Tablet và Mobile mà không phải tạo nhiều hệ thống text style trùng lặp.

---

## Câu 2

**Làm thế nào để áp dụng Responsive Collection vào một Figma Design System thực tế?**

Quy trình cơ bản:

1. Xác định type scale.
2. Tạo collection `Responsive`.
3. Thêm các mode Desktop, Tablet và Mobile.
4. Tạo Number Variables cho font size, line height và paragraph spacing.
5. Nhập giá trị cho từng mode.
6. Liên kết các biến với text style.
7. Áp dụng mode phù hợp cho từng frame.
8. Kiểm tra typography trên các kích thước màn hình.

---

## Câu 3

**Các ý tưởng quan trọng được trình bày trong bài học là gì?**

* Sử dụng breakpoint mode trong variable collection.
* Dùng Number Variable cho các thuộc tính typography.
* Xây dựng type scale cho Desktop và Mobile.
* Tính line height từ font size.
* Làm tròn giá trị theo hệ lưới.
* Giữ body text ổn định trên Mobile.
* Liên kết responsive variables với text style.
* Sử dụng jumper variable làm lớp trung gian.
* Kiểm tra typography trong bố cục thực tế.

---

## Câu 4

**Rủi ro hoặc hạn chế cần lưu ý là gì?**

Figma không tự động chuyển mode theo chiều rộng frame như CSS media query. Ngoài ra, quá nhiều breakpoint, quá nhiều biến hoặc quy tắc làm tròn không nhất quán có thể làm design system khó duy trì.

---

# 15. Tóm tắt

Responsive Collection là một phần quan trọng của hệ thống typography trong Figma.

Nó cho phép cùng một text style sử dụng các giá trị khác nhau theo kích thước thiết bị:

```text
Desktop → Typography lớn và rộng rãi
Tablet  → Typography trung gian
Mobile  → Heading nhỏ hơn, body vẫn dễ đọc
```

Quy trình tổng quát:

```text
Xác định Type Scale
        ↓
Tạo Responsive Collection
        ↓
Thêm Breakpoint Modes
        ↓
Tạo Number Variables
        ↓
Nhập Font Size và Line Height
        ↓
Liên kết với Text Styles
        ↓
Áp dụng Mode cho Frame
        ↓
Kiểm tra và điều chỉnh
```

Mục tiêu cuối cùng không chỉ là làm cho chữ nhỏ hơn trên Mobile, mà là xây dựng một hệ thống typography:

* Có cấu trúc
* Có khả năng tái sử dụng
* Nhất quán giữa các màn hình
* Dễ mở rộng
* Dễ bảo trì
* Phù hợp với khả năng đọc và accessibility

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
