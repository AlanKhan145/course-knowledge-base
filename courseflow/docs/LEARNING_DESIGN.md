# CourseFlow — Thiết kế học tập dựa trên bằng chứng

Ngày soạn: 12/11/2026. Phạm vi: biến CourseFlow từ "đọc và đánh dấu" thành ứng dụng giúp nhớ lâu và học đúng cách. Đường dẫn khóa học tính từ `D:\Sao lưu\Udemy\Khóa học\` (chỉ đọc). Ký hiệu † = số liệu lấy từ bản tóm tắt thứ cấp, chưa đối chiếu bản gốc.

## 0. Năm khuyến nghị hàng đầu

1. **Lịch ôn từng câu hỏi (FSRS-lite) và trang "Ôn tập hôm nay"** thay cho ôn ngẫu nhiên (P0). Truy hồi và giãn cách là hai kỹ thuật duy nhất được Dunlosky 2013 xếp "hữu ích cao" cho mọi lứa tuổi và nhiều loại tài liệu.
2. **Chọn mức tự tin trước khi lộ đáp án**, rồi quy đổi thành điểm lập lịch và biểu đồ hiệu chỉnh (P0 phần chọn mức, P1 phần biểu đồ). Người học thường đánh giá sai cách học nào hiệu quả.
3. **Cổng chất lượng câu hỏi**: loại câu hỏi mẫu lặp, đánh dấu thẻ gây quên (P0). Khảo sát nhanh cho thấy một số khóa có cùng một câu hỏi ở gần như mọi bài, sẽ làm hỏng bộ lập lịch.
4. **Câu hỏi trước bài, giải thích bằng lời mình, ôn trộn có điều kiện** (P1), tất cả chạy trên dữ liệu ghi chú và quiz sẵn có.
5. **Mẫu bài Markdown theo thứ tự** mục tiêu, câu đoán trước, ví dụ có lời giải, bài hoàn thiện, bài tự làm, câu hỏi truy hồi, tổng kết (mục 6). Đây là việc của tác giả nhưng quyết định chất lượng đầu vào cho mọi tính năng trên.

## 1. Kho học liệu cho thấy gì

**Khoảng trống.** Đã quét `README.md` (1.607 dòng) với khoảng 40 từ khóa (học tập, tự học, ghi nhớ, trí nhớ, tư duy, phản biện, siêu nhận thức, Feynman, Anki, speed reading, logic…). Kho **không có khóa chuyên về "học cách học", tư duy phản biện, logic hay siêu nhận thức**. Chỉ có các khóa liên quan gián tiếp dưới đây. Gợi ý: soạn một khóa nhỏ "Học cách học" từ chính tài liệu mục 2 (P2, chi phí thấp).

| Nguồn trong kho | Kỹ thuật cụ thể | File |
|---|---|---|
| 5 khóa nghiên cứu học ngoại ngữ, `06 - Ngôn ngữ/09 - Nghiên cứu học ngôn ngữ/` | Truy hồi hơn học lại; thẻ ba chiều (nhớ nghĩa, nhớ từ, tự đặt câu); ôn 1–3–7–14 ngày; đơn vị là cụm từ chứ không phải từ lẻ; Anki chỉ là bộ lập lịch, không phải toàn bộ phương pháp; giảm dần hỗ trợ (caption đầy đủ, rồi từ khóa, rồi không); nhật ký lỗi; đo nhớ trễ sau 1/3/7/14 ngày | `language-learning-research/02_french/03_retrieval_practice_french_words.md`, `01_english/02_spaced_collocations.md`, `03_japanese/02_anki_spaced_kanji_2026.md`, `00_overview/02_8_week_study_protocol.md`, `captioning-video-comprehension/04_thao_luan_ung_dung/11_pedagogical_implications.md` |
| `incidental-vocabulary-meta-analysis` | Học giãn cách vượt học dồn ở bài kiểm tra trễ (g = 1,71 so với 0,58); không biến trung bình nghiên cứu thành lời hứa cá nhân | `module-02/05-material-spacing.md`, `module-05/15-conclusion-study-plan.md` |
| `audiovisual-input-l2` | Không có quy tắc "càng nhiều càng tốt"; dùng hỗ trợ như giàn giáo | `04-application/01-ung-dung-cho-nguoi-tu-hoc.md` |
| `japanese-in-14-weeks-with-scientific-memorization-method` | Ôn sau 1, 3, 7 ngày; nói hoặc viết không nhìn mẫu; ghi lỗi lặp | `01-Week 0 Introduction and Course Instructions/UD597-S01-L003-Week-0-Course-Instruction.md` |
| `00-LO-TRINH-TONG-HOP-5-KY-NANG.md` | Một giờ xem đi kèm một giờ tự làm; ôn tuần; kiểm tra ra trường mỗi giai đoạn; lỡ ngày thì bù hôm sau, không bù gộp | mục 3 và mục 5 |
| Video "Mở khóa tự học" (`D:\Sao lưu\Udemy\Mo_khoa_tu_hoc_47_slide_audio_loi_thoai\`) | Mục tiêu, lộ trình 5 phần, sơ đồ quyết định 3 bước, "sửa lỗi để ghi nhớ", test chớp nhoáng cuối bài | `Slide_03`, `Slide_04`, `Slide_24`–`27`, `Slide_34`, `Slide_35` |
| `complete-willpower-course-build-self-control-good-habits` | Việc dễ trước, việc khó sau (thân bài là mẫu ngoại hình, xem dưới) | `04-Part II Develop Strong Habits/UD793-S04-L006-…md`, `L007-…md` |

**Phát hiện chất lượng (mẫu hai khóa, chưa quét toàn kho).**
- Ở khóa Nhật 14 tuần, 72/87 file có chung câu "Cách học từ vựng nào hiệu quả hơn?". Câu hỏi chỉ khác tên bài đặt trong dấu “…”.
- Ở khóa Willpower, 179/179 bài chứa cùng đoạn "vóc dáng, màu da…" (mẫu ngoại hình dán vào khóa thói quen) và cùng câu hỏi đầu "Yếu tố nào thường tạo khác biệt lớn nhất cho hình ảnh…".
- Toàn kho có 500.316 câu hỏi nhưng `reports/SURVEY.md` cho thấy `duplicate-title` 791 và `duplicate-content` 18, chưa có lỗi "câu hỏi mẫu lặp".
- Hệ quả: nếu lập lịch từng câu mà không lọc, hàng đợi sẽ đầy câu chung chung và vô nghĩa về mặt học. Đây là lý do mục F3 là P0.

## 2. Bằng chứng khoa học

| Kỹ thuật | Kết luận chính | Nguồn |
|---|---|---|
| Truy hồi (testing effect) | Kiểm tra thắng học lại ở độ trễ 2 ngày và 1 tuần, dù học lại làm người học tự tin hơn. Meta-analysis g ≈ 0,50†, tăng khi có phản hồi (0,73 so với 0,39†) và với tự nhớ hơn nhận diện† | Roediger & Karpicke 2006, *Test-Enhanced Learning*, https://psychology.ecu.edu/wp-content/pv-uploads/sites/216/2019/03/Roediger-Karpicke-2006.pdf ; Rowland 2014, https://pubmed.ncbi.nlm.nih.gov/25150680/ |
| Xếp hạng kỹ thuật | Truy hồi và giãn cách: hữu ích cao. Hỏi "vì sao", tự giải thích, ôn trộn: vừa. Tóm tắt, tô sáng, đọc lại, gợi nhớ bằng từ khóa: thấp | Dunlosky et al. 2013, https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html (DOI 10.1177/1529100612453266) |
| Giãn cách | Khoảng cách tối ưu tăng theo thời gian cần nhớ; tối ưu khoảng 20–40% thời gian giữ ở mốc 1 tuần và giảm dần theo tỉ lệ khi giữ lâu hơn | Cepeda 2006 (839 phép đo/317 thí nghiệm), https://pubmed.ncbi.nlm.nih.gov/16719566/ ; Cepeda 2008, https://pubmed.ncbi.nlm.nih.gov/19076480/ |
| Ôn trộn | g ≈ 0,42 chung, 0,34 cho toán†. Hiệu quả mạnh khi các loại giống nhau giữa nhóm và khó phân biệt; **không có lợi, thậm chí âm, với văn bản diễn giải (g = 0,21 không ý nghĩa) và từ vựng (g = −0,39)†**. Toán lớp 7: d = 0,42 ngay và 0,79 sau 30 ngày | Brunmair & Richter 2019, https://pubmed.ncbi.nlm.nih.gov/31556629/ ; Rohrer et al. 2015, https://doi.org/10.1037/edu0000001 |
| Khó đúng mức | Khó chỉ có ích khi vẫn thành công được; đừng đánh đồng "khó" với "tốt" | Bjork & Bjork 2011, https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/04/EBjork_RBjork_2011.pdf |
| Ảo giác hiểu biết | Hơn 80% người học cho rằng học theo khối ít nhất ngang học trộn, nhưng chỉ 15% làm bài tốt hơn ở điều kiện khối | Kornell & Bjork 2008, https://pubmed.ncbi.nlm.nih.gov/18578849/ |
| Hiệu chỉnh | Quá tự tin khiến dừng học sớm | Dunlosky & Rawson 2012, *Overconfidence produces underachievement*, https://scholarhub.vn/publication/Overconfidence-produces-underachievement-Inaccurate-self-evaluations-undermine-students-learning-and-retention/018938e3-b9b9-4d52-9bc1-a776d8c4a773 |
| Sai mà chắc (hypercorrection) | Lỗi sai với độ tự tin cao được sửa tốt hơn sau phản hồi | Butterfield & Metcalfe 2001, https://en.wikipedia.org/wiki/Hypercorrection_(psychology) (tóm tắt, dẫn bài gốc JEP:LMC 27(6)) |
| Chấm theo độ chắc chắn | Mức 1/2/3 với điểm phạt 0/−2/−6 làm việc khai thật có lợi; mức chuẩn khoảng 50/70/90% | Gardner-Medwin, https://docs.moodle.org/311/en/Using_certainty-based_marking |
| Câu hỏi trước bài | Thử trả lời trước khi học, kể cả sai, tăng điểm kiểm tra sau; khoảng 10%† trong thí nghiệm văn bản; chủ yếu kiến thức sự kiện | Richland, Kornell & Kao 2009, https://learninglab.uchicago.edu/Pre-Testing_files/RichlandKornellKao.pdf ; https://www.scientificamerican.com/article/the-pluses-of-getting-it-wrong/ |
| Tự giải thích | g = 0,55† trên 64 báo cáo, phần lớn là sinh viên đại học | Bisra et al. 2018, https://www.bps.org.uk/research-digest/self-explanation-powerful-learning-technique-according-meta-analysis-64-studies |
| Ví dụ có lời giải | Giảm tải nhận thức cho người mới; g ≈ 0,43† trong toán, số nghiên cứu các nguồn không thống nhất. **Đảo chiều theo trình độ**: hỗ trợ thừa làm hại người đã thạo | Sweller 1988, https://doi.org/10.1207/s15516709cog1202_4 ; Barbieri et al. 2023, https://link.springer.com/content/pdf/10.1007/s10648-023-09745-1.pdf ; https://en.wikipedia.org/wiki/Expertise_reversal_effect |
| Chữ và hình | Giải thích bằng cả lời và hình tốt hơn chỉ lời; cũng đừng nhầm với "tạo hình ảnh trong đầu khi đọc", Dunlosky xếp thấp | Mayer & Moreno 2002, https://www.sfu.ca/~jcnesbit/EDUC220/ThinkPaper/MayerMoreno2002.pdf |
| "Phong cách học" | Không đủ bằng chứng để cá nhân hóa theo phong cách; **không xây tính năng VAK** | Pashler et al. 2008, https://digitalcommons.usf.edu/psy_facpub/1765/ |
| Thói quen | Trung vị 66 ngày nhưng dao động 18–254; bỏ lỡ một dịp không ảnh hưởng đáng kể; mẫu 39 người, chưa nhân bản | Lally et al. 2010, https://www.ucl.ac.uk/news/2009/aug/how-long-does-it-take-form-habit ; https://bps.org.uk/research-digest/how-form-habit |
| Kế hoạch "nếu–thì" | d ≈ 0,65 (2006), nhưng ước lượng hiệu chỉnh thiên lệch 2024 chỉ 0,15–0,35†: hiệu quả nhỏ đến vừa | https://www.thebehavioralscientist.com/glossary/implementation-intentions |
| Mẫu tối đen | Nhắc dai, hành động ép buộc, che thông tin là các kiểu dark pattern | Gray et al. 2018, https://doi.org/10.1145/3173574.3174108 |

## 3. Sản phẩm hiện đại làm tốt điều gì (tính năng, không phải giao diện)

- **Anki**: mức nhớ mong muốn mặc định 90%, khuyên dưới 97%; bước học ngắn hơn 1 ngày; giới hạn thẻ mới và số lượt ôn mỗi ngày; thẻ gây quên mặc định sau 8 lần sai thì gắn nhãn và treo, cách xử lý là viết lại cho nhỏ hơn; tối ưu tham số khi có vài trăm lượt ôn. https://docs.ankiweb.net/deck-options.html ; https://docs.ankiweb.net/leeches.html
- **RemNote**: thẻ nằm ngay trong ghi chú, FSRS v6 hoặc SM-2, sửa tay hạn ôn, lịch theo ngày thi. https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm ; https://www.remnote.com/feature/spaced-repetition
- **Obsidian Spaced Repetition**: thẻ viết bằng Markdown thuần (`hỏi::đáp`), bộ bài theo tag, lịch ghi vào chú thích HTML trong chính ghi chú. https://www.stephenmwangi.com/obsidian-spaced-repetition/ . CourseFlow **không nên** ghi lịch vào Markdown vì kho chỉ đọc và đang dưới Git.
- **Duolingo**: Half-Life Regression dự đoán độ nhớ, giảm lỗi hơn 45% so với các mốc so sánh và tăng 12% mức tương tác hằng ngày theo bài báo; có phê bình độc lập cho rằng sức dự báo trên dữ liệu công bố rất thấp. https://aclanthology.org/P16-1174/ ; https://papousek.github.io/analysis-of-half-life-regression-model-made-by-duolingo.html . Chuỗi ngày: số liệu hiệu quả chủ yếu từ nguồn thứ cấp, chưa xác minh. https://blog.duolingo.com/duolingo-streak-research/
- **Brilliant**: đặt câu hỏi hay tình huống trước, giải thích sau. https://brilliant.org/resources/choosing-brilliant/how-brilliant-teaches-math/
- **Coursera**: câu hỏi luyện tập không chấm điểm ngay trong video, được thử lại nhiều lần. https://www.vanderbilt.edu/bold/?p=286 ; https://blog.coursera.org/how-to-integrate-mastery-learning-into-course-design
- Trình soạn thảo kiểu Notion: chưa tra nguồn; chỉ gợi ý dùng khối thu gọn (toggle) để ẩn đáp án và lời giải.

## 4. Đặc tả bộ lập lịch (FSRS-lite)

### 4.1 Vì sao FSRS

SM-2 (EF khởi đầu 2,5, khoảng 1 ngày, 6 ngày, rồi nhân EF; sàn 1,3; https://super-memory.com/english/ol/sm2.htm) dễ hiểu nhưng FSRS ước lượng độ nhớ theo ba đại lượng và, theo tài liệu FSRS, cần ít hơn 20–30% lượt ôn để đạt cùng mức nhớ (mô phỏng, do cộng đồng FSRS công bố, https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS). Leitner (hộp 1/3/5 ngày, đúng thì lên hộp, sai thì về hộp 1; https://en.wikipedia.org/wiki/Leitner_system) chỉ làm phương án dự phòng. Công thức dưới đây là FSRS-6 với tham số mặc định, kiểm tra theo wiki thuật toán https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm và mã nguồn https://raw.githubusercontent.com/open-spaced-repetition/py-fsrs/main/fsrs/scheduler.py . Tự cài khoảng 80 dòng TypeScript, dùng `ts-fsrs` (MIT, https://github.com/open-spaced-repetition/ts-fsrs ) làm chuẩn đối chiếu trong test, vì bản v6 của nó đòi Node ≥ 24.

### 4.2 Trạng thái lưu cho mỗi câu hỏi (chỉ tạo khi câu đó được trả lời lần đầu)

```ts
interface CardState {
  key: string;        // `${lessonId}:${promptHash}` (bỏ phần qN vì đổi khi sửa thứ tự)
  contentHash: string; // băm cả lời giải, để phát hiện bài đã sửa
  courseId: string; lessonId: string; type: QuestionType;
  due: number;         // epoch ms
  stability: number;   // S, ngày, ≥ 0.001
  difficulty: number;  // D, 1..10
  reps: number;        // số lần ôn đạt (grade ≥ 2), tính một lần mỗi ngày
  lapses: number;      // số lần grade = 1 khi đang ở trạng thái ôn
  lastReview: number;  // epoch ms
  state: "review" | "relearning";
  suspended?: boolean; // gồm thẻ gây quên (lapses ≥ 8)
}
interface ReviewLog { ts; key; grade: 1|2|3|4; conf: 1|2|3; score: number; ms: number; R: number; S: number; D: number; mode: "due"|"free"|"lesson" }
```

### 4.3 Công thức (w0..w20 = FSRS-6 mặc định)

`w = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542]`

- Hằng số: `DECAY = −w20 = −0.1542`, `FACTOR = 0.9^(1/DECAY) − 1 = 0.9803`.
- Độ nhớ hiện tại: `R(t,S) = (1 + FACTOR·t/S)^DECAY`, t tính theo ngày từ `lastReview`. R(S,S) = 0,9.
- Khoảng ôn: `I(r,S) = S/FACTOR · (r^(1/DECAY) − 1)`, r = mức nhớ mong muốn (mặc định 0,90, cho chỉnh 0,80–0,95). Làm tròn, tối thiểu 1 ngày, tối đa 180 ngày (mặc định FSRS là 36.500; ngắn hơn cho kho học liệu 1 năm, và câu trắc nghiệm nhận diện nhớ dễ hơn tự nhớ). Thêm nhiễu ±5% khi khoảng ≥ 3 ngày.
- Lần đầu (grade G): `S0 = w[G−1]` (0,212; 1,29; 2,31; 8,30 ngày); `D0(G) = clamp(w4 − e^{w5·(G−1)} + 1, 1, 10)`.
- Độ khó: `ΔD = −w6·(G−3)`; `D' = D + ΔD·(10−D)/9`; `D'' = clamp(w7·D0_raw(4) + (1−w7)·D', 1, 10)`.
- Ôn đạt (G ≥ 2): `S' = S·(1 + e^{w8}·(11−D)·S^{−w9}·(e^{w10(1−R)} − 1)·H·E)`, với H = w15 nếu G = 2 (phạt Hard), E = w16 nếu G = 4 (thưởng Easy), còn lại bằng 1.
- Quên (G = 1): `S' = min( w11·D^{−w12}·((S+1)^{w13} − 1)·e^{w14(1−R)}, S / e^{w17·w18} )`; `lapses += 1`; `state = "relearning"`.
- Ôn lại trong cùng ngày: `S' = S·e^{w17(G−3+w18)}·S^{−w19}` (nếu G ≥ 2 thì hệ số tối thiểu 1); không tăng `reps`; `lapses` chỉ tăng tối đa một lần mỗi ngày.
- Ngày học bắt đầu lúc 04:00 giờ địa phương; "đến hạn" nghĩa là `due ≤` cuối ngày học hiện tại.

