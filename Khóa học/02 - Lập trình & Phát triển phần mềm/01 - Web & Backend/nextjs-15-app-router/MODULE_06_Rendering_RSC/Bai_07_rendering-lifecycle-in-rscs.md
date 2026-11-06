---
lesson_id: "M06-L07"
module: "Rendering và React Server Components"
title: "Rendering Lifecycle in RSCs"
source_version: "Next.js 15 App Router"
video_start: "03:47:27"
video_duration: "3 phút 30 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Rendering Lifecycle in RSCs

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 3 phút 30 giây · **Mốc:** 03:47:27 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=13647s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Rendering Lifecycle in RSCs**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Rendering Lifecycle in RSCs** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Rendering Lifecycle in RSCs** — Hiểu chu trình first load, RSC payload, HTML preview, hydration rồi cập nhật qua navigation.
**2. Rendering Lifecycle in RSCs** — RSC tạo payload mô tả cây React; payload không đơn thuần là HTML.
**3. Rendering Lifecycle in RSCs** — Nhận diện phần việc server và client để chẩn đoán hydration mismatch.

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
1. Chọn một trang/tính năng đang sử dụng Rendering Lifecycle in RSCs.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Rendering Lifecycle in RSCs**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Rendering Lifecycle in RSCs** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Rendering Lifecycle in RSCs** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Hiểu chu trình first load, RSC payload, HTML preview, hydration rồi cập nhật qua navigation.

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

- **Video nguồn:** [Rendering Lifecycle in RSCs — 03:47:27](https://www.youtube.com/watch?v=k7o9R6eaSes&t=13647s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Các thành phần trong Nexts. Bây giờ hãy cùng tìm hiểu vòng đời kết xuất của chúng một cách đơn giản hơn. Chúng ta sẽ khám phá cách chúng được tạo ra. Cuộc sống trên màn hình của bạn Hiểu quá trình này không bắt buộc để xây dựng ứng dụng năm sau nhưng nó giống như biết Những gì xảy ra trong bếp trước khi thức ăn của bạn được đưa lên bàn không cần thiết để thưởng thức bữa ăn của bạn nhưng chắc chắn Thật thú vị khi nói về các thành phần máy chủ React, chúng ta đang xử lý ba bên chính: trình duyệt của bạn, máy khách và Ở phía máy chủ, chúng ta có NEX, framework và React thư viện. Hãy cùng phân tích chuỗi tải ban đầu. từng bước khi trình duyệt của bạn yêu cầu một trang, liên kết shs app router sẽ khớp URL yêu cầu với một thành phần máy chủ

tiếp theo, sh sau đó chỉ đạo react render thành phần máy chủ đó, react sẽ render thành phần máy chủ và bất kỳ thành phần con nào các thành phần cũng là thành phần máy chủ chuyển đổi chúng sang định dạng Json đặc biệt gọi là RSC payload nếu bạn kiểm tra tab mạng khi điều hướng đến một tuyến đường, bạn sẽ gặp định dạng Json đặc biệt này payload RSC trong quá trình này nếu bất kỳ thành phần máy chủ nào sẽ phản ứng tạm dừng việc render cây con đó và gửi một giá trị giữ chỗ thay vào đó, trong khi tất cả những điều này diễn ra, react cũng đang chuẩn bị các lệnh cho các thành phần khách hàng chúng ta sẽ cần sau đó, sh lấy cả các lệnh payload RSC và thành phần khách hàng để tạo HTML trên

máy chủ HTML này sẽ truyền trực tiếp đến trình duyệt của bạn ngay lập tức, cung cấp cho bạn một bản xem trước nhanh không tương tác về tuyến đường tại cùng lúc đó, nexs cũng truyền tải payload RSC khi react kết xuất từng phần giao diện người dùng khi nó đến nexs trình duyệt xử lý tất cả những gì được truyền qua React sử dụng các lệnh của payload RSC và thành phần khách hàng để kết xuất dần giao diện người dùng khi tất cả các thành phần máy khách và đầu ra của các thành phần máy chủ đã được tải Trạng thái giao diện cuối cùng được trình bày cho các thành phần khách hàng người dùng dưới quá trình chuyển đổi ứng dụng của chúng ta từ Hiển thị tĩnh thành trải nghiệm tương tác. Đây là trình tự tải ban đầu cho RSC. Bây giờ hãy cùng xem qua

trình tự cập nhật để làm mới các phần của ứng dụng trình duyệt yêu cầu một reetch của một giao diện người dùng cụ thể như một giao diện đầy đủ route tiếp theo xử lý yêu cầu và so khớp nó với thành phần máy chủ được yêu cầu tiếp theo hướng dẫn react kết xuất Cây component React hiển thị các thành phần tương tự như khi tải ban đầu, nhưng đây là nơi khác là chúng ta không tạo HTML mới để cập nhật, thay vào đó năm sau sẽ truyền dữ liệu phản hồi dần dần Quay lại trực tiếp cho máy khách khi nhận được phản hồi luồng tiếp theo sẽ kích hoạt một reender của tuyến đường sử dụng mới Content React sau đó cẩn thận đối chiếu hoặc hợp nhất đầu ra mới được render với các thành phần hiện có trên màn hình

vì chúng ta sử dụng định dạng Json đặc biệt thay vì HTML nên react có thể cập nhật mọi thứ trong khi vẫn giữ giao diện quan trọng Ghi nguyên những thứ như bạn đã nhấp vào đâu hoặc bạn đã gõ gì, đây là chuỗi cập nhật RSC ngay bây giờ chúng ta hiểu về vòng đời render của các thành phần react seever. Hãy cùng tìm hiểu sâu hơn về chủ đề trong XS. có ba cách khác nhau để render trên máy chủ tĩnh Dynamic và streaming, hãy cùng xem xét kỹ hơn mỗi cái trong số này, tôi đã đề cập trước đó ba chiến lược rendering máy chủ trong SH tiếp theo. Bây giờ hãy xem chiến lược đầu tiên tĩnh

---

**Điều hướng:** ← [Server and Client Components](Bai_06_server-and-client-components.md) · Tiếp theo → [Static Rendering](Bai_08_static-rendering.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
