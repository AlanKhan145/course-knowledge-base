# Thử C1 Playground và đặt bài toán đầu tiên

**Loại bài:** Bài học thực hành · **Mục tiêu:** Sử dụng Playground để thử prompt; lập tiêu chí đánh giá đầu ra và phát hiện kết quả thiếu dữ liệu thực.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Mục đích của Playground
Playground giúp quan sát phản hồi C1 trước khi tạo ứng dụng Next.js. Đây là nơi kiểm tra xem loại câu hỏi nào sinh được card, chart, table, form; không phải công cụ xác minh độ đúng của dữ liệu. Nếu yêu cầu “thời tiết tại Dallas hôm nay”, biểu đồ có thể đẹp nhưng vẫn cần nguồn dữ liệu thời tiết thực.

## 2. Quy trình thử
1. Mở giao diện Thesys dành cho C1 nếu tài khoản vẫn có quyền truy cập sản phẩm legacy; tham khảo danh mục tài liệu ở [C1 archive](https://docs.thesys.dev/legacy/index).
2. Chọn mẫu/phiên bản mô hình được tài khoản hỗ trợ. Không chép model ID cũ từ video nếu console đã thay đổi.
3. Nhập prompt cụ thể: “Tạo bảng 5 sản phẩm với cột giá, giá vốn và biên lợi nhuận từ dữ liệu tôi cung cấp”.
4. Quan sát sự khác biệt giữa biểu đồ, table, form và đoạn văn; thử một hành động như nhập mã chứng khoán.
5. Ghi nhận thành phần nào hợp lý, dữ liệu nào thiếu, hành động nào cần backend.

## 3. Prompt mẫu có thể tái sử dụng
```text
Bạn là trợ lý phân tích. Chỉ dùng dữ liệu được cung cấp bên dưới.
Nếu dữ liệu không có, hãy thông báo chưa đủ căn cứ.
Với số liệu theo thời gian, ưu tiên biểu đồ có nhãn và đơn vị.
Nếu cần người dùng chọn một phương án, hiển thị thành phần nhập liệu.
Kèm 2-3 câu giải thích kết luận chính.
```
Prompt này hướng dẫn *hình thức* nhưng không cho phép bịa dữ liệu. Phần backend sẽ quyết định dữ liệu nào thực sự được cấp cho mô hình.

## 4. Bảng đánh giá thử nghiệm
| Tiêu chí | Câu hỏi kiểm tra |
| --- | --- |
| Phù hợp | UI có giúp giải quyết đúng intent? |
| Dữ liệu | Số liệu có nguồn, nhãn, đơn vị? |
| Tương tác | Người dùng có hoàn tất hành động? |
| Trạng thái | Có thông báo loading, lỗi, rỗng? |
| Accessibility | Có keyboard navigation và nhãn rõ? |

## 5. Mini-lab
Thử cùng một dataset nhỏ với 3 prompt: xem xu hướng, so sánh SKU, đặt câu hỏi trắc nghiệm. Chụp lại hoặc ghi cấu trúc UI và nêu ưu/nhược của từng phản hồi. Không chấm đúng chỉ vì “trông đẹp”.

## 6. Tổng kết
Playground là phòng thí nghiệm trải nghiệm và prompt. Độ chính xác của dữ liệu và an toàn thao tác được giải quyết trong ứng dụng thật.

## 7. Câu hỏi ôn tập

**Câu 1.** Playground nên dùng để kiểm tra gì?

A. Hiệu năng ổ cứng  
B. Kiểu UI và hành vi prompt  
C. Tài khoản ngân hàng  
D. Cấu hình router mạng  

**Đáp án:** B. **Giải thích:** Playground giúp khám phá biểu diễn và tương tác.

**Câu 2.** Nếu chatbot tạo biểu đồ thời tiết nhưng không có dữ liệu thật?

A. Mặc định biểu đồ chính xác  
B. Tăng font  
C. Cần nguồn dữ liệu đáng tin cậy  
D. Gửi kết quả như cảnh báo chính thức  

**Đáp án:** C. **Giải thích:** Trình bày đẹp không chứng minh tính đúng.

**Câu 3.** Prompt nào tốt nhất cho KPI?

A. Sử dụng dữ liệu cho trước và ghi đơn vị  
B. Bịa số nếu thiếu  
C. Luôn vẽ 3 biểu đồ  
D. Ẩn dữ liệu gốc  

**Đáp án:** A. **Giải thích:** Định hướng rõ về dữ liệu và cách biểu diễn.

**Câu 4.** Một tiêu chí usability quan trọng là?

A. Tên file CSS  
B. Số lượng màu  
C. Ảnh nền  
D. Người dùng hoàn thành thao tác được  

**Đáp án:** D. **Giải thích:** UI sinh ra cần phục vụ mục tiêu.

**Câu 5.** Nếu model ID từ video đã lỗi thời?

A. Dùng mã bất kỳ  
B. Tra phiên bản được console hỗ trợ  
C. Đổi ngẫu nhiên từng ký tự  
D. Xóa thư viện React  

**Đáp án:** B. **Giải thích:** Model ID là cấu hình phụ thuộc dịch vụ theo thời gian.

