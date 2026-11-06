---
lesson_id: "M09-L05"
module: "Đột biến dữ liệu và form"
title: "Separating Server Actions"
source_version: "Next.js 15 App Router"
video_start: "05:41:04"
video_duration: "3 phút 28 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. Separating Server Actions

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 3 phút 28 giây · **Mốc:** 05:41:04 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20464s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Separating Server Actions**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Separating Server Actions** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Separating Server Actions** — Đặt server actions trong module riêng với use server ở đầu file khi cần tái sử dụng.
**2. Separating Server Actions** — Tách schema validation, access control và database operation để dễ test.
**3. Separating Server Actions** — Không nhập secret server module tùy tiện vào Client Component; chỉ truyền action tham chiếu theo hỗ trợ framework.

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
export type FormState = { error: string };
export async function addTodo(_prev: FormState, data: FormData): Promise<FormState> {
  const title = String(data.get("title") ?? "").trim();
  if (!title) return { error: "Nhập tiêu đề" };
  // TODO: INSERT DB, kiểm tra quyền user.
  revalidatePath("/todos");
  return { error: "" };
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Separating Server Actions**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Separating Server Actions** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Separating Server Actions** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Đặt server actions trong module riêng với use server ở đầu file khi cần tái sử dụng.

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

- **Video nguồn:** [Separating Server Actions — 05:41:04](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20464s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

một thành phần khách hàng năm sau sẽ không cho phép nhưng đừng lo, tôi có giải pháp hay cho bạn, mẹo là tách hành động máy chủ thành một tệp riêng, giữ cho logic phía SERs được tách biệt rõ ràng khỏi phía khách hàng các thành phần, để tôi chỉ cho bạn cách làm điều này, trước tiên hãy tạo một thư mục mới tên là actions trong thư mục Source của bạn bên trong Thư mục này tạo một tệp có tên là products. TS chúng tôi dùng tên này vì chúng tôi làm việc với các sản phẩm nhưng Cứ thoải mái đặt tên cho dự án của bạn, giờ hãy để chúng tôi thiết lập sản phẩm. Tệp TS, vấn đề là thế này về chỉ thị máy chủ của chúng tôi bạn có thể đặt một chỉ thị ở đầu một hàm Asing để đánh dấu hàm đó là

hành động máy chủ hoặc ở đầu một tệp riêng biệt để đánh dấu tất cả các lần xuất tệp đó là hành động máy chủ, vì vậy chúng ta bắt đầu tệp này với chỉ thị sử dụng máy chủ ở đầu cùng Tiếp theo chúng ta sẽ di chuyển lỗi kiểu và trạng thái biểu mẫu vào tệp này và Xuất sau đó chúng tôi sẽ thực hiện hành động tạo máy chủ sản phẩm nhưng sẽ loại bỏ chỉ thị máy chủ của Hoa Kỳ khỏi chức năng như Không còn cần thiết ở đây nữa. Hãy đảm bảo nhập sản phẩm và chuyển hướng các hàm ở phía trên. Nhập thêm sản phẩm. Từ cơ sở dữ liệu Prisma và nhập chuyển hướng từ điều hướng tiếp theo, hãy chắc chắn xuất sản phẩm ngay bây giờ. Hãy cùng cập nhật trang của chúng tôi. Tệp TSX chúng tôi sẽ xóa nhập cho sản phẩm quảng cáo và chuyển hướng, chúng tôi sẽ nhập mẫu trạng thái và tạo sản phẩm từ sản phẩm mới của chúng tôi

sản phẩm. Tệp TS trong thư mục actions, chúng tôi vẫn sẽ sử dụng trạng thái hành động với chức năng create product ngay bây giờ nếu bạn lưu tệp và thử trên trình duyệt, chúng tôi gặp lỗi nói bạn có ý dùng máy chủ không, nên hãy chắc chắn rằng chúng tôi không có bất kỳ khoảng trắng dư nào có thể điều hướng đến sản phẩm tạo bằng dấu gạch nối DB và không cần điền vào biểu mẫu. Các trường, nhấp vào nút gửi Chúng tôi có dữ liệu mẫu đơn. getet không phải là một hàm và điều này là vì khi chúng ta sử dụng action State và pass, create product hàm tự động nhận trạng thái trước đó làm đối số đầu tiên, do đó trạng thái trước đó của kiểu form Khi bạn gửi với các trường trống, bạn sẽ thấy các thông báo lỗi, tiêu đề, giá và mô tả, tất cả đều

là bắt buộc khi bạn điền đầy đủ và gửi sản phẩm mới của bạn sẽ xuất hiện trong danh sách và đó là tất cả chúng tôi có đã triển khai xác thực biểu mẫu thành công bằng cách sử dụng trạng thái hành động sử dụng với hành động biểu mẫu được định nghĩa riêng cách tiếp cận này cho phép Chúng tôi là lựa chọn tốt nhất của cả hai thế giới, chúng tôi có thể sử dụng các hook React phía khách hàng để quản lý trạng thái biểu mẫu bằng cách tận dụng sức mạnh của hành động máy chủ cho các biến đổi dữ liệu cho chủ đề tiếp theo Tôi muốn đi vòng nhanh để nói về trạng thái biểu mẫu đang chờ trả về từ khi sử dụng và đang chờ trả về từ hành động sử dụng Trạng thái chúng ta hãy xem trạng thái đang chờ từ trạng thái biểu mẫu sử dụng và E đang chờ xử lý

---

**Điều hướng:** ← [useActionState Hook](Bai_04_useactionstate-hook.md) · Tiếp theo → [useFormStatus vs useActionState](Bai_06_useformstatus-vs-useactionstate.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
