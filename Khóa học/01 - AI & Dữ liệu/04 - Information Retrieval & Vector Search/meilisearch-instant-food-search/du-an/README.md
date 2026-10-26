# Demo thực hành — Meilisearch Movies & Recipes

## 1. Yêu cầu

- Node.js 20.6+ và npm.
- Một instance Meilisearch đang chạy: Cloud hoặc cục bộ.
- Hai loại khóa: **Admin API key** dành cho import script (bí mật) và **Search API key** dùng trong giao diện công khai *chỉ khi tài liệu trong index được phép công khai*.

## 2. Chạy dự án

```bash
npm install
cp .env.example .env
# Sửa .env, điền khóa bí mật chỉ trên máy của bạn.
npm run import:movies
npm run search -- "space"
```

Trên Windows PowerShell có thể dùng `Copy-Item .env.example .env`.

Sau khi import, dùng trình duyệt mở dashboard/preview để xác nhận `movies` có 8 tài liệu. Nếu số liệu chưa hiện, xem trạng thái task; script đã chờ đến khi nạp xong.

## 3. Chạy giao diện

```bash
cp web/config.example.js web/config.js
# Sửa web/config.js: host + search-only key + indexName.
npx serve web
```

Dùng `Copy-Item web/config.example.js web/config.js` với PowerShell. Truy cập URL local mà `serve` hiển thị. Máy cần kết nối internet để tải thư viện frontend từ CDN.

Lưu ý `web/config.js` được trình duyệt tải về; mọi giá trị trong đó đều công khai. Không được đặt master key hoặc admin key ở đây.

## 4. Thử với món ăn

```bash
npm run import:recipes
npm run search -- "trứng" recipes
```

Đổi `indexName` trong `web/config.js` thành `recipes`, tải lại trang. Dữ liệu mẫu có món mì, bún, cơm và trứng; có thể mở rộng `recipes.json` với món mới rồi chạy lại import.

## 5. Khắc phục nhanh

- `401/403`: key sai hoặc không đủ quyền cho index.
- `404 index_not_found`: chưa tạo / chưa nạp đúng tên index.
- `ENOENT .env`: tạo file `.env` trong thư mục `du-an`.
- `Connection refused` hoặc network error: sai host, instance chưa chạy, HTTP/HTTPS không phù hợp hoặc firewall.
- Giao diện trống: kiểm tra Console/Network, `web/config.js`, search key và đường dẫn index.
- `npm run search`: dùng dấu ngoặc kép cho cụm từ nhiều từ.

## 6. Thiết kế minh họa

`movies.json` và `recipes.json` có cùng trường trình bày `title`, `overview`, giúp chia sẻ UI. `genres`, `releaseYear` phục vụ lọc dữ liệu phim; `ingredients`, `category` phục vụ bài món ăn.
