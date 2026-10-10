# Bài 04 — Tạo vật liệu Pipes cho ống dẫn kim loại

## 1. Tóm tắt

Ống cơ khí cần nổi bật so với lớp vỏ robot nhưng không nên bóng như gương hoàn toàn. Bài này xây dựng material `Pipes` với màu xám kim loại, Roughness biến thiên theo Noise và Bump đủ nhẹ để biểu diễn vết gia công hoặc vi nhám.

## 2. Mục tiêu học tập

- Chọn nhiều cụm ống liên thông trong một object.
- Tạo material Pipes bằng `Noise Texture`, `Color Ramp` và `Principled BSDF`.
- Dùng cùng một bản đồ cho Roughness và Bump với mức điều chỉnh khác nhau.
- Phân biệt độ bóng của ống với độ bóng của mắt và lớp vỏ.

## 3. Gán material cho ống

1. Chọn object chứa các ống trên đầu/thân robot.
2. Nhấn `Tab` vào `Edit Mode`, `Alt + A` bỏ chọn.
3. Di chuột lên từng đoạn ống và nhấn `L`; giữ vùng chọn khi chuyển tới ống tiếp theo.
4. Xoay cảnh kiểm tra cả các ống mặt bên và dưới đầu robot, tránh bỏ sót ống khuất.
5. Thêm slot và tạo material `Pipes`, bấm `Assign`.
6. Trở về `Object Mode` và mở `Shader Editor` của material mới.

Nếu một ống nằm trong object khác, hãy gán lại material ở object đó bằng cách chọn đúng slot `Pipes` từ danh sách material đã có; không nhất thiết tạo bản `Pipes.001` mới.

## 4. Xây dựng shader Pipes

### 4.1. Dùng Noise để thay đổi độ nhám

1. Thêm `Noise Texture` và `Texture Coordinate`.
2. Nối `Object → Noise Vector`; có thể dùng `Ctrl + T` qua Node Wrangler rồi bỏ node Mapping nếu không cần.
3. Đặt `Noise Scale = 3` và `Detail = 15` để bắt đầu.
4. Thêm `Color Ramp`; nối `Noise Fac → Color Ramp Fac`.
5. Đưa hai điểm ramp lại gần nhau để tăng độ tương phản, nhưng không ép tất cả thành đen trắng gắt.
6. Đổi đầu sáng thành **`#D9D9D9`** (xám sáng).
7. Nối đầu ra `Color Ramp` tới `Principled BSDF: Roughness`.

Bề mặt bóng/nhám sẽ thay đổi theo vùng. Những vùng xám sáng thường cho Roughness cao hơn vùng tối trong bản đồ dùng làm hệ số Roughness.

### 4.2. Thiết lập tính kim loại và màu cơ bản

- `Metallic = 1`.
- `Base Color = #9B9B9B`.
- Chỉnh `Color Ramp` cho đến khi ống vẫn phản xạ nhưng không quá chói.

Để tăng mức vi chi tiết trên ống, bài minh họa tăng `Noise Scale` từ khoảng `3` lên khoảng **`10–12`** ở giai đoạn tinh chỉnh. Scale lớn hơn thường khiến các mảng Noise nhỏ hơn trên cùng không gian tọa độ.

### 4.3. Thêm Bump nhẹ

Tách một nhánh từ `Color Ramp` đang điều khiển Roughness:

```text
Texture Coordinate:Object
     ↓
Noise Texture (Scale 3; có thể tăng 10–12, Detail 15)
     ↓
Color Ramp (đầu sáng #D9D9D9)
     ├──────────────→ Principled: Roughness
     └─→ Bump: Height (Strength 0.02)
                         ↓ Bump: Normal
                    Principled: Normal
Principled (Base Color #9B9B9B, Metallic 1) → Material Output
```

Nối qua `Bump: Height`, rồi lấy `Bump: Normal` đưa vào BSDF. Giá trị `Strength ≈ 0.02` giữ hiệu ứng rất nhẹ.

## 5. So sánh các vật liệu trên robot

