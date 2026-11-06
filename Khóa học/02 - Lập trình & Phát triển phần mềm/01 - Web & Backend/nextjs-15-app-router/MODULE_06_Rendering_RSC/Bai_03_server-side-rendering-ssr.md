---
lesson_id: "M06-L03"
module: "Rendering và React Server Components"
title: "Server-side Rendering (SSR)"
source_version: "Next.js 15 App Router"
video_start: "03:23:28"
video_duration: "4 phút 49 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Server-side Rendering (SSR)

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 4 phút 49 giây · **Mốc:** 03:23:28 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12208s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Server-side Rendering (SSR)**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Server-side Rendering (SSR)** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Server-side Rendering (SSR)** — SSR tạo HTML trên server cho request, gửi về cho trình duyệt trước khi hydration.
**2. Server-side Rendering (SSR)** — Trình duyệt có thể thấy HTML trước khi toàn bộ JavaScript sẵn sàng.
**3. Server-side Rendering (SSR)** — Cẩn thận tác động của truy vấn chậm, cookie và khả năng cache.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/time/page.tsx`

```tsx
export const dynamic = "force-dynamic";
export default async function TimePage() {
  return <time>Server time: {new Date().toISOString()}</time>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Server-side Rendering (SSR)**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Server-side Rendering (SSR)** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Server-side Rendering (SSR)** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** SSR tạo HTML trên server cho request, gửi về cho trình duyệt trước khi hydration.

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

- **Video nguồn:** [Server-side Rendering (SSR) — 03:23:28](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12208s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Nhược điểm đầu tiên là SEO vì nội dung thường dựa vào JavaScript để hiển thị trên các công cụ tìm kiếm phía khách hàng gặp khó khăn trong việc lập chỉ mục đúng cách, thứ hai là trải nghiệm người dùng, người dùng phải chờ đợi trình duyệt tải PAR và thực thi JavaScript trước khi thấy bất kỳ nội dung có ý nghĩa nào để khắc phục những hạn chế này của rendering phía client Các Framework phản ứng hiện đại như Gatsby và Nas đang chuyển sang phía Serer. Giải pháp, hãy cùng xem cách điều này thay đổi nội dung như thế nào. giao khi có yêu cầu thay vì gửi một tệp HTML trần cần JavaScript phía khách để xây dựng trang máy chủ hiện xử lý việc hiển thị toàn bộ HTML tài liệu HTML đầy đủ này sẽ được chuyển thẳng đến trình duyệt

vì HTML đã được tạo trên máy chủ nên trình duyệt có thể nhanh chóng phân tích và hiển thị nó, giúp chúng ta ban đầu nhanh hơn thời gian tải trang: phương pháp phía máy chủ này giải quyết cả hai vấn đề CSR trực tiếp, các công cụ tìm kiếm giờ đây có thể dễ dàng lập chỉ mục nội dung được hiển thị trên máy chủ giải quyết vấn đề SEO của chúng tôi ngay khi người dùng thấy nội dung HTML thực tế ngay lập tức việc nhìn chằm chằm vào màn hình trống hoặc quay tải nhưng đây là điều kiện trong khi SSR làm cho nội dung hiển thị nhanh hơn chính sự phức tạp về tính tương tác, trang không thể trở nên tương tác hoàn toàn cho đến khi gói JavaScript bao gồm cả phản ứng và mã ứng dụng của bạn đã hoàn tất việc tải xuống và thực thi trong trình duyệt giai đoạn quan trọng này được gọi là

hydration là nơi trang HTML tĩnh ban đầu được server phục vụ được đưa vào trạng thái sống trong quá trình hydration react thực hiện control trong trình duyệt và tái tạo thành phần Tre trong bộ nhớ sử dụng HTML được render của máy chủ làm blueprint cẩn thận vẽ ra vị trí của tất cả các phần tử tương tác rồi kết nối các logic JavaScript như khởi tạo trạng thái ứng dụng, thêm bộ xử lý nhấp chuột và di chuột, và thiết lập tất cả các tính năng động Cần thiết cho trải nghiệm người dùng tương tác đầy đủ, hiểu rằng nước là chìa khóa cho những gì sắp tới, vì vậy xin hãy hãy chắc chắn rằng bạn cảm thấy thoải mái với những gì chúng tôi vừa học khi đào sâu hơn về phía Serers Các giải pháp có thể được phân loại thành hai

chiến lược chính là tạo trang tĩnh hoặc SSG và việc kết xuất phía máy chủ hoặc SSR tạo trang tĩnh xảy ra trong thời gian xây dựng khi bạn triển khai ứng dụng lên máy chủ, điều này dẫn đến các trang đã được hiển thị và sẵn sàng phục vụ, rất phù hợp cho nội dung giữ được sự ổn định tương đối như các bài viết blog phía máy chủ hiển thị ở bên kia Hand render trang theo yêu cầu khi người dùng yêu cầu. Đây là lựa chọn lý tưởng cho nội dung cá nhân hóa như mạng xã hội. các nguồn cấp mà mỗi HL thay đổi dựa trên người đăng nhập, bạn thường sẽ nghe cả hai cách tiếp cận được gọi chung là Kết xuất phía Serers hoặc SSR trong khi kết xuất phía dịch vụ là một bước tiến lớn so với phía client

mang lại cho chúng tôi tải hàng ban đầu nhanh hơn và SEO tốt hơn, nhưng cũng có những thách thức riêng. Vấn đề đầu tiên với SSR là các thành phần không thể bắt đầu render rồi tạm dừng hoặc chờ khi dữ liệu vẫn đang được tải nếu thành phần cần để lấy một thứ gì đó từ cơ sở dữ liệu hoặc nguồn khác như API, việc lấy này phải hoàn thành trước khi máy chủ có thể bắt đầu hiển thị trang điều này có thể làm chậm thời gian phản hồi của máy chủ với trình duyệt vì máy chủ phải hoàn thành thu thập tất cả dữ liệu cần thiết trước khi bất kỳ phần nào của trang có thể được gửi đến máy khách, vấn đề thứ hai với SSR là để hydration thành công, trong đó react thêm tính tương tác vào HTML được render của máy chủ thành phần trong

trình duyệt phải khớp chính xác với thành phần được tạo trên máy chủ Tre, điều này có nghĩa là tất cả JavaScript cho thành phần đó phải được tải lên máy khách trước khi bạn có thể bắt đầu cung cấp nước cho bất kỳ ai trong số họ. Vấn đề thứ ba với SSR liên quan đến Phản ứng nước tự nó làm nước cây thành phần chỉ trong một lần duy nhất, nghĩa là một khi nó bắt đầu cấp nước thì nó sẽ không dừng lại Cho đến khi hoàn thành toàn bộ cây, tất cả các thành phần phải được làm ẩm trước khi bạn có thể tương tác bất kỳ trong ba vấn đề này đều phải tải dữ liệu cho toàn bộ trang, tải JavaScript cho toàn bộ page và hydrating toàn bộ trang p cùng lúc tạo ra vấn đề thác nước All or Nothing kéo dài từ máy chủ đến

khách hàng, nơi mỗi vấn đề phải được giải quyết hoàn toàn trước khi chuyển sang vấn đề tiếp theo, điều này trở nên thực sự kém hiệu quả khi một số phần của ứng dụng chậm hơn phần khác, như thường xảy ra trong các ứng dụng thực tế, những hạn chế này dẫn đến Đội react để phát triển kiến trúc SSR mới và cải tiến. Tiếp theo, chúng ta sẽ khám phá kiến trúc này và xem cách nó giải quyết trước đây chúng tôi đã khám phá các vấn đề SSR truyền thống về rendering phía máy chủ trong react và

---

**Điều hướng:** ← [Client-side Rendering (CSR)](Bai_02_client-side-rendering-csr.md) · Tiếp theo → [Suspense SSR](Bai_04_suspense-ssr.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
