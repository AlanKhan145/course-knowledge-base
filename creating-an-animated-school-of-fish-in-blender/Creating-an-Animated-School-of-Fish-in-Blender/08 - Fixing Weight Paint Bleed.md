# 08 — Sửa lỗi Weight Paint bị chảy tràn giữa thân và đuôi

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Rigging cleanup |
| **Thời điểm** | 19:18–20:18 |
| **Chủ đề chính** | Weight Paint mode, Vertex Group Select/Assign/Remove |

## 1. Mục tiêu bài học

- Nhận diện hiện tượng weight bleed (nhóm đỉnh "body" ảnh hưởng nhầm lên vùng đuôi) qua chế độ Weight Paint.
- Dùng tổ hợp **Select > Assign/Remove** trên Vertex Group trong Edit Mode để sửa dứt điểm vùng ảnh hưởng sai.

## 2. Nội dung chính

Sau khi thiết lập xong chu kỳ bơi tự động (chương 07), vấn đề mesh nhỏ đã ghi nhận từ chương 06 hiện rõ hơn: thoát Pose Mode, chọn mesh cá, chuyển sang **Weight Paint mode**, chọn Vertex Group **"body"** — kết quả tô màu cho thấy nhóm **body đang ảnh hưởng (có trọng số khác 0) lên cả một phần vùng đuôi**, điều này gây ra biến dạng không mong muốn tại vùng chuyển tiếp thân-đuôi khi Armature chuyển động (đây chính là hệ quả tự nhiên của phương pháp Envelope Weights đã chọn ở chương 06 — vùng ảnh hưởng hình cầu bao quanh xương body vô tình chồng lấn sang khu vực đuôi).

**Chẩn đoán bằng Edit Mode.** Thoát Weight Paint, bỏ chọn tất cả, vào **Edit Mode**. Với Vertex Group "body" đang active, dùng nút **"Select"** trong panel Vertex Groups (Object Data Properties > Vertex Groups) — thao tác này chọn tất cả các đỉnh hiện đang có trọng số khác 0 trong nhóm đó, và xác nhận trực quan rằng nó **đang bao gồm cả vùng đuôi**. Kiểm tra chéo bằng cách chọn Vertex Group **"tail"** và nhấn Select — kết quả bất ngờ là **không có đỉnh nào được chọn cả** ("không hiển thị bất cứ điều gì"), cho thấy nhóm tail **chưa từng có đỉnh nào thực sự được gán** (dữ liệu Envelope Weights vốn không tạo Vertex Group tường minh theo cách giống Automatic Weights, hoặc nhóm tail bị rỗng vì lý do khác) — đây là gốc rễ thực sự của vấn đề: phần đuôi mesh hoàn toàn phụ thuộc vào ảnh hưởng "tràn" từ nhóm body thay vì có trọng số riêng của chính nó.

**Sửa lỗi.** Quy trình khắc phục gồm hai bước ngược nhau trên cùng một vùng đỉnh (các đỉnh ở khu vực đuôi đang bị nhóm body ảnh hưởng sai):

1. Chọn đúng các đỉnh vùng đuôi đang bị ảnh hưởng sai đó, với Vertex Group **"tail"** đang active, nhấn **"Assign"** — gán các đỉnh này thuộc về nhóm tail với trọng số đầy đủ.
2. Vẫn giữ nguyên các đỉnh đó đang được chọn, chuyển Vertex Group active sang **"body"**, nhấn **"Remove"** — xóa các đỉnh này ra khỏi nhóm body, chấm dứt hoàn toàn ảnh hưởng sai của xương thân lên vùng đuôi.

Sau khi thực hiện, quay lại **Object Mode** và kiểm tra: nhóm "body" không còn ảnh hưởng đến vùng đuôi nữa — vấn đề mesh quan sát được ở các chương trước đã được khắc phục triệt để. Đến đây, chú ý là bản thân con cá cơ bản (một mesh, một Armature, một chu kỳ bơi hoàn chỉnh) đã **hoàn thiện** và sẵn sàng để nhân bản thành cả một đàn ở chương tiếp theo.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh cá, vào Weight Paint mode, chọn Vertex Group "body", quan sát và xác nhận vùng ảnh hưởng có tràn sang đuôi hay không.
2. Vào Edit Mode, bỏ chọn tất cả; với "body" active, nhấn Select để xem chính xác vùng đỉnh bị ảnh hưởng; kiểm tra chéo Vertex Group "tail" tương tự.
3. Với các đỉnh vùng đuôi bị ảnh hưởng sai đang được chọn: chuyển Vertex Group active sang "tail", nhấn Assign.
4. Vẫn giữ nguyên lựa chọn đó, chuyển Vertex Group active sang "body", nhấn Remove.
5. Quay lại Object Mode, kiểm tra lại bằng Weight Paint hoặc Pose Mode để xác nhận vấn đề đã được sửa.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Chuyển sang Weight Paint mode | Dropdown Mode > Weight Paint |
| Chọn đỉnh theo Vertex Group | Object Data Properties > Vertex Groups > nút "Select" (Edit Mode) |
| Gán đỉnh đã chọn vào Vertex Group active | Object Data Properties > Vertex Groups > nút "Assign" (Edit Mode) |
| Xóa đỉnh đã chọn khỏi Vertex Group active | Object Data Properties > Vertex Groups > nút "Remove" (Edit Mode) |

## 5. Lưu ý & lỗi thường gặp

- Đây là đánh đổi điển hình của Envelope Weights: nhanh để thiết lập ban đầu (chương 06), nhưng gần như luôn cần một bước dọn Vertex Group thủ công như thế này ở các vùng chuyển tiếp giữa nhiều xương liền kề.
- Khi dùng nút "Remove", chỉ nên thao tác trên đúng tập đỉnh đã xác định là bị ảnh hưởng sai — Remove nhầm trên toàn bộ mesh có thể xóa mất trọng số hợp lệ ở các vùng khác của nhóm body.
- Sau khi Assign/Remove thủ công, nên luôn kiểm tra lại bằng Pose Mode thực tế (không chỉ nhìn Weight Paint tĩnh) để đảm bảo chuyển động biến dạng đã đúng như mong đợi trong toàn bộ chu kỳ bơi, không chỉ ở một tư thế cụ thể.

## 6. Checklist thực hành

- [ ] Đã xác định được vùng đỉnh bị nhóm "body" ảnh hưởng sai sang khu vực đuôi.
- [ ] Đã Assign các đỉnh đó vào nhóm "tail".
- [ ] Đã Remove các đỉnh đó khỏi nhóm "body".
- [ ] Đã xác nhận lại bằng Pose Mode rằng chuyển động bơi không còn biến dạng bất thường ở vùng chuyển tiếp thân-đuôi.

## 7. Tóm tắt

Weight bleed giữa các nhóm đỉnh liền kề là hệ quả thường gặp của Envelope Weights, nhưng dễ chẩn đoán (qua Weight Paint) và dễ sửa dứt điểm bằng thao tác Select → Assign → Remove trên đúng Vertex Group — hoàn tất bước rig cho một con cá cơ bản, sẵn sàng để nhân bản thành cả đàn ở các chương tiếp theo.
