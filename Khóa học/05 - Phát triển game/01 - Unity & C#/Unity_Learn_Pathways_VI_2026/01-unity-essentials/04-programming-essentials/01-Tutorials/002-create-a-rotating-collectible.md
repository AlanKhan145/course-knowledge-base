# Bài 02 — Create a Rotating Collectible

Tạo vật phẩm xoay và có thể thu thập trong Unity

Pathway: Unity Essentials · Mission: Programming Essentials · Loại: Tutorial · Phiên bản: Unity 6.3

Kiến thức trọng tâm: `GameObject`, `Prefab`, `Transform`, `Collider`, `Trigger`, `Instantiate()`, `Destroy()` và lập trình C#.

Tham khảo: [Unity Learn — Programming Essentials](https://learn.unity.com/pathway/unity-essentials/unit/programming-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong nhiều trò chơi, người chơi có thể thu thập những vật phẩm như đồng xu, viên kim cương, chìa khóa hoặc các vật phẩm tăng sức mạnh (power-ups).

Những vật phẩm này thường có ba hành vi cơ bản:

- Xoay liên tục: Giúp vật phẩm nổi bật trong môi trường 3D.
- Phát hiện tương tác: Xác định khi nhân vật chạm vào vật phẩm.
- Biến mất sau khi thu thập: Cập nhật trạng thái trò chơi và loại bỏ vật phẩm khỏi Scene.

Ví dụ, trong một trò chơi phiêu lưu, đồng xu có thể xoay quanh trục Y. Khi nhân vật di chuyển đến vị trí đồng xu, trò chơi ghi nhận việc thu thập và đồng xu biến mất.

[Building a Simple Coin Collector Game in Unity 6 with Starter Assets | by Shaun Codes | Medium](https://images.openai.com/static-rsc-4/NRSPjliwGavJCov_TFYRh5kIF-c8NbQQsXXhYuB5XDAIvCG0b4jSSHU3Z-srrCpfhGdpOWLjSI__n_EZwzt2Z0JssjG_FqMpAofgcXlvzTQpDf8vtB-o2-aX5cRaFX1LV9ovMHOhs0Z-PILhe9VCA8lJRLmmDI7fMyz-KzemxW4?purpose=inline)

[medium.com](https://medium.com/%40fulton_shaun/building-a-simple-coin-collector-game-in-unity-6-with-starter-assets-955a893a6087?utm_source=chatgpt.com)

Minh họa vật phẩm đồng xu trong môi trường game 3D.

Ở bài thực hành này, chúng ta xây dựng một hệ thống vật phẩm có thể tái sử dụng bằng `Prefab`, tự xoay bằng C# và phản hồi khi được người chơi thu thập.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của `GameObject`, `Component` và `Prefab` trong việc xây dựng vật phẩm.
2. Sử dụng `Transform.Rotate()` kết hợp `Time.deltaTime` để tạo chuyển động xoay ổn định.
3. Cấu hình `Collider` và `Is Trigger` để phát hiện tương tác.
4. Sử dụng `OnTriggerEnter()` để xử lý việc thu thập vật phẩm.
5. Áp dụng `Instantiate()` và `Destroy()` để quản lý vòng đời GameObject.
6. Tạo nhiều bản sao từ một Prefab và kiểm tra những thay đổi trong Inspector.
7. Phát hiện và khắc phục những lỗi thường gặp khi chạy thử trong Unity Editor.

## 3. Kiến thức nền tảng

### 3.1. GameObject và Component

Trong Unity, mọi đối tượng xuất hiện trong Scene đều được tổ chức dưới dạng `GameObject`.

Một GameObject có thể chứa nhiều Component, mỗi Component đảm nhận một chức năng riêng.

Ví dụ, GameObject `Coin` có thể có cấu trúc:

Coin — GameObject

Transform

Quản lý vị trí, góc xoay và tỷ lệ

Mesh Filter / Mesh Renderer

Xác định hình dạng và hiển thị vật phẩm

Collider — Is Trigger

Phát hiện vật thể đi vào vùng tương tác

RotatingCollectible.cs

Điều khiển xoay và xử lý thu thập

Mỗi Component có thể được cấu hình trong cửa sổ Inspector.

### 3.2. Prefab là gì?

`Prefab` là một mẫu GameObject có thể tái sử dụng trong nhiều Scene hoặc tạo thành nhiều bản sao.

Ví dụ, trò chơi có 100 đồng xu. Thay vì cấu hình từng đồng xu, chúng ta tạo một `Coin Prefab` rồi sử dụng lại.

\#chatgpt-mermaid-\_r_kb\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_kb\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_kb\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_kb\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_kb\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_kb\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_kb\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_kb\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_kb\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_kb\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kb\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kb\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_kb\_ p{margin:0;}#chatgpt-mermaid-\_r_kb\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_kb\_ .label text,#chatgpt-mermaid-\_r_kb\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ .node rect,#chatgpt-mermaid-\_r_kb\_ .node circle,#chatgpt-mermaid-\_r_kb\_ .node ellipse,#chatgpt-mermaid-\_r_kb\_ .node polygon,#chatgpt-mermaid-\_r_kb\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .rough-node .label text,#chatgpt-mermaid-\_r_kb\_ .node .label text,#chatgpt-mermaid-\_r_kb\_ .image-shape .label,#chatgpt-mermaid-\_r_kb\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_kb\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .rough-node .label,#chatgpt-mermaid-\_r_kb\_ .node .label,#chatgpt-mermaid-\_r_kb\_ .image-shape .label,#chatgpt-mermaid-\_r_kb\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_kb\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_kb\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kb\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kb\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_kb\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_kb\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kb\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kb\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_kb\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_kb\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kb\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_kb\_ .icon-shape,#chatgpt-mermaid-\_r_kb\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_kb\_ .icon-shape p,#chatgpt-mermaid-\_r_kb\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_kb\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_kb\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kb\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_kb\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_kb\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_kb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_kb\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_kb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_kb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kb\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_kb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kb\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_kb\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_kb\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_kb\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_kb\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .node rect,#chatgpt-mermaid-\_r_kb\_ .node circle,#chatgpt-mermaid-\_r_kb\_ .node ellipse,#chatgpt-mermaid-\_r_kb\_ .node polygon,#chatgpt-mermaid-\_r_kb\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_kb\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_kb\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_kb\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_kb\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kb\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Coin PrefabCoin Instance 01Coin Instance 02Coin Instance 03Coin Instance ...

Phân biệt Prefab Asset và Prefab Instance:

| Khái niệm       | Ý nghĩa                                             |
| --------------- | --------------------------------------------------- |
| Prefab Asset    | Mẫu được lưu trong thư mục Project                  |
| Prefab Instance | Bản thể hiện của Prefab trong Scene                 |
| Prefab Override | Thuộc tính trên instance được thay đổi khác với mẫu |
| Apply           | Đưa một số thay đổi từ instance về Prefab Asset     |
| Revert          | Khôi phục giá trị thuộc tính theo Prefab Asset      |

Ví dụ, `Coin 01` có tốc độ quay 90 độ/giây, còn `Coin 02` được chỉnh riêng thành 180 độ/giây. Đây là trường hợp sử dụng Prefab Override.

### 3.3. Transform và chuyển động xoay

`Transform` lưu trữ ba nhóm thuộc tính quan trọng của GameObject:

| Thuộc tính | Chức năng                 |
| ---------- | ------------------------- |
| Position   | Vị trí của đối tượng      |
| Rotation   | Góc và hướng xoay         |
| Scale      | Kích thước theo từng trục |

Trong Unity 3D, ba trục tọa độ cơ bản là:

X: ngang · Y: dọc · Z: chiều sâu

Để xoay GameObject quanh trục Y, có thể sử dụng:

```
transform.Rotate(Vector3.up, 90f * Time.deltaTime);
```

Trong đó:

- `transform`: Component Transform của GameObject.
- `Rotate()`: phương thức thay đổi góc xoay.
- `Vector3.up`: vector biểu diễn hướng trục Y.
- `90f`: tốc độ xoay 90 độ mỗi giây.
- `Time.deltaTime`: thời gian thực hiện frame vừa qua, tính bằng giây.

### 3.4. Tại sao cần Time.deltaTime?

Hàm `Update()` thường được gọi một lần cho mỗi frame. Số frame mỗi giây có thể thay đổi tùy hiệu năng máy tính.

Nếu viết:

```
transform.Rotate(0f, 1f, 0f);
```

Đối tượng xoay thêm một độ trong mỗi frame. Vì vậy:

- 30 FPS → khoảng 30 độ/giây.
- 60 FPS → khoảng 60 độ/giây.
- 120 FPS → khoảng 120 độ/giây.

Kết quả là tốc độ xoay phụ thuộc FPS.

Thay vào đó:

```
transform.Rotate(0f, 90f * Time.deltaTime, 0f);
```

Ta áp dụng công thức:

\\[ \Delta\theta=\omega\times\Delta t \\]

Trong đó:

- \\(\Delta\theta\\): góc xoay thêm trong một frame.
- \\(\omega\\): tốc độ góc, tính bằng độ/giây.
- \\(\Delta t\\): thời gian của frame.

Ví dụ, khi tốc độ góc là 90 độ/giây:

| FPS | Delta Time xấp xỉ | Góc xoay mỗi frame |
| --- | ----------------- | ------------------ |
| 30  | 0,0333 s          | 3°                 |
| 60  | 0,0167 s          | 1,5°               |
| 120 | 0,0083 s          | 0,75°              |

Như vậy, trong điều kiện chạy ổn định, đồng xu sẽ xoay gần 90 độ sau mỗi giây, bất kể FPS khác nhau.

## 4. Thực hành: Tạo vật phẩm xoay

### 4.1. Chuẩn bị Scene

Mở một dự án Unity 6.3 sử dụng môi trường 3D.

Trong cửa sổ Hierarchy, tạo các GameObject cơ bản:

| GameObject        | Chức năng            |
| ----------------- | -------------------- |
| Plane             | Mặt đất              |
| Player            | Nhân vật di chuyển   |
| Coin              | Vật phẩm để thu thập |
| Main Camera       | Quan sát Scene       |
| Directional Light | Chiếu sáng           |

Nếu sử dụng Scene đã có sẵn nhân vật di chuyển, có thể giữ nguyên `Player`.

### 4.2. Tạo hình dạng đồng xu

1. Trong Hierarchy, chọn GameObject → 3D Object → Cylinder.
2. Đổi tên thành `Coin`.
3. Chọn GameObject và mở Inspector.
4. Thiết lập Transform như sau:

| Thuộc tính | Giá trị minh họa |
| ---------- | ---------------- |
| Position   | (0, 1, 3)        |
| Rotation   | (0, 0, 90)       |
| Scale      | (0.5, 0.08, 0.5) |

Cylinder mặc định có trục dài theo Y. Việc xoay và làm mỏng Cylinder giúp tạo hình giống đồng xu.

Các giá trị này chỉ mang tính thực hành, có thể điều chỉnh theo Scene.

Tạo Material:

Trong Project, nhấn chuột phải → Create → Material, đổi tên thành `GoldMaterial`.

Cấu hình màu vàng và kéo Material vào đối tượng `Coin`.

[Chapter 2: Creating a Collection Game | Unity 2020 By Example](https://images.openai.com/static-rsc-4/NJmGBmp4p3qBWRnzTSTD-8jyN9qxztE0ThGaSmuuhrLBt-UPZIkTg-qhmlmBsSFMpfuqVfoeQrlnKV0pWO757Uy9ru5T0YIdSmThd6zxAnTOi4jifbbmvZgaKTYnn0INccShcVkIGLnvN3K2GwUhPJ0OL7wVUtisB_MSu2Z761c?purpose=inline)

[subscription.packtpub.com](https://subscription.packtpub.com/book/game-development/9781800203389/2/ch02lvl1sec16/recording-the-total-coin-count?utm_source=chatgpt.com)

Vật phẩm có thể được tạo từ mesh đơn giản và Material màu vàng.

### 4.3. Viết script điều khiển xoay

Trong thư mục `Assets/Scripts`, tạo C# Script tên:

`RotatingCollectible.cs`

Nhập đoạn mã:

```

using UnityEngine;

public class RotatingCollectible : MonoBehaviour
{
    [SerializeField]
    private float rotationSpeed = 90f;

    private void Update()
    {
        transform.Rotate(
            Vector3.up,
            rotationSpeed * Time.deltaTime,
            Space.World
        );
    }
}

```

Giải thích:

`rotationSpeed` xác định tốc độ xoay tính bằng độ/giây. Thuộc tính `[SerializeField]` cho phép chỉnh giá trị của biến `private` trong Inspector.

`Update()` được gọi theo từng frame khi script đang hoạt động.

`Space.World` xác định trục xoay theo hệ tọa độ thế giới. Do đó, đồng xu xoay quanh hướng Y của thế giới, kể cả khi bản thân nó đã được đặt nghiêng.

Gắn script vào Coin:

1. Chọn GameObject `Coin`.
2. Trong Inspector, nhấn Add Component.
3. Tìm `RotatingCollectible`.
4. Đặt `Rotation Speed = 90`.
5. Nhấn Play.

Checkpoint 1: Vật phẩm phải xoay liên tục khi trò chơi chạy.

Nếu đồng xu không xoay, kiểm tra script đã được gắn, Component đang bật và Console không xuất hiện lỗi C#.

## 5. Tạo tương tác thu thập vật phẩm

### 5.1. Collider và Trigger

`Collider` định nghĩa vùng hình học được hệ thống vật lý sử dụng để phát hiện va chạm hoặc tương tác.

Đối với một vật phẩm có thể thu thập, chúng ta thường muốn nhân vật đi xuyên qua vật phẩm nhưng vẫn phát hiện sự tiếp xúc.

Đó là vai trò của `Trigger`.

| Collider thông thường              | Trigger Collider                          |
| ---------------------------------- | ----------------------------------------- |
| Tham gia phản hồi va chạm vật lý   | Phát hiện vùng giao nhau                  |
| Có thể ngăn hai vật thể xuyên nhau | Không tự tạo phản hồi va chạm             |
| Phù hợp sàn, tường, vật cản        | Phù hợp đồng xu, checkpoint, vùng sự kiện |

### 5.2. Thiết lập Trigger

Chọn `Coin` trong Hierarchy.

Trong Inspector:

1. Tìm Component `Capsule Collider` có sẵn từ Cylinder.
2. Điều chỉnh kích thước vùng va chạm cho phù hợp.
3. Bật Is Trigger.

Đối với `Player`, cần kiểm tra:

- Có Collider 3D, chẳng hạn `Capsule Collider`.
- Có Tag là `Player`.
- Hệ thống di chuyển đang hoạt động.
- Ít nhất một trong hai đối tượng tham gia trigger có `Rigidbody` phù hợp để Unity phát sinh sự kiện vật lý.

Trong bài thực hành, có thể đặt `Rigidbody` trên `Player` và giữ `Coin` chỉ có Trigger Collider.

Nếu `Player` có `Rigidbody` nhưng được điều khiển trực tiếp bằng Transform, cần chú ý việc đồng bộ chuyển động với hệ thống vật lý. Một bộ điều khiển sử dụng `Rigidbody.MovePosition()` hoặc một controller vật lý phù hợp sẽ nhất quán hơn.

### 5.3. Sử dụng OnTriggerEnter()

`OnTriggerEnter(Collider other)` là callback Unity gọi khi một Collider phù hợp bắt đầu đi vào vùng Trigger.

Cập nhật script `RotatingCollectible.cs`:

```

using UnityEngine;

public class RotatingCollectible : MonoBehaviour
{
    [SerializeField]
    private float rotationSpeed = 90f;

    private bool isCollected = false;

    private void Update()
    {
        transform.Rotate(
            Vector3.up,
            rotationSpeed * Time.deltaTime,
            Space.World
        );
    }

    private void OnTriggerEnter(Collider other)
    {
        if (isCollected)
            return;

        if (!other.CompareTag("Player"))
            return;

        isCollected = true;

        Debug.Log("Collected: " + gameObject.name);

        Destroy(gameObject);
    }
}

```

Phân tích từng phần:

- `OnTriggerEnter(Collider other)`: nhận Collider đi vào vùng Trigger.
- `CompareTag("Player")`: chỉ chấp nhận đối tượng được gán Tag `Player`.
- `isCollected`: ngăn việc xử lý thu thập lặp lại.
- `Debug.Log()`: in thông báo trong Console.
- `Destroy(gameObject)`: yêu cầu Unity hủy GameObject sau khi thu thập.

Lưu ý: `Destroy()` thông thường không hủy đối tượng ngay tại chính dòng lệnh mà thực hiện việc hủy sau đó trong vòng lặp Unity.

### 5.4. Sơ đồ luồng thu thập

\#chatgpt-mermaid-\_r_lr\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_lr\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lr\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lr\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_lr\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_lr\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_lr\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_lr\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_lr\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_lr\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lr\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lr\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_lr\_ p{margin:0;}#chatgpt-mermaid-\_r_lr\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_lr\_ .label text,#chatgpt-mermaid-\_r_lr\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ .node rect,#chatgpt-mermaid-\_r_lr\_ .node circle,#chatgpt-mermaid-\_r_lr\_ .node ellipse,#chatgpt-mermaid-\_r_lr\_ .node polygon,#chatgpt-mermaid-\_r_lr\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .rough-node .label text,#chatgpt-mermaid-\_r_lr\_ .node .label text,#chatgpt-mermaid-\_r_lr\_ .image-shape .label,#chatgpt-mermaid-\_r_lr\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_lr\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .rough-node .label,#chatgpt-mermaid-\_r_lr\_ .node .label,#chatgpt-mermaid-\_r_lr\_ .image-shape .label,#chatgpt-mermaid-\_r_lr\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_lr\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_lr\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lr\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lr\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_lr\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lr\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lr\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lr\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_lr\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_lr\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lr\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_lr\_ .icon-shape,#chatgpt-mermaid-\_r_lr\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lr\_ .icon-shape p,#chatgpt-mermaid-\_r_lr\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_lr\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_lr\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lr\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_lr\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_lr\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_lr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_lr\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_lr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_lr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lr\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_lr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lr\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lr\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lr\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_lr\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_lr\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .node rect,#chatgpt-mermaid-\_r_lr\_ .node circle,#chatgpt-mermaid-\_r_lr\_ .node ellipse,#chatgpt-mermaid-\_r_lr\_ .node polygon,#chatgpt-mermaid-\_r_lr\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lr\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_lr\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_lr\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_lr\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lr\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu trò chơiCoin xoay trong UpdateCollider đi vào Trigger?Đã thu thập?Có Tag Player?Đánh dấu đã thu thậpGhi log ConsoleDestroy CoinCoin biến mất khỏi SceneKhôngCóCóChưaKhôngCó

Sơ đồ thể hiện hai trách nhiệm khác nhau: `Update()` làm vật phẩm xoay liên tục, còn `OnTriggerEnter()` chỉ xử lý khi xảy ra tương tác phù hợp.

Checkpoint 2: Khi nhân vật đi vào đồng xu, vật phẩm biến mất và Console xuất hiện thông báo `Collected: Coin`.

## 6. Biến vật phẩm thành Prefab

Sau khi đồng xu hoạt động, có thể lưu toàn bộ cấu hình của nó thành Prefab.

### 6.1. Tạo Prefab Asset

1. Tạo thư mục `Assets/Prefabs`.
2. Chọn `Coin` trong Hierarchy.
3. Kéo GameObject này vào thư mục `Prefabs`.
4. Unity tạo một Prefab Asset.
5. Đặt ít nhất hai instance của Prefab trong Scene.

Ví dụ:

```
Assets/
├── Materials/
│   └── GoldMaterial.mat
├── Prefabs/
│   └── Coin.prefab
└── Scripts/
    ├── RotatingCollectible.cs
    └── SpawnOne.cs
```

### 6.2. Thử nghiệm Prefab Override

Chọn một instance của Coin trong Scene.

Thay đổi `Rotation Speed` từ 90 thành 180.

Nhấn Play và quan sát hai đồng xu.

Kết quả mong đợi:

- Coin thứ nhất xoay 90 độ/giây.
- Coin thứ hai xoay 180 độ/giây.
- Cấu hình tốc độ xoay riêng của instance không tự động thay đổi Prefab Asset.

Nếu muốn cập nhật mẫu chung, dùng thao tác Apply phù hợp trong Inspector.

Lưu ý rằng thay đổi được thực hiện khi đang ở Play Mode thường không được lưu lại sau khi thoát Play Mode.

## 7. Sinh vật phẩm bằng Instantiate()

Bên cạnh việc đặt sẵn các Prefab Instance trong Scene, Unity cho phép tạo GameObject khi trò chơi đang chạy.

Phương thức được sử dụng là:

```
Instantiate(prefab, position, rotation);
```

Trong đó:

| Tham số    | Ý nghĩa                   |
| ---------- | ------------------------- |
| `prefab`   | Đối tượng cần tạo bản sao |
| `position` | Vị trí của bản sao        |
| `rotation` | Góc xoay khởi tạo         |

### 7.1. Tạo SpawnOne.cs

```

using UnityEngine;

public class SpawnOne : MonoBehaviour
{
    [SerializeField]
    private GameObject prefab;

    public void Spawn()
    {
        if (prefab == null)
            return;

        Instantiate(
            prefab,
            transform.position + Vector3.forward * 2f,
            Quaternion.identity
        );
    }
}

```

Cơ chế hoạt động:

`prefab` là tham chiếu đến mẫu GameObject được kéo từ Project vào Inspector.

`transform.position + Vector3.forward * 2f` xác định vị trí cách GameObject chứa script hai đơn vị theo hướng Z dương của thế giới.

`Quaternion.identity` biểu diễn góc xoay khởi tạo bằng không.

Điểm quan trọng: `Spawn()` chỉ tạo vật phẩm khi được gọi. Script này không tự động tạo vật phẩm liên tục mỗi frame.

### 7.2. Cấu hình đối tượng sinh vật phẩm

Tạo một Empty GameObject tên `CoinSpawner`.

Gắn script `SpawnOne.cs` vào đối tượng này.

Trong Inspector, kéo `Coin.prefab` vào trường `Prefab`.

Để thử nghiệm, có thể gọi phương thức `Spawn()` thông qua sự kiện `On Click()` của một UI Button:

1. Tạo một Button trong Canvas.
2. Trong phần On Click(), thêm đối tượng `CoinSpawner`.
3. Chọn phương thức `SpawnOne → Spawn()`.
4. Nhấn Play và nhấp Button.

Mỗi lần gọi `Spawn()`, một bản sao mới được tạo.

\#chatgpt-mermaid-\_r_mo\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mo\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mo\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mo\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mo\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mo\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mo\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mo\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mo\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mo\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mo\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mo\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mo\_ p{margin:0;}#chatgpt-mermaid-\_r_mo\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mo\_ .label text,#chatgpt-mermaid-\_r_mo\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ .node rect,#chatgpt-mermaid-\_r_mo\_ .node circle,#chatgpt-mermaid-\_r_mo\_ .node ellipse,#chatgpt-mermaid-\_r_mo\_ .node polygon,#chatgpt-mermaid-\_r_mo\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .rough-node .label text,#chatgpt-mermaid-\_r_mo\_ .node .label text,#chatgpt-mermaid-\_r_mo\_ .image-shape .label,#chatgpt-mermaid-\_r_mo\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mo\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .rough-node .label,#chatgpt-mermaid-\_r_mo\_ .node .label,#chatgpt-mermaid-\_r_mo\_ .image-shape .label,#chatgpt-mermaid-\_r_mo\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mo\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mo\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mo\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mo\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mo\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mo\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mo\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mo\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mo\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mo\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mo\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mo\_ .icon-shape,#chatgpt-mermaid-\_r_mo\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mo\_ .icon-shape p,#chatgpt-mermaid-\_r_mo\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mo\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mo\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mo\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mo\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mo\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mo\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mo\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mo\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mo\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mo\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mo\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mo\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mo\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mo\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mo\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mo\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .node rect,#chatgpt-mermaid-\_r_mo\_ .node circle,#chatgpt-mermaid-\_r_mo\_ .node ellipse,#chatgpt-mermaid-\_r_mo\_ .node polygon,#chatgpt-mermaid-\_r_mo\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mo\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mo\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mo\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mo\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mo\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}UI ButtonSpawnOne.SpawnPrefab đã gán?Không tạo vật phẩmInstantiateCoin Instance mớiRotatingCollectible hoạt độngNgười chơi thu thậpDestroy instanceOn ClickKhôngCó

Prefab Asset ban đầu vẫn được giữ nguyên trong Project, ngay cả khi các instance được tạo ra bị hủy trong khi chơi.

### 7.3. Quản lý số lượng GameObject

Nếu gọi `Instantiate()` liên tục trong mỗi frame, số lượng GameObject sẽ tăng rất nhanh.

Điều đó có thể làm tăng:

- Số Component cần cập nhật.
- Chi phí xử lý vật lý.
- Số lượng đối tượng cần quản lý trong Scene.
- Chi phí cấp phát và hủy đối tượng.

Đối với vật phẩm xuất hiện ít, `Instantiate()` và `Destroy()` thường là cách triển khai đơn giản, phù hợp.

Đối với trò chơi tạo và hủy đối tượng thường xuyên, có thể cân nhắc Object Pooling: tái sử dụng các GameObject thay vì liên tục tạo mới và hủy bỏ.

## 8. Kiểm thử và Debug

### 8.1. Các trường hợp kiểm thử

| Trường hợp | Thao tác                           | Kết quả mong đợi           |
| ---------- | ---------------------------------- | -------------------------- |
| TC01       | Chạy Scene                         | Coin xoay liên tục         |
| TC02       | Đổi tốc độ từ 90 thành 180         | Coin xoay nhanh gấp đôi    |
| TC03       | Player đi vào Trigger              | Coin biến mất              |
| TC04       | Vật thể không có Tag Player đi vào | Coin không bị thu thập     |
| TC05       | Gọi Spawn() một lần                | Một instance mới xuất hiện |
| TC06       | Gọi Spawn() nhiều lần              | Có nhiều instance mới      |
| TC07       | Thu thập Coin được sinh ra         | Chỉ instance đó bị hủy     |

### 8.2. Lỗi thường gặp

| Hiện tượng                        | Nguyên nhân có thể                          | Cách kiểm tra                                            |
| --------------------------------- | ------------------------------------------- | -------------------------------------------------------- |
| Coin không xoay                   | Script chưa gắn hoặc bị vô hiệu hóa         | Kiểm tra Inspector và Console                            |
| Coin xoay sai hướng               | Trục quay hoặc Rotation không phù hợp       | Kiểm tra `Vector3.up` và `Space.World`                   |
| Player chạm Coin nhưng không nhặt | Trigger, Rigidbody hoặc Tag chưa đúng       | Kiểm tra cả hai GameObject                               |
| `OnTriggerEnter()` không chạy     | Cấu hình Collider 3D và vật lý không hợp lệ | Kiểm tra Rigidbody, Is Trigger và Layer Collision Matrix |
| Không sinh Coin                   | Tham chiếu Prefab chưa được gán             | Kiểm tra trường `Prefab`                                 |
| Coin sinh ở vị trí sai            | Vị trí Spawner hoặc offset chưa đúng        | Kiểm tra Transform                                       |
| Scene xuất hiện quá nhiều Coin    | Gọi `Instantiate()` liên tục                | Kiểm tra nơi gọi `Spawn()`                               |

### 8.3. Quy trình Debug

\#chatgpt-mermaid-\_r_n1\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_n1\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_n1\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_n1\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_n1\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_n1\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_n1\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_n1\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_n1\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_n1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n1\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n1\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_n1\_ p{margin:0;}#chatgpt-mermaid-\_r_n1\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_n1\_ .label text,#chatgpt-mermaid-\_r_n1\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ .node rect,#chatgpt-mermaid-\_r_n1\_ .node circle,#chatgpt-mermaid-\_r_n1\_ .node ellipse,#chatgpt-mermaid-\_r_n1\_ .node polygon,#chatgpt-mermaid-\_r_n1\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .rough-node .label text,#chatgpt-mermaid-\_r_n1\_ .node .label text,#chatgpt-mermaid-\_r_n1\_ .image-shape .label,#chatgpt-mermaid-\_r_n1\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_n1\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .rough-node .label,#chatgpt-mermaid-\_r_n1\_ .node .label,#chatgpt-mermaid-\_r_n1\_ .image-shape .label,#chatgpt-mermaid-\_r_n1\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_n1\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_n1\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n1\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n1\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_n1\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_n1\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_n1\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_n1\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_n1\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_n1\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n1\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_n1\_ .icon-shape,#chatgpt-mermaid-\_r_n1\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_n1\_ .icon-shape p,#chatgpt-mermaid-\_r_n1\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_n1\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_n1\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_n1\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_n1\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_n1\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_n1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_n1\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_n1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_n1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n1\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_n1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n1\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_n1\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_n1\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_n1\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_n1\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .node rect,#chatgpt-mermaid-\_r_n1\_ .node circle,#chatgpt-mermaid-\_r_n1\_ .node ellipse,#chatgpt-mermaid-\_r_n1\_ .node polygon,#chatgpt-mermaid-\_r_n1\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_n1\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_n1\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_n1\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_n1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n1\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện hành vi saiTái hiện lỗiĐọc ConsoleKiểm tra GameObject vàComponentĐưa ra giả thuyếtChỉ thay đổi một yếu tốChạy thử lạiĐã hoạt động đúng?Ghi nhận cách khắc phụcChưaRồi

Khi Debug, nên kiểm tra lần lượt từ Component đơn giản nhất. Ví dụ, nếu Coin không biến mất, hãy xác minh Trigger có được kích hoạt trước khi kiểm tra đến `Destroy()`.

## 9. Bài tập thực hành

### Bài tập A — Thay đổi tốc độ xoay

Tạo ba Coin Prefab Instance trong Scene, thiết lập:

- Coin A: 45 độ/giây.
- Coin B: 90 độ/giây.
- Coin C: 180 độ/giây.

Quan sát sự khác biệt và giải thích vai trò của `Time.deltaTime`.

### Bài tập B — Hệ thống vật phẩm có nhiều màu sắc

Tạo ba loại vật phẩm:

- Đồng xu vàng.
- Viên ngọc xanh.
- Viên ngọc đỏ.

Mỗi vật phẩm có Material và tốc độ xoay khác nhau nhưng sử dụng chung script `RotatingCollectible`.

Mục tiêu là chứng minh tính tái sử dụng của Component và Prefab.

### Bài tập C — Bộ đếm vật phẩm

Mở rộng hệ thống để mỗi lần người chơi nhặt Coin, số điểm tăng thêm một.

Gợi ý: sử dụng một Component trên Player để lưu số lượng vật phẩm đã thu thập, sau đó gọi phương thức cập nhật điểm từ sự kiện `OnTriggerEnter()`.

## 10. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Vì sao nên nhân tốc độ xoay với Time.deltaTime?

A. Để tăng tốc độ xoay theo FPS

B. Để đảm bảo tốc độ xoay theo thời gian, ít phụ thuộc FPS

C. Để tự động kích hoạt Collider

D. Để thay đổi kích thước GameObject

Câu 2. Khi muốn Player đi xuyên qua Coin nhưng vẫn phát hiện tương tác, nên sử dụng gì?

A. Collider với Is Trigger được bật

B. Chỉ dùng Mesh Renderer

C. Tắt toàn bộ Collider

D. Chỉ thay đổi Transform Scale

Câu 3. Instantiate() được sử dụng để làm gì?

A. Xóa đối tượng khỏi Scene

B. Thay đổi Tag của GameObject

C. Tạo bản sao đối tượng tại runtime

D. Đặt tốc độ khung hình

Câu 4. Khi một Coin Instance được Destroy(), điều gì xảy ra với Prefab Asset trong Project?

A. Prefab Asset cũng bị xóa

B. Toàn bộ instance khác bị xóa

C. Prefab Asset tự đổi tên

D. Prefab Asset vẫn tồn tại

Câu 5. Một Coin có Is Trigger và Player có Collider nhưng callback không chạy. Nên kiểm tra điều gì?

A. Chỉ màu của Material

B. Rigidbody, cấu hình Collider, Tag và Layer tương tác

C. Chỉ Rotation của Main Camera

D. Chỉ số lượng Prefab trong Project

Chấm điểmLàm lại

## 11. Checklist hoàn thành

Tiến độ thực hành

0/10

Tạo được một GameObject có hình dạng đồng xu.

Cấu hình được Material và Transform.

Viết và gắn script RotatingCollectible.cs.

Sử dụng Time.deltaTime để điều khiển tốc độ xoay.

Cấu hình Trigger và phát hiện Player bằng OnTriggerEnter().

Thu thập vật phẩm và hủy instance bằng Destroy().

Tạo Prefab và ít nhất hai instance trong Scene.

Sinh thêm vật phẩm bằng Instantiate().

Kiểm thử và ghi nhận ít nhất một lỗi cùng cách sửa.

Hoàn thành bài tập thực hành và câu hỏi ôn tập.

## 12. Tổng kết

Qua bài học này, người học đã xây dựng một hệ thống vật phẩm có thể xoay, tương tác và tái sử dụng.

Các kiến thức cốt lõi gồm:

- `Transform.Rotate()` điều khiển chuyển động xoay của vật phẩm.
- `Time.deltaTime` giúp tốc độ xoay ổn định theo thời gian.
- `Collider` và `OnTriggerEnter()` phát hiện sự kiện người chơi thu thập.
- `Prefab` lưu cấu hình của vật phẩm để tái sử dụng.
- `Instantiate()` tạo bản sao GameObject trong khi chạy.
- `Destroy()` hủy instance khi không còn cần thiết.

Kết hợp các kỹ thuật này, có thể phát triển hệ thống vật phẩm cho game phiêu lưu, game platformer, game giải đố hoặc trò chơi 3D có cơ chế thu thập và tính điểm.

Ghi chú phiên bản: Bài thực hành được xây dựng cho ngữ cảnh Unity 6.3. Các thao tác và ví dụ C# có thể điều chỉnh tùy loại project, hệ thống điều khiển nhân vật và cách cấu hình Physics.