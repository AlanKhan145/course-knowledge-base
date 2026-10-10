# Bài 04 — Lắp thanh đỡ, bu lông và chi tiết giáp cẳng chân

## 1. Tóm tắt

Một tấm giáp có hình dạng đẹp nhưng không có điểm neo sẽ trông như đang lơ lửng bên ngoài chân robot. Để làm cho thiết kế cơ khí thuyết phục hơn, ta thêm **các thanh nối từ lõi cẳng chân ra giáp**, các thanh đỡ chạy ngang, bu lông nhỏ gắn vào lõi, bu lông lớn trên tấm giáp và những tấm kim loại phụ ở mặt sau.

Bài học tập trung vào cách tái sử dụng hình học, lặp chi tiết và bố trí chúng theo bề mặt bằng `Snapping`, thay vì tạo từng đối tượng từ đầu.

## 2. Mục tiêu học tập

- Tạo thanh liên kết bằng `Loop Cut` và `Extrude` từ lõi ra phía giáp.
- Dùng `Duplicate` và `Linked Selection` (`L`) để nhân bản các thanh đỡ.
- Sao chép và tách bu lông từ một bộ phận có sẵn, sau đó gộp trở lại mesh đích.
- Phân biệt lúc nào nên bật `Snap to Face` và lúc nào phải tắt để định vị thủ công.
- Kiểm tra độ dày giáp, độ xuyên lẫn và tính nhất quán của chi tiết phụ.

## 3. Chuẩn bị và nguyên tắc lắp ráp

Cần có lõi cẳng chân và ít nhất hai tấm giáp đã hoàn thành ở bài tạo giáp. Có thể tái sử dụng một bu lông/đầu vít đã dựng trên robot. Ở giai đoạn này, **giáp, thanh đỡ và bu lông đều là hình học modeling**; chúng không tự trở thành khớp vật lý hay hệ thống mô phỏng cơ học.

Nên thực hiện từng nhóm chi tiết, tạm ẩn những object cản tầm nhìn bằng `H` và dùng `Alt + H` để khôi phục. `Wireframe` phù hợp khi cần căn theo reference và chọn xuyên mesh; `Solid` phù hợp khi đánh giá độ xuyên lẫn giữa các khối.

## 4. Đùn các thanh nối từ lõi cẳng chân

1. Chọn **lõi cẳng chân** rồi vào `Edit Mode`.
2. Trong `Side View` và `Wireframe`, nhấn `Ctrl + R` để thêm hai vòng cắt ở nơi giáp cần có điểm tựa. Điều chỉnh khoảng cách sao cho thanh nối nằm trong vùng bề mặt phù hợp.
3. Chuyển `Face Select`, chọn các mặt hẹp được tạo giữa hai vòng cắt. Nhấn `E` và kéo các mặt **hướng về tấm giáp**.
4. Quan sát lại ở `Solid View`. Đầu thanh cần đi tới vùng bên trong tấm giáp, không nên lộ một đoạn quá dài xuyên ra mặt ngoài.
5. Lặp lại ở vùng cẳng chân thứ hai nếu tấm giáp còn thiếu chỗ tựa.

Cách này tận dụng chính mesh lõi, tạo cảm giác tấm giáp được giữ bởi khung xương cơ khí. Vị trí phải được xác nhận từ nhiều góc vì khoảng cách nhìn hợp lý ở mặt bên chưa chắc đúng khi nhìn từ trên.

## 5. Tạo các thanh đỡ ngang

1. Chọn một mặt phù hợp trên lõi, nhấn `Shift + D` để sao chép vùng mặt đó.
2. Dùng `G`, `Z` và `S`, `Y` định hình thành tiết diện nhỏ gần giống một khối chữ nhật.
3. Trong `Front View` hoặc `Top View`, dùng `R` để đổi hướng tiết diện nếu cần. Sau đó `E` để kéo dài thanh sang phía bên kia tấm giáp.
4. Di chuột lên mảnh hình học liên thông và nhấn `L` để chọn toàn bộ thanh. Di chuyển, thu nhỏ tiết diện và kiểm tra độ ăn khớp với giáp.
5. Dùng `Shift + D` nhân bản thanh thành những vị trí hỗ trợ khác nhau; điều chỉnh từng bản sao nếu chiều rộng giữa các tấm giáp không giống nhau.

