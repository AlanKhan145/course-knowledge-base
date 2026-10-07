# Descriptive Analysis — Phân tích mô tả

**Module:** Module 03 — Types of Data Analysis — Các kiểu phân tích dữ liệu  
**Roadmap item:** 3.1  
**Loại nội dung:** Data analysis types  
**Thời lượng gợi ý:** 35–55 phút

## 1. Tóm tắt

**Descriptive Analysis** — phân tích mô tả — tập trung trả lời câu hỏi:

> **Điều gì đã xảy ra?**

Trong công việc của BI Analyst, phân tích mô tả không chỉ là lấy số liệu rồi đưa lên dashboard. Một phân tích tốt phải bắt đầu từ **business question**, xác định đúng dữ liệu và metric, sau đó trình bày kết quả theo cách giúp stakeholder nhìn thấy trạng thái thực tế của doanh nghiệp.

Ví dụ, khi một KPI giảm, câu hỏi mô tả chưa phải là “tại sao giảm?” mà là:

- KPI đã giảm bao nhiêu?
- Giảm từ thời điểm nào?
- Nhóm sản phẩm, khu vực hoặc giai đoạn nào có mức giảm đáng chú ý?
- Xu hướng hiện tại khác gì so với kỳ trước?

Descriptive Analysis vì vậy là lớp phân tích giúp biến dữ liệu thô thành một bức tranh dễ hiểu về những gì đã diễn ra.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Giải thích được **Descriptive Analysis** bằng ngôn ngữ dễ hiểu cho stakeholder không chuyên về dữ liệu.
- Phân biệt câu hỏi mô tả với các câu hỏi chẩn đoán, dự đoán và khuyến nghị.
- Xác định được business question, dữ liệu và metric cần thiết cho một bài phân tích mô tả.
- Chuyển kết quả mô tả thành insight ngắn gọn, có bối cảnh.
- Tạo được một artifact nhỏ như dashboard note, KPI definition, SQL query, analysis brief hoặc executive summary.

## 3. Câu hỏi kinh doanh cốt lõi

Câu hỏi trung tâm của Descriptive Analysis là:

> **Điều gì đã xảy ra?**

Một business question tốt cần đủ cụ thể để biết nên đo gì.

Ví dụ, thay vì hỏi:

> Doanh số thế nào?

có thể hỏi:

> Doanh thu tháng này thay đổi thế nào so với tháng trước?

Hoặc:

> Tỷ lệ chuyển đổi trong tuần vừa rồi biến động ra sao theo từng kênh?

Điểm quan trọng là câu hỏi phải hướng tới **trạng thái hoặc biến động đã xảy ra**, chưa đi sâu kết luận nguyên nhân.

## 4. Thành phần của một phân tích mô tả

Một bài phân tích mô tả nên làm rõ bốn yếu tố chính:

| Thành phần | Câu hỏi cần trả lời |
| --- | --- |
| Business question | Stakeholder đang muốn biết điều gì đã xảy ra? |
| Data | Dữ liệu nào phản ánh đúng vấn đề? |
| Metric | Chỉ số nào cần theo dõi? |
| Insight | Số liệu đáng chú ý nhất là gì? |

Nếu một trong bốn yếu tố này không rõ, dashboard hoặc report rất dễ trở thành tập hợp chart đẹp nhưng không giúp ra quyết định.

## 5. Quy trình thực hiện

Một workflow đơn giản có thể đi theo trình tự:

```text
Business question
    ↓
Xác định metric
    ↓
Kiểm tra dữ liệu
    ↓
So sánh theo thời gian / nhóm
    ↓
Tóm tắt điều đã xảy ra
    ↓
Viết insight cho stakeholder
```

### 5.1. Xác định business question

Trước khi chọn chart hoặc query, cần biết người dùng cuối muốn hiểu điều gì.

Ví dụ:

> Stakeholder muốn biết doanh thu tuần này có đang thấp hơn tuần trước hay không.

### 5.2. Xác định metric

