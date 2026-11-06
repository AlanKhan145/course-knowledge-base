# Lab: Chạy ứng dụng stockbroker mẫu từ GitHub

> **Loại:** Lab · **Trọng tâm:** Khởi chạy ví dụ có frontend Next.js và backend LangGraph.js.

## 1. Tổng quan

Repository `assistant-ui/assistant-ui-stockbroker` cung cấp một ứng dụng tham khảo dùng Next.js ở frontend và LangGraph.js ở backend. Agent có các công cụ tra cứu dữ liệu tài chính và luồng phê duyệt giao dịch. Bài lab này giúp bạn quan sát sản phẩm có streaming, tool calls và UI xác nhận, trước khi đọc sâu code.

**Repo:** https://github.com/assistant-ui/assistant-ui-stockbroker

## 2. Mục tiêu và điều kiện

Sau lab bạn có thể chạy hai server cục bộ, xác định biến môi trường cần thiết, kiểm tra lượt hỏi có tool call, và phân biệt tính năng demo với tính năng giao dịch thật.

Chuẩn bị Node.js và `pnpm` tương thích với `package.json`/`engines` của repository, Git, terminal và các API key theo README của phiên bản clone. Không đưa API key vào Git, client bundle hoặc ảnh chụp màn hình.

## 3. Cài đặt từng bước

### 3.1. Tải code và dependencies

```bash
git clone https://github.com/assistant-ui/assistant-ui-stockbroker.git
cd assistant-ui-stockbroker
pnpm install
```

Kiểm tra cấu trúc dự án:

```text
assistant-ui-stockbroker/
├── backend/
│   └── langgraph.json
├── frontend/
├── package.json
└── pnpm-workspace.yaml
```

Các file khác có thể thay đổi theo revision, vì vậy hãy dựa vào cấu trúc thực tế của bản clone.

### 3.2. Cấu hình backend

Tạo `backend/.env` với các khóa được README công bố:

```dotenv
OPENAI_API_KEY=your_server_side_key
FINANCIAL_DATASETS_API_KEY=your_financial_data_key
TAVILY_API_KEY=your_search_key
# Tùy chọn cho tracing:
LANGCHAIN_API_KEY=
LANGCHAIN_TRACING_V2=true
```

Không cần điền khóa tùy chọn nếu chưa dùng. Nếu không có khóa dữ liệu tài chính/search, phần tương ứng có thể không hoạt động; không thay bằng giá hoặc kết quả giả nhưng trình bày như dữ liệu thật.

### 3.3. Cấu hình frontend

Tạo `frontend/.env.local`:

```dotenv
LANGGRAPH_API_URL=http://localhost:2024
NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID=stockbroker
# Server side, chỉ khi cần:
LANGCHAIN_API_KEY=
```

`LANGGRAPH_API_URL` được sử dụng ở server-side proxy. Biến bắt đầu bằng `NEXT_PUBLIC_` được đóng gói về phía client, vì vậy **không đặt secret** vào các biến này.

### 3.4. Khởi động

Từ root:

```bash
pnpm dev
```

Hoặc chạy độc lập ở hai terminal:

```bash
cd backend && pnpm dev
```

```bash
cd frontend && pnpm dev
```

Khi cấu hình mặc định của dự án được giữ nguyên, backend phục vụ tại `http://localhost:2024` và frontend tại `http://localhost:3000`.

## 4. Kịch bản thử nghiệm

1. Gửi câu hỏi về mã cổ phiếu của Meta và theo dõi tool call.
2. Yêu cầu snapshot giá của một mã; xem dữ liệu xuất hiện dưới dạng widget nếu công cụ hoạt động.
3. Gửi yêu cầu mua một số cổ phiếu; quan sát bảng xác nhận và nhấn **Từ chối** trước.
4. Lặp lại với **Xác nhận** và so sánh thông điệp tiếp theo trong hệ thống demo.

**Quan trọng:** ứng dụng stockbroker mang tính trình diễn. Không suy luận rằng lệnh giao dịch tài chính thật đã được thực hiện nếu không có hệ thống giao dịch thật và xác thực độc lập.

## 5. Debug và checkpoint

| Triệu chứng | Kiểm tra |
| --- | --- |
| Thiếu dependencies | `pnpm install`, Node/pnpm phù hợp |
| Backend không chạy | `backend/.env`, log LangGraph dev server |
| Không stream | Network request tới proxy/API, graph ID |
| Giá cổ phiếu không hiển thị | API key dữ liệu, log công cụ |
| Không hiện yêu cầu xác nhận | Agent có đi vào nhánh approval hay không |

**Checkpoint:** bạn nhìn thấy trang chat, có thể gửi câu hỏi, nhận streaming và quan sát ít nhất một lần gọi công cụ.

## 6. Deliverable và checklist

Lưu sơ đồ folder do bạn clone và một ghi chú `.md` gồm: command đã chạy, biến môi trường (chỉ tên, không giá trị), hai ảnh màn hình (tool call và approval), ba lỗi gặp phải kèm hướng xử lý. Không commit `.env`.

## 7. Tổng kết

Chạy bản mẫu trước giúp bạn xác nhận chuỗi frontend → proxy → LangGraph hoạt động, đồng thời tạo nền tảng để đọc code và thiết kế tính năng mới.

## 8. Câu hỏi ôn tập

### Câu 1

Lệnh nào dùng để tải repository mẫu?

A. pnpm build  
B. git clone https://github.com/assistant-ui/assistant-ui-stockbroker.git  
C. npm publish  
D. git push

**Đáp án:** B

**Giải thích:** Clone repository trước khi cài dependency và chạy.

### Câu 2

API key bí mật nên đặt ở đâu?

A. Biến công khai NEXT_PUBLIC_  
B. HTML tĩnh  
C. Backend .env hoặc môi trường server an toàn  
D. Tên commit

**Đáp án:** C

**Giải thích:** Secret không được đóng gói vào trình duyệt.

### Câu 3

Cặp cổng mặc định trong hướng dẫn repo là gì?

A. Frontend 3000, backend 2024  
B. Frontend 2024, backend 3000  
C. Frontend 5432, backend 8000  
D. Cả hai 80

**Đáp án:** A

**Giải thích:** README repo mô tả Next.js ở 3000 và LangGraph dev server ở 2024.

### Câu 4

Khi công cụ giá không trả dữ liệu, bước kiểm tra nào phù hợp nhất?

A. Đổi màu terminal  
B. Xóa logic error  
C. Tự điền giá  
D. Kiểm tra API key và log công cụ

**Đáp án:** D

**Giải thích:** Cần xác minh nguồn dữ liệu và lỗi tool trước khi hiển thị.

### Câu 5

Trong demo stockbroker, nút xác nhận chứng minh điều gì?

A. Mua tài sản thực tế tại sàn  
B. Luồng UI approval hoạt động trong môi trường demo  
C. Phí giao dịch là 0  
D. Model luôn đúng

**Đáp án:** B

**Giải thích:** Demo mô phỏng phê duyệt, không tự chứng minh giao dịch thật.
