# Bài 08 — Rig phụ kiện, dây đeo, váy tự động và tay áo rộng

## 1. Tổng quan

Trang phục không chỉ có váy. Túi đeo hông, dây đai và tay áo rộng cần điều khiển riêng: nếu chỉ gắn cứng vào hip hoặc upper arm, chúng có thể trượt sai, xoắn, hay xuyên qua thân. Bài này trình bày tư duy rig module để animator vừa có chuyển động theo cơ thể vừa có khả năng chỉnh tay.

## 2. Mục tiêu học tập

- Thiết kế control túi và dây đeo theo parent thích hợp.
- Giải thích hệ constraint giới hạn và cơ chế váy mở theo chân.
- Phân biệt biến dạng tay áo bằng bone thường và B-Bone cùng hạn chế khi xuất.

## 3. Nội dung bài học

### 3.1. Rig túi và dây đeo

Tạo `CTRL_Bag` làm control chính cho túi; có thể parent control tới hip để đi theo người, nhưng cho phép di chuyển lệch trái/phải hoặc xoay nhẹ. Tạo chuỗi phụ cho nắp túi để mở/đóng; thêm bone cho dây đeo chạy từ túi lên vùng shoulder/spine. Trọng số trên dây phải chuyển dần giữa các bone thay vì phụ thuộc một bone duy nhất.

Khi tay áo cọ dây, animator có thể dùng control phụ đẩy dây ra hoặc xoay dây né chuyển động. Thêm `Limit Rotation` ở các trục cần hạn chế để tránh nắp/túi xoắn vô lý. Ràng buộc đặt trực tiếp trên control sau khi rig được sinh lại có thể mất khi cập nhật metarig; nên chuẩn hóa rig trước khi thêm các chỉnh sửa tay phụ thuộc rig cuối.

### 3.2. Rig váy có chuyển động tự động theo chân

Một hệ váy nâng cao có thể lấy các trục xoay của chân làm đầu vào cho chuỗi bone phía trước, sau, trái, phải. Thay vì copy toàn bộ xoay chân, dùng bone trung gian và constraint với influence phân bổ từ thấp đến cao dọc thân váy. Khi chân bước, phần váy liên quan tự mở ra; animator vẫn cần sửa tay trong tư thế ngồi hoặc xoạc lớn.

Thiết kế với hai bộ xương riêng cho phần váy phía trước và sau giúp đặt giới hạn khác nhau và tránh trường hợp sửa mặt trước nhưng khiến mặt sau xuyên cơ thể. Các bone giữa có thể lấy ảnh hưởng từ hai nhóm hai bên (ví dụ chia ảnh hưởng cân bằng) để tạo đường cong liên tục.

### 3.3. Tay áo rộng: chống xoắn và tăng linh hoạt

Gán hoàn toàn tay áo vào upper-arm có thể làm ống tay xoắn hoặc bó sát không tự nhiên. Với ống tay rộng, có thể tạo các `B-Bone` (Bendy Bones) hoặc bone phụ cho mép ống tay, bố trí hai control ở đầu/cuối để chỉnh độ cong. Thiết lập chuỗi theo kiểu theo hướng (`Damped Track`) và tách ảnh hưởng xoay trục dọc để khi cánh tay twist, vải không nhất thiết xoắn theo toàn bộ.

Có thể thêm `CTRL_Sleeve_Slide` để đẩy mép tay áo trượt lên/xuống trên cánh tay trong tư thế cực hạn. Hãy phân biệt **deformation trong Blender** với dữ liệu có thể xuất: các hệ B-Bone/constraint phức tạp có thể phải bake thành chuyển động bone thông thường hoặc làm lại trong engine; không coi chúng là tương đương khi xuất FBX.

### 3.4. Kiểm thử module

Túi: đi bộ và xoay hông, xem dây có đâm vào tay áo không. Váy: giơ chân từng bên, ngồi, xoạc chân và xoay thân. Tay áo: nâng tay ngang, gập khuỷu, xoay cẳng tay. Đặt control riêng cho các tình huống khó thay vì khóa mọi hành vi tự động: hoạt hình có chủ đích thường cần cả logic tự động lẫn chỉnh tay.

## 4. Thực hành

**Nhiệm vụ:** Chọn một trong ba module: (A) túi có nắp và dây đeo; (B) váy tự mở theo chân; (C) tay áo rộng có control trượt. Dựng các bone DEF/CTRL cần thiết, tạo ít nhất một constraint và hai tư thế test đối lập.

**Checkpoint:** Module theo nhân vật, nhưng vẫn chỉnh độc lập; không xoắn nặng; đã xác định phần nào cần bake trước khi xuất game.

## 5. Câu hỏi ôn tập

**Câu 1.** Vì sao tạo CTRL_Bag riêng thay vì parent cứng túi vào hip?

A. Để thêm ánh sáng
B. Để hiệu chỉnh túi độc lập mà vẫn đi theo hông
C. Để xóa va chạm
D. Để tăng texture

**Đáp án:** B. **Giải thích:** Control riêng cho phép chuyển động bù tự nhiên.

**Câu 2.** Một dây đeo đi từ túi tới vai nên dùng cách skin nào?

A. Phân bố trọng số qua nhiều bone phù hợp
B. Chỉ bone bàn chân
C. Chỉ camera
D. Không cần vertex groups

**Đáp án:** A. **Giải thích:** Dây cần theo nhiều vùng cơ thể, đòi hỏi chuyển tiếp mềm.

**Câu 3.** Tại sao tách điều khiển váy trước và sau?

A. Để đổi chất liệu nhanh
B. Để xóa rig chính
C. Để dùng ít frame
D. Để kiểm soát phản ứng và giới hạn khác nhau

**Đáp án:** D. **Giải thích:** Hai hướng có tương tác khác nhau với chân và mông.

**Câu 4.** Điểm cần chú ý với B-Bone khi xuất sang game engine?

A. Đảm bảo mọi engine tự nhận B-Bone
B. B-Bone luôn biến mất trong Blender
C. Có thể cần bake/đơn giản hóa deformation
D. Chỉ xuất được PNG

**Đáp án:** C. **Giải thích:** Engine và định dạng trung gian không nhất thiết giữ nguyên cơ chế B-Bone.

**Câu 5.** Tay áo xuyên dây túi khi giơ tay, giải pháp linh hoạt là gì?

A. Đổi Sky
B. Thêm control dây/tay áo để bù và kiểm tra constraint
C. Xóa armature
D. Chỉ tăng render samples

**Đáp án:** B. **Giải thích:** Điều khiển phụ giúp giải quyết xung đột tại các pose đặc biệt.

## 6. Tổng kết

Rig trang phục chuyên nghiệp là tổ hợp các module có quan hệ rõ ràng. Control phụ và constraint có giới hạn giúp biến dạng đẹp mà animator vẫn sửa được các tình huống khó.
