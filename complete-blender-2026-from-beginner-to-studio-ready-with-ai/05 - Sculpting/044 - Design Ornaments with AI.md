# 044 — Design Ornaments with AI

**Phần:** 05 — Sculpting
**Thời lượng:** 8:12
**Chủ đề:** AI-generated depth map cho ornament
**Loại bài:** lesson

---

## 1. Tóm tắt

Một ornament phức tạp không nhất thiết phải được sculpt hoàn toàn bằng tay. Blender có thể sử dụng ảnh grayscale như một **height map** hoặc **depth-style map** để điều khiển brush và tạo phù điêu trực tiếp lên bề mặt mesh.

Khi kết hợp kỹ thuật này với công cụ tạo ảnh AI, quy trình có thể rút ngắn đáng kể:

```text
Ý tưởng ornament
      ↓
Tạo hoặc xử lý ảnh grayscale
      ↓
Làm sạch depth map
      ↓
Nạp làm brush texture
      ↓
Sculpt relief
      ↓
Kiểm tra artifact
      ↓
Tối ưu geometry
```

Điểm quan trọng không nằm ở việc ảnh được tạo bằng AI hay không, mà ở chất lượng của map, mật độ mesh, cường độ displacement và cách ornament tương tác với hình dạng tổng thể của asset.

Depth map chỉ cung cấp thông tin độ cao tương đối. Nó **không tự tạo topology sạch**, không tự sửa seam và cũng không bảo đảm model cuối có số polygon phù hợp.

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

* giải thích được cách ảnh grayscale có thể điều khiển relief;
* chuẩn bị một ornament map phù hợp để sculpt;
* dùng AI để tạo hoặc cải thiện mẫu ornament;
* nạp ảnh vào texture của sculpt brush;
* sử dụng `Anchored` hoặc `Stencil` để đặt ornament có kiểm soát;
* điều chỉnh `Radius`, `Strength`, falloff và texture sampling;
* tăng mật độ geometry bằng `Multiresolution`;
* áp ornament lên bề mặt phẳng và bề mặt cong;
* sử dụng radial symmetry khi cần lặp ornament quanh vật thể;
* nhận diện noise, overlap và artifact;
* tối ưu geometry sau khi hoàn thành relief;
* giữ bản gốc trước các thao tác làm thay đổi mạnh topology.

---

## 3. Depth map hoạt động như thế nào?

Depth map trong workflow này là một ảnh grayscale biểu diễn mức độ nổi hoặc lõm của bề mặt.

Theo cách hiểu đơn giản:

```text
Đen
→ mức ảnh hưởng thấp

Xám
→ mức ảnh hưởng trung gian

Trắng
→ mức ảnh hưởng cao
```

Khi map được đưa vào sculpt brush, giá trị grayscale sẽ điều khiển mức deformation trên từng vùng.

Một ornament có thể được chuyển thành relief như sau:

```text
Ảnh ornament grayscale
        ↓
Brush Texture
        ↓
Strength × Pixel Value
        ↓
Vertex bị dịch chuyển
        ↓
Relief 3D
```

Đây là nguyên lý gần với displacement: ảnh không chứa mesh thật mà chỉ cung cấp dữ liệu độ cao để hệ thống biến dạng geometry có sẵn.

---

## 4. Một depth map tốt cần những gì?

Không phải bất kỳ ảnh đen trắng nào cũng là depth map tốt.

Một map phù hợp nên có:

* hình dạng ornament rõ;
* mức grayscale có chủ đích;
* ít compression artifact;
* không có watermark;
* đủ resolution;
* nền sạch;
* độ tương phản phù hợp;
* không có vùng nhiễu ngẫu nhiên;
* chuyển tiếp hợp lý giữa vùng nổi và nền.

### Độ tương phản

Nếu contrast quá thấp:

```text
Đen ─ Xám ─ Xám sáng

→ chênh lệch độ cao nhỏ
→ relief khó đọc
```

Nếu contrast quá mạnh:

```text
Đen ───────── Trắng

→ chuyển độ cao đột ngột
→ relief dễ bị gắt
```

