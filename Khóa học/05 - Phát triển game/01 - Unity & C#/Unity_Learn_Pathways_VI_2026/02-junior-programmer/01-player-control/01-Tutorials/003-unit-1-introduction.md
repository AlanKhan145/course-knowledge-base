# Bài 03 — Unit 1: Introduction (Giới thiệu Unit 1)

Pathway: Junior Programmer Mission: Player Control Loại bài: Tutorial — Giới thiệu và thực hành nền tảng Phiên bản: Unity 6.3

Nguồn tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong phát triển trò chơi, điều khiển nhân vật (Player Control) là một trong những chức năng cơ bản nhất. Người chơi cần có khả năng tương tác với các đối tượng thông qua bàn phím hoặc thiết bị điều khiển.

Ví dụ, trong một trò chơi lái xe 3D:

- Nhấn `W` để xe tiến về phía trước.
- Nhấn `S` để xe lùi lại.
- Nhấn `A` hoặc `D` để thay đổi hướng di chuyển.
- Xe di chuyển với tốc độ ổn định, không phụ thuộc đáng kể vào số khung hình mỗi giây.
- Xe được giới hạn trong phạm vi đường đi hoặc khu vực chơi.

Để xây dựng hệ thống như vậy, cần kết hợp ba thành phần chính: Input (đầu vào), Movement (di chuyển) và Speed (tốc độ).

Trong bài này, chúng ta sẽ làm quen với các thành phần đó, tìm hiểu cách Unity xử lý chuyển động và xây dựng một ví dụ điều khiển đơn giản.

### Kết quả mong đợi

Sau khi hoàn thành bài học, bạn có thể tạo một đối tượng 3D di chuyển bằng bàn phím, điều chỉnh tốc độ trong Inspector và giới hạn khu vực di chuyển.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

1. Giải thích vai trò của Player Control trong trò chơi.
2. Phân biệt Scene, GameObject, Component và Play Mode.
3. Áp dụng `Time.deltaTime` để xây dựng chuyển động dựa trên thời gian.
4. Sử dụng `Mathf.Clamp()` để giới hạn vị trí đối tượng.
5. Phân biệt di chuyển bằng `Transform` và `Rigidbody`.
6. Kiểm thử và phát hiện những lỗi cơ bản về điều khiển, tọa độ và tốc độ.

## 3. Kiến thức nền tảng

### 3.1. Player Control là gì?

Player Control là hệ thống cho phép người chơi điều khiển đối tượng trong trò chơi thông qua các thiết bị đầu vào.

Một hệ thống điều khiển thường có ba nhiệm vụ:

| Thành phần | Chức năng                         | Ví dụ                 |
| ---------- | --------------------------------- | --------------------- |
| Input      | Nhận hành động của người chơi     | Nhấn phím `W`         |
| Movement   | Xác định cách đối tượng di chuyển | Di chuyển theo trục Z |
| Speed      | Xác định tốc độ di chuyển         | 5 đơn vị/giây         |

Ba thành phần này liên kết với nhau theo quy trình:

Player Input

Người chơi nhấn W, A, S, D

Movement Logic

Xác định hướng, tốc độ và thời gian

Transform / Rigidbody

Cập nhật chuyển động của đối tượng

Game View

Hiển thị kết quả cho người chơi

Quy trình này được thực hiện liên tục trong quá trình chạy trò chơi để phản hồi thao tác của người chơi.

### 3.2. Các thành phần cơ bản trong Unity

| Khái niệm    | Giải thích                                                             |
| ------------ | ---------------------------------------------------------------------- |
| `Scene`      | Không gian chứa các đối tượng, ánh sáng, camera và môi trường trò chơi |
| `GameObject` | Đối tượng cơ bản trong Unity                                           |
| `Component`  | Thành phần bổ sung dữ liệu hoặc hành vi cho GameObject                 |
| `Transform`  | Component chứa Position, Rotation và Scale                             |
| `Inspector`  | Cửa sổ cho phép quan sát và chỉnh sửa Component                        |
| `Play Mode`  | Chế độ chạy thử trò chơi bên trong Unity Editor                        |

Ví dụ, một GameObject tên `Player` có thể chứa:

```
Player (GameObject)
│
├── Transform
│   ├── Position
│   ├── Rotation
│   └── Scale
│
├── Mesh Filter
├── Mesh Renderer
└── SimplePlayerController (Script)
    └── Move Speed
```

