# 07 — Chu kỳ bơi tự động bằng F-Curve Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Animation |
| **Thời điểm** | 16:18–19:18 |
| **Chủ đề chính** | Graph Editor, F-Curve Modifier "Built-In Function" (sin), lệch pha thân/đuôi |

## 1. Mục tiêu bài học

- Tạo một keyframe nền tại frame đầu cho Pose của xương, làm "neo" cho F-Curve Modifier.
- Áp dụng **F-Curve Modifier "Built-In Function"** (hàm sin) lên kênh **Rotation Z** để tự động tạo chuyển động lắc lư tuần hoàn, không cần keyframe thủ công nhiều khung hình.
- Copy/paste modifier giữa hai xương và chỉnh **Amplitude/Phase Multiplier/Phase Offset** để tạo hiệu ứng đuôi "theo sau" thân theo đúng nguyên lý follow-through.

## 2. Nội dung chính

**Keyframe nền.** Trong **Graph Editor**, chuyển sang **Pose Mode**, chọn xương **tail**, đảm bảo Playhead đang ở **frame đầu tiên** của animation. Di chuột qua viewport 3D và nhấn `I` — thao tác này chèn keyframe cho **toàn bộ các thuộc tính (Loc/Rot/Scale)** của xương đang chọn tại frame đó, tạo ra một "khung neo" ban đầu cần thiết để F-Curve Modifier có dữ liệu để hoạt động dựa trên.

**F-Curve Modifier trên xương đuôi.** Trong Graph Editor, chọn kênh **Rotation Z** của xương tail (nếu sidebar không hiện, nhấn `N` để mở/ẩn). Vào tab **Modifiers** của sidebar, **Add Modifier**, chọn loại **"Built-In Function"** — đây là một trong các loại F-Curve Modifier có sẵn của Blender, cho phép áp một hàm toán học (mặc định là **sin**) trực tiếp lên giá trị của kênh, tạo dao động tuần hoàn mà không cần keyframe lặp lại thủ công. Xem thử bằng Play: xương tail lắc qua lại đúng như mong đợi. Các tham số được tinh chỉnh:

- **Amplitude** (biên độ dao động): khoảng **0.3** — quyết định "lắc mạnh đến đâu".
- **Phase Multiplier** (về cơ bản là tốc độ dao động): khoảng **0.1**.
- **Phase Offset**: đặt một độ lệch ngẫu nhiên bất kỳ (ví dụ khác 0) — mục đích là để khi tạo nhiều con cá sau này (chương 09), chúng **không lắc lư đồng bộ hoàn toàn với nhau**, tạo cảm giác tự nhiên hơn cho cả đàn.

**F-Curve Modifier trên xương thân (lệch pha).** Quay lại chọn xương **body**, quay về frame đầu, nhấn `I` để chèn keyframe nền tương tự. Thay vì thiết lập lại từ đầu, cách nhanh nhất là **copy F-Curve Modifier từ kênh Rotation Z của xương tail** (nút copy trên panel modifier) rồi **paste** nó vào kênh Rotation Z của xương body. Sau đó chỉnh lại tham số cho xương body:

- **Amplitude nhỏ hơn** xương tail — ví dụ khoảng **0.1** — vì thân cá dao động ít hơn nhiều so với đuôi trong một chu kỳ bơi tự nhiên.
- **Phase Multiplier giữ nguyên** giống xương tail (để cùng một "tốc độ nhịp" tổng thể).
- **Phase Offset đặt lệch gần như đối pha (antiphase)** so với đuôi — tác giả thử nghiệm với giá trị khoảng **-1**, sau đó tinh chỉnh thành khoảng **-1.1** để "thẳng hàng tốt hơn" — kết quả là body dùng Phase Offset **-0.1** trong khi tail dùng khoảng **-1.1** (cả hai **cùng Phase Multiplier**), tạo ra hiệu ứng: **thân di chuyển trước, đuôi "vỗ" theo sau** — đúng nguyên lý follow-through/overlapping action đã thấy ở các kỹ thuật animate cá khác.

