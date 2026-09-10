# Lấy mẫu chuyển động tia vây theo định lý Shannon
## Mục tiêu học tập
- Hiểu điều kiện lấy mẫu pha giữa các tia.
- Biết vì sao tối thiểu năm điểm/tia đại diện được chọn.
- Liên hệ lấy mẫu không gian với sóng undulation.

## Nội dung bài học

### Điều kiện pha

Paper yêu cầu chênh lệch pha giữa hai điểm mẫu liên tiếp không vượt quá $\pi/2$. Với số sóng $n_\lambda$ và số tia $n$, chênh pha được biểu diễn là $\Delta\varphi=2\pi n_\lambda/(n-1)$.

### Số lượng mẫu tối thiểu

Từ hai biểu thức trên, paper thu được điều kiện $n \ge 4n_\lambda+1$. Với một chu kỳ undulation cơ bản, tối thiểu năm marker là cần thiết.

### Ý nghĩa thực hành

Nếu số control quá ít, dạng sóng có thể bị bỏ sót hoặc biến dạng. Nếu quá nhiều, mô hình nặng hơn nhưng không nhất thiết tăng chất lượng tương xứng.

## Điểm cần ghi nhớ
- Năm marker là lựa chọn có cơ sở lấy mẫu, không phải con số ngẫu nhiên.
- Undulation cần được xem như hiện tượng có pha giữa các tia vây.
- Mật độ control phải đủ để biểu diễn biến đổi không gian của vây.

## Bài tập tự luyện
1. Với $n_\lambda=2$, tính số marker tối thiểu theo công thức của paper.
2. Giải thích hiện tượng aliasing theo góc nhìn animation.

## Đối chiếu nguồn

Paper trang 212, các phương trình (1)-(3) và Fig. 2.
