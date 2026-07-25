# 039 — Shrinkwrap Modifier and Solidify

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Shrinkwrap Modifier and Solidify |
| **Thời lượng** | 7:47 |
| **Chủ đề chính** | Bọc mesh phẳng lên bề mặt vật thể khác và tạo độ dày |

## 1. Mục tiêu bài học

- Hiểu cách Shrinkwrap Modifier "dán" một mesh nguồn lên bề mặt của một mesh đích (target).
- Biết các phương pháp Wrap Method khác nhau của Shrinkwrap và khi nào dùng từng loại.
- Kết hợp Solidify Modifier để biến một mảnh phẳng đã bọc thành một dải có độ dày thực tế.
- Ứng dụng thực tế: tạo một dải băng quấn (bandage/wrap) hoặc chi tiết trang trí ôm theo bề mặt cong.

## 2. Nội dung chính

**Shrinkwrap Modifier** (Add Modifier > Deform > Shrinkwrap) làm biến dạng mesh nguồn sao cho các đỉnh của nó "bám" theo bề mặt của một object đích được chỉ định ở trường **Target**. Đây là cách nhanh để đặt một mảnh mesh phẳng — ví dụ một dải hình chữ nhật mỏng — ôm khít theo hình dạng cong của một object khác (thân bình, cánh tay nhân vật, vỏ xe...) mà không cần chỉnh tay từng đỉnh.

Các **Wrap Method** chính:

- **Nearest Surface Point**: mỗi đỉnh nguồn di chuyển tới điểm gần nhất trên bề mặt target — phù hợp cho hầu hết trường hợp bọc dán chung chung.
- **Project**: chiếu các đỉnh theo một trục (thường trục Z âm/dương của mesh nguồn) xuống bề mặt target, giống như "dập khuôn" — hữu ích khi cần kiểm soát hướng chiếu rõ ràng (ví dụ dải trang trí chiếu thẳng từ trên xuống một bề mặt cong).
- **Nearest Vertex**: bám theo đỉnh gần nhất của target thay vì bề mặt, ít mượt hơn nhưng nhanh.
- **Target Normal Project**: chiếu theo pháp tuyến của target, cho kết quả bám sát tự nhiên hơn Project thông thường.

Thông số **Offset** đẩy mesh nguồn ra khỏi bề mặt target một khoảng nhỏ theo pháp tuyến, tránh hiện tượng Z-fighting (hai bề mặt trùng khít gây nhấp nháy khi render).

Sau khi mesh phẳng đã bám khít theo hình dạng target nhờ Shrinkwrap, nó vẫn chỉ là một mặt phẳng không có độ dày (single-sided). **Solidify Modifier** (Add Modifier > Generate > Solidify) được thêm vào sau Shrinkwrap trong stack để cấp cho dải này một độ dày thực (**Thickness**), biến nó từ một mặt phẳng thành một khối 3D có bề dày — ví dụ một dải băng quấn hoặc một đường gờ trang trí nổi trên bề mặt.

Thứ tự modifier ở đây có ý nghĩa quan trọng: Shrinkwrap phải đứng **trước** Solidify trong stack — bám bề mặt trước, sau đó mới đắp dày — nếu đảo ngược, Solidify sẽ tạo độ dày trên mesh phẳng gốc trước khi nó được uốn theo target, khiến độ dày bị méo không đều khi Shrinkwrap biến dạng sau đó.

## 3. Quy trình thực hành gợi ý

1. Tạo một Plane, cắt/scale thành dải hình chữ nhật dài (subdivide đủ để bám cong mượt).
2. Định vị dải này gần bề mặt của object đích (ví dụ một hình trụ hoặc mesh hữu cơ).
3. Thêm Shrinkwrap Modifier trên dải, gán Target là object đích, chọn Wrap Method Nearest Surface Point (thử Project nếu cần kiểm soát hướng).
4. Tăng nhẹ Offset để tránh chồng mặt với bề mặt target.
5. Thêm Solidify Modifier ngay bên dưới Shrinkwrap trong stack, chỉnh Thickness cho hợp lý.
6. Kiểm tra Even Thickness trong Solidify nếu dải bị dày không đều tại các khúc cong gấp.
7. Quan sát kết quả từ nhiều góc, tăng subdivision của dải gốc nếu đường bám còn gồ ghề.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Subdivide mesh nguồn | `Right Click > Subdivide` (Edit Mode) |
| Mở Add Modifier | Properties Editor > tab Modifier |
| Sắp xếp lại thứ tự modifier | Kéo icon `::` (chấm 6 điểm) trong panel modifier, hoặc menu dropdown > Move Up/Down |
| Áp dụng modifier | `Ctrl + A` (menu Apply, Object Mode) |

## 5. Lưu ý & lỗi thường gặp

- Mesh nguồn không đủ subdivision khiến việc bám bề mặt cong bị gồ ghề, góc cạnh.
- Đặt Solidify trước Shrinkwrap trong stack khiến độ dày bị biến dạng không đều sau khi bám.
- Offset của Shrinkwrap bằng 0 dễ gây Z-fighting (nhấp nháy bề mặt) khi hai mesh trùng khít.
- Wrap Method không phù hợp (ví dụ dùng Nearest Vertex cho target có mật độ đỉnh thấp) khiến kết quả bám không mượt.
- Quên rằng Shrinkwrap chỉ tính theo mesh gốc, nếu Target cũng có modifier khác thì cần chú ý tùy chọn "Apply on Cage"/độ ưu tiên khi kết hợp nhiều modifier phức tạp hơn.

## 6. Checklist thực hành

- [ ] Dải mesh phẳng đã bám khít theo bề mặt cong của object đích.
- [ ] Không còn hiện tượng Z-fighting nhờ Offset hợp lý.
- [ ] Solidify tạo độ dày đều, hợp lý dọc theo toàn bộ dải.
- [ ] Thứ tự modifier đúng: Shrinkwrap trước, Solidify sau.

## 7. Tóm tắt

Shrinkwrap Modifier cho phép "dán" nhanh một mesh phẳng lên bề mặt cong của object khác mà không cần chỉnh tay, và khi kết hợp với Solidify đặt sau nó trong stack, kỹ thuật này tạo ra các chi tiết dải/trang trí có độ dày thực, ôm khít bề mặt một cách hoàn toàn tự động.
