# Module 02 — Xây dựng ứng dụng LangChain đầu tiên

**Tên section Udemy:** Your First LangChain App  
**Số mục học tập:** 11  
**Dự án xuyên module:** Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.

## Kết quả cần đạt

- [ ] Tạo prompt template có biến rõ ràng.
- [ ] Nối prompt → model → parser bằng toán tử |.
- [ ] Quan sát input, output, latency và lỗi trong LangSmith.

## Giải thích và định hướng

Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_messages([
    ("system", "Hãy tóm tắt trung thực, ngắn gọn bằng tiếng Việt."),
    ("human", "Tóm tắt văn bản sau trong 3 ý: {text}")
])
model = ChatOpenAI(model="gpt-4o-mini", temperature=0)
chain = prompt | model | StrOutputParser()
print(chain.invoke({"text": "LangChain giúp ghép model và công cụ."}))
```

## Danh sách bài học

01. [What is LangChain? LangChain Under 6 Minutes](01-what-is-langchain-langchain-under-6-minutes.md) — `VIDEO`
02. [What are we building? LangChain Hello World Chain](02-what-are-we-building-langchain-hello-world-chain.md) — `VIDEO`
03. [Project Setup](03-project-setup.md) — `VIDEO`
04. [LangChain Fundamentals: Prompt Templates, ChatModels, and Chains](04-langchain-fundamentals-prompt-templates-chatmodels-and-chains.md) — `VIDEO`
05. [Building a LangChain Chain to Summarize Text](05-building-a-langchain-chain-to-summarize-text.md) — `VIDEO`
06. [Debugging and Tracing Our LangChain Chain](06-debugging-and-tracing-our-langchain-chain.md) — `VIDEO`
07. [Using Local Open-Weights Models with LangChain and Ollama](07-using-local-open-weights-models-with-langchain-and-ollama.md) — `VIDEO`
08. [Integrating LangSmith for LangChain Application Tracing](08-integrating-langsmith-for-langchain-application-tracing.md) — `VIDEO`
09. [LangChain LCEL Fundamentals Quiz](09-langchain-lcel-fundamentals-quiz.md) — `QUIZ`
10. [LangChain Model Switching: Groq API Integration](10-langchain-model-switching-groq-api-integration.md) — `CODING`
11. [Semantic Versioning in LangChain](11-semantic-versioning-in-langchain.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
