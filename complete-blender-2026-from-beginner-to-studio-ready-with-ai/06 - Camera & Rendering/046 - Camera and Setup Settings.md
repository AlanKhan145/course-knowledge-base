# 046 — Camera and Setup Settings

**Phần:** 06 — Camera & Rendering
**Thời lượng:** 9:51
**Chủ đề:** Camera View, focal length, sensor và Depth of Field
**Loại bài:** lesson

---

## 1. Tóm tắt

Camera trong Blender không chỉ xác định góc nhìn cuối cùng của cảnh mà còn quyết định cách phối cảnh, tỷ lệ không gian và vùng nét được thể hiện trong render.

Trong bài này, người học sẽ thiết lập một camera từ đầu, điều khiển camera trực tiếp trong `Camera View`, lựa chọn kiểu projection, điều chỉnh focal length, sensor, clipping, resolution, composition guides và sử dụng `Depth of Field` để tạo điểm nhấn thị giác.

Bên cạnh các thiết lập ảnh hưởng trực tiếp đến render, Blender còn cung cấp nhiều công cụ hỗ trợ bố cục như background image, rule of thirds, passepartout và camera frame guides.

---

## 2. Mục tiêu học tập

Sau khi hoàn thành bài này, người học có thể:

* Tạo và kích hoạt camera trong Blender.
* Điều khiển camera trực tiếp từ `Camera View`.
* Phân biệt `Perspective` và `Orthographic`.
* Giải thích ảnh hưởng của focal length đến phối cảnh.
* Hiểu vai trò của sensor trong mô phỏng camera vật lý.
* Thiết lập `Clip Start` và `Clip End` phù hợp với kích thước scene.
* Cấu hình độ phân giải và tỷ lệ khung hình.
* Sử dụng composition guides để hỗ trợ bố cục.
* Thêm ảnh hoặc video tham chiếu vào camera viewport.
* Quản lý nhiều camera trong cùng một scene.
* Thiết lập `Depth of Field` bằng focus distance hoặc focus object.
* Điều khiển hình dạng bokeh thông qua aperture settings.

---

## 3. Camera quyết định điều gì trong một cảnh 3D?

Một scene có thể được xây dựng hoàn chỉnh về model, material và ánh sáng nhưng vẫn cho cảm giác yếu nếu camera không được đặt hợp lý.

Camera quyết định ít nhất ba yếu tố quan trọng:

```text
Camera
   ↓
Góc nhìn
   ↓
Phối cảnh và tỷ lệ không gian
   ↓
Bố cục hình ảnh
   ↓
Điểm người xem tập trung
```

Hai camera đứng ở cùng một vị trí nhưng sử dụng focal length khác nhau có thể tạo ra cảm giác không gian rất khác nhau.

Tương tự, việc bật `Depth of Field` có thể chuyển sự chú ý từ toàn bộ scene sang một subject duy nhất.

Vì vậy, camera nên được xem như một thành phần sáng tạo của scene, không chỉ là một thiết bị dùng để xuất hình.

---

## 4. Tạo và điều khiển camera

Tạo camera bằng:

```text
Shift + A
→ Camera
```

Camera mới được tạo tại vị trí của `3D Cursor`.

Có thể đổi tên camera trong `Outliner`, chẳng hạn:

```text
CAM_Main
CAM_CloseUp
CAM_Wide
```

Đặt tên rõ ràng đặc biệt hữu ích khi scene có nhiều camera.

Để chuyển sang góc nhìn của camera đang hoạt động:

```text
Numpad 0
```

Nhấn lại `Numpad 0` để rời khỏi `Camera View`.

### Điều hướng trực tiếp bên trong camera

Trong `Camera View`, có thể sử dụng chế độ điều hướng kiểu Fly/Walk để di chuyển camera giống góc nhìn trong game.

Một cách phổ biến là:

