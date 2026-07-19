# 035 – Xây dựng Menu Component

## Thông tin bài học

* **Module:** Navigation & Layout Components
* **Thời điểm trong video:** `1:42:57`
* **Chủ đề:** Xây dựng thành phần Menu/Dropdown trong Figma
* **Mức độ:** Trung cấp
* **Công cụ chính:** Auto Layout, Variables, Component Properties, Variants, Nested Instances

---

## 1. Mục tiêu bài học

Bài học hướng dẫn cách xây dựng một **Menu Component** có thể tái sử dụng trong hệ thống thiết kế.

Menu bao gồm:

* Một khung chứa danh sách các mục lựa chọn.
* Nhiều `Menu Item` được lồng bên trong.
* Biểu tượng bên trái và bên phải.
* Nhãn văn bản có thể chỉnh sửa.
* Các trạng thái tương tác:

  * Mặc định.
  * Di chuột.
  * Được chọn.
  * Vô hiệu hóa.
* Thanh cuộn tùy chọn khi danh sách quá dài.
* Các thuộc tính của `Menu Item` được đưa lên `Menu` cha để dễ cấu hình.

---

## 2. Menu Component là gì?

Menu Component là một bề mặt chứa danh sách các hành động hoặc lựa chọn mà người dùng có thể chọn.

Ví dụ:

* Menu tài khoản.
* Menu cài đặt.
* Dropdown chọn ngôn ngữ.
* Menu điều hướng.
* Menu thao tác trên một đối tượng.
* Danh sách bộ lọc.
* Danh sách lựa chọn có trạng thái hiện tại.

### Ví dụ cấu trúc

```text
┌─────────────────────────────┐
│ 👤  Hồ sơ              ›    │
├─────────────────────────────┤
│ ⚙️  Cài đặt            ›    │
├─────────────────────────────┤
│ 🌐  Ngôn ngữ           ✓    │
├─────────────────────────────┤
│ 🚪  Đăng xuất                │
└─────────────────────────────┘
```

Một Menu không nên được xây dựng như một khối giao diện cố định. Thay vào đó, nó cần được chia thành hai cấp component:

```text
Menu
└── Menu Item
    ├── Left Icon
    ├── Label
    └── Right Icon
```

---

## 3. Kiến trúc thành phần

### 3.1. Component cấp thấp: Menu Item

`Menu Item` đại diện cho một dòng lựa chọn bên trong menu.

Cấu trúc cơ bản:

```text
.Menu Item
├── Left Icon
├── Label
└── Right Icon
```

Trong bài học, `Menu Item` được thiết lập bằng Auto Layout với khoảng cách giữa các phần tử, căn giữa theo chiều dọc và sử dụng chế độ `Hug contents` hoặc `Fill container` phù hợp. Biểu tượng bên phải luôn được giữ ở cuối dòng bằng cách cho vùng chứa nhãn mở rộng để chiếm phần không gian còn lại.

### 3.2. Component cấp cao: Menu

`Menu` là component tổng hợp, chứa nhiều instance của `Menu Item`.

```text
Menu
├── Menu Items Frame
│   ├── Menu Item 01
│   ├── Menu Item 02
│   ├── Menu Item 03
│   └── Menu Item 04
└── Scrollbar
```

Cách tổ chức này giúp:

* Tái sử dụng `Menu Item` trong nhiều loại menu.
* Chỉnh sửa trạng thái từng mục độc lập.
* Thay đổi biểu tượng mà không tháo rời component.
* Thêm hoặc bớt số lượng lựa chọn.
* Tạo menu ngắn hoặc menu có thanh cuộn.
* Duy trì tính nhất quán trên toàn bộ sản phẩm.

---

## 4. Xây dựng Menu Item

## 4.1. Tạo nội dung cơ bản

Một Menu Item thường gồm ba phần:

