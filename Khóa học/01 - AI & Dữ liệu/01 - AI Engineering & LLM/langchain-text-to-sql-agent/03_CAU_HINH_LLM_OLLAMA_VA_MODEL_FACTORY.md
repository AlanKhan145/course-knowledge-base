# Bài 03 — Cấu hình mô hình LLM và Model Factory

## 1. Tóm tắt

Một Agent Text-to-SQL cần mô hình có khả năng gửi yêu cầu gọi công cụ dưới dạng cấu trúc, không chỉ viết một đoạn văn bản nói “tôi sẽ gọi công cụ”. Bài này xây dựng cấu hình mô hình nhất quán, sử dụng Ollama cục bộ và giới thiệu cách thay nhà cung cấp qua factory.

## 2. Mục tiêu học tập

Bạn có thể cài gói cần thiết, gọi thử một model qua `ChatOllama`, nhận biết `tool_calls`, giải thích vai trò của `temperature`, `model_name` và giới hạn ngữ cảnh.

## 3. Cài đặt mô hình và thư viện

```bash
python -m venv .venv
# Linux/macOS:
source .venv/bin/activate
# Windows PowerShell: .venv\Scripts\Activate.ps1
python -m pip install -U langchain langchain-ollama streamlit
ollama pull qwen2.5:7b
ollama list
```

Cài và khởi động Ollama theo hướng dẫn của hệ điều hành. Tên mô hình chỉ là một lựa chọn minh họa; nên chọn model có hỗ trợ **native tool calling**. Nếu model không hỗ trợ, việc có `bind_tools()` trong mã không bảo đảm đầu ra sẽ chứa `tool_calls`. Khi Ollama chưa chạy, model chưa được tải hoặc phần cứng thiếu RAM/VRAM, bạn sẽ gặp lỗi kết nối hay hiệu năng.

## 4. Các tham số cấu hình

| Tham số | Ý nghĩa | Cách chọn |
| --- | --- | --- |
| `provider` | Nhà cung cấp mô hình (`ollama`/`groq`) | Ollama khi cần xử lý cục bộ |
| `model_name` | Tên và tag của model | Ưu tiên loại hỗ trợ gọi tool |
| `temperature` | Điều chỉnh mức ngẫu nhiên lấy mẫu | Có thể dùng `0` để giảm độ biến thiên, không đảm bảo kết quả luôn giống |
| Context window | Tổng ngữ cảnh LLM xử lý được | Cân bằng lịch sử, schema và tốc độ |
| `max_iterations` | Số lượt agent tối đa gọi công cụ | Đủ cho câu hỏi nhiều bước, không vô hạn |

Thông số giới hạn ngữ cảnh phụ thuộc mô hình, server và bản cài đặt. Không nên áp một con số chung cho mọi provider. Lịch sử càng dài, hệ thống càng tốn tài nguyên và dễ vượt cửa sổ ngữ cảnh.

## 5. Tạo Model Factory

```python
from dataclasses import dataclass
from typing import Literal
from langchain_ollama import ChatOllama

@dataclass(frozen=True)
class ModelConfig:
    provider: Literal["ollama", "groq"] = "ollama"
    model_name: str = "qwen2.5:7b"
    temperature: float = 0.0


def create_model(cfg: ModelConfig):
    if cfg.provider == "ollama":
        return ChatOllama(
            model=cfg.model_name,
            temperature=cfg.temperature,
        )
    if cfg.provider == "groq":
        from langchain_groq import ChatGroq
        return ChatGroq(
            model=cfg.model_name,
            temperature=cfg.temperature,
        )
    raise ValueError(f"Provider không hỗ trợ: {cfg.provider}")
```

Để dùng Groq, cài riêng `langchain-groq`, cấu hình khóa API theo tài liệu provider và truyền tên model tương thích hiện hành. Vì yêu cầu được gửi tới dịch vụ bên ngoài, mode Groq **không còn là xử lý hoàn toàn trên máy**.

## 6. Kiểm tra model có phát sinh tool call

