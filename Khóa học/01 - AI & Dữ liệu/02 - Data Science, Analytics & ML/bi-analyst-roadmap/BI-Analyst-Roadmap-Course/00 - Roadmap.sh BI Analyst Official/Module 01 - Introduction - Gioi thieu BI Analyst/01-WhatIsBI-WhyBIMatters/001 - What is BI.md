# 001 - What is BI?

**Module:** Module 01 - Introduction - Giới thiệu BI Analyst  
**Roadmap item:** 1.1  
**Loại nội dung:** BI foundations  
**Thời lượng gợi ý:** 35–55 phút

---

## 1. Tóm tắt

**Business Intelligence (BI)** là cách doanh nghiệp sử dụng dữ liệu để hiểu tình hình đang diễn ra, theo dõi hiệu suất và hỗ trợ ra quyết định.

Một hệ thống BI tốt không bắt đầu bằng việc chọn biểu đồ đẹp hay mở một công cụ dashboard. Nó bắt đầu bằng **business question**: doanh nghiệp đang cần quyết định điều gì? Từ câu hỏi đó, BI Analyst xác định dữ liệu cần dùng, kiểm tra chất lượng dữ liệu, định nghĩa metric, phân tích kết quả và truyền đạt insight theo cách stakeholder có thể hành động.

Có thể hình dung BI theo chuỗi:

```text
Business question
        ↓
      Data
        ↓
   Metric / KPI
        ↓
    Analysis
        ↓
 Dashboard / Report
        ↓
     Insight
        ↓
Decision / Action
```

Điểm quan trọng nhất: **dashboard không phải đích đến cuối cùng của BI; quyết định tốt hơn mới là đích đến.**

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Giải thích được Business Intelligence bằng ngôn ngữ dễ hiểu cho stakeholder không chuyên về dữ liệu.
- Phân biệt được `data`, `metric`, `KPI`, `insight` và `action` trong một bài toán BI cơ bản.
- Mô tả được luồng từ business question đến quyết định kinh doanh.
- Nhận diện được vai trò của BI Analyst trong quá trình biến dữ liệu thành thông tin có ích.
- Xây dựng được một BI analysis brief ngắn cho một công ty hoặc sản phẩm quen thuộc.

---

## 3. Business Intelligence là gì?

Business Intelligence có thể hiểu đơn giản là **quá trình biến dữ liệu kinh doanh thành thông tin hữu ích để hỗ trợ quyết định**.

Doanh nghiệp liên tục tạo ra dữ liệu từ nhiều hoạt động:

- đơn hàng;
- khách hàng;
- sản phẩm;
- marketing;
- tài chính;
- vận hành;
- chăm sóc khách hàng;
- website hoặc ứng dụng.

Dữ liệu thô tự nó chưa trả lời được câu hỏi kinh doanh. Một bảng có hàng triệu dòng giao dịch không tự nói cho quản lý biết doanh thu đang tăng vì đâu, nhóm khách hàng nào đang rời bỏ sản phẩm, hay chiến dịch marketing nào đang hoạt động hiệu quả.

BI tạo ra cầu nối giữa **dữ liệu** và **quyết định**.

Ví dụ, một quản lý bán hàng có thể hỏi:

> Doanh thu tháng này giảm ở đâu và nguyên nhân nào cần ưu tiên xử lý?

Đây là một business question tốt hơn câu hỏi:

> Hãy làm cho tôi một dashboard doanh thu.

Câu hỏi đầu tiên chỉ ra quyết định cần hỗ trợ. Câu hỏi thứ hai mới chỉ nói đến hình thức đầu ra.

---

## 4. Từ dữ liệu đến quyết định

### 4.1. Data và business context

`Data` là dữ liệu được ghi nhận từ hoạt động thực tế. Trong BI, một con số chỉ có ý nghĩa khi đặt trong đúng bối cảnh.

Ví dụ:

> Doanh thu = 2 tỷ đồng.

Con số này chưa đủ để đánh giá tốt hay xấu. BI Analyst cần biết thêm:

- khoảng thời gian nào;
- thị trường hoặc khu vực nào;
- sản phẩm nào;
- so với mục tiêu hay kỳ trước ra sao;
- dữ liệu đã đầy đủ chưa;
- có thay đổi về giá, khuyến mãi hoặc cách ghi nhận không.

