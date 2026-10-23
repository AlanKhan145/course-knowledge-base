# Bài 01 — Unit 2: Introduction

Junior Programmer · Unit 2: Basic Gameplay · Unity 6.3 · Tutorial

Nguồn học: [Unity Learn — Basic Gameplay](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com)

Nội dung: Bài học tiếng Việt tự biên soạn theo đề mục công khai, không phải bản dịch hoặc transcript chính thức của Unity.

## 1. Tổng quan bài học

### 1.1. Giới thiệu

Trong quá trình phát triển trò chơi bằng Unity, việc nắm vững công cụ chỉ là bước khởi đầu. Người lập trình còn cần biết cách xác định mục tiêu, thực hiện thay đổi, kiểm tra kết quả và xử lý những vấn đề phát sinh.

Unit 2 — Basic Gameplay tập trung vào việc xây dựng nền tảng để phát triển các tương tác trong trò chơi.

Bài mở đầu này giúp hình thành phương pháp học tập và thực hành có hệ thống, thay vì chỉ thực hiện thao tác theo hướng dẫn mà không hiểu nguyên lý.

Một quy trình học tập hiệu quả luôn trả lời được ba câu hỏi:

1. Mục tiêu: Cần tạo ra kết quả gì?
2. Thực hiện: Phải sử dụng công cụ và thao tác nào?
3. Kiểm chứng: Làm thế nào để xác định kết quả đã đúng?

### 1.2. Kết quả mong đợi

Sau khi hoàn thành bài học, người học có thể tự tổ chức một bài thực hành nhỏ trong Unity Editor, xác định được kết quả mong đợi và sử dụng công cụ kiểm tra để đánh giá kết quả thực tế.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Giải thích được vai trò của phương pháp thực hành theo nhiệm vụ trong phát triển game.
- Xác định được đầu vào, công cụ, thao tác và kết quả đầu ra của một bài thực hành.
- Phân biệt được `Scene`, `GameObject`, `Component`, `Inspector` và `Play Mode`.
- Áp dụng quy trình dự đoán, thử nghiệm, quan sát và đánh giá kết quả.
- Phân tích một lỗi đơn giản và đề xuất cách kiểm chứng nguyên nhân.

## 3. Kiến thức trọng tâm

### 3.1. Phương pháp học theo nhiệm vụ

Học theo nhiệm vụ (Task-based Learning) là cách tiếp cận trong đó mỗi hoạt động thực hành đều hướng đến một kết quả cụ thể có thể kiểm chứng.

Ví dụ, thay vì đặt mục tiêu chung chung là học cách sử dụng Unity, hãy xác định một nhiệm vụ rõ ràng:

> Tạo một khối Cube trong Scene, thay đổi vị trí của nó và kiểm tra xem kết quả trong Game view có phù hợp với dự đoán hay không.

Nhiệm vụ này nhỏ nhưng giúp người học vận dụng nhiều kiến thức cơ bản:

- Tạo và lựa chọn `GameObject`.
- Sử dụng `Inspector`.
- Thay đổi thuộc tính `Transform`.
- Kiểm tra kết quả trong `Scene view` và `Game view`.

### 3.2. Quy trình học tập và kiểm chứng

Chu trình thực hành trong Unity

\#chatgpt-mermaid-\_r_1er\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1er\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1er\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1er\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1er\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1er\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1er\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1er\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1er\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1er\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1er\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1er\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1er\_ p{margin:0;}#chatgpt-mermaid-\_r_1er\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1er\_ .label text,#chatgpt-mermaid-\_r_1er\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ .node rect,#chatgpt-mermaid-\_r_1er\_ .node circle,#chatgpt-mermaid-\_r_1er\_ .node ellipse,#chatgpt-mermaid-\_r_1er\_ .node polygon,#chatgpt-mermaid-\_r_1er\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .rough-node .label text,#chatgpt-mermaid-\_r_1er\_ .node .label text,#chatgpt-mermaid-\_r_1er\_ .image-shape .label,#chatgpt-mermaid-\_r_1er\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1er\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .rough-node .label,#chatgpt-mermaid-\_r_1er\_ .node .label,#chatgpt-mermaid-\_r_1er\_ .image-shape .label,#chatgpt-mermaid-\_r_1er\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1er\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1er\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1er\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1er\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1er\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1er\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1er\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1er\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1er\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1er\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1er\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1er\_ .icon-shape,#chatgpt-mermaid-\_r_1er\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1er\_ .icon-shape p,#chatgpt-mermaid-\_r_1er\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1er\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1er\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1er\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1er\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1er\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1er\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1er\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1er\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1er\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1er\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1er\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1er\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1er\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1er\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1er\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1er\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .node rect,#chatgpt-mermaid-\_r_1er\_ .node circle,#chatgpt-mermaid-\_r_1er\_ .node ellipse,#chatgpt-mermaid-\_r_1er\_ .node polygon,#chatgpt-mermaid-\_r_1er\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1er\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1er\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1er\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1er\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1er\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Xác định mục tiêuQuan sát Scene hiện tạiDự đoán kết quảThực hiện thay đổiChạy thử trong Play ModeKết quả đúng?Ghi nhận và hoàn thànhKiểm tra Console và InspectorĐề xuất và thử cách sửaCóKhông

