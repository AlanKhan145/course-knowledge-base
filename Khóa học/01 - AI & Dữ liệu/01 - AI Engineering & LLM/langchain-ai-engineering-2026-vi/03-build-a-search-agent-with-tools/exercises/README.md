# Bộ bài tập lập trình — Chương 03

Các script trong thư mục này được thiết kế theo dạng **starter có TODO**. Khi mở đầu, hàm TODO có thể chủ động ném `NotImplementedError`; đó là yêu cầu người học hoàn thiện, **không phải lỗi của các ví dụ hoàn chỉnh** trong `examples/` và `src/`.

## Danh sách bài tập

| Bài | Starter | Yêu cầu | Tiêu chí chấm |
| --- | --- | --- | --- |
| 01 | `01_router_todo.py` | Quyết định khi nào cần search | Đúng 5/5 tình huống; không gọi mạng |
| 02 | `02_tool_validation_todo.py` | Chặn query rỗng và limit không hợp lệ | Nhận valid, chặn invalid |
| 03 | `03_parse_search_todo.py` | Chuyển payload Tavily → danh sách `title/url/snippet` | Xử lý thiếu `results` và giá trị null |
| 04 | `04_grounding_todo.py` | Loại URLs không xuất hiện trong tool output | Không giữ URL bịa, không bỏ nguồn đúng |
| 05 | `05_schema_todo.py` | Schema nguồn lồng nhau, validate URL | Object hợp lệ được parse, invalid bị từ chối |

## Cách làm

1. Đọc bài học tương ứng trong `../lessons/`.
2. Mở starter, điền phần `TODO` mà không sửa tên hàm để tiện tự kiểm thử.
3. Tự thêm các trường hợp `input hợp lệ`, `input lỗi`, `thiếu dữ liệu`.
4. Kiểm thử mã minh họa bằng `uv run pytest -q` và test riêng bài tập khi đã hoàn thiện.
5. Bài nâng cao là [capstone AI Job Search Agent](capstone-ai-job-search.md).

**Nguyên tắc:** Dữ liệu có URL `example.org` ở starter chỉ là fixture; không dùng như tuyển dụng thật. Bài kiểm thử có thể dùng các `assert` tự viết mà không cần API key.
