# Phối màu nhiều lớp, kiểm soát độ sáng và hiệu năng

> **Loại:** Bài học lý thuyết kết hợp thực hành

## 1. Tóm tắt

Một quả cầu năng lượng đẹp cần các lớp VFX ăn khớp thay vì tất cả phát sáng như nhau. Bài này hoàn thiện màu, điều khiển kích thước tổng thể và thực hành tinh chỉnh chất lượng dưới giới hạn hiệu năng.

## 2. Mục tiêu học tập

- Thay đổi màu độc lập giữa Trails, Pulse và Particle.
- Kiểm soát được tác dụng của OrbSize trên cả ba lớp.
- Đề xuất được các bước thử nghiệm khi GPU quá tải hoặc hiệu ứng quá sáng.

## 3. Phối màu bằng thuộc tính dùng chung và riêng

Sau khi hoàn thành các lớp, tạo màu thứ hai, chẳng hạn `TrailColor`, thay cho việc buộc mọi hạt dùng `OrbColor`. Buổi thực hành thử màu **tím** rồi **vàng** cho đường trail trong khi lớp sáng khác vẫn giữ màu xanh dương.

Màu bổ sung tạo sự phân cấp: lõi và hạt nền có thể xanh, đường vệt có sắc tím/vàng để dễ đọc quỹ đạo. Không có bảng màu bắt buộc; mục tiêu là **tách vai trò hình ảnh** thay vì tăng sáng đồng loạt.

| Lớp | Vai trò thị giác | Điều khiển đề xuất |
| --- | --- | --- |
| `Trails` | Đường chuyển động xoắn | `TrailColor`, width, Lifetime |
| `Pulse` | Nhịp năng lượng | `OrbColor`, Alpha over Life |
| `Particles` | Kết cấu hạt dày | `OrbColor`, ParticleSpawnRate, Turbulence |

## 4. Một property kích thước cho toàn bộ hiệu ứng

Bài thực hành dùng `OrbSize` cho nhiều bán kính/tỷ lệ: `×1` ở spawn của trails, `×1.5` ở Conform của trails, `×2` ở hệ hạt nền và `×10` ở xung quad. Hãy rà lại mọi nơi liên quan đến kích thước để tránh cảnh một phần co lại nhưng phần khác vẫn giữ nguyên.

Tuy vậy, **OrbSize không nhất thiết phải nhân mọi thông số vật lý**. Thời gian sống hay tốc độ phát có thể giữ độc lập để nhà thiết kế tinh chỉnh mật độ phù hợp khi thay kích thước.

## 5. Tăng chất lượng theo thứ tự có kiểm soát

Bắt đầu từ một hiệu ứng rõ hình khối ở mức phát hạt vừa đủ. Sau đó:

1. Điều chỉnh `OrbSize` để đạt kích thước hiển thị.
2. Tinh chỉnh mức nhiễu và Conform để chuyển động không phá dáng.
3. Chỉnh độ dày trails và đường cong alpha cho độ mượt.
4. Chọn màu thứ hai cho trails, kiểm tra tương phản giữa các lớp.
5. Cuối cùng mới tăng Spawn Rate nếu mật độ hạt thực sự chưa đủ.

Trong ví dụ, `ParticleSpawnRate` được đẩy lên `50000` để minh họa mức rất nặng. Khi triển khai game, đặc biệt trên thiết bị yếu, phải thử với mức nhỏ hơn và đo hiệu năng thật; không suy luận rằng VFX Graph sẽ luôn chạy mượt chỉ vì được tính toán trên GPU.

## 6. Kiểm tra trước khi sử dụng trong game

Khi kiểm thử, thay đổi từng tham số một và ghi chú điều gì thay đổi: mật độ, đường kính, chiều dài trail, cường độ sáng, độ xoáy hoặc tốc độ chạy. Sau đó kiểm tra trong Scene ở khoảng cách Camera dự kiến.

**Checklist thị giác**: quả cầu có tâm rõ; trail không che hết lớp nền; xung sáng có pha sáng–mờ; kích thước thay đổi đồng bộ; hiệu ứng có màu chủ đạo và màu nhấn; mật độ hạt không tạo nhiễu quá mức.

## 7. Thực hành ngắn

Tạo hai biến thể của cùng graph: (A) xanh dương + tím, (B) xanh dương + vàng. Ở mỗi biến thể, giảm mật độ nếu hiệu ứng quá sáng và thay `OrbSize` sang hai kích thước khác nhau để phát hiện node còn hard-code.

## 8. Lỗi thường gặp và cách xử lý

- **Mất sự phân cấp màu:** giảm cường độ ở lớp nền hoặc chỉ đổi màu một lớp.
- **Thay Size làm trail lệch khỏi orb:** rà lại hệ số bán kính của các hệ.
- **Tụt khung hình khi tăng mật độ:** giảm ParticleSpawnRate trước, sau đó kiểm tra Capacity và số lớp bật cùng lúc.
- **Không nhận ra pha xung:** kiểm tra Alpha over Life và thời gian phát định kỳ.

## 9. Câu hỏi ôn tập

### Câu 1
Mục đích chính của màu thứ hai ở trail là gì?

A. Phân biệt lớp đường sáng với các lớp còn lại  
B. Thay thế Spawn context  
C. Sửa lỗi package  
D. Tăng Capacity tự động  

**Đáp án:** A
**Giải thích:** Màu nhấn giúp quỹ đạo nổi rõ và tổng thể có chiều sâu.

### Câu 2
OrbSize được dùng trong phần nào?

A. Chỉ tên asset  
B. Nhiều bán kính và kích thước hiển thị của các lớp  
C. Chỉ chất lượng texture  
D. Chỉ thời gian chạy Editor  

**Đáp án:** B
**Giải thích:** Property dùng chung giúp các lớp co giãn có quan hệ.

### Câu 3
Tăng ParticleSpawnRate đến 50000 nên được hiểu thế nào?

A. Luôn tối ưu cho mobile  
B. Mức thử nghiệm nặng cần thận trọng  
C. Không làm thay đổi GPU  
D. Giá trị bắt buộc để bài chạy  

**Đáp án:** B
**Giải thích:** Ví dụ có cảnh báo rõ về nguy cơ quá tải GPU.

### Câu 4
Thứ tự tinh chỉnh nào có lợi nhất?

A. Tăng số hạt tối đa trước mọi việc  
B. Đổi tất cả thông số cùng lúc  
C. Ổn định hình dạng và chuyển động rồi mới tăng mật độ  
D. Bỏ kiểm tra Camera  

**Đáp án:** C
**Giải thích:** Thử theo từng nhóm thông số giúp xác định nguyên nhân thay đổi chất lượng.

## 10. Tổng kết

Phối màu và điều chỉnh thông số riêng theo lớp sẽ tạo hiệu ứng giàu chiều sâu hơn việc chỉ tăng số hạt. Chú ý đo hiệu năng trong ngữ cảnh game thực tế.
