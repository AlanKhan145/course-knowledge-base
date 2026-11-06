# Custom React components: từ schema tới thẻ sản phẩm

**Loại bài:** Bài học thực hành · **Mục tiêu:** Đăng ký được component do ứng dụng sở hữu, khai báo prop schema và render qua C1; nêu nguyên tắc chống dữ liệu không đáng tin cậy.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Bài toán
Các widget mặc định không bao trùm mọi trải nghiệm. Với trang thương mại điện tử, bạn có thể muốn thẻ có nhãn tồn kho, ảnh fallback, giá gốc/giá giảm, tương tác chọn biến thể và modal. C1 legacy cho phép đăng ký custom component để LLM có thể đề xuất dùng đúng thành phần đó.

## 2. Hai mặt phải đồng bộ
Backend cung cấp **schema props** để mô hình biết định dạng, tên component và ý nghĩa. Frontend cung cấp **React implementation** có đúng key. Nếu backend khai báo `ProductGrid` nhưng frontend chỉ đăng ký `ProductList`, renderer không thể tự suy ra chúng giống nhau.

## 3. Định nghĩa component React
```tsx
"use client";
import { useOnAction } from "@thesysai/genui-sdk";

type Product = { id: string; name: string; price: number };
export function ProductGrid({ products }: { products: Product[] }) {
  const onAction = useOnAction();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {products.map((p) => (
        <button key={p.id}
          onClick={() => onAction(
            `Xem ${p.name}`,
            `User selected product with ID ${p.id}`
          )}>
          <strong>{p.name}</strong> — {p.price.toLocaleString("vi-VN")} VND
        </button>
      ))}
    </div>
  );
}
```
`useOnAction` gửi nhãn thân thiện và mô tả cho LLM; không thay thế authorization. Với dữ liệu chưa tin cậy, React nên escape văn bản như mặc định và không dùng `dangerouslySetInnerHTML`.

## 4. Đăng ký ở frontend
```tsx
<C1Chat
  apiUrl="/api/chat"
  customizeC1={{ customComponents: { ProductGrid } }}
/>
```
Backend thêm `c1_custom_components` trong `metadata.thesys`, ánh xạ key `ProductGrid` đến JSON schema props, theo [custom components guide](https://docs.thesys.dev/legacy/guides/custom-components). Schema có mô tả rõ field/giới hạn; dùng Zod rồi chuyển sang JSON Schema là hướng được tài liệu minh họa.

## 5. State và giới hạn
Component có thể dùng `useC1State` theo SDK legacy để duy trì trạng thái riêng của response. Chỉ dùng state cục bộ cho lựa chọn UI; tồn kho, giá thanh toán và quyền sửa dữ liệu vẫn lấy từ server. Không cho phép LLM truyền mã JavaScript tùy ý như một “component”.

## 6. Lab
Định nghĩa `ProductGrid` nhận tối đa 10 sản phẩm đã validate, thử render khi danh sách rỗng, giá âm, tên rất dài và click. Ghi nhận cách đảm bảo key props, nội dung event và responsive.

## 7. Tổng kết
Custom components biến mô hình thành bộ tổ hợp những UI component do bạn làm chủ, thay vì để AI tự thực thi mã tùy ý.

## 8. Câu hỏi ôn tập

**Câu 1.** Backend custom component cần khai báo gì?

A. JSON schema props  
B. API key client  
C. Một database mới  
D. CSS bất kỳ  

**Đáp án:** A. **Giải thích:** Schema cho model biết cấu trúc hợp lệ.

**Câu 2.** Tên component frontend và metadata phải?

A. Khác nhau  
B. Trùng key đăng ký  
C. Luôn viết hoa toàn bộ  
D. Là URL  

**Đáp án:** B. **Giải thích:** Cần ánh xạ đúng để renderer tìm được component.

**Câu 3.** Hook nào gửi hành động người dùng trong ví dụ?

A. useRouter  
B. useId  
C. useOnAction  
D. useSWR  

**Đáp án:** C. **Giải thích:** useOnAction cung cấp callback gửi hành động.

**Câu 4.** Giá sản phẩm ở khâu thanh toán nên lấy từ?

A. Props model không kiểm chứng  
B. Màu thẻ  
C. Query không xác thực  
D. Backend nguồn sự thật  

**Đáp án:** D. **Giải thích:** Không tin giá do client hoặc mô hình đưa.

**Câu 5.** Nguyên tắc an toàn khi render text do LLM tạo?

A. Tránh chạy HTML/JS tùy ý  
B. Luôn eval()  
C. Tắt escaping  
D. Dùng innerHTML mọi nơi  

**Đáp án:** A. **Giải thích:** Không cho nội dung sinh trở thành code không kiểm soát.

