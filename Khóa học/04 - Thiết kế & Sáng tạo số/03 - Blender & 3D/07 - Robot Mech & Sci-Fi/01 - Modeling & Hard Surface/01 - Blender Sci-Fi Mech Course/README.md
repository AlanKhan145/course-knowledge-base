# Khóa học Blender: Dựng thân và ba lô robot Mech Sci-Fi

## 1. Giới thiệu

Khóa học hướng dẫn dựng **phần thân (torso), khoang cơ khí và ba lô (backpack) của một robot Mech** bằng các kỹ thuật hard-surface modeling trong Blender. Học viên làm việc theo hướng dựng hình từ khối cơ bản, tạo các chi tiết lồi/lõm, hoàn thiện thiết bị gắn sau lưng và bổ sung ống dẫn, đèn, bu lông.

Đây là **một học phần độc lập, giới hạn ở phần thân và ba lô robot**; không bao gồm toàn bộ quy trình tạo đầu, tay, chân, rigging, animation, UV, texture hay render hoàn chỉnh. Nếu đã có mesh đầu robot, có thể tận dụng làm hình tham chiếu và nguồn modifier; nếu chưa, chỉ cần hình tham chiếu nhìn trước/bên/sau và một khối mô phỏng đầu để xác định tỉ lệ.

## 2. Mục tiêu đầu ra

Sau khi hoàn thành, học viên có thể:

- Thiết lập và kiểm tra `Mirror` với `Clipping`, chuyển modifier giữa các đối tượng.
- Tạo thân robot đối xứng bằng `Loop Cut`, `Extrude`, `Inset`, `Bevel`, `Duplicate`.
- Xử lý vùng bị lỗi shading, tính lại normals, kiểm tra bề mặt và topology.
- Dùng `Knife` khi `Loop Cut` không thể đi qua một vùng nhiều cạnh vát.
- Dựng ba lô, hộp lưu trữ, bình chứa, đai kẹp và khoang cơ khí.
- Tạo ống 3D bằng `Bezier Curve` với `Bevel Depth`, độ phân giải và gắn các đầu nối.
- Gắn chi tiết ánh sáng, lỗ thông gió, bu lông bằng `Separate`, `Join`, `Snap`, `Duplicate`.

## 3. Lộ trình học

| Bài | Chủ đề | Sản phẩm cần đạt |
| --- | --- | --- |
| 01 | Thiết lập thân máy và Mirror | Nửa thân robot có đối xứng đúng |
| 02 | Tạo dáng ngực và cấu trúc lồi | Silhouette thân có lớp giáp |
| 03 | Bevel, Inset và xử lý shading | Bề mặt thân sạch, có panel |
| 04 | Khoang lõm và chi tiết cơ khí | Ngực/bụng có hốc, giá đỡ, khe tản nhiệt |
| 05 | Khối chính ba lô và Knife | Backpack có hình khối và mặt vát |
| 06 | Hộp chứa và mô-đun phía sau | Ba lô có hộp phụ, ngàm và cụm chi tiết |
| 07 | Bình chứa, đai kẹp và pivot | Hai bình chứa và các vòng đai |
| 08 | Ống dẫn Bézier và đầu nối | Hệ thống ống nối bình với ba lô |
| 09 | Đèn, chi tiết vai và bu lông | Thân robot hoàn thiện ở mức dựng hình |
| 10 | Đồ án tổng hợp | Một file Blender có thể kiểm tra và bàn giao |

## 4. Cấu trúc thư mục

```text
Blender_SciFi_Mech_Course/
├── README.md
├── lessons/
│   ├── 01_Thiet_lap_than_va_Mirror.md
│   ├── 02_Dung_hinh_nguc_va_Extrude.md
│   ├── 03_Bevel_Inset_va_Shading.md
│   ├── 04_Khoang_co_khi_va_Thong_gio.md
│   ├── 05_Backpack_va_Knife_Tool.md
│   ├── 06_Hop_chua_va_Module_phu.md
│   ├── 07_Binh_chua_Dai_kep_Pivot.md
│   ├── 08_Bezier_Curve_va_Ong_dan.md
│   ├── 09_Den_Bu_long_va_Snapping.md
│   └── 10_Do_an_tong_hop.md
└── resources/
    ├── PHIM_TAT.md
    └── CHECKLIST_KIEM_TRA.md
```

## 5. Cách sử dụng

Đọc lần lượt các bài, thực hiện ngay trên Blender, lưu phiên bản `.blend` ở mỗi chặng và tự làm phần câu hỏi cuối bài. Các hướng dẫn dùng tên lệnh trong Blender và phím tắt theo keymap mặc định; cách hiện menu có thể khác giữa các phiên bản.

**Quy ước trục:** `X` = ngang trái/phải; `Y` = chiều sâu trước/sau; `Z` = lên/xuống. Hướng dương hoặc âm của trục `Y` phụ thuộc cách đặt mẫu trong cảnh, vì vậy ưu tiên đối chiếu ảnh tham chiếu thay vì đoán chiều.

**Lưu ý về phạm vi:** Không có kích thước vật lý được chỉ định. Hãy giữ tỉ lệ nhất quán giữa thân, ba lô và các phụ kiện thay vì nhập số đo tùy ý.
