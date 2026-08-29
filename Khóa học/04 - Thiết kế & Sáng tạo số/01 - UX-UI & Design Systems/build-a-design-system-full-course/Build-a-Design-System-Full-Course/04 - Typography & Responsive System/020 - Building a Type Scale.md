# 020 – Xây dựng thang tỷ lệ chữ

## Building a Type Scale

## Thông tin bài học

| Mục                      | Nội dung                                      |
| ------------------------ | --------------------------------------------- |
| **Module**               | Typography & Responsive System                |
| **Thời điểm video**      | 54:28                                         |
| **Chủ đề chính**         | Xây dựng thang tỷ lệ chữ bằng Figma Variables |
| **Công cụ tham khảo**    | Typescale                                     |
| **Kích thước chữ cơ sở** | 16 px                                         |
| **Lưới làm tròn**        | Bội số của 4 px                               |

---

## 1. Ý tưởng chính

Bài học hướng dẫn cách xây dựng một **thang tỷ lệ chữ – Type Scale** có hệ thống, bao gồm:

* Kích thước chữ.
* Chiều cao dòng.
* Các cấp độ tiêu đề và nội dung.
* Giá trị dành cho desktop và mobile.
* Hệ thống biến đáp ứng trong Figma.

Thay vì chọn kích thước chữ tùy ý cho từng màn hình, chúng ta sử dụng một tỷ lệ toán học để tạo ra các cấp độ chữ có quan hệ với nhau.

```text
Kích thước cơ sở
        ↓
Chọn tỷ lệ tăng trưởng
        ↓
Tạo các cấp độ chữ
        ↓
Làm tròn theo lưới 4 px
        ↓
Tạo biến trong Figma
        ↓
Thiết lập Desktop và Mobile
        ↓
Gắn biến vào Text Styles
```

Mục tiêu cuối cùng là tạo ra một hệ thống typography:

* Nhất quán.
* Dễ mở rộng.
* Dễ bảo trì.
* Có khả năng thích ứng với nhiều kích thước thiết bị.

---

## 2. Responsive Collection là gì?

**Responsive Collection** là một bộ sưu tập Figma Variables chứa những giá trị có thể thay đổi theo kích thước thiết bị.

Ví dụ:

* Kích thước chữ.
* Chiều cao dòng.
* Khoảng cách giữa các phần tử.
* Padding.
* Margin.
* Kích thước container.
* Khoảng cách giữa các cột.

```text
Responsive Collection
│
├── Typography
│   ├── Font size
│   ├── Line height
│   └── Paragraph spacing
│
├── Spacing
│   ├── Gap
│   ├── Padding
│   └── Margin
│
└── Layout
    ├── Container width
    ├── Column gap
    └── Section spacing
```

Một bộ sưu tập có thể chứa nhiều mode:

```text
Responsive
├── Mobile
├── Tablet
└── Desktop
```

Khi chuyển mode, các thành phần sử dụng biến sẽ tự động nhận giá trị tương ứng.

---

## 3. Type Scale là gì?

**Type Scale** là một hệ thống các kích thước chữ được tạo ra từ:

1. Một kích thước chữ cơ sở.
2. Một tỷ lệ tăng trưởng nhất định.

Công thức tổng quát:

```text
Kích thước tiếp theo = Kích thước hiện tại × Tỷ lệ
```

Ví dụ, với:

```text
Base size = 16 px
Ratio = 1.25
```

Ta có:

```text
16 × 1.25 = 20
20 × 1.25 = 25
25 × 1.25 = 31.25
31.25 × 1.25 = 39.06
39.06 × 1.25 = 48.83
48.83 × 1.25 = 61.04
```

Các giá trị này tạo thành một chuỗi tỷ lệ có quan hệ rõ ràng, thay vì một tập hợp kích thước chữ được chọn ngẫu nhiên.

---

## 4. Chọn kích thước chữ cơ sở

Bài học sử dụng:

```text
Base font size = 16 px
```

Kích thước 16 px thường được sử dụng cho nội dung đoạn văn trên web vì:

* Dễ đọc trên phần lớn màn hình.
* Tương thích tốt với trình duyệt.
* Là mốc thuận tiện khi chuyển đổi giữa `px` và `rem`.
* Phù hợp với nhiều phông chữ phổ biến.