| Thành phần | Vai trò                                  |
| ---------- | ---------------------------------------- |
| Left Icon  | Minh họa loại hành động hoặc nội dung    |
| Label      | Tên lựa chọn                             |
| Right Icon | Mũi tên, dấu kiểm hoặc hành động bổ sung |

Ví dụ:

```text
[Left Icon]  Label                    [Right Icon]
```

### Thiết lập đề xuất

* Layout: Horizontal Auto Layout.
* Alignment: Center Left.
* Vertical alignment: Center.
* Gap giữa biểu tượng và nội dung: `12px`.
* Padding ngang: khoảng `12px`.
* Padding dọc: khoảng `8px`.
* Chiều rộng: `Fill container`.
* Chiều cao: `Hug contents`.
* Nền: Surface Default.
* Viền phân cách: Border Default.
* Viền: chỉ đặt ở cạnh dưới nếu các item xếp liên tiếp.

### Sơ đồ Auto Layout

```text
Menu Item – Horizontal Auto Layout
│
├── Left Icon
│
├── Label Container – Fill container
│   └── Label
│
└── Right Icon
```

Nhờ `Label Container = Fill container`, biểu tượng bên phải sẽ luôn nằm sát cuối dòng dù nội dung nhãn dài hay ngắn.

---

## 4.2. Sử dụng design token

Không nên sử dụng màu sắc hoặc kích thước nhập trực tiếp.

Thay vào đó, hãy liên kết Menu Item với token:

```text
Menu Item
├── Fill      → surface/default
├── Border    → border/default
├── Text      → text/body
├── Icon      → icon/default
├── Gap       → spacing/12
├── Padding X → spacing/12
└── Padding Y → spacing/8
```

### Lợi ích

Khi hệ thống chuyển sang Dark Mode hoặc thay đổi thương hiệu:

* Menu tự động đổi màu.
* Không cần chỉnh sửa từng component.
* Trạng thái tương tác vẫn nhất quán.
* Giảm nguy cơ sử dụng sai màu.

---

## 4.3. Đặt tên component nội bộ

Menu Item có thể được đặt tên:

```text
.Menu Item
```

Dấu chấm ở đầu tên có thể được dùng như một quy ước để thể hiện rằng đây là component nội bộ, không cần xuất bản độc lập trong thư viện.

Ví dụ:

```text
.Menu Item
.Menu Divider
.Menu Section Label
```

Menu cha có thể được đặt tên bình thường:

```text
Menu
```

> Đây là quy ước tổ chức thư viện, không phải quy tắc bắt buộc của Figma. Nhóm thiết kế cần thống nhất cách đặt tên trước khi áp dụng.

---

## 5. Tạo Component Properties

Menu Item cần có các thuộc tính để người sử dụng có thể cấu hình trực tiếp trên instance.

## 5.1. Thuộc tính văn bản

Tạo Text Property:

```text
Label
```

Cho phép thay đổi nội dung:

```text
Profile
Settings
Language
Log out
```

---

## 5.2. Thuộc tính hiển thị biểu tượng

Tạo Boolean Properties:

```text
Show Left Icon
Show Right Icon
```

Các trường hợp sử dụng:

```text
Có hai biểu tượng:
[Icon] Label [Arrow]

Chỉ có biểu tượng trái:
[Icon] Label

Chỉ có biểu tượng phải:
Label [Check]

Không có biểu tượng:
Label
```

---

## 5.3. Thuộc tính Instance Swap

Tạo Instance Swap Properties:

```text
Left Icon
Right Icon
```

Người thiết kế có thể thay biểu tượng mà không cần detach component.

Ví dụ:

```text
Left Icon:
- Person
- Settings
- Language
- Notification
- Help

Right Icon:
- Chevron Right
- Chevron Down
- Check
- External Link
```

Trong bài học, biểu tượng trái, biểu tượng phải và nhãn đều được chuyển thành component properties để có thể thay đổi ngay trên instance.

---

