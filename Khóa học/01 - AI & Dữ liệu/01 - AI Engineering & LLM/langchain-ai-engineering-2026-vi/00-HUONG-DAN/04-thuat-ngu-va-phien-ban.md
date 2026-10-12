# Phiên bản và từ điển nhanh

- **LLM:** model dự đoán token để xử lý ngôn ngữ và tác vụ.
- **Agent:** hệ thống ra quyết định gọi tool và lặp nhiều bước.
- **LCEL:** biểu thức để ghép Runnable trong LangChain.
- **RAG:** truy xuất tài liệu trước khi model tạo câu trả lời.
- **Vector DB:** lưu và truy vấn embeddings và metadata.
- **StateGraph:** mô tả graph có state và node trong LangGraph.
- **MCP:** giao thức kết nối ứng dụng AI với tool/resource từ server.
- **LangSmith:** nền tảng tracing và đánh giá.
- **Deep Agents:** hệ sinh thái agent nhiều bước với planning, files và subagents.
- **Jev:** công nghệ decision model được nhắc trong đề cương; nên đối chiếu docs của nhà cung cấp trước khi dùng SDK.

**API hiện tại:** dùng `create_agent` thay cho `langgraph.prebuilt.create_react_agent` đã deprecated; đối với graph tùy biến, dùng `StateGraph`/`START`/`END`.
