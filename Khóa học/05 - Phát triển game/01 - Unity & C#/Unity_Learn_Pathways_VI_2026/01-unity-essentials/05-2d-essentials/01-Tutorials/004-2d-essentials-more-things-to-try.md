# Bài 04 — 2D Essentials: More Things to Try

Pathway: Unity Essentials · Mission: 2D Essentials · Loại: Tutorial / Thực hành mở rộng · Phiên bản: Unity 6.3

## 1. Tổng quan bài học

Khi phát triển trò chơi 2D trong Unity, việc đưa một hình ảnh lên màn hình chỉ là bước khởi đầu. Để tạo ra một trò chơi có khả năng tương tác, cần kết hợp nhiều thành phần như `SpriteRenderer`, `Rigidbody2D`, `Collider2D` và các script C#.

Trong bài thực hành này, chúng ta sẽ xây dựng một scene 2D nhỏ, trong đó người chơi điều khiển nhân vật di chuyển và thu thập vật phẩm.

Bài tập giúp củng cố ba kỹ năng:

- Hiển thị 2D: Quản lý Sprite, kích thước và thứ tự hiển thị.
- Vật lý 2D: Thiết lập Collider2D, Rigidbody2D và vùng Trigger.
- Lập trình tương tác: Phát hiện khi nhân vật chạm vật phẩm và thực hiện hành động tương ứng.

### Kết quả mong đợi

Sau khi hoàn thành, scene có thể thực hiện các hành vi sau:

1. Hiển thị nhân vật và các vật phẩm 2D.
2. Điều khiển nhân vật di chuyển bằng bàn phím.
3. Phát hiện khi nhân vật bước vào vùng thu thập.
4. Hiển thị thông báo trong Console.
5. Xóa vật phẩm đã được thu thập khỏi scene.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Giải thích vai trò của `SpriteRenderer`, `Rigidbody2D` và `Collider2D`.
- Thiết lập `Pixels Per Unit`, `Sorting Layer` và `Order in Layer`.
- Phân biệt Collider thông thường với Collider sử dụng `Is Trigger`.
- Xây dựng một tương tác nhặt vật phẩm bằng C#.
- Kiểm thử và xác định nguyên nhân khi sự kiện va chạm không hoạt động.
- Ghi nhận kết quả thực hành và đề xuất cải tiến cho scene.

## 3. Kiến thức cần nắm vững

### 3.1. Sprite và SpriteRenderer

Sprite là hình ảnh 2D được sử dụng để biểu diễn nhân vật, vật phẩm, môi trường hoặc các đối tượng khác trong trò chơi.

`SpriteRenderer` là Component chịu trách nhiệm hiển thị Sprite trong scene.

Ví dụ, để tạo một đồng xu, có thể tạo GameObject tên `Coin`, sau đó gán hình ảnh đồng xu vào thuộc tính `Sprite` của Component `SpriteRenderer`.

| Thành phần        | Chức năng                                                           |
| ----------------- | ------------------------------------------------------------------- |
| `Sprite`          | Tài nguyên hình ảnh 2D                                              |
| `SpriteRenderer`  | Hiển thị Sprite trong scene                                         |
| `Sprite Editor`   | Chỉnh sửa vùng Sprite hoặc tách sprite sheet                        |
| `Pixels Per Unit` | Quy định số pixel ảnh tương ứng với một đơn vị trong thế giới Unity |
| `Sorting Layer`   | Phân nhóm thứ tự hiển thị                                           |
| `Order in Layer`  | Quy định thứ tự hiển thị trong cùng Sorting Layer                   |

### 3.2. Pixels Per Unit (PPU)

`Pixels Per Unit` xác định cách chuyển kích thước pixel của Sprite thành kích thước trong không gian Unity.

Ví dụ, một Sprite rộng 128 pixel, được đặt PPU bằng 128, sẽ có chiều rộng tự nhiên là 1 Unity unit khi chưa chịu ảnh hưởng của Scale.

Công thức:

\\[ \text{Kích thước (Unity units)}=\frac{\text{Kích thước (pixels)}}{\text{Pixels Per Unit}} \\]

| Chiều rộng ảnh | PPU | Chiều rộng trong Unity |
| -------------- | --- | ---------------------- |
| 128 px         | 128 | 1 unit                 |
| 128 px         | 64  | 2 units                |
| 256 px         | 128 | 2 units                |
| 64 px          | 128 | 0,5 unit               |

Lưu ý: PPU không phải là độ phân giải của Game view. Kích thước hiển thị thực tế còn phụ thuộc vào Transform Scale và Camera.

### 3.3. Sorting Layer và Order in Layer

Trong trò chơi 2D, nhiều Sprite có thể nằm chồng lên nhau.

Unity cung cấp hai thuộc tính để điều khiển thứ tự hiển thị:

- `Sorting Layer`: Xác định nhóm hiển thị.
- `Order in Layer`: Xác định thứ tự Sprite trong cùng nhóm.

Ví dụ:

| Đối tượng  | Sorting Layer | Order in Layer |
| ---------- | ------------- | -------------- |
| Background | Background    | 0              |
| Ground     | Environment   | 0              |
| Player     | Characters    | 0              |
| Coin       | Items         | 0              |

Các Sorting Layer được sắp xếp theo thứ tự trong cấu hình của Unity. Trong cùng một Sorting Layer, Sprite có `Order in Layer` lớn hơn thường được vẽ phía trước Sprite có giá trị nhỏ hơn.

Nếu Sprite bị che khuất, cần kiểm tra cả Sorting Layer, Order in Layer và vị trí của đối tượng.

### 3.4. Rigidbody2D và Collider2D

Hai Component quan trọng trong hệ thống vật lý 2D là:

| Component     | Vai trò                                                             |
| ------------- | ------------------------------------------------------------------- |
| `Rigidbody2D` | Đưa đối tượng tham gia hệ thống vật lý 2D và điều khiển chuyển động |
| `Collider2D`  | Xác định hình dạng dùng để phát hiện va chạm hoặc vùng Trigger      |

Một số Collider2D thường gặp:

- `BoxCollider2D`: Hình chữ nhật.
- `CircleCollider2D`: Hình tròn.
- `CapsuleCollider2D`: Hình viên nang.
- `PolygonCollider2D`: Hình đa giác.

`Rigidbody2D` hỗ trợ các kiểu Body Type gồm `Dynamic`, `Kinematic` và `Static`.

Với ví dụ nhặt vật phẩm theo góc nhìn từ trên xuống, có thể dùng Player với `Rigidbody2D` kiểu `Kinematic` để di chuyển bằng script mà không cần trọng lực.

### 3.5. Collider thông thường và Trigger

Collider thông thường được sử dụng để xử lý tương tác va chạm vật lý, chẳng hạn nhân vật đứng trên mặt đất.

Trigger được dùng để phát hiện một đối tượng đi vào vùng xác định mà không cần tạo phản ứng va chạm vật lý thông thường.

Ví dụ:

- Nhân vật chạm tường: Collider thông thường.
- Nhân vật bước vào vùng nhặt đồng xu: Trigger.
- Nhân vật đi vào vùng chuyển màn: Trigger.

Minh họa sự khác nhau giữa Collider thông thường và Trigger.

## 4. Chuẩn bị môi trường thực hành

Sử dụng Unity 6.3 với một dự án hỗ trợ 2D.

Tạo một scene tên `CollectiblePractice`.

Chuẩn bị các GameObject sau:

| GameObject    | Component cần thiết                        |
| ------------- | ------------------------------------------ |
| `Main Camera` | Camera, chế độ Orthographic                |
| `Background`  | SpriteRenderer                             |
| `Player`      | SpriteRenderer, Rigidbody2D, BoxCollider2D |
| `Coin`        | SpriteRenderer, CircleCollider2D, Pickup2D |
| `GameManager` | GameObject trống, dành cho mở rộng         |

