# Bài 03 — Dựng vỏ trục cơ khí nhiều tầng từ Edge Loops

**Loại:** Bài học kết hợp thực hành hard-surface.  
**Thành phẩm:** Một chi tiết hình tròn nhiều tầng với vành, phần lõm, nắp và các rãnh gợi dáng bánh răng/trục máy.

## 1. Mục tiêu học tập

Bạn sẽ có thể:

- Tạo chi tiết mới bằng cách nhân bản vòng mặt từ một khớp trụ có sẵn.
- Dùng `Alt`-click để chọn edge loop, `Extrude` để tạo thân hình trụ nhiều tầng.
- Sử dụng các cặp `Loop Cut` kết hợp `Scale` để tạo rãnh và phần nhô.
- Kết hợp `Fill`, `Inset`, `Extrude` và `Recalculate Normals` khi hoàn thiện đầu trục.

## 2. Vì sao một khớp cần vỏ cơ khí nhiều tầng?

Một hình trụ đơn giản giúp định vị bộ phận nhưng chưa thể hiện được ngôn ngữ thiết kế sci-fi. Bằng cách tạo các vòng lồi–lõm có bề rộng khác nhau, khớp có thể gợi cảm giác gồm ổ trục, mặt bích, vòng khóa và nắp bảo vệ. Đây là **chi tiết tạo hình**, không bắt buộc là một bánh răng có răng ăn khớp theo tiêu chuẩn cơ khí.

Chuẩn bị một cụm khớp hông dạng trụ. Nếu luyện độc lập, hãy tạo một trụ có các vòng mặt có thể chọn được.

## 3. Những kỹ thuật cần dùng

### 3.1. Nhân bản Face Loop và tách object

Trong `Face Select`, giữ `Alt` rồi chọn dải mặt bao quanh phần thân trụ (cách chọn phụ thuộc topology). Dùng `Shift + D` để sao chép dải mặt, sau đó `P` → `Selection` để tách thành một object trang trí. Việc tách riêng giúp dễ kiểm soát hình dạng, chọn và shading.

### 3.2. Tạo biến thiên tiết diện

`E` tạo một đoạn geometry mới; `S` thay đổi tiết diện tại đầu đoạn đó. Khi lặp lại `E` theo trục và `S`, ta có một chi tiết gồm nhiều bậc. `Ctrl + R` thêm các vòng cắt để chủ động tạo vùng phình hoặc rãnh mà không phải thêm primitive mới.

## 4. Quy trình thực hành

### 4.1. Tạo object vỏ trục từ hình có sẵn

1. Ở `Object Mode`, chọn khớp tròn làm mẫu rồi `Tab` vào `Edit Mode`.
2. Chuyển sang `Face Select`, giữ `Alt` và chọn dải mặt vòng quanh thân khớp.
3. Nhấn `Shift + D`, ràng buộc theo X, dịch dải sao chép sang vị trí vỏ trục cần dựng.
4. Nhấn `P` → `Selection` để tách riêng thành object.
5. Về `Object Mode`, chọn object mới, `Tab` vào `Edit Mode` và dùng `A` để chọn toàn bộ hình học mới.
6. Dùng `S` điều chỉnh kích thước chung; đối chiếu góc bên (`Numpad 3`) với vị trí lắp đặt.

**Checkpoint:** Một dải trụ riêng biệt nằm đúng nơi cần làm vỏ trục, có các vòng biên dễ chọn để tiếp tục extrude.

### 4.2. Đùn vành, thân và rãnh

1. Chuyển sang `Vertex Select` hoặc `Edge Select`, giữ `Alt` để chọn một vòng đỉnh/cạnh ở đầu dải trụ.
2. Dùng `E` rồi `X` để đùn ra một đoạn theo trục X.
3. Dùng tiếp `E`, `X` và `S` để thu tiết diện, tạo một đoạn vai nhỏ hơn.
4. Bổ sung `Ctrl + R` vào vùng thân trụ, dùng con lăn chuột tạo **hai vòng cắt** gần nhau, nhấp trái xác nhận, nhấp phải để giữ vị trí giữa nếu phù hợp.
5. Chọn các vòng cắt cần biến dạng rồi `S` để tạo vùng rãnh thấp hơn bề mặt xung quanh. Nếu muốn vùng rãnh dài ra dọc trục, `S` rồi `X` để chỉnh chiều dài của các vòng.
6. Lặp lại ở một vị trí thứ hai để tạo nhịp điệu hình học: vành → rãnh → vành.

Đừng thêm quá nhiều vòng gần nhau: các vòng chỉ hữu ích khi làm nổi bật ranh giới giữa từng phần của chi tiết trụ.

### 4.3. Định hình mặt ngoài và nắp lõm

1. Ở đầu trục đối diện, tiếp tục chọn vòng biên và `E` theo trục X.
2. Dùng `S` để thu dần đường kính, rồi `E` thêm đoạn cổ trục nhỏ hơn.
3. Có thể thêm một đoạn nữa làm vai chặn ở đầu.
4. Để che phần mở ở mặt đầu, chọn vòng biên thích hợp rồi nhấn `F` tạo mặt.
5. Chuyển sang `Face Select`, chọn mặt mới rồi nhấn `I` (`Inset`) để tạo đường biên bên trong.
6. Nhấn `E` để đùn mặt inset lùi vào trong, tạo cảm giác nắp chìm.
7. Kiểm tra góc bên và góc trước để nắp không xuyên quá sâu vào phần khớp bên cạnh.

