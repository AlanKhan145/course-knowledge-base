---
title: "Set up your 2D game world"
pathway: "Game Development"
module: "Create a basic 2D game"
lesson_number: 2
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai và tài liệu người dùng cung cấp"
coverage: "outline_based_not_official_transcript"
---

# Bài 02 — Thiết lập thế giới game 2D (Set up your 2D game world)

> **Nguồn đối chiếu:** [Unity Learn — Create a basic 2D game](https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3). Đây là tài liệu học tập tự biên soạn, không phải bản dịch hay transcript chính thức.

## Mục tiêu

- Nắm được kỹ năng **thiết lập thế giới game 2d** và vai trò của nó trong game 2D.
- Thực hiện ví dụ trong Unity Editor và xác minh ở Play Mode.
- Tìm được ít nhất một lỗi có thể tái hiện và cách khắc phục.

## Kiến thức nền

- `Scene` là không gian bố trí GameObject; mỗi GameObject có các `Component` được chỉnh qua Inspector.
- `SpriteRenderer` hiển thị hình 2D; `Sorting Layer` và `Order in Layer` điều khiển thứ tự vẽ.
- Tương tác 2D sử dụng `Rigidbody2D`, `Collider2D` và callbacks như `OnTriggerEnter2D`.

## Kiểm thử và ghi chép

Ghi rõ **kết quả mong đợi → kết quả thực tế → ảnh hoặc Console → nhận xét**. Kiểm tra tham chiếu Inspector, trạng thái GameObject và cách cấu hình Input/Physics khi Play Mode không cho kết quả như dự đoán.

## Checklist

- [ ] Có scene chạy thử và không có lỗi nghiêm trọng trong Console.
- [ ] Kiểm tra được thay đổi một tham số trong Inspector tác động ra sao.
- [ ] Lưu ảnh/video minh chứng và tự giải thích một lỗi.
- [ ] Đối chiếu bài gốc Unity Learn nếu cần các bước, tài nguyên chính thức.

---

## 9. Thiết kế một scene 2D có tổ chức

Gợi ý tổ chức đối tượng trong `Hierarchy` (tên do người học đặt):

```text
GameScene
├── Main Camera (Orthographic)
├── Background (SpriteRenderer)
├── Player (SpriteRenderer, Rigidbody2D, Collider2D)
├── SpawnManager
├── GameManager
└── Canvas
    ├── ScoreText
    └── GameOverPanel
```

### Quy trình chuẩn bị

1. Tạo dự án 2D; lưu scene trong `Assets/Scenes`.
2. Import sprite rồi đặt `Texture Type: Sprite (2D and UI)`; kiểm tra `Pixels Per Unit`.
3. Đặt camera ở vị trí quan sát chính, sử dụng **Orthographic**.
4. Kiểm tra `Sorting Layer` để nền không che nhân vật.
5. Với nhân vật dùng vật lý 2D, thêm `Rigidbody2D` và collider **2D**; không trộn với `Rigidbody`/collider 3D.

**Thử nghiệm:** thay `Order in Layer` của nền và nhân vật, dự đoán đối tượng nào sẽ được vẽ phía trước, rồi kiểm tra ở Game view.
