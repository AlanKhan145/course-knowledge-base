# Bài 06 — Challenge 3: Balloons, Bombs, & Booleans

Junior Programmer · Unit 3: Sound and Effects · Unity 6.3

Bài thực hành thử thách

C# / Gameplay

Boolean & Điều kiện

> Nguồn tham khảo: [Unity Learn — Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)
>
> Lưu ý: Nội dung dưới đây là bài học tiếng Việt tự biên soạn dựa trên đề mục công khai, không phải bản dịch chính thức hay bản ghi đầy đủ của Unity. Các ví dụ được thiết kế để thực hành độc lập và không nhất thiết trùng với tài nguyên của thử thách gốc.

## 1. Tổng quan bài học

Challenge 3 — Balloons, Bombs, & Booleans là bài thực hành thuộc Mission Sound and Effects trong lộ trình Junior Programmer.

Bài học tập trung vào việc vận dụng lập trình C# để điều khiển hành vi của các đối tượng trong Unity, đặc biệt là sử dụng biến Boolean, câu lệnh điều kiện và phương thức xử lý sự kiện.

Trong một trò chơi đơn giản, người chơi có thể tương tác với nhiều loại đối tượng, chẳng hạn như bóng bay và bom. Mỗi đối tượng sẽ tạo ra phản hồi khác nhau tùy theo trạng thái trò chơi.

