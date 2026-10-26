---
title: "Bài 13 — Validation, flash messages và tải ảnh"
course: "Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB"
lesson_number: 13
lesson_type: "lesson"
language: "vi"
---

# Bài 13 — Validation, flash messages và tải ảnh

## 1. Tóm tắt

Hoàn thiện chức năng gửi món: kiểm tra dữ liệu, tạo bản ghi, upload ảnh bằng `express-fileupload` và phản hồi thành công/thất bại qua session + flash message.

## 2. Mục tiêu học tập

- Cấu hình được session và connect-flash có secret từ môi trường.
- Giới hạn và kiểm tra được tệp ảnh tải lên trước khi lưu.
- Phân biệt lỗi validation, lỗi upload và phản hồi sau POST.

## 3. Bối cảnh

Đích đến của bài học là một website công thức nấu ăn: người dùng xem, tìm, lọc và đóng góp món ăn; ứng dụng Node.js xử lý HTTP, còn MongoDB lưu dữ liệu công thức. Mỗi khái niệm dưới đây được trình bày cùng tình huống sử dụng trực tiếp trong dự án.

## 4. Nội dung chính

### 4.1. Cấu hình session, flash, file upload

```js
const session = require('express-session');
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax' }
}));
app.use(flash());
app.use(fileUpload({ limits: { fileSize: 2 * 1024 * 1024 }, abortOnLimit: true }));
```

Cấu hình trên minh họa cách dùng. Bộ nhớ session mặc định chỉ nên dùng khi học ở local; production cần session store thích hợp, HTTPS và chính sách cookie phù hợp. Không lưu session secret trực tiếp trong code.

### 4.2. Thông báo qua redirect

```js
// Trong POST controller, sau khi xử lý thành công
req.flash('success', 'Đã gửi công thức');
return res.redirect('/submit-recipe');
```

```js
// Trong GET controller
res.render('submit-recipe', {
  title: 'Gửi công thức',
  successMessages: req.flash('success'),
  errorMessages: req.flash('error')
});
```

Trong EJS, render từng thông báo bằng `<%= message %>`; flash message thường được dùng một lần sau redirect.

### 4.3. Xử lý file an toàn

Quy trình tối thiểu:

1. Kiểm tra `req.files?.image` tồn tại và đúng một file.
2. Kiểm tra dung lượng tối đa, kiểu nội dung và **chữ ký thực tế** của file (MIME khai báo có thể bị giả mạo).
3. Tạo tên file mới ngẫu nhiên, không dùng nguyên `req.files.image.name` làm đường dẫn.
4. Chỉ chấp nhận các định dạng ảnh cho phép; ghi vào `public/uploads` hoặc dịch vụ lưu trữ ảnh đáng tin cậy.
5. Chỉ lưu tên file sau khi upload thành công; dọn file nếu database tạo bản ghi thất bại.

Ví dụ phần di chuyển file, giả sử `file` đã vượt qua mọi bước validation:

```js
const path = require('path');
const crypto = require('crypto');
const fileName = crypto.randomUUID() + '.jpg'; // giả sử xác minh đúng JPEG
const target = path.join(__dirname, '../../public/uploads', fileName);
await file.mv(target);
```

Đoạn code chỉ minh họa lệnh `mv`, **không** phải hàm upload an toàn hoàn chỉnh; không sử dụng nếu thiếu kiểm tra file và quyền ghi thư mục. Tên file trong DB nên là `fileName`, không phải đường dẫn tuyệt đối trên máy chủ.

### 4.4. Xử lý validation của Mongoose

`Recipe.create()` có thể ném `ValidationError` nếu trường bắt buộc trống hoặc category sai `enum`. Tránh dùng message lỗi nội bộ như stack trace để hiển thị công khai. Trong lúc học, log chi tiết ở server và đưa thông báo dễ hiểu vào flash.

```js
try {
  // dữ liệu đã được kiểm tra; file ảnh đã được xử lý đúng cách
  await Recipe.create(recipeData);
  req.flash('success', 'Đã lưu công thức');
} catch (err) {
  console.error(err);
  req.flash('error', 'Không thể lưu công thức. Hãy kiểm tra dữ liệu.');
}
return res.redirect('/submit-recipe');
```

### 4.5. Những lưu ý khi đưa lên production

Biểu mẫu ghi dữ liệu cần chống CSRF, giới hạn tốc độ, kiểm tra quyền/đăng nhập nếu phù hợp và bảo vệ chống spam. Không cho phép người dùng tải file có thể thực thi lên vùng public. Kiểm soát đồng bộ giữa file và DB để không sinh file mồ côi.

## 5. Thực hành

1. Thiết lập session, flash message và `GET/POST /submit-recipe`.
2. Thử công thức hợp lệ, thiếu tên, email sai định dạng và category không nằm trong danh sách.
3. Kiểm tra file ảnh hợp lệ và file giả mạo tên `.jpg`.
4. Kiểm tra ảnh được lưu dưới tên mới và route `/uploads/<tên>` hiển thị đúng sau khi upload.

**Checkpoint:** form lỗi không làm server crash, kết quả luôn có thông báo rõ ràng. Nếu chưa có bước kiểm tra chữ ký file, **chưa** coi upload an toàn hoàn chỉnh.

## 6. Câu hỏi ôn tập

**Câu 1. Flash message phù hợp khi nào?**

A. Khi luôn muốn log ra terminal  
B. Khi muốn thông báo qua redirect  
C. Khi render SVG  
D. Khi kiểm tra tên category  

**Đáp án:** B. **Giải thích:** Flash tồn tại qua một lần chuyển hướng phù hợp với POST/Redirect/GET.

**Câu 2. Vì sao không dùng nguyên tên file upload làm tên lưu?**

A. Tên có thể xung đột hoặc chứa nội dung nguy hiểm  
B. MongoDB không có trường image  
C. EJS yêu cầu UUID  
D. Bootstrap không chấp nhận tên file  

**Đáp án:** A. **Giải thích:** Đổi tên ngẫu nhiên giảm xung đột và rủi ro đường dẫn.

**Câu 3. Có nên tin tuyệt đối vào MIME type do client gửi?**

A. Có, luôn chính xác  
B. Chỉ tin khi HTTPS  
C. Có, nếu tên là png  
D. Không, cần xác minh nội dung file  

**Đáp án:** D. **Giải thích:** MIME khai báo và extension có thể bị giả mạo.

**Câu 4. `ValidationError` thường xuất hiện khi nào?**

A. Mở URL ảnh  
B. Gọi CSS  
C. Vi phạm quy tắc schema  
D. Nhấn back browser  

**Đáp án:** C. **Giải thích:** Schema validation phát hiện trường thiếu/sai kiểu/sai enum.

**Câu 5. Session MemoryStore mặc định phù hợp với ngữ cảnh nào?**

A. Học local và demo đơn giản  
B. Production quy mô lớn ngay lập tức  
C. Lưu tệp ảnh  
D. Thay thế database  

**Đáp án:** A. **Giải thích:** Store mặc định không phù hợp production.

## 7. Tổng kết

Chức năng ghi dữ liệu hoàn thiện khi cả validation, xử lý file và phản hồi sau POST hoạt động. Upload ảnh cần thêm các kiểm tra ngoài cú pháp cơ bản để tránh biến bài học demo thành lỗ hổng production.
