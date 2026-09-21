# Bài tập 001 - Nhận diện luồng Function Calling

## 1. Mục tiêu

Bài tập giúp người học:

- Phân biệt được văn bản tự do với yêu cầu gọi công cụ có cấu trúc.
- Xác định đúng vai trò của mô hình, ứng dụng và công cụ.
- Mô tả được luồng thực thi cơ bản của Function Calling.
- Phân tích được lý do một hệ thống phụ thuộc vào regex có thể kém ổn định.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm:

- `ReAct`;
- Function Calling / Tool Calling;
- dữ liệu có cấu trúc;
- tên công cụ;
- đối số;
- bước thực thi công cụ;
- bước đưa kết quả công cụ trở lại mô hình.

## 3. Bài tập 1 - Phân loại đầu ra

Cho hai phản hồi sau.

### Trường hợp A

```text
Action: get_current_weather
Action Input: Paris
```

### Trường hợp B

```json
{
  "name": "get_current_weather",
  "arguments": {
    "location": "Paris"
  }
}
```

Hãy trả lời:

1. Trường hợp nào gần với cách gọi công cụ dựa trên văn bản tự do?
2. Trường hợp nào thể hiện dữ liệu có cấu trúc?
3. Trường hợp nào thuận lợi hơn để chương trình truy cập trực tiếp tên công cụ và đối số?
4. Điều gì có thể xảy ra nếu mô hình thay đổi cách viết của trường hợp A?

## 4. Bài tập 2 - Sắp xếp luồng thực thi

Sắp xếp các bước sau theo đúng thứ tự của một vòng Function Calling:

- Công cụ trả về kết quả.
- Người dùng gửi yêu cầu.
- Ứng dụng thực thi công cụ.
- Mô hình tạo yêu cầu gọi công cụ.
- Ứng dụng gửi kết quả công cụ trở lại mô hình.
- Mô hình tiếp tục tạo câu trả lời.

## 5. Bài tập 3 - Xác định trách nhiệm

Với từng nhiệm vụ dưới đây, hãy ghi thành phần chịu trách nhiệm chính: **mô hình**, **ứng dụng**, hoặc **công cụ**.

1. Quyết định rằng cần sử dụng `get_current_weather`.
2. Tạo đối số `location = "Paris"`.
3. Ánh xạ tên `get_current_weather` tới hàm thật trong chương trình.
4. Thực thi truy vấn lấy dữ liệu thời tiết.
5. Nhận kết quả công cụ và dùng nó để tạo câu trả lời cho người dùng.

## 6. Bài tập 4 - Phân tích lỗi

Một agent yêu cầu mô hình luôn trả về:

```text
Action: <tool_name>
Action Input: <arguments>
```

Một lần mô hình trả về:

```text
I should use the weather tool for Paris.
```

Hãy giải thích:

1. Vì sao con người vẫn hiểu được ý định?
2. Vì sao bộ phân tích dựa trên regex có thể thất bại?
3. Function Calling giải quyết nhóm vấn đề này theo hướng nào?

## 7. Tiêu chí hoàn thành

Bài tập được xem là hoàn thành khi người học có thể:

- phân biệt đúng hai kiểu đầu ra;
- sắp xếp đúng vòng gọi công cụ;
- xác định đúng vai trò của từng thành phần;
- giải thích được nguyên nhân Function Calling phù hợp hơn cho dữ liệu điều khiển máy đọc.

Không cần viết code trong bài tập này.