### 4.4 Quy đổi từ kết quả quiz và độ tự tin sang grade

Đầu vào: `score` (0..1 từ `grade.ts`), `conf` ∈ {1 "Đoán", 2 "Khá chắc", 3 "Chắc chắn"} chọn **trước** khi nộp, `type`, `reps`.

| Điều kiện | Grade |
|---|---|
| Sai (score < 0,5) | 1 (Again). Nếu `conf = 3`: gắn cờ "sai mà chắc", mở sẵn lời giải, hỏi lại trong phiên sau ≥ 3 thẻ |
| Đúng một phần (0,5 ≤ score < 1, câu nhiều đáp án) | 2 (Hard) |
| Đúng, `conf = 1` | 2 (Hard): có thể là đoán |
| Đúng, `conf = 2` | 3 (Good) |
| Đúng, `conf = 3` | 3 (Good); lên 4 (Easy) chỉ khi `type` ∈ {fill_blank, short_answer, ordering, matching} và `reps ≥ 2` |
| Tự chấm (short_answer không có `accept`) | Đúng / một phần / sai tương ứng 3 / 2 / 1, vẫn kết hợp `conf` |
| Lần đầu thấy câu hỏi trong 1 giờ sau khi đọc bài | Tối đa 3 (Good): kiểm tra tức thì không phản ánh trí nhớ dài hạn (Roediger & Karpicke 2006) |

