---
lesson_id: "M03-L06"
module: "Layouts, điều hướng và SEO"
title: "Linking Component Navigation"
source_version: "Next.js 15 App Router"
video_start: "01:14:53"
video_duration: "4 phút 57 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 06. Linking Component Navigation

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 4 phút 57 giây · **Mốc:** 01:14:53 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=4493s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Linking Component Navigation**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Linking Component Navigation** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Linking Component Navigation** — next/link cung cấp chuyển trang nội bộ, giúp tối ưu navigation và prefetch trong trường hợp thích hợp.
**2. Linking Component Navigation** — Dùng href và văn bản liên kết rõ ràng; tránh dùng a hoặc location.href cho mọi route nội bộ.
**3. Linking Component Navigation** — Phân biệt link đến route nội bộ và liên kết ngoài hệ thống.

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
import Link from "next/link";
export default function HomePage() {
  return <nav><Link href="/about">Giới thiệu</Link><Link href="/products">Sản phẩm</Link></nav>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Linking Component Navigation**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Linking Component Navigation** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Linking Component Navigation** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** next/link cung cấp chuyển trang nội bộ, giúp tối ưu navigation và prefetch trong trường hợp thích hợp.

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

- **Video nguồn:** [Linking Component Navigation — 01:14:53](https://www.youtube.com/watch?v=k7o9R6eaSes&t=4493s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

route nested routes Dynamic routes và bắt tất cả các route trong khi chúng tôi đang gõ URL trực tiếp trong trình duyệt để kiểm tra những tuyến này không phải là cách người dùng thực sự điều hướng các trang web, thay vào đó họ nhấp vào các liên kết hoặc bị chuyển hướng sau một số Hành động, hãy cùng xem cách triển khai điều này trong SH tiếp theo. Đầu tiên, hãy xem cách điều hướng từ trang chủ đến blog khi nhấp vào một liên kết để điều hướng phía máy khách, chia sẻ tiếp theo cung cấp cho chúng ta thành phần liên kết, thành phần liên kết là một thành phần react mở rộng phần tử neo HTML và là cách chính để điều hướng giữa các tuyến trong nexs đến Sử dụng nó, chúng ta sẽ cần nhập nó từ next/link trong trang gốc của chúng ta. Tệp TSX trong thư mục ứng dụng, hãy bắt đầu bằng cách nhập

thành phần liên kết nhập liên kết từ liên kết SL tiếp theo. Bây giờ chúng ta có thể thêm thành phần liên kết để điều hướng ở bất cứ đâu trong đây là cú pháp: tôi sẽ bao bọc tag H1 bằng react fragment và thêm một liên kết ngay bên dưới Tiêu đề văn bản là blog, href bằng/ blog bằng cách sử dụng thành phần liên kết với một prop href mà chúng tôi tạo ra có thể nhấp vào Các phần tử điều hướng trong trường hợp này chúng ta hiển thị blog dưới dạng văn bản và khi nhấp vào sẽ đưa chúng ta đến lưu blog SL Bạn sẽ vào trình duyệt và bạn sẽ thấy một liên kết blog có thể nhấp vào dẫn thẳng đến trang chặn. Hãy thêm Một ví dụ khác để đảm bảo chúng ta đã nắm được điều này, chúng ta sẽ tạo một liên kết đến trang sản phẩm ngay sau liên kết blog của mình

vì vậy liên kết thành phần, văn bản là sản phẩm và HF là sản phẩm SL đơn giản ngay tại trang chủ, làm mới và chúng ta thấy liên kết sản phẩm khi nhấp vào sẽ dẫn bạn đến sản phẩm SL, nơi chúng tôi thấy thành phần danh sách sản phẩm, cả hai liên kết của chúng tôi đều là Hoạt động trơn tru bây giờ luôn tốt khi giúp người dùng quay lại trang chủ. Hãy thêm liên kết trang chủ vào sản phẩm của chúng tôi. danh sách Trang mở trang. Tệp TSX trong thư mục sản phẩm của bạn và nhập liên kết thành phần từ dấu gạch chéo tiếp theo liên kết rồi thêm một liên kết đến trang chủ trong jsx, văn bản là home và HRE là chuyển tiếp, dấu gạch chéo, điều này trỏ đến ỨNG DỤNG ĐỊNH TUYẾN BÂY GIỜ KHI BẠN Ở TRANG SẢN PHẨM, BẠN SẼ THẤY MỘT LIÊN KẾT ĐƯA BẠN VỀ NHÀ, TIẾP THEO HÃY CÙNG GIẢI QUYẾT

Một số điều thú vị hơn Tuyến động trên trang sản phẩm của chúng tôi có ba sản phẩm được liệt kê và mỗi sản phẩm có thể chuyển đổi các sản phẩm đang được gửi vào liên kết đến trang Chi tiết của nó, hãy nhớ cách các tuyến động của chúng tôi là sản phẩm SL Mã sản phẩm SL cho Ví dụ sản phẩm SL1 thì đây là cách chúng ta triển khai như một liên kết trong h hai thành phần liên kết, sản phẩm một trở thành văn bản và mỗi ref bằng với sản phẩm SL SL SL1 tương tự Product 2 và product 3 trong trình duyệt bạn sẽ thấy sản phẩm liên kết với chi tiết tương ứng Trang sản phẩm một, chi tiết về sản phẩm một, hai và ba trong khi mã hóa cứng các liên kết này hoạt động, đôi khi chúng ta cần tạo chúng một cách động, giả sử chúng ta có một mã sản phẩm sắp ra

từ một nơi khác nên ID sản phẩm const bằng 100, giá trị có thể lấy từ một prop, ví dụ chúng ta có thể dùng template để tạo liên kết sử dụng ID sản phẩm này, tôi sẽ nhân đôi tiêu đề H2 và liên kết ID sản phẩm này với HRE chúng ta sẽ sử dụng backx, là chìa khóa bên dưới phím Escape, hãy chắc chắn quấn nó trong niềng răng cong rồi sau đó là Mã sản phẩm niềng răng niềng xoắn đô la điều này tạo ra một liên kết động hiển thị sản phẩm 100 dẫn đến trang sản phẩm tương ứng. Bây giờ đây là điều tôi muốn nhấn mạnh về thành phần liên kết là nó có một prop thay thế thay đổi cách lịch sử điều hướng Hoạt động rồi, hãy thêm nó vào thành phần liên kết của sản phẩm 3, bây giờ thử lại trong trình duyệt từ trang chủ, nhấp vào

sản phẩm nhấp vào sản phẩm một rồi nhấn lại Hoạt động bình thường với sản phẩm hai Trang Chi tiết và chúng ta quay lại nhưng với sản phẩm thứ ba, chúng ta điều hướng đến trang Chi tiết nhưng khi tôi nhấn nút quay lại thì bạn sẽ chuyển thẳng đến trang chủ bỏ qua danh sách sản phẩm vì thay thế sẽ ghi đè mục lịch sử hiện tại thay vì thêm một mục mới Một điều cần lưu ý là thành phần liên kết giúp việc điều hướng phía client trong XJS trở nên dễ dàng, chỉ cần nhập Từ liên kết SL tiếp theo, thêm HREF của bạn và bạn sẽ ổn thôi, trước đó chúng ta đã học về thành phần liên kết để điều hướng giữa các tuyến đường

---

**Điều hướng:** ← [title Metadata](Bai_05_title-metadata.md) · Tiếp theo → [Active Links](Bai_07_active-links.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
