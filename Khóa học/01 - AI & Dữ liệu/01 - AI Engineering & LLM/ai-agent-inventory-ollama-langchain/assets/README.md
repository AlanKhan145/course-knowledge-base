# Mã và dữ liệu thực hành

Đây là bộ code minh họa tương ứng các bài 02–09; `grocery_data.csv` là **dữ liệu giả định dùng trong học tập**. Trong sản phẩm thật, kiểm soát dữ liệu, phân quyền và các chỉ tiêu kinh doanh là trách nhiệm bắt buộc.

## Chạy trên Windows PowerShell

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
ollama pull mistral
python load_excel.py
python check_database.py
streamlit run user_input.py
```

Để chạy ở Linux/macOS, thay lệnh activation bằng `source .venv/bin/activate`.

## Lưu ý

- `load_excel.py` ưu tiên `grocery_data.xlsx` nếu tồn tại; nếu không, dùng CSV. Bảng `report` bị thay thế khi chạy lại script.
- `agent.py` dùng `create_sql_agent` (API Classic/Community). ReAct dạng text có thể không tương thích ổn định với một số model; đây là code học tập, chưa được kiểm nghiệm end-to-end với Ollama trên máy người dùng.
- SQL agent chỉ đọc thông qua SQLite URI `mode=ro`. Không dùng cấu hình demo này làm giải pháp production hoàn chỉnh.
- `calculate_max_revenue` nhân lượng hàng đang tồn với đơn giá bán, cho ra giá trị bán *lý thuyết*, không phải doanh thu đã thực hiện.
- Tài liệu chính thức về API: https://reference.langchain.com/python/langchain-community/agent_toolkits/sql/base/create_sql_agent
