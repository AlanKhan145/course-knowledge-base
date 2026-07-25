# 060 — The Compositor

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | The Compositor |
| **Thời lượng** | 9:29 |
| **Chủ đề chính** | Hậu kỳ ảnh render: Denoise, Color Balance, Glare |

## 1. Mục tiêu bài học

- Hiểu vai trò của Compositor như bước hậu kỳ sau khi render xong.
- Biết dùng node Denoise để khử nhiễu ảnh Cycles.
- Biết dùng node Color Balance để hiệu chỉnh tông màu tổng thể.
- Biết dùng node Glare để tạo hiệu ứng bloom/phát sáng.

## 2. Nội dung chính

**Compositor** là một workspace riêng (tab "Compositing") hoạt động trên nguyên lý node giống Shader Editor nhưng xử lý **ảnh sau khi đã render** thay vì vật liệu trước khi render — cho phép tinh chỉnh màu sắc, khử nhiễu, thêm hiệu ứng ánh sáng mà không cần render lại từ đầu mỗi lần chỉnh. Cần bật **Use Nodes** trong Compositor để bắt đầu; node gốc **Render Layers** cung cấp ảnh vừa render, nối vào node **Composite** ở cuối chuỗi để xuất kết quả cuối cùng.

**Denoise** giảm nhiễu hạt (fireflies) đặc trưng của Cycles khi Samples chưa đủ cao, dùng thuật toán AI-based để làm mượt nhiễu mà vẫn giữ chi tiết cạnh — đặt giữa Render Layers và Composite, thường kết hợp bật thêm Denoising Data trong View Layer Properties để có kết quả tốt hơn so với chỉ Denoise thuần ảnh màu.

**Color Balance** cho phép hiệu chỉnh tông màu tổng thể theo mô hình Lift/Gamma/Gain (hoặc Offset/Power/Slope tùy phiên bản) — Lift ảnh hưởng vùng tối, Gamma ảnh hưởng vùng trung, Gain ảnh hưởng vùng sáng, cho phép tạo tông màu điện ảnh (ví dụ ngả xanh vùng tối, ngả cam vùng sáng — teal and orange look phổ biến) mà không cần render lại.

**Glare** (Add > Filter > Glare) tạo hiệu ứng phát sáng quanh các vùng sáng/nguồn sáng trong ảnh, với các chế độ như **Bloom** (quầng sáng mềm lan tỏa quanh mọi điểm sáng), **Streaks** (tia sáng dài tỏa ra từ điểm sáng, mô phỏng ống kính máy ảnh thật), hay **Fog Glow** — đây chính là hiệu ứng đã dùng trong bài mũ bảo hiểm (034) và sẽ dùng lại ở ảnh render cuối cùng của dự án Module 08.

## 3. Quy trình thực hành gợi ý

1. Render một ảnh Cycles có nhiễu nhẹ, mở tab Compositing, bật Use Nodes.
2. Thêm node Denoise giữa Render Layers và Composite, so sánh ảnh trước/sau qua Viewer node (`Shift + Ctrl + Click` vào node để xem preview).
3. Thêm node Color Balance, thử chỉnh Lift ngả xanh nhẹ và Gain ngả cam nhẹ để tạo tông màu điện ảnh.
4. Thêm node Glare, chọn chế độ Bloom, chỉnh Threshold để chỉ các vùng đủ sáng mới phát glow.
5. Thử chế độ Streaks trên cùng ảnh, so sánh hiệu ứng với Bloom.
6. Kết nối chuỗi node hoàn chỉnh vào Composite, render và lưu kết quả cuối cùng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Bật Use Nodes trong Compositor | Checkbox "Use Nodes" trên thanh Compositor |
| Thêm node | `Shift + A` trong Compositor |
| Xem preview node bất kỳ (Node Wrangler) | `Ctrl + Shift + Click` vào node |
| Node Denoise | Add > Filter > Denoise |
| Node Color Balance | Add > Color > Color Balance |
| Node Glare | Add > Filter > Glare |

## 5. Lưu ý & lỗi thường gặp

- Quên bật Use Nodes khiến mọi thay đổi trong Compositor không có tác dụng lên ảnh render cuối.
- Glare Threshold quá thấp khiến toàn ảnh phát sáng lan tràn thay vì chỉ các điểm sáng thực sự.
- Denoise không thể "cứu" một ảnh render với Samples quá thấp — nó giảm nhiễu chứ không tái tạo chi tiết đã mất hoàn toàn.
- Chỉnh Color Balance quá tay có thể làm mất chi tiết ở vùng cực sáng hoặc cực tối (clipping) không thể phục hồi.

## 6. Checklist thực hành

- [ ] Đã bật Use Nodes và thiết lập chuỗi node Compositor cơ bản.
- [ ] Đã dùng Denoise để khử nhiễu một ảnh render Cycles.
- [ ] Đã dùng Color Balance để tạo một tông màu tùy chỉnh.
- [ ] Đã dùng Glare để tạo hiệu ứng bloom/streak trên vùng sáng.

## 7. Tóm tắt

Compositor khép lại Module 07 bằng bước hậu kỳ tinh chỉnh ảnh sau render — Denoise, Color Balance và Glare là bộ ba node cơ bản nhưng hiệu quả nhất để nâng chất lượng thị giác của bất kỳ ảnh render nào, và sẽ được dùng lại trực tiếp ở bước render cuối cùng của dự án Module 08.
