# Bài 1. Đánh giá thực chất chất lượng RAG và tài liệu

> **Module 13 — Cải tiến chất lượng và vận hành production**  
> Thời điểm tham chiếu: [3:45:00](https://www.youtube.com/watch?v=qF5il_9IwME&t=13500s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Phân biệt một demo chạy được với một giải pháp đáng tin; thiết kế vòng lặp cải tiến dựa trên dữ liệu kiểm định.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Đánh giá thực chất chất lượng RAG và tài liệu**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Tài liệu cuối của walkthrough nhấn mạnh việc tạo prototype chỉ là điểm khởi đầu. Nếu parser làm méo bảng, chunker bỏ ngữ cảnh hoặc retrieval tìm sai kỳ, LLM rất khó sửa. Thực hành cho thấy cần kiểm thử chuyên sâu từng tầng và so sánh với sự thật do con người xác minh.

## 4. Kiến thức cốt lõi

### 4.1. Phân rã lỗi theo giai đoạn

Data error: thiếu hồ sơ hoặc nhập trùng. Parse error: bảng sai. Chunk error: tách unit khỏi số. Retrieval error: tài liệu đúng không vào top-k. Generation error: mô hình diễn giải sai chứng cứ. Citation error: dẫn nguồn không hỗ trợ claim.

### 4.2. Thiết kế evaluation set

Tạo câu hỏi đủ nhiều cho các loại claim: số liệu chính xác, so sánh liên năm, tổng hợp từ nhiều nguồn, đối chiếu bảng và câu không thể trả lời. Lưu câu trả lời tham chiếu, fil​ing URL và vị trí bằng chứng. Có thể dùng LLM-as-judge hỗ trợ, nhưng phải kiểm tra mẫu thủ công.

### 4.3. Tối ưu theo metrics

Theo dõi retrieval recall@k, citation precision, unsupported claims, latency p50/p95 và chi phí/query. Tối ưu một biến mỗi lần và chạy lại benchmark; khi thay parser/chunker phải tạo lại index tương ứng, tránh so sánh với dữ liệu đã khác.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Lập taxonomy 6 loại lỗi từ data tới citation.

**Bước 2.** Chọn 20 câu hỏi gắn bằng chứng thủ công, gồm ít nhất 5 câu không đủ nguồn.

**Bước 3.** Chạy baseline và chấm riêng retrieval, grounding, citations.

**Bước 4.** Chọn 1 lỗi lớn nhất, thay đổi một yếu tố, đo lại và ghi kết luận.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```markdown
| Query | Relevant chunk | Retrieved@5 | Supported answer | Citation valid |
| --- | --- | --- | --- | --- |
| Q1 | chunk-42 | Yes/No | Yes/No | Yes/No |
| Q2 | chunk-108 | Yes/No | Yes/No | Yes/No |
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Có baseline lưu lại để so sau mỗi commit/reindex.
- [ ] Câu trả lời sai được phân loại theo nguyên nhân, không chỉ “LLM hallucinated”.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không tối ưu prompt khi parser đang làm hỏng dữ liệu gốc.

2. Không tin LLM tự chấm hoàn toàn mà không có mẫu ground truth do người kiểm tra.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết một evaluation report gồm baseline, phân loại 10 lỗi, thử một phương án sửa và so sánh trước–sau.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Lỗi parse bảng sẽ tác động tới gì?

A. Chunk, retrieval và cuối cùng answer/citation.  
B. Khả năng đưa relevant chunks vào top-k.  
C. Nguồn dẫn thực sự hỗ trợ claim.  
D. Khả năng từ chối khẳng định thiếu chứng cứ.  

**Đáp án: A.** Lỗi upstream lan qua pipeline.

**Câu 2.** Recall@k đánh giá điều gì?

A. Nguồn dẫn thực sự hỗ trợ claim.  
B. Khả năng từ chối khẳng định thiếu chứng cứ.  
C. Baseline trên bộ đánh giá giữ ổn định.  
D. Khả năng đưa relevant chunks vào top-k.  

**Đáp án: D.** Không trực tiếp đo câu trả lời cuối.

**Câu 3.** Citation precision hướng tới điều gì?

A. Khả năng từ chối khẳng định thiếu chứng cứ.  
B. Baseline trên bộ đánh giá giữ ổn định.  
C. Nguồn dẫn thực sự hỗ trợ claim.  
D. Chunk, retrieval và cuối cùng answer/citation.  

**Đáp án: C.** Nhiều citations không đồng nghĩa chính xác.

**Câu 4.** Câu hỏi ngoài corpus cần được chấm gì?

A. Baseline trên bộ đánh giá giữ ổn định.  
B. Khả năng từ chối khẳng định thiếu chứng cứ.  
C. Chunk, retrieval và cuối cùng answer/citation.  
D. Khả năng đưa relevant chunks vào top-k.  

**Đáp án: B.** Đây là phần quan trọng của grounding.

**Câu 5.** Cải tiến đáng tin cần so với gì?

A. Baseline trên bộ đánh giá giữ ổn định.  
B. Chunk, retrieval và cuối cùng answer/citation.  
C. Khả năng đưa relevant chunks vào top-k.  
D. Nguồn dẫn thực sự hỗ trợ claim.  

**Đáp án: A.** Đo cùng điều kiện mới thấy tác động.

## 11. Tổng kết

Bài học tập trung vào **Đánh giá thực chất chất lượng RAG và tài liệu** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [3:45:00](https://www.youtube.com/watch?v=qF5il_9IwME&t=13500s) — 3:51:48.
