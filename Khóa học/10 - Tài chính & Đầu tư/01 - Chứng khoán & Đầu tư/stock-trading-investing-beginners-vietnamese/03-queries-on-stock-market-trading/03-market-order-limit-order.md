---
id: stock-beginners-s03-l018
title: "Lệnh thị trường và lệnh giới hạn (Market Order & Limit Order)"
description: "So sánh lệnh market và limit, dự đoán khả năng khớp cùng các rủi ro về giá và thời gian."
order: 3
duration: 4
difficulty: beginner
language: vi
tags: [market-order, limit-order, thuc-thi-lenh, truot-gia]
objectives:
  - Phân biệt mục tiêu khớp lệnh và giới hạn giá của market order, limit order.
  - Chọn loại lệnh phù hợp với một tình huống giả định.
  - Giải thích trượt giá và rủi ro không khớp.
  - Kiểm tra thời hạn và điều kiện lệnh trước khi gửi.
prerequisites:
  - Bài trước: [Giá Bid và Offer](02-bid-price-offer-price.md)
assessment: true
source: "Udemy 696616 — Market Order & Limit Order"
---

# Lệnh thị trường và lệnh giới hạn (Market Order & Limit Order)

> [!SUMMARY] Một câu tóm tắt
> Market order ưu tiên thực hiện nhanh nhưng không khóa giá; limit order đặt giới hạn giá nhưng có thể không được khớp.

## 1. Tổng quan

Sau khi hiểu bid và offer, bước tiếp theo là chọn cách gửi lệnh vào thị trường. Loại lệnh ảnh hưởng mức giá có thể trả hoặc nhận, khả năng được thực hiện và thời gian chờ. Bài này tập trung vào market order và limit order, hai khái niệm nền tảng trước khi ghép lệnh dừng lỗ. Quy tắc cụ thể, thời hạn và cách xử lý lệnh có thể khác theo broker và sở giao dịch.

## 2. Mục tiêu học tập

- [ ] Mô tả cách market order được thực hiện.
- [ ] Nêu giới hạn giá của lệnh mua và bán dạng limit.
- [ ] So sánh rủi ro giá với rủi ro không khớp.
- [ ] Nhận diện khả năng trượt giá trong ví dụ sổ lệnh.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Giá Bid và Offer](02-bid-price-offer-price.md) — ôn spread và phía báo giá mà người mua/bán khớp ngay thường gặp.
- Cần biết giá chứng khoán thay đổi theo cung cầu và lệnh có thể chỉ khớp một phần.

## 4. Thử đoán trước

1. Nếu ưu tiên giới hạn mức giá mua tối đa, loại lệnh nào phù hợp hơn?
2. Lệnh nào có thể khớp nhanh nhưng không đảm bảo giá chính xác?

## 5. Kiến thức cốt lõi

### 5.1. Market order

**Market order** (lệnh thị trường) yêu cầu thực hiện ngay ở mức giá tốt nhất hiện có, theo khả năng thanh khoản. Lệnh thường ưu tiên xác suất và tốc độ khớp, nhưng giá cuối cùng không được bảo đảm. Nếu khối lượng lớn hơn thanh khoản ở mức đầu sổ lệnh, lệnh có thể khớp qua nhiều mức giá.

### 5.2. Limit order

**Limit order** (lệnh giới hạn) đặt giá tối đa người mua chấp nhận trả hoặc tối thiểu người bán chấp nhận nhận. Lệnh mua limit có thể khớp ở giá giới hạn hoặc thấp hơn; lệnh bán limit có thể khớp ở giá giới hạn hoặc cao hơn. Giới hạn giá không đảm bảo lệnh được khớp, kể cả khi thị trường chạm mức đó, vì thứ tự ưu tiên và khối lượng chờ có thể ảnh hưởng.

| Loại lệnh | Ưu tiên chính | Bất định còn lại |
|---|---|---|
| Market | Khả năng thực hiện nhanh | Giá khớp và trượt giá |
| Limit | Kiểm soát mức giá chấp nhận | Không khớp hoặc khớp một phần |

## 6. Giải thích chi tiết

**Slippage** (trượt giá) là chênh lệch giữa giá dự kiến và giá thực tế được khớp. Trượt giá dễ tăng khi thị trường biến động nhanh, thanh khoản mỏng, lệnh lớn hoặc dữ liệu bị trễ. Limit order giảm nguy cơ khớp vượt mức giá đặt, nhưng người giao dịch có thể bỏ lỡ cơ hội nếu giá đi khỏi giới hạn. Cần đọc thêm các lựa chọn như hiệu lực trong ngày, đến khi hủy, chỉ khớp toàn bộ hoặc lệnh ngoài giờ nếu broker cung cấp.

> [!TIP] Mẹo
> Trước khi gửi lệnh, đọc lại mã, mua/bán, khối lượng, giá giới hạn (nếu có), thời hạn và loại tài khoản. Xem màn hình xác nhận như một bước kiểm tra độc lập.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Bid của cổ phiếu Y là 49,90; offer là 50,00 với 100 cổ phiếu, mức offer kế tiếp là 50,10.

