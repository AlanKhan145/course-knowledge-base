# Bài 07 — Tinh chỉnh cuối, hướng nhìn và render kiểm tra

**Mục tiêu:** biến một bản sculpt “đúng cơ bản” thành một hình mẫu có thể đánh giá ở nhiều góc và thay đổi ánh nhìn.

**Liên hệ video:** 25:48–31:48.

## 1. Tinh chỉnh trước khi tăng chi tiết

Ở đoạn **25:48–27:30**, giảng viên chỉnh rất nhỏ vị trí mí và góc mắt để thay đổi cá tính, sau đó chuyển sang timelapse để hoàn thiện. Đây là bước kiểm tra chất lượng, **không phải thêm chi tiết vô hạn**.

Kiểm tra:

- Hai đầu khóe kết nối hợp lý với bờ mí.
- Bờ mí trên/dưới ôm nhãn cầu; phần mí trên không cắt xuyên quả cầu.
- Độ dày mí nhất quán nhưng không đồng đều như ống nhựa.
- Các khối quanh mắt trơn, không mất gờ xương và gò má.
- Góc chính diện, góc nghiêng và ba phần tư đều thuyết phục.

## 2. Khi nhãn cầu xoay, điều gì xảy ra?

Đoạn **28:35–28:55** nói giảng viên thử di chuyển mắt/đồng tử theo các hướng rồi điều chỉnh lại mí. Với character 3D, đừng mặc định **chỉ xoay eyeball là mọi trạng thái đều trông tự nhiên**. Trong tạo hình, mí đôi khi cần chỉnh theo góc nhìn; với nhân vật có rig, thường dùng eye-look controls và corrective shapes hoặc rig mí phù hợp.

> Phần **rig, shape keys, animation** là hướng mở rộng thực hành; video này không hướng dẫn chi tiết triển khai hệ thống rig.

## 3. Boolean và phân lớp hình học

Video timelapse nhắc tới **Boolean để cắt/định hình một số phần mắt** và tạo biến thể kiểu dáng. Đây là mô tả **quá trình trong timelapse**, không đủ thông tin để tái dựng chính xác thao tác. Boolean là tùy chọn tạo khối/đồ họa, không phải điều kiện bắt buộc để sculpt mắt giải phẫu.

Nếu bạn làm nhân vật game, phân nhóm `head_sculpt`, `eyeball`, `iris`, `pupil` theo nhu cầu, nhưng không nhất thiết tách mọi thứ ngay trong bài sculpt cơ bản.

## 4. Render kiểm tra đơn giản

1. Dùng **MatCap** hoặc vật liệu màu xám/da đơn sắc để nhìn ra lỗi điêu khắc. Không che hình khối bằng texture cầu kỳ.
2. Thiết lập 1 camera chính diện và 1 camera 3/4, nguồn sáng đủ cho thấy nếp và mặt phẳng.
3. Chụp render cùng cường độ ánh sáng cho các phiên bản để dễ so sánh.
4. Ghi chú các lỗi cần sửa và lưu `eye_07_final.blend` trước lần sửa tiếp.

## 5. Bài tập

Tạo bảng ảnh gồm 6 ô: **neutral** và **surprised** × **chính diện / nghiêng / 3-4**. So sánh độ bám bờ mí và cảm xúc. Chọn **một** chi tiết cần tinh chỉnh, sửa rồi render lại; không sửa tràn lan.

**Đạt khi:** có ít nhất 2 hướng nhìn rõ ràng và ảnh render thể hiện hình khối chính xác.
