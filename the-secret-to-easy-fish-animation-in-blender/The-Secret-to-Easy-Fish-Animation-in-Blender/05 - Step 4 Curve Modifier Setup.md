# 05 — Bước 4: Cho cá bám theo Curve bằng Curve Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Step four |
| **Thời điểm** | 02:09–02:38 |
| **Chủ đề chính** | Curve Modifier, trục biến dạng (Deform Axis), Resolution Preview U |

## 1. Mục tiêu bài học

- Hiểu cách **Curve Modifier** khác với Follow Path constraint: nó vừa di chuyển vừa **uốn cong hình dạng mesh** theo Curve.
- Gắn đúng Curve Modifier lên object cá và trỏ đến Curve đã tạo ở chương 02.
- Biết di chuyển object dọc đúng trục biến dạng để cá "trượt" theo Curve, và khắc phục hiện tượng mesh bị góc cạnh bằng cách tăng Resolution Preview U của Curve.

## 2. Nội dung chính

Khác với kỹ thuật phổ biến dùng **Follow Path constraint** (chỉ di chuyển vị trí/hướng object mà không làm biến dạng chính mesh), video này dùng **Curve Modifier** (Modifier Properties > Add Modifier > Deform > Curve) — một modifier **uốn cong toàn bộ hình dạng mesh** theo đường đi của Curve, giống như "gắn" mesh vào một sợi dây rồi bẻ cong sợi dây đó. Đây chính là lý do kỹ thuật này hiệu quả cho việc vừa di chuyển vừa làm thân cá uốn lượn tự nhiên theo quỹ đạo — chỉ với một modifier duy nhất.

Cách gắn: chọn object cá, thêm **Curve Modifier**, gán trường **Curve Object** trỏ vào Curve đã tạo ở chương 02 (tác giả gợi ý đổi tên Curve thành "Path" cho dễ quản lý). Sau khi gắn, cá chưa tự di chuyển ngay — cần **di chuyển object cá dọc theo trục biến dạng (Deform Axis)** mà modifier đang dùng (mặc định thường là trục X) để nó "trượt" dọc theo hình dạng Curve; khi di chuyển trên đúng trục này, mesh sẽ tự động uốn cong theo hình dạng Curve tại vị trí tương ứng.

Một vấn đề thường gặp ngay sau khi setup: khi di chuyển cá dọc Curve, mesh xuất hiện các **đường/mặt gấp khúc rõ rệt** (faceted, không mượt) dọc theo thân — nguyên nhân là Curve mặc định chỉ được tính toán với **độ phân giải xem trước (Resolution Preview U) thấp**, khiến đường cong "thực tế" mà modifier dùng để tính toán biến dạng bị gãy khúc thay vì mượt liên tục. Cách khắc phục: chọn Curve, vào **Object Data Properties (icon Curve)**, tìm mục **Shape > Resolution Preview U**, và **tăng giá trị này** — Curve sẽ được tính với nhiều điểm nội suy hơn, làm cho cả hình dạng Curve lẫn độ uốn của thân cá qua Curve Modifier trở nên mượt mà hơn hẳn.

## 3. Quy trình thực hành gợi ý

1. Chọn object cá, thêm Curve Modifier (Add Modifier > Deform > Curve).
2. Gán trường Curve Object của modifier trỏ vào Curve đã tạo ở chương 02 (tùy chọn: đổi tên Curve thành "Path").
3. Xác định trục biến dạng (Deform Axis) mà modifier đang dùng (kiểm tra trong panel modifier).
4. Di chuyển object cá dọc đúng trục đó và quan sát: cá sẽ trượt dọc theo hình dạng Curve.
5. Nếu thấy mặt/đường gấp khúc dọc thân cá khi di chuyển, chọn Curve, vào Object Data Properties > Shape > Resolution Preview U, tăng giá trị cho đến khi mesh mượt trở lại.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Thêm Curve Modifier | Modifier Properties > Add Modifier > Deform > Curve |
| Chọn Curve Object cho modifier | Panel Curve Modifier > trường "Curve Object" |
| Đổi trục biến dạng (Deform Axis) | Panel Curve Modifier > "Deform Axis" |
| Tăng độ mượt hiển thị/tính toán của Curve | Object Data Properties (icon Curve) > Shape > Resolution Preview U |

## 5. Lưu ý & lỗi thường gặp

- Nếu di chuyển cá mà không thấy nó bám theo Curve, khả năng cao đang di chuyển sai trục — cần kiểm tra và khớp đúng Deform Axis của modifier với trục đang thao tác trong viewport.
- Resolution Preview U quá thấp là nguyên nhân phổ biến nhất gây mặt gấp khúc; đừng nhầm lẫn với lỗi mesh hoặc lỗi Decimate ở chương trước.
- Kỹ thuật Curve Modifier yêu cầu **model là một object duy nhất** (đã nhấn mạnh lại ở phần bonus cuối video) — nếu cá gồm nhiều object rời (thân, vây, mắt tách riêng), cần gộp lại (`Ctrl + J`) trước khi gắn modifier, nếu không các phần sẽ không uốn đồng bộ với nhau.
- Resolution Preview U quá cao trên Curve dài/phức tạp có thể ảnh hưởng nhẹ đến hiệu năng viewport — chỉ cần tăng đến mức đủ mượt, không cần tối đa tuyệt đối.

## 6. Checklist thực hành

- [ ] Đã thêm Curve Modifier lên object cá và gán đúng Curve Object.
- [ ] Đã xác định đúng Deform Axis và di chuyển cá dọc trục đó để nó bám theo Curve.
- [ ] Đã tăng Resolution Preview U của Curve để khắc phục hiện tượng mesh gấp khúc.
- [ ] Đã xác nhận cá là một object duy nhất (đã Join nếu cần) trước khi tiếp tục.

## 7. Tóm tắt

Curve Modifier là trung tâm của toàn bộ kỹ thuật: chỉ với một modifier, việc di chuyển object dọc đúng trục biến dạng vừa tạo ra chuyển động dọc quỹ đạo vừa tự động uốn cong hình dạng thân cá theo đúng độ cong của Curve — nền tảng cho các bước animate nhịp bơi tự nhiên ở các chương tiếp theo.
