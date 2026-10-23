# Bài 02 — Open the Unity Essentials Project

Unity Essentials · Module 1: Editor Essentials · Tutorial · Unity 6.3

> Chủ đề: Khởi tạo và mở dự án Unity Essentials, lựa chọn hình thức học tập và làm quen với môi trường Unity Editor.
>
> Thời lượng tham khảo: 10 phút cho tutorial chính thức, chưa tính phần thực hành mở rộng.
>
> Yêu cầu đầu vào: Đã cài đặt Unity Hub, có Unity ID và Unity Editor 6.0 trở lên. Bài thực hành này sử dụng Unity 6.3.

## 1. Tổng quan bài học

Sau khi cài Unity, công việc đầu tiên là tạo và mở một dự án (Project). Project đóng vai trò là không gian làm việc, lưu trữ tất cả những thành phần cần thiết để xây dựng trò chơi hoặc ứng dụng.

Trong bài này, chúng ta sẽ tạo dự án từ template Essentials Pathway. Đây là template được chuẩn bị cho lộ trình Unity Essentials, chứa những tài nguyên phục vụ các hoạt động học tập.

Khác với việc tạo một project 3D trống, sử dụng Essentials Pathway giúp người học có môi trường thực hành phù hợp với chuỗi bài học Unity Essentials.

Sau khi khởi chạy dự án, có thể lựa chọn một trong hai hình thức: học theo hướng dẫn trên trang Unity Learn hoặc thực hiện tutorial ngay trong Unity Editor.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### Kết quả cần đạt

Sau bài học, người học có thể:

- Giải thích được Project và Project Template trong Unity.
- Tạo dự án mới bằng template Essentials Pathway.
- Lựa chọn đúng Unity Editor khi tạo dự án.
- Xác định vị trí lưu trữ và mở lại project.
- Phân biệt học trên Unity Learn với học trực tiếp trong Editor.
- Chuyển đổi giữa Tutorials Layout và Default Layout.
- Kiểm tra các cửa sổ làm việc cơ bản.
- Phát hiện và xử lý những lỗi thông thường khi mở project.

## 2. Project trong Unity là gì?

### 2.1. Khái niệm Project

Unity Project là một tập hợp thư mục, tệp cấu hình và tài nguyên dùng để phát triển một trò chơi hoặc ứng dụng.

Một project có thể chứa nhiều Scene, mô hình 3D, âm thanh, hình ảnh, script C#, vật liệu (Materials) và các package hỗ trợ.

Ví dụ, một trò chơi phiêu lưu 3D có thể bao gồm:

- Scene màn hình chính.
- Scene lựa chọn nhân vật.
- Scene màn chơi trong rừng.
- Các nhân vật và animation.
- Script điều khiển di chuyển.
- Âm thanh và hiệu ứng.
- Những thiết lập để xuất bản trò chơi.

Tất cả được tổ chức trong cùng một Unity Project.

### 2.2. Phân biệt Project, Scene và GameObject

| Khái niệm  | Giải thích                                                | Ví dụ                          |
| ---------- | --------------------------------------------------------- | ------------------------------ |
| Project    | Toàn bộ không gian làm việc                               | `MyAdventureGame`              |
| Scene      | Một không gian hoặc màn hình trong trò chơi               | `ForestScene`                  |
| GameObject | Một đối tượng trong Scene                                 | Nhân vật, Camera, Cube         |
| Component  | Thành phần cung cấp dữ liệu hoặc chức năng cho GameObject | `Transform`, `Camera`, `Light` |
| Asset      | Tài nguyên dùng trong project                             | Model, texture, âm thanh       |
| Package    | Gói bổ sung công cụ và chức năng                          | Input System, URP              |

Mối quan hệ cơ bản:

\#chatgpt-mermaid-\_r_10v\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_10v\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_10v\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_10v\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_10v\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_10v\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_10v\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_10v\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_10v\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_10v\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10v\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10v\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_10v\_ p{margin:0;}#chatgpt-mermaid-\_r_10v\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_10v\_ .label text,#chatgpt-mermaid-\_r_10v\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ .node rect,#chatgpt-mermaid-\_r_10v\_ .node circle,#chatgpt-mermaid-\_r_10v\_ .node ellipse,#chatgpt-mermaid-\_r_10v\_ .node polygon,#chatgpt-mermaid-\_r_10v\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .rough-node .label text,#chatgpt-mermaid-\_r_10v\_ .node .label text,#chatgpt-mermaid-\_r_10v\_ .image-shape .label,#chatgpt-mermaid-\_r_10v\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_10v\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .rough-node .label,#chatgpt-mermaid-\_r_10v\_ .node .label,#chatgpt-mermaid-\_r_10v\_ .image-shape .label,#chatgpt-mermaid-\_r_10v\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_10v\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_10v\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10v\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10v\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_10v\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_10v\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_10v\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_10v\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_10v\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_10v\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10v\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_10v\_ .icon-shape,#chatgpt-mermaid-\_r_10v\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_10v\_ .icon-shape p,#chatgpt-mermaid-\_r_10v\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_10v\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_10v\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_10v\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_10v\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_10v\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_10v\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_10v\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_10v\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_10v\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10v\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_10v\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10v\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_10v\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_10v\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_10v\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_10v\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .node rect,#chatgpt-mermaid-\_r_10v\_ .node circle,#chatgpt-mermaid-\_r_10v\_ .node ellipse,#chatgpt-mermaid-\_r_10v\_ .node polygon,#chatgpt-mermaid-\_r_10v\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_10v\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_10v\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_10v\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_10v\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10v\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Unity ProjectScenesAssetsPackagesProject SettingsGameObjectsComponentsTransform / Camera / Light /Script

