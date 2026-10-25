---
title: "Bài 09 — Sinh texture trong Tripo và sửa Texture Paint trong Blender"
order: 9
stage: "Texturing"
source_timestamps: "42:48–48:38"
---

# Bài 09 — Sinh texture trong Tripo và sửa Texture Paint trong Blender

## Mục tiêu

Áp dụng texture từ nhiều hình tham chiếu, so sánh biến thể và xử lý các vết bẩn trên da, mắt, tóc bằng Blender.

## 1. Chuẩn bị ảnh texture

Nguồn trình bày việc biến ảnh tham chiếu tương đối hiện thực thành bản tô màu **anime** để làm chuẩn màu. Ảnh mặt trước, trái và sau được dùng cho chế độ texturing đa góc trong Tripo.

## 2. Sinh texture qua Tripo

1. Export model từ Blender **sau khi** kiểm tra UV và transforms.
2. Trong Tripo, dùng **Upload Model**.
3. Xoay model đúng chiều nếu công cụ hiển thị sai hướng.
4. Chọn **Texture → Multiview**, nạp các góc ảnh được hỗ trợ.
5. Sinh vài biến thể, xem kỹ mặt, mống mắt và tóc trước khi chọn.
6. Video thử độ phân giải **2K và 4K**; tác giả thích cảm giác anime ở một bản 2K cụ thể. Không suy ra 2K luôn tốt hơn 4K.
7. Export model đã có texture và nhập lại Blender; kiểm tra image/material có được liên kết đúng.

## 3. Sửa bằng Texture Paint

- Vào workspace/chế độ **Texture Paint** (không nhầm với Weight Paint).
- Dùng cách xem phẳng/không bị shading chi phối khi cần đánh giá màu nguồn.
- Sample màu từ phần da/tóc còn sạch và tô lên chỗ bẩn.
- Dùng nét thẳng hoặc vẽ trên UV image để làm viền sạch hơn.
- Sử dụng **Smear** có kiểm soát khi cần kéo màu.
- Tô sclera (lòng trắng mắt) thành màu sáng, sửa mống mắt và viền mi.
- Tóc có thể cần sơn lại các mảng lớn vì texture AI hay nhòe hoặc sai hướng ở các lọn.

## 4. Xử lý lỗi thường gặp

| Dấu hiệu | Nơi kiểm tra | Cách khắc phục |
|---|---|---|
| Mắt lem màu da/tóc | UV iris, sclera và image paint | Tô lại vùng trắng, iris, viền |
| Vệt bẩn chạy xuyên seam | UV islands và seam | Sửa seam/clone màu giữa mép |
| Tóc sai màu ở mặt trong | UV hair và ảnh góc sau | Tách vùng UV, tô lại |
| Texture quá nhòe | UV diện tích thấp, ảnh nguồn yếu | Tăng UV cho vùng quan trọng; tạo lại biến thể |
| Texture không hiển thị trong Unity | Material và image path | Gắn lại texture, đóng gói/export đúng |

## 5. Tiêu chí hoàn thành

Texture không cần tuyệt đối hoàn hảo theo mục tiêu của video, nhưng ở khoảng cách xem game thông thường phải sạch vùng mắt, da, miệng và không có vệt đen bất thường. **Lưu texture đã sửa thành file ảnh**, không chỉ lưu `.blend`, tránh mất dữ liệu paint chưa lưu.

**Bài thực hành:** tạo ảnh so sánh AI Texture Before/After Blender Paint; lưu `09_textured.blend` và thư mục ảnh texture.

**Bài tiếp:** [Bài 10 — Shape Keys cho blink và miệng](10-shape-keys-bieu-cam.md).