Ornament thường đẹp hơn khi các form chính có contrast rõ nhưng transition vẫn đủ mềm.

---

## 5. Dùng AI để tạo hoặc cải thiện ornament

AI có thể được sử dụng trong hai tình huống chính:

* tạo ornament mới từ prompt;
* cải thiện hoặc tái diễn giải một mẫu tham khảo có resolution thấp.

Ví dụ yêu cầu có thể mô tả:

```text
symmetrical ornamental lion relief,
front facing,
clean grayscale height map,
centered composition,
plain background,
high detail,
no text,
no watermark
```

Prompt nên tập trung vào:

* subject;
* symmetry;
* hướng nhìn;
* kiểu relief;
* grayscale;
* background;
* độ rõ của silhouette.

Nếu mục tiêu là sculpt, ảnh đẹp theo nghĩa minh họa chưa chắc đã tốt. Một depth map tốt cần **đọc được độ cao**, không chỉ đẹp về ánh sáng.

---

## 6. Kiểm tra map trước khi đưa vào Blender

Trước khi sử dụng, hãy kiểm tra ít nhất bốn yếu tố.

### 6.1. Grayscale

Depth map nên có độ sáng biểu diễn tương đối rõ mức relief.

Nếu ảnh chứa nhiều màu, nên chuyển sang grayscale hoặc tạo map riêng thay vì phụ thuộc trực tiếp vào màu RGB.

### 6.2. Background

Nền cần ổn định.

Nếu nền có gradient hoặc texture không mong muốn, toàn bộ surface có thể bị biến dạng thay vì chỉ ornament.

### 6.3. Seam và biên ảnh

Nếu ornament chạm sát mép:

```text
Ornament
██████████│mép ảnh
```

khi dùng mapping lặp, các chi tiết có thể xuất hiện sát nhau hoặc tạo seam.

Nên để một khoảng margin hợp lý quanh ornament.

### 6.4. Noise

Các pixel lốm đốm nhỏ có thể trở thành:

* gai;
* hạt;
* rỗ;
* surface noise.

Map nên được blur hoặc làm sạch trước nếu những chi tiết đó không có ý nghĩa hình học.

---

## 7. Chuẩn bị mesh thử nghiệm

Trước khi áp ornament lên asset chính, nên thử trên một mesh đơn giản.

Ví dụ:

1. Thêm một `Cube`.
2. Chỉnh tỷ lệ phù hợp.
3. Apply scale.
4. Chuyển sang `Sculpt Mode`.
5. Kiểm tra mật độ mesh.
6. Tạo bản sao dự phòng trước khi tăng subdivision hoặc remesh.

Scale rất quan trọng vì kích thước object ảnh hưởng đến cảm giác của brush, voxel size và mức deformation.

Nên áp dụng transform khi cần:

```text
Ctrl + A
→ Scale
```

sau khi đã xác định kích thước cơ bản của object.

---

## 8. Vì sao ornament cần mesh dày?

Depth map chỉ có thể biến dạng những vertex thực sự tồn tại.

Nếu mesh quá thưa:

```text
Map chi tiết cao
      ↓
Mesh ít vertex
      ↓
Không đủ điểm để mô tả relief
      ↓
Ornament vỡ hoặc mờ
```

Ví dụ một hình sư tử có mắt, mũi và bờm chi tiết nhưng surface chỉ có vài trăm polygon thì các chi tiết nhỏ sẽ không thể xuất hiện chính xác.

Có hai hướng phổ biến:

* remesh để tạo mật độ tương đối đồng đều;
* dùng `Multiresolution` để tăng mức subdivision phục vụ sculpt.

---

## 9. Multiresolution cho sculpt detail

`Multiresolution` phù hợp khi muốn sculpt ở nhiều cấp độ resolution.

Workflow cơ bản:

```text
Base Mesh
    ↓
Multiresolution
    ↓
Subdivide
    ↓
Level 1
    ↓
Subdivide
    ↓
Level 2
    ↓
Sculpt detail
```

Ưu điểm là có thể giữ nhiều mức chi tiết thay vì phá topology ngay lập tức.

Tuy nhiên, mỗi lần subdivide làm số polygon tăng rất nhanh.

