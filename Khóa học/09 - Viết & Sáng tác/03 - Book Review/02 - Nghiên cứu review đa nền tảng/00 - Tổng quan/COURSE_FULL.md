# Khóa học: Phân tích dữ liệu đánh giá sách đa nền tảng

## Goodreads × Douban — Từ dữ liệu review đến phân tích tiếp nhận sách

Khóa học này chuyển hóa một paper nghiên cứu thành hệ thống bài học Markdown độc lập, tập trung vào **cách xây dựng, đối sánh và diễn giải dữ liệu đánh giá sách giữa hai nền tảng khác nhau**.

> **Nguồn học thuật chính:** Hu, Y., Underwood, T., Layne-Worthey, G., & Downie, J. S. (2026). *Comparative analysis of classics book review data created by users across Douban and Goodreads*. Digital Scholarship in the Humanities, 41, i89–i106. https://doi.org/10.1093/llc/fqaf084 (advance access: 13-09-2025).

## Khóa học giúp bạn làm được gì?

Sau khi hoàn thành, người học có thể:

- giải thích vì sao dữ liệu review sách trực tuyến hữu ích cho nghiên cứu về người đọc và sự tiếp nhận văn học;
- phân biệt **book-level**, **edition-level** và **all-editions data** trong bối cảnh Goodreads/Douban;
- mô tả quy trình tạo **parallel cross-platform dataset**;
- nhận diện ba nhóm vấn đề lớn: **metadata**, **khác biệt tổ chức dữ liệu giữa nền tảng**, **xử lý dữ liệu đa ngôn ngữ**;
- đọc và diễn giải dữ liệu **rating trung bình**, **phân phối 1–5 sao**, **số lượt rating**, **số review**, **tag/genre**;
- hiểu vì sao rating trung bình giống nhau vẫn có thể che giấu khác biệt lớn trong cách cộng đồng đánh giá;
- diễn giải các khác biệt văn hóa/nền tảng một cách thận trọng, không nhầm tương quan dữ liệu với nguyên nhân đã được chứng minh;
- thiết kế một nghiên cứu tương tự cho hai nền tảng khác.

## Cấu trúc

| Phần | Nội dung |
|---|---|
| 00 | Định hướng khóa học và bản đồ paper |
| 01 | Tại sao nghiên cứu review sách trực tuyến? |
| 02 | Câu hỏi nghiên cứu và thiết kế so sánh |
| 03 | Goodreads, Douban và cách chọn “classics” |
| 04 | Xây dựng parallel dataset và bài toán matching |
| 05 | Rating, edition và chuẩn hóa so sánh |
| 06 | “Classic” trên Douban khác gì Goodreads? |
| 07 | Tags, ratings, distributions và Jensen–Shannon |
| 08 | Review volume, diễn giải kết quả và các case study |
| 09 | Hạn chế, bài học phương pháp và hướng nghiên cứu |
| 10 | Lab thực hành với 23 shared classics |
| 11 | Bài tập dự án cuối khóa |
| 12 | Quiz tổng kết |
| 13 | Đáp án và gợi ý chấm |

## Cách học gợi ý

Đây là **thiết kế sư phạm của khóa học**, không phải cấu trúc nguyên văn của paper.

1. Đọc lesson theo thứ tự 00 → 09.
2. Làm lab ở lesson 10 bằng file `data/shared_classics_23.csv`.
3. Chọn một đề tài ở lesson 11 để viết mini research plan.
4. Làm quiz lesson 12 rồi tự đối chiếu lesson 13.

Thời lượng gợi ý: **6–8 giờ** nếu học nội dung + bài tập; **10–12 giờ** nếu làm project cuối khóa.

## Lưu ý quan trọng về phạm vi

Paper **không phải hướng dẫn cách viết book review**. Nó nghiên cứu **dữ liệu review/rating/tag do người dùng tạo ra** để tìm hiểu sự tiếp nhận sách và khác biệt giữa hai nền tảng. Khóa học giữ đúng phạm vi đó.


---

# 00 — Bản đồ khóa học và bản đồ paper

## 1. Paper đang giải quyết bài toán gì?

Nghiên cứu xem xét cách người dùng trên hai nền tảng — **Goodreads** và **Douban** — lựa chọn, gắn nhãn, đánh giá và review các tác phẩm được họ xem là “classics”. Tác giả xây dựng một dataset song song gồm **144 Goodreads classics** và **141 Douban classics**, rồi so sánh dữ liệu giữa hai nền tảng.

## 2. Ba đóng góp chính

Paper tự xác định ba đóng góp:

