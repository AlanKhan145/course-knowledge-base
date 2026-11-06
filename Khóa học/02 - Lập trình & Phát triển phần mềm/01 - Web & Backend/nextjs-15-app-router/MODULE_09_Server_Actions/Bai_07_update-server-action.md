---
lesson_id: "M09-L07"
module: "Đột biến dữ liệu và form"
title: "Update Server Action"
source_version: "Next.js 15 App Router"
video_start: "05:46:03"
video_duration: "8 phút 48 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 07. Update Server Action

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 8 phút 48 giây · **Mốc:** 05:46:03 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20763s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Update Server Action**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Update Server Action** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Update Server Action** — Đọc ID và field cập nhật, validate và check quyền sở hữu trên server.
**2. Update Server Action** — Lưu dữ liệu, revalidatePath cho danh sách/chi tiết bị ảnh hưởng.
**3. Update Server Action** — Hỗ trợ prefilled edit form và phản hồi lỗi theo từng trường.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/todos/actions.ts`

```tsx
"use server";
import { revalidatePath } from "next/cache";
export async function updateTodo(id: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("Tiêu đề trống");
  // TODO: lấy session, kiểm tra owner, UPDATE todos WHERE id=...;
  revalidatePath("/todos");
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Update Server Action**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Update Server Action** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Update Server Action** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** Đọc ID và field cập nhật, validate và check quyền sở hữu trên server.

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

- **Video nguồn:** [Update Server Action — 05:46:03](https://www.youtube.com/watch?v=k7o9R6eaSes&t=20763s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

tìm hiểu cách truyền thêm các đối số cho hành động máy chủ trong VS Code, chúng ta sẽ bắt đầu bằng cách tạo một route để chỉnh sửa chi tiết sản phẩm dưới ứng dụng SL products DB tạo một tuyến động mới trong dấu ngoặc vuông id/trang. TSX, hãy sao chép mã từ trang tạo cơ sở dữ liệu sản phẩm. TSX và dán vào tuyến mới này, đổi tên thành phần thành phần để chỉnh sửa sản phẩm, trang trên trình duyệt, điều hướng đến DB sản phẩm SL1 và chúng tôi thấy biểu mẫu để cập nhật chi tiết sản phẩm, giờ cần lấy dữ liệu sản phẩm hiện có tương ứng với id1 để điền vào biểu mẫu này, chúng ta sẽ trích xuất tham số route ID và lấy sản phẩm tương ứng từ cơ sở dữ liệu để phân cấu trúc các tham số thuộc kiểu ID đối tượng hứa có kiểu chuỗi trong thành phần D ID cấu trúc từ

tham số nên const ID bằng tham số we và sau đó ta sẽ sử dụng phương thức get product từ Prisma DB, trả về một product cho ID const product bằng một tích weit get và ta đi qua cú pháp end ID bây giờ đây là nơi ta gặp thử thách đầu tiên, chúng ta không thể sử dụng từ khóa AIT vì các thành phần khách hàng không thể là thành phần Asing nếu tôi thêm Theo từ khóa bạn có thể thấy cảnh báo và chúng tôi cũng không thể gỡ use client vì đang dùng react hugs trong Thành phần Đây thực sự là một vấn đề phổ biến bạn sẽ gặp trong XS để giải quyết điều này, chúng ta sẽ chia logic của mình theo cùng một cách Thư mục ID tạo một tệp mới sản phẩm dấu gạch nối chỉnh sửa biểu mẫu.

TSX sao chép toàn bộ mã từ Peach. TSX nhưng bỏ phần lấy dữ liệu để loại bỏ các tham số chờ sản phẩm và Hãy gọi thành phần biểu mẫu chỉnh sửa sản phẩm này trong trang. DSX, chúng tôi sẽ chỉ tập trung vào phần lấy dữ liệu nên xóa chỉ thị sử dụng C ở phía trên trạng thái hành động sử dụng khỏi phản ứng gọi sử dụng trạng thái hành động và cho jsx chúng ta trả về thành phần biểu mẫu sản phẩm mới tạo, chúng ta cũng có thể xóa trạng thái biểu mẫu và tạo product cũng như trạng thái ban đầu từ thành phần, chúng ta có thể thêm bất đồng bộ vì không còn hook nào nữa để đi qua product làm prop cho component form nên chúng ta đang làm ở đây là trích xuất các tham số route để lấy ID

lấy sản phẩm tương ứng với ID và truyền chi tiết sản phẩm đó làm đạo cụ để chỉnh sửa sản phẩm biểu mẫu trong thành phần client của biểu mẫu chỉnh sửa sản phẩm, hãy chỉ định sản phẩm prop và đối với kiểu, chúng ta sẽ truy cập vào trang danh sách sản phẩm trong sản phẩm gạch nối DB xuất khẩu loại sản phẩm và nhập nó vào đây, tôi sẽ chắc chắn sử dụng tại /a/ cơ sở dữ liệu sản phẩm hiện sử dụng chi tiết sản phẩm làm giá trị mặc định cho tất cả các trường biểu mẫu, vì vậy giá trị mặc định cho tiêu đề bằng sản phẩm. tiêu đề tương tự cho giá trị mặc định là bằng sản phẩm. giá và đối với mô tả giá trị mặc định là bằng mô tả sản phẩm vì mô tả có thể là null, chúng ta sử dụng toán tử kết tụ null để cung cấp

một chuỗi rỗng làm giá trị mặc định, vì vậy dấu hỏi kép, chuỗi rỗng nếu chúng ta quay lại trang chỉnh sửa sản phẩm, chúng ta vẫn còn lỗi typescript trước hãy nhập loại sản phẩm tôi sẽ sao chép dòng này dán nó tại đây và chỉ định kiểu biến sản phẩm, bây giờ get product có thể trả về null. Nếu không tìm thấy tích thì chúng ta cũng cần xử lý trường hợp đó, nếu không tìm thấy sản phẩm, chúng ta gọi hàm không tìm thấy từ điều hướng SL tiếp theo. đảm bảo nhập nó ở đầu cùng typescript giờ đã vui vẻ trở lại trang danh sách cơ sở dữ liệu sản phẩm kết thúc tiêu đề sản phẩm với một thành phần liên kết để cho phép điều hướng đến trang chỉnh sửa nên thành phần liên kết mà chúng tôi nhập từ SL tiếp theo

link wrap tiêu đề sản phẩm chỉ định mỗi ref bằng back text SL products dấu gạch nối DB slid và đó là dollar curly Braes sản phẩm. ID trong trình duyệt khi nhấp vào tiêu đề sản phẩm để sản phẩm một đưa chúng ta đến trang chỉnh sửa đã được điền sẵn với chi tiết sản phẩm One Price 500 mô tả One One thiết lập giao diện người dùng của chúng tôi giờ đã hoàn tất Hãy chuyển sang triển khai Hành động cập nhật máy chủ cho việc gửi biểu mẫu trong sản phẩm. TS trong thư mục actions sẽ nhân đôi lệnh tạo Hành động máy chủ sản phẩm và đặt tên cho nó Biểu mẫu Chỉnh sửa Sản phẩm. TSX, chúng tôi sẽ nhập hành động chỉnh sửa máy chủ sản phẩm thay vì tạo sản phẩm và truyền nó vào làm đối số để sử dụng hành động Trạng thái cũng quay lại trong chỉnh sửa hành động máy chủ sản phẩm sẽ

Chỉnh sửa để gọi cập nhật sản phẩm từ Prismad DB. TS cập nhật sản phẩm trong cơ sở dữ liệu nhưng giờ chúng ta lại phải đối mặt với một vấn đề thú vị khác sản phẩm cập nhật thử thách cần mã sản phẩm, nghĩa là chúng ta cần mã sản phẩm trong máy chủ chỉnh sửa sản phẩm vì Product ID không phải là trường biểu mẫu, chúng ta không thể truy cập nó từ dữ liệu biểu mẫu như các trường khác, giờ chúng ta có thể sử dụng một trường nhập ẩn sao cho loại đầu vào bằng Hidden name là giá trị ID bằng sản phẩm. ID nhưng cái này sẽ hiển thị ID trong HTML mà không mã hóa đúng, thay vào đó hãy dùng phương thức bind của javascript để truyền các đối số bổ sung trong thành phần edit product form chúng ta có thể liên kết ID với hành động edit product server để const edit

sản phẩm có ID bằng với chỉnh sửa sản phẩm. liên kết ID sản phẩm phẩy null và sau đó truyền hàm này vào hành động use Xác định ID đối số liên kết giờ đây sẽ có sẵn như đối số đầu tiên trong hành động chỉnh sửa máy chủ sản phẩm nên ID kiểu số phẩy, trạng thái trước của kiểu form dữ liệu form trạng thái, kiểu form dữ liệu truyền ID này lần đầu tiên Tham số cập nhật hàm sản phẩm ID dấu phẩy tiêu đề giá và mô tả trong trình duyệt cập nhật chi tiết sản phẩm để mô tả cập nhật Chỉ một lần nhấn để gửi và các thay đổi sẽ được phản ánh ngay trên trang danh sách sản phẩm trên máy chủ cập nhật của chúng tôi Hành động đã hoàn tỏa, tôi hiểu đó là quá nhiều điều cần tiếp nhận, nên để tôi tóm tắt những gì chúng tôi đã làm, chúng tôi đã tạo ra một lộ trình năng động.

Để cập nhật từng sản phẩm, chúng tôi đã sử dụng Route Parms để lấy thông tin sản phẩm từ cơ sở dữ liệu của mình, chúng tôi phát hiện ra rằng các thành phần khách hàng không thể là thành phần không đồng bộ để giải quyết vấn đề không đồng bộ chúng ta chia dữ liệu lấy vào máy chủ logic thành phần và biểu mẫu thành thành phần khách hàng từ thành phần máy chủ, chúng tôi truyền chi tiết sản phẩm như một prop đến thành phần khách hàng Trong thành phần khách hàng chúng tôi gán chi tiết sản phẩm làm giá trị mặc định vào các trường biểu mẫu trong các hành động của mình sản phẩm. TS, chúng tôi đã tạo một hành động máy chủ mới để xử lý cập nhật sản phẩm, chức năng cơ sở dữ liệu, mặc dù yêu cầu ID sản phẩm không có sẵn trong dữ liệu biểu mẫu, chúng tôi đã sử dụng phương thức bind để truyền đối số ID mà không làm lộ nó

trong HTML, chúng ta lấy ID làm đối số đầu tiên trong hành động máy chủ và truyền nó đến hàm cơ sở dữ liệu mà chúng ta Chức năng cập nhật sản phẩm đã hoạt động trơn tru. Tiếp theo, chúng ta sẽ xử lý phần cuối cùng của các hoạt động CRUD chức năng xóa, hãy cùng khám phá việc triển khai chức năng xóa bằng các hành động của máy chủ, chúng ta sẽ bắt đầu bằng cách thêm một

---

**Điều hướng:** ← [useFormStatus vs useActionState](Bai_06_useformstatus-vs-useactionstate.md) · Tiếp theo → [Delete Server Action](Bai_08_delete-server-action.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
