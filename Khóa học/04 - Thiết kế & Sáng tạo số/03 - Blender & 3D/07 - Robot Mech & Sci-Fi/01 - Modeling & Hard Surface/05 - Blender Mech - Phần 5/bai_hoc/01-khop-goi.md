# Bài 01 — Dựng khớp gối cơ khí từ chi tiết có sẵn

## 1. Tóm tắt

Khớp gối của robot mech cần thể hiện hai nhiệm vụ: **nối phần chân trên với cẳng chân** và tạo cảm giác đây là cơ cấu có thể xoay. Thay vì dựng khối mới hoàn toàn, ta tái sử dụng một chi tiết khớp tròn có hình dạng gần giống, chỉnh kích thước, mở rộng trục nối và khắc thêm các rãnh cơ khí. Kỹ thuật chính gồm `Duplicate`, chỉnh vòng đỉnh (`edge loop`), `Extrude`, `Inset Faces` và scale có loại trừ trục.

## 2. Mục tiêu học tập

Sau khi hoàn thành, người học có thể:

- Tái sử dụng một mesh khớp cơ khí để dựng khớp gối mới theo tham chiếu.
- Chỉnh vị trí và tỷ lệ của khớp trên từng góc nhìn mà không làm lệch hướng trục.
- Tạo phần trục nối và khoảng hở lắp ghép bằng `Extrude`.
- Tạo họa tiết rãnh xen kẽ từ các mặt trên vành tròn.
- Kiểm tra hình học và lưu trạng thái làm việc.

## 3. Chuẩn bị và cấu trúc khớp

Mở cảnh robot đã có chân trên và một khớp tròn có thể tái sử dụng. Trong bài, **trục X là hướng chạy ngang qua bản lề**, còn **Y và Z xác định tiết diện nhìn từ bên**. Cần giữ cách hiểu trục thống nhất với vị trí robot trong tệp thực hành; không áp dụng máy móc khi mô hình của bạn dùng định hướng khác.

Khớp mới gồm phần vỏ bên ngoài, một đoạn trục nhô ra để kết nối hai bộ phận chân và các phần lõm lặp lại quanh bề mặt. Chỉ thêm chi tiết sau khi tỷ lệ khớp đã gần trùng với hình tham chiếu.

## 4. Tái sử dụng và định vị khớp

1. Chọn mesh khớp có sẵn ở `Object Mode`. Nhấn `Numpad 3` để xem cạnh, sau đó `Z` → `Wireframe` để thấy hình tham chiếu phía sau.
2. Kiểm tra và **tắt Snapping** nếu nó đang bật. Nhấn `Shift + D` để tạo một bản sao; dùng `G`, sau đó phím trục thích hợp để đưa bản sao đến vùng khớp gối. Trong cách bố trí đang dùng, điều chỉnh theo trục `Y`.
3. Vào `Edit Mode` (`Tab`), chọn hình học cần thiết bằng `A`, nhấn `S` và thu nhỏ khớp để phù hợp tham chiếu. Thu nhỏ ở Edit Mode khi muốn giữ object origin của cơ cấu.
4. Nhấn `Numpad 7` để nhìn trên. Dùng `G`, rồi `X` để cân lại vị trí trái–phải. Quan sát lại từ mặt bên trước khi tạo hình.

**Tại sao phải kiểm tra từ hai góc?** Một khớp có thể trùng đường bao ở mặt bên nhưng lệch hẳn vị trí theo chiều ngang. Một góc nhìn không đủ để xác nhận khớp đã lắp đúng.

## 5. Tạo trục nối và khoảng hở

1. Chuyển sang `Vertex Select`; trong chế độ Wireframe, dùng `B` khoanh phần đỉnh thừa ở bên khớp. Để bỏ chọn các đỉnh không cần xóa, sử dụng thao tác box deselect thích hợp. Xóa phần hình học thừa bằng `X` → `Vertices`.
2. Giữ `Alt` và chọn vòng cạnh/đỉnh biên quanh lỗ mở (tùy chế độ chọn đang dùng).
3. Nhấn `E` để **đùn vòng biên theo trục X**. Giữ một khoảng trống nhỏ giữa các bề mặt tiếp giáp để phần chân dưới có vị trí lắp vào.
4. Tiếp tục đùn đoạn trục xuyên qua vùng nối. Nếu đầu trục cần nắp, chọn vòng biên ngoài cùng và nhấn `F` để đóng mặt.
5. Quay lại `Solid` để nhìn tổng thể: trục nối không nên chìm hoàn toàn trong khớp, cũng không kéo dài quá mức so với hình tham chiếu.

Khoảng hở có chủ đích giúp người xem phân biệt các chi tiết của cơ cấu và làm rõ vị trí chuyển động. Đây là cấu trúc hình học phục vụ thiết kế; chưa phải một rig có chuyển động thực.

## 6. Tạo dãy rãnh trang trí

