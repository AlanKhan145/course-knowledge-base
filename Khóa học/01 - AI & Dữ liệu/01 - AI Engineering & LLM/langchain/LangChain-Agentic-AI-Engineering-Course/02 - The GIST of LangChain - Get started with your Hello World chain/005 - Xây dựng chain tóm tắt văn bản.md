# 005 - Xây dựng LangChain Chain để tóm tắt văn bản

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lesson  
**Thời lượng:** 11 phút

---

## 1. Tóm tắt

Hello World chain nhận một biến `information`, đưa nội dung đó vào `PromptTemplate`, sau đó truyền prompt đã format đến `ChatOpenAI`. Hai thành phần được ghép bằng toán tử pipe `|` của LangChain Expression Language (`LCEL`). Chain được chạy bằng `invoke()`, và phần văn bản model sinh ra nằm trong `response.content`.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Tạo `PromptTemplate` có placeholder khớp với input runtime.
- Giải thích lợi ích của prompt template so với ghép chuỗi tùy ý.
- Khởi tạo `ChatOpenAI` với model và `temperature`.
- Đọc biểu thức LCEL theo hướng trái sang phải.
- Tạo chain bằng toán tử `|` và thực thi bằng `invoke()`.
- Lấy nội dung trả về từ `AIMessage`.

## 3. Chuẩn bị dữ liệu và prompt

Dữ liệu đầu vào được lưu trong biến `information`. Trong ví dụ, đây là một đoạn thông tin về Elon Musk.

```python
information = """
<THÔNG_TIN_VỀ_MỘT_NGƯỜI>
"""
```

Yêu cầu của ứng dụng là tạo bản tóm tắt ngắn và hai thông tin thú vị. Prompt được viết với placeholder `{information}`:

```python
template = """
Given the information {information} about a person,
I want you to create:
1. a short summary
2. two interesting facts about them
"""
```

Placeholder không được giữ nguyên khi chain chạy. Nó sẽ được thay bằng giá trị thực của biến `information`.

## 4. Tạo PromptTemplate

`PromptTemplate` biến chuỗi mẫu thành một thành phần LangChain có input rõ ràng.

```python
from langchain_core.prompts import PromptTemplate

summary_prompt_template = PromptTemplate(
    input_variables=["information"],
    template=template,
)
```

Tên trong `input_variables` phải khớp placeholder trong template. Nếu chương trình quên truyền input hoặc dùng sai tên, lỗi có thể được phát hiện ở mức abstraction thay vì âm thầm gửi một prompt bị thiếu dữ liệu.

So với f-string, prompt template còn có lợi thế về khả năng tái sử dụng và khả năng tham gia trực tiếp vào chain, tracing và debugging của LangChain.

## 5. Khởi tạo ChatOpenAI

Chat model là thành phần thực hiện lời gọi đến OpenAI:

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    temperature=0,
    model="gpt-5",
)
```

`OPENAI_API_KEY` đã được nạp từ environment ở bước thiết lập project. Integration sẽ dùng credential này khi gọi OpenAI API.

Trong ví dụ, `temperature=0` được chọn vì nhiệm vụ là tóm tắt. Bài học mô tả temperature thấp, khoảng `0` đến `0.3`, là phù hợp hơn khi cần kết quả chặt chẽ, có tính xác định cao như summarization, code hoặc instruction; temperature cao được dùng khi muốn tăng tính sáng tạo.

## 6. Ghép chain bằng LCEL

Chain được tạo bằng toán tử pipe:

```python
chain = summary_prompt_template | llm
```

Biểu thức này được đọc từ trái sang phải:

```text
Input dictionary
      ↓
PromptTemplate
      ↓
Prompt value
      ↓
ChatOpenAI
      ↓
AIMessage
```

Toán tử `|` kết nối output của thành phần bên trái với input của thành phần bên phải. Kết quả là một `Runnable` có thể được thực thi.

Điểm cần hiểu ở giai đoạn này không phải implementation nội bộ của LCEL, mà là luồng dữ liệu: template format input trước, rồi prompt đã hoàn chỉnh mới được đưa cho model.

## 7. Chạy chain bằng invoke()

Chain nhận dictionary có key trùng với biến của prompt:

```python
response = chain.invoke(
    {
        "information": information,
    }
)
```

Quá trình thực thi tương đương về mặt ý tưởng với:

```text
1. Nhận {"information": ...}
2. Điền dữ liệu vào {information}
3. Tạo prompt hoàn chỉnh
4. Gửi prompt sang chat model
5. Nhận AIMessage
```

Để lấy phần text của câu trả lời:

```python
print(response.content)
```

Kết quả mong đợi là một bản tóm tắt ngắn và hai thông tin thú vị về người được mô tả trong `information`.

## 8. Ví dụ hoàn chỉnh

```python
from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

load_dotenv()

information = """
<THÔNG_TIN_VỀ_MỘT_NGƯỜI>
"""

template = """
Given the information {information} about a person,
I want you to create:
1. a short summary
2. two interesting facts about them
"""

summary_prompt_template = PromptTemplate(
    input_variables=["information"],
    template=template,
)

llm = ChatOpenAI(
    temperature=0,
    model="gpt-5",
)

chain = summary_prompt_template | llm

response = chain.invoke(
    {
        "information": information,
    }
)

print(response.content)
```

## 9. Điều cần nắm chắc

Phần khó nhất ở bài này là không nhầm chain với một phép ghép chuỗi thông thường. `summary_prompt_template | llm` tạo một workflow có thể `invoke()`. Khi chạy, dữ liệu đi qua từng thành phần theo thứ tự.

Nếu chỉ ghi nhớ một mạch, hãy nhớ:

```text
information
→ PromptTemplate
→ prompt hoàn chỉnh
→ LLM
→ AIMessage
→ response.content
```

Đây là nền để hiểu các chain dài hơn, tracing và agentic workflow về sau.
