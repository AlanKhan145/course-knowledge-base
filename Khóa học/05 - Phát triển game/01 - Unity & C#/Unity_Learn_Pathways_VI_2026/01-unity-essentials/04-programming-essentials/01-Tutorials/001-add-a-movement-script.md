# Bài 01 — Add a Movement Script: Lập trình di chuyển nhân vật trong Unity

Pathway: Unity Essentials Module: Programming Essentials Phiên bản: Unity 6.3 Loại bài học: Tutorial — Lý thuyết kết hợp thực hành

## 1. Tổng quan bài học

Trong Unity, một `GameObject` có thể được di chuyển thủ công bằng công cụ Transform trong Editor. Tuy nhiên, để đối tượng phản ứng với thao tác của người chơi trong quá trình chạy game, chúng ta cần lập trình hành vi điều khiển.

Bài học này hướng dẫn xây dựng một script C# giúp nhân vật di chuyển bằng bàn phím, kiểm soát tốc độ và giới hạn khu vực di chuyển.

Các kiến thức quan trọng gồm:

- Sử dụng `MonoBehaviour` để tạo hành vi cho `GameObject`.
- Đọc dữ liệu bàn phím thông qua `Input.GetAxisRaw()`.
- Thay đổi vị trí bằng `Transform`.
- Điều chỉnh tốc độ bằng `Time.deltaTime`.
- Giới hạn tọa độ bằng `Mathf.Clamp()`.
- Phân biệt di chuyển bằng `Transform` và `Rigidbody`.

Kết quả: Một đối tượng 3D có thể di chuyển theo lệnh bàn phím với tốc độ tương đối ổn định, không phụ thuộc trực tiếp vào số lượng frame được render.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích được cách script điều khiển vị trí của một `GameObject`.
2. Tạo và gắn một C# script vào đối tượng trong Unity.
3. Sử dụng `Update()` để xử lý thao tác di chuyển.
4. Áp dụng `Time.deltaTime` để tính khoảng cách di chuyển theo thời gian.
5. Sử dụng `Mathf.Clamp()` để giới hạn phạm vi di chuyển.
6. Phát hiện và sửa các lỗi thường gặp liên quan đến Input, tọa độ và tốc độ.

## 3. Kiến thức nền tảng

### 3.1. GameObject, Component và Transform

Trong Unity, các đối tượng xuất hiện trong Scene đều được biểu diễn bằng `GameObject`.

Mỗi `GameObject` có thể chứa nhiều `Component`, mỗi Component đảm nhận một nhiệm vụ nhất định.

| Thành phần      | Vai trò                                                        |
| --------------- | -------------------------------------------------------------- |
| `GameObject`    | Đối tượng trong Scene                                          |
| `Transform`     | Quản lý vị trí, góc xoay và tỷ lệ                              |
| `MonoBehaviour` | Lớp cơ sở để xây dựng script hành vi                           |
| `Update()`      | Phương thức được Unity gọi mỗi frame khi script đang hoạt động |
| `Inspector`     | Giao diện kiểm tra, cấu hình Component                         |
| `Play Mode`     | Chế độ chạy thử game                                           |

Ví dụ, một nhân vật có thể gồm `Transform`, `Mesh Renderer`, `Collider` và một script `SimpleMover`.

### 3.2. Hệ tọa độ trong Unity

Unity sử dụng hệ tọa độ 3D với ba trục X, Y và Z.

Minh họa ba trục tọa độ X, Y, Z trong không gian 3D của Unity.

Một tọa độ được biểu diễn bằng `Vector3`:

```
Vector3 position = new Vector3(2f, 1f, 5f);
```

Trong đó:

- `X = 2`: vị trí theo trục ngang.
- `Y = 1`: độ cao.
- `Z = 5`: vị trí theo chiều sâu.

Để tạo game di chuyển trên mặt phẳng XZ, chúng ta có thể điều khiển X và Z trong khi giữ nguyên Y.