Đúng/Sai có xác suất đoán 50%, nên `conf = 1` luôn cho Hard. Đây là đặc tả đề xuất, **chưa kiểm chứng thực nghiệm**; phải đối chiếu độ nhớ thực với mục tiêu bằng nhật ký ôn (mục F4).

### 4.5 Ví dụ số (mô phỏng bằng chính công thức trên, ôn đúng hạn, mức nhớ 0,90)

| Chuỗi | Các khoảng ôn kế tiếp (ngày) |
|---|---|
| Good ×6 | 2 → 11 → 46 → 163 → 180 → 180 |
| Good, Good, Again, Good ×3 | 2 → 11 → (quên: S = 1,5; D = 7,4) 2 → 5 → 12 → 28 |
| Hard, Hard, Hard, Good ×2 | 1 → 3 → 7 → 15 → 32 |
| Easy ×3 (chỉ sau điều kiện 4.4) | 8 → 66 → 180 |

Mặc định chưa tối ưu theo dữ liệu của bạn, nên khoảng với thẻ "dễ" tăng rất nhanh; cần mức trần 180 ngày và kiểm tra sau 300 lượt ôn đúng hạn: nếu tỉ lệ nhớ thực < 85% thì gợi ý nâng mức mong muốn lên 0,93 (không tự đổi). Tối ưu tham số từ nhật ký là P2.

