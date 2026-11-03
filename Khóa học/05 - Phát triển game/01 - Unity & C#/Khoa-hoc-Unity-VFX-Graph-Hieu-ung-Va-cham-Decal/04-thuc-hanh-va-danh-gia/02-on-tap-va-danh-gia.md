# Bài 09 — Ôn tập và đánh giá cuối khóa

## 1. Mục tiêu

Hệ thống hóa các quyết định quan trọng khi chế tác impact effect bằng Unity VFX Graph: lựa chọn Spawn, điều khiển tuổi thọ/kích thước/màu, phân nhánh theo chỉ số hạt, chuyển động Sparks, làm mềm giao mesh và projection của Decal.

## 2. Bảng tổng hợp

| Thành phần | Công cụ/khái niệm | Vấn đề giải quyết |
| --- | --- | --- |
| Flash | Single Burst, additive, size/color over life | Tạo chớp sáng tức thì |
| Cross | Hai hạt, Scale, Spawn Index, Branch, Angle | Nhấn mạnh điểm va chạm bằng hình X |
| Sparks | Sphere position, lifetime ngẫu nhiên, Conform to Sphere, hướng velocity | Hạt phát tán theo thời gian |
| Soft Particles | Fade near geometry | Mềm hóa giao tuyến với mesh |
| Decal | Output Particle Decal Forward, texture alpha, orientation | Dấu va chạm trên bề mặt |
| Composite | Output Render Order | Ghép các lớp đúng nhịp thị giác |

## 3. Những điểm dễ nhầm

**Ghi đè và nhân không giống nhau.** Một block size/color ở phía sau có thể ghi đè giá trị trước đó. Chọn `Multiply` khi cần hệ số theo lifetime điều chỉnh kích thước/màu gốc.

**Cross không đòi hỏi texture riêng.** Hai quad mảnh với 45° và 135° có thể đủ tạo dấu X, miễn là hai hạt nhận góc khác nhau.

**Soft Particles không phải Decal.** Một kỹ thuật xử lý vùng giao hạt, kỹ thuật còn lại hiển thị dấu trên hình học.

**Góc xoay không phổ quát.** X = −90° là giá trị minh họa phù hợp bố cục tham chiếu, không có nghĩa decal luôn đúng khi áp dụng lên mọi mặt phẳng.

**Render Order không thay thế kiểm tra depth/sorting.** Thứ tự output là một công cụ phối hợp lớp; chất lượng cuối còn phụ thuộc cấu hình renderer.

## 4. Bài đánh giá thực hành

**Đề bài:** Trong một Scene có mặt đất phẳng, mesh gồ ghề và cạnh tường, tạo một impact VFX với 4 lớp. Kiểm tra kỹ năng bằng cách ghi lại ít nhất **ba thay đổi có chủ đích**: một thay đổi Flash (color hoặc size), một thay đổi Sparks (Count hoặc scale), một thay đổi Decal (orientation hoặc render order). Viết nhận xét về hiệu quả của từng thay đổi.

**Tiêu chí chấm gợi ý:** đúng cơ chế hệ thống, dễ đọc về hình ảnh, kiểm thử trên nhiều mesh, giải thích được thông số, có chứng cứ ảnh/clip. Không cần dùng asset trả phí.

## 5. Câu hỏi trắc nghiệm tổng hợp

### Câu 1

Hiệu ứng Flash rất nhỏ dù `Set Size` đã tăng. Chẩn đoán hợp lý nhất là gì?

A. Spawn Index không bằng 0  
B. Block Size Over Life đang ghi đè  
C. Texture Decal chưa có alpha  
D. Hạt không có hình cầu

**Đáp án:** B. **Giải thích:** Một block size sau đó có thể thay kích thước đặt trước, cần kiểm tra composition.

### Câu 2

Để tạo hai tia Cross theo hai hướng khác nhau trong cùng burst, nên sử dụng kỹ thuật nào?

A. Tăng lifetime lên 3 giây  
B. Bật Soft Particles  
C. Dùng Spawn Index để chọn góc  
D. Thay URP bằng pipeline khác

**Đáp án:** C. **Giải thích:** Spawn Index cho phép phân biệt và điều khiển hạt theo chỉ số.

### Câu 3

Tại sao dùng hình cầu bán kính nhỏ khi khởi tạo Sparks?

A. Để phân tán vị trí hạt quanh tâm impact  
B. Để chiếu decal lên tường  
C. Để tránh additive blending  
D. Để hạt luôn đứng yên

**Đáp án:** A. **Giải thích:** Vùng spawn giúp nhóm hạt không trùng một điểm.

### Câu 4

Một quad hạt có mép cắt quá cứng với nền. Nên thử kỹ thuật nào trước?

A. Đổi Cross sang 3 hạt  
B. Đặt Decal Count bằng 0  
C. Tăng Size của mọi hạt lên 100  
D. Soft Particles

**Đáp án:** D. **Giải thích:** Soft Particles được dùng để giảm đường giao hạt với hình học.

### Câu 5

Decal vẫn không xuất hiện dù đã kéo dài lifetime. Hành động nào phù hợp nhất?

A. Chuyển Flash thành Constant Spawn  
B. Chỉ đổi màu Sparks  
C. Kiểm tra size, hướng chiếu và hình học nhận decal  
D. Đặt cả hai góc Cross bằng 45°

**Đáp án:** C. **Giải thích:** Lifetime chỉ là một nguyên nhân; size/orientation/surface có thể làm decal vô hình.

### Câu 6

Mục đích dùng một Color Property riêng cho Sparks là gì?

A. Giảm lifetime của Flash  
B. Cho phép đổi màu Sparks độc lập với Flash  
C. Tạo texture alpha  
D. Đổi góc decal

**Đáp án:** B. **Giải thích:** Thuộc tính độc lập giúp điều khiển từng lớp mà không tác động lớp khác.

### Câu 7

Trong bố cục mẫu, nên làm gì khi vết decal nổi trên toàn bộ Flash?

A. Kiểm tra Output Render Order và thử render decal trước  
B. Thêm Set Velocity cho Flash  
C. Tắt alpha của decal  
D. Tăng Count Cross

**Đáp án:** A. **Giải thích:** Thứ tự render là công cụ phối hợp lớp decal và hạt.

### Câu 8

Vì sao không nên xem thông số ví dụ là chuẩn chung cho mọi dự án?

A. Vì VFX Graph không hỗ trợ số thập phân  
B. Vì Unity chỉ có một phiên bản  
C. Vì hạt luôn giống nhau  
D. Vì quy mô cảnh, camera, renderer và phiên bản khác nhau

**Đáp án:** D. **Giải thích:** Tham số trực quan cần hiệu chỉnh trong điều kiện của từng dự án.

## 6. Kết luận

Một hiệu ứng va chạm thuyết phục là kết quả của **nhiều lớp được tổ chức và kiểm soát**. Khi biết rõ mỗi lớp giải quyết vấn đề gì, bạn có thể thay màu sắc, cường độ và hình dạng mà vẫn giữ một quy trình chế tác có thể tái hiện.
