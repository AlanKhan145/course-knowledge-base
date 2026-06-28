# 002 - RabbitMQ

**Module:** Module 15 - Message Queues & Event Streaming
**Roadmap item:** Bài 58
**Loại nội dung:** Event-driven backend
**Thứ tự trong module:** 002
**Thời lượng gợi ý:** 25-35 phút

---

## 1. Tóm tắt
Nội dung này tập trung vào **RabbitMQ** trong lộ trình Server-Side Game Developer. Sau phần này, bạn nên hiểu vai trò của chủ đề trong game backend và tạo được một artifact kỹ thuật nhỏ.

## 2. Mục tiêu học tập
- Dùng **RabbitMQ** để xử lý job async, telemetry, analytics hoặc player events.
- Biết khái niệm producer, consumer, retry, partition và dead letter queue.
- Tạo event schema và flow xử lý cho một hệ thống game.

## 3. Nội dung roadmap
- Queue-based messaging
- Routing
- Worker processing
- Dùng cho job async, email, notification

## 4. Bài tập thực hành
- Vẽ event flow từ player action đến queue/stream và consumer.
- Định nghĩa event schema, retry policy và dead letter handling.
- Nêu metric cần monitor: lag, throughput, error rate, dropped events.

## 5. Artifact nên tạo
- Event schema
- Queue/stream diagram
- Retry/DLQ plan

## 6. Câu hỏi tự kiểm tra
- Tôi có thể giải thích **RabbitMQ** trong kiến trúc game backend không?
- Chủ đề này ảnh hưởng đến latency, reliability, scaling, consistency, security hay observability?
- Artifact nào từ bài này có thể đưa vào portfolio server-side game developer?

## 7. Tổng kết
**RabbitMQ** nên được học bằng cách thiết kế, code thử, đo đạc và ghi lại trade-off. Hãy biến bài học thành một demo, diagram hoặc README có thể review.