Khi gắn một script kế thừa `MonoBehaviour` vào GameObject, Unity có thể gọi các phương thức vòng đời như `Start()` và `Update()` của script đó.

### 3.3. Hệ tọa độ trong Unity

Unity sử dụng không gian tọa độ 3D với ba trục chính.

Sơ đồ minh họa các hướng dương X, Y và Z trong Unity (không theo tỷ lệ).

Trong một môi trường 3D thông thường:

- Trục X: trái/phải.
- Trục Y: lên/xuống.
- Trục Z: trước/sau.

Cần phân biệt hai cách xác định hướng:

World Space: Hướng di chuyển được xác định theo hệ tọa độ thế giới.

Local Space: Hướng di chuyển được xác định theo hướng hiện tại của đối tượng.

Ví dụ, khi một chiếc xe quay 90°, hướng tiến về phía trước theo Local Space cũng thay đổi theo xe.

## 4. Nguyên lý điều khiển chuyển động

### 4.1. Tốc độ và thời gian giữa các frame

Một lỗi phổ biến khi mới học Unity là thay đổi vị trí đối tượng một khoảng cố định trong mỗi frame.

Ví dụ:

```
transform.position += Vector3.forward * 0.1f;
```

Đoạn mã trên sẽ khiến tốc độ phụ thuộc vào FPS.

| FPS | Quãng đường trong 1 giây |
| --- | ------------------------ |
| 30  | 3 đơn vị                 |
| 60  | 6 đơn vị                 |
| 120 | 12 đơn vị                |

Để xây dựng chuyển động theo tốc độ tính bằng đơn vị/giây, sử dụng `Time.deltaTime`.

```
transform.position +=
    Vector3.forward * moveSpeed * Time.deltaTime;
```

Công thức:

\\[ \text{Quãng đường}=\text{Tốc độ}\times\text{Thời gian} \\]

Ví dụ:

- Tốc độ = 5 đơn vị/giây.
- Thời gian = 2 giây.
- Quãng đường lý tưởng = 10 đơn vị.

Trong thực tế, `Time.deltaTime` là thời gian giữa các frame và giúp chuyển động ít phụ thuộc FPS hơn, dù không đảm bảo kết quả hoàn toàn giống nhau trong mọi điều kiện.

### 4.2. Transform và Rigidbody

Unity cung cấp nhiều cách để làm đối tượng chuyển động. Hai cơ chế cơ bản là `Transform` và `Rigidbody`.

| Tiêu chí          | Transform            | Rigidbody                                        |
| ----------------- | -------------------- | ------------------------------------------------ |
| Điều khiển vị trí | Trực tiếp            | Qua hệ thống vật lý                              |
| Trọng lực         | Không tự áp dụng     | Có thể sử dụng                                   |
| Va chạm vật lý    | Không tự giải quyết  | Được xử lý bởi hệ thống vật lý khi cấu hình đúng |
| Phù hợp           | Chuyển động đơn giản | Chuyển động cần tương tác vật lý                 |

Không nên tùy tiện cập nhật trực tiếp `Transform` của một đối tượng sử dụng `Rigidbody` động để mô phỏng va chạm. Khi cần vật lý, hãy dùng phương pháp di chuyển phù hợp với `Rigidbody` và bước cập nhật vật lý.

Trong ví dụ đầu tiên, chúng ta sẽ sử dụng `Transform` để tập trung vào nguyên lý điều khiển.

### 4.3. Input System và Input Manager

Unity hỗ trợ hai cách tiếp cận đầu vào:

- Input Manager (Legacy): Có thể nhận phím bằng `Input.GetKey()` hoặc `Input.GetAxis()`.
- Input System: Hệ thống đầu vào mới hơn, hỗ trợ Input Actions và nhiều loại thiết bị điều khiển.

Ví dụ thực hành dưới đây dùng Input Manager (Legacy). Dự án cần bật `Input Manager (Old)` hoặc `Both` trong thiết lập Active Input Handling. Nếu dự án chỉ sử dụng Input System mới, cần viết lại phần nhận input tương ứng.

## 5. Thực hành: Điều khiển đối tượng 3D

### 5.1. Chuẩn bị Scene

Mở Unity Editor và thực hiện:

1. Tạo một Scene 3D.
2. Thêm một `Plane` làm mặt đất.
3. Thêm một `Cube`, đổi tên thành `Player`.
4. Đặt `Player` tại tọa độ `(0, 0.5, 0)`.
5. Điều chỉnh camera để quan sát được đối tượng.
6. Tạo C# script tên `SimplePlayerController`.

Mô hình mục tiêu có thể trông tương tự như minh họa:

[Make a Game in Unity - How to Move a Player in Unity 3D](https://images.openai.com/static-rsc-4/Qv3BfWup6LC2us-rKh_17OVi8qPdqSyElx8BqLeMxiCt7DdRiHRayOTtJUxAl-BmvQjlXJY058bcy47St8nPtkKVQQvrCwDWkXx51pmDpuRxXsFvfZ-9xNyUck8uY2zXPszskKgj7iNpXfpCG7XWAa9N5aYwMN0-l7Wp89_WK6E?purpose=inline)

[jeremymorgan.com](https://www.jeremymorgan.com/tutorials/unity/how-to-move-player-unity-3d/?utm_source=chatgpt.com)

### 5.2. Viết script điều khiển

Gắn đoạn mã sau vào file `SimplePlayerController.cs`:

```

using UnityEngine;

public class SimplePlayerController : MonoBehaviour
{
    public float moveSpeed = 5f;

    public float minX = -8f;
    public float maxX = 8f;
    public float minZ = -8f;
    public float maxZ = 8f;

    void Update()
    {
        float horizontal = 0f;
        float vertical = 0f;

        if (Input.GetKey(KeyCode.A)) horizontal -= 1f;
        if (Input.GetKey(KeyCode.D)) horizontal += 1f;
        if (Input.GetKey(KeyCode.W)) vertical += 1f;
        if (Input.GetKey(KeyCode.S)) vertical -= 1f;

        Vector3 direction =
            new Vector3(horizontal, 0f, vertical).normalized;

        Vector3 newPosition = transform.position
            + direction * moveSpeed * Time.deltaTime;

        newPosition.x = Mathf.Clamp(
            newPosition.x, minX, maxX);

        newPosition.z = Mathf.Clamp(
            newPosition.z, minZ, maxZ);

        transform.position = newPosition;
    }
}

```

### 5.3. Giải thích các thành phần chính

`Input.GetKey()`

Kiểm tra phím có đang được giữ hay không.

```
Input.GetKey(KeyCode.W)
```

Trả về `true` khi phím W được giữ.

`Vector3`

Biểu diễn một vector gồm ba thành phần X, Y và Z.

```
new Vector3(horizontal, 0f, vertical)
```

Trong ví dụ, chuyển động chỉ xảy ra trên mặt phẳng XZ.

`.normalized`

Chuẩn hóa độ dài vector hướng về 1 khi vector khác 0, giúp tránh việc di chuyển theo đường chéo nhanh hơn di chuyển theo một trục.

`Mathf.Clamp()`

Giới hạn giá trị trong một khoảng.

```
Mathf.Clamp(value, min, max);
```

Ví dụ: `Mathf.Clamp(12f, -8f, 8f)` trả về `8`.

`Time.deltaTime`

Chuyển tốc độ từ đơn vị/frame sang dạng tính theo thời gian thực tế giữa các frame.

### 5.4. Kiểm tra hoạt động

Kéo script vào GameObject `Player`, sau đó nhấn Play.

| Thao tác          | Kết quả mong đợi                           |
| ----------------- | ------------------------------------------ |
| Giữ W             | Đối tượng di chuyển theo +Z                |
| Giữ S             | Đối tượng di chuyển theo -Z                |
| Giữ A             | Đối tượng di chuyển theo -X                |
| Giữ D             | Đối tượng di chuyển theo +X                |
| Giữ W + D         | Di chuyển chéo                             |
| Thả tất cả phím   | Đối tượng dừng                             |
| Chạm giới hạn X/Z | Không vượt ra ngoài khoảng giới hạn đã đặt |

Minh họa điều khiển trên mặt phẳng XZ

W&#x20;

A S D&#x20;

&#x20;Đặt lại vị trí

Nhấn các nút để mô phỏng chuyển động theo từng bước, với giới hạn X và Z từ -4 đến 4. Đây là mô phỏng logic Clamp, không phải Unity Editor.

### 5.5. Thay đổi tốc độ và kiểm thử FPS

Trong Inspector, thử thay đổi `Move Speed` từ 5 lên 10.

Dự đoán: Khi giữ phím trong cùng một khoảng thời gian, đối tượng sẽ di chuyển quãng đường xấp xỉ gấp đôi, miễn là chưa chạm giới hạn.

Tiếp tục kiểm tra trong các điều kiện FPS khác nhau. Có thể dùng Profiler hoặc công cụ kiểm soát hiệu năng để quan sát, nhưng không nên giả định FPS luôn khớp một mức cố định trong Editor.

Kết quả mong đợi: Tốc độ trung bình theo giây tương đối ổn định nhờ `Time.deltaTime`.

## 6. Lỗi thường gặp và cách debug

| Hiện tượng                  | Nguyên nhân có thể                 | Cách kiểm tra                                       |
| --------------------------- | ---------------------------------- | --------------------------------------------------- |
| Đối tượng không di chuyển   | Chưa gắn script                    | Kiểm tra Inspector                                  |
| Nhấn phím không có tác dụng | Input backend không phù hợp        | Kiểm tra Active Input Handling và focus Game view   |
| Di chuyển quá nhanh         | Không dùng `Time.deltaTime`        | Kiểm tra công thức cập nhật vị trí                  |
| Di chuyển sai hướng         | Nhầm X/Z hoặc Local/World Space    | Quan sát Transform                                  |
| Không vượt được một vị trí  | Giá trị Clamp quá hẹp              | Kiểm tra `minX`, `maxX`, `minZ`, `maxZ`             |
| Xuyên qua vật cản           | Di chuyển trực tiếp bằng Transform | Xem lại cơ chế va chạm và sử dụng Rigidbody khi cần |

Quy trình debug nên thực hiện theo trình tự:

\#chatgpt-mermaid-\_r_mg\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mg\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mg\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mg\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mg\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mg\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mg\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mg\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mg\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mg\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mg\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mg\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mg\_ p{margin:0;}#chatgpt-mermaid-\_r_mg\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mg\_ .label text,#chatgpt-mermaid-\_r_mg\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ .node rect,#chatgpt-mermaid-\_r_mg\_ .node circle,#chatgpt-mermaid-\_r_mg\_ .node ellipse,#chatgpt-mermaid-\_r_mg\_ .node polygon,#chatgpt-mermaid-\_r_mg\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .rough-node .label text,#chatgpt-mermaid-\_r_mg\_ .node .label text,#chatgpt-mermaid-\_r_mg\_ .image-shape .label,#chatgpt-mermaid-\_r_mg\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mg\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .rough-node .label,#chatgpt-mermaid-\_r_mg\_ .node .label,#chatgpt-mermaid-\_r_mg\_ .image-shape .label,#chatgpt-mermaid-\_r_mg\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mg\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mg\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mg\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mg\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mg\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mg\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mg\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mg\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mg\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mg\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mg\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mg\_ .icon-shape,#chatgpt-mermaid-\_r_mg\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mg\_ .icon-shape p,#chatgpt-mermaid-\_r_mg\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mg\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mg\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mg\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mg\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mg\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mg\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mg\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mg\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mg\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mg\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mg\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mg\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .node rect,#chatgpt-mermaid-\_r_mg\_ .node circle,#chatgpt-mermaid-\_r_mg\_ .node ellipse,#chatgpt-mermaid-\_r_mg\_ .node polygon,#chatgpt-mermaid-\_r_mg\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mg\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mg\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mg\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mg\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mg\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiKiểm tra ConsoleKiểm tra GameObject,Component và InputĐề xuất một nguyên nhânChỉ thay đổi một yếu tốLỗi đã được sửa?Ghi nhận kết quảCóChưa

Việc chỉ thay đổi một yếu tố tại mỗi lần thử giúp xác định chính xác nguyên nhân, thay vì sửa nhiều thiết lập cùng lúc và không biết điều gì đã giải quyết vấn đề.

## 7. Bài tập củng cố

Bài tập 1 — Điều chỉnh tốc độ (Cơ bản)

Tạo hai lần thử nghiệm với `Move Speed = 3` và `Move Speed = 6`. So sánh quãng đường di chuyển trong cùng một khoảng thời gian, trước khi đối tượng chạm biên.

Bài tập 2 — Giới hạn khu vực (Vận dụng)

Thay đổi giới hạn:

- X từ -5 đến 5.
- Z từ -3 đến 3.

Sau đó chạy thử để xác nhận đối tượng không vượt ra khỏi phạm vi.

Bài tập 3 — Thử nghiệm va chạm (Mở rộng)

Thêm một Cube khác làm vật cản. Quan sát điều gì xảy ra khi Player di chuyển trực tiếp bằng `Transform` vào vật cản.

Giải thích vì sao đoạn script hiện tại chưa thực hiện giải quyết va chạm vật lý. Đề xuất cách cải tiến bằng `Rigidbody` trong một bài thực hành riêng.

## 8. Câu hỏi ôn tập

Kiểm tra kiến thức — 5 câu

0/5 đã trả lời

Câu 1. Vì sao cần nhân tốc độ với Time.deltaTime khi cập nhật vị trí trong Update()?

A. Để tăng số lượng frame

B. Để di chuyển theo thời gian thay vì khoảng cố định mỗi frame

C. Để tự động phát hiện va chạm

D. Để khóa tốc độ trò chơi ở 60 FPS

Câu 2. Khi di chuyển một chiếc xe đã xoay hướng, muốn xe tiến theo hướng đầu xe thì cần quan tâm hệ tọa độ nào?

A. Local Space

B. Chỉ trục Y trong World Space

C. Tọa độ màn hình

D. Tọa độ chuột

Câu 3. Chức năng chính của Mathf.Clamp() trong ví dụ là gì?

A. Tăng tốc nhân vật

B. Tính FPS

C. Quay camera

D. Giữ tọa độ trong khoảng cho phép

Câu 4. GameObject cần mô phỏng va chạm vật lý và chịu tác dụng của trọng lực. Thành phần nào phù hợp nhất?

A. Mesh Renderer

B. Transform một mình

C. Rigidbody với cấu hình Collider thích hợp

D. Audio Source

Câu 5. Một script sử dụng Input.GetKey nhưng dự án chỉ bật Input System mới. Nên kiểm tra điều gì trước tiên?

A. Active Input Handling và cách đọc Input

B. Màu sắc của Cube

C. Độ phân giải texture

D. Cường độ Directional Light

Chấm điểmLàm lại

## 9. Checklist hoàn thành

Tiến độ học tập

0/7

Giải thích được mối quan hệ giữa Input, Movement và Speed.

Phân biệt được GameObject, Component, Scene và Play Mode.

Tạo được một đối tượng có thể di chuyển bằng bàn phím.

Sử dụng được Time.deltaTime và Mathf.Clamp().

Kiểm tra được cách thay đổi tốc độ trong Inspector.

Phát hiện và giải thích được ít nhất một lỗi.

Lưu ảnh chụp màn hình hoặc video minh chứng.

## 10. Tổng kết

Player Control là nền tảng để tạo ra tương tác giữa người chơi và thế giới trò chơi. Một hệ thống điều khiển cơ bản cần nhận đầu vào, xác định hướng, tính toán tốc độ và cập nhật chuyển động.

Những nguyên tắc quan trọng nhất trong bài gồm:

- `Update()` phù hợp với việc đọc input và cập nhật chuyển động đơn giản theo frame.
- `Time.deltaTime` giúp tính chuyển động theo thời gian.
- `Vector3` biểu diễn hướng và vị trí trong không gian 3D.
- `Mathf.Clamp()` giúp giới hạn tọa độ.
- `Transform` thích hợp cho chuyển động đơn giản; `Rigidbody` phù hợp hơn khi cần mô phỏng vật lý.
- Kiểm tra Console và Inspector là bước quan trọng trong quá trình debug.

Kết quả cuối bài: Một Scene Unity chứa đối tượng `Player`, có thể điều khiển bằng W/A/S/D, điều chỉnh tốc độ và giới hạn vị trí trong khu vực xác định.

Ghi chú: Đây là bài học tiếng Việt tự biên soạn cho chủ đề Unit 1 — Introduction trong Mission Player Control, không phải bản dịch hoặc transcript chính thức của Unity. Các bước thực hành là ví dụ bổ trợ; cần đối chiếu [Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com) khi thực hiện theo dự án và tài nguyên chính thức của khóa học.