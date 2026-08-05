# Syllabus

## Thông tin tổng quan

| Nội dung | Thông tin |
| --- | --- |
| Tên khóa học | Python Basics for Ren'Py Developers |
| Giảng viên | Lynn Zheng |
| Cấp độ | Cơ bản |
| Số module | 6 |
| Số bài học | 14 |
| Tổng thời lượng | Khoảng 1 giờ 9 phút |
| Ngôn ngữ | Tiếng Anh |
| Phụ đề | Tiếng Anh tự động |
| Cập nhật gần nhất | Tháng 2/2024 |
| Công cụ | Python, Ren'Py, Google Colab |
| Yêu cầu | Chỉ cần từng nghe hoặc biết sơ bộ về Ren'Py |

Ghi chú: tại thời điểm nội dung được cung cấp, trang Udemy hiển thị khoảng 4,1/5 điểm, 91 lượt đánh giá và 497 học viên. Các con số này có thể thay đổi theo thời gian.

## Module 01 - Introduction

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 001 | Introduction | 00:37 | Mục tiêu khóa học, tài nguyên thực hành, Colab và project Ren'Py mẫu |
| 002 | Using Python in Ren'Py Scripts and Developer Console | 03:27 | Python một dòng, khối Python, `init python` và Developer Console |

## Module 02 - Variables in Python

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 003 | Strings | 06:41 | Chuỗi ký tự, ghép chuỗi, dialogue interpolation và tên người chơi |
| 004 | Numbers: Integers, Floats | 03:36 | `int`, `float`, phép toán, điểm hảo cảm và tài nguyên |
| 005 | Logical Variables: Booleans | 04:37 | `True`, `False`, event flags và mở/khóa nội dung |

## Module 03 - Data Structures in Python

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 006 | Lists: Ordered Collection | 05:49 | List có thứ tự, `append`, membership và inventory |
| 007 | Sets: Unordered Collection | 05:25 | Set không trùng lặp, unlocks, achievements và endings |
| 008 | Dictionaries: Lookup Table Using Keys | 04:44 | Key-value lookup, affection nhiều nhân vật và bảng trạng thái |

## Module 04 - Python Statements

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 009 | Conditionals: If | 08:17 | `if`, `elif`, `else`, `and`, `or`, `not`, menu có điều kiện |
| 010 | Loops: For, While | 05:22 | `for`, `range`, `while`, điều kiện dừng và minigame |
| 011 | Looping Over Iterables: Lists, Sets, Dictionaries | 06:14 | Lặp qua list/set/dict, `.items()` và tìm điểm cao nhất |

## Module 05 - Advanced Topics: Functions and Classes

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 012 | Functions | 06:23 | `def`, parameters, `return`, helper logic và gọi từ Ren'Py |
| 013 | Classes and Object-Oriented Programming | 08:13 | Class, object, `__init__`, methods và game components |

## Module 06 - Python Resources

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 014 | Course Conclusion and Next Steps | 00:26 | Tổng kết và tiếp tục luyện Python/Ren'Py |

## Cấu trúc tài nguyên đi kèm

```text
python-for-renpy-dev/
|-- python-for-renpy-dev.ipynb
|-- game/
|   |-- strings.rpy
|   |-- numbers.rpy
|   |-- booleans.rpy
|   |-- lists.rpy
|   |-- sets.rpy
|   |-- dictionaries.rpy
|   |-- conditional.rpy
|   |-- loop.rpy
|   |-- iterables.rpy
|   |-- functions.rpy
|   `-- classes.rpy
`-- project.json
```

## Phạm vi khóa học

Khóa học cung cấp nền tảng Python cần thiết để phát triển hệ thống Ren'Py nâng cao hơn: biến, cấu trúc dữ liệu, điều kiện, vòng lặp, hàm và class.

Khóa học không đi sâu thành module riêng về Screen Language, ATL animation, custom GUI, save/load tùy chỉnh, persistent data, backlog, auto/skip mode, CG gallery, map/calendar system, route manager hoàn chỉnh, inventory có giao diện, minigame kéo-thả/rhythm/chess, debugging nâng cao hoặc đóng gói phát hành.