## 6. Tạo các trạng thái của Menu Item

Menu Item cần thể hiện rõ phản hồi khi người dùng tương tác.

## 6.1. Variant Property: Status

Tạo thuộc tính:

```text
Status
```

Các giá trị:

```text
default
hover
disabled
```

Có thể mở rộng:

```text
pressed
focus
```

---

## 6.2. Variant Property: Selection

Tạo thuộc tính thứ hai:

```text
Selection
```

Các giá trị:

```text
unselected
selected
```

### Ma trận biến thể

```text
                    Selection
               ┌───────────────┬───────────────┐
               │  unselected   │   selected    │
┌──────────────┼───────────────┼───────────────┤
│ default      │ Default       │ Selected      │
│ hover        │ Hover         │ Selected Hover│
│ disabled     │ Disabled      │ Disabled Sel. │
└──────────────┴───────────────┴───────────────┘
```

Tổng số biến thể tối thiểu:

```text
3 Status × 2 Selection = 6 Variants
```

Bài học xây dựng trạng thái `default`, `hover`, `disabled`, sau đó bổ sung trạng thái được chọn và chưa được chọn. Mỗi trạng thái sử dụng các token bề mặt, đường viền, văn bản và biểu tượng tương ứng.

---

## 6.3. Trạng thái Default

Trạng thái bình thường khi người dùng chưa tương tác.

```text
Surface → surface/default
Border  → border/default
Text    → text/body
Icon    → icon/default
```

Minh họa:

```text
┌─────────────────────────────┐
│ ⚙️  Settings            ›   │
└─────────────────────────────┘
```

---

## 6.4. Trạng thái Hover

Được sử dụng khi con trỏ chuột nằm trên Menu Item.

```text
Surface → surface/action-hover-light
Border  → border/action-hover
Text    → text/action-hover
Icon    → icon/action-hover
```

Mục đích:

* Cung cấp phản hồi trực quan.
* Giúp người dùng biết phần tử có thể tương tác.
* Làm nổi bật lựa chọn hiện tại của con trỏ.

---

## 6.5. Trạng thái Selected

Thể hiện lựa chọn hiện đang được kích hoạt.

```text
Surface → surface/action
Border  → border/action
Text    → text/on-action
Icon    → icon/on-action
```

Ví dụ:

```text
┌─────────────────────────────┐
│ 🌐  Tiếng Việt          ✓   │
└─────────────────────────────┘
```

Có thể dùng:

* Nền nổi bật.
* Dấu kiểm bên phải.
* Kiểu chữ đậm hơn.
* Màu văn bản tương phản.

Không nên chỉ sử dụng màu sắc để biểu thị trạng thái selected. Nên có thêm dấu kiểm hoặc biểu tượng để tăng khả năng tiếp cận.

---

## 6.6. Trạng thái Selected Hover

Khi item đã được chọn và người dùng tiếp tục di chuột lên nó.

```text
Surface → surface/action-hover
Border  → border/action-hover
Text    → text/on-action
Icon    → icon/on-action
```

Trạng thái này cần khác nhẹ so với Selected nhưng không được làm mất tín hiệu rằng item đang được chọn.

---

## 6.7. Trạng thái Disabled

Item bị vô hiệu hóa không thể được chọn.

```text
Surface → surface/disabled
Border  → border/disabled
Text    → text/disabled
Icon    → icon/disabled
```

Ví dụ:

```text
┌─────────────────────────────┐
│ 🔒  Premium feature         │
└─────────────────────────────┘
```

Lưu ý:

* Không nên chỉ giảm opacity của toàn bộ component.
* Cần bảo đảm văn bản vẫn có thể đọc được.
* Disabled không được có hiệu ứng hover.
* Con trỏ chuột không nên thể hiện item có thể nhấn.

---

## 7. Ghép các Menu Item thành Menu

Sau khi hoàn thiện Menu Item, tạo nhiều instance và xếp chúng theo chiều dọc.

