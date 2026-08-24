# 014 — Making the Rocky Base

| Thuộc tính             | Nội dung                                        |
| ---------------------- | ----------------------------------------------- |
| **Module**             | Module 01 — Introduction & Setup                |
| **Bài học**            | Making the Rocky Base                           |
| **Thời lượng**         | 12:37                                           |
| **Chủ đề chính**       | Điêu khắc nền đảo đá bằng Sculpt Mode           |
| **Kỹ thuật trọng tâm** | Dyntopo, Draw Brush, Grab Brush và Smooth Brush |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tạo một mặt phẳng lớn làm mặt biển hoặc mặt sàn cho cảnh.
* Thêm một **Icosphere** làm khối cơ sở của đảo đá.
* Làm quen với không gian làm việc **Sculpting** và chế độ **Sculpt Mode**.
* Sử dụng các brush cơ bản gồm **Draw**, **Grab** và **Smooth**.
* Điều chỉnh kích thước và cường độ của brush bằng phím tắt.
* Hiểu vấn đề kéo giãn polygon khi sculpt trên mesh có ít hình học.
* Bật **Dyntopo** để tự động tạo thêm topology trong quá trình sculpt.
* Tạo được một nền đảo đá có khu vực đặt ngọn hải đăng và các ngôi nhà.

---

## 2. Chuẩn bị scene

### 2.1. Đổi tên và ẩn các đối tượng cũ

Trong **Outliner**:

1. Nhấp đúp vào đối tượng ngọn hải đăng.
2. Đổi tên thành `Lighthouse`.
3. Tạm thời ẩn:

   * Collection chứa các ngôi nhà.
   * Đối tượng ngọn hải đăng.

Việc ẩn các đối tượng giúp quá trình tạo và điêu khắc nền đá dễ quan sát hơn.

---

### 2.2. Kiểm tra chế độ làm việc

Trước khi thêm đối tượng mới, cần chắc chắn rằng Blender đang ở **Object Mode**.

Nếu vẫn đang ở **Edit Mode**, đối tượng mới được thêm vào có thể trở thành một phần của mesh hiện tại thay vì được tạo thành một object riêng.

Nhấn:

```text
Tab
```

để trở về **Object Mode**.

> **Lưu ý:** Khi nhấn `Shift + A` mà chỉ thấy menu **Mesh**, có thể bạn vẫn đang ở Edit Mode.

---

### 2.3. Tạo mặt biển hoặc mặt sàn

Trong Object Mode, nhấn:

```text
Shift + A → Mesh → Plane
```

Sau đó phóng lớn mặt phẳng:

```text
S → 30
```

Giá trị không nhất thiết phải chính xác tuyệt đối vì có thể điều chỉnh lại sau.

Mặt phẳng này sẽ đóng vai trò là:

* Mặt biển.
* Mặt sàn tham chiếu.
* Ranh giới để kiểm tra phần chân đảo đá đã chìm xuống đủ sâu hay chưa.

---

## 3. Tạo mesh cơ sở cho nền đá

Nhấn:

```text
Shift + A → Mesh → Icosphere
```

Icosphere phù hợp để làm nền đá vì:

* Có hình dạng tròn tự nhiên.
* Là một khối kín, có thể sculpt được.
* Các mặt được phân bố tương đối đồng đều.
* Dễ kéo thành hình dạng đảo hoặc tảng đá.

Không nên sử dụng các mesh không có thể tích như:

* Plane.
* Circle.
* Grid.

Các mesh này không thích hợp để tạo một khối đảo đá kín bằng Sculpt Mode.

---

## 4. Chuyển sang Sculpt Mode

Chọn Icosphere, sau đó chuyển sang workspace:

```text
Sculpting
```

Blender sẽ tự động đưa đối tượng vào **Sculpt Mode**.

Trong giao diện Sculpting:

* Các sculpt brush xuất hiện trên thanh công cụ.
* Con trỏ brush thường hiển thị dưới dạng vòng tròn.
* Brush mặc định là **Draw Brush**.
* Các thiết lập như Radius và Strength nằm trên thanh Header hoặc trong phần Active Tool.

