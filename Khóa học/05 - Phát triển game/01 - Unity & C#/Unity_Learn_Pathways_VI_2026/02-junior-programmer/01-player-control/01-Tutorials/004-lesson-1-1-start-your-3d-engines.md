# Bài 04 — Lesson 1.1: Start Your 3D Engines

Junior Programmer · Player Control · Tutorial · Unity 6.3

Chủ đề: Thiết lập môi trường 3D và lập trình điều khiển chuyển động của người chơi.

Tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

Nội dung thực hành dưới đây được tự biên soạn để rèn luyện kỹ năng Unity, không phải bản dịch nguyên văn các bước hướng dẫn chính thức.

## 1. Tổng quan bài học

Trong một trò chơi 3D, nhân vật cần có khả năng di chuyển theo các thao tác của người chơi. Khi nhấn một phím điều khiển, Unity phải xác định hướng di chuyển, tính toán khoảng cách cần dịch chuyển và cập nhật vị trí nhân vật trong thế giới 3D.

Ví dụ, trong trò chơi lái xe, người chơi có thể điều khiển phương tiện sang trái hoặc sang phải để tránh chướng ngại vật. Chuyển động phải đủ mượt và không thay đổi tốc độ bất thường khi trò chơi chạy ở các mức FPS khác nhau.

Bài học này tập trung vào ba vấn đề:

- Player Movement: Điều khiển vị trí đối tượng bằng bàn phím.
- Movement Speed: Thiết lập tốc độ di chuyển và giữ tốc độ tương đối ổn định.
- Movement Boundaries: Giới hạn phạm vi di chuyển để nhân vật không vượt ra khỏi khu vực cho phép.

Kết thúc bài học, người học sẽ xây dựng được một Scene 3D đơn giản với đối tượng có thể điều khiển.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Xác định các thành phần cần thiết để tạo một môi trường tương tác 3D.
2. Phân biệt `GameObject`, `Component`, `Transform` và `Scene`.
3. Viết script C# điều khiển đối tượng thông qua bàn phím.
4. Sử dụng `Time.deltaTime` để tính khoảng cách di chuyển theo thời gian.
5. Sử dụng `Mathf.Clamp()` để giới hạn phạm vi chuyển động.
6. Kiểm tra và phát hiện các lỗi liên quan đến Input, hướng di chuyển và tốc độ.

## 3. Kiến thức nền tảng

### 3.1. Scene, GameObject và Component

Unity tổ chức trò chơi dựa trên các đối tượng được đặt trong Scene.

| Thành phần   | Vai trò                                     | Ví dụ                       |
| ------------ | ------------------------------------------- | --------------------------- |
| `Scene`      | Không gian chứa môi trường trò chơi         | Đường đua 3D                |
| `GameObject` | Đối tượng tồn tại trong Scene               | Xe, mặt đất, vật cản        |
| `Component`  | Bổ sung dữ liệu hoặc hành vi cho GameObject | Collider, Renderer, Script  |
| `Transform`  | Lưu vị trí, góc xoay và tỉ lệ               | Vị trí xe tại `(0, 0.5, 0)` |
| `Inspector`  | Hiển thị và chỉnh sửa các thuộc tính        | Chỉnh tốc độ xe             |
| `Play Mode`  | Chạy thử trò chơi trong Editor              | Kiểm tra phím di chuyển     |

Mọi `GameObject` đều có một `Transform`. Vì vậy, có thể thay đổi vị trí của đối tượng thông qua `transform.position` hoặc `transform.Translate()`.

### 3.2. Hệ tọa độ 3D

Unity sử dụng hệ tọa độ gồm ba trục:

- X: Trái và phải.
- Y: Lên và xuống.
- Z: Tiến và lùi.

Minh họa hệ tọa độ 3D trong Unity (góc nhìn phối cảnh).

Ví dụ:

```
Vector3 direction = new Vector3(1f, 0f, 0f);
```

Vector trên biểu diễn hướng dọc trục X dương. Khi sử dụng làm hướng di chuyển, đối tượng sẽ đi về phía X dương nếu tốc độ lớn hơn 0.

### 3.3. Tốc độ di chuyển và FPS

FPS (Frames Per Second) là số khung hình trò chơi xử lý trong một giây.

