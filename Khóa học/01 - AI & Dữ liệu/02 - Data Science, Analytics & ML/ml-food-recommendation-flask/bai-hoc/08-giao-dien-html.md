# Bài 08 — Thiết kế giao diện HTML, CSS và Bootstrap

> **Loại:** Bài học và thực hành · **Chủ đề:** Recipe Recommendation System · **Công cụ:** Python, scikit-learn, Flask

## 1. Tóm tắt

Người dùng cần một biểu mẫu rõ ràng để nhập nguyên liệu và các chỉ tiêu dinh dưỡng. Flask sử dụng thư mục `templates/` để tìm trang HTML; Bootstrap hỗ trợ lưới responsive và CSS cơ bản.

## 2. Mục tiêu học tập

- Tạo được biểu mẫu POST có trường `name` chính xác.
- Giải thích sự khác nhau giữa `id`, `name`, `type` và `required`.
- Sắp xếp form thành lưới đáp ứng bằng Bootstrap.

## 3. Cấu trúc giao diện

Đặt `index.html` trong `thuc-hanh/templates/`, và stylesheet riêng trong `thuc-hanh/static/style.css`. Flask mặc định biết hai thư mục này. Đường dẫn tới CSS dùng `url_for('static', filename='style.css')` để tránh viết cứng URL tương đối dễ sai.

## 4. Form POST

```html
<form method="post" action="/">
  <label for="ingredients">Nguyên liệu</label>
  <input id="ingredients" name="ingredients"
         placeholder="chicken, rice, carrot">

  <label for="calories">Calories (kcal)</label>
  <input id="calories" name="calories"
         type="number" min="0" step="any">

  <button type="submit">Nhận gợi ý</button>
</form>
```

- `name`: khóa Flask dùng để nhận dữ liệu từ `request.form`.
- `id`: liên kết nhãn `label` với ô nhập; hỗ trợ accessibility.
- `type="number"`: tiện cho nhập số, **không thay** kiểm tra ở backend.
- `step="any"`: cho phép số thập phân.
- `required`: bắt buộc nhập; bản demo để trống các trường dinh dưỡng là hợp lệ nên không đặt `required` cho chúng.

## 5. Layout responsive với Bootstrap

```html
<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label" for="protein_g">Protein (g)</label>
    <input class="form-control" type="number"
           name="protein_g" id="protein_g">
  </div>
</div>
```

`col-12` chiếm toàn bộ bề ngang trên màn hình nhỏ, `col-md-6` chiếm nửa hàng từ mức hiển thị trung bình; `g-3` tạo khoảng cách giữa ô. Các lớp `form-label`, `form-control`, `btn btn-primary` giúp thiết kế nhất quán.

## 6. Trình bày kết quả

Flask dùng Jinja để lặp và chèn dữ liệu vào HTML:

```html
{% for item in results %}
  <h3>{{ item.name }}</h3>
  <p>{{ item.ingredients }}</p>
{% endfor %}
```

Thông tin từ dataset sẽ được Jinja escape ở ngữ cảnh HTML thông thường, giúp giảm nguy cơ chèn thẻ không mong muốn. Không dùng `|safe` với dữ liệu chưa xác thực. Nếu URL ảnh đến từ bên ngoài, cần kiểm tra nguồn trước khi hiển thị.

## 7. Cây thư mục

```text
thuc-hanh/
├── app.py
├── recommender.py
├── templates/
│   └── index.html
└── static/
    └── style.css
```

## 8. Thực hành tự kiểm tra

Mở `templates/index.html` và thêm một mô tả ngắn cho trường natri. Thu nhỏ trình duyệt, kiểm tra form không tràn ngang và mỗi nhãn chọn đúng ô nhập.

## 9. Câu hỏi ôn tập

**Câu 1.** Flask thường tìm HTML trong thư mục nào?

A. data  
B. templates  
C. static  
D. tests  

**Đáp án: B.** Jinja template mặc định nằm trong `templates/`.

**Câu 2.** Thuộc tính HTML nào backend dùng làm key request.form?

A. class  
B. placeholder  
C. id  
D. name  

**Đáp án: D.** Flask nhận `request.form["name"]`.

**Câu 3.** Vì sao phải kiểm tra số tại backend dù input type=number?

A. Vì có thể gửi yêu cầu HTTP không thông qua trình duyệt  
B. Vì CSS không hỗ trợ số  
C. Vì cần Pandas để hiển thị  
D. Vì bootstrap đổi số  

**Đáp án: A.** Kiểm tra ở client không phải rào chắn bảo mật.

**Câu 4.** col-md-6 có tác dụng gì?

A. Gửi form  
B. Lấy route  
C. Chia khoảng nửa chiều rộng trên breakpoint phù hợp  
D. Fit model  

**Đáp án: C.** Đây là grid responsive của Bootstrap.

**Câu 5.** Trường dinh dưỡng để trống nên có required hay không?

A. Có mọi trường  
B. Không nếu lựa chọn nhập là tùy chọn  
C. Có để ép số 0  
D. Có để tính cosine  

**Đáp án: B.** Form phải thể hiện đúng yêu cầu sản phẩm.

## 10. Tổng kết

Bài này hoàn thiện một mắt xích của hệ thống gợi ý công thức. Khi thực hành, hãy đối chiếu kết quả với tệp `thuc-hanh/` và tự giải thích lý do của từng phép biến đổi.
