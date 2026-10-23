# Bài 07 — Lesson 1.4: Step into the Driver’s Seat

Chủ đề: Điều khiển nhân vật và phương tiện bằng bàn phím trong Unity

Pathway: Junior Programmer Mission: Player Control Loại bài: Tutorial — Hướng dẫn thực hành Phiên bản: Unity 6.3 Tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong một trò chơi, người chơi cần có khả năng điều khiển nhân vật hoặc phương tiện thông qua các thiết bị nhập liệu như bàn phím, tay cầm hoặc chuột.

Ví dụ, trong một trò chơi lái xe 3D:

- Nhấn `A` hoặc `←` để di chuyển sang trái.
- Nhấn `D` hoặc `→` để di chuyển sang phải.
- Nhấn `W` hoặc `↑` để di chuyển về phía trước.
- Nhấn `S` hoặc `↓` để di chuyển về phía sau.
- Thả phím để dừng di chuyển.

Để xây dựng cơ chế này, Unity cần đọc tín hiệu đầu vào, chuyển đổi tín hiệu thành hướng di chuyển, sau đó cập nhật vị trí của GameObject.

Bài học tập trung vào việc triển khai cơ chế điều khiển đơn giản bằng C#, đảm bảo tốc độ di chuyển tương đối ổn định giữa các mức FPS và giới hạn đối tượng trong phạm vi cho phép.

### Kết quả mong đợi

Sau khi hoàn thành, một GameObject có thể di chuyển theo bàn phím, dừng khi không có đầu vào và không vượt khỏi vùng giới hạn đã thiết lập.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

1. Giải thích cách Unity xử lý tín hiệu bàn phím để điều khiển GameObject.
2. Sử dụng `Input.GetAxisRaw()` để đọc đầu vào theo trục ngang và trục dọc.
3. Sử dụng `transform.Translate()` để cập nhật vị trí đối tượng.
4. Áp dụng `Time.deltaTime` nhằm giảm sự phụ thuộc của tốc độ di chuyển vào FPS.
5. Phân biệt hướng di chuyển trong `Space.World` và `Space.Self`.
6. Sử dụng `Mathf.Clamp()` để giới hạn phạm vi di chuyển.
7. Kiểm thử, phát hiện và sửa các lỗi điều khiển phổ biến.

## 3. Kiến thức nền tảng

### 3.1. GameObject, Component và Transform

Trong Unity, một GameObject là đối tượng có thể tồn tại trong Scene, chẳng hạn như xe, nhân vật, camera hoặc vật cản.

Mỗi GameObject đều có một Component `Transform`, lưu trữ ba thuộc tính quan trọng:

| Thuộc tính | Chức năng                 | Ví dụ        |
| ---------- | ------------------------- | ------------ |
| Position   | Xác định vị trí           | `(0, 0, 0)`  |
| Rotation   | Xác định góc xoay         | `(0, 90, 0)` |
| Scale      | Xác định tỷ lệ kích thước | `(1, 1, 1)`  |

Trong không gian 3D thường sử dụng cho bài thực hành:

- Trục X biểu diễn chuyển động trái và phải.
- Trục Y biểu diễn chuyển động lên và xuống.
- Trục Z biểu diễn chuyển động tiến và lùi.

Minh họa ba trục tọa độ X, Y, Z trong không gian Unity 3D.

Trong bài thực hành này, đối tượng sẽ di chuyển trên mặt phẳng XZ và giữ nguyên độ cao Y.

### 3.2. Hệ thống Input trong Unity

Input là dữ liệu đầu vào được gửi từ bàn phím, chuột, tay cầm hoặc thiết bị tương tác khác.

Unity có hai cách xử lý phổ biến:

| Hệ thống               | Đặc điểm                                                                  |
| ---------------------- | ------------------------------------------------------------------------- |
| Input Manager (Legacy) | Cách cũ, có thể sử dụng `Input.GetAxis()` và `Input.GetAxisRaw()`         |
| Input System           | Hệ thống mới, sử dụng Input Actions và hỗ trợ cấu hình thiết bị linh hoạt |

Các đoạn mã thực hành chính sử dụng Input Manager cũ. Nếu dự án chỉ bật Input System mới, cần chuyển cấu hình đầu vào hoặc triển khai bằng Input Actions.