Có thể dùng các Sprite đơn giản để thực hành, không bắt buộc phải có nhân vật hoặc môi trường hoàn chỉnh.

## 5. Thực hành xây dựng trò chơi nhặt vật phẩm

### Bước 1 — Tạo scene 2D

1. Mở Unity Editor.
2. Tạo hoặc mở một scene 2D.
3. Đặt tên scene là `CollectiblePractice`.
4. Chọn `Main Camera`.
5. Trong Inspector, kiểm tra thuộc tính `Projection` đang là `Orthographic`.
6. Lưu scene.

Checkpoint 1: Game view hiển thị không gian 2D và camera có thể quan sát vùng chơi.

### Bước 2 — Tạo nhân vật Player

Trong Hierarchy, tạo Sprite bằng menu:

`GameObject → 2D Object → Sprites`

Chọn hình dạng phù hợp, chẳng hạn Square.

Đổi tên GameObject thành `Player`.

Thực hiện các cấu hình:

- Gán một Sprite dễ nhận biết.
- Điều chỉnh Transform để Player nằm trong vùng quan sát của camera.
- Thêm `BoxCollider2D`.
- Thêm `Rigidbody2D`.
- Chọn `Body Type = Kinematic`.
- Đặt Tag của đối tượng là `Player`.

Để tạo Tag, mở danh sách Tag trong Inspector và thêm `Player` nếu chưa tồn tại.

Checkpoint 2: Nhân vật xuất hiện trong Game view, có Rigidbody2D và Collider2D, đồng thời được gán đúng Tag.

### Bước 3 — Tạo vật phẩm Coin

Tạo thêm một GameObject có Sprite hình tròn và đổi tên thành `Coin`.

Thêm `CircleCollider2D` rồi bật `Is Trigger`.

Bật Trigger là thao tác quan trọng. Nếu không bật, Collider sẽ hoạt động theo quy tắc va chạm vật lý thông thường thay vì vùng kích hoạt.

Đặt Coin tại vị trí khác Player để quan sát quá trình di chuyển và nhặt vật phẩm.

Checkpoint 3: Coin hiển thị và Collider2D bao quanh vùng cần thu thập.

### Bước 4 — Lập trình di chuyển nhân vật

Để thử nghiệm độc lập, tạo script C# tên `PlayerMovement2D.cs` và gắn vào Player.

```
using UnityEngine;

public class PlayerMovement2D : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 4f;

    private Rigidbody2D rb;
    private Vector2 movement;

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        float horizontal = 0f;
        float vertical = 0f;

        if (Input.GetKey(KeyCode.A)) horizontal -= 1f;
        if (Input.GetKey(KeyCode.D)) horizontal += 1f;
        if (Input.GetKey(KeyCode.S)) vertical -= 1f;
        if (Input.GetKey(KeyCode.W)) vertical += 1f;

        movement = new Vector2(horizontal, vertical).normalized;
    }

    private void FixedUpdate()
    {
        rb.MovePosition(
            rb.position + movement * moveSpeed * Time.fixedDeltaTime
        );
    }
}
```

Giải thích:

- `Awake()`: Lấy tham chiếu tới Rigidbody2D của Player.
- `Update()`: Đọc trạng thái các phím W, A, S, D.
- `Vector2`: Biểu diễn hướng di chuyển trên hai trục X, Y.
- `normalized`: Chuẩn hóa vector để tránh việc di chuyển chéo nhanh hơn.
- `FixedUpdate()`: Thực hiện thao tác di chuyển đồng bộ với bước cập nhật vật lý.
- `MovePosition()`: Yêu cầu Rigidbody2D di chuyển đến vị trí mới.

Ví dụ sử dụng API `Input.GetKey` thuộc hệ thống Input Manager cũ. Nếu dự án chỉ kích hoạt New Input System, cần sử dụng Input System tương ứng hoặc bật chế độ `Both` tại `Project Settings → Player → Active Input Handling`, theo cấu hình Unity Editor đang sử dụng.

Checkpoint 4: Nhấn Play và sử dụng W, A, S, D để di chuyển Player theo bốn hướng.

