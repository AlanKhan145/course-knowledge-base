# Bài 22 — Generative UI, sáng tạo ảnh và ứng dụng đa phương thức

> **Module 05: Gemini và ứng dụng đa phương thức**  
> **Phạm vi bài giảng:** 55:56–61:28  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **generative ui, sáng tạo ảnh và ứng dụng đa phương thức** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Mô tả ứng dụng AI sinh giao diện tương tác từ yêu cầu.
2. Giải thích pipeline từ tư liệu đa ngôn ngữ đến trang web.
3. Phân biệt trực quan hóa tạo ra với bằng chứng có thể xác minh.

## 3. Kiến thức trọng tâm

### 3.1. AI chuyển từ sinh văn bản sang tạo trải nghiệm
Một mô hình có thể tạo ra **giao diện có thể tương tác** thay vì chỉ một đoạn trả lời. Ví dụ một vấn đề khoa học được chuyển thành mô phỏng có thanh trượt để người học khám phá ảnh hưởng của tham số. Đây là hướng **generative UI**: dùng khả năng sinh nội dung, mã và giao diện để giúp người dùng thao tác trực tiếp với tri thức.

### 3.2. Tạo sản phẩm từ tài liệu đa ngôn ngữ
Một ứng dụng minh họa kết hợp các công thức nấu ăn viết tay bằng tiếng Anh và tiếng Hàn:
1. Nhận diện chữ viết tay và ngôn ngữ.
2. Chuyển dữ liệu thành trường có cấu trúc: tên món, nguyên liệu, định lượng, bước làm.
3. Dịch hoặc phiên âm theo yêu cầu.
4. Sinh trang web song ngữ có khả năng duyệt/tìm kiếm.
5. Tạo hoặc chọn hình minh họa phù hợp.
6. Kiểm tra lại nội dung với bản viết tay ban đầu.

Cách làm này minh họa tiềm năng để người không chuyên lập trình tạo một ứng dụng nhỏ; sản phẩm vẫn cần test chức năng, giao diện và tính chính xác.

### 3.3. AI tạo và chỉnh hình ảnh
Một ví dụ là chuyển phác thảo kiến trúc thành hình nhìn chân thực, chú thích sơ đồ kỹ thuật hoặc tạo chuỗi hình minh họa chuyển động của vật thể. Với mục tiêu học tập, hình có thể làm ý tưởng dễ hiểu hơn; nhưng chi tiết vật lý, tỷ lệ và dữ kiện chú thích vẫn phải được xác minh độc lập.

### 3.4. Suy luận trực quan theo từng trạng thái
Với bài toán quả bóng lăn qua đường dốc, hệ thống có thể tạo chuỗi khung giải thích “trạng thái 1 → trạng thái 2 → trạng thái 3”. Một hình đẹp không chứng minh đường đi thực tế đúng; cần kiểm tra điều kiện ban đầu, va chạm và kết quả.

### 3.5. Nguyên tắc xây ứng dụng đáng tin
- Tách dữ liệu nguồn, phần AI tạo ra và kết quả đã xác minh.
- Có chức năng chỉnh sửa để người dùng sửa lỗi OCR/dịch/logic.
- Xác minh số liệu, tên riêng và quyền sử dụng ảnh.
- Kiểm thử tính dễ dùng và khả năng truy cập của UI.

**Phân biệt:** ảnh minh họa và UI có thể làm tốt việc truyền đạt, nhưng không thay thế kiểm nghiệm vật lý hoặc đo lường thực.

## 4. Bài tập thực hành

Phác thảo một mini-app “Học từ tài liệu”: nhập một mục lý thuyết, sinh câu hỏi và thanh trượt minh họa, có chú thích nội dung nào do AI tạo. Đề xuất 5 test UI và 3 test xác thực nội dung. Có thể dừng ở wireframe Markdown, không cần chạy API.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Generative UI khác trả lời văn bản thuần thế nào?**

A. Không bao giờ dùng mô hình ngôn ngữ  
B. Chỉ thay phông chữ cho bài viết  
C. Chỉ tăng độ dài câu  
D. Có thể cung cấp thành phần giao diện tương tác cho người dùng  

**Đáp án: D.** Điểm chính là tạo trải nghiệm sử dụng chứ không chỉ nội dung tĩnh.

**Câu 2. Bước quan trọng khi xây trang web từ công thức viết tay?**

A. Xác minh OCR, dịch và định lượng với bản gốc  
B. Xóa bản gốc ngay sau OCR  
C. Tin mọi hình ảnh được tạo là nguyên liệu thật  
D. Chỉ cần giao diện có màu đẹp  

**Đáp án: A.** Dữ liệu viết tay dễ sai nhận dạng nên cần đối chiếu.

**Câu 3. Rủi ro khi dùng hình AI minh họa sơ đồ vật lý là gì?**

A. Mọi hình đều là mô phỏng vật lý chuẩn  
B. Hình trông hợp lý nhưng diễn biến hoặc số liệu có thể sai  
C. Không thể biểu diễn nhiều trạng thái  
D. Mọi chú thích đều là bằng chứng khoa học  

**Đáp án: B.** Khả năng sinh ảnh không đồng nghĩa tính đúng đắn vật lý.

**Câu 4. Thiết kế ứng dụng học tập nên có thành phần nào?**

A. Chỉ nút tạo lại ngẫu nhiên  
B. Ẩn hoàn toàn nguồn tư liệu  
C. Cơ chế kiểm tra và chỉnh sửa nội dung AI tạo  
D. Không cần kiểm thử UI  

**Đáp án: C.** Con người cần khả năng kiểm soát, xác minh và sửa kết quả.

**Câu 5. Vì sao cần phân biệt nguồn và nội dung sinh?**

A. Để tăng số trường trong database  
B. Để làm model ít token hơn mọi lúc  
C. Để bỏ qua quyền sử dụng dữ liệu  
D. Để người đọc biết điều gì đã được xác thực  

**Đáp án: D.** Nguồn và sản phẩm tổng hợp có mức tin cậy khác nhau.

## 6. Tổng kết

- Generative UI chuyển câu trả lời thành công cụ tương tác.
- Nội dung được tạo cần quy trình kiểm tra, đặc biệt là dữ liệu chuyên môn.
