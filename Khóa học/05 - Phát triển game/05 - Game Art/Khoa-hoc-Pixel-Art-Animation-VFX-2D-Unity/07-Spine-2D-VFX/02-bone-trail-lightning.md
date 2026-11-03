# Bài 02 — Bone/mesh tạo vệt kiếm, aura và tia điện

> Module: Thủ pháp Spine: linked mesh, bone, trail, tái sử dụng VFX  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T07 03:30–08:50

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **bone/mesh tạo vệt kiếm, aura và tia điện**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video minh họa kỹ thuật gắn hiệu ứng vào xương tay, dùng biến dạng/scale để làm điện năng nối giữa hai bàn tay, quầng glow và tia sét tiêu tán theo tầng. Thay vì vẽ mọi frame, animation được sinh từ biến đổi của các attachment nhỏ.

### Quy trình
1. Tạo một attachment glow hình tròn đơn giản và gắn vào bone ở tay.
2. Dùng một strip điện/kiếm 2–3 frame; gắn bone ở nguồn năng lượng, điều chỉnh scale/rotation theo chuyển động của tay.
3. Đặt hai bone làm điểm neo đầu/cuối cho năng lượng, thử biến dạng mesh nối điểm neo để vẫn bám khi nhân vật cử động.
4. Tạo tia chính và vài nhánh phụ. Cho nhánh giảm alpha/số lượng trước, sau đó lõi điện tắt.
5. Đặt vài quầng sáng xuất hiện lệch nhau 1–2 frame, tránh tất cả hạt phát cùng thời điểm.
6. Nếu scale xương làm méo hướng hiệu ứng, kiểm tra chế độ kế thừa scale/rotation của bone và bù lại transform.

### Lưu ý
Chế độ kế thừa transform phụ thuộc cấu trúc rig; hãy lưu pose tham chiếu trước khi thay đổi bone hierarchy.

## Bài tập bắt buộc

1. Tạo glow gắn tay và tia sét biến dạng theo 2 anchor.
2. Dùng 1 sequence cho ít nhất 2 kỹ năng.

## Tiêu chí hoàn thành

VFX bám tay khi tay dịch chuyển, không trôi ra khỏi nhân vật.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
