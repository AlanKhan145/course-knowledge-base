# 007 - Sets: Unordered Collection

## Module

Module 03 - Data Structures in Python

## Thời lượng

5 phút 25 giây

## Nội dung bài học

Học set: tập hợp không có thứ tự, không lưu phần tử trùng lặp, thêm/xóa phần tử, kiểm tra thành viên, so sánh tập hợp và quản lý trạng thái hoặc nội dung đã mở khóa.

## Ví dụ Ren'Py

```renpy
default unlocked_cgs = set()

label unlock_cg:
    $ unlocked_cgs.add("lucian_library_cg")
```

Set phù hợp khi chỉ cần biết một thứ đã mở khóa hay chưa, không cần lưu thứ tự.

## Ứng dụng

- CG đã mở khóa.
- Thành tựu đã nhận.
- Hint đã tìm thấy.
- Nhân vật đã gặp.
- Địa điểm đã khám phá.
- Ending đã hoàn thành.

## Việc cần làm

- [ ] Tạo `unlocked_cgs`.
- [ ] Thêm unlock bằng `add`.
- [ ] Thử thêm cùng một unlock hai lần.
- [ ] Kiểm tra membership bằng `in`.

## Ghi chú cá nhân

-
