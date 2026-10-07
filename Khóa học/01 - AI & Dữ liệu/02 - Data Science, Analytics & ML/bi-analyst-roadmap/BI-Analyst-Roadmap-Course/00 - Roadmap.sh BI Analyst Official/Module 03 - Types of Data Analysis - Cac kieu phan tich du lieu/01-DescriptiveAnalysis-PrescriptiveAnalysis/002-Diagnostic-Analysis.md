# Diagnostic Analysis — Phân tích chẩn đoán

**Module:** Module 03 — Types of Data Analysis — Các kiểu phân tích dữ liệu  
**Roadmap item:** 3.2  
**Loại nội dung:** Data analysis types  
**Thời lượng gợi ý:** 35–55 phút

## 1. Tóm tắt

**Diagnostic Analysis** — phân tích chẩn đoán — tập trung trả lời câu hỏi:

> **Tại sao điều đó xảy ra?**

Nếu Descriptive Analysis cho biết một KPI đã thay đổi, Diagnostic Analysis đi sâu hơn để tìm các yếu tố có thể giải thích cho biến động đó.

Trong BI, phân tích chẩn đoán cần được gắn với một business question cụ thể. BI Analyst phải kiểm tra dữ liệu, định nghĩa metric, bối cảnh và các phân khúc liên quan trước khi đưa ra kết luận.

Mục tiêu không phải là tìm một lý do nghe có vẻ hợp lý, mà là thu hẹp vấn đề bằng dữ liệu và chỉ đưa ra kết luận ở mức bằng chứng cho phép.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Giải thích được **Diagnostic Analysis** bằng ngôn ngữ dễ hiểu cho stakeholder.
- Chuyển một biến động KPI thành tập câu hỏi “tại sao?” có thể kiểm tra bằng dữ liệu.
- Phân tích vấn đề theo thời gian, nhóm hoặc chiều dữ liệu phù hợp.
- Phân biệt giữa quan sát, giả thuyết và kết luận.
- Tạo được một artifact như SQL query, dashboard note, analysis brief hoặc executive summary.

## 3. Câu hỏi kinh doanh cốt lõi

Câu hỏi trung tâm là:

> **Tại sao điều đó xảy ra?**

Ví dụ, nếu Descriptive Analysis phát hiện doanh thu giảm, Diagnostic Analysis có thể đặt các câu hỏi như:

- Nhóm sản phẩm nào đóng góp nhiều nhất vào mức giảm?
- Mức giảm đến từ số lượng đơn hàng, giá trị đơn hàng hay cả hai?
- Biến động xảy ra ở tất cả khu vực hay chỉ một số khu vực?
- Thời điểm bắt đầu giảm có trùng với một thay đổi đáng chú ý trong dữ liệu hay không?

Những câu hỏi này giúp chia một vấn đề lớn thành các giả thuyết nhỏ hơn có thể kiểm tra.

## 4. Từ triệu chứng đến giả thuyết

Một KPI giảm chỉ là **triệu chứng**.

Ví dụ:

> Tỷ lệ chuyển đổi giảm.

Từ triệu chứng này, BI Analyst có thể đặt ra nhiều giả thuyết:

- một kênh có hiệu suất giảm;
- một nhóm khách hàng có hành vi khác trước;
- một giai đoạn trong funnel suy giảm;
- dữ liệu đầu vào có vấn đề.

Giả thuyết không phải kết luận. Mỗi giả thuyết cần được kiểm tra bằng dữ liệu phù hợp.

## 5. Quy trình thực hiện

```text
Xác nhận điều đã xảy ra
    ↓
Xác định metric cần giải thích
    ↓
Tạo các giả thuyết
    ↓
Phân rã dữ liệu theo chiều phù hợp
    ↓
So sánh các nhóm
    ↓
Loại bỏ giả thuyết yếu
    ↓
Tóm tắt yếu tố có bằng chứng mạnh nhất
```

### 5.1. Xác nhận metric và phạm vi

Trước khi tìm nguyên nhân, cần chắc rằng biến động thực sự tồn tại và không đến từ:

- sai phạm vi thời gian;
- định nghĩa metric thay đổi;
- dữ liệu thiếu;
- lỗi cập nhật dữ liệu;
- khác biệt cách lọc.

