# 03 — Bước 2: Tìm một con cá

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Step two |
| **Thời điểm** | 01:10–01:30 |
| **Chủ đề chính** | Tìm model cá scan miễn phí trên Sketchfab, kiểm tra giấy phép, chọn định dạng import |

## 1. Mục tiêu bài học

- Biết Sketchfab là nguồn phổ biến cho model cá scan chi tiết, chất lượng cao.
- Hiểu khái niệm giấy phép **Public Domain** và vì sao nó cho phép sử dụng thoải mái hơn so với các giấy phép Creative Commons có điều kiện.
- Biết ưu tiên tải model ở định dạng **glTF gốc** khi có thể.

## 2. Nội dung chính

Tác giả tìm model cá trên **Sketchfab** — nền tảng có rất nhiều model cá "đóng hộp" (scan 3D) được chi tiết hóa cao. Điểm quan trọng được nhấn mạnh: những model này không chỉ miễn phí mà **nhiều model còn thuộc phạm vi công cộng (Public Domain)** — nghĩa là không giữ bản quyền, cho phép tải xuống và sử dụng cho hầu hết mọi mục đích mà không cần ghi công (attribution) hay các ràng buộc khác thường thấy ở giấy phép Creative Commons (CC-BY, CC-BY-SA...). Đây là lý do Sketchfab được ưu tiên hơn so với việc tự tìm/scan model.

Trong ví dụ của video, tác giả chọn một model cá từ một nghệ sĩ có tay nghề cao trên Sketchfab (một loài cá cảnh vùng rạn san hô — tên loài cụ thể bị dịch không chính xác qua bản dịch máy nên không nêu chi tiết ở đây, không ảnh hưởng đến kỹ thuật). Khi tải xuống, tác giả khuyến nghị chọn **định dạng gốc glTF nếu có sẵn** — glTF là định dạng hiện đại, hỗ trợ tốt việc bảo toàn vật liệu (PBR material), UV mapping và cấu trúc mesh gốc khi import vào Blender, thường cho kết quả trung thực hơn so với các định dạng chuyển đổi trung gian khác (OBJ, FBX) vốn có thể làm mất một số thông tin vật liệu.

## 3. Quy trình thực hành gợi ý

1. Truy cập Sketchfab, tìm kiếm model cá phù hợp (từ khóa: fish, coral fish, reef fish...).
2. Lọc theo giấy phép — ưu tiên **CC0/Public Domain** để có toàn quyền sử dụng.
3. Đánh giá chất lượng model qua ảnh preview: độ chi tiết, có bị lỗi mesh rõ ràng hay không.
4. Tải xuống ở định dạng **glTF** nếu nền tảng hỗ trợ; nếu không có, dùng định dạng thay thế tốt nhất có sẵn (OBJ, FBX).
5. Giải nén (nếu tải về dạng file nén) và chuẩn bị import vào Blender ở bước tối ưu tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Import glTF vào Blender | `File > Import > glTF 2.0 (.glb/.gltf)` |
| Kiểm tra giấy phép model | Trang chi tiết model trên Sketchfab, mục License |

## 5. Lưu ý & lỗi thường gặp

- Không phải mọi model "miễn phí tải xuống" đều là Public Domain — một số vẫn yêu cầu ghi công tác giả (CC-BY) hoặc cấm dùng cho mục đích thương mại; luôn đọc kỹ mục License trước khi dùng cho project công khai hoặc thương mại.
- Định dạng glTF vẫn có thể không mang theo texture đi kèm nếu tác giả gốc không đóng gói đầy đủ — kiểm tra lại material/texture ngay sau khi import, trước khi tiến hành các bước tối ưu và animate.
- Model càng chi tiết (đến từ scan chất lượng cao) thường đi kèm số lượng vertex càng lớn — đây chính là vấn đề sẽ được xử lý ở bước tối ưu tiếp theo (chương 04), không phải điều cần lo lắng ngay khi chọn model.

## 6. Checklist thực hành

- [ ] Đã tìm được một model cá phù hợp trên Sketchfab.
- [ ] Đã kiểm tra và xác nhận giấy phép sử dụng (ưu tiên Public Domain/CC0).
- [ ] Đã tải model ở định dạng glTF (hoặc định dạng thay thế tốt nhất có sẵn).
- [ ] Đã import thành công vào Blender và kiểm tra material/texture đi kèm.

## 7. Tóm tắt

Sketchfab là nguồn model cá scan chất lượng cao, miễn phí, với nhiều lựa chọn thuộc Public Domain — ưu tiên định dạng glTF khi tải để giữ nguyên vẹn material và cấu trúc mesh gốc, chuẩn bị cho bước tối ưu hóa model ở chương tiếp theo.
