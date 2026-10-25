---
lesson: 9
title: "Kết hợp shader PBR và tạo đối xứng bằng Mirror"
video_time: "22:41–24:34"
---

# Bài 09 — Hoàn thiện vật liệu và đối xứng

> **Mục tiêu:** gắn đúng texture vào low-poly, bảo toàn normal map, tạo tay/chân đối xứng. **Nguồn:** 22:41–24:34.

## 1. Lắp material cho low-poly

Bản mesh có texture được import vào Blender để lấy thông tin vật liệu. Sau đó tác giả copy các Image Texture node và kết hợp với normal map đã bake ở Bài 07.

Sơ đồ kết nối khái quát:

```text
Base Color texture (sRGB) ──────────> Principled BSDF / Base Color
Roughness texture (Non-Color) ──────> Principled BSDF / Roughness
Metallic texture (Non-Color) ───────> Principled BSDF / Metallic
Normal texture (Non-Color) ────────> Normal Map node ──> BSDF / Normal
```

## 2. Lưu ý map đóng gói kênh màu

Trong video có đoạn mô tả **kênh G (xanh lá) đưa vào Roughness và kênh B (xanh dương) đưa vào Metallic**. Đây là **một cấu hình cụ thể của texture được tác giả dùng**, không phải quy tắc cho mọi file PBR. Nếu nhận **packed map**, cần quan sát tên/metadata và dùng **Separate Color** để nối đúng từng kênh; không gán mặc định khi không biết layout.

## 3. Mirror tay và chân

1. Xác nhận tay/chân bên phải nằm đúng vị trí trong scene.
2. Đặt **origin** để mặt phẳng mirror đi qua trung tâm cơ thể (thường là X=0).
3. Chọn object chân/tay, thêm **Mirror Modifier** theo trục phù hợp.
4. Kiểm tra bên phản chiếu không xuyên thân, không đảo UV gây vấn đề texture.
5. Lưu bản trước/sau mirror riêng để dễ sửa nếu cần.

**Lưu ý:** Mirror mô hình là hình học. Nếu sau này muốn điều khiển hai chân độc lập, hệ rig phải có xương/trọng số tách biệt đúng cách; không suy ra đã có rig đối xứng chỉ vì mesh có hai chân.

## 4. Kiểm tra vật liệu trước rigging

- [ ] Base color đúng từng bộ phận.
- [ ] Normal được nối qua node Normal Map.
- [ ] Roughness và Metallic dùng map đúng loại/kênh.
- [ ] Không có đường nối UV nổi bật từ góc nhìn bình thường.
- [ ] Chi trái/phải có hình dáng, vật liệu và khớp nối nhất quán.
- [ ] Tệp `.blend` được lưu ở thời điểm mesh hoàn thiện.

## 5. Bài tập

Tạo hai ảnh đối chiếu **trước/sau Mirror** và hai ảnh khác thể hiện vật liệu trong viewport. Giải thích vì sao một vật thể vẫn có thể nhìn phẳng nếu quên nối normal map dù đã có đầy đủ texture màu.