### 3.3. Transform và Rigidbody

Unity cung cấp nhiều cách di chuyển đối tượng, trong đó hai cơ chế phổ biến là:

| Tiêu chí              | Transform                                           | Rigidbody                                      |
| --------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Nguyên lý             | Thay đổi vị trí trực tiếp                           | Sử dụng hệ thống vật lý                        |
| Kiểm soát chuyển động | Trực tiếp                                           | Theo vận tốc, lực và va chạm                   |
| Phù hợp               | Di chuyển đơn giản, đối tượng không mô phỏng vật lý | Đối tượng cần tương tác vật lý                 |
| Cập nhật              | Thường trong `Update()`                             | Thường trong `FixedUpdate()`                   |
| Va chạm               | Không tự xử lý chuyển động tránh vật cản            | Hỗ trợ giải quyết va chạm bằng hệ thống vật lý |

Trong bài này, chúng ta sử dụng `Transform` vì mục tiêu là học cách lập trình di chuyển cơ bản.

Lưu ý: Không nên tùy tiện thay đổi `Transform` trực tiếp của một `Rigidbody` động trong khi mong muốn hệ thống vật lý xử lý chuyển động nhất quán.

## 4. Cơ chế hoạt động của Movement Script

### 4.1. Quy trình xử lý di chuyển

Mỗi frame, script nhận dữ liệu bàn phím, tính hướng di chuyển, nhân với tốc độ và khoảng thời gian frame, sau đó cập nhật vị trí.

\#chatgpt-mermaid-\_r_106\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_106\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_106\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_106\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_106\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_106\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_106\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_106\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_106\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_106\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_106\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_106\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_106\_ p{margin:0;}#chatgpt-mermaid-\_r_106\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_106\_ .label text,#chatgpt-mermaid-\_r_106\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ .node rect,#chatgpt-mermaid-\_r_106\_ .node circle,#chatgpt-mermaid-\_r_106\_ .node ellipse,#chatgpt-mermaid-\_r_106\_ .node polygon,#chatgpt-mermaid-\_r_106\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .rough-node .label text,#chatgpt-mermaid-\_r_106\_ .node .label text,#chatgpt-mermaid-\_r_106\_ .image-shape .label,#chatgpt-mermaid-\_r_106\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_106\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .rough-node .label,#chatgpt-mermaid-\_r_106\_ .node .label,#chatgpt-mermaid-\_r_106\_ .image-shape .label,#chatgpt-mermaid-\_r_106\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_106\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_106\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_106\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_106\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_106\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_106\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_106\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_106\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_106\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_106\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_106\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_106\_ .icon-shape,#chatgpt-mermaid-\_r_106\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_106\_ .icon-shape p,#chatgpt-mermaid-\_r_106\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_106\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_106\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_106\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_106\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_106\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_106\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_106\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_106\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_106\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_106\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_106\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_106\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_106\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_106\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_106\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_106\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_106\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .node rect,#chatgpt-mermaid-\_r_106\_ .node circle,#chatgpt-mermaid-\_r_106\_ .node ellipse,#chatgpt-mermaid-\_r_106\_ .node polygon,#chatgpt-mermaid-\_r_106\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_106\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_106\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_106\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_106\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_106\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Người chơi nhấn phímInput.GetAxisRawXác định hướng di chuyểnNhân với speed vàTime.deltaTimeTính vị trí mớiMathf.Clamp giới hạn tọa độCập nhật TransformHiển thị ở frame tiếp theo

Nếu không có phím di chuyển được nhấn, hướng nhận giá trị 0 và đối tượng giữ nguyên vị trí.

### 4.2. Công thức tính khoảng cách di chuyển

Khoảng cách di chuyển trong một frame được tính bằng:

\\[ \Delta s=v\times\Delta t \\]

Trong đó:

- \\(\Delta s\\): quãng đường di chuyển trong frame.
- \\(v\\): tốc độ di chuyển, đơn vị Unity unit/giây.
- \\(\Delta t\\): thời gian giữa hai frame, được cung cấp bởi `Time.deltaTime`.

Ví dụ với `speed = 4`:

| FPS giả định | Thời gian mỗi frame | Quãng đường mỗi frame |
| ------------ | ------------------- | --------------------- |
| 30 FPS       | 0,0333 giây         | Khoảng 0,133 unit     |
| 60 FPS       | 0,0167 giây         | Khoảng 0,067 unit     |
| 120 FPS      | 0,0083 giây         | Khoảng 0,033 unit     |

Quãng đường di chuyển trong một giây

Lý tưởng hóa chuyển động liên tục với speed = 4 và Time.deltaTime.

0 unit1.25 unit2.5 unit3.75 unit5 unit30 FPS60 FPS120 FPS

Ở các mức FPS khác nhau, tổng khoảng cách sau một giây vẫn xấp xỉ 4 unit nếu nhân với `Time.deltaTime`.

Nếu bỏ `Time.deltaTime`, quãng đường sẽ được cộng cố định theo từng frame. Khi FPS tăng, nhân vật sẽ di chuyển nhanh hơn.

## 5. Thực hành: Tạo Movement Script

### 5.1. Chuẩn bị Scene

Mở Unity 6.3 và tạo một Scene 3D.

Thực hiện:

1. Trong cửa sổ `Hierarchy`, chọn GameObject → 3D Object → Cube.
2. Đổi tên Cube thành `Player`.
3. Thiết lập vị trí `Transform` là `(0, 0.5, 0)`.
4. Tạo thêm một `Plane` làm mặt đất, nếu cần.
5. Đặt Plane tại `(0, 0, 0)`.
6. Lưu Scene.

Ví dụ bố cục Scene

