# MCP-UI và Thesys C1: hai hướng tiếp cận

**Loại bài:** Bài học thực hành · **Mục tiêu:** Giải thích được mối liên hệ giữa MCP-UI, generative UI và giao diện thương mại điện tử; tránh đánh đồng cách truyền tool với renderer.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Tình huống thương mại điện tử
Một trợ lý mua sắm được hỏi “có áo nào phù hợp với ngân sách này?”. Phản hồi tốt có thể là một dải thẻ sản phẩm, ảnh, giá và nút mở chi tiết. Chọn thẻ có thể mở panel bên cạnh, thay vì bắt người dùng tìm lại thông tin trong đoạn văn. Ví dụ này làm rõ **tính giàu nội dung + hành động gắn ngữ cảnh**.

## 2. Khái niệm cần phân biệt
**MCP (Model Context Protocol)** là cách tiêu chuẩn hóa việc kết nối công cụ/nguồn dữ liệu với mô hình. **MCP-UI** là hướng đưa giao diện có thể tương tác vào những tương tác liên quan MCP. **Thesys C1** là dịch vụ/API và React SDK để tạo và render UI từ nội dung sinh bởi AI. Chúng có thể bổ trợ nhau về trải nghiệm, nhưng không phải cùng một giao thức và không thể thay thế lẫn nhau bằng một lệnh import.

| Tiêu chí | MCP / MCP-UI | C1 |
| --- | --- | --- |
| Trọng tâm | Công cụ, tài nguyên, khả năng tương tác qua hệ sinh thái MCP | Biểu diễn phản hồi AI thành UI |
| Thành phần ứng dụng | MCP client/server và host hỗ trợ | Backend gọi API, frontend dùng React SDK |
| Điều cần kiểm tra | Host có hỗ trợ UI resource/interaction không | Renderer có hiểu response C1 không |
| Ví dụ | Công cụ trả giao diện lựa chọn hàng hóa | Chat trả KPI, table, form tùy câu hỏi |

## 3. Thiết kế giao diện mua sắm
Thẻ sản phẩm cần dữ liệu gốc gồm `id`, `name`, `price`, `image`, `availability`, `url`. Hành động “mở chi tiết” dùng `id` hoặc URL do backend xác minh. “Thêm vào giỏ hàng” phải qua API xác thực, kiểm tra giá và tồn kho lại ở server. Không cho AI tự bịa URL thanh toán hoặc tự phát lệnh mua hàng.

## 4. Bài thực hành so sánh
Thiết kế hai phiên bản của cùng một flow: (A) công cụ trả danh sách sản phẩm qua MCP và host hiển thị, (B) backend cung cấp dữ liệu cho C1 để dựng bảng/thẻ. Với mỗi phiên bản, ghi rõ dữ liệu vào, lớp UI, sự kiện khi nhấp và bộ phận chịu trách nhiệm bảo mật.

## 5. Tổng kết
Mục tiêu không phải chọn một thuật ngữ “hiện đại hơn” mà xác định đúng lớp cần giải quyết: tích hợp công cụ, tạo UI, hay xử lý hành động.

## 6. Câu hỏi ôn tập

**Câu 1.** MCP chủ yếu giải quyết bài toán nào?

A. Chuẩn hóa kết nối công cụ/ngữ cảnh  
B. Vẽ biểu đồ canvas  
C. Thay CSS của website  
D. Tạo thông số font  

**Đáp án:** A. **Giải thích:** MCP tiêu chuẩn hóa cách hệ thống kết nối khả năng bên ngoài.

**Câu 2.** C1 trong kiến trúc tập trung vào?

A. Phân vùng ổ đĩa  
B. Kiểm thử firewall  
C. Tạo và render phản hồi UI  
D. Xác minh địa chỉ giao hàng  

**Đáp án:** C. **Giải thích:** C1 cung cấp API/SDK cho UI tạo sinh.

**Câu 3.** Nhấn mua hàng nên dẫn đến đâu?

A. Lệnh do LLM tự thực thi ngay  
B. API thanh toán đã kiểm tra quyền và giá  
C. Thay đổi CSS  
D. Không cần kiểm tra  

**Đáp án:** B. **Giải thích:** Mọi giao dịch cần quy trình backend kiểm soát.

**Câu 4.** Để mở đúng chi tiết sản phẩm cần dùng?

A. Ảnh chụp màn hình  
B. Tiêu đề văn bản suy đoán  
C. Màu thẻ  
D. ID/URL có nguồn gốc xác thực  

**Đáp án:** D. **Giải thích:** Dùng định danh hợp lệ tránh nhầm sản phẩm.

**Câu 5.** Phát biểu nào đúng?

A. MCP-UI và C1 không đồng nhất  
B. C1 là giao thức đăng nhập  
C. MCP chỉ là biểu đồ  
D. Tất cả UI đều bắt buộc MCP  

**Đáp án:** A. **Giải thích:** Hai hướng giải quyết các lớp khác nhau trong hệ sinh thái AI.