Không nên:

```text
Subdivide
Subdivide
Subdivide
Subdivide
Subdivide
```

mà không kiểm tra hiệu năng.

Nguyên tắc:

> Tăng resolution đến mức ornament đọc được rõ, không phải đến mức lớn nhất máy có thể chịu.

---

## 10. Nạp depth map vào Sculpt Brush

Sau khi mesh đủ dày, map có thể được sử dụng làm texture cho brush.

Quy trình tổng quát:

1. Chọn sculpt brush phù hợp.
2. Mở phần texture của brush.
3. Tạo texture mới.
4. Nạp ảnh ornament.
5. Quay lại Sculpt Mode.
6. Chọn phương thức mapping hoặc stroke phù hợp.
7. Test trên vùng nhỏ trước.

Khi map đã gắn với brush, hình dạng stroke không còn chỉ phụ thuộc vào falloff tròn mặc định mà còn chịu ảnh hưởng của ornament texture.

---

## 11. Anchored Stroke

`Anchored` phù hợp khi cần đặt một ornament riêng lẻ.

Thay vì vẽ một đường stroke dài:

```text
Click
  ↓
Kéo
  ↓
Xác định kích thước
  ↓
Thả
  ↓
Stamp ornament
```

Cách này rất phù hợp với:

* huy hiệu;
* phù điêu;
* logo;
* mặt thú;
* hoa văn trung tâm;
* chi tiết trang trí đơn.

Lợi thế lớn nhất là dễ kiểm soát kích thước của một stamp mà không tạo chuỗi lặp.

---

## 12. Stencil

`Stencil` phù hợp khi muốn định vị texture trực tiếp lên bề mặt trước khi sculpt.

Có thể xem stencil giống như một tấm khuôn đặt phía trước object:

```text
Stencil Image
     ↓
Căn vị trí
     ↓
Căn scale
     ↓
Brush đi qua stencil
     ↓
Relief xuất hiện
```

Stencil hữu ích khi cần:

* kiểm soát vị trí chính xác;
* căn ornament với chi tiết có sẵn;
* thay đổi scale trước khi sculpt;
* chỉ áp một phần của ảnh;
* làm việc trên surface không tiện stamp trực tiếp.

Đây thường là lựa chọn linh hoạt hơn khi ornament cần bố trí thủ công.

---

## 13. Kiểm soát độ nổi

Một map tốt vẫn có thể tạo kết quả xấu nếu strength quá lớn.

Ví dụ:

```text
Strength thấp
→ relief nhẹ
→ phù hợp ornament tinh tế

Strength vừa
→ form đọc rõ

Strength quá cao
→ ornament phồng mạnh
→ cạnh gắt
→ phá silhouette
```

Không nên mặc định rằng relief càng nổi càng tốt.

Đối với:

* vase;
* kiến trúc;
* panel;
* đồ nội thất;
* prop;

ornament thường chỉ nên nổi đủ để bắt ánh sáng.

Một cách đánh giá tốt là giảm strength cho đến khi ornament gần biến mất, sau đó tăng dần đến mức form vừa đủ đọc.

---

## 14. Falloff và biên ornament

Nếu brush falloff làm giảm strength về mép, ornament có thể bị lõm hoặc biến dạng thành một vùng tròn bao quanh.

Khi muốn stamp toàn bộ map với cường độ đồng đều, có thể cần điều chỉnh falloff phù hợp.

Mục tiêu là tránh:

```text
Ornament đẹp
     +
vùng lõm tròn xung quanh
```

Sau mỗi thay đổi, test lại trên một vùng phẳng trước khi áp lên asset chính.

---

## 15. Giảm noise bằng texture sampling

Depth map AI hoặc ảnh resolution thấp có thể chứa noise mà mắt thường chỉ thấy rất nhẹ.

Khi displacement được khuếch đại, noise đó có thể trở thành hình học thật.

Ví dụ:

```text
Noise 2D nhỏ
     ↓
Displacement
     ↓
Noise 3D rõ
```

Có thể giảm noise bằng:

* blur map trước khi nạp;
* dùng texture sampling mềm hơn;
* tăng filtering;
* giảm strength;
* bỏ các chi tiết high-frequency không cần thiết.

