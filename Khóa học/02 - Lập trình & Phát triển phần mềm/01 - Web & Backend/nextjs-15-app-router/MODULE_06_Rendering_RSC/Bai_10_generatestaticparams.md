---
lesson_id: "M06-L10"
module: "Rendering và React Server Components"
title: "generateStaticParams"
source_version: "Next.js 15 App Router"
video_start: "04:06:46"
video_duration: "5 phút 19 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 10. generateStaticParams

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 5 phút 19 giây · **Mốc:** 04:06:46 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=14806s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **generateStaticParams**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **generateStaticParams** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. generateStaticParams** — generateStaticParams liệt kê tham số dynamic route để prerender một tập trang trong quá trình build.
**2. generateStaticParams** — Thường dùng catalog/slug xác định trước; có thể kết hợp fetch dữ liệu để tạo các path.
**3. generateStaticParams** — Không phải lời giải cho danh mục tăng liên tục nếu không quản lý thêm dynamicParams.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/blog/[slug]/page.tsx`

```tsx
export async function generateStaticParams() {
  return [{ slug: "intro" }, { slug: "routing" }];
}
type Props = { params: Promise<{ slug: string }> };
export default async function Post({ params }: Props) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **generateStaticParams**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **generateStaticParams** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **generateStaticParams** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** generateStaticParams liệt kê tham số dynamic route để prerender một tập trang trong quá trình build.

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

