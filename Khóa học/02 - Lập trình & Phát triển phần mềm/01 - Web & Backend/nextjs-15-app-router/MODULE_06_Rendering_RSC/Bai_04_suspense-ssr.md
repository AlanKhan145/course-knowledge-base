---
lesson_id: "M06-L04"
module: "Rendering và React Server Components"
title: "Suspense SSR"
source_version: "Next.js 15 App Router"
video_start: "03:28:17"
video_duration: "6 phút 27 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Suspense SSR

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 6 phút 27 giây · **Mốc:** 03:28:17 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12497s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Suspense SSR**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Suspense SSR** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Suspense SSR** — React Suspense cho phép hiển thị fallback cho một phần UI chưa sẵn sàng.
**2. Suspense SSR** — SSR streaming có thể gửi HTML theo từng phần để cải thiện perceived performance.
**3. Suspense SSR** — Nên đặt boundary theo từng khu vực dữ liệu chậm thay vì chặn toàn bộ trang.

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
async function SlowStats() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <div>42 đơn hàng</div>;
}
export default function Dashboard() {
  return <><h1>Dashboard</h1><Suspense fallback={<p>Đang tải thống kê...</p>}><SlowStats /></Suspense></>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Suspense SSR**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Suspense SSR** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Suspense SSR** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** React Suspense cho phép hiển thị fallback cho một phần UI chưa sẵn sàng.

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

- **Video nguồn:** [Suspense SSR — 03:28:17](https://www.youtube.com/watch?v=k7o9R6eaSes&t=12497s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

đã phát hiện ra những hạn chế chính của nó, hãy tóm tắt nhanh các thách thức trước tiên, chúng ta không thể bắt đầu render HTML cho đến khi tất cả dữ liệu được lấy trên máy chủ ngay khi chúng ta cần chờ tất cả JavaScript tải xong trên máy khách trước khi quá trình hydration bắt đầu và thứ ba, mọi thành phần cần được ngập nước trước khi bất kỳ thành phần nào trở nên tương tác, những vấn đề này tạo thành một hoặc hiệu ứng thác nước Nothing khá kém hiệu quả, đặc biệt khi một số phần của ứng dụng bạn chậm hơn so với những người khác để khắc phục những hạn chế về hiệu năng này, React 18 đã giới thiệu kiến trúc SSR hồi hộp mới này kiến trúc cho phép bạn sử dụng thành phần hồi hộp để mở khóa hai tính năng SSR thay đổi cuộc chơi: HTML streaming

Trên server và selective hydration trên client, hãy cùng khám phá chi tiết hai tính năng này khi chúng ta đã thảo luận về một một phút trước, truyền thống SSR là All or Nothing, máy chủ sẽ hiển thị toàn bộ HTML rồi gửi đến client hiển thị HTML này và chỉ sau khi tải đầy đủ gói JavaScript thì react mới tiến hành Tưới nước toàn bộ ứng dụng để tăng tính tương tác, nhưng React 18 cho chúng ta cách tốt hơn. Đây là một cách tương tự. trực quan hóa từ góc nhìn giao diện người dùng: đầu tiên bạn render toàn bộ HTML, client cuối cùng sẽ nhận được nó Bạn tải toàn bộ mã và làm ướt toàn bộ ứng dụng, nhưng React 18 cho chúng tôi cách tốt hơn khi bạn bao bọc một thứ gì đó

như khu vực nội dung chính của bạn trong thành phần hồi hộp, bạn đang nói với phản ứng này, đừng chờ phần này bắt đầu. khi phát trực tiếp phần còn lại của trang, react sẽ hiển thị một vòng quay tải cho phần đã được bao bọc trong khi nó hoạt động trên phần còn lại của trang, khi máy chủ cuối cùng đã có dữ liệu sẵn sàng cho phần chính đó, react sẽ stream thêm HTML bổ sung qua luồng liên tục cùng với một chút JavaScript biết chính xác vị trí để đặt html đó Phần thú vị: người dùng có thể xem nội dung của phần chính ngay cả trước khi React hoàn tất tải trên trình duyệt của họ Điều này giải quyết vấn đề đầu tiên của chúng ta: bạn không cần phải lấy tất cả mọi thứ trước khi có thể hiển thị bất cứ điều gì, nếu một phần cụ thể là

chậm và có thể làm chậm HTML ban đầu, không vấn đề gì, nó có thể được tích hợp liền mạch vào luồng sau này khi nó sẵn sàng, đây là bản chất của cách sự hồi hộp hỗ trợ việc stream HTML phía serers, nhưng chúng ta vẫn có thêm một trở ngại nữa để vượt qua ngay cả khi gửi HTML nhanh hơn, chúng ta không thể bắt đầu làm ẩm cho đến khi tải xong tất cả JavaScript cho phần chính, nếu đó là một phần mã lớn, chúng tôi vẫn đang để người dùng phải chờ đợi để có thể tương tác với trang để giảm thiểu vấn đề này, có thể sử dụng việc chia nhỏ mã cho phép bạn thông báo cho người đóng gói các phần này của Mã không gấp, hãy tách chúng thành các script riêng biệt, sử dụng React Lazy cho việc tách mã rất mạnh mẽ

ở đây nó tách mã các phần chính của bạn khỏi khối JavaScript B cốt lõi, nghĩa là trình duyệt có thể tải xuống React và hầu hết các ứng dụng của bạn lập trình độc lập mà không bị kẹt chờ đợi mã phần chính và Đây là lúc mọi thứ trở nên thực sự thú vị khi bạn bao bọc phần chính của bạn trong một thành phần hồi hộp mà bạn đang Không chỉ bật stream mà còn nhắc React rằng bạn có thể làm ướt các phần khác của trang trước khi mọi thứ hoàn toàn ổn Đây chính là cái gọi là Hydration chọn lọc và đây là một bước ngoặt, nó cho phép cung cấp nước cho các bộ phận của trang khi chúng có sẵn ngay cả trước khi phần HTML còn lại và mã JavaScript được tải xuống đầy đủ

từ góc nhìn của người dùng, đây là những gì xảy ra đầu tiên khi họ thấy nội dung không tương tác được phát trực tiếp dưới dạng HTML mặc dù các phần chính mà mã JavaScript chưa được tải về, react bắt đầu tưới nước chọn lọc và các phần khác của Trang có thể trở nên tương tác Phần chính sẽ bắt kịp và trở nên tương tác khi mã của nó được tải, điều này rất quan trọng vì nó có nghĩa là một một phần lớn script JavaScript sẽ không cản trở phần còn lại của trang bạn trở nên tương tác nhưng nó vẫn có thể cân bằng Bổ sung nước chọn lọc tốt hơn cũng giải quyết vấn đề thứ ba: nhu cầu bổ sung nước cho mọi thứ để tương tác Anything React bắt đầu cấp nước ngay khi có thể, nghĩa là người dùng có thể tương tác với các thứ như đầu và bên hông

Điều hướng mà không cần chờ nội dung chính và điểm hay nhất là React tự động xử lý tất cả những điều này, đây là một điều Rất thông minh về cách React xử lý việc cấp nước trong các tình huống nhiều thành phần đang chờ cấp nước. ưu tiên việc cung cấp nước dựa trên các thành phần mà người dùng đang cố gắng tương tác, ví dụ react sắp cấp nước Điều hướng bên hông, nhưng người dùng nhấp vào khu vực nội dung chính, phản ứng sẽ ngay lập tức chuyển sang chế độ và làm ẩm cho người đã nhấp thành phần trong giai đoạn ghi nhận sự kiện nhấp chuột, điều này có nghĩa là thành phần đã sẵn sàng phản hồi ngay bên cạnh Điều hướng nó sẽ được làm ẩm sau đó nên đó là phản ứng của kiến trúc SSR hồi hộp mới đã giải quyết hiệu quả tất cả

ba nhược điểm lớn của SSR truyền thống nhưng chúng ta vẫn chưa hoàn thành, mặc dù có những cải tiến trong SSR vẫn còn Vẫn còn một số thách thức chúng ta cần suy nghĩ trước dù chúng ta đang truyền mã JavaScript lên trình duyệt từng chút một Nhưng cuối cùng, người dùng vẫn phải tải toàn bộ mã nguồn cho một trang web khi chúng tôi liên tục thêm các tính năng vào Ứng dụng Mã này ngày càng phát triển và điều này dẫn đến một câu hỏi quan trọng liệu người dùng có thực sự cần tải xuống nhiều dữ liệu như vậy không? Rồi hiện tại còn một vấn đề khác là mọi thành phần React đều được cấp nước ở phía khách hàng dù cần thiết hay không Dù có tính tương tác hay không, điều này có nghĩa là chúng ta đang sử dụng tài nguyên và làm chậm thời gian tải cũng như thời gian tương tác bằng

Ẩm các thành phần có thể chỉ là hàm lượng tĩnh, điều này dẫn đến một câu hỏi khác liệu tất cả các thành phần có phải Uống nước ngay cả những người không cần tương tác, và đây là thử thách thứ ba: ngay cả các nhân viên phục vụ cũng rất khó khăn tốt hơn trong việc xử lý xử lý nặng, chúng tôi vẫn đang làm cho người dùng thiết bị của phần lớn công việc JavaScript này thực sự có thể Hãy làm chậm mọi thứ, đặc biệt trên các thiết bị yếu hơn, và điều này dẫn đến một câu hỏi quan trọng khác phải không? Tận dụng máy chủ nhiều hơn, những thách thức này chỉ ra điều gì đó lớn hơn. Chúng ta cần những cách thông minh hơn để xây dựng nhanh chóng. các ứng dụng vượt ra ngoài phương pháp dựng hình truyền thống Giải pháp chính xác là điều chúng tôi sẽ làm

Tiếp theo, chúng ta đã thấy cách render Reacts đã phát triển từ rendering phía client sang rendering phía SERs và sau đó là

---

**Điều hướng:** ← [Server-side Rendering (SSR)](Bai_03_server-side-rendering-ssr.md) · Tiếp theo → [React Server Components](Bai_05_react-server-components.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
