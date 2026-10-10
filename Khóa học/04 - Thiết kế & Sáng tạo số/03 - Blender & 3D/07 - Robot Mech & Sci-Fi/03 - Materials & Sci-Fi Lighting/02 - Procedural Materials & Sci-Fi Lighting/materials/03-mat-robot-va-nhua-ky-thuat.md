# Bài 03 — Tạo vật liệu mắt robot và nhựa kỹ thuật

## 1. Tóm tắt

Một robot có nhiều chất liệu khác nhau, dù chúng nằm chung trong một mesh. Bài này sử dụng `Material Slots` để gán riêng vật liệu cho mắt và chi tiết nhựa, sau đó tạo bề mặt mắt đen bóng và nhựa tối có vi gồ ghề bằng `Voronoi Texture`, `Noise Texture` và `Bump`.

## 2. Mục tiêu học tập

- Chọn đúng vùng hình học liên thông trong `Edit Mode`.
- Thêm material slot và gán một material vào các mặt được chọn.
- Tạo mắt robot phản xạ mạnh bằng Roughness thấp.
- Tạo nhựa kỹ thuật bằng Voronoi bị làm biến dạng bởi Noise.
- Kiểm tra trường hợp gán nhầm vật liệu hoặc tạo Bump quá mạnh.

## 3. Material Slot hoạt động như thế nào?

Một object mesh có thể chứa nhiều material slot. Khi chọn các face trong `Edit Mode` và nhấn `Assign`, Blender gắn chỉ số material slot đó với những face đã chọn. Các phần còn lại có thể tiếp tục giữ vật liệu kim loại nền.

**Quy tắc chọn:** `Tab` vào Edit Mode → `Alt + A` bỏ chọn → di chuột tới một mảnh hình học liên thông → `L` để chọn mảnh đó. Nếu mảnh mắt không tách rời hình học với phần đầu, `L` có thể chọn cả vùng lớn; khi đó phải chuyển sang chọn mặt thủ công.

## 4. Tạo vật liệu mắt đen bóng

### 4.1. Gán riêng cho mắt

1. Chọn object chứa mắt robot, vào `Edit Mode`.
2. Bỏ chọn phần hình học khác (`Alt + A`).
3. Di chuột lên phần mắt và nhấn `L` để chọn phần liên thông cần tô.
4. Mở `Material Properties`, nhấn `+` để tạo một material slot mới.
5. Nhấn `New`, đổi tên thành `Eyes`.
6. Khi `Eyes` là slot đang hoạt động và vùng mắt vẫn được chọn, nhấn `Assign`.
7. Quay lại `Object Mode` để quan sát.

### 4.2. Thiết lập shader

Dùng `Principled BSDF` với:

| Thuộc tính | Giá trị minh họa | Lý do |
| --- | --- | --- |
| Base Color | Đen `#000000` | Tạo cảm giác kính hoặc nhựa rất tối |
| Roughness | `0.1` | Phản chiếu sắc, bề mặt bóng |
| Metallic | Giữ hành vi điện môi cho chất liệu giống nhựa/kính | Không biến mắt thành kim loại khi không cần |

Mắt phải có điểm phản xạ từ HDRI và đèn cảnh. Nếu nhìn thấy mắt chỉ là mảng đen trống, hãy kiểm tra hướng nguồn sáng hoặc góc quan sát trước khi tăng độ sáng Base Color.

## 5. Tạo nhựa kỹ thuật cho các chi tiết nhỏ

### 5.1. Gán material Plastic

1. Trong `Edit Mode`, bỏ chọn toàn bộ.
2. Chọn các ống trụ hoặc chi tiết nhựa nhỏ trên đầu robot bằng `L`.
3. Tạo material slot và material mới tên `Plastic`.
4. Nhấn `Assign` để gán cho các face đã chọn.
5. Quay về `Object Mode` và mở `Shader Editor` của `Plastic`.

Thiết lập nền:

- `Base Color = #1F1F1F`: xám gần đen.
- `Roughness ≈ 0.2`: nhựa tương đối bóng.

### 5.2. Tạo vi gồ ghề từ Voronoi

Các chi tiết nhựa mới tạo thường có bề mặt quá mịn. `Voronoi Texture` tạo các vùng phân bố không đều, còn `Noise Texture` làm biến dạng tọa độ để Voronoi bớt cứng và lặp đều.

1. Thêm `Texture Coordinate`, `Noise Texture` và `Voronoi Texture`.
2. Nối `Object` vào `Vector` của Noise.
3. Nối đầu ra thích hợp của Noise vào `Vector` của Voronoi để thay đổi phân bố hình mẫu.
4. Đặt `Noise Scale ≈ 1`, `Noise Detail ≈ 15`, `Voronoi Scale ≈ 1`.
5. Nối `Voronoi Distance` vào `Bump: Height`.
6. Nối `Bump: Normal` vào `Principled BSDF: Normal`.
7. Hạ `Bump Strength` xuống khoảng **0.03**.

