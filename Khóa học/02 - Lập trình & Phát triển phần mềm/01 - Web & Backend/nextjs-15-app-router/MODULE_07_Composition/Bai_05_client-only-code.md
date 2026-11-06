---
lesson_id: "M07-L05"
module: "Thiết kế Server/Client Component"
title: "Client-only Code"
source_version: "Next.js 15 App Router"
video_start: "04:34:21"
video_duration: "4 phút 10 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. Client-only Code

> **Module 07 — Thiết kế Server/Client Component** · **Thời lượng video:** 4 phút 10 giây · **Mốc:** 04:34:21 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=16461s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Client-only Code**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **thiết kế server/client component**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Client-only Code** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Client-only Code** — client-only đánh dấu module chỉ dùng được ở môi trường trình duyệt.
**2. Client-only Code** — Browser API như window, localStorage cần bảo đảm chỉ truy cập ở client, thường trong effect.
**3. Client-only Code** — Dùng useEffect cho thông tin chỉ hiện diện sau khi mount để tránh hydration mismatch.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/_components/window-width.tsx`

```tsx
"use client";
import { useEffect, useState } from "react";
export default function WindowWidth() {
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    const sync = () => setWidth(window.innerWidth);
    sync(); window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  return <p>Chiều rộng: {width ?? "..."}</p>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Client-only Code**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Client-only Code** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Client-only Code** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** client-only đánh dấu module chỉ dùng được ở môi trường trình duyệt.

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

- **Video nguồn:** [Client-only Code — 04:34:21](https://www.youtube.com/watch?v=k7o9R6eaSes&t=16461s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

mẫu: hãy nói về sự tách biệt mã chỉ dành cho khách hàng, trước đó chúng ta đã xem xét mã chỉ dành cho máy chủ trong các ứng dụng nexs. Và bây giờ chúng ta sẽ đảo ngược mọi thứ và tập trung vào mã chỉ dành cho client giống như cách chúng ta cần giữ an toàn phía máy chủ vận hành, việc giữ một số chức năng hoàn toàn ở phía máy khách cũng quan trọng không kém. chính xác là mã phía client, đúng là mã hoạt động với các tính năng đặc thù của trình duyệt như cửa sổ thao tác Dom tương tác đối tượng hoặc thao tác lưu trữ cục bộ Các tính năng này không có trên máy chủ nên chúng ta cần đảm bảo mã như vậy chỉ chạy ở phía máy khách để tránh lỗi hiển thị phía máy chủ nhằm tránh các lỗi không mong muốn

Sử dụng mã phía máy chủ, chúng ta có thể dùng một gói gọi là Client, hãy cùng tìm hiểu mã VS và hiểu với ví dụ từ trước, chúng ta có server route là thành phần máy chủ và client route hiện là thành phần máy khách hãy thêm một hàm chỉ dành cho khách hàng trong thư mục nguồn, bên trong thư mục utils, tạo một tệp mới gọi là client u. TS chúng ta sẽ Định nghĩa một hàm chỉ chạy trên phía client, việc triển khai thực tế hiện tại không quan trọng Chúng ta chỉ muốn minh họa khái niệm này, đây là một hàm đơn giản với câu lệnh khóa và một giá trị trả về xuất ra hàm phía client const console.log sử dụng đối tượng window, sử dụng bộ nhớ cục bộ và trả về kết quả của khách hàng chức năng này

có thể sử dụng bất kỳ tính năng riêng của trình duyệt nào như cửa sổ hoặc lưu trữ cục bộ mà không hoạt động ở phía máy chủ, hãy nhập vào và sử dụng chức năng này trong thành phần Client Route ở phía trên, nhập chức năng phía client từ MS/Client Details và trong component const kết quả bằng hàm phía client, chúng ta sẽ hiển thị một thẻ đoạn văn cho kết quả khi bạn chạy điều này trong trình duyệt, bạn sẽ thấy các thông báo nhật ký xuất hiện trong bảng điều khiển, sử dụng đối tượng cửa sổ sử dụng cục bộ. lưu trữ chúng ta cũng thấy kết quả client được hiển thị trong giao diện người dùng, không có thẻ máy chủ đặc biệt và điều này xác nhận mọi thứ đang chạy phía client như kế hoạch, giờ hãy bảo vệ mã chỉ client của chúng ta, bắt đầu bằng cách cài đặt client

chỉ gói trong terminal của bạn chạy lệnh npm install client dấu gạch nối chỉ khi bạn gặp lỗi chỉ định -- Ép sau khi lệnh hoàn tất, nhập nó ở đầu tệp khách hàng .ts để chỉ nhập khách hàng khi chúng tôi chỉ nhập khách hàng trong một mô-đun nó tạo ra một mạng lưới an toàn nếu ai đó cố gắng sử dụng mã này trên site máy chủ, nó sẽ thất bại khi xây dựng, hãy nhập và Sử dụng hàm trang khách này trong trang Server Rout. TSX, sao chép câu lệnh nhập và dán nó sao chép gọi dán nó gọi kết quả khách hàng này và hiển thị nó như một phần của thẻ H1, lưu tệp và trong terminal bạn sẽ thấy lỗi khi bạn đang nhập một thành phần mà Imports Client only, nó chỉ hoạt động trong thành phần client nhưng

không có thành phần cha nào được đánh dấu sử dụng client nên các thành phần máy chủ theo mặc định, lỗi này hoạt động như một lệnh làm sạch báo hiệu cho các nhà phát triển về việc sử dụng mã đặc thù của máy khách không phù hợp trong bối cảnh máy chủ, bạn cũng sẽ nhận thấy lỗi tương tự khi bạn điều hướng đến/định tuyến máy chủ thay vì gặp sự cố khi ứng dụng của bạn là khi chạy bạn sẽ phát hiện các vấn đề này sớm trong quá trình phát triển trong phần tóm tắt giống như mã máy chủ chỉ cần máy khách cô lập chỉ mã cần ở phía máy khách, nơi nó có thể sử dụng đúng các tính năng trình duyệt, gói chỉ máy khách hoạt động như vậy Mạng lưới an toàn của chúng tôi đảm bảo mã phía khách hàng luôn ở đúng vị trí của nó, giúp ứng dụng của chúng tôi đáng tin cậy hơn và

Dễ bảo trì hơn. Được rồi, hãy chuyển sang mẫu thành phần khách hàng tiếp theo, hãy cùng khám phá mẫu thứ hai và

---

**Điều hướng:** ← [Context Providers](Bai_04_context-providers.md) · Tiếp theo → [Client Component Placement](Bai_06_client-component-placement.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
