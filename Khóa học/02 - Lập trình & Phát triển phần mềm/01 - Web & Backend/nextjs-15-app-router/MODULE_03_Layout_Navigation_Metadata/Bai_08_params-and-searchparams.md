---
lesson_id: "M03-L08"
module: "Layouts, điều hướng và SEO"
title: "params and searchParams"
source_version: "Next.js 15 App Router"
video_start: "01:23:41"
video_duration: "5 phút 35 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. params and searchParams

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 5 phút 35 giây · **Mốc:** 01:23:41 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=5021s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **params and searchParams**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **params and searchParams** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. params and searchParams** — params mô tả dynamic segments; searchParams là dữ liệu query string sau dấu ?.
**2. params and searchParams** — Trong Next.js 15, page props params/searchParams có thể ở dạng Promise, cần await trong Server Component.
**3. params and searchParams** — URL query thích hợp cho filter, sort, pagination; luôn xác thực dữ liệu đầu vào vì user có thể tự sửa URL.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/products/page.tsx`

```tsx
type Props = { searchParams: Promise<{ q?: string; page?: string }> };
export default async function Products({ searchParams }: Props) {
  const { q = "", page = "1" } = await searchParams;
  const pageNumber = Math.max(1, Number.parseInt(page, 10) || 1);
  return <h1>Tìm: {q} — Trang {pageNumber}</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **params and searchParams**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **params and searchParams** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **params and searchParams** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** params mô tả dynamic segments; searchParams là dữ liệu query string sau dấu ?.

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

- **Video nguồn:** [params and searchParams — 01:23:41](https://www.youtube.com/watch?v=k7o9R6eaSes&t=5021s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Điều hướng bạn chắc chắn cần hiểu hai khái niệm này một cách đơn giản cho một tham số URL nhất định. hứa rằng re resols với một đối tượng chứa các tham số Dynamic route như ID, ví dụ search patterms, là một hứa rằng sẽ chuyển sang một đối tượng chứa các tham số truy vấn như bộ lọc và STING để hiểu điều này Tốt hơn là hãy xây dựng một trang bài báo tin tức đơn giản hỗ trợ nhiều ngôn ngữ trước tiên hãy xem cách tạo liên kết với cả parms và search parms trong thành phần home, thêm hai liên kết, liên kết đầu tiên ghi read in English và href là SL bài viết SL tin nóng1 23 dấu hỏi ngôn ngữ bằng tiếng Anh Tôi sẽ sao chép liên kết này thay đổi

văn bản để đọc bằng tiếng Pháp và đổi ngôn ngữ sang FR FR tại đây tin nóng 1 đến 3 là tham số tuyến động và language là tham số truy vấn, tiếp theo hãy định nghĩa một route cho các Articles, chúng ta đã làm điều này trước đây, nên trong thư mục ứng dụng tạo một thư mục có tên bài viết và bên trong tạo một thư mục khác gọi là article ID, lần này nằm trong dấu ngoặc vuông bên trong thư mục tạo Một trang. Tệp TSX và Định nghĩa thành phần bài viết mới nhất, xuất hàm mặc định bài báo tin tức và cho jsx hiển thị một thẻ H1 với bài báo tin tức văn bản kèm theo ID và một đoạn văn với phần văn bản được đọc bằng ngôn ngữ tôi sẽ sau đó thêm một bộ chuyển đổi ngôn ngữ với các liên kết để chuyển đổi ngôn ngữ, tức là nhập thành phần liên kết từ liên kết SL tiếp theo và

Gọi nó ngôn ngữ sẽ là tiếng Anh và HRE sẽ là/ bài viết / ID dấu hỏi ngôn ngữ bằng với tương tự, chúng tôi sẽ tạo tiếng Tây Ban Nha và tiếng Pháp với ngôn ngữ bằng ES và FR FR trong trình duyệt khi bạn nhấp vào liên kết L đọc bằng tiếng Anh, thành phần bài báo tin tức được hiển thị, chúng ta có tin nóng 123, là tham số tuyến đường và L bằng I, là tham số truy vấn quay lại, nhấp vào read bằng tiếng Pháp và chúng ta thấy cùng một thành phần với ngôn ngữ bằng F FR, bước tiếp theo của chúng ta là truy cập giá trị của các từ khóa và các từ khóa tìm kiếm trong bài báo thành phần và hiển thị chúng trong giao diện người dùng thay thế ID và ngôn ngữ, bắt đầu bằng cách giải cấu trúc các parms và parms tìm kiếm

từ props parms là một lời hứa được giải quyết thành một đối tượng chứa các tham số tuyến đường động trong bài viết ID của chúng ta là tham số định tuyến động, đây là loại tham số tìm kiếm chuỗi, là một lời hứa chuyển thành một đối tượng chứa truy vấn tham số: Lang là tham số truy vấn và giá trị có thể là tiếng Anh, tiếng Anh, tiếng Tây Ban Nha hoặc tiếng Pháp, cũng có thể làm cho nó tùy chọn vì parms và search PMS là những lời hứa nên bạn sẽ cần aade chúng trong thành phần, thêm từ khóa ASN vào hàm và aade các parms và các mẫu tìm kiếm lấy ID bài viết từ các tham số và ngôn ngữ từ tham số tìm kiếm với giá trị mặc định là tiếng Anh, bây giờ thay thế văn bản giữ chỗ trong jsx bằng giá trị mã bài viết và

ngôn ngữ cho các liên kết sử dụng PEX thay vì dấu ngoặc kép và nội suy ID đô la để mã số bài viết trên cả ba liên kết đều hướng đến trình duyệt và chúng ta thấy các giá trị hiển thị trong giao diện người dùng, bài báo tin nóng 123 đọc bằng tiếng Pháp, nhấp vào ngôn ngữ các liên kết ngôn ngữ và bạn sẽ thấy những thay đổi ngôn ngữ, tôi nên lưu ý rằng bạn có thể chờ đợi và truy cập PARMS và tìm kiếm parms trong thành phần bài báo tin tức vì nó là thành phần máy chủ nếu đây là thành phần máy khách bạn sẽ nhận được lỗi vì các thành phần client không hỗ trợ async a và sử dụng client ở trên cùng, bạn sẽ thấy vấn đề bây giờ là để truy cập các giá trị của patterms và search patterms trong thành phần khách, bạn sẽ cần sử dụng một hook

từ react, đây là use hook, vậy hãy xóa async và await, thay vào đó nhập use từ react, gọi hook này truyền tham số và tham số tìm kiếm, vào trình duyệt và bạn có thể thấy thành phần vẫn hoạt động như mong đợi Vì vậy, async chờ các thành phần máy chủ nhưng dùng hook cho các thành phần khách, đó là cách bạn truy cập patterms và tìm kiếm Patterms in nures Bây giờ Một điểm rất quan trọng cần lưu ý là trong khi trang. TSX có quyền truy cập cả patterms và tìm kiếm Bố cục Patterms. TSX chỉ có quyền truy cập vào các thuật ngữ tìm kiếm patterms, không có sẵn trong các thành phần bố cục như một bài tập Định nghĩa một thành phần bố cục và cố gắng truy cập các từ khóa tìm kiếm trong đó, đồng thời cho tôi biết trong phần bình luận bên dưới

---

**Điều hướng:** ← [Active Links](Bai_07_active-links.md) · Tiếp theo → [Navigating Programmatically](Bai_09_navigating-programmatically.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
