---
id: stock-beginners-s03-l025
title: "Nên đầu tư bao nhiêu tiền vào một cổ phiếu cụ thể? (How much money should you invest in a particular stock)"
description: "Tính quy mô vị thế từ ngân sách rủi ro và khoảng cách đến mức dừng, đồng thời nhận diện giới hạn của phép tính."
order: 11
duration: 4
difficulty: beginner
language: vi
tags: [quy-mo-vi-the, stop-loss, quan-tri-rui-ro, co-phieu]
objectives:
  - Tính mức lỗ dự kiến trên mỗi cổ phiếu theo điểm vào và mức dừng.
  - Tính số lượng tham khảo từ ngân sách rủi ro.
  - Điều chỉnh kết quả theo phí, bước giá và khả năng khớp.
  - Nêu vì sao stop không bảo đảm mức giá thoát chính xác.
prerequisites:
  - Bài trước: [Đầu tư bao nhiêu tiền vào thị trường chứng khoán](./10-how-much-money-should-you-invest-in-the-stock-market.md)
assessment: true
source: "Udemy 696616 — How much money should you invest in a particular stock"
---

# Nên đầu tư bao nhiêu tiền vào một cổ phiếu cụ thể? (How much money should you invest in a particular stock)

> [!SUMMARY] Một câu tóm tắt
> Quy mô vị thế có thể ước tính bằng ngân sách rủi ro chia cho mức lỗ dự kiến trên mỗi cổ phiếu, nhưng cần điều chỉnh cho chi phí và rủi ro khớp lệnh.

## 1. Tổng quan

Bài trước xem xét vốn dành cho toàn thị trường; ở đây ta tập trung vào một vị thế riêng lẻ. Cách tính có kỷ luật bắt đầu từ số tiền tối đa sẵn lòng mất nếu luận điểm sai, thay vì chọn số cổ phiếu tùy hứng. Mức dừng lỗ giúp định nghĩa kịch bản thoát, nhưng không bảo đảm giá thoát nếu thị trường biến động nhanh. Đây là công cụ giáo dục để kiểm tra quy mô, không phải quy tắc đầu tư phổ quát.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

- [ ] Tính khoảng cách từ giá vào đến mức dừng trên mỗi cổ phiếu.
- [ ] Tính số lượng tham khảo theo ngân sách rủi ro.
- [ ] Tính giá trị vị thế và đối chiếu tỷ trọng danh mục.
- [ ] Giải thích ít nhất hai giới hạn của công thức.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Đầu tư bao nhiêu tiền vào thị trường chứng khoán](./10-how-much-money-should-you-invest-in-the-stock-market.md) — hiểu vốn tổng thể và khả năng chịu lỗ.
- Stop loss là lệnh hoặc mức kích hoạt kế hoạch thoát; giá thực thi có thể khác mức dự kiến.

## 4. Thử đoán trước

1. Cùng ngân sách rủi ro, khoảng cách đến stop rộng hơn thì số lượng tính được thay đổi thế nào?
2. Vì sao kết quả công thức có thể cần giảm trước khi đặt lệnh?

## 5. Kiến thức cốt lõi

### 5.1. Công thức quy mô vị thế

$$
	ext{Số lượng tham khảo} = rac{	ext{Ngân sách rủi ro}}{	ext{Giá vào} - 	ext{Giá dừng trên mỗi cổ phiếu}}
$$

Với vị thế mua, mẫu số là khoảng cách từ giá vào đến mức dừng. Nếu chênh lệch tính bằng đồng/cổ phiếu và ngân sách bằng đồng, kết quả là số cổ phiếu. Làm tròn xuống đơn vị giao dịch được và kiểm tra giá trị vị thế.

### 5.2. Chuỗi quyết định

```mermaid
flowchart LR
    A[Chọn ngân sách rủi ro] --> B[Xác định điểm vào và mức dừng]
    B --> C[Tính mức lỗ mỗi cổ phiếu]
    C --> D[Tính số lượng tham khảo]
    D --> E[Kiểm tra giá trị vị thế và chi phí]
    E --> F[Giảm quy mô nếu vượt giới hạn]
```

### 5.3. Ngân sách rủi ro không phải số tiền đầu tư

Ngân sách rủi ro là khoản lỗ dự kiến cho ý tưởng nếu giá chạm mức dừng theo giả định. Giá trị vị thế là số cổ phiếu nhân giá mua. Ví dụ vị thế 20 triệu có thể có ngân sách rủi ro 1 triệu nếu khoảng cách giá tương ứng. Rủi ro thực tế có thể vượt mức dự kiến.

## 6. Giải thích chi tiết

Công thức chỉ hữu ích khi mức dừng được chọn có lý do. Nếu dừng quá gần chỉ để mua nhiều cổ phiếu hơn, biến động thông thường có thể kích hoạt lệnh; nếu dừng xa, quy mô nhỏ hơn hoặc mức lỗ mỗi cổ phiếu tăng. Giá có thể nhảy qua mức dừng, lệnh khớp kém hơn và phí làm tăng tổn thất.

Cũng cần tính tương quan: nhiều mã khác nhau có thể cùng giảm khi thị trường hoặc ngành gặp cú sốc. Do đó, ngân sách từng vị thế phải được xem cùng rủi ro danh mục, thanh khoản, quy định giao dịch và khả năng tài chính.

