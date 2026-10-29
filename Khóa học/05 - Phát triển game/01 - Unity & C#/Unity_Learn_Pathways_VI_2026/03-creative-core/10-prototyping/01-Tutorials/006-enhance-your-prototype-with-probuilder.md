# Bài 06 — Dùng ProBuilder để chỉnh hình học môi trường

> **Creative Core · Prototyping · Thực hành**

ProBuilder là package mô hình hóa mesh ngay trong Unity Editor, hữu ích để dựng tường, cửa, cầu thang và kiểm tra layout trong lúc thiết kế level.

## 1. Mục tiêu và chuẩn bị

Sau bài học, người học có thể cài `com.unity.probuilder`, tạo mesh bằng **Shape tool**, chỉnh vertex/edge/face, tạo một cửa vào tường, và xác nhận collider khi chạy.

Trong Unity 6, mở `Window > Package Manager`, tìm **ProBuilder** trong Unity Registry rồi cài phiên bản tương thích Editor. Tên và vị trí thanh công cụ có thể khác theo phiên bản package; sử dụng menu/overlay ProBuilder trong Scene view. [Tài liệu package](https://docs.unity.cn/Packages/com.unity.probuilder%406.1/manual/workflow-create.html) mô tả các công cụ chính.

## 2. Mesh và phép biến đổi là hai tầng khác nhau

Một GameObject có `Transform` cho phép tịnh tiến, xoay, co giãn *toàn bộ* đối tượng; ProBuilder còn cho chỉnh **mesh geometry**, tức vị trí đỉnh (`vertex`), cạnh (`edge`) và mặt (`face`). Chẳng hạn, kéo một mặt tường để tạo phần nhô thay vì ghép thêm nhiều Cube độc lập.

| Thành phần | Thay đổi điển hình |
|---|---|
| Object/Transform | Chuyển cả bức tường sang trái |
| Face | Kéo mặt trước thành hốc hoặc phần nhô |
| Edge | Điều chỉnh đường gờ hoặc biên dạng |
| Vertex | Biến đổi chính xác hình dạng cục bộ |

Cần kiểm tra mesh sau mỗi thao tác để tránh mặt tự cắt, cạnh quá mỏng hoặc collider không cập nhật như mong muốn.

## 3. Tạo công trình từ Shape tool

1. Mở Scene view và tạo **New Shape** từ ProBuilder.
2. Chọn dạng `Cube` hoặc `Stairs`, thay đổi kích thước theo mặt bằng greybox.
3. Xác nhận shape, chọn face/edge/vertex edit mode để chỉnh hình học.
4. Dùng **Extrude Faces** khi muốn tạo một phần mesh kéo dài theo mặt được chọn. Khi dùng menu hoặc phím tắt, kiểm tra phiên bản vì cách hiển thị công cụ có thể khác.
5. Tạo ít nhất một hình có mục đích rõ: tường hướng đường đi, bậc lên cầu hoặc khung cửa.

Để mở ô cửa, có nhiều phương án: xếp các mesh tạo khoảng trống; thiết kế topology rồi xóa mặt/kết nối cạnh; hoặc dùng công cụ cắt và xử lý mặt phù hợp. Không nên khẳng định thao tác Extrude đơn lẻ tự tạo được lỗ xuyên tường.

## 4. Bài thực hành: một khung cửa có collider

**Yêu cầu:** thay bức tường ghép 3 khối bằng hình học chỉnh được, với cửa đủ rộng để controller đi qua.

- Bước 1: sao lưu scene hoặc tạo phiên bản mới.
- Bước 2: tạo mesh tường ProBuilder; chỉnh phần cửa qua face/edge theo một trong các cách thích hợp.
- Bước 3: chỉnh kích thước để player không va vào mép cửa; kiểm tra ở Game view.
- Bước 4: kiểm tra `Mesh Collider` hoặc collider phù hợp với mesh đang dùng. Không nên đặt Mesh Collider động, lõm (*non-convex*) lên Rigidbody động không kinematic nếu cấu hình physics không cho phép.
- Bước 5: thay màu đơn giản cho các mặt giúp thấy hướng lối đi; chưa cần UV hoàn chỉnh.

**Checkpoint:** nhân vật đi qua lối mở và bị chặn bởi phần tường đặc; collider không còn chắn cả ô cửa.

## 5. Phân biệt ProBuilder với công cụ DCC

ProBuilder tối ưu cho dựng level và lặp ngay trong Editor, giúp sửa cấu trúc khi Play mode chỉ mất ít vòng xuất–nhập asset. Blender/Maya phù hợp hơn khi cần sculpt, topology phức tạp, rig và pipeline art toàn diện. Vì vậy, mesh ProBuilder thường là *blockout* hoặc asset đơn giản; không bắt buộc thay mọi đối tượng bằng mô hình bên ngoài.

## 6. Lỗi thường gặp và tài liệu

| Hiện tượng | Nguyên nhân cần xem |
|---|---|
| Không thể chỉnh mặt | Chưa chọn ProBuilder mesh / chưa vào face mode |
| Lỗ cửa nhìn thấy nhưng không đi được | Collider cũ vẫn là khối kín hoặc kích thước chưa hợp lý |
| Ánh sáng bị đảo mặt | Normal / topology mặt không đúng |
| Không có công cụ | Package chưa cài hoặc context/overlay bị ẩn |

- [Unity ProBuilder – Create meshes](https://docs.unity.cn/Packages/com.unity.probuilder%406.1/manual/workflow-create.html)
- [Unity ProBuilder – Editing Meshes](https://docs.unity.cn/Packages/com.unity.probuilder%406.1/manual/workflow-edit.html)
- [Unity ProBuilder – Tools reference](https://docs.unity.cn/Packages/com.unity.probuilder%406.1/manual/ref_tools.html)

## 7. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** ProBuilder bổ sung khả năng nào so với Transform của Cube?

A. Chỉnh trực tiếp mặt, cạnh, đỉnh của mesh  
B. Tạo dịch vụ cloud  
C. Tự đào tạo AI  
D. Phân tích doanh thu  

**Đáp án:** A
**Giải thích:** ProBuilder cho phép sửa hình học cục bộ.

**Câu 2.** Cửa đã nhìn thấy nhưng player vẫn bị chặn, cần kiểm tra gì?

A. Độ phân giải màn hình  
B. Tag của Main Camera  
C. Collider của tường/cửa  
D. Tên material  

**Đáp án:** C
**Giải thích:** Collider có thể vẫn che phủ vùng trống.

**Câu 3.** Công dụng của Extrude Faces?

A. Thay đổi âm lượng  
B. Kéo một mặt tạo phần hình học nối tiếp  
C. Tải package  
D. Tạo ánh sáng trực tiếp  

**Đáp án:** B
**Giải thích:** Extrude tạo thêm mặt nối với vùng được kéo.

**Câu 4.** Chọn ProBuilder cho trường hợp nào hợp lý nhất?

A. Sculpt nhân vật nhiều triệu polygon  
B. Rig biểu cảm mặt  
C. Biên tập âm thanh  
D. Điều chỉnh tường và bố cục level nhanh trong Unity  

**Đáp án:** D
**Giải thích:** ProBuilder phù hợp level blockout và mesh cơ bản.

**Câu 5.** Vì sao cần kiểm tra trong Play mode sau khi chỉnh mesh?

A. Để kiểm tra đường đi, kích thước và va chạm thực tế  
B. Để tự tạo logo  
C. Để xóa mọi script  
D. Để tự động viết game  

**Đáp án:** A
**Giải thích:** Hình học mới có thể gây cản trở không mong muốn.
