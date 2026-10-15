# Bài 11 — TPU: tăng tốc suy luận và huấn luyện AI

> **Module 03: Hạ tầng AI quy mô lớn**  
> **Phạm vi bài giảng:** 15:03–21:07  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **tpu: tăng tốc suy luận và huấn luyện ai** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Giải thích vì sao cần accelerator chuyên dụng cho ML.
2. Phân biệt TPUv1 suy luận và các pod TPU huấn luyện đời sau.
3. Đọc số liệu benchmark phần cứng theo đúng bối cảnh.

## 3. Kiến thức trọng tâm

### 3.1. Bài toán kinh tế đằng sau chip AI
Một mô hình nhận dạng giọng nói có thể đạt chất lượng cao nhưng trở nên khó triển khai nếu phục vụ quá nhiều người dùng trên CPU thông thường. Trong phép tính quy mô lớn được nêu, nếu khoảng một tỷ người dùng tương tác vài phút mỗi ngày, hạ tầng truyền thống cần nguồn lực tính toán quá lớn so với khả năng triển khai thời kỳ đó.

### 3.2. Tại sao thiết kế chip chuyên dụng?
Neural networks dùng dày đặc các phép toán đại số tuyến tính như nhân ma trận, dot product và chuẩn hóa. Một accelerator chuyên dụng có thể dành nhiều tài nguyên silicon cho khối tính toán phù hợp, thay vì hỗ trợ mọi tác vụ đa dụng của CPU.

Một quan sát nữa: nhiều tác vụ suy luận chịu được **độ chính xác số thấp hơn** mà vẫn giữ chất lượng chấp nhận được. TPUv1 tận dụng phép tính giảm độ chính xác và khối nhân ma trận tối ưu.

### 3.3. Đọc đúng các con số lịch sử
Trong so sánh TPUv1 được nhắc đến, chip mang lại tốc độ khoảng **15–30 lần** và hiệu quả năng lượng khoảng **30–80 lần** so với các cấu hình CPU/GPU đối chứng thời đó. Không được dùng kết quả lịch sử này để khẳng định TPUv1 nhanh hơn phần cứng hiện đại ở mọi tác vụ.

### 3.4. Từ một chip đến một pod
Huấn luyện mô hình lớn cần nhiều accelerator có kết nối băng thông cao để truyền gradient, activation và tham số. Qua các thế hệ TPU, các pod lớn và kết nối chuyên dụng cho phép tạo hệ thống tương tự siêu máy tính ML.

Một cải tiến đáng chú ý là **kết nối quang có thể tái cấu hình**, giúp thay đổi kết nối logic giữa các rack và thay thiết bị hỏng linh hoạt hơn.

### 3.5. Những chỉ số cần đo
| Chỉ số | Ý nghĩa |
|---|---|
| FLOPs / peak FLOPs | Năng lực thực hiện phép tính |
| Memory bandwidth | Tốc độ đưa dữ liệu đến đơn vị tính toán |
| Interconnect bandwidth | Tốc độ giao tiếp giữa chip |
| Performance per watt | Hiệu quả sử dụng điện |
| Throughput / latency | Hiệu năng thực tế của workload |

Peak FLOPs cao không bảo đảm hệ thống xử lý token nhanh nếu bị giới hạn băng thông bộ nhớ.

## 4. Bài tập thực hành

Lập bảng so sánh CPU, GPU, TPU theo tính đa dụng, phép nhân ma trận, khả năng scale và yêu cầu phần mềm. Chọn phương án giả định cho (a) inference di động và (b) train model lớn, giải thích nhu cầu bộ nhớ và giao tiếp.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Vì sao TPU tập trung vào đại số tuyến tính?**

A. Nhiều mạng nơ-ron cần rất nhiều phép nhân ma trận  
B. Vì TPU phải chạy mọi ứng dụng desktop  
C. Vì văn bản không thể chuyển thành số  
D. Vì GPU không thể tính số thực  

**Đáp án: A.** Tối ưu loại phép tính chiếm phần lớn workload đem lại hiệu quả.

**Câu 2. Ý nghĩa của giảm precision khi suy luận là gì?**

A. Bắt buộc làm độ chính xác dự đoán bằng 0  
B. Có thể tăng hiệu quả nếu chất lượng vẫn đạt yêu cầu  
C. Luôn dùng 64-bit mới nhanh  
D. Xóa hoàn toàn lỗi số học  

**Đáp án: B.** Kiểu số ít bit hơn giúp tiết kiệm năng lượng và băng thông khi phù hợp.

**Câu 3. TPU pod khác chip TPU đơn lẻ ở điểm nào?**

A. Chỉ là tên phần mềm chatbot  
B. Chỉ lưu tài liệu PDF  
C. Gồm nhiều chip được kết nối để tính toán phân tán  
D. Không liên quan đến giao tiếp chip  

**Đáp án: C.** Pod là cấu hình nhiều thiết bị cùng làm việc.

**Câu 4. Tại sao không dùng benchmark TPUv1 lịch sử để so với GPU hiện nay?**

A. Vì benchmark nào cũng bịa đặt  
B. Vì FLOPs không đo được  
C. Vì TPU không được dùng thực tế  
D. Thiết bị đối chứng và workload là của giai đoạn lịch sử riêng  

**Đáp án: D.** So sánh hợp lệ cần baseline tương đương về thời gian và workload.

**Câu 5. Mô hình có peak FLOPs cao nhưng latency lớn có thể đang gặp gì?**

A. Nút thắt băng thông bộ nhớ hoặc giao tiếp  
B. Thiếu số lượng nhãn lớp  
C. Tokenizer bị mất từ điển trong mọi trường hợp  
D. Không có phép nhân nào được thực hiện  

**Đáp án: A.** Năng lực tính toán lý thuyết có thể bị giới hạn bởi đưa dữ liệu tới bộ xử lý.

## 6. Tổng kết

- Hardware và thuật toán ML được đồng thiết kế để tăng hiệu quả.
- Đánh giá chip phải tính workload, baseline, độ chính xác số và hiệu quả năng lượng.
