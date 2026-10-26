---
title: "Bài 04 — EJS Layout và giao diện Bootstrap"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 4
lesson_type: "lesson"
language: "vi"
---

# Bài 04 — EJS Layout và giao diện Bootstrap

## 1. Tóm tắt

Thiết kế `main.ejs` tái sử dụng header, menu, form tìm kiếm, footer; kết hợp Bootstrap, Bootstrap Icons, Google Fonts và stylesheet riêng.

## 2. Mục tiêu học tập

- Tạo được layout chung với vị trí chèn `<%- body %>`.
- Truyền được title từ controller vào view một cách an toàn.
- Dùng lớp Bootstrap tạo bố cục responsive và liên kết CSS tĩnh.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Tạo layout chung

Tạo `views/layouts/main.ejs`:

```ejs
<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><%= typeof title !== 'undefined' ? title : 'Cooking Blog' %></title>
  <!-- Thêm CSS Bootstrap từ nguồn chính thức đã chọn -->
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <div class="container-xxl bg-white shadow-lg px-4">
    <header class="d-flex flex-wrap align-items-center py-3 border-bottom">
      <a href="/" class="text-decoration-none me-auto">Cooking Blog</a>
      <nav><a href="/">Home</a> <a href="/categories">Categories</a>
        <a href="/submit-recipe">Submit</a></nav>
      <form action="/search" method="GET" class="ms-auto">
        <input type="search" name="q" aria-label="Tìm món ăn" placeholder="Tìm công thức...">
      </form>
    </header>
    <main><%- body %></main>
    <footer class="py-5 border-top">Cooking Blog · Node.js</footer>
  </div>
</body>
</html>
```

`<%= ... %>` escape HTML cho văn bản và biến động; `<%- body %>` đưa HTML được render từ trang con vào layout. Không render trực tiếp dữ liệu người dùng bằng `<%- ... %>` nếu chưa làm sạch nội dung.

### 4.2. Thêm Bootstrap, Icons và phông chữ

Bootstrap dùng grid `row`, `col-12`, `col-lg-6`, spacing `py-4`, `mb-3`, `shadow` và `container-xxl`. Các thẻ `link` CDN lấy từ trang tài liệu chính thức của phiên bản Bootstrap người học chọn; tránh sao chép URL CDN cũ mà không kiểm tra.

Phông Rubik có thể được nhúng từ Google Fonts. Trong `public/css/styles.css`:

```css
:root { --bs-font-sans-serif: 'Rubik', sans-serif; }
.container-xxl { max-width: 1530px; }
body { background-color: rgb(243,243,243); }
a { color: var(--bs-dark); }
```

Các hình logo, hero, danh mục được đặt tại `public/img`. Dùng `alt` diễn tả ý nghĩa hình và `img-fluid` để ảnh co giãn theo màn hình. Kích thước gốc rõ ràng giúp hạn chế nhảy bố cục, nhưng CSS vẫn phải đảm bảo responsive.

### 4.3. Phân biệt layout và trang con

`views/index.ejs` chỉ chứa phần thân cụ thể, không lặp lại toàn bộ `<html>`, `<head>`, header và footer. Nhờ đó, khi sửa ô tìm kiếm hoặc menu, mọi trang cùng thay đổi.

```ejs
<section class="row align-items-center g-5 py-4">
  <div class="col-12 col-lg-6"><h1>Khám phá món ngon</h1></div>
  <div class="col-12 col-lg-6"><img class="img-fluid" src="/img/hero.png" alt="Bàn ăn với các món ăn"></div>
</section>
```

### 4.4. Form tìm kiếm trên header

Ô tìm kiếm phải có `name` để server nhận được giá trị. Dùng `GET` giúp người dùng chia sẻ URL và back/forward dễ dàng. Nếu chủ động dùng `POST` như một số ứng dụng render server, cần khai báo `router.post('/search', ...)` và đọc `req.body`; ví dụ trong khóa học ưu tiên `GET` cho truy vấn chỉ đọc.

## 5. Thực hành

1. Xây dựng header có logo, menu, form tìm kiếm và footer.
2. Tạo responsive hero hai cột: ở điện thoại xếp dọc, màn hình lớn chia đôi.
3. Thêm Rubik, Bootstrap Icons và custom CSS.
4. Kiểm tra tab tiêu đề khi controller truyền `title` và khi không truyền.

**Checkpoint:** hai trang con dùng chung layout mà không sao chép header/footer.

## 6. Câu hỏi ôn tập

**Câu 1. Trong layout EJS, cú pháp nào chèn HTML đã render của trang con?**

A. `<%= title %>`  
B. `<%- body %>`  
C. `{{ body }}`  
D. `${body}`  

**Đáp án:** B. **Giải thích:** express-ejs-layouts cung cấp `body` cho layout.

**Câu 2. Vì sao phải tránh `<%- userInput %>` với dữ liệu chưa xử lý?**

A. Có nguy cơ chèn HTML/script không mong muốn  
B. MongoDB sẽ tự xóa dữ liệu  
C. Bootstrap mất responsive  
D. Không truyền được biến  

**Đáp án:** A. **Giải thích:** `<%-` không escape HTML.

**Câu 3. Lớp nào cho hình co theo kích thước container?**

A. `col-lg-6`  
B. `text-decoration-none`  
C. `border-bottom`  
D. `img-fluid`  

**Đáp án:** D. **Giải thích:** `img-fluid` áp dụng max-width và height thích hợp.

**Câu 4. Dữ liệu đi từ input tìm kiếm `name="q"` khi dùng GET nằm ở đâu?**

A. `req.files`  
B. `req.params.id`  
C. `req.query.q`  
D. `process.env.q`  

**Đáp án:** C. **Giải thích:** GET form được mã hóa trên query string.

**Câu 5. Ưu điểm của layout chung là gì?**

A. Tự thêm dữ liệu vào DB  
B. Giảm lặp header và footer trên nhiều trang  
C. Thay thế controller  
D. Tự động phân trang  

**Đáp án:** B. **Giải thích:** Các phần giao diện chung sửa một lần cho nhiều trang.

## 7. Tổng kết

EJS chịu trách nhiệm dựng HTML, Bootstrap phụ trách bố cục responsive. Layout chung là điểm đặt các thành phần dùng lại; trang con chỉ tập trung nội dung riêng.
