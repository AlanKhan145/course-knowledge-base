# Bài 02 — Dựng sống mũi và khối đầu mũi

**Thời lượng gợi ý:** 25–35 phút • **Mốc video:** 01:23–03:45

## 1. Mục tiêu

- Dựng **silhouette** và các mặt phẳng chính của mũi.
- Tạo rãnh chuyển tiếp có kiểm soát mà không khoét thành đường cứng.
- Hình thành đầu mũi tự nhiên với **Clay Strips → Smooth → Grab**.

## 2. Hình dung khối tổng quát

Trong lời thoại, sống mũi được mô tả gần với **hình thang / hệ các mặt phẳng**. Đây là lối giản lược để dựng khối, không phải mô tả giải phẫu chính xác tuyệt đối.

```text
CHÍNH DIỆN (minh họa ý tưởng, không theo tỷ lệ)

       vùng gốc mũi
           /‾‾\
          /    \      ← hai bên sống mũi
          |    |
         /      \
       (  đầu mũi )
       ( )      ( )   ← hai cánh mũi

MẶT NGHIÊNG: trán → gốc mũi → sống mũi → đầu mũi → trụ mũi.
```

Nguyên tắc là dùng **khối trước, rãnh sau**: tạo mặt phẳng lớn, kiểm tra góc nghiêng, rồi mới đào sâu quanh chân cánh mũi.

## 3. Quy trình thực hành

### Bước 1 — Lấy tỷ lệ lớn (01:23–01:57)

1. Quan sát vùng mũi ở cả **Front** và **Side**.
2. Chọn **Grab** cỡ cọ lớn để chỉnh toàn khối: sống mũi được nối mượt vào giữa hai mắt, đầu mũi nhô vừa đủ.
3. Dùng **Clay Strips** ở Strength thấp để gia cố những mặt phẳng bên mũi nếu khối còn thiếu.
4. **Dừng sớm:** nếu thấy một cạnh sống mũi quá sắc, chưa nên khắc thêm.

**Dấu hiệu đạt:** chính diện phân biệt được vùng sống và hai bên cánh; nghiêng thấy rõ đỉnh đầu mũi mà không biến thành mỏ nhọn.

### Bước 2 — Làm chuyển tiếp gốc mũi (02:04–02:34)

1. Dùng **Crease** nhẹ quanh các đoạn chuyển từ sống mũi xuống cạnh mũi hoặc chân cánh mũi, **không vạch một đường liên tục thật sâu**.
2. Dùng **Smooth** (có thể giữ `Shift` khi đang dùng các cọ phù hợp) để giảm dấu cọ rõ và gắn các khối với nhau.
3. So góc nghiêng: sống mũi phải có nét chuyển tiếp tự nhiên từ vùng gian mày.

> **Lưu ý phiên bản:** Video gợi ý `Shift+C` để chọn Crease; trong bộ Essentials 4.5 LTS, `Shift+C` là preset **Crease Polish**, không nhất thiết giống đúng loại Crease của Blender 2.8. Chọn bằng **tên cọ** để khỏi sai.

### Bước 3 — Dựng đầu mũi (02:35–03:45)

1. Chuyển xuống góc **nhìn từ dưới** để đọc đường bao của đầu mũi.
2. Dùng **Grab** thay đổi nhẹ vị trí đầu mũi và độ nhô phần dưới.
3. Dùng **Clay Strips** bổ sung hai khối tròn nhỏ ở chuyển tiếp từ đầu mũi sang cánh mũi; chỉ thêm vừa đủ để tạo ánh sáng tối khối.
4. Dùng **Smooth** làm hòa các nét Clay Strips với bề mặt cũ.
5. Quay trở lại Front và Side; điều chỉnh lại bằng Grab nếu đầu mũi bị bè hoặc lệch.

## 4. Tại sao nên dùng các cọ theo thứ tự này?

| Công cụ | Công dụng chính | Dễ mắc lỗi khi |
|---|---|---|
| Grab | Kéo đẩy silhouette, tỷ lệ | Chỉnh cọ quá nhỏ gây méo cục bộ |
| Clay Strips | Bồi khối để đọc mặt phẳng | Dùng Strength mạnh để lại sọc cọ |
| Crease | Nhấn đường chuyển tiếp | Khoét rãnh quá sâu, mũi trông “dán lên mặt” |
| Smooth | Giảm gồ ghề | Lạm dụng làm biến mất đầu mũi/cánh mũi |

## 5. Quy tắc kiểm soát chất lượng

- **Xa trước — gần sau:** thu nhỏ viewport xem silhouette rồi mới phóng to.
- **Đầu mũi là khối có thể tích:** không chỉ một chấm lồi.
- **Rãnh không thay thế được khối:** nếu viền cánh mũi không rõ, hãy kiểm tra độ dày trước khi dùng Crease.
- Nếu các cọ không tác dụng, kiểm tra **Mask**, mật độ lưới và việc chọn đúng object/mode.

## 6. Bài tập

Từ model đã lưu ở Bài 01, tạo một khối mũi rõ ở Front và Side nhưng chưa thêm lỗ mũi chi tiết. Lưu `nose_01_blockout.blend` và chụp hai góc để so trước/sau.

**Tự hỏi:** Nếu tắt mọi chi tiết nhỏ, đầu mũi còn đọc được bằng silhouette không?
