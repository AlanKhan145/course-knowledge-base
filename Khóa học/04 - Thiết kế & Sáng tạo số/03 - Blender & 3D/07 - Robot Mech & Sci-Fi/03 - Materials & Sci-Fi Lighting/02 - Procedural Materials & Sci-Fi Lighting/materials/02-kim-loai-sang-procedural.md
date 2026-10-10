# Bài 02 — Tạo vật liệu Light Metal bằng Procedural Shader Nodes

## 1. Tóm tắt

Bề mặt kim loại cơ khí đẹp không chỉ là tăng `Metallic` lên 1. Kim loại cần phân bố vùng sáng–tối, vết mòn nhẹ ở khe, sự thay đổi vi mô của độ nhám và độ gồ ghề. Bạn sẽ tạo vật liệu `Light Metal` bằng những node có sẵn: `Ambient Occlusion`, `Noise Texture`, `Color Ramp`, node trộn màu, `Bump` và `Principled BSDF`.

## 2. Mục tiêu học tập

- Phân biệt vai trò của `Base Color`, `Metallic`, `Roughness` và `Normal`.
- Dùng `Ambient Occlusion` tạo mặt nạ cho vùng khuất/khe.
- Dùng hai lớp `Noise Texture` để tạo biến thiên bề mặt với mức độ khác nhau.
- Kết hợp bản đồ màu/độ cao bằng `Color Ramp`, `Mix` và `Bump`.
- Phân phối một material sang nhiều object và xác nhận object chủ động.

## 3. Nguyên lý tạo kim loại cũ tự nhiên

`Principled BSDF` quyết định phản xạ vật lý cơ bản của vật liệu. `Metallic = 1` chuyển bề mặt sang cách phản xạ của kim loại. `Roughness` càng thấp, điểm phản chiếu càng sắc; càng cao, phản chiếu càng trải rộng. `Normal` mô tả hướng vi bề mặt để tạo cảm nhận sần, không tự thêm hình học thật.

Hệ thống procedural trong bài dùng hai tầng hiệu ứng:

1. **Tầng khe khuất:** `Ambient Occlusion` cho biết vùng kín, được phối với Noise để mép/khe có vết tối không quá đều.
2. **Tầng mòn nhẹ:** Noise thứ hai trải trên bề mặt, pha tối vào tầng đầu nhằm tránh kim loại quá phẳng, đồng nhất.

Cuối cùng, một bản đồ được dùng cho màu, một nhánh cho độ nhám và một nhánh đi qua `Bump` để tạo biến thiên normal.

## 4. Tạo material và chuẩn bị Node Wrangler

1. Chọn phần đầu robot trong `Object Mode`.
2. Chuyển sang workspace `Shading` và mở `Shader Editor`.
3. Nhấn `New` để tạo material, đổi tên thành `Light Metal`.
4. Bật `Node Wrangler` bằng cách tìm công cụ/add-on/extension theo phiên bản Blender đang dùng.
5. Dùng `Ctrl + Shift + Click` lên node để xem trước đầu ra, nếu tính năng xem trước Node Wrangler hiện có.

`Shift + A` → `Search` là cách ổn định để thêm node. Có thể dùng `Ctrl + T` với một số texture node trong Node Wrangler để thêm `Texture Coordinate` và `Mapping`; nếu không cần biến đổi riêng, xóa `Mapping` và nối `Object` của `Texture Coordinate` trực tiếp vào `Vector` của `Noise Texture`.

## 5. Tạo mặt nạ Ambient Occlusion

### 5.1. Xây dựng vùng khuất

1. Thêm node `Ambient Occlusion`.
2. Thêm `Color Ramp` và nối đầu ra của AO vào `Fac` của Color Ramp.
3. Xem trước `Color Ramp`; kéo điểm đen về khoảng **Position ≈ 0.5** để nhấn mạnh tương phản vùng khuất (có thể tinh chỉnh theo mesh).
4. Quan sát vùng tiếp giáp, rãnh, chi tiết chồng lớp: những nơi này nên có khác biệt về sắc độ.

`Ambient Occlusion` không thay thế cho bóng đổ vật lý của nguồn sáng; trong bài, nó được dùng như tín hiệu procedural để điều khiển màu.

### 5.2. Thêm Noise cho vùng khe

1. Thêm `Noise Texture` và `Color Ramp` thứ hai.
2. Thêm `Texture Coordinate`, nối `Object → Vector` của Noise.
3. Đặt Noise tham khảo: `Scale = 3`, `Detail = 15`, `Roughness ≈ 0.6`.
4. Kéo các điểm của Color Ramp để tăng tương phản, đổi đầu tối sang một sắc xám sẫm thay vì đen tuyệt đối. Giá trị được mô tả cho vùng xám tối là **xấp xỉ `#363636`**.
5. Thêm node trộn màu (`Mix RGB` hoặc `Mix Color` tùy phiên bản).