```text
Menu
├── Menu Item
├── Menu Item
├── Menu Item – Selected
├── Menu Item
└── Menu Item – Disabled
```

### Thiết lập Menu

* Layout: Vertical Auto Layout.
* Width: Fixed hoặc Fill container tùy trường hợp.
* Height: Hug contents hoặc Fixed nếu menu cuộn.
* Gap giữa các item: `0`.
* Surface: Surface Raised hoặc Surface Overlay.
* Border: Border Default.
* Radius: Radius Medium.
* Overflow: Clip content.
* Elevation: Shadow/Elevation token.

### Sơ đồ cấu trúc

```text
Menu – Vertical Auto Layout
│
├── Menu Item 01
├── Menu Item 02
├── Menu Item 03 – Selected
├── Menu Item 04
└── Menu Item 05 – Disabled
```

Trong bài học, nhiều Menu Item được sao chép thành danh sách, một item được chuyển sang trạng thái Selected và sau đó toàn bộ danh sách được đóng gói thành Menu Component.

---

## 8. Surface và Elevation của Menu

Menu thường xuất hiện phía trên nội dung chính nên cần thể hiện độ nổi.

### Token đề xuất

```text
Fill       → surface/raised
Border     → border/default
Shadow     → elevation/menu
Radius     → radius/md
```

### Phân cấp bề mặt

```text
Page Surface
    ↓
Card Surface
    ↓
Menu Surface
    ↓
Tooltip / Dialog Surface
```

Menu cần đủ nổi bật so với nền nhưng không nên có shadow quá mạnh.

Ví dụ:

```text
Menu
├── Surface: raised
├── Border: default
└── Elevation: level-2
```

---

## 9. Thêm thanh cuộn

Khi menu chứa quá nhiều mục, cần giới hạn chiều cao và thêm thanh cuộn.

## 9.1. Cấu trúc

```text
Menu
├── Items Frame
│   ├── Menu Item 01
│   ├── Menu Item 02
│   ├── Menu Item 03
│   └── ...
└── Scrollbar
```

### Items Frame

```text
Layout direction: Vertical
Width: Fill container
Height: Fixed
Clip content: On
```

### Scrollbar Frame

```text
Width: Fixed
Height: Fill container
Alignment: Center
```

### Scrollbar Thumb

```text
Fill: border/default hoặc surface/strong
Radius: Full
Width: 4–8px
```

Hai frame được đặt cạnh nhau bằng Auto Layout ngang:

```text
Menu Content – Horizontal Auto Layout
├── Items Frame – Fill container
└── Scrollbar Frame – Hug contents
```

Bài học minh họa cách đặt danh sách item và thanh cuộn trong hai frame riêng, sau đó ghép chúng bằng Auto Layout ngang. Thanh cuộn cũng có thể được bật hoặc tắt bằng Boolean Property.

---

## 10. Thuộc tính của Menu Component

Menu cha có thể cung cấp các thuộc tính sau:

### Thuộc tính cấu hình chung

```text
Show Scrollbar: true / false
```

Có thể mở rộng thêm:

```text
Size: sm / md / lg
Density: compact / comfortable
Width: fixed / fluid
```

### Thuộc tính lồng nhau

Figma cho phép đưa các thuộc tính của Menu Item lên Menu cha bằng tính năng **Expose properties from nested instances**.

Ví dụ:

```text
Menu
├── Item 01 / Label
├── Item 01 / Left Icon
├── Item 01 / Right Icon
├── Item 01 / Status
├── Item 01 / Selection
├── Item 02 / Label
└── ...
```

Nhờ đó, người sử dụng có thể chỉnh sửa toàn bộ menu mà không cần truy cập sâu vào từng layer.

Trong quá trình hoàn thiện Menu, các thuộc tính của các Menu Item lồng nhau được bật để có thể điều khiển trực tiếp từ component Menu cha.

