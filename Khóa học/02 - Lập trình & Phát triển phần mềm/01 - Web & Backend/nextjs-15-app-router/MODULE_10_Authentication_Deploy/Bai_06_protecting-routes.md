---
lesson_id: "M10-L06"
module: "Xác thực, phân quyền và triển khai"
title: "Protecting Routes"
source_version: "Next.js 15 App Router"
video_start: "06:24:52"
video_duration: "3 phút 53 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Protecting Routes

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 3 phút 53 giây · **Mốc:** 06:24:52 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=23092s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Protecting Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Protecting Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Protecting Routes** — Dùng chính sách bảo vệ các route nhạy cảm và kiểm tra auth trên server.
**2. Protecting Routes** — Chỉ dựa vào middleware hay ẩn menu là không đủ với API/Server Actions.
**3. Protecting Routes** — Phân biệt redirect người chưa đăng nhập (401/redirect) với người không có quyền (403).

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/dashboard/page.tsx (server)`

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return <h1>Dashboard riêng tư</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Protecting Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Protecting Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Protecting Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Dùng chính sách bảo vệ các route nhạy cảm và kiểm tra auth trên server.

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

- **Video nguồn:** [Protecting Routes — 06:24:52](https://www.youtube.com/watch?v=k7o9R6eaSes&t=23092s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

cách hiển thị có điều kiện các thành phần giao diện người dùng Hãy cùng tiến thêm một bước và học cách bảo vệ toàn bộ trang khỏi người dùng chưa xác thực Nếu bạn đăng xuất, hãy thử điều hướng đến hồ sơ người dùng Localhost 3000 SL, bạn sẽ gặp phải một lỗi thời gian chạy thư ký Hồ sơ người dùng không thể hiển thị trừ khi người dùng đã đăng nhập. Điều chúng ta cần làm là bảo vệ tuyến đường này để chỉ người dùng đã xác thực mới có thể truy cập, cách bảo vệ tuyến đường mạnh mẽ nhất trong X là thông qua phần mềm trung gian của Clerk như một phần của quá trình cài đặt, bạn đã tạo một tệp dots middleware trong thư mục nguồn, đây là nơi bạn có thể cấu hình Phần mềm trung gian của thư ký Bắt đầu bằng cách nhập một hàm gọi là tạo bộ khớp tuyến từ thư ký, tiếp theo tạo một bộ khớp cho

các tuyến bạn muốn bảo vệ sẽ gọi hàm và truyền một mảng các tuyến cần được bảo vệ, trong trường hợp này chúng ta muốn bảo vệ hồ sơ người dùng SL cho phép lưu giá trị trả về trong một hằng số gọi là is protected route cuối cùng truyền một hàm đến phần mềm trung gian thư ký, hàm nhận đối tượng Au và đối tượng yêu cầu dưới dạng các đối số trong phần thân hàm, chúng ta kiểm tra xem yêu cầu có khớp với bất kỳ tuyến đường nào được bảo vệ nếu là tuyến được bảo vệ hay không truyền yêu cầu và nếu có, chúng tôi gọi phương thức protect trên đối tượng O. Protect chúng tôi sẽ cần chờ đợi điều này và thêm từ khóa Asing, đảm bảo bạn đặt đúng dấu ngoặc đơn vì phương thức protect sẽ chuyển hướng người dùng đến

trang đăng nhập tự động nếu họ chưa đăng nhập trong trình duyệt nếu chúng tôi cố gắng điều hướng đến/ hồ sơ người dùng một lần nữa trong khi Khi đăng xuất, chúng tôi sẽ được chuyển hướng đến trang đăng nhập do nhân viên lưu trữ. Đăng nhập bằng thông tin đăng nhập của bạn và bạn sẽ được chuyển hướng lại. quay lại hồ sơ người dùng. Chúng tôi đã bảo vệ thành công tuyến hồ sơ người dùng. Bây giờ trong phần mềm trung gian. Bạn cũng có thể đảo ngược logic bảo vệ thay vì e protected route tạo e public route của chúng tôi là root route Tuyến đăng nhập và tuyến đăng ký trong phần mềm trung gian của thư ký, nếu không thì tuyến công cộng đi qua trong yêu cầu đang chờ hoặc. bảo vệ như vậy phần mềm trung gian bây giờ sẽ bảo vệ tất cả các tuyến đường theo mặc định và bạn chỉ định những tuyến nào nên là công khai, điều này rất hữu ích

khi phần lớn ứng dụng của bạn yêu cầu xác thực trên trình duyệt, nếu chúng tôi cố gắng điều hướng đến hồ sơ người dùng trong khi Đăng xuất, chúng tôi vẫn sẽ được chuyển hướng đến trang đăng nhập do nhân viên lưu trữ Đăng nhập và bạn có thể truy cập người dùng SL Profile Now nếu bạn muốn kiểm soát nhiều hơn đối với ứng dụng của mình dựa trên trạng thái xác thực người dùng, bạn có thể sử dụng đối số Au trong phần mềm trung gian chờ Au để lấy ID người dùng và chức năng chuyển hướng đến đăng nhập nếu người dùng không có đăng nhập nên nếu không phải ID người dùng và tuyến không phải là công khai nên không phải là yêu cầu tuyến công cộng bạn có thể chuyển hướng đến trang đăng nhập, trả lại, chuyển hướng đến đăng nhập, đảm bảo giải cấu trúc ID người dùng, cùng logic như trước, nhưng bây giờ bạn có thể thêm

logic tùy chỉnh để chạy trước khi chuyển hướng điều này có thể bao gồm ghi lại các lần truy cập trái phép để giám sát bảo mật định tuyến người dùng đến các trang đăng nhập theo vùng hoặc xử lý cửa sổ bảo trì cho các tuyến đường cụ thể, bất cứ điều gì liên quan đến ứng dụng của bạn, bảo vệ các tuyến đường là phần quan trọng trong việc xây dựng các ứng dụng web an toàn và cá nhân hóa Phần mềm trung gian CLTS nào Quá trình này đơn giản và linh hoạt khi xây dựng ứng dụng web, chúng ta thường cần truy cập người dùng và phiên làm việc

---

**Điều hướng:** ← [Conditional UI Rendering](Bai_05_conditional-ui-rendering.md) · Tiếp theo → [Read Session and User Data](Bai_07_read-session-and-user-data.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
