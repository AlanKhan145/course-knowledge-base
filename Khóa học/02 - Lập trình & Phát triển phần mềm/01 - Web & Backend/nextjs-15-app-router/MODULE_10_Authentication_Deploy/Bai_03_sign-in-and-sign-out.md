---
lesson_id: "M10-L03"
module: "Xác thực, phân quyền và triển khai"
title: "Sign in and Sign out"
source_version: "Next.js 15 App Router"
video_start: "06:17:19"
video_duration: "2 phút 59 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Sign in and Sign out

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 2 phút 59 giây · **Mốc:** 06:17:19 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22639s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Sign in and Sign out**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Sign in and Sign out** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Sign in and Sign out** — Dùng các component Clerk như SignInButton, SignUpButton, UserButton theo vị trí giao diện.
**2. Sign in and Sign out** — Hỗ trợ redirect sau đăng nhập và logout theo chính sách sản phẩm.
**3. Sign in and Sign out** — Tránh lộ nội dung riêng tư trong SSR/cache công khai.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/_components/auth-nav.tsx`

```tsx
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export function AuthNav() {
  return <nav><SignedOut><SignInButton /></SignedOut>
    <SignedIn><UserButton /></SignedIn></nav>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Sign in and Sign out**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Sign in and Sign out** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Sign in and Sign out** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Dùng các component Clerk như SignInButton, SignUpButton, UserButton theo vị trí giao diện.

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

- **Video nguồn:** [Sign in and Sign out — 06:17:19](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22639s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Chức năng cho ứng dụng của chúng tôi Điều tuyệt vời của Clerk là nó cung cấp các thành phần được xây dựng sẵn mà xử lý tất cả các luồng xác thực cho chúng tôi. Hãy bắt đầu với chức năng đăng nhập. Bắt đầu bằng cách tạo một thư mục trong nguồn Thư mục có tên Components bên trong thư mục này sẽ tạo một tệp gọi là Navigation. TSX ở đây Định nghĩa và Xuất một thành phần react gọi là navigation. Tôi muốn một thanh điều hướng trông ổn với logo và nút đăng nhập nên để tiết kiệm thời gian tôi sẽ dán mã component mà bạn có thể tìm thấy trên GitHub repo export của tôi const navigation chúng ta có phần tử HTML điều hướng, nhiều lớp TAOR CSS và mỗi lớp đều gắn thẻ tiếp theo ứng dụng của sh, đó là

Lẽ ra phải là logo của chúng tôi và là chỗ giữ chỗ cho nút đăng nhập, bao gồm thành phần này trong bố cục. Tệp TSX để nó được hiển thị trên mọi trang ngay trước khi trẻ con kích hoạt điều hướng và đảm bảo nhập nó từ AT/Components, điều hướng SL, kiểm tra trình duyệt và bạn sẽ thấy thanh điều hướng với logo giống như SHS Bây giờ hãy thêm nút đăng nhập trong điều hướng. TSX nhập thành phần nút đăng nhập từ thư ký nhập nút đăng nhập từ tại clerk / nextar kết xuất thành phần trong thẻ div nơi bạn thấy nút đăng nhập thành phần giữ chỗ trên thẻ này Thiết lập thành phần Chế độ prop bằng modal Điều này có nghĩa là nhấn nút sẽ mở một hộp thoại mô hình đẹp thay vào đó

hoặc chuyển hướng đến một trang riêng biệt, hãy kiểm tra trình duyệt và bạn sẽ thấy nút đăng nhập trên thanh điều hướng, hãy tiến hành và nhấp vào đó, bạn sẽ thấy mô hình đăng nhập đẹp mắt của Clerk với tất cả các tùy chọn xác thực mà chúng tôi đã cấu hình trước đó vì chúng tôi Chưa có tài khoản, tôi sẽ nhấn nút đăng ký ở cuối mô hình mà nó giới thiệu cho chúng tôi với giao diện để tạo tài khoản, hãy tạo tài khoản bằng email và mật khẩu, nhấn tiếp tục và nhập mã xác minh một lần Đã xác nhận Chúng tôi sẽ được chuyển hướng trở lại trang chủ Chúng tôi đã đăng nhập Chúng tôi đã đăng nhập Chúng ta hãy tiếp tục thêm đăng xuất chức năng đăng xuất thư ký cung cấp một thành phần gọi là nút đăng xuất, hãy nhập và thêm đúng

Bên cạnh nút đăng nhập của chúng tôi, hãy kiểm tra trình duyệt và bạn sẽ thấy nút đăng xuất bằng tiếng Navar của bạn, hãy nhấp vào nó, bạn sẽ được đăng nhập Thoát khỏi ứng dụng, automat tự động xử lý mọi việc, xóa phiên làm việc, xóa token và cập nhật giao diện người dùng nếu cần nhưng hiện tại không có thay đổi giao diện nào cho biết chúng ta đã đăng nhập hay đăng xuất, hãy thử tiếp theo chúng ta có các thành phần nút đăng nhập và nút đăng xuất để đăng nhập và đăng xuất, nhưng để đăng xuất, CLER cung cấp một

---

**Điều hướng:** ← [Clerk Setup](Bai_02_clerk-setup.md) · Tiếp theo → [Profile Settings](Bai_04_profile-settings.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
