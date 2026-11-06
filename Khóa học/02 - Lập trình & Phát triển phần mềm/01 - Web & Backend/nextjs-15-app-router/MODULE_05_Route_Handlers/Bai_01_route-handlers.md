---
lesson_id: "M05-L01"
module: "Backend API và Middleware"
title: "Route Handlers"
source_version: "Next.js 15 App Router"
video_start: "02:33:44"
video_duration: "5 phút 43 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 01. Route Handlers

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 5 phút 43 giây · **Mốc:** 02:33:44 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9224s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Route Handlers**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Route Handlers** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Route Handlers** — route.ts trong app/ định nghĩa endpoint HTTP cùng dự án Next.js; export hàm GET/POST/...
**2. Route Handlers** — Route Handlers nhận Request/NextRequest và trả Response/NextResponse.
**3. Route Handlers** — Không đặt route.ts và page.tsx cùng cấp trong một segment vì sẽ xung đột xử lý route.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/health/route.ts`

```tsx
export async function GET() {
  return Response.json({ status: "ok", service: "nextjs" });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Route Handlers**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Route Handlers** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Route Handlers** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** route.ts trong app/ định nghĩa endpoint HTTP cùng dự án Next.js; export hàm GET/POST/...

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

- **Video nguồn:** [Route Handlers — 02:33:44](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9224s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Hệ thống định tuyến, mặc dù đó đã là một tính năng mạnh mẽ, nhưng bộ định tuyến ứng dụng còn có thể làm được nhiều hơn nữa, nó cho phép bạn tạo ra tùy chỉnh trình xử lý yêu cầu cho các tuyến của bạn sử dụng tính năng gọi là trình xử lý tuyến đường, khác với các tuyến trang cung cấp nội dung HTML Trình xử lý tuyến đường cho phép chúng ta xây dựng các endpoint nghỉ ngơi với toàn quyền kiểm soát phản hồi, hãy nghĩ về nó như việc xây dựng một node cộng với ứng dụng Express, bạn có thể thực hiện tất cả các thao tác crud với cơ sở dữ liệu, nhưng đây là phần thú vị là không có cần thiết lập và cấu hình một máy chủ riêng biệt, tiếp theo cung cấp cho bạn mọi thứ ngay lập tức, trình xử lý tuyến đường rất tốt khi Tạo các yêu cầu APEPI bên ngoài, ví dụ nếu bạn đang xây dựng một ứng dụng cần giao tiếp với người thứ ba

các trình xử lý tuyến dịch vụ của party là hoàn hảo cho việc đó vì chúng chạy bên máy chủ S bên thông tin nhạy cảm của bạn như Khóa riêng tư vẫn giữ an toàn và không bao giờ đến được trình duyệt, nếu bạn truy cập từ router Pages thì có thể nghĩ đến Route trình xử lý dưới dạng API route tiếp theo ở đây hỗ trợ đầu xóa bản vá sau cài đặt và các tùy chọn nếu phương thức không được hỗ trợ là gọi Tiếp theo SH sẽ trả về một phương thức 405 không được phép phản hồi Để tôi chỉ cho bạn cách xây dựng tuyến đầu tiên của bạn Handler tôi đã Tôi đã mở mã VS ở đây và tôi đã bắt đầu bằng cách tạo một dự án mới cho năm tới bằng lệnh npx create next app at Demo trình xử lý tuyến đường mới nhất: Khi lệnh hoàn thành, bạn sẽ có một dự án giống như của tôi. Hãy bắt đầu thôi.

vào thư mục Nguồn, đầu tiên chúng ta sẽ tạo một thư mục mới gọi là hello bên trong thư mục ứng dụng, giống như các tuyến đường trang Trình xử lý phải nằm trong thư mục ứng dụng. Bên trong thư mục Hello này, chúng ta sẽ tạo một tệp gọi là route. TS: Đó là một quy ước năm sau nữa chúng ta cần tuân theo, ở đây chúng ta sẽ xuất một hàm phù hợp với trình lấy HTTP Và vâng, đó là một quy ước khác xuất khẩu hàm asnc get, chúng ta sẽ giữ điều này đơn giản và trả về một phản hồi văn bản thuần túy, trả về phản hồi mới xin chào thế giới, chúng tôi đang sử dụng đối tượng phản hồi JavaScript tiêu chuẩn để xử lý yêu cầu đến, chúng tôi trả về một phản hồi mới với hello world dưới dạng văn bản trên trình duyệt, điều hướng đến localhost 3000 /hello và bạn sẽ thấy văn bản của chúng tôi

Phản hồi: Xin chào thế giới, và như vậy, chúng ta đã có trình xử lý tuyến đầu tiên đang hoạt động, đó thực sự là ý tưởng cốt lõi của Trình xử lý tuyến trong thư mục ứng dụng tạo một tuyến đường. Tệp TS và các hàm Xuất được đặt tên theo động từ HTTP trong trường hợp này khi Ai đó gửi yêu cầu Get to/ Hello hoặc Get Handler sẽ bắt đầu hành động. Bây giờ có hai điều quan trọng cần lưu ý. đầu tiên, trình xử lý tuyến rất linh hoạt trong việc tổ chức, nên giống như các tuyến trên trang, bạn có thể lồng chúng vào các thư mục và thư mục con để giữ mọi thứ gọn gàng, ví dụ bạn có thể thêm một thư mục bảng điều khiển trong thư mục ứng dụng của mình với Trình xử lý route riêng để tạo bảng điều khiển thư mục mới và sao chép route sang. TS từ thư mục Hello nhưng thay văn bản thành bảng điều khiển

dữ liệu nếu bạn muốn các nội dung riêng biệt cho người dùng, hãy tạo thư mục con người dùng bên trong bảng điều khiển với một route khác. Bộ xử lý trả về dữ liệu người dùng Mỹ, sao chép dán và chuyển văn bản thành dữ liệu người dùng. Bây giờ trong trình duyệt, bạn có thể truy cập bảng điều khiển SL để Dữ liệu bảng điều khiển và bảng SL người dùng SL để lấy dữ liệu người dùng rất đơn giản Thứ hai, cảnh giác với xung đột giữa Route trang và trình xử lý Route, đây là ý tôi để bạn có một profile route trang, trang SL. TSX trong thư mục ứng dụng Vậy là hồ sơ / trang cá nhân. TSX với một trang hồ sơ hàm mặc định xuất đơn giản và chúng ta trả về một trang hồ sơ thẻ div trong cùng một thư mục, giả sử bạn có một route của route handler.

TS bạn có một hàm get Handler trả về một API profile phản hồi mới, trong trường hợp này là route. TS sẽ nhận thay theo mặc định nên khi bạn truy cập hồ sơ localhost 3000 sl, bạn sẽ thấy dữ liệu API của hồ sơ thay vì trang của bạn thành phần sửa lỗi là di chuyển trình xử lý route của bạn đến một thư mục con apepi. Vì vậy, trong thư mục profile, hãy tạo một Epi Folder và di chuyển route. TS trong thư mục đó nên hãy chọn profile SL route. TS trở thành profile /i/ route. bây giờ bạn có thể có cả trang của mình at/ profile và Epi at/ profile slpi của bạn để tóm tắt các trình xử lý tuyến đường cho phép bạn tạo các trình xử lý yêu cầu tùy chỉnh đối với một tuyến đường nhất định, chúng được định nghĩa trong một tuyến đường. JS hoặc route. Tệp TS bên trong thư mục ứng dụng là một route. Tệp TS tại

cùng cấp độ đoạn tuyến với trang. TSX sẽ gây ra xung đột và trang sẽ không được phục vụ theo tuyến xử lý Tôi sẽ xử lý yêu cầu. Bây giờ bạn đã nắm được những kiến thức cơ bản, để tôi hướng dẫn bạn qua một số ví dụ thực hành. xử lý các yêu cầu lấy sau khi tạo và delete với các trình xử lý tuyến nexs. Trước đây chúng ta đã học cách tạo một trình xử lý tuyến cơ bản. Bây giờ hãy cùng chúng ta làm vậy.

---

**Điều hướng:** ← [Parallel Intercepting Routes](../MODULE_04_Loading_Errors_Advanced_Routes/Bai_11_parallel-intercepting-routes.md) · Tiếp theo → [GET Request](Bai_02_get-request.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
