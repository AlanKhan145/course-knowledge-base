# Bài 008 — Structured Output với Pydantic

## 1. Tóm tắt

Text tự do phù hợp để hiển thị cho người dùng, nhưng khó xử lý ổn định trong code. Structured output cho phép agent trả về dữ liệu theo schema định trước, chẳng hạn một Pydantic model. Trong bài này, output gồm `answer` và danh sách `sources`, trong đó mỗi source có URL.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- giải thích vì sao ứng dụng cần structured output;
- định nghĩa schema bằng `BaseModel` và `Field`;
- tạo Pydantic model lồng nhau;
- truyền schema vào `response_format` khi tạo agent;
- lấy object có cấu trúc từ kết quả agent.

## 3. Vì sao text chưa đủ?

Nếu agent chỉ trả một đoạn text, application phải tự phân tích câu trả lời để tìm các trường cần thiết. Cách này dễ vỡ khi model thay đổi cách diễn đạt.

Ví dụ, giao diện có thể cần:

```text
answer
sources[]
  └── url
```

Nếu agent trả đúng schema, backend có thể serialize dữ liệu, frontend có thể render từng trường và code có thể truy cập trực tiếp mà không cần regex hoặc parser tùy chỉnh.

## 4. Pydantic làm gì?

`BaseModel` cho phép định nghĩa schema dữ liệu bằng type hint. `Field` bổ sung metadata như description hoặc default factory.

```python
from pydantic import BaseModel, Field
```

Pydantic hỗ trợ các thao tác quan trọng cho ứng dụng:

- xác thực kiểu;
- parse dữ liệu;
- serialize dữ liệu;
- mô tả rõ cấu trúc output.

Description của field còn giúp model hiểu nội dung cần điền vào trường đó.

## 5. Tạo model `Source`

Mỗi nguồn chỉ cần một URL:

```python
class Source(BaseModel):
    """A source used by the agent."""

    url: str = Field(
        description="URL of the source"
    )
```

Model này sẽ được dùng như một phần tử lồng trong phản hồi lớn hơn.

## 6. Tạo model `AgentResponse`

Phản hồi của agent gồm phần trả lời và danh sách nguồn:

```python
class AgentResponse(BaseModel):
    """Structured response returned by the agent."""

    answer: str = Field(
        description="The agent's answer to the user's question"
    )
    sources: list[Source] = Field(
        default_factory=list,
        description="Sources used to produce the answer"
    )
```

`default_factory=list` đảm bảo khi không có nguồn được cung cấp, `sources` có thể khởi tạo bằng danh sách rỗng thay vì dùng một mutable default trực tiếp.

## 7. Truyền schema vào agent

Schema được cung cấp khi tạo agent thông qua `response_format`:

```python
agent = create_agent(
    model=model,
    tools=tools,
    response_format=AgentResponse,
)
```

Mục tiêu là yêu cầu agent tạo output phù hợp với `AgentResponse` thay vì chỉ trả text tự do.

## 8. Lấy structured response

Sau khi chạy agent, kết quả có thêm trường structured response. Có thể truy cập object đó và dùng như một object Python thông thường.

```python
result = agent.invoke({"messages": messages})
structured = result["structured_response"]

print(structured.answer)
for source in structured.sources:
    print(source.url)
```

Điều này phù hợp với các bước tiếp theo như:

- trả JSON từ backend;
- render danh sách source trên UI;
- lưu dữ liệu vào database;
- truyền object sang component khác.

## 9. Pydantic model lồng nhau

Điểm đáng chú ý là `AgentResponse` không chỉ chứa primitive type. Trường `sources` là `list[Source]`, nghĩa là structured output có thể phản ánh cấu trúc dữ liệu nhiều tầng.

```text
AgentResponse
├── answer: str
└── sources: list[Source]
    ├── Source(url=...)
    └── Source(url=...)
```

Cấu trúc này phù hợp với search agent vì một câu trả lời có thể được tổng hợp từ nhiều nguồn.

## 10. Kiểm tra bằng debugger và trace

Structured response có thể được quan sát ở hai nơi:

- debugger của chương trình;
- execution trace.

Việc kiểm tra cả hai giúp xác nhận agent thực sự trả object đúng schema, không chỉ hiển thị một đoạn text trông giống JSON.

## 11. Tổng kết

Structured output giúp nối agent với application code một cách ổn định. Pydantic cung cấp schema, validation và serialization; `response_format` đưa schema đó vào quá trình tạo agent; còn `structured_response` cho phép lấy kết quả dưới dạng object có thể xử lý bằng chương trình.