---

## 5. Làm quen với Draw Brush

### 5.1. Chức năng

**Draw Brush** đẩy bề mặt mesh ra ngoài theo hướng pháp tuyến.

Giữ và kéo chuột trái:

```text
Left Mouse Button
```

để thêm khối lượng lên bề mặt.

Draw Brush có thể được dùng để:

* Tạo gò đá.
* Tạo phần đất nhô lên.
* Mở rộng cạnh đảo.
* Xây dựng khu vực đặt nhà hoặc ngọn hải đăng.

---

### 5.2. Điều chỉnh kích thước brush

Nhấn:

```text
F
```

sau đó di chuyển chuột để thay đổi bán kính brush.

* Brush lớn: tác động lên vùng rộng, phù hợp tạo hình tổng thể.
* Brush nhỏ: tác động cục bộ, phù hợp chỉnh các chi tiết nhỏ.

---

### 5.3. Điều chỉnh Strength

Nhấn:

```text
Shift + F
```

sau đó di chuyển chuột để thay đổi cường độ brush.

Strength quyết định mức độ bề mặt bị biến dạng sau mỗi nét vẽ.

Strength mặc định của Draw Brush thường khoảng:

```text
0.5
```

Khi mới bắt đầu, nên sử dụng Strength vừa phải để tránh làm mesh biến dạng quá mạnh.

---

## 6. Vấn đề kéo giãn topology

Khi liên tục sculpt trên Icosphere ban đầu, Blender chỉ di chuyển các vertex đã có.

Blender chưa tự động tạo thêm:

* Vertex.
* Edge.
* Face.

Do đó, các polygon có thể bị kéo giãn và bề mặt trở nên:

* Góc cạnh.
* Thô.
* Không đồng đều.
* Khó tạo thêm chi tiết.

Quá trình này có thể hình dung như sau:

```text
Mesh ít polygon
      ↓
Liên tục dùng Draw Brush
      ↓
Các mặt bị kéo giãn
      ↓
Bề mặt trở nên thô và méo
```

Để giải quyết vấn đề này, bài học sử dụng **Dyntopo**.

---

## 7. Sử dụng Dyntopo

### 7.1. Dyntopo là gì?

**Dyntopo**, viết tắt của **Dynamic Topology**, là tính năng tự động thay đổi topology trong quá trình sculpt.

Khi brush tác động lên mesh, Dyntopo có thể:

* Chia nhỏ các mặt hiện có.
* Tạo thêm polygon mới.
* Phân bố lại topology quanh vùng đang sculpt.
* Hạn chế tình trạng kéo giãn các polygon lớn.

Nhờ đó, người dùng có thể tiếp tục thêm hình khối mà không cần chuyển sang Edit Mode để extrude thủ công.

---

### 7.2. Bật Dyntopo

Trong Sculpt Mode, bật:

```text
Dyntopo
```

Blender có thể hiển thị cảnh báo liên quan đến UV.

Trong bài tập này có thể bỏ qua cảnh báo vì nền đá chưa cần:

* UV Mapping chính xác.
* Texture đã được unwrap.
* Quy trình bake chi tiết.

> Khi thoát khỏi Sculpt Mode, Dyntopo có thể bị tắt. Khi quay lại Sculpt Mode, cần kiểm tra và bật lại nếu muốn tiếp tục sử dụng.

---

## 8. Thiết lập chi tiết của Dyntopo

Dyntopo có nhiều phương pháp xác định mật độ polygon.

### 8.1. Relative Detail

Với **Relative Detail**, mật độ polygon phụ thuộc vào mức độ zoom của viewport.

* Zoom gần: Blender tạo nhiều chi tiết hơn.
* Zoom xa: Blender tạo ít chi tiết hơn.

Điều này có thể gây khó hiểu cho người mới vì cùng một brush nhưng kết quả thay đổi theo khoảng cách quan sát.

---

### 8.2. Constant Detail

