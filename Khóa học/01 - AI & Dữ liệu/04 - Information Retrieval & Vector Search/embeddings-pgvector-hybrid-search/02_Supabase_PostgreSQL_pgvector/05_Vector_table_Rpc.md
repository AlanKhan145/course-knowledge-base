# pgvector, cột embedding 3072 chiều và hàm match_documents

> **Khóa học:** YouTube Conversational RAG · **Bài 05/20** · **Module:** Thiết kế cơ sở dữ liệu và vector search

## Tóm tắt

Supabase dùng PostgreSQL có extension pgvector, cho phép lưu vector cùng text và metadata trên một hệ dữ liệu.

## Mục tiêu học tập

- Kích hoạt extension và tạo bảng vector đúng số chiều.
- Viết RPC tìm top-k theo similarity và metadata filter.
- Phân biệt index chính xác, HNSW và giới hạn 3072 chiều.

## 1. Bật pgvector và chuẩn hóa kiểu dữ liệu

Vào Database → Extensions → tìm `vector` → Enable. Với Supabase, extension thường nằm trong schema `extensions`. Đoạn SQL dưới đây sử dụng rõ `extensions.vector(3072)` tương ứng với `text-embedding-3-large` **khi không chỉ định rút gọn dimension**. Không thay model mà quên di chuyển schema.

```sql
create extension if not exists vector with schema extensions;

create table if not exists public.document_embeddings (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  metadata jsonb not null default '{}'::jsonb,
  embedding extensions.vector(3072) not null,
  document_id uuid generated always as
    ((metadata ->> 'document_id')::uuid) stored
);

create index if not exists idx_embedding_doc_id
  on public.document_embeddings (document_id);
```

LangChain `SupabaseVectorStore.addDocuments` truyền `content`, `metadata`, `embedding`; `document_id` là cột sinh tự động từ metadata nên không cần truyền riêng. Một lỗi thường thấy là tạo `document_id` thường, sau đó chỉ đưa ID vào JSON khiến cột vật lý luôn `null`. Generated stored column giải quyết đúng vấn đề này.

## 2. RPC `match_documents`

Tạo Postgres function có ba tham số mà `SupabaseVectorStore` mong đợi: `query_embedding`, `match_count`, `filter`. Filter JSON được đối chiếu bằng `@>`.

```sql
create or replace function public.match_documents (
  query_embedding extensions.vector(3072),
  match_count integer default 5,
  filter jsonb default '{}'::jsonb
)
returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity double precision
)
language sql stable
as $$
  select e.id, e.content, e.metadata,
         1 - (e.embedding <=> query_embedding) as similarity
  from public.document_embeddings e
  where e.metadata @> filter
  order by e.embedding <=> query_embedding
  limit least(greatest(coalesce(match_count, 5), 1), 50);
$$;
```

Ví dụ filter `{ "document_id": "uuid-of-video" }` tìm trong đúng video; không bị lẫn các bản ghi của video khác. Cần gọi hàm từ backend với role đã xác thực/ủy quyền. **Không** mở RPC vector ra cho người dùng ẩn danh nếu không có cơ chế kiểm tra quyền.

## 3. Cách LangChain sử dụng function

```ts
import { createClient } from "@supabase/supabase-js";
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

const client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
  apiKey: process.env.OPENAI_API_KEY,
});
const vectorStore = new SupabaseVectorStore(embeddings, {
  client,
  tableName: "document_embeddings",
  queryName: "match_documents",
});
const docs = await vectorStore.similaritySearch(
  "Tác giả đánh giá Supabase thế nào?", 5,
  { document_id: "YOUR_DOCUMENT_UUID" }
);
```

Điểm quan trọng là **tên bảng, tên function và tên metadata đồng nhất**. Bạn có thể dùng `asRetriever({k: 5, filter: { document_id }})` để kết nối các LangChain chain truyền thống.

## 4. Cosine distance và indexing

