---
lesson_id: "M07-L06"
module: "Thiết kế Server/Client Component"
title: "Client Component Placement"
source_version: "Next.js 15 App Router"
video_start: "04:38:31"
video_duration: "4 phút 49 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Client Component Placement

> **Module 07 — Thiết kế Server/Client Component** · **Thời lượng video:** 4 phút 49 giây · **Mốc:** 04:38:31 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=16711s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Client Component Placement**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **thiết kế server/client component**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Client Component Placement** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Client Component Placement** — Chuyển chỉ một widget như search input, counter, theme toggle sang client.
**2. Client Component Placement** — Header/layout vẫn là Server Component nếu phần tương tác được tách ra.
**3. Client Component Placement** — Đánh giá bundle, state sharing và UX thay vì đưa use client lên đầu layout tùy tiện.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/page.tsx`

```tsx
// page.tsx vẫn là Server Component.
import SearchBox from "./search-box";
export default function Page() {
  return <main><h1>Khóa học</h1><SearchBox /></main>;
}
// Chỉ search-box.tsx cần "use client" để quản lý input state.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Client Component Placement**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Client Component Placement** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Client Component Placement** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Chuyển chỉ một widget như search input, counter, theme toggle sang client.

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

- **Video nguồn:** [Client Component Placement — 04:38:31](https://www.youtube.com/watch?v=k7o9R6eaSes&t=16711s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Mẫu thành phần khách hàng cuối cùng Vị trí chiến lược của các thành phần khách hàng trong cây thành phần của bạn, điều này rất tuyệt quan trọng để tối ưu hóa hiệu suất ứng dụng của bạn vì các thành phần máy chủ không thể xử lý trạng thái và tính tương tác, chúng ta cần các thành phần khách hàng để lấp đầy khoảng trống. Khuyến nghị chính ở đây là định vị các thành phần khách hàng này. Các thành phần thấp hơn trong thành phần của bạn Tre để tôi chỉ cho bạn lý do tại sao điều này quan trọng Tôi đã chuẩn bị một số mã để trình diễn khái niệm này Trong dự án của chúng tôi, tôi đã thiết lập một tuyến mới gọi là trang đích và cũng tạo ba thành phần mới trong các thành phần đó Thanh điều hướng thư mục Tìm kiếm điều hướng và liên kết điều hướng Trước khi chúng ta đi sâu vào mã nguồn, hãy để tôi giải thích chúng ta đang xây dựng gì Hình ảnh A

trang đích với thanh điều hướng ở trên cùng và khu vực nội dung chính bên dưới, chúng tôi sẽ tập trung vào Navar hôm nay nó bao gồm một lớp bọc ngoài, chính là thành phần Navar, chứa hai liên kết điều hướng thành phần bên trong để điều hướng tìm kiếm liên kết và điều hướng với thanh tìm kiếm cho phép người dùng tìm kiếm trên trang web của chúng tôi, điều này tạo thành một thành phần đơn giản Tre the thành phần trang đích nằm ở trên cùng với một thành phần điều hướng vì các thành phần con của nó tôi đã triển khai cấu trúc này rồi Trong ứng dụng Nexts của chúng tôi, để tôi hướng dẫn bạn qua các thành phần trang đích, bạn sẽ nhận thấy chúng tôi đã nhập thành phần Navar ở phía trên bên trong thành phần Navar này chúng tôi đã mang cả liên kết điều hướng và tìm kiếm điều hướng này

các thành phần chỉ đơn giản là xuất văn bản cho danh sách Now danh sách liên kết điều hướng, đầu vào tìm kiếm điều hướng, mỗi thành phần đều bao gồm nhật ký bảng điều khiển để hiển thị khi nó hiển thị nhật ký console, Navar hiển thị liên kết điều hướng và tìm kiếm điều hướng được hiển thị, đừng quá lo lắng Về chi tiết triển khai cụ thể, vì chúng ta đang tập trung vào việc hiểu cấu trúc thành phần, hãy cùng kiểm tra điều này trên trình duyệt Đi đến trang đích slash, hãy xem bảng điều khiển công cụ phát triển và bạn sẽ thấy các câu lệnh khóa với thẻ máy chủ vì đây đều là các thành phần của máy chủ, bạn có thể xác nhận điều này bằng cách nhìn vào terminal, nơi bạn sẽ phát hiện cùng một khóa Câu lệnh Navar đã hiển thị liên kết điều hướng đã hiển thị và tìm kiếm điều hướng đã hiển thị ngay bây giờ thanh tìm kiếm của chúng ta không có bất kỳ trạng thái nào liên kết

Với nó, hãy giới thiệu một biến trạng thái để theo dõi giá trị đầu vào tìm kiếm, chúng ta sẽ làm điều này trong thành phần navbar nhập use state từ react và gọi use state hook gọi là search set search initial value string rỗng khi chúng ta lưu cái này we nhận lỗi thành phần navbar của chúng ta không được đánh dấu là thành phần khách hàng Hãy sửa điều đó bằng cách thêm chỉ thị sử dụng khách hàng ở phía trên, sau khi lưu và làm mới, chúng ta sẽ thấy các câu lệnh khóa phía khách hàng trong trình duyệt cho cả ba thành phần, giờ là thanh Các liên kết đã render Now đã hiển thị tất cả các liên kết mà không có thẻ server và đừng lo lắng về việc xem khóa hai lần, đó chỉ là chế độ phản ứng nghiêm ngặt trong phát triển, nhưng đây là một suy nghĩ nếu client CL của bạn được khai báo trong

thành phần Navar không phải là thành phần duy nhất chạy phía client sao? Đây là một hiểu lầm phổ biến khi bạn đánh dấu một thành phần bằng client đã sử dụng, nó không chỉ ảnh hưởng đến thành phần đó mà còn ảnh hưởng đến mọi thành phần con trong thành phần Tre bên dưới trong trường hợp của chúng tôi, liên kết điều hướng và tìm kiếm điều hướng trở thành các thành phần khách hàng cũng như hãy nghĩ đến việc sử dụng khách hàng vì việc vẽ một đường trong cây thành phần và mọi thứ bên dưới đường đó chạy ở phía khách hàng, điều quan trọng là phải Hãy hiểu khái niệm này đặc biệt khi bạn làm việc với cây component lớn hơn nếu bạn chuyển đổi cấp cao Component vào component khách, chỉ để thêm tính tương tác, bạn vô tình làm cả cây con của nó

con cái cũng chạy trên máy khách, điều này đồng nghĩa với việc gửi thêm mã đến trình duyệt và mất đi lợi ích của máy chủ các thành phần, đó là lý do chúng tôi muốn đẩy các thành phần khách hàng xuống càng xa càng tốt, lý tưởng là biến chúng thành Lá trong trường hợp của chúng ta, chúng ta có thể cải thiện điều này, thay vì biến Navar thành thành phần khách hàng, chúng ta có thể giữ nó như một thành phần máy chủ và chỉ cần chuyển đổi tìm kiếm điều hướng sang thành phần client, đó là thành phần duy nhất thực sự cần trả lại trạng thái trong VS Code, hãy chuyển use client sang tìm kiếm điều hướng cùng với trạng thái, use state hook cũng như trong trình duyệt, tải lại trang và bạn sẽ chỉ thấy tìm kiếm điều hướng chạy ở phía client, các liên kết Navar và điều hướng có thẻ server, vậy là như vậy

Vị trí thành phần khách hàng trong bộ định tuyến ứng dụng Hãy cùng kết thúc phần này về rendering bằng cách đi sâu vào các thành phần được hỗ trợ

---

**Điều hướng:** ← [Client-only Code](Bai_05_client-only-code.md) · Tiếp theo → [Interleaving Server and Client Components](Bai_07_interleaving-server-and-client-components.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
