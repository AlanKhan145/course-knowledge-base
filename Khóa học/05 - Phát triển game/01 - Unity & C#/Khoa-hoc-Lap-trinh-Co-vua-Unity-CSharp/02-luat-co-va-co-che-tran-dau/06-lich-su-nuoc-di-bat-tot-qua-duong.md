# Bài 06. Lịch sử nước đi và bắt Tốt qua đường (en passant)

> **Module 02: Luật cờ và cơ chế trận đấu** · **Loại:** Bài học kết hợp thực hành

## 1. Tổng quan

En passant phụ thuộc vào nước đi ngay trước đó, chứ không chỉ vị trí hiện tại. Bài này thêm lịch sử di chuyển, phân loại nước đi đặc biệt và xử lý quân Tốt bị bắt nằm ở ô khác ô đích.

## 2. Mục tiêu học tập

- Lưu ô nguồn/đích của các nước đi để phục vụ luật đặc biệt.
- Giải thích chính xác thời điểm được bắt Tốt qua đường.
- Cài đặt cách sinh ô mục tiêu en passant và cách loại quân bị bắt.
- Phục hồi hoặc hủy bỏ quyền en passant sau đúng một cơ hội.

## 3. Kiến thức và cách triển khai

### 3.1. Lịch sử nước đi

Bàn cờ ở một thời điểm không luôn đủ dữ liệu để xét hợp lệ. Để thực hiện nhập thành, phải biết Vua/Xe có từng đi; để bắt qua đường, phải biết nước đi ngay trước của quân Tốt đối phương. Lưu danh sách cặp ô nguồn–đích, hoặc tốt hơn là bản ghi `Move` có loại quân và sự kiện đặc biệt.

```csharp
public struct MoveRecord
{
    public Vector2Int from;
    public Vector2Int to;
    public ChessPieceType pieceType;
    public int team;
}

public enum SpecialMove { None, EnPassant, Castling, Promotion }
```

Khi reset ván, xóa lịch sử. Chỉ lưu một nước đi sau khi được xác nhận thực hiện. Ở cách tổ chức lớp đơn giản, `SpecialMove` giúp bàn cờ nhận biết thao tác phụ cần làm sau khi di chuyển chính.

### 3.2. Điều kiện bắt qua đường

Giả sử tốt trắng đứng ở hàng thứ năm theo hướng đi của trắng. Tốt đen ở cột kề vừa tiến **hai ô từ hàng xuất phát** và đi ngang ô tốt trắng có thể tấn công. Ở lượt kế tiếp **ngay lập tức**, trắng có thể đi chéo tới ô mà tốt đen đã đi qua, rồi loại tốt đen khỏi ô nó đang đứng. Quyền này biến mất nếu trắng chọn nước khác. Tình huống đối xứng với hai phe.

Các điều kiện cần xét:

1. Quân được chọn là Tốt và đang ở hàng thích hợp để bắt qua đường.
2. Nước đi cuối là Tốt đối phương tiến hai ô cùng một cột.
3. Tốt vừa đi nằm sát bên theo cột `x ± 1`.
4. Ô đích chéo phía trước trống; ô bị bắt chính là vị trí hiện tại của tốt đối phương, **không phải** ô đích.

### 3.3. Cập nhật nhất quán

Sau khi chấp nhận en passant, di chuyển quân Tốt đang chọn theo nước đi chéo, đồng thời xóa quân địch từ ô liền kề. Nếu dùng mô phỏng để kiểm tra chiếu, phải mô phỏng cả việc loại quân bên cạnh; nếu không, kết quả kiểm tra có thể sai. Hoạt ảnh ăn quân có thể xử lý sau khi dữ liệu đã cập nhật.

```text
Bước kiểm tra en passant:
  xác minh nước đi cuối của đối phương là Tốt nhảy 2 ô
  xác minh Tốt được chọn nằm ngang cạnh quân đó
  kiểm tra ô chéo đích trống và trong bàn
  nếu hợp lệ: ghi nước đi đặc biệt và cam kết 2 thay đổi
```

## 4. Thực hành có kiểm chứng

1. Thêm danh sách lịch sử và loại `SpecialMove`.
2. Dựng tình huống hai Tốt đứng cạnh nhau sau nước nhảy hai ô.
3. Kiểm tra bắt qua đường được ngay ở lượt kế; sau một nước khác thì không còn.
4. Kiểm tra quân bị bắt mất khỏi **ô đứng thực tế**, không phải ô đích của quân ăn.

**Checkpoint:** chơi được en passant cho cả hai phe, lịch sử đầy đủ và reset lịch sử chính xác.

## 5. Lỗi thường gặp và cách xử lý

- **Luôn cho bắt qua đường:** thiếu kiểm tra đúng nước đi gần nhất.
- **Xóa nhầm ô:** quân bị bắt nằm cạnh quân ăn ở hàng cũ, không nằm ở ô đích chéo.
- **Sinh en passant sai thời điểm:** thiếu điều kiện Tốt địch vừa nhảy 2 ô từ hàng xuất phát.
- **Mô phỏng sai chiếu:** quên xóa quân địch khi kiểm tra nước đi giả lập.

## 6. Câu hỏi ôn tập

### Câu 1

Điều gì kích hoạt quyền en passant?

A. Một Hậu đi chéo.  
B. Một Xe bị bắt.  
C. Tốt đối phương vừa đi hai ô từ hàng xuất phát đến cạnh Tốt của ta.  
D. Vua chưa từng di chuyển.  

**Đáp án:** C.

**Giải thích:** En passant chỉ phát sinh từ nước nhảy hai ô của Tốt đối phương ở lượt ngay trước.

### Câu 2

En passant còn hợp lệ sau khi bên có quyền đã đi một nước khác chưa?

A. Không.  
B. Có, đến hết ván.  
C. Có, nếu đổi camera.  
D. Có, khi tốt chưa di chuyển.  

**Đáp án:** A.

**Giải thích:** Cơ hội bắt qua đường chỉ tồn tại ở lượt kế tiếp ngay lập tức.

### Câu 3

Quân bị bắt trong en passant nằm ở đâu?

A. Ô đích của quân ăn.  
B. Ô ngay cạnh mà Tốt đối phương đang đứng.  
C. Ô xuất phát của quân ăn.  
D. Ngoài bàn cờ.  

**Đáp án:** B.

**Giải thích:** Quân bắt đi chéo vào ô trống, còn quân bị loại ở ô cạnh bên.

### Câu 4

Vì sao cần lưu lịch sử nước đi?

A. Để đổi vật liệu.  
B. Để tăng FPS.  
C. Để thay prefab.  
D. Để kiểm tra luật phụ thuộc nước đi trước đó.  

**Đáp án:** D.

**Giải thích:** Một số điều kiện không thể suy ra chỉ từ trạng thái mảng hiện tại.

### Câu 5

Bước nào không được bỏ qua khi mô phỏng en passant?

A. Xóa Tốt địch tại ô đang đứng.  
B. Bật post-processing.  
C. Tạo thêm camera.  
D. Đổi tên prefab.  

**Đáp án:** A.

**Giải thích:** Nếu không xóa quân bị bắt, đánh giá ô bị tấn công và chiếu có thể sai.

## 7. Tổng kết

En passant phải kiểm tra nước đi cuối, thời điểm vừa nhảy hai ô và vị trí Tốt đứng cạnh; quân bị ăn được xóa ở ô bên cạnh thay vì ô đích.

**Điều kiện hoàn thành:** thực hiện tất cả checkpoint trong bài và lưu phiên bản chạy được vào Git.
