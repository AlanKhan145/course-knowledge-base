# 005 - Bài tập Agent Loop

## 1. Mục tiêu

Ghép các thành phần của module thành một agent loop hoàn chỉnh ở mức thiết kế hoặc pseudocode.

## 2. Đề bài

Xây dựng luồng agent xử lý câu hỏi:

```text
Giá laptop sau khi áp dụng mức giảm giá Gold là bao nhiêu?
```

Agent có:

```text
get_product_price
apply_discount
```

và sử dụng ReAct prompt thay vì native function calling.

## 3. Nhiệm vụ

Thiết kế vòng lặp có khả năng:

1. dựng prompt từ tool descriptions, tool names, question và scratchpad;
2. gọi LLM;
3. phân tích raw output;
4. nếu có `Action`, tra cứu tool và thực thi;
5. tạo `Observation` từ kết quả thật;
6. cập nhật scratchpad;
7. lặp lại;
8. nếu có `Final Answer`, kết thúc.

## 4. Pseudocode cần hoàn thiện

```text
scratchpad = ...

while ...:
    prompt = ...

    output = call_llm(...)

    parsed = parse(...)

    if ...:
        return ...

    tool = ...
    result = ...
    observation = ...

    scratchpad ...
```

Không cần dùng đúng cú pháp trên; mục tiêu là thể hiện đúng control flow.

## 5. Yêu cầu hoàn thành

- [ ] Có vòng lặp rõ ràng.
- [ ] Có hai nhánh `Action` và `Final Answer`.
- [ ] Tool được tra cứu từ tên action.
- [ ] Observation đến từ kết quả tool.
- [ ] Scratchpad được cập nhật trước vòng lặp kế tiếp.
- [ ] LLM không trực tiếp thực thi callable.
- [ ] Có điểm kết thúc của loop.

## 6. Kiểm chứng

Vẽ trace tối thiểu gồm hai lần gọi tool:

```text
Iteration 1 → lấy giá sản phẩm
Iteration 2 → áp dụng giảm giá
Iteration 3 → Final Answer
```

Mỗi iteration cần ghi:

- output của LLM ở mức action;
- tool được thực thi;
- observation;
- trạng thái scratchpad sau cập nhật.

## 7. Definition of Done

Bài hoàn thành khi một người khác có thể dựa vào pseudocode của bạn để triển khai agent loop mà không nhầm trách nhiệm giữa LLM, parser và tool executor.
