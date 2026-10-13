# Bài 07 — Chạy mô hình cục bộ với Ollama

## 1. Tóm tắt

LangChain cho phép thay thế chat model mà không viết lại toàn bộ chain. **Ollama** là một công cụ chạy mô hình có trọng số công khai trên máy tính của bạn. Trong bài này, model minh họa là `gemma3:270m` của Google Gemma 3, có quy mô nhỏ, dễ thử nghiệm nhưng khả năng tuân thủ prompt phức tạp còn hạn chế.

## 2. Mục tiêu học tập

- Cài Ollama, tải và chạy một model từ terminal.
- Dùng `ChatOllama` trong cùng pipeline LCEL.
- So sánh ưu và hạn chế của chạy local với API đám mây.

## 3. Vì sao cần mô hình local?

Mô hình được gọi qua API đám mây thuận tiện vì không cần tự chạy inference, nhưng thường có chi phí, ràng buộc kết nối và chính sách dữ liệu. Model local giúp thực hành không cần API key nhà cung cấp đám mây, đồng thời cho phép làm việc khi không có kết nối bên ngoài **sau khi đã tải model**. Đổi lại, tốc độ và chất lượng phụ thuộc CPU/GPU, RAM, kích thước model và cách tối ưu phần mềm.

Một model 270 triệu tham số có thể chạy gọn hơn model nhiều tỷ tham số, nhưng có thể bỏ sót yêu cầu “nêu hai chi tiết thú vị”. Không có quy tắc rằng mọi model trọng số mở đều yếu hơn model đóng; cần so sánh đúng model, tác vụ và cấu hình.

## 4. Cài và sử dụng Ollama

Tải Ollama tại https://ollama.com/download rồi thực hiện:

```bash
ollama --version
ollama pull gemma3:270m
ollama list
ollama run gemma3:270m
```

`pull` tải model, `list` liệt kê model đã lưu, `run` khởi chạy phiên hội thoại CLI. `ollama serve` là lệnh chạy máy chủ Ollama, **không phải** lệnh để mở cuộc trò chuyện trực tiếp với một model. Khi ứng dụng Ollama đã cung cấp dịch vụ, thường không cần mở thêm một tiến trình `serve`.

Có thể nâng lên `gemma3:1b` hoặc model phù hợp cấu hình nếu 270M không tuân thủ chỉ dẫn đủ tốt; đánh giá dung lượng model và RAM máy trước khi tải.

## 5. Tích hợp LangChain

Cài package nếu tự tạo project:

```bash
uv add langchain-ollama
```

Sử dụng cùng `ChatPromptTemplate` và parser:

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_ollama import ChatOllama

prompt = ChatPromptTemplate.from_messages([
    ("system", "Tóm tắt trung thực bằng tiếng Việt."),
    ("human", "Tóm tắt đoạn sau thành 3 ý:\n{information}"),
])
llm = ChatOllama(model="gemma3:270m", temperature=0)
chain = prompt | llm | StrOutputParser()
print(chain.invoke({"information": "LangChain ghép lời nhắc và mô hình thành pipeline."}))
```

Nếu đã chạy thành công chain với `ChatOpenAI`, thay phần khởi tạo model là có thể thử Ollama. Giao diện chung giúp tái sử dụng code, **không đảm bảo khả năng, tham số hay đầu ra của các provider là giống hệt nhau**.

## 6. Bảng so sánh

| Tiêu chí | Ollama local | API đám mây |
| --- | --- | --- |
| Thiết bị inference | Máy của bạn | Hạ tầng provider |
| Kết nối Internet khi sinh câu trả lời | Thường không cần khi model đã tải | Thường cần |
| API key của provider | Không cần cho Ollama local mặc định | Thường cần |
| Giới hạn tốc độ | Chủ yếu bởi tài nguyên máy | Quota, mạng và model |
| Dữ liệu ra ngoài | Thường ở máy local nếu không gọi dịch vụ khác | Dữ liệu được gửi tới provider |
| Chất lượng câu trả lời | Phụ thuộc model local | Phụ thuộc model được chọn |

## 7. Thực hành ngắn

Chạy `uv run python -m examples.04_ollama_local`. Thay `gemma3:270m` bằng một model đã tải khác, giữ cùng input rồi so sánh: có đúng 3 ý không, có bịa nội dung không, thời gian phản hồi có khác không. Đừng kết luận dựa vào một lần chạy duy nhất.

## 8. Câu hỏi ôn tập

**Câu 1.** Lệnh nào tải model về máy?  
A. `ollama serve gemma3:270m`.  
B. `ollama init`.  
C. `ollama pull gemma3:270m`.  
D. `uv pull gemma3`.  
**Đáp án: C.** `pull` dùng để tải model từ thư viện Ollama.

**Câu 2.** Lệnh mở hội thoại CLI trực tiếp là gì?  
A. `ollama run gemma3:270m`.  
B. `ollama list`.  
C. `ollama serve`.  
D. `uv add ollama`.  
**Đáp án: A.** `run` dùng model tương ứng để tương tác.

**Câu 3.** Cần import class nào cho chat model local trong LangChain?  
A. `ChatOpenAI` từ `langchain_core`.  
B. `OllamaServe` từ `os`.  
C. `LangSmith` từ `uv`.  
D. `ChatOllama` từ `langchain_ollama`.  
**Đáp án: D.** Đây là class tích hợp chat model Ollama.

**Câu 4.** Vì sao model 270M đôi khi bỏ sót yêu cầu?  
A. Vì LCEL không chạy model nhỏ.  
B. Vì năng lực model nhỏ có thể không đủ cho prompt phức tạp.  
C. Vì LangChain xóa một phần input.  
D. Vì `ollama list` đổi model tự động.  
**Đáp án: B.** Quy mô và khả năng model ảnh hưởng độ tuân thủ chỉ dẫn.

**Câu 5.** Khi đổi model, điều nào cần kiểm tra lại?  
A. Chỉ màu terminal.  
B. Không cần kiểm tra vì API giống nhau.  
C. Tính năng, tham số, chất lượng và kiểu phản hồi.  
D. Chỉ tên file Python.  
**Đáp án: C.** Giao diện thống nhất không đồng nhất mọi capability.

## 9. Tổng kết

Ollama rất hữu ích để thử pipeline mà không tiêu thụ API cloud. Khi thay provider, giữ pipeline nhưng luôn đo lại chất lượng, độ trễ và đặc điểm model.