- **Video nguồn:** [generateStaticParams — 04:06:46](https://www.youtube.com/watch?v=k7o9R6eaSes&t=14806s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

tính năng thú vị trong sh tiếp theo, nói đơn giản là tạo tham số tĩnh, là một hàm hoạt động song song với Dynamic các đoạn tuyến để tạo các tuyến tĩnh trong thời gian xây dựng thay vì theo yêu cầu theo yêu cầu, mang lại cho chúng tôi một trải nghiệm tốt Tăng hiệu năng Tôi biết điều này nghe có vẻ hơi phức tạp nên hãy cùng nhau đi qua một ví dụ thực tế sẽ xây dựng một trang danh sách sản phẩm và trang Chi tiết để xem cách hoạt động này trước tiên trong thư mục ứng dụng của chúng tôi Tạo một thư mục Sản phẩm mới và thêm một trang. Tệp TSX với thành phần react để hiển thị sản phẩm nổi bật xuất ra trang sản phẩm hàm mặc định và chúng tôi trả về một thẻ H1 ghi sản phẩm nổi bật và ba liên kết đến ba

Sản phẩm nổi bật sản phẩm một, 2 và ba, tiếp theo chúng ta sẽ tạo một ID Dynamic route, nên trong nội bộ sản phẩm ID được đặt trong dấu ngoặc vuông với Một trang. Tệp TSX để hiển thị chi tiết sản phẩm riêng lẻ, cho phép tôi dán mã để tiết kiệm thời gian xuất mặc định không đồng bộ trang sản phẩm hàm nhận tham số route, chúng ta chờ các tham số và phân cấu trúc ID sản phẩm, chúng ta trả về một Chi tiết ID sản phẩm thẻ H1 được hiển thị tại timam khi chúng tôi xây dựng ứng dụng bằng npm run build something Điều thú vị là nếu bạn nhìn vào terminal, bạn sẽ nhận thấy Niar xử lý trang danh sách sản phẩm và trang chi tiết sản phẩm khác nhau: trang danh sách sản phẩm sẽ hiển thị tĩnh trong khi giọng nói chi tiết sản phẩm được thiết lập

lên cho rendering động và điều này hợp lý, NEX không biết giá trị id cần thiết cho đến khi có người thực sự yêu cầu một URL cụ thể, hãy xem thư mục build cụ thể trong server slapp và bạn sẽ tìm thấy tệp HTML cho các sản phẩm. HTML nhưng bạn sẽ không thấy gì cho trang Chi tiết sản phẩm nếu bạn chạy ứng dụng với npm Run bắt đầu và truy cập sản phẩm SL1, bạn sẽ thấy dấu thời gian thay đổi mỗi khi bạn làm mới trang, điều này là do trang Chi tiết sản phẩm được hiển thị theo yêu cầu theo yêu cầu. Từ những gì chúng tôi từng học trước đây, chúng tôi biết rằng hiển thị tĩnh sẽ giúp chúng tôi tốt hơn. Sẽ tuyệt biết bao nếu chúng ta có thể tiếp tục làm tốt hơn ít nhất là các sản phẩm nổi bật của chúng tôi chi tiết Trang sản phẩm

một, 2 và ba, đó chính xác là những gì tạo static parms giúp chúng ta làm. Hãy cùng xem cách triển khai nó trong trang chi tiết sản phẩm, chúng ta sẽ thêm một hàm tạo tham số tĩnh, là một hàm bất đồng bộ trả về một mảng đối tượng Mỗi đối tượng đại diện cho một tuyến đường mà chúng ta muốn hiển thị trước với khóa đối tượng tương ứng với động của tuyến đường segment, chúng ta muốn ID với 1, 2 và 3, hàm này chạy trong thời gian build, trong khi chúng ta chỉ trả về một mảng ở đây bạn cũng có thể lấy các ID này từ một API nếu chúng ta xây dựng lại ứng dụng, bây giờ với bản build chạy npm bạn sẽ thấy kết xuất PR sh tiếp theo Trang chi tiết sản phẩm cho cả ba sản phẩm nổi bật SL1 SL2 và SLASH3 được thể hiện qua phần mới

ký hiệu là một vòng tròn được tô màu và nếu bạn kiểm tra chú thích thì nó ghi SSG được dựng sẵn dưới dạng HTML tĩnh bằng cách tạo tĩnh hàm tham số bạn cũng có thể xác nhận điều này bằng cách kiểm tra thư mục build để ứng dụng máy chủ và các sản phẩm bạn sẽ tìm thấy ngay bây giờ Tệp HTML 1. HTML 2html và 3. HTML tương ứng với các ID của chúng tôi, khởi động ứng dụng với npm Run start và điều hướng đến/ sản phẩm SL1 để ý cách dấu thời gian giữ nguyên khi bạn làm mới, điều này là do chúng ta đang phục vụ một tệp HTML đã được dựng sẵn còn các tuyến với nhiều phân đoạn động thì sao? giả sử chúng ta có một danh mục sản phẩm với các danh mục và sản phẩm sử dụng một tuyến như/ sản phẩm danh mục SL sản phẩm/ trang SL. TSX trong trường hợp này, mỗi đối tượng bao gồm các giá trị cho

cả hai phân khúc Động đều cần dựng sẵn danh mục tuyến đường Điện tử, điện thoại thông minh, điện tử, sách laptop và sách khoa học viễn tưởng và các bản thảo tĩnh tạo tiểu sử rất phù hợp cho các tình huống như sản phẩm nổi bật hoặc bài viết blog phổ biến static PMS là một tính năng mạnh mẽ trong XS cho phép bạn dựng trước các tuyến tĩnh cho các phân đoạn động mà nó chạy khi xây dựng Time xử lý nhiều phân đoạn Động và thực sự có thể nâng cao hiệu suất ứng dụng của bạn bằng cách đảm bảo rằng Các trang truy cập đã được hiển thị sẵn và sẵn sàng phục vụ ngay lập tức, tôi cá là bạn đang thắc mắc điều gì xảy ra với các Trang nơi ID không được bao gồm trong việc tạo tham số tĩnh, hãy cùng khám phá điều đó tiếp theo chúng ta đã học về

---

**Điều hướng:** ← [Dynamic Rendering](Bai_09_dynamic-rendering.md) · Tiếp theo → [dynamicParams](Bai_11_dynamicparams.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
