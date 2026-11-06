---
lesson_id: "M03-L01"
module: "Layouts, điều hướng và SEO"
title: "Layouts"
source_version: "Next.js 15 App Router"
video_start: "00:52:09"
video_duration: "4 phút 24 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 01. Layouts

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 4 phút 24 giây · **Mốc:** 00:52:09 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3129s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Layouts**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Layouts** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Layouts** — layout.tsx nhận children và duy trì giao diện chung qua điều hướng nội bộ; root layout có html/body.
**2. Layouts** — Những thành phần như sidebar, navbar, footer đặt trong layout để hạn chế render lại không cần thiết.
**3. Layouts** — Giữ thành phần chính là Server Component; tách navbar tương tác vào client component riêng.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/layout.tsx`

```tsx
import type { ReactNode } from "react";
import "./globals.css";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi"><body>
      <header>My Next.js App</header>
      <main>{children}</main>
      <footer>© Demo</footer>
    </body></html>
  );
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Layouts**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Layouts** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Layouts** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** layout.tsx nhận children và duy trì giao diện chung qua điều hướng nội bộ; root layout có html/body.

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

- **Video nguồn:** [Layouts — 00:52:09](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3129s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

chi tiết, chúng ta đã khám phá các trang là thành phần giao diện người dùng riêng cho từng tuyến đường. Bây giờ hãy cùng tìm hiểu về bố cục. bố cục chính là giao diện người dùng. được chia sẻ giữa nhiều trang trong ứng dụng của bạn, hãy nghĩ về nó như có một cấu trúc nhất quán như một tiêu đề và chân trang xuất hiện trên mỗi trang tiếp theo giúp việc triển khai trở nên cực kỳ dễ dàng. Việc tạo bố cục rất đơn giản. Chỉ cần xuất mặc định một thành phần React từ một layout. JS hoặc bố cục. Tệp TSX, thành phần đó nhận một prop con, tiếp theo sẽ được điền vào nội dung trang của bạn. Hãy cùng xem điều này trong action: Tôi nên nói thêm rằng chúng ta không cần phải tạo bố cục từ đầu vì Nexts mặc định cung cấp bố cục trong thư mục ứng dụng của bạn, bạn sẽ tìm thấy bố cục.

Trang thích TSX. TSX, điều này tuân theo quy ước đặt tên tệp đặc biệt của năm sau, bố cục này. Tệp TSX trong thư mục ứng dụng là gọi là root layout và nó không phải là tùy chọn, mọi ứng dụng Nexus đều phải có một cái này, thực tế Nexus rất kiên quyết về điều này rằng nếu bạn xóa nó thì nó sẽ tự động tái tạo lại tệp, hãy để tôi chứng minh bạn đã xóa, di chuyển đến thùng rác. Làm mới Local Host 3000 trong trình duyệt và xem nó đã tạo lại nó rồi, hãy cùng hiểu mã nguồn, chúng ta sẽ Nói về đối tượng metadata sau, nhưng hiện tại hãy tập trung vào component React, mỗi component layout đều cần một Trẻ em: Đây là nơi nội dung trang của bạn sẽ được đặt trong trường hợp của chúng tôi là trang.

TSX trong thư mục ứng dụng sẽ trở thành các con khi bố cục. TSX hiển thị nếu bạn kiểm tra các phần tử trong công cụ phát triển Chrome bạn sẽ thấy và một thẻ HTML với ngôn ngữ bằng tiếng Anh phù hợp với bố cục của chúng tôi và một thẻ body chứa thẻ H1 Chào mừng bạn về nhà, điều đó đến từ trang của chúng tôi. Thành phần TSX thông qua prop trẻ em hiện tại bố trí của chúng tôi không ổn Hãy làm cho nó hữu ích hơn bằng cách thêm phần đầu và chân trang, tôi sẽ ghép mã vì đây là HTML cơ bản và CSS nên chúng ta có thẻ header với nền kiểu màu xanh nhạt đệm cho một REM với thẻ đoạn văn ghi phần đầu trang sau đó có phần tử chân trang với màu nền kiểu dáng Coastwhite, di chuyển một REM với đoạn văn

nói rằng chân trang nằm giữa phần đầu và chân trang là các đạo cụ con của chúng ta, rất đơn giản là HTML và CSS, mặc dù chúng ta có thể Tạo các thành phần riêng biệt cho đầu trang và chân trang, chúng tôi giữ cho đơn giản với văn bản giữ chỗ và thiết kế cơ bản cho Bây giờ hãy nhìn vào trình duyệt và bạn sẽ thấy phần đầu và chân trang. Điều thú vị là chúng sẽ giữ nguyên vị trí. Dù bạn chọn tuyến nào, hãy thử đi slash about hoặc struck products, tiêu đề và foter vẫn giữ nguyên. Sức mạnh của bố cục gốc. Tệp TSX tạo ra một cấu trúc nhất quán trên toàn bộ ứng dụng của bạn, bạn có thể thêm vào bất kỳ kiểu dáng đánh dấu hay hành vi nào bạn muốn chỉ cần nhớ bao gồm prop con để trang của bạn có thể hiển thị

Nội dung độc đáo của họ ở đây là minh họa trực quan về cách bố cục hoạt động trong bộ định tuyến ứng dụng khi bạn truy cập Localhost 3000 Thành phần bố cục thô trong bố cục. TSX trong thư mục ứng dụng được hiển thị, điều này chứa một phần đầu trang ở trên cùng và chân trang tại Prop dưới cùng và prop con nằm giữa prop con sẽ được thay thế bằng thành phần được định nghĩa trong Page. TSX trong thư mục ứng dụng khi bạn truy cập Local Host 3000, hãy chọn thành phần được định nghĩa trong trang. TSX trong thư mục giới thiệu thay thế nội dung con trong tệp bố cục và khi bạn truy cập hồ sơ localhost 3000 sl, thành phần được định nghĩa trong trang. TSX trong thư mục profile thay thế prop con trong tệp bố cục. Tôi hy vọng điều này giúp bạn hiểu rõ hơn về bố cục.

Bây giờ, đây là một thử thách nhanh trước khi chúng ta tiến hành, hãy thử tạo các thành phần header và footer của riêng bạn và thêm chúng vào Lớp gốc để lại bình luận để cho tôi biết tiến triển thế nào tiếp theo. Chúng ta sẽ khám phá các bố cục lồng nhau. Trước đó, chúng ta đã khám phá các bố cục

---

**Điều hướng:** ← [Route Groups](../MODULE_02_Routing/Bai_09_route-groups.md) · Tiếp theo → [Nested Layouts](Bai_02_nested-layouts.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
