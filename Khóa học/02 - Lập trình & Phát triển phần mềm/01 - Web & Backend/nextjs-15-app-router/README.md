# KHÓA HỌC NEXT.JS 15 — APP ROUTER TỪ CƠ BẢN ĐẾN NÂNG CAO

**Ngôn ngữ:** Tiếng Việt · **Lớp học:** 92 bài · **Module:** 10 · **Video:** 6 giờ 54 phút 09 giây · **Hướng phát triển:** TypeScript / React 19 / App Router / Backend API / Server Actions / Clerk / Deploy.

> **Nguồn:** Video [Next.js Full Tutorial — Beginner to Advanced của Codevolution/Vishwas](https://www.youtube.com/watch?v=k7o9R6eaSes) và bản transcript người học cung cấp. Đây là **giáo trình học lại có cấu trúc**, không phải tài liệu phát hành chính thức của Next.js. Phần lời giảng trong từng bài là bản chép tự động, có lỗi nhận dạng nên phần lý thuyết đã được biên tập riêng.

## Mục tiêu đầu ra

Sau khi hoàn thành, học viên có thể:

1. Tạo ứng dụng Next.js 15 TypeScript từ đầu, hiểu file routing và nested layouts.
2. Xây hệ thống navigation, metadata, loading/error UX, modal routes.
3. Xây Route Handlers GET/POST/PATCH/DELETE, cookies, middleware và hiểu cache.
4. Chọn hợp lý client/server, RSC, Suspense, dynamic/static và streaming.
5. Lấy dữ liệu từ API/DB, làm CRUD bằng Server Actions và React 19 hooks.
6. Tích hợp xác thực Clerk, bảo vệ trang/API theo role, triển khai production.

## Lộ trình nội dung

| Module | Tên module | Số bài | Thời gian video | Kết quả |
|---:|---|---:|---|---|
| 01 | [Khởi động với Next.js 15](MODULE_01_Khoi_dong/README.md) | 4 | 00:00:00–00:13:13 | Hiểu framework, tạo dự án TypeScript và đọc cấu trúc App Router. |
| 02 | [Định tuyến và tổ chức file](MODULE_02_Routing/README.md) | 9 | 00:13:13–00:52:09 | Xây URL tĩnh, động, đa cấp và bố trí mã theo quy ước. |
| 03 | [Layouts, điều hướng và SEO](MODULE_03_Layout_Navigation_Metadata/README.md) | 10 | 00:52:09–01:36:56 | Thiết kế giao diện chia sẻ, điều hướng, metadata và template. |
| 04 | [Trạng thái tải, lỗi và routing nâng cao](MODULE_04_Loading_Errors_Advanced_Routes/README.md) | 11 | 01:36:56–02:33:44 | Loading, error boundaries, parallel và intercepting routes. |
| 05 | [Backend API và Middleware](MODULE_05_Route_Handlers/README.md) | 12 | 02:33:44–03:18:55 | Triển khai HTTP handlers, query, cookie, header, redirect, cache và middleware. |
| 06 | [Rendering và React Server Components](MODULE_06_Rendering_RSC/README.md) | 12 | 03:18:55–04:18:26 | Phân biệt CSR, SSR, static, dynamic và streaming. |
| 07 | [Thiết kế Server/Client Component](MODULE_07_Composition/README.md) | 7 | 04:18:26–04:51:26 | Tổ chức component boundary, provider và thư viện bên thứ ba. |
| 08 | [Data fetching và database](MODULE_08_Data_Fetching/README.md) | 7 | 04:51:26–05:21:47 | Lấy dữ liệu client/server, tối ưu tải song song và kết nối DB. |
| 09 | [Đột biến dữ liệu và form](MODULE_09_Server_Actions/README.md) | 10 | 05:21:47–06:12:06 | Server Actions, form hooks, CRUD và optimistic UI. |
| 10 | [Xác thực, phân quyền và triển khai](MODULE_10_Authentication_Deploy/README.md) | 10 | 06:12:06–06:54:09 | Clerk, bảo vệ tài nguyên, RBAC và đưa ứng dụng lên production. |

## Cách sử dụng bộ tài liệu

- Mỗi **module là một thư mục con** (`MODULE_XX_*`), mỗi **bài học là một file `.md`**.
- Bài học có: mục tiêu, lý thuyết, minh họa code/cây thư mục, thực hành từng bước, bài tập, câu hỏi có gợi ý đáp án, lỗi thường gặp, timestamp và phụ lục bản chép lời tương ứng.
- Có thể học tuần tự hoặc mở module cụ thể để tra cứu. Ưu tiên gõ lại code và thử thay đổi một tình huống.
- Chạy `npm run build` trước khi kết luận rằng demo hoạt động; nhiều vấn đề TypeScript/SSR chỉ bộc lộ ở bước build.
- Với những ví dụ chưa có database/session, phần `TODO` là **minh họa kiến trúc** chứ không phải source CRUD chạy hoàn chỉnh.

## Bắt đầu nhanh

```bash
# Pin major version để bám sát video Next.js 15 (các gói phụ thuộc được resolve lúc chạy)
npx create-next-app@15 nextjs-course --typescript --eslint --app --src-dir
cd nextjs-course
npm run dev
```

Mở http://localhost:3000, sau đó bắt đầu từ [Module 01](MODULE_01_Khoi_dong/README.md).

## Tài nguyên bổ trợ

- [ROADMAP.md](ROADMAP.md) — kế hoạch 6 tuần + checkpoint.
- [GLOSSARY.md](GLOSSARY.md) — từ điển thuật ngữ.
- [CHEATSHEET.md](CHEATSHEET.md) — bảng tra nhanh App Router, HTTP và hooks.
- [CAPSTONE_PROJECT.md](CAPSTONE_PROJECT.md) — đồ án full-stack cuối khóa.
- [SOURCE_NOTES.md](SOURCE_NOTES.md) — nguồn gốc, cách chia transcript, lưu ý sai số.
- [VIDEO_TRANSCRIPT_ORIGINAL.md](VIDEO_TRANSCRIPT_ORIGINAL.md) — transcript nguồn đầy đủ để đối chiếu.
- [Codevolution repo](https://github.com/gopinav/Next.js-15-Tutorials) · [Next.js v15 docs](https://nextjs.org/docs/15) · [Clerk docs](https://clerk.com/docs).

## Lưu ý kỹ thuật 2026

Video ra mắt năm 2025, sử dụng Next.js **15**, do đó tài liệu giữ các quy ước trong video (ví dụ `middleware.ts`). Các phiên bản mới có thể đổi mặc định về cache/routing và tên API. Khi thực hành, **khóa phiên bản Next.js 15** hoặc đối chiếu docs phù hợp; không copy một hướng dẫn Next.js 16+ rồi kết hợp tùy tiện với project v15. Secret trong `.env.local` tuyệt đối không commit.
