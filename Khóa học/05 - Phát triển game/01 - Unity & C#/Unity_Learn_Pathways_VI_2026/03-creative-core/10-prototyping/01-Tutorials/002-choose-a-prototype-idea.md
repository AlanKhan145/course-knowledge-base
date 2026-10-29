# Bài 02 — Lựa chọn ý tưởng prototype phù hợp

> **Creative Core · Prototyping · Bài học**

Ý tưởng nguyên mẫu cần có người dùng mục tiêu, trải nghiệm trung tâm và khả năng kiểm chứng bằng một phiên bản nhỏ.

## 1. Mục tiêu học tập

Người học có thể lựa chọn ý tưởng theo năng lực hiện có; mô tả người dùng mục tiêu; viết **elevator pitch** một câu; xác định một giả thuyết thử nghiệm.

## 2. Chọn ý tưởng theo độ khó kỹ thuật

Nếu mới làm quen Unity, một *walking simulator* là lựa chọn hợp lý: di chuyển trong không gian, quan sát vật thể và kích hoạt một sự kiện. Có thể dùng character controller dựng sẵn để tập trung vào môi trường và tương tác. Nếu đã quen C#, có thể thử cơ chế thu thập đồ vật, câu đố vật lý hoặc lựa chọn hội thoại — nhưng vẫn chỉ nên có một vòng hành động trung tâm.

Ba ứng viên để cân nhắc:

| Ý tưởng | Câu hỏi kiểm chứng | Phạm vi bản đầu |
|---|---|---|
| Thoát khỏi sân pháo đài | Người chơi có tìm ra công tắc không? | Đi, dẫm bàn đạp, nhấn nút |
| Nhặt nguyên liệu pha chế | Người chơi hiểu cách ghép hai vật không? | Nhặt, đặt, nhận phản hồi |
| Khám phá triển lãm 3D | Người xem có tìm thấy thông tin trưng bày? | Di chuyển, chọn hiện vật, đọc nhãn |

Bản phác thảo ưu tiên vòng tương tác độc lập, không cần bản đồ lớn.

## 3. Xác định nhóm người dùng mục tiêu

Không có thiết kế nào phù hợp tất cả người chơi. Hãy nêu người dùng dưới dạng mô tả có thể hỗ trợ quyết định: ví dụ, “người mới tiếp xúc game 3D bằng bàn phím và chuột, thích khám phá trong 5–10 phút”. Sau đó ghi các nhu cầu: hướng dẫn tối thiểu, chữ dễ đọc, điều khiển dễ học, tránh mỏi mắt hoặc chuyển động camera đột ngột.

Đừng biến nhận định về người dùng thành sự thật hiển nhiên. Đó là **giả thuyết** để xác nhận bằng kiểm thử. Người có khả năng bị ảnh hưởng bởi thiết kế cần được mời tham gia thử nghiệm thay vì chỉ hỏi người phát triển.

## 4. Viết elevator pitch và lời hứa trải nghiệm

Một pitch tốt gồm đối tượng + hành động trung tâm + giá trị khác biệt, đủ ngắn để người khác hiểu ngay.

**Ví dụ:** “Một trải nghiệm giải đố góc nhìn thứ nhất, nơi người chơi tìm cách kích hoạt bàn đạp bí mật để hạ cầu rời khỏi pháo đài.”

Đây là pitch về **trải nghiệm**, không phải bản liệt kê công cụ như “sử dụng URP, ProBuilder và Terrain”. Những công cụ đó hỗ trợ ý tưởng nhưng không tự giải thích lý do người dùng muốn trải nghiệm.

## 5. Bài thực hành: quyết định ý tưởng

1. Ghi ba ý tưởng, mỗi ý tưởng tối đa hai câu.
2. Với mỗi ý tưởng, viết hành động trung tâm và đối tượng người dùng.
3. Chấm điểm tương đối theo ba tiêu chí: kiểm chứng nhanh, rủi ro đáng học, phù hợp năng lực; không nhầm bảng điểm chủ quan với dữ liệu thực nghiệm.
4. Chọn một ý tưởng và viết elevator pitch, sau đó đặt tiêu chí quan sát được.
5. Điền mini design brief: **người dùng / nhu cầu / hoạt động chính / tiêu chí thành công / điều chưa biết**.

## 6. Tổng kết và tài liệu tham khảo

Ý tưởng prototype tốt **nhỏ nhưng có câu hỏi đáng kiểm chứng**. Sự rõ ràng về người dùng và pitch giúp chống mở rộng phạm vi không kiểm soát.

- [Unity Learn – Choose a prototype idea](https://learn.unity.com/tutorial/choose-a-prototype-idea-3?version=6.0)
- [Unity Learn – Creative Core: Prototyping](https://learn.unity.com/project/creative-core-prototyping)

## 7. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Pitch nào rõ trải nghiệm nhất?

A. Game này dùng C# và URP  
B. Tôi cần 30 mô hình 3D  
C. Người chơi giải một câu đố bằng cách kích hoạt bàn đạp và mở cầu  
D. Game có nhiều asset đẹp  

**Đáp án:** C
**Giải thích:** Pitch mô tả hoạt động và giá trị trải nghiệm.

**Câu 2.** Lý do nên xác định người dùng trước khi xây bản mẫu?

A. Để kiểm chứng nhu cầu thay vì dựa vào giả định của người làm  
B. Để giảm độ phân giải  
C. Để bỏ qua kiểm thử  
D. Để dùng nhiều framework  

**Đáp án:** A
**Giải thích:** Nhóm người dùng định hướng cách điều khiển, phản hồi và tiêu chí thành công.

**Câu 3.** Với người chưa biết lập trình Unity, phương án hợp lý là gì?

A. Xây MMORPG đầy đủ  
B. Tự viết renderer  
C. Thêm hệ thống kinh tế trực tuyến  
D. Bắt đầu từ walking simulator và controller dựng sẵn  

**Đáp án:** D
**Giải thích:** Có thể tập trung vào trải nghiệm bằng tài nguyên phù hợp.

**Câu 4.** Trong lựa chọn ý tưởng, điều gì quan trọng hơn số lượng tính năng?

A. Số shader  
B. Giả thuyết có thể kiểm chứng với phạm vi nhỏ  
C. Kích thước bản đồ  
D. Tổng số scene  

**Đáp án:** B
**Giải thích:** Prototype đo khả năng kiểm chứng chứ không đo lượng nội dung.

**Câu 5.** Đối tượng người dùng mô tả thế nào hữu ích nhất?

A. Càng nhiều người càng tốt  
B. Mọi người trên thế giới  
C. Nhóm có ngữ cảnh và nhu cầu cụ thể  
D. Chỉ những người thích game  

**Đáp án:** C
**Giải thích:** Thông tin cụ thể giúp thiết kế các thử nghiệm phù hợp.
