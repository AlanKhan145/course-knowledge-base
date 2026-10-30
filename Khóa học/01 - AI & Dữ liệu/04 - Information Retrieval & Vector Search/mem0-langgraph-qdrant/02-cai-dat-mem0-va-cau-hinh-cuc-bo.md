# Bài 02. Cài đặt Mem0 OSS và khởi tạo bộ nhớ cục bộ

## 1. Tóm tắt

Mem0 có thể chạy dưới dạng thư viện Python trong ứng dụng. Bài này chuẩn bị môi trường, quản lý API key, khởi tạo `Memory` và tạo một cấu hình lưu vector cùng lịch sử tại các vị trí có quyền ghi.

## 2. Mục tiêu học tập

Người học sẽ cài được `mem0ai`, khởi tạo `Memory`, gọi `add` và `search`, phân biệt cấu hình LLM/embedding với vector store và SQLite history.

## 3. Chuẩn bị và bảo vệ API key

Yêu cầu Python 3.10 trở lên. Tạo môi trường ảo để tránh xung đột thư viện:

```bash
python -m venv .venv
# Windows PowerShell
.venv\Scripts\Activate.ps1
# Linux/macOS: source .venv/bin/activate
pip install -U mem0ai
```

Mem0 OSS có thể dùng OpenAI để trích xuất thông tin và tạo embedding. Không lưu key trực tiếp vào `.py`, `.md`, notebook công khai hoặc Git. Với terminal, đặt `OPENAI_API_KEY` qua môi trường; với Google Colab, dùng phần **Secrets** và đọc bằng `google.colab.userdata.get`, chỉ trong Colab.

```python
import os

if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Hãy cấu hình OPENAI_API_KEY trước khi chạy")
```

Không in giá trị khóa ra console. Nếu sử dụng LLM/embedding khác, cần cấu hình provider tương ứng; ví dụ dưới đây dùng OpenAI để bám sát luồng thực hành.

## 4. Khởi tạo nhanh với mặc định

```python
from mem0 import Memory

memory = Memory()
memory.add(
    [{"role": "user", "content": "Mình thích cà phê ít đường."}],
    user_id="demo_an",
)
result = memory.search(
    "Người dùng thích thức uống nào?",
    filters={"user_id": "demo_an"},
)
print(result)
```

`Memory()` chọn cấu hình mặc định của thư viện, bao gồm các nhà cung cấp LLM, embedding và vector store. Đây là cách kiểm tra nhanh, nhưng bạn nên chủ động cấu hình nơi lưu dữ liệu khi muốn sử dụng lâu dài.

## 5. Cấu hình tường minh và đường dẫn ghi dữ liệu

```python
from pathlib import Path
from mem0 import Memory

root = Path("./data")
root.mkdir(parents=True, exist_ok=True)

config = {
    "vector_store": {
        "provider": "qdrant",
        "config": {
            "collection_name": "agent_memories_demo",
            "path": str(root / "qdrant"),
        },
    },
    "history_db_path": str(root / "history.db"),
}

memory = Memory.from_config(config)
```

Tại đây:

| Khóa cấu hình | Vai trò |
| --- | --- |
| `vector_store.provider` | Chọn hệ lưu vector (Qdrant) |
| `vector_store.config.collection_name` | Tên collection lưu các điểm vector |
| `vector_store.config.path` | Đường dẫn Qdrant ở chế độ local |
| `history_db_path` | Tệp SQLite ghi lịch sử vận hành/chỉnh sửa memory |

**Cần phân biệt:** Tệp `history.db` không phải là kho chứa tất cả embedding. Qdrant và SQLite có chức năng khác nhau. Không tự kết luận rằng lỗi “database read-only” luôn do không cấu hình SQLite: còn có thể do quyền hệ thống tệp, thư mục không tồn tại hoặc môi trường notebook.

### 5.1. Cấu hình mô hình nếu muốn thay đổi mặc định

Có thể thêm hai nhánh `llm` và `embedder` vào dictionary `config`:

```python
config["llm"] = {
    "provider": "openai",
    "config": {"model": "gpt-5-mini", "temperature": 0.1},
}
config["embedder"] = {
    "provider": "openai",
    "config": {"model": "text-embedding-3-small"},
}
memory = Memory.from_config(config)
```

Đây là các tên model minh họa được liệt kê trong tài liệu Mem0 tại thời điểm biên soạn; nếu tài khoản không có quyền truy cập, hãy dùng model được hỗ trợ thực tế và bảo đảm kích thước embedding tương thích với collection.

### 5.2. Cấu hình trên Google Colab

