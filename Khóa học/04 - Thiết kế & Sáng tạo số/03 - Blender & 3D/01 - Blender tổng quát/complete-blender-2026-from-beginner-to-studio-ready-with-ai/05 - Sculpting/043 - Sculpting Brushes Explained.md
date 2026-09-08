# 043 — Sculpting Brushes Explained

**Phần:** 05 — Sculpting
**Thời lượng:** 15:29
**Chủ đề:** Draw, Clay, Inflate, Crease, Smooth, Grab và Mask
**Loại bài:** lesson

---

## 1. Tóm tắt

Sculpting hiệu quả không đến từ việc sử dụng thật nhiều brush mà từ việc **chọn đúng công cụ cho đúng cấp độ hình khối**.

Một quy trình sculpt hợp lý thường phát triển model theo ba lớp:

```text
Primary Forms
Silhouette + tỷ lệ + khối lớn
        ↓
Secondary Forms
Cấu trúc và các bộ phận chính
        ↓
Detail Forms
Nếp gấp + rãnh + chi tiết nhỏ
```

Ở giai đoạn đầu, `Grab` và các brush tạo volume thường quan trọng hơn những brush tạo chi tiết. Khi form lớn đã ổn định, `Clay`, `Draw`, `Inflate`, `Crease` và các brush làm phẳng mới phát huy hiệu quả. `Smooth` được dùng để kiểm soát bề mặt, còn `Mask` giúp bảo vệ những vùng không muốn bị biến dạng.

Bài này tập trung vào tư duy sử dụng brush, kiểm soát `Radius`, `Strength`, inversion, smoothing, remesh và các công cụ hỗ trợ cần thiết trong một workflow sculpt cơ bản.

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

* phân biệt vai trò của các brush sculpting phổ biến;
* lựa chọn brush phù hợp cho primary, secondary và detail forms;
* điều chỉnh `Radius` và `Strength` theo kích thước form;
* sử dụng cơ chế invert để đảo hướng tác động của brush;
* sử dụng `Smooth` có kiểm soát thay vì làm mất cấu trúc;
* sử dụng `Grab` để chỉnh silhouette và tỷ lệ lớn;
* sử dụng `Clay`, `Draw` và `Inflate` để xây dựng volume;
* sử dụng `Crease` để tạo rãnh và chuyển tiếp sắc;
* sử dụng `Mask` để cô lập vùng cần sculpt;
* nhận biết khi nào topology bị kéo giãn và cần remesh;
* sử dụng một số công cụ như trim, filter và cloth simulation khi phù hợp.

---

## 3. Nguyên tắc quan trọng nhất: sculpt từ lớn đến nhỏ

Một lỗi phổ biến khi mới sculpt là bắt đầu tạo mắt, nếp nhăn, vết cắt hoặc các chi tiết nhỏ trước khi silhouette và tỷ lệ tổng thể ổn định.

Workflow nên đi theo thứ tự:

```text
Silhouette
    ↓
Tỷ lệ tổng thể
    ↓
Primary Forms
    ↓
Secondary Forms
    ↓
Planes và chuyển tiếp
    ↓
Detail Forms
```

Ví dụ khi sculpt một đầu người:

1. Xác định chiều cao, chiều rộng và silhouette của đầu.
2. Định hình hộp sọ và hàm.
3. Tạo các khối lớn của mắt, mũi, miệng và gò má.
4. Chỉnh các plane của khuôn mặt.
5. Chỉ sau đó mới thêm môi, mí mắt, nếp nhăn và chi tiết bề mặt.

Nếu primary form sai, detail tốt đến đâu cũng không cứu được model.

> Một model có silhouette tốt nhưng ít detail thường vẫn đọc được hình. Một model đầy detail nhưng silhouette sai thường vẫn trông sai.

---

## 4. Resolution và Remesh

Brush sculpting cần đủ vertex để biến dạng bề mặt.

Nếu mesh quá thưa:

```text
Brush
  ↓
Chỉ có ít vertex để di chuyển
  ↓
Bề mặt gãy
  ↓
Không giữ được form nhỏ
```

Nếu mesh quá dày:

