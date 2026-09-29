# Bài 09 — Ôn tập và bài tập thực hành

## Phần A — Trắc nghiệm

### Câu 1
Mục đích chính của Head Binding là gì?

A. Tạo background 2D  
B. Cho model theo chuyển động đầu  
C. Tạo material Unlit  
D. Tải script từ GitHub

**Đáp án:** B

### Câu 2
Tại sao Face Inset cần chỉnh theo trục Z trong 3D view?

A. Để đổi màu mắt  
B. Để giảm polygon  
C. Để inset nằm sát bề mặt model  
D. Để Render Target hoạt động

**Đáp án:** C

### Câu 3
`smoothSpeed = 1` sẽ có xu hướng nào?

A. Object không di chuyển  
B. Object bám target rất sát  
C. Object biến mất  
D. Object đổi parent

**Đáp án:** B

### Câu 4
Vì sao bone wobble phải được tách khỏi Head Binding trong cách làm của tutorial?

A. Để giảm texture size  
B. Vì Head Binding đang điều khiển sẵn vị trí của bone  
C. Để Face Inset hoạt động  
D. Để tạo Orthographic Camera

**Đáp án:** B

### Câu 5
Render Target `Background` được dùng để làm gì?

A. Lưu rig  
B. Cấp background làm input cho camera chính  
C. Tăng tốc Face Inset  
D. Tạo greenscreen trực tiếp

**Đáp án:** B

## Phần B — Bài thực hành

### Bài 1 — Wobble có kiểm soát
Tạo model 2 bone và thử ba giá trị `smoothSpeed`: 0.05, 0.10 và 0.20. Ghi lại cảm nhận và chọn một giá trị.

### Bài 2 — Kiểm tra Face Inset
Quay preview sang trái/phải. Điều chỉnh Z cho đến khi mắt và miệng không còn cảm giác nổi ra khỏi mesh.

### Bài 3 — Responsive background
Thử cả portrait và landscape. Kiểm tra background có fill đúng và model vẫn ở phía trước.

### Bài 4 — Bonus
Tạo thêm một background thứ ba và mở rộng Behavior để người dùng chuyển qua nhiều trạng thái.
