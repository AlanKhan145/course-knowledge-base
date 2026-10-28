# Bài 07 — Lab 3: Player Control

Junior Programmer

Sound and Effects

Unity 6.3

Tutorial

Chủ đề: Điều khiển nhân vật, hướng di chuyển và tốc độ trong Unity.

Nguồn tham khảo: [Unity Learn — Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)

Đây là bài thực hành tự biên soạn dựa trên chủ đề công khai của Unity Learn, không phải bản dịch chính thức hoặc bản ghi đầy đủ của bài học gốc.

## 1. Tổng quan bài học

Trong trò chơi, người chơi cần điều khiển nhân vật bằng bàn phím hoặc thiết bị nhập liệu. Unity cung cấp nhiều phương pháp để đọc tín hiệu điều khiển và cập nhật chuyển động của GameObject.

Ở bài thực hành Lab 3 — Player Control, chúng ta sẽ xây dựng một hệ thống điều khiển nhân vật đơn giản, tập trung vào ba yếu tố:

- Player Input: Nhận tín hiệu khi người chơi nhấn hoặc thả phím.
- Movement Direction: Xác định hướng di chuyển.
- Movement Speed: Kiểm soát tốc độ nhân vật và hạn chế sự phụ thuộc vào FPS.

Sơ đồ nguyên lý điều khiển nhân vật

Luồng xử lý cơ bản khi điều khiển nhân vật bằng cách thay đổi Transform.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, bạn có thể:

1. Giải thích cách Unity xử lý tín hiệu điều khiển từ bàn phím.
2. Viết script C# cho phép nhân vật di chuyển theo trục ngang.
3. Sử dụng `Time.deltaTime` để tính chuyển động theo thời gian.
4. Điều chỉnh tốc độ nhân vật trực tiếp trong Inspector.
5. Mở rộng điều khiển theo hai chiều và giới hạn phạm vi di chuyển.
6. Kiểm tra, phát hiện và sửa các lỗi điều khiển cơ bản.

## 3. Kiến thức trọng tâm

### 3.1. Các thành phần trong Unity

| Khái niệm  | Vai trò                                      |
| ---------- | -------------------------------------------- |
| Scene      | Không gian chứa các đối tượng của trò chơi   |
| GameObject | Đối tượng có thể được điều khiển trong Scene |
| Component  | Thành phần bổ sung dữ liệu hoặc hành vi      |
| Transform  | Quản lý vị trí, góc xoay và kích thước       |
| Script C#  | Định nghĩa hành vi điều khiển                |
| Inspector  | Điều chỉnh tham số của Component             |
| Play Mode  | Chạy thử và quan sát hành vi                 |

### 3.2. Tín hiệu điều khiển (Input)

Với Input Manager cũ, Unity cung cấp phương thức:

```
Input.GetAxisRaw("Horizontal");
```

Giá trị đầu vào thường là:

| Phím       | Giá trị | Hướng     |
| ---------- | ------- | --------- |
| A hoặc ←   | -1      | Sang trái |
| Không nhấn | 0       | Đứng yên  |
| D hoặc →   | 1       | Sang phải |

Ví dụ:

```
float horizontal = Input.GetAxisRaw("Horizontal");
```

Biến `horizontal` lưu hướng di chuyển theo trục X.

Lưu ý: `Input.GetAxisRaw` thuộc Input Manager cũ. Nếu dự án sử dụng Input System mới, cần cấu hình Input Actions để đọc tín hiệu.

### 3.3. Tốc độ di chuyển và Time.deltaTime

Một lỗi phổ biến khi bắt đầu lập trình Unity là cập nhật vị trí mà không tính đến thời gian giữa các frame.

Ví dụ chưa phù hợp:

```
transform.Translate(Vector3.right * speed);
```

Với cách này, mỗi frame nhân vật di chuyển một khoảng bằng `speed`, khiến tốc độ thực tế thay đổi theo FPS.

Cách phù hợp hơn khi cập nhật Transform trực tiếp:

```
transform.Translate(
    Vector3.right * speed * Time.deltaTime
);
```

Công thức:

\\[ \Delta x = v \times \Delta t \\]

Trong đó:

