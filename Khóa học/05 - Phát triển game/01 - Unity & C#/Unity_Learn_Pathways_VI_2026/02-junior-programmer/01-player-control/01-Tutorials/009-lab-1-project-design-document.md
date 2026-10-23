# Bài 09 — Lab 1: Project Design Document

Pathway: Junior Programmer · Mission: Player Control · Loại: Lab / Tutorial · Phiên bản: Unity 6.3

Chủ đề: Thiết kế trò chơi, xây dựng nguyên mẫu (Prototyping), kiểm thử và cải tiến.

Nguồn tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài thực hành

Khi phát triển trò chơi, một sai lầm thường gặp là bắt đầu lập trình ngay khi vừa có ý tưởng. Người phát triển có thể dành nhiều thời gian xây dựng nhân vật, môi trường và hiệu ứng, nhưng cuối cùng phát hiện cơ chế chơi không thú vị hoặc quá phức tạp.

Để hạn chế vấn đề này, quá trình phát triển nên bắt đầu bằng một Project Design Document (PDD) — tài liệu thiết kế dự án.

PDD giúp xác định trò chơi sẽ hoạt động như thế nào, người chơi thực hiện những hành động gì và những tính năng nào cần được ưu tiên.

Trong bài thực hành này, chúng ta sẽ thiết kế một trò chơi 3D đơn giản, xây dựng một prototype trong Unity và kiểm tra xem ý tưởng có hoạt động như mong đợi hay không.

### Kết quả đầu ra

Sau khi hoàn thành, người học cần có:

- Một tài liệu thiết kế trò chơi ngắn gọn.
- Một prototype có thể tương tác trong Unity.
- Một bảng ghi nhận kết quả kiểm thử.
- Ít nhất một cải tiến sau lần thử đầu tiên.

## 2. Mục tiêu học tập

Sau bài thực hành, người học có thể:

1. Giải thích mục đích của Project Design Document trong phát triển trò chơi.
2. Xác định Core Gameplay Loop của một ý tưởng game.
3. Lựa chọn những tính năng quan trọng nhất cho prototype.
4. Sử dụng Greyboxing để xây dựng môi trường thử nghiệm bằng các hình khối đơn giản.
5. Kiểm thử trò chơi và ghi nhận phản hồi thực tế.
6. Phân tích một vấn đề và cải tiến thiết kế dựa trên kết quả thử nghiệm.

## 3. Kiến thức cần nắm

### 3.1. Project Design Document là gì?

Project Design Document là tài liệu mô tả ý tưởng, mục tiêu, cơ chế tương tác và phạm vi phát triển của một dự án.

Đối với trò chơi, tài liệu này có thể đóng vai trò như một Game Design Document (GDD) đơn giản.

Một PDD cơ bản cần trả lời các câu hỏi:

| Thành phần         | Câu hỏi cần trả lời                            |
| ------------------ | ---------------------------------------------- |
| Game Concept       | Trò chơi nói về điều gì?                       |
| Player Goal        | Người chơi cần đạt mục tiêu nào?               |
| Core Gameplay Loop | Người chơi liên tục thực hiện hoạt động gì?    |
| Controls           | Người chơi điều khiển bằng cách nào?           |
| Game Mechanics     | Những quy tắc nào quyết định hành vi trò chơi? |
| Visual Style       | Trò chơi có phong cách hình ảnh như thế nào?   |
| Success Conditions | Khi nào người chơi được xem là thành công?     |
| Scope              | Những tính năng nào sẽ được triển khai trước?  |

PDD không nhất thiết phải dài. Đối với prototype nhỏ, một hoặc hai trang có nội dung rõ ràng thường hữu ích hơn một tài liệu dài nhưng thiếu tiêu chí kiểm chứng.

### 3.2. Core Gameplay Loop

Core Gameplay Loop là chu trình hành động mà người chơi liên tục thực hiện trong trò chơi.

Một vòng lặp cơ bản gồm ba yếu tố:

1. Action: Người chơi thực hiện hành động.
2. Feedback: Trò chơi phản hồi hành động đó.
3. Result: Người chơi nhận được kết quả hoặc tiến gần hơn đến mục tiêu.

Ví dụ đối với trò chơi điều khiển phương tiện:

Vòng lặp này giúp xác định phần nào thực sự quan trọng đối với trải nghiệm. Nếu thao tác điều khiển không tốt, việc bổ sung đồ họa đẹp chưa chắc cải thiện trò chơi.

