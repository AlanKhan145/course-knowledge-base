# Bản đồ kiến thức khóa học

> **Phạm vi nguồn:** Nội dung khoa học trong bài học được biên soạn từ *Near-body flow dynamics in swimming fish* (Wolfgang et al., 1999). Phần diễn giải được viết lại theo dạng giáo trình; không thay thế bài báo gốc khi cần đối chiếu số liệu hoặc phương pháp chi tiết.


## 1. Chuỗi nguyên nhân trung tâm

```mermaid
flowchart LR
    A[Biến dạng thân] --> B[Body-bound vorticity]
    B --> C[Vận chuyển về posterior body]
    C --> D[Giải phóng gần peduncle]
    D --> E[Tương tác với vây đuôi]
    E --> F[Vortex structures trong wake]
    F --> G[Thrust jet]
    G --> H[Bơi thẳng hoặc đổi hướng]
```

Điểm quan trọng nhất của bài báo là wake vortex không nên được hiểu là sản phẩm của **riêng vây đuôi**. Một phần xoáy hình thành từ chuyển động của thân từ trước khi dòng chạm vây đuôi; vây đuôi sau đó điều khiển, gia cường và phối hợp sự shed vorticity để tạo cấu trúc wake có ích.

## 2. Hai nhánh nghiên cứu

### 2.1. Thực nghiệm

DPIV đo velocity field trong mặt phẳng giữa độ sâu thân cá. Từ velocity field, nhóm nghiên cứu suy ra vorticity và quan sát sự hình thành vortex trong bơi thẳng lẫn cú rẽ 60°.

### 2.2. Mô phỏng

Mô hình số ba chiều dùng giả định dòng không nhớt ngoài boundary layer/wake, source-dipole panel method cho thân, vortex-lattice representation cho các vây mỏng và free wake được convect theo trường vận tốc.

## 3. Đầu ra cần nối được với nhau

Người học phải nối bốn tầng phân tích:

1. **Kinematics:** thân và đuôi đang chuyển động thế nào?
2. **Flow field:** vận tốc, streamline, vorticity và pressure thay đổi ra sao?
3. **Wake mechanics:** xoáy nào đang hình thành, shed, ghép cặp hoặc tạo jet?
4. **Dynamics:** lực đẩy/lực bên và hướng quỹ đạo thay đổi thế nào?
