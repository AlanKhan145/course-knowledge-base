# 002 - Skills

**Module:** Module 01 - Introduction - Giới thiệu BI Analyst  
**Roadmap item:** 1.2  
**Loại nội dung:** BI foundations  
**Thời lượng gợi ý:** 35–55 phút

---

## 1. Tóm tắt

BI Analyst cần nhiều hơn khả năng sử dụng một công cụ dashboard. Công việc này kết hợp **tư duy phân tích dữ liệu, SQL, trực quan hóa, dashboard/reporting và giao tiếp với stakeholder**.

Các kỹ năng không tồn tại tách rời. Một query SQL chính xác nhưng trả lời sai business question vẫn không tạo ra giá trị. Một dashboard đẹp nhưng metric không rõ cũng có thể làm stakeholder hiểu sai. Ngược lại, một phân tích tốt phải kết nối được từ câu hỏi kinh doanh đến dữ liệu, từ dữ liệu đến insight và từ insight đến hành động.

Có thể nhóm năng lực BI Analyst thành năm phần:

| Nhóm kỹ năng | Câu hỏi trung tâm |
| --- | --- |
| Phân tích dữ liệu | Dữ liệu đang nói lên điều gì? |
| SQL | Làm thế nào lấy đúng dữ liệu cần phân tích? |
| Trực quan hóa | Làm thế nào trình bày dữ liệu để người xem hiểu nhanh? |
| Dashboard & reporting | Làm thế nào theo dõi vấn đề một cách nhất quán? |
| Stakeholder communication | Kết quả này giúp ai ra quyết định gì? |

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Mô tả được năm nhóm kỹ năng cốt lõi của BI Analyst.
- Giải thích được vì sao kỹ năng kỹ thuật phải gắn với business question.
- Phân biệt được vai trò của SQL, analysis, visualization và dashboard/reporting trong một workflow BI.
- Nhận diện được rủi ro khi metric, data quality hoặc stakeholder context không rõ ràng.
- Tự đánh giá mức độ hiện tại và xây dựng một kế hoạch luyện kỹ năng BI theo artifact.

---

## 3. Tư duy phân tích dữ liệu

Kỹ năng phân tích dữ liệu không chỉ là tính toán. Cốt lõi là khả năng **đặt câu hỏi đúng, chia nhỏ vấn đề và kiểm tra kết luận bằng dữ liệu**.

Một analyst thường phải đi qua các câu hỏi:

1. Business question thực sự là gì?
2. Metric nào phản ánh đúng vấn đề?
3. Dữ liệu có đủ đúng, đủ mới và đủ chi tiết không?
4. Nên so sánh theo thời gian, nhóm khách hàng, sản phẩm hay khu vực?
5. Biến động nào thực sự đáng chú ý?
6. Có giả thuyết nào cần kiểm tra thêm?
7. Kết luận nào được dữ liệu hỗ trợ?
8. Stakeholder nên làm gì tiếp theo?

### Ví dụ

Stakeholder nói:

> Số đơn tuần này giảm. Hãy xem có vấn đề gì.

Một cách phân tích có cấu trúc:

```text
Tổng số đơn giảm?
      ↓
Giảm từ ngày nào?
      ↓
Kênh / khu vực / sản phẩm nào giảm?
      ↓
Traffic giảm hay conversion giảm?
      ↓
Có vấn đề data quality không?
      ↓
Insight nào được dữ liệu hỗ trợ?
      ↓
Cần điều tra hoặc hành động gì tiếp?
```

Kỹ năng quan trọng ở đây không phải là tạo thật nhiều phép tính, mà là **thu hẹp vấn đề có hệ thống**.

---

## 4. Kỹ năng SQL

SQL giúp BI Analyst truy vấn và tổng hợp dữ liệu để trả lời business question.

Ở mức nền tảng, một BI Analyst thường cần làm được các nhóm thao tác như:

- chọn cột cần thiết;
- lọc dữ liệu;
- nhóm và tổng hợp;
- sắp xếp;
- kết hợp dữ liệu từ nhiều bảng;
- tạo logic tính metric;
- kiểm tra dữ liệu trước khi dùng cho report.

Ví dụ minh họa:

```sql
SELECT
    region,
    SUM(revenue) AS total_revenue
FROM sales
GROUP BY region
ORDER BY total_revenue DESC;
```

Query này trả lời một câu hỏi rất cụ thể: tổng doanh thu theo từng khu vực là bao nhiêu?

