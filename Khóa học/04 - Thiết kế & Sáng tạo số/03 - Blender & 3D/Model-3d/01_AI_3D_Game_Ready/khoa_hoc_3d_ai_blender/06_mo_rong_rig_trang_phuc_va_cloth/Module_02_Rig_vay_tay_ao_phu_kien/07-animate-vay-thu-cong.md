# Bài 07 — Hoạt ảnh chân váy thủ công theo bước đi và động tác múa

## 1. Tổng quan

Không phải cảnh nào cũng cần solver Cloth. Với rig DEF/MCH/CTRL, animator có thể tạo chuyển động váy đẹp, dễ lặp và kiểm soát clipping, đặc biệt khi nhân vật chỉ cần các clip idle, walk, run, turn hoặc múa có thời lượng ngắn.

## 2. Mục tiêu học tập

- Keyframe các vòng control theo nhịp chuyển động thân.
- Tạo chuyển động thứ cấp có độ trễ hợp lý.
- Sửa clipping trong pose cực hạn và tạo vòng lặp mượt.

## 3. Nội dung bài học

### 3.1. Tách chuyển động chính và chuyển động phụ

Khi nhân vật bước, hông và chân là chuyển động chính. Phần vải có xu hướng trễ một chút so với gia tốc của thân rồi quay về khi chuyển động đổi hướng. Hãy quan sát chuyển động chân/vai và tạo một đường cong váy trước khi làm chi tiết.

Ví dụ trong một chu kỳ đi bộ: khi chân phải tiến, nâng hoặc mở nhẹ phần trước-phải của mép váy để không cắt qua đùi; sau bước chân, trả dần mép váy về trạng thái cân bằng. Phía sau váy có thể trễ khác phía trước. Không cần lắc tất cả bone đồng bộ; chuyển động đồng pha thường khiến váy trông như một khối cứng.

### 3.2. Dùng control vòng váy thay vì sửa từng DEF

Trong `Pose Mode`, chọn các `CTRL_Skirt` hoặc `Skirt_01...05`, chèn khóa cho thay đổi vị trí, xoay hoặc scale cần thiết. Control gần cạp chỉ nên thay đổi ít; control mép váy cho biên độ lớn hơn. Khóa pose chính trước ở điểm tiếp đất, điểm chân chuyển và điểm đổi hướng; thêm pose trung gian để điều chỉnh độ trễ.

Giữ đường cong đồng đều quanh chu vi. Nếu một bên váy mở rất rộng, bone hàng xóm nên chuyển dần với biên độ nhỏ để tránh gãy góc. Khi nhân vật vặn hông, kiểm tra các vùng mép trước/sau tránh xoắn toàn bộ vòng.

### 3.3. Tạo cycle và sửa điểm nối

Để clip lặp, pose khung đầu và khung cuối phải ăn khớp. Chọn keyframe vòng đầu và nhân đôi bằng `Shift + D` tới đúng chu kỳ tiếp theo, hoặc tổ chức lặp bằng công cụ animation phù hợp. Phát từ trước điểm nối qua sau điểm nối; nếu có giật, kiểm tra pose, tốc độ tiếp tuyến và việc bị trùng frame cuối/đầu.

Chỉnh interpolation trong Graph Editor cho chuyển động mềm nhưng không làm vải đi xuyên thân do overshoot. Không cố làm tất cả bộ điều khiển thành sóng sin đều nhau: độ trễ phụ thuộc hướng lực, biên độ đi và cấu trúc váy.

### 3.4. Kiểm tra chuyển động múa

Với động tác xoay người, bước chéo hoặc giơ chân cao, lên kế hoạch trước cho hướng mở của váy. Ở frame mà đùi sắp xuyên qua mesh, dịch control gần đó ra ngoài; ở frame kế tiếp trả dần về vị trí cũ. Để váy ít dao động ở cạp và rung nhẹ ở mép, dùng các vòng control ở độ cao khác nhau với biến thiên khác nhau. Có thể bổ sung physics rất nhẹ ở phần mép trong pipeline lai nếu muốn độ ngẫu nhiên cao hơn.

## 4. Thực hành

**Nhiệm vụ:** Tạo clip đi bộ ngắn cùng váy và một động tác xoay/múa. Key ít nhất ba pose chính cho mép váy, thêm secondary motion và làm clip đi bộ lặp.

**Checkpoint:** Không clipping nghiêm trọng ở các frame co chân; cạp không trượt; mép váy có độ trễ; điểm nối vòng lặp không giật.

## 5. Câu hỏi ôn tập

**Câu 1.** Để váy mềm trong bước đi, điều khiển nào thường có biên độ lớn hơn?

A. Cạp váy
B. Camera
C. Vòng mép váy
D. Root của nhân vật

**Đáp án:** C. **Giải thích:** Mép tự do có biên độ dao động lớn hơn vùng neo.

**Câu 2.** Dấu hiệu của secondary motion tự nhiên là gì?

A. Mọi control xoay cùng lúc như khối cứng
B. Phần váy có độ trễ so với chuyển động thân
C. Váy không đổi hình
D. Không có keyframe

**Đáp án:** B. **Giải thích:** Độ trễ tạo cảm giác quán tính và chuyển động vật liệu mềm.

**Câu 3.** Điều quan trọng khi loop một đoạn walk?

A. Pose và tốc độ tại điểm nối liên tục
B. Tăng texture lên 8K
C. Xóa hip bone
D. Thêm hai camera

**Đáp án:** A. **Giải thích:** Vị trí và tiếp tuyến không liền nhau gây giật mỗi chu kỳ.

**Câu 4.** Khi chân sắp xuyên váy ở động tác múa, nên làm gì?

A. Tăng bloom
B. Đổi FPS ngẫu nhiên
C. Chỉ thay màu vải
D. Nắn các control liên quan trong frame xung đột

**Đáp án:** D. **Giải thích:** Animator kiểm soát trực tiếp khoảng hở giữa vải và chân.

**Câu 5.** Vì sao không dùng cùng một dao động cho mọi control?

A. Vì không được keyframe
B. Vì Blender sẽ crash
C. Vì váy trông cứng và thiếu chuyển tiếp
D. Vì bone không thể xoay

**Đáp án:** C. **Giải thích:** Các vị trí trên váy cần chuyển động lệch pha và biên độ khác nhau.

## 6. Tổng kết

Rig thủ công cho kết quả dễ dự đoán, phù hợp animation có chủ ý. Chất lượng nằm ở nhịp, độ trễ và sửa tiếp xúc với cơ thể, không chỉ ở số lượng keyframe.
