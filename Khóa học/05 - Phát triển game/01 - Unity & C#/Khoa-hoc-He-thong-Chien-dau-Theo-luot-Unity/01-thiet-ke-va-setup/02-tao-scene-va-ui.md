# Bài 2. Thiết lập Scene, Canvas và Battle HUD

> **Đối chiếu video gốc:** 01:20–02:05; 03:10–03:20  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Thiết lập một Scene 2D tối giản.
- Tạo vùng hiển thị tên, cấp độ, thanh HP, hộp thoại và hai nút.
- Cài `Canvas Scaler` để giao diện thích ứng nhiều độ phân giải.

## 1. Tạo Scene

1. Mở Unity, tạo project 2D (hoặc dùng project 2D hiện có).
2. Trong Hierarchy, giữ `Main Camera`; chọn màu nền dễ nhìn.
3. Tạo `Canvas`; dưới Canvas tạo các GameObject giao diện như sơ đồ.

```text
Canvas
├── EnemyBattleHUD
│   ├── NameText      (UI Text hoặc TMP Text)
│   ├── LevelText     (UI Text hoặc TMP Text)
│   └── HPSlider      (UI Slider)
├── PlayerBattleHUD
│   ├── NameText
│   ├── LevelText
│   └── HPSlider
└── DialoguePanel
    ├── DialogueText
    ├── AttackButton
    └── HealButton
```

## 2. Tạo một HUD rồi nhân bản

- Tạo `Panel`/`Image` làm nền, `Text` hiển thị tên, `Text` hiển thị level, `Slider` hiển thị máu.
- Nhân bản `EnemyBattleHUD` thành `PlayerBattleHUD`, đặt ở hai vị trí khác nhau trong Scene.
- Với `Slider`, có thể tắt `Interactable` để người chơi không tự kéo thanh máu.

Video dùng `UnityEngine.UI.Text` (Legacy UI). Nếu dùng **TextMeshPro**, bạn cần đổi trường `Text` trong code thành `TMP_Text` và import `TMPro`; không trộn hai loại tùy tiện.

## 3. Tạo khung thoại

Dùng một `Image` làm nền, bên trong đặt `DialogueText` và hai Button **Attack**, **Heal**. Chưa cần gán sự kiện `OnClick` trong bài này.

## 4. Điều chỉnh nhiều kích thước màn hình

Chọn `Canvas` → `Canvas Scaler` → `UI Scale Mode` → **Scale With Screen Size**. Đặt `Reference Resolution` phù hợp thiết kế (ví dụ 1920 × 1080 đối với màn hình ngang). Dùng Anchor phù hợp để các HUD bám góc.

### Lỗi thường gặp

| Triệu chứng | Cách kiểm tra |
|---|---|
| Text biến mất | Kiểm tra màu chữ, độ trong suốt và thứ tự trong Canvas |
| UI dạt ra ngoài | Kiểm tra Anchor và Canvas Scaler |
| Nút không hoạt động | Đã có `EventSystem` chưa? (chức năng sẽ nối ở bài sau) |
| HP Slider nhìn ngược | Kiểm tra direction và phần Fill |

## Thực hành và tự kiểm tra
- [ ] Tạo đủ hai HUD và DialoguePanel.
- [ ] Thay đổi Game View từ tỉ lệ 16:9 sang một kích thước khác mà UI vẫn đọc được.
- [ ] Đặt tên chính xác từng GameObject để dễ kéo tham chiếu.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