```text
Shift + `
```

Sau đó sử dụng các phím điều hướng như:

```text
W
A
S
D
```

Chuột được dùng để thay đổi hướng nhìn.

Con lăn chuột có thể điều chỉnh tốc độ di chuyển.

Phương pháp này đặc biệt thuận tiện khi:

* scene có kích thước lớn;
* cần tìm nhanh một góc quay;
* muốn mô phỏng camera handheld;
* muốn khám phá scene trước khi khóa bố cục.

Sau khi tìm được góc phù hợp, nên tinh chỉnh lại `Location` và `Rotation` của camera thay vì phụ thuộc hoàn toàn vào thao tác điều hướng tự do.

---

## 5. Perspective và Orthographic

Camera Blender hỗ trợ nhiều projection type. Hai loại quan trọng nhất trong phần lớn workflow là `Perspective` và `Orthographic`.

| Projection     | Đặc điểm                         | Ứng dụng                                                   |
| -------------- | -------------------------------- | ---------------------------------------------------------- |
| `Perspective`  | Vật xa nhỏ hơn vật gần           | Phim, animation, architectural visualization, product shot |
| `Orthographic` | Không có perspective convergence | Strategy game, technical view, isometric-style scene       |

### Perspective

`Perspective` mô phỏng cách camera và mắt người nhìn không gian.

Các đường song song trong không gian có thể hội tụ theo khoảng cách và vật thể gần camera thường trông lớn hơn.

Đây là projection nên dùng mặc định cho hầu hết shot mang tính điện ảnh hoặc thực tế.

### Orthographic

Trong `Orthographic`, kích thước biểu kiến của vật thể gần như không thay đổi theo khoảng cách tới camera.

Thay vì focal length, thông số quan trọng là:

```text
Orthographic Scale
```

Projection này hữu ích cho:

* bản đồ;
* top-down game;
* strategy game;
* side view;
* diagram kỹ thuật;
* một số phong cách isometric.

---

## 6. Focal length, sensor và phối cảnh

Trong chế độ `Perspective`, thông số quan trọng nhất của camera là focal length, thường được biểu diễn bằng millimeter.

Ví dụ:

```text
18 mm
24 mm
35 mm
50 mm
85 mm
100 mm
```

Focal length ảnh hưởng mạnh tới `Field of View`.

Có thể hình dung:

```text
Focal length ngắn
        ↓
Field of View rộng
        ↓
Perspective mạnh hơn

Focal length dài
        ↓
Field of View hẹp
        ↓
Không gian có cảm giác nén hơn
```

Các giá trị chỉ nên được xem là điểm tham khảo, không phải quy tắc tuyệt đối.

| Focal length | Cảm giác thường gặp                         |
| ------------ | ------------------------------------------- |
| 18–24 mm     | Rất rộng, perspective mạnh                  |
| 28–35 mm     | Wide shot tự nhiên hơn                      |
| Khoảng 50 mm | Góc nhìn tương đối trung tính               |
| 70–100 mm    | Portrait, close-up, cảm giác nén không gian |
| Trên 100 mm  | Telephoto rõ rệt                            |

Một lỗi phổ biến là dùng lens quá rộng rồi đặt camera sát nhân vật. Khi đó khuôn mặt hoặc vật thể có thể bị biến dạng perspective ngoài chủ ý.

Nếu muốn close-up ít méo hơn, thường nên:

1. tăng focal length;
2. đưa camera ra xa;
3. điều chỉnh lại framing.

### Sensor

Blender cũng mô phỏng kích thước sensor của camera.

Sensor và focal length cùng tham gia xác định `Field of View`.

Do đó không nên hiểu sensor chỉ đơn giản là một thông số "phóng to ảnh". Khi focal length giữ nguyên, thay đổi sensor có thể làm thay đổi góc nhìn.

Trong workflow thông thường, nếu không cần khớp với camera vật lý cụ thể, có thể giữ sensor ở giá trị mặc định và điều chỉnh framing chủ yếu thông qua:

* focal length;
* vị trí camera;
* rotation.

Nếu cần match footage hoặc mô phỏng một camera thực tế, sensor trở thành thông số quan trọng hơn.

---

## 7. Shift và clipping

Camera còn có một số thông số hỗ trợ framing và giới hạn vùng nhìn.

`Shift X` và `Shift Y` dịch khung hình theo chiều ngang hoặc chiều dọc mà không cần xoay camera.

Chúng hữu ích trong một số workflow như:

* architectural visualization;
* perspective correction;
* camera matching;
* điều chỉnh framing mà không muốn thay đổi hướng camera.

Tuy nhiên, đối với scene đơn giản, thường nên ưu tiên đặt camera đúng vị trí trước khi dùng `Shift`.

### Clip Start và Clip End

Camera chỉ hiển thị geometry nằm trong khoảng:

```text
Clip Start
        ↓
