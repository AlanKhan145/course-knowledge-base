# 048 — Cycles Render Settings

**Phần:** 06 — Camera & Rendering
**Thời lượng:** 6:54
**Chủ đề:** GPU, samples, denoise, light paths, motion blur và color management
**Loại bài:** lesson

---

## 1. Tóm tắt

`Cycles` là render engine dạng path tracing của Blender, được thiết kế để mô phỏng ánh sáng vật lý và tạo hình ảnh chất lượng cao.

Chất lượng của một render Cycles không phụ thuộc vào việc tăng mọi thông số lên mức tối đa. Một workflow hiệu quả phải cân bằng giữa:

```text
Chất lượng hình ảnh
        ↕
Noise
        ↕
Thời gian render
        ↕
VRAM / RAM
```

Trong bài này, người học sẽ thiết lập Cycles cho cả render thử và render cuối, lựa chọn CPU hoặc GPU, kiểm soát sampling, sử dụng denoise, điều chỉnh `Light Paths`, tối ưu volumetric effects, thiết lập `Motion Blur`, xuất background trong suốt và xây dựng hai cấu hình riêng cho preview và final render.

---

## 2. Mục tiêu học tập

Sau khi hoàn thành bài này, người học có thể:

* Chọn `Cycles` làm render engine.
* Phân biệt vai trò của CPU và GPU trong quá trình render.
* Thiết lập sampling riêng cho viewport và final render.
* Giải thích mối quan hệ giữa samples, noise và render time.
* Sử dụng adaptive sampling thông qua `Noise Threshold`.
* Bật denoise cho final render và đánh giá ảnh hưởng đến detail.
* Hiểu vai trò của `Light Paths` đối với reflection, transmission và glass.
* Tối ưu scene có volumetric fog hoặc cloud.
* Thiết lập `Motion Blur` thông qua shutter.
* Render background trong suốt khi cần compositing.
* Phân biệt các thiết lập test render và final render.
* Kiểm tra caustics, volume và vật liệu đặc biệt trước khi xuất ảnh cuối.

---

## 3. Vì sao Cycles cần được tối ưu?

Cycles mô phỏng đường truyền của ánh sáng bằng cách lấy nhiều mẫu ngẫu nhiên cho từng pixel.

Quá trình có thể hình dung như sau:

```text
Camera
   ↓
Pixel
   ↓
Sample nhiều tia sáng
   ↓
Tia tương tác với vật liệu
   ↓
Reflection / Refraction / Shadow
   ↓
Tích lũy kết quả
   ↓
Ảnh cuối
```

Khi số lượng mẫu còn thấp, lượng thông tin thu được chưa đủ ổn định và ảnh thường xuất hiện noise.

Tăng samples giúp kết quả hội tụ tốt hơn nhưng cũng làm tăng lượng tính toán.

```text
Samples thấp
     ↓
Render nhanh
     ↓
Noise nhiều hơn

Samples cao
     ↓
Noise giảm
     ↓
Render lâu hơn
```

Tuy nhiên, tăng samples không phải cách duy nhất để xử lý noise.

Một pipeline hiện đại nên kết hợp:

* adaptive sampling;
* denoise;
* lighting hợp lý;
* material hợp lý;
* `Light Paths` phù hợp;
* sampling vừa đủ.

---

## 4. Chọn Cycles và thiết bị render

Trong `Render Properties`, chọn:

```text
Render Engine
→ Cycles
```

Cycles có thể render bằng:

```text
CPU
```

hoặc:

```text
GPU Compute
```

Nếu hệ thống có GPU được Blender hỗ trợ tốt, `GPU Compute` thường cho tốc độ render nhanh hơn đáng kể đối với nhiều scene.

Tuy nhiên, GPU không phải lúc nào cũng mặc định nhanh hơn trong mọi trường hợp. Hiệu quả còn phụ thuộc vào:

* loại GPU;
* dung lượng VRAM;
* scene complexity;
* lượng geometry;
* texture;
* volume;
* driver;
* backend compute.

