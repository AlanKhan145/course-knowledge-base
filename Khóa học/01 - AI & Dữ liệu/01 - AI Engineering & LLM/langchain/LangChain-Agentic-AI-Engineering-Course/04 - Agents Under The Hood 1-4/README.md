# Section 04 - Agents Under The Hood 1/4

Phần học này bóc tách kiến trúc bên trong của AI agent thông qua một E-Commerce Agent nhỏ. Tổng thời lượng được liệt kê trong nguồn là **16 phút**, gồm 4 bài.

## 1. Cấu trúc thư mục

```text
Agents_Under_The_Hood_1of4_ChuanHoa/
├── README.md
├── 01_Ly_thuyet/
│   ├── 001-Kien-truc-cot-loi-cua-AI-Agent.md
│   ├── 002-Xay-dung-E-Commerce-Agent.md
│   ├── 003-Ly-thuyet-ReAct-Agent-Loop.md
│   └── 004-Thiet-lap-moi-truong-Agent.md
└── 02_Bai_tap/
    ├── 001-Bai-tap-Kien-truc-cot-loi-AI-Agent.md
    ├── 002-Bai-tap-Thiet-ke-E-Commerce-Agent.md
    ├── 003-Bai-tap-ReAct-Agent-Loop.md
    └── 004-Bai-tap-Thiet-lap-moi-truong.md
```

## 2. Thứ tự học đề xuất

1. [Kiến trúc cốt lõi của AI Agent](01_Ly_thuyet/001-Kien-truc-cot-loi-cua-AI-Agent.md)
2. [Bài tập bóc tách kiến trúc AI Agent](02_Bai_tap/001-Bai-tap-Kien-truc-cot-loi-AI-Agent.md)
3. [Xây dựng E-Commerce Agent](01_Ly_thuyet/002-Xay-dung-E-Commerce-Agent.md)
4. [Bài tập thiết kế E-Commerce Agent](02_Bai_tap/002-Bai-tap-Thiet-ke-E-Commerce-Agent.md)
5. [Lý thuyết ReAct và Agent Loop](01_Ly_thuyet/003-Ly-thuyet-ReAct-Agent-Loop.md)
6. [Bài tập mô phỏng ReAct Agent Loop](02_Bai_tap/003-Bai-tap-ReAct-Agent-Loop.md)
7. [Thiết lập môi trường Agent Under The Hood](01_Ly_thuyet/004-Thiet-lap-moi-truong-Agent.md)
8. [Bài tập thiết lập môi trường](02_Bai_tap/004-Bai-tap-Thiet-lap-moi-truong.md)

## 3. Mục tiêu của section

Sau section này, người học cần có thể:

- mô tả các lớp abstraction của một AI agent;
- hiểu E-Commerce Agent dùng hai công cụ để xử lý giá và giảm giá;
- giải thích vòng lặp `Thought → Action → Observation`;
- hiểu vai trò của lịch sử hoặc scratchpad;
- chuẩn bị môi trường LangChain, Ollama và tracing để tự triển khai agent loop.

## 4. Cách học

Không chỉ đọc lý thuyết. Sau mỗi bài, thực hiện ngay file bài tập tương ứng.

Khi bắt đầu code agent, ưu tiên:

- chạy từng bước;
- xem log hoặc trace;
- đối chiếu tool call với observation;
- tự dựng lại ví dụ thay vì chỉ sao chép;
- ghi lại điểm chưa hiểu và cách đã kiểm tra lại.
