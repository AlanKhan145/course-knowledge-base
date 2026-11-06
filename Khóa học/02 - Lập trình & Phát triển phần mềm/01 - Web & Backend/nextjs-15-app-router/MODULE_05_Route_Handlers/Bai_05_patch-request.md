---
lesson_id: "M05-L05"
module: "Backend API và Middleware"
title: "PATCH Request"
source_version: "Next.js 15 App Router"
video_start: "02:49:14"
video_duration: "3 phút 04 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. PATCH Request

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 3 phút 04 giây · **Mốc:** 02:49:14 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10154s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **PATCH Request**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **PATCH Request** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. PATCH Request** — PATCH cập nhật một phần thuộc tính tài nguyên; chỉ cho phép các field được định nghĩa.
**2. PATCH Request** — Validate body, kiểm tra tồn tại, xác thực quyền sở hữu và trả bản ghi sau cập nhật.
**3. PATCH Request** — Suy xét đồng thời khi nhiều request cùng sửa dữ liệu.

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
export async function PATCH(request: Request, { params }: Context) {
  const { id } = await params;
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || !("name" in body) || typeof body.name !== "string")
    return Response.json({ error: "Invalid input" }, { status: 400 });
  // TODO: auth, quyền sửa và UPDATE DB WHERE id = ...
  return Response.json({ id, name: body.name });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **PATCH Request**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **PATCH Request** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **PATCH Request** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** PATCH cập nhật một phần thuộc tính tài nguyên; chỉ cho phép các field được định nghĩa.

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

- **Video nguồn:** [PATCH Request — 02:49:14](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10154s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

yêu cầu vá Một yêu cầu vá cho phép chúng tôi chỉnh sửa một phần tài nguyên vì chúng tôi chỉ làm việc với một tài nguyên duy nhất thuộc tính có tên là cập nhật văn bản, bình luận sẽ khá đơn giản. Trước tiên, để tôi cho bạn xem yêu cầu vá trông như thế nào. như trong client Thunder, chúng ta sẽ bắt đầu bằng cách thay đổi từ HTTP từ get sang patch, chúng ta sẽ giữ cùng một URL vì chúng ta là khi cập nhật chú thích với ID3 trong tab body dưới phần Json, chúng tôi sẽ thêm một đối tượng với bộ thuộc tính văn bản đến một chuỗi khác được cập nhật chung, khi chúng ta nhấn gửi, chúng ta nhận được một phương thức trạng thái 405 không được phép, hãy sửa điều đó bằng thêm một Handler cho các yêu cầu vá lỗi trong tuyến đường của chúng tôi. Tệp TS bên trong thư mục ID, chúng ta sẽ tạo một trình xử lý tuyến đường mới

hàm xuất bản vá chức năng không đồng bộ chức năng này nhận hai tham số, yêu cầu và context. Tôi sẽ sao chép các tham số từ hàm Handler lấy trong hàm đầu tiên chúng ta phân cấu trúc ID bằng cách chờ tham số, tiếp theo lấy thân Json từ yêu cầu sử dụng yêu cầu chờ đợi. Json, chúng ta gán nó cho một hằng số gọi là body, bây giờ chúng ta dùng request, vậy hãy loại bỏ gạch dưới từ tham số của chúng tôi. Tiếp theo, từ phần thân, chúng tôi phân cấu trúc văn bản bình luận để tìm bình luận mà chúng tôi muốn cập nhật. Có thể sử dụng bất kỳ mảng TH nào. tìm hoặc tìm chỉ mục Tôi chọn tìm chỉ mục vì chúng ta sẽ cần nó cho các thao tác xóa sau này Vậy chỉ số con bằng với các chú thích. Tìm chú thích chỉ mục như bình luận đó. ID bằng ngựa trong ID

tham số: khi ta tìm thấy chú thích, chúng ta chỉ cần cập nhật thuộc tính văn bản của nó sao cho chú thích của văn bản chỉ mục bằng với văn bản từ Yêu cầu cuối cùng trả về bình luận cập nhật như phản hồi liền kề trả về phản hồi. Bình luận Json của chỉ mục hiện đang trở về phía khách thunder và nhấn gửi, chúng tôi nhận được mã trạng thái 200 với bình luận cập nhật trong phản hồi ID3 text bình luận cập nhật nếu bạn gửi yêu cầu get từ cùng tab đến/ bình luận. Chúng tôi có thể xem bình luận cập nhật trong mảng ID3 văn bản, bình luận cập nhật Đây là cách chúng tôi xử lý các yêu cầu vá trong trình xử lý tuyến đường Xin lưu ý rằng bất kỳ thay đổi nào đối với bình luận chỉ tồn tại trong Bộ nhớ và sẽ không được lưu vào hệ thống tập tin trong dữ liệu. TS bạn sẽ tiếp tục thấy văn bản gốc cho ID bình luận 3

tiếp theo, chúng ta sẽ xem xét cách xử lý yêu cầu xóa, hãy cùng tìm hiểu cách xử lý yêu cầu xóa, yêu cầu xóa làm tên

---

**Điều hướng:** ← [Dynamic Route Handlers](Bai_04_dynamic-route-handlers.md) · Tiếp theo → [DELETE Request](Bai_06_delete-request.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
