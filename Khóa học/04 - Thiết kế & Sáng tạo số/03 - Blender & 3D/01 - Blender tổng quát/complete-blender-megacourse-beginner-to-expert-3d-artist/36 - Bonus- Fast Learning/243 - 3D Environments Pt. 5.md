# 243 — 3D Environments Pt. 5
# 243 — 3D Environments Pt. 5

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | 3D Environments Pt. 5 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:19:30 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này tập trung vào main scene, composition, HDRI, lighting, detail và việc dùng image làm environment. Nội dung được tổng hợp từ [Section 34 — Lighting and Camera Settings](../34%20-%203D%20Environments-%20Lighting%20and%20Camera%20Settings/README.md).

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Chuyển các asset đã chuẩn bị thành một main scene có camera rõ ràng.
- So sánh nhiều composition thay vì khóa sớm vào góc nhìn đầu tiên.
- Dùng HDRI để tạo môi trường và phản xạ nền, sau đó bổ sung light có chủ đích.
- Thêm detail phục vụ focal point mà không làm scene mất readability.
- Dùng image environment khi cần kiểm soát background hoặc mood của shot.

## Nội dung trọng tâm

### 1. Main scene và composition

Main scene là nơi các asset được đánh giá cùng nhau. Camera, khoảng trống, scale tương đối và hướng nhìn cần được kiểm tra trước khi lighting chi tiết; một asset tốt vẫn có thể không hiệu quả nếu composition không dẫn mắt.

### 2. HDRI và lighting

HDRI cung cấp ánh sáng môi trường và thông tin phản xạ để preview vật liệu. Các light bổ sung dùng để nhấn focal point, tách lớp không gian và kiểm soát bóng; HDRI không thay thế việc đánh giá ánh sáng trong camera view.

### 3. Image environment và detail

Image có thể đóng vai trò background hoặc environment, nhưng cần kiểm tra sự khớp giữa perspective, color và ánh sáng của image với asset 3D. Detail nên được thêm sau khi camera và value structure đã ổn định.

## Quy trình rút gọn

1. Tập hợp asset vào main scene và tạo camera chính.
2. Thử vài composition, kiểm tra silhouette và focal point ở thumbnail size.
3. Chọn HDRI phù hợp với mood và phản xạ của material.
4. Bổ sung key/fill/rim hoặc các light cần thiết cho shot.
5. Thêm detail ở vùng camera thấy rõ và cân bằng với background.
6. Thử image environment, kiểm tra hòa nhập và lưu các phiên bản camera.

## Thực hành đề xuất

Dùng một nhóm asset environment đã tạo ở các phần trước để dựng hai composition khác nhau. Render preview với hai HDRI, sau đó chọn một góc và thêm light để làm rõ focal element. Thử một image làm background/environment rồi so sánh với phương án chỉ dùng world/HDRI.

## Checklist

- [ ] Đã tạo main scene và camera chính.
- [ ] Đã thử ít nhất hai composition trước khi chốt.
- [ ] Đã kiểm tra HDRI ở material preview và render preview.
- [ ] Đã bổ sung light theo focal point, không chỉ tăng độ sáng toàn scene.
- [ ] Đã thử image environment hoặc ghi rõ lý do không dùng.
- [ ] Đã lưu scene và camera version được chọn.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Section 34 của thư mục khóa học. Nội dung nhấn mạnh mối liên hệ giữa asset, camera, HDRI và lighting trong cùng một shot.
