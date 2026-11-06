# Điều phối tool theo ngữ cảnh: Không biến chatbot thành workflow cứng

> **Loại bài:** lesson · **Chuyên đề:** Module 04 — Tool calling và Zod

## 1. Tóm tắt

Generative UI mạnh ở khả năng chọn công cụ dựa trên mục tiêu hiện tại và lịch sử hội thoại. Ứng dụng nên cung cấp bộ tool chuyên biệt, mô tả rõ, kết quả đủ ngữ cảnh để xử lý nối tiếp.

## 2. Mục tiêu học tập

- Thiết kế lựa chọn tool theo ý định thay vì if-else từ khóa.
- Xử lý yêu cầu bổ sung trong nhiều lượt hội thoại.
- Đề xuất fallback khi tool không phù hợp.

## 3. Intent routing khác menu lệnh cứng

Workflow cứng thường dựa vào `if (text.includes('grid'))`. Với câu “Làm dashboard dạng 3 cột cho ví của tôi” hoặc “Đổi thành 2 cột”, cách dò từ khóa có thể chọn sai hoặc bỏ quên ngữ cảnh. Tool calling cho LLM đánh giá nội dung hội thoại rồi chọn tên tool và tham số phù hợp.

Tuy nhiên LLM chỉ được chọn trong **danh sách tool đã cấp**. Hệ thống không nên thực thi function chưa đăng ký chỉ vì tên xuất hiện trong output. Tạo nhiều tool chồng chéo sẽ làm selection khó ổn định.

## 4. Bộ tool có trách nhiệm rõ ràng

```ts
const tools = {
  drawGrid,           // bố cục hàng/cột
  getWalletBalances,  // số dư ví đã xác thực
  findAirdrops,       // dữ liệu airdrop
  inspectContractABI, // đọc và phân loại ABI
  preparePurchase,    // tạo bản nháp có bước xác nhận
};
```

Một model không thể đọc được private wallet nếu tool không cung cấp và không có authorization. Một tool `showWallet` không nên vừa render, vừa giao dịch, vừa tự ý thay permission. Phạm vi càng hẹp càng dễ giới hạn hậu quả khi model chọn nhầm.

## 5. Prompt phải phân biệt dữ liệu biết và dữ liệu thiếu

Một chỉ dẫn hệ thống có thể nêu: “Dùng tool để lấy dữ liệu thực. Nếu thiếu ID ví hoặc số hàng/cột, hỏi bổ sung. Không tự bịa số dư hoặc tuyên bố giao dịch đã hoàn tất.” Đây là quy tắc ứng dụng, không thay validation và business constraints.

Ví dụ hội thoại:

```text
User: Tạo dashboard 2 hàng 3 cột.
Assistant → drawGrid({rows:2, columns:3})
Tool → {rows:2, columns:3}
UI → GridPreview(2,3)
User: Đổi thành 4 cột.
Assistant → drawGrid({rows:2, columns:4})
```

Ở lượt hai, model kế thừa số hàng từ lịch sử. Nếu state đã bị trim, hệ thống cần cung cấp summary/state cần thiết, không giả vờ model nhớ vô hạn.

## 6. Xử lý lỗi và fallback

Trường hợp không có tool phù hợp, assistant vẫn có thể giải thích hoặc hỏi làm rõ. Trường hợp model trả input ngoài phạm vi, hãy trả lỗi có kiểm soát và đề nghị người dùng sửa; không vô điều kiện ép về giá trị giới hạn vì có thể làm sai ý. Nếu tool lỗi từ database, tách lỗi hệ thống với lỗi thiếu dữ liệu để không hiển thị “Không có số dư” trong khi API đang lỗi.

## 7. Thử nghiệm nhiều kịch bản

Viết bộ utterance tests: chào hỏi (no tool), yêu cầu grid đủ input, grid thiếu input, follow-up cập nhật cột, biểu đồ ví thiếu quyền, airdrop theo hệ sinh thái và mua crypto cần confirmation. Cần kiểm thử cả tool selection, arguments và end-user rendering; chỉ test schema đúng là chưa đủ.

## 8. Thực hành và kiểm tra

**Bài tập:** Lập bảng 8 câu người dùng, dự đoán `tool`, `arguments` hoặc `ask clarification`. Chú ý câu follow-up “đổi thành 4 cột” cần bảo toàn 2 hàng. **Đạt** nếu không ép tất cả câu hỏi phải gọi tool.

## 9. Câu hỏi ôn tập

### Câu 1

Vì sao không nên chỉ kiểm tra từ khóa “grid”?

A. Vì Zod không có số
B. Từ khóa không hiểu follow-up và ngữ cảnh  
C. Vì mọi tool là CSS  
D. Vì không có React  

**Đáp án:** B.

**Giải thích:** Intent cần xét toàn bộ hội thoại, không chỉ substring.

### Câu 2

Điều gì nên xảy ra với lời chào “Xin chào”?

A. Báo schema lỗi
B. Bắt buộc gọi drawGrid  
C. Trả lời tự nhiên không gọi tool  
D. Mua crypto  

**Đáp án:** C.

**Giải thích:** Không phải yêu cầu nào cũng cần công cụ.

### Câu 3

Ở câu “Đổi thành 4 cột” sau lưới 2×3, rows hợp lý là?

A. Không xác định bất kể lịch sử
B. 0  
C. 4  
D. 2  

**Đáp án:** D.

**Giải thích:** Thông số không bị thay đổi được kế thừa từ ngữ cảnh nếu còn đủ.

### Câu 4

Tool lỗi kết nối API có nên được mô tả “không có dữ liệu” không?

A. Không, cần phân biệt lỗi với empty result  
B. Chỉ khi mobile  
C. Không quan trọng
D. Có  

**Đáp án:** A.

**Giải thích:** System error và empty business result cần hiển thị khác nhau.

### Câu 5

Cách giảm hậu quả khi chọn tool sai là?

A. Cấp quyền root  
B. Tool nhỏ, schema chặt, authz và xác nhận  
C. Giấu mọi lỗi  
D. Dùng prompt càng dài càng tốt

**Đáp án:** B.

**Giải thích:** Phòng vệ thực tế nằm ở phạm vi tool và kiểm soát backend.

## 10. Tổng kết

Generative UI mạnh ở khả năng chọn công cụ dựa trên mục tiêu hiện tại và lịch sử hội thoại. Ứng dụng nên cung cấp bộ tool chuyên biệt, mô tả rõ, kết quả đủ ngữ cảnh để xử lý nối tiếp.
