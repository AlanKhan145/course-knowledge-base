---
lesson_id: "M02-L08"
module: "Định tuyến và tổ chức file"
title: "Private Folders"
source_version: "Next.js 15 App Router"
video_start: "00:45:33"
video_duration: "2 phút 43 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. Private Folders

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 2 phút 43 giây · **Mốc:** 00:45:33 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2733s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Private Folders**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Private Folders** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Private Folders** — Đặt tên thư mục bắt đầu bằng _ để loại thư mục và thư mục con khỏi hệ thống routing.
**2. Private Folders** — Ví dụ _components, _lib, _utils dùng cho mã nội bộ cạnh route.
**3. Private Folders** — Private folder chỉ là quy ước tổ chức routing, KHÔNG phải cơ chế bảo mật hoặc che giấu bí mật client.

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
src/app/dashboard/
├── page.tsx
├── _components/
│   └── AnalyticsChart.tsx
└── _lib/
    └── formatCurrency.ts
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Private Folders**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Private Folders** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Private Folders** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Đặt tên thư mục bắt đầu bằng _ để loại thư mục và thư mục con khỏi hệ thống routing.

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

- **Video nguồn:** [Private Folders — 00:45:33](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2733s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

một tính năng thú vị khác của NEX là thư mục riêng tư, điều này sẽ giúp bạn giữ dự án của mình rất ngăn nắp, vậy riêng tư là gì hãy nghĩ về nó như một cách để báo cho nexts, này, thư mục này chỉ dành cho nội bộ, đừng đưa nó vào hệ thống định tuyến thư mục và tất cả các thư mục con của nó bị loại trừ khỏi việc định tuyến để tạo thư mục riêng chỉ cần thêm một gạch dưới đầu tên thư mục để tôi chỉ cho bạn cách hoạt động trong thư mục ứng dụng của bạn tạo một thư mục có tên Gạch dưới, đây là nơi bạn có thể đặt các hàm tiện ích như định dạng date.js hoặc các chức năng. TS nếu bạn đang sử dụng TypeScript Chúng ta sẽ bỏ qua chi tiết triển khai tạm thời nhưng đây là những gì tôi thực sự muốn cho bạn xem, hãy cùng

Tạo một trang. TSX bên trong thư mục undor liip này với một thành phần react đơn giản nên có trang tệp mới. TSX xuất hàm mặc định là private route và trả về thẻ H1 bạn không thể xem điều này trên trình duyệt bây giờ bạn có thể Tôi nghĩ điều này sẽ xuất hiện trên thư viện Localhost 3000 Slore nhưng không phải vậy vì thư viện Incore gạch dưới khiến nó trở thành thư viện riêng tư nên năm sau sẽ không tạo đường dẫn cho nó, hãy thử điều hướng vào thư mục slore trong trình duyệt và bạn sẽ nhận được lỗi 404 không tìm thấy trang không thể tìm thấy tài nguyên được yêu cầu đây là trang 404 tùy chỉnh mà chúng tôi đã định nghĩa trước đó các thư mục riêng tư là Rất hữu ích cho nhiều việc, giữ logic giao diện người dùng tách biệt với logic định tuyến có cách nhất quán để

tổ chức các tệp nội bộ trong dự án của bạn giúp dễ dàng nhóm các tệp liên quan trong trình soạn thảo mã và cuối cùng là tránh Việc đặt tên tiềm năng có thể xung đột với quy ước đặt tên tệp trong năm tới và đây là một mẹo nhanh chuyên nghiệp nếu bạn thực sự muốn có gạch dưới trong URL, hãy dùng phần trăm 5f thay vào đó, đó chỉ là phiên bản mã hóa URL của một Gạch dưới, thử chuyển gạch dưới sang tỷ lệ phần trăm 5F và xem điều gì xảy ra trên trình duyệt của bạn, hãy cho tôi biết trong phần bình luận Phần bạn có thể xem ph. TSX trong thư mục riêng của trình duyệt chỉ là một trong những cách để tổ chức năm sau của bạn Dự án: Nếu đây không phải sở thích của bạn, bạn luôn có thể chọn không sử dụng tính năng này và chỉ dựa vào tệp

đặt cụm hoặc thậm chí đặt các tệp bên ngoài thư mục ứng dụng lên trên, tiếp theo chúng ta sẽ xem thêm một tính năng tuyệt vời khác mà nexts mang lại Về tổ chức dự án, hãy cùng khám phá một tính năng mạnh mẽ khác mà NEX cung cấp để tổ chức các nhóm định tuyến dự án của chúng ta

---

**Điều hướng:** ← [File Colocation](Bai_07_file-colocation.md) · Tiếp theo → [Route Groups](Bai_09_route-groups.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
