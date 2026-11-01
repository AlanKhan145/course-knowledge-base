---
title: "Bài 06 — Blender: Import, trục tọa độ, reference và AI hỗ trợ"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 6
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "18:17–20:25"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 06 — Blender: Import, trục tọa độ, reference và AI hỗ trợ

> **Phân đoạn tham chiếu:** 18:17–20:25 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Tổ chức scene Blender cho sửa model, đồng thời biết giới hạn của tự động hóa bằng Claude Code và BlenderMCP.

## Các bước
1. Tạo file `.blend` mới, **Import FBX** từng phần; đưa vào collections `RAW`, `REF`, `WORK`, `BACKUP`, `FINAL`.
2. Theo bản ghi, model từ Tripo có thể hướng về **-X**, trong khi scene tác giả muốn hướng **-Y**. Kiểm tra thực tế của file trước khi xoay; ghi rõ độ xoay và không áp đặt mọi phiên bản đều vậy.
3. Nhập các ảnh multiview làm **Reference Images** và căn theo front/side. Ẩn ảnh mặt sau nếu che góc làm việc.
4. Tạm ẩn `Eyebrow`, `Eyelash`, `Nose` và thân để bắt đầu làm sạch riêng phần đầu.
5. Lưu bản scene ban đầu `Lop_00_import.blend`.

## Prompt trợ lý thao tác Blender
```text
Đây là các FBX của nhân vật Lop. Hãy nhập chúng vào scene đang mở.
Giữ từng phần là object riêng, đổi tên theo chức năng và đưa vào
các collection RAW, REF, WORK. Kiểm tra hướng hiện tại của model.
Nếu model hướng -X, tạo bản WORK hướng -Y và ghi lại rotation đã áp dụng.
Nhập ảnh front/side/back làm reference, ẩn back khi cần.
Không xóa dữ liệu gốc; lưu bản sao .blend trước khi sửa.
Báo cáo những thao tác thực sự đã hoàn thành và những thao tác chưa làm.
```

## Lưu ý an toàn dữ liệu
Claude Code + BlenderMCP **không đồng nghĩa với kết quả tự động chính xác**: phải xác nhận máy có add-on, quyền thao tác, đường dẫn, trạng thái modifiers và sao lưu trước khi chạy script. Nếu không dùng AI, các bước import, collections và reference có thể thực hiện bằng Blender UI.

## Tự kiểm tra
- Object nằm đúng collection chưa?
- Có file gốc và file làm việc riêng không?
- Ảnh tham chiếu có tương ứng hướng trục mới không?

---

**Tiếp theo:** Bài 07.
