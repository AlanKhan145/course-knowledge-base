UNITY ESSENTIALS · 3D ESSENTIALS · BÀI 02 · UNITY 6.3

# Bài 02 — Make a Bouncy Ball

Tạo quả bóng nảy bằng hệ thống vật lý trong Unity 3D

&#x20;30 phút

&#x20;Cơ bản

&#x20;3D Physics

[3D Essentials - Unity Learn](https://images.openai.com/static-rsc-4/oUuLFzYBpTqx4mUjem52dJIL9PevM5JKgo_cZ7GzlwqFvYNkMhHZ5mtdQC0pmxLHsEYl53B2bQmf5uKdE3fwsdtH13X3d6im1wBrlEuucPe8AKmAe7eIfi3dpG1VzKDUhq-VT0Pu-kyIz06DuoGgS54lCPTE2sHwt7_pE54sKBY?purpose=inline)

[learn.unity.com](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Một quả bóng trong thế giới thực sẽ rơi xuống khi được thả, va chạm với mặt đất và có thể bật nảy trở lại. Trong Unity, những hành vi này được mô phỏng thông qua hệ thống vật lý (Physics System).

Để một quả bóng có thể chuyển động và tương tác với môi trường, chúng ta cần kết hợp các thành phần như `Rigidbody`, `Collider` và `Physics Material`.

Trong bài thực hành này, người học sẽ tạo một quả bóng trong phòng ngủ 3D, thiết lập màu sắc, kích thước, trọng lực và độ nảy. Sau đó, bổ sung một mặt phẳng nghiêng để quả bóng bật và di chuyển về một góc căn phòng.

Kết quả cuối cùng: Một quả bóng có thể rơi tự nhiên dưới tác dụng của trọng lực, va chạm với máng nghiêng và bật theo hướng đã thiết kế.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Tạo và cấu hình đối tượng 3D bằng các hình học cơ bản (`3D Primitives`).
2. Phân biệt vai trò của `Mesh Renderer`, `Collider` và `Rigidbody`.
3. Tạo và sử dụng `Material` để tùy chỉnh màu sắc, độ bóng của quả bóng.
4. Tạo `Physics Material` và điều chỉnh thuộc tính `Bounciness`.
5. Áp dụng trọng lực để mô phỏng chuyển động rơi.
6. Thiết lập `Mesh Collider` cho một mặt phẳng nghiêng.
7. Kiểm tra và khắc phục những lỗi vật lý phổ biến.
8. Thử nghiệm thêm lực tác động, Trigger và vòng lặp vật lý bằng C#.

## 3. Kiến thức trọng tâm

### 3.1. Hệ thống vật lý trong Unity

Unity sử dụng hệ thống vật lý để mô phỏng những tương tác như rơi tự do, va chạm, chuyển động, ma sát và lực tác động.

Một GameObject thông thường chỉ chứa Transform sẽ không tự động rơi xuống. Để đối tượng chuyển động dưới tác dụng của trọng lực, cần bổ sung `Rigidbody`.

Khi đối tượng cần va chạm với các vật thể khác, nó còn phải có hình dạng va chạm được xác định bằng `Collider`.

\#chatgpt-mermaid-\_r_qn\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_qn\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_qn\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_qn\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_qn\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_qn\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_qn\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_qn\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_qn\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_qn\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_qn\_ p{margin:0;}#chatgpt-mermaid-\_r_qn\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_qn\_ .label text,#chatgpt-mermaid-\_r_qn\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .node rect,#chatgpt-mermaid-\_r_qn\_ .node circle,#chatgpt-mermaid-\_r_qn\_ .node ellipse,#chatgpt-mermaid-\_r_qn\_ .node polygon,#chatgpt-mermaid-\_r_qn\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .rough-node .label text,#chatgpt-mermaid-\_r_qn\_ .node .label text,#chatgpt-mermaid-\_r_qn\_ .image-shape .label,#chatgpt-mermaid-\_r_qn\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_qn\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .rough-node .label,#chatgpt-mermaid-\_r_qn\_ .node .label,#chatgpt-mermaid-\_r_qn\_ .image-shape .label,#chatgpt-mermaid-\_r_qn\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_qn\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_qn\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_qn\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_qn\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qn\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qn\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_qn\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_qn\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_qn\_ .icon-shape,#chatgpt-mermaid-\_r_qn\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_qn\_ .icon-shape p,#chatgpt-mermaid-\_r_qn\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_qn\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_qn\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qn\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_qn\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_qn\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_qn\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_qn\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_qn\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_qn\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .node rect,#chatgpt-mermaid-\_r_qn\_ .node circle,#chatgpt-mermaid-\_r_qn\_ .node ellipse,#chatgpt-mermaid-\_r_qn\_ .node polygon,#chatgpt-mermaid-\_r_qn\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_qn\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_qn\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_qn\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}GameObject: BallTransformMesh FilterMesh RendererSphere ColliderRigidbodyVị trí, xoay, tỷ lệHình dạng hình họcMàu sắc và hiển thịHình dạng va chạmTrọng lực và chuyển độngPhysics MaterialĐộ nảy và ma sát

Các Component có nhiệm vụ riêng, nhưng cùng phối hợp để tạo thành một đối tượng 3D có hình dạng, màu sắc và hành vi vật lý.

### 3.2. Rigidbody là gì?

`Rigidbody` cho phép GameObject tham gia vào quá trình mô phỏng vật lý.

Khi được thêm Rigidbody và bật trọng lực, đối tượng có thể rơi xuống ngay cả khi không có đoạn script điều khiển chuyển động nào.

Các thuộc tính quan trọng:

| Thuộc tính            | Chức năng                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| `Mass`                | Khối lượng vật thể                                                              |
| `Use Gravity`         | Cho phép trọng lực tác động                                                     |
| `Is Kinematic`        | Quy định Rigidbody có được mô phỏng như vật động lực học thông thường hay không |
| `Linear Damping`      | Mức cản chuyển động tịnh tiến                                                   |
| `Angular Damping`     | Mức cản chuyển động quay                                                        |
| `Collision Detection` | Cấu hình phương thức phát hiện va chạm                                          |

Ví dụ, nếu bật `Use Gravity` cho một Rigidbody động, quả bóng sẽ bị gia tốc theo hướng trọng lực của Scene.

Khi tắt `Use Gravity`, quả bóng không còn bị gia tốc bởi trọng lực, nhưng vẫn có thể di chuyển do vận tốc hoặc lực khác.

### 3.3. Collider là gì?

`Collider` xác định hình dạng dùng cho việc phát hiện và xử lý va chạm.

Unity có nhiều Collider phục vụ những hình dạng khác nhau:

| Collider           | Hình dạng phù hợp             |
| ------------------ | ----------------------------- |
| `Sphere Collider`  | Bóng, viên bi                 |
| `Box Collider`     | Hộp, tường, sàn               |
| `Capsule Collider` | Đối tượng dạng viên nang      |
| `Mesh Collider`    | Vật thể có hình dạng phức tạp |

Ví dụ: Một quả bóng có Rigidbody nhưng không có Collider phù hợp có thể đi xuyên qua mặt sàn, vì không có hình dạng va chạm để hệ thống vật lý xử lý tiếp xúc.

### 3.4. Material và Physics Material

Hai loại Material này phục vụ hai mục đích khác nhau.

| Tiêu chí    | Material                    | Physics Material                        |
| ----------- | --------------------------- | --------------------------------------- |
| Chức năng   | Hiển thị hình ảnh           | Điều khiển tính chất bề mặt khi va chạm |
| Thuộc tính  | Color, Metallic, Smoothness | Bounciness, Friction                    |
| Sử dụng bởi | Mesh Renderer               | Collider                                |
| Ví dụ       | Bóng màu đỏ, bề mặt bóng    | Bóng nảy cao, ít ma sát                 |

Điểm quan trọng: Một quả bóng có màu sắc và vẻ ngoài giống cao su chưa chắc sẽ nảy. Độ nảy được quyết định bởi tính chất vật lý của các bề mặt tiếp xúc, không phải màu sắc hiển thị.

## 4. Quy trình thực hành

\#chatgpt-mermaid-\_r_r0\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_r0\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_r0\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_r0\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_r0\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_r0\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_r0\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_r0\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_r0\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_r0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r0\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r0\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_r0\_ p{margin:0;}#chatgpt-mermaid-\_r_r0\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_r0\_ .label text,#chatgpt-mermaid-\_r_r0\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ .node rect,#chatgpt-mermaid-\_r_r0\_ .node circle,#chatgpt-mermaid-\_r_r0\_ .node ellipse,#chatgpt-mermaid-\_r_r0\_ .node polygon,#chatgpt-mermaid-\_r_r0\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .rough-node .label text,#chatgpt-mermaid-\_r_r0\_ .node .label text,#chatgpt-mermaid-\_r_r0\_ .image-shape .label,#chatgpt-mermaid-\_r_r0\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_r0\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .rough-node .label,#chatgpt-mermaid-\_r_r0\_ .node .label,#chatgpt-mermaid-\_r_r0\_ .image-shape .label,#chatgpt-mermaid-\_r_r0\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_r0\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_r0\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r0\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r0\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_r0\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_r0\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r0\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r0\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_r0\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_r0\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r0\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_r0\_ .icon-shape,#chatgpt-mermaid-\_r_r0\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_r0\_ .icon-shape p,#chatgpt-mermaid-\_r_r0\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_r0\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_r0\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r0\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_r0\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_r0\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_r0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_r0\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_r0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_r0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r0\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_r0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r0\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_r0\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_r0\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_r0\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_r0\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .node rect,#chatgpt-mermaid-\_r_r0\_ .node circle,#chatgpt-mermaid-\_r_r0\_ .node ellipse,#chatgpt-mermaid-\_r_r0\_ .node polygon,#chatgpt-mermaid-\_r_r0\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_r0\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_r0\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_r0\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_r0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r0\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Tạo SphereĐổi tên thành BallĐiều chỉnh Scale và PositionTạo Material hiển thịThêm RigidbodyTạo Physics MaterialĐiều chỉnh độ nảyThêm RampThiết lập Mesh ColliderChạy Play Mode và kiểm tra

### 4.1. Bước 1 — Tạo quả bóng 3D

Mở Scene phòng ngủ đã chuẩn bị trong Unity.

Trong cửa sổ `Hierarchy`:

1. Nhấp chuột phải vào vùng trống.
2. Chọn `3D Object > Sphere`.
3. Đổi tên GameObject thành `Ball`.

Sphere là một đối tượng hình học cơ bản có sẵn trong Unity.

Khi tạo Sphere, Unity sẽ tự thêm các Component cần thiết để biểu diễn quả cầu, gồm `Transform`, `Mesh Filter`, `Mesh Renderer` và `Sphere Collider`.

Kết quả mong đợi: Trong Hierarchy xuất hiện GameObject tên `Ball`, đồng thời Scene View hiển thị một quả cầu 3D.

### 4.2. Bước 2 — Điều chỉnh kích thước quả bóng

Chọn `Ball` trong Hierarchy, tìm Component `Transform` tại Inspector.

Thiết lập thuộc tính Scale:

Transform — Ball

Scale

X

0.25

Y

0.25

Z

0.25

Sphere mặc định có đường kính 1 đơn vị Unity khi Scale bằng `(1, 1, 1)`. Với Scale `(0.25, 0.25, 0.25)`, đường kính còn khoảng 0,25 đơn vị, tương đương khoảng 25 cm nếu quy ước 1 đơn vị bằng 1 mét.

Việc đặt cùng tỷ lệ ở cả ba trục giúp quả bóng giữ được hình dạng tròn, tránh biến thành hình elip.

### 4.3. Bước 3 — Đặt quả bóng lên cao

Tại Transform, thiết lập Position:

| Trục | Giá trị |
| ---- | ------- |
| X    | 2       |
| Y    | 3       |
| Z    | -1      |

Vị trí `(2, 3, -1)` đặt quả bóng ở trên cao, gần khu vực cửa sổ trong Scene phòng ngủ của bài thực hành.

Nhờ khoảng cách so với mặt sàn, người học có thể quan sát rõ chuyển động rơi của bóng khi bật mô phỏng vật lý.

Nếu quả bóng biến mất khỏi góc nhìn, chọn nó trong Hierarchy rồi nhấn `F` để tập trung Scene View vào đối tượng.

### 4.4. Bước 4 — Tạo Material cho quả bóng

Trong cửa sổ `Project`, mở thư mục:

`Unity Essentials > Materials`

Tạo một thư mục mới tên `My Materials`, sau đó:

1. Nhấp chuột phải vào thư mục `My Materials`.
2. Chọn `Create > Material`.
3. Đặt tên Material là `Ball_Mat`.
4. Kéo `Ball_Mat` vào quả bóng trong Scene View.

Material mới sẽ được gán cho phần hiển thị của đối tượng, thông qua Mesh Renderer.

### 4.5. Bước 5 — Tùy chỉnh màu sắc và độ bóng

Chọn `Ball_Mat` trong Project và quan sát Inspector.

Các thuộc tính cơ bản cần thử nghiệm:

| Thuộc tính   | Vai trò                       |
| ------------ | ----------------------------- |
| `Base Map`   | Màu sắc cơ bản                |
| `Metallic`   | Mức độ mang đặc tính kim loại |
| `Smoothness` | Độ nhẵn và phản xạ ánh sáng   |

Ví dụ, để tạo quả bóng màu đỏ với bề mặt nhẵn, có thể chọn màu đỏ tại `Base Map`, giảm Metallic và tăng Smoothness ở mức phù hợp.

[Flexi Bouncy Ball Red PNG Images & PSDs for Download | PixelSquid - S123551025](https://images.openai.com/static-rsc-4/ZYQvxNKVYJ0Ha9QzoRPhKKs5My6Q1vGcATS5hZGeMXtQBeRqSldHKavCzLyTfnUwI896ATIjwH0ZHoJ1yxlSzr_8jwHGRZ7nD2jBv70ylU15qkABaHCa3gdxXaGrOzx7eDvza1vRHbpeKcoWPaO2DbRzsIkXYpNstVs8CMHUZv8?purpose=inline)

Bề mặt nhám

[Imagens de Bola vermelha sem royalties | DepositPhotos](https://images.openai.com/static-rsc-4/_EDjTTxirQLCVKRaw9J2s_w0pImQiC_HzhaGCAXuU3O_4fb6KBZd2F-Epy3NfglGUFBFCA84GFTr4KTTzLxLbOkAR3YMKyoPMAt15s_DpyzYtQa-d0DEtCivZSRAXu6ojD94_EflDHRSZ-uVCQoQpB5ci03GaqFmMsf-3dpF_Cs?purpose=inline)

Bề mặt bóng

[A shiny red ball with shadow on a white background](https://images.openai.com/static-rsc-4/opPDsFrokg_oSfdgusbe-V5IRyydXO7OZwsYsidSC-frGQQU_E5U-WcmPjnmrxpBditkYhm0sXdBMp8rg_OZ3wdLEJ8K6QbMx12zDG2lPiK7u8sl6oE5AjtcKbDbIE5ScoxRurUqNWDm8VEZp-11_2rLHaRdEAHwNqYPOl-vInVv7COH6qScGhyDacNLJvIE?purpose=inline)

Bề mặt kim loại

Các hình trên minh họa sự khác biệt về mặt thị giác. Thay đổi Metallic và Smoothness không trực tiếp khiến quả bóng nảy mạnh hơn.

## 5. Tạo chuyển động vật lý cho quả bóng

### 5.1. Bước 6 — Thêm Rigidbody

Trước tiên, chạy thử Scene khi quả bóng chưa có Rigidbody.

Nhấn nút `Play`. Quả bóng sẽ tiếp tục nằm tại vị trí ban đầu nếu không có thành phần hay script khác điều khiển nó.

Dừng Play Mode, chọn `Ball`, sau đó:

1. Trong Inspector, chọn `Add Component`.
2. Tìm kiếm `Rigidbody`.
3. Thêm Rigidbody vào GameObject.
4. Bật `Use Gravity` và đảm bảo `Is Kinematic` đang tắt.
5. Nhấn `Play` để kiểm tra.

Quả bóng sẽ rơi xuống dưới tác dụng của trọng lực. Nếu sàn có Collider thích hợp, bóng sẽ va chạm với sàn thay vì xuyên qua.

Lưu ý: Những thay đổi cấu hình thực hiện trong Play Mode thường không được giữ lại khi thoát chế độ chạy. Hãy chỉnh sửa Scene trong Edit Mode và lưu bằng `Ctrl + S` hoặc `Cmd + S`.

### 5.2. Bước 7 — Tạo Physics Material

Một quả bóng có Rigidbody và Collider chưa chắc đã nảy như mong muốn. Chúng ta cần điều chỉnh tính chất bề mặt.

Trong `My Materials`:

1. Nhấp chuột phải và chọn `Create > Physics Material`.
2. Đặt tên `Ball_Physics`.
3. Chọn Physics Material vừa tạo.
4. Trong Inspector, thiết lập `Bounciness = 1`.
5. Kéo Physics Material lên quả bóng, hoặc gán vào ô `Material` trong `Sphere Collider`.

Thử nghiệm độ nảy

Mô phỏng khái niệm

Bounciness

## 0.80

Độ nảy tương đối cao: quả bóng có thể bật lên rõ rệt.

Đây là hình minh họa, không phải một phép tính Unity Physics theo thời gian thực.

Trong mô hình lý tưởng, `Bounciness` thường được hiểu như hệ số hoàn nguyên khi va chạm. Giá trị càng cao, vật thể càng có xu hướng giữ lại nhiều vận tốc bật sau va chạm.

Tuy nhiên, độ nảy thực tế còn phụ thuộc Physics Material của vật thể đối diện, chế độ `Bounce Combine` và cách hệ thống vật lý giải quyết tiếp xúc.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Scripting API: PhysicsMaterial.bounciness

+1



### 5.3. Bước 8 — Chạy thử độ nảy

Nhấn `Play` để quan sát.

So sánh hai trạng thái:

| Thiết lập                           | Hiện tượng dự kiến                        |
| ----------------------------------- | ----------------------------------------- |
| Không có Physics Material tùy chỉnh | Bóng rơi xuống và có thể bật rất ít       |
| Bounciness bằng 1                   | Bóng có xu hướng bật mạnh hơn sau va chạm |

Khi hoàn thành, dừng Play Mode và lưu Scene.

### 5.4. Bước 9 — Kiểm tra các Component

Chọn `Ball` trong Hierarchy, kiểm tra cấu trúc Inspector:

```
Ball
├── Transform
│   ├── Position: (2, 3, -1)
│   ├── Rotation
│   └── Scale: (0.25, 0.25, 0.25)
│
├── Mesh Filter
│   └── Mesh: Sphere
│
├── Mesh Renderer
│   └── Material: Ball_Mat
│
├── Sphere Collider
│   └── Material: Ball_Physics
│
└── Rigidbody
    ├── Mass
    ├── Use Gravity: true
    └── Is Kinematic: false
```

Cấu trúc này là minh họa các Component và thuộc tính cần kiểm tra, không phải định dạng tệp của Unity.

## 6. Thêm mặt phẳng nghiêng để kiểm tra va chạm

### 6.1. Bước 10 — Đưa Ramp vào Scene

Trong Project, truy cập thư mục `Prefabs > Shapes` và tìm Prefab `Ramp`.

Kéo `Ramp` vào Scene và đặt gần vị trí bên dưới quả bóng.

Sử dụng các công cụ:

- `W` — Move để điều chỉnh vị trí.
- `E` — Rotate để điều chỉnh hướng.
- `F` — Frame Selected để tập trung vào đối tượng.

Chuyển sang góc nhìn Top bằng Scene Gizmo để căn vị trí mặt phẳng nghiêng chính xác với quả bóng.

Mục tiêu là làm cho quả bóng rơi trúng Ramp, sau đó đổi hướng và di chuyển về góc phía sau bên phải của căn phòng.

### 6.2. Bước 11 — Kiểm tra Ramp chưa có Collider

Nhấn `Play` để chạy thử.

Nếu Ramp chỉ có thành phần hiển thị mà chưa có Collider, quả bóng có thể xuyên qua Ramp thay vì va chạm với mặt nghiêng.

Nguyên nhân là hình dạng mà mắt nhìn thấy không tự động đồng nghĩa với hình dạng mà hệ thống vật lý sử dụng để xử lý va chạm.

Đây là điểm khác biệt quan trọng giữa Mesh dùng để hiển thị và Collider dùng để mô phỏng vật lý.

### 6.3. Bước 12 — Bổ sung Mesh Collider

Chọn `Ramp` trong Hierarchy:

1. Mở Inspector.
2. Chọn `Add Component`.
3. Tìm `Mesh Collider`.
4. Thêm Component vào Ramp.
5. Bật thuộc tính `Convex` theo cấu hình của bài thực hành.
6. Chạy lại Play Mode để kiểm tra.

`Mesh Collider` sử dụng hình học 3D để xác định vùng va chạm. Khi bật `Convex`, Unity sử dụng một hình bao lồi phù hợp cho việc xử lý va chạm.

Về nguyên tắc, Mesh Collider không Convex vẫn có thể va chạm với Rigidbody động nếu nó được dùng làm bề mặt tĩnh. Việc bật Convex trong bài này là cấu hình thực hành, không có nghĩa mọi Mesh Collider đều bắt buộc phải Convex.

## 7. Bài thực hành mở rộng — Lập trình lực và Trigger

Phần này mở rộng từ quả bóng đã tạo để tìm hiểu sâu hơn về hệ thống vật lý bằng C#.

### 7.1. Phân biệt Collision và Trigger

`Collision` và `Trigger` đều dựa trên hệ thống Collider nhưng có hành vi khác nhau.

| Tình huống                       | Collision           | Trigger                            |
| -------------------------------- | ------------------- | ---------------------------------- |
| Vật thể tiếp xúc                 | Có                  | Có thể phát hiện chồng lấn         |
| Có phản ứng chặn hoặc đẩy vật lý | Có                  | Không                              |
| Callback vào vùng                | `OnCollisionEnter`  | `OnTriggerEnter`                   |
| Ứng dụng                         | Sàn, tường, vật cản | Vùng nhận vật phẩm, vùng kích hoạt |

Khi bật `Is Trigger` trên Collider của Ramp, quả bóng có thể đi xuyên qua Ramp nhưng vẫn tạo sự kiện Trigger nếu các điều kiện phát hiện phù hợp được đáp ứng.

### 7.2. Viết script BounceOnce.cs

Tạo một C# script tên `BounceOnce`, sau đó sử dụng:

```

using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BounceOnce : MonoBehaviour
{
    [SerializeField] private float impulse = 5f;

    private Rigidbody body;
    private bool bounceRequested;

    private void Awake()
    {
        body = GetComponent<Rigidbody>();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            bounceRequested = true;
        }
    }

    private void FixedUpdate()
    {
        if (!bounceRequested) return;

        bounceRequested = false;
        Bounce();
    }

    public void Bounce()
    {
        body.AddForce(
            Vector3.up * impulse,
            ForceMode.Impulse
        );
    }

    private void OnCollisionEnter(Collision collision)
    {
        Debug.Log(
            "Ball collided with: " +
            collision.gameObject.name
        );
    }

    private void OnTriggerEnter(Collider other)
    {
        Debug.Log(
            "Ball entered trigger: " +
            other.gameObject.name
        );
    }
}

```

Gắn script vào GameObject `Ball`.

Trong Play Mode, khi Game View có focus và nhấn `Space`, script sẽ yêu cầu một xung lực hướng lên trên. Lưu ý mã sử dụng `Input.GetKeyDown` của hệ thống Input cũ; nếu dự án chỉ bật New Input System, cần bật chế độ tương thích trong Player Settings hoặc viết lại phần đọc input bằng hệ thống mới.

### 7.3. Giải thích cơ chế hoạt động

Awake()

Được dùng để lấy tham chiếu tới Rigidbody của GameObject khi script khởi tạo.

Update()

Được gọi theo nhịp cập nhật frame. Trong ví dụ này, nó chỉ kiểm tra người chơi vừa nhấn phím Space hay chưa.

FixedUpdate()

Được sử dụng cho các xử lý gắn với bước mô phỏng vật lý. Khi có yêu cầu từ Update, hàm sẽ áp dụng lực một lần rồi đặt lại trạng thái.

AddForce()

Áp dụng lực lên Rigidbody:

```
body.AddForce(
    Vector3.up * impulse,
    ForceMode.Impulse
);
```

Trong đó:

- `Vector3.up`: hướng lên trên theo trục Y.
- `impulse`: độ lớn xung lực.
- `ForceMode.Impulse`: áp dụng xung lực tức thời, làm thay đổi vận tốc tùy theo khối lượng Rigidbody.

OnCollisionEnter() và OnTriggerEnter()

Ghi thông báo vào Console khi quả bóng bắt đầu một va chạm vật lý hoặc đi vào vùng Trigger tương ứng.

Không nên dùng các callback 2D như `OnCollisionEnter2D` hoặc `OnTriggerEnter2D` cho đối tượng sử dụng hệ vật lý 3D.

### 7.4. Luồng xử lý sự kiện

\#chatgpt-mermaid-\_r_t8\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_t8\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_t8\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_t8\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_t8\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_t8\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_t8\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_t8\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_t8\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_t8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t8\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t8\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_t8\_ p{margin:0;}#chatgpt-mermaid-\_r_t8\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_t8\_ .label text,#chatgpt-mermaid-\_r_t8\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ .node rect,#chatgpt-mermaid-\_r_t8\_ .node circle,#chatgpt-mermaid-\_r_t8\_ .node ellipse,#chatgpt-mermaid-\_r_t8\_ .node polygon,#chatgpt-mermaid-\_r_t8\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .rough-node .label text,#chatgpt-mermaid-\_r_t8\_ .node .label text,#chatgpt-mermaid-\_r_t8\_ .image-shape .label,#chatgpt-mermaid-\_r_t8\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_t8\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .rough-node .label,#chatgpt-mermaid-\_r_t8\_ .node .label,#chatgpt-mermaid-\_r_t8\_ .image-shape .label,#chatgpt-mermaid-\_r_t8\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_t8\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_t8\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t8\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t8\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_t8\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_t8\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_t8\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_t8\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_t8\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_t8\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_t8\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_t8\_ .icon-shape,#chatgpt-mermaid-\_r_t8\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_t8\_ .icon-shape p,#chatgpt-mermaid-\_r_t8\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_t8\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_t8\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_t8\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_t8\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_t8\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_t8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_t8\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_t8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_t8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t8\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_t8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_t8\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_t8\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_t8\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_t8\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_t8\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .node rect,#chatgpt-mermaid-\_r_t8\_ .node circle,#chatgpt-mermaid-\_r_t8\_ .node ellipse,#chatgpt-mermaid-\_r_t8\_ .node polygon,#chatgpt-mermaid-\_r_t8\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_t8\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_t8\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_t8\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_t8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_t8\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn SpaceUpdate phát hiện phímbounceRequested = trueFixedUpdateGọi BounceRigidbody.AddForceUnity Physics cập nhật chuyểnđộngKiểu tiếp xúcOnCollisionEnterOnTriggerEnterGhi ConsoleCollider thườngIs Trigger

Các nhánh va chạm trong sơ đồ chỉ xảy ra khi quả bóng thực sự gặp Collider tương ứng và thỏa mãn điều kiện gửi callback của Unity.

### 7.5. Thử nghiệm Fixed Timestep

Mở:

`Edit > Project Settings > Time`

Tìm thuộc tính `Fixed Timestep`.

Thuộc tính này quyết định khoảng thời gian mô phỏng giữa các bước cập nhật vật lý.

Ví dụ, với `Fixed Timestep = 0.02` giây:

\\[ \frac{1}{0.02}=50 \\]

Tương ứng 50 bước mô phỏng trên mỗi giây thời gian game trong điều kiện mô phỏng bình thường.

Giảm Fixed Timestep có thể cải thiện độ chi tiết của mô phỏng nhưng cũng làm tăng số lần tính toán vật lý. Tăng quá mức có thể khiến kết quả va chạm kém chính xác hơn. Đây không phải thông số cần thay đổi thường xuyên nếu trò chơi đang hoạt động ổn định.

Trong bài thử nghiệm, hãy ghi lại giá trị ban đầu trước khi thay đổi và khôi phục sau khi hoàn tất.

## 8. Lỗi thường gặp và cách khắc phục

| Hiện tượng                     | Nguyên nhân có thể                                                            | Cách khắc phục                                |
| ------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------- |
| Bóng đứng yên trên không       | Thiếu Rigidbody, tắt Gravity hoặc bật Is Kinematic                            | Kiểm tra Rigidbody                            |
| Bóng xuyên qua Ramp            | Ramp thiếu Collider                                                           | Thêm Mesh Collider                            |
| Bóng không nảy rõ rệt          | Thiếu Physics Material hoặc cấu hình Bounce Combine                           | Kiểm tra Material trên Sphere Collider        |
| Bóng biến mất khỏi Scene View  | Góc quan sát không phù hợp                                                    | Chọn Ball và nhấn F                           |
| Nhấn Space không có tác dụng   | Script chưa gắn, Game View chưa focus hoặc Input không tương thích            | Kiểm tra script, Console và Input Settings    |
| Không thấy thông báo Collision | Collider đang bật Is Trigger hoặc hai vật thể chưa thực sự tiếp xúc           | Kiểm tra trạng thái Collider                  |
| Không thấy Trigger callback    | Cấu hình Rigidbody/Collider chưa thỏa điều kiện, hoặc vật chưa đi vào Trigger | Kiểm tra Is Trigger và trạng thái chuyển động |

### Quy trình Debug

Khi phát sinh lỗi vật lý, nên kiểm tra lần lượt:

1. Xác nhận đối tượng đang tồn tại và được bật trong Hierarchy.
2. Kiểm tra Collider có được gắn và bật hay không.
3. Kiểm tra Rigidbody, Use Gravity và Is Kinematic.
4. Kiểm tra Physics Material đã được gán đúng vào Collider.
5. Chạy Play Mode và quan sát hành vi.
6. Kiểm tra Console nếu có script.
7. Chỉ thay đổi một thông số rồi thử lại để xác định nguyên nhân.

## 9. Bài tập củng cố

Bài tập cơ bản: Tạo quả bóng với Scale `(0.25, 0.25, 0.25)`, đặt tại `(2, 3, -1)`, bổ sung Rigidbody và Physics Material. Chạy thử, quan sát bóng rơi và nảy.

Bài tập vận dụng: Tạo ba biến thể quả bóng với Bounciness lần lượt bằng `0`, `0.5` và `1`. Thả từng quả từ cùng một độ cao, giữ các yếu tố khác giống nhau rồi ghi lại sự khác biệt.

Bài tập nâng cao: Sử dụng script `BounceOnce` để thử các giá trị Mass và Impulse khác nhau. Sau đó bật `Is Trigger` trên Ramp để so sánh hành vi xuyên vật thể với va chạm vật lý thông thường.

Bài tập mở rộng: Điều chỉnh vị trí và góc nghiêng của Ramp để quả bóng bật về góc phòng đã chừa trống. Đây sẽ là khu vực để thử nghiệm với tháp các khối 3D.

## 10. Checklist hoàn thành

Tiến độ thực hành

0/9

Tạo GameObject Ball từ Sphere

Đặt Scale thành (0.25, 0.25, 0.25)

Đặt Position thành (2, 3, -1)

Tạo và gán Ball_Mat

Thêm Rigidbody và bật Use Gravity

Tạo Ball_Physics với Bounciness = 1

Thêm Ramp và Mesh Collider, bật Convex

Quan sát bóng va chạm trong Play Mode

Lưu Scene sau khi hoàn thành

## 11. Câu hỏi ôn tập trắc nghiệm

Câu 1. Một quả bóng được đặt trên không nhưng không rơi khi chạy Scene. Component nào cần thêm để bóng chịu tác động của trọng lực?

A. Mesh Renderer

B. Rigidbody

C. Transform

D. Mesh Filter

Kiểm tra

Câu 2. Thuộc tính nào quyết định độ nảy của bề mặt khi va chạm?

A. Metallic

B. Smoothness

C. Bounciness

D. Base Map

Kiểm tra

Câu 3. Vì sao quả bóng đi xuyên qua Ramp dù Ramp vẫn hiển thị rõ trên màn hình?

A. Ramp chưa có Collider phù hợp

B. Bóng có màu sai

C. Camera đặt quá cao

D. Ball_Mat chưa lưu

Kiểm tra

Câu 4. Khi bật Is Trigger trên Ramp, điều gì có thể xảy ra nếu bóng đi vào vùng Collider?

A. Quả bóng tự biến mất

B. Bóng luôn bật cao hơn

C. Rigidbody tự bị xóa

D. Bóng đi xuyên qua và tạo sự kiện Trigger

Kiểm tra

Câu 5. Vì sao đoạn mã ví dụ đọc phím trong Update nhưng áp dụng lực trong FixedUpdate?

A. Vì Update không cho phép đọc phím

B. Vì FixedUpdate đồng bộ với các bước mô phỏng vật lý

C. Vì Rigidbody không tồn tại trong Update

D. Vì FixedUpdate luôn chạy nhanh hơn Update

Kiểm tra

Kết quả ôn tập

# 0/5

&#x20;Làm lại

## 12. Tổng kết

Sau bài thực hành, người học đã biết cách tạo một đối tượng hình cầu, cấu hình hình ảnh và bổ sung các tính chất vật lý để nó có thể rơi và nảy trong môi trường 3D.

Những kiến thức quan trọng nhất là:

- Rigidbody điều khiển chuyển động thông qua mô phỏng vật lý.
- Collider xác định hình dạng tham gia va chạm.
- Physics Material điều chỉnh độ nảy và ma sát khi các bề mặt tiếp xúc.
- Material quyết định cách đối tượng được hiển thị.
- FixedUpdate phù hợp để áp dụng lực trong quá trình mô phỏng vật lý.

Khi kết hợp những thành phần này, một đối tượng 3D tĩnh có thể trở thành vật thể động tương tác với môi trường.

Bài tiếp theo: Make a Tower of Prefab Blocks — Tạo một tháp từ các khối Prefab để quả bóng va chạm và làm đổ tháp.

Nguồn đối chiếu: [Unity Learn — Make a Bouncy Ball](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials/tutorial/make-a-bouncy-ball?version=6.3\&utm_source=chatgpt.com) · Unity Essentials · Unity 6.3. Các phần lập trình C#, Trigger và Fixed Timestep là nội dung thực hành mở rộng. Bài học được biên soạn bằng tiếng Việt, không phải bản dịch chính thức của Unity.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn
