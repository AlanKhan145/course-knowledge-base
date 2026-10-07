# Predictive Analysis — Phân tích dự đoán

**Module:** Module 03 — Types of Data Analysis — Các kiểu phân tích dữ liệu  
**Roadmap item:** 3.3  
**Loại nội dung:** Data analysis types  
**Thời lượng gợi ý:** 35–55 phút

## 1. Tóm tắt

**Predictive Analysis** — phân tích dự đoán — tập trung trả lời câu hỏi:

> **Điều gì có thể xảy ra tiếp theo?**

Trong BI, dự đoán không có nghĩa là khẳng định chắc chắn tương lai. Mục tiêu là sử dụng dữ liệu và pattern đã quan sát để đưa ra một ước lượng hợp lý về khả năng xảy ra tiếp theo.

BI Analyst cần gắn dự đoán với một business question rõ, hiểu metric đang dự đoán, kiểm tra dữ liệu đầu vào và truyền đạt mức độ không chắc chắn để stakeholder không xem prediction như một sự thật tuyệt đối.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Giải thích được **Predictive Analysis** bằng ngôn ngữ dễ hiểu.
- Chuyển một business question thành một mục tiêu dự đoán cụ thể.
- Xác định metric và dữ liệu đầu vào cần thiết cho một bài toán dự đoán ở mức BI.
- Phân biệt prediction với mô tả và chẩn đoán.
- Trình bày kết quả dự đoán cùng giả định và mức độ không chắc chắn.
- Tạo được một artifact nhỏ như forecast note, analysis brief hoặc executive summary.

## 3. Câu hỏi kinh doanh cốt lõi

Câu hỏi trung tâm là:

> **Điều gì có thể xảy ra tiếp theo?**

Ví dụ:

- Doanh thu kỳ tới có thể tăng hay giảm?
- Nhóm khách hàng nào có khả năng giảm mức độ tương tác?
- Metric hiện tại có khả năng vượt hay không đạt target?
- Nếu xu hướng hiện tại tiếp tục, điều gì có thể xảy ra trong giai đoạn tiếp theo?

Điểm khác biệt quan trọng là Predictive Analysis hướng tới **khả năng trong tương lai**, không chỉ mô tả quá khứ.

## 4. Từ business question đến mục tiêu dự đoán

Một câu hỏi dự đoán nên làm rõ:

| Thành phần | Ví dụ câu hỏi |
| --- | --- |
| Target | Cần dự đoán metric nào? |
| Horizon | Dự đoán cho giai đoạn nào? |
| Granularity | Dự đoán ở mức tổng, sản phẩm hay nhóm khách hàng? |
| Data | Dữ liệu lịch sử nào có liên quan? |
| Decision | Prediction sẽ hỗ trợ quyết định nào? |

Nếu không xác định rõ những yếu tố này, kết quả dự đoán có thể đúng về mặt kỹ thuật nhưng không hữu ích cho stakeholder.

## 5. Quy trình thực hiện

```text
Business question
    ↓
Xác định target
    ↓
Chọn dữ liệu lịch sử liên quan
    ↓
Kiểm tra chất lượng dữ liệu
    ↓
Tạo prediction / forecast phù hợp
    ↓
Đánh giá mức độ hợp lý
    ↓
Trình bày prediction + uncertainty
    ↓
Gắn với quyết định
```

### 5.1. Xác định target

Target là thứ cần dự đoán.

Ví dụ:

> Doanh thu tháng tới.

Một target tốt cần đủ cụ thể để stakeholder hiểu kết quả đang nói về điều gì.

### 5.2. Xác định dữ liệu liên quan

Dữ liệu đầu vào có thể bao gồm:

- lịch sử của chính metric;
- phân khúc;
- các biến quan sát liên quan;
- bối cảnh thời gian.

Không phải càng nhiều dữ liệu càng tốt. Dữ liệu chỉ nên được dùng khi có ý nghĩa đối với business question.

### 5.3. Kiểm tra data quality

Prediction phụ thuộc mạnh vào dữ liệu đầu vào. Cần xem:

- dữ liệu có đủ dài và đủ mới không;
- metric có thay đổi định nghĩa không;
- có giai đoạn thiếu dữ liệu không;
- có biến động bất thường cần giải thích không.

### 5.4. Đánh giá kết quả

Prediction không nên được trình bày chỉ bằng một con số.

BI Analyst cần đặt nó vào bối cảnh:

- so với actual gần nhất;
- so với target;
- so với xu hướng trước đó;
- cùng các giả định quan trọng.

### 5.5. Truyền đạt uncertainty

Nên dùng ngôn ngữ phù hợp như:

- “có khả năng”;
- “ước lượng”;
- “nếu xu hướng hiện tại tiếp tục”;
- “prediction này phụ thuộc vào giả định...”.

Tránh biến prediction thành một tuyên bố chắc chắn.

## 6. Ví dụ minh họa

Giả sử một metric đã giảm trong vài kỳ gần đây.

Descriptive Analysis hỏi:

> Metric đã giảm như thế nào?

Diagnostic Analysis hỏi:

> Yếu tố nào liên quan tới mức giảm?

Predictive Analysis hỏi:

> Nếu pattern hiện tại tiếp tục, metric có thể thay đổi thế nào trong kỳ tiếp theo?

Kết quả dự đoán chỉ có giá trị khi stakeholder hiểu được:

- target đang được dự đoán;
- phạm vi thời gian;
- dữ liệu được dùng;
- mức độ không chắc chắn;
- quyết định nào có thể dựa vào kết quả đó.

## 7. Biến prediction thành insight

