# Bài 09 — Sổ tay thuật ngữ, sửa lỗi và tài liệu tham khảo

## 1. Thuật ngữ đối chiếu

| English | Tiếng Việt | Gợi ý nhớ |
|---|---|---|
| Sculpting | Điêu khắc kỹ thuật số | Nắn khối mesh như đất sét |
| Blockout | Phác khối / dựng khối lớn | Ưu tiên silhouette, không vội chi tiết |
| Eyeball | Nhãn cầu | Cầu làm cơ sở cho mí |
| Eye socket / orbit | Hốc mắt / ổ mắt | Cấu trúc bao nhãn cầu |
| Brow ridge | Gờ cung mày | Khối nổi phía trên |
| Upper / lower eyelid | Mí trên / mí dưới | Có bề dày, không phải nét vẽ |
| Medial / lateral canthus | Khóe trong / khóe ngoài | Trong gần mũi, ngoài gần tai |
| Lacrimal caruncle | Cục lệ | Nốt mô hồng ở khóe trong |
| Orbicularis oculi | Cơ vòng mắt | Cấu trúc mô mềm bao quanh mắt |
| Dyntopo | Topology động | Thêm/lược mật độ lưới theo cọ |
| Clay Strips | Cọ đắp đất dạng dải | Dựng/đắp khối |
| Grab | Cọ kéo | Đổi hình dáng/chỉnh vị trí |
| Crease | Cọ tạo rãnh | Nhấn ranh giới / nếp mí |
| Scrape/Flatten | Cọ gạt/làm phẳng | Định hình mặt phẳng |
| Smooth | Cọ làm mượt | Loại gợn, không xóa khối |

## 2. Các tình huống sửa lỗi

| Hiện tượng | Chẩn đoán | Cách xử lý |
|---|---|---|
| Mắt trông sợ hãi vô ý | Khe mi mở quá rộng, mí trên quá cao | Hạ mí trên, cân lại mí dưới, đối chiếu tham chiếu |
| Mắt trông buồn không chủ đích | Hướng khóe/bờ mí tạo cảm giác xuôi | Chỉnh nhẹ Grab, xem chênh lệch hai khóe |
| Mí phẳng như dán | Chỉ khắc rãnh, không thêm thể tích | Đắp dải mí, nhìn nghiêng, kiểm tra ôm nhãn cầu |
| Mí nổi như ống tròn | Đắp Clay Strips quá đồng đều | Scrape/Flatten nhẹ, tinh chỉnh chuyển tiếp |
| Hốc mắt sâu bất thường | Đào lõm đều quanh mắt | Trả lại khối gò má và cung mày |
| Surface lổn nhổn | Nhiều nét ngắn hoặc lưới không hợp | Smooth có chọn lọc, quay về khối lớn |
| Mất UV/face attributes sau Dyntopo | Dyntopo thay đổi topology | Dùng bản sao high-poly; retopology/UV lại |
| Nhìn thẳng đẹp, nghiêng xấu | Chỉnh trên một góc duy nhất | 3-view review đều đặn trước khi thêm nét |
| Không tìm thấy phím bật Dyntopo | Phiên bản/keymap khác | Mở Sculpt Mode, tìm Dyntopo trong Tool Settings / Sculpt menu |

## 3. Lưu ý chính xác

- **Phím tắt không bất biến:** transcript nói tới `Ctrl + D`, nhưng trên các phiên bản Blender mới cần kiểm tra nút/menu tương ứng; không dựa hoàn toàn vào thao tác từ video cũ.
- **Dyntopo và Voxel Remesh là hai kỹ thuật khác nhau.** Không cần bật cả hai để sculpt vùng mắt.
- **Cục lệ** là cách chuẩn hóa thuật ngữ trong bản chép lời, không có nghĩa tất cả mắt stylized phải mô hình hóa phần này.
- **Gợi ý đường cong mí** trong video phản ánh mẫu tạo hình cụ thể. Hãy ưu tiên ảnh tham chiếu thay vì quy luật cố định cho mọi nhân vật.
- **Boolean, rig và render** chỉ được đề cập nhanh cuối video; đây không phải một video hướng dẫn pipeline rig đầy đủ.

## 4. Nguồn chính và nguồn bổ sung

**Nguồn chính (do người học cung cấp)**: phụ đề / bản chép lời 00:00–32:04 về sculpt mắt. Tài liệu không có metadata đường dẫn video hoặc phiên bản Blender, nên không tự gán tác giả, kênh, bản quyền hay URL.

**Nguồn bổ sung kỹ thuật (tài liệu chính thức):**

1. [Blender 4.5 LTS — Adaptive Resolution](https://docs.blender.org/manual/en/4.5/sculpt_paint/sculpting/introduction/adaptive.html): chức năng và các hạn chế của Dyntopo.
2. [Blender 4.3 — Dyntopo](https://docs.blender.org/manual/en/4.3/sculpt_paint/sculpting/tool_settings/dyntopo.html): chế độ, mật độ và thông số cài đặt.
3. [Blender Manual — Sculpt Mode](https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/index.html): điểm bắt đầu để tra tên cọ/menu theo phiên bản.

**Ghi chú biên tập:** Các bước quản lý project, bài tập, yêu cầu xuất sản phẩm, rubric, cảnh báo pipeline game và phần thuật ngữ đã được tổ chức/bổ sung nhằm mục đích sư phạm. Các mốc thời gian giúp người học tra đúng đoạn trong bản ghi.
