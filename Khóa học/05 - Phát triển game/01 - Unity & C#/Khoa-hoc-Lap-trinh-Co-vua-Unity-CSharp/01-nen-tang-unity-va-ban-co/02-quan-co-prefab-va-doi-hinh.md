# Bài 02. Thiết kế quân cờ, prefab và đội hình khởi tạo

> **Module 01: Nền tảng Unity và bàn cờ** · **Loại:** Bài học kết hợp thực hành

## 1. Tổng quan

Mỗi quân có loại, phe, tọa độ và hình ảnh 3D. Bài này xây dựng lớp cơ sở `ChessPiece`, tạo prefab sáu loại quân và đặt 32 quân lên bàn cờ ở trạng thái chuẩn.

## 2. Mục tiêu học tập

- Xây dựng enum thể hiện sáu loại quân cờ.
- Quản lý phe, vị trí và trạng thái hiển thị của quân.
- Tạo prefab và sinh quân theo dữ liệu trận đấu.
- Kiểm tra đội hình 16 quân trắng và 16 quân đen.

## 3. Kiến thức và cách triển khai

### 3.1. Mô hình dữ liệu của quân cờ

Sáu loại quân gồm **Pawn (Tốt)**, **Rook (Xe)**, **Knight (Mã)**, **Bishop (Tượng)**, **Queen (Hậu)**, **King (Vua)**. Lớp cơ sở có thể lưu `type`, `team`, `currentX`, `currentY`. Trong hướng dẫn, `team = 0` đại diện bên trắng và `team = 1` là bên đen. Dùng `enum` tránh truyền các chuỗi rời rạc rất dễ sai chính tả.

```csharp
public enum ChessPieceType { Pawn, Rook, Knight, Bishop, Queen, King }

public class ChessPiece : MonoBehaviour
{
    public ChessPieceType type;
    public int team;
    public int currentX, currentY;
    public Vector3 desiredPosition;
    public Vector3 desiredScale = Vector3.one;
}
```

`desiredPosition` và `desiredScale` là trạng thái mục tiêu cho hoạt ảnh di chuyển/thu nhỏ khi bị ăn. Không dùng vị trí `transform` làm nguồn dữ liệu duy nhất: một quân đang nội suy giữa hai ô vẫn phải có tọa độ logic đã xác định.

### 3.2. Prefab và khởi tạo

Tạo prefab cho mỗi loại quân hoặc tổ hợp loại quân–phe, gắn script `ChessPiece` và renderer. Có thể dùng cùng mesh nhưng vật liệu khác cho hai phe. Quản lý hiện diện trên bàn bằng mảng `ChessPiece[8,8]` hoặc cấu trúc tương đương.

Ví dụ, theo quy ước trắng đứng ở hàng `y = 0`, đen ở hàng `y = 7`:

```text
7  r n b q k b n r   (đen)
6  p p p p p p p p
5  . . . . . . . .
4  . . . . . . . .
3  . . . . . . . .
2  . . . . . . . .
1  P P P P P P P P
0  R N B Q K B N R   (trắng)
   0 1 2 3 4 5 6 7
```

Các chữ hoa đại diện trắng và chữ thường đại diện đen. Đảm bảo **Vua/Hậu** đúng cột theo quy ước của dự án, và nhất quán khi đổi góc nhìn theo phe. Với mỗi quân, thao tác tạo gồm instantiate prefab, gán `type/team`, đặt `currentX/currentY`, cập nhật mảng và đặt transform ở tâm ô.

### 3.3. Trạng thái quân bị bắt

Quân bị bắt sẽ bị loại khỏi mảng bàn cờ nhưng có thể được thu nhỏ và chuyển ra khu vực riêng bên cạnh để người chơi nhìn lại lịch sử ăn quân. Không để quân đã bị bắt có collider còn chặn raycast hoặc vẫn được tính là đang chiếm ô.

## 4. Thực hành có kiểm chứng

1. Tạo thư mục `Prefabs/ChessPieces` và sáu loại quân có collider/renderer.
2. Viết hàm `SpawnPiece(type, team, x, y)` gán đủ thông tin.
3. Sinh 16 quân mỗi phe theo đội hình chuẩn và tạo vật liệu phân biệt màu.
4. Di chuyển thử vị trí hiển thị của một quân trong Editor: xác nhận mảng logic vẫn là nguồn dữ liệu chính.

**Checkpoint:** 32 quân hiển thị, đúng 6 loại, không chồng lên nhau, đúng tọa độ trên mảng.

## 5. Lỗi thường gặp và cách xử lý

- **Quân xuất hiện dưới sàn:** vị trí model/pivot không trùng tâm prefab; chỉnh offset trục đứng.
- **Chất liệu hai phe giống nhau:** gán đúng vật liệu theo `team` sau khi instantiate.
- **Tọa độ bị lệch:** không lẫn `x,y` của mảng với `x,z` của thế giới Unity.
- **Quân bị ăn vẫn tương tác được:** tắt collider hoặc chuyển quân sang vùng/layer không nhận raycast.

## 6. Câu hỏi ôn tập

### Câu 1

Tại sao không nên chỉ dùng transform.position để xác định quân đang ở ô nào?

A. Vì transform không có giá trị X.  
B. Vì Unity không cho lưu vector.  
C. Vì animation có thể đặt quân ở vị trí trung gian.  
D. Vì prefab chỉ tồn tại trong Editor.  

**Đáp án:** C.

**Giải thích:** Tọa độ logic nên ổn định độc lập với quá trình nội suy hình ảnh.

### Câu 2

Lớp `ChessPiece` cần lưu tối thiểu thông tin nào để xử lý luật đi?

A. Loại quân, phe, tọa độ hiện tại.  
B. Chỉ màu của renderer.  
C. Chỉ tên prefab.  
D. Thời điểm xây dựng project.  

**Đáp án:** A.

**Giải thích:** Các phép xác định nước đi đều phụ thuộc loại, phe và ô hiện tại.

### Câu 3

Prefab có tác dụng chính gì?

A. Tự động điều khiển đối thủ.  
B. Lưu mẫu GameObject có thể instantiate nhiều lần.  
C. Tính đường đi hợp lệ.  
D. Thay thế hoàn toàn dữ liệu bàn cờ.  

**Đáp án:** B.

**Giải thích:** Prefab đóng gói mesh, vật liệu, component và cấu hình chung.

### Câu 4

Sau khi một quân bị bắt, thao tác logic cần làm là gì?

A. Đặt lại toàn bộ ván.  
B. Giữ quân ở ô cũ.  
C. Đổi phe của quân.  
D. Loại quân khỏi ô trong mảng và xử lý hình ảnh riêng.  

**Đáp án:** D.

**Giải thích:** Trạng thái chiếm ô phải đúng trước khi hình ảnh kết thúc hiệu ứng bị bắt.

### Câu 5

Với quy ước phe 0 là trắng, cách kiểm tra hai quân cùng phe là?

A. a.type == b.type  
B. a.team == b.team  
C. a.currentX == b.currentX  
D. a.transform == b.transform  

**Đáp án:** B.

**Giải thích:** Hai quân cùng phe khi giá trị team giống nhau, bất kể loại quân.

## 7. Tổng kết

Mỗi quân cần loại, phe, tọa độ logic và prefab để hiển thị. Mảng bàn cờ phải luôn phản ánh đúng 32 quân lúc khởi đầu và mọi thay đổi sau này.

**Điều kiện hoàn thành:** thực hiện tất cả checkpoint trong bài và lưu phiên bản chạy được vào Git.
