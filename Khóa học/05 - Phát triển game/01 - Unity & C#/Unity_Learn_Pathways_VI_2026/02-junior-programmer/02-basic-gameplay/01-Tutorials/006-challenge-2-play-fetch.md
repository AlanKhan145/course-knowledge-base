# Bài 06 — Challenge 2: Play Fetch

Junior Programmer

Basic Gameplay

Unity 6.3

Challenge

Chủ đề: Sửa lỗi gameplay, sinh đối tượng ngẫu nhiên, phát hiện va chạm và quản lý vòng đời GameObject.

Tài liệu tham khảo: [Unity Learn — Challenge 2: Play Fetch](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/challenge-2-play-fetch?utm_source=chatgpt.com).

Bài học tiếng Việt tự biên soạn, kết hợp yêu cầu thử nghiệm và kiểm chứng. Không phải bản dịch chính thức hoặc bản ghi video của Unity.

## 1. Tổng quan bài thực hành

### 1.1. Bối cảnh

Trong thử thách Play Fetch, người chơi cần điều khiển việc xuất hiện của những chú chó để bắt các quả bóng đang rơi từ phía trên màn hình.

Dự án khởi đầu đã có những thành phần gameplay cơ bản nhưng tồn tại một số lỗi được cài đặt có chủ đích. Nhiệm vụ của người học là tìm nguyên nhân, sửa lỗi và kiểm chứng hành vi của từng đối tượng.

[Challenge 2 — Play Fetch. Junior Programmer: Challenge 2 Unity | by Pat Genest | Medium](https://images.openai.com/static-rsc-4/Lw9dVnYtcPfe_xVZQtllOoYmV0jECuIuKrXmRY9Wbho-zIrVZphIQwpFcJPq2XwWRSIg6tVfCoaGnFwosCU5p_fFMXp9GsqwdmqpjCI_8qlhrxsPr9YYf6D3vuVT2GMjPobWn64U2y6uDzrogLG7bAdUefqriI4f23sPJIjyrj8?purpose=inline)

[medium.com](https://medium.com/%40pat.x.genest/challenge-2-play-fetch-c96298b387b4?utm_source=chatgpt.com)

Minh họa gameplay Play Fetch: những quả bóng xuất hiện và chú chó được tạo ra để bắt bóng.

### 1.2. Mục tiêu học tập

Sau khi hoàn thành, người học có thể:

- Kiểm tra và sửa tham chiếu `Prefab` trong Unity Inspector.
- Sử dụng `Array` và số ngẫu nhiên để chọn đối tượng được sinh ra.
- Phân biệt va chạm thực tế với việc các đối tượng chỉ ở gần nhau.
- Kiểm tra vị trí của GameObject và loại bỏ đối tượng vượt khỏi giới hạn màn hình.
- Phân tích lỗi bằng Unity Console và Play Mode.
- Áp dụng khoảng thời gian sinh đối tượng ngẫu nhiên và giới hạn tần suất nhập liệu.

## 2. Yêu cầu gameplay

### 2.1. Kết quả mong đợi

Một phiên bản Play Fetch hoạt động đúng cần đáp ứng những hành vi sau:

| Thành phần       | Hành vi mong đợi                                               |
| ---------------- | -------------------------------------------------------------- |
| Quả bóng         | Một trong ba loại bóng xuất hiện ngẫu nhiên phía trên màn hình |
| Vị trí xuất hiện | Tọa độ X của bóng được chọn ngẫu nhiên                         |
| Người chơi       | Nhấn `Space` để tạo chú chó                                    |
| Chú chó          | Di chuyển để bắt bóng                                          |
| Va chạm          | Bóng biến mất khi va chạm trực tiếp với chó                    |
| Game Over        | In thông báo `Game Over` khi bóng chạm đất                     |
| Dọn dẹp          | Loại bỏ bóng và chó khi chúng ra khỏi phạm vi màn hình         |

Đây là những hành vi cốt lõi của thử thách.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### 2.2. Sơ đồ hoạt động

\#chatgpt-mermaid-\_r_hc\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_hc\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_hc\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_hc\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_hc\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_hc\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_hc\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_hc\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_hc\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_hc\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hc\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hc\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_hc\_ p{margin:0;}#chatgpt-mermaid-\_r_hc\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_hc\_ .label text,#chatgpt-mermaid-\_r_hc\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ .node rect,#chatgpt-mermaid-\_r_hc\_ .node circle,#chatgpt-mermaid-\_r_hc\_ .node ellipse,#chatgpt-mermaid-\_r_hc\_ .node polygon,#chatgpt-mermaid-\_r_hc\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .rough-node .label text,#chatgpt-mermaid-\_r_hc\_ .node .label text,#chatgpt-mermaid-\_r_hc\_ .image-shape .label,#chatgpt-mermaid-\_r_hc\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_hc\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .rough-node .label,#chatgpt-mermaid-\_r_hc\_ .node .label,#chatgpt-mermaid-\_r_hc\_ .image-shape .label,#chatgpt-mermaid-\_r_hc\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_hc\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_hc\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hc\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hc\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_hc\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_hc\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_hc\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_hc\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_hc\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_hc\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_hc\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_hc\_ .icon-shape,#chatgpt-mermaid-\_r_hc\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_hc\_ .icon-shape p,#chatgpt-mermaid-\_r_hc\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_hc\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_hc\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_hc\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_hc\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_hc\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_hc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_hc\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_hc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_hc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hc\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_hc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_hc\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_hc\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_hc\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_hc\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_hc\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .node rect,#chatgpt-mermaid-\_r_hc\_ .node circle,#chatgpt-mermaid-\_r_hc\_ .node ellipse,#chatgpt-mermaid-\_r_hc\_ .node polygon,#chatgpt-mermaid-\_r_hc\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_hc\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_hc\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_hc\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_hc\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_hc\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu trò chơiSinh ngẫu nhiên một quả bóngBóng rơi xuốngNgười chơi nhấn Space?Tạo chú chóTiếp tục cập nhật gameplayChó chạm bóng?Hủy quả bóngBóng chạm đất?Hiển thị Game Over trongConsoleTiếp tục trò chơiDọn dẹp đối tượng ra ngoàimàn hìnhTiếp tục cập nhật và sinh bóngCóKhôngCóKhôngCóKhông

Sơ đồ mô tả các nhánh xử lý chính của gameplay, không phải thứ tự chính xác của từng frame. Việc sinh bóng diễn ra theo bộ hẹn giờ, còn nhập liệu, chuyển động và phát hiện va chạm được kiểm tra trong quá trình trò chơi chạy.

## 3. Kiến thức cần vận dụng

### 3.1. Prefab và tham chiếu đối tượng

`Prefab` là mẫu GameObject có thể được sử dụng nhiều lần. Trong Play Fetch, các loại bóng và chó có thể được lưu thành Prefab để sinh ra trong lúc chạy.

Ví dụ, một GameObject quản lý trò chơi có thể chứa các tham chiếu sau:

```
Spawn Manager
├── Ball Prefabs
│   ├── Ball 1
│   ├── Ball 2
│   └── Ball 3
└── Spawn Settings

Player
└── Dog Prefab
```

Nếu trường `Dog Prefab` tham chiếu nhầm tới một quả bóng, nhấn `Space` sẽ sinh ra sai đối tượng.

Do đó, khi có hành vi bất thường, cần kiểm tra cả mã C# lẫn các giá trị đã gán trong Inspector.

### 3.2. Array và Random

Một `Array` có thể chứa nhiều Prefab cùng loại. Chương trình chọn một chỉ số ngẫu nhiên rồi sử dụng Prefab tương ứng.

Ví dụ, đối với mảng gồm ba phần tử:

```
int index = Random.Range(0, 3);
```

Khi dùng phiên bản số nguyên của `Random.Range`, giá trị trả về có thể là `0`, `1` hoặc `2`, vì giới hạn trên không được bao gồm.

Trong chương trình thực tế, nên dựa vào số phần tử của mảng thay vì cố định một con số.

### 3.3. Phát hiện va chạm

Đối tượng chỉ nên được coi là bắt trúng bóng khi hệ thống va chạm xác định được sự tiếp xúc hợp lệ.

Những thành phần cần kiểm tra gồm:

| Thành phần         | Vai trò                                            |
| ------------------ | -------------------------------------------------- |
| `Collider`         | Xác định vùng va chạm                              |
| `Rigidbody`        | Tham gia mô phỏng vật lý và hỗ trợ sự kiện va chạm |
| `OnCollisionEnter` | Xử lý sự kiện va chạm vật lý phù hợp               |
| `OnTriggerEnter`   | Xử lý sự kiện khi đối tượng đi vào vùng Trigger    |

Lựa chọn callback tùy thuộc cấu hình Collider và Rigidbody. Không nên chỉ thay đổi khoảng cách trong mã nếu nguyên nhân là Collider quá lớn.

### 3.4. Giới hạn màn hình

Các GameObject tồn tại ngoài vùng chơi có thể tiếp tục tiêu thụ tài nguyên dù người chơi không nhìn thấy.

Vì vậy, chương trình cần kiểm tra tọa độ:

- Bóng đi ra khỏi giới hạn dưới của màn hình thì bị hủy.
- Chó đi ra khỏi giới hạn bên trái thì bị hủy.

Trong dự án 3D, cần xác định đúng trục tọa độ mà gameplay sử dụng. Không nên mặc định chuyển động theo trục `Y` nếu scene sử dụng mặt phẳng `XZ`.

## 4. Nhiệm vụ thực hành

### 4.1. Chuẩn bị dự án

1. Mở dự án `Prototype 2` trong Unity.
2. Tải bộ Starter Files của Challenge 2 từ trang Unity Learn.
3. Import tài nguyên vào dự án.
4. Mở scene thử thách và quan sát `Hierarchy`, `Inspector` và `Console`.
5. Chạy Play Mode để xác định những hành vi chưa đúng.

Lưu ý: Starter Files có lỗi được thiết kế sẵn để người học tự sửa. Không cần xóa và viết lại toàn bộ hệ thống.

### 4.2. Sửa các lỗi bắt buộc

Nhiệm vụ 1 — Bóng xuất hiện sai vị trí

Hiện tượng: Chó xuất hiện ở phía trên màn hình thay vì bóng.

Kiểm tra mảng `Ball Prefabs` trong `Spawn Manager` và các Prefab được sử dụng để sinh đối tượng. Kết quả đúng là bóng xuất hiện từ phía trên vùng chơi.

Nhiệm vụ 2 — Nhấn Space sinh sai đối tượng

Hiện tượng: Người chơi tạo ra bóng xanh thay vì chó.

Kiểm tra tham chiếu `Dog Prefab` trên đối tượng `Player` và lệnh tạo GameObject. Khi nhấn `Space`, hệ thống phải sinh ra chó.

Nhiệm vụ 3 — Bóng biến mất dù chưa chạm chó

Hiện tượng: Bóng bị hủy khi mới đến gần chó.

Kiểm tra kích thước và vị trí `Collider` trên Dog Prefab. Bóng chỉ được hủy sau khi phát hiện tiếp xúc trực tiếp.

Nhiệm vụ 4 — Đối tượng không được dọn dẹp

Hiện tượng: Chó và bóng tiếp tục tồn tại sau khi rời khỏi màn hình.

Kiểm tra script `DestroyOutOfBounds`, các biến giới hạn, dấu so sánh và trục tọa độ được sử dụng.

Nhiệm vụ 5 — Chỉ một loại bóng xuất hiện

Hiện tượng: Mọi lần sinh đối tượng đều sử dụng cùng một loại bóng.

Kiểm tra phương thức `SpawnRandomBall()` và cách lựa chọn chỉ số của mảng. Ba loại bóng phải có khả năng được lựa chọn ngẫu nhiên.

### 4.3. Nhiệm vụ nâng cao

Bonus 1 — Sinh bóng với khoảng thời gian ngẫu nhiên

Thay vì sinh bóng theo chu kỳ cố định, thiết lập thời gian chờ ngẫu nhiên trong khoảng từ 3 đến 5 giây.

Cần phân biệt:

- `InvokeRepeating()`: sử dụng chu kỳ lặp được thiết lập khi gọi.
- `Invoke()`: có thể dùng để hẹn lần gọi tiếp theo với thời gian chờ mới.

Vì vậy, thay đổi một biến chu kỳ sau khi `InvokeRepeating()` đã được lên lịch không tự động thay đổi chu kỳ đã đăng ký.

Bonus 2 — Giới hạn việc nhấn Space liên tục

Ngăn người chơi tạo quá nhiều chó bằng cách nhấn `Space` liên tục.

Có thể xây dựng cơ chế `Cooldown`:

\#chatgpt-mermaid-\_r_k0\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_k0\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k0\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k0\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_k0\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_k0\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_k0\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_k0\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_k0\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_k0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_k0\_ p{margin:0;}#chatgpt-mermaid-\_r_k0\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_k0\_ .label text,#chatgpt-mermaid-\_r_k0\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .node rect,#chatgpt-mermaid-\_r_k0\_ .node circle,#chatgpt-mermaid-\_r_k0\_ .node ellipse,#chatgpt-mermaid-\_r_k0\_ .node polygon,#chatgpt-mermaid-\_r_k0\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .rough-node .label text,#chatgpt-mermaid-\_r_k0\_ .node .label text,#chatgpt-mermaid-\_r_k0\_ .image-shape .label,#chatgpt-mermaid-\_r_k0\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_k0\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .rough-node .label,#chatgpt-mermaid-\_r_k0\_ .node .label,#chatgpt-mermaid-\_r_k0\_ .image-shape .label,#chatgpt-mermaid-\_r_k0\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_k0\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_k0\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_k0\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k0\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k0\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k0\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_k0\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_k0\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k0\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_k0\_ .icon-shape,#chatgpt-mermaid-\_r_k0\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k0\_ .icon-shape p,#chatgpt-mermaid-\_r_k0\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_k0\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_k0\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k0\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_k0\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_k0\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_k0\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k0\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k0\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k0\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_k0\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_k0\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .node rect,#chatgpt-mermaid-\_r_k0\_ .node circle,#chatgpt-mermaid-\_r_k0\_ .node ellipse,#chatgpt-mermaid-\_r_k0\_ .node polygon,#chatgpt-mermaid-\_r_k0\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k0\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_k0\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_k0\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_k0\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k0\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Nhấn SpaceĐã hết Cooldown?Không tạo chóTạo chóBắt đầu Cooldown mớiChờ hết thời gianChưaRồi

Thời gian Cooldown là tham số thiết kế cần thử nghiệm để trò chơi không quá dễ hoặc quá khó.

## 5. Kiểm thử và Debug

Một thử thách lập trình không chỉ yêu cầu game chạy được. Mỗi lỗi cần có bằng chứng để xác định rằng nguyên nhân thực sự đã được khắc phục.

### 5.1. Quy trình Debug

\#chatgpt-mermaid-\_r_k9\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_k9\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k9\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k9\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_k9\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_k9\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_k9\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_k9\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_k9\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_k9\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k9\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k9\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_k9\_ p{margin:0;}#chatgpt-mermaid-\_r_k9\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_k9\_ .label text,#chatgpt-mermaid-\_r_k9\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ .node rect,#chatgpt-mermaid-\_r_k9\_ .node circle,#chatgpt-mermaid-\_r_k9\_ .node ellipse,#chatgpt-mermaid-\_r_k9\_ .node polygon,#chatgpt-mermaid-\_r_k9\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .rough-node .label text,#chatgpt-mermaid-\_r_k9\_ .node .label text,#chatgpt-mermaid-\_r_k9\_ .image-shape .label,#chatgpt-mermaid-\_r_k9\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_k9\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .rough-node .label,#chatgpt-mermaid-\_r_k9\_ .node .label,#chatgpt-mermaid-\_r_k9\_ .image-shape .label,#chatgpt-mermaid-\_r_k9\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_k9\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_k9\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k9\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k9\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_k9\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k9\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k9\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k9\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_k9\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_k9\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k9\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_k9\_ .icon-shape,#chatgpt-mermaid-\_r_k9\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k9\_ .icon-shape p,#chatgpt-mermaid-\_r_k9\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_k9\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_k9\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k9\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_k9\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_k9\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_k9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_k9\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_k9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_k9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k9\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_k9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k9\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k9\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k9\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_k9\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_k9\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .node rect,#chatgpt-mermaid-\_r_k9\_ .node circle,#chatgpt-mermaid-\_r_k9\_ .node ellipse,#chatgpt-mermaid-\_r_k9\_ .node polygon,#chatgpt-mermaid-\_r_k9\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k9\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_k9\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_k9\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_k9\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k9\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Tái hiện lỗiQuan sát Scene và GameKiểm tra ConsoleKiểm tra Script và InspectorĐưa ra giả thuyếtChỉ sửa một nguyên nhânChạy lại Play ModeĐúng kết quả?Ghi nhận và chuyển lỗi tiếptheoKhôngCó

Quy trình này giúp tránh tình trạng thay đổi nhiều thành phần cùng lúc rồi không biết thao tác nào đã giải quyết được lỗi.

### 5.2. Bảng kiểm thử

| Mã   | Tình huống kiểm thử                       | Kết quả kỳ vọng                                     |
| ---- | ----------------------------------------- | --------------------------------------------------- |
| TC01 | Chạy trò chơi trong một khoảng thời gian  | Bóng xuất hiện phía trên tại các vị trí X khác nhau |
| TC02 | Nhấn `Space`                              | Chó được tạo ra                                     |
| TC03 | Chó và bóng chưa tiếp xúc                 | Bóng chưa bị hủy                                    |
| TC04 | Chó bắt trúng bóng                        | Bóng bị hủy                                         |
| TC05 | Bóng chạm đất                             | Console hiển thị `Game Over`                        |
| TC06 | Bóng hoặc chó đi khỏi màn hình            | GameObject được loại bỏ                             |
| TC07 | Quan sát nhiều lần sinh bóng              | Có thể xuất hiện cả ba loại bóng                    |
| TC08 | Hoàn thành Bonus 1                        | Các khoảng sinh bóng không còn cố định              |
| TC09 | Hoàn thành Bonus 2 và nhấn Space liên tục | Tần suất tạo chó bị giới hạn                        |

Lưu ý: Do có yếu tố ngẫu nhiên, việc chưa quan sát được đủ ba loại bóng sau vài lần thử không nhất thiết chứng minh chương trình bị lỗi. Cần kiểm tra mã chọn chỉ số và chạy thử nhiều lần.

### 5.3. Mẫu ghi nhận lỗi

| Nội dung         | Ví dụ                                      |
| ---------------- | ------------------------------------------ |
| Hiện tượng       | Nhấn Space nhưng bóng xuất hiện            |
| Kết quả mong đợi | Chó xuất hiện                              |
| Vị trí nghi ngờ  | Tham chiếu Prefab trong Inspector          |
| Kiểm chứng       | Quan sát Prefab được gán và chạy Play Mode |
| Kết quả sau sửa  | Nhấn Space tạo đúng đối tượng              |

## 6. Sản phẩm cần nộp

Bài thực hành được xem là hoàn thành khi có dự án chạy được và minh chứng cho các hành vi chính.

Sản phẩm bao gồm dự án Unity hoặc scene chứa Challenge 2 đã sửa, ảnh hoặc video quay gameplay, bảng ghi nhận kiểm thử và phần mô tả ngắn ít nhất một lỗi đã tìm ra.

### Checklist hoàn thành

Tiến độ thực hành

0/10

Import được Starter Files và chạy scene

Bóng được sinh từ phía trên màn hình

Nhấn Space tạo đúng Dog Prefab

Bóng chỉ biến mất khi chó chạm trực tiếp

Có thông báo Game Over khi bóng chạm đất

Dọn dẹp các đối tượng ngoài màn hình

Sinh ngẫu nhiên cả ba loại bóng

Thử nghiệm khoảng sinh bóng 3–5 giây (Bonus)

Giới hạn nhấn Space liên tục (Bonus)

Lưu hình ảnh hoặc video và kết quả kiểm thử

## 7. Câu hỏi ôn tập

Bài kiểm tra kiến thức

5 câu · Mỗi câu 1 điểm

Câu 1. Tại sao trò chơi nên lưu ba loại bóng trong một Array?

A. Để mọi quả bóng có cùng vị trí

B. Để có thể lựa chọn Prefab ngẫu nhiên

C. Để tất cả bóng luôn được tạo cùng lúc

D. Để tự động phát hiện va chạm

Câu 2. Khi nhấn Space nhưng đối tượng sinh ra là bóng thay vì chó, nên kiểm tra gì trước?

A. Độ phân giải màn hình

B. Màu nền của Camera

C. Vị trí của Directional Light

D. Tham chiếu Dog Prefab trong Inspector

Câu 3. Điều kiện nào phù hợp nhất để hủy bóng khi chó bắt trúng?

A. Phát hiện va chạm trực tiếp hợp lệ giữa chó và bóng

B. Khoảng cách giữa chó và bóng nhỏ hơn bất kỳ giá trị tùy ý nào

C. Bóng đã tồn tại được một giây

D. Người chơi nhấn Space

Câu 4. Muốn mỗi lần chờ sinh bóng có thời lượng ngẫu nhiên mới, cách nào phù hợp?

A. Chỉ đổi tên GameObject

B. Tăng tốc độ khung hình

C. Dùng Invoke để tự lên lịch lần sinh tiếp theo với thời gian mới

D. Thay đổi màu Material

Câu 5. Vì sao cần xóa GameObject sau khi ra khỏi màn hình?

A. Để tăng độ sáng của scene

B. Để tránh tích lũy những đối tượng không còn cần thiết

C. Để vô hiệu hóa mọi Collider

D. Để làm tất cả Prefab biến mất trong Project

Chấm điểmLàm lại

## 8. Tổng kết

Thử thách Challenge 2 — Play Fetch củng cố các kiến thức quan trọng của lập trình gameplay trong Unity: quản lý Prefab, chọn đối tượng ngẫu nhiên, xử lý tương tác bàn phím, phát hiện va chạm và xóa đối tượng không còn sử dụng.

Điểm quan trọng nhất của thử thách không phải chỉ là khiến trò chơi chạy đúng mà là phát triển khả năng phân tích nguyên nhân, sửa lỗi có kiểm soát và xác minh kết quả bằng thử nghiệm thực tế.

Ghi chú phiên bản: Nội dung thực hành sử dụng Unity 6.3 làm môi trường học tập. Giao diện Editor, tài nguyên và một số thao tác có thể khác giữa các phiên bản. Đối chiếu tại [Unity Learn — Basic Gameplay](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com) khi cần.