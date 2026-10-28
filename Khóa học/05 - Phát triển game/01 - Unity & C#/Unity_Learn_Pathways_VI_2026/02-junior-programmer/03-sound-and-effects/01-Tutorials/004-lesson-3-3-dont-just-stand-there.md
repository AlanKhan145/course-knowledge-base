# Bài 04 — Lesson 3.3: Don’t Just Stand There

Junior Programmer

Sound and Effects

Unity 6.3

Tutorial

> Nguồn tham khảo: [Unity Learn — Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)
>
> Lưu ý: Đây là bài học tiếng Việt tự biên soạn dựa trên đề mục được cung cấp, không phải bản dịch chính thức hoặc bản ghi đầy đủ của Unity Learn. Nội dung thực hành dưới đây tập trung vào âm thanh và phản hồi giác quan, chưa được xác nhận là nội dung chính xác của Lesson 3.3 gốc.

## 1. Tổng quan bài học

Trong quá trình phát triển trò chơi, âm thanh giúp người chơi nhận biết các sự kiện đang diễn ra và phản hồi với môi trường.

Một số ví dụ:

- Âm thanh môi trường: Tiếng gió, tiếng mưa hoặc âm thanh nền.
- Âm thanh hành động: Tiếng nhảy, chạy, va chạm.
- Âm thanh tương tác: Tiếng nhặt vật phẩm hoặc kích hoạt nút.
- Âm thanh phản hồi: Tiếng hoàn thành nhiệm vụ hoặc thông báo thành công.

Trong bài thực hành này, chúng ta sẽ tìm hiểu cách sử dụng các thành phần âm thanh trong Unity, thử nghiệm những thiết lập cơ bản và kiểm tra kết quả trong Game view.

### Mục tiêu chính

Tạo được một Scene trong Unity có khả năng phát âm thanh, điều chỉnh âm lượng và khoảng cách nghe, đồng thời kích hoạt âm thanh bằng một sự kiện gameplay.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của âm thanh trong trải nghiệm trò chơi.
2. Phân biệt các thành phần `Audio Source`, `Audio Listener` và `AudioClip`.
3. Điều chỉnh `Play On Awake`, `Loop`, `Volume` và `Spatial Blend`.
4. Thử nghiệm âm thanh 2D và 3D trong một Scene.
5. Phát hiện và xử lý ít nhất một lỗi âm thanh thường gặp.

## 3. Kiến thức trọng tâm

### 3.1. Các thành phần của hệ thống âm thanh

| Thành phần       | Chức năng                                                 |
| ---------------- | --------------------------------------------------------- |
| `AudioClip`      | Tài nguyên chứa dữ liệu âm thanh                          |
| `Audio Source`   | Component phát âm thanh từ AudioClip                      |
| `Audio Listener` | Component tiếp nhận âm thanh, thường nằm trên Main Camera |
| `Spatial Blend`  | Điều chỉnh mức độ âm thanh 2D hoặc 3D                     |
| `Volume`         | Điều chỉnh âm lượng phát                                  |
| `Loop`           | Cho phép phát lặp lại                                     |
| `Play On Awake`  | Tự động phát khi Audio Source được kích hoạt              |

### 3.2. Sơ đồ hoạt động của âm thanh trong Unity