Workflow nên là:

```text
Kiểm tra GPU
    ↓
Bật thiết bị render
    ↓
Render một frame benchmark
    ↓
So sánh với CPU nếu cần
```

Không nên lựa chọn CPU hoặc GPU chỉ dựa trên giả định.

---

## 5. Kiểm tra GPU trong Blender

Thiết bị Cycles thường được cấu hình trong phần Preferences của Blender.

Tùy phần cứng, Blender có thể cung cấp các backend compute khác nhau.

Sau khi thiết bị đã được bật, trong `Render Properties` chọn:

```text
Device
→ GPU Compute
```

Nếu Blender vẫn render bằng CPU, cần kiểm tra:

* GPU đã được bật trong Preferences chưa;
* driver có hoạt động đúng không;
* backend compute có phù hợp với GPU không;
* scene có vượt quá VRAM không;
* Blender có nhận diện đúng thiết bị không.

### CPU và GPU khác nhau thế nào?

| Thiết bị | Điểm mạnh                                       | Hạn chế thường gặp                    |
| -------- | ----------------------------------------------- | ------------------------------------- |
| CPU      | RAM hệ thống thường lớn, ổn định với scene nặng | Chậm hơn GPU trong nhiều workload     |
| GPU      | Render Cycles rất nhanh trên phần cứng phù hợp  | Giới hạn VRAM có thể trở thành vấn đề |

Nếu scene quá lớn so với VRAM, việc chỉ chuyển sang GPU không đảm bảo render nhanh hơn.

---

## 6. Feature Set và Experimental

Cycles có thể cung cấp các `Feature Set` khác nhau tùy phiên bản Blender.

Thông thường nên sử dụng cấu hình ổn định mặc định cho production.

`Experimental` chỉ nên bật khi một tính năng thực sự yêu cầu nó.

Không nên áp dụng nguyên tắc:

```text
Experimental = chất lượng cao hơn
```

vì đây không phải mục đích của thiết lập này.

`Experimental` chủ yếu cho phép sử dụng một số tính năng đang ở trạng thái thử nghiệm hoặc chưa thuộc workflow ổn định.

Nếu scene không yêu cầu chúng, nên ưu tiên cấu hình production thông thường.

---

## 7. Open Shading Language

`Open Shading Language`, viết tắt là `OSL`, là một ngôn ngữ shading được sử dụng để xây dựng các shader có logic phức tạp.

Tên chính xác là:

```text
Open Shading Language
```

không phải `HSL`.

OSL chủ yếu phù hợp với những workflow chuyên sâu liên quan tới shader development.

Trong phần lớn project Blender thông thường, người học có thể sử dụng hệ thống shader node mà không cần viết OSL.

Vì vậy OSL không phải một thiết lập cần bật để render Cycles thông thường.

---

## 8. Sampling

Sampling là một trong những thiết lập quan trọng nhất của Cycles.

Thông thường Blender tách sampling thành:

* viewport;
* render.

Điều này cho phép tạo hai mức chất lượng khác nhau.

```text
Viewport
→ phản hồi nhanh

Final Render
→ chất lượng cao hơn
```

Không nên dùng cùng một mức samples cho cả hai.

### Test render

Khi đang:

* chỉnh ánh sáng;
* kiểm tra camera;
* thử material;
* kiểm tra composition;
* thử DOF;

có thể bắt đầu với một mức samples thấp.

Ví dụ:

```text
64 samples
```

hoặc:

```text
128 samples
```

Đây là điểm bắt đầu thực tế cho nhiều scene, không phải giá trị bắt buộc.

### Final render

Khi render cuối, có thể tăng lên:

```text
256 samples
```

hoặc:

```text
512 samples
```

nếu scene thực sự cần.

Không có quy tắc rằng final render luôn phải là `512`.