Một project có thể có nhiều Scene. Trong mỗi Scene, các GameObject có thể chứa những Component khác nhau để tạo nên chức năng của đối tượng.

### 2.3. Project Template là gì?

Project Template là khuôn mẫu dùng để tạo một project với những tài nguyên, package và thiết lập ban đầu đã được chuẩn bị.

Unity Hub tổ chức các template theo các nhóm như Core, Sample và Learning. Danh sách template cụ thể phụ thuộc phiên bản Unity Editor và những template có sẵn.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



| Template           | Trường hợp sử dụng                 |
| ------------------ | ---------------------------------- |
| Universal 2D       | Bắt đầu dự án 2D                   |
| Universal 3D       | Bắt đầu dự án 3D sử dụng URP       |
| Essentials Pathway | Học theo lộ trình Unity Essentials |
| Sample Templates   | Khám phá các dự án mẫu khi có sẵn  |

Không nên thay thế Essentials Pathway bằng một template 3D thông thường khi mục tiêu là thực hiện đúng các hoạt động của Unity Essentials, vì nội dung và tài nguyên ban đầu có thể khác nhau.

## 3. Chuẩn bị trước khi mở dự án

### 3.1. Điều kiện cần thiết

Đảm bảo môi trường có:

| Thành phần   | Yêu cầu                                                 |
| ------------ | ------------------------------------------------------- |
| Unity Hub    | Đã cài và khởi động được                                |
| Unity ID     | Đã đăng nhập                                            |
| License      | Đang hoạt động, hợp lệ                                  |
| Unity Editor | Unity 6.0 trở lên; ưu tiên 6.3                          |
| Internet     | Có kết nối để tải template/package khi cần              |
| Ổ đĩa        | Đủ dung lượng để lưu project và dữ liệu nhập tài nguyên |

### 3.2. Chọn vị trí lưu Project

Nên tạo một thư mục riêng cho các dự án Unity, chẳng hạn:

```
D:/
└── UnityProjects/
    ├── UnityEssentials/
    ├── ObstacleDodge/
    └── PracticeProjects/
```

Đây là cách tổ chức gợi ý; không phải đường dẫn bắt buộc.

Tên project nên ngắn gọn, dễ nhận biết và hạn chế ký tự đặc biệt. Không nên lưu project bên trong thư mục cài đặt Unity Editor.

Cần nhớ rằng một project Unity không chỉ là một tệp duy nhất. Khi sao chép hoặc di chuyển project, phải giữ đúng cấu trúc thư mục cần thiết.

## 4. Tạo và mở dự án Unity Essentials

Phần thực hành chính

### Bước 1 — Khởi động Unity Hub

Mở ứng dụng Unity Hub từ desktop, Start Menu hoặc danh sách ứng dụng trên máy tính.

Sau khi Hub khởi động:

1. Kiểm tra trạng thái đăng nhập.
2. Mở mục `Projects`.
3. Xác nhận Unity Hub không hiển thị lỗi license.
4. Chuẩn bị tạo dự án mới.

Kết quả mong đợi: Màn hình Projects xuất hiện và có thể sử dụng chức năng tạo project.

### Bước 2 — Chọn New Project

Trong Unity Hub, nhấn `New project`.

Cửa sổ tạo project xuất hiện với các thành phần chính:

| Thành phần     | Chức năng                   |
| -------------- | --------------------------- |
| Editor Version | Chọn phiên bản Unity Editor |
| Templates      | Chọn khuôn mẫu dự án        |
| Project Name   | Đặt tên                     |
| Location       | Chọn nơi lưu trữ            |
| Create Project | Tạo và khởi động dự án      |

### Bước 3 — Chọn Unity Editor 6.3

Trong mục Editor Version, chọn bản Unity 6.3 đã cài.

Unity Essentials hỗ trợ bắt đầu bằng Unity 6.0 trở lên theo hướng dẫn bài học. Vì khóa học đang học theo mục lục Unity 6.3, nên chọn bản 6.3 để giữ môi trường nhất quán.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



Nếu không thấy phiên bản đã cài, quay về `Installs` để kiểm tra trước khi tiếp tục.

### Bước 4 — Chọn template Essentials Pathway

Tìm template có tên:

Essentials Pathway

