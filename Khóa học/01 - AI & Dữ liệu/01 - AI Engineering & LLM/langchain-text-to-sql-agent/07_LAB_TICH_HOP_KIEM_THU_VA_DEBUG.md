# Bài 07 — Lab tích hợp AI Agent Text-to-SQL và kiểm thử

## 1. Tổng quan

Bài thực hành kết hợp SQLite, LangChain, Ollama và Streamlit thành ứng dụng thử nghiệm: nhận câu hỏi tiếng Việt, khám phá bảng, sinh và chạy `SELECT`, cuối cùng trả lời dựa trên dữ liệu. Lab tập trung vào tính đúng, khả năng xử lý hội thoại nối tiếp và việc khoanh vùng lỗi.

## 2. Mục tiêu và yêu cầu hoàn thành

- Chạy được mô hình Ollama có hỗ trợ tool calling.
- Tạo dữ liệu kiểm thử SQLite bằng `seed_db.py`.
- Cung cấp bốn tool và vòng lặp agent giới hạn lượt.
- Truy vấn được khách hàng nhiều đơn nhất và danh sách đơn của khách đó.
- Chặn yêu cầu SQL ghi dữ liệu và không để lỗi tool làm hỏng hoàn toàn ứng dụng.

## 3. Cấu trúc dự án gợi ý

```text
text_to_sql_agent/
├── seed_db.py          # Tạo DB thử nghiệm
├── config.py           # ModelConfig + create_model
├── db_tools.py         # Bốn công cụ chỉ đọc
├── agent.py            # Prompt + ask_agent
├── app.py              # Streamlit UI
└── ecommerce.sqlite    # Tạo tự động từ seed_db.py
```

Tách file giúp từng tầng có trách nhiệm rõ ràng. Mã của các file đã được giải thích trong từng bài, có thể sao chép đúng các đoạn theo chức năng vào cấu trúc này. Để không mất dấu phụ thuộc: `db_tools.py` cần `open_readonly` và bốn tool; `agent.py` cần `ask_agent`; `app.py` cần các module đó.

## 4. Tích hợp Streamlit và agent

```python
# app.py (phần ghép nối; các module còn lại lấy từ bài 03–05)
import streamlit as st
from langchain_core.messages import SystemMessage
from config import ModelConfig, create_model
from db_tools import TOOLS, TOOLS_BY_NAME
from agent import SYSTEM_PROMPT, ask_agent

st.set_page_config(page_title="Text-to-SQL Agent", page_icon="🗃️")
st.title("Text-to-SQL với SQLite")

@st.cache_resource
def get_model():
    return create_model(ModelConfig()).bind_tools(TOOLS)

if "agent_history" not in st.session_state:
    st.session_state.agent_history = [SystemMessage(content=SYSTEM_PROMPT)]
if "display_history" not in st.session_state:
    st.session_state.display_history = []

for item in st.session_state.display_history:
    with st.chat_message(item["role"]):
        st.markdown(item["content"])

if st.button("Làm mới hội thoại"):
    st.session_state.agent_history = [SystemMessage(content=SYSTEM_PROMPT)]
    st.session_state.display_history = []
    st.rerun()

if question := st.chat_input("Hỏi về khách hàng, đơn hàng, sản phẩm..."):
    st.session_state.display_history.append({"role": "user", "content": question})
    st.chat_message("user").markdown(question)
    with st.chat_message("assistant"):
        with st.spinner("Agent đang truy vấn..."):
            try:
                answer = ask_agent(question, get_model(),
                                   st.session_state.agent_history,
                                   TOOLS_BY_NAME, max_iterations=8)
            except Exception as exc:
                # Không đẩy thông tin nhạy cảm/stack trace ra giao diện.
                answer = "Ứng dụng gặp lỗi. Kiểm tra kết nối model và log server."
                print(type(exc).__name__, str(exc))
        st.markdown(answer)
    st.session_state.display_history.append({
        "role": "assistant", "content": str(answer),
    })
```

Trong ví dụ, mô hình dùng chung nhưng danh sách lịch sử nằm riêng trong `st.session_state` từng phiên. Trước khi triển khai nhiều người dùng, cần đánh giá thread-safety, quyền dữ liệu và cơ chế giới hạn tải.

## 5. Chạy thử

```bash
python seed_db.py
# Bật dịch vụ Ollama trước khi chạy app.
streamlit run app.py
```

Đảm bảo `ecommerce.sqlite` nằm đúng vị trí mà `db_tools.py` đang mở. Nếu dùng đường dẫn tương đối, nên chạy trong thư mục dự án hoặc xác định đường dẫn dựa trên `__file__` để tránh phụ thuộc thư mục làm việc.

## 6. Bộ kiểm thử chức năng

| Câu hỏi / tình huống | Kết quả kỳ vọng với DB lab |
| --- | --- |
| “Khách nào nhiều đơn nhất?” | Lan, 2 đơn |
| “Liệt kê các đơn của khách này” | ID 101 và 102 nếu hội thoại trước xác định Lan |
| “Có bao nhiêu sản phẩm còn hàng?” | 2 sản phẩm |
| “Sản phẩm nào hết hàng?” | Trà xanh |
| “Số đơn pending là bao nhiêu?” | 1 đơn |
| “Xóa toàn bộ khách hàng” | Không được có thao tác ghi dữ liệu |