### Bước 5 — Lập trình nhặt vật phẩm

Tạo script C# tên `Pickup2D.cs`.

```
using UnityEngine;

public class Pickup2D : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!other.CompareTag("Player"))
            return;

        Debug.Log("Đã nhặt vật phẩm 2D");

        Destroy(gameObject);
    }
}
```

Gắn script `Pickup2D` vào GameObject `Coin`.

#### Phân tích mã nguồn

`OnTriggerEnter2D(Collider2D other)`

Đây là phương thức callback của hệ thống vật lý 2D. Unity gọi phương thức khi một Collider2D phù hợp bắt đầu đi vào vùng Trigger.

Biến `other` biểu diễn Collider2D của đối tượng đi vào vùng kích hoạt.

`other.CompareTag("Player")`

Dùng để kiểm tra đối tượng vừa bước vào Trigger có Tag `Player` hay không.

Nếu không phải Player, script dừng xử lý.

`Debug.Log(...)`

Hiển thị thông báo trong Console, giúp xác minh rằng sự kiện nhặt vật phẩm đã xảy ra.

`Destroy(gameObject)`

Đánh dấu GameObject chứa script để Unity hủy, khiến vật phẩm biến mất khỏi scene.

### Bước 6 — Kiểm thử tương tác

Nhấn Play và điều khiển Player tiến về phía Coin.

Khi Player đi vào vùng Trigger, Console phải xuất hiện thông báo:

```
Đã nhặt vật phẩm 2D
```

Đồng thời, Coin biến mất khỏi scene.

Nếu không xảy ra sự kiện, kiểm tra lại Tag, Collider2D, Rigidbody2D và thuộc tính `Is Trigger`.

### Sơ đồ luồng xử lý

\#chatgpt-mermaid-\_r_k0\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_k0\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k0\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k0\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_k0\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_k0\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_k0\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_k0\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_k0\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_k0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_k0\_ p{margin:0;}#chatgpt-mermaid-\_r_k0\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_k0\_ .label text,#chatgpt-mermaid-\_r_k0\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .node rect,#chatgpt-mermaid-\_r_k0\_ .node circle,#chatgpt-mermaid-\_r_k0\_ .node ellipse,#chatgpt-mermaid-\_r_k0\_ .node polygon,#chatgpt-mermaid-\_r_k0\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .rough-node .label text,#chatgpt-mermaid-\_r_k0\_ .node .label text,#chatgpt-mermaid-\_r_k0\_ .image-shape .label,#chatgpt-mermaid-\_r_k0\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_k0\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .rough-node .label,#chatgpt-mermaid-\_r_k0\_ .node .label,#chatgpt-mermaid-\_r_k0\_ .image-shape .label,#chatgpt-mermaid-\_r_k0\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_k0\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_k0\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_k0\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k0\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k0\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k0\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_k0\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_k0\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_k0\_ .icon-shape,#chatgpt-mermaid-\_r_k0\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k0\_ .icon-shape p,#chatgpt-mermaid-\_r_k0\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_k0\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_k0\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k0\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_k0\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_k0\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k0\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k0\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_k0\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_k0\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .node rect,#chatgpt-mermaid-\_r_k0\_ .node circle,#chatgpt-mermaid-\_r_k0\_ .node ellipse,#chatgpt-mermaid-\_r_k0\_ .node polygon,#chatgpt-mermaid-\_r_k0\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_k0\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_k0\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_k0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu Play modePlayer di chuyểnĐi vào vùng Trigger của Coin?OnTriggerEnter2D được gọiĐối tượng có Tag Player?Bỏ qua sự kiệnGhi thông báo vào ConsoleDestroy CoinVật phẩm được thu thậpChưaCóKhôngCó

Sơ đồ thể hiện quá trình Unity phát hiện vùng Trigger và thực thi callback trong script. Việc kiểm tra Tag giúp giới hạn sự kiện nhặt vật phẩm cho Player thay vì mọi đối tượng khác.

