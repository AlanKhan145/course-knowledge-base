# 037 – Xây dựng Button Group

## Module

**Navigation & Layout Components**
*Các thành phần Điều hướng và Bố cục*

## Thời điểm trong video

**2:26:47** – Thời điểm bắt đầu trong video khóa học đầy đủ.

---

## 1. Tổng quan bài học

Trong bài học này, chúng ta xây dựng **Button Group** – một nhóm gồm nhiều nút có liên quan, được ghép lại thành một điều khiển thống nhất.

Button Group thường được trình bày dưới dạng **segmented control**, trong đó:

* Các nút được đặt liền nhau.
* Các nút dùng chung đường viền bên ngoài.
* Khoảng cách giữa các nút bằng `0`.
* Chỉ một hoặc một số nút có thể ở trạng thái được chọn.
* Góc bo chỉ xuất hiện ở hai đầu của toàn bộ nhóm.

Ví dụ:

```text
┌──────────┬──────────┬──────────┐
│  Day     │  Week    │  Month   │
└──────────┴──────────┴──────────┘
               ↑
            Selected
```

Button Group phù hợp với các chức năng như:

* Chuyển đổi chế độ hiển thị.
* Chọn khoảng thời gian.
* Chọn kiểu căn chỉnh.
* Chọn bộ lọc.
* Chuyển đổi giữa các lựa chọn loại trừ lẫn nhau.

---

## 2. Mục tiêu chính

Mục tiêu của bài học là tạo một Button Group có thể tái sử dụng trong Figma Design System, bao gồm:

* Một **Button Group Item** làm thành phần cơ sở.
* Các trạng thái mặc định, hover, selected và disabled.
* Icon có thể bật hoặc tắt.
* Icon có thể thay thế bằng Instance Swap.
* Nhãn có thể chỉnh sửa bằng Text Property.
* Các item được ghép sát nhau bằng Auto Layout.
* Đường viền và góc bo được xử lý thống nhất ở cấp nhóm.

---

## 3. Cấu trúc thành phần

Button Group được xây dựng theo hai cấp.

```text
Button Group
│
├── Button Group Item
│   ├── Icon
│   └── Label
│
├── Button Group Item
│   ├── Icon
│   └── Label
│
└── Button Group Item
    ├── Icon
    └── Label
```

### Cấp 1: Button Group Item

Đây là một nút đơn nằm bên trong nhóm.

Mỗi item có thể chứa:

* Icon bên trái.
* Nhãn văn bản.
* Padding ngang và dọc.
* Màu nền.
* Màu chữ.
* Màu icon.
* Đường viền phân cách bên phải.

### Cấp 2: Button Group

Đây là container chứa nhiều Button Group Item.

Container chịu trách nhiệm:

* Sắp xếp các item theo chiều ngang.
* Xóa khoảng cách giữa các item.
* Tạo đường viền chung bên ngoài.
* Thiết lập góc bo cho toàn bộ nhóm.
* Cắt phần nội dung vượt ra ngoài góc bo.

---

## 4. Xây dựng Button Group Item

### Bước 1: Tạo nội dung cơ bản

Tạo một frame chứa:

* Một icon kích thước khoảng `20 × 20`.
* Một nhãn văn bản.
* Ví dụ nhãn: `Button`.

Ví dụ:

```text
[ ♥ ] Button
```

Icon trong video được dùng để minh họa và có thể được thay thế bằng bất kỳ icon nào trong thư viện.

---

### Bước 2: Thêm Auto Layout

Áp dụng Auto Layout theo chiều ngang cho item.

Cấu hình tham khảo:

| Thuộc tính    | Giá trị gợi ý |
| ------------- | ------------: |
| Direction     |    Horizontal |
| Alignment     |        Center |
| Gap           |          8 px |
| Padding ngang |         12 px |
| Padding dọc   |         12 px |
| Width         |  Hug contents |
| Height        |  Hug contents |

Giá trị padding có thể thay đổi tùy thuộc kích thước Button Group trong hệ thống.

Ví dụ với kích thước nhỏ hơn:

```text
Padding ngang: 12 px
Padding dọc:    8 px
Gap:            8 px
```

---

### Bước 3: Gán token màu nền

Thay vì sử dụng mã màu trực tiếp, nên gán màu nền bằng semantic token.

Ví dụ:

```text
surface/default
```

Điều này giúp Button Group tự động thích nghi với:

* Light mode.
* Dark mode.
* Nhiều thương hiệu.
* Các theme khác nhau.

---

### Bước 4: Thêm đường viền phân cách

Mỗi Button Group Item có thể sử dụng một đường viền bên phải:

```text
Stroke:
- Side: Right
- Width: 1 px
- Color: border/default
```

Đường viền này đóng vai trò phân tách giữa các item.

```text
┌─────────┬─────────┬─────────┐
│ Item 1  │ Item 2  │ Item 3  │
└─────────┴─────────┴─────────┘
          ↑         ↑
       divider   divider
```

Không nên đặt đường viền bên phải cho item cuối cùng, vì container đã có đường viền bên ngoài.

---

## 5. Tạo Component Properties

Sau khi tạo Button Group Item, chuyển nó thành một component.

Tên gợi ý:

```text
Button Group / Item
```

Hoặc theo cấu trúc phân cấp:

```text
Navigation / Button Group / Item
```

---

### 5.1. Thuộc tính hiển thị icon

Tạo Boolean Property cho layer icon.

```text
showIcon = true / false
```

Người sử dụng component có thể bật hoặc tắt icon mà không cần chỉnh sửa cấu trúc bên trong.

```text
showIcon = true
[ ♥ ] Favorite

showIcon = false
Favorite
```

---

### 5.2. Thuộc tính thay thế icon

Tạo Instance Swap Property cho icon.

```text
icon
```

Thuộc tính này cho phép người dùng thay thế icon trái tim bằng:

* Home.
* List.
* Grid.
* Calendar.
* Arrow.
* Filter.
* Alignment icon.

Không nên detach icon instance chỉ để thay đổi biểu tượng.

---

### 5.3. Thuộc tính nhãn

Tạo Text Property cho nhãn.

```text
label = "Button"
```

Người dùng có thể thay đổi nội dung trực tiếp trong bảng thuộc tính:

```text
Day
Week
Month
List
Grid
```

---

### 5.4. Thuộc tính hiển thị nhãn

Trong trường hợp cần Button Group chỉ chứa icon, có thể thêm Boolean Property:

```text
showLabel = true / false
```

Ví dụ:

```text
Icon + Label:
[▦] Grid

Icon only:
[▦]
```

Tuy nhiên, icon-only button cần có tooltip hoặc accessible label khi triển khai trong sản phẩm thực tế.

---

## 6. Tạo các trạng thái

Button Group Item cần có các trạng thái tương tác cơ bản.

```text
Default
   │
   ├── Hover
   ├── Selected
   └── Disabled
```

Có thể tạo Variant Property:

```text
state
```

Với các giá trị:

```text
state=default
state=hover
state=selected
state=disabled
```

---

### 6.1. Default

Đây là trạng thái bình thường khi item chưa được chọn và người dùng chưa tương tác.

Token tham khảo:

```text
Background: surface/default
Text:       text/default
Icon:       icon/default
Border:     border/default
```

---

### 6.2. Hover

Trạng thái xuất hiện khi con trỏ di chuyển lên item.

Token tham khảo:

```text
Background: action/hover/light
Text:       text/action/hover
Icon:       icon/action/hover
Border:     border/action/hover
```

Hover phải tạo phản hồi trực quan nhưng không nên mạnh hơn Selected.

---

### 6.3. Selected

Trạng thái biểu thị item đang được chọn.

Token tham khảo:

```text
Background: action/selected
Text:       text/action
Icon:       icon/action
Border:     border/action
```

Ví dụ:

```text
┌──────────┬──────────┬──────────┐
│   Day    │  WEEK    │  Month   │
└──────────┴──────────┴──────────┘
                ↑
             Selected
```

Selected cần đủ rõ ràng để người dùng nhận biết lựa chọn hiện tại mà không chỉ phụ thuộc vào màu sắc.

