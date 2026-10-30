# Bài 03. Kết nối SQL và chuyển đổi giữa các mô hình ngôn ngữ

## 1. Tóm tắt

Để LLM tương tác với dữ liệu, ta cần một đối tượng kết nối database và hai thao tác riêng biệt: **lấy schema** (`get_schema`) và **chạy truy vấn** (`run_query`). Song song, ta đóng gói bước chọn LLM để có thể thay thế giữa mô hình qua API và mô hình mở mà không sửa logic của pipeline.

## 2. Mục tiêu học tập

- Cấu hình được database SQLite mẫu trong Python.
- Gọi được `SQLDatabase.get_table_info()` và `SQLDatabase.run()`.
- Tạo được wrapper giúp ghi lại câu SQL phục vụ debug.
- Giải thích được nguyên tắc chuyển đổi giữa GPT và Qwen.

## 3. Chuẩn bị môi trường

Ví dụ trong khóa học sử dụng Python, LangChain và **Chinook SQLite**. Tải tệp SQLite Chinook phù hợp từ kho dữ liệu mẫu, đặt tệp `Chinook.db` bên cạnh chương trình, hoặc khai báo biến môi trường `CHINOOK_DB_PATH` đến bản sao dùng để học.

Tại thư mục `examples/`:

```bash
python -m pip install -r requirements.txt
```

Các gói chính trong ví dụ: `langchain-core`, `langchain-community`, `langchain-openai`, `sqlalchemy` và `python-dotenv`. Với Qwen được chạy qua Hugging Face hoặc máy chủ mô hình tương thích API, có thể cần các gói và cấu hình khác tùy phương án triển khai.

**Lưu ý:** Không hard-code khóa API vào tệp được chia sẻ. Thiết lập `OPENAI_API_KEY` bằng biến môi trường và chỉ định `OPENAI_MODEL` khi cần.

## 4. Khởi tạo cơ sở dữ liệu và đọc schema

```python
from langchain_community.utilities import SQLDatabase

db = SQLDatabase.from_uri("sqlite:///Chinook.db")

schema = db.get_table_info()
print(schema)
```

`SQLDatabase.from_uri(...)` tạo đối tượng dùng để truy cập SQLite qua URI; `db.get_table_info()` trả về thông tin các bảng, cấu trúc cột và dữ liệu mẫu (tùy cách cấu hình). Những thông tin này được đưa vào prompt sinh SQL.

Đây là **kết nối đến một tệp database trên đĩa**, không có nghĩa toàn bộ cơ sở dữ liệu đã được tải hết vào bộ nhớ. Khả năng truy cập còn phụ thuộc sự tồn tại của file, đường dẫn và quyền đọc.

### 4.1. Đóng gói lấy schema

```python
def get_schema(_input=None) -> str:
    return db.get_table_info()
```

Wrapper giúp các thành phần về sau không phải biết chi tiết đối tượng `db`. Tham số `_input` cho phép gọi thống nhất khi kết hợp nhiều hàm trong chain.

### 4.2. Đóng gói thực thi truy vấn

```python
def run_query(sql: str):
    print(f"SQL đang được chạy: {sql}")
    return db.run(sql)
```

Việc in câu SQL giúp xác định lỗi xuất hiện ở khâu sinh query hay khâu database thực thi. Tuy nhiên, wrapper này chỉ để **minh họa quan sát**. Trong thực tế không được cho một LLM chạy SQL tùy ý chỉ dựa vào prompt: cần kiểm soát quyền, xác thực truy vấn và giới hạn tài nguyên trước khi gọi `db.run()`.

## 5. Chọn mô hình ngôn ngữ

Mô hình ngôn ngữ là một thành phần có thể thay thế. Ta nên chuẩn hóa giao diện dùng mô hình (`invoke`, đầu vào prompt, đầu ra văn bản), thay vì gắn toàn bộ workflow vào một nhà cung cấp.

### 5.1. Mô hình GPT qua API

```python
import os
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model=os.environ["OPENAI_MODEL"],
    temperature=0,
)
```

Đây là ví dụ gọi model thông qua dịch vụ API. Cần khóa truy cập hợp lệ, quyền sử dụng model và có thể phát sinh phí theo sử dụng. Đặt `temperature=0` thường giúp đầu ra bớt biến động nhưng không đảm bảo câu SQL luôn đúng.

### 5.2. Mô hình Qwen qua hệ sinh thái Hugging Face

Một lựa chọn khác là dùng mô hình có trọng số mở, chẳng hạn **Qwen2.5-7B-Instruct**, thông qua endpoint hoặc máy chủ tự triển khai. Để giữ workflow độc lập, chỉ cần thay đối tượng `llm` bằng client tương thích giao diện chat/langchain.

