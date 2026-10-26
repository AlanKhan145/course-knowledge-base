# KHÓA HỌC — Xây dựng SQL AI Agent với LangChain, Ollama và Streamlit

**Ngôn ngữ:** Tiếng Việt · **Độ khó:** Python/SQL cơ bản → trung cấp · **Hình thức:** 9 bài Markdown + mã nguồn thực hành + đánh giá cuối khóa.

## 1. Khóa học giúp làm gì?

Xây dựng một AI Agent nhận câu hỏi bằng tiếng Việt, tự khám phá schema SQLite, chọn công cụ SQL, chạy truy vấn ở chế độ chỉ đọc và trả lời bằng Markdown qua Streamlit. Tập trung vào cách phối hợp model, tool-calling, lịch sử và kiểm thử bằng SQL đối chiếu.

## 2. Lộ trình bài học

| Bài | Tên | Kết quả học tập |
| --- | --- | --- |
| [01](bai-hoc/01-kien-truc-sql-agent.md) | AI Agent với SQL | Vẽ kiến trúc và phân biệt Agent/workflow |
| [02](bai-hoc/02-mo-hinh-du-lieu-sqlite.md) | Database quan hệ | Tạo schema 4 bảng, luyện JOIN |
| [03](bai-hoc/03-thiet-lap-cau-hinh-mo-hinh.md) | Python + Ollama/Groq | Chạy được môi trường và Model Factory |
| [04](bai-hoc/04-thiet-ke-bo-cong-cu-sql.md) | Bốn tool SQL | List, describe, sample, execute chỉ đọc |
| [05](bai-hoc/05-system-prompt-va-lich-su.md) | Prompt và lịch sử | Giữ ngữ cảnh, tránh kết luận vô căn cứ |
| [06](bai-hoc/06-vong-lap-agent-tool-calling.md) | Agent loop | Thực thi `ToolMessage` theo `tool_call_id` |
| [07](bai-hoc/07-streamlit-va-rich.md) | Streamlit + Rich | Tạo chat UI, sidebar và log công cụ |
| [08](bai-hoc/08-lab-kiem-thu-sql-agent.md) | Lab kiểm thử | Đối chiếu SQL, debug logic, kiểm tra lịch sử |
| [09](bai-hoc/09-do-an-cuoi-khoa.md) | Đồ án | Nghiệm thu ứng dụng theo rubric 100 điểm |

Mỗi bài có tóm tắt/đầu ra, diễn giải, ví dụ, sơ đồ khi cần, bài thực hành và 5 câu trắc nghiệm kèm đáp án/giải thích. Bài 09 dùng rubric và checklist hoàn thành.

## 3. Hướng dẫn chạy nhanh

```bash
cd ma-nguon
python -m venv .venv
# Windows PowerShell: .\.venv\Scripts\Activate.ps1
# macOS/Linux: source .venv/bin/activate
python -m pip install -r requirements.txt
```

Cài Ollama tại <https://ollama.com/> và chạy:

```bash
ollama pull qwen2.5:7b
```

Tạo cấu hình `.env` bằng cách sao chép `.env.example` (xem Bài 03), rồi:

```bash
python seed_data.py
streamlit run app.py
```

Nếu cần log terminal:

```bash
python cli.py
```

Mặc định dùng model cục bộ và database thử nghiệm. Có thể đổi `MODEL_PROVIDER=groq` + `MODEL_NAME` phù hợp và thiết lập `GROQ_API_KEY`, khi đó nội dung trao đổi với model được truyền tới dịch vụ bên ngoài. Luôn kiểm tra danh sách model được nhà cung cấp hỗ trợ.

## 4. Lưu ý về tính chính xác và bảo mật

- Bốn bảng và các bản ghi là **dữ liệu giả định do gói học liệu tạo ra**, không phải dữ liệu của một cửa hàng có thật.
- Tool SQL được giới hạn **chỉ đọc**; regex đầu vào kết hợp kết nối SQLite read-only và giới hạn hàng/khoảng xử lý. Đó là lớp bảo vệ cho bài lab, không phải thay thế bảo mật database doanh nghiệp.
- Có thể kiểm tra **các phần Python/SQLite** độc lập mà không cần LLM. Để xác nhận hệ thống end-to-end, người học phải chạy Ollama hoặc Groq với model tương thích trên máy của mình.
- Lịch sử phiên Streamlit **không được lưu bền** qua mọi phiên; không thích hợp cho nhu cầu audit production.
- Cần xác minh kết quả SQL thay vì tin toàn bộ câu trả lời của model.

## 5. Kết quả cần nộp

Dùng [mẫu nhật ký kiểm thử](kiem-tra/nhat-ky-kiem-thu.md) để ghi câu hỏi, truy vấn SQL và kết quả; nộp ảnh màn hình hoặc log xác nhận đã thực thi. Có thể chấm đồ án theo Bài 09.

## 6. Tài liệu kỹ thuật đối chiếu

- [LangChain — tích hợp ChatOllama, bind_tools](https://reference.langchain.com/python/langchain-ollama/chat_models/ChatOllama/bind_tools)
- [LangChain — ChatGroq](https://reference.langchain.com/python/langchain-groq/chat_models/ChatGroq)
- [LangChain — ToolMessage](https://reference.langchain.com/python/langchain-core/messages/tool/ToolMessage)
- [Streamlit — Chat elements](https://docs.streamlit.io/develop/api-reference/chat)
- [Python — sqlite3](https://docs.python.org/3/library/sqlite3.html)

Khóa học giới thiệu một kiến trúc Agent đơn giản, tập trung vào công cụ, SQLite và Streamlit. Hướng áp dụng cho tìm kiếm món ăn chỉ là phần phát triển tiếp ở Bài 09.