\#chatgpt-mermaid-\_r_j7\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_j7\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_j7\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_j7\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_j7\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_j7\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_j7\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_j7\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_j7\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_j7\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j7\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j7\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_j7\_ p{margin:0;}#chatgpt-mermaid-\_r_j7\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_j7\_ .label text,#chatgpt-mermaid-\_r_j7\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ .node rect,#chatgpt-mermaid-\_r_j7\_ .node circle,#chatgpt-mermaid-\_r_j7\_ .node ellipse,#chatgpt-mermaid-\_r_j7\_ .node polygon,#chatgpt-mermaid-\_r_j7\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .rough-node .label text,#chatgpt-mermaid-\_r_j7\_ .node .label text,#chatgpt-mermaid-\_r_j7\_ .image-shape .label,#chatgpt-mermaid-\_r_j7\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_j7\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .rough-node .label,#chatgpt-mermaid-\_r_j7\_ .node .label,#chatgpt-mermaid-\_r_j7\_ .image-shape .label,#chatgpt-mermaid-\_r_j7\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_j7\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_j7\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j7\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j7\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_j7\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_j7\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_j7\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_j7\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_j7\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_j7\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j7\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_j7\_ .icon-shape,#chatgpt-mermaid-\_r_j7\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_j7\_ .icon-shape p,#chatgpt-mermaid-\_r_j7\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_j7\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_j7\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_j7\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_j7\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_j7\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_j7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_j7\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_j7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_j7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j7\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_j7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j7\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_j7\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_j7\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_j7\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_j7\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .node rect,#chatgpt-mermaid-\_r_j7\_ .node circle,#chatgpt-mermaid-\_r_j7\_ .node ellipse,#chatgpt-mermaid-\_r_j7\_ .node polygon,#chatgpt-mermaid-\_r_j7\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_j7\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_j7\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_j7\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_j7\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j7\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}AudioClip — Tệp âm thanhAudio SourceSpatial BlendÂm thanh không suy giảmtheo khoảng cáchÂm thanh phụ thuộc vị trí vàkhoảng cáchAudio ListenerNgười chơi nghe âm thanh2D3D

Giải thích:

- `AudioClip` lưu trữ nội dung âm thanh.
- `Audio Source` chịu trách nhiệm phát âm thanh.
- `Spatial Blend` xác định cách âm thanh được xử lý theo không gian.
- `Audio Listener` tiếp nhận âm thanh để đưa ra thiết bị phát.

### 3.3. Phân biệt âm thanh 2D và 3D

Âm thanh 2D

Thích hợp cho nhạc nền, âm thanh giao diện và thông báo.

Âm thanh 3D

Thích hợp cho tiếng bước chân, máy móc, va chạm hoặc vật thể trong thế giới game.

Lưu ý: Với âm thanh 3D, mức suy giảm thực tế còn phụ thuộc vào các thông số như `Min Distance`, `Max Distance` và `Rolloff Mode`.

### 3.4. Các khái niệm Unity cần ghi nhớ

| Khái niệm  | Vai trò                                                |
| ---------- | ------------------------------------------------------ |
| Scene      | Không gian chứa các đối tượng trong trò chơi           |
| GameObject | Đối tượng được đặt trong Scene                         |
| Component  | Thành phần bổ sung dữ liệu hoặc hành vi cho GameObject |
| Inspector  | Nơi xem và điều chỉnh thuộc tính Component             |
| Play Mode  | Chế độ chạy thử trò chơi                               |
| Console    | Cửa sổ hiển thị thông báo, cảnh báo và lỗi             |

## 4. Thực hành từng bước

### Bước 1 — Tạo đối tượng phát âm thanh

1. Mở dự án trong Unity Editor.
2. Chọn hoặc tạo một Scene để thực hành.
3. Trong cửa sổ `Hierarchy`, tạo một GameObject mới.
4. Đặt tên đối tượng là `EnvironmentAudio`.
5. Trong `Inspector`, chọn Add Component → Audio Source.
6. Gán một AudioClip được phép sử dụng vào trường `Audio Resource` hoặc trường tương ứng trong phiên bản Unity đang dùng.

Kết quả mong đợi: GameObject có Audio Source và đã được gán tài nguyên âm thanh.

### Bước 2 — Thử nghiệm các thuộc tính Audio Source

Lần lượt thay đổi các thuộc tính trong Inspector.

