# Bài 05 — Orchestrator, ứng dụng console và kiểm thử end-to-end

> **Module 13 · Project** · [Video từ 01:43:02](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=6182s)

## 1. Mục tiêu

Hoàn thiện pipeline chạy được ở chế độ offline mock, rồi thay search provider để tạo báo cáo thật khi có quyền API. Chương trình phải phân biệt nguồn mock với nguồn thật, báo lỗi minh bạch.

## 2. Phiên bản tối giản có thể chạy trong một file

```python
# main.py
import json
from pathlib import Path
from datetime import datetime
from pydantic import BaseModel
from agents import Agent, Runner, trace
from dotenv import load_dotenv

load_dotenv()

class Queries(BaseModel):
    queries: list[str]

class Evaluation(BaseModel):
    is_sufficient: bool
    missing_topics: list[str]

planner = Agent(
    name="Query Planner",
    instructions="Tạo 3 truy vấn con cụ thể, không trùng nhau, phục vụ câu hỏi nghiên cứu.",
    output_type=Queries,
)
evaluator = Agent(
    name="Research Evaluator",
    instructions="Chấm độ đủ của dữ kiện; nếu không có nguồn thật, cho rằng chưa đủ.",
    output_type=Evaluation,
)
writer = Agent(
    name="Report Writer",
    instructions=("Tạo Markdown dựa hoàn toàn vào findings; nói rõ nguồn mock không phải "
                  "bằng chứng và khi nào chưa đủ dữ liệu."),
)

# Search mock: code end-to-end chạy được, nhưng KHÔNG có bằng chứng web thật.
def search_web(query: str) -> list[dict]:
    return [{
        "query": query,
        "title": "MOCK: chưa nối search provider",
        "url": "",
        "summary": "Chưa có dữ liệu ngoài; cần tích hợp API tìm kiếm để nghiên cứu thật.",
        "verified": False,
    }]


def run_research(question: str) -> str:
    findings = []
    feedback = ""
    last_evaluation = None
    with trace("deep-research-cli-demo"):
        for iteration in range(3):
            plan_input = f"Câu hỏi: {question}\nChủ đề còn thiếu: {feedback}"
            plan = Runner.run_sync(planner, plan_input).final_output
            for query in plan.queries[:5]:
                findings.extend(search_web(query))
            evaluation_input = json.dumps({
                "question": question,
                "findings": findings,
            }, ensure_ascii=False)
            last_evaluation = Runner.run_sync(evaluator, evaluation_input).final_output
            if last_evaluation.is_sufficient:
                break
            feedback = "; ".join(last_evaluation.missing_topics)

        writer_input = json.dumps({
            "question": question,
            "findings": findings,
            "evaluation": last_evaluation.model_dump() if last_evaluation else None,
        }, ensure_ascii=False)
        return Runner.run_sync(writer, writer_input).final_output


def main():
    question = input("Câu hỏi nghiên cứu: ").strip()
    if not question:
        print("Cần nhập câu hỏi")
        return
    report = run_research(question)
    Path("reports").mkdir(exist_ok=True)
    name = "reports/research_" + datetime.now().strftime("%Y%m%d_%H%M%S") + ".md"
    Path(name).write_text(report, encoding="utf-8")
    print("Đã xuất:", name)
    print(report)

if __name__ == "__main__":
    main()
```

Đây là **demo end-to-end với tool tìm kiếm giả lập**, nên báo cáo không thể đưa ra kết luận nghiên cứu thực. Khi thay bằng provider thật, phải đổi `search_web` để trả kết quả có URL, tiêu đề, ngày truy xuất và trích đoạn thực tế; bổ sung validator URL/citation và hardening cho scraper. `eval` không bao giờ được dùng để chạy nội dung từ web.

## 3. Cách chạy

```bash
python -m venv .venv
# Kích hoạt .venv phù hợp hệ điều hành
python -m pip install openai-agents python-dotenv pydantic
# Đặt OPENAI_API_KEY trong .env rồi nạp môi trường hoặc export biến
python main.py
```

