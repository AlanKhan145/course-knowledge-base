# KHÓA HỌC BLENDER: DỰNG ROBOT MECH KHOA HỌC VIỄN TƯỞNG

**Tập 01 — Modeling đầu robot | Học bằng thực hành với Blender | Ngôn ngữ: Tiếng Việt**

## 1. Giới thiệu

Khóa học hướng dẫn dựng **phần đầu** một robot Mech hard-surface từ các hình chiếu tham chiếu. Người học đi từ khối cơ sở, tạo hình đối xứng, dựng vây giáp, hốc và rãnh cơ khí, bổ sung hệ ống, mắt, ốc vít, antenna đến dọn topology và lưu file.

Đây là một **tập học hoàn chỉnh theo phạm vi modeling phần đầu**, được chia thành 12 bài tự học và 1 bài Lab tổng hợp. Phần vật liệu, chiếu sáng, rigging, animation và render của toàn robot thuộc các tập kế tiếp trong lộ trình, **chưa có bài giảng chi tiết trong bộ tài liệu này**.

## 2. Điều kiện đầu vào và kết quả

**Cần có:** Blender; chuột có nút giữa hoặc cấu hình thay thế; bộ ảnh tham chiếu Front/Side/Top nếu muốn khớp cùng mẫu robot.

**Sau khi học:** Có thể tự dựng và kiểm tra một model đầu robot dạng hard-surface trong file `.blend`, sẵn sàng nối vào model cổ/thân ở các giai đoạn tiếp theo.

**Không bao gồm:** Model `.blend` làm sẵn, ba ảnh tham chiếu gốc, file HDRI hay file âm thanh. Hãy dùng tài nguyên riêng hoặc tài nguyên của tác giả nếu có quyền truy cập. Các ví dụ thông số Bevel/Curve phụ thuộc tỷ lệ cảnh, không phải các preset cố định.

## 3. Danh sách bài học

| Bài | Nội dung | Mở tài liệu |
| --- | --- | --- |
| 01 | **Khởi tạo dự án và chuẩn bị tài nguyên** — Tạo file .blend, nhận biết tài nguyên tham chiếu, HDRI và âm thanh. | [Đọc bài](bai_hoc/01-khoi-tao-du-an.md) |
| 02 | **Thiết lập góc nhìn và căn chỉnh ảnh tham chiếu** — Đặt ảnh Front/Side/Top đúng hướng và cùng hệ tọa độ. | [Đọc bài](bai_hoc/02-can-chinh-anh-tham-chieu.md) |
| 03 | **Dựng khối đầu đối xứng với Mirror Modifier** — Tạo silhouette đầu, kiểm soát object origin, Merge và Clipping. | [Đọc bài](bai_hoc/03-khoi-dau-mirror.md) |
| 04 | **Dùng Knife và Extrude để dựng vây giáp phía sau** — Cắt vùng riêng trên lưới rồi đùn nhiều cấp để tạo khung sau đầu. | [Đọc bài](bai_hoc/04-knife-extrude-canhsau.md) |
| 05 | **Inset, Bevel Modifier và kiểm tra pháp tuyến** — Làm mềm cạnh giáp, tạo hốc và sửa shading đảo mặt. | [Đọc bài](bai_hoc/05-bevel-phap-tuyen.md) |
| 06 | **Tạo hốc lắp cổ và khung giáp phía đáy** — Thiết kế vùng kết nối cổ, chỉnh pivot và xử lý hốc cơ khí dưới đầu. | [Đọc bài](bai_hoc/06-chi-tiet-day-va-co.md) |
| 07 | **Dựng các panel giáp hông và chi tiết hình trụ** — Inset rãnh giáp, tạo khối nhô, nối nhiều chi tiết cơ khí bên hông. | [Đọc bài](bai_hoc/07-giap-hong-va-tru.md) |
| 08 | **Tạo ống dẫn bằng Curve và nối bằng Bridge Edge Loops** — Dựng ống uốn cong, chuyển Curve thành Mesh và tối ưu vòng cạnh. | [Đọc bài](bai_hoc/08-ong-co-khi-curve-bridge.md) |
| 09 | **Khắc panel trên đầu và dựng cụm mắt nhiều lớp** — Tạo hốc mắt từ vòng tròn, UV Sphere, mặt kính và viền cơ khí. | [Đọc bài](bai_hoc/09-panel-tren-va-mat.md) |
| 10 | **Tạo ốc vít low-poly và đặt bằng Surface Snapping** — Dựng ốc ít polygon, sử dụng Snap to Face/Align Rotation. | [Đọc bài](bai_hoc/10-oc-vit-va-snapping.md) |
| 11 | **Tạo antenna, khối phụ và tổ chức đối tượng** — Extrude anten nhiều tầng; Separate/Join để tái sử dụng hình học. | [Đọc bài](bai_hoc/11-anten-va-chi-tiet-phu.md) |
| 12 | **Dọn topology và hoàn thiện model đầu Mech** — Xóa hình học thừa, kiểm tra normals, mức vát và lưu checkpoint. | [Đọc bài](bai_hoc/12-toiuu-hoanthien.md) |
| Lab | Dựng đầu robot từ đầu đến cuối, nghiệm thu theo checkpoint | [Mở Lab tổng hợp](bai_hoc/13-lab-tong-hop.md) |

