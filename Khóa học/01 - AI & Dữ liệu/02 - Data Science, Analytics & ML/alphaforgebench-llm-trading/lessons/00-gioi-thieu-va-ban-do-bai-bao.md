# Bài 00 - Giới thiệu AlphaForgeBench và bản đồ bài báo

**Loại:** Lesson  
**Nguồn chính:** PDF trang 1-2  
**Mức độ:** Nền tảng

## 1. Bài toán mà bài báo muốn giải quyết

Sự phát triển của LLM đã khiến benchmark tài chính chuyển từ kiểm tra kiến thức tĩnh sang mô phỏng giao dịch tương tác. Tuy nhiên, bài báo chỉ ra một thất bại quan trọng: khi dùng LLM làm **trading agent trực tiếp**, cùng một mô hình và cùng dữ liệu có thể tạo ra chuỗi hành động rất khác giữa các lần chạy.

Điểm trung tâm của AlphaForgeBench là đổi cách đặt bài toán. Thay vì hỏi LLM mỗi bước nên BUY/HOLD/SELL gì, benchmark yêu cầu LLM **viết logic chiến lược có thể thực thi**. Sau đó một engine xác định chạy chiến lược trên dữ liệu lịch sử.

## 2. Đổi vai trò của LLM

Có thể hiểu sự thay đổi này theo hai mô hình:

### 2.1 Trading agent trực tiếp

Dữ liệu thị trường -> LLM -> hành động rời rạc -> cập nhật trạng thái -> lặp lại.

Trong cách này, tính ngẫu nhiên và độ nhạy của LLM can thiệp ở mọi bước thời gian.

### 2.2 Quant researcher sinh chiến lược

Mô tả chiến lược -> LLM -> code chiến lược -> backtest engine -> metric.

Ở đây, LLM chỉ tham gia ở giai đoạn sinh logic. Phần thực thi sau đó là xác định và có thể tái lập.

## 3. Ba đóng góp chính theo bài báo

1. Phân tích sự bất ổn của benchmark trading trực tiếp bằng LLM.
2. Đề xuất AlphaForgeBench để đánh giá khả năng sinh alpha factor và chiến lược có thể thực thi.
3. Thực nghiệm trên nhiều LLM để kiểm tra tính ổn định, khả năng phân biệt mô hình và khả năng đánh giá reasoning tài chính.

## 4. Bản đồ nội dung bài báo

Bài báo đi theo luồng:

1. Nêu vấn đề benchmark trực tiếp.
2. Tổng quan benchmark tài chính liên quan.
3. Xây dựng AlphaForgeBench.
4. Thiết kế hai track thực nghiệm.
5. Phân tích kết quả theo model, asset và difficulty level.
6. Thảo luận phạm vi diễn giải.
7. Kết luận.

## 5. Ý tưởng quan trọng cần giữ xuyên suốt khóa học

AlphaForgeBench không cố chứng minh rằng một LLM nào đó là "trader tốt nhất ngoài đời". Benchmark được thiết kế chủ yếu để đo **năng lực thiết kế chiến lược dưới một môi trường kiểm soát, tái lập và so sánh được**.

## 6. Kiểm tra nhanh

- Tại sao sinh code một lần có thể ổn định hơn hỏi LLM hành động ở từng timestep?
- Benchmark này đang đo năng lực thực thi lệnh hay năng lực tổng hợp logic chiến lược?
- Tại sao tính tái lập quan trọng khi so sánh các LLM?
