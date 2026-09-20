# Bài 002 — Sản phẩm sẽ xây dựng: AI Job Search Agent

## 1. Tóm tắt

Mục tiêu của phần thực hành là xây dựng một search agent có thể nhận yêu cầu tìm việc, sử dụng công cụ tìm kiếm web để thu thập thông tin và trả về các vị trí phù hợp kèm nguồn. Ví dụ xuyên suốt là tìm ba vị trí tuyển dụng kỹ sư AI tại khu vực Bay Area trên LinkedIn.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- mô tả chức năng mục tiêu của AI Job Search Agent;
- giải thích vì sao search agent cần tool thay vì chỉ dựa vào LLM;
- giải thích vai trò của URL nguồn trong việc kiểm chứng câu trả lời;
- mô tả pipeline từ yêu cầu người dùng đến câu trả lời có căn cứ.

## 3. Bài toán cần giải quyết

Người dùng có thể đưa ra một yêu cầu như:

> Tìm ba vị trí tuyển dụng kỹ sư AI tại Bay Area trên LinkedIn và liệt kê thông tin chi tiết.

Một ứng dụng AI hữu ích không nên chỉ sinh ra ba vị trí nghe có vẻ hợp lý. Nó cần thực hiện tìm kiếm, lấy dữ liệu thực tế và cho người dùng biết thông tin đến từ đâu.

Đầu ra mong muốn có hai phần chính:

- thông tin tóm tắt về từng vị trí;
- URL nguồn để người dùng mở và kiểm tra lại.

## 4. Vì sao LLM cần công cụ tìm kiếm?

LLM không nên được xem như một cơ sở dữ liệu thời gian thực. Khả năng sinh câu trả lời của model đến từ dữ liệu và quá trình huấn luyện, trong khi các thông tin như tin tuyển dụng có thể thay đổi liên tục.

Search tool giải quyết khoảng trống này bằng cách cho agent một hành động bên ngoài:

```text
User query
   ↓
Agent đánh giá có cần dữ liệu web không
   ↓
Search tool
   ↓
Kết quả tìm kiếm + URL
   ↓
LLM tổng hợp
   ↓
Câu trả lời có nguồn
```

Như vậy, LLM vẫn chịu trách nhiệm suy luận và tổng hợp, nhưng dữ liệu thực tế được lấy qua tool.

## 5. Nguồn là một phần của chất lượng câu trả lời

Một câu trả lời chỉ có nội dung nhưng không có nguồn khiến người dùng khó đánh giá độ tin cậy. Với dữ liệu tuyển dụng, nguồn còn quan trọng hơn vì:

- tin có thể đã hết hạn;
- mô tả có thể thay đổi;
- tiêu đề hoặc địa điểm có thể bị hiểu sai;
- người dùng cần truy cập trang gốc để nộp hồ sơ.

URL cho phép người dùng kiểm tra chéo thông tin thay vì phải tin hoàn toàn vào phần tổng hợp của LLM.

## 6. Search agent sẽ làm gì?

Ở mức chức năng, agent cần thực hiện các bước sau:

1. Nhận yêu cầu ngôn ngữ tự nhiên.
2. Xác định rằng nhiệm vụ cần dữ liệu web.
3. Lập một hoặc nhiều truy vấn tìm kiếm phù hợp.
4. Gọi search tool.
5. Đọc kết quả và các URL nguồn.
6. Tổng hợp các vị trí phù hợp.
7. Trả lời người dùng với thông tin có thể kiểm chứng.

Một nhiệm vụ phức tạp có thể khiến agent tạo nhiều truy vấn tìm kiếm thay vì chỉ một truy vấn duy nhất.

## 7. Vai trò của giao diện

Khi ứng dụng hiển thị trạng thái đang tìm kiếm, nguồn đã sử dụng hoặc các hành động của agent, người dùng có thể hiểu hệ thống đang làm gì. Đây là nền tảng để xây dựng giao diện agent rõ ràng hơn thay vì chỉ có một hộp văn bản trả lời cuối cùng.

Trong module này, trọng tâm kỹ thuật là khả năng tìm kiếm và dữ liệu nguồn; giao diện chỉ đóng vai trò minh họa cho hành vi của agent.

## 8. Tiêu chí sản phẩm ở mức tối thiểu

Một AI Job Search Agent đạt mục tiêu của phần này khi:

- nhận được truy vấn tìm việc bằng ngôn ngữ tự nhiên;
- có khả năng gọi công cụ tìm kiếm;
- dùng kết quả tìm kiếm để tạo câu trả lời;
- trả về các URL nguồn tương ứng;
- không phụ thuộc vào một chuỗi kết quả được viết cứng trong code.

## 9. Tổng kết

Sản phẩm mục tiêu là một agent tìm kiếm việc làm dựa trên web. Giá trị chính không nằm ở việc LLM viết một câu trả lời đẹp, mà ở khả năng **tự quyết định tìm kiếm**, **sử dụng dữ liệu bên ngoài** và **trả về nguồn để kiểm chứng**. Đây là ví dụ thực tế đầu tiên cho cách tool biến một LLM thành một hệ thống có khả năng hành động.
