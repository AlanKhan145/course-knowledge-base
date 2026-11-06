---
lesson_id: "M04-L02"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Error Handling"
source_version: "Next.js 15 App Router"
video_start: "01:40:06"
video_duration: "5 phút 02 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 02. Error Handling

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 5 phút 02 giây · **Mốc:** 01:40:06 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6006s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Error Handling**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Error Handling** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Error Handling** — error.tsx là Client Component nhận error và reset; hoạt động như Error Boundary trong phạm vi segment.
**2. Error Handling** — Thông báo an toàn cho người dùng, không render stack trace hoặc thông tin nhạy cảm.
**3. Error Handling** — Log lỗi phía server có ngữ cảnh để tìm nguyên nhân thay vì chỉ hiển thị message thô.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/dashboard/error.tsx`

```tsx
"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section><p>Đã xảy ra lỗi.</p><button onClick={() => reset()}>Thử lại</button></section>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Error Handling**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Error Handling** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Error Handling** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** error.tsx là Client Component nhận error và reset; hoạt động như Error Boundary trong phạm vi segment.

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

- **Video nguồn:** [Error Handling — 01:40:06](https://www.youtube.com/watch?v=k7o9R6eaSes&t=6006s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Khía cạnh quan trọng của ứng dụng chúng tôi, cụ thể là xử lý lỗi, được triển khai thông qua một tệp đặc biệt gọi là Error. TSX Để tôi chỉ cho bạn cách hoạt động ngay bây giờ khi chúng ta truy cập sản phẩm localhost 3000 SL/ đánh giá SL1 SL1 mọi thứ đều hoạt động trơn tru mà chúng ta có thể thấy đánh giá đầu tiên về sản phẩm đầu tiên của chúng tôi, URL này tương ứng với trang. Tệp TSX trong thư mục ID đánh giá của chúng tôi nhưng hãy cùng Hãy thực tế rằng mọi thứ không phải lúc nào cũng hoàn hảo. Yêu cầu mạng có thể thất bại và dữ liệu có thể không khả dụng. mô phỏng một kịch bản lỗi trong trang review ID của chúng tôi để xem cách xử lý các tình huống như vậy bên ngoài thành phần của chúng tôi. Tôi sẽ tạo một hàm tạo ra một số nguyên ngẫu nhiên từ 0 đến bất kỳ số đếm nào chúng ta đưa vào bên trong thành phần mà chúng ta

sẽ gọi hàm này với hai làm đối số, vì vậy hàm giờ sẽ trả về số 0 hoặc 1 nếu trả về Thứ nhất, chúng ta xuất hiện lỗi với thông báo lỗi khi tải lại. Nếu chúng ta làm mới trình duyệt vài lần, cuối cùng sẽ thấy runtime chưa được xử lý. lỗi với thông báo lỗi của chúng tôi lỗi tải đánh giá đây đang ở chế độ phát triển Hãy xem nó hoạt động thế nào trong sản xuất bằng cách chạy npm chạy bản xây dựng sau khi hoàn tất chạy lệnh npm Run start ngay khi lỗi xảy ra sau khi làm mới vài lần, chúng tôi nhận được lỗi ứng dụng chung, một ngoại lệ phía máy chủ đã xảy ra và chúng ta sẽ xem thông báo lỗi của chúng tôi trong bài đánh giá tải lỗi terminal điều này không tốt cho người dùng của chúng tôi đúng không? thông báo lỗi không phải

hữu ích và tệ hơn là lỗi trong thành phần review ID lồng sâu của chúng tôi sẽ làm hỏng toàn bộ ứng dụng mà chúng tôi có thể cải thiện bằng cách xử lý lỗi một cách khéo léo chỉ chứa chúng vào phần bị ảnh hưởng trong khi giữ lại phần còn lại của ứng dụng Chạy đây là nơi lỗi. TSX rất hữu ích, hãy tạo một cái trong thư mục ID đánh giá của chúng tôi, ngay cạnh trang. TSX Lỗi. TSX ở đây chúng ta sẽ định nghĩa một thành phần khách hàng để sử dụng chỉ thị khách hàng ở trên cùng lỗi xuất hàm mặc định biên trả về lỗi thẻ div trong ID đánh giá, thành phần này hoạt động như một ranh giới lỗi xung quanh trang của chúng ta. Tệp TSX rất quan trọng cần lưu ý rằng ranh giới lỗi phải là các thành phần của máy khách bạn sẽ cần thêm sử dụng máy khách tại

đầu file contrl C và khởi động lại máy chủ dev với npm chạy Dev refresh trang cho đến khi chúng ta gặp lỗi, giờ mới thấy lỗi trong ID xem xét là văn bản từ lỗi. TSX tất nhiên trong một ứng dụng thực tế bạn sẽ muốn tạo kiểu cho nó phù hợp với thiết kế ứng dụng của bạn, nhưng điều tuyệt vời như bạn có thể nhận thấy là phần còn lại của Ứng dụng vẫn tiếp tục hoạt động, chúng tôi có phần tiêu đề, các sản phẩm nổi bật từ bố cục sản phẩm và chân trang chỉ thành phần review ID đã bị thay thế bằng jsx được định nghĩa nhầm lẫn. TSX bây giờ thành phần này nhận đối tượng lỗi dưới dạng prop nên lỗi loại lỗi có thể dùng nó để tạo lỗi

Thông báo sẽ cung cấp thông tin hữu ích hơn vì vậy hãy thay error trong review ID bằng error. bằng cách thay thế văn bản mã cứng của chúng tôi bằng Lỗi. Thông báo rằng bây giờ chúng ta sẽ thấy lỗi khi tải lại, khi mọi thứ xảy ra sự cố, lỗi mà chúng ta đã đưa vào ph. Tệp TSX này Thông báo tương tự được gửi đến lỗi của chúng tôi. Thành phần TSX, đây là thứ gây ra lỗi. TSX mạnh mẽ đến mức trong bộ định tuyến ứng dụng tự động bao bọc các đoạn tuyến và các đoạn con lồng nhau của chúng trong một lỗi phản ứng ranh giới bạn có thể tạo giao diện lỗi tùy chỉnh cho các đoạn cụ thể bằng cách sử dụng cấu trúc hệ thống tập tin để cô lập lỗi các phân đoạn bị ảnh hưởng trong khi giữ cho phần còn lại của ứng dụng hoạt động tốt, cuối cùng nó cho phép bạn cố gắng khôi phục

từ lỗi mà không cần tải lại toàn trang, giờ chúng ta đã xác định được tất cả các tệp đặc biệt trong ứng dụng, hãy cùng nhau nhìn vào bức tranh lớn hơn, slide cho chúng ta thấy cấu trúc thành phần trong một thành phần bố trí thư mục ở phía trên tiếp theo là template rồi ranh giới lỗi từ error. TSX cho lỗi thời gian chạy, một ranh giới chờ đợi khi tải. TSX một ranh giới lỗi khác từ không tìm thấy. TSX cho tài nguyên bị thiếu và cuối cùng là thành phần trang với phần này Thiết lập xử lý lỗi đã sẵn sàng: Hãy cùng khám phá các kỹ thuật xử lý lỗi nâng cao hơn. Khi tiếp tục, trước đây chúng ta đã học cách xử lý lỗi một cách khéo léo bằng Error.

---

**Điều hướng:** ← [Loading UI](Bai_01_loading-ui.md) · Tiếp theo → [Recovering from Errors](Bai_03_recovering-from-errors.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
