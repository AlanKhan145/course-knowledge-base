# 017 — The Modifiers

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | The Modifiers |
| **Thời lượng** | 6:42 |
| **Chủ đề chính** | Giới thiệu hệ thống Modifier không phá hủy |

## 1. Mục tiêu bài học

- Hiểu khái niệm modifier như một thao tác không phá hủy (non-destructive) tách biệt với mesh gốc.
- Biết thêm modifier qua Properties > tab cờ lê (Modifier Properties).
- Hiểu vì sao thứ tự các modifier trong stack quan trọng.
- Làm quen bốn modifier nền tảng: Array, Bevel, Subdivision Surface, Mirror.

## 2. Nội dung chính

Một **Modifier** là một phép biến đổi hình học được tính toán "phía trên" mesh gốc mà không thay đổi dữ liệu vertex/edge/face thực sự trong Edit Mode — người dùng có thể tắt/bật, chỉnh thông số hoặc xóa modifier bất cứ lúc nào mà không mất dữ liệu gốc. Modifier được quản lý trong **Modifier Properties** (icon hình cờ lê trong Properties Editor), thêm mới qua nút "Add Modifier".

Các modifier xếp chồng thành một **stack** và được tính toán tuần tự từ trên xuống dưới — thứ tự ảnh hưởng trực tiếp đến kết quả cuối. Ví dụ Subdivision Surface đặt trước Mirror sẽ làm mượt riêng từng nửa trước khi ghép, trong khi đặt sau Mirror sẽ làm mượt luôn cả đường nối giữa, cho kết quả liền mạch hơn. Modifier có thể sắp xếp lại bằng kéo-thả hoặc menu chevron (mũi tên xuống) > Move Up/Down.

Bốn modifier được giới thiệu làm nền tảng: **Array** (nhân bản đối tượng theo khoảng cách/số lượng lặp lại đều đặn), **Bevel** (tự động vát toàn bộ cạnh thỏa điều kiện góc/weight, tương đương chạy Bevel thủ công trên nhiều cạnh cùng lúc, nhưng không phá hủy), **Subdivision Surface** (chia nhỏ và làm mượt mesh theo thuật toán Catmull-Clark, biến low-poly cứng thành hình dạng bo tròn mượt mà), và **Mirror** (đối xứng hình học qua một trục, cho phép chỉ cần model một nửa đối tượng).

Modifier chỉ là "preview" cho đến khi **Apply** (trong menu chevron của modifier, hoặc `Ctrl + A` khi hover chuột trên modifier) — sau khi Apply, kết quả được ghi vĩnh viễn vào mesh và không thể chỉnh lại thông số modifier nữa.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube, vào Modifier Properties, Add Modifier > Generate > Subdivision Surface, tăng Viewport Levels lên 2-3 và quan sát hình khối bo tròn dần.
2. Xóa nửa Cube trong Edit Mode, thêm Mirror Modifier, chọn đúng trục X/Y/Z để dựng lại nửa còn lại tự động.
3. Kéo Mirror lên trên Subdivision Surface trong stack, quan sát sự khác biệt ở đường nối giữa so với khi để Mirror ở dưới.
4. Thêm Array Modifier vào một Cube dẹt, tăng Count và chỉnh Relative Offset để thấy các bản sao xếp hàng.
5. Thêm Bevel Modifier vào một mesh có cạnh sắc, tăng Amount và Segments, so sánh với việc Bevel thủ công trong Edit Mode.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Modifier Properties | Click icon cờ lê trong Properties Editor |
| Thêm modifier | Nút "Add Modifier" |
| Apply modifier (khi hover chuột trên modifier) | `Ctrl + A` |
| Di chuyển modifier trong stack | Kéo-thả biểu tượng `::` hoặc menu chevron |
| Ẩn/hiện modifier trong viewport/render | Icon màn hình / icon máy ảnh trên mỗi modifier |

## 5. Lưu ý & lỗi thường gặp

- Đổi thứ tự modifier có thể thay đổi hoàn toàn kết quả — luôn kiểm tra lại hình dạng sau khi sắp xếp lại stack.
- Apply modifier là thao tác không thể hoàn tác dễ dàng (ngoài Ctrl+Z ngay lúc đó) — chỉ nên Apply khi chắc chắn không cần chỉnh sửa thông số nữa.
- Mirror Modifier yêu cầu đối tượng gốc phải đúng vị trí Origin tại trục đối xứng, nếu không nửa còn lại sẽ bị lệch.
- Modifier có thể làm tăng số lượng polygon rất nhanh (đặc biệt Subdivision Surface và Array kết hợp) — cần theo dõi Statistics overlay để tránh máy bị chậm.

## 6. Checklist thực hành

- [ ] Đã thêm và tinh chỉnh được Subdivision Surface trên một mesh.
- [ ] Đã dựng được một nửa đối tượng và dùng Mirror để hoàn thiện.
- [ ] Đã quan sát sự khác biệt khi đổi thứ tự Mirror và Subdivision Surface.
- [ ] Đã thử Array và Bevel Modifier trên các đối tượng riêng.
- [ ] Hiểu rõ khi nào nên và không nên Apply một modifier.

## 7. Tóm tắt

Modifier là nền tảng của quy trình làm việc không phá hủy trong Blender — hiểu rõ cách chúng xếp chồng và ảnh hưởng lẫn nhau là điều kiện tiên quyết để khai thác hiệu quả các modifier chuyên sâu hơn ở Module 05.
