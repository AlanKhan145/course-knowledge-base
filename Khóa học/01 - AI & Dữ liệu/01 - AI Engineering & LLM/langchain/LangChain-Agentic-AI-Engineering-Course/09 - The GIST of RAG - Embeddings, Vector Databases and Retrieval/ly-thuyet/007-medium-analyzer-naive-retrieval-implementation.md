# 007 - Medium Analyzer: Triển khai Naive Retrieval

## 1. Tóm tắt

Naive retrieval triển khai RAG theo cách trực tiếp: lấy câu hỏi, tìm một số tài liệu gần nhất trong vector store, định dạng chúng thành context, ghép vào prompt rồi gọi LLM.

Cách làm thủ công này rất hữu ích để hiểu dữ liệu đi qua pipeline như thế nào trước khi đóng gói mọi thứ bằng LCEL.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- khởi tạo retriever từ vector store;
- giải thích `k=3` trong similarity retrieval;
- mô tả luồng `retriever.invoke` → format documents → prompt → LLM;
- phân biệt câu hỏi gốc với context truy xuất;
- phân tích hạn chế của pipeline viết bằng các lời gọi hàm rời rạc;
- sử dụng trace và debug để kiểm tra retrieval.

## 3. Khởi tạo thành phần

Pipeline retrieval cần:

- biến môi trường;
- embedding object tương thích với dữ liệu đã index;
- LLM;
- vector store trỏ tới đúng index;
- retriever;
- prompt template.

Retriever là interface tìm dữ liệu liên quan từ vector store.

Trong ví dụ, retriever được cấu hình với `k=3`, nghĩa là mỗi truy vấn giữ lại ba tài liệu liên quan nhất.

## 4. Prompt tăng cường

Prompt có hai dữ liệu quan trọng:

- `question`: câu hỏi gốc của người dùng;
- `context`: nội dung được lấy từ vector store.

Dạng logic:

```text
Answer the question based on the following context.

Context:
{context}

Question:
{question}
```

Điểm cốt lõi của RAG nằm ở `context`: câu hỏi không được gửi một mình mà đi kèm bằng chứng được truy xuất.

## 5. Định dạng tài liệu

`retriever.invoke(query)` trả về danh sách các `Document`.

LLM không cần nhận nguyên danh sách object. Vì vậy, các tài liệu được chuyển thành một chuỗi văn bản.

```text
Document 1.page_content
+
Document 2.page_content
+
Document 3.page_content
=
context string
```

Hàm format không thay đổi logic retrieval; nó chỉ chuyển đầu ra thành dạng phù hợp với prompt.

## 6. Pipeline thủ công

Phiên bản naive có thể mô tả bằng năm bước:

```text
1. Receive query
2. retriever.invoke(query)
3. format retrieved documents
4. fill prompt with context + question
5. invoke LLM
```

Sơ đồ:

```mermaid
flowchart LR
    Q[Question] --> R[Retriever]
    R --> D[Top 3 Documents]
    D --> F[Format Documents]
    F --> P[Prompt]
    Q --> P
    P --> L[LLM]
    L --> A[Answer]
```

## 7. Vì sao retrieval thay đổi câu trả lời

Ví dụ trong bài hỏi Pinecone là gì trong machine learning.

Một LLM không có đúng kiến thức hoặc hiểu sai ngữ cảnh có thể trả lời không đúng đối tượng cần hỏi. Khi RAG truy xuất các chunk mô tả Pinecone như vector database và đưa chúng vào prompt, mô hình có cơ sở phù hợp để tạo câu trả lời mong muốn.

Điểm quan trọng không phải là “RAG luôn sửa được LLM”, mà là RAG tạo ra một đường dẫn để **cung cấp ngữ cảnh cụ thể từ dữ liệu của hệ thống**.

## 8. Debug từng bước

Một phiên debug tốt nên kiểm tra:

**Sau retrieval:** danh sách có đúng ba `Document` hay không và nội dung có liên quan không.

**Sau format:** `context` có thực sự chứa nội dung của các document vừa lấy không.

**Sau prompt formatting:** prompt cuối cùng có cả context và question không.

**Sau LLM:** phản hồi có dựa vào nội dung đã truy xuất hay không.

Nếu tài liệu retrieval sai, sửa retriever hoặc dữ liệu trước khi sửa prompt.

## 9. Hạn chế của cách viết thủ công

Phiên bản function-based có một số hạn chế:

- không có cấu trúc chain thống nhất;
- khó ghép vào pipeline lớn hơn;
- streaming và async không tự nhiên;
- trace bị phân mảnh;
- khó quan sát toàn bộ luồng trong một trace;
- nhiều bước nối thủ công nên dễ lỗi và khó bảo trì.

Đó là lý do bài tiếp theo chuyển sang LangChain Expression Language.

## 10. Tổng kết

Naive retrieval giúp nhìn rõ bản chất của 2-step RAG:

```text
retrieve context
→ augment prompt
→ generate answer
```

Trước khi dùng abstraction cao hơn, cần hiểu chính xác từng object vào và ra khỏi pipeline.
