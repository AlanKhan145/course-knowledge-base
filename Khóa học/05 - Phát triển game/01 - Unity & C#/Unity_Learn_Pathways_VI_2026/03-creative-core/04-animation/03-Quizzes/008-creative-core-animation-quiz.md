# Bài 08 — Kiểm tra tổng hợp: Creative Core Animation

> **Creative Core · Animation · Unity 6.3 · Bài đánh giá kiến thức và kỹ năng**

## 1. Hướng dẫn

Bài đánh giá tập trung vào bốn năng lực: **(1) mô tả thành phần của hệ thống animation; (2) tạo và tinh chỉnh keyframe; (3) điều khiển state bằng Animator; (4) nhập và cấu hình clip từ bên ngoài**. Phần trắc nghiệm được thiết kế độc lập nhằm kiểm tra kiến thức thực hành; đây không phải bản sao câu hỏi chấm điểm chính thức trên Unity Learn.

Làm phần trắc nghiệm trước, sau đó mở Unity Editor kiểm tra những câu chưa chắc chắn. Không nên chỉ ghi đáp án: với mỗi câu, viết thêm một câu giải thích lý do hoặc nêu cách thử trong Unity.

## 2. Phần A — Trắc nghiệm (12 câu)

### Câu 1

`Animation Clip` đảm nhiệm nhiệm vụ cốt lõi nào?

A. Tạo ánh sáng realtime cho toàn cảnh.  
B. Lưu thông tin biến đổi thuộc tính theo thời gian.  
C. Sắp xếp vị trí các Scene trong Build Settings.  
D. Thay thế Camera.

### Câu 2

Tác dụng chính của `Animator Controller` là gì?

A. Tạo texture.  
B. Tối ưu mesh bằng LOD.  
C. Quản lý state, transition và những clip cần phát.  
D. Export FBX từ Blender.

### Câu 3

Khi muốn chỉnh tốc độ thay đổi của thuộc tính giữa hai keyframe, cửa sổ nào hữu ích nhất?

A. Animation window ở chế độ Curves.  
B. Package Manager.  
C. Lighting window.  
D. Profiler Memory Module.

### Câu 4

Cửa quay sai trục dù rotation keyframe đã đúng. Yếu tố nào cần kiểm tra trước?

A. Tên Material.  
B. Far Clip Plane.  
C. Skybox.  
D. Pivot và quan hệ parent–child.

### Câu 5

Hai keyframe tịnh tiến cách nhau 3 đơn vị trong 1,5 giây. Tốc độ trung bình có độ lớn bao nhiêu?

A. 4,5 đơn vị/s.  
B. 2 đơn vị/s.  
C. 0,5 đơn vị/s.  
D. 3 đơn vị/s.

### Câu 6

Khi chuyển state cần đáp ứng ngay với `Bool IsOpen`, lựa chọn transition nào thường hợp lý hơn?

A. Bật `Has Exit Time` với 1 chu kỳ đầy đủ.  
B. Bỏ Conditions.  
C. Tắt `Has Exit Time` và dùng Conditions đúng.  
D. Xóa state đích.

### Câu 7

Một transition có hai Conditions. Điều gì phải xảy ra để transition đủ điều kiện?

A. Thông thường cả hai Conditions cùng đúng.  
B. Có một Condition bất kỳ đúng là đủ.  
C. Unity luôn chọn Condition đầu tiên.  
D. Conditions chỉ có tác dụng khi có Humanoid.

### Câu 8

Khi nhập nhân vật người cần retargeting giữa nhiều nhân vật, thiết lập nào phù hợp nhất?

A. Chọn Legacy và bỏ Avatar.  
B. Chọn Generic cho mọi trường hợp.  
C. Chỉ import mesh, bỏ animation.  
D. Chọn Humanoid và kiểm tra Avatar mapping.

### Câu 9

Một robot bốn chân có rig tùy ý phù hợp với chế độ nào?

A. Bắt buộc Humanoid.  
B. Generic.  
C. Không thể animate trong Unity.  
D. UI Toolkit.

### Câu 10

`Apply Root Motion` ảnh hưởng nhiều nhất tới vấn đề nào?

A. Cách chuyển động gốc của model đóng góp vào vị trí/hướng GameObject.  
B. Màu sắc của skybox.  
C. Nén texture.  
D. Thiết lập anti-aliasing.

### Câu 11

Một clip walk giật tại điểm kết thúc chu kỳ rồi phát lại. Cách xử lý nào phù hợp nhất?

