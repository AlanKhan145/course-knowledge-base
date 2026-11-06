---
lesson_id: "M10-L02"
module: "Xác thực, phân quyền và triển khai"
title: "Clerk Setup"
source_version: "Next.js 15 App Router"
video_start: "06:14:26"
video_duration: "2 phút 53 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Clerk Setup

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 2 phút 53 giây · **Mốc:** 06:14:26 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22466s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Clerk Setup**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Clerk Setup** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Clerk Setup** — Tạo ứng dụng Clerk, cung cấp publishable key và secret key qua .env.local cho môi trường phát triển.
**2. Clerk Setup** — Cài @clerk/nextjs và cấu hình provider, middleware cho Next.js 15 theo docs tương ứng.
**3. Clerk Setup** — Không commit secret; kiểm tra version Clerk SDK vì hướng dẫn init có thể thay đổi.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `cài đặt Clerk (bản Next.js 15)`

```text
npm install @clerk/nextjs
# Khuyến nghị kiểm tra tài liệu Clerk tương ứng phiên bản SDK.
# Lưu publishable key / secret key trong .env.local, KHÔNG commit vào Git.
# Khi dùng Clerk CLI bản mới: npx -y clerk@latest init

```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Clerk Setup**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Clerk Setup** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Clerk Setup** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Tạo ứng dụng Clerk, cung cấp publishable key và secret key qua .env.local cho môi trường phát triển.

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

- **Video nguồn:** [Clerk Setup — 06:14:26](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22466s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

cùng với tôi để nhanh chóng thiết lập tài khoản song song, hãy truy cập trang chủ của Clerk, liên kết nằm trong phần mô tả và nhấp vào Bắt đầu tạo tài khoản bằng phương pháp bạn ưa thích Tôi sẽ nhập email và mật khẩu nhấp vào tiếp tục nhập mã xác minh sau khi đăng nhập tạo ứng dụng mới trong clerk nhập tên ứng dụng của ứng dụng dưới dạng sh tiếp theo, chọn các tùy chọn đăng nhập mà bạn muốn hỗ trợ và bạn có thể xem một bản xem trước giao diện người dùng ở bên phải, chúng ta sẽ có email mật khẩu và xác thực Google, tôi cũng sẽ thêm vào GitHub, bạn có thể thấy điều này được cập nhật trong phần xem trước, để tiếp tục, nhấp vào nút tạo ứng dụng, điều này dẫn chúng ta đến phần thiết lập

trang hướng dẫn chọn chia sẻ tiếp theo làm khung nếu chưa được chọn, bây giờ hãy làm theo các bước sau cùng nhau để thêm thư ký vào dự án bước một cài đặt gói thư ký sao chép lệnh từ hướng dẫn cài đặt Page và chạy nó trong terminal npm cài đặt tại clerk nextjs, bước hai thiết lập biến môi trường trong dự án của bạn, tạo một môi trường. tệp loc trong gốc dự án của bạn và thêm khóa API thư ký sao chép khóa có thể xuất bản và khóa bí mật từ Trang hướng dẫn cài đặt và thêm chúng vào môi trường. tệp looc: hãy chắc chắn sử dụng khóa của chính bạn chứ không bước ba của tôi tạo một tệp middleware dots trong thư mục nguồn mã invs trong thư mục nguồn tạo middleware

tệp dots sao chép mã từ trang hướng dẫn cài đặt và dán vào đây, điều này sẽ giúp chúng tôi truy cập dữ liệu Au và cấu hình các route bảo vệ sau này và tôi vừa nhận ra điều này không nên nằm trong ứng dụng mà nên nằm trong thư mục nguồn bước bốn để bao bọc toàn bộ ứng dụng với thành phần nhà cung cấp thư ký, là một thành phần react cung cấp ngữ cảnh của thư ký cho bạn Ứng dụng Chúng ta sẽ làm điều này hơi khác so với hướng dẫn cài đặt trong bố cục gốc Bố cục tệp. Thành phần nhà cung cấp thư ký nhập TSX ở phía trên từ tại thư ký SL nextjs và bao bọc jsx với nó Thẻ mở và thẻ đóng của nhà cung cấp thư ký, điều này giờ cho phép chúng ta truy cập vào Hook và các thành phần của thư ký với thiết lập ngay bây giờ

hoàn tất, chúng ta có thể bắt đầu viết mã để thực hiện mục tiêu của mình. Bây giờ chúng ta đã thiết lập Clerk. Thêm đăng nhập và đăng xuất nào.

---

**Điều hướng:** ← [Authentication](Bai_01_authentication.md) · Tiếp theo → [Sign in and Sign out](Bai_03_sign-in-and-sign-out.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
