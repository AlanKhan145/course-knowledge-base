# Guardrails kiểm tra input, output và tool

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 01:04:41

## 1. Tóm tắt
Thiết kế kiểm tra đầu vào/đầu ra và phản ứng khi tripwire kích hoạt; tách chính sách an toàn khỏi nội dung mô hình.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Guardrails kiểm tra input, output và tool** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Các tầng bảo vệ
Input guardrail phân tích yêu cầu ngay đầu luồng: có nằm ngoài phạm vi dịch vụ, chứa dữ liệu không phù hợp hay cố yêu cầu vượt quyền? Output guardrail kiểm tra phản hồi cuối: định dạng, bí mật, thông tin bắt buộc. Tool guardrails ở một số phiên bản SDK bao quanh lời gọi function tool để chặn đối số không hợp lệ.

Trong ví dụ giáo dục, một agent gia sư có thể phát hiện yêu cầu giải hộ bài làm được đánh giá; thay vì trả ngay lời giải, nó hướng dẫn phương pháp học. Đây là chính sách ứng dụng minh họa, không phải khẳng định mọi lời hỏi bài tập đều bị cấm.

### 4.2. Tripwire và xử lý ứng dụng
Một guardrail trả `GuardrailFunctionOutput(output_info=..., tripwire_triggered=...)`. Khi tripwire true, Runner có thể ném `InputGuardrailTripwireTriggered` hoặc `OutputGuardrailTripwireTriggered`. Ứng dụng bắt ngoại lệ, phản hồi rõ ràng và ghi audit theo chính sách.

Guardrail dùng LLM cho đánh giá có thể sai; các quy tắc tất định (quyền, giới hạn số tiền, data validation) nên triển khai ở backend. Guardrails không thay thế authorization ở công cụ.

### 4.3. Thứ tự thực thi và side effect
Input guardrail có thể chạy song song với agent; khi cần **ngăn mọi side effect**, hãy cấu hình chế độ blocking phù hợp (`run_in_parallel=False`) và đặt kiểm tra quyền ngay trong tool. Output guardrail chỉ chạy khi đã có kết quả cuối; nó không thu hồi được thao tác ghi đã xảy ra trước đó.

Đối với hệ thống ghi dữ liệu, ưu tiên kiểm tra tại ranh giới hành động: schema, user_id, resource ownership, giới hạn giao dịch và xác nhận khi cần.

## 5. Ví dụ Python
```python
import asyncio
from agents import Agent, Runner, GuardrailFunctionOutput, InputGuardrailTripwireTriggered
from agents import RunContextWrapper, TResponseInputItem, input_guardrail

@input_guardrail(run_in_parallel=False)
async def block_private_keys(ctx: RunContextWrapper[None], agent: Agent,
                             input: str | list[TResponseInputItem]) -> GuardrailFunctionOutput:
    text = str(input).lower()
    blocked = "hiển thị api key" in text or "show api key" in text
    return GuardrailFunctionOutput(output_info={"blocked": blocked}, tripwire_triggered=blocked)

assistant = Agent(name="Support", instructions="Hỗ trợ người dùng trong phạm vi cho phép.",
                  input_guardrails=[block_private_keys])

async def main():
    try:
        result = await Runner.run(assistant, "Xin chào, giới thiệu chức năng")
        print(result.final_output)
    except InputGuardrailTripwireTriggered:
        print("Yêu cầu bị chặn bởi chính sách ứng dụng.")

asyncio.run(main())
```

## 6. Phân tích ví dụ
Đây là bộ kiểm tra từ khóa cực đơn giản để học cơ chế; không phù hợp production vì dễ bỏ sót diễn đạt khác. `run_in_parallel=False` ưu tiên chặn đầu vào trước khi main agent chạy.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Chỉ dùng kiểm tra từ khóa cho những rủi ro phức tạp. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Đặt guardrail output rồi mặc định tool trước đó chưa xảy ra. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Không kiểm tra quyền người dùng trong implementation của tool. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Xây dựng input guardrail hạn chế yêu cầu truy xuất bí mật và output guardrail kiểm tra một trường bắt buộc; kiểm thử trường hợp hợp lệ/bị chặn.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Input guardrail chủ yếu kiểm tra gì?

A. Phản hồi cuối  
B. Yêu cầu đầu vào  
C. DB migration  
D. CSS  

**Đáp án:** B
**Giải thích:** Input guardrail hoạt động trên yêu cầu bắt đầu run.

### 9.2. Câu 2
Tripwire true có thể dẫn tới?

A. Tự gửi email  
B. Tự xóa tool  
C. Ngoại lệ dừng run  
D. Tăng hạn mức  

**Đáp án:** C
**Giải thích:** Runner phát tín hiệu thông qua ngoại lệ guardrail.

### 9.3. Câu 3
Vì sao output guardrail không đủ để bảo vệ tool ghi?

A. Vì nó luôn chạy trước  
B. Vì không hỗ trợ text  
C. Vì không có schema  
D. Vì công cụ có thể chạy trước khi kiểm tra output cuối  

**Đáp án:** D
**Giải thích:** Phải kiểm tra quyền ngay trước thao tác ghi.

### 9.4. Câu 4
Điểm yếu của guardrail dựa vào keyword?

A. Dễ bỏ sót biến thể diễn đạt  
B. Không thể chạy Python  
C. Luôn quá chậm  
D. Không thể unit test  

**Đáp án:** A
**Giải thích:** Kiểm tra từ khóa không bao phủ đầy đủ ngữ nghĩa.

### 9.5. Câu 5
Ai chịu trách nhiệm xác thực quyền truy cập database?

A. Instructions  
B. Backend/tool implementation  
C. Markdown  
D. Tracing dashboard  

**Đáp án:** B
**Giải thích:** Phân quyền là thuộc về ứng dụng và cơ sở dữ liệu.

## 10. Tổng kết
Thiết kế kiểm tra đầu vào/đầu ra và phản ứng khi tripwire kích hoạt; tách chính sách an toàn khỏi nội dung mô hình. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
