# CAPSTONE — FULL-STACK PRODUCT MANAGEMENT DASHBOARD

## Mục tiêu
Xây ứng dụng quản trị danh mục sản phẩm với Next.js 15 App Router, PostgreSQL, Clerk, REST API, Server Actions và giao diện dashboard. Đồ án này là **bài tập tổng hợp tự xây**, không phải source chạy hoàn chỉnh được chép từ video.

## Đặc tả MVP

- Guest: xem home, catalog, chi tiết sản phẩm, filter/search, 404 và metadata.
- User: đăng nhập Clerk, xem hồ sơ, tạo danh sách yêu thích hoặc ghi chú cá nhân.
- Admin: quản lý sản phẩm CRUD (tạo, sửa, xóa), danh sách và dashboard thống kê.
- Dashboard: nested layout/sidebar, loading/error, parallel slots cho hai khối báo cáo.
- Modal: mở chi tiết sản phẩm từ feed bằng intercept + parallel route; URL trực tiếp hiển thị trang riêng.
- Data: PostgreSQL, server query, loading/error và revalidation sau mutation.
- UI: pending state, validation, optimistic updates ở phần thích hợp.

## Mô hình dữ liệu đề xuất

```sql
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL CHECK (length(name) BETWEEN 2 AND 200),
  description TEXT NOT NULL DEFAULT '',
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE favorites (
  user_id TEXT NOT NULL,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, product_id)
);
```

## Cấu trúc thư mục gợi ý

```text
src/
├── app/
│   ├── (public)/page.tsx
│   ├── (public)/products/page.tsx
│   ├── (public)/products/[id]/page.tsx
│   ├── (auth)/sign-in/[[...sign-in]]/page.tsx
│   ├── dashboard/layout.tsx
│   ├── dashboard/page.tsx
│   ├── dashboard/@stats/page.tsx
│   ├── dashboard/products/new/page.tsx
│   ├── dashboard/products/[id]/edit/page.tsx
│   ├── api/products/route.ts
│   ├── api/products/[id]/route.ts
│   ├── global-error.tsx
│   └── layout.tsx
├── actions/products.ts
├── lib/db.ts
├── lib/authorization.ts
└── components/
```

## 10 bước triển khai

1. Tạo Next.js 15 TypeScript project; cấu hình ESLint và CSS.
2. Tạo public routes và nested routes, validate ID.
3. Thêm shared/nested layouts và active nav.
4. Thêm SEO metadata, not-found, loading và error.
5. Tạo Route Handlers REST, validate JSON, HTTP status.
6. Kết nối PostgreSQL; tạo schema, seed và query có tham số.
7. Tạo forms với Server Actions và validation, revalidate dữ liệu.
8. Thêm pending/optimistic UI và kiểm tra rollback.
9. Tích hợp Clerk, auth + RBAC kiểm tra server ở page, action, API.
10. Chạy build, deploy, cấu hình secrets, smoke-test sản phẩm.

## Checklist nghiệm thu

- [ ] Có tối thiểu 5 routes chạy được và hai dynamic routes.
- [ ] Trường hợp không có sản phẩm trả 404.
- [ ] API GET/POST/PATCH/DELETE kiểm tra bằng collection test.
- [ ] Dữ liệu lưu bền trong DB, reload vẫn còn.
- [ ] User bình thường không xóa/sửa sản phẩm của admin.
- [ ] Login/logout đúng, role admin được kiểm tra tại server.
- [ ] Không có secret trong Git, client bundle hay log công khai.
- [ ] Có loading/error/empty states, aria-label cho điều khiển.
- [ ] `npm run build` chạy thành công.
- [ ] URL deployment truy cập được từ cửa sổ ẩn danh.

## Rubric tự chấm (100 điểm)

| Nhóm | Điểm |
|---|---:|
| Route/layout/navigation | 15 |
| API và DB, dữ liệu bền vững | 20 |
| Server Actions, form và validation | 15 |
| RSC/rendering/data performance | 15 |
| Auth, authorization và bảo mật | 20 |
| Error/UX/SEO/a11y | 10 |
| Build, deploy, README | 5 |

## Kiểm thử bắt buộc

- Cố truy cập `/dashboard` khi chưa login.
- Gọi PATCH/DELETE API trực tiếp khi không có session và khi là user không đủ role.
- Nhập dữ liệu tên trống hoặc giá âm.
- Truy cập `/products/99999999` hoặc ID không hợp lệ.
- Reload hard sau khi mở route modal.
- Tắt DB tạm thời để xem thông điệp lỗi; kiểm tra không lộ credential.
- Tạo sản phẩm xong kiểm tra danh sách đã cập nhật, tránh stale cache.
