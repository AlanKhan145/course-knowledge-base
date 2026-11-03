# Tạo URP Lit Shader Graph giữ chất liệu PBR

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Xây shader tan rã nhưng vẫn giữ màu Albedo, Normal, Metallic, Smoothness và AO.

**Mục tiêu học tập**

- Tạo shader graph hỗ trợ Alpha Clipping.
- Kết nối thuộc tính PBR cơ bản.
- Phân biệt texture màu với normal map.

## 1. Vì sao dùng Lit Shader Graph?
Một dissolve shader chỉ cắt mesh thành hạt/miếng đen sẽ làm model mất chất liệu. Để nhân vật vẫn đẹp cho tới lúc chết, xây shader `URP Lit` gồm Base Color, Normal (Tangent), Metallic, Smoothness và Ambient Occlusion.

## 2. Chuẩn bị render pipeline
Đảm bảo dự án đang sử dụng **Universal Render Pipeline (URP)**. Cài Shader Graph nếu chưa có. Tạo `Shader Graph > URP > Lit Shader Graph` tên `SG_EnemyDissolve`. Mở Graph Inspector, bật **Alpha Clipping**. Nếu muốn có bề mặt hai mặt khi dissolve, chọn Render Face = Both, cân nhắc tác động lên hiệu năng và hình thức.

## 3. Tạo các Properties (tên Reference cần nhất quán)
| Property | Loại | Mục đích |
|---|---|---|
| `_BaseMap` | Texture2D | Albedo nhân vật |
| `_BaseColor` | Color (HDR tùy muốn) | Nhân màu albedo |
| `_NormalMap` | Texture2D | Normal texture |
| `_NormalStrength` | Float | Cường độ normal |
| `_Metallic` | Float | Mức kim loại |
| `_Smoothness` | Float | Độ bóng |
| `_OcclusionMap` | Texture2D | Ambient Occlusion |
| `_OcclusionStrength` | Float | Cường độ AO |

Trong Shader Graph, có thể dùng tên hiển thị theo ý muốn nhưng phải ghi lại **Reference** chính xác, đặc biệt `_DissolveAmount` sẽ được script điều khiển.

## 4. Kết nối các node
1. `Sample Texture 2D(_BaseMap)` rồi `Multiply` với `_BaseColor` → `Base Color`.
2. `Sample Texture 2D(_NormalMap)` đặt sample type **Normal**, đưa qua `Normal Strength` → `Normal (Tangent Space)`.
3. `_Metallic` → `Metallic`; `_Smoothness` → `Smoothness`.
4. `Sample Texture 2D(_OcclusionMap)` kết hợp Strength theo kết quả mong muốn → `Ambient Occlusion`.
5. **Save Asset**, tạo material `M_EnemyDissolve_01` và gán texture đúng cho từng material slot của model.

## 5. Debug
Nếu bề mặt tối đen, kiểm tra BaseMap, ánh sáng scene và SRP; nếu normal lạ, kiểm tra texture import là Normal map và cổng normal đúng Tangent. Một mô hình có hai submesh/material cần hai material tương ứng, không được giả định chỉ một material.

## 6. Thực hành
Chuyển model sang shader mới nhưng để DissolveAmount = 0 (sẽ thêm logic ở bài tiếp theo). Chụp so sánh model trước và sau để chắc chắn base color, bóng và normal không bị mất.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao dùng Lit thay vì chỉ Unlit cho nhân vật?

A. Giữ phản ứng ánh sáng và đặc tính PBR  
B. Để tự tạo rigidbody  
C. Để camera zoom nhanh hơn  
D. Để game bỏ hết normal  

**Đáp án:** A

**Giải thích:** Lit cho phép lighting/PBR của bề mặt.

### Câu 2

Tính năng nào cho phép shader cắt bớt pixel theo ngưỡng?

A. HDR Skybox  
B. Occlusion Culling  
C. Alpha Clipping  
D. Animator IK  

**Đáp án:** C

**Giải thích:** Alpha clipping loại fragment dưới threshold.

### Câu 3

Normal map đưa tới cổng nào?

A. Normal (Tangent Space)  
B. Base Color  
C. Smoothness  
D. Emission duy nhất  

**Đáp án:** A

**Giải thích:** Normal ảnh hưởng hướng bề mặt để chiếu sáng.

### Câu 4

Mô hình có hai material slot cần lưu ý gì?

A. Chỉ có thể dùng một texture chung bắt buộc  
B. Phải tắt SkinnedMeshRenderer  
C. Gán material/texture phù hợp cho từng slot  
D. Không hỗ trợ Shader Graph  

**Đáp án:** C

**Giải thích:** Mỗi submesh có thể dùng material riêng.

### Câu 5

Reference của property trong Shader Graph quan trọng vì sao?

A. Script C# truy cập shader property bằng đúng tên đó  
B. Để Unity tạo scene  
C. Để thay số FPS  
D. Để tìm CameraTarget  

**Đáp án:** A

**Giải thích:** SetFloat dùng tên reference đúng để đổi giá trị.

## 8. Tổng kết

Xây shader tan rã nhưng vẫn giữ màu Albedo, Normal, Metallic, Smoothness và AO. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
