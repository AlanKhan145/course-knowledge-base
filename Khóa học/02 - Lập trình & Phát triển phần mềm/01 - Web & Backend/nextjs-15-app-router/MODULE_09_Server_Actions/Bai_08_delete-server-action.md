---
lesson_id: "M09-L08"
module: "Đột biến dữ liệu và form"
title: "Delete Server Action"
source_version: "Next.js 15 App Router"
video_start: "05:54:51"
video_duration: "3 phút 26 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. Delete Server Action

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 3 phút 26 giây · **Mốc:** 05:54:51 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=21291s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Delete Server Action**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Delete Server Action** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Delete Server Action** — Nhận ID từ form hoặc bind action, kiểm tra quyền trước khi xóa.
**2. Delete Server Action** — Sau xóa cập nhật list/revalidate và điều hướng hợp lý.
**3. Delete Server Action** — Đề xuất xác nhận xóa ở client, nhưng quyết định cuối cùng vẫn phải nằm ở server.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/todos/actions.ts`

```tsx
"use server";
import { revalidatePath } from "next/cache";
export async function deleteTodo(id: string) {
  // TODO: xác thực, kiểm tra owner và DELETE bằng truy vấn có tham số.
  revalidatePath("/todos");
}
// <form action={deleteTodo.bind(null, todo.id)}><button>Xóa</button></form>
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Delete Server Action**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Delete Server Action** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Delete Server Action** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Nhận ID từ form hoặc bind action, kiểm tra quyền trước khi xóa.

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

- **Video nguồn:** [Delete Server Action — 05:54:51](https://www.youtube.com/watch?v=k7o9R6eaSes&t=21291s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Nút xóa cho từng sản phẩm trong danh sách của chúng tôi tại trang cơ sở dữ liệu sản phẩm. Sản phẩm sau DSX. giá Tôi sẽ thêm một file xóa loại nút bằng để gửi với nền đỏ để tạo kiểu và xóa văn bản tiếp theo, hãy định nghĩa Xóa hành động máy chủ trong Hành động / Sản phẩm. TS, chúng tôi sẽ thêm chức năng xóa sản phẩm, tức là xuất hàm không đồng bộ, xóa sản phẩm, nhập chức năng xóa sản phẩm khỏi cơ sở dữ liệu prismad. TS xử lý việc xóa một sản phẩm theo hành động xóa máy chủ sản phẩm ID của nó sẽ nhận tham số ID kiểu Số và chuyển trực tiếp đến chức năng xóa sản phẩm, rất đơn giản trong sản phẩm của chúng tôi chúng ta cần gọi hành động This Server, nhưng câu hỏi là làm thế nào để thực hiện điều đó nếu sử dụng OnClick Handler trên

nút xóa nó sẽ làm cho nó trở thành mã phía máy khách, tuy nhiên chúng tôi muốn thành phần vẫn là thành phần máy chủ giải pháp là bao bọc nút của chúng ta bằng một phần tử biểu mẫu, ví dụ thẻ mở và thẻ đóng biểu mẫu trên phần tử biểu mẫu sẽ chỉ định thuộc tính hành động để gọi hành động xóa máy chủ sản phẩm sao cho hành động bằng để xóa sản phẩm chắc chắn để nhập ở phía trên, import remove product from actions. SL products now remove product đáp ứng tham số ID, vì vậy chúng ta cũng sẽ liên kết product. Tôi đã dùng phương pháp bind nên là sản phẩm dấu phẩy null. ID, điều này làm cho ID sản phẩm trở thành đối số đầu tiên để xóa sản phẩm giống như chúng tôi đã làm trước đó với hành động cập nhật máy chủ sản phẩm, cùng một ID này được truyền để xóa sản phẩm

hãy lưu lại tất cả và thử trên tuyến cơ sở dữ liệu sản phẩm, chúng ta thấy nút xóa mới được thêm vào cho từng sản phẩm khi chúng ta nhấn xóa trên sản phẩm cuối cùng, tức là validation typle một, chúng ta thấy yêu cầu mạng nhưng không có gì xảy ra trong giao diện nếu bạn Làm mới trang bạn sẽ thấy sản phẩm cuối cùng đã biến mất, vậy còn thiếu gì? Chúng ta cần làm mới lại cái này danh sách sản phẩm tự động sau khi xóa để khắc phục điều này, chúng ta có thể sử dụng một hàm gọi là revalidate path. Hãy chắc chắn nhập revalidate path. từ dấu gạch chéo tiếp theo làm đối số, hãy chỉ định dấu gạch chéo cơ sở dữ liệu, đây là đường dẫn của trang danh sách sản phẩm mà chúng tôi đang báo cho ni chia sẻ refetch dữ liệu cho/ sản phẩm, đường dẫn cơ sở dữ liệu sau khi xóa, hãy chắc chắn thêm từ khóa await ngay khi chúng tôi xóa một

Product Submit Product One Bạn thấy yêu cầu mạng và nó biến mất khỏi danh sách mà không cần hướng dẫn sử dụng Làm mới Bạn vẫn sẽ nhận thấy độ trễ 1,5 giây mà chúng tôi đã tích hợp trong ứng dụng thực tế thường là Ngắn hơn nữa, bất kỳ độ trễ nào cũng không lý tưởng cho trải nghiệm người dùng, nên tiếp theo chúng ta sẽ xem cách làm cho việc này mượt mà hơn khi sử dụng Cập nhật lạc quan cho chủ đề cuối cùng liên quan đến hoạt động CRUD. Hãy cùng xem xét cách thực hiện các cập nhật lạc quan với

---

**Điều hướng:** ← [Update Server Action](Bai_07_update-server-action.md) · Tiếp theo → [Optimistic Updates with useOptimistic Hook](Bai_09_optimistic-updates-with-useoptimistic-hook.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