Một predictive insight tốt không nên chỉ viết:

> Metric tháng tới là X.

Thay vào đó, có thể trình bày:

> Dựa trên xu hướng hiện tại, metric có khả năng tiếp tục giảm trong kỳ tới. Kết quả này nên được theo dõi cùng dữ liệu thực tế mới nhất trước khi ra quyết định lớn.

Cách trình bày này giúp stakeholder hiểu prediction là một công cụ hỗ trợ quyết định, không phải lời khẳng định chắc chắn.

## 8. Lỗi thường gặp

### 8.1. Nhầm prediction với certainty

Mọi dự đoán đều có mức độ không chắc chắn.

### 8.2. Không xác định rõ target

Nếu “dự đoán doanh số” nhưng không nói rõ thời gian, phạm vi và đơn vị phân tích, kết quả khó sử dụng.

### 8.3. Dùng dữ liệu không phù hợp

Dữ liệu lịch sử không nhất quán hoặc quá cũ có thể làm prediction thiếu giá trị.

### 8.4. Không gắn prediction với quyết định

Một con số dự đoán không giúp ích nhiều nếu không rõ stakeholder sẽ dùng nó để làm gì.

### 8.5. Bỏ qua thay đổi bối cảnh

Prediction dựa trên dữ liệu lịch sử có thể kém đáng tin nếu bối cảnh thay đổi mạnh.

## 9. Bài tập thực hành

Chọn một metric giả định đang giảm.

Thực hiện:

1. Viết câu hỏi Descriptive Analysis cho metric.
2. Viết câu hỏi Diagnostic Analysis.
3. Viết câu hỏi Predictive Analysis.
4. Xác định target cần dự đoán.
5. Xác định phạm vi thời gian.
6. Nêu dữ liệu lịch sử tối thiểu cần dùng.
7. Viết 5–7 dòng giải thích prediction cho stakeholder, trong đó phải có một câu nêu rõ uncertainty.

## 10. Artifact nên tạo

Có thể tạo:

- một forecast note;
- một KPI projection summary;
- một analysis brief;
- một dashboard note có phần dự đoán;
- một executive summary giải thích prediction và giả định.

Checklist chất lượng:

- target rõ;
- dữ liệu đúng và đủ mới;
- phạm vi dự đoán rõ;
- prediction không được diễn đạt như sự thật chắc chắn;
- insight gắn với business decision;
- có ghi nhận uncertainty hoặc giả định quan trọng.

## 11. Câu hỏi ôn tập

### Câu 1

Predictive Analysis chủ yếu trả lời câu hỏi nào?

A. Tại sao điều đó xảy ra?  
B. Điều gì đã xảy ra?  
C. Điều gì có thể xảy ra tiếp theo?  
D. Nên làm gì tiếp theo?

**Đáp án:** C

**Giải thích:** Phân tích dự đoán hướng tới ước lượng các khả năng trong tương lai dựa trên dữ liệu hiện có.

### Câu 2

Điều nào cần được xác định rõ trước khi tạo prediction?

A. Chỉ màu sắc dashboard.  
B. Target và phạm vi thời gian cần dự đoán.  
C. Số lượng chart tối đa.  
D. Recommendation cuối cùng trước khi xem dữ liệu.

**Đáp án:** B

**Giải thích:** Nếu target và thời gian không rõ, prediction khó được hiểu và sử dụng đúng.

### Câu 3

Cách diễn đạt nào phù hợp nhất?

A. “Metric chắc chắn sẽ giảm.”  
B. “Không cần xem dữ liệu mới vì đã có prediction.”  
C. “Prediction luôn chính xác hơn dữ liệu thực tế.”  
D. “Dựa trên xu hướng hiện tại, metric có khả năng giảm trong kỳ tới.”

**Đáp án:** D

**Giải thích:** Cách diễn đạt này phản ánh đúng tính không chắc chắn của prediction.

### Câu 4

Tại sao data quality quan trọng trong Predictive Analysis?

A. Vì prediction phụ thuộc vào dữ liệu đầu vào được dùng để nhận diện pattern và tạo ước lượng.  
B. Vì dữ liệu sạch luôn làm dashboard đẹp hơn.  
C. Vì prediction không cần business question.  
D. Vì dữ liệu quyết định màu chart.

**Đáp án:** A

**Giải thích:** Dữ liệu sai, thiếu hoặc không nhất quán có thể làm kết quả dự đoán thiếu giá trị.

### Câu 5

Một prediction hữu ích cho BI nên kết thúc bằng điều gì?

A. Một con số không có giải thích.  
B. Một chart không có metric.  
C. Bối cảnh, uncertainty và ý nghĩa đối với quyết định.  
D. Một kết luận chắc chắn về tương lai.

**Đáp án:** C

**Giải thích:** Stakeholder cần biết prediction có ý nghĩa gì, đáng tin ở mức nào và nó hỗ trợ quyết định nào.

## 12. Tổng kết

**Predictive Analysis** trả lời câu hỏi **“Điều gì có thể xảy ra tiếp theo?”**.

Trong BI, một bài dự đoán tốt cần:

- xuất phát từ business question;
- xác định target và phạm vi thời gian rõ ràng;
- sử dụng dữ liệu phù hợp;
- kiểm tra data quality;
- trình bày kết quả cùng uncertainty;
- gắn prediction với quyết định thực tế.

Giá trị của Predictive Analysis không nằm ở việc “đoán đúng tương lai” tuyệt đối, mà ở việc giúp stakeholder chuẩn bị tốt hơn cho những khả năng có thể xảy ra.