1. So sánh **sở thích và quan điểm của người đọc** về classics giữa hai nền tảng.
2. Chỉ ra các khó khăn phương pháp khi căn chỉnh dữ liệu đa nền tảng: **rating system**, **data quality**, **platform context / data organization**, cùng các vấn đề đa ngôn ngữ.
3. Công bố một **parallel dataset** để phục vụ nghiên cứu tiếp theo.

## 3. Bản đồ từ paper sang lesson

| Paper | Khóa học |
|---|---|
| Abstract + Introduction | Lesson 01–02 |
| §2.1 Data sources | Lesson 03 |
| §2.2 Workflow and challenges | Lesson 04–05 |
| §3.1 Features of Douban classics | Lesson 06 |
| §3.2 Douban vs Goodreads vs school syllabi | Lesson 06 |
| §3.3 Reception across platforms | Lesson 07–08 |
| §4 Discussions and conclusions | Lesson 09 |
| Table 2 | Lesson 10 + CSV |

## 4. Các con số phải nhớ

- Goodreads classics: **144**.
- Douban classics: **141**.
- Shared classics: **23**.
- Douban classics first published in Chinese + Japanese: **73/141 = 52%**.
- Douban classics là fiction: **121/141 = 86%**.
- Douban classics xuất hiện trong ít nhất một danh sách syllabus được nghiên cứu: **38/141 = 27%**.
- Mean rating của 23 shared classics: khoảng **4.37 trên Douban** và **4.08 trên Goodreads**.

## 5. Nguồn

Hu, Y., Underwood, T., Layne-Worthey, G., & Downie, J. S. (2026). *Comparative analysis of classics book review data created by users across Douban and Goodreads*. Digital Scholarship in the Humanities, 41, i89–i106. https://doi.org/10.1093/llc/fqaf084 (advance access: 13-09-2025).


---

# 01 — Tại sao nghiên cứu dữ liệu review sách trực tuyến?

## Mục tiêu

Sau bài này, bạn có thể giải thích vì sao review trực tuyến mở ra một hướng nghiên cứu mới về người đọc, đồng thời hiểu giới hạn khi chỉ nhìn một nền tảng.

## 1. Bối cảnh

Nghiên cứu lịch sử người đọc từng bị hạn chế vì thiếu các bản ghi trực tiếp về hành vi đọc. Sự phát triển của các nền tảng review sách tạo ra lượng lớn dữ liệu như rating, review, tag và shelf, từ đó giúp nghiên cứu thực nghiệm về:

- sự tiếp nhận tác phẩm;
- hành vi đọc thường ngày;
- cộng đồng đọc trực tuyến;
- thể loại văn học;
- cách độc giả tạo ra hoặc củng cố khái niệm “classic”.

## 2. Vì sao chỉ dùng một nền tảng có thể gây lệch?

Paper nhấn mạnh rằng nhiều nghiên cứu trước tập trung vào tác phẩm nổi bật trong thế giới Anglophone. Nếu nghiên cứu chỉ dựa vào một nền tảng có thành phần người dùng và lịch sử văn hóa cụ thể, kết quả dễ phản ánh **cấu trúc của nền tảng đó** hơn là một khái niệm “classic” phổ quát.

Một ví dụ nền tảng của paper: bộ 144 Goodreads classics được sử dụng từ nghiên cứu trước không có tác phẩm của tác giả Asian, Asian American hoặc Indigenous trong danh sách được nêu. Điều này là động lực quan trọng để mở rộng so sánh sang Douban.

## 3. “Classic” trong paper không phải định nghĩa hàn lâm

Điểm cần giữ rất rõ: tác giả **không định nghĩa classic theo tiêu chuẩn học thuật**. Họ nghiên cứu những cuốn sách **được người dùng trên nền tảng xem là classics** theo cơ chế chọn dữ liệu cụ thể.

Vì vậy, đối tượng nghiên cứu thực chất là:

> **user-curated classics** — classics do cộng đồng/ngữ cảnh nền tảng tạo ra.

## 4. Câu hỏi phản tư

1. Nếu một nền tảng có người dùng chủ yếu ở một khu vực, “top books” của nó có thể đại diện cho ai?
2. Rating cao nói về chất lượng tác phẩm, sự phù hợp với cộng đồng, hay cả hai?
3. Một danh sách classics do người dùng tạo có giống canon học thuật không?

## Bài tập ngắn

Viết 150–200 từ trả lời: **“Tại sao cross-platform comparison quan trọng khi nghiên cứu văn hóa đọc?”** Chỉ sử dụng các lập luận đã học trong bài này.


---

# 02 — Câu hỏi nghiên cứu và thiết kế so sánh

## Mục tiêu

Hiểu logic nghiên cứu trước khi đi vào kỹ thuật dữ liệu.

## 1. Ba nhóm câu hỏi chính

Paper xoay quanh ba nhóm vấn đề:

