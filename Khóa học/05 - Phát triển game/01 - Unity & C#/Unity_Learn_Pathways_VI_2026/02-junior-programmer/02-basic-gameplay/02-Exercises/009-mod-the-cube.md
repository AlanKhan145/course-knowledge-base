# Bài 09 — Mod the Cube (Tùy biến khối lập phương trong Unity)

Junior Programmer

Basic Gameplay

Exercise

Unity 6.3

Thời lượng tham khảo: 30 phút · Trình độ: Beginner

Bài học chính thức: [Mod the Cube — Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/mod-the-cube?version=6.3\&utm_source=chatgpt.com). Nội dung được biên soạn thành bài thực hành tiếng Việt, bổ sung hướng dẫn kiểm thử và câu hỏi ôn tập.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn

+1



## 1. Tổng quan

Mod the Cube là bài tập thực hành chỉnh sửa một C# script có sẵn để thay đổi hình thức và hành vi của một khối lập phương (Cube) trong Unity.

Thay vì xây dựng toàn bộ chương trình từ đầu, người học sẽ quan sát hoạt động ban đầu, đọc mã nguồn, lựa chọn những thuộc tính cần thay đổi và kiểm tra kết quả trong Unity Editor.

Các thay đổi có thể liên quan đến vị trí, kích thước, hướng xoay, tốc độ quay, màu sắc hoặc độ trong suốt của Cube.

Bài tập rèn luyện quy trình:

\#chatgpt-mermaid-\_r_h7\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_h7\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_h7\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_h7\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_h7\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_h7\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_h7\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_h7\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_h7\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_h7\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_h7\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_h7\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_h7\_ p{margin:0;}#chatgpt-mermaid-\_r_h7\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_h7\_ .label text,#chatgpt-mermaid-\_r_h7\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ .node rect,#chatgpt-mermaid-\_r_h7\_ .node circle,#chatgpt-mermaid-\_r_h7\_ .node ellipse,#chatgpt-mermaid-\_r_h7\_ .node polygon,#chatgpt-mermaid-\_r_h7\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .rough-node .label text,#chatgpt-mermaid-\_r_h7\_ .node .label text,#chatgpt-mermaid-\_r_h7\_ .image-shape .label,#chatgpt-mermaid-\_r_h7\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_h7\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .rough-node .label,#chatgpt-mermaid-\_r_h7\_ .node .label,#chatgpt-mermaid-\_r_h7\_ .image-shape .label,#chatgpt-mermaid-\_r_h7\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_h7\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_h7\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_h7\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_h7\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_h7\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_h7\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_h7\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_h7\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_h7\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_h7\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_h7\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_h7\_ .icon-shape,#chatgpt-mermaid-\_r_h7\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_h7\_ .icon-shape p,#chatgpt-mermaid-\_r_h7\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_h7\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_h7\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_h7\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_h7\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_h7\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_h7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_h7\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_h7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_h7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_h7\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_h7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_h7\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_h7\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_h7\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_h7\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_h7\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .node rect,#chatgpt-mermaid-\_r_h7\_ .node circle,#chatgpt-mermaid-\_r_h7\_ .node ellipse,#chatgpt-mermaid-\_r_h7\_ .node polygon,#chatgpt-mermaid-\_r_h7\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_h7\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_h7\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_h7\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_h7\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_h7\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Mở dự án và SceneQuan sát Cube ban đầuĐọc script cube.csLựa chọn ít nhất 2 thay đổiChỉnh sửa C# scriptChạy Play ModeKết quả đúng?Kiểm tra Console và InspectorLưu Scene và Build WebGLĐăng lên Unity PlayChưaĐúng

Quy trình này giúp hình thành thói quen quan trọng trong phát triển game: quan sát → thay đổi → kiểm thử → cải tiến.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài tập, người học có thể:

1. Xác định vai trò của `GameObject`, `Transform`, `Component` và C# script trong một Unity Scene.
2. Đọc và phân tích được các thuộc tính đang được điều khiển bởi script `cube.cs`.
3. Chỉnh sửa ít nhất hai đặc điểm của Cube bằng C#.
4. Giải thích cách sử dụng biến `public` để điều chỉnh giá trị trong Inspector.
5. Kiểm thử thay đổi bằng Play Mode và phát hiện các lỗi cơ bản qua Console.
6. Tạo bản build WebGL và chia sẻ sản phẩm qua Unity Play.

## 3. Kiến thức cần sử dụng

### 3.1. GameObject và Component

Trong Unity, `GameObject` là đối tượng cơ bản dùng để biểu diễn các thành phần trong Scene.

Một Cube thông thường có thể chứa:

| Component       | Vai trò                                        |
| --------------- | ---------------------------------------------- |
| `Transform`     | Quản lý vị trí, góc xoay và kích thước         |
| `Mesh Filter`   | Chứa dữ liệu hình học của Cube                 |
| `Mesh Renderer` | Hiển thị hình dạng và vật liệu                 |
| `Box Collider`  | Xác định vùng va chạm                          |
| `cube.cs`       | Script điều khiển hành vi theo yêu cầu bài tập |

Trong bài thực hành, đối tượng Cube được gắn một script có sẵn. Chỉnh sửa script này sẽ cho phép thay đổi các thuộc tính của Cube khi trò chơi chạy.

### 3.2. Transform

`Transform` quản lý ba thuộc tính quan trọng:

| Thuộc tính | Ý nghĩa                    | Ví dụ        |
| ---------- | -------------------------- | ------------ |
| `Position` | Vị trí trong không gian 3D | `(0, 2, 0)`  |
| `Rotation` | Hướng và góc xoay          | `(0, 45, 0)` |
| `Scale`    | Tỉ lệ kích thước           | `(2, 2, 2)`  |

Trong C#, các thuộc tính tương ứng thường được truy cập bằng:

- `transform.position`
- `transform.rotation`
- `transform.localScale`

Lưu ý: `position` và `rotation` biểu diễn trong hệ tọa độ thế giới, trong khi `localScale` là tỉ lệ theo hệ tọa độ cục bộ.

### 3.3. Biến và Inspector

Một biến được khai báo `public` có thể xuất hiện trong Inspector của Unity nếu thuộc loại dữ liệu được Unity hỗ trợ tuần tự hóa.

Ví dụ minh họa cách khai báo một tham số:

```
public float rotationSpeed = 50f;
```

Ý nghĩa:

- `public`: biến có thể được truy cập từ các thành phần mã phù hợp và được Unity hiển thị trong Inspector khi có thể serialize.
- `float`: kiểu số thực.
- `rotationSpeed`: tên biến biểu diễn tốc độ quay.
- `50f`: giá trị khởi tạo.

Chỉ khai báo biến không làm Cube tự quay. Script vẫn cần sử dụng giá trị này trong logic điều khiển.

### 3.4. Play Mode và Console

`Play Mode` cho phép chạy thử Scene ngay trong Unity Editor. Đây là nơi kiểm tra xem hành vi có đúng với mong đợi không.

`Console` hỗ trợ phát hiện lỗi biên dịch, lỗi chạy chương trình và các thông báo debug.

Các thay đổi thực hiện trực tiếp trên đối tượng trong Play Mode thường không được giữ lại sau khi dừng chạy. Vì vậy, nên chỉnh sửa cấu hình cần lưu khi đã thoát Play Mode.

## 4. Đề bài thực hành

### 4.1. Bối cảnh

Dự án ban đầu chứa một Scene với Cube, Camera và Directional Light. Cube được gắn script `cube.cs` để thay đổi một số thuộc tính khi Scene chạy.

Nhiệm vụ là tùy chỉnh hành vi có sẵn để tạo ra phiên bản Cube mang phong cách riêng.

### 4.2. Yêu cầu bắt buộc