Một scene đơn giản có thể sạch ở samples thấp hơn, trong khi interior, glass, volume hoặc ánh sáng gián tiếp phức tạp có thể cần nhiều hơn.

Nguyên tắc đúng là:

> Dùng mức samples thấp nhất vẫn đạt chất lượng cần thiết.

---

## 9. Noise Threshold và Adaptive Sampling

Chỉ đặt `Max Samples` chưa đủ để tối ưu render.

Cycles có thể đánh giá mức noise trong từng vùng và ngừng sampling những pixel đã đủ sạch.

Cơ chế tổng quát:

```text
Pixel
   ↓
Đang còn noise?
   ├── Có → tiếp tục lấy sample
   └── Không → dừng sớm
```

`Noise Threshold` kiểm soát mức noise được chấp nhận.

Ví dụ có thể bắt đầu thử với:

```text
Noise Threshold = 0.03
```

Sau đó đánh giá kết quả.

Threshold cao hơn thường:

```text
Threshold cao hơn
       ↓
Dừng sampling sớm hơn
       ↓
Render nhanh hơn
       ↓
Có thể còn noise nhiều hơn
```

Threshold thấp hơn:

```text
Threshold thấp hơn
       ↓
Yêu cầu ảnh sạch hơn
       ↓
Lấy nhiều sample hơn
       ↓
Render lâu hơn
```

Không nên coi `0.03` là con số tối ưu cho mọi scene.

---

## 10. Denoise

Denoising sử dụng thông tin từ render để ước lượng và loại bỏ noise còn lại.

Pipeline thông thường:

```text
Path Tracing
     ↓
Ảnh còn noise
     ↓
Denoiser
     ↓
Ảnh sạch hơn
```

Denoise đặc biệt hữu ích vì nó cho phép đạt hình ảnh sạch mà không cần tăng samples quá cao.

### Denoise trong viewport

Bật viewport denoise giúp:

* preview lighting dễ hơn;
* quan sát material nhanh hơn;
* giảm noise khi xoay scene.

Tuy nhiên nó cũng có thể làm:

* detail nhỏ bị mềm;
* texture trông mịn hơn thực tế;
* material bị đánh giá sai khi samples còn quá thấp.

Nếu đang kiểm tra những chi tiết rất nhỏ, có thể tạm tắt viewport denoise.

### Denoise cho final render

Đối với final render, denoise thường rất hữu ích.

Nhưng cần kiểm tra những vùng như:

* tóc;
* fur;
* displacement nhỏ;
* texture tần số cao;
* reflection;
* glass;
* vùng ánh sáng rất nhỏ;
* volumetric detail.

Denoise quá mạnh trên một render thiếu samples có thể tạo:

* smearing;
* mất texture;
* mất highlight nhỏ;
* artefact giống tranh sơn.

Denoise không thể thay thế hoàn toàn sampling tốt.

---

## 11. Xây dựng preset test và final

Một workflow hiệu quả nên có ít nhất hai cấu hình tư duy.

| Thiết lập       |         Test |                Final |
| --------------- | -----------: | -------------------: |
| Samples         |         Thấp |              Cao hơn |
| Noise Threshold |   Thoáng hơn |             Chặt hơn |
| Denoise         |   Có thể bật |           Thường bật |
| Resolution      |  Có thể giảm |               Đầy đủ |
| Volume quality  |  Có thể giảm |         Kiểm tra lại |
| Motion Blur     | Test khi cần | Bật nếu shot yêu cầu |

Ví dụ một điểm khởi đầu:

```text
TEST

Samples: 64–128
Denoise: On
Noise Threshold: khoảng 0.03
Resolution Percentage: giảm nếu cần
```

Final có thể bắt đầu từ:

```text
FINAL

Samples: 256–512
Denoise: On
Noise Threshold: kiểm tra theo scene
Resolution: 100%
```

Đây chỉ là baseline để test.

Luôn đánh giá bằng hình ảnh thực tế.

---

## 12. Light Paths

