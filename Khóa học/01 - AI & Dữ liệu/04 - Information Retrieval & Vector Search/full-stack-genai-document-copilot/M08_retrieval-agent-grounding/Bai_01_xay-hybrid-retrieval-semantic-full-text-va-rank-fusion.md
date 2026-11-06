# Bài 1. Xây hybrid retrieval: semantic, full-text và rank fusion

> **Module 08 — Hybrid retrieval, agent và grounding**  
> Thời điểm tham chiếu: [1:59:52](https://www.youtube.com/watch?v=qF5il_9IwME&t=7192s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Giải thích khi nào vector search và keyword search hiệu quả, rồi kết hợp cả hai thành bộ truy xuất có thể kiểm thử.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Xây hybrid retrieval: semantic, full-text và rank fusion**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Câu hỏi “Apple service revenue 2023” có thể cần match chính xác tên mảng, năm và chỉ tiêu; chỉ semantic similarity đôi khi chọn đoạn chung chung. Ngược lại câu hỏi diễn đạt bằng từ đồng nghĩa có thể không khớp keyword. Hybrid retrieval kết hợp semantic và lexical; transcript sử dụng PostgreSQL full-text và reciprocal rank fusion (RRF) để hợp nhất thứ hạng.

## 4. Kiến thức cốt lõi

### 4.1. Semantic và lexical

Vector retrieval tìm theo ngữ nghĩa; lexical/full-text retrieval có lợi với ticker, năm, tên trường và cụm từ chính xác. BM25 là phương pháp xếp hạng từ khóa phổ biến, nhưng không đồng nhất với PostgreSQL `ts_rank`/full-text ranking; cần phân biệt triển khai cụ thể.

### 4.2. Reciprocal Rank Fusion

RRF không yêu cầu hai score có cùng thang: cộng trọng số theo thứ hạng. Công thức mẫu $RRF(d)=\sum_i1/(k+rank_i(d))$; k là hyperparameter, không phải kết quả benchmark. Các kết quả chỉ xuất hiện ở một nhánh vẫn có thể được chọn.

### 4.3. Filters và mở rộng ngữ cảnh

Tìm trước theo ticker, form type hoặc kỳ giúp loại những báo cáo sai phạm vi. Sau top-k fusion, lấy chunk lân cận và metadata nguồn nếu cần để tránh cắt giữa bảng; không tự mở quá rộng vì token budget và độ nhiễu.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo hai truy vấn riêng: vector similarity và full-text theo metadata thích hợp.

**Bước 2.** Chuẩn hóa kết quả mỗi nhánh thành `chunk_id`, `rank`, `document_id`, `source_url`.

**Bước 3.** Hợp nhất bằng RRF, loại duplicate chunk và lấy top-k có thể cấu hình.

**Bước 4.** Bổ sung chunk neighbors khi bằng chứng nằm giữa nhiều đoạn; giới hạn token budget.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```python
def rrf(ranked_lists: list[list[str]], k: int = 60):
    scores = {}
    for ranked in ranked_lists:
        for position, chunk_id in enumerate(ranked, start=1):
            scores[chunk_id] = scores.get(chunk_id, 0.0) + 1 / (k + position)
    return sorted(scores, key=scores.get, reverse=True)

# Ví dụ thuật toán; tune k/top-k bằng dữ liệu đánh giá.
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] So sánh top-5 của vector-only, full-text-only và hybrid trên 10 câu hỏi thật.
- [ ] Không trả các đoạn sai ticker/năm khi user lọc rõ ràng.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không gọi PostgreSQL full-text rank là BM25 khi không dùng BM25 thật.

2. Không đánh giá retriever bằng một câu hỏi dễ rồi khẳng định chính xác.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo notebook so sánh vector-only/full-text-only/hybrid trên bộ 10 câu hỏi; chấm Recall@5 thủ công và mô tả 3 lỗi điển hình.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Ưu điểm keyword retrieval?

A. Bắt chính xác ticker, năm, tên chỉ tiêu.  
B. Bắt tương đồng ngữ nghĩa dù diễn đạt khác.  
C. Vị trí xếp hạng từ các danh sách.  
D. Bổ sung ngữ cảnh bị cắt ở ranh giới chunk.  

**Đáp án: A.** Tín hiệu lexical bổ sung cho semantic.

**Câu 2.** Ưu điểm vector retrieval?

A. Vị trí xếp hạng từ các danh sách.  
B. Bổ sung ngữ cảnh bị cắt ở ranh giới chunk.  
C. Ticker và filing period/form nếu đã xác định.  
D. Bắt tương đồng ngữ nghĩa dù diễn đạt khác.  

**Đáp án: D.** Nó tìm theo biểu diễn embedding.

**Câu 3.** RRF kết hợp đại lượng nào?

A. Bổ sung ngữ cảnh bị cắt ở ranh giới chunk.  
B. Ticker và filing period/form nếu đã xác định.  
C. Vị trí xếp hạng từ các danh sách.  
D. Bắt chính xác ticker, năm, tên chỉ tiêu.  

**Đáp án: C.** Tránh cần so raw score khác thang.

**Câu 4.** Tại sao lấy neighboring chunks?

A. Ticker và filing period/form nếu đã xác định.  
B. Bổ sung ngữ cảnh bị cắt ở ranh giới chunk.  
C. Bắt chính xác ticker, năm, tên chỉ tiêu.  
D. Bắt tương đồng ngữ nghĩa dù diễn đạt khác.  

**Đáp án: B.** Đặc biệt hữu ích với bảng và đoạn nối tiếp.

**Câu 5.** Bộ lọc nào nên áp khi hỏi kỳ báo cáo cụ thể?

A. Ticker và filing period/form nếu đã xác định.  
B. Bắt chính xác ticker, năm, tên chỉ tiêu.  
C. Bắt tương đồng ngữ nghĩa dù diễn đạt khác.  
D. Vị trí xếp hạng từ các danh sách.  

**Đáp án: A.** Loại bỏ nguồn khác kỳ để giảm sai.

## 11. Tổng kết

Bài học tập trung vào **Xây hybrid retrieval: semantic, full-text và rank fusion** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [1:59:52](https://www.youtube.com/watch?v=qF5il_9IwME&t=7192s) — 2:20:05.
