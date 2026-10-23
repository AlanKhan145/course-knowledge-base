# Bài 06 — Lesson 1.3: High Speed Chase

Junior Programmer · Player Control · Tutorial · Unity 6.3

## 1. Tổng quan bài học

Trong quá trình phát triển trò chơi, điều khiển nhân vật không đơn thuần là làm cho một đối tượng di chuyển khi người chơi nhấn phím. Hệ thống điều khiển còn phải đảm bảo tốc độ ổn định, hướng di chuyển chính xác và phạm vi hoạt động hợp lý.

Ví dụ, trong một trò chơi đua xe 3D, người chơi cần điều khiển chiếc xe sang trái hoặc phải để tránh chướng ngại vật. Khi trò chơi chạy trên những máy tính có tốc độ xử lý khác nhau, chiếc xe vẫn cần di chuyển với tốc độ gần như tương đương.

Bài học High Speed Chase tập trung thực hành các nguyên lý cơ bản giúp xây dựng hệ thống di chuyển như vậy.

### Kết quả cần đạt

Sau khi hoàn thành bài học, người học có thể tạo một GameObject có khả năng:

- Di chuyển theo tín hiệu bàn phím.
- Điều chỉnh tốc độ thông qua Inspector.
- Giữ tốc độ di chuyển ít phụ thuộc vào FPS.
- Di chuyển trong phạm vi được giới hạn.
- Dừng khi người chơi thả phím điều khiển.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

1. Giải thích vai trò của `Transform`, `Input` và `Time.deltaTime` trong quá trình điều khiển GameObject.
2. Viết script C# để di chuyển đối tượng theo một hoặc hai trục.
3. Phân biệt tọa độ thế giới (World Space) và tọa độ cục bộ (Local Space).
4. Sử dụng `Mathf.Clamp()` để giới hạn vị trí.
5. Kiểm tra và sửa các lỗi liên quan đến FPS, cấu hình Input và va chạm.

## 3. Kiến thức trọng tâm

### 3.1. GameObject và Transform

Trong Unity, mọi đối tượng được đặt trong Scene đều là một `GameObject`.

Mỗi GameObject có một `Transform` xác định vị trí, góc xoay và tỷ lệ kích thước.

| Thuộc tính | Chức năng            | Ví dụ        |
| ---------- | -------------------- | ------------ |
| `Position` | Vị trí của đối tượng | `(0, 0, 0)`  |
| `Rotation` | Hướng xoay           | `(0, 90, 0)` |
| `Scale`    | Kích thước tương đối | `(1, 1, 1)`  |

Trong không gian 3D, Unity sử dụng ba trục tọa độ:

Minh họa ba trục tọa độ trong không gian Unity 3D.

Đối với một trò chơi đua xe trên mặt đường nằm ngang:

- Trục X thường dùng để điều khiển sang trái và phải.
- Trục Y biểu thị độ cao.
- Trục Z thường dùng để di chuyển tiến và lùi.

Cách lựa chọn trục phụ thuộc vào hướng thiết kế Scene.

### 3.2. Đọc tín hiệu điều khiển từ bàn phím

Unity cung cấp các API để đọc thao tác của người chơi.

Với Input Manager cũ, có thể sử dụng:

```
float horizontal = Input.GetAxisRaw("Horizontal");
```

Giá trị của `horizontal` thường là:

| Phím nhấn           | Giá trị |
| ------------------- | ------- |
| A hoặc mũi tên trái | -1      |
| Không nhấn phím     | 0       |
| D hoặc mũi tên phải | 1       |

`Input.GetAxisRaw()` trả về tín hiệu trục chưa được làm mượt, thích hợp cho những ví dụ điều khiển trực tiếp.

Để đọc di chuyển tiến và lùi:

```
float vertical = Input.GetAxisRaw("Vertical");
```

Với cấu hình Input Manager mặc định, trục này thường nhận đầu vào từ W/S hoặc các phím mũi tên lên/xuống.

Lưu ý về Unity 6.3: `Input.GetAxisRaw()` thuộc hệ thống Input Manager cũ. Nếu dự án chỉ bật Input System mới, cần triển khai điều khiển bằng Input Actions hoặc đổi cấu hình `Active Input Handling` cho phù hợp.

