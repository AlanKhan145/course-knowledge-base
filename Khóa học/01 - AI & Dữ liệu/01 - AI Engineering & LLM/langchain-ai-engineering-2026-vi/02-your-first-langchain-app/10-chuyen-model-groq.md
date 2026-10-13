# Bài 10 — Chuyển model sang Groq API

## 1. Tóm tắt

Một lợi thế thực tế của LangChain là **thay nhà cung cấp mô hình mà không phải viết lại logic ứng dụng**. Groq cung cấp dịch vụ suy luận qua API cho các model được hỗ trợ trên nền tảng của họ. Trong bài này, ta thêm `ChatGroq` vào factory model rồi giữ nguyên chuỗi tóm tắt.

## 2. Mục tiêu học tập

- Cấu hình Groq bằng biến môi trường.
- Giải thích sự khác nhau giữa provider, model ID và chain.
- Kiểm thử tính tương thích, quyền truy cập và lỗi quota.

## 3. Phân biệt provider và model

Một provider là hạ tầng/API mà ứng dụng kết nối tới; model là mô hình được chạy qua hạ tầng đó. Chẳng hạn, Groq và Ollama không phải hai tên model; chúng là hai cách phục vụ model với đặc điểm vận hành khác nhau. Không nên nhầm **Groq** (dịch vụ suy luận) với **Grok** (tên dòng model của xAI).

Tên model trên Groq có thể thay đổi theo danh mục được cấp cho tài khoản. Bài học chủ động để `GROQ_MODEL` trong `.env` thay vì đóng cứng một tên chưa chắc còn hoạt động.

## 4. Cấu hình và mã nguồn

Cài phần mở rộng Groq của project:

```bash
uv sync --extra groq
```

Tạo API key hợp lệ qua dịch vụ Groq và thiết lập `.env`:

```dotenv
LLM_PROVIDER=groq
GROQ_API_KEY=YOUR_SECRET_KEY
GROQ_MODEL=MODEL_ID_DANG_HO_TRO
```

Một ví dụ dùng lớp tích hợp:

```python
import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.output_parsers import StrOutputParser
from app.prompts import SUMMARY_PROMPT

load_dotenv()
model_id = os.environ["GROQ_MODEL"]
model = ChatGroq(model=model_id)
chain = SUMMARY_PROMPT | model | StrOutputParser()
print(chain.invoke({"information": "LangChain ghép prompt và mô hình."}))
```

Trên project đã đóng gói, chỉ cần đổi `LLM_PROVIDER` trong `.env`, hoặc chạy `uv run python main.py --provider groq --text "..."`. File `app/models.py` chứa phần logic tạo các class theo nhà cung cấp.

## 5. Những khác biệt cần kiểm thử

Mặc dù các chat model cùng có `.invoke()`, khả năng hỗ trợ tool calling, hình ảnh, giới hạn token, tham số sampling, rate limit và giá có thể khác. Nếu chuyển từ model cũ sang model mới, hãy chạy bộ câu hỏi đối chứng cùng một pipeline, ghi kết quả sai và không giả định một tham số hợp lệ với mọi model.

Một số model suy luận không hỗ trợ tùy chỉnh `temperature` như chat model phổ thông; vì vậy factory trong dự án tránh truyền tham số này cho provider cloud theo mặc định. Với model local, ví dụ thực hành dùng `temperature=0` để giảm độ ngẫu nhiên nhưng cũng không bảo đảm đầu ra cố định tuyệt đối.

## 6. Thực hành ngắn

1. Cài extra `groq`, khai báo khóa và model ID hợp lệ trong `.env`.
2. Chạy `uv run python main.py --provider groq --file data/van-ban-mau.txt`.
3. Lặp với Ollama và cùng đoạn văn; lập bảng về định dạng, lỗi và thời gian.
4. Xóa tạm `GROQ_MODEL`, quan sát thông báo lỗi khi cấu hình thiếu.

## 7. Câu hỏi ôn tập

**Câu 1.** Biến nào chọn tên model khi dùng Groq trong dự án?  
A. `OLLAMA_MODEL`.  
B. `LANGSMITH_PROJECT`.  
C. `UV_MODEL`.  
D. `GROQ_MODEL`.  
**Đáp án: D.** Factory model lấy ID từ biến cấu hình này.

**Câu 2.** Để cài dependency Groq optional từ project, dùng lệnh nào?  
A. `uv sync --extra groq`.  
B. `git switch groq`.  
C. `ollama pull groq`.  
D. `python -m git`.  
**Đáp án: A.** Nhóm tùy chọn `groq` đã khai báo dependency tích hợp.

**Câu 3.** Tại sao nên dùng model ID lấy từ danh mục tài khoản?  
A. Vì mọi tên model đều giống nhau.  
B. Vì model khả dụng có thể thay đổi theo provider/tài khoản.  
C. Vì không có cách nào truyền tên model vào Python.  
D. Vì LangChain cấm model ID.  
**Đáp án: B.** Model ID hợp lệ phải phản ánh dịch vụ hiện có.

**Câu 4.** Khi đổi provider, vì sao vẫn cần integration test?  
A. Vì LCEL không có type.  
B. Vì tất cả model cho kết quả như nhau.  
C. Vì năng lực model, tham số, quota và lỗi có thể khác.  
D. Vì `StrOutputParser` tự chạy mạng.  
**Đáp án: C.** Giao diện thống nhất không bảo đảm hành vi đồng nhất.

**Câu 5.** Trong ứng dụng, Groq và Grok khác nhau như thế nào?  
A. Là cùng một biến môi trường.  
B. Cùng là tệp Python.  
C. Đều là parser.  
D. Groq là dịch vụ suy luận; Grok là tên dòng model của xAI.  
**Đáp án: D.** Tránh nhầm thương hiệu provider và tên model.

## 8. Tổng kết

Khả năng thay provider là lợi thế kiến trúc quan trọng của LangChain. Hãy giữ workflow độc lập với provider, kiểm tra model ID thực tế và đánh giá lại hành vi của ứng dụng mỗi lần thay model.
