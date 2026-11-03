# Bài 01. Khởi tạo Unity, URP và xây dựng bàn cờ

> **Module 01: Nền tảng Unity và bàn cờ** · **Loại:** Bài học kết hợp thực hành

## 1. Tổng quan

Một bàn cờ 3D có thể tương tác cần ba lớp: dữ liệu ô cờ, hình học có thể hiển thị và collider để chọn bằng chuột. Bài này thiết lập dự án Unity, dựng 64 ô và tạo phản hồi hover.

## 2. Mục tiêu học tập

- Tạo dự án Unity 3D và cấu hình Universal Render Pipeline (URP).
- Giải thích quan hệ giữa tọa độ ô (x, y) với tọa độ thế giới.
- Tạo lưới bàn cờ 8 × 8 có vật liệu, collider và layer.
- Dùng raycast xác định ô đang được trỏ tới và làm nổi bật nó.

## 3. Kiến thức và cách triển khai

### 3.1. Tổ chức dự án

Khởi tạo dự án bằng template 3D. Loạt hướng dẫn sử dụng **Unity 2020.1.10** rồi cài **Universal Render Pipeline** qua `Window > Package Manager`. Tạo URP Pipeline Asset trong thư mục `Config`, gán vào `Edit > Project Settings > Graphics`. Trên phiên bản Unity khác, tên gói và cách gán URP có thể thay đổi. Thống nhất thư mục `Scripts`, `Materials`, `Prefabs` và `Config` ngay từ đầu.

Tạo GameObject `Chessboard` để quản lý logic bàn cờ. Mỗi ô có tọa độ nguyên `(x, y)` với `0 <= x, y < 8`. Với cạnh ô `tileSize`, tâm ô có thể tính bằng `(x * tileSize + tileSize/2, 0, y * tileSize + tileSize/2)` trong hệ trục mặt phẳng XZ. Nếu chọn cách đặt gốc khác, tất cả phép tính vị trí quân cờ phải nhất quán.

### 3.2. Tạo ô cờ bằng mesh

Một ô vuông được biểu diễn bằng bốn đỉnh và hai tam giác. `MeshFilter` giữ hình học; `MeshRenderer` quyết định cách hiển thị; `MeshCollider` hoặc `BoxCollider` giúp nhận raycast. Khi tự dựng `Mesh`, gán `vertices`, `triangles`, rồi gọi `RecalculateNormals()` nếu cần. Các tam giác phải có thứ tự đỉnh thống nhất để mặt trước không biến mất do back-face culling.

```csharp
Vector3 TileCenter(int x, int y, float tileSize)
{
    return new Vector3((x + 0.5f) * tileSize, 0f,
                       (y + 0.5f) * tileSize);
}
```

Tạo 64 ô trong hai vòng lặp. Màu ô có thể phụ thuộc `(x + y) % 2`. Dùng cùng một quy tắc ánh xạ tọa độ trong mọi script: không được nhầm `y` là độ cao của Unity khi trong dữ liệu bàn cờ nó là hàng.

### 3.3. Layer và raycast

Đưa các ô vào một layer riêng, chẳng hạn `Tile`, để raycast không vô tình chọn quân cờ hoặc môi trường. `Camera.ScreenPointToRay(Input.mousePosition)` phát tia từ camera qua vị trí con trỏ. `Physics.Raycast` trả về collider đầu tiên chạm tia, từ đó suy ra ô cờ. Nếu không chạm ô hợp lệ, xóa trạng thái hover.

```csharp
Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
if (Physics.Raycast(ray, out RaycastHit hit, 100f, tileLayerMask))
{
    // Ánh xạ hit.collider về tọa độ ô cờ.
}
```

Làm nổi bật ô hiện hành bằng vật liệu thay thế hoặc lớp phủ highlight. Khi chuột chuyển ô, trả ô cũ về vật liệu gốc trước khi tô ô mới. Hạn chế tạo `new Material()` liên tục trong `Update()` để tránh cấp phát không cần thiết.

