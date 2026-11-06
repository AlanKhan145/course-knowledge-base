# Tạo conversation, document và liên kết nhiều-nhiều

> **Khóa học:** YouTube Conversational RAG · **Bài 10/20** · **Module:** Quản lý cuộc trò chuyện và lịch sử

## Tóm tắt

Bài học tách biệt tài liệu với cuộc trò chuyện để một video có thể được dùng cho nhiều phiên chat.

## Mục tiêu học tập

- Thực hiện insert ba bảng theo đúng khóa ngoại.
- Truy vấn các video gắn với một hội thoại.
- Thiết kế đường mở rộng khi một chat chứa nhiều video.

## 1. Phân biệt video và cuộc trò chuyện

Video là dữ liệu được index một lần; conversation là trạng thái tương tác. Nếu tạo lại embeddings mỗi khi người dùng bắt đầu chat mới về cùng video, số chi phí và độ trễ tăng không cần thiết. Kiến trúc đúng là tạo document độc lập và dùng bảng nối.

Ví dụ: document D1 chứa transcript “Giới thiệu Supabase”. Conversation C1 có D1 và hỏi về SQL; conversation C2 cũng gắn D1 nhưng hỏi về định giá. Dữ liệu gốc dùng chung trong khi message history riêng.

## 2. Tạo các bản ghi bằng Supabase JS

```ts
const conversationId = crypto.randomUUID();
const documentId = crypto.randomUUID();

const { error: chatError } = await db.from('conversations')
  .insert({ id: conversationId });
if (chatError) throw chatError;

const { error: documentError } = await db.from('documents')
  .insert({ id: documentId, source_url: url, status: 'processing' });
if (documentError) throw documentError;

const { error: linkError } = await db.from('conversation_documents')
  .insert({ conversation_id: conversationId, document_id: documentId });
if (linkError) throw linkError;
```

Đây là chuỗi thao tác trên ba bảng; nếu một bước lỗi, các bước trước vẫn có thể đã hoàn thành. Đó là lý do phiên bản production nên dùng transaction trong SQL/RPC hoặc có cơ chế compensation rõ ràng.

## 3. Đọc danh sách document được phép

```ts
const { data, error } = await db.from('conversation_documents')
  .select('document_id')
  .eq('conversation_id', conversationId);
if (error) throw error;
const documentIds = (data ?? []).map(row => row.document_id);
```

Đầu vào retriever không nên chỉ là danh sách ID từ request. Backend tự truy vấn bảng nối, đảm bảo phạm vi tìm kiếm đúng với conversation mà user có quyền truy cập.

## 4. Tái sử dụng document đã nạp

Quy trình khi video đã có trong DB: tìm document theo một định danh chuẩn hóa (ví dụ `source_type + video_id`) → nếu `status='ready'`, không tạo embeddings mới → tạo conversation mới → thêm bản ghi liên kết. Cần ngăn trường hợp hai client đồng thời index cùng nguồn bằng unique constraint và idempotent processing.

Không gộp luôn các video có cùng URL thành một document giữa những user có quyền riêng tư khác nhau khi policy chưa được thiết kế đúng. Deduplication và quyền sở hữu phải đi cùng nhau.

## 5. Nhiều video trong cùng cuộc trò chuyện

Bảng nối hỗ trợ nhiều IDs, nhưng SQL RPC thông thường với `filter` JSONB equality chỉ tìm một ID tại một thời điểm. Một phiên bản đa tài liệu cần custom SQL `where document_id = any(allowed_document_ids)` và truy xuất hợp nhất. Đây là **mở rộng kỹ thuật** của kiến trúc nhiều-nhiều, không nên mặc định code single-document đã hỗ trợ đủ multi-document.

## 6. Bài tập

Tạo C1, C2, D1 rồi liên kết cả hai cuộc trò chuyện với D1. Xác nhận bảng vector không phải tạo lại. Thử xóa C1: D1 và C2 vẫn tồn tại. Xây query để từ C2 liệt kê tất cả document IDs.

## 7. Tổng kết

Database quan hệ quản lý danh tính và phạm vi tài liệu; vector search chỉ diễn ra **sau khi** application xác định phạm vi được phép.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Document và conversation nên có quan hệ thế nào?

A. Một-một  
B. Many-to-many qua bảng nối  
C. Không thể liên kết  
D. Chỉ một-nhiều cố định  

**Đáp án:** B. **Giải thích:** Một document có thể dùng lại ở các chat khác nhau.

### Câu 2

Rủi ro của ba thao tác insert riêng là gì?

A. Chunk size giảm  
B. LLM mất history  
C. Có thể tạo dữ liệu dở dang khi bước sau lỗi  
D. React không chạy  

**Đáp án:** C. **Giải thích:** Không có transaction chung nên cần bù trừ.

### Câu 3

Backend nên lấy document IDs cho retrieval từ đâu?

A. CSS  
B. Tên video hiển thị  
C. Câu trả lời LLM  
D. Bảng conversation_documents sau kiểm tra quyền  

**Đáp án:** D. **Giải thích:** Đó là nguồn ràng buộc phạm vi đáng tin.

### Câu 4

Điểm lợi chính của tái sử dụng document ready?

A. Không tạo lại embeddings  
B. Không cần database  
C. Không cần lịch sử chat  
D. Tự động dịch mọi video  

**Đáp án:** A. **Giải thích:** Lưu vector một lần giảm chi phí.

### Câu 5

Với nhiều video, filter equality một document_id đã đủ?

A. Đủ mọi trường hợp  
B. Không, cần truy vấn đa IDs thích hợp  
C. Chỉ khi có 10 chunk  
D. Chỉ với React  

**Đáp án:** B. **Giải thích:** Cần lọc tập cho phép bằng ANY hoặc truy vấn tương đương.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
