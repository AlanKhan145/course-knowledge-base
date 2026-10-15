# Bài 08 — Đầu ra có cấu trúc với LangChain Agent và Pydantic lồng nhau

> **Chương 03:** Xây dựng Search Agent bằng LangChain · **Loại:** Hướng dẫn lập trình · **Thực hành:** `../examples/08_pydantic_offline.py` và `src/ai_job_agent/schemas.py`

## 1. Tóm tắt

Một câu trả lời văn bản có thể đọc được nhưng khó xử lý ổn định bằng chương trình. Nếu cần lưu vào database, trả JSON API hoặc dựng giao diện thẻ việc làm, nên yêu cầu **structured output**. LangChain cho phép truyền `response_format=...` cho `create_agent`; kết quả có cấu trúc được đặt trong `result["structured_response"]`. **Pydantic** hỗ trợ khai báo và kiểm tra kiểu của các trường, kể cả mô hình lồng nhau.

## 2. Mục tiêu học tập

- Khai báo `Source`, `JobPosting` và `AgentResponse` bằng Pydantic.
- Phân biệt `default_factory=list`, trường bắt buộc và trường tùy chọn.
- Sử dụng `response_format` để nhận object thay vì tự parse văn bản.
- Xác định sự khác nhau giữa kiểm tra schema và xác minh độ chính xác dữ kiện.

## 3. Vì sao văn bản tự do gây khó khăn?

Giả sử agent trả đoạn: *“Tìm được hai vị trí; tin thứ nhất...”* Mỗi lần mô hình có thể đổi dấu đầu dòng, tên tiêu đề hoặc thứ tự thông tin. Nếu frontend dùng regex để trích tên công ty và URL, thay đổi trình bày có thể khiến hệ thống lỗi. JSON hoặc Pydantic cho phép code truy cập `result.jobs[0].title` và `result.sources[0].url` với hợp đồng xác định trước.

Tuy vậy, JSON **đúng cú pháp và đúng schema chưa chứng minh nội dung đúng**. Một URL `https://example.org/not-found` vẫn có thể hợp lệ về định dạng dù không có trang tồn tại. Vì vậy, cần phối hợp kiểm tra cấu trúc với kiểm chứng nguồn.

## 4. Xây schema Pydantic lồng nhau

```python
from pydantic import BaseModel, Field, HttpUrl

class Source(BaseModel):
    url: HttpUrl = Field(description="URL HTTP(S) của nguồn")
    title: str = "Không rõ"

class JobPosting(BaseModel):
    title: str = Field(min_length=1)
    company: str | None = None
    location: str | None = None
    url: HttpUrl
    skills: list[str] = Field(default_factory=list)

class AgentResponse(BaseModel):
    answer: str = Field(min_length=1)
    jobs: list[JobPosting] = Field(default_factory=list)
    sources: list[Source] = Field(default_factory=list)
    warnings: list[str] = Field(default_factory=list)
```

`Source` là model con đại diện đường dẫn bằng chứng. `JobPosting` đại diện thông tin một việc làm. `AgentResponse` chứa câu trả lời, danh sách việc làm, nguồn và cảnh báo. Sử dụng `Field(default_factory=list)` thay vì chia sẻ một đối tượng list mặc định giữa nhiều instance. `HttpUrl` giúp loại một số chuỗi URL không hợp lệ, nhưng không kiểm tra trang có thật.

## 5. Kết nối schema với Agent

```python
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

agent = create_agent(
    model=ChatOpenAI(model="gpt-4o-mini"),
    tools=[search_tool],
    response_format=AgentResponse,
    system_prompt="Chỉ trả công việc và URL tìm thấy trong tool; thiếu dữ liệu thì ghi rõ.",
)

state = agent.invoke({"messages": [{"role": "user", "content": "Tìm AI Engineer LangChain"}]})
response = state["structured_response"]
print(response.model_dump_json(indent=2))
```

Ví dụ giả định đã định nghĩa `search_tool` ở phạm vi trước (có thể sử dụng `TavilySearch`). Đây là một đoạn minh họa phần tích hợp; **code chạy hoàn chỉnh** nằm trong `src/ai_job_agent/cli.py`. Khi truyền Pydantic class trực tiếp, LangChain tự chọn chiến lược phù hợp với khả năng mô hình; lựa chọn cụ thể được giải thích ở Bài 09.

## 6. Kiểm tra Pydantic mà không cần LLM

```bash
uv run python examples/08_pydantic_offline.py
```

Script đầu tiên truyền dictionary hợp lệ vào `AgentResponse.model_validate()`, sau đó cố ý truyền `answer=""` và `url="not-a-url"` để tạo `ValidationError`. Điểm cần phân tích: lỗi kiểu dữ liệu được phát hiện **trước khi gửi dữ liệu sang UI**, nhưng độ đúng của các tin việc làm vẫn cần kiểm tra riêng.

