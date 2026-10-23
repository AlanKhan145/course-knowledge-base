# Bài 05 — Lesson 1.2: Pedal to the Metal

Junior Programmer · Player Control · Tutorial · Unity 6.3

Chủ đề: Lập trình điều khiển di chuyển, tốc độ và vị trí của GameObject trong môi trường 3D.

Tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

Nội dung tự biên soạn phục vụ học tập và thực hành, không phải bản dịch chính thức của Unity.

## 1. Tổng quan bài học

Trong một trò chơi 3D, nhân vật hoặc phương tiện cần có khả năng di chuyển dựa trên các quy tắc được lập trình. Ví dụ, một chiếc xe có thể tiến về phía trước, lùi lại hoặc thay đổi vị trí khi người chơi nhấn phím.

Unity cho phép điều khiển hành vi này thông qua C# Script và các Component của GameObject.

Trong bài học này, chúng ta sẽ xây dựng một hệ thống di chuyển đơn giản, sử dụng:

- `Transform` để quản lý vị trí và hướng của GameObject.
- `Input.GetAxisRaw()` để đọc tín hiệu bàn phím thông qua Input Manager cũ.
- `Time.deltaTime` để điều chỉnh khoảng cách di chuyển theo thời gian.
- `SerializeField` để thay đổi tốc độ trực tiếp trong Inspector.
- `Mathf.Clamp()` để giới hạn phạm vi di chuyển.

Kết quả mong đợi: Một GameObject có thể di chuyển bằng bàn phím với tốc độ được cấu hình, dừng khi thả phím và không vượt ra ngoài phạm vi xác định.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích được mối quan hệ giữa tốc độ, thời gian và quãng đường di chuyển.
2. Sử dụng C# Script để thay đổi vị trí GameObject.
3. Đọc tín hiệu điều khiển từ bàn phím và chuyển thành hướng di chuyển.
4. Áp dụng `Time.deltaTime` để hạn chế sự phụ thuộc của tốc độ vào FPS.
5. Cấu hình tốc độ và giới hạn vị trí bằng Inspector.
6. Kiểm thử và sửa một số lỗi phổ biến khi lập trình di chuyển.

## 3. Kiến thức cốt lõi

### 3.1. GameObject và Transform

Trong Unity, `GameObject` là đối tượng cơ bản được đặt trong Scene. Mỗi GameObject luôn có một `Transform` Component.

`Transform` quản lý ba thuộc tính:

| Thuộc tính | Ý nghĩa                               |
| ---------- | ------------------------------------- |
| `Position` | Vị trí của đối tượng trong không gian |
| `Rotation` | Góc xoay và hướng của đối tượng       |
| `Scale`    | Kích thước tương đối của đối tượng    |

Trong môi trường 3D, vị trí thường được biểu diễn bằng `Vector3`, gồm ba thành phần X, Y và Z.

Hệ tọa độ 3D của Unity: X (đỏ), Y (xanh lá), Z (xanh dương).

Theo quy ước thông dụng trong Unity:

- Trục X: Trái và phải.
- Trục Y: Lên và xuống.
- Trục Z: Tiến và lùi trong không gian 3D.

Ví dụ:

```
Vector3 direction = new Vector3(1f, 0f, 0f);
```

Vector này biểu diễn hướng dọc theo trục X dương.

### 3.2. Di chuyển bằng Transform.Translate()

Phương thức `Transform.Translate()` cho phép di chuyển một GameObject theo một vector.

Ví dụ:

```
transform.Translate(Vector3.forward);
```

Lệnh trên di chuyển GameObject một đơn vị theo hướng Z dương trong hệ tọa độ local theo mặc định.

Để xác định rõ không gian di chuyển, có thể dùng:

```
transform.Translate(
    Vector3.forward,
    Space.World
);
```

Sự khác biệt:

| Không gian    | Đặc điểm                                     |
| ------------- | -------------------------------------------- |
| `Space.Self`  | Di chuyển dựa trên hướng local của đối tượng |
| `Space.World` | Di chuyển dựa trên hệ trục tọa độ thế giới   |