**Kiểm tra kết quả.** Sau khi hai xương đã đồng bộ đúng lệch pha, ẩn (Hide) Armature đi để chỉ quan sát thuần chuyển động của mesh cá — chuyển động lắc lư thân-đuôi-theo-sau hiện rõ, đúng cảm giác bơi tự nhiên mong muốn. Đây là lúc tác giả nhận ra vấn đề mesh nhỏ đã ghi nhận ở chương 06 (weight bleed) hiện rõ hơn khi xem chuyển động đầy đủ — sẽ được xử lý ngay ở chương tiếp theo.

## 3. Quy trình thực hành gợi ý

1. Pose Mode, chọn xương tail, tại frame đầu, hover viewport 3D, nhấn `I` để chèn keyframe nền cho toàn bộ thuộc tính.
2. Graph Editor, chọn kênh Rotation Z của tail, mở sidebar (`N`) > tab Modifiers > Add Modifier > Built-In Function.
3. Chỉnh Amplitude ~0.3, Phase Multiplier ~0.1, Phase Offset một giá trị ngẫu nhiên bất kỳ; Play để xem thử.
4. Chọn xương body, tại frame đầu, nhấn `I` để chèn keyframe nền tương tự.
5. Copy F-Curve Modifier từ kênh Rotation Z của tail, paste vào kênh Rotation Z của body.
6. Chỉnh Amplitude nhỏ hơn (~0.1), giữ nguyên Phase Multiplier, đặt Phase Offset gần đối pha so với tail (ví dụ tail ~-1.1, body ~-0.1) và tinh chỉnh cho đến khi thân "dẫn" và đuôi "theo sau" hợp lý.
7. Ẩn Armature, Play lại animation để đánh giá thuần chuyển động của mesh cá.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Chèn keyframe cho toàn bộ thuộc tính (hover viewport) | `I` |
| Mở/ẩn sidebar trong Graph Editor | `N` |
| Thêm F-Curve Modifier | Sidebar N > tab Modifiers > Add Modifier |
| Chọn loại modifier "Built-In Function" | Dropdown Type trong panel Add Modifier |
| Copy/Paste F-Curve Modifier giữa các kênh | Icon copy/paste trên panel modifier |
| Ẩn/hiện object trong viewport | `H` / `Alt + H` |

## 5. Lưu ý & lỗi thường gặp

- Quên chèn keyframe nền (`I`) trước khi thêm F-Curve Modifier có thể khiến modifier không có "đường cơ sở" để dao động quanh, gây kết quả không như mong đợi.
- Amplitude/Phase Multiplier là các giá trị cần tinh chỉnh bằng mắt (thử → xem → chỉnh lại) — các con số trong video (0.3, 0.1, -1.1...) là điểm khởi đầu tham khảo, không phải công thức cố định cho mọi kích thước/tỉ lệ cá khác nhau.
- Phase Offset giữa thân và đuôi quá gần 0 (đồng pha) sẽ làm mất hiệu ứng follow-through — cần đủ lệch pha (gần đối pha) để tạo cảm giác đuôi "đuổi theo" thân thay vì di chuyển y hệt cùng lúc.
- Đặt Phase Offset ngẫu nhiên cho xương tail ngay từ bước này (dù chỉ có một con cá) là chuẩn bị quan trọng cho chương 09 — nếu bỏ qua, tất cả các bản sao cá sau này mặc định sẽ lắc lư đồng bộ hoàn toàn, trông rất máy móc khi có nhiều cá cùng lúc.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe nền cho cả xương tail và body tại frame đầu.
- [ ] Đã thêm F-Curve Modifier Built-In Function (sin) lên kênh Rotation Z của xương tail.
- [ ] Đã copy modifier sang xương body và chỉnh Amplitude/Phase Offset để tạo lệch pha hợp lý.
- [ ] Đã ẩn Armature và xác nhận chuyển động bơi thân-dẫn-đuôi-theo-sau trông tự nhiên.

## 7. Tóm tắt

F-Curve Modifier "Built-In Function" là kỹ thuật animate hoàn toàn khác so với keyframe thủ công từng khung hình: chỉ với một keyframe nền và vài tham số (Amplitude, Phase Multiplier, Phase Offset), có thể tạo ra một chu kỳ bơi lặp vô hạn, với độ lệch pha giữa thân và đuôi mô phỏng đúng nguyên lý follow-through — toàn bộ chuyển động được điều khiển bằng tham số thay vì đường cong keyframe vẽ tay.