Nếu dịch chuyển đối tượng một khoảng cố định trong mỗi khung hình, tốc độ thực tế sẽ thay đổi theo FPS.

Giả sử đối tượng di chuyển `0.1` đơn vị mỗi frame:

| FPS | Quãng đường trong 1 giây |
| --- | ------------------------ |
| 30  | 3 đơn vị                 |
| 60  | 6 đơn vị                 |
| 120 | 12 đơn vị                |

Như vậy, cùng một đoạn code nhưng đối tượng có thể di chuyển nhanh gấp nhiều lần trên thiết bị có FPS cao hơn.

Để giảm sự phụ thuộc này, sử dụng `Time.deltaTime`.

Công thức tính quãng đường:

\\[ \text{Quãng đường}=\text{Tốc độ}\times\text{Thời gian} \\]

Trong Unity:

```
float distance = speed * Time.deltaTime;
```

Ví dụ, nếu tốc độ là `4` đơn vị/giây và `Time.deltaTime = 0.02` giây thì quãng đường ở frame đó là:

\\[ 4 \times 0.02 = 0.08 \\]

`Time.deltaTime` biểu diễn thời gian giữa các lần cập nhật frame, giúp tốc độ di chuyển được tính theo thời gian thay vì số frame.

## 4. Cơ chế điều khiển nhân vật

Khi người chơi nhấn một phím, script sẽ đọc trạng thái input và chuyển dữ liệu đó thành hướng di chuyển.

\#chatgpt-mermaid-\_r_ll\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ll\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ll\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ll\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ll\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ll\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ll\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ll\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ll\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ll\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ll\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ll\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ll\_ p{margin:0;}#chatgpt-mermaid-\_r_ll\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ll\_ .label text,#chatgpt-mermaid-\_r_ll\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ .node rect,#chatgpt-mermaid-\_r_ll\_ .node circle,#chatgpt-mermaid-\_r_ll\_ .node ellipse,#chatgpt-mermaid-\_r_ll\_ .node polygon,#chatgpt-mermaid-\_r_ll\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .rough-node .label text,#chatgpt-mermaid-\_r_ll\_ .node .label text,#chatgpt-mermaid-\_r_ll\_ .image-shape .label,#chatgpt-mermaid-\_r_ll\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ll\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .rough-node .label,#chatgpt-mermaid-\_r_ll\_ .node .label,#chatgpt-mermaid-\_r_ll\_ .image-shape .label,#chatgpt-mermaid-\_r_ll\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ll\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ll\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ll\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ll\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ll\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ll\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ll\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ll\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ll\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ll\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ll\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ll\_ .icon-shape,#chatgpt-mermaid-\_r_ll\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ll\_ .icon-shape p,#chatgpt-mermaid-\_r_ll\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ll\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ll\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ll\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ll\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ll\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ll\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ll\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ll\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ll\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ll\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ll\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ll\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ll\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ll\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ll\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ll\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .node rect,#chatgpt-mermaid-\_r_ll\_ .node circle,#chatgpt-mermaid-\_r_ll\_ .node ellipse,#chatgpt-mermaid-\_r_ll\_ .node polygon,#chatgpt-mermaid-\_r_ll\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ll\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ll\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ll\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ll\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ll\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn phímĐọc InputXác định hướng di chuyểnNhân hướng với SpeedNhân với Time.deltaTimeCập nhật TransformGiới hạn vị trí bằng ClampHiển thị vị trí mới

Quá trình diễn ra liên tục trong `Update()` mỗi khi Unity xử lý một frame.

Ví dụ: Khi người chơi giữ phím `D`, giá trị điều khiển ngang bằng `1`. Script chuyển giá trị này thành hướng `(1, 0, 0)` và dịch chuyển đối tượng về phía X dương.

Khi thả phím, giá trị trở lại `0` và đối tượng ngừng di chuyển nếu không có cơ chế quán tính khác.

## 5. Thực hành: Xây dựng môi trường 3D

### 5.1. Tạo Scene

Mở Unity Editor với một dự án 3D, sau đó thực hiện:

1. Tạo hoặc mở một Scene.
2. Trong cửa sổ `Hierarchy`, nhấp chuột phải và chọn `3D Object → Plane`.
3. Đổi tên Plane thành `Ground`.
4. Tạo thêm một `Cube` và đặt tên `Player`.
5. Đặt vị trí `Player` tại `(0, 0.5, 0)` để Cube nằm phía trên mặt đất.

