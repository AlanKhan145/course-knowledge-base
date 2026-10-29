# Bài 03 — Tạo cánh mũi, vành mũi và lỗ mũi

**Thời lượng gợi ý:** 25–35 phút • **Mốc video:** 03:47–05:50

## 1. Mục tiêu

- Nhận biết mối liên hệ giữa **đầu mũi — cánh mũi — trụ mũi — lỗ mũi**.
- Tạo **độ dày viền cánh** trước khi khắc vùng tối bên trong.
- Phân biệt **hõm nhìn có chiều sâu** và **lỗ thực sự xuyên qua mesh**.

## 2. Đọc hình dạng từ dưới

Ở góc dưới lên, quan sát các yếu tố sau:

- **Đầu mũi** ở phía trước, che một phần khoang bên dưới.
- **Trụ mũi** là phần mô giữa hai lỗ mũi, không bị biến thành hai cánh mũi dính liền.
- **Cánh mũi** tạo thành vành dày bao ngoài, chuyển khối nhẹ về má.
- Hai lỗ mũi **không nhất thiết là hai hình tròn giống nhau**; hình thường biến đổi theo nhân vật và góc nhìn.

## 3. Quy trình thực hành

### Bước 1 — Bồi thể tích cánh mũi (03:47–04:22)

1. Chuyển sang góc nhìn từ dưới, kết hợp góc chính diện.
2. Dùng **Blob** ở Strength vừa/nhẹ **nâng khối** xung quanh vùng sẽ đặt lỗ mũi, hoặc dùng **Inflate** để tăng độ đầy của cánh mũi.
3. Điều chỉnh sao cho hai vành cánh có **độ dày hợp lý** ở mép ngoài.
4. Dùng **Smooth** nhẹ để hạn chế vệt cọ.

> **Hiệu đính quan trọng:** **Blob** về bản chất làm mô hình **phồng ra**, nên thích hợp dựng vành/cánh. Blob không mặc nhiên “đục lỗ”. Khi cần lõm xuống, sử dụng chiều **Subtract** của Draw/Crease hoặc công cụ tạo hõm phù hợp, và kiểm tra kết quả trên mesh.

### Bước 2 — Tạo hõm lỗ mũi (04:23–04:41)

1. Đánh dấu tương đối vị trí 2 lỗ ở mặt dưới của đầu mũi, tránh đặt quá sát mép trước.
2. Tạo lõm bằng **Draw ở hướng Subtract** hoặc **Crease/Draw Sharp** có kiểm soát tùy lượng chi tiết.
3. Đi từ **nông → sâu**, kiểm tra bóng đổ sau mỗi vài nét.
4. Giữ khối trụ mũi ở giữa; không nối hai hõm thành một rãnh liên tục.
5. Chuyển sang góc nghiêng để kiểm tra xem lỗ có nằm dưới cánh đúng vị trí không.

**[Bổ sung — quan trọng cho game/3D]:** Nếu muốn một **khoang mũi mở thật sự** (có mặt trong), việc sculpt tạo hõm trên mặt ngoài **chưa đủ**. Cần thiết kế topology cho cửa lỗ và phần lòng mũi bằng modeling/retopology hay phương pháp khác trước khi xuất final mesh.

### Bước 3 — Chỉnh hình nghiêng và độ nhô (04:43–05:50)

1. Dùng **Grab** di chuyển phần trên của mũi xuống/vào một chút nếu mặt nghiêng quá gãy.
2. Chỉnh nhẹ **đầu mũi** và điểm nối với vùng môi trên/trụ mũi để mũi không nhọn bất thường.
3. Làm mịn từng vùng nhỏ; giữ lại cạnh chuyển khối ở chân cánh mũi.
4. Kiểm tra lại toàn khuôn mặt thay vì chỉ phóng lớn mũi.

## 4. Các lỗi phổ biến

| Vấn đề | Nguyên nhân thường gặp | Cách xử lý |
|---|---|---|
| Lỗ mũi như 2 chấm đen | Chỉ tạo màu tối/đường khía, không có thể tích | Kiểm tra từ dưới; bồi vành mũi trước, lõm sau |
| Vành mũi mỏng như giấy | Chưa đủ thể tích ở cánh | Blob hoặc Inflate nhẹ, sau đó Smooth |
| Hai lỗ quá tròn hoặc đối xứng máy móc | Dựa vào biểu tượng đơn giản thay vì khối | Quan sát ảnh tham chiếu 3 góc, chỉnh hình elip/xiên phù hợp |
| Đầu mũi bị dẹt | Smooth quá mức | Dùng Grab/Clay Strips khôi phục thể tích rồi Smooth tối thiểu |
| Bề mặt vỡ/gồ | Dyntopo quá thưa hoặc nhấn quá mạnh | Kiểm tra mật độ mesh và độ mạnh cọ trước khi sửa |

## 5. Bài tập

- Hoàn thành hai cánh mũi và hai vùng lõm lỗ mũi.
- Chụp 3 góc: Front, Side, Bottom.
- Lưu `nose_02_nostrils.blend`.

**Tiêu chí đạt:** nhìn từ dưới có thể nhận biết 2 lỗ, trụ mũi và vành cánh; nhìn chính diện lỗ mũi không nổi như hai vòng tròn vẽ lên da.
