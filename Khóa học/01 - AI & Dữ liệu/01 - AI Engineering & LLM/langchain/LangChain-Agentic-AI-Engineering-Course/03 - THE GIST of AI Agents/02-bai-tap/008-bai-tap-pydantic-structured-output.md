# Bài tập 008 — Structured Output bằng Pydantic

## 1. Mục tiêu

- tạo Pydantic schema lồng nhau;
- yêu cầu agent trả dữ liệu theo schema;
- truy cập structured response bằng code.

## 2. Đề bài

Nâng cấp AI Job Search Agent để kết quả cuối không còn là text tự do. Agent phải trả object gồm:

- `answer`: phần tổng hợp;
- `sources`: danh sách nguồn;
- mỗi source chứa `url`.

## 3. Nhiệm vụ

1. Tạo `Source(BaseModel)` với trường `url: str`.
2. Dùng `Field` để mô tả trường URL.
3. Tạo `AgentResponse(BaseModel)`.
4. Thêm `answer: str`.
5. Thêm `sources: list[Source]` và `default_factory=list`.
6. Truyền `AgentResponse` vào `response_format`.
7. Chạy agent.
8. Lấy `result["structured_response"]`.
9. In riêng `answer` và từng `source.url`.

## 4. Yêu cầu

- Schema phải dùng type hint đầy đủ.
- `sources` phải là danh sách object `Source`, không phải một chuỗi chứa nhiều URL.
- Không parse thủ công text để tạo object sau khi agent trả lời.
- Phải xác nhận kiểu của structured response trong debugger hoặc bằng `type()`.

## 5. Tiêu chí hoàn thành

- [ ] Có hai Pydantic model.
- [ ] Có cấu trúc lồng nhau đúng yêu cầu.
- [ ] Agent được tạo với `response_format`.
- [ ] Có thể truy cập `.answer`.
- [ ] Có thể lặp qua `.sources` và lấy `.url`.
- [ ] Output có thể tiếp tục serialize hoặc đưa vào UI.

## 6. Gợi ý

Mục tiêu của bài không phải làm cho text “trông có cấu trúc”, mà là nhận được một object thực sự tuân theo schema để code có thể sử dụng trực tiếp.
