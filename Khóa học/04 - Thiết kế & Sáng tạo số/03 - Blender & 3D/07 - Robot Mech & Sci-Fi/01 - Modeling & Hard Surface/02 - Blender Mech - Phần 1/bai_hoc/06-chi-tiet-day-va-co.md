# Bài 06. Tạo hốc lắp cổ và khung giáp phía đáy

## 1. Tóm tắt và mục tiêu

Phần đầu của robot cần có khoang đáy dành cho kết nối cổ. Dù cổ được dựng ở giai đoạn khác, hốc và vành bảo vệ cần được tạo ngay trong đầu để tỷ lệ hợp lý.

Mục tiêu: sử dụng Knife, xóa mặt, căn đỉnh bằng `3D Cursor`/Pivot, dựng mép hốc bằng Extrude và Bevel, đồng thời bổ sung chi tiết phụ quanh đáy.

## 2. Cắt hốc ở mặt dưới đầu

1. Vào Bottom View hoặc điều hướng để nhìn rõ phần đáy.
2. Chọn mesh đầu, `Tab` để Edit Mode, chuyển Wireframe.
3. Sử dụng `K` để cắt vùng đáy nơi cổ sẽ lắp; dùng Cut Through nếu cần cắt xuyên các bề mặt tương ứng.
4. Vào Face Select, chọn những mặt nằm trong vùng hốc.
5. Nhấn `X → Faces` để xóa **mặt** mà giữ lại đường biên cần thiết.
6. Quay quanh vật thể xác nhận đã có một lỗ đúng vị trí, không vô tình xóa mảng giáp bên ngoài.

## 3. Căn hàng đỉnh bằng Pivot

Khi hai hoặc nhiều đỉnh ở mép hốc có độ cao chênh nhau, có thể dùng phép Scale về 0 trên một trục:

1. Chọn các đỉnh cần căn thẳng.
2. Mở tùy chọn **Transform Pivot Point** và chọn `3D Cursor` nếu muốn lấy độ cao con trỏ làm mốc.
3. Nhấn `S → Z → 0` để làm phẳng lựa chọn theo trục Z.
4. Nếu muốn căn theo tâm vùng chọn thay vì vị trí 3D Cursor, đổi Pivot về `Median Point` trước thao tác.
5. Kiểm tra lại ở Side View để biết các đỉnh đã khớp chiều cao.

`S Z 0` làm cho các đỉnh có cùng tọa độ Z theo hệ biến đổi đang dùng; **mốc độ cao sau phép scale** còn phụ thuộc Pivot. Đây là điểm cần hiểu thay vì ghi nhớ máy móc.

## 4. Tạo thành khoang và vành cơ khí

Chọn đường biên phù hợp, dùng `E` để kéo tạo mặt thành hốc; `S` theo `X/Y` để điều chỉnh kích thước mặt cắt nếu cần. Dùng `Ctrl + B` ở mép sắc để tạo vành bo tròn vừa đủ. Nếu vừa đùn xong gặp shading tối bất thường, chọn vùng liên quan rồi `Shift + N`.

Có thể bổ sung các chi tiết phụ như thanh giáp nhỏ hoặc bộ phận dạng hình trụ quanh đáy:

- `Shift + A → Mesh → Cylinder` để thêm một cylinder trong Edit Mode.
- Xóa các nắp (`Faces`) nếu chỉ cần thân ống hở.
- Dùng `R` kèm trục để xoay, `S` để chỉnh độ dài, `G` để đặt vào vị trí.
- Dùng `Shift + D` để tạo nhiều đoạn tương tự; `Shade Smooth` cho các mặt tròn.

## 5. Thực hành và kiểm tra

**Nhiệm vụ:** Mở hốc lắp cổ trên đáy đầu, tạo mép hốc có độ dày; bổ sung một nhóm thanh giáp/ống nhỏ ở cạnh hốc.

**Kiểm tra kết quả:** Hốc không bị bịt bởi mặt thừa; hai phía phù hợp đối xứng; phần kết nối cổ không đụng vào panel mặt trước; normals thống nhất.

## 6. Lỗi dễ gặp và tổng kết

| Lỗi | Cách khắc phục |
| --- | --- |
| `S Z 0` làm phẳng sai độ cao | Kiểm tra Pivot Point; đặt lại 3D Cursor hoặc dùng Median Point |
| Xóa cả cạnh cần giữ | Chọn `Faces` thay vì `Vertices` nếu mục tiêu chỉ là khoét mặt |
| Ống bị nắp kín không mong muốn | Chọn riêng nắp và xóa mặt |
| Đáy bị tối hoặc chớp shading | Kiểm tra mặt trùng/đảo normal, dùng `Shift + N` nếu phù hợp |

**Ghi nhớ:** Hốc dưới đầu phải là cấu trúc có chủ đích, không chỉ là một vùng bị xóa tùy ý.

## 7. Câu hỏi ôn tập

### Câu 1

Để tạo lỗ mà giữ đường biên hốc, nên xóa loại thành phần nào?

A. Vertices cả vùng  
B. Faces bên trong vùng  
C. Toàn object  
D. Modifier  

**Đáp án:** B

**Giải thích:** Xóa Faces giữ các cạnh/đỉnh đường biên để tiếp tục dựng thành hốc.

### Câu 2

S Z 0 có tác dụng gì lên các đỉnh được chọn?

A. Xoay 0 độ  
B. Thu nhỏ toàn object về gốc  
C. Làm các đỉnh bằng nhau trên tọa độ Z theo pivot  
D. Tạo thêm mặt mới  

**Đáp án:** C

**Giải thích:** Scale bằng 0 trên trục Z đưa các đỉnh về cùng mặt phẳng ngang.

### Câu 3

Tại sao cần chú ý Pivot Point khi dùng S Z 0?

A. Nó xác định mốc của phép làm phẳng  
B. Nó tự đổi render engine  
C. Nó xóa ảnh tham chiếu  
D. Nó tạo shading mịn  

**Đáp án:** A

**Giải thích:** Mốc sau Scale phụ thuộc vị trí Pivot, chẳng hạn 3D Cursor hay tâm lựa chọn.

### Câu 4

Muốn ống trụ không có nắp, thao tác nào phù hợp?

A. Thêm HDRI  
B. Dùng Mirror trục Z  
C. Tăng frame rate  
D. Xóa mặt nắp trong Edit Mode  

**Đáp án:** D

**Giải thích:** Xóa riêng hai mặt nắp tạo ống mở đầu mà vẫn giữ thành hình trụ.

### Câu 5

Sau khi đùn mặt hốc, shading bị ngược. Nên thử thao tác nào?

A. Thêm clip âm thanh  
B. Shift + N cho vùng mesh liên quan  
C. Xóa tất cả images  
D. Đổi sang camera  

**Đáp án:** B

**Giải thích:** Tính lại normals có thể sửa hiện tượng mặt hướng vào trong.
