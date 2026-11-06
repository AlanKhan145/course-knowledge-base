---
lesson_id: "M05-L02"
module: "Backend API và Middleware"
title: "GET Request"
source_version: "Next.js 15 App Router"
video_start: "02:39:27"
video_duration: "2 phút 50 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. GET Request

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 2 phút 50 giây · **Mốc:** 02:39:27 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9567s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **GET Request**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **GET Request** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. GET Request** — GET trả tài nguyên hoặc danh sách; dùng Response.json và mã HTTP phù hợp.
**2. GET Request** — Lọc, phân trang và validate query trước khi truy vấn DB; không ghi dữ liệu trong GET.
**3. GET Request** — Định dạng response nhất quán để client dễ xử lý.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/products/route.ts`

```tsx
const products = [{ id: "1", name: "Sách" }, { id: "2", name: "Bút" }];
export async function GET() {
  return Response.json({ data: products, total: products.length });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **GET Request**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **GET Request** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **GET Request** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** GET trả tài nguyên hoặc danh sách; dùng Response.json và mã HTTP phù hợp.

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

- **Video nguồn:** [GET Request — 02:39:27](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9567s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Đi sâu hơn vào việc làm việc với các trình xử lý tuyến đường, bắt đầu từ cách xử lý các yêu cầu trước khi bắt đầu. Tôi nên làm vậy. đề cập rằng chúng ta sẽ không tập trung vào giao diện người dùng cho phần này mà sẽ sử dụng API arrest của Thunder client cho VS mã để kiểm tra các trình xử lý tuyến đường của chúng tôi nếu bạn chưa làm, hãy cài đặt tiện ích mở rộng khách Thunder trong VS Code một lần bạn đã chuẩn bị sẵn rồi, chúng ta có thể tiếp tục tập trung vào các trình xử lý tuyến đường, chúng ta sẽ bỏ qua việc thiết lập cơ sở dữ liệu thay vào đó. sẽ lưu dữ liệu của chúng tôi trong bộ nhớ, nghĩa là nó sẽ được xóa khi chúng tôi khởi động lại ứng dụng hoặc làm mới trang Hoàn toàn ổn vì mục tiêu chính của chúng tôi là hiểu cách các trình xử lý tuyến đường hoạt động, hãy bắt đầu bằng việc tạo một số dữ liệu để làm việc

đầu tiên hãy tạo một thư mục mới có tên là comments trong thư mục Source của bạn, bên trong thư mục này tạo một tệp gọi là dữ liệu. TS Và ở đây tôi sẽ dán một loạt ba bình luận mà chúng ta sẽ sử dụng, hãy coi chúng như những bình luận trên YouTube mỗi video có một ID riêng biệt và một số văn bản. Bây giờ khi đã có dữ liệu sẵn sàng, hãy tạo trình xử lý tuyến đường của chúng ta trong cùng thư mục Commons tạo một tệp mới gọi là route. TS: Hãy nhớ đây là quy ước nexs để tạo trình xử lý tuyến trong tệp này, chúng ta sẽ định nghĩa và xuất hàm get Handler của chúng ta, bắt đầu bằng cách nhập mảng chú thích từ tệp dữ liệu để nhập nhận xét từ / dữ liệu, sau đó chúng ta xuất một hàm gọi là get xuất hàm async, lấy cái này get.

Trình xử lý chỉ đơn giản trả về mảng bình luận của chúng tôi như phản hồi liền kề. Json và chúng tôi đi qua bình luận, giờ hãy thử nghiệm Handler này mở phần mở rộng client tender và nhấp vào yêu cầu mới, đặt phương thức HTTP để lấy và nhập URL localhost 3000 các cuộc trao đổi giữ nguyên tất cả các thiết lập khác khi bạn nhấn gửi, bạn sẽ thấy phản hồi trạng thái 200 được rồi với mảng ba bình luận của chúng tôi, ID một bình luận đầu tiên, ID 2 bình luận thứ hai và ID3 bình luận thứ ba hoàn hảo, get Handler hoạt động chính xác như mong đợi, hiện tại chúng tôi đang dùng ứng dụng Thunder để kiểm thử nhưng trong một ứng dụng thực tế bạn giao diện người dùng sẽ làm cho yêu cầu này trở nên quan trọng khi trang tải hoặc khi người dùng tương tác với nó

vấn đề là chúng tôi đã tạo thành công trình xử lý tuyến đường trong N Shars. Tiếp theo, chúng ta sẽ khám phá cách xử lý trước đây chúng ta đã học về cách xử lý yêu cầu GET. Bây giờ hãy cùng khám phá cách xử lý các yêu cầu POST. Hãy bắt đầu

---

**Điều hướng:** ← [Route Handlers](Bai_01_route-handlers.md) · Tiếp theo → [POST Request](Bai_03_post-request.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
