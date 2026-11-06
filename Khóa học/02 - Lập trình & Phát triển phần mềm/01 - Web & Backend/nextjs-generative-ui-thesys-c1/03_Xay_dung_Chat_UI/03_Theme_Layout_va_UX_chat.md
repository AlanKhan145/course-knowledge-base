# Tùy biến chủ đề, sidebar và giao diện chat

**Loại bài:** Bài học thực hành · **Mục tiêu:** Thiết kế layout chat có header, sidebar, khu phản hồi; đặt tiêu chí cho responsive, accessibility và trạng thái rỗng.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Khung UX của ứng dụng
Giao diện chat tốt có vùng nội dung chính, thanh lịch sử hội thoại, khung nhập, chỉ báo xử lý và chỗ dành cho nội dung đồ họa rộng. Không cố nhét bảng 12 cột vào cột chat 400px: cần cuộn ngang có chủ đích hoặc chuyển sang panel chi tiết. Layout có thể là full page hoặc panel bên cạnh dashboard.

## 2. Theme và logo
SDK C1 có `ThemeProvider` và các tùy chọn tùy biến C1Chat. Chọn màu, typography, dark/light dựa trên design system. Đọc prop chính xác theo bản SDK đang sử dụng trong [C1Chat reference](https://docs.thesys.dev/legacy/react-reference/c1-chat) và [theming](https://docs.thesys.dev/legacy/guides/styling/theming); không sao chép prop tên lạ chỉ vì thấy trong một ví dụ cũ. Thử logo URL đã được xác thực và có fallback khi ảnh không tải được.

## 3. CSS cho vùng chứa
```css
.chat-shell {
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
  min-height: 100dvh;
}
.chat-main { min-width: 0; overflow: hidden; }
@media (max-width: 760px) {
  .chat-shell { grid-template-columns: minmax(0, 1fr); }
  .chat-sidebar { display: none; }
}
```
Đây là CSS layout chuẩn, không phụ thuộc API C1. `minmax(0,1fr)` ngăn chart/bảng làm cột grid phình vượt viewport. Với mobile, thay sidebar bằng drawer có nút mở và đóng hỗ trợ bàn phím.

## 4. Trạng thái và phản hồi
Thiết kế ít nhất sáu trạng thái: chưa có hội thoại, đang gửi, streaming, thành công, lỗi, rỗng dữ liệu. Khi người dùng gửi form, giữ giá trị đã chọn và chặn thao tác trùng trong lúc request xử lý. Dùng nhãn, aria-label, focus ring, contrast đủ tốt và `aria-live` thích hợp cho thông báo trạng thái.

## 5. Checklist mini-lab
Kiểm tra desktop 1440px, tablet 768px, mobile 375px; thử bảng nhiều cột, chart dài, chuỗi chữ dài, phím Tab, thao tác Enter và loading chậm. Ghi lỗi UI kèm cách khắc phục.

## 6. Tổng kết
Theme là một phần của trải nghiệm; sự rõ ràng, responsive và khả năng tương tác ổn định mới quyết định chất lượng.

## 7. Câu hỏi ôn tập

**Câu 1.** minmax(0,1fr) thường giúp giải quyết vấn đề gì?

A. Giảm kích thước mô hình  
B. Cho cột grid co lại không tràn  
C. Xác thực API key  
D. Tạo thread  

**Đáp án:** B. **Giải thích:** Nó hạn chế nội dung rộng làm grid phình.

**Câu 2.** Đặc điểm của layout mobile phù hợp?

A. Hiển thị sidebar cố định 300px  
B. Xóa input  
C. Không có trạng thái lỗi  
D. Ẩn sidebar vào drawer có thể mở  

**Đáp án:** D. **Giải thích:** Mobile cần ưu tiên không gian và accessibility.

**Câu 3.** Tại sao table cần overflow hợp lý?

A. Vì nhiều cột có thể vượt chiều rộng chat  
B. Vì bảng không hợp với React  
C. Vì CSS chỉ dùng desktop  
D. Vì chỉ có một cột  

**Đáp án:** A. **Giải thích:** Bảng dài dễ phá layout nếu không quản lý overflow.

**Câu 4.** Trạng thái nào không nên thiếu?

A. Một hình nền ngẫu nhiên  
B. Bảy màu ngẫu nhiên  
C. Loading và lỗi có thông báo  
D. Chỉ số FPS  

**Đáp án:** C. **Giải thích:** Người dùng cần biết ứng dụng đang xử lý hay gặp lỗi.

**Câu 5.** Vì sao cần focus ring và nhãn?

A. Để tiết kiệm token  
B. Để hỗ trợ người dùng bàn phím và trợ năng  
C. Để API chạy nhanh  
D. Để xóa form  

**Đáp án:** B. **Giải thích:** Đây là các yêu cầu accessibility cơ bản.