- \\(\Delta x\\): Quãng đường di chuyển trong một frame.
- \\(v\\): Tốc độ, đơn vị Unity/giây.
- \\(\Delta t\\): Thời gian giữa hai frame liên tiếp.

Ví dụ: Nếu tốc độ là 4 đơn vị/giây:

| FPS giả định | Thời gian/frame | Quãng đường/frame |
| ------------ | --------------- | ----------------- |
| 30 FPS       | 0,0333 giây     | 0,1333            |
| 60 FPS       | 0,0167 giây     | 0,0667            |
| 120 FPS      | 0,0083 giây     | 0,0333            |

Khi sử dụng `Time.deltaTime`, quãng đường đi được trong cùng một khoảng thời gian sẽ xấp xỉ bằng nhau nếu tốc độ không đổi.

### 3.4. Transform và Rigidbody

Hai phương pháp điều khiển chuyển động phổ biến:

| Transform                                     | Rigidbody                                |
| --------------------------------------------- | ---------------------------------------- |
| Thay đổi vị trí trực tiếp                     | Sử dụng hệ thống vật lý                  |
| Phù hợp điều khiển đơn giản                   | Phù hợp chuyển động cần tương tác vật lý |
| Thường cập nhật trong `Update()`              | Xử lý vật lý trong `FixedUpdate()`       |
| Không tự xử lý phản ứng va chạm vật lý đầy đủ | Có thể xử lý va chạm và lực              |

Không nên tùy tiện kết hợp việc thay đổi Transform trực tiếp với chuyển động dựa trên Rigidbody vì có thể gây ra hành vi vật lý khó kiểm soát.

## 4. Thực hành từng bước

### Bước 1. Tạo đối tượng người chơi

1. Mở Unity Editor.
2. Tạo một Scene mới hoặc sử dụng Scene hiện tại.
3. Chọn GameObject → 3D Object → Cube.
4. Đổi tên đối tượng thành `Player`.
5. Đặt vị trí ban đầu tại `(0, 0, 0)`.
6. Tạo thư mục `Scripts` trong cửa sổ Project.

Mục tiêu của bước này là có một đối tượng đơn giản để kiểm tra chuyển động.

### Bước 2. Tạo script điều khiển

Trong thư mục `Scripts`, tạo script C# tên `SimpleMover`.

Dán đoạn mã:

```

using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        // Sử dụng Input Manager cũ.
        float horizontal = Input.GetAxisRaw("Horizontal");

        // Xác định hướng di chuyển theo trục X.
        Vector3 direction = new Vector3(horizontal, 0f, 0f);

        // Di chuyển với tốc độ tính theo giây.
        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}

```

Giải thích mã nguồn

| Thành phần         | Chức năng                                       |
| ------------------ | ----------------------------------------------- |
| `MonoBehaviour`    | Lớp cơ sở của script gắn vào GameObject         |
| `[SerializeField]` | Cho phép chỉnh trường `private` trong Inspector |
| `Update()`         | Được gọi mỗi frame khi Component hoạt động      |
| `GetAxisRaw()`     | Đọc giá trị đầu vào từ Input Manager cũ         |
| `Vector3`          | Biểu diễn vector hướng di chuyển                |
| `Translate()`      | Dịch chuyển Transform                           |
| `Time.deltaTime`   | Thời gian tính bằng giây từ frame trước         |
| `Space.World`      | Di chuyển theo hệ tọa độ thế giới               |

### Bước 3. Gắn script và chạy thử

1. Chọn GameObject `Player`.
2. Kéo script `SimpleMover` vào Inspector.
3. Thiết lập `Speed = 4`.
4. Nhấn Play.
5. Thử các phím A, D hoặc các phím mũi tên trái/phải.

Kết quả mong đợi:

- Nhấn A: nhân vật di chuyển sang trái.
- Nhấn D: nhân vật di chuyển sang phải.
- Thả phím: nhân vật ngừng di chuyển theo trục X.

### Bước 4. Mở rộng điều khiển hai chiều

Thêm trục `Vertical`:

```
float horizontal = Input.GetAxisRaw("Horizontal");
float vertical = Input.GetAxisRaw("Vertical");

Vector3 direction = new Vector3(
    horizontal,
    0f,
    vertical
);
```

Có thể dùng:

```
direction = Vector3.ClampMagnitude(direction, 1f);
```