Vì vậy, trước khi phân tích, cần kiểm tra ít nhất ba yếu tố: **đúng dữ liệu, đúng định nghĩa và đúng bối cảnh**.

### 4.2. Metric và KPI

`Metric` là đại lượng dùng để đo một khía cạnh của hoạt động kinh doanh, chẳng hạn doanh thu, số đơn hàng, tỷ lệ chuyển đổi hoặc số khách hàng quay lại.

`KPI` là metric được lựa chọn vì nó đặc biệt quan trọng đối với một mục tiêu cụ thể.

Ví dụ:

| Mục tiêu | Metric có thể theo dõi | KPI có thể ưu tiên |
| --- | --- | --- |
| Tăng doanh thu | Doanh thu, số đơn, giá trị đơn trung bình | Doanh thu |
| Tăng hiệu quả marketing | Lượt truy cập, lead, conversion rate | Conversion rate |
| Cải thiện giữ chân | Active users, repeat users, churn | Retention rate hoặc churn |
| Cải thiện vận hành | Số đơn, thời gian xử lý, tỷ lệ lỗi | Thời gian xử lý hoặc tỷ lệ lỗi |

Không phải metric nào cũng là KPI. KPI phải gắn với **mục tiêu và quyết định**.

### 4.3. Analysis và insight

`Analysis` là quá trình xem xét dữ liệu để tìm ra mô hình, khác biệt, xu hướng hoặc nguyên nhân có khả năng giải thích kết quả.

`Insight` không đơn giản là lặp lại một con số.

Ví dụ chưa đủ sâu:

> Doanh thu miền Nam giảm 12%.

Một insight hữu ích hơn cần chỉ ra điều gì đáng chú ý và tại sao stakeholder nên quan tâm:

> Doanh thu miền Nam giảm chủ yếu ở nhóm sản phẩm A, trong khi số đơn không giảm tương ứng; cần kiểm tra thay đổi về giá trị đơn trung bình và cơ cấu sản phẩm trước khi kết luận do nhu cầu suy yếu.

Ví dụ trên chỉ minh họa cách lập luận. Khi làm việc thực tế, kết luận phải dựa trên dữ liệu đã được kiểm chứng.

### 4.4. Recommendation và action

BI tạo giá trị khi insight dẫn tới hành động có thể cân nhắc.

Một recommendation tốt thường trả lời:

- Nên làm gì?
- Vì sao?
- Ưu tiên ở đâu?
- Cần kiểm tra thêm điều gì?
- Rủi ro của kết luận là gì?

BI Analyst không phải lúc nào cũng là người ra quyết định cuối cùng. Tuy nhiên, analyst cần trình bày dữ liệu theo cách giúp stakeholder **ra quyết định rõ hơn, nhanh hơn và có căn cứ hơn**.

---

## 5. Vai trò của BI trong doanh nghiệp

BI thường hỗ trợ doanh nghiệp theo ba hướng chính.

**Theo dõi:** biết hoạt động hiện tại đang diễn ra như thế nào thông qua dashboard, report và KPI.

**Giải thích:** xác định phần nào đang thay đổi và đâu là yếu tố đáng chú ý để điều tra sâu hơn.

**Hỗ trợ quyết định:** chuyển kết quả phân tích thành thông tin có thể dùng để ưu tiên hành động.

Một dashboard có thể cho biết conversion rate giảm. Một phân tích BI tốt phải tiến thêm một bước: conversion giảm ở kênh nào, giai đoạn nào của funnel, nhóm khách hàng nào, từ thời điểm nào và điều đó có ý nghĩa gì với quyết định tiếp theo.

---

## 6. BI Analyst làm gì?

BI Analyst đứng giữa dữ liệu và nhu cầu kinh doanh.

Một workflow cơ bản có thể gồm:

```mermaid
flowchart LR
    A[Business Question] --> B[Data]
    B --> C[Data Quality Check]
    C --> D[Metric Definition]
    D --> E[Analysis]
    E --> F[Dashboard / Report]
    F --> G[Insight]
    G --> H[Recommendation / Action]
```

Sơ đồ này nhấn mạnh rằng dashboard chỉ là một bước trong quy trình. Trước dashboard phải có câu hỏi, dữ liệu và metric; sau dashboard phải có insight và hành động.

Trong thực tế, BI Analyst có thể làm các công việc như:

- làm rõ yêu cầu với stakeholder;
- truy vấn hoặc tổng hợp dữ liệu;
- kiểm tra chất lượng dữ liệu;
- thống nhất định nghĩa metric;
- thiết kế dashboard hoặc report;
- phân tích biến động;
- viết executive summary;
- đưa ra recommendation hoặc next action;
- ghi chú limitation và rủi ro của kết luận.

---

## 7. Ví dụ minh họa: một bài toán BI

Giả sử một cửa hàng thương mại điện tử nhận thấy kết quả kinh doanh tháng này kém hơn kỳ vọng.

### Business question

> Khu vực nào đang kéo kết quả bán hàng xuống và yếu tố nào cần được kiểm tra trước?

### Dữ liệu có thể cần

- ngày đặt hàng;
- khu vực;
- sản phẩm;
- số lượng;
- giá bán;
- giá trị đơn;
- trạng thái đơn hàng;
- kênh bán hàng.

### Metric có thể theo dõi

- doanh thu;
- số đơn;
- giá trị đơn trung bình;
- tỷ lệ hủy đơn;
- doanh thu theo khu vực;
- doanh thu theo nhóm sản phẩm.

### Phân tích

BI Analyst có thể:

1. kiểm tra tổng doanh thu theo thời gian;
2. chia kết quả theo khu vực;
3. xác định khu vực có biến động lớn;
4. chia tiếp theo sản phẩm hoặc kênh;
5. kiểm tra xem biến động đến từ số đơn, giá trị đơn hay tỷ lệ hủy;
6. ghi lại các giả thuyết cần xác minh.

### Đầu ra

Đầu ra không nhất thiết phải là một dashboard lớn. Một report ngắn có thể đã đủ nếu nó trả lời rõ:

- điều gì đang xảy ra;
- xảy ra ở đâu;
- metric nào thay đổi;
- dữ liệu có limitation gì;
- stakeholder nên kiểm tra hoặc hành động gì tiếp theo.

---

## 8. Những lỗi tư duy thường gặp

### 8.1. Bắt đầu bằng tool thay vì business question

Câu hỏi “nên dùng Power BI hay Tableau?” có thể quan trọng, nhưng không phải bước đầu tiên.

Hãy xác định trước:

> Ai cần quyết định gì?

Sau đó mới xác định dữ liệu, metric và hình thức trình bày phù hợp.

### 8.2. Có dashboard nhưng không có câu chuyện

Một dashboard chứa nhiều chart không đồng nghĩa với việc người xem hiểu vấn đề.

Mỗi dashboard cần giúp người dùng trả lời một nhóm câu hỏi rõ ràng và biết nên xem gì trước.

### 8.3. Metric không có định nghĩa

Hai nhóm có thể cùng dùng từ “customer” nhưng một bên tính người đã đăng ký, bên kia tính người đã thanh toán.

Nếu định nghĩa không thống nhất, dashboard có thể chính xác về kỹ thuật nhưng sai về nghiệp vụ.

### 8.4. Kết luận vượt quá dữ liệu

BI Analyst cần phân biệt:

- điều dữ liệu cho thấy;
- điều có thể là nguyên nhân;
- điều cần kiểm tra thêm.

Tương quan hoặc biến động đồng thời chưa đủ để khẳng định quan hệ nhân quả.

---

## 9. Bài tập thực hành

Chọn một công ty, ứng dụng hoặc sản phẩm quen thuộc.

Viết một **BI analysis brief** theo mẫu sau:

**1. Stakeholder:**  
Ai sẽ sử dụng kết quả?

**2. Business question:**  
Họ cần ra quyết định gì?

**3. Data:**  
Những dữ liệu nào cần thiết?

**4. Metrics:**  
Chọn 3–5 metric quan trọng.

**5. Possible insight:**  
Viết 5–7 dòng mô tả loại insight có thể giúp stakeholder ra quyết định tốt hơn. Không cần tự bịa số liệu.

**6. Next action:**  
Nếu phát hiện một vấn đề đáng chú ý, stakeholder có thể kiểm tra hoặc hành động gì tiếp theo?

### Tiêu chí hoàn thành

- Business question đủ cụ thể.
- Metric gắn với câu hỏi.
- Không dùng số liệu không có căn cứ.
- Insight khác với việc chỉ đọc lại metric.
- Có next action hoặc câu hỏi cần điều tra tiếp.

---

## 10. Artifact nên tạo

