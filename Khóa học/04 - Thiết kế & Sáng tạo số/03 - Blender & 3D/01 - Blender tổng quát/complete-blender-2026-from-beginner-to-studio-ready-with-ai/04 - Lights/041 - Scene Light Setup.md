# 041 — Scene Light Setup

**Phần:** 04 — Lights  
**Thời lượng:** 11:20  
**Chủ đề:** Ánh sáng hoàn chỉnh cho một scene  
**Loại bài:** lab  

---

## 1. Tổng quan

Một lighting setup hoàn chỉnh không bắt đầu bằng việc thêm thật nhiều đèn. Nó bắt đầu bằng việc xác định **focal point**, mood và vai trò của từng nguồn sáng trong frame.

Trong bài thực hành này, một chiếc bình có procedural material được chuyển thành một vật thể mang cảm giác huyền bí và nguy hiểm. Lighting được xây dựng theo hướng cinematic với:

- camera góc thấp;
- cyclorama tối;
- silhouette và rim light;
- key light chỉ chiếu phần trên;
- volume tổng thể;
- fog sát mặt đất;
- ánh sáng xanh lục xuyên qua fog;
- front light nhẹ để khôi phục thông tin;
- contrast mạnh giữa vùng sáng và shadow.

Pipeline thực hành:

```text
Xác định mood
      ↓
Chọn focal point
      ↓
Thiết lập camera
      ↓
Tạo background
      ↓
Block silhouette / rim
      ↓
Thêm key
      ↓
Tạo atmospheric volume
      ↓
Tạo fog cục bộ
      ↓
Thêm light cho volume
      ↓
Cân bằng front light
      ↓
Render test
      ↓
Tinh chỉnh hierarchy
```

Mục tiêu cuối cùng là tạo một scene mà mọi thành phần lighting đều có lý do tồn tại.

---

## 2. Mục tiêu thực hành

Sau khi hoàn thành bài này, người học có thể:

- Xác định focal point trước khi xây dựng lighting.
- Thiết lập camera hỗ trợ cảm xúc của scene.
- Tạo cyclorama làm background studio.
- Tắt World lighting để kiểm soát toàn bộ ánh sáng bằng scene lights.
- Sử dụng rim/silhouette light để đọc rõ đường viền subject.
- Tạo key light có hướng và giới hạn vùng chiếu.
- Kiểm soát `Spread`, `Power`, kích thước và vị trí `Area Light`.
- Tạo general volume bằng `Principled Volume`.
- Tạo một volume thứ hai chỉ tập trung fog ở phần đáy scene.
- Kết hợp gradient và noise để fog có biên tự nhiên.
- Dùng light màu để chiếu qua volume.
- Bổ sung front light mà không làm mất shadow.
- Giữ focal point rõ trong scene có nhiều atmospheric effect.
- Tổ chức từng light theo collection, tên và chức năng rõ ràng.
- Chuẩn bị scene để render kiểm tra trước final.

---

## 3. Kết quả cần đạt

Cuối bài, scene cần có:

- chiếc bình là focal point chính;
- camera góc thấp tạo cảm giác vật thể lớn và nguy hiểm;
- background không cạnh tranh với subject;
- silhouette rõ;
- phần trên của bình nhận key light;
- phần dưới vẫn giữ shadow;
- general volume rất nhẹ;
- fog tập trung gần sàn;
- fog có variation thay vì một đường biên thẳng;
- ánh sáng xanh lục tương tác với fog;
- foreground và depth đọc được rõ;
- mọi nguồn sáng có vai trò riêng;
- scene sẵn sàng cho render test.

---

## 4. Xác định ý tưởng lighting trước khi đặt đèn

Trước khi thao tác kỹ thuật, cần xác định câu chuyện hình ảnh.

Trong scene này, chiếc bình được xem như một vật thể:

- cổ xưa;
- bị nguyền rủa;
- chứa năng lượng tối;
- có cảm giác nguy hiểm;
- mang phong cách Halloween hoặc dark fantasy.

Từ đó có thể suy ra ngôn ngữ lighting:

```text
Vật thể nguy hiểm
      ↓
Camera thấp
      ↓
Shadow sâu
      ↓
Silhouette mạnh
      ↓
Màu lạnh + xanh độc
      ↓
Fog
      ↓
Contrast cinematic
```

