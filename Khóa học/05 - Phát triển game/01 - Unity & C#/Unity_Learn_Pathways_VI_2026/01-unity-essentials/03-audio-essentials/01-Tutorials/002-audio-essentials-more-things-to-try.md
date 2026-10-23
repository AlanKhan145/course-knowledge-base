# Bài 02 — Audio Essentials: More Things to Try

Pathway: Unity Essentials Module: Audio Essentials Loại bài học: Tutorial — Thực hành mở rộng Phiên bản: Unity 6.3 Chủ đề: Âm thanh trong môi trường 3D và phản hồi tương tác

## 1. Tổng quan bài học

Âm thanh là một thành phần quan trọng trong trải nghiệm game. Ngoài việc tạo không khí, âm thanh còn giúp người chơi nhận biết các sự kiện, xác định vị trí đối tượng và phản hồi với những hành động đang diễn ra.

Ví dụ, trong một trò chơi khám phá:

- Tiếng nhạc nền phát liên tục để xây dựng bầu không khí.
- Tiếng máy móc phát ra từ một vị trí cụ thể trong không gian.
- Tiếng nhặt vật phẩm xuất hiện khi người chơi tương tác.
- Âm thanh trở nên nhỏ hơn khi người chơi di chuyển ra xa nguồn phát.

Unity cung cấp hệ thống âm thanh cho phép xây dựng những hành vi này thông qua các Component như `Audio Source`, `Audio Listener` và các tài nguyên `AudioClip`.

Bài thực hành tập trung vào việc cấu hình âm thanh, thử nghiệm các thuộc tính trong Inspector và kiểm tra kết quả trực tiếp trong Unity Editor.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của `Audio Source`, `Audio Listener` và `AudioClip`.
2. Phân biệt âm thanh 2D với âm thanh 3D.
3. Cấu hình âm nền phát liên tục trong một Scene.
4. Điều chỉnh `Play On Awake`, `Loop`, `Volume` và `Spatial Blend`.
5. Kiểm tra ảnh hưởng của khoảng cách tới âm thanh 3D.
6. Tạo một tương tác phát âm thanh khi người chơi thực hiện hành động.
7. Xác định và khắc phục các lỗi âm thanh thường gặp.

## 3. Kiến thức cốt lõi

### 3.1. Các thành phần trong hệ thống âm thanh Unity

| Thành phần       | Chức năng                                        |
| ---------------- | ------------------------------------------------ |
| `AudioClip`      | Tài nguyên chứa dữ liệu âm thanh                 |
| `Audio Source`   | Component phát âm thanh                          |
| `Audio Listener` | Component tiếp nhận âm thanh trong Scene         |
| `GameObject`     | Đối tượng chứa các Component                     |
| `Transform`      | Xác định vị trí, góc quay và tỉ lệ của đối tượng |
| `Inspector`      | Giao diện cấu hình các thuộc tính của Component  |
| `Play Mode`      | Chế độ chạy thử Scene và kiểm chứng hành vi      |

Để phát một âm thanh cơ bản, cần có một `Audio Source` được cấu hình để phát một `AudioClip`, đồng thời Scene phải có `Audio Listener` hoạt động.

### 3.2. Cách hệ thống âm thanh hoạt động

\#chatgpt-mermaid-\_r_ln\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ln\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ln\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ln\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ln\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ln\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ln\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ln\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ln\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ln\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ln\_ p{margin:0;}#chatgpt-mermaid-\_r_ln\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ln\_ .label text,#chatgpt-mermaid-\_r_ln\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .node rect,#chatgpt-mermaid-\_r_ln\_ .node circle,#chatgpt-mermaid-\_r_ln\_ .node ellipse,#chatgpt-mermaid-\_r_ln\_ .node polygon,#chatgpt-mermaid-\_r_ln\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .rough-node .label text,#chatgpt-mermaid-\_r_ln\_ .node .label text,#chatgpt-mermaid-\_r_ln\_ .image-shape .label,#chatgpt-mermaid-\_r_ln\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ln\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .rough-node .label,#chatgpt-mermaid-\_r_ln\_ .node .label,#chatgpt-mermaid-\_r_ln\_ .image-shape .label,#chatgpt-mermaid-\_r_ln\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ln\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ln\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ln\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ln\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ln\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ln\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ln\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ln\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ln\_ .icon-shape,#chatgpt-mermaid-\_r_ln\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ln\_ .icon-shape p,#chatgpt-mermaid-\_r_ln\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ln\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ln\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ln\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ln\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ln\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ln\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ln\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ln\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ln\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .node rect,#chatgpt-mermaid-\_r_ln\_ .node circle,#chatgpt-mermaid-\_r_ln\_ .node ellipse,#chatgpt-mermaid-\_r_ln\_ .node polygon,#chatgpt-mermaid-\_r_ln\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ln\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ln\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ln\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}AudioClip — Tệp âm thanhAudio Source — Bộ phátSpatial BlendÂm thanh không suy giảmtheo khoảng cáchÂm thanh chịu ảnh hưởng củavị trí và khoảng cáchAudio ListenerĐầu ra âm thanh2D3D