Template có thể nằm trong nhóm Learning hoặc nhóm template được Unity Hub cung cấp cho mục đích học tập.

Nếu có biểu tượng tải xuống, thực hiện tải template trước khi tạo project.

Lưu ý rằng không phải template nào cũng xuất hiện trong mọi bản Unity Editor. Nếu không thấy Essentials Pathway, cần kiểm tra bộ lọc template, phiên bản Editor và khả năng tải template, thay vì tạo project khác rồi coi là tương đương.

### Bước 5 — Đặt tên và chọn thư mục lưu

Nhập tên project, ví dụ:

`UnityEssentials`

Chọn Location là thư mục đã chuẩn bị, chẳng hạn `D:/UnityProjects/`.

Thông thường, Unity Hub sử dụng tên project để tạo thư mục riêng bên trong vị trí đã chọn.

### Bước 6 — Tạo project

Nhấn `Create project` và chờ Unity Hub hoàn tất.

Quá trình này có thể bao gồm tạo cấu trúc dự án, chuẩn bị tài nguyên, giải quyết package và nhập dữ liệu vào Asset Database.

Lần mở đầu tiên có thể mất nhiều thời gian hơn những lần sau, đặc biệt đối với template chứa nhiều tài nguyên.

Không nên tắt Unity Hub hoặc Unity Editor khi quá trình chuẩn bị project vẫn đang hoạt động.

### Bước 7 — Xác nhận khởi động thành công

Khi thành công, Unity Editor mở ra cùng dự án vừa tạo.

Với Essentials Pathway, giao diện có thể xuất hiện hộp thoại chào mừng và khu vực tutorial hướng dẫn người học bắt đầu Mission 1. Đây là hành vi được mô tả trong bài học Unity Essentials chính thức.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



Checkpoint 1 — Project sẵn sàng

- Có project trong danh sách Projects của Unity Hub.
- Unity Editor mở bằng phiên bản đã chọn.
- Project không bị kẹt trong quá trình nhập tài nguyên.
- Có thể tương tác với giao diện Editor.
- Hộp thoại chào mừng hoặc cửa sổ Tutorials xuất hiện khi template hỗ trợ.

## 5. Chọn hình thức học Unity Essentials

Unity Essentials cung cấp hai phương thức học tập chính. Đây là lựa chọn về nơi hiển thị nội dung hướng dẫn, không phải lựa chọn giữa hai phiên bản project khác nhau.

### 5.1. Học trên Unity Learn

Ở hình thức này, nội dung bài học được đọc trên trình duyệt, còn thao tác thực hành được thực hiện trong Unity Editor.

Quy trình:

\#chatgpt-mermaid-\_r_123\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_123\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_123\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_123\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_123\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_123\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_123\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_123\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_123\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_123\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_123\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_123\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_123\_ p{margin:0;}#chatgpt-mermaid-\_r_123\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_123\_ .label text,#chatgpt-mermaid-\_r_123\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ .node rect,#chatgpt-mermaid-\_r_123\_ .node circle,#chatgpt-mermaid-\_r_123\_ .node ellipse,#chatgpt-mermaid-\_r_123\_ .node polygon,#chatgpt-mermaid-\_r_123\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .rough-node .label text,#chatgpt-mermaid-\_r_123\_ .node .label text,#chatgpt-mermaid-\_r_123\_ .image-shape .label,#chatgpt-mermaid-\_r_123\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_123\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .rough-node .label,#chatgpt-mermaid-\_r_123\_ .node .label,#chatgpt-mermaid-\_r_123\_ .image-shape .label,#chatgpt-mermaid-\_r_123\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_123\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_123\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_123\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_123\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_123\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_123\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_123\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_123\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_123\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_123\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_123\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_123\_ .icon-shape,#chatgpt-mermaid-\_r_123\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_123\_ .icon-shape p,#chatgpt-mermaid-\_r_123\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_123\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_123\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_123\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_123\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_123\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_123\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_123\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_123\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_123\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_123\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_123\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_123\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_123\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_123\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_123\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_123\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_123\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .node rect,#chatgpt-mermaid-\_r_123\_ .node circle,#chatgpt-mermaid-\_r_123\_ .node ellipse,#chatgpt-mermaid-\_r_123\_ .node polygon,#chatgpt-mermaid-\_r_123\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_123\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_123\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_123\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_123\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_123\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Đọc Unity LearnThực hiện trong EditorQuan sát kết quảQuay lại Unity LearnHoàn thành bước

Ưu điểm: Dễ đọc bài học dài, xem tài liệu trên màn hình thứ hai và tham khảo nhiều nguồn.

Hạn chế: Phải chuyển đổi giữa trình duyệt và Editor nếu chỉ có một màn hình.

Để sử dụng hình thức này:

1. Mở Unity Editor và hộp thoại chào mừng.
2. Tìm `Layout` ở góc trên bên phải Editor.
3. Chuyển từ `Tutorials` Layout sang `Default` Layout.
4. Trở lại trang Unity Learn và tiếp tục bài học trên trình duyệt.

