# Bài 01 — Course Introduction: Giới thiệu khóa học lập trình Unity

Pathway: Junior Programmer Module: Player Control Loại bài học: Tutorial Phiên bản: Unity 6.3 Nguồn tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

### Giới thiệu

Trong quá trình phát triển trò chơi, khả năng điều khiển nhân vật là một trong những yếu tố quan trọng nhất tạo nên trải nghiệm tương tác.

Khi người chơi nhấn phím di chuyển, trò chơi cần xác định hướng di chuyển, tính toán tốc độ và cập nhật vị trí nhân vật một cách chính xác.

Mission Player Control thuộc lộ trình Junior Programmer tập trung xây dựng nền tảng lập trình điều khiển đối tượng trong Unity thông qua ngôn ngữ C#.

Bài mở đầu giúp người học làm quen với quy trình xây dựng, chạy thử và kiểm tra hệ thống điều khiển trước khi triển khai các cơ chế phức tạp hơn.

### Ví dụ thực tế

Xét một trò chơi 3D đơn giản có nhân vật đứng trên mặt phẳng.

Người chơi có thể:

- Nhấn `W` để di chuyển về phía trước.
- Nhấn `S` để di chuyển về phía sau.
- Nhấn `A` để di chuyển sang trái.
- Nhấn `D` để di chuyển sang phải.
- Thả phím để nhân vật ngừng di chuyển.
- Di chuyển đến ranh giới bản đồ mà không vượt ra ngoài khu vực cho phép.

Để xây dựng cơ chế này, cần kết hợp nhiều thành phần của Unity, từ GameObject, Transform đến C# Script và hệ thống Input.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của hệ thống điều khiển người chơi trong trò chơi Unity.
2. Phân biệt Scene, GameObject, Component và Play Mode.
3. Mô tả cách Unity tiếp nhận Input và chuyển thành chuyển động của nhân vật.
4. Áp dụng `Time.deltaTime` để tính chuyển động theo thời gian.
5. Sử dụng `Mathf.Clamp()` để giới hạn phạm vi di chuyển.
6. Phân biệt điều khiển bằng Transform và điều khiển bằng Rigidbody.
7. Kiểm thử và phát hiện những lỗi cơ bản liên quan đến Input, tốc độ và hướng di chuyển.

## 3. Các khái niệm nền tảng

### 3.1. Scene, GameObject và Component

Trong Unity, trò chơi được tổ chức thông qua những thành phần có mối quan hệ với nhau.

| Khái niệm  | Giải thích                                             | Ví dụ                            |
| ---------- | ------------------------------------------------------ | -------------------------------- |
| Scene      | Không gian chứa các đối tượng trong trò chơi           | Màn chơi có nhân vật và mặt đất  |
| GameObject | Đối tượng cơ bản trong Scene                           | Player, Camera, Ground           |
| Component  | Thành phần bổ sung dữ liệu hoặc hành vi cho GameObject | Transform, Rigidbody, Collider   |
| Transform  | Quản lý vị trí, góc xoay và tỉ lệ                      | Vị trí nhân vật `(0, 0, 0)`      |
| Inspector  | Giao diện xem và chỉnh sửa thuộc tính                  | Thay đổi tốc độ di chuyển        |
| Play Mode  | Chế độ chạy thử trò chơi trong Unity Editor            | Nhấn Play và điều khiển nhân vật |

Mỗi GameObject luôn có một Transform. Những Component khác được bổ sung tùy theo chức năng của đối tượng.

Ví dụ, một nhân vật có thể được cấu thành như sau:

```
Player (GameObject)
│
├── Transform
│   └── Position, Rotation, Scale
│
├── Mesh Renderer
│   └── Hiển thị hình ảnh 3D
│
├── Collider
│   └── Hình dạng phục vụ va chạm
│
└── PlayerController (C# Script)
    └── Xử lý điều khiển
```

`PlayerController` là tên minh họa cho Script do người học tự tạo.

### 3.2. Hệ thống Input

Input là dữ liệu đầu vào từ người chơi thông qua bàn phím, chuột, tay cầm hoặc thiết bị tương tác khác.

Unity hỗ trợ hai hướng xử lý Input phổ biến:

| Tiêu chí      | Input Manager cũ                      | Input System mới                        |
| ------------- | ------------------------------------- | --------------------------------------- |
| Cách tiếp cận | Đọc trực tiếp trạng thái trục và phím | Sử dụng Input Actions                   |
| Ví dụ API     | `Input.GetAxisRaw()`                  | `InputAction`                           |
| Cấu hình      | Input Manager trong Project Settings  | Input Actions và thiết lập Input System |
| Đặc điểm      | Đơn giản với ví dụ cơ bản             | Linh hoạt khi hỗ trợ nhiều thiết bị     |

