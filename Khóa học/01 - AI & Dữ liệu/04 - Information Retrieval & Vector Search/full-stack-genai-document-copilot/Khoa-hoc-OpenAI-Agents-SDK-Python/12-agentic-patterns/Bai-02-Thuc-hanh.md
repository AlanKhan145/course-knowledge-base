# Bài 02 — Thực hành có hướng dẫn: Agentic Patterns và điều phối đa Agent

> **Module 12 · Lab** · Video: [xem từ 01:34:20](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=5660s).

**Tổng quan:** So sánh deterministic flow, router/handoff, agent-as-tool và evaluator–optimizer có giới hạn vòng lặp.

## 1. Đề bài

Tạo một luồng soạn đoạn giới thiệu kỹ thuật: Generator tạo nội dung, Evaluator xác định có đủ ba ý bắt buộc không, Generator sửa lại tối đa hai lần.

## 2. Mã nguồn

```python
from pydantic import BaseModel
from agents import Agent, Runner

class Evaluation(BaseModel):
    passed: bool
    feedback: str

generator = Agent(name="Generator", instructions="Viết đoạn giới thiệu ngắn về chủ đề")
evaluator = Agent(
    name="Evaluator",
    instructions="Chấm xem đoạn có định nghĩa, ví dụ và giới hạn. Nếu thiếu, ghi feedback.",
    output_type=Evaluation,
)

prompt = "Viết về Tool Calling trong AI Agents"
text = ""
for attempt in range(3):
    draft = Runner.run_sync(generator, prompt)
    text = draft.final_output
    review = Runner.run_sync(evaluator, text).final_output
    print("Lượt", attempt + 1, "đạt:", review.passed)
    if review.passed:
        break
    prompt = f"Viết lại đoạn sau, khắc phục nhận xét: {review.feedback}\nBản nháp: {text}"
print(text)
```

## 3. Thử nghiệm

Thay rubric thành “phải có một ví dụ Python” và quan sát tác động. Đổi giới hạn từ ba lượt xuống hai lượt, so sánh chi phí chạy và chất lượng cảm nhận. Không mặc định `passed=True` có nghĩa nội dung đúng sự thật: evaluator cũng là model có thể sai.

## 4. Checkpoint

Chương trình luôn kết thúc sau tối đa ba lần tạo draft; khi evaluator không đạt, feedback được đưa vào lượt tạo tiếp theo. Có thể log reason khi hết số vòng, không im lặng coi output chưa đạt là đã qua kiểm định.

## 5. Debug

Nếu evaluator luôn báo đạt, kiểm tra instructions và rubric quá mềm. Nếu output càng sửa càng dài, đặt giới hạn số từ trong yêu cầu. Nếu agent tự bịa dữ kiện, cần nguồn tham chiếu và bước kiểm chứng, không chỉ đổi evaluator.

## 6. Deliverable

Một file Python, sơ đồ pattern bằng Mermaid và bảng so sánh ba mẫu: sequential, handoff và agent-as-tool cho bài toán dịch hai ngôn ngữ.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Pattern nào cho phép lập trình viên kiểm soát chính xác thứ tự agent?

A. Handoff tự động  
B. Một WebSearchTool duy nhất  
C. Deterministic sequential flow  
D. Guardrail  

**Đáp án:** C. **Giải thích:** Code Python gọi tuần tự từng agent.

### Câu 2

`Agent.as_tool()` khác handoff thế nào?

A. Luôn chuyển quyền vĩnh viễn  
B. Xóa lịch sử  
C. Không dùng được với model  
D. Agent quản lý nhận kết quả rồi tiếp tục điều phối  

**Đáp án:** D. **Giải thích:** Tool trả kết quả con cho agent chủ.

### Câu 3

Evaluator–optimizer cần điều kiện gì quan trọng?

A. Giới hạn số vòng và tiêu chí đạt rõ ràng  
B. Luôn lặp vô hạn  
C. Chỉ dùng một agent  
D. Không cần feedback  

**Đáp án:** A. **Giải thích:** Cần ràng buộc chi phí và tránh loop vô hạn.

### Câu 4

Một evaluator LLM trả `passed=True` bảo đảm điều gì?

A. Mọi dữ kiện chắc chắn đúng  
B. Chỉ là đánh giá của mô hình, vẫn cần kiểm chứng nếu quan trọng  
C. Không có hallucination  
D. Không tốn token  

**Đáp án:** B. **Giải thích:** Evaluator có thể sai như generator.

### Câu 5

Nên dùng handoff khi nào?

A. Manager luôn cần tổng hợp  
B. Bước phải cố định 100%  
C. Chuyên gia cần tiếp quản giải quyết yêu cầu  
D. Không có agent khác  

**Đáp án:** C. **Giải thích:** Handoff chuyển vai trò xử lý.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/multi_agent/) · [2](https://openai.github.io/openai-agents-python/handoffs/)