Kết hợp để AO điều khiển nơi Noise ảnh hưởng:

```text
Ambient Occlusion ─→ Color Ramp (mặt nạ AO) ─→ Factor của Mix
Texture Coordinate:Object ─→ Noise (Scale 3) ─→ Color Ramp (xám) ─→ Color 1
                                                           Mix: Color 2 = trắng
                                                           ↓
                                                     Kết quả vùng khe
```

Khi mặt nạ AO được nối vào `Factor`, vùng có hệ số thấp thiên về `Color 1`, vùng có hệ số cao thiên về `Color 2`. Hãy quan sát trực tiếp trước khi đảo ramp hoặc đảo màu: cần đạt mục tiêu **Noise nổi rõ ở vùng khuất, bề mặt thoáng ít bị bẩn**.

## 6. Tạo lớp hao mòn phụ

Lớp Noise thứ hai không nên mạnh bằng lớp khe. Nó tạo biến thiên tinh tế trên toàn bộ bề mặt.

1. Thêm một `Noise Texture` mới; nối chung `Texture Coordinate:Object`.
2. Đặt `Scale = 2`, `Detail = 15`.
3. Thêm `Color Ramp` với hai sắc xám: đầu tối `#7F7F7F`, đầu sáng `#BFBFBF`.
4. Dùng node trộn tiếp theo ở chế độ `Darken` để ưu tiên giữ các vùng tối khi trộn với kết quả từ bước 5.
5. Điều chỉnh `Factor`; giá trị minh họa là **1**.

```text
Nhánh A: Mặt nạ vùng khe + Noise 1 ──┐
                                       ├─→ Mix / Darken ─→ bản đồ màu kim loại
Nhánh B: Noise 2 → Color Ramp xám ───┘
```

Nếu vật liệu trông như bị phủ bẩn khắp nơi, giảm chênh lệch giữa hai đầu ramp hoặc điều chỉnh cách trộn. Vi chi tiết kim loại nên thấy rõ khi nhìn gần, nhưng không phá hỏng hình khối khi nhìn xa.

## 7. Nối sang Principled BSDF

1. Nối kết quả trộn cuối vào `Base Color`.
2. Đặt `Metallic = 1`.
3. Xem lại vật liệu ở chế độ `Rendered` dưới HDRI: các vùng sáng được phản chiếu rõ hơn.
4. Nếu vật liệu trông như nhựa, xác nhận đúng BSDF đang nối tới `Material Output`, kiểm tra `Metallic` và nguồn phản xạ HDRI.

### 7.1. Tạo Bump đúng kiểu dữ liệu

Không nối trực tiếp bản đồ màu vàng/đen trắng vào cổng `Normal` của `Principled BSDF`. Dùng node `Bump` để chuyển bản đồ độ cao thành tín hiệu normal:

```text
Bản đồ xám / Color Ramp ─→ Bump: Height
                            Bump: Normal ─→ Principled BSDF: Normal
```

Sau khi nối, độ gồ ghề thường quá mạnh. Giảm `Strength` xuống **khoảng 0.06** để kết quả tinh tế. `Bump` chỉ thay đổi phản ứng ánh sáng trên bề mặt; nó không làm thay đổi silhouette của mesh.

### 7.2. Điều khiển Roughness theo vùng

1. Tách thêm một nhánh từ kết quả trộn màu tối.
2. Nối vào một `Color Ramp` mới, rồi tới `Roughness`.
3. Chỉnh đầu đen/trắng để một số vùng phản chiếu sắc, một số vùng phản chiếu rộng hơn.
4. So sánh khi xoay góc nhìn dưới HDRI.

```text
Bản đồ trộn cuối ──┬─→ Base Color
                   ├─→ Color Ramp ─→ Roughness
                   └─→ Bump: Height → Bump: Normal ─→ BSDF: Normal
Principled BSDF (Metallic = 1) ─→ Material Output
```

## 8. Bảng thông số tham khảo

| Thành phần | Giá trị | Mục đích |
| --- | --- | --- |
| AO Color Ramp | Black Position khoảng `0.5` | Tăng tương phản vùng khe |
| Noise 1 | Scale `3`, Detail `15`, Roughness `0.6` | Tạo vân bẩn ở vùng khuất |
| Color Ramp Noise 1 | Màu xám tối xấp xỉ `#363636` | Giữ vết bẩn không đen gắt |
| Noise 2 | Scale `2`, Detail `15` | Tạo vi biến thiên toàn bề mặt |
| Color Ramp Noise 2 | `#7F7F7F` → `#BFBFBF` | Màu xám tương phản thấp |
| Mix lớp sau | `Darken`, Factor `1` | Trộn ưu tiên vùng tối |
| Principled | Metallic `1` | Vật liệu kim loại |
| Bump | Strength `0.06` | Tạo sần nhẹ |
| Roughness | Bản đồ qua Color Ramp | Thay đổi độ bóng theo vị trí |

