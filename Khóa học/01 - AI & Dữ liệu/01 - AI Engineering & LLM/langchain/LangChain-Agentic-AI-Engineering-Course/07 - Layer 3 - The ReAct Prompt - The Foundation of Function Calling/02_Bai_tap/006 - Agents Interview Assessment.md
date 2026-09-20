# 006 - Agents Interview Assessment

## 1. Mục tiêu

Đánh giá khả năng giải thích các khái niệm của module theo ngữ cảnh phỏng vấn kỹ thuật và tình huống thực tế.

## 2. Phạm vi

Assessment tập trung vào:

- ReAct prompt format;
- stop sequences;
- output parsing với regular expression;
- manual tool calling;
- agent loop không dùng native function calling.

## 3. Câu hỏi phỏng vấn

**Câu 1.** Anh/chị sẽ giải thích ReAct prompt format như thế nào cho một stakeholder không có nền tảng kỹ thuật?

**Câu 2.** Những trade-off nào cần xem xét khi lựa chọn cách sử dụng stop sequences trong một agent sinh output dạng văn bản?

**Câu 3.** Hãy mô tả một tình huống thực tế trong đó parsing bằng regular expression là lựa chọn phù hợp để xử lý output của LLM.

## 4. Câu hỏi mở rộng

**Câu 4.** Vì sao LLM không nên tự sinh `Observation` trong manual tool calling?

**Câu 5.** `tool_names` và `tool_descriptions` giải quyết hai vấn đề khác nhau như thế nào?

**Câu 6.** Scratchpad ảnh hưởng thế nào đến vòng lặp thứ hai trở đi của agent?

**Câu 7.** Hãy mô tả control flow khi parser nhận được `Action` và khi parser nhận được `Final Answer`.

## 5. Bài thực hành ngắn

Vẽ kiến trúc cho agent gồm:

```text
User
ReAct Prompt
LLM
Parser
Tool Dictionary
Tool Executor
Observation
Scratchpad
Final Answer
```

Sử dụng mũi tên để thể hiện đúng chiều dữ liệu và vòng lặp.

## 6. Tiêu chí chấm

| Tiêu chí | Yêu cầu |
|---|---|
| Chính xác khái niệm | Phân biệt đúng prompt, parser, tool executor và scratchpad |
| Giải thích trade-off | Nêu được lợi ích và giới hạn, không chỉ định nghĩa |
| Tình huống thực tế | Ví dụ phù hợp với output dạng văn bản có cấu trúc |
| Control flow | Mô tả đúng nhánh Action và Final Answer |
| Giao tiếp kỹ thuật | Trình bày ngắn gọn, rõ ràng và có logic |

Không kèm đáp án mẫu để giữ đúng mục đích assessment.
