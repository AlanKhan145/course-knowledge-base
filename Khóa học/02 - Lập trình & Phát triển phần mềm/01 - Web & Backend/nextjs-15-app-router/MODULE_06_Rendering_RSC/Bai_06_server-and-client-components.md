---
lesson_id: "M06-L06"
module: "Rendering và React Server Components"
title: "Server and Client Components"
source_version: "Next.js 15 App Router"
video_start: "03:41:14"
video_duration: "6 phút 13 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Server and Client Components

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 6 phút 13 giây · **Mốc:** 03:41:14 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=13274s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Server and Client Components**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Server and Client Components** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Server and Client Components** — use client đánh dấu điểm vào client boundary, không phải cú pháp buộc toàn bộ ứng dụng thành CSR.
**2. Server and Client Components** — Client Component có state/hook, Server Component có khả năng lấy dữ liệu server.
**3. Server and Client Components** — Không import module server-only vào client; truyền serializable props cần thiết.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/page.tsx + src/app/counter.tsx`

```tsx
// src/app/page.tsx (Server Component)
import Counter from "./counter";
export default async function Page() {
  const title = "Server renders title";
  return <main><h1>{title}</h1><Counter /></main>;
}
// src/app/counter.tsx là Client Component với "use client" và useState.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Server and Client Components**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Server and Client Components** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Server and Client Components** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** use client đánh dấu điểm vào client boundary, không phải cú pháp buộc toàn bộ ứng dụng thành CSR.

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

