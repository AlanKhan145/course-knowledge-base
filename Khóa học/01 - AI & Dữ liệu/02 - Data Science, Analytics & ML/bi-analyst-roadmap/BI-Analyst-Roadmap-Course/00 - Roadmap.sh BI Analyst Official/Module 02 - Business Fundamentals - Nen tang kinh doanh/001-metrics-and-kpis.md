# 001 - Metrics and KPIs

**Module:** Module 02 - Business Fundamentals - Nền tảng kinh doanh  
**Roadmap item:** 2.1  
**Loại nội dung:** Business fundamentals  
**Thời lượng gợi ý:** 35–55 phút

---

## 1. Tóm tắt

Trong Business Intelligence, **metric** là một đại lượng được dùng để đo một khía cạnh của hoạt động kinh doanh, còn **KPI (Key Performance Indicator)** là một metric được chọn để theo dõi mức độ đạt được một mục tiêu quan trọng.

Điểm cốt lõi không phải là tạo ra thật nhiều con số. Một BI Analyst cần bắt đầu từ **business question**, xác định ai sẽ dùng kết quả để ra quyết định, sau đó mới lựa chọn metric và KPI phù hợp. Một chỉ số chỉ có giá trị khi người đọc hiểu nó đo điều gì, được tính như thế nào, dùng trong bối cảnh nào và hành động nào có thể được đưa ra từ kết quả đó.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Giải thích được sự khác nhau giữa **metric** và **KPI** bằng ngôn ngữ dễ hiểu.
- Xác định được một KPI có liên hệ trực tiếp với mục tiêu kinh doanh nào.
- Đánh giá một KPI dựa trên tính rõ ràng, khả năng đo lường và khả năng hỗ trợ quyết định.
- Nhận diện một số nhóm KPI thường gặp ở Sales, Marketing, Finance, Operations và HR.
- Xây dựng một **KPI tree** đơn giản và mô tả insight có thể dẫn tới hành động.

## 3. Metric là gì?

**Metric** là một phép đo định lượng dùng để mô tả trạng thái, hành vi hoặc kết quả của một hoạt động.

Ví dụ:

- số đơn hàng trong ngày;
- doanh thu theo tháng;
- số khách truy cập website;
- thời gian xử lý trung bình của một yêu cầu;
- số nhân viên nghỉ việc trong một quý.

Một metric trả lời câu hỏi kiểu:

> “Điều gì đang xảy ra và mức độ của nó là bao nhiêu?”

Metric có thể hữu ích cho phân tích nhưng chưa chắc đã là chỉ số quan trọng nhất đối với mục tiêu kinh doanh hiện tại.

### 3.1. Metric cần có định nghĩa rõ ràng

Tên metric không đủ để đảm bảo mọi người hiểu giống nhau. Một metric tốt nên có ít nhất các thành phần sau:

| Thành phần | Câu hỏi cần trả lời |
| --- | --- |
| Tên metric | Chỉ số được gọi là gì? |
| Ý nghĩa | Chỉ số đang đo hiện tượng nào? |
| Công thức | Giá trị được tính như thế nào? |
| Phạm vi | Áp dụng cho sản phẩm, thị trường, phòng ban hay thời gian nào? |
| Nguồn dữ liệu | Dữ liệu lấy từ đâu? |
| Tần suất cập nhật | Theo thời gian thực, ngày, tuần hay tháng? |
| Người sử dụng | Ai cần metric này để ra quyết định? |

Nếu hai dashboard cùng hiển thị “Revenue” nhưng một nơi tính trước hoàn tiền và nơi còn lại tính sau hoàn tiền, hai con số có thể khác nhau dù cùng tên. Vì vậy, định nghĩa metric là một phần của data quality và governance, không chỉ là vấn đề trình bày.

### 3.2. Metric không tự động tạo ra insight

Một con số như “1.200 đơn hàng” chỉ là quan sát. Để trở thành insight, BI Analyst cần đặt nó vào bối cảnh, chẳng hạn:

- so với kỳ trước;
- so với mục tiêu;
- so với một nhóm khách hàng khác;
- so với khu vực khác;
- so với một giai đoạn chiến dịch.

Từ đó mới có thể trả lời câu hỏi: **vì sao chỉ số thay đổi và cần làm gì tiếp theo?**

## 4. KPI là gì?

**KPI** là một metric được lựa chọn vì nó phản ánh mức độ đạt được một **mục tiêu quan trọng**.

Ví dụ, một doanh nghiệp có thể theo dõi hàng chục metric bán hàng, nhưng nếu mục tiêu quý này là tăng doanh thu từ khách hàng hiện tại thì KPI có thể tập trung vào:

- doanh thu từ khách hàng hiện tại;
- tỷ lệ mua lại;
- giá trị đơn hàng trung bình của nhóm khách hàng hiện tại.

KPI trả lời câu hỏi gần với quyết định hơn:

> “Chúng ta có đang tiến gần đến mục tiêu quan trọng hay không?”

### 4.1. Metric và KPI khác nhau như thế nào?

