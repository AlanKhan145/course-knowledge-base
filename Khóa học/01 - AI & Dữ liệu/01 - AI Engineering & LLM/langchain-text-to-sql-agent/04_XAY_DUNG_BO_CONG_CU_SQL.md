# Bài 04 — Thiết kế bốn công cụ làm việc với SQLite

## 1. Tóm tắt

Một bộ công cụ tối thiểu gồm `list_tables`, `describe_table`, `sample_table`, `execute_sql`. Ba công cụ đầu giúp khám phá schema và dữ liệu mẫu; công cụ cuối mới chạy SQL do mô hình đề xuất. Mỗi công cụ phải có tên, tham số, mô tả rõ ràng và quy tắc an toàn.

## 2. Mục tiêu học tập

Bạn sẽ viết được công cụ dùng `@tool`, hiểu `ToolMessage`, giới hạn độ dài kết quả và kiểm soát kết nối SQLite chỉ đọc.

## 3. Chức năng và thời điểm gọi

| Tool | Đầu vào | Đầu ra | Khi dùng |
| --- | --- | --- | --- |
| `list_tables` | Không yêu cầu tên bảng | Danh sách bảng | Lần đầu khám phá database |
| `describe_table` | Tên bảng | Cột, kiểu, khóa chính | Chưa rõ tên trường/cấu trúc |
| `sample_table` | Bảng, số dòng | Vài bản ghi | Cần hiểu giá trị thực tế |
| `execute_sql` | Câu `SELECT` | Kết quả có giới hạn | Trả lời câu hỏi dữ liệu |

Trong ví dụ ban đầu, tác giả còn thêm tham số giải thích cho mỗi công cụ để có thể theo dõi vì sao agent chọn một thao tác. Đây là tùy chọn thiết kế hữu ích cho audit/debug, nhưng không cần thiết cho bản cơ bản.

## 4. Kết nối dữ liệu ở chế độ chỉ đọc

```python
import sqlite3
from contextlib import contextmanager
from pathlib import Path

DB_FILE = Path("ecommerce.sqlite").resolve()


@contextmanager
def open_readonly():
    conn = sqlite3.connect(f"{DB_FILE.as_uri()}?mode=ro", uri=True)
    try:
        conn.execute("PRAGMA query_only = ON")
        conn.row_factory = sqlite3.Row
        yield conn
    finally:
        conn.close()
```

Đây là lớp bảo vệ ở mức kết nối. `mode=ro` không cho phép cập nhật file database; `query_only` ngăn thao tác ghi trong connection. Với ứng dụng production, cần thêm chính sách cấp quyền cho tiến trình, giới hạn tài nguyên và đánh giá SQL cho phù hợp threat model. Không bao giờ để agent kết nối với credential có toàn quyền trên dữ liệu thật.

## 5. Hai công cụ khám phá schema

```python
import json
from langchain.tools import tool

@tool
def list_tables() -> str:
    """Liệt kê tên các bảng mà agent có thể truy vấn trong SQLite."""
    with open_readonly() as conn:
        rows = conn.execute("""
            SELECT name FROM sqlite_master
            WHERE type = 'table' AND name NOT LIKE 'sqlite_%'
            ORDER BY name
        """).fetchall()
    return json.dumps([row["name"] for row in rows], ensure_ascii=False)

@tool
def describe_table(table_name: str) -> str:
    """Trả về danh sách cột và kiểu dữ liệu của một bảng SQLite hợp lệ."""
    with open_readonly() as conn:
        known = {r["name"] for r in conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table'"
        )}
        if table_name not in known:
            return "Không tìm thấy bảng được yêu cầu."
        # PRAGMA không dùng placeholder cho tên bảng; escape dấu nháy kép
        quoted = '"' + table_name.replace('"', '""') + '"'
        rows = conn.execute(f"PRAGMA table_info({quoted})").fetchall()
    return json.dumps([dict(r) for r in rows], ensure_ascii=False)
```

Không được truyền thẳng `table_name` chưa kiểm tra vào một câu SQL tùy ý. Vì identifier SQL khác với giá trị SQL và thường không thể dùng `?` trực tiếp, giải pháp trên đối chiếu với tập bảng thật, sau đó quote identifier.

## 6. Công cụ lấy dữ liệu mẫu

```python
@tool
def sample_table(table_name: str, row_count: int = 5) -> str:
    """Lấy một số dòng mẫu từ bảng hợp lệ để hiểu giá trị dữ liệu."""
    n = max(1, min(int(row_count), 10))
    with open_readonly() as conn:
        names = {r["name"] for r in conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table'"
        )}
        if table_name not in names:
            return "Không tìm thấy bảng được yêu cầu."
        quoted = '"' + table_name.replace('"', '""') + '"'
        rows = conn.execute(f"SELECT * FROM {quoted} LIMIT ?", (n,)).fetchall()
    return json.dumps([dict(r) for r in rows], ensure_ascii=False, default=str)
```

