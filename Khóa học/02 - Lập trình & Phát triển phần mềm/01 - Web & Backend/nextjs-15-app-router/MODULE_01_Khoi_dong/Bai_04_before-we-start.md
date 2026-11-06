---
lesson_id: "M01-L04"
module: "Khởi động với Next.js 15"
title: "Before We Start"
source_version: "Next.js 15 App Router"
video_start: "00:11:27"
video_duration: "1 phút 46 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Before We Start

> **Module 01 — Khởi động với Next.js 15** · **Thời lượng video:** 1 phút 46 giây · **Mốc:** 00:11:27 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=687s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/getting-started)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Before We Start**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **khởi động với next.js 15**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Before We Start** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Before We Start** — Trong App Router, React Server Components là mặc định nếu không có chỉ thị use client.
**2. Before We Start** — Server Component có thể chạy logic server và truy cập nguồn dữ liệu an toàn, nhưng không sử dụng các hook tương tác như useState.
**3. Before We Start** — Client Component dùng cho state, browser APIs, event handlers; đặt use client trên đầu module phù hợp.
**4. Before We Start** — Chỉ truyền dữ liệu cần thiết từ server sang client để giảm JavaScript gửi cho trình duyệt.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/counter.tsx`

```tsx
"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(n => n + 1)}>Count: {count}</button>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Before We Start**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Before We Start** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Before We Start** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Trong App Router, React Server Components là mặc định nếu không có chỉ thị use client.

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

- **Video nguồn:** [Before We Start — 00:11:27](https://www.youtube.com/watch?v=k7o9R6eaSes&t=687s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/getting-started](https://nextjs.org/docs/15/app/getting-started).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Tiếp theo, trước khi đi sâu vào định tuyến, hãy cùng tìm hiểu một khái niệm cơ bản giúp chúng ta hiểu rõ hơn cách định tuyến Hoạt động trong X chia sẻ khái niệm là các thành phần react server hoặc RSC cho các thành phần react server ngắn gọn là một kiến trúc mới kiến trúc này được nhóm react giới thiệu và nhanh chóng được Shar tiếp tục áp dụng. Kiến trúc này mang đến một cách tiếp cận mới Để tạo thành phần React bằng cách chia chúng thành hai loại riêng biệt: thành phần máy chủ và thành phần máy khách, chúng ta sẽ Khám phá các loại thành phần này chi tiết hơn khi chúng ta tiến về phía trước, nhưng hiện tại hãy tập trung vào một vài điểm chính NEX mặc định sẽ cấu trúc tất cả các thành phần dưới dạng thành phần máy chủ, các thành phần này có thể thực hiện các tác vụ bên máy chủ như đọc

tệp hoặc lấy dữ liệu trực tiếp từ cơ sở dữ liệu, sự đánh đổi là họ không thể sử dụng react hook hoặc xử lý người dùng tương tác Nếu bạn muốn tạo thành phần client, bạn sẽ cần thêm chỉ thị sử dụng client ở đầu tệp thành phần của bạn trong khi các thành phần khách hàng không thể thực hiện các tác vụ phụ của máy chủ như đọc các tệp mà chúng có thể sử dụng Các tương tác hook và handle hãy nghĩ về các thành phần client như các thành phần react truyền thống mà bạn đã quen thuộc Với các phiên bản React trước khi chúng ta đi vào định tuyến, bạn sẽ thấy các ví dụ thực tế về cả hai thành phần Các loại Chúng ta sẽ làm việc với một số thành phần để các thao tác nhất định hoàn thành trước khi kết xuất

và chúng tôi sẽ sử dụng các thành phần khách hàng để tận dụng các hook từ module định tuyến có điều này Hiểu cơ bản về các thành phần máy chủ và máy khách sẽ giúp bạn hiểu rõ hơn khái niệm định tuyến CEPS nếu không có Nếu điều này có ý nghĩa ngay bây giờ thì đừng lo, chúng tôi sẽ trình bày tất cả về thành phần React Server trong nhiều chi tiết hơn chi tiết ở phần sau của khóa học. Được rồi, với nền tảng này, hãy cùng bắt đầu với định tuyến. Tiếp theo, hãy cùng khám phá một trong các JS của NEX.

---

**Điều hướng:** ← [Project Structure](Bai_03_project-structure.md) · Tiếp theo → [Routing](../MODULE_02_Routing/Bai_01_routing.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
