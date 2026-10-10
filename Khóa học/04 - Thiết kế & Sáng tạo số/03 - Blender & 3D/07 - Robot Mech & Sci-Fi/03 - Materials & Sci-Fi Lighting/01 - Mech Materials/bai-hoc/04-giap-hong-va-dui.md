# Bài 04 — Hoàn thiện giáp, hông, đùi và các chi tiết nối

## 1. Tóm tắt

Ở chân trên của robot, mỗi vật liệu đảm nhiệm một vai trò: `Dark Metal` làm rõ cấu trúc phía trong, `Light Metal` tạo điểm sáng tại các tấm ốp, còn `Blue Metal` đánh dấu một số khớp lớn. Bài này hoàn thiện vật liệu của các vùng giáp và cụm chân trên theo cùng hệ màu đã thiết lập.

## 2. Mục tiêu học tập

- Gán `Dark Metal` cho bulông và dầm nối mà không làm đổi các mảng lớn.
- Giữ một số miếng ốp `Light Metal` trên nền giáp tối.
- Phân vùng mặt trên đùi và quanh khớp bằng lựa chọn đảo mesh, mặt và face loop.
- Tách bạch vai trò của ba nhóm vật liệu kim loại.

## 3. Hoàn thiện chi tiết nhỏ và tấm giáp

Với object chứa các bulông và thanh nối, vào `Edit Mode`, chọn phần hình học chính bằng `L` và đảo lựa chọn với `Ctrl + I` nếu phù hợp. Gán phần bulông cần tối vào `Dark Metal`. Trước khi thoát mode, kiểm tra xem các thanh dầm đã có màu phù hợp hay chưa; trong nhiều cụm, dầm cũng cần tối để đồng bộ với bu lông.

Đối với các tấm giáp, đặt vật liệu nền của object sang `Dark Metal` rồi tạo slot `Light Metal` cho những chi tiết nhỏ cần nổi bật. Dùng `L` khi chúng là đảo mesh riêng; nếu mặt quá nhỏ hoặc nằm sâu, chuyển `Wireframe` và chọn từng mặt. Gán `Light Metal` chỉ cho các chi tiết chọn lọc.

Độ tương phản ở đây không phụ thuộc vào số lượng màu nhiều mà ở **cách đặt sáng cạnh tối**: một miếng kim loại sáng giữa nền tối sẽ có vai trò như đường phân chia cấu trúc.

## 4. Hông và đùi trên

### 4.1. Khớp hông và mảnh giữa

Chọn các object của khớp hông hoặc mảnh nằm giữa thân và chân. Với những object chỉ cần kim loại tối, đặt toàn bộ object sang `Dark Metal`. Có thể tạm ẩn từng cụm sau khi kiểm tra để tiếp tục làm việc trên đùi mà không bị che khuất.

### 4.2. Mảng đùi với nhiều vật liệu

Chọn object đùi trên rồi vào `Edit Mode`. Thêm slot `Dark Metal` vào object vốn có phần vỏ sáng. Dùng `L` để chọn phần hình học lớn cần giữ lại, đảo lựa chọn nếu các phần còn lại đều cần tối; sau đó bổ sung những face loop ở các đường viền cần đồng màu tối. Chọn `Dark Metal` và **Assign**.

Nếu một bộ phận có nhiều vùng nối, không nên dựa hoàn toàn vào `Ctrl + I`. Hãy kiểm tra lại toàn bộ vùng chọn, nhất là những mặt bên trong hoặc mặt có thể nhìn thấy qua khe giáp.

## 5. Đùi có chi tiết Blue Metal

Một cụm đùi hoặc khớp trên chân có thể sử dụng `Blue Metal` làm vật liệu nền thay cho `Light Metal`. Để làm rõ lớp cấu tạo, chọn các vòng mép, bu lông và mặt lõm cần tối, thêm slot `Dark Metal` và gán vào các mặt đó.

