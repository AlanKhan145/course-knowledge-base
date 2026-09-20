# 004 - Model Switch - Practice

## 1. Mục tiêu

Bài tập giúp kiểm tra tính portable của vòng lặp ReAct và phân biệt giữa “đổi model thành công về mặt kỹ thuật” với “model mới phù hợp về mặt hành vi”.

## 2. Kiến thức cần dùng

- `init_chat_model()`;
- integration package của provider;
- tool calling;
- LangSmith trace;
- đánh giá theo cùng một use case.

## 3. Đề bài

Chạy cùng một shopping agent với ít nhất hai cấu hình model mà môi trường của bạn hỗ trợ. Nếu có cả Ollama và OpenAI, có thể dùng hai provider này; nếu không, dùng hai model khác nhau trong provider sẵn có.

Không sửa tool, system prompt hoặc logic ReAct giữa các lần chạy.

## 4. Nhiệm vụ

### 4.1. Giữ nguyên test case

Dùng cùng input:

```text
Giá của một chiếc laptop sau khi áp dụng ưu đãi vàng là bao nhiêu?
```

### 4.2. Chạy model A

Ghi lại:

- tool đầu tiên được chọn;
- tool thứ hai nếu có;
- số vòng lặp;
- final answer;
- latency;
- token usage nếu trace cung cấp;
- cost nếu provider/trace cung cấp.

### 4.3. Chạy model B

Lặp lại đúng quy trình với model B mà không thay đổi test case hoặc orchestration logic.

### 4.4. So sánh hành vi

Điền bảng:

| Tiêu chí | Model A | Model B |
|---|---|---|
| Chọn đúng tool tra cứu giá |  |  |
| Dùng đúng giá từ observation |  |  |
| Gọi tool giảm giá |  |  |
| Không đoán dữ liệu |  |  |
| Dừng đúng lúc |  |  |
| Số iteration |  |  |
| Latency |  |  |
| Token usage |  |  |
| Cost |  |  |

Không kết luận model tốt hơn chỉ dựa trên việc model mới hơn hoặc có tên phiên bản cao hơn.

## 5. Yêu cầu hoàn thành

- [ ] Hai lần chạy dùng cùng toolset.
- [ ] Hai lần chạy dùng cùng system prompt.
- [ ] Hai lần chạy dùng cùng input.
- [ ] Không sửa vòng lặp để “ưu ái” một model.
- [ ] Có trace hoặc log cho cả hai lần chạy.
- [ ] So sánh cả correctness lẫn chỉ số vận hành nếu dữ liệu có sẵn.
- [ ] Kết luận chỉ dựa trên use case đã kiểm tra.

## 6. Câu hỏi tự kiểm tra

1. Điều gì trong code được giữ nguyên nhờ abstraction của LangChain?
2. Khi đổi provider, dependency nào vẫn phải thay đổi hoặc bổ sung?
3. Vì sao một model chạy được `bind_tools()` vẫn có thể không phù hợp cho agent?
4. Nếu model B có latency thấp hơn nhưng chọn sai tool, chỉ số latency có đủ để chọn model B không? Giải thích bằng tiêu chí của use case.
