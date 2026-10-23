# Bài 01 — Build Your Portfolio Project

Unity Essentials · Publishing Essentials · Tutorial · Unity 6.3

Chủ đề: Xây dựng, hoàn thiện, kiểm thử và chuẩn bị công bố dự án Unity trong portfolio cá nhân.

Tài liệu tham khảo: [Unity Learn — Publishing Essentials](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Sau khi tạo được một trò chơi hoặc ứng dụng tương tác trong Unity, bước tiếp theo là biến sản phẩm đang phát triển thành một dự án hoàn chỉnh có thể chạy, kiểm thử và giới thiệu cho người khác.

Một dự án dùng trong portfolio không nhất thiết phải lớn hoặc có đồ họa phức tạp. Quan trọng hơn, dự án phải thể hiện rõ kỹ năng của người phát triển, hoạt động ổn định và có bằng chứng về kết quả thực hiện.

Trong bài học này, chúng ta sẽ xây dựng một Portfolio Project với năm hoạt động chính:

1. Xác định mục tiêu và phạm vi dự án.
2. Hoàn thiện Scene và các tương tác.
3. Kiểm thử trong Unity Editor và bản build.
4. Chuẩn bị hình ảnh, video minh họa.
5. Viết tài liệu giới thiệu dự án.

Kết quả cuối cùng: Một dự án Unity nhỏ, có thể chạy độc lập trên nền tảng đã chọn, kèm README và tài liệu minh chứng phù hợp để đưa vào portfolio.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

- Xác định mục tiêu, tính năng chính và tiêu chí hoàn thành của một dự án Unity.
- Rà soát GameObject, Component, Scene và tài nguyên trước khi build.
- Cấu hình nền tảng đích và tạo một bản build có thể chạy.
- Kiểm thử dự án ngoài Unity Editor để phát hiện sự khác biệt giữa môi trường phát triển và môi trường thực tế.
- Phân tích và sửa một số lỗi thường gặp trong quá trình build.
- Trình bày dự án thông qua README, hình ảnh và video minh họa.

## 3. Xác định dự án portfolio

### 3.1. Portfolio Project là gì?

Portfolio Project là một sản phẩm được lựa chọn và trình bày nhằm chứng minh năng lực thực tế của người phát triển.

Trong Unity, một Portfolio Project có thể là trò chơi 2D, trò chơi 3D, môi trường tương tác, ứng dụng mô phỏng hoặc một bản demo kỹ thuật.

Một dự án portfolio tốt cần trả lời được những câu hỏi:

| Câu hỏi                         | Nội dung cần thể hiện                      |
| ------------------------------- | ------------------------------------------ |
| Dự án làm gì?                   | Mục đích và trải nghiệm chính              |
| Người dùng tương tác thế nào?   | Điều khiển, thao tác và phản hồi           |
| Đã sử dụng kỹ năng gì?          | Scene, Component, Prefab, Script, Audio... |
| Người phát triển đóng góp gì?   | Vai trò và các phần tự thực hiện           |
| Sản phẩm hoạt động ra sao?      | Ảnh, video hoặc bản build chạy được        |
| Những vấn đề nào đã giải quyết? | Lỗi phát sinh và cách khắc phục            |

### 3.2. Lựa chọn phạm vi phù hợp

Để thực hành, có thể sử dụng một dự án Unity đã tạo hoặc xây dựng một bản demo nhỏ.

Ví dụ: Trò chơi thu thập vật phẩm 2D

[Journey of Haha on Steam](https://images.openai.com/static-rsc-4/RhGwf55zu8Ynvj3qll-nZ6aS89BrU86hVZ8mrZfEgFrfi4VbpGbHkRntyvogHKeMNIv_D2qIIic89RK8flLcWWn4xic0wB1SRF0pd1zIH245eWx2XEqgcPprK-7kMUUPEjBNQllFZhOHCjWRTe-OkouUiFr-ZhN-qkYXmeJyTGA?purpose=inline)

[store.steampowered.com](https://store.steampowered.com/app/697670/Journey_of_Haha/?utm_source=chatgpt.com)

Minh họa ý tưởng: Một nhân vật di chuyển trong căn phòng 2D để thu thập vật phẩm.

Dự án mẫu có các yêu cầu sau:

| Thành phần | Yêu cầu                                              |
| ---------- | ---------------------------------------------------- |
| Scene      | Một căn phòng 2D hoàn chỉnh                          |
| Nhân vật   | Có thể di chuyển bằng bàn phím                       |
| Vật phẩm   | Có thể thu thập khi nhân vật chạm vào                |
| Animation  | Có ít nhất một đối tượng được hoạt hình hóa          |
| Audio      | Phát âm thanh khi thực hiện một tương tác            |
| Kết quả    | Người chơi nhận biết được khi đã hoàn thành mục tiêu |

Đây là phạm vi ví dụ. Nếu đã có dự án 3D, có thể giữ nguyên dự án đó và áp dụng cùng quy trình hoàn thiện, kiểm thử và trình bày.

## 4. Quy trình xây dựng Portfolio Project

\#chatgpt-mermaid-\_r_t0\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_t0\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_t0\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_t0\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_t0\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_t0\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_t0\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_t0\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_t0\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_t0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t0\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t0\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_t0\_ p{margin:0;}#chatgpt-mermaid-\_r_t0\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_t0\_ .label text,#chatgpt-mermaid-\_r_t0\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ .node rect,#chatgpt-mermaid-\_r_t0\_ .node circle,#chatgpt-mermaid-\_r_t0\_ .node ellipse,#chatgpt-mermaid-\_r_t0\_ .node polygon,#chatgpt-mermaid-\_r_t0\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .rough-node .label text,#chatgpt-mermaid-\_r_t0\_ .node .label text,#chatgpt-mermaid-\_r_t0\_ .image-shape .label,#chatgpt-mermaid-\_r_t0\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_t0\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .rough-node .label,#chatgpt-mermaid-\_r_t0\_ .node .label,#chatgpt-mermaid-\_r_t0\_ .image-shape .label,#chatgpt-mermaid-\_r_t0\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_t0\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_t0\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t0\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t0\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_t0\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_t0\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_t0\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_t0\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_t0\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_t0\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t0\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_t0\_ .icon-shape,#chatgpt-mermaid-\_r_t0\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_t0\_ .icon-shape p,#chatgpt-mermaid-\_r_t0\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_t0\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_t0\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_t0\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_t0\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_t0\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_t0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_t0\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_t0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_t0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t0\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_t0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t0\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_t0\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_t0\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_t0\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_t0\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .node rect,#chatgpt-mermaid-\_r_t0\_ .node circle,#chatgpt-mermaid-\_r_t0\_ .node ellipse,#chatgpt-mermaid-\_r_t0\_ .node polygon,#chatgpt-mermaid-\_r_t0\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_t0\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_t0\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_t0\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_t0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t0\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Xác định mục tiêu dự ánRà soát Scene và AssetHoàn thiện tính năngKiểm thử trong EditorĐạt yêu cầu?Sửa lỗiCấu hình và tạo BuildKiểm thử bản BuildHoạt động ổn định?Ghi hình và viết READMEHoàn thiện PortfolioChưaĐạtKhôngCó

Quy trình chia thành hai giai đoạn quan trọng: phát triển và xác minh sản phẩm.

Kiểm thử trong Unity Editor giúp phát hiện sớm các lỗi về Component, Script và tương tác. Tuy nhiên, chỉ khi bản build thực tế hoạt động đúng, dự án mới có đủ cơ sở để được giới thiệu như một sản phẩm hoàn thiện.

## 5. Thực hành từng bước

### 5.1. Bước 1 — Xác định kết quả mong đợi

Trước khi tiếp tục phát triển, hãy viết ra một danh sách ngắn những gì dự án phải thực hiện được.

Ví dụ, với trò chơi thu thập vật phẩm:

| Tình huống           | Kết quả mong đợi                                      |
| -------------------- | ----------------------------------------------------- |
| Người chơi bắt đầu   | Scene được tải và hiển thị đúng                       |
| Nhấn phím điều khiển | Nhân vật di chuyển đúng hướng                         |
| Chạm vào vật phẩm    | Vật phẩm được thu thập                                |
| Thu thập vật phẩm    | Có hiệu ứng hoặc âm thanh phản hồi                    |
| Thu thập đủ vật phẩm | Trò chơi thông báo hoàn thành                         |
| Chạy bản build       | Các chức năng hoạt động như khi kiểm thử trong Editor |

Bảng này đóng vai trò như bộ Acceptance Criteria — tiêu chí chấp nhận sản phẩm.

Checkpoint 1: Có thể mô tả rõ dự án cần làm gì và xác định được cách kiểm tra từng yêu cầu.

### 5.2. Bước 2 — Rà soát Scene và GameObject

Mở dự án bằng Unity Editor và kiểm tra Scene chính.

Những thành phần cần chú ý gồm:

| Thành phần     | Nội dung kiểm tra                                           |
| -------------- | ----------------------------------------------------------- |
| `Scene`        | Đã lưu và chứa đúng các đối tượng                           |
| `GameObject`   | Có tồn tại, đang được kích hoạt                             |
| `Transform`    | Vị trí, góc quay và tỷ lệ chính xác                         |
| `Component`    | Được gắn đúng đối tượng, cấu hình phù hợp                   |
| `Prefab`       | Không thiếu tham chiếu quan trọng                           |
| `Camera`       | Hiển thị đúng khu vực trò chơi                              |
| `Audio Source` | Đã được cấu hình và tham chiếu AudioClip khi cần            |
| `Script`       | Không có lỗi biên dịch hoặc lỗi thực thi làm hỏng tính năng |

Một điểm quan trọng: Một GameObject có thể xuất hiện trong `Hierarchy` nhưng không hiển thị trong `Game view` nếu vị trí, trạng thái kích hoạt, Sprite Renderer hoặc Camera chưa được cấu hình đúng.

Khi phát hiện sự khác biệt, chọn đối tượng và kiểm tra các Component trong `Inspector` thay vì thay đổi ngẫu nhiên nhiều thuộc tính cùng lúc.

Checkpoint 2: Scene hiển thị đúng và không còn tham chiếu bị thiếu đối với những tính năng bắt buộc.

### 5.3. Bước 3 — Hoàn thiện tương tác và kiểm thử trong Play Mode

Chọn nút Play trong Unity Editor để chạy thử dự án.

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

[learn.unity.com](https://learn.unity.com/tutorial/get-started-with-unity-in-editor-tutorial?utm_source=chatgpt.com)

Trong quá trình kiểm thử, hãy quan sát:

- Nhân vật có phản hồi đúng thao tác điều khiển không?
- Vật phẩm có hoạt động đúng khi tương tác không?
- Animation và âm thanh có xuất hiện đúng thời điểm không?
- Scene có xảy ra lỗi trong `Console` không?
- Trạng thái trò chơi có thay đổi đúng theo hành động của người chơi không?

Đặc biệt, cần lưu ý rằng những thay đổi thực hiện trong Inspector khi đang ở Play Mode thường không được giữ lại khi thoát Play Mode. Vì vậy, các giá trị cần sử dụng lâu dài phải được thiết lập ngoài Play Mode hoặc lưu lại bằng cách phù hợp.

Checkpoint 3: Chơi thử được toàn bộ tương tác chính từ lúc bắt đầu đến lúc hoàn thành.

### 5.4. Bước 4 — Cấu hình và tạo bản Build

Build là quá trình Unity chuyển dự án thành sản phẩm có thể triển khai trên nền tảng đích.

Trong Unity 6.3, có thể thực hiện quy trình cơ bản như sau:

1. Lưu các Scene và thay đổi cần thiết.
2. Mở `File > Build Profiles`.
3. Chọn nền tảng mục tiêu, chẳng hạn Windows hoặc nền tảng khác đã cài hỗ trợ.
4. Chọn hoặc tạo Build Profile phù hợp.
5. Kiểm tra danh sách Scene được đưa vào build và bảo đảm Scene khởi đầu được cấu hình đúng.
6. Kiểm tra các thiết lập liên quan đến ứng dụng, độ phân giải và chất lượng khi cần.
7. Chọn `Build` để tạo bản chạy hoặc `Build And Run` để build rồi khởi chạy.

Tên và vị trí một số tùy chọn có thể thay đổi tùy nền tảng và cấu hình Unity.

\#chatgpt-mermaid-\_r_th\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_th\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_th\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_th\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_th\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_th\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_th\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_th\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_th\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_th\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_th\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_th\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_th\_ p{margin:0;}#chatgpt-mermaid-\_r_th\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_th\_ .label text,#chatgpt-mermaid-\_r_th\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ .node rect,#chatgpt-mermaid-\_r_th\_ .node circle,#chatgpt-mermaid-\_r_th\_ .node ellipse,#chatgpt-mermaid-\_r_th\_ .node polygon,#chatgpt-mermaid-\_r_th\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .rough-node .label text,#chatgpt-mermaid-\_r_th\_ .node .label text,#chatgpt-mermaid-\_r_th\_ .image-shape .label,#chatgpt-mermaid-\_r_th\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_th\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .rough-node .label,#chatgpt-mermaid-\_r_th\_ .node .label,#chatgpt-mermaid-\_r_th\_ .image-shape .label,#chatgpt-mermaid-\_r_th\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_th\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_th\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_th\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_th\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_th\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_th\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_th\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_th\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_th\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_th\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_th\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_th\_ .icon-shape,#chatgpt-mermaid-\_r_th\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_th\_ .icon-shape p,#chatgpt-mermaid-\_r_th\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_th\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_th\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_th\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_th\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_th\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_th\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_th\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_th\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_th\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_th\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_th\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_th\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_th\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_th\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_th\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_th\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_th\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .node rect,#chatgpt-mermaid-\_r_th\_ .node circle,#chatgpt-mermaid-\_r_th\_ .node ellipse,#chatgpt-mermaid-\_r_th\_ .node polygon,#chatgpt-mermaid-\_r_th\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_th\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_th\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_th\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_th\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_th\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Unity ProjectBuild ProfileNền tảng đíchScene + Asset + Cấu hìnhBuildỨng dụng chạy độc lập

Việc tạo build không đơn thuần là xuất dữ liệu. Unity còn phải chuẩn bị tài nguyên và nội dung cần thiết cho nền tảng được chọn.

Checkpoint 4: Có bản build tạo thành công, lưu đúng vị trí và có thể khởi chạy trên nền tảng đích.

### 5.5. Bước 5 — Kiểm thử bản build thực tế

Không nên mặc định rằng một dự án chạy đúng trong Unity Editor sẽ hoạt động giống hệt khi build.

| Tiêu chí      | Unity Editor                                      | Bản Build                                                             |
| ------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| Mục đích      | Phát triển và debug                               | Chạy trên nền tảng đích                                               |
| Điều khiển    | Kiểm thử trực tiếp trong Editor                   | Phụ thuộc cấu hình ứng dụng và thiết bị                               |
| Tài nguyên    | Có thể truy cập các tài nguyên phục vụ phát triển | Chỉ có nội dung được đưa vào build hoặc được cung cấp hợp lệ lúc chạy |
| Chất lượng    | Phụ thuộc môi trường Editor                       | Phụ thuộc cấu hình build và thiết bị                                  |
| Phát hiện lỗi | Theo dõi bằng Unity Console                       | Có thể cần log ứng dụng hoặc công cụ debug của nền tảng               |

Hãy mở bản build và thực hiện toàn bộ quy trình chơi từ đầu đến cuối.

Nếu có điều kiện, kiểm thử trên một thiết bị khác hoặc trong một môi trường không có Unity Editor để phát hiện sự phụ thuộc không mong muốn vào máy phát triển.

Checkpoint 5: Bản build thực hiện được những chức năng chính và không có lỗi nghiêm trọng ngăn cản người dùng hoàn thành trải nghiệm.

### 5.6. Bước 6 — Thu thập minh chứng

Sau khi build hoạt động, chuẩn bị các minh chứng thể hiện sản phẩm thực tế.

Một bộ minh chứng phù hợp gồm ảnh chụp màn hình trò chơi, đoạn video ghi lại tương tác chính và mô tả những tính năng đã triển khai.

Video demo nên thể hiện các hoạt động quan trọng theo trình tự hợp lý:

\#chatgpt-mermaid-\_r_tr\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_tr\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_tr\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_tr\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_tr\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_tr\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_tr\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_tr\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_tr\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_tr\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_tr\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_tr\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_tr\_ p{margin:0;}#chatgpt-mermaid-\_r_tr\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_tr\_ .label text,#chatgpt-mermaid-\_r_tr\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ .node rect,#chatgpt-mermaid-\_r_tr\_ .node circle,#chatgpt-mermaid-\_r_tr\_ .node ellipse,#chatgpt-mermaid-\_r_tr\_ .node polygon,#chatgpt-mermaid-\_r_tr\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .rough-node .label text,#chatgpt-mermaid-\_r_tr\_ .node .label text,#chatgpt-mermaid-\_r_tr\_ .image-shape .label,#chatgpt-mermaid-\_r_tr\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_tr\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .rough-node .label,#chatgpt-mermaid-\_r_tr\_ .node .label,#chatgpt-mermaid-\_r_tr\_ .image-shape .label,#chatgpt-mermaid-\_r_tr\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_tr\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_tr\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_tr\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_tr\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_tr\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_tr\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_tr\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_tr\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_tr\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_tr\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_tr\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_tr\_ .icon-shape,#chatgpt-mermaid-\_r_tr\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_tr\_ .icon-shape p,#chatgpt-mermaid-\_r_tr\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_tr\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_tr\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_tr\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_tr\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_tr\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_tr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_tr\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_tr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_tr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_tr\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_tr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_tr\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_tr\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_tr\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_tr\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_tr\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .node rect,#chatgpt-mermaid-\_r_tr\_ .node circle,#chatgpt-mermaid-\_r_tr\_ .node ellipse,#chatgpt-mermaid-\_r_tr\_ .node polygon,#chatgpt-mermaid-\_r_tr\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_tr\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_tr\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_tr\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_tr\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_tr\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Mở ứng dụngGiới thiệu SceneThao tác điều khiểnTương tác chínhKết quả hoàn thành

Ưu tiên ghi hình trực tiếp từ ứng dụng đã build thay vì chỉ quay Scene trong Unity Editor. Điều này giúp chứng minh sản phẩm thực sự có thể chạy.

### 5.7. Bước 7 — Viết README giới thiệu dự án

README là tài liệu giúp người xem nhanh chóng nắm được nội dung, chức năng và cách sử dụng sản phẩm.

Có thể sử dụng mẫu Markdown sau:

```

# 2D Collectible Game

## Giới thiệu
Trò chơi 2D được xây dựng bằng Unity.
Người chơi điều khiển nhân vật trong một căn phòng
và thu thập các vật phẩm để hoàn thành mục tiêu.

## Tính năng
- Điều khiển nhân vật.
- Thu thập vật phẩm.
- Animation cho đối tượng.
- Âm thanh tương tác.
- Thông báo hoàn thành.

## Công nghệ
- Unity 6.3
- C#
- Unity 2D

## Cách chơi
1. Khởi động trò chơi.
2. Sử dụng các phím điều khiển đã cấu hình.
3. Thu thập đủ vật phẩm.
4. Quan sát thông báo hoàn thành.

## Yêu cầu hệ thống
Điền nền tảng và yêu cầu đã kiểm thử thực tế.

## Cách chạy
Mở bản build tương ứng với nền tảng được hỗ trợ.

## Vai trò cá nhân
Mô tả các thành phần trực tiếp thiết kế và triển khai.

## Lỗi đã biết
Liệt kê những lỗi còn tồn tại, nếu có.

## Asset và giấy phép
Ghi nguồn và điều kiện sử dụng tài nguyên bên thứ ba.

```

README phải phản ánh đúng sản phẩm thực tế. Không nên liệt kê các tính năng, nền tảng hoặc yêu cầu hệ thống chưa được kiểm chứng.

## 6. Kiểm thử và xử lý lỗi

### 6.1. Các lỗi thường gặp

| Hiện tượng                            | Nguyên nhân có thể                                           | Hướng kiểm tra                                                   |
| ------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| Build chạy nhưng không mở đúng Scene  | Scene khởi đầu chưa được cấu hình đúng                       | Kiểm tra danh sách và thứ tự Scene trong Build Profile           |
| GameObject không xuất hiện            | Đối tượng bị tắt, sai vị trí hoặc không được Camera hiển thị | Kiểm tra Hierarchy, Transform, Renderer và Camera                |
| Script không hoạt động                | Thiếu Component, lỗi thực thi hoặc tham chiếu                | Kiểm tra Console và Inspector                                    |
| Âm thanh không phát                   | Thiếu AudioClip hoặc cấu hình âm thanh chưa phù hợp          | Kiểm tra Audio Source, Audio Listener và thiết lập âm lượng      |
| Chạy trong Editor nhưng lỗi khi build | Khác biệt nền tảng hoặc tài nguyên phụ thuộc Editor          | Xem log bản build và rà soát cách truy cập dữ liệu               |
| Bản build thiếu tài nguyên            | Tài nguyên chưa được đưa vào build theo cách phù hợp         | Kiểm tra tham chiếu, quy trình đóng gói và phương thức tải asset |

### 6.2. Quy trình debug có hệ thống

\#chatgpt-mermaid-\_r_ua\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ua\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ua\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ua\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ua\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ua\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ua\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ua\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ua\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ua\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ua\_ p{margin:0;}#chatgpt-mermaid-\_r_ua\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ua\_ .label text,#chatgpt-mermaid-\_r_ua\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .node rect,#chatgpt-mermaid-\_r_ua\_ .node circle,#chatgpt-mermaid-\_r_ua\_ .node ellipse,#chatgpt-mermaid-\_r_ua\_ .node polygon,#chatgpt-mermaid-\_r_ua\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .rough-node .label text,#chatgpt-mermaid-\_r_ua\_ .node .label text,#chatgpt-mermaid-\_r_ua\_ .image-shape .label,#chatgpt-mermaid-\_r_ua\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ua\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .rough-node .label,#chatgpt-mermaid-\_r_ua\_ .node .label,#chatgpt-mermaid-\_r_ua\_ .image-shape .label,#chatgpt-mermaid-\_r_ua\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ua\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ua\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ua\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ua\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ua\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ua\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ua\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ua\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ua\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ua\_ .icon-shape,#chatgpt-mermaid-\_r_ua\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ua\_ .icon-shape p,#chatgpt-mermaid-\_r_ua\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ua\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ua\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ua\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ua\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ua\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ua\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ua\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ua\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ua\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ua\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ua\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .node rect,#chatgpt-mermaid-\_r_ua\_ .node circle,#chatgpt-mermaid-\_r_ua\_ .node ellipse,#chatgpt-mermaid-\_r_ua\_ .node polygon,#chatgpt-mermaid-\_r_ua\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ua\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ua\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ua\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ua\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ua\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiQuan sát Console / LogKiểm tra Scene, Object vàComponentĐưa ra giả thuyếtThay đổi một yếu tốChạy kiểm thử lạiLỗi đã được xử lý?Ghi nhận kết quảKhôngCó

Điểm cốt lõi của quy trình là mỗi lần chỉ thay đổi một nguyên nhân giả định, sau đó kiểm thử lại. Nhờ vậy, có thể xác định thay đổi nào đã giải quyết vấn đề thay vì sửa nhiều thứ mà không biết nguyên nhân thực sự.

### 6.3. Mẫu ghi chép kiểm thử

| Mục                | Ví dụ                                           |
| ------------------ | ----------------------------------------------- |
| Tính năng          | Thu thập vật phẩm                               |
| Kết quả mong đợi   | Vật phẩm biến mất và phát âm thanh              |
| Kết quả thực tế    | Vật phẩm biến mất nhưng không có âm thanh       |
| Bằng chứng         | Ảnh Inspector, Console hoặc video               |
| Giả thuyết         | Audio Source chưa được cấu hình đúng            |
| Hành động kiểm tra | Kiểm tra tham chiếu AudioClip và điều kiện phát |
| Kết quả sau sửa    | Ghi lại kết quả kiểm thử thực tế                |

Ghi chép này giúp theo dõi tiến độ sửa lỗi và có thể sử dụng làm bằng chứng về năng lực giải quyết vấn đề trong portfolio.

## 7. Sản phẩm cần bàn giao

Để một Portfolio Project được đánh giá đầy đủ, nên chuẩn bị các thành phần sau:

| Deliverable    | Nội dung                          | Tiêu chí                                      |
| -------------- | --------------------------------- | --------------------------------------------- |
| Unity Project  | Project và các Scene cần thiết    | Có thể mở, kiểm tra, chỉnh sửa                |
| Playable Build | Bản chạy trên nền tảng đã chọn    | Khởi chạy và thực hiện được tương tác chính   |
| Screenshot     | Hình ảnh giao diện, gameplay      | Thể hiện đúng sản phẩm                        |
| Demo Video     | Video quay quá trình chạy         | Chứng minh tính năng hoạt động                |
| README         | Giới thiệu và hướng dẫn           | Rõ mục đích, cách chạy và vai trò cá nhân     |
| Test Notes     | Ghi chép kiểm thử                 | Có kết quả mong đợi, thực tế và lỗi phát sinh |
| Asset Credits  | Thông tin tài nguyên và giấy phép | Tuân thủ điều kiện sử dụng                    |

Lưu ý: Trước khi đăng tải công khai, cần kiểm tra quyền sử dụng nhạc, hình ảnh, model, font và các tài nguyên khác. Không đưa khóa API, thông tin đăng nhập hoặc dữ liệu cá nhân không cần thiết vào dự án công khai.

## 8. Bài tập thực hành

### Bài tập A — Hoàn thiện sản phẩm cơ bản

Yêu cầu: Chuẩn bị một Scene Unity có ít nhất một tương tác quan sát được.

Thực hiện kiểm tra Scene, GameObject, Component và các tham chiếu tài nguyên. Sau đó chạy thử bằng Play Mode và mô tả kết quả.

Tiêu chí hoàn thành: Scene hoạt động đúng với mục tiêu đã xác định và người học có thể giải thích cách kiểm chứng.

### Bài tập B — Tạo và kiểm thử bản Build

Yêu cầu: Chuyển dự án sang một nền tảng mục tiêu được hỗ trợ, tạo build và chạy thử.

Trước khi build, dự đoán những điểm có thể khác so với khi chạy trong Editor. Sau khi build, so sánh kết quả thực tế với dự đoán.

Tiêu chí hoàn thành: Có bản build khởi chạy được và một bảng ghi nhận kết quả kiểm thử.

### Bài tập C — Chuẩn bị Portfolio

Yêu cầu: Hoàn thiện bộ tài liệu giới thiệu dự án gồm:

- README mô tả mục đích, cách chạy, tính năng và vai trò cá nhân.
- Ảnh hoặc video minh họa sản phẩm thực tế.
- Ghi chép ít nhất một vấn đề phát sinh cùng cách kiểm tra và xử lý.

Tiêu chí hoàn thành: Người chưa từng mở Unity có thể đọc phần giới thiệu và nhận biết được dự án làm gì, kết quả ra sao và cách sử dụng sản phẩm.

## 9. Checklist hoàn thành

Tiến độ thực hành

0/8 mục

Xác định được mục tiêu và các tính năng chính của dự án.

Rà soát Scene, GameObject và các Component quan trọng.

Kiểm thử thành công tương tác chính trong Play Mode.

Cấu hình đúng nền tảng và Scene khởi đầu cho bản build.

Tạo và chạy thử bản build thực tế.

Ghi lại ít nhất một lỗi hoặc tình huống kiểm thử.

Chuẩn bị ảnh hoặc video minh chứng.

Viết README và kiểm tra quyền sử dụng tài nguyên.

## 10. Câu hỏi ôn tập trắc nghiệm

Câu 1&#x20;

Mục đích chính của một Portfolio Project trong Unity là gì?

A. Chứng minh kỹ năng thông qua sản phẩm có thể kiểm chứng

B. Sử dụng càng nhiều asset càng tốt

C. Chỉ giới thiệu giao diện Unity Editor

D. Tạo dự án có số lượng Scene lớn nhất

Kiểm tra đáp án

Câu 2&#x20;

Một trò chơi chạy bình thường trong Unity Editor nhưng không hoạt động đúng sau khi build. Cách xử lý nào phù hợp nhất?

A. Thay đổi toàn bộ Script ngay lập tức

B. Xóa các Scene phụ

C. Kiểm tra log bản build, cấu hình nền tảng và các tài nguyên liên quan

D. Cho rằng bản build không cần kiểm thử

Kiểm tra đáp án

Câu 3&#x20;

Điều gì cần kiểm tra khi bản build khởi động nhưng không mở Scene mong muốn?

A. Chỉ kiểm tra chất lượng Texture

B. Danh sách Scene và Scene khởi đầu trong Build Profile

C. Chỉ thay đổi tốc độ Animation

D. Đổi tên tất cả GameObject

Kiểm tra đáp án

Câu 4&#x20;

Thành phần nào cung cấp bằng chứng rõ ràng nhất rằng sản phẩm thực sự chạy ngoài Editor?

A. Một ảnh Hierarchy

B. Danh sách tên các Script

C. Ảnh cửa sổ Inspector

D. Video ghi lại tương tác trong bản build

Kiểm tra đáp án

Câu 5&#x20;

Tại sao khi debug nên thay đổi một nguyên nhân giả định rồi kiểm thử lại?

A. Để xác định thay đổi nào thực sự giải quyết lỗi

B. Để tránh phải sử dụng Console

C. Để mọi GameObject có cùng thuộc tính

D. Để không cần ghi lại kết quả

Kiểm tra đáp án

## 11. Tổng kết

Hoàn thành Portfolio Project là quá trình biến một dự án Unity đang phát triển thành sản phẩm có thể giới thiệu và đánh giá được.

Ba nguyên tắc quan trọng nhất của bài học là:

- Sản phẩm phải hoạt động: Không chỉ chạy trong Editor mà cần kiểm thử bản build thực tế.
- Kết quả phải kiểm chứng được: Sử dụng tiêu chí chấp nhận, ghi chép lỗi, hình ảnh và video để chứng minh.
- Đóng góp phải được trình bày rõ: README cần cho thấy mục tiêu, kỹ năng đã áp dụng, vai trò cá nhân và kết quả đạt được.

Một dự án nhỏ nhưng ổn định, được kiểm thử đầy đủ và trình bày tốt có giá trị portfolio cao hơn một dự án có quá nhiều tính năng nhưng chưa hoàn thiện.

Ghi chú phiên bản: Các thao tác được trình bày theo bối cảnh Unity 6.3. Giao diện Build Profiles, hỗ trợ nền tảng và các lựa chọn cấu hình có thể khác giữa các phiên bản hoặc môi trường cài đặt.