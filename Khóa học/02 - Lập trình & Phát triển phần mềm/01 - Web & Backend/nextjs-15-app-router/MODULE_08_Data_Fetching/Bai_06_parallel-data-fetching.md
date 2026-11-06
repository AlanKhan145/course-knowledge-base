---
lesson_id: "M08-L06"
module: "Data fetching và database"
title: "Parallel Data Fetching"
source_version: "Next.js 15 App Router"
video_start: "05:09:30"
video_duration: "5 phút 50 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Parallel Data Fetching

> **Module 08 — Data fetching và database** · **Thời lượng video:** 5 phút 50 giây · **Mốc:** 05:09:30 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18570s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Parallel Data Fetching**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **data fetching và database**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Parallel Data Fetching** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Parallel Data Fetching** — Dùng Promise.all khi nhiều truy vấn độc lập có thể chạy đồng thời.
**2. Parallel Data Fetching** — Bọc mỗi phần trong Suspense riêng khi muốn streaming độc lập.
**3. Parallel Data Fetching** — Cân nhắc lỗi một request làm fail cả Promise.all, hoặc dùng Promise.allSettled có kiểm soát.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/dashboard/page.tsx (pseudo)`

```text
const [users, products, orders] = await Promise.all([
  getUsers(), getProducts(), getOrders()
]);
return <Dashboard users={users} products={products} orders={orders} />;
// Các hàm và Dashboard ở đây là pseudocode mô tả kỹ thuật.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Parallel Data Fetching**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Parallel Data Fetching** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Parallel Data Fetching** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Dùng Promise.all khi nhiều truy vấn độc lập có thể chạy đồng thời.

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

