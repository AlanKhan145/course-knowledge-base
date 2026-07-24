# 064 — Texturing the Wings

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Texturing the Wings |
| **Thời lượng** | 8:43 |
| **Chủ đề chính** | Tạo texture cho cánh |

## 1. Mục tiêu bài học
- Thiết lập Material và Shader Node cơ bản cho cánh máy bay bằng Principled BSDF.
- Gán Image Texture khớp với UV đã unwrap ở bài trước.
- Hiểu vai trò của các map bổ sung: Base Color, Roughness, Normal Map (nếu có) trong việc tăng độ chi tiết bề mặt cánh.
- Kiểm tra kết quả texture trong Material Preview / Rendered Shading.

## 2. Nội dung chính
Sau khi có UV hoàn chỉnh, bước texturing bắt đầu bằng việc tạo Material mới cho cánh trong Shader Editor. Node gốc của mọi vật liệu PBR trong Blender là **Principled BSDF**, kết nối tới output **Material Output**. Để đưa hình ảnh texture lên bề mặt, cần thêm node **Image Texture**, nạp file ảnh (ví dụ texture kim loại/sơn máy bay), và nối đầu ra Color vào input Base Color của Principled BSDF.

Vì UV đã được unwrap đúng ở bài trước, Image Texture sẽ tự động ánh xạ theo UV Map mặc định của object — không cần thêm node UV Map trừ khi object có nhiều UV Map và cần chỉ định rõ map nào được dùng.

Ngoài Base Color, có thể tăng độ chân thực bằng:
- **Roughness map hoặc giá trị Roughness thủ công:** kiểm soát độ bóng/mờ của bề mặt (sơn cánh máy bay thường có độ bóng vừa phải, khác với kim loại trần).
- **Normal Map:** nếu có ảnh normal map, dùng thêm node **Normal Map** trước khi nối vào input Normal của Principled BSDF, giúp bề mặt trông có chi tiết lồi lõm (đinh tán, đường ghép panel) mà không cần thêm hình học thật.
- **Metallic:** với các chi tiết kim loại trên cánh (viền, bản lề), có thể tăng giá trị Metallic cục bộ bằng cách kết hợp mask hoặc Image Texture riêng.

Sau khi thiết lập xong, chuyển Viewport Shading sang **Material Preview** hoặc **Rendered** để xem trước kết quả gần với ảnh render thật, kiểm tra texture có bị lệch, kéo dãn hay lặp lại bất thường không.

## 3. Quy trình thực hành gợi ý
1. Chọn object cánh (hoặc phần mesh cánh nếu material áp theo Face/Material Slot), mở Shading workspace.
2. Tạo Material mới, đặt tên rõ ràng (ví dụ "Wing_Material").
3. Thêm node Image Texture, nạp ảnh texture cánh, nối Color vào Base Color của Principled BSDF.
4. Điều chỉnh Roughness (giá trị số hoặc map) cho phù hợp với chất liệu sơn/kim loại của cánh.
5. Nếu có Normal Map, thêm node Normal Map, nạp ảnh, nối vào input Normal của Principled BSDF.
6. Chuyển Viewport Shading sang Material Preview để kiểm tra kết quả trực quan trên toàn bộ cánh.
7. Quay lại UV Editor nếu phát hiện texture bị lệch, chỉnh sửa island tương ứng.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+A` (trong Shader Editor) | Thêm node mới (Image Texture, Normal Map...) |
| `Ctrl+T` (khi chọn Image Texture node) | Tự động thêm Mapping + Texture Coordinate node |
| `Z` | Pie menu chuyển Viewport Shading |
| `N` (trong UV Editor) | Mở sidebar để kiểm tra thông tin UV |

## 5. Lưu ý & lỗi thường gặp
- Quên nối node Image Texture vào đúng input (Base Color) khiến vật liệu hiển thị màu xám mặc định của Principled BSDF.
- Ảnh texture có màu bị sai không gian màu (Color Space) — Base Color nên để "Color", còn Roughness/Normal map nên đặt "Non-Color" trong Image Texture node.
- UV bị méo từ bài trước sẽ lộ rõ khi áp texture thật, đặc biệt các texture có hoa văn kẻ thẳng (đường panel, chữ số hiệu).
- Không kiểm tra ở Rendered Shading (Eevee/Cycles) mà chỉ xem Material Preview có thể bỏ sót lỗi ánh sáng/material chỉ xuất hiện khi render thật.

## 6. Checklist thực hành
- [ ] Đã tạo Material và kết nối Image Texture vào Base Color của cánh.
- [ ] Đã thiết lập Roughness phù hợp với chất liệu cánh.
- [ ] Đã thêm Normal Map (nếu có) để tăng chi tiết bề mặt.
- [ ] Đã kiểm tra kết quả bằng Material Preview/Rendered Shading, không còn lỗi UV lệch.

## 7. Tóm tắt
Bài học thiết lập vật liệu và texture cho cánh máy bay bằng Shader Editor và Principled BSDF, tận dụng trực tiếp UV layout đã chuẩn bị, tạo tiền đề cho việc texturing phần thân ở bài tiếp theo.
