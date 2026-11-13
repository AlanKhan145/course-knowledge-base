---
id: stock-beginners-s03-l017
title: "Giá Bid và Offer (Bid Price & Offer Price)"
description: "Đọc được giá bid, offer, chênh lệch giá và hiểu vì sao lệnh có thể khớp ở mức khác giá kỳ vọng."
order: 2
duration: 4
difficulty: beginner
language: vi
tags: [bid, offer, spread, thanh-khoan, so-lenh]
objectives:
  - Định nghĩa giá bid và giá offer theo góc nhìn người tham gia thị trường.
  - Tính chênh lệch bid–ask từ một báo giá.
  - Giải thích ảnh hưởng của thanh khoản và độ sâu sổ lệnh đến giá khớp.
prerequisites:
  - Bài trước: [Bắt đầu giao dịch trên thị trường chứng khoán](01-how-can-i-start-trading-in-the-stock-market.md)
assessment: true
source: "Udemy 696616 — Bid Price & Offer Price"
---

# Giá Bid và Offer (Bid Price & Offer Price)

> [!SUMMARY] Một câu tóm tắt
> Giá bid là mức mua cao nhất đang chờ, còn giá offer/ask là mức bán thấp nhất đang chờ; khoảng cách giữa chúng là một phần chi phí giao dịch.

## 1. Tổng quan

Một mã cổ phiếu thường có nhiều mức giá mua và bán cùng tồn tại trong sổ lệnh. Báo giá bid–offer giúp người giao dịch nhìn thấy mức giá tốt nhất đang được chào ở mỗi phía. Bài này tiếp nối phần chuẩn bị tài khoản bằng cách giải thích ngôn ngữ của báo giá, trước khi học market order và limit order. Báo giá thay đổi liên tục và không cam kết mọi lệnh sẽ khớp tại mức tốt nhất hiển thị.

## 2. Mục tiêu học tập

- [ ] Giải thích bid và offer theo phía mua/bán.
- [ ] Tính spread từ hai mức giá.
- [ ] Phân biệt giá tốt nhất hiển thị với giá chắc chắn được thực hiện.
- [ ] Nêu hai yếu tố có thể làm spread rộng ra.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Bắt đầu giao dịch trên thị trường chứng khoán](01-how-can-i-start-trading-in-the-stock-market.md) — ôn vai trò broker và giao diện báo giá.
- Cần biết rằng trong thị trường có thể đồng thời có lệnh mua và lệnh bán chờ khớp.

## 4. Thử đoán trước

1. Nếu bid là 99 và offer là 100, người mua muốn khớp ngay thường tương tác với phía giá nào?
2. Vì sao cùng một cổ phiếu có thể có spread rộng hơn vào lúc thị trường biến động?

## 5. Kiến thức cốt lõi

### 5.1. Bid, offer và spread

**Bid price** (giá mua) là mức cao nhất người mua đang sẵn sàng trả trong các lệnh chờ. **Offer price** hay **ask price** (giá bán) là mức thấp nhất người bán đang chào. Người mua muốn khớp ngay thường mua từ phía offer; người bán muốn khớp ngay thường bán vào phía bid.

**Bid–ask spread** (chênh lệch mua–bán) là khoảng cách giữa offer tốt nhất và bid tốt nhất:

$$
\text{Spread} = \text{Offer tốt nhất} - \text{Bid tốt nhất}
$$

### 5.2. Đọc sổ lệnh

Sổ lệnh thường xếp các mức bid từ cao xuống thấp và offer từ thấp lên cao. Khối lượng tại mỗi mức cho thấy lượng lệnh đang chờ, nhưng có thể thay đổi hoặc bị hủy trước khi giao dịch. Khi một lệnh thị trường lớn tiêu thụ hết khối lượng ở mức gần nhất, phần còn lại có thể khớp ở mức giá kế tiếp.

| Thuật ngữ | Ý nghĩa | Người khớp ngay thường gặp phía |
|---|---|---|
| Bid tốt nhất | Giá mua cao nhất đang chờ | Người bán |
| Offer/ask tốt nhất | Giá bán thấp nhất đang chờ | Người mua |
| Spread | Offer trừ bid | Là chi phí/điều kiện cần cân nhắc |

## 6. Giải thích chi tiết

Spread hẹp thường xuất hiện khi có nhiều người mua và bán cạnh tranh, nhưng không phải bằng chứng chắc chắn rằng giao dịch luôn dễ dàng. Spread có thể nới rộng khi thanh khoản thấp, tin tức bất ngờ, ngoài giờ giao dịch chính hoặc biến động tăng. Báo giá hiển thị cũng có thể trì hoãn tùy gói dữ liệu; cần biết dữ liệu là thời gian thực hay chậm.

> [!NOTE]
> Spread là một cách nhìn chi phí tức thời, không phải toàn bộ chi phí. Phí broker, thuế và trượt giá cũng có thể ảnh hưởng giá vốn thực tế.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Sổ lệnh cổ phiếu X hiển thị bid tốt nhất 99,00 đồng với 500 cổ phiếu và offer tốt nhất 100,00 đồng với 300 cổ phiếu.

