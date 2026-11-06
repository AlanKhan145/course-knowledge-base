---
lesson_id: "M05-L09"
module: "Backend API và Middleware"
title: "Cookies in Route Handlers"
source_version: "Next.js 15 App Router"
video_start: "03:03:35"
video_duration: "3 phút 23 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Cookies in Route Handlers

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 3 phút 23 giây · **Mốc:** 03:03:35 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=11015s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Cookies in Route Handlers**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Cookies in Route Handlers** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Cookies in Route Handlers** — request.cookies.get() và response.cookies.set/delete quản lý cookie trong handler.
**2. Cookies in Route Handlers** — HTTP-only, Secure, SameSite và Path ảnh hưởng bảo mật session.
**3. Cookies in Route Handlers** — Không lưu credential nhạy cảm ở cookie có thể đọc được qua JavaScript.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/theme/route.ts`

```tsx
import { NextResponse } from "next/server";
export async function POST() {
  const response = NextResponse.json({ theme: "dark" });
  response.cookies.set("theme", "dark", { httpOnly: true, sameSite: "lax", path: "/", secure: process.env.NODE_ENV === "production" });
  return response;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Cookies in Route Handlers**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Cookies in Route Handlers** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Cookies in Route Handlers** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** request.cookies.get() và response.cookies.set/delete quản lý cookie trong handler.

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

- **Video nguồn:** [Cookies in Route Handlers — 03:03:35](https://www.youtube.com/watch?v=k7o9R6eaSes&t=11015s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

làm việc với tiêu đề trong trình xử lý tuyến đường bây giờ hãy cùng khám phá cách xử lý cookie trong trình xử lý tuyến đường Cookie là những phần nhỏ dữ liệu mà một máy chủ gửi đến trình duyệt web của người dùng, trình duyệt có thể lưu trữ cookie và gửi chúng trở lại trình duyệt đó máy chủ với các yêu cầu trong tương lai cookie phục vụ ba mục đích chính quản lý các phiên như đăng nhập người dùng và mua sắm giỏ hàng xử lý cá nhân hóa như sở thích người dùng và chủ đề cũng như theo dõi như ghi lại và phân tích người dùng Hành vi: Nếu bạn muốn tìm hiểu sâu hơn về cookie, bạn có thể xem tài liệu chi tiết về MDN nhưng Bây giờ hãy quay lại với VS Code và xem cách chúng ta có thể làm việc với cookie trong lộ trình Handler năm tới tương tự như

Những gì chúng ta thấy với headers, chúng ta sẽ chủ yếu xem xét cách thiết lập và lấy cookie bên trong một route. Có trình xử lý có hai cách để thực hiện điều này: cách đầu tiên là thiết lập cookie bằng cách trả về một phản hồi mới với cookie đã đặt header để sau content type text/html chỉ định set cookie theme bằng dark nếu chúng ta kiểm tra Thunder client và nhìn Tại tab Cookie trong phần phản hồi, chúng tôi không có cookie khả dụng, nó bắt đầu trống với logic cookie đã thiết lập của chúng tôi Nếu chúng tôi gửi yêu cầu mới, chúng tôi sẽ thấy cookie tee của chúng tôi xuất hiện tên là tee value dark ngay bây giờ để đọc cookie này trong route Handler của chúng ta có thể sử dụng tham số request để const theme bằng request. bánh quy. getet và chúng tôi chỉ định

tên nhóm cookie, hãy ghi lại vào console trong ứng dụng Thunder nếu chúng ta gửi yêu cầu và mở terminal chúng ta sẽ thấy cặp giá trị tên cookie được ghi lại tên chủ đề giá trị màu tối, vậy đây là cách tiếp cận đầu tiên của chúng ta sử dụng tiêu đề cookie đặt để đặt cookie và đối tượng yêu cầu để đọc nó cho phương pháp tiếp theo tiếp theo cung cấp một hàm cookie tích hợp cho phép nhập nó ở phía trên nhập tiêu đề dấu phẩy cookie từ tiêu đề SL tiếp theo cookie là một hàm eing do đó chúng ta cần chờ nó trong hàm Handler const cookie store bằng với await cookie bây giờ để thiết lập cookie theo phương pháp này, chúng ta có thể gọi là Cookie store. Chúng ta chỉ định kết quả tên trên mỗi trang cho

ví dụ và giá trị là 20 sau khi gửi yêu cầu mới, kết quả cookie trên mỗi trang hiện xuất hiện với giá trị 20, đọc cookie này chỉ dễ dàng như cookie store.get nên console.log cookie store.get kết quả trên mỗi trang, gửi yêu cầu một lần nữa và trong terminal bạn sẽ thấy kết quả tên trên mỗi giá trị trang 20 cách với hàm cookie hỗ trợ các phương thức bổ sung như has và delete, vui lòng tham khảo tài liệu để biết thêm thông tin. Được rồi, vậy là kết thúc làm việc với cookie trong trình xử lý tuyến đường, hãy nhanh chóng nói về việc xử lý chuyển hướng trong trình xử lý tuyến đường, hãy tưởng tượng bạn đã xây dựng một API của người dùng

---

**Điều hướng:** ← [Headers in Route Handlers](Bai_08_headers-in-route-handlers.md) · Tiếp theo → [Redirects in Route Handlers](Bai_10_redirects-in-route-handlers.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
