---
lesson_id: "M04-L09"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Conditional Routes"
source_version: "Next.js 15 App Router"
video_start: "02:12:15"
video_duration: "2 phút 37 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Conditional Routes

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 2 phút 37 giây · **Mốc:** 02:12:15 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=7935s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Conditional Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Conditional Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Conditional Routes** — Có thể hiển thị slot khác nhau theo session/role trong layout server.
**2. Conditional Routes** — Ví dụ user chưa đăng nhập thấy login slot, người đã đăng nhập thấy dashboard slot.
**3. Không chỉ ẩn UI** — Không chỉ ẩn UI: API và server action còn phải kiểm tra quyền ở server.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/dashboard/layout.tsx (minh họa)`

```tsx
export default async function Layout({ children, auth, guest }: {
  children: React.ReactNode; auth: React.ReactNode; guest: React.ReactNode;
}) {
  const isLoggedIn = await checkSessionOnServer(); // Hàm tự triển khai
  return <>{children}{isLoggedIn ? auth : guest}</>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Conditional Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Conditional Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Conditional Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Có thể hiển thị slot khác nhau theo session/role trong layout server.

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

- **Video nguồn:** [Conditional Routes — 02:12:15](https://www.youtube.com/watch?v=k7o9R6eaSes&t=7935s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Định tuyến song song, chúng tôi học cách hiển thị nhiều Trang cùng lúc trong cùng một bố cục mà không thay đổi URL Bây giờ hãy cùng khám phá các tuyến điều kiện, một tính năng mạnh mẽ khác mà các tuyến song song cho phép, hãy tưởng tượng bạn muốn hiển thị nội dung khác nhau tùy thuộc vào việc người dùng có đăng nhập hay không, bạn có thể muốn hiển thị bảng điều khiển để xác thực người dùng nhưng hiển thị trang đăng nhập đối với những người không phải là các tuyến điều kiện cho phép chúng tôi thực hiện điều này trong khi vẫn duy trì mã hoàn toàn tách biệt trên cùng một URL. Để tôi chỉ cho bạn cách triển khai kịch bản này. Hãy bắt đầu bằng cách tạo ra vị trí đăng nhập đầu tiên trong thư mục bảng điều khiển phức tạp tạo một thư mục con mới gọi là at login bên trong thư mục này

Tạo một trang. TSX, chúng tôi sẽ giữ component đơn giản, ví dụ bạn có thể sao chép component từ slot khác người dùng dán nó vào đây và đổi tên thành khe đăng nhập thay đổi văn bản thành Vui lòng đăng nhập để tiếp tục trong ứng dụng thực đây sẽ là nơi bạn sẽ triển khai biểu mẫu đăng nhập của mình nhưng đoạn văn giữ chỗ này vẫn hoạt động tốt cho phần demo now của chúng tôi Quay lại với bố cục. TSX và thêm slot đăng nhập vào props để đăng nhập rồi đăng nhập kiểu react. phản ứng node cho jsx, chúng ta sẽ tạo một kiểm tra Au đơn giản, thêm một hằng số gọi là e, đã đăng nhập và đặt thành fults trong một thực tế bạn thường dùng một ứng dụng như get user hoặc dùng Au để kiểm tra trạng thái xác thực nhưng

Chúng ta sẽ giữ mọi thứ đơn giản ở đây dựa trên giá trị của E đã đăng nhập, hãy render giao diện người dùng có điều kiện để trả về là đã đăng nhập rồi, chúng ta đã có gì rồi ngoài khe đăng nhập. Khi bạn kiểm tra trình duyệt, bạn sẽ thấy khe đăng nhập vì we set đã đăng nhập ở chế độ false, nếu bạn không thấy sự thay đổi, hãy thử khởi động lại máy chủ phát triển npm runev của bạn. làm mới và chúng ta sẽ thấy thẻ, vui lòng đăng nhập để tiếp tục, đổi giá trị của East đã đăng nhập thành true và bạn sẽ thấy tất cả các khe khác xuất hiện, điều này cho thấy cách các tuyến song song hiển thị các trang khác nhau một cách có điều kiện trong khi vẫn giữ sạch mã tách biệt dưới cùng một URL, khe đăng nhập cũng được hưởng lợi từ lỗi độc lập và trạng thái tải như

ngoài việc điều hướng phụ đến một khả năng đăng ký hoặc quên mật khẩu, bộ định tuyến ứng dụng trong ex đã giới thiệu hai

---

**Điều hướng:** ← [Unmatched Routes](Bai_08_unmatched-routes.md) · Tiếp theo → [Intercepting Routes](Bai_10_intercepting-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