Ví dụ:

```css
html {
  font-size: 16px;
}
```

Khi đó:

|      rem |   px |
| -------: | ---: |
|  0.75rem | 12px |
| 0.875rem | 14px |
|     1rem | 16px |
|  1.25rem | 20px |
|   1.5rem | 24px |
|     2rem | 32px |
|     3rem | 48px |

> 16 px là một điểm khởi đầu phổ biến, nhưng khả năng đọc còn phụ thuộc vào phông chữ, độ đậm, độ tương phản, chiều rộng dòng và khả năng phóng to nội dung của người dùng.

---

## 5. Chọn tỷ lệ Modular Scale

Bài học bắt đầu với tỷ lệ **Major Third**, tương đương khoảng:

```text
1.25
```

Một số tỷ lệ modular scale phổ biến:

| Tên tỷ lệ        | Giá trị | Đặc điểm                             |
| ---------------- | ------: | ------------------------------------ |
| Minor Second     |   1.067 | Chênh lệch rất nhẹ                   |
| Major Second     |   1.125 | Nhẹ, phù hợp giao diện nhiều dữ liệu |
| Minor Third      |   1.200 | Cân bằng                             |
| Major Third      |   1.250 | Phân cấp rõ ràng                     |
| Perfect Fourth   |   1.333 | Tiêu đề nổi bật                      |
| Augmented Fourth |   1.414 | Tương phản mạnh                      |
| Perfect Fifth    |   1.500 | Rất mạnh, phù hợp landing page       |

Tỷ lệ càng lớn thì sự khác biệt giữa các cấp độ chữ càng rõ ràng.

```text
Tỷ lệ nhỏ
16 → 18 → 20 → 23 → 26

Tỷ lệ lớn
16 → 24 → 36 → 54 → 81
```

### Khi nào nên dùng tỷ lệ nhỏ?

* Dashboard.
* Ứng dụng quản trị.
* Giao diện có nhiều dữ liệu.
* Màn hình mobile.
* Sản phẩm cần nhiều cấp độ nội dung gần nhau.

### Khi nào nên dùng tỷ lệ lớn?

* Landing page.
* Website marketing.
* Trang thương hiệu.
* Thiết kế thiên về hình ảnh.
* Giao diện cần tiêu đề nổi bật.

---

## 6. Thang tỷ lệ chữ ban đầu

Với kích thước cơ sở 16 px và tỷ lệ 1.25, công cụ Typescale có thể tạo ra các giá trị như sau:

| Cấp độ    | Giá trị tính toán |
| --------- | ----------------: |
| Paragraph |             16 px |
| H6        |             20 px |
| H5        |             25 px |
| H4        |          31.25 px |
| H3        |          39.06 px |
| H2        |          48.83 px |
| H1        |          61.04 px |

Tuy nhiên, những số thập phân như:

```text
31.25 px
39.06 px
48.83 px
```

khó quản lý trong một hệ thống thiết kế.

Do đó, các giá trị cần được chuẩn hóa.

---

## 7. Làm tròn theo lưới 4 px

Bài học sử dụng lưới 4 px để làm tròn các kích thước chữ.

Ví dụ:

```text
25 px    → 24 px
31.25 px → 32 px
39.06 px → 40 px
48.83 px → 48 px
61.04 px → 60 px
```

Thang tỷ lệ sau khi chuẩn hóa:

| Cấp độ    | Giá trị gốc | Giá trị chuẩn hóa |
| --------- | ----------: | ----------------: |
| Paragraph |       16 px |             16 px |
| H6        |       20 px |             20 px |
| H5        |       25 px |             24 px |
| H4        |    31.25 px |             32 px |
| H3        |    39.06 px |             40 px |
| H2        |    48.83 px |             48 px |
| H1        |    61.04 px |             60 px |

```text
16 → 20 → 24 → 32 → 40 → 48 → 60
```

### Vì sao sử dụng lưới 4 px?

* Đồng bộ với spacing scale.
* Giá trị dễ nhớ.
* Dễ trao đổi giữa designer và developer.
* Giảm số lượng giá trị không cần thiết.
* Tránh các số thập phân khó kiểm soát.
* Giúp toàn bộ giao diện có nhịp điệu nhất quán.

