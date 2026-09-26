# 09 — Hạn chế, bài học phương pháp và hướng nghiên cứu

## 1. Ba thách thức phương pháp trung tâm

Paper kết luận ba nhóm thách thức chính khi tạo parallel cross-platform dataset:

1. **Metadata complexity + data quality**
2. **Khác biệt information organization giữa nền tảng**
3. **Pitfalls của xử lý dữ liệu văn hóa đa ngôn ngữ**

## 2. Hạn chế của nghiên cứu

Các dataset bị giới hạn bởi:

- dữ liệu mà mỗi nền tảng công khai;
- khả năng ghép cặp work/page;
- khác biệt edition aggregation;
- search behavior theo ngôn ngữ;
- tính không hoàn hảo của bibliographic control;
- khác biệt user base và platform context.

## 3. Bài học lớn: đừng ép “apples-to-apples” khi dữ liệu không cho phép

Paper đặt câu hỏi rất thực tế: nếu không thể làm so sánh hoàn toàn đối xứng, làm sao dùng dữ liệu hạn chế một cách đáng tin cậy?

Một câu trả lời phương pháp từ chính workflow của nghiên cứu là:

- công khai khác biệt;
- thu hẹp đơn vị so sánh;
- dùng manual verification khi cần;
- chọn metric phù hợp;
- diễn giải có bối cảnh nền tảng.

## 4. Hướng nghiên cứu tiếp theo

Tác giả đề xuất:

- mở rộng sang các nền tảng/ngôn ngữ khác;
- xây multilingual parallel book-review datasets;
- kết hợp platform studies và sociotechnical systems;
- nghiên cứu vai trò của **paratexts** và **translations**;
- kết hợp computational methods với book history/bibliography;
- phân tích các edition khác nhau của cùng work.

## 5. Tổng kết khóa lý thuyết

Cross-platform cultural data không chỉ là bài toán merge hai bảng. Nó là bài toán đồng thời của:

```text
bibliography
+ platform design
+ metadata quality
+ multilingual matching
+ statistical comparison
+ cultural interpretation
```

Đó là lý do paper dùng cả kiểm tra thủ công lẫn xử lý tính toán.