Tuy nhiên, query chỉ hữu ích khi các khái niệm đã rõ:

- `revenue` được định nghĩa thế nào?
- dữ liệu có bao gồm đơn bị hủy không?
- thời gian phân tích là giai đoạn nào?
- `region` được xác định theo khách hàng, cửa hàng hay đơn hàng?

SQL đúng cú pháp chưa chắc đã đúng nghiệp vụ.

### Nguyên tắc làm việc

Trước khi viết query, hãy viết business question thành một câu.

Sau khi có query, hãy kiểm tra:

- số dòng có hợp lý không;
- có bị nhân bản dữ liệu khi `JOIN` không;
- có giá trị thiếu không;
- tổng số liệu có khớp với nguồn tham chiếu không;
- filter có loại bỏ nhầm dữ liệu không.

---

## 5. Kỹ năng trực quan hóa dữ liệu

Data visualization giúp người xem nhận diện thông tin nhanh hơn bảng số liệu thuần túy.

Một chart tốt cần làm rõ một thông điệp.

Ví dụ:

| Mục đích | Hình thức thường phù hợp |
| --- | --- |
| So sánh giữa các nhóm | Bar chart |
| Theo dõi xu hướng theo thời gian | Line chart |
| Xem một KPI quan trọng | KPI card |
| Xem chi tiết bản ghi | Table |
| So sánh thực tế với mục tiêu | Bar/KPI kèm target |

Không cần dùng chart phức tạp nếu chart đơn giản đã trả lời được câu hỏi.

### Ba câu hỏi trước khi vẽ chart

1. Người xem cần nhìn thấy điều gì?
2. So sánh nào là quan trọng nhất?
3. Chart có làm thông điệp rõ hơn hay chỉ trang trí?

### Lỗi thường gặp

- dùng quá nhiều màu;
- đưa quá nhiều metric vào cùng một chart;
- không ghi rõ đơn vị;
- trục hoặc phạm vi khiến người xem hiểu sai;
- chọn chart không phù hợp với loại so sánh;
- không làm nổi bật insight chính.

Visualization tốt phải ưu tiên **clarity** trước decoration.

---

## 6. Dashboard và reporting

Dashboard là công cụ theo dõi một nhóm business question hoặc KPI theo cách nhất quán.

Một dashboard BI tốt cần giúp người dùng biết:

- tình hình hiện tại;
- metric nào thay đổi;
- thay đổi ở đâu;
- nên drill down theo chiều nào;
- có vấn đề nào cần hành động.

Dashboard không nên chỉ là một tập hợp chart.

Một cấu trúc tư duy đơn giản:

```text
Overview
   ↓
Key KPI
   ↓
Trend
   ↓
Breakdown
   ↓
Detail / Drill-down
   ↓
Actionable note
```

### Reporting khác dashboard ở đâu?

Trong phạm vi nền tảng này, có thể hiểu:

- **dashboard** ưu tiên theo dõi và khám phá nhanh;
- **report** ưu tiên trình bày kết quả theo một cấu trúc cụ thể;
- cả hai đều phải dùng metric rõ ràng và dữ liệu đáng tin cậy.

Điểm quan trọng không phải tên gọi, mà là **đầu ra có phục vụ đúng nhu cầu stakeholder hay không**.

---

## 7. Kỹ năng giao tiếp với stakeholder

BI Analyst làm việc với người cần sử dụng kết quả phân tích. Vì vậy, giao tiếp là một phần của năng lực phân tích.

Một stakeholder có thể mô tả yêu cầu rất rộng:

> Tôi muốn biết tình hình khách hàng.

BI Analyst cần biến yêu cầu đó thành câu hỏi có thể phân tích:

- Stakeholder đang quan tâm khách hàng mới hay khách hàng hiện tại?
- Họ cần theo dõi tăng trưởng, retention hay doanh thu?
- Quyết định nào sẽ được đưa ra từ kết quả?
- Cần xem theo ngày, tuần hay tháng?
- Có nhóm khách hàng nào cần ưu tiên?

### Khi trình bày kết quả

Không nên chỉ nói:

> Conversion rate là 3,2%.

Cần đặt metric trong bối cảnh:

> Conversion rate giảm so với kỳ tham chiếu và phần giảm tập trung ở một nhóm/kênh cụ thể. Cần kiểm tra thay đổi ở traffic, funnel hoặc dữ liệu tracking trước khi đưa ra quyết định.

Ví dụ chỉ minh họa cách trình bày; số liệu thực tế phải đến từ dữ liệu đã kiểm chứng.

