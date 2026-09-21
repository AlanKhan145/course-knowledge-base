# Glossary

| Ký hiệu / thuật ngữ | Ý nghĩa |
|---|---|
| `P` | Tập dữ liệu gồm `n` điểm/vector |
| `q` | Query point/vector |
| `D(p,q)` | Metric đo độ gần/relevance giữa hai điểm |
| `ρ(p,q)` | Metric đo diversity; có thể khác `D` |
| `k` | Số kết quả cuối cùng cần trả về |
| `k'` | Số phần tử tương tự/cùng màu tối đa được phép trong một nhóm cục bộ |
| `color` | Metadata rời rạc: seller, brand, document id, intent class... |
| colorful | Không có hai điểm cùng màu |
| k'-colorful | Mỗi màu xuất hiện không quá `k'` lần |
| `C-diverse` | Mọi cặp trong tập có khoảng cách diversity ít nhất `C` |
| `(k', C)-diverse` | Với mỗi điểm, có tối đa `k'` điểm của nghiệm nằm trong ball diversity bán kính `C` quanh nó |
| `B_D(p,r)` | Ball theo metric relevance `D` |
| `B_ρ(p,r)` | Ball theo metric diversity `ρ` |
| `d` | Doubling dimension của tập điểm |
| `Dmax` | Khoảng cách lớn nhất giữa hai điểm trong `P` |
| `Dmin` | Khoảng cách nhỏ nhất giữa hai điểm khác nhau trong `P` |
| `Δ=Dmax/Dmin` | Aspect ratio |
| `α` | Tham số pruning, `α>1` |
| `R` | Degree limit của graph trong DiskANN hoặc radius trong dual problem, tùy ngữ cảnh |
| `L` | Search-list / queue-size parameter trong implementation |
| `m` | Diversity parameter của heuristic DiversePrune |
| Recall@100 | Tỷ lệ phần tử đúng trong top-100 output so với top-100 diverse ground truth |
| latency | Thời gian trả lời query |