### 4.6 Hàng đợi "Ôn tập hôm nay"

1. Lấy thẻ đến hạn, sắp theo `R` hiện tại tăng dần (quên nhiều nhất trước); mặc định tối đa 100 lượt/ngày.
2. Thêm tối đa 20 thẻ mới/ngày từ bài đã đánh dấu "đã học" (chưa từng trả lời, đã lọc F3).
3. Xen: không để hai thẻ cùng bài đứng liền nhau (cách ≥ 3). Chỉ trộn khác khóa khi bật "Trộn khóa" (F5). Mỗi `promptHash` chỉ một thẻ mỗi phiên.
4. Thẻ trả lời sai đưa vào cuối phiên đúng một lần nữa (công thức cùng ngày).
5. Hiện ước lượng thời gian (khoảng 20–30 giây/thẻ, ước tính của tác giả brief) và nút "Hôm nay đủ rồi"; hết hạn mức thì dừng, không đẩy thêm.
6. Máy chủ chỉ đọc đúng các bài chứa thẻ trong phiên (≤ 30 file) vì ổ đĩa chậm; nhóm theo `lessonId` rồi chọn theo `promptHash`, và đưa `/api/review` nhận danh sách `(lessonId, promptHash)` thay cho `lessonIds` + hạt ngẫu nhiên hiện tại.

