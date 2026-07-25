# 042 — Surface Deform Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Surface Deform Modifier |
| **Thời lượng** | 7:16 |
| **Chủ đề chính** | Biến dạng một mesh theo chuyển động của mesh khác |

## 1. Mục tiêu bài học

- Hiểu cơ chế bind giữa mesh nguồn (Target) và mesh bị biến dạng.
- Biết quy trình Bind/Unbind của Surface Deform Modifier.
- Kết hợp Surface Deform với Cloth simulation để tăng độ chân thực cho vật thể bám bề mặt.

## 2. Nội dung chính

**Surface Deform Modifier** cho phép một mesh (ví dụ áo khoác, phụ kiện) tự động biến dạng theo đúng chuyển động/biến dạng của một mesh khác (ví dụ cơ thể nhân vật) mà không cần rig hay weight painting — miễn là mesh đích (Target) thay đổi hình dạng theo thời gian (animation, sculpt, hoặc Cloth simulation), mesh đang gắn modifier sẽ "bám" theo bề mặt đó.

Quy trình sử dụng gồm hai bước bắt buộc: (1) chỉ định **Target** là mesh nguồn, và (2) nhấn nút **Bind** để Blender ghi nhớ mối quan hệ giữa từng vertex của mesh hiện tại với bề mặt gần nhất của Target tại thời điểm bind — quan trọng là Target phải đang ở trạng thái "gốc" (chưa biến dạng) khi bind. Sau khi bind, bất kỳ thay đổi hình dạng nào của Target (dù do animation, sculpt, hay simulation) đều khiến mesh gắn modifier biến dạng theo tương ứng. Nếu cần chỉnh sửa lại vị trí gốc, phải **Unbind** trước, chỉnh sửa, rồi Bind lại.

Ứng dụng phổ biến nhất là kết hợp với **Cloth Simulation**: một tấm vải được mô phỏng rơi/phủ lên cơ thể nhân vật (Cloth), sau đó các chi tiết phụ kiện khác (dây buộc, túi nhỏ, nếp gấp trang trí) dùng Surface Deform để tự động bám theo hình dạng vải đã mô phỏng, thay vì phải chỉnh tay từng khung hình.

## 3. Quy trình thực hành gợi ý

1. Dựng một mesh cơ thể đơn giản (Target) và một mesh áo phủ lỏng lẻo bên ngoài.
2. Chọn mesh áo, thêm Surface Deform Modifier, chỉ định Target là mesh cơ thể, nhấn Bind.
3. Sculpt hoặc thêm Shape Key làm biến dạng nhẹ mesh cơ thể (Target), quan sát mesh áo tự động biến dạng theo.
4. Thử nghiệm quy trình Unbind > chỉnh sửa vị trí gốc > Bind lại.
5. (Nâng cao) Thêm Cloth Simulation cho mesh áo trước, sau đó Surface Deform một dây buộc nhỏ để nó bám theo bề mặt vải đã mô phỏng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Surface Deform Modifier | Modifier Properties > Add Modifier > Deform > Surface Deform |
| Chỉ định Target | Trường "Target" trong panel modifier |
| Bind / Unbind | Nút "Bind" trong panel modifier |

## 5. Lưu ý & lỗi thường gặp

- Bind khi Target đã bị biến dạng (không ở trạng thái gốc) sẽ khiến mối quan hệ bám bề mặt bị sai lệch ngay từ đầu.
- Chỉnh sửa topology (thêm/xóa vertex) của Target sau khi đã Bind sẽ làm hỏng liên kết — cần Unbind trước khi chỉnh sửa cấu trúc mesh Target.
- Vertex của mesh biến dạng nằm quá xa bề mặt Target có thể bám sai vào vùng bề mặt không mong muốn — nên giữ mesh biến dạng nằm sát bề mặt Target khi Bind.
- Kết hợp với Cloth Simulation cần đặt thứ tự modifier hợp lý và bake simulation trước khi các mesh phụ thuộc Surface Deform cho kết quả ổn định.

## 6. Checklist thực hành

- [ ] Đã Bind thành công một mesh với một mesh Target khác.
- [ ] Đã quan sát mesh bị biến dạng theo đúng thay đổi hình dạng của Target.
- [ ] Đã thực hiện được quy trình Unbind/Bind lại khi cần chỉnh sửa.
- [ ] Đã thử kết hợp Surface Deform với Cloth Simulation ở mức cơ bản.

## 7. Tóm tắt

Surface Deform Modifier là công cụ mạnh để các chi tiết phụ bám theo bề mặt biến dạng của một mesh chính mà không cần rig — đặc biệt hữu ích khi kết hợp với Cloth Simulation trong các cảnh có trang phục và phụ kiện phức tạp ở dự án cuối khóa.
