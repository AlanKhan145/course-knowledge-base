---
lesson_id: "M04-L10"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Intercepting Routes"
source_version: "Next.js 15 App Router"
video_start: "02:14:52"
video_duration: "13 phút 17 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 10. Intercepting Routes

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 13 phút 17 giây · **Mốc:** 02:14:52 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=8092s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Intercepting Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Intercepting Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Intercepting Routes** — (.) cùng cấp, (..) lên một cấp route segment và (...) bắt đầu từ root app; dùng để intercept navigation.
**2. Intercepting Routes** — Phù hợp mở modal ảnh/chi tiết trong feed nhưng truy cập URL trực tiếp lại có trang chi tiết đầy đủ.
**3. Intercepting Routes** — Phân biệt soft navigation với hard navigation để dự đoán hành vi modal.

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
src/app/
├── photos/[id]/page.tsx          # Full page cho /photos/1
└── feed/
    ├── page.tsx
    └── (..)photos/[id]/page.tsx  # Minh họa intercept segment gần đó;
                                 # điều chỉnh vị trí folder theo cây thực tế
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Intercepting Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Intercepting Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Intercepting Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** (.) cùng cấp, (..) lên một cấp route segment và (...) bắt đầu từ root app; dùng để intercept navigation.

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

- **Video nguồn:** [Intercepting Routes — 02:14:52](https://www.youtube.com/watch?v=k7o9R6eaSes&t=8092s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Các mẫu định tuyến nâng cao mà chúng ta đã học về các tuyến song song, giờ hãy cùng tìm hiểu về việc chặn các tuyến đường Hãy cùng giải quyết vấn đề này thành hai phần, đầu tiên chúng ta sẽ hiểu các Cốt lõi Concept và quy ước, sau đó chúng ta sẽ xem cách diễn đạt Chúng để sử dụng thực tế: chặn các tuyến là một cơ chế định tuyến tiên tiến cho phép bạn tải một tuyến từ một phần khác của ứng dụng của bạn trong bố cục hiện tại, nó đặc biệt hữu ích khi bạn muốn hiển thị phần mới nội dung trong khi vẫn giữ người dùng của bạn trong cùng một bối cảnh để hiểu rõ hơn, để tôi chia sẻ với bạn một vài thực tế ví dụ xem xét luồng đăng nhập, thường nhấp vào liên kết đăng nhập sẽ đưa bạn đến một trang mới nhưng có các tuyến đường chặn

bạn có thể hiển thị một mô hình thay thế trong khi vẫn cập nhật URL đến/ đăng nhập, điều này có nghĩa là chia sẻ URL đó hoặc làm mới Trang vẫn hoạt động như mong đợi, hiển thị toàn bộ trang đăng nhập hoặc xem xét một thư viện ảnh thay vì chuyển đến Trang ảnh riêng biệt Khi ai đó nhấp vào một bức ảnh, bạn có thể hiển thị mô hình với ảnh phóng to với chi tiết như tên và vị trí của nhiếp ảnh gia sẽ cập nhật URL để phù hợp với ảnh cụ thể, giúp truy cập URL đó có thể chia sẻ Trực tiếp sẽ hiển thị toàn bộ trang ảnh của tất nhiên, việc định nghĩa các tuyến chặn trong ứng dụng XJS liên quan đến một số Quy ước: Hãy cùng tìm hiểu mã VS và hiểu chúng qua các ví dụ, chúng ta sẽ bắt đầu bằng việc thiết lập thư mục của mình.

Cấu trúc trong thư mục ứng dụng của bạn Tạo một thư mục mới có tên F1 viết tắt cho thư mục một có một trang. Tệp TSX chứa một trang thành phần react đơn giản. Hàm mặc định xuất TSX F1 trả về thẻ H1 trang F1 bên trong thư mục F1, hãy tạo một thư mục khác F2 với một trang riêng. TS X là trang F2. TSX ở đây xuất hàm mặc định F2 return và thẻ H1 ghi F2 trang tiếp theo, hãy cập nhật thành phần F1 của chúng ta để bao gồm một liên kết đến F2, tức là nhập liên kết từ liên kết SL tiếp theo và cho jsx thêm một thẻ div với thành phần liên kết trỏ đến F2 H bằng với slf1 slf2 hãy nhớ thư mục F2 được lồng bên trong Thư mục F1 trong trình duyệt khi bạn truy cập Local Host 3000 slf1, bạn sẽ thấy thành phần F1 kèm liên kết đến F2, nhấp vào liên kết này sẽ

dẫn bạn thẳng đến/ F1 slf2 chúng ta thấy trang jsx F2 hãy thay đổi hành vi này với một tuyến đường chặn để hiểu Chặn các quy ước định tuyến tốt hơn, hãy cùng suy nghĩ về hai yếu tố chính: Thư mục Nguồn và thư mục đích, chúng ta muốn chặn đường F2 khi điều hướng từ đường F1, nên F1 là thư mục nguồn và F2 là Target thư mục, hãy bắt đầu bằng cách tạo một thư mục mới trong thư mục nguồn, đây sẽ là tuyến chặn tên thư mục cần khớp với thư mục mục F2 của chúng ta nhưng chúng ta cần một tiền tố đặc biệt để hoạt động, tạm thời tôi sẽ thêm dấu gạch nối chặn Khi tôi giải thích tiền tố thực sự cần thiết, việc sử dụng tiền tố VI rất quan trọng vì nó thông báo cho các nexs

nơi Target Route được đặt, hãy chú ý cách cả F2 và F2 bị chặn đều ở cùng một cấp độ trong cấu trúc thư mục của chúng tôi Khi chúng ta muốn chặn một tuyến đường ở cùng mức như thế này, chúng ta sử dụng ký hiệu dấu chấm trong ngoặc đơn, vậy hãy thay thế Dấu gạch nối bị chặn với dấu ngoặc đơn và dấu chấm bên trong, bên trong thư mục này chúng ta sẽ tạo một trang. Tệp TSX với một react thành phần hiển thị nội dung bị chặn của chúng tôi, vì vậy khi xuất hàm mặc định bị chặn F2, chúng tôi trả về một thẻ H1 với tiền tố và văn bản nói rằng trang F2 bị chặn khởi động lại máy chủ dev với npm chạy Dev và điều hướng đến/ F1 trong trình duyệt nhấp vào liên kết F2, URL cập nhật thành slf1 slf2 nhưng hiển thị nội dung bị chặn làm mới trang này

tải trang F2 gốc thay vào đó, đây là ý tưởng đằng sau việc chặn các tuyến đường, nó cho phép bạn hiển thị giao diện người dùng thay thế bằng bảo toàn ngữ cảnh nhưng mặc định về giao diện người dùng chuẩn trên trang Direct sẽ tải quy ước đầu tiên bạn cần biết chặn các tuyến khá đơn giản, chúng tôi sử dụng DOT trong ngoặc đơn để khớp các đoạn ở cùng cấp độ trong cấu trúc thư mục của bạn, điều này tương tự như quy ước đường dẫn tương đối, nơi chúng ta sử dụng DOT để tham khảo thư mục hiện tại, nếu bạn muốn chặn thứ gì đó cao hơn một cấp thì sao? Không vấn đề gì, chúng tôi chỉ dùng hai các dấu chấm trong dấu ngoặc đơn làm tiền tố tương tự như cách chúng ta sử dụng hai dấu chấm để chỉ thư mục cha trong đường dẫn tương đối

Quy ước, để tôi cho bạn thấy ý tôi với một ví dụ, hãy tạo một thư mục mới tên là F3 trong thư mục ứng dụng của chúng ta. Vậy trong thư mục mới ứng dụng F3, tạo một trang. Tệp TSX với hàm mặc định xuất thành phần react đơn giản F3 trả về thẻ H1, trang F3, giờ hãy chuyển sang trang. TSX trong thư mục F1 và thêm liên kết đến F3, văn bản là F3 và H slf3 khi bạn thử điều này trong trình duyệt, nhấp vào liên kết F3 này sẽ đưa bạn thẳng đến slf3, điều này hiển thị trang F3 nhưng hãy làm Điều thú vị hơn là khi chặn đường dẫn này trong ví dụ này, thư mục nguồn của chúng ta là F1, nơi chúng ta đang điều hướng từ và thư mục mục tiêu của chúng ta là F3, nơi chúng ta muốn đến, nên bên trong thư mục nguồn F1, chúng ta sẽ tạo một thư mục mới phù hợp với

Tên thư mục mục là F3 nên thư mục mới F3 chúng ta cần một tiền tố đặc biệt để hoạt động nhưng tôi sẽ thêm dấu gạch nối chặn làm chỗ giữ trong khi tôi giải thích tiền tố thực sự cần thiết vì F3 nằm một cấp trên vị trí chúng ta đang ở trong thư mục Cấu trúc: Chúng ta sẽ dùng dấu chấm trong ngoặc đơn làm tiền tố giống như khi bạn dùng do do slash để đi lên một Thư mục trong các tệp pod Bên trong thư mục này hãy tạo một trang. TSX với một thành phần cho thấy chúng ta có Đã chặn thành công trang Route SO. TSX và mặc định xuất một hàm gọi là intercepted F3, hiển thị tiền tố cũng như trang F3 bị chặn nội dung giúp máy chủ Dev của bạn khởi động lại nhanh npm chạy Dev và bây giờ trong

the/ F1 route khi bạn nhấp vào liên kết F3 đó, URL vẫn hiển thị slf3 nhưng bạn sẽ thấy nội dung bị chặn của chúng tôi thay vào đó Nếu bạn làm mới trang, bạn sẽ trở lại nội dung F3 gốc đúng như bạn mong đợi, hy vọng là Quy ước bắt đầu có ý nghĩa Bây giờ hãy xem cách ghép các phân đoạn cao hơn hai cấp trong cấu trúc thư mục của chúng ta Hãy bắt đầu bằng cách tạo một thư mục mới tên F4 trong thư mục ứng dụng của chúng ta, bên trong đó chúng ta sẽ thêm một trang đơn giản. TSX xuất file hàm mặc định F4 và trả về một thẻ H1 ghi F4 page cho ví dụ này chúng ta sẽ chặn F4 khi điều hướng từ F2, vậy hãy thêm một liên kết đến F4 trong liên kết nhập trang F2 và gọi nó để điều hướng đến

F4, một TR sẽ là slf4 nếu bạn thử điều này trên trình duyệt bằng cách điều hướng đến slf1 slf2 và nhấp vào F4 thì nó sẽ đưa bạn đến trực tiếp đến/ F4 và bạn sẽ thấy nội dung trang F4 nhưng chúng tôi sẽ thay đổi hành vi đó cho kịch bản này nguồn của chúng tôi thư mục là F2 nơi chúng ta đang điều hướng và thư mục đích là F4, nơi chúng ta muốn vào bên trong thư mục nguồn F2, chúng ta sẽ tạo một thư mục mới phù hợp với tên thư mục mục đích F4, chúng ta cần một tiền tố đặc biệt để tạo nó hoạt động nhưng tôi sẽ thêm dấu gạch nối chặn làm chỗ giữ trong khi giải thích tiền tố thực tế chúng ta cần vì các bộ F4 hai cấp trên vị trí của cấu trúc thư mục, chúng ta sẽ sử dụng dấu ngoặc đơn với hai dấu chấm và một tập hợp khác

dấu ngoặc đơn với hai dấu chấm, đây là tiền tố của chúng ta để đi lên hai thư mục bên trong thư mục, hãy tạo một trang. Tệp TSX với một thành phần cho thấy chúng tôi đã chặn thành công tuyến đường nên xuất hàm mặc định chặn F4 tiền tố và nội dung giờ giúp máy chủ của bạn khởi động lại nhanh npm chạy Dev và thử khi tải slf1 slf2 bạn sẽ thấy liên kết đến F4, nhấp vào liên kết và bạn sẽ thấy nội dung bị chặn của chúng tôi thay vì Trang F4 gốc Nếu bạn làm mới trang, bạn sẽ nhận lại giao diện F4 thông thường. Đây chính xác là điều chúng tôi muốn Đường đi chén, dấu ngoặc kép với hai dấu chấm bên trong quy ước này cực kỳ hữu ích khi bạn cần

để chặn các route nằm ở nhiều cấp độ cao hơn trong cấu trúc thư mục của bạn, hãy nghĩ như sử dụng do/do slash in Tệp thông thường, các bộ phận là cùng một khái niệm chỉ được điều chỉnh cho định tuyến năm sau, đó là lần thứ ba chúng tôi tham gia quy ước chặn tuyến tiếp theo Hãy cùng xem quy ước cuối cùng để chặn các tuyến đường sử dụng ba dấu chấm trong ngoặc đơn để khớp các đoạn Từ thư mục ứng dụng gốc, trước tiên hãy tạo một thư mục mới tên F5 trong thư mục ứng dụng F5 và thêm một trang. Tệp TSX với thành phần react đơn giản xuất hàm mặc định F5 và chúng ta trả về thẻ H1 trang F5 tiếp theo trong thư mục F2 của chúng ta sẽ tạo một thư mục F2 bên trong với một trang giấy. TSX bao gồm một liên kết đến F5 để tên thư mục là F2 bên trong với một trang. Tệp TSX mặc định xuất một

thành phần react với liên kết đến/ F5 trong trình duyệt, điều hướng đến slf1 slf2 slash inner F2 và bạn sẽ thấy Liên kết đến F5, nhấp vào nó hiện tại sẽ đưa bạn trực tiếp đến tuyến F5, SL F5, nhưng nếu bạn muốn chặn tuyến này thì sao? trong trường hợp này, thư mục nguồn của chúng ta là F2 bên trong, nơi chúng ta đang điều hướng và thư mục đích là nơi chúng ta muốn truy cập bên trong thư mục nguồn trong F2 của chúng ta, chúng ta sẽ tạo một thư mục mới phù hợp với tên thư mục mục đích F5, chúng ta cần một thư mục đặc biệt tiền tố để làm cho nó hoạt động nhưng tôi sẽ thêm dấu gạch nối chặn làm chỗ giữ trong khi giải thích tiền tố thực tế cần vì F5 sống nhiều đoạn trên vị trí hiện tại của chúng ta, ta có thể sử dụng dấu ngoặc đơn quy ước đặc biệt với

ba dấu chấm bên trong này sẽ báo cho CH tiếp theo khớp các đoạn bắt đầu từ thư mục ứng dụng gốc tức là từ ứng dụng gốc thư mục có một thư mục F5, hãy tạo tuyến đường chặn của chúng ta với một trang. Hàm mặc định xuất tệp TSX chặn F5 và chúng tôi trả về một thẻ H1 với tiền tố và nội dung, khi bạn khởi động lại máy chủ dev thì npm chạy Dev và điều hướng đến SL F1 slf2 SL inner F2 và nhấp vào liên kết F5, bạn sẽ thấy tuyến đường bị chặn thay vì Trang F5 gốc nhưng nếu bạn làm mới, bạn sẽ nhận lại được tuyến F5 thông thường đúng như chúng tôi muốn, đây là trang thứ tư quy ước sử dụng ba dấu chấm trong ngoặc đơn để khớp các đoạn từ thư mục ứng dụng gốc để kết thúc

chặn các tuyến đường mang lại cho bạn khả năng mạnh mẽ để hiển thị nội dung từ phần khác của ứng dụng trong khi vẫn giữ nguyên người dùng của bạn trong ngữ cảnh hiện tại và slide này là một bảng tóm tắt nhanh về các quy ước mà chúng ta đã đề cập Biết rằng việc chặn đường có thể hơi phức tạp lúc đầu và điều đó hoàn toàn bình thường. Tiếp theo chúng ta sẽ xem xét một cách thực tế Ví dụ này sẽ khiến tất cả những điều này nhấp vào, chúng tôi gần đây đã khám phá các tuyến song song và các tuyến đường chặn để

---

**Điều hướng:** ← [Conditional Routes](Bai_09_conditional-routes.md) · Tiếp theo → [Parallel Intercepting Routes](Bai_11_parallel-intercepting-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
