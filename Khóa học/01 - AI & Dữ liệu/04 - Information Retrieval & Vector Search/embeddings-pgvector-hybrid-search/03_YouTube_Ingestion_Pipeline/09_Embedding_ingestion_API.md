# Lưu chunks vào pgvector và xây API ingestion

> **Khóa học:** YouTube Conversational RAG · **Bài 09/20** · **Module:** Nạp transcript, chunking và embeddings

## Tóm tắt

Bài thực hành kết nối loader, splitter, embeddings và SupabaseVectorStore thành một service xử lý URL.

## Mục tiêu học tập

- Khởi tạo SupabaseVectorStore thống nhất với schema.
- Xây route nhập video với IDs và status.
- Xử lý lỗi để tránh báo thành công giả.

## 1. Khởi tạo client và vector store

Mã sau là lõi ingestion dùng biến môi trường backend. Trong một dự án thực tế nên chuyển phần tạo kết nối sang `src/lib/supabase.ts` và `src/lib/vector.ts`, không tạo lại client ở mọi request.

```ts
import { createClient } from '@supabase/supabase-js';
import { OpenAIEmbeddings } from '@langchain/openai';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';

export const db = createClient(
  process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!
);
export const embeddingModel = new OpenAIEmbeddings({
  model: 'text-embedding-3-large',
  apiKey: process.env.OPENAI_API_KEY,
});
export const vectorStore = new SupabaseVectorStore(embeddingModel, {
  client: db,
  tableName: 'document_embeddings',
  queryName: 'match_documents',
});
```

## 2. Dịch vụ `ingestYoutube`

Ví dụ dưới giả định đã có các hàm `assertYoutubeUrl`, `loadYoutube`, và `splitter` của các bài thực hành tương ứng:

```ts
export async function ingestYoutube(documentId: string, urlInput: string) {
  const url = assertYoutubeUrl(urlInput);
  const docs = await loadYoutube(url);
  const title = String(docs[0].metadata.title ?? 'YouTube video');

  const titled = docs.map(d => ({
    ...d,
    pageContent: `Video title: ${title}\n\n${d.pageContent}`,
  }));
  const chunks = await splitter.splitDocuments(titled);
  if (!chunks.length) throw new Error('No chunks generated');

  const enriched = chunks.map((d, i) => ({
    ...d,
    metadata: { ...d.metadata, document_id: documentId, chunk_index: i,
      source_type: 'youtube', source_url: url, title },
  }));
  await vectorStore.addDocuments(enriched);
  return { title, chunks: enriched.length };
}
```

`addDocuments` gọi embedding API và ghi từng chunk vào bảng. Số lượng row phải xấp xỉ số chunks thực sự; nếu xảy ra lỗi giữa chừng, cần xóa embeddings vừa ghi hoặc thiết kế retry idempotent.

## 3. Route ingestion từ browser

API nên tạo conversation/document/link trên backend để browser không có quyền ghi database. Ví dụ minh họa orchestration (đã lược bỏ Auth và transaction):

```ts
import { randomUUID } from 'node:crypto';
import type { Request, Response } from 'express';

export async function ingestHandler(req: Request, res: Response) {
  const conversationId = randomUUID();
  const documentId = randomUUID();
  try {
    const url = assertYoutubeUrl(String(req.body.url ?? ''));
    const { error: a } = await db.from('conversations')
      .insert({ id: conversationId });
    if (a) throw a;
    const { error: b } = await db.from('documents')
      .insert({ id: documentId, source_url: url, status: 'processing' });
    if (b) throw b;
    const { error: c } = await db.from('conversation_documents')
      .insert({ conversation_id: conversationId, document_id: documentId });
    if (c) throw c;

    const result = await ingestYoutube(documentId, url);
    const { error: d } = await db.from('documents')
      .update({ status: 'ready', title: result.title }).eq('id', documentId);
    if (d) throw d;
    res.status(201).json({ conversation_id: conversationId,
      document_id: documentId, chunks: result.chunks });
  } catch (err) {
    await db.from('documents').update({ status: 'failed' }).eq('id', documentId);
    console.error('Ingestion failed', err);
    res.status(500).json({ error: 'Could not ingest video' });
  }
}
```

Đăng ký route: `app.post('/api/ingest', ingestHandler)`. Phần **cải tiến cần làm trước khi triển khai**: validate body bằng schema, phân loại lỗi 400/422/503, transaction/compensation, timeout, chống nhập trùng, Auth và queue job cho video dài. SQL schema trong khóa học chỉ là skeleton lab.

## 4. Thử bằng curl

```bash
curl -X POST http://localhost:8080/api/ingest \
  -H 'Content-Type: application/json' \
  -d '{"url":"https://www.youtube.com/watch?v=REPLACE_WITH_VIDEO_ID"}'
```

Sau khi trả JSON, kiểm tra `documents.status = 'ready'`, có hàng trong `conversation_documents`, và `document_embeddings` chứa metadata `document_id` khớp. Nếu status failed, không cho frontend vào chế độ hỏi đáp.

## 5. Sửa lỗi thường gặp

- `Error inserting`: xem chính xác kiểu cột, RLS/service key, generated column và giới hạn kích thước request.
- Embedding 1536/3072 không khớp: chọn một model và schema nhất quán.
- Trả `201` dù vector store chưa ghi xong: cần `await vectorStore.addDocuments`.
- API chậm với video dài: dùng hàng đợi và polling status ở phiên bản production.

## 6. Deliverable

Một request API nạp được video mẫu và lưu mọi chunk; trả IDs có thể dùng cho lượt hỏi tiếp theo. Lưu nhật ký thời gian nạp nhưng không đưa số đo một video thành benchmark tổng quát.

## 7. Tổng kết

Ingestion là service độc lập có đầu vào URL, đầu ra document sẵn sàng truy vấn. Các bước phải được kiểm tra tuần tự và chỉ chuyển trạng thái `ready` sau khi nạp vector thành công.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Tác vụ nào tạo embedding cho các chunk và lưu vào Supabase?

A. vectorStore.addDocuments  
B. app.get  
C. new TextDecoder  
D. res.writeHead  

**Đáp án:** A. **Giải thích:** Vector store sử dụng embedding model khi thêm Document.

### Câu 2

Lúc nào trả document status ready?

A. Khi nhận URL  
B. Khi tạo UUID  
C. Sau khi lưu vector thành công  
D. Trước khi gọi loader  

**Đáp án:** C. **Giải thích:** Không cho chat khi ingestion chưa hoàn tất.

### Câu 3

Tại sao document_id phải gắn vào mọi chunk?

A. Để đổi màu UI  
B. Để lọc đúng video khi hỏi  
C. Để tránh phải lưu content  
D. Để biến text thành PDF  

**Đáp án:** B. **Giải thích:** Mọi chunk phải truy vết về document mẹ.

### Câu 4

Lý do dùng `await` với `addDocuments`?

A. Để thêm token history  
B. Để tạo RLS  
C. Để xóa URL  
D. Để chắc chắn thao tác kết thúc trước khi trả success  

**Đáp án:** D. **Giải thích:** Lưu vector là thao tác bất đồng bộ.

### Câu 5

Ingestion xảy ra lỗi giữa chừng nên cải thiện gì?

A. Cơ chế rollback/compensation và retry  
B. Bỏ hoàn toàn catch  
C. Trả 201  
D. Đưa key vào browser  

**Đáp án:** A. **Giải thích:** Tránh tài liệu dở dang và báo thành công giả.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