Điều này quan trọng vì lighting cần phục vụ ý tưởng.

Không nên chọn màu, vị trí light hay fog chỉ vì chúng "trông đẹp" khi đứng riêng lẻ.

---

## 5. Thiết lập camera

Tạo camera:

```text
Shift + A
→ Camera
```

Chuyển vào camera view và sử dụng walk navigation:

```text
Shift + ~
```

Sau đó điều khiển bằng:

- `W`: tiến;
- `S`: lùi;
- `A`: sang trái;
- `D`: sang phải;
- `Q`: hạ camera;
- `E`: nâng camera.

Trong scene này, camera được đặt thấp hơn subject và hướng lên.

Có thể hình dung:

```text
        Vase
         ▲
        / \
       /   \
      /     \
   Camera
```

Góc thấp làm chiếc bình:

- trông cao hơn;
- chiếm ưu thế trong frame;
- tạo cảm giác uy quyền;
- hỗ trợ chủ đề nguy hiểm và bí ẩn.

Camera là một phần của lighting composition. Một lighting setup tốt ở góc camera này chưa chắc hoạt động ở góc khác.

---

## 6. Tạo cyclorama làm background

Tạo một plane và biến nó thành cyclorama.

Quy trình:

1. Thêm `Plane`.
2. Scale để tạo sàn.
3. Extrude hoặc kéo phần sau lên thành background.
4. Chọn vùng góc giữa sàn và tường.
5. Dùng:

```text
Ctrl + B
```

để bevel tạo chuyển tiếp cong.
6. Áp dụng:

```text
Shade Smooth
```

Cyclorama tạo background liên tục:

```text
Wall
 │
 │
 ╰──────── Floor
```

Không có đường góc cứng giúp scene trông giống studio hoặc stage cinematic.

---

## 7. Tắt World lighting

Trong bài này, World không được sử dụng làm nguồn sáng chính.

Giảm hoặc tắt World lighting để scene bắt đầu gần như tối hoàn toàn.

Mục đích:

```text
World Lighting ≈ 0
      ↓
Mỗi vùng sáng
      ↓
được tạo bởi Light Object
      ↓
dễ kiểm soát hierarchy
```

Workflow này phù hợp với scene cần art direction mạnh.

Nếu HDRI hoặc World quá sáng:

- shadow bị nâng;
- silhouette yếu;
- fog nhận quá nhiều ambient light;
- khó biết light nào đang tạo hiệu ứng.

---

## 8. Chuyển sang Cycles và chuẩn bị render

Sử dụng:

```text
Render Engine
→ Cycles
```

Nếu hệ thống hỗ trợ GPU rendering, có thể chọn GPU để tăng tốc quá trình preview và render test.

Trong giai đoạn lighting, nên:

- giữ resolution vừa phải;
- dùng samples thấp hơn final;
- tập trung vào composition trước chất lượng noise.

Không nên chờ một render final mỗi lần chỉ để kiểm tra vị trí light.

---

## 9. Tạo silhouette và rim light đầu tiên

Nguồn sáng đầu tiên được sử dụng để định hình silhouette của chiếc bình.

Thêm:

```text
Shift + A
→ Light
→ Area
```

Đặt light ở phía sau hoặc chếch phía sau subject.

Concept:

```text
       Rim Light
          ↓
       \     /
        \   /
         Vase
          ↓
        Camera
```

Tăng `Power` cho tới khi đường viền của bình bắt đầu đọc được.

Rim light có nhiệm vụ:

- tách subject khỏi background;
- làm rõ silhouette;
- tạo chiều sâu;
- thiết lập focal point.

Nó không cần làm sáng toàn bộ vật thể.

---

## 10. Kiểm soát ánh sáng chạm xuống sàn

Nếu rim light chiếu quá nhiều xuống cyclorama hoặc sàn, background có thể sáng lên và làm mất contrast.

Điều chỉnh:

```text
Spread
```

để giới hạn vùng phát sáng.

Mục tiêu:

```text
Rim Light
→ chiếu chủ yếu vào vase

không phải

Rim Light
→ làm sáng toàn bộ studio
```

