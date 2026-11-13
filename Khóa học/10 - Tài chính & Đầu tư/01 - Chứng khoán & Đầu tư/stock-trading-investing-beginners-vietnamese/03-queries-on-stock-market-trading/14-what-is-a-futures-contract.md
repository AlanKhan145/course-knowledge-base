---
id: stock-beginners-s03-l027
title: "Hợp đồng Futures là gì? (What is a Futures Contract)"
description: "Giải thích nghĩa vụ, ký quỹ, thanh toán và cách biến động giá tạo lãi lỗ trong hợp đồng futures."
order: 14
duration: 6
difficulty: beginner
language: vi
tags: [futures, phai-sinh, ky-quy, don-bay]
objectives:
  - Định nghĩa hợp đồng futures và các điều khoản chính.
  - Tính lãi lỗ đơn giản theo biến động giá và quy mô hợp đồng.
  - Phân biệt giá trị danh nghĩa với ký quỹ.
  - Nêu các rủi ro của việc duy trì vị thế futures.
prerequisites:
  - [Có nên giao dịch Futures và Options?](./13-should-i-trade-using-futures-options.md)
assessment: true
source: "Udemy 696616 — What is a Futures Contract"
---

# Hợp đồng Futures là gì? (What is a Futures Contract)

> [!SUMMARY] Một câu tóm tắt
> Futures là hợp đồng chuẩn hóa tạo nghĩa vụ mua hoặc bán tài sản cơ sở theo điều khoản và thời điểm xác định; ký quỹ giúp bảo đảm thực hiện nhưng không giới hạn lỗ.

## 1. Tổng quan

Bài trước đã đặt câu hỏi liệu phái sinh có phù hợp với mục tiêu và khả năng chịu rủi ro hay không. Bài này tập trung vào futures, một loại hợp đồng có nghĩa vụ hai chiều và thường giao dịch trên sở giao dịch. Hiểu quy mô hợp đồng, kỳ hạn, ký quỹ và thanh toán giúp tránh nhầm số tiền nộp ban đầu với toàn bộ mức phơi nhiễm. Bài tiếp theo sẽ so sánh cấu trúc này với options.

## 2. Mục tiêu học tập

- [ ] Mô tả được futures và tài sản cơ sở.
- [ ] Tính lãi/lỗ cơ bản của một vị thế futures.
- [ ] Giải thích margin call và rủi ro đòn bẩy.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Có nên giao dịch Futures và Options?](./13-should-i-trade-using-futures-options.md).
- Cần nhớ: lãi/lỗ phụ thuộc quy mô vị thế, biến động giá và điều khoản hợp đồng.

## 4. Thử đoán trước

1. Nếu giá tài sản cơ sở tăng, vị thế futures mua thường lãi hay lỗ?
2. Nếu ký quỹ chỉ bằng một phần giá trị hợp đồng, điều đó làm thay đổi rủi ro ra sao?

## 5. Kiến thức cốt lõi

### 5.1. Cấu trúc hợp đồng

**Hợp đồng futures** là thỏa thuận chuẩn hóa mua hoặc bán một tài sản cơ sở ở mức giá xác định, với kỳ hạn và quy mô do sở giao dịch quy định. Tài sản cơ sở có thể là chỉ số, hàng hóa, tiền tệ hoặc công cụ tài chính. Tùy hợp đồng, việc tất toán có thể bằng giao nhận hoặc thanh toán tiền mặt.

### 5.2. Lãi lỗ của vị thế

Với một vị thế đơn giản, bỏ qua phí và các điều chỉnh:

$$
	ext{Lãi/lỗ vị thế mua} = (F_1 - F_0) 	imes Q
$$

Trong đó $F_0$ là giá futures lúc mở, $F_1$ là giá lúc đóng, $Q$ là quy mô tương ứng. Vị thế bán có dấu ngược lại: $(F_0-F_1)	imes Q$.

### 5.3. Giá trị danh nghĩa và ký quỹ

| Khái niệm | Ý nghĩa |
|---|---|
| Giá trị danh nghĩa | Mức phơi nhiễm xấp xỉ của hợp đồng theo giá và quy mô |
| Ký quỹ ban đầu | Tiền bảo đảm cần có để mở vị thế |
| Ký quỹ duy trì | Ngưỡng vốn cần giữ để tiếp tục duy trì vị thế |
| Thanh toán biến động | Khoản lãi/lỗ được ghi nhận theo quy tắc thị trường |

## 6. Giải thích chi tiết

Do hợp đồng được chuẩn hóa, người giao dịch cần kiểm tra mã hợp đồng, tháng đáo hạn, quy mô, bước giá, giờ giao dịch và phương thức tất toán. Trong nhiều thị trường, lãi/lỗ được đánh dấu theo giá thị trường định kỳ và tài khoản phải duy trì đủ ký quỹ. Nếu vốn giảm dưới ngưỡng, broker có thể yêu cầu bổ sung tiền hoặc thanh lý vị thế theo quy định.

> [!WARNING] Cảnh báo
> Futures có đòn bẩy. Biến động nhỏ của giá tài sản cơ sở có thể tạo thay đổi lớn so với số vốn ký quỹ; khoản lỗ có thể vượt ký quỹ ban đầu.

