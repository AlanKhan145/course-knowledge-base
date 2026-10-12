# Module 20 — Deep Agents

**Tên section Udemy:** Deep Agents  
**Số mục học tập:** 6  
**Dự án xuyên module:** Deep research assistant chia nghiên cứu thành các đầu việc.

## Kết quả cần đạt

- [ ] Phân biệt shallow, deep và coding agents.
- [ ] Chia nhiệm vụ với tiêu chí kết thúc rõ ràng.
- [ ] Chọn nơi lưu artifacts và cách cô lập tác vụ con.

## Giải thích và định hướng

Tạo agent có planning, todo, phân nhiệm subagent và cơ chế giữ ngữ cảnh.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Deep research assistant chia nghiên cứu thành các đầu việc.

```python
# Thí nghiệm Deep Agent: cần cấu hình model/key trước khi chạy.
from deepagents import create_deep_agent
agent = create_deep_agent(
    model="openai:gpt-4o-mini",
    system_prompt="Chia nhiệm vụ lớn thành các bước, ghi rõ nguồn."
)
# result = agent.invoke({"messages": [{"role":"user", "content":"Lập kế hoạch nghiên cứu RAG"}]})
```

## Danh sách bài học

01. [Introduction to Deep Agents Section](01-introduction-to-deep-agents-section.md) — `VIDEO`
02. [Deep Agents: Taxonomy of Agents: Shallow Agents, Deep Agents, Coding Agents](02-deep-agents-taxonomy-of-agents-shallow-agents-deep-agents-coding-a.md) — `VIDEO`
03. [Deep Agents: How Deep Agents Use Dynamic To-Do Lists to Solve Complex Tasks](03-deep-agents-how-deep-agents-use-dynamic-to-do-lists-to-solve-compl.md) — `VIDEO`
04. [Deep Agents: Sub Agents and Hierarchical Delegation](04-deep-agents-sub-agents-and-hierarchical-delegation.md) — `VIDEO`
05. [Deep Agents: Subagents context flow](05-deep-agents-subagents-context-flow.md) — `VIDEO`
06. [Deep Agents File Systems](06-deep-agents-file-systems.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