Quy trình này giúp biến mỗi lần thực hành thành một thử nghiệm có mục tiêu.

Nếu kết quả không đúng với dự đoán, người học cần tìm hiểu nguyên nhân trước khi thực hiện thay đổi tiếp theo.

Đặc biệt, chỉ nên thay đổi một yếu tố quan trọng tại một thời điểm để dễ dàng xác định tác động của nó.

### 3.3. Các thành phần cơ bản trong Unity

| Thành phần   | Vai trò                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `Scene`      | Không gian chứa các đối tượng và thành phần của trò chơi.                                       |
| `GameObject` | Đối tượng cơ bản trong Unity, có thể là nhân vật, camera, vật thể hoặc đối tượng quản lý logic. |
| `Component`  | Thành phần bổ sung dữ liệu hoặc chức năng cho GameObject.                                       |
| `Transform`  | Component quản lý vị trí, góc xoay và tỉ lệ của đối tượng.                                      |
| `Inspector`  | Bảng xem và chỉnh sửa thuộc tính của GameObject hoặc tài nguyên đang được chọn.                 |
| `Scene view` | Cửa sổ dùng để xây dựng và quan sát Scene trong Editor.                                         |
| `Game view`  | Cửa sổ hiển thị góc nhìn trò chơi qua Camera.                                                   |
| `Play Mode`  | Chế độ chạy thử trò chơi trong Unity Editor.                                                    |
| `Console`    | Cửa sổ hiển thị log, cảnh báo và lỗi.                                                           |

Một `GameObject` thường được cấu thành từ nhiều `Component`.

Ví dụ, một Cube 3D có thể có:

- `Transform`: xác định vị trí, góc xoay và tỉ lệ.
- `Mesh Filter`: tham chiếu dữ liệu hình học của khối.
- `Mesh Renderer`: hiển thị hình dạng của khối.
- `Box Collider`: cung cấp hình dạng va chạm dạng hộp.

Việc hiểu mối quan hệ giữa `GameObject` và `Component` giúp người học xác định đúng nơi cần kiểm tra hoặc thay đổi thuộc tính.

## 4. Thực hành: Quan sát và kiểm chứng thay đổi trong Unity

### 4.1. Chuẩn bị

Cần có:

- Unity Editor và một dự án 3D có thể mở được.
- Một Scene dùng để thực hành.
- Các cửa sổ `Hierarchy`, `Inspector`, `Scene`, `Game` và `Console`.

Có thể sử dụng dự án hiện có hoặc tạo một Scene đơn giản để thực hiện bài tập.

### 4.2. Bước 1 — Quan sát trạng thái ban đầu

Mở Scene và kiểm tra các GameObject trong cửa sổ `Hierarchy`.

Lựa chọn một đối tượng để xem các Component trong `Inspector`.

Nếu Scene chưa có vật thể phù hợp, tạo một Cube thông qua:

`GameObject → 3D Object → Cube`

Đặt tên đối tượng là `PracticeCube`.

### 4.3. Bước 2 — Xác định kết quả mong đợi

Chọn `PracticeCube` và kiểm tra `Transform`.

Đặt `Position` về:

| Trục | Giá trị |
| ---- | ------- |
| X    | 0       |
| Y    | 0       |
| Z    | 0       |

Nhiệm vụ cần thực hiện là di chuyển Cube sang phải theo trục X bằng cách thay đổi `Position X` thành `2`.

Dự đoán: Cube sẽ dịch chuyển 2 đơn vị Unity theo chiều dương của trục X trong hệ tọa độ đang được chỉnh sửa.

### 4.4. Bước 3 — Thực hiện thay đổi

1. Chọn `PracticeCube` trong `Hierarchy`.
2. Mở Component `Transform` trong `Inspector`.
3. Thay đổi `Position X` từ `0` thành `2`.
4. Quan sát vị trí mới trong `Scene view`.
5. Lưu Scene và chạy thử bằng nút `Play`.

Nếu Cube không xuất hiện trong `Game view`, kiểm tra vị trí và hướng của Camera trước khi kết luận việc di chuyển thất bại.

### 4.5. Bước 4 — Kiểm tra kết quả

Đối chiếu giữa kết quả dự đoán và thực tế.

