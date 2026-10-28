# Bài 02 — Lesson 3.1: Jump Force

Junior Programmer · Unit 3: Sound and Effects · Unity 6.3

Tutorial

Bài 02

Vật lý 3D

> Nguồn tham khảo: [Unity Learn — Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)
>
> Lưu ý: Đây là bài học tiếng Việt tự biên soạn dựa trên chủ đề và đề mục công khai, không phải bản dịch chính thức hoặc bản ghi video của Unity. Ví dụ thực hành có thể khác dự án gốc.

## 1. Tổng quan bài học

Trong Unity, nhân vật có thể nhảy lên, rơi xuống và tiếp đất nhờ hệ thống vật lý.

Ở bài Lesson 3.1 — Jump Force, chúng ta sẽ tìm hiểu cách sử dụng `Rigidbody`, `Collider` và `AddForce()` để tác động lực lên GameObject.

Mô hình minh họa nguyên lý nhảy

Minh họa khái niệm, không biểu diễn quỹ đạo vật lý chính xác theo tỉ lệ.

### Mục tiêu học tập

Sau bài học, bạn có thể:

- Giải thích vai trò của `Rigidbody` và `Collider` trong Unity.
- Sử dụng `Rigidbody.AddForce()` để tác động lực nhảy.
- Phân biệt lực nhảy, trọng lực và phản ứng va chạm.
- Thử nghiệm các tham số vật lý trong Inspector.
- Phát hiện và xử lý những lỗi cơ bản liên quan đến vật lý 3D.

## 2. Kiến thức trọng tâm

### 2.1. Rigidbody là gì?

`Rigidbody` là Component cho phép GameObject tham gia mô phỏng vật lý 3D của Unity.

Khi GameObject có Rigidbody động, nó có thể:

- Chịu tác động của trọng lực.
- Nhận lực đẩy hoặc lực kéo.
- Thay đổi vận tốc khi chịu lực.
- Phản ứng với va chạm vật lý.

### 2.2. Collider là gì?

`Collider` xác định hình dạng va chạm của một đối tượng.

Ví dụ:

| Component          | Chức năng                           |
| ------------------ | ----------------------------------- |
| `Box Collider`     | Vùng va chạm hình hộp               |
| `Sphere Collider`  | Vùng va chạm hình cầu               |
| `Capsule Collider` | Vùng va chạm hình con nhộng         |
| `Mesh Collider`    | Vùng va chạm dựa trên lưới hình học |

Một GameObject có thể có Collider nhưng không có Rigidbody. Chẳng hạn, sàn nhà thường chỉ cần Collider vì không cần di chuyển theo mô phỏng vật lý.

### 2.3. AddForce() — Tác động lực

Phương thức `AddForce()` được sử dụng để tác động lực lên Rigidbody.

```
body.AddForce(Vector3.up * 5f, ForceMode.Impulse);
```

Giải thích:

| Thành phần          | Ý nghĩa                    |
| ------------------- | -------------------------- |
| `body`              | Tham chiếu đến Rigidbody   |
| `AddForce()`        | Phương thức tác động lực   |
| `Vector3.up`        | Hướng lên trên theo trục Y |
| `5f`                | Độ lớn lực hoặc xung lực   |
| `ForceMode.Impulse` | Áp dụng xung lực tức thời  |

### 2.4. Các chế độ ForceMode

| Chế độ           | Đặc điểm                                              | Ví dụ                          |
| ---------------- | ----------------------------------------------------- | ------------------------------ |
| `Force`          | Lực liên tục, phụ thuộc khối lượng                    | Đẩy xe                         |
| `Acceleration`   | Gia tốc, không phụ thuộc khối lượng                   | Tăng tốc nhân vật              |
| `Impulse`        | Xung lực tức thời, phụ thuộc khối lượng               | Nhảy, va đập                   |
| `VelocityChange` | Thay đổi vận tốc tức thời, không phụ thuộc khối lượng | Điều chỉnh tốc độ ngay lập tức |

