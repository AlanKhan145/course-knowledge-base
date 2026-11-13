---
id: stock-beginners-s10-q1
title: "Quiz: Trắc nghiệm giới thiệu biểu đồ (Introduction to Charting Quiz)"
description: "Kiểm tra cách đọc biểu đồ đường, thanh, nến và các lựa chọn timeframe, thang giá, volume."
order: 4
duration: 10
difficulty: beginner
language: vi
tags: [quiz, bieu-do-gia, candlestick, volume]
assessment: true
source: "Udemy 696616 — Introduction to Charting Quiz"
---

# Quiz: Trắc nghiệm giới thiệu biểu đồ (Introduction to Charting Quiz)

> [!NOTE]
> Quiz bao quát [Biểu đồ đường và biểu đồ thanh](01-line-charts-bar-charts.md), [Giới thiệu biểu đồ nến](02-introduction-to-candlesticks-chart.md) và [Những cân nhắc khi đọc biểu đồ](03-charting-considerations.md). Hãy tự trả lời trước khi xem lời giải sau mỗi câu.

## Câu hỏi ôn tập

### Câu 1

Biểu đồ đường thường nối mức giá nào để trình bày xu hướng gọn nhất?

A. Giá đóng cửa
B. Giá cao nhất
C. Giá thấp nhất
D. Khối lượng

**Đáp án:** A. **Giải thích:** Biểu đồ đường thường nối close từng kỳ. High, low và volume không phải điểm close thông dụng.

### Câu 2

Một thanh giá có open = 30, high = 34, low = 27, close = 32. Đoạn dọc của thanh biểu diễn khoảng nào?

A. 30–32
B. 27–34
C. 30–34
D. 27–32

**Đáp án:** B. **Giải thích:** Đoạn dọc kéo từ low 27 đến high 34. Các khoảng còn lại bỏ sót một cực trị hoặc chỉ mô tả open-close.

### Câu 3

Trên nến, phần thân thường nối hai mức nào?

A. High và low
B. Close và high
C. Open và close
D. Open và low

**Đáp án:** C. **Giải thích:** Thân thể hiện open-close; bóng nối thân tới high hoặc low. Các lựa chọn khác mô tả từng đoạn bóng hoặc phạm vi toàn kỳ.

### Câu 4

Những phát biểu nào đúng về một cây nến? (Chọn nhiều.)

A. Nến tăng thông dụng có close cao hơn open.
B. Bóng dài đảm bảo giá sẽ đảo chiều.
C. Nến mã hóa các mốc OHLC của một kỳ.
D. Màu sắc không bao giờ thay đổi giữa nền tảng.

**Đáp án:** A, C. **Giải thích:** Nến tăng có close trên open và cấu tạo nến thể hiện OHLC. Bóng không đảm bảo đảo chiều; bảng màu có thể tùy chỉnh.

### Câu 5

Một nến có open = 18, close = 16, high = 19, low = 14. Đây là nến giảm theo quy ước thông dụng. Đúng hay sai?

A. Đúng
B. Sai

**Đáp án:** A. **Giải thích:** Close 16 thấp hơn open 18. Do đó nến giảm; high và low không đổi quan hệ này.

### Câu 6

Thang logarit thường hữu ích nhất cho mục đích nào?

A. So sánh khối lượng tuyệt đối
B. So sánh tỷ lệ phần trăm biến động qua giai đoạn dài
C. Xác định chính xác thứ tự giao dịch trong nến
D. Đảm bảo khoảng cách bằng nhau tương ứng cùng số tiền

**Đáp án:** B. **Giải thích:** Logarit làm rõ biến động tương đối. Thang này không đo thứ tự giao dịch hay volume; cùng số tiền là đặc tính của thang tuyến tính.

### Câu 7

Những nhận định nào đúng về timeframe và volume? (Chọn nhiều.)

A. Timeframe thấp hơn thường cho thấy nhiều chi tiết ngắn hạn hơn.
B. Một breakout trên khung ngắn chắc chắn xác nhận xu hướng dài hạn.
C. Volume cao có thể cho biết giao dịch sôi động hơn trong kỳ.
D. Volume cao đảm bảo giá tăng trong kỳ tiếp theo.

**Đáp án:** A, C. **Giải thích:** Khung thấp thường chi tiết hơn; volume cao cho thấy hoạt động giao dịch lớn theo nguồn dữ liệu. Breakout và volume đều không đảm bảo kết quả tương lai.

### Câu 8

Biểu đồ đường dùng close thường không cho thấy high và low nội kỳ. Đúng hay sai?

A. Đúng
B. Sai

**Đáp án:** A. **Giải thích:** Nếu chỉ nối close, các cực trị trong kỳ bị lược bỏ. Biểu đồ thanh hoặc nến thể hiện thêm high-low.

## Luyện thêm

```quiz
title: Luyện thêm
questions:
  - type: fill_blank
    prompt: "Trên nến, phần nối open với close gọi là ___; đoạn từ thân tới high hoặc low gọi là ___."
    blanks: [["thân", "thân nến"], ["bóng", "bóng nến", "bóng nến (wick)"]]
    explanation: "Thân thể hiện open-close; bóng nối thân với các cực trị high và low."
  - type: ordering
    prompt: "Sắp xếp trình tự kiểm tra cơ bản trước khi diễn giải biểu đồ."
    items: ["Chọn timeframe", "Chọn thang giá", "Đọc diễn biến giá", "Đối chiếu volume và bối cảnh"]
  - type: matching
    prompt: "Ghép cách biểu diễn với ý nghĩa thường thấy."
    pairs:
      - { left: "Biểu đồ đường", right: "Thường nối giá đóng cửa" }
      - { left: "Thang tuyến tính", right: "Khoảng cách bằng nhau là cùng số đơn vị giá" }
      - { left: "Thang logarit", right: "Khoảng cách bằng nhau là cùng tỷ lệ phần trăm" }
```

## Bài học tiếp theo

[Các mẫu nến cơ bản (Candlesticks Basic Patterns)](../11-candlestick-patterns/01-candlesticks-basic-patterns.md) — phần tiếp theo dùng cấu tạo nến để học cách nhận diện các mẫu hình cơ bản.
