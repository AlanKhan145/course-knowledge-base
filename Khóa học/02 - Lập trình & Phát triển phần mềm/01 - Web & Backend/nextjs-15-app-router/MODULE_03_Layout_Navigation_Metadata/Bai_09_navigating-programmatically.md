---
lesson_id: "M03-L09"
module: "Layouts, điều hướng và SEO"
title: "Navigating Programmatically"
source_version: "Next.js 15 App Router"
video_start: "01:29:16"
video_duration: "3 phút 55 giây"
content_language: "vi"
status: "đã biên soạn từ bản ghi lời giảng"
---

# Bài 09. Navigating Programmatically

> **Module 03 — Layouts, điều hướng và SEO** · **Thời lượng video:** 3 phút 55 giây · **Mốc:** 01:29:16 · **Mức độ:** Cơ bản

[▶ Xem đúng đoạn video bài này](https://www.youtube.com/watch?v=k7o9R6eaSes&t=5356s) · [Repository mẫu của tác giả](https://github.com/gopinav/Next.js-15-Tutorials) · [Tài liệu Next.js/SDK liên quan](https://nextjs.org/docs/15/app/api-reference/file-conventions)

## 1. Bài học giải quyết vấn đề gì?

Trong phần **Navigating Programmatically**, mục tiêu không chỉ là biết một tên API của Next.js mà còn hiểu **khi nào áp dụng, framework xử lý điều gì và cách kiểm chứng kết quả**. Phần này nằm trong chuỗi học về **layouts, điều hướng và seo**. Trên dự án cuối khóa, ta dùng các khái niệm tương ứng để xây dựng hệ thống quản trị sản phẩm với frontend và backend cùng một codebase.

**Sau bài học, bạn có thể:**

1. Giải thích ý nghĩa của **Navigating Programmatically** trong App Router và phân biệt nó với các khái niệm lân cận.
2. Đọc và điều chỉnh cấu trúc file hoặc ví dụ TSX phù hợp với tình huống.
3. Thử nghiệm trường hợp thành công, dữ liệu không hợp lệ và kiểm tra hành vi trên trình duyệt/server.
4. Nhận diện những điểm phụ thuộc phiên bản Next.js 15, tránh áp dụng nhầm ví dụ của bản khác.

## 2. Lý thuyết trọng tâm

**1. Navigating Programmatically** — useRouter() trong next/navigation hỗ trợ push, replace, back, forward, refresh từ Client Component.
**2. Navigating Programmatically** — Dùng điều hướng lập trình sau submit, cập nhật bộ lọc hoặc thao tác nghiệp vụ, không thay Link khi chỉ cần điều hướng đơn giản.
**3. Navigating Programmatically** — Không đưa URL do người dùng cung cấp trực tiếp vào router.push nếu chưa kiểm tra.

### Cách tư duy trước khi viết code

- **Đầu vào:** xác định URL, params, searchParams, state, request, session hoặc dữ liệu server liên quan tới bài học.
- **Xử lý:** xác định phần nào chạy ở server, phần nào chạy tại client, và điểm Next.js áp dụng quy ước file-system.
- **Đầu ra:** mô tả HTML/UI hoặc HTTP response có thể quan sát và kiểm tra.
- **Biên lỗi:** nghĩ trước đến dữ liệu thiếu, lỗi mạng, dữ liệu rỗng, truy cập sai quyền hoặc điều hướng trực tiếp vào URL.

### Kiến thức cần nhớ để không nhầm lẫn

**Next.js 15 App Router** dùng một tập hợp các quy ước gồm `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` và nhiều file đặc biệt khác. Không phải file nào cũng liên quan tới chủ đề hiện tại; hãy bắt đầu từ các quy ước đang thật sự được dùng. Trong bài này, ưu tiên hiểu kết quả cụ thể rồi mới trừu tượng hóa thành pattern áp dụng nhiều nơi.

## 3. Minh họa và giải thích ví dụ

**File / tình huống:** `src/app/_components/go-home.tsx`

```tsx
"use client";
import { useRouter } from "next/navigation";
export default function GoHome() {
  const router = useRouter();
  return <button onClick={() => router.push("/")}>Về trang chủ</button>;
}
```

**Cách đọc ví dụ:**

1. Đọc đường dẫn file trước, vì vị trí file có thể quyết định route và phạm vi component.
2. Xác định những ký hiệu thuộc framework (`page.tsx`, `route.ts`, `use client`, `use server`, `params`, `children`...) và các hàm minh họa do dự án tự định nghĩa.
3. Với ví dụ dùng dữ liệu demo hoặc có `TODO`, cần thay bằng truy vấn thật, schema validation, error handling và authentication trước khi sử dụng ở production.
4. Mở browser/terminal, so sánh output với giả thuyết. Nếu thay params hoặc reload có kết quả khác, giải thích vì sao.

## 4. Thực hành theo từng bước

**Bước 1 — Chuẩn bị.** Mở project Next.js 15 + TypeScript tạo từ bài Hello World, kiểm tra `npm run dev`. Nếu đang học riêng bài này, hãy xem cấu trúc cơ bản ở `src/app/` trước khi chép mẫu.

**Bước 2 — Xây trường hợp tối thiểu.** Tạo file tại đường dẫn gợi ý ở mục 3 (hoặc phát thảo đúng cây thư mục). Chỉ thêm đúng phần cần cho **Navigating Programmatically**; chưa cần CSS phức tạp.

**Bước 3 — Đối chiếu với kiến thức.** Trước khi chạy, tự viết dự đoán: URL nào hiển thị, phần dữ liệu nào tới server/client, điều gì thay đổi khi người dùng điều hướng. So sánh với các gạch đầu dòng tại mục 2.

**Bước 4 — Kiểm chứng.** Kiểm tra một trường hợp hợp lệ và một trường hợp bất thường: đổi ID, bỏ query, làm chậm API, lỗi fetch hoặc thiếu session tùy tính năng. Quan sát terminal, Network tab và phần giao diện.

**Bước 5 — Sửa theo quy tắc production.** Thêm kiểm tra input, trạng thái loading/error, nhãn accessible cho control, và quyền server nếu liên quan đến dữ liệu. Chạy `npm run build` để tìm lỗi type/SSR mà dev mode có thể chưa thể hiện.

**Bước 6 — Tổng kết.** Viết 5–8 dòng giải thích vì sao cách triển khai này thích hợp, khi nào nên chuyển sang cách khác và một điểm chưa chắc cần mở tài liệu chính thức kiểm tra.

## 5. Bài tập mở rộng

**Yêu cầu:** Áp dụng **Navigating Programmatically** vào dự án quản trị sản phẩm giả lập. Tạo một ví dụ trước/sau để chứng minh việc áp dụng đã thay đổi route, render, request hoặc trải nghiệm UI. Không chỉ sao chép code: tự đổi ít nhất một URL, dữ liệu hoặc trạng thái.

**Điều kiện hoàn thành:**

- [ ] Có kết quả chạy được hoặc sơ đồ đúng theo convention; ghi đường dẫn file đã tạo.
- [ ] Có ảnh chụp kết quả hoặc log minh họa trường hợp thành công.
- [ ] Có kiểm tra trường hợp lỗi và mô tả cách app phản hồi.
- [ ] Không đưa API key/secret vào client code hoặc Git.
- [ ] Có phần giải thích ngắn 3–5 câu bằng lời của bạn.

## 6. Tự kiểm tra kiến thức (kèm hướng dẫn đáp án)

**Câu 1.** Vấn đề chính **Navigating Programmatically** giải quyết là gì, và đoạn code/file nào cho thấy việc đó?

**Gợi ý đáp án:** useRouter() trong next/navigation hỗ trợ push, replace, back, forward, refresh từ Client Component.

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

- **Video nguồn:** [Navigating Programmatically — 01:29:16](https://www.youtube.com/watch?v=k7o9R6eaSes&t=5356s), Codevolution/Vishwas (video xuất bản năm 2025).
- **Mã nguồn kèm video:** [https://github.com/gopinav/Next.js-15-Tutorials](https://github.com/gopinav/Next.js-15-Tutorials).
- **Tài liệu nền tảng:** [https://nextjs.org/docs/15/app/api-reference/file-conventions](https://nextjs.org/docs/15/app/api-reference/file-conventions).
- **Ghi chú phiên bản:** Khóa được biên soạn theo **Next.js 15**, không mặc định mọi cú pháp là đúng với Next.js 16+. Ví dụ minh họa có `TODO`/pseudocode không được coi là tính năng production hoàn chỉnh.

## 9. Phụ lục: đoạn bản ghi nguồn để đối chiếu

> **Lưu ý:** Đây là bản chép lời tiếng Việt do hệ thống nhận dạng tự động cung cấp, có thể sai tên framework/API; dùng mục 2–7 làm tài liệu học chính.

xảy ra trong khi liên kết hoạt động rất tốt trong hầu hết các trường hợp, đôi khi chúng ta cần điều hướng một cách lập trình, nghĩ về thời điểm bạn đang Mua sắm trên Amazon, sau khi bạn gửi đơn hàng, bạn sẽ tự động được chuyển hướng đến trang xác nhận đơn hàng kiểu này Điều hướng lập trình rất cần thiết cho việc gửi biểu mẫu và nhiều tình huống thực tế khác. Hãy cùng tìm hiểu cách chúng ta có thể thực hiện điều này bằng cách sử dụng nexs App router cho ví dụ của chúng ta, chúng ta sẽ giữ mọi thứ đơn giản dù không có đầy đủ trên trang thương mại điện tử, chúng tôi sẽ tạo một kịch bản cơ bản khi nhấp vào nút đặt hàng trên trang sản phẩm đặt hàng P dẫn chúng tôi đến trang chủ, hãy bắt đầu bằng cách tạo tuyến sản phẩm đặt hàng trong thư mục ứng dụng của bạn. Tạo đơn hàng mới.

Thư mục sản phẩm và thêm một trang. Tệp TSX với thành phần react cơ bản xuất ra sản phẩm hàm mặc định mà chúng ta trả về một sản phẩm H1 Tag Order: Hãy thêm một nút để làm cho mọi thứ tương tác, chà xát tiêu đề bằng React Fragment và thêm một nút đặt hàng ngay bây giờ chúng tôi sẽ thêm một nút bấm Handler vào nút sử dụng onclick, chúng tôi sẽ định nghĩa tay cầm click chức năng ghi lại một thông điệp đơn giản lên bảng điều khiển khi đặt hàng sau khi đặt đơn hàng mô phỏng mà bạn muốn chuyển hướng người dùng đến trang chủ Đây là nơi sử dụng router hook xuất hiện, đầu tiên hãy nhập nó ở đầu tệp của bạn nhập sử dụng bộ định tuyến từ điều hướng SL tiếp theo và bên trong thành phần của bạn thiết lập bộ định tuyến Router bằng với

Dùng router rồi dùng phương thức push để xử lý điều hướng, sau đó sau console log router. đẩy và đường đi là Trang chủ trong trình duyệt Nếu bạn điều hướng đến/đặt hàng sản phẩm, bạn sẽ nhận được lỗi vì router đã qua sử dụng chỉ hoạt động trong client các thành phần và sử dụng chỉ thị Cent ở đầu tệp để sửa lỗi này, bạn sẽ thấy tiêu đề và nút đặt hàng, nhấp vào nút sẽ đưa bạn thẳng đến trang chủ điều hướng lập trình trong hành động mặc dù chúng ta sử dụng dấu gạch chéo tiến làm đích bạn có thể sử dụng bất kỳ tuyến đường hợp lệ nào dù nó là động lồng nhau Hoặc thậm chí là một route bao quát, đôi khi bạn cũng có thể muốn thay thế trang hiện tại trong ngăn xếp lịch sử thay vì thêm một mục mới cho router sử dụng đó.

Thay router thay cho router. push it tương tự như việc sử dụng thay thế prop trên một thành phần liên kết, bạn cũng có thể sử dụng router Doback để quay lại trang hoặc router trước đó. Tiến lên để tiến về phía trước trong lịch sử giờ đây còn một cách nữa để xử lý điều hướng lập trình và đó là hàm chuyển hướng. Hãy xem một ví dụ sử dụng sản phẩm hiện có của chúng tôi. thành phần đánh giá: hãy nhớ cách chúng ta kiểm tra xem ID đánh giá có lớn hơn 100 hay không và hiển thị một trang không tìm thấy, hãy cùng chuyển hướng chúng đến danh sách sản phẩm Thay vào đó, ở trên cùng, chuyển hướng từ quốc gia tiếp theo và thay vì gọi 'không tìm thấy' chúng tôi sẽ gọi redirect với các sản phẩm destination route SL ngay khi bạn truy cập sản phẩm localhost 3000 SL

SL1 SL đánh giá SL1 thực tế thay vì thấy trang không tìm thấy, bạn sẽ tự động bị chuyển hướng đến trang danh sách sản phẩm a Ví dụ khá gượng ép nhưng nó cho thấy cách chúng ta có thể sử dụng chuyển hướng trong ứng dụng của mình, ngay bây giờ chúng ta đã có đã đề cập đến liên kết và điều hướng trong XJS, hãy cùng đi sâu hơn vào một số khái niệm liên quan. Tiếp theo, hãy xem một tập tin đặc biệt khác.

---

**Điều hướng:** ← [params and searchParams](Bai_08_params-and-searchparams.md) · Tiếp theo → [Templates](Bai_10_templates.md) · [Mục lục module](README.md) · [Mục lục toàn khóa](../README.md)
