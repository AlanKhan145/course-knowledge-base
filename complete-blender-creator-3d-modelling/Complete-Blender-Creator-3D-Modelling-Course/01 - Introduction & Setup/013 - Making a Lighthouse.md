# 013 — Making a Lighthouse

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Making a Lighthouse |
| **Thời lượng** | 10:35 |
| **Chủ đề chính** | Tạo mô hình ngọn hải đăng |

## 1. Mục tiêu bài học

- Lên kế hoạch hình khối tổng thể cho ngọn hải đăng: thân trụ thuôn dần, phần đèn trên đỉnh, ban công/gờ trang trí.
- Thực hành tạo hình thuôn (taper) cho Cylinder bằng cách Scale các loop cạnh theo chiều cao khác nhau.
- Biết dùng Loop Cut để chia mesh thành nhiều đoạn phục vụ việc tạo hình thuôn từng phần.
- Ghép các bộ phận (thân, đèn, mái chóp) thành một mô hình ngọn hải đăng hoàn chỉnh.

## 2. Nội dung chính

Ngọn hải đăng cổ điển thường có silhouette đặc trưng: thân hình trụ thuôn nhỏ dần từ đáy lên đỉnh, một phần "đèn" hình trụ ngắn ở trên cùng (thường có kính bao quanh), và một mái chóp nón nhỏ trên cùng. Đôi khi có thêm một gờ/ban công nhỏ nhô ra ngay dưới phần đèn.

Quy trình tạo hình cơ bản:

1. Bắt đầu từ một **Cylinder** (số Vertices vừa phải, ví dụ 12-16 cho phong cách vẫn mượt nhưng không quá nặng polygon).
2. Vào Edit Mode, dùng **Loop Cut** (`Ctrl + R`) để chia thân trụ thành nhiều đoạn ngang theo chiều cao.
3. Chọn từng loop cạnh (Edge, mức chọn `2`, dùng `Alt + Click` để chọn nhanh cả vòng loop), Scale (`S`) từng loop giảm dần bán kính khi lên cao để tạo hiệu ứng thuôn (taper) tự nhiên.
4. Ở đoạn gần đỉnh, có thể mở rộng nhẹ bán kính ra (Scale > 1) trước khi thu lại để tạo phần "đèn" phình ra đặc trưng của ngọn hải đăng.
5. Trên cùng, dùng **Extrude** thu nhỏ dần hoặc thêm một **Cone** riêng để làm mái chóp.

Kỹ thuật taper thủ công này (chọn loop → scale) là một trong những kỹ năng modeling cơ bản quan trọng nhất, áp dụng được cho rất nhiều hình dạng hữu cơ và kiến trúc khác (cột, tháp, chai lọ...).

## 3. Quy trình thực hành gợi ý

1. Thêm một Cylinder mới, đặt Vertices phù hợp (12-16) trong Adjust Last Operation, chiều cao (Depth) đủ lớn để làm thân tháp.
2. Vào Edit Mode, `Ctrl + R` thêm 4-6 loop cut dọc theo thân trụ.
3. Lần lượt chọn từng loop từ đáy lên đỉnh (mức chọn Edge, `Alt + Click` để chọn nguyên vòng), Scale giảm dần bán kính để tạo độ thuôn.
4. Ở vị trí gần đỉnh, tạo một đoạn phình nhẹ ra để làm phần đèn.
5. Extrude phần đỉnh lên và scale về gần 0 để tạo mái chóp, hoặc thêm Cone riêng ghép vào.
6. Kiểm tra tổng thể bằng Front View (`Numpad 1`) để đánh giá độ cân đối của silhouette.
7. Apply Scale toàn object (`Ctrl + A > Scale`) sau khi hình dạng đã hoàn chỉnh, chuẩn bị cho các bước sculpt/modifier ở bài sau.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Loop Cut | `Ctrl + R` |
| Chọn nguyên vòng Edge Loop | `Alt + Click` |
| Scale | `S` |
| Extrude | `E` |
| Chuyển mức chọn Edge | `2` |
| Xem Front View | `Numpad 1` |
| Apply Scale | `Ctrl + A > Scale` |

## 5. Lưu ý & lỗi thường gặp

- Chọn nhầm loop cạnh (chọn cả object thay vì một vòng) khiến scale tác động sai vị trí — luôn kiểm tra vùng chọn màu cam trước khi Scale.
- Scale loop mà Pivot Point không đặt ở "Individual Origins" hoặc "Median Point" phù hợp có thể khiến hình dạng lệch tâm — kiểm tra Pivot Point ở thanh header (mặc định Median Point thường đủ dùng cho taper đối xứng quanh trục).
- Quá nhiều Loop Cut làm tăng số polygon không cần thiết cho phong cách low-poly — chỉ thêm đủ số đoạn cần để kiểm soát hình dạng.
- Quên Apply Scale trước khi thêm modifier ở bài sau (Decimate) có thể gây kết quả không như ý vì modifier tính toán dựa trên giá trị Scale thực.

## 6. Checklist thực hành

- [ ] Đã tạo được thân trụ thuôn dần bằng kỹ thuật Loop Cut + Scale từng loop.
- [ ] Đã tạo được phần đèn phình nhẹ gần đỉnh.
- [ ] Đã tạo được mái chóp trên cùng.
- [ ] Đã kiểm tra silhouette tổng thể từ Front View.
- [ ] Đã Apply Scale sau khi hoàn thiện hình dạng.

## 7. Tóm tắt

Ngọn hải đăng được xây dựng từ một Cylinder cơ bản, sử dụng kỹ thuật Loop Cut kết hợp Scale từng vòng cạnh để tạo hình thuôn tự nhiên, rồi hoàn thiện bằng phần đèn và mái chóp trên đỉnh — đây là bước khởi đầu cho dự án trọng tâm của module.
