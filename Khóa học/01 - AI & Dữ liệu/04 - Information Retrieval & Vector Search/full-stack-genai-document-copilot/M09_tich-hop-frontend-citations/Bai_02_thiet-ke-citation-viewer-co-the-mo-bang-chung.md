# Bài 2. Thiết kế citation viewer có thể mở bằng chứng

> **Module 09 — Tích hợp chat UI và citations**  
> Thời điểm tham chiếu: [2:20:05](https://www.youtube.com/watch?v=qF5il_9IwME&t=8405s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Hiển thị citations đủ rõ, điều hướng được tới hồ sơ/đoạn nguồn và bảo toàn ngữ cảnh khi người dùng kiểm tra.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Thiết kế citation viewer có thể mở bằng chứng**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Giá trị của sản phẩm nằm ở khả năng kiểm tra. Một citation chỉ như `[1]` không giúp ích nếu mở ra không thấy dòng/bảng liên quan. Giao diện có thể dùng panel trượt từ bên phải, đồng bộ với citation được nhấn, cho biết tài liệu, loại hồ sơ, kỳ, heading và text excerpt.

## 4. Kiến thức cốt lõi

### 4.1. Cấu trúc citation

Nên có stable citation id, chunk id, source document id, title, ticker, form type, filing date, URL và excerpt. Nếu có page/section thực, hiển thị; nếu không, ghi heading hoặc position index thay vì bịa số trang.

### 4.2. Liên kết với câu trả lời

Một claim có thể có nhiều citation; một citation có thể hỗ trợ nhiều câu. UI cần ánh xạ markers với danh sách nguồn và highlight được evidence. Với bảng, render excerpt bằng cách giữ định dạng bảng hoặc mở bản hồ sơ gốc.

### 4.3. Quyền, lỗi và UX

Khi citation mất quyền hoặc chunk bị xóa, hiển thị “Không mở được nguồn” và không để panel rỗng. Nếu URL ra ngoài app, cung cấp rõ đây là SEC filing gốc. Duy trì focus/keyboard support khi mở panel.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo type Citation và component citation marker.

**Bước 2.** Nhấn marker mở side panel hiển thị metadata và đoạn evidence.

**Bước 3.** Thêm open original URL; ưu tiên anchor nếu có thật.

**Bước 4.** Thử missing chunk, duplicated citations và chuỗi citation trong message dài.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```json
{
  "citation_id": "c-1",
  "chunk_id": "chunk-42",
  "title": "Annual filing",
  "ticker": "AAPL",
  "section": "Business / Revenue",
  "source_url": "https://www.sec.gov/...",
  "excerpt": "Đoạn trích được kiểm tra từ hồ sơ"
}
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Mỗi citation mở được một đoạn cụ thể, không chỉ home page SEC.
- [ ] Panel có close button, hỗ trợ bàn phím và trạng thái lỗi.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không tạo số trang không tồn tại với HTML.

2. Đừng dùng citation không có mapping database chỉ vì prompt đã in `[1]`.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo một trang demo với 3 messages có citations; đánh giá người khác có xác minh được một con số trong dưới 1 phút không.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Tại sao cần chunk id trong citation?

A. Để định vị bằng chứng mà câu trả lời dựa vào.  
B. Hiển thị section/anchor khi có và không bịa trang.  
C. Side panel hoặc drawer hiển thị excerpt.  
D. Hiển thị lỗi/không có nguồn thay vì nội dung sai.  

**Đáp án: A.** URL tổng quát thường không đủ.

**Câu 2.** Nếu HTML không có page number?

A. Side panel hoặc drawer hiển thị excerpt.  
B. Hiển thị lỗi/không có nguồn thay vì nội dung sai.  
C. Có thể cần nhiều citation phù hợp.  
D. Hiển thị section/anchor khi có và không bịa trang.  

**Đáp án: D.** Citation phải phản ánh nguồn thực.

**Câu 3.** Kiểu UI phù hợp để đọc nguồn mà không rời chat?

A. Hiển thị lỗi/không có nguồn thay vì nội dung sai.  
B. Có thể cần nhiều citation phù hợp.  
C. Side panel hoặc drawer hiển thị excerpt.  
D. Để định vị bằng chứng mà câu trả lời dựa vào.  

**Đáp án: C.** Giữ ngữ cảnh đối thoại khi kiểm tra.

**Câu 4.** Khi citation source bị xóa?

A. Có thể cần nhiều citation phù hợp.  
B. Hiển thị lỗi/không có nguồn thay vì nội dung sai.  
C. Để định vị bằng chứng mà câu trả lời dựa vào.  
D. Hiển thị section/anchor khi có và không bịa trang.  

**Đáp án: B.** Không được hiển thị bằng chứng của chunk khác.

**Câu 5.** Một claim có thể có bao nhiêu citation?

A. Có thể cần nhiều citation phù hợp.  
B. Để định vị bằng chứng mà câu trả lời dựa vào.  
C. Hiển thị section/anchor khi có và không bịa trang.  
D. Side panel hoặc drawer hiển thị excerpt.  

**Đáp án: A.** So sánh nhiều kỳ thường cần nhiều nguồn.

## 11. Tổng kết

Bài học tập trung vào **Thiết kế citation viewer có thể mở bằng chứng** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [2:20:05](https://www.youtube.com/watch?v=qF5il_9IwME&t=8405s) — 2:50:17.
