# Bài 03 — Lesson 2.2: Food Flight

Junior Programmer · Basic Gameplay · Tutorial · Unity 6.3

Chủ đề thực hành: Thiết lập ánh sáng, cải thiện độ chân thực của khung cảnh và kiểm tra khả năng hiển thị của đối tượng tĩnh, đối tượng động.

Nguồn tham khảo: [Unity Learn — Basic Gameplay](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com)

Nội dung là bài học thực hành tự biên soạn theo phần kiến thức được cung cấp, không phải bản dịch chính thức. Phạm vi tập trung vào chiếu sáng; chưa xác nhận nội dung này trùng với các bước chính thức của bài Food Flight.

## 1. Tổng quan bài học

Ánh sáng là thành phần quan trọng trong việc xây dựng một khung cảnh 3D. Nó không chỉ giúp người chơi nhìn thấy các đối tượng mà còn ảnh hưởng đến cảm nhận về chiều sâu, hình dạng, chất liệu và không gian.

Trong Unity, một khung cảnh có thể sử dụng nhiều phương pháp chiếu sáng khác nhau. Mỗi phương pháp có ưu điểm, hạn chế và chi phí xử lý riêng.

Ví dụ, với một trò chơi có các vật thể thức ăn bay qua màn hình, hệ thống ánh sáng cần đáp ứng hai yêu cầu:

- Đối tượng tĩnh: Mặt đất, tường và vật trang trí được chiếu sáng ổn định.
- Đối tượng động: Các vật thể di chuyển vẫn nhận được ánh sáng phù hợp khi thay đổi vị trí.

Bài học tập trung vào cách thiết lập một scene nhỏ, thay đổi nguồn sáng, so sánh kết quả và kiểm tra các lỗi chiếu sáng thường gặp.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích được vai trò của ánh sáng đối với hình ảnh 3D trong Unity.
2. Phân biệt ba loại đèn phổ biến: `Directional Light`, `Point Light` và `Spot Light`.
3. So sánh cách sử dụng `Realtime Lighting` và `Baked Lighting`.
4. Mô tả vai trò của `Light Probes` và `Reflection Probes`.
5. Thiết lập và kiểm tra một khung cảnh có đối tượng tĩnh, đối tượng động và nguồn sáng.
6. Phát hiện, phân tích và khắc phục một số lỗi chiếu sáng thường gặp.

## 3. Kiến thức cốt lõi

### 3.1. Ánh sáng trong Unity hoạt động như thế nào?

Trong một scene 3D, hệ thống hiển thị hình ảnh chịu ảnh hưởng bởi nhiều thành phần.

| Thành phần      | Vai trò                                                         |
| --------------- | --------------------------------------------------------------- |
| `Scene`         | Không gian chứa các đối tượng của trò chơi                      |
| `GameObject`    | Đại diện cho vật thể, nguồn sáng, camera và các thành phần khác |
| `Transform`     | Xác định vị trí, góc xoay và tỷ lệ đối tượng                    |
| `Light`         | Tạo nguồn sáng cho khung cảnh                                   |
| `Mesh Renderer` | Hiển thị hình học của vật thể                                   |
| `Material`      | Quy định cách bề mặt hiển thị và phản ứng với ánh sáng          |
| `Camera`        | Xác định góc nhìn được hiển thị trong Game view                 |
| `Play Mode`     | Chạy thử scene để kiểm tra kết quả                              |

Một nguồn sáng không tự quyết định toàn bộ hình ảnh. Kết quả cuối cùng còn phụ thuộc vào vật liệu, hướng bề mặt, bóng đổ và cấu hình render.

