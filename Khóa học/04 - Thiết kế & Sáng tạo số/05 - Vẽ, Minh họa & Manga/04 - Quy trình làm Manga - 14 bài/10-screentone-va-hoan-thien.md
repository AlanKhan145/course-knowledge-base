# Bài 10. Screentone, sắc độ và hoàn thiện trang manga đen trắng

## 1. Tóm tắt

Nhiều manga đen trắng tạo cảm giác có màu xám bằng **screentone**: các chấm hoặc họa tiết nhỏ tạo ảo giác sắc độ ở khoảng cách nhìn bình thường. Đây không phải điều kiện bắt buộc để một tác phẩm được gọi là manga, nhưng là kỹ thuật phổ biến giúp phân biệt vật liệu, ánh sáng và các lớp không gian.

## 2. Mục tiêu học tập

- Giải thích cơ chế thị giác của screentone.
- Phân biệt mảng đen, mảng trắng, xám phẳng và tone chấm.
- Chọn quy trình tone truyền thống hoặc kỹ thuật số phù hợp.
- Phát hiện nguy cơ moiré, mất chấm và độ tương phản kém khi xuất.

## 3. Screentone hoạt động thế nào?

Screentone dùng mật độ, kích cỡ hoặc kiểu sắp xếp chấm để mắt nhìn thấy vùng tối–sáng khác nhau. Vùng có nhiều phần đen thường trông tối hơn; vùng có ít phần đen trông sáng hơn. Bên cạnh dạng chấm còn có tone đường, hoa văn và tone tạo cảm giác vật liệu.

**Không nên nhầm** screentone với cách tô toàn bộ manga bằng xám phẳng. Xám phẳng có thể phù hợp khi phát hành kỹ thuật số, nhưng khi in phải tính đến quy trình tái hiện sắc độ. Tone chấm cũng không tự động tốt hơn; lạm dụng tone làm giảm độ rõ.

## 4. Phân tầng sáng tối

Trước khi thêm tone, hãy quyết định **đâu là vùng sáng, vùng tối và trọng tâm**. Gợi ý trình tự:

1. Giữ các vùng trắng để tạo điểm nghỉ cho mắt.
2. Đặt mảng đen ở nơi cần tương phản mạnh hoặc nhấn bối cảnh.
3. Thêm tone trung gian vào mặt phẳng, trang phục hoặc nền.
4. Kiểm tra nhân vật có tách khỏi nền không.
5. Thu nhỏ trang để đánh giá lại độ rõ hành động.

Ví dụ, trong cảnh chiếc đèn phát sáng, hãy giữ quầng sáng tương đối trắng và giảm tone xung quanh; như vậy ánh sáng được nhận biết ngay mà không cần thêm quá nhiều nét hiệu ứng.

## 5. Tone truyền thống và kỹ thuật số

| Cách làm | Quy trình | Điểm cần lưu ý |
| --- | --- | --- |
| Truyền thống | Dán tờ screentone lên bản vẽ, cắt theo vùng | Chi phí vật liệu, kỹ năng cắt, nguy cơ bong mép |
| Kỹ thuật số | Tô vùng sắc độ hoặc tone bằng layer, mask và mẫu chấm | Kiểm tra kích thước chấm, độ phân giải và xuất file |
| Kết hợp | Vẽ–đi mực tay, quét và tạo tone số | Cần làm sạch ảnh quét, giữ nét không bị nhòe |

Nếu quét bản vẽ tay, hãy đặt bản vẽ phẳng, tránh bóng và biến dạng, kiểm tra độ tương phản rồi làm sạch bụi hoặc vết gôm. Quá trình tone số có thể thực hiện trong phần mềm đồ họa phù hợp; tên công cụ không quyết định kết quả.

## 6. Rủi ro khi xuất hoặc thay đổi kích thước

**Moiré** là dạng hoa văn giả xuất hiện khi các họa tiết chấm tương tác với lưới lấy mẫu hoặc quy trình in/hiển thị. Tone quá nhỏ có thể mất chi tiết; tone quá dày có thể trở thành mảng tối. Không có một tần số hoặc kích cỡ chấm tối ưu cho mọi máy in và mọi độ phân giải.

Trước khi giao file, hãy kiểm tra thử ở **kích thước và quy trình đầu ra dự kiến**; tránh thay đổi kích thước trang nhiều lần sau khi đã chuyển tone thành chấm nếu không có cách xử lý phù hợp.

## 7. Thực hành

Chọn một trang đã đi nét. Tạo hai bản: **A — chỉ đen trắng với mảng chính**, **B — thêm screentone**. So sánh độ rõ nhân vật, bối cảnh và vùng trọng tâm ở cùng kích thước xem. Kiểm tra trang B ở cả chế độ zoom 100% và kích thước in/đọc dự kiến.

**Tiêu chí hoàn thành:** tone giúp đọc hình hoặc diễn đạt chất liệu; không lấn át nhân vật; không có vùng chấm bị hỏng rõ rệt; đầu ra đã được kiểm tra.

## 8. Câu hỏi ôn tập

**Câu 1.** Screentone dạng chấm tạo cảm giác xám như thế nào?

A. Bằng cách chỉ sử dụng một mảng đen hoàn toàn.  
B. Bằng cách thay kịch bản bằng hình.  
C. Bằng cấu trúc chấm/họa tiết mà mắt tổng hợp thành sắc độ.  
D. Bằng việc tăng số panel.

**Đáp án:** C. **Giải thích:** Các chấm nhỏ tạo ảo giác đậm–nhạt khi được quan sát ở kích thước phù hợp.

**Câu 2.** Khi nào nên thêm screentone?

A. Khi đã xác định mảng sáng tối và tone phục vụ chiều sâu hoặc chất liệu.  
B. Trước khi chọn bố cục trang.  
C. Để phủ hết vùng trắng.  
D. Để thay mọi mảng đen.

**Đáp án:** A. **Giải thích:** Tone cần phối hợp với hệ thống tương phản đã được tổ chức.

**Câu 3.** Nếu các chấm tone thành vân lạ sau xuất, hiện tượng nào có thể xảy ra?

A. Đảo thứ tự chương.  
B. Thay đổi cốt truyện.  
C. Lệch số trang.  
D. Moiré do chồng lưới hoặc lấy mẫu.

**Đáp án:** D. **Giải thích:** Moiré là hoa văn giả khi các cấu trúc tuần hoàn tương tác.

**Câu 4.** Quy trình kết hợp vẽ tay và tone số cần bước nào?

A. Ghi âm nhân vật.  
B. Quét và làm sạch bản đi mực trước khi tô tone số.  
C. Bỏ qua kiểm tra ảnh.  
D. Chèn PDF trước khi quét.

**Đáp án:** B. **Giải thích:** Bản quét sạch giúp tone và nét mực không bị lẫn lỗi vật lý.

**Câu 5.** Phát biểu nào chính xác về manga và screentone?

A. Manga bắt buộc phải có tone chấm.  
B. Mọi chất liệu đều phải dùng chung một tone.  
C. Screentone là một kỹ thuật phổ biến, không phải điều kiện định nghĩa bắt buộc.  
D. Tone không liên quan tới khả năng đọc trang.

**Đáp án:** C. **Giải thích:** Tạo sắc độ là một lựa chọn ngôn ngữ hình ảnh và kỹ thuật, không phải tiêu chí duy nhất xác định manga.

## 9. Tổng kết

Screentone hiệu quả khi giúp người đọc nhận biết ánh sáng, vật liệu và chiều sâu. Hãy đánh giá chất lượng ở đầu ra thực tế, không chỉ ở chế độ xem phóng lớn.
