# Phụ lục: Hợp đồng API và kiểm tra tích hợp

## 1. API

| Endpoint | Body | Kết quả |
| --- | --- | --- |
| `GET /health` | — | `{ "ok": true }` |
| `POST /api/ingest` | `{ "url": "https://..." }` | `{ "conversation_id": "uuid", "document_id": "uuid", "chunks": 42 }` (số chunk chỉ là ví dụ) |
| `POST /api/chat` | `{ "conversation_id":"uuid", "document_id":"uuid", "query":"..." }` | SSE `data: {"type":"token","token":"..."}` / `done` / `error` |

## 2. Những trường metadata phải nhất quán

```json
{
  "document_id": "UUID_TRONG_BANG_DOCUMENTS",
  "source_type": "youtube",
  "source_url": "https://www.youtube.com/watch?v=...",
  "title": "Tên video nếu có",
  "chunk_index": 0
}
```

## 3. Kiểm tra database

```sql
select document_id, count(*) as chunks
from public.document_embeddings
group by document_id
order by chunks desc;

select cm.conversation_id, cm.role, left(cm.content, 100)
from public.conversation_messages cm
order by cm.created_at asc, cm.id asc;
```

## 4. Các chú ý bảo mật

- Giới hạn CORS đến web origin được phép.
- Auth + ACL trước khi dùng conversation/document IDs trong truy vấn.
- Service key chỉ ở backend.
- Hạn mức xử lý video, giới hạn câu hỏi, tránh SSRF.
- RLS trên bảng chứa dữ liệu user; chặn truy cập RPC ngoài quyền.

## 5. Tài liệu tham khảo

## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