### A. Cái gì được xem là “classic” trên mỗi nền tảng?

- Danh sách classics có khác nhau không?
- Nền tảng nào nhấn mạnh những ngôn ngữ, thể loại hoặc truyền thống nào?

### B. Người đọc hai nền tảng đánh giá giống hay khác nhau?

- Rating trung bình hội tụ hay phân kỳ ở đâu?
- Phân phối sao có giống nhau không?
- Lượng ratings/reviews khác nhau ra sao?

### C. Làm thế nào để so sánh dữ liệu không đồng nhất?

- Cùng một tác phẩm có nhiều edition/version.
- Metadata có thể thiếu hoặc sai.
- Hai nền tảng tổ chức rating khác nhau.
- Dữ liệu nhiều ngôn ngữ làm matching khó hơn.

## 2. Thiết kế tổng quát

Nghiên cứu tạo hai tập classics, sau đó thu thập dữ liệu chéo để có thể so sánh cùng tác phẩm ở cả Douban và Goodreads.

```text
Goodreads classics (144) ─┐
                          ├─> tìm trang tương ứng trên nền tảng còn lại
Douban classics (141) ────┘
                          ↓
                  thu thập metadata + ratings + tags
                          ↓
                     làm sạch + ghép cặp
                          ↓
                     phân tích so sánh
```

## 3. Tại sao đây không phải “apples-to-apples” hoàn hảo?

Ngay từ thiết kế, hai danh sách classics không được tạo bằng **chính xác cùng một cơ chế** vì Douban và Goodreads cung cấp các loại dữ liệu khác nhau. Tác giả cố gắng tạo một thiết kế tương tự về ý tưởng, nhưng thừa nhận tính không đồng nhất của hệ thống.

Đây là bài học phương pháp quan trọng: **đừng giả định cùng tên biến = cùng ý nghĩa dữ liệu**.

## 4. Bài tập

Hãy viết một bảng 3 cột:

| Câu hỏi | Dữ liệu cần | Rủi ro diễn giải |
|---|---|---|
| Classic là gì? | tags/list membership | nền tảng tự chọn lọc người dùng |
| Rating khác nhau? | rating + distribution | edition aggregation khác nhau |
| Interest khác nhau? | tags/genre/review volume | không đồng nhất văn hóa và quy mô cộng đồng |

Bổ sung ít nhất 3 dòng nữa.


---

# 03 — Goodreads, Douban và cách chọn “classics”

## 1. Hai nền tảng

### Goodreads

- Nền tảng social reading tập trung vào sách và review sách.
- Bộ classics được paper tái sử dụng gồm **144 tác phẩm**, dựa trên dữ liệu shelving/tagging trong nghiên cứu trước.

### Douban

- Nền tảng đa chức năng tại Trung Quốc; Douban Books là phần chuyên về sách.
- Paper xác định **141 Douban classics** từ các sách từng xuất hiện trong **Douban Top 250 Books (2011–2021)** và có tag tương ứng với “classics” và/hoặc “masterpieces”.

## 2. Vì sao hai cách chọn không hoàn toàn giống nhau?

Goodreads có dữ liệu shelf/tag phong phú hơn cho nghiên cứu trước, trong khi Douban tại thời điểm thu thập dữ liệu chỉ hiển thị khoảng mười user-generated tags trên trang sách mà không nêu rõ tiêu chí lựa chọn, thứ hạng hay tần suất.

Vì vậy, nghiên cứu dùng một chiến lược **similar but not identical**.

## 3. Tư duy data provenance

Khi gặp một dataset “Top books” hoặc “Classic books”, phải ghi rõ:

- danh sách được tạo khi nào;
- ai/thuật toán nào tạo;
- đơn vị là work hay edition;
- tiêu chí chọn;
- các trường dữ liệu nào có sẵn;
- dữ liệu có đại diện toàn bộ cộng đồng không.

## 4. Ví dụ từ Table 1

Paper đưa ví dụ một số Goodreads classics như *The Iliad*, *Beowulf*, *The Canterbury Tales*, *The Prince*, *Romeo and Juliet*; và một số Douban classics như *To Live*, *Fortress Besieged*, *The Story of the Stone*, *The Dancing Girl of Izu and Other Stories*, *One Piece*.

Mục đích của ví dụ không phải xếp hạng chất lượng, mà để cho thấy **hai tập classics có cấu trúc văn hóa rất khác nhau**.

## 5. Câu hỏi kiểm tra

- Tại sao “141 Douban classics” không nên được diễn giải thành “141 classics của Trung Quốc”?  
- Vì sao một top list trên nền tảng không đồng nghĩa với canon học thuật?


---

# 04 — Xây dựng parallel dataset và bài toán matching

