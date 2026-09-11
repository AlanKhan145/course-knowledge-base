# Bài 01 - Vì sao LLM trading agent trực tiếp dễ bất ổn?

**Loại:** Lesson  
**Nguồn chính:** PDF trang 1-2

## 1. Ba biểu hiện bất ổn

Bài báo mô tả ba hiện tượng chính.

### 1.1 Run-to-run variance lớn

Trong cùng một thiết lập, một LLM có thể tạo ra quỹ đạo giao dịch khác nhau đáng kể giữa các lần chạy, kéo theo khác biệt lớn ở return, drawdown và các metric khác.

### 1.2 Chuỗi hành động không nhất quán ngay cả khi temperature = 0

Temperature bằng 0 thường được dùng như cấu hình giải mã xác định hơn, nhưng bài báo cho biết các chuỗi hành động vẫn có thể khác nhau giữa các lần chạy trong task trading trực tiếp.

### 1.3 Action flipping

Mô hình có xu hướng đổi nhanh giữa mua và bán ở các bước gần nhau. Các guardrail trong prompt như minimum holding period, cooldown hay lịch sử hành động không loại bỏ hoàn toàn hiện tượng này.

## 2. Nguyên nhân thứ nhất: mô hình mang tính stateless ở giao diện quyết định

Trong thiết lập trading trực tiếp, mỗi bước dễ trở thành một lần đánh giá lại từ snapshot hiện tại. Mô hình không tự có cơ chế trạng thái bền vững giống một hệ thống giao dịch được lập trình để duy trì vị thế, thời gian nắm giữ hoặc quy tắc chuyển trạng thái.

Hệ quả là một biến động nhỏ của input có thể làm thay đổi kết luận ở bước kế tiếp.

## 3. Nguyên nhân thứ hai: ánh xạ continuous -> discrete

Giá, volume và indicator thay đổi liên tục, nhưng output lại thường là nhãn rời rạc như BUY/HOLD/SELL. Khi ranh giới quyết định không được mã hóa thành logic có inertia, tolerance hoặc waiting rule rõ ràng, biến động nhỏ có thể gây đổi nhãn đột ngột.

## 4. Nguyên nhân thứ ba: phân loại hành động không đồng nghĩa tối ưu chiến lược

Nếu chỉ hỏi "hành động hợp lý nhất hiện tại là gì", LLM về thực chất đang giải một bài toán gần với phân loại trạng thái. Trong khi đó chiến lược giao dịch dài hạn cần tính đến:

- chi phí giao dịch;
- trạng thái vị thế;
- ràng buộc thời gian;
- trade-off giữa lợi nhuận và rủi ro;
- hậu quả của over-trading hoặc inactivity.

Bài báo lập luận rằng hai bài toán này không tương đương.

## 5. Cách AlphaForgeBench xử lý vấn đề

Thay vì để LLM quyết định tại từng timestep, benchmark buộc mô hình formalize ranh giới quyết định thành code. Khi đó:

- tính ngẫu nhiên tập trung ở giai đoạn sinh code;
- code có thể giữ state và logic nhất quán trên toàn chuỗi thời gian;
- downstream execution được backtest engine chạy xác định.

## 6. Kết luận bài

Thông điệp chính không phải là "LLM không thể giao dịch", mà là **giao diện đánh giá** có thể khiến kết quả thiếu tin cậy. AlphaForgeBench vì vậy thay đổi chính giao diện đánh giá để tách reasoning khỏi execution mechanics.