Sơ đồ thể hiện quá trình âm thanh được đưa từ tài nguyên `AudioClip` tới bộ phát, sau đó được xử lý theo cấu hình không gian và tiếp nhận bởi `Audio Listener`.

`Audio Listener` thường được gắn với `Main Camera` để thể hiện vị trí nghe của người chơi.

### 3.3. Phân biệt âm thanh 2D và 3D

[Improving your Live Stream Audio Quality](https://images.openai.com/static-rsc-4/aY27BCw3lTlLywM64xLDqkTNWpSrfoB3HJlzOFTRm0xSA5A0nh_dbKJAP1e72vHUWBI3O-Ec2mC0Rw81bgoyUt1hGF81IbxL5SLipFtzvjMZ6NlGpEmGU5akkBeg7a-EklGxv4E7orv6stTPh9uoISBQpZxHnYmWbCXC2hoKM5I?purpose=inline)

Âm thanh 2D

Không thay đổi âm lượng theo khoảng cách giữa nguồn phát và người nghe.

[【Godot】3Dオーディオと空間音響 - AudioStreamPlayer3Dで距離と方向を聴かせる | ういやまラボ](https://images.openai.com/static-rsc-4/_DFbTRvWRJ792k8bWneaNfNnWTi8P0W9MALb5EO74frnU2n29SPtb3Hz9cOBBjlcw9IV8gPbrl-65DupVgLtbHC9RDfetq7GcuBtBQ7kufnSLArj0Qmk-zsjOp7egSh9RwPz6pJmsPtl7rKultUywX8PzNWz0Sxglk_lFnM7HQs?purpose=inline)

Âm thanh 3D

Có thể thay đổi âm lượng và cảm nhận hướng phát dựa trên vị trí của nguồn âm.

| Tiêu chí               | 2D Audio                             | 3D Audio                                   |
| ---------------------- | ------------------------------------ | ------------------------------------------ |
| Spatial Blend          | `0`                                  | `1`                                        |
| Phụ thuộc khoảng cách  | Không                                | Có                                         |
| Phụ thuộc vị trí       | Không theo không gian 3D             | Có                                         |
| Ứng dụng               | Nhạc nền, âm thanh UI                | Tiếng bước chân, máy móc, môi trường       |
| Thay đổi vị trí Camera | Không ảnh hưởng suy giảm khoảng cách | Có thể làm thay đổi âm lượng và hướng nghe |

Lưu ý: `Spatial Blend` có thể nhận giá trị trung gian từ `0` đến `1`, cho phép pha trộn giữa âm thanh 2D và 3D.

### 3.4. Các thuộc tính quan trọng của Audio Source

| Thuộc tính      | Ý nghĩa                                                           |
| --------------- | ----------------------------------------------------------------- |
| `AudioClip`     | Chọn tệp âm thanh cần phát                                        |
| `Play On Awake` | Tự động phát khi Component được khởi tạo và kích hoạt             |
| `Loop`          | Lặp lại âm thanh khi phát hết                                     |
| `Volume`        | Điều chỉnh âm lượng                                               |
| `Pitch`         | Điều chỉnh cao độ và tốc độ phát                                  |
| `Spatial Blend` | Xác định mức độ xử lý 2D/3D                                       |
| `Min Distance`  | Khoảng cách bên trong vùng âm lượng không suy giảm do khoảng cách |
| `Max Distance`  | Giới hạn khoảng cách dùng trong mô hình suy giảm âm thanh         |
| `Rolloff Mode`  | Chọn cách âm thanh suy giảm theo khoảng cách                      |

`Min Distance` và `Max Distance` có ý nghĩa chủ yếu với âm thanh 3D. `Max Distance` không phải lúc nào cũng có nghĩa rằng âm thanh sẽ hoàn toàn biến mất bên ngoài khoảng cách đó; kết quả phụ thuộc vào `Rolloff Mode`.

## 4. Thực hành: Xây dựng Scene thử nghiệm âm thanh

MÔ HÌNH THỰC HÀNH

[Unity: Open Scene Window - Your Comprehensive Guide - Wayline](https://images.openai.com/static-rsc-4/NwA4Fdkdfo7bE5Fb7x3SO6aacWim7KQFU51Kecz14k_rX-EyZXF4018OKmRXsrYCNVX-AamBPwRxDBjwH_MoypEcA506_3m0LLjUNa_q6jre54zyS7a5bjV944nSZVX9myPrn2rtYKZicyxWCov3l1Wy-a5tOqsA6VENkW0SJM0?purpose=inline)

[wayline.io](https://www.wayline.io/blog/unity-open-scene-window-your-comprehensive-guide?utm_source=chatgpt.com)

Mô hình minh họa: Camera tiếp nhận âm thanh, đối tượng phát âm 3D và âm nền của Scene.

### 4.1. Chuẩn bị

Tạo một Scene mới hoặc sử dụng Scene đang có với các thành phần sau:

- `Main Camera` chứa `Audio Listener`.
- Một `GameObject` phát nhạc nền.
- Một `GameObject` đóng vai trò nguồn âm thanh 3D.
- Hai `AudioClip` hợp lệ: một âm nền và một âm hiệu ứng.

Các AudioClip nên là tài nguyên tự tạo, miễn phí có giấy phép phù hợp hoặc được phép sử dụng trong dự án.

Checkpoint 1: Kiểm tra `Main Camera` trong Inspector và xác nhận có Component `Audio Listener` đang hoạt động.

### 4.2. Thiết lập âm thanh nền

Bước 1. Trong cửa sổ Hierarchy, chọn:

`GameObject → Create Empty`

Đổi tên GameObject thành `BackgroundAudio`.

Bước 2. Chọn `BackgroundAudio`, mở Inspector và nhấn `Add Component`.

Tìm `Audio Source` rồi thêm Component vào đối tượng.

Bước 3. Gán AudioClip nhạc nền và cấu hình như sau:

| Thuộc tính    | Giá trị thử nghiệm |
| ------------- | ------------------ |
| AudioClip     | Tệp nhạc nền       |
| Play On Awake | Bật                |
| Loop          | Bật                |
| Volume        | `0.5`              |
| Spatial Blend | `0` — 2D           |

Bước 4. Nhấn nút Play.

Kết quả mong đợi:

- Nhạc nền phát khi Scene bắt đầu.
- Nhạc lặp lại khi phát hết.
- Âm lượng không suy giảm khi thay đổi khoảng cách giữa Camera và `BackgroundAudio`.

Checkpoint 2: Tắt `Loop`, chạy lại Scene và quan sát sự khác biệt khi AudioClip kết thúc.

### 4.3. Thử nghiệm suy giảm âm thanh 3D

Bước 1. Tạo một GameObject mới và đặt tên `SpatialAudio`.

Bước 2. Thêm `Audio Source`, sau đó gán AudioClip hiệu ứng.

Bước 3. Thiết lập các giá trị thử nghiệm:

| Thuộc tính    | Giá trị             |
| ------------- | ------------------- |
| Play On Awake | Bật                 |
| Loop          | Bật                 |
| Volume        | `1`                 |
| Spatial Blend | `1` — 3D            |
| Rolloff Mode  | Logarithmic Rolloff |
| Min Distance  | `1`                 |
| Max Distance  | `20`                |

Các giá trị trên chỉ dùng để quan sát hành vi, không phải thông số bắt buộc cho mọi trò chơi.

Bước 4. Đặt `SpatialAudio` ở vị trí khác `Main Camera`.

Bước 5. Chạy Scene và thay đổi khoảng cách giữa nguồn phát và Camera để quan sát.

Có thể chọn `SpatialAudio` và điều chỉnh `Transform` trong Inspector khi đang ở Play Mode.

Lưu ý rằng những thay đổi thực hiện trong Play Mode thường không được lưu khi thoát chế độ chạy thử.

Minh họa nguyên lý suy giảm theo khoảng cách

Minh họa định tính: khi tăng khoảng cách, âm thanh 3D thường nhỏ dần theo cấu hình suy giảm.

Checkpoint 3: Chuyển `Spatial Blend` từ `1` về `0`, sau đó di chuyển Camera. So sánh sự thay đổi âm lượng với lần thử trước.

### 4.4. Tạo âm thanh phát theo sự kiện

Âm sự kiện chỉ nên xuất hiện khi có một hành động phù hợp, chẳng hạn nhấn nút, nhặt vật phẩm hoặc hoàn thành nhiệm vụ.

Ví dụ dưới đây dùng UI Button để phát âm mà không cần viết script.

Bước 1. Tạo GameObject `ClickAudio` và thêm `Audio Source`.

Bước 2. Gán một AudioClip ngắn, sau đó cấu hình:

| Thuộc tính    | Giá trị |
| ------------- | ------- |
| Play On Awake | Tắt     |
| Loop          | Tắt     |
| Spatial Blend | `0`     |
| Volume        | `0.7`   |

Bước 3. Tạo nút giao diện bằng menu `GameObject → UI → Button`.

Bước 4. Trong Inspector của Button, tìm sự kiện `On Click()`.

Bước 5. Nhấn dấu `+` để thêm một sự kiện, kéo GameObject `ClickAudio` vào ô tham chiếu.

Bước 6. Trong danh sách hàm, chọn `AudioSource → Play()`.

Bước 7. Nhấn Play, sau đó nhấn Button trong Game view để kiểm tra.

\#chatgpt-mermaid-\_r_m1\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_m1\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m1\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m1\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_m1\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_m1\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_m1\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_m1\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_m1\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_m1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m1\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m1\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_m1\_ p{margin:0;}#chatgpt-mermaid-\_r_m1\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_m1\_ .label text,#chatgpt-mermaid-\_r_m1\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ .node rect,#chatgpt-mermaid-\_r_m1\_ .node circle,#chatgpt-mermaid-\_r_m1\_ .node ellipse,#chatgpt-mermaid-\_r_m1\_ .node polygon,#chatgpt-mermaid-\_r_m1\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .rough-node .label text,#chatgpt-mermaid-\_r_m1\_ .node .label text,#chatgpt-mermaid-\_r_m1\_ .image-shape .label,#chatgpt-mermaid-\_r_m1\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_m1\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .rough-node .label,#chatgpt-mermaid-\_r_m1\_ .node .label,#chatgpt-mermaid-\_r_m1\_ .image-shape .label,#chatgpt-mermaid-\_r_m1\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_m1\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_m1\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m1\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m1\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_m1\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m1\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m1\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m1\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_m1\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_m1\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m1\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_m1\_ .icon-shape,#chatgpt-mermaid-\_r_m1\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m1\_ .icon-shape p,#chatgpt-mermaid-\_r_m1\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_m1\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_m1\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m1\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_m1\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_m1\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_m1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_m1\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_m1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_m1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m1\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_m1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m1\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m1\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m1\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_m1\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_m1\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .node rect,#chatgpt-mermaid-\_r_m1\_ .node circle,#chatgpt-mermaid-\_r_m1\_ .node ellipse,#chatgpt-mermaid-\_r_m1\_ .node polygon,#chatgpt-mermaid-\_r_m1\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m1\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_m1\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_m1\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_m1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m1\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn ButtonOn Click()AudioSource.Play()AudioClip được phátAudio Listener tiếp nhận

Khi nhấn nút, Unity gọi `Play()` trên Component `Audio Source` đã liên kết.

Với âm sự kiện, cần kiểm tra trường hợp người chơi nhấn nút nhiều lần liên tiếp. Gọi `Play()` trên cùng một Audio Source đang phát không tự tạo nhiều bản sao âm thanh chồng lên nhau. Tuy nhiên, nhiều Audio Source khác nhau hoặc cách phát như `PlayOneShot()` có thể khiến các âm phát đồng thời.

Checkpoint 4: Kiểm tra âm thanh chỉ xuất hiện sau khi nhấn nút và không tự phát khi Scene bắt đầu.

## 5. Ghi nhận kết quả thử nghiệm

Mỗi lần thay đổi một tham số quan trọng, cần dự đoán kết quả trước khi chạy để phân biệt hành vi mong đợi và hành vi thực tế.

| Thử nghiệm        | Kết quả mong đợi                  | Kết quả thực tế   |
| ----------------- | --------------------------------- | ----------------- |
| Bật Play On Awake | Âm tự phát khi khởi tạo           | Người học ghi lại |
| Tắt Play On Awake | Âm không tự phát lúc bắt đầu      | Người học ghi lại |
| Bật Loop          | Âm lặp sau khi kết thúc           | Người học ghi lại |
| Giảm Volume       | Âm nhỏ hơn                        | Người học ghi lại |
| Spatial Blend = 0 | Không suy giảm theo khoảng cách   | Người học ghi lại |
| Spatial Blend = 1 | Âm chịu ảnh hưởng của khoảng cách | Người học ghi lại |
| Nhấn UI Button    | Âm sự kiện được phát              | Người học ghi lại |

Nên lưu tối thiểu một ảnh Inspector thể hiện cấu hình Audio Source và một đoạn video ngắn chứng minh hoạt động âm thanh.

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng                         | Nguyên nhân có thể                 | Cách kiểm tra                                |
| ---------------------------------- | ---------------------------------- | -------------------------------------------- |
| Không nghe được âm                 | Chưa gán AudioClip                 | Kiểm tra trường AudioClip                    |
| Âm không tự phát                   | Play On Awake đang tắt             | Kiểm tra cấu hình hoặc gọi phát bằng sự kiện |
| Không nghe âm 3D                   | Nguồn âm quá xa                    | Đưa Camera lại gần, kiểm tra Rolloff         |
| Âm không thay đổi theo khoảng cách | Spatial Blend đang ở 2D            | Đặt Spatial Blend thành `1`                  |
| Cảnh báo thiếu Listener            | Không có Audio Listener hoạt động  | Kiểm tra Main Camera                         |
| Cảnh báo nhiều Listener            | Có nhiều Audio Listener đang bật   | Chỉ giữ một Audio Listener hoạt động         |
| Nhấn Button không phát âm          | Thiếu tham chiếu hoặc hàm On Click | Kiểm tra Button và AudioSource               |
| Âm chồng lặp quá mức               | Nhiều nguồn âm cùng phát           | Kiểm tra các Audio Source và cách kích hoạt  |

### Quy trình Debug

\#chatgpt-mermaid-\_r_ma\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ma\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ma\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ma\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ma\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ma\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ma\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ma\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ma\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ma\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ma\_ p{margin:0;}#chatgpt-mermaid-\_r_ma\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ma\_ .label text,#chatgpt-mermaid-\_r_ma\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .node rect,#chatgpt-mermaid-\_r_ma\_ .node circle,#chatgpt-mermaid-\_r_ma\_ .node ellipse,#chatgpt-mermaid-\_r_ma\_ .node polygon,#chatgpt-mermaid-\_r_ma\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .rough-node .label text,#chatgpt-mermaid-\_r_ma\_ .node .label text,#chatgpt-mermaid-\_r_ma\_ .image-shape .label,#chatgpt-mermaid-\_r_ma\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ma\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .rough-node .label,#chatgpt-mermaid-\_r_ma\_ .node .label,#chatgpt-mermaid-\_r_ma\_ .image-shape .label,#chatgpt-mermaid-\_r_ma\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ma\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ma\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ma\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ma\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ma\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ma\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ma\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ma\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ma\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ma\_ .icon-shape,#chatgpt-mermaid-\_r_ma\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ma\_ .icon-shape p,#chatgpt-mermaid-\_r_ma\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ma\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ma\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ma\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ma\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ma\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ma\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ma\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ma\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ma\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ma\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ma\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .node rect,#chatgpt-mermaid-\_r_ma\_ .node circle,#chatgpt-mermaid-\_r_ma\_ .node ellipse,#chatgpt-mermaid-\_r_ma\_ .node polygon,#chatgpt-mermaid-\_r_ma\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ma\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ma\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ma\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ma\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ma\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗi âm thanhTái hiện lỗi trong Play ModeKiểm tra ConsoleKiểm tra Audio Listener vàAudio SourceKiểm tra AudioClip, Volume vàSpatial BlendChỉnh một nguyên nhân nghingờChạy thử lạiLỗi đã được xử lý?Ghi nhận kết quảCóKhông

Khi debug, không nên thay đổi đồng thời quá nhiều tham số. Việc kiểm tra từng yếu tố giúp xác định chính xác nguyên nhân gây lỗi và tránh sửa nhầm cấu hình.

## 7. Bài tập củng cố

### Bài tập 1 — Cơ bản: Cấu hình nhạc nền

Tạo một GameObject phát nhạc nền tự động với `Loop` được bật và `Spatial Blend = 0`.

Yêu cầu: Giải thích vì sao nhạc nền vẫn nghe được khi Camera di chuyển ra xa.

### Bài tập 2 — Vận dụng: Kiểm chứng âm thanh 3D

Tạo một đối tượng phát âm với `Spatial Blend = 1`. Điều chỉnh khoảng cách đến Camera, sau đó thay đổi `Min Distance` và `Max Distance`.

Yêu cầu: Dự đoán sự thay đổi trước khi chạy và ghi nhận kết quả thực tế.

### Bài tập 3 — Mở rộng: Tạo phản hồi tương tác

Xây dựng một Scene chứa nhạc nền, một nguồn âm thanh 3D và một Button phát âm hiệu ứng.

Yêu cầu: Các âm thanh phải hoạt động đúng vai trò, không có cảnh báo Audio Listener và có thể kiểm chứng trong Game view.

## 8. Checklist hoàn thành

Tiến độ bài thực hành

0/7

Giải thích được vai trò của AudioClip, Audio Source và Audio Listener.

Phân biệt được âm thanh 2D và 3D.

Cấu hình được âm nền tự động phát và lặp lại.

Thử nghiệm được sự suy giảm của âm thanh 3D theo khoảng cách.

Tạo được Button kích hoạt âm thanh sự kiện.

Phát hiện và giải thích được ít nhất một lỗi âm thanh.

Lưu được bằng chứng thử nghiệm bằng ảnh hoặc video.

## 9. Câu hỏi ôn tập trắc nghiệm

5 câu hỏi · Chọn một đáp án mỗi câu

Câu 1. Một trò chơi cần phát nhạc nền liên tục, không thay đổi âm lượng theo vị trí Camera. Cấu hình nào phù hợp nhất?

A. Spatial Blend = 1, Loop tắt

B. Spatial Blend = 0, Loop bật

C. Spatial Blend = 1, Play On Awake tắt

D. Spatial Blend = 0, Volume = 0

Câu 2. Một Audio Source đã có AudioClip nhưng người chơi không nghe thấy âm 3D khi đứng rất xa. Nguyên nhân nào nên kiểm tra trước?

A. Tên GameObject

B. Màu nền của Camera

C. Rolloff Mode và khoảng cách tới Audio Listener

D. Tỉ lệ của nút UI

Câu 3. Muốn âm thanh chỉ phát khi nhấn nút UI, cần cấu hình như thế nào?

A. Tắt Play On Awake và thiết lập On Click() gọi Play()

B. Bật Loop và tắt Audio Listener

C. Đặt Volume = 0

D. Xóa AudioClip khỏi Audio Source

Câu 4. Khi thay đổi Spatial Blend từ 0 thành 1, điều gì xảy ra?

A. AudioClip tự động chuyển thành tệp khác

B. Audio Source bị xóa

C. Âm thanh luôn lớn hơn

D. Âm thanh chuyển sang xử lý không gian 3D

Câu 5. Unity cảnh báo có nhiều Audio Listener đang hoạt động. Cách xử lý phù hợp nhất là gì?

A. Tăng Volume ở mọi Audio Source

B. Kiểm tra các Camera và chỉ giữ một Audio Listener hoạt động

C. Bật Loop cho mọi âm thanh

D. Đặt mọi GameObject ở cùng vị trí

Chấm điểmLàm lại

## 10. Tổng kết

Trong Unity, âm thanh được xây dựng từ ba thành phần chính: `AudioClip` chứa dữ liệu, `Audio Source` phát âm và `Audio Listener` tiếp nhận âm thanh.

`Spatial Blend` quyết định khả năng xử lý âm thanh theo không gian. Âm thanh 2D phù hợp cho nhạc nền và giao diện, trong khi âm thanh 3D phù hợp với những nguồn phát có vị trí cụ thể trong Scene.

Bên cạnh đó, `Play On Awake`, `Loop`, `Volume` và các thiết lập khoảng cách giúp điều chỉnh cách âm thanh hoạt động. Các sự kiện như `Button.On Click()` cho phép kết nối âm thanh với hành động của người chơi.

Kỹ năng quan trọng nhất của bài thực hành là thay đổi từng tham số, dự đoán kết quả, chạy thử và xác minh hành vi thực tế.

Tài liệu tham khảo: [Unity Learn — Audio Essentials (Unity 6.3)](https://learn.unity.com/pathway/unity-essentials/unit/audio-essentials?version=6.3\&utm_source=chatgpt.com).

Bài học tự biên soạn theo chủ đề Audio Essentials. Các ví dụ và bài tập là hướng dẫn thực hành độc lập, không phải bản ghi hoặc bản dịch chính thức của Unity.