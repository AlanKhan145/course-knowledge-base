---
lesson_id: "M02-L03"
module: "Định tuyến và tổ chức file"
title: "Dynamic Routes"
source_version: "Next.js 15 App Router"
video_start: "00:21:50"
video_duration: "5 phút 59 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Dynamic Routes

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 5 phút 59 giây · **Mốc:** 00:21:50 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=1310s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Dynamic Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Dynamic Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Dynamic Routes** — Thư mục [productId] là dynamic segment khớp với nhiều URL /products/1, /products/2 và /products/iphone.
**2. Dynamic Routes** — Trong Next.js 15, prop params trên page là Promise; await params trước khi truy cập productId.
**3. Dynamic Routes** — Kiểm tra tính hợp lệ của ID và phản hồi 404 nếu không tìm thấy bản ghi, thay vì hiển thị sản phẩm không tồn tại.

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
type Props = { params: Promise<{ productId: string }> };
export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  return <h1>Chi tiết sản phẩm: {productId}</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Dynamic Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Dynamic Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Dynamic Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Thư mục [productId] là dynamic segment khớp với nhiều URL /products/1, /products/2 và /products/iphone.

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

- **Video nguồn:** [Dynamic Routes — 00:21:50](https://www.youtube.com/watch?v=k7o9R6eaSes&t=1310s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

các tuyến lồng nhau bằng cách tạo một thư mục khối trong thư mục ứng dụng với thư mục con thứ nhất và thứ hai, mỗi thư mục con có trang riêng. Tệp TSX tương ứng với /blog slir và /blog SLC, mặc dù điều này hoạt động cho các trường hợp đơn giản sử dụng các phần định nghĩa sẵn, nhưng không phải lúc nào cũng vậy. Thực tiễn cho các ứng dụng phức tạp, hãy cùng tìm hiểu kịch bản 4 để hiểu tại sao trong kịch bản này chúng ta lại xây dựng một danh sách sản phẩm và trang Chi tiết khi người dùng truy cập sản phẩm SL, họ sẽ thấy danh sách gồm ba sản phẩm Khi họ điều hướng đến/ sản phẩm rồi đến các sản phẩm đó thì họ nên thấy chi tiết cho sản phẩm đó ví dụ như điều hướng đến/ sản phẩm SL1 nên hiển thị chi tiết về sản phẩm đầu tiên sản phẩm SL2

nên hiển thị chi tiết về sản phẩm thứ hai, v.v. Để tôi chỉ cho bạn cách chúng ta có thể triển khai điều này trong NEXS, trước tiên hãy cùng Tạo một thư mục sản phẩm trong thư mục ứng dụng của chúng tôi Thư mục mới Sản phẩm bên trong chúng ta sẽ tạo một trang. Tệp TSX tệp này sẽ chứa một thành phần react hiển thị danh sách ba sản phẩm để xuất danh sách sản phẩm hàm mặc định và chúng tôi trả về một H1 ghi danh sách sản phẩm và ba H2 cho sản phẩm một, 2 và 3 nếu bạn truy cập Localhost 3000 Các sản phẩm SL bạn sẽ thấy danh sách sản phẩm của chúng tôi, phần một đã hoàn thành dựa trên những gì chúng tôi đã học về các tuyến đường lồng nhau bạn có thể nghĩ rằng chúng ta có thể tạo các thư mục riêng cho từng sản phẩm, đúng là một thư mục cho mã sản phẩm 1, một thư mục cho

Product ID 2 và tương tự trước và thứ hai trong thư mục khối của chúng ta, hãy thử cách tiếp cận đó, trước tiên chúng ta sẽ tạo một Thư mục được đặt tên là một trong thư mục sản phẩm của chúng tôi và thêm một trang. Ở đây chúng ta sẽ xuất mặc định một thành phần react hiển thị chi tiết văn bản về sản phẩm sử dụng thẻ H1 xuất hàm mặc định, trả về chi tiết sản phẩm và mỗi cái đều có chi tiết về sản phẩm, chắc chắn nếu chúng ta truy cập sản phẩm Local Host 3000 SL SL1 thì nó hoạt động nhưng đây là Hãy tưởng tượng việc có hàng trăm sản phẩm tạo một thư mục cho mỗi sản phẩm sẽ là một cơn ác mộng bảo trì, đây là một cơn ác mộng khi các phân đoạn định tuyến động hữu ích, trước tiên hãy xóa thư mục này và thay vào đó chúng ta sẽ tạo một thư mục đặc biệt

với dấu ngoặc vuông nên trong sản phẩm thư mục mới, dấu ngoặc vuông chúng ta sẽ gọi là ID sản phẩm. Tôi dùng ID sản phẩm thay vì hoặc chỉ là ID vì nó mô tả rõ ràng hơn trong thư mục này, chúng ta sẽ tạo trang của mình. Chúng tôi sẽ làm tệp TSX xuất mặc định cùng một thành phần, xuất chức năng mặc định chi tiết sản phẩm trả về mỗi chi tiết thẻ về sản phẩm nhưng giờ đây có điều thú vị xảy ra khi bạn làm mới trình duyệt và truy cập sản phẩm SL SL1, chúng ta sẽ thấy sản phẩm Trang chi tiết truy cập sản phẩm SL2 sản phẩm SL3 thậm chí sản phẩm SL100 đều hoạt động tốt vì Nexus xử lý tên thư mục trong ngoặc vuông như một phân đoạn động, giúp các tuyến của chúng tôi trở thành ID sản phẩm động và linh hoạt

ở đây ám chỉ mã sản phẩm từ 1 đến 100 v.v., nhưng việc hiển thị cùng một văn bản này cho mọi sản phẩm không thực sự hữu ích trong một ứng dụng thật bạn có thể lấy chi tiết sản phẩm từ API dựa trên ID sản phẩm này, ít nhất là bây giờ hiển thị sản phẩm mà chúng ta đang xem bây giờ Mỗi trang trong bộ định tuyến ứng dụng đều nhận các tham số định tuyến qua prop tham số Hãy phân cấu trúc nó dưới dạng tham số, loại tham số là một lời hứa kết quả cho một đối tượng chứa phân đoạn động như các cặp giá trị khóa trong trường hợp của chúng ta, đó là ID sản phẩm, tên thư mục của chúng ta, điểm hay của máy chủ thành phần là chúng ta có thể sử dụng AIT không đồng bộ để giải quyết lời hứa và truy cập phân đoạn động, do đó xuất ra mặc định không đồng bộ

chi tiết sản phẩm hàm và trong thành phần const product ID bằng các tham số AWA và truy cập hiển thị product ID Mã sản phẩm trong giao diện người dùng: Khi bạn truy cập sản phẩm SL1, bạn sẽ thấy chi tiết về sản phẩm một và/ sản phẩm sl100 hiển thị chi tiết về sản phẩm 100 và nhớ rằng ID không nhất thiết phải là số, có thể là chuỗi, ví dụ như sản phẩm SL, iPhone và chúng ta xem chi tiết về sản phẩm iPhone kịch bản 4 đã được triển khai thành công để tôi tóm tắt những gì chúng tôi đã xây dựng, chúng tôi đã tạo một thư mục với dấu ngoặc vuông chứa mã sản phẩm và được ghi . TSX bên trong nó và giờ là Nexts trên Maps bất kỳ sản phẩm SL nào trượt URL đến tệp này bên trong thành phần, chúng ta lấy ID sản phẩm từ prop parms để hiển thị Dynamic

Nội dung ở đây là trang trực quan hóa các tuyến đường động. TSX trong thư mục ứng dụng tương ứng với tuyến gốc trang. TSX trong thư mục products tương ứng với sản phẩm và trang. TSX trong ID sản phẩm trong ô vuông thư mục dấu ngoặc tương ứng với một đoạn động SL1 SL2 sl00 và tương tự mẫu này rất hữu ích cho việc xây dựng liệt kê các chế độ xem chi tiết trong ứng dụng của bạn dù bạn đang xây dựng một trang thương mại điện tử với hàng triệu sản phẩm hay Blog với vài trăm block post hoặc bất kỳ ứng dụng nào cần định tuyến động, cách tiếp cận này sẽ phục vụ bạn rất tốt. Hãy cùng phát triển kiến thức của chúng ta về

---

**Điều hướng:** ← [Nested Routes](Bai_02_nested-routes.md) · Tiếp theo → [Nested Dynamic Routes](Bai_04_nested-dynamic-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
