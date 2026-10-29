# Bài 06 — Dựng lưỡi từ Plane với Solidify và tạo điểm xoay

**Mốc video:** 18:04–20:20  
**Sản phẩm:** Lưỡi có mặt trên bo tròn, có độ dày và điểm xoay gần gốc lưỡi.

## Mục tiêu

- Chuyển một plane thành bề mặt lưỡi có thể điều chỉnh biên dạng.
- Dùng **Solidify** để tạo chiều dày và **Subdivision Surface** để làm mượt.
- Hiểu cách đặt **Origin / Pivot** cho điều khiển xoay.

## 1. Chuẩn bị

1. Ẩn tạm hàm trên và các bộ phận cản trở góc nhìn.
2. Giữ **hàm dưới** làm mốc chiều rộng và vị trí mà lưỡi cần nằm vào.
3. `Shift+A → Mesh → Plane`, đổi tên `Tongue`.
4. Đặt plane nằm trong vùng sàn miệng và điều chỉnh hướng/scale theo model. Đặt gần đối xứng theo đường giữa nhân vật.

## 2. Thêm modifier

- **Solidify**: tạo **thickness** cho lưỡi vốn bắt đầu từ một mặt phẳng.
- **Subdivision Surface**: làm mềm dáng lưỡi, nhất là vùng đầu lưỡi và viền hai bên.
- Nên kiểm tra thứ tự modifier và cả mặt trên/mặt dưới trước khi áp dụng. Giá trị thickness thay đổi theo kích thước nhân vật, không có con số cố định trong bản chép lời.

## 3. Tạo dáng lưỡi

1. `Tab` vào Edit Mode.
2. `Ctrl+R` tạo các **loop cut** dọc theo bề mặt để có đủ vertex thay đổi biên dạng.
3. `G Y`/`S Y` (tùy trục hướng miệng) để đưa gốc lưỡi sâu về phía sau hàm, đầu lưỡi hướng ra phía răng cửa.
4. Thu hẹp vùng **đầu lưỡi** và tạo đầu bo mềm, tránh tạo điểm nhọn như mũi giáo.
5. Chỉnh các cạnh hai bên tạo dạng bầu, rộng hơn ở thân so với đầu.
6. Có thể chia nhỏ vài cạnh nếu thiếu độ phân giải tạo cong; hạn chế chia quá dày.
7. Bật/tắt Subdivision để so sánh; thay đổi thickness nếu quá mỏng hoặc xuyên đáy miệng.

```text
Nhìn từ trên xuống (minh họa)

        Phía sau/gốc lưỡi
              _______
            /         \
           |           |
           |           |
            \         /
             \_______/
            Đầu lưỡi
         (hướng ra răng cửa)
```

## 4. Origin nằm ở đâu và vì sao?

Trong nguồn, tác giả đặt **Origin** gần vùng phía sau của lưỡi để có thể xoay phần lưỡi quanh gốc, thay vì quanh tâm hình học:

1. Trong Edit Mode, chọn vertex hoặc điểm tham chiếu gần gốc lưỡi.
2. `Shift+S → Cursor to Selected` đưa **3D Cursor** đến vị trí này.
3. Về Object Mode, chọn **Object → Set Origin → Origin to 3D Cursor** (có thể qua menu chuột phải tùy keymap).
4. Kiểm tra `R X` hoặc trục xoay phù hợp bằng một góc nhỏ; hoàn tác xoay thử.

**Bổ sung:** Origin tốt giúp thao tác dựng nhanh, nhưng khi rig thật, điều khiển lưỡi thường cần **bone/shape key** để biến dạng. Pivot object đơn lẻ không thay thế rig lưỡi.

## 5. Checklist

- [ ] Lưỡi nhìn từ trên là khối thuôn bo, không vuông cứng.
- [ ] Solidify tạo thickness đủ, không bị lật mặt hoặc hở mép rõ rệt.
- [ ] Lưỡi ở dưới hàng răng trên, không xuyên qua nướu dưới khi ở rest pose.
- [ ] Origin nằm gần gốc lưỡi (hoặc vị trí dự định cho điều khiển).
- [ ] Lưu `mouth_06_tongue.blend`.

**Chuyển bài:** [Bài 07 — Lắp ráp](07-lap-rap-kiem-tra-topology-va-rig.md).
