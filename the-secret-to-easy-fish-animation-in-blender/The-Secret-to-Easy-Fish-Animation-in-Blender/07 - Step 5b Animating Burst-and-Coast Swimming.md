# 07 — Bước 5b: Keyframe chuyển động burst-and-coast trong Graph Editor

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Step five (phần thực hành keyframe) |
| **Thời điểm** | 04:27–08:00 |
| **Chủ đề chính** | Keyframe Location X, chỉnh handle trong Graph Editor để tạo nhịp burst-and-coast |

## 1. Mục tiêu bài học

- Chuẩn bị hình dạng Curve (qua handle type) để có các đoạn "lượn" tự nhiên làm điểm neo cho nhịp bơi.
- Keyframe vị trí object cá trên trục di chuyển (Location X) tại điểm đầu và cuối animation, với ngoại suy tuyến tính.
- Thêm keyframe tại từng thời điểm "lắc lư" và chỉnh handle trong Graph Editor (xoay/scale với pivot Individual Origins) để tạo hiệu ứng tăng tốc-giảm tốc theo đúng nhịp burst-and-coast.

## 2. Nội dung chính

**Chuẩn bị hình dạng Curve.** Trước khi keyframe, tác giả quay lại chỉnh hình dạng Curve: chuyển công cụ về **Box Select**, dùng phím **`V`** để đặt **loại tay cầm (Handle Type)** của các điểm điều khiển Curve thành **Automatic** — giúp Blender tự tính toán độ mượt hợp lý cho các đoạn cong. Khi xem Curve từ trên xuống (top view), cần đảm bảo **không có hai góc lượn quá gấp liên tiếp nhau**, vì điều đó dễ làm biến dạng thân cá quá mức khi đi qua qua Curve Modifier (đã gắn ở chương 05) — nên nới rộng các góc lượn cho mềm mại hơn nếu cần.

**Thiết lập hai keyframe nền.** Chia đôi khung nhìn, mở **Graph Editor** song song với viewport 3D. Chọn object cá, vào **Object Properties**, thêm một keyframe trên giá trị **Location X** tại khung hình bắt đầu animation. Di chuyển đến khung hình cuối cùng của animation, thêm một keyframe Location X mới ở đó (giá trị X tương ứng với việc cá đã "trượt" hết chiều dài mong muốn dọc Curve). Chọn cả hai keyframe (`A`), nhấn **`Shift + E`** để đặt **Extrapolation Mode = Linear** — giúp chuyển động tiếp tục theo đường tuyến tính. Tại bước này, ta có một chuyển động **tuyến tính đều đặn** — chính là chuyển động "phẳng, robot" cần khắc phục.

**Tạo nhịp burst-and-coast.** Đây là kỹ thuật cốt lõi: hình dung đồ thị tốc độ mong muốn — tốc độ tăng dần, rồi có một cú "nảy" (ứng với một lần lắc lư/burst), tốc độ lại tăng, lại nảy, lặp lại. Cách đơn giản nhất để tạo hiệu ứng này: rà lại theo thời gian, xác định **tất cả các thời điểm mà cá thực hiện một cú lắc lư** (tương ứng với các đoạn lượn đã chuẩn bị trên Curve), rồi tại mỗi thời điểm đó, **thêm một keyframe mới** trên đường F-Curve của Location X (dùng nút keyframe hoặc phím `I` khi hover trên kênh Location X trong Graph Editor).

Sau khi có đầy đủ các keyframe tại từng điểm lắc lư, phần tinh chỉnh diễn ra hoàn toàn trong Graph Editor bằng cách thao tác trên **handle** của từng keyframe:

- Đặt **Pivot Point = Individual Origins** — để mỗi keyframe xoay/scale quanh chính tâm của nó thay vì quanh một điểm chung.
- **Xoay (`R`)** handle tại các keyframe để tạo độ dốc phù hợp cho từng đoạn — mô phỏng việc tốc độ tăng nhanh ngay sau mỗi cú lắc lư.
- Chọn riêng các **handle phía trên** (điều khiển đoạn đi vào keyframe) và **scale (`S`)** lên để tạo hiệu ứng "nảy"/bước nhảy tốc độ rõ rệt hơn tại điểm đó.
- Chọn các **handle phía dưới** và **scale nhỏ lại** để làm mượt đoạn chuyển tiếp còn lại, tránh vọt tốc độ quá đà.
- Sau khi xem thử, có thể cần **chọn tất cả (`A`) và xoay lại** nếu cảm thấy hiệu ứng bị phóng đại quá mức — đây là bước tinh chỉnh lặp đi lặp lại (thử → xem → chỉnh lại).
- Nếu nhịp tăng tốc tổng thể cảm thấy quá chậm, có thể chuyển đến **khung hình đầu tiên**, đặt Pivot Point về **2D Cursor** của Graph Editor, rồi **scale trên trục X (`S`, `X`)** để nén toàn bộ đường cong lại theo thời gian, giúp nhịp bơi nhanh hơn tổng thể.
- Nếu một đoạn "lượn" cụ thể trông không thực tế (ví dụ do góc Curve quá gấp), có thể cần quay lại chỉnh riêng đoạn đó; nếu hiệu ứng tăng tốc xuất hiện **quá muộn so với đúng thời điểm lắc lư**, chọn keyframe/handle liên quan và **di chuyển xuống** (điều chỉnh giá trị/thời điểm) cho khớp lại.

