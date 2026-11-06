---
lesson_id: "M06-L02"
module: "Rendering và React Server Components"
title: "Client-side Rendering (CSR)"
source_version: "Next.js 15 App Router"
video_start: "03:20:15"
video_duration: "3 phút 13 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Client-side Rendering (CSR)

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 3 phút 13 giây · **Mốc:** 03:20:15 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12015s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Client-side Rendering (CSR)**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Client-side Rendering (CSR)** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Client-side Rendering (CSR)** — CSR tải JS lên trình duyệt rồi render phần nội dung phụ thuộc client.
**2. Client-side Rendering (CSR)** — Ưu điểm tương tác linh hoạt; nhược điểm có thể tăng JS và khiến nội dung xuất hiện muộn.
**3. Client-side Rendering (CSR)** — Thích hợp các widget cần browser state hay dữ liệu chỉ dành cho client.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/_components/client-clock.tsx`

```tsx
"use client";
import { useEffect, useState } from "react";
export default function ClientClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => setTime(new Date().toLocaleTimeString()), []);
  return <span>Client time: {time || "Đang tải..."}</span>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Client-side Rendering (CSR)**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Client-side Rendering (CSR)** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Client-side Rendering (CSR)** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** CSR tải JS lên trình duyệt rồi render phần nội dung phụ thuộc client.

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

- **Video nguồn:** [Client-side Rendering (CSR) — 03:20:15](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12015s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

để thực sự hiểu cách render hoạt động trong nexts, chúng ta cần xem phản ứng đã phát triển như thế nào qua Thập kỷ vừa qua, hãy cùng tìm hiểu các chiến lược rendering khác nhau của Reacts và xem chúng đã thay đổi như thế nào theo thời gian nếu Bạn đã làm việc với phát triển web một thời gian, có lẽ bạn còn nhớ khi React chủ yếu được dùng để xây dựng đơn ứng dụng trang khi khách truy cập trang web của bạn, máy chủ sẽ gửi lại một trang HTML duy nhất, trang này rất đẹp đơn giản chỉ là một thẻ div đơn giản và một liên kết đến tệp Javascript, để tôi chỉ cho bạn ý tôi với một ví dụ từ tạo ứng dụng react, công cụ hàng đầu để bắt đầu các dự án react, bạn sẽ nhận được tệp HTML tối thiểu này với một file rỗng.

thẻ root div và một tham chiếu bundle.js tệp Javascript bundle.js này là nguồn năng lượng thực sự chứa mọi thứ như Thư viện React, mã ứng dụng của bạn, mọi thứ cần thiết để chạy ứng dụng, trình duyệt sẽ tải tệp này ngay khi HTML được xử lý sau khi trình duyệt của bạn tải xuống toàn bộ JavaScript thì nó sẽ bắt đầu tạo HTML ngay trên máy tính của bạn, chèn nó vào Dom dưới phần tử root div đó và đó là lúc bạn cuối cùng sẽ thấy giao diện người dùng của mình, đây là cách rất đơn giản để xác minh nếu bạn kiểm tra Dom các phần tử inspector chúng ta có thể thấy một header với hình ảnh và H1 cùng thẻ đoạn văn nhưng nếu bạn xem nguồn PID

bạn chỉ thấy HTML cơ bản gốc mà máy chủ gửi qua toàn bộ phương pháp này, nơi trình duyệt của bạn là client biến đổi các thành phần react thành những gì bạn thấy trên màn hình, gọi tắt là CSR rendering phía khách hàng CSR trở nên rất phổ biến cho các ứng dụng một trang và mọi người đều sử dụng nó, tuy nhiên không lâu sau các lập trình viên bắt đầu nhận thấy một số nhược điểm vốn có của cách tiếp cận này, vấn đề lớn đầu tiên là SEO khi các công cụ tìm kiếm thu thập dữ liệu trang web của bạn Họ chủ yếu xem xét nội dung HTML, nhưng với CSR, HTML ban đầu của bạn về cơ bản chỉ là một thẻ div rỗng, Không phù hợp cho các công cụ tìm kiếm khi cố gắng tìm hiểu trang của bạn nói về điều gì, cộng thêm khi bạn có quá nhiều thành phần lồng nhau

việc thực hiện các cuộc gọi API nội dung có ý nghĩa có thể tải quá chậm khiến các công cụ tìm kiếm không thể phát hiện được, vấn đề thứ hai là Hiệu năng và trải nghiệm người dùng, hãy nghĩ về trình duyệt của bạn, tức là client, phải làm mọi thứ để lấy dữ liệu. Xây dựng giao diện người dùng, làm mọi thứ tương tác và đó là rất nhiều công việc, người dùng thường phải nhìn chằm chằm vào màn hình trống hoặc Tải Spinner trong khi tất cả những điều này xảy ra và đây là điểm nhấn mỗi khi bạn thêm một tính năng mới vào ứng dụng của mình Gói JavaScript ngày càng lớn khiến người dùng phải chờ lâu hơn, điều này đặc biệt gây khó chịu cho những người có kết nối internet chậm hơn trong khi CSR thực sự đã thay đổi cuộc chơi và mang đến cho chúng ta ứng dụng web tương tác We Love Today

các nhà phát triển biết họ cần các giải pháp tốt hơn cho SEO và hiệu suất. Tiếp theo, chúng ta sẽ xem xét một bản dựng hình khác cách tiếp cận giải quyết trực tiếp các hạn chế CSR này, chúng tôi vừa đề cập đến render phía client trong react và hai phương pháp chính của nó

---

**Điều hướng:** ← [Rendering](Bai_01_rendering.md) · Tiếp theo → [Server-side Rendering (SSR)](Bai_03_server-side-rendering-ssr.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
