---
lesson_id: "M09-L10"
module: "Đột biến dữ liệu và form"
title: "Form Component"
source_version: "Next.js 15 App Router"
video_start: "06:04:30"
video_duration: "7 phút 36 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 10. Form Component

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 7 phút 36 giây · **Mốc:** 06:04:30 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=21870s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Form Component**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Form Component** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Form Component** — Form component trong Next.js hỗ trợ điều hướng theo query và tích hợp với action; cần phân biệt với HTML form.
**2. Form Component** — Chọn form phù hợp tình huống search GET hoặc mutation action.
**3. Form Component** — Kiểm tra encoding, trạng thái navigation và semantics để tránh thay đổi UX ngoài ý muốn.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/search/page.tsx`

```tsx
import Form from "next/form";
export default function SearchPage() {
  return <Form action="/search"><input name="q" placeholder="Từ khóa" />
    <button type="submit">Tìm</button></Form>;
}
// Form action dạng string tạo navigation với query string.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Form Component**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Form Component** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Form Component** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Form component trong Next.js hỗ trợ điều hướng theo query và tích hợp với action; cần phân biệt với HTML form.

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

- **Video nguồn:** [Form Component — 06:04:30](https://www.youtube.com/watch?v=k7o9R6eaSes&t=21870s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

hãy cùng xem thành phần biểu mẫu mới được giới thiệu trong XS, thành phần biểu mẫu được xây dựng trên nền tảng HTML Form Element và nó đi kèm với một số tính năng mạnh mẽ khiến nó hoàn hảo cho các ứng dụng web hiện đại. Nó tự động lấy trước giao diện người dùng loaring xử lý điều hướng phía khách hàng khi gửi biểu mẫu và cung cấp cải tiến tiến bộ từ Hộp cho phép tôi chỉ cho bạn cách thành phần hoạt động với một ví dụ trong ứng dụng của chúng tôi. Hiện tại chúng tôi có trang chủ. và một trang cơ sở dữ liệu gạch nối sản phẩm, nơi chúng tôi hiển thị danh sách sản phẩm trên trang chủ, chúng tôi sẽ thêm chức năng tìm kiếm sản phẩm tính năng sẽ chuyển hướng đến trang cơ sở dữ liệu sản phẩm để hiển thị danh sách sản phẩm được lọc theo truy vấn tìm kiếm

Hãy cùng vào mã VS và xem cách thực hiện điều đó, trước tiên hãy thiết lập trạng thái tải trong thư mục cơ sở dữ liệu sản phẩm Tạo một lệnh tải. Tệp TSX Định nghĩa một hàm mặc định xuất thành phần react đơn giản để tải trả về thẻ Dev khi tải sản phẩm tiếp theo chúng ta sẽ định nghĩa một thành phần tìm kiếm, tạo một tệp mới gọi là tìm kiếm. TSX trong thư mục components xuất một thành phần react gọi là tìm kiếm thành phần này sẽ hiển thị một biểu mẫu với đầu vào tìm kiếm và nút gửi. Tôi sẽ dán mã để tiết kiệm thời gian để xuất const tìm kiếm trả về một phần tử biểu mẫu HTML với action is equal/products dấu gạch nối DB với một số kiểu dáng và sau đó chúng ta có một tên phần tử đầu vào bằng với truy vấn với CSS styling và các sản phẩm tìm kiếm placeholder, chúng ta cũng có

một phần tử nút kiểu gửi theo kiểu CSS và văn bản gửi một biểu mẫu rất đơn giản với đầu vào và tuy nhiên, chúng ta sẽ sử dụng thành phần biểu mẫu mới thay vì phần tử HTML biểu mẫu để nhập biểu mẫu từ Biểu mẫu SL tiếp theo và gọi thành phần biểu mẫu. Bây giờ chúng ta đã có thành phần tìm kiếm sẵn sàng, hãy thêm nó vào trang chủ của chúng ta, gốc trang. Tệp TSX trong thư mục ứng dụng sẽ là điểm vào cho chức năng tìm kiếm của chúng tôi. Nhập tìm kiếm thành phần từ tại các thành phần tìm kiếm SL và ngay sau phần tử HTML chính và trước khi thành phần hình ảnh được gọi tìm kiếm Nếu bạn kiểm tra trình duyệt, bạn sẽ thấy nút nhập và gửi tìm kiếm được hiển thị khi bạn nhập truy vấn tìm kiếm và nhấn

gửi bạn sẽ được dẫn đến trang cơ sở dữ liệu sản phẩm gạch chéo và trạng thái tải sẽ xuất hiện ngắn trước Sản phẩm được hiển thị danh sách sản phẩm nhưng không được lọc để tìm kiếm hoạt động, chúng ta cần cập nhật Logic lấy dữ liệu dựa trên truy vấn tìm kiếm nên quay lại so với mã trong cơ sở dữ liệu Prisma. TS, hãy chỉnh sửa chức năng lấy sản phẩm để xử lý truy vấn tìm kiếm, hãy chấp nhận truy vấn, tùy chọn là kiểu chuỗi và nếu truy vấn tồn tại, chúng ta sẽ Trả lại sản phẩm Prisma. tìm nhiều và chúng ta sẽ chỉ định một điều kiện trong đó hoặc tiêu đề chứa mô tả truy vấn chứa truy vấn, nói cách khác: nếu có tham số truy vấn, hãy tìm tất cả các sản phẩm có tiêu đề chứa truy vấn tìm kiếm đó hoặc

mô tả chứa truy vấn tìm kiếm nếu truy vấn không tồn tại hãy trả về danh sách đầy đủ các sản phẩm cuối cùng chúng ta cần cập nhật trang cơ sở dữ liệu sản phẩm của chúng tôi. TSX để xử lý tham số tìm kiếm nên thành phần trang giờ có props và chúng ta phân cấu trúc các tham số tìm kiếm kiểu đối tượng hứa sẽ chứa truy vấn là tùy chọn và thuộc loại chuỗi trong phần thân hàm, chúng ta phân cấu trúc truy vấn từ các tham số tìm kiếm và truyền truy vấn làm đối số để lấy sản phẩm trở lại trình duyệt khi bạn gõ sản phẩm thứ ba vào mục tìm kiếm và nhấn gửi, bạn sẽ được điều hướng đến trang cơ sở dữ liệu sản phẩm và sản phẩm sẽ được lọc dựa trên truy vấn tìm kiếm, chúng ta chỉ thấy sản phẩm duy nhất chứa

Sản phẩm thứ ba trong tiêu đề hoặc mô tả Bây giờ có thể không có gì đặc biệt nhưng NEX thực ra là làm rất nhiều việc phía sau hậu trường, khi thành phần biểu mẫu xuất hiện thì nó sẽ lấy trước giao diện người dùng đang tải Tuyến DB liên kết với/ sản phẩm đây là giá trị của prop hành động giây khi người dùng gửi tìm kiếm Điều hướng ngay lập tức đến phía client trang sản phẩm và dữ liệu biểu mẫu được chuyển thành các thuật ngữ URL chẳng hạn. truy vấn dấu hỏi bằng sản phẩm 3 phần ba nó sẽ hiển thị trạng thái tải trong khi kết quả tìm kiếm đang được khi lấy dữ liệu, chúng ta thấy thẻ div đang tải trong khi các sản phẩm đang được lấy ở nền, cuối cùng khi dữ liệu đã được

kết quả đã sẵn sàng hiển thị trong giao diện người dùng, rất nhiều chức năng đang diễn ra ở đây, thành phần biểu mẫu cũng vậy. hỗ trợ nâng cao tiến bộ ngay khi cài đặt, nghĩa là ngay cả khi không có JavaScript, biểu mẫu vẫn hoạt động như một dạng HTML thông thường, thành phần biểu mẫu mang lại trải nghiệm người dùng rất mượt mà với ít công sức từ phía chúng tôi. tất cả các phần phức tạp của việc điều hướng và tải biểu mẫu, cho phép chúng ta tập trung xây dựng các tính năng thay vì xử lý mã lộn xộn như ngăn chặn quản lý trạng thái thủ công mặc định hoặc bất kỳ cách xử lý biểu mẫu cổ điển nào và bạn nên biết rằng thành phần biểu mẫu cũng hỗ trợ các hành động máy chủ trong trang Chi tiết sản phẩm của chúng tôi thay vì chúng tôi

có một biểu mẫu cho phép chúng ta xóa một sản phẩm, hãy thay thế phần tử biểu mẫu HTML bằng thành phần biểu mẫu để nhập biểu mẫu từ biểu mẫu SL tiếp theo và thay thế phần tử HTML bằng thành phần biểu mẫu, quay lại trình duyệt và xóa một sản phẩm nó vẫn hoạt động như mong đợi để tóm tắt thành phần biểu mẫu nằm trong thành phần mới trong X shs mở rộng Phần tử biểu mẫu HTML và cung cấp nhiều tính năng mạnh mẽ như prefetching, tải giao diện người dùng, điều hướng phía client trên gửi biểu mẫu và nâng cấp tiến bộ ngay từ đầu, chúng ta hoàn thành phần thứ ba về lấy dữ liệu và đột biến Chúng tôi đã học cách lấy dữ liệu trong các thành phần khách hàng cách lấy dữ liệu trong các thành phần máy chủ với thao tác không đồng bộ và xử lý tải

và trạng thái lỗi khi tải. TSX và lỗi. TSX và việc lấy dữ liệu trực tiếp từ cơ sở dữ liệu, chúng tôi cũng đã học được về các hành động máy chủ cho việc xác thực dữ liệu thay đổi và phản hồi trạng thái đang chờ với trạng thái biểu mẫu sử dụng và hành động sử dụng Trạng thái hook tách các hành động máy chủ để sử dụng trong các thành phần khách hàng cách truyền thêm dữ liệu để thực hiện cập nhật và thao tác xóa cách thực hiện cập nhật tích cực và cuối cùng là cách xử lý biểu mẫu với thành phần biểu mẫu mới Bây giờ bạn sẽ có hiểu biết vững chắc về việc lấy dữ liệu và xử lý biểu mẫu trong SH tiếp theo cho phần tiếp theo của năm tới

---

**Điều hướng:** ← [Optimistic Updates with useOptimistic Hook](Bai_09_optimistic-updates-with-useoptimistic-hook.md) · Tiếp theo → [Authentication](../MODULE_10_Authentication_Deploy/Bai_01_authentication.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