- Sử dụng bộ tài nguyên `ModTheCube` của bài tập.
- Quan sát hành vi ban đầu trước khi sửa code.
- Thực hiện ít nhất hai thay đổi đối với hành vi hoặc hình thức của Cube.
- Kiểm tra các thay đổi trong Play Mode.
- Tạo và công bố bản build WebGL trên Unity Play theo yêu cầu của bài chính thức.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

  Unity Learn



### 4.3. Những thuộc tính có thể tùy chỉnh

| Nhiệm vụ    | Thay đổi đề xuất            | Kết quả cần quan sát                           |
| ----------- | --------------------------- | ---------------------------------------------- |
| 1. Position | Đổi vị trí Cube             | Cube xuất hiện ở vị trí mới                    |
| 2. Scale    | Thay đổi kích thước         | Cube lớn hơn hoặc nhỏ hơn                      |
| 3. Rotation | Thay đổi góc hoặc trục xoay | Cube xoay theo hướng khác                      |
| 4. Speed    | Thay đổi tốc độ quay        | Cube quay nhanh hoặc chậm hơn                  |
| 5. Color    | Đổi màu vật liệu            | Cube hiển thị màu mới                          |
| 6. Opacity  | Điều chỉnh độ trong suốt    | Cube có thể nhìn xuyên qua khi vật liệu hỗ trợ |

Đây là các phương án lựa chọn, không bắt buộc hoàn thành cả sáu.

### 4.4. Nhiệm vụ nâng cao (tùy chọn)

Sau khi hoàn thành yêu cầu cơ bản, có thể thử:

- Thiết lập một số giá trị ngẫu nhiên mỗi lần bắt đầu Scene.
- Làm màu sắc Cube thay đổi theo thời gian.
- Kết hợp chuyển động với việc thay đổi kích thước.
- Tạo hành vi độc đáo bằng cách phối hợp nhiều thuộc tính.

Các nhiệm vụ nâng cao giúp luyện cách sử dụng biến, điều kiện và cơ chế cập nhật theo thời gian.

## 5. Quy trình thực hiện

### Bước 1 — Chuẩn bị dự án

1. Tải gói `ModTheCubeChallengeAssets` từ [trang bài tập Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/mod-the-cube?version=6.3\&utm_source=chatgpt.com).
2. Tạo một Unity Project mới bằng template 3D.
3. Nhập tệp `ModTheCube.unitypackage` vào dự án.
4. Mở Scene được cung cấp trong thư mục `ModTheCube`.

Bộ tài nguyên gồm Scene, Material và C# script.

Checkpoint: Scene xuất hiện Cube cùng Camera và Directional Light.

### Bước 2 — Quan sát trạng thái ban đầu

Chọn Cube trong Hierarchy và kiểm tra các Component của đối tượng trong Inspector.

Nhấn Play để quan sát hành vi.

Ghi nhận những yếu tố sau:

| Thuộc tính  | Quan sát trước khi sửa | Mong muốn sau khi sửa |
| ----------- | ---------------------- | --------------------- |
| Vị trí      | Tự ghi nhận            |                       |
| Kích thước  | Tự ghi nhận            |                       |
| Góc xoay    | Tự ghi nhận            |                       |
| Tốc độ quay | Tự ghi nhận            |                       |
| Màu sắc     | Tự ghi nhận            |                       |

Không cần thay đổi code tại bước này.

### Bước 3 — Phân tích script

Mở `cube.cs` bằng trình soạn thảo C#.

Tìm các đoạn mã điều khiển vị trí, kích thước, góc xoay và thuộc tính vật liệu.

Xác định:

- Biến nào đang chứa giá trị cố định?
- Giá trị nào có thể thay đổi để tạo kết quả khác?
- Phần logic nào được thực hiện khi Scene bắt đầu?
- Phần logic nào được cập nhật liên tục?
- Có thể đưa những tham số nào ra Inspector?