---

## 11. Sơ đồ quy trình xây dựng

```text
Tạo nội dung Menu Item
          ↓
Áp dụng Auto Layout
          ↓
Liên kết Surface, Border, Text và Icon Token
          ↓
Tạo Text, Boolean và Instance Swap Properties
          ↓
Tạo Status Variants
          ↓
Tạo Selected / Unselected Variants
          ↓
Kiểm tra trùng lặp variant
          ↓
Tạo nhiều instance Menu Item
          ↓
Ghép thành Menu bằng Vertical Auto Layout
          ↓
Thêm Surface, Border, Radius và Elevation
          ↓
Thêm Scrollbar tùy chọn
          ↓
Expose Nested Instance Properties
          ↓
Kiểm tra component trong các tình huống thực tế
```

---

## 12. Prototype tương tác

Có thể thêm prototype cho Menu Item:

```text
Default
  └── While hovering → Hover

Hover
  ├── Mouse leave → Default
  └── On click → Selected

Selected
  └── While hovering → Selected Hover
```

### Sơ đồ trạng thái

```mermaid
stateDiagram-v2
    [*] --> Default

    Default --> Hover: Di chuột
    Hover --> Default: Rời chuột
    Hover --> Selected: Nhấp chuột

    Selected --> SelectedHover: Di chuột
    SelectedHover --> Selected: Rời chuột

    Default --> Disabled: Không khả dụng
```

Không cần prototype mọi biến thể trong thư viện nếu hành vi được xử lý trong code. Tuy nhiên, prototype giúp:

* Trình bày component trong design review.
* Kiểm tra logic trạng thái.
* Hướng dẫn lập trình viên.
* Tạo mẫu thử nghiệm người dùng.

---

## 13. Ứng dụng vào hệ thống thiết kế thực tế

Menu Component có thể được dùng làm nền tảng cho nhiều component khác.

```text
Menu
├── Account Menu
├── Context Menu
├── Select Dropdown
├── Action Menu
├── Navigation Menu
└── Filter Menu
```

### Ví dụ Account Menu

```text
┌─────────────────────────────┐
│ 👤  Hồ sơ                   │
│ ⚙️  Cài đặt                 │
│ 🌐  Ngôn ngữ            ›   │
│ ─────────────────────────── │
│ 🚪  Đăng xuất               │
└─────────────────────────────┘
```

### Ví dụ Select Dropdown

```text
┌─────────────────────────────┐
│ ○  English                  │
│ ●  Tiếng Việt           ✓   │
│ ○  日本語                   │
└─────────────────────────────┘
```

### Ví dụ Context Menu

```text
┌─────────────────────────────┐
│ ✏️  Đổi tên                 │
│ 📋  Sao chép                │
│ 📁  Di chuyển           ›   │
│ 🗑️  Xóa                     │
└─────────────────────────────┘
```

---

## 14. Rủi ro và hạn chế

## 14.1. Quá nhiều biến thể

Nếu kết hợp quá nhiều thuộc tính:

```text
4 Status
× 2 Selection
× 3 Sizes
× 2 Densities
× 2 Themes
= 96 Variants
```

Component Set sẽ trở nên khó quản lý.

### Giải pháp

* Sử dụng variables cho theme.
* Dùng Auto Layout cho kích thước linh hoạt.
* Chỉ tạo variant khi cấu trúc hoặc trạng thái thực sự khác.
* Không biến mọi thay đổi nhỏ thành variant.

---

## 14.2. Trùng lặp tổ hợp variant

Hai component không được có cùng tổ hợp:

```text
Status = hover
Selection = selected
```

Nếu trùng lặp, Figma có thể:

* Hiển thị cảnh báo.
* Chuyển variant không chính xác.
* Gây lỗi khi prototype.
* Làm component khó sử dụng.

Luôn kiểm tra:

```text
Status + Selection = duy nhất
```

---

