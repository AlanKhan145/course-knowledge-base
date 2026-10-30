# Bộ tình huống kiểm thử Memory Agent

| ID | Tin nhắn mới | Kỳ vọng |
| --- | --- | --- |
| T01 | Nhà tôi có sáu người. | Tạo `attribute` cho `family`. |
| T02 | Vợ tôi không ăn thịt. | Tạo `dislike` cho `wife` (mô hình tối giản). |
| T03 | Con gái út bị dị ứng sữa. | Tạo `allergy` cho `youngest_daughter`. |
| T04 | Gia đình tôi bây giờ có bảy người. | Cập nhật `family`, không tạo bản trùng. |
| T05 | Hãy quên thông tin tôi thích taco. | Xóa ký ức `like` về taco nếu có. |
| T06 | Cảm ơn! | Không làm gì. |
| T07 | Tuần này tôi không muốn ăn taco. | Không tự đổi sở thích lâu dài. |
| T08 | Người bị dị ứng là con trai tôi, không phải con gái. | Chỉnh lại chủ thể nếu xác nhận đúng; nếu còn mơ hồ, hỏi lại. |
| T09 | Tôi thích cà phê. | Tạo `like` cho `user`. |
| T10 | Tôi không ăn được sữa. | Xác minh là dị ứng hay dạng hạn chế khác trước khi gắn nhãn `allergy`. |

## Kiểm thử đa phiên

Phiên 1 ghi T01–T03 và lưu vào cơ sở dữ liệu trên đĩa. Đóng chương trình, mở tiến trình mới, đọc lại toàn bộ ký ức đang hoạt động của cùng `user_id`. Sau đó thay đổi T04; kiểm tra chỉ còn một số lượng thành viên có hiệu lực.

## Tiêu chí chấm

- Đúng chủ thể và category.
- Không nhân bản dữ kiện khi lặp lại cùng thông điệp.
- Xóa/sửa đúng bản ghi của đúng người dùng.
- Không suy diễn dị ứng từ từ khóa “không thích”.
- Ký ức còn tồn tại sau khi mở phiên mới.
