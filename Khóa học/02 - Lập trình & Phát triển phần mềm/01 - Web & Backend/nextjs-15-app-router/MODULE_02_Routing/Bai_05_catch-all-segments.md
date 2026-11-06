---
lesson_id: "M02-L05"
module: "Định tuyến và tổ chức file"
title: "Catch-all Segments"
source_version: "Next.js 15 App Router"
video_start: "00:31:23"
video_duration: "6 phút 09 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. Catch-all Segments

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 6 phút 09 giây · **Mốc:** 00:31:23 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=1883s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Catch-all Segments**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Catch-all Segments** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Catch-all Segments** — [...slug] khớp ít nhất một segment; [[...slug]] cho phép cả đường dẫn gốc không có slug.
**2. Catch-all Segments** — slug có dạng string[] hoặc undefined ở optional catch-all; ví dụ /docs/routing/dynamic.
**3. Catch-all Segments** — Phù hợp cho docs, danh mục phân cấp hoặc trình duyệt nội dung nhiều cấp; vẫn cần xác thực segment hợp lệ.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/docs/[[...slug]]/page.tsx`

```tsx
type Props = { params: Promise<{ slug?: string[] }> };
export default async function DocsPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) return <h1>Trang chủ tài liệu</h1>;
  return <h1>Tài liệu: {slug.join(" / ")}</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Catch-all Segments**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Catch-all Segments** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Catch-all Segments** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** [...slug] khớp ít nhất một segment; [[...slug]] cho phép cả đường dẫn gốc không có slug.

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