Nếu cần hiển thị lại tutorial trong Editor, có thể mở `Tutorials > Show Tutorials`, khi chức năng đó có sẵn trong project.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### 5.2. Học trực tiếp trong Unity Editor

Ở hình thức này, tutorial được hiển thị ngay bên trong Editor, cùng các thành phần giao diện đang được hướng dẫn.

Quy trình:

\#chatgpt-mermaid-\_r_12j\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_12j\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_12j\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_12j\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_12j\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_12j\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_12j\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_12j\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_12j\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_12j\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12j\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12j\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_12j\_ p{margin:0;}#chatgpt-mermaid-\_r_12j\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_12j\_ .label text,#chatgpt-mermaid-\_r_12j\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ .node rect,#chatgpt-mermaid-\_r_12j\_ .node circle,#chatgpt-mermaid-\_r_12j\_ .node ellipse,#chatgpt-mermaid-\_r_12j\_ .node polygon,#chatgpt-mermaid-\_r_12j\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .rough-node .label text,#chatgpt-mermaid-\_r_12j\_ .node .label text,#chatgpt-mermaid-\_r_12j\_ .image-shape .label,#chatgpt-mermaid-\_r_12j\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_12j\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .rough-node .label,#chatgpt-mermaid-\_r_12j\_ .node .label,#chatgpt-mermaid-\_r_12j\_ .image-shape .label,#chatgpt-mermaid-\_r_12j\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_12j\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_12j\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12j\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12j\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_12j\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_12j\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_12j\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_12j\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_12j\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_12j\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12j\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_12j\_ .icon-shape,#chatgpt-mermaid-\_r_12j\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_12j\_ .icon-shape p,#chatgpt-mermaid-\_r_12j\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_12j\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_12j\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_12j\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_12j\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_12j\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_12j\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_12j\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_12j\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_12j\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12j\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_12j\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12j\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_12j\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_12j\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_12j\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_12j\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .node rect,#chatgpt-mermaid-\_r_12j\_ .node circle,#chatgpt-mermaid-\_r_12j\_ .node ellipse,#chatgpt-mermaid-\_r_12j\_ .node polygon,#chatgpt-mermaid-\_r_12j\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_12j\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_12j\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_12j\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_12j\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12j\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Tutorials WindowĐọc nhiệm vụThao tác trong EditorKiểm tra kết quảTiếp tục bước kế tiếp

Với template Essentials Pathway, người học có thể chọn `Start Mission 1` từ hộp thoại chào mừng để bắt đầu các hướng dẫn trong Editor.

Các tutorial có thể sử dụng hướng dẫn được tích hợp vào giao diện, trong đó có những vùng được làm nổi bật để hỗ trợ nhận biết công cụ cần thao tác.

### 5.3. So sánh hai hình thức

| Tiêu chí            | Unity Learn                       | In-Editor Tutorial            |
| ------------------- | --------------------------------- | ----------------------------- |
| Vị trí hướng dẫn    | Trình duyệt web                   | Unity Editor                  |
| Không gian thao tác | Editor riêng                      | Chung với hướng dẫn           |
| Phù hợp             | Học bằng tài liệu, nhiều màn hình | Học tương tác, một màn hình   |
| Điểm mạnh           | Dễ tra cứu và ghi chú             | Hướng dẫn gần vị trí thao tác |
| Khả năng chuyển đổi | Có                                | Có                            |

Đối với người mới, In-Editor Tutorial giúp dễ xác định công cụ đang được nhắc tới. Với người muốn ghi chú Markdown và nghiên cứu tài liệu mở rộng, Unity Learn trên trình duyệt thường thuận tiện hơn.

Cả hai đều là hình thức học hợp lệ được Unity cung cấp.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



## 6. Làm quen với giao diện Unity Editor

Sau khi mở Essentials Pathway, cần nhận biết các vùng làm việc chính trước khi bắt đầu thay đổi nội dung dự án.

Phần này giới thiệu sơ bộ các công cụ. Các thao tác điều hướng 3D và chỉnh sửa GameObject sẽ được thực hành chuyên sâu trong những bài tiếp theo.

### 6.1. Các cửa sổ cơ bản

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

