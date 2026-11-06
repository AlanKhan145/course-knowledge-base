---
lesson_id: "M04-L11"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Parallel Intercepting Routes"
source_version: "Next.js 15 App Router"
video_start: "02:28:09"
video_duration: "5 phút 35 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 11. Parallel Intercepting Routes

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 5 phút 35 giây · **Mốc:** 02:28:09 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=8889s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Parallel Intercepting Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Parallel Intercepting Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Parallel Intercepting Routes** — Ghép @modal slot với (.)photo route để overlay modal trong danh sách ảnh nhưng giữ deep link.
**2. Parallel Intercepting Routes** — Thêm default.tsx cho slot và logic đóng modal thích hợp với router.back hoặc Link.
**3. Test ba kịch bản** — Test ba kịch bản: click từ feed, paste URL trực tiếp, refresh khi modal mở.

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
src/app/
├── layout.tsx                  # Nhận prop modal
├── @modal/
│   ├── default.tsx             # export default () => null
│   └── (.)photo/[id]/page.tsx  # Modal khi client navigation
├── photo/[id]/page.tsx         # Trang chi tiết khi tải URL trực tiếp
└── page.tsx                   # Feed chứa link /photo/123
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Parallel Intercepting Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Parallel Intercepting Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Parallel Intercepting Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Ghép @modal slot với (.)photo route để overlay modal trong danh sách ảnh nhưng giữ deep link.

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

