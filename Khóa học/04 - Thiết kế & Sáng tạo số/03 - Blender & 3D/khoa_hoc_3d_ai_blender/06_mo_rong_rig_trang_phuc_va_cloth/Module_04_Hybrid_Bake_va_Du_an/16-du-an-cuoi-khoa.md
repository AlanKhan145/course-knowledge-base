# Bài 16 — Dự án cuối khóa — Nhân vật mặc váy, áo choàng và phụ kiện chuyển động

## 1. Tổng quan

Dự án tổng hợp xây một nhân vật game có váy ngắn, áo choàng nhẹ và túi hoặc tay áo rộng. Sản phẩm phải có các clip cơ bản, chuyển động vải hợp lý và một phiên bản xuất dùng được ngoài scene Blender gốc.

## 2. Mục tiêu học tập

- Lập kế hoạch pipeline từ mesh đến animation và xuất file.
- Áp dụng rig thủ công, Cloth hoặc kết hợp theo từng món.
- Kiểm thử với checklist tái hiện được và tổng hợp lỗi đã sửa.

## 3. Nội dung bài học

### 3.1. Yêu cầu thiết kế

Nhân vật phải có armature đã rig và tối thiểu ba món chuyển động: (1) váy hoặc vạt áo, (2) áo choàng hoặc dải vải rủ, (3) túi/dây đeo hoặc tay áo rộng. Chọn vật liệu, màu và tỷ lệ phù hợp một nhân vật game; phần vạt không nên dài đến mức phủ kín các chuyển động chân nếu mục tiêu là nhìn rõ animation.

Bộ animation tối thiểu: `Idle`, `Walk`, `Turn` và một đoạn `Action` (nhảy, múa, cúi hoặc cú đá). Các động tác có thể tạo trong Blender hoặc lấy từ Mixamo, nhưng phải có pha chuẩn bị mô phỏng và được kiểm tra ở tư thế cực hạn.

### 3.2. Bốn mốc triển khai

**Milestone A — Mesh & Rig nền:** kiểm tra đơn vị, scale, body, pose rest, canh trang phục và bind các vùng cần bám. Tạo bộ pose stress-test.

**Milestone B — Váy & phụ kiện:** váy có `DEF/MCH/CTRL` hoặc bone tối giản riêng; túi/dây/tay áo có ít nhất một control phụ và không xoắn khi vận động.

**Milestone C — Áo choàng Cloth:** topology quad, Pin Gradient, Body_Collision, đoạn rest pose, cache bake. Thử ít nhất hai cấu hình damping/quality và chọn một bản tốt.

**Milestone D — Xuất & trình bày:** dựng camera, ánh sáng, material; render clip và, nếu dùng cho game, thử hệ chuyển Cloth sang bone hoặc xuất bone-driven skirt. Xuất FBX và kiểm tra trong file Blender sạch hoặc công cụ game đang dùng.

### 3.3. Bảng kiểm nghiệm kỹ thuật

| Hạng mục | Tiêu chí đạt |
| --- | --- |
| Scene | Collection và tên mesh/rig rõ ràng |
| Body/Cloth | Không giao nhau đáng kể ở rest pose |
| Animation | Không giật tại điểm nối hoặc tư thế bất khả thi rõ rệt |
| Weight Paint | Vùng vai/cạp/đầu gối không bị kéo sai bone |
| Skirt control | Có thể chỉnh mở mép váy và giữ ổn cạp |
| Collision | Đúng vùng hông/lưng/đùi; không có collider thừa gây lỗi |
| Cloth bake | Có cache bao phủ toàn bộ clip, phát lại ổn định |
| Export | Animation còn hoạt động khi bỏ các đối tượng trung gian không xuất |
| Presentation | Có ít nhất ba góc quan sát kiểm lỗi, một video giới thiệu |

Mỗi lần gặp lỗi, ghi **frame**, **vùng**, **nguyên nhân thử nghiệm**, **cách sửa**. Với điểm chưa giải quyết, nêu giới hạn thay vì che bằng motion blur.

### 3.4. Định nghĩa hoàn thành

Dự án hoàn thành khi các clip chạy liền mạch, trang phục giữ kiểu dáng chính, không có lỗi xuyên thân lớn ở góc camera dự kiến, và đầu ra có thể mở lại. Bản video chấp nhận dùng Cloth baked; bản dùng cho game phải có chuyển động xương/animation tương thích đã kiểm thử, không chỉ chứa cache nội bộ của Blender.

Lưu tối thiểu ba phiên bản `.blend`: `01_base_rig`, `02_cloth_configured`, `03_baked_final` để dễ quay lại khi thay đổi skin hoặc solver.

## 4. Thực hành

**Bài thực hành cuối khóa:**

1. Tạo một nhân vật đã rig, canh ba món trang phục và tạo 4 pose thử.
2. Hoàn thiện Weight Paint và xương điều khiển một món trang phục.
3. Dựng và bake ít nhất một món Cloth có Pin Group, Collider riêng.
4. Ghép 4 clip animation yêu cầu; render một video tổng hợp.
5. Tạo bảng nhật ký sửa ít nhất 3 lỗi thực tế và nộp thư mục `.blend`, `.fbx` (nếu xuất game), clip render, ảnh pose test.

**Thang tự đánh giá (10 điểm):** mesh/rig 2; biến dạng và weight 2; Cloth/collision 2; animation 2; xuất file và tài liệu kiểm thử 2. Mỗi tiêu chí chỉ đạt tối đa nếu có minh chứng rõ.

## 5. Câu hỏi ôn tập

**Câu 1.** Sản phẩm nào đủ chứng minh mô phỏng vải ổn định?

A. Ảnh tĩnh một frame
B. Cache/video toàn clip cùng frame kiểm tra
C. Mỗi texture 8K
D. Một camera nhìn nghiêng

**Đáp án:** B. **Giải thích:** Phải xem chuyển động liên tục để kiểm tra kết quả Physics.

**Câu 2.** Tại sao cần lưu phiên bản base rig trước bake?

A. Để có thể quay lại sửa skinning và cấu trúc
B. Để giảm UV tự động
C. Để xóa action
D. Để khóa lighting

**Đáp án:** A. **Giải thích:** Thay geometry hoặc rig sau bake dễ phá kết quả đã tính.

**Câu 3.** Đầu ra cho game cần kiểm chứng điều gì?

A. Chỉ độ bóng
B. Chỉ render engine
C. Độ dài file ZIP
D. Animation chạy mà không phụ thuộc Empty/Cloth của scene Blender

**Đáp án:** D. **Giải thích:** Dữ liệu xuất phải tự đủ cho môi trường đích.

**Câu 4.** Khi váy bị xuyên tại frame 76, nhật ký sửa lỗi cần gì?

A. Chỉ ghi xấu
B. Chỉ đổi tên file
C. Vị trí lỗi, giả thuyết nguyên nhân, thay đổi và kết quả
D. Tắt toàn bộ render

**Đáp án:** C. **Giải thích:** Nhật ký giúp tái hiện và xác minh cách sửa.

**Câu 5.** Vai trò của Milestone B là gì?

A. Render camera
B. Rig váy và phụ kiện có điều khiển hữu ích
C. Chỉ chọn màu background
D. Làm nhạc

**Đáp án:** B. **Giải thích:** Milestone B tập trung xương/constraint trước khi nâng sang Cloth nhiều lớp.

## 6. Tổng kết

Dự án đạt yêu cầu khi có quá trình kiểm chứng từ rig đến xuất file. Hãy ưu tiên chuyển động đáng tin cậy và rig dễ sửa trước khi tăng hiệu ứng trình bày.
