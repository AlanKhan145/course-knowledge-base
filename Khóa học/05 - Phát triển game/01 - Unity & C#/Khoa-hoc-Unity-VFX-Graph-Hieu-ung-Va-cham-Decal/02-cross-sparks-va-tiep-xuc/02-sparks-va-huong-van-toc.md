# Bài 04 — Tạo Sparks: tỏa hạt, chuyển động và hướng vận tốc

## 1. Tóm tắt

Sparks tạo nhịp tiếp nối sau Flash và Cross. Tác động sinh ra các hạt nhỏ ở vị trí gần tâm, chúng chuyển động ra ngoài và tắt dần. Việc kéo giãn theo phương vận tốc giúp tia lửa trông năng động hơn.

## 2. Mục tiêu học tập

- Phân bố nhiều hạt quanh tâm bằng vị trí hình cầu.
- Thiết lập lifetime và kích thước ngẫu nhiên cho Sparks.
- Áp dụng `Conform to Sphere` để tạo xu hướng chuyển động.
- Điều chỉnh hướng/tỷ lệ để hạt trông như tia sáng.

## 3. Tạo hệ thống Sparks

Nhân bản hệ thống Flash thành `Sparks`. Giữ cơ chế `Single Burst`, tăng **Count ≈ 20**. Trong `Initialize Particle`, dùng vị trí trên/ở vùng hình cầu có **radius ≈ 0.1** để các hạt không chồng hoàn toàn tại một điểm.

Tăng lifetime tối đa tới khoảng **0.4 giây**. Ở block kích thước, đặt khoảng ngẫu nhiên **0.1–0.2**. Mức biến thiên này làm bớt cảm giác mọi hạt giống nhau.

## 4. Thêm chuyển động

Dùng block điều khiển chuyển động dạng **Conform to Sphere** theo bố cục ví dụ. Hình cầu tạo tham chiếu cho hướng/chuyển động của các hạt; cần kiểm tra tham số và vị trí đặt block để điều chỉnh quỹ đạo đúng mong muốn. Đây là cấu hình minh họa bằng VFX Graph, không phải một quy luật vật lý tuyệt đối.

Muốn tạo tia kéo dài, định hướng hạt **dọc theo vận tốc** nếu output/phiên bản hỗ trợ chế độ đó. Sau đó dùng `Set Scale` để thu trục X, ví dụ **X = 0.2**. Khi các hạt rất nhỏ, có thể tăng mức kích thước tối đa lên khoảng **1** như một biến thể thử nghiệm.

| Tham số | Mốc thử nghiệm | Tác động thị giác |
| --- | --- | --- |
| Count | ~20 | Mật độ tia lửa |
| Position Sphere Radius | ~0.1 | Độ phân tán ban đầu |
| Max Lifetime | ~0.4 s | Tia lửa tắt nhanh |
| Random Size | 0.1–0.2 | Độ đa dạng |
| Scale X | ~0.2 | Mức kéo mảnh |
| Larger max size | ~1 (biến thể) | Nhìn rõ hơn nếu hạt quá nhỏ |

## 5. Phối màu Sparks

Nếu Flash màu vàng cam, Sparks có thể giữ cùng bảng màu hoặc dùng màu riêng thông qua một `Color Property` thứ hai. Một biến thể với tia lửa xanh lam tạo cảm giác năng lượng ma thuật. Không dùng một thuộc tính màu duy nhất nếu bạn muốn chỉnh Flash và Sparks độc lập.

## 6. Điều chỉnh theo thứ tự ưu tiên

Bắt đầu bằng mật độ (`Count`) và khu vực spawn (`Radius`), tiếp đến lifetime và kích thước. Chỉ sau khi đường đi hợp lý mới chỉnh kéo giãn/hướng. Điều này giúp không nhầm giữa **quỹ đạo hạt** và **hình dáng hạt**.

## 7. Thực hành

Dựng hai phiên bản: **hạt tròn** và **tia kéo dài theo vận tốc**. Giữ cùng Count và lifetime; chỉ đổi định hướng/scale. Ghi nhận tình huống nào dễ đọc hơn khi camera ở xa.

## 8. Câu hỏi ôn tập

### Câu 1

Tăng Count từ 1 lên khoảng 20 trong Sparks giúp gì?

A. Làm decal bám mesh hơn  
B. Tạo nhiều tia/hạt đồng thời  
C. Đổi Render Pipeline  
D. Tạo texture tự động

**Đáp án:** B. **Giải thích:** Count quyết định số hạt sinh trong một đợt phát.

### Câu 2

Vì sao đặt vị trí ban đầu trong một vùng hình cầu nhỏ?

A. Để tăng alpha  
B. Để xoay Cross  
C. Để tắt hiệu ứng  
D. Để các hạt không cùng nằm chính xác tại một điểm

**Đáp án:** D. **Giải thích:** Phân bố vị trí giúp Sparks có độ tỏa tự nhiên hơn.

### Câu 3

Muốn hạt có hình vệt theo hướng chuyển động, thuộc tính nào quan trọng nhất?

A. Hướng theo velocity và scale bất đối xứng  
B. Đổi tên graph  
C. Đặt lifetime vô hạn  
D. Tắt Spawn

**Đáp án:** A. **Giải thích:** Hướng theo vận tốc và tỷ lệ lệch trục tạo cảm giác vệt sáng.

### Câu 4

Khi hạt quá nhỏ và khó nhìn, hướng điều chỉnh nào được đề cập trong bài?

A. Giảm Count về 0  
B. Chuyển sang chỉ render Decal  
C. Thử tăng kích thước tối đa  
D. Đặt màu thành đen

**Đáp án:** C. **Giải thích:** Tăng mức size cho phép các tia đủ lớn để quan sát.

### Câu 5

Để đổi màu Sparks không ảnh hưởng Flash, nên làm gì?

A. Xóa Flash  
B. Dùng thuộc tính màu riêng cho Sparks  
C. Tăng Sphere Radius  
D. Tắt VFX Graph

**Đáp án:** B. **Giải thích:** Các Color Property độc lập giúp chỉnh từng lớp mà không thay đổi lớp khác.

## 9. Tổng kết

Một nhóm Sparks tốt phụ thuộc vào **vị trí phân bố**, **chuyển động**, **lifetime** và **hình dáng định hướng theo vận tốc**. Điều chỉnh từng nhóm thông số độc lập để giữ quyền kiểm soát.
