---
lesson_id: "M09-L06"
module: "Đột biến dữ liệu và form"
title: "useFormStatus vs useActionState"
source_version: "Next.js 15 App Router"
video_start: "05:44:32"
video_duration: "1 phút 31 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. useFormStatus vs useActionState

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 1 phút 31 giây · **Mốc:** 05:44:32 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20672s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **useFormStatus vs useActionState**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **useFormStatus vs useActionState** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. useFormStatus vs useActionState** — useFormStatus tập trung trạng thái lần submit gần nhất của form; useActionState giữ kết quả/validation state của action.
**2. useFormStatus vs useActionState** — Có thể kết hợp cả hai cho UX tốt, nhưng đừng lặp state không cần thiết.
**3. useFormStatus vs useActionState** — Chọn hook dựa theo phạm vi dữ liệu và trách nhiệm của component.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `Kịch bản thiết kế (không phải source code hoàn chỉnh)`

```text
1. Chọn một trang/tính năng đang sử dụng useFormStatus vs useActionState.
2. Viết sơ đồ dữ liệu đầu vào, kết quả UI mong muốn, và phần nào chạy server/client.
3. Tạo một tình huống bình thường, một tình huống lỗi và một tình huống dữ liệu trống.
4. Kiểm tra Network, terminal server, và kết quả giao diện trước/sau điều hướng.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **useFormStatus vs useActionState**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **useFormStatus vs useActionState** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **useFormStatus vs useActionState** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** useFormStatus tập trung trạng thái lần submit gần nhất của form; useActionState giữ kết quả/validation state của action.

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

- **Video nguồn:** [useFormStatus vs useActionState — 05:44:32](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20672s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

từ use action State cả hai boolean có thể giúp chúng tôi xác định xem biểu mẫu có đang được gửi hay không và cho phép chúng tôi vô hiệu hóa việc gửi. nhưng có một điểm khác biệt thú vị giữa chúng đáng để hiểu trạng thái chờ xử lý khi sử dụng trạng thái biểu mẫu dành riêng cho việc nộp biểu mẫu; ngược lại, EAS đang chờ hành động sử dụng có thể là sử dụng với bất kỳ hành động nào chứ không chỉ gửi biểu mẫu. Trong ví dụ của chúng tôi, bạn thực sự có thể sử dụng bất kỳ hành động nào và nhận được công việc đã hoàn thành đang chờ từ trạng thái biểu mẫu sử dụng trong thành phần gửi riêng hoặc một phần tử nút thông thường với chi tiêu điện tử từ trạng thái hành động sử dụng nhưng đây là cách tôi nghĩ về việc chọn giữa chúng khi đang chờ từ trạng thái sử dụng biểu mẫu khi

bạn đang xây dựng các thành phần tái sử dụng được thiết kế để tồn tại bên trong các biểu mẫu, ví dụ như nút gửi hoặc tải Các spinner mà bạn muốn sử dụng trên các biểu mẫu khác nhau trong ứng dụng của bạn chọn e đang chờ từ hành động sử dụng trạng thái khi bạn cần theo dõi các hành động của máy chủ không nhất thiết liên quan đến việc nộp biểu mẫu, nó mang lại cho bạn sự linh hoạt bổ sung Nên nói thêm rằng tài liệu chính thức trên React cũng như Next SH khá ít về chủ đề này nếu bạn có nhiều tài liệu thật hơn Ví dụ thế giới về việc bạn sử dụng một trong hai thay vì cái kia, tôi rất muốn nghe về chúng trong phần bình luận bên dưới Được rồi, bây giờ bạn đã thấy cách tạo sản phẩm mới với các hành động máy chủ. Tiếp theo, hãy cùng xem cách cập nhật

Một sản phẩm hiện có sử dụng Server Actions, hãy cùng khám phá việc triển khai thao tác cập nhật cho các sản phẩm của chúng tôi và

---

**Điều hướng:** ← [Separating Server Actions](Bai_05_separating-server-actions.md) · Tiếp theo → [Update Server Action](Bai_07_update-server-action.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
