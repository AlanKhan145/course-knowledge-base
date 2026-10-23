# Bài 05 — Share Your Project: Chia sẻ dự án Unity

Unity Essentials

Publishing Essentials

Bài 05 · Exercise

Phiên bản: Unity 6.3 Chủ đề: Hoàn thiện, kiểm thử, đóng gói và chia sẻ dự án Unity. Tham khảo: [Unity Learn — Publishing Essentials](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Sau khi xây dựng một trò chơi hoặc ứng dụng trong Unity, việc chạy thành công trong Unity Editor mới chỉ là một phần của quá trình phát triển. Một dự án hoàn chỉnh cần được kiểm thử, đóng gói và trình bày sao cho người khác có thể trải nghiệm mà không cần trực tiếp tham gia quá trình phát triển.

Share Your Project là bài thực hành tập trung vào việc biến một dự án Unity đang phát triển thành sản phẩm có thể chia sẻ và đánh giá.

Trong bài tập này, người học sẽ thực hiện bốn hoạt động chính: rà soát dự án, tạo bản build, kiểm thử kết quả và chuẩn bị tài liệu giới thiệu.

### Kết quả cần đạt

Một dự án được xem là sẵn sàng để chia sẻ khi:

- Có phiên bản hoạt động trên nền tảng mục tiêu.
- Người khác có thể xác định cách chạy và tương tác với sản phẩm.
- Có hình ảnh hoặc video chứng minh chức năng hoạt động.
- Có tài liệu mô tả dự án và các giới hạn hiện tại.
- Các tài nguyên được sử dụng phù hợp với quyền chia sẻ.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài thực hành, người học có thể:

1. Phân biệt việc chạy dự án trong Unity Editor và chạy bản build độc lập.
2. Kiểm tra cấu trúc Scene, GameObject, Component và các tài nguyên trước khi xuất bản.
3. Cấu hình nền tảng mục tiêu và tạo bản build có thể chạy.
4. Kiểm thử chức năng, phát hiện lỗi và ghi lại bằng chứng.
5. Trình bày dự án thông qua ảnh, video và tài liệu README.
6. Đánh giá các yếu tố liên quan đến bản quyền asset và quyền riêng tư khi công khai sản phẩm.

## 3. Kiến thức cần sử dụng

### 3.1. Các thành phần cơ bản trong Unity

| Khái niệm    | Vai trò                                                      |
| ------------ | ------------------------------------------------------------ |
| `Scene`      | Không gian tổ chức các đối tượng và nội dung trò chơi        |
| `GameObject` | Đối tượng cơ bản trong Unity, có thể gắn nhiều thành phần    |
| `Component`  | Bổ sung dữ liệu hoặc hành vi cho GameObject                  |
| `Inspector`  | Giao diện xem và thay đổi các thuộc tính của đối tượng       |
| `Play Mode`  | Chạy thử trò chơi trực tiếp trong Unity Editor               |
| `Build`      | Tạo phiên bản ứng dụng dành cho nền tảng mục tiêu            |
| `Console`    | Hiển thị thông báo, cảnh báo và lỗi trong quá trình thực thi |
| `README`     | Tài liệu hướng dẫn và giới thiệu dự án                       |

### 3.2. Khác biệt giữa Play Mode và Build

Một trò chơi có thể hoạt động bình thường trong Unity Editor nhưng gặp lỗi sau khi được build.

| Tiêu chí      | Play Mode                                    | Bản Build                                                     |
| ------------- | -------------------------------------------- | ------------------------------------------------------------- |
| Môi trường    | Unity Editor                                 | Ứng dụng hoặc trình duyệt đích                                |
| Mục đích      | Thử nghiệm trong quá trình phát triển        | Kiểm tra sản phẩm được phân phối                              |
| Công cụ debug | Inspector, Console và công cụ Editor         | Log, công cụ debug của nền tảng hoặc Development Build        |
| Tài nguyên    | Có thể truy cập tài nguyên qua cơ chế Editor | Phụ thuộc tài nguyên được đóng gói và cách ứng dụng nạp chúng |
| Input         | Kiểm tra trong cửa sổ Game                   | Phụ thuộc thiết bị, nền tảng và cấu hình                      |

Ví dụ: Một trò chơi 2D có nhân vật di chuyển bằng các phím mũi tên. Khi thử trong Editor, nhân vật hoạt động bình thường. Tuy nhiên, sau khi build, phím điều khiển không phản hồi.

Trường hợp này cần kiểm tra Input, trạng thái cửa sổ ứng dụng, cấu hình nền tảng và thông báo lỗi thay vì kết luận rằng bản build đã thành công chỉ vì quá trình đóng gói không báo lỗi.

## 4. Đề bài thực hành

Nhiệm vụ: Hoàn thiện và chia sẻ một dự án Unity nhỏ, có ít nhất một thao tác tương tác và một phản hồi quan sát được.

Người học có thể chọn một scene đã xây dựng hoặc tạo dự án đơn giản để thực hành.

Ví dụ sản phẩm phù hợp

[Platformer Online - Unity | Codester](https://images.openai.com/static-rsc-4/r4SWQ7an-BO8LMsV-sz9SWM-N4bUOI68Yc2_PKnuQT49ua8tXe75ut3Ta59vh8Kyv2i3GnjKyhQ2Ym2w1w_fesnuW72GYIk5sW7ga6nurPZgTqIyGgS-zNlSGUpxu9hZ8t8StthraSY7wnVR9mUOs93wG8cTLtg3wo_pOsyzZgw?purpose=inline)

Mini Collectible Game

Di chuyển nhân vật để thu thập vật phẩm.

[Graces Games](https://images.openai.com/static-rsc-4/IBwvW5UQU9kAtxSH0b9VoCQNXlaArMT64GTS3WprmdgI4BqEEo3rrPbWpt0aBvJHx5BnAjIi-PsuWoptWcn2KDmRicmz1vDbIyh4nKKzNFeukCc93bxnN6s1UqU0f5Zey4Nd1_EDyRbMHvF1C7nKN0SjjQJwkIEluS8wVZVCy5Q?purpose=inline)

2D Puzzle Room

Tương tác với các đối tượng để hoàn thành câu đố.

Một sản phẩm tối thiểu cần có các chức năng sau:

- Đầu vào: Người chơi thực hiện một hành động như nhấn phím hoặc nhấp chuột.
- Xử lý: Trò chơi nhận và xử lý hành động.
- Đầu ra: Có thay đổi quan sát được, chẳng hạn nhân vật di chuyển, vật phẩm biến mất hoặc điểm số tăng.

Không cần xây dựng một trò chơi lớn. Trọng tâm là hoàn thành quá trình chuẩn bị, xuất bản và chia sẻ sản phẩm.

## 5. Quy trình thực hành

Luồng hoàn thiện và chia sẻ dự án

\#chatgpt-mermaid-\_r_jk\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_jk\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jk\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jk\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jk\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_jk\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_jk\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_jk\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_jk\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_jk\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jk\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jk\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_jk\_ p{margin:0;}#chatgpt-mermaid-\_r_jk\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_jk\_ .label text,#chatgpt-mermaid-\_r_jk\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ .node rect,#chatgpt-mermaid-\_r_jk\_ .node circle,#chatgpt-mermaid-\_r_jk\_ .node ellipse,#chatgpt-mermaid-\_r_jk\_ .node polygon,#chatgpt-mermaid-\_r_jk\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .rough-node .label text,#chatgpt-mermaid-\_r_jk\_ .node .label text,#chatgpt-mermaid-\_r_jk\_ .image-shape .label,#chatgpt-mermaid-\_r_jk\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_jk\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .rough-node .label,#chatgpt-mermaid-\_r_jk\_ .node .label,#chatgpt-mermaid-\_r_jk\_ .image-shape .label,#chatgpt-mermaid-\_r_jk\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_jk\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_jk\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jk\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jk\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_jk\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jk\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jk\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jk\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_jk\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_jk\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jk\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_jk\_ .icon-shape,#chatgpt-mermaid-\_r_jk\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jk\_ .icon-shape p,#chatgpt-mermaid-\_r_jk\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_jk\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_jk\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jk\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_jk\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_jk\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_jk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_jk\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_jk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_jk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jk\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_jk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jk\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_jk\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_jk\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_jk\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_jk\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .node rect,#chatgpt-mermaid-\_r_jk\_ .node circle,#chatgpt-mermaid-\_r_jk\_ .node ellipse,#chatgpt-mermaid-\_r_jk\_ .node polygon,#chatgpt-mermaid-\_r_jk\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_jk\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_jk\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_jk\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_jk\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jk\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Rà soát Project và SceneCấu hình nền tảngTạo bản BuildKiểm thử thực tếĐạt yêu cầu?Phân tích và sửa lỗiGhi ảnh và video minh chứngViết READMEKiểm tra quyền chia sẻChia sẻ dự ánChưaĐạt

Quá trình được thực hiện theo vòng lặp. Nếu phát hiện lỗi, cần sửa và tạo lại bản build trước khi công khai.

### 5.1. Bước 1 — Rà soát dự án

Mở dự án bằng Unity Editor và kiểm tra Scene chính.

Các nội dung cần kiểm tra:

- Scene được lưu và không có thay đổi chưa ghi.
- Các GameObject quan trọng đang ở trạng thái hoạt động.
- Các Component được gắn đúng đối tượng.
- Không có tham chiếu tài nguyên bị thiếu.
- Các script cần thiết không báo lỗi biên dịch.
- Những asset sử dụng trong trò chơi vẫn tồn tại trong dự án.

Chạy thử bằng Play Mode và tương tác với toàn bộ chức năng chính.

Checkpoint 1: Dự án hoạt động trong Unity Editor và không có lỗi nghiêm trọng làm gián đoạn chức năng cần trình diễn.

### 5.2. Bước 2 — Cấu hình và tạo bản build

Mở phần cấu hình build của Unity, chọn nền tảng sẽ sử dụng để chia sẻ sản phẩm.

Trong Unity 6, các thiết lập này được quản lý thông qua `Build Profiles`. Giao diện cụ thể có thể khác nhau giữa các phiên bản.

Ví dụ:

| Nền tảng | Hình thức chia sẻ                                   |
| -------- | --------------------------------------------------- |
| Windows  | Gửi bản build ứng dụng và các tệp đi kèm            |
| macOS    | Chia sẻ bản build tương thích với macOS             |
| Web      | Đăng tải bản Web build lên máy chủ phù hợp          |
| Android  | Phân phối bản cài đặt hoặc bản kiểm thử tương thích |

Trước khi build, cần xác nhận các Scene cần thiết được đưa vào cấu hình build và Scene khởi động là Scene đúng.

Tiếp theo, kiểm tra những thiết lập có ảnh hưởng tới trải nghiệm như độ phân giải, chất lượng đồ họa và các lựa chọn nền tảng, sau đó tạo bản build.

Checkpoint 2: Unity hoàn tất quá trình build và tạo ra các tệp đầu ra cần thiết.

Lưu ý: Build thành công chưa đồng nghĩa với việc ứng dụng hoạt động chính xác.

### 5.3. Bước 3 — Kiểm thử bản build

Chạy sản phẩm vừa tạo ở môi trường mục tiêu. Không chỉ kiểm tra trong Unity Editor.

Thực hiện các tình huống sau:

1. Khởi động ứng dụng.
2. Kiểm tra Scene xuất hiện ban đầu.
3. Thử thao tác tương tác chính.
4. Quan sát phản hồi của ứng dụng.
5. Thử một tình huống có thể gây lỗi.
6. Thoát hoặc kết thúc phiên chơi.

Ghi lại kết quả kiểm thử bằng bảng:

| Mã   | Tình huống     | Kỳ vọng                     | Thực tế          | Kết quả       |
| ---- | -------------- | --------------------------- | ---------------- | ------------- |
| TC01 | Khởi động      | Scene chính hiển thị        | Điền sau khi thử | Chưa kiểm tra |
| TC02 | Tương tác      | Đối tượng phản hồi          | Điền sau khi thử | Chưa kiểm tra |
| TC03 | Kết thúc       | Ứng dụng kết thúc đúng cách | Điền sau khi thử | Chưa kiểm tra |
| TC04 | Tình huống lỗi | Không làm hỏng luồng chính  | Điền sau khi thử | Chưa kiểm tra |

Nếu phát hiện lỗi, ghi lại tình huống tái hiện và các thông báo liên quan trước khi sửa.

### 5.4. Bước 4 — Ghi lại minh chứng

Chuẩn bị ảnh chụp màn hình hoặc video để thể hiện những chức năng quan trọng.

Một bộ minh chứng phù hợp nên có:

- Hình ảnh giao diện khi khởi động.
- Hình ảnh hoặc video thao tác tương tác.
- Kết quả sau khi thực hiện thao tác.
- Hình ảnh lỗi hoặc log, nếu có tình huống kiểm thử không thành công.

Ưu tiên ghi hình từ bản build thực tế thay vì chỉ quay cửa sổ Scene trong Editor.

### 5.5. Bước 5 — Chuẩn bị README

README giúp người nhận biết dự án dùng để làm gì, cách chạy và những vấn đề cần lưu ý.

Có thể sử dụng cấu trúc sau:

```

# Project Name

## 1. Giới thiệu
Mô tả ngắn về trò chơi và mục tiêu chính.

## 2. Công nghệ
- Unity Version:
- Target Platform:

## 3. Cách chạy
Mô tả cách khởi động sản phẩm.

## 4. Điều khiển
Liệt kê phím hoặc thao tác tương tác.

## 5. Chức năng
Liệt kê các chức năng đã hoàn thành.

## 6. Minh chứng
Liên kết tới ảnh hoặc video demo.

## 7. Known Issues
Liệt kê các lỗi chưa được giải quyết.

## 8. Credits
Ghi nhận tác giả và nguồn asset phù hợp.

```

README nên ngắn gọn nhưng đủ rõ để người khác sử dụng sản phẩm mà không cần hướng dẫn trực tiếp.

### 5.6. Bước 6 — Kiểm tra và chia sẻ

Trước khi chia sẻ, xác nhận:

- Không có thông tin đăng nhập, khóa API hoặc dữ liệu riêng tư trong các tệp công khai.
- Asset, âm thanh, hình ảnh và mã nguồn có quyền sử dụng hoặc phân phối phù hợp.
- Tệp được chia sẻ đầy đủ, không thiếu dữ liệu cần thiết để chạy ứng dụng.
- Tài liệu hướng dẫn và các minh chứng đều truy cập được.

Có thể chia sẻ dự án bằng kho lưu trữ mã nguồn, bản build tải xuống hoặc một nền tảng phù hợp với sản phẩm.

Đối với một số nền tảng, việc chia sẻ bản build không đồng nghĩa với chia sẻ toàn bộ Unity Project. Hãy xác định rõ người nhận cần chơi thử sản phẩm hay mở và chỉnh sửa dự án.

## 6. Phát hiện và xử lý lỗi

Một lỗi thường gặp khi chia sẻ dự án là bản build hoạt động khác với phiên bản trong Editor.

| Hiện tượng                 | Nguyên nhân cần kiểm tra                           | Hướng xử lý                           |
| -------------------------- | -------------------------------------------------- | ------------------------------------- |
| Khởi động sai Scene        | Cấu hình Scene khởi động                           | Kiểm tra Scene trong Build Profile    |
| Mất hình ảnh hoặc âm thanh | Thiếu asset hoặc cách tải tài nguyên không phù hợp | Kiểm tra tham chiếu và cách đóng gói  |
| Không nhận điều khiển      | Input hoặc hành vi của nền tảng                    | Kiểm tra cấu hình Input và thiết bị   |
| Script không hoạt động     | Ngoại lệ, lỗi logic hoặc phụ thuộc riêng Editor    | Kiểm tra log và điều kiện thực thi    |
| Chỉ lỗi khi build          | Khác biệt môi trường runtime                       | Tái hiện lỗi trực tiếp trên bản build |

### Quy trình debug

\#chatgpt-mermaid-\_r_k3\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_k3\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k3\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k3\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_k3\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_k3\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_k3\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_k3\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_k3\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_k3\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k3\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k3\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_k3\_ p{margin:0;}#chatgpt-mermaid-\_r_k3\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_k3\_ .label text,#chatgpt-mermaid-\_r_k3\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ .node rect,#chatgpt-mermaid-\_r_k3\_ .node circle,#chatgpt-mermaid-\_r_k3\_ .node ellipse,#chatgpt-mermaid-\_r_k3\_ .node polygon,#chatgpt-mermaid-\_r_k3\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .rough-node .label text,#chatgpt-mermaid-\_r_k3\_ .node .label text,#chatgpt-mermaid-\_r_k3\_ .image-shape .label,#chatgpt-mermaid-\_r_k3\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_k3\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .rough-node .label,#chatgpt-mermaid-\_r_k3\_ .node .label,#chatgpt-mermaid-\_r_k3\_ .image-shape .label,#chatgpt-mermaid-\_r_k3\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_k3\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_k3\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k3\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k3\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_k3\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k3\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k3\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k3\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_k3\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_k3\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k3\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_k3\_ .icon-shape,#chatgpt-mermaid-\_r_k3\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k3\_ .icon-shape p,#chatgpt-mermaid-\_r_k3\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_k3\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_k3\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k3\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_k3\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_k3\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_k3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_k3\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_k3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_k3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k3\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_k3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k3\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k3\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k3\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_k3\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_k3\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .node rect,#chatgpt-mermaid-\_r_k3\_ .node circle,#chatgpt-mermaid-\_r_k3\_ .node ellipse,#chatgpt-mermaid-\_r_k3\_ .node polygon,#chatgpt-mermaid-\_r_k3\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k3\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_k3\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_k3\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_k3\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k3\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiĐọc Console hoặc logKiểm tra Component, Asset vàSceneĐưa ra giả thuyếtThay đổi một yếu tốBuild và chạy lạiLỗi đã hết?Ghi nhận cách khắc phụcKhôngCó

Nguyên tắc quan trọng là không thay đổi nhiều yếu tố cùng lúc khi chưa xác định nguyên nhân. Nếu thay đổi quá nhiều, sẽ khó biết thao tác nào thực sự đã giải quyết vấn đề.

### Mẫu báo cáo lỗi

| Nội dung         | Thông tin cần ghi                             |
| ---------------- | --------------------------------------------- |
| Mô tả lỗi        | Điều gì không hoạt động?                      |
| Bước tái hiện    | Cần thao tác thế nào để gặp lại lỗi?          |
| Kết quả mong đợi | Ứng dụng phải hoạt động ra sao?               |
| Kết quả thực tế  | Ứng dụng đang hoạt động thế nào?              |
| Minh chứng       | Ảnh, video hoặc log                           |
| Giả thuyết       | Nguyên nhân có thể là gì?                     |
| Kết quả sửa lỗi  | Lỗi còn xuất hiện sau khi kiểm tra lại không? |

## 7. Yêu cầu sản phẩm và tiêu chí nghiệm thu

### 7.1. Sản phẩm cần nộp

Người học cần chuẩn bị một bộ sản phẩm gồm:

1. Dự án Unity hoặc bản build có thể chạy.
2. Tối thiểu một tương tác tạo phản hồi quan sát được.
3. Ảnh hoặc video minh chứng hoạt động.
4. Tệp README hướng dẫn sử dụng.
5. Báo cáo ngắn về một tình huống kiểm thử hoặc lỗi.
6. Mô tả ít nhất một cải tiến được thực hiện sau lần thử đầu tiên.

### 7.2. Tiêu chí đánh giá

| Tiêu chí      | Yêu cầu đạt                                                           |
| ------------- | --------------------------------------------------------------------- |
| Khả năng chạy | Sản phẩm khởi động và hoạt động                                       |
| Tương tác     | Có hành động và phản hồi rõ ràng                                      |
| Kiểm thử      | Có tình huống, kỳ vọng và kết quả                                     |
| Minh chứng    | Có ảnh hoặc video từ phiên bản chạy thực tế                           |
| Tài liệu      | README đầy đủ các thông tin chính                                     |
| Cải tiến      | Có ít nhất một thay đổi được kiểm chứng                               |
| Quyền chia sẻ | Không công khai dữ liệu riêng tư hoặc asset không được phép phân phối |

## 8. Bài tập nâng cao

Sau khi hoàn thành bản đầu tiên, lựa chọn một tham số có ảnh hưởng đến hành vi của trò chơi.

Ví dụ:

- Tốc độ di chuyển của nhân vật.
- Tốc độ quay của vật phẩm.
- Khoảng thời gian xuất hiện một đối tượng.
- Âm lượng của âm thanh.
- Độ nhạy của thao tác điều khiển.

Yêu cầu: Thử ít nhất hai giá trị khác nhau của tham số và giải thích sự thay đổi quan sát được.

| Tham số     | Trước khi thay đổi | Sau khi thay đổi | Kết quả         |
| ----------- | ------------------ | ---------------- | --------------- |
| Tự lựa chọn | Giá trị ban đầu    | Giá trị mới      | Ghi sau khi thử |

Không chỉ mô tả rằng ứng dụng đã thay đổi. Cần giải thích mối quan hệ giữa tham số và hành vi của sản phẩm.

## 9. Checklist hoàn thành

Tiến độ thực hành

0/10 hoàn thành

Đã rà soát Scene, GameObject, Component và các asset

Dự án hoạt động trong Play Mode

Đã chọn đúng nền tảng và cấu hình build

Bản build chạy được ngoài Editor

Đã kiểm thử chức năng tương tác chính

Có ảnh hoặc video minh chứng

Có README hướng dẫn sử dụng

Đã ghi nhận ít nhất một lỗi và cách kiểm tra

Đã thực hiện một cải tiến sau khi thử nghiệm

Đã kiểm tra bản quyền tài nguyên và thông tin riêng tư

&#x20;Đặt lại

## 10. Câu hỏi ôn tập

Chọn một đáp án đúng nhất cho mỗi câu hỏi.

Câu 1. Vì sao cần kiểm tra bản build thay vì chỉ chạy trong Unity Editor?

A. Vì Play Mode không thể chạy script

B. Vì bản build có thể có môi trường thực thi và cách xử lý tài nguyên khác Editor

C. Vì mọi GameObject đều thay đổi sau khi build

D. Vì Unity Editor không hỗ trợ kiểm thử tương tác

Câu 2. Khi bản build khởi động sai Scene, nên kiểm tra yếu tố nào trước?

A. Màu sắc của Camera

B. Tên thư mục chứa hình ảnh

C. Tốc độ di chuyển nhân vật

D. Danh sách Scene và Scene khởi động trong Build Profile

Câu 3. Đâu là minh chứng phù hợp nhất cho một chức năng tương tác đã hoạt động?

A. Video quay bản build thực tế khi thao tác và xuất hiện phản hồi

B. Một ảnh chụp mã nguồn trong Editor

C. Một danh sách GameObject không kèm kết quả

D. Một ảnh chụp cửa sổ Inspector

Câu 4. Khi phát hiện lỗi trong bản build, thao tác nào giúp xác định nguyên nhân hiệu quả?

A. Chỉnh sửa tất cả script cùng lúc

B. Xóa toàn bộ thư mục asset

C. Tái hiện lỗi, kiểm tra log và thử thay đổi từng giả thuyết

D. Bỏ qua vì Play Mode vẫn hoạt động

Câu 5. Thông tin nào quan trọng khi viết README cho một dự án Unity được chia sẻ?

A. Chỉ ghi tên trò chơi

B. Mục tiêu dự án, cách chạy, điều khiển, giới hạn và nguồn tài nguyên

C. Chỉ ghi cấu hình máy của người phát triển

D. Chỉ liệt kê toàn bộ tên GameObject

Làm lạiKiểm tra đáp án

## 11. Tổng kết

Share Your Project không chỉ là thao tác tạo file build. Đây là quá trình hoàn thiện sản phẩm để người khác có thể chạy, trải nghiệm và đánh giá kết quả.

Ba nguyên tắc quan trọng cần ghi nhớ:

- Build thành công không đồng nghĩa với sản phẩm chạy đúng. Luôn kiểm thử độc lập.
- Một sản phẩm tốt cần có minh chứng. Ảnh, video và báo cáo kiểm thử giúp chứng minh chức năng đã hoạt động.
- Chia sẻ có trách nhiệm. README, bản quyền tài nguyên và bảo vệ thông tin riêng tư là những yếu tố cần được kiểm tra trước khi công khai.

Kết quả cuối cùng của bài tập là một dự án Unity nhỏ, có thể chạy, có tài liệu hướng dẫn, có minh chứng và đã trải qua ít nhất một vòng kiểm thử – cải tiến.

Tài liệu học tập tự biên soạn theo chủ đề Share Your Project thuộc Unity Essentials. Các nhiệm vụ thực hành và câu hỏi ôn tập được thiết kế cho mục đích tự học, không phải bản chép nguyên văn bài học chính thức của Unity.