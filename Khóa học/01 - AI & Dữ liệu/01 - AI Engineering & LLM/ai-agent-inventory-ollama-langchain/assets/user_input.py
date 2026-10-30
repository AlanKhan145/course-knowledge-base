"""Giao diện demo của AI Agent tồn kho bằng Streamlit."""
import logging
import streamlit as st
from agent import ask_agent

st.set_page_config(page_title="Trợ lý tồn kho", page_icon="📦")
st.title("📦 Trợ lý AI quản lý tồn kho")
st.caption("Tra cứu SKU và tính giá trị tồn kho lý thuyết bằng SQL + tool")

with st.form("ask_form"):
    question = st.text_input("Nhập câu hỏi", placeholder="Giá trị tồn kho của SKU-02 là bao nhiêu?")
    submitted = st.form_submit_button("Gửi")

if submitted:
    if not question.strip():
        st.warning("Vui lòng nhập câu hỏi.")
    else:
        try:
            with st.spinner("Agent đang tra cứu dữ liệu..."):
                answer = ask_agent(question)
            st.write(answer)
        except Exception:
            logging.exception("Lỗi chạy agent")
            st.error("Không thể xử lý yêu cầu. Kiểm tra database, Ollama và log terminal.")
