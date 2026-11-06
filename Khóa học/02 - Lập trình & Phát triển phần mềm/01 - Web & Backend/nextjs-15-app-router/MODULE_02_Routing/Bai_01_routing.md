---
lesson_id: "M02-L01"
module: "Định tuyến và tổ chức file"
title: "Routing"
source_version: "Next.js 15 App Router"
video_start: "00:13:13"
video_duration: "5 phút 44 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 01. Routing

> **Module 02 — Định tuyến và tổ chức file** · **Thời lượng video:** 5 phút 44 giây · **Mốc:** 00:13:13 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=793s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Routing**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **định tuyến và tổ chức file**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Routing** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Routing** — Mỗi thư mục trong app/ tương ứng một segment của URL nhưng route chỉ truy cập khi có page.tsx (hoặc route.ts cho API).
**2. Routing** — src/app/page.tsx ứng với /; src/app/about/page.tsx ứng với /about.
**3. Routing** — Một route không tồn tại sẽ được framework xử lý là 404.
**4. Routing** — Giữ tên file đặc biệt đúng chính tả và luôn export default React component cho page.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/about/page.tsx`

```tsx
export default function AboutPage() {
  return <main><h1>About</h1><p>Route /about</p></main>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Routing**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Routing** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Routing** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Mỗi thư mục trong app/ tương ứng một segment của URL nhưng route chỉ truy cập khi có page.tsx (hoặc route.ts cho API).

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

- **Video nguồn:** [Routing — 00:13:13](https://www.youtube.com/watch?v=k7o9R6eaSes&t=793s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing](https://nextjs.org/docs/15/app/building-your-application/routing).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

các tính năng cốt lõi định tuyến nextjs sử dụng hệ thống định tuyến dựa trên hệ thống tệp, nghĩa là các URL bạn có thể truy cập trong trình duyệt của mình là dựa trên cách bạn tổ chức các tệp và thư mục trong mã của mình, để tôi chỉ cho bạn cách điều này hoạt động với một số Ví dụ thực tế Tôi đã tạo một dự án NEX mới sử dụng lệnh npx create next app ở phiên bản demo dấu gạch nối định tuyến mới nhất Demo định tuyến là tên của dự án của chúng tôi. Khi lệnh hoàn thành thành công, bạn sẽ có một dự án tương tự như của tôi, hãy điều hướng đến thư mục Nguồn, bây giờ chúng ta sẽ bắt đầu lại bằng cách xóa thư mục ứng dụng vì chúng ta sẽ xây dựng routes từ đầu, tôi đã đề cập trước đó rằng next s có cơ chế định tuyến dựa trên file, bạn có thể tự nhiên làm mọi file

Trong thư mục ứng dụng của chúng tôi, hãy trở thành một tuyến đường, không hoàn toàn tiếp theo, cô ấy được xây dựng dựa trên các quy ước và định tuyến chỉ là một lĩnh vực Khi các quy ước này đặc biệt quan trọng, có ba quy ước chính cần ghi nhớ: trước hết là các tuyến đường phải nằm trong thư mục ứng dụng, các tệp tuyến thứ hai phải được đặt tên là page.js hoặc trang. TSX tùy thuộc vào việc bạn có phải là người hay không sử dụng typescript third, mỗi thư mục đại diện cho một đoạn của đường dẫn URL khi các quy ước này được tuân thủ tự động tệp trở nên khả dụng như một tuyến đường Hãy áp dụng điều này vào thực tế cho kịch bản một: chúng ta muốn tạo một trang chủ hiển thị khi ai đó truy cập trang web của chúng tôi tại Local Host Port 3000, hãy quay lại VS code và triển khai kịch bản này

quy ước khóa đầu tiên trong định tuyến EX là tất cả các tuyến đường phải được đặt trong một thư mục ứng dụng trong thư mục nguồn. Tạo thư mục này Quy ước thứ hai là bất kỳ tệp nào được định làm route đều phải được đặt tên là Page. TSX hoặc page.js nếu bạn không dùng TypeScript Hãy tạo một trang. Tệp TSX trong thư mục ứng dụng từ tệp này, chúng ta sẽ mặc định xuất một thành phần react đơn giản hàm mặc định về home và điều này trả về một thẻ mỗi một với nội dung chào mừng về nhà, và như vậy chúng ta đã tạo ra tuyến đầu tiên của năm sau trong terminal chạy lệnh npm chạy Dev để khởi động máy chủ dev trong trình duyệt. Localhost 3000 và bạn sẽ thấy Welcome Home hiển thị, đây là trang Khái niệm Định tuyến Khóa đầu tiên của chúng tôi. TSX

tệp bên trong thư mục ứng dụng tự động ánh xạ tới URL gốc của trang web mà chúng tôi đã triển khai thành công Kịch bản một: Trước khi tiếp tục, hãy cùng nói về bố cục. TSX mặc dù chúng tôi đã xóa tệp này khi việc xóa thư mục ứng dụng Nexts sẽ tự động tạo và thiết lập khi bạn truy cập route gốc lần đầu, chúng tôi sẽ Khám phá các bố cục sâu hơn sau, nhưng hiện tại hãy nhớ rằng tệp này sẽ được tạo tự động phía sau hậu trường Bây giờ hãy giải quyết kịch bản số hai: Đối với kịch bản này, chúng ta cần tạo thêm hai tuyến đường nữa, một cho trang Giới thiệu. và một trong trang hồ sơ, URL sẽ đọc localhost 3000 slab và localhost 3000 SL profile trong vs

mã Hãy tạo các tuyến đường này Có ba bước đơn giản, đầu tiên hãy tạo một thư mục mới tên là About bên trong ứng dụng Thư mục thứ hai trong thư mục Giới thiệu này Tạo một trang. tệp TSX thứ ba từ tệp này xuất mặc định một react hàm xuất mặc định thành phần mà trả về mỗi cái về tôi tương tự tạo một thư mục khác trong Thư mục ứng dụng có tên là Hồ sơ bên trong trang Tạo Thư mục. Tệp TSX từ tệp này xuất mặc định một thành phần react xuất hồ sơ hàm mặc định, trả về một thẻ H1 có ghi là my hồ sơ sau khi lưu tệp và quay lại trình duyệt, trang chủ vẫn sẽ hiển thị ở gốc

Định tuyến Cổng Máy chủ Địa phương 3000 Khi bạn điều hướng đến slab localhost 3000, bạn sẽ thấy trang Giới thiệu về tôi và tương tự Đi đến hồ sơ SL sẽ hiển thị trang hồ sơ của tôi, kịch bản 2 giờ đã hoàn thành khái niệm định tuyến khóa thứ hai để Hãy nhớ rằng các tuyến đường được liên kết trực tiếp với tên thư mục của chúng trong thư mục ứng dụng trên một trang. Tệp TSX bên trong Thư mục Giới thiệu ánh xạ đến tuyến slab và một trang. Tệp TSX bên trong thư mục hồ sơ ánh xạ đến đường đi hồ sơ cho phép tôi Cho bạn xem một hình ảnh nhanh về tất cả những gì chúng ta đã đề cập cho đến nay, trang này khá đơn giản. TSX trong thư mục ứng dụng ánh xạ trực tiếp đến tuyến gốc và mỗi thư mục trong thư mục ứng dụng ánh xạ trực tiếp đến một đoạn trong url của bạn

bây giờ bạn có thể đang thắc mắc điều gì xảy ra nếu ai đó cố truy cập một URL không khớp với bất kỳ tệp nào trong ứng dụng của bạn giả sử ai đó cố gắng truy cập bảng điều khiển SL, trong trường hợp này NEX đã hỗ trợ bạn, nó sẽ tự động phục vụ lên phản hồi không tìm thấy 404 bạn không cần viết mã đặc biệt nào để xử lý các tuyến không tồn tại này đến giờ bạn Bạn nên hiểu rõ cách định tuyến dựa trên tệp hoạt động trong XJS. Điều tuyệt vời của hệ thống này là bạn không cần cần chỉnh sửa cài đặt và cấu hình router trong mã của bạn, cấu trúc tệp và thư mục của bạn làm tất cả Heavy Lifting Đây là ví dụ hoàn hảo cho triết lý của NEX ưu tiên quy ước hơn là cấu hình khi nó

Quay lại với định tuyến, được rồi, hãy tiếp tục khám phá thêm về định tuyến. Trước đó chúng ta đã có cái nhìn thoáng qua về Nex

---

**Điều hướng:** ← [Before We Start](../MODULE_01_Khoi_dong/Bai_04_before-we-start.md) · Tiếp theo → [Nested Routes](Bai_02_nested-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