Không nên cố sửa một map xấu chỉ bằng Smooth sau khi đã sculpt vì lúc đó noise đã trở thành geometry.

---

## 16. Test ornament dưới ánh sáng

Ornament cần được đánh giá bằng ánh sáng xiên chứ không chỉ nhìn chính diện.

Một setup kiểm tra đơn giản:

```text
Light
  ↘
   Relief Surface
```

Ánh sáng xiên giúp dễ nhìn thấy:

* depth;
* ridge;
* valley;
* noise;
* cạnh quá gắt;
* vùng bị lõm ngoài ý muốn.

Nếu chỉ nhìn bằng ánh sáng phẳng, một ornament có thể trông ổn nhưng khi render lại xuất hiện rất nhiều artifact.

---

## 17. Áp ornament lên bề mặt cong

Bề mặt phẳng là trường hợp đơn giản.

Với các object tròn như:

* vase;
* cột;
* thân bình;
* trụ;
* vòng;

cần chú ý tới độ cong của surface.

Một stamp quá rộng có thể bị kéo giãn quanh curvature.

Workflow nên là:

```text
Xác định vùng cong
      ↓
Căn ornament
      ↓
Giảm scale nếu cần
      ↓
Áp relief
      ↓
Kiểm tra từ góc bên
```

Không chỉ quan sát chính diện vì độ biến dạng thường dễ thấy nhất ở góc nghiêng.

---

## 18. Radial Symmetry cho ornament quanh vật thể

Khi muốn lặp ornament quanh một vase hoặc vật thể tròn, radial symmetry có thể giúp tạo nhiều bản sao theo một trục.

Ví dụ:

```text
       Ornament
          ↑
    ↖           ↗

Ornament       Ornament

    ↙           ↘
          ↓
       Ornament
```

Nếu object đứng theo trục Z, thường cần kiểm tra radial symmetry quanh trục phù hợp với hướng của object.

Số lượng radial instance quyết định ornament được lặp bao nhiêu lần quanh chu vi.

Trước khi sculpt chính thức, hãy test bằng strength thấp để kiểm tra:

* hướng;
* số lần lặp;
* khoảng cách;
* overlap.

---

## 19. Tránh overlap giữa các ornament

Radial symmetry hoặc texture repeat có thể khiến các stamp chồng lên nhau.

Khi hai relief giao nhau:

```text
Ornament A
      ↘
       X
      ↗
Ornament B
```

vùng giao nhau thường:

* quá cao;
* quá dày;
* mất form;
* tạo noise;
* khó smooth.

Có thể xử lý bằng cách:

* giảm kích thước texture;
* giảm số radial instance;
* giảm strength;
* thay đổi vị trí stencil;
* chọn kiểu mapping khác;
* chỉnh map để có margin lớn hơn.

Overlap nên được xử lý trước khi tăng subdivision hoặc áp modifier cuối.

---

## 20. Mapping và Repeat

Texture mapping quyết định cách ảnh được lấy mẫu ngoài phạm vi texture chính.

Nếu thiết lập repeat không phù hợp, ornament có thể xuất hiện nhiều lần:

```text
Lion | Lion | Lion | Lion
```

trong khi mục tiêu chỉ là một stamp.

Với ornament đơn lẻ, cần chọn cách extension hoặc mapping sao cho vùng ngoài texture không tạo thêm bản lặp không mong muốn.

Đây là một trong những bước cần test trực tiếp vì hành vi cụ thể phụ thuộc kiểu projection đang sử dụng.

---

## 21. Không để ornament phá silhouette

Ornament thường là **surface detail**, không phải primary form.

Do đó:

```text
Base Shape
   ↓
Silhouette đã ổn
   ↓
Ornament
   ↓
Surface detail
```

Không nên:

```text
Ornament quá mạnh
      ↓
Thay đổi contour tổng thể
      ↓
Silhouette bị méo
```

Trừ khi mục tiêu thiết kế chủ động yêu cầu ornament nhô khỏi silhouette, hãy kiểm tra object từ góc nghiêng và khoảng cách xa.

