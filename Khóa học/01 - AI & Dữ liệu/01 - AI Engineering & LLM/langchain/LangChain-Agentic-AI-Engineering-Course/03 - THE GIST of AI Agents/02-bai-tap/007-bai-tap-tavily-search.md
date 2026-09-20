# Bài tập 007 — Tích hợp Tavily Search

## 1. Mục tiêu

- thay search tool tĩnh bằng dữ liệu tìm kiếm thực;
- kiểm tra nhiều tool call trong một truy vấn phức tạp;
- so sánh custom tool với Tavily tool tích hợp sẵn.

## 2. Đề bài

Nâng cấp agent hiện tại để truy vấn Tavily. Sau đó dùng agent để tìm các vị trí AI Engineer tại Bay Area và giữ URL nguồn trong phần trả lời.

## 3. Nhiệm vụ

1. Khởi tạo `TavilyClient`.
2. Thay nội dung custom `search` bằng `client.search(query=query)`.
3. Chạy lại câu hỏi về thời tiết để kiểm tra search thật.
4. Chuyển sang truy vấn tìm ba vị trí AI Engineer tại Bay Area trên LinkedIn.
5. Mở trace và đếm số tool call.
6. Ghi lại ít nhất hai query mà agent tự tạo.
7. Thay custom tool bằng `TavilySearch()` của integration package.
8. So sánh argument của tool call giữa hai phiên bản.

## 4. Yêu cầu

- Mỗi kết quả tuyển dụng cuối cùng phải có URL nguồn.
- Không hard-code danh sách job vào code.
- API key phải lấy từ môi trường.
- Có ghi chú nếu kết quả nguồn cho thấy tin đã hết hạn hoặc không còn nhận ứng viên.

## 5. Tiêu chí hoàn thành

- [ ] Custom Tavily search chạy được.
- [ ] Agent sử dụng dữ liệu thật thay vì chuỗi tĩnh.
- [ ] Quan sát được một hoặc nhiều tool call trong trace.
- [ ] Có so sánh custom tool và `TavilySearch()`.
- [ ] Final answer giữ được nguồn.
- [ ] Không để lộ API key trong output hoặc source code.

## 6. Gợi ý

Khi dùng tool tích hợp sẵn, hãy chú ý các argument bổ sung mà model có thể chọn. Chúng cho thấy schema của tool ảnh hưởng trực tiếp đến chiến lược tìm kiếm của agent.