## Mục tiêu

Hiểu workflow tạo dataset song song và lý do phải kết hợp tự động hóa với kiểm tra thủ công.

## 1. Workflow 3 bước của paper

1. **Xác định các trang sách có khả năng ghép cặp** giữa hai nền tảng.
2. **Thu thập dữ liệu** từ các trang đã chọn.
3. **Làm sạch và pairing** dữ liệu Goodreads–Douban để tạo parallel dataset.

## 2. Vấn đề 1 — Book metadata không đơn giản

Cùng title + author chưa chắc là cùng một đơn vị dữ liệu:

- có thể là các volume khác nhau của một bộ;
- một work có nhiều edition;
- title thay đổi theo bản dịch;
- author name có nhiều dạng viết;
- metadata trên trang có thể sai hoặc thiếu.

Paper dùng *Animal Farm* làm ví dụ về việc một tác phẩm có nhiều tên dịch tiếng Trung khác nhau.

## 3. Vấn đề 2 — Metadata trên web có thể sai

Paper trình bày ví dụ các trang có thông tin bị gắn nhầm. Ý nghĩa phương pháp rất quan trọng:

> **Automated matching không đủ cho quality control khi metadata nguồn không đáng tin cậy.**

Vì thế, nhóm nghiên cứu kết hợp **human inspection + manual cleaning + computational processing**.

## 4. Vấn đề 3 — Truy vấn khác ngôn ngữ trả về kết quả khác

Case *Aloeswood Incense* cho thấy tìm bằng:

- simplified Chinese;
- traditional Chinese;
- English title;

có thể trả về số kết quả khác nhau trên Goodreads.

Nhóm nghiên cứu vì vậy thử nhiều dạng title, và khi cần còn dùng author name hoặc series name để tìm candidate match.

## 5. Checklist matching

Đây là checklist học tập được biên soạn từ workflow của paper:

- [ ] original title
- [ ] translated/common English title
- [ ] author name variants
- [ ] series/volume information
- [ ] publication/edition clues
- [ ] manual verification of candidate page
- [ ] record paired URLs
- [ ] record uncertainty / missing match

## 6. Bài tập tình huống

Bạn có 3 trang cùng tên một tiểu thuyết, nhưng khác publisher, year và translator. Hãy viết 5 câu hỏi cần kiểm tra trước khi quyết định ghép với một trang ở nền tảng khác.


---

# 05 — Rating, edition và chuẩn hóa so sánh

## 1. Khác biệt quan trọng nhất giữa Goodreads và Douban

### Goodreads

Trên nhiều trang sách, rating hiển thị được tổng hợp theo **“all editions”** của cùng một work. Rating cho một edition cụ thể có thể tồn tại, nhưng phân phối 1–5 sao cho edition riêng lẻ không phải lúc nào cũng có đầy đủ.

### Douban

Rating thường gắn với **từng edition**, trong khi tổng hợp “all editions” không có theo cách tương đương Goodreads.

## 2. Hệ quả

Không thể tạo một phép so sánh hoàn toàn đối xứng giữa “toàn bộ editions” của cùng work trên hai nền tảng.

Paper vì vậy thu hẹp sang:

- so sánh **most-rated / most-reviewed page** của cùng work;
- dùng **tỷ lệ phần trăm 1–5 sao** thay vì số tuyệt đối để giảm tác động của quy mô rating khác nhau.

## 3. Bài học về normalization

Normalization không phải “làm hai dataset giống nhau bằng mọi giá”. Nó là:

1. xác định khác biệt cấu trúc;
2. chọn một đơn vị so sánh thực tế;
3. công khai phần mất mát/thỏa hiệp;
4. dùng metric giảm lệch quy mô khi có thể.

## 4. Ví dụ Jane Eyre

Paper minh họa rằng Goodreads có thể hiển thị overall rating cho “all editions”, còn Douban hiển thị nhiều edition tiếng Trung với rating riêng.

Điều này khiến câu hỏi “Jane Eyre được đánh giá bao nhiêu?” trở thành câu hỏi về **data model**, không chỉ là một con số.

## 5. Câu hỏi kiểm tra

- Vì sao lấy rating trung bình của một trang Goodreads và một edition Douban có thể gây lệch?
- Tại sao phần trăm sao hữu ích hơn số lượng sao tuyệt đối khi hai nền tảng có quy mô khác nhau?


---

# 06 — “Classic” trên Douban khác gì Goodreads?

## 1. Ngôn ngữ xuất bản lần đầu của Douban classics

Trong 141 Douban classics:

- Chinese: **41%**
- Japanese: **11%**
- English: **26%**
- French: **9%**
- German: **4%**
- Russian: **2%**
- Bengali: **2%**
- Arabic, Spanish, Italian, Greek, Danish: mỗi nhóm khoảng **1%**