Có thể kết hợp thêm:

* Nền nổi bật.
* Chữ đậm hơn.
* Icon thay đổi màu.
* Dấu chọn.
* Viền nhấn mạnh.

---

### 6.4. Disabled

Trạng thái disabled được sử dụng khi một lựa chọn tạm thời không khả dụng.

Token tham khảo:

```text
Background: surface/disabled
Text:       text/disabled
Icon:       icon/disabled
Border:     border/disabled
```

Mặc dù disabled ít xuất hiện trong Button Group, vẫn nên xây dựng để component đầy đủ và nhất quán.

---

## 7. Tạo component set

Chọn các phiên bản trạng thái và kết hợp chúng thành một Component Set.

```text
Button Group / Item
├── state=default
├── state=hover
├── state=selected
└── state=disabled
```

Bảng trạng thái:

| State    | Mục đích                  |
| -------- | ------------------------- |
| Default  | Trạng thái chưa tương tác |
| Hover    | Phản hồi khi rê chuột     |
| Selected | Lựa chọn hiện tại         |
| Disabled | Lựa chọn không khả dụng   |

Nên đặt tên property rõ ràng là `state`, thay vì để Figma tự tạo tên như `Property 1`.

---

## 8. Ghép các item thành Button Group

### Bước 1: Tạo các instance

Kéo nhiều instance của Button Group Item vào canvas.

Ví dụ:

```text
Day
Week
Month
```

### Bước 2: Thêm Auto Layout ngang

Chọn các instance và áp dụng Auto Layout:

```text
Direction: Horizontal
Gap: 0
Width: Hug contents
Height: Hug contents
```

Khoảng cách phải bằng `0` để các item nối liền thành một segmented control.

---

### Bước 3: Thêm đường viền ngoài

Đặt một stroke cho frame Button Group:

```text
Stroke: 1 px
Color: border/default
Position: Inside hoặc Outside
```

Việc dùng Inside hay Outside phụ thuộc vào quy ước của Design System, nhưng cần nhất quán giữa các component.

---

### Bước 4: Thiết lập góc bo

Đặt border radius cho container.

Ví dụ:

```text
Radius: 4 px
```

Hoặc dùng token:

```text
radius/sm
```

Không nên đặt toàn bộ bốn góc bo trên từng item, vì sẽ tạo ra các khe hở không mong muốn.

Sai:

```text
( Item 1 ) ( Item 2 ) ( Item 3 )
```

Đúng:

```text
( Item 1 | Item 2 | Item 3 )
```

---

### Bước 5: Bật Clip Content

Bật:

```text
Clip content = true
```

Điều này giúp các item bên trong không tràn ra ngoài phần góc bo của container.

```text
Container radius
┌────────────────────────────┐
│ Item 1 │ Item 2 │ Item 3   │
└────────────────────────────┘
```

---

## 9. Xử lý đường viền giữa các segment

Đường viền là phần dễ gặp lỗi nhất khi xây dựng Button Group.

Có hai phương pháp phổ biến.

### Phương pháp 1: Mỗi item có border-right

```text
Item 1 → border-right
Item 2 → border-right
Item 3 → không có border-right
```

Ưu điểm:

* Dễ hiểu.
* Dễ kiểm soát.
* Hoạt động tốt khi số lượng item cố định.

Hạn chế:

* Cần xác định item cuối.
* Có thể phải tạo property riêng cho `isLast`.

---

### Phương pháp 2: Dùng khoảng âm hoặc stroke chồng nhau

Các item đều có stroke đầy đủ, sau đó dùng spacing âm để hai stroke chồng lên nhau.

```text
Spacing between items: -1 px
```

Ưu điểm:

* Tất cả item dùng cùng một component.
* Không cần xử lý riêng item cuối.

Hạn chế:

* Dễ tạo lỗi hiển thị.
* Có thể xuất hiện đường viền dày `2 px`.
* Khó bảo trì hơn khi đổi stroke width.
* Có thể gây lỗi khi responsive hoặc thay đổi scale.

