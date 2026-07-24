# 094 — Details Lvl 1

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Details Lvl 1 |
| **Thời lượng** | 16:41 |
| **Chủ đề chính** | Thêm lớp chi tiết đầu tiên |

## 1. Mục tiêu bài học

- Chuyển từ giai đoạn khối lớn (base shape) sang lớp chi tiết trung bình: mũi, miệng, má, cằm, nếp nhăn chính.
- Tăng mật độ mesh (subdivide Multiresolution hoặc bật Dyntopo) để đủ độ phân giải cho chi tiết.
- Luyện tập phối hợp nhiều brush trong cùng một vùng để đạt hình khối tự nhiên hơn.

## 2. Nội dung chính

Sau khi silhouette và các đặc điểm chính (mắt, tai) đã được định vị, bước "Details Level 1" tập trung vào các khối trung gian — chưa phải chi tiết bề mặt siêu nhỏ (như lỗ chân lông, nếp da mịn) mà là các khối hình chức năng: mũi, miệng, gò má, cằm, đường viền hàm rõ nét hơn.

Ở giai đoạn này cần tăng độ phân giải mesh trước khi thêm chi tiết:

- Với **Multiresolution**: vào panel Modifier, nhấn Subdivide thêm 1-2 cấp nữa.
- Với **Dyntopo**: bật trong header Sculpt Mode, thiết lập Detail Size phù hợp (thường 8-12px cho chi tiết trung bình), Dyntopo sẽ tự động tạo thêm tam giác dưới đầu brush khi cần.

Các brush thường dùng ở bước này:

- **Draw**: đắp hoặc khoét khối cơ bản (mũi, miệng) theo cường độ vừa phải.
- **Clay Strips**: tạo các mảng khối phẳng có cạnh (gò má, quai hàm).
- **Crease**: nhấn sâu các đường phân khối (rãnh mũi-miệng, khóe miệng).
- **Inflate**: làm phồng nhẹ các vùng như má, môi để trông đầy đặn hơn.
- **Flatten/Contrast**: làm phẳng các mảng bề mặt lớn để tạo cạnh rõ ràng hơn giữa các khối, phù hợp phong cách cartoon "khối hóa" (chunky).
- **Smooth**: cân bằng liên tục sau mỗi thao tác lớn.

Mũi cartoon thường được đơn giản hóa: một khối tròn/nêm nhô nhẹ, hai lỗ mũi gợi ý bằng Crease chứ không cần chi tiết giải phẫu đầy đủ. Miệng có thể chỉ là một đường Crease cong nhẹ kèm khối môi trên/dưới đắp bằng Clay Strips.

## 3. Quy trình thực hành gợi ý

1. Tăng độ phân giải mesh (Subdivide Multiresolution hoặc bật Dyntopo với Detail Size phù hợp).
2. Dùng Draw/Clay Strips đắp khối mũi ở vị trí trung tâm khuôn mặt, dưới hai mắt.
3. Dùng Crease tạo rãnh mũi-miệng và đường viền môi.
4. Đắp khối môi trên/dưới bằng Clay Strips, giữ tỷ lệ cách điệu (có thể phóng đại).
5. Tạo gò má, quai hàm bằng Clay Strips/Flatten để có cạnh khối rõ.
6. Smooth toàn bộ sau mỗi cụm chi tiết để tránh bề mặt gồ ghề rời rạc.
7. So sánh liên tục với ảnh tham chiếu đã chuẩn bị ở bài 093.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush | Chức năng |
|---|---|
| Brush **Draw** | Đắp/khoét khối cơ bản theo cường độ |
| Brush **Clay Strips** | Tạo mảng khối phẳng có cạnh |
| Brush **Crease** | Nhấn sâu đường phân khối (rãnh mũi-miệng, khóe miệng) |
| Brush **Flatten/Contrast** | Làm phẳng mảng bề mặt, tạo cạnh khối rõ |
| Brush **Inflate/Deflate** | Phồng/hóp khối (`Ctrl` đảo chiều) |
| `Shift` (giữ) | Smooth tạm thời |
| Dyntopo — `Ctrl+D` hoặc nút trong header | Bật/tắt Dynamic Topology |
| `X` | Symmetry |

## 5. Lưu ý & lỗi thường gặp

- Thêm chi tiết khi mật độ mesh chưa đủ khiến brush tạo ra các cạnh gãy/lởm chởm.
- Dùng Dyntopo với Detail Size quá nhỏ làm mesh phình to số lượng tam giác, gây chậm máy.
- Chi tiết hóa một vùng quá kỹ trong khi các vùng khác còn thô, làm mất cân bằng tổng thể.
- Quên so sánh với silhouette ban đầu, khiến hình dạng tổng thể bị "trôi" qua nhiều lớp chi tiết.

## 6. Checklist thực hành

- [ ] Đã tăng độ phân giải mesh trước khi thêm chi tiết (Multiresolution hoặc Dyntopo).
- [ ] Đã đắp khối mũi và miệng cách điệu.
- [ ] Đã tạo gò má, quai hàm bằng Clay Strips/Flatten.
- [ ] Đã dùng Crease cho các đường phân khối chính.
- [ ] Đã Smooth cân bằng và so sánh với silhouette tổng thể.

## 7. Tóm tắt

Bài học hướng dẫn thêm lớp chi tiết đầu tiên cho đầu nhân vật — mũi, miệng, gò má, cằm — bằng cách tăng độ phân giải mesh và phối hợp các brush Draw, Clay Strips, Crease, Flatten, luôn giữ nguyên tắc cân bằng tổng thể trước khi đi sâu hơn.
