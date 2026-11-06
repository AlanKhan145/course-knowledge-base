# Cheatsheet Next.js 15 — cú pháp cần nhớ

## File / route

| File hoặc directory | Chức năng |
|---|---|
| `app/page.tsx` | Trang URL `/`. |
| `app/blog/page.tsx` | Trang URL `/blog`. |
| `app/blog/[slug]/page.tsx` | Trang URL động `/blog/:slug`. |
| `app/docs/[...slug]/page.tsx` | Catch-all bắt buộc. |
| `app/docs/[[...slug]]/page.tsx` | Optional catch-all. |
| `app/(auth)/login/page.tsx` | URL `/login`; `(auth)` không nằm trên URL. |
| `app/_components/` | Code nội bộ không tham gia route. |
| `app/layout.tsx` | Root layout với `html/body`. |
| `app/dashboard/layout.tsx` | Nested layout. |
| `app/dashboard/template.tsx` | Re-mount trong navigation phù hợp. |
| `app/dashboard/loading.tsx` | Loading UI / Suspense boundary. |
| `app/dashboard/error.tsx` | Client Error Boundary. |
| `app/global-error.tsx` | Boundary lỗi root layout. |
| `app/not-found.tsx` | Giao diện 404. |
| `app/api/products/route.ts` | HTTP handler endpoint. |
| `app/dashboard/@analytics/page.tsx` | Named slot parallel route. |
| `src/middleware.ts` | Middleware v15. |

## API nhớ nhanh

```tsx
// Dynamic page params trong Next.js 15
export default async function Page({ params }: {params: Promise<{id: string}>}) {
  const { id } = await params;
  return <h1>{id}</h1>;
}
```

```ts
// Handler
export async function GET() { return Response.json({ok:true}); }
```

```tsx
// React Client Component
"use client";
import { useState } from "react";
export default function Toggle() {
  const [on,setOn]=useState(false);
  return <button onClick={()=>setOn(!on)}>{on?'ON':'OFF'}</button>;
}
```

## Chọn công cụ theo nhu cầu

- Trang hiển thị nội dung nhiều SEO: Server Components + metadata.
- Widget cần state/browser API: Client Component cô lập.
- Dữ liệu bí mật/DB: đọc trên server; không gửi secret xuống client.
- Tương tác form CRUD: Server Actions + validation + revalidation.
- REST cho app khác sử dụng: Route Handlers.
- Lỗi API: status HTTP rõ ràng; lỗi trang: error.tsx/not-found.tsx.
- Truy vấn độc lập: `Promise.all`; truy vấn phụ thuộc: sequential.
- Bảo mật: `auth()` + kiểm tra role/ownership tại server, không chỉ middleware/UI.

## Cảnh báo phiên bản

`params` và `searchParams` (v15) dạng Promise ở nhiều page/handler. Cache mặc định, phiên bản Clerk SDK và tên `middleware.ts` so với `proxy.ts` (Next.js 16+) phải đối chiếu theo `package.json`.
