# 014 — Making the Rocky Base

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Making the Rocky Base |
| **Thời lượng** | 12:37 |
| **Chủ đề chính** | Điêu khắc phần nền đá |

## 1. Mục tiêu bài học

- Làm quen với Sculpt Mode và các brush điêu khắc cơ bản.
- Biết cách chuẩn bị mesh đủ dày đặc (subdivide) trước khi sculpt để có đủ chi tiết.
- Sử dụng các brush Draw, Grab, Smooth, Inflate/Deflate để tạo hình khối đá gồ ghề tự nhiên.
- Hiểu khi nào nên dùng Dyntopo hoặc Multiresolution để tăng chi tiết cục bộ trong lúc sculpt.

## 2. Nội dung chính

**Sculpt Mode** (chuyển qua Workspace "Sculpting" hoặc dropdown mode ở góc trên trái) cho phép điêu khắc mesh giống nặn đất sét kỹ thuật số, phù hợp tạo các hình dạng hữu cơ như đá, địa hình, hoặc chi tiết không đối xứng cứng nhắc.

Trước khi sculpt, mesh cần đủ mật độ polygon để brush có "vật liệu" để biến dạng — một Cube hoặc Ico Sphere trơn cần được Subdivide nhiều lần (Edit Mode > `Right Click > Subdivide`, hoặc thêm **Subdivision Surface modifier** rồi Apply, hoặc bật **Multiresolution modifier** để tăng chi tiết theo từng cấp mà vẫn giữ được mesh gốc thấp poly).

Các brush sculpt cơ bản thường dùng cho khối đá:

- **Draw**: đẩy bề mặt ra ngoài theo pháp tuyến — brush cơ bản nhất, dùng để thêm khối lượng và các gờ đá.
- **Grab**: kéo một vùng bề mặt theo hướng di chuyển chuột, hữu ích tạo các mỏm đá lồi ra rõ rệt.
- **Smooth**: làm mịn bề mặt, giảm chi tiết brush khác đã tạo — dùng để cân bằng giữa các nét gồ ghề.
- **Inflate/Deflate**: phồng hoặc lõm bề mặt theo pháp tuyến trung bình, tạo khối tròn trịa tự nhiên hơn Draw.
- **Crease/Clay Strips**: tạo các đường nứt, cạnh sắc — hữu ích cho vết nứt đá.

Với các khối cần chi tiết cao ở một vài vùng cụ thể (không đều toàn mesh), **Dyntopo** (Dynamic Topology, bật trong Sculpt Mode header) tự động thêm polygon ngay dưới brush khi cần, phù hợp phác thảo nhanh không cần UV. Ngược lại **Multiresolution modifier** giữ được mesh gốc chỉnh sửa được và UV ổn định, phù hợp workflow sản xuất cần bake normal map sau này — với nền đá đơn giản trong module 1, Dyntopo hoặc Subdivide thủ công là đủ.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube hoặc Ico Sphere làm nền đá, Scale dẹt xuống để có hình dạng tảng đá thô.
2. Vào Edit Mode, Subdivide 2-3 lần để tăng mật độ polygon (hoặc bật Dyntopo trong Sculpt Mode).
3. Chuyển sang Sculpt Mode, dùng brush **Draw** với Strength vừa phải để tạo các gờ lồi lõm ngẫu nhiên.
4. Dùng **Grab** để kéo một vài điểm tạo mỏm đá nhô ra rõ rệt.
5. Dùng **Smooth** xen kẽ để tránh bề mặt quá gai góc thiếu tự nhiên.
6. Chỉnh Radius và Strength của brush (phím `F` để thay đổi Radius nhanh bằng cách kéo chuột, `Shift + F` cho Strength) để kiểm soát mức độ chi tiết.
7. Quan sát kết quả từ nhiều góc (dùng Orbit) để đảm bảo hình khối đá tự nhiên từ mọi hướng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chuyển Sculpt Mode | Dropdown mode góc trên trái hoặc Workspace "Sculpting" |
| Đổi Radius brush | `F` (kéo chuột) |
| Đổi Strength brush | `Shift + F` |
| Chọn brush nhanh | Phím số hoặc thanh công cụ Sculpt bên trái |
| Làm mịn tạm thời (giữ phím) | `Shift` (giữ khi đang vẽ với brush khác) |
| Subdivide mesh (Edit Mode) | `Right Click > Subdivide` |
| Bật Dyntopo | Checkbox "Dyntopo" trong header Sculpt Mode |

## 5. Lưu ý & lỗi thường gặp

- Sculpt trên mesh chưa đủ mật độ polygon sẽ cho kết quả gồ ghề, vuông cạnh không mong muốn — luôn subdivide hoặc bật Dyntopo trước.
- Dùng Strength quá cao khiến brush biến dạng mesh đột ngột, khó kiểm soát — nên bắt đầu với Strength thấp và tăng dần.
- Sculpt quá chi tiết cho một scene low-poly có thể phá vỡ phong cách tổng thể — nền đá chỉ cần đủ gồ ghề tự nhiên, không cần chi tiết cực nhỏ.
- Số polygon sau khi Dyntopo/Subdivide có thể tăng rất nhanh, gây nặng máy — đây là lý do bài tiếp theo giới thiệu Decimate Modifier để giảm tải sau khi sculpt.

## 6. Checklist thực hành

- [ ] Đã chuyển được vào Sculpt Mode và chọn đúng brush.
- [ ] Đã subdivide/tăng mật độ mesh đủ để sculpt.
- [ ] Đã tạo được hình khối đá gồ ghề bằng Draw, Grab, Smooth.
- [ ] Đã kiểm tra hình khối từ nhiều góc nhìn khác nhau.

## 7. Tóm tắt

Sculpt Mode cho phép tạo hình nền đá tự nhiên bằng các brush Draw, Grab, Smooth, Inflate trên một mesh đã được tăng mật độ polygon. Kết quả sculpt thường có số polygon rất cao, sẽ được xử lý ở bài tiếp theo bằng Decimate Modifier.
