# Capstone — Trứng nở và vỏ trứng vỡ

Project này kết hợp những phần sát nhất với mục tiêu animation trứng nở: Rigid Body, Particle Systems và Forcefields. Cloth, Soft Body, Fire/Smoke hoặc Liquid là phần mở rộng tùy shot.

## Mục tiêu shot

Tạo một animation dài tối thiểu 120 frame với các nhịp:

```text
01–35   Quả trứng đứng yên, có chuyển động rất nhẹ
36–55   Vết nứt xuất hiện và lan rộng
56–75   Các mảnh vỏ tách khỏi nhau
76–100  Mảnh vỏ bung ra nhiều hướng, có bụi nhỏ
101–120 Nhân vật hoặc ánh sáng bên trong lộ ra
```

## Cấu trúc scene

```text
SCENE
├── EGG_SHELL_PASSIVE_OR_ACTIVE
├── EGG_SHELL_PIECES_RIGID_BODY
├── INNER_CHARACTER
├── DEBRIS_PARTICLES
├── FORCE_FIELDS
├── COLLISION_GROUND
├── CAMERA
└── LIGHTS
```

## Quy trình thực hiện

### 1. Chuẩn bị vỏ trứng

- Tách vỏ thành các mảnh có hình dạng dễ kiểm soát.
- Kiểm tra normals, origin và scale từng mảnh.
- Dùng collision shape đơn giản trong giai đoạn thử.
- Đặt một ground hoặc object đỡ làm Passive Rigid Body nếu cần.

### 2. Tạo nhịp nứt

Có thể dùng keyframe, shape key hoặc một lớp Dynamic Paint để tạo dấu nứt. Việc nứt là phần hình ảnh; việc mảnh vỏ tách và bay là phần vật lý. Tách hai nhiệm vụ giúp solver dễ ổn định hơn.

### 3. Thiết lập Rigid Body

- Chọn Active cho các mảnh cần bị solver điều khiển.
- Chọn collision shape phù hợp với silhouette và chi phí tính.
- Đặt mass tương đối nhất quán giữa các mảnh.
- Điều chỉnh friction, restitution và damping để tránh trượt hoặc rung quá mức.
- Dùng Deactivation khi mảnh đã ổn định.
- Cache đoạn ngắn trước, sau đó mới cache toàn bộ shot.

### 4. Tạo lực bung

Đặt một Force field hoặc Vortex nhẹ tại vùng nứt. Dùng Turbulence rất thấp để các mảnh không bay theo cùng một hướng. Thêm Drag để giảm tốc sau khi mảnh đã bung ra.

```text
Lực hướng ra ngoài
        +
Vortex nhẹ
        +
Turbulence nhỏ
        +
Drag để hãm
        ↓
Mảnh vỏ bung tự nhiên hơn
```

### 5. Bổ sung debris bằng particle

Dùng particle cho bụi, mảnh rất nhỏ hoặc vụn vỏ ở hậu cảnh. Điều khiển velocity và rotation theo vùng nứt. Không nên dùng một particle system thay cho mọi mảnh vỏ lớn vì collision và silhouette sẽ khó kiểm soát.

### 6. Nhân vật bên trong

Giữ nhân vật ẩn hoặc nằm trong vỏ cho đến khi các mảnh bắt đầu tách. Dùng keyframe đơn giản hoặc Soft Body/Cloth tùy nhu cầu. Ưu tiên silhouette đọc rõ từ camera trước khi thêm solver phụ.

### 7. Camera và render

- Khóa camera ở shot đầu tiên để debug vật lý.
- Khi simulation ổn định, mới thêm camera move.
- Dùng ánh sáng tương phản vừa đủ để thấy vết nứt và các mảnh vỏ.
- Render preview ở độ phân giải thấp trước khi render final.

## Checklist nghiệm thu

- [ ] Mảnh vỏ có scale và origin đúng.
- [ ] Vết nứt xuất hiện trước khi mảnh bung.
- [ ] Không có mảnh xuyên ground rõ ràng.
- [ ] Mảnh không rung vô hạn sau khi rơi.
- [ ] Hướng bay có variation nhưng vẫn nằm trong camera.
- [ ] Debris nhỏ không che nhân vật.
- [ ] Cache có thể xóa và tái tạo.
- [ ] Shot dài tối thiểu 120 frame.
- [ ] Có render preview và ghi chú thông số.

## Các lỗi thường gặp

| Hiện tượng | Nguyên nhân có thể | Cách thử |
|---|---|---|
| Mảnh xuyên nhau | Collision shape quá đơn giản hoặc scale sai | Apply Scale, đổi shape, tăng quality |
| Mảnh rung tại chỗ | Restitution/damping chưa phù hợp | Giảm độ nảy, bật deactivation |
| Tất cả mảnh bay cùng hướng | Lực chính quá mạnh, thiếu variation | Giảm strength, thêm turbulence nhẹ |
| Mảnh bay khỏi khung | Force field quá lớn | Giảm falloff, thêm drag hoặc chặn hướng |
| Debris xuất hiện quá dày | Count hoặc lifetime quá cao | Giảm count, giới hạn vùng phát |
| Nhân vật bị che | Vỏ và debris chiếm silhouette | Giảm số mảnh ở tiền cảnh, chỉnh camera |

## Tiêu chí hoàn thành

Một shot đạt khi người xem nhận ra rõ ba nhịp: **nứt**, **bung**, **lộ nhân vật**. Simulation không cần tuyệt đối chính xác về mặt vật lý, nhưng phải nhất quán, đọc được trong camera và có thể chỉnh sửa lại mà không làm hỏng toàn bộ scene.

