# Tích hợp Web Search và biên tập báo cáo Markdown

**Loại:** Lab nâng cao | **Đầu ra:** bản mẫu nghiên cứu có thể chạy và bài test chứng cứ

## 1. Tổng quan

Kết nối planner, web-search specialist và writer. Bài học sử dụng công cụ tìm kiếm web được SDK cung cấp; khả năng sử dụng phụ thuộc model, tài khoản và pricing. Cần kiểm tra API trước khi chạy. Ví dụ chỉ minh họa luồng, không khẳng định luôn có truy cập internet ở mọi môi trường.

## 2. Mục tiêu

- Khai báo agent tìm kiếm có công cụ truy cập web.
- Sinh kế hoạch tìm kiếm từ câu hỏi bằng schema.
- Tạo báo cáo Markdown theo cấu trúc được quy định.
- Đánh giá chất lượng nguồn và tách phần chưa kiểm chứng.

## 3. Cài đặt

```bash
python -m pip install openai-agents python-dotenv
```

Tải `OPENAI_API_KEY` từ biến môi trường an toàn; chọn model tương thích với tool và quyền account. Chạy trong môi trường ảo, đặt giới hạn chi phí và thời gian phù hợp.

## 4. Mẫu triển khai tối thiểu

```python
import asyncio
from pydantic import BaseModel, Field
from agents import Agent, Runner, WebSearchTool

class Plan(BaseModel):
    queries: list[str] = Field(min_length=1, max_length=5)

planner = Agent(
    name="Planner",
    instructions="Đề xuất truy vấn tìm kiếm khác nhau, rõ mục tiêu.",
    output_type=Plan,
)
researcher = Agent(
    name="Web researcher",
    instructions=("Tìm nguồn có liên quan, nêu nhận định kèm URL nguồn quan sát được. "
                  "Không tự tạo đường dẫn."),
    tools=[WebSearchTool()],
)
writer = Agent(
    name="Writer",
    instructions=("Viết báo cáo Markdown có mở đầu, các phát hiện, giới hạn và kết luận. "
                  "Chỉ trích dẫn URL có trong nội dung đầu vào. "
                  "Nếu không đủ bằng chứng, nêu rõ hạn chế."),
)

async def main():
    question = "Ưu và nhược điểm của năng lượng mặt trời tại đô thị?"
    plan = (await Runner.run(planner, question)).final_output
    evidence_notes = []
    for query in plan.queries:
        result = await Runner.run(researcher, query)
        evidence_notes.append(str(result.final_output))
    prompt = (f"Câu hỏi: {question}\n\nGhi chú từ các lượt tìm kiếm:\n" +
              "\n---\n".join(evidence_notes))
    report = await Runner.run(writer, prompt)
    text = str(report.final_output)
    with open("research_report.md", "w", encoding="utf-8") as f:
        f.write(text)
    print(text)

if __name__ == "__main__":
    asyncio.run(main())
```

Đây là **MVP minh họa**, chưa có evidence store có schema, evaluator loop, xác thực URL hay bảo vệ prompt injection. Với sản phẩm thật, thay `evidence_notes` chuỗi bằng `Evidence` đã chuẩn hóa; kiểm chứng đường dẫn và trích dẫn trước khi xuất báo cáo. Không tự coi báo cáo này là fact-checked.

## 5. Nâng cấp thành hệ thống hoàn chỉnh

**Milestone 1 — Planner:** kiểm tra số lượng truy vấn, độ trùng chủ đề và độ bao phủ. **Milestone 2 — Search:** giới hạn concurrency, timeout, retries; lưu bản ghi nguồn. **Milestone 3 — Evaluator:** thêm rubric về bao phủ, chất lượng, tính nhất quán, độ mới; dừng sau budget do backend đặt. **Milestone 4 — Writer:** chuẩn hóa heading Markdown và ghi rõ khoảng trống bằng chứng. **Milestone 5 — Validator:** so khớp mọi URL trong báo cáo với URL đã thu và đưa lỗi lại bước viết nếu sai.

## 6. Kiểm tra Markdown

