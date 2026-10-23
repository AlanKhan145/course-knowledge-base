# Bài 02 — Complete Your 2D Puzzle Game

Unity Essentials · 2D Essentials · Tutorial · Unity 6.3

## 1. Tổng quan bài học

Một trò chơi 2D hoàn chỉnh không chỉ cần nhân vật và hình ảnh hiển thị trên màn hình. Các đối tượng còn phải có khả năng tương tác, phản hồi khi xảy ra sự kiện và tuân theo quy tắc chiến thắng hoặc thất bại.

Trong bài thực hành này, chúng ta sẽ hoàn thiện một trò chơi giải đố 2D đơn giản bằng cách kết hợp `SpriteRenderer`, `Rigidbody2D`, `Collider2D` và các script C#.

[Claude Desktop × MCP で Unity ゲームを LLM に自動プレイさせる構成を試してみた | DevelopersIO](https://images.openai.com/static-rsc-4/d7PZEQIqvD9P-ri8pLViokr4S_YrdYQyp6hQwMviZ1Scbwy1wrH_kfGf5jpQsbpMSgTC1fBK_Hyv4h8mavpCG71Iw0mF7eJQ1wxr59tqrqIjmVf7IlHz4VNb0YIdRAMm2I8UxF06bveLYjwRZDRIE2RJ8G7zmG1B1JFolVaj0hQ?purpose=inline)

[dev.classmethod.jp](https://dev.classmethod.jp/articles/llm-game-playing-using-mcp-server/?utm_source=chatgpt.com)

Minh họa trò chơi 2D: người chơi di chuyển qua chướng ngại vật, thu thập chìa khóa và tìm đường đến đích.

Kết quả cần đạt: Xây dựng một scene trong đó nhân vật có thể di chuyển, nhặt chìa khóa và chỉ hoàn thành màn chơi sau khi đến đích với chìa khóa đã thu thập.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

- Cấu hình `SpriteRenderer` để hiển thị và sắp xếp đối tượng 2D.
- Giải thích vai trò của `Rigidbody2D` và `Collider2D` trong hệ thống vật lý 2D.
- Thiết lập sự kiện va chạm bằng `OnTriggerEnter2D()`.
- Xây dựng logic nhặt vật phẩm và kiểm tra điều kiện chiến thắng.
- Kiểm thử trò chơi trong `Play mode` và xác định nguyên nhân của các lỗi thường gặp.

## 3. Kiến thức trọng tâm

### 3.1. Cấu trúc một GameObject 2D

Mọi đối tượng trong Unity đều có thể được tạo từ `GameObject` và mở rộng thông qua các `Component`.

Ví dụ, nhân vật trong trò chơi có thể gồm các thành phần sau:

Player — GameObject

Transform

Vị trí, góc xoay và kích thước

SpriteRenderer

Hiển thị hình ảnh nhân vật

Rigidbody2D

Cho phép nhân vật tham gia hệ thống vật lý 2D

BoxCollider2D

Xác định vùng va chạm

PlayerMovement2D

Điều khiển nhân vật và quản lý trạng thái trò chơi

### 3.2. SpriteRenderer và Sprite Editor

`SpriteRenderer` là Component chịu trách nhiệm hiển thị một `Sprite` trong scene.

Một số thuộc tính quan trọng:

| Thuộc tính      | Chức năng                                   |
| --------------- | ------------------------------------------- |
| Sprite          | Chọn hình ảnh cần hiển thị                  |
| Color           | Điều chỉnh màu sắc và độ trong suốt         |
| Flip X / Flip Y | Lật hình ảnh theo chiều ngang hoặc dọc      |
| Sorting Layer   | Phân nhóm thứ tự hiển thị                   |
| Order in Layer  | Xác định thứ tự vẽ trong cùng Sorting Layer |

Nếu hình ảnh gồm nhiều đối tượng nằm chung một sprite sheet, có thể sử dụng `Sprite Editor` để chia thành các sprite riêng biệt.

### 3.3. Pixels Per Unit (PPU)

`Pixels Per Unit` quy định số pixel ảnh tương ứng với một đơn vị trong thế giới Unity.

Ví dụ, một sprite có kích thước 128 × 128 pixel và PPU bằng 128 sẽ có kích thước gốc 1 × 1 Unity unit, nếu `Transform Scale` bằng `(1,1,1)`.

Khi PPU thay đổi, kích thước sprite trong thế giới game cũng có thể thay đổi.

Cần phân biệt:

- PPU: Quy định tỷ lệ chuyển đổi pixel sang Unity unit.
- Transform Scale: Phóng to hoặc thu nhỏ đối tượng trong scene.
- Orthographic Size: Quy định phạm vi nhìn thấy theo chiều dọc của camera Orthographic.

### 3.4. Rigidbody2D và Collider2D

Hai Component này đảm nhiệm những chức năng khác nhau.

| Component          | Vai trò                                                                           |
| ------------------ | --------------------------------------------------------------------------------- |
| `Rigidbody2D`      | Mô phỏng chuyển động và tương tác vật lý                                          |
| `BoxCollider2D`    | Tạo vùng va chạm hình chữ nhật                                                    |
| `CircleCollider2D` | Tạo vùng va chạm hình tròn                                                        |
| `Is Trigger`       | Chuyển Collider2D thành vùng phát hiện sự kiện đi vào/đi ra, thay vì chặn vật thể |

Ví dụ, một chìa khóa có thể sử dụng `CircleCollider2D` với `Is Trigger` được bật. Khi nhân vật chạm vào chìa khóa, Unity phát hiện sự kiện và thực hiện lệnh thu thập.

Lưu ý: Các thành phần vật lý 2D phải được sử dụng đồng nhất. `Rigidbody2D` không thay thế được `Rigidbody` 3D, và `BoxCollider2D` không tương đương với `BoxCollider` 3D.

## 4. Nguyên lý hoạt động của trò chơi

Trò chơi sử dụng quy tắc đơn giản: người chơi phải thu thập chìa khóa trước khi được phép hoàn thành màn chơi.

Trò chơi phải ghi nhận trạng thái `HasKey`. Khi nhân vật thu thập chìa khóa, trạng thái này chuyển từ `false` sang `true`.

Điểm đích kiểm tra trạng thái đó trước khi công nhận chiến thắng. Nếu chưa thu thập chìa khóa, người chơi phải tiếp tục tìm kiếm.

## 5. Thực hành: Xây dựng trò chơi 2D Puzzle

### 5.1. Bước 1 — Tạo Scene 2D

Tạo một scene mới và lưu với tên `PuzzleGame2D`.

Đảm bảo `Main Camera` sử dụng chế độ `Orthographic`.

Tạo các GameObject cần thiết:

```
PuzzleGame2D
├── Main Camera
├── Player
├── Key
├── Goal
└── Walls
    ├── Wall_01
    ├── Wall_02
    └── Wall_03
```

Trong đó:

- `Player`: Nhân vật điều khiển.
- `Key`: Chìa khóa cần thu thập.
- `Goal`: Vị trí kết thúc màn chơi.
- `Walls`: Các vật cản tạo thành câu đố đường đi.

Có thể sử dụng các sprite hình vuông, hình tròn hoặc hình ảnh tự nhập để xây dựng scene.

### 5.2. Bước 2 — Cấu hình Player

Chọn `Player` trong Hierarchy và thiết lập các Component.

| Component        | Thiết lập              |
| ---------------- | ---------------------- |
| `SpriteRenderer` | Sprite nhân vật        |
| `Rigidbody2D`    | Body Type: Dynamic     |
| `Rigidbody2D`    | Gravity Scale: 0       |
| `Rigidbody2D`    | Freeze Rotation Z: bật |
| `BoxCollider2D`  | Is Trigger: tắt        |
| Tag              | Player                 |

`Gravity Scale = 0` giúp nhân vật không bị kéo xuống dưới khi game có góc nhìn từ trên xuống.

`Freeze Rotation Z` ngăn nhân vật tự xoay khi va chạm với chướng ngại vật.

Với mỗi bức tường, thêm `BoxCollider2D`, để `Is Trigger` tắt. Nếu không có `Rigidbody2D`, Collider2D của tường sẽ được xem là collider tĩnh.

### 5.3. Bước 3 — Lập trình di chuyển

Tạo script `PlayerMovement2D.cs` và gắn vào GameObject `Player`.

```

using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class PlayerMovement2D : MonoBehaviour
{
    public float moveSpeed = 5f;

    private Rigidbody2D rb;
    private Vector2 movement;

    public bool HasKey { get; private set; }
    public bool HasWon { get; private set; }

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        movement.x = Input.GetAxisRaw("Horizontal");
        movement.y = Input.GetAxisRaw("Vertical");

        movement = movement.normalized;
    }

    private void FixedUpdate()
    {
        rb.linearVelocity = movement * moveSpeed;
    }

    public void CollectKey()
    {
        HasKey = true;
        Debug.Log("Đã nhặt chìa khóa!");
    }

    public void Win()
    {
        if (HasWon) return;

        HasWon = true;
        rb.linearVelocity = Vector2.zero;

        Debug.Log("Hoàn thành trò chơi 2D!");
    }
}

```

Giải thích:

`Awake()` lấy tham chiếu tới `Rigidbody2D` để điều khiển chuyển động.

`Update()` đọc hướng di chuyển của người chơi. `Horizontal` tương ứng với trục X, còn `Vertical` tương ứng với trục Y.

`movement.normalized` giới hạn độ lớn vector hướng về tối đa 1, tránh nhân vật di chuyển nhanh hơn khi đi chéo.

`FixedUpdate()` cập nhật vận tốc vật lý thông qua `rb.linearVelocity`, phù hợp với Rigidbody2D trong Unity 6.

`HasKey` lưu trạng thái thu thập chìa khóa, còn `HasWon` ngăn việc xử lý chiến thắng nhiều lần.

Lưu ý Input: Đoạn code sử dụng Legacy Input Manager. Trong Unity 6, cần thiết lập `Active Input Handling` thành `Input Manager (Old)` hoặc `Both` nếu dự án đang sử dụng riêng Input System mới. Đây là ví dụ điều khiển bằng bàn phím để thực hành nhanh.

### 5.4. Bước 4 — Tạo chìa khóa và sự kiện thu thập

Chọn GameObject `Key`:

1. Thêm `SpriteRenderer` để hiển thị chìa khóa.
2. Thêm `CircleCollider2D`.
3. Bật `Is Trigger`.
4. Tạo script `Pickup2D.cs`.
5. Gắn script vào `Key`.

```

using UnityEngine;

public class Pickup2D : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!other.CompareTag("Player"))
            return;

        PlayerMovement2D player =
            other.GetComponent<PlayerMovement2D>();

        if (player == null)
            return;

        player.CollectKey();

        Debug.Log("Đã nhặt vật phẩm 2D");

        Destroy(gameObject);
    }
}

```

Phân tích hoạt động:

- `OnTriggerEnter2D()` được gọi khi một Collider2D đi vào vùng Trigger và các điều kiện phát hiện trigger của hệ vật lý 2D được đáp ứng.
- `CompareTag("Player")` kiểm tra đối tượng tiếp xúc có phải người chơi không.
- `GetComponent<PlayerMovement2D>()` truy cập logic điều khiển nhân vật.
- `CollectKey()` cập nhật trạng thái sở hữu chìa khóa.
- `Destroy(gameObject)` xóa chìa khóa khỏi scene.

Trong cấu hình thực hành này, `Player` mang `Rigidbody2D`, còn `Key` có `CircleCollider2D` bật `Is Trigger`, đáp ứng điều kiện phát hiện sự kiện.

### 5.5. Bước 5 — Tạo điểm đích

Chọn GameObject `Goal`, thêm SpriteRenderer và một `BoxCollider2D` có `Is Trigger` được bật.

Tạo script `Goal2D.cs`:

```

using UnityEngine;

public class Goal2D : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!other.CompareTag("Player"))
            return;

        PlayerMovement2D player =
            other.GetComponent<PlayerMovement2D>();

        if (player == null)
            return;

        if (player.HasKey)
        {
            player.Win();
        }
        else
        {
            Debug.Log("Bạn cần tìm chìa khóa trước!");
        }
    }
}

```

Điểm đích không tự động kết thúc trò chơi khi người chơi tiếp xúc. Nó kiểm tra `HasKey` trước.

Khi `HasKey = true`, hàm `Win()` ghi nhận chiến thắng. Trong phiên bản minh họa này, kết quả được thể hiện bằng thông báo trong Console; chưa có màn hình chiến thắng hay hệ thống chuyển scene.

### 5.6. Bước 6 — Thiết lập thứ tự hiển thị

Khi nhiều sprite nằm gần nhau, cần đảm bảo hình ảnh được hiển thị đúng thứ tự.

Có thể thiết lập:

| GameObject | Sorting Layer | Order in Layer |
| ---------- | ------------- | -------------- |
| Background | Background    | 0              |
| Walls      | Default       | 0              |
| Key        | Default       | 1              |
| Goal       | Default       | 1              |
| Player     | Default       | 2              |

Trong cách tổ chức này, Sorting Layer `Background` được sắp xếp nằm sau `Default`.

`Order in Layer` giúp quyết định sprite nào được vẽ ở phía trước khi chúng thuộc cùng một Sorting Layer.

Lưu ý rằng thứ tự hiển thị hình ảnh không trực tiếp làm thay đổi vùng va chạm vật lý.

## 6. Kiểm thử trò chơi

Nhấn Play trong Unity Editor để chạy thử.

Thực hiện những trường hợp sau:

| Tình huống                       | Kết quả mong đợi                              |
| -------------------------------- | --------------------------------------------- |
| Nhấn WASD hoặc phím mũi tên      | Nhân vật di chuyển                            |
| Nhân vật va vào tường            | Bị chặn bởi Collider2D                        |
| Chạm Key                         | Chìa khóa biến mất                            |
| Chạm Goal khi chưa có Key        | Console hiển thị yêu cầu tìm chìa khóa        |
| Nhặt Key rồi chạm Goal           | Console thông báo hoàn thành                  |
| Quan sát nhiều sprite chồng nhau | Hiển thị theo Sorting Layer và Order in Layer |

### Mẫu ghi nhận kết quả

| Nội dung         | Ghi chép                                |
| ---------------- | --------------------------------------- |
| Kết quả mong đợi | Nhặt Key rồi đến Goal sẽ chiến thắng    |
| Kết quả thực tế  | Điền sau khi thử nghiệm                 |
| Minh chứng       | Ảnh Game view và Console                |
| Nhận xét         | Giải thích vì sao kết quả đúng hoặc sai |

Checkpoint: Trò chơi được xem là đạt yêu cầu chức năng khi nhân vật di chuyển được, thu thập chìa khóa thành công và không thể chiến thắng nếu bỏ qua chìa khóa.

## 7. Lỗi thường gặp và cách khắc phục

| Hiện tượng                     | Nguyên nhân có thể                                                                   | Cách kiểm tra                          |
| ------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------- |
| Không thu thập được Key        | Chưa bật `Is Trigger`                                                                | Kiểm tra Collider2D của Key            |
| Không gọi `OnTriggerEnter2D()` | Trộn Collider 2D và 3D hoặc thiếu cấu hình vật lý phù hợp                            | Kiểm tra loại Component và Rigidbody2D |
| Nhân vật rơi xuống             | Gravity Scale khác 0                                                                 | Đặt Gravity Scale = 0                  |
| Không di chuyển                | Input Handling không phù hợp                                                         | Kiểm tra cấu hình Input của dự án      |
| Nhân vật đi xuyên tường        | Tường không có Collider2D, bật Trigger hoặc Layer Collision Matrix không cho va chạm | Kiểm tra Collider2D và Physics 2D      |
| Sprite bị che khuất            | Sorting Layer hoặc Order in Layer chưa đúng                                          | Kiểm tra SpriteRenderer                |
| Chạm Goal nhưng không thắng    | Chưa thu thập Key                                                                    | Kiểm tra giá trị `HasKey`              |

### Quy trình Debug

\#chatgpt-mermaid-\_r_lg\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_lg\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lg\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lg\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_lg\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_lg\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_lg\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_lg\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_lg\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_lg\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lg\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lg\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_lg\_ p{margin:0;}#chatgpt-mermaid-\_r_lg\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_lg\_ .label text,#chatgpt-mermaid-\_r_lg\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ .node rect,#chatgpt-mermaid-\_r_lg\_ .node circle,#chatgpt-mermaid-\_r_lg\_ .node ellipse,#chatgpt-mermaid-\_r_lg\_ .node polygon,#chatgpt-mermaid-\_r_lg\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .rough-node .label text,#chatgpt-mermaid-\_r_lg\_ .node .label text,#chatgpt-mermaid-\_r_lg\_ .image-shape .label,#chatgpt-mermaid-\_r_lg\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_lg\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .rough-node .label,#chatgpt-mermaid-\_r_lg\_ .node .label,#chatgpt-mermaid-\_r_lg\_ .image-shape .label,#chatgpt-mermaid-\_r_lg\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_lg\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_lg\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lg\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lg\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_lg\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lg\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lg\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lg\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_lg\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_lg\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lg\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_lg\_ .icon-shape,#chatgpt-mermaid-\_r_lg\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lg\_ .icon-shape p,#chatgpt-mermaid-\_r_lg\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_lg\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_lg\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lg\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_lg\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_lg\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_lg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_lg\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_lg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_lg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lg\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_lg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lg\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lg\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lg\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_lg\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_lg\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .node rect,#chatgpt-mermaid-\_r_lg\_ .node circle,#chatgpt-mermaid-\_r_lg\_ .node ellipse,#chatgpt-mermaid-\_r_lg\_ .node polygon,#chatgpt-mermaid-\_r_lg\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lg\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_lg\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_lg\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_lg\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lg\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗi trong Play modeKiểm tra ConsoleKiểm tra GameObject vàComponentĐưa ra giả thuyết nguyên nhânChỉ thay đổi một yếu tốLỗi đã được khắc phục?Ghi nhận và kiểm thử lạiChưaRồi

Quy trình này giúp phân biệt lỗi cấu hình scene, lỗi script và lỗi thiết lập vật lý. Việc chỉ thay đổi một yếu tố mỗi lần giúp xác định nguyên nhân chính xác hơn.

## 8. Bài tập củng cố

### Bài tập 1 — Cơ bản

Tạo một GameObject có `SpriteRenderer` và `CircleCollider2D`. Gắn `Pickup2D` để nhân vật có thể thu thập đối tượng.

Yêu cầu: khi nhân vật chạm vào, vật phẩm biến mất và Console có thông báo.

### Bài tập 2 — Vận dụng

Thay đổi `moveSpeed` từ `5` thành `8`.

Trước khi chạy thử, hãy dự đoán tốc độ nhân vật thay đổi thế nào. Sau đó kiểm tra xem nhân vật còn va chạm đúng với tường không.

### Bài tập 3 — Mở rộng

Tạo ba chìa khóa. Người chơi chỉ chiến thắng khi đã nhặt đủ cả ba.

Gợi ý: thay trạng thái Boolean `HasKey` bằng một biến đếm số chìa khóa đã thu thập và so sánh với số lượng yêu cầu tại `Goal`.

## 9. Câu hỏi ôn tập trắc nghiệm

Bài kiểm tra kiến thức

0/5 câu đã trả lời

Câu 1. Khi muốn phát hiện nhân vật đi vào vùng nhặt chìa khóa mà không bị chặn lại, thiết lập nào phù hợp nhất?

A. Đổi camera sang Perspective

B. Bật Is Trigger trên Collider2D của chìa khóa

C. Xóa Rigidbody2D của nhân vật

D. Tăng Order in Layer

Câu 2. Vì sao nên đặt Gravity Scale bằng 0 trong trò chơi 2D góc nhìn từ trên xuống?

A. Để nhân vật không chịu gia tốc trọng trường

B. Để SpriteRenderer luôn nằm phía trước

C. Để vô hiệu hóa mọi va chạm

D. Để tự động thu thập vật phẩm

Câu 3. Khi sử dụng Rigidbody2D của Unity 6, thuộc tính nào trong ví dụ điều khiển vận tốc?

A. transform.localScale

B. sortingOrder

C. linearVelocity

D. isTrigger

Câu 4. Nhân vật chạm Goal trước khi nhặt Key. Kết quả đúng theo logic đã xây dựng là gì?

A. Nhân vật tự động nhận chìa khóa

B. Chìa khóa bị xóa khỏi scene

C. Trò chơi lập tức chiến thắng

D. Console thông báo cần tìm chìa khóa trước

Câu 5. Một sprite bị đối tượng khác che trong Game view. Nên kiểm tra thành phần nào trước?

A. Rigidbody2D Gravity Scale

B. SpriteRenderer Sorting Layer và Order in Layer

C. Collider2D Is Trigger

D. Giá trị HasKey

Nộp bài và xem giải thích

## 10. Checklist hoàn thành

Tiến độ thực hành

0/8

Scene 2D được cấu hình bằng camera Orthographic.

Player có SpriteRenderer, Rigidbody2D và Collider2D.

Các sprite có kích thước và thứ tự hiển thị hợp lý.

Player di chuyển và va chạm với tường chính xác.

Key được thu thập bằng sự kiện OnTriggerEnter2D().

Goal kiểm tra điều kiện chiến thắng.

Đã chạy thử các trường hợp thành công và thất bại.

Đã lưu ảnh Game view, Console và ghi nhận kết quả.

## 11. Tổng kết

Bài thực hành đã kết hợp các thành phần cơ bản của Unity 2D để tạo thành một trò chơi có quy tắc rõ ràng: di chuyển → thu thập chìa khóa → kiểm tra điều kiện → hoàn thành.

Các kiến thức quan trọng cần ghi nhớ là vai trò của `SpriteRenderer`, sự khác nhau giữa `Rigidbody2D` và `Collider2D`, cách sử dụng `OnTriggerEnter2D()` và phương pháp kiểm tra lỗi trong `Play mode`.

Khi các chức năng đã hoạt động ổn định, có thể phát triển trò chơi bằng giao diện thông báo chiến thắng, hiệu ứng âm thanh, hệ thống nhiều màn chơi hoặc những câu đố phức tạp hơn.

Tham khảo: [Unity Learn — 2D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3\&utm_source=chatgpt.com).