Ví dụ, khi một chiếc xe đã xoay 90 độ, `Vector3.forward` trong `Space.Self` sẽ di chuyển theo hướng mũi xe, còn trong `Space.World` vẫn là hướng Z dương của thế giới.

### 3.3. Tốc độ, thời gian và FPS

Giả sử một phương tiện di chuyển với tốc độ 4 đơn vị Unity mỗi giây.

Quãng đường di chuyển phụ thuộc vào thời gian:

\\[ s = v \times t \\]

Trong đó:

- \\(s\\): Quãng đường.
- \\(v\\): Tốc độ.
- \\(t\\): Thời gian.

Trong Unity, `Update()` thường được gọi một lần trong mỗi frame, nhưng khoảng thời gian giữa hai frame không cố định.

Nếu mỗi frame đều di chuyển 4 đơn vị:

```
transform.Translate(Vector3.forward * 4f);
```

thì tốc độ thực tế tăng khi FPS tăng.

Giải pháp là sử dụng `Time.deltaTime`:

```
transform.Translate(
    Vector3.forward * 4f * Time.deltaTime
);
```

`Time.deltaTime` biểu diễn khoảng thời gian đã trôi qua giữa các frame, tính bằng giây.

Ví dụ minh họa:

| FPS | Thời gian mỗi frame (xấp xỉ) | Quãng đường mỗi frame với tốc độ 4 |
| --- | ---------------------------- | ---------------------------------- |
| 30  | 0,0333 giây                  | 0,1333 đơn vị                      |
| 60  | 0,0167 giây                  | 0,0667 đơn vị                      |
| 120 | 0,0083 giây                  | 0,0333 đơn vị                      |

Ở điều kiện lý tưởng, đối tượng vẫn di chuyển khoảng 4 đơn vị trong một giây, bất kể FPS khác nhau.

Điều này giúp chuyển động ổn định hơn trên nhiều cấu hình phần cứng, dù sai số nhỏ vẫn có thể xuất hiện do việc lấy mẫu input và thời điểm cập nhật frame.

### 3.4. Đọc input từ bàn phím

Unity hỗ trợ nhiều cơ chế xử lý input. Bài thực hành sử dụng `Input.GetAxisRaw()` thuộc Input Manager cũ.

Ví dụ:

```
float horizontal = Input.GetAxisRaw("Horizontal");
```

Với cấu hình trục mặc định thông thường:

| Phím       | Giá trị |
| ---------- | ------- |
| A hoặc ←   | -1      |
| D hoặc →   | 1       |
| Không nhấn | 0       |

`GetAxisRaw()` trả về giá trị không được làm mượt theo thời gian, phù hợp để thử điều khiển đơn giản.

Lưu ý phiên bản: Nếu dự án sử dụng Input System mới, đoạn code trên chỉ hoạt động khi `Active Input Handling` cho phép Input Manager cũ, chẳng hạn chế độ `Both`. Khi dùng riêng Input System mới, cần đọc điều khiển bằng Input Actions tương ứng.

## 4. Sơ đồ hoạt động của hệ thống di chuyển

