# Tracing và quan sát vòng đời Agent

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 00:50:32

## 1. Tóm tắt
Theo dõi calls, handoffs và lỗi bằng traces/spans; xây dựng cách debug có hệ thống.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Tracing và quan sát vòng đời Agent** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Trace và span
Trace là bản ghi cho một luồng công việc; span là đơn vị con cho model generation, function tool, handoff hoặc guardrail. Khi agent cho kết quả sai, trace giúp xác định: prompt nào được gửi, tool nào được gọi, đầu vào/đầu ra từng bước và chỗ luồng dừng.

Tracing mặc định có thể bật theo cấu hình SDK, nhưng việc hiển thị phụ thuộc cấu hình tổ chức. Đừng dựa vào trace như kho lưu trữ thay cho logs ứng dụng hay hệ thống phân quyền.

### 4.2. Nhóm nhiều lần chạy trong một workflow
Khi ứng dụng thực hiện nhiều bước độc lập nhưng cùng một tác vụ người dùng, bọc bằng `with trace("..."):` để gom hoạt động có liên quan. Đặt tên phù hợp, ví dụ `Research report` hoặc `Ticket resolution`.

Quan sát các chỉ số: tỷ lệ gọi tool thất bại, độ trễ theo agent, số lần handoff, token/cost ước tính, chất lượng cuối và tỷ lệ bị guardrail chặn.

### 4.3. Bảo mật khi tracing
Prompts và kết quả tool đôi khi chứa thông tin nhạy cảm. Cần kiểm soát việc gửi trace, áp dụng redaction dữ liệu cá nhân, đặt retention, phân quyền xem dashboard và tuân thủ chính sách bảo mật; với môi trường nhạy cảm có thể cần tắt ghi nội dung hoặc tracing theo khả năng SDK và chính sách dịch vụ.

## 5. Ví dụ Python
```python
import asyncio
from agents import Agent, Runner, trace

analyzer = Agent(name="Analyzer", instructions="Tóm tắt ý chính rõ ràng.")
reviewer = Agent(name="Reviewer", instructions="Kiểm tra tính mạch lạc của đoạn tóm tắt.")

async def main():
    with trace("Two-stage review"):
        first = await Runner.run(analyzer, "Tóm tắt lợi ích của unit test")
        second = await Runner.run(reviewer, str(first.final_output))
    print(second.final_output)

asyncio.run(main())
```

## 6. Phân tích ví dụ
`trace(...)` bao trùm hai `Runner.run` để truy vết quy trình; các lời gọi được biểu diễn thành spans. Theo tài khoản và cấu hình, xem dashboard Traces để kiểm tra thực tế.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Chỉ nhìn final answer mà không xem tool inputs khi lỗi. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Ghi log nội dung nhạy cảm và secret không cần thiết. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Đánh đồng trace thành bằng chứng tính đúng của kết quả model. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Ghi nhận trace cho quy trình hỗ trợ khách hàng: triage → chuyên gia → phản hồi; xác định một run đi đúng và một run đi sai nhánh.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Trace khác span ở điểm nào?

A. Trace luôn là tool  
B. Trace chứa nhiều span của workflow  
C. Span là user  
D. Không có khác biệt  

**Đáp án:** B
**Giải thích:** Trace tập hợp hoạt động; spans mô tả bước con.

### 9.2. Câu 2
Dữ liệu nào có thể quan sát để debug?

A. Chỉ kết quả UI  
B. Chỉ CPU  
C. Tool call và handoff  
D. Không có  

**Đáp án:** C
**Giải thích:** Tracing hiển thị bước thực thi quan trọng.

### 9.3. Câu 3
Vì sao cần hạn chế nội dung trong trace?

A. Cho code ngắn  
B. Tăng độ đẹp dashboard  
C. Tránh ngoại lệ  
D. Có thể chứa thông tin nhạy cảm  

**Đáp án:** D
**Giải thích:** Logs có thể làm lộ dữ liệu nếu không kiểm soát.

### 9.4. Câu 4
`with trace(...)` thường dùng để làm gì?

A. Nhóm spans của workflow  
B. Tạo API key  
C. Tạo DB  
D. Đổi model tự động  

**Đáp án:** A
**Giải thích:** Dùng trace scope để nhóm các run liên quan.

### 9.5. Câu 5
Trace chứng minh output đúng tuyệt đối không?

A. Có  
B. Không, cần đánh giá chất lượng riêng  
C. Chỉ với 2 agents  
D. Chỉ khi có streaming  

**Đáp án:** B
**Giải thích:** Trace cho biết quá trình, không tự đánh giá tính đúng.

## 10. Tổng kết
Theo dõi calls, handoffs và lỗi bằng traces/spans; xây dựng cách debug có hệ thống. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
