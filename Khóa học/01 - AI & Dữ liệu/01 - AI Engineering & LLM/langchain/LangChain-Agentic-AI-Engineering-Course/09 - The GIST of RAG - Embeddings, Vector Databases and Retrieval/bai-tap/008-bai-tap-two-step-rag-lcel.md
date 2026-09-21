# 008 - Bài tập: 2-Step RAG bằng LCEL

## 1. Mục tiêu

- Chuyển pipeline function-based thành runnable chain.
- Theo dõi data shape qua `RunnablePassthrough.assign`.
- Sử dụng output parser để nhận chuỗi cuối.

## 2. Đề bài

Từ pipeline naive retrieval, hãy tổ chức lại thành một LCEL chain có input dạng:

```text
{
  question: "..."
}
```

và trước prompt phải tạo được:

```text
{
  question: "...",
  context: "..."
}
```

## 3. Nhiệm vụ

1. Giữ nguyên `question` qua `RunnablePassthrough`.
2. Trích giá trị câu hỏi để truyền cho retriever.
3. Truy xuất document.
4. Chuyển document thành context string.
5. Dùng `assign` để thêm `context` vào dictionary.
6. Pipe dictionary vào prompt template.
7. Pipe prompt vào LLM.
8. Dùng `StrOutputParser`.
9. Gọi toàn chain bằng `invoke`.
10. Kiểm tra trace của từng stage.

## 4. Yêu cầu hoàn thành

- [ ] Input ban đầu vẫn tồn tại sau passthrough.
- [ ] `context` được tính từ retrieval chứ không hard-code.
- [ ] Prompt nhận đủ hai khóa.
- [ ] Chain trả về string.
- [ ] Trace cho thấy được retriever, prompt và model stage.

## 5. Câu hỏi phân tích

1. Vì sao `assign` phù hợp với bài toán thêm context?
2. Function format document ban đầu không có `invoke`; tại sao vẫn có thể tham gia chain?
3. LCEL cải thiện observability như thế nào?
4. Kết quả của function-based và LCEL có bắt buộc khác nhau không?

## 6. Gợi ý

Hãy debug theo data shape. Nếu prompt báo thiếu biến `context`, hãy kiểm tra output của bước `assign` trước khi kiểm tra LLM.
