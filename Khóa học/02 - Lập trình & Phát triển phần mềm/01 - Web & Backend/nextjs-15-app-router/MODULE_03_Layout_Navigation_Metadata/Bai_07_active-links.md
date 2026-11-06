---
lesson_id: "M03-L07"
module: "Layouts, điều hướng và SEO"
title: "Active Links"
source_version: "Next.js 15 App Router"
video_start: "01:19:50"
video_duration: "3 phút 51 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Active Links

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 3 phút 51 giây · **Mốc:** 01:19:50 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=4790s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Active Links**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Active Links** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Active Links** — usePathname() đọc pathname hiện tại trong Client Component để tô trạng thái active.
**2. Active Links** — So sánh chính xác hoặc startsWith tùy mục tiêu; xử lý / để không đánh dấu toàn bộ mọi đường dẫn.
**3. Active Links** — Thêm aria-current="page" để cải thiện trải nghiệm cho công nghệ hỗ trợ.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/_components/nav-links.tsx`

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }];
export default function NavLinks() {
  const path = usePathname();
  return <nav>{links.map(link => (
    <Link key={link.href} href={link.href}
      aria-current={path === link.href ? "page" : undefined}
      className={path === link.href ? "active" : ""}>{link.label}</Link>
  ))}</nav>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Active Links**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Active Links** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Active Links** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** usePathname() đọc pathname hiện tại trong Client Component để tô trạng thái active.

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

- **Video nguồn:** [Active Links — 01:19:50](https://www.youtube.com/watch?v=k7o9R6eaSes&t=4790s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Bây giờ hãy cùng giải quyết điều gì đó mà chúng ta chưa đề cập, việc thiết kế các liên kết chủ động bạn biết đấy, hầu hết các trang web đều làm nổi bật Trang hiện tại bạn đang ở trong menu điều hướng. Chúng tôi sẽ xây dựng chính xác rằng nó không chỉ là về thẩm mỹ, mà còn giúp người dùng Hiểu vị trí của chúng trong hồ sơ của bạn và rất quan trọng để tiết kiệm thời gian và giúp chúng ta bắt đầu. Tôi đã có đã chuẩn bị một số mã trong nhóm o route của chúng tôi, tôi đã tạo một bố cục. Tệp TSX với mảng liên kết điều hướng chứa ba mục đăng ký đăng nhập và quên mật khẩu, mỗi mục có tên và thuộc tính href tương ứng, bố cục component Ánh xạ lên các liên kết này và hiển thị chúng bằng thành phần liên kết JSS NEX nếu bạn truy cập/đăng ký

Trong trình duyệt, bạn sẽ thấy cả ba liên kết trong bố cục A mà bạn có thể nhấp giữa chúng và chúng sẽ luôn hiển thị trong suốt đăng ký, đăng nhập và quên mật khẩu. Bây giờ hãy để chúng hiển thị cái nào đang hoạt động. Tiếp theo, SHS sẽ cho chúng ta sử dụng hook tên đường dẫn để giúp chúng tôi xác định liên kết nào đang hoạt động, hãy đưa nó vào phía trên, nhập sử dụng tên đường dẫn từ snation tiếp theo và sử dụng nó trong thành phần bố cục a, tên đường dẫn const bằng với sử dụng tên đường dẫn khi chúng ta lưu tệp chúng ta gặp lỗi đã từng thấy trước đây, hãy nhớ cách các thành phần máy chủ mặc định trong XS well hooks chỉ hoạt động trong các thành phần của khách hàng nên chúng ta cần thêm chỉ thị để sử dụng khách hàng ở đầu tệp của chúng ta, giờ đã được sửa rồi, hãy sử dụng

hằng số tên đường dẫn cung cấp cho chúng ta đường dẫn URL hiện tại, vì vậy hãy gạch chéo đăng ký cho định tuyến đăng ký SL cho đăng nhập lộ trình SL quên mật khẩu cho lộ trình quên mật khẩu, v.v. các giá trị này khớp với từng giá trị trong nav của chúng tôi mảng links nên trong phương thức map ta có thể thêm const is active bằng với path name bằng links H ref hoặc path name do bắt đầu bằng link hre và link. HRE không bằng với route gốc. Tiếp theo, đã đến lúc thêm một số kiểu trên thành phần liên kết, hãy thêm tên lớp với có điều kiện nên nếu là active là true, chúng ta chỉ định font in đậm và lề phải bốn, nếu nó không hoạt động, chúng ta chỉ định F văn bản blue 500 và lề phải bốn, đây là các lớp Tailwind CSS, font bold làm cho văn bản in đậm và văn bản blue 500 cho chúng ta một

Màu xanh dương đẹp MR4 tạo thêm khoảng trống bên phải. Nếu bạn kiểm tra bảng Elements của trình duyệt, bạn sẽ thấy liên kết hoạt động có lớp font chữ đậm trong khi các liên kết khác có chữ xanh 500 mà chúng ta đang xem SL quên mật khẩu nên quên mật khẩu là lựa chọn đang hoạt động của chúng ta nhưng chờ đã, các kiểu dáng dường như không hiển thị trên trình duyệt Điều này là do chúng ta đã loại bỏ tệp CSS toàn cục trước đó, không sao đâu, hãy tạo một kiểu dáng. Tệp CSS trong số lẻ thư mục và thêm các thành phần cơ sở CSS tailn và tiện ích vào bố cục. Tệp TSX nhập tệp styles.css hoặc nếu bạn bạn cũng có thể khôi phục tệp CSS toàn cục từ trước đó, dù cách nào cũng được, bây giờ quay lại trình duyệt và

bạn có thể thấy tuyến đường hiện tại quên mật khẩu là In đậm và các liên kết khác màu xanh dương, nhấp vào đăng nhập và Kiểu dáng thay đổi Đó là tất cả những gì cần để tạo kiểu cho liên kết chủ động trong SHS tiếp theo. Hãy cùng tìm hiểu tham số và tìm kiếm tham số trong Nexts nếu bạn đang làm việc với

---

**Điều hướng:** ← [Linking Component Navigation](Bai_06_linking-component-navigation.md) · Tiếp theo → [params and searchParams](Bai_08_params-and-searchparams.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