`Light Paths` kiểm soát số lần tia sáng có thể tương tác với scene trước khi bị kết thúc.

Một đường sáng có thể trải qua:

```text
Camera
   ↓
Surface
   ↓
Reflection
   ↓
Glass
   ↓
Refraction
   ↓
Surface khác
   ↓
Light
```

Càng cho phép nhiều bounce:

* ánh sáng gián tiếp có thể chính xác hơn;
* vật liệu phức tạp hoạt động tốt hơn;
* render có thể tốn nhiều thời gian hơn.

Các loại bounce có thể liên quan đến:

* diffuse;
* glossy;
* transmission;
* transparent;
* volume.

Không cần tăng tất cả lên cao.

---

## 13. Glass và transmission

Glass là trường hợp dễ phát hiện vấn đề `Light Paths`.

Nếu tia sáng không được phép truyền qua đủ số lần, scene có thể xuất hiện:

* vùng glass bất thường;
* reflection sai;
* vật thể phía sau kính quá tối;
* artifact đen.

Ví dụ:

```text
Camera
   ↓
Mặt kính trước
   ↓
Mặt kính sau
   ↓
Object
```

Một hệ kính nhiều lớp có thể cần nhiều transmission bounce hơn một cửa kính đơn giản.

Vì vậy khi thấy black artifact trên kính, không nên lập tức tăng toàn bộ samples.

Hãy kiểm tra:

1. material;
2. normals;
3. light paths;
4. transmission bounce;
5. scene lighting.

---

## 14. Fast và Full Global Illumination

Một số cấu hình Cycles có thể ưu tiên giữa:

```text
Render nhanh
```

và:

```text
Global illumination chính xác hơn
```

Cấu hình nhanh có thể đủ cho:

* preview;
* blocking;
* kiểm tra animation;
* kiểm tra composition.

Nhưng với scene chứa:

* glass;
* nhiều indirect lighting;
* reflective material;
* interior;
* caustics;

việc giảm light transport quá mạnh có thể làm chất lượng suy giảm rõ rệt.

Workflow phù hợp:

```text
Fast configuration
      ↓
Preview
      ↓
Phát hiện vấn đề material?
      ↓
Tăng light transport cần thiết
      ↓
Final test
```

Không cần tăng mọi bounce lên cực cao nếu chỉ một loại vật liệu cần thêm đường truyền sáng.

---

## 15. Caustics

Caustics xuất hiện khi ánh sáng được hội tụ hoặc biến đổi qua reflection hoặc refraction.

Ví dụ:

```text
Light
  ↓
Glass
  ↓
Refraction
  ↓
Bright Pattern
```

Caustics có thể xuất hiện với:

* glass;
* water;
* polished metal;
* crystal;
* transparent object.

Chúng có thể rất tốn sampling và là nguồn noise đáng kể.

Nếu scene không cần caustics rõ ràng, việc giới hạn hoặc vô hiệu một số loại caustics có thể giúp render nhanh hơn.

Nếu scene phụ thuộc vào caustics, cần kiểm tra riêng thay vì chỉ dựa trên preset render tổng quát.

---

## 16. Volume

Volumetric effects thường là một trong những phần tốn tài nguyên nhất của Cycles.

Ví dụ:

* fog;
* smoke;
* clouds;
* god rays;
* atmospheric volume.

Quá trình ray marching có thể hình dung như:

```text
Ray đi vào volume
      ↓
Lấy nhiều mẫu dọc đường đi
      ↓
Tính absorption / scattering
      ↓
Tiếp tục ray
```

Càng nhiều bước tính:

* volume càng chính xác;
* detail có thể tốt hơn;
* render càng chậm.

Khi tối ưu volume, nên giảm chất lượng từng bước và so sánh bằng render thực tế.

Ví dụ, nếu một scene vẫn giữ được hình ảnh cần thiết với số bước thấp hơn, không cần duy trì giá trị rất cao.

Không nên áp dụng một giá trị cố định như `16` cho mọi scene.