```text
Quá nhiều polygon
      ↓
Viewport nặng
      ↓
Brush phản hồi chậm
      ↓
Workflow khó kiểm soát
```

Vì vậy cần tìm mức resolution vừa đủ cho cấp độ chi tiết hiện tại.

### 4.1. Khi nào cần remesh?

Remesh hữu ích khi:

* mesh ban đầu quá thưa;
* polygon bị kéo dài sau nhiều lần dùng `Grab`;
* một vùng có mật độ rất khác các vùng còn lại;
* vừa trim hoặc tạo hình học mới;
* muốn tiếp tục sculpt nhưng topology hiện tại không còn phân bố hợp lý.

Một dấu hiệu điển hình:

```text
Mesh đều
   ↓
Grab / kéo mạnh
   ↓
Polygon bị giãn
   ↓
Brush detail hoạt động kém
   ↓
Remesh
   ↓
Mật độ được phân bố lại
```

### 4.2. Kiểm soát độ phân giải

Khi thiết lập remesh, không nên chọn resolution cực cao ngay từ đầu.

Nguyên tắc là:

> Chỉ sử dụng lượng hình học cần thiết cho form đang sculpt.

Primary forms không cần topology cực dày. Khi hình khối lớn đã ổn định mới tăng khả năng mô tả các form nhỏ hơn.

Trong workflow sử dụng Voxel Remesh, Blender cung cấp các điều khiển để xem và thay đổi kích thước voxel trước khi thực hiện remesh. Phím tắt và cách thao tác cụ thể có thể phụ thuộc vào keymap và phiên bản Blender đang sử dụng.

---

## 5. Ba điều khiển cần thành phản xạ

Trong sculpting, người dùng liên tục thay đổi brush thay vì giữ một cấu hình cố định.

Ba thao tác quan trọng nhất là:

* `Radius`;
* `Strength`;
* inversion.

### 5.1. Radius và Strength

`Radius` xác định diện tích bề mặt chịu ảnh hưởng.

```text
Brush lớn
→ chỉnh silhouette
→ primary forms

Brush vừa
→ secondary forms

Brush nhỏ
→ detail forms
```

Với keymap mặc định phổ biến, `F` được dùng để điều chỉnh brush radius.

`Strength` xác định mức độ biến dạng của mỗi stroke.

Strength quá cao thường dẫn đến:

* surface bị gồ ghề;
* form thay đổi quá nhanh;
* khó kiểm soát;
* phải dùng Smooth liên tục để sửa lỗi.

Thay vì một stroke cực mạnh, thường nên sử dụng nhiều stroke nhẹ có chủ đích.

### 5.2. Invert

Nhiều sculpt brush hỗ trợ tác động ngược khi giữ `Ctrl`.

Ví dụ:

```text
Draw
→ đẩy bề mặt ra

Ctrl + Draw
→ đẩy bề mặt vào
```

Nguyên tắc invert xuất hiện rộng rãi trong các phần mềm sculpting và giúp một brush thực hiện cả hai hướng deformation mà không phải đổi công cụ liên tục.

---

## 6. Draw và Draw Sharp

`Draw` là một trong những brush cơ bản nhất.

Nó tác động trực tiếp lên bề mặt theo hướng normal và phù hợp để:

* thêm volume;
* tạo vùng lồi;
* tạo vùng lõm khi invert;
* dựng các chuyển tiếp tương đối mềm.

Có thể hình dung:

```text
Surface
────────────

Draw
     ↑
────╱╲────

Invert
     ↓
────╲╱────
```

`Draw` phù hợp với secondary forms khi cần bổ sung volume theo cách tương đối trực tiếp.

`Draw Sharp` có cùng tư tưởng nhưng tạo hiệu ứng sắc hơn. Nó phù hợp hơn cho:

* rãnh;
* đường lõm;
* đường chia form;
* các chi tiết cần cạnh rõ.

Không nên dùng `Draw Sharp` quá mạnh trên một mesh chưa đủ resolution vì rất dễ tạo artifact hoặc bề mặt gãy.

---

## 7. Clay và Clay Strips