## 6. Thử nghiệm mở rộng

Sau khi hoàn thành chức năng nhặt vật phẩm, có thể thực hiện ba thử nghiệm để quan sát ảnh hưởng của các thuộc tính Unity.

### Thử nghiệm A — Thay đổi Pixels Per Unit

Mục tiêu: Quan sát ảnh hưởng của PPU đến kích thước Sprite trong thế giới Unity.

Cách thực hiện:

1. Chọn texture của Coin trong Project.
2. Mở Import Settings.
3. Ghi lại PPU hiện tại.
4. Thay đổi PPU sang một giá trị khác.
5. Chọn Apply và quan sát Game view.

Kết quả dự đoán: Khi PPU tăng, kích thước Sprite theo Unity units giảm nếu các yếu tố khác không thay đổi.

### Thử nghiệm B — Thay đổi Sorting Layer

Mục tiêu: Kiểm tra thứ tự hiển thị giữa Player, Coin và Background.

Cách thực hiện:

1. Đặt Player và Coin lên cùng Sorting Layer.
2. Thay đổi `Order in Layer` của Coin.
3. Cho hai Sprite chồng lên nhau.
4. Quan sát Sprite nào hiển thị phía trước.

Kết quả dự đoán: Trong cùng Sorting Layer, giá trị Order in Layer lớn hơn có độ ưu tiên vẽ cao hơn.

### Thử nghiệm C — Bật và tắt Is Trigger

Mục tiêu: Phân biệt vùng kích hoạt với va chạm thông thường.

Cách thực hiện:

1. Chạy trò chơi với `Is Trigger` được bật.
2. Ghi lại hành vi nhặt vật phẩm.
3. Dừng Play mode.
4. Tắt `Is Trigger` trên Coin.
5. Chạy lại trò chơi và so sánh.

Kết quả dự đoán: Khi tắt Is Trigger, `OnTriggerEnter2D` sẽ không được gọi cho sự tiếp xúc đó, vì vậy script nhặt vật phẩm không thực hiện chức năng như ban đầu.

## 7. Kiểm thử và ghi nhận kết quả

Mỗi lần thử nghiệm nên ghi lại bốn loại thông tin: kết quả mong đợi, kết quả thực tế, bằng chứng và nhận xét.

| Hạng mục kiểm thử | Kết quả mong đợi                         | Bằng chứng           |
| ----------------- | ---------------------------------------- | -------------------- |
| Hiển thị Sprite   | Player và Coin xuất hiện đúng            | Game view            |
| Di chuyển         | Player di chuyển bằng W/A/S/D            | Game view            |
| Thu thập          | Coin biến mất khi Player chạm vào        | Game view            |
| Ghi log           | Console hiển thị thông báo nhặt vật phẩm | Console              |
| Thứ tự hiển thị   | Sprite thay đổi độ ưu tiên vẽ            | Game view            |
| Trigger           | Chỉ hoạt động đúng khi cấu hình phù hợp  | Inspector và Console |

Không nên chỉ ghi rằng trò chơi đã chạy thành công. Cần mô tả bằng chứng cụ thể, đặc biệt khi kết quả thực tế khác dự đoán.

## 8. Lỗi thường gặp và cách khắc phục

| Hiện tượng                               | Nguyên nhân có thể                                   | Cách kiểm tra                                     |
| ---------------------------------------- | ---------------------------------------------------- | ------------------------------------------------- |
| Player đi qua Coin nhưng không nhặt được | Is Trigger chưa bật                                  | Kiểm tra Collider2D của Coin                      |
| Không có sự kiện Trigger                 | Thiếu Rigidbody2D hoặc cấu hình vật lý không phù hợp | Kiểm tra Rigidbody2D và cả hai Collider2D         |
| Coin không bị xóa                        | Tag không khớp hoặc script chưa được gắn             | Kiểm tra Tag Player và script Pickup2D            |
| Coin hiển thị phía sau Background        | Sorting Layer hoặc Order in Layer chưa đúng          | Kiểm tra SpriteRenderer                           |
| Kích thước Sprite không hợp lý           | PPU hoặc Transform Scale không phù hợp               | Kiểm tra Import Settings và Transform             |
| Player bị rơi ngoài vùng chơi            | Rigidbody2D Dynamic chịu trọng lực                   | Chỉnh Body Type hoặc Gravity Scale theo loại game |
| Không phát hiện va chạm như mong đợi     | Trộn hệ thống Collider 3D và 2D                      | Đảm bảo sử dụng Collider2D và Rigidbody2D         |
| Bấm phím nhưng Player không di chuyển    | Hệ thống Input chưa tương thích hoặc script bị lỗi   | Kiểm tra Console và Active Input Handling         |