Sau bài này, nên tạo một artifact có thể đưa vào portfolio:

> **BI Role Map & Stakeholder Value Note**

Artifact có thể gồm:

- một business question;
- stakeholder chính;
- nguồn dữ liệu cần dùng;
- 3–5 metric;
- một sơ đồ `Data → Analysis → Insight → Decision`;
- 3–5 dòng recommendation hoặc next action giả định;
- checklist chất lượng.

Checklist:

- [ ] Dữ liệu phù hợp với business question.
- [ ] Metric có định nghĩa rõ.
- [ ] Chart hoặc report dễ hiểu.
- [ ] Insight không chỉ lặp lại số liệu.
- [ ] Recommendation có thể dẫn tới hành động.
- [ ] Limitation được ghi rõ nếu có.

---

## 11. Câu hỏi ôn tập

### Câu 1

Một stakeholder nói: “Hãy tạo cho tôi một dashboard doanh thu.” Câu hỏi nào BI Analyst nên làm rõ trước?

A. Dashboard nên dùng màu gì?  
B. Stakeholder cần ra quyết định gì từ dashboard?  
C. Có thể thêm bao nhiêu biểu đồ?  
D. Nên xuất dashboard thành PDF hay ảnh?

**Đáp án:** B

**Giải thích:** BI nên bắt đầu từ business question và quyết định cần hỗ trợ. Hình thức dashboard chỉ được chọn sau khi mục tiêu đã rõ.

### Câu 2

Phát biểu nào mô tả đúng nhất vai trò của BI?

A. Biến dữ liệu thành thông tin có ích để hỗ trợ quyết định.  
B. Thay stakeholder đưa ra mọi quyết định kinh doanh.  
C. Tạo càng nhiều chart càng tốt.  
D. Chỉ lưu trữ dữ liệu lịch sử.

**Đáp án:** A

**Giải thích:** BI kết nối dữ liệu với phân tích, insight và quyết định; nó không chỉ là trực quan hóa hoặc lưu trữ dữ liệu.

### Câu 3

Điều nào phân biệt `KPI` với một metric thông thường?

A. KPI luôn phải là phần trăm.  
B. KPI chỉ xuất hiện trên dashboard.  
C. KPI được ưu tiên vì gắn trực tiếp với một mục tiêu quan trọng.  
D. KPI luôn được tính bằng SQL.

**Đáp án:** C

**Giải thích:** KPI là metric quan trọng trong bối cảnh một mục tiêu cụ thể; không có yêu cầu KPI phải là phần trăm, phải nằm trên dashboard hoặc phải được tính bằng một công cụ nhất định.

### Câu 4

Một analyst thấy doanh thu giảm và lập tức kết luận nguyên nhân là khách hàng mất hứng thú. Vấn đề chính là gì?

A. Analyst chưa chọn đúng màu cho biểu đồ.  
B. Analyst đang kết luận nguyên nhân khi dữ liệu mới chỉ cho thấy biến động.  
C. Doanh thu không phải metric.  
D. BI không được phép đưa ra giả thuyết.

**Đáp án:** B

**Giải thích:** Dữ liệu doanh thu giảm cho thấy một hiện tượng, nhưng chưa đủ để xác nhận nguyên nhân. Cần phân tích thêm và kiểm tra các giả thuyết.

### Câu 5

Chuỗi nào phù hợp nhất với tư duy BI?

A. Tool → Chart → Data → Question  
B. Data → Tool → Chart → Decoration  
C. Business question → Data → Metric → Analysis → Insight → Action  
D. Dashboard → KPI → Business question → Data

**Đáp án:** C

**Giải thích:** BI hiệu quả bắt đầu từ câu hỏi kinh doanh, sau đó mới xác định dữ liệu và metric, thực hiện phân tích rồi chuyển insight thành hành động.

---

## 12. Tổng kết

Business Intelligence là năng lực biến dữ liệu thành thông tin phục vụ quyết định. Một BI Analyst không chỉ tạo query, spreadsheet, dashboard hoặc report; giá trị cốt lõi nằm ở khả năng kết nối **business question**, **data**, **metric**, **analysis**, **insight** và **action**.

Khi tiếp cận một bài toán BI, hãy luôn bắt đầu bằng câu hỏi:

> **Ai cần quyết định điều gì, và dữ liệu nào có thể giúp họ quyết định tốt hơn?**
