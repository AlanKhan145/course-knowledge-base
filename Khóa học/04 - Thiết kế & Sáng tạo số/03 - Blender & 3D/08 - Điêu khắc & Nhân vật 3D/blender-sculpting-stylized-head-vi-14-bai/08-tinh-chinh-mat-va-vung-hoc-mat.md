# Bài 08 — Tinh chỉnh mí, gờ hốc mắt và góc mắt

> **Khóa học Blender Sculpting — đầu nhân vật stylized | Tài liệu tiếng Việt**  
> **Nguồn chính:** transcript dài khoảng 1 giờ 34 phút do người học cung cấp. **Mốc trong mỗi bài là thời gian video**, không phải thời lượng thực hành.  
> **Mức độ:** bắt đầu → trung cấp; ưu tiên dựng hình khối đầu và học kỹ thuật Sculpt Mode.

> **Quy ước biên tập:** Nội dung *Theo bài gốc* bám sát trình tự và ý tưởng người dạy; các mục ghi **bổ sung** là hướng dẫn sư phạm/kiến thức phần mềm, không phải lời nói nguyên văn. Transcript có lỗi dịch máy: "không khí" = *ear (tai)*, "máy xay sinh tố" = *Blender*, "xe" có thể là *ears*, "sấy" là *sculpt* trong ngữ cảnh. Các vị trí không rõ đã được diễn đạt thận trọng. **Phím tắt và menu khác nhau giữa các phiên bản.**

**Đối chiếu bản ghi:** 52:29–1:05:11.

## Mục tiêu học tập
- Tăng độ tinh vi của mí sau khi form tổng thể ổn.
- Làm rõ độ dày mí, rãnh mí và vùng gò dưới mắt.
- Nhận diện khi Smooth/Pinch làm hỏng khối.

## Nội dung chính
Đoạn video này nâng mật độ mesh và trở lại vùng mắt để sửa đi sửa lại **độ dày, đường cong, độ sâu**. Giảng viên chú trọng gờ trên mắt, khu vực khóe và vùng dưới mi; sử dụng **Pinch** làm nét gọn hơn, Smooth giảm gồ ghề và Mask bảo vệ phần đã đúng. Điều quan trọng nhất là **giữ nguyên hình dạng nhãn cầu/hộp sọ khi chỉnh mí**.

## Quy trình chi tiết
1. Tạo savepoint `head_sculpt_08_eyes.blend`.
2. Xác minh đủ mật độ mesh trước khi vẽ rãnh nhỏ. Video đề cập Voxel Size khoảng `0.009`, mesh có thể lên vài trăm nghìn đỉnh hoặc hơn — **chỉ dùng nếu phần cứng và tỷ lệ mesh cho phép**.
3. Quan sát mí trên: chỉnh khối từ gần khóe trong sang khóe ngoài, cho mí có bề dày rõ.
4. Dùng **Pinch** tiết chế để thu gọn cạnh, tránh kéo toàn bộ thể tích bị co.
5. Dùng **Draw Sharp/Crease** tạo chuyển cạnh tại góc mắt; Smooth và Grab phục hồi độ cong.
6. Tách vùng lông mày/gờ xương ra khỏi mí: chuyển mảng mềm, không tạo một nếp cắt chạy ngang đều như dây.
7. Mask khu vực nhãn cầu/mí đúng để sửa vùng dưới mắt; tránh nhấc cả hốc mắt lên quá mức.
8. Ẩn/hiện nhãn cầu để soi khối mí và khoảng trống quanh cầu; kiểm tra 3/4.

## Tiêu chí chất lượng
| Thành phần | Đúng | Sai |
|---|---|---|
| Mí | Dày, ôm mắt, thay đổi độ rộng có chủ đích | Mỏng đều như dây |
| Gờ ổ mắt | Nối với trán và gò má | Vòng tròn nổi gắn trên mặt |
| Khóe | Chuyển nét có độ mềm | Nhọn đứt, khắc quá sâu |
| Rãnh mí | Rõ khi nhìn gần, không phá silhouette | Cắt sâu làm mất mô |

## Bài tập
Thử 3 cường độ Crease trên 3 bản copy, chụp close-up và chọn bản giữ được bề mặt tự nhiên nhất.

## Tiêu chí hoàn thành
- [ ] Có thể đọc rõ bề dày mí ở góc nghiêng.
- [ ] Không có rách lưới do khắc sâu.
- [ ] Gờ dưới mắt không che lấp nhãn cầu.

---
## Tự đánh giá nhanh
1. Phần nào trong bài là khối lớn cần ưu tiên hơn nếp/rãnh nhỏ?
2. Ảnh góc 3/4 cho thấy vấn đề gì mà ảnh Front không thể hiện đủ?
3. Bạn sẽ lưu file và kiểm tra mật độ mesh vào thời điểm nào?

**Chuyển tiếp:** Hoàn thành checklist và lưu ảnh trước khi mở bài tiếp theo.