Visible Geometry
        ↓
Clip End
```

Geometry gần camera hơn `Clip Start` sẽ bị cắt.

Geometry xa hơn `Clip End` cũng sẽ không được hiển thị.

Ví dụ, nếu một vật thể đứng quá gần camera và bị biến mất một phần, hãy kiểm tra `Clip Start`.

Không nên đặt clipping range quá cực đoan khi không cần thiết. Khoảng clipping phù hợp với kích thước scene giúp Blender duy trì độ chính xác depth tốt hơn.

---

## 8. Resolution và khung hình cuối

Camera xác định góc nhìn, nhưng kích thước hình ảnh cuối được thiết lập trong `Output Properties`.

Một chuẩn phổ biến cho video Full HD là:

```text
1920 × 1080
```

Tỷ lệ:

```text
16:9
```

Có thể sử dụng các kích thước khác tùy nền tảng:

```text
1920 × 1080 → Landscape 16:9

1080 × 1920 → Vertical 9:16

1080 × 1080 → Square 1:1
```

Resolution ảnh hưởng trực tiếp tới framing.

Ví dụ, một composition đẹp ở `16:9` chưa chắc còn phù hợp khi chuyển sang `9:16`.

Vì vậy nên xác định format đầu ra trước khi dành nhiều thời gian tinh chỉnh camera.

---

## 9. Công cụ hỗ trợ bố cục trong Camera View

Blender cung cấp nhiều overlay hỗ trợ framing mà không xuất hiện trong render cuối.

Một trong những công cụ hữu ích nhất là composition guides.

Có thể bật các guide như:

* center;
* thirds;
* diagonal;
* golden ratio;
* golden triangle;
* harmony triangle.

Không cần sử dụng tất cả cùng lúc.

Đối với phần lớn shot, `Rule of Thirds` là điểm khởi đầu đơn giản và hiệu quả.

```text
┌─────────┬─────────┬─────────┐
│         │         │         │
│         │         │         │
├─────────┼─────────┼─────────┤
│         │ Subject │         │
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│         │         │         │
└─────────┴─────────┴─────────┘
```

Các đường guide chỉ hỗ trợ người dựng bố cục. Chúng không xuất hiện trong render.

### Passepartout

`Passepartout` làm tối vùng nằm bên ngoài camera frame.

Khi tăng opacity của vùng này, người dựng có thể tập trung gần như hoàn toàn vào phần hình ảnh thực sự được render.

Đây là thiết lập rất hữu ích khi:

* tinh chỉnh composition;
* kiểm tra silhouette;
* làm việc với close-up;
* tránh bị phân tâm bởi geometry nằm ngoài frame.

---

## 10. Background Image và Video Reference

Camera có thể hiển thị một hình ảnh hoặc video tham chiếu trực tiếp trong viewport.

Tính năng này hữu ích khi:

* match một shot có sẵn;
* dựng model theo ảnh;
* tái tạo composition;
* căn sản phẩm theo reference;
* match camera với video footage.

Có thể chọn:

```text
Image
```

hoặc:

```text
Movie Clip
```

Reference có thể được đặt ở phía trước hoặc phía sau geometry tùy mục đích.

Ngoài ra có thể điều chỉnh:

* opacity;
* scale;
* position;
* fitting;
* visibility.

Ví dụ, giảm opacity sẽ cho phép đồng thời quan sát reference và geometry.

Điểm quan trọng là camera background dùng chủ yếu để hỗ trợ viewport. Nó không tự động trở thành một phần của render cuối.

Nếu cần ảnh background xuất hiện trong render, phải đưa nó vào pipeline render thông qua phương pháp phù hợp như:

* World;
* geometry;
* compositor;
* texture;
* footage compositing.

---

## 11. Quản lý nhiều camera

Một scene Blender có thể chứa nhiều camera.

Ví dụ:

```text
CAM_Wide
CAM_CloseUp
CAM_Top
CAM_Product
```

Tuy nhiên tại một thời điểm scene sẽ có một camera active được sử dụng cho render.

Để biến camera đang được chọn thành active camera:

```text
Ctrl + Numpad 0
```

Sau đó:

```text
Numpad 0
```

sẽ chuyển vào camera vừa được kích hoạt.

Nhiều camera hữu ích cho:

* animation;
* storyboard;
* shot comparison;
* cinematic sequence;
* product visualization;
* kiểm tra nhiều phương án bố cục.

Đối với scene đơn giản, một camera được tổ chức tốt thường đã đủ.

---

## 12. Depth of Field

`Depth of Field`, viết tắt là `DOF`, mô phỏng hiện tượng chỉ một vùng khoảng cách nhất định được lấy nét rõ, trong khi những vùng khác bị blur.

Một shot có thể được hình dung như:

```text
Foreground
   ↓
