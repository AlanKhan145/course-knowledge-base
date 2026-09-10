# Bài 05 — PGLS, phylogenetic ANOVA và PCA

- **Module:** 02. Thiết kế nghiên cứu
- **Loại:** Lesson phân tích dữ liệu
- **Nguồn chính:** Materials and Methods 2.3

## Mục tiêu học tập

Hiểu logic của ba lớp phân tích được dùng để tách ảnh hưởng của hành vi, hình dạng và lịch sử tiến hóa.

## 1. Vì sao cần đưa phylogeny vào phân tích?

Các loài cá không phải là những điểm dữ liệu hoàn toàn độc lập về mặt tiến hóa. Những loài họ hàng gần có thể giống nhau do thừa hưởng đặc điểm từ tổ tiên chung. Nghiên cứu vì vậy dùng một phylogeny đã hiệu chuẩn thời gian và áp dụng các phép phân tích có xét quan hệ phát sinh chủng loại.

## 2. PGLS

**Phylogenetic Generalized Least Squares** được dùng để kiểm tra:

- tương quan giữa các biến hành vi;
- quan hệ giữa từng biến hình thái và từng biến hành vi;
- quan hệ giữa các trục PCA hình thái và hành vi.

## 3. Phylogenetic ANOVA

Phép kiểm này được dùng để hỏi một câu khác: **nhóm BCF và nhóm MPF có khác nhau về các biến hành vi hay không?**

## 4. PCA hình dạng cơ thể

Tám biến hình thái được đưa vào **Principal Component Analysis** để mô tả nhiều trục hình dạng bằng một số ít thành phần chính.

Trong dữ liệu nghiên cứu:

- **PC1 giải thích 45%** biến thiên hình dạng;
- **PC2 giải thích 19%**.

PC1 chủ yếu liên quan đến CS, BE và HD; PC2 chủ yếu phản ánh hình dạng cuống đuôi qua CD và CW.

## 5. Tư duy phân tích

Có ba câu hỏi tách biệt:

1. Các hành vi có trade-off như mô hình cổ điển không?
2. Các trục hình dạng có dự đoán hành vi không?
3. BCF và MPF có tạo ra hai hồ sơ hành vi khác nhau không?

Việc tách ba câu hỏi này giúp tránh nhầm lẫn giữa “tương quan hành vi”, “ảnh hưởng hình thái” và “khác biệt giữa cơ chế đẩy”.

## Bài tập

Vẽ một sơ đồ pipeline:

`Video → biến hành vi → size correction → phylogeny → PGLS/ANOVA → PCA → diễn giải`.
