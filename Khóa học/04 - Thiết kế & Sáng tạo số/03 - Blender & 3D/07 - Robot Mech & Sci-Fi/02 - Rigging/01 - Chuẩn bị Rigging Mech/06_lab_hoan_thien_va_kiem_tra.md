# Bài 06 — Lab: Hoàn thiện model robot Mech trước Rigging

**Loại bài:** Lab  
**Sản phẩm:** Một tệp `.blend` đã chuẩn hóa mesh, phân tách cụm chuyển động và tổ chức scene

## 1. Tổng quan

Một robot Mech được xem là **sẵn sàng chuyển sang giai đoạn rigging** khi các khối cần chuyển động độc lập có thể được xác định riêng, các chi tiết gắn cứng có thể được xử lý theo cụm, dữ liệu Mesh phù hợp, ngoại hình không đổi ngoài dự kiến và `Outliner` có tên rõ ràng. Bài lab tổng hợp các thao tác chuẩn bị này thành quy trình kiểm tra đầu ra.

Phạm vi bài thực hành **không bao gồm** tạo Armature, gán xương, tạo ràng buộc hoặc làm walk cycle.

## 2. Mục tiêu và chuẩn bị

Người học sẽ:

- Chuẩn hóa các modifier cần thiết mà không làm tăng mesh vô lý.
- Chuyển Curve sang Mesh và Join các mảng đầu/thân cố định.
- Tách object trái/phải; giữ các khớp phải chuyển động độc lập.
- Tổ chức từng cụm đùi, cẳng chân, mắt cá và bàn chân.
- Hoàn thành danh sách kiểm tra và lưu file `.blend` sạch.

**Chuẩn bị:** Mô hình Mech có đầu, cổ, thân, hai chân, các khớp, giáp, ống hoặc chi tiết cơ khí; Blender có thể mở và chỉnh sửa file; một bản sao an toàn của file gốc.

## 3. Quy trình thực hiện

### 3.1. Giai đoạn A — Chuẩn hóa modifier

1. Sao lưu file trước khi thao tác.
2. Chọn các đối tượng còn `Mirror Modifier`, kiểm tra đường đối xứng rồi **Apply Mirror** trong `Object Mode`.
3. Với những mảng giáp cần độ dày thực, kiểm tra stack và **Apply Solidify** phù hợp.
4. Giữ `Bevel` chưa Apply ở những nơi không cần cố định mesh bo cạnh.
5. So sánh ngoại hình ở `Solid` và `Rendered`/`Material Preview` sau mỗi nhóm thao tác.

**Checkpoint A:** Các thành phần đối xứng cần tách đều đã tồn tại thành hình học thực; mảng giáp không mất độ dày; cạnh bo giữ hình dạng mong muốn.

### 3.2. Giai đoạn B — Gộp và tách đúng chức năng

1. Join các phần đầu cố định thành cụm `Head` bằng `Ctrl + J`.
2. Convert ống Curve thành Mesh qua `Object > Convert > Mesh`.
3. Join các phần thân và ống gắn cứng thành `Body`.
4. Với các object có cả bên trái và bên phải, vào `Edit Mode`, chọn một phía trong `Wireframe`, dùng `P > Selection`.
5. Nếu có nhiều object đối xứng, dùng Multi-Object Edit Mode để tách đồng loạt, sau đó kiểm tra từng cặp.
6. Giữ riêng các khớp hông cần xoay độc lập.
7. Join chi tiết gắn cứng với đùi, giáp và bu lông với cẳng chân tương ứng.
8. Ở mắt cá, dùng `L` để chọn đảo Mesh liên kết nếu phù hợp, `P > Selection` để tách, rồi Join vào đúng cụm quay.

**Checkpoint B:** Các cụm chuyển động độc lập không bị Join nhầm. Hai chân có thể chọn theo từng phía; vị trí các mảnh không bị thay đổi ngoài ý muốn.

### 3.3. Giai đoạn C — Tổ chức Outliner

