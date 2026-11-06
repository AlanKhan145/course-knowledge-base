# Ứng dụng thương mại điện tử: lọc SKU và biên lợi nhuận

**Loại bài:** Bài học thực hành · **Mục tiêu:** Tính được biên lợi nhuận theo công thức, lọc danh sách sản phẩm và xác định hành động mở chi tiết an toàn.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Câu hỏi nghiệp vụ
Người quản lý hỏi: “Sản phẩm nào đạt ít nhất 5% biên lợi nhuận?”. Cần thống nhất khái niệm **gross margin** (lãi gộp/doanh thu), khác với **markup** (lãi/giá vốn).

$$
\mathrm{Margin}=\frac{\mathrm{Price}-\mathrm{Cost}}{\mathrm{Price}}\times100\%.
$$
Ví dụ giá bán 200.000 VND, giá vốn 180.000 VND thì margin = 10%, không phải 11,11%. Thuế, phí nền tảng, vận chuyển, khuyến mãi có thể làm lợi nhuận thực tế khác. Đừng gọi gross margin là lợi nhuận ròng.

## 2. Pipeline dữ liệu
Các trường tối thiểu: SKU, tên hàng, price, cost, currency, availability, URL chi tiết. Backend lọc những hàng `price > 0` và `margin >= 0.05` nếu dùng tỷ lệ số thực. Dùng decimal hoặc số nguyên theo đơn vị tiền nhỏ nhất để tránh lỗi số thực ở các phép tính tiền.

```typescript
type Product = { sku: string; price: number; cost: number };
function grossMargin(p: Product) {
  if (p.price <= 0) return null;
  return (p.price - p.cost) / p.price;
}
const filtered = products.filter(p => {
  const m = grossMargin(p);
  return m !== null && m >= 0.05;
});
```
`products` ở đây là danh sách đã lấy từ DB và chuẩn hóa theo cùng loại tiền, chưa bao gồm toàn bộ chi phí khác.

## 3. Dạng UI nên tạo
Dùng bảng gồm SKU, sản phẩm, giá bán, giá vốn, gross margin và tình trạng. Có thể thêm chart cột theo margin, nhưng bảng vẫn là trung tâm vì phải đọc chính xác. Trên mobile, thẻ sản phẩm hoặc cuộn ngang được cân nhắc. Nút “xem sản phẩm” mở chi tiết bằng ID đã được backend xác nhận.

## 4. Hành động tương tác
Tại mọi lần bấm “thêm vào giỏ”, backend kiểm tra lại tồn kho và giá. Với “thanh toán”, không thực thi chỉ vì LLM dựng nút: phải có bước xác nhận và hệ thống thanh toán đáng tin cậy. Không để mô hình sinh đường link checkout trực tiếp rồi browser tự chuyển đến tên miền chưa xác minh.

## 5. Lab
Tạo 5 SKU, gồm margin 3%, 5%, 10%, âm, và một SKU có giá 0. Trả bảng chỉ những SKU đủ ngưỡng; kiểm tra cách xử lý giá bằng 0. Viết 3 câu kiểm thử cho hành động mở chi tiết sản phẩm.

## 6. Tổng kết
Generative UI cải thiện khám phá sản phẩm, còn tính toán tài chính và giao dịch phải do backend đáng tin cậy kiểm soát.

## 7. Câu hỏi ôn tập

**Câu 1.** Margin của giá 200 và vốn 180 là?

A. 10%  
B. 11,11%  
C. 20%  
D. 5%  

**Đáp án:** A. **Giải thích:** (200−180)/200 = 10%.

**Câu 2.** Điều kiện lọc đúng cho margin ít nhất 5% là?

A. margin > 5  
B. price < cost  
C. margin >= 0.05 nếu lưu tỷ lệ  
D. price == 0  

**Đáp án:** C. **Giải thích:** 0.05 là 5% dưới dạng số tỷ lệ.

**Câu 3.** Giá bán bằng 0 nên xử lý thế nào?

A. Tính bằng phép chia 0  
B. Loại/đánh dấu không hợp lệ cho công thức margin  
C. Cho margin 100%  
D. Thay bằng giá vốn  

**Đáp án:** B. **Giải thích:** Cần tránh phép chia cho 0.

**Câu 4.** Khi checkout từ UI AI cần gì?

A. Chỉ CSS đẹp  
B. Một prompt ngắn  
C. Không cần xác thực  
D. Backend kiểm tra và xác nhận  

**Đáp án:** D. **Giải thích:** Tác dụng phụ phải được kiểm soát.

**Câu 5.** Gross margin khác markup ở?

A. Mẫu số tính toán  
B. Tên CSS  
C. Cách lưu ảnh  
D. Số lượng hàng  

**Đáp án:** A. **Giải thích:** Margin chia cho giá bán, markup chia giá vốn.

