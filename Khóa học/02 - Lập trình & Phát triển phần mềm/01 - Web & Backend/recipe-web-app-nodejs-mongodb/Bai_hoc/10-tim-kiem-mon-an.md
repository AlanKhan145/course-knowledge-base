---
title: "Bài 10 — Tìm kiếm công thức trong MongoDB"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 10
lesson_type: "lesson"
language: "vi"
---

# Bài 10 — Tìm kiếm công thức trong MongoDB

## 1. Tóm tắt

Kết nối ô tìm kiếm với truy vấn MongoDB để người dùng gõ tên hoặc từ khóa món ăn, ví dụ “mì”, rồi xem danh sách công thức phù hợp.

## 2. Mục tiêu học tập

- Tạo được route tìm kiếm từ query string.
- Sử dụng truy vấn regex theo tên món với đầu vào được escape.
- Trình bày được ưu điểm, giới hạn và phương án nâng cấp công nghệ tìm kiếm.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Form tìm kiếm

Trong header:

```ejs
<form action="/search" method="GET">
  <label for="q">Tìm món ăn</label>
  <input id="q" name="q" type="search" placeholder="Ví dụ: mì">
  <button type="submit">Tìm</button>
</form>
```

Ví dụ URL tạo ra: `/search?q=m%C3%AC`. Route:

```js
router.get('/search', recipeController.searchRecipes);
```

### 4.2. Tìm theo tên món

Một cách đơn giản dùng MongoDB regex (không phải semantic search):

```js
const escapeRegex = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

exports.searchRecipes = async (req, res, next) => {
  try {
    const term = String(req.query.q || '').trim().slice(0, 100);
    const filter = term ? { name: { $regex: escapeRegex(term), $options: 'i' } } : {};
    const recipes = term ? await Recipe.find(filter).limit(30) : [];
    res.render('search', { title: 'Tìm công thức', term, recipes });
  } catch (err) { next(err); }
};
```

Mẫu escape giúp dấu `.` hoặc `*` từ người dùng không vô tình trở thành lệnh regex. `i` tìm không phân biệt chữ hoa/chữ thường; **không đồng nghĩa tự động chuẩn hóa dấu tiếng Việt**. Nếu dữ liệu ghi “mì” mà người dùng gõ “mi”, một regex thông thường không bảo đảm khớp.

### 4.3. Giao diện kết quả

```ejs
<h1>Kết quả tìm kiếm</h1>
<p>Từ khóa: <%= term %></p>
<% if (recipes.length === 0) { %>
  <p>Không có món phù hợp. Thử từ khóa khác.</p>
<% } %>
<% recipes.forEach(recipe => { %>
  <p><a href="/recipe/<%= recipe._id %>"><%= recipe.name %></a></p>
<% }) %>
```

Không đặt từ khóa từ người dùng vào `<%- ... %>`; sử dụng `<%= ... %>` để EJS escape HTML.

### 4.4. Chọn công nghệ theo độ phức tạp

| Yêu cầu | Hướng tiếp cận |
| --- | --- |
| Tìm tên món đơn giản với dữ liệu nhỏ | Regex đã escape hoặc filter có cấu trúc |
| Tìm nhiều trường và xếp hạng từ khóa | MongoDB text index hoặc Atlas Search khi phù hợp |
| Tìm kiếm có dấu/không dấu và lỗi chính tả | Chuẩn hóa dữ liệu, analyzer hoặc search engine phù hợp |
| Tìm theo ý nghĩa “bữa tối nhẹ với trứng” | Semantic/hybrid search là phần mở rộng, không tự có trong regex |

Bài học chỉ triển khai chức năng tìm chuỗi đơn giản đúng phạm vi web công thức.

## 5. Thực hành

1. Tạo route `/search` và `search.ejs`.
2. Nhập “mì”, “MI”, chuỗi rỗng, dấu chấm `.` và từ không tồn tại.
3. Kiểm tra URL có thể sao chép gửi cho người khác.
4. Thử tên “mì” và từ “mi”; ghi rõ vì sao kết quả có thể khác nhau.

**Checkpoint:** đầu vào đặc biệt không làm hỏng truy vấn, danh sách rỗng có lời giải thích.

## 6. Câu hỏi ôn tập

**Câu 1. Đối với form tìm kiếm chỉ đọc, method thường phù hợp nhất là gì?**

A. GET  
B. DELETE  
C. PATCH  
D. PUT  

**Đáp án:** A. **Giải thích:** GET tạo URL query string có thể chia sẻ.

**Câu 2. Mục đích escape ký tự regex từ đầu vào?**

A. Tự dịch tên món  
B. Tăng số món  
C. Tránh ký tự nhập trở thành toán tử regex  
D. Xóa dữ liệu trùng  

**Đáp án:** C. **Giải thích:** Ký tự regex có thể đổi ý nghĩa truy vấn nếu không escape.

**Câu 3. `$options: "i"` ảnh hưởng thế nào?**

A. Bật phân trang  
B. Không phân biệt hoa/thường  
C. Tự bỏ dấu tiếng Việt  
D. Bật vector search  

**Đáp án:** B. **Giải thích:** i là chế độ case-insensitive, không xử lý accent.

**Câu 4. Nếu người dùng tìm “bữa tối nhẹ” theo ý nghĩa mà tên món không chứa chuỗi này, regex có đáp ứng trọn vẹn?**

A. Luôn có  
B. Chỉ khi có cookie  
C. Tự suy diễn nhờ Mongoose  
D. Không; cần hướng tìm nâng cao  

**Đáp án:** D. **Giải thích:** Regex chỉ so khớp mẫu chuỗi, không hiểu ngữ nghĩa.

**Câu 5. Dùng EJS cú pháp nào để hiển thị an toàn chuỗi tìm kiếm?**

A. `<%= term %>`  
B. `<%- term %>`  
C. `eval(term)`  
D. `innerHTML = term`  

**Đáp án:** A. **Giải thích:** `<%=` escape HTML cho nội dung động.

## 7. Tổng kết

Tìm kiếm cơ bản là truy vấn có điều kiện trên dữ liệu đang có. Tính năng này hữu ích khi dữ liệu nhỏ; tìm ngữ nghĩa, tìm không dấu và gợi ý cá nhân hóa là các hướng phát triển tiếp theo.
