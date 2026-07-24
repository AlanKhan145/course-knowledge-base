# 099 — Finishing Touches

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Finishing Touches |
| **Thời lượng** | 7:16 |
| **Chủ đề chính** | Thêm các chi tiết cuối |

## 1. Mục tiêu bài học

- Rà soát tổng thể mô hình để phát hiện và sửa các điểm còn thiếu sót trước khi render.
- Thêm các chi tiết cuối cùng: lông mày, mí mắt tinh chỉnh, chất liệu bề mặt (roughness khác nhau cho da/sừng/mắt).
- Chuẩn bị mesh cho bước render/lighting: kiểm tra Normals, độ mượt Shading (Shade Smooth/Auto Smooth).

## 2. Nội dung chính

Đây là giai đoạn hoàn thiện trước khi chuyển sang thiết lập ánh sáng và render. Các công việc thường thực hiện:

- **Kiểm tra Shading**: chọn object, `Object > Shade Smooth` (hoặc Shade Auto Smooth trong Blender 4.x để giữ các cạnh cứng hợp lý mà vẫn mượt bề mặt cong) để tránh mesh trông "gãy khối" do hiển thị Flat Shading mặc định.
- **Thêm chi tiết nhỏ còn thiếu**: lông mày (có thể sculpt nhô nhẹ hoặc chỉ vẽ bằng Texture Paint), độ bóng ướt cho mắt, các nếp nhăn biểu cảm cuối cùng.
- **Thiết lập Material cơ bản cho từng vùng**: da (roughness cao, hơi mờ), sừng (roughness thấp hơn, hơi bóng như sừng động vật thật), mắt (roughness rất thấp để tạo độ bóng ướt đặc trưng). Có thể dùng nhiều Material Slot ứng với các Face Sets hoặc Vertex Groups đã phân chia trong lúc sculpt/paint.
- **Kiểm tra Normals**: `Mesh > Normals > Recalculate Outside` (`Shift+N`) nếu phát hiện vùng bị tối bất thường do pháp tuyến bị đảo ngược, thường xảy ra sau nhiều thao tác Mask Extract hoặc Remesh.
- **Dọn dẹp Multiresolution**: cân nhắc giữ hoặc Apply cấp độ Multiresolution phù hợp cho mục đích cuối (render tĩnh có thể giữ cấp cao nhất, còn nếu sẽ rig/animate thì cần base mesh nhẹ hơn ở Level 0).
- **Đặt tên object/collection rõ ràng** để dễ quản lý scene khi bước sang thiết lập ánh sáng.

## 3. Quy trình thực hành gợi ý

1. Áp Shade Auto Smooth cho toàn bộ mesh đầu để có bề mặt mượt hợp lý.
2. Thêm lông mày và các chi tiết biểu cảm nhỏ còn thiếu bằng Draw/Clay Strips hoặc Texture Paint.
3. Gán Material riêng cho da, sừng, mắt với thông số Roughness khác nhau.
4. Kiểm tra Normals bằng `Shift+N`, sửa nếu phát hiện vùng tối bất thường.
5. Xem lại toàn bộ mesh ở chế độ Rendered Preview để đánh giá dưới ánh sáng mặc định.
6. Đặt tên rõ ràng cho các object/collection liên quan (Head, Horns, Eyes...).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Chức năng |
|---|---|
| Object > **Shade Auto Smooth** | Làm mượt shading, giữ cạnh cứng hợp lý |
| `Shift+N` | Recalculate Normals (Outside) |
| Material Properties > **Roughness** | Điều chỉnh độ bóng bề mặt (da/sừng/mắt) |
| Sculpt Mode > **Face Sets** | Phân vùng mesh, hỗ trợ gán Material theo vùng |
| `Z` | Chuyển shading để kiểm tra Rendered Preview |

## 5. Lưu ý & lỗi thường gặp

- Quên Shade Smooth/Auto Smooth khiến bề mặt trông lởm chởm khi render dù sculpt đã mượt.
- Dùng chung một Roughness cho toàn bộ mesh làm mất cảm giác chất liệu khác nhau giữa da, sừng, mắt.
- Không kiểm tra Normals sau khi dùng Mask Extract/Remesh, dẫn đến vùng bị tối/lỗi shading khi render.
- Bỏ sót chi tiết nhỏ (lông mày, độ bóng mắt) khiến nhân vật thiếu sức sống dù khối tổng thể đã tốt.

## 6. Checklist thực hành

- [ ] Đã áp Shade Auto Smooth cho mesh.
- [ ] Đã thêm các chi tiết nhỏ còn thiếu (lông mày, biểu cảm).
- [ ] Đã gán Material với Roughness phù hợp cho da, sừng, mắt.
- [ ] Đã kiểm tra và sửa Normals nếu cần.
- [ ] Đã xem tổng thể ở Rendered Preview.

## 7. Tóm tắt

Bài học hướng dẫn hoàn thiện mô hình trước khi render: chỉnh Shading mượt, thêm chi tiết nhỏ còn thiếu, thiết lập Material với Roughness khác nhau cho từng vùng và kiểm tra Normals, chuẩn bị sẵn sàng cho bước thiết lập ánh sáng ở bài tiếp theo.
