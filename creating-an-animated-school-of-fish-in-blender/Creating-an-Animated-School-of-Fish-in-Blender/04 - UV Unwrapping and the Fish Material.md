# 04 — UV Unwrapping và Material cho cá

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | UV & Shading |
| **Thời điểm** | 08:17–11:45 |
| **Chủ đề chính** | Project from View, Image Texture, Gamma/Tint, ColorRamp Metallic, Bump |

## 1. Mục tiêu bài học

- UV unwrap nhanh mesh cá bằng phương pháp **Project from View**, phù hợp với mesh đơn giản có ảnh tham chiếu sẵn.
- Dùng chính ảnh tham chiếu cá làm texture Base Color.
- Xây dựng thêm các lớp shading: tối màu bằng Gamma, thêm tint xanh, và dùng ColorRamp điều khiển Metallic + Bump để làm nổi bật độ óng ánh của vảy.

## 2. Nội dung chính

**UV Unwrap bằng Project from View.** Vì mesh đã được block-out gần đúng theo góc nhìn của ảnh tham chiếu, cách unwrap nhanh nhất là: vào Edit Mode, chọn tất cả đỉnh (`A`), nhấn `U` (menu UV) và chọn **"Project from View (Bounds)"** — phương pháp này chiếu UV theo đúng góc nhìn hiện tại của viewport, khớp gần như hoàn hảo với ảnh tham chiếu đã dùng để model. Tác giả có thử phương pháp **Unwrap thông thường** để so sánh nhưng nhận thấy kết quả bị chia UV sai cách (kể cả sau khi thử Pack Islands) — kết luận rằng với trường hợp mesh đơn giản, gần phẳng như thế này, **Project from View cho kết quả tốt hơn nhiều** so với Unwrap tiêu chuẩn, dù có thể cần xoay/tinh chỉnh nhẹ sau đó.

**Material cơ bản.** Tạo Material mới, đặt tên "fish". Trong Shader Editor, thêm node **Image Texture**, nạp chính ảnh cá đã dùng làm tham chiếu, nối vào **Base Color** của Principled BSDF. Sau khi UV khớp đúng (nhờ Project from View), texture hiển thị đúng vị trí trên mesh.

**Tinh chỉnh màu sắc.** Thêm node **Gamma**, đặt giá trị khoảng **1.2** để làm tối bớt texture gốc một chút. Thêm node **Mix Color**, đặt chế độ **Multiply**, dùng một màu **xanh lam ngả xanh lá (blue-green tint)**, với hệ số Factor khoảng **0.7** (tác giả cân nhắc giảm thêm để không quá xanh) — mục đích là nhân màu tint này với texture gốc để cá có tông màu lạnh hợp với môi trường nước, thay vì giữ nguyên màu ảnh tham chiếu chụp trên cạn.

**ColorRamp điều khiển Metallic.** Thêm một node **Color Ramp**, đưa texture (ảnh cá gốc) vào đầu vào Fac của nó. Đặt **kiểu nội suy (Interpolation) của Color Ramp thành "Cardinal"** — một trong các kiểu nội suy có sẵn của Blender, tạo độ chuyển **dốc/gắt** giữa các điểm màu (khác với Linear mượt đều). Đặt điểm tối (stop đầu) ở khoảng **34-35%**, điểm sáng (stop cuối) ở khoảng **55%** — tạo một dải chuyển đổi hẹp, dốc. Đầu ra màu của Color Ramp này được nối vào **Metallic** của Principled BSDF — ý tưởng là chỉ những vùng texture đủ sáng (thường là các vệt phản chiếu ánh sáng tự nhiên trên ảnh vảy cá) mới được đánh dấu là kim loại/phản chiếu mạnh, giúp làm nổi bật **độ óng ánh đặc trưng của vảy cá** một cách có chọn lọc thay vì phủ Metallic đều toàn thân.

**Bump map cho kết cấu vảy.** Thêm node **Bump**, lấy **đầu ra màu của Color Ramp** (đã dùng cho Metallic) làm đầu vào **Height** của Bump node — tái sử dụng cùng một dữ liệu tương phản để vừa điều khiển độ phản chiếu vừa tạo độ gồ ghề vi mô. Đặt **Strength của Bump khoảng 3** để làm nổi rõ kết cấu vảy. Nối đầu ra **Normal** của Bump node vào đầu vào **Normal** của Principled BSDF. Cuối cùng, **Roughness** tổng thể được đặt ở mức khá thấp, khoảng **0.05** (tác giả tự nhận xét có thể hơi thấp và cân nhắc tăng nhẹ sau khi xem trong ngữ cảnh cảnh hoàn chỉnh).