Ghi nhớ: Khi dùng `ForceMode.Impulse`, cùng một xung lực sẽ khiến vật có khối lượng nhỏ thay đổi vận tốc nhiều hơn vật có khối lượng lớn.

### 2.5. Vật lý và vòng đời Unity

Các phương thức thường gặp:

| Phương thức          | Vai trò                                               |
| -------------------- | ----------------------------------------------------- |
| `Awake()`            | Khởi tạo và lấy Component                             |
| `Update()`           | Kiểm tra input và logic theo frame                    |
| `FixedUpdate()`      | Xử lý các tác động vật lý theo bước thời gian cố định |
| `OnCollisionEnter()` | Nhận sự kiện bắt đầu va chạm                          |
| `OnTriggerEnter()`   | Nhận sự kiện bắt đầu đi vào vùng Trigger              |

Sơ đồ mối quan hệ

\#chatgpt-mermaid-\_r_kp\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_kp\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_kp\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_kp\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_kp\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_kp\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_kp\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_kp\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_kp\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_kp\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kp\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kp\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_kp\_ p{margin:0;}#chatgpt-mermaid-\_r_kp\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_kp\_ .label text,#chatgpt-mermaid-\_r_kp\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ .node rect,#chatgpt-mermaid-\_r_kp\_ .node circle,#chatgpt-mermaid-\_r_kp\_ .node ellipse,#chatgpt-mermaid-\_r_kp\_ .node polygon,#chatgpt-mermaid-\_r_kp\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .rough-node .label text,#chatgpt-mermaid-\_r_kp\_ .node .label text,#chatgpt-mermaid-\_r_kp\_ .image-shape .label,#chatgpt-mermaid-\_r_kp\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_kp\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .rough-node .label,#chatgpt-mermaid-\_r_kp\_ .node .label,#chatgpt-mermaid-\_r_kp\_ .image-shape .label,#chatgpt-mermaid-\_r_kp\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_kp\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_kp\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kp\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kp\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_kp\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_kp\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kp\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kp\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_kp\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_kp\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_kp\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_kp\_ .icon-shape,#chatgpt-mermaid-\_r_kp\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_kp\_ .icon-shape p,#chatgpt-mermaid-\_r_kp\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_kp\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_kp\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_kp\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_kp\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_kp\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_kp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_kp\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_kp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_kp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kp\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_kp\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_kp\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_kp\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_kp\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_kp\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_kp\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .node rect,#chatgpt-mermaid-\_r_kp\_ .node circle,#chatgpt-mermaid-\_r_kp\_ .node ellipse,#chatgpt-mermaid-\_r_kp\_ .node polygon,#chatgpt-mermaid-\_r_kp\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_kp\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_kp\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_kp\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_kp\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_kp\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}GameObject: PlayerRigidbodyColliderJump ScriptAddForceVật thể chuyển độngPhát hiện va chạmTiếp đất

## 3. Thực hành trong Unity

### Bước 1 — Tạo Scene thử nghiệm

1. Mở Unity và tạo một Scene 3D.
2. Chọn GameObject → 3D Object → Sphere.
3. Đặt tên đối tượng là `Player`.
4. Tạo một `Plane` làm mặt sàn.
5. Đưa Sphere lên trên Plane để vật thể có khoảng trống rơi xuống.

