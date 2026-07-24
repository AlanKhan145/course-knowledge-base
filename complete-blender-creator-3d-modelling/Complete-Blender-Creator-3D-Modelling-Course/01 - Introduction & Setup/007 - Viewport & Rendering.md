# 007 — Viewport & Rendering

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Viewport & Rendering |
| **Thời lượng** | 16:35 |
| **Chủ đề chính** | Viewport và kết xuất hình ảnh |

## 1. Mục tiêu bài học

- Phân biệt 4 chế độ hiển thị viewport: Wireframe, Solid, Material Preview, Rendered.
- Hiểu sự khác nhau giữa render engine Eevee (Next) và Cycles.
- Biết cách thực hiện render ảnh tĩnh (`F12`) và cấu hình cơ bản trong Render Properties.
- Làm quen với Color Management (View Transform) ảnh hưởng đến kết quả hiển thị màu.

## 2. Nội dung chính

Góc trên bên phải viewport có 4 icon hình cầu tương ứng 4 chế độ hiển thị (Shading Mode), có thể chuyển nhanh bằng phím `Z` (mở Shading Pie Menu):

- **Wireframe**: chỉ hiện khung dây (cạnh), hữu ích khi cần nhìn xuyên vật thể để căn chỉnh.
- **Solid**: hiển thị khối đặc với shading cơ bản, không cần tính vật liệu — chế độ làm việc mặc định khi modeling.
- **Material Preview**: hiển thị gần đúng vật liệu (Principled BSDF, màu, độ bóng) dưới ánh sáng studio mặc định, không cần thiết lập light trong scene.
- **Rendered**: hiển thị kết quả gần với ảnh render cuối cùng, dùng ánh sáng thật trong scene (Sun, Point, World...), tính theo engine đang chọn (Eevee/Cycles).

**Render Engine** được chọn trong `Render Properties` (icon máy ảnh phía sau):

- **Eevee (Eevee Next từ 4.2+)**: rasterized real-time renderer, tốc độ nhanh, hỗ trợ raytracing giới hạn (reflections, refractions, shadows) — phù hợp preview nhanh và các dự án cần tốc độ.
- **Cycles**: path-tracing renderer, mô phỏng ánh sáng vật lý chính xác hơn (global illumination, caustics chân thực), render lâu hơn nhưng chất lượng cao; hỗ trợ tăng tốc GPU qua CUDA/OptiX (Nvidia), HIP (AMD), Metal (Mac).

**Render Image** (`F12`) xuất ra một cửa sổ ảnh tĩnh riêng dựa trên Camera hiện tại của scene, dùng cấu hình trong Output Properties (độ phân giải, định dạng file) và Render Properties (Samples, Denoising).

**Color Management** (`Render Properties > Color Management`) điều chỉnh View Transform — mặc định Blender 4.x dùng **AgX** (tông màu tự nhiên, đỡ cháy sáng hơn Filmic cũ), có thể chuyển về **Standard** (màu thô, dễ bị "cháy" vùng sáng) hoặc **Filmic** (tùy chọn cũ hơn).

## 3. Quy trình thực hành gợi ý

1. Trong Solid Mode, thử bấm `Z` để mở Pie Menu và chuyển qua từng chế độ hiển thị.
2. Chuyển sang Material Preview, quan sát Cube mặc định dưới ánh sáng HDRI studio có sẵn.
3. Thêm một Sun Light (`Shift + A > Light > Sun`), chuyển sang Rendered Mode để thấy ánh sáng thực tế ảnh hưởng scene.
4. Vào Render Properties, thử chuyển qua lại giữa Eevee Next và Cycles, quan sát khác biệt tốc độ và chất lượng.
5. Bấm `F12` để render ảnh tĩnh; dùng `F3` (trong cửa sổ render) để lưu ảnh ra file.
6. Vào Color Management, thử đổi View Transform giữa Standard và AgX để thấy khác biệt tông màu.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Shading Pie Menu | `Z` |
| Wireframe | `Shift + Z` (toggle nhanh) |
| Toggle X-ray | `Alt + Z` |
| Render Image | `F12` |
| Đóng cửa sổ render | `Esc` |
| Lưu ảnh render | `F3` (trong cửa sổ Image render) |

## 5. Lưu ý & lỗi thường gặp

- Material Preview dùng ánh sáng studio giả lập (không phải light thật trong scene) — dễ gây nhầm lẫn khi chuyển sang Rendered và thấy scene bỗng tối om vì chưa có light.
- Cycles cho chất lượng cao nhưng có thể rất chậm nếu không bật GPU render device trong Preferences.
- Nhầm giữa `Render Image` (F12, ảnh tĩnh) và chế độ Rendered Viewport (xem trực tiếp, không xuất file) là lỗi phổ biến với người mới.
- View Transform khác nhau (Standard/AgX/Filmic) cho ra màu sắc rất khác nhau trên cùng một scene — cần chọn nhất quán trước khi đánh giá màu vật liệu.

## 6. Checklist thực hành

- [ ] Đã phân biệt được 4 chế độ hiển thị viewport.
- [ ] Đã render thử một ảnh bằng cả Eevee Next và Cycles.
- [ ] Đã dùng `F12` để render và lưu ảnh ra file.
- [ ] Đã thử đổi View Transform trong Color Management.

## 7. Tóm tắt

Bốn chế độ hiển thị viewport phục vụ các mục đích khác nhau trong quy trình làm việc, còn việc chọn đúng render engine (Eevee Next cho tốc độ, Cycles cho chất lượng) và cấu hình Color Management sẽ quyết định trực tiếp đến diện mạo cuối cùng của ảnh render.