**Tài liệu hỗ trợ:** [Bảng phím tắt](phu_luc/bang-phim-tat.md) · [Từ điển thuật ngữ](phu_luc/thuat-ngu.md) · [Tiến độ học tập](tien-do.md).

## 4. Lộ trình tổng thể 10 phần

Chuỗi học gốc chia công việc lớn thành mười giai đoạn:

| Phần | Chủ đề | Trạng thái trong bộ tài liệu này |
| --- | --- | --- |
| 1 | Modeling đầu robot | **Đã biên soạn** thành 12 bài + Lab |
| 2 | Modeling cổ | Lộ trình; chưa có nội dung bài giảng |
| 3 | Modeling thân và balô | Lộ trình; chưa có nội dung bài giảng |
| 4 | Modeling hông và đùi trên | Lộ trình; chưa có nội dung bài giảng |
| 5 | Modeling cẳng chân và bàn chân | Lộ trình; chưa có nội dung bài giảng |
| 6 | Thiết lập ánh sáng và vật liệu cơ bản cho một số bộ phận | Lộ trình; chưa có nội dung bài giảng |
| 7 | Hoàn thiện hệ vật liệu trên toàn robot | Lộ trình; chưa có nội dung bài giảng |
| 8 | Chuẩn bị rigging: xử lý modifier, tách bộ phận | Lộ trình; chưa có nội dung bài giảng |
| 9 | Tạo Armature và rig robot | Lộ trình; chưa có nội dung bài giảng |
| 10 | Walk cycle, render frame, Video Sequencer, âm thanh | Lộ trình; chưa có nội dung bài giảng |

## 5. Phương pháp học

Học theo thứ tự từ bài 01 đến bài 12, thực hành trực tiếp ngay trong Blender rồi làm Lab. Mỗi bài có **mục tiêu, phần giải thích kỹ thuật, thao tác, lỗi dễ gặp, bài tập và 5 câu trắc nghiệm có đáp án**. Nếu chưa có hình tham chiếu của robot mẫu, áp dụng quy trình cho một đầu Mech tự thiết kế nhưng giữ nguyên mục tiêu hình học.

Có thể lưu phiên bản theo các mốc `mech_head_base.blend` và `mech_head_part01_final.blend`; cách đặt tên chỉ là gợi ý tổ chức tệp, không phụ thuộc phiên bản Blender.

## 6. Kết quả đầu ra

- Một file `.blend` có mô hình phần đầu robot hoàn chỉnh về mặt hình học.
- Ba góc nhìn Front/Side/Top để kiểm tra hình dáng.
- Các hốc, panel, mắt, ống, ốc và antenna đủ rõ để tiếp tục sang giai đoạn modeling cổ.
- Mesh, modifier và normals được kiểm tra trước khi bàn giao.
