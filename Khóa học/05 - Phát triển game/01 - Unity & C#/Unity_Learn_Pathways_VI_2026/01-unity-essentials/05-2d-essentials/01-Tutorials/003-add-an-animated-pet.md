# Bài 03 — Add an Animated Pet: Thêm thú cưng có hoạt ảnh trong Unity

Unity Essentials · 2D Essentials · Tutorial · Unity 6.3

## 1. Tổng quan bài học

Trong một trò chơi 2D, các nhân vật và đối tượng sẽ trở nên sinh động hơn khi có hoạt ảnh (Animation). Một thú cưng có thể đứng yên, di chuyển, nhảy lên hoặc phản ứng với người chơi thay vì chỉ hiển thị dưới dạng hình ảnh tĩnh.

Bài học Add an Animated Pet tập trung vào cách tạo hoạt ảnh cho một đối tượng và điều khiển hoạt ảnh đó thông qua hệ thống Animation của Unity.

[AI Sprite Sheet Generator Online - Free Sprite Sheets AI by Bylo AI](https://images.openai.com/static-rsc-4/n5-HOFpeOGgY6OgfIppVT8P5aMAJGn2KShPFFdNRmkIIr_6YREMqAxRGVJwKhUZKvWa4_9ExQ33CNB0kvGAVdFbXxxqvyEGXppbu97vCYY4sJQerA35cWQxeD3arwJwNwPPxjeNl7J1azrVwICrmcE_uO-oqnhrFqEjhCo8U2Gc?purpose=inline)

[bylo.ai](https://bylo.ai/features/sprite-sheet-generator?utm_source=chatgpt.com)

Minh họa các khung hình hoạt ảnh của thú cưng trong trò chơi 2D.

Kết quả thực hành: Tạo một thú cưng 2D có hai trạng thái:

- Idle: Thú cưng đứng yên.
- Move: Thú cưng chuyển động qua lại hoặc nhún nhảy.

Người học sẽ sử dụng `Animation Clip`, `Animator Controller` và `Animator Parameters` để chuyển đổi giữa hai trạng thái.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của hệ thống Animation trong Unity.
2. Phân biệt `Animation Clip` và `Animator Controller`.
3. Tạo hoạt ảnh bằng cách thiết lập các `Keyframe`.
4. Cấu hình trạng thái `Idle` và `Move` trong Animator.
5. Sử dụng `Parameter` và `Transition` để điều khiển hoạt ảnh.
6. Kiểm tra hoạt ảnh trong Play Mode và sửa các lỗi cơ bản.

## 3. Kiến thức nền tảng

### 3.1. Animation là gì?

Animation là kỹ thuật thay đổi thuộc tính của đối tượng theo thời gian nhằm tạo cảm giác chuyển động.

Trong Unity, có thể tạo hoạt ảnh bằng nhiều cách, chẳng hạn:

- Thay đổi vị trí của GameObject.
- Thay đổi góc xoay hoặc kích thước.
- Thay đổi hình ảnh Sprite theo từng khung hình.
- Điều khiển chuyển động của các xương trong nhân vật được rig.

Ví dụ, một thú cưng có thể nhảy lên rồi trở về vị trí ban đầu bằng cách thay đổi tọa độ Y.

### 3.2. Animation Clip

`Animation Clip` là tài nguyên lưu trữ dữ liệu hoạt ảnh của một đối tượng.

Một clip có thể chứa các `Keyframe` thể hiện giá trị của thuộc tính tại những thời điểm xác định.

Ví dụ:

| Thời điểm | Position Y | Trạng thái        |
| --------- | ---------- | ----------------- |
| 0 giây    | 0          | Đứng dưới mặt đất |
| 0,5 giây  | 0,5        | Nhảy lên          |
| 1 giây    | 0          | Hạ xuống          |

Unity có thể tính toán các giá trị trung gian giữa những Keyframe để tạo chuyển động liên tục.

### 3.3. Keyframe

Keyframe là một mốc thời gian ghi lại giá trị của thuộc tính được tạo hoạt ảnh.

Ba Keyframe tạo một chu trình nhảy lên rồi hạ xuống.

Nếu hoạt ảnh được thiết lập lặp lại, chu trình này có thể tiếp tục cho đến khi Unity chuyển sang trạng thái khác.

### 3.4. Animator Controller

`Animator Controller` quản lý các trạng thái hoạt ảnh và quy tắc chuyển đổi giữa chúng.

Ví dụ, thú cưng có hai trạng thái `Idle` và `Move`. Khi tham số `IsMoving` bằng `true`, Unity chuyển từ Idle sang Move. Khi tham số trở về `false`, Unity chuyển từ Move sang Idle.

\#chatgpt-mermaid-\_r_jf\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_jf\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jf\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_jf\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jf\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_jf\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_jf\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_jf\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_jf\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_jf\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_jf\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jf\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jf\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_jf\_ p{margin:0;}#chatgpt-mermaid-\_r_jf\_ defs [id$="-barbEnd"]{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jf\_ g.stateGroup text{fill:rgb(83, 154, 248);stroke:none;font-size:10px;}#chatgpt-mermaid-\_r_jf\_ g.stateGroup text{fill:rgb(13, 13, 13);stroke:none;font-size:10px;}#chatgpt-mermaid-\_r_jf\_ g.stateGroup .state-title{font-weight:bolder;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ g.stateGroup rect{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_jf\_ g.stateGroup line{stroke:rgb(143, 143, 143);stroke-width:1;}#chatgpt-mermaid-\_r_jf\_ .transition{stroke:rgb(143, 143, 143);stroke-width:1;fill:none;}#chatgpt-mermaid-\_r_jf\_ .stateGroup .composit{fill:transparent;border-bottom:1px;}#chatgpt-mermaid-\_r_jf\_ .stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px;}#chatgpt-mermaid-\_r_jf\_ .state-note{stroke:rgb(107, 198, 127);fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jf\_ .state-note text{fill:rgb(13, 13, 13);stroke:none;font-size:10px;}#chatgpt-mermaid-\_r_jf\_ .stateLabel .box{stroke:none;stroke-width:0;fill:rgb(222, 234, 251);opacity:0.5;}#chatgpt-mermaid-\_r_jf\_ .edgeLabel .label rect{fill:rgb(222, 234, 251);opacity:0.5;}#chatgpt-mermaid-\_r_jf\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_jf\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jf\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_jf\_ .edgeLabel .label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ .label div .edgeLabel{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ .stateLabel text{fill:rgb(13, 13, 13);font-size:10px;font-weight:bold;}#chatgpt-mermaid-\_r_jf\_ .node circle.state-start{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jf\_ .node .fork-join{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jf\_ .node circle.state-end{fill:rgb(83, 154, 248);stroke:transparent;stroke-width:1.5;}#chatgpt-mermaid-\_r_jf\_ .end-state-inner{fill:transparent;stroke-width:1.5;}#chatgpt-mermaid-\_r_jf\_ .node rect{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_jf\_ .node polygon{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_jf\_ [id$="-barbEnd"]{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_jf\_ .statediagram-cluster rect{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_jf\_ .cluster-label,#chatgpt-mermaid-\_r_jf\_ .nodeLabel{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ .statediagram-cluster rect.outer{rx:5px;ry:5px;}#chatgpt-mermaid-\_r_jf\_ .statediagram-state .divider{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_jf\_ .statediagram-state .title-state{rx:5px;ry:5px;}#chatgpt-mermaid-\_r_jf\_ .statediagram-cluster.statediagram-cluster .inner{fill:transparent;}#chatgpt-mermaid-\_r_jf\_ .statediagram-cluster.statediagram-cluster-alt .inner{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jf\_ .statediagram-cluster .inner{rx:0;ry:0;}#chatgpt-mermaid-\_r_jf\_ .statediagram-state rect.basic{rx:5px;ry:5px;}#chatgpt-mermaid-\_r_jf\_ .statediagram-state rect.divider{stroke-dasharray:10,10;fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_jf\_ .note-edge{stroke-dasharray:5;}#chatgpt-mermaid-\_r_jf\_ .statediagram-note rect{fill:rgb(243, 243, 243);stroke:rgb(107, 198, 127);stroke-width:1px;rx:0;ry:0;}#chatgpt-mermaid-\_r_jf\_ .statediagram-note rect{fill:rgb(243, 243, 243);stroke:rgb(107, 198, 127);stroke-width:1px;rx:0;ry:0;}#chatgpt-mermaid-\_r_jf\_ .statediagram-note text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ .statediagram-note .nodeLabel{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ .statediagram .edgeLabel{color:red;}#chatgpt-mermaid-\_r_jf\_ [id$="-dependencyStart"],#chatgpt-mermaid-\_r_jf\_ [id$="-dependencyEnd"]{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);stroke-width:1;}#chatgpt-mermaid-\_r_jf\_ .statediagramTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].statediagram-cluster rect{fill:rgb(222, 234, 251);stroke:url(#chatgpt-mermaid-\_r_jf\_-gradient);stroke-width:1;}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].statediagram-cluster rect.outer{rx:5px;ry:5px;filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jf\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_jf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_jf\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_jf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_jf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jf\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_jf\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_jf\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}IdleMoveIsMoving = trueIsMoving = false

Mỗi trạng thái trong sơ đồ có thể sử dụng một Animation Clip riêng. `Animator Controller` quyết định clip nào được phát dựa trên các điều kiện chuyển trạng thái.

### 3.5. Những thành phần quan trọng

| Thành phần            | Chức năng                                |
| --------------------- | ---------------------------------------- |
| `GameObject`          | Đối tượng thú cưng trong Scene           |
| `Sprite Renderer`     | Hiển thị hình ảnh 2D                     |
| `Animation Clip`      | Lưu dữ liệu chuyển động                  |
| `Animation Window`    | Tạo và chỉnh sửa Keyframe                |
| `Animator`            | Component phát và điều khiển hoạt ảnh    |
| `Animator Controller` | Quản lý các trạng thái hoạt ảnh          |
| `Parameter`           | Lưu giá trị điều khiển các Transition    |
| `Transition`          | Quy định cách chuyển giữa các trạng thái |
| `Play Mode`           | Chạy thử và kiểm tra kết quả             |

## 4. Thực hành: Tạo thú cưng có hoạt ảnh

### 4.1. Chuẩn bị Scene

Bước 1: Mở Unity và tạo hoặc sử dụng một Scene 2D hiện có.

Bước 2: Chuẩn bị một Sprite thú cưng. Có thể sử dụng hình ảnh PNG có nền trong suốt hoặc một Sprite đơn giản để thử nghiệm.

Bước 3: Kéo Sprite vào Scene để tạo GameObject có `Sprite Renderer`.

Bước 4: Đổi tên GameObject thành `Pet` và kiểm tra các thuộc tính Transform trong Inspector.

Cấu trúc Scene ví dụ:

```
SampleScene
├── Main Camera
└── Pet
    ├── Transform
    └── Sprite Renderer
```

Ở thời điểm này, thú cưng chỉ là một đối tượng tĩnh.

### 4.2. Tạo Animation Clip đầu tiên

Bước 1: Chọn GameObject `Pet` trong Hierarchy.

Bước 2: Mở `Window > Animation > Animation`.

Bước 3: Chọn `Create` để tạo Animation Clip mới.

Bước 4: Lưu clip với tên `Pet_Idle.anim`.

Khi tạo clip theo cách này, Unity thường tự tạo một Animator Controller và gắn Animator Component cho GameObject.

Bước 5: Tạo một Keyframe giữ vị trí ban đầu của thú cưng trong clip Idle. Nếu cần, thêm thuộc tính `Transform > Position` thông qua `Add Property`.

Clip Idle có thể giữ nguyên vị trí xuyên suốt thời gian phát.

### 4.3. Tạo hoạt ảnh chuyển động

Tạo Animation Clip thứ hai mang tên `Pet_Move.anim`.

Trong Animation Window:

1. Chọn GameObject Pet.
2. Tạo clip mới từ menu chọn Animation Clip.
3. Chọn `Add Property` và thêm thuộc tính `Transform > Position` nếu chưa có.
4. Thiết lập các Keyframe thay đổi vị trí theo thời gian.

Ví dụ sử dụng tọa độ Y tương đối với vị trí ban đầu:

| Time | Y   | Kết quả               |
| ---- | --- | --------------------- |
| 0:00 | 0   | Pet ở vị trí ban đầu  |
| 0:50 | 0,5 | Pet nhảy lên          |
| 1:00 | 0   | Pet quay về vị trí cũ |

Các mốc trên tương ứng 0 giây, 0,5 giây và 1 giây. Trong Animation Window, cách hiển thị thời gian phụ thuộc tốc độ lấy mẫu của clip.

Bật Loop Time trong Inspector của Animation Clip nếu muốn thú cưng lặp lại chuyển động.

Lưu ý: Có thể bắt đầu với hai Keyframe để thấy sự thay đổi vị trí. Tuy nhiên, sử dụng thêm Keyframe thứ ba giúp thú cưng trở lại vị trí ban đầu trước khi chu trình lặp lại.

### 4.4. Thiết lập Animator Controller

Mở `Window > Animation > Animator`.

Trong Animator Controller của Pet, bảo đảm có hai State:

- `Idle` sử dụng clip `Pet_Idle`.
- `Move` sử dụng clip `Pet_Move`.

Thiết lập `Idle` là Default State bằng cách nhấp chuột phải vào State và chọn `Set as Layer Default State`.

Tạo hai Transition:

- `Idle → Move`
- `Move → Idle`

Trong tab `Parameters`, thêm một tham số:

| Name       | Type | Giá trị mặc định |
| ---------- | ---- | ---------------- |
| `IsMoving` | Bool | false            |

Chọn Transition `Idle → Move`, thêm Condition `IsMoving = true`.

Chọn Transition `Move → Idle`, thêm Condition `IsMoving = false`.

Để thay đổi trạng thái ngay khi điều kiện được đáp ứng, có thể bỏ chọn `Has Exit Time` trong cả hai Transition. Điều chỉnh `Transition Duration` nếu cần để kiểm soát thời gian hòa trộn chuyển động.

### 4.5. Kiểm tra trong Play Mode

Nhấn nút Play ở phía trên Unity Editor.

Mở cửa sổ Animator và theo dõi trạng thái đang hoạt động. Trong tab Parameters, thử thay đổi `IsMoving`:

| Giá trị           | Kết quả mong đợi       |
| ----------------- | ---------------------- |
| `false`           | Pet phát hoạt ảnh Idle |
| `true`            | Pet phát hoạt ảnh Move |
| Chuyển về `false` | Pet trở lại Idle       |

Nếu chuyển trạng thái thành công, luồng hoạt động của Animator đã được cấu hình đúng.

Lưu ý rằng các thay đổi thực hiện trong Play Mode thường không được lưu lại sau khi thoát chế độ chạy thử.

## 5. Kiến thức mở rộng: Sprite Animation và Rig Animation

Trong Unity, hoạt ảnh cho nhân vật 2D có thể được triển khai theo những cách khác nhau.

[Bestial Anime Characters Pixel Art Sprite Pack by 2D Game Assets on Dribbble](https://images.openai.com/static-rsc-4/CdfoCo61kOUFRf8RYHkjZmLqatnw6-ZFg08XujLvhMTHuwY47jGEUqALAby5ExXgT_bwbID57xq-34cczcswERbiEsedn_cMuQ6aNPU6Mk13RHb5RXHyApPTFAFulyFNr8fgL0bWptMZlcSF81q5nmFMNeOzM-UbljvtaJNY_9w?purpose=inline)

Frame-by-frame Animation

Thay đổi Sprite theo chuỗi khung hình để tạo chuyển động như đi bộ, chạy hoặc biểu cảm.

[Puppet Animation Example at Douglas Borba blog](https://images.openai.com/static-rsc-4/I9tFWgNcS_78AoDJywJk5n0WLzUE9aneQwmSOgvzo7udV8rcbDd4l_zv1GyR9veauwN_C3x1Qj-H0sLQgP90eQwav6F8NxFR0WMf5mWbsaQUbKubJ9xgzrO8iAxUbQ8tTdeSe8RQLzSW0E4Fj8JxRc15-vU1B4AaTVsIuy1CCg0?purpose=inline)

Skeletal Animation

Điều khiển các bộ phận của nhân vật thông qua hệ thống xương, cho phép tạo chuyển động mà không cần vẽ lại toàn bộ khung hình.

Đối với GameObject 2D sử dụng Sprite thông thường, không cần cấu hình Avatar.

Nếu sử dụng mô hình 3D có rig được nhập từ phần mềm bên ngoài, cần kiểm tra `Import Settings > Rig` và `Animation`, xác định loại Rig phù hợp, cấu hình Avatar khi cần và bảo đảm dữ liệu xương tương thích.

## 6. Các lỗi thường gặp và cách khắc phục

| Hiện tượng                      | Nguyên nhân có thể                  | Hướng kiểm tra                                    |
| ------------------------------- | ----------------------------------- | ------------------------------------------------- |
| Pet không chuyển động           | Không có Animator hoặc thiếu clip   | Kiểm tra Animator Component và Motion của State   |
| Pet chỉ đứng yên                | Idle luôn hoạt động                 | Kiểm tra Parameter và Transition                  |
| Pet không quay về Idle          | Thiếu Transition hoặc điều kiện sai | Kiểm tra `Move → Idle`                            |
| Hoạt ảnh chỉ chạy một lần       | Chưa bật Loop Time                  | Kiểm tra Animation Clip                           |
| Pet di chuyển sai vị trí        | Keyframe ghi sai tọa độ             | Kiểm tra giá trị Transform trong Animation Window |
| Pet bị giật khi lặp             | Vị trí cuối khác vị trí đầu         | Điều chỉnh Keyframe đầu/cuối                      |
| Thay đổi không còn sau khi chạy | Chỉnh sửa trong Play Mode           | Thực hiện lại thay đổi ngoài Play Mode            |

### Quy trình Debug

\#chatgpt-mermaid-\_r_ke\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ke\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ke\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ke\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ke\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ke\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ke\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ke\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ke\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ke\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ke\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ke\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ke\_ p{margin:0;}#chatgpt-mermaid-\_r_ke\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ke\_ .label text,#chatgpt-mermaid-\_r_ke\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ .node rect,#chatgpt-mermaid-\_r_ke\_ .node circle,#chatgpt-mermaid-\_r_ke\_ .node ellipse,#chatgpt-mermaid-\_r_ke\_ .node polygon,#chatgpt-mermaid-\_r_ke\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .rough-node .label text,#chatgpt-mermaid-\_r_ke\_ .node .label text,#chatgpt-mermaid-\_r_ke\_ .image-shape .label,#chatgpt-mermaid-\_r_ke\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ke\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .rough-node .label,#chatgpt-mermaid-\_r_ke\_ .node .label,#chatgpt-mermaid-\_r_ke\_ .image-shape .label,#chatgpt-mermaid-\_r_ke\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ke\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ke\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ke\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ke\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ke\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ke\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ke\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ke\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ke\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ke\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ke\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ke\_ .icon-shape,#chatgpt-mermaid-\_r_ke\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ke\_ .icon-shape p,#chatgpt-mermaid-\_r_ke\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ke\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ke\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ke\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ke\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ke\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ke\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ke\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ke\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ke\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ke\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ke\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ke\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ke\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ke\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ke\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ke\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .node rect,#chatgpt-mermaid-\_r_ke\_ .node circle,#chatgpt-mermaid-\_r_ke\_ .node ellipse,#chatgpt-mermaid-\_r_ke\_ .node polygon,#chatgpt-mermaid-\_r_ke\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ke\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ke\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ke\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ke\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ke\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện hoạt ảnh bất thườngKiểm tra ConsoleKiểm tra GameObject vàAnimatorKiểm tra Animation Clip vàKeyframeKiểm tra Parameter vàTransitionSửa một nguyên nhân giả địnhChạy thử lạiHoạt ảnh đúng?Ghi nhận kết quảChưaĐúng

Để tránh nhầm lẫn nguyên nhân, chỉ nên thay đổi một nhóm thiết lập mỗi lần thử nghiệm.

## 7. Bài tập thực hành

### Bài tập 1 — Tạo chuyển động cơ bản

Tạo một thú cưng có khả năng nhún lên xuống liên tục.

Yêu cầu: Sử dụng Animation Clip, ít nhất ba Keyframe và bật Loop Time. Đảm bảo hoạt ảnh không bị nhảy vị trí đột ngột ở thời điểm lặp.

### Bài tập 2 — Điều khiển bằng trạng thái

Tạo hai trạng thái `Idle` và `Move`, sử dụng Bool Parameter `IsMoving` để chuyển đổi.

Yêu cầu: Thử thay đổi Parameter trong Play Mode và quan sát State đang hoạt động trong Animator.

### Bài tập 3 — Mở rộng tương tác

Tạo một thú cưng có thể chuyển giữa hai trạng thái hoạt ảnh dựa trên một tương tác trong trò chơi, chẳng hạn khi người chơi đến gần hoặc nhấn một phím.

Yêu cầu: Khi điều kiện tương tác xảy ra, thú cưng chuyển sang Move. Khi điều kiện kết thúc, thú cưng trở về Idle.

## 8. Kiểm tra và đánh giá kết quả

Sau khi thực hành, ghi lại bảng sau:

| Tiêu chí       | Kết quả mong đợi                 | Kết quả thực tế |
| -------------- | -------------------------------- | --------------- |
| Hiển thị Pet   | Sprite xuất hiện trong Game view | Tự ghi          |
| Hoạt ảnh Idle  | Pet giữ trạng thái đứng yên      | Tự ghi          |
| Hoạt ảnh Move  | Pet chuyển động theo Keyframe    | Tự ghi          |
| Transition     | Chuyển đúng theo Bool Parameter  | Tự ghi          |
| Loop Animation | Chuyển động lặp lại liên tục     | Tự ghi          |

Bổ sung ảnh chụp hoặc video minh chứng, các thông báo Console nếu có lỗi và nhận xét ngắn về nguyên nhân.

## 9. Câu hỏi ôn tập trắc nghiệm

Bài kiểm tra kiến thức

0/5 câu đã chọn

1\. Thành phần nào lưu trữ các Keyframe tạo nên chuyển động của thú cưng?

A. Animator Controller

B. Animation Clip

C. Scene

D. Sprite Renderer

2\. Muốn chuyển giữa Idle và Move dựa trên một điều kiện, cần cấu hình thành phần nào?

A. Camera

B. Material

C. Collider

D. Animator Controller

3\. Thú cưng chỉ chạy một chu trình rồi dừng. Thiết lập nào cần kiểm tra trước tiên?

A. Loop Time của Animation Clip

B. Vị trí Camera

C. Tên GameObject

D. Màu nền Scene

4\. Parameter IsMoving có kiểu Bool. Giá trị nào thường được dùng để kích hoạt Move?

A. 0.5

B. Một chuỗi ký tự

C. true

D. Một Vector3

5\. Pet giật về vị trí cũ mỗi lần hoạt ảnh lặp lại. Nguyên nhân nào phù hợp nhất?

A. Thiếu Main Camera

B. Vị trí ở Keyframe cuối và đầu không khớp

C. Tên Animation Clip quá dài

D. Scene có quá ít GameObject

Chấm điểmLàm lại

## 10. Checklist hoàn thành bài học

- Giải thích được sự khác nhau giữa Animation Clip và Animator Controller.
- Tạo được GameObject thú cưng có Sprite Renderer.
- Tạo được hai Animation Clip: Idle và Move.
- Thiết lập Keyframe để tạo chuyển động.
- Cấu hình Animator Parameter và Transition.
- Kiểm thử thành công trong Play Mode.
- Phát hiện và sửa được ít nhất một lỗi hoạt ảnh.
- Ghi lại ảnh hoặc video minh chứng kết quả.

## 11. Tổng kết

Hệ thống hoạt ảnh Unity kết hợp nhiều thành phần để tạo và điều khiển chuyển động của đối tượng.

Ba khái niệm quan trọng nhất là:

- Animation Clip: Xác định đối tượng chuyển động như thế nào.
- Animator Controller: Xác định trạng thái hoạt ảnh nào được sử dụng.
- Parameter và Transition: Xác định điều kiện để chuyển đổi giữa các trạng thái.

Việc kết hợp chúng cho phép tạo các nhân vật 2D có chuyển động và phản ứng với tương tác trong trò chơi.

Tham khảo: [Unity Learn — 2D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3\&utm_source=chatgpt.com). Bài học được biên soạn độc lập bằng tiếng Việt, không phải bản dịch chính thức. Giao diện, tên menu và thiết lập có thể thay đổi theo phiên bản Unity.