## 14.3. Viền giữa các Menu Item

Nếu mỗi item có viền bốn cạnh, các đường viền nằm cạnh nhau có thể tạo cảm giác dày gấp đôi.

### Giải pháp

* Menu Item chỉ có viền dưới.
* Item cuối cùng không có viền.
* Sử dụng Divider Component riêng.
* Dùng gap và màu nền thay cho border.

Trong quá trình bài học, Figma xuất hiện hiện tượng viền dưới của Menu Item bị chuyển thành viền ở tất cả các cạnh khi đưa item vào Menu. Đây có thể là lỗi hiển thị hoặc lỗi cấu hình cần được kiểm tra trên component gốc và instance.

---

## 14.4. Menu quá dài

Menu quá dài làm người dùng khó tìm lựa chọn.

### Giải pháp

* Giới hạn chiều cao.
* Thêm thanh cuộn.
* Phân nhóm menu.
* Thêm tiêu đề section.
* Thêm trường tìm kiếm.
* Sắp xếp mục theo tần suất sử dụng.

---

## 14.5. Selected và Hover quá giống nhau

Nếu hai trạng thái dùng cùng một màu, người dùng khó phân biệt:

```text
Item đang được chọn
```

với:

```text
Item chỉ đang được di chuột
```

Nên phân biệt bằng:

* Màu nền.
* Dấu kiểm.
* Font weight.
* Border hoặc indicator.
* Màu biểu tượng.

---

## 14.6. Không bảo đảm khả năng tiếp cận

Cần kiểm tra:

* Độ tương phản văn bản.
* Kích thước vùng nhấn.
* Trạng thái focus khi dùng bàn phím.
* Khả năng điều hướng bằng phím mũi tên.
* Không chỉ sử dụng màu sắc để truyền đạt trạng thái.
* Disabled vẫn phải đọc được.
* Nhãn menu phải rõ nghĩa.

---

## 15. Quy ước đặt tên đề xuất

### Component

```text
Navigation/Menu
Navigation/Menu Item
```

Hoặc:

```text
Menu
.Menu Item
```

### Variant Properties

```text
Status
Selection
Size
Density
```

### Variant Values

```text
Status:
- default
- hover
- focus
- disabled

Selection:
- selected
- unselected
```

### Component Properties

```text
Label
Show Left Icon
Left Icon
Show Right Icon
Right Icon
Show Scrollbar
```

Cần chọn một kiểu viết thống nhất:

```text
default / hover / disabled
```

hoặc:

```text
Default / Hover / Disabled
```

Không nên trộn lẫn hai quy ước.

---

## 16. Câu hỏi ôn tập và đáp án gợi ý

### Câu 1: Mục đích chính của việc xây dựng Menu Component là gì?

Mục đích chính là tạo một thành phần điều hướng hoặc lựa chọn có thể tái sử dụng, chứa nhiều Menu Item và hỗ trợ đầy đủ các trạng thái như mặc định, di chuột, được chọn và vô hiệu hóa.

Menu Component giúp giao diện:

* Nhất quán.
* Dễ cập nhật.
* Dễ mở rộng.
* Dễ chuyển giao cho lập trình viên.
* Hạn chế việc tạo dropdown thủ công ở từng màn hình.

---

### Câu 2: Áp dụng Menu Component vào hệ thống thiết kế thực tế như thế nào?

Trước tiên, xây dựng một Menu Item cấp thấp với Auto Layout, token và component properties. Sau đó, sử dụng các instance của Menu Item để tạo Menu cha.

Menu cha cần:

* Surface và elevation token.
* Nhiều item lồng nhau.
* Selected state.
* Disabled state.
* Thanh cuộn tùy chọn.
* Exposed nested properties.

Từ component nền tảng này có thể tạo:

* Dropdown.
* Context menu.
* Account menu.
* Select menu.
* Filter menu.
* Navigation menu.

---