### 4.7 Lưu trữ

Tách khỏi blob `courseflow:default:state` (một khóa, ghi lại cả khối mỗi lượt sẽ chậm khi hàng chục nghìn thẻ). Dùng `idb-keyval` `createStore("courseflow-srs", "cards")` (khóa = `key`) và `"log"` (nối thêm). Mỗi thẻ ≈ 150 byte. Xuất/nhập JSON có `version` để sao lưu cùng ghi chú.

## 5. Ánh xạ sang tính năng CourseFlow

### P0

**F1. Ôn tập hôm nay (FSRS-lite).** Truy hồi + giãn cách (Dunlosky 2013; Cepeda 2006). UX: trang `/review` có hai thẻ, "Đến hạn (N)" và "Ôn tự do" (hành vi ngẫu nhiên cũ, mặc định **không** ghi lịch, có công tắc "tính vào lịch"). Bài quiz trong bài học tạo thẻ ở lần trả lời đầu. Dữ liệu: `CardState`, `ReviewLog`. Thuật toán: mục 4.

**F2. Mức tự tin trước khi lộ đáp án + phản hồi giải thích.** Hiệu chỉnh, hypercorrection, phản hồi tăng hiệu quả truy hồi. UX: ba nút "Đoán / Khá chắc / Chắc chắn" hiện cùng nút "Nộp"; sau khi nộp luôn hiện lời giải (thiếu `explanation` thì ghi "chưa có giải thích" và vào danh sách Cần sửa). Câu "sai mà chắc" hiện nổi bật. Dữ liệu: `conf`, `ms` trong `ReviewLog`; `QuizAttempt.responses` giữ nguyên.

