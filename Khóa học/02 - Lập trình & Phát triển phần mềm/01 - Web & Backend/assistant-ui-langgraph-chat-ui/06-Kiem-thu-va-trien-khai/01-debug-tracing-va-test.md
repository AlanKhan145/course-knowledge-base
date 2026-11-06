# Kiểm thử streaming, tool call và trạng thái agent

> **Loại:** Lab · **Trọng tâm:** Kế hoạch kiểm thử end-to-end cho ứng dụng agent.

## 1. Tổng quan

Ứng dụng agent có nhiều nguồn lỗi hơn chatbot thường: model có thể chọn nhánh khác kỳ vọng, tool có thể timeout, stream có thể đứt và người dùng có thể chuyển thread trong lúc chờ phê duyệt. Vì vậy, kiểm thử chỉ một lượt chat thành công là chưa đủ.

## 2. Mục tiêu

- Lập ma trận kiểm thử theo lớp UI, API, graph và tool.
- Phân tích lỗi bằng dấu vết execution trong Studio và network log.
- Thiết kế test riêng cho approve/reject, retry và reconnect.
- Kiểm tra nguyên tắc không lộ secret trong log và UI.

## 3. Ma trận kiểm thử

| Nhóm | Input / tình huống | Kỳ vọng |
| --- | --- | --- |
| Text | Câu hỏi dài | Text stream có tiến độ và hoàn tất |
| Tool | Tra cứu một ticker hợp lệ | Hiện tool call, input an toàn, result |
| Tool lỗi | Provider không phản hồi | Hiển thị lỗi, không tự chế dữ liệu |
| Generative UI | Có UI event `chart` | Render đúng thành phần |
| Approval | Từ chối lệnh | Không gọi công cụ thực thi |
| Approval | Xác nhận lệnh | Chuyển sang executing và nhận kết quả server |
| Thread | Chuyển giữa A và B | Không trộn message |
| Reload | Đang pending approval | Khôi phục trạng thái nếu có checkpoint |
| Security | Người dùng truy cập thread khác | Server từ chối |

## 4. Trình tự debug

### 4.1. Xác định lỗi ở lớp nào

Nếu có tool result trong Studio mà UI không hiện card, nghi ngờ frontend renderer hoặc stream event. Nếu Studio cũng không có tool result, kiểm tra graph routing và logs. Nếu browser bị 401/403, kiểm tra session/proxy. Nếu chỉ một provider thất bại, kiểm tra credential, quota và timeout.

### 4.2. Thu thập bằng chứng

Ghi request ID, thread ID đã ẩn danh, node đang chạy, tool name, thời điểm và loại lỗi. So sánh request client với trạng thái server, tránh log raw API key và dữ liệu nhạy cảm.

### 4.3. Reproduce tối thiểu

Rút ngắn input còn một câu có thể tái hiện lỗi, cố định phiên bản dependencies và cấu hình môi trường. Không gán lỗi do agent suy luận nếu vấn đề thực tế nằm ở CORS hoặc renderer.

## 5. Kiểm thử failure injection

Chạy các tình huống sau trên môi trường thử nghiệm:

1. Giả lập giá API trả HTTP 500.
2. Cắt kết nối mạng giữa lúc stream.
3. Refresh ngay khi approval card xuất hiện.
4. Bấm approve liên tiếp hoặc mở hai tab cùng thread.
5. Thử truy cập thread ID không thuộc người dùng đã đăng nhập.

Với mỗi case ghi **expected**, **actual**, **log evidence** và **fix**. Khi chạy trên hệ thống có giao dịch thật, dùng môi trường sandbox/mocking thay vì tài khoản có khả năng đặt lệnh thật.

## 6. Checkpoint và deliverable

Tạo một bảng ít nhất tám test case với kết quả pass/fail; bổ sung sơ đồ trình tự cho trường hợp network timeout sau approve. Nêu rõ test nào kiểm được ở frontend và test nào bắt buộc phải chứng minh ở backend.

## 7. Tổng kết

Kiểm thử agent là kiểm thử các tương tác, trạng thái và tác động ngoài hệ thống chat. Chứng minh luồng từ chối không có side effect quan trọng không kém chứng minh luồng thành công.

## 8. Câu hỏi ôn tập

### Câu 1

Nếu Studio có tool result nhưng UI không thấy card, nên kiểm tra đầu tiên?

A. Bàn phím người dùng  
B. Renderer và stream UI  
C. Thông số ngân hàng  
D. Độ phân giải màn hình

**Đáp án:** B

**Giải thích:** Tool đã chạy, lỗi có thể ở đường chuyển/render event.

### Câu 2

Test nào quan trọng với ứng dụng HITL?

A. Thay font chữ  
B. Tăng margin  
C. Từ chối không gây side effect  
D. Tạo avatar ngẫu nhiên

**Đáp án:** C

**Giải thích:** Từ chối phải chặn công cụ gây tác động.

### Câu 3

Failure injection là gì?

A. Cố ý tạo tình huống lỗi để kiểm tra phản ứng hệ thống  
B. Tắt linter  
C. Viết thêm quảng cáo  
D. Luôn bỏ qua exception

**Đáp án:** A

**Giải thích:** Giả lập mạng đứt hay tool 500 để kiểm tra tính phục hồi.

### Câu 4

Với bài kiểm thử giao dịch, nên chạy ở đâu?

A. Tài khoản tiền thật tùy ý  
B. Không cần phân môi trường  
C. Mọi môi trường như nhau  
D. Sandbox/mocking nếu có thể

**Đáp án:** D

**Giải thích:** Giảm rủi ro tác động ngoài ý muốn khi test.

### Câu 5

Dữ liệu nào không nên ghi raw trong telemetry?

A. Request ID đã kiểm soát  
B. API secret  
C. Latency tổng hợp  
D. Loại lỗi

**Đáp án:** B

**Giải thích:** API secret không nên xuất hiện trong log.
