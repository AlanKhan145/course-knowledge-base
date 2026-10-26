# Tài liệu tham khảo và ranh giới nội dung

## 1. Tài liệu kỹ thuật chính thức

- Meilisearch Docs: https://www.meilisearch.com/docs
- Meilisearch JavaScript SDK: https://www.meilisearch.com/integrations/javascript
- JavaScript client repository: https://github.com/meilisearch/meilisearch-js
- InstantSearch.js integration: https://www.meilisearch.com/integrations/instantsearch
- Hướng dẫn frontend: https://www.meilisearch.com/docs/guides
- Bài viết kỹ thuật về typo tolerance: https://www.meilisearch.com/blog/typo-tolerance
- Indexing best practices: https://www.meilisearch.com/blog/indexing-optimization-guide

## 2. Nguyên tắc biên soạn

Giáo trình tập trung vào Meilisearch, nhập JSON qua JavaScript SDK, kiểm tra chỉ mục trên dashboard và giao diện `instant-meilisearch` kết hợp `InstantSearch.js`. Ví dụ về dữ liệu phim và tên trường `overview` được giữ để người học đối chiếu logic. Ví dụ món ăn là bài ứng dụng bổ sung cùng một mô hình tìm kiếm.

Các số liệu xuất hiện trong các bản hướng dẫn cũ (ví dụ số lượng tài liệu miễn phí, số truy vấn miễn phí hoặc tốc độ trả kết quả cụ thể) không được coi là chính sách/dữ liệu hiệu năng hiện tại. Kiểm tra bảng giá và giới hạn ngay tại tài khoản Meilisearch Cloud đang dùng.

**Ngày đối chiếu tài liệu:** 2026-10-27. **Phạm vi mã:** demo giáo dục, chưa bao gồm hệ thống đồng bộ production với database, phân quyền dữ liệu theo người dùng hoặc phân tích hành vi tìm kiếm.