### 3.3. Đọc đầu vào với Input.GetAxisRaw()

Phương thức `Input.GetAxisRaw()` đọc giá trị một trục đầu vào đã được định nghĩa trong Input Manager.

Ví dụ:

```
float horizontal = Input.GetAxisRaw("Horizontal");
```

Với cấu hình mặc định thường gặp của Input Manager:

| Phím       | Giá trị `Horizontal` | Ý nghĩa               |
| ---------- | -------------------- | --------------------- |
| A hoặc ←   | -1                   | Trái                  |
| D hoặc →   | 1                    | Phải                  |
| Không nhấn | 0                    | Không di chuyển ngang |

Tương tự:

```
float vertical = Input.GetAxisRaw("Vertical");
```

| Phím       | Giá trị `Vertical` | Ý nghĩa             |
| ---------- | ------------------ | ------------------- |
| W hoặc ↑   | 1                  | Tiến                |
| S hoặc ↓   | -1                 | Lùi                 |
| Không nhấn | 0                  | Không di chuyển dọc |

`GetAxisRaw()` trả về tín hiệu không được làm mượt theo cách của `GetAxis()` đối với các trục bàn phím, phù hợp với bài thực hành cần phản hồi trực tiếp.

## 4. Nguyên lý điều khiển chuyển động

### 4.1. Quy trình xử lý đầu vào

\#chatgpt-mermaid-\_r_hq\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_hq\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_hq\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_hq\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_hq\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_hq\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_hq\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_hq\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_hq\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_hq\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hq\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hq\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_hq\_ p{margin:0;}#chatgpt-mermaid-\_r_hq\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_hq\_ .label text,#chatgpt-mermaid-\_r_hq\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ .node rect,#chatgpt-mermaid-\_r_hq\_ .node circle,#chatgpt-mermaid-\_r_hq\_ .node ellipse,#chatgpt-mermaid-\_r_hq\_ .node polygon,#chatgpt-mermaid-\_r_hq\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .rough-node .label text,#chatgpt-mermaid-\_r_hq\_ .node .label text,#chatgpt-mermaid-\_r_hq\_ .image-shape .label,#chatgpt-mermaid-\_r_hq\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_hq\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .rough-node .label,#chatgpt-mermaid-\_r_hq\_ .node .label,#chatgpt-mermaid-\_r_hq\_ .image-shape .label,#chatgpt-mermaid-\_r_hq\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_hq\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_hq\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hq\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hq\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_hq\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_hq\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_hq\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_hq\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_hq\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_hq\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hq\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_hq\_ .icon-shape,#chatgpt-mermaid-\_r_hq\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_hq\_ .icon-shape p,#chatgpt-mermaid-\_r_hq\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_hq\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_hq\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_hq\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_hq\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_hq\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_hq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_hq\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_hq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_hq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hq\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_hq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hq\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_hq\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_hq\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_hq\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_hq\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .node rect,#chatgpt-mermaid-\_r_hq\_ .node circle,#chatgpt-mermaid-\_r_hq\_ .node ellipse,#chatgpt-mermaid-\_r_hq\_ .node polygon,#chatgpt-mermaid-\_r_hq\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_hq\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_hq\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_hq\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_hq\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hq\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn phímĐọc Horizontal / VerticalTạo Vector3 hướng di chuyểnNhân với tốc độ vàTime.deltaTimeCập nhật TransformGiới hạn vị trí nếu cầnHiển thị kết quả trong Gameview

Mỗi frame, `Update()` sẽ đọc trạng thái input hiện tại và tính toán lượng dịch chuyển cần áp dụng.

Khi không còn phím nào được nhấn, hướng di chuyển bằng vector không nên đối tượng dừng lại trong ví dụ này.

### 4.2. Vai trò của Time.deltaTime

Giả sử đối tượng cần di chuyển với tốc độ 4 đơn vị mỗi giây.

Nếu mỗi frame đều cộng trực tiếp 4 đơn vị vào vị trí, tốc độ thực tế sẽ tăng theo số frame mà máy tính xử lý được.

Công thức tính lượng dịch chuyển là:

\\[ \Delta s=v\times\Delta t \\]

Trong đó:

