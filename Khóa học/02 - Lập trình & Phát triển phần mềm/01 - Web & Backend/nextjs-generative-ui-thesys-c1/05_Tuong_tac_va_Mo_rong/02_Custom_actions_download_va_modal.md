# Custom actions: tải báo cáo, mở modal và kiểm soát quyền

**Loại bài:** Bài học thực hành · **Mục tiêu:** Mô tả được cách đăng ký custom action trong metadata C1 và xử lý callback frontend mà không bỏ qua xác thực.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Khi nào cần custom action?
Các phần tử giao diện sinh ra có thể muốn thực hiện thao tác ứng dụng chưa có sẵn trong các hành động mặc định: tải file báo cáo, mở modal chi tiết sản phẩm, tạo task. Custom action định nghĩa **tên + JSON schema cho tham số** và ánh xạ tới handler. LLM có thể đề nghị hành động, còn ứng dụng quyết định có thực thi hay không.

## 2. Đăng ký action bên backend
Trong C1 legacy, metadata có trường `thesys` chứa JSON string với `c1_custom_actions`. Mẫu schema rút gọn (đã được chuẩn hóa theo JSON Schema):
```typescript
const metadata = {
  thesys: JSON.stringify({
    c1_custom_actions: {
      download_report: {
        type: "object",
        properties: {
          reportType: { type: "string", enum: ["sales", "inventory"] },
          format: { type: "string", enum: ["csv", "pdf"] },
        },
        required: ["reportType", "format"],
        additionalProperties: false,
      },
    },
  }),
};
```
Khi gọi `client.chat.completions.create({ model, messages, metadata })` với C1 API, hành động này được giới thiệu cho mô hình. Cần kiểm tra model/SDK hiện hành có hỗ trợ metadata như tài liệu legacy.

## 3. Handler frontend
```tsx
<C1Chat
  apiUrl="/api/chat"
  onAction={(event) => {
    if (event.type === "download_report") {
      // Validate params rồi gọi endpoint download có auth.
      // Không tin event.params như dữ liệu đã được backend cho phép.
    }
  }}
/>
```
Trong ví dụ sản phẩm thật, gọi `/api/reports/download?type=sales&format=csv` bằng request có session. Server tái kiểm tra quyền truy cập báo cáo, xây file trong sandbox hoặc xuất từ dữ liệu hợp lệ và trả `Content-Disposition: attachment`; frontend xử lý blob/download. Nút có thể mở modal xác nhận trước khi bắt đầu.

## 4. Bảo mật và thử lại
Không nhận URL hoặc file path bất kỳ rồi đọc trực tiếp theo yêu cầu LLM; tránh path traversal, SSRF và việc đọc báo cáo của người khác. Custom action nên có trạng thái `idle/loading/success/error` và định nghĩa idempotency cho hành động ghi.

## 5. Lab
Tạo đặc tả `download_report` với 2 loại báo cáo và 2 định dạng. Kiểm thử giá trị enum sai, user không có quyền, file rỗng và download thành công. Với thao tác có tác dụng phụ lớn hơn, bổ sung bước xác nhận thủ công.

## 6. Tổng kết
Custom action nối UI sinh bởi AI với nghiệp vụ thật, nhưng security và side effects phải nằm trong quyền kiểm soát của ứng dụng.

## 7. Câu hỏi ôn tập

**Câu 1.** Tên trường metadata đăng ký custom action trong C1 legacy?

A. c1_custom_actions  
B. next_public_key  
C. css_variables  
D. sql_query  

**Đáp án:** A. **Giải thích:** Tài liệu dùng c1_custom_actions trong metadata.thesys.

**Câu 2.** Việc model sinh nút tải báo cáo có nghĩa gì?

A. Đã được cấp quyền tải  
B. Chưa; backend còn phải kiểm tra  
C. Đã tạo file chắc chắn  
D. Đã thanh toán  

**Đáp án:** B. **Giải thích:** UI không thay thế auth.

**Câu 3.** Khi action nhận tham số ngoài enum nên?

A. Thực thi như thường  
B. Đổi tên kiểu  
C. Từ chối và báo lỗi hợp lệ  
D. Đưa vào đường dẫn file  

**Đáp án:** C. **Giải thích:** Schema validation giảm nguy cơ thao tác sai.

**Câu 4.** Lỗi path traversal nguy hiểm khi?

A. Dùng font khác  
B. Render chart  
C. Có gradient  
D. Cho input tự chọn file path của server  

**Đáp án:** D. **Giải thích:** Không được cho tham số bất kỳ trỏ vào file server.

**Câu 5.** Custom action download nên có trạng thái nào?

A. Loading, success và error  
B. Chỉ nút màu xanh  
C. Chỉ loading vô hạn  
D. Không phản hồi  

**Đáp án:** A. **Giải thích:** Hệ thống cần phản hồi hành động đã thực hiện.