Với **Constant Detail**, kích thước polygon được giữ tương đối ổn định bất kể mức độ zoom.

Trong bài học, thiết lập được sử dụng là:

```text
Detailing Method: Constant Detail
Resolution: 3
```

Giá trị này tạo lượng polygon vừa đủ để:

* Sculpt dễ dàng.
* Không tạo quá nhiều chi tiết.
* Giữ scene tương đối nhẹ.
* Phù hợp với phong cách mô hình đơn giản.

---

### 8.3. Sự khác nhau giữa hai cách đo detail

| Phương pháp         | Quy tắc chi tiết                                           |
| ------------------- | ---------------------------------------------------------- |
| **Relative Detail** | Giá trị càng nhỏ thì polygon càng nhỏ và chi tiết càng cao |
| **Constant Detail** | Giá trị càng lớn thì mật độ chi tiết càng cao              |

Đây là điểm dễ gây nhầm lẫn vì hai phương pháp sử dụng giá trị theo chiều ngược nhau.

Trong bài này chỉ cần giữ:

```text
Constant Detail = 3
```

---

## 9. Các thao tác sculpt cơ bản

### 9.1. Thêm khối bằng Draw Brush

Giữ chuột trái và kéo:

```text
Left Mouse Button
```

Draw Brush sẽ đẩy bề mặt ra ngoài.

Sử dụng để:

* Mở rộng đảo.
* Tạo gò đất.
* Tạo nền cao cho công trình.
* Làm bề mặt đá gồ ghề.

---

### 9.2. Đào lõm bằng phím Ctrl

Giữ:

```text
Ctrl + Left Mouse Button
```

Brush sẽ thực hiện tác động ngược lại.

Đối với Draw Brush:

* Bình thường: đẩy bề mặt ra ngoài.
* Giữ `Ctrl`: kéo bề mặt vào trong.

Thao tác này hữu ích để:

* Tạo rãnh.
* Tạo vùng lõm.
* Thu nhỏ các phần quá phồng.
* Tạo sự phân chia giữa các gò đá.

Trong phần Direction của brush, tác động sẽ chuyển từ:

```text
Add → Subtract
```

---

### 9.3. Làm mịn bằng phím Shift

Giữ:

```text
Shift + Left Mouse Button
```

Blender tạm thời chuyển sang **Smooth Brush**, bất kể brush nào đang được chọn.

Smooth Brush sẽ:

* Làm mềm các chuyển tiếp.
* Giảm các điểm nhọn.
* Làm bề mặt bớt gồ ghề.
* Đưa các vertex xung quanh về vị trí trung bình.
* Giúp kích thước polygon đồng đều hơn khi dùng cùng Dyntopo.

Hiệu quả của Smooth Brush phụ thuộc vào mật độ topology:

* Polygon lớn: Smooth tác động mạnh hơn.
* Polygon nhỏ và dày: Smooth tác động nhẹ và cục bộ hơn.

Không nên làm mịn toàn bộ bề mặt vì đá tự nhiên vẫn cần một số vùng gồ ghề.

---

### 9.4. Kéo hình bằng Grab Brush

Chọn:

```text
Grab Brush
```

Grab Brush cho phép kéo trực tiếp một vùng của mesh theo chuyển động chuột.

Brush này phù hợp để:

* Kéo dài một cạnh đảo.
* Nâng hoặc hạ một khu vực.
* Thu hẹp hình dạng tổng thể.
* Đẩy phần chân đá xuống mặt biển.
* Loại bỏ các phần đá nhô ra không mong muốn.

Grab Brush chủ yếu di chuyển topology đã có thay vì tạo nhiều mặt mới.

Có thể hình dung vai trò của các brush như sau:

```text
Draw Brush  → Thêm hoặc bớt khối lượng
Grab Brush  → Kéo và thay đổi hình dáng tổng thể
Smooth      → Làm mềm và cân bằng bề mặt
```

---

## 10. Dyntopo và các loại brush

Không phải brush nào cũng sử dụng Dyntopo giống nhau.

Một số brush:

* Tạo thêm topology khi sculpt.
* Chia nhỏ các mặt quanh vùng tác động.
* Thay đổi số lượng polygon.

Một số brush khác, đặc biệt là các brush kéo hoặc biến dạng:

* Chủ yếu di chuyển các vertex đã có.
* Không làm thay đổi đáng kể số lượng polygon.
* Không tận dụng hoàn toàn việc chia nhỏ mesh của Dyntopo.

Trong bài này:

| Brush      | Vai trò                                  |
| ---------- | ---------------------------------------- |
| **Draw**   | Tạo thêm hình khối và tận dụng Dyntopo   |
| **Grab**   | Kéo, ép và điều chỉnh hình dáng tổng thể |
| **Smooth** | Làm mềm bề mặt và cân bằng vùng topology |

---

## 11. Quy trình tạo nền đảo đá

### Bước 1: Tạo phần chân đảo

Dùng Grab Brush với kích thước lớn để kéo toàn bộ phần chân đảo xuống dưới mặt phẳng.

Mục tiêu là để mesh đá giao với mặt biển, tránh xuất hiện khe hở giữa:

* Đảo đá.
* Mặt biển.

Các mesh có thể giao nhau trong Blender. Điều này hoàn toàn bình thường trong bài tập này.

---

### Bước 2: Loại bỏ phần đá nhô ra quá nhiều

Quan sát đảo từ nhiều góc.

Dùng Grab Brush để chỉnh những vùng:

* Nhô ra khỏi phần chân đảo.
* Tạo thành hốc treo không mong muốn.
* Trông giống đá lơ lửng.
* Không kết nối tự nhiên với mặt biển.

Bài tập hướng tới một hòn đảo có sườn dốc hoặc vách đứng nhưng không có nhiều phần đá overhang.

---

### Bước 3: Tạo khu vực đặt ngọn hải đăng

Chọn một vị trí trên đảo để đặt ngọn hải đăng.

Dùng:

* Draw Brush để nâng mặt đất.
* `Ctrl` với Draw Brush để hạ những vùng quá cao.
* Grab Brush để chỉnh vị trí và kích thước gò đất.
* `Shift` để làm phẳng tương đối phần mặt trên.

Khu vực này cần đủ bằng phẳng để đặt ngọn hải đăng nhưng vẫn hòa vào hình dáng tự nhiên của đảo.

---

### Bước 4: Tạo khu vực đặt các ngôi nhà

Ở một vị trí khác trên đảo:

1. Dùng Draw Brush tạo một gò đất lớn hơn.
2. Dùng Grab Brush kéo gò đất thành hình phù hợp.
3. Giữ `Shift` để làm mịn mặt trên.
4. Đảm bảo có đủ diện tích để bố trí các ngôi nhà.

Hai khu vực có thể có độ cao khác nhau để tạo bố cục thú vị hơn.

Ví dụ:

```text
                Khu vực đặt nhà
                       ▲
                  ____/ \____
             ___/           \__
 Mặt biển __/                  \____
               \       ___
                \_____/   \__
                     ▲
          Khu vực đặt hải đăng
```

---

### Bước 5: Tạo các vùng lõm và sườn đá

Dùng Draw Brush kết hợp với `Ctrl` để đào một số vùng lõm giữa các gò đất.

Điều này giúp nền đảo:

* Không giống một khối cầu bị ép dẹt.
* Có nhiều lớp địa hình.
* Có sườn và thung lũng nhỏ.
* Trông tự nhiên và thú vị hơn.

---

### Bước 6: Làm mịn có chọn lọc

Giữ `Shift` để làm mịn:

* Mặt bằng đặt nhà.
* Mặt bằng đặt ngọn hải đăng.
* Các vùng chuyển tiếp quá gắt.
* Những điểm bị kéo nhọn ngoài ý muốn.

Không cần làm mịn toàn bộ đảo. Một số vùng gồ ghề sẽ giúp duy trì cảm giác đá tự nhiên.

---

## 12. Sơ đồ quy trình tổng thể

