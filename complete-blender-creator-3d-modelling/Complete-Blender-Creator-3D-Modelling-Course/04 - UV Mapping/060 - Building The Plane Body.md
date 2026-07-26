# 060 — Building the Plane Body

## Dựng thân máy bay

| Thuộc tính         | Nội dung                                                 |
| ------------------ | -------------------------------------------------------- |
| **Module**         | Module 04 — UV Mapping                                   |
| **Bài học**        | Building the Plane Body                                  |
| **Thời lượng**     | 5:23                                                     |
| **Chủ đề chính**   | Dựng hình khối cơ bản của thân máy bay từ ảnh tham chiếu |
| **Kỹ thuật chính** | Box Modelling, Extrude, Scale, Loop Cut, Auto Mirror     |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Bắt đầu dựng phần thân máy bay dựa trên ảnh tham chiếu ở góc nhìn trước và bên.
* Hiểu nguyên tắc **dựng hình khối lớn trước, bổ sung chi tiết sau**.
* Sử dụng một khối lập phương làm nền tảng cho phương pháp **box modelling**.
* Kích hoạt và sử dụng add-on **Auto Mirror**.
* Tạo một mô hình đối xứng bằng **Mirror Modifier**.
* Extrude và scale các phần của mesh để tạo hình mũi, thân và đuôi máy bay.
* Sử dụng **Loop Cut** để chuẩn bị hình học cho phần cánh đuôi.
* Tránh lỗi chọn thiếu vertex khi làm việc trong chế độ X-Ray.

---

## 2. Tư duy dựng hình tổng thể

Khi dựng một mô hình tương đối phức tạp như máy bay, không nên tạo ngay các chi tiết nhỏ.

Quy trình hợp lý là:

```text
Ảnh tham chiếu
      ↓
Khối cơ bản
      ↓
Điều chỉnh tỷ lệ tổng thể
      ↓
Thiết lập đối xứng
      ↓
Extrude tạo chiều dài thân
      ↓
Scale tạo độ thuôn
      ↓
Thêm Loop Cut khi cần
      ↓
Tinh chỉnh chi tiết ở các bài sau
```

Nguyên tắc quan trọng:

> **Base shape first, detail later**
> Dựng hình khối cơ bản trước, sau đó mới bổ sung chi tiết.

Nếu thêm quá nhiều cạnh và chi tiết ngay từ đầu, mesh sẽ trở nên khó chỉnh sửa và khó kiểm soát.

---

## 3. Chuẩn bị chế độ hiển thị

Ban đầu, scene đang ở chế độ **Wireframe**. Tuy nhiên, để quan sát hình khối rõ hơn, bài giảng chuyển sang:

* **Solid View** để nhìn rõ bề mặt của mesh.
* Bật **X-Ray** để vẫn có thể nhìn thấy ảnh tham chiếu xuyên qua vật thể.

### Thiết lập đề xuất

1. Chuyển sang **Solid View**.
2. Bật **X-Ray**.
3. Chuyển sang góc nhìn bên bằng `Numpad 3`.
4. Phóng to khu vực thân máy bay.
5. Đặt cube trùng với phần giữa của ảnh tham chiếu.

X-Ray đặc biệt hữu ích vì cube không che mất ảnh tham chiếu phía sau.

---

## 4. Tạo khối cơ bản từ Cube

Trong bài học, thân máy bay được bắt đầu từ một **Cube**, không phải Cylinder.

Mặc dù hình dạng thân máy bay gần giống hình trụ, Cube vẫn thuận tiện hơn vì:

* Có ít mặt và ít vertex hơn.
* Dễ kiểm soát topology.
* Dễ extrude từng đoạn.
* Dễ bổ sung cạnh khi cần.
* Không tạo ra quá nhiều hình học ngay từ đầu.

### Điều chỉnh theo góc nhìn bên

Ở góc nhìn bên:

1. Chọn Cube.
2. Nhấn `S` để scale.
3. Điều chỉnh kích thước theo chiều dài thân.
4. Scale theo trục `Y` nếu cần để cube khớp với phần thân giữa trên ảnh tham chiếu.

