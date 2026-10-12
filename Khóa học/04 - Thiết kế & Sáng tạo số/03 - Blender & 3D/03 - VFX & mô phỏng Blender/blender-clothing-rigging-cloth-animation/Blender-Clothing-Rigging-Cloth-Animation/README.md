# Khóa học Blender — Rigging trang phục, mô phỏng vải và hoạt ảnh nhân vật

## Tổng quan

Khóa học hướng dẫn xử lý **quần áo, váy, áo choàng, tay áo và phụ kiện** của nhân vật 3D từ khi canh mesh lên cơ thể tới lúc làm animation, mô phỏng Cloth và chuẩn bị xuất video hoặc game. Lộ trình chia thành bốn module; mỗi bài `.md` đọc độc lập, có mục tiêu, giải thích, quy trình, thực hành và năm câu trắc nghiệm kèm giải thích.

**Đầu vào thực hành:** Một nhân vật đã có armature (Rigify hoặc Mixamo), các mesh trang phục tương ứng và Blender. Đối với bài chuyển đổi kết quả thành FBX, cần một project kiểm tra đầu ra. Không bắt buộc có asset trả phí; có thể dựng mesh đơn giản để học đúng cơ chế.

**Nguyên tắc:** Không có một bộ thông số Cloth dùng chung cho mọi model. Luôn kiểm tra scale, rest pose, topology, weight, collider, sau đó mới chỉnh solver/bake. Một số mục menu có thể thay đổi theo phiên bản Blender.

## Mục lục

### Module 01 — Chuẩn bị nhân vật & gắn trang phục

Từ pipeline và animation Mixamo tới chỉnh form, bind và Weight Paint.

- [Bài 01: Tổng quan pipeline trang phục nhân vật 3D](./Module_01_Chuan_bi_va_gan_trang_phuc/01-tong-quan-pipeline.md)
- [Bài 02: Chuẩn bị nhân vật, Mixamo và đoạn animation ổn định ban đầu](./Module_01_Chuan_bi_va_gan_trang_phuc/02-mixamo-pose-va-timeline.md)
- [Bài 03: Chỉnh mesh trang phục vừa nhân vật bằng Sculpt và Shrinkwrap](./Module_01_Chuan_bi_va_gan_trang_phuc/03-fit-trang-phuc.md)
- [Bài 04: Gắn áo, váy và giày vào Rig với Weight Paint](./Module_01_Chuan_bi_va_gan_trang_phuc/04-skin-weight-paint.md)

### Module 02 — Rig váy, tay áo & phụ kiện

Dựng DEF/MCH/CTRL, ràng buộc và kiểm soát animation thủ công.

- [Bài 05: Tạo hệ xương DEF cho váy và liên kết rig nhân vật](./Module_02_Rig_vay_tay_ao_phu_kien/05-bone-def-va-symmetry.md)
- [Bài 06: Thiết kế xương CTRL/MCH và hệ ràng buộc điều khiển váy](./Module_02_Rig_vay_tay_ao_phu_kien/06-control-mch-constraints.md)
- [Bài 07: Hoạt ảnh chân váy thủ công theo bước đi và động tác múa](./Module_02_Rig_vay_tay_ao_phu_kien/07-animate-vay-thu-cong.md)
- [Bài 08: Rig phụ kiện, dây đeo, váy tự động và tay áo rộng](./Module_02_Rig_vay_tay_ao_phu_kien/08-tay-ao-tui-day-deo.md)

### Module 03 — Cloth Simulation & va chạm

Tạo topology, Pin, vật liệu vải, collider và xử lý nhiều lớp.

- [Bài 09: Cloth Simulation cơ bản và nhóm đỉnh ghim vải](./Module_03_Cloth_Simulation_va_Collision/09-cloth-pin-co-ban.md)
- [Bài 10: Điều chỉnh độ cứng, giảm chấn, Self Collision và chất lượng mô phỏng](./Module_03_Cloth_Simulation_va_Collision/10-tham-so-vat-lieu.md)
- [Bài 11: Collider cơ thể, bản sao va chạm và sửa xuyên vải](./Module_03_Cloth_Simulation_va_Collision/11-collider-va-phan-than.md)
- [Bài 12: Mô phỏng trang phục nhiều lớp: quần, áo thun và áo khoác](./Module_03_Cloth_Simulation_va_Collision/12-cloth-nhieu-lop.md)

### Module 04 — Kết hợp, Bake & dự án

Rig lai, chuyển mô phỏng sang xương, ghép clip và bài cuối khóa.

- [Bài 13: Kết hợp Armature và Cloth trên áo choàng](./Module_04_Hybrid_Bake_va_Du_an/13-armature-cloth-hybrid.md)
- [Bài 14: Chuyển chuyển động Cloth sang keyframe xương để xuất game](./Module_04_Hybrid_Bake_va_Du_an/14-cloth-sang-bone-animation.md)
- [Bài 15: Ghép nhiều động tác, cache, vật liệu và xuất video](./Module_04_Hybrid_Bake_va_Du_an/15-multi-action-bake-render.md)
- [Bài 16: Dự án cuối khóa — Nhân vật mặc váy, áo choàng và phụ kiện chuyển động](./Module_04_Hybrid_Bake_va_Du_an/16-du-an-cuoi-khoa.md)

## Tài liệu hỗ trợ

- [Bảng thuật ngữ Blender](./Tai_lieu_bo_tro/Bang_thuat_ngu.md)
- [Bảng chẩn đoán lỗi thường gặp](./Tai_lieu_bo_tro/Chuan_doan_loi.md)
- [Bảng kiểm và tiến độ khóa học](./Tien_do_khoa_hoc.md)
- [Phạm vi biên soạn](./Tai_lieu_bo_tro/Pham_vi_noi_dung.md)

## Cách học

1. Hoàn thành các checkpoint bài 01–04 trên nhân vật đơn giản.
2. Dựng một bộ xương điều khiển váy ở bài 05–08 trước khi thêm physics.
3. Thử Cloth trên plane, sau đó lên một món trang phục, cuối cùng mới chạy nhiều lớp.
4. Hoàn thiện cape lai, bake và kiểm tra đầu ra ở bài 13–16.

Mỗi lần sửa rig hoặc solver, hãy lưu bản scene và phát lại các tư thế thử. Đáp án trắc nghiệm được đặt cuối mỗi câu để có thể tự học offline.
