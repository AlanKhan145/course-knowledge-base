# 037 — Array Modifier and Curves

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Array Modifier and Curves |
| **Thời lượng** | 9:52 |
| **Chủ đề chính** | Cho chuỗi Array chạy theo đường Curve |

## 1. Mục tiêu bài học

- Hiểu cách Curve Modifier biến dạng một mesh để nó bám theo hình dạng của một Curve object.
- Kết hợp Array Modifier và Curve Modifier để tạo chuỗi mắt xích (dây xích, xúc tu) chạy dọc theo một đường cong tùy ý.
- Biết chỉnh sửa Bezier curve (control points, handles) để định hình lại toàn bộ chuỗi mà không cần sửa từng mắt xích.
- Nắm được thứ tự đúng của các modifier trong stack khi kết hợp Array và Curve.

## 2. Nội dung chính

Bài học giới thiệu **Curve Modifier** (Add Modifier > Deform > Curve): modifier này lấy một Curve object làm đối tượng tham chiếu (trường **Object**) và uốn mesh đang được áp modifier theo hình dạng của đường cong đó, dọc theo trục được chỉ định (mặc định trục X hoặc theo trục Deform Axis chọn trong modifier).

Ứng dụng kinh điển: dựng một **mắt xích dây (rope/chain link)** hoặc **đốt xúc tu (tentacle segment)** — một mesh nhỏ đại diện cho một đơn vị lặp lại. Quy trình gồm hai modifier xếp chồng:

1. **Array Modifier** trước tiên nhân bản mắt xích theo một trục thẳng (Relative Offset theo trục local của mesh, ví dụ trục X) để tạo một chuỗi thẳng dài gồm nhiều mắt xích nối tiếp.
2. **Curve Modifier** đặt ngay bên dưới Array trong stack, tham chiếu đến một Bezier Curve đã vẽ sẵn trong scene. Modifier này "uốn" toàn bộ chuỗi thẳng vừa tạo theo đúng hình dạng của đường cong.

Thứ tự này bắt buộc: nếu đảo ngược (Curve trước, Array sau), Array sẽ nhân bản dựa trên mesh đã bị uốn cong, cho kết quả méo mó và khó kiểm soát vì mỗi bản sao sẽ lặp lại độ cong cục bộ thay vì toàn bộ chuỗi bám theo đường cong tổng thể.

Một tính năng hữu ích của Array trong trường hợp này là chế độ **Fit Curve** (trong panel Array > Fit Type): thay vì đặt Count cố định, Fit Curve tự động tính số bản sao cần thiết để lấp đầy chiều dài của đường cong tham chiếu, giúp chuỗi luôn khớp độ dài khi curve được chỉnh sửa.

Vì Curve Modifier chỉ biến dạng theo hình dạng hiện tại của Curve object, người dùng có thể **chỉnh sửa các control point và handle của Bezier curve** (vào Edit Mode trên Curve, kéo các điểm neo và tay cầm) để thay đổi hoàn toàn quỹ đạo của cả chuỗi mắt xích mà không cần đụng vào mesh gốc — đây là bản chất "procedural" của kỹ thuật này, rất hữu ích khi cần lặp lại thử nghiệm hình dáng (dây thừng vắt qua vật thể, xúc tu uốn lượn quanh chướng ngại vật).

## 3. Quy trình thực hành gợi ý

1. Model một mắt xích hoặc đốt xúc tu đơn giản, căn Origin tại một đầu mesh (nơi nối với mắt xích tiếp theo).
2. Vẽ một Bezier Curve (`Shift + A > Curve > Bezier`) theo quỹ đạo mong muốn.
3. Trên mắt xích, thêm Array Modifier, chỉnh Relative Offset theo trục nối tiếp (thường X), tăng Count hoặc chuyển Fit Type sang Fit Curve và gán Curve object tương ứng.
4. Thêm Curve Modifier bên dưới Array trong stack, gán Object là Curve vừa vẽ, kiểm tra Deform Axis đúng hướng dọc theo chuỗi.
5. Đảm bảo trục local của mắt xích (thường X) khớp với hướng Deform Axis của Curve Modifier.
6. Vào Edit Mode trên Curve, kéo các control point/handle để thử nghiệm thay đổi hình dạng toàn bộ chuỗi.
7. Nếu chuỗi bị xoay/lật sai hướng, thử đổi Deform Axis trong Curve Modifier (X, Y, Z hoặc các trục âm).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Bezier Curve | `Shift + A > Curve > Bezier` |
| Vào Edit Mode chỉnh Curve | `Tab` (khi Curve đang được chọn) |
| Kéo tay cầm (handle) control point | Chọn handle, `G` để di chuyển |
| Thêm control point mới trên Curve | `Ctrl + Click` (khi ở chế độ vẽ Curve) hoặc Extrude `E` |
| Đổi Fit Type của Array | Panel Modifier > Array > Fit Type |

## 5. Lưu ý & lỗi thường gặp

- Đặt sai thứ tự modifier (Curve trước Array) khiến chuỗi bị biến dạng sai hoàn toàn.
- Origin của mắt xích không nằm đúng tại điểm nối khiến các bản sao chồng lấn hoặc hở khoảng trống lớn.
- Trục local của mesh không khớp với Deform Axis của Curve Modifier khiến chuỗi bị uốn theo hướng vuông góc không mong muốn.
- Curve quá ít control point khiến đường cong bị "cứng", chuỗi mắt xích trông không tự nhiên tại các đoạn bẻ gấp.
- Quên rằng Fit Curve tự tính Count — nếu vẫn để Count thủ công, chuỗi có thể ngắn hơn hoặc dài hơn đường cong thực tế.

## 6. Checklist thực hành

- [ ] Mắt xích/đốt xúc tu có Origin đặt đúng tại điểm nối tiếp.
- [ ] Array Modifier tạo được chuỗi thẳng nhiều bản sao nối liền mạch.
- [ ] Curve Modifier (đặt dưới Array) uốn chuỗi bám đúng theo hình dạng Curve.
- [ ] Đã thử chỉnh control point của Curve và thấy toàn bộ chuỗi cập nhật theo thời gian thực.

## 7. Tóm tắt

Xếp chồng Array Modifier (nhân bản thẳng) phía trên Curve Modifier (uốn theo đường cong) cho phép tạo các chuỗi đối tượng lặp lại — dây xích, xúc tu, ống dẫn — bám theo bất kỳ quỹ đạo Bezier nào, và toàn bộ hình dạng có thể tinh chỉnh lại chỉ bằng cách kéo control point của Curve.
