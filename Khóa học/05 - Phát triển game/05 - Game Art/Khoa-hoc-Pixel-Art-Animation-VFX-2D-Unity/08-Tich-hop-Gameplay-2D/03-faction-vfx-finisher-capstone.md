# Bài 03 — Đồ án cuối: bộ chiêu tộc hệ và cinematic 2D

> Module: Đồ án ứng dụng: VFX tung chiêu, kết liễu, hiệu ứng tộc hệ trong game 2D  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: Ứng dụng nâng cao tổng hợp từ toàn bộ khóa học

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **đồ án cuối: bộ chiêu tộc hệ và cinematic 2d**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Bối cảnh
Đồ án ứng dụng cho game bàn cờ chiến thuật có kỹ năng riêng từng quân. Dựng **3 bộ hiệu ứng** khác cảm giác chiến đấu: Thủy Quái (dòng chảy), Virus (lan truyền), Tên Lửa (vệt khói/nổ). Đây là mô hình thực hành sáng tạo được thiết kế thêm, không có trong transcript gốc.

### Yêu cầu tối thiểu
1. **Thủy Quái:** sóng nạp từ chân quân cờ, dải nước lao theo hướng mục tiêu, splash khi trúng; dùng sprite/mesh uốn và hạt nước.
2. **Virus:** ký hiệu hạt nhân nhỏ, hiệu ứng lây lan theo mạng giữa ô mục tiêu, màu nhạt dần theo stack; không cần vẽ sprite mới cho mỗi ô.
3. **Tên Lửa:** muzzle flash, vệt khói/trail, tên lửa di chuyển, burst mảnh và shock ring khi nổ.
4. **Kết liễu:** hit-stop rất ngắn (nếu gameplay cho phép), flash, shockwave, hạt tản rồi tự tắt. Không ép cinematic dài ở mọi pha.
5. **Đồng hệ/đa hệ:** một `SynergyEvent` sinh lớp cộng hưởng (ví dụ nước + điện), màu và thời gian riêng, không che hoàn toàn quân cờ.

### Thông số đánh giá
| Nhóm | Đạt yêu cầu |
|---|---|
| Đọc hành động | Nhìn một lần biết ai tung chiêu và mục tiêu ở đâu |
| Nhịp | Có chuẩn bị, cực đại, tiêu tán |
| Tái sử dụng | Có prefab/sequence dùng được cho nhiều quân |
| Hiệu năng | Số hạt, atlas, overdraw có kiểm soát |
| Tích hợp | Gắn đúng event; không phát khi skill thất bại |

### Bài nộp
Project Unity, nguồn Aseprite/Spine/Blender nếu có, clip demo 30–60 s, 3 prefab FX, bảng phân công event và báo cáo tối ưu 1 trang.

## Bài tập bắt buộc

1. Tạo tối thiểu 3 skill FX, 1 finisher, 1 synergy FX.
2. Nộp video có cảnh trước/sau khi thêm hiệu ứng.

## Tiêu chí hoàn thành

Từng tộc có ngôn ngữ hình ảnh riêng; gameplay vẫn dễ đọc.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
