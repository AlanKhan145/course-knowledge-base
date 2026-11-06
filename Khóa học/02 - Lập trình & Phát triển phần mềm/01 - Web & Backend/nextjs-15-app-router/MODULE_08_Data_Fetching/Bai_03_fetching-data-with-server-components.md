---
lesson_id: "M08-L03"
module: "Data fetching và database"
title: "Fetching Data with Server Components"
source_version: "Next.js 15 App Router"
video_start: "04:57:02"
video_duration: "4 phút 14 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Fetching Data with Server Components

> **Module 08 — Data fetching và database** · **Thời lượng video:** 4 phút 14 giây · **Mốc:** 04:57:02 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=17822s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Fetching Data with Server Components**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **data fetching và database**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Fetching Data with Server Components** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Fetching Data with Server Components** — async Server Component có thể await fetch trực tiếp; thường giảm lớp API trung gian khi server đã có quyền dữ liệu.
**2. Fetching Data with Server Components** — Kiểm soát caching bằng cache option phù hợp v15; tránh bí mật trong JSX/props.
**3. Fetching Data with Server Components** — Đưa việc fetch gần nơi dùng data để dễ streaming và chia nhỏ boundary.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/posts/page.tsx`

```tsx
type Post = { id: number; title: string };
export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", { cache: "no-store" });
  if (!response.ok) throw new Error("Fetch failed");
  const posts: Post[] = await response.json();
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Fetching Data with Server Components**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Fetching Data with Server Components** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Fetching Data with Server Components** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** async Server Component có thể await fetch trực tiếp; thường giảm lớp API trung gian khi server đã có quyền dữ liệu.

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

- **Video nguồn:** [Fetching Data with Server Components — 04:57:02](https://www.youtube.com/watch?v=k7o9R6eaSes&t=17822s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching](https://nextjs.org/docs/15/app/building-your-application/data-fetching).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Dữ liệu trong các thành phần khách hàng Bây giờ hãy cùng học cách lấy dữ liệu trong các thành phần máy chủ – một trong những điều thú vị nhất về kiến trúc RSC là nó hỗ trợ esync và các từ khóa trong các thành phần máy chủ, điều này có nghĩa là chúng ta có thể viết lấy mã dữ liệu giống như JavaScript thông thường sử dụng hàm Asing kết hợp với từ khóa await để tôi cho bạn xem cách điều này hoạt động với một ví dụ, chúng ta sẽ một lần nữa sử dụng slash users in point từ mẫu giữ chỗ Json cho mô phỏng API của chúng ta chúng tôi sẽ lấy dữ liệu người dùng này và hiển thị tên, tên người dùng, email và số điện thoại của từng người dùng trên máy chủ NEX SHS của chúng tôi component Compon: Hãy cùng vào VS Code và bắt đầu ngay trong thư mục ứng dụng của bạn, tạo một thư mục mới có tên Users Gạch nối

máy chủ và thêm một trang. TSX bên trong tôi chọn máy chủ tên người dùng vì chúng tôi xử lý dữ liệu người dùng trong một thành phần máy chủ nhưng bạn có thể đặt tên theo ý muốn. Trước tiên, hãy định nghĩa typescript type cho người dùng. Giữ cho đơn giản và chỉ bao gồm các trường chúng tôi quan tâm đến ID, tên, tên người dùng, email và điện thoại, tương tự như dữ liệu đang lấy các thành phần client nên tôi sẽ Copy Type user và dán vào trang mới. Tệp TSX cho thành phần của chúng tôi chúng ta sẽ gọi nó là máy chủ người dùng, vì vậy xuất hàm mặc định, máy chủ người dùng, làm cho thành phần này không đồng bộ vì các thành phần máy chủ hỗ trợ Các thao tác không đồng bộ, đây là lúc việc lấy dữ liệu người dùng trở nên rất đơn giản, chúng ta chỉ cần gửi yêu cầu get đến

điểm cuối của người dùng sử dụng API fetch để phản hồi const bằng với await Fetch và URL là Jon pleas holder. kiểu chữ code.com người dùng trong dòng tiếp theo const là người dùng kiểu user array bằng với await response. Json và hãy cùng ghi lại trên console người dùng giá trị khi bạn lưu điều này và kiểm tra ra/ máy chủ người dùng trong trình duyệt, máy chủ người dùng có dấu gạch nối, hãy xem xét Bảng điều khiển bạn sẽ thấy danh sách người dùng gồm 10 người dùng, việc lấy dữ liệu của chúng ta đang hoạt động, việc còn lại là hiển thị người dùng trên màn hình chỉ cần sao chép câu trả về từ thành phần khách hàng mà chúng tôi đã tạo trước đó và dán nó vào thành phần máy chủ xóa câu lệnh khóa console mà chúng ta ánh xạ lên danh sách người dùng, nơi mỗi người dùng được định nghĩa bởi người dùng

Chúng tôi hiển thị tên người dùng, tên người dùng, email và số điện thoại. Các lớp chủ yếu dùng để tạo phong cách, nên đừng quá lo lắng. quá nhiều về việc đạt được bố cục và giao diện chính xác này, hãy lưu tệp và bạn sẽ thấy tất cả 10 người dùng được hiển thị tuyến đường là/ người dùng gạch nối máy chủ, chúng tôi đã lấy dữ liệu thành công trong các thành phần máy chủ. Đây là một điều thực sự Hay đấy, bạn nên biết khi xây dựng các ứng dụng Nexs, bạn thường sẽ lấy cùng một dữ liệu trong nhiều những nơi như cách yêu cầu B xuất hiện trên sáu thành phần khác nhau trong cây của chúng ta để tải một tuyến đường duy nhất, bạn có thể nghĩ như vậy sẽ kích hoạt nhiều yêu cầu mạng cho cùng một dữ liệu nhưng react xử lý thông minh thông qua một tính năng gọi là

ghi nhớ yêu cầu react Liệu D sẽ trùng lặp các yêu cầu lấy dữ liệu với cùng URL và tùy chọn, điều này có nghĩa là bạn có thể lấy dữ liệu bất cứ nơi nào bạn cần trong cây thành phần mà không lo lắng về các yêu cầu mạng trùng lặp, react chỉ thực hiện thực tế lấy một lần và tái sử dụng kết quả cho các cuộc gọi tiếp theo trong cùng một lượt render, đây là một tính năng của react và do đó được bao gồm trong XS cho phép bạn viết dữ liệu lấy mã chính xác ở nơi bạn cần thay vì phải Tập trung lấy dữ liệu và truyền dữ liệu qua props, hãy chú ý việc lấy dữ liệu đơn giản thế nào với các thành phần máy chủ chỉ dễ dàng chờ đợi với API fetch không sử dụng trạng thái không sử dụng không có sự phức tạp của quản lý trạng thái mà chúng ta thường gặp

Nói về trạng thái, bạn có thể thắc mắc cách xử lý trạng thái tải và lỗi trong các thành phần máy chủ Đó chính xác là điều chúng ta sẽ khám phá tiếp theo, trước đó chúng ta đã khám phá việc lấy và hiển thị dữ liệu với các thành phần máy chủ

---

**Điều hướng:** ← [Fetching Data in Client Components](Bai_02_fetching-data-in-client-components.md) · Tiếp theo → [Loading and Error States](Bai_04_loading-and-error-states.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
