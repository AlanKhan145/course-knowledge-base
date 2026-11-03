# Bài 05.02 — Tối ưu Pathfinding và hướng phát triển

**Mốc video:** 25:40–26:31. **Mục tiêu:** hiểu nút thắt hiệu năng và phân biệt phần đã làm với phần có thể mở rộng.

## 1. Điều video cảnh báo [Theo video]

Cách tính vùng đi bằng việc **tìm đường riêng đến từng ô ứng viên** có thể rất tốn chi phí khi phạm vi di chuyển lớn hoặc số lượng Unit nhiều. Tác giả gợi ý dùng phương pháp Pathfinding hiệu quả hơn, đề cập các thư viện/công cụ Unity/DOTs của mình, nhưng bản chép lời **không cung cấp benchmark có thể kiểm chứng**.

## 2. Giải pháp thuật toán [Ví dụ biên soạn]

Nếu tất cả bước di chuyển cùng chi phí, hãy tính **BFS một lần** từ ô nguồn, dừng khi đã đi `moveRange` bước. Nếu có chi phí ô khác nhau, dùng **Dijkstra** và dừng khi tổng chi phí vượt ngân sách. Cả hai tìm một vùng có thể đến trong *một lượt tìm kiếm*, thay vì chạy A* cho từng mục tiêu.

```text
queue = [(start, 0)]
visited = {start}
while queue not empty:
    cell, depth = pop_front(queue)
    if depth == moveRange: continue
    for next in neighbors(cell):
        if next outside grid or blocked or visited: continue
        visited.add(next)
        queue.push_back((next, depth+1))
return visited - {start}
```

Các trường hợp có chi phí đường chéo khác nhau cần dùng Dijkstra hoặc thuật toán tương ứng.

## 3. Các hướng phát triển [Một phần được video nêu, một phần đề xuất]

- **Video nêu:** thêm kỹ năng đặc biệt; AI cho kẻ địch; xác suất trúng đòn phụ thuộc khoảng cách; xây game chiến thuật kiểu XCOM.
- **Gợi ý biên soạn:** sát thương, HP, phòng thủ, line-of-sight, hiệu ứng trạng thái, nhiều mục tiêu, đồng đội chặn đường, nhiều nhóm faction, điều kiện chiến thắng, replay/undo, gamepad/mobile UI, data-driven abilities và kiểm thử tự động.

## 4. Bài nâng cao

Viết bộ đo: `N` ô ứng viên, `K` lần gọi `FindPath`, thời gian tính vùng đi. So sánh phương pháp lặp FindPath với BFS trên map 40×40 có chướng ngại. Kết luận chỉ dựa trên số liệu test của chính bạn, không dẫn số liệu tốc độ chung từ bản chép lời.