### 3.3. Hiểu Time.deltaTime

Một lỗi phổ biến khi lập trình chuyển động là cập nhật vị trí theo từng frame mà không tính đến thời gian.

Ví dụ:

```
transform.Translate(Vector3.right * 4f);
```

Đoạn lệnh trên làm đối tượng di chuyển 4 đơn vị mỗi lần được thực thi. Nếu đặt trong `Update()`, đối tượng có thể di chuyển nhanh hơn nhiều trên máy tính có FPS cao.

Để kiểm soát tốc độ theo giây, sử dụng:

```
transform.Translate(
    Vector3.right * 4f * Time.deltaTime
);
```

`Time.deltaTime` thể hiện khoảng thời gian giữa các frame, tính bằng giây.

Công thức tính quãng đường là:

\\[ \text{Quãng đường} = \text{Tốc độ} \times \text{Thời gian} \\]

Ví dụ với tốc độ 4 đơn vị/giây:

| FPS | Thời gian mỗi frame (xấp xỉ) | Quãng đường mỗi frame |
| --- | ---------------------------- | --------------------- |
| 30  | 0,0333 giây                  | 0,1333 đơn vị         |
| 60  | 0,0167 giây                  | 0,0667 đơn vị         |
| 120 | 0,0083 giây                  | 0,0333 đơn vị         |

Sau khoảng một giây, đối tượng sẽ di chuyển gần 4 đơn vị trong cả ba trường hợp, nếu đầu vào và các điều kiện khác tương đương.

Đây là nguyên lý frame-rate independent movement — di chuyển ít phụ thuộc vào tốc độ khung hình.

### 3.4. World Space và Local Space

Khi sử dụng `Transform.Translate()`, cần xác định hệ tọa độ áp dụng.

World Space: hướng di chuyển dựa trên hệ trục toàn cục của Scene.

```
transform.Translate(
    Vector3.right * speed * Time.deltaTime,
    Space.World
);
```

Local Space: hướng di chuyển phụ thuộc vào trục cục bộ của GameObject, tức là thay đổi theo hướng xoay của đối tượng.

```
transform.Translate(
    Vector3.forward * speed * Time.deltaTime,
    Space.Self
);
```

Ví dụ, nếu chiếc xe quay 90 độ, di chuyển theo trục Z cục bộ sẽ khiến xe tiếp tục tiến theo hướng mũi xe, trong khi di chuyển theo trục Z thế giới không nhất thiết như vậy.

### 3.5. Giới hạn phạm vi bằng Mathf.Clamp()

`Mathf.Clamp()` giúp giữ một giá trị trong phạm vi xác định.

Cú pháp:

```
Mathf.Clamp(value, min, max);
```

Ví dụ:

```
float x = Mathf.Clamp(
    transform.position.x,
    -8f,
    8f
);
```

Khi sử dụng đoạn mã này để gán lại vị trí X, đối tượng sẽ không thể đi vượt ra ngoài giới hạn từ -8 đến 8 trên trục X.

Hàm này rất hữu ích khi người chơi chỉ được di chuyển trong một khu vực cụ thể, chẳng hạn một đoạn đường đua hoặc một đấu trường.

## 4. Sơ đồ hoạt động của hệ thống điều khiển

