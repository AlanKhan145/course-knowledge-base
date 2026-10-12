# Module 14 — Reflection Agent với LangGraph

**Tên section Udemy:** Build a Reflection Agent in LangGraph  
**Số mục học tập:** 5  
**Dự án xuyên module:** Agent viết bài ngắn và cải thiện qua tối đa 2 vòng reflection.

## Kết quả cần đạt

- [ ] Tách generator khỏi evaluator.
- [ ] Lưu phiên bản và phản hồi trong state.
- [ ] Tránh tự đánh giá không có tiêu chí.

## Giải thích và định hướng

Tạo quy trình tạo bản nháp → đánh giá → sửa bản nháp với điều kiện dừng.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Agent viết bài ngắn và cải thiện qua tối đa 2 vòng reflection.

```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class State(TypedDict):
    draft: str
    feedback: str

def write(s: State): return {"draft": s["draft"] + " [revision]"}
def review(s: State): return {"feedback": "Bổ sung nguồn và ví dụ"}

g = StateGraph(State)
g.add_node("write", write); g.add_node("review", review)
g.add_edge(START, "review"); g.add_edge("review", "write"); g.add_edge("write", END)
print(g.compile().invoke({"draft": "Đề xuất ban đầu", "feedback": ""}))
```

## Danh sách bài học

01. [What are we building? A Reflection Agent](01-what-are-we-building-a-reflection-agent.md) — `VIDEO`
02. [Project Setup](02-project-setup.md) — `VIDEO`
03. [Creating the Reflector Chain and the Tweet Reviosr Chain](03-creating-the-reflector-chain-and-the-tweet-reviosr-chain.md) — `VIDEO`
04. [Defining our LangGraph Graph](04-defining-our-langgraph-graph.md) — `VIDEO`
05. [LangSmith Tracing](05-langsmith-tracing.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
