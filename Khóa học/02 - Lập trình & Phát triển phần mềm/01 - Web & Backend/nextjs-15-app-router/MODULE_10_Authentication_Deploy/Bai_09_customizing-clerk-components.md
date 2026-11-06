---
lesson_id: "M10-L09"
module: "Xác thực, phân quyền và triển khai"
title: "Customizing Clerk Components"
source_version: "Next.js 15 App Router"
video_start: "06:44:49"
video_duration: "6 phút 34 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Customizing Clerk Components

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 6 phút 34 giây · **Mốc:** 06:44:49 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=24289s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Customizing Clerk Components**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Customizing Clerk Components** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Customizing Clerk Components** — Tùy chỉnh appearance/theme/branding của UI auth để đồng bộ với sản phẩm.
**2. Customizing Clerk Components** — Giữ accessibility và lưu ý cập nhật SDK; API appearance có thể đổi.
**3. Customizing Clerk Components** — Không hy sinh trải nghiệm đăng nhập chỉ để theo đuổi phong cách.

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
1. Chọn một trang/tính năng đang sử dụng Customizing Clerk Components.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Customizing Clerk Components**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Customizing Clerk Components** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Customizing Clerk Components** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Tùy chỉnh appearance/theme/branding của UI auth để đồng bộ với sản phẩm.

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