### Một cấu trúc giao tiếp ngắn

```text
What happened?
Why does it matter?
What evidence supports it?
What should we do next?
What remains uncertain?
```

Cấu trúc này giúp analyst tránh việc gửi cho stakeholder một “data dump” mà không có kết luận.

---

## 8. Data quality và metric definition: kỹ năng nền của mọi kỹ năng

Dù dùng SQL, spreadsheet hay BI tool, analyst vẫn phải quan tâm đến data quality.

Một số kiểm tra cơ bản:

- dữ liệu có thiếu không;
- dữ liệu có trùng không;
- giá trị có nằm ngoài phạm vi hợp lý không;
- kỳ dữ liệu có đầy đủ không;
- định nghĩa metric có thống nhất không;
- dữ liệu có đủ mới cho quyết định hiện tại không.

Metric definition nên trả lời được:

- tên metric;
- ý nghĩa;
- cách tính;
- phạm vi dữ liệu;
- điều kiện loại trừ;
- grain hoặc mức chi tiết;
- thời gian áp dụng nếu cần.

Một dashboard đáng tin cậy phụ thuộc vào những điều này nhiều hơn hiệu ứng thị giác.

---

## 9. Kết nối các kỹ năng trong một workflow

```mermaid
flowchart LR
    A[Business Question] --> B[SQL / Data Access]
    B --> C[Data Quality]
    C --> D[Analysis]
    D --> E[Visualization]
    E --> F[Dashboard / Report]
    F --> G[Stakeholder Communication]
    G --> H[Decision / Next Action]
```

Các bước có thể lặp lại. Ví dụ, stakeholder đặt câu hỏi mới sau khi xem dashboard; analyst quay lại dữ liệu, điều chỉnh metric hoặc phân tích sâu hơn.

Điều này cho thấy BI không phải pipeline một chiều tuyệt đối mà là một quy trình **phân tích – trao đổi – cải thiện**.

---

## 10. Bộ kỹ năng theo artifact

Một cách học BI hiệu quả là luyện theo sản phẩm đầu ra thay vì chỉ học từng công cụ riêng lẻ.

| Artifact | Kỹ năng được luyện |
| --- | --- |
| SQL query | Data access, logic, validation |
| KPI definition | Business thinking, metric design |
| Dashboard | Visualization, hierarchy, reporting |
| Analysis brief | Analytical reasoning |
| Executive summary | Stakeholder communication |
| Data quality checklist | Validation, reliability |

Một project nhỏ có thể kết hợp nhiều artifact để thể hiện năng lực end-to-end.

---

## 11. Bài tập thực hành

Chọn một business question, ví dụ:

> Sản phẩm nào đang đóng góp nhiều nhất vào doanh thu và sản phẩm nào cần được điều tra thêm?

Thực hiện:

1. Viết lại business question cho rõ stakeholder và quyết định.
2. Liệt kê dữ liệu cần thiết.
3. Định nghĩa 3–5 metric.
4. Viết một SQL query mẫu hoặc pseudo-query để tổng hợp dữ liệu.
5. Chọn loại chart phù hợp cho ít nhất hai góc nhìn.
6. Viết 5–7 dòng executive summary giả định nhưng **không tự bịa số liệu**.
7. Ghi rõ phần nào cần data quality check trước khi kết luận.

### Tiêu chí hoàn thành

- Business question rõ.
- SQL hoặc logic phân tích phục vụ đúng câu hỏi.
- Metric được định nghĩa.
- Chart có lý do lựa chọn.
- Summary có insight và next action.
- Không kết luận vượt quá dữ liệu.

---

## 12. Tự đánh giá kỹ năng

Chấm mỗi nhóm từ 1 đến 5:

| Kỹ năng | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Phân tích dữ liệu | Cần hướng dẫn nhiều | Tự phân tích bài toán quen thuộc | Có thể cấu trúc bài toán mơ hồ |
| SQL | Query cơ bản còn khó | Tự tổng hợp và join dữ liệu quen thuộc | Có thể viết, kiểm tra và giải thích query phức tạp hơn |
| Visualization | Chọn chart theo cảm tính | Chọn chart phù hợp mục đích | Thiết kế hierarchy rõ và tránh hiểu sai |
| Dashboard/reporting | Ghép chart rời rạc | Xây được dashboard theo business question | Thiết kế luồng xem và drill-down có chủ đích |
| Stakeholder communication | Chủ yếu báo số | Có thể giải thích insight | Có thể kết nối insight với decision và risk |

