# 240 — 3D Environments Pt. 2
# 240 — 3D Environments Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | 3D Environments Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:10:02 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này tập trung vào texture workflow của environment: texture cơ bản, phá lặp, trộn nhiều texture, blending giữa object, texture painting, wet surface và chỉnh một texture đơn. Nội dung được tổng hợp từ [Section 30 — Texturing](../30%20-%203D%20Environments-%20Texturing/README.md).

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Đặt texture ở đúng quy mô tương đối với object và scene.
- Nhận diện texture tiling bị lộ và tạo variation có chủ đích.
- Trộn hai texture hoặc blend texture giữa các object bằng mask và shader nodes.
- Texture paint các vùng chuyển tiếp, vết bẩn hoặc bề mặt ướt.
- Chỉnh một texture riêng mà không làm mất khả năng kiểm soát material tổng thể.

## Nội dung trọng tâm

### 1. Scale và texture tiling

Một texture seamless vẫn có thể lộ pattern khi lặp quá đều. Scale của mapping cần phù hợp với kích thước thực của bề mặt và reference; chỉ thay đổi số lần lặp không đủ để tạo cảm giác tự nhiên.

### 2. Variation bằng shader và nhiều texture

Ground hoặc wall thường không chỉ gồm một texture. Có thể trộn texture sạch với texture sỏi, đá hoặc vùng khác bằng mask, noise, color information hoặc cách pha phù hợp trong shader. Mục tiêu là phá quy luật lặp nhưng vẫn giữ material nhất quán.

### 3. Texture painting và wet surface

Texture Paint giúp thêm variation cục bộ mà node procedural khó xác định chính xác. Vết ướt cần được thể hiện qua những thuộc tính như màu, roughness và phản xạ, đồng thời phải phù hợp với nơi nước có thể đọng hoặc chảy.

### 4. Chỉnh texture đơn

Khi chỉ cần thay đổi một texture, hãy cô lập material/object và kiểm tra kết quả trong context của scene. Điều này giúp tránh sửa quá rộng hoặc làm sai tỷ lệ của các asset khác.

## Quy trình rút gọn

1. Kiểm tra scale object và chọn texture phù hợp với kích thước bề mặt.
2. Tạo material cơ bản, xem pattern ở khoảng cách camera thật.
3. Phá tiling bằng cách thay đổi mapping, trộn texture hoặc thêm variation.
4. Dùng mask để blend giữa các vật liệu và tránh đường chuyển tiếp rõ.
5. Texture paint vết bẩn, vùng ướt hoặc chi tiết cần kiểm soát bằng tay.
6. Test lại material trong toàn scene dưới lighting dự kiến.

## Thực hành đề xuất

Tạo một plane đất có texture seamless. Thêm texture thứ hai cho sỏi hoặc vùng đất khác, trộn chúng bằng mask, sau đó texture paint một vùng ướt gần mép vật thể. Render cận cảnh và toàn cảnh để kiểm tra texture có đúng scale và pattern có còn lặp lộ hay không.

## Checklist

- [ ] Đã kiểm tra texture scale ở khoảng cách camera thực tế.
- [ ] Đã phá texture tiling bằng ít nhất hai cách.
- [ ] Đã trộn hai texture mà không tạo đường ranh cứng.
- [ ] Đã texture paint một vùng variation hoặc wet surface.
- [ ] Đã kiểm tra material trong toàn scene và ở cận cảnh.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Section 30 của thư mục khóa học. Các thuật ngữ như tiling, mapping, shader, mask và wet surface được giữ theo workflow của bài nguồn.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
