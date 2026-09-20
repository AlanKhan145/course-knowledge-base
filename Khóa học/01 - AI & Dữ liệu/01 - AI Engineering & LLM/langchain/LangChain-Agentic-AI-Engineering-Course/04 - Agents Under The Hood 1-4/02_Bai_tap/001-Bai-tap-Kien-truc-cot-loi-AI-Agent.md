# 001 - Bài tập: bóc tách kiến trúc AI Agent

## 1. Mục tiêu

Bài tập giúp củng cố cách một agent được bóc tách từ abstraction cấp cao xuống các thành phần thấp hơn.

Sau khi hoàn thành, người học cần có thể:

- phân biệt ba mức triển khai trong phần học;
- xác định thành phần nào do framework hỗ trợ và thành phần nào phải tự viết;
- giải thích vì sao việc giảm abstraction giúp hiểu agent sâu hơn.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm:

- agent loop;
- function calling;
- LangChain primitives;
- JSON schema;
- ReAct prompt;
- biểu thức chính quy;
- scratchpad.

## 3. Đề bài

Hãy mô tả lại lộ trình bóc tách một AI agent từ mức framework xử lý gần như toàn bộ hệ thống đến mức tự triển khai ReAct.

Không mô tả chung chung. Mỗi mức phải chỉ ra rõ điều gì còn được framework hỗ trợ và điều gì người học bắt đầu tự kiểm soát.

## 4. Nhiệm vụ

1. Vẽ một sơ đồ gồm ba mức triển khai.
2. Với mỗi mức, ghi rõ:
   - có sử dụng LangChain abstraction hay không;
   - có sử dụng function calling hay không;
   - thành phần nào phải tự triển khai.
3. Viết một đoạn ngắn giải thích vì sao tự viết JSON schema giúp thấy được giá trị của framework.
4. Viết một đoạn ngắn giải thích vai trò của `scratchpad` ở mức ReAct.
5. Nêu cách bạn sẽ quan sát agent khi thực hành để không chỉ nhìn vào câu trả lời cuối cùng.

## 5. Yêu cầu hoàn thành

- [ ] Có đủ ba mức triển khai.
- [ ] Phân biệt đúng agent loop và function calling.
- [ ] Có nhắc đến JSON schema ở mức triển khai thủ công.
- [ ] Có nhắc đến ReAct prompt, regex và scratchpad ở mức sâu nhất.
- [ ] Có giải thích vai trò của log hoặc trace trong quá trình học.

## 6. Tiêu chí tự kiểm tra

Bài làm đạt yêu cầu khi một người khác có thể nhìn sơ đồ và hiểu được:

- vì sao mỗi bước được xem là “bóc thêm một lớp abstraction”;
- framework đang tiết kiệm phần việc nào;
- tại sao sau ba mức triển khai, người học có thể quan sát rõ hơn cơ chế agent.