Cube ban đầu chỉ cần bao phủ phần thân trung tâm, chưa cần kéo dài đến toàn bộ mũi và đuôi máy bay.

### Điều chỉnh theo góc nhìn trước

Sau khi khớp ở góc nhìn bên:

1. Chuyển sang Front View bằng `Numpad 1`.
2. Scale theo trục `X`.
3. Điều chỉnh chiều rộng để khớp với đường viền thân máy bay trên ảnh tham chiếu phía trước.

Cần kiểm tra ở cả hai góc nhìn:

```text
Side View → kiểm tra chiều dài và chiều cao
Front View → kiểm tra chiều rộng và tiết diện thân
```

Một mô hình có thể đúng ở Side View nhưng vẫn quá rộng hoặc quá hẹp khi nhìn từ Front View.

---

## 5. Thiết lập Auto Mirror

Máy bay có cấu trúc đối xứng qua trục dọc giữa thân. Vì vậy, chỉ cần chỉnh sửa một nửa mô hình, nửa còn lại sẽ được tạo tự động.

Bài học sử dụng add-on **Auto Mirror** để thiết lập Mirror Modifier nhanh hơn.

### 5.1. Kích hoạt Auto Mirror

Thực hiện theo đường dẫn:

```text
Edit
└── Preferences
    └── Add-ons
        └── Tìm kiếm: Auto Mirror
```

Đánh dấu bật add-on **Auto Mirror**, sau đó đóng cửa sổ Preferences.

> Trong một số phiên bản Blender mới, add-on có thể cần được cài đặt hoặc kích hoạt trong phần **Extensions**.

---

### 5.2. Mở bảng Auto Mirror

Nhấn `N` trong 3D Viewport để mở Sidebar.

Sau đó chuyển sang tab:

```text
N Sidebar
└── Edit
    └── Auto Mirror
```

Bài giảng cũng hiển thị **Bool Tool**, nhưng add-on này không cần thiết cho bài học.

---

## 6. Kiểm tra Object Origin

Auto Mirror phản chiếu hình học quanh **Object Origin**. Vì vậy, vị trí origin quyết định mặt phẳng đối xứng của mô hình.

Trước khi sử dụng Auto Mirror, cần bảo đảm Object Origin nằm ở trung tâm của object trên trục `X`.

### Đặt origin về giữa hình học

Trong Object Mode:

```text
Right Click
└── Set Origin
    └── Origin to Geometry
```

Lệnh này đưa origin về trung tâm hình học của object.

### Minh họa nguyên tắc Mirror

```text
        Trục đối xứng X = 0
                │
      Nửa trái  │  Nửa phải
                │
          ◄──── Origin ────►
                │
```

Nếu origin bị lệch, phần được phản chiếu cũng sẽ bị lệch theo.

---

## 7. Tạo Mirror bằng Auto Mirror

Trong bảng Auto Mirror:

1. Chọn trục `X`.
2. Nhấn **Auto Mirror**.

Nhìn bên ngoài có thể chưa thấy thay đổi rõ ràng, nhưng Auto Mirror đã tự động:

* Cắt mesh theo mặt phẳng đối xứng.
* Xóa một nửa mesh.
* Thêm **Mirror Modifier**.
* Chọn trục `X`.
* Bật **Clipping**.

Khi vào Edit Mode, chỉ còn một nửa mesh có thể chỉnh sửa. Nửa còn lại được Mirror Modifier tạo tự động.

### Các tùy chọn Mirror quan trọng

| Tùy chọn           | Công dụng                                   |
| ------------------ | ------------------------------------------- |
| **Axis X**         | Phản chiếu mesh qua trục X                  |
| **Clipping**       | Ngăn vertex đi xuyên qua mặt phẳng đối xứng |
| **Merge**          | Gộp các vertex nằm gần đường giữa           |
| **Merge Distance** | Khoảng cách tối đa để tự động gộp vertex    |

---

