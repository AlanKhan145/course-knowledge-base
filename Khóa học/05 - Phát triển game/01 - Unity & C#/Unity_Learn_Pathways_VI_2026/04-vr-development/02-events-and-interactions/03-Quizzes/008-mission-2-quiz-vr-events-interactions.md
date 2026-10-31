---
title: "Mission 2 — Bộ câu hỏi ôn tập Events & Interactions"
pathway: "VR Development"
module: "Events and Interactions"
lesson_type: assessment
unity_version_reference: "6.3"
---

# Mission 2 — Kiểm tra kiến thức VR Events & Interactions

## 1. Hướng dẫn

Bộ câu hỏi dưới đây được **tự biên soạn để luyện tập**, không phải bản sao bài kiểm tra chính thức trên Unity Learn. Phạm vi gồm: âm thanh/haptics, activation events, direct/ray interactor, UI, thực hành vẽ 3D, phần cứng XR và phương pháp kiểm thử.

Hãy đọc từng tình huống, chọn **một đáp án phù hợp nhất**. Không xem lại nội dung học ngay ở lượt đầu; sau đó tự kiểm tra từng câu bằng cách giải thích khái niệm và đưa ra ví dụ có thể chạy trong Unity Editor.

## 2. Bản đồ nội dung đánh giá

| Nhóm | Kỹ năng được kiểm tra |
| --- | --- |
| Audio & Haptics | Chọn đúng nguồn âm, âm 2D/3D và phản hồi |
| Activation Events | Phân biệt chọn vật và kích hoạt chức năng |
| Near/Far/Ray | Xác định interactor phù hợp và khoanh vùng lỗi |
| UI | Luồng sự kiện button → trạng thái → hiển thị |
| 3D Painting | Trạng thái vẽ và cập nhật các điểm của nét |
| XR Hardware | Kiểm thử phần cứng thực, input và hiệu năng |

## 3. Trắc nghiệm tình huống

**Câu 1.** Một vật ở xa trong VR phát ra âm thanh. Người chơi đến gần vật và nghe âm lớn hơn. Thiết lập nào giải thích hiện tượng này hợp lý nhất?

A. Âm thanh luôn được đặt 2D.  
B. `Audio Source` sử dụng thành phần âm 3D và suy giảm theo khoảng cách.  
C. `EventSystem` tự điều chỉnh âm lượng.  
D. `Canvas Scaler` điều khiển khoảng cách âm.

**Câu 2.** Người chơi cầm remote lên, nhưng đèn chỉ nên bật khi họ bấm lệnh kích hoạt. Nên nối phương thức điều khiển đèn vào đâu?

A. Sự kiện hover.  
B. Sự kiện bắt đầu scene.  
C. Sự kiện `Activate` phù hợp.  
D. Sự kiện kết thúc tải texture.

**Câu 3.** Ray hiển thị và chạm vào một khối hộp, nhưng không chọn được khối. Thành phần nào cần kiểm tra?

A. Collider, interactable, cấu hình interactor và input.  
B. Chỉ màu của skybox.  
C. Chỉ âm lượng nền.  
D. Chỉ cỡ chữ UI.

**Câu 4.** Một chiếc đèn pin ảo cần vùng sáng hình nón có hướng. Nguồn sáng nào phù hợp?

A. `Reflection Probe`.  
B. `Audio Listener`.  
C. `Directional Light` cho mọi trường hợp.  
D. `Spot Light`.

**Câu 5.** Vì sao một menu VR có thể hoạt động với chuột trong Editor nhưng không chọn được bằng controller?

A. Vì mọi UI đều vô hiệu trên HMD.  
B. Vì cần kiểm tra input module và raycast UI phù hợp với hệ XR.  
C. Vì TextMeshPro không hỗ trợ VR.  
D. Vì Button không có sự kiện.

**Câu 6.** Hệ thống điểm trong trò chơi nên được tổ chức thế nào?

A. Lưu trạng thái điểm và cập nhật nhãn hiển thị khi điểm thay đổi.  
B. Chỉ viết một chuỗi điểm cố định trên Canvas.  
C. Xóa toàn bộ Text khi có tương tác.  
D. Để nguồn sáng điều khiển số điểm.

**Câu 7.** Trong thử thách vẽ 3D, điều gì ngăn bút tạo nét ngoài ý muốn khi người chơi chỉ di chuyển tay?

A. Tăng độ sáng phòng.  
B. Thêm nhiều âm thanh.  
C. Quản lý rõ trạng thái sẵn sàng và đang vẽ.  
D. Tắt hệ tracking.