Hai hệ thống có cách cấu hình khác nhau. Một dự án sử dụng Input System mới không nhất thiết chạy được đoạn code dành cho Input Manager cũ nếu thiết lập tương ứng chưa được bật.

Vì vậy, trước khi lập trình điều khiển, cần xác định hệ thống Input mà dự án đang sử dụng.

### 3.3. Transform và Rigidbody

Unity cung cấp nhiều cách làm cho GameObject di chuyển.

Di chuyển bằng Transform

Thay đổi trực tiếp vị trí của đối tượng thông qua `transform.position` hoặc các phương thức liên quan.

Cách này phù hợp với những ví dụ đơn giản không yêu cầu giải quyết va chạm vật lý.

Di chuyển bằng Rigidbody

Rigidbody cho phép đối tượng tham gia mô phỏng vật lý, chịu tác động của trọng lực, lực đẩy và hệ thống va chạm.

| Transform                    | Rigidbody                                   |
| ---------------------------- | ------------------------------------------- |
| Thay đổi vị trí trực tiếp    | Di chuyển trong hệ thống vật lý             |
| Phù hợp chuyển động đơn giản | Phù hợp chuyển động có tương tác vật lý     |
| Không tự giải quyết va chạm  | Có thể xử lý va chạm khi cấu hình đúng      |
| Thường cập nhật theo frame   | Các thao tác vật lý thường theo FixedUpdate |

Lưu ý: Không nên đồng thời điều khiển vị trí của một Rigidbody động bằng cách ghi Transform trực tiếp và sử dụng các phương thức vật lý mà không có thiết kế rõ ràng. Điều này có thể tạo ra hành vi va chạm thiếu ổn định.

## 4. Nguyên lý điều khiển chuyển động

### 4.1. Luồng xử lý điều khiển

Sơ đồ luồng dữ liệu điều khiển người chơi trong Unity

Khi người chơi nhấn phím, hệ thống Input xác định hướng mong muốn. Script sử dụng dữ liệu này để tính toán sự thay đổi vị trí, sau đó cập nhật GameObject.

Quá trình được lặp lại trong lúc trò chơi hoạt động.

### 4.2. Tốc độ di chuyển và Time.deltaTime

Một lỗi phổ biến khi lập trình chuyển động là làm cho tốc độ nhân vật phụ thuộc vào số khung hình mỗi giây (FPS).

Ví dụ, nếu nhân vật di chuyển `0.1` đơn vị ở mỗi frame:

- 30 FPS: di chuyển khoảng 3 đơn vị mỗi giây.
- 60 FPS: di chuyển khoảng 6 đơn vị mỗi giây.
- 120 FPS: di chuyển khoảng 12 đơn vị mỗi giây.

Như vậy, cùng một hành động nhưng tốc độ nhân vật lại thay đổi tùy hiệu suất thiết bị.

Để giải quyết vấn đề này khi cập nhật vị trí trực tiếp theo frame, sử dụng `Time.deltaTime`.

Công thức:

\\[ \Delta x = v \times \Delta t \\]

Trong đó:

| Ký hiệu        | Ý nghĩa                               |
| -------------- | ------------------------------------- |
| \\(\Delta x\\) | Quãng đường di chuyển trong một frame |
| \\(v\\)        | Tốc độ tính theo đơn vị mỗi giây      |
| \\(\Delta t\\) | Thời gian giữa hai frame              |

Ví dụ:

```
float speed = 5f;

transform.Translate(
    Vector3.forward * speed * Time.deltaTime
);
```

`Time.deltaTime` giúp chuyển động được tính theo thời gian thực thay vì cố định một khoảng cách cho mỗi frame.

Điều này làm cho tốc độ trung bình ổn định hơn khi FPS thay đổi.

### 4.3. Giới hạn di chuyển bằng Clamp

Trong nhiều trò chơi, nhân vật không được phép đi ra khỏi bản đồ.

Unity cung cấp `Mathf.Clamp()` để giữ một giá trị trong khoảng xác định.

Cú pháp:

```
Mathf.Clamp(value, min, max);
```

Giả sử tọa độ X của nhân vật chỉ được phép nằm trong đoạn từ `-5` đến `5`.

```
float x = transform.position.x;

x = Mathf.Clamp(x, -5f, 5f);
```

Nếu giá trị nhỏ hơn `-5`, Clamp trả về `-5`. Nếu lớn hơn `5`, kết quả là `5`. Những giá trị nằm trong khoảng được giữ nguyên.

