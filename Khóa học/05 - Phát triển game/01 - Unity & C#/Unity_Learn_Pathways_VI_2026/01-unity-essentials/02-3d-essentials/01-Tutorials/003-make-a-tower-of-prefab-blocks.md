# Bài 03 — Make a Tower of Prefab Blocks

Unity Essentials · 3D Essentials · Tutorial · Unity 6.3

Chủ đề: Tạo tháp bằng Prefab, mô phỏng vật lý 3D, va chạm và lực.

Tài liệu tham khảo: [Unity Learn — 3D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong Unity, các đối tượng 3D không tự động tuân theo trọng lực hoặc phản ứng khi va chạm. Để mô phỏng những hiện tượng như khối hộp rơi, quả bóng nảy lên hoặc một tòa tháp bị đổ, cần kết hợp các thành phần vật lý phù hợp.

Bài thực hành này xây dựng một tòa tháp từ các khối Prefab và sử dụng một quả bóng để thử nghiệm tương tác vật lý.

[My Balancing Primitive Objects Project - Unity Learn](https://images.openai.com/static-rsc-4/N73NuPFh1PTL9iIOR8Uq_WD9ZD_dLKTLGqAXdxJIa1dgvXq0joFRRKrbxHuuiOfaOHc384rkiHpDP2cAnmsZTbfVKKIUVlEFGTj8swrXvefhWSHD6Gw0YiJySwy-4x3hznypFfDAQIYGe2xp70CP6V3E4dCncKdQPY72-kXLsUs?purpose=inline)

[Unityとゲーム制作のスキルを習得する2つの教材、Unity技術者認定コースウェアの提供および「あそびのデザイン講座」の提供を発表（ユニティ・テクノロジーズ・ジャパン）](https://images.openai.com/static-rsc-4/FPDJaq47RKsMLgpshkR4t17cz8ZIqSFIJclIGITCsRstC1fFb43W-lqDrwuouRyfRSjR-EniKV8EgnKlw4odkwXQuQWT0VC5wRvSWJNxwJzFsU0bd-fgxG5k8dnMSesfGyy-rZLwyAsDcHZL4VInSBCBHSu64mujnntgKA--Cy8?purpose=inline)

[Físicas y materiales | Curso Unity desde cero | Hektor Profe](https://images.openai.com/static-rsc-4/O3skBgPeyJcQi-O23uk0Y_JmfDmEeoZv8v_C8BKDpGCAoZISn3jK8yLxvbSNFKHYGpr-56pEhfCVMS-XUnikJs8_LDDcX20FF8CKOwD2M3tqMgrIGwhmhx5INoIsVi3rQ3-Z6t87otwepHCm8TOHkhYp1asuPcaVp_iaFqQcXHk?purpose=inline)

8

Thông qua bài học, người học sẽ làm quen với bốn khái niệm quan trọng:

- Prefab: Mẫu GameObject có thể tái sử dụng.
- Collider: Xác định hình dạng tham gia va chạm.
- Rigidbody: Cho phép đối tượng chịu tác động của hệ thống vật lý.
- Force: Tác động lực để thay đổi chuyển động của đối tượng.

Kết quả cần đạt: Một Scene có sàn, tháp gồm nhiều khối Prefab và một quả bóng có khả năng tương tác vật lý với tháp.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Tạo một GameObject 3D và chuyển thành Prefab để tái sử dụng.
2. Phân biệt chức năng của `Collider` và `Rigidbody`.
3. Cấu hình `Mass`, `Use Gravity` và `Is Trigger` trong Inspector.
4. Xây dựng tháp gồm nhiều khối Prefab và quan sát tương tác vật lý.
5. Sử dụng `Rigidbody.AddForce()` để tác động lực lên đối tượng.
6. Phân biệt sự kiện va chạm vật lý với sự kiện Trigger.
7. Kiểm tra và xử lý các lỗi vật lý cơ bản trong Unity Editor.

## 3. Kiến thức nền tảng

### 3.1. GameObject và Component

Trong Unity, mọi đối tượng nằm trong Scene đều là một `GameObject`.

Bản thân GameObject là một đối tượng chứa các thành phần. Hình dạng, cách hiển thị, khả năng va chạm và hành vi đều được cung cấp bởi các `Component`.

| Thành phần        | Chức năng                               |
| ----------------- | --------------------------------------- |
| `Transform`       | Quản lý vị trí, góc xoay và kích thước  |
| `Mesh Filter`     | Chứa dữ liệu hình học 3D                |
| `Mesh Renderer`   | Hiển thị mô hình                        |
| `Box Collider`    | Tạo vùng va chạm hình hộp               |
| `Sphere Collider` | Tạo vùng va chạm hình cầu               |
| `Rigidbody`       | Cho phép tham gia mô phỏng vật lý       |
| `MonoBehaviour`   | Cơ sở để viết script điều khiển hành vi |

Ví dụ: Một Cube thông thường có `Transform`, `Mesh Filter`, `Mesh Renderer` và `Box Collider`. Khi bổ sung `Rigidbody`, Cube có thể chịu trọng lực và phản ứng với lực tác động.

### 3.2. Prefab là gì?

Prefab là một mẫu GameObject được lưu thành Asset trong Project, cho phép tạo nhiều đối tượng có cùng cấu trúc và thiết lập.

Một Prefab có thể lưu:

- Các Component.
- Các giá trị trong Inspector.
- Các GameObject con.
- Material và các tham chiếu tài nguyên.
- Script và cấu hình liên quan.

Ví dụ, thay vì tạo thủ công 10 khối hộp có cùng kích thước, người học chỉ cần tạo một Prefab rồi sử dụng nhiều lần.

Block Prefab

Mẫu gốc lưu trong Project

Tạo nhiều instance trong Scene

Block 1

Block 2

Block 3

Các instance có thể chia sẻ cấu hình Prefab nhưng vẫn có thể có giá trị ghi đè riêng (Overrides).

Khi chỉnh sửa Prefab Asset, những thay đổi phù hợp sẽ được áp dụng cho các instance liên kết, trừ các thuộc tính đã bị ghi đè.

### 3.3. Collider và Rigidbody

`Collider` xác định vùng mà Unity sử dụng để kiểm tra va chạm. Tuy nhiên, chỉ có Collider chưa đủ để một vật thể tự rơi hoặc chuyển động dưới tác động của lực.

`Rigidbody` bổ sung khả năng tham gia mô phỏng động lực học.

| Tình huống             | Collider             | Rigidbody                                                                      |
| ---------------------- | -------------------- | ------------------------------------------------------------------------------ |
| Sàn đứng yên           | Có                   | Thường không cần                                                               |
| Khối hộp rơi tự do     | Có                   | Có                                                                             |
| Quả bóng chịu lực      | Có                   | Có                                                                             |
| Vùng phát hiện Trigger | Có, bật `Is Trigger` | Phụ thuộc đối tượng tương tác; cần điều kiện Rigidbody phù hợp để nhận sự kiện |

Các thuộc tính Rigidbody quan trọng:

Mass: Khối lượng vật thể. Với cùng một xung lực, vật có khối lượng lớn hơn thường thay đổi vận tốc ít hơn.

Use Gravity: Cho phép Rigidbody chịu gia tốc trọng trường khi bật.

Is Kinematic: Khi bật, Rigidbody không được điều khiển bởi lực và va chạm theo cách của Rigidbody động thông thường.

### 3.4. Collision và Trigger

Collision và Trigger đều liên quan đến việc phát hiện sự tương tác giữa các Collider, nhưng mục đích khác nhau.

[3D Essentials - Unity Learn](https://images.openai.com/static-rsc-4/oUuLFzYBpTqx4mUjem52dJIL9PevM5JKgo_cZ7GzlwqFvYNkMhHZ5mtdQC0pmxLHsEYl53B2bQmf5uKdE3fwsdtH13X3d6im1wBrlEuucPe8AKmAe7eIfi3dpG1VzKDUhq-VT0Pu-kyIz06DuoGgS54lCPTE2sHwt7_pE54sKBY?purpose=inline)

Collision

Vật thể chạm vào bề mặt và có thể bị chặn, bật lại hoặc làm vật khác chuyển động.

[【VRChat】AreaOnOff：エリアに入るとオブジェクトが出現 - NOLOSI - BOOTH](https://images.openai.com/static-rsc-4/0DEp6SX197x9z6IvfWX0edjDUy8ELMx_HDB2QWiAh2AE9pdVHvys-yNDNMmpK8DzWO8oNr3fgXFuNAuXFwhLbEWTFR2Bp1oZeEwSx1AAuTyWuuXnOYHLlTDEopeeMgyVDftbmxSBrMa4jYiwa0MzWg7E2wkVtEzhL33NzYai-lA?purpose=inline)

Trigger

Collider phát hiện đối tượng đi vào vùng mà không tạo phản ứng tiếp xúc vật lý thông thường.

Hai callback được sử dụng phổ biến:

```
void OnCollisionEnter(Collision collision)
{
    Debug.Log("Collision detected");
}

void OnTriggerEnter(Collider other)
{
    Debug.Log("Trigger detected");
}
```

Trong vật lý 3D, các callback này cần cấu hình Collider và Rigidbody phù hợp để Unity phát sinh sự kiện.

### 3.5. Physics Material

`Physics Material` điều chỉnh cách các Collider tương tác về ma sát và độ nảy.

| Thuộc tính       | Ý nghĩa                               |
| ---------------- | ------------------------------------- |
| Dynamic Friction | Ma sát khi hai bề mặt trượt tương đối |
| Static Friction  | Ma sát khi hai bề mặt chưa trượt      |
| Bounciness       | Mức độ đàn hồi                        |
| Friction Combine | Quy tắc kết hợp ma sát                |
| Bounce Combine   | Quy tắc kết hợp độ nảy                |

Ví dụ, quả bóng có độ nảy cao có thể bật lên rõ rệt sau khi tiếp xúc với sàn. Kết quả thực tế còn phụ thuộc vào vật liệu của cả hai Collider, quy tắc kết hợp và điều kiện mô phỏng.

## 4. Chuẩn bị môi trường

Cần có:

- Unity Editor 6.3.
- Một Project 3D.
- Scene mới hoặc Scene thực hành.
- Cửa sổ `Hierarchy`, `Scene`, `Game`, `Inspector`, `Project` và `Console`.

Có thể tổ chức tài nguyên như sau:

```
Assets/
├── Materials/
│   ├── BlockMaterial
│   └── BounceMaterial
├── PhysicsMaterials/
│   └── BouncySurface
├── Prefabs/
│   └── Block.prefab
├── Scenes/
│   └── PhysicsTower.unity
└── Scripts/
    └── BounceOnce.cs
```

Tên thư mục chỉ mang tính gợi ý để quản lý Project dễ dàng hơn.

## 5. Thực hành — Xây dựng tháp Prefab

### 5.1. Bước 1 — Tạo sàn

1. Mở Scene thực hành.
2. Trong `Hierarchy`, nhấp chuột phải.
3. Chọn `3D Object > Plane`.
4. Đổi tên thành `Ground`.
5. Đặt Position `(0, 0, 0)`.

Plane mặc định có Collider phù hợp để làm sàn.

Chưa cần thêm Rigidbody cho Ground vì đây là bề mặt cố định.

Checkpoint: Scene có một mặt phẳng nằm ngang, đủ diện tích để đặt tháp.

### 5.2. Bước 2 — Tạo khối hộp

1. Trong `Hierarchy`, chọn `3D Object > Cube`.
2. Đổi tên thành `Block`.
3. Đặt Scale `(1, 1, 1)`.
4. Giữ `Box Collider` có sẵn.
5. Trong Inspector, chọn `Add Component`.
6. Tìm và thêm `Rigidbody`.

Cấu hình ban đầu:

| Thuộc tính                | Giá trị |
| ------------------------- | ------- |
| Mass                      | `1`     |
| Use Gravity               | Bật     |
| Is Kinematic              | Tắt     |
| Box Collider → Is Trigger | Tắt     |

Tại sao cần Rigidbody?

Nếu khối hộp chỉ có Box Collider, nó không tự rơi dưới tác động của trọng lực. Khi có Rigidbody động và bật Use Gravity, Unity có thể mô phỏng chuyển động rơi.

### 5.3. Bước 3 — Tạo Prefab

1. Tạo thư mục `Assets/Prefabs`.
2. Kéo GameObject `Block` từ Hierarchy vào thư mục đó trong Project.
3. Unity tạo Asset `Block.prefab`.
4. Kiểm tra instance Block trong Scene đã liên kết với Prefab.

Prefab Asset là mẫu có thể sử dụng nhiều lần.

### 5.4. Bước 4 — Xây dựng tòa tháp

Kéo `Block.prefab` từ Project vào Scene nhiều lần và sắp xếp các khối theo chiều dọc.

Với Cube kích thước chuẩn 1 đơn vị, có thể thử các vị trí ban đầu sau:

| GameObject | X | Y    | Z |
| ---------- | - | ---- | - |
| Block 01   | 0 | 0.51 | 0 |
| Block 02   | 0 | 1.54 | 0 |
| Block 03   | 0 | 2.57 | 0 |
| Block 04   | 0 | 3.60 | 0 |
| Block 05   | 0 | 4.63 | 0 |

Các giá trị này đặt những khối hộp cách nhau một khoảng nhỏ trước khi mô phỏng. Khi nhấn Play, trọng lực khiến chúng rơi xuống và tiếp xúc với nhau.

Mô phỏng bố trí tháp

5 khối Prefab

Sơ đồ khái niệm, không phải ảnh chụp Unity Editor.

Checkpoint: Trong Hierarchy có nhiều Block là instance của cùng một Prefab.

### 5.5. Bước 5 — Kiểm tra vật lý

Nhấn nút `Play`.

Quan sát:

1. Các khối có rơi xuống hay không?
2. Khối thấp nhất có tiếp xúc với sàn không?
3. Những khối phía trên có tiếp xúc với nhau không?
4. Tòa tháp có đứng được hay nghiêng, đổ?
5. Có khối nào xuyên qua vật thể khác không?

Kết quả phụ thuộc cấu hình Collider, Rigidbody, ma sát, vị trí và trạng thái ban đầu.

Nếu tháp bị nghiêng hoặc đổ, đó chưa chắc là lỗi. Người học cần xác định liệu chuyển động có phù hợp với thiết lập vật lý hay không.

Lưu ý: Những thay đổi thực hiện trong Play mode thường không được giữ lại sau khi thoát Play mode. Hãy chỉnh sửa cấu hình cần lưu khi không chạy mô phỏng.

## 6. Thử nghiệm bổ sung — Quả bóng và va chạm

### 6.1. Tạo Sphere

Trong Hierarchy:

1. Chọn `3D Object > Sphere`.
2. Đổi tên thành `PhysicsBall`.
3. Đặt quả bóng phía trên hoặc bên cạnh tòa tháp.
4. Giữ `Sphere Collider`.
5. Thêm `Rigidbody`.
6. Bật `Use Gravity`.

Nhấn Play để quan sát quả bóng rơi xuống.

Nếu muốn quả bóng làm tháp đổ, cần tạo điều kiện để quả bóng có vận tốc và hướng chuyển động phù hợp trước khi va chạm.

### 6.2. Thử nghiệm Mass

Thay đổi Mass của Sphere và giữ các điều kiện còn lại giống nhau.

| Thử nghiệm | Tham số thay đổi | Điều cần quan sát                           |
| ---------- | ---------------- | ------------------------------------------- |
| A          | Mass nhỏ         | Phản ứng khi chịu cùng xung lực             |
| B          | Mass lớn         | Mức thay đổi vận tốc khi chịu cùng xung lực |
| C          | Tắt Use Gravity  | Quả bóng có còn tự rơi do trọng lực không?  |

Trong thử nghiệm cùng xung lực, Rigidbody có Mass lớn hơn sẽ có mức thay đổi vận tốc nhỏ hơn.

### 6.3. Thử nghiệm Is Trigger

Chọn `PhysicsBall` và bật `Sphere Collider > Is Trigger`.

Chạy lại Scene.

Khi Collider của Sphere là Trigger, nó có thể phát hiện những vùng chồng lấn nhưng không còn tạo phản ứng tiếp xúc vật lý thông thường với các Collider khác.

Điều này rất hữu ích để xây dựng vùng nhận diện, khu vực kích hoạt hoặc các tương tác không cần va chạm cứng.

## 7. Viết Script tác động lực

Để thử khả năng tạo lực, tạo script `BounceOnce.cs` và gắn vào `PhysicsBall`.

```
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BounceOnce : MonoBehaviour
{
    [SerializeField] private float impulse = 5f;

    private Rigidbody body;

    private void Awake()
    {
        body = GetComponent<Rigidbody>();
    }

    [ContextMenu("Bounce")]
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

    private void OnCollisionEnter(Collision collision)
    {
        Debug.Log(
            "Collision: " + collision.gameObject.name
        );
    }

    private void OnTriggerEnter(Collider other)
    {
        Debug.Log(
            "Trigger: " + other.gameObject.name
        );
    }
}
```

### 7.1. Giải thích từng thành phần

| Thành phần           | Ý nghĩa                                                              |
| -------------------- | -------------------------------------------------------------------- |
| `RequireComponent`   | Yêu cầu GameObject có Rigidbody                                      |
| `SerializeField`     | Hiển thị biến private trong Inspector                                |
| `Awake()`            | Lấy tham chiếu Rigidbody khi đối tượng khởi tạo                      |
| `ContextMenu`        | Cho phép gọi phương thức qua menu ngữ cảnh Component trong Inspector |
| `AddForce()`         | Tác động lực lên Rigidbody                                           |
| `Vector3.up`         | Vector đơn vị hướng lên theo trục Y                                  |
| `ForceMode.Impulse`  | Tác động một xung lực tức thời                                       |
| `OnCollisionEnter()` | Xử lý sự kiện bắt đầu va chạm                                        |
| `OnTriggerEnter()`   | Xử lý sự kiện bắt đầu chồng lấn với Trigger                          |

### 7.2. Kiểm tra hàm Bounce()

Để chạy hàm:

1. Tắt `Is Trigger` trên Sphere nếu đang bật.
2. Nhấn Play.
3. Chọn GameObject `PhysicsBall`.
4. Mở menu ngữ cảnh của Component `BounceOnce` trong Inspector.
5. Chọn `Bounce`.
6. Quan sát chuyển động của Sphere.

`Bounce()` sẽ gọi `AddForce()` để tác động một xung lực hướng lên.

Nếu cần điều khiển bằng bàn phím trong một dự án hoàn chỉnh, hãy đọc input trong `Update()` rồi chuyển yêu cầu tác động lực sang bước xử lý vật lý phù hợp. Cách này giúp tránh bỏ lỡ input giữa các bước `FixedUpdate()`.

### 7.3. Quan sát Console

Trong trường hợp Sphere va chạm với khối hộp thông thường, Console có thể xuất hiện:

```
Collision: Block
```

Khi Sphere đi vào Collider có bật `Is Trigger` và điều kiện phát sinh sự kiện hợp lệ:

```
Trigger: Ground
```

Tên đối tượng được in ra sẽ phụ thuộc vào GameObject thực tế tham gia tương tác.

## 8. Quy trình kiểm thử vật lý

Chu trình kiểm chứng

\#chatgpt-mermaid-\_r_13n\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_13n\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_13n\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_13n\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_13n\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_13n\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_13n\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_13n\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_13n\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_13n\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_13n\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_13n\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_13n\_ p{margin:0;}#chatgpt-mermaid-\_r_13n\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_13n\_ .label text,#chatgpt-mermaid-\_r_13n\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ .node rect,#chatgpt-mermaid-\_r_13n\_ .node circle,#chatgpt-mermaid-\_r_13n\_ .node ellipse,#chatgpt-mermaid-\_r_13n\_ .node polygon,#chatgpt-mermaid-\_r_13n\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .rough-node .label text,#chatgpt-mermaid-\_r_13n\_ .node .label text,#chatgpt-mermaid-\_r_13n\_ .image-shape .label,#chatgpt-mermaid-\_r_13n\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_13n\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .rough-node .label,#chatgpt-mermaid-\_r_13n\_ .node .label,#chatgpt-mermaid-\_r_13n\_ .image-shape .label,#chatgpt-mermaid-\_r_13n\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_13n\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_13n\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_13n\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_13n\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_13n\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_13n\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_13n\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_13n\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_13n\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_13n\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_13n\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_13n\_ .icon-shape,#chatgpt-mermaid-\_r_13n\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_13n\_ .icon-shape p,#chatgpt-mermaid-\_r_13n\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_13n\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_13n\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_13n\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_13n\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_13n\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_13n\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_13n\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_13n\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_13n\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_13n\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_13n\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_13n\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_13n\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_13n\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_13n\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_13n\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .node rect,#chatgpt-mermaid-\_r_13n\_ .node circle,#chatgpt-mermaid-\_r_13n\_ .node ellipse,#chatgpt-mermaid-\_r_13n\_ .node polygon,#chatgpt-mermaid-\_r_13n\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_13n\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_13n\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_13n\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_13n\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_13n\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Thiết lập Prefab và RigidbodyChạy Play modeQuan sát chuyển độngKết quả phù hợp?Ghi nhận kết quảKiểm tra Console và InspectorThay đổi một tham sốCóKhông

Chỉ thay đổi một tham số trong mỗi lần thử để dễ xác định nguyên nhân.

### 8.1. Kiểm tra Fixed Timestep

Trong Unity Editor, mở:

`Edit > Project Settings > Time`

Tìm thông số `Fixed Timestep`.

Đây là khoảng thời gian mô phỏng giữa các bước cập nhật vật lý cố định. Giá trị mặc định thông dụng của Unity là `0.02` giây.

Có thể thử giảm nhẹ giá trị để quan sát ảnh hưởng đến mô phỏng và hiệu năng.

Lưu ý: Timestep nhỏ hơn có thể tăng số bước mô phỏng và chi phí CPU. Không nên mặc định rằng giảm timestep sẽ sửa mọi lỗi xuyên vật thể hoặc bất ổn vật lý.

### 8.2. Ghi chép kết quả

Mỗi thử nghiệm nên được ghi theo cấu trúc:

| Nội dung        | Ghi chép                   |
| --------------- | -------------------------- |
| Mục tiêu        | Điều cần kiểm tra          |
| Dự đoán         | Kết quả dự kiến            |
| Thiết lập       | Các tham số Inspector      |
| Kết quả thực tế | Hiện tượng quan sát        |
| Minh chứng      | Ảnh Game view hoặc Console |
| Kết luận        | Nguyên nhân và điều rút ra |

Ví dụ: Khi tắt `Use Gravity`, dự đoán Sphere không tự rơi do trọng lực. Sau đó chạy thử và kiểm tra xem hành vi có phù hợp với dự đoán hay không.

## 9. Lỗi thường gặp và cách khắc phục

| Hiện tượng                    | Nguyên nhân cần kiểm tra                              | Hướng xử lý                               |
| ----------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| Khối không rơi                | Thiếu Rigidbody hoặc tắt Gravity                      | Kiểm tra Rigidbody                        |
| Vật xuyên qua sàn             | Collider, tốc độ hoặc cấu hình va chạm                | Kiểm tra Collider và Collision Detection  |
| Sphere không nảy              | Chưa cấu hình Physics Material phù hợp                | Kiểm tra Bounciness và Bounce Combine     |
| Không nhận `OnCollisionEnter` | Thiếu điều kiện vật lý hoặc bật Is Trigger            | Kiểm tra Collider và Rigidbody            |
| Không nhận `OnTriggerEnter`   | Chưa bật Is Trigger hoặc thiếu điều kiện phát sự kiện | Kiểm tra hai Collider và Rigidbody        |
| Script không chạy             | Script chưa gắn hoặc Component bị vô hiệu hóa         | Kiểm tra Inspector và Console             |
| Tháp đổ ngoài dự kiến         | Vị trí, trọng tâm hoặc tiếp xúc không ổn định         | Kiểm tra Transform và các thông số vật lý |

Một lỗi cần đặc biệt chú ý là nhầm lẫn giữa vật lý 2D và 3D.

Vật lý 3D:

```
Rigidbody
Collider
OnCollisionEnter(Collision collision)
```

Vật lý 2D:

```
Rigidbody2D
Collider2D
OnCollisionEnter2D(Collision2D collision)
```

Không sử dụng callback 2D để bắt sự kiện của Rigidbody và Collider 3D.

Quy trình debug hiệu quả gồm: tái hiện hiện tượng, đọc Console, kiểm tra Inspector, thay đổi một nguyên nhân giả định, chạy lại và ghi nhận kết quả.

## 10. Bài tập thực hành

### 10.1. Bài tập cơ bản

Tạo một tòa tháp từ 5 khối Prefab.

Yêu cầu:

- Các khối sử dụng cùng một Prefab.
- Mỗi khối có Box Collider và Rigidbody.
- Có một Plane làm sàn.
- Chạy Play mode và mô tả chuyển động.

Tiêu chí hoàn thành: Có thể chứng minh rằng các khối chịu trọng lực và tương tác thông qua va chạm.

### 10.2. Bài tập vận dụng

Tạo Sphere có Rigidbody và cho tương tác với tòa tháp.

Thực hiện hai lần thử:

- Lần 1: Sphere sử dụng Collider thông thường.
- Lần 2: Sphere bật `Is Trigger`.

Ghi lại sự khác biệt giữa phản ứng tiếp xúc vật lý và phát hiện chồng lấn.

### 10.3. Bài tập mở rộng

Thử thay đổi Physics Material hoặc khối lượng Rigidbody của một số đối tượng.

Trước mỗi lần chạy, hãy dự đoán kết quả rồi so sánh với chuyển động thực tế.

Mục tiêu là phân tích ảnh hưởng của các tham số thay vì thay đổi ngẫu nhiên.

## 11. Checklist hoàn thành

- Tạo được Scene 3D có sàn.
- Tạo Cube với Box Collider và Rigidbody.
- Chuyển Cube thành Prefab.
- Dựng được tháp từ nhiều instance Prefab.
- Kiểm tra chuyển động trong Play mode.
- Tạo Sphere và cấu hình vật lý.
- Phân biệt được Collision và Trigger.
- Chạy được script `BounceOnce`.
- Quan sát được thông báo trong Console.
- Thử thay đổi ít nhất một tham số vật lý.
- Ghi được dự đoán, kết quả thực tế và nhận xét.
- Lưu ảnh hoặc video minh chứng.

## 12. Tổng kết kiến thức

Ba thành phần quan trọng nhất trong bài là:

Prefab giúp tạo và quản lý nhiều đối tượng dùng chung một mẫu cấu hình.

Collider xác định hình dạng tham gia kiểm tra va chạm hoặc Trigger.

Rigidbody cho phép vật thể chịu trọng lực, lực tác động và các tương tác động lực học.

Khi kết hợp đúng các thành phần này, có thể xây dựng nhiều cơ chế vật lý trong game như vật thể rơi, tòa tháp sụp đổ, bóng bật nảy hoặc vùng kích hoạt sự kiện.

## 13. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

0/5 câu đã chọn

1\. Khi muốn tạo 20 khối hộp có cùng cấu hình Component và Material, phương pháp nào thuận tiện nhất?

A. Tạo thủ công 20 Cube độc lập

B. Tạo một Prefab và sử dụng nhiều instance

C. Tạo 20 Scene riêng

D. Gắn 20 Camera vào Scene

2\. Một Cube có Box Collider nhưng không có Rigidbody sẽ có hành vi nào trong Scene?

A. Tự động rơi xuống sàn

B. Tự động nảy lên khi được tạo

C. Không tự rơi do trọng lực và có thể làm vật cản tĩnh

D. Không thể tham gia kiểm tra va chạm

3\. Muốn đối tượng phát hiện một vật đi vào vùng nhưng không chặn chuyển động bằng phản ứng tiếp xúc thông thường, nên dùng gì?

A. Collider có Is Trigger bật

B. Tăng Mass lên tối đa

C. Tắt Mesh Renderer

D. Xóa Transform

4\. Phương thức nào dùng để tác động lực lên Rigidbody 3D?

A. Transform.MoveForce()

B. Collider.Push()

C. Rigidbody2D.AddForce3D()

D. Rigidbody.AddForce()

5\. Sau khi thay đổi Fixed Timestep, cách kiểm tra nào phù hợp nhất?

A. Kết luận timestep càng nhỏ thì mọi lỗi đều được sửa

B. Chạy mô phỏng, kiểm tra độ ổn định và chi phí xử lý

C. Xóa toàn bộ Collider

D. Tắt Rigidbody để giảm lỗi

Chấm điểm và xem giải thích