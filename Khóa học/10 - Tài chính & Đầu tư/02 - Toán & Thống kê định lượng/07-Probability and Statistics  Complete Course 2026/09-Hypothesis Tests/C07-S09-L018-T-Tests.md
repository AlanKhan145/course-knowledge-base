# T-Tests

**Khóa học:** Probability and Statistics: Complete Course 2026  
**Module 09:** Hypothesis Tests  
**Thứ tự:** Bài 018 · **Loại mục Udemy:** VIDEO_LECTURE · **Thời lượng metadata:** 12.9 phút  
**Trang khóa học:** https://www.udemy.com/course/probability-and-statistics-complete-course  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Tóm tắt

T-test dùng khi chưa biết sigma tổng thể và chỉ có SD mẫu s; thống kê t theo phân phối t với n-1 bậc tự do, đuôi dày hơn chuẩn khi n nhỏ.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

1. Giải thích mục đích và thuật ngữ chính của **T-Tests**.
2. Mô tả giả định, dữ liệu đầu vào và kết quả cần quan sát.
3. Tính hoặc kiểm tra một ví dụ nhỏ có thể tái lập.
4. Nêu ít nhất hai trường hợp dẫn đến kết luận không đáng tin.

## 3. Bối cảnh và kiến thức cốt lõi

Trong toán và thống kê ứng dụng, một khái niệm chỉ có ích khi định nghĩa, điều kiện áp dụng và ý nghĩa của kết quả được nêu rõ. Với chủ đề **T-Tests**, cần tách ba câu hỏi: đối tượng toán học nào đang được xét; giả thiết nào được sử dụng; và cách nào kiểm tra kết quả.

T-test dùng khi chưa biết sigma tổng thể và chỉ có SD mẫu s; thống kê t theo phân phối t với n-1 bậc tự do, đuôi dày hơn chuẩn khi n nhỏ.

Một biểu thức quan trọng là:

$$
t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}},\quad \nu=n-1
$$

Khi dùng công thức, cần ghi rõ ký hiệu, đơn vị và điều kiện áp dụng trước khi tính toán.

## 4. Cách áp dụng và ví dụ thực hành

**Bài toán:** Với mẫu 12 số tự chọn, kiểm định H0: mu=100 bằng t thủ công rồi so với scipy.stats.ttest_1samp.

Quy trình đề xuất:

1. Phát biểu chính xác định nghĩa và điều kiện áp dụng của chủ đề.
2. Tính một ví dụ nhỏ bằng tay với số liệu đơn giản.
3. Kiểm tra lại bằng Python/NumPy hoặc một cách tính độc lập.
4. Thử trường hợp suy biến hoặc điều kiện không thỏa mãn để thấy khi nào kết luận sai.
5. Ghi lại kết luận, giả thiết đã dùng và những điểm cần xem lại.

## 5. Những lỗi thường gặp

- Áp dụng công thức khi chưa kiểm tra điều kiện (độc lập, khả nghịch, hội tụ, ...).
- Nhầm một ví dụ minh họa với chứng minh tổng quát.
- Làm tròn quá sớm khiến kết quả cuối sai lệch.
- Không kiểm tra lại kết quả bằng một cách tính độc lập.

## 6. Câu hỏi ôn tập

### Câu 1

Khi học “T-Tests”, thực hành nào giúp tránh kết luận sai nhất?

A. Học thuộc công thức mà không xem điều kiện áp dụng  
B. Nêu rõ định nghĩa, điều kiện áp dụng và kiểm tra bằng ví dụ cụ thể  
C. Bỏ qua các trường hợp đặc biệt  
D. Chỉ tin vào một phép tính duy nhất  

**Đáp án:** B. **Giải thích:** Điều kiện áp dụng và ví dụ cụ thể giúp phát hiện sớm việc dùng sai công thức.

### Câu 2

Kết quả tính toán cho “T-Tests” nên được kiểm tra như thế nào?

A. Chỉ cần kết quả trông hợp lý  
B. Không cần kiểm tra lại  
C. Đối chiếu với ví dụ tính tay và một cách tính độc lập (ví dụ bằng NumPy)  
D. Chỉ kiểm tra trên số liệu thuận lợi  

**Đáp án:** C. **Giải thích:** Hai cách tính độc lập cho cùng kết quả là bằng chứng tốt hơn một phép tính duy nhất.

### Câu 3

Khi áp dụng “T-Tests”, điều nào cần xác định trước?

A. Giả thiết và điều kiện áp dụng  
B. Chỉ kết quả mong muốn  
C. Không cần biết số liệu hay đối tượng đến từ đâu  
D. Chỉ tên công thức  

**Đáp án:** A. **Giải thích:** Giả thiết quyết định kết luận có còn đúng hay không.

### Câu 4

Nếu điều kiện của “T-Tests” không được thỏa mãn thì nên làm gì?

A. Vẫn áp dụng công thức vì nó quen thuộc  
B. Làm tròn mạnh để kết quả trông gọn hơn  
C. Bỏ điều kiện ra khỏi phát biểu  
D. Kiểm tra lại giả thiết, chọn phương pháp phù hợp hơn hoặc nêu rõ giới hạn của kết luận  

**Đáp án:** D. **Giải thích:** Ngoài phạm vi điều kiện, kết luận có thể sai dù phép tính đúng.

### Câu 5

Điều nào phù hợp khi ghi chép lời giải liên quan đến “T-Tests”?

A. Chỉ ghi đáp án cuối  
B. Ghi giả thiết, các bước biến đổi chính và cách kiểm tra kết quả  
C. Xóa các bước nháp  
D. Không ghi đơn vị hay ký hiệu  

**Đáp án:** B. **Giải thích:** Lời giải có giả thiết và bước kiểm tra giúp người khác (và chính bạn sau này) xác minh được.

## 7. Tổng kết

**T-Tests** chỉ trở thành kỹ năng khi bạn phát biểu được định nghĩa, tự tính lại được ví dụ và nêu rõ điều kiện áp dụng. Hãy lưu lời giải, mã kiểm tra và các nhận xét cùng với bài học.