Shadow trên sàn vẫn nên xuất hiện để chiếc bình có cảm giác đang đặt trên bề mặt thay vì lơ lửng.

Nếu subject có cảm giác floating:

- kiểm tra contact shadow;
- kiểm tra vùng sàn gần chân vật thể;
- điều chỉnh vị trí light.

---

## 11. Thêm key light kiểu Rembrandt

Sau khi silhouette đọc được, thêm key light.

Sử dụng một `Area Light` khác và đặt:

- phía trước hoặc chéo bên;
- cao hơn subject;
- hướng chủ yếu vào phần trên của bình.

Mục tiêu:

```text
Key
  ↘
   Upper Vase
      ↓
Lower Vase vẫn tối
```

Không cần làm sáng toàn bộ object.

Trong scene này, phần cổ và vai bình cần tạo shadow để giữ form.

Nếu ánh sáng lan xuống quá nhiều:

```text
Giảm Spread
```

Nếu key quá thấp, shadow từ phần cổ sẽ không có hình dạng mong muốn.

Do đó có thể đưa light lên cao hơn.

---

## 12. Giữ phần dưới tối để tạo hierarchy

Lighting tốt không yêu cầu toàn bộ subject đều nhìn thấy với cùng độ rõ.

Ở đây:

```text
Phần trên
→ focal zone

Phần dưới
→ shadow zone
```

Sự khác biệt này tạo vertical hierarchy.

Nếu fill hoặc key làm sáng toàn bộ chiếc bình:

```text
Highlight
+
Midtone
+
Shadow
→ gần bằng nhau
```

thì form sẽ phẳng.

Nguyên tắc:

> Shadow là một phần của thiết kế lighting, không phải vùng bắt buộc phải loại bỏ.

---

## 13. Tinh chỉnh hình dạng key light

Có thể chuyển `Area Light` sang dạng:

```text
Disk
```

và tăng kích thước nếu cần transition mềm hơn.

Ảnh hưởng:

```text
Area nhỏ
→ highlight gắt hơn

Area lớn
→ highlight rộng hơn
→ transition mềm hơn
```

Sau đó giảm `Power` nếu nguồn sáng lớn khiến subject quá sáng.

Cần đánh giá đồng thời:

- shape;
- size;
- power;
- spread.

Không nên dùng `Power` để xử lý mọi vấn đề.

---

## 14. Làm background tối hơn

Cyclorama có thể phản xạ hoặc nhận quá nhiều ánh sáng và làm toàn scene bị wash out.

Giảm độ sáng material của cyclorama.

Mục tiêu:

```text
Background tối
      ↓
Silhouette rõ
      ↓
Subject nổi
```

Background không nhất thiết phải hoàn toàn đen.

Nó chỉ cần tối hơn vùng focal point và không tạo reflection gây mất kiểm soát.

---

## 15. Tạo general atmospheric volume

Scene sử dụng hai lớp volume.

Lớp đầu tiên là volume nhẹ cho toàn vùng chính.

Tạo cube:

```text
Shift + A
→ Mesh
→ Cube
```

Scale cube để bao quanh:

- vase;
- vùng light ray;
- không gian chính của camera.

Tạo material mới:

```text
Principled Volume
      ↓
Material Output: Volume
```

Đặt `Density` rất thấp.

Không bắt đầu bằng fog dày.

---

## 16. Thiết lập màu cho volume tổng thể

Volume đầu tiên được đặt hơi thiên xanh.

Concept:

```text
General Atmosphere
→ cool blue

Special Fog Light
→ green
```

Màu lạnh hỗ trợ mood dark fantasy.

Tuy nhiên volume chỉ nên có tint nhẹ.

Nếu quá saturated:

- material bị nhuộm màu;
- shadow mất neutral reference;
- depth trở nên phẳng.

Volume tổng thể chỉ nên tạo atmosphere.

---

## 17. Đặt volume cube thành Wire trong viewport

Cube volume lớn sẽ cản trở việc thao tác.

Trong:

```text
Object Properties
→ Viewport Display
→ Display As
→ Wire
```

đặt cube ở dạng wireframe.

Điều này chỉ thay đổi cách hiển thị trong viewport.

Volume shader vẫn được render bình thường.

---

