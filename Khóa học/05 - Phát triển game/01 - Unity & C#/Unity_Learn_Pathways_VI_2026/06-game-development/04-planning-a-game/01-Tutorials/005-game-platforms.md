---
title: "Game Platforms"
pathway: "Game Development"
module: "Planning a game"
lesson_number: 5
lesson_type: "tutorial"
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/planning-a-game?version=6.3"
language: "vi"
content_type: "Biên tập học liệu tiếng Việt từ tệp do người dùng cung cấp"
---

# Bài 05 — Game Platforms

> **Nguồn và phạm vi:** Bản biên tập tiếng Việt dựa trên tệp hướng dẫn người dùng cung cấp, vốn được tự biên soạn từ đề mục công khai. Phần ví dụ, bảng và sơ đồ được bổ sung để học tập; **không phải bản dịch chính thức, transcript hay câu hỏi quiz chính thức của Unity**.

**Bài gốc để đối chiếu:** [Unity Learn — Planning a game](https://learn.unity.com/pathway/game-development/unit/planning-a-game?version=6.3)

## 1. Chọn nền tảng phát hành từ đầu

Platform ảnh hưởng đến điều khiển, tỷ lệ màn hình, hiệu năng, cách build và cách kiểm thử. **Build target** trong Unity không tự bảo đảm sản phẩm chạy tốt trên mọi thiết bị của nền tảng đó.

## 2. So sánh định hướng thiết kế

| Nền tảng | Input điển hình | Điều cần cân nhắc |
|---|---|---|
| PC | Bàn phím, chuột, gamepad | Độ phân giải, UI và cấu hình khác nhau |
| Mobile | Chạm, cử chỉ, cảm biến | Màn hình nhỏ, pin, nhiệt, vùng chạm |
| Web | Bàn phím, chuột, chạm tùy thiết bị | Dung lượng tải, trình duyệt, bộ nhớ |
| Console | Gamepad | Quy chuẩn nền tảng, hiệu năng, chứng nhận |
| XR | Bộ điều khiển và tương tác không gian | Sự thoải mái, hiệu năng, khả năng đọc UI |

## 3. Quy trình chọn platform

```mermaid
flowchart LR
 A[Người chơi mục tiêu] --> B[Thiết bị họ dùng]
 B --> C[Input và UI]
 C --> D[Giới hạn kỹ thuật]
 D --> E[Bản build thử]
 E --> F[Kiểm tra trên thiết bị đích]
```

## 4. Thực hành trong Unity

1. Xác định một **nền tảng chính** cho MVP; ghi rõ input mong muốn.
2. Thiết kế UI ở kích thước hiển thị gần với thiết bị đích (kiểm tra Canvas Scaler và vùng an toàn nếu áp dụng).
3. Vào **File → Build Profiles** trong các bản Unity 6 hiện hành, chọn và cấu hình target thích hợp; tên menu có thể khác tùy phiên bản.
4. Tạo một bản build thử, kiểm tra tốc độ khung hình và khả năng điều khiển trên thiết bị thực.
5. Ghi lại các giới hạn chưa xử lý, không suy ra từ Game view rằng bản phát hành đã đạt.

**Đầu ra:** bảng quyết định platform, một ảnh cấu hình build và biên bản thử nghiệm.

## 5. Checklist hoàn thành

- [ ] Nêu được mục tiêu và ít nhất hai khái niệm cốt lõi của bài.
- [ ] Có sản phẩm thực hành hoặc câu trả lời minh chứng.
- [ ] Ghi lại kết quả mong đợi, kết quả thực tế và bằng chứng.
- [ ] Đối chiếu giao diện, package và hướng dẫn với phiên bản Unity đang sử dụng.

---
*Ghi chú: vị trí menu và khả năng hỗ trợ platform có thể thay đổi giữa các phiên bản Unity. Các dữ liệu, con số trong ví dụ là giả định phục vụ học tập, không phải kết quả đo thực tế.*