Các brush thuộc nhóm `Clay` mô phỏng cảm giác đắp thêm đất sét lên model.

Khác với việc chỉ đẩy bề mặt đơn thuần, clay brush rất phù hợp để **xây dựng volume từng lớp**.

### 7.1. Clay

`Clay` hữu ích khi cần:

* bồi thêm volume;
* xây dựng cơ;
* tạo vùng má;
* thêm khối quanh mắt;
* xây dựng các plane lớn.

Thay vì cố hoàn thành form trong một stroke, có thể đặt nhiều lớp clay và sau đó xử lý chuyển tiếp.

### 7.2. Clay Strips

`Clay Strips` tạo cảm giác stroke rõ và có hướng hơn.

Brush này đặc biệt hữu ích cho việc dựng form vì người sculpt có thể quan sát được từng lớp vật liệu đang được thêm vào.

Ví dụ:

```text
Khối cơ bản
    ↓
Clay Strips
    ↓
Đắp từng plane
    ↓
Điều chỉnh chuyển tiếp
    ↓
Smooth nhẹ khi cần
```

`Clay Strips` thường hiệu quả khi dựng:

* gò má;
* hàm;
* cơ bắp;
* hốc mắt;
* cấu trúc xương;
* các vùng chuyển tiếp lớn.

---

## 8. Inflate và Layer

`Inflate` làm một vùng bề mặt phồng lên, tạo cảm giác giống như vật liệu đang nở ra từ bên trong.

Nó phù hợp khi cần:

* làm đầy một vùng;
* tạo volume tròn;
* làm dày môi;
* làm phồng mô mềm;
* tăng thể tích cho những form nhỏ.

`Inflate` cần được dùng thận trọng vì strength quá cao có thể tạo các vùng phồng thiếu tự nhiên.

`Layer` có cách tiếp cận khác: nó xây dựng bề mặt theo một mức độ tương đối đồng đều. Điều này hữu ích khi muốn kiểm soát độ cao của một lớp deformation thay vì liên tục đẩy bề mặt lên không giới hạn.

Hai brush có thể được hiểu như:

| Brush     | Mục đích chính                             |
| --------- | ------------------------------------------ |
| `Inflate` | Làm vùng bề mặt phồng ra                   |
| `Layer`   | Xây dựng một lớp volume tương đối đồng đều |

---

## 9. Crease và Pinch

`Crease` là brush quan trọng để tạo các rãnh hẹp và chuyển tiếp sắc.

Nó thường được sử dụng cho:

* nếp nhăn;
* khóe miệng;
* đường giữa môi;
* vùng quanh mí mắt;
* rãnh giữa các form;
* các nếp gấp.

Ví dụ:

```text
Hai vùng volume
     ↓
   Crease
     ↓
Đường phân tách rõ hơn
```

Không nên coi `Crease` là công cụ để “vẽ detail” lên bất kỳ vị trí nào. Một crease hợp lý thường xuất hiện tại nơi cấu trúc thật sự cần chuyển tiếp hoặc bị nén.

`Pinch` lại có xu hướng kéo các vertex về gần nhau hơn. Nó hữu ích để:

* gom một ridge;
* làm cạnh hẹp hơn;
* tăng độ sắc của một cấu trúc;
* kiểm soát vùng sau khi tạo rãnh.

`Crease` và `Pinch` có thể phối hợp tốt khi cần kiểm soát các vùng có cạnh hoặc rãnh rõ.

---

## 10. Flatten, Scrape và Fill

Một sculpt tốt không chỉ gồm các bề mặt tròn. Nhiều đối tượng được tạo từ những plane có hướng rõ ràng.

Các brush làm phẳng giúp kiểm soát điều này.

### 10.1. Flatten và Scrape

`Flatten` làm bề mặt tiến về một mặt phẳng.

Nó phù hợp khi:

* xây dựng facial planes;
* chỉnh bề mặt cứng;
* phá cảm giác “phồng như bóng”;
* tạo các chuyển tiếp phẳng.

`Scrape` cũng có thể được dùng để bào bớt những vùng nhô lên và tạo surface phẳng hơn.

