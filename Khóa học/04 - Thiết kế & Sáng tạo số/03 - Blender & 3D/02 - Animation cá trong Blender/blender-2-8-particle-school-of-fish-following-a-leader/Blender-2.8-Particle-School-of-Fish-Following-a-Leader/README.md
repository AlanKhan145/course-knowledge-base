# Tạo đàn cá bơi theo thủ lĩnh bằng Particle System trong Blender 2.8

Khóa học thực hành ngắn hướng dẫn cách tạo một đàn cá bằng **Particle System** và **Boids** trong Blender 2.8. Cá được phát ra từ một **Single Vertex**, sử dụng một mô hình cá làm đối tượng nhân bản, sau đó di chuyển theo một vật thể dẫn đầu.

- **Chủ đề:** Particle System, Boids, Flock, Follow Leader
- **Phiên bản mục tiêu:** Blender 2.8
- **Thời lượng nội dung gốc:** khoảng 14 phút
- **Đối tượng:** người mới đã biết các thao tác Blender cơ bản
- **Nguồn nội dung:** transcript do người dùng cung cấp; bản dịch máy đã được chuẩn hóa theo thuật ngữ Blender trong phạm vi có thể suy ra từ ngữ cảnh

## Kết quả đạt được

Sau khóa học, người học có thể:

- Dựng một mô hình cá đơn giản, nhẹ và phù hợp để nhân bản.
- Tạo hệ thống hạt phát ra từ một đỉnh duy nhất.
- Dùng Particle System để hiển thị nhiều bản sao của mô hình cá.
- Chuyển hạt sang vật lý Boids.
- Thiết lập Flock, Avoid Collision và Follow Leader.
- Hoạt hình hóa vật thể Leader.
- Làm mượt chuyển động của Leader trong Graph Editor.
- Thiết lập camera, ánh sáng và render cảnh cuối.

## Cấu trúc khóa học

| # | Bài học | Thời điểm | Nội dung |
|---|---|---:|---|
| [01](01%20-%20Intro%20and%20Project%20Overview.md) | Giới thiệu dự án | 00:00–00:36 | Mục tiêu và quy trình tổng thể |
| [02](02%20-%20Modeling%20the%20Fish.md) | Dựng mô hình cá | 00:36–02:13 | Cube, loop cut, chỉnh đuôi, subdivision |
| [03](03%20-%20Creating%20a%20Single%20Vertex%20Emitter.md) | Tạo emitter một đỉnh | 02:13–04:07 | Single Vertex và Particle System |
| [04](04%20-%20Configuring%20the%20Particle%20System.md) | Cấu hình hạt | 04:07–05:25 | Boids, khối lượng và Instance Object |
| [05](05%20-%20Setting%20Up%20Boids%20Behavior.md) | Thiết lập hành vi đàn | 05:25–06:59 | Flock và Avoid Collision |
| [06](06%20-%20Creating%20and%20Tuning%20the%20Leader.md) | Tạo và tinh chỉnh Leader | 06:59–10:08 | Follow Leader và chuyển động tự nhiên |
| [07](07%20-%20Animating%20and%20Cleaning%20the%20Leader.md) | Hoạt hình Leader | 10:08–13:45 | Auto Keying, Graph Editor, Decimate Keys |
| [08](08%20-%20Camera%20Lighting%20and%20Final%20Render.md) | Hoàn thiện cảnh | 13:45–14:13 | Camera, vật liệu, ánh sáng và render |

## Lộ trình thực hành

```text
Mô hình cá
    ↓
Single Vertex Emitter
    ↓
Particle System
    ↓
Boids Physics
    ↓
Flock + Avoid Collision
    ↓
Leader + Follow Leader
    ↓
Animation và Graph Editor
    ↓
Camera, ánh sáng và render
```

## Thông số khởi đầu trong bài học

Các giá trị dưới đây là điểm bắt đầu theo transcript, không phải giá trị bắt buộc cho mọi cảnh:

| Nhóm | Giá trị gợi ý |
|---|---|
| Particle Count | 100 |
| Frame Start | -250 |
| End | 500 |
| Lifetime | khoảng 1.000 frame |
| Physics | Boids |
| Mass | khoảng 0,2 kg |
| Render As | Object |
| Instance Object | Fish |

## Thuật ngữ đã chuẩn hóa

Một số cụm trong transcript bị nhận dạng sai. Trong tài liệu này, chúng được hiểu là:

- “hệ hạt” → **Particle System**
- “vật lý Newton” → **Newtonian Physics**; trong phần đàn cá, thiết lập cần dùng là **Boids**
- “một đỉnh duy nhất” → **Single Vertex**
- “đối tượng thể hiện hạt” → **Instance Object**
- “bầy đàn” → **Flock**
- “theo người dẫn đầu” → **Follow Leader**
- “trình chỉnh sửa đường cong” → **Graph Editor**
- “giảm số lượng khóa” → **Decimate Keys**

## Checklist tổng thể

- [ ] Dựng được mô hình cá đơn giản.
- [ ] Tạo được Single Vertex Emitter.
- [ ] Tạo Particle System với khoảng 100 hạt.
- [ ] Hiển thị cá bằng Instance Object.
- [ ] Chuyển Physics sang Boids.
- [ ] Bật Flock và Avoid Collision.
- [ ] Tạo vật thể Leader.
- [ ] Gán Leader cho hành vi Follow Leader.
- [ ] Hoạt hình hóa Leader bằng keyframe.
- [ ] Làm mượt chuyển động trong Graph Editor.
- [ ] Đặt camera, ánh sáng và render kết quả.

## Bài tập cuối khóa

Tạo một cảnh đàn cá dài ít nhất 200 frame với các yêu cầu:

- Có tối thiểu 100 con cá.
- Cá phát ra từ một điểm hoặc một vùng nhỏ.
- Đàn cá tránh chồng lấn quá mức.
- Có một Leader được hoạt hình hóa qua ít nhất ba vị trí.
- Chuyển động của Leader không có các cú giật lớn.
- Có camera và một thiết lập ánh sáng cơ bản.

