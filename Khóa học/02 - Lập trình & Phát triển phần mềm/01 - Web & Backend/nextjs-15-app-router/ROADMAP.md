# Lộ trình học Next.js 15 trong 6 tuần

## Tuần 1 — Nền tảng và routing
Học Module 01–02, làm website có /, /about, /products, /products/[productId], /docs/[[...slug]]. Cuối tuần giải thích được convention `page.tsx` và `params` Promise trong v15.

## Tuần 2 — Layout, navigation và lỗi
Học Module 03–04, tạo dashboard có nested layout, nav active, SEO metadata, loading skeleton, error boundary và modal dùng parallel + intercepting routes. Kiểm tra cả client navigation và hard refresh.

## Tuần 3 — Backend API
Học Module 05, xây endpoints REST `GET /api/products`, `POST /api/products`, `PATCH /api/products/[id]`, `DELETE /api/products/[id]`. Dùng `curl` hoặc Postman test 200/201/204/400/401/403/404.

## Tuần 4 — Rendering và composition
Học Module 06–07, so sánh Server Component với Client Component; tạo một trang có phần nhanh render trước và phần chậm streaming sau. Kiểm tra client bundle và hoạt động không có quyền truy cập secrets.

## Tuần 5 — Database và form
Học Module 08–09, nối PostgreSQL/SQLite, thực hiện CRUD với Server Actions, useFormStatus/useActionState và optimistic update. Kiểm tra validation, ownership và revalidation.

## Tuần 6 — Auth và production
Học Module 10, thêm Clerk, route protection, role user/admin, hồ sơ người dùng, deploy và quan sát logs. Kiểm tra end-to-end từ đăng nhập, tạo/sửa/xóa dữ liệu đến đăng xuất.

## Phương pháp ôn luyện (lặp lại cho mỗi tuần)
- Ngày 1–2: học khái niệm và code theo video.
- Ngày 3–4: tự xây lại không nhìn mã, thay dữ liệu và route.
- Ngày 5: test lỗi, TypeScript, form, quyền truy cập.
- Ngày 6: hoàn thiện mini-project và viết README.
- Ngày 7: tự giải thích lại từ trí nhớ + kiểm tra theo checklist.

## Mốc tốt nghiệp
- Có app Next.js chạy production và repo có hướng dẫn cài đặt.
- Có DB schema, API và Server Actions được validate/auth.
- Có unit/integration test cho logic quan trọng và smoke test deployment.
- Có mô tả kiến trúc RSC, caching và quyết định bảo mật.
