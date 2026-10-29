# Bài 06 — Thuật ngữ song ngữ, đính chính lời thoại và nguồn học thêm

## 1. Bảng thuật ngữ Blender

| Tiếng Việt trong bài | Tên tiếng Anh trong Blender | Ý nghĩa |
|---|---|---|
| Chế độ điêu khắc | Sculpt Mode | Dùng cọ tác động hình học bề mặt |
| Topology động | Dyntopo / Dynamic Topology | Thay đổi chi tiết lưới khi sculpt |
| Cọ kéo dài | Snake Hook | Kéo hình học nhô ra theo nét cọ |
| Cọ kéo chỉnh khối | Grab | Di chuyển nhóm đỉnh trong bán kính cọ |
| Cọ đắp đất sét | Clay Strips | Thêm các dải thể tích tạo khối |
| Cọ khía rãnh | Crease / Crease Polish | Làm sắc/chìm các đường chuyển tiếp |
| Cọ đắp phồng | Blob | Tạo hiệu ứng phồng khi vẽ |
| Cọ bơm phồng | Inflate / Inflate-Deflate | Làm dày/phồng hoặc thu hẹp khối |
| Cọ làm mịn | Smooth | Giảm gồ ghề hình học |
| Mặt nạ | Mask | Hạn chế vùng chịu tác động sculpt |
| Hình chiếu biên | Silhouette | Đường bao tổng thể nhìn từ một góc |
| Dựng khối lớn | Blockout | Dựng tỷ lệ/thể tích trước chi tiết |
| Đi lưới lại | Retopology | Tổ chức topology phù hợp để sử dụng tiếp |

## 2. Hiệu đính quan trọng từ lời thoại tự động

- **“Dino Turbo”** → **Dyntopo**, không phải công cụ tăng tốc hay chế độ tô bóng.
- **“Dải đất sét / các dải chơi”** → **Clay Strips**.
- **“bàn chải blob”** → **Blob Brush**, dùng chủ yếu để tạo thể tích phồng.
- **“chuyển sang Shift+C”** → cách gọi cọ **Crease** trong ngữ cảnh Blender 2.8; keymap có thể đổi ở bản mới.
- **“Alt+M để xóa mặt nạ”** → **Mask → Clear Mask**; `Alt+M` có trong Blender 2.80, nhưng thao tác menu đáng tin cậy hơn khi đổi phiên bản/keymap.
- **“cơ ở đầu mũi”** → nên mô tả **khối sụn, mô mềm, da** theo hình thức quan sát, tránh nhầm với cơ nổi trên bề mặt.

## 3. Phím tắt và độ tương thích

| Nhu cầu | Cách ít phụ thuộc phiên bản | Lưu ý phím tắt |
|---|---|---|
| Chọn cọ | Chọn trực tiếp theo tên trong Sculpt Mode / Brush Asset Shelf | Một số keymap khác nhau giữa 2.8 và 4.x/5.x |
| Xóa Mask | Sculpt Mode → Mask → Clear Mask | 2.80/3.4: `Alt+M` |
| Tăng/giảm cỡ cọ | Điều chỉnh Radius/Size trên thanh công cụ | Thường có `F` trong cấu hình mặc định |
| Làm mịn tạm thời | Chọn Smooth hoặc kiểm tra lệnh `Shift` | Tùy cọ đang dùng |
| Tìm lệnh theo tên | Blender Search (`F3`) | Nếu không tìm thấy cọ dưới dạng lệnh, mở bảng cọ |

**Không áp đặt một tổ hợp phím từ video Blender 2.8 lên tất cả phiên bản Blender.**

## 4. Tài liệu chính thống đã đối chiếu

1. [Blender 4.5 LTS — The Brush](https://docs.blender.org/manual/en/4.5/sculpt_paint/sculpting/introduction/brush.html) — mô tả công dụng Grab, Clay Strips, Smooth, Inflate, Crease, Snake Hook.
2. [Blender 4.5 LTS — Sculpting](https://docs.blender.org/manual/en/4.5/sculpt_paint/sculpting/index.html) — mục lục Sculpt Mode, Brush và Adaptive Resolution.
3. [Blender 4.5 LTS — Brushes](https://docs.blender.org/manual/en/4.5/sculpt_paint/sculpting/brushes/brushes.html) — danh sách cọ và keymap Essentials.
4. [Blender 2.80 — Hiding & Masking](https://docs.blender.org/manual/en/2.80/sculpt_paint/sculpting/hide_mask.html) — lý do Mask và tổ hợp `Alt+M` trong đời 2.8.
5. [Blender 3.4 — Mask](https://docs.blender.org/manual/en/3.4/sculpt_paint/sculpting/editing/mask.html) — Fill/Clear/Invert và thao tác Mask.
6. [Blender 2.93 — Dyntopo](https://docs.blender.org/manual/en/2.93/sculpt_paint/sculpting/tool_settings/dyntopo.html) — nguyên lý thay đổi hình học cục bộ.
7. [Blender 5.x — Grab](https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/brushes/grab.html) — các lưu ý khi kéo silhouette.

## 5. Phân biệt thông tin trong khóa học

- **Tái biên soạn theo transcript:** khối mũi ban đầu bằng Snake Hook, Mask mắt, sculpt khối chính bằng Clay Strips/Crease, tạo cánh và lỗ mũi, chỉnh Grab/Inflate, Smooth, gỡ Mask.
- **Bổ sung mang tính hướng dẫn:** giải phẫu mức hình khối, tạo hõm bằng hướng Subtract, 3 góc chụp bài, bài kiểm tra, rubric, quy trình retopology nếu cần lỗ mũi mở thật.
- **Điểm chưa xác minh:** không có URL video gốc, tệp `.blend`, ảnh minh họa trực tiếp từ video hoặc thông số cọ chính xác; vì vậy không tuyên bố những phần này là dữ liệu lấy từ video.