PostgreSQL có thể quét toàn bảng để lấy nearest neighbors chính xác; khi dữ liệu lớn hãy cân nhắc ANN index. Với `vector` trên pgvector hiện đại, HNSW index hỗ trợ tối đa 2000 chiều; `text-embedding-3-large` mặc định là 3072 chiều. Không tạo HNSW trực tiếp với `vector_cosine_ops` trên cột 3072 chiều rồi mặc định nó chạy được.

Có thể dùng index biểu thức `halfvec(3072)`:

```sql
create index if not exists idx_embedding_halfvec_hnsw
on public.document_embeddings
using hnsw ((embedding::extensions.halfvec(3072)) extensions.halfvec_cosine_ops);
```

**Lưu ý thực thi:** planner chỉ dùng index biểu thức khi điều kiện sắp xếp cũng dùng biểu thức khoảng cách tương thích, ví dụ `ORDER BY embedding::halfvec(3072) <=> query_embedding::halfvec(3072)`. Vì vậy phải đo `EXPLAIN ANALYZE` và điều chỉnh RPC nếu chọn index này. Trong bài tập ban đầu, ưu tiên query chính xác trước, sau mới tối ưu.

## 5. Mở rộng từ một video lên nhiều video

`metadata @> {document_id: ...}` tiện cho một video, nhưng không đại diện cho mảng ID theo cách tự nhiên. Muốn tìm trong nhiều video, tạo RPC riêng nhận `allowed_document_ids uuid[]` và lọc `document_id = any(allowed_document_ids)`, rồi gọi từ custom retriever. Với nhiều người dùng, thêm kiểm tra quyền trong function hoặc ở service trước khi truy vấn.

## 6. Checkpoint và debug

- Đúng embedding dimension giữa model, cột và RPC.
- JSON metadata phải có `document_id` là UUID hợp lệ.
- Nếu query trả rỗng: kiểm tra filter, ID, transcript và rows thực có.
- Nếu chạy chậm: dùng `EXPLAIN ANALYZE`, kiểm tra số hàng, index và plan.
- Nếu lỗi thiếu function: kiểm tra tên/schema và signature RPC.

## 7. Tổng kết

`pgvector` làm PostgreSQL trở thành vector store; SQL function nối LangChain với cơ chế truy vấn gần nhất. Thiết kế query đúng và lọc theo quyền là quan trọng hơn thêm index quá sớm.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Với model embedding 3072 chiều cần cột nào?

A. vector(64)  
B. vector(512)  
C. vector(1536)  
D. vector(3072)  

**Đáp án:** D. **Giải thích:** Số chiều của cột phải tương thích với embedding.

### Câu 2

`metadata @> filter` dùng để làm gì?

A. Lọc JSON chứa các cặp khóa/giá trị  
B. Streaming token  
C. Chia transcript  
D. Tạo JWT  

**Đáp án:** A. **Giải thích:** Đây là toán tử JSONB containment.

### Câu 3

Vì sao không tạo HNSW vector index trực tiếp ở 3072 chiều?

A. Postgres không lưu UUID  
B. Giới hạn dimension với `vector` index  
C. RLS bị tắt  
D. LangChain không hỗ trợ cosine  

**Đáp án:** B. **Giải thích:** Vector index thường có giới hạn 2000 chiều, halfvec hỗ trợ cao hơn.

### Câu 4

Cột `document_id generated always as (...) stored` lấy từ đâu?

A. URL React  
B. Prompt  
C. metadata JSONB  
D. Chat history  

**Đáp án:** C. **Giải thích:** Cột được tính từ khóa JSON của hàng.

### Câu 5

Đầu ra RPC cần gồm gì cho SupabaseVectorStore?

A. HTML React  
B. Màu giao diện  
C. Mật khẩu người dùng  
D. id, content, metadata, similarity  

**Đáp án:** D. **Giải thích:** Retriever dựng Document và score từ các trường này.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
