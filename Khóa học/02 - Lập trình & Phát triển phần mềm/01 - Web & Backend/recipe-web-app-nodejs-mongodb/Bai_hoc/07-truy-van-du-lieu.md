---
title: "Bài 07 — Seed dữ liệu và truy vấn công thức"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 7
lesson_type: "lesson"
language: "vi"
---

# Bài 07 — Seed dữ liệu và truy vấn công thức

## 1. Tóm tắt

Thực hành thêm dữ liệu khởi tạo, lấy toàn bộ món ăn, món mới nhất, món thuộc danh mục, giới hạn số kết quả và xử lý truy vấn rỗng.

## 2. Mục tiêu học tập

- Dùng được `find`, `sort`, `limit` và `countDocuments` theo mục tiêu.
- Tránh tự động chèn dữ liệu mẫu mỗi lần có request.
- Đưa được dữ liệu query vào `res.render`.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Seed dữ liệu thử nghiệm

Khi cơ sở dữ liệu trống, cần mẫu đủ đa dạng để thử giao diện. Có thể tạo script seed riêng, thay vì gọi `insertMany()` trong controller trang chủ.

```js
// Ý tưởng một script seed độc lập
await Recipe.insertMany([
  { name: 'Mì rau củ', description: 'Mì xào rau', email: 'demo@example.com',
    ingredients: ['Mì', 'Cà rốt', 'Dầu ăn'], category: 'Chinese', image: 'noodle.jpg' },
  { name: 'Cà ri rau', description: 'Cà ri thơm', email: 'demo@example.com',
    ingredients: ['Khoai', 'Gia vị'], category: 'Indian', image: 'curry.jpg' }
]);
```

Đây là dữ liệu minh họa tự tạo. Chạy một lần có chủ đích; chạy lặp không có kiểm soát sẽ tạo bản ghi trùng.

### 4.2. Những truy vấn thường gặp

```js
const allRecipes = await Recipe.find({});
const latest = await Recipe.find({}).sort({ createdAt: -1 }).limit(5);
const thaiRecipes = await Recipe.find({ category: 'Thai' }).limit(10);
const total = await Recipe.countDocuments({});
```

`find({})` trả một mảng, kể cả khi không có kết quả. `sort({ createdAt: -1 })` sắp xếp mới trước nếu schema có `timestamps`; nếu dữ liệu không có trường thời gian, cần tiêu chí khác phù hợp và nhất quán.

### 4.3. Controller đưa dữ liệu tới view

```js
exports.homepage = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    const latest = await Recipe.find({}).sort({ createdAt: -1 }).limit(5);
    res.render('index', { title: 'Trang chủ', categories, recipes: latest });
  } catch (err) {
    next(err);
  }
};
```

`try/catch` chuyển lỗi truy vấn tới middleware lỗi thay vì bỏ mặc promise rejection. Nếu không có bản ghi, trả mảng rỗng cho view và hiển thị thông báo phù hợp.

### 4.4. Lưu ý hiệu năng

Không dùng `find({})` không giới hạn cho một hệ thống có hàng triệu bản ghi. Trong phạm vi project, `limit()` đủ minh họa. Phân trang và index có thể bổ sung khi dữ liệu lớn; không mặc định mọi truy vấn đều cần trả tất cả trường.

## 5. Thực hành

1. Thêm ít nhất 2 category và 5 recipe có tên/nguyên liệu đa dạng.
2. Viết truy vấn lấy 5 recipe mới nhất và 3 món thuộc `Thai`.
3. Kiểm tra trường hợp không có Recipe nào.
4. Bỏ thử mã `insertMany()` khỏi route GET để không sinh bản ghi khi refresh.

**Checkpoint:** refresh trang chủ không làm tăng số món trong database.

## 6. Câu hỏi ôn tập

**Câu 1. Phương thức nào lấy mảng recipe thỏa điều kiện?**

A. `Recipe.find()`  
B. `Recipe.saveAll()`  
C. `Recipe.display()`  
D. `Recipe.render()`  

**Đáp án:** A. **Giải thích:** `find()` truy vấn tập tài liệu.

**Câu 2. Ý nghĩa của `.limit(5)` là gì?**

A. Bắt buộc có 5 món  
B. Xóa món thứ sáu  
C. Lấy tối đa 5 kết quả  
D. Tự chọn ngẫu nhiên 5 món  

**Đáp án:** C. **Giải thích:** Limit đặt giới hạn số tài liệu trả về.

**Câu 3. Tại sao tránh seed trong route GET trang chủ?**

A. Không đọc được req.params  
B. Mỗi lần tải trang có thể chèn dữ liệu mới  
C. Ảnh không hiển thị  
D. EJS không cho phép seed  

**Đáp án:** B. **Giải thích:** GET trang chủ không nên có tác dụng ghi dữ liệu.

**Câu 4. Truy vấn nào lấy món Thái?**

A. `Recipe.find({ name: "Thai" })`  
B. `Recipe.find()`  
C. `Recipe.sort("Thai")`  
D. `Recipe.find({ category: "Thai" })`  

**Đáp án:** D. **Giải thích:** Bộ lọc đúng trường `category`.

**Câu 5. `Recipe.find({})` trả về gì khi DB không có món?**

A. Một mảng rỗng  
B. null bắt buộc  
C. Lỗi 404 HTTP tự động  
D. Một HTML trống  

**Đáp án:** A. **Giải thích:** find trả mảng; view có thể xử lý trạng thái trống.

## 7. Tổng kết

Query qua model cho phép mỗi trang chọn đúng tập dữ liệu. Seed có thể thực hiện trước để kiểm tra, còn controller chỉ đọc dữ liệu trong luồng xem trang.