Trong phần transcript, Figma liên tục tự thêm lại đường viền ở nhiều phía khi component được sao chép hoặc chỉnh sửa. Vì vậy, cần kiểm tra kỹ stroke side của từng variant.

---

## 10. Trạng thái được chọn trong Button Group

Thông thường, Button Group chỉ có một item được chọn tại một thời điểm.

```text
┌─────────┬─────────┬─────────┐
│ Default │ Selected│ Default │
└─────────┴─────────┴─────────┘
```

Ví dụ:

```text
View mode:
[List] [Grid]

Time range:
[Day] [Week] [Month]

Alignment:
[Left] [Center] [Right]
```

Trong Figma, trạng thái selected được thiết lập thủ công trên từng instance.

Trong code, trạng thái này nên được điều khiển bởi một giá trị duy nhất:

```text
selectedValue = "week"
```

Sau đó, mỗi segment so sánh giá trị của mình với `selectedValue`.

---

## 11. Các biến thể mở rộng

Tùy sản phẩm, Button Group có thể có thêm các property sau.

### 11.1. Kiểu nội dung

```text
content=label
content=icon
content=icon-label
```

---

### 11.2. Kích thước

```text
size=small
size=medium
size=large
```

Ví dụ:

| Size   | Padding ngang | Padding dọc |  Icon |
| ------ | ------------: | ----------: | ----: |
| Small  |          8 px |        6 px | 16 px |
| Medium |         12 px |        8 px | 20 px |
| Large  |         16 px |       12 px | 24 px |

---

### 11.3. Chiều rộng

```text
width=hug
width=fill
```

#### Hug contents

Mỗi item rộng theo nội dung:

```text
[Day] [This week] [This month]
```

#### Fill container

Các item có chiều rộng bằng nhau:

```text
┌──────────┬──────────┬──────────┐
│   Day    │   Week   │  Month   │
└──────────┴──────────┴──────────┘
```

Equal-width phù hợp với:

* Tab chuyển đổi chính.
* Các lựa chọn có mức độ ưu tiên ngang nhau.
* Layout mobile.

---

### 11.4. Số lượng segment

Có thể xây dựng các variant cấp nhóm:

```text
items=2
items=3
items=4
```

Tuy nhiên, cách này sẽ tạo nhiều variant và khó mở rộng.

Một giải pháp linh hoạt hơn là tạo Button Group dưới dạng component có các nested instances và Boolean Properties:

```text
showItem2
showItem3
showItem4
showItem5
```

---

## 12. Kiến trúc property đề xuất

### Button Group Item

```text
Button Group / Item
├── state
│   ├── default
│   ├── hover
│   ├── selected
│   └── disabled
├── size
│   ├── small
│   ├── medium
│   └── large
├── showIcon
├── icon
├── showLabel
└── label
```

### Button Group

```text
Button Group
├── width
│   ├── hug
│   └── fill
├── orientation
│   ├── horizontal
│   └── vertical
└── Nested Button Group Items
```

---

## 13. Luồng hoạt động

```text
Người dùng chọn một segment
            │
            ▼
Cập nhật selected value
            │
            ▼
Segment được chọn
state = selected
            │
            ├── Đổi màu nền
            ├── Đổi màu chữ
            ├── Đổi màu icon
            └── Đổi màu đường viền
```

Ví dụ:

```text
selectedValue = "grid"

List:
value = "list"
state = default

Grid:
value = "grid"
state = selected
```

---

## 14. Áp dụng vào Design System thực tế

Trong một Design System thực tế, Button Group nên được xây dựng dựa trên các component và token đã có.

```text
Primitive tokens
      │
      ▼
Semantic tokens
      │
      ▼
Button Group Item
      │
      ▼
Button Group
      │
      ▼
Product screens
```

### Token màu

```text
surface/default
surface/hover
surface/selected
surface/disabled

text/default
text/action
text/disabled

icon/default
icon/action
icon/disabled

border/default
border/action
border/disabled
```

### Token kích thước

```text
spacing/2
spacing/3
spacing/4

radius/sm
border-width/default

icon/sm
icon/md
```

