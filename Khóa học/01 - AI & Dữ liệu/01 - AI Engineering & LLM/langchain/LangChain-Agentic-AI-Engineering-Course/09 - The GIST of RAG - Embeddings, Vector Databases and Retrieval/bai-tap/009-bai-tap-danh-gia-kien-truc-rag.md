# 009 - Bài tập: Đánh giá kiến trúc RAG

## 1. Mục tiêu

- Phân biệt 2-step RAG và agentic retrieval.
- Phân tích control, latency, cost và predictability.
- Đọc tài liệu framework theo kiến trúc.

## 2. Đề bài

Có hai thiết kế cho chatbot hỗ trợ khách hàng.

**Thiết kế A:** mọi câu hỏi đều thực hiện retrieval trước rồi mới gọi LLM.

**Thiết kế B:** retrieval là một tool; agent tự quyết định có gọi tool hay không.

## 3. Nhiệm vụ

1. Vẽ data flow cho cả hai thiết kế.
2. Xác định thành phần nào quyết định retrieval.
3. So sánh số lần model/tool có thể được gọi.
4. Phân tích trade-off về latency.
5. Phân tích trade-off về tính xác định.
6. Nêu trường hợp mà retrieval bắt buộc luôn xảy ra.
7. Nêu trường hợp mà agentic retrieval có thể hữu ích.
8. Liệt kê các câu hỏi cần trả lời khi một framework cung cấp helper cấp cao che giấu pipeline.

## 4. Yêu cầu hoàn thành

- [ ] Không đánh giá kiến trúc chỉ bằng số dòng code.
- [ ] Có phân tích control.
- [ ] Có phân tích cost/latency.
- [ ] Có phân tích predictability.
- [ ] Có nhận xét về observability và debug.

## 5. Gợi ý

Câu hỏi quan trọng nhất là: “Quyền quyết định bước tiếp theo đang nằm trong code hay nằm trong LLM?”
