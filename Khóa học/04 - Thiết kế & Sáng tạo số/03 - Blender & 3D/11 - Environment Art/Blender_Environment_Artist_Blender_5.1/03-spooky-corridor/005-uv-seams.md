# Bài 05. UV Seams

> **Module 03:** Spooky Corridor — UV mapping và dựng hành lang kinh dị  
> **Tên trên Udemy:** UV Seams  
> **Thời lượng công khai:** 8:45  
> **Nguồn:** [Blender Environment Artist — Udemy](https://www.udemy.com/course/blenderenvironment/)  
> **Tính chất:** Ghi chú học tập tự biên soạn theo đề cương công khai; **không phải bản chép lời/bản dịch video trả phí**.

## 1. Mục tiêu bài học

Chọn seam hợp lý để unwrap ít biến dạng. Sau bài, bạn cần tự thực hiện được thao tác liên quan và diễn giải **vì sao** lựa chọn kỹ thuật đó trong một dự án Environment Art.

## 2. Kiến thức nền & nguyên lý

- **Bối cảnh:** UV mapping và dựng hành lang kinh dị. Kết quả của bài đóng góp cho quy trình dựng môi trường 3D hoàn chỉnh, có thể tổ chức thành các asset tái sử dụng.
- **Nguyên lý kỹ thuật:** UV mapping biến mặt 3D thành tọa độ 2D (U,V). Một bản UV tốt cần ít méo hình, tỷ lệ texel nhất quán và khoảng đệm khi bake.
- **Quy trình làm việc:** chia thành ba lớp: (1) hình học/bố cục; (2) dữ liệu vật liệu/UV/asset; (3) đánh giá dưới camera và ánh sáng thực tế. Không đánh giá chỉ bằng chế độ Solid khi sản phẩm cần render.

## 3. Thực hành có hướng dẫn

1. **Chuẩn bị:** Mở Blender 5.1, lưu một file `.blend` mới hoặc duplicate file cuối của bài trước. Kiểm tra Collection và phiên bản để không ghi đè asset gốc.
2. **Bước 1:** Đánh dấu seam ở góc khuất hoặc góc sắc. Làm chậm, quan sát từng lần thay đổi hình dáng hoặc thuộc tính trong Properties/Viewport.
3. **Bước 2:** Unwrap và quan sát UV islands. Đối chiếu kết quả với mục tiêu thị giác và các ràng buộc kỹ thuật; khi lỗi, quay về thao tác vừa thay đổi.
4. **Bước 3:** Sửa stretching bằng cách tách/ghép seam và scale đảo UV. Chụp kết quả từ ít nhất hai góc nhìn và lưu bản kiểm chứng trước khi sang bài sau.
5. **Kiểm thử:** Dùng một camera hoặc góc nhìn cố định để so sánh trước/sau. Nếu bài tập liên quan vật liệu, xem thêm Material Preview/Rendered; nếu liên quan mesh, kiểm tra Edit Mode, normals và số polygons.
6. **Lưu kết quả:** Lưu `.blend`, texture rời nếu có, và ảnh chụp vào thư mục con `outputs/` của module.

## 4. Lỗi thường gặp và cách kiểm tra

- **Không thấy thay đổi:** kiểm tra mode hiện hành, đối tượng active, modifier đang bật và vùng giao diện đúng.
- **Kết quả sai tỷ lệ hoặc méo:** kiểm tra transform (Scale/Rotation), origin, thứ tự modifier, UV và texture coordinates. Chỉ Apply Transform khi phù hợp pipeline.
- **Hiển thị/render khác nhau:** kiểm tra render engine, World, đèn, color management, image Color Space và material output.
- **Mất texture/tài nguyên:** đảm bảo file được lưu, ảnh đã `Save` hoặc `Pack Resources`, và đường dẫn không bị di chuyển.

## 5. Bài tập tự luyện

- Làm lại quy trình trên **một biến thể riêng**, không sao chép nguyên trạng: đổi tỷ lệ, bố cục, hình học hoặc vật liệu theo mục đích của bài.
- Đặt hai kết quả cạnh nhau: *bản theo hướng dẫn* và *bản biến thể*. Ghi nhận ưu nhược điểm về thời gian, kiểm soát, ngoại hình và khả năng tái sử dụng.
- Nếu hoàn thành sớm, đưa sản phẩm vào một scene test gồm camera, ánh sáng và nền trung tính; lưu một ảnh PNG.

## 6. Checklist hoàn thành

- [ ] Texture không bị stretched rõ, sai Color Space hoặc lỗi đường seam.
- [ ] Tệp `.blend` được lưu vào đúng thư mục project và có tên phiên bản.
- [ ] Có ảnh chụp trước/sau hoặc ảnh render kiểm chứng thay đổi.
- [ ] Ghi lại một lỗi đã gặp và cách sửa trong phần nhật ký học tập.

## 7. Nhật ký tự học

- **Ngày học:** …
- **Điểm học được (3 ý):** …
- **Thao tác/phím tắt đã dùng:** …
- **Vướng mắc & cách khắc phục:** …
- **File `.blend` / ảnh kết quả:** …

---

**Đối chiếu Udemy:** Tên bài, module và thời lượng được đối chiếu với mục lục Udemy. Các giải thích, checklist và bài luyện là tài liệu hướng dẫn bổ sung do người biên soạn xây dựng; không xác nhận đây là toàn bộ nội dung giảng viên truyền đạt.