Tổng Chinese + Japanese là **73 tác phẩm, tương đương 52%**.

## 2. Genre

- **121/141 (86%)** là fiction.
- **20/141** là nonfiction.
- Historical fiction là nhóm lớn nhất, khoảng **18%**.
- Romance và manga: mỗi nhóm khoảng **11%**.
- Có **16 manga** trong Douban classics; paper đối chiếu rằng bộ 144 Goodreads classics không có manga.

## 3. Shared classics

Chỉ **23 tác phẩm** nằm trong cả hai tập classics.

Các shared classics này chủ yếu là tác phẩm nổi tiếng trong truyền thống Âu-Mỹ. Paper ghi nhận không có shared classic nào được first-published bằng tiếng Trung hoặc ngôn ngữ châu Á khác trong Table 2.

Mean rating của nhóm shared classics:

- Douban ≈ **4.37/5**
- Goodreads ≈ **4.08/5**

Trong Table 2, Douban rating cao hơn Goodreads ở hầu hết sách, với ngoại lệ được paper nêu là *Lolita*.

## 4. Schooling

Trong 141 Douban classics, **38 tác phẩm (27%)** xuất hiện trong ít nhất một nhóm danh sách đọc/syllabus giáo dục Trung Quốc mà nghiên cứu đối chiếu.

Paper đặt kết quả này bên cạnh nghiên cứu trước về Goodreads để cho thấy ảnh hưởng của schooling lên khái niệm classics có thể khác nhau giữa hai nền tảng.

## 5. Điều không nên suy diễn

Không nên biến kết quả này thành kết luận rằng một nền văn hóa “đọc tốt hơn” hay “có canon tốt hơn”. Paper mô tả **sự khác biệt của platform-based curation và reception**, không xếp hạng chất lượng văn hóa.

## Bài tập

Từ các con số trên, viết 3 câu mô tả khác biệt theo kiểu **descriptive** và 3 câu mà bạn cho là **overclaim**. Giải thích vì sao.


---

# 07 — Tags, ratings, distributions và Jensen–Shannon

## 1. So sánh tags

Paper so sánh tag clouds của ba nhóm:

- Douban-exclusive classics;
- Goodreads-exclusive classics;
- shared classics.

Một số quan sát:

- “literature”, “fiction”, “classic” phổ biến trên cả hai nền tảng;
- Goodreads thường thấy các tag như “gothic”, “historical fiction”, và các tag liên quan “academic/school”;
- “martial arts” và “manga” nổi bật trong nhóm Douban-exclusive;
- “WuXia” là ví dụ cho thấy một category văn hóa có thể bị biểu diễn khác nhau khi chuyển qua hệ thống tag của nền tảng khác.

## 2. Rating trung bình chưa đủ

Phần lớn overall ratings trong nghiên cứu tập trung khoảng **3.8–4.7/5**. Paper quan sát Douban ratings nhìn chung cao hơn Goodreads trong các nhóm so sánh.

Nhưng một average rating gần nhau không có nghĩa cộng đồng đánh giá giống nhau.

## 3. Case study: Who Moved My Cheese?

### Douban

- overall: **7.6/10 = 3.8/5**
- 5 sao: **26.4%**
- 4 sao: **39.9%**
- 3 sao: **27.8%**

### Goodreads

- overall: **3.86/5**
- 5 sao: **35%**
- 4 sao: **30%**
- 3 sao: **21%**
- 2 sao: **7%**
- 1 sao: **4%**

Hai overall ratings chỉ chênh khoảng **0.06**, nhưng hình dạng phân phối khác đáng kể. Đây là lý do paper phân tích star-wise distributions.

## 4. Jensen–Shannon

Paper dùng **Jensen–Shannon distance** (square root of Jensen–Shannon divergence) từ SciPy để lượng hóa khác biệt giữa hai phân phối 1–5 sao.

Mean Jensen–Shannon distance:

- Douban-exclusive: **0.200**
- Goodreads-exclusive: **0.201**
- Shared classics: **0.208**

Paper nhấn mạnh JSD/Jensen–Shannon distance có tính đối xứng và hữu hạn, thuận tiện hơn Kullback–Leibler divergence cho mục tiêu so sánh hai phân phối.

## 5. Tư duy phân tích

Khi đánh giá reception, hãy hỏi theo thứ tự:

1. average rating có khác không?
2. distribution có khác không?
3. sample size có đủ tương xứng không?
4. đơn vị rating là edition hay all editions?
5. platform context có giải thích một phần khác biệt không?

## Bài tập

Giải thích trong 5–7 câu tại sao **3.80 vs 3.86** không đủ để kết luận hai cộng đồng phản ứng gần như giống nhau với *Who Moved My Cheese?*.


