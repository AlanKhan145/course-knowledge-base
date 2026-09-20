# Bài tập 002 — Thiết kế AI Job Search Agent

## 1. Mục tiêu

- xác định yêu cầu chức năng của một search agent;
- thiết kế đầu ra có nguồn kiểm chứng;
- chuyển một yêu cầu ngôn ngữ tự nhiên thành luồng xử lý của agent.

## 2. Đề bài

Thiết kế ở mức chức năng một AI Job Search Agent nhận yêu cầu:

> Tìm ba vị trí AI Engineer tại Bay Area trên LinkedIn và trả về thông tin cần thiết để người dùng đánh giá nhanh từng vị trí.

Chưa cần viết code. Hãy mô tả rõ agent cần nhận gì, tìm gì, kiểm tra gì và trả lại gì.

## 3. Nhiệm vụ

- Xác định dữ liệu đầu vào tối thiểu của truy vấn.
- Xác định ít nhất năm trường thông tin cần trả về cho mỗi vị trí.
- Bắt buộc có URL nguồn cho từng kết quả.
- Viết pipeline xử lý từ user query đến final answer.
- Nêu cách xử lý khi một tin tuyển dụng không còn nhận ứng viên.
- Nêu cách người dùng có thể kiểm chứng thông tin mà agent trả về.

## 4. Yêu cầu

Đầu ra thiết kế cần phân biệt rõ:

- dữ liệu do người dùng cung cấp;
- quyết định của agent;
- dữ liệu lấy từ search tool;
- phần tổng hợp cuối cùng của LLM.

## 5. Tiêu chí hoàn thành

- [ ] Có mô tả input rõ ràng.
- [ ] Có schema đầu ra ở mức trường dữ liệu.
- [ ] Mỗi kết quả có nguồn.
- [ ] Pipeline có bước gọi search tool.
- [ ] Có phương án xử lý kết quả hết hạn hoặc không còn tuyển.
- [ ] Không dùng dữ liệu tuyển dụng giả làm kết quả thực tế.

## 6. Gợi ý

Hãy thiết kế sao cho người dùng có thể đọc phần tóm tắt nhanh, nhưng vẫn có thể mở URL gốc để tự kiểm tra.