> [!WARNING] Cảnh báo
> Stop loss không đảm bảo giá thực hiện. Khi có gap hoặc thanh khoản thấp, khoản lỗ có thể lớn hơn phép tính; số lượng lý thuyết không phải cam kết về mức lỗ tối đa.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Tài khoản có 100 triệu đồng. Nhà đầu tư đặt ngân sách rủi ro 500.000 đồng; giá vào 50.000 đồng/cổ phiếu và mức dừng 48.000 đồng.

1. Lỗ dự kiến mỗi cổ phiếu: $50.000-48.000=2.000$ đồng.
2. Số lượng tham khảo: $500.000/2.000=250$ cổ phiếu.
3. Giá trị mua ban đầu: $250 	imes 50.000=12.500.000$ đồng. Nếu giá dừng thực hiện đúng giả định, lỗ là 500.000 đồng trước phí và trượt giá.
4. Kiểm tra tỷ trọng 12,5% tài khoản, thanh khoản và tính hợp lý của mức dừng.

## 8. Thực hành

**Bài tự làm:** Ngân sách rủi ro 360.000 đồng, giá vào 30.000 đồng và mức dừng 28.500 đồng.

- [ ] Tính lỗ dự kiến trên mỗi cổ phiếu.
- [ ] Tính số cổ phiếu tham khảo.
- [ ] Tính giá trị vị thế ban đầu.

<details>
<summary>Xem lời giải sau khi đã tự làm</summary>

Mức lỗ mỗi cổ phiếu là $30.000-28.500=1.500$ đồng. Số lượng là $360.000/1.500=240$ cổ phiếu. Giá trị ban đầu là $240 	imes 30.000=7.200.000$ đồng. Chưa gồm phí, thuế và trượt giá nên số lượng thực tế có thể cần thấp hơn.

</details>

## 9. Những lỗi thường gặp

- **Chọn số lượng trước ngân sách rủi ro** — xác định giới hạn trước rồi mới tính.
- **Coi stop là giá thoát chắc chắn** — tính kịch bản gap và trượt giá.
- **Quên phí và bước giao dịch** — hiệu chỉnh theo quy định và chi phí thực tế.
- **Chỉ xem rủi ro từng mã** — cộng rủi ro các vị thế tương quan trong danh mục.

## 10. Giải thích bằng lời của bạn

- Khái niệm: Ngân sách rủi ro và giá trị vị thế khác nhau thế nào?
- Vì sao: Vì sao khoảng cách đến stop ảnh hưởng số lượng?
- Ví dụ của tôi: Tạo bộ số giả định và tính quy mô vị thế.
- Chỗ chưa chắc: Chi phí hoặc khớp lệnh nào có thể làm phép tính lệch?

## 11. Câu hỏi ôn tập

### Câu 1

Ngân sách rủi ro 400.000 đồng, giá vào 24.000 đồng và mức dừng 22.000 đồng. Số lượng tham khảo là bao nhiêu?

A. 100 cổ phiếu  
B. 200 cổ phiếu  
C. 400 cổ phiếu  
D. 800 cổ phiếu

**Đáp án:** B. **Giải thích:** Lỗ mỗi cổ phiếu là 2.000 đồng; $400.000/2.000=200$. A tính thiếu; C và D chia sai.

### Câu 2

Nếu ngân sách rủi ro giữ nguyên nhưng khoảng cách đến mức dừng tăng, số lượng tham khảo sẽ thế nào?

A. Tăng cùng tỷ lệ  
B. Không đổi  
C. Giảm  
D. Luôn bằng ngân sách rủi ro

**Đáp án:** C. **Giải thích:** Mẫu số lớn hơn làm thương nhỏ hơn. A đảo chiều; B bỏ qua thay đổi; D nhầm tiền với số cổ phiếu.

### Câu 3

Yếu tố nào cần tính khi chuyển kết quả công thức thành lệnh thực tế? (Chọn nhiều.)

A. Phí và thuế liên quan  
B. Trượt giá hoặc gap qua mức dừng  
C. Thanh khoản và quy cách giao dịch  
D. Giả định mọi lệnh khớp đúng giá dừng

**Đáp án:** A, B, C. **Giải thích:** A, B, C ảnh hưởng chi phí hoặc khả năng thực hiện. D sai vì mức dừng không bảo đảm giá khớp.

### Câu 4

Phát biểu sau đúng hay sai: “Số lượng tính theo ngân sách rủi ro là mức lỗ tối đa được bảo đảm.”

A. Đúng  
B. Sai

**Đáp án:** B. **Giải thích:** Công thức dựa trên giá dừng giả định; gap và phí có thể làm lỗ lớn hơn.

## 12. Tóm tắt kiến thức

- Quy mô có thể ước tính bằng ngân sách rủi ro chia cho khoảng cách giá vào đến stop.
- Giá trị vị thế khác khoản lỗ dự kiến theo mức dừng.
- Phí, thanh khoản, bước giao dịch và trượt giá làm kết quả thực tế khác phép tính.
- Xem từng vị thế cùng rủi ro tổng danh mục và khả năng tài chính.

## 13. Tài liệu tham khảo

1. Investor.gov — tài liệu giáo dục về lệnh giao dịch và rủi ro đầu tư.
2. CFA Institute — tài liệu về quản trị rủi ro và quy mô vị thế.
3. Ủy ban Chứng khoán Nhà nước Việt Nam — thông tin dành cho nhà đầu tư chứng khoán.

## 14. Bài học tiếp theo

[Quiz giao dịch chứng khoán 2](./12-quiz-stock-market-trading-quiz-2.md) — kiểm tra tổng hợp thực thi lệnh, broker và quy mô vốn.
