# Bài 2. Lộ trình xây dựng và cách cộng tác với coding agent

> **Module 01 — Tổng quan hệ thống GenAI Full Stack**  
> Thời điểm tham chiếu: [0:00:00](https://www.youtube.com/watch?v=qF5il_9IwME&t=0s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Biết tổ chức công việc thành milestone nhỏ, giữ quyền quyết định kỹ thuật và dùng AI coding agent như người hỗ trợ có thể kiểm tra.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Lộ trình xây dựng và cách cộng tác với coding agent**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Ứng dụng gồm backend, frontend, database và pipeline xử lý tài liệu. Dù coding agent có thể tạo nhiều tệp trong một lần chạy, việc chấp nhận thay đổi không qua review khiến lỗi cấu hình, schema và quyền truy cập lan sang nhiều lớp. Monorepo và quy tắc dự án giúp mọi thay đổi có chung bối cảnh.

## 4. Kiến thức cốt lõi

### 4.1. Monorepo có định hướng

Một Git repository chứa `backend/`, `frontend/`, `data/` và các tài liệu kiến trúc. Quy tắc trong `AGENTS.md` ở thư mục gốc và các thư mục chức năng có thể mô tả stack, convention, lệnh kiểm thử, yêu cầu an toàn; cách các agent đọc tệp này phụ thuộc công cụ.

### 4.2. Agent nhỏ, checkpoint rõ

Một lần giao việc nên có mục tiêu quan sát được: tạo config, tạo route, thêm migration hoặc sửa hiển thị citation. Sau mỗi bước, chạy kiểm thử và đọc diff. Hãy yêu cầu agent giải thích thay đổi và tác động trước khi chấp nhận.

### 4.3. Quản lý thay đổi

Giữ nhánh khởi đầu sạch, làm việc trên nhánh phát triển; commit tại các điểm ổn định. Không tự động chấp nhận lệnh phá dữ liệu, thay đổi bảo mật hay secret chỉ vì AI đề xuất.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Khởi tạo Git và chia thư mục `backend`, `frontend`, `data`, `docs`.

**Bước 2.** Viết `AGENTS.md` mô tả phạm vi trách nhiệm của mỗi thư mục và tiêu chuẩn kiểm thử.

**Bước 3.** Tạo checklist theo từng milestone: môi trường → DB → auth/chat → ingestion → retrieval → UI → deploy.

**Bước 4.** Mỗi khi agent hoàn thành công việc, đọc `git diff`, chạy lệnh kiểm tra và commit khi đạt checkpoint.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```bash
git switch -c develop
git status
git diff --check
# Kiểm tra kỹ thay đổi trước khi commit
git add .
git commit -m "chore: establish project foundation"
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Mỗi milestone có deliverable chạy được hoặc một bài test có thể tái hiện.
- [ ] Tệp `.env` và các secret bị loại khỏi Git; chỉ commit `.env.example`.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Prompt “xây toàn bộ ứng dụng” không thay cho thiết kế, kiểm thử và review.

2. Không dùng MCP/coding agent với quyền xóa dữ liệu, triển khai production quá rộng.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết 2 prompt nhỏ cho coding agent: tạo endpoint health và thêm phép kiểm thử cho endpoint; mô tả tiêu chí nghiệm thu của từng prompt.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Bước đầu sau khi agent sửa code là gì?

A. Đọc diff và chạy kiểm tra phù hợp.  
B. Quy tắc làm việc, cấu trúc, lệnh test và ràng buộc kỹ thuật.  
C. Có bối cảnh frontend và backend trong cùng repository.  
D. Để khoanh vùng lỗi và kiểm soát quyết định kiến trúc.  

**Đáp án: A.** Chỉ lời báo hoàn tất của agent chưa xác nhận chất lượng.

**Câu 2.** AGENTS.md nên chứa gì?

A. Có bối cảnh frontend và backend trong cùng repository.  
B. Để khoanh vùng lỗi và kiểm soát quyết định kiến trúc.  
C. Sau khi đạt một checkpoint ổn định và đã xem lại thay đổi.  
D. Quy tắc làm việc, cấu trúc, lệnh test và ràng buộc kỹ thuật.  

**Đáp án: D.** Đây là hướng dẫn cho tác nhân, không phải chỗ lưu mật khẩu.

**Câu 3.** Lợi ích của monorepo ở dự án này?

A. Để khoanh vùng lỗi và kiểm soát quyết định kiến trúc.  
B. Sau khi đạt một checkpoint ổn định và đã xem lại thay đổi.  
C. Có bối cảnh frontend và backend trong cùng repository.  
D. Đọc diff và chạy kiểm tra phù hợp.  

**Đáp án: C.** Dễ theo dõi thay đổi xuyên các lớp.

**Câu 4.** Vì sao chia milestone nhỏ?

A. Sau khi đạt một checkpoint ổn định và đã xem lại thay đổi.  
B. Để khoanh vùng lỗi và kiểm soát quyết định kiến trúc.  
C. Đọc diff và chạy kiểm tra phù hợp.  
D. Quy tắc làm việc, cấu trúc, lệnh test và ràng buộc kỹ thuật.  

**Đáp án: B.** Các thay đổi nhỏ dễ test và rollback.

**Câu 5.** Khi nào commit?

A. Sau khi đạt một checkpoint ổn định và đã xem lại thay đổi.  
B. Đọc diff và chạy kiểm tra phù hợp.  
C. Quy tắc làm việc, cấu trúc, lệnh test và ràng buộc kỹ thuật.  
D. Có bối cảnh frontend và backend trong cùng repository.  

**Đáp án: A.** Commit có ý nghĩa hỗ trợ đối chiếu và rollback.

## 11. Tổng kết

Bài học tập trung vào **Lộ trình xây dựng và cách cộng tác với coding agent** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:00:00](https://www.youtube.com/watch?v=qF5il_9IwME&t=0s) — 0:04:32.
