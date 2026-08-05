# 009 - Conditionals: If

## Module

Module 04 - Python Statements

## Thời lượng

8 phút 17 giây

## Nội dung bài học

Học `if`, `elif`, `else`, so sánh số và chuỗi, kết hợp điều kiện bằng `and`, `or`, `not`, điều khiển nhánh truyện và hiện/ẩn lựa chọn trong menu Ren'Py.

## Ví dụ menu có điều kiện

```renpy
menu:
    "Đưa chìa khóa cho Lucian" if "Silver Key" in inventory:
        jump give_key

    "Hỏi về học viện":
        jump ask_academy
```

## Ví dụ ending condition

```renpy
if affection["lucian"] >= 15 and found_secret_letter:
    jump lucian_true_ending
elif affection["lucian"] >= 8:
    jump lucian_normal_ending
else:
    jump lucian_bad_ending
```

## Việc cần làm

- [ ] Viết một `if` kiểm tra item.
- [ ] Viết một `if/elif/else` kiểm tra affection.
- [ ] Dùng `and` để yêu cầu điểm và flag.
- [ ] Ẩn/hiện lựa chọn menu bằng điều kiện.

## Ghi chú cá nhân

-