**F3. Cổng chất lượng câu hỏi.** Bằng chứng nội bộ mục 1 + Anki (thẻ gây quên). Làm gì: (a) trong scanner chuẩn hóa câu hỏi bằng cách thay mọi đoạn trong “…” và tiêu đề bài bằng `⟨T⟩`, rồi băm; đếm số bài mỗi khóa chứa cùng băm; ≥ 5 bài thì đặt `generic = true`; (b) thẻ `generic` bị loại khỏi hàng đợi và vào `/quality` dưới nhãn "câu hỏi mẫu lặp"; (c) `lapses ≥ 8` thì treo thẻ, đề nghị đặt trạng thái "Cần sửa" cho bài kèm ghi chú "viết lại hoặc chia nhỏ"; (d) `contentHash` đổi thì hỏi "Giữ lịch / Đặt lại". Dữ liệu: cột `prompt_norm_hash` trong cơ sở dữ liệu quét.

**F4. Nhật ký ôn và sao lưu.** Là nền cho tối ưu tham số, hiệu chỉnh, tóm tắt tuần. UX: Cài đặt có Xuất/Nhập JSON. Không ghi gì vào kho Markdown.

### P1

**F5. Ôn trộn có điều kiện.** Lợi ích có ở toán, phân loại, bài khó phân biệt; không có ở từ vựng/văn bản (Brunmair & Richter 2019). UX: công tắc "Trộn khóa" mặc định bật cho lĩnh vực Lập trình, AI & Dữ liệu, Tài chính, Toán, tắt cho Ngôn ngữ (từ vựng). Quy tắc xen ở 4.6.

**F6. Câu hỏi trước bài.** Pretest (Richland 2009). UX: thẻ thu gọn "Thử đoán trước, 2 phút" ở đầu bài, lấy 1–3 câu từ mục câu hỏi của chính bài; không chấm, không vào lịch, có nút "Bỏ qua". Cuối bài hiện "Trước: 1/3, sau: 3/3". Dữ liệu: `pretests[lessonId]`.

