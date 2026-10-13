# Bài 09 — Kiểm tra kiến thức LCEL và LangChain

## 1. Hướng dẫn

Bài kiểm tra đánh giá khả năng đọc code, nhận diện input/output, xử lý lỗi và lựa chọn công cụ phù hợp. Mỗi câu có một đáp án tốt nhất. Làm bài trước khi xem đáp án và giải thích.

## 2. Phạm vi

- Prompt template và biến đầu vào.
- Chat model, thông điệp và parser.
- LCEL, `Runnable`, `.invoke()` và `.stream()`.
- Ollama, môi trường `uv`, API key và LangSmith.

## 3. Trắc nghiệm

### Câu 1

`prompt = ChatPromptTemplate.from_messages([("human", "Xin chào {name}")])`. Đầu vào nào hợp lệ nhất khi gọi `prompt.invoke()`?

A. `{"name": "An"}`.  
B. `{"person": "An"}`.  
C. `{}`.  
D. `{"NAME": "An"}`.

**Đáp án: A.** Tên key phải khớp placeholder `{name}`.

### Câu 2

Kết quả trực tiếp của `ChatPromptTemplate.invoke()` thường là gì?

A. Số tiền đã tiêu.  
B. `ChatPromptValue`.  
C. `AIMessage` của model.  
D. `StrOutputParser`.

**Đáp án: B.** Template mới định dạng prompt, chưa thực thi mô hình.

### Câu 3

`prompt | model | StrOutputParser()` thể hiện thứ tự nào?

A. Parser → model → prompt.  
B. Model → prompt → parser.  
C. Prompt → model → parser.  
D. Cả ba chạy đồng thời độc lập.

**Đáp án: C.** Toán tử `|` truyền kết quả từ trái sang phải.

### Câu 4

Nếu cần token metadata, nên đọc thông tin nào trước khi parser chuyển thành chuỗi?

A. `uv.lock`.  
B. `.env.example`.  
C. `main.py` text.  
D. `AIMessage.usage_metadata` nếu có.

**Đáp án: D.** Metadata có thể được tích hợp model đính kèm vào message.

### Câu 5

`StrOutputParser` có chức năng chính gì?

A. Lấy văn bản từ phản hồi của model.  
B. Tạo API key.  
C. Bắt model trả JSON đúng schema tuyệt đối.  
D. Tự truy cập Notion.

**Đáp án: A.** Parser này chuyển output về chuỗi.

### Câu 6

Lệnh `ollama run gemma3:270m` dùng để làm gì?

A. Commit mã.  
B. Mở phiên dùng model trong CLI.  
C. Bật tracing.  
D. Sinh `uv.lock`.

**Đáp án: B.** `run` tương tác với model; `pull` dùng để tải model.

### Câu 7

Tại sao không nên commit `.env`?

A. Nó quá nặng.  
B. Git không đọc được.  
C. Có thể chứa API key và secret.  
D. Vì Python không dùng được.

**Đáp án: C.** Secret lộ trên kho có thể bị lợi dụng.

### Câu 8

Bạn đang ở Việt Nam nhưng workspace LangSmith đặt tại US. Cách chọn endpoint đúng nhất là gì?

A. Luôn chọn EU.  
B. Dùng region khác ngẫu nhiên.  
C. Xóa LangSmith.  
D. Dùng endpoint theo khu vực workspace đã đăng ký.

**Đáp án: D.** Region phụ thuộc cấu hình dịch vụ, không phải vị trí người dùng.

### Câu 9

Một model local trả tóm tắt nhưng thiếu yêu cầu thứ hai. Nguyên nhân hợp lý nhất là gì?

A. Có thể do khả năng tuân thủ chỉ dẫn của model, cần kiểm thử.  
B. Chắc chắn do Python sai cú pháp.  
C. Cứ tăng `temperature` là hết.  
D. Vì chỉ OpenAI dùng được LCEL.

**Đáp án: A.** Model nhỏ có thể không theo hết prompt phức tạp.

### Câu 10

Vì sao kiểm thử chain với `RunnableLambda` giả lập model hữu ích?

A. Vì tự huấn luyện một LLM.  
B. Vì kiểm tra logic pipeline mà không phụ thuộc request ngoài.  
C. Vì thay thế toàn bộ kiểm thử chất lượng.  
D. Vì có thể xóa prompt.

**Đáp án: B.** Mock/fake model làm unit test nhanh và ổn định.

## 4. Bài thực hành kiểm tra

**Nhiệm vụ 1:** Viết đoạn code tạo `ChatPromptTemplate` gồm `{topic}` và `{language}`. Gọi `prompt.invoke()` với một input đúng và một input thiếu key. Mô tả lỗi.

**Nhiệm vụ 2:** Vẽ sơ đồ các kiểu dữ liệu của `prompt | model | StrOutputParser()`. Giải thích vì sao `AIMessage` vẫn có giá trị khi debugging.

**Nhiệm vụ 3:** Chạy `uv run pytest -q` trong thư mục `thuc-hanh/`; ít nhất một testcase phải dùng fake model và một testcase phải kiểm tra đầu vào trống.

## 5. Tiêu chí hoàn thành

- [ ] Trả lời đúng tối thiểu 8/10 câu.
- [ ] Trình bày được thứ tự 3 bước của LCEL không nhìn tài liệu.
- [ ] Tạo được một prompt chứa 2 biến và xử lý lỗi thiếu biến.
- [ ] Chạy được unit test offline sau khi cài dependencies.

## 6. Tổng kết

Nếu hiểu rõ đường đi dữ liệu và phân biệt template, model, parser, việc học các ứng dụng phức tạp hơn sẽ dựa trên nền tảng rõ ràng thay vì học thuộc câu lệnh.
