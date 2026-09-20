# 001 - Bài tập ReAct và Function Calling

## 1. Mục tiêu

Bài tập giúp người học kiểm tra khả năng:

- nhận diện các thành phần của ReAct prompt;
- phân biệt vai trò của LLM và chương trình điều khiển;
- giải thích vai trò của scratchpad;
- thiết kế luồng gọi công cụ ở mức khái niệm.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm:

- `Question`;
- `Thought`;
- `Action`;
- `Action Input`;
- `Observation`;
- `Final Answer`;
- tool descriptions;
- tool names;
- `agent_scratchpad`.

## 3. Đề bài

Một agent có hai công cụ:

```text
get_product_price
apply_discount
```

Người dùng hỏi:

```text
Giá laptop sau khi áp dụng mức giảm giá Gold là bao nhiêu?
```

Hãy thiết kế luồng ReAct mà hệ thống cần hỗ trợ để giải quyết yêu cầu này.

## 4. Nhiệm vụ

1. Liệt kê những thông tin về hai công cụ mà LLM cần được cung cấp.
2. Viết khung định dạng ReAct mà agent phải tuân theo.
3. Mô tả bước nào do LLM thực hiện và bước nào do chương trình thực hiện.
4. Giải thích dữ liệu nào cần được lưu vào scratchpad sau một lần gọi tool.
5. Vẽ sơ đồ luồng từ câu hỏi đến `Final Answer`.

## 5. Yêu cầu hoàn thành

- [ ] Có phân biệt `tool_names` và `tool_descriptions`.
- [ ] Có đầy đủ các thành phần chính của ReAct.
- [ ] Không mô tả LLM là thành phần trực tiếp chạy hàm Python.
- [ ] Có observation đến từ kết quả tool thật.
- [ ] Có scratchpad được cập nhật qua vòng lặp.

## 6. Tiêu chí tự đánh giá

Bài làm đạt yêu cầu khi người đọc có thể nhìn vào sơ đồ và xác định rõ:

- ai đưa ra quyết định;
- ai thực thi tool;
- observation xuất hiện ở đâu;
- khi nào vòng lặp tiếp tục;
- khi nào agent kết thúc.
