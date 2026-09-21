# 006 - Bài tập ôn tập: Từ ingestion sang retrieval

## 1. Mục tiêu

- Củng cố luồng query-time.
- Hiểu tham số top-k.
- Phân biệt lỗi ingestion với lỗi retrieval.

## 2. Đề bài

Vector store đã có dữ liệu. Hãy mô tả chính xác những gì xảy ra từ lúc người dùng gửi câu hỏi đến lúc LLM nhận được prompt tăng cường.

## 3. Nhiệm vụ

1. Viết luồng xử lý tối đa 8 bước.
2. Giải thích query embedding dùng để làm gì.
3. Phân tích ảnh hưởng khi `k` quá nhỏ.
4. Phân tích ảnh hưởng khi `k` quá lớn.
5. Nêu hai checkpoint để xác nhận retrieval đang hoạt động đúng.

## 4. Yêu cầu hoàn thành

- [ ] Có bước embed query.
- [ ] Có similarity search.
- [ ] Có top-k chunks.
- [ ] Có augmented prompt.
- [ ] Có phân tích trade-off của `k`.