## 5. Thực hành: Tạo điều khiển nhân vật đơn giản

### 5.1. Chuẩn bị Scene

Mục tiêu là xây dựng một ví dụ điều khiển nhân vật di chuyển ngang, sau đó mở rộng thành di chuyển hai chiều.

Thực hiện trong Unity Editor:

1. Tạo một Scene 3D mới.
2. Tạo một `Plane` làm mặt đất.
3. Tạo một `Capsule` đại diện cho nhân vật.
4. Đổi tên Capsule thành `Player`.
5. Đặt Player ở vị trí phù hợp, chẳng hạn `(0, 1, 0)`.
6. Tạo một C# Script có tên `PlayerController`.
7. Gắn Script vào GameObject `Player`.

Để sử dụng đoạn code bên dưới, cấu hình Active Input Handling hỗ trợ Input Manager cũ, chẳng hạn `Input Manager (Old)` hoặc `Both`.

### 5.2. Điều khiển di chuyển ngang

Mở `PlayerController.cs` và nhập:

```
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField]
    private float moveSpeed = 5f;

    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");

        float movement =
            horizontal * moveSpeed * Time.deltaTime;

        Vector3 position = transform.position;

        position.x += movement;

        position.x = Mathf.Clamp(
            position.x,
            -5f,
            5f
        );

        transform.position = position;
    }
}
```

Giải thích những thành phần quan trọng:

| Thành phần           | Chức năng                                         |
| -------------------- | ------------------------------------------------- |
| `MonoBehaviour`      | Lớp cơ sở thường dùng để tạo Script Component     |
| `SerializeField`     | Cho phép chỉnh sửa trường private trong Inspector |
| `Update()`           | Được gọi mỗi frame khi Component hoạt động        |
| `Input.GetAxisRaw()` | Đọc giá trị trục đầu vào của Input Manager cũ     |
| `moveSpeed`          | Xác định tốc độ di chuyển                         |
| `Time.deltaTime`     | Điều chỉnh khoảng dịch chuyển theo thời gian      |
| `Mathf.Clamp()`      | Giới hạn tọa độ X                                 |
| `transform.position` | Đọc và cập nhật vị trí nhân vật                   |

Đối với trục `Horizontal` được cấu hình mặc định trong Input Manager cũ, phím `A` hoặc mũi tên trái thường cho giá trị `-1`, còn `D` hoặc mũi tên phải cho giá trị `1`.

### 5.3. Mở rộng điều khiển thành hai chiều

Khi điều khiển một chiều hoạt động ổn định, có thể mở rộng bằng cách bổ sung trục `Vertical`.

Đối với trò chơi 3D có mặt đất nằm trong mặt phẳng XZ:

- Trục X đại diện cho hướng trái/phải.
- Trục Z đại diện cho hướng trước/sau.
- Trục Y thường đại diện cho chiều cao.

Ví dụ xử lý hướng:

```
float horizontal = Input.GetAxisRaw("Horizontal");
float vertical = Input.GetAxisRaw("Vertical");

Vector3 direction = new Vector3(
    horizontal,
    0f,
    vertical
).normalized;

Vector3 movement =
    direction * moveSpeed * Time.deltaTime;
```

Có thể sử dụng `movement` này thay cho phép tính dịch chuyển ngang trong ví dụ trước. Khi đó cần cập nhật cả X và Z, đồng thời giới hạn từng trục nếu bản đồ có ranh giới.

Thuộc tính `.normalized` giúp hướng chéo không tạo ra tốc độ lớn hơn khi nhấn đồng thời hai phím di chuyển.

## 6. Kiểm thử và đánh giá kết quả

Một hệ thống điều khiển chỉ được xem là hoạt động đúng khi đã kiểm tra bằng những tình huống cụ thể.

| Tình huống kiểm thử        | Kết quả mong đợi                         |
| -------------------------- | ---------------------------------------- |
| Nhấn A                     | Nhân vật di chuyển sang trái             |
| Nhấn D                     | Nhân vật di chuyển sang phải             |
| Thả tất cả phím            | Nhân vật dừng di chuyển                  |
| Giữ phím khi chạm giới hạn | Nhân vật không vượt quá phạm vi quy định |
| Chạy ở FPS khác nhau       | Tốc độ trung bình tương đương            |
| Thay đổi moveSpeed         | Tốc độ thay đổi tương ứng                |

Trong quá trình kiểm thử, nên ghi lại kết quả theo mẫu:

