---
lesson_id: "M05-L07"
module: "Backend API và Middleware"
title: "URL Query Parameters"
source_version: "Next.js 15 App Router"
video_start: "02:55:04"
video_duration: "2 phút 54 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. URL Query Parameters

> **Module 05 — Backend API và Middleware** · **Thời lượng video:** 2 phút 54 giây · **Mốc:** 02:55:04 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10504s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **URL Query Parameters**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **backend api và middleware**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **URL Query Parameters** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. URL Query Parameters** — new URL(request.url).searchParams lấy query cho Route Handler.
**2. URL Query Parameters** — Dùng URLSearchParams.get/getAll và normalize số nguyên/trạng thái lọc.
**3. URL Query Parameters** — Các tham số lặp, tham số thiếu và giá trị xấu phải được xử lý dự đoán được.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/api/search/route.ts`

```tsx
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim();
  const limit = Math.min(50, Math.max(1, Number(searchParams.get("limit")) || 10));
  return Response.json({ q, limit, results: [] });
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **URL Query Parameters**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **URL Query Parameters** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **URL Query Parameters** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** new URL(request.url).searchParams lấy query cho Route Handler.

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

- **Video nguồn:** [URL Query Parameters — 02:55:04](https://www.youtube.com/watch?v=k7o9R6eaSes&t=10504s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/15/app/building-your-application/routing/route-handlers).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

chủ đề, hãy cùng tìm hiểu cách làm việc với các tham số truy vấn URL trong trình xử lý tuyến đường trong dữ liệu của chúng ta. Tệp TS chúng ta có một mảng ba bình luận bây giờ tưởng tượng chúng ta muốn lọc các bình luận này dựa trên một từ khóa tìm kiếm St, ví dụ khi bạn truy cập localhost 3000 Commons bạn sẽ thấy cả ba bình luận, nhưng nếu bạn chỉ muốn thấy các bình luận chứa từ đó thì sao? Đầu tiên, bằng cách vào slash comments, câu hỏi dấu hỏi là bằng với đầu tiên, hãy cùng tìm hiểu về VS Code và xem cách Hãy thực hiện điều này trên đường đi. TS có trong thư mục chú thích, chúng ta đã định nghĩa hàm get Handler của mình, trả về mảng gồm ba commment: đây là route mà chúng ta cần chỉnh sửa Handler, đầu tiên cần làm việc với yêu cầu

mặc dù chúng tôi đã sử dụng API yêu cầu tiêu chuẩn cho đến nay trong ngữ cảnh next chia sẻ loại mà chúng tôi là thực tế xử lý yêu cầu tiếp theo, nhập nó ở đầu từ máy chủ SLS tiếp theo và chỉ định loại trong Get Handler Đối tượng yêu cầu tiếp theo này cung cấp các phương pháp thuận tiện để quản lý tham số truy vấn một cách dễ dàng. Hãy cùng cập nhật Mã của chúng tôi trong phần hàm thân sẽ lấy tất cả các tham số truy vấn bằng cách sử dụng yêu cầu. URL nextext. Tìm kiếm các tham số và lưu chúng trong một hằng số gọi là tham số tìm kiếm, sau đó ta sử dụng phương thức get để lấy tham số truy vấn cụ thể của chúng tôi sao cho truy vấn const bằng với tham số tìm kiếm truy vấn doget nếu có truy vấn

tham số chúng tôi lọc các nhận xét chỉ bao gồm những bình luận chứa từ khóa tìm kiếm nên const filtered cons fenmment bằng nhau để truy vấn xem nó có tồn tại commons hay không. lọc và lọc Commons sao cho chúng bao gồm tham số truy vấn nếu không có truy vấn nào Phản hồi với mảng bình luận gốc Cuối cùng gửi lại các bình luận đã lọc dưới dạng Json Hãy thử nghiệm trên trình duyệt điều hướng đến bình luận localhost 3000 SL và chúng ta vẫn thấy ba bình luận hiện chỉ định dấu hỏi query bằng first và bạn sẽ thấy chỉ commit đầu tiên. Hãy thử thay đổi giá trị tham số truy vấn thành ir và bạn sẽ lấy cả bình luận đầu tiên và thứ ba vì cả hai đều chứa IR phòng trường hợp bạn đang thắc mắc cách làm việc với nhiều tham số truy vấn, bạn có thể

truy cập từng thông số riêng lẻ bằng tham số tìm kiếm, doget truyền tên tham số rất đơn giản nhưng đây là cách bạn làm việc Với các tham số truy vấn trong trình xử lý tuyến đường thì chúng là tùy chọn nhưng thực sự rất tuyệt vời khi thêm các tính năng mạnh mẽ như Tìm kiếm sắp xếp và phân trang cho ứng dụng của bạn. Hãy cùng tìm hiểu về xử lý các tiêu đề trong trình xử lý tuyến đường. Chúng ta sẽ bắt đầu

---

**Điều hướng:** ← [DELETE Request](Bai_06_delete-request.md) · Tiếp theo → [Headers in Route Handlers](Bai_08_headers-in-route-handlers.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
