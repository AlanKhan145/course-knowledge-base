# 003 - Bài tập: Thiết lập môi trường Documentation Assistant

## 1. Mục tiêu

Bài tập giúp người học thực hiện và kiểm tra toàn bộ bước chuẩn bị môi trường trước khi xây dựng pipeline ingestion.

## 2. Kiến thức cần dùng

Cần sử dụng các nội dung sau:

- Clone đúng nhánh repository.
- Pinecone index.
- Vector dimension `1536`.
- Cosine similarity.
- Serverless deployment.
- `.env` và API key.
- `Pipenv` và lock file.
- `ingestion.py`.

## 3. Đề bài

Chuẩn bị một môi trường dự án sẵn sàng để triển khai ingestion tài liệu vào Pinecone.

## 4. Nhiệm vụ

### 4.1. Chuẩn bị repository

1. Clone repository từ đúng nhánh khởi đầu của bài học.
2. Mở thư mục dự án.
3. Kiểm tra các file cấu hình dependency hiện có.

### 4.2. Cấu hình Pinecone

1. Tạo một index có tên phù hợp với dự án.
2. Đặt vector dimension là `1536`.
3. Chọn cosine similarity.
4. Sử dụng cấu hình serverless.
5. Ghi lại cloud và region đã chọn.

### 4.3. Cấu hình secret và dependency

1. Tạo file `.env`.
2. Thêm Pinecone API key.
3. Thêm OpenAI API key hoặc khóa của nhà cung cấp mô hình mà code dự án sử dụng.
4. Xác nhận `.env` không được đưa vào commit chứa mã nguồn.
5. Cài dependency bằng `Pipenv` theo cấu hình của repository.

### 4.4. Chuẩn bị ingestion

1. Tạo file `ingestion.py`.
2. Viết chú thích ngắn trong file mô tả ba trách nhiệm sẽ được triển khai: xử lý tài liệu, tạo embedding và lưu vector vào Pinecone.

## 5. Yêu cầu

- Không ghi API key thật vào bài nộp.
- Không tự thay đổi vector dimension.
- Không tự chọn phiên bản package khác nếu repository đã khóa phiên bản.
- Không triển khai retrieval trước khi hoàn tất phần môi trường.

## 6. Tiêu chí hoàn thành

Bài được xem là hoàn thành khi:

- Mã nguồn nằm đúng nhánh khởi đầu.
- Pinecone index có dimension `1536`, cosine similarity và serverless.
- Secret được đặt ngoài source code.
- Dependency được cài từ cấu hình dự án.
- `ingestion.py` tồn tại và đã sẵn sàng cho bước triển khai tiếp theo.

## 7. Checklist tự kiểm tra

- [ ] Đã clone đúng nhánh.
- [ ] Đã tạo Pinecone index.
- [ ] Dimension là `1536`.
- [ ] Metric là cosine similarity.
- [ ] Đã chọn serverless.
- [ ] Đã tạo `.env`.
- [ ] Không commit secret.
- [ ] Đã cài dependency bằng `Pipenv`.
- [ ] Đã tạo `ingestion.py`.