Nhờ đó, khi thay đổi theme hoặc thương hiệu, Button Group sẽ cập nhật đồng bộ mà không cần sửa từng instance.

---

## 15. Những lỗi thường gặp

### 15.1. Đường viền giữa các item dày gấp đôi

Nguyên nhân:

* Hai item liền nhau đều có stroke đầy đủ.
* Hai stroke chồng lên nhau tạo thành đường `2 px`.

Giải pháp:

* Chỉ dùng border-right.
* Loại bỏ stroke trùng.
* Hoặc dùng spacing âm có kiểm soát.

---

### 15.2. Mỗi item đều có góc bo

Kết quả:

```text
( One ) ( Two ) ( Three )
```

Thay vì:

```text
( One | Two | Three )
```

Giải pháp:

* Đặt góc bo ở container.
* Bật Clip Content.
* Đặt radius của item bằng `0`.

---

### 15.3. Selected và Hover khó phân biệt

Nếu selected và hover dùng màu gần giống nhau, người dùng sẽ không biết đâu là lựa chọn hiện tại.

Thứ tự nhấn mạnh nên là:

```text
Default < Hover < Selected
```

---

### 15.4. Sử dụng màu hard-code

Màu hard-code làm component không thể tự thích ứng với Dark Mode hoặc nhiều thương hiệu.

Sai:

```text
Background: #E8F0FF
```

Nên dùng:

```text
Background: action/selected
```

---

### 15.5. Trộn state và style trong một property

Ví dụ:

```text
type=default
type=hover
type=selected
type=disabled
```

Cách này hoạt động nhưng không rõ nghĩa.

Nên dùng:

```text
state=default
state=hover
state=selected
state=disabled
```

Nếu có style riêng, tách thành property khác:

```text
style=outlined
style=filled
```

---

### 15.6. Tạo quá nhiều variant

Kết hợp quá nhiều property có thể gây bùng nổ số lượng variant.

Ví dụ:

```text
4 state
× 3 size
× 3 content type
× 2 width
= 72 variants
```

Không phải tổ hợp nào cũng cần được tạo thành variant.

Có thể thay một số variant bằng:

* Boolean Property.
* Text Property.
* Instance Swap.
* Nested Instance Property.
* Auto Layout.

---

### 15.7. Icon-only không có mô tả

Button chỉ chứa icon có thể gây khó hiểu và không đảm bảo accessibility.

Cần bổ sung:

* Tooltip.
* Accessible name.
* `aria-label` khi triển khai web.
* Semantic label trong mobile app.

---

### 15.8. Figma tự thay đổi stroke khi sao chép

Trong transcript, Figma xuất hiện hành vi bất thường: khi sao chép hoặc cập nhật component, stroke bị áp dụng lại cho nhiều cạnh.

Cách kiểm tra:

1. Chọn từng variant.
2. Mở phần Stroke.
3. Kiểm tra chế độ Individual Strokes.
4. Đảm bảo chỉ cạnh cần thiết được bật.
5. Kiểm tra lại nested instances.
6. Xác nhận component không có stroke thừa ở cả item và container.

Không nên dựa hoàn toàn vào kết quả sao chép tự động mà không kiểm tra lại.

---

## 16. Checklist hoàn thiện

### Button Group Item

* [ ] Đã sử dụng Auto Layout.
* [ ] Width và Height dùng Hug Contents.
* [ ] Padding lấy từ spacing token.
* [ ] Icon có Boolean Property.
* [ ] Icon có Instance Swap Property.
* [ ] Label có Text Property.
* [ ] Có các trạng thái Default, Hover, Selected và Disabled.
* [ ] Màu sắc sử dụng semantic token.
* [ ] Stroke chỉ xuất hiện ở cạnh cần thiết.

### Button Group

* [ ] Các item được sắp xếp theo chiều ngang.
* [ ] Khoảng cách giữa các item bằng `0`.
* [ ] Container có stroke chung.
* [ ] Container có radius token.
* [ ] Clip Content đã được bật.
* [ ] Chỉ có trạng thái selected hợp lệ.
* [ ] Không có đường viền dày gấp đôi.
* [ ] Có thể hiển thị Hug hoặc Fill tùy trường hợp.