\#chatgpt-mermaid-\_r_ma\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ma\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ma\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ma\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ma\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ma\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ma\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ma\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ma\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ma\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ma\_ p{margin:0;}#chatgpt-mermaid-\_r_ma\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ma\_ .label text,#chatgpt-mermaid-\_r_ma\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .node rect,#chatgpt-mermaid-\_r_ma\_ .node circle,#chatgpt-mermaid-\_r_ma\_ .node ellipse,#chatgpt-mermaid-\_r_ma\_ .node polygon,#chatgpt-mermaid-\_r_ma\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .rough-node .label text,#chatgpt-mermaid-\_r_ma\_ .node .label text,#chatgpt-mermaid-\_r_ma\_ .image-shape .label,#chatgpt-mermaid-\_r_ma\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ma\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .rough-node .label,#chatgpt-mermaid-\_r_ma\_ .node .label,#chatgpt-mermaid-\_r_ma\_ .image-shape .label,#chatgpt-mermaid-\_r_ma\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ma\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ma\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ma\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ma\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ma\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ma\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ma\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ma\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ma\_ .icon-shape,#chatgpt-mermaid-\_r_ma\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ma\_ .icon-shape p,#chatgpt-mermaid-\_r_ma\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ma\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ma\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ma\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ma\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ma\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ma\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ma\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ma\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ma\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .node rect,#chatgpt-mermaid-\_r_ma\_ .node circle,#chatgpt-mermaid-\_r_ma\_ .node ellipse,#chatgpt-mermaid-\_r_ma\_ .node polygon,#chatgpt-mermaid-\_r_ma\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ma\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ma\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ma\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn phímInput.GetAxisRaw()Xác định hướng di chuyểnNhân với speed vàTime.deltaTimeTransform.Translate()Cập nhật vị trí GameObjectGiới hạn vị trí bằngMathf.Clamp()Quan sát kết quả trong Gameview

Hệ thống xử lý input thành hướng di chuyển. Hướng này được nhân với tốc độ và thời gian giữa các frame, sau đó dùng để cập nhật vị trí. Cuối cùng, vị trí được kiểm tra để tránh vượt khỏi giới hạn đã thiết lập.

## 5. Thực hành: Xây dựng hệ thống di chuyển

### 5.1. Chuẩn bị Scene

Mở Unity Editor và thực hiện:

1. Tạo hoặc mở một dự án 3D.
2. Mở Scene dùng để thực hành.
3. Tạo một `Cube` và đặt tên `Player`.
4. Đặt `Position` của Cube tại `(0, 0, 0)`.
5. Đảm bảo Camera có thể nhìn thấy Cube khi chạy.
6. Tạo một C# Script tên `SimpleMover`.

Cấu trúc Scene tối thiểu:

```
SampleScene
├── Main Camera
├── Directional Light
└── Player
    ├── Transform
    ├── Mesh Filter
    ├── Mesh Renderer
    ├── Box Collider
    └── SimpleMover
```

### 5.2. Viết script di chuyển

Mở file `SimpleMover.cs` và thêm:

```

using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        // Đọc hướng di chuyển ngang.
        float horizontal = Input.GetAxisRaw("Horizontal");

        // Xác định vector hướng trong không gian 3D.
        Vector3 direction = new Vector3(horizontal, 0f, 0f);

        // Di chuyển theo thời gian thực.
        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}

```

Gắn Script vào GameObject `Player`.

Trong Inspector, tìm Component `Simple Mover` và đặt `Speed = 4`.

### 5.3. Giải thích các thành phần

`MonoBehaviour`

Cho phép Script hoạt động như một Component của GameObject và sử dụng các phương thức vòng đời như `Update()`.

`[SerializeField]`

Cho phép một trường `private` được Unity tuần tự hóa và hiển thị trong Inspector để cấu hình.

```
[SerializeField] private float speed = 4f;
```

`Update()`

Được gọi mỗi frame khi Component đang hoạt động và đủ điều kiện thực thi.

`Input.GetAxisRaw()`

Đọc giá trị điều khiển tương ứng với trục đã đặt tên.

`Vector3`

Biểu diễn hướng di chuyển trong không gian ba chiều.

`transform.Translate()`

Thay đổi vị trí GameObject theo vector di chuyển.

`Time.deltaTime`

Giúp quãng đường dịch chuyển được tính theo thời gian giữa các frame thay vì một lượng cố định ở mỗi frame.

### 5.4. Chạy thử trong Unity

Nhấn nút Play, sau đó thử các thao tác:

| Thao tác   | Kết quả mong đợi           |
| ---------- | -------------------------- |
| Nhấn A     | Player di chuyển sang trái |
| Nhấn D     | Player di chuyển sang phải |
| Thả phím   | Player ngừng di chuyển     |
| Tăng Speed | Player di chuyển nhanh hơn |
| Giảm Speed | Player di chuyển chậm hơn  |

