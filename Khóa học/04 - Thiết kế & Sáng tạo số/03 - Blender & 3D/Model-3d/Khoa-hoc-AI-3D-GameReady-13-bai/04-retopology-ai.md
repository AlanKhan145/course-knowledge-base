---
title: "Bài 04 — Retopology bằng AI: Tripo và Hunyuan3D"
course: "AI 3D Character — Từ hình tham chiếu đến Game-Ready"
lesson: 4
source_type: "Biên soạn tiếng Việt từ bản ghi video do người học cung cấp"
video_segment: "14:12–18:15"
format: "Markdown"
---

# Bài 04 — Retopology bằng AI: Tripo và Hunyuan3D

> **Vị trí trong video:** 14:12–18:15 · **Đầu vào:** bản ghi tiếng Việt do người học cung cấp.  
> **Phạm vi:** tái cấu trúc nội dung video thành bài thực hành; không phải phụ đề nguyên văn hay tài liệu chính thức của nhà cung cấp công cụ.

## Mục tiêu học tập

- Chọn bộ phận cần làm lại topology.
- So sánh đầu ra tự động theo silhouette, edge flow, biến dạng và chi phí poly.
- Đưa lại low-poly vào Blender đúng vị trí.

## Nội dung bài học

### 1. Xác định phần cần retopo

Sau khi sculpt high-poly, các đối tượng như giáp/vải/chi tiết vũ khí có thể cần low-poly mới. Những bộ phận đã có lưới gọn và hợp lý không nhất thiết phải làm lại.

### 2. Quy trình retopo tự động trong video

**Hướng Tripo:**

1. Export riêng từng high-poly thành FBX.
2. Import vào Tripo và điều chỉnh hướng nếu giao diện yêu cầu (video minh họa xoay 90°).
3. Chọn chế độ **Smart Low Poly** và ngân sách phù hợp.
4. So sánh vài lựa chọn, không mặc định dùng min/max. Có đối tượng người hướng dẫn nhắm khoảng 1.500 mặt, nhận kết quả gần 2.000 tùy thuật toán.
5. Import kết quả về Blender, **kiểm tra vị trí/rotation/scale** vì công cụ có thể thay đổi transform so với bản gốc.

**Hướng Hunyuan3D Studio:**

1. Dùng mục **Retopology** với model đầu vào.
2. Chọn mức thấp/low nếu ưu tiên tối ưu, kiểm tra chế độ quad khi có.
3. Sinh nhiều kết quả nếu mesh đầu tiên không đều.
4. Export và đưa vào Blender; trong ví dụ video, đầu ra giữ transform phù hợp hơn.

### 3. Các tiêu chí đánh giá

| Tiêu chí | Dấu hiệu tốt | Cần sửa |
|---|---|---|
| Silhouette | Theo sát hình dạng high-poly | Đứt góc, méo giáp, mất ngón |
| Edge flow | Quad/loop quanh khớp | Mặt kéo dài, cực điểm ở khớp |
| Poly budget | Phân bố dày ở nơi cần | Dồn mặt bên trong ít thấy |
| Mesh hygiene | Không lỗ bất thường | Mặt thừa, đỉnh nổi, chồng hình |
| Transform | Low/high trùng đúng vị trí | Bị xoay, lệch trục, scale sai |

### 4. Không có công cụ nào luôn thắng

Tư tưởng trung tâm của đoạn này là **kết hợp công cụ và chọn kết quả tốt nhất theo từng bộ phận**, sau đó sửa tay những chỗ khó. Tên và khả năng tính năng AI thay đổi theo phiên bản; đây là quy trình được người hướng dẫn mô tả, không phải bài kiểm chứng chất lượng dịch vụ hiện tại.

## Bài thực hành và tiêu chí hoàn thành

- [ ] Lấy một phần giáp hoặc găng tay high-poly làm mẫu.
- [ ] Thử ít nhất hai cách tạo low-poly (hoặc hai cài đặt) và lưu ảnh wireframe.
- [ ] Chọn bản tốt hơn theo 5 tiêu chí, ghi rõ các lỗi còn tồn tại.

## Tự kiểm tra

1. **Vì sao không chọn poly thấp nhất?**  
   *Gợi ý đáp án:* Dễ làm hỏng silhouette và các vòng cạnh cần cho rig/baking.
2. **Vì sao phải kiểm tra transform?**  
   *Gợi ý đáp án:* Một số công cụ có thể đổi hướng hoặc vị trí của mesh khi xuất/nhập.

## Ghi chú học tập

- Lưu bản `.blend` phiên bản mới trước các thao tác phá hủy như remesh, áp modifier hoặc join mesh.
- Các số poly, thông số bake và công cụ trong video là **ví dụ theo nhân vật Queen of Hearts**, không phải chuẩn bắt buộc cho mọi dự án.
- Tên tính năng có thể khác giữa phiên bản phần mềm; khi bản ghi tự động nhận sai tên, khóa học giữ khái niệm kỹ thuật và nêu những chỗ cần đối chiếu giao diện.
