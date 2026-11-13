---
id: stock-beginners-s03-l028
title: "Hợp đồng Options là gì? (What is an Options Contract)"
description: "Giải thích quyền chọn mua, quyền chọn bán, giá thực hiện, phí quyền chọn và payoff cơ bản khi đáo hạn."
order: 15
duration: 6
difficulty: beginner
language: vi
tags: [options, quyen-chon, phai-sinh, payoff]
objectives:
  - Phân biệt quyền chọn mua và quyền chọn bán.
  - Nhận diện giá thực hiện, phí quyền chọn và ngày đáo hạn.
  - Tính payoff đơn giản của người mua quyền chọn tại đáo hạn.
  - Phân biệt payoff với lãi/lỗ ròng.
prerequisites:
  - [Hợp đồng Futures là gì?](./14-what-is-a-futures-contract.md)
assessment: true
source: "Udemy 696616 — What is an Options Contract"
---

# Hợp đồng Options là gì? (What is an Options Contract)

> [!SUMMARY] Một câu tóm tắt
> Options trao cho người mua quyền mua hoặc bán tài sản theo giá thực hiện trong thời hạn nhất định; người mua trả phí để có quyền đó, còn người bán nhận phí và gánh nghĩa vụ tương ứng.

## 1. Tổng quan

Sau khi hiểu futures với nghĩa vụ hai chiều, bài này giới thiệu options, nơi quyền và nghĩa vụ giữa người mua và người bán không đối xứng. Hợp đồng quyền chọn có các thông số như tài sản cơ sở, giá thực hiện và ngày đáo hạn. Giá trị của hợp đồng phụ thuộc giá tài sản, thời gian còn lại, biến động và nhiều yếu tố khác. Bài kết thúc phần khái niệm trước quiz tổng hợp Futures & Options.

## 2. Mục tiêu học tập

- [ ] Phân biệt call và put.
- [ ] Nêu nghĩa của strike, premium và expiry.
- [ ] Tính payoff và lãi/lỗ ròng cơ bản của người mua quyền chọn tại đáo hạn.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Hợp đồng Futures là gì?](./14-what-is-a-futures-contract.md).
- Nhớ phân biệt giá trị hợp đồng, vốn bỏ ra và nghĩa vụ pháp lý theo từng vị thế.

## 4. Thử đoán trước

1. Người mua call có bắt buộc phải mua tài sản hay chỉ có quyền?
2. Nếu tài sản kết thúc thấp hơn strike của một put, quyền chọn đó có giá trị thực hiện không?

## 5. Kiến thức cốt lõi

### 5.1. Call, put và các thuật ngữ

**Quyền chọn (option)** là hợp đồng trao quyền, nhưng không bắt buộc, mua hoặc bán tài sản cơ sở theo **giá thực hiện (strike price)** trước hoặc tại thời điểm đáo hạn, tùy điều khoản. **Call** là quyền mua; **put** là quyền bán. Người mua trả **phí quyền chọn (premium)**, còn người bán nhận phí và có nghĩa vụ nếu được thực hiện hoặc phân bổ theo quy tắc hợp đồng.

### 5.2. Payoff tại đáo hạn

Với một đơn vị tài sản và bỏ qua hệ số nhân:

$$
	ext{Payoff call mua} = \max(S_T-K,0)
$$

$$
	ext{Payoff put mua} = \max(K-S_T,0)
$$

Trong đó $S_T$ là giá tài sản lúc đáo hạn và $K$ là strike. Lãi/lỗ ròng của người mua còn phải trừ premium và chi phí:

$$
	ext{Lãi/lỗ ròng} = 	ext{Payoff} - 	ext{Premium} - 	ext{chi phí}
$$

### 5.3. Quyền và nghĩa vụ

| Vị thế | Đặc điểm cơ bản |
|---|---|
| Người mua call | Có quyền mua; lỗ tối đa thường là premium đã trả |
| Người mua put | Có quyền bán; lỗ tối đa thường là premium đã trả |
| Người bán call/put | Nhận premium nhưng có nghĩa vụ; mức lỗ có thể lớn tùy cấu trúc |

## 6. Giải thích chi tiết

Options có thể được thực hiện theo kiểu Mỹ (có thể thực hiện trước hạn, theo điều khoản) hoặc kiểu châu Âu (thực hiện tại đáo hạn). Đây là tên gọi kiểu thực hiện, không phải vị trí địa lý. Một option có thể còn được mua bán trước đáo hạn; giá thị trường khi đó phản ánh cả giá trị nội tại và giá trị thời gian, nên payoff tại đáo hạn không mô tả đầy đủ giá trị giữa kỳ.

> [!WARNING] Cảnh báo
> Mua quyền chọn có thể mất toàn bộ premium. Bán quyền chọn có rủi ro khác và có thể chịu lỗ rất lớn; call bán không bảo đảm có tài sản để giao. Hợp đồng có hệ số nhân, quy tắc thực hiện và cơ chế thanh toán riêng.

