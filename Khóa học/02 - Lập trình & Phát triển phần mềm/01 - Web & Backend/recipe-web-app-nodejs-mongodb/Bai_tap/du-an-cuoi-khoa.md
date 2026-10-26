# Dự án cuối khóa — Cooking Blog MVP

## 1. Bài toán

Xây dựng ứng dụng website công thức nấu ăn mà người dùng có thể duyệt món, lọc theo danh mục, xem chi tiết, tìm bằng từ khóa và gửi công thức kèm ảnh. Không yêu cầu viết chức năng AI.

## 2. Yêu cầu bắt buộc

- [ ] `GET /`: hero, danh mục và món mới nhất.
- [ ] `GET /categories`: danh mục có tên và hình minh họa.
- [ ] `GET /categories/:id`: món thuộc đúng danh mục, xử lý ID sai và nhóm rỗng.
- [ ] `GET /recipe/:id`: nội dung món và mảng nguyên liệu.
- [ ] `GET /search?q=...`: tên món chứa từ khóa, xử lý chuỗi rỗng/ký tự đặc biệt.
- [ ] `GET /explore-latest`: sắp xếp món mới nhất.
- [ ] `GET /explore-random`: một món bất kỳ hoặc thông báo không có dữ liệu.
- [ ] `GET /submit-recipe`: form có nút thêm nguyên liệu.
- [ ] `POST /submit-recipe`: validation + ghi MongoDB + flash response.
- [ ] Upload ảnh với whitelist định dạng, kiểm tra nội dung file, giới hạn dung lượng, tên lưu ngẫu nhiên.
- [ ] Script CRUD dành cho môi trường học: updateOne và deleteOne theo ID.
- [ ] README hướng dẫn thiết lập `.env` mà không chứa credential thật.

## 3. Milestone

| Mốc | Sản phẩm cần đạt | Tự kiểm tra |
| --- | --- | --- |
| M1 | Express + EJS layout | GET `/` hiện giao diện |
| M2 | MongoDB + model | Seed đọc được dữ liệu |
| M3 | Browse + Detail | Chuyển danh mục và chi tiết đúng món |
| M4 | Search + Discover | Tìm kiếm, latest, random hoạt động |
| M5 | Submit + Upload | Tạo món, hiển thị thông báo, ảnh hợp lệ |
| M6 | CRUD + QA | Cập nhật/xóa đúng bản ghi thử nghiệm |

## 4. Bộ tình huống kiểm thử

1. Danh sách công thức rỗng.
2. Danh mục tồn tại nhưng chưa có món.
3. ID danh mục/recipe không phải ObjectId.
4. Từ khóa rỗng, cực dài, có ký tự regex `.*`.
5. Gửi form thiếu trường required.
6. Form có một nguyên liệu và form có năm nguyên liệu.
7. Upload ảnh hợp lệ, file không phải ảnh có phần mở rộng `.jpg`, và file quá lớn.
8. Gửi form nhiều lần, kiểm tra không lưu dữ liệu trùng ngoài ý muốn.
9. Thay đổi hoặc xóa một món thử nghiệm, xác nhận không làm biến đổi món khác.
10. Kéo giao diện trên mobile và kiểm tra ảnh không bị tràn.

## 5. Tiêu chí chấm (100 điểm)

| Nhóm | Điểm |
| --- | ---: |
| Kiến trúc tách router/controller/model/view | 15 |
| Kết nối MongoDB, model và seed | 15 |
| Danh sách/danh mục/chi tiết | 20 |
| Tìm kiếm/latest/random | 15 |
| Form tạo món, mảng nguyên liệu | 15 |
| Upload/validation/flash, kiểm thử lỗi | 15 |
| README, `.env` an toàn, giao diện responsive | 5 |

**Definition of Done:** các chức năng bắt buộc hoạt động theo bộ test, không để lộ secrets, không seed khi GET trang chủ, không ghi/xóa dữ liệu do refresh, và có giải thích ngắn về giới hạn production.

## 6. Câu hỏi bảo vệ dự án

1. Vì sao `Recipe.category` là chuỗi cần truy vấn hai bước từ Category ID?
2. Khi tìm “mi” mà data là “mì”, vì sao chưa chắc kết quả đúng?
3. Vì sao `aggregate([{ $sample: { size: 1 } }])` vẫn trả array?
4. Làm sao để kiểm tra file upload thực sự là ảnh?
5. Tại sao không dùng HTTP GET cho thao tác xóa món?
