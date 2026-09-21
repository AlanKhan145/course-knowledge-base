# 007 - Bài tập: Naive Retrieval

## 1. Mục tiêu

- Thực hành retrieval thủ công.
- Quan sát dữ liệu qua từng bước.
- Phân biệt retrieval error với generation error.

## 2. Đề bài

Triển khai một hàm RAG theo kiểu function-based cho câu hỏi về dữ liệu đã có trong Pinecone.

## 3. Nhiệm vụ

1. Tạo retriever với `k=3`.
2. Gọi `retriever.invoke` bằng query.
3. In ba `Document` được trả về.
4. Ghép `page_content` của các document thành một context string.
5. Điền `context` và `question` vào prompt.
6. Gọi LLM.
7. So sánh câu trả lời với một lần gọi LLM không có retrieval.
8. Ghi lại trace hoặc log của từng bước.

## 4. Yêu cầu

- Không ẩn toàn bộ pipeline trong một helper duy nhất.
- Phải quan sát được output sau retrieval.
- Phải quan sát được prompt cuối trước khi gọi LLM.
- Nếu câu trả lời sai, xác định lỗi nằm ở retrieval hay generation trước khi sửa.

## 5. Tiêu chí hoàn thành

- [ ] Retriever trả tối đa ba document.
- [ ] Context được tạo từ document thực tế.
- [ ] Prompt có question và context.
- [ ] Có kết quả so sánh với non-RAG call.
- [ ] Có nhận xét về hạn chế của function-based pipeline.

## 6. Gợi ý

Nếu LLM trả lời sai nhưng ba document retrieval đều sai chủ đề, vấn đề chính chưa nằm ở prompt.