Cấu trúc Hierarchy minh họa:

```
SampleScene
├── Main Camera
├── Directional Light
├── Ground
└── Player
```

Chỉnh góc nhìn của `Main Camera` để quan sát được Player và mặt đất trong Game view.

### 5.2. Tạo script điều khiển

Trong cửa sổ Project:

1. Tạo thư mục `Scripts` nếu chưa có.
2. Nhấp chuột phải vào thư mục.
3. Chọn `Create → Scripting → MonoBehaviour Script` hoặc mục tạo C# Script tương ứng trong phiên bản Editor.
4. Đặt tên script là `SimpleMover`.
5. Mở script bằng trình soạn thảo C#.

Nhập đoạn code sau:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        // Doc truc dieu khien ngang
        float horizontal = Input.GetAxisRaw("Horizontal");

        // Tao vector huong di chuyen
        Vector3 direction = new Vector3(horizontal, 0f, 0f);

        // Di chuyen theo toc do va thoi gian
        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}
```

Lưu script và quay lại Unity.

### 5.3. Giải thích mã nguồn

`MonoBehaviour`

```
public class SimpleMover : MonoBehaviour
```

Cho phép script hoạt động như một Component gắn vào GameObject và sử dụng các phương thức vòng đời như `Update()`.

`SerializeField`

```
[SerializeField] private float speed = 4f;
```

Cho phép chỉnh giá trị `speed` trong Inspector dù biến được khai báo `private`.

`Update()`

```
void Update()
```

Unity gọi phương thức này một lần mỗi frame khi Component đang hoạt động.

`Input.GetAxisRaw()`

```
float horizontal = Input.GetAxisRaw("Horizontal");
```

Đọc giá trị điều khiển ngang từ hệ thống Input Manager cũ. Với thiết lập bàn phím mặc định phổ biến:

| Phím         | Giá trị |
| ------------ | ------- |
| `A` hoặc `←` | -1      |
| `D` hoặc `→` | 1       |
| Không nhấn   | 0       |

`Transform.Translate()`

```
transform.Translate(
    direction * speed * Time.deltaTime,
    Space.World
);
```

Dịch chuyển đối tượng theo vector đã tính toán.

`Space.World` xác định chuyển động theo hệ tọa độ thế giới, thay vì trục local của GameObject.

### 5.4. Gắn script và chạy thử

Chọn `Player` trong Hierarchy, kéo script `SimpleMover` từ cửa sổ Project vào Inspector.

Kiểm tra rằng Component đã xuất hiện và `Speed` đang bằng `4`.

Nhấn nút Play, sau đó thử giữ phím `A` hoặc `D` khi Game view đang nhận input.

Kết quả mong đợi: Player dịch chuyển theo hướng trái hoặc phải và dừng lại khi thả phím.

Lưu ý: Code trên sử dụng Input Manager cũ. Trong Unity 6.3, cần kiểm tra `Edit → Project Settings → Player → Other Settings → Active Input Handling` và chọn chế độ hỗ trợ Input Manager cũ, chẳng hạn `Both` nếu dự án đang sử dụng cả hai hệ thống.

## 6. Mở rộng điều khiển hai chiều

Khi đã điều khiển được Player theo trục X, có thể bổ sung chuyển động trên trục Z.

Hai trục này tạo thành một mặt phẳng di chuyển ngang trong không gian 3D.

### 6.1. Đọc thêm input theo chiều dọc

Bổ sung:

```
float horizontal = Input.GetAxisRaw("Horizontal");
float vertical = Input.GetAxisRaw("Vertical");