## 18. Tránh volume cắt ngang light source

Nếu volume cube kết thúc đúng tại vị trí nguồn sáng hoặc cắt qua vùng phát sáng, có thể xuất hiện những đường hoặc hình khối không mong muốn.

Ví dụ:

```text
Volume boundary
      +
Light
      ↓
Square / hard transition
```

Có thể điều chỉnh geometry volume để:

- không cắt ngang vùng quan trọng;
- không tạo boundary nhìn thấy được;
- volume phủ đủ vùng ray nhưng không dư quá nhiều.

Geometry volume là một công cụ composition, không nhất thiết phải là một cube hoàn hảo.

---

## 19. Giảm specular không mong muốn trên cyclorama

Cyclorama có thể xuất hiện một vùng highlight hoặc specular spot từ light.

Nếu nó cạnh tranh với subject, có thể:

- giảm specular material của cyclorama;
- thay đổi roughness;
- điều chỉnh light;
- đổi hướng background.

Chỉ giữ một lượng reflection nhỏ nếu nó giúp scene có chiều sâu.

Mục tiêu:

```text
Background detail
→ hỗ trợ

không phải

Background highlight
→ trở thành focal point
```

---

## 20. Tạo volume thứ hai cho fog sát mặt đất

Volume thứ hai chỉ tập trung ở phần dưới scene.

Tạo thêm một volume cube và material riêng.

Ý tưởng:

```text
Upper Scene
→ atmosphere nhẹ

Bottom
→ fog dày hơn
```

Điều này tạo depth tốt hơn một volume đồng nhất.

Fog sát mặt đất phù hợp với:

- horror;
- fantasy;
- cursed object;
- mystical environment.

---

## 21. Tạo gradient density

Nếu volume thứ hai có density đều, nó sẽ kết thúc theo một mặt phẳng rõ.

Cần tạo transition mượt.

Node flow:

```text
Texture Coordinate
      ↓
Mapping
      ↓
Gradient Texture
      ↓
ColorRamp
      ↓
Density
```

Gradient kiểm soát fog theo chiều cao.

Quy ước:

```text
Black
→ Density thấp / 0

White
→ Density cao
```

Nếu gradient ngược hướng:

- đảo `ColorRamp`; hoặc
- xoay mapping/texture coordinate.

Mục tiêu là:

```text
Fog dày ở đáy
      ↓
Giảm dần
      ↓
Biến mất mềm ở phía trên
```

---

## 22. Kiểm soát gradient bằng Mapping

Sử dụng `Mapping` để:

- xoay gradient;
- nâng hoặc hạ vùng fog;
- điều chỉnh vị trí transition.

Thay vì liên tục scale volume geometry, procedural mapping cho phép điều chỉnh density bên trong chính volume.

Điều này mang lại workflow linh hoạt hơn.

---

## 23. Thêm Noise Texture cho fog

Một gradient hoàn toàn thẳng sẽ tạo một dải fog quá nhân tạo.

Thêm:

```text
Noise Texture
```

Sau đó đưa noise qua:

```text
ColorRamp
```

để kiểm soát contrast.

Concept:

```text
Noise Texture
      ↓
ColorRamp
      ↓
Black / White patches
```

Mục tiêu không phải tạo những đám mây lớn, mà chỉ phá đường biên quá sạch của fog.

---

## 24. Chọn scale noise phù hợp

Noise scale quá lớn hoặc quá nhỏ đều có thể làm effect không tự nhiên.

```text
Scale quá nhỏ
→ nhiều chi tiết li ti
→ visual noise

Scale vừa phải
→ mảng fog lớn
→ cinematic

Scale quá lớn
→ variation gần như mất
```

Nên đánh giá từ camera final.

Một texture noise nhìn đẹp khi zoom gần chưa chắc đọc được trong frame.

---

## 25. Kết hợp gradient và noise

Fog cần đồng thời:

- bị giới hạn ở đáy;
- có edge không đều.

Do đó cần kết hợp:

```text
Gradient Mask
+
Noise Mask
=
Final Density Mask
```

Có thể sử dụng các phép toán blend hoặc math phù hợp để kết hợp chúng.

Concept:

```text
Gradient ──────┐
               ├── Mix / Math ──→ Density
Noise ─────────┘
```

