---
lesson_id: "M05-L11"
module: "Backend API và Middleware"
title: "Caching in Route Handlers"
source_version: "Next.js 15 App Router"
video_start: "03:08:25"
video_duration: "4 phút 19 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 11. Caching in Route Handlers

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 4 phút 19 giây · **Mốc:** 03:08:25 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=11305s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Caching in Route Handlers**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Caching in Route Handlers** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Caching in Route Handlers** — GET Route Handlers ở Next.js 15 không mặc định cache chỉ vì dùng GET.
**2. Caching in Route Handlers** — Cache phụ thuộc phiên bản, phương thức, fetch và cache-control; luôn đo và kiểm tra thực tế.
**3. Caching in Route Handlers** — Dữ liệu cá nhân không nên đưa vào cache công khai dùng chung.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/latest/route.ts`

```tsx
export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json({ timestamp: new Date().toISOString() }, {
    headers: { "Cache-Control": "no-store" },
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Caching in Route Handlers**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Caching in Route Handlers** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Caching in Route Handlers** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** GET Route Handlers ở Next.js 15 không mặc định cache chỉ vì dùng GET.

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

- **Video nguồn:** [Caching in Route Handlers — 03:08:25](https://www.youtube.com/watch?v=k7o9R6eaSes&t=11305s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Trình xử lý tuyến đường Hãy nói về bộ nhớ đệm khi các trình xử lý tuyến trong mục tiếp theo mặc định đã được lưu trong bộ nhớ đệm Bạn có thể chọn vào bộ nhớ đệm khi sử dụng phương thức get. Để tôi chỉ cho bạn cách hoạt động. Hãy tạo một thư mục mới tên là Time trong ứng dụng của chúng tôi. Thư mục và thêm một route. Tệp TS nên thời gian/lộ trình. TS ở đây là một điểm cuối đơn giản để lấy Handler trả về thời gian hiện tại ở định dạng Json nếu bạn điều hướng đến localhost 3000 /thời gian trên trình duyệt bạn sẽ thấy thời gian hiện tại là 11:45 43 sáng. mỗi lần tải lại sẽ hiển thị thời gian gần nhất vì mặc định không có bộ nhớ đệm và đây chính xác là điều chúng tôi muốn

Trong trường hợp này, hãy xem một kịch bản mà trong thư mục ứng dụng tạo một thư mục mới là hoàn toàn hợp lý. Thư mục có tên Categories with a route. TS File Định nghĩa và Xuất một hàm Get Handler để xuất hàm eing get và chúng ta có một mảng gồm bốn danh mục, mỗi danh mục có một ID và một tên, chúng ta trả về mảng ở định dạng Json, chúng ta đã mã hóa cứng các danh mục dữ liệu để đơn giản hóa nhưng trong tình huống thực tế dữ liệu này thường đến từ cơ sở dữ liệu vì dữ liệu này hiếm khi thay đổi mỗi yêu cầu đến endpoint này sẽ kích hoạt truy vấn cơ sở dữ liệu không hiệu quả để tránh điều này, chúng ta có thể sử dụng bộ nhớ đệm Chúng ta sẽ thêm một tùy chọn cấu hình ở đầu tệp export const Động là bằng với việc ép tĩnh này

đảm bảo phản hồi được lưu vào bộ nhớ đệm và phục vụ ngay lập tức cho tất cả người dùng, tuy nhiên chúng tôi không thể kiểm tra tuyến đường này Handler vì không có dữ liệu động trong phản hồi này, hãy thêm cấu hình seam vào Handler lộ trình thời gian và kiểm tra thay vào đó, xuất const Dynamic Force tĩnh. Bây giờ điều hướng đến/ thời gian trong trình duyệt bạn sẽ thấy thời gian hiện tại: 11:49 31 sáng. Nếu bạn tải lại trang, bạn vẫn sẽ thấy thay đổi thời gian. Đó là vì không có bộ nhớ đệm trong quá trình phát triển, hãy xây dựng ứng dụng bằng npm chạy build và khởi động bằng npm chạy bắt đầu ngay điều hướng đến/ thời gian thời gian là 11:49 58 giờ sáng, thời gian Vẫn giữ nguyên khi tải lại làm mới và bạn có thể thấy thời gian không thay đổi lần làm mới này vào

thời gian ứng dụng được xây dựng, nếu bạn quay lại trình duyệt và điều hướng đến/ thời gian sau 10 phút bạn vẫn sẽ thấy đồng thời nó chỉ thay đổi khi ứng dụng được xây dựng lại, nhưng nếu chúng ta muốn cập nhật dữ liệu mà không xây dựng lại toàn bộ ứng dụng tốt bạn có thể xác thực lại dữ liệu đã lưu trong bộ nhớ đệm bằng cách sử dụng tái tạo tĩnh tăng dần tại phía trên của tệp chúng ta sẽ thêm xuất const revalidate bằng 10 điều này sẽ xác thực lại dữ liệu mỗi 10 giây khi bạn chạy npm run build, mã rout Handler được tạo ra cùng với thời gian build khi bạn chạy npm run start. Tất cả các yêu cầu gửi đến Slash Time đều được lưu vào bộ nhớ đệm và ngay lập tức sau 10 giây trôi qua, yêu cầu tiếp theo vẫn sẽ hiển thị

trang lỗi đã được lưu trong bộ nhớ đệm khi một phiên bản mã mới được tạo ở nền với dấu thời gian mới nhất ngay bây giờ khi bạn tải lại, dấu thời gian cập nhật sẽ hiển thị trong 10 giây tiếp theo và quá trình này lặp lại, đây là cách bạn xác thực lại trình xử lý route cached trong bộ định tuyến ứng dụng, đáng chú ý là bộ nhớ đệm chỉ hoạt động với các phương thức get khác các phương thức như post put hoặc delete sẽ không bao giờ được lưu vào bộ nhớ đệm nếu bạn sử dụng các hàm động như headers và cookie hoặc làm việc với đối tượng yêu cầu trong bộ nhớ đệm phương thức get của bạn sẽ không được áp dụng Tôi hy vọng điều này sẽ giúp bạn có ích hiểu cách hoạt động của bộ nhớ đệm trong trình xử lý tuyến đường, chúng ta còn một chủ đề cuối cùng cần đề cập trong phần này, nên hãy giữ nguyên

---

**Điều hướng:** ← [Redirects in Route Handlers](Bai_10_redirects-in-route-handlers.md) · Tiếp theo → [Middleware](Bai_12_middleware.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
