# How to Create Glowing Surface Cracks || Blender Tutorial

Video ngắn của kênh **TooEazyCG** (tác giả Joshua Ader — kênh Blender hướng tới người mới bắt đầu), hướng dẫn cách tạo hiệu ứng **vết nứt phát sáng trên bề mặt** (glowing surface cracks) bằng shader node trong **Cycles**: tận dụng chính texture màu (diffuse) của vật liệu để vừa tạo độ lồi lõm (displacement/bump) cho vết nứt, vừa tạo ánh sáng phát ra từ bên trong khe nứt — kỹ thuật rất phổ biến cho các cảnh sci-fi (đá/kim loại nứt phát sáng năng lượng) hoặc đá dung nham (lava rock).

- **Kênh:** TooEazyCG (Joshua Ader)
- **Thời lượng:** ~4 phút 27 giây
- **Xuất bản:** khoảng tháng 2/2018 (cùng thời điểm bài viết trên BlenderNation)
- **Nguồn ghi chú:** bản dịch máy (tiếng Việt) của transcript/phụ đề gốc video, do người dùng cung cấp — vì vậy các thuật ngữ kỹ thuật Blender bị dịch sai/lạ đã được diễn giải lại đúng theo ngữ cảnh (ví dụ "node đeo mặt nạ" = node **Math**, "cục u" = **bump/bump map**, "pha trộn một lượt nợ" = **Mix Shader**, "độ bền" = **Strength**). Nhờ có transcript thật, ghi chú bám sát đúng node setup tác giả thao tác trong video.
- **Nguồn tham khảo:**
  - Video: https://www.youtube.com/watch?v=UEdA5pP5Wrk
  - Bài viết: https://www.blendernation.com/2018/02/19/creating-glowing-surface-cracks-blender-cycles/

## Cấu trúc khoá học

Khoá học này chỉ có **một bài duy nhất**, gộp toàn bộ kỹ thuật của video vào một file ghi chú.

| # | Bài học | Nội dung |
|---|---|---|
| [01](01%20-%20How%20to%20Create%20Glowing%20Surface%20Cracks.md) | How to Create Glowing Surface Cracks | Dùng mặt nạ tách ra từ texture màu để tạo displacement + glow trong khe nứt; tuỳ chọn tạo dải màu (color pattern) cho ánh sáng |

## Kỹ thuật cốt lõi rút ra được

- **Nhân bản chính Image Texture đang dùng cho màu** (Shift+D, giữ chung Mapping/Vector với bản gốc) để làm nguồn tách mặt nạ riêng, thay vì vẽ mask tay hay dùng texture phụ.
- **RGB to BW + một node Math (Less Than/Greater Than)** biến giá trị xám của texture thành mặt nạ 0/1 theo một **ngưỡng (threshold)** tự chỉnh — đổi qua lại giữa Less Than và Greater Than sẽ đảo ngược vùng nào là "vết nứt".
- Mặt nạ đó (output của Math) được dùng lại **hai lần**: cắm vào **Height** của **Bump** để tạo độ lồi lõm vật lý, và cắm vào **Fac** của **Mix Shader** (giữa shader bề mặt và **Emission**) để ánh sáng chỉ phát ra đúng trong khe nứt.
- **Thiếu bước nối Fac là lỗi hay gặp nhất**: nếu Mix Shader đã có Emission mà chưa cắm Fac, kết quả là "rác" — ánh sáng phủ sai chỗ vì Blender chưa biết phát sáng ở đâu.
- **Màu ánh sáng và vị trí ánh sáng tách rời nhau**: mặt nạ ở Fac chỉ quyết định *ở đâu* phát sáng; muốn đổi màu thì cắm **Noise Texture → RGB Curves** vào **Color** của Emission (Fac giữ nguyên), sau đó nhớ tăng **Emission Strength** vì màu mới thường tối hơn mặc định.

## Cách sử dụng thư mục ghi chú này

- File `01 - How to Create Glowing Surface Cracks.md` là bài học duy nhất, có cấu trúc: mục tiêu, nguyên lý, sơ đồ node, quy trình thực hành từng bước, lưu ý & lỗi thường gặp, checklist, tóm tắt.
- Vì không có transcript gốc, các con số ColorRamp/Bump Strength trong bài chỉ là **điểm khởi đầu hợp lý** (dựa trên quy trình chuẩn cho hiệu ứng này) — hãy tinh chỉnh trực tiếp bằng mắt trong viewport render (Cycles Rendered View) thay vì áp dụng máy móc.
- Nên xem qua video gốc một lượt để thấy đúng texture/tỉ lệ tác giả dùng, sau đó dùng ghi chú này để tra lại thứ tự node khi tự làm trong Blender của bạn.

## Checklist tổng thể

- [ ] Hiểu vì sao có thể nhân bản chính Image Texture đang dùng cho màu để làm nguồn tách mặt nạ vết nứt, thay vì phải vẽ tay.
- [ ] Dựng được mặt nạ vết nứt bằng RGB to BW + node Math (Less Than/Greater Than) và chỉnh được ngưỡng.
- [ ] Dùng mặt nạ đó tạo được độ lồi lõm vật lý qua node Bump.
- [ ] Trộn được Diffuse/Principled BSDF và Emission bằng Mix Shader, với Fac đúng bằng mặt nạ (không bỏ sót bước này).
- [ ] Tạo được màu cho ánh sáng bằng Noise Texture + RGB Curves ở bước tuỳ chọn, và nhớ tăng Emission Strength.