```text
Ẩn nhà và ngọn hải đăng
          ↓
Chuyển về Object Mode
          ↓
Thêm Plane làm mặt biển
          ↓
Thêm Icosphere làm khối đá
          ↓
Chuyển sang Sculpting Workspace
          ↓
Dùng Draw Brush tạo hình ban đầu
          ↓
Bật Dyntopo
          ↓
Chọn Constant Detail, Resolution = 3
          ↓
Draw: thêm hoặc đào khối
          ↓
Grab: kéo hình dáng tổng thể
          ↓
Smooth: làm mềm bề mặt
          ↓
Tạo khu vực đặt nhà và hải đăng
          ↓
Kiểm tra khe hở và phần đá nhô ra
          ↓
Lưu file Blender
```

---

## 13. Phím tắt và công cụ quan trọng

| Thao tác                           | Phím hoặc công cụ     |
| ---------------------------------- | --------------------- |
| Thêm đối tượng                     | `Shift + A`           |
| Chuyển giữa các mode               | `Tab`                 |
| Phóng to đối tượng                 | `S`                   |
| Sculpt bằng brush hiện tại         | Giữ và kéo chuột trái |
| Thay đổi kích thước brush          | `F`                   |
| Thay đổi Strength                  | `Shift + F`           |
| Thực hiện tác động ngược của brush | Giữ `Ctrl`            |
| Tạm thời dùng Smooth Brush         | Giữ `Shift`           |
| Kéo một vùng mesh                  | Grab Brush            |
| Thêm hoặc đào khối                 | Draw Brush            |
| Tự động thêm topology              | Bật Dyntopo           |
| Giữ mật độ chi tiết ổn định        | Constant Detail       |

---

## 14. Lưu ý quan trọng

### 14.1. Không thêm mesh khi đang ở Edit Mode

Nếu thêm Plane hoặc Icosphere trong Edit Mode, mesh mới có thể bị ghép vào object đang chỉnh sửa.

Luôn kiểm tra:

```text
Object Mode
```

trước khi thêm object mới.

---

### 14.2. Dyntopo có thể phải bật lại

Khi chuyển khỏi Sculpt Mode, Dyntopo có thể bị vô hiệu hóa.

Sau khi quay lại Sculpt Mode, hãy kiểm tra trạng thái của Dyntopo trước khi tiếp tục sculpt.

---

### 14.3. Mesh giao nhau không phải lúc nào cũng là lỗi

Trong bài tập này, phần đảo đá có thể xuyên xuống dưới mặt biển.

Việc các mesh giao nhau không gây vấn đề vì phần nằm dưới mặt biển sẽ không xuất hiện trong góc camera chính.

---

### 14.4. Tránh tạo overhang không cần thiết

Các phần đá nhô ra phía ngoài có thể:

* Làm hình dạng đảo thiếu tự nhiên.
* Tạo khe hở với mặt biển.
* Gây khó khăn khi bố trí công trình.

Dùng Grab Brush để kéo chúng trở lại phần thân đảo.

---

### 14.5. Không cần sao chép chính xác hình dạng mẫu

Sculpting mang tính tự do, vì vậy mỗi nền đảo có thể có hình dáng khác nhau.

Điều quan trọng là nền đảo:

* Có hình khối thú vị.
* Có đủ không gian cho các công trình.
* Chìm xuống mặt biển.
* Không có nhiều khe hở hoặc phần đá lơ lửng.
* Trông hợp lý từ góc camera dự kiến.

---

## 15. Lỗi thường gặp

