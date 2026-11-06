---
lesson_id: "M09-L02"
module: "Đột biến dữ liệu và form"
title: "Forms with Server Actions"
source_version: "Next.js 15 App Router"
video_start: "05:24:54"
video_duration: "5 phút 49 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Forms with Server Actions

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 5 phút 49 giây · **Mốc:** 05:24:54 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=19494s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Forms with Server Actions**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Forms with Server Actions** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Forms with Server Actions** — Khai báo async function có use server và truyền vào action của form.
**2. Forms with Server Actions** — FormData.get() lấy giá trị; validate trên server trước khi lưu.
**3. Forms with Server Actions** — Sau mutation có thể revalidatePath/revalidateTag hoặc redirect tùy trải nghiệm.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/todos/page.tsx`

```tsx
import { revalidatePath } from "next/cache";
async function createTodo(formData: FormData) {
  "use server";
  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("Tiêu đề bắt buộc");
  // TODO: INSERT INTO todos ... (ghi DB thực)
  revalidatePath("/todos");
}
export default function TodosPage() {
  return <form action={createTodo}><input name="title" required />
    <button type="submit">Thêm</button></form>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Forms with Server Actions**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Forms with Server Actions** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Forms with Server Actions** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Khai báo async function có use server và truyền vào action của form.

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

- **Video nguồn:** [Forms with Server Actions — 05:24:54](https://www.youtube.com/watch?v=k7o9R6eaSes&t=19494s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Cách truyền thống để xử lý các đột biến dữ liệu trong React Bây giờ hãy cùng khám phá một tính năng thú vị trong bộ định tuyến ứng dụng gọi là hành động máy chủ hành động máy chủ là các hàm không đồng bộ được thực thi trên máy chủ mà chúng có thể là đã gọi các thành phần máy chủ và máy khách để xử lý việc gửi biểu mẫu và biến đổi dữ liệu trong các ứng dụng NEXS, bạn nên sử dụng các hành động máy chủ khi bạn cần thực hiện các thao tác cơ sở dữ liệu bảo mật muốn giảm nhu cầu mã API B plate Nâng cấp dần dần cho biểu mẫu và muốn tối ưu hóa hiệu suất, hành động của máy chủ có thể được định nghĩa bằng máy chủ sử dụng react bạn có thể đặt chỉ thị ở đầu một hàm asnc để đánh dấu hàm là hành động máy chủ hoặc tại

đầu một tệp riêng biệt để đánh dấu tất cả các xuất ra tệp đó là hành động của máy chủ, hãy cùng vào mã V và xem cách này phù hợp với ví dụ của chúng ta. Chúng ta sẽ xây dựng một biểu mẫu để thêm sản phẩm mới vào cơ sở dữ liệu. Trước tiên, hãy tạo một tuyến đường mới. trong thư mục ứng dụng, tạo một thư mục mới, cơ sở dữ liệu sản phẩm, tạo SL. Ở đây chúng ta sẽ định nghĩa và xuất một react thành phần có tên Add Product Page để xuất hàm mặc định Add Product Page đây là thành phần máy chủ cho JSX, chúng ta sẽ sao chép Form JSX từ ví dụ trước của chúng ta, tức là từ trang React Form. TSX sao chép câu lệnh trả về và sau đó loại bỏ các trình xử lý trạng thái và sự kiện không hoạt động trong các thành phần máy chủ, loại bỏ khi gửi từ

phần tử biểu mẫu trên thay đổi trạng thái tắt từ ba phần tử đầu vào khi tải và chúng ta có thể thay đổi văn bản thành chỉ cần thêm sản phẩm, bây giờ chúng ta sẽ định nghĩa hành động máy chủ đầu tiên để xử lý việc gửi biểu mẫu, trước tiên chúng ta tạo một Asing hàm có tên create product và đánh dấu nó bằng chỉ thị sử dụng máy chủ ở phía trên, tiếp theo chúng ta kết nối hàm này với biểu mẫu bằng cách gán nó cho thuộc tính hành động sao cho hành động bằng để tạo sản phẩm khi ai đó gửi biểu mẫu của chúng tôi tạo sản phẩm này hàm tự động nhận dữ liệu biểu mẫu dưới dạng đối số, kiểu là dữ liệu biểu mẫu, sau đó chúng ta lấy các trường cần thiết từ dữ liệu biểu mẫu. Và gọi hàm Add Product từ Prismad DB. Tệp TS nên dữ liệu biểu mẫu tiêu đề const. lấy tiêu đề dưới dạng chuỗi tương tự lấy

giữ giá và mô tả Đảm bảo máy chủ của bạn ở vị trí cao nhất sau khi bạn có tất cả dữ liệu gọi thêm sản phẩm từ Prisma DB vì giá là cuộc gọi số nên pass in và pass in price vì chúng ta đang sử dụng hành động máy chủ trong thành phần máy chủ, có thể giao tiếp trực tiếp với cơ sở dữ liệu, mã này không bao giờ đến trình duyệt của khách hàng, giống như có một điểm cuối API được xây dựng Ngay trong thành phần của bạn, cuối cùng chúng ta có thể thêm một chuyển hướng để đưa người dùng trở lại danh sách sản phẩm sau khi họ đã tạo mục mới nên chờ thêm sản phẩm rồi gọi redirect từ điều hướng SL tiếp theo và điều hướng đến cơ sở dữ liệu gạch nối sản phẩm mà là trang danh sách, hãy chắc chắn thêm dấu gạch chéo ở đầu nên cơ sở dữ liệu sản phẩm. Hãy thử điều này trên trình duyệt.

với công cụ phát triển mở bảng Network điều hướng đến lộ trình mới sản phẩm SL hyph dấu gạch nối DB tạo vào biểu mẫu và gửi bạn sẽ nhận thấy một yêu cầu mạng đến máy chủ khi hành động máy chủ đang chạy và trên trang danh sách sản phẩm bạn sẽ thấy Sản phẩm thử nghiệm sản phẩm hai mới được đưa vào, mô tả sản phẩm hai thử nghiệm, giá $40, giờ tôi đã chỉ ra rồi Lợi ích của hành động máy chủ nhưng tôi xin nhắc lại bây giờ khi chúng ta đã thấy cách xử lý biểu mẫu truyền thống gửi bài cũng như các hành động máy chủ mới, trước tiên chúng đơn giản hóa mã của bạn một cách đáng kể vì không cần thiết đối với các tuyến Epi riêng biệt hoặc quản lý trạng thái phía khách hàng cho dữ liệu biểu mẫu, chúng tăng cường bảo mật bằng cách giữ cho dữ liệu nhạy cảm

phía máy chủ vận hành, tránh xa các mối đe dọa tiềm ẩn thứ ba, họ cải thiện hiệu suất vì có ít hơn JavaScript chạy trên client dẫn đến thời gian tải nhanh hơn và các chỉ số core web tốt hơn, nhưng điểm nhấn tuyệt vời nhất là một số hành động hỗ trợ tăng cường tiến bộ nghĩa là biểu mẫu của bạn vẫn hoạt động ngay cả khi JavaScript bị tắt trong trình duyệt giúp ứng dụng của bạn dễ tiếp cận và bền vững hơn, trình duyệt điều hướng đến sản phẩm, cơ sở dữ liệu tạo và trong Công cụ phát triển trong bảng nguồn, nhấn lệnh shift p và tắt JavaScript, bây giờ điền thông tin sản phẩm và thử gửi biểu mẫu sản phẩm vẫn được tạo đây là cải tiến tiến triển trong hành động nhấn lệnh shift

p một lần nữa và bật JavaScript để tóm tắt các hành động của máy chủ là các hàm không đồng bộ được thực thi trên máy chủ mà chúng cho phép chúng ta thực hiện các biến đổi dữ liệu mà không cần các tuyến API riêng biệt, chúng tôi triển khai chúng theo chỉ thị sử dụng máy chủ và chúng đơn giản hóa mã nguồn của chúng tôi cải thiện bảo mật và hỗ trợ Nâng cấp tiến triển tiếp theo, chúng tôi sẽ tiến xa hơn bằng cách xử lý biểu mẫu Gửi bài đang chờ xử lý Bang chúng tôi sẽ học cách tắt nút gửi Buton để cung cấp phản hồi tốt hơn cho người dùng và Ngăn chặn việc nộp trùng lặp vô tình. Trước đây chúng tôi đã khám phá một số hành động để xử lý việc gửi biểu mẫu. Bây giờ hãy cùng nâng cao người dùng của chúng tôi.

---

**Điều hướng:** ← [Data Mutations](Bai_01_data-mutations.md) · Tiếp theo → [useFormStatus Hook](Bai_03_useformstatus-hook.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