- **Video nguồn:** [Parallel Intercepting Routes — 02:28:09](https://www.youtube.com/watch?v=k7o9R6eaSes&t=8889s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Các mẫu định tuyến mạnh mẽ trong bộ định tuyến ứng dụng. Bây giờ để tôi chỉ cho bạn cách các mẫu này phối hợp với nhau thông qua một ví dụ thực tế: hãy nhớ ví dụ về nguồn ảnh mà tôi đã đề cập trước đó, tôi sẽ trình diễn và phân tích mã để Giúp bạn hiểu cách mọi thứ hoạt động, hãy bắt đầu với bản demo tại Localhost 3000/- Feed bạn sẽ thấy một nguồn hình ảnh hiển thị bảy kỳ quan mới của thế giới, nhấp vào bất kỳ hình ảnh nào và một mô hình sẽ xuất hiện với phiên bản phóng to của nó Hình ảnh cùng với các chi tiết như tên nhiếp ảnh gia và vị trí ở cuối cùng. Những gì đang diễn ra ở đây thực sự là thú vị là chúng ta đang xem xét một tuyến song song bị chặn trong khi URL thay đổi thành/ ảnh Feed cộng với

Image ID những gì bạn đang thấy là một tuyến đường bị chặn song song hiển thị trong cùng bố cục với ảnh nguồn cấp có thể nhìn thấy ở phía sau, điều này rất quan trọng vì nếu không có lộ trình song song modal, việc nhấp vào ảnh sẽ Thay thế hoàn toàn nội dung trang thay vì hiển thị lớp phủ và đây là điều còn thú vị hơn với các mô hình nhấn nút quay lại của trình duyệt sẽ đưa bạn về trang trước thay vì đóng mô hình nhưng Các tuyến chặn song song giải quyết vấn đề này một cách tinh tế, chú ý cách các nút trình duyệt lùi và tiến mở mượt mà và đóng mô hình, đây là một tính năng thú vị khác nếu bạn chia sẻ URL với ai đó hoặc chỉ làm mới trang thì ảnh sẽ tải

Chi tiết trên một trang mới Điều này làm cho các tuyến đường chặn song song trở nên hoàn hảo cho các mô hình. Bạn có thể áp dụng nguyên tắc tương tự. ở những nơi khác cũng như có nút đăng nhập mở mô hình nhưng truy cập trực tiếp vào đăng nhập SL sẽ hiển thị đăng nhập đầy đủ Giờ bạn đã thấy nó hoạt động, hãy để tôi hướng dẫn bạn từng bước để tạo ra nó, bạn sẽ tìm thấy tất cả mã nguồn trong thư mục nguồn ảnh trong kho GitHub của tôi và thành phần modal được định nghĩa trong thư mục components bước một, thu thập lại Hình ảnh và đặt chúng vào một thư mục ảnh bên trong thư mục nguồn cấp ảnh. Chúng ta có bảy hình ảnh, bước hai. Tạo một typescript để nhập các hình ảnh này và tổ chức chúng thành một mảng với siêu dữ liệu mà mỗi kỳ quan trong mảng của chúng tôi cần

tên ID Nguồn ảnh gia và địa điểm bước ba thiết lập một trang. Tệp TSX trong thư mục nguồn ảnh để hiển thị danh sách hình ảnh của bạn, sử dụng mảng Wonders, tôi chọn tablein CSS để tạo kiểu, tạo ra phong cách bạn thích, wrap mỗi hình ảnh trong một thành phần liên kết trỏ đến/ nguồn ảnh kèm theo ID hình ảnh từ 1 đến 7 trang này tạo ra phần chính của bạn nguồn ảnh tại localhost 3000 photo bước bốn tạo chi tiết ảnh của bạn Tuyến động bên trong nguồn ảnh thêm một ID Tuyến động tuyến này lấy tham số ID tìm ảnh phù hợp từ mảng Wonders và hiển thị chi tiết ảnh, tên ảnh, nguồn ảnh, nhiếp ảnh gia, tên và vị trí khi ai đó truy cập nguồn ảnh SL, ID SL.

như hai người với Petra, giờ họ sẽ thấy chi tiết kỳ diệu cho phần quan trọng, bước năm là chặn đường giữa nguồn cấp và chi tiết, vì chúng ta muốn một mô hình chồng lên nguồn cấp, chúng ta sẽ bắt đầu với một tuyến song song, tạo một mô hình như một tuyến song song. trong thư mục nguồn ảnh và đưa nó vào bố cục. TSX props mô hình hóa điều này ở model route là đặc biệt vì nó cho phép kết xuất đồng thời cả nội dung nguồn cấp và mô hình có thể tồn tại trên màn hình cùng lúc cho tuyến song song modal chặn là nguồn và tuyến ID là đích nên bên trong nguồn modal thêm một thư mục mới khớp với tên thư mục đích trong trường hợp này là ID Dynamic route vì model là một

tuyến song song một tiền tố cần phải là dấu chấm trong ngoặc đơn để khớp cùng cấp độ trong thư mục này tạo một trang hiển thị chi tiết ảnh tương tự như tuyến Dynamic ID chính Tôi đã di chuyển tên ảnh từ trên xuống dưới xuống Trình bày cách bạn có thể có giao diện người dùng khác nhau cho mỗi tuyến đường Bước Sáu, thêm một giao diện mặc định. Tệp TSX sang mô hình song song thư mục route tệp này được dùng để hiển thị nội dung mô hình khi route được tải lần đầu chúng ta chỉ trả về null now Đây là những gì xảy ra phía sau hậu trường khi bạn lần đầu tải nguồn cấp ảnh SL, NEX hiển thị cả hai tuyến modal mà Bắt đầu trống nhờ mặc định. TSX và nội dung chính có trên trang. TSX thì khi bạn nhấp vào một hình ảnh thì modal

Route chặn việc điều hướng đến/ trượt nguồn cấp ảnh. Điều này hiển thị lớp phủ mod trong khi vẫn giữ ảnh chính của bạn. nguồn cấp hiển thị bên dưới khi bạn tải lại trang sẽ không bị chặn và ID Dynamic route được hiển thị thay thế Hy vọng ví dụ này giúp bạn hiểu cách các tuyến chặn song song hoạt động cùng nhau. Được rồi, đây là phần kết của trang. định tuyến dựa trên XS Chúng ta sẽ đi sâu vào các trình xử lý tuyến đường trước đó. Chúng ta đã học cách định tuyến đến các trang có tệp dựa trên file

---

**Điều hướng:** ← [Intercepting Routes](Bai_10_intercepting-routes.md) · Tiếp theo → [Route Handlers](../MODULE_05_Route_Handlers/Bai_01_route-handlers.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