Sau khi kết hợp, quan sát trực tiếp mask trước khi nối vào `Density`.

Điều này giúp dễ debug hơn.

---

## 26. Tăng cường density bằng Math

Nếu mask đúng hình dạng nhưng fog quá yếu, có thể đưa kết quả qua:

```text
Math
→ Multiply
```

Công thức:

```text
Final Density
=
Mask × Intensity
```

Ví dụ:

```text
Mask = 0.3
Multiplier = 2
Final = 0.6
```

Điều này thuận tiện hơn việc sửa nhiều node cùng lúc.

Tuy nhiên multiplier quá cao có thể làm fog mất gradient mềm.

---

## 27. Giữ density tổng thể thấp

Sau khi thêm procedural mask, fog có thể nhanh chóng trở nên quá dày.

Trong scene này, density cuối vẫn cần ở mức nhẹ.

Có thể thử quanh các mức thấp và quan sát, thay vì xem một giá trị cụ thể là bắt buộc.

Mục tiêu:

```text
Fog nhìn thấy
+
Vase vẫn đọc rõ
+
Background vẫn có chiều sâu
```

Nếu fog làm subject phẳng:

- giảm density;
- giảm ambient lighting;
- tăng separation;
- kiểm tra light direction.

---

## 28. Thêm light để chiếu vào fog

Volume chỉ trở nên rõ khi có ánh sáng tương tác với nó.

Thêm một light riêng cho fog.

Có thể sử dụng `Area Light` hoặc nguồn sáng có hướng phù hợp.

Đặt light thấp hoặc chếch sao cho beam đi qua volume sát mặt đất.

Tăng `Power` đến khi vùng fog bắt đầu sáng lên.

Sau đó giảm `Spread` để light chỉ tác động vào khu vực mong muốn.

---

## 29. Tạo ánh sáng xanh lục

Nguồn sáng của fog được đặt màu xanh lục.

Ý tưởng:

```text
Cool Atmosphere
      +
Green Fog Light
      ↓
Cursed / toxic energy
```

Màu này không chỉ nhuộm fog mà còn có thể phản lại một phần lên vase.

Kết quả giúp liên kết:

- subject;
- fog;
- environment.

Không nên tăng saturation quá mức.

Nếu toàn bộ vase bị xanh:

- giảm `Power`;
- giảm saturation;
- hạn chế `Spread`;
- đổi vị trí light.

---

## 30. Dùng ánh sáng màu để tạo bounce cảm giác

Trong render thực tế, một vùng fog được chiếu mạnh có thể tạo cảm giác ánh sáng xanh phản xạ lên phần dưới của subject.

Ngay cả khi setup không mô phỏng hoàn toàn mọi hiện tượng vật lý, hiệu ứng thị giác này có thể được sử dụng để:

- nối subject với environment;
- tạo color separation;
- nhấn phần thấp;
- gợi cảm giác năng lượng phát ra từ fog.

Ánh sáng màu cần có logic.

Không nên thêm green light chỉ vì palette trông đẹp nếu không có nguồn hoặc context hợp lý.

---

## 31. Thêm general front light

Sau rim, key, volume và fog light, scene có thể vẫn quá tối ở vùng phía trước.

Thêm một nguồn sáng front/fill nhẹ, gần tư duy `Butterfly Lighting`.

Mục tiêu:

- khôi phục một phần thông tin;
- cho thấy sàn;
- đọc được form tổng thể;
- không phá shadow đã xây dựng.

Có thể tăng `Spread` để front light rộng hơn.

Hierarchy cần giữ:

```text
Key / Rim
→ quyết định form

Front Light
→ hỗ trợ visibility
```

Front light không nên trở thành nguồn sáng chính mới.

---

## 32. Dùng fill mà không làm scene phẳng

Nếu tăng front light quá mạnh:

```text
Shadow ↑ brightness
      ↓
Contrast giảm
      ↓
Vase phẳng
```

Do đó hãy tăng từ rất thấp.

Dừng khi:

- chi tiết vừa đọc được;
- phần dưới vẫn tối hơn phần trên;
- rim vẫn thấy;
- green fog light vẫn có vai trò.

Fill tốt thường khó nhận biết như một "nguồn sáng riêng".

