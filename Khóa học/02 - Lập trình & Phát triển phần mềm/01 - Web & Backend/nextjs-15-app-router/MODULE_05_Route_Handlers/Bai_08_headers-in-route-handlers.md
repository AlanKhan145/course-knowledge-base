---
lesson_id: "M05-L08"
module: "Backend API và Middleware"
title: "Headers in Route Handlers"
source_version: "Next.js 15 App Router"
video_start: "02:57:58"
video_duration: "5 phút 37 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. Headers in Route Handlers

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 5 phút 37 giây · **Mốc:** 02:57:58 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10678s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Headers in Route Handlers**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Headers in Route Handlers** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Headers in Route Handlers** — request.headers.get() hoặc headers() đọc HTTP headers; NextResponse cho phép thiết lập response headers.
**2. Headers in Route Handlers** — Không log Authorization hoặc các secret khác.
**3. Headers in Route Handlers** — Cache-Control, Content-Type và security headers ảnh hưởng đến client, proxy và CDN.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/headers/route.ts`

```tsx
export async function GET(request: Request) {
  const language = request.headers.get("accept-language") ?? "không có";
  return Response.json({ language }, {
    headers: { "Cache-Control": "no-store", "X-Demo": "headers" },
  });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Headers in Route Handlers**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Headers in Route Handlers** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Headers in Route Handlers** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** request.headers.get() hoặc headers() đọc HTTP headers; NextResponse cho phép thiết lập response headers.

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

- **Video nguồn:** [Headers in Route Handlers — 02:57:58](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10678s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

với những điều cơ bản về tiêu đề thực sự là gì, tiêu đề HTTP đại diện cho siêu dữ liệu liên quan đến một yêu cầu API và phản hồi Siêu dữ liệu này có thể được phân loại thành hai nhóm chính: đầu tiên chúng ta có các tiêu đề yêu cầu, những tiêu đề này được gửi bởi khách hàng như trình duyệt web đến các tiêu đề yêu cầu máy chủ chứa thông tin thiết yếu về yêu cầu mà giúp máy chủ hiểu và xử lý đúng cách, ví dụ chúng ta có user agent nhận diện trình duyệt và Hệ điều hành đến máy chủ thường được sử dụng cho việc hiển thị nội dung và phân tích theo trình duyệt mà chúng tôi đã chấp nhận chỉ ra các loại nội dung như định dạng văn bản, video hoặc hình ảnh mà máy khách có thể xử lý, cho phép máy chủ

để cung cấp tài nguyên theo định dạng phù hợp với máy khách, một tiêu đề yêu cầu phổ biến khác là ủy quyền tiêu đề được máy khách sử dụng để xác thực với máy chủ, nó mang thông tin xác thực cho phép kiểm soát truy cập tài nguyên thứ hai, chúng ta có tiêu đề phản hồi, những tiêu đề này được gửi lại từ máy chủ đến máy khách mà chúng cung cấp thông tin về máy chủ và dữ liệu được gửi trong phản hồi Một ví dụ là tiêu đề loại nội dung mà chỉ ra loại phương tiện của phản hồi, nó cho máy khách biết loại dữ liệu của nội dung trả về như thế nào text/html cho tài liệu HTML, ứng dụng, sljs cho dữ liệu Json, v.v. khi bạn làm việc với trình xử lý tuyến trong xgs, bạn

sẽ cần biết cách vừa đọc tiêu đề yêu cầu vừa gửi lại tiêu đề phản hồi, hãy cùng tìm hiểu mã nguồn của chúng tôi và Hãy hiểu rằng với một ví dụ, bây giờ chúng ta sẽ sử dụng profile route mà Handler đã xây dựng trước đây open route. TS có mặt trong Thư mục API chúng ta có một Get Handler trả về phản hồi mới qua file API data. Tôi sẽ mở Thunder client tiện ích mở rộng tạo một yêu cầu mới đến http localhost 3000 profile API mặc định yêu cầu có hai header chấp nhận và user agent, hãy thêm một thứ ba, ủy quyền và chúng ta có thể đặt giá trị thành bearer token bia 1 2 3 4 5. Bây giờ câu hỏi là làm thế nào để chúng ta đọc các header này trong route của mình? Handler thì chúng ta có hai lựa chọn, lựa chọn đầu tiên là sử dụng yêu cầu

tham số ở trên cùng nhập yêu cầu tiếp theo từ máy chủ SL tiếp theo và chỉ định tham số với yêu cầu kiểu của nó là type next request trong hàm Handler, chúng tôi sử dụng API web headers để trích xuất các header yêu cầu mới và chúng tôi gửi theo yêu cầu. chúng ta lưu nó trong một hằng số gọi là request headers. Ở dòng tiếp theo, chúng ta sẽ sử dụng lấy phương thức trên tiêu đề yêu cầu và ghi lại tiêu đề ủy quyền vào bảng điều khiển để console.log tiêu đề yêu cầu được lấy header ủy quyền mà chúng tôi vừa chỉ định nếu gửi yêu cầu từ khách hàng Thunder sẽ mở terminal mà chúng tôi sẽ thấy Tiêu đề xác thực token Bearer của chúng tôi có giá trị là bia, theo sau là 1 đến 3 4 5, trong khi tùy chọn đầu tiên này hoạt động

hoàn toàn ổn, bạn cũng có thể chọn sử dụng chức năng headers mà Next SH cung cấp ở phía trên các header nhập từ các tiêu đề SL tiếp theo và trong phần thân hàm, chúng ta gọi hàm tiêu đề và lưu kết quả trong một hằng số tiêu đề yêu cầu vậy danh sách tiêu đề const bằng với await headers là một hàm Asing nên chúng ta cần chờ nó Sau đó, chúng ta truy cập tiêu đề ủy quyền bằng phương thức Get và ghi lại vào danh sách tiêu đề Console console.log.get. ủy quyền gửi lại yêu cầu với giá trị token khác là 1 2 3 4 5 67 và kiểm tra terminal, chúng ta có thể thấy Token bia mới nhất đã được ghi lại, vậy đây là cách bạn đọc tiêu đề từ một yêu cầu đến. Bây giờ hãy nói về việc thiết lập

tiêu đề đi Đây là điều quan trọng cần biết các tiêu đề trả về từ các hàm tiêu đề là chỉ đọc để đặt các tiêu đề mới, bạn sẽ cần trả về một phản hồi mới với các tiêu đề tùy chỉnh của bạn. Để tôi cho bạn xem một ví dụ nếu bạn truy cập tuyến đường này trong trình duyệt của bạn, hồ sơ SL API của bạn, bạn sẽ thấy dữ liệu API hồ sơ dưới dạng văn bản thuần túy, kiểm tra tab mạng và bạn sẽ nhận thấy loại nội dung là văn bản/thuần túy, nên nếu chúng ta đóng gói văn bản trong thẻ H1 và làm mới thì nó vẫn sẽ hiển thị dưới dạng văn bản thuần túy nhưng hãy chú ý điều gì xảy ra khi chúng ta đặt loại nội dung thành text/html để trả về phản hồi mới làm đối số thứ hai bạn chỉ định tiêu đề và loại nội dung là text/html, làm mới trình duyệt và bây giờ bạn đã có dữ liệu API profile văn bản H1 được định kiểu đúng

trình duyệt hiển thị nó khác đi vì chúng tôi đã yêu cầu nó mong đợi HTML thông qua kiểu nội dung tiêu đề phản hồi Text/HTML Điều quan trọng là để thiết lập header, bạn cần trả về một phản hồi mới với header tùy chỉnh bằng yêu cầu và Response header bạn có thể Triển khai bất kỳ logic nào bạn cần trong route của mình. Bộ xử lý trước đây chúng ta đã học cách

---

**Điều hướng:** ← [URL Query Parameters](Bai_07_url-query-parameters.md) · Tiếp theo → [Cookies in Route Handlers](Bai_09_cookies-in-route-handlers.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