[learn.unity.com](https://learn.unity.com/tutorial/get-started-with-unity-in-editor-tutorial?utm_source=chatgpt.com)

| Cửa sổ    | Chức năng                                                          |
| --------- | ------------------------------------------------------------------ |
| Hierarchy | Hiển thị những GameObject trong Scene đang mở                      |
| Scene     | Quan sát, lựa chọn và chỉnh sửa đối tượng trong không gian         |
| Game      | Hiển thị góc nhìn được render từ Camera                            |
| Inspector | Xem và chỉnh sửa Component hoặc thuộc tính của đối tượng đang chọn |
| Project   | Quản lý Assets và nội dung dự án                                   |
| Console   | Hiển thị thông báo, cảnh báo và lỗi                                |

Ví dụ, khi lựa chọn một GameObject trong Hierarchy, Inspector sẽ hiển thị các Component tương ứng. Nếu đối tượng có Transform, người học có thể quan sát các thuộc tính Position, Rotation và Scale.

### 6.2. Scene View và Game View khác nhau như thế nào?

Scene View là nơi người phát triển quan sát và chỉnh sửa môi trường. Có thể di chuyển góc nhìn độc lập với Camera của trò chơi.

Game View hiển thị hình ảnh được render từ Camera dành cho trò chơi. Đây là nơi kiểm tra những gì người chơi có thể nhìn thấy.

| Tiêu chí                   | Scene View                     | Game View                           |
| -------------------------- | ------------------------------ | ----------------------------------- |
| Mục đích                   | Thiết kế không gian            | Kiểm tra hình ảnh trò chơi          |
| Góc nhìn                   | Camera biên tập                | Camera của ứng dụng                 |
| Chọn, chỉnh sửa GameObject | Có                             | Không phải chức năng biên tập chính |
| Dùng Play Mode             | Có thể tiếp tục quan sát scene | Hiển thị kết quả chạy thử           |

Điều này giải thích vì sao một đối tượng có thể xuất hiện trong Scene View nhưng không nhìn thấy trong Game View: đối tượng có thể nằm ngoài vùng quan sát của Camera, bị che khuất hoặc không được render theo cấu hình hiện tại.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



### 6.3. Các công cụ điều chỉnh đối tượng

Khi một GameObject được chọn, những công cụ Transform phổ biến bao gồm:

| Phím tắt mặc định | Công cụ        | Công dụng                                      |
| ----------------- | -------------- | ---------------------------------------------- |
| `Q`               | View Tool      | Điều khiển góc nhìn                            |
| `W`               | Move Tool      | Di chuyển đối tượng                            |
| `E`               | Rotate Tool    | Xoay đối tượng                                 |
| `R`               | Scale Tool     | Thay đổi tỉ lệ                                 |
| `T`               | Rect Tool      | Điều chỉnh đối tượng bằng khung hình chữ nhật  |
| `F`               | Frame Selected | Đưa đối tượng đã chọn vào trung tâm Scene View |

Phím `F` đặc biệt hữu ích khi không thể tìm thấy một đối tượng trong không gian 3D.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



Khi thao tác Transform, cần phân biệt hai hệ định hướng:

- Global: Dựa trên các trục tọa độ của thế giới.
- Local: Dựa trên hướng trục của chính đối tượng.

Ví dụ, sau khi xoay một Cube 90 độ quanh trục Y, hướng trục Local của nó sẽ khác hướng trục Global. Vì vậy, di chuyển theo một trục Local có thể tạo ra hướng di chuyển khác với Global.

### 6.4. Play Mode

Play Mode cho phép chạy thử project ngay trong Editor.

Trên Toolbar có ba nút chính:

- `Play`: Bắt đầu hoặc kết thúc Play Mode.
- `Pause`: Tạm dừng việc chạy thử.
- `Step`: Tiến thêm một frame khi đang tạm dừng.

Thông thường, thay đổi trạng thái của đối tượng trong Play Mode chỉ mang tính tạm thời và sẽ được khôi phục khi thoát. Đây là lý do không nên sử dụng Play Mode để chỉnh sửa Scene với kỳ vọng mọi thay đổi đều được lưu.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



## 7. Tìm hiểu cấu trúc thư mục của Unity Project

Sau khi tạo project, Unity hình thành cấu trúc thư mục phục vụ việc lưu trữ và quản lý dữ liệu.

Một cấu trúc điển hình có dạng:

```
UnityEssentials/
├── Assets/
│   └── ...
├── Packages/
│   ├── manifest.json
│   └── packages-lock.json
├── ProjectSettings/
│   └── ...
├── Library/
│   └── ...
├── Temp/
│   └── ...
└── UserSettings/
    └── ...
```

Những thư mục được tạo thực tế có thể khác tùy phiên bản Editor, template và trạng thái project.

| Thư mục           | Vai trò                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `Assets`          | Chứa Scene, model, texture, material, script và những tài nguyên dự án |
| `Packages`        | Chứa khai báo và trạng thái phụ thuộc của package                      |
| `ProjectSettings` | Chứa thiết lập chung của project                                       |
| `Library`         | Lưu dữ liệu đã được Unity nhập và xử lý                                |
| `Temp`            | Chứa dữ liệu tạm trong quá trình làm việc                              |
| `UserSettings`    | Chứa một số thiết lập mang tính cá nhân cho Editor                     |

Lưu ý quan trọng: Không tự ý xóa hoặc sửa nội dung trong `Library` khi Unity đang mở project. Đây là dữ liệu do Editor quản lý, và việc xóa có thể khiến Unity phải nhập lại toàn bộ tài nguyên hoặc gây sự cố nếu thực hiện không đúng lúc.

Khi sao lưu hoặc chuyển project sang máy khác, cần giữ các thư mục nguồn như `Assets`, `Packages`, `ProjectSettings` cùng các tệp `.meta` cần thiết. Không nên chỉ sao chép riêng một Scene rồi cho rằng đã sao lưu toàn bộ dự án.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Unity 手册



### Mở lại một project đã có

Nếu project đã tồn tại trên máy nhưng không xuất hiện trong Unity Hub:

1. Mở `Projects`.
2. Chọn `Add > Add project from disk`.
3. Chọn thư mục gốc của Unity Project.
4. Xác nhận để đưa project vào danh sách.
5. Chọn project để mở bằng Unity Editor phù hợp.

Chức năng này khác với `New project`: nó đăng ký một project đã tồn tại, không tạo một project trống mới.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



## 8. Thực hành củng cố

### Bài tập A — Khởi tạo đúng Essentials Pathway

Mục tiêu: Tạo project từ template học tập chính thức.

Thực hiện:

1. Mở Unity Hub.
2. Chọn New Project.
3. Chọn Unity 6.3.
4. Tìm Essentials Pathway.
5. Đặt tên `UnityEssentials_Practice`.
6. Chọn thư mục lưu.
7. Tạo và mở project.
8. Xác nhận giao diện Unity Editor xuất hiện.

Sản phẩm cần có: Ảnh chụp Unity Hub hiển thị project và ảnh chụp Unity Editor sau khi mở.

### Bài tập B — Chuyển đổi hình thức học

Mục tiêu: Sử dụng được cả hai phương thức học Unity Essentials.

Thực hiện lần lượt:

1. Hiển thị cửa sổ Tutorials.
2. Quan sát các chỉ dẫn học tập.
3. Chuyển Layout sang Default.
4. Trở lại trang Unity Learn trên trình duyệt.
5. Mở lại cửa sổ Tutorials từ menu của Editor.
6. Xác định hình thức học thuận tiện hơn với thiết bị đang dùng.

Ghi lại sự khác biệt giữa hai hình thức và giải thích lựa chọn của mình.

### Bài tập C — Khảo sát Editor

Mục tiêu: Nhận diện và sử dụng các khu vực làm việc cơ bản.

Trên một Scene phù hợp, thực hiện:

1. Tìm một GameObject trong Hierarchy.
2. Chọn GameObject và xem Transform trong Inspector.
3. Đưa góc nhìn về đối tượng bằng `F`.
4. Chuyển đổi giữa Scene View và Game View.
5. Quan sát các giá trị Transform trước khi chỉnh sửa.
6. Thử Move, Rotate, Scale trên một đối tượng thực hành riêng.
7. Lưu Scene.
8. Vào Play Mode, thay đổi vị trí đối tượng rồi thoát Play Mode.
9. Quan sát những giá trị nào trở lại như trước khi chạy thử.

Để tránh làm ảnh hưởng Scene mẫu, nên thực hiện bài tập trên một bản sao Scene hoặc trên Scene mới.

### Bài tập D — Mở lại dự án

Đóng Unity Editor, sau đó mở lại cùng project từ Unity Hub.

Kiểm tra tên project, phiên bản Editor, Scene đã lưu, các tài nguyên và tình trạng Console.

Kết quả đạt yêu cầu: Project mở lại bình thường mà không cần tạo mới hoặc nhập lại thủ công những tài nguyên do người học đã lưu.

## 9. Lỗi thường gặp và cách kiểm tra

### 9.1. Không tìm thấy template Essentials Pathway

Nguyên nhân có thể: Chọn phiên bản Editor không phù hợp, bộ lọc template chưa đúng hoặc Unity Hub chưa tải được danh sách template.

Hướng xử lý:

1. Kiểm tra Editor Version.
2. Tìm template trong nhóm Learning.
3. Kiểm tra kết nối mạng.
4. Kiểm tra cập nhật Unity Hub.
5. Đối chiếu với bài học chính thức trước khi thay thế template.

Không tự giả định mọi template 3D đều chứa cùng tài nguyên như Essentials Pathway.

### 9.2. Unity Editor mở nhưng không thấy Tutorials

Nguyên nhân có thể: Đã chuyển sang Default Layout, đóng cửa sổ Tutorials hoặc chức năng tutorial của template chưa được khởi tạo đúng.

Hướng xử lý: Thử menu `Tutorials > Show Tutorials` và kiểm tra Layout hiện hành. Nếu chức năng vẫn không xuất hiện, xác nhận project được tạo từ đúng template.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### 9.3. Project mở rất lâu

Ở lần khởi chạy đầu tiên, Unity có thể phải nhập nhiều Assets và chuẩn bị các Packages.

Trước khi coi đây là lỗi, kiểm tra quá trình xử lý trong Unity Hub hoặc Editor. Nếu xuất hiện thông báo lỗi cụ thể, cần đọc thông báo đó thay vì tắt ứng dụng ngay lập tức.

### 9.4. Project yêu cầu phiên bản Editor khác

Khi mở project được tạo bằng phiên bản chưa cài, Unity Hub có thể yêu cầu lựa chọn hoặc cài thêm Editor tương ứng.

Nên ưu tiên cài đúng phiên bản project yêu cầu. Nếu đổi sang bản khác, sao lưu project trước, bởi Unity có thể cần cập nhật script và xây dựng lại Library.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 9.5. Đối tượng màu hồng hoặc đỏ trên Linux

Trong một số cấu hình Linux, Scene có thể xuất hiện những vùng màu đỏ hoặc hồng do vấn đề Graphics API.

Hướng dẫn của Unity Essentials đề xuất thử chuyển từ OpenGL sang Vulkan trong:

`Edit > Project Settings > Player > Other Settings`

Sau đó kiểm tra thiết lập Auto Graphics API cho Linux và khởi động lại Editor theo hướng dẫn.

Đây là cách xử lý cho tình huống đồ họa cụ thể, không phải thiết lập bắt buộc đối với tất cả máy Linux. Cần bảo đảm GPU và driver hỗ trợ Vulkan trước khi áp dụng.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### 9.6. Mất thay đổi sau khi thoát Play Mode

Nếu thay đổi Position, Rotation hoặc Scale của đối tượng trong Play Mode rồi dừng chạy, giá trị thường trở lại trạng thái trước khi bắt đầu.

Cách xử lý là thoát Play Mode trước, sau đó thực hiện chỉnh sửa cần lưu trong Edit Mode và lưu Scene.

### 9.7. Không thấy đối tượng trong Game View

Cần kiểm tra:

- GameObject có đang hoạt động không?
- Camera có nhìn về phía đối tượng không?
- Đối tượng có nằm ngoài vùng nhìn của Camera không?
- Có đối tượng khác che khuất không?
- Renderer và thiết lập Layer có phù hợp không?

Không nên kết luận GameObject bị xóa chỉ vì không nhìn thấy nó trong Game View.

## 10. Checklist hoàn thành

- Xác định được Project và Project Template.
- Phân biệt được tạo project mới và mở project đã có.
- Mở Unity Hub và lựa chọn Unity 6.3.
- Tìm được template Essentials Pathway.
- Tạo được project có tên và vị trí lưu rõ ràng.
- Khởi động project trong Unity Editor.
- Xác định được khu vực Tutorials.
- Chuyển đổi được giữa Tutorials và Default Layout.
- Nhận biết Hierarchy, Scene, Game, Inspector và Project.
- Phân biệt Scene View và Game View.
- Xác định được các thư mục quan trọng của project.
- Lưu và mở lại project thành công.
- Hoàn thành ít nhất một bài thực hành và ghi kết quả.
- Giải thích được một lỗi thường gặp khi mở project.

## 11. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Một người học muốn thực hiện đúng các hoạt động của Unity Essentials và sử dụng những tài nguyên đã chuẩn bị. Nên chọn cách nào?

A. Tạo một project 3D bất kỳ.

B. Tạo project từ template Essentials Pathway.

C. Chỉ mở Scene View mà không tạo project.

D. Tải ngẫu nhiên các Assets từ Asset Store.

Đáp án: B

Giải thích: Essentials Pathway là template dành cho lộ trình học Unity Essentials. Một project 3D thông thường không bảo đảm có cùng nội dung và tài nguyên.

### Câu 2

Khi muốn học bằng chỉ dẫn trực tiếp ngay trong Unity Editor, phương án nào phù hợp?

A. Xóa Default Layout khỏi Unity.

B. Luôn phải mở Unity Learn trong trình duyệt.

C. Chỉ mở Package Manager.

D. Sử dụng cửa sổ Tutorials và bắt đầu Mission từ giao diện tutorial.

Đáp án: D

Giải thích: In-Editor Tutorial đưa hướng dẫn vào môi trường Unity Editor, giúp người học thực hành mà không cần liên tục chuyển sang trình duyệt.

### Câu 3

Một project đã tồn tại trên ổ đĩa nhưng chưa xuất hiện trong Unity Hub. Cách xử lý nào phù hợp nhất?

A. Dùng Add project from disk và chọn thư mục gốc của project.

B. Tạo project trống với tên giống project cũ.

C. Xóa thư mục ProjectSettings.

D. Chỉ mở một tệp `.unity` bất kỳ.

Đáp án: A

Giải thích: Unity Hub quản lý project thông qua thư mục project. Chức năng Add project from disk cho phép đưa project hiện có vào danh sách mà không cần tạo lại.

### Câu 4

Vì sao người học không nên chỉnh sửa Scene trong Play Mode rồi mặc định rằng các thay đổi sẽ được lưu?

A. Vì Play Mode không cho phép chọn GameObject.

B. Vì mọi Component đều bị vô hiệu hóa.

C. Vì thay đổi trạng thái khi Play Mode thông thường là tạm thời và sẽ được khôi phục khi thoát.

D. Vì Unity tự động xóa project sau khi chạy thử.

Đáp án: C

Giải thích: Unity thường khôi phục trạng thái Scene sau khi thoát Play Mode, nên những chỉnh sửa cần lưu phải được thực hiện đúng cách trong Edit Mode.

### Câu 5

Một GameObject xuất hiện trong Hierarchy và Scene View, nhưng không thấy ở Game View. Nguyên nhân nào có khả năng nhất cần được kiểm tra đầu tiên?

A. Unity Hub chưa cài thêm Android Build Support.

B. Đối tượng nằm ngoài góc nhìn Camera hoặc không được render.

C. Project chưa được đặt tên tiếng Anh.

D. Thư mục Assets chứa quá nhiều tệp.

Đáp án: B

Giải thích: Scene View sử dụng góc nhìn biên tập, còn Game View hiển thị từ Camera của trò chơi. Một đối tượng có thể tồn tại nhưng nằm ngoài vùng nhìn hoặc không được render.

## 12. Tổng kết bài học

\#chatgpt-mermaid-\_r_167\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_167\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_167\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_167\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_167\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_167\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_167\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_167\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_167\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_167\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_167\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_167\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_167\_ p{margin:0;}#chatgpt-mermaid-\_r_167\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_167\_ .label text,#chatgpt-mermaid-\_r_167\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ .node rect,#chatgpt-mermaid-\_r_167\_ .node circle,#chatgpt-mermaid-\_r_167\_ .node ellipse,#chatgpt-mermaid-\_r_167\_ .node polygon,#chatgpt-mermaid-\_r_167\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .rough-node .label text,#chatgpt-mermaid-\_r_167\_ .node .label text,#chatgpt-mermaid-\_r_167\_ .image-shape .label,#chatgpt-mermaid-\_r_167\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_167\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .rough-node .label,#chatgpt-mermaid-\_r_167\_ .node .label,#chatgpt-mermaid-\_r_167\_ .image-shape .label,#chatgpt-mermaid-\_r_167\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_167\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_167\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_167\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_167\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_167\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_167\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_167\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_167\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_167\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_167\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_167\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_167\_ .icon-shape,#chatgpt-mermaid-\_r_167\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_167\_ .icon-shape p,#chatgpt-mermaid-\_r_167\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_167\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_167\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_167\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_167\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_167\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_167\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_167\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_167\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_167\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_167\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_167\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_167\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_167\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_167\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_167\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_167\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_167\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .node rect,#chatgpt-mermaid-\_r_167\_ .node circle,#chatgpt-mermaid-\_r_167\_ .node ellipse,#chatgpt-mermaid-\_r_167\_ .node polygon,#chatgpt-mermaid-\_r_167\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_167\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_167\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_167\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_167\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_167\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Mở Unity HubNew ProjectChọn Unity 6.3Chọn Essentials PathwayĐặt tên và LocationCreate ProjectUnity Editor khởi chạyChọn hình thức họcUnity Learn trên webTutorials trong EditorThực hành trong UnityKiểm tra và mở lại Project

Điểm quan trọng nhất của bài học là mở đúng dự án Essentials Pathway, không chỉ tạo được một Unity Project bất kỳ.

Sau khi mở dự án, người học cần nhận biết sự khác biệt giữa việc học qua trình duyệt và học trực tiếp trong Editor; đồng thời biết cách quay lại project từ Unity Hub, kiểm tra các cửa sổ cơ bản và bảo toàn dữ liệu dự án.

## 13. Tài liệu tham khảo

1. [Unity Learn — Open the Unity Essentials project](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials/tutorial/open-the-unity-essentials-project?version=6.3\&utm_source=chatgpt.com) — Tutorial chính thức.
2. [Unity Learn — Editor Essentials](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com) — Toàn bộ Mission 1.
3. [Unity Hub — Create a new project](https://docs.unity.com/en-us/hub/project-create?utm_source=chatgpt.com) — Tạo project từ template.
4. [Unity Hub — Manage projects](https://docs.unity.com/en-us/hub/project-manage?utm_source=chatgpt.com) — Mở, thêm và quản lý project.
5. [Unity 6.3 — Scene View Navigation](https://docs.unity3d.com/6000.3/Documentation/Manual/SceneViewNavigation.html?utm_source=chatgpt.com) — Điều hướng không gian 3D.
6. [Unity 6.3 — Game View](https://docs.unity3d.com/6000.3/Documentation/Manual/GameView.html?utm_source=chatgpt.com) — Game View và Play Mode.

Nội dung tiếng Việt tự biên soạn và bổ sung thực hành, đối chiếu ngày 21/10/2026. Không phải transcript hoặc bản dịch chính thức của Unity Technologies. Các phần giới thiệu Transform, Play Mode và cấu trúc thư mục là kiến thức bổ trợ; trọng tâm tutorial chính thức vẫn là khởi chạy Essentials Pathway và lựa chọn hình thức học.

Bài tiếp theo: [Bài 03 — Explore the Editor Interface](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com) — Khám phá chi tiết giao diện và các công cụ chính của Unity Editor.