Bảng kết quả có thể được dùng để ghi lại quan sát trong quá trình thực hành.

## 6. Mở rộng hệ thống điều khiển

### 6.1. Di chuyển theo hai trục

Để Player có thể di chuyển theo cả trục X và Z, thêm điều khiển `Vertical`.

```
float horizontal = Input.GetAxisRaw("Horizontal");
float vertical = Input.GetAxisRaw("Vertical");

Vector3 direction = new Vector3(
    horizontal,
    0f,
    vertical
);
```

Thông thường:

- A/D điều khiển trục X.
- W/S điều khiển trục Z.

Khi nhấn hai phím cùng lúc, vector hướng có thể có độ dài lớn hơn 1. Nếu muốn tránh di chuyển chéo nhanh hơn, có thể giới hạn độ lớn vector:

```
direction = Vector3.ClampMagnitude(direction, 1f);
```

Sau đó tiếp tục dùng `transform.Translate()` để cập nhật vị trí.

### 6.2. Giới hạn phạm vi di chuyển

Trong một số trò chơi, nhân vật không được phép đi ra ngoài khu vực chơi.

Có thể dùng `Mathf.Clamp()` để giới hạn vị trí:

```
Vector3 position = transform.position;

position.x = Mathf.Clamp(
    position.x,
    -5f,
    5f
);

transform.position = position;
```

Cách này giữ tọa độ X trong đoạn từ -5 đến 5.

Đây là giới hạn tại điểm gốc của GameObject. Nếu cần toàn bộ mô hình nằm trong vùng chơi, phải tính thêm kích thước và hình dạng của đối tượng.

### 6.3. Thay đổi tốc độ

Giá trị `speed` có thể được điều chỉnh trong Inspector.

Ví dụ:

| Speed | Hành vi           |
| ----- | ----------------- |
| 2     | Di chuyển chậm    |
| 4     | Tốc độ trung bình |
| 8     | Di chuyển nhanh   |

Các giá trị này chỉ mang tính minh họa và không bắt buộc phù hợp với mọi trò chơi.

## 7. Kiểm thử hệ thống

Một hệ thống di chuyển cần được kiểm tra ở nhiều tình huống.

| Tình huống     | Điều cần kiểm tra                                  |
| -------------- | -------------------------------------------------- |
| Nhấn phím      | GameObject di chuyển đúng hướng                    |
| Thả phím       | GameObject dừng khi không còn input                |
| Thay đổi Speed | Khoảng cách di chuyển mỗi giây thay đổi            |
| Chạm biên      | Vị trí không vượt quá phạm vi được phép            |
| Thay đổi FPS   | Tốc độ trung bình theo thời gian tương đối ổn định |
| Gặp vật cản    | Hành vi va chạm phù hợp với cơ chế chuyển động     |

Lưu ý quan trọng về va chạm: Thao tác thay đổi `Transform` trực tiếp không tự động bảo đảm GameObject sẽ bị chặn bởi Collider. Nếu trò chơi cần xử lý va chạm vật lý chính xác, nên thiết kế hệ thống chuyển động dựa trên `Rigidbody` và cập nhật phù hợp với vòng lặp vật lý, thay vì trộn tùy ý cả hai cơ chế.

## 8. Lỗi thường gặp và cách khắc phục

| Hiện tượng                    | Nguyên nhân có thể                                | Hướng xử lý                             |
| ----------------------------- | ------------------------------------------------- | --------------------------------------- |
| GameObject không di chuyển    | Script chưa gắn hoặc bị tắt                       | Kiểm tra Inspector                      |
| Nhấn phím không có tác dụng   | Sai Input Handling hoặc Game view chưa nhận focus | Kiểm tra cấu hình input và cửa sổ Game  |
| Di chuyển quá nhanh ở FPS cao | Không sử dụng `Time.deltaTime`                    | Nhân quãng đường với `Time.deltaTime`   |
| Di chuyển sai hướng           | Nhầm giữa local và world space                    | Kiểm tra `Space.Self` và `Space.World`  |
| Không dừng tại biên           | Chưa giới hạn tọa độ                              | Sử dụng `Mathf.Clamp()`                 |
| Đi xuyên vật cản              | Di chuyển trực tiếp bằng Transform                | Kiểm tra thiết kế Collider và Rigidbody |

Quy trình debug nên được thực hiện theo thứ tự: tái hiện lỗi, kiểm tra Console, xác định Component liên quan, thử sửa một nguyên nhân, sau đó chạy lại.

## 9. Bài tập thực hành

### Bài tập A — Điều khiển cơ bản

Tạo một GameObject có thể di chuyển sang trái và phải.

Yêu cầu: Sử dụng `Input.GetAxisRaw()`, `Transform.Translate()` và `Time.deltaTime`. Tốc độ có thể thay đổi trong Inspector.

### Bài tập B — Điều khiển hai chiều

Mở rộng Script để GameObject có thể di chuyển bằng các phím W, A, S, D.

Yêu cầu: Di chuyển theo trục X và Z, đồng thời kiểm tra tốc độ khi nhấn hai phím cùng lúc.

### Bài tập C — Giới hạn khu vực

Tạo vùng di chuyển hình chữ nhật.

Yêu cầu: Giới hạn tọa độ X trong đoạn `[-5, 5]` và Z trong đoạn `[-3, 3]`. Thử di chuyển vào các cạnh và góc để kiểm chứng.

## 10. Checklist hoàn thành

- Giải thích được vai trò của `Transform` và `Vector3`.
- Phân biệt được `Space.Self` và `Space.World`.
- Sử dụng được `Input.GetAxisRaw()` trong dự án cấu hình phù hợp.
- Áp dụng `Time.deltaTime` khi tính quãng đường di chuyển.
- Điều chỉnh được tốc độ từ Inspector.
- Giới hạn được phạm vi di chuyển.
- Chạy thử và ghi lại kết quả thực tế.
- Phát hiện và giải thích được ít nhất một lỗi.

## 11. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức — 5 câu

0/5 đã trả lời

Câu 1. Một GameObject di chuyển nhanh hơn khi FPS tăng. Nguyên nhân có khả năng cao nhất là gì?

A. Không sử dụng Time.deltaTime khi cập nhật vị trí trong Update()

B. Sử dụng Vector3 để biểu diễn hướng

C. Sử dụng SerializeField để lưu tốc độ

D. GameObject có Transform Component

Câu 2. Khi sử dụng Space.World trong Transform.Translate(), hướng di chuyển được xác định theo hệ tọa độ nào?

A. Hướng Camera

B. Hệ trục của thế giới

C. Hướng local của đối tượng

D. Hướng của Rigidbody

Câu 3. Một đối tượng có Speed = 4 và Time.deltaTime = 0,02. Nếu vector hướng có độ dài 1, quãng đường di chuyển trong frame đó là bao nhiêu?

A. 4 đơn vị

B. 0,02 đơn vị

C. 0,08 đơn vị

D. 8 đơn vị

Câu 4. Muốn giới hạn tọa độ X của Player trong khoảng -5 đến 5, phương thức nào phù hợp nhất?

A. Time.deltaTime

B. Input.GetAxisRaw()

C. Vector3.forward

D. Mathf.Clamp()

Câu 5. Một Script sử dụng Input.GetAxisRaw() nhưng dự án chỉ kích hoạt Input System mới. Giải pháp phù hợp là gì?

A. Cấu hình bật Input Manager cũ hoặc chuyển sang Input Actions

B. Xóa Transform của GameObject

C. Chỉ tăng giá trị Speed

D. Chuyển Update() thành Start()

Chấm điểm và xem giải thích

Tổng kết: Kỹ năng trọng tâm của bài là chuyển tín hiệu điều khiển thành chuyển động có tốc độ xác định. Sự kết hợp giữa `Input`, `Vector3`, `Transform` và `Time.deltaTime` tạo nên một hệ thống di chuyển cơ bản, có thể tiếp tục mở rộng thành điều khiển nhân vật hoặc phương tiện trong trò chơi Unity 3D.