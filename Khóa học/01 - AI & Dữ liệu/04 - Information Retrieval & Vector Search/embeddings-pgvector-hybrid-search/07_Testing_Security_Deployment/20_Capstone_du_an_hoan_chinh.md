# Capstone: hoàn thiện ứng dụng YouTube Conversational RAG

> **Khóa học:** YouTube Conversational RAG · **Bài 20/20** · **Module:** Kiểm thử, bảo mật và triển khai

## Tóm tắt

Thực hành tổng hợp theo milestone: từ URL đến trả lời có ngữ cảnh và streaming, với test cases chứng minh mọi tầng hoạt động.

## Mục tiêu học tập

- Lắp ghép được các service vào một ứng dụng hoàn chỉnh.
- Định nghĩa được tiêu chí nghiệm thu đo lường được.
- Đánh giá được phần còn thiếu trước khi deploy production.

## 1. Đề bài

Xây dựng web app “YouTube Conversational RAG” cho phép dán một URL, xử lý transcript, chat bằng tiếng Việt hoặc tiếng Anh, hỏi nối tiếp và mở lại history. Trọng tâm là backend RAG với PostgreSQL+pgvector, LangChain và streaming; UI có thể tối giản.

## 2. Yêu cầu bắt buộc

- Dán URL hợp lệ và thấy trạng thái `processing`, `ready` hoặc `failed`.
- Loader lấy transcript và thông tin video khi khả dụng.
- Splitter cắt chunks và gắn `document_id`/`chunk_index`.
- PostgreSQL lưu bảng quan hệ và embeddings `vector(3072)`.
- Query chỉ lấy chunks của video gắn với conversation hiện tại.
- Câu hỏi nối tiếp hiểu ngữ cảnh lịch sử.
- LLM trả lời dựa trên chunks và nói không đủ thông tin nếu cần.
- React hiển thị câu hỏi ngay và answer qua SSE.
- Backend lưu user/assistant messages đúng thứ tự.

## 3. Milestone 1: Cơ sở dữ liệu

Chạy migration từ bài 4 và 5. Tạo một conversation/document mẫu, kiểm tra khóa ngoại, generated document ID, RPC `match_documents`. **Nghiệm thu:** SQL RPC chạy được khi có embedding đúng dimension và metadata filter không trả dữ liệu ngoài tài liệu.

## 4. Milestone 2: Ingestion API

Tạo `POST /api/ingest`. Nhập một video có transcript. Kiểm tra số chunks, title, metadata và trạng thái document. **Nghiệm thu:** API trả IDs; rows tồn tại; nếu loader thất bại, không trả thành công.

## 5. Milestone 3: RAG service

Tạo `POST /api/chat`; đọc lịch sử, contextualize câu hỏi, retrieve top-k, prompt LLM. **Nghiệm thu:** câu hỏi trực tiếp và câu hỏi nối tiếp đều có nội dung khớp transcript. Câu hỏi không có chứng cứ phải thừa nhận thiếu dữ liệu.

## 6. Milestone 4: Streaming UI

Dựng React form và ChatPanel. **Nghiệm thu:** người dùng gửi một câu hỏi, nhận từng token, không rơi tiếng Việt, khi refresh vẫn có thể lấy lại history. Không chấp nhận câu hỏi mới khi stream trước chưa kết thúc, trừ khi đã có cơ chế nhiều stream riêng.

## 7. Milestone 5: Kiểm thử và bảo vệ

Tạo ít nhất 10 câu hỏi từ hai video; gồm truy xuất trực tiếp, paraphrase, follow-up, không có chứng cứ, sai `document_id`, URL không hợp lệ. **Nghiệm thu:** không có leakage chéo video; logs không chứa secret; test đo latency từng tầng và có hướng khắc phục khi sai.

## 8. Bảng chấm điểm đề xuất

| Thành phần | Trọng số |
| --- | ---: |
| Thiết kế quan hệ và vector schema | 15% |
| Ingestion + metadata + lỗi | 20% |
| Retrieval + history-aware rewrite | 25% |
| Generation + SSE + lưu lịch sử | 20% |
| Giao diện và trải nghiệm | 10% |
| Kiểm thử + bảo mật cơ bản | 10% |

**Definition of Done:** có thể mở một video thật, trò chuyện liên tục, reload giữ lịch sử và giải thích bằng log/chunks vì sao một câu trả lời xuất hiện. Nếu muốn public production, phải hoàn thành Auth/RLS/quota/rate limit và các cải tiến ở bài 19.

## 9. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Trước khi đánh giá generation, bước nào cần kiểm tra?

A. CSS đã đẹp chưa  
B. Các chunks top-k có chứa chứng cứ không  
C. Có bao nhiêu nút trong trang  
D. Đã tải font chưa  

**Đáp án:** B. **Giải thích:** Retriever sai thì model không có bằng chứng phù hợp.

### Câu 2

Điều kiện để một video sẵn sàng chat là gì?

A. URL hợp lệ là đủ  
B. Tạo conversation là đủ  
C. Đã nạp chunks/embeddings và document sẵn sàng  
D. Có style CSS  

**Đáp án:** C. **Giải thích:** Hệ thống cần vector để truy xuất.

### Câu 3

Điều nào thể hiện chat có lịch sử?

A. Chỉ đặt câu hỏi độc lập  
B. Dùng một video rất ngắn  
C. Không có message database  
D. Hỏi “ý thứ hai” và hệ thống hiểu tham chiếu  

**Đáp án:** D. **Giải thích:** Hỏi tiếp nối kiểm thử contextualization và history.

### Câu 4

Công nghệ nào đảm nhận biểu diễn semantic vectors trong PostgreSQL?

A. pgvector  
B. CSS  
C. Vite  
D. TextDecoder  

**Đáp án:** A. **Giải thích:** pgvector cung cấp kiểu vector và các toán tử gần nhất.

### Câu 5

Khi đưa app ra public, cần làm gì?

A. Tắt mọi policy RLS  
B. Bổ sung Auth, authorization, rate limits và bảo vệ keys  
C. Đưa service key vào frontend  
D. Bỏ xử lý lỗi  

**Đáp án:** B. **Giải thích:** Bản lab không mặc định an toàn cho đa người dùng.

## 10. Bàn giao

Repository gồm `api/`, `web/`, SQL migration, `.env.example`, README cài đặt và báo cáo test. Có thể triển khai UI Vercel, API Fly.io hoặc nền tảng tương đương. Không gắn mốc thời gian hay tuyên bố hiệu năng cố định khi chưa đo benchmark của bản triển khai cụ thể.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
