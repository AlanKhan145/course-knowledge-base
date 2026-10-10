# Bài 07. Dựng các panel giáp hông và chi tiết hình trụ

## 1. Tóm tắt và mục tiêu

Vùng hông làm rõ ngôn ngữ tạo hình của robot: tấm giáp phân lớp, rãnh sâu và các trụ cơ khí. Các chi tiết này được dựng từ mặt sẵn có hoặc các mesh mới, nhưng cần kiểm soát số lượng polygon và việc chọn đúng thành phần.

Sau bài, bạn có thể tạo các mặt lõm, tách/nhân bản bề mặt, dựng cylinder có hướng và tạo các panel gắn bên hông.

## 2. Tạo panel lõm trên thân đầu

1. Trong Edit Mode, chuyển Face Select.
2. Chọn một hoặc nhiều mặt ở khu vực hông/gáy.
3. Nhấn `I` tạo viền inset. Nếu vùng đi sát mặt phẳng đối xứng, kiểm tra tùy chọn `Boundary` của Inset (`B` khi công cụ đang chạy) để tránh mép viền không mong muốn.
4. Nhấn `E` và đùn vào trong để tạo rãnh.
5. Chọn mặt kế bên, `Shift + D` để nhân bản, dùng `S` và `G` để tạo lớp giáp thứ hai.

Khi `Inset Individual` đang bật, mỗi mặt được inset riêng, có thể sinh viền mà ta không mong đợi. Hãy đối chiếu hình preview của Inset trước khi xác nhận.

## 3. Loại bỏ các cạnh không cần thiết

Sau khi sao chép nhiều mặt, một đường cắt cũ có thể chia đôi panel mà không có mục đích. Thay vì xóa hai mặt và dựng lại, chọn cạnh chia bằng Edge Select rồi `X → Dissolve Edges`.

`Dissolve Edges` giúp loại cạnh mà vẫn giữ phần mặt xung quanh nếu topology cho phép. Khác với `Delete Edges`, thao tác này không chủ đích tạo lỗ.

## 4. Tạo cụm cylinder cơ khí

1. Thêm `Mesh → Cylinder` trong Edit Mode hoặc Object Mode theo cách tổ chức mesh mong muốn.
2. Nếu không cần hai nắp cylinder, vào Face Select và xóa riêng mặt nắp.
3. Chọn toàn thành phần bằng `L` khi trỏ chuột vào hình trụ.
4. Dùng `R → Y → 90` (hoặc trục xoay phù hợp) để đặt hướng nằm ngang.
5. Dùng `S → X/Y/Z` để thay đổi độ dài, đường kính rồi `G` đưa vào hốc.
6. Nhân bản cylinder bằng `Shift + D` để tạo một hàng thanh/ống song song.
7. Dùng `Shade Smooth` với các cylinder nếu muốn thân trụ ít lộ mặt phẳng.

Cần kiểm tra ở Side và Front để cylinder không nổi hẳn ra ngoài hoặc bị chôn sâu trong giáp.

## 5. Thiết kế tấm giáp hông nhô ngoài

Dùng một mặt có sẵn, `Shift + D` để sao chép, thu hoặc kéo giãn theo hình tham chiếu. Chọn vùng mặt trong, `I` tạo viền rồi `E` vào sâu để có bề mặt được khoét. Vát các cạnh ngoài bằng `Ctrl + B`, sau đó dùng Bevel Modifier mức nhẹ cho toàn đối tượng.

Đối với chi tiết tạo trong đối tượng có Mirror, hãy chú ý `Clipping`: nếu object mới đang nằm gần giữa, Clipping có thể khiến phần vừa thêm khó di chuyển. Có thể tắt tạm Clipping trong lúc định vị và bật lại trước khi hoàn tất nếu cần giữ đường giữa.

## 6. Thực hành và tổng kết

**Nhiệm vụ:** Dựng một cụm panel hông có ít nhất một rãnh lõm và ba cylinder/chi tiết dạng ống song song. Tạo thêm một mảng giáp phụ nhô với viền bo nhỏ.

**Checkpoint:** Không có mặt bị trùng rõ rệt; các chi tiết bám sát hình tham chiếu; hai hông có cấu trúc nhất quán nếu thiết kế dùng đối xứng.

**Ghi nhớ:** Tính thuyết phục của hard-surface modeling đến từ khối lớn, khối trung gian rồi mới đến chi tiết nhỏ. Không nên để số lượng cylinder che mất hình dáng chính.

## 7. Câu hỏi ôn tập

### Câu 1

Lệnh nào dùng để loại bỏ đường chia panel mà vẫn cố giữ bề mặt?

A. Delete Vertices  
B. Dissolve Edges  
C. Shade Smooth  
D. Apply Mirror  

**Đáp án:** B

**Giải thích:** Dissolve Edges bỏ cạnh được chọn mà không nhằm tạo lỗ như Delete thông thường.

### Câu 2

Trong Inset, tùy chọn Individual tác động như thế nào?

A. Chia Inset riêng theo từng mặt được chọn  
B. Đổi sang camera  
C. Bật HDRI  
D. Tự động lưu file  

**Đáp án:** A

**Giải thích:** Individual quyết định mỗi mặt có được inset riêng hay xem nhóm như một vùng.

### Câu 3

Muốn đặt cylinder từ chiều dọc sang chiều ngang, công cụ nào cần dùng?

A. Shift + N  
B. Ctrl + S  
C. R rồi chọn trục xoay và góc  
D. Ctrl + J  

**Đáp án:** C

**Giải thích:** Rotate cho phép xoay chính xác 90 độ theo trục thích hợp.

### Câu 4

Khi cần chọn tất cả đỉnh của một cylinder nằm chung Edit Mode, làm thế nào nhanh?

A. Nhấn I  
B. Chỉ chọn một cạnh rồi lưu  
C. Bật Eevee  
D. Di chuột lên cylinder rồi nhấn L  

**Đáp án:** D

**Giải thích:** Select Linked chọn toàn bộ phần hình học đang nối với đỉnh/mặt dưới con trỏ.

### Câu 5

Cách nào giúp tấm giáp nhô có chiều sâu?

A. Chỉ đổi màu viewport  
B. Inset rồi Extrude vào/ra phù hợp  
C. Chỉ chọn Shade Smooth  
D. Xóa hết modifier  

**Đáp án:** B

**Giải thích:** Inset tạo viền và Extrude tạo thể tích cho lớp giáp.
