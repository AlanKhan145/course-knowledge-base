# Section 07 - Layer 3: ReAct Prompt - Nền tảng của Function Calling

## 1. Mục tiêu của module

Module này xây dựng nền tảng để hiểu cách một AI agent có thể lựa chọn và sử dụng công cụ chỉ bằng **ReAct prompt**, mô tả công cụ, phân tích đầu ra văn bản và vòng lặp agent, thay vì dựa vào cơ chế function calling native của mô hình.

Sau khi hoàn thành module, người học có thể:

- giải thích vai trò của ReAct trong kiến trúc agent;
- mô tả cấu trúc `Question → Thought → Action → Action Input → Observation → Final Answer`;
- tạo mô tả công cụ động từ metadata của hàm Python;
- giải thích vai trò của `stop sequence` khi điều khiển đầu ra của LLM;
- mô tả cách ghép prompt, scratchpad, parser và tool execution thành một agent loop;
- phân tích các trade-off khi gọi công cụ thủ công bằng đầu ra văn bản.

## 2. Cấu trúc thư mục

```text
Section_07_ReAct_Prompt_Chuan_Hoa/
├── README.md
├── 01_Ly_thuyet/
│   ├── 001 - Nen tang ReAct va Function Calling.md
│   ├── 002 - Tao mo ta cong cu dong bang Python.md
│   ├── 003 - Hieu ReAct Prompt va Agent khong Function Calling.md
│   ├── 004 - Trien khai Manual Tool Calling cho LLM.md
│   └── 005 - Agent Loop voi ReAct Prompt.md
└── 02_Bai_tap/
    ├── 001 - Bai tap ReAct va Function Calling.md
    ├── 002 - Bai tap Dynamic Tool Descriptions.md
    ├── 003 - Bai tap Phan tich ReAct Prompt.md
    ├── 004 - Bai tap Manual Tool Calling.md
    ├── 005 - Bai tap Agent Loop.md
    └── 006 - Agents Interview Assessment.md
```

## 3. Lộ trình học

| Thứ tự | Nội dung | Loại | Thời lượng nguồn |
|---|---|---|---:|
| 001 | Nền tảng ReAct và Function Calling | Lý thuyết | 5 phút |
| 002 | Tạo mô tả công cụ động bằng Python | Lý thuyết | 7 phút |
| 003 | Hiểu ReAct Prompt và agent không Function Calling | Lý thuyết | 8 phút |
| 004 | Triển khai Manual Tool Calling cho LLM | Lý thuyết | 6 phút |
| 005 | Agent Loop với ReAct Prompt | Lý thuyết | 15 phút |
| 006 | Agents Interview | Assessment | Quiz |

Tổng thời lượng được liệt kê trong nguồn: **41 phút**, chưa tính phần bài tập tự luyện.

## 4. Cách học đề xuất

Học lần lượt từ 001 đến 005 vì mỗi bài bổ sung một thành phần của cùng một hệ thống. Sau mỗi bài lý thuyết, thực hiện file bài tập có cùng số thứ tự trước khi chuyển sang bài tiếp theo.

Không nên chỉ sao chép code. Mục tiêu quan trọng của module là hiểu được luồng:

```text
Mô tả công cụ
      ↓
ReAct Prompt
      ↓
LLM chọn Action
      ↓
Phân tích đầu ra
      ↓
Thực thi Tool
      ↓
Observation
      ↓
Scratchpad
      ↓
Lặp lại hoặc Final Answer
```

Kết thúc module bằng `006 - Agents Interview Assessment.md` để tự kiểm tra khả năng giải thích kiến thức theo góc nhìn kỹ sư AI.
