# Bài 04 — Động học thân cá và sóng uốn

## 1. Tóm tắt

Động học bơi là kết quả của cơ hoạt động, cấu trúc cơ–xương thụ động và phản lực từ nước. Sóng cong truyền về đuôi, biên độ tăng dần và thường đạt cực đại gần khoảng 10% chiều dài cơ thể. Tốc độ bơi thay đổi chủ yếu nhờ thay đổi tần số đập đuôi.

## 2. Mục tiêu

Sau bài này, người học có thể:

1. Mô tả các đặc trưng định lượng của sóng uốn.
2. Giải thích điều kiện vận tốc sóng phải lớn hơn vận tốc tiến.
3. Tính và diễn giải tỉ số `u/v` và khái niệm slip.
4. Giải thích stride length theo đơn vị chiều dài cơ thể.

## 3. Sóng cong của thân

Cơ, bộ xương, các mô thụ động và nước kết hợp tạo nên một **sóng độ cong** truyền dọc thân. Biên độ tăng về phía đuôi và có thể đạt cực đại xấp xỉ **10% BL**.

Tại một thời điểm, số sóng hiện diện trên thân thay đổi giữa các loài, khoảng **0.7–1.7 sóng**.

## 4. Vận tốc sóng và vận tốc bơi

Ký hiệu:

- `v`: vận tốc sóng truyền ngược về phía đuôi.
- `u`: vận tốc cá tiến về phía trước.

Do nước “nhường” khi cá đẩy vào, sóng phải truyền về sau nhanh hơn cá tiến về trước:

```text
v > u
```

Tỉ số:

```text
u / v
```

được dùng để mô tả mức slip.

### 4.1. No slip lý tưởng

Nếu `u/v = 1`, bài báo gọi là trạng thái không slip. Trong thực tế thường có slip nên:

```text
u / v < 1
```

### 4.2. Ý nghĩa cơ học

`u/v` càng gần 1 thì chuyển động sóng càng hiệu quả trong việc chuyển thành tiến về trước theo cách định nghĩa này. Bài báo ghi nhận `u/v` tăng khi stride length tăng.

## 5. Tần số đập đuôi và tốc độ bơi

Tăng tốc độ bơi chủ yếu đến từ tăng **tailbeat frequency**. Do đó khi so sánh dữ liệu ở các tốc độ khác nhau, các nghiên cứu có thể chuẩn hóa thời gian theo **chu kỳ đập đuôi**.

## 6. Stride length

Stride length là khoảng cách cá tiến được trong một lần đập đuôi. Giá trị điển hình được nêu là khoảng:

```text
0.9 BL / tail beat
```

và biến thiên giữa các loài khoảng **0.5–1.0 BL** mỗi nhịp đập đuôi.

### Ví dụ minh họa

Nếu một cá thể dài `0.40 m` có stride length `0.9 BL`, khoảng cách tiến trong một nhịp đuôi là:

```text
0.9 × 0.40 = 0.36 m
```

Đây là phép tính minh họa trực tiếp từ định nghĩa stride length; không phải số đo của một loài cụ thể trong bài báo.

## 7. Phân biệt “sóng hình học” và “strain cơ”

Một cảnh báo quan trọng của bài báo là **độ cong thân và strain của cơ bên dưới không nhất thiết luôn cùng pha**. Vì vậy, việc suy ra strain cơ chỉ từ đường giữa của cá có thể gây sai lệch nếu không kiểm chứng bằng phương pháp khác.

## 8. Câu hỏi tự kiểm tra

1. Biên độ sóng uốn thay đổi như thế nào khi đi về đuôi?  
2. Tại sao cần `v > u` trong bơi uốn ổn định?  
3. `u/v = 1` có ý nghĩa gì?  
4. Tốc độ bơi tăng chủ yếu nhờ đại lượng nào?  
5. Stride length khoảng bao nhiêu BL theo giá trị điển hình trong bài báo?

## 9. Checklist

- [ ] Tôi nhớ biên độ sóng tối đa khoảng 10% BL.
- [ ] Tôi hiểu `v`, `u` và `u/v`.
- [ ] Tôi phân biệt được tailbeat frequency với stride length.
- [ ] Tôi không đồng nhất độ cong thân với strain cơ trong mọi trường hợp.

## 10. Tổng kết

Động học thân là cầu nối giữa hoạt hóa cơ và tương tác thủy động lực học. Các đại lượng như biên độ, vận tốc sóng, tần số đập đuôi và stride length giúp mô tả định lượng kiểu bơi, nhưng vẫn cần dữ liệu cơ để giải thích nguồn công suất bên dưới.

**Phạm vi nguồn:** “Body kinematics during swimming”, trang 3398; các cảnh báo về strain ở trang 3402.
