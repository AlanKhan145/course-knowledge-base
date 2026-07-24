# 052 — The Finishing Touches

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | The Finishing Touches |
| **Thời lượng** | 7:18 |
| **Chủ đề chính** | Hoàn thiện scene |

## 1. Mục tiêu bài học

- Rà soát và tinh chỉnh tổng thể vật liệu, ánh sáng, bố cục của scene.
- Thiết lập Camera và góc nhìn cuối cùng cho ảnh/khung hình hoàn chỉnh.
- Bổ sung các chi tiết trang trí nhỏ (đá, bụi cây, thêm cây) để lấp khoảng trống bố cục.
- Render thử và điều chỉnh thông số Render Engine (EEVEE/Cycles) cho kết quả cuối.

## 2. Nội dung chính

Đây là bài "polish" tổng thể — giai đoạn rà soát toàn bộ scene để phát hiện các lỗi nhỏ và bổ sung chi tiết giúp cảnh trông hoàn chỉnh, chuyên nghiệp hơn:

**Kiểm tra bố cục qua Camera**: Add > Camera (nếu chưa có), dùng Numpad 0 để vào view Camera, điều chỉnh vị trí/góc xoay Camera (G, R hoặc dùng "Fly/Walk Navigation" Shift+`) để có khung hình đẹp — thường áp dụng quy tắc một phần ba (rule of thirds), đặt nhân vật khủng long không chính giữa tuyệt đối mà lệch nhẹ, để lại không gian cho núi/bầu trời.

**Bổ sung chi tiết nhỏ**: rải thêm đá (Ico Sphere biến dạng nhẹ), bụi cây thấp, hoặc thêm vài cây ở các khoảng trống bố cục còn "trống trải". Đây cũng là lúc kiểm tra lại các cụm cây đã rải ở bài 049 có bị chồng lấn hoặc thưa quá mức ở góc nhìn Camera hay không.

**Rà soát vật liệu**: kiểm tra lại tất cả Material đã gán — Base Color, Roughness của từng object có nhất quán về phong cách (matte, low-poly) hay không; đặc biệt kiểm tra gradient núi ở bài trước hiển thị đúng từ góc Camera.

**Ánh sáng cuối**: tinh chỉnh lại Strength và Angle của Sun Light, có thể thêm một **Point Light** hoặc **Area Light** phụ để làm sáng thêm vùng tối (fill light) nếu bóng đổ quá gắt.

**Render Engine**: Blender có hai engine chính — **EEVEE** (rasterization, render nhanh, phù hợp preview và style low-poly phẳng) và **Cycles** (path-tracing, chân thực hơn nhưng chậm hơn). Với dự án low-poly stylized, EEVEE thường đủ dùng và cho kết quả nhanh; có thể bật thêm **Ambient Occlusion** và **Bloom** (trong Render Properties, mục Screen Space Reflections/AO tùy phiên bản) để tăng chiều sâu thị giác.

Cuối cùng, kiểm tra **Output Properties** (độ phân giải, tỉ lệ khung hình) trước khi Render ảnh cuối (F12) hoặc Render Animation nếu dự án có xoay camera.

## 3. Quy trình thực hành gợi ý

1. Add Camera nếu chưa có, vào View Camera (Numpad 0), canh bố cục theo rule of thirds.
2. Ctrl+Alt+Numpad 0 để đặt Camera theo góc nhìn viewport hiện tại (nhanh hơn xoay tay).
3. Rà soát toàn cảnh, bổ sung đá/bụi cây/cây ở các khoảng trống trong khung hình Camera.
4. Kiểm tra lại từng Material trong Shader Editor, đảm bảo tính nhất quán phong cách.
5. Tinh chỉnh Sun Light (Strength, Angle), cân nhắc thêm Fill Light nếu cần.
6. Chọn Render Engine (EEVEE hoặc Cycles) trong Render Properties, bật Ambient Occlusion nếu muốn tăng chiều sâu.
7. Kiểm tra Output Properties (Resolution, Frame Range), sau đó Render (F12) để xem kết quả cuối.
8. Lưu file (Ctrl+S) và export ảnh render nếu cần (Image > Save As trong cửa sổ Render).

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Numpad 0 | Vào/thoát View Camera |
| Ctrl+Alt+Numpad 0 | Đặt Camera trùng góc nhìn viewport hiện tại |
| N (trong View Camera) | Chỉnh Camera Lens/Location qua N-panel |
| Shift+` | Walk/Fly Navigation để tìm góc quay tự nhiên |
| F12 | Render ảnh tĩnh |
| Shift+Z | Toggle Rendered Shading trong viewport |

## 5. Lưu ý & lỗi thường gặp

- Bố cục đặt nhân vật chính giữa tuyệt đối thường kém hấp dẫn hơn bố cục lệch theo rule of thirds.
- Ánh sáng chỉ có một nguồn Sun quá gắt có thể tạo vùng tối hoàn toàn đen, mất chi tiết — cân nhắc World Color hoặc Fill Light.
- Chọn nhầm Render Engine (Cycles) mà không cần thiết khiến thời gian render lâu hơn nhiều so với EEVEE cho phong cách low-poly.
- Quên kiểm tra Output Resolution/Aspect Ratio trước khi render, dẫn đến ảnh bị cắt sai bố cục đã canh trong viewport.
- Bỏ sót các lỗi nhỏ như mặt bị đảo Normals, vật thể xuyên nhau (clipping) chỉ phát hiện được khi nhìn từ đúng góc Camera cuối cùng.

## 6. Checklist thực hành

- [ ] Camera đã được đặt đúng bố cục (rule of thirds hoặc chủ đích riêng).
- [ ] Đã bổ sung chi tiết nhỏ lấp các khoảng trống bố cục.
- [ ] Vật liệu toàn cảnh nhất quán về phong cách low-poly matte.
- [ ] Ánh sáng đã cân bằng, không có vùng tối/sáng quá gắt.
- [ ] Đã render thử và kiểm tra kết quả cuối cùng qua F12.

## 7. Tóm tắt

Bài học tổng hợp các bước hoàn thiện cuối cùng — bố cục Camera, chi tiết trang trí, rà soát vật liệu và ánh sáng — để biến scene khủng long low-poly từ một tập hợp các object riêng lẻ thành một bức tranh hoàn chỉnh, sẵn sàng render.
