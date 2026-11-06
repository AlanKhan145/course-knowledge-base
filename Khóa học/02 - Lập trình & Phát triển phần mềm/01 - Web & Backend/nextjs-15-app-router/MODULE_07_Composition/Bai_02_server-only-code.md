---
lesson_id: "M07-L02"
module: "Thiết kế Server/Client Component"
title: "Server-only Code"
source_version: "Next.js 15 App Router"
video_start: "04:19:28"
video_duration: "5 phút 03 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Server-only Code

> **Module 07 — Thiết kế Server/Client Component** · **Thời lượng video:** 5 phút 03 giây · **Mốc:** 04:19:28 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15568s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Server-only Code**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **thiết kế server/client component**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Server-only Code** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Server-only Code** — Dùng server-only để báo lỗi nếu module server bị import vào client bundle.
**2. Server-only Code** — Giữ truy vấn DB, secret key và logic nội bộ trong server module, Route Handler hoặc Server Action.
**3. Server-only Code** — NEXT_PUBLIC_* là biến môi trường công khai cho trình duyệt, không chứa secret.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/lib/db.ts`

```tsx
import "server-only";
export async function getSecretData() {
  const key = process.env.INTERNAL_API_KEY;
  if (!key) throw new Error("Chưa cấu hình API key ở server");
  return { enabled: true };
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Server-only Code**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Server-only Code** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Server-only Code** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Dùng server-only để báo lỗi nếu module server bị import vào client bundle.

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

- **Video nguồn:** [Server-only Code — 04:19:28](https://www.youtube.com/watch?v=k7o9R6eaSes&t=15568s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

mẫu, hãy nói về sự tách biệt mã serveron khi xây dựng các ứng dụng NS, một số mã được đặt cụ thể Được thiết kế để chạy độc quyền trên máy chủ, hãy nghĩ về các module hoặc hàm S xử lý biến môi trường giao tiếp trực tiếp với cơ sở dữ liệu hoặc xử lý thông tin nhạy cảm vì các mô-đun JavaScript có thể được chia sẻ giữa mã thành phần máy chủ và máy khách dành cho máy chủ có thể vô tình tìm đến máy khách, đây là tin xấu vì nó có thể làm hỏng gói JavaScript của bạn, làm lộ truy vấn cơ sở dữ liệu khóa bí mật và logic kinh doanh nhạy cảm của bạn, nên rất tuyệt quan trọng là giữ mã serveron tách biệt với mã phía client, may mắn là có một giải pháp hay cho vấn đề này mà chúng ta có thể sử dụng

một gói có tên server only gây lỗi thời gian xây dựng nếu ai đó vô tình nhập mã máy chủ vào Component client: Để tôi chỉ cho bạn cách hoạt động, hãy cùng vào mã VS và tạo hai thành phần. Đầu tiên, chúng ta sẽ tạo một trang SL route của máy chủ. TSX với một thành phần react đơn giản xuất trang định tuyến hàm mặc định của máy chủ, trả về một H1 tag server route thì chúng ta sẽ tạo lại trong thư mục một lần nữa trang SL định tuyến khách hàng. TSX với một thành phần react khác thêm chỉ thị sử dụng client ở trên cùng xuất tuyến client mặc định trả về một tuyến khách phần tử H1 ngay trong thư mục nguồn, hãy tạo một thư mục utils mới với một tệp mới gọi là server

utils dots server dấu gạch nối utils dots chúng ta sẽ tạo một hàm chỉ chạy trên máy chủ Việc triển khai thực tế hiện tại không quan trọng, chúng ta chỉ muốn minh họa khái niệm, nên đây là một hàm với câu lệnh loog và một giá trị trả về hàm phía máy chủ const console.log và một câu lệnh trả về này chức năng có thể làm đủ loại việc phía máy chủ sử dụng các gói npm truy cập biến môi trường cho API Khóa thực hiện các cuộc gọi cơ sở dữ liệu hoặc xử lý logic nghiệp vụ nhạy cảm và tính toán trước khi trả về giá trị Việc triển khai hiện tại không quan trọng nhưng hãy sử dụng hàm này trong thành phần máy chủ của chúng ta. Vậy là trong máy chủ.

Trang tuyến đường. TSX nhập hàm site máy chủ từ util SLS server utils và trong phần thân hàm, kết quả const là bằng với chức năng site máy chủ tìm kết quả trong H1 trên trình duyệt khi bạn truy cập dấu gạch nối máy chủ Local Host 3000 SLS bạn sẽ thấy thông báo nhật ký với thẻ server và bạn cũng sẽ thấy chúng trong terminal, đó là vì mã đang chạy trên máy chủ, chúng ta cũng thấy kết quả máy chủ là một phần của thẻ H1. Bây giờ điều gì xảy ra nếu chúng ta sử dụng. Chức năng này trong thành phần khách hàng sao chép câu lệnh nhập và dán vào trang tuyến khách hàng. Kết quả TSX const là tương đương với chức năng trang máy chủ và chúng tôi liên kết kết quả nếu bạn điều hướng đến/ định tuyến khách hàng bạn sẽ nhận thấy các thông báo nhật ký nhưng điều này

thời gian không có thẻ server trong tuyến terminal/client, chúng ta thấy các thông báo nhật ký nhưng lại thấy chúng trong trình duyệt với tư cách là thành phần máy khách thực thi, đây chính xác là điều chúng tôi muốn ngăn chặn dựa trên bản chất của thao tác trong chức năng bên của máy chủ Điều quan trọng là phải đảm bảo chỉ thực thi trên máy chủ nếu các mã này kết thúc Trong gói khách hàng, bạn đang xem xét các vấn đề hiệu năng tiềm ẩn do kích thước gói lớn hơn và tính toán nặng Rủi ro bảo mật từ logic nhạy cảm bị lộ và các lỗi chức năng có thể xảy ra khi mã riêng của máy chủ cố gắng chạy Trong trình duyệt, đây là nơi gói server only có tác dụng, hãy cùng cài đặt nó với npm install server.

chỉ có dấu gạch nối khi đã cài đặt, nhập nó vào máy chủ của bạn, sử dụng tệp dots ở trên cùng, chỉ nhập dấu gạch nối máy chủ ngay bây giờ nếu có ai đó cố gắng nhập module này vào một thành phần khách, bản dựng sẽ thất bại ngay lập tức, ngăn chặn bất kỳ khả năng nào các vấn đề liên quan đến việc tiết lộ mã phía máy chủ cho máy khách giống như có một nhân viên bảo vệ ngăn chặn mã máy chủ từ việc lén lút vào gói máy khách trong tóm tắt giữ mã chỉ máy chủ tách biệt với mã phía máy khách không chỉ là thực hành tốt mà còn rất cần thiết cho hiệu suất bảo mật và độ tin cậy của gói chỉ dành cho máy chủ Giúp thực thi sự tách biệt này, làm cho ứng dụng của bạn mạnh mẽ và an toàn hơn. Được rồi, hãy chuyển sang bước tiếp theo.

---

**Điều hướng:** ← [Server and Client Composition Patterns](Bai_01_server-and-client-composition-patterns.md) · Tiếp theo → [Third Party Packages](Bai_03_third-party-packages.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
