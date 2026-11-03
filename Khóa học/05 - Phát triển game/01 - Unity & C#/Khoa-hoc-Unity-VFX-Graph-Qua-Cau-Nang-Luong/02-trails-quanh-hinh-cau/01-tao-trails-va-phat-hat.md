# Tạo hệ Simple Trails và phân bố hạt quanh hình cầu

> **Loại:** Bài học lý thuyết kết hợp thực hành

## 1. Tóm tắt

Lớp hiệu ứng đầu tiên tạo những đường sáng mảnh, xoay chuyển quanh quả cầu. Thay vì để toàn bộ vệt sáng xuất hiện ở một điểm, cần khởi tạo hạt trên vùng hình cầu và cung cấp đủ số lượng hạt cho các đường vệt.

## 2. Mục tiêu học tập

- Tạo và cấu hình một hệ `Simple Trails`.
- Điều khiển Spawn Rate, Capacity và vị trí sinh hạt.
- Liên kết bán kính khởi tạo với thuộc tính kích thước dùng chung.

## 3. Thêm Simple Trails

Trong đồ thị, bỏ những context mẫu không còn phục vụ hiệu ứng đang dựng. Nhấn **Space** để tìm **Simple Trails**, sau đó tạo hệ thống tương ứng. Đây là lớp tạo đường vệt chứ chưa phải hệ hạt nền hoặc xung sáng.

Kiểm tra hai giới hạn: phần chứa hạt nguồn và phần chứa dải/vệt (nếu phiên bản đồ thị hiển thị dung lượng riêng). Buổi thực hành điều chỉnh các mức này lên khoảng **1000** để vệt sáng có đủ chỗ xuất hiện. Không nhất thiết luôn dùng 1000: cần đánh giá số hạt sống thực tế và khả năng render.

## 4. Điều khiển phát sinh hạt

Tạo property Float `TrailSpawnRate`, bật `Exposed` và đặt giá trị đầu là **30**. Kết nối thuộc tính vào tốc độ phát hạt trong context `Spawn`. Khi tăng giá trị, nhiều hạt mới đi vào hệ thống hơn mỗi giây, nhờ vậy đường sáng có thể dày và liên tục hơn.

Ở mức thiết kế, mối liên hệ cần nhớ là: `Spawn Rate` tăng, nếu `Lifetime` không thay đổi và `Capacity` chưa chạm trần, số hạt đang tồn tại có xu hướng tăng. Tăng không kiểm soát sẽ dễ làm vệt sáng chồng chéo, khó nhận dạng hình cầu.

## 5. Đặt vị trí khởi tạo trên sphere

Nếu hạt ban đầu chồng vào cùng một điểm, các trail trông như một bó sáng thay vì vỏ cầu. Trong context `Initialize`, dùng block xác định **vị trí trên hình cầu (Sphere)**. Tạo Float `OrbSize` có giá trị khởi tạo **1**, Expose trong Inspector và dùng `Multiply` để tạo bán kính theo công thức:

$$
r_{\text{spawn}} = \text{OrbSize} \times 1
$$

Kết nối kết quả vào `Radius` của khối đặt vị trí theo sphere. Cách làm này cho phép thay đổi kích thước vùng khởi tạo mà không phải mở từng block.

**Lưu ý:** vị trí khởi tạo trên sphere chỉ xác định *nơi hạt bắt đầu*. Muốn chúng tiếp tục bám vào vùng cầu trong khi chuyển động phải thêm lực ở `Update`.

## 6. Thực hành ngắn

1. Tạo hệ Simple Trails và đặt Capacity ban đầu khoảng `1000`.
2. Tạo `TrailSpawnRate = 30` và `OrbSize = 1` trên Blackboard.
3. Dùng vị trí khởi tạo dạng Sphere, nối bán kính với `OrbSize`.
4. Thay đổi `OrbSize` trong Inspector để xác nhận vùng xuất hiện hạt thay đổi đồng bộ.

**Đạt yêu cầu:** Hạt nguồn được phân bố quanh một vùng hình cầu thay vì trùng một điểm.

## 7. Lỗi thường gặp và cách xử lý

- **Vệt chồng cục bộ:** kiểm tra block khởi tạo vị trí theo Sphere.
- **Không đủ hạt để tạo vệt:** soát cả Capacity, Spawn Rate và Lifetime.
- **Thay OrbSize nhưng không đổi bán kính:** kiểm tra node Multiply và cổng Radius đang được nối đúng.

## 8. Câu hỏi ôn tập

### Câu 1
Vì sao cần đặt vị trí khởi tạo trên Sphere?

A. Để tạo vùng bắt đầu bao quanh quả cầu  
B. Để thay Shader Graph  
C. Để tự sinh âm thanh  
D. Để không cần Spawn  

**Đáp án:** A
**Giải thích:** Sphere phân bố hạt trên vùng hình cầu thay vì chồng vào một điểm.

### Câu 2
Trong ví dụ, Spawn Rate khởi đầu cho trail là bao nhiêu?

A. 2  
B. 5  
C. 30  
D. 50000  

**Đáp án:** C
**Giải thích:** Bài thực hành sử dụng 30 làm mức tham chiếu ban đầu.

### Câu 3
OrbSize tác động đến yếu tố nào trong bài?

A. Tên asset  
B. Bán kính vùng phát sinh  
C. Phiên bản Unity  
D. Thời gian cập nhật editor  

**Đáp án:** B
**Giải thích:** OrbSize được nhân vào đầu vào Radius.

### Câu 4
Tăng Capacity có tự đảm bảo nhiều hạt được sinh ra không?

A. Có, trong mọi tình huống  
B. Chỉ khi dùng màu đỏ  
C. Không, còn phụ thuộc Spawn Rate và Lifetime  
D. Không thể thay Capacity  

**Đáp án:** C
**Giải thích:** Capacity chỉ đặt giới hạn chứ không tự tăng tốc độ phát sinh.

## 9. Tổng kết

Hệ trail đã có vùng phát sinh hình cầu và các tham số điều khiển từ Inspector. Bước tiếp theo là tạo chuyển động, giữ các hạt gần vỏ cầu và cho chúng một vòng đời hợp lý.