[RigidBody — Documentation Formation Unity 1 1](https://images.openai.com/static-rsc-4/zmJqE9b5AZxbBydmSm79g1nD5MEt6REGZ9h_F1jSplqAG4Gs3aLbG1-90TuKB0oEoyHWTSwdQp4mBjn3QxqHAfncC3wlOuRbu1TzSjn0mnDqKBDs9vQU8lEjamRGbSDcqzundf8ze4HTwbQghe_HSgFNCp2k-Jf2TjknsrXZ9oc?purpose=inline)

Minh họa bố trí Sphere và Plane.

[Use components - Unity 手册](https://images.openai.com/static-rsc-4/F7bIvIygRw2zeZE8URft7DxAMCE9r90NnA1ZtSwAQY4-BZucrl6E23ojuuy8i2CTwoDhD6R5Dv35kOG1w7pJj0VER2obYEfe876NzujhtnPoxytFB1JhvES0xzD38HrbgjWruDt9PSik7KVCt34L2SexHYISuxe5dXnJdSXztw0?purpose=inline)

Minh họa các thuộc tính Rigidbody.

### Bước 2 — Thiết lập Rigidbody

Chọn `Player`, sau đó vào:

Inspector → Add Component → Rigidbody

Thiết lập ban đầu:

| Thuộc tính      | Giá trị |
| --------------- | ------- |
| Mass            | `1`     |
| Use Gravity     | Bật     |
| Is Kinematic    | Tắt     |
| Linear Damping  | `0`     |
| Angular Damping | `0.05`  |

Các giá trị này phù hợp cho thử nghiệm đơn giản và có thể được điều chỉnh.

### Bước 3 — Tạo script BounceOnce

Tạo C# Script tên `BounceOnce.cs` và nhập:

```

using UnityEngine;

public class BounceOnce : MonoBehaviour
{
    [SerializeField] private float impulse = 5f;

    private Rigidbody body;

    void Awake()
    {
        body = GetComponent<Rigidbody>();
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

Giải thích mã nguồn:

- `[SerializeField]`: Cho phép chỉnh `impulse` trong Inspector.
- `GetComponent<Rigidbody>()`: Lấy Rigidbody trên cùng GameObject.
- `Bounce()`: Hàm thực hiện hành động bật nhảy.
- `ForceMode.Impulse`: Áp dụng xung lực tức thời.

Hàm `Bounce()` chưa tự chạy. Cần được gọi từ một sự kiện hoặc script điều khiển khác.

### Bước 4 — Thêm điều khiển nhảy bằng bàn phím

Để Sphere có thể nhảy bằng phím Space, có thể mở rộng script như sau.

Ví dụ hỗ trợ cả Input System mới và Input Manager cũ tùy cấu hình dự án:

```

using UnityEngine;

#if ENABLE_INPUT_SYSTEM
using UnityEngine.InputSystem;
#endif

[RequireComponent(typeof(Rigidbody))]
public class PlayerJump : MonoBehaviour
{
    [SerializeField] private float jumpImpulse = 5f;

    private Rigidbody body;
    private bool jumpRequested;

    void Awake()
    {
        body = GetComponent<Rigidbody>();
    }

    void Update()
    {
#if ENABLE_INPUT_SYSTEM
        if (Keyboard.current != null &&
            Keyboard.current.spaceKey.wasPressedThisFrame)
        {
            jumpRequested = true;
        }
#elif ENABLE_LEGACY_INPUT_MANAGER
        if (Input.GetKeyDown(KeyCode.Space))
        {
            jumpRequested = true;
        }
#endif
    }

    void FixedUpdate()
    {
        if (!jumpRequested) return;

        body.AddForce(
            Vector3.up * jumpImpulse,
            ForceMode.Impulse
        );

        jumpRequested = false;
    }
}

```

Gắn `PlayerJump` vào Sphere, sau đó nhấn Play → Space để thử nghiệm. Nếu đã sử dụng script này, không cần gắn đồng thời `BounceOnce`.

Lưu ý: Đây là phiên bản cơ bản, chưa kiểm tra nhân vật đang đứng trên mặt đất. Vì vậy, người chơi vẫn có thể nhảy nhiều lần trên không. Kiểm tra `isGrounded` sẽ là một bước mở rộng phù hợp.

### Bước 5 — Thử nghiệm các tham số

Phiếu kiểm chứng trong Unity

0/4

Mass: `{t.value}`

Dự đoán: Cùng một xung lực tạo ra độ thay đổi vận tốc nhỏ hơn.

Use Gravity: `{t.value}`

Dự đoán: Vật không còn chịu gia tốc trọng trường mặc định.

Jump Impulse: `{t.value}`

Dự đoán: Vật được đẩy lên với vận tốc ban đầu lớn hơn.

Is Trigger: `{t.value}`

Dự đoán: Collider không còn tạo phản ứng chặn vật lý thông thường.

&#x20;Làm lại thử nghiệm

## 4. Va chạm và Trigger

Hai loại sự kiện cần phân biệt:

Collision: Hai Collider thông thường tương tác và có thể tạo phản ứng vật lý.

Trigger: Collider có bật `Is Trigger` dùng để phát hiện đối tượng đi vào vùng, thay vì tạo phản ứng va chạm chặn vật.

Ví dụ xử lý sự kiện:

```
void OnCollisionEnter(Collision collision)
{
    Debug.Log("Collision: " + collision.gameObject.name);
}

void OnTriggerEnter(Collider other)
{
    Debug.Log("Trigger: " + other.gameObject.name);
}
```

Các callback chỉ được gọi khi thỏa mãn điều kiện của hệ thống vật lý, bao gồm cấu hình Collider và Rigidbody phù hợp.

## 5. Bài tập củng cố

### Bài tập A — Cơ bản

Tạo Sphere có Rigidbody và làm cho vật bật lên khi nhận lệnh nhảy.

Yêu cầu: Quan sát sự thay đổi vị trí, vận tốc và tác động của trọng lực.

### Bài tập B — Vận dụng

Thử ba giá trị `jumpImpulse`: `3`, `5`, `10`.

Ghi chép kết quả:

| Xung lực | Dự đoán          | Kết quả thực tế |
| -------- | ---------------- | --------------- |
| 3        | Nhảy thấp        | ...             |
| 5        | Nhảy cao hơn     | ...             |
| 10       | Nhảy cao hơn nữa | ...             |

Giữ nguyên Mass và các điều kiện khác để phép so sánh có ý nghĩa.

### Bài tập C — Mở rộng

Tạo một nhân vật có thể:

- Nhấn Space để nhảy.
- Không thể nhảy tiếp khi còn ở trên không.
- Nhảy lại khi đã tiếp đất.
- Phát âm thanh hoặc hiệu ứng khi nhảy.

Đây là bài tập vận dụng liên quan đến chủ đề Sound and Effects.

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng            | Nguyên nhân có thể                                             | Cách kiểm tra                                   |
| --------------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| Nhân vật không nhảy   | Chưa gọi hàm nhảy hoặc thiếu Rigidbody                         | Kiểm tra script, Console và Inspector           |
| Sphere xuyên qua sàn  | Thiếu Collider, bật Trigger hoặc cấu hình va chạm chưa phù hợp | Kiểm tra Collider của sàn và Sphere             |
| Nhân vật bay quá cao  | Xung lực quá lớn                                               | Giảm `jumpImpulse`                              |
| Không nhận phím Space | Input Handling không phù hợp với mã                            | Kiểm tra Project Settings → Player              |
| Không nhận callback   | Dùng nhầm 2D/3D hoặc thiếu điều kiện vật lý                    | Kiểm tra Rigidbody, Collider và chữ ký callback |

### Quy trình Debug

\#chatgpt-mermaid-\_r_lk\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_lk\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lk\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_lk\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_lk\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_lk\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_lk\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_lk\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_lk\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_lk\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lk\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lk\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_lk\_ p{margin:0;}#chatgpt-mermaid-\_r_lk\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_lk\_ .label text,#chatgpt-mermaid-\_r_lk\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ .node rect,#chatgpt-mermaid-\_r_lk\_ .node circle,#chatgpt-mermaid-\_r_lk\_ .node ellipse,#chatgpt-mermaid-\_r_lk\_ .node polygon,#chatgpt-mermaid-\_r_lk\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .rough-node .label text,#chatgpt-mermaid-\_r_lk\_ .node .label text,#chatgpt-mermaid-\_r_lk\_ .image-shape .label,#chatgpt-mermaid-\_r_lk\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_lk\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .rough-node .label,#chatgpt-mermaid-\_r_lk\_ .node .label,#chatgpt-mermaid-\_r_lk\_ .image-shape .label,#chatgpt-mermaid-\_r_lk\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_lk\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_lk\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lk\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lk\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_lk\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lk\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lk\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lk\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_lk\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_lk\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_lk\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_lk\_ .icon-shape,#chatgpt-mermaid-\_r_lk\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_lk\_ .icon-shape p,#chatgpt-mermaid-\_r_lk\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_lk\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_lk\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_lk\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_lk\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_lk\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_lk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_lk\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_lk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_lk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lk\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_lk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_lk\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lk\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_lk\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_lk\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_lk\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .node rect,#chatgpt-mermaid-\_r_lk\_ .node circle,#chatgpt-mermaid-\_r_lk\_ .node ellipse,#chatgpt-mermaid-\_r_lk\_ .node polygon,#chatgpt-mermaid-\_r_lk\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_lk\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_lk\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_lk\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_lk\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_lk\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện trong Play ModeĐọc ConsoleKiểm tra Rigidbody, Collider,ScriptXác định một nguyên nhânSửa và chạy thửHoạt động đúng?Ghi nhận kết quảChưaRồi

## 7. Câu hỏi tự kiểm tra

1\. Component nào giúp Sphere chịu tác động của lực vật lý?

A. Transform

B. Rigidbody

C. Camera

D. AudioSource

2\. ForceMode nào tạo xung lực tức thời?

A. Force

B. Acceleration

C. Impulse

D. Không có chế độ nào

3\. Nên đọc thao tác nhấn phím một lần trong hàm nào?

A. Awake()

B. Update()

C. OnDestroy()

D. OnCollisionExit()

4\. Khi bật Is Trigger cho Collider, điều gì xảy ra?

A. Vật tự có trọng lực

B. Collider không còn chặn vật bằng phản ứng va chạm thông thường

C. Rigidbody bị xóa

D. Vật luôn biến mất

5\. Khi tăng Mass nhưng giữ nguyên xung lực Impulse, kết quả nào thường đúng?

A. Độ thay đổi vận tốc giảm

B. Độ thay đổi vận tốc tăng

C. Vận tốc luôn giữ nguyên

D. Collider biến mất

Chấm điểm

Làm lại

## 8. Checklist hoàn thành bài học

Tiến độ học tập

0/8

Giải thích được Rigidbody và Collider.

Hiểu cách sử dụng AddForce và ForceMode.Impulse.

Tạo được Scene vật lý đơn giản.

Lập trình Sphere nhảy bằng phím Space.

Thử nghiệm ít nhất hai giá trị lực nhảy.

Phát hiện và giải thích ít nhất một lỗi.

Lưu một ảnh hoặc video minh chứng kết quả.

Đối chiếu bài học với Unity Learn.

## 9. Tổng kết

Sau bài học, cần nắm được mối quan hệ cơ bản:

Input → Script → AddForce → Rigidbody → Chuyển động → Va chạm.

`Rigidbody` xử lý chuyển động vật lý, `Collider` xác định vùng va chạm, còn `AddForce()` cho phép lập trình viên tác động lực lên đối tượng.

Đây là nền tảng để phát triển cơ chế nhảy, đẩy vật thể, va chạm với môi trường và kết hợp âm thanh hoặc hiệu ứng hình ảnh.

Tài liệu đối chiếu: [Unity Learn — Junior Programmer: Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)

Ghi chú: Hướng dẫn được biên soạn độc lập cho Unity 6.3. Giao diện, tên thuộc tính và cấu hình Input có thể khác giữa các phiên bản hoặc loại dự án.