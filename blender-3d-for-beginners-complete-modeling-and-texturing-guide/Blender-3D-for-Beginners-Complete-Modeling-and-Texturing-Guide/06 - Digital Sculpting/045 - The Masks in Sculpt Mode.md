# 045 — The Masks in Sculpt Mode

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | The Masks in Sculpt Mode |
| **Thời lượng** | 2:55 |
| **Chủ đề chính** | Bảo vệ vùng bằng Mask, invert, clear |

## 1. Mục tiêu bài học

- Biết vẽ Mask để khóa một vùng khỏi tác động của brush.
- Biết dùng Invert Mask và Clear Mask.
- Hiểu ứng dụng của Mask trong việc tách/đùn (extract) hình dạng mới.

## 2. Nội dung chính

**Mask** trong Sculpt Mode được vẽ bằng cách giữ **Ctrl** và kéo chuột (giống thao tác vẽ vùng chọn), tô đen vùng được bảo vệ — mọi brush sculpt sau đó sẽ không còn tác động lên vùng đã bị mask, cho phép sculpt an toàn các vùng lân cận mà không lo làm hỏng chi tiết đã hoàn thiện. Mask hiển thị dưới dạng lớp phủ tối trên bề mặt, cường độ mask có thể là toàn phần hoặc một phần (gradient) tùy lực vẽ.

**Invert Mask** (thường qua menu Mask hoặc phím tắt `Ctrl + I`) đảo ngược vùng được bảo vệ và vùng chịu tác động — hữu ích khi đã vẽ mask quanh một chi tiết nhỏ nhưng thực ra muốn chỉnh sửa đúng chi tiết đó và bảo vệ phần còn lại. **Clear Mask** (Alt+M hoặc menu Mask) xóa toàn bộ mask hiện có, trả lại trạng thái sculpt tự do trên toàn bộ mesh.

Một ứng dụng nâng cao của Mask là **Extract** (menu Mask > Mask Extract): biến vùng được mask thành một object mesh độc lập, phồng lên theo độ dày chỉ định — kỹ thuật nhanh để tách một chi tiết nhô ra (như sừng, mai giáp, gờ) thành một phần hình học riêng mà không cần sculpt tay từ đầu.

## 3. Quy trình thực hành gợi ý

1. Trên một mesh đã sculpt sơ bộ, giữ Ctrl và kéo chuột để vẽ Mask quanh một vùng cần giữ nguyên (ví dụ khuôn mặt đã hoàn thiện).
2. Dùng Clay Strips sculpt tự do trên các vùng còn lại, quan sát vùng bị mask không thay đổi.
3. Dùng Invert Mask, thử sculpt lại và quan sát hiệu ứng đảo ngược.
4. Dùng Clear Mask để xóa toàn bộ, trả lại sculpt tự do.
5. Thử vẽ mask một vùng nhỏ và dùng Mask Extract để tách nó thành một object riêng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Vẽ Mask | Giữ `Ctrl` + kéo chuột |
| Invert Mask | Menu Mask > Invert Mask (`Ctrl + I`) |
| Clear Mask | Menu Mask > Clear Mask (`Alt + M`) |
| Mask Extract | Menu Mask > Mask Extract |

## 5. Lưu ý & lỗi thường gặp

- Quên đang có Mask hoạt động là lý do phổ biến khiến brush "không có tác dụng gì" trên một vùng — luôn kiểm tra overlay mask (vùng tối) trước khi nghi ngờ brush bị lỗi.
- Vẽ Mask với falloff quá mềm (gradient rộng) có thể để lại vùng chuyển tiếp bị sculpt một phần, gây đường ranh giới không rõ ràng.
- Mask Extract với độ dày (thickness) quá nhỏ có thể tạo ra hình học mỏng, dễ lỗi khi Boolean hoặc render sau này.

## 6. Checklist thực hành

- [ ] Đã vẽ Mask thành công để bảo vệ một vùng khỏi brush.
- [ ] Đã dùng Invert Mask và Clear Mask.
- [ ] Đã thử tính năng Mask Extract để tách một chi tiết thành object riêng.

## 7. Tóm tắt

Mask là công cụ kiểm soát vùng ảnh hưởng thiết yếu trong sculpting — cho phép làm việc chính xác trên từng phần của mesh mà không lo phá hỏng các chi tiết đã hoàn thiện ở vùng khác.