Bảng này là rubric học tập, không phải chuẩn nghề nghiệp chính thức. Mục đích là giúp xác định kỹ năng nào cần ưu tiên luyện tiếp.

---

## 13. Artifact nên tạo

Tạo một **BI Skills Portfolio Pack** gồm:

- 1 business question;
- 1 SQL query hoặc data extraction note;
- 1 KPI definition;
- 1 dashboard sketch;
- 1 analysis brief;
- 1 executive summary;
- 1 data quality checklist.

Checklist:

- [ ] Mỗi artifact phục vụ cùng một bài toán.
- [ ] Metric được dùng nhất quán.
- [ ] SQL hoặc logic dữ liệu có thể giải thích.
- [ ] Visualization có mục đích rõ.
- [ ] Summary trả lời được “so what?”.
- [ ] Có next action cho stakeholder.

---

## 14. Câu hỏi ôn tập

### Câu 1

Một SQL query chạy đúng nhưng metric doanh thu lại tính cả đơn đã hủy. Điều này cho thấy điều gì?

A. Chỉ cần query chạy là đủ.  
B. SQL không quan trọng trong BI.  
C. Đúng kỹ thuật chưa chắc đã đúng nghiệp vụ.  
D. Dashboard sẽ tự sửa metric.

**Đáp án:** C

**Giải thích:** BI Analyst phải hiểu định nghĩa metric và điều kiện nghiệp vụ; query đúng cú pháp vẫn có thể tạo kết quả sai về ý nghĩa.

### Câu 2

Mục tiêu chính của data visualization trong BI là gì?

A. Làm dashboard có nhiều màu hơn.  
B. Giúp người xem hiểu nhanh mẫu hình, so sánh hoặc biến động quan trọng.  
C. Thay thế hoàn toàn việc phân tích.  
D. Hiển thị càng nhiều metric càng tốt.

**Đáp án:** B

**Giải thích:** Visualization hỗ trợ nhận biết và truyền đạt thông tin. Nó không thay thế analysis và không nên hy sinh clarity để tăng trang trí.

### Câu 3

Stakeholder hỏi: “Tôi muốn biết tình hình khách hàng.” Bước phù hợp nhất là gì?

A. Làm dashboard ngay.  
B. Chọn một chart bất kỳ rồi hỏi sau.  
C. Tải toàn bộ dữ liệu khách hàng về Excel.  
D. Làm rõ họ cần quyết định gì và khía cạnh khách hàng nào quan trọng.

**Đáp án:** D

**Giải thích:** Yêu cầu ban đầu còn mơ hồ. BI Analyst cần chuyển nó thành business question có thể phân tích trước khi chọn dữ liệu hoặc công cụ.

### Câu 4

Artifact nào phù hợp nhất để chứng minh khả năng định nghĩa metric?

A. KPI definition.  
B. Logo cá nhân.  
C. Screenshot công cụ BI không có giải thích.  
D. Danh sách tên dashboard.

**Đáp án:** A

**Giải thích:** KPI definition thể hiện trực tiếp cách người học xác định ý nghĩa, phạm vi và logic của một metric.

### Câu 5

Workflow nào phản ánh tốt nhất sự kết hợp kỹ năng của BI Analyst?

A. Chart → màu sắc → SQL → business question.  
B. Business question → data/SQL → validation → analysis → visualization → communication.  
C. Tool → dashboard → thêm chart → gửi stakeholder.  
D. SQL → SQL → SQL → không cần trao đổi.

**Đáp án:** B

**Giải thích:** Năng lực BI là sự kết hợp giữa tư duy kinh doanh, dữ liệu, phân tích, trực quan hóa và giao tiếp chứ không phải một kỹ năng riêng lẻ.

---

## 15. Tổng kết

BI Analyst cần một bộ kỹ năng kết nối với nhau:

- **analysis** để cấu trúc và giải quyết vấn đề;
- **SQL** để lấy và tổng hợp đúng dữ liệu;
- **data quality & metric definition** để đảm bảo kết quả đáng tin;
- **visualization** để truyền đạt thông tin rõ;
- **dashboard/reporting** để theo dõi vấn đề nhất quán;
- **stakeholder communication** để biến insight thành quyết định hoặc next action.

Kỹ năng tốt nhất không phải là kỹ năng đứng riêng lẻ mạnh nhất, mà là khả năng sử dụng đúng kỹ năng ở đúng bước của một bài toán BI.
