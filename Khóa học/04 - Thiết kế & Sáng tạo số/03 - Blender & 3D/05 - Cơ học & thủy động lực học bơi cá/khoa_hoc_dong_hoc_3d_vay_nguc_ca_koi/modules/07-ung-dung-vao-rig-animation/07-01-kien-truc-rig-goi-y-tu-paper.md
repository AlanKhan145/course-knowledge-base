# Ánh xạ kết quả paper sang kiến trúc rig vây ngực
> **Phạm vi:** Bài này là phần ứng dụng/suy luận từ kết quả của paper vào rig và animation. Các con số thực nghiệm vẫn được giữ nguyên; các đề xuất triển khai 3D không phải kết luận trực tiếp của tác giả.
## Mục tiêu học tập
- Chuyển thuật ngữ paper thành control rig.
- Phân tách root motion, ray deformation và surface deformation.
- Thiết kế rig có thể hỗ trợ retreating và hovering.

## Nội dung bài học

### Tầng root controls

Mỗi tia đại diện nên có root control với orientation tương ứng $\theta,\phi,\delta$. Với rig nhẹ, có thể dùng 5 master rays theo đúng các tia 1, 4, 7, 9, 12 rồi nội suy cho các tia còn lại.

### Tầng deformation

Dọc mỗi tia nên có ít nhất 2-3 segment/bone để tạo bending và phase delay. Dorsal leading ray có thể cứng hơn; ventral leading ray cho phép biên độ và overshoot lớn hơn.

### Tầng mode controls

Tạo bốn custom properties hoặc shape controls: **Expansion**, **Cupping**, **Undulation**, **Bending**. Các property không thay thế root rotations mà blend với chúng.

### Phase propagation

Undulation nên có phase offset theo thứ tự dorsal → ventral. Điều này bám sát quan sát paper về delay của $\lambda$ giữa các tia.

## Điểm cần ghi nhớ
- Không gán trực tiếp đơn vị độ của paper vào model nếu scale/orientation khác.
- Giữ 5 master rays là một khởi đầu hợp lý về mặt sampling.
- Rig nên cho phép stiffness khác nhau theo vị trí tia.

## Bài tập tự luyện
1. Phác thảo hierarchy bone cho 14 tia vây.
2. Tạo bảng mapping: paper parameter → Blender property → bone group.

## Đối chiếu nguồn

Ứng dụng suy luận từ Fig. 2, Fig. 4, Fig. 9, Fig. 13 và Fig. 16 của paper.