### Câu 3: Các bước quan trọng trong bài học là gì?

1. Tạo cấu trúc Menu Item.
2. Áp dụng Auto Layout.
3. Liên kết các design token.
4. Tạo thuộc tính cho nhãn và biểu tượng.
5. Tạo các trạng thái Default, Hover và Disabled.
6. Tạo biến thể Selected và Unselected.
7. Kiểm tra các tổ hợp variant không bị trùng.
8. Tạo nhiều instance Menu Item.
9. Ghép chúng thành Menu.
10. Thêm bề mặt, viền, bo góc và elevation.
11. Thêm thanh cuộn tùy chọn.
12. Expose thuộc tính của nested instance.

---

### Câu 4: Rủi ro hoặc hạn chế cần lưu ý là gì?

Rủi ro lớn nhất là tạo quá nhiều variant, dẫn đến component phức tạp và khó duy trì.

Ngoài ra còn có các vấn đề:

* Trùng tổ hợp variant.
* Viền giữa các item bị dày.
* Hover và selected khó phân biệt.
* Menu quá dài.
* Thuộc tính nested instance không được expose.
* Component không có trạng thái focus.
* Màu disabled có độ tương phản quá thấp.
* Biểu tượng bị khóa và không thể thay đổi.
* Menu không tương thích tốt với nhiều độ dài văn bản.

---

## 17. Checklist hoàn thiện Menu Component

### Menu Item

* [ ] Sử dụng Horizontal Auto Layout.
* [ ] Nhãn có thể thay đổi bằng Text Property.
* [ ] Biểu tượng trái có thể bật/tắt.
* [ ] Biểu tượng phải có thể bật/tắt.
* [ ] Biểu tượng có thể thay bằng Instance Swap.
* [ ] Có trạng thái Default.
* [ ] Có trạng thái Hover.
* [ ] Có trạng thái Selected.
* [ ] Có trạng thái Disabled.
* [ ] Có trạng thái Focus nếu sản phẩm hỗ trợ bàn phím.
* [ ] Không có variant trùng lặp.
* [ ] Sử dụng token thay vì raw value.

### Menu

* [ ] Sử dụng Vertical Auto Layout.
* [ ] Các item sử dụng instance của Menu Item.
* [ ] Có Surface Token.
* [ ] Có Border Token.
* [ ] Có Radius Token.
* [ ] Có Elevation Token.
* [ ] Có giới hạn chiều cao.
* [ ] Có thanh cuộn tùy chọn.
* [ ] Có thể bật/tắt scrollbar.
* [ ] Expose nested instance properties.
* [ ] Kiểm tra nội dung nhãn dài.
* [ ] Kiểm tra Dark Mode.
* [ ] Kiểm tra khả năng truy cập.

---

## 18. Tổng kết

Menu Component là một thành phần tổng hợp được xây dựng từ nhiều Menu Item có thể tái sử dụng.

Kiến trúc phù hợp:

```text
Design Tokens
      ↓
Menu Item
      ↓
Menu
      ↓
Dropdown / Context Menu / Select / Account Menu
```

Các nguyên tắc quan trọng:

1. Xây dựng Menu Item trước Menu.
2. Sử dụng Auto Layout để bố cục thích ứng.
3. Liên kết màu sắc và khoảng cách với design token.
4. Sử dụng Component Properties cho nhãn và biểu tượng.
5. Tách trạng thái tương tác và trạng thái lựa chọn.
6. Expose thuộc tính của các nested instances.
7. Kiểm soát số lượng variant.
8. Thiết kế đầy đủ trạng thái hover, selected, disabled và focus.
9. Thêm thanh cuộn khi danh sách dài.
10. Kiểm tra component trong nhiều kích thước màn hình và ngôn ngữ.

Menu được xây dựng tốt sẽ trở thành nền tảng cho nhiều thành phần điều hướng và lựa chọn khác trong hệ thống thiết kế.
