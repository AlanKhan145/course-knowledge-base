# XÂY DỰNG GENERATIVE UI VỚI NEXT.JS VÀ VERCEL AI SDK

> Khóa học thực hành bằng tiếng Việt · Lộ trình kiến trúc Generative UI: Next.js, AI SDK Core/UI/RSC, OpenAI/Anthropic, Zod, React, Chakra UI, Tremor.

## Mục tiêu

Xây chatbot không chỉ trả lời bằng văn bản mà còn lựa chọn các công cụ để hiển thị grid dashboard, biểu đồ ví, airdrop card và giao diện đọc ABI. Học cách tổ chức tool, validate tham số, streaming giao diện và giữ an toàn các thao tác có side effects.

## Đối tượng và yêu cầu đầu vào

Biết JavaScript/TypeScript và React ở mức cơ bản; hiểu async/await, HTTP POST và JSON. Cần Node.js tương thích với phiên bản Next.js cài thực tế, tài khoản provider LLM và API key để chạy lab có model. Các bài có ví dụ mock vẫn học được khi chưa có API key.

## Hai hướng kiến trúc cần phân biệt

- **Dành cho việc đọc hiểu mã Next.js 14:** `app/actions.tsx`, `createAI`, `streamUI`, `getMutableAIState`, `generate` sinh React node qua AI SDK RSC. Phần này giải thích cách dự án lịch sử hoạt động.
- **Dành cho dự án mới:** `app/api/chat/route.ts`, `streamText`, `tool({inputSchema, execute})`, `useChat`, `message.parts`; UI React render từ tool data. Tài liệu chính thức hiện xem RSC là experimental và khuyến nghị AI SDK UI cho production.

Không trộn code từ hai hướng API rồi kỳ vọng chạy ngay. Model ID, UI packages và Next.js version cần chọn theo dependency thực tế.

## Lộ trình học

### Module 01 — Nền tảng và kiến trúc

- [Generative UI: Từ chatbot văn bản tới giao diện phản hồi theo ngữ cảnh](01-Nen-tang-va-kien-truc/01-generative-ui-la-gi.md)
- [Ba lớp AI SDK: Core, UI và RSC](01-Nen-tang-va-kien-truc/02-ba-lop-ai-sdk.md)
- [Kiến trúc Next.js App Router và cấu trúc mã nguồn](01-Nen-tang-va-kien-truc/03-nextjs-monorepo-structure.md)

### Module 02 — Streaming, model và chat

- [Model providers và truyền văn bản theo thời gian thực](02-Streaming-va-chat/01-model-provider-streamtext.md)
- [Tạo chat React với useChat, message parts và trạng thái](02-Streaming-va-chat/02-usechat-message-parts.md)

### Module 03 — Server Actions và AI SDK RSC

- [Server Actions và AI provider trong Next.js 14](03-RSC-va-Server-Actions/01-server-actions-ai-provider.md)
- [Quản lý AI state, UI state và sinh UI bằng streamUI](03-RSC-va-Server-Actions/02-ai-state-ui-state-streamui.md)
- [Từ kiến trúc RSC cũ sang AI SDK UI hiện đại](03-RSC-va-Server-Actions/03-migration-rsc-to-ui.md)

### Module 04 — Tool calling và Zod

- [Anatomy của AI Tool: description, Zod schema và execute](04-Tools-va-Zod/01-tool-anatomy-zod.md)
- [Điều phối tool theo ngữ cảnh: Không biến chatbot thành workflow cứng](04-Tools-va-Zod/02-tool-selection-context.md)
- [Tool nhạy cảm, human-in-the-loop và bảo mật giao dịch](04-Tools-va-Zod/03-sensitive-tools-human-loop.md)

### Module 05 — Các component giao diện sinh tạo

- [Thiết kế Dynamic Grid Dashboard theo yêu cầu tự nhiên](05-Generative-Components/01-dynamic-grid-dashboard.md)
- [Wallet Balances: Tạo Donut Chart và phân biệt dữ liệu thật với mock](05-Generative-Components/02-wallet-donut-chart.md)
- [Airdrop Cards và giao diện tự sinh từ ABI hợp đồng thông minh](05-Generative-Components/03-airdrop-cards-contract-abi.md)

### Module 06 — Tích hợp React UI và chất lượng

- [Kết nối layout, theme, shortcut và ô nhập chat](06-UI-Integration/01-app-layout-providers-shortcuts.md)
- [Debugging, kiểm thử và quan sát hệ thống Generative UI](06-UI-Integration/02-testing-debugging-observability.md)

### Module 07 — Capstone và đánh giá

- [Dự án cuối khóa: Xây dựng Chat + Generative Grid UI](07-Capstone/01-build-complete-app.md)
- [Đánh giá cuối khóa: Thiết kế Generative UI an toàn và mở rộng](07-Capstone/02-assessment-rubric.md)

## Phương pháp học

Mỗi bài độc lập: mục tiêu → giải thích chuyên sâu → code/sơ đồ → thực hành → 5 câu trắc nghiệm có đáp án và giải thích. Học theo thứ tự module để hoàn thành capstone. Mỗi đoạn code có thể là ví dụ minh họa độc lập; đối với dự án chạy được, tập hợp đúng các file trong bài capstone.

## Cấu trúc thư mục

```text
README.md
LO_TRINH.md
THUAT_NGU.md
01-Nen-tang-va-kien-truc/
02-Streaming-va-chat/
03-RSC-va-Server-Actions/
04-Tools-va-Zod/
05-Generative-Components/
06-UI-Integration/
07-Capstone/
```

## Tài liệu kỹ thuật để đối chiếu

- [AI SDK Next.js App Router](https://ai-sdk.dev/docs/getting-started/nextjs-app-router)
- [AI SDK UI - Generative User Interfaces](https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces)
- [AI SDK RSC - Migration](https://ai-sdk.dev/docs/ai-sdk-rsc/migrating-to-ui)
- [Tool Calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling)
- [Zod](https://zod.dev/)

**Lưu ý:** Những đoạn nói về ví, airdrop và mua crypto là kiến thức kỹ thuật UI; demo không gửi giao dịch thật và không khẳng định có dữ liệu thị trường trực tiếp.