## 8. Extrude phần thân phía trước

Sau khi thiết lập Mirror, bắt đầu kéo dài phần thân bằng Extrude.

### 8.1. Chọn toàn bộ các vertex ở đầu thân

Ở Side View, cần chọn toàn bộ mặt cắt của phần đầu thân.

Không nên chỉ:

* Click chọn một vertex hoặc edge phía trước.
* Giữ `Shift` và chọn thêm những điểm đang nhìn thấy.

Cách này có thể bỏ sót các vertex nằm phía sau.

### Cách chọn đúng

1. Bật X-Ray.
2. Chuyển sang Side View.
3. Dùng `B` để Box Select.
4. Quét qua toàn bộ mặt cắt ở đầu thân.

Khi đó, cả vertex phía trước và phía sau đều được chọn.

```text
Chọn bằng click thông thường:
●────●
Chỉ chọn được phần nhìn thấy → dễ thiếu vertex

Chọn bằng Box Select + X-Ray:
┌───────────┐
│ ●─────●   │
│ ●─────●   │
└───────────┘
Chọn toàn bộ mặt cắt
```

---

### 8.2. Extrude và thu nhỏ dần

Sau khi chọn mặt cắt:

1. Nhấn `E` để Extrude.
2. Kéo phần mới về phía trước.
3. Nhấn `S` để scale nhỏ lại.
4. Tiếp tục lặp lại thao tác.

Quy trình:

```text
Chọn mặt cắt
     ↓
E — Extrude
     ↓
Di chuyển theo ảnh tham chiếu
     ↓
S — Scale nhỏ lại
     ↓
Lặp lại cho đến phần mũi
```

Mỗi đoạn extrude tạo thêm một mặt cắt mới. Scale các mặt cắt nhỏ dần sẽ tạo ra phần mũi thuôn.

### Lưu ý khi Scale

Khi scale trong Side View, thao tác không chỉ ảnh hưởng đến phần chiều cao nhìn thấy mà còn có thể thay đổi chiều rộng theo trục `X`.

Vì vậy, sau một vài lần extrude nên kiểm tra lại bằng:

* Front View.
* Perspective View.

---

## 9. Tạo hình thân tròn hơn

Ở giai đoạn hiện tại, thân máy bay vẫn còn khá vuông vì được dựng từ Cube.

Bài giảng chưa tinh chỉnh ngay mà chỉ đưa ra hướng xử lý cho bước sau:

1. Thêm một Loop Cut.
2. Chọn các cạnh phía trên bên ngoài.
3. Di chuyển chúng vào trong.
4. Lặp lại với phần cạnh dưới hoặc các cạnh liên quan.

Ví dụ tiết diện ban đầu:

```text
┌─────────┐
│         │
│         │
└─────────┘
```

Sau khi thêm cạnh và điều chỉnh:

```text
   ┌─────┐
  /       \
 |         |
  \_______/
```

Mục tiêu không phải tạo hình tròn hoàn hảo ngay lập tức, mà tạo đủ topology để thân máy bay trông bớt vuông.

---

## 10. Extrude phần thân phía sau

Tương tự phần mũi, phần sau của thân được kéo dài bằng Extrude.

### Quy trình cơ bản

1. Chuyển sang Side View.
2. Bật X-Ray.
3. Box Select toàn bộ mặt cắt phía sau.
4. Nhấn `E` để Extrude.
5. Kéo phần mới về phía đuôi.
6. Scale nhỏ lại theo đường viền ảnh tham chiếu.

Tiếp tục lặp lại để thân thuôn dần về phía sau.

---

## 11. Điều chỉnh phần trên gần đuôi

Tại phần gần đuôi, đường viền phía trên của máy bay thay đổi độ cao.

Bài giảng thực hiện:

1. Chọn các vertex hoặc edge cần thiết.
2. Nhấn `E` để Extrude.
3. Kéo phần mới lên trên.
4. Giới hạn chuyển động để tránh đi sai trục.

Trong transcript có thao tác loại bỏ một trục khỏi chuyển động. Đây là kỹ thuật giới hạn trục trong Blender.