**Câu 8.** Nét vẽ mới bị nối vào nét trước. Cần kiểm tra điều gì trước tiên?

A. `Audio Listener`.  
B. Độ phân giải skybox.  
C. Cường độ Point Light.  
D. Việc tạo hoặc reset cấu trúc nét tại thao tác bắt đầu mới.

**Câu 9.** Scene chạy mượt trong Editor nhưng giật trên HMD. Cách tiếp cận nào phù hợp?

A. Kết luận lỗi không quan trọng.  
B. Đo và profile trên thiết bị đích, xem các tác vụ render và logic tốn chi phí.  
C. Chỉ đổi tên scene.  
D. Tắt toàn bộ kiểm thử.

**Câu 10.** Trong luồng interactor–interactable, bộ điều phối có nhiệm vụ gì?

A. Quản lý các quan hệ tương tác được thiết lập.  
B. Thay thế hoàn toàn camera.  
C. Phát mọi AudioClip tự động.  
D. Dựng lightmap.

**Câu 11.** Âm thanh không phát, nhưng sự kiện gameplay đã được gọi. Bước điều tra hợp lý nhất là gì?

A. Đổi locomotion ngay.  
B. Xóa tất cả collider.  
C. Kiểm tra `AudioClip`, `Audio Source`, `Audio Listener` và cấu hình âm.  
D. Xóa Canvas.

**Câu 12.** Một công cụ rung tay cầm hoạt động trên thiết bị thử A nhưng không hoạt động trên B. Kết luận nào phù hợp?

A. Mọi thiết bị luôn phải có phản hồi rung như nhau.  
B. Chỉ cần đổi màu đối tượng.  
C. Haptics không liên quan đến thiết bị.  
D. Cần kiểm tra hỗ trợ haptics và input/runtime của từng thiết bị.

## 4. Tình huống ngắn và thực hành

### 4.1. Phân tích lỗi tương tác

Một remote chỉ bật được đèn khi nhặt lên rồi thả xuống, trong khi nhấn nút kích hoạt không có tác dụng. Hãy mô tả tối thiểu ba bước kiểm tra, theo thứ tự từ **input**, **sự kiện** đến **hàm xử lý**. Nêu một cách chứng minh lỗi đã được sửa.

### 4.2. Thiết kế phản hồi

Bạn thiết kế một vật ảo có thể được chọn bằng ray. Hãy đề xuất phản hồi dành cho ba trạng thái: vật đang được trỏ tới, vật đã được chọn và hành động kích hoạt đã thành công. Mỗi phản hồi cần tương ứng đúng sự kiện.

### 4.3. Kiểm thử trên thiết bị XR

Một scene UI và tương tác chạy bình thường trên máy tính. Hãy lập danh sách kiểm thử tối thiểu năm mục trước khi trình diễn trên HMD: tracking, input, lựa chọn vật, âm thanh/UI và hiệu năng.

## 5. Thang tự đánh giá

Với 12 câu trắc nghiệm, tính **1 điểm cho mỗi câu chọn đúng** sau khi đối chiếu kiến thức đã học. Với ba tình huống thực hành, tự đánh giá theo ba yếu tố: **khái niệm đúng**, **lý do đúng**, **cách kiểm chứng cụ thể**. Để kiểm tra sâu hơn, hãy thực hiện ít nhất một tình huống trong scene Unity nhỏ thay vì chỉ trả lời bằng lời.

Bộ câu hỏi chủ yếu phục vụ tự luyện, vì vậy không sử dụng điểm này thay cho kết quả đánh giá chính thức của khóa học.

## 6. Checklist trước khi kết thúc module

- [ ] Giải thích được sự khác biệt giữa âm 2D và âm 3D.
- [ ] Phân biệt được hành động chọn vật với kích hoạt chức năng.
- [ ] Chọn được direct hoặc ray interactor cho từng tình huống.
- [ ] Mô tả được luồng UI từ input đến trạng thái và phần hiển thị.
- [ ] Biết tổ chức trạng thái bắt đầu/kết thúc trong thử thách vẽ 3D.
- [ ] Nêu được lý do phải đo hiệu năng và input trên HMD thực.
- [ ] Có khả năng tái hiện, giải thích và sửa một lỗi tương tác.

**Tham khảo:** [Unity Learn — Events and Interactions](https://learn.unity.com/pathway/vr-development/unit/events-and-interactions?version=6.3). Bài trên đây là bài ôn luyện độc lập, không phải quiz chính thức.
