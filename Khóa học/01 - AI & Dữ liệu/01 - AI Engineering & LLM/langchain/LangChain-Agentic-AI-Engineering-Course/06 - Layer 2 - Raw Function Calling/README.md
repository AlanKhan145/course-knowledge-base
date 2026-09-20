# Section 06 - Layer 2 - Raw Function Calling

Phần này bóc tách các abstraction của LangChain để quan sát trực tiếp cách function calling và agent loop hoạt động khi dùng Ollama Python SDK.

- Số bài nội dung chính: 4
- Thời lượng lý thuyết được liệt kê: 16 phút
- Cấu trúc: lý thuyết riêng, bài tập/đánh giá riêng

## 1. Mục tiêu của section

Sau khi hoàn thành, người học có thể:

- mô tả tool cho LLM bằng JSON schema;
- giải thích cách Ollama chuyển Python function thành tool;
- xây dựng một ReAct agent loop bằng raw Ollama SDK;
- đọc và thực thi `tool_calls`;
- đưa observation trở lại vòng lặp;
- phân tích những phần LangChain tự động hóa khi dùng Tool và message abstraction.

## 2. Cấu trúc thư mục

```text
Section_06_Layer_2_Raw_Function_Calling_Standardized/
├── README.md
├── 01 - Ly thuyet/
│   ├── 001 - Manual JSON Schemas vs LangChain Tool Abstraction.md
│   ├── 002 - Building a ReAct Agent Loop with the Raw Ollama SDK.md
│   └── 003 - Recap.md
└── 02 - Bai tap/
    ├── 001 - Manual JSON Schemas vs LangChain Tool Abstraction - Practice.md
    ├── 002 - Building a ReAct Agent Loop with the Raw Ollama SDK - Practice.md
    ├── 003 - Recap - Practice.md
    ├── 004 - Quiz - Raw Function Calling - AI Agent Without LangChain.md
    └── 004 - Quiz - Raw Function Calling - AI Agent Without LangChain - Practice.md
```

## 3. Lý thuyết

1. [001 - Manual JSON Schemas vs LangChain Tool Abstraction](01%20-%20Ly%20thuyet/001%20-%20Manual%20JSON%20Schemas%20vs%20LangChain%20Tool%20Abstraction.md) — 8 phút
2. [002 - Building a ReAct Agent Loop with the Raw Ollama SDK](01%20-%20Ly%20thuyet/002%20-%20Building%20a%20ReAct%20Agent%20Loop%20with%20the%20Raw%20Ollama%20SDK.md) — 7 phút
3. [003 - Recap](01%20-%20Ly%20thuyet/003%20-%20Recap.md) — 1 phút

## 4. Bài tập và đánh giá

1. [Practice 001 - Manual JSON Schemas vs LangChain Tool Abstraction](02%20-%20Bai%20tap/001%20-%20Manual%20JSON%20Schemas%20vs%20LangChain%20Tool%20Abstraction%20-%20Practice.md)
2. [Practice 002 - Building a ReAct Agent Loop with the Raw Ollama SDK](02%20-%20Bai%20tap/002%20-%20Building%20a%20ReAct%20Agent%20Loop%20with%20the%20Raw%20Ollama%20SDK%20-%20Practice.md)
3. [Practice 003 - Recap](02%20-%20Bai%20tap/003%20-%20Recap%20-%20Practice.md)
4. [004 - Quiz - Raw Function Calling - AI Agent Without LangChain](02%20-%20Bai%20tap/004%20-%20Quiz%20-%20Raw%20Function%20Calling%20-%20AI%20Agent%20Without%20LangChain.md)
5. [Practice 004 - Bài thực hành tổng hợp](02%20-%20Bai%20tap/004%20-%20Quiz%20-%20Raw%20Function%20Calling%20-%20AI%20Agent%20Without%20LangChain%20-%20Practice.md)

## 5. Thứ tự học đề xuất

```text
Lý thuyết 001
    ↓
Practice 001
    ↓
Lý thuyết 002
    ↓
Practice 002
    ↓
Recap 003
    ↓
Practice 003
    ↓
Quiz 004
    ↓
Practice tổng hợp 004
```

## 6. Checklist học tập

- [ ] Giải thích được vì sao tool cần schema hoặc metadata.
- [ ] Tự viết được schema cơ bản cho `get_product_price`.
- [ ] Hiểu vai trò của Google-style docstring khi truyền trực tiếp Python function cho Ollama.
- [ ] Xây dựng được `tools_dict`.
- [ ] Đọc được function name và arguments từ raw Ollama tool call.
- [ ] Thực thi tool và đưa observation trở lại LLM.
- [ ] Xác định đúng điều kiện dừng của agent loop.
- [ ] Phân tích được lợi ích của LangChain abstraction khi chuyển provider.
- [ ] Hoàn thành quiz và bài thực hành tổng hợp mà không sao chép từng dòng implementation mẫu.