để tránh nhân vật chạy nhanh hơn khi di chuyển chéo.

Sau đó tiếp tục cập nhật chuyển động:

```
transform.Translate(
    direction * speed * Time.deltaTime,
    Space.World
);
```

### Bước 5. Giới hạn khu vực di chuyển

Sử dụng `Mathf.Clamp` để giữ vị trí nhân vật trong một phạm vi xác định.

Ví dụ giới hạn trục X từ -5 đến 5:

```
Vector3 position = transform.position;

position.x = Mathf.Clamp(
    position.x,
    -5f,
    5f
);

transform.position = position;
```

Kết quả: nhân vật không thể di chuyển vượt khỏi giới hạn được đặt trên trục X.

### Bước 6. Kiểm thử theo FPS

Trong quá trình chạy thử, thay đổi điều kiện FPS rồi quan sát quãng đường nhân vật di chuyển trong cùng một khoảng thời gian.

So sánh kết quả ở các mức như 30 FPS, 60 FPS và 120 FPS.

Mục tiêu là kiểm chứng rằng nhân vật có tốc độ gần tương đương khi sử dụng `Time.deltaTime`.

## 5. Quy trình hoạt động

\#chatgpt-mermaid-\_r_l0\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_l0\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l0\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l0\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_l0\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_l0\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_l0\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_l0\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_l0\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_l0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l0\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l0\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_l0\_ p{margin:0;}#chatgpt-mermaid-\_r_l0\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_l0\_ .label text,#chatgpt-mermaid-\_r_l0\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ .node rect,#chatgpt-mermaid-\_r_l0\_ .node circle,#chatgpt-mermaid-\_r_l0\_ .node ellipse,#chatgpt-mermaid-\_r_l0\_ .node polygon,#chatgpt-mermaid-\_r_l0\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .rough-node .label text,#chatgpt-mermaid-\_r_l0\_ .node .label text,#chatgpt-mermaid-\_r_l0\_ .image-shape .label,#chatgpt-mermaid-\_r_l0\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_l0\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .rough-node .label,#chatgpt-mermaid-\_r_l0\_ .node .label,#chatgpt-mermaid-\_r_l0\_ .image-shape .label,#chatgpt-mermaid-\_r_l0\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_l0\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_l0\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l0\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l0\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_l0\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l0\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l0\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l0\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_l0\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_l0\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l0\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_l0\_ .icon-shape,#chatgpt-mermaid-\_r_l0\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l0\_ .icon-shape p,#chatgpt-mermaid-\_r_l0\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_l0\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_l0\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l0\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_l0\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_l0\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_l0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_l0\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_l0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_l0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l0\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_l0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l0\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l0\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l0\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_l0\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_l0\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .node rect,#chatgpt-mermaid-\_r_l0\_ .node circle,#chatgpt-mermaid-\_r_l0\_ .node ellipse,#chatgpt-mermaid-\_r_l0\_ .node polygon,#chatgpt-mermaid-\_r_l0\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l0\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_l0\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_l0\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_l0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l0\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu Play ModeUpdate()Đọc InputCó nhấn phím?Hướng di chuyển = 0Xác định hướngTính chuyển động theo thờigianCập nhật TransformKiểm tra giới hạn nếu cóHiển thị frame mớiKhôngCó

## 6. Bài tập thực hành

Nhiệm vụ: Tạo một Scene nhỏ cho phép người chơi điều khiển nhân vật bằng bàn phím.

### Yêu cầu cơ bản

- Nhân vật di chuyển trái và phải.
- Tốc độ được cấu hình trong Inspector.
- Chuyển động sử dụng `Time.deltaTime`.
- Nhân vật dừng khi thả phím.
- Có giới hạn phạm vi di chuyển.

### Bài tập nâng cao

Mở rộng hệ thống theo hai trục X và Z, cho phép sử dụng W, A, S, D.

Thử thay đổi tốc độ từ 4 lên 8 đơn vị/giây và so sánh chuyển động.

Giải thích vì sao nhân vật có thể chạy nhanh hơn khi di chuyển chéo nếu không chuẩn hóa hoặc giới hạn độ dài vector.

### Tiêu chí nghiệm thu

