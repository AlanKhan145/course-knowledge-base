# Bài 02 — Tạo khối đầu bằng Grab và đối xứng

**Mốc video:** 00:40–03:09 · **Thời lượng học gợi ý:** 35–45 phút

## Mục tiêu

Từ một khối tròn, tạo được đầu nhân vật cách điệu có trán, má và cằm; biết sử dụng Grab, bán kính brush, đối xứng trục X và Subdivision Surface.

## Quy trình

1. Trong Object Mode, tạo hoặc chọn **UV Sphere** (hoặc mesh khối tròn bạn đang có). Sắp xếp tâm tại khu vực gốc đối xứng của đầu.
2. Nếu mesh còn ít polygon, thêm **Subdivision Surface Modifier** với mức vừa phải rồi **Apply** khi cần điêu khắc trực tiếp lưới dày hơn. Việc tăng mức chia quá cao có thể làm chậm Blender.
3. Chuyển sang **Sculpt Mode**, chọn **Grab Brush**. Dùng điều chỉnh `Radius` trên thanh công cụ hoặc phím `F` nếu keymap của bạn hỗ trợ.
4. Bật **Symmetry > X**. Khi kéo bên trái, kiểm tra biến dạng bên phải tương ứng. Đối xứng dựa trên **hệ trục cục bộ** của vật thể, không đơn thuần là mặt phẳng giữa màn hình.
5. Ở góc trước (`Numpad 1`): kéo vùng dưới xuống để hình thành cằm; tạo vùng hai má và trán. Điều chỉnh radius lớn cho các biến dạng tổng thể.
6. Ở góc ngang (`Numpad 3`): kiểm tra trán, gò má, cằm và vùng sau sọ. Thường đầu nhân vật hoạt hình có cranium lớn hơn tỷ lệ hiện thực, nhưng hình khối vẫn phải hợp lý.
7. Xoay qua góc 3/4, sửa những chỗ gãy nhịp và dùng **Smooth** nhẹ tại nơi cần thiết.
8. Chọn chế độ **MatCap** màu đất sét nếu có để quan sát chuyển tiếp ánh sáng trên hình khối. Đây chỉ là chế độ hiển thị.

## Nguyên tắc tỷ lệ

```text
          ĐỈNH SỌ
       .------------.
      /              \
     |    TRÁN        |
     |   MẮT / MÁ     |
      \     MŨI     /
       \    CẰM    /
        '----------'
       (silhouette mặt trước)
```

Đối với phong cách cách điệu, không có tỷ lệ duy nhất. Hãy giữ sự thống nhất: hai má đối xứng, cằm nằm trên trục giữa, độ dày trước–sau tương xứng với khuôn mặt.

## Phân biệt công cụ

- **Grab trong Sculpt Mode:** kéo vùng bề mặt theo tác động cọ.
- **`G` trong Object/Edit Mode:** dịch chuyển vật thể hoặc thành phần lưới; **không nên đồng nhất** hai thao tác.
- **Subdivision Surface:** làm mượt và tăng độ chia lưới theo thuật toán; không tương đương với Voxel Remesh.

## Sai lầm thường gặp

- Chỉ nhìn chính diện → đầu quá phẳng ở góc nghiêng.
- Radius quá nhỏ → bề mặt nhăn khi chỉnh khối lớn.
- Đối xứng sai do origin/hướng trục vật thể → cần kiểm tra transform trước.

## Tự kiểm tra

- [ ] Nhìn chính diện thấy cân xứng và có cằm rõ.
- [ ] Nhìn ngang có độ sâu và vùng sau sọ.
- [ ] Hình khối vẫn mượt ở góc 3/4.

**Bài tập:** tạo ba biến thể đầu: tròn dễ thương, mặt dài và đầu vuông mềm. Chỉ dùng Grab/Smooth, chưa vẽ mắt mũi.
