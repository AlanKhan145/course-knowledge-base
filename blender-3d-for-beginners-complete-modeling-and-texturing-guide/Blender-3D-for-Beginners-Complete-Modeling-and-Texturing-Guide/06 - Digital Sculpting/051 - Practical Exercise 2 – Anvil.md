# 051 — Practical Exercise 2 – Anvil

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Practical Exercise 2 – Anvil |
| **Thời lượng** | 21:15 |
| **Chủ đề chính** | Sculpt một cái đe kim loại cũ kỹ, kết hợp hard-surface và sculpt |

## 1. Mục tiêu bài học

- Sculpt một vật thể có bản chất hard-surface nhưng cần cảm giác cũ kỹ, hao mòn tự nhiên.
- Kết hợp box-modeling/Boolean cho hình khối chính với sculpt cho chi tiết hao mòn.
- Luyện tập Scrape và Smooth để tạo bề mặt kim loại rèn thô ráp.

## 2. Nội dung chính

Cái đe (anvil) là bài tập đặc biệt vì đối tượng vốn là hard-surface (hình khối chính xác, góc cạnh rõ ràng) nhưng bề mặt thực tế lại đầy vết lõm, xước và hao mòn do rèn/sử dụng nhiều năm — đòi hỏi kết hợp cả hai tư duy modeling và sculpting. **Hình khối chính** (thân đe, mũi nhọn hình côn, lỗ vuông "hardy hole", đế) dựng trước bằng box modeling hoặc Boolean (kỹ thuật từ Module 04) để đảm bảo tỷ lệ và góc cạnh chính xác.

Sau khi có hình khối chính, chuyển sang **Sculpt Mode** (cần Remesh hoặc thêm Multiresolution để có đủ mật độ) để thêm chi tiết hao mòn: dùng **Clay Strips** với Strength thấp và brush nhỏ để tạo các vết lõm nhỏ rải rác không đều trên bề mặt trên cùng (nơi búa đập vào nhiều nhất), **Scrape** để giữ các mặt phẳng lớn không bị mất hình dạng góc cạnh trong khi vẫn thêm được độ gồ ghề nhỏ, và **Smooth** có kiểm soát ở các cạnh để mô phỏng cạnh kim loại bị mài mòn tự nhiên (không còn sắc bén hoàn hảo như lúc mới đúc).

Kỹ thuật quan trọng của bài này là **tính ngẫu nhiên có kiểm soát**: các vết lõm không nên đều đặn hay đối xứng (khác hẳn các bài sculpt nhân vật trước đó cần Symmetry) — nên **tắt Symmetry** khi thêm chi tiết hao mòn để có cảm giác tự nhiên, chỉ giữ hình khối tổng thể đối xứng từ bước box-modeling ban đầu.

## 3. Quy trình thực hành gợi ý

1. Box-model hoặc Boolean hình khối chính của đe: thân, mũi côn, lỗ vuông, đế.
2. Chuyển sang Sculpt Mode, Voxel Remesh hoặc thêm Multiresolution để tăng mật độ.
3. Tắt Symmetry, dùng Clay Strips (Strength thấp, Radius nhỏ) rải các vết lõm ngẫu nhiên trên mặt trên.
4. Dùng Scrape để giữ các mặt bên phẳng trong khi thêm độ gồ ghề nhẹ.
5. Dùng Smooth nhẹ ở các cạnh để mô phỏng độ mòn tự nhiên, tránh cạnh sắc 100% như vừa đúc.
6. Kiểm tra tổng thể: hình khối vẫn phải rõ ràng là một cái đe dù có nhiều chi tiết hao mòn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Boolean Modifier (hình khối chính) | Modifier Properties > Add Modifier > Generate > Boolean |
| Voxel Remesh | `R` |
| Tắt Symmetry | Panel Symmetry, bỏ tick trục |
| Giảm Strength brush | `Shift + F` + di chuột |

## 5. Lưu ý & lỗi thường gặp

- Giữ Symmetry bật khi sculpt vết hao mòn khiến các vết lõm xuất hiện đối xứng hoàn hảo — trông giả tạo, phản tác dụng với mục tiêu "cũ kỹ tự nhiên".
- Sculpt chi tiết hao mòn quá mạnh tay có thể phá vỡ hoàn toàn hình khối góc cạnh chính xác đã dựng ở bước box-modeling.
- Dùng cùng một kích thước brush cho mọi vết lõm khiến bề mặt trông đơn điệu — nên thay đổi Radius ngẫu nhiên giữa các lần sculpt.
- Quên rằng đế và các mặt đáy ít bị hao mòn hơn mặt trên (nơi tiếp xúc búa) — phân bố chi tiết hao mòn không đều theo logic sử dụng thực tế sẽ thuyết phục hơn.

## 6. Checklist thực hành

- [ ] Đã dựng hình khối chính chính xác bằng box-modeling/Boolean.
- [ ] Đã tắt Symmetry khi thêm chi tiết hao mòn.
- [ ] Đã tạo được các vết lõm ngẫu nhiên tập trung ở mặt trên.
- [ ] Đã giữ được hình khối tổng thể rõ ràng dù có chi tiết hao mòn dày đặc.

## 7. Tóm tắt

Cái đe là bài tập độc đáo dạy cách kết hợp độ chính xác của hard-surface modeling với tính ngẫu nhiên có chủ đích của sculpting — kỹ năng "làm cũ" bề mặt này sẽ tái xuất hiện khi tạo vật liệu mài mòn ở Module 07.
