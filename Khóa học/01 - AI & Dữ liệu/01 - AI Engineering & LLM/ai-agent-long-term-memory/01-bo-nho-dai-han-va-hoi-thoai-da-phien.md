# Bài 01. Bộ nhớ dài hạn và bài toán hội thoại đa phiên

## 1. Tóm tắt

Một AI Agent tư vấn bữa ăn không chỉ cần trả lời câu hỏi hiện tại mà còn cần sử dụng những thông tin người dùng đã cung cấp ở các phiên trước. Chẳng hạn, một lần người dùng cho biết con gái dị ứng sữa; trong phiên sau, trợ lý không nên đề xuất món chứa sữa mà không kiểm tra điều kiện này. Để đáp ứng nhu cầu đó, hệ thống cần tách lịch sử chat ngắn hạn khỏi **bộ nhớ dài hạn có thể truy hồi**.

## 2. Mục tiêu học tập

Sau bài này, bạn có thể giải thích sự khác nhau giữa context window, lịch sử hội thoại ngắn hạn và bộ nhớ dài hạn; xác định thông tin nào đáng lưu; mô tả rủi ro khi agent chỉ dựa vào các tin nhắn gần nhất.

## 3. Vấn đề: kết thúc một phiên không được làm mất hiểu biết về người dùng

Hãy xét hai phiên hội thoại:

**Phiên thứ nhất**

- Người dùng: “Con gái út của tôi dị ứng sữa.”
- Người dùng: “Vợ chồng tôi không ăn thịt.”
- Người dùng: “Gia đình tôi có sáu người.”

**Phiên thứ hai**, vào một ngày khác:

- Người dùng: “Gợi ý bữa tối cho cả nhà.”

Nếu chỉ đưa câu hỏi cuối cùng vào LLM, mô hình không có cơ sở để biết ba ràng buộc trước đó. Chúng ta cần biến những dữ kiện dài hạn thành bản ghi có thể nạp trở lại vào ngữ cảnh trả lời.

## 4. Ba lớp thông tin cần phân biệt

| Lớp | Chứa gì | Chu kỳ sống | Mục đích |
| --- | --- | --- | --- |
| Ngữ cảnh lượt hiện tại | Câu hỏi mới nhất và dữ liệu liên quan | Trong một lần suy luận | Hiểu yêu cầu ngay lúc đó |
| Lịch sử hội thoại gần đây | Những tin nhắn vừa trao đổi | Thường gắn với phiên hoặc cửa sổ ngữ cảnh | Giữ mạch đối thoại |
| Bộ nhớ dài hạn | Các dữ kiện được chọn lọc và lưu ngoài LLM | Có thể tồn tại sau khi phiên đóng | Cá nhân hóa ở phiên sau |

Bộ nhớ dài hạn không đơn giản là lưu toàn bộ văn bản cuộc trò chuyện. Việc lưu nguyên mọi câu chat khiến truy hồi khó, tốn token và dễ đưa các thông tin tạm thời vào hồ sơ người dùng. Cách tiếp cận phù hợp với ví dụ nấu ăn là chọn lọc các dữ kiện hữu ích lâu dài.

## 5. Thế nào là một ký ức đáng lưu?

Trong ứng dụng lập thực đơn, những thông tin hữu ích gồm sở thích ăn uống, món không thích, dị ứng thực phẩm và thuộc tính gia đình. Một câu “Tôi thích taco cho bữa sáng” có thể là sở thích cần nhớ. Ngược lại, “Tuần này tôi đã ăn quá nhiều taco” thường chỉ phản ánh tình huống tạm thời; không nên mặc định biến thành nhận định dài hạn rằng người dùng không thích taco.

Sự phân biệt này giúp tránh **memory pollution**: kho ký ức bị lấp đầy bằng những dữ kiện ngắn hạn hoặc suy diễn không có căn cứ.

## 6. Sơ đồ cơ chế ghi nhớ qua nhiều phiên

```mermaid
sequenceDiagram
    participant U as Người dùng
    participant A as Agent
    participant M as Kho ký ức
    U->>A: Con gái út dị ứng sữa
    A->>M: Ghi allergy(con_gai_ut, sua)
    Note over U,A: Kết thúc phiên 1
    U->>A: Gợi ý bữa tối cho cả nhà
    A->>M: Truy hồi ràng buộc ăn uống
    M-->>A: Dị ứng sữa; không ăn thịt; sáu người
    A-->>U: Gợi ý dựa trên ràng buộc đã nhớ
```

