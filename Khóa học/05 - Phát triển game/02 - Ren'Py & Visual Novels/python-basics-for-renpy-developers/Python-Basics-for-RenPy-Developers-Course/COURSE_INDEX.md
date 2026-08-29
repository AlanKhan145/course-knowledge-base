# Course Index

## Python Basics for Ren'Py Developers

Khóa học này tập trung vào Python cơ bản dành riêng cho người đã hoặc đang học Ren'Py. Trọng tâm không phải là làm một visual novel hoàn chỉnh từ đầu, mà là dùng Python để mở rộng logic Ren'Py: inventory, điểm hảo cảm, lựa chọn có điều kiện, minigame và tổ chức dữ liệu game rõ ràng hơn.

## Mục tiêu đầu ra

Sau khóa học, bạn nên có thể:

- Viết Python một dòng, khối `python:` và `init python:` trong Ren'Py.
- Dùng string, number và Boolean để lưu trạng thái game.
- Dùng list, set và dictionary cho inventory, unlocks, affection và trạng thái route.
- Viết `if`, `elif`, `else` để điều khiển nhánh truyện.
- Dùng `for`, `while` và iterables để xử lý nhiều phần tử.
- Viết function để tái sử dụng logic trong script Ren'Py.
- Dùng class để gom dữ liệu và hành vi cho nhân vật, item, quest hoặc minigame.
- Chuyển kiến thức từ Google Colab sang file `.rpy`.

## Tài liệu trong khóa

- [SYLLABUS.md](SYLLABUS.md): mục lục đầy đủ theo bài.
- [LEARNING_PLAN_1_WEEK.md](LEARNING_PLAN_1_WEEK.md): lịch học gọn trong 1 tuần.
- [PROJECT_BRIEFS.md](PROJECT_BRIEFS.md): brief các hệ thống có thể xây sau khóa.
- [PRACTICE_CHECKLIST.md](PRACTICE_CHECKLIST.md): checklist kỹ năng Python cho Ren'Py.

## Danh sách module

| Module | Nội dung | Bài học | Thời lượng | Sản phẩm |
| --- | --- | ---: | --- | --- |
| 01 - Introduction | Python trong Ren'Py và Developer Console | 2 | khoảng 4 phút | Môi trường thực hành Colab/Ren'Py |
| 02 - Variables in Python | Strings, numbers, booleans | 3 | khoảng 15 phút | Biến lưu tên, điểm và flag |
| 03 - Data Structures in Python | Lists, sets, dictionaries | 3 | khoảng 16 phút | Inventory, unlocks và affection table |
| 04 - Python Statements | Conditionals, loops, iterables | 3 | khoảng 20 phút | Lựa chọn có điều kiện và logic minigame |
| 05 - Advanced Topics | Functions và classes | 2 | khoảng 15 phút | Helper functions và class game object |
| 06 - Python Resources | Conclusion và next steps | 1 | dưới 1 phút | Kế hoạch tiếp tục luyện Python/Ren'Py |

## Đường học khuyến nghị

1. Nếu mới học Ren'Py, học trước cú pháp `label`, dialogue và `menu`.
2. Với mỗi bài, chạy ví dụ trong Colab rồi viết lại trong file `.rpy`.
3. Sau module 03, thử tạo một inventory nhỏ và một bảng affection nhiều nhân vật.
4. Sau module 04, thêm lựa chọn bị khóa bằng điều kiện `if`.
5. Sau module 05, gom logic tăng affection hoặc kiểm tra ending vào function/class.