- **Video nguồn:** [Parallel Data Fetching — 05:09:30](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18570s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching](https://nextjs.org/docs/15/app/building-your-application/data-fetching).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

được khởi tạo và chúng ta tải dữ liệu cùng lúc, điều này giúp giảm tổng thời gian tải dữ liệu. Hãy cùng hiểu tốt hơn với một ví dụ cho dữ liệu giả lập, chúng ta sẽ một lần nữa dựa vào API giữ chỗ Json lần này, tuy nhiên lần này chúng ta sẽ sử dụng các bài viết gạch chéo và album dấu gạch chéo trong điểm để tạo trang hồ sơ người dùng Điểm kết thúc bài viết trả về mảng 100 bài đăng Mỗi bài đăng có ID người dùng ID tiêu đề và nội dung Điểm cuối album trả về một mảng gồm 100 album mỗi album có ID người dùng và tiêu đề cho cả hai điểm cuối Chúng ta có thể thêm ID người dùng làm tham số truy vấn để lọc các bài đăng và album bởi người dùng nên ID người dùng dấu hỏi bằng một, bạn có thể thấy chúng ta có 10 bài đăng đều do cùng một người dùng viết.

tương tự, ID người dùng đánh dấu câu hỏi của album SL bằng một, chúng ta có 10 album được viết bởi cùng một người dùng nếu bạn đang xây dựng hồ sơ người dùng Chúng ta có thể muốn hiển thị cả bài đăng của người dùng và album của họ cạnh nhau vì các yêu cầu này không phụ thuộc vào nhau trên nhau, chúng ta có thể lấy chúng song song, hãy chuyển sang mã VS và xem điều này hoạt động trong thư mục ứng dụng của bạn, tạo một thư mục mới gọi là user có dấu gạch nối song song, chúng ta sẽ truyền user ID làm tham số route, vì vậy hãy tạo một thư mục ID. bên trong người dùng song song nên có dấu ngoặc vuông ID và thêm một trang. Tệp TSX bên trong bạn đã tạo một người dùng Dynamic route Đầu tiên, hãy định nghĩa typescript types post chứa user id id tiêu đề và nội dung và loại album mà

chứa ID người dùng và tiêu đề ID người dùng phổ biến ở hai loại nhưng ở đây ID và tiêu đề tham chiếu đến ID album và tiêu đề cho thành phần của chúng tôi, chúng tôi sẽ gọi nó là hồ sơ người dùng nên xuất hồ sơ người dùng hàm không đồng bộ mặc định, hãy thực hiện điều này component async để hỗ trợ lấy dữ liệu. Đây là mẹo chúng ta sẽ định nghĩa các hàm truy bắt dữ liệu bên ngoài thành phần tên hàm là get user posts và đây là một hàm easing lấy user ID làm tham số, nó lấy bài đăng cho cho ID từ API chỗ ngồi Json và trả về phản hồi sao cho const res bằng await fetch truyền trong Json Placeholder SL đăng dấu hỏi ID người dùng bằng tham số user ID và trả về phần còn lại.

Chức năng lấy album người dùng trên Json giống hệt nhưng với album thì tôi có thể sao chép mã và thay đổi tên hàm cũng như điểm cuối lấy album người dùng SL albums ID người dùng bằng với Quá khứ trong ID người dùng hiện nay hãy định nghĩa thành phần trang của chúng ta, thành phần sẽ nhận ID người dùng làm tham số route để chúng ta phân cấu trúc các tham số thuộc kiểu promise chứa ID kiểu chuỗi ID ở đây là tên thư mục của chúng ta, chúng ta sẽ chờ các tham số và phân cấu trúc ID người dùng từ đó, bây giờ chúng ta sẽ khởi tạo cả hai yêu cầu lấy dữ liệu song song bằng promise.all để const đăng dữ liệu là tương tự để lấy các máy chủ người dùng truyền ID tương tự như const albums dữ liệu cũng bằng để lấy album người dùng truyền ID rồi gọi

A Wait Promise. Tất cả chúng tôi chỉ định một mảng dữ liệu bài đăng và dữ liệu album, chúng tôi gán cho các bài đăng và album do tính chất của không đồng bộ và chờ một yêu cầu chờ bên trong thành phần sẽ chặn bất kỳ yêu cầu nào bên dưới nó, đây là lý do chúng tôi khởi tạo cả hai trước khi chờ bất kỳ yêu cầu nào cho jsx, tôi sẽ dán toàn bộ mã component để tiết kiệm thời gian, đây là bố cục hai cột với các bài đăng bên trái và album bên phải, hãy xem qua trình duyệt, điều hướng đến user parallel SL ID, ví dụ như vậy và chúng ta thấy 10 bài viết bên trái và 10 album bên phải Việc lấy dữ liệu của chúng tôi hoạt động như mong đợi chìa khóa để song song Lấy dữ liệu là khởi tạo các yêu cầu trước khi chờ bất kỳ yêu cầu nào, hãy thêm một phần tải. Tệp TSX và một độ trễ cho hai

chức năng này để thấy điều này hoạt động, tức là trễ một giây để nhận bài đăng người dùng và 1 giây để lấy album người dùng tiếp theo trên trang. TSX tạo đang tải. TSX với một thành phần react đơn giản, tôi đã dùng t lớp CSS để tạo một loading spinner nếu chúng ta truy cập SL user parallel Ví dụ SL2, cả hai cột sẽ tải cùng lúc sau một khoảng trễ 1 giây, điều này nhanh hơn nhiều so với chờ một giây Các bài đăng và thêm một giây cho việc lấy dữ liệu song song của album đặc biệt hữu ích khi bạn có nhiều dữ liệu độc lập mà bạn cần lấy thay vì lấy từng phần một, bạn có thể lấy Tất cả cùng lúc và giảm tổng thời gian tải. Được rồi, giờ bạn sẽ nắm chắc cách và thời điểm nên làm

sử dụng cả việc lấy dữ liệu tuần tự và song song trong ứng dụng của bạn, sau khi chúng ta đã xem xét cách lấy dữ liệu từ các điểm cuối API

---

**Điều hướng:** ← [Sequential Data Fetching](Bai_05_sequential-data-fetching.md) · Tiếp theo → [Fetching From a Database](Bai_07_fetching-from-a-database.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
