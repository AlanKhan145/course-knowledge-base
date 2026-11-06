---
lesson_id: "M08-L07"
module: "Data fetching và database"
title: "Fetching From a Database"
source_version: "Next.js 15 App Router"
video_start: "05:15:20"
video_duration: "6 phút 27 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Fetching From a Database

> **Module 08 — Data fetching và database** · **Thời lượng video:** 6 phút 27 giây · **Mốc:** 05:15:20 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18920s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Fetching From a Database**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **data fetching và database**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Fetching From a Database** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Fetching From a Database** — Kết nối DB trên server thông qua ORM hoặc driver, không đưa chuỗi kết nối vào client.
**2. Fetching From a Database** — Dùng connection pooling và parameterized queries; validate params trước khi truy vấn.
**3. Fetching From a Database** — Trong demo có thể dùng SQLite/PostgreSQL; production cần biến môi trường và migration.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/lib/db.ts + src/app/products/page.tsx`

```tsx
// Cài driver: npm install pg
// src/lib/db.ts
import "server-only";
import { Pool } from "pg";
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// src/app/products/page.tsx
import { pool } from "@/lib/db";
export default async function Products() {
  const { rows } = await pool.query<{ id: number; name: string }>("SELECT id, name FROM products ORDER BY id LIMIT 20");
  return <ul>{rows.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
// Cần npm i -D @types/pg, bảng products và DATABASE_URL hợp lệ.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Fetching From a Database**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Fetching From a Database** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Fetching From a Database** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Kết nối DB trên server thông qua ORM hoặc driver, không đưa chuỗi kết nối vào client.

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

- **Video nguồn:** [Fetching From a Database — 05:15:20](https://www.youtube.com/watch?v=k7o9R6eaSes&t=18920s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching](https://nextjs.org/docs/15/app/building-your-application/data-fetching).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

sử dụng API fetch, hãy cùng khám phá việc lấy dữ liệu từ cơ sở dữ liệu trong các thành phần máy chủ, vui lòng chú ý đặc biệt đến Phần này vì những gì chúng ta sắp đề cập rất quan trọng, nó là nền tảng cho các biến đổi dữ liệu và máy chủ các hành động sắp tới. Bây giờ có hai lý do chính tại sao việc lấy dữ liệu trực tiếp từ cơ sở dữ liệu lại mạnh mẽ. Đầu tiên, các thành phần máy chủ có Truy cập trực tiếp vào tài nguyên bên SERs giúp các tương tác cơ sở dữ liệu trở nên liền mạch vì mọi thứ đều xảy ra trên máy chủ, chúng ta không cần API routes hay lo lắng về việc tiết lộ thông tin nhạy cảm cho client để hiểu Cách lấy dữ liệu từ cơ sở dữ liệu. Chúng tôi sẽ làm việc với hai công cụ cực kỳ hữu ích: sqlite và Prisma bây giờ.

Đừng lo, nếu bạn chưa từng nghe về những thứ này, tôi sẽ giải thích rất đơn giản, sqlite rất đơn giản cơ sở dữ liệu dựa trên tệp để lưu trữ thông tin trong dự án của bạn, không cần máy chủ hay thiết lập phức tạp và nó Hoàn hảo để Học và tạo mẫu Prisma là công cụ giúp bạn dễ dàng giao tiếp với cơ sở dữ liệu của mình, giống như vậy Một trình dịch giúp mã của bạn giao tiếp với SQL nhẹ nhàng, hãy quay lại mã VS và đi qua quá trình thiết lập từng bước một, tôi rất khuyên bạn nên theo dõi tôi trước khi cài đặt terminal Prisma CLI với tư cách là Dev dependency npm install Prisma [Nhạc] DD second initialize Prisma với sqlite npx Prisma init -- data source- provider

sqlite tạo một thư mục Prisma với một lược đồ. Tệp Prisma để đơn giản hóa cài đặt, cập nhật URL cơ sở dữ liệu trong tệp này vào tệp dấu chấm .db chúng ta cũng sẽ thêm tệp cơ sở dữ liệu vào cơ sở dữ liệu tệp ignore của git Prisma slam. Bước thứ ba của DB trong lược đồ. Prisma thêm mô hình sản phẩm với ID tiêu đề giá và mô tả tùy chọn đại diện cho các bảng trong cơ sở dữ liệu cơ sở của mô hình sản phẩm tương ứng với bảng sản phẩm cuối cùng chạy một lần di chuyển để tạo các bảng cơ sở dữ liệu từ lược đồ Prisma trong terminal chạy lệnh npx Prisma migr Dev D- name trong lệnh này thực hiện ba việc tạo một tệp di chuyển trong Prisma migrations thực hiện quá trình di chuyển

trên cơ sở dữ liệu của bạn sẽ cài đặt gói client Prisma và tạo ra client Prisma mà chúng ta sẽ tương tác với cơ sở dữ liệu, cơ sở dữ liệu và bảng của chúng ta đã sẵn sàng. Bây giờ, hãy định nghĩa các thao tác cơ sở dữ liệu trong thư mục nguồn. Tạo một Tệp mới tên là Prisma db. TS để tiết kiệm thời gian, tôi sẽ dán mã khi làm nhưng bạn có thể tìm toàn bộ file trên GitHub của tôi repo và liên kết đến đó nằm trong phần mô tả bên dưới, bắt đầu bằng cách nhập gói khách Prisma nhập ứng dụng khách Prisma từ tại ứng dụng Prisma ở dòng tiếp theo tạo một phiên bản khách hàng Prisma mới const Prisma là bằng với New Prisma client với dấu ngoặc đơn, tiếp theo chúng ta có hàm seed products này, nó kiểm tra xem một bảng có trống không và nếu

có thêm ba sản phẩm mẫu sản phẩm 1 2 3 với giá cả và mô tả không? Tiếp theo chúng ta sẽ định nghĩa CRUD của mình Đầu tiên chúng ta phải lấy các sản phẩm sử dụng Prisma để lấy product.in sản phẩm để lấy tất cả sản phẩm. Tiếp theo, chúng ta có sản phẩm sử dụng sản phẩm Prisma. tìm duy nhất để lấy một sản phẩm duy nhất theo ID của nó, tiếp theo chúng ta có sản phẩm ADD sử dụng Prisma làm sản phẩm. create để thêm sản phẩm mới, chúng tôi có sản phẩm cập nhật sử dụng sản phẩm Prisma do. cập nhật để cập nhật một sản phẩm hiện có cuối cùng chúng ta có sản phẩm xóa sử dụng sản phẩm Prisma. xóa để xóa một sản phẩm mà tôi đã đã thêm độ trễ 1,5 giây cho mỗi thao tác CRUD để mô phỏng độ trễ, bạn sẽ không gặp phải điều này trong môi trường sản xuất nếu

Bạn mới sử dụng Prisma, đừng quá lo lắng về chi tiết cú pháp, tất cả những gì bạn cần biết là chúng tôi có một cơ sở dữ liệu với bảng sản phẩm và các chức năng để thực hiện các thao tác cred trên bảng đó, tất cả ngay bây giờ là phần thú vị Hãy lấy dữ liệu sản phẩm từ một trang EXs trong thư mục ứng dụng, tạo một thư mục cơ sở dữ liệu sản phẩm mới với trang đó. TSX tệp trước Định nghĩa loại sản phẩm Mỗi sản phẩm có ID tiêu đề giá và mô tả tùy chọn tương tự như Mô hình trong lược đồ. Tệp Prisma sau đó Định nghĩa trang DB sản phẩm hàm không đồng bộ mặc định xuất thành phần react từ server Các thành phần chạy trên máy chủ, chúng ta có thể giao tiếp trực tiếp với cơ sở dữ liệu mà không cần API từ prismad db. TS nhập get

ở đây tôi đang dùng một đường dẫn ELAS tham chiếu đến thư mục nguồn trong component react compon. chờ gọi hàm và lưu kết quả trong biến products sao cho const các tích kiểu product bằng chờ nhận sản phẩm cho jsx, chúng ta sẽ sử dụng phương thức map để liên kết thông tin sản phẩm và sử dụng tailin. để làm cho nó trông đẹp mắt, tôi sẽ sao chép và dán mã để tiết kiệm thời gian, nên các sản phẩm. bản đồ và chúng ta liên kết tiêu đề sản phẩm, mô tả và giá, chúng tôi sử dụng ID như một phần của đạo cụ chính trong mục danh sách, lưu tệp vào/ sản phẩm, gạch nối cơ sở dữ liệu trong trình duyệt của bạn và bạn sẽ thấy ba sản phẩm được hiển thị từ cơ sở dữ liệu của bạn. Chúng ta đã có một cách hoạt động.

Cơ sở dữ liệu Prisma plus sqlite với truy cập trực tiếp từ thành phần máy chủ nexs của chúng tôi, không cần lớp API và trong khi chúng tôi sử dụng sqlite ở đây, các khái niệm này áp dụng cho bất kỳ cơ sở dữ liệu nào bạn thích, điểm then chốt là bạn có thể truy vấn cơ sở dữ liệu trực tiếp từ thành phần máy chủ năm sau của bạn. Tất nhiên. Tiếp theo, chúng ta sẽ xây dựng trên nền tảng này để học hỏi. Về các biến đổi dữ liệu và hành động của máy chủ, chúng tôi đã đề cập cách lấy dữ liệu bằng các thành phần máy chủ trong ứng dụng

---

**Điều hướng:** ← [Parallel Data Fetching](Bai_06_parallel-data-fetching.md) · Tiếp theo → [Data Mutations](../MODULE_09_Server_Actions/Bai_01_data-mutations.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
