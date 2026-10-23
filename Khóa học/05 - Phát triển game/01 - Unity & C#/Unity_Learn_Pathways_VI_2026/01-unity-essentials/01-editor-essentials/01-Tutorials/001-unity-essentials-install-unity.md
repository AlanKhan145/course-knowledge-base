# Bài 01 — Unity Essentials: Install Unity

Unity Essentials · Mission 1: Editor Essentials · Tutorial · Unity 6.3 LTS

[Explore the Unity Hub - Unity Learn](https://images.openai.com/static-rsc-4/4tmuMaqAm4j1DFrHInwvsJUwYczesc8Hslq18JWr-PmpFbFz3UQBdmQipWr7kc50eLVJOP185phYJxe3nT-F58sNFPK9uRghjgU_gP5SdxPc1RAD_KBmhyssb7azuf2JTluuAWs2tn4HKP7PX78RB0pFJm67cjWnM7Lvyxy2IwM?purpose=inline)

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

## 1. Tổng quan bài học

Unity là một nền tảng phát triển ứng dụng tương tác thời gian thực (real-time development platform), được sử dụng để xây dựng trò chơi 2D, 3D, ứng dụng thực tế ảo (VR), thực tế tăng cường (AR), mô phỏng và nhiều loại trải nghiệm tương tác khác.

Để phát triển ứng dụng bằng Unity, trước tiên cần chuẩn bị môi trường làm việc gồm Unity Hub, Unity Editor, tài khoản Unity ID và một giấy phép sử dụng (license) hợp lệ.

Bài học tập trung vào toàn bộ quy trình từ lựa chọn gói Unity, kiểm tra cấu hình máy tính đến cài đặt và khởi chạy Unity Editor thành công.

### Kết quả cần đạt

Sau khi hoàn thành, người học có thể:

- Phân biệt Unity Hub và Unity Editor.
- Lựa chọn gói Unity phù hợp với nhu cầu.
- Đăng ký, đăng nhập Unity ID và kích hoạt license.
- Cài đặt Unity 6.3 LTS qua Unity Hub.
- Lựa chọn và quản lý các module cần thiết.
- Xác minh môi trường Unity hoạt động bình thường.
- Xác định và khắc phục những lỗi cài đặt phổ biến.

Bài Unity Learn chính thức tập trung vào chọn gói sử dụng, tạo Unity ID và cài đặt/khởi chạy Editor. Các bài thực hành tạo project và kiểm tra môi trường ở đây được bổ sung để người học tự kiểm chứng việc cài đặt.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



## 2. Hiểu hệ sinh thái Unity

### 2.1. Unity Hub là gì?

Unity Hub là ứng dụng quản lý trung tâm của Unity. Người dùng không cần truy cập từng thư mục cài đặt thủ công để quản lý các phiên bản Editor.

Unity Hub thực hiện các nhiệm vụ:

| Chức năng  | Mô tả                                                  |
| ---------- | ------------------------------------------------------ |
| `Projects` | Tạo, mở và quản lý dự án Unity                         |
| `Installs` | Cài đặt, quản lý nhiều phiên bản Unity Editor          |
| `Licenses` | Kiểm tra và kích hoạt giấy phép sử dụng                |
| `Learn`    | Truy cập tài nguyên học tập khi được hỗ trợ            |
| `Settings` | Cấu hình ứng dụng, vị trí cài đặt và các tùy chọn khác |

Ví dụ: Một máy tính có thể cài Unity 2022.3, Unity 6.0 và Unity 6.3. Unity Hub giúp quản lý các bản cài này mà không cần gỡ bản cũ trước khi cài bản mới.

### 2.2. Unity Editor là gì?

Unity Editor là môi trường trực tiếp xây dựng và kiểm thử trò chơi.

Các chức năng chính của Unity Editor gồm:

- Thiết kế thế giới 2D và 3D.
- Tạo, sắp xếp và điều chỉnh GameObject.
- Gắn Component để bổ sung thuộc tính và hành vi.
- Viết và tích hợp script C#.
- Quản lý vật liệu, ánh sáng, âm thanh và animation.
- Chạy thử trò chơi trong Play mode.
- Chuẩn bị và build ứng dụng cho nền tảng đích.

Điểm khác biệt quan trọng: Unity Hub quản lý môi trường phát triển; Unity Editor là nơi tạo ra nội dung trò chơi.

### 2.3. Mối quan hệ giữa các thành phần

\#chatgpt-mermaid-\_r_ua\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ua\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ua\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ua\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ua\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ua\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ua\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ua\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ua\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ua\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ua\_ p{margin:0;}#chatgpt-mermaid-\_r_ua\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ua\_ .label text,#chatgpt-mermaid-\_r_ua\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .node rect,#chatgpt-mermaid-\_r_ua\_ .node circle,#chatgpt-mermaid-\_r_ua\_ .node ellipse,#chatgpt-mermaid-\_r_ua\_ .node polygon,#chatgpt-mermaid-\_r_ua\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .rough-node .label text,#chatgpt-mermaid-\_r_ua\_ .node .label text,#chatgpt-mermaid-\_r_ua\_ .image-shape .label,#chatgpt-mermaid-\_r_ua\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ua\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .rough-node .label,#chatgpt-mermaid-\_r_ua\_ .node .label,#chatgpt-mermaid-\_r_ua\_ .image-shape .label,#chatgpt-mermaid-\_r_ua\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ua\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ua\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ua\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ua\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ua\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ua\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ua\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ua\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ua\_ .icon-shape,#chatgpt-mermaid-\_r_ua\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ua\_ .icon-shape p,#chatgpt-mermaid-\_r_ua\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ua\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ua\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ua\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ua\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ua\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ua\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ua\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ua\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ua\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .node rect,#chatgpt-mermaid-\_r_ua\_ .node circle,#chatgpt-mermaid-\_r_ua\_ .node ellipse,#chatgpt-mermaid-\_r_ua\_ .node polygon,#chatgpt-mermaid-\_r_ua\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ua\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ua\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ua\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Unity IDUnity HubLicenseUnity Editor 6.3ProjectScenesAssetsPackagesBuild ModulesWindows / Android / iOS /Web

Giải thích sơ đồ:

Unity ID dùng để xác thực tài khoản. Unity Hub quản lý giấy phép, bản cài Editor và các project. Mỗi project chứa tài nguyên, scene, cấu hình và các package cần thiết. Các build module bổ sung khả năng tạo ứng dụng cho từng nền tảng cụ thể.

Các nền tảng có yêu cầu riêng: ví dụ, cài iOS Build Support không thay thế yêu cầu sử dụng Xcode trên macOS để hoàn thiện quy trình build iOS.

## 3. Lựa chọn gói Unity phù hợp

Trước khi cài Unity, cần xác định loại license phù hợp. Không phải mọi người dùng đều cần mua Unity Pro.

### 3.1. Các gói phổ biến

| Gói              | Đối tượng                                               | Đặc điểm                                    |
| ---------------- | ------------------------------------------------------- | ------------------------------------------- |
| Unity Personal   | Người học, cá nhân, nhà phát triển độc lập đủ điều kiện | Miễn phí                                    |
| Unity Student    | Học sinh, sinh viên đủ điều kiện                        | Miễn phí, có thêm quyền lợi giáo dục        |
| Unity Pro        | Nhà phát triển chuyên nghiệp và doanh nghiệp            | Trả phí                                     |
| Unity Enterprise | Doanh nghiệp lớn                                        | Có hỗ trợ và quyền lợi doanh nghiệp mở rộng |
| Unity Industry   | Tổ chức có hoạt động công nghiệp thuộc diện yêu cầu     | Dành cho ứng dụng công nghiệp               |

Tính đến tháng 10/2026, Unity Personal có ngưỡng đủ điều kiện phổ biến là dưới 200.000 USD doanh thu và vốn huy động trong 12 tháng trước đó. Điều kiện cụ thể phụ thuộc loại hình sử dụng và đối tượng sử dụng Unity.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://unity.com\&sz=32)

Unity

+1



### 3.2. Unity Personal

Unity Personal phù hợp khi bắt đầu học lập trình game hoặc phát triển dự án cá nhân.

Với gói này, người học có thể xây dựng trò chơi 2D, 3D, lập trình C#, tạo prototype và xuất bản ứng dụng trên các nền tảng được phép sử dụng.

Unity Personal không có nghĩa là chỉ được tạo sản phẩm phi thương mại. Tuy nhiên, việc sử dụng phải tuân thủ điều kiện doanh thu, tài chính và các điều khoản cấp phép hiện hành.

### 3.3. Unity Student

Unity Student cung cấp các quyền lợi dành cho người học đã được xác minh tư cách học sinh, sinh viên.

Các quyền lợi được Unity công bố gồm quyền sử dụng Unity Pro Editor cho mục đích hợp lệ, một số tài nguyên Asset Store, công cụ hỗ trợ và dịch vụ học tập.

Quy trình đăng ký:

1. Truy cập [Unity Student Plan](https://unity.com/products/unity-student?utm_source=chatgpt.com).
2. Chọn loại hình giáo dục phù hợp.
3. Đăng nhập Unity ID.
4. Thực hiện xác minh tình trạng học tập qua SheerID.
5. Nhận hướng dẫn kích hoạt sau khi đủ điều kiện.
6. Kích hoạt Student license theo chỉ dẫn.

Unity Student có thời hạn một năm và có thể gia hạn khi vẫn đáp ứng điều kiện.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://unity.com\&sz=32)

Unity



Khuyến nghị: Để bắt đầu học, Unity Personal là lựa chọn đơn giản. Nếu đủ điều kiện Unity Student, có thể cân nhắc đăng ký để sử dụng thêm các quyền lợi giáo dục.

## 4. Kiểm tra yêu cầu hệ thống Unity 6.3

Không nên cài Unity trước khi xác định máy tính đáp ứng yêu cầu của Editor.

### 4.1. Hệ điều hành và phần cứng

Theo tài liệu Unity 6.3 LTS:

| Thành phần  | Yêu cầu hoặc khuyến nghị                                       |
| ----------- | -------------------------------------------------------------- |
| Windows     | Windows 10 từ 21H1 cho x64; có hỗ trợ Windows 11 Arm64 từ 21H2 |
| macOS       | macOS Ventura 13 trở lên                                       |
| Linux       | Ubuntu 22.04 hoặc 24.04                                        |
| RAM         | Unity khuyến nghị tối thiểu 8 GB                               |
| GPU Windows | GPU hỗ trợ DirectX 10/11/12 hoặc Vulkan                        |
| GPU macOS   | Hỗ trợ Metal                                                   |
| GPU Linux   | Hỗ trợ OpenGL 3.2+ hoặc Vulkan                                 |
| Ổ đĩa       | Ưu tiên SSD và đủ dung lượng cho Editor, module và project     |

Đây là thông số hỗ trợ được công bố cho Unity 6.3. Hiệu năng thực tế phụ thuộc vào quy mô project, tài nguyên và các hiệu ứng đồ họa sử dụng.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



Về mặt thực hành, có thể cân nhắc máy tính 16 GB RAM, ổ SSD và GPU có driver được cập nhật để có trải nghiệm thuận lợi hơn khi làm các project 3D. Đây là khuyến nghị học tập, không phải yêu cầu bắt buộc do Unity công bố.

### 4.2. Cách xem cấu hình trên Windows

Mở `Settings > System > About` để kiểm tra:

- Tên và kiến trúc CPU.
- Dung lượng RAM.
- Phiên bản Windows.
- Loại hệ thống 64-bit.

Nhấn `Windows + R`, nhập `dxdiag`, sau đó xem mục `Display` để kiểm tra GPU và thông tin DirectX.

Ngoài ra, dùng `Task Manager > Performance` để xem bộ nhớ, GPU và ổ đĩa.

### 4.3. Chuẩn bị trước khi cài đặt

Trước khi bắt đầu, hãy:

1. Kiểm tra kết nối Internet.
2. Đảm bảo còn đủ dung lượng lưu trữ.
3. Đăng nhập bằng tài khoản có quyền cài đặt phần mềm trên máy.
4. Cập nhật driver GPU khi cần.
5. Chọn một thư mục riêng để lưu Unity Projects.
6. Xác định có cần thêm Android, Web hay iOS Build Support ngay không.

Unity Editor chạy trên hệ điều hành desktop được hỗ trợ. Không thể sử dụng Unity Editor desktop thông thường trực tiếp trên điện thoại Android, iPhone hoặc Chromebook như trên máy tính Windows/macOS/Linux.

## 5. Cài đặt Unity Hub

### Bước 1: Truy cập trang tải chính thức

Mở trang:

[Download Unity — unity.com/download](https://unity.com/download?utm_source=chatgpt.com)

Chọn trình cài đặt tương ứng với hệ điều hành.

Không nên tải các bản Unity không rõ nguồn gốc hoặc công cụ kích hoạt license không chính thức.

### Bước 2: Chạy trình cài đặt

Trên Windows:

1. Mở tệp cài đặt Unity Hub đã tải.
2. Chấp nhận các điều khoản nếu đồng ý.
3. Chọn thư mục cài đặt phù hợp.
4. Tiến hành cài đặt.
5. Mở Unity Hub sau khi hoàn tất.

Trên macOS, sử dụng gói cài đặt được cung cấp cho macOS và thực hiện theo hướng dẫn của hệ điều hành. Với Linux, làm theo hướng dẫn cài Unity Hub dành cho bản phân phối được hỗ trợ.

Các bước và tên nút có thể khác nhau tùy phiên bản Unity Hub. Tham khảo [hướng dẫn cài Hub chính thức](https://docs.unity.com/en-us/hub/install-hub?utm_source=chatgpt.com).

## 6. Tạo Unity ID và kích hoạt giấy phép

### 6.1. Unity ID

Unity ID là tài khoản dùng để truy cập Unity Hub và những dịch vụ có liên quan như Unity Learn, Asset Store hoặc Unity Cloud.

Sau khi mở Unity Hub, chọn đăng nhập hoặc tạo tài khoản.

Nếu chưa có Unity ID:

1. Chọn đăng ký tài khoản mới.
2. Cung cấp các thông tin được yêu cầu.
3. Hoàn tất xác minh tài khoản nếu được yêu cầu.
4. Đăng nhập lại vào Unity Hub.

Unity có thể tự tạo một Organization cá nhân gắn với tài khoản. Organization là phạm vi quản lý các thành viên, quyền truy cập và những dịch vụ được cấp cho tổ chức.

### 6.2. Kích hoạt Unity Personal license

Với Unity Personal, việc đăng nhập Unity Hub thường tự động kích hoạt license.

Để kiểm tra thủ công:

1. Mở Unity Hub.
2. Chọn `Settings > Licenses` hoặc mục `Licenses` tùy giao diện.
3. Xem license hiện có.
4. Nếu chưa kích hoạt, chọn `Add license`.
5. Chọn `Get a free personal license`.
6. Xem và chấp nhận điều khoản để kích hoạt.

Sau đó, quay lại trang License để kiểm tra trạng thái.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### Checkpoint 1

Kết quả cần quan sát:

- Unity Hub đã khởi động.
- Unity ID đã đăng nhập thành công.
- License phù hợp được kích hoạt.
- Không xuất hiện lỗi bắt buộc phải xử lý liên quan đến xác thực tài khoản.

Nếu license chưa hoạt động, chưa nên kết luận rằng việc cài Unity đã hoàn tất.

## 7. Cài đặt Unity Editor 6.3 LTS

Đây là bước quan trọng nhất trong bài học.

### 7.1. Chọn phiên bản Editor

Trong Unity Hub:

1. Mở `Installs`.
2. Nhấn `Install Editor`.
3. Xem danh sách các phiên bản.
4. Chọn phiên bản thuộc nhánh Unity 6.3 LTS phù hợp với hệ điều hành.
5. Nhấn `Install` để tiếp tục.

Nếu không tìm thấy đúng bản phát hành cần thiết, sử dụng mục `Archive` và trang [Unity Download Archive](https://unity.com/releases/editor/archive?utm_source=chatgpt.com). Không chọn bản alpha hoặc beta chỉ vì số phiên bản của chúng lớn hơn.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 7.2. Phân biệt các loại bản phát hành

| Loại             | Ý nghĩa                                      |
| ---------------- | -------------------------------------------- |
| LTS              | Long-Term Support, nhánh được hỗ trợ dài hạn |
| Official release | Bản phát hành chính thức                     |
| Pre-release      | Bản thử nghiệm alpha hoặc beta               |
| Archive          | Kho bản phát hành trước đây                  |

Đối với học tập theo Unity Essentials 6.3, chọn Unity 6.3 LTS để giảm sai khác giữa môi trường thực hành và phiên bản tài liệu.

Không nên tự nâng một dự án đang sử dụng Unity 6.3 sang một major version khác nếu chưa kiểm tra khả năng tương thích.

## 8. Lựa chọn và cài đặt các module

Khi cài Unity Editor, Unity Hub cho phép lựa chọn các thành phần bổ sung (modules).

Không phải tất cả module đều bắt buộc.

### 8.1. Build Module là gì?

Build Module bổ sung công cụ và khả năng tạo bản ứng dụng cho một nền tảng cụ thể.

Ví dụ:

| Module                           | Công dụng                                            |
| -------------------------------- | ---------------------------------------------------- |
| Android Build Support            | Chuẩn bị build ứng dụng Android                      |
| iOS Build Support                | Chuẩn bị project ứng dụng iOS                        |
| Web Build Support                | Build ứng dụng chạy trên web                         |
| Windows Build Support (IL2CPP)   | Hỗ trợ build Windows với IL2CPP trong trường hợp cần |
| Linux Build Support              | Tạo bản build cho Linux trong cấu hình hỗ trợ        |
| Documentation hoặc Language Pack | Tài liệu hoặc gói ngôn ngữ, khi có sẵn               |

Với Android, ngoài Android Build Support còn có các thành phần Android SDK, NDK và OpenJDK cần thiết. Nên ưu tiên bộ công cụ tương thích do Unity Hub cung cấp.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Manual: Android environment setup



### 8.2. Cần chọn những module nào?

Đối với người học Unity lần đầu, nên cài Unity Editor và một công cụ lập trình C# phù hợp trước.

Có thể cài Android hoặc Web Build Support khi thực sự bắt đầu phát triển cho những nền tảng đó.

Không cài mọi module không cần thiết, vì chúng làm tăng dung lượng tải xuống và không mang lại lợi ích trực tiếp cho bài thực hành ban đầu.

### 8.3. Công cụ viết C\#

Unity sử dụng ngôn ngữ lập trình C# cho phần lớn hoạt động lập trình gameplay.

Hai lựa chọn phổ biến:

- Visual Studio: IDE có công cụ lập trình và gỡ lỗi C#.
- Visual Studio Code: Trình biên tập mã nhẹ hơn, cần các extension và cấu hình tích hợp phù hợp.

Trong bài cài đặt Unity Learn, phần DEV TOOLS hướng dẫn chọn Visual Studio trên Windows hoặc Visual Studio Code trên macOS theo các tùy chọn được cung cấp.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



Để khởi chạy Unity Editor và tạo Scene cơ bản, người học chưa bắt buộc phải viết script C#. Tuy nhiên, cài và cấu hình công cụ lập trình sớm sẽ giúp chuẩn bị cho các bài học tiếp theo.

### 8.4. Bắt đầu quá trình cài đặt

Sau khi lựa chọn module:

1. Xem lại các thành phần.
2. Xác nhận cài đặt.
3. Theo dõi trạng thái tại `Downloads` trong Unity Hub.
4. Chỉ tiến hành kiểm tra khi Editor và các module đã cài xong.

Khi hoàn tất, mục `Installs` hiển thị bản Editor tương ứng.

### 8.5. Bổ sung module sau khi cài

Nếu chưa chọn Android Build Support khi cài lần đầu, không cần cài lại toàn bộ Editor.

Mở:

`Unity Hub > Installs > Manage > Add modules`

Chọn module cần thiết rồi nhấn `Install`.

Lưu ý: tính năng thêm module qua Hub có thể không khả dụng đối với các bản Editor đã được cài thủ công ngoài Hub.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### Checkpoint 2

| Điều cần xác minh | Kết quả đúng                               |
| ----------------- | ------------------------------------------ |
| Editor đã có      | Unity 6.3 LTS xuất hiện trong Installs     |
| Trạng thái cài    | Không còn tiến trình cài đặt chưa hoàn tất |
| Module            | Những module cần dùng được liệt kê         |
| Công cụ C#        | Đã chọn hoặc cài đặt một IDE phù hợp       |

## 9. Kiểm tra Unity Editor hoạt động

Việc Unity Hub hiển thị một phiên bản trong danh sách chưa chứng minh rằng môi trường phát triển có thể hoạt động đầy đủ.

Cần mở một project bằng bản Editor đã cài.

### 9.1. Tạo một project kiểm thử

Thực hành bổ sung nhằm xác minh cài đặt, không phải yêu cầu chính của tutorial Install Unity.

Trong Unity Hub:

1. Chọn `Projects`.
2. Nhấn `New project`.
3. Chọn Unity Editor 6.3.
4. Chọn một template 3D cơ bản, chẳng hạn `Universal 3D` nếu có.
5. Đặt tên project: `UnityInstallCheck`.
6. Chọn một thư mục lưu project.
7. Nhấn `Create project`.

Unity Hub sẽ tạo project và mở Unity Editor. Danh sách template có thể thay đổi theo bản Editor.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



### 9.2. Render Pipeline là gì?

Render Pipeline là hệ thống quy định cách Unity xử lý và hiển thị đồ họa.

Ba thuật ngữ thường gặp:

| Pipeline                               | Mô tả                                      |
| -------------------------------------- | ------------------------------------------ |
| Built-in Render Pipeline               | Pipeline truyền thống của Unity            |
| Universal Render Pipeline (URP)        | Pipeline linh hoạt cho nhiều loại thiết bị |
| High Definition Render Pipeline (HDRP) | Pipeline định hướng đồ họa chất lượng cao  |

Đối với project thực hành 3D thông thường, URP là một lựa chọn hợp lý.

Tuy nhiên, không nên thay đổi Render Pipeline của project chỉ để thử nghiệm nếu đã có tài nguyên hoặc tutorial phụ thuộc vào pipeline khác.

### 9.3. Nhận biết các vùng quan trọng của Editor

[【Unity入門】初心者がまず覚えるべき基本操作と用語集！インストールから画面の見方まで｜MEキャンパス](https://images.openai.com/static-rsc-4/w6_EOP3hmfo7StolP7CpfRhFE0W4CyeI5sUjL_WMtqqz1SnkqiSydzsyFWbxWLGWof_m2oBz-4ewspmVuQRLDwUdjTT04JR6eBkMQOHiqDkPZ1udyPKrQNSSzVxipbgVWNICKygnbwEACi7J9LT_JzvosT8x-dVD5YDxge4VahQ?purpose=inline)

[note.com](https://note.com/mecampus/n/n475750953bb3?utm_source=chatgpt.com)

| Thành phần | Công dụng                                         |
| ---------- | ------------------------------------------------- |
| Scene View | Quan sát và chỉnh sửa thế giới game               |
| Game View  | Xem hình ảnh từ camera trò chơi                   |
| Hierarchy  | Danh sách GameObject trong Scene                  |
| Inspector  | Xem và chỉnh sửa Component                        |
| Project    | Quản lý Assets và thư mục dự án                   |
| Console    | Hiển thị lỗi, cảnh báo và thông báo               |
| Toolbar    | Chứa các công cụ điều khiển Editor, gồm Play mode |

### 9.4. Kiểm tra Console

Trong Editor mở:

`Window > General > Console`

Console hiển thị ba nhóm thông điệp chính:

- Log: Thông tin về hoạt động của project.
- Warning: Cảnh báo về vấn đề cần kiểm tra.
- Error: Lỗi có thể khiến một phần chức năng không hoạt động.

Một project mới có thể phát sinh log hoặc warning mà không đồng nghĩa với cài đặt thất bại.

Tuy nhiên, nếu có lỗi biên dịch, lỗi package hoặc lỗi khiến Editor không sử dụng được, cần xử lý trước khi tiếp tục.

### 9.5. Kiểm tra Package Manager

Mở:

`Window > Package Management > Package Manager`

Package Manager dùng để xem, cài đặt, cập nhật hoặc gỡ các package của project.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Manual: Package Manager window



Không cần cài thêm package ngoài yêu cầu chỉ để kiểm tra cài đặt.

### 9.6. Thử lưu và mở lại project

Trong Scene mới hoặc Scene của template, có thể thực hiện thử nghiệm:

1. Tạo một Cube bằng `GameObject > 3D Object > Cube`.
2. Quan sát Cube trong Hierarchy.
3. Chọn Cube và xem Component `Transform` trong Inspector.
4. Lưu Scene bằng `Ctrl + S` trên Windows hoặc `Cmd + S` trên macOS.
5. Đóng Editor.
6. Mở lại project từ Unity Hub.
7. Kiểm tra Cube vẫn tồn tại.

Nếu Scene đã lưu được mở lại đúng và không có lỗi nghiêm trọng, quá trình xác minh môi trường cơ bản đã thành công.

## 10. Quản lý phiên bản Unity trong dự án

Một nguyên tắc rất quan trọng là không phải project Unity nào cũng mở an toàn bằng mọi phiên bản Editor.

### 10.1. Vì sao cần đúng phiên bản?

Các phiên bản Unity có thể thay đổi:

- Cấu trúc và định dạng asset.
- Package và API.
- Thiết lập render.
- Cấu hình build.
- Khả năng tương thích của plugin.

Ví dụ, khi mở project được tạo bằng phiên bản cũ hơn trong Editor mới, Unity có thể cập nhật dữ liệu và nhập lại Assets.

Quá trình đó đôi khi dẫn đến lỗi tương thích.

### 10.2. Quy tắc an toàn

Trước khi đổi phiên bản Editor của project:

1. Xác định bản Unity đang sử dụng.
2. Sao lưu project hoặc tạo một commit trong hệ thống quản lý phiên bản.
3. Kiểm tra các package quan trọng.
4. Mở bản sao bằng Editor mục tiêu.
5. Kiểm tra Console và Scene.
6. Chạy thử tính năng chính.

Không nên thử nghiệm nâng cấp trực tiếp trên bản project duy nhất đang có.

Unity Hub có chức năng chọn phiên bản Editor khi mở project.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



## 11. Các lỗi thường gặp và cách khắc phục

| Hiện tượng                       | Nguyên nhân có thể                                      | Cách kiểm tra và xử lý                                     |
| -------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| Không cài được Unity Hub         | Thiếu quyền cài đặt, bộ cài lỗi                         | Kiểm tra quyền và tải lại từ trang chính thức              |
| Không đăng nhập được Unity ID    | Kết nối, phiên đăng nhập hoặc xác thực gặp vấn đề       | Kiểm tra mạng, đăng nhập lại và xác minh tài khoản         |
| Không kích hoạt được license     | Chưa có license hợp lệ hoặc lỗi xác thực                | Kiểm tra mục Licenses và loại gói                          |
| Editor tải xuống thất bại        | Kết nối không ổn định hoặc ổ đĩa thiếu dung lượng       | Kiểm tra Downloads, kết nối và dung lượng                  |
| Unity Editor không mở            | Yêu cầu hệ thống không đáp ứng, lỗi cài đặt hoặc driver | Kiểm tra cấu hình, phiên bản, driver và log                |
| Không thấy Android Build Support | Chưa cài module                                         | Vào Installs và thêm module                                |
| Project mở bằng phiên bản khác   | Editor yêu cầu chưa được cài                            | Cài đúng phiên bản hoặc kiểm tra khả năng chuyển phiên bản |
| Package Manager báo lỗi          | Kết nối mạng, dependency hoặc package không phù hợp     | Đọc thông báo chi tiết và kiểm tra package                 |
| Script C# không mở trong IDE     | Chưa cài hoặc chưa cấu hình external script editor      | Kiểm tra công cụ lập trình và Preferences                  |

### Quy trình xử lý lỗi

\#chatgpt-mermaid-\_r_uj\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_uj\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_uj\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_uj\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_uj\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_uj\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_uj\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_uj\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_uj\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_uj\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_uj\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_uj\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_uj\_ p{margin:0;}#chatgpt-mermaid-\_r_uj\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_uj\_ .label text,#chatgpt-mermaid-\_r_uj\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ .node rect,#chatgpt-mermaid-\_r_uj\_ .node circle,#chatgpt-mermaid-\_r_uj\_ .node ellipse,#chatgpt-mermaid-\_r_uj\_ .node polygon,#chatgpt-mermaid-\_r_uj\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .rough-node .label text,#chatgpt-mermaid-\_r_uj\_ .node .label text,#chatgpt-mermaid-\_r_uj\_ .image-shape .label,#chatgpt-mermaid-\_r_uj\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_uj\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .rough-node .label,#chatgpt-mermaid-\_r_uj\_ .node .label,#chatgpt-mermaid-\_r_uj\_ .image-shape .label,#chatgpt-mermaid-\_r_uj\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_uj\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_uj\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_uj\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_uj\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_uj\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_uj\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_uj\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_uj\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_uj\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_uj\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_uj\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_uj\_ .icon-shape,#chatgpt-mermaid-\_r_uj\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_uj\_ .icon-shape p,#chatgpt-mermaid-\_r_uj\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_uj\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_uj\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_uj\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_uj\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_uj\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_uj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_uj\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_uj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_uj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_uj\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_uj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_uj\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_uj\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_uj\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_uj\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_uj\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .node rect,#chatgpt-mermaid-\_r_uj\_ .node circle,#chatgpt-mermaid-\_r_uj\_ .node ellipse,#chatgpt-mermaid-\_r_uj\_ .node polygon,#chatgpt-mermaid-\_r_uj\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_uj\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_uj\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_uj\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_uj\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_uj\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiXác định giai đoạn bị lỗiHub hay Editor?Kiểm tra mạng, tài khoản,license và DownloadsKiểm tra phiên bản, cấu hìnhvà ConsoleXác định nguyên nhân có khảnăng nhấtThử một biện pháp sửa lỗiThực hiện lại thao tácĐã hoạt động?Ghi nhận kết quảHubEditorChưaRồi

Nguyên tắc debug: Không thay đổi nhiều thiết lập cùng lúc. Nếu chỉ điều chỉnh một yếu tố cho mỗi lần thử, sẽ dễ xác định điều gì đã khắc phục sự cố.

## 12. Bài thực hành củng cố

### Bài tập A — Kiểm tra môi trường

Mục tiêu: Xác minh máy tính đã cài đặt Unity đúng cách.

Yêu cầu:

1. Mở Unity Hub.
2. Xác định gói license đang sử dụng.
3. Xác định phiên bản Unity Editor đã cài.
4. Kiểm tra những module đang có.
5. Ghi lại thông tin phiên bản.

Kết quả cần nộp: Ảnh chụp mục Installs và bản ghi thông tin môi trường. Không chia sẻ email tài khoản, mã license hoặc thông tin đăng nhập.

### Bài tập B — Kiểm tra khả năng khởi chạy

Mục tiêu: Xác nhận Editor sử dụng được.

Yêu cầu:

1. Tạo project `UnityInstallCheck`.
2. Mở project bằng Unity 6.3.
3. Tìm các cửa sổ Hierarchy, Inspector, Scene, Game.
4. Mở Console.
5. Ghi lại mọi lỗi nghiêm trọng nếu có.
6. Lưu và mở lại project.

Điều kiện đạt: Project mở thành công, Scene có thể lưu và mở lại.

### Bài tập C — Tình huống xử lý lỗi

Tình huống: Một người học đã cài Unity 6.3 nhưng không thể build project Android vì thiếu công cụ hỗ trợ Android.

Nhiệm vụ: Trình bày quy trình kiểm tra và bổ sung module cần thiết mà không gỡ toàn bộ Editor.

Gợi ý: Phân biệt Editor, Build Support, Android SDK, NDK và OpenJDK.

## 13. Mẫu báo cáo kết quả thực hành

Có thể lưu báo cáo với tên `install-unity-report.md`.

```
# Báo cáo cài đặt Unity

## Thông tin môi trường

- Hệ điều hành:
- CPU:
- RAM:
- GPU:
- Unity Hub:
- Unity Editor:
- License:
- Modules đã cài:

## Kiểm tra

| Hạng mục | Kết quả |
|---|---|
| Mở Unity Hub | |
| Đăng nhập Unity ID | |
| Kích hoạt license | |
| Cài Editor | |
| Tạo project thử | |
| Mở Editor | |
| Kiểm tra Console | |
| Lưu và mở lại Scene | |

## Lỗi phát sinh

- Mô tả:
- Thông báo lỗi:
- Nguyên nhân dự đoán:
- Cách xử lý:
- Kết quả sau xử lý:

## Kết luận

Môi trường Unity đã sẵn sàng: Có / Chưa
```

## 14. Checklist hoàn thành bài học

Tiến độ thực hành

0/12

Phân biệt được Unity Hub và Unity Editor.

Giải thích được vai trò của Unity ID và license.

Kiểm tra được yêu cầu phần cứng Unity 6.3.

Cài đặt và đăng nhập được Unity Hub.

Kích hoạt được license phù hợp.

Cài đặt được Unity Editor 6.3 LTS.

Phân biệt được Editor và Build Modules.

Biết bổ sung module vào bản Editor đã cài.

Tạo và mở được một project kiểm thử.

Kiểm tra được Console và Package Manager.

Lưu và mở lại được project.

Ghi nhận được ít nhất một tình huống lỗi và cách xử lý.

## 15. Câu hỏi ôn tập

Trắc nghiệm 5 câu

0/5 đã trả lời

Câu 1. Một sinh viên muốn tạo và quản lý nhiều project sử dụng các phiên bản Unity khác nhau. Công cụ phù hợp nhất là gì?

A. Unity Hub

B. Console

C. Inspector

D. Scene View

Câu 2. Một người đã tải Unity Hub nhưng chưa có Unity Editor. Nhận định nào chính xác?

A. Đã có thể build trò chơi Android

B. Chỉ cần cài Visual Studio là đủ

C. Cần cài một phiên bản Unity Editor trước khi làm việc với project

D. Unity Hub tự động biến thành Unity Editor

Câu 3. Khi tạo project yêu cầu Unity 6.3, người học nên làm gì?

A. Luôn chọn phiên bản mới nhất bất kể yêu cầu

B. Chọn bản alpha mới nhất

C. Gỡ mọi phiên bản Unity cũ

D. Cài và chọn phiên bản Unity 6.3 phù hợp

Câu 4. Một project Android không build được vì thiếu Android Build Support. Cách xử lý hợp lý là gì?

A. Xóa project và tạo mới

B. Thêm Android Build Support và các công cụ phụ thuộc cần thiết cho bản Editor

C. Đổi màu Render Pipeline

D. Chỉ cài thêm font chữ

Câu 5. Sau khi cài Editor, cách nào kiểm tra môi trường một cách đáng tin cậy nhất?

A. Tạo và mở project thử, kiểm tra Console, lưu và mở lại Scene

B. Chỉ nhìn biểu tượng Unity Hub

C. Chỉ kiểm tra dung lượng RAM

D. Chỉ đăng nhập Unity Learn

Chấm điểmLàm lại

## 16. Tổng kết kiến thức

Unity Hub quản lý môi trường

Dùng để cài đặt các phiên bản Unity Editor, quản lý project, module và tài khoản.

Unity Editor xây dựng ứng dụng

Là môi trường thiết kế, lập trình, kiểm thử và chuẩn bị xuất bản dự án.

Module mở rộng khả năng Editor

Cài module theo nền tảng thực sự cần phát triển; có thể bổ sung sau.

Phiên bản và license cần phù hợp

Luôn kiểm tra điều kiện sử dụng, chọn đúng bản Editor và sao lưu project trước khi nâng cấp.

Kết luận: Cài đặt Unity thành công không chỉ là tải phần mềm. Một môi trường phát triển sẵn sàng cần có license hợp lệ, phiên bản Editor phù hợp, các module cần thiết và khả năng tạo, mở, lưu project bình thường.

## 17. Tài liệu tham khảo

Các nguồn chính thức dùng để biên soạn và cập nhật nội dung bài học:

1. [Unity Learn — Unity Essentials: Install Unity](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials/tutorial/unity-essentials-install-unity?version=6.3\&utm_source=chatgpt.com) — Bài học gốc, Unity Essentials 6.3.
2. [Unity Hub Documentation](https://docs.unity.com/en-us/hub?utm_source=chatgpt.com) — Quản lý phiên bản Editor, project và license.
3. [Unity 6.3 System Requirements](https://docs.unity3d.com/6000.3/Documentation/Manual/system-requirements.html?utm_source=chatgpt.com) — Yêu cầu hệ thống chính thức.
4. [Download and install the Unity Editor](https://docs.unity.com/en-us/hub/add-editor?utm_source=chatgpt.com) — Cài đặt và quản lý Unity Editor.
5. [Managing licenses](https://docs.unity.com/en-us/hub/manage-license?utm_source=chatgpt.com) — Kích hoạt và quản lý giấy phép.
6. [Unity Student Plan](https://unity.com/products/unity-student?utm_source=chatgpt.com) — Điều kiện và quyền lợi giáo dục.
7. [Add modules to a Unity Editor installation](https://docs.unity.com/en-us/hub/add-modules?utm_source=chatgpt.com) — Hướng dẫn bổ sung module.
8. [Create a new project](https://docs.unity.com/en-us/hub/project-create?utm_source=chatgpt.com) — Tạo project kiểm thử.

Nội dung học tập tiếng Việt tự biên soạn, đối chiếu ngày 21/10/2026. Không phải bản dịch chính thức hay transcript của Unity Technologies. Bài tiếp theo trong Unity Essentials: [Open the Unity Essentials project](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com).