Các công cụ này rất hữu ích khi sculpt:

* khuôn mặt;
* đá;
* xương;
* hard-surface organic;
* các form có mặt phẳng rõ.

### 10.2. Fill và biến thể

Các brush kiểu `Fill` tập trung nhiều hơn vào những vùng lõm.

Có thể hình dung:

```text
Surface lõm
    ↓
Fill
    ↓
Lấp dần vùng lõm
```

Chúng hữu ích khi cần sửa các hốc không mong muốn hoặc cân bằng surface mà không muốn xử lý toàn bộ model.

---

## 11. Smooth không phải công cụ sửa mọi lỗi

Giữ `Shift` trong quá trình sculpt thường cho phép truy cập nhanh thao tác smoothing.

`Smooth` làm giảm những thay đổi đột ngột trên bề mặt và giúp chuyển tiếp giữa các form mềm hơn.

Nhưng Smooth có một rủi ro lớn:

```text
Surface có cấu trúc
      ↓
Smooth quá nhiều
      ↓
Planes biến mất
      ↓
Form bị mềm
      ↓
Model mất đặc trưng
```

Vì vậy, không nên hình thành workflow:

```text
Sculpt mạnh
→ bề mặt xấu
→ Smooth
→ Sculpt mạnh
→ Smooth
→ Smooth
→ Smooth
```

Một workflow tốt hơn:

```text
Stroke có kiểm soát
      ↓
Xác định vùng thực sự cần làm mềm
      ↓
Smooth nhẹ
      ↓
Giữ lại ridge và plane quan trọng
```

`Smooth` nên **kết nối các form**, không xóa toàn bộ form.

---

## 12. Grab và các brush chỉnh silhouette

`Grab` là một trong những brush quan trọng nhất trong toàn bộ quá trình sculpt.

Nó dịch chuyển một vùng geometry và đặc biệt hiệu quả khi chỉnh:

* silhouette;
* tỷ lệ;
* độ rộng;
* độ dài;
* vị trí các khối lớn.

Ví dụ khi sculpt một đầu:

```text
Grab lớn
   ↓
Chỉnh hộp sọ
   ↓
Chỉnh hàm
   ↓
Chỉnh chiều rộng khuôn mặt
   ↓
Sau đó mới tạo mắt, mũi, miệng
```

Đây là lý do `Grab` thường được sử dụng rất nhiều trong primary forms.

Nếu silhouette sai, hãy quay lại `Grab` thay vì cố che lỗi bằng các brush detail.

Ngoài Grab, Blender còn có những brush deformation khác cho các kiểu kéo, xoắn, trượt hoặc uốn geometry. Những brush này có thể hữu ích cho:

* ngón tay;
* xúc tu;
* chân nhỏ;
* vật thể mềm;
* các phần dài cần uốn cong.

Khi dùng chúng, radius phải tương ứng với vùng cần tác động. Radius quá lớn có thể kéo theo cả geometry lân cận và phá form đã hoàn thành.

---

## 13. Relax và xử lý topology bị kéo giãn

Sau nhiều lần sử dụng Grab hoặc các brush deformation mạnh, polygon có thể bị kéo dài.

Điều này gây ra:

* mật độ không đều;
* detail khó tạo;
* stroke không ổn định;
* surface dễ xuất hiện artifact.

Có hai hướng xử lý chính:

```text
Topology bắt đầu không đều
          ↓
  ┌───────┴────────┐
  ↓                ↓
Relax            Remesh
  ↓                ↓
Điều hòa         Tạo lại
phân bố mesh     topology
```

Các brush hoặc công cụ relax có thể giúp cải thiện phân bố mesh trong một số tình huống mà không thay đổi mạnh hình dạng.

Khi deformation đã quá lớn, remesh thường là giải pháp rõ ràng hơn.

---

## 14. Mask

`Mask` cho phép đánh dấu vùng không được các sculpt brush thông thường tác động.

Ví dụ:

```text
Khuôn mặt
    ↓
Mask vùng mắt
    ↓
Grab vùng má
    ↓
Mắt được bảo vệ
```

