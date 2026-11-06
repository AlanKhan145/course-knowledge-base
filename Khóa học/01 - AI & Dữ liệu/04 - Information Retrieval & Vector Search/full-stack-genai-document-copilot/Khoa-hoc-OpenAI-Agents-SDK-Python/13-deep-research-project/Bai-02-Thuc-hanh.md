# Bài 02 — Thực hành có hướng dẫn: Dự án cuối khóa — Deep Research Agent

> **Module 13 · Lab** · Video: [xem từ 01:43:02](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=6182s).

**Tổng quan:** Xây ứng dụng console phối hợp Query Planner, Search Agent, Evaluator và Report Writer để xuất báo cáo Markdown có nguồn.

## 1. Lab khởi tạo dự án

Tạo dự án console trước, chưa cần scraping live. Bài này khởi tạo skeleton, các file tiếp theo hướng dẫn từng bước về tìm kiếm, đánh giá, tổng hợp.

## 2. Requirements và cấu trúc

```text
openai-agents
python-dotenv
pydantic
requests
beautifulsoup4
```

`requests` và `beautifulsoup4` phục vụ demo scraper; nếu dùng `WebSearchTool` built-in có thể không cần hai thư viện này. Cài dependencies từ `requirements.txt`, đặt `.env` ở gốc project, không commit secrets.

## 3. Data models

```python
# models.py
from pydantic import BaseModel

class SearchQueries(BaseModel):
    queries: list[str]

class Finding(BaseModel):
    query: str
    title: str
    url: str
    summary: str

class Evaluation(BaseModel):
    is_sufficient: bool
    missing_topics: list[str]
    reasoning: str
```

Chọn schema nhỏ gọn. URL chỉ được lưu nếu có trong kết quả search/tool. Định nghĩa `Finding` không đồng nghĩa mọi dòng tìm kiếm đều đúng: cần gắn nguồn và kiểm chứng.

## 4. Tạo agent lập kế hoạch

```python
# specialists/query_planner.py
from agents import Agent
from models import SearchQueries

query_planner = Agent(
    name="Research Query Planner",
    instructions=("Nhận một câu hỏi nghiên cứu. Trả 3 đến 5 truy vấn bao phủ "
                  "các khía cạnh chính, cụ thể và không trùng lặp."),
    output_type=SearchQueries,
)
```

Chạy thử độc lập:

```python
from agents import Runner
from specialists.query_planner import query_planner
r = Runner.run_sync(query_planner, "Tác động của fluoride tới sức khỏe răng miệng?")
print(r.final_output.model_dump_json(indent=2))
```

## 5. Checkpoint và thử lỗi

Kiểm tra `queries` là list, phần tử không rỗng và độ bao phủ đa chiều. Thử câu hỏi rộng “AI có lợi không?” để xem queries có cần làm hẹp; thử câu hỏi chứa thông tin cá nhân, bảo đảm không đưa dữ liệu nhạy cảm vào query web.

## 6. Deliverable

`models.py`, `query_planner.py`, `requirements.txt`, `.env.example`, sơ đồ kiến trúc và ít nhất ba truy vấn thử cho một câu hỏi nghiên cứu.

## 7. Tiêu chí đánh giá

Agent lập kế hoạch chạy; đầu ra typed; không có secret; chưa gọi web nhưng nêu đúng rằng mới hoàn thành bước planning.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Bước đầu của pipeline Deep Research là gì?

A. Viết kết luận ngay  
B. Xóa nguồn  
C. Lập các truy vấn con từ câu hỏi  
D. Xuất HTML trực tiếp  

**Đáp án:** C. **Giải thích:** Planning định hướng các khía cạnh cần tìm.

### Câu 2

Evaluator trong research nên trả gì?

A. Một API key  
B. Một câu chào  
C. Giá token hiện tại  
D. Đánh giá độ đủ và các chủ đề còn thiếu  

**Đáp án:** D. **Giải thích:** Feedback giúp vòng nghiên cứu bổ sung có chủ đích.

### Câu 3

Vì sao cần giới hạn vòng lặp nghiên cứu?

A. Kiểm soát chi phí, thời gian và tránh vô hạn  
B. Để bỏ qua mọi nguồn  
C. Để ẩn lỗi tìm kiếm  
D. Vì Python không có while  

**Đáp án:** A. **Giải thích:** Research có thể lặp lại nếu không có điều kiện dừng.

### Câu 4

Báo cáo nghiên cứu đáng tin cần đặc điểm nào?

A. Chỉ Markdown đẹp  
B. Có nguồn gắn với nhận định và nói rõ giới hạn  
C. Chỉ nhiều chữ  
D. Không cần liên kết  

**Đáp án:** B. **Giải thích:** Khả năng truy nguyên nguồn là yêu cầu trọng tâm.

### Câu 5

URL trong một Finding có tự bảo đảm kết luận đúng?

A. Có, luôn luôn  
B. Có nếu model mạnh  
C. Không, cần đối chiếu claim với nội dung nguồn  
D. Có nếu dùng trace  

**Đáp án:** C. **Giải thích:** Có link không đồng nghĩa trích dẫn đúng.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/) · [2](https://github.com/openai/openai-agents-python)