\#chatgpt-mermaid-\_r_qn\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_qn\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_qn\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_qn\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_qn\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_qn\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_qn\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_qn\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_qn\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_qn\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_qn\_ p{margin:0;}#chatgpt-mermaid-\_r_qn\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_qn\_ .label text,#chatgpt-mermaid-\_r_qn\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .node rect,#chatgpt-mermaid-\_r_qn\_ .node circle,#chatgpt-mermaid-\_r_qn\_ .node ellipse,#chatgpt-mermaid-\_r_qn\_ .node polygon,#chatgpt-mermaid-\_r_qn\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .rough-node .label text,#chatgpt-mermaid-\_r_qn\_ .node .label text,#chatgpt-mermaid-\_r_qn\_ .image-shape .label,#chatgpt-mermaid-\_r_qn\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_qn\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .rough-node .label,#chatgpt-mermaid-\_r_qn\_ .node .label,#chatgpt-mermaid-\_r_qn\_ .image-shape .label,#chatgpt-mermaid-\_r_qn\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_qn\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_qn\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_qn\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_qn\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qn\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qn\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_qn\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_qn\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qn\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_qn\_ .icon-shape,#chatgpt-mermaid-\_r_qn\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_qn\_ .icon-shape p,#chatgpt-mermaid-\_r_qn\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_qn\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_qn\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qn\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_qn\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_qn\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_qn\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qn\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_qn\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_qn\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_qn\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_qn\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .node rect,#chatgpt-mermaid-\_r_qn\_ .node circle,#chatgpt-mermaid-\_r_qn\_ .node ellipse,#chatgpt-mermaid-\_r_qn\_ .node polygon,#chatgpt-mermaid-\_r_qn\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_qn\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_qn\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_qn\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_qn\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qn\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn phímInput ManagerĐọc Horizontal / VerticalTạo Vector3 hướng di chuyểnTính quãng đường bằng speed× deltaTimeTính vị trí tiếp theoGiới hạn bằng Mathf.ClampCập nhật TransformUnity hiển thị vị trí mới

Mỗi frame, Unity đọc tín hiệu điều khiển, xác định hướng di chuyển và tính toán vị trí mới. Nếu có giới hạn phạm vi, vị trí được điều chỉnh trước khi áp dụng lên GameObject.

## 5. Thực hành: Xây dựng hệ thống điều khiển đơn giản

### 5.1. Chuẩn bị Scene

Mở Unity Editor và tạo một Scene thực hành.

[Creating Our Multiplayer Game using Unity | Creating a Multiplayer Game Server - Part 5 - DEV Community](https://images.openai.com/static-rsc-4/EP8m85cocjewEtszHd7RXenLjH79nCNCxZGCgoWGi2O8TSMu_BUS3HJ33mxxQhEtPy_YAX3nqb5gvUBeB6Xt9bgjunnEHtPzYnOIsOlUNagVNufO4zhPiCG_uPOQSf7zMoSoydwll9Qpbrp83Lf9SNG9yv75Iptd-j9b-GyN1Cg?purpose=inline)

Thực hiện các bước:

1. Tạo một `3D Object > Plane` để làm mặt đất.
2. Tạo một `3D Object > Cube` đại diện cho người chơi.
3. Đổi tên Cube thành `Player`.
4. Đặt Player ở vị trí `(0, 0.5, 0)`.
5. Đặt Camera sao cho có thể quan sát Player và khu vực di chuyển.

### 5.2. Tạo script điều khiển một trục

Trong Project window, tạo C# Script có tên `SimpleMover`.

Mở script và nhập:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");

        Vector3 direction = new Vector3(
            horizontal,
            0f,
            0f
        );

        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}
```

Gắn script vào GameObject `Player`.

Trong Inspector, chỉnh `Speed` thành `4`.

Nhấn Play và thử điều khiển Player bằng phím A và D.

Kết quả mong đợi là Player di chuyển theo trục X và dừng lại khi người chơi thả phím.

### 5.3. Giải thích mã nguồn

| Thành phần           | Ý nghĩa                                          |
| -------------------- | ------------------------------------------------ |
| `MonoBehaviour`      | Lớp nền cho script gắn lên GameObject            |
| `[SerializeField]`   | Cho phép chỉnh field private trong Inspector     |
| `speed`              | Tốc độ di chuyển                                 |
| `Update()`           | Hàm được gọi mỗi frame khi script đang hoạt động |
| `Input.GetAxisRaw()` | Đọc giá trị điều khiển                           |
| `Vector3`            | Biểu diễn hướng di chuyển 3D                     |
| `Time.deltaTime`     | Khoảng thời gian giữa các frame                  |
| `Space.World`        | Sử dụng hệ tọa độ thế giới                       |

Điều quan trọng là `speed` được nhân với `Time.deltaTime`, thay vì cộng một giá trị cố định vào vị trí trong mỗi frame.

### 5.4. Mở rộng điều khiển hai chiều

Sau khi điều khiển một trục thành công, thay nội dung script bằng phiên bản dưới đây:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    [SerializeField] private float horizontalLimit = 8f;
    [SerializeField] private float depthLimit = 5f;

    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 direction = new Vector3(
            horizontal,
            0f,
            vertical
        ).normalized;

        Vector3 nextPosition =
            transform.position +
            direction * speed * Time.deltaTime;

        nextPosition.x = Mathf.Clamp(
            nextPosition.x,
            -horizontalLimit,
            horizontalLimit
        );

        nextPosition.z = Mathf.Clamp(
            nextPosition.z,
            -depthLimit,
            depthLimit
        );

        transform.position = nextPosition;
    }
}
```

