# Bài 00 — Tạo model 3D bằng AI và chuẩn bị cho Blender

> **Chủ đề:** Chốt yêu cầu asset, tạo bản mẫu bằng công cụ AI 3D, xuất GLB và kiểm tra đầu vào
> **Đầu ra:** Một model nguồn được lưu nguyên bản, kèm bản làm việc trong Blender

## 1. Mục tiêu

Sau bài này, người học có thể:

- Mô tả asset theo hình dáng, phong cách, tư thế và mục đích sử dụng.
- Chọn yêu cầu phù hợp với đích đến: model tĩnh, nhân vật có rig hay asset cho game.
- Tạo và tải model AI xuống ở định dạng có thể đưa vào Blender, ưu tiên GLB khi công cụ hỗ trợ.
- Kiểm tra hướng, tỷ lệ, mesh, vật liệu và texture sau khi nhập.
- Lưu riêng model nguồn và bản sao dành cho quy trình chỉnh sửa.

## 2. Chốt yêu cầu trước khi tạo

Viết ngắn gọn các yêu cầu sau trước khi gửi mô tả cho công cụ AI:

| Yêu cầu | Câu hỏi cần trả lời |
| --- | --- |
| Đối tượng | Nhân vật, sinh vật, đạo cụ hay môi trường? |
| Hình dáng | Silhouette, tỷ lệ, số chi, phụ kiện và các chi tiết dễ nhận diện là gì? |
| Phong cách | Tả thực, stylized, low-poly hay một phong cách khác? |
| Tư thế | Model cần đứng trung tính, có thể rig, hay chỉ dùng làm vật thể tĩnh? |
| Đích đến | Dùng trong Blender, game, hoạt ảnh hay trưng bày trên marketplace? |
| Mức hoàn thiện | Cần mesh, màu vật liệu, texture hay cả các phần tách rời? |

Hãy mô tả những đặc điểm quan trọng bằng từ cụ thể. Nếu công cụ hỗ trợ ảnh tham chiếu hoặc nhiều góc nhìn, chuẩn bị ảnh trước và kiểm tra quyền sử dụng chúng.

## 3. Tạo model và lưu bản nguồn

1. Tạo model bằng công cụ AI mà bạn đang sử dụng; giữ lại mô tả đầu vào và các thiết lập ảnh hưởng đến kết quả.
2. Xem model từ nhiều hướng trước khi tải xuống. Kiểm tra silhouette, các phần nối nhau và những chi tiết quan trọng.
3. Xuất ở định dạng được Blender hỗ trợ. Dùng GLB nếu định dạng này có sẵn và giữ được mesh, vật liệu cùng texture cần thiết.
4. Lưu file đã tải xuống vào thư mục nguồn riêng. Không ghi đè lên file xuất đã tạo sau khi chỉnh sửa.
5. Ghi lại tên công cụ và những thành phần do AI tạo để dùng khi bàn giao hoặc viết mô tả sản phẩm.

Kết quả AI là bản khởi đầu để đánh giá. Chưa coi model là game-ready chỉ vì ảnh xem trước trông hoàn chỉnh.

## 4. Nhập và kiểm tra trong Blender

1. Lưu một file Blender mới trước khi chỉnh sửa.
2. Dùng File > Import để nhập GLB hoặc định dạng phù hợp. Nếu vật liệu hay texture không xuất hiện, kiểm tra đường dẫn và tùy chọn xuất ở công cụ nguồn.
3. Quan sát model ở chế độ Solid và Material Preview; xoay quanh vật thể để kiểm tra mặt trước, sau, hai bên và phía dưới.
4. Kiểm tra Location, Rotation, Scale, hướng trục, origin và kích thước tương đối. Chưa áp dụng biến đổi hàng loạt trước khi hiểu tác động của chúng.
5. Vào Edit Mode để kiểm tra các lỗi dễ thấy: lỗ thủng, mặt chồng, phần bị dính, tam giác kéo dài hoặc chi tiết méo.
6. Đổi tên đối tượng và collection rõ ràng, ví dụ AI_SOURCE, WORKING_HIGH và WORKING_LOW.

### Cổng kiểm tra đầu vào

| Kết quả kiểm tra | Hành động |
| --- | --- |
| Silhouette và các phần chính đã đúng | Giữ model làm nguồn cho bài Sculpt |
| Lỗi tập trung ở bề mặt hoặc chi tiết nhỏ | Lưu bản sao làm việc và sửa ở Bài 01 |
| Thiếu bộ phận lớn hoặc sai hình dáng tổng thể | Quay lại công cụ tạo model, sửa mô tả và tạo phiên bản khác |
| Texture bị mất hoặc sai liên kết | Kiểm tra lại file xuất, đường dẫn ảnh và thiết lập nhập |

Lưu bản nguồn nguyên vẹn trước khi Sculpt. Nếu thay đổi hình học làm texture cũ không còn khớp, giữ texture và model ban đầu để đối chiếu; bài UV và Baking sẽ tạo dữ liệu phù hợp cho lưới mới.

## 5. Bàn giao sang các bài tiếp theo

Sắp xếp thư mục dự án theo từng phiên bản để phân biệt nguồn và sản phẩm trung gian. Ví dụ: thư mục source_ai chứa character_source.glb, thư mục blender chứa 00_import_check.blend, còn ảnh gốc được đặt trong textures_source.

Sau khi xác nhận model nguồn đã mở đúng trong Blender, tiếp tục **Bài 01 — Sculpting và sửa lỗi hình học**. Bài 02 sẽ xây dựng Low Poly; các bài sau tạo UV, texture, rig, animation và gói xuất.