# Capstone: hệ thống Deep Research nhiều Agent

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 01:43:02

## 1. Tóm tắt
Thiết kế pipeline nghiên cứu: lập kế hoạch truy vấn, tìm kiếm, tổng hợp, đánh giá độ đủ và viết báo cáo Markdown có nguồn.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Capstone: hệ thống Deep Research nhiều Agent** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Bài toán và kiến trúc tổng thể
Người dùng nhập một câu hỏi cần nghiên cứu. Ứng dụng chia thành: **planner** tạo truy vấn; **search** thu bằng chứng; **synthesizer** tóm tắt các phát hiện theo nguồn; **evaluator** kiểm tra còn thiếu góc nhìn nào; **report writer** biên tập báo cáo Markdown gồm mở đầu, nội dung, giới hạn, kết luận và nguồn.

Pipeline phải giữ ranh giới dữ liệu: search result là dữ liệu ngoài; phát biểu sự thật trong báo cáo cần kèm URL phù hợp; lập luận không được tự bịa trích dẫn.

### 4.2. Kế hoạch và vòng lặp có giới hạn
Planner tạo một cấu trúc gồm danh sách truy vấn với mục đích cụ thể. Ứng dụng thu thập kết quả bằng công cụ tìm kiếm được cấp phép, có thể thực hiện song song với concurrency limit. Evaluator yêu cầu thêm tìm kiếm nếu còn thiếu bằng chứng, nhưng **phải** có giới hạn số vòng, timeout và chi phí.

Điểm kết thúc: đủ độ bao phủ theo rubric, chạm budget hoặc không còn bằng chứng mới; phải nêu rõ tình trạng thay vì nói chắc chắn tuyệt đối.

### 4.3. Đảm bảo báo cáo trung thực
Với câu hỏi gây tranh cãi, trình bày quan điểm/khả năng, mức độ chắc chắn, nguồn gốc và ngày tháng khi cần. Chỉ đưa URL đã có trong kết quả tool hoặc tài liệu thật; tránh các đường dẫn “trông hợp lý” do mô hình tự sinh.

Output Markdown được lưu file; nguồn bên dưới là tài liệu tham khảo chính thức của SDK, còn nguồn trong từng báo cáo là dữ liệu riêng do lượt tìm kiếm thu thập.

## 5. Ví dụ Python
```python
from pydantic import BaseModel, Field
from agents import Agent

class SearchPlan(BaseModel):
    question: str
    queries: list[str] = Field(min_length=1, max_length=6)
    rationale: str

planner = Agent(
    name="Research planner",
    instructions="Tạo các truy vấn tìm kiếm đa góc nhìn và không trùng ý.",
    output_type=SearchPlan,
)

writer = Agent(
    name="Report writer",
    instructions=("Viết Markdown gồm tóm tắt, các kết luận có căn cứ, "
                  "hạn chế nghiên cứu, kết luận và danh mục URL đã được cung cấp. "
                  "Không tự bịa URL."),
)
```

## 6. Phân tích ví dụ
Mẫu đặt ranh giới giữa kế hoạch (cấu trúc) và báo cáo (Markdown). Muốn tìm kiếm thật phải gắn tool (`WebSearchTool` hoặc API tìm kiếm khác) và quản lý nguồn trên backend.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Lấy URL tự sinh trong lời mô hình mà chưa từng có trong nguồn. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Không đặt giới hạn số lần research → evaluator → research. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Quên bảo toàn mối liên hệ phát biểu ↔ nguồn khi tổng hợp. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Thiết kế một hệ thống nghiên cứu về lợi/hại của một công nghệ, yêu cầu ít nhất ba nhóm nguồn, một vòng phản biện và báo cáo Markdown có phần hạn chế.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Planner làm nhiệm vụ gì?

A. Thanh toán tiền  
B. Tạo truy vấn nghiên cứu có mục đích  
C. Xóa kết quả  
D. Render UI  

**Đáp án:** B
**Giải thích:** Planner xác định kế hoạch thu thập bằng chứng.

### 9.2. Câu 2
Evaluator có thể đề nghị gì?

A. Luôn kết thúc  
B. Luôn bỏ nguồn  
C. Tìm thêm khi thiếu bằng chứng  
D. Tự thay đổi quyền  

**Đáp án:** C
**Giải thích:** Evaluator đánh giá độ bao phủ và chỉ ra khoảng thiếu.

### 9.3. Câu 3
Vì sao phải giới hạn vòng lặp nghiên cứu?

A. Cho file đẹp  
B. Để bỏ guardrails  
C. Vì Markdown không dài  
D. Để kiểm soát thời gian/chi phí và tránh loop  

**Đáp án:** D
**Giải thích:** Loop không giới hạn có thể gây chi phí cao và không dừng.

### 9.4. Câu 4
Báo cáo phải dẫn URL như thế nào?

A. Chỉ URL đã có từ nguồn được thu thập  
B. URL bất kỳ model nhớ  
C. Chỉ tên domain  
D. Không cần nguồn  

**Đáp án:** A
**Giải thích:** Nguồn phải xác minh được.

### 9.5. Câu 5
Nếu bằng chứng chưa đủ khi hết budget?

A. Khẳng định chắc chắn  
B. Nêu rõ giới hạn và độ chắc chắn  
C. Bịa tài liệu  
D. Xóa báo cáo  

**Đáp án:** B
**Giải thích:** Trung thực về giới hạn dữ liệu là bắt buộc.

## 10. Tổng kết
Thiết kế pipeline nghiên cứu: lập kế hoạch truy vấn, tìm kiếm, tổng hợp, đánh giá độ đủ và viết báo cáo Markdown có nguồn. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
