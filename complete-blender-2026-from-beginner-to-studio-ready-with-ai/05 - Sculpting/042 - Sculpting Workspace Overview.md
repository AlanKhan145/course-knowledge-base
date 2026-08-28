# 042 — Sculpting Workspace Overview

**Phần:** 05 — Sculpting
**Thời lượng:** 3:50
**Chủ đề:** Sculpt Mode, brush shelf, symmetry, remesh và masking
**Loại bài:** lesson

---

## 1. Tóm tắt

`Sculpt Mode` trong Blender là môi trường dùng để tạo hình trực tiếp bằng cách đẩy, kéo, làm phẳng, làm mịn hoặc biến dạng bề mặt của mesh bằng các brush.

Khác với modeling thông thường, sculpting phụ thuộc rất nhiều vào **mật độ hình học**. Nếu mesh có quá ít vertex và polygon, brush không có đủ điểm để tạo ra những thay đổi chi tiết trên bề mặt.

Trước khi bắt đầu sculpt, cần làm quen với:

* cách chuyển sang `Sculpt Mode`;
* bố cục của Sculpting Workspace;
* vị trí và vai trò của brush;
* `Radius` và `Strength`;
* yêu cầu về mật độ mesh;
* `Remesh`;
* `Symmetry`;
* `Mask`;
* cách điều khiển brush bằng chuột hoặc bảng vẽ.

Mục tiêu của bước chuẩn bị này là tạo một môi trường sculpt ổn định trước khi học các brush cụ thể.

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

* chuyển một object sang `Sculpt Mode`;
* nhận diện các khu vực chính của Sculpting Workspace;
* giải thích được vì sao sculpting cần mesh có đủ mật độ hình học;
* xác định được vai trò của `Remesh`, `Symmetry` và `Mask`;
* thay đổi kích thước và cường độ brush trong quá trình sculpt;
* phân biệt brush deform, paint và simulation;
* chuẩn bị viewport để quan sát form rõ hơn;
* sử dụng chuột hoặc graphic tablet để thao tác trong Sculpt Mode.

---

## 3. Sculpting hoạt động như thế nào?

Sculpting có thể được hình dung giống như việc nặn một khối đất sét kỹ thuật số.

Thay vì chọn từng vertex, edge hoặc face, người dùng tác động lên một vùng của bề mặt thông qua brush.

Luồng cơ bản là:

```text
Mesh
  ↓
Brush tác động lên một vùng
  ↓
Các vertex trong vùng ảnh hưởng bị thay đổi
  ↓
Bề mặt thay đổi hình dạng
```

Ví dụ, khi sử dụng một brush để đẩy bề mặt lên, Blender thực chất đang thay đổi vị trí của nhiều vertex cùng lúc.

Điều này dẫn đến một nguyên tắc quan trọng:

> Sculpting không thể tạo ra chi tiết tốt nếu mesh không có đủ hình học để mô tả chi tiết đó.

Một sphere chỉ có vài polygon sẽ tạo ra bề mặt gãy và thô khi sculpt. Khi mật độ vertex đủ lớn, brush mới có thể tạo được đường cong và chuyển tiếp mượt.

---

## 4. Chuẩn bị object để sculpt

Để làm quen với workspace, có thể bắt đầu bằng một object đơn giản như `UV Sphere`.

Một quy trình thử nghiệm cơ bản:

1. Xóa các object không cần thiết khỏi scene.
2. Thêm một `UV Sphere`.
3. Chọn sphere.
4. Chuyển sang Sculpting Workspace hoặc `Sculpt Mode`.
5. Kiểm tra mật độ mesh trước khi bắt đầu biến dạng.

Không nhất thiết phải dùng sphere trong mọi project. Sphere chỉ phù hợp cho việc học brush vì có hình dạng đơn giản và dễ quan sát deformation.

### Mật độ mesh

Mesh quá thưa:

```text
Ít vertex
   ↓
Brush tác động lên ít điểm
   ↓
Bề mặt biến dạng thô
   ↓
Khó tạo chi tiết
```

Mesh đủ dày:

```text
Nhiều vertex
   ↓
Brush có nhiều điểm để điều khiển
   ↓
Bề mặt chuyển tiếp mượt
   ↓
Có thể tạo chi tiết nhỏ hơn
```

Tuy nhiên, không nên tăng polygon một cách vô kiểm soát. Mesh quá nặng sẽ làm giảm hiệu năng viewport và khiến sculpting chậm hơn.

Mục tiêu là đạt **đủ resolution cho cấp độ chi tiết đang thực hiện**.

---

## 5. Chuyển sang Sculpt Mode

Blender cung cấp nhiều cách để vào môi trường sculpt.

Cách trực quan nhất là chọn workspace:

```text
Workspace Tabs
    ↓
Sculpting
    ↓
Sculpt Mode
```

Sculpting Workspace đã được Blender bố trí sẵn các panel và công cụ cần thiết, vì vậy đây là lựa chọn thuận tiện khi mới học.

Ngoài ra có thể sử dụng menu chuyển mode bằng:

```text
Ctrl + Tab
```

Sau đó chọn `Sculpt Mode`.

Hai cách đều đưa object vào Sculpt Mode. Điểm khác biệt chủ yếu nằm ở bố cục workspace đang sử dụng.

---

## 6. Các khu vực chính của Sculpting Workspace

Khi chuyển sang Sculpting Workspace, giao diện tập trung vào việc chọn brush, điều chỉnh brush và quan sát bề mặt object.

Có thể hình dung bố cục theo luồng:

```text
Brush / Tool
      ↓
Brush Settings
      ↓
Viewport
      ↓
Mesh
```

Các thành phần quan trọng gồm:

* vùng chọn brush;
* các thiết lập brush trên header;
* các thiết lập chi tiết của tool;
* viewport để sculpt;
* các công cụ liên quan đến mask, symmetry và remesh.

Không cần ghi nhớ mọi tham số ngay từ đầu. Trong giai đoạn cơ bản, chỉ cần xác định được những nhóm công cụ chính.

---

## 7. Brush trong Sculpt Mode

Brush là công cụ trung tâm của sculpting.

Mỗi brush định nghĩa cách vùng mesh bên dưới con trỏ sẽ bị tác động.

Các brush có thể thực hiện nhiều loại tác vụ khác nhau như:

* đẩy bề mặt;
* kéo bề mặt;
* làm mịn;
* tạo nếp;
* làm phẳng;
* phồng hoặc thu nhỏ;
* vẽ màu;
* mô phỏng deformation kiểu cloth.

Khi chuyển brush, các tham số liên quan cũng có thể thay đổi vì mỗi brush có hành vi riêng.

### Các nhóm brush

Trong Sculpt Mode có thể gặp nhiều nhóm công cụ khác nhau.

**Deform brush** thay đổi trực tiếp hình dạng mesh. Đây là nhóm được sử dụng nhiều nhất khi sculpt hình khối.

**Paint brush** dùng để đưa dữ liệu màu lên bề mặt thay vì chỉ thay đổi hình học. Màu có thể được lưu trên dữ liệu của mesh và được sử dụng trong quy trình tạo vật liệu hoặc texture tùy workflow.

**Simulation brush** có thể mô phỏng một số kiểu deformation vật lý, đặc biệt là hành vi tương tự cloth. Chúng hữu ích khi tạo:

* nếp vải;
* nếp trên quần áo;
* đệm;
* sofa;
* bề mặt mềm.

Các nhóm này cùng xuất hiện trong môi trường sculpt nhưng phục vụ những mục tiêu khác nhau.

---

## 8. Radius và Strength

Hai thông số cần làm quen ngay từ đầu là `Radius` và `Strength`.

### Radius

`Radius` quyết định kích thước vùng ảnh hưởng của brush.

```text
Radius lớn
→ tác động lên vùng rộng
→ phù hợp chỉnh form lớn

Radius nhỏ
→ tác động lên vùng hẹp
→ phù hợp chỉnh chi tiết
```

Trong quá trình sculpt bằng chuột, có thể thay đổi kích thước brush bằng:

```text
F
```

Sau khi nhấn `F`, di chuyển chuột để tăng hoặc giảm kích thước vùng ảnh hưởng.

### Strength