1. Đưa đèn vào collection `Lights_and_Camera` bằng `M > New Collection`.
2. Đưa hình tham khảo vào `Reference_Images` và ẩn collection khi không cần xem.
3. Đặt tên các object chính bằng `F2`: `Head`, `Neck`, `Body`, cặp khớp hông, đùi, cẳng chân, mắt cá và bàn chân.
4. Xác nhận tên trái/phải dùng cùng một quy ước.
5. Dùng `Alt + H` để hiện lại các object tạm ẩn.
6. Kiểm tra những object bất thường, chỉ xóa Mesh rỗng sau khi đã xác minh.
7. Lưu kết quả bằng `Ctrl + S`.

**Checkpoint C:** `Outliner` thể hiện cấu trúc mô hình rõ ràng; có thể xác định cụm cần rigging mà không phải bấm thử nhiều object.

## 4. Kiểm tra kết quả

Sử dụng bảng sau để đánh giá file trước khi chuyển cho người rigging:

| Nội dung kiểm tra | Đạt khi nào |
| --- | --- |
| `Mirror` | Các phần cần tách đã Apply và có mesh thực ở hai bên |
| `Solidify` | Giáp cần độ dày thực đã xử lý phù hợp, ngoại hình ổn |
| `Bevel` | Không bị Apply hàng loạt ngoài ý muốn |
| Curve ống dẫn | Đã chuyển thành Mesh nếu gộp với thân |
| Đầu và thân | Các chi tiết gắn cứng đã Join thành cụm hợp lý |
| Khớp hông | Giữ riêng những phần phải xoay độc lập |
| Hai chân | Có thể chọn các cụm trái/phải riêng biệt |
| Đùi / cẳng chân | Chi tiết gắn cứng đã Join đúng cụm của nó |
| Mắt cá / bàn chân | Tách/Join dựa trên logic trục quay |
| Tên object | Rõ chức năng, rõ bên và không mâu thuẫn |
| Collections | Đèn/camera và ảnh tham khảo được quản lý riêng |
| Hiển thị | Robot đầy đủ khi bật lại object cần xem; vật liệu đúng |

## 5. Debug khi kiểm tra không đạt

**Vấn đề 1 — Join làm mất hình hoặc thay đổi cạnh bo.** Kiểm tra modifier stack của active object, đặc biệt là những trường hợp một mảnh còn Mirror trong khi mảnh khác không còn Mirror. Quay lại bản sao để chuẩn hóa rồi Join lại.

**Vấn đề 2 — Một bên chân thiếu hình học sau Separate.** Vào `Edit Mode`, chuyển `Wireframe`, kiểm tra các vùng bị che khuất. Dùng Box Select cẩn thận, tránh bỏ sót đỉnh phía sau hoặc chọn nhầm bên.

**Vấn đề 3 — Không thể Join ống dẫn vào thân.** Kiểm tra object ống có còn là Curve không. Nếu có, chuyển bằng `Object > Convert > Mesh` rồi Join.

**Vấn đề 4 — Một khớp không thể chọn riêng.** Kiểm tra nó đã Separate khỏi object hiện tại chưa. Nếu đã Join nhầm, xác định vùng mesh hoặc dùng cách tách phù hợp trên bản sao để khôi phục cấu trúc.

**Vấn đề 5 — Object lạ không có hình.** Kiểm tra dữ liệu mesh trong `Edit Mode`. Chỉ xóa nếu thực sự rỗng và không liên quan tới hình robot.

## 6. Deliverable và tiêu chí hoàn thành

**Cần nộp:**

- Một file `.blend` cuối cùng với các cụm robot đã chuẩn bị cho rigging.
- Một ảnh chụp tổng thể robot ở góc nhìn dễ quan sát.
- Một ảnh chụp `Outliner` thể hiện tên các object chính và các collection.
- Một bản checklist ngắn xác nhận những mục đã đạt và những mục cần rà soát thêm.

**Definition of Done:** Người khác mở file có thể nhận biết từng cụm chuyển động, lựa chọn độc lập các chi tiết cần rigging, không gặp sự cố hiển thị lớn do Apply/Join/Separate và không phải đoán tên object chính.

