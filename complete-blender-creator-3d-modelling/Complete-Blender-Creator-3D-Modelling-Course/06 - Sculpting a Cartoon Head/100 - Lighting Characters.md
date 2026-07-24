# 100 — Lighting Characters

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Lighting Characters |
| **Thời lượng** | 10:26 |
| **Chủ đề chính** | Thiết lập ánh sáng ba điểm |

## 1. Mục tiêu bài học

- Hiểu nguyên lý ánh sáng ba điểm (three-point lighting): Key Light, Fill Light, Rim Light.
- Thiết lập một scene ánh sáng cơ bản trong Blender để làm nổi bật nhân vật vừa sculpt.
- Làm quen với các loại Light trong Blender (Point, Sun, Area, Spot) và khi nào nên dùng loại nào cho từng vai trò ánh sáng.
- Hiểu vai trò của World Background/HDRI trong việc bổ sung ánh sáng môi trường.

## 2. Nội dung chính

**Three-point lighting** là kỹ thuật chiếu sáng kinh điển trong nhiếp ảnh/điện ảnh, được áp dụng rộng rãi khi render chân dung nhân vật 3D:

- **Key Light (đèn chính)**: nguồn sáng mạnh nhất, đặt chếch khoảng 30-45 độ so với trục camera-nhân vật, thường hơi cao hơn tầm mắt nhân vật. Đây là nguồn sáng định hình khối chính và tạo bóng đổ chủ đạo. Thường dùng **Area Light** vì cho bóng đổ mềm, tự nhiên hơn Point Light.
- **Fill Light (đèn phụ)**: đặt ở phía đối diện Key Light, cường độ thấp hơn (thường bằng 1/3 đến 1/2 Key Light), có nhiệm vụ làm dịu bớt vùng bóng tối do Key Light tạo ra, giúp chi tiết trong vùng tối vẫn nhìn rõ mà không làm mất tương phản khối. Có thể dùng Area Light cường độ thấp hoặc thậm chí một mặt phẳng phản xạ (bounce card).
- **Rim Light (đèn viền/hắt sáng)**: đặt phía sau nhân vật, chếch một góc, chiếu ngược về phía camera để tạo viền sáng dọc theo cạnh silhouette (tóc, vai, tai, sừng), giúp tách nhân vật khỏi hậu cảnh và tăng chiều sâu. Thường dùng Spot Light hoặc Area Light nhỏ, cường độ vừa phải để không bị cháy sáng (overblown).

Ngoài ba đèn chính, có thể thêm một **World/HDRI** nhẹ làm ánh sáng môi trường nền (ambient), giúp các vùng bóng tối hoàn toàn không bị đen tuyệt đối (crushed blacks), tạo cảm giác tự nhiên hơn.

Khi thiết lập, nên kiểm tra bằng **Rendered Preview** (`Z` > Rendered) hoặc render thử với Eevee/Cycles để đánh giá tương tác ánh sáng với Material đã gán ở bài trước (đặc biệt là độ bóng mắt và sừng dưới Key Light).

## 3. Quy trình thực hành gợi ý

1. Đặt Camera ở góc nhìn chân dung mong muốn (thường hơi thấp hoặc ngang tầm mắt nhân vật).
2. Thêm một Area Light làm Key Light, đặt chếch 30-45 độ, hơi cao hơn nhân vật, cường độ mạnh nhất.
3. Thêm một Area Light thứ hai làm Fill Light, đối diện Key Light, cường độ thấp hơn (khoảng 1/3-1/2 Key).
4. Thêm một Spot/Area Light nhỏ phía sau làm Rim Light, chiếu ngược về camera để tạo viền sáng.
5. Thêm World background (màu đơn giản hoặc HDRI nhẹ) để bổ sung ánh sáng môi trường.
6. Chuyển sang Rendered Preview, tinh chỉnh cường độ (Power) và vị trí từng đèn cho đến khi khối mặt và các chi tiết (mắt, sừng) được làm nổi bật rõ ràng.
7. Render thử một khung hình để đánh giá tổng thể.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Chức năng |
|---|---|
| `Shift+A` > Light | Thêm nguồn sáng (Point/Sun/Spot/Area) |
| Light Data Properties > **Power** | Điều chỉnh cường độ đèn |
| Light Data Properties > **Size** | Điều chỉnh độ mềm bóng đổ (Area Light) |
| `Z` > Rendered | Xem trước kết quả render trực tiếp trong viewport |
| World Properties > **Color/HDRI** | Thiết lập ánh sáng môi trường nền |
| `Numpad 0` | Chuyển sang góc nhìn Camera |

## 5. Lưu ý & lỗi thường gặp

- Fill Light quá mạnh làm mất hoàn toàn tương phản khối do Key Light tạo ra, khiến khuôn mặt trông "phẳng".
- Rim Light quá mạnh gây cháy sáng viền silhouette, mất chi tiết ở vùng đó.
- Chỉ dùng một nguồn sáng duy nhất (thiếu Fill/Rim) khiến vùng tối bị mất chi tiết và nhân vật khó tách khỏi nền.
- Không kiểm tra dưới Rendered Preview mà chỉ dựa vào Solid Shading, dẫn đến kết quả render cuối khác xa mong đợi.

## 6. Checklist thực hành

- [ ] Đã thiết lập Key Light với vị trí và cường độ hợp lý.
- [ ] Đã thêm Fill Light làm dịu vùng bóng tối.
- [ ] Đã thêm Rim Light tạo viền sáng tách nhân vật khỏi nền.
- [ ] Đã thiết lập World background/HDRI bổ sung ánh sáng môi trường.
- [ ] Đã kiểm tra kết quả ở Rendered Preview và tinh chỉnh cường độ từng đèn.

## 7. Tóm tắt

Bài học giới thiệu kỹ thuật ánh sáng ba điểm (Key, Fill, Rim) và hướng dẫn thiết lập một scene ánh sáng cơ bản trong Blender để làm nổi bật nhân vật đầu cartoon vừa sculpt và tô màu, chuẩn bị cho bước render/hoàn thiện dự án.