| Nội dung         | Ghi chép                              |
| ---------------- | ------------------------------------- |
| Tình huống       | Nhấn giữ D trong 2 giây               |
| Kết quả mong đợi | Player di chuyển về phía X dương      |
| Kết quả thực tế  | Điền sau khi chạy thử                 |
| Minh chứng       | Ảnh Game View hoặc Console            |
| Nhận xét         | Giải thích kết quả và sai lệch nếu có |

Chú ý về va chạm: Ví dụ sử dụng Transform ở trên chưa triển khai cơ chế giải quyết va chạm bằng vật lý. Nếu Player đi xuyên qua một vật cản, cần xem xét phương pháp di chuyển và cấu hình Rigidbody/Collider thay vì chỉ tăng kích thước Collider.

## 7. Những lỗi thường gặp

### 7.1. Nhân vật di chuyển nhanh hơn khi FPS tăng

Nguyên nhân: Cập nhật vị trí bằng một khoảng cách cố định ở mỗi frame mà không nhân với `Time.deltaTime`.

Khắc phục: Tính khoảng dịch chuyển theo tốc độ mỗi giây và thời gian giữa các frame.

### 7.2. Nhấn phím nhưng nhân vật không di chuyển

Nguyên nhân có thể:

- Script chưa gắn vào Player.
- Component đang bị vô hiệu hóa.
- Input System được cấu hình không tương thích với cách đọc Input.
- Có lỗi biên dịch trong Console.
- Game View chưa nhận được thao tác bàn phím.

Khắc phục: Kiểm tra GameObject, Script, Console và thiết lập Input của dự án.

### 7.3. Nhân vật di chuyển sai hướng

Nguyên nhân: Nhầm giữa hệ tọa độ Local và World.

Ví dụ, `Vector3.forward` kết hợp với `transform.Translate()` mặc định có thể di chuyển theo hướng cục bộ của đối tượng. Nếu Player đã xoay, hướng chuyển động có thể khác dự đoán.

Khắc phục: Xác định rõ hướng di chuyển dự kiến thuộc hệ tọa độ Local hay World.

### 7.4. Thay đổi Inspector nhưng kết quả không như mong muốn

Một số nguyên nhân thường gặp là Script sử dụng giá trị khác với giá trị người học vừa chỉnh sửa, có Script khác cùng tác động lên Transform hoặc thay đổi được thực hiện trong Play Mode.

Những chỉnh sửa trong Play Mode thường không được giữ lại sau khi thoát chế độ chạy thử.

### Quy trình debug đề xuất

\#chatgpt-mermaid-\_r_u2\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_u2\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_u2\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_u2\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_u2\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_u2\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_u2\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_u2\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_u2\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_u2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_u2\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_u2\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_u2\_ p{margin:0;}#chatgpt-mermaid-\_r_u2\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_u2\_ .label text,#chatgpt-mermaid-\_r_u2\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ .node rect,#chatgpt-mermaid-\_r_u2\_ .node circle,#chatgpt-mermaid-\_r_u2\_ .node ellipse,#chatgpt-mermaid-\_r_u2\_ .node polygon,#chatgpt-mermaid-\_r_u2\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .rough-node .label text,#chatgpt-mermaid-\_r_u2\_ .node .label text,#chatgpt-mermaid-\_r_u2\_ .image-shape .label,#chatgpt-mermaid-\_r_u2\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_u2\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .rough-node .label,#chatgpt-mermaid-\_r_u2\_ .node .label,#chatgpt-mermaid-\_r_u2\_ .image-shape .label,#chatgpt-mermaid-\_r_u2\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_u2\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_u2\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_u2\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_u2\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_u2\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_u2\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_u2\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_u2\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_u2\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_u2\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_u2\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_u2\_ .icon-shape,#chatgpt-mermaid-\_r_u2\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_u2\_ .icon-shape p,#chatgpt-mermaid-\_r_u2\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_u2\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_u2\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_u2\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_u2\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_u2\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_u2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_u2\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_u2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_u2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_u2\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_u2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_u2\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_u2\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_u2\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_u2\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_u2\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .node rect,#chatgpt-mermaid-\_r_u2\_ .node circle,#chatgpt-mermaid-\_r_u2\_ .node ellipse,#chatgpt-mermaid-\_r_u2\_ .node polygon,#chatgpt-mermaid-\_r_u2\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_u2\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_u2\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_u2\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_u2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_u2\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện hành vi bất thườngTái hiện lỗiKiểm tra ConsoleKiểm tra Script và ComponentKiểm tra Input và InspectorĐưa ra một giả thuyếtChỉ thay đổi một yếu tốChạy thử lạiLỗi đã hết?Ghi lại nguyên nhân và cáchsửaChưaRồi

Quy trình này giúp hạn chế tình trạng sửa nhiều phần cùng lúc nhưng không biết thay đổi nào thực sự giải quyết được lỗi.

