# Bài 08 — Hoàn thiện và kiểm tra

## Mục tiêu

Kiểm tra toàn bộ lens trước khi xuất bản.

## Checklist chức năng

- [ ] Model bám đúng đầu.
- [ ] Mắt và miệng nằm sát bề mặt model.
- [ ] Quay đầu trái/phải không làm Face Inset nổi khỏi mesh.
- [ ] Bone dưới có wobble rõ ràng.
- [ ] Wobble không quá chậm hoặc quá giật.
- [ ] Background luôn nằm phía sau model.
- [ ] Background hoạt động ở portrait và landscape.
- [ ] Tap chuyển được giữa background và greenscreen.

## Checklist tổ chức project

- [ ] Đặt tên object rõ ràng.
- [ ] Đặt tên Render Target là `Background`.
- [ ] Script `SmoothFollow.js` nằm trong Resources.
- [ ] Bone wobble không còn là child trực tiếp/gián tiếp của Head Binding theo cấu trúc gây triệt tiêu hiệu ứng.

## Điều chỉnh cuối

Không có một giá trị `smoothSpeed` duy nhất đúng cho mọi model. Hãy chọn mức khiến vật thể có độ trễ vừa đủ để nhìn “mềm” nhưng vẫn theo kịp đầu người dùng.

## Sản phẩm cuối khóa

Tạo một lens dùng một vật thể riêng của bạn, không sao chép nguyên mẫu Potato. Giữ đặc trưng kỹ thuật của phong cách: **face inset + phần thân wobble + background toàn màn hình**.