---

# 08 — Review volume, quy mô cộng đồng và case study

## 1. Số rating

Paper cho biết một classic trung bình nhận khoảng **440.000 ratings nhiều hơn trên Goodreads** trong dữ liệu so sánh, mặc dù các Douban-exclusive works xuất bản đầu tiên bằng Chinese/Japanese thường có lợi thế ngược lại trên Douban.

Tác giả thảo luận rằng quy mô rating lớn hơn có thể đi cùng độ phân tán quan điểm lớn hơn, nhưng đây là một **khả năng giải thích**, không phải causal proof.

## 2. Số review

Figure 12 định nghĩa chênh lệch là:

> `Goodreads review count − Douban review count`

Mean differences theo figure:

- shared classics: khoảng **+6,041**
- Douban-exclusive classics: khoảng **−9,512**
- Goodreads-exclusive classics: khoảng **+16,415**

Dấu âm ở nhóm Douban-exclusive nghĩa là nhóm này trung bình có nhiều reviews hơn trên Douban.

## 3. Hai ví dụ cực trị

### The Alchemist

- Goodreads: **92,829 reviews**
- Douban: **2,970 reviews**

### To Live — Yu Hua

- Douban: **169,574 reviews**
- Goodreads: **1,343 reviews**

Hai ví dụ cho thấy **platform popularity** có thể đảo chiều rất mạnh tùy tác phẩm và cộng đồng.

## 4. Case study về convergence

Paper cũng đưa *A Global History: From Prehistory to the 21st Century* làm ví dụ có rating overall và star distributions tương đối gần nhau giữa hai nền tảng.

## 5. Cách diễn giải an toàn

Không nên nói:

> “Người dùng nền tảng A thích sách hơn nền tảng B.”

Nên nói:

> “Trong dataset và phép đối sánh của nghiên cứu, rating/review volume cho nhóm tác phẩm X có xu hướng khác theo nền tảng; khác biệt có thể liên quan đến quy mô cộng đồng, mức độ quen thuộc của tác phẩm, edition aggregation và bối cảnh nền tảng.”

## Bài tập

Viết một đoạn 120 từ mô tả *To Live* chỉ dựa trên review counts nêu trên, tránh suy diễn động cơ của người dùng.


---

# 09 — Hạn chế, bài học phương pháp và hướng nghiên cứu

## 1. Ba thách thức phương pháp trung tâm

Paper kết luận ba nhóm thách thức chính khi tạo parallel cross-platform dataset:

1. **Metadata complexity + data quality**
2. **Khác biệt information organization giữa nền tảng**
3. **Pitfalls của xử lý dữ liệu văn hóa đa ngôn ngữ**

## 2. Hạn chế của nghiên cứu

Các dataset bị giới hạn bởi:

- dữ liệu mà mỗi nền tảng công khai;
- khả năng ghép cặp work/page;
- khác biệt edition aggregation;
- search behavior theo ngôn ngữ;
- tính không hoàn hảo của bibliographic control;
- khác biệt user base và platform context.

## 3. Bài học lớn: đừng ép “apples-to-apples” khi dữ liệu không cho phép

Paper đặt câu hỏi rất thực tế: nếu không thể làm so sánh hoàn toàn đối xứng, làm sao dùng dữ liệu hạn chế một cách đáng tin cậy?

Một câu trả lời phương pháp từ chính workflow của nghiên cứu là:

- công khai khác biệt;
- thu hẹp đơn vị so sánh;
- dùng manual verification khi cần;
- chọn metric phù hợp;
- diễn giải có bối cảnh nền tảng.

## 4. Hướng nghiên cứu tiếp theo

Tác giả đề xuất:

- mở rộng sang các nền tảng/ngôn ngữ khác;
- xây multilingual parallel book-review datasets;
- kết hợp platform studies và sociotechnical systems;
- nghiên cứu vai trò của **paratexts** và **translations**;
- kết hợp computational methods với book history/bibliography;
- phân tích các edition khác nhau của cùng work.

## 5. Tổng kết khóa lý thuyết

Cross-platform cultural data không chỉ là bài toán merge hai bảng. Nó là bài toán đồng thời của:

```text
bibliography
+ platform design
+ metadata quality
+ multilingual matching
+ statistical comparison
+ cultural interpretation
```

Đó là lý do paper dùng cả kiểm tra thủ công lẫn xử lý tính toán.


---

# 10 — Lab: Phân tích 23 shared classics

## Dữ liệu

Dùng file:

`../data/shared_classics_23.csv`

Dữ liệu được chép lại từ **Table 2** của paper: 23 tác phẩm được xem là classics trên cả Douban và Goodreads.

