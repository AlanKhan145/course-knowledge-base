# Bài 17 — Reinforcement Learning từ phản hồi và phần thưởng kiểm chứng

> **Module 04: Tối ưu huấn luyện và suy luận**  
> **Phạm vi bài giảng:** 40:48–43:55  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **reinforcement learning từ phản hồi và phần thưởng kiểm chứng** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Phân biệt supervised fine-tuning với RL giai đoạn sau tiền huấn luyện.
2. Nhận diện ba loại tín hiệu reward: con người, mô hình, kết quả kiểm chứng.
3. Thiết kế reward cho bài toán code hoặc toán học.

## 3. Kiến thức trọng tâm

### 3.1. Pretraining chưa hoàn thành bài toán sản phẩm
Sau khi học từ văn bản lớn, một mô hình thường có năng lực rộng nhưng chưa chắc phản hồi đúng định dạng, độ dài, mức độ hữu ích hay tiêu chí an toàn mà ứng dụng mong muốn. **Post-training** tinh chỉnh hành vi này, trong đó có **supervised fine-tuning (SFT)** và một số kỹ thuật **reinforcement learning (RL)**.

SFT học từ các cặp prompt–câu trả lời mẫu; RL điều chỉnh chính sách mô hình theo một **reward** phản ánh chất lượng hành vi hoặc kết quả.

### 3.2. Reward đến từ đâu?
| Nguồn tín hiệu | Ví dụ | Điểm cần chú ý |
|---|---|---|
| Phản hồi con người (RLHF) | Chọn câu A hữu ích hơn B | Tốn công; đánh giá chủ quan |
| Phản hồi từ mô hình (RLAIF) | Reward model so sánh A/B | Có thể mang thiên lệch của model chấm |
| Kết quả kiểm chứng | Code compile, unit tests, chứng minh hợp lệ | Đo được rõ, nhưng có thể bị tối ưu lệch metric |

### 3.3. Verifiable reward trong lập trình
Ví dụ hệ sinh code:
1. Prompt yêu cầu viết hàm xử lý dữ liệu.
2. Model tạo một bản cài đặt.
3. Hệ thống biên dịch hoặc kiểm tra cú pháp.
4. Unit tests trả về pass/fail.
5. Reward được tính theo kết quả kiểm chứng, có thể kèm phạt code không an toàn hoặc không đáp ứng ràng buộc.

**Lưu ý:** code chạy qua vài unit tests chưa chắc đúng trong mọi trường hợp; muốn reward tốt cần test bao phủ và tránh mô hình học cách khai thác lỗi kiểm thử.

### 3.4. Lĩnh vực khó kiểm chứng
Trong sáng tạo, lập kế hoạch mở hoặc tư vấn, không luôn có đáp án đúng/sai khách quan. Reward từ con người hoặc mô hình đánh giá trở nên quan trọng hơn nhưng cần chú ý độ tin cậy, sự nhất quán và vấn đề reward hacking.

### 3.5. Mối liên hệ với khả năng reasoning
Tín hiệu phản hồi có thể khuyến khích mô hình thử hướng giải, kiểm tra kết quả và cải thiện năng lực toán/lập trình. Thành công với các bài có verifier không đồng nghĩa giải quyết được ngay bài toán thưởng cho mọi nhiệm vụ xã hội phức tạp.

## 4. Bài tập thực hành

Thiết kế reward cho mô hình sinh code Python: `0` nếu cú pháp sai, `0.3` nếu compile được, cộng các điểm khi test hợp lệ. Sau đó chỉ ra ít nhất 3 cách reward này có thể bị khai thác hoặc cho kết luận sai. Không chạy code sinh ra từ model trong máy thật nếu chưa sandbox và kiểm tra an toàn.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Khác biệt giữa SFT và RL trong post-training là gì?**

A. SFT chỉ chạy trên GPU, RL chỉ trên CPU  
B. SFT không có tham số còn RL có  
C. SFT dùng câu trả lời mẫu, RL tối ưu theo reward  
D. RL là tên của tokenizer  

**Đáp án: C.** SFT là học có giám sát, RL dùng tín hiệu phần thưởng.

**Câu 2. Ví dụ nào là verifiable reward?**

A. Người dùng thấy câu trả lời dễ thương  
B. Tên mô hình nghe ấn tượng  
C. Số ký tự của prompt  
D. Unit tests pass/fail cho mã sinh ra  

**Đáp án: D.** Unit tests cung cấp kết quả có thể kiểm chứng bằng thực thi.

**Câu 3. RLAIF dùng loại phản hồi nào?**

A. Phản hồi do mô hình đánh giá cung cấp  
B. Chỉ phản hồi của nhà ngôn ngữ học  
C. Chỉ phép nhân ma trận  
D. Chỉ số nhiệt độ chip  

**Đáp án: A.** AI feedback nghĩa là tín hiệu đánh giá từ mô hình khác.

**Câu 4. Vì sao reward cao không luôn đồng nghĩa giải pháp tốt?**

A. Vì reward không phải số  
B. Mô hình có thể khai thác lỗ hổng metric hoặc test  
C. Vì code không bao giờ compile  
D. Vì mọi tác vụ đều có đáp án duy nhất  

**Đáp án: B.** Reward hacking có thể tối ưu điểm thưởng mà lệch mục tiêu thực.

**Câu 5. Với một nhiệm vụ chủ quan khó kiểm chứng, cần làm gì?**

A. Xem unit test là cách duy nhất  
B. Không cần phản hồi con người  
C. Thiết kế quy trình đánh giá cẩn trọng và xem xét bất đồng  
D. Thưởng mọi câu trả lời độ dài bằng nhau  

**Đáp án: C.** Reward cho lĩnh vực mở phụ thuộc đánh giá và cần quản lý sai lệch.

## 6. Tổng kết

- Post-training điều chỉnh hành vi và năng lực sau tiền huấn luyện.
- Reward có nguồn gốc khác nhau và chất lượng reward quyết định hướng học.