Nó chỉ làm scene dễ đọc hơn.

---

## 33. Dùng volume để tăng depth gần camera

Fog có thể được bố trí trải về phía camera để tạo nhiều lớp depth:

```text
Camera
   ↓
Foreground Fog
   ↓
Vase
   ↓
Background
```

Khi foreground có atmosphere, frame không còn giống một object đặt trên background phẳng.

Nó tạo cảm giác camera đang thực sự nằm trong môi trường.

Tuy nhiên không nên để foreground fog che quá nhiều subject.

---

## 34. Tinh chỉnh procedural fog

Sau khi lighting hoạt động, tiếp tục điều chỉnh:

- gradient position;
- noise scale;
- ColorRamp;
- density multiplier.

Một ưu điểm lớn của procedural fog là không cần dựng lại geometry khi muốn thay đổi.

```text
Procedural Fog
      ↓
Parameter adjustment
      ↓
Nhiều variation
```

Có thể nhanh chóng tạo:

- fog thấp;
- fog cao;
- fog mỏng;
- fog dày;
- pattern lớn;
- pattern nhỏ.

---

## 35. Tổ chức hierarchy ánh sáng

Một scene hoàn chỉnh nên có thứ tự ưu tiên.

Trong setup này:

| Thành phần | Vai trò |
|---|---|
| Rim/Silhouette | Tách hình dạng chính |
| Key | Chiếu phần trên, tạo form |
| Green Fog Light | Tạo mood và environmental interaction |
| Front Fill | Khôi phục thông tin |
| General Volume | Atmosphere tổng thể |
| Ground Fog | Depth và mystery |

Không phải light nào cũng có cùng visual weight.

Có thể hình dung:

```text
Focal hierarchy

Vase upper form
      ↓
Silhouette
      ↓
Green atmosphere
      ↓
Ground fog
      ↓
Background
```

Nếu fog trở thành vùng sáng nhất, hierarchy đã bị phá.

---

## 36. Đặt tên và tổ chức light

Mọi nguồn sáng nên có tên phản ánh chức năng.

Ví dụ:

```text
LIGHT_Key_Top
LIGHT_Rim_Back
LIGHT_Fill_Front
LIGHT_Fog_Green
```

Volumes:

```text
VOL_Atmosphere
VOL_GroundFog
```

Collection:

```text
LIGHTING
├── LIGHT_Key_Top
├── LIGHT_Rim_Back
├── LIGHT_Fill_Front
├── LIGHT_Fog_Green
├── VOL_Atmosphere
└── VOL_GroundFog
```

Tên có mục đích giúp:

- bật/tắt nhanh;
- debug;
- A/B test;
- bàn giao scene;
- animation hoặc compositing sau này.

---

## 37. Render test theo từng giai đoạn

Không cần chờ scene hoàn chỉnh mới render.

Nên tạo test theo thứ tự:

```text
Test 1
→ Rim only

Test 2
→ Rim + Key

Test 3
→ Rim + Key + General Volume

Test 4
→ thêm Ground Fog

Test 5
→ thêm Green Fog Light

Test 6
→ thêm Front Fill
```

Mỗi test giúp xác định contribution của từng hệ thống.

Nếu scene xấu đi sau Test 5, có thể biết vấn đề đến từ green fog light thay vì phải nghi ngờ toàn bộ setup.

---

## 38. Quy trình thực hành hoàn chỉnh

Thực hiện theo trình tự sau:

1. Xác định focal point là chiếc bình.
2. Đặt camera góc thấp.
3. Tạo cyclorama.
4. Tắt World lighting.
5. Chuyển sang `Cycles`.
6. Tạo rim/silhouette light.
7. Tạo key light chiếu phần trên.
8. Làm background tối hơn.
9. Tạo general volume.
10. Đặt general volume ở `Wire` trong viewport.
11. Tạo ground fog volume.
12. Xây dựng gradient density.
13. Thêm noise.
14. Kết hợp gradient và noise.
15. Tinh chỉnh density.
16. Tạo green fog light.
17. Thêm front fill.
18. Render test.
19. Tắt/bật từng thành phần.
20. Chỉ giữ những nguồn thực sự cải thiện frame.

---

