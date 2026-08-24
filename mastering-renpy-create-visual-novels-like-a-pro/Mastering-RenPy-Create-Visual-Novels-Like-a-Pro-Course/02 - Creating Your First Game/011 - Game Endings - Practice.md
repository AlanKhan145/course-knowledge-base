# 011 - Game Endings

## Module

Module 02 - Creating Your First Game

## Thời lượng

21 phút 27 giây

## Nội dung bài học

Bài học hoàn thiện hệ thống kết thúc của game. Ren'Py kiểm tra điểm quan hệ cuối game, các biến lựa chọn và flag sự kiện để xác định ending phù hợp: tình bạn, tình cảm với Alex, tình cảm với Emma hoặc tình cảm với Lily.

## Mục tiêu sau bài học

- Kiểm tra điểm quan hệ cuối game.
- Kiểm tra biến lựa chọn và flag sự kiện.
- Xác định nhân vật có điểm quan hệ cao nhất.
- Viết điều kiện phân nhánh cho từng ending.
- Đảm bảo mỗi route có kết quả khác nhau.

## Gợi ý logic ending

```renpy
label choose_ending:
    if lily_relationship > alex_relationship and lily_relationship > emma_relationship:
        jump lily_ending
    elif alex_relationship > emma_relationship:
        jump alex_ending
    elif emma_relationship > alex_relationship:
        jump emma_ending
    else:
        jump friendship_ending
```

## Việc cần làm trong Ren'Py

- [ ] Tạo label `choose_ending`.
- [ ] Tạo label `alex_ending`.
- [ ] Tạo label `emma_ending`.
- [ ] Tạo label `lily_ending`.
- [ ] Tạo label `friendship_ending`.
- [ ] Dùng điểm và flag để phân biệt kết thúc.
- [ ] Test từng ending.

## Kiểm tra nhanh

- [ ] Mỗi ending có đoạn kết riêng, không chỉ đổi tên nhân vật.
- [ ] Trường hợp hòa điểm có fallback rõ ràng.
- [ ] Route Lily có thể yêu cầu thêm `discovered_lily_secret` hoặc `mystery_letter_solved` nếu muốn chặt logic.
- [ ] Game kết thúc bằng `return` sau mỗi ending.

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
