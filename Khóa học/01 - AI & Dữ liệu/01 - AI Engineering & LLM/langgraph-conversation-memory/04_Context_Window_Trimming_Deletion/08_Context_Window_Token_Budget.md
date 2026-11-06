# Bài 08 — Context Window, Token Budget và nguy cơ tràn ngữ cảnh

## 1. Tóm tắt

Context window là giới hạn số token mô hình có thể tiếp nhận trong một lần xử lý, bao gồm nhiều thành phần như system instruction, history, tool messages và yêu cầu hiện tại (tùy cách nhà cung cấp tính). Checkpointer lưu hội thoại theo thời gian, nhưng **không bảo đảm nội dung đó vừa trong cửa sổ ngữ cảnh**. Cần xây dựng chính sách cắt giảm hợp lý.

## 2. Mục tiêu học tập

- Giải thích token, context window và vì sao nhiều lượt chat làm prompt lớn dần.
- Tính ngân sách token dự kiến cho ứng dụng có history.
- Phân tích đánh đổi giữa cắt tin nhắn cũ, xóa state và tóm tắt.
- Thiết kế ngưỡng kích hoạt an toàn, có chỗ dự phòng cho response và tool outputs.

## 3. Vì sao history tăng liên tục?

Với chatbot dùng `MessagesState`, sau mỗi lần gọi thường có thêm `HumanMessage` và `AIMessage`. Nếu có 500 lượt chat, danh sách có thể chứa khoảng 1.000 messages chưa kể tool calls và system prompts. Khi node đưa toàn bộ `state['messages']` vào `model.invoke()`, lượng token có thể vượt ngưỡng cho phép hoặc làm tăng chi phí và độ trễ.

Không nên khẳng định mọi model sẽ “ảo giác” khi vượt giới hạn: nhiều API sẽ từ chối request bằng lỗi kích thước context, một số framework cắt ngữ cảnh, và chất lượng câu trả lời trong ngữ cảnh dài có thể suy giảm. Điều chắc chắn là ứng dụng phải **chủ động kiểm soát** ngân sách.

## 4. Token không phải số từ

Token là đơn vị xử lý của tokenizer. Một từ có thể là một hoặc nhiều token; tiếng Việt có dấu, dấu câu, JSON hay đoạn code có phân bố token khác nhau. Vì vậy `len(text.split())` không phải hàm đếm token đúng. LangChain cung cấp công cụ đếm xấp xỉ hoặc model-specific tokenizer.

Ngân sách làm việc nên tính:

$$
B_{history}=C_{model}-B_{system}-B_{input}-B_{output}-B_{tools}-B_{reserve}
$$

Trong đó $C_{model}$ là context tối đa của model được cấu hình; các biến còn lại là token cho hướng dẫn hệ thống, câu người dùng, output dự kiến, tool schemas/results và phần dự phòng. Đây là mô hình lập kế hoạch tổng quát, không thay thế quy tắc tính token riêng của nhà cung cấp.

Ví dụ **minh họa**, nếu context giả định là 8.000, dành 400 system + 500 user + 1.500 output + 600 tools + 500 reserve thì còn:

$$
B_{history}=8{,}000-400-500-1{,}500-600-500=4{,}500
$$

Đây là giả định trong bài toán, **không phải** thông số của một model cụ thể.

## 5. Đếm xấp xỉ trước khi gọi

```python
from langchain_core.messages.utils import count_tokens_approximately

messages = [
    ('user', 'Tôi tên Khánh.'),
    ('assistant', 'Rất vui được gặp bạn.'),
    ('user', 'Tên tôi là gì?'),
]

print('Token ước tính:', count_tokens_approximately(messages))
```

`count_tokens_approximately` phục vụ ước lượng nhanh; với yêu cầu giới hạn khắt khe, dùng cách đếm phù hợp với model/provider và vẫn cần khoảng dự phòng.

## 6. Ba chiến lược chính

