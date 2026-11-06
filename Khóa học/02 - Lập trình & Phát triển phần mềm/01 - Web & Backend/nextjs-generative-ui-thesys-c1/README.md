# KHÓA HỌC: GENERATIVE UI VỚI NEXT.JS, THESYS C1 VÀ OPENUI

> Giáo trình tiếng Việt, biên soạn thành module/bài Markdown độc lập. Cập nhật ngày 06/11/2026.

## 1. Giới thiệu

Học cách biến chatbot trả văn bản thành trải nghiệm có biểu đồ, thẻ KPI, bảng, form, quiz, nút hành động và các component React tùy chỉnh. Trọng tâm là đường đi giữa Next.js, backend API, Thesys C1 và dữ liệu ứng dụng, sau đó phát triển một AI Data Copilot có thể dùng dữ liệu CSV thật.

Khóa học bám theo tuyến nội dung **“This Generative UI API makes your Next.js AI app 10x better (+ mcp-ui)”** của ByteGrad (13/11/2025) và mở rộng bằng lab, tiêu chí kiểm thử và nguồn tài liệu chính thức. Những nhận xét quảng bá hay ưu đãi trong video không được coi là thông số cố định.

**Quan trọng về phiên bản:** C1 hiện là tài liệu legacy; trang docs Thesys khuyến nghị dự án mới bắt đầu từ OpenUI. Những bài C1 giảng lại cơ chế và SDK để có thể thực hành video; hãy xem [OpenUI docs](https://www.openui.com/docs) cho dự án mới. API/model/giá có thể thay đổi; kiểm tra console trước khi chạy.

## 2. Ai nên học và điều kiện cần

- Đã biết React components, hooks cơ bản và JavaScript/TypeScript.
- Đã làm quen Next.js App Router hoặc sẵn sàng đọc `app/page.tsx`, `app/api/.../route.ts`.
- Có Node.js/npm và tài khoản API phù hợp; không cần nhập API key vào tài liệu.

## 3. Lộ trình module

- [Nền tảng Generative UI và MCP-UI](01_Nen_tang_Generative_UI/README.md) — 3 bài
- [Thiết lập Next.js và Thesys C1](02_Thiet_lap_Nextjs_Thesys/README.md) — 3 bài
- [Xây dựng trải nghiệm trò chuyện](03_Xay_dung_Chat_UI/README.md) — 3 bài
- [Trực quan hóa và tình huống ứng dụng](04_Truc_quan_hoa_va_Ung_dung/README.md) — 5 bài
- [Tương tác, custom actions và custom components](05_Tuong_tac_va_Mo_rong/README.md) — 4 bài
- [Đồ án, vận hành và lộ trình OpenUI](06_Do_an_Triển_khai_OpenUI/README.md) — 4 bài

Tổng số: **6 module, 22 bài học**, mỗi bài có mục tiêu, giải thích, ví dụ, bài thực hành và 5 câu trắc nghiệm có đáp án.

## 4. Cách học đề xuất

Học theo thứ tự module. Mỗi bài: đọc 15–30 phút theo tốc độ cá nhân; tự diễn giải lại kiến trúc; thử code mẫu ở môi trường dev; ghi bug, chụp ảnh kết quả, làm trắc nghiệm. Thời gian thực tế phụ thuộc trình độ và việc dịch vụ C1 legacy còn khả dụng. Không đánh dấu hoàn tất nếu chưa xử lý ít nhất một tình huống lỗi.

## 5. Liên hệ các mốc video ByteGrad

| Thời điểm | Nội dung | Nơi học |
| --- | --- | --- |
| 00:00 | Intro | Module 01, bài 01 |
| 01:36 | MCP-UI | Module 01, bài 03 |
| 03:08 | Thesys C1 | Module 01, bài 02 |
| 04:32 | Playground | Module 02, bài 01 |
| 05:11 | How it works | Module 01, bài 02 |
| 06:14 | Next.js + Thesys setup | Module 02, bài 02–03 |
| 09:30 | C1Chat vs C1Component | Module 03, bài 01 |
| 10:28 | Customize chat | Module 03, bài 03 |
| 11:22 | Sales CSV data | Module 04, bài 02 |
| 12:04 | Ecommerce data | Module 04, bài 03 |
| 12:30 | Quiz / Edtech | Module 04, bài 04 |
| 13:23 | Custom components | Module 05, bài 03 |
| 13:41 | Custom actions | Module 05, bài 02 |
| 13:57 | Other demos | Module 04, bài 05; Module 06 |

## 6. Sản phẩm cuối khóa

AI Data Copilot dùng Next.js với chat, dữ liệu CSV được backend kiểm tra, KPI/biểu đồ/bảng phản hồi, form chọn bộ lọc, action xuất báo cáo và các test bảo mật. Tài liệu chấm chi tiết ở Module 06.

## 7. Tài liệu tham khảo chính thức

- [Thesys C1 archive / index](https://docs.thesys.dev/llms.txt)
- [C1 quickstart](https://docs.thesys.dev/legacy/guides/setup)
- [Backend API](https://docs.thesys.dev/legacy/guides/implementing-api)
- [C1Chat](https://docs.thesys.dev/legacy/guides/conversational/getting-started)
- [React renderer](https://docs.thesys.dev/legacy/guides/rendering-ui)
- [Custom actions](https://docs.thesys.dev/legacy/guides/custom-actions)
- [Custom components](https://docs.thesys.dev/legacy/guides/custom-components)
- [OpenUI](https://www.openui.com/docs)

## 8. Nguyên tắc chất lượng

Không đồng nhất C1 với OpenUI; không sao chép mã model không còn hỗ trợ; không coi UI đẹp là dữ liệu đúng; không lưu secret ở frontend; mọi giao dịch và thay đổi dữ liệu phải qua backend kiểm soát quyền; các ví dụ CSV/số liệu giả phải ghi rõ là dữ liệu minh họa.
