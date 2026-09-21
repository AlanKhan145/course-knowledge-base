# Section 05 - Layer 1 - The ReAct Loop

## 1. Mục tiêu của section

Section này xây dựng một vòng lặp agent theo tư duy ReAct bằng các thành phần của LangChain. Trọng tâm không phải sử dụng sẵn một agent framework cấp cao, mà là bóc tách cơ chế nền tảng để thấy rõ cách mô hình ngôn ngữ lựa chọn công cụ, nhận kết quả công cụ, cập nhật lịch sử và tiếp tục suy luận cho đến khi tạo được câu trả lời cuối cùng.

Sau khi hoàn thành section, người học có thể:

- định nghĩa tool có metadata đủ rõ để mô hình sử dụng;
- bind danh sách tool vào chat model;
- xây dựng system prompt có các ràng buộc phòng thủ;
- triển khai thủ công vòng lặp ReAct bằng message history và tool calls;
- theo dõi một lần chạy agent bằng LangSmith;
- chuyển đổi model/provider qua lớp trừu tượng của LangChain;
- giải thích vì sao đổi model dễ không đồng nghĩa với model mới sẽ phù hợp với hệ thống.

## 2. Cấu trúc thư mục

```text
Section_05_Layer_1_ReAct_Loop/
├── README.md
├── 01_Ly_thuyet/
│   ├── 001 - Writing Tools.md
│   ├── 002 - Tool Binding and Defensive Prompting.md
│   ├── 003 - Understanding the ReAct Agent Loop in LangChain.md
│   └── 004 - Model Switch.md
├── 02_Bai_tap/
└── 03_Danh_gia/
    └── 005 - Quiz - AI Agent Loop with LangChain Tool Calling.md
```

## 3. Thứ tự học đề xuất

| Thứ tự | Nội dung | Loại | Thời lượng nguồn |
|---|---|---|---:|
| 001 | Writing Tools | Lý thuyết + bài tập | 9 phút |
| 002 | Tool Binding and Defensive Prompting | Lý thuyết + bài tập | 5 phút |
| 003 | Understanding the ReAct Agent Loop in LangChain | Lý thuyết + bài tập | 11 phút |
| 004 | Model Switch | Lý thuyết + bài tập | 3 phút |
| 005 | AI Agent Loop with LangChain Tool Calling | Luyện tập + đánh giá | Quiz |

Tổng thời lượng được liệt kê cho bốn bài lý thuyết là 28 phút, chưa tính thời gian làm bài tập và quiz.

## 4. Cách học

Học lần lượt từ 001 đến 004. Sau mỗi bài lý thuyết, chuyển sang file Practice có cùng số thứ tự và tự triển khai lại phần cốt lõi mà không chép từng dòng. Khi hoàn thành bốn bài, làm file luyện tập 005 để hệ thống hóa kiến thức, sau đó thực hiện assessment cuối section.

Khi thực hành, nên giữ lại trace hoặc log của các lần chạy quan trọng để kiểm tra thứ tự tool call, tham số tool, kết quả quan sát, số vòng lặp và câu trả lời cuối cùng.
