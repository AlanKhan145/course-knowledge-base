---
lesson_id: "M03-L02"
module: "Layouts, điều hướng và SEO"
title: "Nested Layouts"
source_version: "Next.js 15 App Router"
video_start: "00:56:33"
video_duration: "3 phút 52 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Nested Layouts

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 3 phút 52 giây · **Mốc:** 00:56:33 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3393s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Nested Layouts**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Nested Layouts** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Nested Layouts** — layout.tsx ở segment con bọc page và các segment nằm dưới nó.
**2. Nested Layouts** — Ứng dụng có thể đồng thời dùng root layout và dashboard layout hoặc product layout.
**3. Nested Layouts** — Hiểu cây lồng nhau giúp xác định scope giao diện và trạng thái khi chuyển trang.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/dashboard/layout.tsx`

```tsx
import type { ReactNode } from "react";
import Link from "next/link";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div><aside><Link href="/dashboard">Dashboard</Link></aside><main>{children}</main></div>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Nested Layouts**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Nested Layouts** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Nested Layouts** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** layout.tsx ở segment con bọc page và các segment nằm dưới nó.

**Câu 2.** Đâu là ranh giới chịu trách nhiệm giữa Next.js framework, server và browser trong ví dụ này?

**Gợi ý đáp án:** Phải nêu đúng nơi xử lý request/route hoặc render, có hay không client event/state, và không đưa bí mật server xuống client.

**Câu 3.** Khi điều kiện không hợp lệ hoặc dữ liệu lỗi, hệ thống phải phản hồi ra sao?

**Gợi ý đáp án:** Tùy chức năng: 404 cho tài nguyên không tồn tại; 400 cho input sai; 401/403 cho quyền; fallback loading/error khi render; tuyệt đối không tiết lộ secret.

## 7. Lỗi thường gặp và cách khắc phục

| Dấu hiệu | Nguyên nhân có thể | Cách kiểm tra |
|---|---|---|
| Không tìm thấy đường dẫn | Sai tên file đặc biệt hoặc cấu trúc thư mục | Kiểm tra `src/app`, `page.tsx`, `route.ts`, terminal |
| Hook/event không chạy | Dùng hook trong Server Component | Đặt `"use client"` đúng boundary, không đẩy cả app sang client |
| TypeScript báo lỗi về `params` | Khác API giữa Next.js 14 và 15 | Kiểm tra version trong `package.json`, `await params` theo v15 |
| UI và dữ liệu cũ hoặc tải chậm | Cache policy, request waterfall, thiếu revalidation | Kiểm tra fetch cache, Network, Suspense và invalidation |
| API trả 200 dù dữ liệu sai | Thiếu validation/auth trong code demo | Thêm schema, guard, status HTTP phù hợp |

## 8. Liên kết học tập và nguồn

- **Video nguồn:** [Nested Layouts — 00:56:33](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3393s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

những thành phần giao diện người dùng tiện lợi này được chia sẻ giữa nhiều trang trong ứng dụng của bạn, mỗi ứng dụng đều cần root Layout mà trong trường hợp của chúng tôi nằm trong layout. Tệp TSX trong thư mục ứng dụng, đây là điều thú vị về bố cục bạn có thể Nest chúng không, giả sử bạn muốn một bố cục đặc biệt chỉ cho trang chi tiết sản phẩm, chúng ta có thể làm điều đó bằng cách thêm một bố cục. TSX Bên trong thư mục Chi tiết sản phẩm, hãy để tôi chỉ cho bạn cách tạo bố cục trong thư mục ID sản phẩm. TSX tệp tại đây Định nghĩa và xuất mặc định một thành phần react để xuất hàm mặc định, hãy gọi chi tiết sản phẩm này Bố cục Thành phần chấp nhận prop con kiểu react. React node và chúng tôi trả lại prop con cùng với và

H2 ghi là featured products, giống như layout gốc, chúng ta xuất một component react với prop con nhưng lần này, prop con đại diện cho chi tiết nội dung trang ID sản phẩm về sản phẩm, tiếp theo là ID sản phẩm Tôi cũng đã thêm một tiêu đề H2 đơn giản nói rằng sản phẩm nổi bật hãy coi đây là nơi bạn có thể muốn giới thiệu vòng quay các sản phẩm nổi bật, hãy xem cách hoạt động trên trình duyệt khi bạn truy cập tuyến đường để Local Host 3000 bạn chỉ thấy bố cục gốc, chân trang và nội dung con từ trang. TSX trong thư mục ứng dụng vẫn như cũ điều này xảy ra khi bạn truy cập phần đầu trang sản phẩm SL và thành phần danh sách sản phẩm dưới dạng con, nhưng đây là

Điều thú vị là khi bạn điều hướng đến một sản phẩm cụ thể như SL1 bạn sẽ thấy nó được giới thiệu phần sản phẩm xuất hiện cho slash1, slash2 và thậm chí sl00, điều này xảy ra vì first nexs hiển thị bố cục gốc với prop con đại diện cho nội dung thư mục ID sản phẩm sau đó bố cục ID sản phẩm sẽ bắt đầu thay thế các prop con Trong bố cục gốc, chúng ta sẽ thấy sản phẩm nổi bật cuối cùng là nội dung trang thực tế từ trang. TSX trong thư mục ID sản phẩm điền vào prop con trong bố cục ID sản phẩm mẫu này cho phép bạn tạo bố cục chuyên biệt cho các phần khác nhau của ứng dụng của bạn Dưới đây là hình ảnh trực quan hóa các bố cục lồng nhau trong bộ định tuyến ứng dụng cho

Lost 3000 layout. Tệp TSX trong thư mục ứng dụng được render cho/sản xuất thành phần trong trang. TSX trong sản phẩm thư mục thay thế prop con trong bố cục gốc khi bạn truy cập sản phẩm SL/ một TSX thành phần trong bố cục. TSX trở thành prop con trong bố cục gốc, bố cục chi tiết sản phẩm chứa các sản phẩm nổi bật và sau đó Thành phần từ trang. TSX được hiển thị dưới dạng prop con trong bố cục của ID sản phẩm. Tệp TSX để chúng ta thấy đầu trang và chân trang, xen giữa chúng ta thấy bố cục và các thành phần Trang từ ID sản phẩm khi bạn điều hướng đến/ sản phẩm SL2 chỉ vào trang. Nội dung TSX được thay thế bằng JSI cập nhật, điểm then chốt ở đây là router ứng dụng Nex hỗ trợ bố cục lồng nhau cho phép

Bạn tùy chỉnh các phần khác nhau của ứng dụng đúng như ý muốn, giờ bạn có thể đang thắc mắc nếu tôi muốn thì sao? loại trừ đầu trang và chân trang khỏi một số trang cho các trang như đăng nhập, đăng ký hoặc quên mật khẩu bạn có thể muốn Một bố cục sạch sẽ, tập trung hơn, đừng lo, có một giải pháp đơn giản mà chúng ta sẽ khám phá Tiếp theo, trước khi bắt đầu, tôi chỉ muốn nói rằng tôi đã chuyển sang dự án mới của năm tới chỉ để chủ đề này

---

**Điều hướng:** ← [Layouts](Bai_01_layouts.md) · Tiếp theo → [Multiple Root Layouts](Bai_03_multiple-root-layouts.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
