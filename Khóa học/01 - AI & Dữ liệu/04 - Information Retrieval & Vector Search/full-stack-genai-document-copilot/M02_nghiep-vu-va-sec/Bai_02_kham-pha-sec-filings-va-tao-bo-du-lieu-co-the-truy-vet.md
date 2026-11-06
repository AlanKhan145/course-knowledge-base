# Bài 2. Khám phá SEC filings và tạo bộ dữ liệu có thể truy vết

> **Module 02 — Yêu cầu khách hàng và dữ liệu SEC**  
> Thời điểm tham chiếu: [0:04:32](https://www.youtube.com/watch?v=qF5il_9IwME&t=272s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Phân biệt hồ sơ SEC, metadata và nội dung HTML; thực hành kiểm tra tập dữ liệu trước khi thiết kế ingestion.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Khám phá SEC filings và tạo bộ dữ liệu có thể truy vết**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Corpus được lấy từ hồ sơ công khai của SEC cho Apple, Microsoft, Nvidia, Amazon và Alphabet/Google trong khoảng năm năm của bài thực hành. Các loại hồ sơ như Form 10-K, Form 10-Q có nội dung dài, bảng tài chính và những phần khó trích xuất. Một file `.htm` có thể chứa HTML; phần mở rộng không quyết định cấu trúc ngữ nghĩa.

## 4. Kiến thức cốt lõi

### 4.1. Nguồn hồ sơ và định danh

Mỗi record nên có `ticker`, `form_type`, `filing_date`, `period`, `source_url`, `local_path` và một khóa ổn định. Những trường này cho phép lọc đúng kỳ và kiểm tra được phiên bản, thay vì chỉ tìm theo tên file.

### 4.2. Manifest làm chỉ mục

`manifest.json` là danh mục cho biết mỗi hồ sơ đến từ đâu và nằm ở đâu. Việc duy trì manifest giúp ingestion lặp lại và tránh phải quét thư mục với các quy tắc đặt tên mong manh.

### 4.3. Các bẫy của tài liệu tài chính

Các báo cáo có bảng nhiều cấp, số âm trong ngoặc, đơn vị “in millions”, niên độ khác năm lịch và chú thích bảng. Chuyển HTML thành văn bản phẳng có thể làm sai quan hệ cột-hàng; phải giữ đường về file gốc để kiểm tra.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tải hoặc chuẩn bị file theo script `data/download.py` trong repo của bài hướng dẫn khi có repo tương ứng.

**Bước 2.** Mở `manifest.json`, kiểm tra số file theo công ty, năm và loại hồ sơ.

**Bước 3.** Dùng trình duyệt mở một file `.htm` để xem cấu trúc heading, bảng và footnote.

**Bước 4.** Chọn ít nhất ba số liệu có bảng và ghi rõ đơn vị/kỳ; đây là bộ ground truth thủ công ban đầu.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```json
{
  "ticker": "AAPL",
  "form_type": "10-K",
  "filing_date": "YYYY-MM-DD",
  "source_url": "https://www.sec.gov/...",
  "local_path": "data/raw/aapl_example.htm"
}
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Manifest tham chiếu đến file thực tồn tại và có URL nguồn.
- [ ] Có ít nhất một bảng đã kiểm tra ý nghĩa cột, đơn vị và kỳ.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Đừng suy từ tên file rằng đó là cùng loại kỳ báo cáo.

2. Đừng lấy bảng tài chính sau khi xóa hết dấu phân cách hàng/cột.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo bảng kiểm thủ công cho ba filing: ticker, form, kỳ, URL, một heading, một bảng và một số liệu có đơn vị.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Manifest dùng để làm gì?

A. Liên kết metadata hồ sơ với đường dẫn dữ liệu.  
B. Mất tương ứng giữa số liệu với hàng/cột và đơn vị.  
C. URL gốc và metadata hồ sơ.  
D. Một tệp HTML cần được parser xử lý.  

**Đáp án: A.** Nó là chỉ mục truy vết nguồn và phục vụ ingest.

**Câu 2.** Rủi ro chính khi đọc bảng tài chính thành text phẳng?

A. URL gốc và metadata hồ sơ.  
B. Một tệp HTML cần được parser xử lý.  
C. Để kiểm tra việc trích xuất có giữ đúng ý nghĩa dữ liệu.  
D. Mất tương ứng giữa số liệu với hàng/cột và đơn vị.  

**Đáp án: D.** Cấu trúc bảng chứa ngữ nghĩa của con số.

**Câu 3.** Cần giữ thông tin nào để trích dẫn?

A. Một tệp HTML cần được parser xử lý.  
B. Để kiểm tra việc trích xuất có giữ đúng ý nghĩa dữ liệu.  
C. URL gốc và metadata hồ sơ.  
D. Liên kết metadata hồ sơ với đường dẫn dữ liệu.  

**Đáp án: C.** Tên công ty đơn thuần không đủ để xác minh.

**Câu 4.** Loại file .htm có thể là gì?

A. Để kiểm tra việc trích xuất có giữ đúng ý nghĩa dữ liệu.  
B. Một tệp HTML cần được parser xử lý.  
C. Liên kết metadata hồ sơ với đường dẫn dữ liệu.  
D. Mất tương ứng giữa số liệu với hàng/cột và đơn vị.  

**Đáp án: B.** Phần mở rộng `.htm` là biến thể thông dụng của HTML.

**Câu 5.** Vì sao chọn ground truth mẫu trước ingest?

A. Để kiểm tra việc trích xuất có giữ đúng ý nghĩa dữ liệu.  
B. Liên kết metadata hồ sơ với đường dẫn dữ liệu.  
C. Mất tương ứng giữa số liệu với hàng/cột và đơn vị.  
D. URL gốc và metadata hồ sơ.  

**Đáp án: A.** Không thể đánh giá parser chỉ bằng số chunk được tạo.

## 11. Tổng kết

Bài học tập trung vào **Khám phá SEC filings và tạo bộ dữ liệu có thể truy vết** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:04:32](https://www.youtube.com/watch?v=qF5il_9IwME&t=272s) — 0:18:45.