> Không cần làm tròn một cách máy móc. Mục tiêu là giữ được sự cân bằng giữa tỷ lệ toán học, khả năng đọc và tính nhất quán của hệ thống.

---

## 8. Xây dựng thang chữ cho desktop

Một thang chữ desktop có thể được tổ chức như sau:

| Token           | Vai trò           | Font size |
| --------------- | ----------------- | --------: |
| `font-size-xs`  | Chú thích nhỏ     |     12 px |
| `font-size-sm`  | Nội dung phụ      |     14 px |
| `font-size-md`  | Nội dung mặc định |     16 px |
| `font-size-lg`  | Nội dung nổi bật  |     20 px |
| `font-size-xl`  | Heading nhỏ       |     24 px |
| `font-size-2xl` | Heading cấp trung |     32 px |
| `font-size-3xl` | Heading lớn       |     40 px |
| `font-size-4xl` | Heading nổi bật   |     48 px |
| `font-size-5xl` | Display heading   |     60 px |

Ngoài cách đặt tên theo HTML như `h1`, `h2`, `h3`, có thể dùng tên theo thang kích thước:

```text
xs
sm
md
lg
xl
2xl
3xl
4xl
5xl
```

Cách đặt tên này linh hoạt hơn vì một giá trị có thể được sử dụng cho nhiều vai trò khác nhau.

Ví dụ:

```text
font-size-3xl = 40 px
```

Giá trị này có thể được dùng cho:

* Tiêu đề trang.
* Tiêu đề modal.
* Số liệu lớn trên dashboard.
* Tiêu đề trong landing page.

---

## 9. Xây dựng thang chữ cho mobile

Trên mobile, có thể sử dụng một tỷ lệ nhỏ hơn để tránh tiêu đề chiếm quá nhiều không gian.

```text
Desktop ratio
        ↓
Phân cấp mạnh hơn
        ↓
Tiêu đề lớn hơn

Mobile ratio
        ↓
Phân cấp nhẹ hơn
        ↓
Tiết kiệm không gian
```

Ví dụ:

| Token           | Mobile | Desktop |
| --------------- | -----: | ------: |
| `font-size-xs`  |  12 px |   12 px |
| `font-size-sm`  |  14 px |   14 px |
| `font-size-md`  |  16 px |   16 px |
| `font-size-lg`  |  18 px |   20 px |
| `font-size-xl`  |  20 px |   24 px |
| `font-size-2xl` |  24 px |   32 px |
| `font-size-3xl` |  32 px |   40 px |
| `font-size-4xl` |  40 px |   48 px |
| `font-size-5xl` |  48 px |   60 px |

Điểm quan trọng là không phải mọi giá trị đều cần thay đổi.

Ví dụ:

```text
Body text:
Mobile  = 16 px
Desktop = 16 px

Display heading:
Mobile  = 48 px
Desktop = 60 px
```

Nội dung đoạn văn vẫn cần giữ khả năng đọc ổn định, trong khi các tiêu đề lớn được thu nhỏ để phù hợp với chiều rộng màn hình.

---

## 10. Cấu trúc Responsive Collection trong Figma

Có thể tạo một collection với tên:

```text
Responsive
```

Sau đó tạo hai mode:

```text
Mobile
Desktop
```

Cấu trúc biến:

```text
Responsive
│
├── font-size
│   ├── xs
│   ├── sm
│   ├── md
│   ├── lg
│   ├── xl
│   ├── 2xl
│   ├── 3xl
│   ├── 4xl
│   └── 5xl
│
├── line-height
│   ├── xs
│   ├── sm
│   ├── md
│   ├── lg
│   ├── xl
│   ├── 2xl
│   ├── 3xl
│   ├── 4xl
│   └── 5xl
│
└── paragraph-spacing
    ├── sm
    ├── md
    └── lg
```

Ví dụ bảng giá trị:

| Variable        | Mobile | Desktop |
| --------------- | -----: | ------: |
| `font-size/xs`  |     12 |      12 |
| `font-size/sm`  |     14 |      14 |
| `font-size/md`  |     16 |      16 |
| `font-size/lg`  |     18 |      20 |
| `font-size/xl`  |     20 |      24 |
| `font-size/2xl` |     24 |      32 |
| `font-size/3xl` |     32 |      40 |
| `font-size/4xl` |     40 |      48 |
| `font-size/5xl` |     48 |      60 |

---

## 11. Sử dụng Number Variables

Các giá trị như font size, line height và paragraph spacing cần được tạo dưới dạng:

```text
Number Variables
```

Không nên sử dụng String Variables cho các giá trị này.

### Không phù hợp

```text
font-size/h1 = "60px"
```

Đây là một chuỗi ký tự nên không thể liên kết trực tiếp với thuộc tính số trong Figma.

### Phù hợp

```text
font-size/h1 = 60
```

Đây là Number Variable và có thể được gắn vào thuộc tính kích thước chữ.

```text
Number Variable
      ↓
Font size property
      ↓
Text layer
```

---

## 12. Đặt tên biến

Có hai hướng đặt tên phổ biến.

### Cách 1: Đặt tên theo phần tử HTML

```text
font-size/h1
font-size/h2
font-size/h3
font-size/h4
font-size/h5
font-size/h6
font-size/body
font-size/caption
```

#### Ưu điểm

* Dễ hiểu.
* Gần với cấu trúc HTML.
* Phù hợp với hệ thống đơn giản.

#### Hạn chế

* Một kích thước bị gắn cứng với một vai trò.
* Khó tái sử dụng trong nhiều ngữ cảnh.
* Không phù hợp khi sản phẩm có nhiều loại heading.

---

### Cách 2: Đặt tên theo thang kích thước

```text
font-size/xs
font-size/sm
font-size/md
font-size/lg
font-size/xl
font-size/2xl
font-size/3xl
font-size/4xl
font-size/5xl
```

#### Ưu điểm

* Linh hoạt.
* Dễ mở rộng.
* Không phụ thuộc vào HTML.
* Một giá trị có thể được dùng cho nhiều semantic role.

#### Hạn chế

* Cần thêm một lớp semantic hoặc Text Styles để mô tả mục đích sử dụng.

Trong một design system lớn, nên tách thành hai lớp:

```text
Scale Variables
font-size/3xl
        ↓
Semantic Text Style
heading/page-title
        ↓
Component hoặc màn hình
```

---

## 13. Font size và line height phải đi cùng nhau

Chỉ tạo font size là chưa đủ. Mỗi kích thước chữ cần có line height phù hợp.

Ví dụ:

| Font size | Line height | Tỷ lệ |
| --------: | ----------: | ----: |
|     12 px |       16 px |  1.33 |
|     14 px |       20 px |  1.43 |
|     16 px |       24 px |  1.50 |
|     20 px |       28 px |  1.40 |
|     24 px |       32 px |  1.33 |
|     32 px |       40 px |  1.25 |
|     40 px |       48 px |  1.20 |
|     48 px |       56 px |  1.17 |
|     60 px |       64 px |  1.07 |

Quy luật thường gặp:

```text
Chữ nhỏ
→ cần line height tương đối lớn
→ giúp đoạn văn dễ đọc

Chữ lớn
→ cần line height tương đối nhỏ
→ giữ tiêu đề gọn và chắc
```

Ví dụ:

```text
Body
Font size:   16 px
Line height: 24 px
Ratio:       1.5

Display heading
Font size:   60 px
Line height: 64 px
Ratio:       1.07
```

---

## 14. Gợi ý hệ thống line height

Có thể tạo một thang line height riêng:

| Token             | Giá trị |
| ----------------- | ------: |
| `line-height-xs`  |   16 px |
| `line-height-sm`  |   20 px |
| `line-height-md`  |   24 px |
| `line-height-lg`  |   28 px |
| `line-height-xl`  |   32 px |
| `line-height-2xl` |   40 px |
| `line-height-3xl` |   48 px |
| `line-height-4xl` |   56 px |
| `line-height-5xl` |   64 px |

Sau đó ghép cặp:

```text
font-size/md     → line-height/md
font-size/xl     → line-height/xl
font-size/3xl    → line-height/3xl
font-size/5xl    → line-height/5xl
```