Nếu ornament trở thành thành phần đầu tiên mắt nhìn thấy trước cả form của asset, relief có thể đang quá mạnh.

---

## 22. Tối ưu geometry sau sculpt

Ornament detail thường yêu cầu mesh dày, nhưng asset cuối không phải lúc nào cũng cần giữ toàn bộ lượng polygon đó.

Có ba hướng xử lý phổ biến:

* giữ high-poly để bake;
* retopology;
* giảm polygon bằng công cụ tối ưu phù hợp.

`Decimate` có thể hữu ích để giảm số lượng polygon trong một số trường hợp.

Ví dụ:

```text
High-poly Sculpt
      ↓
Decimate
      ↓
Giảm polygon
      ↓
Kiểm tra silhouette
      ↓
Kiểm tra relief
```

`Ratio` càng thấp thì số polygon bị loại càng nhiều.

Không nên chọn một ratio cố định cho mọi model. Mức giảm chấp nhận được phụ thuộc vào:

* độ phức tạp ornament;
* kích thước asset trên màn hình;
* mục đích render;
* animation hay static;
* yêu cầu bake normal/displacement.

---

## 23. Decimate không thay thế Retopology

`Decimate` giảm số polygon nhưng không có nghĩa là tạo topology tốt.

Sau decimation có thể xuất hiện:

* triangle phân bố khó kiểm soát;
* edge flow không phù hợp;
* topology khó rig;
* deformation kém;
* vùng detail không tối ưu.

Vì vậy:

```text
Decimate
→ tối ưu nhanh polygon

Retopology
→ thiết kế lại topology có chủ đích
```

Đối với static prop, kiến trúc hoặc high-poly trung gian, decimation có thể hữu ích.

Đối với asset cần:

* rig;
* animation;
* deformation;
* production topology;

retopology thường cần được xem xét riêng.

---

## 24. Bake thay vì giữ toàn bộ geometry

Một ornament không nhất thiết phải tồn tại hoàn toàn bằng geometry trong asset cuối.

Một workflow production phổ biến hơn là:

```text
High-poly Ornament
        ↓
Low-poly Asset
        ↓
Bake
   ┌────┼─────┐
   ↓    ↓     ↓
Normal Height Displacement
```

Điều này cho phép giữ cảm giác chi tiết mà không cần hàng triệu polygon trong asset runtime.

Đặc biệt với game asset, đây thường là hướng phù hợp hơn việc giữ nguyên high-poly sculpt.

---

## 25. AI không giải quyết các vấn đề kỹ thuật của map

AI có thể tạo ra hình ảnh rất chi tiết nhưng không bảo đảm:

* depth logic đúng;
* symmetry hoàn hảo;
* grayscale tương ứng với độ sâu thật;
* không có seam;
* không có hallucinated detail;
* texture tile được;
* topology phù hợp;
* ornament có kích thước đúng.

Ví dụ một ảnh AI có thể biểu diễn:

```text
vùng tối = bóng ánh sáng
```

trong khi displacement hiểu:

```text
vùng tối = độ cao thấp
```

Hai ý nghĩa này hoàn toàn khác nhau.

Do đó phải phân biệt:

**Ảnh grayscale nhìn giống relief**

và:

**height/depth map thực sự có logic độ cao tốt**

Đây là lý do map cần được test trên geometry trước khi áp dụng cho asset cuối.

---

## 26. Lưu ý về bản quyền và nguồn tham khảo

AI không tự động biến một hình ảnh thành tài sản không có vấn đề bản quyền.

Nếu sử dụng một ornament có sẵn làm ảnh nguồn, cần xem xét:

* quyền sử dụng của ảnh gốc;
* license;
* mức độ sao chép trực tiếp;
* điều khoản của công cụ AI;
* mục đích thương mại hay cá nhân.

Một workflow an toàn hơn là:

* dùng ảnh có license rõ ràng;
* dùng public-domain reference;
* tự thiết kế ornament;
* tạo ornament mới từ mô tả thay vì sao chép sát một tác phẩm cụ thể;
* lưu lại nguồn và license khi asset được dùng trong production.

