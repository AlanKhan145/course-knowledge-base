---
lesson_id: "M07-L03"
module: "Thiết kế Server/Client Component"
title: "Third Party Packages"
source_version: "Next.js 15 App Router"
video_start: "04:24:31"
video_duration: "4 phút 47 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Third Party Packages

> **Module 07 — Thiết kế Server/Client Component** · **Thời lượng video:** 4 phút 47 giây · **Mốc:** 04:24:31 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15871s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Third Party Packages**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **thiết kế server/client component**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Third Party Packages** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Third Party Packages** — Một số package sử dụng browser API hoặc hook phải chạy trong Client Component.
**2. Third Party Packages** — Dùng wrapper nhỏ use client quanh widget; giữ phần còn lại của trang ở server.
**3. Third Party Packages** — Kiểm tra compatibility RSC/SSR và sử dụng dynamic import khi cần.

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
1. Chọn một trang/tính năng đang sử dụng Third Party Packages.
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

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Third Party Packages**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Third Party Packages** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Third Party Packages** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Một số package sử dụng browser API hoặc hook phải chạy trong Client Component.

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

- **Video nguồn:** [Third Party Packages — 04:24:31](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15871s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

mẫu cho thành phần máy chủ thứ hai của chúng ta, mẫu hãy cùng khám phá cách làm việc với các gói của bên thứ ba các thành phần máy chủ có Giới thiệu một mô hình mới đầy hứng khởi trong react và hệ thống EOS đang phát triển để theo kịp, các gói của bên thứ ba đang bắt đầu để thêm chỉ thị sử dụng client vào các thành phần cần tính năng phía client, làm rõ vị trí của chúng Nên chạy được, đây là vấn đề nhưng nhiều gói NPM vẫn chưa thực hiện chuyển đổi này, nghĩa là trong khi họ hoạt động tốt trong các thành phần máy khách, chúng có thể bị hỏng hoặc hỏng hoàn toàn trong các thành phần máy chủ, nhưng đừng lo lắng thì có một Giải pháp đơn giản: Chúng tôi có thể gói các thành phần bên thứ ba cần tính năng phía khách hàng vào khách hàng của chúng tôi

Các thành phần: Để tôi chỉ cho bạn cách hoạt động với một ví dụ thực tế. Chúng ta sẽ sử dụng React Slick, một thành phần Carousel phổ biến. Từ NPM dựa vào các tính năng phía khách hàng để bắt đầu, hãy cùng cài đặt các gói cần thiết trong terminal chạy lệnh npm install react dyphen slick slick Harel và add types SL react slick now chúng ta gặp lỗi vì chúng ta đang sử dụng react 19, hãy chạy lệnh bằng cách thêm -- Force next, tôi sẽ mở ví dụ playground ở npm từ đây chúng ta sẽ lấy mẫu Sao chép mã vào thanh trượt hình ảnh. Trang rout từ JSX sang Client. TSX, đây là thành phần client, bắt đầu với Imports, sau đó là jsx, chúng ta có thể loại bỏ dòng import CSS

và thay vào đó sao chép thanh trượt CSS từ hình ảnh. CSS lên toàn cầu. CSS chuyển màu đen sang trắng vì chúng ta đang làm việc với chế độ tối trong jsx pleal kitten không còn hoạt động nữa, vậy hãy cùng làm việc với chế độ tối Sử dụng Pix để làm ảnh thay vào đó. Khi bạn kiểm tra Localhost 3000 client route, bạn sẽ thấy một file hoạt động hoàn hảo. Carousel, bây giờ chuyện gì xảy ra nếu chúng ta cố gắng sử dụng Carousel này trực tiếp trong một thành phần máy chủ, hãy dán cùng đoạn mã đó vào Trang định tuyến máy chủ. TSX để trang Nhập và dán vào tuyến đường máy chủ.

TSX và sau đó là jsx sao chép và dán trong trình duyệt, khi chúng ta truy cập tuyến máy chủ SLS thì gặp phải một vấn đề tại sao lại là thành phần slider sử dụng các tính năng phía khách hàng nhưng thư viện không bao gồm chỉ thị sử dụng máy khách, chắc chắn chúng ta Có thể thêm user client vào tuyến server của chúng ta nhưng điều đó đồng nghĩa với việc phải từ bỏ các khả năng quan trọng của SERs như cơ sở dữ liệu gọi truy cập vào biến môi trường bí mật, v.v. Để giải quyết điều này, bạn phải đóng gói các thành phần bên thứ ba mà phụ thuộc vào các tính năng chỉ phụ thuộc vào khách hàng trong thành phần khách hàng của bạn, vì vậy trong thư mục thành phần tạo một tệp mới Thanh trượt hình ảnh. TSX, chúng ta sẽ sử dụng cùng mã Carousel nhưng thêm chỉ thị use C ở phía trên, chúng ta cũng sẽ đổi tên

điều này đến thanh trượt hình ảnh như một xuất có tên bây giờ thành phần máy chủ của chúng ta có thể được làm sạch để chỉ cần sử dụng hình ảnh thành phần slider nhập nó ở phía trên và gọi nó như một phần của hàm trang máy chủ jsx của chúng ta có thể được đã khôi phục thành phần thanh trượt hình ảnh của chúng tôi có thể được nhập và có thể được đưa vào JSX, chúng tôi vẫn còn một máy chủ thành phần nhưng bây giờ có một phần tử hoạt động như thành phần khách hàng kiểm tra lại trình duyệt và ta thấy thành phần đó hoạt động như mong đợi, route máy chủ theo sau là kết quả máy chủ và chúng ta có carousel, chỉ thấy một hình ảnh duy nhất Từ Pixum nhưng nếu bạn làm việc với ảnh cục bộ thì bạn sẽ thấy tất cả chúng trong các gói bên thứ ba tóm tắt trong React

Hệ sinh thái đang trong giai đoạn chuyển tiếp khi nhiều thành phần từ các gói NPM chưa áp dụng cách sử dụng Chỉ thị khách hàng Việc bao bọc các thành phần như vậy trong các thành phần khách hàng của chính chúng tôi sẽ cho phép chúng tôi tận dụng hệ sinh thái của các gói bên thứ ba trong khi tuân thủ mô hình thành phần máy chủ mới. Được rồi, chúng ta có thêm một thành phần Ser nữa. Mẫu cần bao quát Hãy cùng xem tiếp theo đó là gì cho thành phần máy chủ cuối cùng của chúng ta Mẫu Hãy cùng khám phá cách làm việc với

---

**Điều hướng:** ← [Server-only Code](Bai_02_server-only-code.md) · Tiếp theo → [Context Providers](Bai_04_context-providers.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
