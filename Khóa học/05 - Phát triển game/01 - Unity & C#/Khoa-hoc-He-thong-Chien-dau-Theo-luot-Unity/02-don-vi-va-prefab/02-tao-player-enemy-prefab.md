# Bài 5. Tạo Player và Enemy Prefab

> **Đối chiếu video gốc:** 05:07–08:37  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Đóng gói Unit thành Prefab có thể sinh động trong trận.
- Đặt Sprite con đúng vị trí để nhân vật đứng trên trạm.
- Cấu hình các chỉ số mẫu từ nội dung video.

## 1. Tạo kẻ địch

1. `GameObject` → `Create Empty`, đổi tên `Enemy`.
2. Reset Transform, đặt GameObject lên BattleStation để dễ quan sát.
3. Import Sprite và kéo vào làm **con** của `Enemy`.
4. Đổi local position của Sprite để chân nhân vật gần gốc của đối tượng.
5. Gắn `Unit.cs` vào **Enemy (gốc)**, không gắn nhầm vào Sprite con.
6. Điền các chỉ số trong Inspector và kéo Enemy từ Hierarchy sang Project để tạo Prefab.
7. Xóa instance tạm khỏi Scene.

## 2. Tạo người chơi

Thực hiện tương tự hoặc dùng một bản sao để tạo Prefab riêng, đổi Sprite và thông số.

### Giá trị mẫu theo video

| Trường | Enemy — The Rock | Player — Actual Rock |
|---|---:|---:|
| Level | 2 | 999 |
| Damage | 5 | 10 |
| Max HP | 30 | 25 |
| Current HP | 30 | 20 |

Tên và số liệu dùng để minh họa; có thể thay bằng nhân vật của dự án của bạn. Sprite trong video không đính kèm trong transcript.

## 3. Sơ đồ Prefab

```text
Enemy (Prefab)
├── Unit (script gắn trên root)
└── Visual (SpriteRenderer)

Player (Prefab)
├── Unit (script gắn trên root)
└── Visual (SpriteRenderer)
```

## 4. Lý do dùng Prefab

Thay vì cố định nhân vật trong một Scene, Prefab cho phép đổi đối thủ, tạo nhiều nhân vật, tái sử dụng script. Khi được sinh tại một `BattleStation`, đặt `localPosition = Vector3.zero` để căn đúng vị trí.

**Lỗi thường gặp:** `GetComponent<Unit>()` trả `null` khi script bị gắn ở Sprite con. Có thể chuyển Unit lên gốc hoặc thay cách lấy Component, nhưng trong khóa học này dùng **root** nhất quán.

## Thực hành và tự kiểm tra
- [ ] Có hai Prefab độc lập trong thư mục Project.
- [ ] Gắn Unit trên GameObject gốc của cả hai Prefab.
- [ ] Kiểm tra prefab Player bắt đầu với HP 20/25 và Enemy 30/30.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
