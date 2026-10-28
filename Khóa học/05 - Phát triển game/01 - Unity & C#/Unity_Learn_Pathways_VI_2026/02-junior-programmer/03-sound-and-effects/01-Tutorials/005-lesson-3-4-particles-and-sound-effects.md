# Bài 05 — Lesson 3.4: Particles and Sound Effects

Unity Learn · Junior Programmer · Unit 3: Sound and Effects

Tutorial

Unity 6.3

Bài 05

> Nguồn tham khảo: [Unity Learn — Sound and Effects](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com)
>
> Lưu ý: Đây là bài học tiếng Việt tự biên soạn dựa trên đề mục công khai, không phải bản dịch chính thức hay bản ghi video của Unity. Nội dung thực hành dưới đây chủ yếu tập trung vào âm thanh; phần Particle System được giới thiệu bổ sung để phù hợp với chủ đề bài học.

## 1. Tổng quan bài học

Trong trò chơi, người chơi không chỉ tương tác với các đối tượng mà còn cần nhận được phản hồi thông qua hình ảnh và âm thanh.

Ví dụ, khi nhân vật nhảy, va chạm hoặc nhặt vật phẩm, trò chơi có thể phát âm thanh tương ứng và hiển thị hiệu ứng hình ảnh.

[Rainbow Magic](https://images.openai.com/static-rsc-4/xE1LFNH7fw2kJa9wUZIqtcSopoIJIskEE1-LlqJzsiMcT2H4Bq64k7uUbZ8QdcDOtB8SEakvud87gYBx2PHIN-NgA45pYuEnH5wMyIUF4aH0ia0z6vhFVxMWbDKtSUmH3hvC_0obbKlSDiUle52UQmfyXPl-byTQd9kDOwgerWk?purpose=inline)

Particle Effects

Hiệu ứng hạt: bụi, khói, tia lửa, phép thuật

[Create 3D sound effects - Unity Learn](https://images.openai.com/static-rsc-4/HnhvunEMU-v23awCwj-PbVJ3aAHztoXRJcC4fp3Mv9wn9XUMPA3fbNMepWwhmi0-tUSF9XsNimP1e6_eEnGG7tg__MiIYhLy8aCP3i9O8aedsHhNVuHfrUJU2va2ZU2ds_Sl3ppEZm03V7LpSP186lMYoUjlJLetA45eC-mPClM?purpose=inline)

Sound Effects

Hiệu ứng âm thanh: nhảy, va chạm, nhặt vật phẩm

### Mục tiêu học tập

Sau bài học, người học có thể:

- Hiểu vai trò của Audio Source, Audio Listener và AudioClip.
- Phân biệt âm thanh 2D và âm thanh 3D.
- Điều chỉnh các tham số âm thanh trong Inspector.
- Hiểu vai trò cơ bản của Particle System trong phản hồi hình ảnh.
- Tạo một tương tác đơn giản có âm thanh và hiệu ứng.
- Kiểm tra, phát hiện và khắc phục những lỗi thường gặp.

## 2. Kiến thức trọng tâm

### 2.1. Hệ thống âm thanh trong Unity

Unity sử dụng những Component quan trọng sau:

| Thành phần      | Chức năng                                                         |
| --------------- | ----------------------------------------------------------------- |
| `AudioClip`     | Dữ liệu âm thanh được sử dụng trong trò chơi                      |
| `AudioSource`   | Phát AudioClip                                                    |
| `AudioListener` | Tiếp nhận âm thanh trong Scene, thường gắn với Main Camera        |
| `Spatial Blend` | Điều chỉnh cách âm thanh hoạt động giữa 2D và 3D                  |
| `Volume`        | Điều chỉnh âm lượng                                               |
| `Loop`          | Cho phép âm thanh lặp lại                                         |
| `Play On Awake` | Tự động phát khi Component được kích hoạt trong lúc trò chơi chạy |

### Sơ đồ hoạt động

\#chatgpt-mermaid-\_r_j6\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_j6\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_j6\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_j6\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_j6\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_j6\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_j6\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_j6\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_j6\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_j6\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j6\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j6\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_j6\_ p{margin:0;}#chatgpt-mermaid-\_r_j6\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_j6\_ .label text,#chatgpt-mermaid-\_r_j6\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ .node rect,#chatgpt-mermaid-\_r_j6\_ .node circle,#chatgpt-mermaid-\_r_j6\_ .node ellipse,#chatgpt-mermaid-\_r_j6\_ .node polygon,#chatgpt-mermaid-\_r_j6\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .rough-node .label text,#chatgpt-mermaid-\_r_j6\_ .node .label text,#chatgpt-mermaid-\_r_j6\_ .image-shape .label,#chatgpt-mermaid-\_r_j6\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_j6\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .rough-node .label,#chatgpt-mermaid-\_r_j6\_ .node .label,#chatgpt-mermaid-\_r_j6\_ .image-shape .label,#chatgpt-mermaid-\_r_j6\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_j6\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_j6\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j6\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j6\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_j6\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_j6\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_j6\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_j6\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_j6\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_j6\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_j6\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_j6\_ .icon-shape,#chatgpt-mermaid-\_r_j6\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_j6\_ .icon-shape p,#chatgpt-mermaid-\_r_j6\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_j6\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_j6\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_j6\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_j6\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_j6\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_j6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_j6\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_j6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_j6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j6\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_j6\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_j6\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_j6\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_j6\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_j6\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_j6\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .node rect,#chatgpt-mermaid-\_r_j6\_ .node circle,#chatgpt-mermaid-\_r_j6\_ .node ellipse,#chatgpt-mermaid-\_r_j6\_ .node polygon,#chatgpt-mermaid-\_r_j6\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_j6\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_j6\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_j6\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_j6\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_j6\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}AudioClipTệp âm thanhAudioSourcePhát âm thanhSpatial BlendÂm thanh không suy giảmtheo khoảng cáchÂm thanh không gianphụ thuộc khoảng cách vàthiết lậpAudioListenerNgười chơi nghe âm thanh2D3D

### 2.2. Âm thanh 2D và 3D

| Tiêu chí          | Âm thanh 2D                                    | Âm thanh 3D                                         |
| ----------------- | ---------------------------------------------- | --------------------------------------------------- |
| Vị trí nguồn phát | Không dùng vị trí để tính suy giảm khoảng cách | Có xét vị trí trong không gian                      |
| Khoảng cách       | Không làm thay đổi âm lượng theo cơ chế 3D     | Có thể ảnh hưởng âm lượng                           |
| Ứng dụng          | Nhạc nền, âm thanh giao diện                   | Tiếng bước chân, tiếng máy móc, âm thanh môi trường |
| Spatial Blend     | `0`                                            | `1`                                                 |

Ví dụ: Tiếng nhạc nền thường dùng âm thanh 2D để người chơi nghe ổn định. Tiếng động cơ ở xa có thể sử dụng âm thanh 3D để tạo cảm giác không gian.

### 2.3. Particle System

`Particle System` là Component dùng để tạo và điều khiển nhiều phần tử hình ảnh nhỏ, gọi là particles.

Một số ứng dụng:

- Bụi xuất hiện khi nhân vật tiếp đất.
- Tia lửa xuất hiện khi vật thể va chạm.
- Khói bốc lên từ phương tiện.
- Hiệu ứng phép thuật khi sử dụng kỹ năng.

Những thuộc tính cơ bản có thể tìm hiểu trong Inspector:

| Thuộc tính     | Vai trò                             |
| -------------- | ----------------------------------- |
| Duration       | Thời gian của một chu kỳ hiệu ứng   |
| Start Lifetime | Thời gian tồn tại của mỗi hạt       |
| Start Speed    | Tốc độ ban đầu của hạt              |
| Start Size     | Kích thước ban đầu                  |
| Emission       | Điều khiển việc phát sinh hạt       |
| Shape          | Xác định hình dạng và vùng phát hạt |
| Looping        | Cho phép hiệu ứng lặp lại           |

## 3. Thực hành trong Unity Editor

### Bước 1 — Tạo Audio Source

1. Mở dự án Unity.
2. Chọn một GameObject trong Hierarchy hoặc tạo GameObject mới.
3. Trong Inspector, chọn Add Component.
4. Tìm kiếm `Audio Source`.
5. Gắn một `AudioClip` được phép sử dụng vào ô AudioClip.

[Create real-time 3D audio effects - Unity Learn](https://images.openai.com/static-rsc-4/liTYwdTRn2rFW87EZbAve8KK6Sku9aXr8oY6N1swLtnz92_jvG5JSFVSPg0pL7xF2OkRmzsa_Sr5o4cmE4Z9rAcrjjKShXe0UxcTGYRdXKqc3jl93YLjOV8s2v71MjQl1aYLKuUVlex7DDr8i0jDGIU17xeIAIu_MgRfLGyRAwk?purpose=inline)

[learn.unity.com](https://learn.unity.com/course/game-design-curricular-framework-resources/tutorial/create-real-time-3d-audio-effects?utm_source=chatgpt.com)

Kết quả mong đợi: GameObject có khả năng phát AudioClip khi được cấu hình phù hợp.

### Bước 2 — Thử nghiệm thông số âm thanh

Thay đổi lần lượt các tham số và quan sát kết quả.

| Tham số       | Thử nghiệm    | Kết quả dự kiến                                  |
| ------------- | ------------- | ------------------------------------------------ |
| Play On Awake | Bật/tắt       | Âm thanh có/không tự phát khi bắt đầu            |
| Loop          | Bật/tắt       | Âm thanh phát lặp lại hoặc kết thúc sau một lượt |
| Volume        | `0.2` → `1.0` | Âm lượng thay đổi                                |
| Spatial Blend | `0` → `1`     | Chuyển từ âm thanh 2D sang 3D                    |

Yêu cầu: Chỉ thay đổi một thông số mỗi lần để xác định đúng nguyên nhân gây ra sự khác biệt.

### Bước 3 — Kiểm tra âm thanh 3D

1. Tạo một GameObject đặt cách xa Main Camera.
2. Gắn Audio Source và AudioClip cho đối tượng.
3. Chuyển `Spatial Blend = 1`.
4. Điều chỉnh các thiết lập khoảng cách như `Min Distance`, `Max Distance` và `Rolloff Mode` khi cần.
5. Chạy Scene và thay đổi khoảng cách giữa AudioListener với AudioSource.

Quan sát: Âm lượng có thể giảm khi khoảng cách tăng, tùy theo cấu hình suy giảm âm thanh.

### Bước 4 — Phát âm thanh bằng sự kiện

Tạo script `SoundEffectDemo.cs`:

```
using UnityEngine;

public class SoundEffectDemo : MonoBehaviour
{
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip soundEffect;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            PlaySound();
        }
    }

    void PlaySound()
    {
        if (audioSource == null || soundEffect == null)
            return;

        if (!audioSource.isPlaying)
        {
            audioSource.PlayOneShot(soundEffect);
        }
    }
}
```

Cách sử dụng:

1. Tạo GameObject tên `SoundManager`.
2. Gắn script vào GameObject.
3. Gắn Audio Source vào cùng GameObject hoặc đối tượng thích hợp.
4. Kéo AudioSource và AudioClip vào hai trường trong Inspector.
5. Chạy trò chơi và nhấn `Space`.

Lưu ý: Ví dụ dùng hệ thống Input cũ (`Input.GetKeyDown`). Nếu dự án Unity 6.3 chỉ bật Input System mới, cần chuyển Active Input Handling sang `Both` hoặc điều chỉnh mã theo Input System mới.

### Bước 5 — Tạo hiệu ứng Particle đơn giản (bổ sung)

1. Trong Hierarchy, chọn GameObject → Effects → Particle System.
2. Đổi tên thành `LandingDust`.
3. Điều chỉnh `Start Lifetime`, `Start Speed` và `Start Size`.
4. Tắt `Looping` để hiệu ứng không phát liên tục.
5. Tắt `Play On Awake` để chủ động kích hoạt.
6. Dùng nút Play trong Inspector để thử nghiệm.

Có thể kích hoạt hiệu ứng bằng đoạn mã:

```
using UnityEngine;

public class ParticleEffectDemo : MonoBehaviour
{
    [SerializeField] private ParticleSystem landingEffect;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.P))
        {
            if (landingEffect != null)
            {
                landingEffect.Play();
            }
        }
    }
}
```

Nhấn `P` để phát hiệu ứng hạt khi chạy trò chơi.

## 4. Kết hợp âm thanh và hiệu ứng hạt

Trong trò chơi thực tế, một sự kiện gameplay có thể kích hoạt cả hai loại hiệu ứng.

Ví dụ: Khi nhân vật tiếp đất, trò chơi phát tiếng va chạm và tạo bụi.

\#chatgpt-mermaid-\_r_k2\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_k2\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k2\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_k2\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_k2\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_k2\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_k2\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_k2\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_k2\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_k2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k2\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k2\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_k2\_ p{margin:0;}#chatgpt-mermaid-\_r_k2\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_k2\_ .label text,#chatgpt-mermaid-\_r_k2\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ .node rect,#chatgpt-mermaid-\_r_k2\_ .node circle,#chatgpt-mermaid-\_r_k2\_ .node ellipse,#chatgpt-mermaid-\_r_k2\_ .node polygon,#chatgpt-mermaid-\_r_k2\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .rough-node .label text,#chatgpt-mermaid-\_r_k2\_ .node .label text,#chatgpt-mermaid-\_r_k2\_ .image-shape .label,#chatgpt-mermaid-\_r_k2\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_k2\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .rough-node .label,#chatgpt-mermaid-\_r_k2\_ .node .label,#chatgpt-mermaid-\_r_k2\_ .image-shape .label,#chatgpt-mermaid-\_r_k2\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_k2\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_k2\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k2\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k2\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_k2\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k2\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k2\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k2\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_k2\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_k2\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_k2\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_k2\_ .icon-shape,#chatgpt-mermaid-\_r_k2\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_k2\_ .icon-shape p,#chatgpt-mermaid-\_r_k2\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_k2\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_k2\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_k2\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_k2\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_k2\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_k2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_k2\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_k2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_k2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k2\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_k2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_k2\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k2\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_k2\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_k2\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_k2\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .node rect,#chatgpt-mermaid-\_r_k2\_ .node circle,#chatgpt-mermaid-\_r_k2\_ .node ellipse,#chatgpt-mermaid-\_r_k2\_ .node polygon,#chatgpt-mermaid-\_r_k2\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_k2\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_k2\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_k2\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_k2\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_k2\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Nhân vật tiếp đấtGameplay EventAudioSource.PlayOneShot()ParticleSystem.Play()Phản hồi âm thanhPhản hồi hình ảnhTrải nghiệm tương tác

Mẫu phương thức kết hợp:

```
using UnityEngine;

public class LandingEffects : MonoBehaviour
{
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip landingSound;
    [SerializeField] private ParticleSystem dustEffect;

    public void PlayLandingEffects()
    {
        if (audioSource != null && landingSound != null)
        {
            audioSource.PlayOneShot(landingSound);
        }

        if (dustEffect != null)
        {
            dustEffect.Play();
        }
    }
}
```

Phương thức `PlayLandingEffects()` cần được gọi từ một sự kiện phát hiện tiếp đất. Đoạn mã trên chỉ xử lý phát hiệu ứng, chưa triển khai logic phát hiện va chạm hay tiếp đất.

## 5. Bài tập củng cố

Bài tập 1 — Cơ bản

Tạo GameObject có Audio Source, gán một AudioClip và kiểm tra sự khác biệt giữa `Play On Awake` và `Loop`.

Bài tập 2 — Vận dụng

Đặt hai đối tượng phát âm ở khoảng cách khác nhau. Dự đoán và kiểm chứng ảnh hưởng của Spatial Blend và Rolloff.

Bài tập 3 — Mở rộng

Xây dựng một tương tác nhảy hoặc tiếp đất, kết hợp âm thanh và Particle System. Thử điều chỉnh kích thước, tốc độ và thời gian tồn tại của hạt.

### Câu hỏi tự kiểm tra

Trắc nghiệm nhanh — 5 câu

0/5 đã chọn

1\. Component nào chịu trách nhiệm phát âm thanh trong Unity?

AudioListener

AudioSource

Rigidbody

Particle System

2\. Giá trị Spatial Blend nào tương ứng với âm thanh 3D hoàn toàn?

0

0.25

0.5

1

3\. Muốn một hiệu ứng hạt không tự lặp liên tục, nên tắt thuộc tính nào?

Looping

Start Size

Shape

Start Speed

4\. Lệnh nào có thể phát một âm thanh sự kiện mà không cần thay AudioSource.clip?

Destroy()

PlayOneShot()

GetComponent()

SetActive()

5\. Khi không nghe được âm thanh, thao tác nào nên làm trước?

Xóa toàn bộ Scene

Thay đổi mọi thông số cùng lúc

Kiểm tra AudioClip, AudioSource, AudioListener và Console

Tạo dự án mới

Chấm điểmLàm lại

## 6. Lỗi thường gặp và cách khắc phục

| Hiện tượng                      | Nguyên nhân có thể                                                      | Cách kiểm tra                                              |
| ------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| Không nghe âm thanh             | Thiếu AudioClip hoặc AudioSource                                        | Kiểm tra Component và tham chiếu                           |
| Âm thanh không phát khi bắt đầu | Tắt Play On Awake                                                       | Kiểm tra Inspector                                         |
| Âm thanh bị nhỏ                 | Volume thấp hoặc suy giảm khoảng cách                                   | Kiểm tra Volume, Spatial Blend và Rolloff                  |
| Âm thanh bị chồng lặp           | Sự kiện phát quá thường xuyên                                           | Kiểm soát tần suất gọi phương thức phát                    |
| Console cảnh báo AudioListener  | Không có hoặc có nhiều AudioListener hoạt động                          | Kiểm tra Main Camera và Scene                              |
| Không thấy Particle             | Component chưa phát, đối tượng không hoạt động hoặc hạt ngoài vùng nhìn | Kiểm tra Particle System, vị trí, thời gian sống và Camera |

### Quy trình debug

\#chatgpt-mermaid-\_r_mh\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_mh\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mh\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_mh\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_mh\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_mh\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_mh\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_mh\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_mh\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_mh\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mh\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mh\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_mh\_ p{margin:0;}#chatgpt-mermaid-\_r_mh\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_mh\_ .label text,#chatgpt-mermaid-\_r_mh\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ .node rect,#chatgpt-mermaid-\_r_mh\_ .node circle,#chatgpt-mermaid-\_r_mh\_ .node ellipse,#chatgpt-mermaid-\_r_mh\_ .node polygon,#chatgpt-mermaid-\_r_mh\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .rough-node .label text,#chatgpt-mermaid-\_r_mh\_ .node .label text,#chatgpt-mermaid-\_r_mh\_ .image-shape .label,#chatgpt-mermaid-\_r_mh\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_mh\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .rough-node .label,#chatgpt-mermaid-\_r_mh\_ .node .label,#chatgpt-mermaid-\_r_mh\_ .image-shape .label,#chatgpt-mermaid-\_r_mh\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_mh\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_mh\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mh\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mh\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_mh\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mh\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mh\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mh\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_mh\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_mh\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_mh\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_mh\_ .icon-shape,#chatgpt-mermaid-\_r_mh\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_mh\_ .icon-shape p,#chatgpt-mermaid-\_r_mh\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_mh\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_mh\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_mh\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_mh\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_mh\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_mh\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_mh\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_mh\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_mh\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mh\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_mh\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_mh\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mh\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_mh\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_mh\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_mh\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .node rect,#chatgpt-mermaid-\_r_mh\_ .node circle,#chatgpt-mermaid-\_r_mh\_ .node ellipse,#chatgpt-mermaid-\_r_mh\_ .node polygon,#chatgpt-mermaid-\_r_mh\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_mh\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_mh\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_mh\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_mh\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_mh\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện lỗiKiểm tra ConsoleKiểm tra GameObject vàComponentĐưa ra một giả thuyếtChỉ sửa một yếu tốChạy lạiGhi nhận kết quảĐã sửaCòn lỗi

### Mẫu ghi chép kết quả

| Nội dung         | Ghi chép                            |
| ---------------- | ----------------------------------- |
| Kết quả mong đợi | Âm thanh phát khi nhấn Space        |
| Kết quả thực tế  | Âm thanh không phát                 |
| Quan sát         | AudioClip chưa được gán             |
| Nguyên nhân      | Thiếu tham chiếu tới tệp âm thanh   |
| Cách khắc phục   | Gán AudioClip trong Inspector       |
| Kiểm chứng       | Chạy lại và xác nhận đã có âm thanh |

## 7. Checklist hoàn thành

Tiến độ học tập

0/9

Hiểu vai trò của AudioSource, AudioClip và AudioListener.

Phân biệt âm thanh 2D và 3D.

Thay đổi và kiểm tra các thông số trong Inspector.

Tạo được một hiệu ứng Particle đơn giản.

Kích hoạt âm thanh hoặc Particle bằng sự kiện.

Kết hợp được phản hồi âm thanh và hình ảnh.

Ghi lại ít nhất một ảnh hoặc video minh chứng.

Phát hiện và giải thích ít nhất một lỗi.

Đối chiếu bài gốc và tài nguyên đính kèm trên Unity Learn.

## 8. Tổng kết

Sau bài học, cần nắm được mối quan hệ giữa ba thành phần chính: AudioClip lưu dữ liệu âm thanh, AudioSource phát âm thanh và AudioListener tiếp nhận âm thanh. Đồng thời, Particle System cho phép tạo các hiệu ứng trực quan như bụi, khói hoặc tia lửa.

Khi kết hợp với sự kiện gameplay, âm thanh và hiệu ứng hạt giúp người chơi nhận biết rõ hơn kết quả của hành động trong trò chơi.

Tài liệu đối chiếu: [Junior Programmer — Sound and Effects, Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/sound-and-effects?version=6.3\&utm_source=chatgpt.com).

Ghi chú phiên bản: Nội dung thực hành tự biên soạn, sử dụng Unity 6.3 làm phiên bản mục tiêu. Menu, Component và thiết lập Input có thể khác giữa các dự án hoặc phiên bản Unity. Cần đối chiếu bài gốc để xác định chính xác các bước và tài nguyên chính thức.