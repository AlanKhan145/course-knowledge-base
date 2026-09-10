# Khóa học: Động học 3D vây ngực cá Koi

Khóa học được biên soạn từ bài báo **A Three-Dimensional Kinematics Analysis of a Koi Carp Pectoral Fin by Digital Image Processing** (Wang et al., 2013).

## Mục tiêu toàn khóa

- Hiểu cấu trúc và động học 3D của vây ngực cá Koi.
- Nắm phương pháp high-speed imaging, marker tracking, coordinate transformation và SVD.
- Phân tích hai gait chính: retreating và hovering.
- Hiểu bốn mode: expansion, bending, cupping, undulation.
- Chuyển các kết quả thành nguyên tắc rig/animation có ghi rõ phần suy luận.

## Cấu trúc khóa học

### Module 01 - Cơ sở chuyển động và cấu trúc vây ngực

- [Vai trò của vây ngực trong chuyển động cá Koi](modules/01-co-so-va-cau-truc/01-01-vai-tro-vay-nguc-trong-chuyen-dong.md)
- [Cấu trúc tia vây và hệ điểm theo dõi](modules/01-co-so-va-cau-truc/01-02-cau-truc-tia-vay-va-cac-diem-danh-dau.md)

### Module 02 - Hệ thí nghiệm và tái tạo chuyển động 3D

- [Hệ thống chụp hai góc nhìn bằng một camera](modules/02-thuc-nghiem-va-tai-tao-3d/02-01-he-thong-chup-hai-goc-nhin.md)
- [Lấy mẫu chuyển động tia vây theo định lý Shannon](modules/02-thuc-nghiem-va-tai-tao-3d/02-02-lay-mau-theo-shannon.md)
- [Hệ tọa độ và biến đổi 3D của vây ngực](modules/02-thuc-nghiem-va-tai-tao-3d/02-03-he-toa-do-va-bien-doi-3d.md)
- [Quy trình xử lý ảnh và tái tạo bề mặt vây](modules/02-thuc-nghiem-va-tai-tao-3d/02-04-quy-trinh-xu-ly-anh.md)

### Module 03 - Tham số hóa và SVD

- [Tham số hóa chuyển động gốc tia vây](modules/03-tham-so-va-svd/03-01-tham-so-goc-cua-tia-vay.md)
- [SVD và mô hình hóa chuyển động chiều thấp](modules/03-tham-so-va-svd/03-02-svd-va-bon-mode-chinh.md)

### Module 04 - Động học vây khi retreating

- [Chu kỳ vây ngực khi cá Koi lùi](modules/04-retreating/04-01-chu-ky-retreating.md)
- [Dorsal leading ray trong retreating](modules/04-retreating/04-02-dorsal-leading-ray-khi-retreating.md)
- [Ventral leading ray trong retreating](modules/04-retreating/04-03-ventral-leading-ray-khi-retreating.md)
- [Expansion và undulation trong retreating](modules/04-retreating/04-04-expansion-va-undulation-khi-retreating.md)

### Module 05 - Động học vây khi hovering

- [Chu kỳ vây ngực khi hovering](modules/05-hovering/05-01-chu-ky-hovering.md)
- [Dorsal và ventral leading rays trong hovering](modules/05-hovering/05-02-leading-rays-khi-hovering.md)
- [Expansion, undulation và diện tích vây trong hovering](modules/05-hovering/05-03-expansion-undulation-va-dien-tich-vay.md)

### Module 06 - Bốn mode cơ bản của vây ngực

- [Bốn mode cơ bản của vây ngực Koi](modules/06-bon-mode-co-ban/06-01-expansion-bending-cupping-undulation.md)
- [Residual modes và giới hạn của mô hình bốn mode](modules/06-bon-mode-co-ban/06-02-residual-modes-va-gioi-han-mo-hinh.md)

### Module 07 - Ứng dụng vào rig và animation 3D

- [Ánh xạ kết quả paper sang kiến trúc rig vây ngực](modules/07-ung-dung-vao-rig-animation/07-01-kien-truc-rig-goi-y-tu-paper.md)
- [Công thức dựng animation retreating và hovering từ dữ liệu paper](modules/07-ung-dung-vao-rig-animation/07-02-cong-thuc-animation-retreating-va-hovering.md)

## Tài nguyên

- [Bản đồ hình ảnh](ASSET_MAP.md)
- [Glossary](GLOSSARY.md)
- [Manifest](MANIFEST.md)
- `source/`: PDF gốc để đối chiếu.
