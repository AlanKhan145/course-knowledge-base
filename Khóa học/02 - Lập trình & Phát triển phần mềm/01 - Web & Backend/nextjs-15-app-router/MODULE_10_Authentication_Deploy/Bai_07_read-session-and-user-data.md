---
lesson_id: "M10-L07"
module: "Xác thực, phân quyền và triển khai"
title: "Read Session and User Data"
source_version: "Next.js 15 App Router"
video_start: "06:28:45"
video_duration: "4 phút 58 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Read Session and User Data

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 4 phút 58 giây · **Mốc:** 06:28:45 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=23325s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Read Session and User Data**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Read Session and User Data** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Read Session and User Data** — Đọc session/userId bằng API server SDK của Clerk để truy vấn dữ liệu theo user.
**2. Read Session and User Data** — Không lấy userId từ request body khi cần xác thực người sở hữu; dùng session tin cậy.
**3. Read Session and User Data** — Chỉ đưa thông tin profile cần thiết sang client.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/account/page.tsx`

```tsx
import { auth, currentUser } from "@clerk/nextjs/server";
export default async function Account() {
  const { userId } = await auth();
  if (!userId) return <p>Chưa đăng nhập</p>;
  const user = await currentUser();
  return <p>Xin chào {user?.firstName ?? "bạn"}</p>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Read Session and User Data**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Read Session and User Data** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Read Session and User Data** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Đọc session/userId bằng API server SDK của Clerk để truy vấn dữ liệu theo user.

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

- **Video nguồn:** [Read Session and User Data — 06:28:45](https://www.youtube.com/watch?v=k7o9R6eaSes&t=23325s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

dữ liệu để cá nhân hóa trải nghiệm và theo dõi hành động của người dùng với tài khoản của họ để đọc dữ liệu người dùng và phiên làm việc flirt cung cấp hai trợ giúp Au và người dùng hiện tại, hãy hiểu cách sử dụng chúng. Ví dụ cho ví dụ này, chúng ta sẽ tạo một người dùng mới Route gọi là dashboard trong thư mục amp tạo thư mục dashboard và thêm một trang. Xuất tệp TSX một bảng điều khiển hàm mặc định trang trả về một tiêu đề trong trang nhập và gọi O cùng các trợ giúp người dùng hiện tại và kiểm tra trả về đối tượng trong một bảng điều khiển, vì vậy trước tiên hãy nhập các phương thức Au và người dùng hiện tại cho máy chủ SLS của clerk slns rồi gọi chúng trong thành phần trang bảng điều khiển để Au và người dùng hiện tại và chờ các đối tượng trả về, trợ giúp O sẽ trả về O

đối tượng của người dùng đang hoạt động nên const o đối tượng bằng await o trợ giúp người dùng hiện tại sẽ trả về đối tượng người dùng backend của người dùng đang hoạt động nên đối tượng const user bằng để chờ nhật ký người dùng hiện tại các đối tượng đến đối tượng bảng điều khiển, đối tượng người dùng trong trình duyệt, sau khi chúng ta đã đăng nhập, nếu chúng ta điều hướng đến/bảng điều khiển chúng ta sẽ thấy các đối tượng Au và người dùng đã được ghi lại trong bảng điều khiển, nếu bạn kiểm tra đối tượng O, bạn sẽ thấy ID người dùng ID phiên các tuyên bố phiên chuyển hướng đến đăng nhập và tương tự đối tượng người dùng chứa địa chỉ email, tên, ID người dùng, hình ảnh, URL cuối cùng name Etc trong các thành phần máy chủ và trình xử lý tuyến đường bạn thường sử dụng ID người dùng từ đối tượng Au và truy vấn

cơ sở dữ liệu của hai trợ giúp Au và người dùng hiện tại này hữu ích trong các thành phần máy chủ và trình xử lý tuyến đường nhưng không làm việc trong các thành phần khách hàng trong một thành phần khách bạn có thể đọc cùng dữ liệu bằng cách sử dụng Au và sử dụng các móc người dùng. Let me me. Hướng dẫn bạn cách tạo một tệp mới tên là Counter trong thư mục Components. TSX Định nghĩa và Xuất một bộ đếm const thành phần bộ đếm đơn giản xuất ra chúng ta gọi trạng thái US với giá trị bằng 0 chúng ta hiển thị giá trị đếm và khi nhấp chuột, chúng ta gọi là set count, tăng giá trị đếm lên một lần, một bộ đếm rất đơn giản component và sử dụng chỉ thị client ở trên cùng để biến nó thành component client một counter client rất đơn giản

Thành phần: Hãy nhập và gọi thành phần này trên trang gốc. TSX bên dưới thành phần hình ảnh để đếm đảm bảo nhập từ bộ đếm SLC at/components rồi quay lại bộ đếm nhập thành phần sử dụng Au và sử dụng user hooks từ clerk từ at clerk SL nexts trong thành phần gọi use o và phân cấu trúc đối tượng Returned thành truy cập thuộc tính đã được tải, ID người dùng, ID phiên và lấy token, cũng gọi sử dụng người dùng và giải cấu trúc Đối tượng Returned để access thuộc tính đã được tải và đăng nhập và người dùng, chúng có các thuộc tính xung đột, vậy hãy sử dụng chúng từng cái một, từ sử dụng o, bạn có thể sử dụng thuộc tính East loaded và user ID để trả về null trong trường hợp người dùng đăng xuất

trong khi thành phần được gắn kết nên nếu không tải e hoặc không trả về ID người dùng null, hãy lưu tệp trở lại trình duyệt và nhấp vào đăng xuất và bạn có thể thấy thành phần bị loại bỏ khỏi giao diện người dùng, tương tự như khi sử dụng người dùng, bạn có thể sử dụng E đã tải và được đăng nhập vào thuộc tính để trả về null trong trường hợp người dùng đăng xuất khi thành phần đang được gắn kết một trong hai các điều kiện này hoạt động trong trình duyệt, đăng nhập lại và chúng ta có thể thấy thành phần đếm đăng xuất và ứng dụng của chúng ta tiếp tục để hoạt động như mong đợi, thành phần đã bị loại bỏ, bạn có thể dựa vào sử dụng o nếu bạn chỉ cần ID người dùng để cá nhân hóa trải nghiệm hoặc liên kết dữ liệu với người dùng, chỉ sử dụng người dùng nếu bạn cần toàn bộ đối tượng người dùng nói

Về người dùng, tiếp theo, chúng ta sẽ học cách làm việc với vai trò và quyền hạn, sau khi đã đề cập đến xác thực và quản lý phiên.

---

**Điều hướng:** ← [Protecting Routes](Bai_06_protecting-routes.md) · Tiếp theo → [Role Based Access Control](Bai_08_role-based-access-control.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