- **Video nguồn:** [Customizing Clerk Components — 06:44:49](https://www.youtube.com/watch?v=k7o9R6eaSes&t=24289s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Các thành phần: Bây giờ chúng ta đã có ví dụ xác thực đầu cuối với thư ký, hãy để tôi hướng dẫn bạn qua tùy chỉnh luồng đăng ký và đăng nhập, hiện tại thanh điều hướng của chúng tôi có nút đăng nhập kích hoạt mô hình khi Nhấp vào mô hình này cho phép người dùng đăng nhập và nếu họ chưa có tài khoản, họ có thể dễ dàng chuyển sang đăng ký bằng cách sử dụng liên kết ở cuối, tuy nhiên nhiều ứng dụng thích có một nút đăng ký riêng để khởi tạo quá trình đăng ký Flow trực tiếp Bạn có thể dễ dàng thực hiện điều này bằng cách nhập thành phần nút đăng ký từ Clerk trong Navigation. TSX nhập nút đăng ký từ Thư ký và thêm nó ngay bên dưới chế độ nút đăng nhập bằng với mô hình trong trình duyệt

bạn sẽ thấy một nút đăng ký xuất hiện trong Navar khi nhấp vào, nó sẽ khởi chạy mô hình đăng ký và người dùng có thể chuyển sang Đăng nhập bằng liên kết ở dưới cùng, nếu cần, rất đơn giản. Tiếp theo, hãy nói về phong cách khi làm việc với nhân viên lễ tân, bạn không bị kẹt với nút mặc định Kiểu dáng, bạn có thể hoàn toàn tùy chỉnh cách đăng nhập và đăng ký nút trông đơn giản như việc lồng một phần tử nút với CSS của riêng bạn bên trong nút đăng nhập và đăng ký các thành phần nút thay đổi từ tự đóng sang mở và đóng thẻ giữa các thẻ bao gồm HTML phần tử nút bút, đây là đăng nhập và đây là đăng ký. Hãy thêm một chút CSS tailin cho cả hai nút. Hãy xem trình duyệt và

bạn sẽ thấy cả hai nút đều đã được tùy chỉnh, giờ bạn không có các Trang riêng để đăng nhập và đăng ký thay vì Những mẫu này cũng rất dễ dàng khi điều hướng. TSX trên nút đăng nhập và nút đăng ký loại bỏ chế độ là tương đương model Pro trong trình duyệt, nhấp vào đăng nhập và thư ký sẽ chuyển hướng bạn đến trang đăng nhập chuyên dụng tương tự, nhấp vào nút đăng ký và bạn sẽ đến trang đăng ký ngay bây giờ, nếu bạn kiểm tra URL, bạn có thể lưu ý chúng tôi không thấy tên miền ứng dụng của mình, đó là vì các trang này được lưu trữ bởi nhân viên thư ký nếu bạn muốn giữ người dùng trên tên miền của bạn, bạn có thể tự tạo đăng nhập và đăng ký Pages trong khi vẫn sử dụng các thành phần của Clerk. Dưới đây là cách

thực hiện trong thư mục ứng dụng của bạn, tạo một thư mục đăng ký với một đường dẫn bắt tất cả tùy chọn để thư mục mới nằm trong ô vuông kép Dấu ngoặc đơn Dot Dot Đăng ký là tên và thêm một trang. Tệp TSX với hàm mặc định xuất thành phần react đơn giản trang đăng ký và chúng tôi trả về một thẻ div hiển thị thành phần đăng ký từ clerk, hãy chắc chắn nhập nó từ tại clerk sln chia sẻ Tôi cũng sẽ thêm một số kiểu dáng cho thẻ div FX Justify, Center item Center và một số padding cũng làm tương tự để đăng nhập bằng cách tạo một thư mục đăng nhập mới với tùy chọn bắt tất cả tuyến, ví dụ như dấu ngoặc vuông đôi chấm chấm chấm Đăng nhập và thêm trang. Tệp TSX sao chép và dán mã thành phần cho trang đăng ký. TSX và thay đổi đăng ký đăng nhập

đăng nhập là một thành phần khác mà Cler cung cấp khi bạn thêm hai trang này để đảm bảo cả hai tuyến đều công khai trong tập tin dots của phần mềm trung gian chúng tôi đã có nó từ khi biết đến phần mềm trung gian. Nếu bạn chưa có, xin hãy chắc chắn Để thêm hai tuyến đường này, cuối cùng hãy cập nhật môi trường của bạn. tệp looc với hai biến môi trường mới thư ký công tiếp theo URL đăng nhập và URL đăng ký công khai tiếp theo, chúng trỏ đến dấu gạch chéo đăng nhập và đăng ký SL, đây là hai tuyến đường mà chúng ta vừa tạo, hãy chắc chắn khởi động lại máy chủ Dev của bạn để bạn có thể chạy Dev và quay lại trình duyệt ngay khi người dùng nhấp vào một trong hai nút để Đăng nhập hoặc đăng ký, chúng sẽ vẫn ở trên tên miền của bạn tại/ đăng ký hoặc đăng nhập. Cuối cùng, hãy nói về các chuyển hướng sau

Xác thực mặc định, thư ký khá thông minh, nó nhớ nguồn gốc người dùng bằng truy vấn URL chuyển hướng tham số thử nghiệm Hãy tạo một trang upout đơn giản trong thư mục ứng dụng Export Default về trả về thẻ H1 về trang và điều hướng đến slab localhost 3000 vì mọi trang đều là trang được bảo vệ theo mặc định chúng ta sẽ được chuyển hướng đến/ đăng nhập, bạn sẽ nhận thấy URL chuyển hướng bằng với slab localhost http. Khi bạn tiếp tục, bạn sẽ bị chuyển hướng để slab xung quanh trong khi Hành vi mặc định này hoạt động tốt trong hầu hết các trường hợp, bạn có thể tùy chỉnh nó bằng môi trường biến bạn có hai lựa chọn cho URL dự phòng: thư ký công khai tiếp theo, đăng ký URL chuyển hướng dự phòng và ký thư ký công khai tiếp theo

trong URL chuyển hướng dự phòng, cách đầu tiên là thiết lập URL chuyển hướng dự phòng sau khi đăng ký, trong trường hợp URL chuyển hướng tham số truy vấn bị thiếu, tham số thứ hai là thiết lập URL chuyển hướng dự phòng sau khi đăng nhập trong trường hợp tham số truy vấn URL chuyển hướng bị thiếu nếu bạn không quan tâm đến tham số truy vấn URL chuyển hướng và muốn ép các chuyển hướng cụ thể bất kể ở đâu người dùng đến từ bạn có thể sử dụng đăng ký thư ký công tiếp theo Force redirect URL và thư ký công tiếp theo Force signin URL chuyển hướng với các chuyển hướng Force này người dùng sẽ luôn truy cập vào/onboarding sau khi đăng ký và/ bảng điều khiển sau Đăng nhập Hiện tại chúng tôi chưa tạo lộ trình onboarding nên hãy chắc chắn tạo nó nếu bạn muốn thử nghiệm nhưng như vậy

Bạn có thể thấy Clerk cung cấp rất nhiều sự linh hoạt trong việc tùy chỉnh quy trình xác thực của bạn, tiếp theo chúng tôi sẽ Hãy xem việc triển khai ứng dụng của chúng tôi cho chủ đề cuối cùng. Trong khóa học này, hãy cùng xem cách triển khai ứng dụng EXs cho bản demo này.

---

**Điều hướng:** ← [Role Based Access Control](Bai_08_role-based-access-control.md) · Tiếp theo → [Deploying Next.js Apps](Bai_10_deploying-next-js-apps.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
