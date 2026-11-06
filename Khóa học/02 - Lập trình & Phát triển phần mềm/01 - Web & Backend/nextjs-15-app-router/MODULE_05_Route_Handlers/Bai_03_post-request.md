---
lesson_id: "M05-L03"
module: "Backend API và Middleware"
title: "POST Request"
source_version: "Next.js 15 App Router"
video_start: "02:42:17"
video_duration: "3 phút 28 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. POST Request

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 3 phút 28 giây · **Mốc:** 02:42:17 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9737s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **POST Request**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **POST Request** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. POST Request** — POST tiếp nhận body JSON với await request.json(), validate rồi tạo tài nguyên.
**2. POST Request** — Phân biệt HTTP 201 (created), 400 (bad request), 401, 403 và 500.
**3. POST Request** — Đừng tin dữ liệu body; xác thực quyền và áp dụng schema validation.

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
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || !("name" in body) || typeof body.name !== "string") {
    return Response.json({ error: "name là bắt buộc" }, { status: 400 });
  }
  // TODO: xác thực session và ghi vào database thay vì biến memory.
  return Response.json({ id: crypto.randomUUID(), name: body.name }, { status: 201 });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **POST Request**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **POST Request** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **POST Request** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** POST tiếp nhận body JSON với await request.json(), validate rồi tạo tài nguyên.

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

- **Video nguồn:** [POST Request — 02:42:17](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9737s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

với thunder client, chúng ta sẽ giữ lại yêu cầu get trước đó và tạo một yêu cầu mới, trước tiên chọn post làm HTTP word tiếp theo, sao chép URL HTTP localhost 3000 commments tiếp theo, chúng ta cần chỉ định một đối tượng chú thích mới để thêm vào mảng bình luận của chúng ta đi đến tab thân và dưới Json, cùng với một đối tượng khóa trong dấu ngoặc kép là văn bản và giá trị là mới chú ý rằng chúng tôi không chỉ định ID sẽ được tạo bởi hàm Handler khi nhấn Gửi chúng tôi nhận phương thức lỗi status 405 không được phép Hãy sửa bằng cách thêm một Handler cho yêu cầu post này quay lại đến lộ trình của chúng ta. Tệp TS trong thư mục comment coms chúng ta sẽ Định nghĩa và Xuất một hàm mới, xuất Asing function post

hãy nhớ rằng tên hàm của chúng ta phải khớp với động từ HTTP mà chúng ta muốn xử lý mỗi route mà hàm Handler nhận được là rất quan trọng một đối tượng yêu cầu web tiêu chuẩn như một yêu cầu tham số kiểu yêu cầu, chúng tôi trích xuất thân Json từ yêu cầu này bằng cách gọi và chờ yêu cầu. Jason, điều này cho chúng ta đối tượng mà chúng ta đã chỉ định trong Thunder client, hãy lưu nó trong một hằng số gọi là common rồi ta tạo một đối tượng bình luận mới để const new bình luận bằng với một đối tượng, chúng tôi đặt ID bằng độ dài hiện tại của bình luận mảng cộng một để bình luận có độ dài + một và sử dụng văn bản từ phần thân yêu cầu của chúng tôi để văn bản là bình luận. văn bản chúng tôi thêm vào Bình luận mới này trong mốc bình luận của chúng tôi sử dụng Push Comments. Gửi bình luận mới ngay để nhận phản hồi mà chúng tôi cần

Phản hồi. Json nhưng điều đó sẽ cho chúng tôi mã trạng thái 200 vì chúng tôi đang tạo một tài nguyên mới với yêu cầu đăng bài Trạng thái năm 2011 phù hợp hơn, nên hãy trả lại phản hồi mới, đi qua bình luận mới của chúng tôi là Json so json. buộc dây mới Thông thường: đặt loại nội dung thành application sljs trong headers và sử dụng status code 2011 để chỉ ra việc tạo tài nguyên thành công Quay lại trong ứng dụng Thunder khi chúng tôi nhấn gửi bây giờ, chúng tôi nhận được trạng thái tạo năm 2011 và một bình luận mới là phản hồi id4 text mới bình luận nếu chúng tôi chuyển sang tab yêu cầu nhận và nhấn gửi lại, chúng tôi sẽ thấy cả bốn bình luận bao gồm một bình luận mới và đó là cốt lõi của việc xử lý các yêu cầu bài đăng Định nghĩa người xử lý bài đăng của bạn, xử lý phần thân yêu cầu và gửi lại

Phản hồi phù hợp Xin lưu ý rằng bất kỳ thay đổi nào đối với bình luận chỉ tồn tại trong bộ nhớ và sẽ không được lưu vào tệp hệ thống mảng bình luận của chúng ta vẫn chỉ có ba bình luận. Được rồi, bây giờ chúng ta đã ghi chú, hãy cùng nhau chuyển sang khám phá các trình xử lý tuyến động mà chúng ta đã đề cập, tạo trình xử lý tuyến đường, quên và đăng yêu cầu ngay bây giờ

---

**Điều hướng:** ← [GET Request](Bai_02_get-request.md) · Tiếp theo → [Dynamic Route Handlers](Bai_04_dynamic-route-handlers.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