Ví dụ:

* `G`, sau đó `Z`: chỉ di chuyển theo trục Z.
* `G`, sau đó `Shift + Z`: di chuyển trên mặt phẳng XY, loại trừ trục Z.

Cần quan sát hướng trục trong scene để chọn cách giới hạn phù hợp.

---

## 12. Đơn giản hóa phần đuôi

Topology ở phần đuôi có thể trở nên phức tạp do:

* Đuôi thân thu nhỏ nhanh.
* Cánh đuôi đứng sẽ được extrude lên.
* Có nhiều đường viền chồng lên nhau trong ảnh tham chiếu.
* Phần cánh chính và cánh đuôi có thể gây nhiễu khi quan sát.

Thay vì cố gắng hoàn thiện toàn bộ ngay, bài giảng chọn cách:

1. Extrude phần thân đến gần cuối ảnh tham chiếu.
2. Scale mặt cắt cuối nhỏ lại.
3. Giữ topology đơn giản.
4. Chuẩn bị thêm cạnh cho phần cánh đuôi.

Đây là ví dụ của tư duy dựng hình theo từng giai đoạn:

```text
Không cần hoàn thiện tất cả ngay
              ↓
Dựng silhouette cơ bản
              ↓
Chuẩn bị topology
              ↓
Tinh chỉnh ở bài tiếp theo
```

---

## 13. Thêm Loop Cut cho phần đuôi

Sau khi tạo phần thân cơ bản, nhấn:

```text
Ctrl + R
```

để thêm một **Loop Cut** ở khu vực đuôi.

Loop Cut này chuẩn bị topology để ở bước tiếp theo có thể extrude phần **vertical tail fin** — cánh ổn định đứng ở đuôi máy bay.

### Vai trò của Loop Cut

Loop Cut giúp:

* Tạo thêm vertex và edge cần thiết.
* Chia mesh thành các khu vực dễ chọn.
* Tạo đường biên để extrude chi tiết mới.
* Giữ topology liên tục với phần thân.

Không nên thêm Loop Cut nếu chưa xác định rõ mục đích của nó.

---

## 14. Quy trình thực hành hoàn chỉnh

### Bước 1: Chuẩn bị viewport

* Chuyển sang Solid View.
* Bật X-Ray.
* Chuyển qua lại giữa Side View và Front View.

### Bước 2: Đặt Cube

* Chọn Cube.
* Scale theo ảnh tham chiếu bên.
* Scale theo ảnh tham chiếu trước.
* Đặt Cube bao phủ phần thân trung tâm.

### Bước 3: Kích hoạt Auto Mirror

* Mở Preferences.
* Tìm và bật Auto Mirror.
* Nhấn `N` để mở Sidebar.
* Mở tab Edit.

### Bước 4: Kiểm tra Object Origin

* Bảo đảm origin nằm giữa object.
* Nếu cần, chọn `Set Origin → Origin to Geometry`.

### Bước 5: Tạo đối xứng

* Chọn trục X.
* Nhấn Auto Mirror.
* Kiểm tra Mirror Modifier.
* Xác nhận Clipping đã bật.

### Bước 6: Extrude phần mũi

* Vào Edit Mode.
* Box Select toàn bộ mặt cắt phía trước.
* Nhấn `E` để Extrude.
* Scale nhỏ dần theo ảnh tham chiếu.
* Lặp lại đến khi có hình dáng mũi cơ bản.

### Bước 7: Extrude phần đuôi

* Box Select mặt cắt phía sau.
* Extrude từng đoạn.
* Scale nhỏ dần.
* Điều chỉnh các điểm phía trên theo đường viền đuôi.

### Bước 8: Chuẩn bị cánh đuôi

* Extrude thân đến cuối hình tham chiếu.
* Scale nhỏ mặt cắt cuối.
* Thêm Loop Cut bằng `Ctrl + R`.

### Bước 9: Kiểm tra và lưu