Phiên bản mới có ba cải tiến quan trọng:

Thứ nhất — Điều khiển trên hai trục. Người chơi có thể di chuyển sang trái, phải, tiến và lùi.

Thứ hai — Chuẩn hóa hướng di chuyển. Sử dụng `.normalized` giúp tránh việc di chuyển chéo nhanh hơn di chuyển theo một trục đơn lẻ khi đầu vào đồng thời có hai thành phần bằng 1.

Thứ ba — Giới hạn khu vực. Hai thông số `horizontalLimit` và `depthLimit` xác định phạm vi di chuyển quanh gốc tọa độ.

### 5.5. Kiểm thử trong Play Mode

Chạy Scene và lần lượt kiểm tra các tình huống sau:

| Thử nghiệm               | Kết quả mong đợi                   |
| ------------------------ | ---------------------------------- |
| Nhấn A                   | Player di chuyển sang trái         |
| Nhấn D                   | Player di chuyển sang phải         |
| Nhấn W                   | Player di chuyển theo trục Z dương |
| Nhấn S                   | Player di chuyển theo trục Z âm    |
| Nhấn W và D              | Player di chuyển chéo              |
| Thả toàn bộ phím         | Player dừng di chuyển              |
| Đi đến giới hạn X hoặc Z | Player không đi ra ngoài phạm vi   |

Nếu kết quả khác dự đoán, hãy kiểm tra Console, Inspector và các giá trị đầu vào của script.

## 6. Kiểm tra FPS và va chạm

### 6.1. Kiểm tra tốc độ theo FPS

Thực hiện hai lần chạy thử trong những điều kiện FPS khác nhau.

Có thể sử dụng cửa sổ Stats trong Game view để quan sát FPS và các thiết lập giới hạn frame phù hợp với dự án.

Để có phép thử có ý nghĩa, cần giữ nguyên tốc độ, thời gian di chuyển và hướng điều khiển.

Ghi lại kết quả theo bảng:

| Thông số           | Lần thử 1 | Lần thử 2 |
| ------------------ | --------- | --------- |
| FPS quan sát       | ...       | ...       |
| Speed              | 4         | 4         |
| Thời gian giữ phím | ...       | ...       |
| Quãng đường        | ...       | ...       |
| Nhận xét           | ...       | ...       |

Do FPS có thể dao động, kết quả thực tế không nhất thiết bằng nhau tuyệt đối.

### 6.2. Phân biệt Transform và Rigidbody

Unity hỗ trợ nhiều cách di chuyển đối tượng.

| Tiêu chí                | Transform                                       | Rigidbody                                              |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Cách điều khiển         | Cập nhật trực tiếp vị trí                       | Điều khiển theo hệ thống vật lý                        |
| Trọng lực               | Không tự áp dụng                                | Có thể sử dụng                                         |
| Phản ứng va chạm vật lý | Không tự đảm bảo                                | Được xử lý thông qua hệ thống vật lý khi cấu hình đúng |
| Ứng dụng                | Chuyển động đơn giản, mô phỏng không cần vật lý | Xe, vật thể chịu lực, nhân vật tương tác vật lý        |

Khi cập nhật `Transform` trực tiếp, đối tượng có thể đi xuyên qua chướng ngại vật nếu không có cơ chế kiểm tra và xử lý va chạm phù hợp.