**Chốt mesh trước khi rig.** Sau khi hoàn thiện material, tác giả **Apply Mirror modifier** — không bắt buộc về mặt lý thuyết (Mirror có thể giữ nguyên dạng modifier), nhưng làm vậy giúp các bước sau (đặc biệt là gắn Armature và Weight Paint ở các chương tiếp theo) dễ thao tác hơn vì mesh đã là một khối hoàn chỉnh, đối xứng thật sự thay vì "ảo" qua modifier. **Subdivision Surface modifier vẫn được giữ nguyên dạng modifier** (không Apply), vì nó chỉ ảnh hưởng đến độ mượt hiển thị/render, không cần thiết phải cố định thành mesh thật.

## 3. Quy trình thực hành gợi ý

1. Vào Edit Mode, chọn tất cả (`A`), nhấn `U > Project from View (Bounds)` để UV unwrap theo đúng góc nhìn tham chiếu.
2. Tạo Material "fish", thêm node Image Texture với ảnh cá, nối vào Base Color.
3. Thêm Gamma (~1.2) để tối màu, thêm Mix Color (Multiply) với tint xanh lam-xanh lá, Factor ~0.7 (tinh chỉnh theo cảm quan).
4. Thêm Color Ramp, đưa texture gốc vào Fac, đặt Interpolation = Cardinal, hai điểm dừng ở khoảng 34-35% và 55%.
5. Nối đầu ra Color Ramp vào Metallic của Principled BSDF.
6. Thêm node Bump, dùng cùng đầu ra Color Ramp làm Height, Strength ~3, nối Normal ra Principled BSDF Normal.
7. Đặt Roughness tổng thể ~0.05 (tinh chỉnh lại khi xem trong ngữ cảnh cảnh hoàn chỉnh).
8. Apply Mirror modifier (giữ nguyên Subdivision Surface modifier), chuẩn bị mesh sẵn sàng cho bước rig.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Mở menu UV (Edit Mode) | `U` |
| Project from View (Bounds) | Menu UV > Project from View (Bounds) |
| Mở UV Editor | Đổi Editor Type sang UV Editor |
| Thêm node trong Shader Editor | `Shift + A` |
| Đổi Interpolation của Color Ramp | Panel Color Ramp > dropdown Interpolation (Linear/Ease/Cardinal/B-Spline/Constant) |
| Apply modifier | `Ctrl + A` khi hover trên modifier |

## 5. Lưu ý & lỗi thường gặp

- Unwrap tiêu chuẩn (Smart UV/Unwrap thường) có thể cho kết quả UV bị chia sai với mesh đơn giản gần phẳng như cá block-out — Project from View thường là lựa chọn nhanh và chính xác hơn trong trường hợp này, dù không tổng quát cho mọi loại mesh.
- Interpolation "Cardinal" trên Color Ramp tạo chuyển màu dốc/gắt hơn Linear — nếu độ phản chiếu Metallic trông quá "vá miếng" hoặc thiếu tự nhiên, thử tăng khoảng cách giữa hai điểm dừng hoặc đổi lại Linear.
- Roughness quá thấp (gần 0) trên toàn bộ thân có thể khiến vật liệu trông như nhựa/kim loại bóng loáng thay vì da cá tự nhiên — cần xem lại trong ngữ cảnh ánh sáng thực tế của cảnh, đúng như tác giả đã tự lưu ý.
- Việc Apply Mirror modifier là bước một chiều (mất khả năng chỉnh sửa qua modifier) — chỉ nên làm sau khi đã hài lòng hoàn toàn với hình dạng đối xứng của mesh.

## 6. Checklist thực hành

- [ ] Đã UV unwrap mesh cá bằng Project from View và xác nhận texture khớp đúng vị trí.
- [ ] Đã xây dựng material với Base Color từ ảnh tham chiếu, Gamma tối màu và tint xanh.
- [ ] Đã dùng Color Ramp (Cardinal) để điều khiển Metallic có chọn lọc theo độ sáng texture gốc.
- [ ] Đã thêm Bump map tái sử dụng dữ liệu Color Ramp để tạo kết cấu vảy.
- [ ] Đã Apply Mirror modifier, giữ nguyên Subdivision Surface, sẵn sàng cho bước rig.

## 7. Tóm tắt

Việc tận dụng lại chính ảnh tham chiếu làm texture, kết hợp Project from View cho UV nhanh và một chuỗi node đơn giản (Gamma, tint, Color Ramp tái sử dụng cho cả Metallic lẫn Bump) là cách hiệu quả để có một material cá "đủ thuyết phục" mà không cần vẽ texture PBR chuyên sâu — chuẩn bị mesh sẵn sàng để chuyển sang bước rig bằng Armature ở chương tiếp theo.
