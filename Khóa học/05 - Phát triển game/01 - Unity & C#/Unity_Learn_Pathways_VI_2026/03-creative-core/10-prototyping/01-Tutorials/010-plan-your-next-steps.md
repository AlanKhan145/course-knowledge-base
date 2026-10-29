# Bài 10 — Lập lộ trình sau khi hoàn thành prototype

> **Creative Core · Prototyping · Bài học**

Kết quả có giá trị nhất sau một nguyên mẫu là biết nên tiếp tục, điều chỉnh hay ngừng, và giải thích được quyết định bằng bằng chứng.

## 1. Mục tiêu học tập

Người học có thể đánh giá mức độ rủi ro còn lại, phân loại công việc sau prototype, lập backlog theo ưu tiên và lựa chọn hướng phát triển phù hợp thời gian, năng lực và người dùng.

## 2. Đánh giá điều đã học từ prototype

Kết thúc một vòng lặp, hãy lập bảng:

| Câu hỏi | Bằng chứng hiện có | Còn chưa rõ |
|---|---|---|
| Người chơi có hiểu nút mở cầu? | Ghi hình và nhật ký thao tác | Người mới có nhận ra ngay không |
| Điều khiển có ổn? | Controller chạy trên máy thử | Khác biệt khi dùng gamepad |
| Dự án có xây tiếp được? | Core loop hoàn tất | Cần bao nhiêu asset và thời gian |

Không chọn tiếp tục chỉ vì đã đầu tư nhiều thời gian (*sunk cost*). Nếu giả thuyết chính bị bác bỏ, có thể sửa ý tưởng hoặc tạo prototype mới.

## 3. Ba hướng quyết định

**Tiếp tục (persevere):** vòng chơi có tín hiệu khả quan, lỗi chủ yếu nhỏ, rủi ro đủ rõ để giải quyết.

**Điều chỉnh (pivot):** người chơi thích khám phá nhưng không hiểu câu đố; có thể đổi cơ chế hoặc cách bố trí mà vẫn giữ mục tiêu chung.

**Dừng/đóng gói:** dự án đã hoàn thành mục tiêu học tập hoặc chi phí tiếp tục vượt lợi ích; vẫn nên lưu bản build, mã nguồn và bài học vào portfolio.

## 4. Backlog dựa trên tác động và công sức

Phân loại công việc theo **tác động đến người dùng** và **công sức ước lượng**, không theo mức độ thú vị của công cụ. Ví dụ:

| Hạng mục | Tác động | Công sức tương đối | Ưu tiên |
|---|---|---|---|
| Thêm tín hiệu âm thanh khi nút bật | Cao | Thấp | Trước |
| Sửa vị trí camera gây khó nhìn | Cao | Trung bình | Trước |
| Mô hình tường chi tiết | Thấp ở giai đoạn này | Cao | Sau |

Đây là đánh giá của nhóm, không phải benchmark. Có thể dùng nhóm công việc: **bug**, **usability**, **core experience**, **production polish**, **release**.

## 5. Lập kế hoạch học tiếp và lưu dấu tiến độ

1. Viết một đoạn retrospective: điều đạt, điều sai, nguyên nhân, câu hỏi mới.
2. Chọn 1–3 kỹ năng còn thiếu có liên quan đến mục tiêu (ví dụ animation điều khiển cầu, ánh sáng dẫn hướng, profiler).
3. Lập một vòng mới với phạm vi và tiêu chí nghiệm thu cụ thể.
4. Lưu bản build đã kiểm thử trước khi thay đổi lớn, đưa source vào hệ thống version control.
5. Chuẩn bị trang dự án: mục tiêu, vai trò, ảnh/video, quyết định thiết kế, hạn chế.

**Tình huống:** nếu muốn chuyển prototype thành game ngắn, ưu tiên lộ trình *functional milestone → polished short experience → build kiểm thử → portfolio/release* thay vì thêm ngay nhiều level.

## 6. Tổng kết và nguồn tham khảo

Prototype là công cụ ra quyết định. Một bản prototype không được phát triển thành sản phẩm thương mại vẫn có thể thành công nếu giúp xác nhận hoặc bác bỏ giả thuyết và rút ra bài học cụ thể.

- [Unity Learn – Creative Core Pathway](https://learn.unity.com/pathway/creative-core)
- [Unity Docs – Building and publishing](https://docs.unity.com/en-us/engine/6000.0/manual/building-and-publishing)

## 7. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Khi người thử thích khám phá nhưng không hiểu câu đố, lựa chọn hợp lý?

A. Luôn bỏ dự án  
B. Luôn thêm nhiều mô hình  
C. Pivot hoặc chỉnh cách truyền đạt cơ chế rồi thử lại  
D. Bỏ ghi chép  

**Đáp án:** C
**Giải thích:** Thử nghiệm cho thấy một phần trải nghiệm có giá trị nhưng cơ chế cần thay đổi.

**Câu 2.** Điều gì không nên quyết định việc tiếp tục dự án?

A. Chỉ vì đã đầu tư nhiều công sức  
B. Dữ liệu playtest  
C. Rủi ro còn lại  
D. Mục tiêu sản phẩm  

**Đáp án:** A
**Giải thích:** Chi phí chìm không chứng minh triển vọng.

**Câu 3.** Backlog tốt nên dựa trên gì?

A. Màu icon  
B. Số ký tự tên task  
C. Sở thích ngẫu nhiên  
D. Tác động đến mục tiêu và công sức  

**Đáp án:** D
**Giải thích:** Ưu tiên giúp dùng thời gian để giải quyết rủi ro quan trọng.

**Câu 4.** Khi quyết định dừng dự án học tập, nên làm gì?

A. Xóa toàn bộ kết quả  
B. Lưu minh chứng và bài học vào portfolio  
C. Giữ mọi lỗi bí mật  
D. Không tổng kết  

**Đáp án:** B
**Giải thích:** Dừng vẫn tạo được sản phẩm học tập có giá trị.

**Câu 5.** Một retrospective hữu ích ghi gì?

A. Danh sách texture  
B. Chỉ lời khen  
C. Điều đã đạt, nguyên nhân, câu hỏi tiếp theo  
D. Kích cỡ màn hình của người làm  

**Đáp án:** C
**Giải thích:** Tổng kết chuyển kinh nghiệm thành định hướng vòng tiếp theo.