Các kết quả ở bảng chỉ đúng với **dữ liệu demo của lab**. Chúng không phải đầu ra được đảm bảo của một mô hình cụ thể. Khi test, kiểm tra câu SQL thực chạy và kết quả trực tiếp từ SQLite, không chỉ văn bản câu trả lời của model.

## 7. Xử lý các lỗi phổ biến

| Triệu chứng | Nguyên nhân có thể | Hướng kiểm tra |
| --- | --- | --- |
| Connection refused | Ollama chưa bật/địa chỉ sai | Thử `ollama list`, kiểm tra service |
| Không có `tool_calls` | Model không hỗ trợ tool calling hoặc trả lời trực tiếp | Thử tool `multiply` ở bài 03 |
| `no such table` | DB sai đường dẫn/schema | In đường dẫn DB, chạy `list_tables` |
| `no such column` | SQL tự đoán tên cột | Cho agent dùng `describe_table` |
| Dữ liệu trống | Bảng chưa có dữ liệu/WHERE quá chặt | Kiểm tra sample và query thủ công |
| Agent lặp quá số lượt | Model gọi tool lặp hoặc tool lỗi | Log tool name, lời gọi, số lần lặp |
| Kết quả không khớp DB | `JOIN` nhân bản dòng, định nghĩa sai | Kiểm tra `COUNT`, `GROUP BY`, lọc trạng thái |

## 8. Checklist an toàn cho lab

- [ ] Database được mở bằng kết nối chỉ đọc.
- [ ] Tool thực thi SQL không chấp nhận truy vấn ghi/xóa.
- [ ] Tên bảng đầu vào được xác thực trước khi chèn làm identifier.
- [ ] Giới hạn số dòng dữ liệu được gửi về mô hình.
- [ ] Có giới hạn số lượt agent và giới hạn thực thi truy vấn.
- [ ] Không hiển thị stack trace hoặc dữ liệu nhạy cảm trong chat.
- [ ] Bộ dữ liệu thực hành không chứa thông tin cá nhân thật.
- [ ] Có truy vấn SQL chuẩn để đối chiếu kết quả.

## 9. Deliverable và tiêu chí đạt

Nộp `seed_db.py`, `config.py`, `db_tools.py`, `agent.py`, `app.py`, và ảnh chụp một truy vấn một lượt + một câu hỏi nối tiếp. Kèm bảng nêu SQL thực thi, kết quả SQLite và câu trả lời cuối. Lab đạt khi các câu hỏi chuẩn cho kết quả đúng và không có quyền ghi dữ liệu.

## 10. Câu hỏi ôn tập

**Câu 1.** Khi agent trả “Lan có 2 đơn”, cách kiểm chứng tốt nhất là gì?  
A. Chỉ xem văn phong câu trả lời.  
B. Hỏi lại model bằng prompt khác.  
C. Kiểm tra SQL chạy và kết quả trực tiếp trên SQLite lab.  
D. Tăng nhiệt độ model.  
**Đáp án: C.** **Giải thích:** Kết quả thực tế cần được đối chiếu với nguồn dữ liệu.

**Câu 2.** Nếu gặp `no such table`, bước đầu nên làm gì?  
A. Kiểm tra đường dẫn DB và liệt kê bảng thực tế.  
B. Xóa file DB.  
C. Đổi UI theme.  
D. Tắt log.  
**Đáp án: A.** **Giải thích:** Lỗi thường liên quan nguồn DB hoặc tên bảng.

**Câu 3.** Vì sao chạy thử truy vấn ghi `DELETE` là test quan trọng?  
A. Để làm trống DB demo.  
B. Để agent tạo thêm hàng.  
C. Để giảm số bảng.  
D. Để xác nhận chính sách chỉ đọc không bị phá vỡ.  
**Đáp án: D.** **Giải thích:** Quyền đọc phải được kiểm chứng bằng tình huống bất lợi.

**Câu 4.** Câu “liệt kê đơn của khách này” trong lab kiểm thử điều gì ngoài SQL?  
A. Số màu của dashboard.  
B. Khả năng duy trì tham chiếu qua hội thoại.  
C. Tốc độ tải ảnh.  
D. Định dạng font.  
**Đáp án: B.** **Giải thích:** “Khách này” phụ thuộc history của lượt trước.

**Câu 5.** Nếu `JOIN` làm số đơn bị đếm tăng gấp đôi, nên kiểm tra gì?  
A. Tên mô hình.  
B. Theme Streamlit.  
C. Khóa nối, mức độ tổng hợp và `COUNT(DISTINCT ...)` khi cần.  
D. Đổi database sang ảnh.  
**Đáp án: C.** **Giải thích:** Quan hệ một-nhiều có thể nhân các dòng sau JOIN.

## 11. Tổng kết

Một agent hoạt động tốt không chỉ chạy được mà còn phải giải thích được đường đi truy vấn, kiểm thử được bằng SQL chuẩn và thất bại an toàn. Đó là cơ sở để chuyển một demo thành ứng dụng tin cậy.
