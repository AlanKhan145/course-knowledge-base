---
lesson_id: "M04-L08"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Unmatched Routes"
source_version: "Next.js 15 App Router"
video_start: "02:05:59"
video_duration: "6 phút 16 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. Unmatched Routes

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 6 phút 16 giây · **Mốc:** 02:05:59 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=7559s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Unmatched Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Unmatched Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Unmatched Routes** — Khi refresh, một slot không tìm được route phù hợp có thể cần default.tsx để dựng fallback.
**2. Unmatched Routes** — Trạng thái chuyển trang mềm và tải trực tiếp không hoàn toàn giống nhau.
**3. Unmatched Routes** — Tạo default.tsx cho slot dự kiến không active để tránh 404 ngoài ý muốn.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `cây thư mục`

```text
src/app/dashboard/
├── @analytics/
│   ├── page.tsx
│   └── default.tsx  # Fallback khi slot không match sau hard reload
├── @team/
│   ├── page.tsx
│   └── default.tsx
└── layout.tsx
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Unmatched Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Unmatched Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Unmatched Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Khi refresh, một slot không tìm được route phù hợp có thể cần default.tsx để dựng fallback.

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

- **Video nguồn:** [Unmatched Routes — 02:05:59](https://www.youtube.com/watch?v=k7o9R6eaSes&t=7559s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Việc điều hướng phụ trong các tuyến là một trong những lợi ích của việc sử dụng các tuyến song song, ví dụ như trong khu phức hợp của chúng tôi Bảng điều khiển, chúng ta có thể điều hướng giữa danh sách mặc định các thông báo và một danh sách lưu trữ các thông báo. Hãy để chúng ta điều hướng Hãy vào mã VS và triển khai kịch bản trước, chúng ta sẽ cập nhật trang này. TSX trong ô thông báo để thêm Điều hướng đến chế độ xem lưu trữ Nhập thành phần liên kết và đưa nó vào JSX Hãy bao bọc thông báo trong một div Tag and Add Another Div với liên kết được lưu trữ và HRE is/ Complex Dasboard Slash Archived Link nhân tiện là một xuất mặc định bây giờ hãy tạo chế độ xem thông báo đã lưu trữ bên trong ô thông báo tạo một chế độ lưu trữ

Hãy nhớ đây là thư mục route thông thường và thêm một trang. TSX với mã tương tự nhưng đã được chỉnh sửa cho Chế độ xem lưu trữ để sao chép trang. TSX dán nó, cập nhật tên thành phần cho các thông báo đã lưu trữ Tiêu đề và liên kết chúng tôi trỏ đến thông báo mặc định, HF is/ complex, Dashboard, xin lưu ý là thư mục route thông thường và không phải một khe. Nếu bạn kiểm tra trình duyệt, bạn sẽ thấy liên kết thông báo đã lưu trữ, nhấp vào nó sẽ thay đổi URL đến/ bảng điều khiển phức tạp SL đã được lưu trữ và giao diện người dùng hiển thị chế độ xem đã lưu trữ, nhấp vào liên kết mặc định sẽ đưa bạn đến Quay lại/ Bảng điều khiển phức tạp và chúng ta thấy chế độ xem thông báo, điều hướng phụ của chúng ta hoạt động hoàn hảo với cái này

Triển khai đã được thực hiện. Hãy cùng thảo luận về chủ đề chính của video này, đó là các tuyến không khớp mặc định. Nội dung hiển thị trong một khe khớp với URL hiện tại, bảng điều khiển phức tạp của chúng tôi có bốn khe, trẻ em, người dùng, doanh thu và thông báo khi bạn truy cập bảng điều khiển phức tạp localhost 3000, tất cả các khe đều hiển thị nội dung tương ứng nhưng khi bạn điều hướng đến bảng điều khiển phức tạp localhost 3000 SL chỉ lưu trữ khe thông báo có nội dung phù hợp ba slot còn lại dành cho trẻ em, người dùng và doanh thu trở nên không ai sánh kịp. Shar sẽ xử lý các slot không thể so sánh này. khác nhau tùy thuộc vào cách bạn điều hướng khi điều hướng qua giao diện người dùng, ví dụ như việc nhấp vào liên kết tiếp theo vẫn hiển thị

bất cứ thứ gì đã có trong các ô không khớp trước đó để khi bạn chuyển giữa thông báo mặc định và thông báo lưu trữ thì thông báo còn lại ba khe, trẻ em, người dùng và doanh thu giữ nguyên như trước và không bị ảnh hưởng bởi sự thay đổi đường dẫn URL từ bảng điều khiển phức tạp của SL đến bảng điều khiển phức tạp SL, SL được lưu trữ khi bạn tải lại trang, tuy nhiên tiếp theo sẽ tìm kiếm một mặc định. Tệp TSX trong mỗi khe không khớp, tệp này rất quan trọng vì nó đóng vai trò là phương án dự phòng cho nội dung Rend khi framework không thể lấy trạng thái hoạt động của khe từ URL hiện tại nếu không có tệp bạn sẽ nhận được 404 lỗi đó chính xác là điều xảy ra nếu bạn tải lại bảng điều khiển phức tạp SL đã lưu trữ, không tìm thấy và không tìm thấy

Tài nguyên yêu cầu Chúng tôi không có mặc định. Tệp TSX trong phần người dùng con hoặc các khe doanh thu, hãy quay lại vs Lập trình và sửa lỗi này bằng cách thêm file bị thiếu bây giờ các file có thể phản chiếu trang của bạn. Nội dung TSX hoặc trình bày gì đó Hoàn toàn khác biệt, tùy bạn, trong trường hợp của chúng tôi, chúng tôi sẽ giữ mọi thứ đơn giản và sao chép nội dung từ trang. TSX dành cho chúng tôi Bảng điều khiển phức tạp, chúng ta cần thêm ba điều mặc định. TSX để ngăn lỗi 404 khi tải lại trang trước là dành cho ô dành cho trẻ em Định nghĩa mặc định. TSX trong thư mục bảng điều khiển phức tạp, đây sẽ là phương án dự phòng Xem ô dành cho trẻ em sao chép nội dung từ trang. TSX và dán nó bạn có thể đổi tên thành phần cũng như

thay đổi tiêu đề hoàn toàn tùy theo bạn. Định nghĩa mặc định. TSX bên trong khe người dùng Vậy nên trong thư mục add users mặc định. TSX và đây sẽ là chế độ xem dự phòng cho slot người dùng để sao chép trang. Nội dung TSX rồi dán lại, tôi sẽ thay đổi văn bản thẻ để sử dụng analytics, nội dung mặc định cuối cùng. Định nghĩa mặc định. TSX trong thư mục doanh thu tôi sẽ sao chép. Nội dung TSX và giữ nguyên như vậy, điều này sẽ phục vụ như một Chế độ dự phòng View cho slot doanh thu khi đã có sẵn việc nạp lại localhost 3000 complex dashboard SL Archived hoạt động hoàn hảo, khe thông báo hiển thị nội dung đã lưu trữ vì đây là khe duy nhất có

Thành phần được định nghĩa cho đường dây lưu trữ dấu gạch chéo, thư mục này ngay tại đây, các khe khác hiển thị mặc định tương ứng. TSX nội dung như những túi rơi nói về bảng điều khiển phức tạp, phân tích người dùng mặc định, nội dung mặc định, các chỉ số doanh thu mà chúng tôi không có. thay đổi để tải lại bảng điều khiển phức tạp Điều hướng đến các con đã lưu trữ Người dùng và doanh thu Vẫn giữ nguyên Chúng ta tải và chúng ta kết xuất nội dung mặc định Thiết lập này đảm bảo bạn không vô tình kết xuất một tuyến đường không nên song song Đã hiển thị nếu bạn gặp sự cố với điều này, vui lòng thử khởi động lại máy chủ phát triển. Được rồi, chúng ta đã làm được rồi. đã đề cập cách Parallel Routes cho phép bạn kết xuất đồng thời nhiều trang trong cùng một bố cục. Tiếp theo chúng ta sẽ khám phá

Cách Parallel Routes cho phép hiển thị có điều kiện các trang trong cùng một bố cục trong nghiên cứu trước đây của chúng tôi

---

**Điều hướng:** ← [Parallel Routes](Bai_07_parallel-routes.md) · Tiếp theo → [Conditional Routes](Bai_09_conditional-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