[Challenge 3: Balloons & Booleans Game Development Guide - Studocu](https://images.openai.com/static-rsc-4/ml0TXXyrvC7BxnGoBnZIPDQ6JulVlLhysgLEQYZSKm-EBm2i4SeE08Fnnen5Uyd65fqsRvqLBcXTymsiTrEZ8FAKjg-FRAaHw1YIn6WP_nVR1ykkdcVtDbAFTd9jp4lemEutAuax-JGpVOq9hiCxxhkY70b_BHwcPAicmiVz9hA?purpose=inline)

[studocu.com](https://www.studocu.com/ko/document/soonchunhyang-university/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%8B%A4%EC%8A%B5/challenge-3-balloons-and-booleans/55173483?utm_source=chatgpt.com)

Hình ảnh tham khảo cho chủ đề Balloons, Bombs & Booleans.

### Mục tiêu tổng quát

Xây dựng một hệ thống có thể:

- Nhận biết sự kiện tương tác trong game.
- Kiểm tra điều kiện bằng các biến và biểu thức Boolean.
- Thực hiện hành động phù hợp với từng trường hợp.
- Hiển thị phản hồi quan sát được.
- Kiểm tra, phát hiện và sửa lỗi khi chạy thử.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

| Kỹ năng              | Kết quả mong đợi                           |
| -------------------- | ------------------------------------------ |
| Lập trình C#         | Tạo và gắn script vào GameObject           |
| Biến và kiểu dữ liệu | Khai báo, thay đổi và sử dụng biến         |
| Boolean              | Phân biệt hai trạng thái `true` và `false` |
| Điều kiện            | Sử dụng `if`, `else` để quyết định hành vi |
| Phương thức          | Tách chức năng thành các hàm độc lập       |
| Unity Editor         | Thay đổi tham số trong Inspector           |
| Debug                | Phát hiện lỗi bằng Console và kiểm thử     |

## 3. Kiến thức trọng tâm

### 3.1. GameObject, Component và MonoBehaviour

Trong Unity, các đối tượng trong trò chơi được tổ chức theo cấu trúc:

Scene

Không gian chứa các đối tượng trong trò chơi

GameObject

Ví dụ: Balloon, Bomb, GameManager

Component có sẵn

Transform, Collider, Rigidbody...

C# Script

Kế thừa MonoBehaviour

Các khái niệm:

| Khái niệm       | Chức năng                                           |
| --------------- | --------------------------------------------------- |
| `Scene`         | Không gian thiết kế và chạy thử trò chơi            |
| `GameObject`    | Đại diện cho một đối tượng                          |
| `Component`     | Bổ sung dữ liệu hoặc chức năng cho GameObject       |
| `MonoBehaviour` | Lớp cơ sở phổ biến cho các script Component tự viết |
| `Inspector`     | Hiển thị và chỉnh sửa thuộc tính                    |
| `Play Mode`     | Chạy thử trò chơi trong Editor                      |

### 3.2. Kiểu dữ liệu Boolean

Boolean là kiểu dữ liệu biểu diễn hai trạng thái:

- `true`: Đúng.
- `false`: Sai.

Ví dụ:

```
bool isGameActive = true;
bool isGameOver = false;
bool hasWon = false;
```

Các biến này có thể được dùng để quyết định hành động nào được phép thực hiện.

```
if (isGameActive)
{
    Debug.Log("Trò chơi đang hoạt động");
}
else
{
    Debug.Log("Trò chơi đã dừng");
}
```

### 3.3. Câu lệnh điều kiện

Câu lệnh `if` cho phép chương trình đưa ra quyết định dựa trên kết quả của một điều kiện.

```
if (score >= 10)
{
    Debug.Log("Đạt mục tiêu!");
}
else
{
    Debug.Log("Tiếp tục chơi!");
}
```

Giải thích:

- `score >= 10`: So sánh điểm hiện tại với mục tiêu.
- Nếu điều kiện đúng, thực hiện khối lệnh đầu tiên.
- Nếu sai, thực hiện khối lệnh trong `else`.

### 3.4. Các toán tử thường dùng

| Toán tử  | Ý nghĩa           | Ví dụ                    |
| -------- | ----------------- | ------------------------ |
| `==`     | Bằng              | `score == 10`            |
| `!=`     | Khác              | `score != 0`             |
| `>`      | Lớn hơn           | `score > 5`              |
| `<`      | Nhỏ hơn           | `score < 5`              |
| `>=`     | Lớn hơn hoặc bằng | `score >= 10`            |
| `<=`     | Nhỏ hơn hoặc bằng | `score <= 10`            |
| `&&`     | AND — và          | `isActive && hasHealth`  |
| `\\|\\|` | OR — hoặc         | `hasWon \\|\\| hasBonus` |
| `!`      | NOT — phủ định    | `!isGameOver`            |

Ví dụ:

```
if (isGameActive && score >= 10)
{
    Debug.Log("Người chơi đạt mục tiêu!");
}
```

Điều kiện trên chỉ đúng khi cả hai biểu thức đều đúng.

## 4. Quy trình xử lý sự kiện trong game

Giả sử xây dựng một trò chơi minh họa có hai loại đối tượng:

- Balloon: Người chơi tương tác với bóng để tăng điểm.
- Bomb: Người chơi tương tác với bom sẽ nhận phản hồi bất lợi.

Đây là một tình huống tự thiết kế nhằm luyện tập điều kiện, không phải đặc tả đầy đủ của Challenge gốc.

Người chơi tương tác với đối tượng

Kiểm tra loại đối tượng

Balloon

Tăng điểm

Phát hiệu ứng

Bomb

Trừ điểm hoặc máu

Phát hiệu ứng

Cập nhật trạng thái game

Kiểm tra thắng, thua hoặc tiếp tục chơi

Sơ đồ thể hiện nguyên tắc:

Sự kiện → Kiểm tra điều kiện → Thực hiện hành động → Cập nhật trạng thái.

## 5. Thực hành từng bước

### Bước 1 — Chuẩn bị Scene

1. Mở Unity Hub.
2. Tạo dự án Unity hoặc mở dự án đang thực hành.
3. Tạo một Scene thử nghiệm.
4. Thêm GameObject trống, đặt tên `GameManager`.
5. Tạo thư mục `Scripts` để quản lý mã nguồn.

### Bước 2 — Tạo C# Script

Trong thư mục `Scripts`:

1. Tạo một C# Script mới.
2. Đặt tên `SimpleCounter.cs`.
3. Mở bằng trình soạn thảo C#.
4. Đảm bảo tên lớp và tên tệp trùng nhau.

### Bước 3 — Viết mã ví dụ

Ví dụ tự biên soạn: bộ đếm sự kiện đơn giản.

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

Giải thích mã nguồn:

| Thành phần             | Chức năng                               |
| ---------------------- | --------------------------------------- |
| `MonoBehaviour`        | Cho phép script hoạt động như Component |
| `[SerializeField]`     | Cho phép chỉnh `target` trong Inspector |
| `target`               | Số lần cần đạt                          |
| `count`                | Số lần đã đếm                           |
| `CountOne()`           | Phương thức tăng bộ đếm                 |
| `count++`              | Tăng giá trị lên 1                      |
| `if (count >= target)` | Kiểm tra đã đạt mục tiêu                |
| `Debug.Log()`          | In thông báo ra Console                 |

Lưu ý: `CountOne()` không tự chạy khi nhấn Play. Phương thức này cần được gọi từ một sự kiện hoặc script khác.

### Bước 4 — Gắn Script vào GameObject

1. Chọn `GameManager` trong Hierarchy.
2. Kéo script `SimpleCounter` vào Inspector.
3. Quan sát trường `Target`.
4. Thiết lập giá trị `Target = 3`.

### Bước 5 — Kết nối phương thức với sự kiện

Một cách kiểm thử đơn giản là tạo một UI Button:

1. Tạo một Button trong Canvas.
2. Trong Inspector của Button, tìm mục `On Click()`.
3. Nhấn `+` để thêm sự kiện.
4. Kéo `GameManager` vào ô tham chiếu.
5. Chọn phương thức `SimpleCounter → CountOne()`.

Khi nhấn Button, `count` sẽ tăng lên 1.

### Bước 6 — Kiểm tra kết quả

Bấm Play và nhấn Button nhiều lần:

| Thao tác   | Giá trị count | Kết quả                      |
| ---------- | ------------- | ---------------------------- |
| Nhấn lần 1 | 1             | Chưa đạt                     |
| Nhấn lần 2 | 2             | Chưa đạt                     |
| Nhấn lần 3 | 3             | Xuất hiện thông báo          |
| Nhấn lần 4 | 4             | Thông báo tiếp tục xuất hiện |

Nhận xét: Trong đoạn mã hiện tại, thông báo sẽ tiếp tục xuất hiện ở các lần gọi sau khi đạt mục tiêu, vì điều kiện `count >= target` vẫn đúng.

### Bước 7 — Thử nghiệm biến Boolean

Để bổ sung logic chỉ hoàn thành một lần, có thể thay thế script bằng phiên bản mở rộng:

```

using UnityEngine;

public class SimpleCounter : MonoBehaviour
{
    [SerializeField] private int target = 3;

    private int count = 0;
    private bool isCompleted = false;

    public void CountOne()
    {
        if (isCompleted)
        {
            return;
        }

        count++;

        Debug.Log("Count: " + count);

        if (count >= target)
        {
            isCompleted = true;
            Debug.Log("Đã hoàn thành mục tiêu!");
        }
    }
}

```

Điểm cải tiến:

- `isCompleted = false`: Ban đầu chưa hoàn thành.
- `if (isCompleted)`: Kiểm tra trạng thái trước khi xử lý.
- `return`: Kết thúc phương thức nếu đã hoàn thành.
- `isCompleted = true`: Đánh dấu hoàn thành sau khi đạt mục tiêu.

Sự thay đổi này giúp tránh xử lý lặp lại khi điều kiện chiến thắng đã được đáp ứng.

## 6. Bài tập thực hành — Balloons, Bombs & Booleans

### Nhiệm vụ

Tạo một Scene minh họa thể hiện rõ việc sử dụng điều kiện và Boolean trong trò chơi.

Có thể sử dụng hai loại GameObject:

[Balloons 3D Model - TurboSquid 1949225](https://images.openai.com/static-rsc-4/wrfKyHCnIpO-umFlJoZIHD-p85cMtMFqlxlttx7uNfwVTN7SF8thxVTmwqUCyqHM07GDo8sbPG-UhlAdsbBCICeliG-h64sqvjmR2F5xlhvfxVXtjOQw7roh8Pxhis7_9KSE88GEbQs6EcvZ5V71Sdq546fMAGY3jpU0ZxokyC4?purpose=inline)

Balloon

Đối tượng giúp tăng điểm khi người chơi tương tác.

[bomb](https://images.openai.com/static-rsc-4/D8jl6iP7eYMd0DD5IYVmybYqzKrSyDYJbBiptLOeanLr24zuELaS3lTXJK91sQT4g1IpTXuYQN-T0TJ2cWGzagUJ5zTbl_3JV8MRRnoFATKZkcXFz_RfqVUhIrPBxGUiiX4KUP1Cdq7JNTd1V6l66IxhgUku4S3JlH61oJ_OBiijk20JTtG2ioSX2b5g5Iiw?purpose=inline)

Bomb

Đối tượng tạo phản hồi bất lợi khi tương tác.

Yêu cầu cơ bản:

- Có ít nhất một thao tác tương tác.
- Sử dụng biến để lưu trạng thái.
- Có tối thiểu một điều kiện `if`.
- Có phản hồi quan sát được trên màn hình hoặc Console.
- Có thể chạy thử độc lập trong Unity Editor.

### Sản phẩm cần nộp

| Thành phần    | Yêu cầu                             |
| ------------- | ----------------------------------- |
| Unity Project | Dự án mở và chạy được               |
| Scene         | Có các đối tượng phục vụ thử nghiệm |
| Script C#     | Không có lỗi biên dịch              |
| Minh chứng    | Ảnh hoặc video chạy thử             |
| Báo cáo ngắn  | Mô tả kết quả và một lỗi đã sửa     |

### Mức nâng cao

Thay đổi một hoặc nhiều tham số, chẳng hạn:

- Số điểm cần đạt để chiến thắng.
- Số lần tương tác.
- Trạng thái được phép tiếp tục chơi.

Giải thích nguyên nhân khiến hành vi thay đổi.

## 7. Lỗi thường gặp và cách kiểm tra

| Hiện tượng                  | Nguyên nhân có thể                        | Cách xử lý                             |
| --------------------------- | ----------------------------------------- | -------------------------------------- |
| Script không được nhận diện | Tên lớp và tên file không khớp            | Kiểm tra và đồng bộ tên                |
| `NullReferenceException`    | Tham chiếu Component chưa được gán        | Kiểm tra Inspector hoặc `GetComponent` |
| Không xuất hiện log         | Phương thức chưa được gọi                 | Kiểm tra sự kiện `On Click()`          |
| Giá trị không như mong muốn | Thiết lập Inspector khác dự kiến          | Kiểm tra tham số trước khi Play        |
| GameObject không phản hồi   | Object hoặc Component đang bị vô hiệu hóa | Kiểm tra trạng thái Active/Enabled     |
| Điều kiện sai               | Sử dụng toán tử chưa phù hợp              | Kiểm tra `==`, `>=`, `&&`, `\\|\\|`    |

### Quy trình Debug

\#chatgpt-mermaid-\_r_7t\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_7t\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_7t\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_7t\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_7t\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_7t\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_7t\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_7t\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_7t\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_7t\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_7t\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_7t\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_7t\_ p{margin:0;}#chatgpt-mermaid-\_r_7t\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_7t\_ .label text,#chatgpt-mermaid-\_r_7t\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ .node rect,#chatgpt-mermaid-\_r_7t\_ .node circle,#chatgpt-mermaid-\_r_7t\_ .node ellipse,#chatgpt-mermaid-\_r_7t\_ .node polygon,#chatgpt-mermaid-\_r_7t\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .rough-node .label text,#chatgpt-mermaid-\_r_7t\_ .node .label text,#chatgpt-mermaid-\_r_7t\_ .image-shape .label,#chatgpt-mermaid-\_r_7t\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_7t\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .rough-node .label,#chatgpt-mermaid-\_r_7t\_ .node .label,#chatgpt-mermaid-\_r_7t\_ .image-shape .label,#chatgpt-mermaid-\_r_7t\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_7t\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_7t\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_7t\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_7t\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_7t\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_7t\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_7t\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_7t\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_7t\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_7t\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_7t\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_7t\_ .icon-shape,#chatgpt-mermaid-\_r_7t\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_7t\_ .icon-shape p,#chatgpt-mermaid-\_r_7t\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_7t\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_7t\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_7t\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_7t\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_7t\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_7t\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_7t\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_7t\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_7t\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_7t\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_7t\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_7t\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_7t\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_7t\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_7t\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_7t\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .node rect,#chatgpt-mermaid-\_r_7t\_ .node circle,#chatgpt-mermaid-\_r_7t\_ .node ellipse,#chatgpt-mermaid-\_r_7t\_ .node polygon,#chatgpt-mermaid-\_r_7t\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_7t\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_7t\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_7t\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_7t\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_7t\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện tình huốngKiểm tra ConsoleXác định nguyên nhân có thểSửa một nguyên nhânChạy thử lạiLỗi đã hết?Ghi nhận kết quảChưaRồi

Nguyên tắc: Không thay đổi quá nhiều phần của chương trình cùng lúc. Nên kiểm tra từng giả thuyết để xác định chính xác nguyên nhân.

### Mẫu ghi chép kiểm thử

| Nội dung         | Ghi chép                                      |
| ---------------- | --------------------------------------------- |
| Kết quả mong đợi | Chương trình thông báo sau 3 lần tương tác    |
| Kết quả thực tế  | Thông báo xuất hiện ở lần tương tác thứ 3     |
| Minh chứng       | Ảnh màn hình Console                          |
| Lỗi phát hiện    | Thông báo xuất hiện lặp lại                   |
| Cách cải tiến    | Sử dụng `isCompleted` để kiểm soát trạng thái |

## 8. Câu hỏi ôn tập

Trắc nghiệm kiến thức

0/5 câu đã chọn

1\. Kiểu dữ liệu Boolean có những giá trị nào?

0 và 1

true và false

yes và no

int và float

2\. Phương thức CountOne() trong ví dụ gốc chạy khi nào?

Tự chạy mỗi frame

Tự chạy khi nhấn Play

Khi được một sự kiện hoặc đoạn mã khác gọi

Khi Scene được lưu

3\. Biểu thức count >= target có ý nghĩa gì?

count luôn bằng target

count lớn hơn hoặc bằng target

count nhỏ hơn target

target được cộng thêm 1

4\. Tại sao dùng isCompleted trong phiên bản cải tiến?

Để tạo GameObject mới

Để thay đổi âm thanh

Để lưu trạng thái hoàn thành và ngăn xử lý lặp

Để tăng FPS

5\. Khi gặp NullReferenceException, nên kiểm tra gì trước?

Màu nền Scene

Tên project

Tham chiếu đối tượng hoặc Component đang dùng

Độ phân giải màn hình

Kiểm tra đáp ánLàm lại

## 9. Checklist hoàn thành bài học

Tiến độ thực hành

0/10

Hiểu vai trò của MonoBehaviour và Component.

Phân biệt được true và false.

Hiểu và sử dụng được câu lệnh if.

Tạo và gắn script C# vào GameObject.

Chạy được ví dụ SimpleCounter.

Kiểm tra được điều kiện đúng và sai.

Sử dụng Console để kiểm tra kết quả.

Phát hiện và sửa ít nhất một lỗi.

Lưu ảnh hoặc video minh chứng.

Đối chiếu bài học gốc trên Unity Learn.

## 10. Tổng kết

Sau bài học, người học cần nắm được cách sử dụng biến, phương thức và câu lệnh điều kiện để điều khiển hành vi trò chơi.

Ba kiến thức quan trọng nhất:

1. Boolean giúp lưu trữ trạng thái đúng hoặc sai.
2. Câu lệnh điều kiện giúp quyết định hành động dựa trên trạng thái.
3. Kiểm thử và Debug giúp xác minh chương trình hoạt động đúng với mục tiêu.

Kiến thức này có thể áp dụng vào hệ thống tính điểm, điều kiện thắng/thua, điều khiển tương tác, xử lý sự kiện và nhiều cơ chế gameplay khác.

Tài liệu tham khảo: [Unity Learn — Junior Programmer: Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com).

Ghi chú phiên bản: Giao diện, menu và package của Unity có thể thay đổi theo phiên bản. Bài thực hành được trình bày theo hướng độc lập; cần đối chiếu hướng dẫn và tài nguyên chính thức khi thực hiện Challenge 3 trên Unity 6.3.