AI nên được xem là công cụ hỗ trợ thiết kế, không phải cơ chế tự động xóa bỏ quyền sở hữu trí tuệ của nguồn tham khảo.

---

## 27. Workflow hoàn chỉnh

Một quy trình hiệu quả cho ornament AI có thể tổ chức như sau:

```text
Ý tưởng
  ↓
Tạo / chọn reference hợp lệ
  ↓
Tạo depth-style map bằng AI
  ↓
Chỉnh grayscale
  ↓
Loại noise
  ↓
Kiểm tra margin và seam
  ↓
Tạo bản sao asset
  ↓
Apply scale
  ↓
Chuẩn bị mesh
  ↓
Multiresolution / subdivision
  ↓
Nạp brush texture
  ↓
Anchored / Stencil
  ↓
Điều chỉnh Strength
  ↓
Test relief
  ↓
Áp lên asset
  ↓
Kiểm tra ánh sáng
  ↓
Kiểm tra silhouette
  ↓
Tối ưu / Bake / Retopology
```

Workflow này tách riêng ba vấn đề:

* chất lượng ảnh;
* chất lượng sculpt;
* chất lượng asset cuối.

Không nên giải quyết cả ba bằng một bước displacement duy nhất.

---

## 28. Lỗi thường gặp

**Hiện tượng:** Ornament trông mờ và không đọc được chi tiết.
**Nguyên nhân:** Mesh chưa đủ resolution.
**Cách xử lý:** Tăng mức subdivision hoặc mật độ geometry có kiểm soát.

**Hiện tượng:** Surface xuất hiện rất nhiều hạt nhỏ.
**Nguyên nhân:** Depth map chứa noise hoặc sampling quá sắc.
**Cách xử lý:** Blur map, tăng filtering hoặc loại bỏ high-frequency noise trước khi sculpt.

**Hiện tượng:** Ornament nhô quá cao khỏi object.
**Nguyên nhân:** Brush strength quá lớn.
**Cách xử lý:** Giảm strength và đánh giá lại dưới ánh sáng xiên.

**Hiện tượng:** Ornament bị lặp nhiều lần.
**Nguyên nhân:** Texture extension hoặc mapping đang ở chế độ repeat không phù hợp.
**Cách xử lý:** Điều chỉnh mapping để tạo một stamp duy nhất.

**Hiện tượng:** Ornament trên vase bị chồng lên nhau.
**Nguyên nhân:** Radial count hoặc scale quá lớn.
**Cách xử lý:** Giảm kích thước ornament hoặc số lần lặp.

**Hiện tượng:** Blender phản hồi rất chậm.
**Nguyên nhân:** Subdivide hoặc remesh với resolution quá cao.
**Cách xử lý:** Quay về bản trước đó và tăng resolution theo từng bước.

**Hiện tượng:** Model sau Decimate mất nhiều chi tiết.
**Nguyên nhân:** Tỷ lệ polygon bị giảm quá mạnh.
**Cách xử lý:** Tăng ratio hoặc chuyển sang workflow bake/retopology phù hợp hơn.

---

## 29. Best practices

* Luôn giữ một bản mesh gốc trước displacement hoặc sculpt detail.
* Test depth map trên một object đơn giản trước khi dùng trên asset chính.
* Apply scale trước những workflow phụ thuộc kích thước object.
* Không tăng Multiresolution nhiều level cùng lúc.
* Ưu tiên map sạch hơn là cố dùng mesh cực dày để giữ noise.
* Giảm strength trước khi tăng subdivision.
* Kiểm tra ornament dưới ánh sáng xiên.
* Quan sát từ góc bên để kiểm tra silhouette.
* Dùng `Stencil` khi cần căn vị trí chính xác.
* Dùng `Anchored` khi cần một stamp đơn lẻ nhanh.
* Kiểm tra radial symmetry bằng strength thấp trước.
* Không sử dụng Decimate như một thay thế mặc định cho retopology.
* Với asset realtime, cân nhắc bake detail sang normal hoặc displacement map.
* Xây dựng thư viện ornament kèm metadata về nguồn và quyền sử dụng.

---

## 30. Bài thực hành

