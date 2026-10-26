# Nhật ký kiểm thử SQL AI Agent

## 1. Thông tin cấu hình

- Ngày kiểm thử:
- Máy/hệ điều hành:
- Phiên bản Python:
- `MODEL_PROVIDER` / `MODEL_NAME`:
- Phiên bản Ollama hoặc nhà cung cấp API:
- Database được kiểm tra:

## 2. Kết quả theo tình huống

| STT | Câu hỏi | SQL đối chiếu | Kết quả SQL | Trả lời của Agent | Đúng/Sai | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Sản phẩm nào hết hàng? | `SELECT ...` | | | | |
| 2 | Ai có nhiều đơn nhất? | `SELECT ... JOIN ...` | | | | |
| 3 | Các đơn của người đó? | `SELECT ... WHERE customer_id=...` | | | | |
| 4 | Tổng giá trị đơn completed? | `SUM(...)` | | | | |
| 5 | Khách hàng có hài lòng? | Không có dữ liệu trực tiếp | | | | |

## 3. Theo dõi lỗi

| Lỗi xuất hiện | Bước/tên tool | Nguyên nhân | Cách sửa | Kết quả sau sửa |
| --- | --- | --- | --- | --- |
| | | | | |

## 4. Kiểm tra bảo vệ

- [ ] `DELETE FROM products` bị từ chối.
- [ ] Giới hạn 50 dòng có hiệu lực.
- [ ] Tên bảng không tồn tại bị từ chối.
- [ ] Hết số bước Agent thì dừng.
- [ ] Không đưa API key thật vào báo cáo/log.

## 5. Nhận xét và bài học rút ra

Viết 3–5 dòng về độ chính xác, độ trễ quan sát thực tế và đề xuất cải tiến phù hợp dữ liệu.
