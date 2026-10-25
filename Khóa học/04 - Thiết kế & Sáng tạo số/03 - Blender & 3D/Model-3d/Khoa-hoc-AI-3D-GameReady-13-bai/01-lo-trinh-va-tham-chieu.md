---
title: "Bài 01 — Toàn cảnh quy trình và chuẩn bị concept"
course: "AI 3D Character — Từ hình tham chiếu đến Game-Ready"
lesson: 1
source_type: "Biên soạn tiếng Việt từ bản ghi video do người học cung cấp"
video_segment: "00:06–02:51"
format: "Markdown"
---

# Bài 01 — Toàn cảnh quy trình và chuẩn bị concept

> **Vị trí trong video:** 00:06–02:51 · **Đầu vào:** bản ghi tiếng Việt do người học cung cấp.  
> **Phạm vi:** tái cấu trúc nội dung video thành bài thực hành; không phải phụ đề nguyên văn hay tài liệu chính thức của nhà cung cấp công cụ.

## Mục tiêu học tập

- Mô tả được đầu ra game-ready: mesh tối ưu, UV, texture, rig và trình diễn trong engine.
- Quyết định A-pose/T-pose và tách vũ khí trước khi sinh 3D.
- Lập danh sách những phần cần làm riêng.

## Nội dung bài học

### 1. Đích đến của dự án

Video dùng một nhân vật **Queen of Hearts** mặc giáp, có tóc, phụ kiện và vũ khí để minh họa cách biến concept AI thành nhân vật 3D sử dụng trong trò chơi. Vẻ ngoài đẹp **chưa đủ**: nhân vật còn phải chỉnh sửa được, tiết kiệm hình học, có bản đồ bề mặt, gắn xương và biến dạng hợp lý khi cử động.

```mermaid
flowchart LR
 A[Concept 2D] --> B[Phân rã và tạo mesh 3D]
 B --> C[Lắp ráp và sculpt]
 C --> D[Low-poly và retopology]
 D --> E[UV và baking]
 E --> F[Texture và PBR]
 F --> G[Rig và weight paint]
 G --> H[Unreal Engine]
```

### 2. Chuẩn bị ảnh tham chiếu

1. Xác định kiểu tạo hình: giáp kim loại, trang phục vải, tóc, mắt, vũ khí.
2. Chỉnh ảnh concept về **tư thế trung tính**; A-pose và T-pose đều có thể dùng, tùy rig/animation mục tiêu. Người hướng dẫn trong bản ghi ưu tiên **A-pose**.
3. Chuẩn bị hình nhân vật trên nền sạch, dễ phân biệt đường biên và tỷ lệ; cố gắng không để vũ khí che tay hoặc thân.
4. Tách vũ khí thành tham chiếu/đối tượng riêng.
5. Nếu hình bị mơ hồ, tạo thêm góc nhìn cho từng phần trước khi sinh mesh.

### 3. Cách viết prompt hình tham chiếu

Đây là **prompt minh họa được biên soạn**, không phải câu lệnh nguyên văn của video:

```text
Create a full-body turnaround-ready character reference from this design.
Neutral A-pose, arms slightly away from the torso, visible hands and fingers.
Keep costume details, colors and proportions consistent.
Plain white background, evenly lit, no perspective exaggeration.
Remove the weapon from the character image; present it separately.
```

### 4. Điều cần nhớ

AI có thể sinh hình 2D rất bắt mắt nhưng vẫn thiếu góc khuất, ngón tay, mặt sau phụ kiện hoặc độ liền mạch vật lý. Tài liệu tham chiếu tốt giúp giảm lỗi ở toàn bộ quy trình sau.

## Bài thực hành và tiêu chí hoàn thành

- [ ] Lưu 1 ảnh A-pose toàn thân và 1 ảnh vũ khí riêng.
- [ ] Liệt kê các chi tiết độc lập: đầu, tóc, giáp, quần, găng tay, cổ áo, mắt, vũ khí.
- [ ] Tạo cấu trúc thư mục `references/`, `meshes_high/`, `meshes_low/`, `textures/`, `rig/`, `engine/`.

## Tự kiểm tra

1. **Vì sao pose trung tính quan trọng?**  
   *Gợi ý đáp án:* Giúp việc dựng, đặt khớp và skinning thuận lợi hơn.
2. **Có nên gộp vũ khí vào thân người?**  
   *Gợi ý đáp án:* Không; nên tách để rig, cầm/nắm và thay vũ khí dễ hơn.

## Ghi chú học tập

- Lưu bản `.blend` phiên bản mới trước các thao tác phá hủy như remesh, áp modifier hoặc join mesh.
- Các số poly, thông số bake và công cụ trong video là **ví dụ theo nhân vật Queen of Hearts**, không phải chuẩn bắt buộc cho mọi dự án.
- Tên tính năng có thể khác giữa phiên bản phần mềm; khi bản ghi tự động nhận sai tên, khóa học giữ khái niệm kỹ thuật và nêu những chỗ cần đối chiếu giao diện.
