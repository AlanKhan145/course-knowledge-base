# Project Briefs

## Project chính - Academy Relationship Visual Novel

### Mục tiêu

Xây dựng một visual novel học đường ngắn có ba nhân vật chính: Alex, Emma và Lily. Người chơi đưa ra lựa chọn trong các scene quan trọng, thay đổi điểm quan hệ, giải một minigame và mở khóa một trong nhiều ending.

### Core loop

1. Đọc scene.
2. Gặp nhân vật.
3. Chọn phản ứng.
4. Điểm quan hệ hoặc flag thay đổi.
5. Scene sau phản ánh lựa chọn trước.
6. Cuối game kiểm tra trạng thái và chọn ending.

### Nhân vật

| Nhân vật | Vai trò | Trạng thái cần theo dõi |
| --- | --- | --- |
| Alex | Route tình cảm / lựa chọn chủ động | `alex_relationship` |
| Emma | Route tình cảm / lựa chọn cảm xúc | `emma_relationship` |
| Lily | Route thứ ba / bí mật cá nhân | `lily_relationship` |

### Biến lõi

```renpy
default alex_relationship = 0
default emma_relationship = 0
default lily_relationship = 0
default praised_alex = False
default praised_emma = False
default discovered_lily_secret = False
default mystery_letter_solved = False
```

### Scene chính

- Opening tại học viện.
- Ngày đầu gặp Alex và Emma.
- Xung đột Alex - Emma.
- Cuộc gặp buổi tối.
- Lily xuất hiện.
- Xung đột lợi ích giữa ba nhân vật.
- Scene thư viện ban đêm với bí mật của Lily.
- Minigame Mystery Letter.
- Xung đột cuối.
- Ending theo điểm quan hệ.

### Điều kiện hoàn thành

- Người chơi có thể đi từ start đến end không lỗi.
- Relationship screen hiển thị đủ ba nhân vật.
- Lựa chọn trong menu thay đổi điểm hoặc flag.
- Minigame có logic thắng/thua rõ ràng.
- Có ít nhất 4 ending: Alex, Emma, Lily, tình bạn.

## Project mở rộng sau khóa học

- Thêm gallery CG đơn giản.
- Thêm màn hình character profile.
- Thêm route phụ hoặc bad ending.
- Thêm bản build web để chia sẻ demo.
- Viết walkthrough ngắn cho từng ending.
