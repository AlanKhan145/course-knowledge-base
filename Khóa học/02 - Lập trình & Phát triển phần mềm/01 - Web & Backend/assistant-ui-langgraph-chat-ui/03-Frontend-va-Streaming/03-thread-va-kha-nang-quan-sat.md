# Quản lý thread, lịch sử và khả năng quan sát agent

> **Loại:** Lesson · **Trọng tâm:** Thread identity, persistence và observability.

## 1. Tóm tắt

Một chatbot có nhiều cuộc hội thoại cần nhận dạng mỗi cuộc bằng `thread_id`. Ở LangGraph, thread đi kèm state và checkpoint. UI cần truy xuất lịch sử đúng thread, phục hồi tình trạng tạm dừng và không đánh đồng thread list với dữ liệu message.

## 2. Mục tiêu

- Giải thích chức năng của create/load cho thread.
- Chỉ ra khi nào nên dùng danh sách thread tùy biến hoặc AssistantCloud.
- Mô tả cách kiểm tra tool calls và graph execution trong Studio.
- Lập kế hoạch debug mà không lộ dữ liệu riêng tư.

## 3. Thread khác message thế nào?

Một **thread** là luồng hội thoại có nhiều message và trạng thái thực thi. **Message** là một lượt nội dung cụ thể; **run** là lần kích hoạt graph; **checkpoint** là ảnh chụp state cho phép phục hồi hoặc rẽ nhánh an toàn. Nếu chỉ giữ message trong mảng React và không đồng bộ server, việc refresh hoặc chuyển thread sẽ dễ mất bối cảnh.

## 4. Ba chiến lược danh sách thread

| Chiến lược | Đặc điểm | Phù hợp |
| --- | --- | --- |
| Basic | Một thread hoặc quản lý cơ bản qua runtime | Prototype |
| AssistantCloud | Hỗ trợ danh sách và đồng bộ theo dịch vụ | Muốn giảm công việc xây thread UI |
| Custom adapter | Danh sách thread từ database/backend của bạn | Sản phẩm có identity và quyền truy cập riêng |

Tài liệu LangGraph Runtime mô tả `useLangGraphRuntime` hỗ trợ `create`, `load`, và tùy biến thread list. Trong custom adapter, frontend vẫn phải kiểm tra quyền thông qua backend chứ không được tin mỗi `externalId` từ client.

## 5. Quan sát luồng agent

### 5.1. Tool call trong UI

Hiển thị tên công cụ, dữ liệu arguments an toàn và kết quả. Người dùng cuối chỉ nên thấy thông tin hữu ích; chi tiết về nội bộ hoặc secret nên được che.

### 5.2. LangGraph Studio

Studio cho phép xem luồng từ node `agent` sang nhánh tool hoặc approval, theo dõi output và chạy thử message. Đây là công cụ gỡ lỗi lý tưởng khi UI hiển thị sai vì có thể xác định lỗi nằm ở graph, API hay renderer.

### 5.3. Tracing và telemetry

Ở môi trường ứng dụng thật, log nên có `request_id`, `thread_id` (hoặc định danh đã ẩn thông tin nhạy cảm), tool name, latency, error category. Không log thẳng API key, số tài khoản, dữ liệu khách hàng hoặc toàn bộ prompt nếu không có cơ sở lưu trữ phù hợp.

## 6. Bài tập gỡ lỗi

Giả sử người dùng đang ở thread A, nhấn sang thread B, rồi công cụ của A trả kết quả. Hãy mô tả ba kiểm tra:

1. Mỗi event có được gắn đúng thread/run không?
2. Runtime có bỏ qua/kết hợp update không thuộc thread hiện tại không?
3. Khi quay lại A, load có lấy được message và interrupt còn dang dở không?

**Checkpoint:** không được có kết quả của A xuất hiện trong B; nếu A đang chờ phê duyệt, trạng thái chờ vẫn khôi phục được khi quay lại (nếu backend checkpoint đã cấu hình).

## 7. Tổng kết

Thread identity và observability giúp hệ thống chat có độ tin cậy tương đương ứng dụng nghiệp vụ. Phân biệt trạng thái UI với trạng thái server là tiền đề để phát triển nhiều cuộc hội thoại và agent nhiều bước.

## 8. Câu hỏi ôn tập

### Câu 1

Đối tượng nào đại diện cho một cuộc hội thoại có state?

A. CSS module  
B. Thread  
C. Nút Send  
D. Chỉ một token

**Đáp án:** B

**Giải thích:** Thread tập hợp lịch sử và trạng thái của cuộc hội thoại.

### Câu 2

Checkpoint hữu ích nhất khi nào?

A. Chỉnh màu nền  
B. Giảm kích thước font  
C. Phục hồi hoặc rẽ nhánh state an toàn  
D. Không cần giữ trạng thái

**Đáp án:** C

**Giải thích:** Checkpoint lưu các trạng thái quan trọng của graph.

### Câu 3

Nếu có backend riêng để lưu thread list, nên ưu tiên?

A. Custom thread list adapter có kiểm tra quyền  
B. Lưu thread IDs công khai trong URL và tin tưởng hoàn toàn  
C. Xóa server state  
D. Trộn thread IDs thành một

**Đáp án:** A

**Giải thích:** Custom adapter phù hợp khi ứng dụng sở hữu dữ liệu và auth riêng.

### Câu 4

LangGraph Studio hỗ trợ tốt nhất?

A. Tạo logo  
B. Thiết kế typography  
C. Đặt lệnh mua thật  
D. Quan sát node và tool execution

**Đáp án:** D

**Giải thích:** Studio giúp xác định vấn đề ở lớp graph.

### Câu 5

Log telemetry an toàn cần tránh điều gì?

A. Mã lỗi tổng quát  
B. Lưu API key thô  
C. Định danh request đã kiểm soát  
D. Độ trễ tool

**Đáp án:** B

**Giải thích:** Secret không được ghi ra log không kiểm soát.