Một thay đổi tốt cần có giả thuyết rõ ràng.

Ví dụ: Nếu tăng biến tốc độ quay, dự đoán Cube sẽ quay nhanh hơn nhưng không nhất thiết thay đổi hướng quay.

### Bước 4 — Chỉnh sửa Cube

Lựa chọn ít nhất hai nhiệm vụ ở mục 4.3.

Với mỗi nhiệm vụ:

1. Xác định thuộc tính muốn sửa.
2. Tìm đoạn mã đang điều khiển thuộc tính đó.
3. Điều chỉnh giá trị hoặc logic cần thiết.
4. Lưu script.
5. Chạy Scene và so sánh với dự đoán.

Nên thực hiện từng thay đổi riêng để dễ xác định nguyên nhân khi kết quả không đúng.

### Bước 5 — Kiểm thử và cải tiến

Kiểm tra các trường hợp:

| Trường hợp              | Cách kiểm thử                                    |
| ----------------------- | ------------------------------------------------ |
| Chạy lần đầu            | Quan sát hành vi chính                           |
| Khởi động lại Play Mode | Xác định hành vi có lặp lại như thiết kế         |
| Thay đổi tham số        | So sánh hai giá trị khác nhau                    |
| Kiểm tra hiển thị       | Bảo đảm Cube nằm trong vùng nhìn thấy của Camera |
| Kiểm tra lỗi            | Quan sát thông báo trong Console                 |

Nếu dùng biến ngẫu nhiên, kết quả có thể khác nhau giữa các lần chạy. Điều quan trọng là kết quả vẫn nằm trong phạm vi thiết kế.

### Bước 6 — Build WebGL và xuất bản

Sau khi Scene hoạt động đúng:

1. Điều chỉnh Camera để Cube hiển thị rõ ràng.
2. Lưu Scene.
3. Bảo đảm đã cài module Web Build Support cho Unity.
4. Mở File → Build Profiles.
5. Chọn nền tảng Web, sau đó chuyển nền tảng bằng Switch Platform nếu cần.
6. Tạo bản build WebGL.
7. Xuất bản lên [Unity Play](https://play.unity.com/?utm_source=chatgpt.com) theo hướng dẫn xuất bản dành cho phiên bản Unity đang sử dụng.
8. Lưu liên kết sản phẩm để nộp bài.

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng                                 | Nguyên nhân có thể                                          | Cách kiểm tra                      |
| ------------------------------------------ | ----------------------------------------------------------- | ---------------------------------- |
| Cube không thay đổi                        | Script chưa được gắn hoặc logic chưa hoạt động              | Kiểm tra Component trên Cube       |
| Cube không xuất hiện                       | Vị trí ngoài tầm Camera                                     | Kiểm tra Position và Camera        |
| Không điều chỉnh được biến trong Inspector | Biến chưa được serialize hoặc thuộc loại không hỗ trợ       | Kiểm tra khai báo biến             |
| Cube quay quá nhanh                        | Giá trị tốc độ không phù hợp                                | Giảm tham số và thử lại            |
| Màu sắc không thay đổi                     | Material hoặc shader không hỗ trợ cách điều chỉnh đang dùng | Kiểm tra Mesh Renderer và Material |
| Thay đổi biến mất sau khi dừng Play Mode   | Chỉnh sửa giá trị trong lúc chạy                            | Thiết lập lại ngoài Play Mode      |
| WebGL không build được                     | Có lỗi script, cấu hình hoặc thiếu module                   | Kiểm tra Console và Build Profiles |

Quy trình debug đề xuất:

1. Tái hiện vấn đề.
2. Mở Console và xác định thông báo lỗi.
3. Kiểm tra script, Component và tham chiếu.
4. Sửa một nguyên nhân nghi ngờ.
5. Chạy lại và xác nhận kết quả.

## 7. Sản phẩm cần hoàn thành

Sản phẩm chính là một Cube được tùy biến bằng C# và hoạt động trong Scene.

Để tự đánh giá và lưu minh chứng học tập, nên chuẩn bị:

| Thành phần    | Nội dung                                              |
| ------------- | ----------------------------------------------------- |
| Unity Project | Dự án chứa Scene và script                            |
| C# script     | `cube.cs` đã chỉnh sửa                                |
| Minh chứng    | Ảnh hoặc video trước và sau khi chỉnh sửa             |
| Bản WebGL     | Phiên bản có thể chạy trên trình duyệt hỗ trợ         |
| Liên kết      | URL của sản phẩm trên Unity Play                      |
| Ghi chép      | Mô tả thay đổi, cách kiểm thử và vấn đề đã giải quyết |

### Tiêu chí tự đánh giá

| Tiêu chí                       | Điểm |
| ------------------------------ | ---- |
| Import và mở Scene thành công  | 15   |
| Phân tích được hành vi ban đầu | 15   |
| Thực hiện ít nhất hai thay đổi | 30   |
| Kiểm thử và xử lý lỗi          | 20   |
| Build và công bố sản phẩm      | 20   |
| Tổng cộng                      | 100  |

Thang điểm tự biên soạn để tự học, không phải hệ thống chấm điểm chính thức của Unity Learn.

## 8. Checklist hoàn thành

Tiến độ thực hành

0/8

Tạo được dự án Unity 3D và import tài nguyên bài tập.

Mở được Scene và quan sát Cube ban đầu.

Xác định được vai trò của script cube.cs.

Thực hiện được ít nhất hai thay đổi.

Chạy thử và kiểm tra Console.

Có minh chứng trước và sau khi chỉnh sửa.

Tạo được bản build WebGL.

Lưu được liên kết sản phẩm trên Unity Play.

## 9. Câu hỏi ôn tập

Chọn đáp án đúng nhất cho mỗi câu hỏi.

Câu 1. Component nào quản lý vị trí, góc xoay và tỉ lệ kích thước của Cube?

A. Mesh Renderer

B. Transform

C. Box Collider

D. Camera

Câu 2. Khi tăng giá trị tốc độ quay trong logic điều khiển phù hợp, điều gì xảy ra?

A. Cube tự đổi màu

B. Cube mất Collider

C. Cube ngừng hoạt động

D. Cube quay nhanh hơn

Câu 3. Muốn điều chỉnh một biến float trong Inspector theo cách được giới thiệu trong bài, khai báo nào phù hợp?

A. public float speed = 5f;

B. static void speed() {}

C. const float speed = 5f;

D. float speed() { return 5f; }

Câu 4. Sau khi chỉnh sửa code, phương pháp kiểm tra nào phù hợp nhất?

A. Build ngay mà không cần chạy thử

B. Chỉnh sửa nhiều đoạn mã cùng lúc

C. Chạy Play Mode và so sánh kết quả với dự đoán

D. Chỉ quan sát tên file script

Câu 5. Khi Cube không xuất hiện trong Game view, bước kiểm tra nào hợp lý?

A. Xóa toàn bộ project

B. Kiểm tra vị trí Cube và hướng nhìn của Camera

C. Đổi tên tất cả script

D. Tăng số lượng GameObject

Chấm điểmLàm lại

Tổng kết: Bài tập Mod the Cube giúp rèn luyện khả năng đọc và chỉnh sửa một C# script có sẵn, kiểm soát các thuộc tính GameObject, sử dụng Inspector và kiểm thử chương trình trong Unity. Kết quả quan trọng nhất không chỉ là tạo ra một Cube mới, mà còn là giải thích được đoạn mã nào tạo ra thay đổi, vì sao thay đổi xảy ra và làm thế nào để kiểm chứng nó.

Ghi chú phiên bản: Nội dung đối chiếu với Unity Learn phiên bản 6.3. Giao diện Build Profiles và quy trình xuất bản có thể thay đổi giữa các phiên bản Unity.