- Chỉ một heading cấp `#` ở đầu báo cáo.
- Có mục tóm tắt, phân tích, giới hạn, kết luận và nguồn khi các nguồn hợp lệ đã được thu thập.
- Không có trích dẫn giả, link `example.com` mạo danh nguồn hay URL do model tự tạo.
- Nêu độ không chắc chắn nếu thông tin các nguồn bất đồng.
- Không tự khẳng định “đã kiểm chứng” nếu chưa có bước đối chiếu nguồn.

## 7. Bài tập mở rộng

1. Dùng `asyncio.Semaphore` để giới hạn tối đa công việc tìm kiếm đồng thời; đo thời gian chạy và lỗi.
2. Viết validator so khớp URLs hợp lệ với `Evidence` store và loại link không chứng minh được nguồn.
3. Cài evaluator trả `sufficient`, `missing_angles`, `suggested_queries`; buộc dừng sau `max_rounds`.
4. Tạo 5 câu nghiên cứu đa lĩnh vực và chấm theo rubric coverage 0–5, citations 0–5, transparency 0–5.

## 8. Debug

- Search tool báo không hỗ trợ: đổi sang model/tài khoản có quyền hoặc adapter tìm kiếm riêng; không giả lập kết quả web thật.
- Kết quả rỗng: kiểm tra truy vấn và retry có giới hạn.
- Trích dẫn sai: so khớp evidence store, không sửa bằng cách đoán link.
- Báo cáo trùng ý: deduplicate evidence và nhóm theo chủ đề.
- API quá chậm: giới hạn số truy vấn và thời gian chạy.

## 9. Checklist hoàn thành

- [ ] Planner xuất truy vấn hợp lệ.
- [ ] Search có nguồn thực và không bịa URL.
- [ ] Bản báo cáo là Markdown hợp lệ.
- [ ] Có phần giới hạn, không cường điệu kết quả.
- [ ] Ghi rõ cost/latency thực tế nếu chạy và không dùng số tự đoán.

## 10. Câu hỏi ôn tập

### 10.1. Câu 1
`WebSearchTool` cung cấp gì?

A. Xác thực user.  
B. Khả năng tìm kiếm web cho agent khi được hỗ trợ.  
C. Dữ liệu từ DB nội bộ mặc định.  
D. Bộ nhớ vĩnh viễn.

**Đáp án:** B

**Giải thích:** Tool mở thêm khả năng tìm kiếm; không thay quyền DB hoặc memory.

### 10.2. Câu 2
Báo cáo đáng tin cần bảo đảm điều nào?

A. Mọi URL do model đề xuất.  
B. Không cần nguồn.  
C. URL trong báo cáo nằm trong tập nguồn đã thu thập/kiểm tra.  
D. Chỉ có kết luận.

**Đáp án:** C

**Giải thích:** Kiểm chứng trích dẫn cần nối được về evidence.

### 10.3. Câu 3
Muốn xử lý nhiều truy vấn độc lập hiệu quả, chọn gì?

A. Song song có giới hạn concurrency.  
B. Vòng lặp vô hạn.  
C. Xóa logs.  
D. Bỏ error handling.

**Đáp án:** A

**Giải thích:** Concurrency hạn chế tiết kiệm thời gian mà không làm quá tải.

### 10.4. Câu 4
Khi search tool không hoạt động, ứng dụng phải làm gì?

A. Tự tưởng tượng kết quả.  
B. Giữ nguyên lời khẳng định đã tìm kiếm.  
C. Dẫn URL ngẫu nhiên.  
D. Báo lỗi/giới hạn và điều chỉnh cấu hình.

**Đáp án:** D

**Giải thích:** Không thể khẳng định đã truy xuất nguồn khi tool không chạy.

### 10.5. Câu 5
Chức năng chính của evaluator là gì?

A. Thay thế mọi dữ liệu.  
B. Đánh giá khoảng thiếu và đề nghị nghiên cứu bổ sung có kiểm soát.  
C. Bật API key.  
D. Tự trả tiền.

**Đáp án:** B

**Giải thích:** Evaluator kiểm độ bao phủ, không tự sinh bằng chứng.

## 11. Tổng kết

Cấu trúc planner → search → evaluator → writer giúp chia rõ trách nhiệm. Chất lượng phụ thuộc đầu vào có căn cứ, validator, giới hạn chi phí và minh bạch phần chưa chắc chắn hơn là độ dài báo cáo.
