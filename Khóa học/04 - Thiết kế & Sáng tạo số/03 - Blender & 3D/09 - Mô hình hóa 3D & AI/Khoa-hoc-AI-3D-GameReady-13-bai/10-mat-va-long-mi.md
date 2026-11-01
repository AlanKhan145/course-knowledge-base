---
title: "Bài 10 — Tạo mắt hai lớp và lông mi bằng alpha texture"
course: "AI 3D Character — Từ hình tham chiếu đến Game-Ready"
lesson: 10
source_type: "Biên soạn tiếng Việt từ bản ghi video do người học cung cấp"
video_segment: "47:35–51:42"
format: "Markdown"
---

# Bài 10 — Tạo mắt hai lớp và lông mi bằng alpha texture

> **Vị trí trong video:** 47:35–51:42 · **Đầu vào:** bản ghi tiếng Việt do người học cung cấp.  
> **Phạm vi:** tái cấu trúc nội dung video thành bài thực hành; không phải phụ đề nguyên văn hay tài liệu chính thức của nhà cung cấp công cụ.

## Mục tiêu học tập

- Giải thích mắt hai lớp tạo cảm giác chiều sâu.
- Tạo vật liệu mắt có độ bóng/trong suốt.
- Dựng dải lông mi đơn giản, UV và alpha mask.

## Nội dung bài học

### 1. Mắt có cấu trúc nhiều lớp

Video so sánh mắt một hình cầu đơn giản với cấu trúc mắt **hai lớp** nhằm tăng chiều sâu và phản xạ. Một lớp làm nhãn cầu/iris, lớp ngoài trong hơn và bóng hơn để bắt highlight. Người hướng dẫn tham khảo mắt từ nhân vật **MetaHuman** trong demo; đây là ví dụ quy trình, không có nghĩa phải sao chép asset không được cấp phép.

### 2. Thiết lập mắt

1. Tạo hoặc sử dụng hình cầu sạch làm phần nhãn cầu.
2. Gắn texture màu iris/sclera và chỉnh UV để đồng tử ở đúng tâm.
3. Nhân đôi phần bề mặt/đặt lớp ngoài ôm sát, tránh giao cắt gây z-fighting.
4. Lớp ngoài dùng **độ bóng cao và độ trong suốt thích hợp**; mức alpha/refraction tùy render engine.
5. Kiểm tra trong Blender **và** render engine đích: thông số transparency có thể không tự chuyển nguyên vẹn.
6. Mirror/copy sang mắt còn lại, kiểm tra hướng nhìn và đồng tử đối xứng.

### 3. Dựng dải lông mi

Trong video, tác giả bắt đầu từ **một đỉnh đơn (single vertex)**, extrude (`E`) để có đường lông mi chạy theo mí mắt, rồi mở rộng thành dải mặt mỏng. Có thể thêm vài loop để uốn cong.

- Cố định đường mép dải theo đường mí trên/dưới.
- Dùng snapping khi dựng cho sát bề mặt, rồi tắt để tránh thao tác lệch.
- Trải UV của dải thành vùng dễ quản lý.
- Tạo **alpha mask** cho hình lông mi: vùng trắng hiển thị, vùng đen trong suốt (theo cách mask sử dụng).
- Thiết lập alpha clip/translucency phù hợp trong shader; kiểm tra viền răng cưa.

### 4. Sửa lỗi hay gặp

| Lỗi | Kiểm tra |
|---|---|
| Mắt bị đục hoặc quá tối | Transparent mode, roughness, refraction, light |
| Lớp mắt nhấp nháy | Hai bề mặt sát/chồng nhau (z-fighting) |
| Đồng tử méo/lệch | UV và hướng sphere |
| Lông mi thành miếng đen | Alpha chưa nối đúng hoặc chế độ render không hỗ trợ |
| Lông mi xuyên mí | Snapping, khoảng cách dải mesh và góc nhìn |

> Các bước mắt/lông mi giúp tăng realism nhưng không phải điều kiện bắt buộc cho game phong cách low-poly hoặc camera xa.

## Bài thực hành và tiêu chí hoàn thành

- [ ] Tạo một mắt có hai lớp và texture iris.
- [ ] Tạo dải lông mi ít polygon cùng ảnh alpha mask.
- [ ] Chụp ảnh nhìn thẳng và nghiêng để kiểm tra xuyên mặt/chất liệu.

## Tự kiểm tra

1. **Vì sao không chỉ tô texture mắt lên mặt?**  
   *Gợi ý đáp án:* Hình cầu và lớp phản xạ cho góc nhìn, chiều sâu và highlight tốt hơn.
2. **Alpha mask để làm gì?**  
   *Gợi ý đáp án:* Cắt hình lông mi ra khỏi dải mesh đơn giản, không phải model từng sợi.

## Ghi chú học tập

- Lưu bản `.blend` phiên bản mới trước các thao tác phá hủy như remesh, áp modifier hoặc join mesh.
- Các số poly, thông số bake và công cụ trong video là **ví dụ theo nhân vật Queen of Hearts**, không phải chuẩn bắt buộc cho mọi dự án.
- Tên tính năng có thể khác giữa phiên bản phần mềm; khi bản ghi tự động nhận sai tên, khóa học giữ khái niệm kỹ thuật và nêu những chỗ cần đối chiếu giao diện.
