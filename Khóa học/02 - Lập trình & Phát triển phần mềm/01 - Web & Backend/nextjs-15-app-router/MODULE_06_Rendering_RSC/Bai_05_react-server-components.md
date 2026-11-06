---
lesson_id: "M06-L05"
module: "Rendering và React Server Components"
title: "React Server Components"
source_version: "Next.js 15 App Router"
video_start: "03:34:44"
video_duration: "6 phút 30 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. React Server Components

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 6 phút 30 giây · **Mốc:** 03:34:44 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12884s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **React Server Components**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **React Server Components** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. React Server Components** — RSC chạy trên server để tạo payload mà React có thể phối hợp với client tree.
**2. React Server Components** — Server Component có thể đọc trực tiếp DB/secret server và tránh đóng gói code đó trong client bundle.
**3. React Server Components** — RSC không mặc định có khả năng tương tác event; kết hợp Client Components ở boundary rõ ràng.

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
// Server Component: Không cần "use client".
export default async function ProductList() {
  const result = await fetch("https://dummyjson.com/products?limit=5", { cache: "no-store" });
  if (!result.ok) throw new Error("Không lấy được sản phẩm");
  const data: { products: { id: number; title: string }[] } = await result.json();
  return <ul>{data.products.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **React Server Components**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **React Server Components** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **React Server Components** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** RSC chạy trên server để tạo payload mà React có thể phối hợp với client tree.

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

- **Video nguồn:** [React Server Components — 03:34:44](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12884s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Sự hồi hộp cho phần dựng hình bên của Serer, mỗi bước đều mang đến những cải tiến nhưng cũng mang đến những thử thách mới cho sự hồi hộp với SSR đã đưa chúng tôi đến gần hơn với trải nghiệm render liền mạch nhưng vẫn gặp khó khăn với kích thước gói lớn gây tải xuống quá mức cho người dùng, uống nước không cần thiết, trì hoãn tương tác và phía khách tải nặng Quá trình xử lý dẫn đến hiệu suất kém hơn để giải quyết những thách thức này, chúng tôi cần nhiều hơn một bước nhỏ từng bước. cần một bước nhảy vọt đáng kể để đưa chúng ta đến các thành phần máy chủ react RSC cho các thành phần máy chủ react ngắn gọn đại diện cho một kiến trúc mới do nhóm React thiết kế Cách tiếp cận này tận dụng thế mạnh của cả máy chủ và máy khách

Môi trường để tối ưu hóa hiệu quả, thời gian tải và tính tương tác, kiến trúc giới thiệu mô hình thành phần kép Phân biệt giữa thành phần máy khách và thành phần máy chủ, sự phân biệt này không dựa trên thành phần hay chức năng mà là Về môi trường thực thi và các hệ thống cụ thể mà chúng được thiết kế để tương tác, hãy cùng xem xét kỹ hơn tại hai loại thành phần này, bắt đầu với thành phần khách hàng các thành phần khách là phản ứng quen thuộc Các thành phần mà chúng tôi đã sử dụng và bàn luận trong các kỹ thuật render trước đây, chúng thường được render ở phía khách hàng nhưng chúng cũng có thể được hiển thị sang HTML một lần trên máy chủ, cho phép người dùng ngay lập tức nhìn thấy

Trang HTML nội dung thay vì màn hình trống. Tôi biết nghe có vẻ khó hiểu khi nói các thành phần khách hàng có thể hiển thị trên máy chủ nhưng tốt nhất nên hiểu như một chiến lược tối ưu hóa, các thành phần này chủ yếu hoạt động trên client nhưng có thể và nên chạy một lần trên máy chủ để hiệu suất tốt hơn; các thành phần client có quyền truy cập đầy đủ vào môi trường máy khách như trình duyệt cho phép họ sử dụng hiệu ứng trạng thái và trình lắng nghe sự kiện để xử lý tương tác, chúng cũng có thể truy cập API độc quyền của trình duyệt như định vị địa lý hoặc lưu trữ cục bộ, cho phép bạn xây dựng Giao diện người dùng cho các trường hợp sử dụng cụ thể, giống như chúng tôi đã làm suốt những năm qua trước khi kiến trúc RSC được giới thiệu trong

thực tế, thuật ngữ thành phần khách hàng không mang ý nghĩa gì mới, nó chỉ giúp phân biệt các thành phần này với các thành phần máy chủ mới được giới thiệu các thành phần máy chủ đại diện cho một loại thành phần react mới được thiết kế đặc biệt để hoạt động độc quyền trên máy chủ và không giống như các thành phần khách, mã của chúng vẫn ở trên máy chủ và không bao giờ được tải xuống máy khách, thiết kế này Lựa chọn mang lại nhiều lợi ích cho các ứng dụng phản ứng Hãy cùng xem xét kỹ hơn những lợi ích này là gì, đầu tiên là các gói nhỏ hơn vì các thành phần máy chủ vẫn hoạt động máy chủ tất cả các phụ thuộc của họ cũng ở đó, điều này rất tuyệt vời cho người dùng có kết nối chậm hoặc yếu hơn

vì chúng không cần tải về pars và chạy JavaScript cộng thêm không có sự hỗ trợ bước làm cho ứng dụng của bạn tải và tương tác nhanh hơn ngay khi bạn có quyền truy cập trực tiếp vào máy chủ tài nguyên máy chủ Các thành phần có thể giao tiếp trực tiếp với cơ sở dữ liệu và hệ thống tệp, giúp việc lấy dữ liệu trở nên cực kỳ hiệu quả mà không cần Xử lý phía máy khách Chúng sử dụng sức mạnh của máy chủ và sự gần gũi với nguồn dữ liệu để quản lý các tính toán nặng các tác vụ hiển thị, bảo mật thứ ba cũng được tăng cường vì các thành phần máy chủ chỉ chạy trên dữ liệu nhạy cảm của máy chủ và logic như khóa và token không bao giờ rời khỏi máy chủ thứ tư việc lấy dữ liệu trở nên thông minh hơn nhiều các thành phần máy chủ cho phép bạn

di chuyển việc lấy dữ liệu đến máy chủ gần hơn với nguồn dữ liệu của bạn Điều này có thể cải thiện hiệu suất bằng cách giảm thời gian để lấy dữ liệu cần thiết cho render và số lượng yêu cầu mà client cần thực hiện có bộ nhớ đệm khi bạn kết xuất trên máy chủ bạn có thể lưu trữ kết quả và sử dụng cho các người dùng và yêu cầu khác nhau, điều này có nghĩa là tốt hơn Hiệu năng và chi phí thấp hơn vì bạn không phải render lại và luôn lấy dữ liệu tham khảo khi tải trang đầu tiên thứ sáu và Contentful Paint đầu tiên được nâng cấp nghiêm túc bằng cách tạo HTML trên máy chủ, người dùng sẽ thấy nội dung của bạn ngay lập tức và không cần phải chờ JavaScript tải xuống và thực thi, SEO thứ bảy cũng được cải thiện. Bot công cụ tìm kiếm cũng có thể

dễ dàng đọc HTML được hiển thị trên máy chủ giúp các trang của bạn dễ lập chỉ mục hơn và cuối cùng là máy chủ phát trực tuyến Các thành phần có thể chia quy trình render thành các đoạn để truyền đến client khi đã sẵn sàng, nghĩa là người dùng bắt đầu xem nội dung của họ nhanh hơn thay vì chờ toàn bộ trang hiển thị trên máy chủ trong react kiến trúc thành phần máy chủ Các thành phần máy chủ xử lý việc lấy dữ liệu và kết xuất tĩnh trong khi các thành phần máy khách Hãy chú ý đến việc hiển thị các yếu tố tương tác. Điều tuyệt vời của thiết lập này là bạn sẽ tận dụng tối đa cả máy chủ và Kết xuất client khi sử dụng một framework ngôn ngữ duy nhất và tập hợp API duy nhất, giống như nhận được tất cả lợi ích của

Các kỹ thuật R in truyền thống nhưng không có nhược điểm thì chúng tôi đã đề cập khá nhiều nên để tôi đơn giản hóa những gì đã học Với những điểm chính, các thành phần React Server mang đến một cách tiếp cận mới để xây dựng ứng dụng React bằng cách tách biệt các thành phần thành hai loại: thành phần máy chủ và thành phần máy khách thành phần máy chủ chạy độc quyền trên máy chủ Họ lấy dữ liệu và chuẩn bị nội dung mà không gửi mã đến trình duyệt, điều này giúp ứng dụng của bạn nhanh hơn vì người dùng tải ít mã hơn, tuy nhiên các thành phần máy chủ không thể xử lý bất kỳ hành động tương tác nào của các thành phần khách hàng trên các thành phần khác. chạy thủ công trong trình duyệt và quản lý tất cả các phần tương tác như nhấp chuột và gõ phím, chúng cũng có thể lấy chữ cái đầu tiên

Kết xuất máy chủ để tải trang nhanh hơn, cùng nhau giúp các trang web nhanh hơn, an toàn hơn và dễ tiếp cận hơn với mọi người Bất kể thiết bị hay vị trí của họ là gì, bạn có thể đang nghĩ OK VAS, đây đều là thông tin rất hữu ích về Reacts Rendering Evolution nhưng làm thế nào để kết nối với các chia sẻ tiếp theo tốt? Đây là điều mà bộ định tuyến ứng dụng trong nexs được xây dựng Hoàn toàn dựa trên kiến trúc React Server Components, tất cả những lợi ích này chúng ta vừa thảo luận, chúng đã được xây dựng sẵn Trong phiên bản mới nhất của Next Shares, hiểu về sự phát triển của Reacts rendering cung cấp nền tảng cần thiết để bạn hiểu được những gì chúng ta sắp khám phá khi chúng ta đi sâu hơn vào những chia sẻ tiếp theo. Nếu bạn có

Thành thạo với các chiến lược render React mà chúng ta đã đề cập, hãy cùng tìm hiểu về render trong Tiếp theo, trước đây chúng ta đã khám phá các thành phần của react server và học về mô hình thành phần kép của nó phân biệt

---

**Điều hướng:** ← [Suspense SSR](Bai_04_suspense-ssr.md) · Tiếp theo → [Server and Client Components](Bai_06_server-and-client-components.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
