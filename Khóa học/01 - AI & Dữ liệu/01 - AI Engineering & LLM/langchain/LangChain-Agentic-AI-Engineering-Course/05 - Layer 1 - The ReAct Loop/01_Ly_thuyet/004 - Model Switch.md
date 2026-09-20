# 004 - Model Switch

## 1. Tóm tắt

LangChain cho phép giữ nguyên phần lớn logic agent khi chuyển sang model hoặc provider khác. Tuy nhiên, khả năng đổi model bằng một cấu hình nhỏ không đảm bảo model mới sẽ hoạt động tốt với cùng use case. Bài này dùng chính vòng lặp ReAct đã xây dựng để minh họa hai ý: lợi ích của abstraction và nhu cầu đánh giá model trước khi đưa vào production.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- giải thích lợi ích của việc khởi tạo model qua lớp trừu tượng LangChain;
- xác định dependency cần có khi đổi provider;
- phân biệt khả năng tương thích API với chất lượng thực tế của agent;
- dùng trace để so sánh hành vi giữa các model;
- giải thích vì sao model mới hơn không mặc nhiên là lựa chọn phù hợp hơn cho một workflow cụ thể.

## 3. Chuyển model mà không viết lại agent loop

Vòng lặp trước đó được xây dựng bằng các abstraction chung của LangChain: chat model, tool, message và `bind_tools()`.

Nhờ vậy, khi chuyển từ model chạy qua Ollama sang model của OpenAI, logic ReAct không cần viết lại từ đầu. Thay đổi chủ yếu nằm ở phần cấu hình model/provider.

Điều kiện bắt buộc là integration package của provider mới đã được cài đặt và model đó hỗ trợ cơ chế tool calling mà agent đang sử dụng.

## 4. Điều không thay đổi khi đổi model

Nếu hai model tương thích với interface cần thiết, các thành phần sau có thể giữ nguyên:

- danh sách tool;
- `tool_map`;
- system prompt;
- human message;
- logic kiểm tra `tool_calls`;
- tool execution;
- `ToolMessage`;
- giới hạn iteration;
- tracing.

Đây là giá trị thực tế của abstraction: giảm coupling giữa orchestration logic và SDK riêng của từng provider.

## 5. Kiểm tra bằng trace

Sau khi đổi model, không nên chỉ xác nhận rằng chương trình “chạy được”. Cần xem trace để kiểm tra agent có thực hiện đúng workflow hay không.

Các dữ liệu có thể quan sát gồm:

- tool được chọn;
- arguments của tool;
- số vòng lặp;
- kết quả cuối;
- thời gian thực thi;
- token usage;
- chi phí khi có dữ liệu;
- các khác biệt trong phản hồi model.

Trong lần thử minh họa, khi chuyển sang một model OpenAI, agent vẫn thực hiện chuỗi tra cứu giá rồi áp dụng giảm giá. Trace cho phép xác nhận từng bước thay vì chỉ nhìn final answer.

## 6. Portability không đồng nghĩa với suitability

Bài học quan trọng xuất hiện khi thử một model khác trong cùng họ. Dù việc đổi model chỉ cần thay cấu hình, hành vi agent không còn giống mong đợi: model yêu cầu làm rõ laptop nào trong catalog thay vì đi tiếp theo workflow như lần chạy trước.

Điều này cho thấy hai khái niệm phải được tách biệt:

| Khái niệm | Câu hỏi |
|---|---|
| Portability | Có thể thay model mà không sửa nhiều code hay không? |
| Suitability | Model đó có thực hiện đúng nhiệm vụ, đúng tool và đúng tiêu chí của hệ thống hay không? |

LangChain hỗ trợ portability. Suitability phải được xác minh bằng đánh giá.

## 7. Không chọn model chỉ vì mới hơn

Một model được phát hành sau hoặc được xem là mạnh hơn nói chung vẫn có thể không phù hợp hơn cho một agent workflow cụ thể.

Khác biệt có thể xuất hiện ở:

- cách hiểu system prompt;
- độ tuân thủ tool policy;
- khả năng chọn đúng tool;
- cách điền arguments;
- mức độ hỏi lại người dùng;
- độ ổn định giữa nhiều lần chạy;
- latency và chi phí.

Vì vậy, quyết định đổi model cần dựa trên evals cho chính use case của hệ thống, không dựa duy nhất vào tên model hoặc vị trí của model trong một dòng sản phẩm.

## 8. Quy trình đánh giá trước khi chuyển model

Một quy trình tối thiểu nên giữ nguyên input và toolset, sau đó chạy cùng tập tình huống trên các model cần so sánh.

```text
Cùng test cases
      ↓
Model A ──→ traces ──→ kết quả A
Model B ──→ traces ──→ kết quả B
      ↓
So sánh theo tiêu chí của use case
```

Tiêu chí đánh giá nên tập trung vào hành vi agent cần có, chẳng hạn:

- có dùng đúng tool hay không;
- có tuân thủ thứ tự tool hay không;
- có tránh bịa dữ liệu hay không;
- có dừng đúng lúc hay không;
- output cuối có đáp ứng yêu cầu hay không.

Các chỉ số vận hành như token, latency và cost có thể được dùng cùng với tiêu chí chất lượng, nhưng không thay thế kiểm tra correctness.

## 9. Tổng kết

Lớp trừu tượng của LangChain giúp chuyển model/provider với ít thay đổi code hơn. Đây là lợi thế lớn cho quá trình thử nghiệm và bảo trì agent.

Tuy nhiên, khả năng thay model dễ chỉ giải quyết vấn đề kỹ thuật tích hợp. Trước khi dùng model mới cho production, cần đánh giá hành vi trên đúng agent workflow và đúng tập test của hệ thống. Model phù hợp là model đáp ứng yêu cầu thực tế, không đơn giản là model mới nhất.
