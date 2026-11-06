# Bài 2. Tối ưu độ trễ, chi phí và an toàn vận hành

> **Module 13 — Cải tiến chất lượng và vận hành production**  
> Thời điểm tham chiếu: [3:45:00](https://www.youtube.com/watch?v=qF5il_9IwME&t=13500s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Ưu tiên hardening theo ảnh hưởng: hiệu năng, chi phí API, cô lập quyền, kiểm soát dữ liệu và giám sát.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Tối ưu độ trễ, chi phí và an toàn vận hành**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Agent nhiều bước có thể mất khá lâu; người dùng sẽ không chấp nhận chỉ vì có citation. Hệ thống có thể đã ingest trùng dữ liệu, dùng quá nhiều tool calls, chèn citations không cần thiết hoặc xử lý dữ liệu tài chính chưa đúng. Những vấn đề này cần backlog vận hành rõ ưu tiên thay vì thêm tính năng tùy hứng.

## 4. Kiến thức cốt lõi

### 4.1. Latency budget theo stage

Đo thời gian auth, database, retrieval, neighbor expansion, tool calls, LLM first token và tổng response. Dùng cache có kiểm soát cho metadata hoặc query ổn định; giới hạn vòng agent, budget token, top-k và kiểm tra mức tăng mất chất lượng.

### 4.2. Chi phí và độ ổn định

Ghi số token ingest/query, API costs ước tính dựa trên giá thực tại thời điểm chạy, retry/rate limits. Chỉ re-embed khi text/version thay đổi. Áp timeout, circuit breaker hoặc chiến lược degrade khi model/service không sẵn sàng.

### 4.3. Bảo mật production

Review RLS, JWT verification, quản lý secrets, quota/rate limiting, audit trail, retention log và backup. Ingestion nguồn ngoài cần chống file độc hại và prompt injection: nội dung tài liệu là dữ liệu không phải mệnh lệnh cho agent.

### 4.4. Roadmap sau MVP

Ưu tiên kiểm soát trùng dữ liệu, repair tables, quality eval và citation usability trước những tính năng hấp dẫn nhưng ít giá trị. Đo pilot thực tế rồi mới mở rộng corpus hay nhiều tenant.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Lập phân rã latency cho 20 lượt hỏi và xác định p50/p95.

**Bước 2.** Thử giảm top-k hoặc số tool steps; đo ảnh hưởng tới citation correctness.

**Bước 3.** Thêm rate limits, timeout và log không lộ secret.

**Bước 4.** Lập backlog hardening gồm severity, owner, effort và tiêu chí đo thành công.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```text
Ưu tiên ví dụ:
P0: RLS sai / secret lộ / citation sai dữ kiện quan trọng
P1: ingest trùng / parse bảng sai / timeout thường xuyên
P2: UX chưa tối ưu / cải tiến responsive / thêm bộ lọc
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Không có P0 blocker về quyền và secret trước khi mời người dùng thật.
- [ ] Latency/cost có baseline và được đo lặp lại, không dự đoán cảm tính.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không để prompt từ tài liệu được coi là chỉ dẫn hệ thống.

2. Không giảm retrieval quá mạnh chỉ để tiết kiệm vài giây mà làm mất bằng chứng.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo kế hoạch 2 tuần hardening: 3 việc P0/P1, owner, metric, kết quả kỳ vọng và cách kiểm tra triển khai.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Bước đầu tối ưu latency là gì?

A. Đo thời gian từng stage để tìm bottleneck.  
B. Tránh re-embedding những chunks không đổi.  
C. Nội dung tài liệu cố điều khiển agent như chỉ dẫn.  
D. Lỗ hổng phân quyền hoặc rò khóa bí mật.  

**Đáp án: A.** Tối ưu khi không đo dễ chọn sai phần.

**Câu 2.** Cách giảm chi phí embedding lâu dài?

A. Nội dung tài liệu cố điều khiển agent như chỉ dẫn.  
B. Lỗ hổng phân quyền hoặc rò khóa bí mật.  
C. Chất lượng evidence và citations trên evaluation set.  
D. Tránh re-embedding những chunks không đổi.  

**Đáp án: D.** Reuse kết quả theo text/model version.

**Câu 3.** Mối nguy prompt injection trong corpus?

A. Lỗ hổng phân quyền hoặc rò khóa bí mật.  
B. Chất lượng evidence và citations trên evaluation set.  
C. Nội dung tài liệu cố điều khiển agent như chỉ dẫn.  
D. Đo thời gian từng stage để tìm bottleneck.  

**Đáp án: C.** Retrieval data phải giữ ranh giới untrusted.

**Câu 4.** Ưu tiên P0 nào hợp lý?

A. Chất lượng evidence và citations trên evaluation set.  
B. Lỗ hổng phân quyền hoặc rò khóa bí mật.  
C. Đo thời gian từng stage để tìm bottleneck.  
D. Tránh re-embedding những chunks không đổi.  

**Đáp án: B.** Đây là blocker trước production.

**Câu 5.** Khi giảm tool steps phải kiểm tra gì?

A. Chất lượng evidence và citations trên evaluation set.  
B. Đo thời gian từng stage để tìm bottleneck.  
C. Tránh re-embedding những chunks không đổi.  
D. Nội dung tài liệu cố điều khiển agent như chỉ dẫn.  

**Đáp án: A.** Hiệu năng không được đánh đổi âm thầm với độ đúng.

## 11. Tổng kết

Bài học tập trung vào **Tối ưu độ trễ, chi phí và an toàn vận hành** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [3:45:00](https://www.youtube.com/watch?v=qF5il_9IwME&t=13500s) — 3:51:48.