## 39. Checkpoint 1 — Camera và focal point

Kiểm tra:

- Vase là vật thể đầu tiên thu hút mắt.
- Góc thấp hỗ trợ cảm giác lớn và nguy hiểm.
- Subject không bị cắt khung ngoài ý muốn.
- Background có đủ khoảng trống.
- Composition vẫn đọc tốt ở kích thước nhỏ.

Nếu silhouette không rõ ngay ở thumbnail, lighting hierarchy cần được xem lại.

---

## 40. Checkpoint 2 — Key và rim

Kiểm tra:

- Rim tách vase khỏi background.
- Key chỉ nhấn vùng cần thiết.
- Phần dưới không bị fill quá mức.
- Key và rim không cạnh tranh nhau.
- Background không sáng hơn focal point.

Tắt fill và volume khi kiểm tra checkpoint này.

---

## 41. Checkpoint 3 — Volume

Kiểm tra general volume:

- không che silhouette;
- không làm background wash out;
- không tạo boundary hình cube.

Kiểm tra ground fog:

- concentrated ở phần thấp;
- transition mềm;
- noise không quá rõ;
- depth tăng thay vì giảm.

---

## 42. Checkpoint 4 — Color hierarchy

Kiểm tra:

```text
Cool general atmosphere
+
Green accent
```

Màu xanh lục cần:

- có vùng rõ ràng;
- liên hệ với fog;
- không phủ toàn bộ vase;
- không biến toàn scene thành một màu duy nhất.

Nếu green light trở thành focal point thay vì vase, giảm cường độ hoặc saturation.

---

## 43. Checkpoint 5 — Final readability

Trước khi tăng samples, kiểm tra:

- focal point;
- silhouette;
- highlight;
- shadow;
- depth;
- fog;
- màu;
- background.

Sau đó tắt từng light.

Mỗi nguồn cần trả lời được câu hỏi:

> Nếu tắt light này, hình ảnh mất điều gì?

Nếu không mất gì đáng kể, light đó có thể không cần thiết.

---

## 44. Lỗi thường gặp

**Hiện tượng:** Vase trông sáng nhưng không có chiều sâu.  
**Nguyên nhân:** Front fill quá mạnh hoặc nhiều light cùng chiếu từ camera direction.  
**Cách xử lý:** Giảm fill và giữ chênh lệch rõ giữa key side và shadow side.

**Hiện tượng:** Subject chìm vào background.  
**Nguyên nhân:** Thiếu rim hoặc background có value gần subject.  
**Cách xử lý:** Tăng separation bằng rim hoặc làm background tối hơn.

**Hiện tượng:** Fog làm mất toàn bộ contrast.  
**Nguyên nhân:** Density quá cao.  
**Cách xử lý:** Giảm density trước khi tăng thêm light.

**Hiện tượng:** Có thể nhìn thấy hình vuông của volume.  
**Nguyên nhân:** Boundary volume nằm trong vùng được chiếu hoặc cắt qua light.  
**Cách xử lý:** Điều chỉnh kích thước hoặc geometry của volume.

**Hiện tượng:** Ground fog kết thúc bằng một đường thẳng rõ.  
**Nguyên nhân:** Density không có gradient hoặc noise.  
**Cách xử lý:** Tạo mask gradient và variation procedural.

**Hiện tượng:** Noise của fog quá lộn xộn.  
**Nguyên nhân:** Noise scale nhỏ hoặc contrast quá cao.  
**Cách xử lý:** Tăng kích thước pattern và giảm contrast.

**Hiện tượng:** Green light làm toàn bộ object xanh.  
**Nguyên nhân:** `Spread`, `Power` hoặc saturation quá cao.  
**Cách xử lý:** Giảm contribution và giới hạn vùng chiếu.

**Hiện tượng:** Background có một specular spot thu hút mắt.  
**Nguyên nhân:** Cyclorama đang phản xạ light quá mạnh.  
**Cách xử lý:** Giảm specular hoặc điều chỉnh material/light.

**Hiện tượng:** Render bắt đầu rất noise và chậm.  
**Nguyên nhân:** Volume quá dày hoặc quá lớn.  
**Cách xử lý:** Giảm density, giới hạn volume và chỉ tăng samples sau khi setup đã ổn.

