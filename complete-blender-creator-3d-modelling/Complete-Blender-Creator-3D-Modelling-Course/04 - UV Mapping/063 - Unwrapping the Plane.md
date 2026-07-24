# 063 — Unwrapping the Plane

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Unwrapping the Plane |
| **Thời lượng** | 8:05 |
| **Chủ đề chính** | Unwrap thân máy bay |

## 1. Mục tiêu bài học
- Áp dụng toàn bộ kiến thức seam/UV island từ đầu module vào một mô hình phức tạp nhiều bộ phận: máy bay.
- Lên kế hoạch chia mesh máy bay thành các nhóm UV island hợp lý theo từng bộ phận (thân, cánh, đuôi, propeller).
- Đặt seam ở vị trí ít lộ (đường nối tự nhiên, mặt dưới, khe giữa các panel).
- Pack toàn bộ island vào một hoặc nhiều UV map, đảm bảo tỷ lệ texel hợp lý.

## 2. Nội dung chính
Máy bay là một mesh phức tạp gồm nhiều bộ phận với hình dạng khác nhau: thân dạng ống thon, cánh dạng tấm phẳng thon, đuôi tương tự cánh nhưng nhỏ hơn, propeller dạng cánh quạt mỏng. Mỗi bộ phận nên được unwrap theo chiến lược phù hợp với hình dạng của nó, giống như đã luyện tập với thùng gỗ ở đầu module, nhưng với nhiều nhóm island hơn.

Chiến lược tổng quát:
- **Thân máy bay:** đặt seam dọc theo đường ít lộ (thường là mặt dưới bụng máy bay) và các seam vòng tại các vị trí phân đoạn tự nhiên (mũi, gốc cánh, đuôi) để chia thân thành các island vừa phải, dễ pack.
- **Cánh và đuôi:** vì là các tấm dẹt gần phẳng, thường chỉ cần một seam ở mép trước hoặc mép sau để "mở" mặt trên và mặt dưới cánh ra thành một island tương đối phẳng, ít méo.
- **Propeller/chi tiết nhỏ:** có thể unwrap riêng lẻ hoặc dùng Smart UV Project nếu hình dạng đơn giản và không cần kiểm soát texture chi tiết.

Sau khi đánh seam từng bộ phận, chọn toàn bộ mesh và `U → Unwrap` để tạo tất cả island cùng lúc, sau đó dùng `U → Pack Islands` để tự động sắp xếp chúng gọn trong không gian UV 0–1, tránh chồng lấn và tối ưu tỷ lệ texel giữa các phần lớn (thân, cánh) và phần nhỏ (chi tiết).

Có thể cân nhắc sử dụng nhiều UV Map (UV Maps trong Object Data Properties) nếu số lượng chi tiết quá lớn để dồn vào một texture, nhưng với một dự án học tập ở quy mô này, một UV map duy nhất được pack hợp lý thường là đủ.

## 3. Quy trình thực hành gợi ý
1. Rà soát lại toàn bộ mesh máy bay, xác định ranh giới tự nhiên giữa các bộ phận (thân, cánh, đuôi, propeller).
2. Đánh seam theo từng bộ phận: seam dọc mặt dưới thân, seam mép cánh, seam quanh gốc các chi tiết nhỏ.
3. Bật Live Unwrap để quan sát UV cập nhật khi thêm seam, tinh chỉnh nếu island bị méo nhiều.
4. Chọn toàn bộ mesh, `U → Unwrap`.
5. Gán checker texture để kiểm tra độ méo trên toàn bộ mô hình, đặc biệt các vùng cong như mũi máy bay.
6. `U → Pack Islands` để sắp xếp UV gọn gàng; kéo/scale thủ công thêm nếu cần ưu tiên độ phân giải cho các phần quan trọng (thân, cánh chính) hơn chi tiết nhỏ.
7. Lưu lại bố cục UV cuối cùng, chuẩn bị cho bước texturing cánh và thân ở các bài tiếp theo.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+E → Mark Seam` | Đánh dấu seam |
| `U → Unwrap` | Unwrap toàn bộ mesh theo seam |
| `U → Pack Islands` | Tự động sắp xếp UV island |
| `U → Smart UV Project` | Unwrap tự động cho các chi tiết nhỏ, đơn giản |
| `L` | Chọn toàn bộ mesh liên kết (linked) dưới con trỏ, hữu ích khi chọn từng bộ phận riêng để unwrap |

## 5. Lưu ý & lỗi thường gặp
- Cố gắng unwrap toàn bộ máy bay thành một island duy nhất khiến độ méo rất lớn ở các vùng cong phức tạp.
- Không ưu tiên tỷ lệ texel giữa các bộ phận (thân lớn dùng chung diện tích UV với chi tiết nhỏ) khiến texture bị mờ ở phần lớn hoặc quá nét ở phần nhỏ.
- Đặt seam ở mặt trên/mặt dễ thấy của cánh và thân khiến đường nối texture lộ rõ khi hoàn thiện.
- Quên Pack Islands sau khi unwrap khiến các island chồng lên nhau, gây lỗi texture khi áp vào các bài sau.

## 6. Checklist thực hành
- [ ] Đã đánh seam hợp lý cho từng bộ phận của máy bay.
- [ ] Đã unwrap toàn bộ mesh và kiểm tra độ méo bằng checker texture.
- [ ] Đã Pack Islands và cân đối tỷ lệ texel giữa các phần.
- [ ] UV layout đã sẵn sàng để chuyển sang bước texturing.

## 7. Tóm tắt
Bài học áp dụng đầy đủ quy trình seam – island – pack đã học vào mô hình máy bay phức tạp, tạo ra một layout UV hoàn chỉnh cho toàn bộ mô hình, là nền tảng trực tiếp cho việc texturing cánh và thân ở hai bài tiếp theo.