* Kiểm tra ở Front View.
* Kiểm tra ở Side View.
* Xoay sang Perspective View.
* Kiểm tra đường giữa của Mirror.
* Lưu file để tiếp tục ở bài sau.

---

## 15. Phím tắt và công cụ liên quan

| Phím tắt/Công cụ       | Chức năng                                                 |
| ---------------------- | --------------------------------------------------------- |
| `Numpad 1`             | Chuyển sang Front View                                    |
| `Numpad 3`             | Chuyển sang Side View                                     |
| `N`                    | Mở hoặc đóng Sidebar trong 3D Viewport                    |
| `Tab`                  | Chuyển giữa Object Mode và Edit Mode                      |
| `B`                    | Box Select                                                |
| `E`                    | Extrude                                                   |
| `S`                    | Scale                                                     |
| `S`, `X`               | Scale theo trục X                                         |
| `S`, `Y`               | Scale theo trục Y                                         |
| `S`, `Z`               | Scale theo trục Z                                         |
| `G`                    | Di chuyển phần tử đã chọn                                 |
| `Ctrl + R`             | Thêm Loop Cut                                             |
| `Z`                    | Mở Shading Pie Menu                                       |
| **X-Ray**              | Cho phép chọn và nhìn xuyên mesh                          |
| **Auto Mirror**        | Tự động cắt mesh và thêm Mirror Modifier                  |
| **Origin to Geometry** | Đưa Object Origin về giữa hình học                        |
| **Clipping**           | Giữ vertex tại đường giữa không vượt qua mặt phẳng Mirror |

---

## 16. Lỗi thường gặp

### 16.1. Chọn thiếu vertex phía sau

**Hiện tượng:** Khi Extrude, chỉ một cạnh hoặc một phần mặt cắt được kéo ra.

**Nguyên nhân:** Chọn vertex bằng click thông thường trong góc nhìn bên, khiến các vertex phía sau không được chọn.

**Cách khắc phục:**

* Bật X-Ray.
* Dùng Box Select.
* Kiểm tra số lượng vertex được chọn trước khi Extrude.

---

### 16.2. Mirror bị lệch

**Hiện tượng:** Hai nửa mô hình không đối xứng hoặc xuất hiện khoảng cách lớn ở giữa.

**Nguyên nhân:** Object Origin không nằm trên mặt phẳng đối xứng.

**Cách khắc phục:**

```text
Object Mode
→ Right Click
→ Set Origin
→ Origin to Geometry
```

Sau đó kiểm tra lại vị trí origin và trục Mirror.

---

### 16.3. Đường giữa bị hở

**Hiện tượng:** Xuất hiện khe hở ở chính giữa thân máy bay.

**Nguyên nhân:**

* Chưa bật Clipping.
* Vertex trung tâm chưa nằm đúng tại `X = 0`.
* Merge chưa hoạt động hoặc Merge Distance quá nhỏ.

**Cách khắc phục:**

* Bật Clipping và Merge.
* Chọn vertex giữa.
* Đưa chúng về `X = 0`.

---

### 16.4. Thân máy bay đúng ở Side View nhưng sai ở Front View

**Nguyên nhân:** Chỉ điều chỉnh mô hình theo một ảnh tham chiếu.

**Cách khắc phục:** Thường xuyên chuyển đổi:

```text
Side View ↔ Front View ↔ Perspective View
```

---

### 16.5. Thân bị méo khi Scale

**Nguyên nhân:** Scale đồng thời trên nhiều trục mà không kiểm tra tiết diện.

**Cách khắc phục:**

* Dùng scale theo trục cụ thể khi cần.
* Kiểm tra Front View sau mỗi vài lần Extrude.
* Không chỉ dựa vào hình dáng ở Side View.

---

### 16.6. Thêm quá nhiều Loop Cut

**Hiện tượng:** Mesh có quá nhiều cạnh và khó chỉnh sửa.

**Nguyên nhân:** Cố gắng tạo độ cong bằng cách tăng mật độ hình học quá sớm.

**Cách khắc phục:**