Mask được hiển thị trực quan trên model, thường dưới dạng vùng tối.

Đây là công cụ cực kỳ hữu ích khi cần:

* bảo vệ một form đã hoàn thành;
* chỉnh vùng sát một chi tiết quan trọng;
* chỉ deformation một phần của model;
* chuẩn bị vùng cho filter;
* cô lập khu vực trước các thao tác lớn.

### 14.1. Clear và Invert Mask

Hai thao tác cần nắm là:

**Clear Mask**

Xóa vùng mask để toàn bộ mesh có thể tiếp tục được tác động.

**Invert Mask**

Đảo trạng thái:

```text
Đang bảo vệ A
      ↓
Invert
      ↓
A được tác động
Phần còn lại được bảo vệ
```

Invert đặc biệt hữu ích khi vừa chọn được chính xác một vùng và muốn deformation chỉ vùng đó.

### 14.2. Các kiểu tạo Mask

Ngoài việc vẽ mask bằng brush, Blender còn cung cấp những hình thức lựa chọn vùng như:

* box;
* lasso;
* line;
* polyline.

Chúng hữu ích khi muốn cô lập nhanh một vùng lớn thay vì tô thủ công từng stroke.

---

## 15. Hide và Face Sets

Mask và Hide có mục đích khác nhau.

```text
Mask
→ geometry vẫn hiển thị
→ nhưng được bảo vệ khỏi deformation

Hide
→ geometry tạm thời không hiển thị
```

Hide hữu ích khi một phần model che khu vực cần thao tác.

Sau khi hoàn thành có thể unhide để đưa geometry trở lại.

`Face Sets` cho phép chia bề mặt sculpt thành các vùng trực quan khác nhau. Chúng có thể hỗ trợ:

* cô lập khu vực;
* mask theo vùng;
* quản lý những phần phức tạp của model;
* thao tác chọn nhanh hơn.

Ví dụ một nhân vật có thể được chia thành những vùng như:

```text
Đầu
Mặt
Tai
Cổ
Thân
Tay
```

Face Sets không nhất thiết tương đương với topology riêng biệt; chúng chủ yếu hỗ trợ việc tổ chức và thao tác trong quá trình sculpt.

---

## 16. Trim và Project

Một số sculpt tool có khả năng thay đổi silhouette rất mạnh mà không cần kéo geometry từng chút một.

`Box Trim` và các công cụ trim tương tự có thể hoạt động giống như thao tác cắt.

Chúng phù hợp để:

* loại bỏ một phần mesh;
* tạo silhouette lớn nhanh;
* tạo hốc hoặc mặt cắt;
* blockout các hình dạng phức tạp.

Sau những thao tác thay đổi hình học lớn, mesh có thể cần được remesh trước khi sculpt tiếp.

`Line Project` có cách hoạt động khác với trim. Thay vì đơn giản cắt bỏ geometry, nó có thể ép hoặc project một vùng theo đường xác định.

Sau các deformation mạnh, cần kiểm tra topology để bảo đảm không xuất hiện những vùng geometry chồng chéo hoặc bị nén quá mức.

---

## 17. Mesh Filter và Cloth Filter

Không phải mọi hiệu ứng đều cần được tạo bằng từng stroke brush.

Blender cung cấp filter để tác động lên một vùng lớn hoặc toàn bộ mesh.

### 17.1. Mesh Filter

`Mesh Filter` có thể áp dụng những biến đổi đồng loạt như:

* smooth;
* inflate;
* deformation bề mặt khác tùy chế độ.

Workflow hiệu quả là kết hợp filter với Mask:

```text
Mask vùng cần bảo vệ
        ↓
Mesh Filter
        ↓
Filter tác động lên phần còn lại
```

Nhờ vậy có thể tạo một hiệu ứng lớn trong thời gian ngắn mà vẫn kiểm soát được khu vực chịu tác động.

### 17.2. Cloth Filter

`Cloth Filter` mô phỏng hành vi mềm giống vật liệu vải.

Nó phù hợp để tạo nhanh:

* nếp vải;
* đệm;
* sofa;
* bề mặt mềm;
* vùng bị kéo bởi gravity;
* hiệu ứng phồng.

