---
lesson_id: "M02-L07"
module: "Định tuyến và tổ chức file"
title: "File Colocation"
source_version: "Next.js 15 App Router"
video_start: "00:42:45"
video_duration: "2 phút 48 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. File Colocation

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 2 phút 48 giây · **Mốc:** 00:42:45 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2565s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **File Colocation**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **File Colocation** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. File Colocation** — File nằm trong app/ không tự động thành route chỉ vì xuất hiện trong một thư mục segment.
**2. File Colocation** — Có thể colocate components, hooks, helpers cạnh page.tsx để rút ngắn khoảng cách giữa code và tính năng.
**3. File Colocation** — Giữ rõ ranh giới server/client và tránh tên file đặc biệt xung đột như page.tsx.

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
├── page.tsx               # Route công khai /dashboard
├── chart.tsx              # Chỉ là component nội bộ
└── data.ts                # Chỉ là helper nội bộ
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **File Colocation**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **File Colocation** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **File Colocation** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** File nằm trong app/ không tự động thành route chỉ vì xuất hiện trong một thư mục segment.

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

- **Video nguồn:** [File Colocation — 00:42:45](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2565s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Router trong khi Nexs cung cấp cho chúng ta một số quy ước định tuyến cần tuân theo, nhưng thực ra nó khá linh hoạt trong cách bạn cấu trúc tệp và thư mục dự án của bạn. Hãy cùng xem xét vị trí ghép tệp trong nexs. bạn đã biết rằng nexs sử dụng một tệp rồi. bộ định tuyến dựa trên hệ thống, mỗi thư mục đại diện cho một đoạn tuyến được ánh xạ đến đường dẫn URL, nhưng đây là điểm quan trọng Phần Một tuyến chỉ trở nên công khai khi bạn thêm page.js hoặc trang. Để tôi cho bạn xem file TSX Ý tôi là hãy tạo một thư mục mới gọi là dashboard trong thư mục ứng dụng của chúng ta bên trong, chúng ta sẽ tạo một tệp gọi là biểu đồ đường nét do TSX ở đây chúng ta sẽ định nghĩa một biểu đồ đường hàm mặc định của thành phần react đơn giản, trả về một biểu đồ đường thẻ.

Bây giờ nếu bạn thử vào bảng điều khiển slash trong trình duyệt, bạn sẽ nhận được lỗi 404 trang không tìm thấy vì chúng tôi chưa đã thêm một trang. TSX, nhưng đó chính là thứ làm cho một route có thể truy cập được trang Let's Create. TSX, đây là một điều thú vị khác ngay cả khi một tuyến là công khai với một trang. TSX, trình duyệt chỉ nhận được những gì được trả về theo trang. DSX và nó phải là thành phần React xuất mặc định, hãy thử xem điều gì xảy ra nếu bạn tạo một thành phần mà không đặt nó thành mặc định xuất biểu đồ thanh hàm trả về trên mỗi biểu đồ một thanh trong trình duyệt, bạn có thể thấy trang 404 biến mất nhưng bạn sẽ thấy lỗi nói là mặc định Xuất không phải là một thành phần react trong/ trang SL của bảng điều khiển. Hãy sửa điều này bằng cách thêm một xuất mặc định phù hợp vào

thành phần để xuất bảng điều khiển hàm mặc định trả về trong mỗi bảng điều khiển One ngay bây giờ khi bạn truy cập trình duyệt và làm mới bạn sẽ thấy bảng điều khiển xuất hiện, lưu ý rằng thành phần biểu đồ thanh vẫn không hiển thị, vậy đó là gì điểm chính ở đây bạn có thể xem việc đặt các tệp dự án an toàn bên trong các đoạn định tuyến trong thư mục ứng dụng mà không cần Lo lắng về việc chúng vô tình trở thành các tuyến đường trong khi bạn có thể giữ file trong ứng dụng thư mục bạn không cần, một số nhà phát triển thích giữ tệp của họ bên ngoài thư mục ứng dụng, có thể trong thư mục nguồn với một thư mục thành phần riêng biệt cho tất cả các thành phần giao diện người dùng, Shatan Library làm điều này ví dụ và

Điều đó hoàn toàn ổn NextJS cũng cung cấp cho chúng tôi hai tính năng thú vị nữa để giúp tổ chức dự án, Let Me Show You những điều tiếp theo chúng ta vừa học về việc collocation an toàn của các tệp mà NEX xử lý ngay khi mở hộp. Bây giờ hãy cùng tìm hiểu

---

**Điều hướng:** ← [Not Found Page](Bai_06_not-found-page.md) · Tiếp theo → [Private Folders](Bai_08_private-folders.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
