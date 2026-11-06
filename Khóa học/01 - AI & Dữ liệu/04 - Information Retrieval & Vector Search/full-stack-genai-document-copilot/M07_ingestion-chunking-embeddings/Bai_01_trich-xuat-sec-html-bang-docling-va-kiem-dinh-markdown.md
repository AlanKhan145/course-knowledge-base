# Bài 1. Trích xuất SEC HTML bằng Docling và kiểm định Markdown

> **Module 07 — Document ingestion, chunking và embeddings**  
> Thời điểm tham chiếu: [1:34:49](https://www.youtube.com/watch?v=qF5il_9IwME&t=5689s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Chuyển tài liệu thô thành văn bản có cấu trúc mà vẫn giữ được bảng, heading và metadata phục vụ truy vết.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Trích xuất SEC HTML bằng Docling và kiểm định Markdown**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Các SEC filings thường có HTML dài, bảng nhiều lớp và footnotes. Nếu chỉ dùng `.get_text()` để lấy text, những con số sẽ mất ngữ cảnh. Pipeline chuyển đổi cần hướng tới dạng trung gian giàu cấu trúc; trong hướng dẫn, Docling được lựa chọn để chuyển tài liệu sang Markdown và phục vụ chunking có nhận thức bố cục.

## 4. Kiến thức cốt lõi

### 4.1. Parse phải tôn trọng cấu trúc

Parser nên nhận ra heading, paragraph, table, section và vị trí trang nếu có. Trên tài liệu HTML, “số trang” không phải lúc nào cũng có thật; không tự tạo page number nếu nguồn không cung cấp, hãy dùng section/anchor và URL phù hợp.

### 4.2. Markdown là trung gian đọc được

Markdown giúp dễ review conversion: bảng hiển thị theo hàng, heading giữ hierarchy, chú thích còn gần con số. Nhưng Markdown không tự bảo đảm chất lượng; cần so sánh mẫu với HTML gốc và đọc cấu trúc Docling trước khi quyết định chunking.

### 4.3. Idempotency của ingestion

Một file khi ingest lại không nên nhân đôi record và chunk. Có thể dùng fingerprint cho tài liệu, khóa tự nhiên kết hợp `source_url` với filing id, hoặc trạng thái ingest theo version. Với tài liệu thay đổi, dùng version có kiểm soát và ghi lại thời điểm ingest.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Lấy ba filing từ manifest và chạy bước chuyển đổi theo API Docling của phiên bản đã cài.

**Bước 2.** Lưu kết quả Markdown có liên kết đến document id và URL nguồn.

**Bước 3.** Kiểm tra thủ công hai bảng, hai heading và một footnote trên mỗi file.

**Bước 4.** Thử ingest lặp lại để quan sát chính sách update/skip, không chấp nhận duplicate âm thầm.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```text
raw filing HTML
    ↓ Docling document conversion
structured document (heading, table, section)
    ↓ export/review
Markdown + source metadata
    ↓ verified input
chunking pipeline
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Bảng không bị tráo đơn vị hoặc lệch cột khi so với bản HTML.
- [ ] Mỗi bản Markdown có metadata gắn với SEC filing và đường dẫn nguồn.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không coi số chunk hoặc số token là bằng chứng parser đúng.

2. Không gán page number “1, 2, 3” tùy ý cho tài liệu không có phân trang.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Lập một bảng QA cho 3 hồ sơ và kiểm tra ít nhất 10 số liệu trong bảng so với HTML gốc; phân loại lỗi parsing.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Vì sao dùng Docling trong pipeline?

A. Để trích xuất tài liệu có nhận thức layout và bảng.  
B. Đơn vị, hàng/cột và chú thích liên quan.  
C. Không; phải đối chiếu với tài liệu gốc.  
D. Chạy lại không tạo dữ liệu trùng không kiểm soát.  

**Đáp án: A.** Parsing có cấu trúc giúp bảo toàn ngữ nghĩa của hồ sơ.

**Câu 2.** Điều gì cần kiểm tra với bảng tài chính?

A. Không; phải đối chiếu với tài liệu gốc.  
B. Chạy lại không tạo dữ liệu trùng không kiểm soát.  
C. Section/anchor và URL nguồn có căn cứ.  
D. Đơn vị, hàng/cột và chú thích liên quan.  

**Đáp án: D.** Con số thiếu ngữ cảnh dễ dẫn đến câu trả lời sai.

**Câu 3.** Markdown có luôn đảm bảo fidelity không?

A. Chạy lại không tạo dữ liệu trùng không kiểm soát.  
B. Section/anchor và URL nguồn có căn cứ.  
C. Không; phải đối chiếu với tài liệu gốc.  
D. Để trích xuất tài liệu có nhận thức layout và bảng.  

**Đáp án: C.** Xuất được Markdown chỉ chứng minh chạy được conversion.

**Câu 4.** Lợi ích ingestion idempotent?

A. Section/anchor và URL nguồn có căn cứ.  
B. Chạy lại không tạo dữ liệu trùng không kiểm soát.  
C. Để trích xuất tài liệu có nhận thức layout và bảng.  
D. Đơn vị, hàng/cột và chú thích liên quan.  

**Đáp án: B.** Cần thiết cho retry và vận hành.

**Câu 5.** Khi HTML thiếu page number, citation nên dựa vào gì?

A. Section/anchor và URL nguồn có căn cứ.  
B. Để trích xuất tài liệu có nhận thức layout và bảng.  
C. Đơn vị, hàng/cột và chú thích liên quan.  
D. Không; phải đối chiếu với tài liệu gốc.  

**Đáp án: A.** Không nên bịa phân trang.

## 11. Tổng kết

Bài học tập trung vào **Trích xuất SEC HTML bằng Docling và kiểm định Markdown** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [1:34:49](https://www.youtube.com/watch?v=qF5il_9IwME&t=5689s) — 1:59:52.
