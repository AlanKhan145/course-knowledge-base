# Bài 05 — Lesson 2.4: Collision Decisions

Pathway: Junior Programmer Mission: Basic Gameplay Loại bài học: Tutorial Phiên bản: Unity 6.3 Chủ đề: Physics, Collision, Rigidbody và Trigger

Tài liệu tham khảo: [Unity Learn — Basic Gameplay](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong quá trình phát triển game, các đối tượng không chỉ di chuyển mà còn phải tương tác với môi trường và với nhau.

Ví dụ:

- Một quả bóng rơi xuống mặt đất và bật nảy.
- Nhân vật va chạm với bức tường và không thể đi xuyên qua.
- Người chơi đi vào khu vực nhận vật phẩm.
- Một viên đạn chạm mục tiêu và kích hoạt hiệu ứng.
- Một con vật di chuyển đến vùng giới hạn và cần được xử lý.

Để xây dựng những hành vi này, Unity cung cấp hệ thống Physics, cho phép mô phỏng lực, trọng lực và phát hiện va chạm.

Trong bài học Collision Decisions, chúng ta sẽ tìm hiểu cách Unity xác định khi nào hai đối tượng va chạm và cách lập trình phản ứng tương ứng.

### Kết quả mong đợi

Sau bài học, bạn sẽ xây dựng được một scene đơn giản gồm:

- Một quả cầu chịu tác động của trọng lực.
- Một mặt sàn có khả năng ngăn quả cầu rơi xuyên qua.
- Một vùng Trigger để phát hiện khi quả cầu đi vào.
- Một script phát hiện va chạm và làm quả cầu bật lên một lần.
- Các thông báo Console giúp quan sát và kiểm tra sự kiện vật lý.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, bạn có thể:

1. Giải thích vai trò của `Collider` và `Rigidbody` trong hệ thống vật lý 3D.
2. Phân biệt va chạm vật lý thông thường với sự kiện `Trigger`.
3. Cấu hình các thuộc tính `Mass`, `Use Gravity` và `Is Trigger`.
4. Sử dụng `OnCollisionEnter()` và `OnTriggerEnter()` để phát hiện tương tác giữa các GameObject.
5. Áp dụng `AddForce()` và `ForceMode.Impulse` để thay đổi chuyển động.
6. Kiểm tra và sửa những lỗi va chạm thường gặp trong Unity Editor.

## 3. Kiến thức nền tảng

### 3.1. Physics trong Unity là gì?

Physics là hệ thống mô phỏng các hiện tượng vật lý trong game, bao gồm trọng lực, lực tác động, chuyển động và va chạm.

Chẳng hạn, khi một quả cầu có `Rigidbody` được đặt phía trên mặt sàn, trọng lực sẽ khiến quả cầu rơi xuống. Nếu mặt sàn có `Collider` phù hợp, quả cầu sẽ bị ngăn lại thay vì đi xuyên qua.

Mô phỏng quả cầu chịu trọng lực và tương tác với mặt sàn.

Unity sử dụng các Component gắn trên GameObject để quyết định đối tượng có tham gia hệ thống vật lý hay không.

| Component       | Vai trò                                                 |
| --------------- | ------------------------------------------------------- |
| `Collider`      | Xác định hình dạng và vùng có thể phát hiện va chạm     |
| `Rigidbody`     | Cho phép đối tượng tham gia mô phỏng chuyển động vật lý |
| `Transform`     | Lưu vị trí, góc xoay và tỉ lệ                           |
| `MonoBehaviour` | Cho phép lập trình hành vi bằng script C#               |

### 3.2. Collider — Thành phần phát hiện va chạm

`Collider` xác định hình dạng vật lý của GameObject.

Unity cung cấp nhiều loại Collider 3D:

| Loại Collider      | Trường hợp sử dụng                       |
| ------------------ | ---------------------------------------- |
| `Box Collider`     | Hộp, tường, vật thể hình khối            |
| `Sphere Collider`  | Bóng, quả cầu, vật thể gần hình cầu      |
| `Capsule Collider` | Nhân vật hoặc đối tượng dạng trụ bo tròn |
| `Mesh Collider`    | Vật thể có hình dạng phức tạp            |

Một GameObject có Collider không nhất thiết phải có Rigidbody.

Ví dụ, mặt sàn có thể chỉ cần Collider vì nó không cần di chuyển theo mô phỏng vật lý. Ngược lại, quả cầu cần Rigidbody để chịu tác động của trọng lực.

### 3.3. Rigidbody — Thành phần mô phỏng vật lý

`Rigidbody` cho phép đối tượng chịu ảnh hưởng của các lực trong môi trường Unity.

Những thuộc tính quan trọng:

| Thuộc tính        | Ý nghĩa                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `Mass`            | Khối lượng của đối tượng                                                                     |
| `Use Gravity`     | Bật hoặc tắt tác động của trọng lực                                                          |
| `Is Kinematic`    | Cho phép điều khiển đối tượng mà không để lực và va chạm thông thường quyết định chuyển động |
| `Linear Damping`  | Giảm dần vận tốc tuyến tính                                                                  |
| `Angular Damping` | Giảm dần vận tốc quay                                                                        |

Ví dụ: Khi tăng `Mass` của quả cầu, cùng một xung lực sẽ tạo ra mức thay đổi vận tốc nhỏ hơn.

Có thể diễn giải bằng công thức:

\\[ \Delta v=\frac{J}{m} \\]

Trong đó:

- \\(\Delta v\\): mức thay đổi vận tốc.
- \\(J\\): xung lực tác động.
- \\(m\\): khối lượng đối tượng.

Công thức này mô tả trường hợp áp dụng xung lực; nó không có nghĩa vật nặng luôn rơi nhanh hơn vật nhẹ trong cùng điều kiện trọng lực.

### 3.4. Phân biệt Collision và Trigger

Đây là hai cơ chế quan trọng nhất của bài học.

Collision

Phát hiện tiếp xúc và có thể tạo phản ứng vật lý như ngăn xuyên qua hoặc bật nảy.

Trigger

Phát hiện sự đi vào vùng Collider mà không tạo phản ứng chặn vật lý từ chính Trigger đó.

| Tiêu chí                   | Collision                   | Trigger                                |
| -------------------------- | --------------------------- | -------------------------------------- |
| Phát hiện tương tác        | Có                          | Có                                     |
| Có phản ứng va chạm vật lý | Có thể có                   | Không                                  |
| Cần bật `Is Trigger`       | Không                       | Có                                     |
| Callback khi bắt đầu       | `OnCollisionEnter()`        | `OnTriggerEnter()`                     |
| Ứng dụng                   | Tường, sàn, chướng ngại vật | Vùng nhận thưởng, cổng, vùng kích hoạt |

Lưu ý: Việc phát sinh callback phụ thuộc vào cấu hình Collider, Rigidbody và các điều kiện vật lý liên quan. Không phải mọi cặp Collider chạm nhau đều tự động phát sinh sự kiện.

## 4. Cơ chế xử lý va chạm

Khi hai đối tượng tương tác, Unity xác định loại Collider và điều kiện mô phỏng vật lý để quyết định cách xử lý.

\#chatgpt-mermaid-\_r_mb\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mb\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mb\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mb\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mb\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mb\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mb\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mb\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mb\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mb\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mb\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mb\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mb\_ p{margin:0;}#chatgpt-mermaid-\_r_mb\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mb\_ .label text,#chatgpt-mermaid-\_r_mb\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ .node rect,#chatgpt-mermaid-\_r_mb\_ .node circle,#chatgpt-mermaid-\_r_mb\_ .node ellipse,#chatgpt-mermaid-\_r_mb\_ .node polygon,#chatgpt-mermaid-\_r_mb\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .rough-node .label text,#chatgpt-mermaid-\_r_mb\_ .node .label text,#chatgpt-mermaid-\_r_mb\_ .image-shape .label,#chatgpt-mermaid-\_r_mb\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mb\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .rough-node .label,#chatgpt-mermaid-\_r_mb\_ .node .label,#chatgpt-mermaid-\_r_mb\_ .image-shape .label,#chatgpt-mermaid-\_r_mb\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mb\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mb\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mb\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mb\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mb\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mb\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mb\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mb\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mb\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mb\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mb\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mb\_ .icon-shape,#chatgpt-mermaid-\_r_mb\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mb\_ .icon-shape p,#chatgpt-mermaid-\_r_mb\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mb\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mb\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mb\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mb\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mb\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mb\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mb\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mb\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mb\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mb\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mb\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mb\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mb\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .node rect,#chatgpt-mermaid-\_r_mb\_ .node circle,#chatgpt-mermaid-\_r_mb\_ .node ellipse,#chatgpt-mermaid-\_r_mb\_ .node polygon,#chatgpt-mermaid-\_r_mb\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mb\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mb\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mb\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mb\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mb\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Hai Collider tương tácCó Collider được bật Is Trigger?Nhánh CollisionNhánh TriggerPhản ứng vật lý nếu cấu hìnhphù hợpOnCollisionEnterPhát hiện chồng lấn, khôngchặn vậtOnTriggerEnterXử lý logic gameplayKhôngCó

Sơ đồ trên mô tả hai trường hợp đơn giản có cấu hình đủ điều kiện phát sinh callback.

### 4.1. OnCollisionEnter()

`OnCollisionEnter()` được Unity gọi khi bắt đầu một tiếp xúc va chạm vật lý thỏa mãn điều kiện callback.

```
private void OnCollisionEnter(Collision collision)
{
    Debug.Log("Va chạm với: " + collision.gameObject.name);
}
```

Đối tượng `collision` chứa thông tin về tương tác, chẳng hạn GameObject tham gia va chạm và các điểm tiếp xúc.

### 4.2. OnTriggerEnter()

`OnTriggerEnter()` được gọi khi một Collider đi vào vùng Trigger trong cấu hình vật lý phù hợp.

```
private void OnTriggerEnter(Collider other)
{
    Debug.Log("Đi vào Trigger: " + other.gameObject.name);
}
```

Ví dụ, khi nhân vật đi vào vùng chứa vật phẩm, sự kiện Trigger có thể kích hoạt việc cộng điểm hoặc thu thập vật phẩm.

Ngoài sự kiện bắt đầu, Unity còn hỗ trợ:

| Collision          | Trigger          | Mục đích           |
| ------------------ | ---------------- | ------------------ |
| `OnCollisionEnter` | `OnTriggerEnter` | Bắt đầu tương tác  |
| `OnCollisionStay`  | `OnTriggerStay`  | Tiếp tục tương tác |
| `OnCollisionExit`  | `OnTriggerExit`  | Kết thúc tương tác |

## 5. Thực hành: Xây dựng hệ thống phát hiện va chạm

### 5.1. Chuẩn bị Scene

Tạo một Unity 3D Scene với ba GameObject:

1. `Ground`: mặt sàn.
2. `Ball`: quả cầu chịu trọng lực.
3. `TriggerZone`: khu vực phát hiện quả cầu đi qua.

Cấu trúc Hierarchy dự kiến:

```
SampleScene
├── Main Camera
├── Directional Light
├── Ground
├── Ball
└── TriggerZone
```

### 5.2. Bước 1 — Tạo mặt sàn

Trong Unity Editor:

1. Chọn `GameObject > 3D Object > Plane`.
2. Đổi tên thành `Ground`.
3. Đặt Position là `(0, 0, 0)`.
4. Kiểm tra Collider trên Plane.

Plane thường có `Mesh Collider` mặc định và không cần Rigidbody khi được sử dụng làm sàn cố định.

### 5.3. Bước 2 — Tạo quả cầu

Chọn `GameObject > 3D Object > Sphere` và đổi tên thành `Ball`.

Đặt Position:

```
X = 0
Y = 3
Z = 0
```

Kiểm tra `Sphere Collider`, sau đó thêm Component `Rigidbody`.

Thiết lập thử nghiệm:

| Thuộc tính                   | Giá trị  |
| ---------------------------- | -------- |
| Mass                         | 1        |
| Use Gravity                  | Enabled  |
| Is Kinematic                 | Disabled |
| Sphere Collider — Is Trigger | Disabled |

Nhấn Play. Quả cầu sẽ rơi xuống do trọng lực và tương tác với Collider của mặt sàn.

### 5.4. Bước 3 — Tạo Trigger Zone

Tạo một `Cube` và đổi tên thành `TriggerZone`.

Thiết lập mẫu:

```
Position: (0, 1.5, 0)
Scale:    (2, 1, 2)
```

Trong `Box Collider`, bật `Is Trigger`.

Vùng này được đặt trên đường rơi của Ball. Khi quả cầu đi qua, sự kiện Trigger có thể được phát hiện mà không làm quả cầu dừng lại.

Không bật `Is Trigger` trên Collider của Ball trong thử nghiệm chính, vì Ball vẫn cần va chạm vật lý với mặt sàn.

## 6. Lập trình phản ứng va chạm bằng C\#

Tạo script C# tên `BounceOnce.cs`, sau đó gắn vào GameObject `Ball`.

```
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BounceOnce : MonoBehaviour
{
    [SerializeField] private float impulse = 5f;

    private Rigidbody body;
    private bool hasBounced = false;

    private void Awake()
    {
        body = GetComponent<Rigidbody>();
    }

    private void OnCollisionEnter(Collision collision)
    {
        Debug.Log("Va chạm với: " + collision.gameObject.name);

        if (!hasBounced &&
            collision.gameObject.name == "Ground")
        {
            Bounce();
            hasBounced = true;
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        Debug.Log("Đi vào Trigger: " + other.gameObject.name);
    }

    public void Bounce()
    {
        if (body != null)
        {
            body.AddForce(
                Vector3.up * impulse,
                ForceMode.Impulse
            );
        }
    }
}
```

### 6.1. Phân tích các thành phần chính

RequireComponent

```
[RequireComponent(typeof(Rigidbody))]
```

Yêu cầu GameObject có Component `Rigidbody`. Unity sẽ tự thêm Component cần thiết khi gắn script nếu chưa có.

GetComponent

```
body = GetComponent<Rigidbody>();
```

Lấy tham chiếu Rigidbody để script có thể điều khiển hành vi vật lý.

OnCollisionEnter

```
private void OnCollisionEnter(Collision collision)
```

Phát hiện sự kiện va chạm. Khi Ball tiếp xúc với GameObject tên `Ground`, script sẽ gọi `Bounce()` nếu quả cầu chưa bật nảy lần nào.

Trong dự án lớn, có thể sử dụng Tag hoặc Layer thay cho việc so sánh tên GameObject.

AddForce

```
body.AddForce(Vector3.up * impulse, ForceMode.Impulse);
```

Trong đó:

- `Vector3.up`: hướng lên trên theo trục Y.
- `impulse`: độ lớn xung lực.
- `ForceMode.Impulse`: áp dụng một xung lực tức thời, phù hợp với hành vi bật nảy.

hasBounced

```
private bool hasBounced = false;
```

Biến Boolean giúp giới hạn hành vi bật nảy chỉ xảy ra một lần trong lần chạy thử.

### 6.2. Luồng hoạt động

\#chatgpt-mermaid-\_r_q9\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_q9\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_q9\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_q9\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_q9\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_q9\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_q9\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_q9\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_q9\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_q9\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_q9\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_q9\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_q9\_ p{margin:0;}#chatgpt-mermaid-\_r_q9\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_q9\_ .label text,#chatgpt-mermaid-\_r_q9\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ .node rect,#chatgpt-mermaid-\_r_q9\_ .node circle,#chatgpt-mermaid-\_r_q9\_ .node ellipse,#chatgpt-mermaid-\_r_q9\_ .node polygon,#chatgpt-mermaid-\_r_q9\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .rough-node .label text,#chatgpt-mermaid-\_r_q9\_ .node .label text,#chatgpt-mermaid-\_r_q9\_ .image-shape .label,#chatgpt-mermaid-\_r_q9\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_q9\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .rough-node .label,#chatgpt-mermaid-\_r_q9\_ .node .label,#chatgpt-mermaid-\_r_q9\_ .image-shape .label,#chatgpt-mermaid-\_r_q9\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_q9\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_q9\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_q9\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_q9\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_q9\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_q9\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_q9\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_q9\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_q9\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_q9\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_q9\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_q9\_ .icon-shape,#chatgpt-mermaid-\_r_q9\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_q9\_ .icon-shape p,#chatgpt-mermaid-\_r_q9\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_q9\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_q9\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_q9\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_q9\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_q9\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_q9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_q9\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_q9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_q9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_q9\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_q9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_q9\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_q9\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_q9\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_q9\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_q9\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .node rect,#chatgpt-mermaid-\_r_q9\_ .node circle,#chatgpt-mermaid-\_r_q9\_ .node ellipse,#chatgpt-mermaid-\_r_q9\_ .node polygon,#chatgpt-mermaid-\_r_q9\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_q9\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_q9\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_q9\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_q9\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_q9\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Nhấn PlayBall rơi do GravityĐi vào TriggerZoneOnTriggerEnter ghi ConsoleBall tiếp tục rơiBall chạm GroundOnCollisionEnterhasBounced = false?AddForce hướng lênhasBounced = trueBall bật lên một lầnKhông thêm xung lựcCóKhông

Quy trình trên mô tả hành vi dự kiến trong scene thử nghiệm khi các Component được cấu hình đúng.

### 6.3. Kiểm tra kết quả

Mở `Window > General > Console` và nhấn Play.

Console dự kiến xuất hiện các thông báo tương tự:

```
Đi vào Trigger: TriggerZone
Va chạm với: Ground
```

Đồng thời quan sát Ball trong Game view. Quả cầu cần đi xuyên qua vùng Trigger, chạm mặt sàn và nhận một xung lực hướng lên.

## 7. Physics Material và lực tác động

### 7.1. Physics Material

Physics Material cho phép điều chỉnh cách bề mặt Collider phản ứng khi tiếp xúc.

Hai nhóm thuộc tính quan trọng:

| Thuộc tính | Tác dụng                          |
| ---------- | --------------------------------- |
| Friction   | Điều chỉnh ma sát giữa các bề mặt |
| Bounciness | Điều chỉnh độ nảy khi va chạm     |

Để thử nghiệm, tạo một Physics Material và gán vào Collider của Ball.

Có thể kiểm tra các tình huống như:

- Bounciness thấp: bề mặt ít nảy.
- Bounciness cao: bề mặt có xu hướng nảy mạnh hơn.
- Friction cao: khó trượt hơn trong các tình huống phù hợp.

Giá trị thực tế còn phụ thuộc vào những Collider cùng tương tác, chế độ kết hợp vật liệu và thiết lập vật lý.

Để quan sát riêng tác dụng của Physics Material, nên tạm thời vô hiệu hóa script `BounceOnce` nhằm tránh xung lực bổ sung làm sai lệch kết quả.

### 7.2. Update và FixedUpdate

Unity cung cấp hai phương thức thường gặp để xử lý logic:

| Phương thức     | Đặc điểm                               | Ứng dụng                                                  |
| --------------- | -------------------------------------- | --------------------------------------------------------- |
| `Update()`      | Gọi theo frame                         | Đọc Input, cập nhật logic từng frame                      |
| `FixedUpdate()` | Gọi theo bước thời gian vật lý cố định | Áp dụng lực liên tục, xử lý logic gắn với mô phỏng vật lý |

Đối với thao tác nhấn phím, thông thường nên phát hiện Input trong `Update()` và chuyển yêu cầu sang `FixedUpdate()` khi cần tác động vật lý.

Các callback va chạm như `OnCollisionEnter()` cũng phù hợp để áp dụng xung lực một lần khi sự kiện xảy ra; không bắt buộc phải chuyển mọi lời gọi `AddForce()` sang `FixedUpdate()`.

### 7.3. Fixed Timestep

Trong `Edit > Project Settings > Time`, tham số `Fixed Timestep` quyết định khoảng thời gian giữa các lần cập nhật mô phỏng vật lý.

Khi điều chỉnh:

- Bước thời gian nhỏ hơn có thể cải thiện độ phân giải thời gian mô phỏng nhưng tốn thêm chi phí xử lý.
- Bước thời gian lớn hơn giảm số lần cập nhật vật lý nhưng có thể làm kết quả kém chính xác trong một số tình huống.

Chỉ nên thay đổi từng tham số, chạy lại cùng một thử nghiệm và ghi nhận sự khác biệt.

## 8. Bài tập thực hành

### Bài tập 1 — Thay đổi khối lượng

Thực hiện ba lần thử với các giá trị Mass khác nhau.

| Lần thử | Mass | Impulse | Nhận xét |
| ------- | ---- | ------- | -------- |
| 1       | 1    | 5       | Tự ghi   |
| 2       | 2    | 5       | Tự ghi   |
| 3       | 5    | 5       | Tự ghi   |

Yêu cầu: Dự đoán quả cầu sẽ bật lên khác nhau thế nào khi khối lượng tăng nhưng xung lực giữ nguyên.

### Bài tập 2 — So sánh Trigger và Collision

Thực hiện hai trường hợp:

Trường hợp A: Ball sử dụng Collider thông thường và Rigidbody.

Trường hợp B: Bật `Is Trigger` trên Sphere Collider của Ball.

Quan sát sự khác biệt khi Ball tương tác với Ground và Console. Giải thích tại sao trong trường hợp B, Ball không còn được chính Collider đó ngăn lại như va chạm thông thường.

Sau thử nghiệm, khôi phục cấu hình ban đầu.

### Bài tập 3 — Xây dựng tương tác gameplay

Tạo một vùng Trigger có tên `ScoreZone`.

Khi Ball đi vào vùng này, chương trình cần:

1. Phát hiện sự kiện `OnTriggerEnter()`.
2. Ghi thông báo vào Console.
3. Tăng biến điểm số.
4. Không cộng điểm lặp lại khi Ball vẫn nằm trong vùng Trigger.

Mục tiêu: Vận dụng sự kiện vật lý vào cơ chế tính điểm của game.

## 9. Lỗi thường gặp và cách khắc phục

| Hiện tượng                    | Nguyên nhân có thể                                                      | Cách kiểm tra                                     |
| ----------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| Quả cầu không rơi             | Tắt Use Gravity hoặc bật Is Kinematic                                   | Kiểm tra Rigidbody                                |
| Quả cầu xuyên qua sàn         | Thiếu Collider, bật Is Trigger hoặc cấu hình va chạm sai                | Kiểm tra cả Ball và Ground                        |
| `OnCollisionEnter` không chạy | Không đủ điều kiện callback hoặc Collider đang ở chế độ Trigger         | Kiểm tra Rigidbody và Collider                    |
| `OnTriggerEnter` không chạy   | Chưa bật Is Trigger hoặc thiếu cấu hình Rigidbody cần thiết             | Kiểm tra hai GameObject                           |
| Xung lực không tác dụng       | Thiếu Rigidbody hợp lệ hoặc Rigidbody đang kinematic                    | Kiểm tra Component và Console                     |
| Không phát hiện va chạm       | Dùng nhầm hệ thống vật lý 2D/3D hoặc cấu hình Layer không cho tương tác | Kiểm tra loại Component và Layer Collision Matrix |

Phân biệt vật lý 2D và 3D:

- 3D: `Rigidbody`, `Collider`, `OnCollisionEnter`, `OnTriggerEnter`.
- 2D: `Rigidbody2D`, `Collider2D`, `OnCollisionEnter2D`, `OnTriggerEnter2D`.

Không được sử dụng lẫn callback của hai hệ thống.

### Quy trình Debug đề xuất

\#chatgpt-mermaid-\_r_r8\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_r8\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_r8\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_r8\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_r8\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_r8\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_r8\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_r8\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_r8\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_r8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r8\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r8\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_r8\_ p{margin:0;}#chatgpt-mermaid-\_r_r8\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_r8\_ .label text,#chatgpt-mermaid-\_r_r8\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ .node rect,#chatgpt-mermaid-\_r_r8\_ .node circle,#chatgpt-mermaid-\_r_r8\_ .node ellipse,#chatgpt-mermaid-\_r_r8\_ .node polygon,#chatgpt-mermaid-\_r_r8\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .rough-node .label text,#chatgpt-mermaid-\_r_r8\_ .node .label text,#chatgpt-mermaid-\_r_r8\_ .image-shape .label,#chatgpt-mermaid-\_r_r8\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_r8\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .rough-node .label,#chatgpt-mermaid-\_r_r8\_ .node .label,#chatgpt-mermaid-\_r_r8\_ .image-shape .label,#chatgpt-mermaid-\_r_r8\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_r8\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_r8\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r8\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r8\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_r8\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_r8\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r8\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r8\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_r8\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_r8\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_r8\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_r8\_ .icon-shape,#chatgpt-mermaid-\_r_r8\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_r8\_ .icon-shape p,#chatgpt-mermaid-\_r_r8\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_r8\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_r8\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_r8\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_r8\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_r8\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_r8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_r8\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_r8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_r8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r8\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_r8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_r8\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_r8\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_r8\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_r8\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_r8\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .node rect,#chatgpt-mermaid-\_r_r8\_ .node circle,#chatgpt-mermaid-\_r_r8\_ .node ellipse,#chatgpt-mermaid-\_r_r8\_ .node polygon,#chatgpt-mermaid-\_r_r8\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_r8\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_r8\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_r8\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_r8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_r8\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện hành vi saiTái hiện lỗi trong Play ModeKiểm tra ConsoleKiểm tra Rigidbody và ColliderKiểm tra Is Trigger, Layer vàscriptThay đổi một cấu hìnhChạy thử lạiĐã đúng?Ghi kết quả kiểm chứngChưaRồi

Việc thay đổi một yếu tố mỗi lần giúp xác định nguyên nhân chính xác hơn thay vì chỉnh nhiều tham số đồng thời.

## 10. Câu hỏi ôn tập

Kiểm tra kiến thức — 5 câu

0/5 đã trả lời

Câu 1. Một quả cầu cần rơi xuống và bị mặt sàn ngăn lại. Cấu hình nào phù hợp nhất?

A. Chỉ dùng Transform cho cả hai đối tượng

B. Ball có Rigidbody và Collider thường, sàn có Collider thường

C. Bật Is Trigger trên Ball và Ground

D. Chỉ thêm Rigidbody cho Ground

Câu 2. Bạn muốn tạo một vùng cộng điểm mà nhân vật có thể đi xuyên qua. Nên sử dụng cơ chế nào?

A. Collider với Is Trigger được bật và callback OnTriggerEnter

B. Collider thông thường để chặn nhân vật

C. Tăng Mass của nhân vật

D. Tắt Collider của vùng cộng điểm

Câu 3. Khi giữ nguyên xung lực nhưng tăng Mass của Rigidbody, điều gì thường xảy ra?

A. Quả cầu luôn bật cao hơn

B. Không có thay đổi vận tốc

C. Lực trọng trường bị vô hiệu hóa

D. Mức thay đổi vận tốc do xung lực giảm

Câu 4. Phương thức nào phù hợp nhất để áp dụng một lực liên tục theo các bước cập nhật vật lý?

A. Awake()

B. OnDestroy()

C. FixedUpdate()

D. Start()

Câu 5. Script sử dụng OnCollisionEnter2D nhưng GameObject có Rigidbody 3D và Sphere Collider 3D. Cách sửa nào đúng?

A. Chỉ thay đổi Mass

B. Sử dụng callback OnCollisionEnter dành cho vật lý 3D

C. Tăng Fixed Timestep

D. Chuyển Collider thành Trigger

Chấm điểmLàm lại

## 11. Checklist hoàn thành

Tiến độ bài học

0/8

Giải thích được sự khác biệt giữa Collider và Rigidbody.

Phân biệt được Collision và Trigger.

Tạo được scene gồm Ball, Ground và TriggerZone.

Sử dụng được OnCollisionEnter() và OnTriggerEnter().

Áp dụng được AddForce() để làm Ball bật lên.

Thử nghiệm Mass, Physics Material và Fixed Timestep.

Xác định được ít nhất một lỗi vật lý và cách khắc phục.

Hoàn thành 5 câu hỏi trắc nghiệm.

## 12. Tổng kết

Ba thành phần quan trọng nhất của bài học là `Collider`, `Rigidbody` và các callback phát hiện tương tác.

- Collider quyết định hình dạng vùng va chạm.
- Rigidbody cho phép đối tượng tham gia mô phỏng vật lý.
- Collision xử lý các tiếp xúc có phản ứng vật lý.
- Trigger phát hiện đối tượng đi vào vùng tương tác.
- AddForce() giúp tạo phản ứng chuyển động thông qua lực hoặc xung lực.
- Console và Inspector là hai công cụ cơ bản để kiểm tra và debug hành vi vật lý.

Khi kết hợp những kiến thức này, bạn có thể bắt đầu xây dựng các cơ chế gameplay như thu thập vật phẩm, phát hiện đạn trúng mục tiêu, xử lý chướng ngại vật và kích hoạt hiệu ứng khi nhân vật đi vào một khu vực.

Tài liệu học tập tiếng Việt tự biên soạn cho Unity 6.3. Các ví dụ thực hành được xây dựng độc lập để luyện tập kiến thức về va chạm và vật lý; không phải bản dịch chính thức của Unity Learn.