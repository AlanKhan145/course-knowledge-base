# Module 02 — Xây dựng ứng dụng LangChain đầu tiên

> Tài liệu hợp nhất từ `README.md` và 11 bài học của module.
> Nội dung, ví dụ code và bài tập được giữ nguyên; các bài được sắp xếp theo thứ tự học.

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

01. [What is LangChain? LangChain Under 6 Minutes](#bai-01) — `VIDEO`
02. [What are we building? LangChain Hello World Chain](#bai-02) — `VIDEO`
03. [Project Setup](#bai-03) — `VIDEO`
04. [LangChain Fundamentals: Prompt Templates, ChatModels, and Chains](#bai-04) — `VIDEO`
05. [Building a LangChain Chain to Summarize Text](#bai-05) — `VIDEO`
06. [Debugging and Tracing Our LangChain Chain](#bai-06) — `VIDEO`
07. [Using Local Open-Weights Models with LangChain and Ollama](#bai-07) — `VIDEO`
08. [Integrating LangSmith for LangChain Application Tracing](#bai-08) — `VIDEO`
09. [LangChain LCEL Fundamentals Quiz](#bai-09) — `QUIZ`
10. [LangChain Model Switching: Groq API Integration](#bai-10) — `CODING`
11. [Semantic Versioning in LangChain](#bai-11) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.

---

<a id="bai-01"></a>

## Bài 01 — What is LangChain? LangChain Under 6 Minutes

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **What is LangChain? LangChain Under 6 Minutes** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** LangChain là một bộ trừu tượng để ghép model, prompt, tools, retrieval và state. Framework không làm mô hình “thông minh hơn” một cách tự động; lợi ích là khả năng tích hợp, kiểm thử, theo dõi và thay thế thành phần.

**Góc nhìn 2.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *What is LangChain? LangChain Under 6 Minutes*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Hãy kể ba trường hợp nên dùng LangChain và một trường hợp chỉ cần gọi SDK trực tiếp.
- **B — Xây dựng:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **What is LangChain? LangChain Under 6 Minutes**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Dùng LangChain khi pipeline nhiều thành phần; với một API call đơn giản có thể gọi SDK.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-02"></a>

## Bài 02 — What are we building? LangChain Hello World Chain

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **What are we building? LangChain Hello World Chain** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *What are we building? LangChain Hello World Chain*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Áp dụng bài **What are we building? LangChain Hello World Chain** vào dự án: Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **What are we building? LangChain Hello World Chain**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-03"></a>

## Bài 03 — Project Setup

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **Project Setup** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Cấu hình dự án gồm Python phù hợp, môi trường ảo, khóa từ biến môi trường, package được khóa phiên bản và bài test smoke. Không commit `.env` thật vào Git.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Project Setup*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Tạo `uv venv`, cài dependencies, viết smoke test import và chạy trong môi trường sạch.
- **B — Xây dựng:** Áp dụng bài **Project Setup** vào dự án: Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Project Setup**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Một cấu hình tốt tái lập được, không yêu cầu copy API key vào source code.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-04"></a>

## Bài 04 — LangChain Fundamentals: Prompt Templates, ChatModels, and Chains

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **LangChain Fundamentals: Prompt Templates, ChatModels, and Chains** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Prompt template tách phần chỉ dẫn cố định khỏi biến dữ liệu. Trong môi trường thực tế cần kiểm tra biến thiếu, định dạng message roles và tránh để nội dung người dùng ghi đè system instruction.

**Góc nhìn 2.** Chat model là giao diện trao đổi messages với nhà cung cấp. Khi đổi nhà cung cấp, phải kiểm tra độ tương thích tool calling, structured output, context length, token price, rate limit và việc xử lý dữ liệu; không chỉ thay tên model.

**Góc nhìn 3.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *LangChain Fundamentals: Prompt Templates, ChatModels, and Chains*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Tạo template nhận {question} và {context}, thử trường hợp thiếu biến.
- **B — Xây dựng:** Đổi provider hoặc model rồi ghi bảng so sánh latency, chất lượng và lỗi trên 10 input giống nhau. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **LangChain Fundamentals: Prompt Templates, ChatModels, and Chains**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Template phải tách instruction khỏi dữ liệu và báo lỗi nếu biến yêu cầu không tồn tại.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-05"></a>

## Bài 05 — Building a LangChain Chain to Summarize Text

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **Building a LangChain Chain to Summarize Text** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Building a LangChain Chain to Summarize Text*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Áp dụng bài **Building a LangChain Chain to Summarize Text** vào dự án: Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Building a LangChain Chain to Summarize Text**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-06"></a>

## Bài 06 — Debugging and Tracing Our LangChain Chain

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **Debugging and Tracing Our LangChain Chain** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Góc nhìn 2.** Tracing ghi lại các span mô hình và tool: input, output, thời gian, lỗi và metadata. Trong production cần che dữ liệu nhạy cảm, giới hạn retention và kiểm soát quyền xem trace.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Debugging and Tracing Our LangChain Chain*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Cho phép tracing bằng biến môi trường sau khi cấu hình tài khoản.
# LANGSMITH_TRACING=true
# LANGSMITH_API_KEY=...
# LANGSMITH_PROJECT=ai-engineering-labs
print("Tracing sẽ hiện trên LangSmith nếu cấu hình hợp lệ")
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Tạo một trace thành công và một trace lỗi; liệt kê ba thông tin cần tìm khi debug. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Debugging and Tracing Our LangChain Chain**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-07"></a>

## Bài 07 — Using Local Open-Weights Models with LangChain and Ollama

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **Using Local Open-Weights Models with LangChain and Ollama** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Chat model là giao diện trao đổi messages với nhà cung cấp. Khi đổi nhà cung cấp, phải kiểm tra độ tương thích tool calling, structured output, context length, token price, rate limit và việc xử lý dữ liệu; không chỉ thay tên model.

**Góc nhìn 2.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Using Local Open-Weights Models with LangChain and Ollama*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Đổi provider hoặc model rồi ghi bảng so sánh latency, chất lượng và lỗi trên 10 input giống nhau.
- **B — Xây dựng:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Using Local Open-Weights Models with LangChain and Ollama**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Không nên kết luận model A tốt hơn chỉ từ một câu hỏi; cần bộ thử cố định.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-08"></a>

## Bài 08 — Integrating LangSmith for LangChain Application Tracing

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **Integrating LangSmith for LangChain Application Tracing** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Góc nhìn 2.** Tracing ghi lại các span mô hình và tool: input, output, thời gian, lỗi và metadata. Trong production cần che dữ liệu nhạy cảm, giới hạn retention và kiểm soát quyền xem trace.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Integrating LangSmith for LangChain Application Tracing*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Cho phép tracing bằng biến môi trường sau khi cấu hình tài khoản.
# LANGSMITH_TRACING=true
# LANGSMITH_API_KEY=...
# LANGSMITH_PROJECT=ai-engineering-labs
print("Tracing sẽ hiện trên LangSmith nếu cấu hình hợp lệ")
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Tạo một trace thành công và một trace lỗi; liệt kê ba thông tin cần tìm khi debug. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Integrating LangSmith for LangChain Application Tracing**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

<a id="bai-09"></a>

## Bài 09 — LangChain LCEL Fundamentals Quiz

> **Thể loại gốc:** Trắc nghiệm. **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **LangChain LCEL Fundamentals Quiz** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *LangChain LCEL Fundamentals Quiz*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Áp dụng bài **LangChain LCEL Fundamentals Quiz** vào dự án: Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **LangChain LCEL Fundamentals Quiz**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

### Bài kiểm tra trắc nghiệm

**Số câu:** 6 • **Điểm tối đa:** 6 • **Đạt:** từ 80%

Làm bài mà chưa mở phần đáp án. Mỗi câu chọn đúng **một** phương án.

**Câu 1. LCEL thường dùng toán tử nào để ghép runnable?**

- A. &
- B. +
- C. >>
- D. |

**Câu 2. Đầu ra phổ biến của ChatOpenAI.invoke là gì?**

- A. DocumentLoader
- B. ToolNode
- C. AIMessage
- D. Chroma

**Câu 3. StrOutputParser có tác dụng chính là gì?**

- A. Triển khai server
- B. Chuyển đầu ra model thành chuỗi
- C. Tạo embedding
- D. Tìm kiếm web

**Câu 4. Nên đặt API key ở đâu?**

- A. Biến môi trường
- B. Trong Git public
- C. Ngay trong prompt
- D. Trong URL trả lời

**Câu 5. Vì sao cần LangSmith tracing?**

- A. Thay model
- B. Lưu database vector
- C. Tạo giao diện
- D. Theo dõi các bước và lỗi

**Câu 6. Điều gì cần kiểm tra khi đổi provider?**

- A. Chỉ tên model
- B. Chỉ tên file
- C. Tool support, chi phí và rate limit
- D. Chỉ màu giao diện

<details>
<summary>Đáp án và giải thích</summary>

1. **D. |** — LCEL thường dùng toán tử nào để ghép runnable?
2. **C. AIMessage** — Đầu ra phổ biến của ChatOpenAI.invoke là gì?
3. **B. Chuyển đầu ra model thành chuỗi** — StrOutputParser có tác dụng chính là gì?
4. **A. Biến môi trường** — Nên đặt API key ở đâu?
5. **D. Theo dõi các bước và lỗi** — Vì sao cần LangSmith tracing?
6. **C. Tool support, chi phí và rate limit** — Điều gì cần kiểm tra khi đổi provider?

</details>

#### Bài tập bổ sung

Viết một ví dụ kiểm chứng lại hai câu mà bạn còn phân vân; ghi nhận xét trong `study-notes.md`.

---

<a id="bai-10"></a>

## Bài 10 — LangChain Model Switching: Groq API Integration

> **Thể loại gốc:** Bài lập trình. **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **LangChain Model Switching: Groq API Integration** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Chat model là giao diện trao đổi messages với nhà cung cấp. Khi đổi nhà cung cấp, phải kiểm tra độ tương thích tool calling, structured output, context length, token price, rate limit và việc xử lý dữ liệu; không chỉ thay tên model.

**Góc nhìn 2.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *LangChain Model Switching: Groq API Integration*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Đổi provider hoặc model rồi ghi bảng so sánh latency, chất lượng và lỗi trên 10 input giống nhau.
- **B — Xây dựng:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **LangChain Model Switching: Groq API Integration**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Không nên kết luận model A tốt hơn chỉ từ một câu hỏi; cần bộ thử cố định.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

### Nhiệm vụ coding: đổi provider sang Groq

**Đề bài.** Tái sử dụng một ứng dụng `prompt | model | parser`, chuyển provider từ OpenAI sang Groq. Mục tiêu là giữ nguyên contract `input → output`, không thay đổi nội dung prompt.

#### Yêu cầu

1. Tạo `.env` cục bộ với `GROQ_API_KEY`; không commit hoặc hiển thị khóa.
2. Cài `langchain-groq` và `python-dotenv`, lưu danh sách phiên bản.
3. Cùng một 5 input, chạy hai provider và đo latency, lỗi, đầu ra.
4. Báo cáo sự khác biệt về model, context window, khả năng tool-call và chi phí.

#### Mã gợi ý

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_groq import ChatGroq

prompt = ChatPromptTemplate.from_template("Tóm tắt bằng 2 câu: {text}")
model = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)
chain = prompt | model | StrOutputParser()
print(chain.invoke({"text": "Agents là workflow dùng model và tools."}))
```

**Lưu ý:** tên model trên là ví dụ để minh họa SDK, có thể hết hỗ trợ hoặc cần đổi theo danh mục model hiện hành của Groq. Bài thực hành cần API key thật để chạy và có thể phát sinh phí.

#### Chấm điểm

- 3 điểm: code chạy được, xử lý thiếu key rõ ràng.
- 3 điểm: cùng test set và lưu log hợp lệ.
- 2 điểm: không đưa secrets vào Git/trace.
- 2 điểm: kết luận dựa trên dữ liệu đo thực tế.

---

<a id="bai-11"></a>

## Bài 11 — Semantic Versioning in LangChain

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

### 1. Mục tiêu bài học

- Hiểu và giải thích được **Semantic Versioning in LangChain** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

### 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Góc nhìn 2.** Semantic versioning thường dùng MAJOR.MINOR.PATCH. Với LangChain, cần đọc migration guide trước khi nâng phiên bản; một số API agent cũ đã deprecated.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

### 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Semantic Versioning in LangChain*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

### 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

### 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Ghi file phiên bản phụ thuộc và mô tả cách kiểm tra breaking changes trước khi nâng cấp. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

### 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Semantic Versioning in LangChain**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

### 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

### 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

