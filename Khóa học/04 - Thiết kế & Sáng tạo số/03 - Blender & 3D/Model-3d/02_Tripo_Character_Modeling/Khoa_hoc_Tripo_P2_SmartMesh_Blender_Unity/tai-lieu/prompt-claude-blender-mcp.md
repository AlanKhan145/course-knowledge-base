# Prompt mẫu cho Claude + Blender MCP

> **Lưu ý:** Đây là các mẫu lệnh **biên soạn bổ sung** dựa theo dạng yêu cầu trong video; không có đảm bảo agent thực hiện chính xác trên mọi phiên bản Blender/MCP. Nên lưu bản sao `.blend` trước khi chạy và duyệt thay đổi.

## 1. Import nhiều mô hình

```text
Trong Blender hiện tại, import các file model đã chọn từ thư mục tripo_exports.
Giữ từng ứng viên ở collection riêng, đổi tên object rõ ràng theo Head, Body, Hair,
Eyelash và Eyebrow. Không xóa asset nguồn. Báo cáo các object được tạo, vật liệu,
đường dẫn texture và lỗi import nếu có.
```

## 2. Bố trí ảnh tham chiếu

```text
Nhập bộ ảnh trước / bên / sau làm image references cho nhân vật.
Căn cùng chiều cao mặt đất và trục giữa. Đặt mỗi reference ở đúng hướng,
hiển thị sao cho có thể đối chiếu khi chỉnh mesh, không làm thay đổi model.
```

## 3. UV tóc

```text
Kiểm tra mesh tóc đang chọn và tạo UV hợp lý. Phân biệt mặt ngoài và mặt trong
các lọn tóc, ưu tiên diện tích UV cho mặt ngoài. Tránh overlap ngoài chủ đích.
Giữ lại object và material hiện có; báo cáo seam hoặc đảo UV còn lỗi.
```

## 4. Shape Key mắt còn lại

```text
Mesh đầu hiện có Basis và Eye_Close_L. Tạo Eye_Close_R có biến dạng tương ứng
bên phải, chỉ sửa phần liên quan đến mắt phải. Không thay đổi Basis.
Kiểm tra lần lượt giá trị 0 và 1 cho cả hai key; báo cáo vùng bị kéo sai.
```

## 5. Tóc không đi theo đầu

```text
Khi xoay head bone, một phần tóc không theo chuyển động. Hãy kiểm tra armature
modifier, parent, vertex group và skin weights của Hair_Final, xác định nguyên nhân
rồi chỉ sửa các liên kết cần thiết. Không làm đổi hình dáng đầu, tóc, UV hoặc texture.
Test bằng một pose xoay đầu và đưa lại pose mặc định sau khi kiểm tra.
```

## 6. Chuẩn bị export

```text
Kiểm tra transforms, origin, object names, normals, UV, material và armature
của nhân vật. Đề xuất các modifier cần apply nhưng KHÔNG apply hàng loạt
trước khi tôi duyệt. Tạo báo cáo những thứ có thể làm hỏng Shape Keys/skin.
```
