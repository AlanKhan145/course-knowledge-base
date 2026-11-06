# Bài 2. Agent tìm kiếm có công cụ và kiểm chứng dẫn chứng

> **Module 08 — Hybrid retrieval, agent và grounding**  
> Thời điểm tham chiếu: [1:59:52](https://www.youtube.com/watch?v=qF5il_9IwME&t=7192s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Thiết kế agent điều phối search, read và answer với giới hạn bước, ngân sách và chế độ không đủ bằng chứng.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Agent tìm kiếm có công cụ và kiểm chứng dẫn chứng**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Một pipeline RAG tuyến tính thường tìm kiếm một lần rồi trả lời. Agent có tools có thể lập lại truy vấn, liệt kê tài liệu, đọc chunk cụ thể và lấy đoạn xung quanh để kiểm tra thêm. Trong dự án, lớp orchestration dùng PydanticAI với các công cụ truy xuất. Tuy nhiên “agentic” không đồng nghĩa tự động chính xác: cần giới hạn số lượt gọi, bằng chứng được phép dùng và cơ chế phản hồi khi không đủ dữ liệu.

## 4. Kiến thức cốt lõi

### 4.1. Tool contract rõ ràng

Thiết kế `search_filings(query, filters)`, `read_chunk(chunk_id)`, `list_filings(ticker, year)` hoặc các khả năng tương đương. Tool chỉ trả dữ liệu đã được phép; LLM không được truy cập SQL tùy ý hoặc URL bên ngoài không kiểm soát.

### 4.2. Grounding và claim verification

Câu trả lời nên tách claims rồi gắn `chunk_id` chứng minh từng claim. Kiểm chứng có thể là quy tắc, bước model thứ hai hoặc review của người dùng; không tuyên bố “đã xác minh” nếu chưa đối chiếu dữ kiện. Bảng citation record phải tham chiếu tới chunk tồn tại.

### 4.3. Tính dừng và quan sát

Agent cần max steps, timeout, token budget, error handling, trạng thái `insufficient_evidence`. Lưu tool trace và metrics nhưng tránh ghi secret hoặc raw tài liệu nhạy cảm vào logs không phù hợp. Người dùng nên thấy trạng thái “đang tìm”, “đang đọc”, “đang tổng hợp”.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Định nghĩa schema Pydantic cho search result và citation result.

**Bước 2.** Cho agent truy cập tool retrieval và đọc chunk có kiểm tra input.

**Bước 3.** Áp max steps, timeout và token budget; log request id và tool outcome.

**Bước 4.** Thử câu hỏi có dữ liệu, sai kỳ và không có dữ liệu; kiểm tra mode từ chối suy đoán.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```json
{
  "answer": "Không tìm thấy đủ bằng chứng trong các hồ sơ đã nhập.",
  "status": "insufficient_evidence",
  "citations": [],
  "trace": {"tool_calls": 3, "retrieved_chunks": 0}
}
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Mỗi citation trỏ tới chunk hợp lệ có metadata nguồn.
- [ ] Agent kết thúc khi quá budget hoặc không có bằng chứng, không loop vô tận.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không dùng câu “mọi câu trả lời đều đúng” khi mới chỉ làm một bước verifier tự động.

2. Không cấp quyền SQL tùy ý cho agent không được sandbox/kiểm soát.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết test với ba tình huống: đủ nguồn, nguồn mâu thuẫn và nguồn thiếu; xác nhận response có trạng thái và citations chính xác.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Điều gì làm một RAG trở nên agentic?

A. Agent có thể chọn và gọi các công cụ nhiều bước theo mục tiêu.  
B. Định danh chunk đã được kiểm tra quyền và tồn tại.  
C. Trả trạng thái thiếu bằng chứng và không bịa.  
D. Chống loop dài, chi phí cao và timeout.  

**Đáp án: A.** Không chỉ có một prompt rồi sinh text.

**Câu 2.** Công cụ đọc chunk nên nhận gì?

A. Trả trạng thái thiếu bằng chứng và không bịa.  
B. Chống loop dài, chi phí cao và timeout.  
C. Bằng chứng/chunk cụ thể.  
D. Định danh chunk đã được kiểm tra quyền và tồn tại.  

**Đáp án: D.** Tránh đưa text tùy tiện không truy vết.

**Câu 3.** Khi retrieval không tìm đủ evidence?

A. Chống loop dài, chi phí cao và timeout.  
B. Bằng chứng/chunk cụ thể.  
C. Trả trạng thái thiếu bằng chứng và không bịa.  
D. Agent có thể chọn và gọi các công cụ nhiều bước theo mục tiêu.  

**Đáp án: C.** Đây là hợp đồng đáng tin cậy.

**Câu 4.** Vì sao giới hạn tool calls?

A. Bằng chứng/chunk cụ thể.  
B. Chống loop dài, chi phí cao và timeout.  
C. Agent có thể chọn và gọi các công cụ nhiều bước theo mục tiêu.  
D. Định danh chunk đã được kiểm tra quyền và tồn tại.  

**Đáp án: B.** Agent không được tự chạy vô hạn.

**Câu 5.** Kiểm chứng claim phải gắn với gì?

A. Bằng chứng/chunk cụ thể.  
B. Agent có thể chọn và gọi các công cụ nhiều bước theo mục tiêu.  
C. Định danh chunk đã được kiểm tra quyền và tồn tại.  
D. Trả trạng thái thiếu bằng chứng và không bịa.  

**Đáp án: A.** Tên mô hình hoặc lời xác nhận chung không phải bằng chứng.

## 11. Tổng kết

Bài học tập trung vào **Agent tìm kiếm có công cụ và kiểm chứng dẫn chứng** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [1:59:52](https://www.youtube.com/watch?v=qF5il_9IwME&t=7192s) — 2:20:05.
