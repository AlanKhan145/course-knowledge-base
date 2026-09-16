# 007 - Dùng model open-weights cục bộ với LangChain và Ollama

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lab  
**Thời lượng:** 6 phút

---

## 1. Tổng quan

Hello World chain có thể đổi từ OpenAI GPT-5 sang model open-weights chạy cục bộ mà không cần viết lại cấu trúc prompt và chain. Ví dụ sử dụng Ollama để tải và chạy một biến thể Gemma 3 nhẹ, sau đó thay `ChatOpenAI` bằng `ChatOllama`.

Bài này minh họa rõ lợi ích của abstraction chat model: workflow giữ nguyên, còn backend model có thể thay thế.

## 2. Mục tiêu

Hoàn thành bài này, người học có thể:

- Cài và kiểm tra Ollama.
- Tải một model bằng `ollama pull`.
- Kiểm tra model đã tải bằng `ollama list`.
- Chạy model trực tiếp trong terminal bằng `ollama run`.
- Thay chat model trong LangChain bằng `ChatOllama`.
- Nhận biết trade-off giữa model rất nhẹ và chất lượng làm theo instruction.

## 3. Kiểm tra Ollama

Sau khi cài Ollama cho hệ điều hành đang sử dụng, mở terminal và kiểm tra CLI:

```bash
ollama
```

Danh sách command của Ollama sẽ xuất hiện nếu cài đặt thành công.

Để xem các model đã có trên máy:

```bash
ollama list
```

## 4. Tải và chạy model cục bộ

Bài học chọn một biến thể Gemma 3 khoảng 270 triệu tham số vì kích thước nhẹ và tốc độ nhanh cho demo. Tên model đầy đủ cần được lấy từ catalog Ollama đang sử dụng.

Tải model:

```bash
ollama pull <FULL_MODEL_NAME>
```

Kiểm tra lại:

```bash
ollama list
```

Chạy model trong terminal:

```bash
ollama run <FULL_MODEL_NAME>
```

Khi CLI nhận prompt như `Hello` và trả về phản hồi, model đã sẵn sàng để tích hợp vào code.

## 5. Thay ChatOpenAI bằng ChatOllama

LangChain cung cấp integration riêng cho Ollama. Sau khi package tương ứng đã được cài, import `ChatOllama`:

```python
from langchain_ollama import ChatOllama
```

Khởi tạo model:

```python
llm = ChatOllama(
    temperature=0,
    model="<FULL_MODEL_NAME>",
)
```

Phần chain còn lại không cần thay đổi:

```python
chain = summary_prompt_template | llm

response = chain.invoke(
    {
        "information": information,
    }
)

print(response.content)
```

Điểm quan trọng là interface của workflow vẫn giữ nguyên. Chỉ object chat model được thay thế.

## 6. So sánh kết quả

Model Gemma 3 rất nhẹ trong ví dụ cho response nhanh vì chạy cục bộ và có kích thước nhỏ. Tuy nhiên, kết quả quan sát được không tuân thủ đầy đủ instruction: model tạo phần tóm tắt nhưng không tách riêng hai thông tin thú vị như yêu cầu.

Đây là trade-off cần nhận diện:

```text
Model nhẹ
→ tải nhanh hơn
→ chạy cục bộ nhanh hơn
→ yêu cầu tài nguyên thấp hơn
→ nhưng khả năng làm theo instruction có thể thấp hơn
```

Một model mạnh hơn có thể cho kết quả tốt hơn nhưng yêu cầu nhiều tài nguyên hơn.

## 7. Điều cần ghi nhớ

LangChain tách workflow khỏi provider ở mức abstraction. Khi chuyển từ OpenAI sang Ollama:

- prompt template giữ nguyên;
- cách tạo chain giữ nguyên;
- cách `invoke()` giữ nguyên;
- chỉ chat model được thay.

Khả năng này giúp thử nghiệm nhiều backend model trên cùng một workflow mà không phải viết lại toàn bộ ứng dụng.