Điểm hòa vốn của người mua call tại đáo hạn thường bằng strike cộng premium trên mỗi đơn vị; với put là strike trừ premium. Cần nhân đúng hệ số hợp đồng và cộng phí. Không thể kết luận một chiến lược phù hợp chỉ từ xác suất thắng hoặc phí ban đầu.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Một call có strike 100, premium 4 cho mỗi cổ phiếu. Tại đáo hạn, giá tài sản là 110.

1. Payoff = max(110 − 100, 0) = 10.
2. Lãi/lỗ ròng trước chi phí = 10 − 4 = 6 mỗi cổ phiếu.
3. Nếu giá đáo hạn là 102, payoff là 2 nhưng lãi/lỗ ròng là 2 − 4 = −2.
4. Nếu giá không vượt 100, payoff bằng 0 và người mua mất premium 4.

Các con số giả định, không mô tả hợp đồng niêm yết cụ thể.

## 8. Thực hành

**Bài tự làm:** Mua một put strike 50 với premium 3. Bỏ qua phí và hệ số nhân. Tính payoff và lãi/lỗ ròng nếu giá tại đáo hạn là 42, rồi tính nếu giá là 52.

- [ ] Áp dụng công thức payoff put.
- [ ] Trừ premium để ra lãi/lỗ ròng.
- [ ] Kiểm tra dấu kết quả.

<details>
<summary>Xem lời giải sau khi đã tự làm</summary>

Ở giá 42, payoff = max(50 − 42, 0) = 8; lãi ròng = 8 − 3 = 5. Ở giá 52, payoff = 0; lãi/lỗ ròng = 0 − 3 = −3. Chưa tính phí giao dịch hoặc hệ số hợp đồng.

</details>

## 9. Những lỗi thường gặp

- **Gọi premium là strike** — premium là giá mua hợp đồng, strike là giá thực hiện.
- **Nhầm payoff với lợi nhuận ròng** — luôn trừ premium và chi phí.
- **Nghĩ người mua buộc phải thực hiện quyền** — quyền chọn cho quyền lựa chọn, theo điều khoản.
- **Cho rằng người bán chỉ có thể mất premium** — người bán nhận premium nhưng chịu nghĩa vụ và rủi ro lớn hơn.

## 10. Giải thích bằng lời của bạn

- Call và put trao quyền gì?
- Vì sao payoff khác lãi/lỗ ròng?
- Một ví dụ số của riêng tôi:
- Chỗ tôi còn chưa chắc:

## 11. Câu hỏi ôn tập

### Câu 1

Người mua một call thường có quyền gì?

A. Bán tài sản ở bất kỳ giá nào
B. Mua tài sản theo strike theo điều khoản hợp đồng
C. Nhận cổ tức chắc chắn
D. Bắt buộc bán tài sản cho người khác

**Đáp án:** B. **Giải thích:** Call là quyền mua theo strike; put là quyền bán, còn cổ tức và nghĩa vụ bắt buộc không phải quyền của call mua.

### Câu 2

Một call có strike 40. Giá tài sản tại đáo hạn là 46. Payoff mỗi đơn vị trước premium là bao nhiêu?

A. 0
B. 40
C. 6
D. 46

**Đáp án:** C. **Giải thích:** Payoff = max(46 − 40, 0) = 6; premium cần trừ để ra lãi/lỗ ròng.

### Câu 3

Những phát biểu nào đúng? (Chọn nhiều)

A. Người mua option trả premium.
B. Premium luôn bằng payoff tại đáo hạn.
C. Người mua put có thể hưởng lợi khi giá tài sản giảm dưới strike.
D. Người bán option nhận premium và không có nghĩa vụ nào.

**Đáp án:** A, C. **Giải thích:** Người mua trả premium; put mua có payoff khi giá dưới strike. Premium không nhất thiết bằng payoff, và người bán có nghĩa vụ theo hợp đồng.

### Câu 4

Phát biểu sau đúng hay sai: “Payoff dương của người mua option đồng nghĩa chắc chắn có lãi ròng.”

A. Đúng
B. Sai

**Đáp án:** B. **Giải thích:** Phải trừ premium và chi phí; payoff dương nhưng thấp hơn tổng chi phí vẫn là lỗ ròng.

## 12. Tóm tắt kiến thức

- Call là quyền mua, put là quyền bán.
- Strike là giá thực hiện; premium là giá mua quyền chọn.
- Payoff tại đáo hạn chưa phải lãi/lỗ ròng.
- Người bán quyền chọn nhận phí nhưng có nghĩa vụ và rủi ro đáng kể.

## 13. Tài liệu tham khảo

1. Options Industry Council — Options Basics, tài liệu giáo dục về call, put và payoff.
2. Investor.gov — tài liệu về options và rủi ro sản phẩm phái sinh.

## 14. Bài học tiếp theo

[Quiz Futures & Options](./16-quiz-futures-options-quiz.md) — quiz giúp kiểm tra khả năng phân biệt nghĩa vụ futures và payoff options.