Có thể mask một vùng trước khi chạy simulation để tạo điểm neo.

Ví dụ:

```text
Mask vùng cố định
      ↓
Cloth Filter
      ↓
Gravity / Inflate
      ↓
Phần tự do biến dạng
      ↓
Vùng mask giữ nguyên
```

Cloth Filter rất mạnh nhưng nên được sử dụng như công cụ xây dựng form, sau đó tiếp tục chỉnh bằng sculpt brush nếu cần.

---

## 18. Paint và Color Filter trong Sculpt Mode

Sculpt Mode không chỉ làm việc với hình dạng.

Blender còn hỗ trợ các công cụ paint trên dữ liệu màu của mesh.

Khi paint trực tiếp lên mesh, chất lượng chi tiết phụ thuộc vào cách dữ liệu màu được lưu và cấu trúc geometry của workflow đang sử dụng.

Có thể:

* chọn màu;
* sử dụng paint brush;
* tạo vùng màu;
* chỉnh màu bằng filter;
* mask dựa trên một số thuộc tính bề mặt trong các workflow phù hợp.

`Color Filter` có thể thay đổi màu trên một vùng rộng với các hiệu ứng như điều chỉnh màu hoặc tạo chuyển tiếp.

Tuy nhiên, paint là một workflow riêng. Khi đang học sculpting cơ bản, ưu tiên vẫn nên là **hình khối trước màu sắc**.

---

## 19. Chọn brush theo cấp độ hình khối

Không cần sử dụng mọi brush trong một model.

Một bộ brush nhỏ nhưng được sử dụng đúng mục đích thường hiệu quả hơn.

| Cấp độ          | Brush thường hữu ích                                  | Mục tiêu                    |
| --------------- | ----------------------------------------------------- | --------------------------- |
| Primary Forms   | `Grab`, `Draw`, `Clay`                                | Silhouette, tỷ lệ, khối lớn |
| Secondary Forms | `Clay Strips`, `Draw`, `Inflate`, `Flatten`, `Scrape` | Cấu trúc và chuyển tiếp     |
| Detail Forms    | `Crease`, `Draw Sharp`, `Pinch`                       | Rãnh, nếp và cạnh nhỏ       |
| Surface Control | `Smooth`, `Relax`                                     | Điều hòa bề mặt và mesh     |
| Isolation       | `Mask`, Hide, Face Sets                               | Bảo vệ và cô lập vùng       |
| Global Effects  | Mesh Filter, Cloth Filter                             | Tác động diện rộng          |

Đây không phải quy tắc cứng. Một brush có thể được sử dụng ở nhiều giai đoạn.

Điểm quan trọng là **kích thước và mục tiêu của stroke phải tương ứng với cấp độ form đang xử lý**.

---

## 20. Workflow sculpt một object từ sphere

Một quy trình cơ bản có thể bắt đầu từ sphere.

### 20.1. Giai đoạn Primary Forms

Mục tiêu duy nhất là silhouette và tỷ lệ.

Sử dụng:

* `Grab`;
* brush lớn;
* strength vừa phải.

Quan sát object từ nhiều hướng.

Không tạo:

* nếp nhăn;
* rãnh nhỏ;
* texture bề mặt;
* detail trang trí.

Checkpoint:

> Model phải đọc được hình dạng tổng thể chỉ bằng silhouette.

### 20.2. Giai đoạn Secondary Forms

Khi silhouette đã ổn:

1. Kiểm tra mật độ mesh.
2. Remesh nếu cần.
3. Dùng `Clay` hoặc `Clay Strips` xây dựng các khối.
4. Dùng `Draw` và `Inflate` bổ sung volume.
5. Dùng `Flatten` hoặc `Scrape` kiểm soát plane.
6. Smooth nhẹ các vùng chuyển tiếp.

Checkpoint:

> Các bộ phận chính phải đọc được rõ ngay cả khi chưa có chi tiết nhỏ.

### 20.3. Giai đoạn Detail Forms

Chỉ bắt đầu detail khi primary và secondary forms đã ổn định.