Blur
   ↓
Focus Plane
   ↓
Subject sắc nét
   ↓
Background Blur
```

DOF giúp:

* dẫn mắt người xem;
* tách subject khỏi background;
* tăng cảm giác chiều sâu;
* tạo phong cách cinematic;
* mô phỏng camera vật lý.

Không nên dùng blur chỉ vì trông "đẹp". DOF nên hỗ trợ mục tiêu thị giác của shot.

### Focus Distance

Cách cơ bản nhất là đặt khoảng cách lấy nét bằng `Focus Distance`.

Nếu subject nằm tại khoảng cách đó, nó sẽ sắc nét hơn các vùng nằm trước hoặc sau focus plane.

Cách này phù hợp với shot tĩnh nhưng có thể khó quản lý khi subject chuyển động.

### Focus Object

Workflow linh hoạt hơn là chỉ định một object làm focus target.

Ví dụ:

```text
Camera
   ↓
Focus Object
   ↓
Empty
   ↓
Vị trí cần lấy nét
```

Có thể tạo một `Empty`:

```text
Shift + A
→ Empty
```

Sau đó đặt object này tại vùng muốn lấy nét và gán nó vào `Focus Object` của camera.

Ưu điểm của phương pháp này là focus target có thể được animate hoặc parent vào subject.

Ví dụ:

```text
CAM_Main
    ↓
DOF Focus Object
    ↓
EMPTY_Focus
    ↓
Theo dõi mắt nhân vật
```

Đây là workflow rất hữu ích với character animation hoặc cinematic shot.

---

## 13. F-Stop và độ mạnh của DOF

Một trong những thông số quan trọng nhất của DOF là `F-Stop`.

Về nguyên tắc:

```text
F-Stop thấp
      ↓
Aperture lớn
      ↓
Depth of Field mỏng
      ↓
Blur mạnh hơn
```

Ngược lại:

```text
F-Stop cao
      ↓
Depth of Field sâu hơn
      ↓
Nhiều vùng trong ảnh sắc nét hơn
```

Ví dụ, một shot portrait có thể sử dụng giá trị tương đối thấp để làm background blur mạnh.

Một shot phong cảnh cần phần lớn scene rõ nét có thể sử dụng DOF nhẹ hơn hoặc không bật DOF.

Không có một giá trị `F-Stop` duy nhất phù hợp cho mọi scene.

Độ blur còn phụ thuộc vào:

* focal length;
* khoảng cách camera tới subject;
* khoảng cách subject tới background;
* sensor;
* aperture;
* kích thước scene.

Vì vậy nên điều chỉnh DOF dựa trên hình ảnh thực tế thay vì cố gắng áp dụng một con số cố định.

---

## 14. Bokeh và aperture shape

Các vùng highlight bị out-of-focus có thể tạo thành những đốm sáng gọi là bokeh.

Hình dạng bokeh chịu ảnh hưởng bởi aperture settings.

Blender cho phép điều chỉnh các thông số liên quan như:

* blade count;
* rotation;
* ratio.

Thay đổi số blade có thể tạo aperture shape dạng đa giác.

Ví dụ:

```text
3 blades → hình tam giác

