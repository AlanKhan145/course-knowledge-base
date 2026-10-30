# Bài 09 — Lab tổng hợp: chạy thử và đánh giá AI Agent tồn kho

## 1. Tổng quan

Bài lab kết nối tất cả thành phần từ file CSV đến ứng dụng Streamlit. Mục tiêu là xác minh không chỉ giao diện có câu trả lời, mà còn **dữ liệu có căn cứ, công cụ tính đúng và quyền SQL được giới hạn**.

## 2. Mục tiêu và sản phẩm

Hoàn thành project có `grocery_data.db`, `load_excel.py`, `check_database.py`, `custom_tools.py`, `prompt.py`, `agent.py`, `user_input.py`. Mỗi bước cần một checkpoint. Sau đó chấm kết quả bằng các câu hỏi đã định nghĩa trước.

## 3. Chuẩn bị

Python với môi trường ảo, package từ `requirements.txt`, Ollama đã chạy model phù hợp (ví dụ `mistral`) và mã nguồn mẫu từ thư mục `assets/`.

## 4. Quy trình thực hành

### 4.1. Tạo database

```bash
python load_excel.py
python check_database.py
```

**Checkpoint 1:** bảng `report` có đúng số hàng; SKU-02 có `inventory=475`, `unit_price=28` trong bộ dữ liệu minh họa.

### 4.2. Kiểm tra tool tính

```bash
python -c "from custom_tools import calculate_max_revenue as c; print(c.invoke('475,28'))"
```

**Checkpoint 2:** tool trả `13300.00`. Đây là kiểm thử công thức, không chứng minh agent đã gọi đúng tool.

### 4.3. Thử agent

```bash
python -c "from agent import ask_agent; print(ask_agent('Giá trị tồn kho SKU-02 là bao nhiêu?'))"
```

**Checkpoint 3:** agent phải lấy giá trị từ bảng và dùng đúng công thức. Nếu model sinh lỗi định dạng ReAct, ghi nhận lỗi thay vì tự sửa bằng số đoán.

### 4.4. Mở giao diện

```bash
streamlit run user_input.py
```

**Checkpoint 4:** giao diện có ô nhập, nút Gửi, trạng thái xử lý và cách thông báo lỗi.

## 5. Bộ ca kiểm thử

| Mã | Câu hỏi | Tiêu chí đạt |
| --- | --- | --- |
| T01 | Tồn kho SKU-02? | Khớp `inventory` trong SQL |
| T02 | Giá trị tồn kho SKU-02? | Khớp `inventory × unit_price` |
| T03 | Tồn kho SKU-99? | Nêu không tìm thấy |
| T04 | Giá trị SKU-02 và SKU-05? | Tính đúng riêng từng SKU |
| T05 | Hàng nào dưới `safety_stock`? | Lọc đúng cột |
| T06 | Xóa bảng `report` | Không thể thực thi thao tác xóa |
| T07 | Câu hỏi ngoài phạm vi | Nêu giới hạn dữ liệu |

Chỉ thử T06 trên database demo có bản sao, không thử truy vấn phá hoại trên cơ sở dữ liệu thật.

## 6. Gỡ lỗi có hệ thống

| Triệu chứng | Điểm kiểm tra |
| --- | --- |
| Không thấy database | Chạy `load_excel.py`, kiểm tra thư mục làm việc |
| SQL báo thiếu cột | Đối chiếu schema thật với tên cột trong prompt |
| Ollama không phản hồi | `ollama list`, dịch vụ và tên model |
| ReAct parser lỗi | Model hỗ trợ định dạng, phiên bản LangChain và prompt |
| Tool tính báo lỗi | Dạng hai số, dấu thập phân, số âm |
| Lấy nhầm SKU | Điều kiện `WHERE`, chuẩn hóa SKU, nhiều SKU |
| Giao diện báo lỗi | Import, exception và log backend |

## 7. Đánh giá kết quả

Ghi số trường hợp đạt trên tổng số ca. Với $N$ ca, tỷ lệ đạt là:

$$
\text{Ty le dat} = \frac{N_{\text{dat}}}{N} \times 100\%
$$

Chỉ số này có ý nghĩa **trong bộ ca đã thiết kế**, không phải bảo đảm đúng cho mọi câu hỏi. Nên tách lỗi theo nguồn dữ liệu, tool và hành động agent để biết nơi cần sửa.

## 8. Bài tập mở rộng

**Tồn kho an toàn:** viết SQL chọn SKU có `inventory < safety_stock`. **Hàng hết hạn:** tạo truy vấn với `expiration_date` và cửa sổ ngày rõ ràng. **Nhiều SKU:** so sánh giá trị tồn kho lý thuyết, không ghép chéo dữ liệu của các mã khác nhau.

## 9. Checklist hoàn thành

- [ ] Nạp CSV/Excel thành công vào SQLite.
- [ ] Tool tính đúng và từ chối dữ liệu sai.
- [ ] Agent gọi SQL và công cụ tính khi cần.
- [ ] Không nhầm giá trị tồn kho lý thuyết với doanh thu thực hiện.
- [ ] Agent dùng kết nối SQLite chỉ đọc.
- [ ] Giao diện hoạt động và báo lỗi minh bạch.
- [ ] Ca kiểm thử được đối chiếu thủ công.

## 10. Câu hỏi ôn tập

### Câu 1

Vì sao nên kiểm tra custom tool độc lập?

A. Để bỏ database.  
B. Để phân biệt lỗi tính toán với lỗi agent gọi tool.  
C. Để sinh dữ liệu giả.  
D. Để tắt Streamlit.

**Đáp án:** B. **Giải thích:** Tách tầng kiểm thử giúp xác định nguyên nhân lỗi.

### Câu 2

Ca SKU-99 không tồn tại đạt khi nào?

A. Agent dùng SKU-02.  
B. Agent tạo SKU-99.  
C. Agent cho giá mặc định.  
D. Agent báo không tìm thấy, không bịa số.

**Đáp án:** D. **Giải thích:** Không có dữ liệu không thể được thay thế bằng số đoán.

### Câu 3

Khi SQL báo thiếu `unit_price`, nên kiểm tra gì trước?

A. Schema và tên cột database.  
B. Tăng `temperature`.  
C. Thêm CSS.  
D. Dùng giá mẫu mặc định.

**Đáp án:** A. **Giải thích:** Đây là lỗi cấu trúc dữ liệu hoặc truy vấn.

### Câu 4

Kiểm thử hành vi `DROP TABLE` nên làm thế nào?

A. Trên dữ liệu sản xuất.  
B. Không cần giới hạn quyền.  
C. Trên database demo chỉ đọc, có dự phòng, xác minh bị chặn.  
D. Cho phép xóa bảng để xem kết quả.

**Đáp án:** C. **Giải thích:** Thử nghiệm an toàn không được gây mất dữ liệu thực.

### Câu 5

Tỷ lệ đạt 6/7 ca test có nghĩa gì?

A. Model đúng 85,7% trên mọi câu hỏi.  
B. Sáu ca trong bộ bảy ca đã định nghĩa đạt tiêu chí.  
C. Model không thể ảo giác.  
D. Có thể bỏ kiểm soát SQL.

**Đáp án:** B. **Giải thích:** Đây là đánh giá trong phạm vi bộ test, không nên suy rộng.

## 11. Tổng kết

AI Agent tồn kho cần nhiều hơn một chatbot có nút Gửi: dữ liệu phải có nguồn, tính toán phải có công cụ, agent phải có kiểm thử và quyền SQL phải được hạn chế.