Cloud dày, fog nhẹ và volume chứa ánh sáng phức tạp có yêu cầu hoàn toàn khác nhau.

---

## 17. Simplify

`Simplify` giúp giảm độ phức tạp của scene trong quá trình preview hoặc render.

Có thể giới hạn một số thành phần như:

* subdivision;
* texture resolution;
* particle hoặc curve complexity tùy scene;
* các dữ liệu hình học phức tạp.

Ví dụ:

```text
Scene final
→ Subdivision Level 3

Preview
→ Simplify
→ Subdivision Level thấp hơn
```

Đây là công cụ hữu ích khi scene quá nặng.

Tuy nhiên, cần đảm bảo `Simplify` không làm final render mất:

* silhouette;
* displacement;
* hair;
* geometry detail quan trọng.

---

## 18. Curves và Hair

Scene sử dụng:

* hair;
* fur;
* procedural curves;

có thể cần chú ý thêm tới các thiết lập curve rendering.

Hair thường chứa số lượng primitive rất lớn nên dễ làm tăng:

* VRAM;
* RAM;
* render time;
* noise;
* thời gian xây dựng BVH.

Nếu project không sử dụng hair hoặc curve phức tạp, có thể giữ các thiết lập mặc định.

Nếu có hair, nên tạo render test riêng để kiểm tra:

* silhouette;
* độ dày strand;
* shading;
* denoise;
* memory usage.

---

## 19. Motion Blur

`Motion Blur` mô phỏng hiện tượng camera ghi lại chuyển động trong một khoảng thời gian phơi sáng.

Ví dụ:

```text
Object tại thời điểm A
       ↓
Di chuyển
       ↓
Object tại thời điểm B
       ↓
Camera tích hợp chuyển động
       ↓
Motion Blur
```

Một object đứng yên sẽ không tự nhiên xuất hiện blur chuyển động chỉ vì tính năng này được bật.

Motion blur thường quan trọng với:

* character animation;
* vehicle;
* particle;
* camera movement;
* action shot.

---

## 20. Shutter

`Shutter` kiểm soát khoảng thời gian chuyển động được tích hợp vào frame.

Về nguyên tắc:

```text
Shutter thấp
      ↓
Motion Blur ít

Shutter cao
      ↓
Motion Blur mạnh hơn
```

Một giá trị khoảng:

```text
0.3
```

có thể được sử dụng làm điểm thử ban đầu cho một số shot.

Nhưng không tồn tại một shutter value phù hợp cho mọi animation.

Nếu chuyển động rất nhanh, `0.3` có thể đã tạo blur mạnh.

Nếu chuyển động rất chậm, nó có thể gần như không đáng kể.

Luôn đánh giá motion blur dựa trên:

* tốc độ object;
* tốc độ camera;
* frame rate;
* phong cách hình ảnh.

---

## 21. Kiểm tra Motion Blur

Không nên đợi đến final render mới kiểm tra motion blur.

Chọn một frame có chuyển động rõ rồi render test.

Ví dụ:

```text
Frame tĩnh
   ↓
Không phù hợp để test

Frame có vận tốc lớn
   ↓
Render test
   ↓
Kiểm tra silhouette
   ↓
Tinh chỉnh shutter
```

Blur quá mạnh có thể:

* phá silhouette;
* làm mất khuôn mặt;
* khiến animation trông mềm;
* che detail.

Blur quá thấp có thể khiến chuyển động nhanh có cảm giác giật hoặc quá sắc.

---

## 22. Film Transparent

Trong phần `Film`, tùy chọn:

```text
Transparent
```

cho phép render scene với background trong suốt.

Thay vì:

```text
Object
+
World / HDRI Background
```

output có thể trở thành:

```text
Object
+
Alpha
```

Điều này rất hữu ích cho compositing.

Ví dụ:

```text
Blender Render
      ↓
Transparent Background
      ↓
Compositor / Video Editor
      ↓
Background khác
```

