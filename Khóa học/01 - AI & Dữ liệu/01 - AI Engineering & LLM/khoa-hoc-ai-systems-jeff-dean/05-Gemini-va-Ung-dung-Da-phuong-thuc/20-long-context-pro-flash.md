# Bài 20 — Long context, model tiers và đánh đổi chất lượng–giá

> **Module 05: Gemini và ứng dụng đa phương thức**  
> **Phạm vi bài giảng:** 50:10–52:20  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **long context, model tiers và đánh đổi chất lượng–giá** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Giải thích tại sao cửa sổ ngữ cảnh hữu ích khác trọng số mô hình.
2. Phân tích hạn chế của long context và chiến lược retrieval.
3. Phân biệt model chất lượng cao và phiên bản tối ưu chi phí.

## 3. Kiến thức trọng tâm

### 3.1. Trọng số không giống ngữ cảnh đầu vào
Trong pretraining, rất nhiều ví dụ được tổng hợp dần thành các **tham số** của mô hình. Khi đặt một tài liệu cụ thể trong **context window**, ta đưa thông tin liên quan trực tiếp vào điều kiện suy luận, thay vì hy vọng mô hình đã lưu đủ chi tiết trong trọng số.

Đối với một báo cáo dài hoặc kho mã, điều này hữu ích cho các thao tác so sánh, tóm tắt, trích dẫn và truy vấn liên quan nhiều phần.

### 3.2. Cửa sổ ngữ cảnh lớn có chi phí
Một triệu token có thể chứa lượng văn bản rất lớn, nhưng **độ dài hỗ trợ kỹ thuật** không đồng nghĩa mô hình sẽ nhớ và dùng mọi chi tiết chính xác. Cần kiểm tra khả năng truy xuất chi tiết ở đầu, giữa và cuối, mức nhiễu và chi phí xử lý. Nguồn nội dung còn chứa ví dụ ước lượng cỡ nghìn trang; con số trang chỉ mang tính trực giác, vì số token/trang thay đổi đáng kể.

### 3.3. Pro và Flash như hai chế độ sản phẩm
Một chiến lược thiết kế họ mô hình là:
- **Pro / high quality:** ưu tiên chất lượng cho các nhiệm vụ khó hơn, chấp nhận chi phí hoặc latency lớn hơn.
- **Flash / efficient:** hướng tới chất lượng cao trong ràng buộc latency và chi phí thấp hơn.

Distillation và cải tiến kiến trúc có thể mang một phần năng lực thế hệ lớn sang bản tiết kiệm hơn. Không có nghĩa bản Flash luôn ngang bản Pro trên mọi bài toán.

### 3.4. Cách chọn mô hình theo độ khó
| Loại yêu cầu | Gợi ý routing kỹ thuật |
|---|---|
| Phân loại câu đơn giản | Bản model nhẹ có test phù hợp |
| Tóm tắt nhiều tài liệu có dẫn chứng | Chọn mô hình và context theo độ dài/độ chính xác |
| Lập luận toán nhiều bước | Model mạnh hơn + verifier nếu có |
| Tác vụ hàng loạt giá trị thấp | Ưu tiên throughput, cache và giới hạn token |

**Quy tắc:** đánh giá trên tập yêu cầu thực của sản phẩm; tên tầng model chỉ là một tín hiệu ban đầu.

## 4. Bài tập thực hành

Lập bảng 20 yêu cầu giả lập: 10 yêu cầu đơn giản, 5 đọc tài liệu, 5 reasoning. Với mỗi yêu cầu gán `difficulty`, `context_tokens`, `quality_risk` và đề xuất `small/large`. Mô tả khi nào cần fallback lên bản lớn.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Sự khác biệt cốt lõi giữa model weights và context là gì?**

A. Hai loại đều là tệp Word lưu trên ổ  
B. Weights là tri thức học tổng hợp, context là thông tin đầu vào trực tiếp  
C. Context không có giới hạn độ dài  
D. Weights thay đổi sau mỗi câu hỏi thông thường  

**Đáp án: B.** Context điều kiện hóa lượt suy luận còn weights đã học trong train.

**Câu 2. Cửa sổ hỗ trợ 1 triệu token có đảm bảo mô hình nhớ chính xác mọi chi tiết không?**

A. Có, đó là định nghĩa của long context  
B. Có, nếu ngữ cảnh có nhiều PDF  
C. Không, vẫn cần đo chất lượng truy xuất và chi phí  
D. Có, nếu mô hình dùng JAX  

**Đáp án: C.** Giới hạn số token không đồng nghĩa mọi nội dung được sử dụng hoàn hảo.

**Câu 3. Vì sao có các tầng Pro và Flash?**

A. Vì hai tầng phải dùng hai ngôn ngữ khác nhau  
B. Vì Flash chỉ dùng để lưu dữ liệu  
C. Vì Pro không thực hiện inference  
D. Cung cấp điểm cân bằng khác nhau giữa chất lượng và chi phí  

**Đáp án: D.** Phân tầng giúp chọn cấu hình thích hợp workload.

**Câu 4. Khi nào nên có fallback sang mô hình mạnh hơn?**

A. Khi bài khó, rủi ro cao hoặc model nhẹ không đạt ngưỡng kiểm thử  
B. Khi mọi câu hỏi chỉ gồm một chữ  
C. Khi luôn muốn tốn ít tiền nhất  
D. Khi API trả nhanh  

**Đáp án: A.** Routing thích ứng theo độ khó và độ tin cậy.

**Câu 5. Để chọn tier, điều quan trọng nhất là gì?**

A. Chỉ dựa tên thương mại  
B. Benchmark trên tập yêu cầu thực và đánh đổi latency–quality  
C. Chọn model nhiều chữ nhất  
D. Dùng mọi tier luân phiên ngẫu nhiên  

**Đáp án: B.** Hiệu quả trên workload thực quan trọng hơn nhãn marketing.

## 6. Tổng kết

- Thông tin trong context mang tính tình huống, không giống tri thức tham số.
- Mô hình phân tầng giúp cân bằng năng lực, thời gian và ngân sách.