Bước quan trọng không phải mô hình “tự nhớ” mọi thứ, mà là **ứng dụng chủ động ghi dữ kiện vào kho bền vững và truy hồi khi cần**. Nếu dữ liệu chỉ nằm trong biến RAM của một phiên, sơ đồ này chưa đảm bảo được khả năng ghi nhớ đa phiên.

## 7. Những sai lầm thường gặp

**Nhầm context window với database.** Cửa sổ ngữ cảnh có kích thước hữu hạn; một dữ kiện không còn nằm trong prompt có thể không được sử dụng. Muốn nhớ dài hạn, cần cơ chế lưu và đọc độc lập.

**Lưu mọi phát biểu thành sở thích lâu dài.** “Tối nay không ăn thịt” không tương đương “Tôi không bao giờ ăn thịt”. Cần xem xét phạm vi thời gian và chủ thể.

**Đánh đồng dị ứng với không thích.** Dị ứng là ràng buộc an toàn cần kiểm tra kỹ. Sở thích là tín hiệu ưu tiên có thể linh hoạt hơn.

## 8. Bài thực hành ngắn

Đọc bốn phát biểu và gán một trong ba nhãn `ghi nhớ`, `chỉ giữ ngắn hạn`, `cần hỏi rõ`:

1. “Tôi thường thích đồ ăn có cà phê.”
2. “Hôm qua tôi ăn mì.”
3. “Đứa nhỏ nhà tôi không ăn được hải sản.”
4. “Cuối tuần này không làm món nướng nhé.”

Đề xuất: (1) ghi nhớ nếu đây là sở thích ổn định; (2) ngắn hạn; (3) cần xác minh ràng buộc cụ thể trước khi áp dụng cho an toàn; (4) ngắn hạn vì có phạm vi thời gian.

## 9. Câu hỏi ôn tập

**Câu 1.** Vì sao chỉ gửi câu hỏi mới nhất vào LLM không đủ để cá nhân hóa đa phiên?

A. Vì mọi LLM đều không đọc được tiếng Việt.  
B. Vì dữ kiện từ phiên cũ có thể không xuất hiện trong ngữ cảnh hiện tại.  
C. Vì database không thể lưu văn bản.  
D. Vì câu trả lời phải luôn dài hơn.

**Đáp án:** B. **Giải thích:** Ngữ cảnh của một lượt không đảm bảo chứa lịch sử cũ nếu ứng dụng không truy hồi.

**Câu 2.** “Hôm nay tôi không muốn taco” nên được hiểu thế nào?

A. Chứng minh người dùng dị ứng taco.  
B. Phải xóa mọi thông tin về taco.  
C. Ràng buộc có thể chỉ có hiệu lực hôm nay.  
D. Một thuộc tính gia đình.

**Đáp án:** C. **Giải thích:** Phát biểu có phạm vi thời gian cụ thể.

**Câu 3.** Lớp nào cần lưu ngoài ngữ cảnh phiên để tồn tại lâu dài?

A. Kho ký ức bền vững.  
B. Token vừa sinh ra.  
C. Chuỗi trả lời đang hiển thị.  
D. Dòng log tạm trong RAM.

**Đáp án:** A. **Giải thích:** Kho lưu trữ bền vững có thể đọc lại giữa các phiên.

**Câu 4.** “Con gái út dị ứng sữa” thuộc loại gì trong ví dụ?

A. Sở thích của bố.  
B. Món không thích của cả gia đình.  
C. Thông tin chỉ có giá trị một ngày.  
D. Ràng buộc dị ứng gắn với một thành viên cụ thể.

**Đáp án:** D. **Giải thích:** Cần giữ cả đối tượng và loại ràng buộc.

**Câu 5.** Rủi ro khi lưu mọi câu chat là gì?

A. Tự động làm dữ liệu chính xác hơn.  
B. Tăng nhiễu và khiến việc truy hồi khó hơn.  
C. Làm mất toàn bộ dữ liệu ngay lập tức.  
D. Không ảnh hưởng gì.

**Đáp án:** B. **Giải thích:** Nhiều dữ kiện tạm thời dễ lấn át ký ức hữu ích.

## 10. Tổng kết

Bộ nhớ dài hạn là một cơ chế của hệ thống: **chọn lọc → lưu trữ → truy hồi → sử dụng**, không phải chỉ là giữ thêm vài dòng chat. Bài tiếp theo làm rõ cách chia trách nhiệm giữa agent trả lời và agent quản lý ký ức.