HDRI vẫn có thể được sử dụng để chiếu sáng scene trong một số workflow trong khi background output được xử lý riêng.

Cần xuất sang định dạng hỗ trợ alpha nếu muốn giữ transparency.

---

## 23. Glass và transparent background

Glass tạo ra trường hợp phức tạp hơn transparency thông thường vì nó có thể nhìn thấy hoặc khúc xạ environment phía sau.

Nếu mục tiêu là compositing glass lên một background khác, cần kiểm tra kỹ:

* alpha;
* refraction;
* reflection;
* transparent glass behavior;
* compositor.

Không nên chỉ thấy background trở thành transparent rồi mặc định glass đã sẵn sàng để compositing chính xác.

Render test glass trên nhiều background khác nhau để phát hiện viền hoặc reflection bất thường.

---

## 24. Pixel Filter

Pixel filter ảnh hưởng đến cách Cycles tổng hợp sample xung quanh pixel và vì vậy có thể ảnh hưởng tới cảm giác sắc nét của ảnh.

Giảm filter width có thể làm hình ảnh:

* sắc hơn;
* edge rõ hơn.

Nhưng quá thấp có thể làm tăng:

* aliasing;
* shimmer;
* cảm giác quá sắc.

Giá trị mặc định thường là lựa chọn an toàn.

Chỉ nên thay đổi khi đã đánh giá bằng render thực tế, đặc biệt với animation vì một frame sắc hơn chưa chắc tạo chuyển động ổn định hơn.

---

## 25. Performance

Các thiết lập `Performance` liên quan tới cách Cycles sử dụng phần cứng và quản lý tài nguyên.

Tùy phiên bản Blender và thiết bị, các lựa chọn cụ thể có thể thay đổi.

Các mục tiêu chính thường là:

* sử dụng CPU/GPU hiệu quả;
* kiểm soát memory;
* tối ưu scene initialization;
* tối ưu tile hoặc scheduling;
* xử lý dữ liệu geometry lớn.

Không nên giả định:

```text
Tile lớn = luôn nhanh hơn
```

hoặc:

```text
Tile nhỏ = luôn tiết kiệm hơn
```

Render engine và GPU hiện đại có thể có cơ chế scheduling khác nhau.

Cách đáng tin cậy nhất là benchmark một frame đại diện của scene.

---

## 26. Bake

`Bake` được sử dụng để tính trước một số dữ liệu và ghi chúng vào texture hoặc resource khác.

Các workflow bake có thể bao gồm:

* normal;
* diffuse;
* roughness;
* emission;
* ambient information;
* material data khác.

Bake đặc biệt hữu ích khi chuyển asset sang:

* game engine;
* real-time renderer;
* low-poly workflow.

Đây là một workflow riêng và không cần thay đổi chỉ để tăng chất lượng của một render Cycles thông thường.

---

## 27. Color Management

`Color Management` kiểm soát cách dữ liệu màu từ render được biến đổi để hiển thị trên màn hình hoặc xuất thành hình ảnh.

Pipeline đơn giản:

```text
Scene Linear Data
       ↓
Color Management
       ↓
Display Transform
       ↓
Màn hình / File Output
```

Đây không phải một hiệu ứng trang trí cuối cùng.

Color management ảnh hưởng lớn đến:

* highlight;
* contrast;
* saturation;
* dynamic range;
* cảm giác ánh sáng.

Khi so sánh render, phải đảm bảo các phiên bản sử dụng cùng một color management configuration.

Nếu thay đổi color transform giữa các lần test, rất khó đánh giá chính xác sự khác biệt do lighting hoặc material.

---

## 28. Workflow render test

Không nên render final ngay sau khi hoàn thành scene.

Một pipeline hiệu quả là:

```text
Chọn Cycles
      ↓
Chọn CPU / GPU
      ↓
Samples thấp
      ↓
Denoise
      ↓
Render test
      ↓
Kiểm tra noise
      ↓
Kiểm tra glass / volume
      ↓
Kiểm tra motion blur
      ↓
Tăng chất lượng nơi cần
      ↓
Final render
```