5 blades → hình ngũ giác

Nhiều blades → gần tròn hơn
```

`Rotation` xoay hình dạng aperture.

`Ratio` có thể làm bokeh:

* tròn;
* kéo dẹt;
* kéo dài theo một trục.

Hiệu ứng dạng oval hoặc elongated bokeh có thể được sử dụng để mô phỏng một số phong cách lens điện ảnh.

Tuy nhiên, bokeh nên được sử dụng có chủ ý. Một hình dạng quá cực đoan có thể khiến hiệu ứng lens gây chú ý hơn subject.

---

## 15. Preview DOF trong viewport

Không nhất thiết phải render liên tục để kiểm tra DOF.

Blender có thể preview DOF trực tiếp trong viewport khi tùy chọn tương ứng được bật.

Viewport preview có thể không chính xác hoàn toàn như render cuối, nhưng đủ để đánh giá:

* vùng nào đang nét;
* background blur mạnh hay yếu;
* focus object có đúng vị trí không;
* F-Stop có quá thấp không.

Workflow hiệu quả có thể là:

```text
Đặt camera
   ↓
Chọn focal length
   ↓
Khóa composition
   ↓
Đặt focus target
   ↓
Bật DOF preview
   ↓
Tinh chỉnh F-Stop
   ↓
Render test
```

Không nên tinh chỉnh DOF quá sớm khi camera và composition vẫn còn thay đổi lớn.

---

## 16. Lỗi thường gặp

**Hiện tượng:** Khuôn mặt hoặc sản phẩm bị méo quá mạnh.
**Nguyên nhân:** Lens quá rộng và camera quá gần subject.
**Cách xử lý:** Tăng focal length rồi đưa camera ra xa để giữ framing.

**Hiện tượng:** Một phần geometry biến mất khi tới gần camera.
**Nguyên nhân:** `Clip Start` quá lớn.
**Cách xử lý:** Giảm `Clip Start` xuống mức phù hợp với scene.

**Hiện tượng:** Object ở xa biến mất.
**Nguyên nhân:** Object nằm ngoài `Clip End`.
**Cách xử lý:** Tăng `Clip End` vừa đủ cho kích thước scene.

**Hiện tượng:** Background reference xuất hiện trong viewport nhưng không có trong render.
**Nguyên nhân:** Camera background chỉ là công cụ tham chiếu.
**Cách xử lý:** Nếu cần background trong output, đưa ảnh vào World, geometry hoặc compositor.

**Hiện tượng:** Toàn bộ ảnh bị blur.
**Nguyên nhân:** Focus distance hoặc focus object không trùng với subject chính.
**Cách xử lý:** Gán đúng `Focus Object` hoặc điều chỉnh `Focus Distance`.

**Hiện tượng:** DOF quá mạnh và che mất thông tin quan trọng.
**Nguyên nhân:** `F-Stop` quá thấp hoặc focus target không hợp lý.
**Cách xử lý:** Tăng `F-Stop` và kiểm tra lại vị trí lấy nét.

**Hiện tượng:** Bố cục thay đổi sau khi đổi từ landscape sang vertical.
**Nguyên nhân:** Aspect ratio đã thay đổi nhưng camera chưa được reframe.
**Cách xử lý:** Xác định resolution đầu ra trước khi khóa composition.

---

## 17. Best practices

* Đặt tên camera rõ ràng ngay khi scene bắt đầu phức tạp.
* Xác định aspect ratio trước khi hoàn thiện composition.
* Ưu tiên thay đổi focal length và vị trí camera thay vì lạm dụng `Shift`.
* Không sử dụng lens cực rộng cho close-up trừ khi chủ động muốn distortion.
* Giữ sensor ở thiết lập hợp lý nếu không cần match camera vật lý cụ thể.
* Đặt clipping range phù hợp với quy mô scene.
* Dùng `Passepartout` khi tinh chỉnh framing.
* Dùng `Rule of Thirds` như guide, không phải luật bắt buộc.
* Với subject chuyển động, ưu tiên `Focus Object` thay vì nhập focus distance thủ công.
* Tinh chỉnh DOF sau khi composition đã tương đối ổn định.
* Luôn kiểm tra DOF bằng render test trước render cuối.
* Không để hiệu ứng bokeh mạnh đến mức cạnh tranh với subject chính.

---

## 18. Bài thực hành

Tạo một shot đơn giản gồm một subject chính và background có chiều sâu.

Thực hiện các yêu cầu sau:

1. Tạo một camera và đặt tên:

```text
CAM_Main
```

2. Chuyển sang `Camera View`.

3. Thiết lập resolution:

```text
1920 × 1080
```

4. Thử lần lượt ít nhất ba focal length, ví dụ:

```text
24 mm
50 mm
85 mm
```

5. Với mỗi focal length, thay đổi vị trí camera để subject có kích thước gần tương đương trong frame.

6. Quan sát sự khác biệt về:

* perspective;
* background compression;
* hình dạng subject;
* cảm giác không gian.

7. Bật `Rule of Thirds`.

8. Bật `Passepartout` để tập trung vào camera frame.

9. Tạo một `Empty` đặt tại subject.

10. Gán `Empty` làm `Focus Object`.

11. Bật `Depth of Field`.

12. Giảm dần `F-Stop` và quan sát sự thay đổi của background blur.

13. Đặt một nguồn sáng hoặc vật thể sáng phía sau subject để dễ quan sát bokeh.

**Kết quả mong đợi:**

* Camera frame có bố cục rõ ràng.
* Subject không bị méo ngoài chủ ý.
* Người học nhận thấy khác biệt giữa lens rộng và lens dài.
* Subject chính nằm đúng vùng focus.
* Background blur hỗ trợ subject thay vì che mất thông tin.
* Bokeh thay đổi khi aperture settings được điều chỉnh.

---

## 19. Checklist hoàn thành

* [ ] Tạo và đặt tên được camera.
* [ ] Sử dụng được `Numpad 0` để vào `Camera View`.
* [ ] Biết cách đặt camera đang chọn thành active camera.
* [ ] Phân biệt được `Perspective` và `Orthographic`.
* [ ] Giải thích được ảnh hưởng của focal length đến `Field of View`.
* [ ] Hiểu sensor và focal length cùng ảnh hưởng tới góc nhìn.
* [ ] Thiết lập được `Clip Start` và `Clip End`.
* [ ] Xác định được resolution và aspect ratio của shot.
* [ ] Sử dụng được composition guides.
* [ ] Biết công dụng của `Passepartout`.
* [ ] Thêm được image hoặc movie reference vào camera viewport.
* [ ] Thiết lập được `Depth of Field`.
* [ ] Sử dụng được `Focus Object`.
* [ ] Điều chỉnh được `F-Stop`.
* [ ] Hiểu cơ bản cách aperture ảnh hưởng đến bokeh.
* [ ] DOF hỗ trợ focal point và không làm sai vùng cần nhấn mạnh.

---

## 20. Tổng kết

Camera trong Blender là một hệ thống kết hợp giữa vị trí, projection, focal length, sensor, resolution và các thiết lập quang học.

`Perspective` phù hợp với phần lớn shot thông thường, trong khi `Orthographic` hữu ích khi cần loại bỏ perspective. Focal length là công cụ quan trọng để kiểm soát góc nhìn và cảm giác không gian, còn sensor giúp Blender mô phỏng camera vật lý chính xác hơn.

Các công cụ như composition guides, background reference và `Passepartout` hỗ trợ việc dựng bố cục nhưng không trực tiếp xuất hiện trong render.

Cuối cùng, `Depth of Field` cho phép kiểm soát vùng nét và dẫn sự chú ý của người xem. Khi kết hợp focus target, `F-Stop` và aperture settings một cách có chủ ý, camera không chỉ ghi lại scene mà trở thành một phần quan trọng trong ngôn ngữ hình ảnh của shot.
