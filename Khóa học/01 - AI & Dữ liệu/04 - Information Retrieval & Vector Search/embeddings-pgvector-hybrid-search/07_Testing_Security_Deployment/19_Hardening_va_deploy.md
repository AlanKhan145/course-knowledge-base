# Triển khai Vercel/Fly.io, Auth và các cải tiến production

> **Khóa học:** YouTube Conversational RAG · **Bài 19/20** · **Module:** Kiểm thử, bảo mật và triển khai

## Tóm tắt

Bản demo chứng minh pipeline. Khi đưa cho người dùng thực, phải bổ sung bảo mật, tối ưu và vận hành đáng tin cậy.

## Mục tiêu học tập

- Lập checklist deploy frontend/backend.
- Mô tả các lớp bảo vệ cần bổ sung.
- Lên kế hoạch mở rộng file sources và khả năng tìm kiếm.

## 1. Chiến lược deployment

Có thể deploy React/Vite lên nền tảng static như Vercel; Node/Express lên nền tảng vận hành service liên tục như Fly.io; Supabase project vốn là dịch vụ cloud. Không bắt buộc các nhà cung cấp này: điều quan trọng là frontend dùng HTTPS API URL chính xác, CORS giới hạn domain cụ thể và backend có biến môi trường bí mật.

**Luồng phát hành:** build UI → cấu hình `VITE_API_BASE_URL` → deploy API và set secrets → chạy SQL migration vào Supabase → kiểm tra CORS → test SSE qua reverse proxy → kiểm thử Auth và phân quyền.

## 2. Điều không được giữ từ demo khi triển khai công khai

- Không tắt RLS hay đưa service key vào browser.
- Không cho client chỉ cần đoán `conversation_id` để đọc tin nhắn người khác.
- Không để bất kỳ user nào dùng vô hạn API OpenAI trả phí.
- Không lưu thông tin nhạy cảm trong log/tracing.
- Không cho phép nhập URL bất kỳ mà backend fetch tới mạng nội bộ.
- Không tin hướng dẫn nằm trong transcript như system instruction.

Với production, thêm Supabase Auth hoặc hệ đăng nhập tương đương; xác minh JWT trên Node và dùng `owner_user_id` trong các bảng. Có thể thiết kế per-user quotas, rate limiting, giới hạn file length, chi phí tối đa và job queue.

## 3. Quy trình ingest production

Không giữ một HTTP request quá lâu nếu transcript hay embedding lớn. Sử dụng job queue: `POST /api/ingest` trả job ID, worker xử lý từng trạng thái (`queued`, `fetching`, `embedding`, `ready`, `failed`), client polling/WebSocket/SSE status. Lưu idempotency key theo video và user/tenant phù hợp.

Để tránh nạp lại, duy trì `video_id` chuẩn hóa và phiên bản embedding model; nếu đổi model, cần re-embed các tài liệu cũ. Nên ghi model/dimensions trong metadata vận hành, không giả sử hai không gian embedding có thể trộn.

## 4. Tối ưu retrieval

| Cải tiến | Khi nào cần | Rủi ro cần kiểm thử |
| --- | --- | --- |
| HNSW / halfvec index | Nhiều vector, truy vấn chậm | Recall và index expression phù hợp |
| Hybrid search | Từ khóa/code/tên riêng khó tìm | Trộn điểm lexical + vector chưa tối ưu |
| Reranking | Top-k nhiễu | Tăng độ trễ/chi phí |
| Cache embeddings | Video được dùng lại | Vấn đề version và quyền dữ liệu |
| Lưu timestamps | Muốn nhảy đến đoạn video | Loader phải cung cấp thời gian thật |

**Lưu ý:** “đổi model trong một phút” chỉ đúng với trường hợp các interface tương thích. Thay embedding model thường phải reindex dữ liệu vì chiều và không gian vector thay đổi.

## 5. Mở rộng sang PDF/audio/video khác

LangChain có nhiều document loaders. Từ một `source_type`, backend chọn loader, normalize thành `Document` và gọi pipeline chung `split → embed → store`. PDF cần phân trang/OCR khi cần; audio cần speech-to-text trước khi có text; metadata nguồn khác nhau. Không tuyên bố có thể “chỉ đổi một dòng” cho mọi định dạng vì còn quyền, parser và chất lượng dữ liệu.

## 6. Kiểm tra trước khi vận hành

Chạy migrations ở môi trường test trước; kiểm thử RLS giữa hai user; đo p95 time-to-first-token; kiểm tra ngắt kết nối/retry; bảo đảm có giám sát lỗi và chi phí. Khi thay đổi model, pin dependency version và có kế hoạch rollback.

## 7. Tổng kết

Bản demo RAG là nền cho sản phẩm lớn hơn, nhưng sản phẩm thực cần hệ quyền, quan sát hệ thống, kiểm soát chi phí, độ tin cậy và chiến lược dữ liệu qua nhiều phiên bản model.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Nơi nào thường thích hợp deploy frontend Vite static?

A. Vercel  
B. Bảng pgvector  
C. PostgreSQL extension  
D. SQL Editor  

**Đáp án:** A. **Giải thích:** Vercel phù hợp phân phối static assets.

### Câu 2

Vì sao đổi embedding model có thể cần reindex?

A. Vì React reload  
B. Vì không gian vector/chiều có thể thay đổi  
C. Vì UUID hết hạn  
D. Vì SSE không hoạt động  

**Đáp án:** B. **Giải thích:** Không nên trộn embeddings từ hai model khác nhau.

### Câu 3

Biện pháp nào giúp ingest dài đáng tin cậy hơn?

A. Giữ request 1 giờ  
B. Gọi API từ CSS  
C. Job queue + trạng thái tiến trình  
D. Bỏ database  

**Đáp án:** C. **Giải thích:** Worker xử lý độc lập request UI.

### Câu 4

Điều nào không được làm khi deploy?

A. Kiểm thử RLS  
B. Bật rate limit  
C. Lưu logs có chọn lọc  
D. Cho public service key ở browser  

**Đáp án:** D. **Giải thích:** Secret key có quyền cao.

### Câu 5

Muốn đưa citation theo giây vào video cần gì?

A. Metadata timestamp thực  
B. Tự đoán time từ chunk index  
C. Chỉ dùng title  
D. Tắt loader  

**Đáp án:** A. **Giải thích:** Không thể gán timestamp chính xác nếu nguồn không có.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
