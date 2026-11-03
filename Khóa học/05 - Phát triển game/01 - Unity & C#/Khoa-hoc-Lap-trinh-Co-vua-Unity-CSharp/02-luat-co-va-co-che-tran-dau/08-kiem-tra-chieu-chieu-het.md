# Bài 08. Mô phỏng nước đi, chống tự chiếu và phát hiện chiếu hết

> **Module 02: Luật cờ và cơ chế trận đấu** · **Loại:** Bài học kết hợp thực hành

## 1. Tổng quan

Nước đi đúng hình học vẫn có thể trái luật nếu khiến Vua cùng phe bị tấn công. Bài cuối phần cờ vua đưa vào cơ chế mô phỏng–hoàn nguyên để lọc nước đi, xác định chiếu và chiếu hết.

## 2. Mục tiêu học tập

- Giải thích vì sao kiểm tra nước đi cần mô phỏng trạng thái sau khi đi.
- Tạo tập ô bị tấn công của đối thủ và định vị Vua.
- Loại các nước khiến Vua cùng phe vẫn bị hoặc trở thành bị chiếu.
- Phân biệt chiếu, chiếu hết và trạng thái không có nước đi hợp lệ.

## 3. Kiến thức và cách triển khai

### 3.1. Giả lập nước đi để đánh giá an toàn Vua

Khi quân đang bị ghim di chuyển, đường tấn công lên Vua có thể mở ra. Vì vậy không thể chỉ xét đường đi từ ô nguồn tới ô đích. Với mỗi ô ứng viên:

1. Lưu quân ở ô nguồn và ô đích cùng các trạng thái cần hoàn nguyên.
2. Tạm áp dụng nước đi lên bản sao trạng thái hoặc cùng một mảng có snapshot.
3. Xác định vị trí Vua phe đang đi sau nước đi.
4. Kiểm tra Vua có nằm trong tập ô đối phương tấn công không.
5. Phục hồi nguyên trạng; chỉ giữ ứng viên mà Vua an toàn.

```text
GetLegalMoves(piece):
    candidates = GetAvailableMoves(piece)
    for target in candidates:
        snapshot = SaveState()
        ApplyMove(piece, target)
        illegal = IsKingUnderAttack(piece.team)
        Restore(snapshot)
        if not illegal: keep target
```

Đây là **pseudocode**, không phải hàm Unity có sẵn. `ApplyMove` cần mô phỏng đúng cả ăn qua đường, nhập thành và phong cấp nếu các cơ chế đó làm thay đổi trạng thái.

### 3.2. Chiếu và chiếu hết

`IsKingUnderAttack(team)` kiểm tra liệu ô Vua của phe `team` bị quân đối phương tấn công. Khi Vua đang bị tấn công, phe đó ở trạng thái **chiếu**. Nếu **không có bất kỳ nước đi hợp lệ nào** của toàn bộ quân phe đó giúp thoát chiếu, đó là **chiếu hết**, trận kết thúc. Thoát chiếu có thể bằng Vua đi nơi khác, bắt quân tấn công hoặc chắn đường tấn công, tùy tình huống.

Không dùng việc có thể *ăn Vua* làm điều kiện thắng. Nước đi khiến Vua của bên đi bị chiếu phải bị loại **trước** khi cam kết và đổi lượt.

### 3.3. Trạng thái bị ghim và hòa

Một quân đang chắn đường giữa Xe/Tượng/Hậu đối phương với Vua thường bị **ghim**: nó có thể có nước đi hình học, nhưng nước đi rời đường chắn bị bộ mô phỏng loại bỏ. Cần phân biệt không có nước đi hợp lệ **và đang bị chiếu** (chiếu hết) với không có nước đi hợp lệ **nhưng không bị chiếu** (hết nước đi hợp lệ — stalemate). Trạng thái hòa là kiểm tra mở rộng nên bổ sung để trò chơi tuân thủ luật cờ đầy đủ.

### 3.4. Kiểm thử tính đúng đắn

