# React: hiển thị tin nhắn và đọc SSE bằng ReadableStream

> **Khóa học:** YouTube Conversational RAG · **Bài 17/20** · **Module:** Xây giao diện React và streaming

## Tóm tắt

Người dùng thấy câu hỏi ngay lập tức và câu trả lời assistant được nối từng token từ stream của backend.

## Mục tiêu học tập

- Quản lý state message và trạng thái streaming.
- Giải mã SSE theo frame không phụ thuộc ranh giới network chunk.
- Tránh submit chồng và cập nhật message sai.

## 1. State của chat

```ts
type ChatMessage = { role: 'user'|'assistant'; content: string };
const [messages, setMessages] = useState<ChatMessage[]>([]);
const [prompt, setPrompt] = useState('');
const [streaming, setStreaming] = useState(false);
```

Khi submit, append một message `user` và một message `assistant` rỗng. Trong khi SSE đến, **cập nhật message cuối của assistant** bằng phần text tích lũy. Đừng nối token vào message người dùng hoặc ghi đè cả danh sách bằng state closure cũ.

## 2. Hàm gọi chat API

```ts
async function queryDocument(query: string, conversationId: string, documentId: string) {
  const response = await fetch(`${API}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      conversation_id: conversationId,
      document_id: documentId,
    }),
  });
  if (!response.ok || !response.body) throw new Error('Chat API unavailable');
  return response.body.getReader();
}
```

`ReadableStream` có thể bị chia ở bất kỳ vị trí byte nào. Một lần `reader.read()` **không** đảm bảo bằng một event SSE. Vì thế cần giữ `buffer` giữa các lần đọc; dùng `TextDecoder` với `{stream: true}`.

## 3. Parser SSE an toàn hơn việc split từng network chunk

```ts
async function consumeStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  onToken: (text: string) => void
) {
  const decoder = new TextDecoder();
  let buffer = '';
  let finished = false;
  while (!finished) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    // Backend ví dụ dùng \n\n, chuẩn hóa CRLF nếu có proxy chuyển đổi.
    buffer = buffer.replace(/\r\n/g, '\n');
    let boundary: number;
    while ((boundary = buffer.indexOf('\n\n')) >= 0) {
      const frame = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      const data = frame.split('\n')
        .filter(line => line.startsWith('data:'))
        .map(line => line.slice(5).trimStart()).join('\n');
      if (!data) continue;
      const event = JSON.parse(data);
      if (event.type === 'token') onToken(String(event.token));
      if (event.type === 'error') throw new Error(event.message);
      if (event.type === 'done') { finished = true; break; }
    }
  }
  reader.releaseLock();
}
```

Production parser cần xử lý EOF còn dữ liệu chưa flush, event lines khác `data`, tình huống server đóng stream bất thường, AbortController và retry; đoạn trên đủ để học cấu trúc cơ bản của framing `data: ...\n\n` do server này phát ra.

## 4. Gắn stream vào state React

```tsx
async function handleSend(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const query = prompt.trim();
  if (!query || streaming || !conversationId || !documentId) return;
  setPrompt(''); setStreaming(true);
  setMessages(prev => [...prev,
    { role: 'user', content: query },
    { role: 'assistant', content: '' },
  ]);
  let full = '';
  try {
    const reader = await queryDocument(query, conversationId, documentId);
    await consumeStream(reader, token => {
      full += token;
      setMessages(prev => prev.map((m, i) =>
        i === prev.length - 1 ? { ...m, content: full } : m
      ));
    });
  } catch (err) {
    setMessages(prev => prev.map((m, i) => i === prev.length - 1
      ? { ...m, content: full || '[Không nhận được phản hồi]' } : m));
    console.error(err);
  } finally { setStreaming(false); }
}
```

Render message bubbles theo `messages.map`, dùng key ổn định trong app thực (message UUID), và khóa nút submit khi streaming. Bản trên giả định chưa có queue gửi câu hỏi đồng thời, nên assistant cuối cùng luôn là message đang stream.

## 5. Lưu history ở đâu?

Backend đã lưu user/assistant trong `conversation_messages`; frontend chỉ hiển thị local state. Khi refresh, gọi endpoint lấy history từ server rồi render lại. Đừng để frontend là nơi duy nhất lưu câu trả lời: mất tab sẽ mất lịch sử, và việc dùng service key phía browser để lưu thay backend là không an toàn.

## 6. Bài tập và checkpoint

Thử câu hỏi tạo phản hồi dài, refresh trang, gửi câu hỏi tiếp nối và cố nhấn gửi lần hai khi đang streaming. Đảm bảo parser không làm rơi ký tự tiếng Việt khi network cắt giữa các byte UTF-8.

## 7. Tổng kết

Streaming UI là bài toán quản trị state và parser giao thức, không chỉ là hiển thị animation. Kết quả đúng yêu cầu backend SSE và frontend TextDecoder thống nhất định dạng.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao cần `buffer` khi đọc SSE?

A. Để lưu API key  
B. Vì network chunk có thể cắt giữa một event  
C. Để tăng dimension vector  
D. Vì Supabase chỉ trả một message  

**Đáp án:** B. **Giải thích:** Ranh giới read() khác ranh giới event.

### Câu 2

`TextDecoder(..., {stream:true})` giúp điều gì?

A. Bật RLS  
B. Sinh UUID  
C. Giải mã UTF-8 qua các chunk byte  
D. Tạo index HNSW  

**Đáp án:** C. **Giải thích:** Một ký tự có thể bị chia byte giữa hai lần đọc.

### Câu 3

Khi có token mới nên cập nhật message nào?

A. Message đầu tiên  
B. Mọi message user  
C. Document title  
D. Message assistant đang stream  

**Đáp án:** D. **Giải thích:** Chỉ assistant hiện tại nhận thêm token.

### Câu 4

Nguồn sự thật cho history sau refresh là gì?

A. Database/backend  
B. CSS  
C. Biến url  
D. Bộ nhớ của model  

**Đáp án:** A. **Giải thích:** Server lưu lịch sử lâu dài.

### Câu 5

Vì sao disabled send trong khi streaming (bản demo)?

A. Để tăng k  
B. Để tránh chồng các response vào một message cuối  
C. Để ẩn lỗi DB  
D. Để tắt vector store  

**Đáp án:** B. **Giải thích:** UI giả định chỉ một stream hoạt động mỗi lần.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