## 7. Checklist tự đánh giá

- [ ] Đã lưu bản sao trước khi chỉnh sửa.
- [ ] Đã Apply Mirror trên những nhóm cần tách trái/phải.
- [ ] Đã xử lý Solidify của giáp khi cần hình học có độ dày.
- [ ] Không Apply Bevel hàng loạt ngoài kế hoạch.
- [ ] Đã Convert Curve thành Mesh trước khi Join vào thân.
- [ ] Đã Join đầu và các phần thân gắn cứng.
- [ ] Đã tách trái/phải ở khớp và các cụm chân.
- [ ] Đã giữ riêng bộ phận có trục quay độc lập.
- [ ] Đã nhóm các chi tiết gắn cứng theo đùi, cẳng chân và mắt cá phù hợp.
- [ ] Đã đặt tên, quản lý collections, kiểm tra object rỗng và lưu file.

## 8. Câu hỏi ôn tập

### Câu 1

Vì sao việc chuẩn hóa `Mirror` phải diễn ra trước khi tách hai chân?

A. Vì `Mirror` giúp đổi tên object.  
B. Vì `Mirror` chỉ hoạt động khi không có vật liệu.  
C. Vì cần hình học thực ở cả hai phía để chọn và Separate.  
D. Vì bước đầu tiên của rigging luôn là render.

**Đáp án:** C  
**Giải thích:** Khi hai phía đã thành mesh thực, người học có thể chọn và tách chúng thành các object độc lập.

### Câu 2

Một ống dẫn còn là Curve, nhưng cần được Join với thân Mesh. Nên làm gì?

A. Convert ống thành Mesh rồi Join.  
B. Xóa thân và giữ ống.  
C. Chỉ đổi tên ống.  
D. Apply Bevel cho tất cả đèn.

**Đáp án:** A  
**Giải thích:** Đưa Curve về Mesh tạo ra kiểu object phù hợp cho thao tác Join với thân robot.

### Câu 3

Robot cần gập gối nhưng đùi và cẳng chân bị gộp cứng thành một object. Vấn đề chính là gì?

A. Tên đối tượng quá ngắn.  
B. Model không có camera.  
C. Vật liệu chưa đủ bóng.  
D. Cấu trúc không còn tách biệt hai cụm cần chuyển động tương đối.

**Đáp án:** D  
**Giải thích:** Đùi và cẳng chân phải có khả năng điều khiển chuyển động tương đối qua khớp gối.

### Câu 4

Cách nào phù hợp để không bị ảnh tham khảo che khuất robot mà vẫn giữ chúng trong dự án?

A. Join tất cả ảnh vào thân.  
B. Đưa ảnh vào collection riêng rồi ẩn collection.  
C. Chuyển ảnh thành bone.  
D. Xóa mọi ảnh và render.

**Đáp án:** B  
**Giải thích:** Quản lý bằng collection cho phép ẩn/hiện nhóm object mà không xóa dữ liệu.

### Câu 5

Tiêu chí nào thể hiện tốt nhất rằng lab đã hoàn thành?

A. File có ít object nhất có thể, không cần xét chuyển động.  
B. Tất cả Bevel đều đã Apply.  
C. Các cụm được tách/gộp đúng chuyển động, đặt tên rõ, ngoại hình được kiểm tra.  
D. Mọi khớp bị Join vào Body để render nhanh.

**Đáp án:** C  
**Giải thích:** Sẵn sàng rigging phụ thuộc vào cả cấu trúc chuyển động, khả năng quản lý object và chất lượng hình học hiển thị.

## 9. Tổng kết

Kết quả quan trọng nhất của bước chuẩn bị rigging là một **mesh scene rõ ràng, đáng tin cậy và dễ điều khiển về sau**. Khi mọi chi tiết đã được tách/gộp theo chức năng, đặt tên nhất quán và kiểm tra đầy đủ, có thể chuyển sang giai đoạn thiết lập xương robot và xây dựng chuyển động.
