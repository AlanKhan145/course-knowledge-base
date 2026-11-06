---
lesson_id: "M03-L04"
module: "Layouts, điều hướng và SEO"
title: "Routing Metadata"
source_version: "Next.js 15 App Router"
video_start: "01:03:45"
video_duration: "8 phút 01 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 04. Routing Metadata

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 8 phút 01 giây · **Mốc:** 01:03:45 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3825s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Routing Metadata**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Routing Metadata** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Routing Metadata** — Metadata API khai báo title, description, robots, Open Graph và các thông tin cho chia sẻ liên kết.
**2. Routing Metadata** — Dùng export const metadata cho giá trị tĩnh hoặc generateMetadata() khi phụ thuộc tham số/data.
**3. Routing Metadata** — Metadata là dữ liệu phía server giúp trình duyệt và trình thu thập thông tin hiểu nội dung trang.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/blog/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Bài viết: ${slug}`, description: `Nội dung bài ${slug}` };
}
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Routing Metadata**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Routing Metadata** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Routing Metadata** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Metadata API khai báo title, description, robots, Open Graph và các thông tin cho chia sẻ liên kết.

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

- **Video nguồn:** [Routing Metadata — 01:03:45](https://www.youtube.com/watch?v=k7o9R6eaSes&t=3825s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

chúng tôi hiểu đúng thì API siêu dữ liệu trong XS là một tính năng mạnh mẽ cho phép chúng tôi định nghĩa siêu dữ liệu cho từng trang tạo Chắc chắn nội dung của chúng tôi trông rất đẹp khi được chia sẻ hoặc lập chỉ mục bởi các công cụ tìm kiếm, bộ định tuyến ứng dụng cung cấp cho chúng tôi hai cách để xử lý Siêu dữ liệu trong bố cục. TSX hoặc trang. Bạn có thể xuất một đối tượng siêu dữ liệu tĩnh hoặc xuất một đối tượng động Chức năng tạo siêu dữ liệu trước khi chúng ta đi sâu dưới đây là những điểm chính bạn cần biết về cấu hình định tuyến Metadata cả hai đều bố cục. TSX và trang. TSX có thể xuất siêu dữ liệu bố cục áp dụng cho tất cả các Trang khi trang siêu dữ liệu đặc thù cho trang đó theo thứ tự từ trên xuống bắt đầu từ cấp gốc khi

siêu dữ liệu tồn tại ở nhiều vị trí dọc theo tuyến đường chúng hợp nhất với siêu dữ liệu trang ghi đè metadata bố cục cho Đối chiếu thuộc tính, hãy bắt đầu với mã VS và bắt đầu với phương pháp đối tượng metadata tĩnh, chúng ta sẽ giữ nguyên Dữ liệu metad hiện có trong bố cục gốc tiêu đề tệp TSX mô tả nexs được tạo bởi nexs trong trang về các tuyến đường của chúng tôi. TSX xuất một đối tượng siêu dữ liệu để xuất siêu dữ liệu const với thuộc tính tiêu đề được đặt thành about code Evolution trong khi cả layout và Page có thể có siêu dữ liệu, siêu dữ liệu trang được ưu tiên khi chúng chồng lấn, hãy cùng kiểm tra điều này trên trình duyệt, xem xét Trang chủ các yếu tố bảng bạn sẽ thấy tiêu đề tiếp theo và mô tả được tạo bởi NEX sh, điều này đến từ chúng tôi

bố cục. Dữ liệu metadata TSX bây giờ khi chúng ta vào localhost 3000 slab, bạn sẽ nhận thấy tiêu đề thay đổi thành about code Evolution trong khi vẫn giữ nguyên cùng một mô tả được tạo bởi next shares, điều này xảy ra vì khi các route có nhiều đối tượng metadata chúng Hợp nhất với các đoạn sâu hơn được ưu tiên vì khoảng PACH sâu hơn bố cục gốc của nó ghi đè tiêu đề bố cục về mã Evolution ghi đè nextjs mô tả giữ nguyên vì nó không bị ghi đè, nó chưa bao giờ được định nghĩa trên trang. TSX, mẫu này hoạt động giống nhau dù bạn lồng sâu đến đâu bố cục và trang là và đây là cách cấu hình đối tượng metadata tĩnh hoạt động trong nextjs. Tiếp theo, hãy cùng xem xét Dynamic.

siêu dữ liệu Điều này rất hữu ích khi siêu dữ liệu của bạn phụ thuộc vào thông tin động như thông số tuyến đường hiện tại và dữ liệu bên ngoài hoặc siêu dữ liệu được định nghĩa trong các phân đoạn cha, bạn có thể Định nghĩa nó bằng cách xuất một hàm tạo siêu dữ liệu từ một bố cục. TSX hoặc trang. Ví dụ về file perfect của TSX là một route động như product ID thay vì cùng tiêu đề cho Mỗi sản phẩm xảy ra với một đối tượng siêu dữ liệu tĩnh, chúng ta có thể tạo un cho mỗi sản phẩm, đây là cách chúng ta thiết lập hàm tạo siêu dữ liệu trong PAGE. TSX: Đầu tiên, chúng ta sẽ tạo kiểu props thành phần, sao cho kiểu props bằng các tham số, đây là một lời hứa giải quyết đến mã sản phẩm của chuỗi kiểu và sau đó chúng ta sẽ sử dụng kiểu này với thành phần của chúng ta, vì vậy các tham số của kiểu props cuối cùng ta sẽ

Định nghĩa hàm tạo siêu dữ liệu ở phía trên, nhập kiểu siêu dữ liệu từ tiếp theo, sau đó xuất một hàm gọi là tạo metadata chính xác tên này và đây là một hàm không đồng bộ, hàm nhận các tham số kiểu props và trả về một metadata hứa kiểu trong phần thân hàm, chúng ta chờ tham số và truy cập product ID, chúng ta gán nó cho một hằng số gọi là ID và chúng ta trả về một đối tượng metadata với tiêu đề được đặt thành product theo sau là product ID ngay bây giờ nếu chúng ta quay lại trình duyệt và ghé thăm sản phẩm SL1, kiểm tra tiêu đề, chúng ta thấy đó là sản phẩm số một, điều hướng đến sl00 và chúng ta có thể thấy sản phẩm tiêu đề. 100 cho ví dụ đơn giản này, chúng tôi sử dụng ID sản phẩm trực tiếp trong tiêu đề nhưng trong một ứng dụng thương mại điện tử thực tế

Khi bạn có thể có một danh mục sản phẩm, bạn có thể lấy chi tiết sản phẩm trong hàm này và đặt tiêu đề do đó chúng tôi không có API để làm việc nên sẽ giữ đơn giản và trả về một lời hứa dẫn đến 100 Vậy tiêu đề const bằng với Chờ Promise Mới, sẽ được giải quyết sau 100 mili giây, vì vậy đã đặt thời gian chờ Quyết định giả sử tiêu đề được lấy là từ iPhone, tiếp theo là ID, chúng ta trả về sản phẩm tiêu đề, tiếp theo là tiêu đề trong trình duyệt, nếu chúng ta điều hướng đến/ sản phẩm sl6, chúng ta có thể thấy tiêu đề là sản phẩm iPhone 16, đây là cách bạn cấu hình Metadata định tuyến động trong Next chia sẻ một điểm quan trọng tôi nên đề cập là bạn không thể dùng cả metadata

đối tượng và hàm tạo siêu dữ liệu trong cùng một đoạn tuyến là một trong hai và trước khi chúng ta tiếp tục có một trong hai giới hạn quan trọng bạn cần lưu ý khi làm việc với siêu dữ liệu: nó sẽ không hoạt động trên các trang được đánh dấu bằng chỉ thị sử dụng client để tôi chỉ cho bạn ý tôi là gì. Tôi sẽ tạo một route mới trong thư mục ứng dụng gọi là counter Tôi sẽ tạo một trang. Tệp TSX mặc định xuất một bộ đếm đơn giản số lượng thành phần Biến trạng thái thiết lập nhấn nút chức năng để tăng số lượng vì thành phần sử dụng hook của react, tôi sẽ đánh dấu nó bằng use client directive ở trên cùng tôi cũng sẽ đặt tiêu đề thành counter trong đối tượng metadata để xuất metadata const, đó là một đối tượng có tiêu đề được đặt

để đếm trong trình duyệt, khi bạn điều hướng đến bộ đếm SLC tuyến đường, bạn sẽ gặp lỗi mà bạn đang cố gắng xuất siêu dữ liệu từ một thành phần được đánh dấu với Use Client mà không được phép sẽ loại bỏ xuất hoặc chỉ thị sử dụng máy khách bạn sẽ gặp lỗi tương tự ngay cả khi xuất siêu dữ liệu tạo Chức năng Giải pháp là giữ siêu dữ liệu của bạn trong các thành phần máy chủ và trích xuất bất kỳ chức năng phía máy khách nào thành các thành phần riêng biệt, để tôi chỉ cho bạn mẫu đúng trong thư mục bộ đếm, tạo bộ đếm mới. Tệp TSX và di chuyển logic phía client khỏi trang. TSX vào counter. TSX Tôi sẽ sao chép mã và dán nó vào đây rồi gỡ bỏ

đối tượng metadata và đổi tên component thành counter thành export có tên, không nhất thiết phải là export có tên nhưng tôi thích Các thành phần của tôi sẽ được đặt tên là xuất khẩu trong trang Counter Routes. Tệp TSX giờ đây chúng ta có thể nhập thành phần bộ đếm và trả về vì vậy hãy trả về bộ đếm và đảm bảo nhập thành phần bộ đếm ở phía trên, gỡ bỏ chỉ thị sử dụng khách hàng và sử dụng State hook nhưng giữ nguyên đối tượng dữ liệu metod như hiện tại. Khi bạn làm mới tuyến counter SLC bạn sẽ thấy counter tiêu đề và trang hiển thị mà không có lỗi nào bạn cũng thấy cùng tiêu đề trong bộ đếm tab trình duyệt, đây là Cách được khuyến nghị để xử lý siêu dữ liệu trong các thành phần khách hàng, hãy cùng đi sâu hơn vào trường tiêu đề trong siêu dữ liệu, nơi chơi một

---

**Điều hướng:** ← [Multiple Root Layouts](Bai_03_multiple-root-layouts.md) · Tiếp theo → [title Metadata](Bai_05_title-metadata.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
