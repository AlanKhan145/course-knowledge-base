# 053 — The Procedural Textures

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | The Procedural Textures |
| **Thời lượng** | 4:54 |
| **Chủ đề chính** | Các texture procedural cốt lõi trong Shader Editor |

## 1. Mục tiêu bài học

- Làm quen với workspace **Shading** và bố cục cơ bản của **Shader Editor**.
- Hiểu khái niệm texture procedural — texture được sinh ra bằng thuật toán toán học thay vì ảnh bitmap.
- Nắm được đặc điểm và ứng dụng của bốn node texture cơ bản: **Noise Texture**, **Voronoi Texture**, **Wave Texture**, **Gradient Texture**.
- Biết cách thêm node và preview kết quả trực tiếp trên vật thể ở Material Preview/Rendered View.

## 2. Nội dung chính

Workspace **Shading** (tab trên cùng cửa sổ Blender) mở ra **Shader Editor** — một node editor chuyên dụng để xây dựng vật liệu bằng cách nối các node lại với nhau, tương tự Geometry Nodes nhưng dành riêng cho shading. Mỗi vật liệu (Material) luôn có ít nhất hai node mặc định: **Principled BSDF** (shader chính) và **Material Output** (điểm xuất kết quả cuối).

**Texture procedural** là các texture được sinh ra hoàn toàn bằng công thức toán học (noise function, hàm khoảng cách...) thay vì đọc từ file ảnh. Ưu điểm lớn nhất là chúng có độ phân giải vô hạn (không bị vỡ hạt khi zoom gần), không cần UV Unwrap chính xác (có thể dùng tọa độ Generated hoặc Object), và các tham số dễ điều chỉnh bằng số thay vì phải vẽ lại ảnh. Bốn node cốt lõi:

- **Noise Texture**: sinh nhiễu ngẫu nhiên mượt (Perlin-like noise) với các tham số Scale, Detail, Roughness, Distortion. Cho ra pattern lốm đốm hữu cơ, không đều — rất hợp để làm biến thiên Roughness bề mặt (bề mặt không bao giờ phản chiếu đều tuyệt đối), tạo vân mây, vân đất, hoặc làm input Displacement cho địa hình.
- **Voronoi Texture**: chia mặt phẳng/không gian thành các "ô tế bào" dựa trên khoảng cách tới các điểm ngẫu nhiên gần nhất (thuật toán Worley noise). Có nhiều chế độ output: F1 (khoảng cách gần nhất), Smooth F1, F2, Distance To Edge, N Sphere Radius... Ứng dụng: vân đá cẩm thạch dạng mạng, da voi/da khô nứt nẻ, mẫu tế bào sinh học, vảy cá.
- **Wave Texture**: sinh sóng tuần hoàn dạng Bands (dải song song) hoặc Rings (vòng tròn đồng tâm), có thể bóp méo (Distortion) theo Noise. Dùng để tạo vân gỗ (kết hợp Bands + Distortion mạnh), sọc kẻ, hoặc vân đồng tâm kiểu gỗ cắt ngang.
- **Gradient Texture**: sinh chuyển màu mượt theo các kiểu Linear, Quadratic, Easing, Diagonal, Spherical, Radial. Bản thân ít dùng trực tiếp làm texture cuối mà chủ yếu làm input trung gian để trộn hai texture khác hoặc tạo hiệu ứng chuyển màu độ cao (ví dụ gradient theo trục Z để pha tuyết trên núi).

Mỗi node texture này xuất ra hai loại output: **Color** (giá trị RGB/grayscale) và **Fac** (giá trị factor 0-1, dùng làm hệ số trộn hoặc mask). Kết nối trực tiếp output Color/Fac vào input Base Color hoặc Roughness của Principled BSDF là cách nhanh nhất để xem preview ngay lập tức.

## 3. Quy trình thực hành gợi ý

1. Chuyển sang workspace **Shading**, chọn một Sphere hoặc Cube mặc định đã có vật liệu.
2. Trong Shader Editor, nhấn `Shift + A > Texture > Noise Texture`, nối output **Color** vào input **Base Color** của Principled BSDF.
3. Chuyển Scale lên 10-20, quan sát pattern lốm đốm thay đổi trong Material Preview.
4. Xóa kết nối, thử thay bằng **Voronoi Texture**, đổi Feature từ F1 sang Distance To Edge để thấy dạng lưới cạnh ô.
5. Thử **Wave Texture** với Bands, tăng Distortion để mô phỏng vân gỗ thô.
6. Thử **Gradient Texture** với chế độ Spherical, quan sát chuyển màu tỏa tròn từ tâm vật thể.
7. So sánh output **Fac** (grayscale) với output **Color** của từng node bằng cách nối tạm vào Base Color.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí / Phím tắt |
|---|---|
| Mở workspace Shading | Tab "Shading" trên cùng |
| Thêm node bất kỳ | `Shift + A` trong Shader Editor |
| Thêm Noise Texture | `Shift + A > Texture > Noise Texture` |
| Thêm Voronoi Texture | `Shift + A > Texture > Voronoi Texture` |
| Thêm Wave Texture | `Shift + A > Texture > Wave Texture` |
| Thêm Gradient Texture | `Shift + A > Texture > Gradient Texture` |
| Preview vật liệu | `Z` > Material Preview / Rendered |
| Phóng to node editor tới node được chọn | `Numpad .` (View Selected) |

## 5. Lưu ý & lỗi thường gặp

- Quên rằng texture procedural mặc định dùng tọa độ **Generated** — nếu object bị scale không đều, pattern có thể méo; cần Apply Scale (`Ctrl + A > Scale`) để pattern hiển thị đúng tỷ lệ.
- Nhầm lẫn Scale thấp cho pattern to hay nhỏ — Scale càng cao, pattern càng lặp lại nhiều lần (mịn/nhỏ hơn), không phải ngược lại.
- Nối nhầm output **Fac** (grayscale) vào Base Color khi muốn màu — nên dùng Color nếu cần thấy sắc thái, Fac nếu chỉ cần giá trị mask.
- Không lưu ý Detail và Roughness của Noise Texture ảnh hưởng độ chi tiết fractal — Detail cao làm noise chi tiết hơn nhưng tốn hiệu năng khi render.

## 6. Checklist thực hành

- [ ] Đã mở workspace Shading và nhận diện được Principled BSDF, Material Output.
- [ ] Đã thêm và preview được cả 4 loại texture: Noise, Voronoi, Wave, Gradient.
- [ ] Đã hiểu sự khác biệt giữa output Color và Fac.
- [ ] Đã thử đổi Scale/Detail và quan sát ảnh hưởng lên pattern.

## 7. Tóm tắt

Bốn node texture procedural — Noise, Voronoi, Wave, Gradient — là nền tảng để sinh mọi pattern bề mặt mà không cần ảnh bitmap, mỗi loại có "tính cách" riêng (hữu cơ, tế bào, sóng, chuyển màu) sẽ được kết hợp và tinh chỉnh sâu hơn ở các bài tiếp theo của module.
