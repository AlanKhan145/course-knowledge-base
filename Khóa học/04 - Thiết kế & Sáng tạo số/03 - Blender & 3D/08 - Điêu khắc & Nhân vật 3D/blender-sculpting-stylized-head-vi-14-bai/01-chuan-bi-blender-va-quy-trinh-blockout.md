# Bài 01 — Chuẩn bị Blender và cách học sculpt

> **Khóa học Blender Sculpting — đầu nhân vật stylized | Tài liệu tiếng Việt**  
> **Nguồn chính:** transcript dài khoảng 1 giờ 34 phút do người học cung cấp. **Mốc trong mỗi bài là thời gian video**, không phải thời lượng thực hành.  
> **Mức độ:** bắt đầu → trung cấp; ưu tiên dựng hình khối đầu và học kỹ thuật Sculpt Mode.

> **Quy ước biên tập:** Nội dung *Theo bài gốc* bám sát trình tự và ý tưởng người dạy; các mục ghi **bổ sung** là hướng dẫn sư phạm/kiến thức phần mềm, không phải lời nói nguyên văn. Transcript có lỗi dịch máy: "không khí" = *ear (tai)*, "máy xay sinh tố" = *Blender*, "xe" có thể là *ears*, "sấy" là *sculpt* trong ngữ cảnh. Các vị trí không rõ đã được diễn đạt thận trọng. **Phím tắt và menu khác nhau giữa các phiên bản.**

**Đối chiếu bản ghi:** 00:00–01:24.

## Mục tiêu học tập
- Thiết lập một dự án điêu khắc đầu 3D dễ kiểm soát và có bản lưu dự phòng.
- Phân biệt thao tác tạo khối lớn (blockout) và tạo chi tiết (refinement).
- Nhận biết Sculpt Mode, Edit Mode, Object Mode, Modifier và Viewport Overlays.

## Kiến thức cốt lõi
Bản ghi mở đầu bằng lời giới thiệu: **đầu tiên tạo hình đầu đơn giản**, những phần sau mới tinh chỉnh mắt, mũi, miệng và tai. Đây là tư duy tạo khối lớn trước, bề mặt nhỏ sau. Một khối đầu đúng tỷ lệ thường thuyết phục hơn một đôi mắt được khắc rất đẹp đặt trên khung đầu sai.

**Object Mode** quản lý vật thể; **Edit Mode** chỉnh hình học của lưới; **Sculpt Mode** tạo biến dạng hình khối bằng cọ. **Subdivision Surface** tăng mức làm mịn hình học khi cần, nhưng không thay thế việc có mật độ lưới phù hợp để sculpt. Trong bản ghi, người dạy nhắc tạo một lớp chỉnh sửa dự phòng rồi áp dụng khi cần; thao tác modifier phụ thuộc lưới và phiên bản thực tế.

## Thực hành theo từng bước
1. Tạo file mới; xóa đối tượng không sử dụng và lưu thành `head_sculpt_00.blend`.
2. Dùng **UV Sphere** hoặc khối đầu có sẵn làm mesh khởi đầu. Nếu khởi đầu bằng Cube, thêm Subdivision Surface trước khi tạo khối. Không bắt buộc dùng cùng mesh với giảng viên.
3. Kiểm tra tỷ lệ đối tượng và thao tác trong đúng chế độ. Đối tượng có scale không đồng nhất nên được xử lý có chủ đích trước remesh.
4. Chuyển sang workspace **Sculpting**; đặt cọ **Grab**, kích thước đủ lớn để tác động toàn bộ trán/hàm.
5. Bật **Viewport Overlays → Statistics** để quan sát mật độ hình học; bật **Annotation** nếu muốn vẽ trực tiếp ghi chú.
6. Tạo bản sao dự phòng của mesh hoặc dùng Save As theo từng giai đoạn. Kiểm tra các góc Front / Side / Top trước khi khắc.

## Phân biệt rõ ba giai đoạn
```mermaid
flowchart LR
    A[Khối sơ cấp: sọ, hàm, cổ] --> B[Đặc điểm chính: mắt, mũi, môi, tai]
    B --> C[Tinh chỉnh: bờ mí, khóe miệng, nếp tai]
    C --> D[Ánh sáng và trình bày]
```

## Lỗi thường gặp
- Bắt đầu khắc lỗ mũi, mí mắt ngay khi hộp sọ vẫn quá hẹp.
- Làm chi tiết bằng mesh quá thưa hoặc thêm hàng triệu đỉnh quá sớm.
- Nhầm một phím trong video với phím mặc định ở phiên bản Blender khác.

## Bài tập
Tạo ba bản chụp Front, Side, 3/4 của **cùng một mesh đầu trơn**; chưa tạo mắt/mũi. Trình bày 2 điểm sẽ chỉnh bằng Grab.

## Tiêu chí hoàn thành
- [ ] Có file .blend đầu tiên và bản dự phòng.
- [ ] Biết phân biệt Sculpt/Edit/Object Mode.
- [ ] Có ảnh ba góc nhìn, bật được Statistics.

---
## Tự đánh giá nhanh
1. Phần nào trong bài là khối lớn cần ưu tiên hơn nếp/rãnh nhỏ?
2. Ảnh góc 3/4 cho thấy vấn đề gì mà ảnh Front không thể hiện đủ?
3. Bạn sẽ lưu file và kiểm tra mật độ mesh vào thời điểm nào?

**Chuyển tiếp:** Hoàn thành checklist và lưu ảnh trước khi mở bài tiếp theo.
