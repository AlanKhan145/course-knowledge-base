---
lesson_id: "M07-L07"
module: "Thiết kế Server/Client Component"
title: "Interleaving Server and Client Components"
source_version: "Next.js 15 App Router"
video_start: "04:43:20"
video_duration: "8 phút 06 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Interleaving Server and Client Components

> **Module 07 — Thiết kế Server/Client Component** · **Thời lượng video:** 8 phút 06 giây · **Mốc:** 04:43:20 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=17000s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Interleaving Server and Client Components**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **thiết kế server/client component**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Interleaving Server and Client Components** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Interleaving Server and Client Components** — Client component có thể nhận server-rendered children qua props, tạo giao diện lồng nhau.
**2. Interleaving Server and Client Components** — Không import trực tiếp Server Component vào module client khi muốn nó thực thi trên server theo cách kỳ vọng.
**3. Interleaving Server and Client Components** — Ví dụ ModalClient chứa nội dung ProductServer thông qua children.

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
// Server Component truyền server-rendered children vào Client component.
import Modal from "./modal";      // file modal.tsx có "use client"
import ProductDetails from "./product-details"; // server component
export default function Page() {
  return <Modal><ProductDetails /></Modal>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Interleaving Server and Client Components**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Interleaving Server and Client Components** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Interleaving Server and Client Components** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Client component có thể nhận server-rendered children qua props, tạo giao diện lồng nhau.

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

- **Video nguồn:** [Interleaving Server and Client Components — 04:43:20](https://www.youtube.com/watch?v=k7o9R6eaSes&t=17000s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/15/app/building-your-application/rendering/composition-patterns).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

và các mẫu không được hỗ trợ của việc rời khỏi các thành phần máy chủ và khách hàng trong tiếp theo, tin tôi đi, điều này dễ hiểu nhất qua các ví dụ, vậy hãy bắt đầu ngay lập tức, trước tiên hãy tạo một route mới gọi là inter leing trong thư mục ứng dụng. Thêm một trang. TSX bên trong chúng ta sẽ cần một vài thành phần để minh họa điều này, nên trong các thành phần Thư mục: Hãy tạo cả thành phần máy chủ và máy khách, hãy bắt đầu với thành phần máy chủ của chúng ta, tạo thành phần máy chủ 1. TSX, hãy đặt tên nó là component máy chủ một, export, const, component máy chủ một, và đây là một hàm trả về một H1 Tag Server component One, chúng ta cũng bao gồm một thao tác chỉ máy chủ như hệ thống tệp, đọc thành phần này ở đầu

nhập mô-đun FS và trong thành phần gọi FS. đồng bộ readfile truyền theo đường dẫn và utf8 là thứ hai đối số: chúng ta không quan tâm đến kết quả của phương thức read file này nên có thể bỏ qua phép gán, đây là của chúng ta. thành phần máy chủ đầu tiên nhân bản tệp này để sao chép và dán và đặt tên cho nó thành phần máy chủ 2 cập nhật tên thành phần cũng như Tham số read file là thành phần máy chủ 2, thành phần máy chủ 2. TSX và thành phần máy chủ H1 2 hiện nay cho chúng tôi Thành phần khách hàng trong cùng thư mục thành phần tạo dấu gạch nối 1 của thành phần iph khách hàng. TSX và gọi tên nó đi thành phần máy khách một xuất const thành phần máy khách một và điều này tương đương với một hàm trả về một máy khách thẻ H1

thành phần một ở đây bao gồm một thao tác chỉ dành cho client như use State call, vì vậy hãy thêm chỉ thị use Cent ở đầu nhập sử dụng trạng thái từ react và gọi nó trong tên thành phần, tên tập hợp phẩy bằng với sử dụng trạng thái và giá trị ban đầu là Batman, một lần nữa chúng ta không lo lắng về việc sử dụng biến trạng thái hay hàm seter trong thành phần của chúng tôi, đây là thành phần khách hàng đầu tiên, hãy sao chép tệp này để sao chép và đổi tên tệp này thành Thành phần khách hàng 2. TSX cập nhật tên thành phần và bây giờ jsx hãy định nghĩa một thành phần trong trang rời rạc. Xuất tệp TSX hàm mặc định ENT rời khỏi trang và chúng ta trả về và H1 tag inter leaving page khi tất cả các thành phần đã sẵn sàng

hãy cùng khám phá các mẫu tương tác khác nhau, trước tiên là thành phần máy chủ nằm trong một thành phần máy chủ khác, bây giờ chúng ta Interleaving route đã là một thành phần máy chủ nhưng hãy tận dụng các thành phần khác vừa tạo ra Ở trên cùng, nhập thành phần máy chủ một vào trang. TSX gọi nó rồi trong thành phần máy chủ Một, nhập thành phần máy chủ 2 và đưa nó vào jsx, như H1, thành phần máy chủ một, rồi thành phần máy chủ thứ hai trong trình duyệt điều hướng đến slash inter left và bạn sẽ thấy tuyến đường hoạt động mà không cần bất kỳ issue thành phần máy chủ 2 lồng bên trong thành phần máy chủ một được lồng bên trong thành phần leing đầu tiên

mẫu thành phần máy chủ bên trong thành phần máy chủ khác hoạt động như mong đợi, mẫu thứ hai là máy khách Thành phần bên trong một thành phần khách hàng khác nên trong trang. TSX trong thành phần nhập thư mục giữa thư mục một và gọi nó sau đó Nest client component hai bên trong client component one để nhập client component hai gói mỗi cái bằng react fragment và gọi component client để kiểm tra trình duyệt, bạn có thể thấy điều này hoạt động hoàn hảo Fine cũng như thành phần khách hàng 2 lồng bên trong thành phần khách hàng, một thành phần lồng bên trong trang thứ hai của chúng ta mẫu thành phần khách hàng bên trong thành phần khách hàng cũng hoạt động hoàn hảo, mẫu thứ ba là khách hàng

Thành phần bên trong thành phần máy chủ nên nhập thành phần máy chủ một vào trang. TSX rồi thành phần client tiếp theo, một bên trong component máy chủ. Nhập component client một và gọi client component thành phần một, kiểm tra trình duyệt và bạn có thể thấy mẫu này cũng hoạt động bình thường, thành phần khách hàng 2 là hiện đang lồng bên trong thành phần máy khách một được lồng bên trong thành phần máy chủ một được lồng bên trong thành phần trang interliving để mẫu thứ ba của thành phần khách hàng bên trong thành phần máy chủ cuối cùng hoạt động hoàn hảo Hãy cùng xem xét thành phần máy chủ bên trong một thành phần khách hàng, tức là trong trang Interleing. Thành phần khách hàng nhập TSX

một rồi thành phần máy chủ Nest một bên trong thành phần khách hàng Nhập thành phần máy chủ một và gọi khi bạn lưu tệp và kiểm tra trình duyệt, bạn sẽ thấy một module lỗi không thể giải quyết FS vì bất kỳ thành phần lồng bên trong thành phần máy khách cũng tự động trở thành thành phần máy khách vì các thành phần máy khách kết xuất sau các thành phần máy chủ bạn không thể nhập trực tiếp thành phần máy chủ vào thành phần khách ngay cả khi máy chủ thành phần một được định nghĩa là thành phần máy chủ khi nó được lồng bên trong một thành phần máy khách, nó chuyển đổi thành một thành phần máy khách được thực thi phía máy khách trong môi trường máy khách không có mô-đun hệ thống tệp và do đó

lỗi vì vậy điều quan trọng là phải nhớ rằng việc nhập một thành phần máy chủ vào thành phần máy khách là một mẫu không phải được hỗ trợ trong XJS nhưng đừng lo, có một cách khắc phục hay thay vì lồng thành phần máy chủ, hãy truyền nó làm prop đối với thành phần khách, một cách tiếp cận phổ biến là sử dụng prop con của reacts để tạo cái gọi là slot nên trong Rời khỏi trang xen kẽ. TSX truyền thành phần máy chủ một làm prop con cho thành phần máy khách một mở và đóng Tag và Nest server component one trong client component one chỉ định prop con kiểu react. nút phản ứng và thay vì nhập và gọi thành phần máy chủ một, chúng ta chỉ định các prop con: kiểm tra trình duyệt ngay bây giờ và

mọi thứ hoạt động tốt C component lồng bên trong component máy chủ, thành phần này lồng bên trong component client, đây là mẫu được khuyến nghị để xen kẽ các thành phần máy chủ và máy khách trong XJS và hãy nhớ rằng bạn không bị giới hạn chỉ ở Prop trẻ em Bạn có thể sử dụng bất kỳ prop nào trên thành phần client, điều này dẫn chúng ta đến cuối phần thứ hai, đó là một Phân tích sâu về render trong XS, chúng tôi đã đề cập đến mọi thứ từ CSR và SSR đến suspense, kết xuất các loại thành phần của rsc Chu kỳ sống, kết xuất tĩnh và động, luồng và các mẫu composition này, bạn nên nắm vững cách làm Hiển thị trong bộ định tuyến ứng dụng năm sau, còn rất nhiều điều hấp dẫn nữa cho năm sau, nên hãy đón chờ

Trong phần tiếp theo của hai phần trước, chúng ta đã đề cập đến định tuyến và render. Bây giờ hãy cùng đi sâu vào phần thứ ba về dữ liệu.

---

**Điều hướng:** ← [Client Component Placement](Bai_06_client-component-placement.md) · Tiếp theo → [Data Fetching](../MODULE_08_Data_Fetching/Bai_01_data-fetching.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
