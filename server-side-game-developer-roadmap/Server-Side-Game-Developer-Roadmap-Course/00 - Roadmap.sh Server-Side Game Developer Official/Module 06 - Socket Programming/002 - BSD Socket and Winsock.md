# 002 - BSD Socket & Winsock

**Module:** Module 06 - Socket Programming
**Roadmap item:** Bài 17
**Loại nội dung:** Network programming
**Thứ tự trong module:** 002
**Thời lượng gợi ý:** 40-60 phút

---

## 1. Tóm tắt
Nội dung này tập trung vào **BSD Socket & Winsock** trong lộ trình Server-Side Game Developer. Sau phần này, bạn nên hiểu vai trò của chủ đề trong game backend và tạo được một artifact kỹ thuật nhỏ.

## 2. Mục tiêu học tập
- Giải thích được **BSD Socket & Winsock** trong luồng kết nối client-server của game online.
- Biết trade-off latency, reliability, ordering, throughput và security.
- Tạo được demo hoặc ghi chú packet/protocol để dùng khi xây server thật.

## 3. Nội dung roadmap
- BSD Socket API
- Winsock trên Windows
- Cross-platform networking
- Blocking vs non-blocking socket

## 4. Bài tập thực hành
- Vẽ luồng client -> gateway/API -> game server -> database/cache/queue cho bài học.
- Tạo demo socket/API nhỏ hoặc pseudo-packet nếu chưa code ngay.
- Ghi lại rủi ro về latency, packet loss, ordering hoặc security.

## 5. Artifact nên tạo
- Protocol flow diagram
- Socket/API demo
- Latency/security note

## 6. Câu hỏi tự kiểm tra
- Tôi có thể giải thích **BSD Socket & Winsock** trong kiến trúc game backend không?
- Chủ đề này ảnh hưởng đến latency, reliability, scaling, consistency, security hay observability?
- Artifact nào từ bài này có thể đưa vào portfolio server-side game developer?

## 7. Tổng kết
**BSD Socket & Winsock** nên được học bằng cách thiết kế, code thử, đo đạc và ghi lại trade-off. Hãy biến bài học thành một demo, diagram hoặc README có thể review.
