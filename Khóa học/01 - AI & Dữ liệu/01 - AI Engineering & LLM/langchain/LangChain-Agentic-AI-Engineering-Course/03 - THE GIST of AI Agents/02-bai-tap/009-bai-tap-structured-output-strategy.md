# Bài tập 009 — Phân tích Structured Output Strategy

## 1. Mục tiêu

- phân biệt Provider Strategy và Tool Strategy;
- chọn cơ chế phù hợp dựa trên khả năng model;
- liên hệ schema với cách framework thực thi structured output.

## 2. Đề bài

Xét hai model:

- Model A hỗ trợ structured output native qua API.
- Model B không hỗ trợ structured output native nhưng hỗ trợ tool calling.

Cả hai cần trả dữ liệu theo `AgentResponse` gồm `answer` và `sources`.

## 3. Nhiệm vụ

- Xác định chiến lược phù hợp cho Model A.
- Xác định chiến lược phù hợp cho Model B.
- Vẽ luồng xử lý của từng chiến lược.
- Giải thích khác biệt về nơi chịu trách nhiệm đảm bảo schema.
- Liệt kê bốn loại schema được hỗ trợ trong nội dung bài học.
- Giải thích vì sao developer vẫn có thể dùng cùng một ý tưởng `response_format` dù backend strategy khác nhau.

## 4. Yêu cầu

Phần trả lời phải dùng đúng các thuật ngữ:

- Provider Strategy;
- Tool Strategy;
- structured output native;
- tool calling;
- schema.

## 5. Tiêu chí hoàn thành

- [ ] Chọn đúng chiến lược cho từng model.
- [ ] Phân biệt đúng trách nhiệm của provider và framework/tool calling.
- [ ] Có hai sơ đồ luồng riêng.
- [ ] Liệt kê đủ Pydantic, dataclass, `TypedDict` và JSON Schema.
- [ ] Giải thích được abstraction mà `response_format` mang lại.

## 6. Gợi ý

Hãy nhìn bài toán từ hai tầng: tầng API mà developer sử dụng và tầng implementation mà framework/provider thực hiện phía dưới.
