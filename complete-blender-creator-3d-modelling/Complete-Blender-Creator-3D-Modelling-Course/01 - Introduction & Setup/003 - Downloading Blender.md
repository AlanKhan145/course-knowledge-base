# 003 — Downloading Blender

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Downloading Blender |
| **Thời lượng** | 3:51 |
| **Chủ đề chính** | Tải xuống và cài đặt Blender |

## 1. Mục tiêu bài học

- Biết cách tải Blender miễn phí từ trang chủ chính thức.
- Phân biệt giữa bản cài đặt (Installer) và bản portable (.zip) trên Windows.
- Hiểu yêu cầu phần cứng tối thiểu và khuyến nghị để chạy Blender mượt.
- Thực hiện cài đặt và mở Blender lần đầu thành công.

## 2. Nội dung chính

Blender là phần mềm mã nguồn mở, hoàn toàn miễn phí, được tải trực tiếp từ **blender.org**. Trang chủ tự động nhận diện hệ điều hành (Windows, macOS, Linux) và đề xuất bản phù hợp. Có hai lựa chọn phổ biến trên Windows:

- **Installer (.msi)**: cài đặt vào hệ thống như phần mềm thông thường, tự tạo shortcut, tự động cập nhật liên kết file `.blend`.
- **Portable (.zip)**: giải nén ra chạy trực tiếp, không cần quyền admin, tiện khi dùng nhiều phiên bản song song hoặc chạy từ USB.

Ngoài ra Blender còn có sẵn trên **Microsoft Store** và **Steam** (miễn phí), tuy nhiên bản tải từ blender.org thường là bản mới nhất và ổn định nhất để theo khóa học.

Blender cũng cung cấp các **LTS (Long Term Support)** version bên cạnh bản mới nhất — LTS phù hợp cho môi trường sản xuất cần ổn định lâu dài, còn bản mới nhất có nhiều tính năng cập nhật hơn. Khóa học này nhắm tới Blender 4.3/4.4.

Yêu cầu hệ thống tối thiểu: CPU 64-bit 4 nhân, 8GB RAM (khuyến nghị 16GB+), GPU hỗ trợ OpenGL 4.3 (khuyến nghị card rời có VRAM ≥ 4GB để render Cycles bằng GPU qua CUDA/OptiX/HIP/Metal tùy hãng).

## 3. Quy trình thực hành gợi ý

1. Truy cập blender.org > mục Download.
2. Chọn phiên bản phù hợp hệ điều hành (Windows Installer khuyến nghị cho người mới).
3. Chạy file cài đặt, làm theo hướng dẫn (Next > Next > Install).
4. Mở Blender, chọn ngôn ngữ giao diện (khuyến nghị giữ tiếng Anh để khớp với thuật ngữ chuẩn và tài liệu).
5. Ở màn hình Splash Screen, chọn New File hoặc mở lại file gần đây.
6. Vào `Edit > Preferences` để kiểm tra thiết lập Input, Themes, và bật GPU rendering nếu có card đồ họa rời (`Preferences > System > Cycles Render Devices`).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Preferences | `Edit > Preferences` |
| Lưu file | `Ctrl + S` |
| Lưu file mới (Save As) | `Ctrl + Shift + S` |
| Mở file | `Ctrl + O` |
| File mới | `Ctrl + N` |

## 5. Lưu ý & lỗi thường gặp

- Không tải Blender từ các trang web trung gian không chính thức — luôn dùng blender.org để tránh phần mềm giả mạo/độc hại.
- Nếu máy không có GPU rời, vẫn có thể học và làm việc bình thường, chỉ render Cycles sẽ chậm hơn (dùng CPU) — Eevee vẫn chạy tốt trên hầu hết máy.
- Trên một số máy Windows, driver GPU cũ có thể khiến Blender không nhận diện đúng card đồ họa — nên cập nhật driver trước khi cài.
- Giữ ngôn ngữ giao diện là English được khuyến nghị vì hầu hết tài liệu, video hướng dẫn và cộng đồng đều dùng thuật ngữ tiếng Anh.

## 6. Checklist thực hành

- [ ] Đã tải Blender từ blender.org.
- [ ] Đã cài đặt thành công và mở được Blender.
- [ ] Đã kiểm tra `Edit > Preferences > System` để xác nhận GPU render device (nếu có).
- [ ] Đã lưu thử một file `.blend` trống để kiểm tra thao tác Save.

## 7. Tóm tắt

Blender được tải miễn phí từ blender.org, hỗ trợ cả bản Installer và Portable. Sau khi cài đặt, nên kiểm tra thiết lập GPU trong Preferences trước khi bắt đầu các bài học modeling.
