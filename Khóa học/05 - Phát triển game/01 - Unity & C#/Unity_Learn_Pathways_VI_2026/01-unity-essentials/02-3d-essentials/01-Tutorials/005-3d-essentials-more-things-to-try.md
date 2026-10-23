# Bài 05 — 3D Essentials: More Things to Try

Unity Essentials · 3D Essentials · Tutorial · Unity 6.3

Chủ đề: Thực hành mở rộng, rèn luyện kỹ năng xây dựng Scene 3D và phương pháp tự học Unity.

Tài liệu tham khảo: [Unity Learn — 3D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials?version=6.3\&utm_source=chatgpt.com).

## 1. Tổng quan bài học

Sau khi làm quen với GameObject, Component, Prefab, mô phỏng vật lý, ánh sáng và Camera, bước tiếp theo là vận dụng các kiến thức đó để tự hoàn thiện một môi trường 3D.

Khác với những bài thực hành theo từng thao tác cố định, More Things to Try tập trung vào việc tự khám phá Unity Editor, giải quyết các nhiệm vụ và kiểm chứng kết quả.

Bài học được tổ chức thành ba thử thách theo mức độ tăng dần, dựa trên các chủ đề thực hành được liệt kê trong Unity Learn:&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



[Create a balanced primitive structure - Unity Learn](https://images.openai.com/static-rsc-4/vWEY4nFkyLwhBWBAcDMC-eExPCi4gkh2Uan8BOTs0lmo6SmwsBwVHjD9zuox7jt4MBf2J-u5Pi8YUwiqWAJQ-JiRVemWbh1R2maXAr7VYw673CzY16ulSH5R3vpmg_6AKuRyx7yZPdPocoKXa2HaLbPyF-dl-BQps3BVYZduk-k?purpose=inline)

Cơ bản — Easy

Xây tháp bằng Vertex Snapping

Căn chỉnh các khối hộp chính xác bằng chức năng bắt dính đỉnh trong Unity Editor.

[Children's Wooden Geometry Model Building Blocks - Toy and Wooden Toy price](https://images.openai.com/static-rsc-4/9_TBwzwh0L_WW0qNtv7ED_sY28Ov1j-QSnxn4u7EgIXGx2LlLekYb-4tjOx1SghFlbx9Lsl6pZIUsy3OOvtEi6YTXRGLQYznz1-EcbBFHinP5DVQIuNww8c8NPjPoGmiw_qbN4P78YnoGS3uBxsUgY7gEVnij3995QPTDu-6k1Q?purpose=inline)

Trung bình — Medium

Tạo Prefab với nhiều hình dạng

Kết hợp các loại khối có hình dạng, kích thước và màu sắc khác nhau để xây dựng mô hình phong phú hơn.

[Kids Room Interior - Buy Royalty Free 3D model by NaturalCreative2023 \[d4bca74\] - Sketchfab Store](https://images.openai.com/static-rsc-4/Y85IKfP0VGTu3hQPEg1_6f2eJ4IHb0GAsU8VrHKreMemrG_WyQlXm7w7MlTVwQYuo1-FVKXkseHRNft7didTcYTuV3ENE4GV-9DHR4SeeX6U7tqiMFY52Bnr17yKJpFR3XMOKtjSyoYyccdZejtwdOcgzcbWFEwZXJxkm5QFUcQ?purpose=inline)

Nâng cao — Expert

Thêm tranh tùy chỉnh và tạo khung

Nhập hình ảnh riêng, đưa vào Scene 3D và tạo khung tranh trang trí.

Ba thử thách trên cũng giúp rèn luyện quy trình tự học: xác định mục tiêu, dự đoán kết quả, thực hành, kiểm tra lỗi và đánh giá sản phẩm.

Kết quả cần đạt: Một Scene 3D có tháp khối được căn chỉnh, nhiều loại Prefab và một bức tranh trang trí được đặt vào môi trường.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Sử dụng `Vertex Snapping` để căn chỉnh GameObject chính xác.
2. Tạo và quản lý nhiều loại Prefab có hình dạng khác nhau.
3. Sử dụng `Transform`, `Mesh Renderer`, `Collider` và `Material` để tùy chỉnh các đối tượng 3D.
4. Nhập hình ảnh vào Unity và sử dụng làm nội dung cho tranh trang trí.
5. Bố trí Camera và ánh sáng để làm nổi bật các đối tượng trong Scene.
6. Thực hiện thử nghiệm theo quy trình dự đoán, quan sát và kiểm chứng.
7. Phát hiện, tái hiện và sửa lỗi trong quá trình thực hành.
8. Đánh giá mức độ hoàn thành Scene thông qua các tiêu chí đo lường được.

## 3. Kiến thức cần sử dụng

### 3.1. Những khái niệm quan trọng

| Khái niệm    | Vai trò trong thực hành                           |
| ------------ | ------------------------------------------------- |
| `Scene`      | Không gian chứa môi trường và các GameObject      |
| `GameObject` | Đối tượng cơ bản trong Unity                      |
| `Transform`  | Quản lý Position, Rotation và Scale               |
| `Prefab`     | Mẫu đối tượng có thể tái sử dụng                  |
| `Material`   | Xác định các thuộc tính bề mặt và cách hiển thị   |
| `Collider`   | Xác định hình dạng tham gia va chạm               |
| `Rigidbody`  | Cho phép đối tượng tham gia mô phỏng động lực học |
| `Camera`     | Xác định khung hình của trò chơi                  |
| `Light`      | Chiếu sáng đối tượng và môi trường                |
| `Play Mode`  | Chạy thử Scene trong Unity Editor                 |
| `Console`    | Hiển thị thông báo, cảnh báo và lỗi               |

### 3.2. Các công cụ thao tác cần nhớ

| Phím tắt   | Chức năng                                  |
| ---------- | ------------------------------------------ |
| `Q`        | View Tool                                  |
| `W`        | Move Tool                                  |
| `E`        | Rotate Tool                                |
| `R`        | Scale Tool                                 |
| `F`        | Focus đối tượng đang chọn trong Scene view |
| `V` (giữ)  | Vertex Snapping khi dùng Move Tool         |
| `Ctrl + D` | Nhân bản GameObject                        |
| `Ctrl + S` | Lưu Scene                                  |

Đây là các phím tắt mặc định thường dùng trên Windows. Người học có thể thay đổi chúng trong Shortcuts của Unity Editor.

### 3.3. Phương pháp thực hành chủ động

Mỗi thử nghiệm cần có một mục tiêu quan sát được, thay vì chỉ làm theo thao tác.

Chu trình thực hành và kiểm chứng

\#chatgpt-mermaid-\_r_1fq\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1fq\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1fq\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1fq\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1fq\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1fq\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1fq\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1fq\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1fq\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1fq\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fq\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fq\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1fq\_ p{margin:0;}#chatgpt-mermaid-\_r_1fq\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1fq\_ .label text,#chatgpt-mermaid-\_r_1fq\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ .node rect,#chatgpt-mermaid-\_r_1fq\_ .node circle,#chatgpt-mermaid-\_r_1fq\_ .node ellipse,#chatgpt-mermaid-\_r_1fq\_ .node polygon,#chatgpt-mermaid-\_r_1fq\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .rough-node .label text,#chatgpt-mermaid-\_r_1fq\_ .node .label text,#chatgpt-mermaid-\_r_1fq\_ .image-shape .label,#chatgpt-mermaid-\_r_1fq\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1fq\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .rough-node .label,#chatgpt-mermaid-\_r_1fq\_ .node .label,#chatgpt-mermaid-\_r_1fq\_ .image-shape .label,#chatgpt-mermaid-\_r_1fq\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1fq\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1fq\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fq\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fq\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1fq\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1fq\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1fq\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1fq\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1fq\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1fq\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fq\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1fq\_ .icon-shape,#chatgpt-mermaid-\_r_1fq\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1fq\_ .icon-shape p,#chatgpt-mermaid-\_r_1fq\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1fq\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1fq\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1fq\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1fq\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1fq\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1fq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1fq\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1fq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1fq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fq\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1fq\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fq\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1fq\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1fq\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1fq\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1fq\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .node rect,#chatgpt-mermaid-\_r_1fq\_ .node circle,#chatgpt-mermaid-\_r_1fq\_ .node ellipse,#chatgpt-mermaid-\_r_1fq\_ .node polygon,#chatgpt-mermaid-\_r_1fq\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1fq\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1fq\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1fq\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1fq\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fq\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Quan sát trạng thái SceneXác định mục tiêuDự đoán kết quảThực hiện một thay đổiChạy thử và quan sátĐạt mục tiêu?Lưu Scene và ghi nhận kết quảKiểm tra Inspector và ConsoleXác định nguyên nhân, sửamột yếu tốCóKhông

Ví dụ, khi muốn các khối hộp xếp thành một tòa tháp thẳng, người học cần kiểm tra xem các mặt tiếp xúc có khớp nhau không, các đối tượng có cùng trục căn chỉnh hay không và chuyển động vật lý có làm tháp mất ổn định không.

Một thử nghiệm hiệu quả phải trả lời được ba câu hỏi: Điều gì đã thay đổi? Kết quả có đúng dự đoán không? Vì sao?

## 4. Chuẩn bị môi trường thực hành

### 4.1. Mở và kiểm tra Scene

Mở Project Unity Essentials hoặc một Project 3D đang sử dụng Unity 6.3.

Trong cửa sổ Hierarchy, kiểm tra sự tồn tại của các đối tượng cơ bản:

- Main Camera.
- Directional Light.
- Ground hoặc Plane.
- Các khối hộp trong Scene.
- Những GameObject dùng làm vật trang trí.

Nếu chưa có, tạo một Scene thực hành mới và bổ sung các đối tượng tương ứng.

Trước khi thực hiện các thử thách, lưu Scene dưới tên `3DMoreThingsToTry`.

### 4.2. Tổ chức thư mục Project

Để dễ quản lý các tài nguyên, có thể xây dựng cấu trúc thư mục sau:

```
Assets/
├── Scenes/
│   └── 3DMoreThingsToTry.unity
├── Prefabs/
│   ├── CubeBlock.prefab
│   ├── CylinderBlock.prefab
│   └── SphereBlock.prefab
├── Materials/
│   ├── RedMaterial.mat
│   ├── BlueMaterial.mat
│   └── ArtworkMaterial.mat
├── Textures/
│   └── CustomArtwork.png
└── Screenshots/
```

Các tên trên là cấu trúc gợi ý. Có thể đặt tên khác nhưng cần nhất quán, dễ xác định chức năng của từng Asset.

## 5. Thử thách 1 — Xây tháp chính xác bằng Vertex Snapping

Easy — Make a perfect block tower with vertex snapping

### 5.1. Vertex Snapping là gì?

`Vertex Snapping` là công cụ cho phép căn chỉnh một đỉnh của Mesh với đỉnh của Mesh khác.

Thay vì di chuyển đối tượng bằng mắt hoặc thử nhiều giá trị Position, có thể sử dụng các đỉnh hình học làm điểm tham chiếu.

Ví dụ, khi xếp hai Cube cùng kích thước, căn chỉnh đúng các đỉnh tương ứng sẽ giúp các mặt của chúng tiếp xúc chính xác hơn.

[Alan Zucconi (@AlanZucconi) on X](https://images.openai.com/static-rsc-4/d6RdCwaUNEPRlXY1nPKOKhKkL7OzuQfXn35vU8rAf7i9bwS_8aI_ce0NnqyAOrQGh0yJyyWXvSci91r6Cw4Bw-xlY13OA-jakI9PHMM50co-c70tutysIsY-eYezu6ICrwhHoUkcNcyLPkbP_8G__0WGw8FX4KI1lPY2ZT170rc?purpose=inline)

[유니티 기초 - 오브젝트 두개를 정확하게 빈틈없이 붙이기](https://images.openai.com/static-rsc-4/JM54ZFpqNdVplZl1LYSUmbORH_1-QqaetbAtfKPeiBfIL1LC-qNMFTBeFvrzJXpFLWDJ1LxFJb0mQ1YJMf2Wh2OQ_VleLTZF3WjpLpIGYnKs1q91ZXgcgRa1675-y7eXxYVvBkbRNd4URzIolS69X9NNIUlBWgyEPMPhv7gabNY?purpose=inline)

[Create a balanced primitive structure - Unity Learn](https://images.openai.com/static-rsc-4/vWEY4nFkyLwhBWBAcDMC-eExPCi4gkh2Uan8BOTs0lmo6SmwsBwVHjD9zuox7jt4MBf2J-u5Pi8YUwiqWAJQ-JiRVemWbh1R2maXAr7VYw673CzY16ulSH5R3vpmg_6AKuRyx7yZPdPocoKXa2HaLbPyF-dl-BQps3BVYZduk-k?purpose=inline)

5

### 5.2. Cách hoạt động

Giả sử có hai khối hộp:

- Cube A nằm phía dưới.
- Cube B nằm phía trên.

Để hai Cube xếp thẳng đứng, một đỉnh ở mặt đáy của Cube B phải trùng với đỉnh tương ứng ở mặt trên của Cube A.

Khi hai Cube có cùng kích thước, cùng hướng và chọn đúng hai đỉnh tương ứng, thao tác này giúp căn chỉnh các cạnh theo cùng trục.

### 5.3. Thực hiện từng bước

Bước 1 — Chuẩn bị Cube

Trong Hierarchy:

1. Tạo `3D Object > Cube`.
2. Đổi tên thành `Block_01`.
3. Đặt Scale `(1, 1, 1)`.
4. Đặt Cube nằm trên Ground.
5. Nhân bản bằng `Ctrl + D`.
6. Đổi tên bản sao thành `Block_02`.

Di chuyển `Block_02` lên phía trên `Block_01` để dễ quan sát.

Bước 2 — Kích hoạt Move Tool

Chọn `Block_02`, nhấn `W` để sử dụng Move Tool.

Đảm bảo đang thao tác trong Scene view.

Bước 3 — Kích hoạt Vertex Snapping

Giữ phím `V` để bật chế độ bắt dính đỉnh.

Di chuyển con trỏ tới một đỉnh ở mặt đáy của `Block_02`.

Nhấn giữ chuột trái tại đỉnh đó, sau đó kéo đối tượng tới đỉnh tương ứng trên mặt trên của `Block_01`.

Khi hai đỉnh trùng nhau, thả chuột rồi thả phím `V`.

Đây là quy trình Vertex Snapping được Unity hỗ trợ; `Shift + V` cũng có thể dùng để chuyển trạng thái bật/tắt chế độ này.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Unity Manual



Bước 4 — Kiểm tra kết quả

Xoay Scene view và kiểm tra từ các hướng:

- Front.
- Right.
- Top.
- Perspective.

Quan sát xem hai Cube đã căn thẳng và tiếp xúc đúng chưa.

Bước 5 — Hoàn thiện tòa tháp

Lặp lại thao tác với những Cube khác để tạo một tháp gồm ít nhất 5 khối.

Có thể sử dụng Prefab đã tạo để các khối có cùng hình dạng và cấu hình.

### 5.4. Kiểm chứng

Một tháp được căn chỉnh tốt cần đạt những điều kiện:

- Các Cube không chồng lấn thể tích bất thường.
- Các mặt tiếp xúc nằm đúng vị trí.
- Các cạnh tương ứng được căn thẳng.
- Không có khoảng cách ngoài ý muốn.

Lưu ý về vật lý: Vertex Snapping giúp sắp xếp hình học chính xác nhưng không bảo đảm tháp luôn đứng vững khi mô phỏng. Rigidbody, Collider, ma sát và trạng thái ban đầu vẫn ảnh hưởng đến kết quả.

### 5.5. Bài tập nhỏ

Tạo hai phiên bản tòa tháp:

- Phiên bản A: Sắp xếp hoàn toàn bằng mắt.
- Phiên bản B: Sử dụng Vertex Snapping.

Chụp ảnh hai phiên bản và so sánh độ chính xác khi nhìn từ Front và Right.

Giải thích vì sao Vertex Snapping có lợi khi xây dựng các công trình gồm nhiều bộ phận ghép nối.

## 6. Thử thách 2 — Tạo Prefab với nhiều hình dạng

Medium — Add different shaped prefab blocks

### 6.1. Mục đích

Một môi trường được xây dựng hoàn toàn từ các Cube giống nhau thường có hình dạng đơn điệu.

Để tạo sự đa dạng, có thể kết hợp nhiều Primitive 3D khác nhau, chẳng hạn:

[Tutorials | PlayCanvas Developer Site](https://images.openai.com/static-rsc-4/6N3y4nJdO3AKUOJjM_igEkQE12gakdWRuBVREi2MWcDurRCRiedQcNbgb5VoVOrMU2a-3GQLw9Rk21OPWh6Fz9ZurEmxB2LtEb5oAiwX-EeurPn-KbLNsJpZTFImP53OaU2lW2LWMfYBCu-_qBILo1VWg5JvIZyI_oLE_2rb0Tc?purpose=inline)

Cube

[3D lighting - Adobe Substance 3D](https://images.openai.com/static-rsc-4/25MCHMDCZyyuN_4jzjNOy0mE5BGPxFN3sDZ0zi_J76x-BdV_nmglZqkE6kWsSy-F9M0t9A9asXDq6rizyPO61-lYH5N7f90-jPpdoqe0U0UdP6R36p_COK4v0t90XshZE2S3YYw077f3A_HXmwsTdwPVYZSa2T7ERxet1Lurxe8?purpose=inline)

Cylinder

[All PNG Images & PSDs Available for Download | PixelSquid](https://images.openai.com/static-rsc-4/DnFhuXRznPvchdRe43nzO4YZ8eU1GYObdWgwW3HRVIRXpRucCy2Dq4tcSNEQfANUbPHoc6k3H8G4MMvgHuMhAL773XFbqaHAWLf9dAKRIFhgx2KwMNFD6Elbr5OICRPKqMdRh0TmbFWV7GFQMgADuJ7dkshJShltMkvMbEtAhBU?purpose=inline)

Sphere

Các đối tượng có thể được chuyển thành Prefab để tái sử dụng và thay đổi nhanh khi thiết kế Scene.

### 6.2. Tạo Prefab hình hộp

1. Tạo một Cube trong Hierarchy.
2. Đổi tên thành `CubeBlock`.
3. Điều chỉnh kích thước và Material.
4. Giữ Box Collider nếu muốn thử tương tác vật lý.
5. Kéo GameObject từ Hierarchy vào thư mục `Assets/Prefabs`.

Sau khi tạo thành công, trong Project sẽ xuất hiện `CubeBlock.prefab`.

### 6.3. Tạo Prefab hình trụ

Thực hiện:

1. Nhấp chuột phải trong Hierarchy.
2. Chọn `3D Object > Cylinder`.
3. Đổi tên thành `CylinderBlock`.
4. Thay đổi Scale nếu muốn tạo khối trụ thấp.
5. Gán Material có màu khác với Cube.
6. Kiểm tra Collider.
7. Kéo Cylinder vào thư mục Prefabs.

Checkpoint: Project có ít nhất hai Prefab với hình dạng khác nhau.

### 6.4. Tạo Prefab hình cầu

Tiếp tục tạo Sphere và lưu thành `SphereBlock.prefab`.

Khi thử đặt Sphere lên các khối khác, cần chú ý rằng hình cầu có bề mặt cong nên khả năng giữ thăng bằng khác với Cube.

Nếu Sphere có Rigidbody động, trọng lực và va chạm có thể khiến nó lăn hoặc rơi khỏi vị trí ban đầu.

### 6.5. Kết hợp các Prefab trong Scene

Sử dụng các Prefab để tạo một cấu trúc mới, ví dụ một công trình đồ chơi hoặc tòa tháp nhiều hình dạng.

Các cách bố trí có thể thử:

- Cube làm nền.
- Cylinder làm trụ.
- Các Cube nhỏ dùng để trang trí.
- Sphere đặt tại vị trí cao nhất.

Không cần bắt buộc tạo một tòa tháp đối xứng hoàn toàn. Mục tiêu là biết sử dụng nhiều dạng Prefab và đánh giá ảnh hưởng của chúng tới bố cục.

### 6.6. Chỉnh sửa Prefab và Instance

Khi chọn một Prefab instance, Unity có thể hiển thị các tùy chọn quản lý `Overrides`.

| Thao tác         | Kết quả                                       |
| ---------------- | --------------------------------------------- |
| Sửa Prefab Asset | Thay đổi mẫu dùng chung                       |
| Sửa một instance | Tạo giá trị riêng cho instance đó             |
| Apply Overrides  | Áp dụng thay đổi từ instance vào Prefab Asset |
| Revert Overrides | Hoàn tác các thay đổi ghi đè đã chọn          |

Việc áp dụng thay đổi từ instance về Prefab Asset có thể ảnh hưởng tới những instance khác sử dụng cùng mẫu.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

マニュアル: Prefab instance Inspector reference



Thử nghiệm: Thay đổi Scale hoặc Material của một instance, sau đó kiểm tra xem các instance khác có thay đổi theo hay không. Tiếp tục thử Revert để quan sát tác dụng của Override.

## 7. Thử thách 3 — Thêm tranh tùy chỉnh và tạo khung

Expert — Add and frame custom artwork

### 7.1. Mục đích

Scene 3D không chỉ chứa những đối tượng có sẵn trong Unity.

Người học có thể nhập hình ảnh từ bên ngoài và sử dụng chúng làm tài nguyên trang trí, chẳng hạn tranh treo tường trong một căn phòng.

Trong thử thách này, chúng ta sẽ tạo một bức tranh từ Texture và dựng khung bằng các GameObject 3D.

### 7.2. Chuẩn bị hình ảnh

Chuẩn bị một hình ảnh ở định dạng phổ biến như PNG hoặc JPG.

Để nhập vào Unity:

1. Mở thư mục `Assets/Textures`.
2. Kéo hình ảnh từ máy tính vào cửa sổ Project.
3. Chọn hình ảnh vừa nhập.
4. Kiểm tra các thiết lập import trong Inspector.

Unity sẽ quản lý hình ảnh này như một Asset.

### 7.3. Tạo Material cho tranh

Trong Project:

1. Nhấp chuột phải.
2. Chọn `Create > Material`.
3. Đặt tên `ArtworkMaterial`.
4. Chọn Shader thích hợp với Render Pipeline.
5. Gán hình ảnh vào thuộc tính Texture chính, chẳng hạn Base Map trong URP Lit.

Khi Material được gán cho bề mặt 3D, Texture sẽ được hiển thị theo UV của Mesh.

### 7.4. Tạo bề mặt tranh

Một cách đơn giản là sử dụng Quad.

Thực hiện:

1. Trong Hierarchy, chọn `3D Object > Quad`.
2. Đổi tên thành `Artwork`.
3. Đặt Quad gần tường hoặc tại vị trí dễ quan sát.
4. Gán `ArtworkMaterial` vào Mesh Renderer.
5. Điều chỉnh Rotation để mặt có hình ảnh hướng về Camera.
6. Chỉnh Scale để tỷ lệ chiều rộng và chiều cao phù hợp với ảnh.

Nếu hình ảnh không xuất hiện, kiểm tra hướng mặt trước của Quad, Material và Camera.

Lưu ý: Nếu sử dụng Quad và muốn bảo toàn tỷ lệ ảnh, không nên kéo giãn tùy ý cả hai chiều. Kích thước Quad cần phù hợp với tỷ lệ của hình gốc.

### 7.5. Tạo khung tranh bằng Cube

Sử dụng bốn Cube mỏng để làm khung:

- Thanh trên.
- Thanh dưới.
- Thanh trái.
- Thanh phải.

Các thanh được bố trí bao quanh mép của Artwork.

Có thể tạo một GameObject rỗng `FramedArtwork` và đưa Artwork cùng bốn thanh khung vào làm GameObject con để thuận tiện di chuyển toàn bộ bức tranh.

Ví dụ Hierarchy:

```
FramedArtwork
├── Artwork
├── FrameTop
├── FrameBottom
├── FrameLeft
└── FrameRight
```

Khi hoàn thành, có thể tạo Prefab `FramedArtwork` để tái sử dụng trong các Scene khác.

### 7.6. Đặt tranh vào môi trường

Đưa bức tranh tới một vị trí thích hợp, chẳng hạn phía trên bàn hoặc trên bức tường của căn phòng.

Sử dụng Move Tool, Rotate Tool và Scale Tool để tinh chỉnh.

Sau đó kiểm tra góc nhìn Main Camera.

Checkpoint: Bức tranh hiển thị đúng hình ảnh, không bị kéo giãn ngoài ý muốn, khung không che phần nội dung chính và toàn bộ đối tượng xuất hiện đúng vị trí trong Game view.

## 8. Kiểm thử và đánh giá Scene hoàn chỉnh

Sau khi thực hiện ba thử thách, cần chạy kiểm thử để đánh giá sản phẩm.

### 8.1. Kiểm tra bố cục

Trước tiên, quan sát Scene view từ nhiều góc.

Kiểm tra:

- Các đối tượng có đúng vị trí không?
- Tòa tháp có được căn chỉnh không?
- Prefab có được sử dụng nhất quán không?
- Bức tranh và khung có nằm đúng vị trí không?

Sau đó chuyển sang Game view để quan sát từ Main Camera.

### 8.2. Kiểm tra trong Play Mode

Nhấn Play và quan sát những đối tượng có mô phỏng vật lý.

Nếu các khối có Rigidbody động, cần kiểm tra:

- Chúng có chịu trọng lực không?
- Collider có hoạt động không?
- Tháp có chuyển động như dự đoán không?
- Có đối tượng nào xuyên qua sàn hoặc vật thể khác không?

Những thay đổi thông thường được thực hiện trong Inspector khi đang Play sẽ không được giữ lại sau khi thoát Play Mode. Vì vậy, hãy lưu các thiết lập cuối cùng ngoài Play Mode.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Unity 手册



### 8.3. Ghi chép kết quả

Mỗi thử nghiệm nên sử dụng bảng theo dõi sau:

| Thành phần      | Nội dung ghi chép                 |
| --------------- | --------------------------------- |
| Mục tiêu        | Kết quả muốn đạt được             |
| Dự đoán         | Điều dự kiến xảy ra               |
| Thay đổi        | Tham số hoặc đối tượng đã chỉnh   |
| Kết quả thực tế | Hiện tượng quan sát               |
| Minh chứng      | Ảnh Scene, Game view hoặc Console |
| Giải thích      | Nguyên nhân của kết quả           |

Chẳng hạn, khi thay đổi kích thước của một Prefab instance, cần dự đoán xem sự thay đổi đó có ảnh hưởng đến những instance khác hay không, sau đó kiểm tra bằng Inspector.

### 8.4. Tiêu chí đánh giá

| Tiêu chí        | Điều kiện đạt                               |
| --------------- | ------------------------------------------- |
| Vertex Snapping | Các khối được căn chỉnh chính xác           |
| Prefab          | Có nhiều loại Prefab được tái sử dụng       |
| Artwork         | Hình ảnh hiển thị chính xác trên bề mặt 3D  |
| Camera          | Các đối tượng chính nằm trong khung hình    |
| Lighting        | Scene đủ sáng để quan sát                   |
| Physics         | Hành vi vật lý phù hợp với cấu hình         |
| Debug           | Xác định và giải thích được ít nhất một lỗi |
| Lưu trữ         | Scene và Asset được tổ chức rõ ràng         |

## 9. Lỗi thường gặp và cách khắc phục

### 9.1. Các lỗi kỹ thuật

| Hiện tượng                                   | Nguyên nhân cần kiểm tra                               | Cách xử lý                                    |
| -------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- |
| Vertex Snapping không hoạt động              | Chưa chọn Move Tool, chưa giữ V hoặc đang trỏ sai đỉnh | Kiểm tra công cụ và thao tác bắt dính         |
| Hai Cube không thẳng hàng                    | Đã chọn các đỉnh không tương ứng                       | Quan sát từ Front, Right và Top               |
| Sửa Prefab nhưng một instance không thay đổi | Instance có giá trị Override                           | Kiểm tra Overrides                            |
| Sphere rơi khỏi tháp                         | Hình dạng và vật lý khiến nó mất cân bằng              | Kiểm tra Collider, trọng tâm và bố cục        |
| Texture tranh không hiển thị                 | Material, Texture hoặc hướng Quad chưa đúng            | Kiểm tra Mesh Renderer và Material            |
| Tranh bị kéo giãn                            | Tỷ lệ Scale không phù hợp                              | Điều chỉnh theo tỷ lệ hình ảnh                |
| Khung tranh che nội dung                     | Thanh khung đặt sai vị trí hoặc quá dày                | Điều chỉnh Position và Scale                  |
| Game view không thấy tranh                   | Tranh nằm ngoài vùng nhìn của Camera                   | Kiểm tra Camera, Clipping Planes và Transform |

### 9.2. Lỗi trong phương pháp thực hành

Một vấn đề phổ biến khi tự học Unity là thay đổi quá nhiều tham số cùng lúc.

Ví dụ, người học đồng thời:

- Thay đổi Mass.
- Thay đổi Collider.
- Di chuyển GameObject.
- Chỉnh Scale.
- Thay đổi Physics Material.

Nếu kết quả bị sai, rất khó xác định tham số nào gây ra vấn đề.

Cách tốt hơn là giữ nguyên hầu hết điều kiện, chỉ thay đổi một yếu tố trong mỗi lần thử nghiệm.

### 9.3. Quy trình debug

1. Tái hiện lỗi: Xác định thao tác nào gây ra hiện tượng.
2. Quan sát: Kiểm tra Scene view, Game view và Console.
3. Khoanh vùng: Xác định GameObject và Component liên quan.
4. Đưa ra giả thuyết: Ví dụ, đối tượng không xuất hiện vì Camera nhìn sai hướng.
5. Thử một thay đổi: Chỉ chỉnh Rotation của Camera.
6. Kiểm chứng: Chạy lại và kiểm tra hiện tượng.
7. Ghi nhận: Lưu nguyên nhân và cách giải quyết.

Không phải mọi lỗi đều sinh thông báo trong Console. Một GameObject đặt sai Position vẫn có thể không tạo ra bất kỳ lỗi lập trình nào.

## 10. Bài tập củng cố

### 10.1. Bài tập cơ bản

Tạo một tòa tháp bằng 6 Cube.

Sử dụng Vertex Snapping để căn chỉnh các Cube.

Sau đó so sánh kết quả với thao tác căn chỉnh thủ công bằng Move Tool.

Yêu cầu: Chụp hai ảnh từ cùng một góc nhìn để đánh giá độ chính xác.

### 10.2. Bài tập vận dụng

Xây dựng một công trình nhỏ với ít nhất ba loại Prefab khác nhau.

Các đối tượng phải có Material hoặc hình dạng giúp người quan sát dễ phân biệt.

Thay đổi một Prefab Asset và kiểm tra tác động đối với các instance.

Yêu cầu: Giải thích sự khác nhau giữa thay đổi Prefab Asset và thay đổi Instance Override.

### 10.3. Bài tập nâng cao

Tạo một góc phòng 3D có bức tranh tùy chỉnh được đóng khung.

Bố trí ánh sáng và Camera để bức tranh cùng các đối tượng khác xuất hiện rõ ràng.

Yêu cầu: Có ít nhất một ảnh Game view thể hiện thành phẩm.

### 10.4. Bài tập tổng hợp

Hoàn thiện một Scene chủ đề phòng trẻ em có:

- Một tòa tháp gồm các khối đồ chơi.
- Nhiều hình dạng Prefab.
- Một bức tranh có khung.
- Sàn và ánh sáng.
- Camera với bố cục rõ ràng.
- Một đối tượng có thể tương tác vật lý.

Trước khi chạy, viết dự đoán về hoạt động của Scene. Sau khi chạy, ghi lại những điểm khác biệt và giải thích.

## 11. Checklist hoàn thành

Tiến độ thực hành

0/13

Mở được Project hoặc Scene 3D trong Unity.

Sử dụng được Move Tool và Vertex Snapping.

Xây dựng được tháp từ nhiều khối được căn chỉnh.

Tạo được ít nhất hai Prefab khác nhau.

Phân biệt được Prefab Asset với Prefab instance.

Tùy chỉnh được Material và Collider cần thiết.

Nhập được hình ảnh làm Texture.

Tạo được tranh trang trí với khung 3D.

Bố trí được Camera và Light phù hợp.

Chạy Scene bằng Play Mode.

Kiểm tra Console và Inspector khi có vấn đề.

Ghi được ba điều đã học và một lỗi đã xử lý.

Lưu Scene cùng ảnh minh chứng kết quả.

## 12. Câu hỏi ôn tập trắc nghiệm

Bài kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Trong Unity, công cụ nào phù hợp nhất để căn chính xác đỉnh của một Cube với đỉnh của Cube khác?

A. Scale Tool

B. Vertex Snapping

C. Rotate Tool

D. Camera Preview

Câu 2. Khi muốn tái sử dụng nhiều GameObject có cùng Component và Material, nên sử dụng gì?

A. Một Camera mới

B. Nhiều Scene độc lập

C. Chỉ sử dụng Game view

D. Prefab

Câu 3. Khi thay đổi giá trị trên một Prefab instance nhưng không muốn ảnh hưởng tới các instance khác, cần chú ý điều gì?

A. Instance Overrides

B. Fixed Timestep

C. Camera Field of View

D. Directional Light

Câu 4. Muốn hiển thị một hình ảnh tùy chỉnh trên bề mặt Quad trong Scene 3D, quy trình nào phù hợp?

A. Chỉ thay đổi Rigidbody

B. Chỉ bật Is Trigger

C. Nhập ảnh, tạo Material có Texture và gán vào Quad

D. Xóa Mesh Renderer

Câu 5. Khi thay đổi nhiều tham số cùng lúc và Scene xuất hiện lỗi, phương pháp xử lý nào tốt nhất?

A. Tiếp tục thay đổi ngẫu nhiên

B. Tái hiện lỗi, khoanh vùng và thử sửa từng nguyên nhân

C. Xóa toàn bộ Project

D. Bỏ qua lỗi nếu Console không có thông báo

Chấm điểm và xem giải thích

## 13. Tổng kết bài học

Bài thực hành giúp củng cố ba nhóm kỹ năng xây dựng môi trường 3D:

Thứ nhất — Căn chỉnh đối tượng: Vertex Snapping hỗ trợ lắp ghép các Mesh chính xác thay vì phụ thuộc hoàn toàn vào thao tác thủ công.

Thứ hai — Tái sử dụng tài nguyên: Prefab giúp xây dựng Scene từ nhiều đối tượng có cấu hình chung, đồng thời hỗ trợ quản lý thay đổi.

Thứ ba — Tùy chỉnh nội dung: Texture, Material và GameObject cho phép đưa hình ảnh riêng vào không gian 3D và tạo các chi tiết trang trí.

Bên cạnh kỹ thuật Unity, kỹ năng quan trọng nhất là tự xây dựng giả thuyết, thử nghiệm, quan sát và giải thích kết quả. Đây là nền tảng để người học có thể tự giải quyết các nhiệm vụ ngày càng phức tạp khi phát triển trò chơi.

Ghi chú phiên bản: Hướng dẫn thực hành được biên soạn cho Unity 6.3. Ba chủ đề thử thách đã được đối chiếu với mục lục bài học công khai của Unity Learn ở phiên bản 2022.3; các bước thực hành chi tiết ở đây là nội dung tự biên soạn, không phải bản chép hướng dẫn chính thức của Unity 6.3.