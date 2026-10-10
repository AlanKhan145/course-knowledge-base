# Bài 08. Tạo ống dẫn bằng Curve và nối bằng Bridge Edge Loops

## 1. Tóm tắt và mục tiêu

Hệ thống ống tạo cảm giác robot có cơ cấu truyền lực, dây dẫn và khớp nối thực. Một đường ống gồm hai phần quan trọng: **đường đi** (curve/đường đỉnh) và **tiết diện** (độ dày). Blender cho phép dựng đường đi trước rồi tạo thân ống bằng Curve Geometry.

Mục tiêu: tạo đường gấp vuông được bo góc, thiết lập độ dày ống, chuyển thành mesh, nối với chi tiết khác và dùng `Bridge Edge Loops` để kết nối hai đầu ống.

## 2. Dựng đường đi ban đầu

1. Đưa `3D Cursor` về gốc và thêm một đối tượng mesh đơn giản phục vụ định hình đường đi.
2. Trong Edit Mode, giữ những đỉnh cần thiết sao cho tạo thành đường gãy có ba đỉnh, hai đoạn nối và một góc khuỷu.
3. Chọn đỉnh góc khuỷu và nhấn `Ctrl + Shift + B` để dùng **Vertex Bevel**; cuộn bánh xe để thêm segments cho góc uốn.
4. Điều chỉnh bán kính bo sao cho đầu ống chạy sát tấm giáp mà không xuyên các panel xung quanh.

Khác biệt quan trọng: `Ctrl + B` vát **cạnh**; `Ctrl + Shift + B` vát **đỉnh** khi đang cần bo một góc của đường đi.

## 3. Chuyển sang Curve để tạo độ dày

1. Về Object Mode.
2. Chọn `Object → Convert → Curve`.
3. Trong **Object Data Properties → Geometry**, dùng nhóm tham số **Bevel** để tăng độ dày tròn của đường cong.
4. Tinh chỉnh `Resolution` cho tiết diện đủ mượt.
5. Dùng `Shade Smooth` nếu cần.

Độ dày thực tế phụ thuộc kích thước model. Tham số ví dụ trong thao tác tạo hình từng được điều chỉnh quanh `0.4` cho tiết diện và `6` cho độ mượt của cấu hình đang dùng; các giá trị này **không phải tiêu chuẩn chung** và cần điều chỉnh theo mesh thực tế.

## 4. Chuyển Curve về Mesh và ghép Object

Khi muốn nối ống vào một đối tượng mesh khác:

1. Chọn Curve và dùng `Object → Convert → Mesh`.
2. Chọn ống trước, giữ `Shift` chọn object đích sau cùng để object đích trở thành **active object**.
3. Nhấn `Ctrl + J` để Join.
4. Vào Edit Mode; dùng `L` để chọn thành phần ống cần điều chỉnh bên trong cùng object.

**Lưu ý:** `Join` hợp nhất nhiều object vào một object quản lý chung, **không tự hàn các đỉnh giao nhau**. Khi Join vào object có Mirror/Bevel Modifier, hệ modifier của object active sẽ ảnh hưởng các hình học được ghép. Cần kiểm tra các modifier, đặc biệt là Clipping.

## 5. Nhân bản và xoay ống

Dùng `Shift + D` để tạo bản sao, `R → Y → 90` hay `R → Y → -90` để đổi chiều theo ảnh tham chiếu. Trong trường hợp cần lật dọc trục, `S → Y → -1` tạo biến đổi phản chiếu trên trục đó ở vùng được chọn; sau đó kiểm tra normals và hướng mặt.

Nhân bản thêm các ống trên đỉnh đầu để tạo nhịp điệu chi tiết. Khi dùng Mirror, cần bảo đảm các ống không bị đè trùng trong mặt phẳng giữa.

## 6. Nối vòng cạnh bằng Bridge Edge Loops

Nếu hai đầu ống tạo thành hai vòng biên có cùng số lượng đỉnh:

1. Xóa mặt nắp không cần thiết để để lộ hai edge loop mở.
2. Chọn cả hai vòng biên.
3. Nhấn `F3` và tìm `Bridge Edge Loops` (hoặc truy cập qua menu Edge tương ứng).
4. Kiểm tra vòng nối, hướng xoắn và shading.
5. Nếu còn vòng cạnh không đóng góp đáng kể cho hình dáng, dùng `Alt + Click` chọn loop rồi `X → Dissolve Edges`.

Một phép Bridge thành công tạo ra geometry nối thật giữa hai vòng; khác với hai ống chỉ nhìn có vẻ chạm nhau.

## 7. Thực hành, debug và tổng kết

**Thực hành:** Tạo một ống gấp góc bo tròn bằng Curve, chuyển về Mesh, nhân bản thành nhiều ống trên đỉnh đầu; nối ít nhất một cặp vòng biên bằng Bridge Edge Loops.

**Debug:** Không thấy `Bridge Edge Loops` hoạt động? Kiểm tra hai vùng là edge loop mở, có lựa chọn đúng và số lượng đỉnh hợp lý. Đường ống bị rỗng hoặc tiết diện không đều? Xem lại Geometry/Bevel trước Convert.

**Ghi nhớ:** Curve tạo ống nhanh, Mesh cho phép chỉnh topology chi tiết, Bridge tạo mối nối có hình học thực.

## 8. Câu hỏi ôn tập

### Câu 1

Phím tắt dùng để bevel một đỉnh góc trong quá trình tạo đường ống là gì?

A. Ctrl + R  
B. Ctrl + Shift + B  
C. Shift + N  
D. Ctrl + J  

**Đáp án:** B

**Giải thích:** Vertex Bevel dùng Ctrl + Shift + B để bo góc tại đỉnh.

### Câu 2

Trong Curve, nhóm tùy chọn nào giúp tạo tiết diện tròn có độ dày?

A. Output Properties  
B. World Background  
C. Geometry → Bevel  
D. Video Editing  

**Đáp án:** C

**Giải thích:** Geometry/Bevel biến đường cong thành dạng ống có bề dày.

### Câu 3

Tại sao cần Convert Curve to Mesh trước khi ghép vào head mesh theo quy trình này?

A. Để cùng loại hình học và tiếp tục chỉnh topology trong Edit Mode  
B. Để tự đổi sang Cycles  
C. Để tự tạo UV tốt hơn  
D. Để phát tiếng động  

**Đáp án:** A

**Giải thích:** Mesh cho phép chỉnh đỉnh/mặt và Join theo quy trình hard-surface đang dùng.

### Câu 4

Ctrl + J sẽ làm gì đối với hai object mesh đang chọn?

A. Luôn tự hàn các đỉnh chạm nhau  
B. Tự gán rig  
C. Xóa modifier của mọi object  
D. Ghép thành một object nhưng không tự hàn topology giao nhau  

**Đáp án:** D

**Giải thích:** Join thống nhất quản lý object, không thay thế thao tác nối vòng hoặc merge đỉnh.

### Câu 5

Điều kiện hình học nào thuận lợi cho Bridge Edge Loops?

A. Hai camera khác tiêu cự  
B. Hai vòng cạnh biên mở và số đỉnh tương thích  
C. Hai HDRI trùng nhau  
D. Một object curve chưa tạo mesh  

**Đáp án:** B

**Giải thích:** Bridge nối các vòng cạnh thành dải mặt liên tục và cần biên phù hợp.