### Quy trình debug

\#chatgpt-mermaid-\_r_l1\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_l1\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l1\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l1\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_l1\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_l1\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_l1\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_l1\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_l1\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_l1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_l1\_ p{margin:0;}#chatgpt-mermaid-\_r_l1\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_l1\_ .label text,#chatgpt-mermaid-\_r_l1\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .node rect,#chatgpt-mermaid-\_r_l1\_ .node circle,#chatgpt-mermaid-\_r_l1\_ .node ellipse,#chatgpt-mermaid-\_r_l1\_ .node polygon,#chatgpt-mermaid-\_r_l1\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .rough-node .label text,#chatgpt-mermaid-\_r_l1\_ .node .label text,#chatgpt-mermaid-\_r_l1\_ .image-shape .label,#chatgpt-mermaid-\_r_l1\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_l1\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .rough-node .label,#chatgpt-mermaid-\_r_l1\_ .node .label,#chatgpt-mermaid-\_r_l1\_ .image-shape .label,#chatgpt-mermaid-\_r_l1\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_l1\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_l1\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_l1\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l1\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l1\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l1\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_l1\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_l1\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_l1\_ .icon-shape,#chatgpt-mermaid-\_r_l1\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l1\_ .icon-shape p,#chatgpt-mermaid-\_r_l1\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_l1\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_l1\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l1\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_l1\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_l1\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l1\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l1\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_l1\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_l1\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .node rect,#chatgpt-mermaid-\_r_l1\_ .node circle,#chatgpt-mermaid-\_r_l1\_ .node ellipse,#chatgpt-mermaid-\_r_l1\_ .node polygon,#chatgpt-mermaid-\_r_l1\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_l1\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_l1\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_l1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Tái hiện lỗi trong Play modeKiểm tra ConsoleKiểm tra GameObject vàComponentKiểm tra các thiết lập liên quanĐưa ra một giả thuyếtThay đổi một cấu hìnhChạy lại thử nghiệmLỗi đã được giải quyết?Ghi nguyên nhân và cách sửaChưaRồi

Thay đổi từng cấu hình riêng biệt giúp xác định chính xác nguyên nhân. Nếu thay đổi đồng thời nhiều thuộc tính, sẽ khó biết thao tác nào thực sự giải quyết được vấn đề.

## 9. Bài tập củng cố

### Bài tập 1 — Cơ bản

Tạo scene 2D gồm một Player và một Coin.

Yêu cầu: Player có thể tiếp cận Coin, kích hoạt Trigger và khiến Coin biến mất.

Tiêu chí hoàn thành: Console xuất hiện thông báo thu thập và GameObject Coin không còn trong Hierarchy khi đang chạy Play mode.

### Bài tập 2 — Vận dụng

Thêm ba Coin ở ba vị trí khác nhau.

Thử thay đổi PPU hoặc Sorting Layer của từng Coin rồi giải thích sự khác biệt quan sát được.

Yêu cầu ghi nhận: Giá trị ban đầu, giá trị mới, kết quả dự đoán và kết quả thực tế.

### Bài tập 3 — Mở rộng

Xây dựng một trò chơi nhỏ với các yêu cầu:

