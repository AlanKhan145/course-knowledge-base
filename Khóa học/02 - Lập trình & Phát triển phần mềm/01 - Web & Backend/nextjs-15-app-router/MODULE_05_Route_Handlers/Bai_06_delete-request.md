---
lesson_id: "M05-L06"
module: "Backend API và Middleware"
title: "DELETE Request"
source_version: "Next.js 15 App Router"
video_start: "02:52:18"
video_duration: "2 phút 46 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. DELETE Request

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 2 phút 46 giây · **Mốc:** 02:52:18 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10338s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **DELETE Request**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **DELETE Request** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. DELETE Request** — DELETE xóa tài nguyên có kiểm tra quyền, trả 204 nếu không có body hoặc JSON xác nhận.
**2. DELETE Request** — Phân biệt soft delete và hard delete; tránh thao tác không thể hoàn tác khi chưa có nhu cầu.
**3. DELETE Request** — Giới hạn role và lưu audit log nếu là tính năng quan trọng.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/products/[id]/route.ts`

```tsx
type Context = { params: Promise<{ id: string }> };
export async function DELETE(_request: Request, { params }: Context) {
  const { id } = await params;
  // TODO: auth, xóa tài nguyên trong DB, kiểm tra quyền
  console.info("Delete requested for", id);
  return new Response(null, { status: 204 });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **DELETE Request**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **DELETE Request** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **DELETE Request** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** DELETE xóa tài nguyên có kiểm tra quyền, trả 204 nếu không có body hoặc JSON xác nhận.

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

- **Video nguồn:** [DELETE Request — 02:52:18](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10338s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

gợi ý xóa một tài nguyên được chỉ định trong trường hợp của chúng ta, chúng ta sẽ xóa một bình luận bằng ID của nó trước, hãy xem đó là gì yêu cầu xóa có vẻ như trong ứng dụng Thunder chúng ta sẽ bắt đầu bằng cách thay đổi từ HTTP từ bản vá để xóa URL cấu trúc vẫn giữ nguyên vì chúng ta vẫn cần ID chú thích trong URL /3, cho ví dụ này chúng ta sẽ xóa comment với ID 3 chúng ta có thể xóa body Json vì nó không cần thiết cho yêu cầu xóa, khi nhấn gửi chúng ta nhận được một phương thức lỗi status 405 không được phép, hãy sửa bằng cách thêm một Handler cho yêu cầu xóa trong API route của chúng tôi trong Tuyến đường của chúng ta. TS trong thư mục ID, hãy thêm một hàm xử lý tuyến đường mới, chúng ta sẽ tạo một hàm không đồng bộ gọi là

Delete nhận hai tham số: request và context. Đây là các tham số giống như chúng ta đã từng thấy cho cả hai patch và get requests chúng ta lấy tham số ID route bằng cách chờ tham số, tiếp theo chúng ta sẽ dùng array. tìm thấy chỉ mục để tìm chú thích muốn xóa, hãy sao chép dòng từ hàm patch sao cho chỉ số const bằng nhau đến bình luận. tìm chỉ mục tìm chú thích sao cho ID của nó bằng tham số route ID trước khi xóa chú thích tại mục đã cho ID chúng ta lưu nó trong một biến để có thể trả về sau, vì vậy const đã xóa bình luận bằng với chú thích của chỉ mục thì ta Sử dụng mảng. Nối để xóa mục để bình luận. Nối tại chỉ mục một và cuối cùng chúng tôi trả về phản hồi. Chuyền Json

Trong bình luận đã xóa, hãy thử nghiệm điều này trong Thunder client, nhấn gửi ngay bây giờ cho chúng tôi mã trạng thái 200 và hiển thị đã xóa bình luận trong văn bản phản hồi ID3, đây là bình luận thứ ba và nếu chúng ta gửi yêu cầu get từ cùng tab thì chỉ bình luận chéo bạn sẽ nhận thấy bình luận với ID3 không còn xuất hiện trong mảng chúng ta chỉ có hai Vậy đó là cách chúng tôi xử lý yêu cầu xóa trong trình xử lý tuyến đường, xin lưu ý rằng bất kỳ thay đổi nào đối với bình luận chỉ tồn tại trong bộ nhớ và sẽ không được lưu vào hệ thống tệp trong dữ liệu. TS bạn sẽ tiếp tục thấy bình luận thứ ba ngay bây giờ Chúng ta đã đề cập đến các yêu cầu nhận bản vá và xóa bài vá, hãy tiếp tục tìm hiểu thêm một số liên quan

---

**Điều hướng:** ← [PATCH Request](Bai_05_patch-request.md) · Tiếp theo → [URL Query Parameters](Bai_07_url-query-parameters.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
