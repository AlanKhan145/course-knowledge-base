# Bài tập 002 - Thiết kế và phân tích Function Calling cho LLM

## 1. Mục tiêu

Sau bài tập, người học có thể:

- Xác định các thành phần cần có trong một tool specification.
- Mô tả đầy đủ vòng đời của một Function Call.
- Phân biệt việc mô hình lựa chọn công cụ với việc ứng dụng thực thi công cụ.
- Phân tích ưu điểm và giới hạn của Function Calling.
- Nhận diện hai nhóm ứng dụng: gọi công cụ và tạo đầu ra có cấu trúc.

## 2. Kiến thức cần dùng

Bài tập sử dụng các khái niệm:

- function/tool specification;
- JSON contract;
- tool name;
- arguments;
- structured output;
- tool execution flow;
- validation;
- provider differences;
- `ReAct`;
- `Pydantic`.

## 3. Bài tập 1 - Thiết kế specification

Giả sử ứng dụng có hàm:

```text
get_current_weather(location, unit)
```

Hãy viết một bản mô tả tool ở mức khái niệm gồm:

- tên;
- mô tả;
- tham số `location`;
- tham số `unit`;
- mục đích của từng tham số.

Không cần tuân theo schema của một provider cụ thể.

## 4. Bài tập 2 - Tạo tool call

Người dùng hỏi:

```text
Thời tiết hiện tại ở Paris là bao nhiêu độ C?
```

Hãy viết một đối tượng JSON biểu diễn tool call phù hợp, sử dụng:

```text
get_current_weather
```

với các đối số cần thiết.

## 5. Bài tập 3 - Xây dựng luồng thực thi

Viết lại quy trình dưới dạng tối đa 8 bước, bắt đầu từ yêu cầu của người dùng và kết thúc bằng câu trả lời cuối cùng.

Quy trình phải thể hiện rõ:

- lúc LLM ra quyết định;
- lúc ứng dụng đọc tool call;
- lúc ứng dụng thực thi hàm;
- lúc kết quả công cụ được trả lại;
- lúc LLM tiếp tục tạo câu trả lời.

## 6. Bài tập 4 - Tool Calling hay Structured Output?

Phân loại từng trường hợp sau vào một trong hai nhóm chính:

- **Gọi công cụ bên ngoài**
- **Tạo đầu ra có cấu trúc**

Các trường hợp:

1. Lấy nhiệt độ hiện tại từ dịch vụ thời tiết.
2. Trích xuất `name`, `age`, `city` từ một đoạn giới thiệu.
3. Gọi hàm tìm sản phẩm trong cơ sở dữ liệu.
4. Chuyển một đoạn mô tả hóa đơn thành các trường `invoice_id`, `total`, `currency`.
5. Gửi yêu cầu tới một dịch vụ bên ngoài thông qua hàm do ứng dụng cung cấp.

## 7. Bài tập 5 - Phân tích Function Calling và ReAct

Viết một đoạn ngắn trả lời ba câu hỏi:

1. Vì sao việc parse `Action:` và `Action Input:` từ văn bản có thể gây lỗi?
2. Function Calling cải thiện điểm này như thế nào?
3. Function Calling có làm cho ứng dụng không cần xác thực dữ liệu nữa không? Giải thích.

## 8. Bài tập 6 - Debug một tool call

Ứng dụng định nghĩa:

```text
transfer_money(amount, destination_account)
```

Mô hình tạo:

```json
{
  "name": "transfer_money",
  "arguments": {
    "amount": -500,
    "destination_account": ""
  }
}
```

Không thực thi giao dịch.

Hãy liệt kê các kiểm tra mà ứng dụng nên thực hiện trước khi cho phép gọi hàm thật.

Mục tiêu của bài tập là nhận ra rằng **đầu ra đúng cấu trúc chưa chắc đã đúng nghiệp vụ**.

## 9. Bài tập 7 - Provider differences

Một framework hỗ trợ nhiều nhà cung cấp mô hình.

Hãy nêu ít nhất ba loại khác biệt mà lớp tích hợp có thể cần xử lý giữa các provider khi làm việc với Function Calling.

Không cần nêu cú pháp API cụ thể.

## 10. Tiêu chí hoàn thành

Bài tập được xem là hoàn thành khi người học có thể:

- tạo được một specification hợp lý;
- biểu diễn được tool call bằng dữ liệu có cấu trúc;
- mô tả đúng vòng thực thi;
- phân biệt hai mục đích chính của Function Calling;
- giải thích được tại sao vẫn phải validate tool call;
- nhận diện được các khác biệt có thể tồn tại giữa provider.

Không yêu cầu triển khai bằng framework cụ thể.
