# Bài 8: Thực Hành Dùng ChatGPT/Claude Tạo PRD Cho App Của Chính Bạn

## Mục Tiêu Bài Học

Sau bài này, bạn sẽ:

* Biết cách **dùng ChatGPT hoặc Claude như một trợ lý viết PRD**, thay vì tự viết từ đầu.
* Thực hành tạo PRD thực tế cho một ý tưởng app của chính mình.
* Biết cách đặt câu hỏi ngược để AI giúp bạn làm rõ ý tưởng còn mơ hồ.

---

## 1. Vì Sao Nên Nhờ AI Viết PRD Thay Vì Tự Viết?

Ở Bài 7, bạn đã biết cấu trúc một PRD. Nhưng thay vì tự điền từng phần, bạn có thể **nhờ ChatGPT hoặc Claude đóng vai trò chuyên gia sản phẩm**, đặt câu hỏi lại cho bạn và tự soạn PRD hoàn chỉnh — nhanh hơn và đầy đủ hơn nhiều so với tự viết.

## 2. Prompt Mẫu Để Nhờ AI Tạo PRD

```text
Hãy đóng vai một Product Manager giàu kinh nghiệm.

Tôi có một ý tưởng app như sau: [mô tả ngắn gọn ý tưởng của bạn].

Hãy giúp tôi:
1. Đặt các câu hỏi cần thiết để làm rõ ý tưởng (đối tượng dùng, vấn đề giải quyết, chức năng cần có, phong cách giao diện).
2. Sau khi tôi trả lời, hãy tổng hợp thành một bản PRD đầy đủ theo cấu trúc:
   - Tổng quan
   - Đối tượng người dùng
   - Vấn đề cần giải quyết
   - Danh sách chức năng (chia mức độ ưu tiên: phải có / nên có / có thì tốt)
   - Yêu cầu giao diện
   - Tiêu chí hoàn thành

Hãy hỏi tôi từng câu một, đừng hỏi dồn dập quá nhiều câu cùng lúc.
```

Cách làm này biến việc viết PRD thành một **cuộc trò chuyện dẫn dắt**, giúp bạn không bỏ sót chi tiết quan trọng — điều rất dễ xảy ra khi tự viết một mình.

## 3. Ví Dụ Thực Hành: Ý Tưởng "App Ghi Chú Công Việc Cho Freelancer"

**Bước 1 — Đưa ý tưởng ban đầu cho AI:**

```text
Tôi muốn làm một app giúp freelancer ghi chú công việc và deadline cho từng khách hàng.
```

**Bước 2 — AI đặt câu hỏi ngược (ví dụ minh họa):**

| Câu hỏi AI có thể đặt ra                              | Câu trả lời mẫu                                      |
| --------------------------------------------------------- | ---------------------------------------------------------- |
| Freelancer sẽ quản lý bao nhiêu khách hàng cùng lúc?      | Khoảng 5–10 khách hàng                                     |
| Mỗi công việc cần ghi những thông tin gì?                 | Tên công việc, khách hàng, deadline, trạng thái            |
| Có cần thông báo nhắc deadline không?                      | Chưa cần ở phiên bản đầu tiên                               |
| Giao diện nên đơn giản hay có nhiều màu sắc?              | Đơn giản, dễ nhìn, ưu tiên rõ ràng hơn là bắt mắt           |

**Bước 3 — AI tổng hợp PRD hoàn chỉnh** dựa trên các câu trả lời trên, theo đúng cấu trúc 6 phần đã học ở Bài 7.

## 4. Kỹ Thuật Đặt Câu Hỏi Ngược Cho AI

Nếu ý tưởng ban đầu của bạn còn quá mơ hồ, hãy chủ động yêu cầu AI **phản biện và đặt câu hỏi** thay vì để AI tự đoán:

```text
Trước khi viết PRD, hãy chỉ ra 3 điểm còn chưa rõ trong ý tưởng của tôi
và hỏi tôi để làm rõ từng điểm đó.
```

Kỹ thuật này giúp bạn tránh tình trạng PRD "trông đầy đủ" nhưng thực chất chứa nhiều giả định sai của AI.

## 5. Kiểm Tra Chất Lượng PRD Trước Khi Dùng

Sau khi AI tạo PRD, hãy tự kiểm tra bằng checklist sau trước khi dùng để prompt build app:

| Tiêu chí kiểm tra                                          | Đạt / Chưa đạt |
| -------------------------------------------------------------- | ---------------- |
| Đối tượng người dùng được mô tả cụ thể, không chung chung        |                  |
| Danh sách chức năng có phân biệt "phải có" và "có thì tốt"       |                  |
| Không có chức năng nào bạn không hiểu hoặc không cần             |                  |
| Yêu cầu giao diện đủ rõ để hình dung được layout                 |                  |
| Tiêu chí hoàn thành có thể kiểm tra được (đo lường được)         |                  |

Nếu có mục nào "Chưa đạt", quay lại trò chuyện với AI để chỉnh sửa PRD trước khi chuyển sang bước build app.

## 6. Từ PRD Đến Prompt Build App

Sau khi có PRD hoàn chỉnh, bạn có thể dùng chính PRD đó làm prompt đầu vào cho công cụ build app:

```text
Dưới đây là PRD cho ứng dụng của tôi:

[Dán toàn bộ nội dung PRD vào đây]

Hãy build ứng dụng này theo đúng PRD trên, dùng HTML/CSS/JavaScript đơn giản,
chạy được trực tiếp trên trình duyệt.
```

---

## Điều Cần Ghi Nhớ

* Nên nhờ AI đặt câu hỏi ngược thay vì tự viết PRD một mình — giúp phát hiện thiếu sót.
* Trả lời từng câu hỏi cụ thể để AI tổng hợp PRD chính xác hơn.
* Luôn kiểm tra chất lượng PRD bằng checklist trước khi dùng để build app.
* PRD hoàn chỉnh có thể dùng trực tiếp làm prompt cho bước build sản phẩm.

## Tóm Tắt Bài Học

Thay vì tự mò mẫm viết PRD, bạn hoàn toàn có thể biến ChatGPT hoặc Claude thành một Product Manager ảo, dẫn dắt bạn làm rõ ý tưởng qua các câu hỏi và tự tổng hợp thành PRD hoàn chỉnh. Trong bài tiếp theo, bạn sẽ học cách xây dựng một chatbot PRD cá nhân chuyên biệt, giúp việc này trở nên tự động và nhanh hơn nữa.