`Strength` quyết định mức độ mạnh của deformation.

Strength cao làm bề mặt thay đổi mạnh hơn sau mỗi stroke.

Strength thấp tạo ra thay đổi nhẹ hơn và dễ kiểm soát hơn.

Có thể điều chỉnh strength nhanh bằng:

```text
Shift + F
```

Đối với sculpting, việc thường xuyên thay đổi `Radius` và `Strength` quan trọng hơn việc giữ một giá trị cố định.

Khi tạo form lớn nên sử dụng brush tương đối lớn. Khi đi vào chi tiết, giảm radius dần để tránh tạo bề mặt lổn nhổn.

---

## 9. Falloff và đường cong ảnh hưởng

Không phải mọi vertex bên trong radius đều nhận cùng một mức tác động.

Brush thường sử dụng một đường cong falloff để xác định cường độ từ tâm brush ra mép.

Có thể hình dung:

```text
Tâm brush        Mép brush
    ↓                 ↓
Mạnh ───────────────→ Yếu
```

Falloff mềm tạo chuyển tiếp tự nhiên.

Falloff cứng tạo vùng deformation rõ và gắt hơn.

Nguyên lý này tương tự vùng ảnh hưởng trong `Proportional Editing`: điểm càng xa tâm ảnh hưởng thì mức tác động càng giảm theo đường cong được cấu hình.

Trong giai đoạn đầu, không cần chỉnh sâu các curve. Chỉ cần hiểu rằng hình dạng falloff ảnh hưởng trực tiếp đến cảm giác của stroke.

---

## 10. Symmetry

Nhiều model cần có hình dạng đối xứng, đặc biệt khi sculpt:

* khuôn mặt;
* cơ thể nhân vật;
* động vật;
* các vật thể thiết kế đối xứng.

`Symmetry` cho phép một stroke ở một phía được phản chiếu sang phía còn lại.

Ví dụ với đối xứng theo trục X:

```text
Stroke bên trái
      ↓
Sculpt
      ↓
Blender phản chiếu
      ↓
Thay đổi tương ứng bên phải
```

Đây là công cụ quan trọng trong giai đoạn dựng form ban đầu vì giúp:

* tiết kiệm thời gian;
* giữ hai phía đồng đều;
* tránh sai lệch không chủ ý.

Khi cần tạo asymmetry tự nhiên, có thể tắt symmetry ở giai đoạn chi tiết cuối.

Trước khi sculpt đối xứng, nên bảo đảm object được đặt và định hướng hợp lý theo các trục local của model.

---

## 11. Remesh

Trong quá trình sculpt, các vùng mesh có thể bị kéo giãn hoặc nén mạnh.

Ví dụ:

```text
Mesh ban đầu
    ↓
Kéo mạnh một vùng
    ↓
Polygon bị giãn
    ↓
Mật độ không đồng đều
    ↓
Khó sculpt tiếp
```

`Remesh` được sử dụng để tái tạo lại topology với mật độ hình học đồng đều hơn.

Về mặt ý tưởng:

```text
Mesh không đều
      ↓
Remesh
      ↓
Tạo lại topology
      ↓
Phân bố polygon đồng đều hơn
```

Remesh đặc biệt hữu ích trong giai đoạn tạo form khi topology hoàn chỉnh chưa phải ưu tiên chính.

Tuy nhiên, remesh có thể thay đổi topology mạnh. Vì vậy cần xem nó như một công cụ **tái xây dựng lưới**, không phải thao tác chỉnh sửa nhẹ.

Trước khi remesh, nên kiểm tra:

* mức chi tiết hiện tại;
* kích thước object;
* resolution mong muốn;
* liệu có dữ liệu topology cần được bảo toàn hay không.

---

## 12. Masking

`Mask` cho phép bảo vệ một vùng của mesh khỏi ảnh hưởng của brush.

Có thể hình dung mask giống như việc che một phần của mô hình:

```text
Toàn bộ mesh
      ↓
Mask một vùng
      ↓
Brush tác động
      ↓
Vùng không mask thay đổi
Vùng mask được bảo vệ
```

Mask rất hữu ích khi cần sculpt một vùng gần các chi tiết đã hoàn thiện.