Giá futures cũng có thể khác giá giao ngay do thời gian, lãi suất, chi phí lưu trữ, cổ tức kỳ vọng hoặc cung cầu. Khi đáo hạn, hai mức giá thường có xu hướng hội tụ theo cơ chế hợp đồng, nhưng hội tụ không đảm bảo giao dịch có lãi. Phí, spread, thuế và trượt giá làm kết quả thực tế khác phép tính đơn giản.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Một hợp đồng chỉ số có hệ số 10 đơn vị tiền cho mỗi điểm. Nhà giao dịch mua ở 4.000 điểm và đóng ở 4.025 điểm.

1. Biến động thuận lợi = 4.025 − 4.000 = 25 điểm.
2. Lãi gộp = 25 × 10 = 250 đơn vị tiền.
3. Trừ phí và các khoản điều chỉnh mới ra kết quả ròng.
4. Nếu chỉ số giảm 25 điểm thay vì tăng, lỗ gộp tương tự là 250 đơn vị tiền.

Ví dụ giả định này không phản ánh một hợp đồng thực tế hay dự báo lợi nhuận.

## 8. Thực hành

**Bài tự làm:** Hệ số hợp đồng là 5 đơn vị tiền mỗi điểm. Một vị thế bán mở tại 2.200 điểm, đóng tại 2.184 điểm. Tính lãi/lỗ gộp trước chi phí.

- [ ] Xác định chiều vị thế.
- [ ] Tính biến động theo hướng có lợi hay bất lợi.
- [ ] Nhân với hệ số hợp đồng.

<details>
<summary>Xem lời giải sau khi đã tự làm</summary>

Vị thế bán có lợi khi giá giảm. Mức giảm là 2.200 − 2.184 = 16 điểm. Lãi gộp là 16 × 5 = 80 đơn vị tiền, trước phí, thuế và trượt giá.

</details>

## 9. Những lỗi thường gặp

- **Coi ký quỹ là giá mua hợp đồng** — xem cả giá trị danh nghĩa và hệ số hợp đồng.
- **Quên chiều mua/bán** — ghi rõ vị thế trước khi tính dấu lãi/lỗ.
- **Bỏ qua đáo hạn** — kiểm tra tháng hợp đồng và quy trình chuyển hoặc tất toán.
- **Dùng phép tính gộp làm lợi nhuận ròng** — trừ chi phí và xét trượt giá.

## 10. Giải thích bằng lời của bạn

- Futures là loại hợp đồng gì?
- Vì sao ký quỹ tạo đòn bẩy?
- Một ví dụ giả định tôi tự đặt:
- Chỗ tôi còn chưa chắc:

## 11. Câu hỏi ôn tập

### Câu 1

Một vị thế mua futures thường có lãi gộp khi nào, nếu các yếu tố khác không đổi?

A. Giá hợp đồng tăng sau khi mở vị thế
B. Giá hợp đồng giảm sau khi mở vị thế
C. Hợp đồng có ký quỹ thấp
D. Ngày giao dịch có khối lượng thấp

**Đáp án:** A. **Giải thích:** Vị thế mua hưởng lợi khi giá tăng; giảm giá tạo lỗ gộp. Ký quỹ và khối lượng không quyết định dấu lãi/lỗ.

### Câu 2

Điều gì mô tả đúng nhất ký quỹ duy trì?

A. Toàn bộ giá trị danh nghĩa hợp đồng
B. Ngưỡng vốn cần giữ để duy trì vị thế theo quy tắc
C. Mức lỗ tối đa được bảo đảm
D. Phí giao dịch cố định

**Đáp án:** B. **Giải thích:** Đây là ngưỡng tài khoản phải đáp ứng; không phải giá trị hợp đồng, phí hay giới hạn lỗ.

### Câu 3

Những điều khoản nào cần kiểm tra khi giao dịch futures? (Chọn nhiều)

A. Quy mô và bước giá
B. Tháng đáo hạn, phương thức tất toán
C. Chỉ giá tài sản cơ sở hiện tại
D. Quy tắc ký quỹ và giờ giao dịch

**Đáp án:** A, B, D. **Giải thích:** Các điều khoản này xác định phơi nhiễm và cách quản lý hợp đồng; giá hiện tại đơn lẻ không đủ.

### Câu 4

Phát biểu sau đúng hay sai: “Vì futures được chuẩn hóa nên lỗ tối đa luôn bằng ký quỹ ban đầu.”

A. Đúng
B. Sai

**Đáp án:** B. **Giải thích:** Chuẩn hóa không giới hạn lỗ; biến động bất lợi có thể làm lỗ vượt số tiền ký quỹ ban đầu.

## 12. Tóm tắt kiến thức

- Futures tạo nghĩa vụ mua/bán theo điều khoản chuẩn hóa.
- Lãi/lỗ phụ thuộc biến động giá, chiều vị thế và quy mô hợp đồng.
- Ký quỹ là tài sản bảo đảm, không phải giới hạn lỗ.
- Phải kiểm tra kỳ hạn, bước giá, thanh toán và chi phí.

## 13. Tài liệu tham khảo

1. CME Group — Futures Fundamentals, tài liệu giáo dục về hợp đồng và ký quỹ.
2. Investor.gov — tài liệu về derivatives và rủi ro của sản phẩm phái sinh.

## 14. Bài học tiếp theo

[Hợp đồng Options là gì?](./15-what-is-an-options-contract.md) — tiếp theo là quyền chọn, nơi quyền và nghĩa vụ của người mua khác futures.
