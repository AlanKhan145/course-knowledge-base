# 002 - Hello World Chain sẽ xây dựng gì?

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lesson  
**Thời lượng:** 1 phút

---

## 1. Tóm tắt

Bài thực hành đầu tiên xây dựng một LangChain chain đơn giản theo tinh thần “learn by doing”. Ứng dụng nhận một đoạn thông tin về Elon Musk, đưa dữ liệu đó vào LLM, sau đó yêu cầu model tạo một bản tóm tắt ngắn và hai thông tin thú vị.

Ví dụ nhỏ này là nền để làm quen với prompt, `PromptTemplate`, chat model, chain, debugging, tracing và khả năng thay model.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Mô tả chính xác input, xử lý và output của Hello World chain.
- Nhận diện các abstraction LangChain sẽ được dùng trong ví dụ.
- Giải thích vì sao một ví dụ nhỏ vẫn đủ để minh họa cách các thành phần được nối thành chain.
- Nhận biết rằng model có thể được thay bằng provider khác hoặc model open-weights chạy cục bộ.

## 3. Bài toán Hello World

Dữ liệu đầu vào là một đoạn văn chứa thông tin về một người. Trong ví dụ của bài, dữ liệu nói về Elon Musk.

Ứng dụng cần tạo hai kết quả:

1. Một bản tóm tắt ngắn.
2. Hai thông tin thú vị rút ra từ dữ liệu đã cung cấp.

Thay vì ghép mọi thứ trong một lệnh gọi model, workflow sẽ được tổ chức thành các thành phần LangChain riêng.

```text
Thông tin về một người
        ↓
Prompt template
        ↓
Chat model
        ↓
Tóm tắt + hai thông tin thú vị
```

## 4. Những thành phần sẽ xuất hiện

`PromptTemplate` chịu trách nhiệm tạo prompt từ mẫu và dữ liệu runtime. Chat model là giao diện dùng để gửi prompt đến LLM và nhận response. Chain nối các thành phần theo thứ tự để output của bước trước trở thành input của bước sau.

Sau khi chain chạy được, quá trình thực thi sẽ được quan sát bằng debugger và tracing. Điều này giúp người học không chỉ thấy output cuối cùng mà còn hiểu các object trung gian và metadata của response.

## 5. Model được sử dụng

Ví dụ chính sử dụng OpenAI GPT-5. Tuy nhiên, workflow không bị giới hạn ở một model duy nhất. Có thể thay chat model bằng Gemini, model của Anthropic hoặc một model open-weights chạy trên máy qua Ollama.

Khả năng thay phần model mà không phải viết lại toàn bộ workflow là một trong những ý quan trọng cần quan sát trong chuỗi bài này.

## 6. Kết quả mong đợi của chuỗi bài

Sau khi hoàn thành phần Hello World, người học cần nắm được mạch cơ bản:

```text
Chuẩn bị môi trường
→ tạo prompt template
→ khởi tạo chat model
→ ghép thành chain
→ invoke chain
→ đọc AIMessage
→ debug và trace
→ thử thay model
```

Mục tiêu không phải xây một sản phẩm lớn ngay lập tức, mà là hiểu cách các abstraction cốt lõi phối hợp trong một chương trình LangChain thực sự chạy được.
