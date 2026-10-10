# Bài 02 — Dựng dáng thân và các lớp giáp ngực với Loop Cut, Extrude

## 1. Tóm tắt

Phần thân Mech cần có hình khối phân tầng thay vì chỉ là một hộp chữ nhật. Kỹ thuật chính là cắt bổ sung các dải cạnh (`Loop Cut`), di chuyển vertex và đùn mặt (`Extrude`) để tạo giáp ngực nhô ra. Bài học hướng dẫn chuyển silhouette thô thành cấu trúc có các bề mặt trước, hông và đáy rõ ràng.

## 2. Mục tiêu học tập

- Sử dụng `Numpad 1/3`, Wireframe và Box Select khi điều chỉnh dáng thân.
- Đặt `Loop Cut` đúng vị trí để chia vùng ngực và bụng.
- Chọn mặt và `Extrude` có kiểm soát theo chiều sâu hoặc chiều ngang.
- Phân biệt dịch chuyển toàn bộ mesh với chỉ dịch chuyển một hàng vertex.
- Đánh giá silhouette từ ít nhất ba góc nhìn.

## 3. Thiết lập hình khối ban đầu

Bắt đầu với nửa thân đối xứng theo `X`, giữ `Mirror` đang hoạt động. Vào `Edit Mode`, dùng `Numpad 3` để nhìn bên và `Z > Wireframe` để thấy toàn bộ vertex. Chọn một hàng đỉnh trên cùng bằng `B`, sau đó dùng `G`, `Z` đưa lên để xác định chiều cao ngực. Chuyển sang `Numpad 1`, kiểm tra và điều chỉnh chiều rộng theo trục `X`.

Khi chỉ muốn thay đổi tỷ lệ một hàng đỉnh, hãy bỏ chọn (`Alt + A`) trước rồi chọn vùng cần thao tác. Nếu chọn toàn bộ mesh, các thay đổi sẽ dịch chuyển cả thân và làm mất chủ đích phân tầng.

## 4. Chia vùng bằng Loop Cut

Đưa con trỏ lên dải quads muốn cắt và nhấn `Ctrl + R`. Di chuyển con trỏ để xem trước đường cắt, nhấp trái xác nhận, trượt đến vị trí mong muốn rồi nhấp lần nữa. Có thể nhấn chuột phải sau nhấp đầu để giữ đường cắt ở giữa. `G` hai lần trên cạnh hoặc loop (`GG`) giúp Edge Slide trong nhiều tình huống.

Trong kết cấu ngực, nên có ít nhất hai vùng điều khiển riêng: dải ngang quyết định chiều cao lớp giáp và dải khác phân chia nơi giáp tiếp giáp bụng/hông. Khoảng cách giữa các loop cần đủ để thao tác vát và inset mà không khiến mặt quá hẹp.

**Quan sát quan trọng:** đường cắt chạy theo topology hiện có. Nếu đã xuất hiện mặt tam giác, n-gon hoặc các cạnh vát giao nhau, `Ctrl + R` có thể không chạy qua toàn bộ mặt như mong muốn. Khi đó cần cân nhắc sắp xếp mesh hoặc dùng công cụ Knife có kiểm soát.

## 5. Đùn lớp giáp ở hai góc nhìn

1. Chuyển sang `Face Select` (`3` hàng phím số). Chọn mặt bên thích hợp, xem bên bằng `Numpad 3`.
2. Nhấn `E` để đùn phần mặt đã chọn ra khỏi vỏ thân. Quan sát chiều đùn qua độ sâu `Y`; nếu muốn đùn dọc một trục xác định, có thể chủ động giới hạn theo trục phù hợp.
3. Chuyển sang góc nhìn trước (`Numpad 1`), `Shift`-chọn các mặt thuộc cụm giáp phía trước nhưng không chọn cả vùng ngoài phạm vi dự kiến.
4. Dùng `E` tạo phần giáp nhô sang hông. Kiểm tra Mirror để giáp hai bên có cùng chiều rộng.
5. Chọn các cạnh hoặc hàng đỉnh ngoài, dịch chuyển nhẹ bằng `G` để hình khối có độ dốc thay vì dựng đứng hoàn toàn.
6. Thêm một `Loop Cut` nữa ở vùng trước ngực nếu muốn tạo gờ nổi có chân đế rõ.
7. Chọn các mặt vừa tạo, điều chỉnh `G`, `Y` cho một cụm nhỏ nhô lên so với vỏ chính.