| Chiến lược | Tác động | Mạnh | Yếu |
| --- | --- | --- | --- |
| Trimming | Chỉ chọn messages gửi tới LLM | Nhanh, đơn giản, không sửa state | Model có thể không thấy dữ kiện cũ |
| Deletion | Loại messages khỏi state hiện tại | Giảm state hiện hành | Có thể mất thông tin không khôi phục qua state hiện tại |
| Summarization | Nén messages cũ thành summary và bỏ messages cũ | Giữ được đại ý quá khứ | Tốn lượt gọi, có thể làm mất chi tiết hoặc tóm tắt sai |

Đừng nhầm việc xóa `messages` khỏi state hiện tại với bảo đảm xóa toàn bộ dữ liệu lịch sử/checkpoint khỏi database. Nếu cần xóa dữ liệu vì quyền riêng tư, phải có chính sách retention/xóa riêng ở tầng lưu trữ.

## 7. Ví dụ mất dữ kiện

Người dùng nói ở đầu hội thoại “Tôi dị ứng đậu phộng” rồi 50 lượt sau hỏi “Gợi ý món ăn trưa”. Trimming chỉ giữ 8 lượt gần nhất có thể làm model không nhìn thấy dữ kiện quan trọng. Vì vậy ứng dụng nhạy cảm cần cơ chế lưu và kiểm tra thông tin quan trọng thích hợp, không chỉ giữ tin nhắn mới nhất. Nội dung summary cũng cần được đánh giá để tránh sai sót.

## 8. Bài tập

Tạo 20 cặp messages bằng Python, tính ước lượng token. Lập ba phương án ngân sách khác nhau rồi dự đoán bao nhiêu messages có thể giữ. Ghi thêm những dữ kiện cần lưu chính xác (lệnh, mã lỗi, sở thích hiện tại) và không nên chỉ dựa vào nén văn bản.

## 9. Câu hỏi ôn tập

**Câu 1.** Postgres lưu 50.000 tin nhắn có bảo đảm model đọc hết trong một request?  
A. Có vì dữ liệu đã ở DB.  
B. Không; context window của model vẫn có giới hạn.  
C. Có nếu tắt Docker.  
D. Có nếu dùng một thread.  
**Đáp án: B.** Persistence và context capacity là hai bài toán riêng.

**Câu 2.** Lựa chọn nào phản ánh token budget đầy đủ hơn?  
A. Chỉ đếm số lượt chat.  
B. Chỉ đếm tên model.  
C. Chỉ đếm từ trong user prompt.  
D. Dành chỗ cho instruction, history, tool, output và dự phòng.  
**Đáp án: D.** Các thành phần này cùng chiếm context.

**Câu 3.** `count_tokens_approximately` là:  
A. Hàm ước lượng token, không nhất thiết chính xác như tokenizer model.  
B. Công cụ mã hóa mật khẩu.  
C. Saver database.  
D. Hàm xóa checkpoint.  
**Đáp án: A.** Tên hàm và mục đích đều cho biết đây là phép đếm xấp xỉ.

**Câu 4.** Vì sao trimming có thể nguy hiểm về ngữ nghĩa?  
A. Thường tạo thread mới.  
B. Luôn xóa database.  
C. Có thể loại bỏ dữ kiện cũ vẫn quan trọng.  
D. Không hỗ trợ Python.  
**Đáp án: C.** Recency không đồng nghĩa relevance.

**Câu 5.** Khi một API không nhận context quá dài, cách xử lý tốt là gì?  
A. Gửi lại y nguyên vô hạn.  
B. Giảm/cấu trúc ngữ cảnh trước khi gọi, tính giới hạn và dự phòng.  
C. Chỉ đổi tên thread.  
D. Xóa Docker image.  
**Đáp án: B.** Lỗi kích thước input phải được xử lý ở khâu xây context.

## 10. Tổng kết

Cần tách riêng **kho memory** và **ngân sách context khi inference**. Giải pháp tốt chọn nội dung nào được gửi, nội dung nào lưu lại và nội dung nào được nén, đồng thời bảo vệ dữ kiện quan trọng.
