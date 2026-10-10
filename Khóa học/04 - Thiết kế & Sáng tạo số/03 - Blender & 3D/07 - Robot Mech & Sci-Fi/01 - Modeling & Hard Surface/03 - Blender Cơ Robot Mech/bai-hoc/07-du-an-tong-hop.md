# Bài 07 — Dự án tổng hợp: Hoàn thiện cụm cổ robot Mech Sci-Fi

## 1. Bài toán

Bạn được giao hoàn thiện phần **cổ cơ khí nối đầu và thân** cho một robot mech khoa học viễn tưởng. Đầu robot đã có sẵn nhưng cụm cổ còn thiếu. Sản phẩm cần có ngôn ngữ cơ khí rõ ràng, giữ khả năng chỉnh sửa từng cụm và có chất lượng hình học đủ tốt để tiếp tục làm những công đoạn tiếp theo.

Đây là một bài **project**, vì vậy các bước dưới đây là milestone và tiêu chí hoàn thành, không phải lời giải từng cú nhấp chuột.

## 2. Mục tiêu sản phẩm

Xây dựng một cụm cổ gồm:

- Một giá đỡ phía sau đầu, có hình dạng khác trụ nguyên thủy.
- Một bộ vỏ khớp cổ riêng, có bán cung phù hợp với giá đỡ.
- Ít nhất một chốt trụ đặt tại tâm khớp, có gờ/lớp bề mặt.
- Một trục trung tâm hình tròn và một bộ phận nối ở phía dưới.
- Các bu-lông gắn với những bề mặt hợp lý, có định hướng chính xác.
- Một số tấm ốp Sci-Fi có chiều dày và đường viền inset.

Chỉ đánh giá **modeling và tổ chức mesh**; không bắt buộc animation, rig, chất liệu hoặc render thành phẩm.

## 3. Yêu cầu kỹ thuật

| Nhóm | Yêu cầu | Cách tự kiểm tra |
| --- | --- | --- |
| Hình khối | Giá đỡ và khớp có vị trí hợp lý | Front / Side / Perspective |
| Tính độc lập | Cụm cổ xoay được tách object | Chọn từng object trong Outliner |
| Trục liên kết | Trục tròn không có mặt gấp đôi do Mirror thừa | Kiểm tra modifier và mesh |
| Topology | Không có mặt rác, hở/chồng không chủ ý | Edit Mode, Wireframe |
| Shading | Normals hợp lý và mặt cong hiển thị đều | `Shift + N`, Shade Smooth |
| Chi tiết | Có gờ, inset, extrude và bu-lông | Quan sát cận các điểm nối |
| Bố cục | Chi tiết vừa phải, không che hoàn toàn tâm khớp | Góc nhìn phối cảnh |

## 4. Các milestone thực hiện

### 4.1. Milestone A — Tạo bộ đỡ

Bắt đầu từ `Cylinder` tại phần sau đầu. Tạo một gối đỡ dạng nửa vòng, kéo dài lên vùng liên kết và xử lý mặt hở cần thiết. Có thể tái sử dụng chi tiết hình học có sẵn, nhưng không được để lại mặt trùng gây nhấp nháy.

**Checkpoint A:** Giá đỡ rõ ràng trong góc nhìn trước và bên.

### 4.2. Milestone B — Lắp khớp cổ

Nhân bản hình học phù hợp, tách thành object mới bằng `P > Selection`, lật `180°` theo trục thích hợp và căn hai cung khớp. Ẩn đầu khi cần xử lý mặt ở vị trí khuất.

**Checkpoint B:** Bộ khớp mới chọn độc lập và có tâm xoay trực quan hợp lý.

### 4.3. Milestone C — Bổ sung bộ truyền lực

Đặt 3D Cursor ở tâm khớp, tạo chốt trụ, thêm một vòng gờ và các mặt nổi. Dựng tiếp trục trung tâm bằng `Circle` 32 đỉnh, kéo theo Z và tạo nắp/gờ. Dùng `Shift + N` kiểm tra normals và giữ trục tròn tránh Mirror dư thừa.

**Checkpoint C:** Cổ robot có chốt, trục và khớp nối dưới.

### 4.4. Milestone D — Lắp phụ kiện cơ khí

Lựa chọn một bu-lông mẫu, nhân bản và dùng `Face Snapping` để bố trí tại các vị trí bắt vít hợp lý. Thêm ít nhất hai tấm ốp có độ dày, một viền inset và chi tiết gờ. Không che toàn bộ kết cấu khớp chính.

**Checkpoint D:** Các chi tiết được gắn lên bề mặt có chủ đích, không nổi/chìm bất thường.

### 4.5. Milestone E — Kiểm tra và nộp

Quan sát model ở nhiều hướng, sửa phần đâm xuyên, mặt rác và normals. Đặt tên các object có ý nghĩa và lưu phiên bản dự án cuối.

**Checkpoint E:** File `.blend` mở lại được, các object chính có tên dễ hiểu và mô hình vẫn giữ khả năng chỉnh sửa.

## 5. Gợi ý tổ chức tệp

```text
MECH_HEAD
NECK_REAR_BRACKET
NECK_ROTATING_HOUSING
NECK_SIDE_PIN
NECK_CENTER_SHAFT
NECK_LOWER_COUPLER
NECK_BOLTS
NECK_ARMOR_DETAILS
```

Đây là quy ước đề xuất. Có thể thay bằng tên khác nhưng mỗi object phải được nhận diện dễ dàng trong Outliner.

## 6. Tiêu chí đánh giá

| Tiêu chí | Trọng số |
| --- | ---: |
| Vị trí và hình dạng các khớp đúng logic | 30% |
| Topology, normals và modifier sạch | 25% |
| Tổ chức object rõ ràng, hợp lý | 20% |
| Bu-lông và ốp có chiều sâu, bám mặt | 15% |
| Tính thẩm mỹ và độ thống nhất | 10% |

**Definition of Done:** Không còn lỗi hình học rõ ràng ở các góc nhìn chính; cấu trúc cổ gồm đầy đủ bộ đỡ, bán khớp, chốt và trục; có chi tiết trang trí cơ khí; tệp `.blend` được lưu và có thể tiếp tục sử dụng.

## 7. Câu hỏi tự đánh giá

Trả lời sau khi hoàn thành:

1. Những cụm nào đang độc lập về Object và lý do giữ chúng riêng là gì?
2. Ở đâu bạn đã phải tạm tắt `Mirror Clipping` và tại sao?
3. Bạn kiểm tra điểm tâm khớp thế nào ở hai góc nhìn?
4. Các mặt nào được extrude/inset để tạo chiều sâu thay vì chỉ áp vật liệu?
5. Có `Mirror Modifier` nào không cần trên các trục tròn không?

## 8. Checklist nộp bài

- [ ] File `.blend` lưu được và mở lại đúng.
- [ ] Cấu trúc khớp cổ đủ các phần được yêu cầu.
- [ ] Các phần chính có tên hợp lý trong Outliner.
- [ ] Không có mặt trùng rõ ràng hoặc normals ngược gây lỗi hiển thị.
- [ ] Đã kiểm tra `Front View`, `Side View`, phối cảnh.
- [ ] Có thể giải thích quy trình tạo gối đỡ, chốt, trục, ốp và bu-lông.

## 9. Tổng kết

Hoàn thành dự án đồng nghĩa với việc bạn đã áp dụng một quy trình modeling cơ khí khép kín: dựng khối chính, tách và căn khớp, thêm chi tiết bề mặt, đặt phụ kiện bằng snapping và kiểm tra hình học trước khi chuyển sang giai đoạn tiếp theo của robot.