Không bắt buộc token font size và line height phải cùng hậu tố, nhưng cách này giúp hệ thống dễ hiểu hơn.

---

## 15. Paragraph spacing

Ngoài font size và line height, hệ thống typography còn cần xác định khoảng cách giữa các đoạn văn.

Ví dụ:

| Token                  | Giá trị | Sử dụng                    |
| ---------------------- | ------: | -------------------------- |
| `paragraph-spacing/sm` |    8 px | Chú thích, nội dung ngắn   |
| `paragraph-spacing/md` |   16 px | Nội dung thông thường      |
| `paragraph-spacing/lg` |   24 px | Bài viết hoặc nội dung dài |

Mối quan hệ giữa các thuộc tính:

```text
Font size
    +
Line height
    +
Paragraph spacing
    =
Nhịp điệu typography
```

Nếu chỉ điều chỉnh font size mà bỏ qua line height và paragraph spacing, nội dung có thể:

* Quá chật.
* Quá rời rạc.
* Khó quét mắt.
* Thiếu phân cấp.
* Không đồng nhất giữa các màn hình.

---

## 16. Quy trình thực hiện trong Figma

### Bước 1: Chọn kích thước cơ sở

```text
Base font size = 16 px
```

### Bước 2: Chọn modular scale

Ví dụ:

```text
Desktop = Major Third
Mobile  = tỷ lệ nhỏ hơn
```

### Bước 3: Tạo thang chữ ban đầu

Sử dụng công cụ Typescale hoặc tính toán thủ công.

### Bước 4: Làm tròn giá trị

Làm tròn về các giá trị phù hợp với lưới 4 px.

```text
31.25 → 32
39.06 → 40
48.83 → 48
```

### Bước 5: Chụp hoặc lưu bảng tham chiếu

Lưu riêng:

* Bảng desktop.
* Bảng mobile.

Điều này giúp nhập giá trị vào Figma chính xác hơn.

### Bước 6: Tạo Responsive Collection

```text
Collection: Responsive

Modes:
- Mobile
- Desktop
```

### Bước 7: Tạo Number Variables

```text
font-size/xs
font-size/sm
font-size/md
font-size/lg
font-size/xl
font-size/2xl
font-size/3xl
font-size/4xl
font-size/5xl
```

### Bước 8: Nhập giá trị cho từng mode

```text
font-size/5xl
Mobile  = 48
Desktop = 60
```

### Bước 9: Tạo line-height variables

```text
line-height/xs
line-height/sm
line-height/md
...
```

### Bước 10: Gắn biến vào Text Styles

```text
Responsive Variables
        ↓
Text Styles
        ↓
Components
        ↓
Screens
```

### Bước 11: Kiểm thử trên nhiều kích thước

Kiểm tra:

* Tiêu đề có bị xuống dòng bất thường không?
* Đoạn văn có dễ đọc không?
* Các cấp heading có đủ khác biệt không?
* Mobile có bị chiếm quá nhiều chiều cao không?
* Desktop có tạo được phân cấp rõ ràng không?

---

## 17. Kiến trúc typography đề xuất

Một hệ thống hoàn chỉnh có thể được tổ chức thành ba lớp.

```text
Primitive / Scale
│
│  font-size/3xl = 40
│  line-height/3xl = 48
│
▼
Semantic Text Styles
│
│  heading/page-title
│  heading/section-title
│  body/default
│  body/supporting
│
▼
Components
   Card title
   Modal title
   Page header
   Navigation item
```

### Lớp 1: Scale Variables

Chỉ biểu diễn giá trị:

```text
font-size/md
font-size/2xl
line-height/md
line-height/2xl
```

### Lớp 2: Semantic Text Styles

Biểu diễn mục đích:

```text
heading/display
heading/page
heading/section
body/default
body/supporting
label/default
caption/default
```

### Lớp 3: Component

Sử dụng Text Style phù hợp:

```text
Button label
Card heading
Dialog title
Input label
Table cell
```

Kiến trúc này giúp thay đổi toàn bộ typography mà không phải chỉnh từng component.

---

## 18. Ví dụ hệ thống typography hoàn chỉnh

