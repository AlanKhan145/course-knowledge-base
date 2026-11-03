# Checklist kiểm thử, debug, tối ưu và đánh giá cuối khóa

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Đánh giá toàn bộ controller và hệ thống VFX bằng test case thực tế, khắc phục lỗi phổ biến.

**Mục tiêu học tập**

- Kiểm thử các chế độ camera ở nhiều góc và độ phân giải.
- Khoanh vùng lỗi Shader Graph và VFX Graph.
- Xác định những điểm có nguy cơ ảnh hưởng hiệu năng.

## 1. Bộ test camera
| ID | Thao tác | Kết quả mong đợi |
|---|---|---|
| C01 | W sau khi target quay 0°,90°,180° | Di chuyển theo hướng trên màn hình |
| C02 | W+D | Không nhanh hơn W quá giới hạn |
| C03 | Giữ E rồi thả | Quay liên tục khi giữ, dừng khi thả |
| C04 | Chuột ở 4 cạnh/4 góc | Edge pan đúng chiều |
| C05 | Đưa chuột ngoài Game View | Không pan ngoài ý muốn |
| C06 | Bấm/giữ/thả chuột phải | Kéo không nhảy, dừng tức thì |
| C07 | Cuộn tới giới hạn | FOV/distance/height nằm trong min/max |
| C08 | Dùng UI menu | Không nhận input camera khi phải khóa |
| C09 | Chuyển sang 2D | WASD trên XY, zoom Orthographic |

## 2. Bộ test VFX
| ID | Thao tác | Kết quả mong đợi |
|---|---|---|
| V01 | Chạy Idle/Die | Avatar hoạt động, chân không lệch |
| V02 | DissolveAmount 0→1 | Material tan dần ở mọi slot |
| V03 | Chuyển Die khi đang animated | Hạt xuất từ đúng mesh đang biến dạng |
| V04 | Bắn trúng enemy | Die → VFX → dissolve → remove |
| V05 | Bắn nhanh nhiều lần | Không nhiều sequence chồng nhau |
| V06 | 10+ enemy xuất hiện | Không có spike lớn bất ngờ do particle/material |

## 3. Debug theo vị trí lỗi
- Camera không dịch: log keyboard vector, kiểm tra script enabled, Tracking Target.
- Camera di chuyển sai sau xoay: xem `transform.forward/right` và Binding Mode.
- Zoom vô hiệu: kiểm tra `CinemachineFollow`/`CinemachineCamera` reference và mode Perspective/Orthographic.
- VFX không phát: kiểm tra component VisualEffect, graph, event Play, GameObject active, hệ thống pipeline.
- Chỉ một phần model tan: kiểm tra tất cả material indices và Reference `_DissolveAmount`.
- Nhân vật ngã xuống bị lệch: xem Root Transform Bake Into Pose của animation Die.

## 4. Tối ưu thực tế
Profile trên thiết bị mục tiêu thay vì đoán. Hạn chế cập nhật skinned mesh sang VFX mỗi frame cho mọi enemy; pooling projectile nếu bắn liên tục; tránh instantiate material per enemy khi có thể dùng MaterialPropertyBlock; giới hạn particle emission; tắt VFX khi chưa dùng. Ưu tiên tính ổn định và readability trước khi tối ưu vi mô.

## 5. Bài đánh giá cuối khóa
**Đề:** tạo demo chiến thuật có 3 enemy, camera RTS đủ WASD, Q/E, drag, edge, ít nhất một zoom, và VFX kết liễu hoạt động. Đạt khi vượt toàn bộ C01–C09/V01–V06 áp dụng được; nộp scene, prefabs, mã và đoạn video quay tính năng.

## 6. Tổng kết
Camera tốt là hệ thống **điều khiển rõ ràng, đáp ứng phù hợp và ít xung đột**. Hiệu ứng kết liễu đẹp cần phối hợp **animation, shader, particle và logic va chạm** theo một trình tự có thể kiểm thử.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Khi camera đi sai sau khi xoay, nguyên nhân ưu tiên kiểm tra là gì?

A. Vector world/local và Follow Binding Mode  
B. Texture của Projectile  
C. Normal Strength  
D. Thời lượng Die  

**Đáp án:** A

**Giải thích:** Sai cơ sở vector thường gây di chuyển lệch.

### Câu 2

Khi chỉ nửa model tan rã nên xem gì?

A. Screen.width  
B. Camera FPS  
C. Material slots và _DissolveAmount reference  
D. Layer UI  

**Đáp án:** C

**Giải thích:** Nhiều material cần cùng được cập nhật shader property.

### Câu 3

Khi VFX hạt ở T-pose, điểm kiểm tra hợp lý là gì?

A. Dữ liệu bridge skinned mesh tới VFX  
B. Animator Controller của Main Camera  
C. FOV Zoom  
D. EdgeSize  

**Đáp án:** A

**Giải thích:** Nguồn mesh chưa theo skeleton animation.

### Câu 4

Vì sao nên profile hiệu năng trên thiết bị mục tiêu?

A. Để shader tự chuyển sang HDRP  
B. Để bỏ test camera  
C. Chi phí CPU/GPU khác nhau trên từng cấu hình  
D. Để Unity xóa memory leak  

**Đáp án:** C

**Giải thích:** Dữ liệu thực tế đáng tin hơn suy đoán.

### Câu 5

Điều kiện nộp bài cuối khóa hợp lý nhất?

A. Demo chạy camera và chuỗi kết liễu theo test cases  
B. Chỉ có slide quảng cáo  
C. Chỉ có model FBX chưa animation  
D. Chỉ có code không thể chạy  

**Đáp án:** A

**Giải thích:** Đánh giá năng lực tích hợp thành sản phẩm thực tế.

## 8. Tổng kết

Đánh giá toàn bộ controller và hệ thống VFX bằng test case thực tế, khắc phục lỗi phổ biến. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
