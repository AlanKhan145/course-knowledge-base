# Khóa học thực hành RAG với n8n, Supabase và PostgreSQL

## Giới thiệu

Xây dựng AI Agent đối thoại với người dùng, truy xuất thông tin riêng từ Google Sheets qua Supabase Vector Store, đồng thời ghi nhớ ngữ cảnh hội thoại bằng PostgreSQL Chat Memory. Ca thực hành xuyên suốt: chatbot tư vấn sản phẩm điện máy; cuối khóa có bài vận dụng sang trợ lý gợi ý món ăn.

**Đối tượng:** người đã biết thao tác cơ bản trong n8n; không cần thành thạo SQL. **Kết quả đầu ra:** hai workflow (nạp dữ liệu và chatbot), bộ câu hỏi đánh giá, bảng kiểm thử, thiết kế dữ liệu mẫu.

## Lộ trình

| Bài | Nội dung | Sản phẩm học tập |
|---|---|---|
| 01 | RAG và kiến trúc tổng thể | Sơ đồ pipeline |
| 02 | Embedding, Vector DB và dữ liệu | Quy tắc chunk và metadata |
| 03 | Supabase, PostgreSQL, kết nối n8n | Credentials đã kiểm thử |
| 04 | Nạp Google Sheets vào Vector Store | Pipeline ingestion |
| 05 | Xây dựng chatbot AI Agent | Pipeline truy vấn |
| 06 | Chat Memory và hội thoại nhiều lượt | Luồng ghi nhớ |
| 07 | Debug truy xuất và chất lượng câu trả lời | Bộ ca kiểm thử |
| 08 | So sánh RAG với dữ liệu trực tiếp | Báo cáo thử nghiệm |
| 09 | Dự án cuối khóa: Food Recommendation Agent | Thiết kế agent ứng dụng |

## Cách học

Đọc lần lượt từng file Markdown, dựng workflow tương ứng trong n8n, chạy checkpoint, trả lời 5 câu trắc nghiệm/bài. Mỗi bài được viết để có thể mở độc lập. Sơ đồ dùng Mermaid và sẽ hiện trên trình đọc Markdown hỗ trợ Mermaid.

## Quy ước

- `n8n` điều phối workflow; `Supabase` dùng PostgreSQL; `pgvector` bổ sung phép tìm kiếm vector.
- **Semantic retrieval không phải lọc SQL chính xác.** Giá, tình trạng hàng, dị ứng và giới hạn ngân sách cần được kiểm tra bằng dữ liệu có cấu trúc.
- Tên nút và vị trí giao diện có thể khác theo phiên bản n8n/Supabase; ưu tiên đối chiếu giao diện đang sử dụng.
- Không đưa mật khẩu hay service-role key vào file, ví dụ, log công khai.

## Danh mục file

Các file `01`–`08` là bài học và lab; `09` là đồ án ứng dụng. Các ví dụ dữ liệu, prompt và checklist ở cuối được cung cấp để thực hành không cần dữ liệu bán hàng thực.
