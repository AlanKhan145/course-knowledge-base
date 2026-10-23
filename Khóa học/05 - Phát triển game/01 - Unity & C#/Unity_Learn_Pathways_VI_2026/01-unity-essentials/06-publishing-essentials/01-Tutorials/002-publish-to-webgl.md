# Bài 02 — Publish to WebGL (Xuất bản dự án Unity lên Web)

Pathway: Unity Essentials Mission: Publishing Essentials Loại bài học: Tutorial — Hướng dẫn thực hành Phiên bản: Unity 6.3 Trình độ: Cơ bản (Foundational)

Tài liệu tham khảo: [Publish to WebGL — Unity Learn](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials/tutorial/publish-to-webgl-1?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

### 1.1. Publish to WebGL là gì?

Khi phát triển trò chơi bằng Unity, chúng ta thường sử dụng Play Mode để chạy thử trực tiếp trong Unity Editor. Tuy nhiên, người dùng khác không thể trải nghiệm trò chơi chỉ bằng cách mở dự án Unity nếu máy tính của họ không có môi trường phát triển phù hợp.

Để chia sẻ trò chơi, chúng ta cần tạo một Build — phiên bản có thể chạy bên ngoài Unity Editor.

WebGL là công nghệ cho phép trình duyệt web hiển thị đồ họa tương tác. Khi xuất bản Unity lên nền tảng Web, người dùng có thể chơi trò chơi ngay trong trình duyệt mà không cần cài đặt Unity Editor.

Trong bài học này, chúng ta sẽ chuyển dự án Unity sang nền tảng Web, tạo bản Build và xuất bản lên Unity Play.

### 1.2. Kết quả mong đợi

[Building the Game - Unity Learn](https://images.openai.com/static-rsc-4/EO_k7X6_fQIsDz1S6DHIQhKEcvjANjPIjZ0JqrItei29BETh_Tazvhal5cyli8tkE9I4EGweZpRsULXwN8poe-_W639wL70Feaef0FTMyS-t3M8DAPStbvuP0DX67gIkFmkMgEHryQXecIuem9N1eSBms54opHhq2g50AJ37hsg?purpose=inline)

[Unity Play | Parkour Animals game](https://images.openai.com/static-rsc-4/Ff6QfcggWsD5vpKsEkq-EZf0w0e9xvOF7ng9FaIQx9gZhvhJ_MA8H0lbxdflJ_l4GJfhKsMG0IVpvr0RTL4EpHVtbcrh6BqfaMBfPiyDLVN0JRZgsrErDYU6pMCqarHEA0uZndU9QowxWIRw7h87chPOUs4nPcwzTAdrlDAluj8?purpose=inline)

Trước khi xuất bản

Dự án chạy trong Unity Editor.

Sau khi xuất bản

Trò chơi chạy trực tiếp trong trình duyệt thông qua đường liên kết.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích sự khác nhau giữa chạy thử trong Unity Editor và chạy một Web Build.
2. Cấu hình nền tảng Web thông qua `Build Profiles`.
3. Tạo Build cho dự án Unity và xác định các tệp quan trọng.
4. Đóng gói và xuất bản trò chơi lên Unity Play.
5. Kiểm thử trò chơi trên trình duyệt, phát hiện lỗi và cập nhật phiên bản.

## 3. Kiến thức nền tảng

### 3.1. Phân biệt Play Mode, Build và Publish

| Khái niệm     | Giải thích                                 | Mục đích                     |
| ------------- | ------------------------------------------ | ---------------------------- |
| Play Mode     | Chạy dự án trong Unity Editor              | Kiểm thử khi phát triển      |
| Build         | Tạo phiên bản chạy trên nền tảng đích      | Đóng gói trò chơi            |
| WebGL         | Công nghệ đồ họa sử dụng trong trình duyệt | Chạy game trên Web           |
| Build Profile | Cấu hình nền tảng và tùy chọn Build        | Lựa chọn cách xuất bản       |
| Publish       | Đưa bản Build lên nền tảng phân phối       | Chia sẻ trò chơi             |
| Hosting       | Lưu trữ và phục vụ ứng dụng qua mạng       | Cho phép người khác truy cập |

Ví dụ: Một trò chơi thu thập vật phẩm có thể hoạt động tốt trong Unity Editor. Tuy nhiên, khi xuất bản lên Web, người học vẫn cần kiểm tra điều khiển, âm thanh, giao diện và hiệu năng trong trình duyệt.

### 3.2. Cấu trúc một WebGL Build

Sau khi Build thành công, Unity tạo ra một thư mục chứa các tệp cần thiết để trò chơi hoạt động.

Cấu trúc thường gặp:

```
WebBuild/
├── index.html
├── Build/
│   ├── Các tệp JavaScript
│   ├── Dữ liệu trò chơi
│   └── Các tệp WebAssembly
└── TemplateData/
    └── Tài nguyên giao diện Web
```

Trong đó:

- `index.html`: Trang HTML dùng để khởi chạy trò chơi.
- `Build/`: Chứa mã đã biên dịch và dữ liệu cần thiết.
- `TemplateData/`: Chứa các tài nguyên phục vụ giao diện trang Web.

Tên và phần mở rộng của một số tệp có thể khác nhau tùy cấu hình Build.

Lưu ý: Không chỉ gửi riêng `index.html`. Trò chơi phụ thuộc vào các tệp còn lại trong thư mục Build.

## 4. Quy trình xuất bản Unity lên WebGL

Sơ đồ quy trình

\#chatgpt-mermaid-\_r_lm\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_lm\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lm\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lm\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_lm\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_lm\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_lm\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_lm\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_lm\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_lm\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lm\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lm\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_lm\_ p{margin:0;}#chatgpt-mermaid-\_r_lm\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_lm\_ .label text,#chatgpt-mermaid-\_r_lm\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ .node rect,#chatgpt-mermaid-\_r_lm\_ .node circle,#chatgpt-mermaid-\_r_lm\_ .node ellipse,#chatgpt-mermaid-\_r_lm\_ .node polygon,#chatgpt-mermaid-\_r_lm\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .rough-node .label text,#chatgpt-mermaid-\_r_lm\_ .node .label text,#chatgpt-mermaid-\_r_lm\_ .image-shape .label,#chatgpt-mermaid-\_r_lm\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_lm\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .rough-node .label,#chatgpt-mermaid-\_r_lm\_ .node .label,#chatgpt-mermaid-\_r_lm\_ .image-shape .label,#chatgpt-mermaid-\_r_lm\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_lm\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_lm\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lm\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lm\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_lm\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lm\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lm\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lm\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_lm\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_lm\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lm\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_lm\_ .icon-shape,#chatgpt-mermaid-\_r_lm\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lm\_ .icon-shape p,#chatgpt-mermaid-\_r_lm\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_lm\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_lm\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lm\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_lm\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_lm\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_lm\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_lm\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_lm\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_lm\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lm\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_lm\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lm\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lm\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lm\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_lm\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_lm\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .node rect,#chatgpt-mermaid-\_r_lm\_ .node circle,#chatgpt-mermaid-\_r_lm\_ .node ellipse,#chatgpt-mermaid-\_r_lm\_ .node polygon,#chatgpt-mermaid-\_r_lm\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lm\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_lm\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_lm\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_lm\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lm\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Dự án UnityKiểm tra Scene và AssetChọn nền tảng WebSwitch PlatformBuild dự ánĐóng gói ZIPUpload lên Unity PlayChạy thử trên trình duyệtHoạt động đúng?Chia sẻ liên kếtSửa lỗi trong UnityCóKhông

Quy trình từ dự án trong Unity Editor đến trò chơi có thể chia sẻ trực tuyến.

### 4.1. Bước 1 — Chuẩn bị dự án

Trước khi xuất bản, cần bảo đảm rằng dự án đã sẵn sàng chạy từ đầu đến cuối.

Thao tác:

1. Mở dự án bằng Unity 6.3.
2. Lưu tất cả Scene đã chỉnh sửa.
3. Kiểm tra các GameObject và Component quan trọng.
4. Nhấn Play để chạy thử.
5. Kiểm tra bảng Console để phát hiện lỗi.
6. Xác nhận các Scene cần sử dụng đã được đưa vào `Scene List` của Build.

Trong cửa sổ `Build Profiles`, `Scene List` quy định những Scene nào được đưa vào phiên bản xuất bản. Scene đứng đầu danh sách thường là Scene được khởi chạy đầu tiên.

Checkpoint: Trò chơi hoạt động đúng trong Play Mode, không có lỗi nghiêm trọng cản trở trải nghiệm.

### 4.2. Bước 2 — Cài đặt WebGL Build Support

Để xuất bản lên Web, Unity Editor phải có module hỗ trợ nền tảng này.

Nếu chưa cài đặt:

1. Mở Unity Hub.
2. Chọn tab `Installs`.
3. Tìm phiên bản Unity Editor đang sử dụng.
4. Mở menu quản lý phiên bản và chọn `Add modules`.
5. Đánh dấu `Web Build Support`.
6. Chọn `Install`.

Sau khi cài đặt, quay lại dự án Unity.

Nếu nền tảng Web đã khả dụng trong Build Profiles, có thể bỏ qua bước cài module.

### 4.3. Bước 3 — Chuyển nền tảng sang Web

Trong Unity Editor:

1. Chọn `File > Build Profiles`.
2. Tại mục `Platforms`, chọn `Web`.
3. Nhấn `Switch Platform`.
4. Đợi Unity hoàn tất chuyển đổi nền tảng.

Nếu không thấy Web, sử dụng `Add Build Profile` để tìm nền tảng này. Nếu tùy chọn bị vô hiệu hóa, kiểm tra lại Web Build Support.

Việc chuyển nền tảng cho phép Unity chuẩn bị tài nguyên và cấu hình dự án phù hợp với môi trường Web.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn

+1



Checkpoint: `Web` được đặt làm nền tảng Build đang sử dụng.

### 4.4. Bước 4 — Build dự án

Khi nền tảng Web đã được chọn:

1. Trong `Build Profiles`, nhấn `Build`.
2. Chọn một thư mục lưu kết quả, ví dụ `WebBuilds`.
3. Xác nhận vị trí lưu.
4. Đợi quá trình Build kết thúc.
5. Kiểm tra các tệp kết quả trong thư mục đã chọn.

Ví dụ cách tổ chức:

```
UnityProject/
├── Assets/
├── Packages/
├── ProjectSettings/
└── WebBuilds/
    └── PortfolioGame/
        ├── index.html
        ├── Build/
        └── TemplateData/
```

Nên lưu Web Build bên ngoài thư mục `Assets` để tránh đưa các tệp xuất bản vào tài nguyên dự án một cách không cần thiết.

Checkpoint: Thư mục Build được tạo thành công và có đầy đủ các thành phần cần thiết.

### 4.5. Bước 5 — Đóng gói Build thành ZIP

Để tải trò chơi lên Unity Play bằng phương thức tải tệp, chúng ta đóng gói thư mục Build thành tệp `.zip`.

Trên Windows:

1. Tìm thư mục Build vừa tạo.
2. Nhấn chuột phải vào thư mục.
3. Chọn chức năng nén thành tệp ZIP.
4. Kiểm tra tệp ZIP đã được tạo.

Trên macOS, sử dụng chức năng `Compress` trong menu chuột phải.

Điều quan trọng: Khi giải nén, cấu trúc thư mục phải được giữ nguyên. Không đổi vị trí các tệp bên trong Build một cách tùy tiện.

### 4.6. Bước 6 — Xuất bản lên Unity Play

Truy cập [Unity Play](https://play.unity.com/?utm_source=chatgpt.com) và đăng nhập bằng tài khoản Unity.

Tiếp theo:

1. Mở trang tải trò chơi lên Unity Play.
2. Kéo thả tệp ZIP chứa Web Build.
3. Đợi nền tảng xử lý.
4. Nhập thông tin giới thiệu trò chơi.
5. Chọn chế độ hiển thị phù hợp.
6. Lưu thông tin và hoàn tất xuất bản.

Những thông tin cần chuẩn bị:

| Trường      | Ví dụ                                    |
| ----------- | ---------------------------------------- |
| Title       | My Unity Portfolio                       |
| Description | A small interactive 3D experience        |
| Visibility  | Public / Unlisted / Private tùy lựa chọn |
| Thumbnail   | Ảnh chụp trò chơi nếu hỗ trợ             |

Đây là quy trình tải ZIP được hướng dẫn trong bài Publish to WebGL của Unity Essentials 6.3.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



Checkpoint: Trò chơi xuất hiện trên Unity Play và có trang để truy cập.

### 4.7. Bước 7 — Kiểm thử bản phát hành

Mở đường liên kết Unity Play trên trình duyệt máy tính.

Kiểm tra lần lượt:

- Trò chơi có tải thành công không?
- Nhân vật hoặc đối tượng có hiển thị chính xác không?
- Bàn phím, chuột và các nút điều khiển có hoạt động không?
- Âm thanh có phát đúng không?
- UI có bị lệch hoặc mất thành phần không?
- Có xuất hiện lỗi khi chuyển Scene không?

Nếu phát hiện lỗi, quay lại Unity Editor để sửa, tạo Build mới và cập nhật trò chơi đã xuất bản.

Việc chạy thành công trong Unity Editor không bảo đảm bản Web cũng hoạt động giống hệt vì môi trường thực thi khác nhau.

## 5. Kiểm thử và ghi lại kết quả

Một lần Build thành công mới chỉ chứng minh Unity đã tạo được sản phẩm đầu ra. Người học cần kiểm chứng toàn bộ trải nghiệm.

### 5.1. Bảng kiểm thử mẫu

| Test case    | Kết quả mong đợi            | Cách kiểm tra                    |
| ------------ | --------------------------- | -------------------------------- |
| Khởi động    | Scene đầu tiên xuất hiện    | Mở URL                           |
| Di chuyển    | Nhân vật phản hồi đúng      | Nhấn phím điều khiển             |
| Tương tác    | Đối tượng phản hồi đúng     | Thử hành động                    |
| Âm thanh     | Âm thanh phát theo thiết kế | Kích hoạt sự kiện                |
| Giao diện    | UI không bị che hoặc lệch   | Thay đổi kích thước cửa sổ       |
| Chuyển Scene | Scene mới tải thành công    | Thực hiện điều kiện chuyển Scene |

### 5.2. Mẫu ghi chép kết quả

Sử dụng mẫu sau khi gặp lỗi hoặc hoàn thành một ca kiểm thử.

```
Tên kiểm thử: Di chuyển nhân vật

Kết quả mong đợi:
Nhân vật di chuyển khi nhấn phím W, A, S, D.

Kết quả thực tế:
[Điền kết quả quan sát được]

Môi trường:
Trình duyệt và hệ điều hành đang sử dụng.

Minh chứng:
Ảnh màn hình hoặc video kiểm thử.

Nguyên nhân nghi ngờ:
[Điền giả thuyết nếu có]

Hướng xử lý:
[Điền bước kiểm tra hoặc sửa lỗi]
```

Cần ghi nhận kết quả thực tế trước khi kết luận nguyên nhân.

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng                           | Nguyên nhân có thể                        | Cách kiểm tra                             |
| ------------------------------------ | ----------------------------------------- | ----------------------------------------- |
| Không chọn được Web                  | Chưa cài Web Build Support                | Kiểm tra module trong Unity Hub           |
| Chạy sai Scene                       | Scene List chưa đúng                      | Kiểm tra thứ tự Scene                     |
| Thiếu đối tượng                      | Asset hoặc tham chiếu bị lỗi              | Kiểm tra Inspector và Console             |
| Không mở được `index.html` trực tiếp | Trình duyệt hạn chế truy cập từ `file://` | Chạy bằng `Build and Run` hoặc web server |
| Màn hình đen                         | Lỗi tải tài nguyên hoặc lỗi lúc chạy      | Kiểm tra Console của trình duyệt          |
| Điều khiển không hoạt động           | Khác biệt trong xử lý input hoặc focus    | Kiểm tra tương tác trên Web               |
| Game chạy chậm                       | Tài nguyên hoặc xử lý quá nặng            | Kiểm tra hiệu năng bản Web                |
| Game không tải được sau khi upload   | ZIP thiếu tệp hoặc cấu trúc sai           | Kiểm tra toàn bộ thư mục Build            |

### Quy trình Debug

\#chatgpt-mermaid-\_r_nf\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_nf\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_nf\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_nf\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_nf\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_nf\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_nf\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_nf\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_nf\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_nf\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_nf\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_nf\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_nf\_ p{margin:0;}#chatgpt-mermaid-\_r_nf\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_nf\_ .label text,#chatgpt-mermaid-\_r_nf\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ .node rect,#chatgpt-mermaid-\_r_nf\_ .node circle,#chatgpt-mermaid-\_r_nf\_ .node ellipse,#chatgpt-mermaid-\_r_nf\_ .node polygon,#chatgpt-mermaid-\_r_nf\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .rough-node .label text,#chatgpt-mermaid-\_r_nf\_ .node .label text,#chatgpt-mermaid-\_r_nf\_ .image-shape .label,#chatgpt-mermaid-\_r_nf\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_nf\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .rough-node .label,#chatgpt-mermaid-\_r_nf\_ .node .label,#chatgpt-mermaid-\_r_nf\_ .image-shape .label,#chatgpt-mermaid-\_r_nf\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_nf\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_nf\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_nf\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_nf\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_nf\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_nf\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_nf\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_nf\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_nf\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_nf\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_nf\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_nf\_ .icon-shape,#chatgpt-mermaid-\_r_nf\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_nf\_ .icon-shape p,#chatgpt-mermaid-\_r_nf\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_nf\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_nf\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_nf\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_nf\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_nf\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_nf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_nf\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_nf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_nf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_nf\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_nf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_nf\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_nf\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_nf\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_nf\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_nf\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .node rect,#chatgpt-mermaid-\_r_nf\_ .node circle,#chatgpt-mermaid-\_r_nf\_ .node ellipse,#chatgpt-mermaid-\_r_nf\_ .node polygon,#chatgpt-mermaid-\_r_nf\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_nf\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_nf\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_nf\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_nf\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_nf\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗi trên WebTái hiện lỗiĐọc lỗi và ghi nhận hiện tượngĐưa ra giả thuyếtThay đổi một yếu tốBuild lại và kiểm thửLỗi đã hết?Ghi nhận cách sửaCóKhông

Lưu ý về thử nghiệm cục bộ: Trong Unity 6.3, không nên kiểm tra Web Build bằng cách nhấp đúp `index.html`, vì trình duyệt có thể chặn tải tài nguyên từ địa chỉ `file://`. Sử dụng `Build and Run` hoặc một web server cục bộ.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity.com\&sz=32)

Unity Docs



Nếu dùng Python để phục vụ thư mục Build cho mục đích kiểm thử, có thể chạy lệnh sau tại thư mục chứa `index.html`:

```
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000` trên trình duyệt.

## 7. Bài tập thực hành

### Bài tập 1 — Xuất bản dự án đầu tiên

Yêu cầu: Chọn một dự án Unity đơn giản có ít nhất một tương tác, Build cho nền tảng Web và kiểm thử thành công trên trình duyệt.

Sản phẩm cần nộp gồm đường liên kết Unity Play, ảnh chụp trò chơi đang hoạt động và mô tả ngắn về chức năng chính.

### Bài tập 2 — Kiểm thử sau khi thay đổi

Thay đổi một yếu tố trong dự án, chẳng hạn tốc độ di chuyển của nhân vật hoặc kích thước đối tượng.

Trước khi Build, hãy dự đoán kết quả. Sau đó xuất bản lại, kiểm thử và so sánh kết quả thực tế với dự đoán.

### Bài tập 3 — Hoàn thiện Portfolio

Tạo một trang giới thiệu ngắn cho dự án, bao gồm:

- Tên và mục tiêu trò chơi.
- Hướng dẫn điều khiển.
- Các chức năng đã hoàn thành.
- Vai trò của người phát triển.
- Ảnh chụp màn hình.
- Liên kết chơi trực tiếp.
- Các lỗi hoặc giới hạn còn tồn tại.

Chỉ công khai những asset, hình ảnh, nhạc và dữ liệu mà người phát triển có quyền sử dụng hoặc chia sẻ.

## 8. Checklist hoàn thành

Tiến độ thực hành

0/10 hoàn thành

Dự án chạy đúng trong Play Mode.

Đã cài Web Build Support.

Đã chọn và chuyển sang nền tảng Web.

Scene List chứa đầy đủ Scene cần thiết.

Đã tạo Web Build thành công.

Đã đóng gói thư mục Build thành ZIP.

Đã tải trò chơi lên Unity Play.

Đã mở và chơi thử trên trình duyệt.

Đã kiểm tra điều khiển, UI và âm thanh.

Đã ghi lại minh chứng và ít nhất một kết quả kiểm thử.

## 9. Câu hỏi ôn tập trắc nghiệm

5 câu hỏi • Mỗi câu một đáp án đúng

Câu 1. Vì sao cần tạo Web Build thay vì chỉ chạy dự án trong Play Mode?

A. Để chỉnh sửa GameObject nhanh hơn.

B. Để thay thế hoàn toàn Unity Editor.

C. Để trò chơi có thể chạy bên ngoài Editor trong trình duyệt.

D. Để tự động chuyển trò chơi thành ứng dụng Android.

Câu 2. Trong Unity 6.3, thao tác nào dùng để chuyển dự án sang nền tảng Web?

A. Mở File > Build Profiles, chọn Web và Switch Platform.

B. Mở Inspector rồi đổi Tag thành Web.

C. Nhấn Play và sao chép Game view.

D. Đổi tên Scene thành WebGL.

Câu 3. Tại sao không nên chỉ gửi tệp index.html của WebGL Build?

A. Vì tệp HTML chỉ chạy trên Windows.

B. Vì trò chơi cần thêm mã và dữ liệu trong những thư mục khác.

C. Vì index.html chứa toàn bộ mã nguồn Unity Editor.

D. Vì mọi trình duyệt đều chặn các tệp HTML.

Câu 4. Một trò chơi chạy tốt trong Editor nhưng không nhận điều khiển trên trình duyệt. Nên làm gì trước?

A. Xóa toàn bộ project và tạo lại.

B. Công khai trò chơi ngay vì Build đã hoàn thành.

C. Thay đổi tất cả Component liên quan cùng lúc.

D. Tái hiện lỗi, kiểm tra focus/input và thông tin Console.

Câu 5. Sau khi phát hiện lỗi trong phiên bản đã xuất bản, cách xử lý phù hợp là gì?

A. Chỉ sửa Scene nhưng không Build lại.

B. Sửa dự án, tạo Build mới, cập nhật và kiểm thử phiên bản đã xuất bản.

C. Xóa các tệp trong thư mục Build ngẫu nhiên.

D. Chỉ đổi tên trò chơi trên Unity Play.

Chấm điểmLàm lại

## 10. Tổng kết

Kỹ năng quan trọng nhất của bài học là biến một dự án Unity đang chạy trong Editor thành một sản phẩm có thể chia sẻ và trải nghiệm thực tế.

Quy trình cốt lõi gồm:

Chuẩn bị dự án → Chọn Web → Build → Đóng gói → Publish → Kiểm thử → Chia sẻ.

Khi hoàn thành, người học không chỉ có một trò chơi chạy trên WebGL mà còn nắm được quy trình phát hành cơ bản: cấu hình nền tảng, tạo sản phẩm đầu ra, kiểm thử và cập nhật phiên bản.

Đối với một dự án Portfolio, đường liên kết chơi trực tiếp là minh chứng hữu ích cho năng lực triển khai sản phẩm, bên cạnh mã nguồn, ảnh minh họa và mô tả kỹ thuật.

Tài liệu đọc thêm

- [Unity Learn — Publish to WebGL (Unity 6.3)](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials/tutorial/publish-to-webgl-1?version=6.3\&utm_source=chatgpt.com)
- [Unity 6.3 Manual — Web development and publishing](https://docs.unity.com/en-us/engine/6000.3/manual/platform-specific/webgl/intro/gettingstarted?utm_source=chatgpt.com)

Bài học tiếng Việt tự biên soạn, có đối chiếu quy trình xuất bản của Unity. Tên menu và cách triển khai có thể thay đổi giữa các phiên bản Unity.