**Checkpoint:** Từ `Top View`, các thanh tạo ra đường nối thật sự từ lõi đến vùng giáp. Từ `Side View`, thanh không phá vỡ quá nhiều đường bao ngoài của cẳng chân.

## 6. Sao chép và đặt bu lông

### 6.1. Tái sử dụng một bu lông

1. Mở object đang chứa mẫu bu lông có sẵn, vào `Edit Mode`.
2. Di chuột lên bu lông, nhấn `L` chọn hình học liên thông; `Shift + D` để tạo bản sao.
3. Nhấn `P` → `Selection` nếu cần tách bản sao ra object mới.
4. Ở `Object Mode`, chọn object bu lông sao chép trước, chọn object cần nhận bu lông **sau cùng**, rồi `Ctrl + J` để gộp.
5. Vào `Edit Mode` của object sau gộp; di chuột lên hình bu lông và nhấn `L` để chọn riêng chi tiết này khi cần di chuyển.

Sau `Ctrl + J`, các mesh có thể nằm trong cùng một object nhưng **không nhất thiết được hàn đỉnh**. Điều đó chấp nhận được đối với các chi tiết hard-surface tách rời.

### 6.2. Bu lông nhỏ bám bề mặt

Bật snapping và chọn kiểu phù hợp với mặt (`Face`) để các bu lông nhỏ có thể bám lên bề mặt lõi. Dùng `G` chuyển đến vị trí đầu tiên, sau đó `Shift + D` để lặp lại các bu lông theo thiết kế. Kiểm tra hướng của từng bu lông; việc hút vào bề mặt không bảo đảm chi tiết luôn xoay đúng hướng, nên có thể cần xoay bổ sung.

### 6.3. Bu lông lớn trên giáp

Với các bu lông trên tấm giáp, **tắt snapping** để đặt thủ công theo bề mặt nghiêng. Chọn một bu lông, nhấn `S` phóng to tương đối với vít nhỏ, sau đó dùng `G`, `R` căn theo góc nghiêng của giáp ở `Top View` và `Side View`. Nhân bản bằng `Shift + D` sang các vị trí tương ứng, điều chỉnh để đầu vít không chìm vào hoặc nhô ra quá mạnh.

Sau khi đặt vít lớn, kiểm tra lại `Solidify Thickness` của tấm giáp. Nếu cả tấm quá dày so với đầu vít, giảm độ dày giáp sẽ giúp tổng thể cân đối hơn.

## 7. Thêm các tấm kim loại phụ phía sau giáp

1. Chọn object giáp, vào Edit Mode và chọn một mặt làm nền cho miếng kim loại nhỏ.
2. `Shift + D` tạo mặt sao chép, dùng `G`, `Y` đưa nó vào vùng phía sau tấm giáp.
3. Dùng `S` thu nhỏ tiết diện, `S`, `Z` kéo dài theo phương đứng và `G` điều chỉnh vị trí.
4. Dùng `Shift + D` nhân bản thêm các miếng cùng họ, phân bố tại vị trí gắn giáp cần nhấn mạnh.
5. Nếu các miếng chưa đủ dài theo chiều ngang, chọn các mặt phù hợp và dùng `S`, `X` để tăng bề rộng, sau đó quan sát kết quả từ trước.

Các chi tiết phụ nên có vai trò trực quan: tạo bề mặt lắp ghép và làm nổi bật cấu trúc cơ khí, không chỉ phủ kín khoảng trống.

## 8. Các lỗi thường gặp

