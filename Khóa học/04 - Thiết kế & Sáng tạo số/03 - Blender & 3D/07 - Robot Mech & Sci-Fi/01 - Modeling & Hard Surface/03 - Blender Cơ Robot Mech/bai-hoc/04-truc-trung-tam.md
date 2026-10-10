# Bài 04 — Dựng trục cổ trung tâm và khớp nối phía dưới

## 1. Tóm tắt

Hai vỏ khớp bên ngoài cần một bộ phận ở giữa làm **trục liên kết**. Ta sẽ xây trục này bằng `Mesh Circle`, kéo thành ống, tạo gờ vòng, sửa hướng `Normals`, áp dụng shading/modifier phù hợp và dựng thêm một khớp phía dưới từ hình học đã có.

## 2. Mục tiêu học tập

- Tạo một trục dạng tròn bằng `Circle` có 32 đỉnh.
- Dùng `E Z`, `F` và `E` kết hợp `S Shift Z` để dựng thành ống và gờ bao quanh.
- Giải thích vì sao cần `Shift + N` sau khi chỉnh sửa các mặt/vòng.
- Sao chép modifier từ đối tượng mẫu và loại bỏ `Mirror` không còn phù hợp.
- Tạo khớp nối dưới bằng `Duplicate`, `Separate`, `Scale` và `Extrude`.

## 3. Dựng lõi trục từ Circle

Trong `Object Mode`, chọn `Shift + S > Cursor to World Origin` để đưa `3D Cursor` về tâm cảnh. Dùng `Shift + A > Mesh > Circle` và đặt số đỉnh là **32** tại bảng tùy chọn thêm đối tượng.

Số đỉnh 32 tạo một vòng tròn đủ mượt trong bối cảnh mô hình cơ khí đang dựng, đồng thời giữ cấu trúc dễ thao tác. Đây là thông số của quy trình này, không phải quy tắc bắt buộc cho mọi mô hình game.

1. Dùng `G Z` đưa vòng lên khu vực ngay sau/dưới đầu robot.
2. Nhấn `Tab` vào `Edit Mode`; dùng `Numpad 1` để căn `Front View`.
3. Nhấn `A`, dùng `S` để đặt bán kính thích hợp và `G Z` để chỉnh vị trí.
4. Nhấn `E`, sau đó `Z` kéo vòng mới lên dọc trục cổ; hình thành thành ống.
5. Chọn vòng miệng cần đóng, nhấn `F` để tạo mặt nắp.

**Chú ý:** Nếu cả hai đầu ống cần mở để lắp với bộ phận khác, đừng dùng `F` đóng một cách máy móc. Trong cấu trúc đang thực hành, `F` dùng tại đầu được thiết kế có mặt nắp.

## 4. Tạo gờ vòng trên thành ống

Phần trục tròn trơn có thể được bổ sung một gờ chạy quanh chu vi:

1. Ở `Edit Mode`, dùng `Ctrl + R` tạo các vòng cắt trên đoạn thành ống. Có thể cuộn con lăn để tăng số vòng khi thao tác Loop Cut.
2. Chọn vòng/cụm mặt tại khu vực giữa các đường cắt.
3. Dùng `Extrude` để thêm hình học, sau đó giới hạn `Scale` theo mặt phẳng X–Y bằng `S Shift Z`, làm đường gờ nhô vào trong hoặc ra ngoài mà không thay đổi tỷ lệ theo Z.
4. Kiểm tra hình trước và bên để chắc chắn gờ có độ rộng đồng đều.

Một cách thao tác rõ ràng khi muốn extrude nhưng không dịch chuyển ban đầu là bắt đầu `E`, hủy bước dịch chuyển bằng chuột phải, rồi dùng `S Shift Z`. Hình học extrusion vẫn được tạo, nhưng hãy kiểm tra kỹ để không bỏ lại mặt trùng khi vô tình không scale.

## 5. Hướng mặt và làm mượt

Khi bạn extrude, tạo nắp hoặc chỉnh nhiều vòng cùng lúc, hướng pháp tuyến mặt có thể không đồng nhất. Để tính lại theo hình học hiện có:

1. Trong `Edit Mode`, nhấn `A` chọn toàn bộ phần trục.
2. Nhấn `Shift + N` để **Recalculate Normals**.
3. `Tab` về `Object Mode`; chọn `Shade Smooth` để làm mềm cách hiển thị của bề mặt cong.

`Recalculate Normals` không có nghĩa là mọi lỗi hình học đều tự hết. Những vùng có mặt chồng, hở bất thường hoặc topology không định hướng được vẫn cần chỉnh bằng tay.

## 6. Chuyển modifier từ đối tượng khác

Muốn trục có cạnh vát tương tự các chi tiết cơ khí còn lại, có thể sao chép bộ modifier từ một object tham chiếu đang có `Bevel Modifier`:

1. Trong `Object Mode`, chọn đối tượng trục **trước**.
2. Giữ `Shift` chọn đối tượng mẫu có modifier mong muốn **sau cùng**, để nó là `Active Object`.
3. Nhấn `Ctrl + L > Copy Modifiers`.
4. Chọn lại trục để kiểm tra danh sách modifier đã nhận.
5. Nếu trục là vòng tròn đầy đủ, loại bỏ `Mirror Modifier` vừa sao chép (nếu có) vì nó có thể làm nhân đôi các mặt chồng lên nhau.
6. Giữ `Bevel` nếu góc vát tạo kết quả tốt và kiểm tra shading sau khi bỏ `Mirror`.

