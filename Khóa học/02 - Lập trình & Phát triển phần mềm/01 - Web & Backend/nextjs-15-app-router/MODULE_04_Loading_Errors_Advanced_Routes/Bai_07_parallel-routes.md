---
lesson_id: "M04-L07"
module: "Trạng thái tải, lỗi và routing nâng cao"
title: "Parallel Routes"
source_version: "Next.js 15 App Router"
video_start: "01:57:31"
video_duration: "8 phút 28 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Parallel Routes

> **Module 04 — Trạng thái tải, lỗi và routing nâng cao** · **Thời lượng video:** 8 phút 28 giây · **Mốc:** 01:57:31 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=7051s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Parallel Routes**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **trạng thái tải, lỗi và routing nâng cao**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Parallel Routes** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Parallel Routes** — Slot đặt tên @analytics, @team có thể render song song trong một layout và được truyền vào qua props.
**2. Parallel Routes** — Phù hợp dashboard đa cột, wizard, ứng dụng nhiều phần có trạng thái điều hướng tương đối độc lập.
**3. Parallel Routes** — Các slot không tự thêm segment @name vào URL; cần hiểu matching khi reload.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `cây thư mục + src/app/dashboard/layout.tsx`

```text
src/app/dashboard/
├── @analytics/page.tsx
├── @team/page.tsx
├── layout.tsx
└── page.tsx

// src/app/dashboard/layout.tsx
export default function Layout({ children, analytics, team }: {
  children: React.ReactNode; analytics: React.ReactNode; team: React.ReactNode;
}) {
  return <><main>{children}</main><section>{analytics}</section><aside>{team}</aside></>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Parallel Routes**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Parallel Routes** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Parallel Routes** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Slot đặt tên @analytics, @team có thể render song song trong một layout và được truyền vào qua props.

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

- **Video nguồn:** [Parallel Routes — 01:57:31](https://www.youtube.com/watch?v=k7o9R6eaSes&t=7051s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/15/app/building-your-application/routing/parallel-routes).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Các khái niệm định tuyến nâng cao Trong phần tiếp theo, chúng ta sẽ bắt đầu với các tuyến song song, chúng là gì, cách thiết lập chúng Và lý do tại sao chúng cực kỳ hữu ích khi xây dựng giao diện người dùng phức tạp cho các tuyến song song là một cơ chế định tuyến tiên tiến cho phép chúng ta kết xuất nhiều Trang cùng lúc trong cùng một bố cục Hãy xem kịch bản 7 xây dựng một bảng điều khiển phức tạp đối với một ứng dụng web, hãy tưởng tượng cần hiển thị phân tích người dùng các chỉ số doanh thu và thông báo cùng lúc trong Cách làm truyền thống giống như vậy là tạo ba thành phần riêng biệt cho mỗi bộ phận và tổ chức chúng theo một bố cục. TSX nằm trong thư mục bảng điều khiển trong thư mục ứng dụng, vậy hãy làm điều đó, giờ chúng ta đã có thư mục bảng điều khiển rồi

Vậy hãy tạo một thư mục mới gọi là Bảng điều khiển phức tạp và thêm bố cục. Tệp TSX sử dụng các thành phần thông thường để mã nguồn Có thể trông như thế này, ba thành phần sẽ được nhập từ các tệp riêng biệt và hiển thị trong Bố cục bảng điều khiển phức tạp, phân tích thành phần người dùng, các chỉ số doanh thu và thông báo, bố cục cũng sẽ hiển thị thành phần từ trang liền kề. TSX là prop con, file này chưa tồn tại nên hãy tạo nó trên trang file mới. TSX xuất hàm mặc định bảng điều khiển phức tạp và trả về một thẻ H1 ghi rằng bảng điều khiển phức tạp cho nhau ba thành phần mà chúng tôi sẽ không định nghĩa đại diện cho một phần bảng điều khiển cụ thể trong giao diện người dùng

chúng như những thẻ sẽ hiển thị dữ liệu cần thiết, trong khi cách tiếp cận dựa trên thành phần truyền thống này hoạt động tốt như bình thường. các tuyến đường có thể đạt được kết quả tương tự với một số lợi ích bổ sung, vậy làm thế nào để triển khai các tuyến song song trong sh song song tiếp theo Routes và XJS được định nghĩa bằng một tính năng gọi là slot giúp tổ chức nội dung theo cách mô-đun để tạo một khe, chúng ta sử dụng quy ước đặt tên thư mục at, mỗi ô được định nghĩa sẽ tự động trở thành một prop trong nó bố cục tương ứng. Tệp TSX cho bảng điều khiển phức tạp của chúng tôi, chúng tôi sẽ tạo ba ô trong bảng điều khiển comp complex thư mục tại người dùng để phân tích người dùng tại doanh thu cho chỉ số doanh thu và tại các thông báo cho thông báo hãy cùng

Triển khai những điều này ngay bây giờ, hãy bắt đầu với thông báo trong thư mục bảng điều khiển phức tạp, tạo một thư mục mới. Gọi thông báo qua một trang. Tệp TSX xuất mặc định một thành phần react gọi là notifications trả về một DI gắn thẻ t với các thông báo văn bản tương tự trong bảng điều khiển phức tạp, lại tạo một thư mục khác tại Revenue tạo một trang. Tệp TSX và xuất mặc định một thành phần react gọi là Revenue metrics trả về một thẻ div ghi Revenue metrics cuối cùng tạo một thư mục khác có một trang. Tệp TSX nên ở trang người dùng. TSX xuất hàm mặc định user Analytics trả về một thẻ div với văn bản Phân tích người dùng: Ba thành phần đơn giản với quy ước đặt tên thư mục AT. Bây giờ chúng ta có thể sử dụng ba ô này trong bố cục của mình.

TSX Điều hay là chúng được tự động truyền vào thành phần bố cục của chúng tôi như các props và không có Import cần thiết, hãy xóa các câu lệnh nhập và chỉ định thêm ba đạo cụ nữa: người dùng doanh thu và thông báo, và đối với các loại cùng ba thành phần người dùng: doanh thu và thông báo. Tôi sẽ cập nhật jsx với các kiểu nội tuyến để phù hợp với bố cục từ trong slide của chúng tôi, bạn có thể tìm thấy mã này trên kho GitHub của tôi, chúng tôi có một thẻ div kèm theo với thẻ sad div để kết xuất phụ kiện trẻ em chúng ta có khe người dùng, khe doanh thu và cuối cùng là khe thông báo, chúng ta cũng tạo một tấm thẻ đẹp component để bao bọc từng khe đó trong thư mục nguồn, chúng ta sẽ tạo một thư mục mới gọi là components với

Thẻ. TSX, tôi sẽ dán mã cho một thành phần card để tiết kiệm thời gian, giờ ở mỗi khe, thay thẻ diff bằng thành phần thẻ đảm bảo nhập thành phần ở phía trên để thông báo được bao bọc bằng chỉ số doanh thu của thẻ Với phân tích thẻ và người dùng được bao quát cùng thẻ, chúng tôi sẵn sàng khi bạn truy cập bảng điều khiển Locost 3000 Complex Bạn sẽ thấy bảng điều khiển phức tạp của chúng tôi với tiêu đề chính ngay tại đây và cả ba khe đều được bố trí đẹp mắt. Phân tích người dùng Các chỉ số doanh thu và thông báo, nếu không hiệu quả, thử khởi động lại máy chủ phát triển, các tuyến song song của chúng tôi hoạt động như mong đợi nhưng Đây là điều quan trọng cần lưu ý: slot không phải là đoạn tuyến và không ảnh hưởng đến cấu trúc URL của bạn, nên nếu bạn thử

Điều hướng đến người dùng SL bảng điều khiển phức tạp hoặc tại người dùng bạn sẽ không thấy phân tích người dùng bạn sẽ nhận được trang 404 không Và điều thú vị hơn nữa là đạo cụ trẻ em thực ra là một khe ngầm không cần chỗ riêng trang SL bảng điều khiển phức tạp của thư mục. TSX giống như trang SL con của bảng điều khiển phức tạp. TSX, về mặt kỹ thuật thì chúng ta đang làm việc với bốn khe trong tệp bố cục, bây giờ để tôi hướng dẫn bạn qua một số trường hợp sử dụng của parallel định tuyến bảng điều khiển với nhiều phần, giao diện xem chia nhỏ, bố cục đa khung giao diện quản trị phức tạp và Thực ra bất kỳ giao diện người dùng nào mà các phần phải hoạt động độc lập, bạn có thể thắc mắc lợi ích của việc xây dựng người dùng là gì.

Giao diện với các tuyến song song làm chúng đặc biệt trong khi các tuyến song song rất tuyệt để tách bố cục vào những vị trí dễ quản lý, đặc biệt khi các nhóm khác nhau làm những phần khác nhau, đó không phải là siêu năng lực chính của họ. Có thể làm được điều đó với các thành phần thông thường, phép màu thực sự của các tuyến song song đến từ hai tính năng chính độc lập Xử lý tuyến đường và điều hướng phụ: Hãy cùng phân tích một trong những đặc điểm hấp dẫn nhất của các tuyến song song là khả năng xử lý từng tuyến một cách độc lập điều này rất quan trọng vì mỗi khe trong bố cục của bạn như người dùng doanh thu và thông báo có thể tự xử lý việc tải và lỗi của chính nó. Điều khiển chi tiết này đặc biệt hữu ích

Trong các trường hợp các phần khác nhau của trang tải với tốc độ khác nhau hoặc gặp lỗi riêng biệt, hãy cân nhắc điều đó Nếu dữ liệu phân tích người dùng của bạn mất thời gian tải nhanh, bạn có thể hiển thị một vòng xoay tải chỉ cho phần đó trong khi mọi thứ khác vẫn tương tác hoặc nếu có sự cố khi lấy các chỉ số Doanh thu, bạn có thể hiển thị thông báo lỗi trong đó Khe cụ thể mà không làm gián đoạn phần còn lại của bảng điều khiển Lợi ích quan trọng khác của việc sử dụng các tuyến song song là Khả năng cung cấp trải nghiệm điều hướng phụ liền mạch trong mỗi tuyến song song mà mỗi khe có thể thực hiện hoạt động như một ứng dụng mini đầy đủ với điều hướng riêng và quản lý trạng thái, người dùng có thể tương tác với từng ứng dụng

phần riêng biệt: áp dụng bộ lọc, sắp xếp dữ liệu hoặc điều hướng qua các trang mà không ảnh hưởng đến các phần khác ví dụ, trong phần thông báo, người dùng có thể muốn chuyển đổi giữa chế độ xem mặc định và chế độ xem lưu trữ để xem các chế độ xem cũ hơn các thông báo này, các tương tác này vẫn nằm trong phần thông báo và các cập nhật URL để phù hợp với chế độ xem hiện tại, điều này giúp URL có thể chia sẻ và giúp người dùng theo dõi vị trí của mình trong ứng dụng, người dùng cũng có thể điều hướng qua các phần khác nhau của ứng dụng mà không cần tải lại trang hoặc thay đổi bố cục không cần thiết khi Thảo luận về điều hướng phụ trong các tuyến song song, có một khái niệm rất quan trọng mà chúng ta cần hiểu, hãy xem là gì

Tiếp theo, hãy cùng đi sâu vào một khía cạnh quan trọng của định tuyến song song, đó là xử lý các tuyến đường không thể so sánh mà chúng ta đã học

---

**Điều hướng:** ← [Handling Global Errors](Bai_06_handling-global-errors.md) · Tiếp theo → [Unmatched Routes](Bai_08_unmatched-routes.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