Tạo một ornament relief trên bề mặt phẳng, sau đó áp cùng map lên một vật thể cong.

### Phần A — Chuẩn bị map

Tạo hoặc xử lý một ornament grayscale.

Yêu cầu:

* ornament nằm giữa ảnh;
* nền sạch;
* không watermark;
* có khoảng trống quanh biên;
* contrast đủ rõ;
* noise thấp.

### Phần B — Test trên block

1. Tạo một cube hoặc plane dày.
2. Apply scale.
3. Tạo bản sao dự phòng.
4. Chuẩn bị đủ subdivision.
5. Nạp ornament vào brush texture.
6. Chọn `Anchored`.
7. Áp ornament với strength thấp.
8. Tăng strength dần.
9. Kiểm tra bằng ánh sáng xiên.

### Phần C — Áp lên bề mặt cong

1. Tạo hoặc sử dụng một vase.
2. Đảm bảo geometry đủ dày.
3. Dùng `Stencil` để căn ornament.
4. Điều chỉnh kích thước.
5. Áp relief.
6. Kiểm tra object từ chính diện và góc bên.

### Phần D — Lặp ornament

Nếu object phù hợp:

1. Bật radial symmetry.
2. Chọn đúng trục.
3. Đặt số lượng bản lặp nhỏ.
4. Test bằng strength thấp.
5. Kiểm tra overlap.
6. Điều chỉnh trước khi sculpt chính thức.

**Kết quả mong đợi:**

* ornament đọc được hình rõ;
* surface không có noise lớn;
* không xuất hiện repeat ngoài ý muốn;
* relief không phá silhouette;
* ornament trên surface cong không bị overlap nghiêm trọng.

---

## 31. Checklist hoàn thành

* [ ] Depth map có grayscale rõ ràng.
* [ ] Map có độ tương phản phù hợp.
* [ ] Map không chứa noise nghiêm trọng.
* [ ] Ornament có margin quanh biên.
* [ ] Đã test map trước khi áp lên asset chính.
* [ ] Đã apply scale khi workflow yêu cầu.
* [ ] Mesh có đủ resolution cho relief.
* [ ] Không tăng Multiresolution quá mức cần thiết.
* [ ] Biết sử dụng `Anchored`.
* [ ] Biết khi nào nên dùng `Stencil`.
* [ ] Brush strength được kiểm soát.
* [ ] Falloff không tạo vùng deformation ngoài ý muốn.
* [ ] Ornament không phá silhouette ngoài chủ ý.
* [ ] Radial symmetry không tạo overlap nghiêm trọng.
* [ ] Đã kiểm tra relief dưới ánh sáng xiên.
* [ ] Có bản gốc trước khi áp displacement hoặc thay đổi topology mạnh.
* [ ] Biết rằng `Decimate` không thay thế retopology.
* [ ] Đã cân nhắc bake detail nếu asset cần tối ưu.
* [ ] Nguồn hình ảnh và quyền sử dụng đã được kiểm tra nếu asset dùng trong production.

---

## 32. Tổng kết

Depth map là một cách rất nhanh để chuyển một thiết kế 2D thành relief phục vụ sculpting. Khi kết hợp với AI, người dùng có thể nhanh chóng thử nhiều ý tưởng ornament, nâng resolution của concept hoặc tạo biến thể mới trước khi đưa vào Blender.

Tuy nhiên, chất lượng cuối cùng vẫn phụ thuộc vào một chuỗi kiểm soát:

```text
Depth Map
   ↓
Grayscale sạch
   ↓
Mesh đủ resolution
   ↓
Strength hợp lý
   ↓
Placement chính xác
   ↓
Relief sạch
   ↓
Tối ưu phù hợp
```

AI tạo ra hình ảnh; Blender biến dữ liệu đó thành geometry. Giữa hai bước vẫn cần người dùng kiểm soát noise, depth, scale, symmetry, silhouette và topology.

Một ornament tốt không phải ornament có độ nổi lớn nhất hay nhiều chi tiết nhất, mà là ornament **đọc rõ dưới ánh sáng, hòa vào form chính và không làm asset trở nên nặng hoặc khó kiểm soát hơn mức cần thiết**.
