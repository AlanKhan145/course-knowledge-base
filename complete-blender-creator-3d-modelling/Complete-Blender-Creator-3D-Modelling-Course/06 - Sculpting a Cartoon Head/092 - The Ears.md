# 092 — The Ears

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | The Ears |
| **Thời lượng** | 7:14 |
| **Chủ đề chính** | Điêu khắc tai |

## 1. Mục tiêu bài học

- Tạo hình tai cách điệu gắn liền với đầu, đúng vị trí và tỷ lệ.
- Luyện tập kéo khối (extrude bằng sculpt) từ bề mặt chính bằng brush Snake Hook hoặc Clay Strips kết hợp Mask.
- Hiểu cách dùng Mask để cô lập vùng tai khi cần chỉnh sửa mà không ảnh hưởng phần đầu còn lại.
- Đảm bảo tính đối xứng hai tai qua Symmetry.

## 2. Nội dung chính

Tai là chi tiết nhô ra khỏi bề mặt đầu, đòi hỏi kỹ thuật "kéo khối ra" thay vì chỉ đắp thêm. Có hai cách tiếp cận phổ biến:

- **Kéo trực tiếp từ mesh chính**: dùng brush **Snake Hook** để kéo một vùng nhỏ của mesh lồi ra thành hình tai, sau đó dùng Clay Strips/Crease để tạo các nếp gấp đặc trưng của vành tai (helix), phần trong tai (concha), và dái tai.
- **Dùng Mask cô lập vùng tai**: dùng brush **Mask** (`M`) để vẽ mặt nạ quanh vùng sẽ thành tai, sau đó dùng Grab/Move để kéo vùng đã mask ra khỏi bề mặt mà không làm biến dạng phần xung quanh; sau khi kéo xong, xóa mask (`Alt+M` hoặc trong menu Mask) và tiếp tục chi tiết hóa.

Với tai cách điệu (cartoon), hình dạng thường được đơn giản hóa — có thể chỉ là một hình oval cong nhẹ với một hoặc hai nếp gấp tượng trưng cho vành tai, thay vì tái hiện đầy đủ giải phẫu tai người thật. Vị trí tai thường đặt ngang với đường giữa mắt và mũi, hơi nghiêng theo góc của đầu.

## 3. Quy trình thực hành gợi ý

1. Xác định vị trí tai trên đầu (ngang tầm mắt, hai bên đầu), đối xứng qua Symmetry X.
2. Dùng Mask vẽ vùng sẽ thành tai để bảo vệ phần còn lại của đầu.
3. Dùng Grab hoặc Snake Hook kéo vùng đã mask ra khỏi bề mặt để tạo khối tai lồi.
4. Xóa mask, dùng Clay Strips và Crease thêm các nếp gấp cách điệu (vành tai, dái tai).
5. Dùng Smooth để làm mượt phần chân tai nối với đầu, tránh cạnh gãy đột ngột.
6. Kiểm tra lại từ góc Front và Side để đảm bảo hai tai đối xứng, đúng tỷ lệ.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush | Chức năng |
|---|---|
| Brush **Mask** (`M`) | Vẽ mặt nạ cô lập vùng chỉnh sửa |
| `Alt+M` | Xóa toàn bộ Mask (Clear Mask) |
| `Ctrl` (giữ khi dùng Mask) | Đảo chiều mask (xóa vùng mask thay vì thêm) |
| Brush **Snake Hook** | Kéo dài một vùng mesh thành khối nhô ra |
| Brush **Grab** | Kéo khối vùng đã mask |
| Brush **Crease** | Tạo nếp gấp vành tai |
| `X` | Symmetry đối xứng hai tai |

## 5. Lưu ý & lỗi thường gặp

- Kéo tai ra mà không mask trước dễ làm biến dạng cả vùng đầu xung quanh.
- Tai đặt sai vị trí (quá cao/thấp so với mắt) làm khuôn mặt mất cân đối.
- Chân tai nối với đầu bị gãy khối do thiếu bước Smooth chuyển tiếp.
- Quên xóa Mask sau khi dùng, dẫn đến các brush tiếp theo không tác động được lên vùng đã mask.

## 6. Checklist thực hành

- [ ] Đã xác định đúng vị trí và tỷ lệ tai trên đầu.
- [ ] Đã dùng Mask để cô lập vùng tai trước khi kéo khối.
- [ ] Tai đã được tạo nếp gấp cách điệu bằng Clay Strips/Crease.
- [ ] Chân tai đã được Smooth chuyển tiếp mượt với đầu.
- [ ] Hai tai đối xứng qua Symmetry X.

## 7. Tóm tắt

Bài học hướng dẫn điêu khắc tai bằng kỹ thuật kết hợp Mask để cô lập vùng chỉnh sửa và các brush Snake Hook/Grab để kéo khối tai nhô ra khỏi đầu, sau đó tinh chỉnh nếp gấp cách điệu, đảm bảo vị trí và độ đối xứng hợp lý.