| Vật liệu | Tính chất chủ đạo | Điểm khác biệt |
| --- | --- | --- |
| `Light Metal` | Kim loại với bẩn khe và vi nhám | Dùng AO + hai Noise |
| `Eyes` | Đen rất bóng | Roughness thấp, không cần Noise |
| `Plastic` | Nhựa tối bóng vừa | Voronoi biến dạng + Bump |
| `Pipes` | Ống xám kim loại | Noise điều khiển Roughness và Bump nhẹ |

Không nhất thiết các vật liệu phải có shader phức tạp như nhau. Mục tiêu là **mỗi nhóm chi tiết có đặc tính phản xạ dễ nhận biết**.

## 6. Thực hành và checkpoint

**Thực hành:** Gán `Pipes` cho tất cả đoạn ống có thể nhìn thấy trên model. Thử hai biến thể Noise Scale `3` và `12`; so sánh độ dày của vân và cách nó ảnh hưởng đến bóng phản xạ.

**Checkpoint:** `Pipes` có màu xám, phản xạ sáng rõ nhưng không quá mịn; khi phóng to thấy gồ ghề nhẹ. Các chi tiết mắt và nhựa không bị đổi material. Lưu file `mech_04_pipes.blend`.

### 6.1. Lỗi thường gặp

| Lỗi | Cách xử lý |
| --- | --- |
| Ống trông như nhựa | Kiểm tra `Metallic = 1` |
| Ống bóng như gương, lóa | Chỉnh ramp Roughness về giá trị sáng hơn |
| Ống quá nhám toàn bộ | Giảm Roughness trung bình qua ramp |
| Vết Bump nổi rõ, xấu | Kiểm tra `Strength ≈ 0.02` |
| Một vài ống giữ vật liệu cũ | Chọn đúng face hoặc object và gán `Pipes` |

## 7. Câu hỏi ôn tập

**Câu 1.** Bản đồ Noise được nối đến đầu vào nào để thay đổi độ bóng của ống theo từng vùng?

A. `Camera Lens`.  
B. `World Output`.  
C. `Roughness`.  
D. `Film Transparent`.

**Đáp án: C.** Roughness nhận giá trị điều chỉnh độ rộng phản xạ trên bề mặt.

**Câu 2.** Với cùng tọa độ, tăng Noise Scale từ 3 lên 12 thường có tác dụng gì?

A. Hình mẫu Noise dày/nhỏ hơn.  
B. Tự tạo thêm bốn ống.  
C. Tắt Metallic.  
D. Tăng số mẫu render.

**Đáp án: A.** Scale cao hơn làm mẫu Noise biến đổi nhanh hơn trong không gian.

**Câu 3.** Muốn vật liệu ống phản xạ giống kim loại thay vì điện môi, đặt gì ở Principled?

A. Emission Strength = 50.  
B. Film = Transparent.  
C. Motion Blur = On.  
D. Metallic = 1.

**Đáp án: D.** Giá trị Metallic này xác định cách phản xạ kiểu kim loại trong shader.

**Câu 4.** Bump Strength nào được dùng như tham khảo để ống chỉ gồ ghề rất nhẹ?

A. `2`.  
B. `0.02`.  
C. `15`.  
D. `5000`.

**Đáp án: B.** Sức mạnh 0.02 là mức nhẹ trong thực hành vật liệu ống.

**Câu 5.** Một đoạn ống thuộc object khác chưa có `Pipes`. Nên làm gì?

A. Xóa object đó.  
B. Chuyển nó thành đèn.  
C. Chọn các face ống và gán material `Pipes` đã tạo.  
D. Tăng số đèn Point.

**Đáp án: C.** Material có thể được tái sử dụng qua material slot trên object khác.

## 8. Tổng kết

Material `Pipes` dùng màu kim loại xám, Noise điều khiển Roughness và Bump nhẹ. Bạn có thể tùy chỉnh độ chi tiết vân mà không cần texture ảnh hay thao tác UV phức tạp trong phạm vi bài này.
