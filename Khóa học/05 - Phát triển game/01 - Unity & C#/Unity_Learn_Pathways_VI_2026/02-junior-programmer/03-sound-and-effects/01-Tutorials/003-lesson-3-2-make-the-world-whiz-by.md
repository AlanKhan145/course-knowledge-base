# Bài 03 — Lesson 3.2: Make the World Whiz By

Junior Programmer · Unit 3: Sound and Effects · Unity 6.3 · Tutorial

> Nguồn tham khảo: [Unity Learn — Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)
>
> Lưu ý: Đây là bài học tiếng Việt tự biên soạn từ nội dung được cung cấp, không phải bản dịch chính thức hoặc bản ghi video của Unity.

## 1. Tổng quan bài học

Trong phát triển trò chơi, âm thanh giúp người chơi nhận biết các sự kiện, cảm nhận môi trường và nhận được phản hồi khi tương tác với thế giới ảo.

Ví dụ:

- Khi nhân vật nhảy, trò chơi có thể phát âm thanh tương ứng.
- Khi nhân vật thu thập vật phẩm, một hiệu ứng âm thanh xác nhận hành động thành công.
- Khi nhân vật đến gần nguồn âm thanh, tiếng động có thể trở nên rõ hơn.
- Khi người chơi hoàn thành nhiệm vụ, trò chơi phát âm thanh thông báo.

Trong bài thực hành này, chúng ta tìm hiểu cách thiết lập, điều chỉnh và kiểm tra âm thanh trong Unity thông qua các Component cơ bản.

Minh họa hệ thống phát và nhận âm thanh

