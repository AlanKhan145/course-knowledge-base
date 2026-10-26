---
title: "Bài 06 — MongoDB Atlas, kết nối và thiết kế Schema"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 6
lesson_type: "lesson"
language: "vi"
---

# Bài 06 — MongoDB Atlas, kết nối và thiết kế Schema

## 1. Tóm tắt

Tạo cơ sở dữ liệu MongoDB Atlas, lưu chuỗi kết nối trong `.env`, kết nối bằng Mongoose và định nghĩa hai model `Category`, `Recipe`.

## 2. Mục tiêu học tập

- Thiết lập được kết nối MongoDB bằng biến môi trường.
- Định nghĩa schema có kiểu dữ liệu, mảng và điều kiện required.
- Giải thích được quan hệ giữa danh mục và công thức theo cách lưu trong dự án.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Kết nối Atlas

Trong MongoDB Atlas, tạo cluster phù hợp, tạo database user, cấu hình danh sách IP được phép kết nối và lấy connection string. Chỉ cấp quyền và IP cần thiết; không dùng mật khẩu demo trong dự án thật.

`.env` (giá trị minh họa, không phải credential):

```dotenv
DB_URI=mongodb+srv://USER:PASSWORD@HOST/cooking_blog
PORT=3000
SESSION_SECRET=replace-with-random-secret
```

`app.js` cần gọi `require('dotenv').config()` trước khi đọc biến môi trường. Tách kết nối:

```js
// server/config/database.js
const mongoose = require('mongoose');
async function connectDB() {
  if (!process.env.DB_URI) throw new Error('Thiếu DB_URI');
  await mongoose.connect(process.env.DB_URI);
  console.log('MongoDB connected');
}
module.exports = connectDB;
```

Từ entrypoint, chỉ bắt đầu lắng nghe HTTP sau khi DB kết nối thành công; với Mongoose hiện đại không cần chép các tùy chọn kết nối đã lỗi thời từ ví dụ cũ.

### 4.2. Model danh mục

```js
// server/models/Category.js
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String }
});
module.exports = mongoose.model('Category', categorySchema);
```

Từ model `Category`, Mongoose quản lý collection liên quan theo quy tắc đặt tên của nó. Tên danh mục là nội dung để hiển thị; `_id` là định danh dùng khi cần mở một nhóm món.

### 4.3. Model công thức

```js
// server/models/Recipe.js
const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  email: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  category: {
    type: String,
    required: true,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian']
  },
  image: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Recipe', recipeSchema);
```

Trường `ingredients` là mảng các chuỗi như `['Mì', 'Trứng', 'Hành']`; không ghép tất cả nguyên liệu thành một chuỗi duy nhất. `enum` giới hạn giá trị category theo danh sách đã khai báo. Đây là **một cách thiết kế đơn giản**: `Recipe.category` chứa nhãn, còn `Category` phục vụ danh sách và ảnh; hai collection không được liên kết bằng ObjectId. Nếu đổi tên category, cần đồng bộ dữ liệu một cách chủ động.

### 4.4. Bảo vệ dữ liệu

Validation của Mongoose kiểm tra định dạng theo schema ở phía ứng dụng, không thay thế kiểm tra nghiệp vụ. Phải kiểm tra dữ liệu biểu mẫu, giới hạn độ dài chuỗi và xác thực kiểu tệp tải lên. Không nối trực tiếp `req.body` không kiểm soát vào câu lệnh có quyền cập nhật/xóa.

## 5. Thực hành

1. Tạo `.env` và kết nối bằng Mongoose (không commit mật khẩu).
2. Tạo hai model Category và Recipe.
3. Thử một Recipe với ba nguyên liệu; kiểm tra MongoDB Atlas Data Explorer.
4. Cố ý tạo Recipe thiếu `name`, quan sát lỗi validation.

**Checkpoint:** ứng dụng khởi động khi DB kết nối và báo lỗi rõ ràng khi chuỗi kết nối sai.

## 6. Câu hỏi ôn tập

**Câu 1. Tại sao `DB_URI` nên nằm trong `.env`?**

A. Để EJS tự đọc  
B. Để dễ tránh công khai credential  
C. Để Bootstrap hoạt động  
D. Để dùng như ảnh  

**Đáp án:** B. **Giải thích:** Kết nối thường chứa thông tin xác thực.

**Câu 2. Trường ingredients cần lưu nhiều phần tử, kiểu schema thích hợp là gì?**

A. Boolean  
B. Number  
C. Date  
D. Array of String  

**Đáp án:** D. **Giải thích:** Mảng chuỗi biểu diễn nhiều nguyên liệu độc lập.

**Câu 3. `enum` trên category hỗ trợ gì?**

A. Giới hạn giá trị category được chấp nhận  
B. Tự render ảnh  
C. Tự tìm kiếm full-text  
D. Tự tạo tài khoản  

**Đáp án:** A. **Giải thích:** Enum kiểm tra giá trị thuộc tập cho phép.

**Câu 4. Sau khi lấy URI, thao tác nào cũng quan trọng trên Atlas?**

A. Thiết lập phông Rubik  
B. Đặt EJS body  
C. Cấp user database và cấu hình network access  
D. Cài Bootstrap Icons  

**Đáp án:** C. **Giải thích:** Atlas xác thực user và nguồn kết nối.

**Câu 5. Điểm hạn chế khi Recipe lưu `category` bằng chuỗi là gì?**

A. Không thể có hơn một Recipe  
B. Đổi tên nhóm cần xử lý đồng bộ nhiều bản ghi  
C. Không thể lưu ảnh  
D. Không thể tìm theo category  

**Đáp án:** B. **Giải thích:** Tên nhóm không được tham chiếu tự động bằng ObjectId.

## 7. Tổng kết

Model giúp mã ứng dụng thao tác với collection qua phương thức Mongoose. Với dữ liệu công thức, hai nhóm thực thể cơ bản là danh mục và món ăn; thiết kế này đủ để dạy truy vấn và render giao diện.
