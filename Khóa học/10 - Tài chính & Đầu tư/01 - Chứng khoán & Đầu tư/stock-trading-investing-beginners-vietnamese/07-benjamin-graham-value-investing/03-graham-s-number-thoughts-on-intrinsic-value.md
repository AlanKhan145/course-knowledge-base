---
id: stock-beginners-s07-l056
title: "Graham’s Number và suy nghĩ về giá trị nội tại (Graham's Number & Thoughts on Intrinsic Value)"
description: "Tính Graham’s Number từ EPS và giá trị sổ sách trên mỗi cổ phiếu, đồng thời hiểu các giả định và giới hạn của phép sàng lọc này."
order: 3
duration: 7
difficulty: beginner
language: vi
tags: [grahams-number, gia-tri-noi-tai, eps, gia-tri-so-sach]
objectives:
  - Xác định EPS và giá trị sổ sách trên mỗi cổ phiếu trong công thức Graham’s Number.
  - Tính Graham’s Number từ dữ liệu giả định.
  - Diễn giải kết quả như một mốc sàng lọc thay vì giá trị chính xác.
  - Nhận diện tình huống công thức kém phù hợp.
prerequisites:
  - Bài trước: [Tiêu chí định lượng của Benjamin Graham](./02-benjamin-graham-s-quantitative-criteria-for-stock-selection.md)
assessment: true
source: "Udemy 696616 — Graham's Number & Thoughts on Intrinsic Value"
---

# Graham’s Number và suy nghĩ về giá trị nội tại (Graham's Number & Thoughts on Intrinsic Value)

> [!SUMMARY] Một câu tóm tắt
> Graham’s Number kết hợp EPS và giá trị sổ sách trên mỗi cổ phiếu thành một mốc sàng lọc, nhưng kết quả phụ thuộc dữ liệu và không phải “giá trị thật” của doanh nghiệp.

## 1. Tổng quan

Sau khi tìm hiểu các tiêu chí định lượng kiểu Graham, bài này xem một công thức thường được gọi là Graham’s Number. Công thức kết hợp lợi nhuận trên mỗi cổ phiếu với giá trị sổ sách trên mỗi cổ phiếu để tạo một mốc định giá thận trọng theo giả định đơn giản. Đây là phép tính dễ học nhưng dễ bị dùng quá mức nếu bỏ qua chất lượng lợi nhuận và tài sản. Ta sẽ tính một ví dụ, kiểm tra độ nhạy và xác định khi nào công thức không phù hợp.

## 2. Mục tiêu học tập

- [ ] Nhận diện EPS và giá trị sổ sách trên mỗi cổ phiếu (BVPS).
- [ ] Tính Graham’s Number bằng công thức chuẩn thường được trích dẫn.
- [ ] Giải thích ý nghĩa của hệ số 22,5.
- [ ] Nêu giới hạn khi áp dụng cho doanh nghiệp thua lỗ, biến động hoặc giàu tài sản vô hình.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Tiêu chí định lượng của Benjamin Graham](./02-benjamin-graham-s-quantitative-criteria-for-stock-selection.md) — ôn lại EPS, giá trị sổ sách và sàng lọc định lượng.
- Khái niệm cần nhớ: EPS là lợi nhuận ròng phân bổ cho mỗi cổ phiếu; BVPS là vốn chủ sở hữu ghi nhận kế toán trên mỗi cổ phiếu.

## 4. Thử đoán trước

1. Nếu EPS giảm một nửa còn BVPS giữ nguyên, Graham’s Number thay đổi theo tỷ lệ nào?
2. Vì sao công thức có thể đánh giá kém một doanh nghiệp giá trị chủ yếu nằm ở phần mềm, thương hiệu hoặc mạng lưới khách hàng?

## 5. Kiến thức cốt lõi

### 5.1. Công thức và thành phần

Công thức Graham’s Number thường được viết:

$$
\text{Graham’s Number} = \sqrt{22.5 \times EPS \times BVPS}
$$

Trong đó EPS là lợi nhuận trên mỗi cổ phiếu và BVPS là giá trị sổ sách trên mỗi cổ phiếu. Hệ số 22,5 là tích của hai ngưỡng định giá lịch sử thường được nhắc tới trong cách diễn giải công thức: P/E 15 và P/B 1,5. Nó không phải hằng số tự nhiên hay chuẩn định giá áp dụng cho mọi thời kỳ.

