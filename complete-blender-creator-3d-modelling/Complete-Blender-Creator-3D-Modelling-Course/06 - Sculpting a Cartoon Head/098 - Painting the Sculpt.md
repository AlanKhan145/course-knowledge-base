# 098 — Painting the Sculpt

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Painting the Sculpt |
| **Thời lượng** | 14:39 |
| **Chủ đề chính** | Tô màu trực tiếp lên mô hình |

## 1. Mục tiêu bài học

- Hiểu sự khác biệt giữa Vertex Paint và Texture Paint trong Blender.
- Thiết lập một texture/image để tô màu trực tiếp lên bề mặt sculpt (Texture Paint Mode).
- Sử dụng các brush tô màu cơ bản (Draw, Soft, Blur, Smear) để tô da, sừng, mắt, môi.
- Hiểu vai trò của UV (kể cả UV đơn giản/tự động) khi texture paint.

## 2. Nội dung chính

Blender cung cấp hai cách tô màu trực tiếp lên mesh mà không cần rời sang phần mềm khác:

- **Vertex Paint**: màu được lưu trực tiếp trên từng vertex của mesh (Color Attribute). Ưu điểm là nhanh, không cần UV, phù hợp phác thảo màu sắc tổng thể hoặc mesh mật độ cao (như mesh sculpt nhiều chi tiết). Nhược điểm: độ phân giải màu phụ thuộc mật độ mesh — vùng ít vertex sẽ có màu bị nội suy mờ.
- **Texture Paint**: màu được vẽ lên một hình ảnh (Image Texture) thông qua tọa độ UV, cho độ phân giải cao và độc lập với mật độ mesh, phù hợp khi cần chi tiết màu sắc rõ nét (ví dụ vân da, chi tiết mắt). Yêu cầu mesh đã có UV Map hợp lệ — có thể dùng **Smart UV Project** hoặc UV đơn giản cho mục đích tô màu nhanh (không cần UV tối ưu như khi bake).

Quy trình Texture Paint cơ bản:

1. Chuyển mesh sang Object Mode, tạo UV (Edit Mode > `U` > Smart UV Project) nếu chưa có.
2. Vào tab **Texturing** hoặc Texture Paint Mode, tạo Image Texture mới (New Image) với kích thước phù hợp (ví dụ 2048x2048), gán vào Material.
3. Chọn brush **Draw** để tô màu nền cho từng vùng lớn: màu da, màu sừng, màu môi, màu tròng mắt.
4. Dùng brush **Soft** (falloff mềm) để chuyển màu mượt giữa các vùng.
5. Dùng brush **Blur** để làm mờ, hòa trộn ranh giới màu.
6. Dùng brush **Smear** để kéo vệt màu, tạo hiệu ứng chuyển sắc tự nhiên (ví dụ ửng hồng ở má).
7. Có thể dùng Color Picker (`X` để đổi màu Primary/Secondary hoặc `Ctrl+click` để hút màu từ canvas) để lấy mẫu màu đã vẽ.

Với Vertex Paint, quy trình tương tự nhưng thao tác trực tiếp trên Color Attribute của mesh (Object Data Properties > Color Attributes), không cần UV hay Image Texture, phù hợp để nhanh chóng phác thảo phối màu trước khi quyết định texture paint chi tiết hơn.

## 3. Quy trình thực hành gợi ý

1. Tạo UV nhanh cho mesh bằng Smart UV Project (nếu dùng Texture Paint).
2. Tạo Image Texture mới, gán Material cơ bản cho object.
3. Vào Texture Paint Mode, dùng brush Draw tô các mảng màu lớn: da, sừng, môi, mắt.
4. Dùng Soft/Blur để làm mượt chuyển tiếp giữa các mảng màu.
5. Dùng Smear để tạo các vùng ửng màu tự nhiên (má, tai).
6. Kiểm tra lại kết quả ở chế độ Material Preview/Rendered để đánh giá màu dưới ánh sáng.
7. Lưu Image Texture ra file (Image > Save As) để không mất dữ liệu tô màu.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush | Chức năng |
|---|---|
| Brush **Draw** | Tô màu cơ bản lên bề mặt |
| Brush **Soft** | Tô màu với falloff mềm |
| Brush **Blur** | Làm mờ, hòa trộn màu |
| Brush **Smear** | Kéo vệt màu, tạo chuyển sắc |
| `X` | Hoán đổi màu Primary/Secondary |
| `Ctrl+Click` (giữ khi tô) | Hút màu (Color Picker) từ canvas |
| `U` (Edit Mode) | Mở menu UV Mapping (Smart UV Project...) |

## 5. Lưu ý & lỗi thường gặp

- Texture Paint trên mesh chưa có UV hoặc UV lỗi khiến màu bị méo/lặp lại bất thường.
- Quên Save Image sau khi tô, dẫn đến mất toàn bộ công tô màu khi đóng file.
- Dùng Vertex Paint trên mesh mật độ thấp cho chi tiết nhỏ khiến màu bị loang/mờ không như ý.
- Tô màu quá đều, thiếu biến thiên sắc độ (variation) khiến bề mặt trông phẳng, thiếu chân thực dù là phong cách cartoon.

## 6. Checklist thực hành

- [ ] Đã tạo UV cơ bản cho mesh (nếu dùng Texture Paint).
- [ ] Đã tạo Image Texture và gán vào Material.
- [ ] Đã tô màu nền cho các vùng chính: da, sừng, môi, mắt.
- [ ] Đã dùng Soft/Blur/Smear để làm mượt chuyển tiếp màu.
- [ ] Đã lưu Image Texture ra file.

## 7. Tóm tắt

Bài học giới thiệu hai phương pháp tô màu trực tiếp lên mô hình sculpt trong Blender — Vertex Paint và Texture Paint — cùng quy trình thực hành tô màu da, sừng và các chi tiết khuôn mặt bằng các brush Draw, Soft, Blur, Smear.
