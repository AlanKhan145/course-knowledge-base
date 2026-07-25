# 075 — Rendering and Composite

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Rendering and Composite |
| **Thời lượng** | 9:12 |
| **Chủ đề chính** | Camera cuối, ánh sáng ba điểm, render nền trong suốt, compositing hoàn thiện |

## 1. Mục tiêu bài học

- Thiết lập camera framing cuối cùng cho nhân vật hoàn chỉnh.
- Dựng hệ ánh sáng ba điểm (three-point lighting) cho nhân vật.
- Render với nền trong suốt và hoàn thiện compositing với nền gradient và Glare.

## 2. Nội dung chính

Đây là bài học khép lại toàn bộ dự án cuối khóa, tổng hợp kỹ thuật render và compositing đã học ở Module 02 (bài 022) và Module 07 (bài 060). **Camera** được đặt và căn chỉnh để lấy khung hình đẹp nhất cho nhân vật ếch cùng toàn bộ phụ kiện (gậy, ba lô, túi ngủ) và bệ đá, thường dùng góc nhìn hơi thấp (low angle) để tăng cảm giác hùng vĩ, hoặc góc ngang tầm mắt để nhấn mạnh tính cách nhân vật.

**Ánh sáng ba điểm** — kỹ thuật chiếu sáng cổ điển gồm: **Key Light** (nguồn sáng chính, mạnh nhất, đặt chéo một góc 30-45 độ so với camera) định hình khối chính và bóng đổ chủ đạo; **Fill Light** (yếu hơn, đối diện phía Key Light) làm dịu bóng tối gắt do Key Light tạo ra mà không xóa hết chiều sâu; **Rim/Back Light** (đặt phía sau nhân vật) tạo viền sáng mảnh dọc theo silhouette, tách nhân vật ra khỏi nền và tăng cảm giác chiều sâu ba chiều.

**Render với nền trong suốt** bật qua Render Properties > **Film > Transparent**, cho phép xuất ảnh PNG với kênh Alpha, tách riêng nhân vật khỏi nền để linh hoạt hoàn toàn ở bước hậu kỳ. Trong **Compositor**, ảnh nhân vật (có Alpha) được ghép lên trên một **nền gradient** (dựng bằng node Color Ramp kết hợp Texture Coordinate, hoặc đơn giản là ảnh gradient chèn qua Image node), sau đó áp dụng **Denoise**, **Color Balance** và **Glare** (đặc biệt làm nổi bật ánh sáng ấm từ bầu đèn ở tay nhân vật) như đã học ở bài 060, cho ra ảnh hoàn thiện cuối cùng của toàn bộ khóa học.

## 3. Quy trình thực hành gợi ý

1. Đặt Camera, căn chỉnh khung hình bao trọn nhân vật và các phụ kiện chính.
2. Thêm Key Light, Fill Light và Rim Light, tinh chỉnh cường độ và vị trí từng đèn.
3. Bật Film > Transparent trong Render Properties, render ảnh nhân vật với nền Alpha trong suốt.
4. Trong Compositor, dựng nền gradient bằng Color Ramp + Texture Coordinate, ghép ảnh nhân vật (dùng node Alpha Over) lên trên.
5. Thêm Denoise, Color Balance và Glare (nhấn mạnh ánh sáng từ đèn lồng), hoàn thiện ảnh cuối cùng.
6. Lưu ảnh render hoàn chỉnh (Image > Save As).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Bật nền trong suốt | Render Properties > Film > Transparent |
| Node Alpha Over (ghép ảnh có Alpha lên nền) | Add > Color > Alpha Over |
| Node Color Ramp (dựng gradient nền) | Add > Converter > Color Ramp |
| Render ảnh tĩnh | `F12` |

## 5. Lưu ý & lỗi thường gặp

- Quên bật Film > Transparent khiến nền render ra màu World mặc định thay vì trong suốt, gây khó khăn khi ghép nền gradient ở Compositor.
- Rim Light đặt sai góc (chiếu thẳng vào camera) gây lóa sáng (lens flare không mong muốn) hoặc mất tác dụng viền sáng.
- Fill Light quá mạnh xóa hết bóng đổ tạo ra bởi Key Light, khiến hình khối nhân vật trông phẳng, thiếu chiều sâu.
- Glare quá mạnh trên toàn ảnh cuối khiến các chi tiết texture da/vải vừa hoàn thiện ở các bài trước bị lu mờ.

## 6. Checklist thực hành

- [ ] Đã thiết lập camera framing cuối cùng cho toàn bộ nhân vật và phụ kiện.
- [ ] Đã dựng hệ ánh sáng ba điểm hoàn chỉnh (Key, Fill, Rim).
- [ ] Đã render thành công với nền trong suốt (Alpha).
- [ ] Đã hoàn thiện compositing với nền gradient, Denoise, Color Balance và Glare.

## 7. Tóm tắt

Bài học cuối cùng của dự án tổng hợp toàn bộ kỹ thuật render và hậu kỳ đã học xuyên suốt khóa học vào một quy trình hoàn chỉnh — từ ánh sáng ba điểm chuyên nghiệp đến compositing nền gradient — cho ra tấm ảnh hoàn thiện thể hiện toàn bộ hành trình học tập từ Module 01 đến Module 08.
