# 006 - Lists: Ordered Collection

## Module

Module 03 - Data Structures in Python

## Thời lượng

5 phút 49 giây

## Nội dung bài học

Học list: tạo list, lưu nhiều giá trị trong một biến, truy cập theo chỉ số, thêm phần tử bằng `append()`, xóa phần tử, kiểm tra phần tử bằng `in`, xử lý dữ liệu theo đúng thứ tự và kết hợp list với vòng lặp.

## Ví dụ inventory

```renpy
default inventory = []

label receive_item:
    $ inventory.append("Silver Key")

    if "Silver Key" in inventory:
        "Bạn đang giữ chiếc chìa khóa bạc."
```

## Ứng dụng

- Inventory.
- Danh sách nhân vật đã gặp.
- Danh sách CG đã mở khóa.
- Lịch sử lựa chọn.
- Danh sách nhiệm vụ.
- Danh sách địa điểm có thể đến.

## Việc cần làm

- [ ] Tạo `inventory`.
- [ ] Thêm item bằng `append`.
- [ ] Kiểm tra item bằng `in`.
- [ ] Hiển thị hoặc khóa lựa chọn dựa trên item.

## Ghi chú cá nhân

-
