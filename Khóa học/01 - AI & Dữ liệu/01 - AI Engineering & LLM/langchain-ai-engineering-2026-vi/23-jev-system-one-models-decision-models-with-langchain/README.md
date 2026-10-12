# Module 23 — Jev và mô hình ra quyết định System One

**Tên section Udemy:** Jev & System One Models (Decision Models) with LangChain  
**Số mục học tập:** 15  
**Dự án xuyên module:** Classifier phân loại ticket với threshold, fallback và audit log.

## Kết quả cần đạt

- [ ] Phân biệt phân loại nhãn, chấm điểm và chọn phương án.
- [ ] Đo precision/recall và độ tin cậy.
- [ ] Không dùng thư viện nội bộ không được công bố như API chắc chắn.

## Giải thích và định hướng

Giới thiệu tác vụ phân loại, điểm và lựa chọn như phương án rẻ hơn LLM tổng quát trong vài tình huống.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Classifier phân loại ticket với threshold, fallback và audit log.

```python
# Ví dụ minh họa quyết định có ngưỡng: không phải Jev SDK.
def ticket_route(score: float) -> str:
    if score >= 0.85: return "auto-route"
    if score >= 0.55: return "human-review"
    return "fallback-llm"
for x in (0.3, 0.66, 0.93): print(x, ticket_route(x))
```

## Danh sách bài học

01. [Introduction to Jev by TypeSafe AI](01-introduction-to-jev-by-typesafe-ai.md) — `VIDEO`
02. [System One vs. System Two Thinking: The Motivation For Jev style Decision Models](02-system-one-vs-system-two-thinking-the-motivation-for-jev-style-dec.md) — `VIDEO`
03. [Jev's Three Question Types](03-jev-s-three-question-types.md) — `ARTICLE`
04. [Understanding TypeSafe AI Jev's Primitives: State and Question Types](04-understanding-typesafe-ai-jev-s-primitives-state-and-question-type.md) — `VIDEO`
05. [[Jev Primitive] Noul](05-jev-primitive-noul.md) — `VIDEO`
06. [[Jev Primitive] Score](06-jev-primitive-score.md) — `VIDEO`
07. [[Jev Primitive] Choice](07-jev-primitive-choice.md) — `VIDEO`
08. [System 1 vs. System 2 AI: Choosing Between Jev and Traditional LLMs](08-system-1-vs-system-2-ai-choosing-between-jev-and-traditional-llms.md) — `VIDEO`
09. [RECAP](09-recap.md) — `VIDEO`
10. [Hands On Intro](10-hands-on-intro.md) — `VIDEO`
11. [Hands-On with TypeSafeClassifier: Fast Decision Models in LangChain](11-hands-on-with-typesafeclassifier-fast-decision-models-in-langchain.md) — `VIDEO`
12. [Setting Up Open Jev-Style Decision Models with Ollama](12-setting-up-open-jev-style-decision-models-with-ollama.md) — `VIDEO`
13. [Switching Backends in LangChain: From TypeSafe AI to Local Ollama](13-switching-backends-in-langchain-from-typesafe-ai-to-local-ollama.md) — `VIDEO`
14. [Downstream Code Branching and Threshold Tuning in LangChain](14-downstream-code-branching-and-threshold-tuning-in-langchain.md) — `VIDEO`
15. [Noul, Choice, and Score in LangChain](15-noul-choice-and-score-in-langchain.md) — `ARTICLE`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
