---
lesson_id: "M05-L04"
module: "Backend API và Middleware"
title: "Dynamic Route Handlers"
source_version: "Next.js 15 App Router"
video_start: "02:45:45"
video_duration: "3 phút 29 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Dynamic Route Handlers

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 3 phút 29 giây · **Mốc:** 02:45:45 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9945s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Dynamic Route Handlers**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Dynamic Route Handlers** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Dynamic Route Handlers** — [id]/route.ts đọc params cho endpoint ví dụ /api/products/123.
**2. Dynamic Route Handlers** — Trong Next.js 15, context.params được await; kiểm tra tài nguyên tồn tại.
**3. Dynamic Route Handlers** — Trả 404 khi ID không hợp lệ hoặc không tìm được thay vì response 200 rỗng.

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
export async function GET(_req: Request, { params }: Context) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Bad ID" }, { status: 400 });
  return Response.json({ id, name: `Sản phẩm ${id}` });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Dynamic Route Handlers**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Dynamic Route Handlers** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Dynamic Route Handlers** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** [id]/route.ts đọc params cho endpoint ví dụ /api/products/123.

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

- **Video nguồn:** [Dynamic Route Handlers — 02:45:45](https://www.youtube.com/watch?v=k7o9R6eaSes&t=9945s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Hãy cùng giải quyết các yêu cầu vá và xóa, chúng hoạt động hơi khác nhau vì chúng yêu cầu chỉ định bình luận nào cần cập nhật hoặc xóa trong khi SL bình luận của chúng tôi xử lý các yêu cầu lấy và đăng yêu cầu vá và xóa cần thiết một điểm cuối như slash chú thích trượt, trong đó ID là một đoạn động, có thể là 1, 2, 3 hoặc bất kỳ ID hợp lệ nào từ mảng bình luận, trước tiên hãy tìm hiểu cách tạo một trình xử lý tuyến động trả về một bình luận duy nhất dựa trên ID của nó, điều này sẽ giúp chúng ta xử lý tốt các yêu cầu vá lỗi và xóa sau này, bạn sẽ vui khi biết rằng Dynamic trình xử lý tuyến đường tuân theo cùng một mẫu như các tuyến trên trang động, vì vậy để tạo một trình xử lý/ trượt tuyến trước, chúng ta

sẽ tạo một thư mục mới tên là ID được đóng trong ngoặc vuông bên trong thư mục nhận xét nên thư mục mới trong hãy ghi dấu ngoặc vuông vào ID rồi chúng ta sẽ thêm một tuyến đường. Route của tệp TS bên trong. TS và Định nghĩa xuất hàm Get Handler của chúng tôi Khi vào trong hàm này, chúng ta cần lấy một chú thích cụ thể phù hợp với tham số ID của tuyến đường trước chúng ta sẽ nhập mảng chú thích chứa dữ liệu của chúng ta, vì vậy hãy nhập chú thích từ dữ liệu tiếp theo, chúng ta cần truy cập ID tham số route và như một biến thể, hàm Handler nhận hai tham số, đầu tiên là một đối tượng yêu cầu mà chúng ta đã quen thuộc là một đối tượng context chứa các tham số route nên các tham số kiểu hứa hẹn

chứa tham số ID route của chúng ta kiểu chuỗi bây giờ chúng ta chỉ quan tâm đến ngữ cảnh nên hãy thêm tiền tố yêu cầu đối tượng có dấu gạch dưới trong phần thân hàm chờ lời hứa pro và phân cấu trúc thuộc tính ID từ đối tượng params để ID const bằng với await harams sử dụng ID này, chúng tôi tìm kiếm trong mảng commment để tìm Khớp chung nên const common bằng với nhận xét. tìm và với mỗi bình luận, chúng ta kiểm tra xem ID của nó có khớp tham số không ID để phân tích trong ID, khi tìm thấy chúng tôi gửi lại cho khách hàng như phản hồi trả về liền kề. Bình luận Json Hãy thử nghiệm Điều này trong ứng dụng Thunder ở tab nơi chúng ta đang gửi yêu cầu get, hãy thêm dấu gạch chéo 1 vào URL và nhấn gửi, chúng ta sẽ có một

200 trạng thái ổn và bình luận có ID bằng một, thử slash2 gửi và chúng ta nhận được bình luận thứ hai, tương tự với slash3 đối với bình luận thứ ba, tham số URL Det xác định bình luận nào chúng ta lấy trong khi chỉ làm việc với ba bình luận Bình luận ở đây trong ứng dụng thực tế bạn có thể có hàng nghìn bản ghi cơ sở dữ liệu nhưng logic vẫn giữ nguyên trích xuất ID từ các tham số, tìm dữ liệu tương ứng với ID đó và trả về dưới dạng Json, nhưng bây giờ chúng ta Hiểu về Trình xử lý tuyến động Hãy chuyển sang xử lý các yêu cầu vá để cập nhật từng bình luận riêng lẻ Hãy tìm hiểu cách xử lý bản vá

---

**Điều hướng:** ← [POST Request](Bai_03_post-request.md) · Tiếp theo → [PATCH Request](Bai_05_patch-request.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