## 8. Bài tập củng cố

### Bài tập 1 — Điều khiển một chiều

Tạo một nhân vật chỉ có thể di chuyển trên trục X.

Yêu cầu:

- Điều khiển bằng hai phím A và D.
- Tốc độ điều chỉnh được trong Inspector.
- Nhân vật không vượt ngoài khoảng X từ `-5` đến `5`.
- Giải thích vai trò của `Time.deltaTime`.

### Bài tập 2 — Di chuyển hai chiều

Mở rộng hệ thống để nhân vật có thể di chuyển trên mặt phẳng XZ bằng bốn phím W, A, S và D.

Yêu cầu:

- Di chuyển đúng bốn hướng.
- Không tăng tốc bất thường khi di chuyển chéo.
- Giới hạn cả tọa độ X và Z.
- Kiểm tra phản hồi khi người chơi nhấn và thả phím.

### Bài tập 3 — Phân tích lỗi

Tạo một ví dụ di chuyển không sử dụng `Time.deltaTime`.

So sánh với phiên bản đã sử dụng `Time.deltaTime` trong những điều kiện FPS khác nhau.

Giải thích nguyên nhân tạo ra sự khác biệt và ghi lại bằng hình ảnh hoặc video ngắn.

## 9. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức — 5 câu

0/5 đã trả lời

Câu 1. Trong Unity, thành phần nào trực tiếp lưu vị trí, góc xoay và tỉ lệ của GameObject?

A. Collider

B. Transform

C. Camera

D. Input Action

Câu 2. Tại sao nên sử dụng Time.deltaTime khi cập nhật vị trí trực tiếp trong Update()?

A. Để tự động phát hiện va chạm

B. Để tăng số lượng frame

C. Để khóa tốc độ trò chơi ở 60 FPS

D. Để tính khoảng di chuyển dựa trên thời gian giữa các frame

Câu 3. Nếu dùng Mathf.Clamp(8f, -5f, 5f), giá trị trả về là bao nhiêu?

A. 5

B. 8

C. -5

D. 0

Câu 4. Khi nhân vật cần tương tác với lực và va chạm vật lý, thành phần nào thường phù hợp?

A. Mesh Renderer

B. Audio Source

C. Rigidbody

D. Canvas

Câu 5. Sau khi nhân vật không phản hồi phím điều khiển, cách kiểm tra nào hợp lý nhất?

A. Xóa Scene và tạo lại toàn bộ dự án

B. Kiểm tra Console, Script, Component và cấu hình Input

C. Tăng tốc độ di chuyển lên rất cao

D. Thay đổi ngẫu nhiên nhiều thông số

Chấm điểmLàm lại

## 10. Checklist hoàn thành bài học

Tiến độ bài học

0/8

Giải thích được vai trò của Player Control trong Unity.

Phân biệt được Scene, GameObject, Component và Transform.

Xác định được hệ thống Input đang sử dụng trong dự án.

Tạo và chạy được Script điều khiển nhân vật.

Giải thích được chức năng của Time.deltaTime và Mathf.Clamp().

Phân biệt được điều khiển bằng Transform và Rigidbody.

Kiểm tra được ít nhất một lỗi và ghi lại cách khắc phục.

Lưu ảnh hoặc video minh chứng kết quả thực hành.

## 11. Tổng kết

Bài Course Introduction đặt nền tảng cho việc lập trình điều khiển người chơi trong Unity.

Ba nguyên tắc quan trọng cần nắm vững là:

- Input quyết định hành động: Hệ thống phải đọc đúng thao tác và chuyển thành hướng di chuyển tương ứng.
- Chuyển động phải được tính toán đúng: Khi cập nhật theo frame, sử dụng `Time.deltaTime` để tính khoảng dịch chuyển dựa trên thời gian; sử dụng Clamp để giới hạn vị trí khi cần.
- Kiểm thử là một phần của lập trình: Không chỉ quan sát nhân vật có di chuyển hay không, mà còn cần kiểm tra tốc độ, hướng, ranh giới và khả năng tương tác.

Khi nắm được những nguyên tắc này, người học đã có cơ sở để phát triển các hệ thống điều khiển phức tạp hơn như lái phương tiện, điều khiển nhân vật 3D và tương tác với môi trường vật lý.

Tài liệu tham khảo: [Unity Learn — Junior Programmer: Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

Ghi chú: Đây là bài học tiếng Việt tự biên soạn để thực hành và củng cố kiến thức, không phải bản dịch chính thức của Unity. Giao diện và thiết lập dự án có thể thay đổi giữa các phiên bản Unity.