# Module 02 · Bài 09 — LangChain LCEL Fundamentals Quiz

> **Thể loại gốc:** Trắc nghiệm. **Section:** Your First LangChain App  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **LangChain LCEL Fundamentals Quiz** trong bối cảnh module **Xây dựng ứng dụng LangChain đầu tiên**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Đưa vào dự án:** Kết nối một chat model với prompt template, parser, mô hình cục bộ và công cụ tracing.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *LangChain LCEL Fundamentals Quiz*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

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

## 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Áp dụng bài **LangChain LCEL Fundamentals Quiz** vào dự án: Một ứng dụng tóm tắt văn bản có thể thay đổi provider và trace từng lần gọi. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **LangChain LCEL Fundamentals Quiz**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

## Bài kiểm tra trắc nghiệm

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

### Bài tập bổ sung

Viết một ví dụ kiểm chứng lại hai câu mà bạn còn phân vân; ghi nhận xét trong `study-notes.md`.
