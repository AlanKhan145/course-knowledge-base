# Bài 03 — Challenge: Add a Bonus Scene

Unity Essentials · Publishing Essentials · Tutorial · Unity 6.3

Chủ đề: Thêm một Scene bổ sung, kết nối các Scene và kiểm thử dự án trước khi xuất bản.

Nguồn học: [Unity Learn — Publishing Essentials](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Một dự án Unity có thể bao gồm nhiều Scene, mỗi Scene phục vụ một chức năng hoặc mang đến một trải nghiệm khác nhau. Khi chuẩn bị xuất bản, các Scene cần được tổ chức thành một sản phẩm thống nhất, cho phép người dùng chuyển đổi giữa các nội dung mà không gặp lỗi.

Trong thử thách Challenge: Add a Bonus Scene, nhiệm vụ là tạo thêm một Scene bổ sung (Bonus Scene) vào dự án Unity, kết nối Scene này với trải nghiệm chính và đảm bảo nó hoạt động trong bản build.

Ví dụ, một dự án trưng bày sản phẩm có thể có Scene chính giới thiệu sản phẩm và Scene phụ cho phép người dùng khám phá mô hình 3D hoặc tương tác với một minigame.

Kết quả mong đợi là một ứng dụng mà người dùng có thể mở Bonus Scene, thực hiện thao tác tương tác và quay về Scene chính.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của Scene bổ sung trong dự án Unity.
2. Tạo và cấu hình một Scene mới bằng Unity Editor.
3. Sử dụng `SceneManager` để chuyển đổi giữa các Scene.
4. Đưa các Scene cần thiết vào danh sách build.
5. Kiểm thử chức năng chuyển Scene trong Editor và bản build thực tế.
6. Ghi lại minh chứng hoạt động và các lỗi phát hiện trong quá trình kiểm thử.

## 3. Kiến thức trọng tâm

### 3.1. Scene và Bonus Scene

Scene là không gian chứa các GameObject, Component và những thành phần cần thiết để xây dựng một phần trải nghiệm trong Unity.

Bonus Scene là Scene bổ sung được thêm vào để mở rộng nội dung hoặc cung cấp trải nghiệm phụ.

Một Bonus Scene có thể là:

- Phòng trưng bày mô hình 3D.
- Minigame hoặc thử thách nhỏ.
- Phòng khám phá có tương tác.
- Màn hình giới thiệu tác giả hoặc thông tin dự án.

Bonus Scene không nhất thiết phải phức tạp. Điều quan trọng là Scene có mục đích rõ ràng và kết nối được với dự án chính.

### 3.2. Các thành phần cần sử dụng

| Thành phần       | Vai trò                                         |
| ---------------- | ----------------------------------------------- |
| `Scene`          | Chứa nội dung của từng không gian               |
| `GameObject`     | Đại diện cho các đối tượng trong Scene          |
| `Component`      | Cung cấp dữ liệu và hành vi cho GameObject      |
| `SceneManager`   | Quản lý việc tải và chuyển đổi Scene khi chạy   |
| `Button`         | Cho phép người dùng kích hoạt thao tác          |
| `Build Profiles` | Cấu hình nền tảng và nội dung đưa vào bản build |
| `Console`        | Hiển thị thông báo, cảnh báo và lỗi             |

### 3.3. Luồng hoạt động giữa các Scene

\#chatgpt-mermaid-\_r_gc\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_gc\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_gc\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_gc\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_gc\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_gc\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_gc\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_gc\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_gc\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_gc\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_gc\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_gc\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_gc\_ p{margin:0;}#chatgpt-mermaid-\_r_gc\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_gc\_ .label text,#chatgpt-mermaid-\_r_gc\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ .node rect,#chatgpt-mermaid-\_r_gc\_ .node circle,#chatgpt-mermaid-\_r_gc\_ .node ellipse,#chatgpt-mermaid-\_r_gc\_ .node polygon,#chatgpt-mermaid-\_r_gc\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .rough-node .label text,#chatgpt-mermaid-\_r_gc\_ .node .label text,#chatgpt-mermaid-\_r_gc\_ .image-shape .label,#chatgpt-mermaid-\_r_gc\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_gc\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .rough-node .label,#chatgpt-mermaid-\_r_gc\_ .node .label,#chatgpt-mermaid-\_r_gc\_ .image-shape .label,#chatgpt-mermaid-\_r_gc\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_gc\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_gc\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_gc\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_gc\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_gc\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_gc\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_gc\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_gc\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_gc\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_gc\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_gc\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_gc\_ .icon-shape,#chatgpt-mermaid-\_r_gc\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_gc\_ .icon-shape p,#chatgpt-mermaid-\_r_gc\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_gc\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_gc\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_gc\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_gc\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_gc\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_gc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_gc\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_gc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_gc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_gc\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_gc\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_gc\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_gc\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_gc\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_gc\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_gc\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .node rect,#chatgpt-mermaid-\_r_gc\_ .node circle,#chatgpt-mermaid-\_r_gc\_ .node ellipse,#chatgpt-mermaid-\_r_gc\_ .node polygon,#chatgpt-mermaid-\_r_gc\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_gc\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_gc\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_gc\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_gc\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_gc\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Khởi động ứng dụngMain SceneNgười dùng chọn gì?Bonus SceneKhám phá / Tương tácReturn ButtonTrải nghiệm chínhBonusNội dung chính

Trong mô hình này, Main Scene đóng vai trò điểm truy cập chính. Người dùng chọn nội dung bổ sung để mở Bonus Scene, tương tác và quay trở lại.

Đối với một dự án nhỏ, chuyển Scene bằng `LoadSceneMode.Single` là cách phù hợp vì Unity thay thế Scene hiện tại bằng Scene mới.

## 4. Chuẩn bị thực hành

Trước khi thực hiện thử thách, cần chuẩn bị một dự án Unity có thể chạy trong Play Mode.

Các điều kiện cần có:

- Unity Editor 6.3.
- Một dự án Unity đã được lưu.
- Ít nhất một Scene chính.
- Một số GameObject hoặc asset để tạo nội dung Bonus Scene.
- Khả năng chạy thử ứng dụng bằng Play Mode.

Có thể tổ chức thư mục như sau:

```
Assets/
├── Scenes/
│   ├── MainScene.unity
│   └── BonusScene.unity
├── Scripts/
│   └── SceneNavigator.cs
├── Materials/
├── Prefabs/
└── Audio/
```

Cấu trúc này giúp quản lý tài nguyên rõ ràng và hạn chế nhầm lẫn khi cấu hình build.

## 5. Thử thách thực hành: Add a Bonus Scene

### 5.1. Bước 1 — Tạo Bonus Scene

Trong Unity Editor:

1. Chọn `File > New Scene`.
2. Chọn mẫu Scene phù hợp với dự án.
3. Lưu Scene vào thư mục `Assets/Scenes`.
4. Đặt tên `BonusScene`.
5. Kiểm tra Camera và ánh sáng nếu thực hiện trong môi trường 3D.

Yêu cầu: Bonus Scene phải được lưu thành một asset `.unity` riêng, không chỉ là nội dung được tạo tạm thời trong Play Mode.

### 5.2. Bước 2 — Thiết kế nội dung bổ sung

Tạo một trải nghiệm tương tác đơn giản trong Bonus Scene.

Ví dụ: Một phòng trưng bày có mô hình 3D.

[Platformer 10 Neon - Low Poly 3D Models Pack](https://images.openai.com/static-rsc-4/TUal9JGvBmv7Zd_4bFhv18V0BRcvyVDXB_84j1uLrcGxnTJCnivhxoTdsjOTS6sWPvfkQkZ6XBN81JlZxD8609OPa1i4PPm6mM89kYR9Zh1hLsu5GEeJtyG0tk2QDx3iFEy04OqaAUEP4asxQPY0k_1SVh3uSt6AyAjbvQxs4L8?purpose=inline)

Không gian 3D trưng bày

[Rotate a object in unity - General Development - itch.io](https://images.openai.com/static-rsc-4/yJZKZOfTQY7e03oN_WMlN8ozGJw4x8H4fJc05_FGEl6jCFN0cItbGhhh-md5uw8AWVMMoIuTS6qcgOZ5-ECLpuQamnQ_0wInp1N0KQ3q5BU4OYfwVaWtbEYJn-Q7Ek7zL4acKAcrHCpi16P5VKy2Ld4mrB6kUr9ZVceM2k7O9Ts?purpose=inline)

Vật thể tương tác hoặc chuyển động

Người học có thể tự xây dựng nội dung theo ý tưởng của mình. Một phương án tối thiểu gồm:

- Một nền hoặc khu vực trưng bày.
- Một GameObject trung tâm.
- Một Camera có góc nhìn phù hợp.
- Một thao tác tương tác, chẳng hạn nhấn nút để thay đổi trạng thái vật thể.
- Một nút quay về Main Scene.

Checkpoint 1: Chạy Bonus Scene trong Play Mode và xác nhận các GameObject hiển thị đúng, đồng thời có ít nhất một phản hồi tương tác quan sát được.

### 5.3. Bước 3 — Tạo chức năng chuyển Scene

Để kết nối Main Scene và Bonus Scene, có thể sử dụng `SceneManager` trong C#.

Một phương thức chuyển Scene cơ bản:

```
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneNavigator : MonoBehaviour
{
    public void OpenBonusScene()
    {
        SceneManager.LoadScene("BonusScene");
    }

    public void ReturnToMainScene()
    {
        SceneManager.LoadScene("MainScene");
    }
}
```

Giải thích:

- `SceneManager` cung cấp các chức năng quản lý Scene.
- `LoadScene("BonusScene")` tải Scene bổ sung.
- `LoadScene("MainScene")` quay về Scene chính.
- Hai phương thức `public` có thể được gọi thông qua sự kiện `On Click()` của UI Button.

`LoadScene` tải Scene theo tên hoặc chỉ số trong danh sách build. Với Scene lớn, `LoadSceneAsync` thường phù hợp hơn để hạn chế gián đoạn khi tải nội dung.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



Cấu hình trong Unity:

1. Tạo script `SceneNavigator.cs`.
2. Gắn script vào một GameObject thích hợp trong mỗi Scene cần điều hướng.
3. Tạo Button bằng hệ thống Unity UI.
4. Trong Inspector của Button, tìm sự kiện `On Click()`.
5. Kéo GameObject chứa `SceneNavigator` vào ô đối tượng của sự kiện.
6. Chọn phương thức `OpenBonusScene()` hoặc `ReturnToMainScene()` tương ứng.

Checkpoint 2: Nhấn nút trong Main Scene phải mở Bonus Scene; nhấn nút Return phải đưa người dùng quay về Main Scene.

### 5.4. Bước 4 — Đưa Bonus Scene vào bản build

Một Scene chạy được trong Editor chưa chắc đã được đưa vào bản build.

Trong Unity 6.3, sử dụng `File > Build Profiles` và mở phần `Scene List` để quản lý các Scene được build.

Kiểm tra rằng:

- `MainScene` có trong Scene List.
- `BonusScene` có trong Scene List.
- Cả hai Scene đều được bật để đưa vào build.
- Main Scene được đặt đầu danh sách nếu muốn nó là Scene khởi động.

Unity cho phép thêm Scene đang mở, thay đổi thứ tự và loại trừ Scene khỏi bản build thông qua Scene List.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



Ví dụ:

| Build Index | Scene        | Trạng thái |
| ----------- | ------------ | ---------- |
| 0           | `MainScene`  | Enabled    |
| 1           | `BonusScene` | Enabled    |

Checkpoint 3: Có thể mở và quay lại Bonus Scene sau khi build, không chỉ khi chạy trong Unity Editor.

### 5.5. Bước 5 — Build và chạy thử

1. Mở `File > Build Profiles`.
2. Chọn nền tảng mục tiêu, chẳng hạn Windows hoặc Web.
3. Kiểm tra lại cấu hình Scene và thiết lập chất lượng.
4. Thực hiện Build hoặc Build and Run theo nền tảng.
5. Chạy ứng dụng đã build.
6. Thử truy cập Bonus Scene, tương tác và quay về.

Khi kiểm thử Web build, nên chạy thông qua môi trường phục vụ web phù hợp thay vì chỉ mở trực tiếp các tệp build.

## 6. Kiểm thử và đánh giá kết quả

Không nên đánh giá dự án chỉ dựa trên việc Scene chạy thành công trong Editor. Bản build thực tế là nơi cần kiểm tra lại toàn bộ trải nghiệm.

### 6.1. Các trường hợp kiểm thử

| Test case | Thao tác                | Kết quả mong đợi                     |
| --------- | ----------------------- | ------------------------------------ |
| TC01      | Khởi động ứng dụng      | Main Scene xuất hiện                 |
| TC02      | Nhấn nút Bonus          | Bonus Scene được tải                 |
| TC03      | Tương tác với vật thể   | Có phản hồi rõ ràng                  |
| TC04      | Nhấn Return             | Quay lại Main Scene                  |
| TC05      | Chạy bản build          | Các chức năng hoạt động              |
| TC06      | Mở Console khi chạy thử | Không có lỗi liên quan đến chức năng |

### 6.2. Ghi lại kết quả kiểm thử

Mỗi trường hợp kiểm thử nên lưu các thông tin sau:

| Thông tin        | Nội dung ghi nhận          |
| ---------------- | -------------------------- |
| Kết quả mong đợi | Chuyển sang Bonus Scene    |
| Kết quả thực tế  | Scene được tải và hiển thị |
| Minh chứng       | Ảnh màn hình hoặc video    |
| Trạng thái       | Pass / Fail                |
| Nhận xét         | Mô tả ngắn nếu có vấn đề   |

Nếu phát hiện lỗi, ghi lại cách tái hiện trước khi sửa. Sau khi sửa, chạy lại cùng trường hợp kiểm thử để xác nhận kết quả.

## 7. Lỗi thường gặp và cách khắc phục

| Hiện tượng                                   | Nguyên nhân có thể                           | Hướng kiểm tra                             |
| -------------------------------------------- | -------------------------------------------- | ------------------------------------------ |
| Không mở được Bonus Scene                    | Chưa thêm Scene vào build                    | Kiểm tra Scene List                        |
| `Scene couldn't be loaded`                   | Tên Scene sai hoặc không được đưa vào build  | Kiểm tra tên và trạng thái Scene           |
| Button không phản hồi                        | Chưa gán `On Click()` hoặc thiếu cấu hình UI | Kiểm tra Button, EventSystem và tham chiếu |
| Màn hình đen                                 | Camera hoặc ánh sáng chưa phù hợp            | Kiểm tra Camera, Culling Mask và Lighting  |
| Asset biến mất trong build                   | Thiếu tham chiếu hoặc cấu hình tài nguyên    | Kiểm tra Inspector và Console              |
| Chạy được trong Editor nhưng lỗi trong build | Khác biệt về nền tảng hoặc dữ liệu           | Kiểm tra log và cấu hình build             |

Quy trình xử lý lỗi:

\#chatgpt-mermaid-\_r_ii\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_ii\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ii\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_ii\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_ii\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_ii\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_ii\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_ii\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_ii\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_ii\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ii\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ii\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_ii\_ p{margin:0;}#chatgpt-mermaid-\_r_ii\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_ii\_ .label text,#chatgpt-mermaid-\_r_ii\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ .node rect,#chatgpt-mermaid-\_r_ii\_ .node circle,#chatgpt-mermaid-\_r_ii\_ .node ellipse,#chatgpt-mermaid-\_r_ii\_ .node polygon,#chatgpt-mermaid-\_r_ii\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .rough-node .label text,#chatgpt-mermaid-\_r_ii\_ .node .label text,#chatgpt-mermaid-\_r_ii\_ .image-shape .label,#chatgpt-mermaid-\_r_ii\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_ii\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .rough-node .label,#chatgpt-mermaid-\_r_ii\_ .node .label,#chatgpt-mermaid-\_r_ii\_ .image-shape .label,#chatgpt-mermaid-\_r_ii\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_ii\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_ii\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ii\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ii\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_ii\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ii\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ii\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ii\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_ii\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_ii\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_ii\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_ii\_ .icon-shape,#chatgpt-mermaid-\_r_ii\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_ii\_ .icon-shape p,#chatgpt-mermaid-\_r_ii\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_ii\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_ii\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_ii\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_ii\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_ii\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_ii\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_ii\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_ii\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_ii\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ii\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_ii\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_ii\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ii\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_ii\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_ii\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_ii\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .node rect,#chatgpt-mermaid-\_r_ii\_ .node circle,#chatgpt-mermaid-\_r_ii\_ .node ellipse,#chatgpt-mermaid-\_r_ii\_ .node polygon,#chatgpt-mermaid-\_r_ii\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_ii\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_ii\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_ii\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_ii\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_ii\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiĐọc Console / LogKiểm tra Scene, GameObject vàComponentĐưa ra giả thuyếtThử một thay đổiLỗi đã được sửa?Kiểm thử lại và lưu minh chứngChưaRồi

Khi debug, chỉ nên thay đổi một nguyên nhân giả định tại một thời điểm. Việc này giúp xác định chính xác thay đổi nào đã giải quyết vấn đề.

## 8. Sản phẩm cần nộp

Sản phẩm cuối cùng của thử thách là một dự án Unity có Scene bổ sung và có thể kiểm chứng được.

Yêu cầu tối thiểu:

- Dự án có Main Scene và Bonus Scene riêng biệt.
- Bonus Scene có nội dung hiển thị phù hợp.
- Có ít nhất một thao tác tương tác và phản hồi quan sát được.
- Có chức năng chuyển sang Bonus Scene.
- Có chức năng quay lại Main Scene.
- Các Scene cần thiết được đưa vào build.
- Ứng dụng chạy được bên ngoài Editor.
- Có ảnh hoặc video minh chứng.
- Có ghi nhận ít nhất một lỗi hoặc trường hợp kiểm thử.
- Có ít nhất một cải tiến sau lần kiểm thử đầu tiên.

### 8.1. README cho dự án

Tạo một tệp `README.md` ngắn, trong đó trình bày:

| Mục              | Nội dung                           |
| ---------------- | ---------------------------------- |
| Project Overview | Mục tiêu và chức năng của dự án    |
| Features         | Các Scene và khả năng tương tác    |
| How to Run       | Cách mở và chạy ứng dụng           |
| Controls         | Hướng dẫn thao tác                 |
| Platform         | Nền tảng build mục tiêu            |
| Known Issues     | Các lỗi còn tồn tại                |
| Credits          | Nguồn và quyền sử dụng asset, nhạc |

Trước khi chia sẻ công khai, cần kiểm tra giấy phép sử dụng asset, âm thanh và tránh đưa dữ liệu cá nhân hoặc thông tin nhạy cảm vào bản build hay tài liệu dự án.

## 9. Thử thách nâng cao

Sau khi hoàn thành yêu cầu cơ bản, người học có thể chọn một trong các hướng mở rộng sau:

Mức 1 — Thay đổi nội dung Scene: Thêm các GameObject, thay đổi ánh sáng, màu sắc hoặc vật liệu để Bonus Scene có phong cách riêng.

Mức 2 — Tăng khả năng tương tác: Tạo vật thể xoay, di chuyển hoặc thay đổi màu khi người dùng thao tác. Thử thay đổi tham số tốc độ và giải thích kết quả.

Mức 3 — Cải thiện chuyển Scene: Sử dụng `SceneManager.LoadSceneAsync()` và thiết kế màn hình tải nội dung phù hợp.

Mức 4 — Hoàn thiện Portfolio: Thêm giao diện giới thiệu dự án, hướng dẫn sử dụng, âm thanh và video demo thể hiện cả Main Scene lẫn Bonus Scene.

## 10. Câu hỏi ôn tập

Kiểm tra kiến thức

0/5 câu đã trả lời

Câu 1. Vai trò chính của Bonus Scene là gì?

A. Thay thế hoàn toàn Main Scene

B. Bổ sung nội dung hoặc trải nghiệm cho dự án

C. Lưu trữ tất cả mã nguồn C#

D. Thay thế Build Profiles

Câu 2. Một Scene chạy tốt trong Editor nhưng không thể tải ở bản build. Nên kiểm tra điều gì trước?

A. Scene có nằm trong danh sách build và được bật không

B. Độ phân giải màn hình

C. Màu sắc của GameObject

D. Tên của Camera

Câu 3. Phương thức nào phù hợp để chuyển từ Main Scene sang Bonus Scene bằng tên?

A. GameObject.Find()

B. Destroy()

C. SceneManager.LoadScene()

D. Application.Quit()

Câu 4. Vì sao cần kiểm thử ứng dụng sau khi build?

A. Để bỏ qua việc kiểm tra Console

B. Để tự động tạo thêm tài nguyên

C. Vì Play Mode không chạy được Scene

D. Vì môi trường build thực tế có thể khác Editor

Câu 5. Khi phát hiện một lỗi tương tác, quy trình nào phù hợp nhất?

A. Tái hiện lỗi, kiểm tra log, thử sửa một nguyên nhân, kiểm thử lại

B. Thay toàn bộ asset và script cùng lúc

C. Xóa Scene ngay lập tức

D. Bỏ qua lỗi nếu Editor vẫn mở được

Chấm điểmLàm lại

## 11. Tổng kết bài học

Thử thách Add a Bonus Scene giúp củng cố các kỹ năng quan trọng trong quá trình hoàn thiện và xuất bản dự án Unity.

Một Bonus Scene được xem là hoàn chỉnh khi có nội dung rõ ràng, khả năng tương tác, cơ chế điều hướng và hoạt động ổn định trong bản build.

Đặc biệt, cần phân biệt giữa việc chạy thành công trong Unity Editor và việc phát hành một ứng dụng có thể sử dụng thực tế. Đây là nền tảng để xây dựng portfolio có chất lượng và dễ chia sẻ.

Tài liệu tham khảo:

- [Unity Learn — Publishing Essentials](https://learn.unity.com/pathway/unity-essentials/unit/publishing-essentials?version=6.3\&utm_source=chatgpt.com)
- [Unity 6.3 Manual — Manage scenes in a build](https://docs.unity3d.com/6000.3/Documentation/Manual/build-profile-scene-list.html?utm_source=chatgpt.com)
- [Unity 6.3 Scripting API — SceneManager.LoadScene](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/SceneManagement.SceneManager.LoadScene.html?utm_source=chatgpt.com)

Ghi chú: Bài học được biên soạn độc lập để thực hành kỹ năng thêm và xuất bản Bonus Scene, không phải bản dịch nguyên văn hướng dẫn chính thức của Unity.