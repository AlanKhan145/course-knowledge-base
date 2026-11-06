---
lesson_id: "M06-L08"
module: "Rendering và React Server Components"
title: "Static Rendering"
source_version: "Next.js 15 App Router"
video_start: "03:50:57"
video_duration: "11 phút 07 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. Static Rendering

> **Module 06 — Rendering và React Server Components** · **Thời lượng video:** 11 phút 07 giây · **Mốc:** 03:50:57 · **Mức độ:** Trung cấp

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=13857s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/rendering)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Static Rendering**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **rendering và react server components**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Static Rendering** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Static Rendering** — Static rendering tạo kết quả có thể tái sử dụng khi build/caching; phù hợp nội dung ít thay đổi.
**2. Static Rendering** — Ưu điểm hiệu năng tốt và giảm xử lý lặp; phải thiết kế chiến lược làm mới dữ liệu.
**3. Static Rendering** — Kiểm tra output khi npm run build để biết route static hay dynamic.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/about/page.tsx`

```tsx
export default function About() {
  return <article><h1>Về chúng tôi</h1><p>Nội dung ít thay đổi.</p></article>;
}
// Chạy npm run build và xem route được build tĩnh hay động.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Static Rendering**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Static Rendering** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Static Rendering** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Static rendering tạo kết quả có thể tái sử dụng khi build/caching; phù hợp nội dung ít thay đổi.

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