**Kiểm tra kết quả.** Sau khi tinh chỉnh, ẩn Curve đi để quan sát thuần chuyển động của cá — kết quả thu được là một animation "cảm thấy" thực tế, đúng tinh thần burst-and-coast: các đoạn tăng tốc đột ngột xen kẽ đoạn lướt chậm dần. Tác giả cũng lưu ý chuyển động này **trông đẹp hơn nữa khi bật motion blur** ở bước render — độ mờ chuyển động tự nhiên che bớt một số biến dạng nhỏ không hoàn hảo của mesh trong lúc uốn nhanh.

## 3. Quy trình thực hành gợi ý

1. Chọn Curve, vào Edit Mode, chọn tất cả điểm điều khiển, nhấn `V` để đặt Handle Type = Automatic; kiểm tra từ top view và nới các góc lượn quá gấp.
2. Chia khung nhìn, mở Graph Editor. Chọn cá, thêm keyframe Location X ở frame đầu và frame cuối animation.
3. Chọn cả hai keyframe (`A`), nhấn `Shift + E`, chọn Linear để đặt Extrapolation Mode.
4. Xác định các thời điểm lắc lư dọc theo animation (khớp với các đoạn lượn trên Curve), thêm keyframe mới tại mỗi thời điểm đó trên kênh Location X.
5. Đặt Pivot Point = Individual Origins. Lần lượt tại từng keyframe: xoay (`R`) và scale (`S`) các handle trên/dưới để tạo hiệu ứng nảy tốc độ đúng nhịp burst-and-coast.
6. Preview animation nhiều lần, tinh chỉnh lại (xoay tất cả, dịch chuyển thời điểm, scale toàn cục ở frame đầu với Pivot = 2D Cursor) cho đến khi nhịp bơi thuyết phục.
7. Ẩn Curve, xem lại chuyển động thuần của cá; ghi nhớ để bật motion blur khi render (chương 08) vì nó làm chuyển động trông mượt và thực tế hơn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Đặt Handle Type cho điểm Curve (Edit Mode) | `V` |
| Chọn tất cả (vertex/keyframe) | `A` |
| Chèn keyframe (hover trên kênh trong Graph Editor) | `I` |
| Đặt Extrapolation Mode | `Shift + E` |
| Đặt Pivot Point = Individual Origins | Dropdown Pivot Point trên thanh header (Graph Editor/Viewport) |
| Xoay đối tượng/handle đã chọn | `R` |
| Scale đối tượng/handle đã chọn (giới hạn trục X) | `S` (hoặc `S`, `X`) |
| Đặt Pivot Point = 2D Cursor (Graph Editor) | Dropdown Pivot Point > 2D Cursor |

## 5. Lưu ý & lỗi thường gặp

- `Shift + E` điều khiển **Extrapolation** (hành vi F-Curve *ngoài* phạm vi hai keyframe biên) chứ không phải **Interpolation** (cách nội suy *giữa* hai keyframe, đặt qua phím `T`) — hai khái niệm dễ nhầm lẫn trong Graph Editor; nắm rõ sự khác biệt giúp debug đúng khi chuyển động không như mong đợi.
- Xoay/scale handle mà quên đặt Pivot Point = Individual Origins sẽ làm biến dạng toàn bộ hình dạng đường cong quanh một tâm chung sai lệch, thay vì chỉnh riêng từng keyframe như mong muốn.
- Số lượng và vị trí keyframe lắc lư nên khớp chặt với các đoạn lượn thực tế trên Curve — thêm keyframe tăng tốc ở một đoạn Curve thẳng sẽ tạo cảm giác vô lý (cá "nảy tốc độ" mà không có lý do hình học tương ứng).
- Đây là quy trình mang tính thử-sai (thử → xem → chỉnh lại nhiều lần) — đừng kỳ vọng đạt kết quả hoàn hảo ngay từ lần chỉnh đầu tiên; chính tác giả cũng điều chỉnh lại nhiều lần trong video (ví dụ nhận ra animation "quá chậm" hoặc một đoạn lượn "không thực tế" sau khi xem thử).

## 6. Checklist thực hành

- [ ] Đã đặt Handle Type = Automatic cho Curve và đảm bảo không có hai góc lượn quá gấp liên tiếp.
- [ ] Đã keyframe Location X tại frame đầu/cuối và đặt Extrapolation = Linear.
- [ ] Đã thêm keyframe tại từng thời điểm lắc lư khớp với các đoạn lượn trên Curve.
- [ ] Đã dùng Pivot Point = Individual Origins để xoay/scale handle từng keyframe, tạo nhịp tăng-giảm tốc độ.
- [ ] Đã xem lại nhiều lần và tinh chỉnh cho đến khi chuyển động burst-and-coast trông tự nhiên.

## 7. Tóm tắt

Toàn bộ "phép màu" của kỹ thuật animate cá nằm ở việc thao tác thuần túy trên **F-Curve của Location X trong Graph Editor** — không cần Shape Keys, Armature hay simulation — bằng cách đặt keyframe đúng tại các thời điểm lắc lư và chỉnh handle (xoay/scale với pivot Individual Origins) để mô phỏng chính xác nhịp tăng tốc-giảm tốc của burst-and-coast swimming.
