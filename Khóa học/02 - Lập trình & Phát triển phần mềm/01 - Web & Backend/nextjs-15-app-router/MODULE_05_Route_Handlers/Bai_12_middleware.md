---
lesson_id: "M05-L12"
module: "Backend API và Middleware"
title: "Middleware"
source_version: "Next.js 15 App Router"
video_start: "03:12:44"
video_duration: "6 phút 11 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 12. Middleware

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 6 phút 11 giây · **Mốc:** 03:12:44 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=11564s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Middleware**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Middleware** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Middleware** — middleware.ts chạy trước request matching, hữu ích redirect, rewrite, i18n, xử lý logic nhẹ.
**2. Middleware** — Dùng matcher để giới hạn phạm vi; tránh xử lý nặng và truy vấn DB phức tạp trong middleware.
**3. Middleware** — Ở Next.js mới hơn thuật ngữ/file có thay đổi; tài liệu khóa này chủ đích theo phiên bản 15.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/middleware.ts`

```tsx
import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/old") {
    return NextResponse.redirect(new URL("/new", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/old", "/dashboard/:path*"] };
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Middleware**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Middleware** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Middleware** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** middleware.ts chạy trước request matching, hữu ích redirect, rewrite, i18n, xử lý logic nhẹ.

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

- **Video nguồn:** [Middleware — 03:12:44](https://www.youtube.com/watch?v=k7o9R6eaSes&t=11564s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Chuyển sang chủ đề cuối cùng về định tuyến INEXS, hãy cùng tìm hiểu về phần mềm trung gian, phần mềm trung gian INEXS là một tính năng mạnh mẽ cho phép bạn chặn và kiểm soát luồng yêu cầu và phản hồi trong toàn bộ ứng dụng của bạn. Nó thực hiện điều này ở cấp độ toàn cầu, nâng cao đáng kể các tính năng như chuyển hướng, viết lại URL, viết lại tiêu đề xác thực, cookie Và nhiều hơn nữa, hãy cùng tìm hiểu mã VS và xem cách triển khai middleware trong ứng dụng của chúng ta. Tạo middleware trong XJS. rất đơn giản, chỉ cần thêm một tệp DOJ s hoặc TS vào thư mục nguồn của bạn, phần mềm trung gian dots bây giờ là middleware cho phép bạn chỉ định các phần nơi nó nên được kích hoạt bằng hai cách tiếp cận: cấu hình bộ khớp tùy chỉnh hoặc câu lệnh điều kiện

Hãy cùng khám phá cả hai cách tiếp cận bằng cách chuyển hướng làm ví dụ, hãy tưởng tượng một tình huống khi điều hướng đến/lập hồ sơ nên chuyển hướng người dùng đến trang chủ. Dưới đây là cách chúng ta có thể thực hiện điều này. Chúng ta bắt đầu bằng cách nhập phản hồi tiếp theo từ máy chủ SLS tiếp theo, mở rộng API phản hồi tiêu chuẩn, chúng tôi cũng nhập loại yêu cầu tiếp theo từ máy chủ next/s tiếp theo, chúng ta định nghĩa một hàm middleware chấp nhận yêu cầu kiểu yêu cầu tiếp theo sao cho hàm xuất middleware chấp nhận yêu cầu kiểu tiếp theo Request Hàm này sẽ chuyển hướng đến trang chủ khi truy cập hồ sơ dấu gạch chéo, vì vậy hãy trả về phản hồi tiếp theo. chuyển hướng URL mới và đường dẫn là trang chủ mà chúng tôi cũng gửi theo yêu cầu. URL với sau đó sử dụng một đối tượng cấu hình để chỉ cho ni

chia sẻ để chỉ áp dụng phần mềm trung gian này cho đường rout của / profile, do đó export const config bằng với một đối tượng mà chúng ta chỉ định một Matcher SL profile, hãy khởi động lại máy chủ dev với npm chạy Dev ngay khi bạn điều hướng đến/profile trong Trình duyệt sẽ tự động chuyển hướng đến Homage thể hiện cách cấu hình matcher. Bây giờ hãy xem phương pháp thứ hai. cách tiếp cận bằng các câu lệnh điều kiện, chúng ta sẽ giữ lại Imports nhưng chú thích phần thân hàm và đối tượng config Thay vào đó, chúng ta sẽ nhập yêu cầu F. URL tiếp theo. Tên paath bằng với hồ sơ và trả về phản hồi tiếp theo. chuyển hướng URL mới và Hãy chỉ định đường dẫn là /hello và chúng ta sẽ truyền yêu cầu. URL tiếp theo khi bạn truy cập hồ sơ SL trong trình duyệt, nó sẽ

chuyển hướng đến route /hello mà chúng tôi đã tạo cách đây một thời gian, điều này cho thấy cách chúng ta có thể sử dụng các câu lệnh điều kiện để kiểm soát phản hồi phần mềm trung gian dựa trên đường dẫn yêu cầu Beyond chuyển hướng middleware cũng hỗ trợ viết lại URL Tính năng hoàn hảo để xử lý URL cũ hoặc cải thiện SEO thay vì chuyển hướng, bạn có thể sử dụng rewrite để giữ URL trong trình duyệt không thay đổi trong khi phục vụ nội dung khác nhau. Bây giờ điều hướng đến/ hồ sơ và bạn sẽ thấy nó được chuyển hướng đến/ xin chào so chúng ta thấy hello world nhưng URL trong trình duyệt vẫn là hồ sơ SL, cuối cùng hãy cùng khám phá cách sử dụng cookie và header trong phần mềm trung gian, hãy cùng khám phá modif mod middleware của chúng tôi để xử lý tùy chọn của người dùng cho các chủ đề và thêm một header tùy chỉnh cho tất cả các phản hồi chúng tôi bắt đầu

Bằng cách lấy đối tượng phản hồi mà cuối cùng ta sẽ trả về từ hàm để phản hồi const bằng với phản hồi tiếp theo. Tiếp theo, sử dụng đối tượng yêu cầu, chúng ta kiểm tra xem người dùng có tùy chọn chủ đề được lưu trong cookie của họ không nên const theme Ưu tiên bằng với yêu cầu. Cookie lấy và tên cookie là chủ đề, nên nếu không có phản hồi tùy chọn chủ đề. bánh quy. đặt tên cookie là chủ đề và giá trị là màu tối, cuối cùng chúng ta trả về đối tượng phản hồi đã chỉnh sửa từ chức năng phần mềm trung gian nên sẽ trả về phản hồi nếu chúng ta quay lại trình duyệt và xem cookie trong công cụ phát triển trong tab ứng dụng, bạn có thể thấy chúng đang trống. Nếu bạn làm mới, bạn sẽ thấy cookie chủ đề Dark đang

đặt giá trị chủ đề tên, tối nếu chúng ta ghi đè giá trị thành sáng và sau đó làm mới, bạn có thể thấy giá trị không phải ghi đè sang màu tối, rất dễ làm việc với cookie, giờ đây tiêu đề hoạt động mượt mà như vậy. Hãy thêm một tiêu đề tùy chỉnh vào phản hồi sử dụng tiêu đề phản hồi đặt tên là tiêu đề tùy chỉnh và đặt giá trị thành giá trị tùy chỉnh, vào tab mạng và làm mới Trang cho hồ sơ dưới tiêu đề phản hồi bạn sẽ thấy tiêu đề tùy chỉnh của chúng tôi với giá trị của nó. Tiêu đề tùy chỉnh rất hữu ích để truyền thêm thông tin có thể được sử dụng bởi các script phía client hoặc để gỡ lỗi như bạn thấy phần mềm trung gian có thể được sử dụng hiệu quả để thao tác cả cookie và header trong chỉ mục phần mềm trung gian tóm tắt mà shes cho phép bạn

kiểm soát và chặn hiệu quả chu kỳ phản hồi yêu cầu, cho phép chuyển hướng, viết lại URL và thao tác tiêu đề cùng cookie với Kết thúc phần đầu tiên về định tuyến trong XS chúng ta đã đề cập đến một loạt các chủ đề từ định nghĩa tuyến cơ bản sử dụng trang và bố cục Tuyến động nhóm tuyến đường liên kết và điều hướng Tải và lỗi Trạng thái và nâng cao các khái niệm như tuyến song song, chặn tuyến, trình xử lý tuyến đường và giờ là middleware, tôi hy vọng bạn đã cảm nhận được Tự tin khi làm việc với định tuyến trong X cho phần tiếp theo, chúng ta sẽ đi sâu vào việc kết xuất trong XS sau khi khám phá các chi tiết của

---

**Điều hướng:** ← [Caching in Route Handlers](Bai_11_caching-in-route-handlers.md) · Tiếp theo → [Rendering](../MODULE_06_Rendering_RSC/Bai_01_rendering.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
