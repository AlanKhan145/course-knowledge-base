---
lesson_id: "M09-L04"
module: "Đột biến dữ liệu và form"
title: "useActionState Hook"
source_version: "Next.js 15 App Router"
video_start: "05:34:14"
video_duration: "6 phút 50 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. useActionState Hook

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 6 phút 50 giây · **Mốc:** 05:34:14 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20054s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **useActionState Hook**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **useActionState Hook** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. useActionState Hook** — useActionState quản lý state kết quả action, thường dùng cho lỗi validation ở cấp form.
**2. useActionState Hook** — Action nhận previous state và FormData, trả về state mới serializable.
**3. useActionState Hook** — Sử dụng thông báo field-level và tránh đưa lỗi nội bộ ra client.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/todos/todo-form.tsx`

```tsx
"use client";
import { useActionState } from "react";
import { addTodo, type FormState } from "./actions";
const initialState: FormState = { error: "" };
export default function TodoForm() {
  const [state, formAction, pending] = useActionState(addTodo, initialState);
  return <form action={formAction}><input name="title" />
    <button disabled={pending}>Lưu</button><p role="alert">{state.error}</p></form>;
}
// actions.ts: action(prevState: FormState, formData: FormData) => Promise<FormState>.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **useActionState Hook**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **useActionState Hook** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **useActionState Hook** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** useActionState quản lý state kết quả action, thường dùng cho lỗi validation ở cấp form.

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

