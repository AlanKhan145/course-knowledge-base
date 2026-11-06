# Các mẫu thiết kế Agentic

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 01:34:20

## 1. Tóm tắt
Lựa chọn routing, sequential pipeline, agents-as-tools, parallel, evaluator–optimizer và lặp có điều kiện.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Các mẫu thiết kế Agentic** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Các mô hình điều phối
**Sequential**: output của A thành input của B, thứ tự cố định. **Routing / handoff**: agent nhận đầu vào chọn chuyên gia. **Manager / agents as tools**: một agent trung tâm giữ quyền trả lời cuối nhưng gọi agent phụ như công cụ. **Parallel**: nhiều tác vụ độc lập được chạy đồng thời bằng `asyncio.gather`, sau đó tổng hợp kết quả.

Mẫu nào tốt phụ thuộc vào ràng buộc: quyền tool, yêu cầu có thể song song, trách nhiệm giải thích kết quả và ngân sách token.

### 4.2. Evaluator–optimizer và điều kiện lặp
Một agent sinh bản nháp, agent đánh giá theo tiêu chí cụ thể và trả feedback; vòng lặp dừng khi đạt chuẩn hoặc đến giới hạn. Điều kiện dừng phải được viết trong code để tránh lặp vô hạn: `max_iterations`, budget, timeout.

Evaluator bản thân cũng là mô hình nên có thể nhầm; bổ sung test tất định nếu đánh giá kết quả có thể kiểm máy (ví dụ cấu trúc JSON, danh sách tài liệu có URL).

### 4.3. Quy tắc lựa chọn
Nếu tác vụ ngắn và tất định, dùng Python functions. Nếu phải chọn trong nhiều chuyên môn, dùng routing/handoff. Nếu có bước subtask trả kết quả ngắn và manager cần giữ luồng, cân nhắc `Agent.as_tool`. Nếu các truy vấn độc lập, chạy song song giới hạn concurrency. Nếu chất lượng khó kiểm chỉ qua một lần sinh, dùng evaluator–optimizer.

Đừng biến các pattern thành workflow cứng buộc mọi câu hỏi đi qua đủ bước: cho phép nhánh trả lời trực tiếp và công cụ được gọi theo nhu cầu.

## 5. Ví dụ Python
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

## 6. Phân tích ví dụ
Đây là sequential two-stage review. Bổ sung vòng lặp tối đa số lần nếu muốn evaluator–optimizer; không để agent đánh giá tự khẳng định tất cả dữ kiện đã được kiểm chứng.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Lặp evaluator vô hạn vì tiêu chí không đo được. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Chạy song song các bước phụ thuộc nhau. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Tạo nhiều agent chuyên môn làm tăng độ trễ mà không có cải thiện thực nghiệm. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
So sánh chi phí và chất lượng của hai phương án: một agent trả lời ngay và hai agent viết–đánh giá; đo độ trễ và tính nhất quán trên 5 prompt.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Handoff phù hợp nhất cho trường hợp nào?

A. Lệnh SQL tất định  
B. Phân tuyến đến chuyên gia theo yêu cầu  
C. Nhân hai số  
D. Tính tổng list  

**Đáp án:** B
**Giải thích:** Handoff thích hợp chuyển quyền theo loại nhiệm vụ.

### 9.2. Câu 2
`asyncio.gather` hữu ích khi?

A. Có dependency chặt  
B. Mỗi bước phải chờ nhau  
C. Các tác vụ độc lập có thể song song  
D. Cần tuần tự 100%  

**Đáp án:** C
**Giải thích:** Chạy song song chỉ hữu ích khi tác vụ độc lập.

### 9.3. Câu 3
Evaluator–optimizer cần điều kiện gì?

A. Không có giới hạn  
B. Luôn 10 agent  
C. Không cần rubric  
D. Điều kiện dừng và tiêu chí đánh giá  

**Đáp án:** D
**Giải thích:** Loop phải có giới hạn, tiêu chí và budget.

### 9.4. Câu 4
Manager dùng specialist dưới dạng gì?

A. Agent.as_tool  
B. Handoff bắt buộc  
C. README  
D. Session ID  

**Đáp án:** A
**Giải thích:** Agents-as-tools giúp manager giữ quyền điều phối.

### 9.5. Câu 5
Pattern nào nên chọn cho tác vụ cực đơn giản?

A. Luôn multi-agent  
B. Python function hoặc một agent nếu đủ  
C. 5 agent song song  
D. Không xác định  

**Đáp án:** B
**Giải thích:** Tránh overhead khi tác vụ có thể giải bằng mã tất định.

## 10. Tổng kết
Lựa chọn routing, sequential pipeline, agents-as-tools, parallel, evaluator–optimizer và lặp có điều kiện. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