| Thuộc tính    | Giá trị thử nghiệm | Kết quả cần quan sát                    |
| ------------- | ------------------ | --------------------------------------- |
| Play On Awake | Bật / Tắt          | Âm thanh có tự phát khi chạy không?     |
| Loop          | Bật / Tắt          | Âm thanh có lặp lại không?              |
| Volume        | 0.2 / 0.5 / 1.0    | Âm lượng thay đổi ra sao?               |
| Spatial Blend | 0 / 1              | Âm thanh có phụ thuộc không gian không? |

Sau mỗi lần thay đổi, nhấn Play để chạy thử và ghi nhận kết quả.

### Bước 3 — Kiểm tra âm thanh theo khoảng cách

1. Tạo một GameObject mới với tên `SoundEmitter`.
2. Thêm Component `Audio Source`.
3. Gán AudioClip cho đối tượng.
4. Đặt `Spatial Blend = 1` để thử âm thanh 3D.
5. Đặt GameObject ở vị trí khác với Main Camera.
6. Thay đổi khoảng cách giữa Camera và đối tượng phát âm.
7. Quan sát sự thay đổi của âm thanh.

Kết quả mong đợi: Khi sử dụng thiết lập suy giảm khoảng cách phù hợp, âm thanh nghe được sẽ thay đổi theo vị trí tương đối giữa Audio Source và Audio Listener.

### Bước 4 — Kích hoạt âm thanh thông qua sự kiện

Tạo một tình huống gameplay nhỏ, chẳng hạn:

- Người chơi nhặt vật phẩm.
- Nhân vật va chạm với một đối tượng.
- Người chơi nhấn một nút tương tác.

Khi sự kiện xảy ra, Audio Source phát âm thanh tương ứng.

\#chatgpt-mermaid-\_r_jg\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_jg\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jg\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jg\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jg\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_jg\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_jg\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_jg\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_jg\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_jg\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jg\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jg\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_jg\_ p{margin:0;}#chatgpt-mermaid-\_r_jg\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_jg\_ .label text,#chatgpt-mermaid-\_r_jg\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ .node rect,#chatgpt-mermaid-\_r_jg\_ .node circle,#chatgpt-mermaid-\_r_jg\_ .node ellipse,#chatgpt-mermaid-\_r_jg\_ .node polygon,#chatgpt-mermaid-\_r_jg\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .rough-node .label text,#chatgpt-mermaid-\_r_jg\_ .node .label text,#chatgpt-mermaid-\_r_jg\_ .image-shape .label,#chatgpt-mermaid-\_r_jg\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_jg\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .rough-node .label,#chatgpt-mermaid-\_r_jg\_ .node .label,#chatgpt-mermaid-\_r_jg\_ .image-shape .label,#chatgpt-mermaid-\_r_jg\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_jg\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_jg\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jg\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jg\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_jg\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jg\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jg\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jg\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_jg\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_jg\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jg\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_jg\_ .icon-shape,#chatgpt-mermaid-\_r_jg\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jg\_ .icon-shape p,#chatgpt-mermaid-\_r_jg\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_jg\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_jg\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jg\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_jg\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_jg\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_jg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_jg\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_jg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_jg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jg\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_jg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jg\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_jg\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_jg\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_jg\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_jg\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .node rect,#chatgpt-mermaid-\_r_jg\_ .node circle,#chatgpt-mermaid-\_r_jg\_ .node ellipse,#chatgpt-mermaid-\_r_jg\_ .node polygon,#chatgpt-mermaid-\_r_jg\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_jg\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_jg\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_jg\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_jg\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jg\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi thực hiện hànhđộngSự kiện hợp lệ?Kích hoạt Audio SourcePhát âm thanhNgười chơi nhận phản hồiKhông phát âm thanhCóKhông

Cần kiểm tra xem âm thanh có bị kích hoạt liên tục hoặc chồng lặp ngoài ý muốn hay không.

### Bước 5 — Ghi nhận kết quả thực hành

Sau khi chạy thử, ghi chép theo bảng sau:

| Nội dung                  | Kết quả |
| ------------------------- | ------- |
| Tính năng được thử nghiệm |         |
| Kết quả mong đợi          |         |
| Kết quả thực tế           |         |
| Lỗi phát hiện             |         |
| Nguyên nhân dự đoán       |         |
| Cách xử lý                |         |
| Kết quả sau khi sửa       |         |

Nên lưu thêm ảnh chụp Inspector, Console hoặc video chạy thử để đối chiếu.

## 5. Bài tập củng cố

### Bài tập A — Cơ bản

Tạo một Scene có âm thanh nền.

Yêu cầu:

- Có GameObject chứa Audio Source.
- AudioClip được gán hợp lệ.
- Âm thanh tự phát khi bắt đầu chạy.
- Âm thanh có thể lặp lại.
- Có thể điều chỉnh Volume.

Câu hỏi: Vì sao cần bật `Loop` với âm thanh nền nhưng không phải lúc nào cũng nên bật với âm thanh sự kiện?

### Bài tập B — Vận dụng

Tạo một đối tượng phát âm thanh 3D.

Yêu cầu:

- Âm thanh phát ra tại vị trí của GameObject.
- Thử thay đổi khoảng cách với Camera.
- Ghi nhận tác động của `Spatial Blend`.
- Thay đổi thêm một tham số về khoảng cách và dự đoán kết quả trước khi chạy.

### Bài tập C — Mở rộng

Xây dựng một tình huống tương tác nhỏ:

Nhân vật tiến đến vật phẩm → Nhặt vật phẩm → Phát âm thanh → Xóa hoặc ẩn vật phẩm.

Kết hợp các kiến thức về GameObject, Component, sự kiện gameplay và Audio Source.

## 6. Lỗi thường gặp và cách kiểm tra

| Hiện tượng                      | Nguyên nhân có thể xảy ra                     | Hướng kiểm tra                             |
| ------------------------------- | --------------------------------------------- | ------------------------------------------ |
| Không nghe thấy âm thanh        | Chưa gán AudioClip                            | Kiểm tra Audio Source                      |
| Không nghe thấy âm thanh        | Thiếu Audio Listener hoạt động                | Kiểm tra Main Camera                       |
| Âm thanh quá nhỏ                | Volume thấp hoặc bị suy giảm theo khoảng cách | Kiểm tra Volume, Spatial Blend và Distance |
| Âm thanh phát liên tục          | Đã bật Loop                                   | Kiểm tra thuộc tính Loop                   |
| Âm thanh không phát khi bắt đầu | Play On Awake đang tắt                        | Kiểm tra Play On Awake                     |
| Âm thanh chồng lặp              | Sự kiện được kích hoạt nhiều lần              | Kiểm tra logic sự kiện                     |

### Quy trình Debug

\#chatgpt-mermaid-\_r_jp\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_jp\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jp\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jp\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jp\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_jp\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_jp\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_jp\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_jp\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_jp\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jp\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jp\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_jp\_ p{margin:0;}#chatgpt-mermaid-\_r_jp\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_jp\_ .label text,#chatgpt-mermaid-\_r_jp\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ .node rect,#chatgpt-mermaid-\_r_jp\_ .node circle,#chatgpt-mermaid-\_r_jp\_ .node ellipse,#chatgpt-mermaid-\_r_jp\_ .node polygon,#chatgpt-mermaid-\_r_jp\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .rough-node .label text,#chatgpt-mermaid-\_r_jp\_ .node .label text,#chatgpt-mermaid-\_r_jp\_ .image-shape .label,#chatgpt-mermaid-\_r_jp\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_jp\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .rough-node .label,#chatgpt-mermaid-\_r_jp\_ .node .label,#chatgpt-mermaid-\_r_jp\_ .image-shape .label,#chatgpt-mermaid-\_r_jp\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_jp\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_jp\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jp\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jp\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_jp\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jp\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jp\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jp\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_jp\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_jp\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jp\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_jp\_ .icon-shape,#chatgpt-mermaid-\_r_jp\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jp\_ .icon-shape p,#chatgpt-mermaid-\_r_jp\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_jp\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_jp\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jp\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_jp\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_jp\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_jp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_jp\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_jp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_jp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jp\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_jp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jp\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_jp\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_jp\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_jp\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_jp\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .node rect,#chatgpt-mermaid-\_r_jp\_ .node circle,#chatgpt-mermaid-\_r_jp\_ .node ellipse,#chatgpt-mermaid-\_r_jp\_ .node polygon,#chatgpt-mermaid-\_r_jp\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_jp\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_jp\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_jp\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_jp\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jp\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗi âm thanhTái hiện lỗiKiểm tra ConsoleKiểm tra GameObject vàComponentXác định nguyên nhân giả địnhThay đổi một yếu tốChạy thử lạiLỗi đã được xử lý?Ghi lại kết quảChưaRồi