Ví dụ, khi sculpt vùng xung quanh mắt, có thể mask phần mí hoặc một vùng khuôn mặt để tránh brush làm biến dạng những phần không mong muốn.

Mask không làm thay đổi topology. Nó chỉ kiểm soát vùng nào được phép nhận deformation từ brush.

---

## 13. Chuẩn bị viewport để đọc form

Sculpting phụ thuộc nhiều vào khả năng nhìn thấy hình khối.

Nếu ánh sáng viewport quá phẳng hoặc quá tối, người sculpt khó nhận ra:

* mặt lồi;
* mặt lõm;
* chuyển tiếp form;
* lỗi bề mặt;
* silhouette.

Vì vậy trước khi sculpt nên:

1. Đặt góc nhìn dễ quan sát.
2. Chọn `Studio Light` giúp form nổi rõ.
3. Xoay model thường xuyên.
4. Kiểm tra silhouette từ nhiều hướng.
5. Không đánh giá form chỉ từ một camera angle.

Sculpting không phải quá trình “vẽ” lên một mặt phẳng. Model luôn cần được kiểm tra trong không gian 3D.

---

## 14. Sculpt bằng graphic tablet

Graphic tablet giúp sculpt tự nhiên hơn vì stylus có thể cung cấp dữ liệu pressure.

Tùy brush và thiết lập, lực nhấn có thể điều khiển những thuộc tính như:

* strength;
* radius;
* mức deformation.

Nhấn nhẹ có thể tạo stroke nhẹ, trong khi nhấn mạnh tạo stroke rõ hơn.

Blender cũng cung cấp các thiết lập liên quan đến input và navigation cho tablet. Nếu thao tác bằng bút gặp khó khăn, cần kiểm tra phần `Input` trong Preferences và cấu hình kiểu điều hướng phù hợp với thiết bị.

`Emulate 3 Button Mouse` có thể hữu ích trong một số workflow tablet khi cần mô phỏng thao tác chuột nhiều nút.

Tablet mang lại lợi thế lớn về cảm giác stroke nhưng không phải yêu cầu bắt buộc. Các kỹ thuật sculpt cơ bản vẫn có thể học và thực hiện bằng chuột.

---

## 15. Quy trình chuẩn trước khi bắt đầu sculpt

Một quy trình chuẩn bị đơn giản có thể sử dụng cho hầu hết bài sculpt cơ bản:

```text
Chọn object
    ↓
Kiểm tra scale và hình dạng ban đầu
    ↓
Kiểm tra mật độ mesh
    ↓
Chuyển sang Sculpt Mode
    ↓
Thiết lập Studio Light
    ↓
Kiểm tra Symmetry
    ↓
Chọn brush
    ↓
Thiết lập Radius và Strength
    ↓
Sculpt form lớn
    ↓
Remesh khi mật độ mesh không còn phù hợp
    ↓
Dùng Mask khi cần cô lập khu vực
```

Trong giai đoạn đầu, ưu tiên form lớn thay vì chi tiết nhỏ.

Việc sculpt chi tiết trên một base mesh chưa đúng tỷ lệ thường dẫn đến phải sửa lại nhiều lần.

---

## 16. Những lỗi thường gặp khi mới sculpt

**Hiện tượng:** Brush di chuyển nhưng bề mặt gần như không thay đổi.
**Nguyên nhân:** Mesh có quá ít vertex hoặc brush strength quá thấp.
**Cách xử lý:** Kiểm tra mật độ mesh, radius và strength trước khi tiếp tục.

**Hiện tượng:** Bề mặt xuất hiện các polygon kéo dài và biến dạng xấu.
**Nguyên nhân:** Một vùng mesh đã bị kéo quá xa so với mật độ topology ban đầu.
**Cách xử lý:** Cân nhắc remesh để phân bố lại hình học trước khi sculpt tiếp.

**Hiện tượng:** Sculpt một bên nhưng phía đối diện cũng thay đổi.
**Nguyên nhân:** `Symmetry` đang được bật.
**Cách xử lý:** Kiểm tra các trục symmetry và tắt trục không cần thiết.

