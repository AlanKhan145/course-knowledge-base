# Bài 03 — Tải FBX With Skin và nhập nhân vật vào Unity

## 1. Tóm tắt

Sau khi chọn nhân vật và `Neutral Idle` trên Mixamo, cần tải dữ liệu về dưới dạng FBX phù hợp với Unity và nhập vào đúng thư mục. Bài học làm rõ sự khác nhau giữa file FBX trong Project và instance nhân vật trong scene.

## 2. Mục tiêu học tập

- Tải animation `Neutral Idle` đi kèm model bằng `FBX for Unity` và `With Skin`.
- Nhập FBX vào thư mục `Assets/Mixamo/Characters`.
- Quan sát model, clip và các mục con trong file FBX đã nhập.
- Đưa nhân vật vào Hierarchy và kiểm tra vị trí ban đầu.

## 3. Tải file từ Mixamo

1. Mở Mixamo và chọn nhân vật `AJ`.
2. Chọn animation `Neutral Idle`.
3. Nhấn `Download`, chọn định dạng dành cho Unity (`FBX for Unity` nếu giao diện có tùy chọn này).
4. Chọn `With Skin` vì đây là lần nhập model ban đầu.
5. Lưu file FBX vào máy, đặt tên dễ nhận diện nếu cần.

`With Skin` được chọn vì phần mềm sẽ cung cấp hình dạng nhân vật gắn với bộ xương tương ứng. Khi nhập sang Unity, asset này được dùng để tạo bản nhân vật hiện diện trong scene và thiết lập Avatar ở các bài kế tiếp.

## 4. Nhập FBX vào Project

Kéo file FBX từ trình quản lý file của hệ điều hành vào `Assets/Mixamo/Characters` trong cửa sổ `Project`. Chờ Unity hoàn thành import. Chọn asset và mở rộng mũi tên bên cạnh FBX để xem các thành phần bên trong: model, rig/Avatar và animation clip (tùy cách Unity hiển thị).

### Những điều cần kiểm tra

- File hiển thị trong `Project`, không chỉ nằm trong thư mục tải xuống của máy.
- Inspector có các tab nhập model như `Model`, `Rig`, `Animation`, `Materials`.
- Trong Project có thể chọn clip `Neutral Idle` từ asset FBX.

## 5. Tạo instance trong scene

Kéo asset model từ `Characters` vào `Hierarchy`. Đây là một **instance** thuộc scene, tham chiếu đến asset trong Project. Không chỉnh trực tiếp nội dung file FBX chỉ để di chuyển nhân vật trong scene; hãy chỉnh `Transform` của GameObject instance.

Nếu model đứng lệch trục hoặc không nằm gần gốc tọa độ, quan sát `Transform` của nó. Trong bài dựng scene, nhân vật sẽ được đặt làm con của `Player` để dễ kiểm soát.

## 6. Phân biệt Model, Avatar và Animation

| Thành phần | Nhiệm vụ trong hệ thống |
| --- | --- |
| Model | Hình dạng 3D có thể nhìn thấy |
| Rig/Skeleton | Các xương điều khiển chuyển động |
| Avatar | Ánh xạ rig dùng cho animation của Unity |
| `Neutral Idle` clip | Dữ liệu tư thế thay đổi theo thời gian |

Nếu thấy được model nhưng nó đứng yên, điều đó chưa có nghĩa là import lỗi: lúc này chúng ta chưa hoàn thành cấu hình Animator Controller.

## 7. Thực hành nhanh

- Xác nhận asset `With Skin` nằm trong `Characters`.
- Tạo instance nhân vật trong `Hierarchy`.
- Thử chọn FBX ở Project và chọn GameObject ở Hierarchy để so sánh nội dung Inspector.
- Lưu scene trước khi chuyển bài.

## 8. Các lỗi thường gặp

| Vấn đề | Kiểm tra | Hướng xử lý |
| --- | --- | --- |
| Chỉ thấy file ở Downloads | Chưa import vào Unity | Kéo FBX vào thư mục trong Project |
| Không thấy model trong Scene | Camera Scene đang nhìn hướng khác | Chọn GameObject và dùng thao tác Frame Selected |
| Model đứng im | Chưa cấu hình animation/controller | Tiếp tục bài về Rig và Animator |
| Trùng nhiều model | Có thể đã tải nhiều `With Skin` | Giữ một model chính; các clip sau tải `Without Skin` |

## 9. Câu hỏi ôn tập

**Câu 1.** `With Skin` cần thiết ở lần tải đầu vì sao?

A. Để tự tạo code C#  
B. Để gắn bàn phím vào scene  
C. Để lấy model cùng rig của nhân vật  
D. Để thay đổi camera

**Đáp án:** C. **Giải thích:** File đầu tiên phải có dữ liệu mô hình và bộ xương để làm cơ sở phát animation.

**Câu 2.** Đưa một asset FBX từ Project vào Hierarchy tạo ra điều gì?

A. Một instance trong scene  
B. Một bản sao mã nguồn Unity  
C. Một texture mới  
D. Một build game hoàn chỉnh

**Đáp án:** A. **Giải thích:** Asset trong Project được tham chiếu bởi GameObject thuộc scene.

**Câu 3.** Tab nào thường dùng để cấu hình kiểu rig/Avatar của FBX?

A. `Materials`  
B. `Rig`  
C. `Lighting`  
D. `Console`

**Đáp án:** B. **Giải thích:** Các lựa chọn liên quan animation type và Avatar definition nằm trong tab Rig.

**Câu 4.** Model đã xuất hiện nhưng không chuyển động, nhận định nào hợp lý nhất?

A. FBX chắc chắn bị hỏng  
B. Cần xóa toàn bộ project  
C. Texture không hỗ trợ hoạt ảnh  
D. Cần kiểm tra cấu hình Rig và Animator trước khi kết luận

**Đáp án:** D. **Giải thích:** Model hiện ra đúng chưa đồng nghĩa animation đã được liên kết và kích hoạt.

**Câu 5.** Nơi hợp lý nhất để lưu file FBX model đầu tiên là gì?

A. `Assets/Mixamo/Characters`  
B. `Assets/Scripts`  
C. `Assets/Materials`  
D. `Assets/Resources/Textures`

**Đáp án:** A. **Giải thích:** `Characters` dành cho model gốc, tránh lẫn với file clip bổ sung.

## 10. Tổng kết

Bạn đã có asset nhân vật cùng animation đầu tiên trong Unity. Bước tiếp theo là dựng scene có sàn, tổ chức GameObject Player và khôi phục vật liệu nếu model chưa hiển thị đúng.