### 5.2. Cách đọc kết quả

Kết quả là một mức tham chiếu toán học dựa trên EPS và BVPS được đưa vào. Nhà đầu tư có thể so giá thị trường với con số này như một bước sàng lọc, nhưng cần hỏi liệu EPS có bền vững không, tài sản có chất lượng không, và liệu cấu trúc doanh nghiệp có phù hợp với công thức không.

| Dữ kiện | Vai trò trong phép tính | Câu hỏi kiểm tra |
|---|---|---|
| EPS | Thể hiện lợi nhuận trên mỗi cổ phiếu | Có khoản bất thường hoặc biến động chu kỳ không? |
| BVPS | Thể hiện vốn chủ sở hữu ghi sổ trên mỗi cổ phiếu | Tài sản có khả năng thu hồi và tạo lợi nhuận không? |
| 22,5 | Hệ số kết hợp ngưỡng P/E và P/B lịch sử | Có lý do phù hợp để dùng mốc này trong bối cảnh hiện tại? |

### 5.3. Độ nhạy của công thức

Vì lấy căn bậc hai của tích EPS và BVPS, thay đổi một đầu vào sẽ làm kết quả thay đổi theo căn bậc hai của tỷ lệ đó, nếu đầu vào còn lại không đổi. Ví dụ, EPS giảm một nửa thì Graham’s Number nhân với $\sqrt{0,5}$, xấp xỉ 0,707 lần ban đầu, chứ không giảm đúng một nửa.

## 6. Giải thích chi tiết

Phép tính yêu cầu EPS và BVPS dương, có ý nghĩa. Nếu doanh nghiệp lỗ hoặc vốn chủ âm, công thức có thể không cho kết quả hữu ích. EPS một năm chịu ảnh hưởng của chu kỳ hoặc khoản một lần cũng có thể làm thay đổi đáng kể kết quả. BVPS dựa trên giá trị ghi sổ, nên không nhất thiết phản ánh giá trị kinh tế hiện tại của tài sản.

Doanh nghiệp công nghệ, dịch vụ hoặc thương hiệu mạnh có thể tạo giá trị từ tài sản vô hình khó thể hiện đầy đủ trên bảng cân đối. Ngược lại, doanh nghiệp có nhiều tài sản ghi sổ vẫn có thể hoạt động kém hiệu quả. Vì vậy, cần kết hợp với dòng tiền, chất lượng lợi nhuận, nợ, triển vọng và phương pháp định giá khác.

> [!WARNING] Không phải giá mua tối đa hay giá trị chắc chắn
> Graham’s Number là phép sàng lọc đơn giản. Không nên xem kết quả là giá trị nội tại chính xác hoặc dùng riêng nó để ra quyết định.

> [!TIP] Kiểm tra đầu vào trước khi bấm máy
> Xác định EPS thuộc kỳ nào, có pha loãng hay không và BVPS tính trên số cổ phiếu nào. Dùng dữ liệu sai kỳ có thể tạo kết quả sai dù phép toán đúng.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Một công ty có EPS 4 đơn vị tiền tệ và BVPS 20 đơn vị tiền tệ trên mỗi cổ phiếu.

1. Nhân EPS với BVPS: $4 \times 20=80$.
2. Nhân với hệ số: $22,5 \times 80=1.800$.
3. Lấy căn bậc hai: $\sqrt{1.800} \approx 42,43$.
4. Kết quả Graham’s Number xấp xỉ 42,43 đơn vị tiền tệ mỗi cổ phiếu. Đây chỉ là mốc sàng lọc theo đầu vào giả định, không khẳng định cổ phiếu đáng giá đúng mức đó.

## 8. Thực hành

**Bài tự làm:** Công ty giả định Y có EPS 3 và BVPS 12.

- [ ] Tính tích $22,5 \times EPS \times BVPS$.
- [ ] Lấy căn bậc hai, làm tròn hai chữ số.
- [ ] Nếu EPS giảm còn 1,5 và BVPS giữ nguyên, nêu vì sao kết quả mới không giảm đúng một nửa.
- [ ] Viết một dữ kiện cần kiểm tra trước khi sử dụng kết quả.

<details>
<summary>Xem lời giải sau khi đã tự làm</summary>

