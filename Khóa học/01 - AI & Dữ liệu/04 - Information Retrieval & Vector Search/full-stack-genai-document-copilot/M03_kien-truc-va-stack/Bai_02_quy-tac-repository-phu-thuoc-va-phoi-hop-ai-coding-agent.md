# Bài 2. Quy tắc repository, phụ thuộc và phối hợp AI coding agent

> **Module 03 — Stack công nghệ và kiến trúc**  
> Thời điểm tham chiếu: [0:18:45](https://www.youtube.com/watch?v=qF5il_9IwME&t=1125s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Xây conventions phù hợp với monorepo và giảm nguy cơ đứt gãy khi cập nhật thư viện hoặc giao việc cho agent.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Quy tắc repository, phụ thuộc và phối hợp AI coding agent**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Python thường sử dụng `uv` để khóa và đồng bộ dependencies; frontend React dùng `pnpm`. Trong thực hành, người dạy còn đặt quy tắc tránh những package vừa phát hành, pin phiên bản và dùng agent instructions riêng cho từng thư mục. Đây là chính sách quản trị phụ thuộc, không phải bảo đảm tuyệt đối trước supply-chain attack.

## 4. Kiến thức cốt lõi

### 4.1. Quy định stack

Chốt công nghệ chính trước khi sinh code giúp agent tránh tự ý thay FastAPI bằng framework khác hoặc kéo thêm nhiều thư viện chồng chéo. Mỗi thư mục nên định nghĩa lệnh setup, run, test, format riêng.

### 4.2. Version và kiểm tra dependency

Pin hoặc lock phiên bản giúp hai máy dựng được môi trường tương tự. Chính sách tuổi phát hành tối thiểu giúp giảm rủi ro package vừa bị đưa lên nhưng không thay kiểm toán nguồn gốc, lockfile và cập nhật bảo mật.

### 4.3. Review AI changes

Prompt cần yêu cầu agent tạo giải pháp có lệnh kiểm chứng, không chạy script nguy hiểm tự động. Mỗi thay đổi cần xem import, dữ liệu nhạy cảm, quyền DB và regression.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Viết root `AGENTS.md` với mục tiêu, stack, dependency policy và lệnh test.

**Bước 2.** Thêm `backend/AGENTS.md` về FastAPI, SQLAlchemy, Alembic và `frontend/AGENTS.md` về React/TypeScript.

**Bước 3.** Cấu hình lint, typecheck và smoke test trên các thư mục tương ứng.

**Bước 4.** Thử giao agent một thay đổi nhỏ và đánh giá kết quả theo checklist.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```text
repo/
  AGENTS.md
  backend/
    AGENTS.md
    pyproject.toml
  frontend/
    AGENTS.md
    package.json
  data/
  docs/
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Có lockfile và lệnh tái tạo môi trường.
- [ ] Không có phụ thuộc lạ chỉ vì agent đề xuất.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Quy tắc “không package quá mới” không thay quét lỗ hổng.

2. Tài liệu AGENTS.md không được chứa mật khẩu hoặc token thật.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo bộ ba AGENTS.md cơ bản cho monorepo và một pull request mẫu với test chạy được.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Tác dụng của lockfile?

A. Tái tạo bộ phiên bản dependency đã được chọn.  
B. Để agent biết conventions cụ thể của frontend và backend.  
C. Giảm biến động do cập nhật tự động ngoài ý muốn.  
D. Bao gồm phạm vi, kiểm thử và tiêu chí nghiệm thu.  

**Đáp án: A.** Giảm khác biệt môi trường giữa máy và CI.

**Câu 2.** Vì sao viết rules cho từng thư mục?

A. Giảm biến động do cập nhật tự động ngoài ý muốn.  
B. Bao gồm phạm vi, kiểm thử và tiêu chí nghiệm thu.  
C. Secret sản xuất.  
D. Để agent biết conventions cụ thể của frontend và backend.  

**Đáp án: D.** Các khu vực có ngôn ngữ và công cụ khác nhau.

**Câu 3.** Việc pin package giải quyết vấn đề nào?

A. Bao gồm phạm vi, kiểm thử và tiêu chí nghiệm thu.  
B. Secret sản xuất.  
C. Giảm biến động do cập nhật tự động ngoài ý muốn.  
D. Tái tạo bộ phiên bản dependency đã được chọn.  

**Đáp án: C.** Nó không sửa được lỗ hổng của phiên bản đang pin.

**Câu 4.** Yêu cầu tốt trong prompt cho agent?

A. Secret sản xuất.  
B. Bao gồm phạm vi, kiểm thử và tiêu chí nghiệm thu.  
C. Tái tạo bộ phiên bản dependency đã được chọn.  
D. Để agent biết conventions cụ thể của frontend và backend.  

**Đáp án: B.** Kết quả cần có thể review.

**Câu 5.** Mục nào không nên đưa vào AGENTS.md?

A. Secret sản xuất.  
B. Tái tạo bộ phiên bản dependency đã được chọn.  
C. Để agent biết conventions cụ thể của frontend và backend.  
D. Giảm biến động do cập nhật tự động ngoài ý muốn.  

**Đáp án: A.** Các tệp instruction có thể đi vào repository.

## 11. Tổng kết

Bài học tập trung vào **Quy tắc repository, phụ thuộc và phối hợp AI coding agent** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:18:45](https://www.youtube.com/watch?v=qF5il_9IwME&t=1125s) — 0:28:34.
