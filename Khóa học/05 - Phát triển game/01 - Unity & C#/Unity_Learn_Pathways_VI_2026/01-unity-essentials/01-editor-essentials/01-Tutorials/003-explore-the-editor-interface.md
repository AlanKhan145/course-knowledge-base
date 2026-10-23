# Bài 03 — Explore the Editor Interface

Unity Essentials · Module 1: Editor Essentials · Tutorial · Unity 6.3

[Get started with the Unity Editor - Unity Learn](https://images.openai.com/static-rsc-4/IURg9wSf_7WhGZbIBsou9wd5ruxg2sc7UdrVVxWdyzhXNtmhvCGeSH3mez9mW2CfFY1I4KTSorCJtzS2JtqBUzh9SNX_Ch0u89n3j7JfiWaviuV2JMns72TjKo4HKT6aVJVxyLlKKmtffDxzjq6U1hDKG0_d8uUeGy1DMxojH0M?purpose=inline)

[learn.unity.com](https://learn.unity.com/tutorial/get-started-with-the-unity-editor?utm_source=chatgpt.com)

> Chủ đề: Khám phá giao diện Unity Editor, quản lý GameObject, điều hướng trong Scene View, chỉnh sửa thuộc tính trong Inspector và chạy thử trò chơi bằng Play Mode.
>
> Kiến thức cần có: Đã cài Unity Hub, Unity Editor và mở được dự án Unity Essentials.
>
> Thời lượng tutorial tham khảo: Khoảng 20 phút, chưa bao gồm các bài tập mở rộng.

## 1. Tổng quan bài học

Unity Editor là môi trường làm việc chính trong quá trình phát triển trò chơi bằng Unity. Giao diện Editor được chia thành nhiều cửa sổ, mỗi cửa sổ đảm nhiệm một nhóm chức năng riêng biệt.

Ví dụ, khi xây dựng một trò chơi 3D, người phát triển thường xuyên phải thực hiện những thao tác sau:

- Tìm kiếm các tài nguyên có sẵn trong project.
- Đưa GameObject vào Scene và tổ chức chúng.
- Quan sát thế giới trò chơi từ nhiều góc nhìn.
- Chỉnh sửa vị trí, góc xoay và kích thước đối tượng.
- Kiểm tra hoạt động của trò chơi.
- Phát hiện lỗi và lưu các thay đổi.

Các thao tác này liên kết chặt chẽ với những cửa sổ như Project, Hierarchy, Scene, Game, Inspector và Console.

Trong bài học này, chúng ta sẽ khám phá một Scene mẫu, quan sát các đối tượng và thực hiện một thay đổi nhỏ để hiểu cách các cửa sổ của Unity phối hợp với nhau.

### Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Xác định được chức năng của các cửa sổ quan trọng trong Unity Editor.
2. Phân biệt được Project Window với Hierarchy Window.
3. Mở một Scene từ danh sách Assets.
4. Tìm kiếm và lựa chọn GameObject trong Scene.
5. Sử dụng các công cụ điều hướng cơ bản trong không gian 3D.
6. Phân biệt Scene View và Game View.
7. Quan sát, chỉnh sửa Component thông qua Inspector.
8. Sử dụng Play Mode để kiểm tra tương tác.
9. Lưu Scene và xác minh kết quả sau khi mở lại.
10. Phân tích và khắc phục những lỗi giao diện cơ bản.

## 2. Cấu trúc tổng thể của Unity Editor

### 2.1. Các thành phần chính

Một giao diện Unity Editor thông thường được tổ chức thành các khu vực sau:

Menu Bar / Toolbar / Play Controls

Hierarchy

Các GameObject

Scene

Game

Không gian 2D / 3D

Inspector

Các thuộc tính

&#x20;Project / Assets

&#x20;Console

Tài nguyên dự án và thông báo hệ thống

Sơ đồ minh họa cách bố trí các khu vực phổ biến, không phải ảnh giao diện Unity thực tế.

Unity cho phép tùy chỉnh bố cục, vì vậy vị trí cửa sổ trên máy người học có thể khác sơ đồ.

### 2.2. Chức năng của từng cửa sổ

| Thành phần     | Vai trò chính                      | Ví dụ sử dụng            |
| -------------- | ---------------------------------- | ------------------------ |
| Toolbar        | Truy cập các chức năng thường dùng | Play, Pause, Layout      |
| Hierarchy      | Tổ chức GameObject trong Scene     | Chọn nhân vật, Camera    |
| Scene View     | Quan sát và xây dựng không gian    | Di chuyển một Cube       |
| Game View      | Xem kết quả hiển thị của trò chơi  | Kiểm tra góc nhìn Camera |
| Inspector      | Xem và chỉnh sửa thuộc tính        | Thay đổi Position        |
| Project Window | Quản lý Assets trong project       | Mở Scene, tìm Material   |
| Console        | Kiểm tra thông báo và lỗi          | Đọc lỗi script C#        |

Các cửa sổ này không hoạt động độc lập. Khi lựa chọn một GameObject từ Hierarchy, đối tượng tương ứng sẽ được lựa chọn trong Scene View và các Component của nó xuất hiện trong Inspector.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs

+1



### 2.3. Mối quan hệ giữa các cửa sổ

\#chatgpt-mermaid-\_r_1ag\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1ag\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1ag\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1ag\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1ag\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1ag\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1ag\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1ag\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1ag\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1ag\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ag\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ag\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1ag\_ p{margin:0;}#chatgpt-mermaid-\_r_1ag\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1ag\_ .label text,#chatgpt-mermaid-\_r_1ag\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ .node rect,#chatgpt-mermaid-\_r_1ag\_ .node circle,#chatgpt-mermaid-\_r_1ag\_ .node ellipse,#chatgpt-mermaid-\_r_1ag\_ .node polygon,#chatgpt-mermaid-\_r_1ag\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .rough-node .label text,#chatgpt-mermaid-\_r_1ag\_ .node .label text,#chatgpt-mermaid-\_r_1ag\_ .image-shape .label,#chatgpt-mermaid-\_r_1ag\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1ag\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .rough-node .label,#chatgpt-mermaid-\_r_1ag\_ .node .label,#chatgpt-mermaid-\_r_1ag\_ .image-shape .label,#chatgpt-mermaid-\_r_1ag\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1ag\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1ag\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ag\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ag\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1ag\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1ag\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ag\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ag\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1ag\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1ag\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ag\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1ag\_ .icon-shape,#chatgpt-mermaid-\_r_1ag\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1ag\_ .icon-shape p,#chatgpt-mermaid-\_r_1ag\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1ag\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1ag\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ag\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1ag\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1ag\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1ag\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1ag\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1ag\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1ag\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ag\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1ag\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ag\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1ag\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1ag\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1ag\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1ag\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .node rect,#chatgpt-mermaid-\_r_1ag\_ .node circle,#chatgpt-mermaid-\_r_1ag\_ .node ellipse,#chatgpt-mermaid-\_r_1ag\_ .node polygon,#chatgpt-mermaid-\_r_1ag\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1ag\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1ag\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1ag\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1ag\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ag\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Project WindowScene đang mởHierarchyScene ViewInspectorGame ViewToolbarConsoleMở Scene AssetChọn GameObjectChọn GameObjectChỉnh sửa ComponentPlay / Pause / StopThông báo, cảnh báo, lỗi

Một thao tác trong Editor có thể tạo ra thay đổi ở nhiều nơi. Chẳng hạn, khi sửa Position trong Inspector, đối tượng thay đổi vị trí trong Scene View và có thể xuất hiện ở vị trí khác trong Game View, tùy vào Camera.

## 3. Project Window — Quản lý tài nguyên

### 3.1. Khái niệm

Project Window hiển thị thư viện các Assets thuộc project Unity.

Assets là những tài nguyên được sử dụng để xây dựng trò chơi, chẳng hạn:

- Scene.
- Prefab.
- Model 3D.
- Texture.
- Material.
- Audio.
- Animation.
- Script C#.

Project Window có vai trò tương tự một trình quản lý tệp, giúp tìm kiếm và tổ chức các tài nguyên theo thư mục.

### 3.2. Phân biệt Asset và GameObject

Asset là tài nguyên nằm trong project; GameObject là đối tượng tồn tại trong Scene đang được xây dựng hoặc chạy.

Ví dụ, một tệp model robot có thể nằm trong thư mục `Assets/Models`. Khi đưa model đó vào Scene, Unity tạo một hoặc nhiều GameObject để biểu diễn model.

Tệp model gốc vẫn tồn tại trong Project Window ngay cả khi GameObject được đưa vào Scene rồi bị xóa.

| Tiêu chí       | Asset                          | GameObject                    |
| -------------- | ------------------------------ | ----------------------------- |
| Vị trí quản lý | Project Window                 | Hierarchy                     |
| Phạm vi        | Project                        | Scene                         |
| Ví dụ          | `Robot.fbx`                    | Robot trong màn chơi          |
| Xóa khỏi Scene | Không đồng nghĩa xóa Asset     | GameObject bị loại khỏi Scene |
| Tái sử dụng    | Có thể sử dụng tại nhiều Scene | Phụ thuộc Scene hoặc Prefab   |

### 3.3. Chế độ hiển thị của Project Window

Unity hỗ trợ nhiều kiểu hiển thị tài nguyên, bao gồm danh sách gọn và hình thu nhỏ (thumbnails).

Với dự án có nhiều Assets, chế độ danh sách thuận tiện khi cần đọc đầy đủ tên file. Chế độ thumbnail giúp nhận diện hình ảnh, material hoặc model.

Có thể thay đổi kích thước biểu tượng bằng thanh điều chỉnh ở khu vực dưới của Project Window khi giao diện tương ứng được bật.

### 3.4. Thực hành mở Scene

Trong dự án Essentials Pathway:

1. Xác định Project Window.
2. Mở thư mục `Assets`.
3. Tìm thư mục tài nguyên Unity Essentials.
4. Mở thư mục `Scenes`.
5. Nhấp đúp Scene khởi đầu của tutorial để mở.

Một số phiên bản tài nguyên của tutorial sử dụng tên Scene `-1_Starter_Scene`, với những đối tượng mẫu như robot, nền, hộp và ngôi sao. Tên và cấu trúc thực tế cần được kiểm tra trong template đang cài, vì có thể thay đổi theo phiên bản.

Sau khi mở Scene, quan sát Hierarchy và Scene View để xác minh những đối tượng mẫu đã được nạp.

## 4. Hierarchy Window — Tổ chức đối tượng

### 4.1. Khái niệm

Hierarchy Window hiển thị các GameObject thuộc Scene đang mở theo một cấu trúc phân cấp.

Mỗi GameObject có thể tồn tại độc lập hoặc nằm trong một nhóm cha–con (Parent–Child).

Ví dụ:

```
SampleScene
├── Main Camera
├── Directional Light
├── Ground
├── Robot
└── Boxes
    ├── Box_A
    ├── Box_B
    └── Box_C
```

Đây là cấu trúc minh họa, không phải danh sách bắt buộc của template.

### 4.2. Quan hệ Parent–Child

Một GameObject có thể chứa các GameObject con.

Ví dụ, một nhân vật robot có cấu trúc:

\#chatgpt-mermaid-\_r_1av\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1av\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1av\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1av\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1av\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1av\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1av\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1av\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1av\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1av\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1av\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1av\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1av\_ p{margin:0;}#chatgpt-mermaid-\_r_1av\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1av\_ .label text,#chatgpt-mermaid-\_r_1av\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ .node rect,#chatgpt-mermaid-\_r_1av\_ .node circle,#chatgpt-mermaid-\_r_1av\_ .node ellipse,#chatgpt-mermaid-\_r_1av\_ .node polygon,#chatgpt-mermaid-\_r_1av\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .rough-node .label text,#chatgpt-mermaid-\_r_1av\_ .node .label text,#chatgpt-mermaid-\_r_1av\_ .image-shape .label,#chatgpt-mermaid-\_r_1av\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1av\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .rough-node .label,#chatgpt-mermaid-\_r_1av\_ .node .label,#chatgpt-mermaid-\_r_1av\_ .image-shape .label,#chatgpt-mermaid-\_r_1av\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1av\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1av\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1av\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1av\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1av\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1av\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1av\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1av\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1av\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1av\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1av\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1av\_ .icon-shape,#chatgpt-mermaid-\_r_1av\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1av\_ .icon-shape p,#chatgpt-mermaid-\_r_1av\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1av\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1av\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1av\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1av\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1av\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1av\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1av\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1av\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1av\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1av\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1av\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1av\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1av\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1av\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1av\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1av\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .node rect,#chatgpt-mermaid-\_r_1av\_ .node circle,#chatgpt-mermaid-\_r_1av\_ .node ellipse,#chatgpt-mermaid-\_r_1av\_ .node polygon,#chatgpt-mermaid-\_r_1av\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1av\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1av\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1av\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1av\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1av\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Robot (Parent)BodyHeadLeftArmRightArmLegs

Khi di chuyển hoặc xoay Robot, các đối tượng con sẽ chịu ảnh hưởng từ Transform của Robot cha.

Điều này giúp tổ chức các đối tượng phức tạp như nhân vật, xe cộ hoặc những nhóm vật thể chuyển động cùng nhau.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 4.3. Lựa chọn và xác định vị trí GameObject

Để tìm một GameObject trong Scene:

1. Nhấp vào đối tượng trong Hierarchy.
2. Quan sát Inspector hiển thị thuộc tính.
3. Di chuyển con trỏ đến Scene View.
4. Nhấn `F` để thực hiện Frame Selected.

Có thể nhấp đúp vào GameObject trong Hierarchy để đưa đối tượng vào giữa vùng quan sát Scene View.

Frame Selected chỉ thay đổi góc nhìn trong Editor; thao tác này không làm thay đổi Position của GameObject.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Manual: Scene view navigation



### 4.4. Thực hành với Hierarchy

Trong Scene thực hành:

1. Tìm GameObject đại diện cho mặt đất.
2. Nhấp đúp để quan sát toàn bộ khu vực.
3. Tìm một GameObject cha chứa các hộp, nếu có.
4. Mở rộng biểu tượng mũi tên bên cạnh tên đối tượng.
5. Chọn lần lượt từng GameObject con.
6. Quan sát sự thay đổi trong Scene View và Inspector.

Kết quả mong đợi: Xác định được các đối tượng độc lập, các nhóm GameObject và mối liên hệ giữa lựa chọn đối tượng với Inspector.

## 5. Scene View — Quan sát thế giới 3D

### 5.1. Scene View là gì?

Scene View là cửa sổ cho phép người phát triển quan sát, lựa chọn, sắp xếp và chỉnh sửa các đối tượng trong Scene.

Có thể hình dung Scene View giống không gian của một xưởng dựng phim 3D. Người phát triển được tự do thay đổi góc nhìn để quan sát các đối tượng, kể cả những khu vực Camera trò chơi không nhìn thấy.

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

[learn.unity.com](https://learn.unity.com/tutorial/get-started-with-unity-in-editor-tutorial?utm_source=chatgpt.com)

Trong Scene View, ba trục tọa độ được biểu diễn bằng màu sắc:

### X

Trục ngang

### Y

Trục đứng

### Z

Trục chiều sâu

Đây là hệ tọa độ 3D của Unity, với trục Y thường biểu diễn hướng lên trong thế giới mặc định.

### 5.2. Điều khiển góc nhìn

Khi di chuyển trong Scene View, cần phân biệt di chuyển góc nhìn với di chuyển GameObject.

Nếu kéo góc nhìn, vị trí thực tế của nhân vật, vật thể và Camera trò chơi không tự thay đổi.

Các thao tác điều hướng phổ biến:

| Thao tác                    | Chức năng                             |
| --------------------------- | ------------------------------------- |
| Giữ chuột phải và kéo       | Xoay góc nhìn                         |
| Giữ chuột giữa và kéo       | Pan, dịch chuyển góc nhìn             |
| Lăn con lăn chuột           | Phóng to hoặc thu nhỏ                 |
| `Alt + chuột trái` và kéo   | Orbit quanh điểm quan sát             |
| Chọn GameObject và nhấn `F` | Đưa GameObject vào trung tâm góc nhìn |
| Các phím mũi tên            | Di chuyển Scene Camera                |
| `Shift + phím mũi tên`      | Di chuyển nhanh hơn                   |

Các thao tác chuột có thể thay đổi nhẹ theo hệ điều hành hoặc loại thiết bị đầu vào.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 5.3. View Tool và Pan Tool

View Tool có biểu tượng bàn tay, dùng để điều khiển góc nhìn Scene. Phím tắt mặc định là `Q`.

Khi View Tool được chọn, có thể dùng chuột trái để thực hiện Pan.

Pan làm dịch chuyển toàn bộ khung hình theo một hướng, còn Orbit thay đổi hướng quan sát quanh một điểm.

Ví dụ, khi muốn nhìn kỹ cầu thang trong Scene mẫu, có thể:

1. Tìm đối tượng cầu thang trong Hierarchy.
2. Nhấp đúp vào đối tượng.
3. Chọn View Tool (`Q`).
4. Kéo chuột để quan sát các góc của cầu thang.
5. Sử dụng con lăn để điều chỉnh khoảng cách quan sát.

Kết quả mong đợi: Có thể quan sát cầu thang ở nhiều góc khác nhau mà không thay đổi Transform của nó.

### 5.4. Phân biệt các thao tác điều hướng

\#chatgpt-mermaid-\_r_1d2\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1d2\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1d2\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1d2\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1d2\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1d2\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1d2\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1d2\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1d2\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1d2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1d2\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1d2\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1d2\_ p{margin:0;}#chatgpt-mermaid-\_r_1d2\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1d2\_ .label text,#chatgpt-mermaid-\_r_1d2\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ .node rect,#chatgpt-mermaid-\_r_1d2\_ .node circle,#chatgpt-mermaid-\_r_1d2\_ .node ellipse,#chatgpt-mermaid-\_r_1d2\_ .node polygon,#chatgpt-mermaid-\_r_1d2\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .rough-node .label text,#chatgpt-mermaid-\_r_1d2\_ .node .label text,#chatgpt-mermaid-\_r_1d2\_ .image-shape .label,#chatgpt-mermaid-\_r_1d2\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1d2\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .rough-node .label,#chatgpt-mermaid-\_r_1d2\_ .node .label,#chatgpt-mermaid-\_r_1d2\_ .image-shape .label,#chatgpt-mermaid-\_r_1d2\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1d2\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1d2\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1d2\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1d2\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1d2\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1d2\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1d2\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1d2\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1d2\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1d2\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1d2\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1d2\_ .icon-shape,#chatgpt-mermaid-\_r_1d2\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1d2\_ .icon-shape p,#chatgpt-mermaid-\_r_1d2\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1d2\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1d2\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1d2\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1d2\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1d2\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1d2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1d2\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1d2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1d2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d2\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1d2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d2\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1d2\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1d2\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1d2\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1d2\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .node rect,#chatgpt-mermaid-\_r_1d2\_ .node circle,#chatgpt-mermaid-\_r_1d2\_ .node ellipse,#chatgpt-mermaid-\_r_1d2\_ .node polygon,#chatgpt-mermaid-\_r_1d2\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1d2\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1d2\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1d2\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1d2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1d2\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Điều hướng Scene ViewOrbitPanZoomFrame SelectedThay đổi hướng nhìn quanhmột điểmDịch chuyển khung nhìnThay đổi khoảng cách quan sátTập trung vào GameObject đãchọn

Khi bị lạc trong không gian Scene, cách khôi phục nhanh là lựa chọn một GameObject trong Hierarchy và nhấn `F`.

## 6. Game View và Play Mode

### 6.1. Game View là gì?

Game View cho phép quan sát hình ảnh ứng dụng được render thông qua hệ thống Camera của trò chơi.

Nếu Scene View là nơi người phát triển dựng môi trường, thì Game View cho biết môi trường đó có thể xuất hiện với người chơi như thế nào.

### 6.2. So sánh Scene View và Game View

| Đặc điểm                  | Scene View                   | Game View                       |
| ------------------------- | ---------------------------- | ------------------------------- |
| Mục đích                  | Thiết kế, biên tập           | Xem và kiểm tra trò chơi        |
| Góc nhìn                  | Scene Camera của Editor      | Camera của trò chơi             |
| Di chuyển góc nhìn        | Tự do                        | Phụ thuộc Camera và logic game  |
| Hiển thị công cụ biên tập | Có                           | Không phải mục đích chính       |
| Tương tác gameplay        | Không phải chế độ chơi chính | Có thể kiểm tra trong Play Mode |

Một GameObject có thể nằm trong Scene nhưng không xuất hiện trong Game View nếu nằm ngoài vùng nhìn Camera hoặc không đáp ứng điều kiện render.

### 6.3. Các nút điều khiển Play Mode

Toolbar cung cấp ba nút điều khiển chính:

Play

Chạy hoặc dừng

Pause

Tạm dừng

Step

Tiến một frame

Play Mode được sử dụng để kiểm tra hành vi, tương tác và các hệ thống thời gian thực mà không phải tạo bản build độc lập.

Theo cấu hình mặc định, Unity khôi phục trạng thái Scene khi kết thúc Play Mode; các thiết lập Play Mode nâng cao có thể thay đổi một số hành vi liên quan đến quá trình nạp lại Scene hoặc scripting domain.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 6.4. Thực hành điều khiển nhân vật

Nếu Essentials Pathway đang sử dụng Scene mẫu có robot và các bệ nhảy:

1. Nhấn `Play`.
2. Chọn hoặc tập trung vào Game View.
3. Sử dụng các phím di chuyển theo hướng dẫn trong project.
4. Thử tiến về phía một bệ cao.
5. Quan sát một vật phẩm cần thu thập, nếu Scene có cung cấp.
6. Thoát Play Mode bằng cách nhấn lại nút Play.

Một số bản tutorial sử dụng các phím `WASD` hoặc mũi tên để di chuyển, `Space` để nhảy, `Shift` để chạy và chuột để thay đổi góc nhìn. Những điều khiển này thuộc logic của Scene mẫu, không phải quy tắc chung cho mọi Unity Project.

### 6.5. Tại sao thay đổi trong Play Mode bị mất?

Xét ví dụ:

- Trong Edit Mode, một Cube có Position X bằng `0`.
- Người học vào Play Mode và đổi Position X thành `5`.
- Sau khi thoát Play Mode, Position X trở về `0` trong cấu hình mặc định.

Lý do là Play Mode được thiết kế để thử nghiệm trạng thái chạy, không thay thế quy trình lưu chỉnh sửa Scene.

Quy tắc thực hành: Thoát Play Mode trước khi chỉnh sửa những giá trị muốn lưu lâu dài.

## 7. Inspector Window — Xem và chỉnh sửa Component

### 7.1. Inspector là gì?

Inspector Window hiển thị các thuộc tính và Component của đối tượng đang được chọn.

Khi lựa chọn một GameObject trong Hierarchy hoặc Scene View, Inspector sẽ hiển thị những thành phần tương ứng.

Ví dụ, một Cube 3D thông thường có thể chứa:

```
Cube
├── Transform
├── Mesh Filter
├── Mesh Renderer
└── Box Collider
```

Mỗi Component có vai trò riêng:

| Component     | Công dụng                           |
| ------------- | ----------------------------------- |
| Transform     | Vị trí, góc xoay và tỉ lệ           |
| Mesh Filter   | Tham chiếu dữ liệu Mesh             |
| Mesh Renderer | Hiển thị hình học của Mesh          |
| Box Collider  | Xác định hình dạng va chạm dạng hộp |

GameObject có thể chứa nhiều Component nhưng chỉ có một Transform chính.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 7.2. Transform và ba thuộc tính cơ bản

Transform chứa ba nhóm thuộc tính thường xuyên sử dụng nhất:

- Position: Xác định vị trí.
- Rotation: Xác định hướng xoay.
- Scale: Xác định tỉ lệ kích thước.

Ví dụ một GameObject không có Parent được đặt tại:

```
Transform
    Position: (2, 1, 0)
    Rotation: (0, 45, 0)
    Scale:    (1, 1, 1)
```

Điều này có nghĩa GameObject nằm tại vị trí có X bằng 2, Y bằng 1, Z bằng 0; quay quanh trục Y một góc 45 độ; và sử dụng tỉ lệ mặc định.

Nếu đối tượng có Parent, các giá trị hiển thị trong Transform Inspector thông thường là local transform, tính tương đối với Parent chứ không nhất thiết là tọa độ thế giới.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 7.3. Công cụ Transform trong Scene View

| Phím tắt | Công cụ     | Ý nghĩa                                  |
| -------- | ----------- | ---------------------------------------- |
| `Q`      | View Tool   | Điều khiển góc nhìn                      |
| `W`      | Move Tool   | Di chuyển                                |
| `E`      | Rotate Tool | Xoay                                     |
| `R`      | Scale Tool  | Thay đổi tỉ lệ                           |
| `T`      | Rect Tool   | Chỉnh sửa với tay nắm dạng hình chữ nhật |

Khi sử dụng Move Tool, các mũi tên có màu đại diện cho các trục tọa độ. Kéo mũi tên theo một trục giúp giới hạn hướng di chuyển theo trục đó.

### 7.4. Local và Global

Unity cho phép lựa chọn hướng của công cụ Transform theo hệ trục Local hoặc Global.

Global căn theo hệ tọa độ thế giới; Local căn theo hệ trục của GameObject đã xoay.

Ví dụ, một Cube được quay 90 độ quanh trục Y. Khi sử dụng Move Tool, trục Z theo Local có thể hướng về phía khác so với Z Global.

Thực hành:

1. Tạo Cube trong một Scene thực hành.
2. Đặt Rotation Y bằng `90`.
3. Chọn Move Tool (`W`).
4. Chuyển sang Local và quan sát hướng các mũi tên.
5. Chuyển sang Global.
6. So sánh hướng các mũi tên và thử di chuyển.

Kết quả cần ghi nhận là sự thay đổi hướng thao tác của gizmo, không phải việc Unity tự xoay lại đối tượng khi thay đổi Local/Global.

### 7.5. Thực hành chỉnh sửa đối tượng

Trong Scene Essentials Pathway, nếu có GameObject ngôi sao đặt gần một bệ cao, người học có thể thử thay đổi vị trí của nó.

1. Chắc chắn Editor đang ở Edit Mode.
2. Chọn GameObject ngôi sao trong Hierarchy.
3. Quan sát Transform trong Inspector.
4. Ghi lại Position ban đầu.
5. Thay đổi X hoặc Y một lượng nhỏ.
6. Kiểm tra vị trí mới trong Scene View.
7. Nhấn Play để quan sát kết quả trong game.
8. Thoát Play Mode.

Trong một phiên bản tutorial mẫu, hoạt động này được sử dụng để đưa ngôi sao đến gần khu vực robot có thể nhảy tới hơn.

Không nên sao chép một bộ tọa độ cố định sang tất cả project, vì vị trí ban đầu của các GameObject và quan hệ Parent–Child có thể khác nhau.

## 8. Quản lý bố cục và các cửa sổ trong Editor

### 8.1. Layout là gì?

Layout là cách sắp xếp các cửa sổ, tab và vùng làm việc trong Unity Editor.

Unity hỗ trợ các bố cục có sẵn và bố cục tùy chỉnh.

Một số người thích đặt Hierarchy bên trái, Inspector bên phải và Project ở phía dưới. Người khác có thể sử dụng hai màn hình để tách Scene View và Game View.

### 8.2. Docking và Undocking

Docking là thao tác ghép một cửa sổ vào vị trí khác trong Editor.

Undocking là tách cửa sổ thành một cửa sổ nổi độc lập.

Người học có thể kéo tab của cửa sổ đến vị trí khác. Unity sẽ hiển thị khu vực dự kiến để đặt tab khi kéo.

Sau khi sắp xếp xong, có thể sử dụng Layout Menu để lưu hoặc khôi phục bố cục.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 8.3. Thực hành tùy chỉnh Layout

1. Mở Unity Editor ở Default Layout.
2. Kéo tab Inspector sang vị trí khác.
3. Thử tách tab Console thành cửa sổ nổi.
4. Điều chỉnh kích thước các cửa sổ.
5. Lưu bố cục tùy chỉnh nếu cần.
6. Khôi phục Default Layout.

Không nên nhầm việc thay đổi vị trí cửa sổ với chỉnh sửa nội dung Scene. Bố cục là không gian làm việc của Editor, còn Scene chứa đối tượng của trò chơi.

## 9. Console — Theo dõi thông báo và lỗi

Console là công cụ hỗ trợ kiểm tra hoạt động của Unity Editor và mã chương trình.

Có thể mở qua:

`Window > General > Console`

Console thường có ba loại thông điệp:

| Loại    | Ý nghĩa                | Hướng xử lý                           |
| ------- | ---------------------- | ------------------------------------- |
| Log     | Thông tin thông thường | Đọc để theo dõi hoạt động             |
| Warning | Cảnh báo               | Kiểm tra nguyên nhân và mức ảnh hưởng |
| Error   | Lỗi                    | Ưu tiên xác định và khắc phục         |

Ví dụ, nếu một script không thể biên dịch, Console có thể hiển thị lỗi và thông tin dẫn đến tệp liên quan.

Console hỗ trợ lọc thông báo, tìm kiếm, hiển thị lỗi lặp và xem chi tiết stack trace.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



Lưu ý: Việc không nhìn thấy thông báo trong Console chưa chắc nghĩa là không có lỗi. Cần kiểm tra xem các bộ lọc Warning hoặc Error có đang bị tắt hay không.

## 10. Bài thực hành tổng hợp

Đề bài: Làm quen toàn bộ quy trình lựa chọn, chỉnh sửa và kiểm tra GameObject.

Sử dụng một bản sao của Scene mẫu hoặc Scene thực hành riêng để tránh ảnh hưởng đến tài nguyên học tập.

### Giai đoạn 1 — Khám phá

1. Mở Scene.
2. Xác định Main Camera và Directional Light nếu có.
3. Tìm ba GameObject trong Hierarchy.
4. Chọn một GameObject và kiểm tra Inspector.
5. Ghi tên các Component của đối tượng đó.

### Giai đoạn 2 — Điều hướng

1. Nhấp đúp vào một GameObject.
2. Quan sát kết quả Frame Selected.
3. Dùng chuột phải để xoay góc nhìn.
4. Dùng Pan để dịch chuyển khung hình.
5. Zoom vào và ra.
6. Nhấn `F` để đưa góc nhìn về đối tượng.

### Giai đoạn 3 — Chỉnh sửa

1. Tạo một Cube với `GameObject > 3D Object > Cube`.
2. Chọn Cube trong Hierarchy.
3. Thay đổi Position, Rotation và Scale bằng Inspector.
4. Sử dụng Move, Rotate và Scale trong Scene View.
5. So sánh Local và Global.

### Giai đoạn 4 — Kiểm thử

1. Lưu Scene bằng `Ctrl + S` hoặc `Cmd + S`.
2. Nhấn Play.
3. Quan sát Cube trong Game View.
4. Nếu Cube không hiển thị, kiểm tra Camera và vị trí đối tượng.
5. Thoát Play Mode.
6. Kiểm tra những giá trị đã lưu có được giữ lại không.

### Giai đoạn 5 — Lưu và xác minh

Unity không mặc định tự lưu mọi chỉnh sửa Scene. Khi Scene có thay đổi chưa lưu, một dấu `*` có thể xuất hiện cạnh tên Scene trong Hierarchy.

Sau khi lưu thành công, dấu đánh dấu thay đổi chưa lưu sẽ biến mất nếu không có chỉnh sửa mới.

Để kiểm tra đầy đủ, đóng và mở lại Scene rồi xác nhận những thay đổi mong muốn vẫn được giữ nguyên.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



## 11. Các lỗi thường gặp

| Hiện tượng                                                | Nguyên nhân có thể                                      | Cách khắc phục                             |
| --------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------ |
| Không thấy Inspector                                      | Đã đóng hoặc di chuyển tab                              | Mở lại từ Window > General > Inspector     |
| Không thấy GameObject                                     | Scene View đang quan sát vị trí khác                    | Chọn đối tượng và nhấn `F`                 |
| Không thấy đối tượng trong Game View                      | Camera không nhìn thấy hoặc đối tượng không được render | Kiểm tra Camera, Renderer và Layer         |
| Di chuyển đối tượng sai hướng                             | Đang sử dụng Local thay vì Global hoặc ngược lại        | Kiểm tra lựa chọn hệ trục                  |
| Chọn một đối tượng nhưng Inspector hiển thị nội dung khác | Inspector có thể đang được khóa                         | Kiểm tra biểu tượng Lock                   |
| Thay đổi bị mất sau Play Mode                             | Chỉnh sửa trạng thái chạy tạm thời                      | Thực hiện và lưu chỉnh sửa trong Edit Mode |
| Scene trở về trạng thái cũ                                | Chưa lưu                                                | Lưu Scene trước khi đóng                   |
| Console có lỗi script                                     | Script hoặc package không hợp lệ                        | Đọc thông báo lỗi và vị trí liên quan      |

### Quy trình debug nhanh

\#chatgpt-mermaid-\_r_1fb\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1fb\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1fb\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1fb\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1fb\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1fb\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1fb\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1fb\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1fb\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1fb\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fb\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fb\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1fb\_ p{margin:0;}#chatgpt-mermaid-\_r_1fb\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1fb\_ .label text,#chatgpt-mermaid-\_r_1fb\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ .node rect,#chatgpt-mermaid-\_r_1fb\_ .node circle,#chatgpt-mermaid-\_r_1fb\_ .node ellipse,#chatgpt-mermaid-\_r_1fb\_ .node polygon,#chatgpt-mermaid-\_r_1fb\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .rough-node .label text,#chatgpt-mermaid-\_r_1fb\_ .node .label text,#chatgpt-mermaid-\_r_1fb\_ .image-shape .label,#chatgpt-mermaid-\_r_1fb\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1fb\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .rough-node .label,#chatgpt-mermaid-\_r_1fb\_ .node .label,#chatgpt-mermaid-\_r_1fb\_ .image-shape .label,#chatgpt-mermaid-\_r_1fb\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1fb\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1fb\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fb\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fb\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1fb\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1fb\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1fb\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1fb\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1fb\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1fb\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1fb\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1fb\_ .icon-shape,#chatgpt-mermaid-\_r_1fb\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1fb\_ .icon-shape p,#chatgpt-mermaid-\_r_1fb\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1fb\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1fb\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1fb\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1fb\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1fb\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1fb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1fb\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1fb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1fb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fb\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1fb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1fb\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1fb\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1fb\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1fb\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1fb\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .node rect,#chatgpt-mermaid-\_r_1fb\_ .node circle,#chatgpt-mermaid-\_r_1fb\_ .node ellipse,#chatgpt-mermaid-\_r_1fb\_ .node polygon,#chatgpt-mermaid-\_r_1fb\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1fb\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1fb\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1fb\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1fb\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1fb\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện vấn đềXác định cửa sổ liên quanLoại vấn đềKiểm tra Scene / Game /CameraKiểm tra Inspector / TransformKiểm tra ConsoleĐưa ra giả thuyếtThay đổi một yếu tốKiểm tra lạiĐã khắc phục?Lưu Scene và ghi nhậnHiển thịThuộc tínhLỗi chương trìnhChưaRồi

Không nên thay đổi nhiều thuộc tính cùng lúc khi chưa xác định nguyên nhân. Mỗi lần kiểm thử chỉ nên tập trung vào một giả thuyết để dễ đánh giá kết quả.

## 12. Câu hỏi ôn tập

Trắc nghiệm 5 câu

0/5 đã trả lời

Câu 1. Một model 3D đã có trong thư mục Assets nhưng chưa được đưa vào Scene. Cửa sổ nào phù hợp nhất để tìm model đó?

A. Hierarchy

B. Project Window

C. Game View

D. Console

Câu 2. Người học muốn đưa một GameObject đang chọn về trung tâm Scene View mà không làm thay đổi vị trí của đối tượng. Nên dùng thao tác nào?

A. Nhấn Play

B. Đổi Position thành (0,0,0)

C. Nhấn Delete

D. Nhấn F với Scene View đang được tập trung

Câu 3. Khi chỉnh Position của GameObject trong Inspector, kết quả nào đúng nhất?

A. Vị trí GameObject thay đổi trong Scene theo hệ tọa độ tương ứng

B. Vị trí của mọi Asset đều thay đổi

C. Unity Editor tự chuyển sang Play Mode

D. Camera trò chơi luôn được di chuyển theo

Câu 4. Một người thay đổi vị trí Cube trong Play Mode nhưng sau khi dừng thì Cube trở về vị trí cũ. Lý do thường gặp là gì?

A. Cube thiếu Mesh Renderer

B. Project chưa cài Android module

C. Unity khôi phục trạng thái Scene sau Play Mode trong cấu hình mặc định

D. Hierarchy không hỗ trợ Cube

Câu 5. Làm thế nào để kiểm tra hình ảnh mà Camera trò chơi render cho người chơi?

A. Chỉ xem Project Window

B. Mở Game View và chạy thử bằng Play Mode khi cần

C. Chỉ đọc Console

D. Nhấn Frame Selected trong Hierarchy

Chấm điểmLàm lại

## 13. Checklist hoàn thành bài học

Tiến độ học tập

0/15

Xác định các cửa sổ chính của Unity Editor.

Phân biệt được Project Window và Hierarchy Window.

Mở được Scene mẫu từ Project Window.

Lựa chọn và tìm GameObject trong Scene.

Sử dụng được Frame Selected.

Thực hành điều hướng Scene View bằng chuột.

Phân biệt Pan, Orbit và Zoom.

Sử dụng được Move, Rotate và Scale.

Giải thích được Local và Global.

Phân biệt Scene View và Game View.

Bật và thoát Play Mode.

Thay đổi được Transform trong Inspector.

Biết mở và đọc thông báo trong Console.

Lưu và mở lại Scene thành công.

Hoàn thành bài tập và ghi lại kết quả.

## 14. Tổng kết kiến thức

\#chatgpt-mermaid-\_r_1ij\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1ij\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1ij\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1ij\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1ij\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1ij\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1ij\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1ij\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1ij\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1ij\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ij\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ij\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1ij\_ p{margin:0;}#chatgpt-mermaid-\_r_1ij\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1ij\_ .label text,#chatgpt-mermaid-\_r_1ij\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ .node rect,#chatgpt-mermaid-\_r_1ij\_ .node circle,#chatgpt-mermaid-\_r_1ij\_ .node ellipse,#chatgpt-mermaid-\_r_1ij\_ .node polygon,#chatgpt-mermaid-\_r_1ij\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .rough-node .label text,#chatgpt-mermaid-\_r_1ij\_ .node .label text,#chatgpt-mermaid-\_r_1ij\_ .image-shape .label,#chatgpt-mermaid-\_r_1ij\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1ij\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .rough-node .label,#chatgpt-mermaid-\_r_1ij\_ .node .label,#chatgpt-mermaid-\_r_1ij\_ .image-shape .label,#chatgpt-mermaid-\_r_1ij\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1ij\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1ij\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ij\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ij\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1ij\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1ij\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ij\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ij\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1ij\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1ij\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ij\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1ij\_ .icon-shape,#chatgpt-mermaid-\_r_1ij\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1ij\_ .icon-shape p,#chatgpt-mermaid-\_r_1ij\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1ij\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1ij\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ij\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1ij\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1ij\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1ij\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1ij\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1ij\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1ij\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ij\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1ij\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ij\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1ij\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1ij\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1ij\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1ij\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .node rect,#chatgpt-mermaid-\_r_1ij\_ .node circle,#chatgpt-mermaid-\_r_1ij\_ .node ellipse,#chatgpt-mermaid-\_r_1ij\_ .node polygon,#chatgpt-mermaid-\_r_1ij\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1ij\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1ij\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1ij\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1ij\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ij\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Unity EditorProject WindowHierarchyScene ViewGame ViewInspectorConsoleQuản lý AssetsQuản lý GameObjectsQuan sát và chỉnh sửa SceneKiểm tra hình ảnh và gameplayChỉnh sửa ComponentsKiểm tra thông báo và lỗi

Unity Editor là một môi trường tích hợp nhiều cửa sổ, không phải tập hợp những công cụ hoàn toàn tách rời.

Quy trình làm việc cơ bản cần ghi nhớ là:

Tìm Asset → Mở Scene → Chọn GameObject → Chỉnh sửa trong Inspector hoặc Scene View → Chạy thử trong Game View → Kiểm tra Console → Lưu Scene.

Khi thành thạo quy trình này, người học đã có nền tảng để bắt đầu xây dựng những Scene 3D phức tạp hơn.

## 15. Tài liệu tham khảo

1. [Unity Learn — Editor Essentials](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com) — Mission chứa bài Explore the Editor Interface.
2. [Unity 6.3 — Editor Windows and Views](https://docs.unity.com/en-us/engine/6000.3/manual/unity-editor/editor-windows-views-reference?utm_source=chatgpt.com) — Các cửa sổ chính của Editor.
3. [Unity 6.3 — Hierarchy Window](https://docs.unity.com/en-us/engine/6000.3/manual/unity-editor/editor-windows-views-reference/hierarchy-window?utm_source=chatgpt.com) — Tổ chức GameObject.
4. [Unity — Scene View Navigation](https://docs.unity.com/en-us/engine/6000.0/manual/unity-editor/editor-windows-views-reference/using-the-scene-view/scene-view-navigation?utm_source=chatgpt.com) — Điều hướng Scene View.
5. [Unity 6.3 — Transform](https://docs.unity.com/en-us/engine/6000.3/script-reference/unityengine/transform?utm_source=chatgpt.com) — Position, Rotation và Scale.
6. [Unity 6.3 — Console Window](https://docs.unity.com/en-us/engine/6000.3/manual/unity-editor/editor-windows-views-reference/console-window/console?utm_source=chatgpt.com) — Các công cụ kiểm tra và gỡ lỗi.
7. [Unity 6.3 — Customize Workspace Layout](https://docs.unity.com/en-us/engine/6000.3/manual/unity-editor/editor-customize/customizing-your-workspace?utm_source=chatgpt.com) — Tùy chỉnh giao diện.

Bài học tiếng Việt tự biên soạn, mở rộng từ chủ đề Unity Essentials và đối chiếu tài liệu kỹ thuật. Nội dung mở rộng về Transform, Local/Global, Console và Layout được đưa vào để hỗ trợ thực hành; một số bước và tên GameObject trong tutorial mẫu có thể khác ở Unity 6.3. Trang chi tiết của tutorial chính thức không truy cập được khi đối chiếu nên không coi hướng dẫn trên đây là bản sao xác nhận từng bước của Unity Learn.

Bài tiếp theo: [Bài 04 — Master 3D Scene Navigation](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com) — Thành thạo điều hướng không gian 3D, góc nhìn, Flythrough Mode và các thao tác di chuyển trong Scene View.