```python
# Minh họa ý tưởng, không phải cấu hình endpoint mặc định:
# llm = create_chat_model_for_my_qwen_endpoint(...)
```

Lưu ý về chi phí: trọng số mở **không đồng nghĩa mọi cách sử dụng đều miễn phí**. Chạy cục bộ có chi phí phần cứng; endpoint bên thứ ba có thể tính phí; dịch vụ miễn phí có giới hạn hoặc không phục vụ model cụ thể. Trong bài thực hành kèm theo, luồng mặc định dùng OpenAI API để hạn chế phụ thuộc vào cấu hình hạ tầng Qwen.

## 6. Thiết kế hàm chuyển mô hình

```python
def get_llm(use_huggingface: bool = False):
    if use_huggingface:
        # Trả về client chat của Qwen đã cấu hình sẵn.
        # Chỉ dùng nhánh này sau khi khởi tạo thành công endpoint.
        raise NotImplementedError("Cấu hình Qwen endpoint trước")

    return ChatOpenAI(
        model=os.environ["OPENAI_MODEL"],
        temperature=0,
    )
```

Với cấu trúc trên, `get_llm(...)` chỉ giải quyết nhiệm vụ **cấp một mô hình**. Các bước đọc schema, tạo SQL và diễn giải câu trả lời không cần biết chính xác nhà cung cấp nào đứng sau `llm`. Khi thêm Qwen, chỉ việc hoàn thiện nhánh lựa chọn và thực hiện kiểm thử cùng tập câu hỏi.

## 7. Kiểm tra kết nối trước khi dùng LLM

Bạn nên thử lệnh SQL tĩnh:

```python
result = db.run("SELECT Name FROM Artist ORDER BY ArtistId LIMIT 3;")
print(result)
```

Nếu truy vấn này thất bại, hãy giải quyết lỗi database trước khi kiểm thử LLM. Trình tự debug nên là **đường dẫn DB → schema → SQL tĩnh → SQL do mô hình sinh → câu trả lời tự nhiên**. Điều này rút ngắn thời gian khoanh vùng vấn đề.

## 8. Câu hỏi ôn tập

### Câu 1

Phương thức nào cung cấp cấu trúc bảng cho prompt Text-to-SQL?

A. `get_table_info()`.  
B. `print()`.  
C. `ChatOpenAI()`.  
D. `LIMIT`.

**Đáp án:** A. **Giải thích:** `get_table_info()` cung cấp mô tả bảng và cột để LLM nhận biết schema.

### Câu 2

Mục đích chính của hàm wrapper `run_query` có `print(sql)` là gì?

A. Thay thế DBMS.  
B. Làm câu SQL luôn đúng.  
C. Quan sát câu lệnh do mô hình tạo ra để debug.  
D. Tự động sửa khóa ngoại.

**Đáp án:** C. **Giải thích:** In SQL giúp đối chiếu truy vấn với ý định người dùng và dữ liệu thực.

### Câu 3

Đâu là nhận định đúng về mô hình Qwen có trọng số mở?

A. Luôn miễn phí dù chạy trên endpoint thuê ngoài.  
B. Không dùng được cho Text-to-SQL.  
C. Luôn dùng được không cần bộ nhớ hay GPU.  
D. Chi phí phụ thuộc cách triển khai và hạ tầng.

**Đáp án:** D. **Giải thích:** Trọng số mở chỉ nói về giấy phép/phân phối model; vận hành có thể có chi phí.

### Câu 4

Nếu truy vấn SQL tĩnh trên `Artist` thất bại, việc nên làm đầu tiên là gì?

A. Tăng số token của LLM.  
B. Kiểm tra database, URI, tệp và quyền truy cập.  
C. Chuyển prompt sang tiếng Anh.  
D. Bỏ schema khỏi prompt.

**Đáp án:** B. **Giải thích:** Lỗi ở tầng database phải được sửa trước khi đánh giá chất lượng LLM.

### Câu 5

Tại sao nên tạo hàm `get_llm` thay vì khởi tạo trực tiếp model trong mọi bước?

A. Để cô lập phần chọn model khỏi logic nghiệp vụ.  
B. Để loại bỏ yêu cầu kiểm thử.  
C. Để đảm bảo không tốn tiền API.  
D. Để bỏ qua lỗi SQL.

**Đáp án:** A. **Giải thích:** Một lớp trừu tượng giúp thay model mà không viết lại pipeline.

## 9. Tổng kết

`SQLDatabase` cung cấp hai thao tác nền tảng: mô tả schema và chạy SQL. Wrapper làm chương trình dễ gỡ lỗi; hàm chọn mô hình giúp đổi nhà cung cấp mà không thay đổi luồng xử lý. Nhưng **khả năng thực thi của công cụ luôn phải được bảo vệ bằng quyền truy cập và kiểm tra an toàn**, không chỉ bằng cách viết prompt.