- **Video nguồn:** [Catch-all Segments — 00:31:23](https://www.youtube.com/watch?v=k7o9R6eaSes&t=1883s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Khái niệm định tuyến gọi là Catchall Segment để hiểu rõ hơn, hãy xem xét kịch bản 6, hãy tưởng tượng chúng ta đang xây dựng một trang tài liệu cho dự án của chúng tôi Trang này có nhiều tính năng và mỗi tính năng chứa nhiều Khái niệm cần tài liệu minh họa: một điều hướng bên với năm tính năng, trong đó tính năng đầu tiên mở rộng để hiển thị năm tính năng. các khái niệm khác nhau, mục tiêu là tạo ra các tuyến riêng biệt cho từng khái niệm dưới các tính năng tương ứng của nó, hãy cân nhắc các URL như localhost 3000 do/ tính năng 1 khái niệm SL 1/ do/ tính năng 1/c khái niệm 2/ do/ tính năng 2/ khái niệm 1 và tương tự bây giờ nếu chúng ta có 20 tính năng và mỗi tính năng có 20 khái niệm, chúng tôi xem xét 400 tuyến đường khác nhau vì nexs sử dụng hệ thống tệp

Định tuyến điều đó có nghĩa là 400 tệp riêng biệt trong một dự án nhưng đây là lúc Định tuyến Động phát huy tác dụng sử dụng các thư mục Dynamic route với ID khái niệm, chúng ta có thể giảm xuống chỉ còn 20 tệp, tiến thêm một bước nữa làm cho thư mục tính năng động với ID tính năng và chúng ta chỉ còn hai thư mục, một cho ID tính năng và một cho Khái niệm ID tốt hơn nhiều nhưng vẫn có một điều kiện mỗi khi chúng ta thêm đoạn A New Path vào URL như SL docs SL có một khái niệm SLC, một ví dụ SL, chúng ta cần một cấp độ lồng nhau nữa trong thư mục routes vì mỗi trang đều trong Tài liệu của chúng ta chia sẻ cùng bố cục Sẽ tuyệt biết bao nếu chúng ta có thể xử lý tất cả các đoạn tuyến này chỉ với một

Đó chính là những gì tính năng Catch All Segments cho phép chúng tôi làm. Để tôi chỉ cho bạn cách thiết lập nó trong thư mục ứng dụng của bạn. tạo một thư mục docs bên trong tạo một thư mục khác với quy ước đặt tên đặc biệt của nexs sử dụng dấu ngoặc vuông với ba dấu chấm như toán tử trải rộng theo sau là tên mà chúng ta sẽ sử dụng slug vì đây là thuật ngữ phổ biến cho URL Sau đó tạo một trang. Tệp TSX trong thư mục slug mặc định xuất một thành phần react để xuất hàm mặc định nói rằng trả về một thẻ H1 talks homepage: điều kỳ diệu của tệp này là nó khớp với bất kỳ URL nào có DO trong đường dẫn, hãy thử dù bạn truy cập SL dos tính năng SL 1/c concept one hay thậm chí SL do/feature oneconcept one SL một ví dụ bạn sẽ làm được.

xem cùng một trang docs là tuyến bắt tất cả các phân đoạn đang hoạt động, nó sẽ thu thập tất cả các đoạn URL và xử lý chúng trong tệp đơn, đây là lựa chọn hoàn hảo cho các trang tài liệu nơi bạn muốn có các đoạn URL khác nhau để tổ chức và SEO nhưng giữ nguyên bố cục cơ bản, tất nhiên bạn sẽ muốn truy cập các đoạn URL khác nhau trong mã của mình. tôi chỉ cho bạn cách làm điều đó bằng đối tượng params, chúng ta phân cấu trúc tham số từ prop và tham số là kiểu như hứa hẹn chúng ta có slug là một mảng chuỗi trong cấu trúc thành phần D slug từ các tham số bằng cách chờ nó thành phần của bạn là một hàm bất đồng bộ cho jsx, chúng ta sẽ sử dụng bất kỳ khối Els nào để xử lý các khả năng khác nhau, nên nếu SL

tồn tại và độ dài bằng hai trả về một chó xem thẻ H1 cho đặc trưng slug bằng không và slug khái niệm của một cái khác, nếu slug tồn tại và chiều dài bằng một, ta trả về một h1 tag weing dogs cho đặc trưng slug bằng không Rất đơn giản trên trình duyệt, điều hướng đến SL docs SL routing và bạn sẽ thấy xem tài liệu để định tuyến tính năng Điều hướng đến/ Docs SL/ Định tuyến SL Bắt tất cả các phân đoạn và bạn sẽ thấy xem tài liệu cho định tuyến và khái niệm tính năng bắt tất cả các phân đoạn bạn có thể tùy chỉnh logic giao diện này theo cách bạn muốn, nhưng thường bạn sẽ sử dụng mảng slug để lấy tài liệu phù hợp cho từng tính năng hoặc khái niệm, kịch bản 6 đã được triển khai thành công ngay bây giờ tiếp theo

hiện cũng cung cấp tùy chọn các phân đoạn bao quát nếu bạn chỉ điều hướng đến SL Docs trong URL, bạn sẽ thấy lỗi 404 Nhưng nếu bạn muốn hiển thị cùng trang tài liệu ở đây thì chỉ cần đóng dấu tên thư mục bằng một cặp dấu ngoặc vuông thêm đổi tên thư mục slug và quấn nó bằng một cặp dấu ngoặc vuông bổ sung, điều này làm cho các đoạn slug trở nên tùy chọn và bây giờ Slash Docs cũng sẽ hoạt động, kích hoạt câu trả về cuối cùng này. Bây giờ bạn có thể đang thắc mắc khi nào nên dùng một trang đơn giản. TSX Trong thư mục Docs so với trang bao gồm tùy chọn. TSX vì cả hai đều hiển thị giao diện người dùng/ tài liệu trong URL rất tốt rất đơn giản nếu giao diện trang của bạn luôn giống với trang đơn giản. TSX trong thư mục docs nếu giao diện trang của bạn là

khác nhau tùy theo URL ví dụ như trong kịch bản hiện tại của chúng ta thì hãy sử dụng tùy chọn bắt tất cả Trang tuyến đường. TSX trong thư mục slug thay vì trên trang. TSX ngay trong thư mục docs là một hình ảnh trực quan Bắt tất cả các phân đoạn của máy chủ 3000 sẽ hiển thị trang. TSX trong thư mục ứng dụng cho bất kỳ URL nào chứa tài liệu mà chúng tôi hiển thị trang. TSX trong thư mục slug là phân khúc tổng quát của chúng tôi, đúng là cái nhìn toàn diện về các phân đoạn cashall Chúng ta đã đề cập khá nhiều về định tuyến năm tới nhưng vẫn còn nhiều điều để khám phá, hãy tiếp tục với dự án tiếp theo

---

**Điều hướng:** ← [Nested Dynamic Routes](Bai_04_nested-dynamic-routes.md) · Tiếp theo → [Not Found Page](Bai_06_not-found-page.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
