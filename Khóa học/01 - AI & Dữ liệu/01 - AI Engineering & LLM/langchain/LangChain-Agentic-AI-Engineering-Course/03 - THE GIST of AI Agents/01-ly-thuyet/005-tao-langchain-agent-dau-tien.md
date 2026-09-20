# Bài 005 — Tạo LangChain Agent đầu tiên: Tool và LLM

## 1. Tóm tắt

Một agent tối thiểu cần hai thành phần: **model** dùng để suy luận và **tool** dùng để thực hiện hành động. Trong LangChain, một hàm Python có thể được chuyển thành tool bằng decorator `@tool`. Metadata của hàm như tên, type hint và docstring rất quan trọng vì model dựa vào chúng để hiểu tool làm gì và cần truyền đối số nào.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- giải thích vai trò của model và tool trong agent;
- chuyển một hàm Python thành LangChain tool;
- giải thích vì sao tên hàm, type hint và docstring ảnh hưởng đến tool calling;
- tạo agent từ model và danh sách tool;
- gọi agent bằng message đầu vào.

## 3. Hai thành phần tối thiểu của agent

Ở mức đơn giản nhất, agent cần:

1. **LLM/model**: reasoning engine quyết định hành động tiếp theo.
2. **Tools**: tập các hàm mà model có quyền yêu cầu runtime thực thi.

```text
Model + Tools → Agent
```

Model không trực tiếp chạy Python hay gọi API. Nó lựa chọn tool và tạo tool call; runtime của agent sau đó mới thực thi hàm thật.

## 4. Tool là gì?

Tool có thể xem là một hàm được đóng gói kèm metadata để model hiểu cách sử dụng. Logic bên trong có thể làm bất kỳ việc gì mà developer cho phép, ví dụ:

- gọi API;
- tìm kiếm web;
- đọc cơ sở dữ liệu;
- thực thi logic Python;
- truy cập một dịch vụ bên ngoài.

Một tool tìm kiếm mẫu có thể bắt đầu từ một hàm Python bình thường:

```python
def search(query: str) -> str:
    """Search the internet and return search results."""
    print(query)
    return "The weather in Tokyo is sunny."
```

Trong giai đoạn đầu, hàm trên chưa tìm kiếm thật. Nó trả về một chuỗi tĩnh để người học tập trung vào cơ chế agent.

## 5. Chuyển hàm Python thành LangChain tool

LangChain cung cấp decorator `@tool`:

```python
from langchain_core.tools import tool

@tool
def search(query: str) -> str:
    """Search the internet and return search results."""
    print(query)
    return "The weather in Tokyo is sunny."
```

Ba thành phần quan trọng là:

- tên tool: `search`;
- type hint của đối số: `query: str`;
- docstring mô tả chức năng.

Model sử dụng metadata này để quyết định khi nào cần gọi tool và đối số nào cần truyền vào.

## 6. Tool calling ở mức khái niệm

Một model hỗ trợ tool calling có thể tạo phản hồi đặc biệt thay vì chỉ trả về text. Phản hồi đó mô tả:

- tool cần gọi;
- các argument của tool.

Ví dụ khái niệm:

```json
{
  "tool": "search",
  "arguments": {
    "query": "weather in Tokyo"
  }
}
```

Đây chưa phải kết quả cuối cùng. Runtime cần đọc yêu cầu này, chạy tool rồi trả kết quả cho model.

## 7. Tạo model và agent

Model được dùng trong bài là `ChatOpenAI`. Agent được tạo từ model và danh sách tool.

```python
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

model = ChatOpenAI()
tools = [search]

agent = create_agent(
    model=model,
    tools=tools,
)
```

Danh sách tool có thể có một hoặc nhiều phần tử. Mỗi tool bổ sung một khả năng mà model có thể lựa chọn.

## 8. Gửi message vào agent

Agent được gọi bằng `invoke()` với dữ liệu đầu vào chứa message của người dùng.

```python
from langchain_core.messages import HumanMessage

result = agent.invoke({
    "messages": [
        HumanMessage(content="What is the weather in Tokyo?")
    ]
})

print(result)
```

Với tool tĩnh ở trên, agent có thể quyết định gọi `search`, nhận chuỗi “The weather in Tokyo is sunny.” rồi sử dụng dữ liệu đó để tạo câu trả lời cuối cùng.

## 9. Vì sao mô tả tool phải rõ?

Nếu tool có tên mơ hồ, docstring không chính xác hoặc type hint không rõ, model sẽ khó chọn đúng tool hoặc tạo đúng argument. Vì vậy, tool definition không chỉ phục vụ Python runtime; nó còn là **giao diện ngôn ngữ** để LLM hiểu khả năng mà developer cung cấp.

Một mô tả tốt nên làm rõ:

- tool thực hiện hành động gì;
- input biểu diễn điều gì;
- output chứa loại dữ liệu nào.

## 10. Tổng kết

Agent đầu tiên có cấu trúc rất đơn giản: một `ChatOpenAI`, một tool `search` và `create_agent()`. Điều quan trọng nhất của bài không phải kết quả thời tiết giả, mà là cách LangChain biến hàm Python thành tool và cho LLM quyền quyết định có gọi tool đó hay không.
