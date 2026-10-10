# Lab tổng hợp. Dựng đầu robot Mech từ đầu đến cuối

## 1. Tổng quan

Tái dựng một đầu robot khoa học viễn tưởng theo bộ ba ảnh tham chiếu. Bài thực hành tổng hợp yêu cầu kết hợp mọi kỹ thuật đã học: ảnh trực giao, Mirror, Knife, Extrude, Inset, Bevel, normals, Curve, Bridge Edge Loops, UV Sphere, Snap to Face và dọn topology.

## 2. Mục tiêu

- Xây dựng silhouette đầu đối xứng và căn tỷ lệ trong ba góc nhìn.
- Tạo hốc mặt, khoang đáy và các panel giáp.
- Tạo phụ kiện có chiều sâu: ống, mắt, ốc, antenna.
- Kiểm tra và bàn giao file `.blend` có thể chỉnh sửa tiếp.

## 3. Chuẩn bị

Có Blender, bộ ảnh tham chiếu trước/bên/trên và một thư mục dự án chứa file `.blend`. Nếu ảnh không thể hiện mặt sau hoặc đáy, chỉ thêm chi tiết tối thiểu có tính hợp lý về hình học; không khẳng định vị trí của chi tiết không nhìn thấy.

## 4. Nhiệm vụ theo milestone

### 4.1. Milestone A — Căn tỷ lệ

1. Thêm đủ ba ảnh tham chiếu và đồng bộ tâm.
2. Dựng khối đầu với silhouette chính.
3. Tạo Mirror và kiểm tra đường giữa không có khe hở.

**Checkpoint:** Khối đầu khớp trước, bên, trên ở mức hình dạng lớn.

### 4.2. Milestone B — Cấu trúc đầu

1. Dùng Knife tạo các mặt riêng ở gáy, đùn vây/khung giáp.
2. Inset/Extrude tạo rãnh panel và khoang gắn cổ phía dưới.
3. Thêm Bevel thích hợp cho các mép kim loại.

**Checkpoint:** Tạo được kết cấu 3D thật, không chỉ vẽ họa tiết trên mặt phẳng.

### 4.3. Milestone C — Phụ kiện cơ khí

1. Tạo một cụm hình trụ/ống bên hông.
2. Tạo ít nhất một ống uốn cong bằng Curve, có chuyển đổi Mesh.
3. Tạo hốc mắt, viền và lõi mắt UV Sphere.
4. Tạo ốc vít low-poly và đặt bằng Face Snap.
5. Bổ sung antenna và ít nhất một tấm giáp phụ.

**Checkpoint:** Các bộ phận khớp nhau về chiều sâu, không xuyên nhau vô lý.

### 4.4. Milestone D — Hoàn thiện

1. Rà normals với Face Orientation.
2. Kiểm tra modifier và các thành phần bị nhân đôi sai.
3. Dọn vòng/đỉnh thừa nhưng không phá các mép định hình.
4. Lưu bản cuối `mech_head_part01_final.blend`.

**Checkpoint:** Có file cuối và ít nhất ba ảnh viewport thể hiện ba góc chính.

## 5. Tiêu chí đánh giá

| Tiêu chí | Trọng số |
| --- | ---: |
| Khớp silhouette và tỷ lệ đa góc nhìn | 25% |
| Kết cấu giáp, hốc và mép cơ khí có chiều sâu | 25% |
| Ống, mắt, antenna và ốc đặt hợp lý | 20% |
| Mirror, normals, bevel, topology sạch | 20% |
| File bàn giao dễ mở và dễ chỉnh sửa | 10% |

Mức điểm là rubric của bài thực hành tổng hợp, không phải thông số kỹ thuật bắt buộc của Blender.

## 6. Debug và checklist

- [ ] File `.blend` mở lại bình thường.
- [ ] Ảnh tham chiếu được căn theo Front/Side/Top.
- [ ] Origin và trục Mirror được kiểm tra.
- [ ] Đường giữa không bị hở hoặc chồng hình vô ý.
- [ ] Gáy có vây/khung, mặt có hốc mắt, đáy có khoang cổ.
- [ ] Các ống có bề dày và vị trí hợp lý.
- [ ] Bu lông/ốc vít bám theo mặt giáp.
- [ ] Antenna và tấm giáp phụ không cản silhouette.
- [ ] Không còn mặt hướng sai rõ ràng hoặc shading lỗi.
- [ ] Đã lưu bản cuối và ảnh chụp ba góc nhìn.

## 7. Câu hỏi ôn tập

### Câu 1

Một đầu robot bị hở một khe ở chính giữa. Bước chẩn đoán nào hợp lý nhất?

A. Tăng độ phân giải render.  
B. Thêm âm thanh.  
C. Kiểm tra Mirror, origin, Merge/Clipping và vị trí đỉnh biên.  
D. Thêm UV Sphere.

**Đáp án:** C

**Giải thích:** Khe giữa thường liên quan trực tiếp mặt phẳng đối xứng và chế độ hợp nhất đỉnh.

### Câu 2

Lệnh nào thích hợp để tạo một rãnh panel chìm?

A. Inset rồi Extrude âm.  
B. Chỉ Shade Smooth.  
C. Chỉ Duplicate.  
D. Chỉ Render.

**Đáp án:** A

**Giải thích:** Inset tạo đường viền và Extrude âm tạo chiều sâu thật.

### Câu 3

Tại sao nên dùng Curve Geometry cho ống trước khi Convert to Mesh?

A. Vì Curve tự rig robot.  
B. Vì Curve tự xuất MP4.  
C. Vì Curve loại bỏ việc cần căn ảnh.  
D. Vì có thể định hình đường đi và tạo tiết diện ống thuận tiện.

**Đáp án:** D

**Giải thích:** Curve tách bài toán đường đi khỏi bề dày, thuận lợi cho ống uốn.

### Câu 4

Khi cần đặt cùng một ốc trên nhiều mặt nghiêng, công cụ nào phù hợp?

A. Loop Cut.  
B. Face Snap kết hợp Align Rotation to Target.  
C. Video Sequence Editor.  
D. Weight Paint.

**Đáp án:** B

**Giải thích:** Bám theo mặt và hướng normal giúp các ốc theo bề mặt giáp.

### Câu 5

Đâu là sản phẩm bàn giao phù hợp với phạm vi thực hành?

A. Toàn robot đã rig.  
B. Video bước đi có âm thanh.  
C. File đầu robot đã dựng sạch và ảnh chụp kiểm tra.  
D. Bộ vật liệu PBR đầy đủ.

**Đáp án:** C

**Giải thích:** Phần thực hành chỉ bao phủ modeling phần đầu robot.
