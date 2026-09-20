# 004 - Bài tập Manual Tool Calling

## 1. Mục tiêu

Thực hành cấu hình một lần gọi LLM cho ReAct agent mà không dùng native tools.

## 2. Kiến thức cần dùng

- full ReAct prompt;
- question injection;
- scratchpad;
- `stop sequence`;
- `temperature = 0`;
- raw text output.

## 3. Đề bài

Hãy mô tả hoặc triển khai phần gọi LLM của một agent ReAct với yêu cầu:

- không truyền native tool schema;
- toàn bộ thông tin tool đã nằm trong prompt;
- generation phải dừng trước `Observation`;
- output được giữ dưới dạng raw text để parser xử lý ở bước tiếp theo.

## 4. Nhiệm vụ

1. Khởi tạo scratchpad rỗng.
2. Ghép câu hỏi người dùng vào ReAct prompt.
3. Ghép scratchpad vào cuối prompt.
4. Cấu hình stop sequence là `\nObservation`.
5. Đặt temperature bằng `0`.
6. Gọi model.
7. Lấy nội dung text của phản hồi.
8. Kiểm tra rằng output dừng sau `Action Input` khi model yêu cầu tool.

## 5. Yêu cầu hoàn thành

- [ ] Không dùng native function calling.
- [ ] Có stop sequence đúng vị trí.
- [ ] Có `temperature = 0`.
- [ ] Có scratchpad trong full prompt.
- [ ] Output cuối của bước này vẫn là raw text.
- [ ] Chưa tự gọi tool trong phần code của LLM call.

## 6. Kiểm tra lỗi

Thử bỏ stop sequence và quan sát sự khác biệt.

Ghi lại:

- model có tự sinh `Observation` hay không;
- output có tiếp tục vượt quá ranh giới mong muốn hay không;
- vì sao hành vi đó gây lỗi cho agent.

## 7. Deliverable

Nộp:

- đoạn code hoặc pseudocode lời gọi LLM;
- một output mẫu khi có stop sequence;
- một ghi chú ngắn giải thích vì sao observation phải do chương trình cung cấp.
