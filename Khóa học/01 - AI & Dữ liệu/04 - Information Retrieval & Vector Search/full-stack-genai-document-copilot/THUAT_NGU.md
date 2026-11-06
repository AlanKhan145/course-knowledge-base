# Bảng thuật ngữ Full Stack GenAI và RAG

Các định nghĩa dưới đây là để học và đối chiếu nhanh; cần tham khảo tài liệu API chính thức khi code theo phiên bản cụ thể.

| Thuật ngữ | Giải thích |
| --- | --- |
| **RAG** | Retrieval-Augmented Generation; bổ sung bằng chứng được tìm từ corpus vào ngữ cảnh cho mô hình tạo đáp án. |
| **SEC filing** | Hồ sơ được doanh nghiệp nộp cho cơ quan quản lý chứng khoán Hoa Kỳ; có thể chứa 10-K, 10-Q. |
| **10-K** | Báo cáo thường niên theo biểu mẫu SEC. |
| **10-Q** | Báo cáo quý theo biểu mẫu SEC. |
| **Corpus** | Tập tài liệu mà hệ thống được phép tra cứu. |
| **Ingestion** | Quá trình tải, parse, chuẩn hóa, chia nhỏ và lưu/index tài liệu. |
| **Docling** | Bộ công cụ xử lý/chuyển đổi tài liệu để trích xuất cấu trúc, bảng và nội dung. |
| **Chunk** | Đơn vị văn bản tương đối ngắn dùng để truy xuất. |
| **HybridChunker** | Cách chia tài liệu kết hợp tín hiệu cấu trúc và ràng buộc tokenizer/độ dài. |
| **Embedding** | Vector số biểu diễn nội dung giúp tìm tương đồng ngữ nghĩa. |
| **pgvector** | Phần mở rộng vector cho PostgreSQL. |
| **Full-text search** | Tìm kiếm từ khóa dựa trên chỉ mục văn bản. |
| **Hybrid retrieval** | Kết hợp nhiều chiến lược tìm kiếm, ví dụ vector và lexical. |
| **RRF** | Reciprocal Rank Fusion; hợp nhất nhiều danh sách dựa trên thứ hạng. |
| **Top-k** | Số lượng ứng viên được lấy ở một bước truy xuất. |
| **Grounding** | Ràng buộc câu trả lời vào bằng chứng có thể kiểm chứng. |
| **Citation** | Đường dẫn dữ liệu tới tài liệu và đoạn nguồn hỗ trợ một claim. |
| **Agentic RAG** | RAG có tác nhân chọn và gọi công cụ tìm kiếm/đọc trong nhiều bước. |
| **PydanticAI** | Framework cho ứng dụng agent dựa trên kiểu dữ liệu Pydantic và công cụ. |
| **FastAPI** | Framework Python xây API web. |
| **Supabase Auth** | Dịch vụ quản lý người dùng và phiên đăng nhập. |
| **RLS** | Row Level Security; chính sách truy cập theo hàng trong database. |
| **SQLAlchemy** | Thư viện Python ORM và SQL toolkit. |
| **Alembic** | Công cụ quản lý migration cho database dùng SQLAlchemy. |
| **Idempotency** | Tính chất chạy lặp lại không tạo thêm tác dụng phụ không mong muốn. |
| **JWT** | JSON Web Token dùng biểu diễn claims của phiên; cần xác minh ở server. |
| **SSE** | Server-Sent Events, cơ chế server gửi sự kiện tới browser qua HTTP. |
| **Railway** | Nền tảng triển khai dịch vụ web/container. |
| **Smoke test** | Bộ phép thử nhanh kiểm tra chức năng sống còn sau build/deploy. |
| **Faithfulness** | Mức độ answer tuân theo bằng chứng được cung cấp. |
| **Recall@k** | Tỉ lệ trường hợp mà nguồn liên quan xuất hiện trong k kết quả truy xuất. |
| **Citation precision** | Tỉ lệ nguồn dẫn thực sự hỗ trợ claims đang xét. |
| **Prompt injection** | Nội dung không đáng tin cậy cố đưa chỉ dẫn điều khiển mô hình/agent. |
