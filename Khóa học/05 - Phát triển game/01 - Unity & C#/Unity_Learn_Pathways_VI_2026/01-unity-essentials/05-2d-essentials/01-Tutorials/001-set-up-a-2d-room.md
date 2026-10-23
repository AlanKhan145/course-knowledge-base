# Bài 01 — Set up a 2D room

Pathway: Unity Essentials · Module: 2D Essentials · Loại: Tutorial · Phiên bản: Unity 6.3

Chủ đề: Thiết lập một căn phòng 2D, tổ chức các đối tượng bằng Sprite, cấu hình hiển thị và tạo tương tác vật lý cơ bản.

Tham khảo: [Unity Learn — 2D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong Unity, môi trường 2D được xây dựng từ các đối tượng như nhân vật, nền, tường, sàn và vật phẩm. Mỗi đối tượng được quản lý thông qua `GameObject` và các `Component` tương ứng.

Ví dụ, một căn phòng 2D đơn giản có thể bao gồm:

- Background: Hình nền của căn phòng.
- Player: Nhân vật chính.
- Floor: Mặt sàn của căn phòng.
- Walls: Các bức tường giới hạn không gian.
- Collectible: Vật phẩm mà người chơi có thể thu thập.
- Main Camera: Camera hiển thị toàn bộ không gian.

Minh họa bố cục căn phòng 2D

Minh họa mang tính khái niệm, không phải ảnh chụp Unity Editor.

Mục tiêu cuối cùng là tạo được một Scene 2D có các đối tượng hiển thị đúng vị trí, đúng thứ tự và có thể kiểm tra tương tác trong Play mode.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Tạo và cấu hình một Scene 2D với camera `Orthographic`.
2. Giải thích vai trò của `SpriteRenderer`, `Rigidbody2D` và `Collider2D`.
3. Thiết lập `Pixels Per Unit`, `Sorting Layer` và `Order in Layer`.
4. Tổ chức các GameObject trong một căn phòng 2D.
5. Tạo tương tác thu thập vật phẩm bằng `OnTriggerEnter2D()`.
6. Kiểm thử, xác định và khắc phục các lỗi hiển thị hoặc vật lý thường gặp.

## 3. Kiến thức nền tảng

### 3.1. Scene, GameObject và Component

Unity tổ chức nội dung trò chơi theo ba khái niệm:

| Khái niệm    | Chức năng                                                  |
| ------------ | ---------------------------------------------------------- |
| `Scene`      | Chứa toàn bộ không gian trò chơi và các đối tượng          |
| `GameObject` | Đại diện cho một đối tượng như nhân vật, nền hoặc vật phẩm |
| `Component`  | Cung cấp dữ liệu và chức năng cho GameObject               |
| `Inspector`  | Hiển thị và cho phép chỉnh sửa các Component               |
| `Play mode`  | Chạy thử trò chơi để kiểm tra hành vi                      |

Một GameObject không tự động có khả năng hiển thị ảnh hoặc tương tác vật lý. Những chức năng đó được bổ sung bằng Component.

Ví dụ, một nhân vật 2D có thể được tổ chức như sau:

```
Player (GameObject)
│
├── Transform
│   └── Position, Rotation, Scale
│
├── SpriteRenderer
│   └── Hiển thị hình ảnh nhân vật
│
├── Rigidbody2D
│   └── Mô phỏng chuyển động vật lý
│
└── CapsuleCollider2D
    └── Xác định vùng va chạm
```

### 3.2. Sprite và SpriteRenderer

`Sprite` là hình ảnh 2D được Unity sử dụng để hiển thị nhân vật, vật phẩm và các thành phần môi trường.

`SpriteRenderer` là Component chịu trách nhiệm vẽ Sprite trong Scene.

[Пнг Персонаж пиксель арт 31 фото](https://images.openai.com/static-rsc-4/TBIU80Xq1OFSsHxVd7uhcSrWJ7ygXbEMX5T3LzcetdP1Q7o4PI5O8Fz3U_DCRybHllKB3WPC3mQmDs3oZCVzXmyhiAlC6_Oc1EvCKHplARiVItKLXGHvJjt-Y_KNypcwsvBYh1C-bmuo9qor9owDoYvsJJnX878XSgHswENZ9FE?purpose=inline)

Sprite

Dữ liệu hình ảnh 2D.

[Unity 2D RPG: Complete Combat System | GameDev.tv](https://images.openai.com/static-rsc-4/HmrdhpbZrZP7_jqkhSFjcrpwdSUVyOk3VeDY03_tXbP9wG7bNhgz_cVWRaNc_spA5hFuvFZ4fuKEacXy3Gf2UTOEGweWr6T2xlSeK-55ljkui4iKiJDIDNoB7UXHuH0gF_HCwmm7q9r9EKtIaZTW149M3c02F1CI3J61W3HVHiU?purpose=inline)

SpriteRenderer

Hiển thị Sprite trong không gian trò chơi.

Các thuộc tính quan trọng của `SpriteRenderer`:

| Thuộc tính      | Ý nghĩa                            |
| --------------- | ---------------------------------- |
| Sprite          | Hình ảnh được hiển thị             |
| Color           | Màu sắc hoặc độ trong suốt         |
| Flip X / Flip Y | Lật hình theo chiều ngang hoặc dọc |
| Sorting Layer   | Nhóm thứ tự hiển thị               |
| Order in Layer  | Thứ tự vẽ trong cùng Sorting Layer |

Nếu ảnh chứa nhiều hình nhỏ trong một Sprite Sheet, có thể sử dụng `Sprite Editor` để tách thành nhiều Sprite riêng biệt.

### 3.3. Pixels Per Unit (PPU)

`Pixels Per Unit` quy định số pixel của ảnh tương ứng với một đơn vị thế giới trong Unity.

Ví dụ, một Sprite có chiều rộng 128 pixel và PPU bằng 64 sẽ rộng 2 world units khi Transform Scale bằng 1.

Công thức:

\\[ \text{Kích thước (world units)} = \frac{\text{Kích thước ảnh (pixel)}}{\text{Pixels Per Unit}} \\]

| Kích thước ảnh | PPU | Chiều rộng trong Unity |
| -------------- | --- | ---------------------- |
| 128 px         | 32  | 4 units                |
| 128 px         | 64  | 2 units                |
| 128 px         | 128 | 1 unit                 |

Nguyên tắc: Khi giữ nguyên kích thước ảnh, PPU càng lớn thì Sprite hiển thị càng nhỏ trong hệ tọa độ thế giới.

### 3.4. Orthographic Camera

Camera `Orthographic` không tạo hiệu ứng phối cảnh như camera `Perspective`. Vì vậy, những đối tượng có cùng kích thước thế giới thường giữ cùng kích thước hình chiếu dù nằm ở những khoảng cách khác nhau.

Đây là cấu hình phù hợp cho nhiều trò chơi 2D.

Các thuộc tính cần chú ý:

- `Projection`: Chọn `Orthographic`.
- `Size`: Quy định một nửa chiều cao vùng nhìn theo world units.
- `Position`: Xác định vị trí camera.
- `Background`: Cấu hình nền hiển thị khi không có đối tượng che phủ.

Ví dụ, `Orthographic Size = 5` nghĩa là vùng nhìn có chiều cao 10 world units.

### 3.5. Sorting Layer và Order in Layer

Trong một Scene 2D, nhiều Sprite có thể chồng lên nhau. Unity sử dụng thứ tự sắp xếp để xác định Sprite nào xuất hiện phía trước.

Có thể cấu hình:

| Sorting Layer | Order in Layer | Đối tượng  |
| ------------- | -------------- | ---------- |
| Background    | 0              | Nền phòng  |
| Environment   | 0              | Tường, sàn |
| Characters    | 0              | Nhân vật   |
| Items         | 0              | Vật phẩm   |

Thứ tự hiển thị theo lớp

Minh họa một cách tổ chức Sorting Layers. Layer phía trước được vẽ phủ lên những layer nằm sau.

`Sorting Layer` được ưu tiên khi xác định thứ tự vẽ giữa các layer. `Order in Layer` giúp sắp xếp các Sprite nằm trong cùng layer.

## 4. Thiết lập căn phòng 2D

### 4.1. Bước 1 — Tạo Scene và cấu hình camera

Thực hiện:

1. Mở một dự án Unity có hỗ trợ 2D.
2. Chọn `File > New Scene`, tạo Scene và lưu tên `Room2D`.
3. Chọn `Main Camera` trong Hierarchy.
4. Thiết lập Projection thành `Orthographic`.
5. Đặt camera tại vị trí thích hợp, ví dụ `(0, 0, -10)`.
6. Điều chỉnh Orthographic Size để bao quát căn phòng.

Checkpoint: Game view hiển thị khu vực 2D mong muốn và không bị méo phối cảnh.

### 4.2. Bước 2 — Tạo Background, Floor và Walls

Có thể tạo các Sprite hình vuông thông qua menu `GameObject > 2D Object > Sprites > Square` (tên menu có thể khác đôi chút tùy cấu hình Unity).

Tạo bốn nhóm đối tượng:

```
Room2D
│
├── Main Camera
│
├── Background
│   └── SpriteRenderer
│
├── Floor
│   ├── SpriteRenderer
│   └── BoxCollider2D
│
├── Wall_Left
│   ├── SpriteRenderer
│   └── BoxCollider2D
│
└── Wall_Right
    ├── SpriteRenderer
    └── BoxCollider2D
```

Đặt nền đủ lớn để phủ vùng quan sát. Đặt Floor ở cạnh dưới, hai Wall tại hai cạnh của căn phòng.

Sử dụng Transform để chỉnh:

- `Position`: Vị trí đối tượng.
- `Rotation`: Góc quay.
- `Scale`: Kích thước đối tượng.

Đối với Background chỉ đóng vai trò trang trí, không cần bổ sung Collider2D.

Checkpoint: Căn phòng được hiển thị đầy đủ trong Game view; nền, sàn và tường không bị che khuất ngoài ý muốn.

### 4.3. Bước 3 — Tạo nhân vật Player

Tạo một Sprite đại diện cho nhân vật và đổi tên thành `Player`.

Thêm các Component:

| Component         | Cấu hình                        |
| ----------------- | ------------------------------- |
| SpriteRenderer    | Chọn Sprite nhân vật            |
| Rigidbody2D       | Body Type: Dynamic              |
| CapsuleCollider2D | Điều chỉnh vùng va chạm phù hợp |
| Transform         | Đặt nhân vật trong căn phòng    |

Gán tag `Player` thông qua Tag dropdown trong Inspector. Nếu chưa có tag, tạo tag mới mang tên `Player`.

Với căn phòng nhìn ngang có sàn, có thể giữ Gravity Scale bằng 1 để nhân vật rơi xuống dưới tác dụng của trọng lực.

Nếu xây dựng trò chơi nhìn từ trên xuống, có thể dùng Gravity Scale bằng 0 và bổ sung cơ chế điều khiển phù hợp.

### 4.4. Bước 4 — Tạo vật phẩm Collectible

Tạo một Sprite nhỏ, ví dụ hình tròn hoặc ngôi sao.

Đổi tên thành `Collectible` và thêm `CircleCollider2D` hoặc Collider2D phù hợp với hình dạng.

Bật:

`CircleCollider2D > Is Trigger`

Khi `Is Trigger` được bật, Collider được dùng để phát hiện việc các vùng va chạm giao nhau, thay vì tạo phản ứng va chạm vật lý thông thường.

Đặt vật phẩm trên đường di chuyển hoặc rơi của Player. Trong ví dụ kiểm thử đơn giản, có thể đặt Player phía trên Collectible để Player rơi xuyên qua vùng Trigger.

Checkpoint: Collectible xuất hiện đúng vị trí và không bị Sprite khác che mất.

## 5. Thiết lập vật lý 2D

### 5.1. Rigidbody2D và Collider2D

Hai Component đảm nhiệm những vai trò khác nhau:

| Component         | Vai trò                                              |
| ----------------- | ---------------------------------------------------- |
| Rigidbody2D       | Cho phép GameObject tham gia mô phỏng vật lý 2D      |
| BoxCollider2D     | Vùng va chạm hình chữ nhật                           |
| CircleCollider2D  | Vùng va chạm hình tròn                               |
| CapsuleCollider2D | Vùng va chạm dạng viên nang                          |
| Is Trigger        | Chuyển Collider sang cơ chế phát hiện vùng chồng lấn |

Unity có hệ vật lý 2D và 3D riêng biệt.

- `Rigidbody2D` được sử dụng cùng `Collider2D`.
- `Rigidbody` 3D được sử dụng cùng `Collider` 3D.

Không thể trông chờ `BoxCollider` 3D và `Rigidbody2D` tạo sự kiện vật lý 2D như một cặp Component tương thích.

### 5.2. Sự kiện Trigger

Đối với ví dụ nhặt vật phẩm, cơ chế hoạt động như sau:

Luồng tương tác nhặt vật phẩm

\#chatgpt-mermaid-\_r_v2\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_v2\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_v2\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_v2\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_v2\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_v2\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_v2\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_v2\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_v2\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_v2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_v2\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_v2\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_v2\_ p{margin:0;}#chatgpt-mermaid-\_r_v2\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_v2\_ .label text,#chatgpt-mermaid-\_r_v2\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ .node rect,#chatgpt-mermaid-\_r_v2\_ .node circle,#chatgpt-mermaid-\_r_v2\_ .node ellipse,#chatgpt-mermaid-\_r_v2\_ .node polygon,#chatgpt-mermaid-\_r_v2\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .rough-node .label text,#chatgpt-mermaid-\_r_v2\_ .node .label text,#chatgpt-mermaid-\_r_v2\_ .image-shape .label,#chatgpt-mermaid-\_r_v2\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_v2\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .rough-node .label,#chatgpt-mermaid-\_r_v2\_ .node .label,#chatgpt-mermaid-\_r_v2\_ .image-shape .label,#chatgpt-mermaid-\_r_v2\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_v2\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_v2\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_v2\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_v2\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_v2\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_v2\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_v2\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_v2\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_v2\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_v2\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_v2\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_v2\_ .icon-shape,#chatgpt-mermaid-\_r_v2\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_v2\_ .icon-shape p,#chatgpt-mermaid-\_r_v2\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_v2\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_v2\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_v2\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_v2\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_v2\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_v2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_v2\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_v2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_v2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_v2\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_v2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_v2\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_v2\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_v2\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_v2\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_v2\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .node rect,#chatgpt-mermaid-\_r_v2\_ .node circle,#chatgpt-mermaid-\_r_v2\_ .node ellipse,#chatgpt-mermaid-\_r_v2\_ .node polygon,#chatgpt-mermaid-\_r_v2\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_v2\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_v2\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_v2\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_v2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_v2\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Player di chuyển hoặc rơiĐi vào vùng Collider2D của vậtphẩmThỏa điều kiện Trigger 2D?Không phát sinh sự kiệnOnTriggerEnter2D được gọiĐối tượng có tag Player?Bỏ quaGhi thông báo vào ConsoleDestroy vật phẩmKhôngCóKhôngCó

Để kiểm thử sự kiện Trigger 2D, cần bảo đảm hai đối tượng có Collider2D tương thích, ít nhất một Collider2D bật `Is Trigger`, và ít nhất một trong hai đối tượng va chạm có `Rigidbody2D`. Các điều kiện khác như trạng thái kích hoạt và cấu hình tương tác vật lý cũng phải cho phép sự kiện xảy ra.

## 6. Lập trình tương tác nhặt vật phẩm

Tạo C# Script tên `Pickup2D.cs`, sau đó gắn Script vào GameObject `Collectible`.

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

### 6.1. Giải thích mã nguồn

`OnTriggerEnter2D(Collider2D other)`

Đây là callback của Unity, được gọi khi một Collider2D bắt đầu đi vào vùng Trigger của đối tượng, với các điều kiện vật lý phù hợp.

Tham số `other` chứa Collider2D thuộc đối tượng đang đi vào vùng Trigger.

`other.CompareTag("Player")`

Kiểm tra đối tượng tương tác có mang tag `Player` hay không.

Nếu không phải Player, câu lệnh `return` dừng quá trình xử lý.

`Debug.Log()`

Ghi thông báo vào Console để xác minh sự kiện đã xảy ra.

`Destroy(gameObject)`

Yêu cầu Unity hủy GameObject đang chứa Script. Trong trường hợp này, đó chính là vật phẩm Collectible.

### 6.2. Kiểm tra kết quả

1. Đảm bảo Player có `Rigidbody2D` và `Collider2D`.
2. Đảm bảo Collectible có `Collider2D`, bật `Is Trigger` và được gắn Script `Pickup2D`.
3. Đặt Player ở phía trên Collectible, với Gravity Scale đủ để Player rơi xuống.
4. Nhấn nút Play.
5. Quan sát khi Player đi qua vùng vật phẩm.
6. Mở Console để kiểm tra thông báo.

Kết quả mong đợi:

```
Đã nhặt vật phẩm 2D
```

Đồng thời, vật phẩm biến mất khỏi Scene đang chạy.

## 7. Thực hành và đánh giá kết quả

Sau khi hoàn thiện căn phòng, thực hiện ba bài tập sau.

Bài tập cơ bản: Tạo một căn phòng gồm Background, Floor, Player và Collectible. Kiểm tra mọi Sprite đều hiển thị đúng và vật phẩm biến mất khi Player chạm vào.

Bài tập vận dụng: Thay đổi PPU của một Sprite, dự đoán sự thay đổi kích thước, rồi kiểm tra bằng Game view. Sau đó thay đổi Sorting Layer để quan sát Sprite nào được vẽ phía trước.

Bài tập mở rộng: Tạo ba vật phẩm khác nhau trong căn phòng. Sử dụng Script `Pickup2D` để cho phép Player thu thập từng vật phẩm khi tiếp xúc.

### Bảng ghi nhận kết quả

| Hạng mục    | Kết quả mong đợi                      | Kết quả thực tế    |
| ----------- | ------------------------------------- | ------------------ |
| Camera      | Hiển thị toàn bộ căn phòng            | Người học ghi nhận |
| Sprite      | Đúng kích thước, đúng lớp             | Người học ghi nhận |
| Rigidbody2D | Nhân vật phản ứng với trọng lực       | Người học ghi nhận |
| Trigger     | Phát hiện Player đi vào vùng vật phẩm | Người học ghi nhận |
| Console     | Xuất hiện thông báo thu thập          | Người học ghi nhận |

Lưu lại ít nhất một ảnh Game view và một ảnh Console để làm minh chứng.

## 8. Những lỗi thường gặp

| Hiện tượng                        | Nguyên nhân có thể                                                    | Cách khắc phục                                       |
| --------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------- |
| Không nhìn thấy Sprite            | SpriteRenderer chưa được gán Sprite, camera không nhìn thấy đối tượng | Kiểm tra Sprite, Transform và Camera                 |
| Nhân vật rơi xuyên sàn            | Sàn thiếu Collider2D hoặc bật Is Trigger                              | Bổ sung Collider2D, tắt Is Trigger cho sàn           |
| Không nhặt được vật phẩm          | Thiếu Rigidbody2D, cấu hình Trigger sai hoặc thiếu tag                | Kiểm tra từng Component và tag Player                |
| Vật phẩm bị che                   | Sorting Layer hoặc Order in Layer không phù hợp                       | Điều chỉnh thứ tự vẽ                                 |
| Kích thước Sprite sai             | Pixels Per Unit hoặc Transform Scale chưa phù hợp                     | Kiểm tra lại thông số nhập ảnh và Scale              |
| Console không xuất hiện thông báo | Script chưa gắn hoặc chưa xảy ra sự kiện                              | Kiểm tra Script, Collider2D và trạng thái GameObject |

### Quy trình debug

```
Phát hiện lỗi
      ↓
Tái hiện trong Play mode
      ↓
Kiểm tra Console
      ↓
Chọn GameObject liên quan
      ↓
Kiểm tra Component trong Inspector
      ↓
Thay đổi một cấu hình
      ↓
Chạy thử lại và ghi kết quả
```

Lưu ý: Những thay đổi được thực hiện trong Play mode thường không được giữ lại khi thoát chế độ chạy thử. Vì vậy, nên cấu hình các đối tượng ở Edit mode rồi mới bắt đầu kiểm thử.

## 9. Checklist hoàn thành

Tiến độ thực hành

0/9

Tạo và lưu Scene Room2D

Thiết lập Main Camera ở chế độ Orthographic

Tạo Background, Floor và Walls

Tạo Player với SpriteRenderer, Rigidbody2D và Collider2D

Thiết lập Pixels Per Unit và Sorting Layer

Tạo Collectible và bật Is Trigger

Gắn Script Pickup2D và chạy thử

Xác minh thông báo trên Console

Ghi lại kết quả và ít nhất một lỗi đã khắc phục

## 10. Câu hỏi ôn tập

Kiểm tra kiến thức

5 câu · Mỗi câu 1 điểm

Câu 1. Trong Unity 2D, Component nào trực tiếp đảm nhiệm việc hiển thị hình ảnh nhân vật?

A. Rigidbody2D

B. SpriteRenderer

C. BoxCollider2D

D. Transform

Câu 2. Một Sprite rộng 128 pixel có PPU bằng 64. Khi Scale bằng 1, chiều rộng của Sprite là bao nhiêu world units?

A. 2 units

B. 64 units

C. 128 units

D. 0,5 units

Câu 3. Muốn vật phẩm phát hiện người chơi đi vào mà không chặn chuyển động, cần cấu hình nào?

A. Tăng Order in Layer

B. Đổi Camera sang Perspective

C. Xóa SpriteRenderer

D. Bật Is Trigger trên Collider2D

Câu 4. Vật phẩm nằm phía sau hình nền dù đã ở đúng vị trí. Cần kiểm tra điều gì trước tiên?

A. Gravity Scale

B. Tên Script

C. Sorting Layer và Order in Layer

D. Tag Player

Câu 5. Script Pickup2D sử dụng CompareTag("Player") nhằm mục đích gì?

A. Kiểm tra đúng đối tượng được phép thu thập vật phẩm

B. Di chuyển Player

C. Điều chỉnh độ lớn vật phẩm

D. Tạo Rigidbody2D

Chấm điểm Làm lại

## 11. Tổng kết

Bài học đã xây dựng một Scene 2D đơn giản và kết hợp ba nhóm kiến thức quan trọng:

- Hiển thị: `Sprite`, `SpriteRenderer`, `Orthographic Camera`, `Sorting Layer` và `Pixels Per Unit`.
- Vật lý: `Rigidbody2D`, `Collider2D` và `Is Trigger`.
- Tương tác: `OnTriggerEnter2D()`, `CompareTag()`, `Debug.Log()` và `Destroy()`.

Điểm quan trọng nhất là phân biệt rõ chức năng của từng Component: `SpriteRenderer` quản lý hình ảnh, `Collider2D` xác định vùng va chạm, còn `Rigidbody2D` giúp đối tượng tham gia mô phỏng vật lý.

Khi cấu hình đúng các thành phần này, một căn phòng 2D không chỉ có thể hiển thị mà còn trở thành môi trường có khả năng tương tác và kiểm thử.

Tài liệu thực hành tự biên soạn cho Unity 6.3. Các thao tác và ví dụ có thể được điều chỉnh theo cấu hình dự án. Tham khảo Unity Learn để đối chiếu hướng dẫn chính thức và các asset đi kèm.