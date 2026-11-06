# Frontend React: form URL, trạng thái ingestion và màn hình chat

> **Khóa học:** YouTube Conversational RAG · **Bài 16/20** · **Module:** Xây giao diện React và streaming

## Tóm tắt

Ứng dụng React/Vite bắt đầu từ một form URL đơn giản và chuyển sang chat khi backend thông báo tài liệu đã sẵn sàng.

## Mục tiêu học tập

- Xây controlled input nhập URL.
- Gọi POST /api/ingest, giữ IDs trong state.
- Hiển thị trạng thái loading/error/success rõ ràng.

## 1. Luồng giao diện tối thiểu

Ban đầu, người dùng thấy tiêu đề, ô dán YouTube URL, nút “Xử lý video”. Khi nhấn submit, frontend chặn gửi form mặc định và gọi API Node. Nếu thành công, response trả `conversation_id` và `document_id`, ứng dụng chuyển sang trạng thái chat. Nếu thất bại, giữ nguyên URL và hiện lỗi có thể đọc được.

## 2. Kiểu dữ liệu API

```ts
type IngestResult = {
  conversation_id: string;
  document_id: string;
  chunks: number;
};
```

Không bao giờ giả định HTTP status 200/201 nếu `fetch` không throw. `fetch` chỉ reject cho lỗi mạng, còn 4xx/5xx vẫn có `Response`; phải kiểm tra `response.ok`.

## 3. Ví dụ App.tsx phần ingest

```tsx
import { useState, type FormEvent } from 'react';

const API = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';

export default function App() {
  const [url, setUrl] = useState('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleIngest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!url.trim() || loading) return;
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/ingest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      if (!response.ok) throw new Error('Không xử lý được video');
      const result: IngestResult = await response.json();
      setConversationId(result.conversation_id);
      setDocumentId(result.document_id);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Có lỗi mạng');
    } finally {
      setLoading(false);
    }
  }

  if (conversationId && documentId) {
    return <main><h1>Chat với video</h1>
      <p>Conversation: {conversationId}</p>
      <p>Document: {documentId}</p>
      {/* Thay vùng này bằng ChatPanel của bài 17 */}
    </main>;
  }
  return <main>
    <h1>AI Chat with YouTube</h1>
    <form onSubmit={handleIngest}>
      <input value={url} onChange={e => setUrl(e.target.value)}
             placeholder="Dán URL YouTube" aria-label="URL YouTube" />
      <button disabled={loading}>{loading ? 'Đang xử lý…' : 'Xử lý video'}</button>
    </form>
    {error && <p role="alert">{error}</p>}
  </main>;
}
```

Trong ứng dụng hoàn chỉnh, chuyển `ChatPanel` thành component riêng và hiển thị tiêu đề video thay vì UUID kỹ thuật. Nếu có nhiều trang, dùng React Router để chứa `conversation_id` trong đường dẫn.

## 4. Phân biệt xử lý đồng bộ và job bất đồng bộ

Bản lab chờ `POST /api/ingest` hoàn tất. Với video dài hoặc nhiều người dùng, API nên trả `202 Accepted` cùng job ID, frontend polling status cho tới `ready`, rồi mới mở chat. Đây là cải tiến ngoài luồng demo để giảm khả năng request timeout.

## 5. UX cần có

- Không cho submit liên tục trong lúc loading.
- Hiện lỗi cụ thể mà không tiết lộ stack trace/secret.
- Nhập URL không hợp lệ phải nhận feedback.
- Cho phép chọn “Thử lại” sau lỗi tạm thời.
- Khi chuyển trạng thái, giữ document/context đã chọn cho toàn bộ phiên chat.

## 6. Thực hành

Thử URL rỗng, URL không thuộc YouTube, URL video hợp lệ và tình trạng backend ngắt kết nối. Xác nhận UI không hiện chat khi server chưa trả IDs hợp lệ.

## 7. Tổng kết

Form nhập URL là điểm khởi đầu của workflow RAG. Điều quan trọng không phải thiết kế cầu kỳ mà là trạng thái nhất quán giữa frontend và ingestion service.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao dùng `e.preventDefault()` cho form React?

A. Để bật RLS  
B. Ngăn reload trang mặc định  
C. Để tạo embeddings  
D. Để stream token  

**Đáp án:** B. **Giải thích:** Cho phép React kiểm soát submission.

### Câu 2

`fetch` với HTTP 500 có tự throw không?

A. Luôn luôn  
B. Chỉ với Supabase  
C. Không, cần kiểm tra response.ok  
D. Chỉ trên Chrome  

**Đáp án:** C. **Giải thích:** Fetch vẫn trả Response với 4xx/5xx.

### Câu 3

Khi nào frontend chuyển sang chat?

A. Ngay khi nhập dấu đầu tiên  
B. Ngay khi bấm nút  
C. Khi loading=true  
D. Sau khi backend trả IDs và xử lý thành công  

**Đáp án:** D. **Giải thích:** UI cần document đã sẵn sàng.

### Câu 4

Vì sao không đưa service key vào React?

A. Vì browser phơi bày bundle  
B. Vì React không có biến  
C. Vì phải dùng CSS  
D. Vì embeddings không tồn tại  

**Đáp án:** A. **Giải thích:** Secret phải giữ ở server.

### Câu 5

Với video xử lý lâu nên triển khai gì?

A. Vô hạn timeout browser  
B. API job bất đồng bộ và polling status  
C. Xóa nút  
D. Đưa transcript vào localStorage  

**Đáp án:** B. **Giải thích:** Không giữ request quá lâu và hiển thị tiến độ.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
