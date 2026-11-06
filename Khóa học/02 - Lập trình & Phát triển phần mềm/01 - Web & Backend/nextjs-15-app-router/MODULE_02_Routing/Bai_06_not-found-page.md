---
lesson_id: "M02-L06"
module: "Định tuyến và tổ chức file"
title: "Not Found Page"
source_version: "Next.js 15 App Router"
video_start: "00:37:32"
video_duration: "5 phút 13 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Not Found Page

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 5 phút 13 giây · **Mốc:** 00:37:32 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2252s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Not Found Page**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Not Found Page** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Not Found Page** — not-found.tsx định nghĩa giao diện 404 theo route segment; notFound() từ next/navigation được gọi khi dữ liệu không tồn tại.
**2. Not Found Page** — Sự kiện notFound() làm render not-found boundary phù hợp thay vì thông báo lỗi tùy ý.
**3. Thiết kế hướng người dùng** — Thiết kế hướng người dùng: hiển thị mô tả, gợi ý trở lại danh sách và đường dẫn điều hướng.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/products/[productId]/page.tsx`

```tsx
import { notFound } from "next/navigation";
type Props = { params: Promise<{ productId: string }> };
export default async function Product({ params }: Props) {
  const { productId } = await params;
  if (!/^\d+$/.test(productId)) notFound();
  return <h1>Sản phẩm #{productId}</h1>;
}
// src/app/products/[productId]/not-found.tsx
export default function ProductNotFound() {
  return <p>Không tìm thấy sản phẩm bạn yêu cầu.</p>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Not Found Page**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Not Found Page** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Not Found Page** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** not-found.tsx định nghĩa giao diện 404 theo route segment; notFound() từ next/navigation được gọi khi dữ liệu không tồn tại.

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

- **Video nguồn:** [Not Found Page — 00:37:32](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2252s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

chủ đề: hãy cùng khám phá cách tạo trang 404 tùy chỉnh bằng bộ định tuyến ứng dụng mặc định khi bạn truy cập một tuyến đường mà không tồn tại trong thư mục ứng dụng của bạn, bạn sẽ thấy một trang cơ bản 44 trang, hãy thử truy cập tòa nhà localhost 3000b để xem những gì tôi trong khi trang mặc định này hoạt động tốt cho phát triển, bạn có thể muốn tùy chỉnh nó cho trang sản xuất của mình Tin tốt là rất đơn giản, tất cả những gì bạn cần làm là tạo một tệp có tên Notfound DJs hoặc notf found. TSX nếu Bạn đang dùng TypeScript trong thư mục ứng dụng, để tôi chỉ cho bạn cách đầu tiên trong VS Code tạo một tệp mới trong thư mục ứng dụng có tên Not Found. TSX không tìm thấy dấu gạch nối. TSX hãy nhớ tên tệp phải hoàn toàn không phải dấu gạch nối. Tìm thấy dấu gạch nối. Đây là hội nghị năm sau. Định nghĩa và xuất

một thành phần react nên không tìm thấy hàm mặc định xuất và chúng ta trả về một thẻ div với tiêu đề H2 ghi là page không tìm thấy và thẻ đoạn văn không thể tìm thấy tài nguyên được yêu cầu, bạn có thể thoải mái tạo hình thành phần này theo ý muốn Tôi giữ mọi thứ đơn giản ở đây vì chúng ta tập trung vào ý tưởng hơn là tạo phong cách nếu bạn làm mới trình duyệt bây giờ bạn sẽ thấy trang tùy chỉnh không tìm thấy thay vì trang mặc định là trang không tìm thấy tài nguyên yêu cầu tệp này đặc biệt hữu ích cho các trang sản xuất, nơi bạn muốn trang 404 của mình phù hợp với thương hiệu trang web và Thiết kế nhưng đây là một điều thú vị trong khi trang Noton này hoạt động tự động với định tuyến dựa trên tệp năm sau, bạn có thể

Ngoài ra, hãy kích hoạt nó một cách lập trình bằng hàm Not Found để tôi cho bạn xem một ví dụ, giả sử chúng ta đang xây dựng một hệ thống đánh giá sản phẩm, nơi chúng tôi sẽ không bao giờ có quá 1.000 đánh giá và chúng tôi muốn hiển thị một trang 404 cho bất kỳ ID đánh giá trên 1.000 nên ở trang thư mục ID đánh giá. tệp TSX nhập hàm không tìm thấy từ điều hướng SL tiếp theo rồi trong thành phần nếu mã đánh giá cú pháp int lớn hơn 1.000 gọi hàm Not found và nhân tiện, đây là một tính năng thú vị khác bạn có thể tạo noton cụ thể Các trang cho các phần khác nhau của ứng dụng, ví dụ trong thư mục ID xem xét, bạn có thể tạo một notf tìm thấy khác. Tệp TSX

với thông điệp cụ thể hơn, nên tôi sẽ sao chép file notfound từ thư mục ứng dụng rồi dán vào phần đánh giá ID thư mục và thay đổi đánh giá tin nhắn không tìm thấy trong trình duyệt khi bạn truy cập slash products slash1 slre reviews sl1000 và1 bạn sẽ thấy trang không tìm thấy đánh giá cụ thể hơn thay vì trang Global 404 của bạn, điều này là do tiếp theo, chúng ta sử dụng trang not Fon cụ thể nhất mà nó có thể tìm thấy, trong trường hợp này là trang trong thư mục review ID thay vì thư mục trong thư mục Tuy nhiên, trong thư mục ứng dụng, một điều cần lưu ý là thành phần không tìm thấy không chấp nhận các đạo cụ bạn có thể bạn đang thắc mắc nếu tôi cần hiển thị các thông điệp khác nhau dựa trên tham số route thì chúng ta sẽ dựa vào đường dẫn sử dụng

name Hook từ nexs, hãy nhập nó và gọi nó trong component chưa tìm thấy của chúng ta, import use path name from next Điều hướng SL và sau đó trong tên đường dẫn const của thành phần bằng với tên đường dẫn, tuy nhiên khi lưu lại tệp chúng tôi gặp lỗi Bạn đang nhập một thành phần cần sử dụng tên đường dẫn React hook này chỉ hoạt động trong một thành phần khách hàng để sửa lỗi Đánh dấu tệp hoặc cha của nó bằng chỉ thị client đã sử dụng nếu bạn nhớ từ trước đó I đã đề cập rằng trong kiến trúc thành phần react server mới, tất cả các thành phần react đều là thành phần máy chủ bởi default và hook chỉ có thể sử dụng bên trong các thành phần client, vì vậy hãy làm theo hướng dẫn để sửa eror add use

khách hàng ở đầu tệp trong dấu ngoặc kép sử dụng thành phần client của chúng tôi không phải phông chữ giờ là thành phần thành phần khách hàng bạn có thể truy cập hằng số tên đường dẫn trong thành phần và trích xuất các tham số route từ đó để const product ID bằng tên đường dẫn. Spit trên dấu gạch chéo tiến mà chúng ta truy cập tại chỉ số 2, tương tự như ID xem xét sẽ là tên đường dẫn. tách tại cho Slash và access index 4, giờ chúng ta có thể hiển thị các giá trị đã trích xuất trong các thành phần jsx ID đánh giá không tìm thấy cho ID sản phẩm trong trình duyệt bạn sẽ thấy thông báo đánh giá 1,00 và một không tìm thấy Đối với Product One, đó là tất cả những gì bạn cần biết về tệp và chức năng không tìm thấy trong ứng dụng NEXS

---

**Điều hướng:** ← [Catch-all Segments](Bai_05_catch-all-segments.md) · Tiếp theo → [File Colocation](Bai_07_file-colocation.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