Chọn metric trực tiếp liên quan tới câu hỏi. Nếu câu hỏi về doanh thu thì metric chính phải là doanh thu, không nên thay bằng số đơn hàng nếu chưa giải thích mối quan hệ.

### 5.3. Kiểm tra data quality và bối cảnh

Trước khi kết luận cần kiểm tra tối thiểu:

- dữ liệu có đủ mới không;
- phạm vi thời gian có đúng không;
- metric có được định nghĩa nhất quán không;
- có dữ liệu thiếu hoặc bất thường không.

### 5.4. So sánh và tìm pattern

Phân tích mô tả thường cần so sánh:

- kỳ này với kỳ trước;
- nhóm này với nhóm khác;
- actual với target;
- tổng thể với từng phân khúc.

Mục tiêu không phải chứng minh nguyên nhân mà là mô tả rõ **biến động nào đang xảy ra**.

### 5.5. Viết insight

Một insight tốt nên có:

1. metric;
2. hướng thay đổi;
3. phạm vi hoặc bối cảnh;
4. đối tượng chịu ảnh hưởng.

Ví dụ:

> Doanh thu tháng này thấp hơn tháng trước, trong đó mức giảm tập trung chủ yếu ở nhóm sản phẩm A.

Đây vẫn là insight mô tả vì chưa khẳng định nguyên nhân.

## 6. Ví dụ minh họa

Giả sử stakeholder báo rằng một metric đang giảm.

Một cách tiếp cận mô tả có thể là:

> “Metric giảm từ mức nào xuống mức nào, xảy ra trong giai đoạn nào và tập trung ở nhóm nào?”

Dashboard phục vụ câu hỏi này có thể gồm:

- KPI hiện tại;
- mức thay đổi so với kỳ trước;
- trend theo thời gian;
- breakdown theo một chiều dữ liệu quan trọng.

Điểm quan trọng là mỗi chart phải hỗ trợ trực tiếp cho business question.

## 7. Từ số liệu đến quyết định

Descriptive Analysis không nên dừng ở việc đọc số.

BI Analyst cần chuyển kết quả thành một thông điệp mà stakeholder có thể dùng tiếp.

Ví dụ:

> Metric giảm rõ ở một nhóm cụ thể. Bước tiếp theo nên kiểm tra nguyên nhân của nhóm này trước khi mở rộng điều tra toàn bộ hệ thống.

Câu cuối chưa phải kết luận nguyên nhân. Nó chỉ biến kết quả mô tả thành **next action** hợp lý.

## 8. Lỗi thường gặp

### 8.1. Chọn chart trước khi hiểu câu hỏi

Một dashboard có nhiều chart không đồng nghĩa với một phân tích tốt. Chart chỉ nên được chọn sau khi business question và metric đã rõ.

### 8.2. Metric không có định nghĩa

Nếu hai người hiểu “active user” theo hai cách khác nhau, cùng một dashboard có thể dẫn đến hai kết luận khác nhau.

### 8.3. Kết luận nguyên nhân từ dữ liệu mô tả

Thấy doanh thu giảm cùng lúc với traffic giảm chưa đủ để khẳng định traffic là nguyên nhân. Câu hỏi “tại sao?” thuộc phạm vi Diagnostic Analysis.

### 8.4. Insight không dẫn tới hành động

“Doanh thu giảm” chỉ là một quan sát. Insight tốt hơn cần thêm bối cảnh về thời gian, nhóm hoặc mức độ để stakeholder biết nên kiểm tra tiếp ở đâu.

## 9. Bài tập thực hành

Chọn một metric giả định đang giảm, chẳng hạn doanh thu, số đơn hàng hoặc tỷ lệ chuyển đổi.

Thực hiện các nhiệm vụ sau:

1. Viết một business question thuộc Descriptive Analysis.
2. Xác định metric chính.
3. Nêu dữ liệu tối thiểu cần có.
4. Chọn một cách so sánh phù hợp.
5. Viết 5–7 dòng mô tả điều đã xảy ra mà **không suy đoán nguyên nhân**.
6. Viết một next action hợp lý cho stakeholder.