### 5.2. Tạo giả thuyết

Giả thuyết nên được viết theo cách có thể kiểm tra.

Ví dụ chưa tốt:

> Có lẽ khách hàng không thích sản phẩm nữa.

Ví dụ tốt hơn:

> Mức giảm doanh thu có tập trung ở nhóm khách hàng quay lại hay không?

Câu thứ hai có thể được kiểm tra bằng dữ liệu.

### 5.3. Phân rã vấn đề

Một metric tổng có thể được tách theo:

- thời gian;
- sản phẩm;
- khu vực;
- kênh;
- nhóm khách hàng;
- bước trong funnel.

Mục tiêu là tìm xem mức thay đổi tổng thể đến từ đâu.

### 5.4. So sánh và kiểm tra giả thuyết

Mỗi giả thuyết cần được so sánh với dữ liệu.

Ví dụ:

> Nếu doanh thu giảm chủ yếu ở một khu vực trong khi các khu vực khác ổn định, khu vực đó trở thành hướng điều tra ưu tiên.

### 5.5. Viết kết luận đúng mức

Không nên viết:

> Đây chắc chắn là nguyên nhân duy nhất.

nếu dữ liệu chỉ cho thấy một mối liên hệ.

Cách viết an toàn hơn:

> Phần lớn mức giảm quan sát được tập trung ở nhóm X, vì vậy đây là yếu tố cần ưu tiên kiểm tra sâu hơn.

## 6. Ví dụ minh họa

Giả sử metric “số đơn hàng” giảm.

Descriptive Analysis cho biết:

> Số đơn hàng tuần này thấp hơn tuần trước.

Diagnostic Analysis tiếp tục hỏi:

> Mức giảm đến từ nhóm khách hàng nào, kênh nào hoặc sản phẩm nào?

Sau khi breakdown dữ liệu, BI Analyst có thể thấy:

> Phần lớn mức giảm tập trung ở một kênh cụ thể.

Kết luận này chưa tự động chứng minh nguyên nhân cuối cùng, nhưng giúp stakeholder biết nên điều tra ở đâu trước.

## 7. Chuyển kết quả thành insight

Một diagnostic insight tốt nên có cấu trúc:

> **Biến động chính + phân khúc đóng góp + bằng chứng so sánh + mức độ chắc chắn**

Ví dụ:

> Mức giảm của metric tập trung chủ yếu ở nhóm X, trong khi các nhóm còn lại tương đối ổn định. Vì vậy, nhóm X là khu vực nên được ưu tiên kiểm tra tiếp.

Cách viết này rõ ràng hơn việc đưa ra một nguyên nhân tuyệt đối khi chưa có đủ bằng chứng.

## 8. Lỗi thường gặp

### 8.1. Nhầm tương quan với nguyên nhân

Hai biến cùng thay đổi không có nghĩa một biến chắc chắn gây ra biến kia.

### 8.2. Chỉ tìm một nguyên nhân

Một KPI có thể bị ảnh hưởng bởi nhiều yếu tố. Diagnostic Analysis nên bắt đầu bằng nhiều giả thuyết rồi dần thu hẹp.

### 8.3. Bỏ qua data quality

Nếu dữ liệu thiếu hoặc metric thay đổi định nghĩa, toàn bộ quá trình chẩn đoán có thể đi sai hướng.

### 8.4. Chia dữ liệu quá nhiều chiều

Breakdown quá sâu có thể tạo ra nhiều nhóm nhỏ và khiến người phân tích tập trung vào nhiễu thay vì pattern quan trọng.

## 9. Bài tập thực hành

Chọn một metric giả định đang giảm.

Thực hiện:

1. Viết câu hỏi Descriptive Analysis xác nhận điều đã xảy ra.
2. Viết ít nhất ba câu hỏi Diagnostic Analysis.
3. Với mỗi câu hỏi, nêu dữ liệu cần dùng.
4. Chọn một chiều phân tích để breakdown.
5. Viết 5–7 dòng trình bày giả thuyết nào được dữ liệu ủng hộ nhiều nhất.
6. Nêu một giới hạn khiến bạn chưa thể khẳng định nguyên nhân tuyệt đối.

