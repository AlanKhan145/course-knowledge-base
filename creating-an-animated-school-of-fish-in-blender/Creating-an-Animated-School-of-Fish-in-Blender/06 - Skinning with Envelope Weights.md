# 06 — Gắn mesh vào Armature bằng Envelope Weights

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Rigging Part 2 |
| **Thời điểm** | 15:48–16:18 |
| **Chủ đề chính** | Parent With Envelope Weights, kiểm tra biến dạng trong Pose Mode |

## 1. Mục tiêu bài học

- Gắn (skin) mesh cá vào Armature bằng phương pháp **Envelope Weights** thay vì Automatic Weights.
- Hiểu vì sao Envelope Weights là lựa chọn hợp lý cho một hình dạng đơn giản như trường hợp này.
- Kiểm tra nhanh kết quả biến dạng trong Pose Mode và phát hiện vấn đề cần xử lý ở chương sau.

## 2. Nội dung chính

Sau khi Armature đã sẵn sàng (chương 05), bước tiếp theo là **liên kết mesh cá với Armature**. Quy trình: chọn **mesh cá trước**, sau đó giữ `Shift` và chọn **Armature sau** (thứ tự chọn quan trọng vì Armature phải là active object cuối cùng để làm "cha"), nhấn `Ctrl + P` để mở menu Parent, và chọn **"Armature Deform with Envelope Weights"**.

Đây là điểm khác biệt đáng chú ý so với lựa chọn phổ biến hơn là "With Automatic Weights" (được dùng ở các kỹ thuật rig khác trong repo, ví dụ chương Arm Rig của khóa Blender 3D for Beginners). **Envelope Weights** tính toán trọng số ảnh hưởng của mỗi xương lên các vertex dựa trên **vùng hình cầu/con nhộng (envelope) bao quanh xương** (kích thước envelope có thể chỉnh trong Bone Properties > Deform > Envelope), thay vì phân tích khoảng cách hình học phức tạp như Automatic Weights. Tác giả nhận định phương pháp này **"sẽ ổn cho một hình dạng đơn giản như thế này"** — với một mesh cá tối giản (ít chi tiết, hình dạng thuôn dài đơn giản dọc theo trục xương), envelope hình con nhộng bao quanh từng xương đã đủ để mô tả chính xác vùng ảnh hưởng, không cần đến độ chính xác cao hơn (và phức tạp hơn) của Automatic Weights.

**Kiểm tra kết quả.** Ngay sau khi parent, mesh chưa có gì thay đổi về hình dạng (bình thường, vì Armature đang ở Rest Pose). Chuyển sang **Pose Mode**, chọn xương **tail**, thử di chuyển/xoay nó — mesh biến dạng theo đúng như kỳ vọng ban đầu. Tuy nhiên, tác giả phát hiện ngay **"một vấn đề nhỏ với lưới ở đó"** khi quan sát kỹ — đây chính là hiện tượng **weight bị "chảy tràn" (bleed)** giữa hai nhóm đỉnh (xương thân ảnh hưởng nhẹ lên cả vùng đuôi), sẽ được xử lý cụ thể ở chương 08, sau khi hoàn thành phần thiết lập chu kỳ bơi tự động ở chương 07.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh cá trước, giữ `Shift`, chọn Armature sau (đảm bảo Armature là active object).
2. Nhấn `Ctrl + P`, chọn "Armature Deform with Envelope Weights".
3. Chuyển sang Pose Mode, chọn xương tail, thử di chuyển/xoay để kiểm tra mesh biến dạng đúng theo Armature.
4. Quan sát kỹ vùng chuyển tiếp giữa thân và đuôi — ghi nhận nếu có dấu hiệu weight bleed bất thường (sẽ xử lý ở chương 08).
5. (Tùy chọn) Nếu vùng ảnh hưởng của envelope chưa khớp hình dạng mesh, có thể vào Bone Properties > Deform > Envelope để chỉnh Radius của từng xương trước khi tiếp tục.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Mở menu Parent | `Ctrl + P` |
| Parent bằng Envelope Weights | `Ctrl + P > Armature Deform with Envelope Weights` |
| Chuyển sang Pose Mode | Dropdown Mode > Pose Mode |
| Chỉnh bán kính Envelope của xương | Bone Properties > Deform > Envelope (Edit Mode/Pose Mode) |

## 5. Lưu ý & lỗi thường gặp

- Chọn sai thứ tự (Armature trước, mesh sau) khi `Ctrl + P` sẽ khiến menu Parent không hiển thị đúng các tùy chọn Armature Deform — luôn chọn mesh trước, Armature sau cùng.
- Envelope Weights phù hợp cho hình dạng đơn giản nhưng có thể kém chính xác hơn Automatic Weights với mesh phức tạp nhiều chi tiết gần nhau (ví dụ nhiều vây sát thân) — cần cân nhắc phương pháp phù hợp tùy độ phức tạp thực tế của model.
- Vấn đề weight bleed phát hiện ở bước này là **bình thường** với Envelope Weights (vùng ảnh hưởng hình cầu dễ chồng lấn giữa các xương liền kề) — không cần hoảng khi thấy lỗi nhỏ ở đây, vì đã có bước sửa riêng ở chương 08.

## 6. Checklist thực hành

- [ ] Đã Parent mesh cá vào Armature bằng "Armature Deform with Envelope Weights".
- [ ] Đã kiểm tra biến dạng cơ bản trong Pose Mode bằng cách di chuyển xương tail.
- [ ] Đã ghi nhận vấn đề weight bleed (nếu có) để xử lý ở chương tiếp theo.

## 7. Tóm tắt

Envelope Weights là lựa chọn skinning đơn giản và đủ dùng cho một mesh cá tối giản — nhanh hơn để thiết lập so với Automatic Weights, đổi lại có thể cần một bước dọn dẹp thủ công nhỏ (chương 08) để xử lý hiện tượng weight bleed giữa các xương liền kề.