Chuẩn bị các thế cờ nhỏ: Vua bị Xe chiếu dọc, Mã chiếu, quân đang ghim, chiếu hết cơ bản. Đối với mỗi thế, so sánh danh sách hợp lệ với kết quả trực quan. Nếu dùng mảng bị chỉnh trong simulation, luôn đảm bảo hoàn nguyên bằng khối xử lý có thể phục hồi cả khi xảy ra lỗi.

## 4. Thực hành có kiểm chứng

1. Viết hàm xác định vị trí Vua và những ô đối phương có thể tấn công.
2. Thêm `GetLegalMoves` để lọc kết quả từ `GetAvailableMoves`.
3. Kiểm thử quân bị ghim; thử Vua đi vào ô bị tấn công và trường hợp bị chiếu bởi Mã.
4. Dựng vị trí chiếu hết; khóa lượt đi và hiển thị màn hình thắng.

**Checkpoint:** không thể tự để lộ Vua; quân bị ghim hoạt động đúng; chiếu hết được nhận dạng mà không cần bắt Vua.

## 5. Lỗi thường gặp và cách xử lý

- **Mất quân sau khi giả lập:** thao tác phục hồi snapshot chưa đầy đủ.
- **Vua đi vào ô nguy hiểm:** bộ sinh nước đi chưa sử dụng thông tin ô bị tấn công.
- **Cho kết thúc khi không còn nước đi mà không kiểm tra chiếu:** cần tách chiếu hết và stalemate.
- **En passant phá luật chiếu:** mô phỏng thiếu thao tác xóa Tốt bị ăn ở ô cạnh bên.

## 6. Câu hỏi ôn tập

### Câu 1

Vì sao không thể chỉ dùng quy tắc di chuyển của quân để kết luận nước đi hợp lệ?

A. Vì không có camera.  
B. Vì mọi quân đều đi giống nhau.  
C. Vì bàn cờ thiếu collider.  
D. Vì nước đó có thể làm lộ Vua của chính mình.  

**Đáp án:** D.

**Giải thích:** Luật cờ yêu cầu Vua bên đi không được bị tấn công sau khi đi.

### Câu 2

Một phe đang bị chiếu và không có nước đi hợp lệ để thoát chiếu gọi là gì?

A. Chiếu hết.  
B. Hết nước đi nhưng không chiếu.  
C. Nhập thành.  
D. Phong cấp.  

**Đáp án:** A.

**Giải thích:** Chiếu hết đòi hỏi đồng thời bị chiếu và không thể thoát bằng nước đi hợp lệ.

### Câu 3

Sau mỗi nước đi mô phỏng để kiểm tra, điều gì phải xảy ra?

A. Đảo lượt thật.  
B. Lưu vào lịch sử thật.  
C. Hoàn nguyên dữ liệu về đúng trạng thái trước mô phỏng.  
D. Hiển thị màn hình thắng.  

**Đáp án:** C.

**Giải thích:** Mô phỏng không được làm biến đổi trận thật trước khi người chơi chọn nước.

### Câu 4

Một quân bị ghim nên bị xử lý thế nào?

A. Luôn được di chuyển.  
B. Chỉ giữ các nước không khiến Vua bị chiếu.  
C. Tự động bị bắt.  
D. Đổi thành Tốt.  

**Đáp án:** B.

**Giải thích:** Việc ghim được phát hiện gián tiếp qua mô phỏng an toàn Vua.

### Câu 5

Không có nước đi hợp lệ nhưng Vua không bị chiếu là trường hợp gì?

A. En passant.  
B. Castling.  
C. Checkmate.  
D. Stalemate.  

**Đáp án:** D.

**Giải thích:** Stalemate là một trường hợp hòa, khác chiếu hết.

## 7. Tổng kết

Để loại nước tự chiếu, phải mô phỏng nước đi và hoàn nguyên toàn bộ trạng thái. Chiếu hết chỉ xảy ra khi Vua đang bị chiếu và không tồn tại cách thoát hợp lệ.

**Điều kiện hoàn thành:** thực hiện tất cả checkpoint trong bài và lưu phiên bản chạy được vào Git.
