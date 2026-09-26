# 05 — Rating, edition và chuẩn hóa so sánh

## 1. Khác biệt quan trọng nhất giữa Goodreads và Douban

### Goodreads

Trên nhiều trang sách, rating hiển thị được tổng hợp theo **“all editions”** của cùng một work. Rating cho một edition cụ thể có thể tồn tại, nhưng phân phối 1–5 sao cho edition riêng lẻ không phải lúc nào cũng có đầy đủ.

### Douban

Rating thường gắn với **từng edition**, trong khi tổng hợp “all editions” không có theo cách tương đương Goodreads.

## 2. Hệ quả

Không thể tạo một phép so sánh hoàn toàn đối xứng giữa “toàn bộ editions” của cùng work trên hai nền tảng.

Paper vì vậy thu hẹp sang:

- so sánh **most-rated / most-reviewed page** của cùng work;
- dùng **tỷ lệ phần trăm 1–5 sao** thay vì số tuyệt đối để giảm tác động của quy mô rating khác nhau.

## 3. Bài học về normalization

Normalization không phải “làm hai dataset giống nhau bằng mọi giá”. Nó là:

1. xác định khác biệt cấu trúc;
2. chọn một đơn vị so sánh thực tế;
3. công khai phần mất mát/thỏa hiệp;
4. dùng metric giảm lệch quy mô khi có thể.

## 4. Ví dụ Jane Eyre

Paper minh họa rằng Goodreads có thể hiển thị overall rating cho “all editions”, còn Douban hiển thị nhiều edition tiếng Trung với rating riêng.

Điều này khiến câu hỏi “Jane Eyre được đánh giá bao nhiêu?” trở thành câu hỏi về **data model**, không chỉ là một con số.

## 5. Câu hỏi kiểm tra

- Vì sao lấy rating trung bình của một trang Goodreads và một edition Douban có thể gây lệch?
- Tại sao phần trăm sao hữu ích hơn số lượng sao tuyệt đối khi hai nền tảng có quy mô khác nhau?
