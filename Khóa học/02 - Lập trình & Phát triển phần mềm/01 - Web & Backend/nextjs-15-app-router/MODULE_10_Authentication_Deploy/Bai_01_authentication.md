---
lesson_id: "M10-L01"
module: "Xác thực, phân quyền và triển khai"
title: "Authentication"
source_version: "Next.js 15 App Router"
video_start: "06:12:06"
video_duration: "2 phút 20 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 01. Authentication

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 2 phút 20 giây · **Mốc:** 06:12:06 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22326s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Authentication**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Authentication** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Authentication** — Xác thực xác định người dùng là ai; phân quyền xác định họ được làm gì.
**2. Authentication** — Clerk giảm khối lượng tự xây flow đăng ký, đăng nhập, hồ sơ và session.
**3. Authentication** — Hệ thống phải kiểm tra quyền trên server trong mọi resource access/mutation.

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
1. Chọn một trang/tính năng đang sử dụng Authentication.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Authentication**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Authentication** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Authentication** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Xác thực xác định người dùng là ai; phân quyền xác định họ được làm gì.

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

- **Video nguồn:** [Authentication — 06:12:06](https://www.youtube.com/watch?v=k7o9R6eaSes&t=22326s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Tất nhiên, hãy cùng bàn về một khía cạnh quan trọng khác của ứng dụng web là xác thực nếu bạn nghĩ về nó Hầu hết các ứng dụng xoay quanh người dùng. Khi xây dựng cho người dùng, chúng ta cần xem xét ba khái niệm cơ bản: danh tính. Phiên và Truy cập Danh tính là về việc xác minh ai đó thông qua các phiên xác thực để theo dõi một trạng thái đăng nhập của người dùng trên các yêu cầu và kiểm soát truy cập họ có thể làm gì, các điều khoản dành cho nhà phát triển mà chúng tôi gọi là Quản lý và ủy quyền phiên xác thực Now NEX xử lý điều này hơi khác so với React truyền thống Ứng dụng với ứng dụng React một trang, bạn chỉ xử lý mã phía client, nhưng tiếp theo bạn phải bảo vệ

ứng dụng của bạn từ ba góc độ khác nhau: mã phía client, mã phía máy chủ và các tuyến API khi triển khai xác thực bạn thường muốn cho phép người dùng đăng ký, cung cấp cho họ cách đăng nhập, giúp họ quản lý tài khoản hiển thị hoặc ẩn các thành phần giao diện người dùng dựa trên việc chúng có đăng nhập hay không, bảo vệ một số tuyến đường nhất định tùy thuộc vào Trạng thái xác thực, phiên truy cập và dữ liệu người dùng: khi cần thiết, thiết lập kiểm soát truy cập dựa trên RO và cuối cùng cung cấp cách thức Để đăng xuất, đây là điều mà việc xây dựng tất cả từ đầu sẽ mất rất nhiều thời gian, đó là lý do ngay cả Nexts cũng vậy. khuyến nghị sử dụng thư viện xác thực mà các chú chó nêu rõ trong khi bạn có thể triển khai một quy trình tùy chỉnh cho

tăng cường bảo mật và đơn giản, chúng tôi sử dụng thư viện xác thực, điều này dẫn chúng ta đến thư ký, thư ký có thực sự như vậy không? Dịch vụ xác thực và quản lý người dùng tuyệt vời hoạt động tuyệt vời với Next chia sẻ phần hay nhất là miễn phí đến 10.000 người dùng hoạt động hàng tháng, điều này hoàn hảo cho khóa học của chúng tôi và hầu hết các dự án bạn sẽ xây dựng, tôi thực sự đã từng dùng clerk trong một vài dự án trang web của tôi và tôi có thể nói đây là giải pháp xác thực đơn giản nhất mà tôi tìm thấy cho lần tới Nhiều năm trôi qua và bạn sẽ hiểu tại sao để bắt đầu với phần xác thực này, tôi đã thiết lập một Dự án Fresh Next Year trong VS Code sử dụng lệnh NPX Create Next App at Latest Authentication Demo Dấu gạch nối Go

Tiến lên và chạy lệnh này, bạn sẽ có một dự án tương tự như tôi đang làm ở đây, giờ chúng ta có thể bắt đầu hành trình của mình để xây dựng một ứng dụng NEX an toàn, hãy bắt đầu bằng cách thiết lập một tài khoản thư ký, tôi khuyên bạn nên làm theo

---

**Điều hướng:** ← [Form Component](../MODULE_09_Server_Actions/Bai_10_form-component.md) · Tiếp theo → [Clerk Setup](Bai_02_clerk-setup.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
