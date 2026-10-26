---
title: "Bài 08 — Tạo chatbot dữ liệu với Streamlit"
course: "Text-to-SQL với RAG, Chroma, LangChain, FastAPI và Streamlit"
lesson_number: 8
language: vi
---

# Bài 08 — Tạo chatbot dữ liệu với Streamlit

> **Tóm tắt:** Cho người dùng nhập câu hỏi, xem câu trả lời, SQL và các hàng dữ liệu tương ứng.

## 1. Mục tiêu học tập

- Sử dụng được `st.chat_input` và `st.chat_message`.
- Kết nối Streamlit tới endpoint FastAPI.
- Phân biệt hiển thị câu trả lời có căn cứ và câu trả lời tự suy diễn.

## 2. Kiến thức và nguyên lý

### 2.1. Vai trò của Streamlit

Streamlit thích hợp để dựng giao diện thử nghiệm: ô nhập câu hỏi, lịch sử chat, bảng kết quả và SQL (khi được phép). Trình duyệt chỉ cần gọi API; không kết nối trực tiếp đến SQLite hoặc Chroma.

### 2.2. Mẫu giao diện tối giản

```python
import requests
import streamlit as st

st.title("Chatbot hỏi dữ liệu món ăn")
question = st.chat_input("Ví dụ: Món nào nấu nhanh và có mì?")
if question:
    with st.chat_message("user"):
        st.write(question)
    try:
        response = requests.post(
            "http://127.0.0.1:8000/ask",
            json={"question": question},
            timeout=60,
        )
        response.raise_for_status()
        payload = response.json()
        with st.chat_message("assistant"):
            st.write(payload.get("answer", "Không có câu trả lời."))
            st.dataframe(payload.get("rows", []))
            with st.expander("SQL đã sử dụng"):
                st.code(payload.get("sql", ""), language="sql")
    except requests.RequestException:
        st.error("Không gọi được API. Hãy kiểm tra backend và kết nối.")
```

Trong bản demo đầy đủ, lịch sử chat có thể lưu vào `st.session_state` (bộ nhớ phiên UI). Đừng coi `session_state` là kho lưu trữ hội thoại bền vững, cũng không dùng nó để xác thực người dùng.

### 2.3. Một luồng tương tác đáng tin

1. Người dùng gửi câu hỏi tiếng Việt.
2. Frontend POST JSON đến `/ask`.
3. Backend trả `answer`, `rows`, `sql` sau kiểm tra.
4. Streamlit hiển thị bản trả lời và bảng dữ liệu.
5. Khi có lỗi hoặc kết quả rỗng, hiển thị trạng thái trung thực, không tự nghĩ ra tên món.

### 2.4. Cải tiến trải nghiệm

Có thể thêm danh sách câu hỏi gợi ý, biểu đồ đếm món theo loại, hướng dẫn khi câu hỏi chưa rõ, nút xem/ẩn SQL và lựa chọn xuất CSV theo quyền. Bất cứ bước “tóm tắt câu trả lời” nào dùng LLM cũng phải được grounding bằng kết quả thực tế và chính sách quyền.

## 3. Thực hành ngắn

Dùng mẫu giao diện và thêm trạng thái `Đang truy vấn...` trong lúc chờ response, cùng một thông báo thân thiện khi `rows` trống.

## 4. Tổng kết

Streamlit tạo lớp tương tác nhanh và trực quan. Dữ liệu tin cậy, kiểm tra SQL và quyền truy cập phải được quyết định ở backend.

## 5. Câu hỏi ôn tập

### Câu 1

`st.chat_input` được dùng cho việc gì?

A. Nhập câu hỏi chat  
B. Kết nối SQLite trực tiếp  
C. Chạy embedding  
D. Tạo foreign key  

**Đáp án:** A. **Giải thích:** Widget cung cấp ô nhập hội thoại.

### Câu 2

Cách frontend trao đổi với backend trong ví dụ là gì?

A. Đọc file SQLite trong trình duyệt  
B. Ghi thẳng vào Chroma  
C. HTTP POST JSON  
D. SMTP  

**Đáp án:** C. **Giải thích:** Streamlit gọi endpoint `/ask` qua HTTP.

### Câu 3

Khi backend lỗi hoặc không trả được dữ liệu, giao diện nên làm gì?

A. Tự đoán câu trả lời  
B. Hiển thị lỗi dễ hiểu  
C. Tắt mọi validation  
D. Lặp request vô hạn  

**Đáp án:** B. **Giải thích:** Phản hồi lỗi minh bạch hơn kết quả bịa đặt.

### Câu 4

`st.session_state` phù hợp với mục đích nào?

A. Lưu vĩnh viễn dữ liệu mọi user  
B. Thay OAuth  
C. Tự đồng bộ schema  
D. Giữ lịch sử chat trong phiên UI  

**Đáp án:** D. **Giải thích:** Session state theo phiên của Streamlit, không thay database lâu dài.

### Câu 5

Bộ phận nào phải quyết định người dùng được xem SQL hay không?

A. Backend/chính sách quyền  
B. Màu button  
C. Tên file Python  
D. Thông số embedding  

**Đáp án:** A. **Giải thích:** Quyền truy cập phải được thực thi ở phía server.
