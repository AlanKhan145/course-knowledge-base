# Bài 07 — Bổ sung animation Macarena bằng Without Skin

## 1. Tóm tắt

Khi đã có model AJ và Avatar, mỗi chuyển động bổ sung có thể được nhập dưới dạng FBX chỉ chứa animation. Bài học thêm điệu nhảy `Macarena` và cấu hình để clip sử dụng chung Avatar của nhân vật chính.

## 2. Mục tiêu học tập

- Tải `Macarena` từ Mixamo với lựa chọn `Without Skin`.
- Nhập file vào `Assets/Mixamo/Animations`.
- Chọn `Copy From Other Avatar` và gán Avatar của `AJ`.
- Bật tùy chọn lặp cho clip khi cần, kiểm tra kết quả import.

## 3. Lợi ích của việc dùng chung Avatar

Hai animation đều điều khiển cùng một bộ xương; mỗi clip không cần sở hữu một bản mesh riêng. Việc tách model khỏi các chuyển động mới giúp cấu trúc asset gọn hơn, dễ thay clip mà không thay đổi GameObject của nhân vật.

Điều kiện quan trọng là animation bổ sung phải tương thích với cách Unity diễn giải rig của nhân vật. Nếu clip dùng loại rig khác, việc chỉ chọn một Avatar không đảm bảo chuyển động đúng.

## 4. Tải clip Macarena

1. Vào Mixamo, giữ model `AJ` đang chọn.
2. Xóa từ khóa `Neutral Idle` trong ô tìm kiếm animation nếu cần.
3. Tìm `Dance` hoặc `Macarena`, chọn chuyển động Macarena.
4. Chọn `Download` → `FBX for Unity` → **`Without Skin`**.
5. Lưu FBX và nhập vào `Assets/Mixamo/Animations`.

`Without Skin` ở đây chỉ nghĩa là không tải lại phần mesh/skin của nhân vật; file vẫn mang dữ liệu chuyển động cần cho Unity.

## 5. Dùng lại Avatar của AJ

Chọn FBX `Macarena` đã nhập, mở `Rig` trong Inspector. Đảm bảo `Animation Type` tương thích với nhân vật `AJ`, sau đó ở `Avatar Definition` chọn **`Copy From Other Avatar`** (một số giao diện ghi `Copy from Other Avatar`). Trong ô nguồn Avatar xuất hiện, chọn Avatar từ FBX `AJ` đã cấu hình ở bài trước. Nhấn `Apply`.

Khác biệt rất quan trọng:

| FBX | Avatar Definition | Vì sao? |
| --- | --- | --- |
| AJ + Neutral Idle / With Skin | `Create From This Model` | Có model/rig gốc để tạo Avatar |
| Macarena / Without Skin | `Copy From Other Avatar` | Không tạo model mới; dùng Avatar gốc |

## 6. Thiết lập Loop Time và Loop Pose

Chọn tab `Animation` của clip Macarena. Trong quy trình thực hành, bật `Loop Time` và `Loop Pose` rồi `Apply`. Hai tùy chọn này cho phép clip phát lặp mượt hơn nếu state được giữ. Tuy nhiên, **khi Animator có transition trở lại Idle sau một chu kỳ, chính `Has Exit Time` trên transition sẽ quyết định thời điểm thoát**, chứ không phải `Loop Time`.

Nếu về sau thiết kế kỹ năng chỉ được phát đúng một lần, bạn có thể chọn tắt `Loop Time` tùy mục tiêu gameplay. Trong bài này, giữ loop như ví dụ và dùng exit-time để trở về Idle.

## 7. Kiểm tra kết quả

Mở rộng FBX Macarena trong Project và chọn clip để xem preview. Nếu rig hợp lệ, chuyển động sẽ có thể được phát trên nhân vật AJ khi được gán cho Animator Controller. Chưa cần tạo nhân vật mới trong Hierarchy chỉ để chứa animation này.

## 8. Lỗi thường gặp

- **Chọn nhầm Avatar:** kiểm tra ô `Source Avatar` trỏ đúng đến Avatar của AJ.
- **Clip không có mesh:** đây là kết quả bình thường khi dùng `Without Skin`.
- **Thông báo Avatar không tương thích:** kiểm tra `Animation Type`, kết quả mapping của model và loại animation.
- **Tải nhầm `With Skin`:** có thể xuất hiện model lặp; tải lại bản chỉ chứa animation sẽ dễ quản lý hơn.

## 9. Câu hỏi ôn tập

**Câu 1.** Sau khi có nhân vật AJ, muốn thêm một điệu nhảy, chế độ tải nào phù hợp?

A. `Without Skin`  
B. Chỉ PNG  
C. Chỉ material  
D. Xóa model cũ

**Đáp án:** A. **Giải thích:** Chỉ cần lấy clip mới để áp vào model/Avatar hiện có.

**Câu 2.** Với Macarena Without Skin, Avatar Definition phù hợp là gì?

A. `Create From This Model`  
B. `Copy From Other Avatar`  
C. Tắt Animator  
D. Xóa FBX

**Đáp án:** B. **Giải thích:** FBX bổ sung dùng lại Avatar nguồn của AJ.

**Câu 3.** `Source Avatar` cần trỏ đến đâu?

A. Material bàn cờ  
B. Camera scene  
C. File C#  
D. Avatar từ model AJ gốc

**Đáp án:** D. **Giải thích:** Đây là Avatar điều khiển xương cho nhân vật cần phát clip.

**Câu 4.** Một clip `Without Skin` không chứa model có phải lỗi không?

A. Luôn là lỗi  
B. Có nghĩa không có animation  
C. Không, vì chỉ cần dữ liệu chuyển động  
D. Có nghĩa project không hỗ trợ FBX

**Đáp án:** C. **Giải thích:** Lựa chọn Without Skin chủ ý bỏ phần mesh/skin khi tải animation bổ sung.

**Câu 5.** Để nhân vật thoát state nhảy sau một chu kỳ, cấu hình liên quan trực tiếp là gì?

A. `Has Exit Time` của transition trở về Idle  
B. `Tiling` material  
C. Tên nhân vật  
D. Số lượng texture

**Đáp án:** A. **Giải thích:** Exit Time điều khiển thời điểm transition được phép xảy ra.

## 10. Tổng kết

Bạn đã thêm clip mới mà không nhân bản model. `Create From This Model` dùng cho nhân vật gốc; `Copy From Other Avatar` dùng cho animation muốn tận dụng Avatar đã có.
