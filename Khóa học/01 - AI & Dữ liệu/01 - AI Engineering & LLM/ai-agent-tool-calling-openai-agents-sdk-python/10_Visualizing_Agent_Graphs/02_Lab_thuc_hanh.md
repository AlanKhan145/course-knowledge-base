# Thực hành — Visualizing: vẽ đồ thị hệ thống Agent

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Vẽ graph cho triage 3 chuyên gia, đưa vào một tool demo và đánh giá đường truy cập nào không cần thiết.

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
Cài `pip install "openai-agents[viz]"`; kiểm tra `dot -V`.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Định nghĩa triage, billing, technical và FAQ tool.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Render graph và xác nhận các node/edges có đúng ý định.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Thêm agent general support và so sánh graph trước/sau.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Viết danh sách những đường kết nối phải có và không nên có.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
from agents import Agent, function_tool
from agents.extensions.visualization import draw_graph

@function_tool
def lookup_faq(keyword: str) -> str:
    """Trả kết quả FAQ demo."""
    return f"FAQ demo cho {keyword}"

billing = Agent(name="Billing", instructions="Giải thích hóa đơn.")
technical = Agent(name="Technical", instructions="Hỗ trợ kỹ thuật.", tools=[lookup_faq])
triage = Agent(name="Triage", instructions="Chuyển đúng lĩnh vực.", handoffs=[billing, technical])

draw_graph(triage, filename="agent_architecture")
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
Agent graph chủ yếu mô tả gì?

A. Mọi lời gọi đã chạy  
B. Các kết nối được cấu hình  
C. Số người dùng  
D. Chi phí chính xác  

**Đáp án:** B
**Giải thích:** Graph mô tả topology thiết kế.

### 10.2. Câu 2
Trace khác graph ở điểm nào?

A. Trace chỉ có CSS  
B. Trace dùng để ghi source code  
C. Trace mô tả execution cụ thể  
D. Trace luôn ít hơn một bước  

**Đáp án:** C
**Giải thích:** Trace ghi lại đường chạy thực tế.

### 10.3. Câu 3
Để xuất graph, cần công cụ gì?

A. SQLite  
B. Docker bắt buộc  
C. Django  
D. Graphviz và tùy chọn SDK viz  

**Đáp án:** D
**Giải thích:** SDK sử dụng hệ sinh thái Graphviz để render đồ thị.

### 10.4. Câu 4
Từ graph có thể kiểm tra?

A. Agent nào được cấp tool/đường handoff  
B. Chất lượng mô hình đúng tuyệt đối  
C. Dữ liệu DB mới nhất  
D. Giá token hiện tại  

**Đáp án:** A
**Giải thích:** Quan hệ được định nghĩa lộ rõ trên sơ đồ.

### 10.5. Câu 5
Graph thay thế test phân tuyến không?

A. Có  
B. Không  
C. Chỉ khi 2 nodes  
D. Chỉ trong notebook  

**Đáp án:** B
**Giải thích:** Cấu trúc và hành vi là hai khía cạnh khác nhau.

## 11. Tổng kết
Vẽ mối quan hệ giữa agent, tool và handoff bằng Graphviz; dùng sơ đồ để rà soát kiến trúc. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
