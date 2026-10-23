# Bài 04 — Programming Essentials: More Things to Try

Pathway: Unity Essentials Module: Programming Essentials Loại bài học: Tutorial · Thực hành mở rộng Phiên bản: Unity 6.3 Chủ đề: Lập trình C#, điều khiển hành vi GameObject và kiểm thử trong Unity.

Tham khảo: [Unity Learn — Programming Essentials](https://learn.unity.com/pathway/unity-essentials/unit/programming-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong Unity, lập trình C# cho phép điều khiển hành vi của các đối tượng trong game. Một GameObject có thể di chuyển, xoay, tương tác, thay đổi trạng thái hoặc kích hoạt sự kiện thông qua các Component.

Bài thực hành này tập trung vào việc củng cố các kỹ năng lập trình cơ bản bằng những thử nghiệm nhỏ có thể quan sát và kiểm chứng trực tiếp trong Unity Editor.

Các kỹ năng trọng tâm gồm:

- Tạo và gắn C# script vào GameObject.
- Khai báo biến và thay đổi giá trị trong Inspector.
- Sử dụng `MonoBehaviour`, `Start()` và phương thức tự định nghĩa.
- Viết điều kiện bằng `if`.
- Gọi phương thức thông qua sự kiện tương tác.
- Quan sát kết quả bằng Console.
- Phát hiện và sửa lỗi thường gặp.

Sản phẩm thực hành: Một bộ đếm đơn giản. Người chơi nhấn nút để tăng số đếm; khi đạt mục tiêu đã thiết lập, Unity hiển thị thông báo hoàn thành.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích được mối quan hệ giữa `GameObject`, `Component` và C# script.
2. Tạo một lớp kế thừa từ `MonoBehaviour` và gắn vào đối tượng.
3. Sử dụng `[SerializeField]` để cấu hình biến trong Inspector.
4. Áp dụng điều kiện `if` để kiểm tra trạng thái.
5. Kết nối một phương thức C# với sự kiện nhấn nút.
6. Sử dụng Console để kiểm thử và xác định nguyên nhân lỗi.

## 3. Kiến thức trọng tâm

### 3.1. GameObject, Component và MonoBehaviour

Unity xây dựng đối tượng dựa trên mô hình Component.

| Khái niệm       | Vai trò                                            |
| --------------- | -------------------------------------------------- |
| `Scene`         | Không gian chứa các đối tượng game                 |
| `GameObject`    | Đối tượng cơ bản có thể chứa nhiều Component       |
| `Component`     | Cung cấp dữ liệu hoặc hành vi cho GameObject       |
| `MonoBehaviour` | Lớp nền tảng thường dùng để viết Component bằng C# |
| `Inspector`     | Giao diện xem và điều chỉnh thuộc tính             |
| `Console`       | Hiển thị thông báo, cảnh báo và lỗi                |
| `Play Mode`     | Chế độ chạy thử game trong Unity Editor            |

Ví dụ, một đối tượng `Cube` có thể chứa:

```
Cube (GameObject)
├── Transform
├── Mesh Filter
├── Mesh Renderer
├── Box Collider
└── SimpleCounter (C# Script)
```

`Transform` xác định vị trí, góc xoay và tỉ lệ. `Mesh Renderer` giúp hiển thị hình khối. `SimpleCounter` cung cấp hành vi đếm do người lập trình xây dựng.

### 3.2. Các phương thức và vòng đời

Một lớp kế thừa từ `MonoBehaviour` có thể sử dụng những phương thức vòng đời được Unity tự động gọi.

| Phương thức  | Khi nào thực thi?                                                   | Ứng dụng                            |
| ------------ | ------------------------------------------------------------------- | ----------------------------------- |
| `Awake()`    | Khi instance script được khởi tạo                                   | Khởi tạo dữ liệu và tham chiếu      |
| `Start()`    | Trước lần cập nhật frame đầu tiên của Component đang được kích hoạt | Thiết lập trạng thái ban đầu        |
| `Update()`   | Mỗi frame khi Component đang hoạt động                              | Xử lý hành vi cần cập nhật liên tục |
| `OnEnable()` | Khi Component được kích hoạt                                        | Đăng ký sự kiện                     |

Không phải mọi logic đều cần đặt trong `Update()`.

Nếu một hành động chỉ xảy ra khi người chơi nhấn nút, sử dụng một phương thức riêng được gọi từ sự kiện thường phù hợp hơn.

### 3.3. Biến và điều kiện

Xét đoạn mã:

```
[SerializeField] private int target = 3;
private int count = 0;
```

Trong đó:

- `target` lưu số lần tương tác cần đạt.
- `count` lưu số lần tương tác thực tế.
- `private` hạn chế truy cập trực tiếp từ lớp khác.
- `[SerializeField]` cho phép Unity hiển thị và lưu giá trị trường private trong Inspector.

Điều kiện:

```
if (count >= target)
{
    Debug.Log("Đã hoàn thành mục tiêu!");
}
```

Được hiểu là: nếu số đếm hiện tại lớn hơn hoặc bằng mục tiêu, chương trình hiển thị thông báo trong Console.

## 4. Luồng hoạt động của chương trình

\#chatgpt-mermaid-\_r_ls\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ls\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ls\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ls\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ls\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ls\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ls\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ls\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ls\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ls\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ls\_ p{margin:0;}#chatgpt-mermaid-\_r_ls\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ls\_ .label text,#chatgpt-mermaid-\_r_ls\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .node rect,#chatgpt-mermaid-\_r_ls\_ .node circle,#chatgpt-mermaid-\_r_ls\_ .node ellipse,#chatgpt-mermaid-\_r_ls\_ .node polygon,#chatgpt-mermaid-\_r_ls\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .rough-node .label text,#chatgpt-mermaid-\_r_ls\_ .node .label text,#chatgpt-mermaid-\_r_ls\_ .image-shape .label,#chatgpt-mermaid-\_r_ls\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ls\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .rough-node .label,#chatgpt-mermaid-\_r_ls\_ .node .label,#chatgpt-mermaid-\_r_ls\_ .image-shape .label,#chatgpt-mermaid-\_r_ls\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ls\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ls\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ls\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ls\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ls\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ls\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ls\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ls\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ls\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ls\_ .icon-shape,#chatgpt-mermaid-\_r_ls\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ls\_ .icon-shape p,#chatgpt-mermaid-\_r_ls\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ls\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ls\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ls\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ls\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ls\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ls\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ls\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ls\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ls\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ls\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ls\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .node rect,#chatgpt-mermaid-\_r_ls\_ .node circle,#chatgpt-mermaid-\_r_ls\_ .node ellipse,#chatgpt-mermaid-\_r_ls\_ .node polygon,#chatgpt-mermaid-\_r_ls\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ls\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ls\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ls\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ls\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ls\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu Play ModeStart: Hiển thị mục tiêuNgười chơi nhấn nútGọi CountOne()Tăng count thêm 1count = target?Chưa hoàn thànhHiển thị thông báo hoàn thànhSaiĐúng

Giải thích:

Mỗi lần người chơi nhấn nút, `CountOne()` được thực thi và làm tăng biến `count`. Chương trình kiểm tra số đếm với giá trị `target`. Nếu chưa đạt, trò chơi tiếp tục nhận tương tác. Nếu đã đạt, thông báo hoàn thành xuất hiện.

Ở phiên bản cơ bản, nếu tiếp tục nhấn nút sau khi đạt mục tiêu, thông báo vẫn có thể xuất hiện thêm lần nữa.

## 5. Thực hành: Xây dựng bộ đếm tương tác

### 5.1. Chuẩn bị Scene

Trong Unity Editor:

1. Mở một Scene mới hoặc Scene thực hành có sẵn.
2. Tại cửa sổ Hierarchy, chọn `GameObject > 3D Object > Cube`.
3. Đổi tên GameObject thành `CounterObject`.
4. Đặt đối tượng tại vị trí dễ quan sát trong Scene.
5. Lưu Scene.

Đối tượng `CounterObject` sẽ chứa script xử lý logic bộ đếm.

### 5.2. Tạo C# script

Trong cửa sổ Project:

1. Tạo thư mục `Scripts` nếu chưa có.
2. Tạo một C# script mới.
3. Đặt tên file là `SimpleCounter.cs`.
4. Mở file trong trình soạn thảo mã.
5. Thay nội dung bằng đoạn mã sau.

```
using UnityEngine;

public class SimpleCounter : MonoBehaviour
{
    [SerializeField] private int target = 3;

    private int count = 0;

    private void Start()
    {
        Debug.Log("Mục tiêu: " + target);
    }

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

Lưu file và quay lại Unity.

Khi script được biên dịch thành công, kéo `SimpleCounter` từ cửa sổ Project vào GameObject `CounterObject` trong Hierarchy.

### 5.3. Phân tích mã nguồn

Khai báo lớp:

```
public class SimpleCounter : MonoBehaviour
```

Lớp `SimpleCounter` kế thừa từ `MonoBehaviour`, cho phép Unity quản lý vòng đời Component và gọi các phương thức như `Start()`.

Khai báo mục tiêu:

```
[SerializeField] private int target = 3;
```

Biến `target` có giá trị mặc định bằng `3`, đồng thời có thể thay đổi qua Inspector.

Khởi tạo bộ đếm:

```
private int count = 0;
```

Biến `count` bắt đầu từ `0` và tăng theo số lần phương thức được gọi.

Ghi log khi bắt đầu:

```
private void Start()
{
    Debug.Log("Mục tiêu: " + target);
}
```

Khi Play Mode bắt đầu và Component hoạt động, Unity ghi mục tiêu hiện tại vào Console.

Tăng số đếm:

```
public void CountOne()
{
    count++;
}
```

Toán tử `++` tăng giá trị biến thêm một đơn vị.

Phương thức được khai báo `public` để có thể lựa chọn từ sự kiện `On Click()` của UI Button trong Inspector.

### 5.4. Tạo nút tương tác

Để kiểm thử phương thức `CountOne()`:

1. Trong Hierarchy, chọn `GameObject > UI > Button` (tên mục có thể khác đôi chút tùy cấu hình UI).
2. Unity tạo Canvas và EventSystem khi cần.
3. Đổi tên nút thành `CountButton`.
4. Điều chỉnh vị trí và kích thước nút trong Scene.
5. Chọn `CountButton` rồi tìm Component `Button` trong Inspector.
6. Tại mục `On Click()`, nhấn dấu `+` để thêm sự kiện.
7. Kéo GameObject `CounterObject` vào trường đối tượng của sự kiện.
8. Chọn phương thức `SimpleCounter > CountOne()` trong danh sách chức năng.

Bây giờ, mỗi lần nhấn nút, Unity sẽ gọi phương thức `CountOne()` thuộc Component `SimpleCounter` của `CounterObject`.

### 5.5. Chạy thử chương trình

Nhấn Play và mở cửa sổ `Window > General > Console`.

Với `target = 3`, kết quả mong đợi là:

| Thao tác   | `count` | `count >= target` | Kết quả                  |
| ---------- | ------- | ----------------- | ------------------------ |
| Bắt đầu    | 0       | Chưa kiểm tra     | Log mục tiêu             |
| Nhấn lần 1 | 1       | False             | Không báo hoàn thành     |
| Nhấn lần 2 | 2       | False             | Không báo hoàn thành     |
| Nhấn lần 3 | 3       | True              | Thông báo hoàn thành     |
| Nhấn lần 4 | 4       | True              | Thông báo xuất hiện thêm |

Console có thể hiển thị:

```
Mục tiêu: 3
Đã hoàn thành mục tiêu!
Đã hoàn thành mục tiêu!
```

Điều này xảy ra vì điều kiện `count >= target` tiếp tục đúng khi `count` tăng vượt quá `target`.

## 6. Thử nghiệm mở rộng

### 6.1. Thay đổi giá trị mục tiêu

Thoát Play Mode, chọn `CounterObject` và thay đổi `Target` trong Inspector.

Thực hiện ba thử nghiệm:

| Thử nghiệm | Target | Dự đoán                   |
| ---------- | ------ | ------------------------- |
| A          | 2      | Hoàn thành sau 2 lần nhấn |
| B          | 4      | Hoàn thành sau 4 lần nhấn |
| C          | 6      | Hoàn thành sau 6 lần nhấn |

Trước khi chạy mỗi thử nghiệm, hãy ghi lại dự đoán và so sánh với kết quả thực tế.

Lưu ý: Những thay đổi giá trị trong Inspector khi đang ở Play Mode thường không được giữ lại sau khi thoát chế độ chạy thử.

### 6.2. Chỉ hiển thị thông báo một lần

Phiên bản cơ bản liên tục ghi thông báo nếu `count` tiếp tục tăng sau khi hoàn thành.

Có thể cải thiện bằng một biến trạng thái `bool`.

```
private bool completed = false;

public void CountOne()
{
    if (completed)
    {
        return;
    }

    count++;

    if (count >= target)
    {
        completed = true;
        Debug.Log("Đã hoàn thành mục tiêu!");
    }
}
```

Ở đây:

- `completed` ban đầu là `false`.
- Khi đạt mục tiêu, `completed` trở thành `true`.
- Những lần gọi tiếp theo sẽ kết thúc ngay tại `return`.
- Thông báo hoàn thành chỉ được ghi một lần trong mỗi lượt chạy, trừ khi trạng thái được đặt lại.

### 6.3. Kết hợp với vật phẩm collectible

Bộ đếm có thể được mở rộng thành một hệ thống thu thập vật phẩm đơn giản.

Ví dụ, người chơi cần thu thập ba vật phẩm để hoàn thành nhiệm vụ.

\#chatgpt-mermaid-\_r_mi\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mi\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mi\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mi\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mi\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mi\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mi\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mi\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mi\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mi\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mi\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mi\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mi\_ p{margin:0;}#chatgpt-mermaid-\_r_mi\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mi\_ .label text,#chatgpt-mermaid-\_r_mi\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ .node rect,#chatgpt-mermaid-\_r_mi\_ .node circle,#chatgpt-mermaid-\_r_mi\_ .node ellipse,#chatgpt-mermaid-\_r_mi\_ .node polygon,#chatgpt-mermaid-\_r_mi\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .rough-node .label text,#chatgpt-mermaid-\_r_mi\_ .node .label text,#chatgpt-mermaid-\_r_mi\_ .image-shape .label,#chatgpt-mermaid-\_r_mi\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mi\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .rough-node .label,#chatgpt-mermaid-\_r_mi\_ .node .label,#chatgpt-mermaid-\_r_mi\_ .image-shape .label,#chatgpt-mermaid-\_r_mi\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mi\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mi\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mi\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mi\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mi\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mi\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mi\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mi\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mi\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mi\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mi\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mi\_ .icon-shape,#chatgpt-mermaid-\_r_mi\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mi\_ .icon-shape p,#chatgpt-mermaid-\_r_mi\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mi\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mi\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mi\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mi\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mi\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mi\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mi\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mi\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mi\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mi\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mi\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mi\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mi\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mi\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mi\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mi\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .node rect,#chatgpt-mermaid-\_r_mi\_ .node circle,#chatgpt-mermaid-\_r_mi\_ .node ellipse,#chatgpt-mermaid-\_r_mi\_ .node polygon,#chatgpt-mermaid-\_r_mi\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mi\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mi\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mi\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mi\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mi\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi tiếp xúc vật phẩmXác nhận vật phẩm hợp lệTăng số lượng đã thu thậpẨn hoặc xóa vật phẩmĐã đủ số lượng?Tiếp tục thu thậpHoàn thành nhiệm vụChưaĐủ

Trong trường hợp này, `CountOne()` có thể được gọi sau khi trò chơi xác nhận người chơi đã thu thập vật phẩm hợp lệ.

Điểm quan trọng là logic đếm chỉ cần thực thi khi một sự kiện thực sự xảy ra, thay vì tăng liên tục trong `Update()`.

## 7. Kiểm thử và Debug

Một chương trình chạy được chưa chắc đã hoạt động chính xác trong mọi tình huống. Kiểm thử cần xác định cả kết quả mong đợi và kết quả thực tế.

### 7.1. Những lỗi thường gặp

| Hiện tượng                          | Nguyên nhân có thể                                    | Cách kiểm tra                                              |
| ----------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| Script không thể gắn vào GameObject | Tên file và tên lớp không khớp, hoặc có lỗi biên dịch | Kiểm tra `SimpleCounter.cs`, khai báo lớp và Console       |
| Nhấn nút không có tác dụng          | Chưa gán sự kiện `On Click()`                         | Kiểm tra tham chiếu và phương thức của Button              |
| Không thấy log mục tiêu             | Script hoặc GameObject không hoạt động                | Kiểm tra trạng thái kích hoạt trong Hierarchy và Inspector |
| `NullReferenceException`            | Truy cập tham chiếu đối tượng chưa hợp lệ             | Kiểm tra dòng lỗi và các tham chiếu trong Inspector        |
| Thông báo xuất hiện nhiều lần       | Điều kiện vẫn đúng sau khi đạt mục tiêu               | Kiểm tra điều kiện và thêm trạng thái hoàn thành           |
| Kết quả khác dự đoán                | Giá trị Inspector khác giá trị dự kiến                | Kiểm tra `Target` và trạng thái chạy thử                   |

### 7.2. Quy trình Debug chuẩn

\#chatgpt-mermaid-\_r_mr\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mr\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mr\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mr\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mr\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mr\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mr\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mr\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mr\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mr\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mr\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mr\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mr\_ p{margin:0;}#chatgpt-mermaid-\_r_mr\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mr\_ .label text,#chatgpt-mermaid-\_r_mr\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ .node rect,#chatgpt-mermaid-\_r_mr\_ .node circle,#chatgpt-mermaid-\_r_mr\_ .node ellipse,#chatgpt-mermaid-\_r_mr\_ .node polygon,#chatgpt-mermaid-\_r_mr\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .rough-node .label text,#chatgpt-mermaid-\_r_mr\_ .node .label text,#chatgpt-mermaid-\_r_mr\_ .image-shape .label,#chatgpt-mermaid-\_r_mr\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mr\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .rough-node .label,#chatgpt-mermaid-\_r_mr\_ .node .label,#chatgpt-mermaid-\_r_mr\_ .image-shape .label,#chatgpt-mermaid-\_r_mr\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mr\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mr\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mr\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mr\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mr\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mr\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mr\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mr\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mr\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mr\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mr\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mr\_ .icon-shape,#chatgpt-mermaid-\_r_mr\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mr\_ .icon-shape p,#chatgpt-mermaid-\_r_mr\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mr\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mr\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mr\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mr\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mr\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mr\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mr\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mr\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mr\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mr\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mr\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mr\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .node rect,#chatgpt-mermaid-\_r_mr\_ .node circle,#chatgpt-mermaid-\_r_mr\_ .node ellipse,#chatgpt-mermaid-\_r_mr\_ .node polygon,#chatgpt-mermaid-\_r_mr\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mr\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mr\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mr\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mr\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mr\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện kết quả bất thườngTái hiện lỗiĐọc ConsoleKiểm tra GameObject vàComponentĐưa ra giả thuyếtThay đổi một yếu tốChạy lại thử nghiệmLỗi đã được xử lý?Ghi lại nguyên nhân và cáchsửaChưaRồi

Nguyên tắc quan trọng: Chỉ thay đổi một yếu tố tại mỗi lần kiểm thử để dễ xác định nguyên nhân gây ra sự khác biệt.

## 8. Bài tập củng cố

### Bài tập A — Cơ bản

Tạo lại hệ thống `SimpleCounter` với mục tiêu bằng `5`.

Yêu cầu:

- Gắn script vào một GameObject.
- Tạo nút gọi `CountOne()`.
- Xác định số lần nhấn để đạt mục tiêu.
- Chụp ảnh Console sau khi hoàn thành.

### Bài tập B — Vận dụng

Bổ sung khả năng đặt lại bộ đếm.

Yêu cầu:

- Tạo phương thức `ResetCounter()`.
- Đặt `count` về `0`.
- Đặt `completed` về `false` nếu đang sử dụng biến trạng thái này.
- Tạo nút Reset và gắn phương thức tương ứng.
- Kiểm tra khả năng bắt đầu lại nhiệm vụ sau khi hoàn thành.

### Bài tập C — Mở rộng

Thiết kế một Scene có ba vật phẩm collectible.

Yêu cầu:

- Khi người chơi thu thập vật phẩm, số đếm tăng.
- Mỗi vật phẩm chỉ được tính một lần.
- Khi thu thập đủ ba vật phẩm, hiển thị thông báo hoàn thành.
- Không cho phép số lần thu thập tăng sai khi vật phẩm đã biến mất.

Tiêu chí đánh giá: Hành vi chính xác, không xuất hiện lỗi trong Console và giải thích được điều kiện hoàn thành.

## 9. Checklist hoàn thành

- Tạo được C# script kế thừa từ `MonoBehaviour`.
- Gắn script vào GameObject trong Scene.
- Thay đổi được biến `target` từ Inspector.
- Sử dụng `Start()` để ghi log.
- Sử dụng phương thức `CountOne()` để tăng biến.
- Kết nối được phương thức với sự kiện `On Click()`.
- Giải thích được điều kiện `count >= target`.
- Kiểm thử ít nhất hai giá trị mục tiêu.
- Xác định và sửa được một lỗi thường gặp.
- Lưu ảnh chụp màn hình hoặc video chứng minh kết quả.

## 10. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao nên đặt logic tăng bộ đếm vào phương thức `CountOne()` thay vì tăng trực tiếp trong `Update()`?

A. Vì `Update()` không thể thay đổi biến số nguyên. B. Vì `CountOne()` luôn được Unity tự động gọi mỗi frame. C. Vì số đếm chỉ nên tăng khi có sự kiện tương tác phù hợp. D. Vì `Update()` không thể sử dụng điều kiện `if`.

Đáp án: C

Giải thích: `Update()` được gọi mỗi frame khi Component hoạt động, trong khi `CountOne()` có thể được gọi khi người chơi thực sự tương tác.

### Câu 2

Cho đoạn mã:

```
[SerializeField] private int target = 3;
```

Vai trò của `[SerializeField]` là gì?

A. Cho phép trường private được Unity serialize và hiển thị trong Inspector khi được hỗ trợ. B. Tự động tăng giá trị `target` mỗi frame. C. Biến `target` trở thành phương thức public. D. Tự động gọi `Start()`.

Đáp án: A

Giải thích: `[SerializeField]` cho phép Unity lưu và hiển thị trường private đủ điều kiện, nhờ đó có thể cấu hình trực tiếp trong Inspector.

### Câu 3

Nếu `target = 4` và `count = 3`, sau khi thực hiện `count++`, điều kiện nào đúng?

A. `count < target` B. `count == 3` C. `count > 4` D. `count >= target`

Đáp án: D

Giải thích: Sau `count++`, giá trị của `count` bằng `4`, do đó điều kiện `count >= target` trả về `true`.

### Câu 4

Người học tạo phương thức `CountOne()` nhưng khi nhấn Button, biến đếm không thay đổi. Nguyên nhân nào cần kiểm tra đầu tiên?

A. Màu sắc của GameObject. B. Sự kiện `On Click()` đã tham chiếu đúng Component và phương thức hay chưa. C. Camera có sử dụng Perspective hay không. D. Độ phân giải của màn hình.

Đáp án: B

Giải thích: Nếu Button chưa kết nối đúng với `CountOne()`, Unity sẽ không gọi phương thức khi người chơi nhấn nút.

### Câu 5

Hệ thống cần chỉ thông báo hoàn thành một lần dù người chơi tiếp tục nhấn nút. Giải pháp nào phù hợp nhất?

A. Đặt câu lệnh `Debug.Log()` trong `Update()`. B. Tăng `target` liên tục. C. Dùng biến trạng thái `completed` và bỏ qua các lần gọi tiếp theo khi đã hoàn thành. D. Xóa toàn bộ điều kiện `if`.

Đáp án: C

Giải thích: Biến `completed` giúp ghi nhận trạng thái hoàn thành để chương trình không tiếp tục xử lý những tương tác không cần thiết.

## 11. Tổng kết

Bài thực hành củng cố mối quan hệ giữa C# script, Component và GameObject trong Unity.

Các kiến thức quan trọng nhất gồm:

- `MonoBehaviour` giúp xây dựng hành vi cho GameObject.
- `Start()` được dùng để thực hiện logic khởi tạo ở thời điểm thích hợp.
- `[SerializeField]` cho phép cấu hình dữ liệu trong Inspector.
- Phương thức tự định nghĩa giúp tách logic thành các đơn vị dễ kiểm thử.
- Điều kiện `if` kiểm soát hành vi dựa trên trạng thái chương trình.
- Sự kiện UI có thể kích hoạt phương thức C# khi người chơi tương tác.
- Console và quy trình Debug giúp xác minh hành vi thực tế.

Kết quả cần đạt: Người học xây dựng được một hệ thống tương tác nhỏ, có khả năng thay đổi tham số, kiểm chứng điều kiện hoàn thành và giải thích được những lỗi cơ bản trong quá trình thực thi.

Ghi chú: Đây là bài học tiếng Việt tự biên soạn theo chủ đề Programming Essentials, không phải bản dịch hoặc nội dung thực hành chính thức của Unity. Đối chiếu [Unity Learn](https://learn.unity.com/pathway/unity-essentials/unit/programming-essentials?version=6.3\&utm_source=chatgpt.com) để xem nhiệm vụ và tài nguyên gốc dành cho Unity 6.3.