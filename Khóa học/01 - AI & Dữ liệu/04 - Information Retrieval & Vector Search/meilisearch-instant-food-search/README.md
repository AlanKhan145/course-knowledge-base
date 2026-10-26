# KHÓA HỌC — XÂY DỰNG TÌM KIẾM TỨC THÌ VỚI MEILISEARCH

> **Ngôn ngữ:** Tiếng Việt · **Công nghệ:** Meilisearch, JavaScript, Node.js, InstantSearch.js, `@meilisearch/instant-meilisearch` · **Trình độ:** Cơ bản → thực hành · **Hình thức:** Giáo trình Markdown và mã mẫu.

## 1. Giới thiệu

Một ứng dụng có hàng nghìn món ăn, phim hoặc sản phẩm cần cho phép người dùng gõ vài ký tự và nhìn thấy kết quả phù hợp gần như ngay lập tức. `Meilisearch` là công cụ tìm kiếm chuyên dụng có thể lập chỉ mục dữ liệu, chấp nhận một số lỗi gõ và cung cấp kết quả đã xếp hạng. Khóa học này hướng dẫn đi từ việc hiểu chỉ mục đến dựng giao diện tìm kiếm thực tế.

**Sản phẩm cuối khóa:** Một trang tìm kiếm phim có hộp nhập, kết quả cập nhật theo truy vấn, sau đó chuyển sang chỉ mục công thức món ăn để thử nhập `mì`, `bún`, `trứng` hoặc từ khóa nguyên liệu.

**Phân biệt quan trọng:** Meilisearch là công cụ truy xuất tài liệu, không thay thế cơ sở dữ liệu nghiệp vụ, và không tự trở thành chatbot/AI Agent. Ứng dụng có thể đồng bộ dữ liệu từ SQL/MongoDB vào Meilisearch để phục vụ tìm kiếm nhanh.

## 2. Lộ trình

| Thứ tự | Bài học | Sản phẩm sau bài |
| --- | --- | --- |
| 01 | [Tư duy tìm kiếm và kiến trúc Meilisearch](bai-hoc/01-tong-quan-va-kien-truc.md) | Mô tả được index, document, query, ranking |
| 02 | [Thiết lập Meilisearch Cloud hoặc máy cục bộ](bai-hoc/02-thiet-lap-may-chu.md) | Lấy host và cấu hình API key đúng vai trò |
| 03 | [Thiết kế tài liệu, lập chỉ mục và nhập JSON](bai-hoc/03-lap-chi-muc-va-nhap-du-lieu.md) | Chạy được tiến trình nạp dữ liệu |
| 04 | [Xây dựng giao diện InstantSearch.js](bai-hoc/04-xay-giao-dien-tim-kiem.md) | Tìm kiếm trực tiếp trên trang web |
| 05 | [Xếp hạng, typo tolerance và kiểm thử tính phù hợp](bai-hoc/05-xep-hang-va-tinh-phu-hop.md) | Đọc và điều chỉnh kết quả tìm kiếm |
| 06 | [Bảo mật, lỗi thường gặp và vận hành](bai-hoc/06-bao-mat-va-debug.md) | Phân biệt các khóa; tự gỡ lỗi |
| 07 | [Đồ án: tìm kiếm món ăn theo nguyên liệu](bai-hoc/07-do-an-tim-mon-an.md) | Tái sử dụng kiến trúc cho dữ liệu món ăn |

## 3. Cấu trúc thư mục

```text
Khoa_hoc_Meilisearch_Tim_kiem_Tuc_thi/
├── README.md
├── TAI_LIEU_THAM_KHAO.md
├── bai-hoc/
│   ├── 01-tong-quan-va-kien-truc.md
│   ├── 02-thiet-lap-may-chu.md
│   ├── 03-lap-chi-muc-va-nhap-du-lieu.md
│   ├── 04-xay-giao-dien-tim-kiem.md
│   ├── 05-xep-hang-va-tinh-phu-hop.md
│   ├── 06-bao-mat-va-debug.md
│   └── 07-do-an-tim-mon-an.md
└── du-an/
    ├── README.md
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── scripts/import.mjs
    ├── scripts/search.mjs
    ├── data/movies.json
    ├── data/recipes.json
    ├── web/index.html
    ├── web/styles.css
    ├── web/app.js
    └── web/config.example.js
```

## 4. Học nhanh bằng cách chạy mã

1. Chuẩn bị Node.js **20.6 trở lên** (để dùng `node --env-file`) và máy chủ Meilisearch Cloud hoặc instance chạy cục bộ.
2. Mở thư mục `du-an/`, chạy `npm install`.
3. Sao chép `.env.example` thành `.env` và điền `MEILI_HOST`, `MEILI_ADMIN_KEY`. **Không tải khóa thật lên Git/Drive công khai.**
4. Chạy `npm run import:movies` để nạp dữ liệu mẫu, sau đó `npm run search -- "space"` để thử tìm.
5. Sao chép `web/config.example.js` thành `web/config.js`, chỉnh `host`, **search-only key** và `indexName: 'movies'`.
6. Từ thư mục `du-an/`, chạy `npx serve web` rồi mở đường dẫn hiển thị.
7. Với bài món ăn, chạy `npm run import:recipes`, đổi `indexName: 'recipes'`, mở lại giao diện.

Nếu chưa có host, học Bài 02 trước. Lệnh `import` cần **Admin API key**, còn trang web chỉ dùng **Search API key** giới hạn quyền.

## 5. Phương pháp học và đánh giá

Mỗi bài gồm mục tiêu đo lường được, giải thích khái niệm, ví dụ, lỗi dễ mắc, thực hành và 5 câu trắc nghiệm có đáp án giải thích. Đối với đồ án, hãy hoàn thiện sản phẩm trước khi xem kết quả mong đợi. Nên thử nhập cả truy vấn đúng, sai chính tả và truy vấn không tồn tại.

## 6. Lưu ý về phiên bản và phạm vi

Giá dịch vụ cloud, quota miễn phí, giao diện dashboard và thời gian xử lý có thể thay đổi. Không dùng các con số được nêu trong bài giới thiệu như cam kết SLA. Các API mẫu được viết theo cách dùng phổ biến của JavaScript SDK/InstantSearch; kiểm tra tài liệu chính thức nếu phiên bản thư viện thay đổi. Bộ phim và món ăn trong thư mục `data/` là **dữ liệu minh họa được tự tạo**, không phải tập JSON gốc của bài hướng dẫn.