Vector3 direction = new Vector3(
    horizontal,
    0f,
    vertical
);
```

Nếu giữ đồng thời hai phím như `W` và `D`, vector hướng sẽ có dạng `(1, 0, 1)`.

Vector này có độ dài lớn hơn 1, khiến tốc độ di chuyển theo đường chéo cao hơn nếu sử dụng trực tiếp.

Để duy trì tốc độ nhất quán, sử dụng:

```
direction = Vector3.ClampMagnitude(direction, 1f);
```

Lệnh này giới hạn độ dài vector ở mức tối đa bằng 1, nhưng không làm tăng độ dài của vector nhỏ hơn 1.

### 6.2. Giới hạn phạm vi di chuyển

Trong trò chơi, Player không nên được phép đi ra ngoài khu vực chơi.

Có thể sử dụng `Mathf.Clamp()`:

```
float clampedX = Mathf.Clamp(
    transform.position.x,
    -5f,
    5f
);
```

Giá trị X sẽ được giữ trong đoạn từ `-5` đến `5`.

Điều này có nghĩa:

| Vị trí X ban đầu | Kết quả sau Clamp |
| ---------------- | ----------------- |
| -8               | -5                |
| -3               | -3                |
| 2                | 2                 |
| 7                | 5                 |

### 6.3. Mã hoàn chỉnh có giới hạn vị trí

Thay thế nội dung `SimpleMover.cs` bằng:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    [SerializeField] private float minX = -5f;
    [SerializeField] private float maxX = 5f;

    [SerializeField] private float minZ = -5f;
    [SerializeField] private float maxZ = 5f;

    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 direction = new Vector3(
            horizontal,
            0f,
            vertical
        );

        direction = Vector3.ClampMagnitude(direction, 1f);

        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );

        Vector3 position = transform.position;

        position.x = Mathf.Clamp(position.x, minX, maxX);
        position.z = Mathf.Clamp(position.z, minZ, maxZ);

        transform.position = position;
    }
}
```

Kết quả: Player có thể di chuyển trên mặt phẳng XZ, nhưng không vượt quá giới hạn đã cấu hình.

Các giá trị giới hạn có thể điều chỉnh trong Inspector để phù hợp với kích thước khu vực chơi.

## 7. Phân biệt Transform và Rigidbody

Unity hỗ trợ nhiều phương pháp điều khiển chuyển động. Hai cách phổ biến là thay đổi `Transform` trực tiếp và sử dụng hệ thống vật lý `Rigidbody`.

| Tiêu chí  | Transform                                  | Rigidbody                                |
| --------- | ------------------------------------------ | ---------------------------------------- |
| Cơ chế    | Thay đổi vị trí trực tiếp                  | Di chuyển qua hệ thống vật lý            |
| Trọng lực | Không tự áp dụng                           | Có thể sử dụng                           |
| Va chạm   | Không tự đảm bảo bị chặn bởi vật cản       | Được xử lý theo cấu hình vật lý          |
| Phù hợp   | Chuyển động đơn giản, không yêu cầu vật lý | Đối tượng cần va chạm và phản ứng vật lý |
| Ví dụ     | Vật trang trí di chuyển                    | Xe có tương tác vật lý                   |

Đoạn mã `SimpleMover` sử dụng `Transform`, vì vậy Player có thể đi xuyên qua một vật cản dù các GameObject có Collider.

Nếu muốn nhân vật bị ngăn lại khi chạm vật cản, cần xây dựng cơ chế phát hiện va chạm hoặc sử dụng cách điều khiển phù hợp với hệ thống vật lý.

Không nên tùy tiện kết hợp cập nhật vị trí bằng `Transform` với điều khiển `Rigidbody` động, vì có thể khiến kết quả va chạm không ổn định.

## 8. Kiểm thử và xác minh kết quả

Một chương trình hoạt động trong một lần thử chưa đủ để kết luận rằng cơ chế điều khiển đã chính xác.

Cần kiểm tra nhiều tình huống.

| Trường hợp     | Hành động                       | Kết quả mong đợi                              |
| -------------- | ------------------------------- | --------------------------------------------- |
| Di chuyển trái | Giữ `A`                         | Player đi về X âm                             |
| Di chuyển phải | Giữ `D`                         | Player đi về X dương                          |
| Di chuyển tiến | Giữ `W`                         | Player đi về Z dương                          |
| Di chuyển lùi  | Giữ `S`                         | Player đi về Z âm                             |
| Thả phím       | Ngừng nhấn                      | Player dừng                                   |
| Di chuyển chéo | Giữ `W + D`                     | Player đi chéo, không tăng tốc bất thường     |
| Chạm biên      | Giữ phím về phía ngoài giới hạn | Player không vượt quá giới hạn                |
| Thay đổi Speed | Tăng từ 4 lên 8                 | Player di chuyển nhanh hơn khi giữ cùng input |

