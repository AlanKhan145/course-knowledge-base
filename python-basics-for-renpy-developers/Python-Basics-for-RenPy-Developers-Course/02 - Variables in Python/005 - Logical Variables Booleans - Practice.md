# 005 - Logical Variables: Booleans

## Module

Module 02 - Variables in Python

## Thời lượng

4 phút 37 giây

## Nội dung bài học

Học Boolean với hai giá trị `True` và `False`, dùng để ghi nhớ sự kiện, đảo giá trị bằng `not`, kết hợp với điều kiện, mở/khóa nội dung và kiểm tra người chơi đã thực hiện hành động hay chưa.

## Ví dụ Ren'Py

```renpy
default met_prince = False
default found_secret_letter = False
default true_route_unlocked = False

label meet_prince:
    $ met_prince = True
```

```renpy
if found_secret_letter:
    "Bạn đưa bức thư bí mật cho hoàng tử."
else:
    "Bạn không có bằng chứng để đối chất."
```

## Ứng dụng

- `met_lucian`
- `helped_lucian`
- `accepted_invitation`
- `saw_secret_scene`
- `completed_common_route`
- `unlocked_true_route`

## Việc cần làm

- [ ] Tạo ít nhất 3 event flags.
- [ ] Đổi flag sau một scene.
- [ ] Kiểm tra flag bằng `if`.
- [ ] Thử `not flag`.

## Ghi chú cá nhân

-

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
