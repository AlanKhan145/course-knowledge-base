---
lesson_id: "M10-L04"
module: "Xác thực, phân quyền và triển khai"
title: "Profile Settings"
source_version: "Next.js 15 App Router"
video_start: "06:20:18"
video_duration: "3 phút 04 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Profile Settings

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 3 phút 04 giây · **Mốc:** 06:20:18 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22818s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Profile Settings**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Profile Settings** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Profile Settings** — Các thành phần quản lý profile giúp người dùng cập nhật tên/avatar/tùy chọn được hỗ trợ.
**2. Profile Settings** — Phân biệt profile hiển thị với dữ liệu riêng của ứng dụng và quyền cập nhật DB.
**3. Profile Settings** — Đặt UI người dùng chỉ thấy sau khi session tồn tại.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `Kịch bản thiết kế (không phải source code hoàn chỉnh)`

```text
1. Chọn một trang/tính năng đang sử dụng Profile Settings.
2. Viết sơ đồ dữ liệu đầu vào, kết quả UI mong muốn, và phần nào chạy server/client.
3. Tạo một tình huống bình thường, một tình huống lỗi và một tình huống dữ liệu trống.
4. Kiểm tra Network, terminal server, và kết quả giao diện trước/sau điều hướng.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Profile Settings**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Profile Settings** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Profile Settings** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Các thành phần quản lý profile giúp người dùng cập nhật tên/avatar/tùy chọn được hỗ trợ.

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

- **Video nguồn:** [Profile Settings — 06:20:18](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22818s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

thành phần đẹp hơn gọi là nút người dùng: hãy nhập nó, nút đăng xuất bình luận và thêm vào jsx thay thế Nút trên trình duyệt, thử đăng nhập và bạn sẽ thấy nó ở đây khi bạn nhấp vào, nó sẽ mở một menu thả xuống với hai tùy chọn chúng ta có đăng xuất, thực hiện chức năng giống như thành phần nút đăng xuất, nhưng tùy chọn thứ hai là quản lý tài khoản mở giao diện quản lý hồ sơ đầy đủ trong hộp thoại mô hình tại đây bạn có thể cập nhật Ảnh đại diện, cập nhật địa chỉ email, cập nhật mật khẩu, xóa tài khoản và nhiều hơn nữa tùy thuộc vào cấu hình trong bảng điều khiển thư ký nhưng nếu bạn thích có một trang cài đặt hồ sơ riêng biệt chứ không phải một mô hình thì sao?

không vấn đề gì, nhân viên thư ký cung cấp cho chúng ta một thành phần hồ sơ mà chúng ta có thể nhúng vào một route catchall tùy chọn. Tôi sẽ bình luận ở biển hiệu. Nhập nút Out để đảm bảo chúng ta không gặp lỗi ngoằn ngoèo đỏ cho trang hồ sơ riêng biệt trong thư mục ứng dụng tạo một thư mục mới tên User Profile, User Byphen Profile tại đây, thêm một route tùy chọn gọi là user profile so Dấu ngoặc vuông kép dấu chấm chấm dấu gạch nối hồ sơ người dùng trong thư mục này Tạo một trang. Tệp TSX Định nghĩa và Xuất một thành phần react gọi là trang hồ sơ người dùng xuất chức năng mặc định trang hồ sơ người dùng ở trên cùng nhập hồ sơ người dùng component từ Clerk và render nó như một phần của jsx, tức là trả về một thẻ div để thêm phong cách cho trang, sau đó chúng ta

gọi thành phần hồ sơ người dùng của chúng tôi với prop đường dẫn được đặt cho/ hồ sơ người dùng Hy ngay trong thành phần điều hướng, thêm liên kết đến hồ sơ người dùng nên liên kết cần nhập từ liên kết SL tiếp theo, văn bản sẽ là profile HRE sẽ bằng gạch chéo hồ sơ người dùng theo cùng đường dẫn mà chúng ta đã chỉ định ở đây và thay vào nút đăng xuất bình luận và nút người dùng bình luận tương tự với câu lệnh nhập, hãy kiểm tra trình duyệt và bạn sẽ thấy hồ sơ Liên kết trong Navar khi nhấp vào nó sẽ đưa bạn đến trang hồ sơ với pa/ hồ sơ người dùng và nhấn vào Bảo mật sẽ dẫn bạn đến/ user hyen trang bảo mật SL profile khi nhấp vào đăng xuất sẽ đăng xuất và chuyển hướng bạn đến trang chủ như bạn thấy

Clerk giúp việc thêm quản lý hồ sơ vào ứng dụng của bạn trở nên cực kỳ dễ dàng. Tiếp theo, hãy cùng tìm hiểu cách hiển thị có điều kiện các phần khác nhau của giao diện dựa trên trạng thái xác thực của người dùng. Trước đó chúng tôi đã thêm ký hiệu đăng nhập.

---

**Điều hướng:** ← [Sign in and Sign out](Bai_03_sign-in-and-sign-out.md) · Tiếp theo → [Conditional UI Rendering](Bai_05_conditional-ui-rendering.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
