---
lesson_id: "M10-L08"
module: "Xác thực, phân quyền và triển khai"
title: "Role Based Access Control"
source_version: "Next.js 15 App Router"
video_start: "06:33:43"
video_duration: "11 phút 06 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 08. Role Based Access Control

> **Module 10 — Xác thực, phân quyền và triển khai** · **Thời lượng video:** 11 phút 06 giây · **Mốc:** 06:33:43 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=23623s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://clerk.com/docs/nextjs/getting-started/quickstart)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Role Based Access Control**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **xác thực, phân quyền và triển khai**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Role Based Access Control** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Role Based Access Control** — RBAC gắn quyền vào vai trò như user, moderator, admin.
**2. Role Based Access Control** — Từ role suy ra policy; kiểm tra policy phía server cho mỗi hành động.
**3. Role Based Access Control** — Một người không có quyền không thể nâng cấp chỉ bằng thay UI hay URL; cần kiểm tra trust boundary.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/lib/require-admin.ts (minh họa)`

```tsx
import "server-only";
import { auth } from "@clerk/nextjs/server";
export async function requireAdmin() {
  const { userId, sessionClaims } = await auth();
  if (!userId) throw new Error("Unauthorized");
  // Ví dụ: app cấp role tin cậy qua custom session claims.
  const role = (sessionClaims as { metadata?: { role?: string } } | null)?.metadata?.role;
  if (role !== "admin") throw new Error("Forbidden");
  return userId;
}
// Claim shape là ví dụ: phải cấu hình đúng với Clerk project đang dùng.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Role Based Access Control**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Role Based Access Control** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Role Based Access Control** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** RBAC gắn quyền vào vai trò như user, moderator, admin.

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

