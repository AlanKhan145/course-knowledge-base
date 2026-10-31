# Bài 10 — Ôn tập và tự kiểm tra Mission 4: Custom VR Development

> **Nền tảng:** Unity 6.3 · **Hình thức:** Trắc nghiệm tự luyện và bài tập tình huống.
>
> **Lưu ý:** Đây là bộ câu hỏi tự biên soạn, không phải bài quiz chính thức hay đáp án được công bố bởi Unity.

## 1. Mục tiêu đánh giá

Người học chứng minh được cách kết nối thiết bị tương tác VR, xử lý `Raycast`/Trigger, kiểm tra mã và trạng thái, tạo phản hồi và debug. Những câu hỏi chỉ yêu cầu kiến thức đã được giảng trong các bài của học phần.

## 2. Phạm vi

| Nhóm kiến thức | Kỹ năng cần thể hiện |
|---|---|
| Scanner | Xác định hướng, khoảng cách và mục tiêu hợp lệ |
| Balloon Inflator | Giới hạn trạng thái và phản hồi tiến độ |
| Escape Room | Phối hợp Number Pad + Keycard + Sliding Door |
| XR/UI | Kết nối input, raycaster, event và feedback |
| Kiểm thử | Truy vết lỗi trên Inspector/Console/HMD |

## 3. Hướng dẫn làm bài

Bài kiểm tra dưới đây là **10 câu tự biên soạn** để hệ thống hóa kiến thức Mission 4; không phải đáp án của bài quiz chính thức trên Unity Learn. Mỗi câu có một phương án tốt nhất. Nên tự trả lời trước khi mở phần đáp án và đối chiếu bằng ví dụ trong Unity.

## 4. Bộ câu hỏi

### Câu 1

Trong quy trình scanner, điều gì xác định mục tiêu có thể quét sau khi ray hit?

A. Mục tiêu có component phù hợp và thỏa điều kiện  
B. Mọi collider đều hợp lệ  
C. Cường độ ánh sáng  
D. Chỉ tên của Scene  

### Câu 2

Bộ nhập mã cần bảo toàn các số 0 đầu. Kiểu dữ liệu phù hợp là gì?

A. float  
B. bool  
C. string  
D. Vector3  

### Câu 3

Trong Escape Room yêu cầu cả mã và thẻ, phép logic nào đúng?

A. OR  
B. AND  
C. NOT  
D. XOR  

### Câu 4

Trong Keycard Reader dùng `OnTriggerEnter`, cấu hình nào là trọng tâm?

A. Canvas Overlay  
B. Bloom  
C. Audio Mixer  
D. Trigger Collider, Rigidbody/collision layers phù hợp  

### Câu 5

Vì sao `MoveTowards` được dùng cho cửa trượt?

A. Chuyển động từng bước không vượt qua đích  
B. Tự tạo XR Origin  
C. Xóa collider  
D. Đổi material  

### Câu 6

Máy quét bắn tia ngược. Thành phần nên kiểm tra trước là gì?

A. Font của UI  
B. Tốc độ Animator  
C. Hướng Transform tại Muzzle  
D. Tên file  

### Câu 7

Vật thể đã quét nhiều lần chỉ cần phát event hoàn thành một lần. Cách làm hợp lý là gì?

A. Tăng collider size  
B. Dùng cờ trạng thái đã xử lý  
C. Nhân đôi Input Action  
D. Gọi Debug.Log mỗi frame  

### Câu 8

Khi UI world-space không nhận tia, nên kiểm tra nhóm nào?

A. Render Texture  
B. Audio Listener  
C. Occlusion Bake  
D. Raycaster, EventSystem, Input Module  

### Câu 9

Trong Balloon Inflator, nếu `fill` đã bằng 1, điều gì phải đúng?

A. Không tăng quá giới hạn  
B. Tự reset thành 0 mỗi frame  
C. Xóa balloon  
D. Tắt OpenXR  

### Câu 10

Khi Editor ổn nhưng HMD giật, cách đánh giá đúng là gì?

A. Chỉ xem FPS trong Editor  
B. Thử đổi tên prefab  
C. Profile trên phần cứng VR đích  
D. Bỏ hết script  

## 5. Đáp án và giải thích

| Câu | Đáp án | Giải thích |
|---:|:---:|---|
| 1 | A | Ray hit chỉ trả va chạm; logic cần đánh giá đối tượng mục tiêu. |
| 2 | C | Chuỗi bảo toàn ký tự và độ dài của mã. |
| 3 | B | Cả hai điều kiện phải đúng trước khi cửa mở. |
| 4 | D | Thiết lập Physics quyết định trigger có hoạt động. |
| 5 | A | MoveTowards đi tới đích với bước tối đa được giới hạn. |
| 6 | C | Muzzle.forward quy định hướng quét. |
| 7 | B | Cờ trạng thái giúp tránh sự kiện lặp không mong muốn. |
| 8 | D | Đó là tuyến xử lý đầu vào của giao diện XR/UI. |
| 9 | A | Giới hạn fill trong [0,1] để tránh vượt ngưỡng. |
| 10 | C | Hiệu năng thật phải được kiểm thử trên thiết bị mục tiêu. |

## 6. Bài thực hành kiểm tra năng lực

**Bối cảnh:** Thiết kế một scene có một scanner và một cửa khóa. Scanner được dùng để đánh dấu hai vật thể; điều kiện mở cửa là cả hai vật thể đã được quét đúng.

**Yêu cầu:** mô tả input, sự kiện, trạng thái và phản hồi, sau đó nêu tối thiểu 4 test case (trúng vật A, trúng vật B, trúng tường, quét lại vật đã hoàn thành). Không bắt buộc phải hoàn thành scene để chấm phần lý thuyết, nhưng cần giải thích hướng triển khai hợp lý.

**Gợi ý tự đánh giá:** 8–10 câu đúng: nắm vững phần cốt lõi; 5–7 câu: xem lại cơ chế sự kiện và điều kiện mở khóa; dưới 5 câu: thực hành lại từng component riêng lẻ.

## 7. Tổng kết

Các câu hỏi bao phủ **raycast, input, collider/trigger, quản lý trạng thái, giao diện XR, chuyển động cửa và kiểm thử trên HMD**. Khi trả lời sai, hãy tìm lại bài học tương ứng và chứng minh đáp án qua một scene nhỏ thay vì chỉ ghi nhớ chữ cái.

---

**Đọc thêm:** [Unity Learn — Custom VR Development](https://learn.unity.com/pathway/vr-development/unit/mission-4-custom-vr-development?version=6.3).
