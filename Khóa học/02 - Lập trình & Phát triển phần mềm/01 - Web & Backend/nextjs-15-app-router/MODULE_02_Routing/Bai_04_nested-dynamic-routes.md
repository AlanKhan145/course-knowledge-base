---
lesson_id: "M02-L04"
module: "Định tuyến và tổ chức file"
title: "Nested Dynamic Routes"
source_version: "Next.js 15 App Router"
video_start: "00:27:49"
video_duration: "3 phút 34 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Nested Dynamic Routes

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 3 phút 34 giây · **Mốc:** 00:27:49 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=1669s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Nested Dynamic Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Nested Dynamic Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Nested Dynamic Routes** — Ghép /products/[productId]/reviews/[reviewId] để đọc hai tham số từ cùng một object params.
**2. Nested Dynamic Routes** — Đặt tên tham số mô tả ý nghĩa giúp phân biệt nhiều cấp route.
**3. Nested Dynamic Routes** — Có thể thêm page.tsx ở reviews/ để hiển thị danh sách review trước khi truy cập từng review.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/products/[productId]/reviews/[reviewId]/page.tsx`

```tsx
type Props = { params: Promise<{ productId: string; reviewId: string }> };
export default async function ReviewPage({ params }: Props) {
  const { productId, reviewId } = await params;
  return <h1>Review {reviewId} của sản phẩm {productId}</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Nested Dynamic Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Nested Dynamic Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Nested Dynamic Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Ghép /products/[productId]/reviews/[reviewId] để đọc hai tham số từ cùng một object params.

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

- **Video nguồn:** [Nested Dynamic Routes — 00:27:49](https://www.youtube.com/watch?v=k7o9R6eaSes&t=1669s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

các tuyến động và khám phá các tuyến động lồng nhau trong các ứng dụng thực tế mà bạn thường gặp các kịch bản bạn cần xử lý nhiều đoạn động trong các tuyến đường của mình hãy xem xét kịch bản 5 bạn muốn hiển thị Chi tiết sản phẩm tại/ products1 nhưng bạn cũng cần hiển thị đánh giá đầu tiên cho sản phẩm đó tại/ products1 đánh giá SL SL1 để tôi chỉ cho bạn cách thiết lập điều này với bộ định tuyến ứng dụng trước đây chúng tôi đã thiết lập định tuyến ID sản phẩm động, đó là lý do/product1 đã có hiển thị chi tiết sản phẩm ngay bây giờ Hãy cùng đối mặt với sản phẩm SL Đánh giá SL1 SL SL1 nếu bạn thoải mái với file Dựa trên định tuyến, phần tiếp theo này sẽ được hiểu ngay lập tức khi chúng ta xử lý nhiều đoạn đường dẫn khác nhau, chúng ta

cần suy nghĩ về các thư mục lồng nhau, đây là những việc đầu tiên chúng ta sẽ làm trong thư mục ID sản phẩm: tạo một đánh giá. thư mục này cung cấp cho chúng ta mã sản phẩm SL/ đánh giá, nhưng chúng ta chưa xong, chúng ta cũng cần một mã đánh giá động nên bên trong thư mục đánh giá này, tạo một thư mục khác có tên review ID trong dấu ngoặc vuông trong thư mục này tạo một trang. Ở đây, hãy định nghĩa một thành phần react hiển thị cả ID sản phẩm và ID đánh giá để xuất mặc định async chức năng đánh giá sản phẩm và chúng tôi cấu trúc lại các tham số đường dẫn là loại hứa hẹn sẽ kết quả với mã sản phẩm là kiểu chuỗi và ID đánh giá kiểu chuỗi sản phẩm và mã đánh giá tương ứng với mã sản phẩm là động

Route và Review ID cũng là Dynamic route trong thành phần, chúng tôi phân cấu trúc Product ID và Review ID bằng cách chờ đợi sau đó, chúng tôi trả về từng ID đánh giá và tiếp theo là ID sản phẩm sản phẩm ngay bây giờ để phần thú vị trong trình duyệt điều hướng đến sản phẩm localhost 3000 SL1 Đánh giá SL1 và bạn sẽ thấy chính xác những gì chúng tôi muốn đánh giá một Đối với sản phẩm số một, thử thay đổi URL, có thể vào sản phẩm 100 và xem lại ID số năm, theo dõi các ID đó cập nhật theo thời gian thực đánh giá năm cho sản phẩm 100 Chúng tôi đã triển khai thành công kịch bản 5 Dưới đây là hình ảnh trực quan giúp bạn hình dung các tuyến động lồng nhau này. TSX trong thư mục ứng dụng tương ứng với trang gốc. TSX Within sản phẩm

tương ứng với/ sản phẩm p. TSX trong mã sản phẩm tương ứng/ một chúng tôi không có tuyến duyệt danh sách và chúng tôi bỏ qua đến xem lại ID ở đâu là trang. TSX tương ứng với đánh giá ID one sản phẩm SL1 đánh giá SL1 điểm chính ở đây là rằng bạn có thể tạo các tuyến động lồng nhau đơn giản bằng cách sử dụng d đoạn DC với tên thư mục lồng nhau, nhưng đây là một điều thú vị nexs thực ra có một cách khác để xử lý nhiều phân đoạn linh kiện động trước khi chúng ta đi sâu vào điều đó. Có một bài tập để bạn thực hiện một trang liệt kê đánh giá cho mỗi sản phẩm, vì vậy hãy tạo một trang. Tệp TSX trong phần đánh giá Thư mục và liệt kê vài bài đánh giá Hãy cho tôi biết kết quả ở phần bình luận Hãy cùng khám phá một bài đánh giá mạnh mẽ khác

---

**Điều hướng:** ← [Dynamic Routes](Bai_03_dynamic-routes.md) · Tiếp theo → [Catch-all Segments](Bai_05_catch-all-segments.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