Ở mỗi lần test, chỉ nên thay đổi một hoặc một nhóm thông số có liên quan.

Nếu cùng lúc thay:

* samples;
* denoise;
* lighting;
* material;
* light paths;

sẽ rất khó xác định thay đổi nào tạo ra kết quả tốt hơn.

---

## 29. Lỗi thường gặp

**Hiện tượng:** Render quá chậm ngay từ giai đoạn chỉnh scene.
**Nguyên nhân:** Dùng final samples hoặc full resolution cho mọi test.
**Cách xử lý:** Tạo cấu hình preview với samples và resolution thấp hơn.

**Hiện tượng:** Render vẫn noise dù samples rất cao.
**Nguyên nhân:** Lighting khó hội tụ, caustics, volume hoặc material phức tạp.
**Cách xử lý:** Xác định nguồn noise thay vì tiếp tục tăng samples vô hạn.

**Hiện tượng:** Texture và tóc bị mềm sau denoise.
**Nguyên nhân:** Input render quá noise khiến denoiser phải ước lượng quá nhiều.
**Cách xử lý:** Tăng lượng thông tin bằng sampling phù hợp rồi denoise lại.

**Hiện tượng:** Glass xuất hiện vùng đen.
**Nguyên nhân:** Transmission path không đủ, material sai hoặc normals có vấn đề.
**Cách xử lý:** Kiểm tra material, normals và `Light Paths`.

**Hiện tượng:** Scene có fog render rất lâu.
**Nguyên nhân:** Volume sampling hoặc ray marching quá tốn tài nguyên.
**Cách xử lý:** Giảm volume quality có kiểm soát và so sánh bằng test render.

**Hiện tượng:** GPU render không nhanh hơn CPU.
**Nguyên nhân:** GPU chưa được cấu hình đúng, scene thiếu VRAM hoặc workload không phù hợp.
**Cách xử lý:** Kiểm tra compute device và benchmark cùng một frame.

**Hiện tượng:** Motion blur làm mất hoàn toàn subject.
**Nguyên nhân:** Shutter quá cao so với tốc độ chuyển động.
**Cách xử lý:** Giảm shutter và test tại frame có vận tốc lớn.

**Hiện tượng:** Background vẫn xuất hiện khi cần compositing.
**Nguyên nhân:** `Film > Transparent` chưa được bật hoặc file output không giữ alpha.
**Cách xử lý:** Bật transparency và dùng định dạng hỗ trợ alpha.

---

## 30. Best practices

* Sử dụng GPU khi phần cứng phù hợp và benchmark cho thấy có lợi.
* Không mặc định `Experimental` tốt hơn cấu hình production.
* Tách riêng thiết lập preview và final.
* Bắt đầu với samples thấp rồi tăng khi cần.
* Dùng adaptive sampling thay vì chỉ phụ thuộc vào `Max Samples`.
* Sử dụng denoise cho final nhưng luôn kiểm tra detail nhỏ.
* Không dùng denoise để che một render thiếu thông tin nghiêm trọng.
* Không tăng tất cả `Light Paths` lên tối đa.
* Kiểm tra riêng glass, transmission và caustics.
* Tối ưu volume bằng test render trực tiếp.
* Test motion blur trên frame có chuyển động mạnh.
* Chỉ thay pixel filter khi có lý do rõ ràng.
* Benchmark performance thay vì dựa vào một preset duy nhất.
* Giữ color management nhất quán giữa các lần render test.
* Render một frame đại diện trước khi bắt đầu render animation dài.

---

## 31. Bài thực hành

Sử dụng một scene có:

* ít nhất một vật liệu diffuse;
* một vật liệu glass hoặc reflective;
* một nguồn sáng;
* một object chuyển động nếu có animation.

Tạo hai cấu hình thử nghiệm.