Kiểm tra từ hai phía để bảo đảm bulông không bị bỏ sót. Khi hoàn thiện, tạm ẩn các object đã xong và lưu file bằng `Ctrl + S`.

## 6. Những lỗi thường gặp

- **Giáp tối quá nhiều, mất điểm nhấn:** kiểm tra các chi tiết dự kiến giữ `Light Metal` đã được gán đúng chưa.
- **Một số bu lông còn xanh:** chưa chọn đủ các đảo mesh bằng `L`.
- **Vệt màu không nhất quán giữa các đường viền:** kiểm tra lại các vòng mặt đã chọn.
- **Làm mất vật liệu cũ khi thay slot:** phân biệt việc thêm slot mới với thay datablock của slot đang có.

## 7. Thực hành ngắn

Trên một cụm đùi có giáp ngoài và chi tiết cơ khí bên trong, tạo hệ màu gồm giáp tối, vài miếng ốp sáng và khớp xanh (nếu có). Kiểm tra rằng người xem nhận ra đâu là vỏ giáp, đâu là bộ khung chịu lực và đâu là khớp chuyển động.

## 8. Câu hỏi ôn tập

**Câu 1.** Một object giáp có nền tối nhưng vài chi tiết cần sáng. Cách đúng là gì?

A. Chỉ tăng World Strength.  
B. Xóa các chi tiết nhỏ.  
C. Ẩn toàn bộ giáp.  
D. Giữ nền `Dark Metal`, thêm slot `Light Metal` rồi Assign cho vùng cần sáng.

**Đáp án:** D. **Giải thích:** Các slot cho phép hai vật liệu cùng tồn tại trong một object.

**Câu 2.** Vì sao các thanh dầm và bu lông thường được gán `Dark Metal` cùng nhau?

A. Để tạo sự nhất quán cho kết cấu cơ khí so với mảng giáp.  
B. Vì Blender tự bắt buộc như vậy.  
C. Để biến các dầm thành nguồn sáng.  
D. Để các dầm mất hình học.

**Đáp án:** A. **Giải thích:** Màu tối nhóm các chi tiết thuộc khung và cơ cấu lại với nhau.

**Câu 3.** `Ctrl + I` nên dùng khi nào?

A. Khi muốn kết nối hai object.  
B. Khi vùng đã chọn là phần cần loại ra, còn phần còn lại cần gán vật liệu.  
C. Khi muốn bật `Rendered`.  
D. Khi muốn tạo `Blue Metal`.

**Đáp án:** B. **Giải thích:** Đảo lựa chọn là lựa chọn tốt khi nhóm cần giữ lại đã được xác định chắc chắn.

**Câu 4.** Trên cụm đùi màu xanh, vùng nào là lựa chọn hợp lý để gán tối?

A. Chỉ background của scene.  
B. Mọi camera trong scene.  
C. Bulông, mặt lõm và các vòng chi tiết mép.  
D. Toàn bộ mọi material trong file.

**Đáp án:** C. **Giải thích:** Vật liệu tối làm rõ những lớp cấu trúc trong khi vẫn giữ khối chính màu xanh.

**Câu 5.** Sau khi gán nhiều vùng nhỏ, thao tác kiểm tra nào đáng tin cậy nhất?

A. Chỉ nhìn từ chính diện.  
B. Đổi tên file.  
C. Tăng độ phân giải render mà không quan sát.  
D. Xoay model và kiểm tra hai phía, cả các mặt bên trong.

**Đáp án:** D. **Giải thích:** Những lỗi gán mặt thường nằm ở khu vực bị che hoặc góc nhìn ít quan sát.

## 9. Tổng kết

Giáp, hông và đùi cần chung một ngôn ngữ vật liệu: mảng giáp có điểm sáng, cơ cấu nằm sâu có màu tối, và khớp xanh làm điểm nhấn. Sự phân lớp đúng sẽ giúp các chi tiết cơ khí rõ ràng mà không phải thêm hình học mới.