Nếu một GameObject dùng Rigidbody để mô phỏng vật lý, không nên đồng thời điều khiển vị trí bằng Transform trong mỗi frame mà không có thiết kế rõ ràng. Điều đó có thể gây ra chuyển động giật hoặc va chạm không ổn định.

## 7. Lỗi thường gặp và cách khắc phục

| Hiện tượng                  | Nguyên nhân có thể                    | Cách kiểm tra                         |
| --------------------------- | ------------------------------------- | ------------------------------------- |
| Player không di chuyển      | Script chưa gắn hoặc Component bị tắt | Kiểm tra Inspector                    |
| Nhấn phím không có phản hồi | Cấu hình Input không phù hợp          | Kiểm tra Active Input Handling        |
| Di chuyển nhanh khi FPS cao | Quên `Time.deltaTime`                 | Kiểm tra phép tính quãng đường        |
| Hướng di chuyển không đúng  | Nhầm World Space và Local Space       | Kiểm tra trục tọa độ và Rotation      |
| Player vượt giới hạn        | Chưa áp dụng Clamp đúng vị trí        | Kiểm tra giá trị X/Z                  |
| Player xuyên vật cản        | Không có xử lý va chạm phù hợp        | Kiểm tra Collider và cơ chế di chuyển |
| Di chuyển chéo nhanh hơn    | Vector hướng chưa được chuẩn hóa      | Kiểm tra `.normalized`                |

### Quy trình debug

\#chatgpt-mermaid-\_r_s7\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_s7\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_s7\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_s7\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_s7\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_s7\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_s7\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_s7\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_s7\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_s7\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_s7\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_s7\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_s7\_ p{margin:0;}#chatgpt-mermaid-\_r_s7\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_s7\_ .label text,#chatgpt-mermaid-\_r_s7\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ .node rect,#chatgpt-mermaid-\_r_s7\_ .node circle,#chatgpt-mermaid-\_r_s7\_ .node ellipse,#chatgpt-mermaid-\_r_s7\_ .node polygon,#chatgpt-mermaid-\_r_s7\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .rough-node .label text,#chatgpt-mermaid-\_r_s7\_ .node .label text,#chatgpt-mermaid-\_r_s7\_ .image-shape .label,#chatgpt-mermaid-\_r_s7\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_s7\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .rough-node .label,#chatgpt-mermaid-\_r_s7\_ .node .label,#chatgpt-mermaid-\_r_s7\_ .image-shape .label,#chatgpt-mermaid-\_r_s7\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_s7\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_s7\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_s7\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_s7\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_s7\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_s7\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_s7\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_s7\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_s7\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_s7\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_s7\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_s7\_ .icon-shape,#chatgpt-mermaid-\_r_s7\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_s7\_ .icon-shape p,#chatgpt-mermaid-\_r_s7\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_s7\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_s7\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_s7\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_s7\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_s7\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_s7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_s7\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_s7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_s7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_s7\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_s7\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_s7\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_s7\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_s7\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_s7\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_s7\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .node rect,#chatgpt-mermaid-\_r_s7\_ .node circle,#chatgpt-mermaid-\_r_s7\_ .node ellipse,#chatgpt-mermaid-\_r_s7\_ .node polygon,#chatgpt-mermaid-\_r_s7\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_s7\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_s7\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_s7\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_s7\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_s7\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiKiểm tra ConsoleKiểm tra GameObject vàComponentĐặt giả thuyết nguyên nhânThay đổi một yếu tốChạy thử lạiĐã khắc phục?Ghi lại kết quảChưaRồi

Khi debug, chỉ nên thay đổi một yếu tố tại một thời điểm để xác định nguyên nhân chính xác hơn.

## 8. Bài tập thực hành

### Bài tập 1 — Điều chỉnh tốc độ

Yêu cầu: Thay đổi giá trị `speed` trong Inspector và quan sát kết quả.

Thử các giá trị 2, 4 và 8 đơn vị/giây. Dự đoán tốc độ trước khi nhấn Play và giải thích vì sao tốc độ thay đổi mà không cần sửa script.

### Bài tập 2 — Giới hạn phạm vi