* Chỉ thêm Loop Cut khi cần thay đổi silhouette.
* Giữ topology đơn giản trong giai đoạn blockout.
* Tập trung vào hình khối lớn trước.

---

## 17. Topology cần đạt được

Kết quả cuối bài chưa phải mô hình máy bay hoàn chỉnh. Mesh chỉ cần đạt các yêu cầu:

* Phần thân giữa có tỷ lệ tương đối đúng.
* Mũi máy bay thuôn nhỏ dần.
* Phần đuôi kéo dài và thu nhỏ.
* Hai bên đối xứng qua Mirror Modifier.
* Topology đủ đơn giản để tiếp tục chỉnh sửa.
* Có Loop Cut ở phần đuôi để chuẩn bị tạo cánh đuôi đứng.

Sơ đồ topology theo chiều dài:

```text
Mũi máy bay          Thân giữa                 Đuôi
     ▼                    ▼                      ▼
   nhỏ ─── lớn dần ─── kích thước lớn ─── nhỏ dần ─── nhỏ
    │        │              │      │          │       │
 Edge     Edge loop      Base cube          Loop    End cap
```

---

## 18. Thử thách thực hành

Hãy tự hoàn thiện phần thân máy bay bằng cách:

1. Theo sát đường viền của ảnh tham chiếu.
2. Sử dụng ít đoạn Extrude nhất có thể.
3. Scale từng mặt cắt để tạo độ thuôn.
4. Kiểm tra mô hình ở cả Front View và Side View.
5. Giữ đường giữa kín và đối xứng.
6. Thêm Loop Cut tại vị trí phù hợp cho phần cánh đuôi.

Mục tiêu là tạo được hình khối gần giống mô hình trong bài giảng, không cần hoàn thiện chi tiết bề mặt.

---

## 19. Checklist thực hành

### Khối cơ bản

* [ ] Đã chuyển sang Solid View.
* [ ] Đã bật X-Ray.
* [ ] Cube đã khớp với phần thân giữa ở Side View.
* [ ] Cube đã khớp chiều rộng ở Front View.

### Auto Mirror

* [ ] Đã bật add-on Auto Mirror.
* [ ] Object Origin nằm giữa object.
* [ ] Mirror hoạt động trên trục X.
* [ ] Clipping đã được bật.
* [ ] Chỉ cần chỉnh sửa một nửa mesh.

### Dựng thân

* [ ] Đã Box Select toàn bộ mặt cắt trước khi Extrude.
* [ ] Đã Extrude và scale phần mũi.
* [ ] Đã Extrude và scale phần đuôi.
* [ ] Đã kiểm tra hình dáng từ nhiều góc nhìn.
* [ ] Đã giữ topology đơn giản.

### Chuẩn bị bài tiếp theo

* [ ] Đã thêm Loop Cut ở phần đuôi.
* [ ] Không có khe hở ở đường giữa.
* [ ] Đã lưu file Blender.

---

## 20. Tóm tắt bài học

Trong bài học này, thân máy bay được dựng bằng phương pháp **box modelling**, bắt đầu từ một Cube đơn giản. Cube được điều chỉnh theo ảnh tham chiếu ở cả Side View và Front View để xác định tỷ lệ cơ bản.

Add-on **Auto Mirror** được sử dụng để tự động cắt mesh và thêm Mirror Modifier trên trục X. Nhờ đó, người dùng chỉ cần chỉnh sửa một nửa thân máy bay mà vẫn bảo đảm hai bên đối xứng.

Phần mũi và đuôi được tạo bằng cách Box Select toàn bộ mặt cắt, sau đó liên tục sử dụng **Extrude** và **Scale** để bám theo đường viền trên ảnh tham chiếu. Cuối cùng, một Loop Cut được thêm tại phần đuôi để chuẩn bị cho việc dựng cánh đuôi đứng trong bài học tiếp theo.

Điểm quan trọng nhất của bài là:

> **Giữ mesh đơn giản, dựng đúng hình khối tổng thể và chỉ thêm topology khi thực sự cần thiết.**
