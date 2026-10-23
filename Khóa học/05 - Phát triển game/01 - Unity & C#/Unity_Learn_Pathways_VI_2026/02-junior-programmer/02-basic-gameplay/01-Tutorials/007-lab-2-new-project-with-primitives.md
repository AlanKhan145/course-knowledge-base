# Bài 07 — Lab 2: New Project with Primitives

Junior Programmer · Basic Gameplay · Tutorial / Lab · Unity 6.3

Chủ đề: Tạo dự án Unity mới và xây dựng một scene 3D bằng các đối tượng hình học cơ bản (3D Primitives).

Tham khảo: [Unity Learn — Basic Gameplay](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com)

Nội dung thực hành được biên soạn độc lập để luyện tập kỹ năng trong Unity Editor, không phải bản hướng dẫn chính thức từng bước của Unity.

## 1. Tổng quan

Khi phát triển trò chơi 3D, không nhất thiết phải bắt đầu bằng những mô hình phức tạp được thiết kế trong Blender hoặc các phần mềm đồ họa.

Unity cung cấp sẵn các đối tượng hình học cơ bản như `Cube`, `Sphere`, `Capsule`, `Cylinder` và `Plane`. Những đối tượng này được gọi là 3D Primitives.

Chúng có thể được sử dụng để tạo bản mẫu (prototype) nhằm kiểm tra bố cục, chuyển động và cơ chế gameplay trước khi thay thế bằng mô hình hoàn chỉnh.

Trong bài thực hành này, người học sẽ tạo một dự án Unity mới, xây dựng một scene đơn giản bằng Primitives, bổ sung vật lý và thử nghiệm một tương tác điều khiển.

### Kết quả mong đợi

Sau khi hoàn thành, scene sẽ có mặt đất, nhân vật dạng khối hộp, một quả cầu chịu tác động của trọng lực và khả năng di chuyển khối hộp bằng bàn phím.

## 2. Mục tiêu học tập

Sau bài thực hành, người học có thể:

1. Tạo và cấu hình một dự án Unity 3D mới.
2. Tạo các GameObject từ những 3D Primitives có sẵn.
3. Điều chỉnh `Position`, `Rotation` và `Scale` thông qua Transform.
4. Phân biệt vai trò của `GameObject`, `Component` và `Scene`.
5. Sử dụng `Rigidbody` và `Collider` để thử nghiệm vật lý cơ bản.
6. Chạy thử scene trong Play mode, kiểm tra lỗi bằng Console và lưu minh chứng.

## 3. Chuẩn bị môi trường

| Thành phần         | Yêu cầu                                    |
| ------------------ | ------------------------------------------ |
| Unity Hub          | Đã cài đặt và hoạt động                    |
| Unity Editor       | Unity 6.3                                  |
| Project Template   | Universal 3D hoặc mẫu 3D phù hợp           |
| Ngôn ngữ lập trình | C#                                         |
| Công cụ            | Scene, Game, Hierarchy, Inspector, Console |

Trước khi bắt đầu, cần làm quen với các khu vực chính trong Unity Editor.