| Hiện tượng | Kiểm tra và xử lý |
| --- | --- |
| Giáp vẫn như đang bay | Thêm hoặc kéo dài các thanh đỡ từ lõi đến giáp |
| Thanh đỡ xuyên qua mặt ngoài | Chỉnh chiều dài ở Top View, xem lại trong Solid View |
| Vít bị hút vào sai chỗ | Kiểm tra snapping; tắt snapping khi đặt vít lớn thủ công |
| Sau `Ctrl + J` không chọn riêng được bu lông | Vào Edit Mode, di chuột lên phần mesh và nhấn `L` |
| Vít lớn che mất hình khối giáp | Thu nhỏ vít hoặc giảm `Thickness` của giáp nếu quá dày |

## 9. Thực hành

Hoàn thiện một cụm giáp cẳng chân với **ít nhất hai vị trí nối vào lõi**, các thanh đỡ ngang, bu lông nhỏ và bu lông lớn có tỷ lệ khác nhau, cùng một số miếng kim loại phụ ở sau giáp. Từ `Top View`, xác nhận có điểm tựa; từ `Side View`, xác nhận đường bao giáp không bị phá. Lưu file sau khi hoàn thành.

## 10. Câu hỏi ôn tập

### Câu 1

Vì sao cần thêm thanh đỡ cho tấm giáp ngoài cẳng chân?

A. Để hệ thống tự rig robot.  
B. Để thay thế `Mirror`.  
C. Để tăng số lượng đèn.  
D. Để thể hiện điểm gắn giáp với lõi và tránh cảm giác lơ lửng.

**Đáp án:** D. **Giải thích:** Thanh đỡ làm rõ quan hệ lắp ghép giữa hai bộ phận riêng biệt.

### Câu 2

Trong Edit Mode, thao tác nào giúp chọn toàn bộ bu lông nếu nó là một đảo mesh liên thông?

A. Di chuột lên bu lông và nhấn `L`.  
B. `Ctrl + S`.  
C. `Shift + C`.  
D. `Numpad 1`.

**Đáp án:** A. **Giải thích:** `L` chọn phần hình học liên thông dưới con trỏ.

### Câu 3

Khi muốn gắn nhiều vít nhỏ lên bề mặt lõi, chế độ snapping nào hữu ích nhất?

A. Snap to Increment duy nhất.  
B. Không dùng snapping trong mọi trường hợp.  
C. Snap to Face.  
D. Snap to Volume Center.

**Đáp án:** C. **Giải thích:** Face snapping đưa chi tiết đến bề mặt đang được chạm tới, giúp đặt vít nhanh hơn.

### Câu 4

Điều gì đúng sau khi gộp hai object bu lông và lõi bằng `Ctrl + J`?

A. Các đỉnh luôn được hàn tự động.  
B. Chúng thuộc cùng một object nhưng các đảo mesh có thể vẫn tách rời.  
C. Object lập tức có animation.  
D. Mọi modifier đều biến mất trong mọi trường hợp.

**Đáp án:** B. **Giải thích:** `Join` gộp các object về mặt quản lý; nó không phải lệnh hàn hình học.

### Câu 5

Khi bu lông lớn nằm trên một tấm giáp nghiêng, cách xử lý phù hợp là gì?

A. Bỏ kiểm tra góc nhìn.  
B. Chỉ thay đổi màu sắc.  
C. Xóa toàn bộ lớp giáp.  
D. Tắt snapping nếu cần và chỉnh vị trí, tỷ lệ, hướng xoay thủ công.

**Đáp án:** D. **Giải thích:** Bề mặt nghiêng cần được căn cả vị trí lẫn hướng của chi tiết.

## 11. Tổng kết

Giáp hoàn chỉnh về cấu tạo trực quan khi có **thanh nối từ lõi, thanh đỡ ngang, bu lông và các tấm kim loại phụ**. Kỹ năng quan trọng ở đây là sao chép hình học có chủ đích, đặt chi tiết đúng mặt và đánh giá tỷ lệ nhiều góc nhìn.