\#chatgpt-mermaid-\_r_ln\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ln\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ln\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ln\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ln\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ln\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ln\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ln\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ln\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ln\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ln\_ p{margin:0;}#chatgpt-mermaid-\_r_ln\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ln\_ .label text,#chatgpt-mermaid-\_r_ln\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .node rect,#chatgpt-mermaid-\_r_ln\_ .node circle,#chatgpt-mermaid-\_r_ln\_ .node ellipse,#chatgpt-mermaid-\_r_ln\_ .node polygon,#chatgpt-mermaid-\_r_ln\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .rough-node .label text,#chatgpt-mermaid-\_r_ln\_ .node .label text,#chatgpt-mermaid-\_r_ln\_ .image-shape .label,#chatgpt-mermaid-\_r_ln\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ln\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .rough-node .label,#chatgpt-mermaid-\_r_ln\_ .node .label,#chatgpt-mermaid-\_r_ln\_ .image-shape .label,#chatgpt-mermaid-\_r_ln\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ln\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ln\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ln\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ln\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ln\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ln\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ln\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ln\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ln\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ln\_ .icon-shape,#chatgpt-mermaid-\_r_ln\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ln\_ .icon-shape p,#chatgpt-mermaid-\_r_ln\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ln\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ln\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ln\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ln\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ln\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ln\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ln\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ln\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ln\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ln\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ln\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .node rect,#chatgpt-mermaid-\_r_ln\_ .node circle,#chatgpt-mermaid-\_r_ln\_ .node ellipse,#chatgpt-mermaid-\_r_ln\_ .node polygon,#chatgpt-mermaid-\_r_ln\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ln\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ln\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ln\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ln\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ln\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Nguồn sángQuá trình kết xuấtHình học và MaterialCamera và cấu hình SceneHình ảnh trong Game ViewQuan sát và điều chỉnh

Quy trình này giải thích vì sao việc thay đổi `Intensity` của đèn đôi khi không tạo ra kết quả giống dự đoán: vật thể có thể sử dụng shader không phản ứng với ánh sáng, nằm ngoài phạm vi chiếu sáng hoặc chịu ảnh hưởng từ các nguồn sáng khác.

### 3.2. Các loại nguồn sáng