Yêu cầu: Tạo một khu vực điều khiển với giới hạn X từ -6 đến 6 và Z từ -4 đến 4.

Chỉnh các thông số trong Inspector và kiểm tra Player không vượt ra ngoài phạm vi.

### Bài tập 3 — Kiểm tra tốc độ theo frame

Yêu cầu: So sánh chuyển động khi có và không có `Time.deltaTime`.

Thực hiện trong hai lần chạy thử và ghi lại sự khác biệt về quãng đường khi FPS thay đổi.

### Bài tập 4 — Tránh chướng ngại vật

Tạo một đường đua nhỏ gồm các Cube làm chướng ngại vật.

Điều khiển Player đi qua những khoảng trống mà không chạm vào vật cản. Ở mức cơ bản, có thể quan sát bằng mắt; nếu muốn kiểm tra va chạm một cách chính xác, cần bổ sung hệ thống Collider và cơ chế xử lý thích hợp.

## 9. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức — 5 câu

0/5 đã trả lời

Câu 1. Vì sao cần sử dụng Time.deltaTime trong phép tính di chuyển đặt trong Update()?

A. Để tăng FPS của trò chơi

B. Để đảm bảo GameObject luôn chịu trọng lực

C. Để tính quãng đường theo thời gian thay vì một lượng cố định mỗi frame

D. Để tự phát hiện va chạm

Câu 2. Khi người chơi nhấn phím A với Input Manager mặc định, Input.GetAxisRaw("Horizontal") thường trả về giá trị nào?

A. -1

B. 0

C. 1

D. 4

Câu 3. Một đối tượng có speed = 4 đơn vị/giây. Trong điều kiện di chuyển liên tục với tốc độ không đổi, quãng đường sau 2 giây xấp xỉ bao nhiêu?

A. 2 đơn vị

B. 4 đơn vị

C. 6 đơn vị

D. 8 đơn vị

Câu 4. Mathf.Clamp(position.x, -8f, 8f) được sử dụng nhằm mục đích gì?

A. Tự xoay nhân vật về phía trước

B. Giới hạn giá trị tọa độ X từ -8 đến 8

C. Tăng tốc độ nhân vật

D. Kích hoạt Input System

Câu 5. Vì sao nên sử dụng .normalized khi tạo vector di chuyển từ hai trục có giá trị -1, 0 hoặc 1?

A. Để hạn chế di chuyển chéo nhanh hơn di chuyển theo một trục

B. Để tự thêm Collider

C. Để thay thế Time.deltaTime

D. Để chuyển Input Manager thành Input System mới

Chấm điểmLàm lại

## 10. Checklist hoàn thành

Tiến độ thực hành

0/8

Giải thích được chức năng của Transform trong hệ thống di chuyển.

Sử dụng được Input.GetAxisRaw() với cấu hình Input phù hợp.

Giải thích được tại sao phải sử dụng Time.deltaTime.

Điều khiển được Player theo hai trục X và Z.

Sử dụng Mathf.Clamp() để giới hạn khu vực.

Phân biệt được World Space và Local Space.

Kiểm tra được ít nhất một lỗi trong Console hoặc Inspector.

Hoàn thành một thử nghiệm và ghi lại kết quả bằng ảnh hoặc video.

## 11. Tổng kết

Ba nguyên lý quan trọng nhất của bài học là:

- Input: đọc lệnh điều khiển từ người chơi.
- Movement: tính toán hướng và quãng đường bằng vector, tốc độ và `Time.deltaTime`.
- Constraints: giới hạn phạm vi di chuyển để giữ đối tượng trong khu vực mong muốn.

Khi kết hợp các thành phần này, người học có thể xây dựng một hệ thống điều khiển đơn giản, dễ kiểm thử và có khả năng mở rộng thành cơ chế điều khiển xe, nhân vật hoặc các đối tượng khác trong trò chơi 3D.

Đối chiếu chương trình: [Unity Learn — Junior Programmer / Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com). Bài viết là hướng dẫn thực hành tự biên soạn theo chủ đề, không phải bản dịch chính thức hay bản ghi đầy đủ bài giảng của Unity.