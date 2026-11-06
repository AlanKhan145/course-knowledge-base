# Thực hành — Capstone: hệ thống Deep Research nhiều Agent

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Thiết kế một hệ thống nghiên cứu về lợi/hại của một công nghệ, yêu cầu ít nhất ba nhóm nguồn, một vòng phản biện và báo cáo Markdown có phần hạn chế.

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
Viết đề bài, rubric chất lượng và ngân sách tối đa.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Dùng Pydantic định nghĩa `SearchPlan` với 3–6 queries.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Chọn công cụ search hợp lệ và định dạng evidence (title, url, excerpt, retrieved_at).

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Viết evaluator trả lời đủ/chưa đủ dựa trên các tiêu chí đa chiều.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Tổng hợp Markdown, kiểm tra URL không trống, không bịa, và ghi rõ giới hạn.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
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
Planner làm nhiệm vụ gì?

A. Thanh toán tiền  
B. Tạo truy vấn nghiên cứu có mục đích  
C. Xóa kết quả  
D. Render UI  

**Đáp án:** B
**Giải thích:** Planner xác định kế hoạch thu thập bằng chứng.

### 10.2. Câu 2
Evaluator có thể đề nghị gì?

A. Luôn kết thúc  
B. Luôn bỏ nguồn  
C. Tìm thêm khi thiếu bằng chứng  
D. Tự thay đổi quyền  

**Đáp án:** C
**Giải thích:** Evaluator đánh giá độ bao phủ và chỉ ra khoảng thiếu.

### 10.3. Câu 3
Vì sao phải giới hạn vòng lặp nghiên cứu?

A. Cho file đẹp  
B. Để bỏ guardrails  
C. Vì Markdown không dài  
D. Để kiểm soát thời gian/chi phí và tránh loop  

**Đáp án:** D
**Giải thích:** Loop không giới hạn có thể gây chi phí cao và không dừng.

### 10.4. Câu 4
Báo cáo phải dẫn URL như thế nào?

A. Chỉ URL đã có từ nguồn được thu thập  
B. URL bất kỳ model nhớ  
C. Chỉ tên domain  
D. Không cần nguồn  

**Đáp án:** A
**Giải thích:** Nguồn phải xác minh được.

### 10.5. Câu 5
Nếu bằng chứng chưa đủ khi hết budget?

A. Khẳng định chắc chắn  
B. Nêu rõ giới hạn và độ chắc chắn  
C. Bịa tài liệu  
D. Xóa báo cáo  

**Đáp án:** B
**Giải thích:** Trung thực về giới hạn dữ liệu là bắt buộc.

## 11. Tổng kết
Thiết kế pipeline nghiên cứu: lập kế hoạch truy vấn, tìm kiếm, tổng hợp, đánh giá độ đủ và viết báo cáo Markdown có nguồn. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
