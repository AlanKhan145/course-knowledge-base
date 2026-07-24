# 042 — Inserting Background Images

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Inserting Background Images |
| **Thời lượng** | 4:42 |
| **Chủ đề chính** | Đưa ảnh tham chiếu vào Blender |

## 1. Mục tiêu bài học

- Hiểu cách chèn ảnh tham chiếu (reference image) vào viewport để làm nền cho modelling.
- Biết cách gán ảnh riêng cho từng góc nhìn (Front, Side, Top) bằng Empty > Image.
- Căn chỉnh đúng vị trí, tỉ lệ và độ trong suốt (Opacity) của ảnh nền.
- Khóa ảnh nền tránh bị chọn/di chuyển nhầm trong quá trình modelling.

## 2. Nội dung chính

Trong Blender, có hai cách phổ biến để đưa ảnh tham chiếu vào scene:

1. **Add > Image > Reference**: tạo một Empty kiểu Image chỉ hiển thị trong viewport, không render, không có mesh — lý tưởng để dựng hình theo.
2. **Add > Image > Background**: tương tự nhưng ảnh chỉ hiển thị khi nhìn đúng theo trục Orthographic (ví dụ Front/Side), phù hợp khi cần nhiều ảnh cho nhiều góc nhìn mà không bị chồng lấn.

Sau khi thêm ảnh, đối tượng Empty xuất hiện trong Outliner và có các thuộc tính riêng trong tab **Object Data Properties** (biểu tượng hình ảnh), gồm:

- **Depth**: đặt là *Front* (luôn hiển thị trước) hoặc *Back* để ảnh không che mất mesh khi modelling.
- **Opacity**: giảm độ mờ để dễ phân biệt ảnh nền với mesh đang dựng.
- **Size** và **Offset X/Y**: chỉnh tỉ lệ và vị trí ảnh cho khớp với gốc tọa độ (Origin) của scene.
- **Axis**: xác định ảnh nằm trên mặt phẳng nào (thường dùng cho ảnh Top).

Với dự án khủng long, thường cần ít nhất hai ảnh: một ảnh nhìn từ *Front* (đối xứng qua trục X) và một ảnh nhìn từ *Side* (để lấy đường viền cong của lưng, đuôi, chân). Đặt hai Empty ảnh vuông góc nhau, mỗi ảnh chỉ hiện rõ khi nhìn đúng view tương ứng (Numpad 1 cho Front, Numpad 3 cho Side).

## 3. Quy trình thực hành gợi ý

1. Chuẩn bị ảnh phác thảo khủng long (front view và side view), tốt nhất cùng tỉ lệ chiều cao.
2. Vào Front Orthographic (Numpad 1), dùng **Add > Image > Reference** để chèn ảnh front.
3. Vào Side Orthographic (Numpad 3), chèn tiếp ảnh side, xoay 90° quanh trục Z nếu cần để nằm đúng mặt phẳng YZ.
4. Trong Object Data Properties, chỉnh **Opacity** khoảng 0.5–0.7 và **Depth = Front** để nhìn xuyên qua khi modelling.
5. Canh chỉnh **Size**/**Offset** sao cho hai ảnh khớp tỉ lệ với nhau (đầu, chân chạm cùng một mốc trên cả hai ảnh).
6. Chọn cả hai Empty, nhấn Ctrl+A > khóa hoặc dùng biểu tượng ổ khóa trong Outliner để tránh chọn nhầm; có thể đặt vào Collection riêng và ẩn Select.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Numpad 1 / Ctrl+Numpad 1 | Front / Back Orthographic View |
| Numpad 3 / Ctrl+Numpad 3 | Right / Left Orthographic View |
| Numpad 7 | Top Orthographic View |
| Numpad 5 | Chuyển đổi Perspective/Orthographic |
| N | Mở/đóng N-panel để chỉnh Transform của Empty |
| G, R, S | Move / Rotate / Scale ảnh nền |
| Shift+A | Add > Image > Reference/Background |

## 5. Lưu ý & lỗi thường gặp

- Ảnh front và ảnh side không cùng tỉ lệ chiều cao sẽ khiến mesh bị méo khi dựng theo cả hai view.
- Quên đặt Depth = Front khiến ảnh bị mesh che khuất, khó nhìn theo trong Solid Shading.
- Không khóa Empty ảnh dễ dẫn đến việc vô tình chọn và di chuyển ảnh nền khi đang thao tác chọn mesh.
- Dùng ảnh có nền trong suốt (PNG) hoặc giảm Opacity để tránh ảnh nền lấn át hình khối 3D.
- Reference Image chỉ hiển thị trong viewport, không xuất hiện khi render — không cần lo ảnh lọt vào kết quả cuối.

## 6. Checklist thực hành

- [ ] Đã chèn ảnh Front bằng Add > Image > Reference.
- [ ] Đã chèn ảnh Side và xoay đúng mặt phẳng.
- [ ] Đã chỉnh Opacity và Depth = Front cho cả hai ảnh.
- [ ] Hai ảnh đã khớp tỉ lệ (cùng mốc chiều cao).
- [ ] Đã khóa hoặc ẩn Select cho các Empty ảnh nền.

## 7. Tóm tắt

Ảnh tham chiếu là nền tảng để dựng hình chính xác theo phác thảo. Việc chèn đúng cách bằng Empty > Image, căn chỉnh tỉ lệ và khóa lại giúp quá trình modelling khủng long ở các bài tiếp theo diễn ra thuận lợi và bám sát thiết kế gốc.