$22,5 \times 3 \times 12=810$; căn bậc hai của 810 xấp xỉ 28,46. Nếu EPS còn 1,5, tích đầu vào giảm một nửa nên căn bậc hai giảm theo hệ số $\sqrt{0,5}$, kết quả xấp xỉ 20,13, khoảng 70,7% mức trước. Cần kiểm tra EPS có bền vững không và BVPS có phản ánh tài sản hữu ích không.

</details>

## 9. Những lỗi thường gặp

- **Gọi kết quả là giá trị thật** — gọi đây là mốc sàng lọc và so sánh với nhiều phân tích khác.
- **Dùng EPS của một năm bất thường** — xem chuỗi nhiều năm và tách khoản không lặp lại.
- **Bỏ qua BVPS âm hoặc tài sản kém chất lượng** — kiểm tra bảng cân đối, thuyết minh và khả năng sinh lời trên vốn.
- **Áp dụng cho mọi ngành** — cân nhắc mức độ tài sản vô hình và mô hình kinh doanh.

## 10. Giải thích bằng lời của bạn

- Khái niệm: Graham’s Number kết hợp những dữ liệu nào?
- Vì sao: vì sao kết quả chỉ là mốc sàng lọc?
- Ví dụ của tôi: tự chọn EPS, BVPS dương và tính kết quả.
- Chỗ chưa chắc: đầu vào nào có thể không phản ánh đúng tình hình hiện tại?

## 11. Câu hỏi ôn tập

### Câu 1

Theo công thức thường được trích dẫn, Graham’s Number được tính như thế nào?

A. $EPS + BVPS$
B. $22,5 \times EPS \times BVPS$
C. $\sqrt{22,5 \times EPS \times BVPS}$
D. $\sqrt{EPS/BVPS}$

**Đáp án:** C. **Giải thích:** Công thức lấy căn bậc hai của tích 22,5, EPS và BVPS. B thiếu căn bậc hai; A và D không phải công thức này.

### Câu 2

EPS là 4 và BVPS là 20. Graham’s Number xấp xỉ bao nhiêu?

A. 24,00
B. 42,43
C. 80,00
D. 1.800,00

**Đáp án:** B. **Giải thích:** $\sqrt{22,5 \times 4 \times 20}=\sqrt{1.800}\approx42,43$. D là biểu thức dưới căn; C là $EPS \times BVPS$; A không đúng phép tính.

### Câu 3

Những trường hợp nào làm công thức kém hữu ích hoặc cần thận trọng hơn? (Chọn nhiều)

A. EPS âm hoặc rất biến động
B. BVPS âm
C. Doanh nghiệp có giá trị chủ yếu từ tài sản vô hình
D. EPS và BVPS đều dương, ổn định, đã được xác minh

**Đáp án:** A, B, C. **Giải thích:** Lỗ, vốn chủ âm, lợi nhuận thất thường hoặc tài sản vô hình làm đầu vào và giả định kém phù hợp; D vẫn cần phân tích nhưng ít gặp các vấn đề nêu trên.

### Câu 4

Hệ số 22,5 thường được diễn giải là tích của các ngưỡng P/E 15 và P/B 1,5.

A. Đúng
B. Sai

**Đáp án:** A. **Giải thích:** 15 nhân 1,5 bằng 22,5 trong cách giải thích lịch sử phổ biến; điều đó không biến các ngưỡng thành quy luật hiện hành.

## 12. Tóm tắt kiến thức

- Công thức thường dùng là $\sqrt{22,5 \times EPS \times BVPS}$.
- Hệ số 22,5 gắn với các ngưỡng lịch sử P/E 15 và P/B 1,5.
- Kết quả nhạy với đầu vào và chỉ là công cụ sàng lọc đơn giản.
- EPS bất thường, BVPS âm và tài sản vô hình lớn là các giới hạn cần lưu ý.

## 13. Tài liệu tham khảo

1. Benjamin Graham, *The Intelligent Investor* — nguyên tắc định giá thận trọng và biên an toàn.
2. Investopedia, mục “Graham Number” — công thức và cách diễn giải phổ biến.
3. SEC, Investor.gov — hướng dẫn xem xét báo cáo tài chính và thông tin công ty.

## 14. Bài học tiếp theo

[IEX Case Study using AI](../08-using-ai-to-understand-stock/01-iex-case-study-using-ai.md) — chuyển từ khung định giá cổ điển sang xem cách dùng AI để tìm hiểu một công ty cụ thể, đồng thời vẫn cần kiểm chứng thông tin.
