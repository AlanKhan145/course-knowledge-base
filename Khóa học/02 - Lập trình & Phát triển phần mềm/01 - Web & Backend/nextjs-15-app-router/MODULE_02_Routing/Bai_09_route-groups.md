---
lesson_id: "M02-L09"
module: "Định tuyến và tổ chức file"
title: "Route Groups"
source_version: "Next.js 15 App Router"
video_start: "00:48:16"
video_duration: "3 phút 53 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Route Groups

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 3 phút 53 giây · **Mốc:** 00:48:16 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2896s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Route Groups**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Route Groups** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Route Groups** — (auth) và (marketing) gom route theo chủ đề mà không đưa tên nhóm vào URL.
**2. Route Groups** — Mỗi nhóm có thể sở hữu layout riêng; nhiều nhóm có thể được tổ chức độc lập.
**3. Route Groups** — Tránh tạo hai page.tsx cùng ánh xạ một URL từ các route group khác nhau.

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
├── (auth)/
│   ├── login/page.tsx           # URL /login
│   └── register/page.tsx        # URL /register
└── (marketing)/
    └── about/page.tsx           # URL /about
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Route Groups**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Route Groups** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Route Groups** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** (auth) và (marketing) gom route theo chủ đề mà không đưa tên nhóm vào URL.

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

- **Video nguồn:** [Route Groups — 00:48:16](https://www.youtube.com/watch?v=k7o9R6eaSes&t=2896s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

tính năng này cho phép chúng tôi tổ chức các tuyến đường và tệp dự án một cách logic mà không ảnh hưởng đến cấu trúc URL; nó cũng rất đáng lưu ý rằng nhóm tuyến thực sự là cách duy nhất để chia sẻ bố cục giữa các tuyến mà không ảnh hưởng đến URL Hãy cùng xem các nhóm rout hoạt động bằng cách triển khai một số tuyến xác thực chúng ta sẽ xây dựng các tuyến cho đăng ký đăng nhập và quên mật khẩu, trước tiên hãy vào thư mục ứng dụng của bạn và tạo ba thư mục. Đăng nhập và quên mật khẩu. Trong mỗi thư mục, chúng ta sẽ định nghĩa một trang. Tệp TSX với một thành phần react đơn giản có tiêu đề để đăng ký. TSX xuất thanh ghi hàm mặc định, trả về một trang sao chép thanh ghi thẻ H1. TSX từ thư mục đăng ký, dán vào thư mục đăng nhập và thay đổi đăng ký để đăng nhập, dán tương tự. DSX trong

quên mật khẩu và đổi tên thành phần quên mật khẩu trong trình duyệt khi truy cập localhost 3000 SL đăng ký hiển thị đăng ký dấu gạch chéo đăng nhập hiển thị đăng nhập và dấu gạch chéo quên mật khẩu hiện đã quên mật khẩu bây giờ điều này hoạt động nhưng có vấn đề là các tuyến xác thực của chúng tôi bị rải rác khắp thư mục ứng dụng, trong khi điều này có thể ổn khi Bạn làm việc một mình và biết rõ tất cả các con đường xác thực mà điều đó trở nên khó khăn trong môi trường nhóm Hãy cải thiện trải nghiệm của nhà phát triển bằng cách nhóm các tuyến liên quan lại với nhau. Chúng ta có thể làm điều này bằng cách tạo một thư mục AU để lưu trữ tất cả các tuyến liên quan đến xác thực của chúng tôi, hãy thử nhé. Tạo một thư mục AU bên trong thư mục ứng dụng và di chuyển

đăng ký đăng nhập và quên mật khẩu thư mục bên trong để đăng ký di chuyển nó vào bên trong hoặc cập nhật nhập di chuyển đăng nhập bên trong Au cập nhật, nhập và di chuyển, quên mật khẩu, bên trong cập nhật Nhập và lưu các thay đổi, cấu trúc dự án trông rất nhiều bây giờ đã dọn dẹp đúng rồi nhưng nếu bạn kiểm tra trình duyệt, bạn sẽ thấy các tuyến đường bị lỗi, hãy đăng ký SL, đăng nhập và quên mất tất cả mật khẩu đều trả về 404 điều này xảy ra vì nxs tự động ánh xạ các thư mục lồng nhau vào các pod URL, nên bây giờ chúng ta có au/register a/ đăng nhập và au/ quên mật khẩu mặc dù cấu trúc URL này có thể phù hợp với các tuyến Au nhưng có thể không lý tưởng cho các tuyến khác Các nhóm như marketing hoặc phân tích Đây là lúc nhóm tuyến phát huy tác dụng để tạo nhóm rout.

chỉ cần đóng dòng tên thư mục trong ngoặc đơn, vậy hãy đổi tên O, thêm dấu ngoặc đơn và O bên trong thư mục, điều này cho biết tiếp theo: coi thư mục này là công cụ tổ chức, chỉ loại trừ nó khỏi đường dẫn URL nếu bạn gặp sự cố đổi tên thư mục dừng máy chủ dev bằng contrl C đổi tên thư mục và khởi động lại máy chủ với kiểm tra npm runev trình duyệt của bạn lại localhost 3000 đăng ký, chúng tôi thấy trang đăng ký SL, trang đăng nhập và quên mật khẩu, chúng tôi thấy trang mật khẩu đã quên nhưng giờ mã của chúng tôi đã được tổ chức gọn gàng và nếu bạn cần tổ chức hơn, bạn thậm chí có thể định tuyến các nhóm Nest trong đó Chúng ta sẽ kết thúc khám phá về định tuyến với các trang trong bộ định tuyến ứng dụng. Tiếp theo, chúng ta sẽ khám phá bố cục trong

---

**Điều hướng:** ← [Private Folders](Bai_08_private-folders.md) · Tiếp theo → [Layouts](../MODULE_03_Layout_Navigation_Metadata/Bai_01_layouts.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
