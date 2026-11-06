---
lesson_id: "M09-L01"
module: "Đột biến dữ liệu và form"
title: "Data Mutations"
source_version: "Next.js 15 App Router"
video_start: "05:21:47"
video_duration: "3 phút 07 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 01. Data Mutations

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 3 phút 07 giây · **Mốc:** 05:21:47 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=19307s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Data Mutations**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Data Mutations** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Data Mutations** — Mutations bao gồm create/update/delete; xác thực, validate và invalidate cache sau thay đổi.
**2. Data Mutations** — Server Actions thuận tiện cho form nhưng là endpoint có thể bị gọi, không được tin tưởng chỉ vì nằm ở server.
**3. Data Mutations** — Thiết kế trạng thái pending, thành công, lỗi và optimistic UI theo nhu cầu.

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
1. Chọn một trang/tính năng đang sử dụng Data Mutations.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Data Mutations**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Data Mutations** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Data Mutations** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Mutations bao gồm create/update/delete; xác thực, validate và invalidate cache sau thay đổi.

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

- **Video nguồn:** [Data Mutations — 05:21:47](https://www.youtube.com/watch?v=k7o9R6eaSes&t=19307s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Router bây giờ là lúc khám phá những đột biến dữ liệu thú vị tương tự khi chúng ta làm việc với dữ liệu mà chúng ta đang Thông thường thực hiện các thao tác gọi là CRUD: tạo read, cập nhật và xóa, chúng tôi đã thành thạo phần đọc rồi, nên Hãy cùng khám phá ba yếu tố còn lại, bắt đầu với cách tạo dữ liệu để theo dõi. Hãy chắc chắn kiểm tra ngoài chủ đề trước về việc lấy dữ liệu từ cơ sở dữ liệu nơi chúng ta thiết lập client Prisma với cơ sở dữ liệu sqlite Có một bảng sản phẩm sẵn sàng sử dụng với một số dữ liệu mẫu và phương pháp để thực hiện các thao tác CRUD nhằm thực sự trân trọng ứng dụng Cách tiếp cận của router đối với các đột biến dữ liệu đáng để xem xét cách chúng ta truyền thống xử lý các đột biến dữ liệu trong

phản ứng so sánh này sẽ giúp chúng ta đánh giá cao lợi ích của app router appr Hãy cùng làm một ví dụ thực tế về việc tạo sản phẩm mới trong bảng sản phẩm của chúng tôi, giờ tôi đã chuẩn bị mã trước nhưng nó trông khá quen thuộc Nếu bạn từng làm việc với React trước đây, để tôi hướng dẫn bạn cách mọi thứ hoạt động trong một thư mục mới gọi là React Form mà tôi đã đã tạo một trang. Tệp TSX với một thành phần gọi là create product, tại đây bạn tạo một biểu mẫu với các trường nhập liệu cho tiêu đề sản phẩm, giá và mô tả, bạn sẽ cần sử dụng State hook để theo dõi các giá trị trường này rồi thêm một trình lắng nghe sự kiện onsubmit cho biểu mẫu của bạn kích hoạt chức năng xử lý submit khi biểu mẫu được gửi ngay bây giờ đây là

một điều quan trọng cần nhớ về trình xử lý submit vì lý do bảo mật mà mã phía khách không thể trực tiếp làm được tương tác với cơ sở dữ liệu, đó là lý do bạn hoặc nhóm backend cần thiết lập một tuyến APEPI để xử lý việc tạo trong ví dụ của chúng ta, tôi đang dùng một route API Shar tiếp theo nhưng bạn có thể coi đây như một backend và trỏ tuyến API này thực sự đảm nhận việc tương tác với cơ sở dữ liệu của chúng tôi, lấy dạng dữ liệu và tạo ra sản phẩm mới ghi bằng chức năng thêm sản phẩm, trong khi ở phía giao diện bạn cũng cần xử lý quy trình gửi một cách tinh tế, điều này thường có nghĩa là triển khai trạng thái tải để vô hiệu hóa nút gửi trong khi gửi

đang tiến hành nếu việc gửi thành công, bạn sẽ muốn chuyển hướng người dùng đến trang sản phẩm để xem Sản phẩm mới tạo trong trình duyệt, hãy truy cập vào biểu mẫu React và bạn sẽ thấy biểu mẫu chúng tôi đã tạo điền vào nó và gửi nó, bạn sẽ thấy trạng thái tải và sau đó được chuyển hướng đến trang sản phẩm. Chúng tôi sẽ thấy sản phẩm mới được tạo trong Danh sách như bạn thấy, có khá nhiều việc đang diễn ra ở đây, chúng tôi đang quản lý các hình thức, Nhà nước xử lý các hồ sơ gửi bài, tương tác với một API route xử lý việc tải trạng thái và chuyển hướng, nhưng đây là tin tốt nếu bạn nghĩ chắc chắn phải có một Cách làm tốt hơn và đơn giản hơn trong Nexs. Bạn hoàn toàn đúng rồi. Tiếp theo, chúng ta sẽ khám phá cách sử dụng bộ định tuyến ứng dụng Nexs

biến đổi toàn bộ quy trình này, làm cho nó trở nên tinh gọn và hiệu quả hơn đáng kể trước đây chúng tôi đã khám phá

---

**Điều hướng:** ← [Fetching From a Database](../MODULE_08_Data_Fetching/Bai_07_fetching-from-a-database.md) · Tiếp theo → [Forms with Server Actions](Bai_02_forms-with-server-actions.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