Có thể sử dụng:

* `Crease`;
* `Draw Sharp`;
* `Pinch`;
* brush radius nhỏ.

Detail phải đi theo form có sẵn chứ không thay thế cho form.

---

## 21. Khi nào nên dùng Mask?

Ví dụ đang sculpt một khuôn mặt và vùng mắt đã tương đối ổn định.

Nếu tiếp tục Grab vùng má với radius lớn, mắt có thể bị kéo theo.

Workflow tốt hơn:

```text
Mask mắt
   ↓
Grab má
   ↓
Chỉnh gò má và hàm
   ↓
Clear Mask
```

Mask đặc biệt hữu ích trước:

* Grab lớn;
* deformation mạnh;
* Mesh Filter;
* Cloth Filter;
* thao tác chỉ muốn ảnh hưởng tới một khu vực.

Không nên dùng mask cho mọi stroke nhỏ vì điều đó có thể làm workflow chậm và phức tạp không cần thiết.

---

## 22. Lỗi thường gặp

**Hiện tượng:** Model rất chi tiết nhưng nhìn tổng thể vẫn sai.
**Nguyên nhân:** Detail được tạo trước khi silhouette và primary forms hoàn chỉnh.
**Cách xử lý:** Giảm tập trung vào detail, sử dụng `Grab` lớn và đánh giá lại silhouette.

**Hiện tượng:** Surface liên tục bị lổn nhổn.
**Nguyên nhân:** Brush strength quá mạnh hoặc sử dụng brush nhỏ quá sớm.
**Cách xử lý:** Giảm strength, tăng radius và xây dựng form bằng nhiều stroke nhẹ.

**Hiện tượng:** Model trở nên quá mềm sau một thời gian sculpt.
**Nguyên nhân:** Lạm dụng `Smooth`.
**Cách xử lý:** Chỉ smooth vùng chuyển tiếp cần thiết và giữ lại ridge, crease và plane quan trọng.

**Hiện tượng:** Detail bị kéo dài hoặc vỡ.
**Nguyên nhân:** Topology ở khu vực đó đã bị stretch.
**Cách xử lý:** Kiểm tra mật độ mesh và remesh khi cần.

**Hiện tượng:** Grab làm biến dạng cả khu vực không mong muốn.
**Nguyên nhân:** Radius quá lớn hoặc chưa cô lập vùng.
**Cách xử lý:** Giảm radius hoặc sử dụng `Mask`.

**Hiện tượng:** Crease tạo rãnh quá sâu và giả.
**Nguyên nhân:** Strength quá cao hoặc cố tạo form bằng crease thay vì xây volume trước.
**Cách xử lý:** Giảm strength và xây primary/secondary form trước khi thêm crease.

**Hiện tượng:** Mesh trở nên quá nặng.
**Nguyên nhân:** Tăng resolution quá sớm.
**Cách xử lý:** Chỉ tăng mật độ khi cấp độ chi tiết hiện tại thực sự yêu cầu.

---

## 23. Best practices

* Luôn kiểm tra silhouette trước khi thêm detail.
* Dùng brush lớn lâu hơn mức bản năng ban đầu của người mới.
* Ưu tiên `Grab` để sửa tỷ lệ thay vì cố bồi thêm volume để che lỗi.
* Dùng `Clay` hoặc `Clay Strips` để xây volume theo lớp.
* Dùng `Inflate` có kiểm soát cho mô mềm và vùng cần phồng.
* Dùng `Crease` sau khi hai phía của form đã tồn tại.
* Giảm `Strength` thay vì cố sửa một stroke quá mạnh bằng Smooth.
* Không smooth toàn bộ surface một cách vô thức.
* Mask các vùng quan trọng trước deformation lớn.
* Remesh khi topology thực sự bị kéo giãn, không phải sau mọi stroke.
* Thường xuyên xoay model và kiểm tra nhiều góc nhìn.
* Không cố sử dụng mọi brush chỉ vì chúng tồn tại.
* Xây dựng một bộ brush quen thuộc rồi mở rộng dần khi gặp nhu cầu cụ thể.

---

## 24. Bài thực hành

