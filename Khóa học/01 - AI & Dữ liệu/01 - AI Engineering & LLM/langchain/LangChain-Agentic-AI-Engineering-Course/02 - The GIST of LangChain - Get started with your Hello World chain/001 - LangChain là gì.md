# 001 - LangChain là gì? Tổng quan trong 6 phút

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lesson  
**Thời lượng:** 6 phút

---

## 1. Tóm tắt

LangChain là một framework mã nguồn mở giúp đơn giản hóa việc xây dựng ứng dụng sử dụng mô hình ngôn ngữ lớn (`LLM`). Thay vì tự nối từng phần riêng lẻ như model, prompt, dữ liệu riêng, lịch sử hội thoại, công cụ bên ngoài và cơ chế quan sát hệ thống, LangChain cung cấp các abstraction có giao diện thống nhất để ghép những thành phần này thành một workflow.

Trọng tâm của bài là hiểu vì sao một ứng dụng LLM thực tế phức tạp hơn một lần gọi model đơn lẻ, và LangChain giải quyết sự phức tạp đó bằng các module như chat model, prompt, document loader, agent/tool và tracing.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Giải thích được LangChain giải quyết vấn đề gì trong ứng dụng LLM.
- Nhận diện các thành phần thường xuất hiện trong một ứng dụng LLM thực tế.
- Giải thích vai trò của chat model, prompt template, document loader và agent/tool.
- Mô tả được lợi ích của việc dùng một giao diện chung để giảm phụ thuộc vào một nhà cung cấp model.
- Nhận biết vai trò của LangSmith trong debugging, tracing và monitoring.

## 3. Vì sao cần một framework như LangChain?

Một ứng dụng LLM đơn giản có thể chỉ cần gửi một prompt đến model và nhận lại câu trả lời. Tuy nhiên, khi ứng dụng bắt đầu phục vụ một nhu cầu thực tế, số thành phần cần phối hợp tăng rất nhanh.

Giả sử ứng dụng cần sử dụng một model mạnh như Claude, GPT, Gemini hoặc Mistral. Người dùng không chỉ muốn hỏi kiến thức mà model đã biết, mà còn muốn model làm việc với dữ liệu riêng như PDF, email hoặc cơ sở dữ liệu Notion. Prompt cũng cần được tạo động theo input của người dùng, lịch sử hội thoại cần được lưu lại, model có thể cần được thay đổi, và hệ thống còn có thể phải gọi Google Search hoặc một API bên ngoài.

Lúc này, bài toán không còn là “gọi LLM” mà trở thành:

```text
Dữ liệu riêng
    ↓
Chuẩn hóa dữ liệu
    ↓
Tạo prompt động
    ↓
Gọi model
    ↓
Lưu lịch sử / xử lý output
    ↓
Có thể gọi tool hoặc API
    ↓
Theo dõi và debug quá trình chạy
```

Nếu tự triển khai tất cả từ đầu, lập trình viên phải đồng bộ nhiều thành phần có trách nhiệm khác nhau. LangChain cung cấp các abstraction để những thành phần này có thể kết nối với nhau theo một cấu trúc thống nhất.

## 4. Các abstraction cốt lõi của LangChain

LangChain cung cấp một lớp giao tiếp chung với nhiều loại LLM. Thay vì viết toàn bộ ứng dụng gắn chặt với một vendor, lập trình viên có thể thay phần chat model trong khi giữ nguyên phần lớn workflow xung quanh. Cách tổ chức này giúp giảm vendor lock-in và tạo điều kiện thử nhiều model khác nhau.

Prompt cũng được xem như một thành phần có cấu trúc. Với prompt template, một mẫu prompt có thể chứa biến và nhận dữ liệu ở runtime. Ví dụ, cùng một template có thể được dùng nhiều lần với nhiều input mà không phải ghép chuỗi thủ công ở từng vị trí trong chương trình.

Document loader giải quyết một nhu cầu khác: dữ liệu có thể đến từ nhiều nguồn khác nhau nhưng cần được đưa về một biểu diễn chung để tiếp tục xử lý. PDF, email hoặc Notion có thể được nạp thành các đối tượng document của LangChain trước khi được đưa vào pipeline.

Đối với các ứng dụng agentic, model không chỉ sinh văn bản mà còn có thể được trang bị tool. Một tool có thể đại diện cho thao tác tìm kiếm Internet, truy vấn database, gọi API hoặc gửi email. Khi cần workflow phức tạp hơn, các abstraction liên quan đến agent và LangGraph giúp tổ chức logic điều phối.

## 5. Từ model đơn lẻ đến ứng dụng agentic

Điểm quan trọng là LLM được sử dụng như một thành phần trong hệ thống, không phải toàn bộ hệ thống.

Một ứng dụng có thể cần:

- model để suy luận và tạo nội dung;
- prompt template để định hình yêu cầu;
- dữ liệu riêng để bổ sung ngữ cảnh;
- memory hoặc lịch sử hội thoại;
- tool để thực hiện hành động;
- workflow để nối các bước;
- tracing để quan sát những gì thực sự xảy ra khi chương trình chạy.

LangChain trở nên hữu ích khi các yêu cầu này cần được kết hợp. Framework giúp xây dựng một lớp orchestration xung quanh model để các thành phần có thể phối hợp thay vì tồn tại rời rạc.

## 6. Mã nguồn mở và khả năng quan sát hệ thống

LangChain là mã nguồn mở, vì vậy lập trình viên có thể xem implementation trên GitHub thay vì coi framework như một hộp đen tuyệt đối. Việc đọc source code đặc biệt hữu ích khi cần hiểu một abstraction hoạt động thế nào hoặc khi hành vi thực tế khác với kỳ vọng.

Khi ứng dụng phát triển, debugging bằng cách chỉ nhìn output cuối cùng là chưa đủ. LangSmith được dùng để tracing và monitoring các lời gọi LLM cũng như các bước bên trong chain. Nhờ đó, lập trình viên có thể quan sát input, output, model được sử dụng, token và các metadata khác của quá trình thực thi.

## 7. Mạch kiến thức cần ghi nhớ

LangChain không huấn luyện model thay cho người dùng. Giá trị chính của framework nằm ở việc giúp tổ chức và kết nối những thành phần xung quanh model.

Có thể ghi nhớ theo chuỗi:

```text
LLM
+ Prompt
+ Dữ liệu
+ Lịch sử
+ Tool
+ Workflow
+ Tracing
= Ứng dụng LLM có cấu trúc
```

Trong các bài tiếp theo, các abstraction này sẽ được thu nhỏ thành một ví dụ “Hello World” để quan sát cách `PromptTemplate`, chat model và chain phối hợp với nhau.
