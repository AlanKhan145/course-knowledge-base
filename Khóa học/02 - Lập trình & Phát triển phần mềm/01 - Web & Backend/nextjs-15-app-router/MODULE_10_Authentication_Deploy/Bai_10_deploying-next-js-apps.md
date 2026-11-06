---
lesson_id: "M10-L10"
module: "Xác thực, phân quyền và triển khai"
title: "Deploying Next.js Apps"
source_version: "Next.js 15 App Router"
video_start: "06:51:23"
video_duration: "2 phút 46 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 10. Deploying Next.js Apps

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 2 phút 46 giây · **Mốc:** 06:51:23 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=24683s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Deploying Next.js Apps**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Deploying Next.js Apps** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Deploying Next.js Apps** — Chạy npm run build và kiểm tra lỗi TypeScript, env, route trước khi deploy.
**2. Deploying Next.js Apps** — Triển khai trên nền tảng hỗ trợ Next.js (ví dụ Vercel); khai báo biến môi trường trong dashboard thay vì commit file.
**3. Deploying Next.js Apps** — Kiểm tra domain, redirect URL của Clerk, DB credentials, logs và trạng thái sau deploy.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `terminal + checklist`

```text
npm run lint     # Nếu project có script lint
npm run build
npm run start
# Cấu hình DATABASE_URL, CLERK_SECRET_KEY, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# trên nền tảng deploy (không đưa secrets vào repo).
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Deploying Next.js Apps**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Deploying Next.js Apps** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Deploying Next.js Apps** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Chạy npm run build và kiểm tra lỗi TypeScript, env, route trước khi deploy.

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

- **Video nguồn:** [Deploying Next.js Apps — 06:51:23](https://www.youtube.com/watch?v=k7o9R6eaSes&t=24683s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Tôi sẽ sử dụng GitHub và ververell là một nền tảng của nhóm nexs cho phép bạn triển khai nexs một cách liền mạch bước ứng dụng một đảm bảo mã của bạn được đẩy lên GitHub như bạn có thể thấy, tôi đã tạo một repo đó là cùng một repo mà tôi đã dùng cho toàn bộ series, năm tới có 15 hướng dẫn, chúng tôi có vài ứng dụng ở đây và chúng tôi Sẽ triển khai bộ khuếch đại demo xác thực mà chúng tôi vừa làm việc ở bước hai, hãy đến ell.com và đăng ký nếu bạn muốn Mới sử dụng Verell, tôi sẽ đăng nhập bằng GitHub, sau khi bạn đã đăng nhập, hãy thêm một dự án mới nếu bạn làm việc này cho lần đầu tiên bạn sẽ cần cài đặt Verell, khi được yêu cầu tôi sẽ chọn tài khoản GitHub của mình, vốn đã có sẵn

Mã của chúng ta được liên kết trong kho NUS 15 Tutorials mà tôi sẽ nhập cho Verel Team, tôi sẽ chọn tài khoản cá nhân và chọn framework preset làm ni chia sẻ cho thư mục gốc mà chúng ta sẽ nhấp vào chỉnh sửa và chọn Authentication Demo Continue chúng ta có thể giữ nguyên cài đặt build và output nhưng mở rộng phần biến môi trường để nhập các cặp giá trị chính từ dự án của bạn, dự án của chúng tôi có bốn môi trường Biến chọn tất cả sao chép và dán, trong đó ô tự động tạo bốn biến môi trường với giá trị cuối cùng nhấp vào Triển khai, điều này sẽ mất một phút để xây dựng và triển khai cho ứng dụng của bạn sau khi quá trình hoàn tất

Hoàn thành, chúng ta nên có bản xem trước ứng dụng, nhấp vào nó sẽ đưa chúng ta đến ứng dụng được lưu trữ trên một Verel URL tiếp theo là 15 hướng dẫn. Đăng nhập Verel DoApp bằng thông tin đăng nhập tài khoản thử nghiệm và ứng dụng của chúng tôi hoạt động như vậy Giờ đây nếu bạn có một tên miền tùy chỉnh, bạn có thể trỏ ứng dụng này đến tên miền đó, nhưng về mức độ xây dựng đơn giản và triển khai với GitHub và Verell quan tâm, đây là tất cả những gì bạn cần làm, rất rất đơn giản, tốt với điều đó. đến cuối khóa học về NEX này, tôi hy vọng bạn đã hiểu rõ hơn nhiều về các khái niệm so với trước đây Nếu bạn thích khóa học và thấy nó hữu ích, vui lòng nhấn nút Thích và đăng ký kênh dưới dạng

Việc chia sẻ khóa học này với bạn bè hoặc đồng đội sẽ giúp ích rất nhiều và hy vọng họ sẽ bắt đầu sử dụng nó tuyệt vời Framework cũng như luôn cảm ơn bạn đã theo dõi, và hẹn gặp lại lần sau, việc hỗ trợ kênh này miễn phí nhé thích và đăng ký theo dõi giúp ích rất nhiều

---

**Điều hướng:** ← [Customizing Clerk Components](Bai_09_customizing-clerk-components.md) · Hoàn thành khóa học · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
