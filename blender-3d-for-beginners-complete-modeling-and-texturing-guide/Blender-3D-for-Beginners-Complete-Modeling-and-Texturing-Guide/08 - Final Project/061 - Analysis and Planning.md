# 061 — Analysis and Planning

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Analysis and Planning |
| **Thời lượng** | 1:53 |
| **Chủ đề chính** | Phân tích concept và lập kế hoạch sản xuất |

## 1. Mục tiêu bài học

- Hiểu tổng quan dự án cuối khóa: dựng một nhân vật ếch phiêu lưu (frog adventurer) theo phong cách fantasy.
- Biết cách đọc và phân tích concept/reference art trước khi bắt tay dựng hình.
- Phân chia dự án thành các nhóm tài sản (asset) rõ ràng để dễ quản lý.
- Lập thứ tự sản xuất (production order) hợp lý nhằm tránh phải làm lại các bước ở giai đoạn sau.

## 2. Nội dung chính

Nhân vật trung tâm của dự án là một **chú ếch phiêu lưu** mang dáng dấp fantasy: khoác áo gile/áo choàng, mặc quần short, thắt lưng da, đeo một ba lô đan lát trên lưng có cuộn dây thừng buộc kèm, một chiếc túi ngủ cuộn tròn, tay cầm cây gậy gắn đèn lồng, và đứng trên một bệ đá nhỏ. Trước khi mở Blender dựng hình, bài học nhấn mạnh bước **phân tích reference**: quan sát tỷ lệ cơ thể ếch cách điệu (đầu to, thân ngắn, chân sau to có màng), xác định các điểm nhấn về tính cách (tư thế phiêu lưu, trang bị lỉnh kỉnh) và ghi chú vật liệu dự kiến cho từng bộ phận.

Toàn bộ khối lượng công việc được chia thành bốn **nhóm tài sản (asset category)**: (1) *Body* — cơ thể ếch; (2) *Clothes* — trang phục mặc trực tiếp lên cơ thể; (3) *Props/Accessories* — các vật thể rời như dây thừng, ba lô, túi ngủ, gậy, đèn; (4) *Environment* — bệ đá làm nền đứng. Việc phân nhóm này giúp tổ chức Collection trong Outliner ngay từ đầu, thuận tiện ẩn/hiện từng phần khi làm việc.

Về **thứ tự sản xuất**, bài học đề xuất quy trình: blocking cơ thể trước để xác lập tỷ lệ tổng thể → blocking trang phục dựa trên cơ thể đã có → tinh chỉnh song song cả hai → dựng các phụ kiện độc lập → rig đơn giản cho tư thế cầm gậy → bệ đá → cuối cùng là texturing toàn bộ và render/composite. Thứ tự này tuân theo nguyên tắc "từ tổng thể đến chi tiết" (block-in trước, refine sau) đã được áp dụng xuyên suốt các module trước của khóa học.

## 3. Quy trình thực hành gợi ý

1. Thu thập vài ảnh reference/concept của nhân vật ếch phiêu lưu (phác thảo tư thế, trang phục, phụ kiện).
2. Đưa ảnh vào Blender làm tham chiếu qua `Shift + A > Image > Reference`, hoặc mở song song trên màn hình phụ.
3. Ghi chú lại danh sách 4 nhóm asset (Body, Clothes, Props, Base) và các chi tiết cần có trong mỗi nhóm.
4. Tạo sẵn các Collection tương ứng trong Outliner (chuột phải > New Collection, đặt tên Body/Clothes/Props/Base).
5. Sắp xếp thứ tự công việc theo dependency đã phân tích ở trên, ghi thành checklist để theo dõi tiến độ suốt module.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm ảnh tham chiếu | `Shift + A > Image > Reference` |
| Tạo Collection mới | Chuột phải trong Outliner > New Collection |
| Gộp object vào Collection | `M` |
| Đổi tên object/collection | `F2` |
| Ẩn/hiện Collection | Click biểu tượng mắt trong Outliner |

## 5. Lưu ý & lỗi thường gặp

- Bỏ qua bước lập kế hoạch dễ dẫn đến việc phải dựng lại trang phục khi tỷ lệ cơ thể thay đổi ở giai đoạn sau.
- Không tổ chức Collection ngay từ đầu khiến Outliner trở nên rối khi số lượng object tăng dần qua các bài sau.
- Đánh giá sai độ phức tạp của từng phần (ví dụ xem nhẹ ba lô đan hoặc túi ngủ) khiến phân bổ thời gian không hợp lý.

## 6. Checklist thực hành

- [ ] Đã thu thập đủ reference cho nhân vật và các phụ kiện chính.
- [ ] Đã phân nhóm asset thành Body, Clothes, Props, Base.
- [ ] Đã tạo Collection tương ứng trong Outliner.
- [ ] Đã xác định rõ thứ tự sản xuất cho các bài học tiếp theo.

## 7. Tóm tắt

Trước khi dựng hình, việc phân tích concept và lập kế hoạch theo nhóm asset cùng thứ tự sản xuất hợp lý giúp toàn bộ dự án nhân vật ếch phiêu lưu diễn ra mạch lạc, hạn chế phải làm lại ở các bước sau.