Đùn giáp theo từng lớp giúp người quan sát nhận biết phần **vỏ thân**, **giáp che bên ngoài** và **khe phân tách giữa các mảng**. Không cần tạo nhiều polygon ngay; hình khối tổng thể tốt quan trọng hơn các chi tiết rất nhỏ.

## 6. Kiểm tra silhouette

Tạm bỏ chọn toàn bộ mesh và chuyển về `Solid View`. Ở góc nhìn trước, quan sát chiều rộng hai bên và đường giáp ngực. Ở góc nhìn bên, kiểm tra giáp trước không đâm xuyên quá sâu vào thân. Ở góc nhìn ba phần tư, kiểm tra lớp giáp tạo được độ dày mà vẫn không lộ các mặt rời bất thường.

Một silhouette tốt thường có: thân trên đủ rộng, phần giữa gọn, lớp ngực có chiều dày, mép vát có chủ đích, và chỗ nối sang ba lô phía sau vẫn còn không gian.

## 7. Lỗi thường gặp và cách sửa

| Lỗi | Cách nhận biết | Cách khắc phục |
| --- | --- | --- |
| Loop Cut đặt sai vùng | Mép giáp bị lệch độ cao | `GG` để trượt loop hoặc hoàn tác và cắt lại |
| Đùn nhầm theo normal | Giáp nhô theo hướng không dự định | Xem trục trong hình chiếu cạnh, dùng G theo trục để tinh chỉnh |
| Hai nửa chạm quá sâu | Đường tâm biến dạng | Kiểm tra Mirror và `Clipping` |
| Tạo quá nhiều loop | Khó chọn và xuất hiện cạnh sát nhau | Giữ loop phục vụ silhouette, trì hoãn chi tiết nhỏ |
| Mặt ngực méo | Vertex không đồng phẳng | Kiểm tra Front/Side và điều chỉnh theo từng hàng |

## 8. Thực hành

Từ một torso đơn giản, tạo một lớp giáp lớn ở ngực và một gờ nhỏ nhô phía trước. Xuất ba ảnh chụp viewport trước, bên và ba phần tư hoặc lưu ba góc nhìn để tự đánh giá. Lưu `02_chest_blockout.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Khi muốn thêm một dải cạnh liên tục trên vùng quads, công cụ nên thử đầu tiên là gì?

A. `Ctrl + R` (Loop Cut).  
B. `P` (Separate).  
C. `Ctrl + J` (Join).  
D. `Shift + N` (Normals).

**Đáp án:** A. **Giải thích:** Loop Cut chia vùng quads theo một vòng cạnh liên tục.

### Câu 2

Khi cần đẩy phần giáp ra khỏi vỏ chính bằng cách tạo hình học mới, dùng lệnh nào?

A. `G`.  
B. `S`.  
C. `E`.  
D. `H`.

**Đáp án:** C. **Giải thích:** Extrude tạo các mặt/cạnh mới nối với vùng đã chọn; G chỉ dịch chuyển vùng hiện có.

### Câu 3

Tại sao nên kiểm tra cả Front và Side View?

A. Để đổi đơn vị mét sang cm.  
B. Để tạo vật liệu tự động.  
C. Để kích hoạt render.  
D. Vì một mặt nhìn riêng có thể che giấu sai lệch độ dày và vị trí.

**Đáp án:** D. **Giải thích:** Một lớp giáp có thể đúng chiều rộng nhưng sai độ sâu.

### Câu 4

Bước nào giúp chỉ thay đổi các vertex ở phần trên thân?

A. Giữ tất cả vertex đang chọn.  
B. Bỏ chọn, dùng Box Select chọn đúng hàng vertex cần chỉnh.  
C. Áp dụng Mirror ngay lập tức.  
D. Thêm một camera.

**Đáp án:** B. **Giải thích:** Chọn đúng vùng giới hạn tác động của biến đổi hình học.

### Câu 5

Điều gì thường khiến `Loop Cut` không đi qua được một vùng mesh?

A. Đặt tên đối tượng quá dài.  
B. Đang chọn Viewport Solid.  
C. Topology có tam giác/n-gon hoặc đường cạnh không nối thành loop hợp lệ.  
D. Độ sáng của đèn quá thấp.

**Đáp án:** C. **Giải thích:** Loop Cut dựa trên mạng lưới cạnh hợp lệ, thường là dải quads.

## 10. Tổng kết

Cấu trúc thân Mech được định hình bằng **loop để chia vùng, vertex để điều chỉnh dáng, face extrude để xây lớp giáp**. Hãy hoàn thiện silhouette ở góc trước và bên trước khi làm các chi tiết nhỏ.
