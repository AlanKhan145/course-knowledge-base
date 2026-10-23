# Bài 01 — Create an Immersive Soundscape

Unity Essentials · Audio Essentials · Tutorial · Unity 6.3

Chủ đề: Thiết kế môi trường âm thanh sống động trong Unity.

Mục tiêu chính: Xây dựng một Scene có âm thanh môi trường, âm thanh không gian 3D và hiệu ứng âm thanh phản hồi tương tác.

## 1. Tổng quan bài học

Trong trò chơi 3D, âm thanh không chỉ cung cấp thông tin mà còn góp phần tạo cảm giác hiện diện trong thế giới ảo.

Ví dụ, khi nhân vật khám phá một khu rừng:

- Tiếng gió thổi tạo bầu không khí tự nhiên.
- Tiếng chim hót phát ra từ các vị trí khác nhau.
- Tiếng suối chảy trở nên rõ hơn khi nhân vật tiến lại gần.
- Tiếng nhặt vật phẩm xác nhận hành động đã hoàn thành.

Tổ hợp những âm thanh này tạo thành Soundscape — môi trường âm thanh giúp người chơi cảm nhận không gian, khoảng cách và các sự kiện xung quanh.

[Friend or Foe on Steam](https://images.openai.com/static-rsc-4/s-NZHQ_VHiTITAy7x4zZYs68Qhz1nPwqeb3u91eQO-bFGxbyL9O1Oi9exVvbCHvgJwCChht-IplS76Qh52uwwoozlY57oyxxcQLxHDm0dk6QJcGsnLROBn8fPdOGLixq7KFyreyvMFWii6Uq3mCwmoGHgFlL6bRFgpCAIvD_hVc?purpose=inline)

[Create real-time 3D audio effects - Unity Learn](https://images.openai.com/static-rsc-4/liTYwdTRn2rFW87EZbAve8KK6Sku9aXr8oY6N1swLtnz92_jvG5JSFVSPg0pL7xF2OkRmzsa_Sr5o4cmE4Z9rAcrjjKShXe0UxcTGYRdXKqc3jl93YLjOV8s2v71MjQl1aYLKuUVlex7DDr8i0jDGIU17xeIAIu_MgRfLGyRAwk?purpose=inline)

[River Valley - Level | 3D Landscapes | Unity Asset Store](https://images.openai.com/static-rsc-4/rWqqRcAsH7NSWgiqZlCan1vqbh5AX1qRe_3Nd4U-v1HMT3bOwC5jKLIHMz_NbGPCA1TsUSMLrCWvSXFvRRtC1UxjnW4NZPtsFD9YlBvZJeOLk3BE_AfX1ty3ebWGzx3NvZQFib5FzsZOtL1r92aoefICA0xysQnt4n-DQzkkTJ8?purpose=inline)

7

Minh họa môi trường 3D và giao diện cấu hình Audio Source trong Unity.

Một Soundscape cơ bản thường kết hợp ba nhóm âm thanh:

| Nhóm âm thanh | Chức năng                             | Ví dụ                           |
| ------------- | ------------------------------------- | ------------------------------- |
| Ambient Sound | Tạo bầu không khí chung               | Tiếng mưa, gió, nhạc nền        |
| Spatial Sound | Thể hiện nguồn âm trong không gian 3D | Tiếng suối, động cơ, tiếng chim |
| Event Sound   | Phản hồi một hành động hoặc sự kiện   | Nhặt vật phẩm, va chạm, mở cửa  |

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích chức năng của `AudioClip`, `AudioSource` và `AudioListener`.
2. Phân biệt âm thanh 2D và âm thanh 3D trong Unity.
3. Cấu hình `Play On Awake`, `Loop`, `Volume` và `Spatial Blend`.
4. Thiết lập âm thanh thay đổi theo khoảng cách giữa nguồn phát và người nghe.
5. Kích hoạt hiệu ứng âm thanh bằng một sự kiện tương tác.
6. Kiểm tra và xử lý các lỗi âm thanh thường gặp.

## 3. Kiến thức cốt lõi

### 3.1. AudioClip — Dữ liệu âm thanh

`AudioClip` là tài nguyên chứa dữ liệu âm thanh được sử dụng trong Unity.

Các định dạng thường gặp bao gồm `.wav`, `.mp3` và `.ogg`.

Ví dụ:

```
Assets/
└── Audio/
    ├── Forest_Ambience.wav
    ├── River_Stream.wav
    └── Item_Pickup.wav
```

Mỗi AudioClip có thể được gán cho một AudioSource để phát trong Scene.

Điểm quan trọng: `AudioClip` là dữ liệu âm thanh, không phải thành phần tự phát âm. Để nghe được âm thanh, cần có cơ chế phát phù hợp.

### 3.2. AudioSource — Nguồn phát âm thanh

`AudioSource` là Component chịu trách nhiệm phát âm thanh từ một GameObject.

Một GameObject có thể chứa AudioSource với các thuộc tính cấu hình sau:

| Thuộc tính                     | Chức năng                                             |
| ------------------------------ | ----------------------------------------------------- |
| `Audio Resource` / `AudioClip` | Chọn tài nguyên âm thanh được phát                    |
| `Play On Awake`                | Tự động phát khi đối tượng được khởi tạo và hoạt động |
| `Loop`                         | Lặp lại âm thanh sau khi kết thúc                     |
| `Volume`                       | Điều chỉnh mức âm lượng cơ bản                        |
| `Pitch`                        | Điều chỉnh cao độ và tốc độ phát                      |
| `Spatial Blend`                | Pha trộn giữa âm thanh 2D và 3D                       |
| `Min Distance`                 | Khoảng cách tham chiếu cho mức âm lượng của nguồn 3D  |
| `Max Distance`                 | Khoảng cách giới hạn của mô hình suy giảm âm lượng    |

Tên hiển thị của một số trường có thể khác nhau giữa các phiên bản Unity.

### 3.3. AudioListener — Bộ tiếp nhận âm thanh

`AudioListener` đại diện cho vị trí và hướng tiếp nhận âm thanh trong thế giới 3D.

Thông thường, AudioListener được gắn trên `Main Camera`.

Ví dụ:

```
Scene
├── Main Camera
│   ├── Camera
│   └── Audio Listener
│
├── Forest Ambience
│   └── Audio Source
│
└── River
    └── Audio Source
```

Khi Camera di chuyển, vị trí tiếp nhận âm thanh cũng thay đổi. Nếu nguồn âm sử dụng chế độ 3D, âm lượng và cảm nhận hướng phát có thể thay đổi tương ứng.

Lưu ý: Trong một Scene cơ bản, chỉ nên có một AudioListener hoạt động. Nhiều AudioListener cùng hoạt động có thể khiến Unity cảnh báo.

### 3.4. Cơ chế phát và tiếp nhận âm thanh

\#chatgpt-mermaid-\_r_l5\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_l5\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l5\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_l5\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_l5\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_l5\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_l5\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_l5\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_l5\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_l5\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l5\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l5\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_l5\_ p{margin:0;}#chatgpt-mermaid-\_r_l5\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_l5\_ .label text,#chatgpt-mermaid-\_r_l5\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ .node rect,#chatgpt-mermaid-\_r_l5\_ .node circle,#chatgpt-mermaid-\_r_l5\_ .node ellipse,#chatgpt-mermaid-\_r_l5\_ .node polygon,#chatgpt-mermaid-\_r_l5\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .rough-node .label text,#chatgpt-mermaid-\_r_l5\_ .node .label text,#chatgpt-mermaid-\_r_l5\_ .image-shape .label,#chatgpt-mermaid-\_r_l5\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_l5\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .rough-node .label,#chatgpt-mermaid-\_r_l5\_ .node .label,#chatgpt-mermaid-\_r_l5\_ .image-shape .label,#chatgpt-mermaid-\_r_l5\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_l5\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_l5\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l5\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l5\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_l5\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l5\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l5\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l5\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_l5\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_l5\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_l5\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_l5\_ .icon-shape,#chatgpt-mermaid-\_r_l5\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_l5\_ .icon-shape p,#chatgpt-mermaid-\_r_l5\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_l5\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_l5\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_l5\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_l5\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_l5\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_l5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_l5\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_l5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_l5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l5\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_l5\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_l5\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l5\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_l5\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_l5\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_l5\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .node rect,#chatgpt-mermaid-\_r_l5\_ .node circle,#chatgpt-mermaid-\_r_l5\_ .node ellipse,#chatgpt-mermaid-\_r_l5\_ .node polygon,#chatgpt-mermaid-\_r_l5\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_l5\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_l5\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_l5\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_l5\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_l5\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}AudioClipDữ liệu âm thanhAudioSourcePhát và cấu hìnhSpatial BlendÂm thanh không phụ thuộckhoảng cách 3DXử lý vị trí,hướng và khoảng cáchAudioListenerAudio OutputLoa / Tai nghe2D3D

Quy trình:

1. `AudioClip` cung cấp dữ liệu âm thanh.
2. `AudioSource` thực hiện phát và áp dụng các cấu hình.
3. `Spatial Blend` quyết định mức độ ảnh hưởng của xử lý không gian 3D.
4. `AudioListener` xác định vị trí và hướng nghe trong Scene.
5. Hệ thống âm thanh xử lý các nguồn phát để đưa tín hiệu tới thiết bị đầu ra.

## 4. Phân biệt âm thanh 2D và 3D

### 4.1. Âm thanh 2D

Âm thanh 2D không bị suy giảm do khoảng cách giữa AudioSource và AudioListener.

Thường sử dụng cho nhạc nền, âm giao diện và âm thông báo.

Cấu hình: `Spatial Blend = 0` (2D).

### 4.2. Âm thanh 3D

Âm thanh 3D có thể thay đổi độ lớn và cảm nhận hướng phát tùy theo vị trí tương đối của AudioSource và AudioListener.

Ví dụ, khi người chơi đi từ xa đến gần một thác nước, tiếng nước có thể lớn dần.

Cấu hình: `Spatial Blend = 1` (3D).

### Mô phỏng suy giảm âm thanh theo khoảng cách

Mô hình minh họa sử dụng Linear Rolloff, Min Distance = 1 m và Max Distance = 15 m.

Khoảng cách

5 m

Mức âm lượng tương đối (mô phỏng)

71%

Thay đổi khoảng cách để quan sát mức âm lượng mô phỏng. Đây là ví dụ tuyến tính, không phải mọi chế độ suy giảm âm thanh của Unity.

Unity cung cấp các mô hình `Volume Rolloff` khác nhau như Logarithmic, Linear và Custom. Khi thay đổi mô hình, quan hệ giữa khoảng cách và âm lượng cũng thay đổi.

## 5. Thực hành: Xây dựng Soundscape trong Unity

### 5.1. Chuẩn bị

Yêu cầu:

- Unity 6.3.
- Một Scene 3D có `Main Camera`.
- Ba AudioClip có quyền sử dụng: tiếng rừng, tiếng suối và tiếng nhặt vật phẩm.
- Tai nghe hoặc loa để kiểm tra.

Có thể tạo một Scene thử nghiệm độc lập khi chưa có dự án game hoàn chỉnh.

Cấu trúc đề xuất:

```
SampleScene
├── Main Camera
│   └── Audio Listener
│
├── Directional Light
│
├── Ground
│
├── Forest Ambience
│   └── Audio Source (2D)
│
├── River
│   └── Audio Source (3D)
│
└── Pickup Sound
    ├── Audio Source
    └── PickupSoundController
```

### 5.2. Bước 1 — Tạo âm thanh môi trường

Mục tiêu: Phát tiếng rừng liên tục khi Scene bắt đầu.

Thực hiện:

1. Trong `Hierarchy`, chọn `Create Empty`.
2. Đổi tên GameObject thành `Forest Ambience`.
3. Trong `Inspector`, chọn `Add Component`.
4. Thêm Component `Audio Source`.
5. Gán AudioClip tiếng rừng vào trường tài nguyên âm thanh.
6. Cấu hình:

| Thuộc tính    | Giá trị thử nghiệm |
| ------------- | ------------------ |
| Play On Awake | Bật                |
| Loop          | Bật                |
| Volume        | 0.5                |
| Spatial Blend | 0 (2D)             |

7\. Nhấn `Play`.

Checkpoint 1: Tiếng rừng phải phát liên tục, không tự dừng sau khi AudioClip kết thúc.

Tiếp tục di chuyển Camera trong Scene. Với cấu hình 2D, thay đổi khoảng cách 3D giữa Camera và nguồn phát không làm âm lượng suy giảm.

### 5.3. Bước 2 — Thêm nguồn âm thanh 3D

Mục tiêu: Tạo một tiếng suối thay đổi âm lượng theo khoảng cách.

Thực hiện:

1. Tạo GameObject tên `River`.
2. Đặt đối tượng tại một vị trí cách `Main Camera`.
3. Thêm `Audio Source`.
4. Gán AudioClip tiếng suối.
5. Thiết lập các tham số thử nghiệm:

| Thuộc tính     | Giá trị |
| -------------- | ------- |
| Play On Awake  | Bật     |
| Loop           | Bật     |
| Volume         | 0.8     |
| Spatial Blend  | 1 (3D)  |
| Volume Rolloff | Linear  |
| Min Distance   | 1       |
| Max Distance   | 15      |

6. Vào Play mode.
7. Di chuyển `Main Camera` hoặc GameObject chứa AudioListener đến gần và ra xa nguồn phát.

Checkpoint 2: Âm lượng tiếng suối thay đổi khi khoảng cách thay đổi.

Lưu ý rằng việc chỉ di chuyển góc nhìn của cửa sổ Scene trong Editor không đồng nghĩa với việc di chuyển AudioListener. Cần thay đổi Transform thực tế của Camera hoặc đối tượng chứa AudioListener khi chạy thử.

### 5.4. Bước 3 — Tạo hiệu ứng âm thanh sự kiện

Mục tiêu: Phát âm thanh khi người chơi thực hiện một hành động.

Ví dụ sử dụng phím `Space` để mô phỏng hành động nhặt vật phẩm.

Tạo GameObject `Pickup Sound`, thêm Component `Audio Source`, tắt `Play On Awake`, sau đó tạo script C# tên `PickupSoundController.cs`.

```

using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class PickupSoundController : MonoBehaviour
{
    [SerializeField] private AudioClip pickupClip;

    private AudioSource audioSource;

    private void Awake()
    {
        audioSource = GetComponent<AudioSource>();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && pickupClip != null)
        {
            audioSource.PlayOneShot(pickupClip);
        }
    }
}

```

Giải thích:

- `[RequireComponent(typeof(AudioSource))]`: bảo đảm GameObject có Component AudioSource cần thiết.
- `AudioClip pickupClip`: khai báo tài nguyên âm thanh, có thể gán trong Inspector.
- `GetComponent<AudioSource>()`: lấy AudioSource trên cùng GameObject.
- `Input.GetKeyDown(KeyCode.Space)`: phát hiện thời điểm người dùng nhấn phím Space.
- `PlayOneShot(pickupClip)`: phát một lần hiệu ứng âm thanh mà không cần thiết lập vòng lặp.

Đoạn code sử dụng hệ thống `Input` cũ của Unity. Trong Project Settings, cấu hình `Active Input Handling` cần hỗ trợ `Input Manager (Old)` hoặc `Both`.

Kiểm tra:

1. Gắn script vào GameObject `Pickup Sound`.
2. Gán `Item_Pickup.wav` vào trường `Pickup Clip` trong Inspector.
3. Chọn `Spatial Blend = 0` để dễ kiểm tra ban đầu.
4. Vào Play mode và chọn cửa sổ `Game`.
5. Nhấn `Space`.

Checkpoint 3: Mỗi lần nhấn Space hợp lệ sẽ tạo một hiệu ứng âm thanh.

`PlayOneShot()` có thể phát nhiều lần chồng lên nhau nếu được gọi liên tiếp. Trong trò chơi thực tế, có thể giới hạn tần suất kích hoạt để tránh âm thanh quá lớn hoặc gây khó chịu.

### 5.5. Bước 4 — Kết hợp các lớp âm thanh

Khi hoàn thành ba bước trên, Scene có thể phát đồng thời:

\#chatgpt-mermaid-\_r_m2\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_m2\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m2\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_m2\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_m2\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_m2\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_m2\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_m2\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_m2\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_m2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m2\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m2\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_m2\_ p{margin:0;}#chatgpt-mermaid-\_r_m2\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_m2\_ .label text,#chatgpt-mermaid-\_r_m2\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ .node rect,#chatgpt-mermaid-\_r_m2\_ .node circle,#chatgpt-mermaid-\_r_m2\_ .node ellipse,#chatgpt-mermaid-\_r_m2\_ .node polygon,#chatgpt-mermaid-\_r_m2\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .rough-node .label text,#chatgpt-mermaid-\_r_m2\_ .node .label text,#chatgpt-mermaid-\_r_m2\_ .image-shape .label,#chatgpt-mermaid-\_r_m2\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_m2\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .rough-node .label,#chatgpt-mermaid-\_r_m2\_ .node .label,#chatgpt-mermaid-\_r_m2\_ .image-shape .label,#chatgpt-mermaid-\_r_m2\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_m2\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_m2\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m2\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m2\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_m2\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m2\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m2\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m2\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_m2\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_m2\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_m2\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_m2\_ .icon-shape,#chatgpt-mermaid-\_r_m2\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_m2\_ .icon-shape p,#chatgpt-mermaid-\_r_m2\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_m2\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_m2\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_m2\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_m2\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_m2\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_m2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_m2\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_m2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_m2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m2\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_m2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_m2\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m2\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_m2\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_m2\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_m2\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .node rect,#chatgpt-mermaid-\_r_m2\_ .node circle,#chatgpt-mermaid-\_r_m2\_ .node ellipse,#chatgpt-mermaid-\_r_m2\_ .node polygon,#chatgpt-mermaid-\_r_m2\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_m2\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_m2\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_m2\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_m2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_m2\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Soundscape trong SceneForest AmbienceRiver SoundPickup SoundÂm nền 2DLặp liên tụcÂm 3DThay đổi theo khoảng cáchÂm sự kiệnKích hoạt bằng phím SpaceHệ thống âm thanh UnityAudioListener / Audio Output

Ba nguồn âm hoạt động độc lập nhưng được kết hợp thành một môi trường âm thanh thống nhất.

Có thể thay đổi `Volume` của từng AudioSource để bảo đảm tiếng môi trường không át tiếng tương tác.

## 6. Kiểm tra kết quả

Thực hiện các thử nghiệm dưới đây và ghi lại hiện tượng.

| Tình huống                       | Kết quả mong đợi                          |
| -------------------------------- | ----------------------------------------- |
| Bắt đầu Scene                    | Tiếng rừng tự động phát                   |
| Đợi tiếng rừng chạy hết một vòng | Âm thanh tiếp tục lặp                     |
| Đưa Camera lại gần River         | Tiếng suối rõ hơn                         |
| Đưa Camera ra xa River           | Tiếng suối nhỏ dần theo Rolloff           |
| Nhấn Space                       | Phát tiếng nhặt vật phẩm                  |
| Tắt AudioListener                | Không còn đầu ra âm thanh qua Listener đó |

### Nhật ký kiểm thử

| Nội dung   | Ghi chép                                           |
| ---------- | -------------------------------------------------- |
| Thao tác   | Thay đổi Spatial Blend từ 0 thành 1                |
| Dự đoán    | Âm thanh bắt đầu chịu ảnh hưởng của khoảng cách 3D |
| Thực tế    | Điền kết quả quan sát                              |
| Minh chứng | Ảnh Inspector hoặc video Game view                 |
| Nhận xét   | Giải thích sự khác biệt nếu có                     |

## 7. Lỗi thường gặp và cách khắc phục

| Hiện tượng                             | Nguyên nhân có thể                                                                            | Cách kiểm tra                                             |
| -------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Không nghe thấy âm thanh               | AudioClip chưa được gán                                                                       | Kiểm tra tài nguyên âm thanh trong Inspector              |
| Không nghe thấy bất kỳ nguồn âm nào    | Thiếu AudioListener hoạt động hoặc âm thanh bị tắt                                            | Kiểm tra Main Camera, AudioListener và thiết lập âm thanh |
| Âm 3D quá nhỏ                          | Khoảng cách quá xa hoặc cấu hình suy giảm quá mạnh                                            | Kiểm tra Spatial Blend, Min/Max Distance và Rolloff       |
| Âm thanh không lặp                     | Loop chưa được bật                                                                            | Bật Loop và chạy thử                                      |
| Nhấn Space nhưng không có âm thanh     | AudioClip trong script chưa gán, cửa sổ Game chưa nhận phím hoặc cấu hình Input không phù hợp | Kiểm tra Inspector, Game view và Console                  |
| Âm thanh chồng lên nhau                | Sự kiện kích hoạt quá nhiều lần                                                               | Kiểm tra tần suất gọi PlayOneShot                         |
| Xuất hiện cảnh báo nhiều AudioListener | Có nhiều Listener cùng hoạt động                                                              | Giữ lại Listener cần thiết và vô hiệu hóa các Listener dư |

Quy trình debug tiêu chuẩn:

\#chatgpt-mermaid-\_r_mt\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mt\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mt\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mt\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mt\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mt\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mt\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mt\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mt\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mt\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mt\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mt\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mt\_ p{margin:0;}#chatgpt-mermaid-\_r_mt\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mt\_ .label text,#chatgpt-mermaid-\_r_mt\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ .node rect,#chatgpt-mermaid-\_r_mt\_ .node circle,#chatgpt-mermaid-\_r_mt\_ .node ellipse,#chatgpt-mermaid-\_r_mt\_ .node polygon,#chatgpt-mermaid-\_r_mt\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .rough-node .label text,#chatgpt-mermaid-\_r_mt\_ .node .label text,#chatgpt-mermaid-\_r_mt\_ .image-shape .label,#chatgpt-mermaid-\_r_mt\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mt\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .rough-node .label,#chatgpt-mermaid-\_r_mt\_ .node .label,#chatgpt-mermaid-\_r_mt\_ .image-shape .label,#chatgpt-mermaid-\_r_mt\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mt\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mt\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mt\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mt\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mt\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mt\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mt\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mt\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mt\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mt\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mt\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mt\_ .icon-shape,#chatgpt-mermaid-\_r_mt\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mt\_ .icon-shape p,#chatgpt-mermaid-\_r_mt\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mt\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mt\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mt\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mt\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mt\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mt\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mt\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mt\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mt\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mt\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mt\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mt\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mt\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mt\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mt\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mt\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .node rect,#chatgpt-mermaid-\_r_mt\_ .node circle,#chatgpt-mermaid-\_r_mt\_ .node ellipse,#chatgpt-mermaid-\_r_mt\_ .node polygon,#chatgpt-mermaid-\_r_mt\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mt\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mt\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mt\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mt\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mt\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗi âm thanhTái hiện lỗi trong Play modeKiểm tra ConsoleKiểm tra GameObject,AudioClip và AudioSourceKiểm tra AudioListener,Spatial Blend và khoảng cáchThay đổi một yếu tốLỗi đã được sửa?Ghi lại nguyên nhân và kết quảCóKhông

Khi sửa lỗi, nên thay đổi một tham số tại một thời điểm. Cách này giúp xác định chính xác yếu tố đã gây ra vấn đề.

## 8. Bài tập củng cố

### Bài tập 1 — Cơ bản

Tạo một GameObject phát nhạc nền với các yêu cầu:

- Âm thanh tự động phát khi bắt đầu Scene.
- Âm thanh lặp liên tục.
- Âm lượng không thay đổi theo khoảng cách 3D.

Giải thích vì sao chọn âm thanh 2D thay vì 3D.

### Bài tập 2 — Vận dụng

Tạo hai nguồn âm 3D ở những vị trí khác nhau.

Di chuyển Camera để kiểm tra mức độ thay đổi âm lượng của từng nguồn.

So sánh kết quả khi:

- Sử dụng `Linear Rolloff`.
- Sử dụng `Logarithmic Rolloff`.

Ghi nhận sự khác nhau mà không thay đổi các tham số khác.

### Bài tập 3 — Mở rộng

Xây dựng một Scene khu rừng có tối thiểu ba thành phần âm thanh:

- Tiếng gió làm âm nền.
- Tiếng suối phát từ một vị trí xác định.
- Tiếng nhặt vật phẩm khi nhấn phím.

Yêu cầu: Các nguồn âm hoạt động đúng, không bị mất tiếng ngoài ý muốn và không chồng lặp gây khó chịu.

## 9. Checklist hoàn thành

Tiến độ thực hành

0/7

Giải thích được vai trò của AudioClip, AudioSource và AudioListener.

Phân biệt được âm thanh 2D và 3D.

Cấu hình được Play On Awake, Loop, Volume và Spatial Blend.

Tạo được âm thanh 3D thay đổi theo khoảng cách.

Phát được hiệu ứng âm thanh bằng phím Space.

Kiểm tra Console và sửa được tối thiểu một lỗi âm thanh.

Lưu Scene và ghi lại ảnh hoặc video minh chứng.

## 10. Câu hỏi ôn tập trắc nghiệm

CÂU 1/5

Trong một Scene, thành phần nào thường đại diện cho vị trí người nghe?

A. AudioClip

B. AudioListener

C. AudioSource

D. Mesh Renderer

Kiểm tra đáp án

CÂU 2/5

Muốn tiếng nhạc nền không suy giảm theo khoảng cách 3D, nên chọn cấu hình nào?

A. Spatial Blend = 1

B. Min Distance = 1

C. Max Distance = 0

D. Spatial Blend = 0

Kiểm tra đáp án

CÂU 3/5

Khi tăng khoảng cách giữa AudioListener và AudioSource 3D, hiện tượng thông thường là gì?

A. Âm lượng giảm theo cấu hình Rolloff

B. Âm thanh tự động chuyển thành 2D

C. AudioClip bị xóa

D. Loop tự động tắt

Kiểm tra đáp án

CÂU 4/5

Để phát âm thanh nhặt vật phẩm mỗi lần có một sự kiện mà không thiết lập Loop, có thể sử dụng phương thức nào?

A. GetComponent()

B. Destroy()

C. PlayOneShot()

D. SetActive()

Kiểm tra đáp án

CÂU 5/5

Trong Play mode, tiếng suối 3D rất nhỏ dù AudioClip đã được gán. Nên kiểm tra gì trước?

A. Tên của Scene

B. Vị trí AudioListener và cấu hình suy giảm khoảng cách

C. Màu sắc của Material

D. Độ phân giải màn hình

Kiểm tra đáp án

## 11. Tổng kết

Một môi trường âm thanh sống động trong Unity được xây dựng bằng cách kết hợp dữ liệu âm thanh, các nguồn phát và vị trí tiếp nhận.

Ba nguyên tắc quan trọng nhất:

- AudioClip chứa dữ liệu âm thanh; AudioSource chịu trách nhiệm phát.
- AudioListener xác định vị trí người nghe; Spatial Blend kiểm soát cách âm thanh chịu ảnh hưởng của không gian 3D.
- Ambient Sound tạo bầu không khí, trong khi Event Sound phản hồi hành động của người chơi.

Khi kết hợp đúng các thành phần và kiểm soát mức âm lượng, Scene sẽ có chiều sâu và mang lại trải nghiệm tự nhiên hơn.

Đối chiếu thực hành: [Unity Learn — Audio Essentials (Unity 6.3)](https://learn.unity.com/pathway/unity-essentials/unit/audio-essentials?version=6.3\&utm_source=chatgpt.com).

Lưu ý: Các bước thực hành và ví dụ là bài hướng dẫn độc lập. Tên thuộc tính, giao diện Inspector và thiết lập Input có thể khác nhau tùy phiên bản Unity và cấu hình dự án.