[Learn game development w/ Unity | Courses & tutorials in game design, VR, AR, & Real-time 3D | Unity Learn](https://images.openai.com/static-rsc-4/T0Tey6eF-9D1vwaurtqQ2k7tybpl86O9ET_0FJ_6rX-eEPLfTSuSU4kJmpyfCrfPMU2BIe5B9nwuGNvFIOu7zKeHY29ljMxLhACBqTLbso9jQlCGjJdCNy8S5UHxo-Rm6xFRvk2hc_etJ445X9-n2ea-HVHI8XGVNaqLyjFxWqE?purpose=inline)

[learn.unity.com](https://learn.unity.com/submission/682cd560edbc2a00c85f7eac?utm_source=chatgpt.com)

Minh họa môi trường Unity khi làm việc với âm thanh trong không gian 3D.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của âm thanh và phản hồi giác quan trong trò chơi.
2. Hiểu cách phối hợp giữa `Audio Source`, `AudioClip` và `Audio Listener`.
3. Phân biệt âm thanh 2D và âm thanh 3D.
4. Tùy chỉnh các thuộc tính âm thanh trong Inspector.
5. Tự thiết lập một ví dụ âm thanh và kiểm chứng bằng Play Mode.
6. Phát hiện và xử lý những lỗi âm thanh thường gặp.

## 3. Kiến thức trọng tâm

### 3.1. Audio Source, AudioClip và Audio Listener

Trong Unity, ba thành phần quan trọng của hệ thống âm thanh gồm:

| Thành phần       | Chức năng                                                                      |
| ---------------- | ------------------------------------------------------------------------------ |
| `AudioClip`      | Tài nguyên chứa dữ liệu âm thanh.                                              |
| `Audio Source`   | Component dùng để phát âm thanh.                                               |
| `Audio Listener` | Component đại diện cho vị trí tiếp nhận âm thanh, thường nằm trên Main Camera. |

Nguyên lý hoạt động:

\#chatgpt-mermaid-\_r_k1\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_k1\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k1\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k1\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_k1\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_k1\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_k1\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_k1\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_k1\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_k1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k1\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k1\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_k1\_ p{margin:0;}#chatgpt-mermaid-\_r_k1\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_k1\_ .label text,#chatgpt-mermaid-\_r_k1\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ .node rect,#chatgpt-mermaid-\_r_k1\_ .node circle,#chatgpt-mermaid-\_r_k1\_ .node ellipse,#chatgpt-mermaid-\_r_k1\_ .node polygon,#chatgpt-mermaid-\_r_k1\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .rough-node .label text,#chatgpt-mermaid-\_r_k1\_ .node .label text,#chatgpt-mermaid-\_r_k1\_ .image-shape .label,#chatgpt-mermaid-\_r_k1\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_k1\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .rough-node .label,#chatgpt-mermaid-\_r_k1\_ .node .label,#chatgpt-mermaid-\_r_k1\_ .image-shape .label,#chatgpt-mermaid-\_r_k1\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_k1\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_k1\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k1\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k1\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_k1\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k1\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k1\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k1\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_k1\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_k1\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k1\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_k1\_ .icon-shape,#chatgpt-mermaid-\_r_k1\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k1\_ .icon-shape p,#chatgpt-mermaid-\_r_k1\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_k1\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_k1\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k1\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_k1\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_k1\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_k1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_k1\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_k1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_k1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k1\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_k1\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k1\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k1\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k1\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_k1\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_k1\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .node rect,#chatgpt-mermaid-\_r_k1\_ .node circle,#chatgpt-mermaid-\_r_k1\_ .node ellipse,#chatgpt-mermaid-\_r_k1\_ .node polygon,#chatgpt-mermaid-\_r_k1\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k1\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_k1\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_k1\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_k1\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k1\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}AudioClipTệp âm thanhAudio SourcePhát âm thanhKhông gian âm thanh2D hoặc 3DAudio ListenerTiếp nhận âm thanhLoa / Tai ngheNgười chơi nghe thấy

Ví dụ: Một GameObject đại diện cho chiếc chuông được gắn Audio Source và một AudioClip chứa tiếng chuông. Khi Audio Source phát, Audio Listener trên Main Camera sẽ tiếp nhận âm thanh đó.

### 3.2. Các thuộc tính của Audio Source

Khi chọn GameObject có `Audio Source`, có thể tùy chỉnh một số thông số trong Inspector.

| Thuộc tính    | Công dụng                                              |
| ------------- | ------------------------------------------------------ |
| AudioClip     | Xác định âm thanh sẽ được phát.                        |
| Play On Awake | Tự động phát khi đối tượng được khởi tạo và kích hoạt. |
| Loop          | Lặp lại âm thanh sau khi phát hết.                     |
| Volume        | Điều chỉnh âm lượng.                                   |
| Pitch         | Điều chỉnh cao độ và tốc độ phát.                      |
| Spatial Blend | Xác định tỷ lệ giữa âm thanh 2D và 3D.                 |
| Min Distance  | Khoảng cách tham chiếu cho độ suy giảm âm thanh 3D.    |
| Max Distance  | Khoảng cách dùng trong mô hình suy giảm âm thanh 3D.   |

### 3.3. Phân biệt âm thanh 2D và 3D

[Topics: Game-based learning](https://images.openai.com/static-rsc-4/3NGGcUKmZvxHQl69GHLvGWzIvws-RbxCKL1PjecKuGS4gVG5aKRVmt3fAs6rtyZqtYq7NPhKEZvn2ArROsgUrG9aTbITRgmtBcMOPBxConynyTJQtOiA2dSGMOmKHgbGzf_0iUy5timhbtgggyInDUtR25AEwNTP_pdXu3LZsmI?purpose=inline)

Âm thanh 2D

Không phụ thuộc vào khoảng cách giữa nguồn phát và Audio Listener. Thường dùng cho nhạc nền, âm thanh giao diện.

[Resident Evil 3 Remake: Die erste Flucht und die Ankunft in der U-Bahn | Eurogamer.de](https://images.openai.com/static-rsc-4/u4WUtCB4wh5O-q0lJWG9Hi4BFAxjotap6NV9cuSVghtIQ-fj7nXVNZrEch4FPpgniC4iLYUnihgAnXoB9HR7G40T4wFafIYhIcuQmwv0XzxFAqjoGbjm2G70um3ZzrX9A5OEMRCBLijdGgygKmJO10GOA729GIR-4ENZTrMI8aA?purpose=inline)

Âm thanh 3D

Có thể thay đổi theo khoảng cách và vị trí tương đối. Thường dùng cho tiếng bước chân, tiếng máy móc, âm thanh môi trường.

Giá trị `Spatial Blend`:

- `0`: Âm thanh hoàn toàn 2D.
- `0.5`: Pha trộn âm thanh 2D và 3D.
- `1`: Âm thanh hoàn toàn 3D.

Đối với âm thanh 3D, mức âm lượng nhận được còn phụ thuộc vào vị trí nguồn âm, Audio Listener và các thiết lập suy giảm khoảng cách.

### 3.4. Phân biệt âm thanh nền và âm thanh sự kiện

| Loại âm thanh | Đặc điểm                          | Ví dụ                        |
| ------------- | --------------------------------- | ---------------------------- |
| Âm nền        | Thường phát liên tục hoặc lặp lại | Nhạc nền, tiếng gió          |
| Âm sự kiện    | Phát khi có hành động xảy ra      | Nhảy, va chạm, nhặt vật phẩm |
| Âm thông báo  | Báo hiệu thay đổi trạng thái      | Chiến thắng, thất bại        |

## 4. Thực hành từng bước trong Unity

### Bước 1 — Tạo Audio Source

Mục tiêu: Thiết lập một GameObject có khả năng phát âm thanh.

Thực hiện:

1. Mở Unity Editor và scene muốn thực hành.
2. Trong cửa sổ Hierarchy, tạo một GameObject mới.
3. Đổi tên thành `EnvironmentAudio`.
4. Chọn GameObject vừa tạo.
5. Trong Inspector, nhấn Add Component.
6. Tìm kiếm và thêm `Audio Source`.
7. Kéo một AudioClip phù hợp vào trường `Audio Resource` hoặc `AudioClip`, tùy giao diện phiên bản Unity.

Kết quả mong đợi: GameObject có Audio Source và tài nguyên âm thanh được gán hợp lệ.

### Bước 2 — Thử nghiệm các thuộc tính âm thanh

Thay đổi từng thuộc tính trong Inspector, sau đó nhấn Play để quan sát.

| Thử nghiệm | Thiết lập          | Kết quả cần quan sát                                     |
| ---------- | ------------------ | -------------------------------------------------------- |
| 1          | Play On Awake: Bật | Âm thanh bắt đầu khi scene chạy.                         |
| 2          | Play On Awake: Tắt | Âm thanh không tự phát lúc bắt đầu.                      |
| 3          | Loop: Bật          | Âm thanh lặp lại khi kết thúc.                           |
| 4          | Volume: 0.3        | Âm lượng giảm so với mức 1.                              |
| 5          | Spatial Blend: 0   | Âm thanh không suy giảm theo khoảng cách 3D.             |
| 6          | Spatial Blend: 1   | Âm thanh chịu ảnh hưởng của các thiết lập không gian 3D. |

Lưu ý: Chỉ thay đổi một thông số cho mỗi lần thử nghiệm để dễ xác định nguyên nhân khi kết quả khác dự đoán.

### Bước 3 — Kiểm tra sự suy giảm âm thanh theo khoảng cách

Mục tiêu: Hiểu cách âm thanh 3D thay đổi khi nguồn phát và Camera ở các vị trí khác nhau.

Thực hiện:

1. Tạo một GameObject mới, đặt tên `SoundEmitter`.
2. Thêm Component `Audio Source`.
3. Gán một AudioClip.
4. Đặt Spatial Blend bằng `1`.
5. Đặt `Min Distance` và `Max Distance` thích hợp.
6. Di chuyển SoundEmitter ra xa Main Camera.
7. Chạy Play Mode và kiểm tra âm lượng nhận được.
8. Thử thay đổi vị trí hoặc khoảng cách để so sánh.

Sơ đồ nguyên lý kiểm tra khoảng cách

Kết quả mong đợi: Với thiết lập suy giảm phù hợp, âm thanh thường nhỏ dần khi Audio Listener di chuyển ra xa nguồn phát.

### Bước 4 — Phát âm thanh khi có sự kiện

Mục tiêu: Phát âm thanh khi người chơi tương tác với đối tượng hoặc thực hiện một hành động.

Ví dụ: Khi nhấn phím Space, trò chơi phát tiếng nhảy.

Một cách triển khai bằng C#:

```
using UnityEngine;

public class JumpSound : MonoBehaviour
{
    public AudioSource audioSource;
    public AudioClip jumpSound;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (audioSource != null && jumpSound != null)
            {
                audioSource.PlayOneShot(jumpSound);
            }
        }
    }
}
```

Giải thích:

- `AudioSource`: Tham chiếu tới Component phát âm thanh.
- `AudioClip`: Chứa âm thanh tiếng nhảy.
- `Input.GetKeyDown(KeyCode.Space)`: Kiểm tra thao tác nhấn Space trong một frame.
- `PlayOneShot()`: Phát một lượt AudioClip mà không phải thay thế clip mặc định của Audio Source.

Để chạy được ví dụ, cần gắn script vào GameObject và gán các tham chiếu trong Inspector. Đoạn mã sử dụng hệ thống Input cũ, nên dự án cần bật hỗ trợ `Input Manager` trong Active Input Handling.

Kiểm tra: Nhấn Space trong Game view và nghe âm thanh. Thử nhấn phím liên tiếp để xác định có xuất hiện hiện tượng âm thanh chồng lặp quá mức hay không.

## 5. Bài tập củng cố

### Bài tập 1 — Cơ bản

Tạo một GameObject phát tiếng gió liên tục trong scene.

Yêu cầu:

- Gắn Audio Source.
- Bật Play On Awake.
- Bật Loop.
- Điều chỉnh Volume.
- Chạy thử và giải thích kết quả.

### Bài tập 2 — Vận dụng

Tạo một chiếc chuông phát âm thanh 3D.

Yêu cầu:

- Thay đổi Spatial Blend từ `0` sang `1`.
- Di chuyển Audio Listener lại gần và ra xa.
- Quan sát tác động đến âm thanh.
- Dự đoán sự thay đổi trước mỗi lần thử nghiệm.

### Bài tập 3 — Mở rộng

Xây dựng một tương tác nhỏ:

- Nhân vật thực hiện hành động nhảy.
- Một âm thanh phát khi người chơi nhảy.
- Âm thanh nền tiếp tục chạy độc lập.
- Kiểm tra trường hợp người chơi nhấn nút liên tục.

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng                        | Nguyên nhân có thể                            | Cách kiểm tra                         |
| --------------------------------- | --------------------------------------------- | ------------------------------------- |
| Không nghe thấy âm thanh          | AudioClip chưa được gán                       | Kiểm tra Audio Source trong Inspector |
| Không nghe thấy âm thanh          | Không có Audio Listener hoạt động             | Kiểm tra Main Camera                  |
| Âm thanh quá nhỏ                  | Volume thấp hoặc nguồn âm ở quá xa            | Kiểm tra Volume và Spatial Blend      |
| Âm thanh không lặp                | Loop chưa được bật                            | Bật Loop                              |
| Âm thanh không phát khi nhấn phím | Sự kiện không được nhận hoặc tham chiếu thiếu | Kiểm tra Input, Console và Inspector  |
| Âm thanh bị chồng lặp             | Sự kiện phát được gọi liên tiếp               | Kiểm tra tần suất gọi PlayOneShot     |

### Quy trình Debug

\#chatgpt-mermaid-\_r_l3\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_l3\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l3\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l3\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_l3\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_l3\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_l3\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_l3\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_l3\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_l3\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l3\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l3\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_l3\_ p{margin:0;}#chatgpt-mermaid-\_r_l3\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_l3\_ .label text,#chatgpt-mermaid-\_r_l3\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ .node rect,#chatgpt-mermaid-\_r_l3\_ .node circle,#chatgpt-mermaid-\_r_l3\_ .node ellipse,#chatgpt-mermaid-\_r_l3\_ .node polygon,#chatgpt-mermaid-\_r_l3\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .rough-node .label text,#chatgpt-mermaid-\_r_l3\_ .node .label text,#chatgpt-mermaid-\_r_l3\_ .image-shape .label,#chatgpt-mermaid-\_r_l3\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_l3\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .rough-node .label,#chatgpt-mermaid-\_r_l3\_ .node .label,#chatgpt-mermaid-\_r_l3\_ .image-shape .label,#chatgpt-mermaid-\_r_l3\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_l3\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_l3\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l3\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l3\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_l3\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l3\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l3\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l3\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_l3\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_l3\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l3\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_l3\_ .icon-shape,#chatgpt-mermaid-\_r_l3\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l3\_ .icon-shape p,#chatgpt-mermaid-\_r_l3\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_l3\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_l3\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l3\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_l3\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_l3\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_l3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_l3\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_l3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_l3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l3\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_l3\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l3\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l3\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l3\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_l3\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_l3\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .node rect,#chatgpt-mermaid-\_r_l3\_ .node circle,#chatgpt-mermaid-\_r_l3\_ .node ellipse,#chatgpt-mermaid-\_r_l3\_ .node polygon,#chatgpt-mermaid-\_r_l3\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l3\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_l3\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_l3\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_l3\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l3\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗi âm thanhTái hiện lỗi trong Play ModeKiểm tra ConsoleKiểm tra Audio Source, Clip,ListenerĐề xuất một nguyên nhânChỉnh sửa một thiết lậpChạy thử lạiĐã khắc phục?Ghi nhận kết quảCóChưa

Nguyên tắc: Không thay đổi đồng thời nhiều thuộc tính khi chưa xác định nguyên nhân. Việc thay đổi từng thông số giúp kiểm chứng giả thuyết rõ ràng hơn.

## 7. Câu hỏi tự kiểm tra

Trắc nghiệm kiến thức

0/5 câu đã trả lời

1\. Component nào chịu trách nhiệm phát âm thanh trong Unity?

Audio Listener

Audio Source

Mesh Renderer

Box Collider

2\. Spatial Blend = 0 có ý nghĩa gì?

Âm thanh 3D hoàn toàn

Tắt âm thanh

Âm thanh 2D hoàn toàn

Âm thanh chỉ phát một lần

3\. Thuộc tính nào giúp âm thanh được lặp lại?

Pitch

Loop

Min Distance

Play On Awake

4\. Muốn kiểm tra âm thanh 3D theo khoảng cách, cần quan sát gì?

Chỉ màu sắc GameObject

Vị trí Audio Source và Audio Listener

Chỉ kích thước Texture

Chỉ tên Scene

5\. Khi không có âm thanh, thao tác kiểm tra hợp lý nhất là gì?

Xóa toàn bộ scene

Tăng đồ họa lên tối đa

Kiểm tra Clip, Source, Listener và Console

Thêm thật nhiều Camera

Kiểm tra đáp ánLàm lại

## 8. Ghi chép kết quả thực hành

Sau mỗi lần chạy thử, ghi kết quả theo bảng:

| Nội dung         | Ghi chép                                   |
| ---------------- | ------------------------------------------ |
| Kết quả mong đợi | Mô tả hành vi dự đoán                      |
| Kết quả thực tế  | Mô tả hành vi quan sát                     |
| Bằng chứng       | Ảnh chụp Inspector, Game view hoặc Console |
| Nguyên nhân      | Giải thích sự khác biệt nếu có             |
| Hướng xử lý      | Các bước điều chỉnh và kiểm tra lại        |

## 9. Checklist hoàn thành

Tiến độ học tập

0/9

Giải thích được Audio Source, AudioClip và Audio Listener.

Phân biệt được âm thanh 2D và âm thanh 3D.

Tạo và cấu hình Audio Source thành công.

Điều chỉnh Play On Awake, Loop và Volume.

Kiểm tra được Spatial Blend và ảnh hưởng của khoảng cách.

Phát được một âm thanh thông qua sự kiện gameplay.

Phát hiện và giải thích được tối thiểu một lỗi.

Lưu ảnh hoặc video minh chứng kết quả.

Đối chiếu bài học với nội dung chính thức trên Unity Learn.

## 10. Tài liệu tham khảo và lưu ý phiên bản

Nguồn chính: Unity Learn — [Junior Programmer: Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com).

Lưu ý đối chiếu: Nội dung được cung cấp tập trung vào Audio Source và âm thanh, trong khi tiêu đề Make the World Whiz By gợi đến chuyển động của môi trường. Vì vậy, phần thực hành này chỉ nên xem là bài bổ trợ về âm thanh, chưa thể coi là nội dung tương ứng đầy đủ với Lesson 3.2 chính thức. Cần kiểm tra bài gốc để xác định đúng yêu cầu về chuyển động môi trường và hiệu ứng cuộn nền.

Phiên bản tham chiếu: Unity 6.3 · Nội dung tự biên soạn · Ngày đối chiếu ghi trong tài liệu: 21/10/2026.