- Player di chuyển để thu thập vật phẩm.
- Có ít nhất ba vật phẩm.
- Mỗi vật phẩm phát hiện tương tác bằng Trigger.
- Có một chướng ngại vật sử dụng Collider2D thông thường.
- Khi thu thập đủ vật phẩm, trò chơi hiển thị thông báo hoàn thành.

Gợi ý: Có thể dùng một biến đếm số vật phẩm đã thu thập và tăng biến mỗi khi sự kiện nhặt vật phẩm diễn ra.

## 10. Checklist hoàn thành

Tiến độ thực hành

0/9 hoàn thành

Tạo scene 2D và thiết lập camera Orthographic

Hiển thị được Player và Coin bằng SpriteRenderer

Thiết lập đúng Rigidbody2D, Collider2D và Tag Player

Điều khiển được Player di chuyển

Kích hoạt được OnTriggerEnter2D khi nhặt Coin

Coin biến mất và Console ghi nhận sự kiện

Thực hiện thử nghiệm PPU và Sorting Layer

Kiểm tra ít nhất một lỗi và ghi lại cách xử lý

Lưu ảnh hoặc video minh chứng kết quả

## 11. Câu hỏi ôn tập trắc nghiệm

Câu 1. Trong một trò chơi 2D, Component nào được sử dụng để hiển thị Sprite?

A. SpriteRenderer

B. Rigidbody2D

C. BoxCollider2D

D. Camera

Câu 2. Player có Collider2D và Rigidbody2D, nhưng Coin không được nhặt khi chạm vào. Thuộc tính nào trên Coin cần kiểm tra đầu tiên?

A. Order in Layer

B. Is Trigger

C. Pixels Per Unit

D. Transform Scale

Câu 3. Một Sprite rộng 256 pixel được cấu hình PPU bằng 128 và Scale bằng 1. Kích thước tự nhiên của nó là bao nhiêu?

A. 0,5 Unity unit

B. 1 Unity unit

C. 2 Unity units

D. 128 Unity units

Câu 4. Khi sử dụng Rigidbody2D, callback nào phù hợp để phát hiện đối tượng đi vào vùng Trigger 2D?

A. OnTriggerEnter

B. OnCollisionEnter

C. OnTriggerExit

D. OnTriggerEnter2D

Câu 5. Player và Coin nằm trên cùng một Sorting Layer, nhưng muốn Coin hiển thị phía trước Player. Nên điều chỉnh gì?

A. Đặt Order in Layer của Coin lớn hơn Player

B. Tăng Gravity Scale của Coin

C. Tắt Rigidbody2D của Player

D. Tắt Is Trigger của Coin

Làm lạiChấm điểm

## 12. Tổng kết

Bài thực hành 2D Essentials: More Things to Try củng cố quy trình xây dựng một tương tác đơn giản trong Unity 2D, từ việc hiển thị Sprite đến kiểm tra va chạm và xử lý sự kiện bằng C#.

Các kiến thức quan trọng gồm:

- `SpriteRenderer` chịu trách nhiệm hiển thị hình ảnh.
- `Pixels Per Unit` ảnh hưởng đến kích thước Sprite trong không gian Unity.
- `Sorting Layer` và `Order in Layer` giúp kiểm soát thứ tự hiển thị.
- `Rigidbody2D` và `Collider2D` tạo nền tảng cho hệ thống vật lý 2D.
- `OnTriggerEnter2D` giúp phát hiện khi đối tượng đi vào vùng Trigger.
- Console và Play mode hỗ trợ kiểm thử, xác minh và sửa lỗi.

Kỹ năng quan trọng nhất là dự đoán hành vi, thay đổi một yếu tố, kiểm thử và giải thích kết quả. Đây là phương pháp hữu ích khi phát triển những trò chơi 2D phức tạp hơn.

Tham khảo: [Unity Learn — 2D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3\&utm_source=chatgpt.com).

Ghi chú: Nội dung thực hành được biên soạn độc lập cho Unity 6.3, không phải bản chép lại các bước chính thức của Unity Learn. Giao diện và một số thiết lập có thể thay đổi tùy phiên bản Unity và các package được sử dụng.