## 10. Artifact nên tạo

Kết thúc bài học bằng ít nhất một artifact có thể review, chẳng hạn:

- một dashboard note;
- một KPI definition;
- một SQL query phục vụ câu hỏi mô tả;
- một analysis brief;
- một executive summary ngắn.

Checklist chất lượng:

- dữ liệu đúng;
- metric rõ;
- chart dễ hiểu;
- insight bám business question;
- recommendation hoặc next action không vượt quá bằng chứng hiện có.

## 11. Câu hỏi ôn tập

### Câu 1

Câu hỏi nào phù hợp nhất với Descriptive Analysis?

A. Tại sao tỷ lệ chuyển đổi giảm?  
B. Tỷ lệ chuyển đổi đã thay đổi như thế nào trong tháng này?  
C. Tỷ lệ chuyển đổi tháng sau sẽ là bao nhiêu?  
D. Nên thay đổi chiến dịch nào để tăng tỷ lệ chuyển đổi?

**Đáp án:** B

**Giải thích:** Descriptive Analysis tập trung mô tả điều đã xảy ra, chẳng hạn mức thay đổi của một KPI trong một giai đoạn.

### Câu 2

BI Analyst nên làm gì trước khi chọn chart?

A. Xác định business question và metric cần phân tích.  
B. Chọn dashboard template đẹp nhất.  
C. Tạo càng nhiều biểu đồ càng tốt.  
D. Viết recommendation trước khi xem dữ liệu.

**Đáp án:** A

**Giải thích:** Chart chỉ có ý nghĩa khi phục vụ một business question và một metric được xác định rõ.

### Câu 3

Phát biểu nào vượt quá phạm vi của phân tích mô tả?

A. Doanh thu giảm so với kỳ trước.  
B. Mức giảm tập trung ở nhóm sản phẩm A.  
C. Doanh thu giảm vì nhóm A thay đổi chính sách giá.  
D. Xu hướng giảm bắt đầu từ tuần thứ hai.

**Đáp án:** C

**Giải thích:** Từ “vì” đưa ra kết luận nguyên nhân, nên thuộc hướng Diagnostic Analysis nếu có đủ bằng chứng.

### Câu 4

Một metric được định nghĩa không rõ ràng có rủi ro gì?

A. Dashboard chắc chắn chạy chậm hơn.  
B. SQL luôn bị lỗi cú pháp.  
C. Chart không thể hiển thị.  
D. Stakeholder có thể hiểu và diễn giải cùng một số liệu theo những cách khác nhau.

**Đáp án:** D

**Giải thích:** Định nghĩa metric không nhất quán làm giảm độ tin cậy của toàn bộ phân tích.

### Câu 5

Insight mô tả nào hữu ích nhất?

A. “KPI giảm.”  
B. “KPI giảm rõ trong tuần này và mức giảm tập trung ở nhóm khách hàng X.”  
C. “KPI chắc chắn sẽ tiếp tục giảm.”  
D. “Phải thay ngay chiến lược kinh doanh.”

**Đáp án:** B

**Giải thích:** Insight này mô tả được hướng thay đổi, thời gian và nhóm chịu ảnh hưởng mà chưa suy đoán nguyên nhân hay hành động quá mức.

## 12. Tổng kết

**Descriptive Analysis** trả lời câu hỏi **“Điều gì đã xảy ra?”**.

Đối với BI Analyst, mục tiêu không phải chỉ hiển thị số liệu mà là:

- bắt đầu từ business question;
- dùng đúng dữ liệu;
- định nghĩa metric rõ ràng;
- trình bày biến động trong bối cảnh phù hợp;
- chuyển kết quả thành insight và next action có thể sử dụng.

Một bài phân tích mô tả tốt là nền tảng để tiếp tục đặt câu hỏi sâu hơn về **nguyên nhân**, **khả năng xảy ra tiếp theo** và **hành động nên thực hiện**.