| Lỗi                                | Nguyên nhân                                | Cách xử lý                                 |
| ---------------------------------- | ------------------------------------------ | ------------------------------------------ |
| Plane bị nối với Lighthouse        | Thêm Plane khi đang ở Edit Mode            | Undo, chuyển sang Object Mode rồi thêm lại |
| Bề mặt bị kéo giãn, góc cạnh       | Mesh có quá ít polygon                     | Bật Dyntopo                                |
| Chi tiết thay đổi khi zoom         | Đang dùng Relative Detail                  | Chuyển sang Constant Detail                |
| Brush tác động quá mạnh            | Strength hoặc Radius quá lớn               | Giảm bằng `Shift + F` hoặc `F`             |
| Chân đảo không chạm mặt biển       | Chưa kéo mesh xuống đủ thấp                | Dùng Grab Brush kéo xuống                  |
| Đảo có các phần nhô ra như mái che | Grab Brush kéo mesh không đều              | Quan sát từ dưới và kéo phần nhô vào trong |
| Mặt đặt công trình quá gồ ghề      | Chưa sử dụng Smooth Brush                  | Giữ `Shift` và làm mịn có chọn lọc         |
| Không tạo thêm polygon khi sculpt  | Dyntopo chưa bật hoặc đang dùng Grab Brush | Bật lại Dyntopo và dùng Draw Brush         |

---

## 16. Bài thực hành

Hãy tạo một nền đảo đá bằng các yêu cầu sau:

1. Thêm một Plane lớn làm mặt biển.
2. Thêm một Icosphere làm khối đảo.
3. Chuyển sang Sculpt Mode.
4. Bật Dyntopo.
5. Chọn:

   * Detailing Method: `Constant Detail`
   * Resolution: `3`
6. Dùng Draw Brush để tạo thêm các gò đất.
7. Giữ `Ctrl` để đào một số vùng lõm.
8. Dùng Grab Brush để thay đổi hình dạng tổng thể.
9. Giữ `Shift` để làm mịn các khu vực đặt công trình.
10. Tạo:

    * Một khu vực đặt ngọn hải đăng.
    * Một khu vực đặt các ngôi nhà.
11. Kiểm tra phần chân đảo từ nhiều góc.
12. Đảm bảo đảo chìm xuống mặt biển và không có khe hở lớn.
13. Lưu file Blender để tiếp tục ở bài sau.

---

## 17. Checklist thực hành

* [ ] Đã đổi tên đối tượng thành `Lighthouse`.
* [ ] Đã tạm ẩn Lighthouse và collection chứa các ngôi nhà.
* [ ] Đã chuyển về Object Mode trước khi thêm mesh.
* [ ] Đã tạo Plane làm mặt biển.
* [ ] Đã tạo Icosphere làm nền đảo.
* [ ] Đã chuyển sang Sculpting Workspace.
* [ ] Đã thử Draw Brush.
* [ ] Đã biết thay đổi Radius bằng `F`.
* [ ] Đã biết thay đổi Strength bằng `Shift + F`.
* [ ] Đã bật Dyntopo.
* [ ] Đã chọn Constant Detail với Resolution bằng `3`.
* [ ] Đã dùng `Ctrl` để đào vào mesh.
* [ ] Đã dùng `Shift` để làm mịn.
* [ ] Đã dùng Grab Brush để kéo hình dáng tổng thể.
* [ ] Đã tạo khu vực cho ngọn hải đăng.
* [ ] Đã tạo khu vực cho các ngôi nhà.
* [ ] Đã kiểm tra và loại bỏ các phần đá nhô ra không mong muốn.
* [ ] Đã lưu file Blender.

---

## 18. Tóm tắt

Trong bài học này, một **Icosphere** được sử dụng làm mesh cơ sở để tạo nền đảo đá. Sau khi chuyển sang **Sculpt Mode**, Draw Brush được dùng để thêm và bớt khối lượng, Grab Brush dùng để kéo hình dạng tổng thể, còn Smooth Brush được kích hoạt tạm thời bằng phím `Shift` để làm mềm bề mặt.

Khi mesh bắt đầu bị kéo giãn do thiếu polygon, **Dyntopo** được bật để tự động tạo thêm topology. Thiết lập **Constant Detail** với Resolution bằng `3` giúp duy trì mật độ chi tiết ổn định khi thay đổi mức độ zoom.

Kết quả cuối cùng là một nền đảo đá có hình dạng tự nhiên, chìm xuống mặt biển và có các mặt bằng riêng để đặt ngọn hải đăng cùng những ngôi nhà.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
