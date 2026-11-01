# Bài 09. Texture Atlases

> **Module 06:** Adding Details — Đa dạng chiến lược texturing và tối ưu ảnh  
> **Tên trên Udemy:** Texture Atlases  
> **Thời lượng công khai:** 15:04  
> **Nguồn:** [Blender Environment Artist — Udemy](https://www.udemy.com/course/blenderenvironment/)  
> **Tính chất:** Ghi chú học tập tự biên soạn theo đề cương công khai; **không phải bản chép lời/bản dịch video trả phí**.

## 1. Mục tiêu bài học

Gộp nhiều chi tiết vào một atlas để giảm draw calls. Sau bài, bạn cần tự thực hiện được thao tác liên quan và diễn giải **vì sao** lựa chọn kỹ thuật đó trong một dự án Environment Art.

## 2. Kiến thức nền & nguyên lý

- **Bối cảnh:** Đa dạng chiến lược texturing và tối ưu ảnh. Kết quả của bài đóng góp cho quy trình dựng môi trường 3D hoàn chỉnh, có thể tổ chức thành các asset tái sử dụng.
- **Nguyên lý kỹ thuật:** Atlas gom nhiều chi tiết vào một texture, có thể giảm lần đổi material/draw call tùy engine; cần padding/mipmap tránh bleeding.
- **Nguyên lý kỹ thuật:** Texture là biểu diễn dữ liệu bề mặt; texture màu thường dùng sRGB, map dữ liệu như roughness/normal thường là Non-Color.
- **Quy trình làm việc:** chia thành ba lớp: (1) hình học/bố cục; (2) dữ liệu vật liệu/UV/asset; (3) đánh giá dưới camera và ánh sáng thực tế. Không đánh giá chỉ bằng chế độ Solid khi sản phẩm cần render.

## 3. Thực hành có hướng dẫn

1. **Chuẩn bị:** Mở Blender 5.1, lưu một file `.blend` mới hoặc duplicate file cuối của bài trước. Kiểm tra Collection và phiên bản để không ghi đè asset gốc.
2. **Bước 1:** Chuẩn bị một ảnh chứa nhiều mảng texture. Làm chậm, quan sát từng lần thay đổi hình dáng hoặc thuộc tính trong Properties/Viewport.
3. **Bước 2:** Gán UV của từng mesh vào vùng ảnh tương ứng. Đối chiếu kết quả với mục tiêu thị giác và các ràng buộc kỹ thuật; khi lỗi, quay về thao tác vừa thay đổi.
4. **Bước 3:** Kiểm tra bleeding và padding tại biên đảo UV. Chụp kết quả từ ít nhất hai góc nhìn và lưu bản kiểm chứng trước khi sang bài sau.
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