1. Nhà đầu tư đặt market buy 150 cổ phiếu. Một khả năng là 100 cổ phiếu khớp ở 50,00 và 50 cổ phiếu ở 50,10, nếu thanh khoản vẫn còn.
2. Nếu thay bằng limit buy ở 50,00, lệnh không trả quá 50,00. Có thể khớp 100 cổ phiếu nếu đủ điều kiện, còn 50 cổ phiếu chờ hoặc không khớp.
3. Market order đánh đổi kiểm soát giá để tăng khả năng thực hiện; limit order đánh đổi khả năng thực hiện để kiểm soát giá.

## 8. Thực hành

**Bài tự làm:** Cổ phiếu Z có bid 72,00 và offer 72,30. Bạn muốn mua tối đa 200 cổ phiếu, không trả quá 72,10.

- [ ] Chọn loại lệnh phù hợp với giới hạn giá trên.
- [ ] Nêu điều kiện giá để lệnh mua có thể khớp.
- [ ] Ghi một lý do lệnh có thể vẫn chưa được khớp.

<details>
<summary>Xem lời giải sau khi đã tự làm</summary>

Limit buy 72,10 đáp ứng yêu cầu không trả cao hơn mức đó. Lệnh có thể khớp nếu có người bán sẵn sàng bán ở 72,10 hoặc thấp hơn và lệnh đến lượt theo quy tắc ưu tiên. Nếu offer vẫn ở 72,30 hoặc có nhiều lệnh đứng trước, lệnh có thể không khớp.

</details>

## 9. Những lỗi thường gặp

- **Nghĩ market order đảm bảo giá hiển thị** — giá có thể đổi trước khi lệnh tới sổ lệnh.
- **Nghĩ limit order chắc chắn khớp khi giá chạm** — thứ tự ưu tiên và khối lượng còn chờ vẫn quan trọng.
- **Đặt limit mua cao hơn mức tối đa dự định** — kiểm tra đơn vị giá và con số trước xác nhận.
- **Bỏ qua thời hạn lệnh** — lệnh còn hiệu lực có thể khớp về sau trong điều kiện khác.

## 10. Giải thích bằng lời của bạn

- Khái niệm: market và limit khác nhau ở ưu tiên nào?
- Vì sao: limit order có thể không khớp dù giá gần chạm giới hạn?
- Ví dụ của tôi: chọn loại lệnh cho một tình huống mua/bán giả định.
- Chỗ tôi chưa chắc: broker của tôi có các tùy chọn hiệu lực lệnh nào?

## 11. Câu hỏi ôn tập

### Câu 1

Một người mua muốn giới hạn số tiền tối đa trả cho mỗi cổ phiếu. Lệnh nào thể hiện trực tiếp giới hạn đó?

A. Market buy  
B. Limit buy  
C. Market sell  
D. Lệnh hủy

**Đáp án:** B. **Giải thích:** Limit buy đặt giá tối đa chấp nhận mua. Market buy không khóa giá; market sell là lệnh bán; lệnh hủy không phải lệnh mua.

### Câu 2

Lệnh market thường có đặc điểm nào?

A. Đảm bảo giá cụ thể nhưng không khớp  
B. Chỉ khớp vào giá đóng cửa  
C. Ưu tiên thực hiện nhưng giá khớp không được bảo đảm  
D. Luôn khớp toàn bộ khối lượng cùng một mức giá

**Đáp án:** C. **Giải thích:** Market order ưu tiên thực hiện theo thanh khoản sẵn có. A mô tả một phần tính chất limit; B và D không đúng phổ quát.

### Câu 3

Những phát biểu nào đúng về limit order? (chọn nhiều)

A. Limit buy đặt mức tối đa người mua chấp nhận trả  
B. Limit order luôn được khớp khi giá thị trường chạm mức đặt  
C. Limit sell đặt mức tối thiểu người bán chấp nhận nhận  
D. Limit order có thể chỉ khớp một phần

**Đáp án:** A, C, D. **Giải thích:** A và C mô tả giới hạn giá; D là khả năng thực tế. Chạm giá không bảo đảm khớp do ưu tiên và thanh khoản, nên B sai.

### Câu 4

Phát biểu sau đúng hay sai: Trượt giá là chênh lệch giữa giá dự kiến và giá thực tế khớp.

A. Đúng  
B. Sai

**Đáp án:** A. **Giải thích:** Đây là ý nghĩa của slippage. Vì vậy B sai.

## 12. Tóm tắt kiến thức

- Market order hướng tới thực hiện nhanh, nhưng không khóa giá.
- Limit order kiểm soát giá chấp nhận, nhưng có thể chờ hoặc khớp một phần.
- Trượt giá chịu ảnh hưởng của thanh khoản, biến động, kích thước lệnh và độ trễ.
- Bài tiếp theo xem cách kết hợp lệnh dừng lỗ với lệnh vào/thoát vị thế.

## 13. Tài liệu tham khảo

1. Investor.gov, “Types of Orders” — market, limit, stop và các giới hạn thực thi.
2. FINRA, tài liệu nhà đầu tư về các loại lệnh và rủi ro thực thi.
3. U.S. Securities and Exchange Commission (SEC), tài liệu giáo dục nhà đầu tư về brokerage orders.

## 14. Bài học tiếp theo

[Lệnh dừng lỗ và cách kết hợp (Stop Loss Order Combinations)](04-stop-loss-order-combinations.md) — bài tiếp theo giải thích cách điều kiện dừng có thể kích hoạt lệnh thoát và những giới hạn cần tính đến.