## 4. Thực hành có kiểm chứng

1. Tạo một scene tên `ChessGame` và thêm `Chessboard`, camera, ánh sáng.
2. Thiết lập URP, tạo 2 vật liệu sáng/tối, tự dựng hoặc sinh 64 ô từ prefab.
3. Gắn collider và layer cho toàn bộ ô; kiểm tra chúng nhận tia từ camera.
4. Thêm hiệu ứng hover, di chuyển chuột qua mọi ô và ra khỏi bàn cờ.

**Checkpoint:** luôn có đúng 64 ô; mỗi ô xác định được cặp tọa độ `(x,y)`; không có ô bị lộn mặt; hiệu ứng hover được xóa khi con trỏ ra ngoài.

## 5. Lỗi thường gặp và cách xử lý

- **Bàn cờ không hiển thị:** kiểm tra MeshRenderer, material URP và thứ tự tam giác.
- **Raycast không nhận ô:** kiểm tra collider, layer mask, camera và khoảng cách ray.
- **Màu hover bị giữ lại:** hoàn nguyên vật liệu của ô trước khi tô ô mới.
- **Đặt quân sai vị trí:** chuẩn hóa một hàm ánh xạ tọa độ bảng ↔ không gian 3D.

## 6. Câu hỏi ôn tập

### Câu 1

Vì sao mỗi ô cần collider nếu muốn chọn bằng raycast?

A. Collider sinh màu của ô.  
B. Raycast vật lý cần hình học va chạm để nhận điểm trúng.  
C. Collider tính thời gian mỗi lượt.  
D. Collider thay thế hoàn toàn MeshRenderer.  

**Đáp án:** B.

**Giải thích:** Raycast của Physics truy vấn collider; phần mesh nhìn thấy không tự bảo đảm tương tác vật lý.

### Câu 2

Với hệ trục XZ, biến y của bàn cờ đại diện cho gì?

A. Độ cao của quân.  
B. Góc quay camera.  
C. Chỉ số hàng trên bàn cờ, thường ánh xạ sang Z.  
D. Tọa độ pixel của chuột.  

**Đáp án:** C.

**Giải thích:** Dữ liệu bàn cờ 2D và tọa độ thế giới 3D là hai không gian khác nhau.

### Câu 3

Tính chất nào phù hợp để kẻ màu ô xen kẽ?

A. (x+y)%2  
B. x/y  
C. x*y luôn chia hết cho 8  
D. Giá trị raycast.distance  

**Đáp án:** A.

**Giải thích:** Tổng chẵn/lẻ đảo trạng thái khi di chuyển sang ô kề.

### Câu 4

Khi rời khỏi bàn cờ, hành vi hover đúng là gì?

A. Giữ ô sáng cuối cùng.  
B. Xóa toàn bộ collider.  
C. Đổi camera.  
D. Khôi phục highlight và đặt ô hover về rỗng.  

**Đáp án:** D.

**Giải thích:** Không còn ô nào hợp lệ dưới con trỏ nên giao diện phải phản ánh trạng thái đó.

### Câu 5

Vai trò chính của MeshFilter là gì?

A. Tính luật đi quân.  
B. Giữ tham chiếu tới Mesh cần hiển thị.  
C. Nhận thao tác nhấn chuột.  
D. Quản lý lượt đi.  

**Đáp án:** B.

**Giải thích:** MeshFilter giữ dữ liệu hình học; MeshRenderer hiển thị và collider xử lý va chạm.

## 7. Tổng kết

Bàn cờ là sự kết hợp giữa ma trận logic 8×8, mesh hiển thị và collider để raycast. Một hệ quy chiếu duy nhất giúp mọi thao tác hover và đặt quân chính xác.

**Điều kiện hoàn thành:** thực hiện tất cả checkpoint trong bài và lưu phiên bản chạy được vào Git.