Đây là chỗ dễ sai: `Copy Modifiers` có thể chuyển **cả modifier không cần** sang object đích. Cần đọc danh sách sau khi sao chép, không chỉ nhìn bề mặt ở một góc camera.

## 7. Bổ sung nắp lõm và khớp nối dưới

Trên đầu trục, chuyển sang `Face Select`, chọn mặt nắp, dùng `I` tạo đường viền bên trong và `E` đùn phần giữa xuống/ra, hình thành nắp bậc. Nếu đầu kia là một vòng hở, chọn đúng vòng biên và `F` đóng nếu cấu trúc cần mặt nắp.

Tiếp tục dựng khớp dưới từ một đoạn tròn đang có:

1. Chọn mặt hoặc nhóm hình học phù hợp ở đáy trục.
2. `Shift + D`, sau đó `Z` di chuyển bản sao xuống dưới.
3. `P > Selection` để tách nó thành object riêng.
4. Trong `Object Mode`, chọn object mới, `Tab` vào `Edit Mode` và `A` chọn toàn bộ.
5. Dùng `S` tăng bán kính, `G Z` hạ vị trí và `E Z` tạo thêm phần thân khớp, căn theo hình dáng bên ngoài.
6. `A` rồi `Shift + N` để tính lại normals; `Tab` về `Object Mode` và lưu file.

**Checkpoint:** Trục giữa và khớp dưới là các phần có thể chọn riêng. Các mặt tròn không chồng do một `Mirror Modifier` dư thừa.

## 8. Debug và kiểm tra

| Triệu chứng | Nguồn gốc có thể | Hướng xử lý |
| --- | --- | --- |
| Trục có mặt gấp đôi hoặc nhấp nháy | Đang dùng Mirror cho vòng tròn nguyên vẹn | Gỡ Mirror trên trục, kiểm tra geometry |
| Gờ vòng dày không đều | Scale không giới hạn đúng mặt phẳng | Sử dụng `S Shift Z`, kiểm tra hướng trục |
| Trục nhìn tối/lạ sau extrusion | Normals không thống nhất | `A`, `Shift + N`, kiểm tra vùng bị hở/chồng |
| Modifier được sao chép sai chiều | Chọn Active Object sai | Chọn đối tượng nguồn sau cùng rồi `Ctrl + L` |
| Khớp dưới vẫn dính vào trục | Chưa `P > Selection` | Tách phần mới khi còn được chọn trong Edit Mode |

## 9. Thực hành ngắn

Thử hai phiên bản trục: một phiên bản có gờ nhỏ đi vào trong và một phiên bản có gờ nhô ra ngoài. Chọn phiên bản phù hợp hơn với không gian cổ robot; kiểm tra từ góc nhìn trước và bên. Giữ riêng object của khớp dưới.

## 10. Câu hỏi ôn tập

**Câu 1.** Loại mesh nào được dùng để bắt đầu dựng trục tròn trung tâm?

A. `Plane`.  
B. `Cube`.  
C. `Torus` được tạo sẵn.  
D. `Circle` 32 đỉnh.

**Đáp án: D.** Vòng Circle có thể extrude lên theo Z để hình thành trục rỗng/chứa mặt đóng có kiểm soát.

**Câu 2.** Khi đã tạo một vòng tròn đầy đủ, vì sao `Mirror Modifier` sao chép sang có thể không phù hợp?

A. Nó có thể nhân đôi các vùng hình học đã tồn tại, gây mặt chồng.  
B. Nó tự tạo animation.  
C. Nó buộc tắt Blender.  
D. Nó thay đổi đơn vị đo sang mét.

**Đáp án: A.** Mirror là công cụ đối xứng, không cần cho hình học đã có đủ hai phía.

**Câu 3.** `Shift + N` có vai trò gì trong Edit Mode?

A. Chuyển sang Camera View.  
B. Tính lại hướng pháp tuyến của các mặt.  
C. Thêm Cylinder.  
D. Dời Object Origin.

**Đáp án: B.** Recalculate Normals giúp chỉnh hướng mặt từ hình học hiện có, nhưng không sửa lỗi mesh bị chồng/hở.

**Câu 4.** Khi sao chép modifier với `Ctrl + L`, object nào nên được chọn sau cùng?

A. Object nhỏ nhất.  
B. Object đích chưa có modifier.  
C. Object nguồn đang chứa modifier cần sao chép.  
D. Object ở World Origin.

**Đáp án: C.** Blender dùng active object làm nguồn trong thao tác này.

**Câu 5.** Vì sao tách phần khớp dưới thành object riêng?

A. Để giữ các cụm cơ khí có thể lựa chọn/chỉnh sửa độc lập.  
B. Để xóa tất cả normals.  
C. Để biến model thành 2D.  
D. Vì Blender không thể chứa nhiều mesh cùng object.

**Đáp án: A.** Việc tách phần giúp tổ chức và chỉnh sửa các bộ phận cổ riêng biệt.

## 11. Tổng kết

Dựng trục cổ kết hợp **Circle → Extrude → Loop Cut/Scale → Normals → Modifier**. Một object hình tròn toàn phần thường không cần Mirror, trong khi Bevel và Shade Smooth có thể được dùng để tinh chỉnh cạnh và bề mặt sau khi topology đã đúng.
