# Bài 1 — Whole-body stiffness và câu hỏi cơ học

## Mục tiêu

- Phân biệt độ cứng toàn thân với độ cứng cột sống.
- Hiểu vì sao stiffness ảnh hưởng mode bơi và hiệu suất.
- Chuẩn bị rig segment có tham số cơ học.

## Nội dung cốt lõi

Độ cứng toàn thân ảnh hưởng cách cơ thể uốn, truyền sóng và tương tác với nước. Tuy nhiên, cột sống chỉ là một thành phần của hệ: cơ, mô liên kết, vây và khối lượng cũng góp phần. Vì vậy một animation đúng silhouette chưa đủ để suy ra stiffness.

Trong Blender, tạo armature thân với custom property `spine_stiffness` và một profile theo chiều dài. Driver chỉ nên điều khiển giới hạn uốn hoặc lực phục hồi trong mô hình minh họa; ghi rõ đó không phải đo lực thực nghiệm.

## Bài tập

Tạo hai rig cùng hình thái: một rig mềm và một rig cứng. Giữ frequency và amplitude đầu vào giống nhau, quan sát sự khác nhau của midline.

