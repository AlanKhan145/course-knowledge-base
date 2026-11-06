---
lesson_id: "M08-L05"
module: "Data fetching và database"
title: "Sequential Data Fetching"
source_version: "Next.js 15 App Router"
video_start: "05:04:09"
video_duration: "5 phút 21 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 05. Sequential Data Fetching

> **Module 08 — Data fetching và database** · **Thời lượng video:** 5 phút 21 giây · **Mốc:** 05:04:09 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18249s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Sequential Data Fetching**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **data fetching và database**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Sequential Data Fetching** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Sequential Data Fetching** — Sequential fetch xảy ra khi request B cần dữ liệu A hoặc do await lồng nhau.
**2. Sequential Data Fetching** — Khi có phụ thuộc thực sự, ghi rõ dependency; khi không, tránh tạo waterfall.
**3. Sequential Data Fetching** — Đo thời gian từ công cụ mạng/logs trước khi tối ưu.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/users/[id]/page.tsx (pseudo)`

```text
const user = await getUser(userId);
// getOrders phụ thuộc user.id: tuần tự là hợp lý.
const orders = await getOrders(user.id);
return <UserOrders user={user} orders={orders} />;
// Các hàm getUser/getOrders do dự án tự triển khai.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Sequential Data Fetching**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Sequential Data Fetching** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Sequential Data Fetching** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Sequential fetch xảy ra khi request B cần dữ liệu A hoặc do await lồng nhau.

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

