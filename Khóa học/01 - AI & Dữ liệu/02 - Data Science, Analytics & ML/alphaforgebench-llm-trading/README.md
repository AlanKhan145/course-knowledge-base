# Khóa học: AlphaForgeBench - Thiết kế chiến lược giao dịch end-to-end bằng LLM

## Giới thiệu

Khóa học này được biên soạn trực tiếp từ PDF **AlphaForgeBench: Benchmarking End-to-End Trading Strategy Design with Large Language Models** (KDD'26). Mục tiêu là chuyển bài báo thành một lộ trình học độc lập, dễ theo dõi, tập trung vào cách đánh giá LLM trong tài chính định lượng thông qua **sinh alpha factor, sinh logic chiến lược có thể thực thi và backtest xác định**.

Tài liệu gốc cho rằng benchmark giao dịch kiểu để LLM trực tiếp phát ra hành động BUY/HOLD/SELL dễ gặp bất ổn lớn giữa các lần chạy. AlphaForgeBench đổi vai trò của LLM từ "trader ra lệnh từng bước" thành "quant researcher viết logic chiến lược", sau đó giao phần thực thi cho backtest engine xác định.

## Mục tiêu học tập

Sau khóa học, người học có thể:

1. Giải thích vì sao benchmark giao dịch trực tiếp bằng LLM có thể thiếu tính tái lập.
2. Phân biệt benchmark kiến thức tài chính, benchmark trading agent và benchmark sinh chiến lược dạng code.
3. Mô tả pipeline xây dựng dữ liệu hai giai đoạn của AlphaForgeBench.
4. Mô tả quy trình prompt -> sinh code -> backtest -> đo nhiều chỉ số.
5. Giải thích taxonomy 3 × 3 gồm ba mức năng lực và ba mức độ khó.
6. Đọc đúng các chỉ số ARR, SR, MDD, CR, SoR và VOL trong bối cảnh bài báo.
7. Phân tích các kết quả Stage 1 và Stage 2 mà không đánh đồng hiệu quả benchmark với khả năng triển khai giao dịch ngoài đời.
8. Nhận diện giới hạn thực nghiệm của benchmark.

## Cấu trúc khóa học

- `lessons/00-gioi-thieu-va-ban-do-bai-bao.md`
- `lessons/01-van-de-bat-on-dinh-cua-llm-trading-agent.md`
- `lessons/02-boi-canh-benchmark-tai-chinh.md`
- `lessons/03-kien-truc-alphaforgebench.md`
- `lessons/04-xay-dung-dataset-hai-giai-doan.md`
- `lessons/05-pipeline-sinh-code-va-backtest.md`
- `lessons/06-thiet-ke-thi-nghiem-va-he-metric.md`
- `lessons/07-ket-qua-stage-1-real-world.md`
- `lessons/08-ket-qua-stage-2-structured.md`
- `lessons/09-thao-luan-gioi-han-va-ket-luan.md`
- `exercises/01-cau-hoi-on-tap.md`
- `exercises/02-bai-tap-phan-tich.md`
- `exercises/03-mini-project-thiet-ke-benchmark.md`

## Tài nguyên hình ảnh

- `assets/figures/`: các hình chính của bài báo đã tách/cắt riêng.
- `assets/tables/`: Table 1 và Table 2 ở dạng ảnh độ phân giải cao.
- `assets/raw-extracted/`: ảnh raster nhúng trong PDF được trích xuất trực tiếp.
- `source/`: PDF gốc, text thô và metadata.

## Phạm vi nguồn

PDF được cung cấp có **10 trang**. Bài báo nhiều lần dẫn tới Appendix C/D/E/F/G, nhưng các appendix đó **không nằm trong tệp PDF này**. Vì vậy khóa học không tự bịa nội dung appendix; các điểm cần appendix được đánh dấu rõ là giới hạn của nguồn hiện có.

## Gợi ý cách học

Học theo thứ tự 00 -> 09, sau đó làm phần bài tập. Khi gặp kết quả định lượng, nên mở hình và bảng tương ứng trong `assets/` để đối chiếu trước khi rút ra kết luận.
