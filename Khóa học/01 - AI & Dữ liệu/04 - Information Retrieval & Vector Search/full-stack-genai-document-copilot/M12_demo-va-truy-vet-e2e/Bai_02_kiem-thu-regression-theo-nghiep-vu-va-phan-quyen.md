# Bài 2. Kiểm thử regression theo nghiệp vụ và phân quyền

> **Module 12 — Kiểm thử toàn hệ thống và walkthrough**  
> Thời điểm tham chiếu: [3:34:28](https://www.youtube.com/watch?v=qF5il_9IwME&t=12868s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Xây bộ kiểm thử chức năng và chất lượng RAG có thể chạy định kỳ sau khi deploy.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Kiểm thử regression theo nghiệp vụ và phân quyền**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Một bản demo thành công có thể che giấu lỗi giới hạn trong happy path. Kiểm thử end-to-end cần bao gồm security boundaries, dữ liệu khác kỳ, truy vấn không có nguồn, bảng sai và tình trạng người dùng thao tác liên tục. Mục tiêu là tạo test suite hỗ trợ thay đổi pipeline và UI mà không đánh mất các hành vi nền tảng.

## 4. Kiến thức cốt lõi

### 4.1. Kiểm thử chức năng

Login/logout, tạo chat, lưu/tải history, mở citations, xử lý lỗi khi API không sẵn sàng. Kiểm tra accessibility cơ bản và các trạng thái pending/error. Dùng account A/B để xác nhận row-level isolation.

### 4.2. Kiểm thử chất lượng

Ghi bộ query có ground truth, kèm chunk được kỳ vọng. Chấm retrieval recall, faithfulness và citation precision riêng biệt; một câu trả lời ngắn đúng ngữ nghĩa nhưng lấy sai năm vẫn bị đánh lỗi.

### 4.3. Kiểm thử thay đổi dữ liệu

Chạy ingestion lại; xác minh số docs/chunks không nhân bất thường. Sau migration, kiểm tra owner_id, foreign keys và khả năng đọc citations cũ; sau đổi model embedding cần reindex thích hợp.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo test matrix phân thành functionality, access control, retrieval, grounding, deployment.

**Bước 2.** Đánh dấu happy path/negative path cho từng luồng.

**Bước 3.** Chạy một bộ query trước và sau thay đổi parser/chunker; so diff kết quả.

**Bước 4.** Tạo issue kèm input, expected/actual, URL evidence và severity khi có lỗi.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```markdown
| Case | Input | Expected | Status |
| --- | --- | --- | --- |
| Auth-01 | Thiếu JWT | 401 | TODO |
| Chat-02 | User B đọc chat A | 403/404 | TODO |
| RAG-03 | Câu hỏi ngoài corpus | Không bịa nguồn | TODO |
| Cite-04 | Nhấn marker | Mở đúng chunk | TODO |
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Bộ negative tests chạy trên domain deploy.
- [ ] Các vấn đề được gắn input reproducible và severity.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không đánh đồng retrieval recall với answer correctness.

2. Không đưa fixture chứa secret hoặc dữ liệu tài khoản thật vào repository.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Hoàn thiện test matrix ít nhất 20 case, tự chấm một bản release candidate và ghi lại các blocker còn tồn tại.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Để kiểm tra isolation cần gì?

A. Hai account khác nhau với conversation riêng.  
B. Lỗi evidence/grounding dù văn bản trôi chảy.  
C. Phát hiện dữ liệu trùng hoặc cleanup sai.  
D. Đọc dữ liệu cũ và quan hệ khóa ngoại.  

**Đáp án: A.** Không thể kiểm tra bằng cùng một user.

**Câu 2.** Một câu trả lời lấy sai năm là lỗi gì?

A. Phát hiện dữ liệu trùng hoặc cleanup sai.  
B. Đọc dữ liệu cũ và quan hệ khóa ngoại.  
C. Input, expected/actual, reproduction và bằng chứng.  
D. Lỗi evidence/grounding dù văn bản trôi chảy.  

**Đáp án: D.** Kỳ báo cáo là phần của sự thật.

**Câu 3.** Vì sao kiểm tra số chunks sau reingest?

A. Đọc dữ liệu cũ và quan hệ khóa ngoại.  
B. Input, expected/actual, reproduction và bằng chứng.  
C. Phát hiện dữ liệu trùng hoặc cleanup sai.  
D. Hai account khác nhau với conversation riêng.  

**Đáp án: C.** Duplicate ảnh hưởng search và chi phí.

**Câu 4.** Sau migration cần test gì?

A. Input, expected/actual, reproduction và bằng chứng.  
B. Đọc dữ liệu cũ và quan hệ khóa ngoại.  
C. Hai account khác nhau với conversation riêng.  
D. Lỗi evidence/grounding dù văn bản trôi chảy.  

**Đáp án: B.** Schema change có thể phá khả năng truy xuất.

**Câu 5.** Lỗi end-to-end nên ghi gì?

A. Input, expected/actual, reproduction và bằng chứng.  
B. Hai account khác nhau với conversation riêng.  
C. Lỗi evidence/grounding dù văn bản trôi chảy.  
D. Phát hiện dữ liệu trùng hoặc cleanup sai.  

**Đáp án: A.** Tạo điều kiện sửa nhanh và regression test.

## 11. Tổng kết

Bài học tập trung vào **Kiểm thử regression theo nghiệp vụ và phân quyền** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [3:34:28](https://www.youtube.com/watch?v=qF5il_9IwME&t=12868s) — 3:45:00.