**Checkpoint:** Vỏ trục có các tầng tiết diện khác nhau, rãnh rõ khi nhìn nghiêng và phần nắp lõm ở đầu.

### 4.4. Sửa hình học và shading

1. Vào `Edit Mode`, chọn mọi mặt bằng `A`.
2. Dùng `Shift + N` để sửa `Normals` sau nhiều lượt `Extrude`.
3. Về `Object Mode`, kiểm tra bề mặt `Shade Smooth` nếu phù hợp với ý đồ tạo hình.
4. Quan sát từ góc trước, bên và trên; đảm bảo không có mặt đầu bị thủng ngoài ý muốn.
5. Dùng `Ctrl + S` để lưu kết quả.

## 5. Kiểm tra kết quả

- [ ] Vỏ trục là object có thể lựa chọn riêng.
- [ ] Ít nhất có một vành lồi và một vùng rãnh lõm rõ ràng.
- [ ] Đường kính thay đổi có chủ đích theo chiều trục.
- [ ] Mặt đầu có nắp hoặc hốc lõm hoàn chỉnh.
- [ ] Không có mảng shading đảo màu do normals.

## 6. Những lỗi thường gặp

| Lỗi | Dấu hiệu | Cách xử lý |
| --- | --- | --- |
| Chọn nhầm face loop | Sao chép cả khớp thay vì một dải mặt | Kiểm tra vòng mặt đang chọn trước `Shift + D` |
| `Loop Cut` không chạy qua vòng mong đợi | Topology bị ngắt hoặc hình đa giác phức tạp | Chọn đường cắt khác; không ép `Ctrl + R` qua n-gon |
| Rãnh không hiện rõ | Các vòng mới quá sát hoặc chưa scale tiết diện | Điều chỉnh khoảng cách và độ chênh đường kính |
| Nắp lõm thành nắp lồi | Đùn `E` theo chiều ngược | Quan sát từ cạnh rồi đổi hướng đùn |
| Mặt trụ có vệt tối | Normals hoặc mặt chồng | `Shift + N`; soát geometry thừa |

## 7. Thực hành ngắn

Thiết kế hai phương án vỏ trục từ cùng một dải mặt: một phương án có vành lớn và một rãnh sâu; phương án còn lại có hai rãnh nông. So sánh phương án nào giúp khớp nhìn rõ cấu trúc hơn từ xa.

## 8. Câu hỏi ôn tập

### Câu 1
Vì sao nên tách dải mặt được nhân bản thành object riêng?

A. Để tất cả modifier bị xóa tự động.  
B. Để rigging chạy ngay lập tức.  
C. Để tự tạo texture.  
D. Để dễ chỉnh vỏ trục độc lập với khớp nền.

**Đáp án:** D.  
**Giải thích:** Separate giúp việc chọn, chỉnh geometry và kiểm soát object mới thuận tiện hơn.

### Câu 2
Công cụ nào phù hợp để thêm các vòng cắt đều lên thân trụ mà không đổi trực tiếp hình ngoài?

A. `Ctrl + R` (`Loop Cut`).  
B. `Ctrl + J`.  
C. `Shift + S`.  
D. `H`.

**Đáp án:** A.  
**Giải thích:** Loop Cut bổ sung vòng cạnh để định hình vùng tiết diện sau đó.

### Câu 3
Tạo vùng lõm trên đầu trục bằng hai bước nào?

A. `Mirror` rồi `Delete`.  
B. `Shade Smooth` rồi `Join`.  
C. `Inset` rồi `Extrude` vào trong.  
D. `Knife` rồi `Duplicate`.

**Đáp án:** C.  
**Giải thích:** Inset tạo biên nắp; extrude lùi tạo chiều sâu hốc.

### Câu 4
Khi dùng `E` rồi `S` liên tiếp với edge loop của một trụ, điều gì thay đổi?

A. Camera chuyển sang trực giao.  
B. Chiều dài và đường kính các tầng của hình trụ.  
C. Số lượng frame animation.  
D. Vị trí 3D Cursor luôn cố định tại tâm vòng.

**Đáp án:** B.  
**Giải thích:** Extrude tăng đoạn hình học còn scale thay đổi độ lớn tiết diện.

### Câu 5
Kết luận nào phù hợp nhất về chi tiết đang dựng trong bài?

A. Đó là một hộp số mô phỏng lực thật.  
B. Nó tự tạo chuyển động vật lý.  
C. Nó thay thế hoàn toàn khớp đùi.  
D. Nó là vỏ trục trang trí, tạo cảm giác cơ khí cho robot.

**Đáp án:** D.  
**Giải thích:** Quy trình đang mô hình hóa dáng vẻ hard-surface, không thiết kế cơ cấu truyền lực.

## 9. Tổng kết

Bạn đã biết biến một dải mặt đơn giản thành vỏ trục sci-fi nhiều tầng nhờ `Extrude`, `Loop Cut`, `Scale`, `Fill` và `Inset`. Quan trọng hơn là hiểu cách kiểm soát **nhịp điệu hình khối lồi–lõm** thay vì bổ sung chi tiết tùy tiện.
