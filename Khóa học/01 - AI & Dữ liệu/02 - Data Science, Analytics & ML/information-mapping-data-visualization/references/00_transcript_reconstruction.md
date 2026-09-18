# Transcript Reconstruction Notes

## Mục đích

File này ghi lại cách xử lý transcript đầu vào. Transcript chứa rất nhiều lỗi ASR/dịch tự động, vì vậy **không thể dùng trực tiếp như nguồn sự kiện**.

## Những “neo” có thể nhận diện

| Timestamp | Cụm transcript | Chủ đề có thể liên quan | Độ tin cậy |
|---:|---|---|---|
| 01:37 | “lập bản đồ thông tin” | Information mapping | Cao |
| 02:12 | “Star Wars” | Ví dụ truyền thông / visual reference, chưa rõ | Thấp |
| 02:35 | “giải quyết giả thuyết...” | Hypothesis / reasoning | Trung bình |
| 03:35 | “sông Coxim...” | Có thể là địa danh hoặc lỗi ASR | Thấp |
| 04:14 | “New York Times” | Data journalism / báo chí | Trung bình |
| 04:26 | “Phố Wall...” | Finance / Wall Street visualization | Trung bình |
| 05:21 | “Chernobyl...” | Disaster / risk mapping | Cao |
| 05:26 | “tổ chức y tế...” | WHO / public-health communication | Trung bình–cao |
| 05:47 | “Wi‑Fi tại 600 trường học” | Education infrastructure case | Trung bình |

## Lựa chọn biên tập

Các cụm không rõ nghĩa như “DREC”, “uol.com”, “Lomba”, “Rausch”, “Destruction Acquisition”, “Erenice Israel e XTR…” **không được biến thành sự kiện hay khái niệm bịa đặt**. Thay vào đó, course mở rộng từ các chủ đề xác định được bằng nguồn học thuật/official.

## Nếu cần tái dựng sát video gốc hơn

Cần ít nhất một trong ba thứ:

1. URL video/khóa học gốc;
2. transcript ngôn ngữ gốc trước khi dịch;
3. audio/video file để đối chiếu.

Khi có một trong các nguồn đó, có thể tạo bản `v2` map chính xác từng timestamp → lesson.
