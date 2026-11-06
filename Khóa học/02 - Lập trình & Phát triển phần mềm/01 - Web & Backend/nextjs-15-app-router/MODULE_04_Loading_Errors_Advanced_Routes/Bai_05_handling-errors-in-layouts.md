---
lesson_id: "M04-L05"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Handling Errors in Layouts"
source_version: "Next.js 15 App Router"
video_start: "01:49:59"
video_duration: "2 phút 07 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. Handling Errors in Layouts

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 2 phút 07 giây · **Mốc:** 01:49:59 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6599s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Handling Errors in Layouts**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Handling Errors in Layouts** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Handling Errors in Layouts** — error.tsx cùng segment không bắt lỗi xảy ra trong chính layout.tsx của segment đó.
**2. Handling Errors in Layouts** — Đặt boundary ở segment cha hoặc điều chỉnh cây layout khi cần bắt lỗi từ layout con.
**3. Handling Errors in Layouts** — Thử nghiệm bằng việc chủ động ném Error trong layout để hiểu phạm vi bắt lỗi.

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
├── error.tsx                 # Có thể bắt lỗi ở dashboard/layout.tsx
└── dashboard/
    ├── layout.tsx
    ├── error.tsx             # Không bắt lỗi từ layout cùng cấp
    └── page.tsx
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Handling Errors in Layouts**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Handling Errors in Layouts** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Handling Errors in Layouts** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** error.tsx cùng segment không bắt lỗi xảy ra trong chính layout.tsx của segment đó.

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

- **Video nguồn:** [Handling Errors in Layouts — 01:49:59](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6599s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Chúng ta biết lỗi đó. TSX xử lý lỗi cho tất cả các đoạn con lồng nhau nhưng có một điểm thú vị liên quan đến bố cục. TSX Các thành phần trong cùng phân đoạn thì ranh giới lỗi sẽ không phát hiện lỗi trong bố cục. TSX trong cùng một phân đoạn do cách cấu trúc thành phần hoạt động, bố cục thực tế nằm phía trên ranh giới lỗi trong cây thành phần Hãy quay lại với mã V và xem điều này thực tế với một ví dụ thực tế, tôi sẽ bắt đầu bằng cách sao chép lỗi. Tệp TSX từ tuyến review ID vào route product ID rồi trong bố cục product ID. TSX Tôi sẽ thêm lỗi ngẫu nhiên tương tự Chúng tôi đã có trong trang Review ID sao chép cả bộ tạo số ngẫu nhiên và logic ném lỗi để thay đổi thông báo thành lỗi

đang tải sản phẩm Tôi sẽ chú thích mã lỗi trong ID đánh giá để tránh nhầm lẫn khi trình duyệt khi chúng ta tải lại trang và kích hoạt lỗi, bạn sẽ nhận thấy có điều gì đó không ổn, không có ranh giới lỗi nào bắt được nó và Ứng dụng bị lỗi khi chạy chưa xử lý. Chúng tôi cũng thấy thông báo lỗi khi tải sản phẩm, điều này làm nổi bật một Lỗi điểm quan trọng. TSX sẽ không xử lý lỗi từ bố cục. TSX trong cùng phân đoạn là giải pháp chúng ta cần để di chuyển lỗi. Tệp TSX đến phân đoạn bố cục cha, trong trường hợp này là các sản phẩm sẽ tải lại trang và bạn sẽ thấy mọi thứ hoạt động như mong đợi, ranh giới lỗi chạy ERS đúng cách, chỉ thay thế nội dung route sản phẩm trong khi vẫn giữ nguyên

đầu trang, chân trang và các yếu tố giao diện cấp cao khác trong tag. Tôi khá chắc bạn có câu hỏi Bạn có thể đang tự hỏi liệu ranh giới lỗi có thể phát hiện lỗi trong bố cục hay không. Tệp TSX từ cùng một phân đoạn

---

**Điều hướng:** ← [Handling Errors in Nested Routes](Bai_04_handling-errors-in-nested-routes.md) · Tiếp theo → [Handling Global Errors](Bai_06_handling-global-errors.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
