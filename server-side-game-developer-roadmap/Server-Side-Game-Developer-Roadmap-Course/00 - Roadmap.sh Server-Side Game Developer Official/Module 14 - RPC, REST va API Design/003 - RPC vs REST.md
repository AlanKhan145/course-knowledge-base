# 003 - RPC vs REST

**Module:** Module 14 - RPC, REST và API Design
**Roadmap item:** Bài 55
**Loại nội dung:** API architecture
**Thứ tự trong module:** 003
**Thời lượng gợi ý:** 25-35 phút

---

## 1. Tóm tắt
Nội dung này tập trung vào **RPC vs REST** trong lộ trình Server-Side Game Developer. Sau phần này, bạn nên hiểu vai trò của chủ đề trong game backend và tạo được một artifact kỹ thuật nhỏ.

## 2. Mục tiêu học tập
- Thiết kế **RPC vs REST** cho auth, profile, inventory, matchmaking hoặc leaderboard.
- Biết khi nào chọn REST, RPC hoặc gRPC.
- Tạo API contract có request, response, error và auth rõ ràng.

## 3. Nội dung roadmap
- RPC phù hợp internal service
- REST phù hợp public API/mobile client
- gRPC phù hợp microservices hiệu năng cao
- REST dễ debug hơn

## 4. Bài tập thực hành
- Viết API contract cho một endpoint game backend.
- Thêm status code/error code/auth/versioning hoặc protobuf service definition.
- Mô tả client retry và server idempotency nếu có giao dịch.

## 5. Artifact nên tạo
- API contract
- gRPC/protobuf sample
- Error model

## 6. Câu hỏi tự kiểm tra
- Tôi có thể giải thích **RPC vs REST** trong kiến trúc game backend không?
- Chủ đề này ảnh hưởng đến latency, reliability, scaling, consistency, security hay observability?
- Artifact nào từ bài này có thể đưa vào portfolio server-side game developer?

## 7. Tổng kết
**RPC vs REST** nên được học bằng cách thiết kế, code thử, đo đạc và ghi lại trade-off. Hãy biến bài học thành một demo, diagram hoặc README có thể review.