Sculpt một object từ sphere bằng ba cấp độ hình khối.

**Giai đoạn 1 — Silhouette**

* Sử dụng chủ yếu `Grab`.
* Chỉnh tỷ lệ và silhouette.
* Không tạo detail.
* Quan sát model từ trước, bên và góc ba phần tư.

**Giai đoạn 2 — Form lớn**

* Kiểm tra topology và remesh nếu cần.
* Dùng `Clay`, `Clay Strips`, `Draw` hoặc `Inflate`.
* Tạo ít nhất ba vùng volume lớn.
* Dùng `Flatten` hoặc `Scrape` nếu cần tạo plane.
* Chỉ sử dụng `Smooth` trên vùng chuyển tiếp cần thiết.

**Giai đoạn 3 — Detail**

* Tạo một số rãnh bằng `Crease` hoặc `Draw Sharp`.
* Sử dụng radius nhỏ hơn hai giai đoạn trước.
* Mask một vùng quan trọng trước khi deformation khu vực lân cận.
* Kiểm tra xem detail có tuân theo form lớn hay không.

**Kết quả mong đợi:**

```text
Silhouette rõ
    ↓
Primary forms ổn định
    ↓
Secondary forms có cấu trúc
    ↓
Detail hỗ trợ hình khối
```

Không đánh giá bài thực hành dựa trên số lượng detail. Tiêu chí quan trọng hơn là form được phát triển đúng thứ tự.

---

## 25. Checklist hoàn thành

* [ ] Phân biệt được primary, secondary và detail forms.
* [ ] Không đi vào detail khi silhouette chưa ổn định.
* [ ] Biết dùng `Grab` để sửa tỷ lệ và form lớn.
* [ ] Biết dùng `Draw` để thêm hoặc bớt volume.
* [ ] Biết mục đích của `Clay` và `Clay Strips`.
* [ ] Biết khi nào `Inflate` phù hợp.
* [ ] Biết dùng `Crease` cho rãnh và chuyển tiếp sắc.
* [ ] Không lạm dụng `Smooth`.
* [ ] Điều chỉnh radius theo kích thước form.
* [ ] Điều chỉnh strength thay vì kéo hoặc đẩy quá mạnh.
* [ ] Biết sử dụng inversion khi sculpt.
* [ ] Biết nhận diện mesh bị stretch.
* [ ] Biết khi nào cần remesh.
* [ ] Dùng `Mask` để bảo vệ vùng cần giữ.
* [ ] Phân biệt được Mask và Hide.
* [ ] Biết mục đích cơ bản của Mesh Filter và Cloth Filter.
* [ ] Kiểm tra model từ nhiều góc nhìn trong quá trình sculpt.

---

## 26. Tổng kết

Sculpting không phải quá trình chọn ngẫu nhiên nhiều brush để tạo chi tiết. Một workflow tốt bắt đầu bằng silhouette và tỷ lệ, sau đó mới xây dựng volume, cấu trúc và cuối cùng là detail.

`Grab` đóng vai trò quan trọng ở giai đoạn primary forms. `Clay`, `Draw`, `Inflate`, `Flatten` và `Scrape` giúp xây dựng secondary forms. `Crease`, `Draw Sharp` và `Pinch` phù hợp hơn khi form đã đủ ổn định để nhận detail.

Trong toàn bộ quá trình, `Smooth`, `Mask` và `Remesh` đóng vai trò kiểm soát:

```text
Grab
→ kiểm soát silhouette

Clay / Draw / Inflate
→ xây dựng volume

Flatten / Scrape
→ kiểm soát plane

Crease / Pinch
→ tạo detail có cấu trúc

Smooth
→ kiểm soát chuyển tiếp

Mask
→ kiểm soát vùng ảnh hưởng

Remesh
→ kiểm soát mật độ topology
```

Nguyên tắc quan trọng nhất là luôn sculpt từ **lớn đến nhỏ**. Khi primary form đúng, secondary form rõ và topology đủ tốt, detail sẽ trở thành bước hoàn thiện thay vì công cụ dùng để che giấu những vấn đề của hình khối.
