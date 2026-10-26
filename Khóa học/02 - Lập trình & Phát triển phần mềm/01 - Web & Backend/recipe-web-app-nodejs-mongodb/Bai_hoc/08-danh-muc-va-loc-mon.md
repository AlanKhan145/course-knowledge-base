---
title: "Bài 08 — Trang danh mục và lọc công thức theo loại"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 8
lesson_type: "lesson"
language: "vi"
---

# Bài 08 — Trang danh mục và lọc công thức theo loại

## 1. Tóm tắt

Tạo trang danh mục tổng hợp và trang riêng cho từng category. Phân biệt `_id` của bản ghi Category với chuỗi `Recipe.category`.

## 2. Mục tiêu học tập

- Xây dựng route danh sách và route chi tiết danh mục.
- Truy vấn danh mục bằng ID rồi lọc Recipe theo tên nhóm.
- Hiển thị breadcrumb và trạng thái không có món.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Hai route quan trọng

```js
router.get('/categories', recipeController.categories);
router.get('/categories/:id', recipeController.categoryById);
```

Tại `/categories`, controller lấy tất cả danh mục để render một lưới ảnh. Khi click, `_id` được truyền vào `/categories/:id`.

### 4.2. Từ Category ID sang các Recipe

```js
const mongoose = require('mongoose');
exports.categoryById = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).send('Không tìm thấy danh mục');
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('Không tìm thấy danh mục');
    const recipes = await Recipe.find({ category: category.name });
    res.render('categories/show', { title: category.name, category, recipes });
  } catch (err) { next(err); }
};
```

Ở thiết kế này, `Category._id` chỉ dùng để định vị nhóm; công thức lại lưu tên nhóm bằng chuỗi. Vì vậy phải truy vấn Category trước, sau đó mới truy vấn Recipe. Nếu model Recipe thay bằng `categoryId: ObjectId`, logic sẽ khác.

### 4.3. Template và breadcrumb

```ejs
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
    <li class="breadcrumb-item"><a href="/categories">Danh mục</a></li>
    <li class="breadcrumb-item active"><%= category.name %></li>
  </ol>
</nav>
<h1><%= category.name %></h1>
<% if (recipes.length === 0) { %>
  <p>Chưa có công thức thuộc danh mục này.</p>
<% } %>
```

Không cần phân trang để đạt mục tiêu bài học; tuy nhiên phải giới hạn hoặc phân trang khi danh sách phát triển lớn.

### 4.4. Các tình huống lỗi

ID không đúng định dạng ObjectId, ID hợp lệ nhưng không tồn tại, category tồn tại mà rỗng và lỗi kết nối database là bốn trường hợp khác nhau. Đừng quy mọi trường hợp thành HTTP 500.

## 5. Thực hành

1. Tạo `views/categories/index.ejs` và `views/categories/show.ejs`.
2. Nhấn vào một category rồi kiểm tra danh sách món phù hợp.
3. Thử ID sai, ID không tồn tại và category không có món.
4. Kiểm tra breadcrumb quay về trang danh mục.

**Checkpoint:** không phát sinh Mongoose CastError không xử lý khi URL chứa ID sai.

## 6. Câu hỏi ôn tập

**Câu 1. URL `/categories/:id` cung cấp ID tại đâu?**

A. `req.body.name`  
B. `req.params.id`  
C. `req.files`  
D. `.env`  

**Đáp án:** B. **Giải thích:** Tham số động được lưu trong params.

**Câu 2. Vì Recipe.category đang là chuỗi, bộ lọc Recipe đúng là gì?**

A. `{ category: category.name }`  
B. `{ _id: category.name }`  
C. `{ category: category._id }`  
D. `{ ingredients: category._id }`  

**Đáp án:** A. **Giải thích:** Cần so sánh cùng kiểu dữ liệu là tên danh mục.

**Câu 3. Lỗi nào phù hợp nếu category không tồn tại?**

A. 302  
B. 201  
C. 404  
D. 204  

**Đáp án:** C. **Giải thích:** Tài nguyên được yêu cầu không tồn tại.

**Câu 4. Breadcrumb có tác dụng gì?**

A. Lưu mật khẩu  
B. Seed category  
C. Kết nối Atlas  
D. Hiển thị vị trí điều hướng  

**Đáp án:** D. **Giải thích:** Breadcrumb cho biết quan hệ trang hiện tại và các cấp trên.

**Câu 5. Vì sao kiểm tra `isValidObjectId`?**

A. Để làm ảnh responsive  
B. Để tránh truy vấn ID sai định dạng gây CastError  
C. Để sinh ID ngẫu nhiên  
D. Để cập nhật tất cả category  

**Đáp án:** B. **Giải thích:** ID lấy từ URL có thể không phải ObjectId hợp lệ.

## 7. Tổng kết

Danh mục là một điểm vào quan trọng để khám phá món. Logic hai bước Category → Recipe phải nhất quán với cách định nghĩa schema.
