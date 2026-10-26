# Thuật ngữ cốt lõi PostgreSQL Full-Text Search

| Thuật ngữ | Ý nghĩa |
| --- | --- |
| FTS / Full-Text Search | Tìm kiếm văn bản theo lexeme và điều kiện truy vấn |
| Token | Mảnh văn bản do parser nhận diện |
| Lexeme | Dạng từ sau xử lý từ điển |
| Stop word | Từ phổ biến bị loại bỏ theo cấu hình từ điển |
| Stemming | Quy về một gốc từ cho mục đích so khớp |
| `tsvector` | Dữ liệu biểu diễn tài liệu tìm kiếm |
| `tsquery` | Dữ liệu biểu diễn điều kiện tìm kiếm |
| `@@` | Kiểm tra một tài liệu khớp truy vấn FTS |
| `setweight` | Gắn nhãn trọng số A/B/C/D |
| `ts_rank` | Tính điểm phù hợp |
| `ts_rank_cd` | Ranking xét mật độ/khoảng cách lexeme |
| `ts_headline` | Tạo đoạn trích có đánh dấu từ khớp |
| GIN | Chỉ mục đảo thường phù hợp với FTS |
| GiST | Kiểu chỉ mục có thể dùng chữ ký trên `tsvector` |
| Materialized view | Kết quả truy vấn được lưu vật lý, phải refresh |
| `REFRESH ... CONCURRENTLY` | Refresh cho phép đồng thời đọc, có các điều kiện tiên quyết |
| `pg_trgm` | Extension tạo trigram và tính tương tự chuỗi |
| `ts_stat` | Trích thống kê lexeme từ `tsvector` |
| `unaccent` | Extension hỗ trợ bỏ dấu qua từ điển/hàm |
| Debounce | Gộp yêu cầu khi người dùng đang gõ |
| Search on submit | Tìm sau khi bấm nút/gửi form |
| Search as you type | Tìm khi gõ, thường kết hợp debounce |

Đọc thêm tài liệu chính thức: [PostgreSQL Text Search](https://www.postgresql.org/docs/current/textsearch.html), [pg_trgm](https://www.postgresql.org/docs/current/pgtrgm.html).