Một bảng có thể chứa thông tin cá nhân. Bởi vậy, trong hệ thống thật, tool lấy mẫu nên có allowlist bảng/cột, che dữ liệu nhạy cảm, phân quyền theo người dùng và giới hạn số dòng. Bản lab chỉ dùng dữ liệu giả lập.

## 7. Công cụ thực thi SQL có giới hạn

```python
@tool
def execute_sql(query: str) -> str:
    """Thực thi một câu truy vấn SELECT chỉ đọc trên dữ liệu SQLite."""
    sql = query.strip()
    if not sql.upper().startswith("SELECT "):
        return "Chỉ cho phép câu SQL bắt đầu bằng SELECT trong lab này."
    try:
        with open_readonly() as conn:
            # Hủy truy vấn có quá nhiều bước máy ảo SQLite.
            remaining = {"n": 0}
            def check_steps():
                remaining["n"] += 1
                return 1 if remaining["n"] > 200 else 0
            conn.set_progress_handler(check_steps, 1000)
            cur = conn.execute(sql)
            columns = [item[0] for item in (cur.description or [])]
            rows = [dict(row) for row in cur.fetchmany(101)]
        truncated = len(rows) > 100
        return json.dumps({
            "columns": columns,
            "rows": rows[:100],
            "truncated": truncated,
        }, ensure_ascii=False, default=str)
    except sqlite3.Error as exc:
        return f"Lỗi truy vấn SQLite: {exc}"
```

**Giới hạn của ví dụ:** kiểm tra `startswith('SELECT ')` chỉ là hàng rào đơn giản cho lab, không phải SQL parser bảo mật; một truy vấn `SELECT` vẫn có thể rất nặng hoặc rò rỉ dữ liệu được cấp quyền. Bản triển khai production cần tokenizer/parser hoặc chính sách authorizer phù hợp, account DB chỉ đọc và whitelist dữ liệu. `fetchmany(101)` chỉ chặn số dòng **trả về** chứ không tự làm SQL xử lý ít dữ liệu.

## 8. Đăng ký công cụ và ánh xạ lời gọi

```python
TOOLS = [list_tables, describe_table, sample_table, execute_sql]
TOOLS_BY_NAME = {tool.name: tool for tool in TOOLS}
```

Mỗi hàm có docstring mô tả chính xác nhiệm vụ; LangChain dùng mô tả và type hint để tạo schema gọi công cụ. Đặt tên theo `snake_case` và mô tả ngắn, rõ sẽ giúp model quyết định đúng.

## 9. Thực hành

Đổi `row_count=1000` thành `row_count=3` khi thử `sample_table`; giải thích vì sao nó chỉ trả ba dòng. Thử gửi tên bảng không tồn tại và SQL `DELETE FROM customers`: hệ thống phải từ chối mà không thay đổi dữ liệu.

## 10. Câu hỏi ôn tập

**Câu 1.** Tool nào thích hợp nhất để biết bảng `orders` có các cột nào?  
A. `execute_sql` với `DELETE`.  
B. `list_tables`.  
C. `describe_table`.  
D. `sample_table` luôn đầy đủ hơn schema.  
**Đáp án: C.** **Giải thích:** `describe_table` trả thông tin cấu trúc từng cột.

**Câu 2.** Vì sao `sample_table` phải giới hạn `row_count`?  
A. Để tránh đưa lượng dữ liệu lớn không cần thiết vào prompt.  
B. Để thay đổi khóa chính.  
C. Để tăng giá bán.  
D. Để bỏ quyền kiểm soát truy cập.  
**Đáp án: A.** **Giải thích:** Giới hạn lượng dữ liệu giảm chi phí, rủi ro và nhiễu.

**Câu 3.** `mode=ro` có mục đích nào?  
A. Cho phép xóa database.  
B. Mở file database để chỉ đọc.  
C. Tắt tất cả SELECT.  
D. Lưu lịch sử người dùng.  
**Đáp án: B.** **Giải thích:** SQLite mở kết nối ở chế độ không ghi dữ liệu.

**Câu 4.** Vì sao không nên chỉ tin prompt “hãy đừng xóa dữ liệu”?  
A. Vì prompt không có chữ in hoa.  
B. Vì SQLite không có quyền.  
C. Vì `SELECT` không trả dòng.  
D. Vì quyền thực thi phải được khóa ở code và DB, độc lập với lời hứa của mô hình.  
**Đáp án: D.** **Giải thích:** Prompt là hướng dẫn, không phải cơ chế phân quyền.

**Câu 5.** `tool.name` và schema công cụ phục vụ điều gì?  
A. Đổi tên trường DB.  
B. Tự sinh một model mới.  
C. Giúp LLM chọn và gửi tham số có cấu trúc cho hàm.  
D. Tắt kết nối.  
**Đáp án: C.** **Giải thích:** Công cụ cần interface rõ để model gọi đúng.

## 11. Tổng kết

Bốn công cụ nhỏ nhưng đủ để xây dựng một agent SQL có khả năng khám phá và truy vấn dữ liệu. Tính đúng và an toàn dựa vào cách thiết kế mỗi công cụ, không chỉ khả năng suy luận của LLM.
