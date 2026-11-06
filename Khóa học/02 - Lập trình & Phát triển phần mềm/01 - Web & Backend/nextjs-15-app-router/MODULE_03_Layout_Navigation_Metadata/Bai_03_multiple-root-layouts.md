---
lesson_id: "M03-L03"
module: "Layouts, điều hướng và SEO"
title: "Multiple Root Layouts"
source_version: "Next.js 15 App Router"
video_start: "01:00:25"
video_duration: "3 phút 20 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Multiple Root Layouts

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 3 phút 20 giây · **Mốc:** 01:00:25 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3625s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Multiple Root Layouts**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Multiple Root Layouts** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Multiple Root Layouts** — Có thể tạo nhiều root layouts cho các route group độc lập; từng root layout phải khai báo html/body.
**2. Multiple Root Layouts** — Khi chuyển giữa hai root layout khác nhau, điều hướng có thể trở thành full page load.
**3. Multiple Root Layouts** — Quyết định tách root layout khi hai vùng ứng dụng thực sự cần shell khác nhau.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `cây thư mục`

```text
src/app/
├── (site)/layout.tsx       # Root layout A có html và body
├── (site)/page.tsx         # URL /
├── (app)/layout.tsx        # Root layout B có html và body
└── (app)/dashboard/page.tsx # URL /dashboard
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Multiple Root Layouts**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Multiple Root Layouts** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Multiple Root Layouts** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Có thể tạo nhiều root layouts cho các route group độc lập; từng root layout phải khai báo html/body.

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

- **Video nguồn:** [Multiple Root Layouts — 01:00:25](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3625s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

làm cho việc này thật dễ theo dõi ngay bây giờ hãy tưởng tượng chúng ta đang xây dựng một ứng dụng với các tuyến đường cho khách hàng Revenue đăng nhập và Đăng ký tất cả những trang này đã được tạo ra phía sau hậu trường, chúng tôi muốn các trang doanh thu và khách hàng của mình có một Đầu trang và chân trang đẹp nhưng chúng tôi muốn giữ cho các trang đăng nhập và đăng ký sạch sẽ và tối giản, đây là thách thức Nếu chúng ta thêm đầu trang và chân trang trong bố cục gốc. Tệp TSX, chúng sẽ được áp dụng cho từng trang trong Ứng dụng: Không có cách nào khác, nhưng nếu bạn muốn bố cục khác nhau cho các phần khác nhau của ứng dụng thì sao? Đây là lúc nhiều bố cục root phát huy tác dụng, bạn có thể đang tự hỏi làm sao chúng ta có thể có nhiều layout root thì không phải

Lẽ ra chỉ có một trong thư mục ứng dụng. Đây là lúc nhóm tuyến thực sự tỏa sáng. Hãy nhớ cách nhóm tuyến giúp chúng ta. tổ chức cấu trúc dự án của chúng tôi mà không ảnh hưởng đến URL, chúng tôi cũng cho phép chúng tôi áp dụng bố cục một cách chọn lọc cho các mục đích cụ thể Một phần của ứng dụng của chúng tôi: Hãy để tôi chỉ cho bạn cách tạo hai nhóm tuyến trong thư mục ứng dụng, đầu tiên là marketing để tăng doanh thu và khách hàng, hãy di chuyển các thư mục đó rồi một nhóm route khác, Au để đăng nhập và đăng ký, hãy di chuyển chúng đi. Tiếp theo, chúng ta sẽ xem bố cục gốc. tệp TSX và di chuyển nó từ thư mục ứng dụng vào nhóm marketing route để di chuyển nó cập nhật Nhập và đổi tên thành bố cục marketing, rất quan trọng là bố cục gốc không tồn tại trong

thư mục ứng dụng, chúng ta sẽ tạo một bố cục khác trong thư mục a, vậy hãy sao chép và dán tệp bố cục và đổi tên thành Bố cục AU và ở đây hãy loại bỏ phần đầu trang, chỉ có phần cuối trang. Khi bạn lưu tệp và kiểm tra điều này, trên trình duyệt sẽ thấy một trang lỗi. TSX không có bố cục root và đây là trang. TSX trong thư mục ứng dụng, tất cả những gì bạn cần làm là di chuyển nó vào Nhóm Tuyến Marketing ngay bây giờ. TSX tương ứng với localhost 3000 và nó có một tệp bố cục gốc để làm việc nhưng trong trình duyệt bạn sẽ thấy một điều thú vị, URL không thay đổi gì nhưng giờ đăng ký và đăng nhập Trang chỉ có chân trang trong bố cục, trong khi khách hàng và doanh thu có cả đầu trang và chân trang, chúng tôi có thể định nghĩa nhiều bố cục gốc khác nhau

ảnh hưởng đến các phần cụ thể của ứng dụng chúng ta, đây là điều làm cho các nhóm tuyến đường trở nên mạnh mẽ trong lần tiếp theo chúng cung cấp Chúng tôi có sự linh hoạt để tạo ra các giao diện người dùng khác nhau cho các phần khác nhau của ứng dụng, đồng thời giữ nguyên mã nguồn của chúng tôi Sắp xếp và dễ bảo trì Bây giờ bạn đã thành thạo cách các thành phần hoạt động trong bố cục, hãy cùng tìm hiểu thành một thứ khác thú vị là đối tượng metad dat nằm ngay phía trên nó chúng ta sẽ chuyển lại Dự án Route Demo Để hiểu rõ hơn về vấn đề này, hãy cùng nói về tối ưu hóa công cụ tìm kiếm và cách Ni Shares có thể hỗ trợ

---

**Điều hướng:** ← [Nested Layouts](Bai_02_nested-layouts.md) · Tiếp theo → [Routing Metadata](Bai_04_routing-metadata.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