- \\(\Delta s\\): quãng đường dịch chuyển trong một frame.
- \\(v\\): tốc độ tính bằng đơn vị Unity trên giây.
- \\(\Delta t\\): khoảng thời gian của frame đó, được biểu diễn bằng `Time.deltaTime`.

Ví dụ với tốc độ 4 đơn vị/giây:

| FPS giả định | Thời gian mỗi frame | Quãng đường/frame |
| ------------ | ------------------- | ----------------- |
| 30 FPS       | 0,0333 giây         | ≈ 0,1333          |
| 60 FPS       | 0,0167 giây         | ≈ 0,0667          |
| 120 FPS      | 0,0083 giây         | ≈ 0,0333          |

Trong điều kiện lý tưởng, sau một giây, đối tượng di chuyển khoảng 4 đơn vị ở cả ba mức FPS.

Cần lưu ý rằng `Time.deltaTime` giúp tốc độ ít phụ thuộc FPS, nhưng không tự giải quyết mọi vấn đề về va chạm hoặc mô phỏng vật lý.

### 4.3. Space.World và Space.Self

Khi di chuyển bằng `Transform`, cần xác định hướng dịch chuyển thuộc hệ tọa độ nào.

| Cách sử dụng  | Ý nghĩa                                     |
| ------------- | ------------------------------------------- |
| `Space.World` | Di chuyển theo hệ trục toàn cục             |
| `Space.Self`  | Di chuyển theo hệ trục cục bộ của đối tượng |

Ví dụ:

```
transform.Translate(
    Vector3.forward * speed * Time.deltaTime,
    Space.World
);
```

Đối tượng di chuyển theo trục Z dương toàn cục, bất kể hướng xoay hiện tại.

Trong khi đó:

```
transform.Translate(
    Vector3.forward * speed * Time.deltaTime,
    Space.Self
);
```

Đối tượng di chuyển theo hướng Z cục bộ của chính nó.

Điểm khác biệt này đặc biệt quan trọng đối với trò chơi lái xe: một chiếc xe đã quay đầu cần có hướng chuyển động phù hợp với cơ chế điều khiển mong muốn.

## 5. Thực hành: Điều khiển đối tượng bằng bàn phím

### 5.1. Chuẩn bị Scene