## 10. Artifact nên tạo

Có thể tạo:

- một SQL query phân rã KPI theo nhóm;
- một dashboard note về nhóm đóng góp chính;
- một analysis brief gồm triệu chứng, giả thuyết và bằng chứng;
- một executive summary ngắn cho stakeholder;
- một decision guide phân biệt mô tả và chẩn đoán.

Checklist chất lượng:

- business question rõ;
- metric được định nghĩa;
- dữ liệu đủ đúng và đủ mới;
- giả thuyết có thể kiểm tra;
- insight phân biệt rõ bằng chứng và suy luận;
- next action cụ thể.

## 11. Câu hỏi ôn tập

### Câu 1

Diagnostic Analysis chủ yếu trả lời câu hỏi nào?

A. Điều gì đã xảy ra?  
B. Tại sao điều đó xảy ra?  
C. Điều gì có thể xảy ra tiếp theo?  
D. Nên làm gì tiếp theo?

**Đáp án:** B

**Giải thích:** Phân tích chẩn đoán tập trung tìm các yếu tố có thể giải thích cho một biến động đã được quan sát.

### Câu 2

Khi một KPI giảm, bước nào phù hợp nhất trước khi đưa ra nguyên nhân?

A. Xác nhận metric, phạm vi và chất lượng dữ liệu.  
B. Chọn ngay một nguyên nhân hợp lý nhất.  
C. Viết recommendation trước.  
D. Bỏ qua dữ liệu và hỏi ý kiến stakeholder.

**Đáp án:** A

**Giải thích:** Nếu metric hoặc dữ liệu sai, mọi kết luận chẩn đoán phía sau đều có thể sai theo.

### Câu 3

Phát biểu nào thể hiện đúng vai trò của giả thuyết?

A. Giả thuyết là kết luận cuối cùng.  
B. Giả thuyết không cần dữ liệu để kiểm tra.  
C. Giả thuyết là một khả năng cần được kiểm tra bằng dữ liệu.  
D. Chỉ nên có một giả thuyết cho mỗi KPI.

**Đáp án:** C

**Giải thích:** Diagnostic Analysis dùng giả thuyết để tổ chức quá trình điều tra, sau đó dùng dữ liệu để ủng hộ hoặc loại bỏ từng giả thuyết.

### Câu 4

Tại sao cần phân biệt tương quan với nguyên nhân?

A. Vì tương quan luôn sai.  
B. Vì dashboard không thể hiển thị tương quan.  
C. Vì nguyên nhân chỉ có thể xác định bằng chart.  
D. Vì hai biến cùng thay đổi chưa đủ để khẳng định biến này gây ra biến kia.

**Đáp án:** D

**Giải thích:** Sự đồng biến chỉ là tín hiệu cần điều tra thêm, không tự động chứng minh quan hệ nhân quả.

### Câu 5

Kết luận nào phù hợp nhất khi dữ liệu chỉ cho thấy mức giảm tập trung ở nhóm X?

A. “Nhóm X chắc chắn là nguyên nhân duy nhất.”  
B. “Nhóm X là khu vực đóng góp lớn vào mức giảm và nên được ưu tiên kiểm tra sâu hơn.”  
C. “Không cần kiểm tra nhóm khác.”  
D. “Metric sẽ tiếp tục giảm trong tháng tới.”

**Đáp án:** B

**Giải thích:** Cách viết này phản ánh đúng bằng chứng hiện có mà không khẳng định quá mức.

## 12. Tổng kết

**Diagnostic Analysis** trả lời câu hỏi **“Tại sao điều đó xảy ra?”**.

Một BI Analyst cần:

- bắt đầu từ biến động đã được xác nhận;
- kiểm tra data quality và định nghĩa metric;
- xây dựng các giả thuyết có thể kiểm tra;
- phân rã dữ liệu theo chiều phù hợp;
- phân biệt quan sát, giả thuyết và kết luận;
- chuyển kết quả thành insight và next action rõ ràng.

Mục tiêu của phân tích chẩn đoán không phải tìm một lời giải thích thật nhanh, mà là dùng dữ liệu để thu hẹp vấn đề một cách có hệ thống.
