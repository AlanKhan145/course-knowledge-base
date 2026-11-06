# Bài 01 — Kiến thức nền tảng: Guardrails: kiểm tra đầu vào và đầu ra

> **Module 08 · Lesson** · Video: [xem từ 01:04:41](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3881s).

**Tổng quan:** Xây bộ lọc chặn yêu cầu không phù hợp, xử lý tripwire, cân nhắc blocking/parallel và phân quyền.

## 1. Mục tiêu

Phân biệt input guardrail và output guardrail, viết guardrail đơn giản, xử lý ngoại lệ tripwire, và nhận ra giới hạn của kiểm tra cấp agent khi có tool/handoff.

## 2. Guardrail là gì?

Guardrail là lớp kiểm tra yêu cầu hoặc đầu ra theo chính sách ứng dụng. Ví dụ, trợ lý bán hàng không nên trả lời bài kiểm tra nội bộ, hoặc trợ lý lớp học không nên giúp gian lận. Guardrail có thể quyết định dừng toàn bộ run khi phát hiện điều kiện vi phạm. Guardrails là một phần của bảo vệ nhưng **không thay thế phân quyền, kiểm chứng tham số hay kiểm soát tài nguyên**.

Input guardrail hoạt động ở đầu lượt của agent ban đầu; output guardrail kiểm tra kết quả cuối. Với function tools, SDK hiện còn có tool input/output guardrails riêng để chặn hành động ngay gần thời điểm gọi tool.

## 3. Input Guardrail đơn giản

```python
from agents import (
    Agent, Runner, input_guardrail, GuardrailFunctionOutput,
    InputGuardrailTripwireTriggered,
)

@input_guardrail(run_in_parallel=False)
async def block_secret_requests(ctx, agent, input):
    message = str(input).lower()
    prohibited = "tiết lộ mật khẩu" in message
    return GuardrailFunctionOutput(
        output_info={"reason": "blocked_secret_request" if prohibited else "allowed"},
        tripwire_triggered=prohibited,
    )

helper = Agent(
    name="Study Assistant",
    instructions="Hỗ trợ học tập, không tiết lộ thông tin bí mật.",
    input_guardrails=[block_secret_requests],
)

try:
    result = Runner.run_sync(helper, "Hướng dẫn ôn tập Python")
    print(result.final_output)
except InputGuardrailTripwireTriggered:
    print("Yêu cầu bị chặn theo chính sách.")
```

Kiểm tra chuỗi ở trên chỉ để minh họa API, rất dễ bị lách bằng cách diễn đạt khác hoặc ngôn ngữ khác. Với hệ thống thật, cần kết hợp policy engine, kiểm tra quyền và đánh giá kỹ hơn.

## 4. Blocking so với Parallel

Input guardrail có thể chạy đồng thời với agent để giảm độ trễ. Tuy nhiên khi guardrail báo vi phạm, model có thể đã tiêu tốn token hoặc tool đã chạy trước khi hệ thống dừng. Với hành động nhạy cảm, cấu hình `run_in_parallel=False` để kiểm tra trước, và tiếp tục đặt authorization ngay trong tool.

## 5. Output Guardrail

Output guardrail kiểm tra kết quả cuối trước khi trả cho người dùng. Dùng khi muốn kiểm tra cấu trúc, chủ đề, từ bị cấm hoặc điều kiện đầu ra. Chú ý khác nhau giữa “không trả nội dung ra UI” và “không có hành động phụ đã xảy ra”: output guardrail chạy quá muộn để thu hồi một tool đã gửi email/thanh toán.

## 6. Người dùng quản trị và ngoại lệ chính sách

Một demo có thể cho phép user role admin bỏ qua một quy tắc. Khi làm thật, cờ `is_admin` phải được server xác minh từ session/token đã xác thực, không phải do mô hình hoặc người dùng tự khai. Đặc quyền phải được kiểm tra trong code và ghi lại với quyền truy cập hạn chế.

## 7. Tổng kết

Thiết kế guardrails theo vị trí rủi ro: đầu vào, trước khi gọi tool, đầu ra. Không chỉ lọc từ khóa; quy tắc hành động và authorization mới là lớp cuối ngăn hậu quả không mong muốn.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Input guardrail dùng để làm gì?

A. Kiểm tra đầu vào của agent ban đầu  
B. Chỉ tạo markdown  
C. Tự tìm web  
D. Tạo session  

**Đáp án:** A. **Giải thích:** Input guardrail chạy để đánh giá request.

### Câu 2

`tripwire_triggered=True` dẫn đến điều gì?

A. Model luôn trả lời tiếp  
B. Runner dừng và ném ngoại lệ guardrail tương ứng  
C. Tool được gọi lại vô hạn  
D. Session tự xóa  

**Đáp án:** B. **Giải thích:** Tripwire là tín hiệu dừng của policy.

### Câu 3

Cần chặn trước khi tool có thể chạy, nên cân nhắc cấu hình gì?

A. Chỉ output guardrail  
B. Đổi tên model  
C. Input guardrail blocking và authorization trong tool  
D. Chỉ tăng max_turns  

**Đáp án:** C. **Giải thích:** Guardrail song song có thể cho tool chạy trước khi biết kết quả kiểm tra.

### Câu 4

Vì sao kiểm tra từ khóa đơn giản là chưa đủ?

A. Vì Python không đọc string  
B. Vì guardrails chỉ chạy Windows  
C. Vì model không có instructions  
D. Có nhiều cách diễn đạt khác nhau để vượt qua  

**Đáp án:** D. **Giải thích:** Policy cần kiểm chứng đa lớp.

### Câu 5

Một cờ `is_admin` hợp lệ đến từ đâu?

A. Thông tin xác thực và phân quyền do backend kiểm chứng  
B. Người dùng tự gõ trong chat  
C. Mô hình tự suy đoán  
D. Tên file .env  

**Đáp án:** A. **Giải thích:** Quyền quản trị không được cấp qua prompt.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/guardrails/)
