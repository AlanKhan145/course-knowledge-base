# Module 15 — Reflexion Agent với LangGraph

**Tên section Udemy:** Build a Reflexion Agent in LangGraph  
**Số mục học tập:** 8  
**Dự án xuyên module:** Research assistant có chu kỳ tìm nguồn – phản biện – chỉnh sửa.

## Kết quả cần đạt

- [ ] Phân biệt Reflection với Reflexion có evidence.
- [ ] Thiết kế ToolNode/edge có điều kiện.
- [ ] Lưu lỗi, nguồn và số lần sửa.

## Giải thích và định hướng

Kết hợp actor, critic/revisor và công cụ để cải thiện câu trả lời có kiểm chứng.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Research assistant có chu kỳ tìm nguồn – phản biện – chỉnh sửa.

```python
# State làm rõ tác vụ actor/revisor; thay các hàm demo bằng LLM+retriever.
from typing import TypedDict
class ReflectionState(TypedDict):
    draft: str
    evidence: list[str]
    critique: str
    revision: str

def revise(s: ReflectionState) -> dict:
    verified = " ".join(s["evidence"])
    return {"revision": f"{s['draft']} | Bằng chứng: {verified}"}
print(revise({"draft":"Tóm tắt", "evidence":["doc:1"], "critique":"Thiếu nguồn", "revision":""}))
```

## Danh sách bài học

01. [What are we building? A Reflexion Agent](01-what-are-we-building-a-reflexion-agent.md) — `VIDEO`
02. [Project Setup](02-project-setup.md) — `VIDEO`
03. [Section Resources](03-section-resources.md) — `ARTICLE`
04. [Actor Agent V2](04-actor-agent-v2.md) — `VIDEO`
05. [Revisor Agent](05-revisor-agent.md) — `VIDEO`
06. [ToolNode - Executing Tools](06-toolnode-executing-tools.md) — `VIDEO`
07. [Building Our LangGraph Graph](07-building-our-langgraph-graph.md) — `VIDEO`
08. [Tracing Our Graph](08-tracing-our-graph.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