[Separation of Concerns in Game Development | by Iddi Builds | Medium](https://images.openai.com/static-rsc-4/ozkX09_vBJ0pVUr7S9wj7M5k1g2iA9GiXYV2COXfW7tnr4k1v00hy81QasiwSVvvL2DSYtQeJzjyK-V5d8fh8eSobCtn9skAQcJbHCGG0kBOGkIuxicFI4-doaGbHGbAMIyNSQCrre-7J2vryNtiQAoy9FZdr7IjSYgzsLcvMEM?purpose=inline)

[medium.com](https://medium.com/%40iddi_builds/separation-of-concerns-in-game-development-91dd9b87b7aa?utm_source=chatgpt.com)

Minh họa Scene 3D đơn giản gồm một khối Cube đại diện cho nhân vật và mặt phẳng làm môi trường thử nghiệm.

Ở ví dụ này, Cube không cần một `Rigidbody` động. Nhân vật sẽ được điều khiển trực tiếp thông qua `Transform`.

### 5.2. Tạo C# Script

Trong cửa sổ `Project`:

1. Tạo một thư mục tên `Scripts`.
2. Tạo script C# MonoBehaviour tên `SimpleMover`.
3. Mở script trong trình soạn thảo mã nguồn.
4. Thay nội dung bằng đoạn mã:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");

        Vector3 direction = new Vector3(horizontal, 0f, 0f);

        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}
```

Lưu file, quay lại Unity và gắn Component `SimpleMover` vào GameObject `Player`.

### 5.3. Phân tích mã nguồn

Khai báo thư viện

```
using UnityEngine;
```

Cho phép sử dụng các thành phần như `MonoBehaviour`, `Vector3`, `Transform` và `Time`.

Khai báo class

```
public class SimpleMover : MonoBehaviour
```

`SimpleMover` kế thừa từ `MonoBehaviour`, nhờ đó có thể được gắn vào một `GameObject` và nhận các lời gọi vòng đời từ Unity.

Khai báo tốc độ

```
[SerializeField] private float speed = 4f;
```

- `float`: kiểu dữ liệu số thực.
- `private`: giới hạn quyền truy cập trực tiếp từ class khác.
- `[SerializeField]`: cho phép cấu hình giá trị trường trong Inspector.
- `4f`: tốc độ mặc định 4 unit/giây.

Đọc thao tác bàn phím

```
float horizontal = Input.GetAxisRaw("Horizontal");
```

Với Input Manager mặc định, giá trị thông thường là:

| Phím       | Giá trị |
| ---------- | ------- |
| A hoặc ←   | -1      |
| Không nhấn | 0       |
| D hoặc →   | 1       |

`GetAxisRaw()` trả về giá trị trục chưa được làm mượt. Với bàn phím ở cấu hình mặc định, giá trị chuyển ngay giữa -1, 0 và 1.

Tạo vector hướng

```
Vector3 direction = new Vector3(horizontal, 0f, 0f);
```

Đối tượng chỉ di chuyển theo X. Hai trục Y và Z không thay đổi.

Cập nhật vị trí

```
transform.Translate(
    direction * speed * Time.deltaTime,
    Space.World
);
```

Trong đó:

- `transform.Translate()`: dịch chuyển đối tượng.
- `direction`: hướng di chuyển.
- `speed`: tốc độ mong muốn.
- `Time.deltaTime`: thời gian frame.
- `Space.World`: di chuyển theo hệ tọa độ thế giới.

### 5.4. Kiểm tra trong Play Mode

Nhấn nút Play, sau đó dùng phím A/D hoặc mũi tên trái/phải.

| Thao tác   | Kết quả mong đợi                  |
| ---------- | --------------------------------- |
| Giữ A      | Cube dịch chuyển về hướng X âm    |
| Giữ D      | Cube dịch chuyển về hướng X dương |
| Thả phím   | Cube dừng di chuyển               |
| Tăng Speed | Cube di chuyển nhanh hơn          |
| Giảm Speed | Cube di chuyển chậm hơn           |

Có thể quan sát giá trị `Transform → Position → X` trong Inspector để kiểm chứng.

## 6. Mở rộng: Di chuyển hai chiều và giới hạn phạm vi

### 6.1. Di chuyển theo hai trục X và Z

Để di chuyển cả trước, sau, trái và phải, chúng ta bổ sung trục `Vertical`.

Thay script bằng:

```
using UnityEngine;

public class SimpleMover : MonoBehaviour
{
    [SerializeField] private float speed = 4f;

    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 direction =
            new Vector3(horizontal, 0f, vertical);

        direction = Vector3.ClampMagnitude(direction, 1f);

        transform.Translate(
            direction * speed * Time.deltaTime,
            Space.World
        );
    }
}
```

Bây giờ có thể dùng:

- W: đi theo Z dương.
- S: đi theo Z âm.
- A: đi theo X âm.
- D: đi theo X dương.

`Vector3.ClampMagnitude(direction, 1f)` giới hạn độ lớn vector hướng về tối đa 1.

Điều này cần thiết vì nếu nhấn đồng thời W và D, vector `(1, 0, 1)` có độ lớn \\(\sqrt{2}\\), khiến tốc độ theo đường chéo lớn hơn khoảng 41% so với di chuyển thẳng nếu không giới hạn độ lớn.

### 6.2. Giới hạn khu vực bằng Mathf.Clamp()

Giả sử chỉ cho phép Cube di chuyển trong phạm vi:

- X từ -5 đến 5.
- Z từ -4 đến 4.

Thay nội dung `Update()` bằng:

```
void Update()
{
    float horizontal = Input.GetAxisRaw("Horizontal");
    float vertical = Input.GetAxisRaw("Vertical");

    Vector3 direction =
        new Vector3(horizontal, 0f, vertical);

    direction = Vector3.ClampMagnitude(direction, 1f);

    Vector3 newPosition =
        transform.position
        + direction * speed * Time.deltaTime;

    newPosition.x = Mathf.Clamp(newPosition.x, -5f, 5f);
    newPosition.z = Mathf.Clamp(newPosition.z, -4f, 4f);

    transform.position = newPosition;
}
```

Hàm `Mathf.Clamp(value, min, max)` bảo đảm giá trị nằm trong khoảng quy định.

Minh họa vùng di chuyển hợp lệ trên mặt phẳng XZ, nhìn từ trên xuống.

Khi người chơi giữ phím về phía ranh giới, tọa độ sẽ bị giữ tại giá trị giới hạn. Người chơi vẫn có thể di chuyển theo hướng ngược lại.

Lưu ý: `Mathf.Clamp()` chỉ giới hạn tọa độ tâm của đối tượng trong ví dụ này, không tự động ngăn toàn bộ khối Cube vượt ra ngoài ranh giới bằng kích thước hình học của nó.

## 7. Input System mới và Input Manager cũ

Unity hỗ trợ hai cơ chế đọc input, với cách thiết lập khác nhau.

| Tiêu chí     | Input Manager cũ             | Input System mới                    |
| ------------ | ---------------------------- | ----------------------------------- |
| API ví dụ    | `Input.GetAxisRaw()`         | `InputAction`                       |
| Cấu hình     | Các axis trong Input Manager | Input Actions                       |
| Độ mở rộng   | Phù hợp ví dụ đơn giản       | Hỗ trợ tốt nhiều thiết bị           |
| Cách sử dụng | Đọc trực tiếp theo tên trục  | Đọc Action đã cấu hình và kích hoạt |

Các đoạn mã trong bài sử dụng Input Manager cũ.

Để kiểm tra cấu hình:

1. Mở `Edit → Project Settings`.
2. Chọn `Player`.
3. Tìm mục `Active Input Handling` trong phần cài đặt Player.
4. Chọn `Input Manager (Old)` hoặc `Both` nếu phù hợp với dự án.
5. Khởi động lại Editor nếu Unity yêu cầu.

Nếu dự án chỉ sử dụng Input System mới, cần tạo và cấu hình Input Actions tương ứng thay vì gọi trực tiếp `Input.GetAxisRaw()`.

Việc thay đổi Active Input Handling ảnh hưởng tới dự án nên phải kiểm tra các hệ thống input khác trước khi chuyển cấu hình.

## 8. Lỗi thường gặp và cách Debug

| Hiện tượng                           | Nguyên nhân có thể                                     | Cách kiểm tra                               |
| ------------------------------------ | ------------------------------------------------------ | ------------------------------------------- |
| Cube không di chuyển                 | Script chưa gắn hoặc bị vô hiệu hóa                    | Kiểm tra Component trong Inspector          |
| Console báo lỗi Input                | Dự án chỉ bật Input System mới                         | Kiểm tra Active Input Handling              |
| Nhân vật di chuyển quá nhanh         | Không nhân `Time.deltaTime`                            | Kiểm tra công thức cập nhật vị trí          |
| Nhân vật đi sai hướng                | Nhầm trục hoặc dùng sai không gian tọa độ              | Kiểm tra X/Y/Z và `Space.World`             |
| Di chuyển chéo nhanh hơn             | Chưa giới hạn độ lớn vector hướng                      | Dùng `Vector3.ClampMagnitude()`             |
| Cube đi xuyên vật cản                | Di chuyển Transform trực tiếp không giải quyết va chạm | Xem xét hệ thống vật lý phù hợp             |
| Thay đổi Speed nhưng không thấy khác | Giá trị bị ghi đè hoặc không dùng trong phép tính      | Kiểm tra Inspector và đoạn script đang chạy |

### Quy trình Debug

\#chatgpt-mermaid-\_r_12s\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_12s\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_12s\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_12s\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_12s\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_12s\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_12s\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_12s\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_12s\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_12s\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12s\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12s\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_12s\_ p{margin:0;}#chatgpt-mermaid-\_r_12s\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_12s\_ .label text,#chatgpt-mermaid-\_r_12s\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ .node rect,#chatgpt-mermaid-\_r_12s\_ .node circle,#chatgpt-mermaid-\_r_12s\_ .node ellipse,#chatgpt-mermaid-\_r_12s\_ .node polygon,#chatgpt-mermaid-\_r_12s\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .rough-node .label text,#chatgpt-mermaid-\_r_12s\_ .node .label text,#chatgpt-mermaid-\_r_12s\_ .image-shape .label,#chatgpt-mermaid-\_r_12s\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_12s\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .rough-node .label,#chatgpt-mermaid-\_r_12s\_ .node .label,#chatgpt-mermaid-\_r_12s\_ .image-shape .label,#chatgpt-mermaid-\_r_12s\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_12s\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_12s\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12s\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12s\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_12s\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_12s\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_12s\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_12s\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_12s\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_12s\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_12s\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_12s\_ .icon-shape,#chatgpt-mermaid-\_r_12s\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_12s\_ .icon-shape p,#chatgpt-mermaid-\_r_12s\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_12s\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_12s\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_12s\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_12s\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_12s\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_12s\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_12s\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_12s\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_12s\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12s\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_12s\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_12s\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_12s\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_12s\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_12s\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_12s\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .node rect,#chatgpt-mermaid-\_r_12s\_ .node circle,#chatgpt-mermaid-\_r_12s\_ .node ellipse,#chatgpt-mermaid-\_r_12s\_ .node polygon,#chatgpt-mermaid-\_r_12s\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_12s\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_12s\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_12s\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_12s\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_12s\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện trong Play ModeKiểm tra ConsoleKiểm tra GameObject,Component và InputXác định nguyên nhân khảnghiChỉ thay đổi một yếu tốChạy thử lần nữaLỗi đã được sửa?Ghi lại kết quảCóChưa

Quy trình này giúp phân biệt lỗi do code, cấu hình dự án hay trạng thái của đối tượng. Việc sửa từng yếu tố một cũng giúp xác định chính xác thay đổi nào đã giải quyết vấn đề.

## 9. Bài tập thực hành

### Bài tập 1 — Điều khiển một chiều

Yêu cầu: Tạo một Cube điều khiển bằng A và D.

Tiêu chí hoàn thành:

- Cube di chuyển theo trục X.
- Tốc độ được cấu hình trong Inspector.
- Cube dừng khi thả phím.
- Code sử dụng `Time.deltaTime`.

### Bài tập 2 — Điều khiển hai chiều

Yêu cầu: Mở rộng để Cube di chuyển trên mặt phẳng XZ.

Tiêu chí hoàn thành:

- Sử dụng được W/A/S/D.
- Tốc độ di chuyển chéo không lớn hơn tốc độ đi thẳng.
- Đối tượng giữ nguyên độ cao Y.

### Bài tập 3 — Giới hạn bản đồ

Yêu cầu: Tạo vùng di chuyển có ranh giới.

Tiêu chí hoàn thành:

- X được giới hạn từ -5 đến 5.
- Z được giới hạn từ -4 đến 4.
- Nhân vật không thể đưa tâm ra khỏi phạm vi.
- Có thể di chuyển trở lại sau khi chạm biên.

### Bài tập 4 — Kiểm thử và ghi nhận kết quả

Thay đổi `Speed` lần lượt thành `2`, `4` và `8`, sau đó quan sát chuyển động.

Ghi kết quả vào bảng:

| Speed | Dự đoán    | Kết quả quan sát |
| ----- | ---------- | ---------------- |
| 2     | Chậm       | Tự điền          |
| 4     | Trung bình | Tự điền          |
| 8     | Nhanh      | Tự điền          |

Thực hiện thêm thử nghiệm ở những điều kiện FPS khác nhau và quan sát quãng đường di chuyển trong cùng một khoảng thời gian. Kết quả có thể có sai lệch nhỏ do thời gian đo và số frame thực tế.

## 10. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Vì sao cần nhân tốc độ di chuyển với Time.deltaTime?

A. Để tăng FPS của game

B. Để tính khoảng cách di chuyển theo thời gian của frame

C. Để tự động phát hiện va chạm

D. Để chuyển từ tọa độ World sang Local

Câu 2. Khi gọi Input.GetAxisRaw("Horizontal") và nhấn A trong cấu hình Input Manager mặc định, giá trị thường nhận được là bao nhiêu?

A. -1

B. 0

C. 0.5

D. 1

Câu 3. Vì sao cần giới hạn độ lớn vector hướng khi người chơi nhấn đồng thời W và D?

A. Để tăng độ cao của nhân vật

B. Để giảm số lần gọi Update

C. Để tránh tốc độ đi chéo vượt tốc độ đi thẳng

D. Để tự động kích hoạt Rigidbody

Câu 4. Cách nào phù hợp để giới hạn tọa độ X của nhân vật trong khoảng -5 đến 5?

A. Time.deltaTime = 5

B. transform.localScale = Vector3.one

C. Input.GetAxisRaw("Horizontal")

D. newPosition.x = Mathf.Clamp(newPosition.x, -5f, 5f)

Câu 5. Nếu Unity chỉ bật Input System mới nhưng script vẫn gọi Input.GetAxisRaw(), hướng xử lý nào phù hợp?

A. Tăng giá trị Speed

B. Cấu hình Input Manager cũ hoặc Both, hoặc chuyển code sang Input Actions

C. Xóa Transform khỏi GameObject

D. Chuyển mọi lệnh từ Update sang Start

Chấm điểmLàm lại

## 11. Checklist hoàn thành

Tiến độ học tập

0/9

Tạo được GameObject Player trong Scene

Tạo và gắn được SimpleMover vào Player

Điều khiển được đối tượng bằng phím A/D

Mở rộng điều khiển thành W/A/S/D

Áp dụng Time.deltaTime

Giới hạn tọa độ bằng Mathf.Clamp()

Phân biệt được Transform và Rigidbody

Kiểm tra được cấu hình Input của dự án

Hoàn thành bài tập và câu hỏi ôn tập

## 12. Tổng kết

Movement Script là một trong những kỹ năng nền tảng khi bắt đầu lập trình game với Unity.

Thông qua bài học, chúng ta đã xây dựng được một cơ chế điều khiển đơn giản với các thành phần:

| Thành phần              | Vai trò                                   |
| ----------------------- | ----------------------------------------- |
| `Input.GetAxisRaw()`    | Đọc hướng điều khiển                      |
| `Vector3`               | Biểu diễn hướng và vị trí                 |
| `Update()`              | Cập nhật hành vi theo frame               |
| `Time.deltaTime`        | Tính chuyển động theo thời gian           |
| `Transform.Translate()` | Dịch chuyển GameObject                    |
| `Mathf.Clamp()`         | Giới hạn giá trị tọa độ                   |
| `[SerializeField]`      | Cho phép cấu hình giá trị trong Inspector |

Điểm quan trọng nhất của bài học là phân biệt tốc độ theo giây với khoảng cách di chuyển trong mỗi frame, đồng thời hiểu rằng việc thay đổi `Transform` trực tiếp không đồng nghĩa với chuyển động được hệ thống vật lý điều khiển.

Sau khi nắm vững kiến thức này, người học có nền tảng để phát triển các cơ chế điều khiển nhân vật phức tạp hơn trong Unity.

Tham khảo: [Unity Learn — Programming Essentials](https://learn.unity.com/pathway/unity-essentials/unit/programming-essentials?version=6.3\&utm_source=chatgpt.com).