```python
import os
from google.colab import userdata

os.environ["OPENAI_API_KEY"] = userdata.get("OPENAI_API_KEY")
```

Trong Colab, thư mục lưu tạm có thể bị xóa khi runtime kết thúc. Muốn giữ dữ liệu, sử dụng thư mục bền vững có quyền ghi hoặc backend bên ngoài; không dựa vào khả năng tồn tại lâu dài của `/content`.

## 6. Kiểm tra kết quả

```python
memory.add(
    [{"role": "user", "content": "Mình thích học về AI Agent."}],
    user_id="demo_an",
    metadata={"category": "interest"},
)

hits = memory.search(
    "Chủ đề công nghệ người dùng quan tâm?",
    filters={"user_id": "demo_an"},
)
for item in hits.get("results", []):
    print(item.get("memory"), item.get("id"))
```

Kết quả phụ thuộc cơ chế trích xuất và mô hình, không bắt buộc phải khớp câu chữ đầu vào. Nếu chưa có kết quả, kiểm tra key, lỗi API, thư mục local và cấu hình. Tránh dùng dữ liệu cá nhân thật trong lần thử đầu tiên.

## 7. Các lỗi dễ gặp

| Hiện tượng | Hướng kiểm tra |
| --- | --- |
| Thiếu API key | Kiểm tra tên biến môi trường và quyền dùng model |
| `Permission denied` hoặc `readonly database` | Thư mục cha, quyền ghi, runtime và cấu hình `history_db_path` |
| Lỗi vector dimension | Embedding model và kích thước vector collection đã tạo |
| Truy xuất rỗng | Đã ghi thành công chưa, `user_id` có đúng không, dữ kiện có được trích xuất không |
| Mất dữ liệu sau khi restart Colab | Nơi lưu tạm đã bị reset; dùng lưu trữ bền vững |

## 8. Thực hành

Tạo hai người dùng `user_a`, `user_b` có sở thích khác nhau. Dùng `Memory.from_config` với đường dẫn cục bộ, ghi tối thiểu một thông tin/người và chỉ tìm ký ức của `user_a`. Không in API key vào log.

## 9. Câu hỏi ôn tập

**Câu 1.** `pip install mem0ai` dùng để làm gì?  
A. Cài thư viện Mem0 Python.  
B. Cài riêng một mô hình OpenAI vào máy.  
C. Tạo tài khoản Qdrant Cloud.  
D. Xóa cơ sở dữ liệu SQLite.

**Đáp án:** A. **Giải thích:** Đây là tên gói Python của Mem0.

**Câu 2.** Đường dẫn `history_db_path` có vai trò gì?  
A. Chỉ định khóa API.  
B. Chỉ định cổng Qdrant.  
C. Chỉ định SQLite ghi lịch sử của Mem0.  
D. Chỉ định system prompt.

**Đáp án:** C. **Giải thích:** Vector memory có thể ở Qdrant, còn lịch sử thao tác dùng SQLite.

**Câu 3.** Cách nào phù hợp nhất để cấp API key?  
A. Viết thẳng vào GitHub công khai.  
B. Dùng biến môi trường hoặc notebook secret.  
C. Đính kèm vào mọi prompt người dùng.  
D. In ra log khởi động.

**Đáp án:** B. **Giải thích:** Key nên nằm ngoài mã nguồn và tránh bị tiết lộ.

**Câu 4.** Nếu muốn thay vector store mặc định, dùng thành phần nào?  
A. `metadata.category`.  
B. `thread_id`.  
C. `START`.  
D. `Memory.from_config(config)`.

**Đáp án:** D. **Giải thích:** Cấu hình của Mem0 cho phép chọn backend và các provider.

**Câu 5.** Vì sao bộ nhớ đặt trong thư mục tạm của Colab có thể biến mất?  
A. Runtime có thể bị khởi động lại và mất dữ liệu tạm.  
B. `user_id` không hỗ trợ Unicode.  
C. LangGraph bắt buộc chạy Docker.  
D. Markdown tự xóa tệp dữ liệu.

**Đáp án:** A. **Giải thích:** Lưu trữ tạm phụ thuộc vòng đời runtime.

## 10. Tổng kết

Một bộ nhớ OSS sử dụng được cần môi trường Python phù hợp, quyền truy cập model, nơi lưu vector và nơi lưu lịch sử có quyền ghi. Hãy cấu hình tường minh và xác thực bằng một vòng `add`–`search` trước khi tích hợp agent.

**Tham khảo:** https://docs.mem0.ai/open-source/python-quickstart · https://docs.mem0.ai/open-source/configuration
