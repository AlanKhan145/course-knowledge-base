# Chia transcript thành chunks, giữ title và document_id

> **Khóa học:** YouTube Conversational RAG · **Bài 08/20** · **Module:** Nạp transcript, chunking và embeddings

## Tóm tắt

Thực hành RecursiveCharacterTextSplitter, chunk overlap và thiết kế metadata phục vụ retrieval.

## Mục tiêu học tập

- Triển khai splitting có overlap.
- Thêm định danh tài liệu nhất quán trên từng chunk.
- Giải thích tác động của chunk size lên chất lượng trả lời.

## 1. Vì sao cần chia transcript?

Transcript thường là chuỗi dài chứa nhiều chủ đề. Nếu nhúng cả transcript thành một vector, câu hỏi về chi tiết nhỏ có thể không khớp tốt. Chia thành đoạn giúp truy xuất tập trung, đồng thời giới hạn tokens đưa vào LLM.

Chunk không nên quá nhỏ: ví dụ một đoạn “Vì thế chúng tôi chọn giải pháp thứ hai” sẽ khó hiểu khi đứng một mình. Overlap sao chép phần ranh giới sang chunk kế tiếp, nhưng cũng làm tăng dung lượng và chi phí embedding. Bắt đầu với `chunkSize: 1000`, `chunkOverlap: 200`, rồi kiểm thử theo dữ liệu thực tế.

## 2. Tách văn bản bằng RecursiveCharacterTextSplitter

```ts
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const chunks = await splitter.splitDocuments(docs);
console.log(chunks.map(c => c.pageContent.length));
```

Split mặc định ưu tiên dấu ngắt đoạn, xuống dòng, khoảng trắng rồi mới cắt ở mức nhỏ hơn. Các con số trên thường tính theo ký tự chứ không phải token. Một đoạn dài 1000 ký tự không đồng nghĩa đúng 1000 tokens.

## 3. Bổ sung title vào `pageContent`

Title giúp chunk vẫn có dấu hiệu nhận diện nội dung khi retriever chỉ chọn một đoạn giữa video. Cách làm trong bài học là gắn title **trước** khi chunking:

```ts
const docsWithTitle = docs.map(d => ({
  ...d,
  pageContent: `Video title: ${d.metadata.title ?? 'Untitled'}\n\n${d.pageContent}`,
}));
const chunks = await splitter.splitDocuments(docsWithTitle);
```

Đánh đổi: title chỉ nằm ở đầu document nên một chunk ở giữa không nhất thiết chứa title. Muốn mọi chunk có title, thêm tiền tố **sau** khi split hoặc lưu vào metadata để prompt formatter đọc được.

## 4. Chuẩn hóa metadata

```ts
const chunksWithMetadata = chunks.map((chunk, index) => ({
  ...chunk,
  metadata: {
    ...chunk.metadata,
    document_id: documentId,
    source_type: 'youtube',
    source_url: url,
    title: chunk.metadata.title ?? 'YouTube video',
    chunk_index: index,
  },
}));
```

`document_id` phải cùng giá trị UUID với một row trong `public.documents`. Khi lưu qua `SupabaseVectorStore`, metadata này sẽ nằm trong JSONB và generated column lấy ra `document_id`. Nếu một chunk thiếu hoặc dùng sai ID, nó có thể bị lọc mất, gây câu trả lời thiếu thông tin.

## 5. Phương pháp đánh giá chunking

Tạo 10 câu hỏi có câu trả lời xuất hiện ở đầu, giữa và cuối video. Thử các bộ tham số khác nhau, ví dụ `500/100`, `1000/200`, `1500/300`. Đừng chỉ đo tốc độ; hãy xem câu trả lời có sử dụng đúng đoạn, một câu hỏi cần nhiều chunk có bị đứt mạch, và transcript dài ảnh hưởng thế nào đến thời gian nạp.

| Triệu chứng | Điều chỉnh nên thử |
| --- | --- |
| Câu trả lời thiếu nửa ý | Tăng overlap hoặc tách theo câu/đoạn |
| Retrieval trả toàn các đoạn chung chung | Giảm chunk size hoặc tăng metadata hữu ích |
| Chi phí embeddings tăng mạnh | Giảm overlap, chống nhập lại |
| LLM lặp nội dung | Dedupe đoạn tương tự, rút gọn top-k |

## 6. Checkpoint

Quan sát 2 chunk liên tiếp; ghi lại khoảng lặp. Kiểm tra mọi metadata có cùng `document_id`, có `chunk_index` khác nhau và `pageContent` không rỗng. Tính tổng ký tự chunks so với transcript; vì overlap nên tổng có thể lớn hơn bản gốc.

## 7. Tổng kết

Chunking là một phần của chiến lược truy xuất. Metadata giúp cô lập dữ liệu và truy vết câu trả lời; title và overlap giúp giữ bối cảnh.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

`chunkOverlap` dùng để làm gì?

A. Xóa đoạn trùng trong DB  
B. Giữ ngữ cảnh giữa hai chunk kề  
C. Đăng nhập Supabase  
D. Lưu chat history  

**Đáp án:** B. **Giải thích:** Một phần nội dung được lặp ở ranh giới.

### Câu 2

Giá trị `chunkSize: 1000` luôn tương đương 1000 token?

A. Đúng mọi ngôn ngữ  
B. Chỉ với tiếng Việt  
C. Không, mặc định thường đo theo ký tự  
D. Chỉ với video ngắn  

**Đáp án:** C. **Giải thích:** Tokenization khác độ dài ký tự.

### Câu 3

Metadata bắt buộc để lọc theo video là gì?

A. URL CSS  
B. Role assistant  
C. API base URL  
D. document_id  

**Đáp án:** D. **Giải thích:** Retriever cần ID trùng với documents.

### Câu 4

Đặt title vào metadata có lợi ích gì?

A. Có thể truy vết chunk về video  
B. Giúp tắt RLS  
C. Tự động tạo frontend  
D. Bỏ nhu cầu truy xuất  

**Đáp án:** A. **Giải thích:** Title cho biết nguồn của đoạn.

### Câu 5

Khi quá nhiều kết quả lặp nội dung nên thử gì?

A. Tăng toàn bộ dữ liệu đầu vào  
B. Dedupe và điều chỉnh top-k  
C. Bỏ hết metadata  
D. Dùng UUID mới mỗi truy vấn  

**Đáp án:** B. **Giải thích:** Overlap và top-k có thể gây lặp thông tin.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