A. Luôn đặt tất cả tangent thành Constant.  
B. Xóa Animator.  
C. Kiểm tra pose đầu/cuối, loop settings và curves.  
D. Tắt Scene Lighting.

### Câu 12

Một GameObject được điều khiển vị trí bởi Animator và script cùng lúc. Điều nào cần làm?

A. Tăng số lượng AudioSource.  
B. Tăng shader quality.  
C. Đổi tên scene.  
D. Xác định nguồn nào có trách nhiệm điều khiển thuộc tính và loại bỏ xung đột.

## 3. Phần B — Đúng / Sai (giải thích ngắn)

1. Một Cube muốn animate Position trong Unity luôn phải có Humanoid Avatar.
2. `Animator Controller` có thể chứa nhiều state, mỗi state tham chiếu một Motion.
3. `Has Exit Time` và `Transition Duration` là cùng một thiết lập.
4. Clip nhập từ FBX có thể cần cấu hình frame range và loop trong Import Settings.
5. Dope Sheet và Curves hiển thị hai dạng khác nhau của cùng dữ liệu keyframe.

## 4. Phần C — Câu hỏi ngắn

1. So sánh clip, Controller và component Animator bằng một ví dụ cửa đóng–mở.
2. Phân tích vì sao curve có ease-in/ease-out tạo cảm giác khác với nội suy tuyến tính dù cùng điểm đầu/cuối.
3. Khi nhân vật Humanoid không phát đúng animation từ FBX, hãy nêu thứ tự kiểm tra tối thiểu qua Rig, Avatar, Clip và Controller.
4. Một cửa có hai state và nhận điều khiển liên tục từ người dùng. Điều gì có thể xảy ra nếu chuyển trạng thái đang dở bị đảo chiều liên tục?
5. Vì sao cần thử Animation trong Game view thay vì chỉ trong Animation Preview?

## 5. Phần D — Bài thực hành đánh giá

**Đề bài:** Trong scene 3D mới, tạo một cửa trượt bằng hai đoạn keyframe vị trí hoặc một cửa xoay có pivot đúng. Thiết lập hai trạng thái điều khiển bằng tham số `IsOpen`; thêm hai UI Button gọi `OpenDoor()`/`CloseDoor()` qua script; tinh chỉnh Curves cho ít nhất một clip. Không cần sử dụng model tải ngoài.

**Yêu cầu bắt buộc:**

- [ ] Scene có camera, ánh sáng và đối tượng cần animate.
- [ ] Có ít nhất hai clip với keyframe rõ ràng.
- [ ] Có Controller và hai transition có điều kiện.
- [ ] Có đoạn C# thay đổi parameter (không dịch chuyển trực tiếp đối tượng trong script).
- [ ] Có screenshot Animator Parameters khi Play.
- [ ] Có đoạn mô tả kiểm thử chuyển trạng thái và tình huống gặp lỗi.

## 6. Tiêu chí chấm điểm gợi ý

| Hạng mục | Tỷ trọng |
|---|---:|
| Phần A — Trắc nghiệm | 30% |
| Phần B — Đúng/Sai có giải thích | 15% |
| Phần C — Câu hỏi ngắn | 20% |
| Phần D — Scene thực hành và kiểm thử | 35% |

Người học tự đối chiếu hành vi bằng Unity Editor và các trang tài liệu tham khảo. Đối với bài thực hành, nên lưu lại trường hợp không hoạt động và ghi rõ thao tác đã khắc phục; đây là một phần của năng lực kiểm thử, không đơn thuần là điểm trừ.

## 7. Checklist cuối module

- [ ] Giải thích được quan hệ `Clip` – `Controller` – `Animator` – `Avatar`.
- [ ] Tạo và tinh chỉnh keyframe bằng Dope Sheet và Curves.
- [ ] Cấu hình parameter, state và transition chủ động.
- [ ] Phân biệt `Humanoid` và `Generic` khi nhập model.
- [ ] Phát hiện và sửa được lỗi cơ bản trong Play Mode.

## 8. Tài liệu tham khảo

- [Unity Learn — Creative Core Animation](https://learn.unity.com/pathway/creative-core/unit/animation?version=6.3).
- [Unity 6.3 — Animation window](https://docs.unity.com/en-us/engine/6000.3/manual/animation-section/animation-mecanim/animation-clips/animation-editor-guide).
- [Unity 6.3 — Animator Controller](https://docs.unity.com/en-us/engine/6000.3/manual/animation-section/animation-mecanim/animation-animator-controller).
- [Unity 6.3 — Importing Models](https://docs.unity.com/en-us/engine/6000.3/manual/assets-and-media/asset-types/models/importing).