Chuyển object thành JSON với `model_dump_json(indent=2)` hoặc `model_dump(mode="json")`; sử dụng `mode="json"` khi cần serializable primitives như chuỗi URL thay vì đối tượng nội bộ.

## 7. Bằng chứng phải đi cùng kết quả

Một hệ thống trả `{"sources":[{"url":"https://..."}]}` vẫn có thể sáng tạo ra URL. Bài tập trong dự án có `validation.py` để thu các `url` thực sự nằm trong `ToolMessage` rồi so với `sources` và `jobs` của phản hồi có cấu trúc.

Quy trình kiểm chứng nên là:

1. Thu URL từ observation sau khi công cụ chạy.
2. Chuẩn hóa vừa đủ (ví dụ bỏ dấu `/` cuối và query tracking nếu chính sách cho phép).
3. Kiểm tra mọi URL đầu ra có tương ứng với URL đã quan sát.
4. Loại hoặc cảnh báo URL không chứng minh được.
5. Không tuyên bố “job còn tuyển” nếu nguồn chưa ghi nhận.

Việc so khớp chỉ chứng minh **nguồn có xuất hiện**, không kiểm chứng từng nội dung trong mô tả. Ứng dụng nghiêm ngặt hơn cần đối chiếu trường dữ liệu với các đoạn trích cụ thể.

## 8. Bài tập thực hành

**A — Schema:** Thêm `experience_years: int | None` vào `JobPosting`; kiểm tra trường hợp không có số năm yêu cầu và trường hợp số âm bằng constraint thích hợp.

**B — Validation:** Bổ sung test kiểm tra URL `javascript:` bị loại, `answer` rỗng bị loại, `jobs=[]` hợp lệ khi không tìm thấy kết quả.

**C — UI-ready JSON:** Tạo object chứa hai job giả, tuần tự hóa thành JSON rồi thiết kế UI hiển thị thẻ kết quả và phần cảnh báo. Không được dùng URL giả như bằng chứng tuyển dụng thật.

**Hoàn thành khi:** nhận đúng kiểu `AgentResponse`, có ít nhất một nested `Source`, viết được một test failure và giải thích được “đúng schema ≠ đúng dữ kiện”.

## 9. Câu hỏi ôn tập

### Câu 1
Mục đích chính của structured output là gì?

A. Làm mô hình không bao giờ sai.  
B. Trả dữ liệu theo định dạng dự đoán được để code xử lý.  
C. Thay thế mọi công cụ tìm kiếm.  
D. Buộc kết quả phải dài hơn.

**Đáp án: B.** **Giải thích:** Cấu trúc ổn định giúp lưu, truy cập trường và dựng UI dễ dàng.

### Câu 2
Trong agent LangChain, phản hồi có cấu trúc thường nằm ở đâu?

A. `result["secret"]`.  
B. `result["prompt"]`.  
C. `result["raw_http"]`.  
D. `result["structured_response"]`.

**Đáp án: D.** **Giải thích:** Đây là khóa trạng thái nhận giá trị đã parse/validate theo schema.

### Câu 3
Vì sao `Field(default_factory=list)` hữu ích?

A. Tạo list mặc định mới khi không truyền dữ liệu cho trường.  
B. Chuyển mọi text thành số nguyên.  
C. Tự xác minh LinkedIn.  
D. Tự gọi Tavily.

**Đáp án: A.** **Giải thích:** `default_factory` định nghĩa giá trị khởi tạo khi trường bị thiếu.

### Câu 4
`HttpUrl` có thể giúp xác thực điều nào?

A. Vị trí tuyển dụng chắc chắn chưa hết hạn.  
B. Trang LinkedIn luôn truy cập công khai.  
C. Chuỗi có cấu trúc URL HTTP(S) hợp lệ.  
D. Công ty được đăng ký hợp pháp.

**Đáp án: C.** **Giải thích:** Đây là ràng buộc định dạng, không kiểm tra nguồn ngoài.

### Câu 5
Sau khi Pydantic xác nhận JSON hợp lệ, việc nào vẫn cần làm?

A. Bỏ qua nguồn.  
B. Kiểm chứng URL và dữ kiện so với kết quả tool.  
C. Mặc định công việc đang tuyển.  
D. Xóa trường `warnings`.

**Đáp án: B.** **Giải thích:** Schema validation không bảo đảm model không hallucinate thông tin.

## 10. Tổng kết

Pydantic biến câu trả lời thành **hợp đồng dữ liệu**. `response_format` giúp LangChain cung cấp hợp đồng đó dưới `structured_response`. Muốn sử dụng trong ứng dụng thật phải kết hợp **kiểu đúng, URL có bằng chứng và thông tin được diễn đạt thận trọng**.
