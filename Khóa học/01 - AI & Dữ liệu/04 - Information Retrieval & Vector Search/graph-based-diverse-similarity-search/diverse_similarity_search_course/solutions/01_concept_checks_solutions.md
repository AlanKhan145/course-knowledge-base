# Solution 01 — Concept Checks

1. ANN cho phép nghiệm xấp xỉ để giảm chi phí search.
2. Vì nhiều vector gần nhau có thể trùng document/seller/brand/intent, gây redundancy.
3. Seller, brand, document id, source id, intent class…
4. Colorful: mỗi color tối đa 1; k'-colorful: mỗi color tối đa `k'`.
5. `D` đo relevance/closeness tới query; `ρ` đo diversity giữa output points.
6. `Δ=Dmax/Dmin`.
7. Nó bound số local region/ball cần cover ở mỗi distance scale, từ đó bound degree.
8. Tối đa `k` trong colorful case vì output chỉ cần `k` màu khác nhau.
9. Phần tử xa query nhất.
10. Primal cố định diversity threshold và tối ưu closeness; dual cố định radius relevance và tối đa diversity.
11. Chỉ giữ item mới nếu nó tốt hơn item xa nhất cùng color, sau đó vẫn enforce queue size `L`.
12. Cần nhiều color blocker hơn trước khi prune, nên graph thường giữ connectivity đa dạng hơn.
13. Vì edge tới color hiếm có thể đã bị standard geometric pruning xóa từ lúc build.
14. Diverse ground truth với cùng `k'` constraint.
15. Standard+post-processing; standard+diverse search; diverse build+diverse search.