| Tiêu chí        | Kết quả cần kiểm tra                                           |
| --------------- | -------------------------------------------------------------- |
| Đối tượng       | `PracticeCube`                                                 |
| Giá trị ban đầu | Position X = 0                                                 |
| Giá trị mới     | Position X = 2                                                 |
| Scene view      | Cube đã thay đổi vị trí                                        |
| Game view       | Cube hiển thị theo góc nhìn Camera nếu nằm trong vùng quan sát |
| Console         | Kiểm tra xem có lỗi hoặc cảnh báo liên quan hay không          |

Lưu ý rằng một thay đổi thuộc tính đơn giản không nhất thiết tạo ra thông báo trong Console. Không có log không có nghĩa là chưa thực hiện thao tác.

### 4.6. Bước 5 — Ghi lại kết quả

Hoàn thành bảng ghi chép sau:

| Nội dung                  | Ghi chép                              |
| ------------------------- | ------------------------------------- |
| Mục tiêu                  | Di chuyển Cube theo trục X            |
| Dự đoán                   | Cube dịch chuyển 2 đơn vị             |
| Kết quả thực tế           | Tự ghi sau khi chạy                   |
| Bằng chứng                | Ảnh chụp Inspector và Scene/Game view |
| Vấn đề gặp phải           | Ghi nếu có                            |
| Nguyên nhân và cách xử lý | Giải thích dựa trên quan sát          |

Lưu ý: Những thay đổi thực hiện trực tiếp trong `Play Mode` thường không được giữ lại sau khi thoát chế độ chạy thử. Vì vậy, nên cấu hình và lưu Scene ở chế độ chỉnh sửa trước khi chạy.

## 5. Bài tập củng cố

### 5.1. Bài tập cơ bản

Tạo ba Cube và đặt chúng ở ba vị trí khác nhau.

Yêu cầu:

- Đặt tên các đối tượng dễ phân biệt.
- Điều chỉnh `Position` bằng `Inspector`.
- Quan sát vị trí của từng đối tượng.
- Chạy thử và giải thích kết quả.

### 5.2. Bài tập vận dụng

Chọn một Cube và thay đổi lần lượt:

- `Position`: vị trí.
- `Rotation`: góc xoay.
- `Scale`: kích thước theo các trục.

Trước mỗi lần thay đổi, hãy dự đoán hình dạng hoặc vị trí của Cube.

Chỉ thay đổi một thuộc tính mỗi lần thử để dễ so sánh.

### 5.3. Bài tập mở rộng

Tạo một Scene có ba đối tượng:

- Một Cube làm nhân vật đại diện.
- Một Sphere làm vật thể mục tiêu.
- Một Plane làm mặt đất.

Bố trí các đối tượng và đảm bảo Camera có thể quan sát được bố cục chính khi chạy thử.

Ở bài tập này, chưa cần lập trình cơ chế di chuyển hoặc tương tác. Mục tiêu là làm quen với việc tổ chức Scene và kiểm chứng bố cục.

## 6. Lỗi thường gặp và phương pháp Debug

| Hiện tượng                                 | Nguyên nhân có thể xảy ra                | Cách kiểm tra                                    |
| ------------------------------------------ | ---------------------------------------- | ------------------------------------------------ |
| Cube không xuất hiện trong Game view       | Nằm ngoài góc nhìn Camera                | Kiểm tra vị trí và hướng Camera                  |
| Không thể nhìn thấy đối tượng              | GameObject hoặc Renderer không hoạt động | Kiểm tra trạng thái trong Hierarchy và Inspector |
| Thay đổi không còn sau khi thoát Play Mode | Giá trị được sửa trong lúc chạy thử      | Chỉnh sửa lại ngoài Play Mode                    |
| Cube di chuyển không đúng hướng dự đoán    | Nhầm trục tọa độ hoặc hệ tọa độ          | Kiểm tra Transform và hướng các trục             |
| Không xác định được nguyên nhân lỗi        | Thay đổi nhiều thuộc tính đồng thời      | Hoàn nguyên và thử từng thay đổi                 |

### Quy trình Debug năm bước

