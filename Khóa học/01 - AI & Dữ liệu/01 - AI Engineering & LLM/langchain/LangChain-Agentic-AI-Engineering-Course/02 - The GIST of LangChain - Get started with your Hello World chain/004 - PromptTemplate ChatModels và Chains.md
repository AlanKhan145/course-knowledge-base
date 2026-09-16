# 004 - Nền tảng LangChain: PromptTemplate, ChatModels và Chains

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lesson  
**Thời lượng:** 5 phút

---

## 1. Tóm tắt

Ba abstraction tạo nền cho Hello World chain là `PromptTemplate`, chat model và chain. `PromptTemplate` biến một prompt cố định thành mẫu có tham số; chat model cung cấp giao diện để làm việc với LLM theo dạng message; chain nối nhiều bước thành một workflow trong đó output của bước trước trở thành input của bước sau.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Giải thích prompt và prompt template khác nhau ở điểm nào.
- Mô tả input/output của một chat model.
- Giải thích vì sao một chain có thể làm nhiều việc hơn một lần gọi LLM.
- Nhận diện nguyên tắc composition: output của một thành phần đi vào thành phần kế tiếp.
- Biết cách đọc source code của class khi cần hiểu abstraction sâu hơn.

## 3. Từ prompt đến PromptTemplate

Prompt là nội dung được đưa vào LLM để model xử lý và tạo output. Nếu chương trình chỉ chạy một yêu cầu cố định, một chuỗi text có thể đủ. Nhưng khi ứng dụng cần chạy cùng một yêu cầu với nhiều input khác nhau, việc viết lại prompt cho từng trường hợp trở nên không cần thiết.

Ví dụ, cùng một cấu trúc có thể dùng cho nhiều sản phẩm:

```text
Hãy viết mô tả ngắn cho sản phẩm: {product}
```

Giá trị `{product}` có thể lần lượt là thức ăn cho mèo, một sản phẩm mua sắm hoặc piano. Cấu trúc prompt không thay đổi; chỉ dữ liệu runtime thay đổi.

`PromptTemplate` đóng gói mẫu này thành một object có thể nhận input và format thành prompt cuối cùng trước khi gửi đến model. Điều đó làm prompt có tính tái sử dụng và dễ ghép vào workflow hơn.

## 4. Chat model là giao diện làm việc với LLM

Các LLM đời đầu thường được hình dung theo dạng:

```text
string → model → string
```

Các model hội thoại hiện đại làm việc tự nhiên hơn với danh sách message có cấu trúc. Input có thể gồm system instruction, user message và các AI response trước đó; output là một AI message.

```text
[SystemMessage, HumanMessage, ...]
              ↓
          Chat model
              ↓
          AIMessage
```

Trong LangChain, chat model là abstraction giúp ứng dụng làm việc với nhiều provider theo một kiểu giao tiếp tương đối thống nhất. `ChatOpenAI` là wrapper cho OpenAI API; những provider khác có integration riêng.

## 5. Chain là workflow có thể ghép nối

Một chain không chỉ là “gọi model”. Chain là chuỗi các thành phần được nối theo thứ tự.

Mỗi bước có thể là:

- prompt;
- lời gọi LLM;
- phép biến đổi dữ liệu;
- tool call;
- một chain khác.

Ví dụ một workflow có thể bắt đầu bằng việc chuẩn hóa câu hỏi của người dùng, format thành prompt, gửi đến model, parse output thành dữ liệu có cấu trúc, gọi API bên ngoài rồi dùng response của API cho một prompt tiếp theo.

```text
User input
   ↓
Prompt
   ↓
LLM
   ↓
Parse
   ↓
External API
   ↓
LLM tiếp theo
```

Chính khả năng composition này cho phép một ứng dụng vượt ra ngoài mô hình “một prompt vào, một câu trả lời ra”.

## 6. Đọc source code để hiểu abstraction

Khi làm việc với framework, một kỹ năng hữu ích là mở implementation của class thay vì chỉ dựa vào tên API. IDE thường cho phép điều hướng trực tiếp từ `PromptTemplate` hoặc `ChatOpenAI` đến source code và documentation đi kèm.

Không cần hiểu toàn bộ implementation ngay từ đầu. Mục đích là hình thành thói quen kiểm tra:

- class nhận tham số gì;
- method chính làm gì;
- object trả về kiểu gì;
- abstraction nào đang được dùng phía dưới.

Cách tiếp cận này đặc biệt hữu ích khi LangChain có nhiều lớp wrapper.

## 7. Mối quan hệ giữa ba thành phần

Có thể ghi nhớ ba abstraction theo một luồng đơn giản:

```text
PromptTemplate
    ↓ format dữ liệu runtime
Prompt hoàn chỉnh
    ↓
Chat model
    ↓ tạo AIMessage
Response
```

Khi các thành phần được ghép thành một workflow có thể chạy như một đơn vị, ta có chain. Bài tiếp theo sẽ triển khai trực tiếp mạch này bằng LangChain Expression Language.
