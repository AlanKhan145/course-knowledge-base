# Viết lại câu hỏi theo lịch sử bằng History-Aware Retriever

> **Khóa học:** YouTube Conversational RAG · **Bài 13/20** · **Module:** Truy xuất theo ngữ cảnh và sinh câu trả lời

## Tóm tắt

Khi người dùng hỏi nối tiếp bằng đại từ hoặc câu thiếu chủ ngữ, cần chuyển nó thành câu hỏi đủ nghĩa trước khi search.

## Mục tiêu học tập

- Xây prompt contextualization.
- Diễn giải cách createHistoryAwareRetriever kết hợp history và retriever.
- Kiểm thử câu hỏi độc lập so với câu hỏi nối tiếp.

## 1. Một lỗi đặc trưng của chat RAG

Giả sử lịch sử trước đó là “Hãy kể về tháp Eiffel”. Người dùng hỏi “Nó được xây vào năm nào?”. Tìm kiếm vector chỉ dựa trên “Nó được xây vào năm nào?” có thể không nhắm được tháp Eiffel. Hệ thống cần diễn giải thành “Tháp Eiffel được xây vào năm nào?” **trước khi** tìm tài liệu.

Đây là khâu tạo **standalone question**; khâu này không được tự trả lời. Mục đích là cải thiện search query, chứ không phải thay thế retrieval.

## 2. Prompt viết lại câu hỏi

```ts
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';

const contextualizePrompt = ChatPromptTemplate.fromMessages([
  ['system', `Given chat history and the latest user question,
    formulate a standalone question that can be understood without chat history.
    Do not answer it. If rewriting is unnecessary, return it unchanged.`],
  new MessagesPlaceholder('chat_history'),
  ['human', '{input}'],
]);
```

Dòng `MessagesPlaceholder` phải nhận danh sách HumanMessage/AIMessage đúng thứ tự. Nếu thiếu, mô hình không có thông tin để giải tham chiếu.

## 3. Chain truyền thống của LangChain

Một số dòng LangChain.js 0.3 dùng `createHistoryAwareRetriever`; import paths có thể thay đổi trong major mới. Nếu bạn học theo bản demo, khóa phiên bản tương thích với API này hoặc chuyển sang composition bằng `RunnableSequence` trong LangChain hiện hành.

```ts
// Mẫu cho nhánh LangChain.js hỗ trợ chains truyền thống
import { createHistoryAwareRetriever } from 'langchain/chains/history_aware_retriever';

const retriever = vectorStore.asRetriever({
  k: 5,
  filter: { document_id: documentId },
});
const historyAwareRetriever = await createHistoryAwareRetriever({
  llm: chatModel,
  retriever,
  rephrasePrompt: contextualizePrompt,
});
const docs = await historyAwareRetriever.invoke({
  input: 'Giải thích kỹ hơn ý thứ hai',
  chat_history: chatHistory,
});
```

Nếu import không tồn tại trong major bạn đang dùng, không nên đoán đường dẫn. Hãy kiểm tra package version và documentation. Về nguyên lý, hai bước vẫn là: LLM viết câu hỏi đầy đủ → retriever tìm các Documents bằng câu hỏi đó.

## 4. Khi nào không cần viết lại?

Một câu hỏi đã tự đủ nghĩa như “Video giải thích embeddings là gì?” có thể chuyển thẳng sang retrieval. Lịch sử không nhất thiết làm câu hỏi chính xác hơn, nhất là khi người dùng đổi chủ đề. Prompt yêu cầu giữ nguyên câu hỏi khi không cần sửa để hạn chế làm sai ý định.

## 5. Kiểm thử

Tạo ba test:

- Câu hỏi độc lập: “Video trình bày công nghệ gì?”.
- Câu hỏi nối tiếp: “Hạn chế thứ hai của nó là gì?”.
- Câu chuyển chủ đề: “Tác giả kết luận điều gì?”.

Quan sát câu standalone và các chunk được tìm. Việc rewrite sai có thể dẫn đến retrieval sai dù vector store hoạt động tốt.

## 6. Lưu ý nguồn dữ liệu không đáng tin

Transcript có thể chứa chỉ dẫn nhắm tới model. Standalone-question prompt phải ưu tiên yêu cầu thật của người dùng và lịch sử đã được kiểm soát; không coi một câu trong transcript là mệnh lệnh hệ thống.

## 7. Tổng kết

History-aware retrieval giải quyết nhu cầu hỏi tiếp nối. Chìa khóa là **tách** việc viết lại câu hỏi khỏi việc trả lời bằng chứng.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Mục đích của contextualize prompt là gì?

A. Tạo URL YouTube  
B. Viết lại câu hỏi độc lập để search  
C. Đổi định dạng SQL  
D. Lưu embeddings  

**Đáp án:** B. **Giải thích:** Query đầy đủ ngữ nghĩa dễ truy xuất hơn.

### Câu 2

Nội dung nào không được làm ở bước rewrite?

A. Xem lịch sử  
B. Giữ ý định user  
C. Trả lời thay vì viết lại  
D. Sửa đại từ  

**Đáp án:** C. **Giải thích:** Bước này chỉ chuẩn hóa truy vấn.

### Câu 3

`MessagesPlaceholder` cần nhận gì?

A. Vector 3072 chiều  
B. API key  
C. React JSX  
D. Các message lịch sử đúng role  

**Đáp án:** D. **Giải thích:** Placeholder chứa chuỗi hội thoại.

### Câu 4

Khi câu hỏi đã rõ nghĩa, xử lý tốt nhất là?

A. Giữ nguyên hoặc thay đổi rất ít  
B. Chuyển sang câu khác  
C. Xóa vector store  
D. Tự động viết câu hỏi dài gấp đôi  

**Đáp án:** A. **Giải thích:** Không rewrite quá mức.

### Câu 5

Lỗi nào khiến lịch sử không giúp giải tham chiếu?

A. Title dài  
B. Không truyền chat_history  
C. Kết quả k=5  
D. Có metadata  

**Đáp án:** B. **Giải thích:** LLM không có history để hiểu “nó”.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
