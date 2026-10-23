# Bài 08 — Challenge 1: Plane Programming

Junior Programmer · Player Control · Tutorial / Challenge · Unity 6.3

Chủ đề: Lập trình C# và điều khiển hành vi GameObject trong Unity.

Tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Challenge 1 — Plane Programming là bài thực hành vận dụng kiến thức lập trình C# để xây dựng và kiểm tra hành vi của đối tượng máy bay trong môi trường Unity 3D.

Một đối tượng xuất hiện trong Scene chưa đủ để trở thành nhân vật có thể điều khiển. Chúng ta cần viết script để quy định cách đối tượng phản ứng với thao tác của người chơi.

Ví dụ, khi người chơi nhấn phím mũi tên lên, máy bay có thể nghiêng mũi lên. Khi nhấn phím mũi tên xuống, máy bay nghiêng mũi xuống.

[Unity Play | Flight Sim (Beta) game](https://images.openai.com/static-rsc-4/RCMYC8hOOlGLIrWdYdp4L9TIe-p96MkSQ77Aur35QMCtRNgwd-us-X2_YKIMEcyt5flaX726R3x0Z8atGl9m_2Yn1mHS2-TJNsgxvGEV9e8ObfxJDlHSvb_xmeT5RQmx8Jgt1HUc1kWZ8Etmb6cScGrjCvZkkB-gunU4u1vEQ8E?purpose=inline)

[play.unity.com](https://play.unity.com/en/games/76dc2bde-8976-48ee-a4c4-38f6979feb22/flight-sim-beta?utm_source=chatgpt.com)

Minh họa bối cảnh lập trình điều khiển máy bay trong Unity 3D.

Bài thực hành tập trung vào ba vấn đề chính: viết hành vi bằng C#, gắn script vào GameObject và kiểm thử kết quả trong Play Mode.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài, người học có thể:

- Giải thích vai trò của `MonoBehaviour`, `Start()` và `Update()` trong Unity.
- Tạo script C# và kết nối script với một GameObject.
- Sử dụng biến, điều kiện và phương thức để điều khiển hành vi.
- Thay đổi tham số bằng Inspector và quan sát kết quả.
- Phát hiện, phân tích và sửa ít nhất một lỗi lập trình.
- Hoàn thành một Scene nhỏ có tương tác và phản hồi quan sát được.

## 3. Kiến thức cần nắm vững

### 3.1. GameObject, Component và MonoBehaviour

Trong Unity, hầu hết đối tượng trong Scene được biểu diễn bằng `GameObject`.

Một GameObject có thể chứa nhiều Component, chẳng hạn như:

| Thành phần      | Chức năng                                         |
| --------------- | ------------------------------------------------- |
| `Transform`     | Lưu vị trí, góc xoay và tỷ lệ                     |
| `MeshRenderer`  | Hiển thị hình dạng 3D                             |
| `Collider`      | Hỗ trợ phát hiện va chạm                          |
| `Rigidbody`     | Mô phỏng chuyển động vật lý                       |
| `MonoBehaviour` | Lớp nền thường dùng để xây dựng Component bằng C# |

Ví dụ, để lập trình một máy bay, ta có thể tổ chức đối tượng như sau:

Plane (GameObject)

Transform — Vị trí, hướng và kích thước

Mesh Filter / Mesh Renderer — Hình dạng 3D

PlaneController — Script điều khiển

`PlaneController` là một Component do lập trình viên tự tạo. Nó có thể xử lý phím điều khiển và thay đổi góc xoay của máy bay.

### 3.2. Vòng đời của script

Hai phương thức thường được sử dụng là:

`Start()`

Được gọi trước lần `Update()` đầu tiên khi Component đang hoạt động. Thích hợp để khởi tạo giá trị hoặc kiểm tra trạng thái ban đầu.

`Update()`

Được gọi mỗi frame khi Component hoạt động. Thường dùng để đọc input và cập nhật những hành vi cần kiểm tra liên tục.

```
using UnityEngine;

public class PlaneController : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Máy bay đã sẵn sàng!");
    }

    void Update()
    {
        // Xử lý điều khiển mỗi frame
    }
}
```

Không nên thực hiện các công việc không cần thiết hoặc quá nặng trong `Update()` vì phương thức này được gọi liên tục.

### 3.3. Biến và điều kiện

Biến cho phép lưu các thông số điều khiển, ví dụ:

```
[SerializeField] private float rotationSpeed = 30f;
```

`[SerializeField]` giúp trường `private` được hiển thị trong Inspector để có thể điều chỉnh mà không cần sửa mã nguồn.

Điều kiện `if` cho phép lựa chọn hành vi dựa trên dữ liệu:

```
if (rotationSpeed > 0)
{
    Debug.Log("Tốc độ xoay hợp lệ");
}
```

Phương thức giúp chia chương trình thành những chức năng nhỏ, dễ kiểm thử và tái sử dụng.

## 4. Bài thực hành — Điều khiển máy bay

### 4.1. Chuẩn bị Scene

1. Mở Unity Editor và tạo một Scene 3D.
2. Tạo GameObject tên `Plane`, có thể sử dụng mô hình máy bay hoặc một Cube làm đối tượng đại diện.
3. Đặt đối tượng tại vị trí dễ quan sát trong Scene.
4. Điều chỉnh Main Camera để máy bay hiển thị rõ trong Game View.
5. Tạo thư mục `Scripts` trong Assets để chứa mã nguồn.

### 4.2. Tạo script điều khiển

Tạo file `PlaneController.cs` và gắn script vào GameObject `Plane`.

Ví dụ đơn giản để thực hành điều khiển góc xoay:

```
using UnityEngine;

public class PlaneController : MonoBehaviour
{
    [SerializeField]
    private float rotationSpeed = 30f;

    void Update()
    {
        float direction = 0f;

        if (Input.GetKey(KeyCode.UpArrow))
        {
            direction = -1f;
        }
        else if (Input.GetKey(KeyCode.DownArrow))
        {
            direction = 1f;
        }

        transform.Rotate(
            Vector3.right,
            direction * rotationSpeed * Time.deltaTime
        );
    }
}
```

Đây là ví dụ luyện tập độc lập để minh họa nguyên tắc điều khiển góc xoay, không phải lời giải chính thức của Challenge.

Giải thích:

| Thành phần           | Ý nghĩa                                                            |
| -------------------- | ------------------------------------------------------------------ |
| `rotationSpeed`      | Tốc độ xoay, đơn vị độ/giây                                        |
| `Input.GetKey()`     | Kiểm tra phím đang được giữ                                        |
| `KeyCode.UpArrow`    | Phím mũi tên lên                                                   |
| `KeyCode.DownArrow`  | Phím mũi tên xuống                                                 |
| `transform.Rotate()` | Xoay đối tượng                                                     |
| `Time.deltaTime`     | Khoảng thời gian giữa các frame, giúp tốc độ xoay ít phụ thuộc FPS |

Mã ví dụ sử dụng Input API cũ. Với Unity 6.3, nếu dự án chỉ bật New Input System, cần sử dụng API tương ứng hoặc cấu hình Active Input Handling phù hợp.

### 4.3. Luồng xử lý điều khiển

\#chatgpt-mermaid-\_r_ka\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ka\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ka\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ka\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ka\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ka\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ka\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ka\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ka\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ka\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ka\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ka\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ka\_ p{margin:0;}#chatgpt-mermaid-\_r_ka\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ka\_ .label text,#chatgpt-mermaid-\_r_ka\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ .node rect,#chatgpt-mermaid-\_r_ka\_ .node circle,#chatgpt-mermaid-\_r_ka\_ .node ellipse,#chatgpt-mermaid-\_r_ka\_ .node polygon,#chatgpt-mermaid-\_r_ka\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .rough-node .label text,#chatgpt-mermaid-\_r_ka\_ .node .label text,#chatgpt-mermaid-\_r_ka\_ .image-shape .label,#chatgpt-mermaid-\_r_ka\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ka\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .rough-node .label,#chatgpt-mermaid-\_r_ka\_ .node .label,#chatgpt-mermaid-\_r_ka\_ .image-shape .label,#chatgpt-mermaid-\_r_ka\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ka\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ka\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ka\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ka\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ka\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ka\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ka\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ka\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ka\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ka\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ka\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ka\_ .icon-shape,#chatgpt-mermaid-\_r_ka\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ka\_ .icon-shape p,#chatgpt-mermaid-\_r_ka\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ka\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ka\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ka\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ka\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ka\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ka\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ka\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ka\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ka\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ka\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ka\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ka\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ka\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ka\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ka\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ka\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .node rect,#chatgpt-mermaid-\_r_ka\_ .node circle,#chatgpt-mermaid-\_r_ka\_ .node ellipse,#chatgpt-mermaid-\_r_ka\_ .node polygon,#chatgpt-mermaid-\_r_ka\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ka\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ka\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ka\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ka\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ka\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu Play ModeUpdate được gọi mỗi framePhím điều khiển?Xoay theo chiều âm trục XXoay theo chiều dương trục XKhông xoayCập nhật TransformFrame tiếp theoMũi tên lênMũi tên xuốngKhông nhấn

Sơ đồ thể hiện việc input được kiểm tra liên tục trong `Update()`. Tùy hướng ban đầu của mô hình và hệ trục của GameObject, chiều xoay có thể cần đảo dấu để phù hợp.

### 4.4. Kiểm tra kết quả

Nhấn Play và thực hiện các thao tác sau:

| Thao tác                         | Kết quả mong đợi                                                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| Không nhấn phím                  | Máy bay giữ nguyên góc xoay                                                                    |
| Giữ mũi tên lên                  | Máy bay xoay theo một chiều quanh trục X                                                       |
| Giữ mũi tên xuống                | Máy bay xoay theo chiều ngược lại                                                              |
| Đổi `rotationSpeed` từ 30 lên 60 | Máy bay xoay nhanh gấp đôi trong cùng khoảng thời gian giữ phím, nếu điều kiện thử tương đương |

Lưu ý: Thử nghiệm này chỉ điều khiển góc xoay, chưa mô phỏng lực nâng, khí động học hay chuyển động bay hoàn chỉnh.

## 5. Luyện thêm về phương thức và điều kiện

Một kỹ năng quan trọng khác là xây dựng logic độc lập với `Update()`.

Ví dụ, sử dụng `SimpleCounter` để đếm số lần người chơi thực hiện hành động:

```
using UnityEngine;

public class SimpleCounter : MonoBehaviour
{
    [SerializeField] private int target = 3;
    private int count = 0;

    public void CountOne()
    {
        count++;

        if (count >= target)
        {
            Debug.Log("Đã hoàn thành mục tiêu!");
        }
    }
}
```

Trong ví dụ này:

- `target` là số lần thao tác cần đạt.
- `count` lưu số lần đã thực hiện.
- `CountOne()` tăng bộ đếm.
- Điều kiện `count >= target` kiểm tra mục tiêu.

Chú ý: Hàm `CountOne()` không tự chạy. Cần có một phương thức hoặc sự kiện gọi nó.

Để thử trực tiếp bằng bàn phím, có thể thêm vào lớp:

```
void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        CountOne();
    }
}
```

Khi nhấn Space đủ ba lần, Console sẽ hiển thị thông báo hoàn thành. Với điều kiện `>=`, những lần nhấn tiếp theo vẫn tiếp tục hiển thị thông báo.

Nếu muốn chỉ hiển thị tại thời điểm vừa đạt mục tiêu, có thể thay điều kiện bằng `count == target`.

Bài tập này giúp phân biệt giữa khai báo phương thức và gọi phương thức, đồng thời luyện cách xác minh điều kiện đúng/sai.

## 6. Debug và kiểm thử

Trong quá trình viết code Unity, chương trình có thể biên dịch thành công nhưng hành vi thực tế không đúng như mong muốn.

### 6.1. Những lỗi thường gặp

| Hiện tượng               | Nguyên nhân có thể                                                         | Cách kiểm tra                        |
| ------------------------ | -------------------------------------------------------------------------- | ------------------------------------ |
| Script không chạy        | Chưa gắn Component hoặc đang bị tắt                                        | Kiểm tra Inspector                   |
| Không điều khiển được    | Game View chưa nhận phím hoặc Input API không tương thích                  | Kiểm tra Game View và Input Handling |
| Không tìm thấy Component | Chưa gán tham chiếu hoặc `GetComponent` không tìm thấy Component mong muốn | Kiểm tra GameObject                  |
| `NullReferenceException` | Đang sử dụng tham chiếu `null`                                             | Đọc lỗi và vị trí trong Console      |
| Báo lỗi class/script     | Tên lớp hoặc cấu trúc script không hợp lệ                                  | Kiểm tra tên file, class và mã C#    |
| Xoay sai hướng           | Hướng trục mô hình hoặc dấu tốc độ xoay chưa phù hợp                       | Quan sát Transform và thử điều chỉnh |

### 6.2. Quy trình debug

\#chatgpt-mermaid-\_r_l1\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_l1\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l1\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l1\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_l1\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_l1\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_l1\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_l1\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_l1\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_l1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_l1\_ p{margin:0;}#chatgpt-mermaid-\_r_l1\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_l1\_ .label text,#chatgpt-mermaid-\_r_l1\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .node rect,#chatgpt-mermaid-\_r_l1\_ .node circle,#chatgpt-mermaid-\_r_l1\_ .node ellipse,#chatgpt-mermaid-\_r_l1\_ .node polygon,#chatgpt-mermaid-\_r_l1\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .rough-node .label text,#chatgpt-mermaid-\_r_l1\_ .node .label text,#chatgpt-mermaid-\_r_l1\_ .image-shape .label,#chatgpt-mermaid-\_r_l1\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_l1\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .rough-node .label,#chatgpt-mermaid-\_r_l1\_ .node .label,#chatgpt-mermaid-\_r_l1\_ .image-shape .label,#chatgpt-mermaid-\_r_l1\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_l1\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_l1\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_l1\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l1\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l1\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l1\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_l1\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_l1\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l1\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_l1\_ .icon-shape,#chatgpt-mermaid-\_r_l1\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l1\_ .icon-shape p,#chatgpt-mermaid-\_r_l1\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_l1\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_l1\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l1\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_l1\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_l1\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_l1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l1\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l1\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l1\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_l1\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_l1\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .node rect,#chatgpt-mermaid-\_r_l1\_ .node circle,#chatgpt-mermaid-\_r_l1\_ .node ellipse,#chatgpt-mermaid-\_r_l1\_ .node polygon,#chatgpt-mermaid-\_r_l1\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l1\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_l1\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_l1\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_l1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l1\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiĐọc ConsoleKiểm tra code, Component vàInspectorĐưa ra giả thuyếtThay đổi một nguyên nhânChạy lạiĐã hoạt động đúng?Ghi lại kết quảChưaRồi

Khi sửa lỗi, nên thay đổi từng nguyên nhân một để xác định chính xác yếu tố tạo ra vấn đề.

Ví dụ: Nếu máy bay không xoay, hãy kiểm tra script có gắn vào đúng GameObject hay chưa trước khi thay đổi toàn bộ mã nguồn.

## 7. Bài tập thử thách

Xây dựng một Scene nhỏ với đối tượng máy bay và một hành vi có thể tương tác.

Yêu cầu cơ bản:

- Tạo được GameObject máy bay hoặc vật thể đại diện.
- Gắn script C# vào đối tượng.
- Có ít nhất một phím điều khiển tạo ra thay đổi quan sát được.
- Có một biến cấu hình trong Inspector.
- Kiểm tra được tối thiểu hai trường hợp hoạt động khác nhau.
- Chụp ảnh hoặc quay video minh chứng.

Nâng cao: Thử bổ sung một hành vi, ví dụ quay cánh quạt, cho máy bay di chuyển về phía trước hoặc giới hạn góc xoay. Hãy kiểm thử từng chức năng riêng trước khi kết hợp.

### Mẫu ghi kết quả

| Nội dung         | Ghi chép                        |
| ---------------- | ------------------------------- |
| Mục tiêu         | Máy bay xoay khi giữ phím       |
| Tham số          | `rotationSpeed = 30`            |
| Kết quả mong đợi | Máy bay xoay đúng chiều         |
| Kết quả thực tế  | Điền sau khi chạy thử           |
| Lỗi phát hiện    | Điền nếu có                     |
| Cải tiến         | Thay đổi tham số hoặc sửa logic |

## 8. Checklist hoàn thành

Tiến độ thực hành

0/8 nhiệm vụ

Tạo được Scene chứa máy bay hoặc GameObject đại diện.

Tạo và gắn script C# hợp lệ.

Giải thích được Start(), Update() và MonoBehaviour.

Sử dụng được biến và điều kiện để tạo hành vi.

Chạy thử bằng Play Mode và kiểm tra kết quả.

Ghi lại ít nhất một lỗi và cách khắc phục.

Lưu ảnh hoặc video minh chứng.

Thực hiện tối thiểu một cải tiến sau khi thử nghiệm.

## 9. Câu hỏi ôn tập

Trắc nghiệm kiến thức

0/5 đã trả lời

Câu 1. Trong Unity, phương thức nào phù hợp để kiểm tra input điều khiển máy bay mỗi frame?

A. Start()

B. Update()

C. Awake()

D. OnDestroy()

Câu 2. Khi nhân đôi rotationSpeed, trong điều kiện thử tương đương, điều gì xảy ra?

A. Máy bay ngừng xoay

B. Máy bay tự động tiến lên

C. Tốc độ xoay tăng gấp đôi

D. Góc xoay luôn bằng 0

Câu 3. Tại sao cần nhân tốc độ xoay với Time.deltaTime?

A. Để tốc độ xoay ít phụ thuộc vào số frame mỗi giây

B. Để tăng FPS

C. Để tự tạo Rigidbody

D. Để khóa vị trí của máy bay

Câu 4. SimpleCounter chỉ khai báo CountOne() mà không có nơi gọi phương thức. Điều gì xảy ra?

A. Hàm tự chạy mỗi frame

B. Hàm tự chạy khi nhấn Space

C. Unity tự động gọi khi GameObject xuất hiện

D. Hàm không tự được thực thi

Câu 5. Khi Unity báo NullReferenceException, thao tác nào nên thực hiện trước?

A. Xóa toàn bộ script

B. Đọc Console và kiểm tra tham chiếu chưa được gán

C. Tăng rotationSpeed

D. Khởi động lại máy tính

Chấm điểmLàm lại

## 10. Tổng kết

Qua Challenge 1 — Plane Programming, người học vận dụng các kiến thức lập trình cơ bản để điều khiển GameObject bằng C#.

Những kỹ năng quan trọng cần ghi nhớ là sử dụng `MonoBehaviour` để xây dựng hành vi, `Update()` để kiểm tra tương tác theo frame, biến và điều kiện để kiểm soát logic, cùng Inspector và Console để cấu hình và kiểm thử.

Tiêu chí hoàn thành quan trọng nhất: Không chỉ làm cho máy bay chuyển động, mà còn giải thích được vì sao hành vi xảy ra, kiểm tra được kết quả và sửa được lỗi khi chương trình hoạt động sai.