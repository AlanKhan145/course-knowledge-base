# Khóa học Blender: Chuẩn bị robot Mech cho Rigging

## Giới thiệu

Một mô hình robot có thể trông hoàn chỉnh khi render nhưng vẫn chưa sẵn sàng để tạo hệ xương và chuyển động. Các bộ phận đối xứng có thể còn phụ thuộc vào `Mirror Modifier`, chi tiết có thể nằm chung một object dù cần xoay độc lập, và danh sách object có thể khó quản lý.

Khóa học này hướng dẫn **tiền xử lý một robot Mech khoa học viễn tưởng trước công đoạn rigging**: chuyển những modifier cần thiết thành hình học thực, gộp hoặc tách object theo chuyển động, giữ vật liệu và `Bevel Modifier` hợp lý, rồi tổ chức scene rõ ràng. Phạm vi dừng ở việc **chuẩn bị mô hình**; không hướng dẫn tạo armature, weight painting hay walk cycle.

## Kết quả đầu ra

Sau khi hoàn thành, người học có thể:

- Phân biệt khi nào cần **Apply** `Mirror`/`Solidify` và khi nào nên giữ `Bevel`.
- Chuyển `Curve` thành `Mesh` để ghép được với bộ phận robot khác.
- Tách các chi tiết trái/phải thành object độc lập để sẵn sàng gán chuyển động.
- Gộp các thành phần luôn chuyển động cùng nhau thành một cụm.
- Đặt tên object, tách collection cho đèn và ảnh tham khảo, kiểm tra mesh trước rigging.

## Yêu cầu đầu vào

- Biết dùng `Object Mode`, `Edit Mode`, `Outliner` và bảng `Modifiers` trong Blender.
- Có mô hình robot Mech với thân, đầu, chân, các khớp, chi tiết trang trí; vật liệu đã được thiết lập.
- Lưu một bản sao tệp `.blend` trước khi thực hiện các thao tác **Apply**, **Join**, **Separate** và xóa object.

## Lộ trình học

| Bài | Chủ đề | Loại | Kết quả cụ thể |
| --- | --- | --- | --- |
| [01](01_modifiers_va_hinh_hoc_thuc.md) | Modifier và hình học thực | Lesson | Kiểm soát `Mirror`, `Solidify`, `Bevel` |
| [02](02_gop_mesh_va_chuyen_curve.md) | Gộp Mesh và chuyển Curve | Lesson | Gộp đầu, cổ, thân đúng cách |
| [03](03_tach_chi_tiet_doi_xung.md) | Tách bộ phận đối xứng | Lesson | Tách các chi tiết trái/phải với `P > Selection` |
| [04](04_nhom_theo_chuyen_dong.md) | Nhóm object theo chuyển động | Lesson | Phân nhóm khớp hông, đùi, cẳng chân, mắt cá và bàn chân |
| [05](05_to_chuc_scene_va_dat_ten.md) | Tổ chức scene và đặt tên | Lesson | Scene gọn, dễ xác định từng cụm |
| [06](06_lab_hoan_thien_va_kiem_tra.md) | Lab: Kiểm tra đầu ra trước rigging | Lab | Tệp `.blend` sạch, tách/ghép đúng, có checklist |

## Quy ước thực hành

- **Object** là đối tượng trong scene; **Mesh** là dữ liệu hình học; `Ctrl + J` tạo **một object** từ các object được chọn, **không tự hàn các đỉnh**.
- Các cụm robot được quyết định theo nguyên tắc: **di chuyển cùng nhau thì có thể gộp; phải quay độc lập thì cần tách**.
- Ví dụ tên `Head`, `Body`, `Upper_Leg_Left` là nhãn tham khảo; người học cần thống nhất quy ước trái/phải trước khi đặt tên toàn bộ.
- Các thao tác và phím tắt trong bài dựa trên quy trình Blender thông dụng. Vị trí menu có thể thay đổi theo phiên bản hoặc keymap; ưu tiên tên lệnh được ghi kèm phím tắt.

## Cách học

Học lần lượt từ bài 01 đến bài 05, thử thao tác trực tiếp trên bản sao mô hình, sau đó hoàn thành bài lab 06. Mỗi bài độc lập, có hướng dẫn, lỗi dễ gặp và **5 câu trắc nghiệm kèm đáp án, giải thích**. Bài lab yêu cầu tự đánh giá chất lượng scene trước khi chuyển sang rigging.
