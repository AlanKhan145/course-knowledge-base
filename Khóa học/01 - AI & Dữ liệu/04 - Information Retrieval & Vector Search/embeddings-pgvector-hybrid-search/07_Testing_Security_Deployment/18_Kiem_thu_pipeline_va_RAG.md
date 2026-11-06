# Kiểm thử E2E, chất lượng retrieval và khả năng chat tiếp nối

> **Khóa học:** YouTube Conversational RAG · **Bài 18/20** · **Module:** Kiểm thử, bảo mật và triển khai

## Tóm tắt

Một demo chạy được chưa đủ để kết luận hệ thống RAG trả lời đúng. Cần kiểm thử từng tầng và toàn luồng.

## Mục tiêu học tập

- Thiết kế test cases cho ingestion và chat.
- Đánh giá retrieval riêng với generation.
- Đo độ trễ và phân loại lỗi.

## 1. Bộ kiểm thử theo giai đoạn

| Tầng | Đầu vào test | Kết quả cần kiểm tra |
| --- | --- | --- |
| Input validation | URL sai host, rỗng, quá dài | HTTP 4xx, không fetch tùy ý |
| Loader | Video có/không có transcript | Có `pageContent` hoặc lỗi có kiểm soát |
| Chunker | Transcript ngắn/dài | Chunks khác rỗng, metadata đầy đủ |
| Vector DB | document ID hợp lệ/sai | Đúng số rows, filter không trộn nguồn |
| Contextualization | “Giải thích ý thứ hai” | Standalone question đúng ý |
| Generation | Câu có/không có đáp án | Không bịa khi thiếu chứng cứ |
| Streaming | Response dài, mạng ngắt | Token không rơi/trùng, xử lý lỗi rõ |
| Persistence | Refresh chat | History đúng thứ tự và role |

## 2. Tạo tập câu hỏi có đáp án biết trước

Lấy 2–3 video có transcript mà bạn có quyền dùng. Với mỗi video, viết các câu hỏi chứa chứng cứ rõ ràng, câu paraphrase, câu hỏi nối tiếp và câu không thể trả lời. Gắn mỗi câu với chunk chứa đáp án đúng nếu có. Không chỉ chấm bằng “cảm giác câu trả lời hay”.

**Retrieval hit@k**: tỷ lệ câu hỏi có ít nhất một đoạn chứa chứng cứ trong top-k. **Answer faithfulness**: mức độ câu trả lời bám vào đoạn đã truy xuất; có thể đánh giá thủ công theo rubric. **Refusal accuracy**: khả năng thừa nhận không đủ bằng chứng.

## 3. Kịch bản phản hồi sai

Nếu câu hỏi “Video thứ A dùng công nghệ gì?” nhưng output lấy ý từ video B, kiểm tra filter document_id và ACL trước. Nếu top-k đúng nhưng model kết luận ngược, xem prompt và tính đầy đủ của context. Nếu token bị lặp/thiếu dấu, xem SSE parser, không thay model embedding.

## 4. Đo latency đúng cách

Phân tách thời gian: YouTube load, split, embeddings, vector insert, query rewriting, vector retrieval, time-to-first-token và total generation. Mốc “5 giây nạp transcript” chỉ phản ánh demo cụ thể; một benchmark phải ghi thiết bị, độ dài transcript, số chunks, network, model và phân phối nhiều lần chạy.

## 5. Test nhiều hội thoại

Tạo chat C1 với D1; chat C2 với D2. Hỏi cùng câu ở cả hai chat; kiểm tra retrieval không lẫn. Tạo C3 cùng D1 để kiểm tra reuse; gửi câu hỏi nối tiếp trong C1 và C3 để xác nhận histories không bị trộn dù dùng chung document.

## 6. Checklist chất lượng trước khi release

- Trả lỗi rõ ràng khi không có transcript.
- Không báo ingest thành công khi không có embeddings.
- Không bao giờ dùng `document_id` ngoài phạm vi conversation.
- Nội dung không có nguồn thì trả lời “chưa đủ thông tin”.
- SSE xử lý hoàn tất, lỗi và ngắt kết nối.
- Các route có Auth, rate limit và validation ở production.

## 7. Tổng kết

Đánh giá RAG phải tách lỗi dữ liệu, tìm kiếm, prompt và streaming. Hệ thống nhanh nhưng truy xuất sai không đạt yêu cầu ứng dụng tri thức.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Hit@k kiểm tra điều gì?

A. Màu giao diện  
B. Đo tỷ lệ câu hỏi có đoạn chứng cứ trong top-k  
C. Số API key  
D. Cấu trúc UUID  

**Đáp án:** B. **Giải thích:** Đó là chỉ số retrieval coverage.

### Câu 2

Trả lời dùng sai video cho thấy cần kiểm tra gì?

A. CSS  
B. Nội dung notification  
C. Document filter và quyền truy cập  
D. Lệnh npm  

**Đáp án:** C. **Giải thích:** Trộn nguồn thường do phạm vi query sai.

### Câu 3

Độ trễ nên đo theo cách nào?

A. Chỉ đếm dòng code  
B. Chỉ đo React mount  
C. Chỉ đo API startup  
D. Phân tách từng giai đoạn và time-to-first-token  

**Đáp án:** D. **Giải thích:** Chẩn đoán nút thắt cần số liệu từng khâu.

### Câu 4

Câu không có chứng cứ nên được dùng để kiểm tra gì?

A. Khả năng thừa nhận không đủ thông tin  
B. Khả năng lưu CSS  
C. Khả năng tạo UUID  
D. Số lượng chunkIndex  

**Đáp án:** A. **Giải thích:** Kiểm thử hạn chế hallucination.

### Câu 5

Nếu token tiếng Việt bị lỗi dấu nên kiểm tra gì?

A. Model temperature  
B. TextDecoder và SSE parser  
C. Index pgvector  
D. Bảng documents  

**Đáp án:** B. **Giải thích:** Đây có thể là lỗi xử lý byte stream.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
