---
lesson_id: "M09-L09"
module: "Đột biến dữ liệu và form"
title: "Optimistic Updates with useOptimistic Hook"
source_version: "Next.js 15 App Router"
video_start: "05:58:17"
video_duration: "6 phút 13 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Optimistic Updates with useOptimistic Hook

> **Module 09 — Đột biến dữ liệu và form** · **Thời lượng video:** 6 phút 13 giây · **Mốc:** 05:58:17 · **Mức độ:** Ứng dụng

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=21497s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Optimistic Updates with useOptimistic Hook**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **đột biến dữ liệu và form**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Optimistic Updates with useOptimistic Hook** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Optimistic Updates with useOptimistic Hook** — useOptimistic hiển thị kết quả dự kiến trước khi request được xác nhận để UI phản hồi tức thì.
**2. Optimistic Updates with useOptimistic Hook** — Cần xử lý rollback/error nếu server từ chối; không giả vờ dữ liệu đã lưu thành công.
**3. Optimistic Updates with useOptimistic Hook** — Tốt cho đổi trạng thái, thêm bình luận, like hoặc item đơn giản.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/todos/optimistic-list.tsx`

```tsx
"use client";
import { useOptimistic, useTransition } from "react";
export function OptimisticList({ items, onAdd }: {
  items: string[]; onAdd: (text: string) => Promise<void>;
}) {
  const [optimistic, addOptimistic] = useOptimistic(items, (state, text: string) => [...state, text]);
  const [, startTransition] = useTransition();
  return <><button onClick={() => startTransition(async () => {
    const newItem = "Demo"; addOptimistic(newItem); await onAdd(newItem);
  })}>Thêm nhanh</button><ul>{optimistic.map((x,i) => <li key={`${x}-${i}`}>{x}</li>)}</ul></>;
}
// Cần bổ sung error feedback và keys ổn định trong ứng dụng thực tế.
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Optimistic Updates with useOptimistic Hook**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Optimistic Updates with useOptimistic Hook** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Optimistic Updates with useOptimistic Hook** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** useOptimistic hiển thị kết quả dự kiến trước khi request được xác nhận để UI phản hồi tức thì.

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

