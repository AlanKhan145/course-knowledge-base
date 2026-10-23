UNITY ESSENTIALS · 3D ESSENTIALS · BÀI 01 · UNITY 6.3

# Bài 01 — Add Furniture to the Kid’s Room

Bố trí nội thất cho phòng trẻ em trong Unity 3D

&#x20;20 phút

&#x20;Cơ bản

&#x20;Thực hành Unity Editor

[Add furniture to the kid’s room - Unity Learn](https://images.openai.com/static-rsc-4/QeS-0LB8Gp7Pf0_kreFriF6AQxAkompvWjl6KcVdvL1fdsaCv18_fCzaEpacQKiWUYLgAOnsR67xWpgvt5WqQOqql_Edu-PrJIU_jWP9syEfFH48tn7eZk4EvmXRYTVCnGoJtZOK2v0y3v116x3LvnQRB3mpFFk0GW1FEy07SUA?purpose=inline)

[learn.unity.com](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials/tutorial/add-furniture-to-the-kids-room?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong Unity, việc xây dựng một không gian 3D không nhất thiết phải bắt đầu bằng cách tự tạo từng mô hình. Nhà phát triển có thể sử dụng những đối tượng đã được chuẩn bị sẵn, đưa chúng vào Scene và điều chỉnh vị trí, hướng xoay để thiết kế một môi trường hoàn chỉnh.

Bài thực hành này tập trung vào việc xây dựng một phòng ngủ dành cho trẻ em bằng các mô hình có sẵn trong dự án Unity Essentials.

Kết quả cần đạt: Tạo được một căn phòng 3D có giường, thảm và các món đồ nội thất được sắp xếp hợp lý, đồng thời chừa một góc trống cho các hoạt động thực hành tiếp theo.

Những kỹ năng chính gồm:

- Sử dụng `Scene View` để quan sát không gian 3D.
- Tìm kiếm và sử dụng `Prefab` có sẵn.
- Điều chỉnh `Transform` của các `GameObject`.
- Di chuyển, xoay và bố trí đồ vật.
- Kiểm tra kết quả và lưu Scene.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài này, người học có thể:

1. Phân biệt vai trò của `Scene`, `GameObject`, `Prefab` và `Transform`.
2. Mở đúng Scene thực hành từ cửa sổ `Project`.
3. Thêm một Prefab căn phòng vào Scene.
4. Thiết lập vị trí đối tượng bằng giá trị tọa độ trong Inspector.
5. Sử dụng công cụ Move và Rotate để sắp xếp nội thất.
6. Phát hiện và khắc phục các lỗi sai vị trí, hướng xoay hoặc thao tác nhầm vào Prefab.

## 3. Chuẩn bị môi trường

Sử dụng Unity 6.3 và dự án Unity Essentials có các tài nguyên thực hành của Mission 3D Essentials.

Các cửa sổ cần sử dụng:

| Cửa sổ      | Chức năng                                                |
| ----------- | -------------------------------------------------------- |
| `Scene`     | Quan sát, lựa chọn và bố trí vật thể trong không gian 3D |
| `Hierarchy` | Hiển thị những GameObject đang tồn tại trong Scene       |
| `Project`   | Quản lý Asset như Scene, Prefab, Material                |
| `Inspector` | Xem và chỉnh sửa các Component của đối tượng             |
| `Game`      | Quan sát hình ảnh từ Camera khi chạy hoặc xem trước cảnh |

Bố cục làm việc của Unity Editor

[【Unity入門】初心者がまず覚えるべき基本操作と用語集！インストールから画面の見方まで｜MEキャンパス](https://images.openai.com/static-rsc-4/w6_EOP3hmfo7StolP7CpfRhFE0W4CyeI5sUjL_WMtqqz1SnkqiSydzsyFWbxWLGWof_m2oBz-4ewspmVuQRLDwUdjTT04JR6eBkMQOHiqDkPZ1udyPKrQNSSzVxipbgVWNICKygnbwEACi7J9LT_JzvosT8x-dVD5YDxge4VahQ?purpose=inline)

[note.com](https://note.com/mecampus/n/n475750953bb3?utm_source=chatgpt.com)

Vị trí các bảng có thể thay đổi tùy cách bố trí Editor. Cần nhận diện bảng theo tên, không phụ thuộc vị trí cố định trên màn hình.

## 4. Kiến thức cốt lõi

### 4.1. Scene và GameObject

`Scene` là không gian làm việc chứa những đối tượng tạo nên một màn chơi hoặc môi trường 3D.

Ví dụ, một phòng ngủ có thể chứa căn phòng, giường ngủ, tủ quần áo, thảm trải sàn và đồ chơi. Mỗi thành phần được biểu diễn bằng một hoặc nhiều GameObject.

`GameObject` là đối tượng cơ bản trong Unity. Nó có thể chứa các Component quy định hình dạng, cách hiển thị, vị trí hoặc hành vi.

### 4.2. Prefab là gì?

`Prefab` là một tài nguyên dùng để lưu cấu hình GameObject có thể tái sử dụng.

Thay vì tạo lại một chiếc giường từ những hình khối cơ bản, người phát triển có thể kéo Prefab chiếc giường vào Scene.

Có hai khái niệm cần phân biệt:

| Khái niệm       | Ý nghĩa                                          |
| --------------- | ------------------------------------------------ |
| Prefab Asset    | Tài nguyên gốc được lưu trong Project            |
| Prefab Instance | Một phiên bản được đặt vào Scene từ Prefab Asset |

Một Prefab có thể được sử dụng nhiều lần trong cùng một Scene hoặc nhiều Scene khác nhau.

### 4.3. Transform và hệ tọa độ 3D

Mọi GameObject đều có Component `Transform`, quản lý ba thuộc tính:

| Thuộc tính | Ý nghĩa                  | Ví dụ                           |
| ---------- | ------------------------ | ------------------------------- |
| `Position` | Vị trí của đối tượng     | Đặt phòng tại gốc tọa độ        |
| `Rotation` | Hướng xoay của đối tượng | Xoay giường áp sát tường        |
| `Scale`    | Kích thước tương đối     | Thu nhỏ hoặc phóng to đối tượng |

Trong hệ tọa độ 3D thông dụng của Unity:

- Trục X biểu diễn hướng ngang.
- Trục Y biểu diễn hướng lên và xuống.
- Trục Z biểu diễn chiều sâu.

Gốc tọa độ (Origin) là vị trí `(0, 0, 0)`. Khi đặt `Position` bằng những giá trị này, điểm gốc Transform của đối tượng sẽ nằm tại gốc tọa độ thế giới, nếu đối tượng không chịu ảnh hưởng từ Transform của đối tượng cha.

## 5. Quy trình thực hành

\#chatgpt-mermaid-\_r_l8\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_l8\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l8\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l8\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_l8\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_l8\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_l8\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_l8\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_l8\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_l8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l8\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l8\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_l8\_ p{margin:0;}#chatgpt-mermaid-\_r_l8\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_l8\_ .label text,#chatgpt-mermaid-\_r_l8\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ .node rect,#chatgpt-mermaid-\_r_l8\_ .node circle,#chatgpt-mermaid-\_r_l8\_ .node ellipse,#chatgpt-mermaid-\_r_l8\_ .node polygon,#chatgpt-mermaid-\_r_l8\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .rough-node .label text,#chatgpt-mermaid-\_r_l8\_ .node .label text,#chatgpt-mermaid-\_r_l8\_ .image-shape .label,#chatgpt-mermaid-\_r_l8\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_l8\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .rough-node .label,#chatgpt-mermaid-\_r_l8\_ .node .label,#chatgpt-mermaid-\_r_l8\_ .image-shape .label,#chatgpt-mermaid-\_r_l8\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_l8\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_l8\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l8\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l8\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_l8\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l8\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l8\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l8\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_l8\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_l8\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l8\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_l8\_ .icon-shape,#chatgpt-mermaid-\_r_l8\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l8\_ .icon-shape p,#chatgpt-mermaid-\_r_l8\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_l8\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_l8\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l8\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_l8\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_l8\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_l8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_l8\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_l8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_l8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l8\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_l8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l8\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l8\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l8\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_l8\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_l8\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .node rect,#chatgpt-mermaid-\_r_l8\_ .node circle,#chatgpt-mermaid-\_r_l8\_ .node ellipse,#chatgpt-mermaid-\_r_l8\_ .node polygon,#chatgpt-mermaid-\_r_l8\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l8\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_l8\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_l8\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_l8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l8\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Mở Scene phòng ngủ 3DThêm Prefab căn phòngĐặt phòng tại gốc tọa độThêm giường ngủBổ sung thảm và nội thấtKiểm tra vị trí các vật thểLưu Scene hoàn chỉnh

Quy trình gồm ba giai đoạn chính: dựng cấu trúc căn phòng, bố trí nội thất và kiểm tra kết quả. Nên hoàn thành từng giai đoạn trước khi chuyển sang giai đoạn tiếp theo để dễ xác định lỗi.

### 5.1. Bước 1 — Mở Scene phòng ngủ

Trong cửa sổ `Project`, truy cập:

`Unity Essentials > Scenes`

Tìm Scene có tên:

`2_KidsRoom_3D_Scene`

Nhấp đúp vào Scene này để mở.

Kết quả mong đợi: Scene hiển thị một mặt nền trắng lớn và bầu trời xanh. Đây là không gian ban đầu trước khi bổ sung căn phòng.

Nếu góc nhìn khác hình minh họa của Unity Learn, không cần chỉnh Camera ngay. Có thể sử dụng các công cụ điều hướng trong Scene View để quan sát lại.

### 5.2. Bước 2 — Đưa Prefab căn phòng vào Scene

Mở đường dẫn:

`Unity Essentials > Prefabs > Rooms`

Tìm Prefab `01_Bedroom`.

Giữ chuột trái và kéo Prefab từ cửa sổ `Project` vào vị trí gần trung tâm mặt nền trong `Scene View`.

Sau khi thả chuột, căn phòng sẽ xuất hiện trong Scene và có một GameObject tương ứng ở Hierarchy.

Lưu ý: Không nhấp đúp vào Prefab nếu mục đích là đưa nó vào Scene. Nhấp đúp có thể mở `Prefab Mode`, tức chế độ chỉnh sửa Prefab riêng biệt.

Nếu vô tình mở Prefab Mode, sử dụng nút quay lại ở phía trên Hierarchy để trở về Scene chính.

### 5.3. Bước 3 — Đặt căn phòng tại gốc tọa độ

Chọn `01_Bedroom` trong Hierarchy.

Tại Inspector, tìm Component `Transform`, sau đó thiết lập:

Transform — 01_Bedroom

Position

X

0

Y

0

Z

0

Minh họa giá trị Position cần nhập trong Inspector.

Việc dùng tọa độ chính xác giúp căn phòng có vị trí tham chiếu thống nhất, thuận tiện cho quá trình sắp xếp đồ vật.

Lưu Scene bằng `Ctrl + S` trên Windows hoặc `Cmd + S` trên macOS.

### 5.4. Bước 4 — Thêm giường ngủ

Truy cập:

`Unity Essentials > Prefabs > Bedroom`

Thư mục này chứa các tài nguyên nội thất dành cho phòng ngủ.

Chọn lần lượt các Prefab giường bằng cách nhấp chuột một lần. Quan sát bản xem trước ở phía dưới Inspector để lựa chọn mẫu phù hợp.

Sau đó thực hiện:

1. Kéo Prefab giường đã chọn vào Scene.
2. Chọn chiếc giường vừa thêm.
3. Dùng Move Tool để đưa giường tới vị trí mong muốn.
4. Dùng Rotate Tool để xoay đầu giường về phía bức tường bên trái.
5. Thay đổi góc nhìn để xác nhận giường không xuyên qua tường hoặc sàn.

Một số phím tắt thường dùng:

| Phím                   | Công cụ        | Chức năng                          |
| ---------------------- | -------------- | ---------------------------------- |
| `W`                    | Move Tool      | Di chuyển đối tượng                |
| `E`                    | Rotate Tool    | Xoay đối tượng                     |
| `R`                    | Scale Tool     | Thay đổi tỷ lệ                     |
| `F`                    | Frame Selected | Tập trung góc nhìn vào đối tượng   |
| `Alt + kéo chuột trái` | Orbit          | Xoay góc nhìn quanh điểm tập trung |
| `Con lăn chuột`        | Zoom           | Phóng to hoặc thu nhỏ góc nhìn     |
| `Ctrl + Z`             | Undo           | Hoàn tác thao tác                  |

Trên macOS, dùng `Option` thay cho `Alt` khi Orbit và `Cmd + Z` để hoàn tác.

Điểm cần chú ý: Giường phải có mặt đáy đặt hợp lý trên mặt sàn. Không nên chỉ đánh giá vị trí từ một góc nhìn vì một đối tượng có thể trông đúng ở góc nhìn phía trước nhưng đang bị treo trên không hoặc nằm ngoài căn phòng.

### 5.5. Bước 5 — Bổ sung nội thất và trang trí

Sau khi đặt giường, tiếp tục lấy đồ vật từ thư mục `Prefabs > Bedroom`.

Có thể lựa chọn những món đồ như:

- Tủ đầu giường (Nightstand).
- Tủ ngăn kéo (Dresser).
- Rương hoặc hộp chứa đồ (Chest).
- Thảm trải sàn (Rug).
- Ngựa bập bênh (Rocking Horse).
- Rổ bóng rổ hoặc các đồ chơi phù hợp.

Gợi ý bố cục nội thất

Đây là một gợi ý bố cục, không phải tọa độ bắt buộc trong Unity. Mục tiêu là tạo một căn phòng có các khu vực sử dụng rõ ràng và không đặt các vật thể chồng lấn lên nhau.

Yêu cầu tối thiểu: Bổ sung một thảm trải sàn và ít nhất một món đồ nội thất khác ngoài giường.

Đặc biệt, cần chừa một góc phòng trống để có không gian xây dựng tháp khối trong phần thực hành tiếp theo.

### 5.6. Bước 6 — Kiểm tra và lưu Scene

Lần lượt lựa chọn các GameObject trong Hierarchy, nhấn `F` để tập trung góc nhìn và xoay Scene View để kiểm tra.

Cần xác nhận:

- Căn phòng xuất hiện đầy đủ.
- Giường được đặt sát bức tường phù hợp.
- Thảm nằm trên sàn, không lơ lửng.
- Các món nội thất không xuyên qua nhau.
- Vẫn còn một góc phòng trống.
- Scene đã được lưu bằng `Ctrl + S` hoặc `Cmd + S`.

Bài này chủ yếu là thực hành bố trí Scene trong Edit Mode, vì vậy không bắt buộc phải chạy Play Mode để hoàn thành việc sắp đặt nội thất.

## 6. Các lỗi thường gặp và cách khắc phục

| Hiện tượng                           | Nguyên nhân có thể                | Cách xử lý                                      |
| ------------------------------------ | --------------------------------- | ----------------------------------------------- |
| Không tìm thấy căn phòng trong Scene | Góc nhìn quá xa hoặc sai hướng    | Chọn `01_Bedroom` trong Hierarchy rồi nhấn `F`  |
| Mở màn hình chỉnh sửa Prefab         | Nhấp đúp vào Prefab Asset         | Quay lại Scene chính từ Hierarchy               |
| Giường xuyên qua tường               | Sai Position hoặc Rotation        | Dùng Move/Rotate, kiểm tra từ nhiều góc nhìn    |
| Đồ vật lơ lửng trên không            | Vị trí theo trục Y chưa phù hợp   | Quan sát từ cạnh và điều chỉnh chiều cao        |
| Đồ vật quay không đúng hướng         | Chọn sai đối tượng hoặc trục xoay | Kiểm tra Transform và xoay lại bằng Rotate Tool |
| Mất bố cục sau khi mở lại            | Scene chưa được lưu               | Lưu Scene sau mỗi giai đoạn hoàn thành          |

### Phương pháp kiểm tra lỗi

Khi một vật thể xuất hiện không đúng vị trí, hãy kiểm tra theo thứ tự:

1. Hierarchy: Đối tượng có đang tồn tại trong Scene không?
2. Inspector: Transform có giá trị bất thường không?
3. Scene View: Vị trí có đúng khi quan sát từ nhiều góc không?
4. Console: Có cảnh báo hoặc lỗi liên quan không?
5. Scene Save: Các thay đổi đã được lưu chưa?

Không nên điều chỉnh nhiều thuộc tính cùng lúc. Hãy sửa từng vấn đề và quan sát kết quả.

## 7. Bài tập thực hành mở rộng

### Bài tập 1 — Thay đổi bố cục phòng ngủ

Tạo một phương án sắp xếp nội thất khác với bố cục ban đầu.

Yêu cầu: Giữ nguyên căn phòng, di chuyển ít nhất ba món đồ và đảm bảo không xảy ra hiện tượng xuyên vật thể.

### Bài tập 2 — Thử nghiệm Transform

Chọn một đồ vật và thực hiện lần lượt ba thao tác:

- Di chuyển đối tượng theo một trục.
- Xoay đối tượng theo trục Y.
- Điều chỉnh Scale rồi hoàn tác.

Quan sát sự khác biệt giữa các thuộc tính và giải thích vì sao Transform không chỉ dùng để thay đổi vị trí.

### Bài tập 3 — Thiết kế một căn phòng hoàn chỉnh

Tạo bố cục phòng ngủ có giường, tủ, thảm và đồ chơi. Phân chia rõ khu vực ngủ nghỉ, cất giữ đồ và vui chơi.

Giữ lại một góc phòng trống để chuẩn bị cho tháp khối.

## 8. Kết quả cần nộp

Sau khi hoàn thành, người học cần có:

- Scene `2_KidsRoom_3D_Scene` đã được lưu với nội thất.
- Một ảnh chụp tổng thể căn phòng trong Scene View.
- Một ảnh chụp Inspector cho thấy Position của `01_Bedroom` bằng `(0, 0, 0)`.
- Một đoạn ghi chú ngắn mô tả cách khắc phục ít nhất một lỗi trong quá trình bố trí.

## 9. Checklist hoàn thành

Tiến độ thực hành

0/8

Mở đúng Scene 2_KidsRoom_3D_Scene

Thêm Prefab 01_Bedroom vào Scene

Đặt Position căn phòng bằng (0, 0, 0)

Thêm giường và bố trí sát tường bên trái

Thêm ít nhất một thảm và một món nội thất khác

Kiểm tra vị trí các đồ vật từ nhiều góc nhìn

Chừa một góc trống cho tháp khối

Lưu Scene và ghi nhận kết quả

## 10. Câu hỏi ôn tập trắc nghiệm

Câu 1. Khi cần sử dụng một mô hình giường có sẵn nhiều lần trong Unity, loại tài nguyên nào phù hợp nhất?

A. Prefab

B. Scene

C. Console

D. Camera

Kiểm tra đáp án

Câu 2. Sau khi thêm 01_Bedroom, thao tác nào giúp đưa điểm gốc Transform của căn phòng về tọa độ (0, 0, 0)?

A. Nhấn Play

B. Đặt Position X, Y, Z bằng 0

C. Xóa Transform

D. Đổi tên GameObject

Kiểm tra đáp án

Câu 3. Một chiếc giường trông đúng khi nhìn từ phía trước nhưng lại xuyên qua tường. Cách kiểm tra phù hợp là gì?

A. Xóa cả Scene

B. Thay đổi Material

C. Orbit quanh giường và điều chỉnh Transform

D. Chỉ kiểm tra Game View

Kiểm tra đáp án

Câu 4. Vì sao cần chừa một góc phòng trống trong bài thực hành này?

A. Để tăng FPS

B. Để Camera tự động xoay

C. Vì Unity không cho đặt quá nhiều Prefab

D. Để chuẩn bị khu vực dựng tháp khối

Kiểm tra đáp án

Câu 5. Điều gì xảy ra khi nhấp đúp vào Prefab trong cửa sổ Project thay vì kéo nó vào Scene?

A. Có thể mở Prefab Mode

B. Tự động tạo bản sao trong Scene

C. Tự động chạy Play Mode

D. Prefab bị xóa khỏi Project

Kiểm tra đáp án

Kết quả ôn tập

# 0/5

Chọn câu trả lời rồi kiểm tra từng câu để xem giải thích.

&#x20;Làm lại

## 11. Tổng kết

Bài thực hành đã giới thiệu quy trình cơ bản để xây dựng một không gian nội thất 3D trong Unity mà không cần tự tạo mô hình từ đầu.

Ba kỹ năng quan trọng nhất là đưa Prefab vào Scene, chỉnh sửa Transform và quan sát không gian 3D từ nhiều góc nhìn.

Kết quả là một căn phòng đã được bố trí nội thất, sẵn sàng để tiếp tục bổ sung các đối tượng động trong Unity.

Bài tiếp theo: Make a Bouncy Ball — Tạo quả bóng có khả năng nảy bằng hệ thống vật lý Unity.

Pathway: Unity Essentials · Mission: 3D Essentials · Unity 6.3  Tham khảo: [Unity Learn — Add Furniture to the Kid’s Room](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials/tutorial/add-furniture-to-the-kids-room?version=6.3\&utm_source=chatgpt.com). Bài học tiếng Việt được biên soạn độc lập, không phải bản dịch chính thức của Unity.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn
