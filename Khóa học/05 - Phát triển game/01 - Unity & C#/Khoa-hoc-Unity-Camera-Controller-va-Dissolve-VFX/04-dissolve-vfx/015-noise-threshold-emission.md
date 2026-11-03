# Tạo hiệu ứng Dissolve với Noise, Threshold và viền sáng

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Biến material thành một hiệu ứng biến mất theo nhiễu, có đường biên phát sáng.

**Mục tiêu học tập**

- Kết nối Simple Noise và Alpha Clip Threshold.
- Thiết kế biên sáng dựa trên độ lệch threshold.
- Kiểm tra slider DissolveAmount từ 0 đến 1.

## 1. Tạo mặt nạ tan rã
Dùng node `Simple Noise` tạo trường giá trị $n(\mathbf{uv})\in[0,1]$ trên bề mặt. `Noise Scale` ví dụ 30 tạo họa tiết rách nhỏ; scale thấp tạo các mảng lớn hơn. Chọn UV hoặc không gian tọa độ phù hợp mesh.

Dùng `Alpha = noise` và `Alpha Clip Threshold = DissolveAmount`. Pixel còn thấy khi $n\ge t$, với $t$ là ngưỡng 0→1. Càng tăng $t$, càng nhiều fragment bị loại, tạo cảm giác model biến mất. Điểm đầu 0 nên gần như còn nguyên; điểm cuối 1 gần như mất toàn bộ.

## 2. Mặt nạ viền phát sáng
Tạo band quanh ngưỡng:

$$
E = \operatorname{step}(t,n)-\operatorname{step}(t+w,n)
$$

Trong đó $w$ là độ rộng viền ví dụ 0.05. `E = 1` ở vùng noise nằm giữa `t` và `t+w` (phía vẫn còn hiển thị). Dùng hai node `Step`, `Subtract`, sau đó `Multiply` với màu HDR `_DissolveColor` → `Emission`.

> Trong Shader Graph, hãy kiểm tra chiều cổng `Step` theo phiên bản node bạn dùng; phép toán mong muốn là **step(threshold, noise)**, không phải hoán đổi noise và threshold.

## 3. Properties đề xuất
| Reference | Kiểu | Giá trị thử |
|---|---|---|
| `_DissolveAmount` | Range 0–1 | 0 |
| `_DissolveWidth` | Range 0–0.2 | 0.05 |
| `_DissolveColor` | HDR Color | Cam/vàng sáng |
| `_NoiseScale` | Float | 30 |

Màu HDR có thể tạo glow rõ hơn khi scene có Bloom; nếu chưa có Bloom, emission vẫn xuất hiện nhưng không nhất thiết tạo hào quang mềm.

## 4. Thao tác kiểm thử
Save Graph, chọn material. Kéo `_DissolveAmount` lần lượt 0, 0.25, 0.5, 0.75, 1. Theo dõi model tan dần và viền sáng chạy xuyên bề mặt. Điều chỉnh Width quá lớn sẽ thành một vùng màu dày, quá nhỏ sẽ khó nhìn.

## 5. Điểm dễ sai
- `Alpha Clip Threshold` không được bật: vật thể không bị loại pixel như mong đợi.
- Sample Noise vào Alpha nhưng không nối threshold: không điều khiển được mức tan.
- Property Reference sai chữ hoa/thường: C# không thay đổi đúng giá trị.
- Edge emission chỉ nhìn rõ khi có thiết lập ánh sáng/post-processing phù hợp.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Biến điều khiển mức độ tan từ 0 đến 1 là gì?

A. _DissolveAmount  
B. _Metallic  
C. _CameraNear  
D. _RootXZ  

**Đáp án:** A

**Giải thích:** Threshold quyết định bao nhiêu pixel bị clip.

### Câu 2

Simple Noise có vai trò gì?

A. Tạo Rigidbody  
B. Quy định animation clip  
C. Tạo họa tiết ngẫu nhiên làm mặt nạ tan rã  
D. Tính kích thước Game view  

**Đáp án:** C

**Giải thích:** Noise cho hình biên dissolve không đồng đều.

### Câu 3

Viền sáng nằm tại vùng nào của noise?

A. Giữa ngưỡng t và t + width  
B. Toàn bộ pixel n=0  
C. Bên ngoài mọi vùng hiển thị  
D. Chỉ trên UV bằng 1  

**Đáp án:** A

**Giải thích:** Band sát ngưỡng tạo đường rìa hiệu ứng.

### Câu 4

Cổng nào giúp viền sáng tự phát sáng trong shader?

A. Metallic  
B. Alpha Clip Threshold duy nhất  
C. Emission  
D. Normal  

**Đáp án:** C

**Giải thích:** Emission thêm màu phát xạ cho vùng rìa.

### Câu 5

Khi _DissolveWidth quá lớn sẽ có hiện tượng gì?

A. Vùng sáng dày và kém sắc  
B. Camera chuyển thành 2D  
C. Nhân vật mất Animator  
D. Tự tạo đạn  

**Đáp án:** A

**Giải thích:** Độ rộng band điều khiển độ dày viền.

## 7. Tổng kết

Biến material thành một hiệu ứng biến mất theo nhiễu, có đường biên phát sáng. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
