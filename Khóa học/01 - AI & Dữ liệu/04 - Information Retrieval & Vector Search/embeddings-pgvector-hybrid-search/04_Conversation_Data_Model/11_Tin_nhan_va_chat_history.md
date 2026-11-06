# Lưu message và phục hồi lịch sử hội thoại

> **Khóa học:** YouTube Conversational RAG · **Bài 11/20** · **Module:** Quản lý cuộc trò chuyện và lịch sử

## Tóm tắt

LLM không tự có trí nhớ giữa các API requests. Lịch sử phải được lưu và chuyển có chọn lọc ở mỗi lượt hỏi.

## Mục tiêu học tập

- Ghi message với role và conversation_id.
- Lấy lịch sử theo đúng thứ tự.
- Chuyển thành HumanMessage/AIMessage cho LangChain.

## 1. Dữ liệu tối thiểu của message

Một message có `id`, `conversation_id`, `role`, `content`, `created_at`. Hai role dùng cho hội thoại ứng dụng là `user` và `assistant`. Dữ liệu được lưu trong PostgreSQL nhằm mở lại một conversation ở lần truy cập sau.

Ví dụ hội thoại:

1. User: “Tóm tắt video thành 5 ý”.
2. Assistant: “Ý 1…, Ý 2…”.
3. User: “Giải thích ý thứ hai”.

Nếu chỉ gửi câu (3), model không biết “ý thứ hai” nói đến điều gì. Truyền history giúp model hiểu tham chiếu và có thể tạo câu hỏi độc lập cho retriever.

## 2. Ghi và đọc tin nhắn

```ts
async function saveMessage(conversationId: string, role: 'user'|'assistant', content: string) {
  const { error } = await db.from('conversation_messages').insert({
    conversation_id: conversationId, role, content,
  });
  if (error) throw error;
}

async function loadHistory(conversationId: string) {
  const { data, error } = await db.from('conversation_messages')
    .select('id, role, content, created_at')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true })
    .order('id', { ascending: true });
  if (error) throw error;
  return data ?? [];
}
```

Hai tiêu chí sort giữ thứ tự ổn định hơn khi timestamp có độ chính xác trùng nhau. Với chat dài, cần paging hoặc chỉ lấy cửa sổ gần nhất và một summary có kiểm chứng.

## 3. Chuyển sang định dạng LangChain

```ts
import { HumanMessage, AIMessage } from '@langchain/core/messages';

const chatHistory = history.map(message =>
  message.role === 'user'
    ? new HumanMessage(message.content)
    : new AIMessage(message.content)
);
```

Tên key mà một số chains truyền thống sử dụng là `chat_history`; cần nhất quán với `MessagesPlaceholder('chat_history')`. Không thay role assistant thành user trong quá trình mapping.

## 4. Thứ tự xử lý trong một lượt chat

Backend xác nhận quyền → đọc lịch sử **trước khi** thêm câu hỏi hiện tại → lưu message mới của user → chạy RAG với history cũ và `input` mới → stream chunks → lưu câu trả lời assistant. Nếu đọc history sau khi vừa lưu message user, câu hỏi có thể xuất hiện hai lần (trong history và input), làm prompt khó hiểu.

Khi stream lỗi, không nên ghi assistant response là hoàn chỉnh. Có thể lưu một message với trạng thái `interrupted` ở phiên bản nâng cao và cho phép retry.

## 5. Kiểm soát lịch sử quá dài

Không gửi toàn bộ chat vô hạn. Một chiến lược đơn giản là dùng vài lượt gần nhất; nâng cao hơn là tạo summary của các lượt cũ, nhưng phải phân biệt summary do model viết với bản gốc. Khi model viết lại câu hỏi, đôi khi một chi tiết quan trọng ở đầu hội thoại bị thiếu; kiểm thử các câu hỏi quy chiếu dài.

## 6. Thực hành

Gửi hai lượt hỏi cho cùng `conversation_id`, kiểm tra bốn message được lưu đúng role, thứ tự. Gửi một câu hỏi từ conversation khác; xác nhận message history không bị trộn.

## 7. Tổng kết

Lưu history là một chức năng của backend, không phải tính năng tự sinh của LLM. Đọc đúng lịch sử là điều kiện cho contextual retrieval chính xác.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao câu “Ý thứ hai là gì?” khó trả lời độc lập?

A. Vì quá dài  
B. Vì thiếu ngữ cảnh từ lượt trước  
C. Vì không có UUID  
D. Vì React chỉ hỗ trợ tiếng Anh  

**Đáp án:** B. **Giải thích:** Tham chiếu phụ thuộc nội dung trước.

### Câu 2

Khi nào nên đọc chat history?

A. Sau khi ghi lại câu hỏi mới và thêm nó vào prompt hai lần  
B. Sau stream  
C. Trước khi lưu user message hiện tại  
D. Sau khi xóa chat  

**Đáp án:** C. **Giải thích:** Tránh trùng câu hỏi trong context.

### Câu 3

HumanMessage ứng với role nào?

A. assistant  
B. system  
C. tool  
D. user  

**Đáp án:** D. **Giải thích:** HumanMessage biểu diễn lời người dùng.

### Câu 4

Vì sao sort theo created_at và id?

A. Đảm bảo thứ tự ổn định hơn  
B. Để kích hoạt RLS  
C. Để nén embedding  
D. Để dịch transcript  

**Đáp án:** A. **Giải thích:** ID làm tiêu chí phụ khi timestamp trùng.

### Câu 5

Nếu stream lỗi giữa chừng, cách làm đúng là gì?

A. Ghi như hoàn chỉnh  
B. Đánh dấu interruption hoặc retry, không báo hoàn tất  
C. Xóa mọi video  
D. Đưa lỗi làm prompt  

**Đáp án:** B. **Giải thích:** Trạng thái lưu phải phản ánh stream chưa xong.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
