# Cheatsheet — LangChain Search Agent

## 1. Thành phần và nhiệm vụ

| Thành phần | Chức năng |
| --- | --- |
| `ChatOpenAI(model=...)` | Model ra quyết định |
| `@tool` | Biến hàm Python thành công cụ có metadata/schema |
| `create_agent(model, tools, response_format=...)` | Tạo vòng lặp agent |
| `agent.invoke({"messages": [...]})` | Chạy tác nhân |
| `AIMessage.tool_calls` | Các yêu cầu gọi công cụ mà LLM tạo |
| `ToolMessage.content` | Observation thực thi tool |
| `TavilyClient.search(query=...)` | SDK tìm kiếm web trực tiếp |
| `TavilySearch` | Tool tích hợp LangChain |
| `Pydantic BaseModel` | Hợp đồng dữ liệu có kiểm tra kiểu |
| `result["structured_response"]` | Câu trả lời đã được parse theo schema |
| `ProviderStrategy` | Native structured output từ provider |
| `ToolStrategy` | Structured output qua tool calling |
| LangSmith tracing | Quan sát trace model/tool/latency |

## 2. Quy trình chuẩn

```text
User request
   │
   ▼
LangChain create_agent
   │       ┌─────────────────┐
   ├──────► LLM tool choice │
   │       └────────┬────────┘
   │                ▼
   │          Tavily Search
   │                ▼
   └────── ToolMessage (URLs, snippets)
                    │
                    ▼
        Pydantic structured output
                    │
                    ▼
        Verify observed URLs → JSON
```

## 3. Tối thiểu để chạy

```bash
uv sync
uv run pytest -q
uv run python -m ai_job_agent --mode mock
# Cần .env có API keys để dùng lệnh tiếp:
uv run python -m ai_job_agent --mode live --tool integrated
```

## 4. Sai lầm cần tránh

1. Nhầm `langchain-tavily` với `tavily-python`.
2. Nhầm `tool_calls` với công cụ đã thực thi thành công.
3. Cho rằng LLM biết thông tin tuyển dụng hiện tại dù không gọi web.
4. Cho rằng `HttpUrl` xác minh được trang đang tồn tại.
5. Cho rằng `ToolStrategy` là công cụ đi tìm kiếm.
6. In key trong terminal/trace hoặc commit `.env`.
7. Dùng `eval` để chạy text do model sinh ra.
8. Kết luận “hiện đang tuyển” chỉ từ một đoạn search snippet.

## 5. Tài liệu chính thức

- https://docs.langchain.com/oss/python/langchain/agents
- https://docs.langchain.com/oss/python/langchain/tools
- https://docs.langchain.com/oss/python/langchain/structured-output
- https://docs.langchain.com/oss/python/integrations/tools/tavily_search
- https://github.com/tavily-ai/tavily-python
