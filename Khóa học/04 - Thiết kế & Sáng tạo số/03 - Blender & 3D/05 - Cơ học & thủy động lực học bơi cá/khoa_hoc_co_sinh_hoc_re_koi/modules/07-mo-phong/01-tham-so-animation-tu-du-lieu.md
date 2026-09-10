# Từ dữ liệu sinh học đến tham số animation

> **Nguồn chính:** Bài học ứng dụng suy luận từ Wu et al. (2007); các giá trị sinh học lấy từ tr. 4381–4388.

## Mục tiêu học tập
- Biết cách ánh xạ biến sinh học sang rig.
- Giữ distinction giữa dữ liệu đo và tham số animation.
- Tạo một turn clip có logic hai stage.

## 1. Nguyên tắc ánh xạ

Phần này là **ứng dụng mô phỏng**, không phải kết luận trực tiếp của bài báo.

Có thể ánh xạ:

- `β1` → thay đổi yaw của root/thân trước;
- `dmax/L` → biên độ uốn của chuỗi spine + tail;
- `t1`, `t2` → thời lượng hai pha;
- `ω1` → mức cường độ của clip;
- recoil speed → tốc độ trả đuôi ở stage 2.

## 2. Khung clip sinh học tối thiểu

Một clip routine turn nên có:

1. stage 1: thân uốn thành C, heading đổi chủ yếu ở pha này;
2. stage 2: thân–đuôi hồi;
3. với turn mạnh, recoil nhanh hơn và có thể tăng tốc sau rẽ;
4. với turn nhẹ, recoil mềm hơn và có thể không tăng tốc.

## 3. Scale thời gian

Giá trị `t1 ≈ 0,087 s` đến từ cá thí nghiệm dài khoảng 56,6 mm. Khi dùng cho model game lớn hơn hoặc stylized, nên xem đây là **mốc tham khảo cơ chế**, không bắt buộc sao chép thời gian tuyệt đối.

## Bài tập tự luyện
1. Thiết kế ba preset slow/moderate/fast bằng ω1 và dmax.
2. Trong rig, bộ xương nào nên đạt độ cong lớn nhất ở cuối stage 1?