1. Chuyển sang `Face Select`. Trên vành khớp, chọn **hai mặt liên tiếp**, chừa **hai mặt**, rồi tiếp tục chọn hai mặt tiếp theo. Lặp lại quanh chu vi để tạo nhịp điệu đều.
2. Nhấn `I` để `Inset Faces` cho các vùng đã chọn. Blender có thể inset theo vùng hoặc theo từng mặt; dùng chế độ phù hợp để các cặp mặt trở thành từng cụm rãnh, tránh vô tình tách từng mặt đơn lẻ.
3. Nhấn `E` đùn phần inset theo hướng tạo độ sâu, sau đó `S` để thu nhỏ tiết diện.
4. Nếu cần giữ nguyên chiều dài theo trục bản lề X, dùng `S` rồi `Shift + X`. Lúc này thao tác chỉ scale trên Y và Z.
5. Quan sát trong `Solid View`, kiểm tra các rãnh có độ sâu vừa phải và không cắt xuyên phần trục nối.

**Phân biệt:** `I` tạo đường viền mới trên mặt, còn `E` thêm chiều sâu. Kết hợp hai lệnh sẽ tạo được rãnh hoặc gờ nổi thay vì chỉ thay đổi kích thước bề mặt.

## 7. Lỗi thường gặp và cách xử lý

| Hiện tượng | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| Khớp bị dính sai bề mặt | `Snapping` còn bật | Tắt snapping trước khi di chuyển thủ công |
| Khớp đúng mặt bên nhưng lệch tim | Chưa kiểm tra từ trên | Dùng `Numpad 7`, chỉnh theo X |
| Mặt bên bị hở | Xóa phần mặt mà chưa tạo nắp | Chọn vòng biên và `F` khi cần đóng |
| Rãnh rời rạc, không đồng đều | Chọn sai nhóm mặt hoặc sai kiểu inset | Kiểm tra chế độ inset và nhóm mặt được chọn |
| Chi tiết bị kéo dài sai trục | Scale đồng thời cả trục bản lề | Dùng `S`, `Shift + X` khi chỉ muốn đổi tiết diện |

## 8. Thực hành ngắn

Tạo một khớp gối với ba đặc điểm: có vỏ khớp, đoạn trục nối nhô ra theo trục X và các rãnh chia theo mô-típ hai mặt chọn/hai mặt bỏ trống. Đối chiếu từ `Side View` và `Top View`, sau đó lưu file Blender. Bài hoàn thành khi hình dạng thể hiện rõ điểm nối mà không xuất hiện mặt hở ngoài ý muốn.

## 9. Câu hỏi ôn tập

### Câu 1

Khi một khớp đã khớp hình tham chiếu ở mặt bên nhưng lệch tim robot, thao tác nào phù hợp nhất?

A. Chuyển sang `Top View` và chỉnh vị trí theo chiều ngang.  
B. Tăng `Bevel` ngay lập tức.  
C. Thêm `Solidify`.  
D. Xóa toàn bộ khớp.

**Đáp án:** A. **Giải thích:** Góc nhìn từ trên giúp kiểm tra trục ngang mà mặt bên không thể hiện rõ.

### Câu 2

`S` rồi `Shift + X` có tác dụng gì trong ngữ cảnh này?

A. Chỉ scale theo X.  
B. Chỉ xoay theo X.  
C. Scale theo Y và Z, bỏ qua X.  
D. Tự thêm bản sao đối xứng.

**Đáp án:** C. **Giải thích:** `Shift + X` loại trừ trục X khỏi thao tác scale hiện tại.

### Câu 3

Vì sao không nên tạo phần trục nối mà không chừa khe lắp?

A. Blender không thể lưu mô hình.  
B. Hai cụm chi tiết sẽ khó phân biệt và trông như xuyên vào nhau.  
C. Không thể chuyển về Solid View.  
D. Không thể nhân bản mesh.

**Đáp án:** B. **Giải thích:** Khe hở nhỏ tạo sự tách biệt hợp lý giữa các bộ phận cơ khí.

### Câu 4

Cặp thao tác nào phù hợp để tạo rãnh lõm có đường viền trên bề mặt?

A. `G` và `R`.  
B. `H` và `Alt + H`.  
C. `Ctrl + J` và `P`.  
D. `I` rồi `E`.

**Đáp án:** D. **Giải thích:** `Inset` tạo vòng mặt mới, `Extrude` tạo chiều sâu cho rãnh.

### Câu 5

Tại sao cần tắt snapping khi di chuyển khớp tự do theo tham chiếu?

A. Vì snapping có thể hút khớp vào các vị trí hình học không mong muốn.  
B. Vì snapping làm mất modifier.  
C. Vì snapping tự thêm normals.  
D. Vì snapping làm đổi chế độ chọn cạnh.

**Đáp án:** A. **Giải thích:** Khi chỉnh thủ công theo tham chiếu, snapping đang bật có thể làm sai vị trí mong muốn.

## 10. Tổng kết

Khớp gối được tạo bằng cách **nhân bản khớp có sẵn → căn tỷ lệ → sửa mặt bên → đùn trục nối → tạo rãnh inset/extrude → kiểm tra nhiều góc**. Cấu trúc này là điểm chuẩn để bố trí khung cẳng chân và lớp giáp bao quanh.
