# 003 - Coroutine, Future, Promise, Channel

**Module:** Module 10 - Multithreading & Concurrency
**Roadmap item:** Bài 38
**Loại nội dung:** Concurrency architecture
**Thứ tự trong module:** 003
**Thời lượng gợi ý:** 40-60 phút

---

## 1. Tóm tắt
Nội dung này tập trung vào **Coroutine, Future, Promise, Channel** trong lộ trình Server-Side Game Developer. Sau phần này, bạn nên hiểu vai trò của chủ đề trong game backend và tạo được một artifact kỹ thuật nhỏ.

## 2. Mục tiêu học tập
- Hiểu **Coroutine, Future, Promise, Channel** trong bối cảnh nhiều connection, nhiều room và nhiều player cùng lúc.
- Nhận biết race condition, deadlock, backpressure và workload sharding.
- Thiết kế được concurrency model nhỏ cho lobby, match, room hoặc world simulation.

## 3. Nội dung roadmap
- Coroutine
- Future & Promise
- Channel
- Async task pipeline
- Khi nào dùng async thay vì thread

## 4. Bài tập thực hành
- Thiết kế concurrency model cho lobby, room, match hoặc player actor.
- Chỉ ra shared state, lock/message boundary và điểm có thể race condition.
- Viết load scenario nhỏ: 100, 1.000, 10.000 connection sẽ nghẽn ở đâu?

## 5. Artifact nên tạo
- Concurrency model diagram
- Race/deadlock checklist
- Load scenario note

## 6. Câu hỏi tự kiểm tra
- Tôi có thể giải thích **Coroutine, Future, Promise, Channel** trong kiến trúc game backend không?
- Chủ đề này ảnh hưởng đến latency, reliability, scaling, consistency, security hay observability?
- Artifact nào từ bài này có thể đưa vào portfolio server-side game developer?

## 7. Tổng kết
**Coroutine, Future, Promise, Channel** nên được học bằng cách thiết kế, code thử, đo đạc và ghi lại trade-off. Hãy biến bài học thành một demo, diagram hoặc README có thể review.
