---
id: stock-beginners-s03-q3
title: "Quiz: Futures và Options (Futures & Options Quiz)"
description: "Kiểm tra hiểu biết về mức độ phù hợp, nghĩa vụ futures, ký quỹ và payoff options."
order: 16
duration: 10
difficulty: beginner
language: vi
tags: [quiz, futures, options, phai-sinh]
assessment: true
source: "Udemy 696616 — Futures & Options Quiz"
---

# Quiz: Futures và Options (Futures & Options Quiz)

> [!NOTE]
> Quiz này bao quát [Có nên giao dịch Futures và Options?](./13-should-i-trade-using-futures-options.md), [Hợp đồng Futures là gì?](./14-what-is-a-futures-contract.md) và [Hợp đồng Options là gì?](./15-what-is-an-options-contract.md). Hãy tính cả payoff lẫn chi phí, đồng thời phân biệt quyền với nghĩa vụ.

## Câu hỏi ôn tập

### Câu 1

Mục tiêu chính của phòng hộ bằng phái sinh là gì?

A. Bảo đảm không bao giờ lỗ
B. Giảm một rủi ro đã xác định trong vị thế hoặc dòng tiền
C. Tăng lợi nhuận của mọi khoản đầu tư
D. Tránh phải theo dõi thị trường

**Đáp án:** B. **Giải thích:** Phòng hộ nhắm giảm rủi ro cụ thể; nó không đảm bảo lợi nhuận hoặc xóa mọi rủi ro.

### Câu 2

Một vị thế mua futures mở ở 1.500 điểm, đóng ở 1.492 điểm, hệ số hợp đồng là 20 đơn vị tiền mỗi điểm. Lãi/lỗ gộp là bao nhiêu?

A. Lỗ 160 đơn vị tiền
B. Lãi 160 đơn vị tiền
C. Lỗ 8 đơn vị tiền
D. Lãi 8 đơn vị tiền

**Đáp án:** A. **Giải thích:** Giá giảm 8 điểm, bất lợi cho vị thế mua; lỗ gộp = 8 × 20 = 160. B đảo dấu, C và D bỏ qua hệ số.

### Câu 3

Một put có strike 70, giá tài sản tại đáo hạn 62 và premium 5. Lãi/lỗ ròng mỗi đơn vị trước chi phí là bao nhiêu?

A. Lỗ 8
B. Lãi 13
C. Lãi 3
D. Lỗ 5

**Đáp án:** C. **Giải thích:** Payoff = 70 − 62 = 8; trừ premium 5 còn lãi 3. Các lựa chọn khác nhầm dấu hoặc bỏ qua premium.

### Câu 4

Phát biểu nào mô tả đúng nhất ký quỹ futures?

A. Đó luôn là giá trị toàn bộ hợp đồng
B. Đó là mức lỗ tối đa được bảo đảm
C. Đó là khoản tiền bảo đảm để duy trì vị thế theo quy tắc
D. Đó là premium người mua trả cho quyền chọn

**Đáp án:** C. **Giải thích:** Ký quỹ bảo đảm nghĩa vụ; không phải giá trị danh nghĩa, giới hạn lỗ hay premium option.

### Câu 5

Một call strike 25 có premium 2. Giá tài sản tại đáo hạn là 25. Payoff và lãi/lỗ ròng của người mua lần lượt là gì?

A. Payoff 2, lãi ròng 0
B. Payoff 0, lỗ ròng 2
C. Payoff 25, lãi ròng 23
D. Payoff 0, lãi ròng 2

**Đáp án:** B. **Giải thích:** Call tại mức bằng strike có payoff 0; người mua mất premium 2. Các lựa chọn khác dùng premium như payoff hoặc tính sai dấu.

### Câu 6

Những dữ kiện nào cần biết để đánh giá rủi ro futures? (Chọn nhiều)

A. Quy mô và bước giá hợp đồng
B. Màu giao diện ứng dụng broker
C. Kỳ hạn và phương thức tất toán
D. Quy tắc ký quỹ và khả năng thanh khoản

**Đáp án:** A, C, D. **Giải thích:** A, C, D quyết định phơi nhiễm và cách duy trì/đóng vị thế; màu giao diện không phải điều khoản rủi ro.

### Câu 7

Những phát biểu nào đúng về người mua options? (Chọn nhiều)

A. Call mua trao quyền mua theo strike.
B. Người mua luôn bị buộc thực hiện quyền.
C. Put mua có payoff dương khi giá thấp hơn strike.
D. Lãi ròng luôn bằng payoff.

**Đáp án:** A, C. **Giải thích:** Call là quyền mua, put có payoff khi giá dưới strike. Người mua không mặc nhiên buộc thực hiện; lãi ròng phải trừ premium và chi phí.

### Câu 8

Phát biểu sau đúng hay sai: “Giá trị ký quỹ nhỏ hơn giá trị danh nghĩa có thể làm lợi nhuận và thua lỗ tính trên vốn ký quỹ biến động mạnh.”

A. Đúng
B. Sai

**Đáp án:** A. **Giải thích:** Đây là tác động của đòn bẩy; tỷ lệ phơi nhiễm so với vốn ký quỹ cao làm cả lãi và lỗ tương đối lớn.

## Luyện thêm

```quiz
title: Luyện thêm
questions:
  - type: fill_blank
    prompt: "Payoff của call mua tại đáo hạn bằng max(S_T − K, ___)."
    blanks: [["0"]]
    explanation: "Nếu giá tài sản không vượt strike, payoff của call mua không âm và bằng 0."
  - type: ordering
    prompt: "Sắp xếp các bước tính lãi/lỗ ròng của người mua option tại đáo hạn."
    items: ["Xác định giá tài sản và strike", "Tính payoff theo call hoặc put", "Trừ premium đã trả", "Trừ chi phí giao dịch"]
  - type: matching
    prompt: "Ghép thuật ngữ với mô tả phù hợp."
    pairs:
      - { left: "Call", right: "Quyền mua theo strike" }
      - { left: "Put", right: "Quyền bán theo strike" }
      - { left: "Premium", right: "Giá người mua trả để có quyền chọn" }
```

## Bài học tiếp theo

[Where do I find good stock market tips](./17-where-do-i-find-good-stock-market-tips.md) — tiếp tục với cách đánh giá nguồn thông tin thị trường sau khi đã ôn phần phái sinh.
