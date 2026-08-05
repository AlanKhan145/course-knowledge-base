# Syllabus

## Thông tin tổng quan

| Nội dung | Thông tin |
| --- | --- |
| Tên khóa học | Mastering Ren'Py: Create Visual Novels Like a Pro |
| Chủ đề | Lập trình visual novel bằng Ren'Py |
| Giảng viên | Arsen Sheikhulislamov |
| Cấp độ | Người mới bắt đầu |
| Số module | 2 |
| Số bài giảng | 15 |
| Thời lượng | khoảng 2 giờ 11 phút |
| Ngôn ngữ | Tiếng Anh |
| Phụ đề | Tiếng Anh tự động |
| Cập nhật | Tháng 1/2025 |

Khóa học không yêu cầu kinh nghiệm lập trình trước đó. Người học cần máy tính Windows hoặc macOS có kết nối Internet để tải Ren'Py và các phần mềm cần thiết.

## Module 01 - Installation and Interface of Ren'Py

Thời lượng: khoảng 13 phút.

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 001 | Downloading Ren'Py | 00:57 | Tải Ren'Py từ trang chính thức và chọn bản phù hợp hệ điều hành |
| 002 | Installing Ren'Py | 01:21 | Cài đặt Ren'Py, xử lý cảnh báo bảo mật và chạy lần đầu |
| 003 | Launcher Interface | 08:05 | Tạo/quản lý project, mở script, chỉnh GUI, preferences và build/export |
| 004 | Installing the VS Code Editor | 02:49 | Cài VS Code và mở project Ren'Py để chỉnh script |

Ghi chú: Udemy còn hiển thị mục `First Project` không có thời lượng; mục này nhiều khả năng là tài nguyên hoặc project mẫu đi kèm, không phải video độc lập.

## Module 02 - Creating Your First Game

Thời lượng: khoảng 1 giờ 59 phút.

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 001 | Creating Your First Visual Novel Game | 12:43 | Mở đầu game, nhân vật, dialogue, sprite, audio, biến quan hệ và lựa chọn |
| 002 | Implementing the Relationship Status Screen | 04:25 | Screen tùy chỉnh hiển thị điểm Alex và Emma |
| 003 | First Day at the Academy | 11:20 | Giới thiệu Alex/Emma, lựa chọn đầu tiên và phân nhánh route |
| 004 | Next Day: Conflict between Alex and Emma | 08:54 | Scene tranh cãi, menu 3 lựa chọn và thay đổi điểm quan hệ |
| 005 | Evening Encounter Scene | 12:00 | Scene buổi tối, flag lời khen, thông báo và hậu quả lựa chọn |
| 006 | Adding a Third Character: Lily | 10:09 | Thêm Lily, sprite/expression, điểm quan hệ và route mới |
| 007 | Clash of Interests | 07:32 | Xung đột ba nhân vật và thay đổi nhiều biến cùng lúc |
| 008 | Deepening Scenes with Lily: The Secret Side of Her Personality | 07:51 | Scene thư viện ban đêm, bí mật của Lily và lựa chọn phản ứng |
| 009 | Mini-Game: "Mystery Letter" | 13:17 | Caesar Cipher, 3 lần thử, kiểm tra đáp án bằng Python |
| 010 | Lily Clashes with Alex and Emma | 09:03 | Xung đột cuối, lựa chọn giải quyết và chuẩn bị điều kiện ending |
| 011 | Game Endings | 21:27 | Kiểm tra điểm/flag và tạo ending Alex, Emma, Lily, tình bạn |

## Project cuối khóa

Project là một visual novel học đường có cấu trúc route đơn giản:

```text
Bắt đầu game
  -> Ngày đầu tại học viện
  -> Xung đột Alex - Emma
  -> Cuộc gặp buổi tối
  -> Lily xuất hiện
  -> Xung đột giữa ba nhân vật
  -> Khám phá bí mật của Lily
  -> Minigame giải mã bức thư
  -> Xung đột cuối
  -> Kiểm tra điểm quan hệ
     -> Ending Alex
     -> Ending Emma
     -> Ending Lily
     -> Ending tình bạn
```

Các biến lõi:

```renpy
default alex_relationship = 0
default emma_relationship = 0
default lily_relationship = 0
```

## Phạm vi khóa học

Khóa học tập trung vào một project mẫu hoàn chỉnh, không phải tài liệu Ren'Py toàn diện. Nội dung mạnh ở cú pháp Ren'Py cơ bản, nhân vật, hội thoại, sprite, scene, âm thanh, menu lựa chọn, biến quan hệ, screen tùy chỉnh, cốt truyện phân nhánh, minigame Python đơn giản và nhiều kết thúc.

Các chủ đề chưa thấy trong chương trình công khai: save/load tùy chỉnh, CG gallery, replay scene, inventory, quest, map chọn địa điểm, ngày đêm hoàn chỉnh, lịch hẹn nhân vật, affection UI nâng cao, ATL chuyên sâu, Live2D, route lớn quy mô thương mại, phát hành Steam hoặc itch.io.
