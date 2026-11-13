---
id: stock-beginners-s02-l015
title: "Chỉ số chứng khoán (Stock Index)"
description: "Giải thích cách chỉ số chọn thành phần, gán trọng số và dùng làm thước đo thị trường hoặc benchmark."
order: 4
duration: 6
difficulty: beginner
language: vi
tags: [chi-so-chung-khoan, von-hoa, benchmark, thi-truong]
objectives:
  - Giải thích chỉ số chứng khoán đại diện cho một rổ tài sản.
  - Phân biệt chỉ số price-weighted, market-cap-weighted và equal-weighted.
  - Tính vốn hóa và tỷ trọng đơn giản từ dữ liệu giả định.
  - Đánh giá mức độ phù hợp của chỉ số khi làm chuẩn so sánh.
prerequisites:
  - "[Chứng khoán](03-securities.md)"
assessment: true
source: "Udemy 696616 — Stock Index"
---

# Chỉ số chứng khoán (Stock Index)

> [!SUMMARY] Một câu tóm tắt
> Chỉ số chứng khoán tóm tắt biến động của một rổ chứng khoán theo quy tắc chọn thành phần và tính trọng số cụ thể.

## 1. Tổng quan

Sau khi phân biệt các loại chứng khoán, bài này xem cách một nhóm tài sản được tổng hợp thành chỉ số. Chỉ số như S&P 500, Nifty 50 hay VN-Index thường được dùng để theo dõi một phân khúc thị trường, nhưng mỗi chỉ số có phương pháp riêng. Hiểu cách gán trọng số giúp giải thích vì sao chỉ số tăng không có nghĩa mọi cổ phiếu đều tăng. Bài kết thúc module và chuẩn bị cho quiz về sở giao dịch, trung gian, chứng khoán và chỉ số.

## 2. Mục tiêu học tập

- [ ] Mô tả được chỉ số và phạm vi đại diện của nó.
- [ ] So sánh được ba cách gán trọng số phổ biến.
- [ ] Tính được vốn hóa và trọng số theo vốn hóa.
- [ ] Nêu được các điểm cần kiểm tra trước khi dùng benchmark.

## 3. Kiến thức cần chuẩn bị

- Bài trước: [Chứng khoán](03-securities.md) — chỉ số thường theo dõi một nhóm cổ phiếu hoặc tài sản thuộc một phân khúc xác định.
- Nhớ công thức vốn hóa: giá cổ phiếu nhân số cổ phiếu lưu hành.

## 4. Thử đoán trước

1. Nếu cổ phiếu giá cao tăng mạnh, chỉ số nào có thể bị ảnh hưởng nhiều dù doanh nghiệp không lớn nhất?
2. Một chỉ số tăng có chứng minh rằng phần lớn cổ phiếu trên thị trường đều tăng không?

## 5. Kiến thức cốt lõi

### 5.1. Chỉ số là một rổ theo quy tắc

*Stock index* (chỉ số chứng khoán) tổng hợp biến động giá hoặc lợi suất của một nhóm chứng khoán được chọn. Nhà cung cấp chỉ số xác định thành phần, tiêu chí thêm/bớt và cách gán trọng số. Vì vậy chỉ số là một thước đo có phương pháp, không phải toàn bộ thị trường trong mọi trường hợp.

### 5.2. Ba phương pháp trọng số

| Phương pháp | Cơ sở trọng số | Điều gì có ảnh hưởng lớn? |
|---|---|---|
| *Price-weighted* | Giá mỗi cổ phiếu | Cổ phiếu có giá danh nghĩa cao |
| *Market-cap-weighted* | Vốn hóa thị trường | Doanh nghiệp có vốn hóa lớn |
| *Equal-weighted* | Phân bổ đều | Mỗi thành phần có trọng số ngang nhau |

Vốn hóa thị trường (*market capitalization*) được tính như sau:

$$
\text{Vốn hóa} = \text{Giá cổ phiếu} \times \text{Số cổ phiếu lưu hành}
$$

Với chỉ số gia quyền theo vốn hóa, trọng số của công ty $i$ là:

$$
w_i = \frac{MC_i}{\sum_{j=1}^{n} MC_j}
$$

### 5.3. Chỉ số làm thước đo và benchmark

*Benchmark* là chuẩn tham chiếu để so sánh danh mục hoặc quỹ. Chọn benchmark cần phù hợp với mục tiêu, thị trường và loại tài sản của danh mục. Cũng cần kiểm tra chỉ số tính biến động giá (*price return*) hay bao gồm cổ tức theo phương pháp tổng lợi suất (*total return*).

## 6. Giải thích chi tiết

Chỉ số price-weighted có thể bị chi phối bởi cổ phiếu giá cao dù vốn hóa doanh nghiệp nhỏ hơn. Chỉ số market-cap-weighted phản ánh quy mô vốn hóa, nhưng một vài công ty khổng lồ có thể chi phối kết quả. Equal-weighted cho mỗi công ty trọng số ngang nhau, song cần tái cân bằng để duy trì trọng số và có thể khác xa cấu trúc vốn hóa thị trường.

Chỉ số thường được dùng để quan sát xu hướng, so sánh hiệu suất hoặc làm cơ sở cho một số sản phẩm đầu tư. Tuy vậy, nó không phải danh mục mà mọi người nắm giữ giống nhau và cũng không chứng minh một chiến lược cụ thể sẽ thành công.

> [!TIP] Cách đọc chỉ số
> Hỏi ba điều: rổ gồm những gì, trọng số tính ra sao, và lợi suất có bao gồm cổ tức không.

> [!WARNING] Giới hạn
> Chỉ số tăng có thể do một số thành phần lớn tăng trong khi nhiều cổ phiếu khác giảm. Không suy ra mức sinh lời của danh mục cá nhân chỉ từ biến động chỉ số.

## 7. Ví dụ minh họa

**Ví dụ giả định:** Chỉ số gồm công ty A có giá 20 đồng và 1.000.000 cổ phiếu; công ty B có giá 100 đồng và 100.000 cổ phiếu.

1. Vốn hóa A là $20 \times 1.000.000 = 20.000.000$ đồng.
2. Vốn hóa B là $100 \times 100.000 = 10.000.000$ đồng.
3. Tổng vốn hóa bằng 30.000.000 đồng; trọng số A là $20/30 = 66{,}67\%$, B là $10/30 = 33{,}33\%$.
4. Dù giá mỗi cổ phiếu B cao gấp năm lần, A có trọng số lớn hơn trong chỉ số gia quyền theo vốn hóa vì vốn hóa A gấp đôi.

Trong chỉ số equal-weighted chỉ có hai mã, mỗi mã ban đầu có trọng số 50%. Trong price-weighted, B sẽ có ảnh hưởng lớn hơn do giá đơn vị cao hơn.

## 8. Thực hành

**Bài tự làm:** Một chỉ số giả định có X (giá 12, số cổ phiếu 500.000) và Y (giá 60, số cổ phiếu 50.000).

- [ ] Tính vốn hóa của từng công ty.
- [ ] Tính tổng vốn hóa và tỷ trọng của X, Y.
- [ ] Tính trọng số mỗi mã nếu chỉ số equal-weighted.
- [ ] Nêu phương pháp nào đặt trọng số cao hơn cho cổ phiếu có giá đơn vị cao.

<details><summary>Xem lời giải sau khi đã tự làm</summary>

Vốn hóa X là $12 \times 500.000 = 6.000.000$; vốn hóa Y là $60 \times 50.000 = 3.000.000$. Tổng bằng 9.000.000. Trọng số theo vốn hóa: X là $6/9 = 66{,}67\%$, Y là $3/9 = 33{,}33\%$. Equal-weighted cho mỗi mã 50%. Price-weighted nhạy hơn với giá mỗi cổ phiếu, vì vậy Y có ảnh hưởng lớn hơn theo tiêu chí đó.

</details>

## 9. Những lỗi thường gặp

