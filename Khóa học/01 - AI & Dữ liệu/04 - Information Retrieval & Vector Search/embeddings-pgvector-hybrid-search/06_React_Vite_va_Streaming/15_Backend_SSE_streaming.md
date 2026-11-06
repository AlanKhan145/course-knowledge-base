# Streaming câu trả lời từ Node.js qua Server-Sent Events

> **Khóa học:** YouTube Conversational RAG · **Bài 15/20** · **Module:** Xây giao diện React và streaming

## Tóm tắt

Sau khi tìm được chunks, backend cần gửi câu trả lời từng phần về frontend mà không chờ model sinh xong toàn bộ.

## Mục tiêu học tập

- Giải thích cơ chế SSE.
- Thiết kế route trả stream đúng headers và events.
- Lưu assistant message sau khi luồng hoàn thành.

## 1. Vì sao streaming quan trọng?

Không stream: client chờ LLM trả cả đoạn văn, rồi hiển thị một lần. Streaming: backend nhận các mảnh nội dung từ model và chuyển ngay sang browser, khiến người dùng thấy phản hồi dần. **Thời gian bắt đầu hiển thị** có thể giảm, nhưng streaming không đồng nghĩa tổng thời gian sinh xong chắc chắn giảm.

SSE thường dùng response HTTP `text/event-stream`; mỗi event tách bằng một dòng trống. Ta có thể gửi JSON string trên dòng `data:` để giữ format nhất quán.

```text
data: {"type":"token","token":"Xin "}

data: {"type":"token","token":"chào"}

data: {"type":"done"}

```

## 2. Chuẩn bị dữ liệu trước stream

Route `POST /api/chat` nhận `{conversation_id, document_id, query}`. Trước khi gọi model: validate input → xác minh liên kết và ownership → lấy history cũ → ghi user message → tìm chunks (ưu tiên history-aware retrieval). Các bước này **có thể mất thời gian** trước khi token đầu tiên xuất hiện.

Một ví dụ tối thiểu ở bước demo:

```ts
const docs = await vectorStore.similaritySearch(query, 5, {
  document_id: documentId,
});
const context = docs.map((d, i) =>
  `[${i + 1}] ${d.pageContent}`
).join('\n\n');
```

Đoạn trên chỉ minh họa retrieval một lượt. Với câu hỏi nối tiếp, **thay query thô** bằng output của contextualization ở bài 13 hoặc gọi `historyAwareRetriever` để lấy docs.

## 3. Route SSE bằng Express

```ts
import type { Request, Response } from 'express';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, AIMessage, SystemMessage } from '@langchain/core/messages';

export async function chatHandler(req: Request, res: Response) {
  const { conversation_id, document_id, query } = req.body;
  if (typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ error: 'query required' });
  }

  // TODO production: authenticate, authorize conversation_id, verify document_id
  const history = await loadHistory(conversation_id);
  const docs = await vectorStore.similaritySearch(query, 5,
    { document_id });
  const context = docs.map(d => d.pageContent).join('\n\n---\n\n');
  await saveMessage(conversation_id, 'user', query);

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const emit = (payload: object) => res.write(`data: ${JSON.stringify(payload)}\n\n`);
  let full = '';
  try {
    const model = new ChatOpenAI({ model: 'gpt-4o', temperature: 0 });
    const messages = [
      new SystemMessage(`Answer using only the following context.\n${context}`),
      ...history.map(m => m.role === 'user'
        ? new HumanMessage(m.content)
        : new AIMessage(m.content)),
      new HumanMessage(query),
    ];
    for await (const chunk of await model.stream(messages)) {
      const token = typeof chunk.content === 'string' ? chunk.content : '';
      if (token) { full += token; emit({ type: 'token', token }); }
    }
    await saveMessage(conversation_id, 'assistant', full);
    emit({ type: 'done' });
  } catch (error) {
    console.error(error);
    emit({ type: 'error', message: 'Generation failed' });
  } finally {
    res.end();
  }
}
```

**Quan trọng:** đoạn demo chưa có rewrite query, Auth, cancellation và error handling của bước `loadHistory()` trước headers. Hãy tích hợp hàm `historyAwareRetriever` khi chuyển sang bản hoàn chỉnh. Khi dùng LangChain `ragChain.stream`, stream có thể là object chunks khác token string; xem cấu trúc thực tế trước khi emit.

## 4. Thay query thô bằng contextual retrieval

Nếu `historyAwareRetriever` đã được khởi tạo:

```ts
const lcHistory = history.map(m =>
  m.role === 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
);
const docs = await historyAwareRetriever.invoke({
  input: query,
  chat_history: lcHistory,
});
```

Tách phần xác thực/đọc DB/retrieval khỏi phần streaming để xử lý lỗi trước khi response bắt đầu. Trong production, lưu assistant output trên server trong `finally` với trạng thái hoàn tất hoặc gián đoạn.

## 5. Kiểm tra stream

`curl -N` giúp quan sát từng event khi response đến, không đợi buffer tích lũy:

```bash
curl -N -X POST http://localhost:8080/api/chat \
 -H 'Content-Type: application/json' \
 -d '{"conversation_id":"UUID_CHAT","document_id":"UUID_DOC","query":"Tóm tắt video"}'
```

Nếu vẫn nhận toàn bộ đoạn một lần, kiểm tra proxy/CDN buffering, headers, cách đọc stream của client và phương thức stream của SDK.

## 6. Các lỗi đáng chú ý

Không gửi JSON response sau khi đã `res.write()` SSE; không gọi `res.json()` ở cuối stream. Đừng tự cắt chuỗi SSE theo từng TCP chunk ở frontend, vì một event có thể bị chia giữa nhiều chunk HTTP. Đừng lưu message assistant trước khi nhận xong nội dung.

## 7. Tổng kết

Streaming là luồng giao tiếp giữa backend và UI; retrieval và sinh ngôn ngữ vẫn là nhiệm vụ của RAG service. Server phải là nguồn sự thật cuối cùng cho lịch sử chat.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Content-Type thường dùng cho SSE là gì?

A. application/pdf  
B. text/event-stream  
C. image/png  
D. text/css  

**Đáp án:** B. **Giải thích:** Đó là định dạng chuẩn event stream.

### Câu 2

Mỗi SSE event kết thúc bằng gì?

A. UUID  
B. Dấu chấm phẩy  
C. Dòng trống (hai newline)  
D. Dấu #  

**Đáp án:** C. **Giải thích:** Dòng trống phân tách events.

### Câu 3

Khi nào lưu assistant message hoàn chỉnh?

A. Trước model.stream  
B. Ngay khi nhận câu hỏi  
C. Khi server khởi động  
D. Sau khi stream hoàn tất thành công  

**Đáp án:** D. **Giải thích:** Lưu kết quả đầy đủ tránh mất token cuối.

### Câu 4

Vì sao không dùng `res.json()` sau khi đã gửi SSE?

A. HTTP headers/body đã bắt đầu gửi theo stream  
B. Supabase không có JSON  
C. TextDecoder không đọc được  
D. Vite bị mất CSS  

**Đáp án:** A. **Giải thích:** Không thể đổi kiểu response giữa chừng.

### Câu 5

Lệnh test nào giúp nhìn dữ liệu streaming không bị curl buffer?

A. npm build  
B. curl -N  
C. git push  
D. psql -d postgres  

**Đáp án:** B. **Giải thích:** -N giảm buffering của curl.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
