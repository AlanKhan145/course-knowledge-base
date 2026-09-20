# Section 03 — THE GIST of AI Agents

## 1. Tổng quan

Module này giới thiệu nền tảng của AI Agent trong hệ sinh thái LangChain: cách phân biệt agent với chain, cách LLM lựa chọn công cụ, cách một vòng lặp ReAct vận hành, cách tích hợp tìm kiếm web bằng Tavily và cách ép đầu ra của agent về một schema có cấu trúc bằng Pydantic.

Module gồm **9 bài**, tổng thời lượng được liệt kê là **54 phút**.

## 2. Cấu trúc thư mục

```text
section-03-the-gist-of-ai-agents-standardized/
├── README.md
├── 01-ly-thuyet/
│   ├── 001-ai-agent-la-gi.md
│   ├── 002-ai-job-search-agent.md
│   ├── 003-tu-chain-den-react-agent.md
│   ├── 004-thiet-lap-moi-truong-langchain-search-agent.md
│   ├── 005-tao-langchain-agent-dau-tien.md
│   ├── 006-vong-thuc-thi-cua-langchain-agent.md
│   ├── 007-tich-hop-tavily-search.md
│   ├── 008-structured-output-voi-pydantic.md
│   └── 009-provider-strategy-va-tool-strategy.md
└── 02-bai-tap/
    ├── 001-bai-tap-ai-agent-va-chain.md
    ├── 002-bai-tap-thiet-ke-ai-job-search-agent.md
    ├── 003-bai-tap-react-agent.md
    ├── 004-bai-tap-thiet-lap-moi-truong.md
    ├── 005-bai-tap-tao-agent-va-tool.md
    ├── 006-bai-tap-doc-agent-execution-loop.md
    ├── 007-bai-tap-tavily-search.md
    ├── 008-bai-tap-pydantic-structured-output.md
    └── 009-bai-tap-structured-output-strategy.md
```

## 3. Thứ tự học đề xuất

| Bài | Lý thuyết | Thời lượng |
| --- | --- | ---: |
| 001 | AI Agent là gì? Tổng quan cấp cao | 5 phút |
| 002 | Sản phẩm sẽ xây dựng: AI Job Search Agent | 4 phút |
| 003 | Từ chain đến ReAct Agent | 3 phút |
| 004 | Thiết lập môi trường cho LangChain Search Agent | 6 phút |
| 005 | Tạo LangChain Agent đầu tiên: Tool và LLM | 8 phút |
| 006 | Từ truy vấn đến câu trả lời: vòng thực thi của agent | 7 phút |
| 007 | Tích hợp tìm kiếm thực tế bằng Tavily | 9 phút |
| 008 | Structured Output với Pydantic | 9 phút |
| 009 | Provider Strategy và Tool Strategy | 3 phút |

Học mỗi file trong `01-ly-thuyet` trước, sau đó làm file cùng số thứ tự trong `02-bai-tap`.

## 4. Kết quả đầu ra của module

Sau module này, người học có thể:

- phân biệt luồng điều khiển cố định của chain với luồng quyết định động của agent;
- mô tả vòng lặp Reason → Act → Observe của kiến trúc ReAct;
- tạo một tool từ hàm Python và cung cấp tool cho agent;
- đọc được chuỗi message hình thành trong một lần thực thi agent;
- tích hợp tìm kiếm web bằng Tavily;
- theo dõi quá trình thực thi bằng LangSmith;
- định nghĩa structured output bằng Pydantic;
- phân biệt Provider Strategy và Tool Strategy khi tạo đầu ra có cấu trúc.
