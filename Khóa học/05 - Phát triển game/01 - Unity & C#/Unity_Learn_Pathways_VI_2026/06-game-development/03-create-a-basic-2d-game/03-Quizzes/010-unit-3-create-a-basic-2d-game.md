---
title: "Unit 3 - Create a basic 2D Game"
pathway: "Game Development"
module: "Create a basic 2D game"
lesson_number: 10
lesson_type: quiz
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 10 — Unit 3 - Create a basic 2D Game

> **Pathway:** Game Development · **Mission:** Create a basic 2D game · **Loại:** quiz · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Create a basic 2D game trên Unity Learn](https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Xây dựng trò chơi và hình ảnh 2D. Trong ngữ cảnh *Create a basic 2D game*, bài **Unit 3 - Create a basic 2D Game** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **xây dựng trò chơi và hình ảnh 2d** trong dự án Unity.
- Tự trả lời câu hỏi và giải thích bằng ví dụ kiểm chứng trong Editor.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- SpriteRenderer vẽ ảnh 2D; Sprite Editor có thể tách sprite sheet thành nhiều sprite nhỏ.
- Rigidbody2D và Collider2D khác với hệ 3D; callbacks vật lý 2D dùng hậu tố 2D.
- Sorting Layer và Order in Layer quyết định thứ tự hiển thị sprite.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo scene 2D dùng camera Orthographic, đặt một Sprite làm nhân vật.
2. **Bước 2:** Thiết lập Pixels Per Unit, sorting layer và kiểm tra kích thước hiển thị.
3. **Bước 3:** Thêm Rigidbody2D/Collider2D nếu cần tương tác và kiểm tra vật thể ở Play mode.
4. **Bước 4:** Tạo một hoạt động nhặt vật hoặc né chướng ngại rồi ghi nhận sự kiện hoàn thành.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Câu hỏi ôn tập tự biên soạn (không phải quiz chính thức)

1. Kỹ năng cốt lõi trong bài này giải quyết vấn đề gì cho người chơi hoặc người làm dự án?
2. Trong nhóm kiến thức **xây dựng trò chơi và hình ảnh 2d**, đâu là thông số hoặc đối tượng cần kiểm tra đầu tiên?
3. Nếu kết quả ở Play mode không đúng, em sẽ xem xét Console, Inspector hay cấu hình dự án trước? Vì sao?
4. Nêu một trường hợp sử dụng thực tế và điều kiện để xác nhận đã hoàn thành.

### Gợi ý tự chấm

Một câu đạt khi có: **khái niệm đúng + lý do + ví dụ kiểm chứng**. Không cần lặp lại câu chữ lý thuyết; ưu tiên chứng minh bằng scene hoặc mã của chính em.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: trộn Collider 3D với Rigidbody2D hoặc sprite bị che do sorting layer.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Create a basic 2D game](https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.

---

## 8. Bộ câu hỏi ôn tập theo từng kỹ năng

Các câu hỏi dưới đây là **bộ tự luyện mới**, không phải quiz chính thức của Unity.

1. Vì sao phải dùng `Collider2D` thay vì `BoxCollider` 3D cho tương tác trong bài thực hành 2D?
2. Prefab khác GameObject instance trong scene ở điểm nào?
3. Tại sao tốc độ di chuyển dùng `Time.deltaTime` khi sửa `Transform`?
4. Nếu di chuyển đường chéo có tốc độ lớn hơn đi ngang, nên xử lý vector input thế nào?
5. Có những cách nào để đảm bảo obstacle được hủy khi ra khỏi màn hình?
6. Làm sao tránh cộng điểm nhiều lần cho cùng một vật phẩm?
7. Khi khởi động lại bằng `SceneManager.LoadScene`, cần chú ý `Time.timeScale` như thế nào?
8. Vì sao chạy đúng trong Editor chưa đủ chứng minh bản Web hoạt động tốt?

### Bài thực hành tổng kết

Tự xây dựng một scene 2D có Player điều khiển được, tối thiểu một Prefab chướng ngại với thuộc tính ngẫu nhiên, phát hiện va chạm, UI điểm và nút Restart. Nếu thực hiện được, build Web và lưu ảnh chứng minh.

| Tiêu chí | Đạt khi |
|---|---|
| Hình ảnh | Sprite hiện đúng, Sorting Layer không che sai |
| Điều khiển | Input phản hồi, tốc độ ổn định theo FPS |
| Sinh vật cản | Prefab được instantiate, có giới hạn và được dọn |
| Gameplay | Điểm cập nhật đúng, Game Over và Restart hoạt động |
| Build | Bản Web chạy trên trình duyệt, không lỗi nghiêm trọng |