| Tiêu chí | Metric | KPI |
| --- | --- | --- |
| Vai trò | Đo một hiện tượng | Theo dõi mục tiêu quan trọng |
| Phạm vi | Có thể rất rộng | Được chọn lọc |
| Liên hệ với mục tiêu | Có thể có hoặc không | Phải có |
| Mức độ ưu tiên | Không nhất thiết cao | Cao đối với stakeholder liên quan |
| Hành động | Có thể chỉ dùng để theo dõi | Nên hỗ trợ quyết định hoặc hành động |

**Mọi KPI đều là metric, nhưng không phải mọi metric đều là KPI.**

## 5. Cách chọn KPI phù hợp

Một KPI nên bắt đầu từ mục tiêu, không bắt đầu từ dữ liệu đang có sẵn.

Luồng tư duy nên là:

```mermaid
flowchart LR
    G[Mục tiêu kinh doanh] --> Q[Business question]
    Q --> K[KPI cần theo dõi]
    K --> M[Metric hỗ trợ]
    M --> D[Dữ liệu cần dùng]
    D --> I[Insight]
    I --> A[Hành động]
```

Sơ đồ cho thấy dữ liệu đứng sau câu hỏi kinh doanh, không đứng trước nó. Nếu BI Analyst chọn metric chỉ vì dữ liệu dễ lấy, dashboard có thể rất đầy đủ nhưng không giúp stakeholder ra quyết định.

### 5.1. Bốn câu hỏi kiểm tra một KPI

Trước khi đưa KPI vào dashboard, hãy kiểm tra:

1. **KPI gắn với mục tiêu nào?** Nếu không thể nêu mục tiêu, KPI có thể chỉ là metric thông thường.
2. **KPI có định nghĩa và công thức rõ không?** Hai người đọc phải có khả năng hiểu giống nhau.
3. **KPI có thể thay đổi hành động không?** Nếu tăng hoặc giảm nhưng không ai làm gì khác đi, cần xem lại mức độ ưu tiên.
4. **KPI có đủ dữ liệu đáng tin cậy không?** Chỉ số đúng về mặt ý tưởng nhưng dữ liệu sai vẫn dẫn tới quyết định sai.

### 5.2. Leading và lagging indicators

Khi phân tích KPI, có thể phân biệt hai góc nhìn hữu ích:

- **Lagging indicator** phản ánh kết quả đã xảy ra, ví dụ doanh thu quý vừa kết thúc.
- **Leading indicator** phản ánh tín hiệu có thể xuất hiện trước kết quả, ví dụ số cơ hội bán hàng đủ điều kiện trong pipeline.

Dashboard thường hữu ích hơn khi stakeholder vừa thấy **kết quả**, vừa thấy **tín hiệu dẫn tới kết quả**.

## 6. KPI theo từng bộ phận

Không có một bộ KPI duy nhất phù hợp cho mọi phòng ban. KPI cần phản ánh mục tiêu và trách nhiệm của từng nhóm.

| Bộ phận | Câu hỏi kinh doanh điển hình | Ví dụ metric/KPI có thể theo dõi |
| --- | --- | --- |
| Sales | Đội ngũ bán hàng có đạt mục tiêu không? | Revenue, số deal, win rate, average deal value |
| Marketing | Chiến dịch có tạo ra khách hàng tiềm năng chất lượng không? | Leads, conversion rate, campaign cost, cost per lead |
| Finance | Doanh nghiệp có duy trì hiệu quả tài chính không? | Revenue, cost, profit, margin, cash-related metrics |
| Operations | Quy trình vận hành có ổn định và hiệu quả không? | Cycle time, throughput, backlog, error rate |
| HR | Tổ chức có thu hút và giữ chân nhân sự không? | Headcount, turnover, time to hire, absenteeism |

Các chỉ số trên chỉ là ví dụ về nhóm đo lường. Khi triển khai thực tế, định nghĩa và công thức phải được thống nhất với stakeholder và dữ liệu của tổ chức.

## 7. Từ KPI đến dashboard và quyết định

BI Analyst không nên dừng ở việc hiển thị KPI. Một dashboard tốt cần giúp người xem đi qua ba lớp:

1. **What happened?** — KPI hiện tại là bao nhiêu?
2. **Why did it happen?** — yếu tố nào, nhóm nào hoặc giai đoạn nào tạo ra thay đổi?
3. **What should we do?** — stakeholder cần kiểm tra, ưu tiên hoặc điều chỉnh điều gì?

Ví dụ, nếu conversion rate giảm, một dashboard có thể cho phép phân rã theo nguồn traffic, khu vực hoặc thiết bị. Insight có giá trị hơn câu “conversion rate giảm” là xác định **phần nào giảm mạnh nhất** và **phần đó có đủ lớn để ưu tiên xử lý hay không**.

## 8. Điểm dễ sai

