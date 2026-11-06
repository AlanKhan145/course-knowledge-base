---
lesson_id: "M07-L04"
module: "Thiết kế Server/Client Component"
title: "Context Providers"
source_version: "Next.js 15 App Router"
video_start: "04:29:18"
video_duration: "5 phút 03 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Context Providers

> **Module 07 — Thiết kế Server/Client Component** · **Thời lượng video:** 5 phút 03 giây · **Mốc:** 04:29:18 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=16158s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Context Providers**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **thiết kế server/client component**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Context Providers** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Context Providers** — Context provider dùng state/interactions thường phải đặt trong Client Component.
**2. Context Providers** — Bọc provider đúng phần ứng dụng cần state, tránh đặt boundary quá cao nếu không cần.
**3. Context Providers** — Server Component có thể là children của provider client trong mô hình composition phù hợp.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/providers.tsx + src/app/layout.tsx`

```tsx
// src/app/providers.tsx
"use client";
import { createContext, useState } from "react";
export const ThemeContext = createContext("light");
export function Providers({ children }: { children: React.ReactNode }) {
  const [theme] = useState("light");
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
// Root layout chỉ dùng <Providers>{children}</Providers> bên trong <body>.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Context Providers**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Context Providers** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Context Providers** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Context provider dùng state/interactions thường phải đặt trong Client Component.

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

- **Video nguồn:** [Context Providers — 04:29:18](https://www.youtube.com/watch?v=k7o9R6eaSes&t=16158s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Các nhà cung cấp ngữ cảnh Nếu bạn quen với React, bạn sẽ biết rằng các nhà cung cấp ngữ cảnh thường sống gần gốc của một ứng dụng để chia sẻ Global State và Logic, ví dụ như giao diện của ứng dụng của bạn, tuy nhiên có một vấn đề với Ngữ cảnh react của kiến trúc RSC không được hỗ trợ trong các thành phần máy chủ nếu bạn cố gắng tạo một ngữ cảnh tại Tuyến ứng dụng bạn sẽ gặp lỗi, giải pháp là tạo ngữ cảnh của bạn và hiển thị nhà cung cấp của nó bên trong một Thành phần client chuyên dụng, để tôi chỉ cho bạn cách điều này hoạt động so với mã nguồn mà chúng ta bắt đầu với bố cục. TSX trong thư mục ứng dụng tại đây Hãy thiết lập và cung cấp một ngữ cảnh chủ đề mà toàn bộ ứng dụng của chúng ta có thể sử dụng, nhập tạo ngữ cảnh từ React

tiếp theo, chúng ta Định nghĩa kiểu chủ đề có màu sắc làm đối tượng chính, chuỗi kiểu và thứ cấp của chuỗi kiểu tiếp theo, chúng ta Định nghĩa chủ đề mặc định để chủ đề mặc định là loại màu chủ đề đối tượng Định nghĩa một màu chính và một màu thứ cấp tiếp theo, chúng ta định nghĩa const theme context bằng để tạo context kiểu theme và cuối cùng chúng ta chuyển giao diện mặc định chúng ta bao bọc thẻ body bằng ngữ cảnh theme giá trị do provider bằng theme mặc định và chúng ta thêm thẻ đóng khi chúng ta Lưu cái này và kiểm tra trình duyệt của chúng tôi. Chúng tôi sẽ thấy lỗi. Bạn đang nhập một thành phần cần tạo ngữ cảnh này. React Hook chỉ hoạt động trong thành phần client, giờ chúng ta có thể thêm chỉ thị client để tạo layout. TSX một client

nhưng điều đó sẽ yêu cầu Nex chạy component này và tất cả những gì nó nhập trên phía client mà không phải Thay vào đó, hãy tạo một context và render provider của nó trong một component client riêng biệt trong Thư mục components: Hãy tạo một tệp mới gọi là Theme Hyphen Provider. TSX vì chúng ta đã xem mã rồi, tôi sẽ dán nó vào đây để tiết kiệm thời gian, hãy cùng phân tích vấn đề này Chúng ta đã có Type Default Theme và Theme Context Creation giống như trước, giờ xuất một thành phần Theme Provider để hiển thị Theme Context. nhà cung cấp với giá trị giao diện mặc định của chúng tôi và hiển thị bất kỳ con nào chuyển sang đó, tôi cũng đã thêm một giao diện đã qua sử dụng tiện lợi

hook mà bất kỳ thành phần nào cũng có thể sử dụng để truy cập theme, nhưng phần quan trọng nhất là chỉ thị sử dụng Clan tại Mặt trên trở lại trong bố cục. TSX, giờ đây chúng ta có thể đơn giản hóa mã của mình với trình cung cấp giao diện, xóa và tạo nhập ngữ cảnh và thay vào đó nhập Nhà cung cấp giao diện từ nhà cung cấp giao diện của chúng tôi. Tệp TSX xóa mã cho type theme chủ đề mặc định, tạo ngữ cảnh và cho jsx, chỉ định thành phần trình cung cấp chủ đề để kiểm tra điều này, hãy sử dụng Ngữ cảnh chủ đề trong trang Client Route So In Page. TSX là thành phần khách hàng nhập chủ đề sử dụng Hook và sử dụng nó để truy cập chủ đề, chủ đề const bằng với use theme và đối với jsx, chúng ta sẽ xóa carousel

mã hóa và áp dụng màu chính cho trang tuyến L của phần tử H1 và chúng ta sẽ chỉ định chủ đề màu kiểu nội tuyến. màu sắc. thành phần chính giờ đây là một thành phần rất đơn giản trong trình duyệt từ đầu đến vạch khách hàng và bạn sẽ thấy trang định tuyến khách hàng ở màu xanh dương chính của chúng tôi, chuyển sang màu phụ và nó chuyển sang màu xám, nhà cung cấp giao diện của chúng tôi hiện đang hoạt động như mong đợi tại đây là điều quan trọng cần lưu ý mặc dù chúng ta đang bao bọc ứng dụng của mình trong một thành phần khách hàng mà Các thành phần máy chủ nhà cung cấp chủ đề ở phía dưới là các thành phần máy chủ, chúng ta sẽ khám phá khái niệm này

sẽ đi sâu hơn trong thời gian tới, nhưng đây là chìa khóa để làm việc với các nhà cung cấp ngữ cảnh và các thành phần máy chủ thay vì chuyển đổi thành phần máy chủ của bạn thành thành phần máy khách tạo một thành phần máy khách mới và sử dụng nó trong máy chủ của bạn Component với các props con, nếu bạn dùng React phiên bản 19, bạn có thể render chỉ context như một provider thay vì context. Nhà cung cấp nên Bối cảnh chủ đề. nhà cung cấp có thể được hiển thị chỉ là ngữ cảnh chủ đề vào trình duyệt làm mới và bạn sẽ tiếp tục Xem kết quả tương tự. Tiếp theo, hãy cùng khám phá các mẫu thành phần khách hàng cho thành phần khách hàng đầu tiên của chúng ta.

---

**Điều hướng:** ← [Third Party Packages](Bai_03_third-party-packages.md) · Tiếp theo → [Client-only Code](Bai_05_client-only-code.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
