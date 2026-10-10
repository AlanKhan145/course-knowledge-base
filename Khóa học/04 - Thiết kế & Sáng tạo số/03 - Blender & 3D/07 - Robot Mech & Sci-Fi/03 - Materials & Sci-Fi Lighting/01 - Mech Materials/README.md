# Khóa học Blender — Hoàn thiện vật liệu cho robot Mech khoa học viễn tưởng

## Giới thiệu

Khóa học thực hành này hướng dẫn hoàn thiện lớp vật liệu cho một **robot Mech đã được dựng hình và thiết lập ánh sáng** trong Blender. Trọng tâm là cách phân vùng chất liệu trên cùng một mesh, dùng lại các material đã tạo, phối kim loại sáng–tối, tạo kim loại xanh, vật liệu bình chứa và ống mềm, rồi bổ sung một chi tiết ống cơ khí.

Người học sẽ thao tác trực tiếp với **Material Properties, Edit Mode, Shading Workspace, Material Slots, Principled BSDF** và các công cụ chọn hình học. Nội dung phù hợp với robot có các mảnh ghép, bulông, khớp chân, giáp, bình chứa và đường ống; có thể áp dụng tương tự lên một robot khác.

## Yêu cầu trước khi học

- Có Blender và biết xoay góc nhìn, chọn object, chuyển giữa `Object Mode` và `Edit Mode`.
- Có model robot Mech với các bộ phận đã dựng hình. Một số bộ phận có thể gồm nhiều đảo hình học trong cùng một object.
- Đã có các material cơ bản `Light Metal`, `Dark Metal` và `Red Light` (hoặc tên tương đương). Nếu không có, người học cần chuẩn bị material tương ứng trước khi thực hiện những bước chọn lại material.
- Có ánh sáng trong scene để quan sát khác biệt giữa màu nền, kim loại và độ nhám.

**Phạm vi:** Khóa học hoàn thiện vật liệu; không bao gồm việc dựng toàn bộ model, thiết lập rig hoặc làm animation. Các bước rigging và animation là những công việc tiếp theo, không phải sản phẩm của khóa học này.

## Mục tiêu đầu ra

Sau khi hoàn thành, người học có thể **chọn chính xác mặt/đảo mesh**, **gán vật liệu theo vùng**, **tạo bản sao material mà không làm đổi vật liệu gốc**, **điều chỉnh màu và tính chất bề mặt**, **kiểm tra các chi tiết dễ bỏ sót** và **lưu scene có hệ vật liệu nhất quán**.

## Lộ trình bài học

| Bài | Chủ đề | Sản phẩm sau bài |
| --- | --- | --- |
| [01](bai-hoc/01-thiet-lap-va-vat-lieu-co-den.md) | Gán vật liệu cho cổ và cụm đèn | Cổ phân vùng kim loại; đèn trước màu đỏ |
| [02](bai-hoc/02-chan-va-kim-loai-xanh.md) | Hoàn thiện chân, tạo `Blue Metal` | Chân có chi tiết tối; khớp xanh |
| [03](bai-hoc/03-khop-mat-ca-va-bulong.md) | Vật liệu khớp mắt cá và bulông | Các khớp đối xứng rõ lớp vật liệu |
| [04](bai-hoc/04-giap-hong-va-dui.md) | Giáp, hông, đùi và chi tiết nối | Mảng giáp–khung máy phân biệt rõ |
| [05](bai-hoc/05-than-balo-va-binh-chua.md) | Thân máy, balô và bình chứa | `Tank` tối bóng và đai giữ sáng |
| [06](bai-hoc/06-vat-lieu-ong-nhua.md) | Vật liệu đường ống xanh | `Tubes` có độ bóng và tán xạ nhẹ |
| [07](bai-hoc/07-bo-sung-ong-co-khi.md) | Nhân bản và lắp ống cơ khí | Một chi tiết ống được gắn vào thân |
| [08](bai-hoc/08-lab-hoan-thien-mech.md) | Lab tổng hợp và kiểm tra | Robot với vật liệu hoàn thiện, scene đã lưu |

## Bảng công cụ tra nhanh

| Tác vụ | Cách thao tác |
| --- | --- |
| Chuyển `Object Mode` / `Edit Mode` | `Tab` |
| Ẩn object đang chọn | `H` |
| Hiện object đã ẩn | `Alt + H` trong đúng mode |
| Lưu file | `Ctrl + S` |
| Chọn đảo hình học liên kết | Trỏ chuột vào phần tử rồi nhấn `L` trong `Edit Mode` |
| Đảo ngược lựa chọn | `Ctrl + I` trong `Edit Mode` |
| Chọn tất cả / bỏ chọn tất cả | `A` / `Alt + A` |
| Chọn theo vùng | `B` (Box Select) |
| Chuyển chế độ hiển thị | `Z` mở pie menu, chọn `Wireframe`, `Solid` hoặc `Rendered` |
| Duplicate mesh | `Shift + D` |
| Tách phần được chọn | `P` → `Selection` |
| Join object | `Ctrl + J` trong `Object Mode` |
| Di chuyển / Extrude | `G` / `E` |
| Tạo node | `Shift + A` trong Shader Editor |

> **Lưu ý về phím tắt:** `A` là chọn tất cả; để bỏ chọn, dùng `Alt + A` (hoặc lệnh Deselect All). Một số phím thay đổi ý nghĩa theo mode, vùng editor và keymap.

## Quy ước material

| Material | Mục đích |
| --- | --- |
| `Light Metal` | Vỏ và dây đai/cạnh cần làm nổi bật |
| `Dark Metal` | Bu lông, khe lõm, kết cấu cơ khí, phần khung |
| `Red Light` | Cụm đèn phát sáng đã được chuẩn bị |
| `Blue Metal` | Bề mặt khớp nối có màu xanh; mã màu tham chiếu `#0070FF` |
| `Tank` | Bình chứa màu rất tối; màu tham chiếu `#303030` |
| `Tubes` | Ống xanh đậm, có độ bóng và tán xạ dưới bề mặt nhẹ |

Tên các material mang tính quy ước để quản lý. Các mã màu trong bảng là thông số thực hành cho những bước có nêu cụ thể; kết quả hiển thị còn phụ thuộc không gian màu, shader và ánh sáng.

## Cách học

Học lần lượt từ Bài 01 đến Bài 07, hoàn thành nhiệm vụ ở cuối từng bài rồi tự trả lời năm câu hỏi trắc nghiệm trước khi đối chiếu đáp án. Bài 08 là bài lab tổng hợp để luyện quy trình và kiểm tra tính nhất quán. Mỗi file Markdown có thể đọc độc lập; không cần mở video cùng lúc.
