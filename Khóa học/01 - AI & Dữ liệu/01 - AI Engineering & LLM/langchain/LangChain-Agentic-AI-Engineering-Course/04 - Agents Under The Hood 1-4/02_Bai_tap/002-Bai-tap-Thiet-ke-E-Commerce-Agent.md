# 002 - Bài tập: thiết kế E-Commerce Agent

## 1. Mục tiêu

Bài tập yêu cầu chuyển bài toán thương mại điện tử thành một đặc tả agent nhỏ, rõ ràng và có thể dùng cho phần triển khai ReAct sau đó.

## 2. Kiến thức cần dùng

Agent có hai khả năng chính:

- tra cứu giá của sản phẩm;
- xác định mức giảm giá theo hạng khuyến mãi.

Hạng đồng có mức giảm `15%`. Nội dung bài chưa cung cấp tỷ lệ cụ thể cho hạng bạc và vàng.

## 3. Đề bài

Thiết kế đặc tả cho một agent xử lý yêu cầu:

> Tính giá của một sản phẩm sau khi áp dụng hạng giảm giá phù hợp.

Sản phẩm có thể thuộc nhóm phần cứng như tai nghe, bàn phím hoặc laptop.

## 4. Nhiệm vụ

1. Định nghĩa đầu vào và đầu ra về mặt khái niệm cho công cụ tra cứu giá.
2. Định nghĩa đầu vào và đầu ra về mặt khái niệm cho công cụ xác định mức giảm giá.
3. Vẽ luồng dữ liệu từ yêu cầu người dùng đến kết quả cuối cùng.
4. Với trường hợp `laptop + hạng đồng`, biểu diễn giá cuối dưới dạng công thức theo giá gốc `P`.
5. Chỉ rõ dữ liệu nào hiện chưa có trong bài và phải để ở trạng thái chưa xác định thay vì tự bịa.

## 5. Yêu cầu

- Không tự đặt giá cụ thể cho laptop nếu đề bài không cung cấp.
- Không tự đặt tỷ lệ giảm giá cho hạng bạc hoặc vàng.
- Hai công cụ phải có trách nhiệm tách biệt.
- Agent phải là thành phần điều phối giữa yêu cầu người dùng và các công cụ.

## 6. Tiêu chí hoàn thành

- [ ] Có đặc tả đủ hai công cụ.
- [ ] Có luồng xử lý rõ ràng.
- [ ] Mức đồng được giữ đúng là `15%`.
- [ ] Công thức giá cuối không phụ thuộc vào một giá sản phẩm bịa thêm.
- [ ] Các dữ liệu chưa được cung cấp được đánh dấu rõ.
