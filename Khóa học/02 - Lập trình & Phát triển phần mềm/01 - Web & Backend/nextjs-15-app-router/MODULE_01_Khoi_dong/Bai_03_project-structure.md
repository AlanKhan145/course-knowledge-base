---
lesson_id: "M01-L03"
module: "Khởi động với Next.js 15"
title: "Project Structure"
source_version: "Next.js 15 App Router"
video_start: "00:07:15"
video_duration: "4 phút 12 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 03. Project Structure

> **Module 01 — Khởi động với Next.js 15** · **Thời lượng video:** 4 phút 12 giây · **Mốc:** 00:07:15 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=435s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/getting-started)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Project Structure**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **khởi động với next.js 15**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Project Structure** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Project Structure** — package.json quản lý dependencies và các scripts dev, build, start, lint.
**2. Project Structure** — src/app/page.tsx khai báo nội dung /, src/app/layout.tsx khai báo root layout, globals.css khai báo CSS dùng chung.
**3. Project Structure** — public/ phục vụ tệp tĩnh; .next/ chứa build artifact; node_modules/ chứa gói cài đặt và không commit.
**4. Project Structure** — next.config.ts và tsconfig.json là các điểm cấu hình quan trọng.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `cây thư mục`

```text
hello-next/
├── public/                  # Ảnh và các file tĩnh
├── src/app/
│   ├── globals.css
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Route /
├── package.json
├── next.config.ts
└── tsconfig.json
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Project Structure**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Project Structure** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Project Structure** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** package.json quản lý dependencies và các scripts dev, build, start, lint.

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

- **Video nguồn:** [Project Structure — 00:07:15](https://www.youtube.com/watch?v=k7o9R6eaSes&t=435s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/getting-started](https://nextjs.org/docs/15/app/getting-started).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

bây giờ chúng ta sẽ đi sâu vào cấu trúc của Dự án để hiểu điều gì khiến mọi thứ diễn ra khi chúng ta chạy Ứng dụng Tôi đã mở dự án hello world trong VS Code và ở cấp gốc chúng ta có thể thấy bốn thư mục và 10 thư mục hãy phân tích từng cái một, bắt đầu với các tệp đầu tiên chúng ta có package.json đây là nơi tất cả các tệp của chúng ta Dự án phụ thuộc và script sống cho phụ thuộc Chúng tôi có những điều cần thiết cho phiên bản 15 React vào năm tới và react Dom phiên bản 19, tùy thuộc vào lựa chọn của bạn trong quá trình thiết lập, bạn cũng có thể có typescript với các kiểu của nó Tailwind với các gói sau CSS và eslin, phần script khá đơn giản cho chế độ phát triển

xây dựng cho sản xuất, bắt đầu để chạy máy chủ sản xuất và liên kết để thiết lập liên kết ES tích hợp trong jss tiếp theo cấu hình một tệp package.json đơn giản với các phụ thuộc và kịch bản. Tiếp theo là cấu hình của chúng tôi Hồ sơ tiếp theo chúng ta có. config dots cho năm sau: Ts config.js cho TypeScript Eslint config.js cho Eslint và cả hai Twin. config.cfg MGS for tailn CSS cũng có một vài file mà chúng tôi sẽ không tập trung nhiều trong khóa package khóa học này. Json mà đảm bảo cài đặt nhất quán các phụ thuộc của chúng tôi bị bỏ qua cho Kiểm soát Phiên bản tệp readme chứa một Một vài hướng dẫn liên quan đến việc chạy, xây dựng và triển khai ứng dụng cũng như môi trường tiếp theo. D.S chứa

typescript Các khai báo cho n shs bây giờ hãy tiến hành đến các thư mục khác nhau trước, thư mục tiếp theo sẽ được truy cập được tạo ra khi bạn chạy các script Dev hoặc Bild, đó là nơi ứng dụng NEX của bạn thực sự được phục vụ, bạn sẽ lưu ý thư mục này bị bỏ qua G nên đừng quá lo lắng về nó trong quá trình phát triển khi chúng ta có node Modules là nơi lưu trữ tất cả các phụ thuộc đã cài đặt của chúng tôi, điều này được tạo ra khi bạn chạy cài đặt npm hoặc trong trường hợp của chúng tôi khi chúng tôi chạy tập lệnh dev sẽ tự động xử lý việc cài đặt nếu cần, như thư mục tiếp theo mà nó muốn lấy cũng bị bỏ qua và chúng ta không cần phải lo lắng về điều đó trong quá trình phát triển, thư mục thứ ba là thư mục công cộng, khá ổn

quan trọng là nơi tất cả các tài sản tĩnh như hình ảnh và SVG của bạn được đặt. Cuối cùng chúng ta đã có phần bắt đầu của chương trình. Thư mục nguồn bên trong thư mục nguồn là thư mục app, tức là bộ định tuyến ứng dụng, đây là nơi chúng ta sẽ dành phần lớn thời gian của chúng ta trong khóa học này, hiện tại nó chứa bốn tệp, biểu tượng F cho tab trình duyệt, biểu tượng toàn cục. CSS cho bố cục kiểu trên toàn ứng dụng. TSX cho Các thành phần giao diện người dùng dùng chung trên các trang và trang. TSX tạo ra những gì bạn thấy tại localhost với giá 3000 trên trang này. TSX là Những gì chúng tôi đã chỉnh sửa trước đó, thành phần Home được định nghĩa ở đây sẽ được lắp vào layout. TSX dành cho trẻ em Pro top đến Tạo giao diện người dùng hoàn chỉnh trong bố cục. TSX, tùy vào phiên bản nhỏ của nexs, bạn có thể thấy phông Guist được nhập dưới dạng

Phông chữ Google hoặc cũng có thể được tham chiếu như một phông chữ cục bộ không ảnh hưởng đến việc học của chúng ta nên đừng quá lo lắng về nhưng để tôi giải thích cách mọi thứ kết nối khi chúng ta chạy lệnh npm run Dev trong terminal thì quá trình thực thi bắt đầu từ package.json chuyển đến bố cục. TSX hiển thị thành phần bố cục gốc cho URL localhost 3000 mà nó tìm kiếm Thành phần trong trang. TSX trong thư mục ứng dụng là thành phần chính của chúng ta, nó hiển thị thành phần này bên trong root Bố cục bạn có thể đang thắc mắc thư mục ứng dụng này xử lý định tuyến trong ứng dụng của chúng ta như thế nào, nhưng trước khi chúng ta đến đó, chúng ta cần đề cập đến một số khái niệm react mới là nền tảng cho cách chúng ta viết mã năm sau, hãy cùng khám phá những điều đó

---

**Điều hướng:** ← [Hello World](Bai_02_hello-world.md) · Tiếp theo → [Before We Start](Bai_04_before-we-start.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