**Hiện tượng:** Brush không tác động lên một vùng của model.
**Nguyên nhân:** Khu vực đó có thể đang bị mask.
**Cách xử lý:** Kiểm tra dữ liệu mask và clear mask nếu muốn tác động trở lại.

**Hiện tượng:** Khó nhận ra các vùng lồi lõm.
**Nguyên nhân:** Viewport lighting không phù hợp hoặc chỉ quan sát model từ một hướng.
**Cách xử lý:** Thay đổi Studio Light và liên tục xoay model.

---

## 17. Best practices khi chuẩn bị sculpt

* Bắt đầu từ hình khối đơn giản.
* Tập trung vào silhouette và form lớn trước.
* Không tăng resolution quá sớm.
* Chỉ thêm mật độ hình học khi form hiện tại thực sự cần nhiều chi tiết hơn.
* Thường xuyên xoay viewport để kiểm tra model từ nhiều hướng.
* Kiểm tra symmetry trước khi thực hiện nhiều stroke.
* Dùng mask để cô lập vùng thay vì cố dùng brush radius cực nhỏ.
* Remesh khi topology bị kéo giãn đến mức ảnh hưởng đến chất lượng sculpt.
* Sử dụng brush lớn cho form lớn và giảm radius dần theo cấp độ chi tiết.
* Không phụ thuộc vào một thiết lập brush duy nhất cho toàn bộ quá trình.

---

## 18. Bài thực hành

Tạo một scene thử nghiệm để làm quen với Sculpting Workspace.

Thực hiện:

1. Thêm một `UV Sphere`.
2. Chuyển sang Sculpting Workspace.
3. Chọn một deform brush.
4. Thử thay đổi kích thước brush bằng `F`.
5. Thử thay đổi strength bằng `Shift + F`.
6. Tạo một vài stroke lớn trên sphere.
7. Bật và tắt symmetry để quan sát sự khác biệt.
8. Mask một vùng rồi thử sculpt lên vùng đó.
9. Quan sát mật độ mesh khi bề mặt bị kéo mạnh.
10. Xác định trường hợp cần remesh trước khi tiếp tục.

**Kết quả mong đợi:**

* Có thể chuyển sang Sculpt Mode mà không gặp trở ngại.
* Nhận diện được khu vực chọn brush và thiết lập brush.
* Thay đổi được radius và strength.
* Nhìn thấy tác động của symmetry.
* Hiểu được tác dụng bảo vệ vùng của mask.
* Nhận ra mối quan hệ giữa mật độ mesh và chất lượng deformation.

---

## 19. Checklist hoàn thành

* [ ] Biết cách chuyển sang Sculpting Workspace.
* [ ] Biết cách chuyển trực tiếp sang `Sculpt Mode`.
* [ ] Xác định được khu vực chọn brush.
* [ ] Phân biệt được deform, paint và simulation brush.
* [ ] Thay đổi được brush radius bằng `F`.
* [ ] Thay đổi được brush strength bằng `Shift + F`.
* [ ] Giải thích được vì sao sculpting cần mesh có đủ resolution.
* [ ] Biết vai trò của `Symmetry`.
* [ ] Biết khi nào `Remesh` có thể cần thiết.
* [ ] Biết mục đích của `Mask`.
* [ ] Đặt viewport và Studio Light đủ rõ để quan sát form.
* [ ] Kiểm tra mesh trước khi bắt đầu sculpt chi tiết.

---

## 20. Tổng kết

Sculpting trong Blender là quá trình biến dạng trực tiếp một mesh bằng brush. Chất lượng sculpt phụ thuộc không chỉ vào brush được chọn mà còn vào mật độ hình học, viewport, symmetry, mask và cách quản lý topology.

Trước khi học các brush chuyên sâu, cần nắm chắc ba nguyên tắc:

* mesh phải có đủ resolution để mô tả form;
* brush cần được điều chỉnh liên tục về radius và strength;
* topology và vùng ảnh hưởng phải được kiểm soát bằng các công cụ như `Remesh`, `Symmetry` và `Mask`.

Khi workspace đã được chuẩn bị đúng, việc học từng sculpt brush và xây dựng form phức tạp sẽ trở nên dễ kiểm soát hơn nhiều.
