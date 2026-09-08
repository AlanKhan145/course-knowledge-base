# 247 — Character Creation Pt. 3
# 247 — Character Creation Pt. 3

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | Character Creation Pt. 3 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:15:11 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này tập trung vào nền tảng sculpting: mouse hoặc pen, Sculpt Menu, brush, workflow, Dyntopo, remesh, Multiresolution, ba phase của sculpt và các cách tạo base mesh. Nội dung được tổng hợp từ [Section 24 — Fundamentals of Sculpting in Blender](../24%20-%20Character%20Creation-%20Fundamentals%20of%20Sculpting%20in%20Blender/README.md).

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Chọn mouse hoặc pen tablet theo yêu cầu kiểm soát stroke.
- Nắm các nhóm công cụ và brush chính trong Sculpt Mode.
- Phân biệt primary, secondary và tertiary forms.
- Chọn workflow base mesh và quyết định giữa Dyntopo, remesh hoặc Multiresolution.
- Giữ silhouette và tỷ lệ ổn định trước khi đi vào surface detail.

## Nội dung trọng tâm

### 1. Công cụ và brush

Sculpt Menu cung cấp các thao tác tạo, kéo, làm phẳng, làm mịn và mask hình dạng. Pressure và falloff của mouse/pen ảnh hưởng đến stroke, vì vậy nên luyện trên một object đơn giản trước khi sculpt nhân vật.

### 2. Ba phase của sculpting

Primary forms quyết định silhouette và khối lớn. Secondary forms xây các nhóm cấu trúc chính bên trên silhouette. Tertiary forms là nếp, texture và detail nhỏ. Nếu primary forms chưa đúng, tertiary detail chỉ làm lỗi khó sửa hơn.

### 3. Base mesh và độ phân giải

Base mesh có thể bắt đầu từ primitive, vertex/skin workflow hoặc cách dựng khối khác. Dyntopo phù hợp khi cần topology cục bộ linh hoạt; remesh giúp tạo lại mesh đồng đều; Multiresolution giữ topology và cho phép chuyển giữa các level.

## Quy trình rút gọn

1. Chọn input device, chuẩn bị mesh và lưu backup.
2. Dựng primary forms, kiểm tra silhouette từ xa và nhiều góc.
3. Thêm secondary forms khi tỷ lệ lớn đã ổn.
4. Chỉ thêm tertiary forms ở level cuối và những vùng camera thấy rõ.
5. Thử Dyntopo, remesh hoặc Multiresolution trên bản sao để hiểu trade-off.
6. Giữ lại base mesh sạch để có thể tiếp tục retopology hoặc rigging.

## Thực hành đề xuất

Tạo một base mesh cho đầu nhân vật bằng hai phương pháp khác nhau, chẳng hạn primitive và skin-based mesh. Sculpt cùng một bộ primary forms trên cả hai, sau đó thử một bản với Dyntopo và một bản với Multiresolution. So sánh silhouette, topology và khả năng tiếp tục chỉnh sửa.

## Checklist

- [ ] Đã thử Sculpt Menu và các brush chính.
- [ ] Đã dựng primary forms trước secondary/tertiary forms.
- [ ] Đã tạo base mesh bằng ít nhất hai workflow.
- [ ] Đã so sánh Dyntopo, remesh và Multiresolution.
- [ ] Đã giữ backup trước khi đổi topology hoặc độ phân giải.
- [ ] Đã kiểm tra silhouette ở khoảng cách camera dự kiến.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Section 24 của thư mục khóa học. Nguyên tắc ba phase là trục chính để quyết định lúc nào nên dừng hoặc chuyển level detail.
