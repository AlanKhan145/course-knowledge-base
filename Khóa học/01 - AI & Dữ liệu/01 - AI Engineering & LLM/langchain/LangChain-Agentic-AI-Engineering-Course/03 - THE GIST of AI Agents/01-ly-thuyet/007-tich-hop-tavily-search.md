# Bài 007 — Tích hợp tìm kiếm thực tế bằng Tavily

## 1. Tóm tắt

Tool `search` tĩnh giúp hiểu execution loop nhưng chưa truy cập dữ liệu thật. Bài này thay phần implementation bằng Tavily để agent có khả năng tìm kiếm web. Có hai hướng: tự viết custom tool dùng `TavilyClient`, hoặc sử dụng tool tích hợp sẵn của `langchain-tavily`.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- tích hợp `TavilyClient` vào custom tool;
- giải thích cách biến search giả thành search thật;
- quan sát agent tạo nhiều tool call cho truy vấn phức tạp;
- so sánh custom Tavily tool với tool tích hợp sẵn;
- giải thích vì sao tool do provider cung cấp có thể hỗ trợ argument phong phú hơn.

## 3. Thay dữ liệu tĩnh bằng Tavily

Ở bài trước, tool chỉ trả về một chuỗi cố định. Bây giờ implementation được thay bằng truy vấn thật qua Tavily.

```python
from tavily import TavilyClient
from langchain_core.tools import tool

client = TavilyClient()

@tool
def search(query: str):
    """Search the internet and return search results."""
    return client.search(query=query)
```

`TavilyClient` đọc thông tin xác thực từ `TAVILY_API_KEY` trong môi trường.

Khi agent gọi `search`, kết quả không còn là dữ liệu giả mà là kết quả tìm kiếm có nội dung và nguồn.

## 4. Agent dùng dữ liệu thời gian thực như thế nào?

Luồng agent gần như không đổi:

```text
User query
   ↓
LLM chọn search tool
   ↓
Runtime gọi Tavily
   ↓
Tavily trả search results
   ↓
LLM tổng hợp final answer
```

Điểm thay đổi nằm ở implementation của tool. Điều này minh họa tính module của agent architecture: có thể thay một tool đơn giản bằng integration thực tế mà không phải thiết kế lại toàn bộ agent.

## 5. Truy vấn phức tạp có thể tạo nhiều tool call

Với yêu cầu tìm ba vị trí AI Engineer tại Bay Area trên LinkedIn, model có thể tạo nhiều search query khác nhau. Các truy vấn có thể tập trung vào từng thành phố, chức danh hoặc miền nguồn.

Một AI message có thể chứa nhiều tool call. Nếu runtime/model hỗ trợ, các tool call có thể được thực thi theo cách song song thay vì tuần tự từng cái.

Kết quả của tất cả tool call sau đó được đưa vào lần gọi model tiếp theo để tổng hợp final answer.

## 6. Quan sát bằng trace

Trace cho phép xem:

- query nào agent tự tạo;
- agent gọi tool bao nhiêu lần;
- mỗi tool call nhận argument gì;
- Tavily trả về nguồn nào;
- final answer đã sử dụng kết quả ra sao.

Đây là cách kiểm tra xem agent đang thật sự tìm kiếm có mục tiêu hay chỉ tạo các truy vấn dư thừa.

## 7. Custom tool và Tavily tool tích hợp sẵn

Custom tool cho phép kiểm soát trực tiếp SDK:

```python
@tool
def search(query: str):
    return client.search(query=query)
```

Tuy nhiên, provider có thể đã chuẩn bị một tool LangChain giàu metadata và argument hơn. Khi dùng integration package:

```python
from langchain_tavily import TavilySearch

search_tool = TavilySearch()
```

Tool tích hợp sẵn có thể cho model lựa chọn thêm các tham số như giới hạn domain hoặc độ sâu tìm kiếm, thay vì chỉ nhận một chuỗi `query`.

## 8. Vì sao tool tích hợp sẵn có thể tốt hơn?

Nhà cung cấp hiểu API của họ rõ hơn và có thể:

- viết mô tả tool chính xác hơn;
- expose các argument phù hợp;
- định nghĩa schema chặt chẽ;
- tận dụng đầy đủ khả năng của dịch vụ.

Vì vậy, khi có integration chính thức hoặc được provider duy trì, nó thường giúp giảm lượng code tùy chỉnh và cho model giao diện tool tốt hơn.

Custom tool vẫn hữu ích khi cần:

- thay đổi logic trước hoặc sau API call;
- giới hạn dữ liệu;
- kết hợp nhiều dịch vụ;
- kiểm soát format output riêng.

## 9. Search agent tìm việc

Với job-search use case, agent có thể tạo nhiều truy vấn để tìm các vị trí khác nhau, sau đó dùng URL nguồn để tổng hợp câu trả lời. Một số kết quả có thể đã ngừng nhận ứng viên, vì vậy URL nguồn vẫn cần được giữ để người dùng kiểm tra trạng thái thực tế.

## 10. Tổng kết

Tavily biến search agent từ demo dùng dữ liệu tĩnh thành agent có khả năng lấy dữ liệu web. Custom tool giúp hiểu cơ chế, còn Tavily tool tích hợp sẵn cung cấp giao diện giàu metadata và argument hơn. Execution loop không thay đổi: LLM chọn tool, runtime chạy tool, kết quả quay lại model để tổng hợp.
