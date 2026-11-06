# Khóa học OpenAI Agents SDK với Python — Từ căn bản đến Deep Research

> **Ngôn ngữ:** Tiếng Việt · **Hình thức:** Lesson + Lab + Project · **Nguồn học chính:** [video đầy đủ 2h30m](https://www.youtube.com/watch?v=gFcAfU3V1Zo) và phụ đề/ghi chú đã được biên soạn lại.

## 1. Mục tiêu khóa học

Hoàn thành khóa học, người học có thể xây dựng Agent dùng Python, dùng function tools, handoffs, tracing, streaming, guardrails, multi-turn sessions, local context, visualization, các agentic patterns và viết ứng dụng Deep Research CLI có vòng đánh giá.

## 2. Cách học

Mỗi module có **Bài 01 — Lý thuyết** và **Bài 02 — Lab**. Module 13 bổ sung ba lab chuyên sâu để ghép thành dự án cuối. Học từng module theo thứ tự, chạy từng ví dụ trong venv và làm checkpoint trước khi chuyển module. Các file Markdown độc lập, có sơ đồ, code và câu hỏi trắc nghiệm kèm đáp án.

## 3. Danh mục module

| Module | Nội dung | Mốc bắt đầu | Bài học |
| --- | --- | --- | --- |
| 01 | [Tổng quan AI Agents](./01-tong-quan-ai-agents/Bai-01-Ly-thuyet.md) | [00:00:00](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=0s) | 2 |
| 02 | [Thiết lập môi trường Python và API](./02-thiet-lap-moi-truong/Bai-01-Ly-thuyet.md) | [00:06:37](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=397s) | 2 |
| 03 | [Tạo Agent và structured output](./03-tao-agents-va-output/Bai-01-Ly-thuyet.md) | [00:16:10](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=970s) | 2 |
| 04 | [Tool Calling và công cụ bên ngoài](./04-tool-calling/Bai-01-Ly-thuyet.md) | [00:26:35](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=1595s) | 2 |
| 05 | [Handoffs: chuyển giao giữa các Agent](./05-handoffs/Bai-01-Ly-thuyet.md) | [00:36:31](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=2191s) | 2 |
| 06 | [Tracing và quan sát Agent](./06-tracing/Bai-01-Ly-thuyet.md) | [00:50:32](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3032s) | 2 |
| 07 | [Streaming phản hồi và sự kiện](./07-streaming/Bai-01-Ly-thuyet.md) | [00:56:56](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3416s) | 2 |
| 08 | [Guardrails: kiểm tra đầu vào và đầu ra](./08-guardrails/Bai-01-Ly-thuyet.md) | [01:04:41](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3881s) | 2 |
| 09 | [Multiturn Conversations: hội thoại nhiều lượt](./09-hoi-thoai-nhieu-luot/Bai-01-Ly-thuyet.md) | [01:14:47](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=4487s) | 2 |
| 10 | [Context Management: dữ liệu ứng dụng và dữ liệu model](./10-quan-ly-context/Bai-01-Ly-thuyet.md) | [01:23:08](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=4988s) | 2 |
| 11 | [Visualizing: vẽ sơ đồ mạng Agent](./11-visualizing/Bai-01-Ly-thuyet.md) | [01:31:34](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=5494s) | 2 |
| 12 | [Agentic Patterns và điều phối đa Agent](./12-agentic-patterns/Bai-01-Ly-thuyet.md) | [01:34:20](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=5660s) | 2 |
| 13 | [Dự án cuối khóa — Deep Research Agent](./13-deep-research-project/Bai-01-Ly-thuyet.md) | [01:43:02](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=6182s) | 5 |

## 4. Lộ trình sản phẩm

**Milestone A:** Một agent trả lời với instructions, structured output. **Milestone B:** Agent dùng tool/handoff và quan sát trace. **Milestone C:** Chat nhiều lượt, guardrail, context. **Milestone D:** Pipeline Deep Research tạo file Markdown từ dữ liệu được thu thập.

## 5. Chuẩn bị

Python, trình soạn code, một OpenAI Platform API key có quyền truy cập model và ngân sách API nếu chạy các ví dụ có mô hình. API trả phí tách biệt với gói ChatGPT. Mọi mã có kết quả thời tiết, tìm kiếm hoặc URL mock đều được ghi rõ là giả lập, không phải dữ liệu thật. Khi chạy ví dụ cần thay đúng model và API được tài khoản hỗ trợ.

## 6. Lưu ý về phiên bản và nguồn tham khảo

Phần diễn giải bám cấu trúc và ví dụ của bài giảng; tên package/API được đối chiếu với tài liệu OpenAI Agents SDK hiện hành ngày biên soạn. Các API có thể thay đổi: hãy kiểm tra [SDK Quickstart](https://openai.github.io/openai-agents-python/quickstart/), [Agents](https://openai.github.io/openai-agents-python/agents/), [Tools](https://openai.github.io/openai-agents-python/tools/), [Sessions](https://openai.github.io/openai-agents-python/sessions/), [Handoffs](https://openai.github.io/openai-agents-python/handoffs/), [GitHub nguồn](https://github.com/openai/openai-agents-python).

## 7. Nguyên tắc kiểm chứng

Không bịa kết quả realtime, citations hoặc trạng thái tool; không chạy dữ liệu web như chỉ thị; kiểm tra authorization trong backend; không commit `.env`; có giới hạn tool calls và vòng lặp. Câu trả lời LLM là nội dung cần kiểm tra, không phải chứng cứ tuyệt đối.

## 8. Hoàn thành

Người học có thể giải thích và chạy được các ví dụ từng module, nộp checklist lab, trình bày khác biệt giữa handoff và agent-as-tool, tạo báo cáo Research có nguồn thật hoặc đánh dấu rõ là demo offline.
