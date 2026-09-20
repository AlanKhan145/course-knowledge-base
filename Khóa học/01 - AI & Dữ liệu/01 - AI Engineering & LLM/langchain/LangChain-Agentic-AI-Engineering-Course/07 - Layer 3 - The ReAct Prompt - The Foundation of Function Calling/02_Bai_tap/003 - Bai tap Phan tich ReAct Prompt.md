# 003 - Bài tập Phân tích ReAct Prompt

## 1. Mục tiêu

Củng cố khả năng phân tích ranh giới giữa prompt, LLM, parser và tool executor trong một agent không dùng native function calling.

## 2. Đề bài

Một LLM trả về:

```text
Thought: Tôi cần lấy giá sản phẩm trước.
Action: get_product_price
Action Input: laptop
Observation: Giá laptop là 1000.
Final Answer: Sau giảm giá, giá là 900.
```

Trong hệ thống manual ReAct, output trên có vấn đề vì LLM đã tự sinh cả `Observation` và `Final Answer` trước khi chương trình thực thi tool.

## 3. Nhiệm vụ

1. Xác định ranh giới mà generation nên dừng.
2. Giải thích vì sao `Observation` không nên do LLM tự tạo.
3. Mô tả vai trò của stop sequence.
4. Mô tả parser cần lấy những trường nào trước khi gọi tool.
5. Viết lại luồng xử lý đúng ở mức sơ đồ hoặc pseudocode.

## 4. Yêu cầu hoàn thành

- [ ] Có chỉ ra `Observation` phải đến từ tool thật.
- [ ] Có mô tả điểm dừng trước observation.
- [ ] Có phân biệt raw text với structured decision.
- [ ] Có parser nằm giữa LLM và tool executor.
- [ ] Có nhánh riêng cho `Final Answer`.

## 5. Tiêu chí hoàn thành

Bài làm phải thể hiện rõ ba trách nhiệm:

```text
LLM        → quyết định
Parser     → diễn giải quyết định
Program    → thực thi
```

Không cần viết regex cụ thể nếu chưa có format parser hoàn chỉnh.