### 8.1. Kiểm tra ảnh hưởng của FPS

Để kiểm tra chuyển động theo thời gian, có thể sử dụng công cụ đo FPS như Stats hoặc Profiler, đồng thời thử trò chơi ở các điều kiện hiệu năng khác nhau.

Hãy kiểm tra quãng đường Player di chuyển trong cùng khoảng thời gian khi giữ một hướng cố định.

Lưu ý: FPS trong Editor còn chịu ảnh hưởng từ VSync, cấu hình phần cứng và các thiết lập khác. Việc thay đổi một tham số giới hạn FPS không đảm bảo trò chơi sẽ chạy chính xác ở mức FPS đó.

### 8.2. Ghi lại kết quả

Sau mỗi lần kiểm thử, ghi lại ba thông tin:

Kết quả mong đợi → Kết quả thực tế → Nguyên nhân hoặc nhận xét.

Ví dụ:

| Nội dung   | Ghi nhận                                |
| ---------- | --------------------------------------- |
| Thử nghiệm | Giữ `D` tại giới hạn X = 5              |
| Mong đợi   | Player không vượt X = 5                 |
| Thực tế    | Player dừng tại giới hạn                |
| Nhận xét   | `Mathf.Clamp()` giới hạn giá trị vị trí |

Có thể chụp Game view hoặc Inspector để làm minh chứng cho kết quả.

## 9. Lỗi thường gặp và cách khắc phục

### 9.1. Player không di chuyển

Nguyên nhân có thể xảy ra:

- Script chưa được gắn vào Player.
- Component Script bị vô hiệu hóa.
- Biến `speed` bằng 0.
- Game view chưa nhận input.
- Input Manager cũ không được kích hoạt.

Cách kiểm tra: Chọn Player và xác minh script trong Inspector, sau đó quan sát Console để tìm lỗi.

### 9.2. Tốc độ thay đổi theo FPS

Nguyên nhân: Không nhân quãng đường di chuyển với `Time.deltaTime`.

Ví dụ chưa phù hợp:

```
transform.Translate(direction * speed);
```

Cách sửa:

```
transform.Translate(direction * speed * Time.deltaTime);
```

### 9.3. Nhân vật di chuyển sai hướng

Nguyên nhân: Nhầm hệ tọa độ local và world.

Nếu sử dụng `Space.Self`, chuyển động chịu ảnh hưởng từ góc xoay của chính đối tượng.

Nếu sử dụng `Space.World`, chuyển động tuân theo trục tọa độ thế giới.

Cần xác định rõ phương pháp phù hợp với cơ chế trò chơi.

### 9.4. Player đi xuyên vật cản

Nguyên nhân: Script dịch chuyển trực tiếp bằng `Transform` mà không có cơ chế ngăn chuyển động theo va chạm vật lý.

Cách xử lý: Xem xét phương pháp di chuyển bằng `Rigidbody` hoặc cơ chế kiểm tra va chạm phù hợp.

### 9.5. Input Action không hoạt động

Nếu sử dụng Input System mới, cần kiểm tra Input Actions, Action Map, binding và trạng thái kích hoạt của các action.

Không thể thay trực tiếp `Input.GetAxisRaw()` bằng tên một Input Action mà không xây dựng cách đọc input tương ứng.

## 10. Bài tập thực hành

### Bài tập 1 — Điều chỉnh tốc độ

Yêu cầu: Tạo một Player có thể di chuyển ngang và thay đổi giá trị `speed` trong Inspector.

Thực hiện thử nghiệm với các giá trị `2`, `4` và `8`.

Ghi nhận sự thay đổi tốc độ và giải thích vai trò của `SerializeField`.

### Bài tập 2 — Di chuyển trong vùng giới hạn

Yêu cầu: Cho phép Player di chuyển trên mặt phẳng XZ, với giới hạn:

\\[ -5 \leq x \leq 5 \\]

\\[ -5 \leq z \leq 5 \\]

Kiểm tra xem Player có thể vượt khỏi khu vực cho phép hay không.

### Bài tập 3 — Nâng cao: Tạo đường đua tránh vật cản

Xây dựng một môi trường gồm:

- Một đối tượng Player.
- Một mặt đất.
- Một số vật cản bằng Cube.
- Cơ chế điều khiển trái/phải.
- Giới hạn phạm vi di chuyển.

