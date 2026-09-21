# 005 - Bài tập: Triển khai ingestion cho Medium Analyzer

## 1. Mục tiêu

- Thực hành load, split, embed và store.
- Thiết kế checkpoint kiểm tra dữ liệu.
- Xử lý lỗi encoding và metadata.

## 2. Đề bài

Xây dựng ingestion pipeline cho một tệp blog Medium theo logic của bài học.

## 3. Nhiệm vụ

1. Tải tệp thành danh sách `Document`.
2. Kiểm tra `page_content` và metadata nguồn.
3. Nếu gặp Unicode decode error, cấu hình UTF-8 hoặc cơ chế autodetect phù hợp.
4. Chia tài liệu với `chunk_size = 1000` và `chunk_overlap = 0`.
5. Đọc thử một số chunk để xác nhận chúng còn ý nghĩa.
6. Tạo embedding cho các chunk.
7. Đưa các document vào vector store bằng interface tương ứng.
8. Kiểm tra số vector, nội dung text và source metadata sau ingestion.

## 4. Yêu cầu

- Không bỏ qua bước kiểm tra dữ liệu sau load.
- Không chỉ kiểm tra bằng việc chương trình “chạy không lỗi”.
- Metadata nguồn phải được giữ qua split và store.
- Ghi lại số chunk thực tế mà dữ liệu của bạn tạo ra.

## 5. Tiêu chí hoàn thành

- [ ] Loader đọc được dữ liệu.
- [ ] Không còn lỗi encoding.
- [ ] Chunk có nội dung đọc được.
- [ ] Metadata nguồn còn tồn tại.
- [ ] Embedding được tạo thành công.
- [ ] Vector xuất hiện trong đúng index.
- [ ] Số vector khớp với số document được ingestion.

## 6. Gợi ý debug

Nếu số vector bằng `0`, hãy debug theo thứ tự:

```text
loader output
→ split output
→ embedding call
→ vector-store configuration
→ upsert result
```