## Nhiệm vụ A — Kiểm tra mean rating

1. Tính mean `douban_rating`.
2. Tính mean `goodreads_rating`.
3. Tạo cột `rating_diff = douban_rating - goodreads_rating`.
4. Tính mean `rating_diff`.

Kết quả kỳ vọng gần:

- Douban ≈ **4.37**
- Goodreads ≈ **4.08**
- mean difference ≈ **+0.30**

## Nhiệm vụ B — Tìm ngoại lệ

1. Lọc sách có `rating_diff < 0`.
2. Xác định tác phẩm có Goodreads rating cao hơn Douban.
3. Đối chiếu với nhận xét của paper.

## Nhiệm vụ C — Nhóm theo language

1. Đếm số shared classics theo `language_first_publication`.
2. Giải thích vì sao kết quả này **không đại diện cho toàn bộ classics của thế giới**.

## Nhiệm vụ D — Viết insight đúng chuẩn

Viết 5 insight, mỗi insight phải có:

- **fact**: con số trong dữ liệu;
- **scope**: chỉ 23 shared classics;
- **interpretation**: không vượt quá dữ liệu;
- **limitation**: edition/platform structure.

## Mẫu insight tốt

> Trong 23 shared classics ở Table 2, Douban rating trung bình cao hơn Goodreads khoảng 0.30 điểm trên thang 5. Kết quả mô tả nhóm tác phẩm được cả hai cộng đồng xem là classics; nó không chứng minh Douban users “dễ tính hơn”, vì hai nền tảng tổ chức dữ liệu edition và có user base khác nhau.

## Thử thách nâng cao

Nếu dùng Python/pandas, tạo:

- histogram của `rating_diff`;
- bảng sort theo chênh lệch;
- summary theo language.

Phần code là bài tập thực hành do khóa học biên soạn; paper không cung cấp notebook tái hiện trong tài liệu nguồn này.


---

# 11 — Project cuối khóa: Thiết kế nghiên cứu book-review cross-platform

## Yêu cầu

Thiết kế một mini research proposal 2–4 trang Markdown cho hai nền tảng bạn chọn.

## Deliverables

### 1. Research question

Ví dụ cấu trúc:

> “Cách người dùng trên Platform A và Platform B tiếp nhận cùng một nhóm sách X khác nhau như thế nào?”

### 2. Unit of analysis

Phải nêu rõ:

- work hay edition?
- book page hay aggregated work?
- review, rating, tag hay cả ba?

### 3. Matching strategy

Nêu cách xử lý:

- translation titles;
- author aliases;
- edition/version;
- series/volume;
- manual verification.

### 4. Comparison metrics

Chọn tối thiểu 3:

- overall rating;
- star distribution;
- number of ratings;
- number of reviews;
- genre/tag frequencies.

### 5. Bias & limitation section

Bắt buộc có ít nhất 5 rủi ro.

### 6. Interpretation rule

Viết trước 3 nguyên tắc chống overclaim, ví dụ:

- không suy diễn causal từ chênh lệch rating;
- không xem platform users là đại diện cho một quốc gia;
- không xem edition data là tương đương work-level data.

## Rubric 20 điểm

| Hạng mục | Điểm |
|---|---:|
| Research question rõ | 3 |
| Data provenance | 3 |
| Matching design | 4 |
| Metrics phù hợp | 3 |
| Bias/limitations | 4 |
| Interpretation discipline | 3 |


---

# 12 — Quiz tổng kết

## Phần A — Trắc nghiệm

**1. Paper dùng định nghĩa nào cho “classic”?**  
A. Danh sách canon do học giả xác định  
B. Tác phẩm đoạt giải lớn  
C. Tác phẩm được người dùng/nền tảng nhận diện là classics theo tiêu chí dữ liệu của nghiên cứu  
D. Sách xuất bản trước 1950

**2. Bộ dữ liệu gồm bao nhiêu classics?**  
A. 144 Douban + 141 Goodreads  
B. 141 Douban + 144 Goodreads  
C. 250 + 250  
D. 23 + 23

**3. Có bao nhiêu shared classics?**  
A. 7  
B. 16  
C. 23  
D. 38

**4. Khác biệt data organization chính là gì?**  
A. Goodreads chỉ có 10-point scale  
B. Douban không có rating  
C. Goodreads thường aggregate all editions, Douban thường rating theo edition  
D. Hai nền tảng giống hệt nhau

**5. Vì sao paper dùng star percentages?**  
A. Để tăng rating  
B. Để giảm tác động của khác biệt tổng số ratings giữa nền tảng  
C. Vì không có overall rating  
D. Vì 5-star luôn đáng tin hơn

