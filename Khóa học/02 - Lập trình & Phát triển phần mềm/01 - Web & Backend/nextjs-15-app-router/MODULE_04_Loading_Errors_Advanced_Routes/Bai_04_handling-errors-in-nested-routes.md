---
lesson_id: "M04-L04"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Handling Errors in Nested Routes"
source_version: "Next.js 15 App Router"
video_start: "01:47:55"
video_duration: "2 phút 04 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Handling Errors in Nested Routes

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 2 phút 04 giây · **Mốc:** 01:47:55 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6475s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Handling Errors in Nested Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Handling Errors in Nested Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Handling Errors in Nested Routes** — Error Boundary gần route con có thể bắt lỗi vùng content của con; boundary cha bao phủ phần rộng hơn.
**2. Handling Errors in Nested Routes** — Không phải mọi lỗi đều được bắt ở cùng cấp; quan sát vị trí error.tsx để dự đoán scope.
**3. Handling Errors in Nested Routes** — Tạo nested error.tsx để từng tính năng phục hồi độc lập mà không làm hỏng toàn bộ dashboard.

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
├── layout.tsx
└── dashboard/
    ├── error.tsx             # Bắt lỗi từ page hoặc descendants
    ├── layout.tsx
    └── analytics/
        ├── error.tsx         # Boundary cục bộ của analytics
        └── page.tsx
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Handling Errors in Nested Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Handling Errors in Nested Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Handling Errors in Nested Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Error Boundary gần route con có thể bắt lỗi vùng content của con; boundary cha bao phủ phần rộng hơn.

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

- **Video nguồn:** [Handling Errors in Nested Routes — 01:47:55](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6475s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Lỗi của chúng ta. Tệp TSX nằm trong thư mục ID xem xét hệ thống tuyến đường của chúng tôi, chúng tôi có sản phẩm ở trên cùng. level, tiếp theo là Product ID và Review ID được lồng bên trong cấu trúc này thực sự ảnh hưởng đến cách lỗi của chúng ta. Tệp TSX Hoạt động, đây là điều then chốt để hiểu lỗi luôn xuất hiện để tìm ranh giới lỗi cha gần nhất Điều này có nghĩa là đó là một lỗi. Tệp TSX xử lý lỗi không chỉ cho thư mục riêng của nó mà còn cho tất cả các thư mục con lồng nhau Các đoạn bên dưới cũng bằng cách đặt lỗi một cách chiến lược. Bạn có thể sử dụng các tệp TSX ở các cấp độ khác nhau trong thư mục route của mình. kiểm soát chính xác chi tiết xử lý lỗi của bạn. Để tôi cho bạn thấy ý tôi, hãy vào mã VS và chuyển chúng ta

Lỗi. Tệp TSX từ thư mục review ID cho đến route sản phẩm khi chúng tôi làm mới trình duyệt và kích hoạt một lỗi, chúng ta sẽ thấy cùng một thông báo lỗi lỗi khi tải đánh giá nhưng lần này có một điểm khác biệt quan trọng Toàn bộ tuyến sản phẩm sẽ bị thay thế bằng những gì bị lỗi. TSX là do lỗi từ trang. TSX trong thư mục review ID sẽ nổi lên cho đến khi tìm thấy ranh giới lỗi gần nhất, hiện nằm trong thư mục products, nhưng hãy theo dõi điều gì xảy ra khi chúng ta di chuyển tệp trở lại thư mục ID đánh giá và làm mới phần sản phẩm nổi bật từ bố cục ID sản phẩm của chúng tôi vẫn ở và chỉ thành phần review ID mới được thay thế bằng lỗi của chúng tôi. Giao diện TSX sẽ thấy chính xác hơn nhiều

thực sự minh họa cách xử lý lỗi hoạt động trong các routs lồng nhau nơi bạn đặt lỗi. Tệp TSX tạo ra sự khác biệt lớn nó xác định chính xác phần nào của giao diện người dùng sẽ bị ảnh hưởng khi có sự cố xảy ra tiếp theo chúng tôi sẽ đi sâu vào xử lý lỗi trong bố cục sau khi xử lý lỗi trong các tuyến lồng nhau, hãy cùng giải quyết một vấn đề quan trọng không kém việc xử lý lỗi trong bố cục

---

**Điều hướng:** ← [Recovering from Errors](Bai_03_recovering-from-errors.md) · Tiếp theo → [Handling Errors in Layouts](Bai_05_handling-errors-in-layouts.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
