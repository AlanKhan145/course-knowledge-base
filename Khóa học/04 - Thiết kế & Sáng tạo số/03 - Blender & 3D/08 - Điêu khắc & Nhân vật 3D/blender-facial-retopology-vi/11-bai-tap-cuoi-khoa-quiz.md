# Bài 11 — Dự án cuối khóa và tự kiểm tra
**Bài thực hành tổng hợp ngoài video gốc.**


## Đề bài
Dùng một đầu high-poly bất kỳ (sculpt hoặc AI) và tạo một mesh retopo riêng có: vòng mắt, vòng môi, mũi, má, hàm, trán, tai, phần sau đầu. Không yêu cầu làm tóc, texture, rig hoàn chỉnh.


## Hồ sơ nộp
- [ ] `01_source.blend`, `04_finished.blend` (hoặc một file có collection nguồn riêng).
- [ ] Ảnh Front, Side, 3/4, Back có wireframe.
- [ ] Ảnh cận mắt, miệng, tai.
- [ ] Bảng số vertices/faces, modifier, lỗi đã sửa.
- [ ] Ít nhất một hình kiểm tra trạng thái miệng mở hoặc mắt nhắm.


## Rubric (100 điểm)
| Mục | Điểm |
|---|---:|
| Edge flow mắt và mí | 20 |
| Edge flow miệng và khóe môi | 20 |
| Má, mũi, cằm, hàm, trán | 15 |
| Tai, hốc mắt, lỗ mũi | 15 |
| Vệ sinh mesh: normal, pole, đối xứng, không mặt trùng | 15 |
| Cấu trúc dự án và hình minh chứng | 10 |
| Kiểm tra biến dạng | 5 |


## Câu hỏi tự luyện
1. Retopology khác Decimate như thế nào?
2. Vì sao hai dải đè lên nhau chưa chắc đã liên thông?
3. Mirror phản chiếu theo trục và tâm nào?
4. Merge và Clipping khác nhau ra sao?
5. Snapping và Shrinkwrap thực hiện việc gì?
6. Pole 5 cạnh có luôn xấu?
7. Vì sao tránh pole lớn ngay khóe miệng?
8. Khi vertex hốc mắt bị Shrinkwrap hút lên mặt ngoài, nên làm gì?
9. Loop Cut và Slide dùng phím nào?
10. Grid Fill có đảm bảo quad không méo?
11. Shade Smooth có tăng số đa giác?
12. Tại sao test biến dạng trước khi rig?


## Đáp án tóm tắt
1. Retopo tổ chức luồng cạnh; Decimate chủ yếu giảm mật độ.
2. Các đỉnh có thể chỉ trùng vị trí.
3. Theo trục local của object / Mirror Object.
4. Merge hàn gần tâm; Clipping ngăn vượt tâm khi chỉnh.
5. Snap khi thao tác; Shrinkwrap là modifier liên tục.
6. Không, là công cụ chuyển hướng.
7. Vì chỗ đó biến dạng mạnh.
8. Tắt hoặc giới hạn modifier, đặt lại độ sâu/target.
9. Ctrl+R; G G trong ngữ cảnh phù hợp.
10. Không; còn phụ thuộc biên và Span/Offset.
11. Không.
12. Vì neutral pose không chứng minh độ sạch khi cử động.


**Bài nâng cao:** so sánh một phiên bản ít quads và một phiên bản thêm dải để đánh giá deformation và khả năng tối ưu.