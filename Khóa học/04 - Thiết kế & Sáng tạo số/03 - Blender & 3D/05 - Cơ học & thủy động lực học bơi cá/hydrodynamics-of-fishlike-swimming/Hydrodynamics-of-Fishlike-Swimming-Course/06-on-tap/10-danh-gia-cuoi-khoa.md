# Bài 10 - Đánh giá cuối khóa

## 1. Hướng dẫn

- Thời gian gợi ý: 45-60 phút.
- Không xem đáp án ở cuối trước khi hoàn thành.
- Tổng điểm: 100.

## 2. Phần A - Trắc nghiệm khái niệm (20 điểm)

Mỗi câu 4 điểm.

1. Reverse Kármán street trong bài báo liên hệ mạnh nhất với:
   - A. Drag wake của vật cản cứng
   - B. Jet wake tạo thrust
   - C. Lớp biên đứng yên
   - D. Chỉ leading-edge vortex

2. Số Strouhal trong bài báo được viết là:
   - A. `UA/f`
   - B. `fU/A`
   - C. `fA/U`
   - D. `A/(fU)`

3. Trong vorticity control, tail chủ yếu:
   - A. Chỉ tạo xoáy mới, không tương tác xoáy tới
   - B. Tái định vị xoáy tới và tương tác với xoáy do tail shed
   - C. Giữ wake không có xoáy
   - D. Chỉ giảm skin friction

4. Trong turning C-shape, lực đổi momentum gắn với:
   - A. Một vortex pair mạnh tạo local jet
   - B. Một vortex đứng yên ở head
   - C. Chỉ pressure drag của thân cứng
   - D. Lớp biên laminar tuyệt đối

5. Trong case Zhang được bài báo dẫn, turbulence giảm mạnh khi:
   - A. `c/U < 0,1`
   - B. `c/U = 0`
   - C. `c/U > 1`
   - D. `c/U` không liên quan

## 3. Phần B - Trả lời ngắn (30 điểm)

Mỗi câu 6 điểm.

1. Nêu ba chế độ tương tác giữa oncoming vortex và foil-shed vorticity.
2. Vì sao `St` không đủ để xác định hiệu suất của foil?
3. Slender-body theory giả định gì về crossflow?
4. Mô tả chuỗi vorticity từ body wave tới reverse Kármán wake.
5. Vì sao robot biomimetic hữu ích hơn cá sống trong một số phép đo thủy động lực học?

## 4. Phần C - Bài toán Strouhal (15 điểm)

Một robot cá bơi với:

- `U = 0,8 m/s`;
- `f = 1,6 Hz`;
- tổng excursion ngang của tail `A = 0,14 m`.

### 4.1. Yêu cầu

1. Tính `St`.
2. So sánh giá trị với khoảng 0,25-0,35 được báo cáo cho một số profile trong bài báo.
3. Nêu ít nhất ba thông tin bổ sung phải biết trước khi kết luận robot đang chạy tối ưu.

## 5. Phần D - Phân tích cơ chế turning (20 điểm)

Hãy viết 8-12 câu mô tả C-turn của Giant Danio từ lúc thân gần hoàn thành hình C đến khi vortex pair đi vào wake. Bài trả lời phải đề cập:

- hai body-bound vortices;
- shedding trước peduncle;
- tail repositioning;
- tail-shed vorticity;
- vortex pair;
- local jet.

## 6. Phần E - Thiết kế thí nghiệm (15 điểm)

Bạn có một robot cá thân mềm 6 đoạn và muốn kiểm tra giả thuyết “traveling-wave motion giảm công suất cần thiết”. Hãy đề xuất:

- biến điều khiển;
- biến đo;
- baseline;
- cách tính Strouhal;
- dữ liệu wake cần quan sát;
- cách tách hiệu ứng wake và boundary layer về mặt lập luận.

## 7. Đáp án và rubric

### 7.1. Phần A

1. B
2. C
3. B
4. A
5. C

### 7.2. Phần B - ý chính

1. Tăng cường; triệt tiêu; ghép cặp trái dấu tạo wake rộng.
2. Vì hiệu suất còn phụ thuộc phase, góc tấn, reduced frequency, amplitude/chord, vị trí trục pitch và wake topology.
3. Crossflow trên các mặt cắt vuông góc trục cá được xấp xỉ gần hai chiều do thân slender.
4. Traveling wave → bound vorticity tăng về sau → shedding → free vortices tại peduncle → tail repositioning → interaction với tail-shed vorticity → reverse Kármán street + jet.
5. Robot cho phép lặp kinematics, kiểm soát tham số và đo lực/power chính xác.

### 7.3. Phần C

$$
St = \frac{1.6 \times 0.14}{0.8} = 0.28
$$

`St = 0,28` nằm trong khoảng 0,25-0,35 được nêu cho một số profile. Chưa thể kết luận tối ưu nếu chưa biết ít nhất phase, góc tấn/pitch, chord hoặc reduced frequency, Reynolds number và wake topology.

### 7.4. Phần D - rubric

- 4 điểm: đúng trình tự body-bound vortices.
- 4 điểm: đúng shedding và peduncle.
- 4 điểm: đúng tail repositioning.
- 4 điểm: đúng vortex pair/local jet.
- 4 điểm: diễn giải mạch lạc, không biến các con số case-specific thành luật phổ quát.

### 7.5. Phần E - rubric

- 3 điểm: biến điều khiển hợp lý (`f`, amplitude, phase, wave speed `c`, `U`).
- 3 điểm: đo power và thrust.
- 3 điểm: baseline rigid-straight tow hoặc motion baseline rõ ràng.
- 2 điểm: tính `St = fA/U` đúng.
- 2 điểm: đề xuất PIV/DPIV hoặc quan sát wake tương đương.
- 2 điểm: phân biệt wake dynamics với boundary-layer behavior.