- **Video nguồn:** [Server and Client Components — 03:41:14](https://www.youtube.com/watch?v=k7o9R6eaSes&t=13274s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

giữa các thành phần máy chủ và máy khách, bây giờ hãy áp dụng kiến thức đó vào thực tiễn bằng cách tạo cả hai loại thành phần trong một ứng dụng XS cho phần thứ hai của khóa học về render Tôi đã tạo một dự án mới cho năm sau Sử dụng lệnh NPX Create Next App Demo rendering Byphen Demo Muộn nhất Khi bạn chạy lệnh này, bạn sẽ có một kết quả tương tự Cấu trúc dự án cần làm việc xem xét cách kiến trúc RSC tích hợp với nexs là một điểm then chốt hãy nhớ rằng mọi thành phần trong ứng dụng NEXS mặc định là thành phần máy chủ, điều này bao gồm cả thành phần tích hợp sẵn bố cục gốc và trang gốc đi kèm với mỗi dự án mới của năm sau, nhưng hãy tạo một thành phần mới để xác minh điều này

sẽ thêm một trang giới thiệu vào ứng dụng của chúng tôi bằng cách tạo một thư mục mới trong thư mục ứng dụng với tệp TSX trang tại đây Định nghĩa một hàm mặc định xuất thành phần react đơn giản về trang trả về mỗi trang về và giống như rằng chúng ta đã tạo một thành phần máy chủ để chứng minh điều này, hãy thêm console.log về thành phần máy chủ trong trình duyệt khi chúng ta điều hướng đến slab, hãy chú ý cách nó bị khóa bằng một thẻ máy chủ đặc biệt, bạn cũng có thể thấy cùng một thông báo trong terminal này xác nhận thành phần của chúng tôi là thành phần máy chủ chạy các thành phần trên máy chủ mang lại nhiều lợi ích không Gói Kích thước Truy cập trực tiếp vào tài nguyên bên lề của Serer, cải thiện bảo mật và SEO tốt hơn, tuy nhiên các thành phần máy chủ vẫn có

giới hạn Chúng không thể tương tác với API trình duyệt hoặc xử lý tương tác người dùng, ví dụ nếu chúng ta cố gắng sử dụng trạng thái trong trang giới thiệu của chúng tôi với UST State Hook từ react, vậy hãy nhập UST State từ react và gọi hook, gọi là nó tên và đặt tên, chúng ta sẽ nhận được lỗi vì bang Hoa Kỳ yêu cầu môi trường thành phần khách hàng hiện tại của chúng ta trang về là thành phần máy chủ các thành phần máy chủ không thể duy trì trạng thái vì chúng chạy trên máy chủ nơi trình duyệt Quản lý trạng thái dựa trên không tồn tại, điều này củng cố thực tế rằng Nexia trash mọi thành phần như một máy chủ thành phần mặc định, trừ khi được chỉ định rõ ràng, chúng ta hãy giữ trang giới thiệu như một máy chủ hoạt động

thành phần bằng cách loại bỏ UST State hook và học cách tạo một thành phần khách hàng mới, chúng ta sẽ tạo một bảng điều khiển SL trang. TSX trong thư mục ứng dụng sử dụng trạng thái để quản lý tên người dùng, vì vậy xuất trang bảng điều khiển hàm mặc định nhập và gọi, sử dụng tên trạng thái và đặt tên cho jsx, chúng ta có một thẻ div trong mỗi bảng điều khiển One, một đầu vào phần tử với giá trị được đặt thành tên, biến trạng thái, và khi thay đổi, chúng ta gọi tên tập hợp, là hàm tập hợp của chúng ta, sau đó chúng ta có một đoạn văn hello theo sau là biến State tên để chuyển đổi thành phần Máy chủ này thành thành phần máy khách tại phía trên tệp, chúng ta phải bao gồm một chỉ thị hoặc nói đơn giản là một chỉ thị đặc biệt trong mã sử dụng client

Trong Trích dẫn, chỉ thị này đóng vai trò như vé của chúng tôi để vượt qua ranh giới từ phía máy chủ sang phía khách hàng và cho phép chúng tôi Định nghĩa các thành phần khách hàng mà nó báo cho nexts rằng thành phần bảng điều khiển này cùng với bất kỳ thành phần nào nó nhập là được thiết kế cho việc thực thi phía phía máy khách, do đó thành phần này có quyền truy cập đầy đủ vào API trình duyệt và khả năng Xử lý tương tác để điều hướng đến tuyến đường này. Hãy thêm một liên kết trên trang chủ, tức là ở trang gốc. TSX bên dưới hình ảnh liên kết văn bản là Das board, mỗi ref bằng với bảng điều khiển và đảm bảo nhập component liên kết ở phía trên nhập liên kết từ liên kết dấu gạch chéo tiếp theo nếu bạn quay lại trình duyệt và điều hướng đến bảng điều khiển dấu gạch chéo bằng cách nhấp vào

Liên kết chúng ta thấy thành phần với trạng thái hoạt động như mong đợi. Xin chào Vishwa, bây giờ hãy xem một rất Điểm quan trọng về hành vi kết xuất các thành phần khách hàng Hãy thêm console.log bảng điều khiển thành phần khách hàng Quay lại thành phần trang bảng điều khiển của chúng tôi, khi chúng tôi nhấp vào liên kết bảng điều khiển từ trang chủ, nhật ký sẽ xuất hiện trên trình duyệt console nhưng không có thẻ server, nếu bạn nhìn vào terminal thì chúng ta không thấy thông báo nhưng nếu tải lại thì Trang bảng điều khiển Bảng điều khiển xuất hiện cả trong trình duyệt và trong terminal Để tôi giải thích tại sao điều này xảy ra Khi chúng ta điều hướng bằng thành phần liên kết, thành phần bảng điều khiển chỉ được hiển thị phía client và ta thấy

thông báo trong bảng điều khiển trình duyệt nhưng nếu chúng tôi tải lại trang, thành phần bảng điều khiển sẽ được hiển thị một lần trên máy chủ để cho phép người dùng sẽ ngay lập tức thấy nội dung HTML của Trang thay vì màn hình trống và sau đó một lần nữa ở phía khách trong quá trình Hydration Đây là lý do tại sao chúng ta thấy thông báo trong bảng điều khiển trình duyệt và terminal, thuật ngữ thành phần khách hàng thực sự là Gây nhầm lẫn nhưng bạn sẽ quen với hành vi này khi làm việc với rsc, lưu ý là thông báo trong trình duyệt là đăng nhập hai lần trên trình duyệt do chế độ nghiêm ngặt trong quá trình phát triển, điều này không xảy ra trong sản xuất nên đừng hãy lo lắng về việc tóm tắt trong kiến trúc RSC và mở rộng ra trong các thành phần của bộ định tuyến ứng dụng nexs là máy chủ

các thành phần mặc định tạo thành phần máy khách tại chỉ thị sử dụng máy khách ở đầu các thành phần máy chủ tệp được hiển thị độc quyền trên máy chủ trong khi các thành phần khách hàng được kết xuất một lần trên máy chủ và sau đó trên client. Tiếp theo, chúng ta sẽ khám phá vòng đời rendering của các thành phần máy chủ và máy khách. Chúng ta đã đề cập về máy chủ và máy khách.

---

**Điều hướng:** ← [React Server Components](Bai_05_react-server-components.md) · Tiếp theo → [Rendering Lifecycle in RSCs](Bai_07_rendering-lifecycle-in-rscs.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
