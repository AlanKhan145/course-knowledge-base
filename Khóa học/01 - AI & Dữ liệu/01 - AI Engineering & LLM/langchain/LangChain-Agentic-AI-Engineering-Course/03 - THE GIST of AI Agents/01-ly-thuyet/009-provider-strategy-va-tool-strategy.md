# Bài 009 — Structured Output: Provider Strategy và Tool Strategy

## 1. Tóm tắt

Structured output có thể được triển khai theo hai hướng chính. **Provider Strategy** sử dụng khả năng structured output native của model provider. **Tool Strategy** dùng cơ chế tool calling để buộc model tạo dữ liệu theo schema. LangChain có thể lựa chọn chiến lược phù hợp dựa trên khả năng của model.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- phân biệt Provider Strategy và Tool Strategy;
- giải thích khi nào có thể dùng structured output native;
- mô tả cách tool calling được dùng làm cơ chế thay thế;
- nhận biết các loại schema có thể dùng cho structured output.

## 3. Provider Strategy

Nhiều model provider hỗ trợ structured output ở mức API. Khi đó, application gửi schema cho provider và provider chịu trách nhiệm trả dữ liệu phù hợp với cấu trúc yêu cầu.

Luồng khái niệm:

```text
Schema + Prompt
     ↓
Provider API có structured output native
     ↓
Dữ liệu tuân theo schema
```

Ưu điểm lớn là việc đảm bảo định dạng được đẩy xuống lớp provider thay vì LangChain phải mô phỏng bằng một cơ chế khác.

## 4. Tool Strategy

Không phải mọi model đều có structured output native. Nếu model hỗ trợ tool calling, LangChain có thể dùng một chiến lược khác: biểu diễn schema như một tool và yêu cầu model tạo tool call theo schema đó.

```text
Schema
  ↓
Được biểu diễn thành tool schema
  ↓
LLM tạo tool call bắt buộc theo schema
  ↓
LangChain chuyển dữ liệu thành structured response
```

Cốt lõi của cách này là tận dụng khả năng tool calling để model sinh đúng tập field và type cần thiết.

## 5. So sánh hai chiến lược

| Khía cạnh | Provider Strategy | Tool Strategy |
| --- | --- | --- |
| Nơi đảm bảo cấu trúc | Model provider | Cơ chế tool calling của LangChain/model |
| Yêu cầu model | Hỗ trợ structured output native | Hỗ trợ tool calling |
| Schema | Gửi trực tiếp cho provider | Chuyển thành tool schema |
| Mục đích | Dùng khả năng native | Fallback hoặc lựa chọn thay thế |

## 6. LangChain chọn chiến lược

Khi model hỗ trợ structured output native và schema được cung cấp cho agent, LangChain có thể sử dụng provider strategy. Nếu khả năng native không có nhưng tool calling được hỗ trợ, tool strategy là cách thay thế.

Điều người học cần nắm là `response_format` ở bề mặt API có thể trông đơn giản, nhưng bên dưới có nhiều chiến lược triển khai khác nhau.

## 7. Các dạng schema

Structured output không chỉ giới hạn ở Pydantic. Các dạng schema được đề cập gồm:

- Pydantic model;
- dataclass;
- `TypedDict`;
- JSON Schema.

Dù biểu diễn khác nhau, mục tiêu chung vẫn là cung cấp một cấu trúc máy có thể hiểu và kiểm tra.

## 8. Liên hệ với bài Pydantic

Ở bài trước, `AgentResponse` được truyền trực tiếp vào `response_format`. Từ góc nhìn application, developer chỉ khai báo schema mong muốn. Phần lựa chọn provider strategy hay tool strategy thuộc về lớp triển khai phía dưới.

Điều này tạo ra abstraction hữu ích:

```text
Developer quan tâm: Tôi muốn output có schema nào?
Framework quan tâm: Tôi sẽ dùng cơ chế nào để tạo output đó?
```

## 9. Tổng kết

Provider Strategy và Tool Strategy giải quyết cùng một bài toán bằng hai cơ chế khác nhau. Provider Strategy tận dụng structured output native của model provider; Tool Strategy tận dụng tool calling. Hiểu hai chiến lược giúp giải thích vì sao một `response_format` đơn giản có thể hoạt động trên nhiều model với khả năng khác nhau.