```text
Texture Coordinate: Object
      ↓
Noise Texture (Scale 1, Detail 15)
      ↓
Voronoi Texture: Vector (Scale 1)
      ↓ Distance
Bump: Height (Strength 0.03)
      ↓ Normal
Principled BSDF: Normal → Material Output
```

Bản đồ Distance thường có tương phản khá mạnh; nếu Strength để cao, nhựa sẽ giống bề mặt bị đập biến dạng. Quan sát sát bề mặt, sau đó thu nhỏ để chắc chắn vân không phá silhouette.

## 6. Kiểm tra đúng vùng và chất liệu

- **Mắt:** đen bóng, có hình phản xạ rõ ràng, không bị phủ vân Bump của nhựa.
- **Chi tiết nhựa:** xám gần đen, bóng vừa phải, bề mặt có vi gồ ghề khi nhìn gần.
- **Khung đầu:** tiếp tục giữ `Light Metal` hoặc chất liệu đã gán, không bị đổi theo slot mới.

### 6.1. Khắc phục lỗi

| Triệu chứng | Hướng xử lý |
| --- | --- |
| Mắt vẫn là kim loại xám | Chọn face mắt, chọn slot `Eyes`, nhấn `Assign` |
| Cả đầu đổi sang nhựa | Kiểm tra vùng chọn trong Edit Mode trước khi Assign |
| Mắt quá tối, không thấy bóng | Kiểm tra HDRI, đèn và hướng phản xạ; Roughness khoảng `0.1` |
| Nhựa quá sần | Giảm Bump Strength hoặc biên độ Distance trước Bump |
| Voronoi méo không theo ý | Kiểm tra đường kết nối Noise → Voronoi Vector |

## 7. Thực hành ngắn

Tạo hai material độc lập `Eyes` và `Plastic`; chỉ gán chúng lên các vùng được chỉ định của đầu robot. Chụp hoặc lưu hai góc nhìn: một góc thấy ánh phản xạ trên mắt, một góc đủ gần để nhìn được vi chi tiết của nhựa.

**Checkpoint:** Mắt có Roughness thấp hơn nhựa, nhưng cả hai vẫn tách biệt khỏi vùng kim loại. Lưu file thành `mech_03_eyes_plastic.blend`.

## 8. Câu hỏi ôn tập

**Câu 1.** Trong Edit Mode, muốn gán material cho một cụm mặt liên thông, thao tác phù hợp nhất là gì?

A. Chọn cụm face, chọn slot rồi `Assign`.  
B. Thay đổi độ phân giải render.  
C. Đổi tên object mà không chọn mặt.  
D. Bật Motion Blur.

**Đáp án: A.** Material slot được gắn vào các mặt được chọn khi bấm Assign.

**Câu 2.** Roughness của mắt giảm từ `0.5` xuống `0.1` sẽ chủ yếu tạo thay đổi nào?

A. Mesh nhiều polygon hơn.  
B. Vật liệu tự phát sáng.  
C. Mắt trong suốt tuyệt đối.  
D. Phản chiếu sắc nét hơn.

**Đáp án: D.** Roughness thấp làm vùng phản xạ hẹp và bóng hơn.

**Câu 3.** Trong mạng nhựa kỹ thuật, mục đích đưa Noise vào tọa độ của Voronoi là gì?

A. Đặt camera đúng vị trí.  
B. Làm phân bố mẫu Voronoi bớt đều và cứng.  
C. Tăng số đèn trong cảnh.  
D. Xóa tất cả material slot.

**Đáp án: B.** Noise làm biến dạng tín hiệu tọa độ đầu vào của Voronoi.

**Câu 4.** Kết nối nào đúng khi chuyển dữ liệu Voronoi thành độ gồ ghề?

A. Distance → World Background.  
B. Distance → Roughness rồi xóa BSDF.  
C. Distance → Bump Height; Bump Normal → BSDF Normal.  
D. Distance → Camera Lens.

**Đáp án: C.** Bump chuyển bản đồ cao độ thành normal phục vụ shading.

**Câu 5.** Vật liệu nhựa có bề mặt gồ ghề quá mạnh: tham số nên kiểm tra trước?

A. `Bump Strength`.  
B. `Frame Rate`.  
C. `Camera Type`.  
D. `World Color`.

**Đáp án: A.** Strength thấp như `0.03` thường tạo vi gồ ghề nhẹ hơn trong bài minh họa.

## 9. Tổng kết

Bạn đã phân chia chất liệu trên cùng một object bằng Material Slots, tạo mắt bóng ở `Roughness = 0.1`, nhựa xám tối ở `Roughness = 0.2` và hiệu ứng Bump tinh tế từ Noise–Voronoi.