### 31.1. Preset test

Thiết lập điểm bắt đầu:

```text
Engine: Cycles
Device: GPU Compute nếu phù hợp
Samples: 64 hoặc 128
Denoise: On
Noise Threshold: khoảng 0.03
```

Render một frame và ghi nhận:

* thời gian;
* vùng noise nhiều nhất;
* chất lượng glass;
* detail nhỏ.

### 31.2. Preset final

Tăng samples lên mức cao hơn, chẳng hạn:

```text
256
```

hoặc:

```text
512
```

sau đó render cùng frame.

So sánh:

* noise;
* detail;
* denoise artifact;
* glass;
* render time.

Tiếp theo:

1. Thử giảm samples và giữ denoise.
2. Kiểm tra xem chất lượng có thay đổi đáng kể không.
3. Nếu có glass, giảm `Light Paths` để quan sát artifact rồi phục hồi mức phù hợp.
4. Nếu có volume, thử giảm chất lượng volume và so sánh thời gian.
5. Nếu có animation, bật `Motion Blur` và test một frame chuyển động mạnh.
6. Bật `Film > Transparent` và kiểm tra alpha.

**Kết quả mong đợi:**

* Có một cấu hình preview nhanh.
* Có một cấu hình final phù hợp hơn.
* Người học xác định được vùng gây noise chính.
* Denoise làm sạch ảnh mà không phá detail quan trọng.
* Glass không xuất hiện artifact đáng chú ý.
* Volume không sử dụng mức chất lượng cao hơn mức thực tế cần thiết.
* Motion blur hỗ trợ chuyển động nếu scene sử dụng animation.

---

## 32. Checklist hoàn thành

* [ ] Đã chọn `Cycles`.
* [ ] Đã kiểm tra đúng CPU hoặc GPU render device.
* [ ] Có cấu hình riêng cho test render.
* [ ] Có cấu hình riêng cho final render.
* [ ] Samples không được tăng cao một cách máy móc.
* [ ] Đã kiểm tra `Noise Threshold`.
* [ ] Denoise không làm mất detail quan trọng.
* [ ] Đã kiểm tra hair hoặc texture nhỏ nếu scene có.
* [ ] Đã kiểm tra `Light Paths`.
* [ ] Glass không xuất hiện artifact bất thường.
* [ ] Đã kiểm tra transmission nếu scene có kính.
* [ ] Đã kiểm tra caustics nếu scene phụ thuộc vào chúng.
* [ ] Đã kiểm tra volume nếu scene có fog, smoke hoặc cloud.
* [ ] Đã thử `Motion Blur` nếu scene có chuyển động.
* [ ] Shutter không phá silhouette quan trọng.
* [ ] Đã kiểm tra `Film > Transparent` nếu cần alpha.
* [ ] Color management nhất quán giữa các lần test.
* [ ] Đã render ít nhất một frame đại diện trước final render.

---

## 33. Tổng kết

Tối ưu Cycles không có nghĩa là giảm mọi thông số để render nhanh hoặc tăng mọi thông số để đạt chất lượng cao nhất.

Một workflow hiệu quả dựa trên việc xác định đúng nguyên nhân của chi phí render:

```text
Noise
→ Sampling / Lighting / Denoise

Glass artifact
→ Material / Light Paths / Transmission

Volume chậm
→ Volume sampling

Animation thiếu cảm giác chuyển động
→ Motion Blur

Scene quá nặng
→ GPU / Memory / Simplify / Performance
```

Samples và denoise tạo nền tảng cho hầu hết render, nhưng những scene có glass, volume, caustics, hair hoặc animation cần được kiểm tra riêng.

Cách làm hiệu quả nhất là bắt đầu bằng một preset test nhẹ, render một frame đại diện, xác định chính xác vấn đề rồi chỉ tăng chất lượng ở những phần thực sự cần thiết. Sau khi scene đã ổn định mới chuyển sang preset final và render ở resolution đầy đủ.