\#chatgpt-mermaid-\_r_1f4\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1f4\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1f4\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1f4\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1f4\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1f4\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1f4\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1f4\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1f4\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1f4\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1f4\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1f4\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1f4\_ p{margin:0;}#chatgpt-mermaid-\_r_1f4\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1f4\_ .label text,#chatgpt-mermaid-\_r_1f4\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ .node rect,#chatgpt-mermaid-\_r_1f4\_ .node circle,#chatgpt-mermaid-\_r_1f4\_ .node ellipse,#chatgpt-mermaid-\_r_1f4\_ .node polygon,#chatgpt-mermaid-\_r_1f4\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .rough-node .label text,#chatgpt-mermaid-\_r_1f4\_ .node .label text,#chatgpt-mermaid-\_r_1f4\_ .image-shape .label,#chatgpt-mermaid-\_r_1f4\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1f4\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .rough-node .label,#chatgpt-mermaid-\_r_1f4\_ .node .label,#chatgpt-mermaid-\_r_1f4\_ .image-shape .label,#chatgpt-mermaid-\_r_1f4\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1f4\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1f4\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1f4\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1f4\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1f4\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1f4\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1f4\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1f4\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1f4\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1f4\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1f4\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1f4\_ .icon-shape,#chatgpt-mermaid-\_r_1f4\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1f4\_ .icon-shape p,#chatgpt-mermaid-\_r_1f4\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1f4\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1f4\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1f4\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1f4\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1f4\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1f4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1f4\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1f4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1f4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1f4\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1f4\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1f4\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1f4\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1f4\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1f4\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1f4\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .node rect,#chatgpt-mermaid-\_r_1f4\_ .node circle,#chatgpt-mermaid-\_r_1f4\_ .node ellipse,#chatgpt-mermaid-\_r_1f4\_ .node polygon,#chatgpt-mermaid-\_r_1f4\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1f4\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1f4\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1f4\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1f4\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1f4\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}1. Tái hiện lỗi2. Đọc Console3. Kiểm tra GameObject vàComponent4. Sửa một nguyên nhân giảđịnh5. Chạy lại và so sánh kết quả

Khi Debug, cần phân biệt giữa hiện tượng quan sát được và nguyên nhân giả định.

Ví dụ, việc Cube không xuất hiện trong Game view là một hiện tượng. Camera quay sai hướng chỉ là một nguyên nhân có thể xảy ra và cần được kiểm chứng.

## 7. Checklist hoàn thành

- Giải thích được mục đích của phương pháp học theo nhiệm vụ.
- Phân biệt được Scene, GameObject và Component.
- Tạo được một đối tượng Cube trong Unity.
- Thay đổi được thuộc tính Transform bằng Inspector.
- Sử dụng Play Mode để chạy thử Scene.
- Đối chiếu được kết quả mong đợi và kết quả thực tế.
- Kiểm tra được Console và các Component liên quan khi có lỗi.
- Lưu được ảnh chụp hoặc video minh chứng cho bài thực hành.
- Đọc nội dung [Basic Gameplay trên Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com) để đối chiếu hoạt động chính thức và tài nguyên đính kèm.

## 8. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức · 5 câu

0/5 đã trả lời

Câu 1. Khi bắt đầu một nhiệm vụ thực hành trong Unity, điều nào nên được xác định trước tiên?

A. Số lượng script cần tạo

B. Kết quả đầu ra có thể kiểm chứng

C. Màu sắc của tất cả đối tượng

D. Số lượng package cần cài

Câu 2. Muốn thay đổi vị trí của Cube, nên chỉnh sửa thành phần nào?

A. Mesh Renderer

B. Console

C. Transform

D. Game view

Câu 3. Cube hiển thị trong Scene view nhưng không xuất hiện trong Game view. Bước kiểm tra hợp lý nhất là gì?

A. Kiểm tra Camera và trạng thái hiển thị của Cube

B. Xóa toàn bộ Scene

C. Cài đặt lại Unity ngay lập tức

D. Tạo một dự án mới

Câu 4. Vì sao không nên thay đổi nhiều thuộc tính cùng lúc khi đang kiểm tra một vấn đề?

A. Unity không hỗ trợ thay đổi nhiều thuộc tính

B. Inspector chỉ lưu được một giá trị

C. Play Mode sẽ tự động đóng

D. Khó xác định thay đổi nào gây ra kết quả

Câu 5. Một giá trị được thay đổi trong Play Mode nhưng trở về như cũ khi thoát chế độ này. Nhận định nào phù hợp nhất?

A. Mọi Component đều đã bị xóa

B. Các thay đổi lúc chạy thử thường không được lưu lại

C. Dự án chắc chắn đã bị hỏng

D. Game view đã làm mất Scene

Làm lạiChấm điểm

## 9. Tổng kết bài học

Bài học giới thiệu phương pháp tiếp cận có hệ thống khi thực hành với Unity Editor.

Ba nguyên tắc cần ghi nhớ:

1. Có mục tiêu rõ ràng: Mỗi thao tác phải hướng đến một kết quả có thể quan sát.
2. Thử nghiệm có kiểm soát: Dự đoán và thay đổi từng yếu tố để hiểu cách Unity hoạt động.
3. Kiểm chứng và giải thích: Không chỉ xác nhận kết quả đúng hay sai mà còn phải hiểu nguyên nhân.

Khi áp dụng thường xuyên, quy trình này sẽ giúp người học tự tin hơn trong việc xây dựng, kiểm thử và Debug các tương tác của trò chơi.

Ghi chú phiên bản: Nội dung thực hành được trình bày theo định hướng Unity 6.3. Giao diện, menu và package có thể thay đổi theo phiên bản Unity đang sử dụng.