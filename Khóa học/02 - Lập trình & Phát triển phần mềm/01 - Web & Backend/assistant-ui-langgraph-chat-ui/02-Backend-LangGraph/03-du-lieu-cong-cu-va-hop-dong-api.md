# Thiết kế hợp đồng dữ liệu cho công cụ và UI

> **Loại:** Lesson · **Trọng tâm:** Hợp đồng dữ liệu nhất quán giữa backend và React.

## 1. Tóm tắt

Tool calls là cầu nối giữa suy luận của agent và dữ liệu có thể kiểm chứng. Để frontend render chính xác, backend nên cung cấp kết quả có cấu trúc ổn định, xử lý lỗi rõ ràng và phân biệt kết quả đọc với hành động ghi. Đây là nền tảng của một price card và bảng duyệt giao dịch.

## 2. Mục tiêu

- Đề xuất schema input/output cho tool snapshot giá.
- Phân biệt dữ liệu server trả về với giá trị UI tự tính.
- Thiết kế trạng thái `loading`, `success`, `error`, `stale`.
- Viết các trường cần kiểm tra khi phát sinh thao tác có hiệu lực.

## 3. Hợp đồng công cụ tra cứu giá

Ví dụ cấu trúc **minh họa** (không phải schema bắt buộc của repository):

```json
{
  "symbol": "META",
  "currency": "USD",
  "price": 100.0,
  "change": -1.5,
  "updated_at": "2026-01-01T10:00:00Z",
  "provider": "example-provider"
}
```

Con số ví dụ không phải báo giá thật. Tính tách biệt `currency` và `updated_at` giúp frontend gắn đúng đơn vị và cảnh báo dữ liệu cũ. Không nên chỉ truyền một chuỗi đã format vì sẽ khó xử lý lỗi, quốc tế hóa hoặc kiểm tra miền giá trị.

## 4. Quy trình kiểm tra dữ liệu

### 4.1. Ở backend

Validate ký hiệu mã theo schema, cấu hình timeout và retry có giới hạn, nhận diện lỗi provider và tránh ghi log secret. Với dữ liệu tài chính, kiểm tra `updated_at` và trạng thái giá có được phép sử dụng cho nghiệp vụ hay chỉ để tham khảo.

### 4.2. Ở frontend

Giao diện phân biệt đủ dữ liệu, không có dữ liệu, lỗi và dữ liệu quá cũ. Chỉ format số khi thuộc tính là giá trị số hợp lệ. Không tính tổng chi phí nếu giá chưa xác thực cho bước giao dịch.

```typescript
type PriceSnapshot = {
  symbol: string;
  currency: string;
  price: number | null;
  change: number | null;
  updated_at: string | null;
};

function hasQuote(x: PriceSnapshot): boolean {
  return typeof x.price === "number" && Number.isFinite(x.price);
}
```

Đây là code TypeScript độc lập; không phụ thuộc API nội bộ của assistant-ui.

## 5. Công cụ có side effect

Công cụ đọc chỉ truy xuất dữ liệu. Công cụ ghi có thể làm thay đổi hồ sơ, đặt đơn hàng hoặc chuyển tiền. Thiết kế thao tác ghi gồm bốn bước: **chuẩn bị** → **kiểm tra điều kiện** → **phê duyệt** → **thực thi và xác nhận**. Cần audit log và idempotency key nếu có nguy cơ thực thi lặp.

Không nên truyền trực tiếp từ `tool call args` đến `executePurchase` khi còn thiếu xác thực, hạn mức hoặc trạng thái phê duyệt.

## 6. Lab nhỏ

Tạo một bảng quy tắc để hiển thị price card:

| Trường hợp | UI đề xuất |
| --- | --- |
| `price` hợp lệ và `updated_at` mới | Giá và nhãn thời gian |
| `price` là `null` | Placeholder “Chưa có giá” |
| Tool timeout | Thông báo lỗi và tùy chọn thử lại |
| Dữ liệu cũ | Cảnh báo “Giá tham khảo” |
| Tool pending | Skeleton/loading |

**Checkpoint:** với mọi trạng thái, giao diện không tạo số liệu giả và không nhầm kết quả tra cứu với thao tác thực thi.

## 7. Tổng kết

Schema rõ ràng khiến việc dựng UI, xử lý lỗi và giám sát agent dễ hơn. Chất lượng Generative UI phụ thuộc vào dữ liệu công cụ và khả năng phân biệt trạng thái hơn là chỉ hiệu ứng giao diện.

## 8. Câu hỏi ôn tập

### Câu 1

Thuộc tính nào giúp đánh giá độ mới của dữ liệu giá?

A. padding  
B. updated_at  
C. z-index  
D. fontSize

**Đáp án:** B

**Giải thích:** Thời điểm cập nhật giúp xác định giá hiện tại hay đã cũ.

### Câu 2

Nếu `price` là null, giao diện nên làm gì?

A. Tạo ngẫu nhiên số  
B. Cho phép đặt lệnh thật  
C. Hiển thị chưa có giá  
D. Mặc định bằng 0 và báo thành công

**Đáp án:** C

**Giải thích:** Không được biến dữ liệu thiếu thành kết quả có ý nghĩa nghiệp vụ.

### Câu 3

Công cụ nào có side effect?

A. Công cụ đặt lệnh mua  
B. Công cụ chỉ đọc profile  
C. Công cụ đọc tên công ty  
D. Công cụ tra cứu mô tả

**Đáp án:** A

**Giải thích:** Đặt lệnh thay đổi trạng thái hệ thống ngoài chat.

### Câu 4

Biện pháp nào giúp tránh thực thi lặp khi mạng retry?

A. Đổi icon  
B. Ẩn nút cancel  
C. Bỏ validate  
D. Idempotency key

**Đáp án:** D

**Giải thích:** Khóa idempotency hỗ trợ nhận diện request đã xử lý.

### Câu 5

Cách hiển thị tốt khi tool đang xử lý?

A. Thông báo thành công  
B. Skeleton/loading rõ ràng  
C. Ẩn mọi trạng thái  
D. Tự hoàn thành request

**Đáp án:** B

**Giải thích:** Người dùng cần biết kết quả chưa sẵn sàng.
