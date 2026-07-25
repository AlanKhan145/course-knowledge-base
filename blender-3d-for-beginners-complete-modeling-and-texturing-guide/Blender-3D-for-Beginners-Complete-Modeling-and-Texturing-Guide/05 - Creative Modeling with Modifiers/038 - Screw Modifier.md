# 038 — Screw Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Screw Modifier |
| **Thời lượng** | 4:05 |
| **Chủ đề chính** | Dựng hình xoáy ốc (ren vít, lò xo) bằng Screw Modifier |

## 1. Mục tiêu bài học

- Hiểu nguyên lý hoạt động của Screw Modifier: xoay một profile quanh một trục kèm theo độ dịch chuyển (Z-offset) mỗi vòng quay.
- Dựng được ren của một con vít/bu-lông từ một biên dạng (profile) đơn giản.
- Dựng được một lò xo (spring) bằng cách điều chỉnh Iterations và Screw offset.
- Phân biệt Screw Modifier với Spin (công cụ Edit Mode) và với kỹ thuật Array + Object Offset đã học.

## 2. Nội dung chính

**Screw Modifier** (Add Modifier > Generate > Screw) hoạt động tương tự công cụ Spin trong Edit Mode nhưng ở dạng modifier không phá hủy (non-destructive): nó lấy một **profile** — thường chỉ là một đường/mặt cắt nhỏ (một cạnh, một tam giác nhỏ cho răng ren, hoặc một vòng tròn nhỏ cho lò xo) — và xoay nó quanh một trục (mặc định trục Z) đủ 360° (thông số **Angle**), đồng thời dịch chuyển dọc trục đó một khoảng cố định sau mỗi vòng quay (thông số **Screw** — độ dời theo trục cho mỗi 360°).

Các thông số chính:

- **Axis**: trục xoay (X/Y/Z, mặc định Z).
- **Angle**: tổng góc xoay (mặc định 360°).
- **Screw**: độ dịch chuyển dọc trục sau mỗi vòng quay đầy đủ — đây chính là "bước ren" (pitch) khi mô hình hóa vít.
- **Iterations**: số lần lặp lại toàn bộ phép xoay 360°, dùng khi cần nhiều vòng ren hoặc nhiều vòng lò xo liên tiếp.
- **Steps/Render Steps**: độ mịn của việc xoay (số bước chia trong 360°) cho viewport và khi render.
- **Object Offset**: cho phép gán một Empty để dùng vị trí/trục của Empty đó thay vì trục local của mesh, hữu ích khi cần đặt tâm xoay lệch khỏi Origin của profile.
- **Merge**: hàn các đỉnh trùng ở điểm nối đầu/cuối vòng xoay.

**Modeling ren vít/bu-lông**: bắt đầu từ một biên dạng tam giác nhỏ (mặt cắt ngang của răng ren) đặt cách trục Z một khoảng bằng bán kính thân vít. Thêm Screw Modifier, đặt Screw offset bằng đúng bước ren mong muốn (pitch), tăng Iterations để có đủ số vòng ren bao phủ chiều dài vít, sau đó kết hợp thêm một trụ tròn (Cylinder) làm thân vít.

**Modeling lò xo (spring)**: dùng cùng nguyên lý nhưng profile là một vòng tròn nhỏ (mặt cắt dây lò xo), Screw offset lớn hơn để tạo khoảng cách giữa các vòng cuộn, Iterations cao để lò xo đủ dài.

## 3. Quy trình thực hành gợi ý

1. Tạo một profile nhỏ (tam giác cho ren, hoặc vòng tròn nhỏ cho lò xo) cách trục Z một khoảng bằng bán kính mong muốn.
2. Thêm Screw Modifier, kiểm tra Axis = Z.
3. Chỉnh Screw offset bằng giá trị bước ren/khoảng cách vòng cuộn mong muốn.
4. Tăng Iterations để có đủ số vòng lặp lại theo chiều dài chi tiết.
5. Tăng Steps để đường xoay mượt hơn (giảm góc cạnh trên viewport).
6. Với ren vít: thêm một Cylinder làm thân, căn chỉnh vị trí sao cho ren nằm sát bề mặt thân trụ.
7. Kiểm tra pháp tuyến (Recalculate Normals — `Shift + N`) sau khi Apply modifier nếu cần dùng cho Boolean hoặc export.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Add Modifier | Properties Editor > tab Modifier |
| Recalculate Normals | `Shift + N` (trong Edit Mode) |
| Áp dụng modifier | Menu `Ctrl + A` (Apply, Object Mode) |
| Xoay profile quanh trục nếu cần chỉnh hướng | `R` + trục |

## 5. Lưu ý & lỗi thường gặp

- Profile đặt sai khoảng cách tới trục xoay khiến bán kính ren/lò xo sai lệch so với thân vít.
- Steps quá thấp khiến đường xoáy bị gãy góc rõ rệt, đặc biệt lộ rõ khi render close-up.
- Quên tăng Iterations khi cần nhiều vòng ren, chỉ có đúng 1 vòng 360° mặc định.
- Normal bị đảo ngược sau khi Screw tạo hình, cần Recalculate Normals trước khi dùng cho Boolean hoặc export.
- Nhầm giữa thông số Angle (góc quét một lần) và Iterations (số lần lặp lại) khiến hình dạng không như mong đợi.

## 6. Checklist thực hành

- [ ] Đã dựng được một đoạn ren vít với bước ren (Screw offset) hợp lý.
- [ ] Đã thử tạo một lò xo bằng cách đổi profile và tăng Iterations.
- [ ] Đường xoáy đủ mịn (Steps đủ cao) khi quan sát gần.
- [ ] Hiểu rõ sự khác biệt giữa Angle, Screw offset và Iterations.

## 7. Tóm tắt

Screw Modifier tự động hóa việc xoay một profile quanh trục kèm dịch chuyển theo từng vòng, cho phép dựng nhanh các chi tiết xoáy ốc như ren vít, ren ốc, hay lò xo mà không cần thao tác Spin thủ công lặp đi lặp lại trong Edit Mode.