- **Video nguồn:** [Role Based Access Control — 06:33:43](https://www.youtube.com/watch?v=k7o9R6eaSes&t=23623s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://clerk.com/docs/nextjs/getting-started/quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

Hãy chuyển sang một điều thực sự quan trọng đối với các ứng dụng web của bạn: vai trò người dùng và quyền hạn mà hầu hết các ứng dụng đều cần không chỉ kiểm tra xem ai đó đã đăng nhập hay chưa, họ cần các cấp độ quyền khác nhau cho từng người dùng nên Hãy cùng tìm hiểu cách triển khai Access Control dựa trên vai trò bằng clerk trước tiên chúng ta cần cấu hình clerk để làm vai trò người dùng có sẵn trong thư ký token phiên của chúng tôi cung cấp cho chúng tôi cái gọi là siêu dữ liệu người dùng, giống như một bộ lưu trữ không gian cho thông tin người dùng bổ sung. Trong trường hợp của chúng tôi, chúng tôi sẽ sử dụng nó để lưu trữ vai trò người dùng. Chúng tôi sẽ sử dụng cụ thể một thứ gì đó. gọi là metadata công khai vì nó chỉ được đọc trên trình duyệt, giúp nó cực kỳ an toàn khi lưu trữ thông tin nhạy cảm

giống như vai trò người dùng để xây dựng một hệ thống arbac cơ bản, chúng ta cần đảm bảo siêu dữ liệu công khai này sẵn sàng trong token phiên làm việc này có thể nhanh chóng kiểm tra vai trò người dùng mà không cần phải thực hiện thêm các yêu cầu mạng mỗi Thời gian chúng ta cần thông tin này. Điều này giúp ứng dụng của chúng ta hiệu quả hơn nhiều. Đây là những việc bạn cần làm. Hãy truy cập bảng điều khiển thư ký và dưới tab cấu hình, tìm trang phiên làm việc, dưới mục tùy chỉnh mã phiên làm việc, nhấp vào chỉnh sửa trong mô hình mở ra, thêm Json với metadata khóa và giá trị sau trong dấu ngoặc kép người dùng siêu dữ liệu cuộn xuống và nhấn nút lưu cho bước thứ hai chúng ta sẽ cần tạo định nghĩa typescript toàn cục

để làm việc với roles back invs code trong thư mục gốc ứng dụng của bạn, hãy tạo một thư mục types bên trong thư mục này, tạo một toàn cầu. Tệp D.S ở đây, bắt đầu bằng cách xuất một đối tượng rỗng, điều này làm cho tệp trở thành một mô-đun. Tiếp theo, chúng ta xác định vai trò là gì. Có sẵn trong ứng dụng của chúng tôi, hãy tưởng tượng một ứng dụng mạng xã hội nơi các quản trị viên có thể kiểm duyệt nội dung và quản trị viên có thể quản lý Moderators vì vậy vai trò loại xuất ra bằng admin hoặc moderator Đây là hai vai trò cho ứng dụng của chúng tôi Mở rộng tiếp theo Loại token phiên của Thư ký, khai báo toàn cục, giao diện Li, brais, yêu cầu phiên GWT tùy chỉnh, chúng tôi chỉ định siêu dữ liệu. vai trò tùy chọn của kiểu vai trò này sẽ cung cấp tự động hoàn thành và ngăn ngừa lỗi typescript khi làm việc với

Trong suốt ứng dụng của chúng tôi ở bước thứ ba, chúng tôi sẽ tự thêm vai trò quản trị viên vào người dùng của mình trong thư ký Bảng điều khiển điều hướng đến tab Người dùng, chọn tài khoản người dùng của bạn, tài khoản này nên là người dùng duy nhất trong danh sách cuộn xuống phần siêu dữ liệu người dùng và bên cạnh tùy chọn công khai, nhấp vào chỉnh sửa, cập nhật Json bằng con số khóa và quản trị giá trị nhấp vào lưu cho bước thứ tư chúng ta sẽ định nghĩa và bảo vệ một tuyến quản trị viên mới trong thư mục ứng dụng tạo quản trị viên mới thư mục có một trang. Tệp TSX tại đây xuất chức năng mặc định admin trả về trang chỉ quản trị thẻ H1 đến xem trang này, bạn không chỉ phải đăng nhập mà còn phải có vai trò quản trị viên, vì vậy để bảo vệ tuyến đường này, chúng tôi sẽ áp dụng

Kiểm soát truy cập dựa trên Ro trong tệp dots middleware của chúng tôi trước, sử dụng create route matcher để tạo matcher cho Route admin nên const là admin route bằng để tạo bộ khớp tuyến và path là/ admin tiếp theo thêm một kiểm tra cho vai trò của người dùng trong hàm phần mềm trung gian nếu là tuyến quản trị của yêu cầu và chờ các yêu cầu phiên Au Dot do siêu dữ liệu. rooll không bằng admin const URL bằng với đường dẫn URL mới là cho Slash và đối số thứ hai là Yêu cầu. URL chúng tôi trả về phản hồi tiếp theo. Chuyển hướng và truyền URL Đảm bảo nhập phản hồi tiếp theo từ Next Máy chủ SL trong trình duyệt, đảm bảo bạn đã đăng nhập và điều hướng đến mục quản trị viên, quản trị viên SL bạn nên có thể

truy cập ngay trở lại bảng điều khiển CLER, đổi vai trò thành người điều hành và nhấn lưu, thử truy cập lại tuyến quản trị viên. Vì vậy, quản trị viên SL và bạn sẽ được chuyển hướng đến trang chủ, hệ thống RBACK của chúng tôi hoạt động như mong đợi, tất nhiên là thủ công thêm vai trò cho người dùng không thể mở rộng trong ứng dụng thực tế, quản trị viên sẽ muốn quản lý vai trò người dùng để Ở bước thứ năm, chúng ta sẽ tạo các hành động máy chủ để quản lý vai trò người dùng trong thư mục quản trị, tạo một hành động mới. TS bắt đầu tệp với chỉ thị sử dụng máy chủ tiếp theo chúng ta sẽ định nghĩa một hàm để thiết lập vai trò cho người dùng xuất ra hàm Asing đặt vai trò và hàm nhận dữ liệu biểu mẫu kiểu dữ liệu biểu mẫu trong hàm, trước tiên chúng ta cần kiểm tra rằng

Người dùng thực hiện hành động này là quản trị viên, chúng ta có thể làm điều này bằng cách kiểm tra các tuyên bố phiên làm việc. siêu dữ liệu. lăn trên đối tượng Au ở phía trên nhập o từ clerk nexs SLS server và trong hàm trích xuất các claims session const session claims bằng để chờ tất cả nếu vai trò người dùng không phải là quản trị viên nếu vai trò siêu dữ liệu yêu cầu phiên không bằng với quản trị viên, chúng tôi sẽ trả về lỗi không được ủy quyền vì vậy hãy ném lỗi mới không được phép. Nếu người dùng là quản trị viên, chúng tôi sẽ yêu cầu khách hàng thư ký cập nhật vai trò của người dùng nên nhập client clerk từ clerk nexs SLS server và gọi nó trong component const client là tương đương với một client thư ký chờ, hiện hành động máy chủ này mong đợi một file gửi biểu mẫu với hai loại thông tin, vì vậy const ID là

bằng dữ liệu biểu mẫu. lấy ID dưới dạng chuỗi và Ro bằng dữ liệu biểu mẫu. getet roll as role, hãy chắc chắn nhập nó từ type SLG globals ID tại đây đề cập đến người dùng mà chúng tôi đang cập nhật và roll ref đề cập đến vai trò mà chúng tôi giao cho người dùng, dù là quản trị viên hoặc Người điều hành tiếp theo trong ba khối sử dụng Clerk Client để cập nhật vai trò người dùng để chờ Client. người dùng. cập nhật người dùng chúng tôi truyền ID làm đối số đầu tiên và đối số thứ hai là một đối tượng mà chúng ta chỉ định siêu dữ liệu công khai, đây là một đối tượng mà chúng ta đặt vai trò bằng với quá khứ trong vai trò nếu có lỗi ném lỗi mới không đặt được vai trò hãy đảm bảo cú pháp cũng đúng tương tự chúng ta sẽ định nghĩa một hàm để xóa một vai trò khỏi người dùng. Tôi sẽ dán mã ở đây nhưng để tôi hướng dẫn bạn qua đoạn mã.

xuất bằng chức năng remove role nhận dữ liệu biểu mẫu một lần nữa bắt đầu bằng cách kiểm tra người dùng gọi này hành động là một quản trị viên, sau đó lấy client thư ký và trích xuất ID từ dữ liệu biểu mẫu, cuối cùng trong một khối triy, sử dụng một client thư ký để cập nhật vai trò người dùng thành null nếu có lỗi do lỗi mới thất bại trong việc xóa Ro ở cả hai các hàm nếu thao tác cập nhật thành công, chúng ta sẽ gọi revalidate Path và revalidate SL admin, điều này sẽ Tự động cập nhật giao diện quản trị viên mà không cần chúng tôi phải làm mới trang khi cập nhật vai trò Được rồi hai hành động máy chủ này, giờ đây chúng ta có thể quản lý vai trò người dùng trong ứng dụng của mình. Bước cuối cùng, chúng ta sẽ phát triển thêm

trang quản trị viên để quản trị viên quản lý vai trò người dùng từ giao diện người dùng, đây là một thành phần react khá chi tiết nhưng bạn đã biết những kiến thức cơ bản về cách viết các thành phần react rồi. Tôi sẽ dán mã để tiết kiệm thời gian. Khoảng 78 dòng mã, nhưng để tôi hướng dẫn bạn qua những gì tôi đã dán, chúng ta vẫn có chức năng xuất hàm mặc định, admin, chúng ta liên hệ với clerk, client và call users. Danh sách người dùng getet. dữ liệu để lấy danh sách người dùng từ thư ký, sau đó chúng ta ánh xạ lên danh sách người dùng đó trong giao diện người dùng, có một số Kiểu dáng CSS của Tailwind cho các hàng xen kẽ, chúng tôi hiển thị người dùng. Tên và người dùng. họ, địa chỉ email chính, vai trò của người dùng và sau đó so với từng người dùng, chúng ta có quyền quản trị và tạo

các nút điều phối bao gồm các đầu vào ẩn cho ID người dùng và rooll Các nút này sử dụng hành động đặt máy chủ rooll để cập nhật vai trò cho ID người dùng đã cho, chúng tôi cũng có nút xóa roll để gọi hành động remove roll server nhập ID người dùng, hãy quay lại trình duyệt, đổi Ro người dùng trở lại thành admin và điều hướng đến route admin để slash admin, tôi sẽ đóng các công cụ phát triển để có thêm không gian, tôi cũng sẽ đăng ký với một người dùng mới phía sau cảnh trên trình duyệt khác, được rồi, tôi đã đăng ký với một người dùng mới trong Firefox nhưng người dùng này sẽ không có Quản trị viên sẽ không thể truy cập vào bảng điều khiển quản trị và bạn sẽ bị chuyển hướng đến

Trang chủ trong trình duyệt đầu tiên làm mới trang và bạn sẽ thấy người dùng mới sử dụng tài khoản quản trị này cập nhật vai trò của người dùng mới đến quản trị viên, vậy hãy nhấp vào làm quản trị viên, chúng ta có thể thấy vai trò bây giờ là quản trị viên với người dùng đã đăng nhập Firefox, cố gắng truy cập Bảng điều khiển quản trị lại/ quản trị viên, chúng tôi có thể xem thành phần quản trị, hệ thống RBAC tùy chỉnh của chúng tôi hiện đang hoạt động như mong đợi. làm cho arback mượt mà hơn trong các ứng dụng lớn hơn thư ký cũng cung cấp tính năng tổ chức tích hợp với Vai trò và hệ thống quyền hạn bạn có thể tìm hiểu thêm về nó trong tài liệu nhưng nếu bạn đang xây dựng một công ty nhỏ ứng dụng hệ thống ARBAC tùy chỉnh của chúng tôi nên đủ tốt để chúng tôi đã triển khai thành công tất cả các

mục tiêu xác thực Tiếp theo, hãy cùng xem một số tùy chọn tùy chỉnh có sẵn khi sử dụng Clerk

---

**Điều hướng:** ← [Read Session and User Data](Bai_07_read-session-and-user-data.md) · Tiếp theo → [Customizing Clerk Components](Bai_09_customizing-clerk-components.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
