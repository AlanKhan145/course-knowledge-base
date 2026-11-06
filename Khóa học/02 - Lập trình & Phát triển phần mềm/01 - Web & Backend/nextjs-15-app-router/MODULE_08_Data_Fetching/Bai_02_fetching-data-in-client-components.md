---
lesson_id: "M08-L02"
module: "Data fetching và database"
title: "Fetching Data in Client Components"
source_version: "Next.js 15 App Router"
video_start: "04:52:55"
video_duration: "4 phút 07 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Fetching Data in Client Components

> **Module 08 — Data fetching và database** · **Thời lượng video:** 4 phút 07 giây · **Mốc:** 04:52:55 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=17575s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Fetching Data in Client Components**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **data fetching và database**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Fetching Data in Client Components** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Fetching Data in Client Components** — Fetch bên client có thể dùng useEffect hoặc thư viện SWR/React Query.
**2. Fetching Data in Client Components** — Quản lý loading/error và cleanup request để tránh state update không liên quan.
**3. Fetching Data in Client Components** — Không đưa API token bí mật vào bundle; gọi backend API nếu cần quyền server.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/_components/client-products.tsx`

```tsx
"use client";
import { useEffect, useState } from "react";
export default function Products() {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/products", { signal: controller.signal })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((payload: { data: { name: string }[] }) => setData(payload.data.map(p => p.name)))
      .catch(e => { if (e.name !== "AbortError") setError(e.message); });
    return () => controller.abort();
  }, []);
  return error ? <p role="alert">{error}</p> : <ul>{data.map(x => <li key={x}>{x}</li>)}</ul>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Fetching Data in Client Components**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Fetching Data in Client Components** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Fetching Data in Client Components** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Fetch bên client có thể dùng useEffect hoặc thư viện SWR/React Query.

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

- **Video nguồn:** [Fetching Data in Client Components — 04:52:55](https://www.youtube.com/watch?v=k7o9R6eaSes&t=17575s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching](https://nextjs.org/docs/15/app/building-your-application/data-fetching).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Router ứng dụng tiếp theo, trước tiên chúng ta cần một số dữ liệu thực sự để làm việc. Tôi sẽ giới thiệu với bạn về Json. một dịch vụ API giả miễn phí cung cấp dữ liệu giả để chúng tôi thử nghiệm nếu bạn chuyển sang Json Placeholder nhập code.com và xem phần tài nguyên của họ, bạn sẽ thấy một điểm cuối của người dùng, điều này cho chúng ta một phần liền kề mảng gồm 10 người dùng với các thông tin khác nhau, chúng ta sẽ lấy dữ liệu này và hiển thị tên người dùng, email của từng người dùng. và số điện thoại trong ứng dụng NEXS của chúng tôi, trong khi NEXS thực sự tỏa sáng với việc lấy dữ liệu trong các thành phần máy chủ mà chúng tôi Sẽ nói sau, hãy bắt đầu với điều mà bạn có thể quen thuộc hơn với việc lấy dữ liệu phía khách hàng nếu bạn đã

đã hoàn thành việc lấy dữ liệu trong react trước khi bạn cảm thấy như ở nhà. Hãy bắt đầu trong thư mục ứng dụng của bạn, tạo một thư mục mới. gọi Users client và thêm một trang. Tệp TSX bên trong tôi chọn client tên người dùng vì chúng ta đang xử lý người dùng dữ liệu trong thành phần khách hàng nhưng bạn có thể đặt tên theo ý muốn, mã chúng ta sắp viết sẽ trông đẹp mắt Bạn đã quen nếu bạn từng làm việc với react trước đây, vậy chúng ta sẽ đi qua với tốc độ tốt. Trước tiên, hãy định nghĩa kiểu typescript của chúng ta. đối với người dùng, chúng tôi sẽ giữ đơn giản và chỉ bao gồm các trường mà chúng tôi quan tâm, gõ: người dùng chứa ID, tên, tên người dùng. Email và số điện thoại cho thành phần của chúng tôi, chúng tôi sẽ gọi đó là UsersClient, vì vậy xuất hàm mặc định Users Client mà chúng tôi cần

ba phần trạng thái trong thành phần này là người dùng để lưu trữ người dùng đã lấy tải nhằm theo dõi xem người dùng có đang đang được lấy và lỗi để lưu các thông báo lỗi đừng quên nhập trạng thái sử dụng từ react tiếp theo chúng ta sẽ sử dụng dùng hiệu ứng để lấy người dùng khi component mount, import use effect từ react và trong component tôi đang đi để dán mã cho hiệu ứng sử dụng bên trong use effect hug của chúng ta, chúng ta có một hàm Asing gọi là Fetch users lấy dữ liệu người dùng từ API giữ chỗ của Json, đây là cùng URL mà chúng ta đã thấy trước đó, giữ chỗ Jon Doty code.com người dùng, nếu có sự cố với phản hồi, chúng tôi sẽ báo lỗi là không thể truy xuất người dùng và cập nhật lỗi

Nêu với bất kỳ lỗi nào. thông báo hoặc lỗi không xác định đã xảy ra nếu mọi thứ diễn ra suôn sẻ, chúng tôi sẽ cập nhật trạng thái người dùng với dữ liệu nhận được, dù sao cũng đặt tải là false khi hoàn tất, chúng tôi gọi hàm này là fetch users right Tránh khỏi hiệu ứng sử dụng phụ khi component được mount cho giao diện người dùng, chúng tôi sẽ xử lý từng trạng thái phù hợp nếu bạn vẫn Đang tải, chúng tôi sẽ hiển thị thông báo đang tải. Nếu gặp lỗi, chúng tôi sẽ hiển thị thông báo đó, và nếu mọi thứ hoạt động hoàn hảo, chúng tôi sẽ hiển thị qua người dùng của chúng tôi và hiển thị họ theo kiểu sạch sẽ user.name người dùng. Tên người dùng email và số điện thoại của họ Đúng vậy, các lớp Tailwind chủ yếu dành cho kiểu tóc nên tôi nghĩ bạn không cần quá lo lắng về việc đạt được điều này

Bố cục chính xác và như bạn thấy, đây gần như là mã react tiêu chuẩn với chỉ một kiến trúc RSC thêm sử dụng chỉ thị C ở phía trên để cho phép sử dụng móc trong trình duyệt nếu bạn điều hướng đến Local Host 3000 SL người dùng gạch nối client bạn sẽ thấy nhanh văn bản tải và sau đó danh sách người dùng được hiển thị đẹp mắt, chúng ta có Tên người dùng, tên người dùng, email và số điện thoại. Chúng tôi có dữ liệu của 10 người dùng khác nhau. Nhưng đây là điều bạn nên làm. Thực ra chỉ dùng các thành phần client để lấy dữ liệu khi bạn thực sự cần, ví dụ khi cần cập nhật theo thời gian thực hoặc khi dữ liệu của bạn phụ thuộc vào các tương tác phía client mà bạn không thể dự đoán ở phía server cho mọi thứ khác, thì

Cách được khuyến nghị để lấy dữ liệu là thông qua các thành phần máy chủ, chúng ta sẽ đề cập tiếp theo, trước đó chúng ta đã học cách lấy dữ liệu

---

**Điều hướng:** ← [Data Fetching](Bai_01_data-fetching.md) · Tiếp theo → [Fetching Data with Server Components](Bai_03_fetching-data-with-server-components.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
