# 09 — Nhân bản và tạo biến thể cho nhiều con cá

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Chuẩn bị đàn cá |
| **Thời điểm** | 20:18–21:47 |
| **Chủ đề chính** | Shift+D nhân bản, chỉnh riêng Amplitude/Phase Multiplier từng con, gom vào Collection |

## 1. Mục tiêu bài học

- Nhân bản con cá đã hoàn thiện (mesh + Armature + animation) thành nhiều bản sao.
- Tạo biến thể tốc độ/biên độ bơi riêng cho từng bản sao bằng cách chỉnh lại tham số F-Curve Modifier.
- Gom toàn bộ các con cá đã animate vào một **Collection** dùng chung cho bước Geometry Nodes ở chương sau.

## 2. Nội dung chính

**Nhân bản.** Với con cá cơ bản đã hoàn chỉnh (chương 08), chọn **toàn bộ** (mesh lẫn Armature — cả hai object liên quan), nhấn `Shift + D` để nhân bản, tạo ra **một vài bản sao**. Tác giả lưu ý **kích thước ban đầu của mỗi bản sao không quá quan trọng** ở bước này — vì bước Geometry Nodes ở chương sau sẽ tự xử lý việc **randomize kích thước (scale)** khi rải cả đàn, nên không cần tốn công chỉnh tay từng con ngay bây giờ.

**Vấn đề cần tránh: đồng bộ hóa.** Điều quan trọng nhất được nhấn mạnh: **không muốn tất cả các con cá lắc lư cùng lúc, cùng một kiểu** — nếu giữ nguyên tham số F-Curve Modifier giống hệt nhau (kể cả khi đã có Phase Offset ngẫu nhiên ban đầu ở chương 07), cả đàn có thể vẫn trông "đều" và thiếu tự nhiên khi quan sát tổng thể, đặc biệt nếu nhân bản nhiều lần từ cùng một nguồn.

**Chỉnh biến thể cho từng con cá.** Với **con cá thứ hai**: chuyển sang Pose Mode, dù animation cơ bản đã có sẵn (do nhân bản), tác giả chỉnh lại một vài tham số khác đi:
- Tăng **kích thước xích đu** (biên độ lắc lư, tức Amplitude) lên một chút.
- Tăng **Phase Multiplier lên khoảng 2** — gấp đôi so với bản gốc, khiến con cá này **bơi nhanh gấp đôi**.
- Cần nhớ chỉnh **cả hai xương** — nếu chỉ tăng Phase Multiplier của xương body mà quên xương tail, đuôi sẽ không đồng bộ với tốc độ mới của thân; sau khi chỉnh cả hai xương khớp lại, tác giả nhận thấy tốc độ hơi quá nhanh, nên giảm Amplitude/tham số liên quan xuống còn khoảng **0.15** để cân bằng lại.

Với **con cá thứ ba**, thực hiện tương tự nhưng theo hướng **chậm hơn**: đặt Phase Multiplier khoảng **0.085** cho cả hai xương (chậm hơn bản gốc), và dùng Amplitude khoảng **0.15** cho xương liên quan — tạo ra một kiểu bơi thong thả hơn, khác biệt rõ với hai con cá còn lại. Lưu ý quan trọng: **việc chỉnh các tham số F-Curve Modifier phải thực hiện ở Object Mode** khi chọn Armature (không phải trong Pose Mode) đối với một số thao tác — tác giả nhắc nhở cần "chuyển trở lại chế độ đối tượng để thay đổi Armature" tại một thời điểm trong quy trình.

**Gom vào Collection.** Sau khi có ba con cá với ba kiểu bơi khác nhau (tốc độ gốc, nhanh, chậm), chọn **tất cả** các object cá (bao gồm cả Armature của từng con), nhấn `M` (Move to Collection), chọn **"New Collection"**, đặt tên là **"Fish Collection"**, xác nhận. Toàn bộ đàn cá giờ nằm gọn trong một Collection duy nhất — chuẩn bị dữ liệu cần thiết cho bước Geometry Nodes ở chương 10, nơi Collection này sẽ được dùng làm nguồn instance để rải ngẫu nhiên.

Để dễ quan sát, tác giả cũng **tắt hiển thị (visibility) của các Armature** trong Outliner — vì từ giờ chỉ cần quan tâm đến mesh cá đã animate, không cần nhìn thấy khung xương điều khiển nữa trong quá trình làm việc tiếp theo.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh + Armature của con cá gốc, `Shift + D` để nhân bản 2 lần (tổng cộng 3 con cá).
2. Với con cá thứ hai: Pose Mode, tăng Amplitude và Phase Multiplier (~gấp đôi) cho cả xương body và tail, tinh chỉnh lại Amplitude nếu tốc độ/biên độ quá mức.
3. Với con cá thứ ba: giảm Phase Multiplier (~0.085) và đặt Amplitude (~0.15) cho cả hai xương để có kiểu bơi chậm hơn.
4. Chọn toàn bộ các object cá (mesh + Armature của cả 3 con), nhấn `M > New Collection`, đặt tên "Fish Collection".
5. Tắt hiển thị các Armature trong Outliner để làm gọn viewport cho các bước tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Nhân bản object đã chọn | `Shift + D` |
| Di chuyển object(s) vào Collection mới | `M > New Collection` |
| Ẩn/hiện object trong Outliner | Icon con mắt cạnh tên object trong Outliner |

## 5. Lưu ý & lỗi thường gặp

- Quên chỉnh tham số F-Curve Modifier trên **cả hai xương** (body và tail) khi tạo biến thể tốc độ cho một con cá sẽ khiến thân và đuôi "lệch nhịp" không mong muốn — luôn kiểm tra và đồng bộ cả hai.
- Chỉ dựa vào Phase Offset ngẫu nhiên (đã đặt từ chương 07) là chưa đủ để tránh cảm giác "đàn cá đồng phục" — cần chủ động thay đổi cả Amplitude và Phase Multiplier giữa các bản sao để có sự đa dạng thực sự về kiểu bơi.
- Không cần lo lắng về kích thước từng bản sao ở bước này — việc đó sẽ được xử lý tự động và ngẫu nhiên hóa ở bước Geometry Nodes (chương 10), tránh tốn công chỉnh tay hai lần.
- Nhớ gộp cả Armature (không chỉ riêng mesh) vào Collection nếu muốn giữ khả năng chỉnh sửa animation về sau — dù Armature sẽ bị loại khỏi Collection này khi thiết lập Geometry Nodes ở chương 10 để tránh nó cũng bị instance theo.

## 6. Checklist thực hành

- [ ] Đã nhân bản được ít nhất 2-3 con cá từ bản gốc.
- [ ] Đã chỉnh riêng Amplitude/Phase Multiplier cho từng con để có tốc độ/kiểu bơi khác nhau (nhanh, chậm, gốc).
- [ ] Đã đồng bộ tham số giữa xương body và tail cho mỗi con cá.
- [ ] Đã gom toàn bộ cá vào một Collection tên "Fish Collection".

## 7. Tóm tắt

Việc nhân bản kết hợp chỉnh riêng Amplitude/Phase Multiplier cho từng con cá tạo ra một đàn cá có kiểu bơi đa dạng thay vì đồng phục máy móc — một bước chuẩn bị dữ liệu quan trọng (gom vào Collection) trước khi hệ thống Geometry Nodes tiếp quản việc rải và nhân bản số lượng lớn ở chương tiếp theo.