[Get Started with Unity: In-Editor Tutorial - Unity Learn](https://images.openai.com/static-rsc-4/tUlKRkdGNWsAh6h_x_bTUYNik2m-kjiYsEnI177Fcyazkzou3i2CCegfN-htxmy8ubyCikWsYSFgG-wko9YztSqZnaqjvLdVbH66f_uf_MwUfSgEyii6GCuh_B3EJ5uw_yiKciPhNzJ53xvqnK-2AQhwgsRbv1FilyN-DBeAYgM?purpose=inline)

[Create a balanced primitive structure - Unity Learn](https://images.openai.com/static-rsc-4/joXsJ0fqnX-D8LLK6fhQcI0SWo7aCWN529fzKu1a0O0qV1mL-WCVXxxURVlsL7iRj3a-fsd6VYp2v5ce7EHN4NKT6xl-6ayvqEm0ZqoEf-0w9NfuyOwRWzaxiRz3EqTMhfi85VUUhwdo4Qp0ke5EmvfFbar63SgkgOypRhi-odA?purpose=inline)

[Issue · GitHub](https://images.openai.com/static-rsc-4/hVdq8E-8pqGMbTk5rnFiDvmcPGwQcwshWmNkl6lq7ewT1k1xrz8__qcnqOCKNCXuuYrGK9t8Cmfkwm0M6s4JFhs9vwIbTZoPox32RxPaCyqUD2WE0-sbmJVM1h4bCwj9ya0wOSs0-w4WCHkG1EAy80ANEg69IIOfUUCUAOV9jik?purpose=inline)

7

### Các thành phần trong Unity Editor

| Cửa sổ    | Chức năng                                 |
| --------- | ----------------------------------------- |
| Hierarchy | Hiển thị danh sách GameObject trong scene |
| Scene     | Thiết kế và sắp xếp các đối tượng         |
| Game      | Quan sát hình ảnh thông qua Camera        |
| Inspector | Xem và thay đổi Component                 |
| Project   | Quản lý assets và các tệp của dự án       |
| Console   | Hiển thị thông báo, cảnh báo và lỗi       |

## 4. Kiến thức cần sử dụng

### 4.1. GameObject và Component

Trong Unity, `GameObject` là đơn vị cơ bản để xây dựng trò chơi.

Một GameObject có thể là nhân vật, mặt đất, camera, ánh sáng hoặc một đối tượng trang trí.

Hành vi và đặc điểm của GameObject được quyết định bởi các Component gắn vào nó.

\#chatgpt-mermaid-\_r_he\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_he\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_he\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_he\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_he\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_he\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_he\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_he\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_he\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_he\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_he\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_he\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_he\_ p{margin:0;}#chatgpt-mermaid-\_r_he\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_he\_ .label text,#chatgpt-mermaid-\_r_he\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ .node rect,#chatgpt-mermaid-\_r_he\_ .node circle,#chatgpt-mermaid-\_r_he\_ .node ellipse,#chatgpt-mermaid-\_r_he\_ .node polygon,#chatgpt-mermaid-\_r_he\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .rough-node .label text,#chatgpt-mermaid-\_r_he\_ .node .label text,#chatgpt-mermaid-\_r_he\_ .image-shape .label,#chatgpt-mermaid-\_r_he\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_he\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .rough-node .label,#chatgpt-mermaid-\_r_he\_ .node .label,#chatgpt-mermaid-\_r_he\_ .image-shape .label,#chatgpt-mermaid-\_r_he\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_he\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_he\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_he\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_he\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_he\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_he\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_he\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_he\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_he\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_he\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_he\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_he\_ .icon-shape,#chatgpt-mermaid-\_r_he\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_he\_ .icon-shape p,#chatgpt-mermaid-\_r_he\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_he\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_he\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_he\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_he\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_he\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_he\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_he\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_he\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_he\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_he\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_he\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_he\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_he\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_he\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_he\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_he\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_he\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .node rect,#chatgpt-mermaid-\_r_he\_ .node circle,#chatgpt-mermaid-\_r_he\_ .node ellipse,#chatgpt-mermaid-\_r_he\_ .node polygon,#chatgpt-mermaid-\_r_he\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_he\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_he\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_he\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_he\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_he\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Unity ProjectSceneGameObjectTransformMesh RendererColliderRigidbody nếu cầnC# Script nếu cần

Giải thích:

- `Transform`: Xác định vị trí, góc quay và tỷ lệ của đối tượng.
- `Mesh Renderer`: Hiển thị hình học của đối tượng.
- `Collider`: Xác định hình dạng va chạm.
- `Rigidbody`: Cho phép đối tượng tham gia mô phỏng vật lý.
- `C# Script`: Bổ sung hành vi được lập trình.

### 4.2. Các 3D Primitives phổ biến

[Simple three-dimensional cube](https://images.openai.com/static-rsc-4/fbfJd4UqxUz0i73LA_E75NAuqZLKu2i5qE537VJVcSJwskmYd3qS3B72XHgT-TtjRHlPHk-3lpUfmczrhjFow85H7kZ0EkVBhVHs2sgb0yVL45sPaGlaJ0YiNF2wu4-Jxe4cX60AokGPddj4cPLbzhuAH3RcwwMVQlc6aYOkxF3JC8iqYKMDDN76XTQ_LhRH?purpose=inline)

Cube — Khối hộp dùng làm nhân vật mẫu, tường, chướng ngại vật.

[The graphics module - Morpho Manual](https://images.openai.com/static-rsc-4/zCtNyM1xX7T20EsVnb8vVwiJI7Xy2OjKV0crfeVjib4zPsXcPfsoJaFYMqfLek1lkX6IaktsFuHsucQRvcDQheZNhvlIj6vGZxdDjRVMhEHw4TZWK6DAl-Jz70jdBoSyEEipwlFs_CPk0YwsPHTW-WEKvyWgUWP4ufNHorVrJ1I?purpose=inline)

Sphere — Khối cầu dùng làm bóng, vật thể hoặc đạn.

[【Unity】Scene View に 選択してないオブジェクトの Collider を表示する - うにてぃブログ](https://images.openai.com/static-rsc-4/lldcXYcapj0NBEbEC3emKI9u6a30IbAZtVm8_V8rnwe2bgTzVo-pf0msYVUOEUQpIjXCFB_OE3C4vLg6vVEj42Gm9Xa9uJGp2InftXdWL2sE92LscjObp9-WYJrVlD0wpzTyizTstINCyyptUpwiJy28Hy8pzfZ44iirMaC644o?purpose=inline)

Capsule — Hình con nhộng thường dùng làm nhân vật mẫu.

[Cylinder | Zoo](https://images.openai.com/static-rsc-4/qXn-upk4ZO95-MHyeZJIEbukoLJAAJYJCdNn_8snVV305SRtWrVRjIPVT0m7QmNhIXvf5bOQhlBFAT_79mXkD1YMbb3uuQe6S3Z41AJJtoFGVGx8NmQgu5XV7AALQYSztSWSuDkHNEVPt7YVgv5I2FQxZANnGNo-DceR2yH50pU?purpose=inline)

Cylinder — Hình trụ dùng làm cột hoặc cấu trúc môi trường.

Ngoài ra, `Plane` là một mặt phẳng thường được dùng để tạo nền cho scene.

### 4.3. Transform

Mỗi GameObject đều có Component `Transform`, gồm ba thuộc tính:

| Thuộc tính | Ý nghĩa                 | Ví dụ        |
| ---------- | ----------------------- | ------------ |
| Position   | Vị trí trong không gian | `(0, 2, 0)`  |
| Rotation   | Góc quay đối tượng      | `(0, 90, 0)` |
| Scale      | Kích thước tương đối    | `(2, 1, 2)`  |

Trong Unity 3D, trục `X` và `Z` thường được dùng cho chuyển động trên mặt phẳng ngang, còn trục `Y` biểu diễn chiều cao.

## 5. Thực hành từng bước

### Bước 1 — Tạo dự án Unity mới

1. Mở Unity Hub.
2. Chọn New Project.
3. Chọn template 3D phù hợp, chẳng hạn Universal 3D.
4. Đặt tên dự án: `PrimitiveGameplayLab`.
5. Chọn nơi lưu dự án.
6. Nhấn Create Project.

Sau khi Unity Editor mở, kiểm tra các cửa sổ Hierarchy, Scene, Game, Inspector và Project.

Checkpoint 1: Dự án mở thành công và có scene sẵn sàng để chỉnh sửa.

### Bước 2 — Tạo mặt đất

Trong Hierarchy:

1. Nhấp chuột phải.
2. Chọn 3D Object → Plane.
3. Đổi tên đối tượng thành `Ground`.
4. Đặt Position thành `(0, 0, 0)`.

Giữ Scale mặc định `(1, 1, 1)` cho bài thực hành này.

Plane sẽ đóng vai trò mặt đất, nơi các vật thể có thể tiếp xúc khi mô phỏng vật lý.

Checkpoint 2: Có thể quan sát mặt đất trong Scene view.

### Bước 3 — Tạo nhân vật bằng Cube

Tạo một GameObject mới:

3D Object → Cube

Đổi tên thành `Player`.

Thiết lập Transform:

| Thuộc tính | Giá trị       |
| ---------- | ------------- |
| Position   | `(0, 0.5, 0)` |
| Rotation   | `(0, 0, 0)`   |
| Scale      | `(1, 1, 1)`   |

Cube có chiều cao mặc định là một đơn vị, vì vậy Position Y bằng `0.5` giúp đáy khối hộp nằm trên mặt đất khi Scale bằng 1.

Checkpoint 3: Khối hộp xuất hiện trên mặt đất và không nằm chìm một nửa dưới Plane.

### Bước 4 — Tạo quả cầu vật lý

1. Tạo 3D Object → Sphere.
2. Đổi tên thành `PhysicsBall`.
3. Đặt Position thành `(2, 3, 0)`.
4. Giữ Scale `(1, 1, 1)`.
5. Trong Inspector, chọn Add Component → Rigidbody.
6. Đảm bảo `Use Gravity` được bật và `Is Kinematic` được tắt.

Khi nhấn Play, Rigidbody sẽ khiến quả cầu rơi xuống do trọng lực. Collider của Sphere và Plane cho phép hệ thống vật lý xử lý tiếp xúc.

Checkpoint 4: Quả cầu rơi xuống mặt đất và không xuyên qua Plane trong điều kiện cấu hình thông thường.

### Bước 5 — Bổ sung chuyển động cho Cube

Để tạo tương tác đơn giản, chúng ta sử dụng một C# script cho phép người chơi điều khiển Cube sang trái hoặc phải.

Trong cửa sổ Project, tạo script C# mới với tên:

`PlayerMovement.cs`

Thêm đoạn mã sau:

```

using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;

    void Update()
    {
        float direction = 0f;

        if (Input.GetKey(KeyCode.A))
        {
            direction = -1f;
        }

        if (Input.GetKey(KeyCode.D))
        {
            direction = 1f;
        }

        Vector3 movement =
            Vector3.right * direction * moveSpeed * Time.deltaTime;

        transform.Translate(movement, Space.World);
    }
}

```

Gắn script vào GameObject `Player` bằng cách kéo script từ Project sang Inspector của Cube hoặc sử dụng Add Component.

Giải thích các thành phần chính:

- `MonoBehaviour`: Lớp cơ sở cho script Component.
- `Update()`: Được gọi mỗi frame khi script đang hoạt động.
- `Input.GetKey()`: Kiểm tra trạng thái phím đang được giữ.
- `Vector3.right`: Vector hướng dương của trục X.
- `Time.deltaTime`: Khoảng thời gian giữa hai frame, giúp tốc độ di chuyển ít phụ thuộc vào FPS.
- `Transform.Translate()`: Dịch chuyển đối tượng theo vector được cung cấp.

Lưu ý: Mã này sử dụng API Input cũ. Nếu dự án chỉ bật New Input System, cần cấu hình Active Input Handling thành Both (hoặc Input Manager cũ) trong Player Settings, hoặc chuyển sang sử dụng Input System mới. Script này phục vụ chuyển động cơ bản, chưa triển khai điều khiển vật lý bằng Rigidbody.

### Bước 6 — Chạy thử gameplay

Nhấn nút Play trong Unity Editor.

Kiểm thử theo trình tự:

1. Quan sát quả cầu rơi xuống Plane.
2. Nhấn và giữ `A` để Cube di chuyển theo trục X âm.
3. Nhấn và giữ `D` để Cube di chuyển theo trục X dương.
4. Thả phím để Cube dừng di chuyển.
5. Thay đổi `Move Speed` trong Inspector và quan sát sự khác biệt.

Minh họa logic tương tác

Cube di chuyển bằng bàn phím; Sphere chịu tác động của trọng lực. Hai hành vi được kiểm tra độc lập.

Checkpoint 5: Khi chạy scene, người học có thể quan sát rõ sự khác nhau giữa chuyển động lập trình bằng Transform và chuyển động vật lý bằng Rigidbody.

## 6. Kiểm tra kết quả

Cần xác định cả kết quả mong đợi và kết quả thực tế trước khi kết luận bài thực hành thành công.

| Kiểm thử | Thao tác         | Kết quả mong đợi                        |
| -------- | ---------------- | --------------------------------------- |
| TC01     | Mở scene         | Các đối tượng được hiển thị             |
| TC02     | Nhấn Play        | Sphere rơi xuống Plane                  |
| TC03     | Giữ phím A       | Cube di chuyển sang X âm                |
| TC04     | Giữ phím D       | Cube di chuyển sang X dương             |
| TC05     | Thả phím         | Cube dừng di chuyển                     |
| TC06     | Tăng Move Speed  | Cube di chuyển nhanh hơn                |
| TC07     | Kiểm tra Console | Không có lỗi do script thực hành gây ra |

Trong quá trình thử nghiệm, ghi lại:

Kết quả mong đợi → Kết quả thực tế → Minh chứng → Nhận xét.

Đặc biệt, những thay đổi thực hiện trong Play mode thường không được lưu khi thoát chế độ này. Nếu cần giữ lại một cấu hình, hãy chỉnh sửa ở Edit mode.

## 7. Lỗi thường gặp và cách xử lý

| Lỗi                               | Nguyên nhân có thể                                | Cách xử lý                                             |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Cube không di chuyển              | Chưa gắn script hoặc Game view chưa nhận bàn phím | Kiểm tra Component, nhấp vào Game view                 |
| Lỗi `Input` khi Play              | Chế độ Input Handling không phù hợp               | Cấu hình Input Manager/Both hoặc đổi sang Input System |
| Sphere không rơi                  | Thiếu Rigidbody hoặc tắt Use Gravity              | Kiểm tra Rigidbody                                     |
| Sphere xuyên mặt đất              | Collider bị thiếu hoặc thiết lập va chạm sai      | Kiểm tra Collider và Collision Layers                  |
| Game view không nhìn thấy vật thể | Camera không hướng đến đối tượng                  | Điều chỉnh vị trí và hướng Camera                      |
| Script không chạy                 | Có lỗi biên dịch C#                               | Mở Console và sửa lỗi                                  |

### Quy trình debug

\#chatgpt-mermaid-\_r_i8\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_i8\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_i8\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_i8\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_i8\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_i8\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_i8\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_i8\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_i8\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_i8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_i8\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_i8\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_i8\_ p{margin:0;}#chatgpt-mermaid-\_r_i8\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_i8\_ .label text,#chatgpt-mermaid-\_r_i8\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ .node rect,#chatgpt-mermaid-\_r_i8\_ .node circle,#chatgpt-mermaid-\_r_i8\_ .node ellipse,#chatgpt-mermaid-\_r_i8\_ .node polygon,#chatgpt-mermaid-\_r_i8\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .rough-node .label text,#chatgpt-mermaid-\_r_i8\_ .node .label text,#chatgpt-mermaid-\_r_i8\_ .image-shape .label,#chatgpt-mermaid-\_r_i8\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_i8\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .rough-node .label,#chatgpt-mermaid-\_r_i8\_ .node .label,#chatgpt-mermaid-\_r_i8\_ .image-shape .label,#chatgpt-mermaid-\_r_i8\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_i8\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_i8\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_i8\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_i8\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_i8\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_i8\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_i8\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_i8\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_i8\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_i8\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_i8\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_i8\_ .icon-shape,#chatgpt-mermaid-\_r_i8\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_i8\_ .icon-shape p,#chatgpt-mermaid-\_r_i8\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_i8\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_i8\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_i8\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_i8\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_i8\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_i8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_i8\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_i8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_i8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_i8\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_i8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_i8\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_i8\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_i8\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_i8\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_i8\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .node rect,#chatgpt-mermaid-\_r_i8\_ .node circle,#chatgpt-mermaid-\_r_i8\_ .node ellipse,#chatgpt-mermaid-\_r_i8\_ .node polygon,#chatgpt-mermaid-\_r_i8\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_i8\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_i8\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_i8\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_i8\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_i8\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiKiểm tra ConsoleKiểm tra GameObject vàComponentĐưa ra một giả thuyếtChỉ thay đổi một yếu tốKiểm thử lạiGhi nhận nguyên nhân và cáchsửaChưa đạtĐạt

Khi gặp lỗi, không nên thay đổi đồng thời quá nhiều tham số. Việc kiểm tra từng yếu tố giúp xác định được nguyên nhân thực sự.

Ví dụ, nếu Sphere không rơi, trước tiên kiểm tra Rigidbody và `Use Gravity`, thay vì sửa cả Transform, Collider và Project Settings cùng lúc.

## 8. Sản phẩm cần nộp

Sản phẩm cuối cùng là một dự án Unity nhỏ có thể mở và chạy thử độc lập.

### Thành phần bàn giao

- Dự án `PrimitiveGameplayLab`.
- Scene đã lưu, chẳng hạn `PrimitiveLab.unity`.
- Script `PlayerMovement.cs`.
- Ảnh hoặc video minh chứng quá trình kiểm thử.
- Ghi chú ngắn về ít nhất một lỗi đã gặp và phương pháp xử lý.

### Tiêu chí nghiệm thu

Tiến độ hoàn thành

0/8 tiêu chí

Tạo thành công dự án Unity 3D mới

Scene có Ground, Player và PhysicsBall

Rigidbody hoạt động và Sphere rơi xuống mặt đất

Điều khiển được Cube bằng phím A và D

Điều chỉnh được tốc độ di chuyển

Kiểm tra được trạng thái Console

Lưu được scene và minh chứng chạy thử

Ghi lại một lỗi hoặc cải tiến sau kiểm thử

### Bài tập nâng cao

Thực hiện ít nhất một cải tiến sau khi hoàn thành scene:

1. Thay đổi màu của Cube bằng Material.
2. Tăng hoặc giảm `Move Speed` và so sánh kết quả.
3. Tạo thêm một Cylinder làm chướng ngại vật.
4. Thử thay đổi độ cao ban đầu của Sphere và quan sát thời gian rơi.
5. Chuyển Cube thành Prefab để có thể tái sử dụng.

Các phần nâng cao chỉ cần được thực hiện sau khi các chức năng cơ bản đã hoạt động.

## 9. Câu hỏi ôn tập trắc nghiệm

Câu 1. Tại sao nên dùng Primitives trong giai đoạn tạo prototype?

A. Chúng có thể thay thế hoàn toàn mọi mô hình 3D

B. Chúng tự động tạo gameplay mà không cần code

C. Chúng giúp dựng nhanh scene để kiểm tra ý tưởng và cơ chế

D. Chúng không cần sử dụng Component

Kiểm tra đáp án

Câu 2. Một Sphere có Collider nhưng không có Rigidbody sẽ có hành vi nào trong scene tĩnh thông thường?

A. Không tự rơi xuống do trọng lực

B. Luôn tự rơi khi nhấn Play

C. Tự động di chuyển theo Player

D. Tự bật lại lên cao

Kiểm tra đáp án

Câu 3. Tại sao sử dụng Time.deltaTime trong phép tính chuyển động?

A. Để tự động tăng FPS

B. Để vô hiệu hóa trọng lực

C. Để bật Collider

D. Để tốc độ chuyển động ít phụ thuộc vào số frame mỗi giây

Kiểm tra đáp án

Câu 4. Khi Cube không di chuyển sau khi nhấn phím D, bước kiểm tra nào phù hợp nhất?

A. Xóa toàn bộ scene

B. Kiểm tra script, Input Handling và Game view

C. Thêm Rigidbody vào mọi GameObject

D. Tăng kích thước Plane

Kiểm tra đáp án

Câu 5. Sau khi thay đổi Move Speed và chạy thử, điều gì chứng minh tham số này có tác dụng?

A. Màu của Cube tự động thay đổi

B. Sphere chuyển sang chế độ Kinematic

C. Cube di chuyển với tốc độ khác khi giữ cùng một phím

D. Camera tự động theo Cube

Kiểm tra đáp án

Kết quả ôn tập

Đã trả lời 0/5 câu

# 0/5

Xem kết quả và giải thíchLàm lại

## 10. Tổng kết

Lab 2 giúp hình thành quy trình tạo bản mẫu gameplay trong Unity thông qua những đối tượng hình học đơn giản.

Ba kiến thức quan trọng cần nắm vững là:

- GameObject và Component: GameObject là đối tượng, còn Component quy định đặc điểm và hành vi.
- Transform và Physics: Transform điều khiển vị trí, góc quay và tỷ lệ; Rigidbody kết hợp Collider hỗ trợ mô phỏng vật lý.
- Thực hành và kiểm thử: Mỗi thay đổi cần có kết quả quan sát được, từ đó kiểm tra, phát hiện lỗi và cải tiến.

Một scene nhỏ nhưng hoạt động đúng, có thể kiểm chứng và giải thích được hành vi sẽ là nền tảng tốt cho việc xây dựng các hệ thống gameplay phức tạp hơn.