- Scene hoặc dự án có thể chạy được.
- Nhân vật phản hồi đúng khi nhấn và thả phím.
- Chuyển động được tính theo thời gian.
- Có ít nhất một ảnh hoặc video minh chứng.
- Có mô tả một lỗi đã phát hiện và cách khắc phục.
- Có ít nhất một cải tiến sau lần chạy thử đầu tiên.

## 7. Lỗi thường gặp và cách khắc phục

| Hiện tượng                    | Nguyên nhân có thể                                                | Cách kiểm tra                                        |
| ----------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------- |
| Nhân vật không di chuyển      | Script chưa gắn hoặc Component bị tắt                             | Kiểm tra Inspector                                   |
| Input không hoạt động         | Cấu hình Input System không phù hợp                               | Kiểm tra Active Input Handling                       |
| Tốc độ thay đổi theo FPS      | Thiếu `Time.deltaTime`                                            | Kiểm tra công thức chuyển động                       |
| Di chuyển sai hướng           | Nhầm `Space.Self` và `Space.World`                                | Kiểm tra hệ tọa độ                                   |
| Di chuyển chéo nhanh hơn      | Vector hướng chưa được giới hạn                                   | Dùng `Vector3.ClampMagnitude`                        |
| Va chạm không như mong đợi    | Điều khiển bằng Transform thay vì xử lý chuyển động qua hệ vật lý | Kiểm tra Rigidbody, Collider và cách cập nhật vị trí |
| Input Actions không hoạt động | Action chưa được bật hoặc chưa cấu hình đúng                      | Kiểm tra Input Action Asset và trạng thái kích hoạt  |

Quy trình debug:

1. Tái hiện lỗi trong Play Mode.
2. Mở Console để kiểm tra lỗi và cảnh báo.
3. Kiểm tra GameObject, Component và cấu hình Input.
4. Đưa ra một giả thuyết về nguyên nhân.
5. Chỉ sửa một yếu tố mỗi lần.
6. Chạy lại và so sánh kết quả.

### Mẫu ghi chép kiểm thử

| Nội dung          | Ghi chép                                 |
| ----------------- | ---------------------------------------- |
| Tình huống        | Nhấn D trong 2 giây                      |
| Kết quả mong đợi  | Nhân vật di chuyển khoảng 8 đơn vị       |
| Kết quả thực tế   | Điền sau khi kiểm thử                    |
| Lỗi quan sát được | Điền nếu phát hiện                       |
| Cách khắc phục    | Mô tả thay đổi trong code hoặc Inspector |
| Minh chứng        | Ảnh màn hình hoặc video                  |

## 8. Checklist hoàn thành bài học

Tiến độ thực hành

0/8 mục

Hiểu cách Unity nhận tín hiệu điều khiển từ bàn phím.

Phân biệt được điều khiển bằng Transform và Rigidbody.

Tạo được script điều khiển nhân vật theo trục X.

Áp dụng Time.deltaTime để tính tốc độ theo giây.

Mở rộng được điều khiển theo hai chiều.

Giới hạn được phạm vi di chuyển bằng Clamp.

Kiểm thử và giải thích được ít nhất một lỗi.

Lưu ảnh hoặc video minh chứng sản phẩm thực hành.

## 9. Tổng kết kiến thức

Sau bài học, cần ghi nhớ ba nguyên tắc chính:

1. Input quyết định hướng di chuyển: Đọc đúng tín hiệu trước khi tính chuyển động.
2. Tốc độ nên tính theo thời gian: Khi cập nhật Transform trong `Update()`, sử dụng `Time.deltaTime` để giảm phụ thuộc vào FPS.
3. Chọn phương pháp điều khiển phù hợp: Transform thuận tiện cho ví dụ đơn giản; Rigidbody phù hợp hơn khi chuyển động cần tương tác với hệ thống vật lý.

Kết quả cuối cùng: Một Scene có nhân vật điều khiển được, giới hạn di chuyển rõ ràng và có thể kiểm chứng bằng Play Mode.

Tài liệu tham khảo: [Unity Learn — Junior Programmer, Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)

Lưu ý phiên bản: Giao diện, menu, package và thiết lập Input có thể khác nhau giữa các phiên bản Unity. Bài thực hành sử dụng các nguyên tắc cơ bản của Unity và cần đối chiếu tài liệu chính thức khi triển khai trên Unity 6.3.