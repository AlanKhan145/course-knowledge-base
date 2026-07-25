# 065 — Body Refinement

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Body Refinement |
| **Thời lượng** | 9:20 |
| **Chủ đề chính** | Sculpt chi tiết giải phẫu ếch sau khi đã chốt trang phục |

## 1. Mục tiêu bài học

- Tinh chỉnh chi tiết cơ thể ếch tại các vùng da hở (mặt, tay, chân, bụng).
- Áp dụng kỹ thuật sculpting từ Module 06 (Multiresolution/Dyntopo, Clay Strips, Crease) lên nhân vật thật.
- Đảm bảo sự nhất quán giữa vùng cơ thể được sculpt và vùng bị trang phục che phủ.

## 2. Nội dung chính

Sau khi trang phục đã được blocking và tinh chỉnh (bài 063-064), bài học quay lại phần **cơ thể ếch** để hoàn thiện chi tiết giải phẫu ở các vùng da còn lộ ra: khuôn mặt (mắt lồi đặc trưng, miệng rộng, nếp gấp da quanh cổ họng), bàn tay/chân có màng, và bụng. Vì trang phục đã được chốt vị trí, việc sculpt giờ đây có thể tập trung chính xác vào các vùng không bị che, tránh lãng phí công sức chi tiết hóa những phần sẽ bị ẩn dưới vải.

Thêm **Multiresolution Modifier** (hoặc tiếp tục Dyntopo tùy đoạn) lên mesh cơ thể để đủ mật độ cho chi tiết da: nếp nhăn quanh khớp ngón tay/chân, các nốt sần đặc trưng da ếch bằng brush Clay Strips nhỏ rải rác không đối xứng hoàn toàn (tắt Symmetry một phần để tự nhiên hơn, tương tự kỹ thuật ở bài 051 - Anvil), và Crease cho các nếp gấp da lớn quanh cổ, khuỷu tay, đầu gối.

Một điểm kỹ thuật quan trọng là dùng **Mask** để bảo vệ các vùng tiếp giáp với trang phục (viền cổ áo, cổ tay áo, ống quần) khi sculpt xung quanh — tránh làm biến dạng bề mặt cơ thể đúng tại các điểm mà Surface Deform hoặc Shrinkwrap của trang phục đang bám vào (đã thiết lập ở Module 05/bài 063), vì thay đổi hình dạng cơ thể sau khi trang phục đã bind có thể khiến trang phục biến dạng theo không mong muốn.

## 3. Quy trình thực hành gợi ý

1. Chọn lại mesh cơ thể, thêm Multiresolution Modifier, subdivide vài cấp.
2. Sculpt chi tiết mặt: mắt lồi, miệng rộng, nếp da cổ họng bằng Clay Strips và Crease.
3. Sculpt chi tiết tay/chân có màng: nếp gấp khớp ngón, kết cấu da nốt sần.
4. Vẽ Mask bảo vệ các vùng viền tiếp giáp trang phục trước khi sculpt vùng lân cận.
5. Kiểm tra lại toàn bộ silhouette cơ thể kết hợp trang phục từ nhiều góc nhìn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Multiresolution Modifier | Modifier Properties > Add Modifier > Generate > Multiresolution |
| Vẽ Mask bảo vệ vùng | Giữ `Ctrl` + kéo chuột |
| Voxel Remesh (nếu cần) | `R` |

## 5. Lưu ý & lỗi thường gặp

- Sculpt chi tiết da ở vùng sẽ hoàn toàn bị trang phục che khuất là lãng phí thời gian không cần thiết.
- Quên Mask vùng viền tiếp giáp trang phục có thể khiến các phần dùng Surface Deform/Shrinkwrap ở trang phục bị biến dạng bất ngờ sau khi cơ thể thay đổi hình dạng.
- Chi tiết da quá đối xứng hoàn hảo (quên tắt Symmetry cho các nốt sần ngẫu nhiên) khiến nhân vật trông nhân tạo, cứng nhắc.

## 6. Checklist thực hành

- [ ] Đã hoàn thiện chi tiết khuôn mặt: mắt, miệng, nếp da cổ họng.
- [ ] Đã hoàn thiện chi tiết tay/chân có màng và kết cấu da.
- [ ] Đã bảo vệ đúng các vùng tiếp giáp trang phục bằng Mask khi sculpt.
- [ ] Đã kiểm tra tổng thể cơ thể kết hợp trang phục từ nhiều góc nhìn.

## 7. Tóm tắt

Body Refinement là bước hoàn thiện chi tiết giải phẫu có chủ đích, chỉ tập trung vào các vùng da thực sự hiển thị sau khi trang phục đã chốt — tránh lãng phí công sức đồng thời đảm bảo tính nhất quán giữa cơ thể và trang phục cho các bước rig và texturing tiếp theo.
