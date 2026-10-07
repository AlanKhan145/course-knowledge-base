# Module 03 — Types of Data Analysis — Các kiểu phân tích dữ liệu

Module này hệ thống hóa bốn kiểu phân tích dữ liệu thường gặp trong công việc BI Analyst:

1. **Descriptive Analysis** — Điều gì đã xảy ra?
2. **Diagnostic Analysis** — Tại sao điều đó xảy ra?
3. **Predictive Analysis** — Điều gì có thể xảy ra tiếp theo?
4. **Prescriptive Analysis** — Nên làm gì tiếp theo?

Mục tiêu của module không phải chỉ ghi nhớ bốn định nghĩa, mà là biết **chọn đúng kiểu phân tích cho đúng business question** và chuyển dữ liệu thành insight hỗ trợ quyết định.

## 1. Mục tiêu học tập của module

Sau khi hoàn thành module, người học có thể:

- giải thích được bốn kiểu phân tích dữ liệu bằng ngôn ngữ dễ hiểu;
- phân biệt câu hỏi mô tả, chẩn đoán, dự đoán và khuyến nghị;
- bắt đầu một bài phân tích từ business question thay vì từ chart hoặc tool;
- xác định metric, dữ liệu và bối cảnh cần thiết;
- chuyển kết quả phân tích thành insight, recommendation hoặc next action;
- tạo được artifact có thể đưa vào dashboard, report hoặc portfolio BI Analyst.

## 2. Bản đồ bốn kiểu phân tích

| Kiểu phân tích | Câu hỏi cốt lõi | Kết quả mong muốn |
| --- | --- | --- |
| **Descriptive Analysis** | Điều gì đã xảy ra? | Mô tả trạng thái, xu hướng hoặc biến động |
| **Diagnostic Analysis** | Tại sao điều đó xảy ra? | Thu hẹp các yếu tố có thể giải thích biến động |
| **Predictive Analysis** | Điều gì có thể xảy ra tiếp theo? | Ước lượng khả năng hoặc xu hướng tương lai |
| **Prescriptive Analysis** | Nên làm gì tiếp theo? | Recommendation, risk và next action |

## 3. Một bài toán xuyên suốt

Giả sử một KPI đang giảm.

Bốn kiểu phân tích sẽ tiếp cận cùng vấn đề theo bốn câu hỏi khác nhau:

### 3.1. Descriptive Analysis

> KPI đã giảm như thế nào?

Tập trung vào:

- mức giảm;
- thời điểm;
- phân khúc;
- xu hướng.

### 3.2. Diagnostic Analysis

> Yếu tố nào có thể giải thích cho mức giảm?

Tập trung vào:

- breakdown;
- giả thuyết;
- so sánh nhóm;
- evidence.

### 3.3. Predictive Analysis

> Nếu pattern hiện tại tiếp tục, KPI có thể thay đổi thế nào?

Tập trung vào:

- target;
- dữ liệu lịch sử;
- phạm vi thời gian;
- uncertainty.

### 3.4. Prescriptive Analysis

> Stakeholder nên làm gì tiếp theo?

Tập trung vào:

- recommendation;
- priority;
- risk;
- follow-up metric.

## 4. Workflow tư duy cho BI Analyst

```text
Business question
    ↓
Dữ liệu + metric
    ↓
Điều gì đã xảy ra?
    ↓
Tại sao?
    ↓
Điều gì có thể xảy ra tiếp?
    ↓
Nên làm gì?
    ↓
Theo dõi kết quả
```

Không phải mọi bài toán đều bắt buộc đi qua toàn bộ chuỗi. Tuy nhiên, workflow này giúp tránh một lỗi phổ biến: đưa ra recommendation khi chưa hiểu đủ dữ liệu.

## 5. Nguyên tắc chung của cả module

### 5.1. Bắt đầu từ business question

Không bắt đầu bằng:

> “Tôi nên dùng chart nào?”

Hãy bắt đầu bằng:

> “Stakeholder cần quyết định điều gì?”

Chart, query và tool chỉ là phương tiện.

### 5.2. Kiểm tra data quality

Trước khi kết luận, cần kiểm tra:

- dữ liệu có đúng không;
- có đủ mới không;
- có đủ chi tiết không;
- metric có được định nghĩa rõ không.

### 5.3. Không vượt quá bằng chứng

Dữ liệu mô tả chưa đủ để khẳng định nguyên nhân.

Một pattern lịch sử cũng không đảm bảo tương lai sẽ lặp lại.

Recommendation phải tương xứng với mức độ chắc chắn của insight.

### 5.4. Kết thúc bằng hành động có ý nghĩa

Một bài BI tốt không chỉ kết thúc ở chart.

Kết quả cuối nên giúp stakeholder biết:

- điều gì đáng chú ý;
- điều gì cần kiểm tra tiếp;
- rủi ro nào cần biết;
- hành động nào nên cân nhắc.

## 6. Cấu trúc các bài trong module