[First Script — Documentation Formation Unity 1 1](https://images.openai.com/static-rsc-4/1sqly-3st2Ad2OWC_-1nLRYSno4bFcRit0-M7K2Uy5XZKvldz5DMrTIUfurNH3qwHKhfTJxSsi3XpzoCXPrHwS8uDp3HP9mJ876uWLwOFBqbekSkNpjXeyZdcnUEbR9e8T8CnNvBhwsA6f3Fxd6I5AI28-aX2RxKG-_2cUPYVYc?purpose=inline)

Directional Light

Mô phỏng ánh sáng truyền theo một hướng xác định, chẳng hạn ánh sáng mặt trời. Vị trí đèn không quyết định khoảng cách đến vật thể; hướng xoay là yếu tố quan trọng.

Ứng dụng: Ánh sáng mặt trời cho cảnh ngoài trời.

[Unity - Light](https://images.openai.com/static-rsc-4/Og-VGPLQjfCcQ7efcT0SQq6HWweAHmLEVwTA4wifO3jVIuqpJExMyp625GOgADEKKbRYa19q124Rw_g-PNm7OugfROhofrIBJiq4WsXAUx6R6AMhUvtMGhi3HBc5COSyayTCjJDfOZPdz0KAoTRZreA7rBNPh3-lSh0Oxi5kVIM?purpose=inline)

Point Light

Phát sáng từ một vị trí ra nhiều hướng, với mức độ ảnh hưởng phụ thuộc vào phạm vi và khoảng cách.

Ứng dụng: Bóng đèn, đuốc hoặc nguồn sáng cục bộ.

[Hard light / soft light / specular light / diffuse light — elephant vfx](https://images.openai.com/static-rsc-4/rMo4i-vxD3NIaKxKRPExdvNPkxyovCxbhsN1Eyou2sw_4f8XSJ5oVxdTbqYjhNERy5e0vmUa3MqoOD8pYQCYFuEZUlqBl1VptdvlMHiT3FNQrSZLKJDkpkEQ30ISGmeLG3IoNpFXXldQ9ghkPW6xLIWo8QjDqFi4fnIwUbz42FQ?purpose=inline)

Spot Light

Phát sáng trong một vùng hình nón, cho phép điều chỉnh góc chiếu và phạm vi ảnh hưởng.

Ứng dụng: Đèn pin, đèn sân khấu hoặc đèn chiếu tập trung.

### 3.3. Realtime Lighting và Baked Lighting

Hai phương pháp chiếu sáng này khác nhau về thời điểm tính toán và khả năng phản ứng với thay đổi của scene.

| Tiêu chí            | Realtime Lighting                     | Baked Lighting                                                 |
| ------------------- | ------------------------------------- | -------------------------------------------------------------- |
| Thời điểm tính      | Trong lúc chạy trò chơi               | Tính trước và lưu dữ liệu                                      |
| Nguồn sáng thay đổi | Hỗ trợ                                | Không tự cập nhật phần đã bake                                 |
| Đối tượng tĩnh      | Hỗ trợ                                | Phù hợp                                                        |
| Đối tượng động      | Có thể nhận ánh sáng realtime         | Cần cơ chế bổ sung như Light Probes                            |
| Hiệu năng           | Phụ thuộc số đèn, bóng đổ và pipeline | Giảm một phần phép tính realtime nhưng sử dụng bộ nhớ lightmap |
| Ứng dụng            | Đèn di chuyển, ánh sáng thay đổi      | Môi trường ít thay đổi                                         |

Ví dụ: Một căn phòng có tường và sàn cố định có thể dùng baked lighting. Trong khi đó, một nguồn sáng gắn với vật thể đang di chuyển thường cần phương pháp chiếu sáng có thể cập nhật theo thời gian chạy.

### 3.4. Light Probes và Reflection Probes

Light Probes lưu thông tin ánh sáng tại các vị trí trong không gian. Chúng giúp vật thể động sử dụng dữ liệu ánh sáng gián tiếp đã tính trước, khi shader và cấu hình renderer hỗ trợ.

Ví dụ: Một vật thể di chuyển từ vùng sáng sang vùng tối có thể nhận được ánh sáng gián tiếp nội suy từ các probe xung quanh.

Reflection Probes ghi nhận thông tin phản xạ môi trường. Chúng đặc biệt hữu ích với các bề mặt có tính phản chiếu như kim loại hoặc vật liệu bóng.

Light Probes và Reflection Probes phục vụ hai mục đích khác nhau: một bên hỗ trợ chiếu sáng, bên còn lại hỗ trợ phản xạ môi trường.

## 4. Thực hành trong Unity

### 4.1. Chuẩn bị scene

Mở dự án trong Unity Editor và tạo một scene thực hành.

Các đối tượng cần có:

| GameObject          | Cấu hình                                  |
| ------------------- | ----------------------------------------- |
| `Ground`            | Mặt phẳng làm nền                         |
| `StaticObject`      | Cube hoặc vật thể trang trí đứng yên      |
| `MovingObject`      | Sphere hoặc mô hình thức ăn để thử nghiệm |
| `Directional Light` | Nguồn sáng chính                          |
| `Main Camera`       | Góc nhìn bao quát toàn cảnh               |

Có thể sử dụng các đối tượng 3D cơ bản thông qua menu `GameObject > 3D Object`.

### 4.2. Thử nghiệm Directional Light

1. Chọn `Directional Light` trong cửa sổ Hierarchy.
2. Quan sát `Light Component` trong Inspector.
3. Thay đổi góc xoay của nguồn sáng.
4. Điều chỉnh `Intensity` và `Color`.
5. Quan sát sự thay đổi của bề mặt và bóng đổ trong Scene view và Game view.

Minh họa ảnh hưởng của hướng chiếu sáng

[Sun + Sky model in Rhino - Rendering - McNeel Forum](https://images.openai.com/static-rsc-4/qbfe_MNIy5NPgClY84rtYfWZAbUJEYjUv-KErCyjeo_Mm5yeEXLtRw5mag_Rr52MSdgyHsDFm5muGZX2TQZRzwS82suN7XR7fI6-9pbazGTsqhRr7qWWDuuRLSWZ2wM0pZnWLwjyx9DEUqP2jfOJjIpiLFJAYWYTAwD_2jPtpNw?purpose=inline)

Ánh sáng từ trên cao: bóng đổ ngắn hơn.

[Designing with Shadow in 3D](https://images.openai.com/static-rsc-4/ajKNEbRoDmyevMLNB8hO6pRUFFTP-KOtbu835ccOnviE09eKMcehjlhL2g-u6A5IeZ8zNt6DT88nlIzdKQr0ROP75ZXLGpTcibjkYdRI3PGer6Ag5AGvhNpQrAgYgVhtN-3ZNUFAuYAhFsN1mLihv5k67Xr38JgtU3t8Hyuj_qk?purpose=inline)

Ánh sáng góc thấp: bóng đổ kéo dài.

Checkpoint: Giải thích được vì sao thay đổi góc chiếu có thể làm thay đổi hình dạng và hướng bóng đổ.

### 4.3. Thử nghiệm Point Light và Spot Light

Tạo hai nguồn sáng, lần lượt thử với `Point Light` và `Spot Light`.

Điều chỉnh từng tham số:

- `Range`: Phạm vi tác động của nguồn sáng.
- `Intensity`: Cường độ chiếu sáng.
- `Color`: Màu sắc nguồn sáng.
- `Spot Angle`: Góc mở của vùng chiếu đối với Spot Light.

Chỉ thay đổi một tham số trong mỗi lần thử để dễ xác định nguyên nhân làm hình ảnh khác đi.

### 4.4. Thử nghiệm Baked Lighting

Với dự án và render pipeline có hỗ trợ:

1. Chọn vật thể tĩnh như mặt đất và tường.
2. Thiết lập trạng thái đóng góp vào Global Illumination cho những đối tượng phù hợp.
3. Mở cửa sổ Lighting và cấu hình chế độ bake theo pipeline.
4. Thực hiện Generate Lighting hoặc quy trình bake tương ứng.
5. Quan sát lightmap, độ sáng bề mặt và bóng đổ.
6. Thay đổi vị trí một đối tượng động để kiểm tra cách nó nhận ánh sáng.

Lưu ý: Đánh dấu một vật thể là tĩnh không có nghĩa mọi ánh sáng hoặc bóng đổ của nó đều tự động được bake. Cần thiết lập đúng chế độ chiếu sáng, vật liệu và dữ liệu lightmap.

### 4.5. Kiểm tra Light Probes

Đặt một nhóm Light Probes trong không gian giữa vùng sáng và vùng tối, sau đó tạo lại dữ liệu ánh sáng khi cần.

Kiểm tra `Mesh Renderer` của đối tượng động để bảo đảm chế độ sử dụng Light Probes phù hợp.

Thử di chuyển đối tượng và quan sát độ sáng bề mặt tại nhiều vị trí.

Kết quả mong đợi: Khi cấu hình đúng, vật thể động có thể nhận ánh sáng gián tiếp từ probe thay vì chỉ phụ thuộc vào ánh sáng realtime.

## 5. Quy trình kiểm chứng kết quả

Sau mỗi thử nghiệm, ghi lại ba yếu tố:

| Thành phần | Cần ghi nhận                            |
| ---------- | --------------------------------------- |
| Dự đoán    | Hình ảnh sẽ thay đổi như thế nào?       |
| Quan sát   | Kết quả thực tế trong Scene/Game view   |
| Giải thích | Vì sao kết quả trùng hoặc khác dự đoán? |

Ví dụ:

Thử nghiệm: Xoay Directional Light về phía bên trái đối tượng.

Dự đoán: Hướng bóng đổ thay đổi.

Quan sát: Bóng đổ chuyển hướng nếu nguồn sáng và thiết lập bóng đổ đang hoạt động phù hợp.

Giải thích: Directional Light xác định hướng ánh sáng thông qua phép xoay, vì vậy thay đổi hướng chiếu dẫn đến thay đổi hướng bóng.

Đối với đánh giá hiệu năng, có thể dùng công cụ Profiler của Unity. Khi so sánh, giữ nguyên độ phân giải, camera, scene và cấu hình kiểm thử để kết quả có ý nghĩa.

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng                          | Nguyên nhân có thể                               | Hướng kiểm tra                                  |
| ----------------------------------- | ------------------------------------------------ | ----------------------------------------------- |
| Lightmap không cập nhật             | Chưa bake lại hoặc cấu hình sai                  | Kiểm tra Lighting Settings và Generate Lighting |
| Vật thể xuất hiện mảng sáng tối sai | UV lightmap không phù hợp                        | Kiểm tra UV và cảnh báo về overlapping UV       |
| Vật thể động quá tối                | Thiếu dữ liệu ánh sáng hoặc Light Probes         | Kiểm tra Light Probes và Mesh Renderer          |
| Không thấy bóng đổ                  | Shadow bị tắt hoặc thiết lập không phù hợp       | Kiểm tra Light và chất lượng bóng đổ            |
| Đèn không chiếu sáng vật thể        | Shader, range, layer hoặc pipeline không phù hợp | Kiểm tra Material, Light và Render Pipeline     |

### Quy trình debug

\#chatgpt-mermaid-\_r_n5\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_n5\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_n5\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_n5\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_n5\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_n5\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_n5\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_n5\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_n5\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_n5\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n5\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n5\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_n5\_ p{margin:0;}#chatgpt-mermaid-\_r_n5\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_n5\_ .label text,#chatgpt-mermaid-\_r_n5\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ .node rect,#chatgpt-mermaid-\_r_n5\_ .node circle,#chatgpt-mermaid-\_r_n5\_ .node ellipse,#chatgpt-mermaid-\_r_n5\_ .node polygon,#chatgpt-mermaid-\_r_n5\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .rough-node .label text,#chatgpt-mermaid-\_r_n5\_ .node .label text,#chatgpt-mermaid-\_r_n5\_ .image-shape .label,#chatgpt-mermaid-\_r_n5\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_n5\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .rough-node .label,#chatgpt-mermaid-\_r_n5\_ .node .label,#chatgpt-mermaid-\_r_n5\_ .image-shape .label,#chatgpt-mermaid-\_r_n5\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_n5\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_n5\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n5\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n5\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_n5\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_n5\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_n5\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_n5\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_n5\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_n5\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_n5\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_n5\_ .icon-shape,#chatgpt-mermaid-\_r_n5\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_n5\_ .icon-shape p,#chatgpt-mermaid-\_r_n5\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_n5\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_n5\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_n5\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_n5\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_n5\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_n5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_n5\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_n5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_n5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n5\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_n5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_n5\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_n5\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_n5\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_n5\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_n5\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .node rect,#chatgpt-mermaid-\_r_n5\_ .node circle,#chatgpt-mermaid-\_r_n5\_ .node ellipse,#chatgpt-mermaid-\_r_n5\_ .node polygon,#chatgpt-mermaid-\_r_n5\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_n5\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_n5\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_n5\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_n5\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_n5\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiKiểm tra ConsoleKiểm tra GameObject vàComponentĐặt giả thuyết nguyên nhânThay đổi một thiết lậpLỗi đã được xử lý?Ghi kết quả và lưu SceneChưaRồi

Kiểm tra từng giả thuyết riêng biệt giúp hạn chế việc sửa nhiều thiết lập cùng lúc nhưng không biết chính xác thay đổi nào giải quyết vấn đề.

## 7. Bài tập thực hành

Bài tập cơ bản: Tạo một scene với ba vật thể và một Directional Light. Thay đổi hướng nguồn sáng ba lần, chụp ảnh và giải thích sự khác nhau.

Bài tập vận dụng: Bố trí một Point Light và một Spot Light chiếu vào cùng đối tượng. Dự đoán hình dạng vùng sáng rồi thay đổi phạm vi và cường độ để kiểm chứng.

Bài tập mở rộng: Xây dựng khung cảnh gồm nền, tường, vật thể tĩnh và một vật thể thức ăn chuyển động. Thử baked lighting cho môi trường, sau đó bố trí Light Probes để kiểm tra ánh sáng trên vật thể động.

## 8. Câu hỏi ôn tập

Trắc nghiệm — 5 câu

0/5 câu đã trả lời

Câu 1. Một scene ngoài trời cần nguồn sáng mô phỏng mặt trời. Lựa chọn nào phù hợp nhất?

A. Point Light

B. Reflection Probe

C. Directional Light

D. Spot Light

Câu 2. Khi một nguồn sáng thay đổi vị trí liên tục trong trò chơi, phương pháp nào thường phù hợp hơn để ánh sáng cập nhật theo chuyển động?

A. Chỉ dùng Baked Lighting

B. Realtime Lighting

C. Xóa tất cả Light

D. Chỉ sử dụng Reflection Probes

Câu 3. Vật thể động cần nhận ánh sáng gián tiếp đã được bake từ môi trường. Thành phần nào có thể hỗ trợ?

A. Light Probes

B. Camera

C. Audio Listener

D. Box Collider

Câu 4. Một bề mặt kim loại cần phản ánh môi trường xung quanh. Thành phần nào phù hợp nhất?

A. Directional Light

B. Mesh Collider

C. Audio Source

D. Reflection Probe

Câu 5. Sau khi thay đổi scene, hình ảnh baked lighting vẫn giữ kết quả cũ. Nên kiểm tra điều gì trước tiên?

A. Tốc độ chuyển động của Camera

B. Thiết lập bake và việc tạo lại dữ liệu ánh sáng

C. Âm lượng trò chơi

D. Tên của GameObject

Chấm điểmLàm lại

## 9. Checklist hoàn thành

Tiến độ học tập

0/7

Phân biệt được Directional Light, Point Light và Spot Light.

Tạo được scene thực hành có các đối tượng tĩnh và động.

Điều chỉnh nguồn sáng và giải thích sự thay đổi bóng đổ.

Thực hiện thử nghiệm baked lighting khi pipeline hỗ trợ.

Kiểm tra Light Probes hoặc Reflection Probes.

Lưu ảnh minh chứng, ghi nhận một lỗi và cách khắc phục.

Hoàn thành 5 câu hỏi ôn tập.

## 10. Tổng kết

Ánh sáng trong Unity là kết quả kết hợp giữa nguồn sáng, vật liệu, hình học, thông tin môi trường và cấu hình render.

Ba kiến thức quan trọng cần ghi nhớ là:

- Light Components quyết định cách ánh sáng được phát ra và ảnh hưởng đến khung cảnh.
- Realtime Lighting và Baked Lighting giải quyết các nhu cầu chiếu sáng khác nhau, đặc biệt khi cần cân bằng giữa tính linh hoạt và hiệu năng.
- Light Probes và Reflection Probes hỗ trợ tái hiện ánh sáng và phản xạ môi trường, giúp hình ảnh có chiều sâu và tính nhất quán hơn.

Khi thực hành, không chỉ thay đổi các giá trị trong Inspector mà cần dự đoán, quan sát, so sánh và giải thích kết quả. Đây là kỹ năng quan trọng trong việc xây dựng, kiểm thử và tối ưu hóa khung cảnh 3D.

Ghi chú phiên bản: Các tùy chọn Lighting, lightmap và giao diện cấu hình có thể khác nhau giữa Built-in Render Pipeline, URP và HDRP trong Unity 6.3. Cần đối chiếu với render pipeline của dự án khi thực hiện.