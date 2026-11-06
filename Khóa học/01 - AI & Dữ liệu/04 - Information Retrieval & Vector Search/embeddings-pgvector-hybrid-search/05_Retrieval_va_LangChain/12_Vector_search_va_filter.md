# Truy xuất top-k chunks theo video đã chọn

> **Khóa học:** YouTube Conversational RAG · **Bài 12/20** · **Module:** Truy xuất theo ngữ cảnh và sinh câu trả lời

## Tóm tắt

Thử truy vấn trực tiếp vào vector store, đánh giá chất lượng retrieval trước khi thêm LLM sinh câu trả lời.

## Mục tiêu học tập

- Gọi similaritySearch với metadata filter.
- Giải thích lựa chọn top-k và score.
- Nhận diện trường hợp truy xuất sai phạm vi.

## 1. Truy vấn gần nhất theo ý nghĩa

Sau ingestion, ứng dụng đã có các hàng `content`, `metadata`, `embedding`. Khi user gửi câu hỏi, embedding model biến chính câu hỏi thành vector; Postgres xếp hạng các hàng gần nhất bằng cosine distance. Kết quả không cần chứa cùng từ khóa, nhưng phải có quan hệ nội dung.

```ts
const hits = await vectorStore.similaritySearchWithScore(
  'Trong video tác giả đánh giá Supabase có tốt không?',
  5,
  { document_id: documentId }
);

hits.forEach(([document, score], i) => {
  console.log(i, score, document.metadata.chunk_index,
              document.pageContent.slice(0, 120));
});
```

Với các vector store khác nhau, quy ước score có thể là similarity hoặc distance; trong SQL ta đã định nghĩa `similarity = 1 - cosine_distance`. Kiểm tra semantics trước khi dùng threshold.

## 2. Không truy xuất trước khi kiểm tra quyền

`documentId` từ body request chưa đủ để quyết định được phép truy xuất. Backend cần query bảng `conversation_documents`, kiểm tra mối quan hệ và ownership của conversation. Sau đó mới gọi `similaritySearch` với filter đúng ID; bản demo có thể bỏ qua Auth nhưng không được bỏ kiểm tra liên kết nếu public.

## 3. Chọn top-k

`k=5` là giá trị khởi đầu thực dụng. Nếu k quá thấp, câu hỏi trải rộng nhiều phần video có thể mất chứng cứ. Nếu k quá cao, prompt nhiều nhiễu, tốn token và có thể lặp do chunk overlap. Nên so sánh `k=3`, `k=5`, `k=10` trên tập câu hỏi kiểm thử cố định; ghi lại coverage của chứng cứ và latency.

## 4. Debug khi không tìm ra đáp án

- Bảng embeddings có dữ liệu và `document_id` đúng chưa?
- `filter` truyền string UUID đúng không, có thuộc metadata JSON không?
- Câu hỏi có dùng từ khác cách nói trong video khiến embedding không khớp?
- Câu trả lời trải trên nhiều chunk mà top-k thấp quá?
- Video có transcript và title chính xác hay không?

Nên log số chunks, ID và score (không log secret). Với vấn đề khó, so sánh semantic search với keyword search rồi cân nhắc hybrid retrieval.

## 5. Kiểm tra bằng câu hỏi đáp án biết trước

Lấy một đoạn transcript mà bạn đọc được chính xác. Viết một câu hỏi trực tiếp và một câu hỏi diễn đạt lại. Nếu top-k không chứa đoạn đúng, vấn đề nằm ở **retrieval**, không nên vội sửa system prompt. Nếu đoạn đúng đã được lấy nhưng model vẫn sai, vấn đề thiên về **generation**.

## 6. Kết quả mong đợi

Mỗi câu hỏi chỉ trả những chunks thuộc video được liên kết với conversation. Với một document ID không tồn tại hoặc không được liên kết, API từ chối hoặc trả lỗi có kiểm soát, không rơi về tìm toàn bộ database.

## 7. Tổng kết

Retriever là khâu xác định bằng chứng. Điều kiện lọc phạm vi theo document quan trọng không kém độ giống nhau của vector.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Filter quan trọng nhất khi chat với một video cụ thể?

A. Tình trạng CSS  
B. document_id  
C. Tên browser  
D. OpenAI key  

**Đáp án:** B. **Giải thích:** Bảo đảm không trộn nguồn khác.

### Câu 2

Khi câu trả lời sai dù context lấy đúng thì ưu tiên kiểm tra gì?

A. Tăng RLS  
B. Đổi UUID  
C. Prompt/generation  
D. Xóa pgvector  

**Đáp án:** C. **Giải thích:** Retriever đúng nên xét model hướng dẫn và câu trả lời.

### Câu 3

k=5 có nghĩa là gì?

A. 5 tokens  
B. 5 người dùng  
C. 5 model  
D. Tối đa 5 kết quả tương tự  

**Đáp án:** D. **Giải thích:** Top-k chọn số đoạn được lấy.

### Câu 4

Câu hỏi diễn đạt khác transcript nhưng cùng ý hỗ trợ kiểm thử gì?

A. Semantic retrieval  
B. CORS  
C. RLS  
D. Vite dev server  

**Đáp án:** A. **Giải thích:** Embedding cần tìm theo ý nghĩa.

### Câu 5

Nếu filter sai khiến kết quả rỗng nên làm gì?

A. Bỏ filter mọi lúc  
B. Đối chiếu metadata và document ID  
C. Gửi toàn DB  
D. Tăng temperature  

**Đáp án:** B. **Giải thích:** Lọc sai thường là nguyên nhân không có kết quả.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
