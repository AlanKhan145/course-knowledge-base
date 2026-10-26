---
title: "Bài 06 — Thiết kế thanh tìm kiếm với CSS"
type: lesson
language: vi
---

# Bài 06 — Thiết kế thanh tìm kiếm với CSS

## 1. Tóm tắt

Giao diện thanh tìm kiếm gồm một ô nhập và một nút hành động nằm cùng hàng. Dùng Flexbox để căn giữa, tạo góc bo tròn ghép khít hai phần tử, nền input xám nhạt và nút màu đỏ.

## 2. Mục tiêu học tập

- Bố trí input và button trên cùng một hàng với Flexbox.
- Điều khiển riêng bán kính bo góc trái và phải.
- Áp dụng các quy tắc CSS có thể đọc và điều chỉnh dễ dàng.

## 3. CSS thực hành

Mở `search.component.css` và thêm:

```css
.search-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.search-container input {
  border: none;
  outline: none;
  height: 3rem;
  width: 20rem;
  max-width: min(70vw, 20rem);
  padding: 1rem 1.2rem;
  box-sizing: border-box;
  background: #f1f1f1;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 10rem 0 0 10rem;
}

.search-container button {
  border: none;
  outline: none;
  height: 3rem;
  width: 5rem;
  background: #e72929;
  color: #fff;
  border-radius: 0 10rem 10rem 0;
  opacity: 0.8;
  cursor: pointer;
}

.search-container button:hover {
  opacity: 1;
}

.search-container input:focus-visible,
.search-container button:focus-visible {
  outline: 2px solid #333;
  outline-offset: 2px;
}
```

Các giá trị trọng tâm gồm `3rem`, `20rem`, `5rem`, nền `#f1f1f1`, màu nút `#e72929`, độ mờ `0.8` và hiệu ứng hover về `1`. `box-sizing: border-box` và `max-width` là điều chỉnh thực hành giúp kích thước ổn định hơn trên màn hình nhỏ. `:focus-visible` bổ sung dấu hiệu bàn phím dễ nhận thấy; không nên bỏ khả năng định vị focus chỉ vì muốn giao diện sạch.

## 4. Giải thích cấu trúc góc bo

```text
[   Input: bo TRÁI    |  Button: bo PHẢI  ]
     (10rem 0 0 10rem)   (0 10rem 10rem 0)
```

CSS `border-radius` với bốn giá trị đi theo thứ tự: **trên trái, trên phải, dưới phải, dưới trái**. Input chỉ bo hai góc trái. Button chỉ bo hai góc phải. Khi hai phần tử chạm nhau, thanh tìm kiếm trông như một khối duy nhất.

## 5. Kiểm tra tính dễ sử dụng

Chỉ đổi màu hover là chưa đủ nếu người dùng sử dụng bàn phím. Hãy thử Tab để di chuyển tới input và button, quan sát đường viền focus. Cũng nên thử giao diện trên độ rộng màn hình điện thoại và bảo đảm các nhãn không bị cắt.

## 6. Lỗi thường gặp

- **Input bị cao hơn button:** Nếu padding làm tăng chiều cao, đặt `box-sizing: border-box` cho input và button.
- **Góc bo bị lệch:** Kiểm tra thứ tự bốn giá trị của `border-radius`.
- **Button không có tương tác trỏ chuột:** Thêm `cursor: pointer`.
- **Màu hover không thay đổi:** Kiểm tra selector `.search-container button:hover` và quy tắc `opacity`.
- **Mất focus bàn phím:** Không xóa outline nếu không cung cấp style `:focus-visible` khác.

## 7. Thực hành

Giữ cấu trúc HTML, lần lượt thử đổi màu nút, thay `width`, và quan sát sự khác biệt giữa `border-radius: 10rem 0 0 10rem` và `border-radius: 0 10rem 10rem 0`. Sau đó kiểm tra ở màn hình hẹp.

## 8. Câu hỏi ôn tập

**Câu 1.** Thuộc tính nào giúp căn input và button vào giữa theo chiều ngang trong flex container?  
A. `font-weight`  
B. `opacity`  
C. `outline`  
D. `justify-content: center`  
**Đáp án: D.** **Giải thích:** Thuộc tính này căn các flex item theo trục chính.

**Câu 2.** `border-radius: 10rem 0 0 10rem` bo những góc nào?  
A. Hai góc bên phải  
B. Hai góc bên trái  
C. Cả bốn góc  
D. Không góc nào  
**Đáp án: B.** **Giải thích:** Giá trị thứ nhất và thứ tư tương ứng góc trên trái và dưới trái.

**Câu 3.** Mục đích của `button:hover { opacity: 1; }` là gì?  
A. Tạo phản hồi khi trỏ chuột lên nút  
B. Đổi URL ngay lập tức  
C. Xóa món ăn  
D. Chuyển component  
**Đáp án: A.** **Giải thích:** Nút trở nên rõ hơn khi hover.

**Câu 4.** `box-sizing: border-box` giúp điều gì?  
A. Viết hoa chữ  
B. Lọc tên món  
C. Tính padding/border trong kích thước khai báo  
D. Tự tạo route  
**Đáp án: C.** **Giải thích:** Nó giúp duy trì chiều cao và chiều rộng như dự kiến.

**Câu 5.** Người dùng tab tới ô nhập nhưng không biết focus đang ở đâu. Nên làm gì?  
A. Ẩn nút  
B. Xóa hết border  
C. Tăng khoảng trắng  
D. Tạo kiểu `:focus-visible` dễ nhìn  
**Đáp án: D.** **Giải thích:** Chỉ báo focus hỗ trợ điều hướng bằng bàn phím.

## 9. Tổng kết

Flexbox và `border-radius` giúp tạo thanh tìm kiếm liền mạch. Bên cạnh tính thẩm mỹ, cần bảo đảm giao diện co giãn và người dùng bàn phím nhìn thấy focus.