| Bài | Nội dung |
| --- | --- |
| `001-Descriptive-Analysis.md` | Phân tích mô tả |
| `002-Diagnostic-Analysis.md` | Phân tích chẩn đoán |
| `003-Predictive-Analysis.md` | Phân tích dự đoán |
| `004-Prescriptive-Analysis.md` | Phân tích khuyến nghị |

Mỗi bài được thiết kế để đọc độc lập, đồng thời dùng chung một logic: **business question → data → metric → insight → action**.

## 7. Bài tập tổng hợp

Chọn một metric giả định đang giảm.

Viết bốn câu hỏi:

1. **Descriptive:** Điều gì đã xảy ra?
2. **Diagnostic:** Tại sao điều đó xảy ra?
3. **Predictive:** Điều gì có thể xảy ra tiếp theo?
4. **Prescriptive:** Nên làm gì tiếp theo?

Sau đó tạo một analysis brief ngắn gồm:

- business question;
- metric;
- dữ liệu cần dùng;
- insight mô tả;
- giả thuyết chẩn đoán;
- prediction;
- recommendation;
- risk;
- next action.

## 8. Artifact cuối module

Artifact đề xuất:

> **Analysis Type Decision Guide with Business Examples**

Artifact nên giúp người đọc nhìn một business problem và quyết định nhanh:

- đang cần mô tả;
- đang cần tìm nguyên nhân;
- đang cần dự đoán;
- hay đang cần recommendation.

Có thể trình bày dưới dạng:

- one-page guide;
- dashboard note;
- spreadsheet;
- BI report;
- portfolio case study.

## 9. Checklist hoàn thành module

- [ ] Phân biệt được 4 kiểu phân tích.
- [ ] Viết được đúng 4 loại business question.
- [ ] Xác định được metric và dữ liệu cho từng loại.
- [ ] Không nhầm correlation với cause.
- [ ] Không trình bày prediction như một sự thật chắc chắn.
- [ ] Recommendation có evidence hỗ trợ.
- [ ] Biết nêu risk hoặc giới hạn.
- [ ] Có next action hoặc follow-up metric.
- [ ] Tạo được ít nhất một artifact có thể review.

## 10. Câu hỏi ôn tập

### Câu 1

Một stakeholder hỏi: “Doanh thu tuần này giảm bao nhiêu so với tuần trước?” Đây là loại phân tích nào?

A. Descriptive Analysis  
B. Diagnostic Analysis  
C. Predictive Analysis  
D. Prescriptive Analysis

**Đáp án:** A

**Giải thích:** Câu hỏi đang mô tả điều đã xảy ra, chưa đi tìm nguyên nhân hay dự đoán tương lai.

### Câu 2

Câu hỏi “Tại sao tỷ lệ chuyển đổi giảm ở tuần này?” thuộc loại nào?

A. Predictive Analysis  
B. Diagnostic Analysis  
C. Prescriptive Analysis  
D. Descriptive Analysis

**Đáp án:** B

**Giải thích:** Từ “tại sao” cho thấy mục tiêu là tìm yếu tố giải thích cho biến động đã quan sát.

### Câu 3

Câu hỏi “Metric có thể tiếp tục giảm trong tháng tới không?” thuộc loại nào?

A. Diagnostic Analysis  
B. Prescriptive Analysis  
C. Predictive Analysis  
D. Descriptive Analysis

**Đáp án:** C

**Giải thích:** Câu hỏi hướng tới khả năng trong tương lai.

### Câu 4

Câu hỏi “Với kết quả hiện tại, đội ngũ nên ưu tiên hành động nào?” thuộc loại nào?

A. Descriptive Analysis  
B. Diagnostic Analysis  
C. Predictive Analysis  
D. Prescriptive Analysis

**Đáp án:** D

**Giải thích:** Câu hỏi yêu cầu chuyển insight thành recommendation hoặc next action.

### Câu 5

Nguyên tắc nào đúng cho cả bốn kiểu phân tích?

A. Chọn chart trước rồi mới tìm business question.  
B. Bắt đầu từ business question, kiểm tra dữ liệu và định nghĩa metric trước khi kết luận.  
C. Luôn phải dùng mô hình dự đoán.  
D. Mọi insight đều phải kết luận nguyên nhân.

**Đáp án:** B

**Giải thích:** Cả bốn kiểu phân tích đều cần một câu hỏi kinh doanh rõ, dữ liệu phù hợp và metric được định nghĩa trước khi tạo insight.

## 11. Tổng kết

Bốn kiểu phân tích có thể được ghi nhớ bằng bốn câu hỏi:

> **Descriptive:** Điều gì đã xảy ra?  
> **Diagnostic:** Tại sao điều đó xảy ra?  
> **Predictive:** Điều gì có thể xảy ra tiếp theo?  
> **Prescriptive:** Nên làm gì tiếp theo?

Đối với BI Analyst, giá trị của module nằm ở khả năng chọn đúng câu hỏi, dùng đúng dữ liệu và biến kết quả phân tích thành một quyết định rõ ràng hơn.
