# Khóa học: Xây dựng AI Agent Text-to-SQL với LangChain

**Ngôn ngữ:** Tiếng Việt  
**Chủ đề:** AI Engineering · LLM · LangChain · SQL · Workflow  
**Định hướng:** Học khái niệm → đọc kiến trúc → viết chương trình → kiểm thử thực tế.

## 1. Giới thiệu

Hãy tưởng tượng một người không biết SQL hỏi: **“Hãy cho tôi tên các bài hát của nghệ sĩ Audioslave.”** Hệ thống cần hiểu ý định, biết rằng tên nghệ sĩ nằm trong bảng `Artist`, trong khi bài hát nằm trong `Track`, tạo câu SQL nối qua bảng `Album`, chạy truy vấn trên cơ sở dữ liệu, rồi diễn giải kết quả bằng tiếng Việt. Đó là bài toán **Text-to-SQL**.

Khóa học hướng dẫn xây dựng một workflow dùng mô hình ngôn ngữ lớn (LLM) để chuyển câu hỏi tự nhiên thành SQL, thực thi trên cơ sở dữ liệu **Chinook** và trả lời thân thiện với người dùng. Người học có thể thay đổi mô hình, chẳng hạn giữa mô hình GPT qua API và mô hình Qwen triển khai qua hệ sinh thái Hugging Face. Đặc biệt, toàn bộ quá trình phải được giám sát để phát hiện câu SQL không đúng hoặc truy vấn không an toàn.

## 2. Lộ trình bài học

| Bài | Tên bài | Kết quả sau bài học |
| --- | --- | --- |
| [01](01-tong-quan-text-to-sql-va-kien-truc-agent.md) | Tổng quan và kiến trúc Text-to-SQL | Vẽ và giải thích được pipeline từ câu hỏi đến câu trả lời |
| [02](02-co-so-du-lieu-chinook-va-truy-van-join.md) | Chinook, schema và `JOIN` | Đọc được quan hệ khóa chính/khóa ngoại, viết truy vấn một hoặc nhiều bảng |
| [03](03-ket-noi-sql-va-chuyen-doi-llm.md) | Kết nối SQL và đổi mô hình LLM | Cài môi trường, đọc schema, cấu hình mô hình và quan sát truy vấn |
| [04](04-thiet-ke-prompt-sinh-sql.md) | Thiết kế prompt sinh SQL | Xây dựng prompt nhập schema, câu hỏi và định dạng đầu ra |
| [05](05-xay-dung-workflow-hoi-dap-hoan-chinh.md) | Ghép workflow hỏi–đáp | Nối các bước sinh SQL, thực thi và tạo câu trả lời bằng LCEL |
| [06](06-thuc-hanh-kiem-thu-truy-van.md) | Lab kiểm thử truy vấn tăng dần | Kiểm tra `SELECT`, điều kiện lọc và `JOIN` nhiều bảng |
| [07](07-an-toan-debug-va-huong-mo-rong.md) | An toàn, debug và mở rộng | Nhận diện nguy cơ và thiết kế các lớp bảo vệ trước khi triển khai |

## 3. Kiến thức nên có trước

Nắm được Python căn bản, biến/hàm và cách dùng `pip`; biết các lệnh `SELECT`, `WHERE`, `JOIN` là lợi thế. Bài 02 giải thích lại schema và quan hệ bảng nên người học chưa biết SQL vẫn có thể theo kịp.

## 4. Cấu trúc tài liệu

```text
khoa_hoc_text_to_sql/
├── README.md
├── 01-tong-quan-text-to-sql-va-kien-truc-agent.md
├── 02-co-so-du-lieu-chinook-va-truy-van-join.md
├── 03-ket-noi-sql-va-chuyen-doi-llm.md
├── 04-thiet-ke-prompt-sinh-sql.md
├── 05-xay-dung-workflow-hoi-dap-hoan-chinh.md
├── 06-thuc-hanh-kiem-thu-truy-van.md
├── 07-an-toan-debug-va-huong-mo-rong.md
├── examples/
│   ├── text_to_sql_demo.py
│   └── requirements.txt
└── assets/
    ├── kien-truc-text-to-sql.mmd
    └── quan-he-chinook.mmd
```

Sơ đồ Mermaid được đặt **ngay trong bài học** để hiển thị với các trình đọc Markdown có hỗ trợ; bản `.mmd` trong `assets/` thuận tiện chỉnh sửa riêng.

## 5. Thực hành nhanh

1. Đọc lần lượt bài 01–05 để hiểu các thành phần của hệ thống.
2. Chuẩn bị bản sao SQLite của Chinook, đặt tên `Chinook.db` bên cạnh chương trình trong `examples/` hoặc chỉ đường dẫn qua biến môi trường `CHINOOK_DB_PATH`.
3. Trong thư mục `examples/`, chạy `python -m pip install -r requirements.txt`.
4. Thiết lập `OPENAI_API_KEY` trong môi trường và tùy chọn `OPENAI_MODEL` với một model mà tài khoản API có quyền sử dụng.
5. Chạy `python text_to_sql_demo.py "Liệt kê tên 10 nghệ sĩ"`.
6. Tự viết thêm ca kiểm thử theo bài 06. **Chỉ dùng cơ sở dữ liệu thử nghiệm hoặc bản sao có quyền đọc**.

Các câu trả lời của LLM có thể khác nhau giữa các lần chạy; không được coi truy vấn tự sinh là chính xác chỉ vì chương trình không báo lỗi.

## 6. Quy ước học tập

- `Artist`, `Album`, `Track` là tên bảng; `ArtistId`, `AlbumId`, `Name`, `Title` là tên cột theo kiểu đặt tên của Chinook SQLite thông dụng.
- `SQLDatabase`, `ChatOpenAI`, `ChatPromptTemplate`, `RunnablePassthrough`, `StrOutputParser` là các thành phần Python của hệ sinh thái LangChain; giao diện chi tiết có thể đổi theo phiên bản thư viện.
- Ví dụ SQL được viết cho **SQLite**. Với PostgreSQL, MySQL hay hệ quản trị khác, cú pháp và cách kết nối có thể khác.
- Mã Python kèm theo là **minh họa thực hành có lớp bảo vệ cơ bản**, không phải kiến trúc bảo mật đủ để dùng trực tiếp trên dữ liệu sản xuất.

## 7. Tài liệu tham khảo kỹ thuật

- [LangChain – Hướng dẫn và tài liệu hiện hành](https://docs.langchain.com/oss/python/learn)
- [LangChain – API Reference](https://reference.langchain.com/python/)
- [Cơ sở dữ liệu mẫu Chinook](https://github.com/lerocha/chinook-database)

**Hoàn thành khóa học** khi bạn có thể giải thích kiến trúc, thực thi chương trình trên Chinook, đối chiếu được SQL sinh tự động với truy vấn SQL tự viết, và chỉ ra những trường hợp phải chặn hoặc yêu cầu người dùng xác nhận trước khi chạy truy vấn.
