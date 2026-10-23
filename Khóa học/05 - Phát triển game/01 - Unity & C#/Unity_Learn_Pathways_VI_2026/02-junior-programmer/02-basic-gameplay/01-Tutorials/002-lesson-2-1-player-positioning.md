# Bài 02 — Lesson 2.1: Player Positioning

Lộ trình: Junior Programmer Học phần: Basic Gameplay Loại bài: Tutorial — Hướng dẫn thực hành Phiên bản: Unity 6.3 Thời lượng tham khảo: 60 phút Bài học: [Unity Learn — Lesson 2.1: Player Positioning](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/lesson-2-1-player-positioning?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong phát triển trò chơi, việc điều khiển vị trí nhân vật (Player Positioning) là một trong những cơ chế gameplay cơ bản nhất.

Ở bài học này, chúng ta sẽ xây dựng hệ thống điều khiển nhân vật trong một trò chơi 3D có góc nhìn từ trên xuống (top-down game).

Người chơi có nhiệm vụ di chuyển sang trái hoặc phải để chuẩn bị tương tác với những con vật đang tiến về phía mình.

[Lesson 2.1 - Player Positioning - Unity Learn](https://images.openai.com/static-rsc-4/cMqb5vDpS3drQx4ZH9hSX5qR86DJqJSnAqHh67-q1IdOWZqLdZS7kJ5CPgrQ95i7NBIvTHuRzGkYaX4JVOynjYNDz7O1O5CWG1JaPEITSg9BMG0PkLyGl_bNxG9Ar59vTP2scehFLj-FfndptTOWXJ5fI2Yc5bjnvlPQsIt6NnM?purpose=inline)

[learn.unity.com](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/lesson-2-1-player-positioning?utm_source=chatgpt.com)

Hệ thống cần đáp ứng hai yêu cầu:

1. Người chơi có thể sử dụng phím mũi tên trái và phải để di chuyển nhân vật.
2. Nhân vật không được phép di chuyển ra ngoài giới hạn khu vực chơi.

Để thực hiện, chúng ta sẽ kết hợp `Input System`, `Transform`, biến tốc độ và câu lệnh điều kiện `if`.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

- Tạo dự án Unity và bố trí nhân vật, động vật cùng vật thể thức ăn trong `Scene`.
- Điều chỉnh vị trí và tỷ lệ kích thước của `GameObject` bằng `Transform`.
- Sử dụng `InputAction` để đọc dữ liệu điều khiển từ bàn phím.
- Lập trình di chuyển nhân vật theo trục X bằng C#.
- Áp dụng `Time.deltaTime` để điều chỉnh chuyển động theo thời gian.
- Sử dụng câu lệnh `if` cùng toán tử so sánh `>` và `<escape><</escape>` để giới hạn vị trí nhân vật.
- Kiểm thử và xử lý những lỗi thường gặp khi lập trình điều khiển.

## 3. Kiến thức nền tảng

### 3.1. Vị trí của GameObject trong Unity

Mọi `GameObject` đều có một `Transform Component`, dùng để biểu diễn vị trí, góc quay và tỷ lệ kích thước của đối tượng.

| Thuộc tính | Vai trò                    | Ví dụ        |
| ---------- | -------------------------- | ------------ |
| `Position` | Vị trí trong không gian 3D | `(0, 0, 0)`  |
| `Rotation` | Góc quay của đối tượng     | `(0, 90, 0)` |
| `Scale`    | Tỷ lệ kích thước           | `(1, 1, 1)`  |

Trong không gian 3D của Unity:

- Trục X: Hướng trái và phải.
- Trục Y: Hướng lên và xuống.
- Trục Z: Hướng trước và sau.

Hệ trục tọa độ 3D — chuyển động ngang trong bài được thực hiện theo trục X.

Ví dụ, khi vị trí nhân vật chuyển từ `(0, 0, 0)` sang `(5, 0, 0)`, nhân vật đã dịch chuyển 5 đơn vị theo chiều dương của trục X.

### 3.2. Đọc dữ liệu điều khiển bằng Input System

`Input System` là hệ thống giúp Unity tiếp nhận dữ liệu từ những thiết bị điều khiển như bàn phím, tay cầm hoặc chuột.

Trong bài này, dữ liệu được biểu diễn bằng một `Vector2`.

| Phím được nhấn | `moveInput.x` | Kết quả             |
| -------------- | ------------- | ------------------- |
| Mũi tên trái   | -1            | Di chuyển sang trái |
| Không nhấn     | 0             | Đứng yên            |
| Mũi tên phải   | 1             | Di chuyển sang phải |

Giá trị `moveInput.y` chưa được sử dụng trong bài học vì nhân vật chỉ được phép di chuyển ngang.

### 3.3. Cơ chế di chuyển

Mỗi khung hình, Unity thực hiện quy trình:

\#chatgpt-mermaid-\_r_r4\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_r4\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_r4\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_r4\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_r4\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_r4\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_r4\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_r4\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_r4\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_r4\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r4\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r4\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_r4\_ p{margin:0;}#chatgpt-mermaid-\_r_r4\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_r4\_ .label text,#chatgpt-mermaid-\_r_r4\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ .node rect,#chatgpt-mermaid-\_r_r4\_ .node circle,#chatgpt-mermaid-\_r_r4\_ .node ellipse,#chatgpt-mermaid-\_r_r4\_ .node polygon,#chatgpt-mermaid-\_r_r4\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .rough-node .label text,#chatgpt-mermaid-\_r_r4\_ .node .label text,#chatgpt-mermaid-\_r_r4\_ .image-shape .label,#chatgpt-mermaid-\_r_r4\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_r4\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .rough-node .label,#chatgpt-mermaid-\_r_r4\_ .node .label,#chatgpt-mermaid-\_r_r4\_ .image-shape .label,#chatgpt-mermaid-\_r_r4\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_r4\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_r4\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r4\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r4\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_r4\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_r4\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r4\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r4\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_r4\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_r4\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r4\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_r4\_ .icon-shape,#chatgpt-mermaid-\_r_r4\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_r4\_ .icon-shape p,#chatgpt-mermaid-\_r_r4\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_r4\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_r4\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r4\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_r4\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_r4\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_r4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_r4\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_r4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_r4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r4\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_r4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r4\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_r4\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_r4\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_r4\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_r4\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .node rect,#chatgpt-mermaid-\_r_r4\_ .node circle,#chatgpt-mermaid-\_r_r4\_ .node ellipse,#chatgpt-mermaid-\_r_r4\_ .node polygon,#chatgpt-mermaid-\_r_r4\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_r4\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_r4\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_r4\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_r4\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r4\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn phímInput SystemInputActionĐọc Vector2Tính toán chuyển động theotrục XCập nhật TransformVượt giới hạn?Đưa nhân vật về vị trí biênGiữ vị trí mớiHiển thị khung hìnhCóKhông

Như vậy, chuyển động không chỉ đơn giản là thay đổi tọa độ. Hệ thống cần đọc đầu vào, xác định hướng, tính khoảng dịch chuyển và kiểm tra giới hạn.

## 4. Thực hành xây dựng Prototype 2

### 4.1. Tạo dự án và nhập tài nguyên

Bước 1: Tạo dự án

Mở `Unity Hub`, chọn `New Project` và tạo một dự án 3D với tên:

`Prototype 2`

Chọn phiên bản Unity tương thích với bài học.

Bước 2: Nhập tài nguyên

Tải [Prototype 2 Starter Files từ trang bài học](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/lesson-2-1-player-positioning?version=6.3\&utm_source=chatgpt.com).

Giải nén và nhập tệp `.unitypackage` vào dự án thông qua:

`Assets → Import Package → Custom Package`

Bước 3: Chuẩn bị Scene

Mở scene `Prototype 2` trong cửa sổ `Project`. Có thể xóa `SampleScene` nếu không còn sử dụng.

### 4.2. Bố trí nhân vật, động vật và thức ăn

Thêm các đối tượng cần thiết vào `Hierarchy`:

| Đối tượng | Số lượng | Vai trò                           |
| --------- | -------- | --------------------------------- |
| Human     | 1        | Nhân vật do người chơi điều khiển |
| Animal    | 3        | Các động vật trong trò chơi       |
| Food      | 1        | Vật thể thức ăn                   |
| Ground    | 1        | Mặt đất của khu vực chơi          |

Đổi tên nhân vật thành `Player`.

Ví dụ cấu trúc scene:

```
Prototype 2
├── Main Camera
├── Directional Light
├── Ground
├── Player
├── Animal_01
├── Animal_02
├── Animal_03
└── Food
```

Sử dụng các công cụ trong Unity Editor:

- `Move Tool (W)` để thay đổi vị trí.
- `Rotate Tool (E)` để xoay.
- `Scale Tool (R)` để thay đổi kích thước.

Đối với thức ăn, cần điều chỉnh `Scale` để vật thể đủ lớn và có thể quan sát được từ camera trên cao.

Khi muốn thay đổi kích thước đồng đều, hãy giữ tỷ lệ giữa các trục X, Y và Z.

### 4.3. Cấu hình Input System

Trước khi lập trình, cần đảm bảo Unity có thể sử dụng `Input System` mới.

Mở:

`Edit → Project Settings → Player`

Tìm thuộc tính `Active Input Handling`, thường nằm trong phần `Other Settings → Configuration`.

Chọn:

`Both`

Sau đó áp dụng thay đổi và khởi động lại Unity Editor nếu được yêu cầu.

Thiết lập này cho phép dự án hỗ trợ đồng thời hệ thống nhập liệu cũ và mới. Phần mã của bài sẽ sử dụng `UnityEngine.InputSystem`.

### 4.4. Tạo PlayerController

Trong thư mục `Assets`, tạo thư mục `Scripts`, sau đó tạo một script C#:

`PlayerController.cs`

Gắn script vào `Player GameObject`.

Thêm đoạn mã:

```

using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    public InputAction moveAction;
    public Vector2 moveInput;

    void OnEnable()
    {
        moveAction.Enable();
    }

    void OnDisable()
    {
        moveAction.Disable();
    }

    void Update()
    {
        moveInput = moveAction.ReadValue<Vector2>();
    }
}

```

Giải thích:

`InputAction moveAction` đại diện cho hành động điều khiển được cấu hình trong Inspector.

`Vector2 moveInput` lưu dữ liệu đầu vào theo hai trục X và Y.

`OnEnable()` kích hoạt `InputAction` khi component được bật, trong khi `OnDisable()` tắt hành động đó khi component bị vô hiệu hóa.

`Update()` được Unity gọi mỗi khung hình và cập nhật dữ liệu điều khiển liên tục.

### 4.5. Gán các phím điều khiển trong Inspector

Chọn `Player`, tìm component `PlayerController`, sau đó mở rộng thuộc tính `Move Action`.

Thực hiện:

1. Thêm một `Binding`.
2. Chọn kiểu `Up/Down/Left/Right Composite` (2D Vector).
3. Thiết lập `Left` thành `<Keyboard>/leftArrow`.
4. Thiết lập `Right` thành `<Keyboard>/rightArrow`.

Cấu hình hành động đọc giá trị `Vector2`. Có thể để các hướng Up và Down chưa gán trong bài này.

Chạy `Play Mode`, chọn `Player` trong Hierarchy và quan sát `Move Input` trong Inspector.

Kết quả mong đợi là `-1` khi nhấn trái, `1` khi nhấn phải và `0` khi không nhấn.

### 4.6. Lập trình di chuyển ngang

Thêm biến tốc độ:

```
public float speed = 10.0f;
```

Trong `Update()`, sau khi đọc đầu vào, thêm:

```
transform.Translate(
    Vector3.right * moveInput.x * speed * Time.deltaTime
);
```

Ý nghĩa từng thành phần:

| Thành phần              | Giải thích                            |
| ----------------------- | ------------------------------------- |
| `transform.Translate()` | Dịch chuyển GameObject                |
| `Vector3.right`         | Vector đơn vị theo chiều dương trục X |
| `moveInput.x`           | Hướng di chuyển từ bàn phím           |
| `speed`                 | Tốc độ di chuyển                      |
| `Time.deltaTime`        | Thời gian giữa hai khung hình         |

Công thức tính khoảng dịch chuyển:

\\[ \Delta x = v \times d \times \Delta t \\]

Trong đó:

- \\(v\\): tốc độ di chuyển, đơn vị Unity/giây.
- \\(d\\): hướng di chuyển, thường bằng -1, 0 hoặc 1.
- \\(\Delta t\\): thời gian giữa hai khung hình.
- \\(\Delta x\\): độ dịch chuyển trên trục X.

Ví dụ, với tốc độ 10 đơn vị/giây và khoảng thời gian mỗi khung hình xấp xỉ 0,02 giây:

\\[ \Delta x = 10 \times 1 \times 0.02 = 0.2 \\]

Nhân vật dịch chuyển khoảng 0,2 đơn vị trong khung hình đó khi đang nhấn phím phải.

Tại sao phải dùng `Time.deltaTime`?

Nếu chỉ dịch chuyển một khoảng cố định mỗi khung hình, máy tính có FPS cao sẽ khiến nhân vật di chuyển nhanh hơn.

Nhân với `Time.deltaTime` giúp tốc độ di chuyển ít phụ thuộc vào FPS hơn.

### 4.7. Giới hạn khu vực di chuyển

Nếu không giới hạn vị trí, người chơi có thể giữ phím trái hoặc phải để đưa nhân vật ra khỏi khu vực chơi.

Chúng ta sử dụng biến:

```
public float xRange = 10.0f;
```

Vùng di chuyển được xác định bởi:

\\[ -xRange \leq x \leq xRange \\]

Khi `xRange = 10`, tọa độ X hợp lệ nằm trong đoạn từ -10 đến 10.

Minh họa giới hạn tọa độ X của Player. Giới hạn áp dụng cho vị trí Transform, không nhất thiết cho toàn bộ kích thước mô hình.

Thêm logic kiểm tra điều kiện:

```
if (transform.position.x < -xRange)
{
    transform.position = new Vector3(
        -xRange,
        transform.position.y,
        transform.position.z
    );
}

if (transform.position.x > xRange)
{
    transform.position = new Vector3(
        xRange,
        transform.position.y,
        transform.position.z
    );
}
```

Điều kiện đầu tiên đưa nhân vật về biên trái nếu tọa độ X nhỏ hơn `-xRange`.

Điều kiện thứ hai đưa nhân vật về biên phải nếu tọa độ X lớn hơn `xRange`.

Khi cập nhật tọa độ X, các giá trị Y và Z được giữ nguyên.

## 5. Hoàn thiện PlayerController.cs

Sau khi kết hợp các thành phần, chúng ta có một script hoàn chỉnh.

```

using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    // Input System
    public InputAction moveAction;
    public Vector2 moveInput;

    // Movement settings
    public float speed = 10.0f;
    public float xRange = 10.0f;

    void OnEnable()
    {
        moveAction.Enable();
    }

    void OnDisable()
    {
        moveAction.Disable();
    }

    void Update()
    {
        // Read movement input
        moveInput = moveAction.ReadValue<Vector2>();

        // Move horizontally
        transform.Translate(
            Vector3.right * moveInput.x * speed * Time.deltaTime
        );

        // Restrict movement to play area
        if (transform.position.x < -xRange)
        {
            transform.position = new Vector3(
                -xRange,
                transform.position.y,
                transform.position.z
            );
        }

        if (transform.position.x > xRange)
        {
            transform.position = new Vector3(
                xRange,
                transform.position.y,
                transform.position.z
            );
        }
    }
}

```

Trong phiên bản thực hành này, việc kiểm tra giới hạn được thực hiện sau khi di chuyển, giúp đưa vị trí nhân vật trở lại phạm vi hợp lệ ngay trong lần cập nhật đó.

Bài học sử dụng cách di chuyển bằng `Transform`, phù hợp với prototype cơ bản chưa yêu cầu mô phỏng vật lý phức tạp.

## 6. Kiểm thử và xử lý lỗi

### 6.1. Kiểm thử chức năng

| Trường hợp | Thao tác          | Kết quả mong đợi                 |
| ---------- | ----------------- | -------------------------------- |
| TC01       | Nhấn mũi tên trái | Nhân vật di chuyển sang trái     |
| TC02       | Nhấn mũi tên phải | Nhân vật di chuyển sang phải     |
| TC03       | Thả toàn bộ phím  | Nhân vật ngừng di chuyển         |
| TC04       | Giữ mũi tên trái  | Tọa độ X không nhỏ hơn `-xRange` |
| TC05       | Giữ mũi tên phải  | Tọa độ X không lớn hơn `xRange`  |
| TC06       | Thay đổi `speed`  | Tốc độ di chuyển thay đổi        |

### 6.2. Những lỗi thường gặp

| Hiện tượng                                    | Nguyên nhân có thể                                     | Cách xử lý                                      |
| --------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------- |
| Nhân vật không di chuyển                      | Chưa gán `InputAction`                                 | Kiểm tra `Move Action` trong Inspector          |
| Xuất hiện lỗi `InputAction`                   | Thiếu namespace                                        | Thêm `using UnityEngine.InputSystem;`           |
| Nhấn phím không nhận                          | Input System chưa cấu hình                             | Kiểm tra `Active Input Handling` và binding     |
| Nhân vật đi sai hướng                         | Hướng local của mô hình bị xoay                        | Kiểm tra `Transform Rotation`                   |
| Nhân vật vượt biên                            | Thiếu điều kiện kiểm tra hoặc sai giá trị `xRange`     | Kiểm tra hai điều kiện `if`                     |
| Nhân vật không chạy nhanh hơn khi tăng tốc độ | Thay đổi giá trị không đúng hoặc script khác can thiệp | Quan sát `speed` và `Transform` trong Play Mode |

Khi gặp lỗi, nên xử lý theo thứ tự: tái hiện lỗi, đọc `Console`, quan sát biến trong `Inspector`, thay đổi một yếu tố, sau đó chạy thử lại.

Lưu ý rằng Game view cần có focus để nhận dữ liệu bàn phím khi kiểm thử.

## 7. Bài tập thực hành

### Bài tập 1 — Điều chỉnh tốc độ

Thay đổi biến `speed` lần lượt thành 5, 10 và 15.

Quan sát sự thay đổi trong chuyển động và giải thích tại sao tốc độ tăng khi giá trị biến lớn hơn.

### Bài tập 2 — Giới hạn khu vực

Thay đổi `xRange` từ 10 thành 7.

Dự đoán kết quả trước khi chạy, sau đó nhấn giữ mũi tên trái và phải để kiểm tra hai biên.

### Bài tập 3 — Nâng cấp điều khiển

Mở rộng `Move Action` để nhận thêm phím A và D với chức năng tương đương phím mũi tên trái và phải.

Yêu cầu giữ nguyên cơ chế giới hạn vị trí.

## 8. Câu hỏi ôn tập trắc nghiệm

Câu 1. Thuộc tính nào của Transform được sử dụng để xác định vị trí của nhân vật?

A. Scale

B. Rotation

C. Position

D. Material

Câu 2. Khi người chơi nhấn phím mũi tên trái, giá trị moveInput.x thường nhận được là bao nhiêu?

A. -1

B. 0

C. 1

D. 10

Câu 3. Tại sao cần sử dụng Time.deltaTime khi tính khoảng dịch chuyển?

A. Để tăng FPS của trò chơi

B. Để tự tạo giới hạn di chuyển

C. Để dừng hoạt ảnh nhân vật

D. Để tốc độ ít phụ thuộc vào số khung hình mỗi giây

Câu 4. Nếu xRange = 10 và tọa độ X của nhân vật bằng 12, logic giới hạn bên phải cần làm gì?

A. Đưa X về -10

B. Đưa X về 10

C. Đưa X về 0

D. Tăng tốc độ di chuyển

Câu 5. Cách nào phù hợp nhất để đọc Vector2 từ một InputAction đã được kích hoạt?

A. moveAction.ReadValue\<Vector2>()

B. transform.position.ReadValue()

C. InputAction.Translate()

D. moveInput.Enable()

Chấm điểmLàm lại

## 9. Checklist hoàn thành

Tiến độ thực hành

0/8

Tạo và mở được dự án Prototype 2 trong Unity.

Bố trí Player, Animal và Food trong Scene.

Cấu hình Input System và gán phím điều khiển.

Tạo và gắn PlayerController.cs vào Player.

Đọc được Vector2 từ InputAction.

Di chuyển Player theo trục X bằng Time.deltaTime.

Giới hạn tọa độ X bằng câu lệnh if.

Kiểm thử được các tình huống điều khiển và biên.

## 10. Tổng kết

Bài học Player Positioning giới thiệu quy trình xây dựng hệ thống điều khiển nhân vật cơ bản trong Unity.

Người học đã thực hành cách nhận dữ liệu bàn phím bằng `InputAction`, đọc vector điều khiển, thay đổi vị trí nhân vật theo thời gian và sử dụng câu lệnh `if` để giữ nhân vật trong giới hạn chơi.

Ba nguyên tắc quan trọng nhất là:

1. Input: Nhận chính xác dữ liệu điều khiển của người chơi.
2. Movement: Chuyển dữ liệu đầu vào thành chuyển động thông qua `Transform`.
3. Boundary: Kiểm soát vị trí bằng điều kiện để đảm bảo nhân vật không vượt khỏi khu vực hợp lệ.

Kết quả hoàn thành là một nhân vật có thể di chuyển trái/phải bằng bàn phím và dừng tại hai biên của khu vực chơi. Đây là nền tảng để xây dựng những cơ chế gameplay tương tác phức tạp hơn.

Tham khảo: [Unity Learn — Lesson 2.1: Player Positioning (Unity 6.3)](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/lesson-2-1-player-positioning?version=6.3\&utm_source=chatgpt.com). Bài giảng tiếng Việt được biên soạn độc lập; mã thực hành có điều chỉnh nhỏ về vòng đời InputAction và thứ tự kiểm tra giới hạn.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn
