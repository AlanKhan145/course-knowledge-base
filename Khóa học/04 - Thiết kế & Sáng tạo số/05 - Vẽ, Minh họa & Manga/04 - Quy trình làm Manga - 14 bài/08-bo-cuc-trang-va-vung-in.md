# Bài 08. Dựng trang manga và xác định vùng an toàn khi in

## 1. Tóm tắt

Trang manga không chỉ có hình và panel. Khi in, giấy được cắt và đóng gáy nên một phần mép trang có thể biến mất hoặc khó nhìn. Hiểu **bleed, trim và vùng an toàn** giúp tránh mất nét, bong bóng thoại hay chi tiết quan trọng khi chế bản.

## 2. Mục tiêu học tập

- Phân biệt mép tràn cắt (bleed), đường cắt thành phẩm (trim) và vùng an toàn (safe area).
- Đặt panel, thoại và các hình quan trọng tránh vùng có nguy cơ mất khi in.
- Kiểm tra khác biệt trang bên trái và bên phải gần gáy.
- Thiết lập trang theo thông số của đơn vị in thay vì áp dụng máy móc một kích thước.

## 3. Ba vùng cơ bản của trang

**Trim:** đường mà trang giấy dự kiến được cắt tới kích thước thành phẩm. **Bleed:** phần hình vượt ra ngoài đường trim để tránh tạo viền trắng nếu cắt lệch nhẹ. **Safe area:** vùng lùi vào trong trim, nơi nên giữ chữ và các chi tiết cần đọc.

```text
┌───────────────────────────────────────┐
│ BLEED: phần có thể bị cắt bỏ          │
│   ┌───────────────────────────────┐   │
│   │ TRIM: kích thước thành phẩm    │   │
│   │   ┌───────────────────────┐   │   │
│   │   │ SAFE AREA             │   │   │
│   │   │ chữ, gương mặt,       │   │   │
│   │   │ thông tin quan trọng  │   │   │
│   │   └───────────────────────┘   │   │
│   └───────────────────────────────┘   │
└───────────────────────────────────────┘
```

Sơ đồ chỉ biểu diễn **quan hệ giữa các vùng**, không phải tỷ lệ đo thực tế. Nhiều quy trình in sử dụng bleed khoảng **3–5 mm**, nhưng đó chỉ là phạm vi tham khảo; hãy lấy kích thước chính xác, lề an toàn và quy cách gáy từ **nhà in hoặc nền tảng xuất bản** trước khi tạo file cuối.

## 4. Đặt hình ở mép trang và gần gáy

Các mảng nền, screentone và khung vẽ tràn trang có thể tiếp tục qua vùng bleed. Ngược lại, chữ, các nét mặt cần đọc, số liệu hoặc phần quan trọng của nhân vật nên nằm trong safe area. Ở sát gáy sách, một phần trang có thể khó nhìn tùy cách đóng; không đặt chữ nhỏ hoặc bong bóng thoại ở đó.

Trong storyboard, hãy ghi rõ trang bên trái/bên phải theo hướng đọc và đóng gáy thực tế. Điều này tránh việc phải di chuyển cả khung truyện ở giai đoạn hoàn thiện.

## 5. Dựng file vẽ cho in và số

Nếu dự định in, xác định trước: kích thước thành phẩm, bleed, safe area, chiều gáy, độ phân giải cần xuất và yêu cầu màu. Nếu chỉ xuất bản trên nền tảng đọc số, ưu tiên giới hạn kích thước, cách cuộn trang và định dạng nền tảng đó yêu cầu. Không mặc định thông số dành cho in áp dụng y hệt với web manga.

Khi vẽ tay, có thể sử dụng giấy bản thảo manga có đánh dấu các vùng. Khi vẽ số, tạo template và khóa các đường guide trên layer riêng để tránh vô tình vẽ đè hoặc xuất chúng vào sản phẩm cuối.

## 6. Checklist trước khi vẽ chi tiết

- Đã biết kích thước thành phẩm và hướng đọc của ấn phẩm.
- Guide của trim, bleed và safe area được đặt đúng theo quy cách.
- Bong bóng thoại, mặt nhân vật và chi tiết bắt buộc nằm trong vùng an toàn.
- Hình tràn trang thực sự kéo dài qua trim tới bleed nếu cần.
- Các trang gần gáy đã được xem thử dưới dạng cặp trang.

## 7. Thực hành

Tạo một **template trang manga** có ba vùng phân biệt rõ, sau đó đặt hai panel: một panel tràn ra mép trang và một panel chứa lời thoại gần mép trong. Kiểm tra lại với kích thước sau cắt dự kiến và sửa vị trí thoại nếu sát mép.

**Tiêu chí hoàn thành:** không còn thông tin quan trọng nằm ngoài vùng an toàn; hình tràn được xử lý đúng; template không chứa thông số in suy đoán khi chưa có quy cách.

## 8. Câu hỏi ôn tập

**Câu 1.** Bleed có nhiệm vụ gì?

A. Chứa tất cả lời thoại.  
B. Cho hình kéo vượt đường cắt để giảm nguy cơ lộ viền trắng.  
C. Là nơi đặt tên tác giả.  
D. Là đường gấp giữa sách.

**Đáp án:** B. **Giải thích:** Bleed là vùng ảnh dự phòng ngoài kích thước thành phẩm.

**Câu 2.** Vùng nào phù hợp nhất cho chữ quan trọng?

A. Bleed.  
B. Bất kỳ vị trí nào ngoài trang.  
C. Sát đường trim.  
D. Bên trong safe area.

**Đáp án:** D. **Giải thích:** Safe area giúp giảm rủi ro chữ bị cắt hoặc khuất do gáy.

**Câu 3.** Khi nguồn hướng dẫn nêu bleed 3–5 mm, cần làm gì trước khi xuất file in thực?

A. Xác nhận thông số chính xác với nhà in hoặc nền tảng phát hành.  
B. Chọn ngẫu nhiên một giá trị.  
C. Không cần đặt bleed.  
D. Đặt chữ trong bleed.

**Đáp án:** A. **Giải thích:** Mỗi đơn vị và quy cách thành phẩm có thể yêu cầu thông số khác nhau.

**Câu 4.** Rủi ro chính khi đặt bong bóng thoại sát gáy là gì?

A. Làm sai tên nhân vật.  
B. Làm trang có màu hơn.  
C. Có thể khó đọc hoặc bị che khi sách đóng gáy.  
D. Làm file PDF có nhiều chương.

**Đáp án:** C. **Giải thích:** Phần mép trong chịu ảnh hưởng của cách mở và đóng sách.

**Câu 5.** Trên template số, nên xử lý đường guide như thế nào?

A. In luôn cùng nét vẽ.  
B. Đặt layer riêng và ẩn khi xuất bản cuối.  
C. Xóa trước khi vẽ.  
D. Dùng làm chữ trong truyện.

**Đáp án:** B. **Giải thích:** Guide chỉ hỗ trợ dàn trang; nó không phải thành phần nội dung của trang hoàn chỉnh.

## 9. Tổng kết

Thiết kế trang đẹp phải đi đôi với khả năng tái hiện chính xác khi in hoặc hiển thị số. Xác định vùng trang trước khi lên nét giúp giảm sửa chữa ở cuối dự án.