- **Video nguồn:** [useActionState Hook — 05:34:14](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20054s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Bây giờ hãy cùng đi sâu vào một vấn đề quan trọng không kém: Quản lý lỗi. Trong các biểu mẫu, chúng ta sẽ sử dụng một trạng thái khác. react hug mới gọi là use action State use action state là một react hug cho phép chúng ta cập nhật State dựa trên Kết quả của hành động biểu mẫu: nó đặc biệt hữu ích trong việc xử lý xác thực biểu mẫu và tin nhắn. Hãy cùng vào mã và xem cách nó hoạt động trong trang tạo cơ sở dữ liệu sản phẩm. TSX, hãy bắt đầu bằng việc định nghĩa các kiểu lỗi xử lý lỗi, loại lỗi chúng ta sẽ theo dõi ba lỗi tiềm ẩn, một lỗi cho tiêu đề, một lỗi Đối với giá và một trường cho trường mô tả chúng là tùy chọn kiểu chuỗi lỗi sẽ là một phần của trạng thái tổng thể của form vậy hãy định nghĩa type trạng thái form chứa một lỗi chính của lỗi kiểu bây giờ bên trong thành phần của chúng ta

sẽ thiết lập trạng thái biểu mẫu ban đầu sao cho trạng thái ban đầu của const kiểu trạng thái biểu mẫu bằng một đối tượng có lỗi được đặt thành một đối tượng rỗng, giờ đây chúng ta đã có các điều kiện tiên quyết cho hành động sử dụng, trạng thái ôm, gọi nó trong thành phần sử dụng trạng thái hành động đảm bảo nhập nó từ react để nhập trạng thái hành động từ react hook này lấy hai tham số, đầu tiên là hành động máy chủ của chúng ta là tạo sản phẩm và thứ hai là trạng thái biểu mẫu ban đầu là những gì chúng tôi vừa định nghĩa, bạn có thể thấy lỗi typescript cho create product, nhưng đừng lo, chúng tôi sẽ sửa ngay sau Tiếp theo, hãy cập nhật hành động tạo máy chủ sản phẩm để hoạt động với trạng thái mới này, trước tiên hãy khai báo lỗi kiểu

Errors, đây là một đối tượng rỗng để bắt đầu nếu không có tiêu đề trong dữ liệu dạng mà chúng ta đặt lỗi. danh hiệu bằng nhau To Title cũng bắt buộc, tương tự nếu giá không có trong dữ liệu biểu mẫu của chúng tôi, chúng tôi sẽ đặt lỗi. giá cả là yêu cầu và Cuối cùng, nếu mô tả không tồn tại trong dữ liệu biểu mẫu, chúng tôi sẽ đặt lỗi. mô tả bằng với mô tả là bắt buộc là tùy chọn trong mô hình của chúng ta nhưng hãy thực thi xác thực trường bắt buộc sau khi thực hiện các kiểm tra đối tượng if này. chìa khóa của những sai sót. chiều dài lớn hơn 0 chúng ta trả về đối tượng lỗi những gì chúng ta đang làm ở đây là xác thực dữ liệu biểu mẫu và thiết lập thông báo lỗi phù hợp: nếu bạn phát hiện bất kỳ lỗi nào, chúng tôi sẽ trả về trạng thái biểu mẫu đã cập nhật mà không cần tiến hành

câu lệnh insert vì object key và value là errors, chúng ta có thể sử dụng ký hiệu Shand, tuy nhiên điều này sẽ tuân thủ Mẫu trạng thái của chúng tôi trong trường hợp bạn gặp khó khăn khi theo dõi trong hành động tạo máy chủ sản phẩm của chúng tôi Chúng tôi lấy được giá tiêu đề và mô tả từ dữ liệu biểu mẫu, sau đó kiểm tra xem có giá trị cho từng cái hay không Nếu không có, chúng ta sẽ điền vào một đối tượng lỗi khi các khóa khác nhau, nếu chỉ một khóa tồn tại thì chúng ta có lỗi trong và chúng ta trả về đối tượng Errors thay vì chèn dữ liệu vào cơ sở dữ liệu, giờ hãy quay lại cách sử dụng của chúng ta action Trạng thái hook này trả về một mảng chứa ba thành phần mảng const bằng để sử dụng action State the hook

Trả về trạng thái dạng hiện tại mà ta sẽ gọi là Trạng thái, một hành động dạng mới mà ta sẽ gọi là hành động dạng và một Boolean điều đó cho biết nếu hành động đang được thực thi, hãy gọi nó là e đang chờ xử lý. Bây giờ hãy sử dụng ba giá trị này. Trong thành phần của chúng ta, trước tiên chúng ta sẽ sử dụng trạng thái biểu mẫu hiện tại để hiển thị các thông báo lỗi, vì vậy bên dưới mỗi nhãn chúng ta sẽ thêm một đoạn văn hiển thị thông báo lỗi nếu nó tồn tại như vậy trạng thái Braes curly. Lỗi. Tiêu đề và nếu có, hãy thêm trạng thái hiển thị thẻ đoạn văn. Lỗi. gạch cũng thêm kiểu Tailwind để hiển thị thông báo màu đỏ, tôi sẽ sao chép ba dòng mã này và dán nó vào mục giá cũng như nhãn mô tả cho trạng thái cập nhật giá.

Lỗi. Giá cả và để mô tả trạng thái. Lỗi. Mô tả Chúng ta cũng sẽ nhóm trường biểu mẫu và thông báo lỗi trong một thẻ div để nhãn bao bọc thẻ div cũng như thông báo lỗi Div Tag, Wrapping nhãn và thông báo lỗi và thông báo lỗi cuối cùng, điều này chỉ nhằm mục đích nhóm liên quan Các phần tử và cộng khoảng cách giữa các trường khác nhau, trạng thái giờ đã được xử lý, tiếp theo chúng ta sẽ trỏ hành động form đến thuộc tính hành động của biểu mẫu của chúng ta, vì vậy thay vì tạo sản phẩm, chúng ta chỉ định hành động biểu mẫu, chúng ta sẽ sử dụng chi tiêu E

Boolean để tắt nút gửi có điều kiện khi hành động đang được thực hiện, giờ đây hoàn toàn tùy chọn vì chúng tôi đã xử lý trạng thái chờ xử lý với trạng thái biểu mẫu sử dụng trong thành phần gửi, nhưng tôi sẽ chỉ cho bạn cách thực hiện Dù sao tôi cũng sẽ chú thích ra thành phần nút gửi sao chép phần tử nút từ thành phần gửi và dán nó vào vị trí của thuộc tính disable chúng ta sẽ chuyển e đang chờ Boolean trả về bằng hành động use State hug cuối cùng những gì chúng ta đã làm ở đây là thay vì gọi trực tiếp sản phẩm create hành động máy chủ, chúng ta đưa nó qua use action State hook để quản lý Cập nhật trạng thái dựa trên hành động biểu mẫu, bây giờ khi lưu tệp và quay lại trình duyệt, chúng ta sẽ gặp lỗi

Bạn có đoán được tại sao chúng ta lại sử dụng một react hook trong thành phần máy chủ không? Hãy sử dụng action State ngay bây giờ, bản năng đầu tiên của bạn có thể là thêm use client ở đầu file của chúng ta, hãy làm vậy hãy dùng client khi tôi lưu file, bạn có thể thấy nó cho chúng ta lỗi khác vì không được phép định nghĩa các hành động máy chủ được chú thích trong máy khách các thành phần nói đơn giản hơn chúng ta không thể sử dụng chỉ thị sử dụng máy chủ trong một thành phần được đánh dấu bằng chỉ thị sử dụng khách hàng nên Giải pháp là gì? Đó là điều chúng ta sẽ khám phá tiếp theo. Trước đó, chúng ta gặp phải một trở ngại khi cố gắng định nghĩa hành động máy chủ trong

---

**Điều hướng:** ← [useFormStatus Hook](Bai_03_useformstatus-hook.md) · Tiếp theo → [Separating Server Actions](Bai_05_separating-server-actions.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
