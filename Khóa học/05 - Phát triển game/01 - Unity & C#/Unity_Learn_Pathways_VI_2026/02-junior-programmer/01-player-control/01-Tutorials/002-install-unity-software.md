# Bài 02 — Install Unity Software

Pathway: Junior Programmer Mission: Player Control Loại bài: Tutorial — Hướng dẫn thực hành Phiên bản: Unity 6.3 Chủ đề: Cài đặt Unity, quản lý phiên bản và thiết lập môi trường phát triển

Tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trước khi lập trình điều khiển nhân vật trong Unity, cần chuẩn bị một môi trường phát triển ổn định. Môi trường này bao gồm Unity Hub, Unity Editor, các module hỗ trợ và một dự án có thể mở, chỉnh sửa, chạy thử.

Unity Hub giúp cài đặt và quản lý phiên bản Unity, còn Unity Editor cung cấp các công cụ để xây dựng trò chơi.

Việc cài đặt đúng ngay từ đầu giúp tránh những vấn đề phổ biến như không mở được dự án, thiếu công cụ build, xung đột package hoặc không tương thích phiên bản.

Sau bài học, người học sẽ có một dự án Unity hoạt động, sẵn sàng cho các bài thực hành thuộc Mission Player Control.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Phân biệt chức năng của Unity Hub và Unity Editor.
2. Cài đặt và quản lý phiên bản Unity Editor bằng Unity Hub.
3. Xác định và lựa chọn các Build Modules phù hợp với nền tảng phát triển.
4. Tạo và mở một dự án Unity mới.
5. Kiểm tra Console, Package Manager và các thành phần cơ bản của Editor.
6. Phát hiện, phân tích và khắc phục những lỗi cài đặt thông thường.
7. Kiểm chứng khả năng mở lại dự án sau khi đóng Unity.

## 3. Kiến thức nền tảng

### 3.1. Unity Hub là gì?