### 3.3. Prototype và Greyboxing

Prototype là một phiên bản thử nghiệm có phạm vi nhỏ, được tạo ra nhằm kiểm chứng một hoặc vài giả thuyết thiết kế.

Ví dụ:

- Người chơi có điều khiển xe dễ dàng không?
- Tốc độ di chuyển có phù hợp không?
- Người chơi có nhận ra vị trí đích đến không?

Greyboxing là phương pháp xây dựng môi trường bằng các đối tượng đơn giản như Cube, Sphere, Capsule hoặc Plane thay vì sử dụng mô hình hoàn chỉnh.

[first game - Unity Learn](https://images.openai.com/static-rsc-4/cA0nf9ViWy3Nho2P39byOJ3eDdTVrisaqvv5klqyY4YEQUxdtquS5nDEDxYRYG29WXhV2uDZCERFvM-JpcM1erRKmaZEDyA_hTwp2D91RAT0Pxs06NYo1sL4nHsFr8Pus5X--csfOWX2ncMT-H0TlXnFXbazTQau-QP8RBfxvVE?purpose=inline)

Greyboxing

Ưu tiên hình khối, kích thước và bố cục.

[Carromaton – Jaime Garrido](https://images.openai.com/static-rsc-4/oZI3M6xNg6OFWs8rSc--ide0SCq7NL5OATyxq4mKIwDyTFcHqVI5GMiCpt79Botpt4TIfikTAMoSP96MS3ozuTKaFNIgwaKTYIAJ8HZESCr-39SfD_oDBEQRpUakG5ptHHI8txshjNiG5goZUDcJo0IEu9ZeOfk3_b2-eJFE3RY?purpose=inline)

Môi trường hoàn thiện

Bổ sung mô hình, vật liệu và chi tiết sau khi kiểm chứng cơ chế.

Greyboxing đặc biệt hữu ích để kiểm tra tỷ lệ không gian, khoảng cách giữa các đối tượng và khả năng định hướng của người chơi.

## 4. Chuẩn bị thực hành

Phần mềm: Unity Editor 6.3 và trình chỉnh sửa C# tương thích.

Kiến thức cần dùng: tạo Scene, GameObject, Component, sử dụng Inspector và chạy Play Mode.

Tạo một dự án 3D mới hoặc sử dụng dự án Player Control đang có.

Ví dụ xuyên suốt bài thực hành là một trò chơi nhỏ có tên Reach the Goal.

Mục tiêu của trò chơi là điều khiển một khối đại diện cho phương tiện di chuyển đến vùng đích. Khi đến đúng vị trí, phương tiện đổi màu để báo hiệu hoàn thành.

## 5. Thực hành: Xây dựng Project Design Document

### Bước 1 — Xác định ý tưởng trò chơi

Trước tiên, viết một câu mô tả trò chơi.

Ví dụ:

> Reach the Goal là trò chơi 3D trong đó người chơi điều khiển một phương tiện đơn giản đi đến vị trí được đánh dấu để hoàn thành màn chơi.

Từ mô tả này, xác định những yếu tố cơ bản:

| Nội dung        | Thiết kế minh họa                            |
| --------------- | -------------------------------------------- |
| Tên trò chơi    | Reach the Goal                               |
| Thể loại        | 3D Movement                                  |
| Mục tiêu        | Di chuyển đến vùng đích                      |
| Điều khiển      | W, A, S, D hoặc phím mũi tên                 |
| Phản hồi        | Đối tượng di chuyển và đổi màu khi đến đích  |
| Điều kiện thắng | Khoảng cách đến đích nhỏ hơn ngưỡng quy định |
| Điều kiện thua  | Chưa cần triển khai ở phiên bản đầu tiên     |

Các thông số và thiết kế trong ví dụ là lựa chọn thực hành minh họa, không phải yêu cầu bắt buộc của Unity Learn.

Checkpoint 1: Người học có thể mô tả trò chơi, mục tiêu và thao tác chính mà không cần giải thích dài dòng.

### Bước 2 — Xác định phạm vi prototype

Không nên triển khai mọi ý tưởng ngay từ đầu.

Phân chia các tính năng thành ba nhóm:

| Ưu tiên     | Tính năng               | Quyết định        |
| ----------- | ----------------------- | ----------------- |
| Must Have   | Điều khiển di chuyển    | Triển khai        |
| Must Have   | Có vị trí đích          | Triển khai        |
| Must Have   | Phản hồi khi hoàn thành | Triển khai        |
| Should Have | Đồng hồ đếm thời gian   | Sau prototype đầu |
| Could Have  | Âm thanh, hiệu ứng      | Để sau            |
| Could Have  | Nhiều màn chơi          | Để sau            |

Phiên bản đầu tiên cần chứng minh rằng người chơi có thể điều khiển đối tượng và hoàn thành mục tiêu. Những tính năng không ảnh hưởng trực tiếp đến giả thuyết này có thể trì hoãn.

### Bước 3 — Lập kế hoạch GameObject

Một Scene đơn giản có thể tổ chức như sau:

```
PrototypeScene
├── Main Camera
├── Directional Light
├── Ground
├── Player
└── Goal
```

Vai trò:

- `Ground`: mặt phẳng để tạo không gian chơi.
- `Player`: đối tượng được điều khiển.
- `Goal`: đánh dấu vị trí người chơi phải tiếp cận.
- `Main Camera`: quan sát toàn bộ khu vực.
- `Directional Light`: chiếu sáng Scene.

Các GameObject đều có `Transform`, giúp lưu vị trí, góc xoay và tỷ lệ. Các Component khác sẽ cung cấp khả năng hiển thị hoặc hành vi.

### Bước 4 — Dựng Greybox trong Unity

Thực hiện các thao tác:

1. Tạo Scene mới và lưu với tên `PrototypeScene`.
2. Tạo `Plane` và đổi tên thành `Ground`.
3. Tạo `Cube` và đổi tên thành `Player`.
4. Tạo `Cylinder` và đổi tên thành `Goal`.
5. Đặt các đối tượng cách nhau để người chơi phải thực hiện thao tác di chuyển.
6. Điều chỉnh Camera để có thể quan sát cả Player và Goal.

Có thể sử dụng bộ thông số minh họa:

| GameObject | Position (X, Y, Z) | Scale (X, Y, Z) |
| ---------- | ------------------ | --------------- |
| Ground     | (0, 0, 0)          | (2, 1, 2)       |
| Player     | (0, 0.5, -4)       | (1, 1, 1)       |
| Goal       | (0, 0.5, 4)        | (1, 0.5, 1)     |

Các giá trị trên tính theo đơn vị Unity và có thể thay đổi tùy Scene.

Checkpoint 2: Khi mở Scene View, có thể phân biệt rõ đối tượng người chơi, mặt đất và vị trí đích.

### Bước 5 — Tạo tương tác tối thiểu

Nếu dự án đã có hệ thống điều khiển phương tiện, có thể tái sử dụng hệ thống đó.

Nếu tạo dự án mới, có thể thực hành với một script đơn giản tên `PrototypePlayer.cs`.

```
using UnityEngine;

public class PrototypePlayer : MonoBehaviour
{
    [SerializeField] private float speed = 5f;
    [SerializeField] private Transform goal;

    private Renderer playerRenderer;
    private bool completed = false;

    private void Start()
    {
        playerRenderer = GetComponent<Renderer>();
    }

    private void Update()
    {
        if (completed) return;

        float x = 0f;
        float z = 0f;

        if (Input.GetKey(KeyCode.A) ||
            Input.GetKey(KeyCode.LeftArrow)) x -= 1f;

        if (Input.GetKey(KeyCode.D) ||
            Input.GetKey(KeyCode.RightArrow)) x += 1f;

        if (Input.GetKey(KeyCode.W) ||
            Input.GetKey(KeyCode.UpArrow)) z += 1f;

        if (Input.GetKey(KeyCode.S) ||
            Input.GetKey(KeyCode.DownArrow)) z -= 1f;

        Vector3 direction = new Vector3(x, 0, z).normalized;

        transform.position +=
            direction * speed * Time.deltaTime;

        if (goal != null &&
            Vector3.Distance(transform.position, goal.position) < 1.25f)
        {
            completed = true;

            if (playerRenderer != null)
            {
                playerRenderer.material.color = Color.green;
            }

            Debug.Log("Completed! You reached the goal.");
        }
    }
}
```

Giải thích các thành phần quan trọng:

- `speed`: tốc độ di chuyển, có thể điều chỉnh trong Inspector.
- `Input.GetKey()`: xác định phím đang được nhấn.
- `Time.deltaTime`: giúp tốc độ di chuyển ít phụ thuộc vào tốc độ khung hình.
- `Vector3.normalized`: tránh việc di chuyển chéo nhanh hơn di chuyển thẳng.
- `Vector3.Distance()`: đo khoảng cách giữa Player và Goal.
- `completed`: ngăn xử lý hoàn thành lặp lại nhiều lần.

Script sử dụng Legacy Input API. Nếu dự án chỉ bật Input System mới, cần bật chế độ `Both` tại Project Settings → Player → Active Input Handling rồi khởi động lại Editor nếu được yêu cầu. Đây là ví dụ di chuyển trực tiếp bằng Transform, chưa phải bộ điều khiển vật lý hoàn chỉnh.

Để chạy thử, gắn script lên GameObject `Player`, sau đó kéo `Goal` từ Hierarchy vào trường `Goal` trong Inspector. Bảo đảm Player có Renderer và Material hỗ trợ thay đổi màu.

Checkpoint 3: Khi nhấn Play, Player có thể di chuyển bằng bàn phím và đổi sang màu xanh khi đến gần Goal.

### Bước 6 — Kiểm thử prototype

Không chỉ kiểm tra xem trò chơi có chạy hay không. Cần đánh giá xem kết quả có đúng mục tiêu thiết kế không.

Sử dụng bảng kiểm thử:

| Test ID | Hành động          | Kết quả mong đợi                    |
| ------- | ------------------ | ----------------------------------- |
| TC01    | Nhấn W             | Player di chuyển về phía trước      |
| TC02    | Nhấn A/D           | Player di chuyển trái/phải          |
| TC03    | Nhấn hai phím chéo | Tốc độ không tăng bất thường        |
| TC04    | Tiến đến Goal      | Player đổi màu xanh                 |
| TC05    | Chưa đến Goal      | Chưa xuất hiện thông báo hoàn thành |

Các trường hợp trên là kế hoạch kiểm thử, không phải kết quả đã xác nhận. Cần chạy Scene và tự ghi nhận kết quả thực tế.

Ngoài ra, hãy mời ít nhất một người khác thử trò chơi mà không hướng dẫn quá chi tiết.

Quan sát xem người đó có nhận ra vị trí đích, hiểu cách điều khiển và biết khi nào đã hoàn thành hay không.

### Bước 7 — Ghi nhận kết quả và cải tiến

Ghi lại kết quả theo mẫu:

| Hạng mục        | Nội dung cần ghi                 |
| --------------- | -------------------------------- |
| Test ID         | Mã trường hợp kiểm thử           |
| Expected Result | Kết quả mong đợi                 |
| Actual Result   | Kết quả thực tế                  |
| Evidence        | Ảnh màn hình, video hoặc Console |
| Issue           | Vấn đề phát hiện                 |
| Improvement     | Giải pháp đề xuất                |
| Retest          | Kết quả chạy lại sau khi sửa     |

Ví dụ một tình huống giả định: người chơi khó nhận ra Goal vì nó có màu gần giống Ground.

Giải pháp có thể là đổi Material của Goal sang màu dễ phân biệt hơn hoặc điều chỉnh vị trí Camera.

Sau khi sửa, chạy lại chính trường hợp kiểm thử đó để xác định vấn đề đã được giải quyết hay chưa.

## 6. Quy trình thiết kế lặp

Prototype không phải phiên bản cuối cùng. Nó là công cụ để kiểm tra ý tưởng và cải tiến thiết kế.

\#chatgpt-mermaid-\_r_oe\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_oe\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_oe\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_oe\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_oe\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_oe\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_oe\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_oe\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_oe\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_oe\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_oe\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_oe\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_oe\_ p{margin:0;}#chatgpt-mermaid-\_r_oe\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_oe\_ .label text,#chatgpt-mermaid-\_r_oe\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ .node rect,#chatgpt-mermaid-\_r_oe\_ .node circle,#chatgpt-mermaid-\_r_oe\_ .node ellipse,#chatgpt-mermaid-\_r_oe\_ .node polygon,#chatgpt-mermaid-\_r_oe\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .rough-node .label text,#chatgpt-mermaid-\_r_oe\_ .node .label text,#chatgpt-mermaid-\_r_oe\_ .image-shape .label,#chatgpt-mermaid-\_r_oe\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_oe\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .rough-node .label,#chatgpt-mermaid-\_r_oe\_ .node .label,#chatgpt-mermaid-\_r_oe\_ .image-shape .label,#chatgpt-mermaid-\_r_oe\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_oe\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_oe\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_oe\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_oe\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_oe\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_oe\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_oe\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_oe\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_oe\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_oe\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_oe\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_oe\_ .icon-shape,#chatgpt-mermaid-\_r_oe\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_oe\_ .icon-shape p,#chatgpt-mermaid-\_r_oe\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_oe\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_oe\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_oe\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_oe\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_oe\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_oe\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_oe\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_oe\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_oe\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_oe\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_oe\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_oe\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_oe\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_oe\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_oe\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_oe\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .node rect,#chatgpt-mermaid-\_r_oe\_ .node circle,#chatgpt-mermaid-\_r_oe\_ .node ellipse,#chatgpt-mermaid-\_r_oe\_ .node polygon,#chatgpt-mermaid-\_r_oe\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_oe\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_oe\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_oe\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_oe\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_oe\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Xác định ý tưởngViết Project Design DocumentChọn tính năng tối thiểuXây dựng prototypePlaytest và ghi nhậnĐạt mục tiêu?Phân tích và ưu tiên vấn đềĐiều chỉnh thiết kếLưu minh chứng và hoàn thiệnPDDChưaĐạt

Một vòng lặp thiết kế hiệu quả không yêu cầu xây dựng lại toàn bộ trò chơi. Chỉ cần xác định vấn đề quan trọng nhất, đưa ra một thay đổi cụ thể và kiểm chứng lại.

## 7. Lỗi thường gặp và Debug

| Hiện tượng                      | Nguyên nhân có thể                             | Cách kiểm tra                                        |
| ------------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| Player không di chuyển          | Script chưa gắn hoặc Input API không hoạt động | Kiểm tra Inspector, Console và Active Input Handling |
| Player di chuyển quá nhanh      | `speed` quá lớn                                | Giảm tham số trong Inspector                         |
| Đến Goal nhưng không hoàn thành | Chưa gán tham chiếu `goal` hoặc chưa đủ gần    | Kiểm tra trường Goal và khoảng cách                  |
| Player không đổi màu            | Thiếu Renderer hoặc Material không phù hợp     | Kiểm tra Component và Material                       |
| Thay đổi bị mất sau Play Mode   | Chỉnh sửa trong Play Mode                      | Thoát Play Mode và áp dụng thay đổi ở Edit Mode      |

### Quy trình Debug đề xuất

1. Tái hiện vấn đề bằng các thao tác cụ thể.
2. Kiểm tra thông báo trong Console.
3. Kiểm tra trạng thái GameObject, Component và tham chiếu trong Inspector.
4. Đưa ra một giả thuyết về nguyên nhân.
5. Chỉ thay đổi một yếu tố chính để kiểm chứng.
6. Chạy lại trường hợp lỗi và lưu kết quả.

Cách làm này giúp phân biệt lỗi kỹ thuật với vấn đề thiết kế trải nghiệm.

## 8. Sản phẩm cần nộp

Bài Lab yêu cầu chuẩn bị một bộ sản phẩm nhỏ, có thể tổ chức theo cấu trúc:

```
Lab01_ProjectDesign/
├── ProjectDesignDocument.md
├── UnityProject/
├── Evidence/
│   ├── Prototype.png
│   └── Playtest.mp4
└── TestReport.md
```

Trong đó:

| Sản phẩm                 | Yêu cầu                                           |
| ------------------------ | ------------------------------------------------- |
| ProjectDesignDocument.md | Ý tưởng, mục tiêu, core loop, controls và phạm vi |
| UnityProject             | Prototype có thể chạy thử                         |
| Evidence                 | Ảnh hoặc video thể hiện thao tác và kết quả       |
| TestReport.md            | Kết quả mong đợi, thực tế và vấn đề               |
| Improvement              | Có mô tả ít nhất một thay đổi sau kiểm thử        |

### Tiêu chí nghiệm thu

- PDD mô tả rõ mục tiêu và vòng lặp gameplay.
- Có prototype bằng primitive hoặc placeholder assets.
- Người chơi thực hiện được ít nhất một thao tác điều khiển.
- Trò chơi tạo ra một phản hồi quan sát được.
- Có các trường hợp kiểm thử cụ thể.
- Có bằng chứng chạy thử thành công.
- Ghi nhận ít nhất một lỗi hoặc vấn đề thiết kế.
- Thực hiện và kiểm chứng ít nhất một cải tiến.

## 9. Bài tập nâng cao

Thực hiện một thí nghiệm nhỏ với tham số `speed`.

Chạy prototype với ba giá trị minh họa: `3`, `5` và `8`. Giữ nguyên bố cục Scene và các điều kiện khác.

Sau mỗi lần thử, đánh giá khả năng điều khiển và ghi kết quả theo bảng:

| Speed | Cảm nhận điều khiển | Độ khó tiếp cận Goal |
| ----- | ------------------- | -------------------- |
| 3     | Tự đánh giá         | Tự đánh giá          |
| 5     | Tự đánh giá         | Tự đánh giá          |
| 8     | Tự đánh giá         | Tự đánh giá          |

Giải thích vì sao tốc độ thay đổi có thể làm ảnh hưởng đến trải nghiệm, ngay cả khi mục tiêu trò chơi không đổi.

Điểm quan trọng là lựa chọn tham số dựa trên kết quả quan sát, thay vì chỉ dựa vào sở thích của người phát triển.

## 10. Câu hỏi ôn tập

Kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Mục đích quan trọng nhất của prototype là gì?

A. Kiểm chứng cơ chế hoặc giả thuyết thiết kế trước khi mở rộng

B. Hoàn thiện toàn bộ đồ họa trò chơi

C. Thay thế tài liệu thiết kế

D. Tạo thật nhiều tính năng ngay lập tức

Câu 2. Điểm khác biệt chính giữa Greyboxing và xây dựng môi trường hoàn thiện là gì?

A. Greyboxing bắt buộc phải có đồ họa chất lượng cao

B. Greyboxing tập trung vào bố cục và chức năng bằng hình khối đơn giản

C. Greyboxing chỉ dùng được cho trò chơi 2D

D. Greyboxing không thể chạy trong Play Mode

Câu 3. Nếu người chơi không nhận ra vị trí Goal, hành động nào phù hợp nhất?

A. Bổ sung ngay nhiều màn chơi

B. Xóa toàn bộ PDD

C. Điều chỉnh dấu hiệu nhận biết Goal rồi kiểm thử lại

D. Tăng số lượng đối tượng trong Scene

Câu 4. Vì sao cần ghi cả Expected Result và Actual Result?

A. Để tăng số trang báo cáo

B. Để thay thế Console

C. Để tránh phải thử lại trò chơi

D. Để đối chiếu hành vi dự kiến với hành vi thực tế

Câu 5. Khi thay đổi tốc độ Player để kiểm thử, cách thực hiện nào hợp lý nhất?

A. Thay đổi đồng thời tốc độ, camera và kích thước Goal

B. Chỉ thay đổi tốc độ, giữ các điều kiện khác tương đối ổn định

C. Thay đổi ngẫu nhiên mọi thông số

D. Không cần ghi nhận kết quả

Chấm điểmLàm lại

## 11. Tổng kết

Bài Lab 1 giúp hình thành quy trình phát triển trò chơi có kế hoạch và có khả năng kiểm chứng.

Ba nguyên tắc quan trọng cần ghi nhớ:

1. Design before implementation: xác định mục tiêu và cơ chế cốt lõi trước khi xây dựng.
2. Prototype before polish: kiểm chứng khả năng tương tác trước khi đầu tư vào đồ họa hoàn chỉnh.
3. Test and iterate: kiểm thử, ghi nhận, điều chỉnh và chạy lại để cải thiện sản phẩm.

Một Project Design Document tốt không phải là tài liệu cố định từ đầu đến cuối dự án. Nó cần được cập nhật khi quá trình thực hành phát hiện những giả thuyết thiết kế chưa phù hợp.

Ghi chú: Bài học được biên soạn độc lập bằng tiếng Việt theo chủ đề công khai của Unity Junior Programmer — Player Control, không phải bản dịch chính thức hay bản ghi nội dung bài giảng. Các ví dụ, thông số và bài tập được xây dựng để phục vụ thực hành; giao diện và thiết lập có thể khác giữa các phiên bản Unity.