- **Video nguồn:** [Optimistic Updates with useOptimistic Hook — 05:58:17](https://www.youtube.com/watch?v=k7o9R6eaSes&t=21497s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/15/app/building-your-application/data-fetching/server-actions-and-mutations).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

use optimistic hook, use optimistic là một react hook, nó cung cấp cách để cập nhật giao diện người dùng một cách optimistic trong khi Hành động không đồng bộ đang được tiến hành, kỹ thuật này giúp các ứng dụng của chúng tôi cảm thấy phản hồi tốt hơn, đặc biệt khi làm việc với thay vì để người dùng chờ đợi phản hồi từ máy chủ, chúng ta có thể hiển thị kết quả mong đợi ngay lập tức để tôi trình bày Bạn sẽ thấy cách điều này hoạt động với một đoạn mã trong ví dụ của chúng ta khi người dùng nhấp vào nút xóa thay vì độ trễ 1,5 giây để hiển thị việc xóa, chúng tôi sẽ xóa sản phẩm đó ngay lập tức khỏi danh sách để đạt được điều đó, trước tiên chúng tôi nhập sử dụng Optimistic Hook từ react trên trang cơ sở dữ liệu sản phẩm của chúng tôi. Nhập file TSX sử dụng optimistic từ react để gọi nó trong

thành phần sau khi dữ liệu đã được lấy sử dụng optimistic và hook nhận hai tham số, tham số đầu tiên là trạng thái ban đầu rằng bạn muốn cập nhật một cách lạc quan, đây là danh sách các sản phẩm được lấy từ cơ sở dữ liệu, tham số thứ hai là một hàm xác định cách cập nhật trạng thái một cách lạc quan hàm này lấy trạng thái hiện tại vào các đối số mà chúng ta sẽ gọi là các sản phẩm hiện tại và một lập luận bổ sung để giúp tạo ra trạng thái mới cho kịch bản của chúng ta là đối số bổ sung là ID sản phẩm tương ứng với sản phẩm chúng ta muốn xóa hàm lọc hiện tại mảng products để loại trừ sản phẩm có ID đã cho, để các sản phẩm hiện tại lọc sản phẩm sao cho sản phẩm đó. ID là

không bằng ID sản phẩm, đây chỉ là JavaScript đơn giản, không có gì cụ thể cho phản ứng hoặc tiếp theo, điều quan trọng là chúng ta phải trả về bản cập nhật này. Hãy liệt kê làm trạng thái lạc quan của chúng ta, bây giờ điều này sử dụng gì cho câu lạc quan trả về hai điều đầu tiên là kết quả của sự lạc quan trạng thái mà chúng ta sẽ gọi là các sản phẩm lạc quan. Đây là mảng mà chúng ta sẽ trình bày cho người dùng, thứ hai là một hàm để kích hoạt cập nhật lạc quan, hàm lấy một đối số thuộc bất kỳ loại nào và chúng ta sẽ gọi hàm cập nhật rằng Chúng ta đã định nghĩa đối số thứ hai là sử dụng từ lạc quan, vậy làm thế nào để sử dụng hai giá trị này trước thay vì Lặp lại danh sách sản phẩm từ cơ sở dữ liệu, chúng ta sẽ lặp lại danh sách sản phẩm lạc quan là

được quản lý bởi sử dụng Hook lạc quan thứ hai, chúng ta tạo một hàm không đồng bộ xóa sản phẩm theo ID, lấy một ID sản phẩm kiểu số và xử lý hành động xóa máy chủ của chúng tôi, vì vậy hãy chờ xóa sản phẩm, truyền mã sản phẩm vào mã sản phẩm trước khi gọi hành động máy chủ tuy nhiên chúng tôi kích hoạt bản cập nhật optimistic nên đặt sản phẩm optimistic truyền ID sản phẩm này ngay lập tức hiển thị cho người dùng các thay đổi của họ trong khi việc xóa thực sự diễn ra ở nền trên phần tử biểu mẫu để thuộc tính hành động chúng ta gọi hàm mới remove product bằng cách liên kết ID sản phẩm để liên kết null comma product. Nhận diện cái này value là mã sản phẩm mà hàm nhận được, điều này rất khó tiếp nhận, vậy hãy cùng xem qua quy trình sử dụng

Hook lạc quan Một lần nữa chúng ta gọi hook với trạng thái hiện tại và một hàm trả về trạng thái lạc quan trạng thái lạc quan có sẵn làm giá trị trả về đầu tiên mà chúng tôi sử dụng để hiển thị danh sách các sản phẩm mà chúng tôi sử dụng giá trị trả về thứ hai là hàm setter để gọi hàm cập nhật và thực thi logic để trả về trạng thái mới này Chức năng setter chạy ngay trước khi máy chủ thực hiện, người dùng luôn thấy trạng thái lạc quan trong khi thực tế thao tác hoàn tất ở chế độ nền. Nếu chúng ta lưu tệp, chúng ta sẽ thấy lỗi vì đang sử dụng một hook trong máy chủ. Thành phần Giải pháp chúng ta sẽ cần tách biệt việc lấy dữ liệu khỏi logic đột biến dữ liệu tương tự như cách chúng ta đã làm

Với hoạt động cập nhật của chúng tôi trước đó, dọc theo trang của bạn. TSX tạo chi tiết dấu gạch nối sản phẩm tệp mới. TSX sao chép Toàn bộ mã từ trang giấy. TSX và dán vào tệp mới này, đổi tên thành phần thành chi tiết sản phẩm, chi tiết sản phẩm trở thành một thành phần máy khách xử lý các đột biến và cập nhật lạc quan thêm chỉ thị use CLI ở phía trên để loại bỏ ASN từ khóa và cả mã lấy dữ liệu, nó sẽ nhận dữ liệu từ thành phần máy chủ cha, thay vào đó chúng ta chỉ định sản phẩm loại sản phẩm tôi cũng sẽ làm cho việc xuất không tên này hoàn hảo cho trang. TSX giờ đây sẽ là một thành phần máy chủ chịu trách nhiệm chỉ lấy dữ liệu mới có thể xóa Mã không mong muốn sử dụng sản phẩm xóa tích cực và thành phần liên kết có thể được

Đã xóa thay vào đó, hãy nhập thành phần chi tiết sản phẩm mới tạo, vì vậy hãy nhập chi tiết sản phẩm từ DO/Chi tiết sản phẩm Đối với thành phần, chúng ta vẫn sẽ lấy sản phẩm từ cơ sở dữ liệu và sau đó trả về cùng một thành phần đó, truyền vào danh sách sản phẩm như một đạo cụ lưu cả hai tệp và thử nghiệm trên trình duyệt. Tôi muốn bạn quan sát điều gì xảy ra khi chúng ta nhấp nút xóa để kiểm tra sản phẩm một xóa và sản phẩm biến mất ngay lập tức trong khi việc xóa thực sự hoàn tất trong Nền sau 1,5 giây nhưng người dùng của bạn vẫn có trải nghiệm phản hồi mượt mà mà họ yêu thích, nên hãy xóa nó đi được xóa ngay lập tức và thao tác xóa hoàn tất ở nền, kết thúc phần xem xét các thao tác CRUD với các thành phần máy chủ

và các hành động máy chủ trong bộ định tuyến ứng dụng cho Chủ đề cuối cùng trong phần này về việc lấy dữ liệu và biến đổi

---

**Điều hướng:** ← [Delete Server Action](Bai_08_delete-server-action.md) · Tiếp theo → [Form Component](Bai_10_form-component.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