[Explore the Unity Hub - Unity Learn](https://images.openai.com/static-rsc-4/4tmuMaqAm4j1DFrHInwvsJUwYczesc8Hslq18JWr-PmpFbFz3UQBdmQipWr7kc50eLVJOP185phYJxe3nT-F58sNFPK9uRghjgU_gP5SdxPc1RAD_KBmhyssb7azuf2JTluuAWs2tn4HKP7PX78RB0pFJm67cjWnM7Lvyxy2IwM?purpose=inline)

Unity Hub là ứng dụng quản lý môi trường làm việc với Unity.

Unity Hub hỗ trợ cài đặt nhiều phiên bản Unity Editor, tạo và mở dự án, quản lý các module bổ sung và truy cập tài nguyên học tập.

Ví dụ, trên cùng một máy tính có thể cài đặt nhiều phiên bản Editor để phục vụ các dự án khác nhau.

### 3.2. Unity Editor là gì?

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

Unity Editor là môi trường phát triển trò chơi, nơi người lập trình thiết kế Scene, quản lý GameObject, viết C#, thiết lập Component và chạy thử trò chơi.

Một dự án được mở bằng phiên bản Editor tương thích với cấu hình của dự án đó.

### 3.3. Phân biệt Unity Hub và Unity Editor

| Tiêu chí          | Unity Hub                | Unity Editor                     |
| ----------------- | ------------------------ | -------------------------------- |
| Chức năng chính   | Quản lý môi trường Unity | Phát triển trò chơi              |
| Cài đặt phiên bản | Có                       | Không phải chức năng chính       |
| Quản lý dự án     | Tạo và mở dự án          | Chỉnh sửa nội dung dự án         |
| Thiết kế Scene    | Không                    | Có                               |
| Lập trình C#      | Không                    | Có, thông qua trình soạn thảo mã |
| Chạy thử trò chơi | Không                    | Có, bằng Play Mode               |

### 3.4. Các thành phần của một môi trường Unity

\#chatgpt-mermaid-\_r_kv\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_kv\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_kv\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_kv\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_kv\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_kv\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_kv\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_kv\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_kv\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_kv\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kv\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kv\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_kv\_ p{margin:0;}#chatgpt-mermaid-\_r_kv\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_kv\_ .label text,#chatgpt-mermaid-\_r_kv\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ .node rect,#chatgpt-mermaid-\_r_kv\_ .node circle,#chatgpt-mermaid-\_r_kv\_ .node ellipse,#chatgpt-mermaid-\_r_kv\_ .node polygon,#chatgpt-mermaid-\_r_kv\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .rough-node .label text,#chatgpt-mermaid-\_r_kv\_ .node .label text,#chatgpt-mermaid-\_r_kv\_ .image-shape .label,#chatgpt-mermaid-\_r_kv\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_kv\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .rough-node .label,#chatgpt-mermaid-\_r_kv\_ .node .label,#chatgpt-mermaid-\_r_kv\_ .image-shape .label,#chatgpt-mermaid-\_r_kv\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_kv\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_kv\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kv\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kv\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_kv\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_kv\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kv\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kv\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_kv\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_kv\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kv\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_kv\_ .icon-shape,#chatgpt-mermaid-\_r_kv\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_kv\_ .icon-shape p,#chatgpt-mermaid-\_r_kv\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_kv\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_kv\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kv\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_kv\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_kv\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_kv\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_kv\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_kv\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_kv\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kv\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_kv\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kv\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_kv\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_kv\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_kv\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_kv\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .node rect,#chatgpt-mermaid-\_r_kv\_ .node circle,#chatgpt-mermaid-\_r_kv\_ .node ellipse,#chatgpt-mermaid-\_r_kv\_ .node polygon,#chatgpt-mermaid-\_r_kv\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_kv\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_kv\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_kv\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_kv\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kv\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Unity HubUnity Editor 6.3Dự án UnityBuild ModulesScenes và GameObjectsScripts và AssetsPackagesPlay ModeKiểm tra kết quả

Sơ đồ cho thấy Unity Hub quản lý việc cài đặt Editor, trong khi Editor là nơi làm việc trực tiếp với dự án.

Dự án chứa Scene, GameObject, Script, Asset và các package phụ thuộc. Sau khi thiết lập đầy đủ, có thể sử dụng Play Mode để kiểm tra hoạt động.

## 4. Chuẩn bị trước khi cài đặt

Trước khi bắt đầu, cần kiểm tra một số điều kiện cơ bản.

| Yêu cầu                                        | Mục đích                                |
| ---------------------------------------------- | --------------------------------------- |
| Máy tính Windows, macOS hoặc Linux được hỗ trợ | Chạy Unity Editor                       |
| Kết nối Internet                               | Tải Hub, Editor và package              |
| Dung lượng lưu trữ trống                       | Cài Editor và lưu dữ liệu dự án         |
| Tài khoản Unity                                | Đăng nhập và quản lý quyền sử dụng      |
| Quyền cài đặt phần mềm                         | Cài Unity Hub và các thành phần bổ sung |
| Trình soạn thảo C# phù hợp                     | Viết và chỉnh sửa Script                |

Không cần cài đặt tất cả các module ngay từ đầu. Chỉ nên cài những thành phần cần thiết cho nền tảng dự kiến phát triển.

## 5. Thực hành cài đặt Unity

### 5.1. Bước 1 — Cài đặt Unity Hub

[Install the Unity Hub and Editor - Unity Learn](https://images.openai.com/static-rsc-4/YAMZMxaYwFfvwHnzJJmCqoegqk6nr1q5haHkwRsBi2YOJdYvSjcdcq4LsrrQKizXCMRobX_mOLCAS3LZulLbfRWuWfD18avcunKz12ulvISOgL_aRjfXAFLw0NO0rx3lbgqnKW9_oupqaJKB91QVcMcmTtO-_ishiF8_s1tM0Ew?purpose=inline)

[Troubleshooting: Accessing and Configuring Unity – Emerson College Technology & Media](https://images.openai.com/static-rsc-4/9qMDyuGMbnT9jOOWwvE_gVn_dWxDfk7C4GPXZuIPHK82GDank53JnAmorO9i_Adv0CunAxjitq4K8jXJAp3TIpmIgvT07b-VO_Pu-6IsduWv1Z7nuBepXS_vA-XcqhPRzurA1HcWTsdWyvxJHOWHFOJuZu41bqhIcVOo0uoqn8M?purpose=inline)

4

Thực hiện:

1. Truy cập [trang tải Unity](https://unity.com/download?utm_source=chatgpt.com).
2. Tải phiên bản Unity Hub phù hợp với hệ điều hành.
3. Chạy tệp cài đặt và thực hiện các bước hướng dẫn.
4. Mở Unity Hub sau khi cài đặt.
5. Đăng nhập tài khoản Unity nếu được yêu cầu.

Checkpoint 1: Unity Hub khởi động thành công và có thể truy cập phần quản lý Projects và Installs.

### 5.2. Bước 2 — Cài đặt Unity Editor

Trong Unity Hub, tìm mục Installs để xem danh sách các phiên bản Editor đang được cài đặt.

[Fastai to Unity Beginner Tutorial Pt. 2 – Christian Mills](https://images.openai.com/static-rsc-4/d5FJvSv4D8qSvxg1KmJgTidXXts8e1JUvchAk4RM5RQRB_GLek1w2gJHRl2tnHK1-HbhBnHMOmTMMZ4xFdyrV9kak8DaedrDMyDZtwfey54dZfGCrl-LW0aU5Gu0Fe4py0YGtRqpBXOURA9JLggxdwEd87glT1zyqBYkk753OgA?purpose=inline)

[christianjmills.com](https://christianjmills.com/posts/fastai-to-unity-tutorial/part-2/?utm_source=chatgpt.com)

Thực hiện:

1. Mở Unity Hub.
2. Chọn `Installs`.
3. Chọn nút thêm hoặc cài đặt Editor.
4. Tìm phiên bản Unity 6.3 phù hợp với dự án.
5. Tiếp tục tới màn hình lựa chọn các module.
6. Chờ quá trình cài đặt hoàn tất.

Trong trường hợp phiên bản yêu cầu không xuất hiện ở danh sách mặc định, có thể kiểm tra [Unity Download Archive](https://unity.com/releases/editor/archive?utm_source=chatgpt.com).

Lưu ý: Không nên mặc định sử dụng phiên bản mới nhất cho mọi dự án. Dự án có sẵn có thể yêu cầu một phiên bản Editor cụ thể.

Checkpoint 2: Unity Hub hiển thị Editor đã cài đặt trong danh sách Installs.

### 5.3. Bước 3 — Lựa chọn Build Modules

Build Module là thành phần bổ sung giúp Unity xuất trò chơi sang một nền tảng cụ thể.

| Module                | Mục đích                             |
| --------------------- | ------------------------------------ |
| Android Build Support | Build ứng dụng hoặc trò chơi Android |
| iOS Build Support     | Hỗ trợ quy trình build cho iOS       |
| Web Build Support     | Xuất trò chơi chạy trên trình duyệt  |
| Windows Build Support | Build ứng dụng Windows               |
| Linux Build Support   | Build ứng dụng Linux                 |
| macOS Build Support   | Build ứng dụng macOS                 |

Việc hỗ trợ mỗi nền tảng còn phụ thuộc vào hệ điều hành, toolchain và phiên bản Unity. Chẳng hạn, việc hoàn tất build iOS thường cần macOS và Xcode.

Đối với bài thực hành Player Control chỉ chạy trong Unity Editor, chưa cần cài đặt tất cả các module.

Nếu muốn bổ sung sau:

1. Mở `Unity Hub → Installs`.
2. Tìm phiên bản Editor đã cài.
3. Mở menu quản lý Editor.
4. Chọn `Add modules` nếu được hỗ trợ.
5. Đánh dấu module cần thiết và tiến hành cài đặt.

### 5.4. Bước 4 — Tạo dự án Unity

[docs.multiset.ai](https://docs.multiset.ai/quick-access/multiset-unity-sdk?utm_source=chatgpt.com)

Sau khi cài đặt Editor, tạo một dự án để kiểm tra môi trường.

Thực hiện:

1. Chuyển sang `Projects`.
2. Chọn `New project`.
3. Chọn phiên bản Editor vừa cài đặt.
4. Lựa chọn template 3D phù hợp.
5. Đặt tên dự án, ví dụ `PlayerControlPractice`.
6. Chọn thư mục lưu dự án.
7. Chọn `Create project`.

Các template có thể sử dụng:

| Template                        | Đặc điểm                                            |
| ------------------------------- | --------------------------------------------------- |
| 3D với Built-in Render Pipeline | Phù hợp thực hành 3D cơ bản nếu template này có sẵn |
| Universal 3D / URP              | Dùng Universal Render Pipeline                      |
| 2D                              | Phù hợp trò chơi hai chiều                          |

Đối với bài Player Control 3D, nên sử dụng template phù hợp với dự án thực hành đang theo học.

Render Pipeline quyết định cách Unity xử lý và hiển thị đồ họa. Việc chọn khác pipeline có thể làm thay đổi cách thiết lập vật liệu, shader và ánh sáng.

Checkpoint 3: Dự án được tạo và Unity Editor mở thành công.

### 5.5. Bước 5 — Làm quen giao diện Unity Editor

[【Unity入門】初心者がまず覚えるべき基本操作と用語集！インストールから画面の見方まで｜MEキャンパス](https://images.openai.com/static-rsc-4/w6_EOP3hmfo7StolP7CpfRhFE0W4CyeI5sUjL_WMtqqz1SnkqiSydzsyFWbxWLGWof_m2oBz-4ewspmVuQRLDwUdjTT04JR6eBkMQOHiqDkPZ1udyPKrQNSSzVxipbgVWNICKygnbwEACi7J9LT_JzvosT8x-dVD5YDxge4VahQ?purpose=inline)

[note.com](https://note.com/mecampus/n/n475750953bb3?utm_source=chatgpt.com)

Những khu vực quan trọng:

| Thành phần | Chức năng                                          |
| ---------- | -------------------------------------------------- |
| Hierarchy  | Hiển thị GameObject trong Scene hiện tại           |
| Scene View | Không gian thiết kế và bố trí đối tượng            |
| Game View  | Hiển thị trò chơi từ góc nhìn Camera khi chạy thử  |
| Inspector  | Xem và điều chỉnh Component                        |
| Project    | Quản lý Asset của dự án                            |
| Console    | Hiển thị log, cảnh báo và lỗi                      |
| Toolbar    | Chứa các công cụ điều khiển, trong đó có Play Mode |

Ví dụ:

Khi chọn một GameObject trong Hierarchy, Inspector sẽ hiển thị các Component của đối tượng đó.

Một GameObject 3D cơ bản có thể bao gồm:

- `Transform`: vị trí, góc xoay và tỷ lệ.
- `Mesh Filter`: dữ liệu hình học.
- `Mesh Renderer`: hiển thị hình học với vật liệu.
- `Collider`: phục vụ phát hiện va chạm.

Không phải mọi GameObject đều chứa đầy đủ các Component trên.

### 5.6. Bước 6 — Kiểm tra Console và Package Manager

Unity sử dụng nhiều package để cung cấp tính năng cho dự án. Khi mở dự án lần đầu, Editor có thể cần nhập Asset, biên dịch Script và xử lý package.

Kiểm tra Console:

1. Mở `Window → General → Console`.
2. Quan sát các thông báo.
3. Phân biệt lỗi, cảnh báo và log thông thường.
4. Xác định xem có lỗi nghiêm trọng ảnh hưởng đến việc chạy dự án hay không.

Kiểm tra Package Manager:

1. Mở `Window → Package Management → Package Manager`.
2. Xem các package đang sử dụng.
3. Kiểm tra package báo lỗi hoặc thiếu dependency.
4. Chỉ thay đổi package khi có lý do cụ thể.

| Loại thông báo | Ý nghĩa                     | Hướng xử lý                                       |
| -------------- | --------------------------- | ------------------------------------------------- |
| Log            | Thông tin hoạt động         | Đọc nếu cần xác minh                              |
| Warning        | Cảnh báo rủi ro             | Xem nguyên nhân và đánh giá ảnh hưởng             |
| Error          | Lỗi cần xử lý               | Đọc chi tiết và khắc phục                         |
| Package error  | Lỗi package hoặc dependency | Kiểm tra kết nối, phiên bản và trạng thái package |

Checkpoint 4: Dự án đã xử lý xong các bước nhập dữ liệu ban đầu, không có lỗi nghiêm trọng ngăn cản thao tác hoặc chạy thử.

### 5.7. Bước 7 — Kiểm tra Scene và Play Mode

Tạo một ví dụ nhỏ để xác nhận Unity hoạt động bình thường.

Thực hiện:

1. Mở Scene hiện tại hoặc tạo Scene mới.
2. Trong Hierarchy, tạo một `3D Object → Cube`.
3. Chọn Cube để mở Inspector.
4. Đặt `Transform → Position` thành `(0, 0, 0)`.
5. Đảm bảo Scene có Camera hướng về Cube.
6. Chuyển sang Game View.
7. Nhấn nút `Play`.
8. Quan sát Cube trong Game View.
9. Thoát Play Mode.

Nếu Camera không nhìn thấy Cube, hãy kiểm tra vị trí, hướng nhìn của Camera và các thiết lập hiển thị.

Kết quả mong đợi: Cube được hiển thị trong Scene, có thể quan sát trong Game View khi Camera được cấu hình phù hợp.

### 5.8. Bước 8 — Lưu và mở lại dự án

Bước cuối cùng nhằm xác minh môi trường đã được thiết lập ổn định.

1. Lưu Scene bằng `Ctrl + S` trên Windows hoặc `Cmd + S` trên macOS.
2. Lưu Scene vào thư mục `Assets` của dự án, ví dụ `Assets/Scenes/TestScene.unity`.
3. Thoát Play Mode nếu đang chạy.
4. Đóng Unity Editor.
5. Mở lại dự án bằng Unity Hub.
6. Mở Scene vừa lưu và kiểm tra Cube.
7. Quan sát Console sau khi dự án được tải lại.

Checkpoint 5: Dự án mở lại được, Scene vẫn tồn tại và không xuất hiện lỗi nghiêm trọng.

## 6. Kiểm chứng kết quả thực hành

Sau khi cài đặt xong, cần kiểm tra cả trạng thái phần mềm lẫn khả năng làm việc với dự án.

| Tiêu chí     | Kết quả mong đợi                                      |
| ------------ | ----------------------------------------------------- |
| Unity Hub    | Khởi động bình thường                                 |
| Unity Editor | Phiên bản phù hợp được cài đặt                        |
| Dự án        | Có thể tạo và mở                                      |
| Scene        | Có thể thêm GameObject                                |
| Inspector    | Có thể thay đổi Transform                             |
| Play Mode    | Có thể khởi chạy và thoát                             |
| Console      | Không có lỗi nghiêm trọng ảnh hưởng đến bài thực hành |
| Mở lại dự án | Dữ liệu Scene đã lưu vẫn còn                          |

### Mẫu ghi chép thực hành

| Nội dung         | Ghi chép                           |
| ---------------- | ---------------------------------- |
| Phiên bản Editor | Unity 6.3, ghi rõ bản patch        |
| Render Pipeline  | Built-in hoặc URP                  |
| Tên dự án        | PlayerControlPractice              |
| Kết quả mong đợi | Tạo và chạy được Scene chứa Cube   |
| Kết quả thực tế  | Điền sau khi thực hiện             |
| Lỗi phát sinh    | Ghi lại nếu có                     |
| Cách giải quyết  | Trình bày thao tác sửa lỗi         |
| Minh chứng       | Ảnh Unity Hub, Editor hoặc Console |

Việc ghi lại kết quả thực tế giúp phân biệt một thao tác đã thực hiện với một thao tác đã được kiểm chứng thành công.

## 7. Lỗi thường gặp và cách khắc phục

### 7.1. Mở dự án bằng phiên bản không tương thích

Hiện tượng: Dự án không mở được, báo lỗi package, hoặc xuất hiện cảnh báo khi chuyển phiên bản.

Nguyên nhân có thể: Phiên bản Unity Editor đang sử dụng không tương thích với dự án.

Cách xử lý:

1. Xác định phiên bản Editor mà dự án yêu cầu.
2. Kiểm tra danh sách Editor trong Unity Hub.
3. Cài phiên bản phù hợp nếu chưa có.
4. Sao lưu dự án trước khi thực hiện nâng cấp.
5. Mở lại và kiểm tra Console.

Có thể xem phiên bản được ghi trong `ProjectSettings/ProjectVersion.txt` của dự án.

### 7.2. Thiếu Build Module

Hiện tượng: Không thể chọn hoặc build cho nền tảng mong muốn.

Nguyên nhân có thể: Unity Editor chưa được cài module tương ứng hoặc thiếu công cụ nền tảng.

Cách xử lý: Kiểm tra module trong Unity Hub, cài đặt thành phần cần thiết rồi kiểm tra lại thiết lập build.

### 7.3. Package bị lỗi

Hiện tượng: Package Manager xuất hiện thông báo không thể tải, cài đặt hoặc giải quyết dependency.

Nguyên nhân có thể: Kết nối mạng, package không tương thích hoặc dữ liệu phụ thuộc có vấn đề.

Cách xử lý:

1. Đọc thông báo lỗi chi tiết.
2. Kiểm tra kết nối Internet nếu lỗi liên quan đến tải package.
3. Xác định package gây lỗi.
4. Kiểm tra phiên bản và các dependency liên quan.
5. Thực hiện thay đổi phù hợp và mở lại dự án để kiểm chứng.

Không nên xóa hàng loạt file hoặc thư mục dự án khi chưa xác định được nguyên nhân.

### 7.4. Game View không hiển thị đúng

Hiện tượng: Cube có trong Scene View nhưng không thấy trong Game View.

Nguyên nhân có thể:

- Camera không hướng về Cube.
- Cube nằm ngoài vùng quan sát.
- GameObject bị vô hiệu hóa.
- Renderer bị tắt hoặc đối tượng không được Camera hiển thị.

Cách xử lý: Kiểm tra GameObject trong Hierarchy, các giá trị Transform, Camera và Component hiển thị.

### 7.5. Quy trình debug chuẩn

\#chatgpt-mermaid-\_r_ls\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ls\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ls\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ls\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ls\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ls\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ls\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ls\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ls\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ls\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ls\_ p{margin:0;}#chatgpt-mermaid-\_r_ls\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ls\_ .label text,#chatgpt-mermaid-\_r_ls\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .node rect,#chatgpt-mermaid-\_r_ls\_ .node circle,#chatgpt-mermaid-\_r_ls\_ .node ellipse,#chatgpt-mermaid-\_r_ls\_ .node polygon,#chatgpt-mermaid-\_r_ls\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .rough-node .label text,#chatgpt-mermaid-\_r_ls\_ .node .label text,#chatgpt-mermaid-\_r_ls\_ .image-shape .label,#chatgpt-mermaid-\_r_ls\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ls\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .rough-node .label,#chatgpt-mermaid-\_r_ls\_ .node .label,#chatgpt-mermaid-\_r_ls\_ .image-shape .label,#chatgpt-mermaid-\_r_ls\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ls\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ls\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ls\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ls\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ls\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ls\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ls\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ls\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ls\_ .icon-shape,#chatgpt-mermaid-\_r_ls\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ls\_ .icon-shape p,#chatgpt-mermaid-\_r_ls\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ls\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ls\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ls\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ls\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ls\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ls\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ls\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ls\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ls\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .node rect,#chatgpt-mermaid-\_r_ls\_ .node circle,#chatgpt-mermaid-\_r_ls\_ .node ellipse,#chatgpt-mermaid-\_r_ls\_ .node polygon,#chatgpt-mermaid-\_r_ls\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ls\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ls\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ls\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiĐọc Console và thông báoĐưa ra giả thuyết nguyên nhânChỉ thay đổi một yếu tốKiểm tra lạiLỗi đã được xử lý?Ghi lại nguyên nhân và cáchsửaChưaRồi

Quy trình này giúp tránh sửa nhiều thiết lập cùng lúc, khiến người học không biết chính xác thao tác nào đã giải quyết vấn đề.

## 8. Bài tập củng cố

### Bài tập 1 — Kiểm tra môi trường Unity

Yêu cầu: Mở Unity Hub, xác định phiên bản Editor đang sử dụng và ghi lại các module đã cài đặt.

Tiêu chí hoàn thành: Có bảng thông tin phiên bản, module và ảnh màn hình minh chứng.

### Bài tập 2 — Thay đổi GameObject

Yêu cầu: Tạo một Cube trong Scene và thay đổi thuộc tính `Position` trong Inspector.

Trước khi thay đổi, dự đoán Cube sẽ di chuyển theo hướng nào khi tăng giá trị trục X. Sau đó quan sát trong Scene View để kiểm chứng.

Tiêu chí hoàn thành: Giải thích được mối liên hệ giữa Transform và vị trí của GameObject.

### Bài tập 3 — Kiểm tra khả năng tái lập môi trường

Yêu cầu: Lưu Scene, đóng Unity Editor rồi mở lại dự án.

Tiêu chí hoàn thành: Scene được lưu đúng, các GameObject vẫn tồn tại và dự án có thể tiếp tục làm việc.

### Bài tập mở rộng — Chuẩn bị cho Player Control

Tạo một Scene gồm Plane làm mặt đất và Capsule đại diện cho nhân vật.

Không cần viết Script điều khiển ở bài này. Mục tiêu là thực hành tạo đối tượng, chỉnh Transform, lưu Scene và kiểm chứng Game View.

## 9. Checklist hoàn thành

- Cài đặt và mở được Unity Hub.
- Cài đặt phiên bản Unity Editor phù hợp.
- Phân biệt được Unity Hub với Unity Editor.
- Xác định được các Build Modules cần thiết.
- Tạo được dự án Unity 3D.
- Giải thích được chức năng của Scene, GameObject và Component.
- Sử dụng được Hierarchy, Inspector, Game View và Console.
- Kiểm tra được Package Manager.
- Tạo và chạy thử Scene chứa Cube.
- Lưu và mở lại được dự án.
- Ghi lại ít nhất một ảnh minh chứng.
- Phân tích được một lỗi thường gặp và cách kiểm tra.

## 10. Tổng kết kiến thức

Ba nội dung quan trọng nhất trong bài:

Thứ nhất, Unity Hub và Unity Editor có vai trò khác nhau. Hub quản lý môi trường cài đặt và dự án; Editor được dùng để xây dựng trò chơi.

Thứ hai, phiên bản Editor và các thành phần phụ thuộc phải phù hợp với dự án. Việc thiếu module hoặc package không tương thích có thể làm gián đoạn quá trình phát triển.

Thứ ba, cài đặt thành công cần được kiểm chứng bằng thực hành. Một môi trường được xem là sẵn sàng khi dự án có thể mở, Scene có thể chỉnh sửa, Play Mode hoạt động và dữ liệu đã lưu có thể được mở lại.

## 11. Câu hỏi ôn tập trắc nghiệm

5 câu hỏi · Mỗi câu 1 điểm

0/5 đã trả lời

Câu 1. Công cụ nào được sử dụng để quản lý nhiều phiên bản Unity Editor trên cùng một máy tính?

A. Scene View

B. Unity Hub

C. Inspector

D. Package Manager

Câu 2. Một dự án đang sử dụng phiên bản Unity khác với Editor đã cài. Nên làm gì trước khi nâng cấp dự án?

A. Xóa tất cả package

B. Tạo lại mọi Scene

C. Đổi ngay sang Editor mới nhất

D. Kiểm tra phiên bản yêu cầu và sao lưu dự án

Câu 3. Khi muốn xuất trò chơi sang Android nhưng thiếu hỗ trợ nền tảng, cần kiểm tra thành phần nào?

A. Android Build Support

B. Mesh Renderer

C. Scene View

D. Transform

Câu 4. Một Cube xuất hiện trong Scene View nhưng không thấy trong Game View. Điều nào nên kiểm tra trước?

A. Tên thư mục dự án

B. Tài khoản Unity Hub

C. Vị trí Cube và hướng nhìn Camera

D. Dung lượng màn hình

Câu 5. Cách nào kiểm chứng tốt nhất việc thiết lập môi trường Unity đã hoạt động ổn định?

A. Chỉ kiểm tra biểu tượng Unity trên Desktop

B. Tạo Scene, lưu dự án, đóng và mở lại để kiểm tra

C. Chỉ đăng nhập Unity Hub

D. Cài toàn bộ module hiện có

Nộp bài và xem đáp án