Script đã gọi `load_dotenv()` để đọc `.env` tại thư mục đang chạy. Có thể thay bằng export biến từ shell khi triển khai server; không đưa key vào báo cáo hoặc logs.

## 4. Bản nâng cấp tìm kiếm thật

Kết nối `WebSearchTool` hoặc search API được cấp quyền với `search_web(query)`. Dữ liệu search thực phải được khử trùng lặp, kiểm tra nội dung và provenance trước khi cấp cho evaluator/writer. Đặt tối đa số query mỗi vòng, số trang mỗi query, kích thước trang, thời gian chờ và budget token.

## 5. Kịch bản kiểm thử

| Test | Input | Điều kiện chấp nhận |
| --- | --- | --- |
| D01 | Câu hỏi rộng | Query planner đề xuất nhiều khía cạnh |
| D02 | Câu hỏi hẹp | Có từ khóa đúng trọng tâm |
| D03 | Search offline | Report nêu rõ không có nguồn web thật |
| D04 | Search timeout | Không bịa nguồn; có thông báo lỗi |
| D05 | Nhiều vòng | Dừng sau giới hạn |
| D06 | Trang có prompt injection | Không thực thi chỉ thị độc hại |
| D07 | URL trùng | Khử trùng lặp có kiểm soát |
| D08 | Writer tạo citation giả | Validator từ chối nguồn không tồn tại |

## 6. Điểm dễ sai

Nếu dùng `Runner.run_sync` bên trong vòng event loop async, sẽ lỗi. Với server async hãy chuyển sang `await Runner.run(...)`. Nếu agent evaluator đánh giá “đã đủ” mặc dù toàn mock, tăng cường rules với kiểm tra deterministic: chỉ cho đạt khi có nguồn verified theo tiêu chí ứng dụng. Model không nên có quyền tự chứng nhận dữ liệu của chính mình.

## 7. Definition of Done

Chạy được local demo, có báo cáo markdown, giới hạn vòng lặp, logs/traces, rõ trạng thái nguồn mock/live, có test lỗi dữ liệu, có hướng tích hợp search thật. Sản phẩm demo này **không phải hệ thống nghiên cứu có kiểm chứng** cho tới khi tích hợp provider và bộ xác thực nội dung.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1
Search mock trả URL rỗng, Writer có được coi đó là nguồn học thuật không?

A. Có nếu nhiều đoạn văn  
B. Có khi title dài  
C. Có nếu trace bật  
D. Không, phải nói rõ thiếu nguồn thật  

**Đáp án:** D. **Giải thích:** Demo offline chưa có nguồn thực.

### Câu 2
Vì sao `Runner.run_sync` không phù hợp bên trong event loop đang chạy?

A. Vì API key không tồn tại  
B. Vì cần dùng API async `await Runner.run`  
C. Vì Pydantic sai kiểu  
D. Vì Markdown không hỗ trợ  

**Đáp án:** B. **Giải thích:** Tránh gọi runner đồng bộ bên trong event loop.

### Câu 3
Lỗi citation giả cần xử lý ra sao?

A. Bỏ qua nếu văn phong hay  
B. Tăng màu sắc  
C. Kiểm tra citation và nguồn trước khi xuất  
D. Thêm câu mở đầu  

**Đáp án:** C. **Giải thích:** Truy nguyên nguồn là bắt buộc.

### Câu 4
Khi evaluator đánh giá sai rằng đã đủ, cần bổ sung gì?

A. Kiểm tra deterministic dựa trên evidence  
B. Tắt logs  
C. Bỏ giới hạn vòng lặp  
D. Bỏ schema  

**Đáp án:** A. **Giải thích:** Không để LLM tự chứng nhận chất lượng nguồn.

### Câu 5
Tại sao phải có test prompt injection trong trang tìm kiếm?

A. Để tăng hallucination  
B. Để thay đổi user  
C. Để tăng số nguồn giả  
D. Vì nội dung web không đáng tin như chỉ thị hệ thống  

**Đáp án:** D. **Giải thích:** Content từ web chỉ là dữ liệu.