- **Nghĩ giá cổ phiếu cao đồng nghĩa doanh nghiệp lớn** — tính vốn hóa bằng giá nhân số cổ phiếu.
- **Cho rằng chỉ số tăng thì mọi cổ phiếu đều tăng** — xem thành phần và trọng số.
- **So danh mục với benchmark bất kỳ** — chọn chuẩn cùng thị trường và mục tiêu.
- **Bỏ qua cổ tức** — kiểm tra price return hay total return trước khi so sánh.

## 10. Giải thích bằng lời của bạn

- Khái niệm: Một chỉ số được tạo từ những quyết định nào?
- Vì sao: Vì sao giá cổ phiếu không đủ để đo quy mô công ty?
- Ví dụ của tôi: Tự tạo rổ hai công ty và tính trọng số.
- Chỗ chưa chắc: Phương pháp trọng số nào bạn thấy khó diễn giải nhất?

## 11. Câu hỏi ôn tập

### Câu 1

Một chỉ số market-cap-weighted thường gán trọng số lớn hơn cho công ty nào?

A. Công ty có nhiều cổ đông cá nhân nhất.  
B. Công ty có giá mỗi cổ phiếu cao nhất trong mọi trường hợp.  
C. Công ty có vốn hóa thị trường lớn hơn.  
D. Công ty có mức biến động thấp nhất.

**Đáp án:** C. **Giải thích:** Trọng số dựa trên vốn hóa, không chỉ giá mỗi cổ phiếu, số cổ đông hay độ biến động.

### Câu 2

Một công ty có giá cổ phiếu 25 đồng và 2 triệu cổ phiếu lưu hành. Vốn hóa là bao nhiêu?

A. 50 triệu đồng.  
B. 2,025 triệu đồng.  
C. 80 nghìn đồng.  
D. 500 nghìn đồng.

**Đáp án:** A. **Giải thích:** $25 \times 2.000.000 = 50.000.000$ đồng. Các lựa chọn khác không phải tích giá và số cổ phiếu.

### Câu 3

Những phát biểu nào đúng? (Chọn nhiều)

A. Equal-weighted index gán trọng số bằng nhau cho mọi thành phần tại thời điểm cân bằng.  
B. Chỉ số tăng chứng minh mọi cổ phiếu thành phần đều tăng.  
C. Chỉ số market-cap-weighted có thể chịu ảnh hưởng đáng kể từ vài công ty rất lớn.  
D. Giá cổ phiếu đơn lẻ luôn phản ánh chính xác quy mô doanh nghiệp.

**Đáp án:** A, C. **Giải thích:** Equal-weighting phân bổ ngang nhau; vốn hóa lớn có thể chi phối chỉ số vốn hóa. Chỉ số tổng hợp không đòi hỏi mọi mã cùng tăng; giá đơn lẻ bỏ qua số cổ phiếu.

### Câu 4

Phát biểu sau đúng hay sai: “Trước khi so danh mục với chỉ số, nên kiểm tra thành phần, phương pháp trọng số và cách tính lợi suất.”

A. Đúng  
B. Sai

**Đáp án:** A. **Giải thích:** Các đặc điểm đó quyết định chỉ số đại diện cho điều gì và phép so sánh có phù hợp không.

## 12. Tóm tắt kiến thức

- Chỉ số tóm tắt biến động của một rổ chứng khoán theo quy tắc cụ thể.
- Price-weighted, market-cap-weighted và equal-weighted phản ánh các cách nhìn khác nhau.
- Vốn hóa bằng giá nhân số cổ phiếu; trọng số vốn hóa là tỷ lệ trên tổng vốn hóa.
- Benchmark phải phù hợp và cần phân biệt lợi suất giá với lợi suất gồm cổ tức.

## 13. Tài liệu tham khảo

1. S&P Dow Jones Indices, *S&P U.S. Indices Methodology*.
2. MSCI, tài liệu công khai về phương pháp xây dựng chỉ số cổ phiếu.
3. Investopedia, mục từ *Stock Index* và *Market Capitalization*.

## 14. Bài học tiếp theo

[Quiz: Kiểm tra kiến thức về sở giao dịch (Stock Exchange Quiz)](05-quiz-stock-exchange-quiz.md) — quiz giúp ôn lại vai trò sàn, trung gian, các loại chứng khoán và cách đọc chỉ số.