---

## 45. Best practices

- Xác định mood trước khi chọn light.
- Khóa camera sớm.
- Bắt đầu từ silhouette trước khi fill.
- Mỗi nguồn sáng phải có một nhiệm vụ.
- Dùng shadow để giữ form.
- Không làm background sáng ngang focal point.
- Dùng volume density thấp nhất có thể.
- Ưu tiên local volume khi cần kiểm soát.
- Dùng gradient để tránh fog có boundary cứng.
- Thêm noise sau khi gradient đã hoạt động.
- Không để procedural pattern trở thành focal point.
- Dùng màu có logic với câu chuyện của scene.
- Tắt/bật từng light trong quá trình debug.
- Đặt tên light ngay khi tạo.
- Gom toàn bộ lighting vào collection riêng.
- Render samples thấp trong giai đoạn look-dev.
- Chỉ tăng chất lượng khi composition đã khóa.

---

## 46. Bài thực hành

Tạo một scene environment/character hoặc product shot có chủ đề rõ ràng.

Có thể chọn:

- mystical artifact;
- horror character;
- fantasy statue;
- ancient object;
- aquarium với light rays;
- sci-fi prop.

Scene bắt buộc có:

- một focal point;
- một key light;
- một rim hoặc silhouette light;
- một fill nhẹ;
- ít nhất một atmospheric element nếu phù hợp;
- background có hierarchy rõ.

Nếu dùng volume, tạo:

```text
General Volume
+
Local Fog
```

và kiểm soát chúng độc lập.

Render các phiên bản:

```text
A — Key only
B — Key + Rim
C — Key + Rim + Fill
D — Full Lighting
```

So sánh từng bước để xác định contribution của mỗi light.

---

## 47. Checklist hoàn thành

- [ ] Focal point được xác định trước khi đặt light.
- [ ] Camera hỗ trợ mood của scene.
- [ ] Background không cạnh tranh với subject.
- [ ] Key có hướng rõ ràng.
- [ ] Shadow vẫn giữ form.
- [ ] Rim hỗ trợ chiều sâu và separation.
- [ ] Fill không làm scene phẳng.
- [ ] General volume đủ nhẹ để vẫn thấy subject.
- [ ] Ground fog có transition mềm.
- [ ] Noise fog không gây visual clutter.
- [ ] Green accent light có vai trò rõ.
- [ ] Fog tăng depth thay vì làm giảm depth.
- [ ] Không nhìn thấy boundary của volume.
- [ ] Cyclorama không có highlight thừa gây phân tâm.
- [ ] Focal point vẫn rõ khi xem ở thumbnail.
- [ ] Mỗi light đều có tên.
- [ ] Mỗi light đều nằm trong collection phù hợp.
- [ ] Mỗi light đều có mục đích cụ thể.
- [ ] Có thể giải thích tác dụng của từng nguồn khi bật/tắt.
- [ ] Render test được thực hiện với samples thấp trước final.

---

## 48. Kết quả cuối

Scene lighting hoàn chỉnh được xây dựng theo hierarchy:

```text
Camera + Composition
        ↓
Rim / Silhouette
        ↓
Key
        ↓
Atmosphere
        ↓
Local Fog
        ↓
Colored Accent
        ↓
Fill
        ↓
Final Balance
```

Trong đó:

```text
Key
→ mô tả form

Rim
→ tách silhouette

Fill
→ giữ thông tin

Volume
→ tạo atmosphere

Fog
→ tạo depth

Color Accent
→ tạo mood
```

Lighting tốt không phải là số lượng đèn lớn.

Một scene hiệu quả có thể được xây dựng từ một số ít nguồn sáng nếu mỗi nguồn có nhiệm vụ rõ ràng.

Nguyên tắc quan trọng nhất là:

```text
Scene Lighting tốt
≠
mọi thứ đều nhìn thấy rõ

Scene Lighting tốt
=
focal point rõ
+
shadow có chủ đích
+
separation tốt
+
depth
+
mood
+
hierarchy
```

Khi camera, material, background, light và volume cùng phục vụ một ý tưởng duy nhất, ngay cả một object đơn giản cũng có thể trở thành một shot cinematic có cảm xúc và câu chuyện rõ ràng.