---
title: "Bài 02 — Khởi tạo dự án Node.js và cài dependencies"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 2
lesson_type: "lesson"
language: "vi"
---

# Bài 02 — Khởi tạo dự án Node.js và cài dependencies

## 1. Tóm tắt

Tạo dự án `cooking-blog` bằng npm, thiết lập script chạy phát triển và nhận diện vai trò những thư viện chính: Express, EJS, Mongoose, dotenv, session, flash, cookie-parser và express-fileupload.

## 2. Mục tiêu học tập

- Khởi tạo được `package.json` và phân biệt dependency với devDependency.
- Cài đặt được thư viện theo đúng mục đích.
- Chạy được server phát triển bằng Nodemon.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Khởi tạo

Mở terminal tại thư mục làm việc:

```bash
mkdir cooking-blog
cd cooking-blog
npm init -y
```

`npm init -y` tạo cấu hình mặc định. Mở thư mục trong VS Code bằng `code .` nếu lệnh này đã được cài đặt vào PATH.

### 4.2. Cài thư viện

```bash
npm install express ejs express-ejs-layouts mongoose dotenv express-session connect-flash cookie-parser express-fileupload
npm install --save-dev nodemon
```

| Gói | Vai trò |
| --- | --- |
| `express` | Web server, middleware, routes |
| `ejs` và `express-ejs-layouts` | Template và layout dùng lại |
| `mongoose` | Schema, model và truy vấn MongoDB |
| `dotenv` | Đọc cấu hình từ `.env` |
| `express-session`, `connect-flash` | Lưu flash message qua lần chuyển hướng |
| `cookie-parser` | Phân tích cookie khi ứng dụng cần |
| `express-fileupload` | Nhận tệp tải lên qua biểu mẫu |
| `nodemon` | Khởi động lại server khi mã nguồn thay đổi |

Chỉ khai báo middleware thực sự sử dụng; cài package chưa đủ để kích hoạt chức năng.

### 4.3. Chạy ứng dụng

Trong `package.json`, đặt script phát triển:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

Các script này là một phần trong file `package.json` đầy đủ; không xóa các trường khác khi chỉnh sửa. Tạo `app.js`:

```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Cooking Blog is running'));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
```

Chạy `npm run dev`, rồi truy cập `http://localhost:3000`.

### 4.4. Cấu hình môi trường và Git

Tạo `.env` để chứa `DB_URI`, `SESSION_SECRET`, `PORT` trong các bài sau; tạo `.gitignore`:

```gitignore
node_modules/
.env
public/uploads/
```

Không lưu mật khẩu MongoDB hay session secret trong repository. Giá trị thật trong `.env` thuộc riêng môi trường người học; lưu một file `.env.example` chỉ gồm các tên biến và giá trị giả nếu cần hướng dẫn cấu hình.

## 5. Thực hành

1. Khởi tạo repo và cài tất cả dependencies.
2. Tạo `app.js` với route GET `/`.
3. Kiểm tra sửa thông báo từ server; Nodemon phải tự khởi động lại.
4. Xác nhận `.env` và `node_modules` không bị đưa lên Git.

**Checkpoint:** terminal có thông báo server lắng nghe cổng 3000 và trang `/` trả văn bản hợp lệ.

## 6. Câu hỏi ôn tập

**Câu 1. Lệnh nào tạo package.json với thiết lập mặc định?**

A. `npm start`  
B. `node init`  
C. `npm init -y`  
D. `npm run dev`  

**Đáp án:** C. **Giải thích:** `npm init -y` bỏ qua các câu hỏi tương tác.

**Câu 2. Vì sao `nodemon` thuộc devDependency?**

A. Chỉ phục vụ quy trình phát triển  
B. Bắt buộc cho MongoDB  
C. Dùng để render EJS  
D. Dùng để lưu session  

**Đáp án:** A. **Giải thích:** Ứng dụng production không cần Nodemon để tự chạy lại khi đổi mã.

**Câu 3. Thư viện nào giúp tạo server HTTP và định tuyến?**

A. Mongoose  
B. EJS  
C. connect-flash  
D. Express  

**Đáp án:** D. **Giải thích:** Express cung cấp app, router và middleware.

**Câu 4. Một chuỗi kết nối có mật khẩu nên được lưu ở đâu?**

A. `public/js`  
B. `.env` được bỏ qua bởi Git  
C. `views/layouts`  
D. `package.json`  

**Đáp án:** B. **Giải thích:** Cấu hình bí mật không được phục vụ công khai hoặc commit.

**Câu 5. Khi script là `"dev": "nodemon app.js"`, lệnh chạy là gì?**

A. `npm install dev`  
B. `node dev`  
C. `npm run dev`  
D. `npm dev start`  

**Đáp án:** C. **Giải thích:** `npm run` thực thi script tùy chỉnh trong package.json.

## 7. Tổng kết

Dự án npm đã sẵn sàng để bổ sung router, template và kết nối dữ liệu. Tách biến môi trường ngay từ đầu giúp tránh lộ thông tin bí mật khi phát triển.