[Creating Our Multiplayer Game using Unity | Creating a Multiplayer Game Server - Part 5 - DEV Community](https://images.openai.com/static-rsc-4/EP8m85cocjewEtszHd7RXenLjH79nCNCxZGCgoWGi2O8TSMu_BUS3HJ33mxxQhEtPy_YAX3nqb5gvUBeB6Xt9bgjunnEHtPzYnOIsOlUNagVNufO4zhPiCG_uPOQSf7zMoSoydwll9Qpbrp83Lf9SNG9yv75Iptd-j9b-GyN1Cg?purpose=inline)

[How to Think About Games: Unity - DEV Community](https://images.openai.com/static-rsc-4/4svFJ8q8tXihiovpdRtA-B9b2ogyY4elwuD4FbtaXgKYxYfcXJ01ifpqlC32cfFBZzBKrbQL7DVmYryk7wBEG2HWKPjBDn-i8R1tSVprvHHHLM8mO3oehUC1Xgkj9KWJE06DSeXjFz1ROH-lMXcVR5BBKDNMVh7S_994vZJdp9M?purpose=inline)

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

6

Thực hiện các thao tác:

1. Mở Unity và tạo hoặc sử dụng một dự án 3D.
2. Tạo Scene thực hành.
3. Trong `Hierarchy`, chọn `GameObject > 3D Object > Cube`.
4. Đổi tên Cube thành `Player`.
5. Thiết lập `Position` thành `(0, 0.5, 0)`.
6. Tạo thêm một `Plane` làm mặt đất tại `(0, 0, 0)`.
7. Điều chỉnh Main Camera để quan sát được Player khi di chuyển.

Checkpoint: Trong Game view, Player phải xuất hiện phía trên mặt đất và không bị che khuất bởi camera.

### 5.2. Tạo script SimpleMover

Trong cửa sổ Project, tạo một MonoBehaviour script C# có tên `SimpleMover`.

Mở script và nhập:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        // Đọc trục ngang từ Input Manager cũ
        float horizontal = Input.GetAxisRaw("Horizontal");

        // Xác định hướng di chuyển
        Vector3 direction = new Vector3(horizontal, 0f, 0f);

        // Di chuyển theo trục X toàn cục
        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}
```

Gắn script vào GameObject `Player` bằng cách kéo script từ Project vào Inspector của Player hoặc sử dụng `Add Component`.

### 5.3. Giải thích mã nguồn

Biến speed

```
[SerializeField] private float speed = 4f;
```

- `private`: giới hạn việc truy cập trực tiếp field từ class khác.
- `[SerializeField]`: cho phép Unity lưu và hiển thị field trong Inspector.
- `4f`: tốc độ di chuyển ban đầu.

Hàm Update()

```
void Update()
```

`Update()` được Unity gọi mỗi frame khi MonoBehaviour đang hoạt động. Đây là nơi phù hợp để đọc đầu vào cho ví dụ di chuyển bằng Transform.

Vector3

```
Vector3 direction = new Vector3(horizontal, 0f, 0f);
```

Vector xác định chuyển động chỉ diễn ra trên trục X. Hai giá trị Y và Z bằng 0, do đó đối tượng không đổi độ cao hoặc vị trí theo chiều tiến/lùi.

Cập nhật vị trí

```
transform.Translate(
    direction * speed * Time.deltaTime,
    Space.World
);
```

Lượng dịch chuyển phụ thuộc đồng thời vào hướng người chơi chọn, tốc độ được cấu hình và khoảng thời gian giữa các frame.

### 5.4. Chạy thử

Nhấn `Play`, sau đó chọn Game view và thử:

| Thao tác        | Kết quả mong đợi           |
| --------------- | -------------------------- |
| Giữ A           | Player di chuyển sang trái |
| Giữ D           | Player di chuyển sang phải |
| Thả phím        | Player dừng                |
| Tăng `speed`    | Player di chuyển nhanh hơn |
| Đặt `speed = 0` | Player không di chuyển     |

Nếu không thấy chuyển động, kiểm tra script đã gắn đúng GameObject, Game view đã nhận bàn phím và Active Input Handling phù hợp.

## 6. Mở rộng: Điều khiển hai chiều và giới hạn vị trí

### 6.1. Di chuyển trên mặt phẳng XZ

Để đối tượng di chuyển theo cả chiều ngang và chiều tiến/lùi, cần đọc hai trục:

```
float horizontal = Input.GetAxisRaw("Horizontal");
float vertical = Input.GetAxisRaw("Vertical");

Vector3 direction = new Vector3(
    horizontal,
    0f,
    vertical
);
```

Nếu người chơi nhấn đồng thời W và D, vector đầu vào là `(1, 0, 1)` với độ dài \\(\sqrt{2}\\). Khi không chuẩn hóa, chuyển động theo đường chéo sẽ nhanh hơn chuyển động theo một trục.

Có thể giới hạn độ lớn của vector:

```
direction = Vector3.ClampMagnitude(direction, 1f);
```

Cách này đảm bảo độ lớn của hướng di chuyển không vượt quá 1, đồng thời giữ nguyên những giá trị nhỏ hơn 1.

### 6.2. Sử dụng Mathf.Clamp()

Trong một Scene có vùng di chuyển giới hạn, Player không nên ra ngoài bản đồ.

`Mathf.Clamp()` giới hạn một giá trị trong khoảng xác định.

Ví dụ:

```
float x = Mathf.Clamp(
    transform.position.x,
    -8f,
    8f
);
```

Nếu vị trí X vượt quá 8, kết quả sẽ được giới hạn về 8. Nếu nhỏ hơn -8, giá trị sẽ được giới hạn về -8.

### 6.3. Script hoàn chỉnh mở rộng

Thay nội dung `SimpleMover` bằng:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;
    [SerializeField] private float xLimit = 8f;
    [SerializeField] private float zLimit = 5f;

    void Update()
    {
        // Đọc tín hiệu từ bàn phím
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        // Tạo hướng di chuyển trên mặt phẳng XZ
        Vector3 direction = new Vector3(
            horizontal,
            0f,
            vertical
        );

        // Tránh di chuyển nhanh hơn theo đường chéo
        direction = Vector3.ClampMagnitude(direction, 1f);

        // Cập nhật vị trí theo thời gian
        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );

        // Giới hạn vị trí theo tọa độ thế giới
        Vector3 position = transform.position;

        position.x = Mathf.Clamp(
            position.x,
            -xLimit,
            xLimit
        );

        position.z = Mathf.Clamp(
            position.z,
            -zLimit,
            zLimit
        );

        transform.position = position;
    }
}
```

Sau khi gắn script, người học có thể điều chỉnh các giá trị trong Inspector mà không cần sửa lại mã.

| Tham số | Giá trị thử nghiệm | Tác dụng                   |
| ------- | ------------------ | -------------------------- |
| Speed   | 4                  | Tốc độ di chuyển           |
| X Limit | 8                  | Giới hạn ngang từ -8 đến 8 |
| Z Limit | 5                  | Giới hạn dọc từ -5 đến 5   |

Các giới hạn này áp dụng cho vị trí tâm Transform, không tự tính kích thước hình học của đối tượng.

Lưu ý: Ví dụ phù hợp với đối tượng được điều khiển trực tiếp bằng Transform, không phải mô hình điều khiển xe bằng vật lý. Nếu cần va chạm, gia tốc, lực hoặc phản hồi vật lý chính xác, cần thiết kế cơ chế điều khiển bằng Rigidbody thích hợp thay vì tự ý trộn dịch chuyển Transform với hệ thống vật lý.

## 7. Kiểm thử và đánh giá kết quả

### 7.1. Kịch bản kiểm thử

Sau khi hoàn thành script mở rộng, thực hiện các trường hợp sau:

| Mã   | Tình huống             | Kết quả mong đợi                                                        |
| ---- | ---------------------- | ----------------------------------------------------------------------- |
| TC01 | Nhấn A                 | Di chuyển sang trái                                                     |
| TC02 | Nhấn D                 | Di chuyển sang phải                                                     |
| TC03 | Nhấn W                 | Di chuyển về phía trước                                                 |
| TC04 | Nhấn S                 | Di chuyển về phía sau                                                   |
| TC05 | Nhấn W + D             | Di chuyển chéo, không tăng tốc độ ngoài mức giới hạn                    |
| TC06 | Thả mọi phím           | Dừng di chuyển                                                          |
| TC07 | Di chuyển tới biên X   | Không vượt khỏi giới hạn tâm X                                          |
| TC08 | Di chuyển tới biên Z   | Không vượt khỏi giới hạn tâm Z                                          |
| TC09 | Thay đổi FPS           | Tốc độ trung bình theo thời gian tương đương trong điều kiện thử nghiệm |
| TC10 | Điều khiển gần vật cản | Quan sát xem đối tượng có đi xuyên qua vật cản hay không                |

Ở TC10, không nên mặc định rằng việc có Collider đồng nghĩa đối tượng sẽ bị chặn khi dùng `Transform.Translate()`. Đây là phép thử để nhận biết giới hạn của phương pháp di chuyển đang sử dụng.

### 7.2. Ghi lại kết quả kiểm thử

Với mỗi trường hợp, ghi nhận:

Kết quả mong đợi → Kết quả thực tế → Bằng chứng → Nguyên nhân hoặc nhận xét.

Ví dụ biểu mẫu:

| Trường     | Nội dung                           |
| ---------- | ---------------------------------- |
| Test Case  | TC07                               |
| Hành động  | Giữ phím D đến biên phải           |
| Mong đợi   | Tâm Player không vượt X = 8        |
| Thực tế    | Điền kết quả quan sát              |
| Bằng chứng | Ảnh Inspector hoặc video Game view |
| Kết luận   | Pass / Fail và giải thích          |

Để kiểm tra FPS, có thể thử giới hạn tốc độ khung hình trong các lần chạy riêng biệt, sau đó so sánh quãng đường trong cùng một khoảng thời gian. Cần tránh kết luận chỉ từ cảm giác nhìn chuyển động.

## 8. Lỗi thường gặp và cách khắc phục

| Hiện tượng                             | Nguyên nhân có thể                                                           | Hướng kiểm tra                                                |
| -------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Nhấn phím nhưng Player không di chuyển | Script chưa gắn, Game view chưa nhận input hoặc Input Manager không được bật | Kiểm tra Inspector, Console, Input Handling                   |
| Player di chuyển quá nhanh             | Quên `Time.deltaTime` hoặc `speed` quá lớn                                   | Kiểm tra phép nhân và giá trị Speed                           |
| Di chuyển sai hướng sau khi xoay       | Nhầm giữa `Space.World` và `Space.Self`                                      | Kiểm tra Rotation và hệ tọa độ                                |
| Di chuyển chéo nhanh hơn               | Vector hướng chưa giới hạn độ lớn                                            | Sử dụng `Vector3.ClampMagnitude()`                            |
| Player vượt khỏi bản đồ                | Chưa giới hạn vị trí                                                         | Kiểm tra `Mathf.Clamp()` và các giới hạn                      |
| Player đi xuyên vật cản                | Dùng Transform để cập nhật vị trí trực tiếp                                  | Xem xét cơ chế di chuyển dựa trên vật lý                      |
| Input System báo lỗi                   | Sử dụng API Legacy trong dự án không bật Input Manager                       | Kiểm tra Active Input Handling hoặc chuyển sang Input Actions |

### Quy trình debug

\#chatgpt-mermaid-\_r_m3\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_m3\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m3\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m3\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_m3\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_m3\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_m3\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_m3\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_m3\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_m3\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m3\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m3\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_m3\_ p{margin:0;}#chatgpt-mermaid-\_r_m3\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_m3\_ .label text,#chatgpt-mermaid-\_r_m3\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ .node rect,#chatgpt-mermaid-\_r_m3\_ .node circle,#chatgpt-mermaid-\_r_m3\_ .node ellipse,#chatgpt-mermaid-\_r_m3\_ .node polygon,#chatgpt-mermaid-\_r_m3\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .rough-node .label text,#chatgpt-mermaid-\_r_m3\_ .node .label text,#chatgpt-mermaid-\_r_m3\_ .image-shape .label,#chatgpt-mermaid-\_r_m3\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_m3\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .rough-node .label,#chatgpt-mermaid-\_r_m3\_ .node .label,#chatgpt-mermaid-\_r_m3\_ .image-shape .label,#chatgpt-mermaid-\_r_m3\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_m3\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_m3\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m3\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m3\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_m3\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m3\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m3\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m3\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_m3\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_m3\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m3\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_m3\_ .icon-shape,#chatgpt-mermaid-\_r_m3\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m3\_ .icon-shape p,#chatgpt-mermaid-\_r_m3\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_m3\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_m3\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m3\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_m3\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_m3\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_m3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_m3\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_m3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_m3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m3\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_m3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m3\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m3\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m3\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_m3\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_m3\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .node rect,#chatgpt-mermaid-\_r_m3\_ .node circle,#chatgpt-mermaid-\_r_m3\_ .node ellipse,#chatgpt-mermaid-\_r_m3\_ .node polygon,#chatgpt-mermaid-\_r_m3\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m3\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_m3\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_m3\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_m3\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m3\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện hành vi bất thườngTái hiện lỗiĐọc thông báo trong ConsoleKiểm tra script, Component vàInspectorĐưa ra giả thuyết nguyên nhânThay đổi một yếu tốChạy thử lạiLỗi đã được giải quyết?Ghi nhận cách khắc phụcCóKhông

Khi debug, nên thay đổi từng yếu tố độc lập để xác định nguyên nhân. Chẳng hạn, nếu Player di chuyển quá nhanh, trước tiên kiểm tra `speed` và `Time.deltaTime` thay vì đồng thời sửa cả Transform, Input và Camera.

## 9. Bài tập thực hành củng cố

### Bài tập 1 — Điều khiển cơ bản

Tạo một GameObject có thể di chuyển trái và phải.

Yêu cầu: Sử dụng `Input.GetAxisRaw()`, `Vector3`, `Time.deltaTime` và `transform.Translate()`.

Tiêu chí hoàn thành: GameObject phản hồi đúng các phím điều khiển, dừng khi thả phím và có thể chỉnh tốc độ trong Inspector.

### Bài tập 2 — Giới hạn sân chơi

Mở rộng script để Player có thể di chuyển trên mặt phẳng XZ nhưng không được vượt qua một vùng giới hạn do người học tự thiết lập.

Yêu cầu: Sử dụng `Mathf.Clamp()` và kiểm tra cả bốn biên.

### Bài tập 3 — Thử nghiệm nâng cao

Xây dựng một khu vực điều khiển xe hoặc nhân vật đơn giản với mặt đất, camera quan sát và ít nhất một vật cản.

Kiểm tra sự khác biệt giữa di chuyển theo tọa độ World và Local khi xoay GameObject, đồng thời quan sát giới hạn của việc cập nhật vị trí trực tiếp bằng Transform.

## 10. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức — 5 câu

0/5 đã trả lời

Câu 1. Vì sao cần nhân tốc độ với Time.deltaTime khi cập nhật vị trí trong Update()?

A. Để làm cho đối tượng luôn di chuyển nhanh hơn

B. Để tốc độ di chuyển ít phụ thuộc vào số frame mỗi giây

C. Để tự động phát hiện va chạm

D. Để khóa hướng xoay của GameObject

Câu 2. Khi sử dụng cấu hình bàn phím mặc định của Input Manager cũ, nhấn A thường trả về giá trị Horizontal nào?

A. -1

B. 0

C. 1

D. 2

Câu 3. Muốn giới hạn giá trị tọa độ X trong khoảng từ -8 đến 8, cách nào phù hợp nhất?

A. Input.GetAxisRaw(x)

B. Time.deltaTime = 8

C. transform.Rotate(Vector3.right)

D. Mathf.Clamp(x, -8f, 8f)

Câu 4. Một GameObject đã xoay 90 độ quanh trục Y. Nếu muốn nó dịch chuyển theo trục Z dương toàn cục, nên chọn phương án nào?

A. Space.Self với Vector3.forward

B. Chỉ cần tăng speed

C. Space.World với Vector3.forward

D. Luôn dùng Rigidbody.AddForce

Câu 5. Player đi xuyên qua một vật cản khi di chuyển trực tiếp bằng Transform. Nhận định nào phù hợp nhất?

A. Tăng FPS sẽ đảm bảo Player không xuyên vật cản

B. Cần xem xét cơ chế di chuyển có tương tác vật lý thay vì mặc định Transform sẽ chặn va chạm

C. Chỉ cần đổi tên GameObject thành Player

D. Mathf.Clamp tự động xử lý mọi Collider

Nộp bài và xem giải thích

## 11. Checklist hoàn thành

Tiến độ thực hành

0/10

Tạo được GameObject Player trong Scene 3D.

Viết và gắn script SimpleMover thành công.

Điều khiển đối tượng theo trục ngang bằng bàn phím.

Mở rộng để di chuyển trên mặt phẳng XZ.

Giải thích được vai trò của Time.deltaTime.

Phân biệt được Space.World và Space.Self.

Giới hạn được vị trí bằng Mathf.Clamp().

Kiểm tra được lỗi và đọc được Console.

Lưu ảnh hoặc video minh chứng quá trình chạy thử.

Hoàn thành 5 câu hỏi ôn tập.

## 12. Tổng kết

Điều khiển đối tượng trong Unity là quá trình kết hợp tín hiệu đầu vào với các phép tính chuyển động và cập nhật vị trí.

Bốn thành phần cốt lõi cần ghi nhớ là:

| Thành phần              | Vai trò chính                         |
| ----------------------- | ------------------------------------- |
| `Input.GetAxisRaw()`    | Đọc hướng điều khiển                  |
| `Vector3`               | Biểu diễn hướng dịch chuyển           |
| `Time.deltaTime`        | Tính lượng dịch chuyển theo thời gian |
| `transform.Translate()` | Cập nhật vị trí GameObject            |

Ngoài ra, `Mathf.Clamp()` giúp giới hạn vùng di chuyển, trong khi việc lựa chọn `Space.World` hoặc `Space.Self` quyết định hướng dịch chuyển được diễn giải theo hệ tọa độ nào.

Sau khi nắm vững những kiến thức này, người học có thể xây dựng cơ chế điều khiển cơ bản cho các trò chơi 3D và tiếp tục phát triển những hệ thống tương tác phức tạp hơn.

Ghi chú: Đây là bài học tiếng Việt tự biên soạn phục vụ thực hành, không phải bản dịch chính thức của Unity. Các ví dụ sử dụng cách điều khiển bằng Transform và Input Manager cũ; cần đối chiếu thiết lập dự án và hướng dẫn tại [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com) khi thực hành với Unity 6.3.