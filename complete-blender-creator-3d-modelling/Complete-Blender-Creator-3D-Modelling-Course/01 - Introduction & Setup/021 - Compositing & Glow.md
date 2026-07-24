# 021 — Compositing & Glow

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Compositing & Glow |
| **Thời lượng** | 9:35 |
| **Chủ đề chính** | Compositing và hiệu ứng phát sáng |

## 1. Mục tiêu bài học

- Làm quen với Compositing Workspace và hệ thống node-based compositor của Blender.
- Biết bật **Use Nodes** và thêm node **Glare** để tạo hiệu ứng phát sáng (glow) cho phần đèn hải đăng.
- Hiểu khái niệm cơ bản về Render Passes/View Layer liên quan đến compositing.
- Biết xuất ảnh cuối cùng sau khi đã áp dụng hiệu ứng compositing.

## 2. Nội dung chính

**Compositing** là bước xử lý hậu kỳ (post-processing) áp dụng lên ảnh đã render, thực hiện trong **Compositing Workspace** (tab trên cùng màn hình) sử dụng hệ thống node tương tự Shader Editor nhưng làm việc trên ảnh 2D thay vì vật liệu 3D.

Mặc định, Compositor có node **Render Layers** (đầu vào — ảnh vừa render) nối thẳng tới node **Composite** (đầu ra cuối cùng). Để bắt đầu chỉnh sửa, cần tick checkbox **"Use Nodes"** ở header Compositor (nếu chưa bật).

Node quan trọng nhất cho hiệu ứng phát sáng là **Glare** (`Add > Filter > Glare`), chèn giữa Render Layers và Composite. Glare có nhiều chế độ (Type):

- **Bloom**: lan tỏa ánh sáng đều quanh các vùng sáng, hiệu ứng "phát sáng mềm" phổ biến nhất và phù hợp nhất cho đèn hải đăng.
- **Fog Glow**: tương tự Bloom nhưng lan tỏa dạng khói mờ ảo hơn.
- **Streaks**: tạo các tia sáng kéo dài theo nhiều hướng từ điểm sáng (hiệu ứng lens flare dạng tia).
- **Simple Star / Ghosts**: các hiệu ứng ống kính đặc biệt khác.

Tham số quan trọng của Glare gồm **Threshold** (ngưỡng độ sáng để bắt đầu áp dụng hiệu ứng — chỉ những vùng sáng hơn ngưỡng này mới phát sáng, ví dụ chỉ đèn hải đăng chứ không phải toàn bộ scene) và **Size**/**Mix** để kiểm soát cường độ lan tỏa.

Đáng chú ý, từ Blender 4.2+, hiệu ứng **Bloom** cũng có thể bật trực tiếp trong **Render Properties > Bloom** (nếu dùng Eevee Next) mà không cần compositor — tuy nhiên dùng node Glare trong Compositor cho kiểm soát linh hoạt hơn (áp dụng có chọn lọc, kết hợp nhiều hiệu ứng khác như Color Balance, Glare nhiều lớp...).

Sau khi thiết lập xong node Glare, kết quả cuối cùng chỉ thực sự áp dụng khi **render lại** (`F12`) — vì Compositor xử lý dựa trên dữ liệu render, không phải xem trước viewport thông thường (trừ khi bật Backdrop/Viewer node để xem trực tiếp trong Compositing Workspace).

## 3. Quy trình thực hành gợi ý

1. Render thử scene ngọn hải đăng đã lên ánh sáng (`F12`) để có ảnh làm nền tham chiếu.
2. Chuyển sang Compositing Workspace, tick "Use Nodes" nếu chưa bật.
3. Thêm node Glare (`Shift + A > Filter > Glare`), nối giữa Render Layers và Composite.
4. Chọn Type = "Bloom" hoặc "Fog Glow", chỉnh Threshold sao cho chỉ vùng đèn phát sáng (không lan ra toàn bộ ảnh).
5. Chỉnh Size/Mix để kiểm soát độ mạnh của hiệu ứng phát sáng.
6. Render lại (`F12`) để xem kết quả cuối cùng đã áp dụng Glare.
7. Nếu muốn xem trực tiếp trong Compositor, thêm node **Viewer** và bật Backdrop để preview không cần mở lại cửa sổ render mỗi lần chỉnh.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Chuyển Compositing Workspace | Tab "Compositing" trên cùng màn hình |
| Bật node system | Checkbox "Use Nodes" |
| Thêm node Glare | `Shift + A > Filter > Glare` |
| Thêm node Viewer (xem trực tiếp) | `Shift + A > Output > Viewer` |
| Render lại | `F12` |

## 5. Lưu ý & lỗi thường gặp

- Quên bật "Use Nodes" khiến mọi node thêm vào không có tác dụng lên ảnh render cuối cùng.
- Threshold đặt quá thấp khiến toàn bộ scene phát sáng lóa thay vì chỉ vùng đèn hải đăng — nên tăng dần Threshold cho đến khi chỉ vùng sáng nhất (đèn) bị ảnh hưởng.
- Chỉnh node Glare nhưng quên render lại (`F12`) rồi thắc mắc sao không thấy thay đổi — Compositor không tự động cập nhật ảnh cũ trừ khi có Viewer node và Backdrop bật sẵn.
- Lạm dụng hiệu ứng Glare quá mạnh (Mix/Size cao) có thể làm mất chi tiết mô hình và trông thiếu tự nhiên — nên tinh chỉnh vừa phải, ưu tiên hiệu ứng tinh tế.

## 6. Checklist thực hành

- [ ] Đã bật Use Nodes trong Compositing Workspace.
- [ ] Đã thêm node Glare và chọn Type phù hợp (Bloom/Fog Glow).
- [ ] Đã chỉnh Threshold để chỉ đèn hải đăng phát sáng.
- [ ] Đã render lại và xác nhận hiệu ứng glow áp dụng đúng.

## 7. Tóm tắt

Compositing với node Glare cho phép thêm hiệu ứng phát sáng (glow) tinh tế cho phần đèn ngọn hải đăng, hoàn thiện diện mạo cuối cùng của dự án sau khi đã qua các bước modeling, vật liệu và ánh sáng ở các bài trước.
