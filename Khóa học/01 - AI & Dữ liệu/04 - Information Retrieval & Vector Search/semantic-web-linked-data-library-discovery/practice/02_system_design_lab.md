# Bài tập 02 - System Design Lab

## Bối cảnh

Bạn đang xây một **Content Library** cho một tổ chức, gồm:

- bài viết dài;
- tài liệu PDF;
- video;
- hình ảnh;
- hồ sơ chuyên gia;
- taxonomy nội bộ.

Mục tiêu là người dùng khi đang đọc một bài có thể khám phá ngay các nội dung và entity liên quan, tương tự cách Singapore Infopedia Widget hoạt động.

## Nhiệm vụ 1 - Source inventory

Tạo bảng gồm:

| Source | Current format | Entity types | Conversion / mapping cần có |
|---|---|---|---|
| CMS |  |  |  |
| Document store |  |  |  |
| Video platform |  |  |  |
| Expert directory |  |  |  |
| Taxonomy |  |  |  |

Không cần dùng đúng MARC/BIBFRAME nếu hệ thống của bạn không phải thư viện. Mục tiêu là áp dụng tư duy **source-specific adapter -> shared semantic layer**.

## Nhiệm vụ 2 - Entity model

Chọn ít nhất 5 entity types. Với mỗi entity, ghi:

- identifier;
- display name;
- alternate names;
- core properties;
- relationships;
- source system.

Sau đó vẽ tối thiểu 8 relationship edges.

## Nhiệm vụ 3 - Enrichment flow

Thiết kế pipeline:

`article -> entity extraction -> entity matching -> graph update`

Ghi rõ:

- loại entity cần extract;
- authority dataset nào dùng để match;
- trường hợp no-match xử lý thế nào;
- metadata nào tạo ra sau match.

**Lưu ý:** paper chỉ mô tả precise string matching. Nếu bạn chọn embedding/fuzzy matching, hãy ghi rõ đó là phần mở rộng của bạn, không phải cơ chế được paper xác nhận.

## Nhiệm vụ 4 - Widget UX

Thiết kế bốn phần:

1. Context Switch
2. Knowledge Card
3. Resource Type Choice
4. Resource Listing

Yêu cầu mỗi phần chỉ hiển thị thông tin cần cho discovery, không dump toàn bộ graph.

## Nhiệm vụ 5 - Ranking rubric

Thiết kế một rubric **không cần số cụ thể** với các tín hiệu:

- `about`-like relation;
- `mentions`-like relation;
- both;
- local/domain-specific entity;
- freshness hoặc feedback nếu bạn muốn mở rộng.

Phân biệt rõ:

- tín hiệu có trong paper;
- tín hiệu bạn tự bổ sung.

## Deliverable

Một file Markdown 2-4 trang gồm sơ đồ pipeline, entity model, UX flow và ranking logic.