| Text Style   | Font size | Line height | Font weight |
| ------------ | --------: | ----------: | ----------: |
| `display/lg` |     60 px |       64 px |         700 |
| `display/md` |     48 px |       56 px |         700 |
| `heading/lg` |     40 px |       48 px |         700 |
| `heading/md` |     32 px |       40 px |         600 |
| `heading/sm` |     24 px |       32 px |         600 |
| `body/lg`    |     20 px |       28 px |         400 |
| `body/md`    |     16 px |       24 px |         400 |
| `body/sm`    |     14 px |       20 px |         400 |
| `caption`    |     12 px |       16 px |         400 |

Responsive mapping:

| Text Style   | Mobile | Desktop |
| ------------ | -----: | ------: |
| `display/lg` |  48 px |   60 px |
| `display/md` |  40 px |   48 px |
| `heading/lg` |  32 px |   40 px |
| `heading/md` |  24 px |   32 px |
| `heading/sm` |  20 px |   24 px |
| `body/lg`    |  18 px |   20 px |
| `body/md`    |  16 px |   16 px |
| `body/sm`    |  14 px |   14 px |
| `caption`    |  12 px |   12 px |

---

## 19. Những lỗi thường gặp

### 19.1. Chọn kích thước chữ tùy ý

```text
15 px
17 px
19 px
23 px
27 px
29 px
```

Các giá trị không có quan hệ rõ ràng và khó duy trì.

### 19.2. Sử dụng quá nhiều kích thước

Một giao diện nhỏ không cần 15–20 cấp độ chữ khác nhau.

Nên bắt đầu với số lượng tối thiểu cần thiết:

```text
Caption
Body small
Body
Body large
Heading small
Heading
Display
```

### 19.3. Dùng cùng một thang chữ cho mọi thiết bị

Một tiêu đề 60 px có thể phù hợp trên desktop nhưng quá lớn trên mobile.

### 19.4. Chỉ thay đổi font size

Nếu font size thay đổi nhưng line height không đổi, văn bản có thể bị quá chật hoặc quá rộng.

### 19.5. Dùng String Variable

```text
"16px"
```

không thể liên kết như một giá trị số.

### 19.6. Gắn component trực tiếp vào giá trị thô

Không nên để mỗi component tự chọn kích thước chữ.

```text
Không nên:
Card title → 24 px

Nên:
Card title → heading/sm
heading/sm → font-size/xl
```

### 19.7. Phụ thuộc hoàn toàn vào tỷ lệ toán học

Modular scale chỉ là điểm khởi đầu. Các giá trị cuối cùng vẫn cần được kiểm thử trực quan.

---

## 20. Rủi ro và giới hạn

### 20.1. Tỷ lệ quá lớn

Nếu tỷ lệ tăng trưởng quá cao:

* Heading chiếm nhiều không gian.
* Nội dung dễ xuống dòng.
* Mobile trở nên chật chội.
* Khoảng cách giữa các cấp độ quá mạnh.

### 20.2. Tỷ lệ quá nhỏ

Nếu tỷ lệ quá thấp:

* Các cấp heading khó phân biệt.
* Giao diện thiếu điểm nhấn.
* Người dùng khó nhận biết cấu trúc nội dung.

### 20.3. Làm tròn quá mức

Việc ép tất cả giá trị vào lưới 4 px có thể làm mất cân bằng ban đầu của type scale.

Ví dụ, đôi khi 56 px phù hợp hơn 60 px dù 60 px gần với giá trị tính toán hơn.

### 20.4. Không kiểm thử với phông chữ thật

Cùng một kích thước 16 px nhưng mỗi phông chữ có thể có:

* X-height khác nhau.
* Độ rộng ký tự khác nhau.
* Trọng lượng nét khác nhau.
* Khả năng đọc khác nhau.

### 20.5. Không kiểm thử nội dung dài

Một heading đẹp với hai từ có thể bị vỡ bố cục khi hiển thị:

* Tiêu đề dài.
* Nội dung tiếng Việt.
* Nội dung tiếng Đức.
* Dữ liệu do người dùng nhập.

---

## 21. Sơ đồ tổng quan

