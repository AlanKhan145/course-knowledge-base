# Thực hành — Guardrails kiểm tra input, output và tool

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Xây dựng input guardrail hạn chế yêu cầu truy xuất bí mật và output guardrail kiểm tra một trường bắt buộc; kiểm thử trường hợp hợp lệ/bị chặn.

## 2. Mục tiêu
- Tự triển khai được ví dụ trong một dự án Python độc lập.
- Quan sát được kết quả thực tế của Agent/Runner hoặc tool.
- Tìm và giải thích được ít nhất một tình huống lỗi.
- Hoàn thiện checklist và câu hỏi ôn tập.

## 3. Chuẩn bị
- Python và virtual environment đang kích hoạt.
- `pip install openai-agents python-dotenv`.
- Biến `OPENAI_API_KEY` được cấu hình an toàn; không đưa key vào code hay bản nộp.
- Trình soạn thảo VS Code, PyCharm hoặc Jupyter.
- Đọc mục tiêu và kiến thức cốt lõi trước khi bắt đầu.

## 4. Quy trình thực hiện

### 4.1. Bước 1
Tạo yêu cầu hợp lệ và yêu cầu không phù hợp chính sách mẫu.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Cài đặt input guardrail có `GuardrailFunctionOutput` và bắt tripwire.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Đo số lần tool thực thi khi bị chặn; đặt chế độ blocking trong tình huống ghi dữ liệu.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Thiết kế bảng test false positive, false negative và đề xuất cải tiến.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Ghi chú rõ guardrail không thay thế authz và xác thực dữ liệu backend.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
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
Đoạn mã là điểm khởi đầu, không phải toàn bộ lời giải cho mọi bước thực hành. Hãy bổ sung phần kiểm thử và xử lý tình huống theo yêu cầu. **Không chạy tool có side effect trên dữ liệu thật trong bài lab.**

## 6. Kiểm thử và đối chiếu kết quả
| Ca kiểm thử | Đầu vào | Kỳ vọng | Kết quả quan sát |
| --- | --- | --- | --- |
| Bình thường | Một yêu cầu đúng phạm vi | Có kết quả hợp lệ | Tự điền |
| Thiếu dữ liệu | Một tham số vắng/sai | Giải thích thiếu dữ liệu | Tự điền |
| Trường hợp biên | Yêu cầu mơ hồ/khó | Không bịa hoặc vượt quyền | Tự điền |

## 7. Debug và khắc phục
- **`ModuleNotFoundError`:** xác nhận `python -m pip show openai-agents` trong đúng môi trường.
- **Authentication/permission:** xác nhận key và quyền model, không in key.
- **Kết quả model thiếu ổn định:** thử nhiều câu đầu vào, thắt chặt schema/tiêu chí, quan sát trace.
- **Tool hoặc stream bị lỗi:** ghi exception, không báo đã hoàn thành hành động ngoài hệ thống nếu chưa có xác nhận.
- **Nhầm dữ liệu thực và demo:** ghi rõ dữ liệu nào cố định và dữ liệu nào cần API/DB thật.

## 8. Deliverable
Nộp một file Python hoặc notebook đã chạy được; bảng ba ca kiểm thử; ảnh chụp/log đã che thông tin nhạy cảm; báo cáo ngắn về một lỗi và cách giải quyết.

## 9. Checklist hoàn thành
- [ ] Chạy được code trong môi trường riêng.
- [ ] Không commit API key, file `.env` hoặc dữ liệu nhạy cảm.
- [ ] Có ít nhất ba ca kiểm thử và kết quả quan sát.
- [ ] Đã phân biệt hành vi model với thao tác thực.
- [ ] Giải thích được một lỗi và cách khắc phục.

## 10. Câu hỏi ôn tập trắc nghiệm
### 10.1. Câu 1
Input guardrail chủ yếu kiểm tra gì?

A. Phản hồi cuối  
B. Yêu cầu đầu vào  
C. DB migration  
D. CSS  

**Đáp án:** B
**Giải thích:** Input guardrail hoạt động trên yêu cầu bắt đầu run.

### 10.2. Câu 2
Tripwire true có thể dẫn tới?

A. Tự gửi email  
B. Tự xóa tool  
C. Ngoại lệ dừng run  
D. Tăng hạn mức  

**Đáp án:** C
**Giải thích:** Runner phát tín hiệu thông qua ngoại lệ guardrail.

### 10.3. Câu 3
Vì sao output guardrail không đủ để bảo vệ tool ghi?

A. Vì nó luôn chạy trước  
B. Vì không hỗ trợ text  
C. Vì không có schema  
D. Vì công cụ có thể chạy trước khi kiểm tra output cuối  

**Đáp án:** D
**Giải thích:** Phải kiểm tra quyền ngay trước thao tác ghi.

### 10.4. Câu 4
Điểm yếu của guardrail dựa vào keyword?

A. Dễ bỏ sót biến thể diễn đạt  
B. Không thể chạy Python  
C. Luôn quá chậm  
D. Không thể unit test  

**Đáp án:** A
**Giải thích:** Kiểm tra từ khóa không bao phủ đầy đủ ngữ nghĩa.

### 10.5. Câu 5
Ai chịu trách nhiệm xác thực quyền truy cập database?

A. Instructions  
B. Backend/tool implementation  
C. Markdown  
D. Tracing dashboard  

**Đáp án:** B
**Giải thích:** Phân quyền là thuộc về ứng dụng và cơ sở dữ liệu.

## 11. Tổng kết
Thiết kế kiểm tra đầu vào/đầu ra và phản ứng khi tripwire kích hoạt; tách chính sách an toàn khỏi nội dung mô hình. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
