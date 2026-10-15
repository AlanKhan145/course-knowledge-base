# Bài 15 — Test-time compute và suy luận nhiều bước

> **Module 04: Tối ưu huấn luyện và suy luận**  
> **Phạm vi bài giảng:** 36:16–38:15  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **test-time compute và suy luận nhiều bước** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Giải thích test-time compute là gì.
2. Phân tích khi nào bước giải trung gian hữu ích hoặc gây lãng phí.
3. Thiết kế cách đánh giá lời giải toán có thể kiểm chứng.

## 3. Kiến thức trọng tâm

### 3.1. Không chỉ tăng compute lúc huấn luyện
Một cách cải thiện mô hình là dành thêm tài nguyên cho **lúc suy luận** (*test-time compute*): tạo nhiều bước trung gian, nhiều phương án ứng viên hoặc dành ngân sách kiểm tra trước khi xuất kết quả.

Một mô hình trả lời ngay có thể nhanh nhưng dễ mắc sai sót khi bài toán gồm nhiều bước phụ thuộc nhau. Nếu được huấn luyện hoặc hướng dẫn xử lý có cấu trúc, mô hình có thể chia bài toán thành các bước nhỏ hơn, theo dõi điều kiện và kiểm tra kết quả.

### 3.2. Ví dụ về few-shot reasoning
Giả sử câu hỏi cần tính 3 sản phẩm, mỗi sản phẩm giá 12.000 đồng, được giảm 5.000 đồng tổng đơn hàng. Phần giải thích công khai có thể theo mẫu:
1. Tiền hàng trước giảm: $3\times12.000=36.000$.
2. Trừ ưu đãi: $36.000-5.000=31.000$.
3. Kết luận: 31.000 đồng.

Một ví dụ được giải đúng có thể giúp mô hình học định dạng giải bài mới rõ ràng hơn. Tuy nhiên, nhiều chữ hơn **không luôn** chính xác hơn; cần đo kết quả, độ trễ và mức token.

### 3.3. So sánh baseline và reasoning mode
| Cách tiếp cận | Lợi thế | Hạn chế |
|---|---|---|
| Trả lời trực tiếp | Ít token, độ trễ thấp | Có thể bỏ sót bước |
| Lập kế hoạch / phân rã | Dễ kiểm tra cấu trúc | Tốn ngân sách suy luận |
| Nhiều ứng viên + chọn lọc | Có cơ hội sửa lỗi đơn lẻ | Tốn nhiều lượt chạy |

Một số thử nghiệm lịch sử trên tập bài toán **GSM8K** cho thấy việc khuyến khích giải có cấu trúc giúp cải thiện đáng kể tỉ lệ bài giải đúng. Đây là bằng chứng của thiết lập nghiên cứu, không có nghĩa mọi nhiệm vụ đều cần giải nhiều bước.

### 3.4. Đo lường test-time scaling
Cần lưu độ chính xác cuối, số token đầu ra, thời gian và chi phí. Với nhiệm vụ có đáp án kiểm tra được, nên dùng **verifier** độc lập như phép tính, bộ test hoặc đối chiếu điều kiện; không chỉ tin vào lời giải trông thuyết phục.

### 3.5. Phân bổ compute thích ứng
Câu hỏi tra cứu đơn giản có thể trả lời nhanh; bài toán khó, nhiều ràng buộc cần nhiều ngân sách hơn. Quy tắc chọn chế độ nên dựa vào mức độ khó và giá trị của độ chính xác, thay vì luôn chạy tối đa.

## 4. Bài tập thực hành

Soạn 5 bài toán có đáp án kiểm chứng được. So sánh (a) yêu cầu trả lời ngay và (b) yêu cầu trình bày một lời giải ngắn có bước kiểm tra. Lưu kết quả vào bảng `accuracy`, `output_tokens`, `latency`; chỉ rút kết luận dựa số liệu đo được.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Test-time compute nghĩa là gì?**

A. Tài nguyên tính toán dành cho giai đoạn tạo và kiểm tra câu trả lời  
B. Chỉ số GPU mua trước khi train  
C. Số lượng nhãn trong tập train  
D. Thời gian tải bản PDF  

**Đáp án: A.** Đây là ngân sách bổ sung trong inference.

**Câu 2. Vì sao tạo nhiều bước không luôn tốt hơn?**

A. Vì mô hình không bao giờ tạo được các bước  
B. Nó tốn token và có thể kéo dài hoặc lan truyền lỗi  
C. Vì loss không tồn tại lúc train  
D. Vì mọi tác vụ đều là cộng hai số  

**Đáp án: B.** Phải đánh đổi chất lượng thực tế với chi phí và độ trễ.

**Câu 3. GSM8K trong bối cảnh này được dùng để làm gì?**

A. Đo chất lượng video được tạo  
B. Giám sát bộ nhớ TPU  
C. Đánh giá khả năng giải bài toán có đáp án kiểm tra được  
D. Đo tốc độ kết nối giữa các rack  

**Đáp án: C.** Bài toán toán học cho phép so sánh tỷ lệ trả lời đúng.

**Câu 4. Khi hệ thống có thể chạy unit test cho mã, bước nào đáng tin hơn?**

A. Chỉ đếm số từ giải thích  
B. Tin mọi khẳng định tự đánh giá của mô hình  
C. Bỏ qua kết quả trình biên dịch  
D. Thực thi test để kiểm chứng thay vì chỉ đọc lời giải thích  

**Đáp án: D.** Verifier độc lập tạo tín hiệu đúng/sai đáng tin hơn hình thức câu trả lời.

**Câu 5. Để đánh giá reasoning mode công bằng, nên ghi những chỉ số nào?**

A. Accuracy, latency, token và chi phí  
B. Chỉ tổng số chữ  
C. Chỉ mẫu prompt có dài nhất không  
D. Chỉ tên model  

**Đáp án: A.** Sự cải thiện chất lượng cần đi kèm chi phí tính toán.

## 6. Tổng kết

- Test-time compute đổi thêm chi phí suy luận lấy cơ hội tăng độ chính xác.
- Cần verifier khi bài toán cho phép kiểm chứng khách quan.
