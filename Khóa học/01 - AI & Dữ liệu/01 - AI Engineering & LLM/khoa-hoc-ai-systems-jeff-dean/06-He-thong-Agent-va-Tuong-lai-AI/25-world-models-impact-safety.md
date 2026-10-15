# Bài 25 — World models, tác động xã hội và an toàn AI

> **Module 06: Hệ thống agent và tương lai AI**  
> **Phạm vi bài giảng:** 68:46–76:04  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **world models, tác động xã hội và an toàn ai** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Phân biệt mô hình ngôn ngữ với mô phỏng thế giới có trạng thái.
2. Phân tích tác động tích cực và rủi ro xã hội của AI.
3. Đề xuất biện pháp giảm rủi ro cho nội dung và hành động AI.

## 3. Kiến thức trọng tâm

### 3.1. AI tác động vượt khỏi ngành công nghệ
Các ứng dụng AI liên quan đến lao động, giáo dục, y tế, khoa học, truyền thông, quản trị và an ninh. Có tiềm năng mở rộng khả năng tiếp cận chuyên môn, nhưng cũng tạo áp lực chuyển đổi nghề nghiệp, thông tin sai lệch và sai sót trong quyết định quan trọng.

Cách tiếp cận có trách nhiệm là phân tích song song **lợi ích, người chịu tác động, đường gây hại và biện pháp giảm thiểu** đối với từng trường hợp sử dụng.

### 3.2. Rủi ro deepfake và thông tin sai lệch
Khi âm thanh/video sinh ra trở nên chân thực, con người có thể khó phân biệt tư liệu thật và giả. Biện pháp triển khai bao gồm công bố nguồn gốc khi phù hợp, xác minh nhiều nguồn độc lập, hạn chế giả mạo danh tính, bổ sung quy trình xử lý báo cáo nội dung sai lệch và quyền con người phê duyệt hành động nhạy cảm.

### 3.3. Hallucination trong ứng dụng ngữ cảnh dài
Mô hình có thể tạo câu trả lời sai ngay cả khi có nhiều văn bản. Một phương pháp được thảo luận là tạo **nhiều ứng viên** rồi so sánh và kiểm tra để giảm sai sót, đặc biệt khi có verifier. Nhưng nó tăng test-time compute và không bảo đảm loại bỏ mọi hallucination.

Đối với dữ liệu tài liệu, cần thêm trích dẫn chính xác, retrieval tốt và kiểm tra tính phù hợp của câu trả lời với đoạn văn chứng cứ.

### 3.4. World model là gì?
Một **world model** cố gắng nắm giữ quy luật vận động và tính nhất quán của môi trường qua thời gian, không chỉ dự đoán câu văn. Một thế giới mô phỏng có thể cho người điều khiển di chuyển, quay lại vị trí cũ và mong đợi các vật thể/quan hệ đã tồn tại vẫn nhất quán.

Ứng dụng được thảo luận gồm tạo tình huống hiếm cho mô phỏng xe tự hành: ví dụ chướng ngại vật bất ngờ xuất hiện giữa đường. Việc thử kịch bản mô phỏng giúp tăng độ phủ kiểm thử, nhưng dữ liệu sinh cần được kiểm soát độ thực tế và không thay thế kiểm nghiệm trên đường thật.

### 3.5. Thiết kế an toàn theo quyền hạn
Một hệ có khả năng suy luận mạnh vẫn phải được giới hạn công cụ và hành động: quyền chỉ đọc/mở rộng, xác nhận trước hành động khó đảo ngược, logging, rate limit, quy tắc xử lý nội dung sai và khả năng dừng. Mức bảo vệ phụ thuộc ngữ cảnh sử dụng.

**Nguyên tắc:** tăng khả năng mô hình và tăng độ tin cậy hệ thống là hai công việc song song.

## 4. Bài tập thực hành

Chọn một ứng dụng AI giáo dục và một ứng dụng mô phỏng robot. Với mỗi ứng dụng ghi 3 lợi ích, 3 rủi ro, cách kiểm chứng kết quả và hành động nào phải có con người phê duyệt. Với robot, phân biệt kết quả mô phỏng và kết quả thử nghiệm vật lý.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. World model thường cần thể hiện khả năng gì?**

A. Chỉ đo số lần một từ xuất hiện  
B. Chỉ phân loại chữ số viết tay  
C. Giữ tính nhất quán trạng thái của môi trường theo thời gian  
D. Không cần quan hệ không gian  

**Đáp án: C.** Khả năng mô phỏng biến đổi và quay lại trạng thái liên quan là trọng tâm.

**Câu 2. Vì sao mô phỏng tình huống hiếm hữu ích cho xe tự hành?**

A. Vì loại bỏ mọi nhu cầu thử nghiệm thật  
B. Vì mọi mô phỏng đều chính xác tuyệt đối  
C. Vì dữ liệu cảm biến không quan trọng  
D. Cho phép kiểm thử tình huống khó hoặc nguy hiểm nếu dựng ngoài đời  

**Đáp án: D.** Mô phỏng bổ sung độ phủ kiểm thử nhưng cần xác minh độ chân thực.

**Câu 3. Giải pháp nào hợp lý để giảm hallucination khi có nguồn?**

A. Retrieval, dẫn chứng và kiểm tra độc lập các khẳng định  
B. Chỉ tăng số chữ trong đáp án  
C. Tắt tất cả kiểm thử  
D. Mặc định tin mọi câu trả lời dài  

**Đáp án: A.** Cần đối chiếu đầu ra với chứng cứ và điều kiện kiểm chứng.

**Câu 4. Deepfake chân thực tạo rủi ro nào?**

A. Tự làm mọi nguồn thành xác thực  
B. Lan truyền thông tin sai và giả mạo bằng âm thanh/video  
C. Loại bỏ nhu cầu bảo vệ danh tính  
D. Chỉ làm tăng độ phân giải hình  

**Đáp án: B.** Nội dung tổng hợp có thể bị lợi dụng để đánh lừa người xem.

**Câu 5. Với agent được phép gửi email hoặc điều khiển thiết bị, nguyên tắc nào quan trọng?**

A. Cấp quyền admin không giới hạn  
B. Tắt nhật ký để chạy nhanh  
C. Giới hạn quyền, log và xin phê duyệt trước hành động nhạy cảm  
D. Bỏ khả năng dừng hệ thống  

**Đáp án: C.** An toàn phụ thuộc kiểm soát năng lực hành động chứ không chỉ phản hồi văn bản.

## 6. Tổng kết

- World model hướng tới tính nhất quán của môi trường qua thời gian.
- An toàn AI cần kết hợp kỹ thuật, quyền truy cập và kiểm chứng theo tình huống.
