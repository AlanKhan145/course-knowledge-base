---
lesson_id: "M08-L04"
module: "Data fetching và database"
title: "Loading and Error States"
source_version: "Next.js 15 App Router"
video_start: "05:01:16"
video_duration: "2 phút 53 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Loading and Error States

> **Module 08 — Data fetching và database** · **Thời lượng video:** 2 phút 53 giây · **Mốc:** 05:01:16 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18076s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Loading and Error States**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **data fetching và database**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Loading and Error States** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Loading and Error States** — Kết hợp try/catch ở tầng data với loading.tsx/error.tsx hoặc Suspense cho từng vùng.
**2. Loading and Error States** — Thông báo lỗi có mục đích hành động và nút retry khi hợp lý.
**3. Loading and Error States** — Luôn test API chậm, lỗi 500 và response không hợp lệ.

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
1. Chọn một trang/tính năng đang sử dụng Loading and Error States.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Loading and Error States**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Loading and Error States** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Loading and Error States** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Kết hợp try/catch ở tầng data với loading.tsx/error.tsx hoặc Suspense cho từng vùng.

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

- **Video nguồn:** [Loading and Error States — 05:01:16](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18076s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching](https://nextjs.org/docs/15/app/building-your-application/data-fetching).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

bây giờ hãy giải quyết các trạng thái tải và lỗi, trong khi các thành phần khách hàng yêu cầu bạn quản lý các trạng thái này riêng biệt biến và các thành phần máy chủ render có điều kiện giúp quá trình này trở nên sạch sẽ hơn khi triển khai trạng thái tải tất cả Chúng ta cần làm là Định nghĩa và Xuất một thành phần phản ứng trong quá trình tải. TSX để xử lý lỗi, chúng tôi cũng làm tương tự trong Lỗi. TSX, chúng ta đã đề cập đến những khái niệm này khi thảo luận về định tuyến trước đó, nhưng giờ hãy xem chúng hoạt động cụ thể như thế nào Về việc lấy dữ liệu, để tôi bắt đầu với mã VS và chỉ cho bạn cách hoạt động, trước tiên hãy tạo một tệp mới gọi là Loading. TSX trong thư mục máy chủ có dấu gạch nối người dùng nên đang tải. TSX, đây là một quy ước xjs ở đây: Định nghĩa và Xuất một thành phần react

để tôi dán mã vào đây để tiết kiệm thời gian. Chúng tôi có trang tải hàm mặc định xuất và thành phần này tạo một spinner tải đẹp sử dụng hai thẻ div với các lớp CSS đuôi vì việc lấy dữ liệu xảy ra Rất nhanh trong ví dụ của chúng ta, hãy thêm một delay có chủ ý để demo trạng thái tải tốt hơn, nên chờ đợi lời hứa mới mà Kết quả sau 2 giây Nếu chúng ta quay lại trình duyệt và làm mới trang, chúng ta sẽ thấy vòng xoay tải xuất hiện trong 2 giây Trước khi dữ liệu người dùng xuất hiện, việc triển khai trạng thái tải bây giờ khá đơn giản cho lỗi Xử lý: Hãy tạo lỗi. TSX trong cùng thư mục, tên tệp một lần nữa là quy ước XS Định nghĩa và Xuất react

thành phần với kiểu dáng phù hợp, tôi sẽ dán mã lại ở đây để tiết kiệm thời gian xử lý lỗi các thành phần cần phải là các thành phần khách hàng nên chúng ta có chỉ thị use C ở phía trên, sau đó có trang lỗi hàm mặc định xuất ra và thành phần nhận được một đối tượng lỗi mà chúng ta đang ghi lại vào bảng điều khiển bằng hiệu ứng sử dụng trong một thực tế bạn có thể muốn gửi lỗi này đến dịch vụ ghi nhật ký lỗi, giao diện người dùng chỉ hiển thị clear Thông báo lỗi màu đỏ Lỗi Lấy dữ liệu người dùng để kiểm tra xử lý lỗi trở lại trang. TSX trong cùng một thư mục chúng ta có thể mô phỏng lỗi bằng cách thay đổi URL thành một thứ không chính xác để người dùng 1 2 3 lưu tệp và quay lại

trình duyệt bạn sẽ thấy thông báo lỗi xuất hiện lỗi khi lấy dữ liệu người dùng chúng tôi đã xử lý thành công cả việc tải và trạng thái lỗi khi lấy dữ liệu trong các thành phần máy chủ trong tóm tắt để quản lý việc lấy dữ liệu Trạng thái sẽ thêm một lần tải. TSX tệp cùng với thành phần react cho trạng thái tải và một lỗi. Tệp TSX với thành phần máy khách để xử lý lỗi Bây giờ khi chúng ta đã hiểu những nguyên lý cơ bản của việc lấy dữ liệu trong các thành phần máy chủ, hãy cùng khám phá hai Các mẫu phổ biến cho việc lấy dữ liệu Khi lấy dữ liệu bên trong các thành phần, bạn cần nhận biết hai việc lấy dữ liệu

---

**Điều hướng:** ← [Fetching Data with Server Components](Bai_03_fetching-data-with-server-components.md) · Tiếp theo → [Sequential Data Fetching](Bai_05_sequential-data-fetching.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