Nguyên tắc: Chỉ thay đổi một yếu tố tại mỗi lần kiểm tra để dễ xác định nguyên nhân thực sự.

## 7. Câu hỏi tự kiểm tra

Trắc nghiệm kiến thức

0/5 câu đã chọn

1\. Component nào chịu trách nhiệm phát âm thanh trong Unity?

A. Audio Listener

B. Audio Source

C. Transform

D. Collider

2\. Khi bật Loop, điều gì xảy ra?

A. Âm thanh phát nhanh hơn

B. Âm thanh tự động giảm âm lượng

C. Âm thanh được lặp lại

D. Âm thanh chuyển thành 3D

3\. Spatial Blend = 1 thường tương ứng với loại âm thanh nào?

A. Âm thanh 2D

B. Âm thanh 3D

C. Âm thanh bị tắt

D. Âm thanh không có AudioClip

4\. Audio Listener thường được đặt ở đâu?

A. Main Camera

B. Mọi vật thể trong Scene

C. Mỗi AudioClip

D. Project Settings

5\. Nếu không nghe được âm thanh, nên kiểm tra điều gì trước?

A. Xóa toàn bộ Scene

B. Thay đổi tất cả Component

C. AudioClip, Audio Source, Audio Listener và Console

D. Tạo dự án Unity mới

Chấm điểmLàm lại

## 8. Checklist hoàn thành

Tiến độ học tập

0/8

Giải thích được vai trò của Audio Source, AudioClip và Audio Listener.

Tạo được một GameObject phát âm thanh trong Unity.

Điều chỉnh được Volume, Loop và Play On Awake.

Thử nghiệm được âm thanh 2D và 3D.

Kích hoạt được âm thanh bằng một sự kiện gameplay.

Phát hiện và giải thích được ít nhất một lỗi âm thanh.

Lưu được ảnh hoặc video minh chứng kết quả.

Đọc bài gốc trên Unity Learn để đối chiếu nội dung chính thức.

## 9. Tổng kết

Bài thực hành giúp người học làm quen với các thành phần âm thanh trong Unity và phương pháp kiểm tra phản hồi âm thanh khi trò chơi hoạt động.

Những kiến thức cần ghi nhớ:

- `AudioClip` chứa dữ liệu âm thanh.
- `Audio Source` đảm nhiệm việc phát âm.
- `Audio Listener` tiếp nhận âm thanh trong Scene.
- `Spatial Blend` cho phép chuyển đổi giữa âm thanh 2D và 3D.
- Các thuộc tính `Volume`, `Loop` và `Play On Awake` giúp điều chỉnh hành vi phát âm thanh.
- Kiểm tra trong Play Mode và Console giúp phát hiện lỗi.

Tài liệu học chính thức: [Sound and Effects — Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)

Ghi chú phiên bản: Giao diện Editor, tên trường trong Inspector và các package có thể thay đổi giữa các phiên bản Unity. Các bước trên là hướng dẫn thực hành độc lập dựa trên nội dung được cung cấp, cần đối chiếu với bài gốc khi học Unity 6.3.