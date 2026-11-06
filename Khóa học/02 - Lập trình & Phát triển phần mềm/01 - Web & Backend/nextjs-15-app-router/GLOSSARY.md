# Từ điển Next.js 15 App Router

| Thuật ngữ | Giải thích thực hành |
|---|---|
| App Router | Router của Next.js dựa trên cấu trúc thư mục `app/` và file đặc biệt. |
| Route segment | Một phần đường dẫn tương ứng thư mục, ví dụ `products`, `[id]`. |
| Route group | Thư mục `(group)` giúp tổ chức nhưng không góp phần vào URL. |
| Private folder | Thư mục `_name` được loại khỏi router; không phải bảo mật dữ liệu. |
| Dynamic route | Segment `[id]` nhận một giá trị từ URL. |
| Catch-all | `[...slug]` nhận mảng segment, tối thiểu một phần tử. |
| Optional catch-all | `[[...slug]]` nhận mảng segment hoặc không có slug. |
| Layout | Component chia sẻ giữa các page, giữ trạng thái qua navigation. |
| Template | Component được tạo instance mới khi điều hướng phù hợp. |
| Parallel route | Slot `@name` render độc lập trong layout. |
| Intercepting route | Hiển thị URL mục tiêu trong layout hiện tại khi điều hướng mềm. |
| RSC | React Server Component chạy phía server, có thể fetch data trực tiếp. |
| Client Component | Component được đánh dấu `use client`, có state/hook/browser interactions. |
| CSR | Dựng giao diện tại client, thường sau khi JS tải. |
| SSR | Tạo HTML trên server cho request trước hydration. |
| Hydration | React gắn event handlers để HTML ban đầu có tương tác. |
| Suspense | Ranh giới fallback cho phần nội dung chưa sẵn sàng. |
| Streaming | Gửi HTML/response theo nhiều đợt thay vì chờ toàn bộ. |
| Static rendering | Render/caching trước request khi điều kiện cho phép. |
| Dynamic rendering | Render theo dữ liệu của từng request. |
| Route Handler | `route.ts` định nghĩa HTTP handler với GET/POST/... |
| Server Action | Hàm server `use server` dùng cho mutation, thường tích hợp form. |
| Revalidation | Làm mới data/cache sau mutation. |
| `useFormStatus` | Hook theo dõi submit pending của form cha. |
| `useActionState` | Hook quản lý state và kết quả action. |
| `useOptimistic` | Hook tạm hiển thị kết quả dự kiến trước phản hồi server. |
| Clerk | Dịch vụ hỗ trợ authentication, user/session UI và SDK. |
| RBAC | Role-based Access Control: phân quyền theo vai trò. |
| Middleware | Logic chạy trước request matching ở Next.js 15. |