**6. Who Moved My Cheese? minh họa điều gì?**  
A. Rating trung bình giống nhau bảo đảm distribution giống nhau  
B. Average gần nhau nhưng distribution sao có thể khác  
C. Goodreads không có review  
D. Douban không có 1-star

**7. Paper dùng metric nào cho khác biệt phân phối?**  
A. RMSE  
B. BLEU  
C. Jensen–Shannon distance  
D. F1

**8. Bao nhiêu Douban classics là fiction?**  
A. 23  
B. 38  
C. 121  
D. 141

## Phần B — Tự luận ngắn

1. Giải thích 3 thách thức khi xây parallel dataset.
2. Vì sao multilingual matching cần manual inspection?
3. Tại sao review count không thể tự động biến thành kết luận về “chất lượng sách”?
4. Trình bày một ví dụ cho thấy platform context quan trọng.
5. Viết một limitation nếu bạn mở rộng nghiên cứu sang Amazon và Goodreads.


---

# 13 — Đáp án và gợi ý chấm

## Phần A

1. **C**
2. **B**
3. **C**
4. **C**
5. **B**
6. **B**
7. **C**
8. **C**

## Phần B — Gợi ý

### 1. Ba thách thức

Cần có đủ:

- metadata complexity / quality;
- khác biệt information organization / rating system;
- multilingual & cross-platform processing.

### 2. Multilingual matching

Cần nhắc đến title variants, translated titles, encoding/name variants, search results khác nhau theo query và khả năng metadata sai.

### 3. Review count

Review count phản ánh mức độ hoạt động/hiện diện trên nền tảng và quy mô cộng đồng; không phải thước đo trực tiếp của chất lượng.

### 4. Platform context

Có thể dùng:

- Goodreads school/academic tags;
- Douban manga/WuXia;
- khác biệt edition aggregation;
- khác biệt review volume của *To Live* hoặc *The Alchemist*.

### 5. Amazon–Goodreads

Câu trả lời tốt phải đề cập ít nhất một khác biệt về user intent, data availability, review/rating system, product/edition structure hoặc platform moderation.

> Lưu ý: ví dụ Amazon–Goodreads là bài tập mở rộng do khóa học biên soạn; đáp án không được paper kiểm chứng trực tiếp trong nghiên cứu này.


---

# Glossary

| Thuật ngữ | Nghĩa trong khóa học |
|---|---|
| classic | tác phẩm được cộng đồng/nền tảng nhận diện là “classic” theo tiêu chí nghiên cứu |
| user-curated | được hình thành từ hành vi/tag/list của người dùng |
| work | tác phẩm trí tuệ, có thể có nhiều edition/version |
| edition | một ấn bản cụ thể của work |
| all editions | dữ liệu được nền tảng tổng hợp qua nhiều edition |
| parallel dataset | dataset có các item được căn chỉnh giữa hai nguồn/nền tảng |
| metadata | title, author, edition, publication, language… |
| tag | nhãn người dùng/nền tảng gắn cho sách |
| overall rating | điểm rating trung bình |
| star-wise distribution | tỷ lệ rating theo từng mức 1–5 sao |
| JSD | Jensen–Shannon divergence; paper dùng Jensen–Shannon distance từ SciPy |
| reception | cách một tác phẩm được cộng đồng đọc tiếp nhận/đánh giá |
| platform context | đặc điểm user base, interface, data model, tagging, rating, moderation… của nền tảng |
| bibliographic control | mức độ kiểm soát/chuẩn hóa quan hệ giữa work, edition và metadata |
| paratext | các yếu tố bao quanh văn bản chính như bìa, lời giới thiệu, chú giải…; paper nêu đây là hướng nghiên cứu tiếp theo |


---

# Cheat sheet — Key findings

## Dataset

- 144 Goodreads classics
- 141 Douban classics
- 23 shared classics

## Douban classics

- 52% first-published in Chinese + Japanese
- 86% fiction
- 16 manga
- 38/141 (27%) xuất hiện trong ít nhất một syllabus list được đối chiếu

## Shared classics

- mean Douban rating ≈ 4.37
- mean Goodreads rating ≈ 4.08
- phần lớn là European/American literature trong Table 2

## Rating distributions

- overall ratings chủ yếu 3.8–4.7
- *Who Moved My Cheese?*: overall gần nhau nhưng star distributions khác
- Jensen–Shannon distance mean: 0.200 / 0.201 / 0.208 theo ba nhóm

## Reviews

- *The Alchemist*: 92,829 Goodreads vs 2,970 Douban
- *To Live*: 169,574 Douban vs 1,343 Goodreads

## Method

- manual + computational processing
- match nhiều title/language variants
- không thể đồng nhất hoàn toàn edition structure
- dùng percentage distributions để giảm lệch do sample size
