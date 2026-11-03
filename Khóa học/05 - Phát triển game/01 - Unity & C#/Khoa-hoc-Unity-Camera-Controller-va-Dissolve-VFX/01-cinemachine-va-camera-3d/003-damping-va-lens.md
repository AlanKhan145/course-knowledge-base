# Tinh chỉnh damping, tốc độ đáp ứng và lens

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Điều chỉnh độ trễ theo sau và hướng nhìn để camera không rung hoặc trôi quá mức.

**Mục tiêu học tập**

- Phân biệt position damping và rotation damping.
- Cấu hình phản hồi tức thì hoặc mượt theo yêu cầu gameplay.
- Kiểm tra Save During Play và thiết lập Lens.

## 1. Vì sao camera có độ trễ?
Khi target dịch chuyển, Cinemachine có thể nội suy để tạo cảm giác nặng và điện ảnh. Hành vi đó hữu ích trong game khám phá nhưng dễ gây khó chịu trong game chiến thuật khi người chơi muốn camera dừng chính xác tại vị trí họ vừa chọn.

`Position Damping` điều khiển độ trễ đi theo **vị trí**; `Rotation Damping` hoặc các tham số damping của Rotation Composer điều khiển tốc độ **hướng nhìn** bám target. Hai hệ này cần thử độc lập.

## 2. Thiết lập trong Inspector
1. Chọn `CM_StrategyCamera`.
2. Mở `Cinemachine Follow` và đặt position damping về 0 để thử bám ngay.
3. Trong `Rotation Composer`, giảm damping ngang/dọc về 0 nếu muốn hướng nhìn phản hồi tức thì.
4. Bật Play và di chuyển/rotate `CameraTarget` qua Inspector.
5. Sau đó thử tăng damping một chút để cảm nhận khác biệt; lưu preset phù hợp thể loại game.

## 3. Tránh nhầm giữa damping và làm mượt của script
Trong các bài zoom, chúng ta làm mượt **tham số FOV/Offset** bằng code. Điều này khác với Cinemachine damping, vốn làm mượt **đường đi từ target tới camera**. Nếu cộng quá nhiều lớp smoothing, phản hồi sẽ thành chậm và nhão.

| Tình huống | Khuyến nghị xuất phát |
|---|---|
| RTS/cờ chiến thuật | Damping thấp; zoom mượt vừa phải |
| Camera điện ảnh | Damping lớn hơn và có blend |
| Camera cần dừng đúng lệnh | Thử 0 để so sánh |

## 4. Save During Play
Nếu điều chỉnh khi Play Mode, một số thuộc tính có thể trở lại giá trị trước đó sau khi Stop. Cinemachine có thiết lập `Save During Play` giúp giữ một số chỉnh sửa camera khi thử. Cũng có thể ghi lại giá trị và đặt lại trong Edit Mode để chắc chắn. Không trông chờ việc thay đổi `Transform` của tất cả đối tượng được lưu tự động.

## 5. Thực hành
Ghi hai clip ngắn: Damping=0 và Damping lớn hơn 0 khi target di chuyển gấp/đổi hướng liên tục. So sánh độ phản hồi và khả năng quan sát quân cờ.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Position Damping xử lý chủ yếu điều gì?

A. Độ trễ camera đi theo vị trí của target  
B. Độ sắc nét của normal map  
C. Số lượng frame Animator  
D. Cường độ âm thanh  

**Đáp án:** A

**Giải thích:** Position damping điều chỉnh độ bám theo vị trí.

### Câu 2

Muốn hướng nhìn phản hồi nhanh khi xoay target nên chỉnh gì?

A. Occlusion Map  
B. Rigidbody Mass  
C. Damping của Rotation Composer  
D. Shader Queue  

**Đáp án:** C

**Giải thích:** Rotation damping ảnh hưởng độ trễ của hướng camera.

### Câu 3

Vì sao không nên cộng quá nhiều lớp smoothing?

A. Camera phản hồi chậm và có cảm giác trôi  
B. Camera mất hết texture  
C. FPS luôn tăng gấp đôi  
D. Nó tự chuyển sang Orthographic  

**Đáp án:** A

**Giải thích:** Các bộ lọc nối tiếp làm tăng thời gian đáp ứng.

### Câu 4

Save During Play liên quan tới điều gì?

A. Lưu mọi thay đổi của toàn dự án  
B. Thay thế Git  
C. Giữ các điều chỉnh hỗ trợ khi thử trong Play Mode  
D. Bắt buộc để render 3D  

**Đáp án:** C

**Giải thích:** Tính năng giúp fine-tune camera trong Play Mode.

### Câu 5

Damping=0 thường tạo đặc tính nào?

A. Bám target tức thời hơn  
B. Phóng to không giới hạn  
C. Tự động xoay theo chuột  
D. Tăng kích thước bản đồ  

**Đáp án:** A

**Giải thích:** Độ trễ dịch chuyển được giảm thiểu.

## 7. Tổng kết

Điều chỉnh độ trễ theo sau và hướng nhìn để camera không rung hoặc trôi quá mức. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