---

## 17. Trả lời câu hỏi ôn tập

### Câu 1: Mục đích chính của Build a Button Group trong module Navigation & Layout Components là gì?

Mục đích chính là xây dựng một component cho phép nhiều nút liên quan được ghép thành một segmented control thống nhất.

Component này giúp:

* Nhóm các lựa chọn có cùng ngữ cảnh.
* Hiển thị lựa chọn hiện tại.
* Tái sử dụng nhất quán trong nhiều màn hình.
* Quản lý chung đường viền, góc bo và trạng thái.
* Giảm việc tạo thủ công từng nhóm nút trong sản phẩm.

---

### Câu 2: Làm thế nào để áp dụng vào một Figma Design System thực tế?

Có thể áp dụng theo quy trình:

1. Xây dựng Button Group Item từ Auto Layout.
2. Gán semantic tokens cho nền, chữ, icon và border.
3. Tạo properties cho icon và label.
4. Tạo các state variants.
5. Kết hợp nhiều item trong một container.
6. Đặt spacing giữa các item bằng `0`.
7. Tạo stroke và radius ở cấp container.
8. Bật Clip Content.
9. Kiểm tra trên Light Mode và Dark Mode.
10. Xuất bản component trong thư viện dùng chung.

Tên component gợi ý:

```text
Navigation / Button Group
Navigation / Button Group / Item
```

---

### Câu 3: Các bước và ý tưởng quan trọng trong bài học là gì?

Các ý chính gồm:

* Tạo Button Group Item từ icon và label.
* Sử dụng Auto Layout để kiểm soát padding và gap.
* Dùng Boolean Property để bật hoặc tắt icon.
* Dùng Instance Swap để thay icon.
* Dùng Text Property để thay label.
* Tạo các state: default, hover, selected và disabled.
* Ghép nhiều instance với gap bằng `0`.
* Xử lý đường viền phân cách giữa các segment.
* Đặt stroke, radius và Clip Content ở cấp nhóm.
* Cho phép mở rộng sang icon-only, label-only và nhiều kích thước.

---

### Câu 4: Rủi ro hoặc hạn chế cần lưu ý là gì?

Rủi ro lớn nhất là việc xử lý đường viền và góc bo giữa các segment.

Nếu thiết lập không đúng, có thể xảy ra:

* Đường viền dày gấp đôi.
* Item cuối vẫn có border-right.
* Mỗi item có góc bo riêng.
* Selected không rõ hơn Hover.
* Figma tự áp dụng stroke ngoài ý muốn.
* Component có quá nhiều variant.
* Icon-only thiếu nhãn hỗ trợ accessibility.
* Nhóm không phản hồi tốt khi nội dung nhãn quá dài.

Vì vậy, cần kiểm tra component trong nhiều tình huống:

```text
2 segments
3 segments
4 segments
Icon only
Label only
Icon + label
Long label
Light mode
Dark mode
Disabled state
```

---

## 18. Tóm tắt bài học

Button Group là một component dùng để gom nhiều Button instances thành một segmented control thống nhất.

Một Button Group hoàn chỉnh cần có:

* Button Group Item có thể tái sử dụng.
* Icon và label có thể tùy chỉnh.
* Các trạng thái Default, Hover, Selected và Disabled.
* Auto Layout với khoảng cách giữa các item bằng `0`.
* Đường viền phân cách nhất quán.
* Đường viền và góc bo chung ở container.
* Clip Content để giữ hình dạng bên ngoài.
* Semantic tokens để hỗ trợ theme và nhiều thương hiệu.

Bài học này là một phần trong mục tiêu lớn hơn của module **Navigation & Layout Components**, bao gồm việc xây dựng:

```text
Navigation & Layout Components
├── Menu
├── Tab Bar
├── Button Group
├── Link
└── Breadcrumb
```

Button Group giúp Design System cung cấp một cách nhất quán, dễ mở rộng và dễ bảo trì để người dùng chuyển đổi giữa các lựa chọn liên quan.
