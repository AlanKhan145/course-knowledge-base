# Bài 10 — Làm mượt, modifier và kiểm định trước rig
**Tham chiếu video:** 42:31–45:12.


## Làm sạch theo video
- Thêm **Subdivision Surface** ở mức thấp nếu cần xem bề mặt mượt.
- Thử điều chỉnh thứ tự **Mirror, Subdivision, Shrinkwrap** theo mục tiêu: Mirror đảm bảo đối xứng, Subdivision thêm mật độ để làm mượt, Shrinkwrap áp bề mặt vào high-poly. Xem bằng mắt sau mỗi lần đổi thứ tự, không có một thứ tự luôn đúng.
- Chỉnh nhẹ các đỉnh bị giao nhau ở tai.
- Object Mode → **Shade Smooth** để làm mượt normals; thao tác này **không tăng số quads**.
- Kiểm tra Mirror Merge Distance nếu thấy nứt đường tâm.
- Dùng Sculpt Smooth cường độ thấp và X Symmetry khi cần cân vùng mesh.


## Đừng Apply sớm
Video Apply các modifier để hoàn thiện. Trong sản xuất, hãy giữ một bản **chưa Apply**, rồi nhân bản file trước khi xác nhận mesh cho rig. Apply Mirror khi không còn cần chỉnh đối xứng; chỉ Apply Shrinkwrap sau khi đã kiểm tra projection, nhất là ở hốc mắt và tai. Đừng thêm Subdivision quá cao vào model game.


## Bảng QA
| Kiểm tra | Cách thử |
|---|---|
| Đường tâm | Wireframe + xem front, kiểm tra Origin/Merge/Clipping |
| Mesh chồng | Orbit quanh mũi, tai, khóe mắt |
| Normal | Face Orientation, Recalculate Outside bằng Shift+N khi phù hợp |
| Liên thông | Select Linked bằng L |
| Shading | Shade Smooth, thử Subdivision, kiểm tra pole/n-gon |
| Deformation | Test chớp mắt, cười, há miệng |


## Test biến dạng tối thiểu
1. Chớp mắt: mí trên tiến về mí dưới, không cắt nhãn cầu.
2. Cười: kéo khóe miệng, má không bị xoắn đỉnh.
3. Há miệng: tách môi trên/dưới, không xé mesh hoặc bịt bởi mặt sai.
4. Xoay đầu và vùng cổ (nếu có): xem chuyển tiếp dưới hàm.


**Kết luận chính xác:** retopo tốt là điều kiện thuận lợi để rig/animation, **không tự hoàn thành** UV, weight painting, skinning hay facial rig.


## Nộp sản phẩm
`04_finished.blend`, ảnh front/side/3-4/back có Wireframe, ảnh riêng vòng mắt–môi và tai, ghi chú các lỗi đã sửa.