```text
Base Font Size: 16 px
          │
          ▼
Chọn Modular Scale
Desktop: tỷ lệ lớn hơn
Mobile: tỷ lệ nhỏ hơn
          │
          ▼
Tạo chuỗi kích thước
16 → 20 → 25 → 31.25 → 39.06 → 48.83 → 61.04
          │
          ▼
Làm tròn theo lưới 4 px
16 → 20 → 24 → 32 → 40 → 48 → 60
          │
          ▼
Tạo Number Variables
font-size/xs → font-size/5xl
          │
          ▼
Thêm Responsive Modes
Mobile | Desktop
          │
          ▼
Tạo Line Height và Paragraph Spacing
          │
          ▼
Gắn vào Text Styles
          │
          ▼
Áp dụng cho Components
          │
          ▼
Kiểm thử khả năng đọc và responsive
```

---

## 22. Câu hỏi ôn tập

### Câu 1: Mục đích chính của việc xây dựng Type Scale là gì?

Mục đích chính là tạo một hệ thống kích thước chữ có quy luật, thay thế cho việc chọn kích thước tùy ý.

Type Scale giúp:

* Typography nhất quán.
* Phân cấp nội dung rõ ràng.
* Dễ mở rộng hệ thống.
* Dễ điều chỉnh responsive.
* Giảm số lượng giá trị không cần thiết.
* Đồng bộ tốt hơn giữa thiết kế và lập trình.

---

### Câu 2: Áp dụng Type Scale vào một Figma Design System như thế nào?

Quy trình đề xuất:

1. Chọn kích thước chữ cơ sở.
2. Chọn modular scale phù hợp.
3. Tạo các cấp độ kích thước.
4. Làm tròn theo hệ lưới.
5. Tạo Responsive Collection.
6. Thêm các mode Mobile và Desktop.
7. Tạo Number Variables cho font size.
8. Tạo biến cho line height và paragraph spacing.
9. Gắn biến vào Text Styles.
10. Sử dụng Text Styles trong component.
11. Kiểm thử trên nhiều kích thước màn hình.

---

### Câu 3: Những bước quan trọng được trình bày trong bài học là gì?

Các bước quan trọng gồm:

* Sử dụng 16 px làm kích thước cơ sở.
* Chọn tỷ lệ Major Third để tạo thang chữ desktop.
* Chọn tỷ lệ nhỏ hơn cho mobile.
* Chuyển giá trị sang pixel.
* Làm tròn theo lưới 4 px.
* Tạo Responsive Collection trong Figma.
* Sử dụng Number Variables thay vì String Variables.
* Tạo các mode cho từng kích thước thiết bị.
* Chuẩn bị thêm line height và paragraph spacing.

---

### Câu 4: Rủi ro hoặc giới hạn cần lưu ý là gì?

Những rủi ro chính gồm:

* Chọn tỷ lệ quá lớn hoặc quá nhỏ.
* Tạo quá nhiều cấp độ chữ.
* Làm tròn giá trị quá máy móc.
* Không ghép font size với line height phù hợp.
* Không kiểm thử với phông chữ thật.
* Không kiểm thử nội dung dài và đa ngôn ngữ.
* Sử dụng một thang chữ duy nhất cho mọi thiết bị.
* Gắn component trực tiếp vào giá trị thô thay vì semantic style.

---

## 23. Tóm tắt bài học

Bài học xây dựng một **modular type scale** bằng cách bắt đầu từ kích thước chữ cơ sở 16 px, áp dụng một tỷ lệ tăng trưởng và chuẩn hóa các kết quả theo lưới 4 px.

Thang chữ sau đó được đưa vào một **Responsive Collection** trong Figma dưới dạng Number Variables. Mỗi biến có thể chứa giá trị khác nhau cho mobile và desktop.

Một hệ thống typography hoàn chỉnh không chỉ bao gồm font size mà còn phải quản lý:

* Line height.
* Paragraph spacing.
* Font weight.
* Text Styles.
* Semantic roles.
* Responsive modes.

```text
Typography nhất quán
=
Type Scale
+
Line Height
+
Paragraph Spacing
+
Responsive Variables
+
Semantic Text Styles
```

Đây là nền tảng để xây dựng một hệ thống chữ có khả năng mở rộng, dễ bảo trì và thích ứng tốt trên nhiều kích thước thiết bị.
