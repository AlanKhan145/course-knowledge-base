# Đáp án và giải thích — Bài kiểm tra Creative Core VFX

Đây là đáp án cho bộ **16 câu hỏi tự luyện** trong `008-creative-core-vfx-quiz.md`, không phải đáp án bài quiz chính thức của Unity.

## 1. Đáp án trắc nghiệm

| Câu | Đáp án | Giải thích |
| --- | :---: | --- |
| 1 | B | Sương môi trường cần phát hạt đều, lifetime và alpha phù hợp. |
| 2 | C | Trạng thái ổn định xấp xỉ 20 × 3 = 60 hạt, nếu không bị giới hạn. |
| 3 | A | Shape xác định vùng phát và hướng ban đầu. |
| 4 | D | World simulation space dùng tọa độ thế giới cho hạt đã sinh. |
| 5 | B | Tuyết rơi chậm và dao động nhẹ theo gió. |
| 6 | C | Burst ở thời điểm 0 cho một sự kiện ngắn; rate liên tục bằng 0. |
| 7 | A | Looping hoặc Burst lặp có thể làm phát nhiều lần. |
| 8 | D | `Emit` và lịch Burst có thể cộng hạt nếu cùng kích hoạt. |
| 9 | B | Initialize gán trạng thái ban đầu. |
| 10 | A | Output quyết định việc biểu diễn/render particle. |
| 11 | C | Phải kiểm tra compute capability, pipeline và tính năng hỗ trợ trên target. |
| 12 | D | Property được expose có thể cấu hình cho instance. |
| 13 | B | Vật liệu/shader không tương thích pipeline thường gây hạt hồng. |
| 14 | A | Overdraw tăng khi nhiều quad trong suốt vẽ lên cùng pixel. |
| 15 | C | Hủy object chứa hệ hạt có thể làm effect bị cắt sớm. |
| 16 | D | Đo ở cùng điều kiện, nhất là trên build/hardware đích, cho so sánh tin cậy hơn. |

## 2. Rubric gợi ý cho tình huống thực hành

### 2.1. Đài phun nước

Bài đạt yêu cầu khi đề xuất:

- Đài phun: emission liên tục, Shape và velocity định hướng nước đi lên/rơi xuống.
- Splash: Burst theo sự kiện chạm nước, tuổi thọ ngắn, hạt tỏa khỏi điểm tiếp xúc.
- Chỉ phát splash sau khi hệ gameplay xác nhận chạm nước, tránh trigger lặp ngoài ý muốn.
- Thử liên tiếp nhiều lần, kiểm tra material/camera và đo chi phí khi đồng thời có nhiều splash.

### 2.2. Chọn công nghệ

Bài đạt yêu cầu khi giải thích:

- Dấu chân bụi: Particle System thường tiện nhờ chỉnh module và tích hợp gameplay.
- Bão hạt quy mô lớn trên PC: VFX Graph là ứng viên để khảo sát; không tự động đảm bảo nhanh hơn trong mọi cảnh.
- Graph có luồng xử lý Spawn → Initialize → Update → Output.
- Có ít nhất hai mức mật độ, giữ cố định camera, shader và môi trường đo; xem CPU/GPU frame time và chất lượng.
- Có điều kiện thay đổi quyết định khi GPU/compute hoặc pipeline không hỗ trợ, hoặc khi đo thấy overdraw/hiệu ứng không đạt yêu cầu.

## 3. Tài liệu tham chiếu

- [Unity 6.3 — Particle System modules](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/particle-system-modules)
- [Unity 6.3 — Visual Effect Graph](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/vfxgraph)
- [Unity — Best practices for profiling](https://activation.unity3d.com/how-to/best-practices-for-profiling-game-performance)
