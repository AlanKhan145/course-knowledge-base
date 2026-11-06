---
lesson_id: "M01-L01"
module: "Khởi động với Next.js 15"
title: "Introduction to Next.js"
source_version: "Next.js 15 App Router"
video_start: "00:00:00"
video_duration: "4 phút 09 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 01. Introduction to Next.js

> **Module 01 — Khởi động với Next.js 15** · **Thời lượng video:** 4 phút 09 giây · **Mốc:** 00:00:00 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=0s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/getting-started)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Introduction to Next.js**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **khởi động với next.js 15**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Introduction to Next.js** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Introduction to Next.js** — Next.js là framework trên React, hỗ trợ xây dựng ứng dụng full-stack; React chủ yếu tập trung giao diện.
**2. Khả năng tích hợp quan trọng** — Khả năng tích hợp quan trọng: file-based routing, Route Handlers, server rendering, data fetching và tối ưu tài nguyên.
**3. Introduction to Next.js** — App Router ưu tiên convention over configuration: tên file/thư mục là một phần của API framework.
**4. Introduction to Next.js** — Để học tốt cần HTML, CSS, JavaScript, React component, JSX, props, state và hooks.

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
1. Chọn một trang/tính năng đang sử dụng Introduction to Next.js.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Introduction to Next.js**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Introduction to Next.js** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Introduction to Next.js** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Next.js là framework trên React, hỗ trợ xây dựng ứng dụng full-stack; React chủ yếu tập trung giao diện.

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

- **Video nguồn:** [Introduction to Next.js — 00:00:00](https://www.youtube.com/watch?v=k7o9R6eaSes&t=0s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/getting-started](https://nextjs.org/docs/15/app/getting-started).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Chào mọi người, tôi tên là Vishwas và chào mừng bạn đến với khóa học hướng dẫn toàn diện nhất của năm tới trong suốt phần này chúng tôi sẽ xây dựng từ đầu để khám phá tất cả các khái niệm chính trong Ni shares, chúng tôi sẽ tập trung vào phiên bản 15 và Ở trên, tùy vào thời điểm bạn đang xem trong phần giới thiệu này, tôi sẽ trình bày những gì là lý do tại sao nó đáng để học và những gì Bạn cần biết trước khi bắt đầu, vậy chính xác NEXS là gì là một framework React để xây dựng full stack web Ứng dụng Khi xây dựng ứng dụng chỉ với React, không khả thi để tạo một ứng dụng đầy đủ tính năng Ready for Production React là một thư viện để xây dựng giao diện người dùng chỉ chịu trách nhiệm cho lớp view của một

Ứng dụng, với tư cách là nhà phát triển, bạn cần đưa ra quyết định về các tính năng khác như định tuyến, lấy dữ liệu và nhiều hơn nữa. Tiếp theo. SHS ngược lại, là một framework React sử dụng React để xây dựng giao diện người dùng nhưng cũng cung cấp các tính năng bổ sung cho phép bạn xây dựng các ứng dụng sẵn sàng cho sản xuất Các tính năng này bao gồm tối ưu hóa định tuyến kết xuất, lấy dữ liệu, đóng gói, biên dịch và nhiều hơn nữa, bạn không cần cài đặt thêm các gói làm NEX cung cấp mọi thứ bạn cần, tuy nhiên hãy nhớ rằng NEX là một framework có những quan điểm và quy ước riêng nên Được tuân thủ để triển khai các tính năng này, bạn không cần lo lắng vì các quy ước đã xuất phát từ một đội ngũ

Với nhiều năm kinh nghiệm viết ứng dụng React cho sản xuất, để nhắc lại, NEX là một framework React dành cho Xây dựng các ứng dụng web full stack sẵn sàng sản xuất, giờ khi chúng ta đã hiểu NextJS là gì, hãy cùng xem tại sao nó đáng giá Việc học lý do để học SH tiếp theo xuất phát từ việc nó đơn giản hóa quá trình xây dựng sẵn sàng sản xuất ứng dụng web cho phép tôi liệt kê một số tính năng chính mà Nies cung cấp ngay từ đầu là định tuyến truyền thống các ứng dụng react yêu cầu cài đặt và cấu hình các gói định tuyến bên thứ ba mỗi khi bạn cần tạo một route nexts đơn giản hóa điều này với định tuyến dựa trên tệp, bạn chỉ cần tạo tệp và các tuyến đường sẽ tự động

tạo ra thứ hai là API routes, giúp nexs khác biệt như một full stack framework, bạn có thể xây dựng cả front-end Các thành phần React và EPI backend trong cùng một ứng dụng NEXS, cho phép tích hợp liền mạch giữa fronter của bạn Mã đầu cuối và phía sau thứ ba là sự linh hoạt của kết xuất tiếp theo, hỗ trợ cả kết xuất phía máy chủ và phía máy khách Các phương pháp khi được triển khai đúng cách, điều này sẽ giúp cải thiện hiệu suất và tối ưu hóa công cụ tìm kiếm tốt hơn. Thứ tư là dữ liệu được tối ưu hóa. Fetching XGS cung cấp hỗ trợ cho Esync trong các thành phần React, giúp việc lấy dữ liệu trở nên đơn giản và hiệu quả xgs cũng linh hoạt với các phương pháp thiết kế hỗ trợ các module CSS, điều chỉnh các giải pháp CSS và CSS injs phù hợp với bạn

Ngoài ra, NextJS còn bao gồm các tối ưu hóa Boox cho hình ảnh, phông chữ và script giúp nâng cao Các chỉ số web của ứng dụng và trải nghiệm người dùng tổng thể, cuối cùng Nexts đi kèm với quá trình phát triển tối ưu và hệ thống xây dựng sản xuất: Điều này có nghĩa là bạn có thể tập trung viết mã thay vì xử lý các cấu hình phức tạp Những tính năng này kết hợp lại tạo nên một framework mạnh mẽ cho phát triển web trong suốt khóa học này chúng tôi sẽ khám phá từng tính năng chi tiết cũng xin lưu ý rằng tôi có thể chỉ gọi nexts là next trong khóa học nên xin đừng quá giờ tôi bối rối rồi, còn các yêu cầu tiên quyết về HTML, CSS, model và kiến thức JavaScript là gì vì

NextJS là một framework của React, cũng rất quan trọng để hiểu rõ các nguyên tắc cơ bản của React trong khi bạn chưa có bạn cần là chuyên gia, bạn nên quen thuộc với các khái niệm như thành phần hàm, props, State jsx và hooks nếu Bạn mới làm quen với React. Tôi có một loạt hướng dẫn chi tiết bao gồm React từ trình độ sơ cấp đến nâng cao nên hãy chắc chắn Để kiểm tra điều đó, mục tiêu của tôi là hướng dẫn bạn từ người mới hoàn toàn trở thành chuyên gia vào năm tới, bạn có thể tìm thấy tất cả Mã nguồn cho khóa học này trong kho GitHub Liên kết Trong phần mô tả với phần giới thiệu này, hãy cùng Tiếp tục xây dựng ứng dụng Hello World đầu tiên của chúng ta trong Nex. Hãy cùng nhau tạo ứng dụng Nexs đầu tiên. Trước tiên.

---

**Điều hướng:** Bắt đầu khóa học · Tiếp theo → [Hello World](Bai_02_hello-world.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
