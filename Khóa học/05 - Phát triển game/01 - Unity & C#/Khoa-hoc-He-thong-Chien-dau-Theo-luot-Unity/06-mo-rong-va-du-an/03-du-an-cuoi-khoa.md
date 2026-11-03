# Bài 17. Capstone: hoàn thiện game chiến đấu theo lượt

> **Đối chiếu video gốc:** 28:00–29:06 (gợi ý nâng cấp cuối video)  
> **Phạm vi:** Đề bài và rubric do biên soạn; dựa trên các gợi ý mở rộng ở cuối video.

## Mục tiêu học tập
- Hoàn thiện một bản demo 1v1 chạy ổn định.
- Áp dụng ít nhất một cải tiến về AI, UI hoặc animation.
- Tập viết báo cáo ngắn về cấu trúc, test và giới hạn sản phẩm.

## 1. Đề bài

Tạo một Scene Unity có hai nhân vật, thanh HP, tên, cấp độ, hộp thoại và hai nút hành động. Hệ thống phải hỗ trợ vòng lặp chuẩn:

`START → PLAYERTURN → ENEMYTURN → PLAYERTURN → ... → WON/LOST`.

## 2. Yêu cầu bắt buộc

- [ ] Spawn hai nhân vật từ Prefab tại hai BattleStation.
- [ ] Hiển thị đúng tên, level, HP hiện tại/HP tối đa.
- [ ] Player có Attack và Heal(+5).
- [ ] Enemy có Attack tự động.
- [ ] Mỗi hành động được xử lý một lần; không spam được.
- [ ] Kết thúc thắng/thua hợp lệ và ngừng nhận thao tác.
- [ ] Hoàn thành TC01–TC08 của bài 14.

## 3. Chọn ít nhất một phần nâng cao

- **AI:** khi HP thấp, Enemy có thể Heal nhưng ưu tiên kết liễu Player.
- **Trình bày:** animation tấn công, hồi máu và số damage nổi.
- **Nội dung:** cho phép chọn 1 trong 2 Prefab Enemy khi vào trận.
- **UI:** thêm nút Retry hoặc màn giới thiệu nhân vật.

Các phần này là thử thách thêm, không bắt buộc trong video nguồn.

## 4. Hồ sơ bàn giao

```text
TurnBasedBattleDemo/
├── Assets/
│   ├── Scripts/Unit.cs
│   ├── Scripts/BattleHUD.cs
│   ├── Scripts/BattleSystem.cs
│   ├── Prefabs/Player.prefab
│   ├── Prefabs/Enemy.prefab
│   └── Scenes/Battle.unity
└── README.md   # Mô tả thao tác, ảnh minh họa, danh sách test
```

## 5. Thang đánh giá gợi ý (100 điểm)

| Tiêu chí | Điểm |
|---|---:|
| Setup, Spawn, dữ liệu Unit | 20 |
| State machine và chuyển lượt | 25 |
| Attack, Heal, kết thúc trận | 25 |
| HUD và phản hồi rõ ràng | 15 |
| Kiểm thử, cải tiến và tài liệu | 15 |

## 6. Hướng phát triển tiếp

Nếu muốn đi từ prototype đến game dài hạn, hãy tách `BattleAction` thành dữ liệu kỹ năng, dùng event cho UI, có hệ thống chọn mục tiêu, nhiều Unit và save/load. Đừng thêm tất cả khi vòng lặp cơ bản chưa ổn định.

## Thực hành và tự kiểm tra
- [ ] Nộp được Scene Unity chạy được với 2 Prefab và 3 Script.
- [ ] Báo cáo kết quả TC01–TC08.
- [ ] Chọn ít nhất một mục nâng cao và mô tả thay đổi.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