```python
from langchain.tools import tool

@tool
def multiply(a: int, b: int) -> int:
    """Nhân hai số nguyên và trả về tích."""
    return a * b

model = create_model(ModelConfig())
model_with_tools = model.bind_tools([multiply])
response = model_with_tools.invoke("Dùng công cụ để nhân 7 với 9")
print(response.tool_calls)
```

`bind_tools([multiply])` chỉ công bố schema công cụ cho LLM. Để có kết quả thực từ Python, ứng dụng phải lấy mỗi lời gọi trong `response.tool_calls`, tìm hàm tương ứng và thực thi. Phần điều phối đó sẽ được giải thích trong bài về vòng lặp agent.

## 7. Lựa chọn model thực tế

Một mô hình lớn hơn có thể gọi công cụ tốt hơn nhưng cũng tốn tài nguyên hơn. Nên đánh giá theo các tiêu chí gần bài toán: xác định bảng đúng, có dùng schema trước khi `JOIN`, số lần tự sửa SQL không cần thiết, khả năng ngừng gọi tool và độ chính xác kết quả. Tránh tuyên bố model nào tốt nhất nếu chưa đo trên cùng tập câu hỏi.

Các mô hình được nêu trong ví dụ minh họa của khóa học gồm họ Qwen 2.5 cho môi trường Ollama và lựa chọn API Groq. Việc các mô hình này có sẵn hoặc hỗ trợ API tùy thời điểm cần kiểm tra lại.

## 8. Thực hành

Đổi `temperature` giữa 0 và 0.7 trên cùng ba câu hỏi và ghi lại số lần model tạo tool call đúng dạng. Sau đó thay `model_name` bằng một mô hình khác đã cài trên Ollama, đối chiếu tốc độ và tỷ lệ gọi tool hợp lệ.

## 9. Câu hỏi ôn tập

**Câu 1.** `bind_tools()` có tác dụng trực tiếp nào?  
A. Tự chạy SQL không cần Python.  
B. Thông báo schema công cụ cho model.  
C. Lưu mọi chat vĩnh viễn.  
D. Tự tải database.  
**Đáp án: B.** **Giải thích:** Điều phối thực thi công cụ thuộc ứng dụng.

**Câu 2.** Khi dùng Groq API, khẳng định nào đúng nhất?  
A. Mọi phép tính đều thực hiện trong SQLite.  
B. Luôn nhanh hơn mọi mô hình cục bộ.  
C. Không cần mạng.  
D. Không còn hoàn toàn cục bộ như chế độ Ollama.  
**Đáp án: D.** **Giải thích:** Dịch vụ API nhận request ngoài máy.

**Câu 3.** Cấu hình `temperature=0` nghĩa là gì?  
A. Giảm tính ngẫu nhiên nhưng không đảm bảo lặp lại hoàn toàn.  
B. Bảo đảm SQL luôn đúng.  
C. Cấm gọi tool.  
D. Xóa lịch sử hội thoại.  
**Đáp án: A.** **Giải thích:** Độ ổn định còn phụ thuộc backend và các điều kiện khác.

**Câu 4.** Nếu `response.tool_calls` rỗng dù model trả lời “tôi sẽ gọi tool”, cần kiểm tra gì trước?  
A. Tên tập tin ảnh.  
B. Màu theme.  
C. Model và backend có hỗ trợ tool calling không.  
D. Độ phân giải màn hình.  
**Đáp án: C.** **Giải thích:** Văn bản tuyên bố không tương đương lệnh gọi công cụ dạng cấu trúc.

**Câu 5.** Lợi ích chủ yếu của Model Factory là gì?  
A. Tự tạo sơ đồ ERD.  
B. Thay provider nhưng giữ interface khởi tạo nhất quán.  
C. Thay thế SQL.  
D. Tự xóa lỗi runtime.  
**Đáp án: B.** **Giải thích:** Factory tách logic chọn nhà cung cấp khỏi mã nghiệp vụ.

## 10. Tổng kết

Model Factory giúp kiến trúc linh hoạt, còn lựa chọn model có tool calling ảnh hưởng trực tiếp tính khả dụng của agent. Dù model nào, phải có công cụ và điều phối Python để tương tác thật với SQLite.
