# Bài 04. Thiết kế prompt sinh SQL từ câu hỏi tự nhiên

## 1. Tóm tắt

Một model mạnh vẫn có thể tạo SQL sai nếu thiếu thông tin về bảng, cột hoặc mục đích của câu hỏi. Cách tiếp cận căn bản là thiết kế prompt có đủ **schema**, **question** và **ràng buộc về định dạng đầu ra**. Bài học xây dựng prompt riêng cho bước sinh SQL và giải thích cách nối nó với mô hình bằng LangChain Expression Language (LCEL).

## 2. Mục tiêu học tập

- Xác định được ba nhóm thông tin tối thiểu trong prompt Text-to-SQL.
- Viết được prompt yêu cầu trả về đúng một truy vấn SQL.
- Sử dụng `ChatPromptTemplate`, `StrOutputParser` và phép ghép LCEL `|`.
- Phân biệt lỗi định dạng đầu ra với lỗi logic SQL.

## 3. Vì sao cần prompt có cấu trúc?

Người dùng hỏi “Liệt kê những album của Audioslave”. Nếu chỉ gửi câu hỏi vào LLM, mô hình có thể đoán tên bảng `Albums` và cột `ArtistName` dù bảng trong Chinook thực tế là `Album` và tên nghệ sĩ nằm ở `Artist.Name`. Khi thêm schema, model biết các cột có thật và quan hệ cần nối.

Prompt sinh SQL có ba phần:

| Dữ liệu | Vai trò | Ví dụ |
| --- | --- | --- |
| `schema` | Giới hạn mô hình vào các bảng/cột tồn tại | `Artist(ArtistId, Name)`; `Album(AlbumId, Title, ArtistId)` |
| `question` | Diễn đạt ý định của người dùng | “Cho tôi album của Audioslave” |
| Chỉ dẫn hệ thống | Quy định phương ngữ và định dạng | “Chỉ xuất một câu `SELECT` SQLite” |

Không nên coi schema là nguồn tin đáng tin về **quyền được phép** truy cập: một bảng tồn tại trong schema không có nghĩa mọi người dùng đều được đọc bảng đó.

## 4. Xây dựng prompt

```python
from langchain_core.prompts import ChatPromptTemplate

sql_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """Bạn chuyển câu hỏi thành một câu SELECT hợp lệ cho SQLite.
Chỉ dùng những bảng và cột có trong schema.
Chỉ trả về câu SQL, không có Markdown, giải thích hoặc code fence.
Không tạo câu lệnh sửa đổi dữ liệu. Nếu thiếu thông tin, đừng bịa cột.""",
    ),
    (
        "human",
        """Schema:
{schema}

Câu hỏi:
{question}""",
    ),
])
```

Chỉ dẫn “không thêm lời mở đầu, code fence, tiền tố/hậu tố” giải quyết một vấn đề thực tế: đoạn văn như “Đây là SQL của bạn:” không phải cú pháp SQL và không thể được chuyển nguyên xi cho cơ sở dữ liệu.

**Giới hạn quan trọng:** Prompt là lời hướng dẫn cho mô hình, không phải cơ chế bảo mật. Dù đã yêu cầu `SELECT`, chương trình vẫn phải kiểm tra câu SQL sau khi sinh.

## 5. Xây dựng chuỗi sinh SQL với LCEL

```python
from langchain_core.output_parsers import StrOutputParser

# llm được khởi tạo ở bước cấu hình model.
sql_chain = sql_prompt | llm | StrOutputParser()

sql = sql_chain.invoke({
    "schema": db.get_table_info(),
    "question": "Cho tôi tên 10 nghệ sĩ",
})
print(sql)
```

Đọc biểu thức từ trái sang phải:

1. `sql_prompt` tạo các thông điệp gửi cho model.
2. `llm` suy luận dựa trên cấu trúc prompt đã điền biến.
3. `StrOutputParser()` chuyển kết quả mô hình về chuỗi văn bản.

Cú pháp `a | b | c` trong LCEL biểu diễn luồng đầu ra của bước trước đi thành đầu vào của bước sau. Nó tạo pipeline dễ kết hợp và thay thế thành phần. SQL đầu ra vẫn cần kiểm tra trước khi thực thi.

## 6. Lấy schema tự động thay vì gõ tay

Để tránh schema bị lỗi thời, workflow có thể cấp `db.get_table_info()` tại thời điểm thực thi:

```python
from langchain_core.runnables import RunnablePassthrough

write_sql = (
    RunnablePassthrough.assign(schema=lambda _: db.get_table_info())
    | sql_prompt
    | llm
    | StrOutputParser()
)

sql = write_sql.invoke({"question": "Cho tôi tên 10 nghệ sĩ"})
```

`RunnablePassthrough.assign(...)` thêm trường `schema` vào đối tượng đầu vào mà vẫn giữ `question`. Nếu database lớn, không nên đưa toàn bộ bảng và dữ liệu mẫu không cần thiết vào prompt. Một hệ thống nâng cao có thể chọn những bảng liên quan trước khi tạo SQL.

## 7. Đánh giá hai loại lỗi

**Lỗi định dạng:** LLM trả về:

~~~text
Dưới đây là truy vấn:
```sql
SELECT Name FROM Artist LIMIT 10;
```
~~~

Chuỗi trên không thể đưa thẳng cho bộ thực thi SQL do chứa câu văn và dấu Markdown. Bạn có thể cải thiện prompt và kiểm tra đầu ra, nhưng không nên loại bỏ các chuỗi bất kỳ bằng thao tác văn bản tùy tiện rồi mặc định là an toàn.

**Lỗi ngữ nghĩa:** LLM trả về:

```sql
SELECT Title FROM Album WHERE Name = 'Audioslave';
```

Đây là truy vấn thiếu đúng tên cột và quan hệ liên bảng. Việc chỉ yêu cầu “trả về một câu SQL” không khắc phục được. Phải cung cấp schema đúng, kiểm thử truy vấn và đánh giá câu SQL có phản ánh ý định người dùng hay không.

## 8. Bài thực hành ngắn

Tạo một prompt nhận `{question}` và `{schema}`. Thử ba yêu cầu: (1) tên 10 nghệ sĩ, (2) album của nghệ sĩ mã 1, (3) track của Audioslave. Đối chiếu từng bảng/cột mà mô hình sinh ra với schema. Ghi riêng lỗi định dạng và lỗi ngữ nghĩa.

## 9. Câu hỏi ôn tập

### Câu 1

Biến nào trong prompt trực tiếp mô tả tên bảng và quan hệ?

A. `temperature`.  
B. `schema`.  
C. `question`.  
D. `parser`.

**Đáp án:** B. **Giải thích:** Schema chứa cấu trúc database, còn question chứa mục tiêu người dùng.

### Câu 2

Mục tiêu của `StrOutputParser()` trong chuỗi ví dụ là gì?

A. Tự thực thi SQL.  
B. Cấp quyền database.  
C. Xác minh khóa ngoại.  
D. Lấy nội dung trả về của LLM dưới dạng chuỗi.

**Đáp án:** D. **Giải thích:** Parser chuẩn hóa hình thức đầu ra thành chuỗi; không kiểm chứng ngữ nghĩa truy vấn.

### Câu 3

Prompt nói “chỉ dùng SELECT” có đủ để bảo vệ database chưa?

A. Chưa, vẫn cần kiểm tra truy vấn và phân quyền ở database.  
B. Đủ nếu model đắt tiền.  
C. Đủ nếu temperature bằng 0.  
D. Đủ nếu câu hỏi viết bằng tiếng Việt.

**Đáp án:** A. **Giải thích:** LLM vẫn có thể trả nội dung trái chỉ dẫn; bảo vệ phải nằm ngoài mô hình.

### Câu 4

Trong `prompt | llm | parser`, dấu `|` biểu thị điều gì?

A. Phép OR bit.  
B. Nối chuỗi SQL.  
C. Kết hợp các runnable thành pipeline tuần tự.  
D. Nối hai bảng database.

**Đáp án:** C. **Giải thích:** LCEL chuyển kết quả mỗi runnable sang runnable tiếp theo.

### Câu 5

Một SQL đúng định dạng nhưng tham chiếu cột không tồn tại là loại lỗi gì?

A. Chỉ là lỗi trình bày Markdown.  
B. Lỗi cấu trúc/ngữ nghĩa so với schema.  
C. Lỗi không có mạng Internet.  
D. Lỗi giới hạn số token đầu ra.

**Đáp án:** B. **Giải thích:** Câu SQL không phù hợp với định nghĩa bảng nên không thể thực thi đúng.

## 10. Tổng kết

Prompt sinh SQL hiệu quả phải nêu được **bài toán, cấu trúc dữ liệu và hình thức kết quả mong muốn**. LCEL hỗ trợ đóng gói quá trình này thành những thành phần thay thế được. Bước thực thi cần có kiểm tra độc lập vì prompt không thể đảm bảo SQL đúng hoặc an toàn.
