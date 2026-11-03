# Khóa học Unity VFX Graph — Xây dựng quả cầu năng lượng

Khóa thực hành bằng tiếng Việt về việc tạo **quả cầu năng lượng chuyển động** trong Unity bằng **Visual Effect Graph**. Sản phẩm kết hợp ba lớp: **Trails**, **Pulse** và **Particles/Curl Noise**. Bài học được tổ chức từ thiết lập môi trường, dựng từng lớp cho đến đồ án hoàn chỉnh.

> **Phạm vi phiên bản:** bài thực hành sử dụng Unity **2019.3.7**, **URP**, **VFX Graph** và **Shader Graph**. Tên menu và node có thể thay đổi trên phiên bản Unity hiện nay. Các trị số trong tài liệu là **mốc thử nghiệm**, không phải cấu hình tối ưu chung.

## 1. Kết quả học tập

- Dựng hiệu ứng hạt bằng context Spawn, Initialize, Update, Output.
- Tạo các đường trail bám hình cầu và có bề dày biến thiên theo tuổi.
- Tạo xung sáng định kỳ bằng quad Additive và alpha theo vòng đời.
- Điều khiển chuyển động hạt bằng Turbulence, Conform to Sphere, Curl Noise và Remap.
- Tinh chỉnh nhiều màu, kích thước, mật độ và bảo đảm hiệu ứng có thể tái sử dụng.

## 2. Lộ trình học

| Module | Nội dung | Số bài |
| --- | --- | ---: |
| 01. Nền tảng VFX Graph | Cài đặt, các context và Blackboard | 2 |
| 02. Trails quanh hình cầu | Phát hạt, chuyển động, vòng đời và độ dày vệt | 3 |
| 03. Xung sáng và hệ hạt | Pulse, hạt nền và Curl Noise/Remap | 3 |
| 04. Hoàn thiện và đồ án | Phối màu, hiệu năng và sản phẩm cuối | 2 |

## 3. Danh mục bài học

### Module 01. Nền tảng Unity VFX Graph

- [Chuẩn bị Unity, URP và tạo Visual Effect Graph](01-nen-tang-vfx-graph/01-cai-dat-va-tao-vfx-graph.md)
- [Hiểu Spawn, Initialize, Update, Output và Blackboard](01-nen-tang-vfx-graph/02-vong-doi-he-hat-va-blackboard.md)

### Module 02. Vệt sáng (Trails) quanh hình cầu

- [Tạo hệ Simple Trails và phân bố hạt quanh hình cầu](02-trails-quanh-hinh-cau/01-tao-trails-va-phat-hat.md)
- [Tạo chuyển động và ràng buộc Trails bằng Conform to Sphere](02-trails-quanh-hinh-cau/02-chuyen-dong-va-conform-sphere.md)
- [Điều khiển vòng đời, độ dày và màu sắc của Trails](02-trails-quanh-hinh-cau/03-lifetime-do-day-mau-sac.md)

### Module 03. Xung sáng và hệ hạt năng lượng

- [Tạo xung sáng phát định kỳ (Periodic Burst và Additive)](03-xung-sang-va-he-hat/01-xung-sang-dinh-ky.md)
- [Tạo lớp hạt năng lượng nền: Spawn, Sphere và Turbulence](03-xung-sang-va-he-hat/02-he-hat-nen-va-turbulence.md)
- [Tạo chuyển động hữu cơ bằng Curl Noise, Position, Time và Remap](03-xung-sang-va-he-hat/03-curl-noise-va-remap.md)

### Module 04. Hoàn thiện hiệu ứng và đồ án

- [Phối màu nhiều lớp, kiểm soát độ sáng và hiệu năng](04-hoan-thien-va-do-an/01-phoi-mau-va-toi-uu.md)
- [Đồ án: Tự dựng một quả cầu năng lượng hoàn chỉnh](04-hoan-thien-va-do-an/02-do-an-qua-cau-nang-luong.md)

## 4. Cách học và thực hành

Đọc lần lượt theo module. Mỗi bài trình bày khái niệm, thông số cần thiết, các bước thực hành, lỗi thường gặp và trắc nghiệm có đáp án. Tạo một project Unity để thực hành xuyên suốt, lưu Scene sau mỗi mốc. Nên kiểm tra hiệu ứng khi đã thay đổi từng property từ Inspector, thay vì chỉ sao chép một cấu hình node cố định.

## 5. Tài liệu đi kèm

- [Bảng thông số tham khảo](THONG_SO_THAM_KHAO.md): các giá trị và hệ số trong quy trình.
- [Checklist nghiệm thu đồ án](CHECKLIST_DO_AN.md): danh sách kiểm tra trước khi coi hiệu ứng hoàn thành.

## 6. Giới hạn nội dung

Khóa học tập trung vào **một hiệu ứng quả cầu năng lượng**. Nội dung không đặt yêu cầu mới về C#, tích hợp combat, Shader Graph phức tạp hoặc benchmark FPS; những chủ đề đó cần tài liệu và ví dụ riêng. Các thao tác trong phiên bản Unity khác phải đối chiếu với trình biên tập đang dùng.
