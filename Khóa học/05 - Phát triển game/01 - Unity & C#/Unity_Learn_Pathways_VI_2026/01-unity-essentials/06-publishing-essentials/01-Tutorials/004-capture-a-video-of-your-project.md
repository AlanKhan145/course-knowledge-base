# Bài 04 — Capture a Video of Your Project

Unity Essentials · Publishing Essentials · Tutorial · Unity 6.3

Chủ đề: Quay video giới thiệu dự án Unity, ghi lại gameplay và chuẩn bị sản phẩm để chia sẻ hoặc đưa vào portfolio.

Nguồn tham khảo: [Unity Learn — Publishing Essentials](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Khi hoàn thành một dự án Unity, ngoài việc tạo bản build có thể chạy, người phát triển còn cần trình bày sản phẩm sao cho người khác dễ dàng đánh giá.

Một đoạn video giới thiệu có thể thể hiện trực tiếp những tính năng quan trọng như chuyển động nhân vật, hệ thống tương tác, hiệu ứng hình ảnh và âm thanh.

Trong bài học này, người học sẽ thực hành quay video dự án Unity, kiểm tra chất lượng bản ghi và chuẩn bị video để sử dụng trong portfolio.

### Kết quả mong đợi

Sau bài thực hành, người học có một video minh họa dự án đáp ứng các yêu cầu:

- Hiển thị rõ nội dung của game hoặc ứng dụng.
- Ghi lại được ít nhất một tính năng hoặc tương tác.
- Hình ảnh không bị cắt sai tỷ lệ hay mất nội dung quan trọng.
- Âm thanh phù hợp và không chứa lỗi nghiêm trọng.
- Có thể mở và xem bằng phần mềm phát video thông thường.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích được vai trò của video giới thiệu trong việc xuất bản và trình bày dự án Unity.
2. Phân biệt được việc quay video trong Unity Editor và quay một bản build độc lập.
3. Cấu hình công cụ ghi hình phù hợp với mục đích sử dụng.
4. Ghi lại một đoạn video thể hiện hoạt động thực tế của dự án.
5. Kiểm tra, phát hiện và xử lý các vấn đề phổ biến về hình ảnh, âm thanh và hiệu năng.
6. Chuẩn bị một video ngắn để chia sẻ dự án hoặc bổ sung vào portfolio.

## 3. Kiến thức trọng tâm

### 3.1. Vì sao cần quay video dự án?

Video giúp người xem hình dung được cách một dự án hoạt động mà không cần cài đặt Unity hoặc tải toàn bộ game.

Ví dụ, một dự án game 3D có thể có những thành phần sau:

| Thành phần     | Nội dung cần thể hiện                  |
| -------------- | -------------------------------------- |
| Environment    | Môi trường 3D, ánh sáng và bố cục      |
| Character      | Ngoại hình và chuyển động của nhân vật |
| Gameplay       | Di chuyển, điều khiển và tương tác     |
| Animation      | Các hoạt ảnh chuyển động               |
| Visual Effects | Hiệu ứng lửa, ánh sáng hoặc hạt        |
| Audio          | Âm thanh môi trường và hiệu ứng        |
| UI             | Menu, thanh máu và thông tin hiển thị  |

Một video hiệu quả không nhất thiết phải dài. Quan trọng nhất là người xem nhận biết được dự án có chức năng gì và những chức năng đó hoạt động như thế nào.

### 3.2. Phân biệt các phương pháp ghi hình

Có hai phương pháp thực hành phổ biến.

| Tiêu chí              | Unity Recorder                              | Công cụ quay màn hình như OBS                   |
| --------------------- | ------------------------------------------- | ----------------------------------------------- |
| Môi trường            | Unity Editor                                | Editor hoặc bản build                           |
| Mục đích              | Ghi hình trực tiếp từ nội dung Unity        | Ghi lại thao tác và gameplay thực tế            |
| Cài đặt               | Package trong Unity                         | Phần mềm độc lập                                |
| Điều khiển khung hình | Có tùy chọn cấu hình ghi hình               | Phụ thuộc cấu hình ghi và hiệu năng             |
| Quay giao diện Editor | Không phải mục đích chính                   | Có                                              |
| Quay bản build        | Không ghi trực tiếp bản build bằng Recorder | Có                                              |
| Phù hợp               | Video demo scene, animation, cinematic      | Gameplay, hướng dẫn sử dụng, demo bản phát hành |

Unity Recorder là công cụ hoạt động trong Unity Editor, có thể lưu hình ảnh, video và nhiều loại dữ liệu khác trong Play Mode.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

マニュアル: Recorder

+1



### 3.3. Quy trình ghi video

\#chatgpt-mermaid-\_r_m6\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_m6\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m6\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m6\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_m6\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_m6\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_m6\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_m6\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_m6\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_m6\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m6\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m6\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_m6\_ p{margin:0;}#chatgpt-mermaid-\_r_m6\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_m6\_ .label text,#chatgpt-mermaid-\_r_m6\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ .node rect,#chatgpt-mermaid-\_r_m6\_ .node circle,#chatgpt-mermaid-\_r_m6\_ .node ellipse,#chatgpt-mermaid-\_r_m6\_ .node polygon,#chatgpt-mermaid-\_r_m6\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .rough-node .label text,#chatgpt-mermaid-\_r_m6\_ .node .label text,#chatgpt-mermaid-\_r_m6\_ .image-shape .label,#chatgpt-mermaid-\_r_m6\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_m6\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .rough-node .label,#chatgpt-mermaid-\_r_m6\_ .node .label,#chatgpt-mermaid-\_r_m6\_ .image-shape .label,#chatgpt-mermaid-\_r_m6\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_m6\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_m6\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m6\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m6\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_m6\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m6\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m6\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m6\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_m6\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_m6\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m6\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_m6\_ .icon-shape,#chatgpt-mermaid-\_r_m6\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m6\_ .icon-shape p,#chatgpt-mermaid-\_r_m6\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_m6\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_m6\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m6\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_m6\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_m6\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_m6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_m6\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_m6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_m6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m6\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_m6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m6\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m6\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m6\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_m6\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_m6\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .node rect,#chatgpt-mermaid-\_r_m6\_ .node circle,#chatgpt-mermaid-\_r_m6\_ .node ellipse,#chatgpt-mermaid-\_r_m6\_ .node polygon,#chatgpt-mermaid-\_r_m6\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m6\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_m6\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_m6\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_m6\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m6\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Chuẩn bị SceneChạy thử trong Play ModeDự án hoạt động đúng?Kiểm tra Console và sửa lỗiChọn công cụ ghi hìnhCấu hình hình ảnh và âm thanhGhi lại hoạt động dự ánKiểm tra video đầu raVideo đạt yêu cầu?Lưu và chia sẻ videoKhôngCóKhôngCó

Quá trình ghi video cần bắt đầu từ một scene hoạt động ổn định. Việc quay hình không thay thế quá trình kiểm thử mà giúp lưu lại bằng chứng trực quan về kết quả kiểm thử.

## 4. Chuẩn bị môi trường thực hành

### 4.1. Yêu cầu

Trước khi bắt đầu, cần chuẩn bị:

- Một dự án Unity có ít nhất một scene hoạt động.
- Camera hiển thị nội dung phù hợp trong `Game View`.
- Một hoặc nhiều GameObject có thể chuyển động hoặc tương tác.
- Unity Recorder hoặc phần mềm quay màn hình.
- Thư mục lưu trữ video đầu ra.

Ví dụ, có thể sử dụng một scene nhỏ gồm nhân vật, sàn nhà, ánh sáng và một đối tượng có thể thu thập.

### 4.2. Kiểm tra Scene

Mở scene cần ghi hình và nhấn nút `Play`.

Quan sát các nội dung sau:

| Kiểm tra   | Kết quả mong đợi                             |
| ---------- | -------------------------------------------- |
| Camera     | Hiển thị đúng khu vực cần quay               |
| GameObject | Các đối tượng quan trọng xuất hiện đầy đủ    |
| Animation  | Chạy đúng trạng thái                         |
| Input      | Điều khiển hoạt động                         |
| Lighting   | Scene có đủ ánh sáng                         |
| Audio      | Âm thanh phát đúng thời điểm                 |
| Console    | Không có lỗi nghiêm trọng ảnh hưởng đến demo |

Nếu scene gặp lỗi, cần xử lý trước khi bắt đầu ghi hình.

## 5. Thực hành: Ghi video bằng Unity Recorder

### Bước 1. Cài đặt Unity Recorder

Mở Unity Editor, sau đó:

1. Chọn `Window > Package Manager`.
2. Chuyển danh sách package sang `Unity Registry`.
3. Tìm kiếm `Recorder`.
4. Chọn package Recorder.
5. Nhấn `Install` nếu package chưa được cài đặt.

[Working with the Unity Recorder - Unity Learn](https://images.openai.com/static-rsc-4/EE5FqE2cx0UE_58HKIXNF91w0DtdNhAd_AEGEteuoAiDFisVThqbg4vhuU9E2FtqAcCFaoh68Iv8CT8ofvPtqGeGxOvH7qapAG74UbHmbs4MwFLONT36dMgcgFZE4OK0E7z_wN-SL5YXoedh97qjZFD1LMANiy5wk7xp_yyhtlg?purpose=inline)

[learn.unity.com](https://learn.unity.com/tutorial/working-with-unity-recorder?projectId=5d014bcaedbc2a0020e9d0d6\&utm_source=chatgpt.com)

Minh họa khu vực Package Manager dùng để quản lý package trong Unity.

Sau khi cài đặt, Unity Recorder sẽ có thể được truy cập từ giao diện Editor. Vị trí menu cụ thể có thể thay đổi theo phiên bản package.

### Bước 2. Mở Recorder Window

Với giao diện Recorder thường gặp, truy cập:

`Window > General > Recorder > Recorder Window`

Cửa sổ Recorder dùng để quản lý những tác vụ ghi hình, chẳng hạn video, chuỗi ảnh hoặc dữ liệu animation.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### Bước 3. Thêm Movie Recorder

Trong Recorder Window:

1. Chọn chức năng thêm Recorder.
2. Chọn loại `Movie Recorder`.
3. Đặt tên dễ nhận biết cho tác vụ ghi hình.
4. Mở phần cấu hình của Movie Recorder.

[Recording from the Recorder window | Unity Recorder | 2.5.7](https://images.openai.com/static-rsc-4/ClUPtxsqNIAG-v33xTjZbP_cTRgm45RolsARz_lGWW7l9XU4I9BfCGm72nCybsnVgKcljBd5cW1S6BOZLXBr7mKdKd4JxZ3sPgFh8p5unKjdAUd1WJRLGN31k4RP-b2S_ekYMVpbTaGQnMDwmv_K0-o-QVeEBMNT3AiWqylS_NA?purpose=inline)

[docs.unity3d.com](https://docs.unity3d.com/Packages/com.unity.recorder%402.5/manual/RecordingRecorderWindow.html?utm_source=chatgpt.com)

Minh họa giao diện cấu hình một Movie Recorder.

Movie Recorder được sử dụng để ghi hoạt động trong scene thành một tệp video.

### Bước 4. Cấu hình video

Có thể bắt đầu với cấu hình tham khảo:

| Thông số      | Giá trị đề xuất     | Mục đích                        |
| ------------- | ------------------- | ------------------------------- |
| Recorder Type | Movie Recorder      | Ghi video                       |
| Source/Input  | Game View           | Ghi nội dung camera hiển thị    |
| Format        | MP4 nếu được hỗ trợ | Dễ phát và chia sẻ              |
| Resolution    | 1920 × 1080         | Video Full HD                   |
| Frame Rate    | 30 FPS              | Phù hợp video demo thông thường |
| Audio         | Bật khi cần         | Ghi âm thanh dự án              |
| Output File   | Đường dẫn riêng     | Dễ quản lý và tìm video         |

Các thông số trên là cấu hình thực hành gợi ý, không phải yêu cầu cố định của Unity. Tùy package và nền tảng, tên hoặc tập hợp tùy chọn có thể khác nhau.

Một số điểm cần chú ý:

- `Resolution` quyết định kích thước khung hình.
- `Frame Rate` biểu thị số khung hình trong mỗi giây video.
- `Output File` xác định nơi lưu và tên tệp đầu ra.
- `Audio` cần được kiểm tra riêng vì không phải mọi kiểu ghi đều có âm thanh.

Đối với video đăng trên YouTube theo tỷ lệ ngang, Full HD 16:9 thường là lựa chọn thực tế.

### Bước 5. Bắt đầu ghi hình

Trong Recorder Window:

1. Kiểm tra chế độ ghi phù hợp, chẳng hạn `Manual`.
2. Bắt đầu ghi bằng chức năng `Start Recording`.
3. Cho scene chạy và thực hiện thao tác cần minh họa.
4. Kết thúc bằng `Stop Recording`.
5. Kiểm tra tệp video tại thư mục đầu ra.

Chế độ `Manual` cho phép chủ động bắt đầu và kết thúc quá trình ghi. Unity Recorder còn có thể cung cấp những chế độ ghi theo khung hình hoặc khoảng thời gian.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



Lưu ý: Một số cấu hình ghi hình theo khung hình cố định có thể làm tốc độ chạy trong Editor không giống thời gian thực. Với gameplay điều khiển bằng tay, cần kiểm tra xem phương pháp ghi có tạo cảm giác chuyển động tự nhiên hay không.

### Bước 6. Phát lại và kiểm tra video

Không nên chỉ kiểm tra sự tồn tại của tệp video.

Cần mở tệp bằng một trình phát độc lập và xác minh:

- Video phát từ đầu đến cuối.
- Nội dung không bị màn hình đen hoặc mất camera.
- Chuyển động không bị giật bất thường.
- Âm thanh và hình ảnh đồng bộ.
- UI không bị cắt bởi cạnh màn hình.
- Nội dung chính được ghi đầy đủ.

Video hoạt động trong một trình phát độc lập là bằng chứng rõ ràng hơn so với chỉ xem màn hình preview trong Unity Editor.

## 6. Ghi hình từ bản build

Unity Recorder chủ yếu phục vụ ghi nội dung trong Editor. Nếu cần chứng minh trò chơi chạy tốt sau khi xuất bản, nên thử nghiệm và quay trực tiếp bản build.

Quy trình thực hành:

1. Thiết lập nền tảng đích trong `Build Profiles`.
2. Đảm bảo scene cần thiết được đưa vào bản build.
3. Build dự án.
4. Khởi chạy ứng dụng đã build.
5. Sử dụng phần mềm quay màn hình để ghi gameplay.
6. Phát lại video và so sánh với kết quả khi chạy trong Editor.

### Vì sao kết quả giữa Editor và bản build có thể khác nhau?

Editor và bản build không hoàn toàn giống nhau về môi trường thực thi.

Một số khác biệt có thể đến từ:

| Nguyên nhân              | Biểu hiện                                  |
| ------------------------ | ------------------------------------------ |
| Thiếu scene trong build  | Scene mong muốn không chạy                 |
| Sai tham chiếu asset     | Đối tượng thiếu hình ảnh hoặc nội dung     |
| Cấu hình đồ họa khác     | Ánh sáng hoặc chất lượng hình ảnh thay đổi |
| Input phụ thuộc nền tảng | Người chơi không điều khiển được           |
| Hiệu năng thiết bị       | FPS giảm, animation giật                   |
| Cấu hình UI              | Giao diện bị lệch ở độ phân giải khác      |

Vì vậy, video quay trong Editor thể hiện hoạt động của dự án khi phát triển, còn video quay bản build có thể giúp minh chứng hành vi ở môi trường phát hành thực tế.

## 7. Chuẩn bị video cho Portfolio

Một video portfolio nên ngắn gọn và tập trung vào những phần thể hiện rõ kỹ năng của người thực hiện.

Ví dụ, với một dự án game 3D nhỏ, có thể thiết kế nội dung như sau:

| Phần       | Nội dung                              |
| ---------- | ------------------------------------- |
| Giới thiệu | Tên dự án và loại trò chơi            |
| Môi trường | Góc nhìn tổng quan của scene          |
| Gameplay   | Di chuyển và tương tác                |
| Tính năng  | Animation, hiệu ứng, âm thanh hoặc UI |
| Kết thúc   | Màn hình kết quả hoặc điểm nổi bật    |

Để video dễ theo dõi, nên hạn chế các cảnh đứng yên không cần thiết và tránh đưa vào những thao tác không liên quan.

Một portfolio cũng nên bổ sung README mô tả mục tiêu, vai trò thực hiện, cách chạy dự án và các hạn chế còn tồn tại.

## 8. Lỗi thường gặp và cách xử lý

| Hiện tượng                | Nguyên nhân có thể                             | Cách kiểm tra và xử lý                          |
| ------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| Không thấy video đầu ra   | Sai đường dẫn hoặc chưa hoàn tất ghi           | Kiểm tra Output File, trạng thái Recorder       |
| Video màn hình đen        | Camera hoặc nguồn hình ảnh không phù hợp       | Kiểm tra Game View, Camera và chế độ ghi        |
| Video bị giật             | Hiệu năng thấp hoặc cấu hình FPS không phù hợp | Kiểm tra FPS, thử độ phân giải thấp hơn         |
| Không có âm thanh         | Audio chưa được ghi hoặc cấu hình sai          | Kiểm tra nguồn âm thanh và cài đặt ghi          |
| Video bị cắt UI           | Tỷ lệ khung hình không khớp                    | Kiểm tra Canvas Scaler, Game View và resolution |
| Kết quả build khác Editor | Cấu hình build hoặc tài nguyên khác            | Chạy bản build và kiểm tra lỗi                  |
| File video bị ghi đè      | Trùng tên tệp đầu ra                           | Sử dụng tên tệp duy nhất cho mỗi lần ghi        |

### Quy trình Debug

\#chatgpt-mermaid-\_r_o0\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_o0\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_o0\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_o0\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_o0\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_o0\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_o0\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_o0\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_o0\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_o0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_o0\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_o0\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_o0\_ p{margin:0;}#chatgpt-mermaid-\_r_o0\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_o0\_ .label text,#chatgpt-mermaid-\_r_o0\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ .node rect,#chatgpt-mermaid-\_r_o0\_ .node circle,#chatgpt-mermaid-\_r_o0\_ .node ellipse,#chatgpt-mermaid-\_r_o0\_ .node polygon,#chatgpt-mermaid-\_r_o0\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .rough-node .label text,#chatgpt-mermaid-\_r_o0\_ .node .label text,#chatgpt-mermaid-\_r_o0\_ .image-shape .label,#chatgpt-mermaid-\_r_o0\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_o0\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .rough-node .label,#chatgpt-mermaid-\_r_o0\_ .node .label,#chatgpt-mermaid-\_r_o0\_ .image-shape .label,#chatgpt-mermaid-\_r_o0\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_o0\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_o0\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_o0\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_o0\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_o0\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_o0\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_o0\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_o0\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_o0\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_o0\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_o0\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_o0\_ .icon-shape,#chatgpt-mermaid-\_r_o0\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_o0\_ .icon-shape p,#chatgpt-mermaid-\_r_o0\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_o0\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_o0\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_o0\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_o0\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_o0\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_o0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_o0\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_o0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_o0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_o0\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_o0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_o0\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_o0\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_o0\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_o0\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_o0\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .node rect,#chatgpt-mermaid-\_r_o0\_ .node circle,#chatgpt-mermaid-\_r_o0\_ .node ellipse,#chatgpt-mermaid-\_r_o0\_ .node polygon,#chatgpt-mermaid-\_r_o0\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_o0\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_o0\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_o0\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_o0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_o0\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗi trong videoTái hiện lỗi trong UnityKiểm tra ConsoleKiểm tra Scene, Component vàRecorderĐưa ra một giả thuyếtChỉ thay đổi một cấu hìnhQuay thử lạiLỗi được khắc phục?Lưu video và ghi nhận kết quảKhôngCó

Điều quan trọng trong quá trình debug là chỉ thay đổi một nguyên nhân giả định mỗi lần, giúp xác định chính xác cấu hình nào ảnh hưởng đến kết quả.

## 9. Bài tập thực hành

### Bài tập 1 — Cơ bản

Yêu cầu: Quay một video thể hiện một scene đơn giản trong Unity.

Nhiệm vụ:

1. Chuẩn bị scene có ít nhất một đối tượng chuyển động.
2. Sử dụng Unity Recorder để ghi hình.
3. Lưu video và phát lại.
4. Ghi nhận kết quả.

Tiêu chí hoàn thành: Video phát được và thể hiện rõ chuyển động của đối tượng.

### Bài tập 2 — Vận dụng

Yêu cầu: So sánh hai cấu hình ghi hình khác nhau.

Thực hiện ghi cùng một scene với hai độ phân giải hoặc frame rate khác nhau.

Ghi nhận:

| Tiêu chí       | Lần ghi A   | Lần ghi B   |
| -------------- | ----------- | ----------- |
| Resolution     | 1280 × 720  | 1920 × 1080 |
| Frame Rate     | 30 FPS      | 30 FPS      |
| Độ rõ hình ảnh | Tự quan sát | Tự quan sát |
| Kích thước tệp | Đo thực tế  | Đo thực tế  |
| Độ mượt        | Tự đánh giá | Tự đánh giá |

Sau đó giải thích sự khác biệt quan sát được và lựa chọn cấu hình phù hợp hơn.

### Bài tập 3 — Mở rộng

Yêu cầu: Tạo video giới thiệu dự án Unity của riêng mình.

Video cần thể hiện ít nhất:

- Một scene hoàn chỉnh.
- Một tương tác điều khiển.
- Một chuyển động hoặc animation.
- Một tính năng nổi bật của dự án.
- Một phần kết thúc rõ ràng.

Ngoài video, chuẩn bị README ngắn với thông tin về dự án và hướng dẫn chạy.

## 10. Ghi chép kết quả thực hành

Sau khi hoàn thành, sử dụng bảng sau để lưu lại kết quả.

| Nội dung         | Ghi chép |
| ---------------- | -------- |
| Tên dự án        | ...      |
| Scene ghi hình   | ...      |
| Công cụ ghi      | ...      |
| Cấu hình video   | ...      |
| Kết quả mong đợi | ...      |
| Kết quả thực tế  | ...      |
| Lỗi phát hiện    | ...      |
| Cách xử lý       | ...      |
| Đường dẫn video  | ...      |

Mục tiêu của bảng ghi chép là giúp người học có thể giải thích quy trình đã thực hiện, thay vì chỉ cung cấp một tệp video mà không có thông tin kiểm chứng.

## 11. Checklist hoàn thành

Tiến độ thực hành

0/8

Dự án chạy ổn định trong Unity Editor

Kiểm tra Camera, GameObject và Console

Cấu hình được công cụ ghi hình

Ghi được ít nhất một video minh họa

Phát lại video và kiểm tra hình ảnh, âm thanh

Kiểm tra bản build khi cần chứng minh hoạt động sau phát hành

Ghi lại một lỗi và phương pháp khắc phục

Chuẩn bị video và README để chia sẻ

## 12. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

0/5 câu đã trả lời

Câu 1. Mục đích quan trọng nhất của video giới thiệu dự án Unity là gì?

A. Thay thế toàn bộ source code

B. Thể hiện trực quan cách dự án hoạt động

C. Loại bỏ mọi bước kiểm thử

D. Giảm kích thước bản build

Câu 2. Khi muốn ghi video trực tiếp từ Game View trong Editor, công cụ nào phù hợp?

A. Unity Recorder

B. Package Importer

C. Lighting Window

D. Build Profiles

Câu 3. Sau khi hoàn thành ghi hình, thao tác nào giúp xác minh tệp đầu ra?

A. Đổi tên scene

B. Đóng Project ngay lập tức

C. Xóa Console

D. Mở video bằng một trình phát độc lập

Câu 4. Khi UI trong video bị cắt, nên kiểm tra yếu tố nào trước?

A. Số lượng script

B. Tên các GameObject

C. Canvas Scaler và tỷ lệ khung hình

D. Màu sắc của Hierarchy

Câu 5. Vì sao cần kiểm tra bản build riêng với Editor?

A. Vì môi trường chạy, tài nguyên và cấu hình nền tảng có thể khác

B. Vì Recorder bắt buộc tạo build trước khi quay

C. Vì mọi bản build đều nhanh hơn Editor

D. Vì bản build không sử dụng Component

Chấm điểmLàm lại

## 13. Tổng kết

Bài thực hành Capture a Video of Your Project tập trung vào việc biến một dự án Unity đang hoạt động thành nội dung trực quan có thể chia sẻ.

Ba kỹ năng quan trọng nhất cần đạt được là:

1. Chuẩn bị dự án: Scene, camera, gameplay và âm thanh phải hoạt động ổn định.
2. Ghi hình đúng cách: Chọn công cụ, cấu hình hình ảnh và âm thanh, sau đó ghi lại hoạt động dự án.
3. Kiểm chứng và trình bày: Phát lại video, phát hiện lỗi, kiểm tra bản build và bổ sung thông tin phù hợp để chia sẻ.

Sản phẩm cuối cùng không chỉ là một tệp video, mà còn là bằng chứng trực quan về những kỹ năng Unity đã được áp dụng vào dự án thực tế.

Tài liệu tham khảo bổ sung

- [Unity Learn — Publishing Essentials](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials?version=6.3\&utm_source=chatgpt.com)
- [Unity Manual — Recorder](https://docs.unity3d.com/6000.0/Documentation/Manual/com.unity.recorder.html?utm_source=chatgpt.com)
- [Unity Learn — Working with Unity Recorder](https://learn.unity.com/tutorial/working-with-the-unity-recorder-2019-3?version=2019.3\&utm_source=chatgpt.com)

Ghi chú phiên bản: Nội dung thực hành được biên soạn cho ngữ cảnh Unity 6.3. Một số ảnh minh họa và tên tùy chọn có thể khác theo phiên bản Unity Recorder. Các bước chính thức, tài nguyên đính kèm và yêu cầu riêng của bài Unity Learn cần được đối chiếu tại liên kết khóa học.