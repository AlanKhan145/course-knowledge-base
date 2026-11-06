# C1 legacy và hướng chuyển sang OpenUI hiện đại

**Loại bài:** Bài học thực hành · **Mục tiêu:** Phân biệt C1 legacy với OpenUI; thiết kế adapter thay renderer mà không viết lại tầng dữ liệu nghiệp vụ.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Vì sao có bài này?
Theo chỉ mục tài liệu chính thức hiện hành, C1 được lưu trong **archive** cho các hệ thống đã dùng và Thesys hướng dự án mới tới **OpenUI**. Khi học ví dụ ByteGrad 2025, cần tách điều vẫn có giá trị bền vững (UI do AI tạo, state, action, backend) khỏi API cụ thể của bộ SDK C1 cũ.

## 2. Khái niệm OpenUI
OpenUI mô tả UI bằng **OpenUI Lang** và render bằng các component do đội ngũ ứng dụng định nghĩa. Luồng khái quát: khai báo thư viện component → tạo hướng dẫn cho mô hình → gọi LLM/Gateway/Autofix → stream phản hồi → Renderer hiển thị. OpenUI được thiết kế để dùng với nhiều mô hình/agent framework/UI thay vì khóa chặt một loại chatbot.

## 3. Bảng chuyển tư duy
| C1 legacy | Hướng OpenUI | Phần nên giữ nguyên |
| --- | --- | --- |
| C1 DSL | OpenUI Lang | Mô tả UI có cấu trúc |
| C1 React renderer | Renderer sử dụng thư viện component của ứng dụng | Thiết kế state và UX |
| C1 API qua baseURL Thesys | Model/Gateway theo tài liệu OpenUI | Backend auth, query DB |
| C1Chat | Agent Interface hoặc chat UI tích hợp riêng | Thread ownership |
| Custom action/component | Action/component schema theo hệ thống mới | Nghiệp vụ có validation |

Bảng trên là **định hướng kiến trúc**, không phải ánh xạ 1:1 các prop/hook. Không copy `C1Chat` rồi đổi tên thành `Renderer` mà kỳ vọng chạy ngay.

## 4. Cách chuyển đổi ít rủi ro
Tách `DataService`, `AuthService`, `ConversationStore`, `UIRendererAdapter`. Viết test xác nhận với dữ liệu đầu vào cố định, kết quả KPI giống nhau dù đổi renderer. Di chuyển trước một use case chỉ đọc như dashboard, rồi mới đến form và action. Trong quá trình chuyển, không lưu song song hai định dạng UI vào cùng field nếu không gắn version.

## 5. Lộ trình thực hành
1. Đọc [OpenUI introduction](https://www.openui.com/docs), [Getting Started](https://www.openui.com/docs/getting-started) và tài liệu integrations phù hợp.
2. Tạo thư viện component có `KpiCard`, `SalesChart`, `ProductTable`.
3. Tạo prompt chỉ sử dụng tên component và props đã đăng ký; thử stream qua renderer.
4. Nối backend CSV/KPI cũ; kiểm tra sai schema, thiếu dữ liệu, event click.
5. Đánh giá chi phí, độ tin cậy và các điều kiện triển khai thực tế.

## 6. Tổng kết
Mục đích học C1 là hiểu các nguyên lý GenUI; khi làm sản phẩm mới, cân nhắc OpenUI và kiểm tra tài liệu hiện hành trước khi tích hợp API.

## 7. Câu hỏi ôn tập

**Câu 1.** Thesys hiện hướng dự án mới đến đâu theo docs?

A. OpenUI  
B. Chỉ C1 v2025  
C. MCP thay React  
D. Một API SQL  

**Đáp án:** A. **Giải thích:** Chỉ mục chính thức xếp C1 vào archive và giới thiệu OpenUI.

**Câu 2.** Điều nào có thể giữ khi thay renderer?

A. Model ID cũ bắt buộc  
B. Tầng nghiệp vụ và kiểm tra quyền  
C. Mọi prop C1Chat  
D. Định dạng DSL cũ nguyên vẹn  

**Đáp án:** B. **Giải thích:** Nghiệp vụ nên tách độc lập lớp hiển thị.

**Câu 3.** OpenUI dựa vào gì để render?

A. Bất kỳ HTML từ AI  
B. Câu lệnh SQL  
C. OpenUI Lang và thư viện component được định nghĩa  
D. File PNG tĩnh  

**Đáp án:** C. **Giải thích:** Mô hình biểu diễn UI bằng language và component definitions.

**Câu 4.** Có thể đổi C1Component thành Renderer bằng sửa tên import không?

A. Có, luôn luôn  
B. Không cần test  
C. Chỉ khi UI nhỏ  
D. Không, API không phải ánh xạ 1:1  

**Đáp án:** D. **Giải thích:** Hai hệ thống có hợp đồng khác nhau.

**Câu 5.** Case nên chuyển đầu tiên là?

A. Dashboard read-only ít side effect  
B. Thanh toán thật  
C. Xóa toàn bộ database  
D. Quy trình cấp quyền  

**Đáp án:** A. **Giải thích:** Case ít rủi ro giúp đánh giá renderer trước.

