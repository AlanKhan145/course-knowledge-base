---
title: "Bài 05 — Trang chủ: hero, danh mục và thẻ công thức"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 5
lesson_type: "lesson"
language: "vi"
---

# Bài 05 — Trang chủ: hero, danh mục và thẻ công thức

## 1. Tóm tắt

Thiết kế trang chủ có hero, CTA tới món mới/món ngẫu nhiên, nhóm danh mục, các khối món ăn và lời mời gửi công thức.

## 2. Mục tiêu học tập

- Bố trí được trang chủ theo các khu vực độc lập.
- Render được danh sách công thức bằng vòng lặp EJS.
- Phân biệt nội dung tĩnh của layout với dữ liệu động từ controller.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Khối hero và liên kết khám phá

Hero gồm tiêu đề, một đoạn mô tả, ảnh chủ đạo và hai nút điều hướng. Nút “Khám phá mới nhất” dẫn đến `/explore-latest`, còn “Món ngẫu nhiên” dẫn đến `/explore-random`. Những URL này chỉ hoạt động sau khi route tương ứng được khai báo.

```ejs
<section class="row flex-lg-row-reverse align-items-center g-5 py-4 mb-4">
  <div class="col-12 col-lg-6">
    <img src="/img/hero.png" class="img-fluid" alt="Các nguyên liệu nấu ăn">
  </div>
  <div class="col-12 col-lg-6">
    <h1 class="display-5 fw-bold">Ý tưởng nấu ăn mỗi ngày</h1>
    <p class="lead">Tìm món phù hợp với nguyên liệu bạn có.</p>
    <a class="btn btn-dark" href="/explore-latest">Món mới nhất</a>
    <a class="btn btn-outline-secondary" href="/explore-random">Món ngẫu nhiên</a>
  </div>
</section>
```

### 4.2. Danh mục dưới dạng card

Mỗi card gồm ảnh, tên danh mục và đường dẫn. Danh mục có thể được nhập tĩnh để dựng UI ban đầu, nhưng khi đã có MongoDB nên render dữ liệu từ `Category.find()`.

```ejs
<div class="row g-3">
  <% categories.forEach(category => { %>
    <div class="col-6 col-md-4 col-lg-3">
      <a href="/categories/<%= category._id %>" class="text-decoration-none">
        <img class="img-fluid rounded" src="/img/<%= category.image %>" alt="">
        <h3 class="h5 mt-2"><%= category.name %></h3>
      </a>
    </div>
  <% }) %>
</div>
```

Đây là ví dụ tên ảnh lấy từ cơ sở dữ liệu. Ứng dụng thực tế phải giới hạn các đường dẫn ảnh hợp lệ, không tin tưởng dữ liệu đường dẫn tùy ý.

### 4.3. Hiển thị khi danh sách trống

Không giả định mọi danh mục đều có công thức. Dùng điều kiện:

```ejs
<% if (!recipes || recipes.length === 0) { %>
  <p>Chưa có công thức trong danh sách này.</p>
<% } else { %>
  <% recipes.forEach(recipe => { %>
    <article><a href="/recipe/<%= recipe._id %>"><%= recipe.name %></a></article>
  <% }) %>
<% } %>
```

### 4.4. Khối gửi công thức

Đặt CTA “Chia sẻ công thức của bạn” gần cuối trang và dẫn đến `/submit-recipe`. Ảnh riêng cho CTA giúp người dùng nhận ra đây là hành động đóng góp, không phải một món ăn trong danh sách. Không đặt thông tin chỉ có tính trang trí vào thẻ `alt` nếu ảnh không cung cấp nội dung.

## 5. Thực hành

1. Tạo `index.ejs` với hero và hai liên kết.
2. Render 4–6 thẻ danh mục từ mảng thử nghiệm trong controller.
3. Render ba món minh họa; kiểm tra trường hợp `recipes = []`.
4. Thử trên khổ màn hình điện thoại và desktop, tránh ảnh tràn chiều ngang.

**Checkpoint:** mọi card có đường dẫn rõ ràng và không báo lỗi khi mảng trống.

## 6. Câu hỏi ôn tập

**Câu 1. Khi `recipes` là mảng rỗng, trang nên làm gì?**

A. Hiển thị thông báo chưa có món  
B. Bắt buộc ném lỗi 500  
C. Chuyển sang `/submit`  
D. Tự thêm dữ liệu giả  

**Đáp án:** A. **Giải thích:** Empty state mô tả đúng dữ liệu mà không làm hỏng trang.

**Câu 2. Vòng lặp nào phù hợp render các thẻ từ array trong EJS?**

A. `while SQL`  
B. `mongoose.map`  
C. `categories.forEach(...)`  
D. `bootstrap.each`  

**Đáp án:** C. **Giải thích:** EJS cho phép dùng JavaScript để lặp danh sách.

**Câu 3. Liên kết card đến `/recipe/:id` nhằm mục đích gì?**

A. Xóa món  
B. Mở chi tiết đúng món  
C. Mở CSS  
D. Tạo session  

**Đáp án:** B. **Giải thích:** ID định danh món cần xem.

**Câu 4. CTA đóng góp nên dẫn tới đâu?**

A. `/random`  
B. `/css`  
C. `/database`  
D. `/submit-recipe`  

**Đáp án:** D. **Giải thích:** CTA yêu cầu người dùng mở form gửi món.

**Câu 5. Vì sao trang chủ nên phân nhóm hero, category và recipe?**

A. Dễ tổ chức, kiểm thử và mở rộng thành phần  
B. Để MongoDB render Bootstrap  
C. Để ngăn dữ liệu rỗng  
D. Để dùng ít HTML hơn trong mọi tình huống  

**Đáp án:** A. **Giải thích:** Phân chia giao diện rõ mục tiêu từng khu vực.

## 7. Tổng kết

Trang chủ chuyển từ bố cục tĩnh thành giao diện có thể nhận dữ liệu. Trọng tâm là card, liên kết điều hướng và xử lý tốt trạng thái không có công thức.
