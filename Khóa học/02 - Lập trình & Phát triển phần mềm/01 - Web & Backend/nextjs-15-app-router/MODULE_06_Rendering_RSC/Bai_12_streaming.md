---
lesson_id: "M06-L12"
module: "Rendering và React Server Components"
title: "Streaming"
source_version: "Next.js 15 App Router"
video_start: "04:15:39"
video_duration: "2 phút 47 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 12. Streaming

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 2 phút 47 giây · **Mốc:** 04:15:39 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15339s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Streaming**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Streaming** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Streaming** — Streaming gửi phần UI sớm trong khi server còn xử lý phần chậm phía sau.
**2. Streaming** — loading.tsx tạo fallback theo segment; Suspense cung cấp ranh giới tinh chỉnh.
**3. Streaming** — Tránh waterfall dữ liệu, hiển thị skeleton hữu ích và đo trải nghiệm thực tế.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/dashboard/page.tsx`

```tsx
import { Suspense } from "react";
async function SlowPanel() {
  await new Promise(r => setTimeout(r, 1500));
  return <p>Panel đã sẵn sàng</p>;
}
export default function Page() {
  return <><h1>Dashboard</h1><Suspense fallback={<p>Đang tải panel…</p>}><SlowPanel /></Suspense></>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Streaming**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Streaming** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Streaming** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Streaming gửi phần UI sớm trong khi server còn xử lý phần chậm phía sau.

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

- **Video nguồn:** [Streaming — 04:15:39](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15339s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

cho phép render giao diện Progressive UI từ công việc trên server được chia nhỏ thành các phần nhỏ hơn và stream đến client Ngay khi chúng sẵn sàng, điều này có nghĩa là người dùng có thể xem các phần của trang ngay lập tức mà không phải chờ đợi mọi thứ load it đặc biệt mạnh mẽ để cải thiện thời gian tải trang ban đầu và xử lý các thành phần giao diện người dùng phụ thuộc vào việc lấy dữ liệu chậm hơn, điều này thường sẽ làm chậm toàn bộ tuyến đường, điều này có thể nghe quen thuộc nếu bạn nhớ lại sự hồi hộp trong thảo luận SSR về reacts tạo ra sự khác biệt chính ở đây là chúng ta đang xem xét nó qua nexs nơi streaming được tích hợp sẵn trong bộ định tuyến ứng dụng, để tôi chỉ cho bạn cách thiết lập ranh giới hồi hộp trong

Ứng dụng để tiết kiệm thời gian Tôi đã thiết lập một lộ trình gọi là product reviews, kết xuất ba phần tử và mỗi phần tử là một nói rằng sản phẩm đánh giá một thành phần sản phẩm một thành phần đánh giá các thành phần này tồn tại trong nguồn của chúng tôi SL thư mục components cho cả hai thành phần, tôi đã cố ý thêm độ trễ 2 giây cho thành phần sản phẩm và 4 giây đối với phần đánh giá, độ trễ M này tạo ra cảm giác như chúng ta thực sự lấy dữ liệu với Dev của mình máy chủ đang chạy nếu chúng tôi truy cập các đánh giá sản phẩm Hurst 3000 SL địa phương để bạn sẽ thấy trang mất một thời gian để hiển thị bất cứ thứ gì, ngay cả phần tử H1, hãy kiểm tra tab mạng và bạn sẽ thấy các bài đánh giá sản phẩm

thời gian phản hồi của máy chủ là 6 giây, đó là vì nó lấy mọi thứ trước khi gửi bất cứ thứ gì. Hãy cải thiện Điều này sử dụng chiến lược phát trực tuyến được hỗ trợ trong bộ định tuyến ứng dụng, rất đơn giản, chúng tôi chỉ cần quấn chậm hơn Các thành phần với suspense và EXs xử lý phần còn lại ở vị trí cao nhất, nhập suspense từ react và wrap cả sản phẩm lẫn đánh giá Các thành phần với thành phần hồi hộp trên thành phần suspense chỉ định prop dự phòng. Hãy dùng một cách đơn giản thẻ đoạn văn ghi tải chi tiết sản phẩm và một đánh giá khác đang tải. Bây giờ hãy xem điều gì xảy ra khi chúng ta reload: Tiêu đề xuất hiện ngay lập tức, tiếp theo là chi tiết sản phẩm sau 2 giây và cuối cùng là các đánh giá sau 4 giây

Trong giây lát khi các thành phần đang tải, chúng ta sẽ thấy văn bản dự phòng tải chi tiết sản phẩm và tải các đánh giá này là Progressive HTML Ren đang hoạt động từ máy chủ đến máy khách và đó là phần kết của chúng ta về việc hiển thị máy chủ Chiến lược trong XGS Chúng ta còn một chủ đề quan trọng nữa về render cần đề cập tiếp theo, vậy hãy cùng đi sâu vào chủ đề đó khi chúng ta đã xây dựng được một nền tảng vững chắc

---

**Điều hướng:** ← [dynamicParams](Bai_11_dynamicparams.md) · Tiếp theo → [Server and Client Composition Patterns](../MODULE_07_Composition/Bai_01_server-and-client-composition-patterns.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
