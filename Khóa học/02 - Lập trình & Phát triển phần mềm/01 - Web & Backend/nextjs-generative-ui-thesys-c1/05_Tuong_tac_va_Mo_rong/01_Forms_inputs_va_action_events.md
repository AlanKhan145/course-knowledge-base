# Form, input, state và vòng lặp hành động

**Loại bài:** Bài học thực hành · **Mục tiêu:** Thiết kế được vòng lặp input → event → backend → phản hồi cập nhật; phân biệt action tiếp tục hội thoại và action nghiệp vụ.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Vì sao form là bước ngoặt
Một AI assistant dùng chart nhưng không có form vẫn giống một báo cáo có ảnh minh họa. Khi có select, input, button, người dùng trực tiếp thao tác trong tin nhắn. Ví dụ người dùng nhập `AAPL` và nhấn “Xem dữ liệu”, lần gọi tiếp theo phải chứa giá trị vừa nhập, không phải chỉ lưu trên DOM mà mô hình không biết.

## 2. Các loại event
Sự kiện **continue conversation** gửi nội dung người dùng đã chọn trở lại trợ lý. Sự kiện **open URL** chuyển người dùng tới đường dẫn xác thực. **Custom action** gọi nghiệp vụ như tải báo cáo hoặc mở panel. Mỗi sự kiện cần payload có schema và trình xử lý tương ứng, không nên gửi chuỗi tự do để model tự suy đoán hành động rủi ro.

## 3. Kiểm tra form
Bắt buộc validate kiểu dữ liệu, độ dài, giá trị nằm trong khoảng và quyền người dùng. Phân biệt lỗi xác thực (không được truy cập), lỗi dữ liệu (nhập sai) và lỗi mạng (có thể thử lại). Form tốt giữ giá trị khi request lỗi, chặn gửi trùng và có thông báo trạng thái.

## 4. Phản hồi cho mô hình
Thông điệp cho mô hình nên chứa dữ liệu có ngữ nghĩa. Ví dụ:
```json
{
  "action": "select_ticker",
  "ticker": "AAPL",
  "range": "1M"
}
```
Đây là định dạng nghiệp vụ **minh họa** do ứng dụng tự quy định, không phải payload C1 bắt buộc. Server có thể chuyển nó thành user message, truy vấn API được phép, rồi yêu cầu C1 render kết quả. Với URL từ AI, kiểm tra scheme `https:` và domain allowlist nếu mở tài nguyên nhạy cảm.

## 5. Lab
Đặc tả form chọn mã SKU với input chuỗi, select nhóm hàng, nút gửi. Liệt kê sự kiện thành công, lỗi SKU không tồn tại, thiếu quyền và lỗi mạng; với mỗi trạng thái vẽ trạng thái button và nội dung phản hồi.

## 6. Tổng kết
Tương tác không chỉ là click được nút: action phải có ý nghĩa, dữ liệu hợp lệ, phản hồi rõ và kiểm soát server.

## 7. Câu hỏi ôn tập

**Câu 1.** Sau khi user chọn ticker, làm sao AI biết giá trị?

A. Phải gửi giá trị qua event/backend  
B. Đổi CSS  
C. Tự đoán từ ảnh  
D. Không cần làm gì  

**Đáp án:** A. **Giải thích:** State tương tác phải được chuyển vào luồng xử lý.

**Câu 2.** Action nào nên tạo lượt hội thoại mới?

A. Download file local  
B. Đổi màu  
C. continue_conversation  
D. Render ảnh nền  

**Đáp án:** C. **Giải thích:** Nó đưa lựa chọn làm ngữ cảnh cho LLM.

**Câu 3.** Khi form nhập sai kiểu cần?

A. Bỏ qua  
B. Báo validation error  
C. Xóa database  
D. Gửi thanh toán  

**Đáp án:** B. **Giải thích:** Đầu vào phải được kiểm tra và phản hồi rõ.

**Câu 4.** Payload JSON minh họa trong bài là?

A. Contract bắt buộc của C1  
B. URL hệ thống  
C. Mã nguồn plugin  
D. Schema nghiệp vụ tự thiết kế  

**Đáp án:** D. **Giải thích:** Đó không phải giao thức C1 mặc định.

**Câu 5.** Khi server lỗi mạng tạm thời nên?

A. Giữ giá trị và cho phép retry  
B. Xóa input vô điều kiện  
C. Kết luận người dùng không có quyền  
D. Tăng giá sản phẩm  

**Đáp án:** A. **Giải thích:** Tránh mất công nhập lại và hỗ trợ phục hồi.

