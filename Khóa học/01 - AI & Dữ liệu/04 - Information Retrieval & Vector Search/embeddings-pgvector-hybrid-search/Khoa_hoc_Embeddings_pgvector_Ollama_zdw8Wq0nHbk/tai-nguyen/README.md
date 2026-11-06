# Mã thực hành kèm khóa học

- `schema.sql`: migration PostgreSQL tạo bảng/index/RPC.
- `.env.example`: mẫu biến môi trường; **không** commit `.env` thật.
- `chunks.sample.json`: **dữ liệu giả lập để luyện tập**, không phải số liệu báo cáo thực tế.
- `ingest.py`: tạo embedding và chèn chunk.
- `search.py`: truy vấn FTS và semantic search.
- `requirements.txt`: thư viện Python.

Các script minh họa chạy trên máy cá nhân đã khởi động Supabase và Ollama. Không dùng khóa bí mật từ browser. Việc chạy lại `ingest.py` sẽ tạo các bản ghi trùng; đây là chủ đề nâng cấp ingestion trong môi trường thật. Phần lab tổng hợp giải thích cách vận hành an toàn.
