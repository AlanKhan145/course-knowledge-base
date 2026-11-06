# Visualizing: vẽ đồ thị hệ thống Agent

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 01:31:34

## 1. Tóm tắt
Vẽ mối quan hệ giữa agent, tool và handoff bằng Graphviz; dùng sơ đồ để rà soát kiến trúc.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Visualizing: vẽ đồ thị hệ thống Agent** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Đồ thị kiến trúc so với trace
Agent graph mô tả cấu trúc các khả năng đã định nghĩa: agent, tool và kết nối chuyển giao. Trace mô tả **run thực tế**: bước nào đã diễn ra, đầu vào/đầu ra và lỗi. Đồ thị không chứng minh agent thực sự đã gọi tất cả các tool.

Trình bày graph hữu ích trước khi thêm agent mới, nhất là khi luồng có nhiều chuyên gia và công cụ có quyền ghi dữ liệu.

### 4.2. Cài Graphviz và thư viện
SDK có nhóm dependency tùy chọn `openai-agents[viz]`. Một số hệ điều hành cần cài thêm Graphviz binary (`dot`) và đưa vào `PATH`; riêng cài Python package có thể không đủ để render PNG.

`draw_graph` hỗ trợ vẽ luồng agent, nhánh handoff và tools. Nên đặt tên node/tool mô tả nghiệp vụ, ví dụ `Billing`/`lookup_invoice` thay vì `Agent2`/`f`.

### 4.3. Đọc sơ đồ và kiểm tra quyền
Từ graph, kiểm tra xem triage có tool ghi không cần thiết hay không; có đường handoff vòng; có agent nào không bao giờ được kết nối; và có mâu thuẫn giữa instruction và tập tool.

Kết hợp graph (thiết kế) + trace (thực thi) + test cases (kỳ vọng) để đánh giá tính chính xác của điều phối.

## 5. Ví dụ Python
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

## 6. Phân tích ví dụ
`draw_graph` tạo hình đồ thị từ quan hệ đã khai báo. Nếu thiếu Graphviz executable hoặc thư viện đồ họa, kiểm tra `dot -V` và installation notes cho hệ điều hành.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Nhầm đường nối khả dĩ với đường thực tế đã chạy. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Chỉ cài Python package mà quên executable Graphviz. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Thiết kế graph quá nhiều nhánh không có test routing. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Vẽ graph cho triage 3 chuyên gia, đưa vào một tool demo và đánh giá đường truy cập nào không cần thiết.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Agent graph chủ yếu mô tả gì?

A. Mọi lời gọi đã chạy  
B. Các kết nối được cấu hình  
C. Số người dùng  
D. Chi phí chính xác  

**Đáp án:** B
**Giải thích:** Graph mô tả topology thiết kế.

### 9.2. Câu 2
Trace khác graph ở điểm nào?

A. Trace chỉ có CSS  
B. Trace dùng để ghi source code  
C. Trace mô tả execution cụ thể  
D. Trace luôn ít hơn một bước  

**Đáp án:** C
**Giải thích:** Trace ghi lại đường chạy thực tế.

### 9.3. Câu 3
Để xuất graph, cần công cụ gì?

A. SQLite  
B. Docker bắt buộc  
C. Django  
D. Graphviz và tùy chọn SDK viz  

**Đáp án:** D
**Giải thích:** SDK sử dụng hệ sinh thái Graphviz để render đồ thị.

### 9.4. Câu 4
Từ graph có thể kiểm tra?

A. Agent nào được cấp tool/đường handoff  
B. Chất lượng mô hình đúng tuyệt đối  
C. Dữ liệu DB mới nhất  
D. Giá token hiện tại  

**Đáp án:** A
**Giải thích:** Quan hệ được định nghĩa lộ rõ trên sơ đồ.

### 9.5. Câu 5
Graph thay thế test phân tuyến không?

A. Có  
B. Không  
C. Chỉ khi 2 nodes  
D. Chỉ trong notebook  

**Đáp án:** B
**Giải thích:** Cấu trúc và hành vi là hai khía cạnh khác nhau.

## 10. Tổng kết
Vẽ mối quan hệ giữa agent, tool và handoff bằng Graphviz; dùng sơ đồ để rà soát kiến trúc. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