1. Spread = 100,00 − 99,00 = 1,00 đồng/cổ phiếu.
2. Người muốn mua ngay có thể khớp với người bán ở offer 100,00, nếu khối lượng còn đủ.
3. Nếu mua 400 cổ phiếu bằng lệnh cần khớp ngay, 300 cổ phiếu đầu có thể lấy ở 100,00; phần còn lại có thể khớp ở mức offer kế tiếp cao hơn.
4. Do đó, mức giá tốt nhất hiển thị không bảo đảm toàn bộ khối lượng được mua cùng giá.

## 8. Thực hành

**Bài tự làm:** Một báo giá giả định có bid 48,20 với 1.000 cổ phiếu và offer 48,50 với 600 cổ phiếu. Một lệnh mua cần khớp ngay có khối lượng 800 cổ phiếu.

- [ ] Tính spread mỗi cổ phiếu.
- [ ] Nêu mức giá phía lệnh mua thường tương tác đầu tiên.
- [ ] Giải thích vì sao 800 cổ phiếu không chắc khớp toàn bộ ở cùng mức.

<details>
<summary>Xem lời giải sau khi đã tự làm</summary>

Spread = 48,50 − 48,20 = 0,30. Lệnh mua khớp ngay thường lấy thanh khoản phía offer. Chỉ có 600 cổ phiếu được chào ở 48,50; 200 cổ phiếu còn lại có thể phải khớp ở offer kế tiếp hoặc chưa khớp, tùy sổ lệnh và quy tắc thực thi.

</details>

## 9. Những lỗi thường gặp

- **Cho rằng bid là giá người mua chắc chắn được mua** — đó là lệnh chờ, có thể bị khớp trước hoặc hủy.
- **Nhầm offer với giá người mua chào** — offer là phía người bán đang chào.
- **Bỏ qua khối lượng tại mức giá** — mức giá tốt nhất có thể không đủ cho toàn bộ lệnh.
- **Xem spread là chi phí duy nhất** — kiểm tra thêm phí giao dịch, thuế và trượt giá.

## 10. Giải thích bằng lời của bạn

- Khái niệm: bid và offer khác nhau thế nào?
- Vì sao: khối lượng sổ lệnh ảnh hưởng giá khớp ra sao?
- Ví dụ của tôi: tính spread từ một báo giá bạn tự chọn.
- Chỗ tôi chưa chắc: báo giá trên nền tảng của bạn có thời gian thực không?

## 11. Câu hỏi ôn tập

### Câu 1

Trong báo giá thông thường, giá bid tốt nhất là gì?

A. Giá thấp nhất người bán đang chào  
B. Giá đóng cửa phiên trước  
C. Giá cao nhất người mua đang sẵn sàng trả  
D. Giá trung bình của mọi giao dịch trong ngày

**Đáp án:** C. **Giải thích:** Bid tốt nhất là mức mua cao nhất đang chờ. A mô tả offer; B là giá lịch sử; D là một dạng thống kê giá, không phải bid.

### Câu 2

Offer tốt nhất là 25,40 và bid tốt nhất là 25,10. Spread bằng bao nhiêu?

A. 0,30  
B. 25,10  
C. 50,50  
D. 1,20

**Đáp án:** A. **Giải thích:** Spread = offer − bid = 25,40 − 25,10 = 0,30. Các lựa chọn còn lại không phải hiệu giữa hai mức giá.

### Câu 3

Những yếu tố nào có thể làm spread rộng hơn? (chọn nhiều)

A. Thanh khoản mỏng  
B. Có nhiều lệnh cạnh tranh ở cả hai phía  
C. Biến động giá hoặc bất định tăng  
D. Một bên của sổ lệnh thiếu khối lượng

**Đáp án:** A, C, D. **Giải thích:** Thanh khoản thấp, biến động và mất cân bằng độ sâu có thể nới spread. Cạnh tranh dày ở cả hai phía thường có xu hướng thu hẹp spread, dù không bảo đảm.

### Câu 4

Phát biểu sau đúng hay sai: Toàn bộ lệnh lớn chắc chắn khớp ở giá bid hoặc offer tốt nhất đang hiển thị.

A. Đúng  
B. Sai

**Đáp án:** B. **Giải thích:** Khối lượng tại mức tốt nhất có thể không đủ; phần còn lại có thể khớp ở mức khác hoặc không khớp. Vì vậy A sai.

## 12. Tóm tắt kiến thức

- Bid là giá mua cao nhất đang chờ; offer/ask là giá bán thấp nhất đang chờ.
- Spread bằng offer tốt nhất trừ bid tốt nhất.
- Giá và khối lượng hiển thị thay đổi; lệnh lớn có thể khớp qua nhiều mức.
- Bài tiếp theo phân biệt market order và limit order.

## 13. Tài liệu tham khảo

1. Investor.gov, “Types of Orders” — phần giải thích bid, ask và cách lệnh tương tác với thị trường.
2. U.S. Securities and Exchange Commission (SEC), tài liệu giáo dục nhà đầu tư về báo giá và thực thi lệnh.
3. John J. Murphy, *Technical Analysis of the Financial Markets* — phần cấu trúc thị trường và giao dịch.

## 14. Bài học tiếp theo

[Market Order và Limit Order](03-market-order-limit-order.md) — hiểu hai loại lệnh này giúp lựa chọn giữa ưu tiên khớp và kiểm soát giá.
