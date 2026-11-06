# Thực hành — Các mẫu thiết kế Agentic

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
So sánh chi phí và chất lượng của hai phương án: một agent trả lời ngay và hai agent viết–đánh giá; đo độ trễ và tính nhất quán trên 5 prompt.

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
Xây 5 yêu cầu đánh giá cố định có tiêu chí rõ ràng.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Chạy một agent độc lập và thu kết quả.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Chạy pipeline hai agent writer → evaluator và thu feedback.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Lập bảng latency, số lượt gọi, chất lượng theo rubric 1–5.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Kết luận khi nào multi-agent đem lại lợi ích thực thay vì chỉ tăng độ phức tạp.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
import asyncio
from agents import Agent, Runner

researcher = Agent(name="Researcher", instructions="Đưa ra 3 ý chính ngắn, không bịa nguồn.")
critic = Agent(name="Critic", instructions="Chỉ ra điểm thiếu bằng chứng trong bản nháp.")

async def main():
    draft = await Runner.run(researcher, "Các rủi ro của chatbot có tool")
    feedback = await Runner.run(critic, str(draft.final_output))
    print("DRAFT:", draft.final_output)
    print("FEEDBACK:", feedback.final_output)

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
Handoff phù hợp nhất cho trường hợp nào?

A. Lệnh SQL tất định  
B. Phân tuyến đến chuyên gia theo yêu cầu  
C. Nhân hai số  
D. Tính tổng list  

**Đáp án:** B
**Giải thích:** Handoff thích hợp chuyển quyền theo loại nhiệm vụ.

### 10.2. Câu 2
`asyncio.gather` hữu ích khi?

A. Có dependency chặt  
B. Mỗi bước phải chờ nhau  
C. Các tác vụ độc lập có thể song song  
D. Cần tuần tự 100%  

**Đáp án:** C
**Giải thích:** Chạy song song chỉ hữu ích khi tác vụ độc lập.

### 10.3. Câu 3
Evaluator–optimizer cần điều kiện gì?

A. Không có giới hạn  
B. Luôn 10 agent  
C. Không cần rubric  
D. Điều kiện dừng và tiêu chí đánh giá  

**Đáp án:** D
**Giải thích:** Loop phải có giới hạn, tiêu chí và budget.

### 10.4. Câu 4
Manager dùng specialist dưới dạng gì?

A. Agent.as_tool  
B. Handoff bắt buộc  
C. README  
D. Session ID  

**Đáp án:** A
**Giải thích:** Agents-as-tools giúp manager giữ quyền điều phối.

### 10.5. Câu 5
Pattern nào nên chọn cho tác vụ cực đơn giản?

A. Luôn multi-agent  
B. Python function hoặc một agent nếu đủ  
C. 5 agent song song  
D. Không xác định  

**Đáp án:** B
**Giải thích:** Tránh overhead khi tác vụ có thể giải bằng mã tất định.

## 11. Tổng kết
Lựa chọn routing, sequential pipeline, agents-as-tools, parallel, evaluator–optimizer và lặp có điều kiện. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