- Chọn quá nhiều KPI khiến dashboard mất trọng tâm.
- Gọi mọi metric là KPI mà không gắn với mục tiêu.
- So sánh các metric có định nghĩa khác nhau.
- Dùng tỷ lệ nhưng không xem mẫu số, dẫn đến kết luận sai.
- Tập trung vào chart đẹp trước khi xác định business question.
- Báo cáo biến động nhưng không nêu recommendation, risk hoặc next action.

## 9. Thực hành: xây dựng KPI tree

Chọn một phòng ban: **Sales, Marketing, Finance, Operations hoặc HR**.

Thực hiện theo các bước:

1. Viết một mục tiêu kinh doanh cụ thể.
2. Chọn một KPI chính phản ánh mục tiêu.
3. Chọn từ 2–4 metric hỗ trợ giải thích KPI chính.
4. Ghi rõ ý nghĩa của từng metric.
5. Viết 5–7 dòng mô tả insight nào có thể giúp stakeholder ra quyết định tốt hơn.

Ví dụ cấu trúc:

```text
Mục tiêu
└── KPI chính
    ├── Metric hỗ trợ 1
    ├── Metric hỗ trợ 2
    └── Metric hỗ trợ 3
```

**Deliverable**

Tạo một **Metric/KPI Dictionary** ngắn gồm:

| Trường | Nội dung |
| --- | --- |
| KPI/Metric | Tên chỉ số |
| Business meaning | Chỉ số nói lên điều gì |
| Formula | Cách tính |
| Data source | Nguồn dữ liệu |
| Grain | Mức chi tiết dữ liệu |
| Owner/Stakeholder | Ai chịu trách nhiệm hoặc sử dụng |
| Decision | Quyết định nào được hỗ trợ |

## 10. Câu hỏi ôn tập

### Câu 1

Phát biểu nào mô tả đúng nhất mối quan hệ giữa metric và KPI?

A. KPI và metric là hai khái niệm hoàn toàn không liên quan.  
B. Mọi metric đều phải là KPI.  
C. KPI là metric được lựa chọn để theo dõi một mục tiêu quan trọng.  
D. KPI chỉ dùng trong Finance.

**Đáp án:** C

**Giải thích:** KPI vẫn là một phép đo, nhưng nó được ưu tiên vì có liên hệ trực tiếp với mục tiêu và quyết định kinh doanh.

### Câu 2

Một dashboard có 40 metric nhưng stakeholder không biết nên hành động dựa trên chỉ số nào. Vấn đề chính là gì?

A. Thiếu màu sắc.  
B. Chưa ưu tiên metric theo business question và mục tiêu.  
C. Có quá ít dữ liệu.  
D. Không dùng đủ loại biểu đồ.

**Đáp án:** B

**Giải thích:** Dashboard cần giúp người dùng tập trung vào các chỉ số liên quan tới quyết định, thay vì chỉ hiển thị mọi dữ liệu có sẵn.

### Câu 3

Đâu là ví dụ phù hợp nhất về một lagging indicator?

A. Doanh thu đã ghi nhận trong quý vừa kết thúc.  
B. Số cơ hội bán hàng mới trong pipeline tuần này.  
C. Số cuộc gọi dự kiến thực hiện ngày mai.  
D. Số chiến dịch chuẩn bị khởi chạy.

**Đáp án:** A

**Giải thích:** Lagging indicator phản ánh kết quả đã xảy ra; doanh thu của quý đã kết thúc là kết quả lịch sử.

### Câu 4

Trước khi thêm một KPI vào dashboard, câu hỏi nào quan trọng nhất?

A. KPI có thể dùng biểu đồ tròn hay không?  
B. KPI có tên tiếng Anh hay không?  
C. KPI có gắn với mục tiêu và quyết định của stakeholder hay không?  
D. KPI có nhiều chữ số thập phân hay không?

**Đáp án:** C

**Giải thích:** Mối liên hệ với mục tiêu và quyết định là điều làm KPI khác với một metric thông thường.

### Câu 5

Hai phòng ban đều dùng metric “Revenue” nhưng cho ra hai con số khác nhau. BI Analyst nên làm gì trước?

A. Chọn số lớn hơn.  
B. Kiểm tra định nghĩa, công thức, phạm vi và nguồn dữ liệu của hai metric.  
C. Lấy trung bình hai số.  
D. Đổi tên dashboard.

**Đáp án:** B

**Giải thích:** Cùng tên không đảm bảo cùng định nghĩa. Phải thống nhất logic tính và phạm vi trước khi so sánh hoặc kết luận.

## 11. Tổng kết

Metric giúp đo lường hoạt động; KPI giúp tập trung vào những phép đo quan trọng đối với mục tiêu. Với BI Analyst, giá trị của KPI không nằm ở con số riêng lẻ mà ở chuỗi **mục tiêu → câu hỏi kinh doanh → KPI → dữ liệu → insight → hành động**.

Khi hoàn thành bài này, người học nên có ít nhất một artifact có thể review: **KPI tree**, **Metric/KPI Dictionary** hoặc một dashboard note giải thích KPI và quyết định mà KPI hỗ trợ.
