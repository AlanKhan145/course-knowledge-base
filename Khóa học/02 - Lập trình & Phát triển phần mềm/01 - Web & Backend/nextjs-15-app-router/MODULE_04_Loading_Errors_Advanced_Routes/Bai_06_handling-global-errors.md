---
lesson_id: "M04-L06"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Handling Global Errors"
source_version: "Next.js 15 App Router"
video_start: "01:52:06"
video_duration: "5 phút 25 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Handling Global Errors

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 5 phút 25 giây · **Mốc:** 01:52:06 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6726s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Handling Global Errors**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Handling Global Errors** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Handling Global Errors** — global-error.tsx là boundary cho lỗi trong root layout; cần tự khai báo html và body.
**2. Handling Global Errors** — Dùng cho lỗi nghiêm trọng khiến shell ứng dụng không thể render.
**3. Handling Global Errors** — Đưa nút reset an toàn; tránh dùng global boundary để thay thế mọi xử lý lỗi cục bộ.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/global-error.tsx`

```tsx
"use client";
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return <html lang="vi"><body><h1>Ứng dụng gặp lỗi</h1>
    <button onClick={reset}>Thử lại</button></body></html>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Handling Global Errors**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Handling Global Errors** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Handling Global Errors** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** global-error.tsx là boundary cho lỗi trong root layout; cần tự khai báo html và body.

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

- **Video nguồn:** [Handling Global Errors — 01:52:06](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6726s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

còn lỗi trong bố cục root thì sao? nó không có đoạn rõ ràng, chúng ta xử lý những lỗi đó như thế nào Nexts đã nghĩ đến và Prov cung cấp một tệp đặc biệt gọi là Global error. TSX nằm trong thư mục ứng dụng gốc của bạn, đây là Tuyến phòng thủ cuối cùng khi có sự cố nghiêm trọng xảy ra ở cấp cao nhất của hồ sơ ứng tuyển của bạn, đó là một chút chi tiết để mô phỏng và bắt lỗi trong bố cục gốc, nên để tôi chỉ cho bạn cách thiết lập để gây lỗi trong bố cục gốc của chúng ta trong thư mục ứng dụng, tôi sẽ thêm một thành phần wrapper đặc biệt để hiển thị lỗi nằm cạnh Bố cục gốc. Tệp TSX tạo lỗi rapper. TSX Tôi sẽ dán mã và hướng dẫn bạn từng bước qua đoạn mã, bạn có thể tìm đoạn mã này trên GitHub của tôi

repo nhưng để tôi nhanh chóng điểm qua những gì chúng ta có ở đây, lỗi rapper là một thành phần client, nên hãy dùng client directive là ở đầu cùng chúng ta đang nhập một số Style, sử dụng State Hook từ react và sau đó có trình mô phỏng lỗi này thành phần nó chấp nhận một thông báo và hiển thị thông báo lỗi đó nếu cờ lỗi được đặt thành true true lỗi là false mặc định nhưng khi bạn nhấp vào nút, mô phỏng bộ lỗi, lỗi được đặt thành true và lỗi sẽ được kích hoạt thành phần error simulator có mặt trong một thành phần error wrapper chấp nhận các prop con và kết xuất giống như điều này Component là cần thiết để xuất lỗi từ layout gốc của chúng ta, tức là trong layout. Tệp TSX nhập thành phần và thêm nó vào jsx được bao bọc

xung quanh các con ch, nên việc mở và đóng lỗi tiếp theo sẽ thêm lỗi toàn cục. tệp TSX trong thư mục ứng dụng để liền kề với bố cục. Lỗi toàn cục tệp mới TSX. TSX tệp này nên xuất một thành phần react sẽ được hiển thị khi xảy ra lỗi trong bố cục gốc hoặc bất kỳ của các tuyến đường lồng nhau trong trường hợp không có ranh giới eror Một lần nữa để tiết kiệm thời gian, tôi sẽ dán mã mà bạn có thể tìm thấy đoạn mã này trong kho GitHub của tôi, chúng tôi bắt đầu với chỉ thị use client vì ranh giới lỗi phải là client các thành phần, chúng ta nhập một số CSS, rồi định nghĩa một thành phần phản ứng gọi là Global error, hiển thị một mỗi hai

Nếu có sự cố xảy ra, chỉ cần nhấn nút gọi là cửa sổ. Vị trí. tải lại và văn bản được làm mới rất đơn giản bây giờ trong cả hai tệp. Các lớp Tailwind được sử dụng để tạo kiểu và bạn sẽ chú ý đến toàn cầu. Import CSS tệp chưa tồn tại nên hãy tạo nó trong thư mục ứng dụng và tạo tệp mới gọi là toàn cầu. CSS bao gồm các thành phần và tiện ích cơ sở của Tailwind, tất cả rồi, thiết lập của chúng tôi giờ đã hoàn tất trên trình duyệt khi bạn Điều hướng đến Local Host 3000, bạn sẽ thấy thành phần wrapper mới được bao gồm của chúng tôi bao bọc P. TSX trong thư mục ứng dụng bằng cách sử dụng thành phần bao bọc này chúng ta có thể kích hoạt lỗi trong bố cục gốc, nhấp nút bây giờ chúng ta không thấy lỗi toàn cục

Khởi động biên chỉ thấy lớp lỗi chồng lên vì biên lỗi toàn cục chỉ hoạt động ở chế độ sản xuất Trong quá trình phát triển, bạn sẽ thấy lớp phủ NEX mặc định thay vào đó, vì vậy chúng ta có lỗi runtime chưa xử lý và lỗi thông báo lỗi mô phỏng trong bố cục root trong terminal nhấn contrl C để dừng máy chủ phát triển và chạy quá trình xây dựng lệnh npm chạy build rồi khởi động máy chủ sản xuất với npm chạy lại khởi động trong trình duyệt mô phỏng lại lỗi trong bố cục gốc, giờ chúng ta vẫn không thấy giao diện lỗi toàn cục và cũng không thấy lớp phủ lỗi nguyên nhân là lỗi toàn cục đó. TSX cần bao gồm các thẻ HTML và body riêng vì khi ranh giới lỗi này

Kick in nó thay thế hoàn toàn layout gốc của bạn, chúng ta có thẻ HTML và body trong layout. TSX cũng cần được bao gồm trong ranh giới lỗi toàn cục vì vậy HTML và body hãy xây dựng lại với npm chạy build và chạy lại với npm Run khởi động trong trình duyệt, mô phỏng lỗi lần nữa và chúng ta có thể thấy giao diện lỗi toàn cục có điều gì đó đã xảy ra và một nút để làm mới tương ứng với jsx có trong biên lỗi toàn cục của chúng tôi Chỉ hoạt động trong chế độ sản xuất và yêu cầu HTML cùng thẻ body được hiển thị, đây là hai điều quan trọng bạn cần biết về lỗi toàn cục. TSX Điều đó làm nó khác với lỗi thông thường của chúng tôi. TSX vì chúng tôi không thể phát hiện thêm lỗi nào nữa nên được khuyến nghị nên

có toàn cầu. TSX, HTML và CSS đơn giản nhất có thể sẽ là kịch bản lý tưởng mà bạn không muốn có lỗi từ Ranh giới lỗi toàn cục, tất cả đã bao quát các khái niệm chính về xử lý lỗi trong bộ định tuyến ứng dụng nexts, đã đến lúc đi sâu vào một số

---

**Điều hướng:** ← [Handling Errors in Layouts](Bai_05_handling-errors-in-layouts.md) · Tiếp theo → [Parallel Routes](Bai_07_parallel-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