**F7. Giải thích bằng lời của mình (Feynman) + "Vì sao".** Tự giải thích (Bisra 2018). Lưu ý: kỹ thuật Feynman không có meta-analysis riêng, bằng chứng gián tiếp. UX: cuối bài, khung ghi chú có sẵn bốn dòng "Khái niệm / Vì sao đúng / Ví dụ của tôi / Chỗ tôi chưa chắc", ẩn tổng kết đến khi gửi, rồi tự chấm "thiếu / đủ"; "chỗ chưa chắc" có thể biến thành thẻ tự chấm. Dữ liệu: mở rộng `NoteEntry` với `kind: "explain"`.

**F8. Biểu đồ hiệu chỉnh.** Dunlosky & Rawson 2012; Gardner-Medwin. Quy đổi mức tự tin về xác suất danh nghĩa p = {0,5; 0,7; 0,9}. Hiển thị độ đúng thực theo từng mức (ghi n, chỉ vẽ khi n ≥ 10), đường chéo chuẩn, độ lệch `mean(p) − accuracy` (dương = dư tin) và Brier `mean((p − o)²)`. Câu chữ trung tính: "Bạn chọn Chắc chắn 40 lần, đúng 72%."

**F9. Tóm tắt tuần và nhịp học mềm.** Lally 2010; tránh dark pattern (Gray 2018). Tóm tắt: số thẻ ôn, tỉ lệ nhớ thực so với mục tiêu, các thẻ gây quên, các lỗi "sai mà chắc", độ lệch hiệu chỉnh, 3 bài nên xem lại. Nhịp học: mục tiêu tuần (mặc định 4/7 ngày, một ngày tính khi ≥ 5 thẻ hoặc ≥ 5 phút), bản đồ nhiệt từ `activity`, thông điệp khi lỡ ngày trung tính ("Hôm qua nghỉ, bình thường"). Không dùng: chuỗi liên tiếp phạt khi đứt, nhắc dai, thông báo đẩy mặc định, mua bảo vệ chuỗi, đếm ngược. Tùy chọn một câu "nếu–thì" ("Sau bữa sáng tôi sẽ ôn 10 thẻ") vì hiệu quả khiêm tốn.

**F10. Mẫu bài: ví dụ có lời giải rồi bài tự làm, giảm dần hỗ trợ.** Sweller 1988; Barbieri 2023; đảo chiều theo trình độ. UX: bài có khối "Ví dụ có lời giải" và "Tự làm"; với bài đã đạt `reps ≥ 2`, mặc định thu gọn lời giải từng bước ("Thử trước, xem lời giải sau"). Đây cũng là phiên bản của "giảm dần hỗ trợ" trong khóa caption của kho.

### P2

- **F11. Chế độ nhớ trước khi chọn**: với single/true_false, ẩn lựa chọn đến khi người học gõ hoặc nghĩ đáp án (tự nhớ mạnh hơn nhận diện†, Rowland 2014).
- **F12. Lịch theo ngày thi**: nén lịch để phủ hết bài trước ngày chọn (kiểu RemNote).
- **F13. Tối ưu tham số FSRS** từ `ReviewLog` khi ≥ vài trăm lượt (Anki khuyên tối ưu khoảng mỗi tháng).
- **F14. Tạo thẻ từ đoạn bôi đen hoặc ghi chú** ("Biến thành câu hỏi"), lưu ở `sidecar` của CourseFlow, không sửa kho.
- **F15. Khóa nhỏ "Học cách học"** soạn từ mục 2.

## 6. Hướng dẫn cho mẫu bài Markdown

Mẫu hiện tại (suy ra từ các khóa mẫu): Tóm tắt, Mục tiêu, Bối cảnh, Cách áp dụng, Lỗi thường gặp, Câu hỏi ôn tập, Tổng kết. Thứ tự đề xuất:

1. **Một câu tóm tắt** (tổ chức trước) rồi **Mục tiêu**: 2–4 ý, động từ đo được (giải thích, so sánh, tính, sửa lỗi), có `prerequisites` trong frontmatter.
2. **Thử đoán trước**: 1–3 câu hỏi không chấm (F6). Được phép sai.
3. **Ý chính**: một ý mỗi tiểu mục; mỗi khái niệm có quan hệ cần một sơ đồ Mermaid hoặc bảng đi kèm lời (chữ và hình, Mayer). Kho đã có 2.234 bài với Mermaid.
4. **Ví dụ có lời giải**: từng bước kèm lý do; thêm một cặp ví dụ đối chiếu cho các khái niệm dễ lẫn.
5. **Bài hoàn thiện** (giải dở, điền bước thiếu), rồi **Tự làm** (đề mới, lời giải trong khối thu gọn).
6. **Nhầm lẫn thường gặp**: nêu cặp khái niệm dễ lẫn và cách phân biệt (cung cấp nguyên liệu cho câu hỏi phân biệt, hợp ôn trộn).
7. **Giải thích bằng lời của bạn** (F7) và ít nhất một câu "Vì sao…?".
8. **Câu hỏi ôn tập** đặt **trước** tổng kết, 4–6 câu (trung bình hiện tại 4,6 câu/bài): ≥ 1 tự nhớ (`fill_blank` hoặc `short_answer` có `accept`), ≥ 1 "vì sao", ≥ 1 phân biệt, ~20–30% nhắc kiến thức bài trước (tích lũy), mỗi câu có `explanation` nói cả vì sao các lựa chọn sai là sai, gắn `difficulty`.
9. **Tổng kết** 3–5 ý, liên kết bài trước và sau.

Quy tắc viết câu hỏi (rút từ lời khuyên xử lý thẻ gây quên của Anki: đơn giản hóa, chia nhỏ): mỗi câu kiểm tra một sự kiện; **câu hỏi phải đúng khi bỏ tên bài** (không dùng khung "Khi học “<tên bài>”…"); không dùng câu đúng/sai mà đáp án lộ ra từ giọng điệu; ≥ 3 phương án nhiễu hợp lý; không cho cùng một câu xuất hiện ở nhiều bài. Mẫu nên có lint tự động cho các điều này (F3).

## 7. Bảng tổng hợp

| Tính năng | Ưu tiên | Độ mạnh bằng chứng | Công sức |
|---|---|---|---|
| F1 Ôn tập hôm nay, FSRS-lite | P0 | Mạnh (truy hồi, giãn cách); thuật toán FSRS: bằng chứng cộng đồng | L |
| F2 Mức tự tin + phản hồi giải thích | P0 | Trung bình | S |
| F3 Cổng chất lượng câu hỏi, thẻ gây quên | P0 | Thực hành sản phẩm + dữ liệu nội bộ | M |
| F4 Nhật ký ôn, xuất/nhập | P0 | Hạ tầng | S |
| F5 Ôn trộn có điều kiện | P1 | Trung bình, hạn chế theo lĩnh vực | S |
| F6 Câu hỏi trước bài | P1 | Trung bình (kiến thức sự kiện) | S |
| F7 Giải thích bằng lời mình, "Vì sao" | P1 | Trung bình (Feynman: gián tiếp) | M |
| F8 Biểu đồ hiệu chỉnh | P1 | Trung bình | M |
| F9 Tóm tắt tuần, nhịp học mềm | P1 | Yếu đến trung bình | M |
| F10 Ví dụ có lời giải rồi tự làm, giảm hỗ trợ | P1 | Trung bình (đảo chiều theo trình độ) | M (nội dung) |
| F11 Nhớ trước khi chọn | P2 | Trung bình† | M |
| F12 Lịch theo ngày thi | P2 | Thực hành sản phẩm | M |
| F13 Tối ưu tham số FSRS | P2 | Mạnh về thuật toán, cần dữ liệu | L |
| F14 Biến đoạn bôi thành thẻ | P2 | Thực hành sản phẩm | M |
| F15 Khóa "Học cách học" | P2 | Nội dung | M |

## 8. Giới hạn và cách kiểm chứng

- Ngưỡng quy đổi grade, mức trần 180 ngày, thời lượng thẻ, p = 0,5/0,7/0,9 là **đề xuất thiết kế**, không phải kết quả nghiên cứu; hiệu chỉnh bằng `ReviewLog`.
- Tham số FSRS mặc định lấy từ thẻ học thuộc của Anki, chưa chắc khớp với câu trắc nghiệm trong bài học.
- Nhiều con số nghiên cứu ở trên (dấu †) lấy từ tóm tắt thứ cấp; nên đọc bản gốc trước khi trích dẫn trong tài liệu công khai.
- Số đo thành công cho CourseFlow: tỉ lệ nhớ thực ở lượt ôn đúng hạn so với 90%; độ lệch hiệu chỉnh theo tuần; tỉ lệ thẻ `generic` còn trong hàng đợi (mục tiêu 0); số ngày có ôn trong tuần so với mục tiêu tuần, **không** dùng làm mục tiêu tối ưu.