Trong phiên bản cơ bản, vật cản chỉ đóng vai trò bố trí môi trường. Phần phát hiện và ngăn va chạm được xem là yêu cầu mở rộng riêng.

Mục tiêu là xây dựng một nguyên mẫu tương tác 3D có thể kiểm tra trong Play Mode.

## 11. Checklist hoàn thành

Tiến độ thực hành

0/9

Tạo được Scene với Player và Ground.

Phân biệt được Scene, GameObject, Component và Transform.

Gắn và chạy được script SimpleMover.

Giải thích được vai trò của Update() và Time.deltaTime.

Điều khiển được Player theo hai trục X và Z.

Giới hạn được phạm vi di chuyển bằng Mathf.Clamp().

Kiểm tra được chuyển động khi nhấn, giữ và thả phím.

Ghi lại ít nhất một kết quả kiểm thử.

Phân tích được một lỗi điều khiển thường gặp.

## 12. Tổng kết kiến thức

Quá trình lập trình điều khiển nhân vật có thể được mô tả bằng công thức:

\\[ \text{Chuyển động}=\text{Hướng}\times\text{Tốc độ}\times\text{Thời gian} \\]

Các thành phần quan trọng nhất của bài học gồm:

| Thành phần                 | Ý nghĩa                                       |
| -------------------------- | --------------------------------------------- |
| `Input.GetAxisRaw()`       | Đọc tín hiệu điều khiển từ Input Manager cũ   |
| `Vector3`                  | Biểu diễn hướng và vị trí trong không gian 3D |
| `Update()`                 | Cập nhật logic theo từng frame                |
| `Time.deltaTime`           | Tính chuyển động theo thời gian               |
| `Transform.Translate()`    | Dịch chuyển GameObject                        |
| `Space.World`              | Di chuyển theo hệ tọa độ thế giới             |
| `Mathf.Clamp()`            | Giới hạn giá trị trong một khoảng             |
| `Vector3.ClampMagnitude()` | Giới hạn độ dài vector                        |

Kết quả quan trọng nhất: Xây dựng được một cơ chế điều khiển Player đơn giản, có tốc độ tính theo thời gian, chuyển động hai chiều và giới hạn vị trí trong môi trường Unity 3D.

## 13. Câu hỏi ôn tập trắc nghiệm

Câu 1. Tại sao nên nhân tốc độ di chuyển với Time.deltaTime?

A. Để tăng FPS của trò chơi

B. Để tự động kích hoạt va chạm

C. Để tính chuyển động theo thời gian thực tế giữa các frame

D. Để thay đổi góc quay Camera

Câu 2. Khi Input.GetAxisRaw("Horizontal") trả về -1, điều gì xảy ra với script di chuyển trên trục X?

A. Đối tượng di chuyển theo X âm khi speed dương

B. Đối tượng luôn di chuyển theo Y âm

C. Đối tượng tự động dừng

D. Đối tượng tự động xoay 90 độ

Câu 3. Khi Player giữ đồng thời W và D, phương pháp nào phù hợp để tránh tốc độ đường chéo cao bất thường?

A. Tăng Speed lên gấp đôi

B. Bỏ Time.deltaTime

C. Không đọc trục Vertical

D. Dùng Vector3.ClampMagnitude(direction, 1f)

Câu 4. Chức năng chính của Mathf.Clamp() trong bài là gì?

A. Tạo lực tác động lên đối tượng

B. Giữ một giá trị trong phạm vi giới hạn

C. Đọc dữ liệu từ bàn phím

D. Tạo Collider tự động

Câu 5. Tại sao Player điều khiển bằng Transform có thể đi xuyên vật cản?

A. Vì Update() không chạy khi có Collider

B. Vì tốc độ nhỏ hơn 1

C. Vì dịch chuyển Transform trực tiếp không tự đảm bảo cơ chế ngăn va chạm

D. Vì Space.World vô hiệu hóa Collider

Chấm điểmLàm lại

Ghi chú Unity 6.3: Các tên menu và thiết lập Input có thể khác nhau theo phiên bản Editor hoặc package được sử dụng. Khi thực hiện dự án chính thức, nên đối chiếu với [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com) để kiểm tra tài nguyên và các bước riêng của bài học.