- **Video nguồn:** [Sequential Data Fetching — 05:04:09](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18249s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching](https://nextjs.org/docs/15/app/building-your-application/data-fetching).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

các mẫu tuần tự và song song trong các yêu cầu lấy dữ liệu tuần tự và cây thành phần phụ thuộc vào từng ngoài ra, điều này có thể dẫn đến thời gian tải lâu hơn, nhưng có thể có những trường hợp mô hình này là không thể tránh khỏi vì một người tải về. Tùy thuộc vào kết quả của phần còn lại. Hãy cùng hiểu rõ hơn với một ví dụ cho dữ liệu giả lập mà chúng ta sẽ tiếp tục dựa vào. lần này chúng ta sẽ sử dụng các endpoint của host/hosts và SL users để tạo một blog như vậy page the/ posts endpoint trả về một mảng gồm 100 bài đăng và mỗi bài đăng có ID người dùng host ID tiêu đề và nội dung the/ điểm người dùng trả về một mảng người dùng mà chúng ta đã từng sử dụng trước đây nếu chúng ta thêm ID người dùng vào/ người dùng chẳng hạn.

slash1 chúng ta lấy đối tượng người dùng riêng lẻ trong ứng dụng của mình, chúng ta sẽ tạo một thành phần bài đăng để lấy tất cả các bài đăng và với mỗi bài đăng, nó sẽ lấy tác giả bằng thuộc tính ID người dùng, đây là ví dụ hoàn hảo về tuần tự lấy vì chúng ta cần ID người dùng từ mỗi bài đăng trước khi có thể lấy tác giả của nó, hãy vào mã VS và lấy Bắt đầu trong thư mục ứng dụng của bạn, tạo một thư mục mới gọi là Posts Sequential và thêm một trang. Tệp TSX bên trong trước hãy định nghĩa typescript type type cho các bài đăng, mỗi bài đăng có user ID, id, id, tiêu đề và nội dung cho thành phần mà chúng ta sẽ gọi nó đăng tuần tự nên xuất hàm mặc định sau tuần tự làm cho thành phần này hỗ trợ lấy dữ liệu

Vì chúng ta vừa mới học các nguyên tắc cơ bản về lấy dữ liệu trong các thành phần máy chủ, tôi sẽ dán toàn bộ mã component ở đây và sau đó chúng ta sẽ đi qua từng bước, bắt đầu bằng cách lấy tất cả các bài đăng từ kiểu chỗ giữ chỗ Json của endpoint/ Posts code.com sloss, URL bạn có thể tìm thấy trong trình duyệt, chúng tôi chuyển đổi phản hồi sang Json rồi lọc các bài đăng thành chỉ bao gồm những bài có ID chia hết cho 10, điều này nhằm đảm bảo mỗi bài viết có một tác giả khác nhau Chỗ giữ chỗ Json có cùng một tác giả mỗi 10 bài đăng trong jsx cho mỗi bài đăng chúng tôi hiển thị tiêu đề bài viết thân bài và một chỗ giữ chỗ cho tên tác giả được lấy nếu chúng ta kiểm tra trình duyệt bằng cách điều hướng đến/đi theo thứ tự, chúng ta nên thấy 10

bài đăng đang được hiển thị, giờ hãy xem làm thế nào để lấy tác giả cho mỗi bài đăng trở lại trong VS Code, tạo một tệp mới gọi là tác giả. TSX bên trong thư mục post sequential nên tác giả. TSX: Định nghĩa kiểu tác giả, đây là kiểu người dùng nhưng chúng ta chỉ cần các trường ID và tên, nên ID của kiểu, số và chuỗi tên kiểu bây giờ hãy định nghĩa component author của chúng ta một lần nữa. Tôi sẽ dán toàn bộ mã component ở đây và sau đó. chúng ta sẽ đi qua từng bước, chúng ta có một thành phần hàm nhận một prop ID người dùng, gửi yêu cầu fch đến Json Điểm cuối ID người dùng SL và Trả về tên tác giả để sử dụng thành phần này cần nhập vào

thành phần trang sau tuần tự và thay thế tên tự động giữ chỗ bằng thành phần tác giả sẽ xóa Thẻ đoạn văn Gọi thành phần tác giả Đảm bảo nhập nó ở đầu cùng rồi nhập ID người dùng bằng với post. ID người dùng, nếu bạn kiểm tra trình duyệt, chúng ta sẽ thấy các bài đăng hiển thị với tên tác giả như Graham Ain H, v.v. việc lấy dữ liệu tuần tự trong thực tế, đầu tiên chúng ta lấy tất cả bài đăng từ API của post, sau đó với mỗi bài viết chúng ta render một yêu cầu lấy khác để lấy thông tin tác giả Mỗi yêu cầu tác giả phải chờ yêu cầu Post hoàn tất vì chúng ta cần ID người dùng từ từng bài đăng nên điều này hoạt động hoàn toàn tốt nhưng chúng ta có thể cải thiện bằng cách không

chặn giao diện người dùng trong khi lấy thông tin tác giả, chúng tôi muốn hiển thị bài đăng trước và phát trực tiếp tác giả trong Bối cảnh: Chúng ta có thể làm điều này bằng cách bao quanh thành phần tác giả trong một ranh giới suspense, tức là bao bọc nó bằng suspense từ React mà bạn nên đảm bảo nhập từ React ở phía trên, mở và đóng tác giả là prop con và trên suspense, chúng tôi chỉ định prop dự phòng là một thẻ div hiển thị tải author bằng màu xám trong thành phần author chúng ta có thể thêm độ trễ 1 giây để xem văn bản tải đang hoạt động chờ lời hứa mới được giải quyết sau 1 giây nếu chúng ta kiểm tra khi trình duyệt tải lại, chúng ta sẽ thấy các bài đăng hiển thị cùng với nội dung tác giả đang tải và sau một thời gian ngắn tác giả sẽ thấy

Tên nên được truyền trực tiếp trong thành phần của chúng tôi, hoạt động như mong đợi. Nếu bạn hiểu rõ về việc lấy dữ liệu tuần tự, chúng ta chuyển sang phần tiếp theo. Để lấy dữ liệu song song, bây giờ hãy xem xét việc lấy dữ liệu song song trong các yêu cầu lấy dữ liệu trong một tuyến đường đang rất háo hức.

---

**Điều hướng:** ← [Loading and Error States](Bai_04_loading-and-error-states.md) · Tiếp theo → [Parallel Data Fetching](Bai_06_parallel-data-fetching.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
