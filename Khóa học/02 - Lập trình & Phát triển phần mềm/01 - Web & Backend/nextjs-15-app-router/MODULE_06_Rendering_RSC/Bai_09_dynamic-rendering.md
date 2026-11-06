---
lesson_id: "M06-L09"
module: "Rendering và React Server Components"
title: "Dynamic Rendering"
source_version: "Next.js 15 App Router"
video_start: "04:02:04"
video_duration: "4 phút 42 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Dynamic Rendering

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 4 phút 42 giây · **Mốc:** 04:02:04 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=14524s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Dynamic Rendering**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Dynamic Rendering** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Dynamic Rendering** — Dynamic rendering phụ thuộc request-time data như cookie/headers hoặc chính sách lấy dữ liệu.
**2. Dynamic Rendering** — Thích hợp trang cá nhân hóa; cần đánh giá ảnh hưởng thời gian phản hồi và cache.
**3. Dynamic Rendering** — Cấu hình cụ thể và hành vi mặc định phải đối chiếu đúng Next.js version.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/account/page.tsx`

```tsx
import { cookies } from "next/headers";
export default async function AccountPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";
  return <p>Theme từ cookie: {theme}</p>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Dynamic Rendering**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Dynamic Rendering** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Dynamic Rendering** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Dynamic rendering phụ thuộc request-time data như cookie/headers hoặc chính sách lấy dữ liệu.

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

- **Video nguồn:** [Dynamic Rendering — 04:02:04](https://www.youtube.com/watch?v=k7o9R6eaSes&t=14524s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

chiến lược Kết xuất động là chiến lược kết xuất máy chủ, trong đó các tuyến đường được kết xuất Riêng biệt đối với từng người dùng khi họ gửi yêu cầu, điều này rất hữu ích khi bạn cần hiển thị dữ liệu hoặc thông tin cá nhân hóa chỉ có khi yêu cầu các thông tin như cookie hoặc tham số tìm kiếm URL, trang web tin tức cá nhân hóa trang mua sắm và nguồn cấp dữ liệu mạng xã hội là một số ví dụ mà việc hiển thị động hiện nay có lợi khi chúng ta Hiểu thế nào là rendering động và khi nào nên sử dụng nó, bạn có thể thắc mắc làm thế nào để thực hiện nó như thế nào? Chúng ta nói với SH tiếp theo rằng chúng ta muốn một route cụ thể được render động, nó khá đơn giản, tự động XJS

chuyển sang kết xuất động cho toàn bộ tuyến đường khi phát hiện cái gọi là hàm động hoặc API động trong XS, các hàm động này là cookie, headers, kết nối, chế độ nháp, tìm kiếm, prop, và sau đó là một API mới sử dụng bất kỳ trong số này sẽ tự động vận hành toàn bộ tuyến đường của bạn vào Dynamic rendering tại thời điểm yêu cầu. viết một đoạn mã để hiểu rõ hơn về mã VS. Hãy cùng chỉnh sửa thành phần About bằng cách nhập và sử dụng cookie Chức năng động ở phía trên nhập cookie từ các tiêu đề SL tiếp theo chuyển thành phần thành phần không đồng bộ chức năng nên xuất hàm không đồng bộ mặc định về trang và trong hàm nội dung hàm const cookie store là

bằng một cookie trọng lượng thì const theme bằng cookie store.get let's pass trong tên cookie là Chủ đề Chúng ta sẽ ghi chủ đề lên console Đừng quá lo lắng về chức năng cookie đúng không. bây giờ chúng ta chỉ đang dùng nó để kích hoạt Dynamic rendering cho trang giới thiệu này với đoạn mã này, hãy cùng xây dựng và kiểm tra đầu ra từ Dynamic rendering, tôi sẽ xóa thư mục tiếp theo trước rồi chạy npm run build trong terminal sẽ mất một chút thời gian để tạo thư mục build newex, trước tiên hãy xem kết quả build trong terminal chúng ta có thể thấy tất cả các tuyến đường được tạo ra được liệt kê, chú ý kỹ đến tuyến đường có biểu tượng F bên cạnh

nếu bạn kiểm tra chú giải, bạn sẽ thấy F chỉ Dynamic rendering server rendered on demand next next điểm quan trọng cần nhớ là các trang được render động sẽ được tạo trong thời gian build nếu chúng ta kiểm tra ứng dụng máy chủ tiếp theo, chúng tôi sẽ thấy các tệp HTML cho bảng điều khiển chỉ mục nhưng không tìm thấy tệp HTML cho trang lên cuối cùng, hãy bắt đầu ứng dụng với npm Run start trong trình duyệt khi chúng ta dùng slash around và làm trống bộ nhớ đệm và hard tải lại trang hiển thị theo yêu cầu và bạn sẽ thấy câu lệnh khóa trong giá trị chủ đề tên đầu cuối đèn này cookie đã được thiết lập khi chúng ta tìm hiểu về chức năng cookie trước đó, hãy xem tab mạng và bạn sẽ thấy

cả bản xem trước và phản hồi chứa HTML, mỗi lần làm mới bạn sẽ nhận được thời gian mới nhất nếu kiểm tra bản dựng thư mục vẫn chưa có tệp HTML nào được tạo trong thư mục máy chủ vì chúng tôi đang xây dựng một trang mới cho mỗi Đơn giản là không cần phải lưu trữ nó, những gì tôi vừa giải thích có thể có vẻ đơn giản sau khi hiểu về tĩnh Generation build tuy nhiên điều quan trọng là phải nhớ rằng việc xây dựng ứng dụng và chạy ứng dụng đã xây dựng là gần nhất có thể với triển khai sản xuất, nên tôi muốn bạn hiểu cách nó hoạt động, đây là những gì chúng ta đã học được rằng Dynamic rendering là một chiến lược trong đó HTML được tạo ra tự động ngay khi yêu cầu

bật nó khi gặp các chức năng động như tiêu đề cookie, chế độ kết nối sau hoặc tìm kiếm Params prop Dynamic rendering rất tuyệt vời cho nội dung cá nhân hóa như nguồn cấp dữ liệu mạng xã hội, một trong những điểm tuyệt vời nhất của NEX Shar là bạn không phải lo lắng về việc tự động render NEX Shar tĩnh và động chọn chiến lược kết xuất tối ưu cho mỗi tuyến dựa trên các tính năng và API bạn đang sử dụng, nhưng nếu bạn muốn ép một tuyến đường được render động Bạn có thể sử dụng export const Động bằng với việc ép Dynamic cont ở trên cùng của trang của bạn, giờ khi chúng ta đã hiểu về kết xuất tĩnh và động, hãy cùng tìm hiểu về việc tạo các tham số tĩnh thực sự

---

**Điều hướng:** ← [Static Rendering](Bai_08_static-rendering.md) · Tiếp theo → [generateStaticParams](Bai_10_generatestaticparams.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
