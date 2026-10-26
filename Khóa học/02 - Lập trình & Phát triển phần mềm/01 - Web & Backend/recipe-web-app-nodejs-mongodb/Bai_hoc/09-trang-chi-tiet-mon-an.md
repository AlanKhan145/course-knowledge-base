---
title: "Bài 09 — Trang chi tiết công thức và EJS dynamic data"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 9
lesson_type: "lesson"
language: "vi"
---

# Bài 09 — Trang chi tiết công thức và EJS dynamic data

## 1. Tóm tắt

Lấy một công thức theo `_id` và trình bày tên món, mô tả, ảnh, danh mục, email người gửi và danh sách nguyên liệu.

## 2. Mục tiêu học tập

- Viết được route `/recipe/:id` và truy vấn `findById`.
- Render mảng nguyên liệu thành danh sách HTML.
- Phân biệt tài liệu tồn tại, không tồn tại và ID lỗi.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Router và controller

```js
router.get('/recipe/:id', recipeController.recipeById);
```

```js
exports.recipeById = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).send('Không tìm thấy món');
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send('Không tìm thấy món');
    res.render('recipes/show', { title: recipe.name, recipe });
  } catch (err) { next(err); }
};
```

`findById()` khác `find()`: nó trả một tài liệu hoặc `null`, không phải mảng các món.

### 4.2. Dựng trang chi tiết

```ejs
<article class="container py-4">
  <p class="text-muted"><%= recipe.category %></p>
  <h1><%= recipe.name %></h1>
  <p><%= recipe.description %></p>
  <h2 class="h4">Nguyên liệu</h2>
  <ul>
    <% recipe.ingredients.forEach(item => { %>
      <li><%= item %></li>
    <% }) %>
  </ul>
  <% if (recipe.image) { %>
    <img class="img-fluid rounded" src="/uploads/<%= recipe.image %>" alt="<%= recipe.name %>">
  <% } %>
</article>
```

Đường dẫn `/uploads/...` phù hợp khi ảnh được đặt tại `public/uploads` và Express đã cấu hình `express.static('public')`. Nếu dùng ảnh mẫu ở `public/img`, đường dẫn tương ứng là `/img/...`; không gộp tùy tiện hai loại ảnh.

### 4.3. Kiểm tra dữ liệu trước khi render

Nếu món không có ảnh, dùng placeholder hoặc bỏ phần ảnh. Với nguyên liệu, schema mong đợi mảng; đầu vào form phải được chuẩn hóa để không có trường hợp JavaScript nhận một chuỗi rồi gọi `.forEach` gây lỗi.

### 4.4. Đường dẫn tương đối

Trong template, dùng đường dẫn bắt đầu bằng `/` cho CSS và ảnh; nếu ghi `uploads/file.jpg` trên URL `/recipe/123`, trình duyệt có thể cố truy cập `/recipe/uploads/file.jpg` và trả 404.

## 5. Thực hành

1. Tạo route, controller và template `recipes/show.ejs`.
2. Hiển thị đầy đủ 5 thuộc tính của món và mỗi nguyên liệu thành một `<li>`.
3. Kiểm tra món không có ảnh hoặc có mảng ingredients trống.
4. Tải URL với ID bất hợp lệ và ghi nhận mã phản hồi.

**Checkpoint:** click vào card ở trang chủ mở đúng món bằng ID.

## 6. Câu hỏi ôn tập

**Câu 1. `Recipe.findById(id)` trả gì nếu không thấy?**

A. `[]`  
B. `false`  
C. `null`  
D. HTML 404 tự động  

**Đáp án:** C. **Giải thích:** Một tài liệu không tìm được sẽ trả null.

**Câu 2. Template phù hợp cho nhiều nguyên liệu là gì?**

A. Dùng `forEach` tạo nhiều `<li>`  
B. Dùng một nút cố định  
C. Chạy SQL trong EJS  
D. Render `req.body`  

**Đáp án:** A. **Giải thích:** Danh sách mảng được lặp thành nhiều phần tử HTML.

**Câu 3. Ảnh trong public/uploads được truy cập bởi URL nào?**

A. `/server/uploads/x.jpg`  
B. `/uploads/x.jpg`  
C. `/views/uploads/x.jpg`  
D. `/node_modules/x.jpg`  

**Đáp án:** B. **Giải thích:** Static middleware ánh xạ thư mục `public` thành gốc URL.

**Câu 4. Việc nào nên làm nếu không có image?**

A. Xóa recipe  
B. Dừng máy chủ  
C. Trả status 500  
D. Dùng placeholder hoặc không render ảnh  

**Đáp án:** D. **Giải thích:** Ảnh là trường có thể tùy chọn.

**Câu 5. Lý do ưu tiên URL ảnh bắt đầu bằng `/`?**

A. Để đường dẫn không phụ thuộc route hiện tại  
B. Để hình thành ObjectId  
C. Để upload lên Atlas  
D. Để tạo session  

**Đáp án:** A. **Giải thích:** Đường dẫn bắt đầu từ root nên tránh lỗi khi trang ở URL nhiều cấp.

## 7. Tổng kết

Trang chi tiết phải xác định chính xác một món và render các trường dữ liệu đúng kiểu. Kiểm tra ID và ảnh tùy chọn giúp giao diện vững vàng hơn.
