# Thuật ngữ và các lệnh thường dùng

## 1. Lệnh npm

| Lệnh | Mục đích |
| --- | --- |
| `npm init -y` | Tạo package.json mặc định |
| `npm install <package>` | Thêm dependency |
| `npm install --save-dev nodemon` | Nodemon khi phát triển |
| `npm run dev` | Chạy script dev |
| `npm start` | Chạy script start |

## 2. Khái niệm Express

| Thuật ngữ | Vai trò |
| --- | --- |
| Router | Ánh xạ URL và phương thức HTTP |
| Controller | Xử lý yêu cầu, gọi model, chọn view |
| Middleware | Xử lý request/response trong pipeline |
| `req.params` | Giá trị tham số đường dẫn |
| `req.query` | Query string |
| `req.body` | Dữ liệu body đã parse |
| `req.files` | File từ multipart khi có middleware xử lý |
| `res.render()` | Render template thành HTML |
| `res.redirect()` | Điều hướng trình duyệt |

## 3. Mongoose/MongoDB

| API | Ý nghĩa |
| --- | --- |
| `mongoose.connect(uri)` | Kết nối MongoDB |
| `new mongoose.Schema({...})` | Định nghĩa cấu trúc tài liệu |
| `mongoose.model('Recipe', schema)` | Tạo model |
| `find(filter)` | Truy vấn nhiều bản ghi |
| `findById(id)` | Truy vấn theo ObjectId |
| `findOne(filter)` | Truy vấn một bản ghi |
| `sort({ createdAt: -1 })` | Mới nhất trước khi có createdAt |
| `limit(n)` | Giới hạn số lượng |
| `aggregate([{ $sample: { size: 1 } }])` | Lấy ngẫu nhiên |
| `create(data)` | Thêm tài liệu |
| `updateOne(filter, update)` | Sửa tối đa một bản ghi |
| `deleteOne(filter)` | Xóa tối đa một bản ghi |

## 4. EJS

- `<%= value %>`: render có escape HTML.
- `<%- body %>`: chèn HTML của trang con đã render vào layout.
- `<% if (...) { %> ... <% } %>`: điều kiện.
- `<% items.forEach(item => { %> ... <% }) %>`: vòng lặp.

## 5. Định nghĩa dữ liệu mẫu

```json
{
  "name": "Mì rau củ",
  "description": "Món mì xào với rau củ",
  "email": "demo@example.com",
  "ingredients": ["Mì", "Cà rốt", "Trứng"],
  "category": "Chinese",
  "image": "noodle.jpg"
}
```

Giá trị trên là dữ liệu minh họa tự xây dựng cho bài tập, không phải công thức dinh dưỡng chuẩn.
