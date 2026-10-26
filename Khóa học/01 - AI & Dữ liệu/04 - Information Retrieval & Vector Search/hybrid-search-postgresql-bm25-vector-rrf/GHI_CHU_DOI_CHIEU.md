# Ghi chú đối chiếu và giới hạn kỹ thuật

## 1. Phạm vi biên soạn

Từ một bài hướng dẫn xây ứng dụng Wiki Search bằng PostgreSQL, pg_textsearch, pgvector/pgvectorscale, Python và FastAPI. Nội dung đã chuyển thành bài học theo cấp độ: nguyên lý → thao tác SQL → kiến trúc → đánh giá. Có thêm bài tập chuyển miền sang món ăn để thực hành kỹ năng.

## 2. Thông số cần giữ chính xác

- Dataset tham chiếu: Simple English Wikipedia, snapshot `2023-11-01.simple`, **241.787** bài; Parquet nén khoảng **157 MB**.
- Keyword bao phủ toàn tập, semantic khoảng **25.000** bài; chọn 25.000 dài nhất cộng các bài minh họa có thể đạt **25.002**.
- Mỗi input embedding được tạo từ `title` và tối đa **1.500 ký tự đầu của body**; model tiếp tục có thể truncate.
- Cột vector có **384 chiều**. Một vị trí lời thoại chuyển âm thành `348`, nhưng phần tiếp theo ghi rõ `384` khi nói về cột và model; giáo trình dùng 384 xuyên suốt và không coi 348 là thông số cần triển khai.
- BM25 `k1=1.2`, `b=0.75` trong môi trường mô tả; `k=60` của RRF là hằng khác, không liên quan `k1`.
- RRF dùng keyword top-20 + semantic top-20, giữ top-10; trọng số mặc định 0.5/0.5, có minh họa semantic 0.7.
- API dùng FastAPI, connection pool tối đa **4** kết nối trong bản demo; insert chỉ báo thành công khi commit xong.
- Kế hoạch hybrid khoảng **71 ms** là một lần đo riêng của PostgreSQL, không bao gồm tính query embedding ở Python.
- Extension trong bài hướng tới `pg_textsearch 1.5.1`; đây là mốc môi trường được mô tả và cần xác minh khi sử dụng.

## 3. Các phần code mô phỏng

Không có repository đầy đủ và không có model identifier được đính kèm, nên các file `.sql` là mini demo được tự viết; ví dụ `FastAPI` trong bài 10 minh họa contract, không truy cập database thật. Mọi kết quả mô phỏng phải được gọi đúng là ví dụ, không ghi là benchmark đã đo.

## 4. Link tài liệu để so phiên bản

- https://www.tigerdata.com/docs/deploy/tiger-cloud/tiger-cloud-aws/tiger-cloud-extensions/pg-textsearch
- https://www.tigerdata.com/docs/learn/tutorials/hybrid-search
- https://www.postgresql.org/docs/current/textsearch.html
- https://github.com/pgvector/pgvector

## 5. Giấy phép dữ liệu

Thẻ dataset cho snapshot trong bài liệt kê Creative Commons Attribution-ShareAlike 3.0 và GNU Free Documentation License. Khi phân phối dữ liệu hoặc snippet, cần có dẫn nguồn/license và xem kỹ bản quyền của snapshot đang dùng; không tự coi bài học này như giấy phép tái phân phối bản gốc.
