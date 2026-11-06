---
lesson_id: "M06-L11"
module: "Rendering và React Server Components"
title: "dynamicParams"
source_version: "Next.js 15 App Router"
video_start: "04:12:05"
video_duration: "3 phút 34 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 11. dynamicParams

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 3 phút 34 giây · **Mốc:** 04:12:05 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15125s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **dynamicParams**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **dynamicParams** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. dynamicParams** — dynamicParams quyết định ứng xử với dynamic path không nằm trong danh sách generateStaticParams.
**2. dynamicParams** — Khi false, path chưa khai báo bị 404; phù hợp danh mục cố định.
**3. dynamicParams** — Khi true, hãy hiểu tác động render và cache cho các path đến sau.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/blog/[slug]/page.tsx`

```tsx
export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ slug: "intro" }];
}
// /blog/intro tồn tại; /blog/khac sẽ 404 vì không nằm trong tập khai báo.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **dynamicParams**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **dynamicParams** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **dynamicParams** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** dynamicParams quyết định ứng xử với dynamic path không nằm trong danh sách generateStaticParams.

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

- **Video nguồn:** [dynamicParams — 04:12:05](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15125s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

hàm tạo tham số tĩnh cho phép chúng ta dựng trước các tuyến tĩnh cho các đoạn động bằng cách trả về một mảng các đối tượng mà các khóa khớp với tham số Dynamic route của chúng ta, trong ví dụ chúng ta trả về các đối tượng có giá trị ID là 1 2 và ba, nghĩa là tiếp theo chúng ta sẽ render trước các trang chi tiết sản phẩm cho ba sản phẩm này khi xây dựng Khá đơn giản đúng không, nhưng đây là một câu hỏi thú vị: điều gì xảy ra khi ai đó cố gắng truy cập một sản phẩm trang có ID không nằm trong danh sách hàm tạo tham số tĩnh như sản phẩm với ID 4, 5 v.v. Nexs đã hỗ trợ chúng ta, nó vẫn sẽ hiển thị các trang đó, chỉ là không hiển thị trước mà sẽ hiển thị tĩnh tại

Thời gian chạy: Để tôi chỉ cho bạn ý tôi trong trình duyệt. Nếu chúng ta điều hướng đến/ sản phẩm sl4, bạn sẽ thấy trang vẫn hoạt động được. Và nếu chúng ta kiểm tra thư mục build next server app products, chúng ta thấy 4. HTML tệp này được tạo vào thời điểm chạy khi Chúng tôi đã truy cập / Sản phẩm SL4 và vì trang được hiển thị tĩnh nên dấu thời gian sẽ không thay đổi mỗi lần làm mới trang. Hãy thử Một lần nữa, với sản phẩm SL SL5, lưu ý là không có năm người. Tệp HTML trong thư mục build của chúng tôi khi truy cập sản phẩm SL sl5 sẽ tạo một tệp HTML mới với thời gian hiện tại và bạn có thể thấy tệp đó trong thư mục build 5 HTML tệp này được phục vụ cho khách hàng ngay bây giờ nexas thực sự cho chúng ta một số quyền kiểm soát hành vi này thông qua một thiết lập

gọi là tham số động mặc định Tham số động được đặt thành True, nghĩa là NEX sẽ hiển thị các trang tĩnh theo yêu cầu đối với bất kỳ phân đoạn động nào không được bao gồm trong tạo parms tĩnh, nhưng đây là điểm thú vị chúng ta có thể đặt nó thành fals báo cho NEX sh trả về lỗi 404 cho bất kỳ phân đoạn động nào không nằm trong danh sách dựng sẵn của chúng ta nói đây là một hành động, tôi sẽ thay đổi tham số động thành false stop production build của chúng tôi và rebuild bằng lệnh npm chạy build, khởi động máy chủ với np. chạy start ngay bây giờ, nếu chúng ta cố gắng vào các sản phẩm SL sl4, chúng ta sẽ nhận được một trang 404, tức là Dynamic các tham số true và dynamic giá trị kiểm soát điều gì xảy ra khi phân đoạn động được truy cập, đó là

Không được tạo ra bằng Generate Static Patterms, giờ bạn có thể đang thắc mắc khi nào nên sử dụng từng tùy chọn tốt hơn thực sự phụ thuộc vào trường hợp sử dụng của bạn, nếu bạn xây dựng một trang thương mại điện tử thì có lẽ bạn sẽ muốn giữ Dynamic Patterms nói rằng True bằng cách này bạn có thể dựng trước các trang sản phẩm phổ biến nhất để có hiệu suất tốt hơn nhưng vẫn Cho phép truy cập tất cả các sản phẩm khác của bạn, chúng sẽ được hiển thị theo yêu cầu nếu bạn làm việc với một thứ gì đó giống như một Blog, nơi bạn có số trang nhỏ hơn, cố định hơn để bạn có thể render trước tất cả và thiết lập Tham số động đến Falls, như vậy nếu ai đó cố truy cập một bài đăng blog không tồn tại, họ sẽ nhận được 404 sạch sẽ

lỗi, thay vì chờ một trang sẽ không bao giờ tồn tại, vậy đó là về PARM động, tóm lại là một thiết lập đơn giản cho phép bạn kiểm soát mạnh mẽ cách Nexus xử lý các phân đoạn Động không được bao gồm Trong phần Tạo mẫu tĩnh, hãy cùng khám phá chiến lược kết xuất máy chủ thứ ba và cuối cùng. Phát trực tiếp là một chiến lược

---

**Điều hướng:** ← [generateStaticParams](Bai_10_generatestaticparams.md) · Tiếp theo → [Streaming](Bai_12_streaming.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
