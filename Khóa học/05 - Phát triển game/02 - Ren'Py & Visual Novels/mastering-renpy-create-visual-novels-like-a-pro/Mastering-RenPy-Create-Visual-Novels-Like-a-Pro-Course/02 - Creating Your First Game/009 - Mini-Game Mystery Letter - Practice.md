# 009 - Mini-Game: Mystery Letter

## Module

Module 02 - Creating Your First Game

## Thời lượng

13 phút 17 giây

## Nội dung bài học

Bài học tích hợp minigame "Mystery Letter" vào visual novel. Người chơi giải một bức thư mã hóa bằng Caesar Cipher, có tối đa ba lần thử. Logic Python kiểm tra đáp án và kết quả có thể ảnh hưởng điểm quan hệ hoặc nội dung truyện.

## Mục tiêu sau bài học

- Tích hợp minigame vào luồng visual novel.
- Dùng Python để kiểm tra đáp án.
- Giới hạn số lần thử.
- Xử lý hai kết quả: giải đúng và hết lượt.
- Dùng kết quả minigame để mở hoặc khóa nội dung.

## Ghi chú script

```renpy
default mystery_letter_solved = False

# Ý tưởng logic:
# attempts = 3
# while attempts > 0:
#     answer = renpy.input("Your answer:")
#     if answer.strip().lower() == correct_answer:
#         mystery_letter_solved = True
#         break
#     attempts -= 1
```

## Việc cần làm trong Ren'Py

- [ ] Viết nội dung bức thư mã hóa.
- [ ] Chọn đáp án đúng.
- [ ] Tạo vòng thử tối đa 3 lần.
- [ ] Xử lý khi người chơi giải đúng.
- [ ] Xử lý khi người chơi hết lượt.
- [ ] Thêm hình ảnh hoặc âm thanh cho minigame.

## Kiểm tra nhanh

- [ ] Đáp án đúng được nhận diện dù người chơi viết hoa/thường khác nhau.
- [ ] Hết 3 lần thử thì thoát minigame rõ ràng.
- [ ] Biến `mystery_letter_solved` ảnh hưởng scene sau.

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
