# Lộ trình học và mục tiêu đầu ra

## 1. Học theo tiến trình

| Module | Số bài | Sản phẩm trung gian |
| --- | ---: | --- |
| Module 01 — Nền tảng và kiến trúc | 3 | Sơ đồ kiến trúc và cây thư mục |
| Module 02 — Streaming, model và chat | 2 | Streaming chat đầu tiên |
| Module 03 — Server Actions và AI SDK RSC | 3 | So sánh RSC với SDK UI |
| Module 04 — Tool calling và Zod | 3 | Tool schemas và approval flow |
| Module 05 — Các component giao diện sinh tạo | 3 | Grid, wallet, airdrop, ABI previews |
| Module 06 — Tích hợp React UI và chất lượng | 2 | UI hoạt động và test matrix |
| Module 07 — Capstone và đánh giá | 2 | Ứng dụng end-to-end và rubric |

## 2. Hình thức đánh giá

- Cuối mỗi bài: thực hành và 5 câu hỏi ôn tập có đáp án và giải thích.
- Module 04: tự thiết kế schema chặt và giải thích các side effects.
- Module 07: triển khai ứng dụng tích hợp streaming + Generative UI, sau đó thực hiện rubric 100 điểm.

## 3. Bảng ghép công nghệ với bài học

| Công nghệ | Mục đích | Nơi học |
| --- | --- | --- |
| Next.js App Router | Route Handler, layout, client boundary | 01, 02, 06 |
| Vercel AI SDK Core | Model call, streamText, tool execute | 01, 02, 04 |
| AI SDK UI | useChat, UIMessage parts | 02, 03, 07 |
| AI SDK RSC | createAI, streamUI, Server Actions đời cũ | 01, 03 |
| OpenAI / Anthropic | Model adapters | 02 |
| Zod | Validation và contract | 04, 05 |
| React | Dynamic components | 05, 07 |
| Chakra UI / Tremor | Theme, dashboard/chart (tùy chọn) | 05, 06 |

## 4. Kết quả sau khóa

Người học xây được một chatbot trả text hoặc grid component theo yêu cầu; biết quy trình mở rộng sang chart, airdrop/ABI; hiểu và phân biệt API RSC lịch sử với UI production; biết bảo vệ quyền truy cập, validation và thao tác tài sản.
