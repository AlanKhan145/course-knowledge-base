# Bài 04 — Evaluator, vòng lặp nghiên cứu và Report Writer

> **Module 13 · Lab chuyên sâu** · [Video từ 01:43:02](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=6182s)

## 1. Mục tiêu

Thiết kế evaluator có output typed, thêm feedback loop và tạo báo cáo Markdown gắn các kết luận với nguồn; tránh trích dẫn bịa.

## 2. Evaluator model

```python
# specialists/evaluator.py
from agents import Agent
from models import Evaluation

evaluator = Agent(
    name="Research Evaluator",
    instructions=("Nhận câu hỏi và danh sách findings. Xác định thông tin có bao phủ "
                  "mọi khía cạnh chính hay chưa, chỉ ra chủ đề còn thiếu. "
                  "Nếu không có nguồn đáng tin, đánh giá là chưa đủ."),
    output_type=Evaluation,
)
```

Các trường `is_sufficient`, `missing_topics`, `reasoning` là output máy đọc được. Tuy nhiên evaluator có thể đánh giá sai, nên cần test offline và tiêu chí chấm độc lập.

## 3. Report Writer

```python
# specialists/report_writer.py
from agents import Agent

writer = Agent(
    name="Research Report Writer",
    instructions=(
        "Chỉ sử dụng những findings được đưa vào. Viết Markdown tiếng Việt với "
        "tiêu đề, tóm tắt, mục lục, phần phân tích, kết luận, nguồn. "
        "Gắn citation dạng [1], [2] ngay sau claim thích hợp; nguồn phải có URL thật "
        "trong findings. Nếu thiếu dữ liệu, ghi rõ không đủ căn cứ."
    ),
)
```

Để giảm bịa trích dẫn, sau khi agent xuất report, code ứng dụng có thể kiểm tra mọi `[n]` có mục nguồn hợp lệ và URL thuộc danh sách Finding được cấp. Kiểm tra tự động này không đủ chứng minh từng claim đúng, nhưng loại bỏ nhiều lỗi tham chiếu rõ ràng.

## 4. Feedback loop

```python
from agents import Runner
from specialists.query_planner import query_planner
from specialists.evaluator import evaluator
from specialists.report_writer import writer

MAX_ROUNDS = 3

def research(question, search_web):
    findings = []
    feedback = ""
    review = None
    for i in range(MAX_ROUNDS):
        planning_input = f"Câu hỏi: {question}\nThiếu sót: {feedback}"
        queries = Runner.run_sync(query_planner, planning_input).final_output.queries
        for query in queries[:5]:
            findings.extend(search_web(query))
        payload = json.dumps({"question": question, "findings": [x.model_dump() for x in findings]}, ensure_ascii=False)
        review = Runner.run_sync(evaluator, payload).final_output
        if review.is_sufficient:
            break
        feedback = "; ".join(review.missing_topics)
    payload = json.dumps({"question": question, "findings": [x.model_dump() for x in findings]}, ensure_ascii=False)
    return Runner.run_sync(writer, payload).final_output
```

Đoạn trên minh họa thuật toán điều phối, giả định hàm `search_web` có sẵn và trả danh sách `Finding`. Khi triển khai thành file riêng, thêm `import json` và các import cần thiết; bài kế tiếp có một mẫu end-to-end gọn hơn.

## 5. Bố cục báo cáo Markdown

```markdown
# Báo cáo nghiên cứu: [Chủ đề]

## Mục lục
- [Tóm tắt](#tom-tat)
- [Phân tích](#phan-tich)
- [Kết luận](#ket-luan)
- [Nguồn](#nguon)

## Tóm tắt
[Tóm tắt có gắn nguồn]

## Phân tích
[Luận điểm 1] [1]

## Kết luận
[Những điều đã biết và chưa rõ]

## Nguồn
[1] Tên tài liệu — URL
```

Dấu `[n]` và URL phải tương ứng với nguồn truy xuất thực tế; không suy ra dẫn nguồn từ trí nhớ của model.

## 6. Checklist độ tin cậy

Phân biệt nguồn sơ cấp với bài tổng hợp; ghi lại ngày xuất bản nếu có; không gán phát hiện cụ thể cho URL chưa đọc; dừng vòng nghiên cứu khi đạt yêu cầu hoặc hết budget; nếu hết budget vẫn còn gap thì đưa vào mục giới hạn.

## 7. Deliverable

`evaluator.py`, `report_writer.py`, bảng rubric 5 tiêu chí: độ bao phủ, kiểm chứng nguồn, tính mới, mâu thuẫn giữa các nguồn, rõ ràng về bất định.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1
Evaluator nên đưa feedback nào hữu ích nhất?

A. “Không thích”  
B. “Đổi màu Markdown”  
C. “Thiếu nghiên cứu về tác dụng phụ trong nhóm trẻ em”  
D. “Hãy viết dài hơn thôi”  

**Đáp án:** C. **Giải thích:** Feedback cụ thể giúp sinh truy vấn bổ sung.

### Câu 2
Khi không có bằng chứng, Writer cần làm gì?

A. Ghi rõ thiếu căn cứ  
B. Bịa nguồn  
C. Tạo dữ liệu cho đủ  
D. Đổi tên agent  

**Đáp án:** A. **Giải thích:** Không tạo kết luận giả từ dữ liệu rỗng.

### Câu 3
Mục đích của `MAX_ROUNDS`?

A. Ép prompt dài  
B. Bỏ qua evaluator  
C. Tăng quyền hệ thống  
D. Giới hạn thời gian/chi phí vòng lặp  

**Đáp án:** D. **Giải thích:** Vòng lặp cần điểm dừng.

### Câu 4
Schema output có bảo đảm evaluator đúng không?

A. Có tuyệt đối  
B. Không, schema chỉ bảo đảm cấu trúc  
C. Có nếu result là object  
D. Có nếu dùng `.env`  

**Đáp án:** B. **Giải thích:** Đánh giá ngôn ngữ vẫn có sai số.

### Câu 5
Kiểm tra trích dẫn cần đối chiếu điều gì?

A. Độ dài URL  
B. Màu liên kết  
C. Claim với nội dung của nguồn thực  
D. Số lượng dấu `#`  

**Đáp án:** C. **Giải thích:** Có URL hợp lệ chưa đủ chứng minh claim.
