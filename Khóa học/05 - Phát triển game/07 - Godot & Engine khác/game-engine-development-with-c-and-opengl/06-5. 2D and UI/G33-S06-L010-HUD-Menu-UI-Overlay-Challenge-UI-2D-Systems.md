# HUD & Menu UI Overlay Challenge (UI + 2D Systems)

**Khóa học:** Game Engine Development with C++ and OpenGL  
**Module 06:** 5. 2D and UI  
**Thứ tự:** Bài 010 · **Loại mục Udemy:** PRACTICE · **Thời lượng metadata:** Không có thời lượng công bố  
**Trang khóa học:** https://www.udemy.com/course/game-engine-development-with-c-and-opengl  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Ôn tập và vận dụng chủ đề **HUD & Menu UI Overlay Challenge (UI + 2D Systems)** trong phạm vi module. Đây là bài luyện tập bổ trợ tự biên soạn; câu hỏi nguyên bản của Udemy không được công khai trong metadata.

## 2. Kiến thức sử dụng

Thử thách HUD và menu kết hợp UI với hệ thống 2D để tạo lớp hiển thị điều hướng và thông tin cho người chơi.

## 3. Bài thực hành

**Nhiệm vụ:** Làm menu bắt đầu và HUD có điểm số, dùng button để vào game rồi cập nhật điểm khi đạt mục tiêu.

- Viết rõ dữ liệu đầu vào và giả định.
- Đưa ra quy tắc kiểm chứng kết quả.
- Ghi những sai số, trường hợp biên và hạn chế.

## 4. Câu hỏi tự kiểm tra

### Câu 1

Khi học “HUD & Menu UI Overlay Challenge (UI + 2D Systems)”, cách nào giúp tránh kết luận sai nhất?

A. Chỉ thử một lần trong editor  
B. Làm một scene thử nhỏ, ghi rõ phiên bản engine và kiểm tra lại với đầu vào hoặc tốc độ khung hình khác  
C. Bỏ qua cảnh báo trong console  
D. Sao chép mã mẫu mà không đọc tài liệu  

**Đáp án:** B. **Giải thích:** Scene thử nhỏ kèm môi trường rõ ràng giúp tái lập kết quả và phát hiện lỗi sớm.

### Câu 2

Chuyển động hoặc thời gian liên quan đến “HUD & Menu UI Overlay Challenge (UI + 2D Systems)” nên được xử lý thế nào để chạy giống nhau ở nhiều mức FPS?

A. Gắn trực tiếp vào số khung hình  
B. Tăng tốc độ để bù cho FPS thấp  
C. Nhân với delta time hoặc dùng bước vật lý cố định  
D. Tắt giới hạn FPS  

**Đáp án:** C. **Giải thích:** Delta time hoặc bước cố định làm hành vi không phụ thuộc vào tốc độ khung hình.

### Câu 3

Khi tối ưu liên quan đến “HUD & Menu UI Overlay Challenge (UI + 2D Systems)”, nguyên tắc nào đúng?

A. Đo bằng profiler trước rồi mới tối ưu điểm nghẽn thật sự  
B. Tối ưu mọi script ngay từ đầu  
C. Chỉ dựa vào cảm giác về tốc độ  
D. Bỏ qua tính đúng đắn để đổi lấy tốc độ  

**Đáp án:** A. **Giải thích:** Số liệu từ profiler cho biết đâu là điểm nghẽn; tối ưu không đo dễ tốn công mà không có hiệu quả.

### Câu 4

Nếu “HUD & Menu UI Overlay Challenge (UI + 2D Systems)” cần dữ liệu dùng chung (điểm số, trạng thái, cấu hình), cách nào dễ bảo trì hơn?

A. Biến toàn cục rải rác khắp nơi  
B. Một lớp quản lý duy nhất làm mọi việc  
C. Sao chép giá trị vào từng đối tượng  
D. Tách dữ liệu và logic, dùng sự kiện hoặc tài nguyên dữ liệu để các phần giao tiếp lỏng lẻo  

**Đáp án:** D. **Giải thích:** Tách dữ liệu khỏi logic và giao tiếp qua sự kiện giúp đổi một phần mà không phá phần khác.

### Câu 5

Điều nào phù hợp khi đưa “HUD & Menu UI Overlay Challenge (UI + 2D Systems)” vào dự án để có thể phát hành?

A. Chỉ giữ bản chạy trong editor  
B. Kiểm tra bản build trên thiết bị đích, ghi lại phiên bản và dùng quản lý phiên bản mã nguồn  
C. Bỏ qua kiểm thử vì đã chơi thử  
D. Không ghi lại các giả định  

**Đáp án:** B. **Giải thích:** Bản build thật và phiên bản được ghi lại giúp lỗi chỉ xuất hiện khi đóng gói bị phát hiện và tái lập.

## 5. Tiêu chí hoàn thành

Có kết quả chạy hoặc lời giải có thể kiểm tra độc lập, mô tả giả định và các bước tái lập.
