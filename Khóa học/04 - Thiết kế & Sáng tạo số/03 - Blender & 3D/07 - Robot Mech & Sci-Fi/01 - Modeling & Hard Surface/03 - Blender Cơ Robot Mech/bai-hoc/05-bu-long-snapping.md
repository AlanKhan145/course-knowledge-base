# Bài 05 — Nhân bản bu-lông và gắn lên bề mặt bằng Face Snapping

## 1. Tóm tắt

Bu-lông và đinh tán giúp robot mech có tỷ lệ và ngôn ngữ cơ khí rõ ràng. Thay vì đặt từng chi tiết bằng mắt ở góc nhìn phối cảnh, ta sẽ sử dụng **Face Snapping** và tùy chọn căn hướng theo bề mặt để gắn bu-lông vào các mặt cong, mặt nghiêng của cụm cổ.

## 2. Mục tiêu học tập

- Chọn và nhân bản đúng một cụm bu-lông bằng `L` và `Shift + D`.
- Hiểu sự khác biệt giữa `Separate` và `Join` khi tái sử dụng chi tiết.
- Cấu hình snap trên `Face`, với vị trí và hướng bám theo bề mặt.
- Tạo nhiều bu-lông có cùng hình học nhưng nằm ở các mặt khác nhau.
- Sửa lỗi bu-lông bị chìm, nổi hoặc sai hướng.

## 3. Chuẩn bị bu-lông mẫu

Chọn object đang chứa một bu-lông có hình học hoàn chỉnh. `Tab` vào `Edit Mode`, `Alt + A` bỏ chọn rồi trỏ lên bu-lông và nhấn `L` để lấy riêng phần mesh liên thông của nó.

1. `Shift + D` nhân bản cụm bu-lông.
2. Dời bản sao ra khỏi vị trí cũ.
3. Khi bản sao đang được chọn, `P > Selection` để tách thành object riêng.
4. `Tab` về `Object Mode` và chọn đối tượng bu-lông mới.

Nếu bạn muốn gắn bu-lông này thành một phần của object cổ vì mục đích tổ chức mesh, chọn bu-lông và cuối cùng chọn object cổ, rồi dùng `Ctrl + J`. Lưu ý `Ctrl + J` chỉ gộp vào cùng một object; các đảo mesh có thể vẫn tách rời về topology. Nếu cần bu-lông là phần cứng chuyển động riêng, **không cần Join**.

## 4. Thiết lập Face Snapping

Bật biểu tượng nam châm trong thanh 3D Viewport. Trong tùy chọn Snapping, chọn mục tiêu **Face**. Thiết lập thường hữu ích trong quy trình này:

- **Snap To: Face** — đưa vị trí của chi tiết lên mặt dưới con trỏ.
- **Snap With/Target: Center** — dùng trung tâm phần được snap trong thiết lập phù hợp.
- **Align Rotation to Target** — cho phép hướng của phần bu-lông xoay theo pháp tuyến mặt đích.
- **Project onto Self** — khi muốn snap lên mặt của cùng đối tượng đang chỉnh sửa, tùy cấu trúc mesh và phiên bản Blender.

Các nhãn giao diện có thể thay đổi theo bản Blender/keymap. Hãy dựa vào chức năng **snap lên mặt và căn theo normal**. Với bu-lông nằm trong cùng object với vỏ, cần kiểm tra xem bề mặt của chính object đó có được tham gia snap hay không.

## 5. Đặt bu-lông đầu tiên

Trong `Edit Mode` của object chứa bu-lông và các mặt cần gắn (hoặc theo cách chọn/snap phù hợp ở `Object Mode` nếu giữ bu-lông riêng):

1. Chọn toàn bộ đảo mesh bu-lông bằng `L`.
2. Bật `Snapping` trên `Face`.
3. Nhấn `G`, đưa chuột đến bề mặt dự kiến; theo dõi bu-lông bám vào mặt.
4. Kiểm tra hướng của đầu bu-lông so với pháp tuyến bề mặt. Nếu hướng ngược, căn lại orientation của chi tiết nguồn rồi thử lại.
5. Đặt tại bề mặt của phần khớp cổ.

Ở vị trí có độ cong lớn, snap theo mặt polygon có thể khiến bu-lông bị nghiêng theo từng mặt phẳng nhỏ. Hãy xem cận cảnh và điều chỉnh thủ công nhẹ nếu cần.

## 6. Nhân bản thành cụm bu-lông

Sau khi có bu-lông mẫu đúng vị trí:

1. Dùng `Shift + D` tạo một bu-lông thứ hai.
2. Nếu hai vị trí nằm dọc nhau, dùng `Y` để hạn chế chiều di chuyển, hoặc dùng `G` với `Face Snapping` tiếp tục bám mặt.
3. Lặp lại tại những mặt cơ khí cần thể hiện vị trí bắt vít.
4. Kiểm tra cả bốn hướng: trước, bên, phối cảnh và phía sau nếu có thể.

Bu-lông nên phân bố theo chức năng và bố cục. Đặt các con ốc ở quanh trục, cạnh tấm ốp hoặc mép nối hợp lý hơn là rải đều trên toàn bộ mesh.

## 7. Checkpoint và sửa lỗi

**Checkpoint:** Có nhiều bu-lông nhìn đúng như được bắt vào vỏ khớp. Không có bu-lông nào xuyên khỏi mặt bên kia hoặc quay ngang không chủ ý.

| Hiện tượng | Nguyên nhân có thể | Khắc phục |
| --- | --- | --- |
| Bu-lông không dính bề mặt | Chưa bật nam châm hoặc chưa đặt Snap To Face | Kiểm tra Snap và chế độ thao tác |
| Bu-lông nằm ngang dù gắn lên mặt nghiêng | Chưa căn hướng theo normal | Bật `Align Rotation to Target` hoặc căn thủ công |
| Bu-lông chìm trong mặt | Vị trí origin/trung tâm bu-lông không phù hợp | Điều chỉnh offset sau snap và orientation |
| Snap không bắt vào mesh của chính object | Self-snapping chưa được cấu hình | Kiểm tra `Project onto Self` hoặc tách object rồi dùng snapping phù hợp |
| Di chuyển làm mất vị trí chi tiết khác | Đã chọn nhầm nhiều đảo mesh | `Alt + A`, chọn riêng bu-lông bằng `L` |

## 8. Thực hành ngắn

Lắp một nhóm bu-lông vào phần thân cổ và một nhóm lên khu vực mép nối phía trên. Tự so sánh kết quả khi tắt và bật `Align Rotation to Target`, rồi chọn cấu hình đúng cho bề mặt nghiêng.

## 9. Câu hỏi ôn tập

**Câu 1.** Đặt bu-lông lên mặt nghiêng với hướng bám theo normal nên sử dụng gì?

A. `Face Snapping` kết hợp `Align Rotation to Target`.  
B. Chỉ dùng `Shade Smooth`.  
C. Xóa normals của vỏ.  
D. Chuyển sang Sculpt Mode.

**Đáp án: A.** Face snapping xác định mặt tiếp xúc còn Align Rotation giúp hướng chi tiết theo mặt đó.

**Câu 2.** Trong Edit Mode, cách chọn nhanh một bu-lông là đảo mesh độc lập là gì?

A. `F`.  
B. `E`.  
C. `L` khi con trỏ nằm trên đảo mesh bu-lông.  
D. `Ctrl + S`.

**Đáp án: C.** `L` chọn thành phần hình học liên thông dưới con trỏ.

**Câu 3.** Vì sao một bu-lông có thể bị chìm một phần sau khi snap?

A. Vì object được lưu bằng `.blend`.  
B. Vì `G` bị tắt vĩnh viễn.  
C. Vì dùng Numpad 1.  
D. Vì tâm/origin dùng làm điểm snap không trùng mặt tiếp xúc của bu-lông.

**Đáp án: D.** Offset giữa tâm hình học và đáy bu-lông có thể khiến chi tiết xuyên vào mặt.

**Câu 4.** `Ctrl + J` khác với `P > Selection` như thế nào?

A. Cả hai luôn tự hàn mesh.  
B. `Ctrl + J` gộp object, `P > Selection` tách phần mesh được chọn.  
C. `P` thêm ánh sáng, `Ctrl + J` xóa mesh.  
D. Cả hai chỉ dùng trong Sculpt Mode.

**Đáp án: B.** Hai lệnh có mục tiêu ngược nhau trong việc tổ chức đối tượng.

**Câu 5.** Để bố trí bu-lông nhìn hợp lý, nên ưu tiên điều gì?

A. Vị trí mép nối, trục và điểm bắt cơ khí.  
B. Số lượng càng nhiều càng tốt.  
C. Chỉ đặt chúng ở nơi khuất.  
D. Đặt tất cả ở World Origin.

**Đáp án: A.** Vị trí có ý nghĩa kết cấu giúp người xem nhận ra chức năng cơ khí của chi tiết.

## 10. Tổng kết

Bu-lông có thể được tái sử dụng hiệu quả qua `L → Shift + D → P` và các công cụ `Snapping`. Một thao tác chuẩn cần đồng thời kiểm tra **vị trí, hướng normal và độ sâu tiếp xúc**, không chỉ nhìn hình ở một góc.