Các giá trị như `Detail = 15` được sử dụng trong bài thực hành minh họa; giới hạn và biểu hiện tham số có thể khác tùy phiên bản node.

## 9. Áp dụng Light Metal lên các object khác

1. Trong `Object Mode`, chọn các bộ phận robot cần cùng `Light Metal`.
2. Giữ `Shift` và chọn object đã có material **cuối cùng**, để nó trở thành **active object**.
3. Nhấn `Ctrl + L` → `Link Materials`.
4. Kiểm tra các object đích đã có vật liệu tương ứng.
5. Nhấn `Ctrl + S` và lưu thành `mech_02_metal.blend`.

**Phân biệt quan trọng:** `Link Materials` làm các object dùng chung datablock material. Khi bạn sửa shader chung, tất cả object dùng material đó cũng thay đổi. Muốn tạo một phiên bản chỉnh riêng, cần tạo bản sao material thay vì sửa trực tiếp bản dùng chung.

## 10. Thực hành, checkpoint và lỗi thường gặp

**Bài thực hành:** Tạo một mẫu `Light Metal` có ít nhất hai lớp Noise, vùng khuất nhấn nhẹ và Roughness không đồng đều. Áp dụng lên tối thiểu ba object robot.

**Checkpoint:** Ở góc nhìn gần, các rãnh có sắc độ ngẫu nhiên; bề mặt có chút gồ ghề. Khi xoay camera, phản xạ HDRI lướt trên kim loại, không giống nhựa màu xám.

| Lỗi | Nguyên nhân / hướng kiểm tra |
| --- | --- |
| Normal bị lỗi, đổ bóng kỳ lạ | Đang nối màu trực tiếp vào `Normal`; chuyển qua `Bump: Height` |
| Vân Noise kéo giãn | Kiểm tra `Texture Coordinate:Object` và tỷ lệ mesh |
| Bề mặt quá sần | Hạ `Bump Strength` xuống quanh `0.06` |
| Chỉnh vật liệu mà toàn robot cùng đổi | Các object cùng link một material datablock |
| Không thấy vết bẩn vùng khe | Kiểm tra hướng Color Ramp AO, Factor và đầu màu của node Mix |
| Texture trông đồng nhất | Thử điều chỉnh thang Noise và khoảng cách giữa hai tay nắm Color Ramp |

## 11. Câu hỏi ôn tập

**Câu 1.** Muốn tạo phần bẩn tập trung ở khe thay vì phủ đều toàn vật thể, thành phần nào phù hợp để điều khiển vùng trộn?

A. `Motion Blur`.  
B. `Ambient Occlusion`.  
C. `Film Transparent`.  
D. `Camera Clipping`.

**Đáp án: B.** AO tạo tín hiệu về những vùng bị che khuất, có thể dùng làm mask của Mix.

**Câu 2.** Vân độ cao nên đi qua node nào trước khi vào `Principled BSDF: Normal`?

A. `World Output`.  
B. `Mix Shader`.  
C. `Emission`.  
D. `Bump`.

**Đáp án: D.** Bump chuyển bản đồ độ cao thành tín hiệu normal phù hợp với shader.

**Câu 3.** Tham số nào trực tiếp làm phản xạ kim loại sắc nét hay mờ rộng hơn?

A. `Roughness`.  
B. `Frame Rate`.  
C. `Resolution X`.  
D. `Film Transparent`.

**Đáp án: A.** Roughness điều khiển độ tán xạ phản chiếu trên bề mặt.

**Câu 4.** Khi `Link Materials`, việc sửa shader của material chung sẽ làm gì?

A. Chỉ thay đổi object được chọn đầu tiên.  
B. Tự tạo một bản material độc lập cho từng object.  
C. Thay đổi mọi object dùng cùng datablock.  
D. Tự chuyển tất cả material thành nhựa.

**Đáp án: C.** Các object được liên kết cùng material datablock nên chia sẻ sự thay đổi.

**Câu 5.** Vật liệu quá gồ ghề sau khi thêm Bump: thao tác hợp lý nhất là gì?

A. Tăng `Metallic` vượt 1.  
B. Giảm `Bump Strength`.  
C. Xóa World.  
D. Tăng Frame Rate.

**Đáp án: B.** Strength quyết định mức độ hiệu ứng gồ ghề do Bump tạo ra.

## 12. Tổng kết

`Light Metal` kết hợp phản xạ kim loại vật lý với hai lớp Noise, AO tại các khe, bản đồ Roughness và Bump nhẹ. Đây là vật liệu nền cho phần lớn robot và là điểm khởi đầu để tạo biến thể kim loại tối.