- **Video nguồn:** [Static Rendering — 03:50:57](https://www.youtube.com/watch?v=k7o9R6eaSes&t=13857s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/rendering](https://nextjs.org/docs/15/app/building-your-application/rendering).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

rendering tĩnh là một chiến lược rendering máy chủ, trong đó chúng tôi tạo các trang HTML khi xây dựng ứng dụng hãy coi đó như việc chuẩn bị toàn bộ nội dung trước khi bất kỳ người dùng nào truy cập trang web của bạn sau khi đã xây dựng các Trang này có thể được CDN lưu vào bộ nhớ đệm và phục vụ ngay lập tức cho người dùng. Điều thực sự thú vị về cách tiếp cận này là nó cũng tương tự Trang dựng sẵn có thể được chia sẻ giữa nhiều người dùng khác nhau, giúp ứng dụng của bạn tăng hiệu năng đáng kể, điều này giúp hiển thị tĩnh hoàn hảo cho các mục như bài blog, danh sách sản phẩm thương mại điện tử, tài liệu và tiếp thị. Trang ngay bây giờ rằng chúng ta hiểu thế nào là kết xuất tĩnh và khi nào nên sử dụng nó, bạn có thể thắc mắc chúng ta thực sự sử dụng nó như thế nào

hoặc cụ thể hơn, làm thế nào để chúng ta bảo NS hiển thị tĩnh một tuyến đường cụ thể? Đây là tin tốt bạn không cần phải Do Anything Special Static rendering là chiến lược mặc định trong bộ định tuyến ứng dụng Tất cả các tuyến đều được chuẩn bị tự động tại thời gian build mà không có thiết lập bổ sung nào, giờ bạn có thể đang nghĩ khoan đã, bạn cứ nói về việc tạo HTML ở Thời gian xây dựng nhưng chúng tôi chưa xây dựng ứng dụng đúng cách, chúng tôi chỉ đang chạy nó ở chế độ phát triển bây giờ, điều đó rất tuyệt Câu hỏi: Hãy nói về sự khác biệt giữa máy chủ sản xuất và máy chủ phát triển. Trong sản xuất, chúng ta tạo một Tối ưu hóa xây dựng và triển khai ngay trên các thay đổi chuyến bay sau khi triển khai một máy chủ phát triển, mặt khác,

tập trung vào trải nghiệm của nhà phát triển và chúng tôi cần một điều gì đó linh hoạt hơn, chúng tôi cần thấy ngay các thay đổi của mình trong Trình duyệt mà không xây dựng lại ứng dụng mỗi lần, đó là lý do đội tiếp theo đưa ra quyết định thông minh trong các trang sản xuất được dựng sẵn một lần trong quá trình xây dựng, nhưng trong quá trình phát triển, các trang này được dựng sẵn ở mọi yêu cầu, hãy truy cập trang chủ. Đã được render trước và phục vụ Làm mới lại và phục vụ điều này đảm bảo bạn luôn thấy mã mới nhất của mình thay đổi trong mỗi tiếp theo yêu cầu cũng hiển thị một chỉ báo tuyến tĩnh trong quá trình phát triển để giúp bạn xác định Tuy nhiên, tôi phải nói rằng các tuyến đường là tĩnh, đừng quá lo lắng về việc tạo tĩnh trong quá trình phát triển, những gì

Điều quan trọng thực sự là hiểu cách nó hoạt động khi bạn xây dựng ứng dụng cho sản xuất trước khi chúng ta đi sâu vào quá trình xây dựng Quy trình, hãy dừng máy chủ dev và dọn dẹp bằng cách xóa thư mục tiếp theo được tạo trong quá trình phát triển. Tiếp theo, hãy thêm một liên kết đến Trang Giới thiệu từ trang gốc. Tệp TSX để sao chép liên kết đến bảng điều khiển và thay đổi HF cũng như văn bản trong Trang trên, chúng ta cũng sẽ hiển thị thời gian hiện tại, nên về trang trong dấu ngoặc nhọn là ngày mới. để loal time string này sẽ hãy giúp chứng minh một điểm sau này, bây giờ trong terminal run lệnh npm run build, điều này tạo ra một bản build sản xuất tối ưu cho ứng dụng của chúng tôi. đầu ra lại được chuyển vào thư mục tiếp theo nhưng lần này nội dung sẽ khá khác so với những gì chúng ta thấy trong quá trình

Phát triển: Có khá nhiều điều để phân tích ở đây, vậy hãy bắt đầu với những gì chúng ta thấy trong nhà ga, bạn sẽ nhận thấy ba các cột hiển thị thông tin về từng tuyến đường, kích thước tuyến đường và lần tải đầu tiên, JS route khá đơn giản, đó chính là tuyến đường nên SL về và/bảng điều khiển ví dụ kích thước cho thấy lượng dữ liệu cần tải xuống khi điều hướng đến đó trang client trang tương ứng trong trình duyệt lần đầu tải J cho biết lượng tải xuống khi tải ban đầu từ máy chủ, hãy phân tích các con số này trước, có một gói chia sẻ mà tất cả các tuyến đều sử dụng nó bao gồm mã khung chạy toàn cục CSS của bạn, mã nhà cung cấp như react chẳng hạn, và một số mã liên quan đến tuyến đường được chia sẻ

Bundle có dung lượng 105 KB khi xem xét từng tuyến riêng lẻ từ một trang gốc đến một trang. TSX trong thư mục ứng dụng là 8.4 KB, tuy nhiên khi ai đó truy cập trang chủ, họ sẽ tải cả thư mục này và tệp chia sẻ bundle tổng cộng 114 KB nexts cũng tự động tạo trang 404 không tìm thấy, nó rất nhỏ với 979 bytes nhưng cần 106 KB với gói chia sẻ, trang trên là thành phần máy chủ khá nhẹ, chỉ 136 byte cho phía khách điều hướng và 105 KB cho máy chủ tải trang bảng điều khiển là thành phần khách hàng lớn hơn một chút ở mức 370 bytes và 106 KB từ máy chủ bên cạnh mỗi tuyến bạn sẽ thấy một số ký hiệu và ở cuối là một biểu tượng của năm sau

Chú giải cho thấy cách mỗi tuyến được hiển thị trên trang root route của chúng tôi. TSX có một vòng tròn rỗng biểu thị tĩnh việc hiển thị tương tự cũng áp dụng cho không tìm thấy và bảng điều khiển, tất cả đều được hiển thị sẵn tại thời gian hóa đơn dưới dạng HTML tĩnh Những dấu hiệu này rất hữu ích khi bạn mới bắt đầu với hành vi tự làm đau tiếp theo và muốn hiểu chuyện gì đang xảy ra Giờ hãy cùng xem qua đầu ra build, tiếp theo sẽ đặt mọi thứ vào thư mục nextt chứa tất cả các file cần thiết để phục vụ ứng dụng của chúng ta cho trình duyệt, chúng ta sẽ tập trung vào hai thư mục chính: máy chủ và thư mục tĩnh bên trong thư mục máy chủ: Có một thư mục ứng dụng phù hợp với cấu trúc tuyến của ứng dụng chúng tôi. Để tôi chỉ cho bạn điều quan trọng.

các tệp bạn sẽ tìm thấy ở đây, đầu tiên chúng ta có các tệp HTML, xem thông tin build của chúng ta hiển thị trang gốc là tĩnh như thế nào. Tìm thấy index.html trong thư mục ứng dụng cùng một câu chuyện với trang không tìm thấy của chúng tôi. HTML chúng ta cũng có một phần về. HTML với trang H1 HTML về và dấu thời gian cùng bảng điều khiển. HTML với tiêu đề của nó đầu vào và đoạn văn bạn có thể thắc mắc tại sao chúng ta thấy HTML cho các thành phần khách hàng, bởi vì ngay cả các thành phần khách hàng cũng là được dựng sẵn như một bước tối ưu hóa, điều mà chúng ta đã bàn khi học về các thành phần của khách hàng nhưng Các tệp HTML nằm trong toàn bộ câu chuyện. Mỗi tuyến đường cũng nhận được cái gọi là payload RSC chẳng hạn. RSC cho thành phần về máy chủ và bảng điều khiển.

RSC cho thành phần khách bảng điều khiển các tệp với định dạng Json đặc biệt này được react tạo ra cho mỗi tuyến đường và đại diện cho Dom ảo của bạn một cách siêu nhỏ gọn bằng cách sử dụng các chữ viết tắt và tham chiếu nội bộ cho các thành phần máy chủ này payload bao gồm kết quả thực tế được hiển thị như thẻ H1 với văn bản về trang trong đó, các thành phần khách hàng hoạt động một chút khác, payload của họ có các chỗ giữ chỗ cho thấy các thành phần của khách hàng nên đặt ở đâu cùng với các tham chiếu đến ví dụ, các tệp JavaScript, bảng điều khiển, định tuyến payload của chúng ta, chỉ ra nơi mã thành phần của nó tồn tại tĩnh chunks ứng dụng bảng điều khiển dấu gạch nối DD 953b DJ bên cạnh thư mục máy chủ chúng ta có thư mục tĩnh này đào sâu vào thư mục tĩnh

chunks app và bạn, bạn sẽ tìm thấy tất cả các tuyến đường của chúng tôi, thư mục bảng điều khiển ở đây có tệp mã component mà chúng ta đã thấy đã tham chiếu trong payload RSC về những thứ cần thiết cho việc đối chiếu và cấp nước, thẻ H1, đầu vào bảng điều khiển, v.v. để chúng ta hiểu đầu ra build, hãy phục vụ ứng dụng của chúng ta từ thư mục, chạy lệnh npm Run start. Truy cập LCOS 3000 và với các công cụ phát triển của bạn đang mở, thực hiện bộ nhớ đệm trống rồi tải lại cứng, xem xét các tài nguyên khác nhau có thể việc đầu tiên cần kiểm tra là yêu cầu Local Host này, nó đang đến dưới dạng một loại tài liệu, đây là index.html chúng ta đã thấy trước đó trong thư mục ứng dụng máy chủ, nhấp vào xem trước và bạn có thể thấy bản xem trước của trang HTML

phản hồi hiển thị cho bạn mã HTML ngoài HTML Tôi muốn thu hút sự chú ý của bạn đến hai tệp RSC bảng điều khiển \_ RSC và về uncore RSC, những điều này rất cần thiết để xây dựng giao diện người dùng ở phía khách hàng khi chúng ta điều hướng đến slab hoặc/ bảng điều khiển sử dụng các liên kết cũng có thành phần bảng điều khiển mã trang DD 953b DJ đã được tải về. Đây là các đoạn mã Điều thú vị là xóa tab mạng và nhấp vào thông tin về và bảng điều khiển, ví dụ như về thành phần và thành phần bảng điều khiển Hãy chú ý cách chúng hiển thị ngay lập tức mà không chạm đến máy chủ, đó là vì tải ban đầu đã bao gồm tất cả mọi thứ cần thiết cho việc điều hướng phía client nên chúng tôi đã có mọi thứ cần thiết ngay trong trình duyệt, nhưng khoan đã, tiếp theo SH thế nào rồi

Biết gửi cho chúng tôi thông tin về giới thiệu và bảng điều khiển trước khi chúng tôi nhấp vào bất cứ thứ gì, nhờ một tính năng gọi là Prefetch một kỹ thuật thông minh tải trước các tuyến đường ở nền khi các liên kết của chúng trở nên hiển thị cho các liên kết tĩnh Các tuyến như của chúng tôi NextJS tự động lấy trước và lưu bộ nhớ đệm toàn bộ tuyến đường nên khi trang chủ của chúng tôi tải các liên kết đến About và Dashboard Nexts đã có việc prefetge About và các tuyến điều hướng trên bảng điều khiển để điều hướng tức thì, nhưng còn về Giới thiệu. HTML và bảng điều khiển. Các tệp HTML mà chúng ta đã thấy trước đó trong thư mục máy chủ khi bạn nhập URL trực tiếp hoặc nhấn làm mới trong trình duyệt, đó là lúc bạn nhận được toàn bộ tài liệu HTML trực tiếp từ máy chủ để

khi bạn điều hướng đến slab 3000 đầu tiên cục bộ, lần này bạn sẽ thấy tài liệu về là HTML cho/ bảng điều khiển với HTML, bạn cũng sẽ thấy Nhận mã cần thiết để uống nước, ồ và nhớ dấu thời gian chúng tôi đã thêm vào trang Giới thiệu, chú ý cách nó giữ nguyên Dù bạn làm mới bao nhiêu lần, đó là vì nó đã bị khóa khi chúng tôi xây dựng ứng dụng, chúng tôi sẽ làm vậy Khám phá thêm về rendering nhưng đây là những gì chúng ta đã học được, render tĩnh là một chiến lược mà HTML được tạo ra tại thời gian xây dựng cùng với tải RSCP HTML cho các thành phần và các đoạn JavaScript cho việc hydration phía khách hàng là đã tạo các lượt truy cập tuyến trực tiếp phục vụ các tệp HTML trong khi điều hướng phía khách sử dụng payload RSC và các đoạn JavaScript

Nếu không có thêm yêu cầu máy chủ, điều này làm cho render tĩnh trở nên tuyệt vời về hiệu năng, đặc biệt trong blog. Tài liệu và trang tiếp thị, tôi biết đây là rất nhiều thứ để tiếp thu, nếu một số phần cảm thấy mơ hồ thì tôi khuyên bạn nên thử tự chạy mã nguồn, xem tab mạng và thử nghiệm, cách tốt nhất để hiểu các khái niệm này là xem Họ đang hoạt động, mục tiêu của tôi không chỉ là chỉ cho bạn cách sử dụng tiếp theo mà còn giúp bạn hiểu tại sao mọi thứ lại hoạt động Cách họ làm trước đây chúng ta đã học về chiến lược rendering máy chủ đầu tiên, tức là static rendering. Bây giờ hãy cùng tìm hiểu về chiến lược thứ hai.

---

**Điều hướng:** ← [Rendering Lifecycle in RSCs](Bai_07_rendering-lifecycle-in-rscs.md) · Tiếp theo → [Dynamic Rendering](Bai_09_dynamic-rendering.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
