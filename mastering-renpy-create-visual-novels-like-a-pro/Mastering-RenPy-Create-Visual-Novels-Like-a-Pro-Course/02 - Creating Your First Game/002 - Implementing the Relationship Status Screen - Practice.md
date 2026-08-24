# 002 - Implementing the Relationship Status Screen

## Module

Module 02 - Creating Your First Game

## Thời lượng

4 phút 25 giây

## Nội dung bài học

Bài học tạo một screen tùy chỉnh để hiển thị điểm quan hệ theo thời gian thực, ban đầu tập trung vào Alex và Emma. Screen dùng `frame` để tạo khung và `vbox` để sắp xếp nội dung theo chiều dọc.

## Mục tiêu sau bài học

- Tạo được screen Ren'Py đơn giản.
- Hiển thị biến Python trong UI.
- Hiểu cách screen phản ánh trạng thái hiện tại của game.

## Ghi chú script

```renpy
screen relationship_status():
    frame:
        vbox:
            text "Alex: [alex_relationship]"
            text "Emma: [emma_relationship]"
```

## Việc cần làm trong Ren'Py

- [ ] Tạo screen `relationship_status`.
- [ ] Hiển thị điểm Alex và Emma.
- [ ] Gọi screen trong scene cần theo dõi.
- [ ] Kiểm tra UI cập nhật sau mỗi lựa chọn.

## Kiểm tra nhanh

- [ ] Screen không che mất dialogue theo cách khó đọc.
- [ ] Điểm hiển thị đúng sau khi biến tăng/giảm.
- [ ] Screen có thể mở rộng để thêm Lily sau này.

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
