# 244 — 3D Environments Pt. 6
# 244 — 3D Environments Pt. 6

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | 3D Environments Pt. 6 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:33:07 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này kết thúc environment pipeline bằng test rendering, render settings và quick compositing. Nội dung được tổng hợp từ [Section 35 — Rendering and Compositing](../35%20-%203D%20Environments-%20Rendering%20and%20Compositing/README.md).

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Dùng test render để phát hiện lỗi camera, material, lighting và scene settings.
- Chọn render settings phù hợp với mục đích kiểm tra và output cuối.
- Đánh giá background, contrast, shadow và color sau khi scene đã được render.
- Dùng compositing ở mức vừa đủ để hoàn thiện hình ảnh mà không che lấp vấn đề của scene gốc.
- Lưu một quy trình output có thể lặp lại cho các shot khác.

## Nội dung trọng tâm

### 1. Test rendering

Test render là bước kiểm tra, không chỉ là bản final thu nhỏ. Hãy kiểm tra framing, clipping, noise, shadow, texture scale, vật liệu phản xạ và các vùng quá tối hoặc quá sáng trước khi tăng chất lượng output.

### 2. Render settings và scene settings

Resolution, render engine, quality và các setting của scene ảnh hưởng trực tiếp đến thời gian và hình ảnh cuối. Nên giữ một bản setting dùng để preview và một bản setting dùng để xuất final, đồng thời ghi lại các thay đổi quan trọng.

### 3. Quick compositing

Compositing xử lý hình ảnh sau render: cân bằng color/value, điều chỉnh contrast, trộn background hoặc dùng render pass khi cần. Compositor nên hỗ trợ composition và mood đã chọn, không dùng để che lỗi topology, lighting hoặc material chưa giải quyết ở scene.

## Quy trình rút gọn

1. Lưu bản scene trước khi đổi render settings.
2. Render preview ở resolution và quality thấp hơn để kiểm tra lỗi lớn.
3. Chỉnh camera, light, material hoặc scene settings theo kết quả test.
4. Tăng chất lượng, kiểm tra lại memory/time và render một frame xác nhận.
5. Đưa render vào compositor, điều chỉnh color/value ở mức vừa phải.
6. Xuất final, lưu setting và ghi lại tên file, resolution cùng engine đã dùng.

## Thực hành đề xuất

Với main scene ở Pt. 5, tạo một test render nhanh và lập danh sách lỗi theo thứ tự ưu tiên. Sửa các lỗi ở scene trước, sau đó dùng quick compositing để cân bằng contrast và background. Xuất một bản preview và một bản final, giữ cả file Blender lẫn kết quả.

## Checklist

- [ ] Đã thực hiện test render trước khi render final.
- [ ] Đã kiểm tra camera, clipping, texture, shadow và noise.
- [ ] Đã ghi lại render engine, resolution và quality settings.
- [ ] Đã sửa lỗi scene trước khi dùng compositor.
- [ ] Đã thực hiện quick compositing có chủ đích.
- [ ] Đã lưu scene, setting và output cuối.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Section 35 của thư mục khóa học. Phần này khép lại environment pipeline ở mức output: test render, điều chỉnh scene và quick compositing.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
