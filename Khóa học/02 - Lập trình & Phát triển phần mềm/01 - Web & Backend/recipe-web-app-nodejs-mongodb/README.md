# Khóa học — Xây dựng website công thức nấu ăn với Node.js, Express và MongoDB

> **Ngôn ngữ:** Tiếng Việt · **Hình thức:** Tự học có bài thực hành · **Sản phẩm:** Website công thức nấu ăn render EJS, lưu dữ liệu MongoDB.

## 1. Giới thiệu

Khóa học hướng dẫn từng bước tạo website công thức nấu ăn: trang chủ, danh mục, trang chi tiết, tìm kiếm theo tên món, công thức mới nhất, công thức ngẫu nhiên, gửi món có nhiều nguyên liệu và tải ảnh, thông báo phản hồi, cùng thao tác cập nhật/xóa bản ghi. Công nghệ trọng tâm là Node.js, Express, MongoDB/Mongoose, EJS và Bootstrap.

**Đầu ra học tập:** người học có thể tự thiết kế route, controller, model và view; truy vấn dữ liệu có cấu trúc; kết nối biểu mẫu với database; xử lý ảnh theo quy trình phù hợp và nhận diện các rủi ro bảo mật cơ bản.

## 2. Lộ trình bài học

| Bài | Chủ đề | Kết quả chính |
| --- | --- | --- |
| [01](Bai_hoc/01-tong-quan-kien-truc.md) | Tổng quan kiến trúc | Chia tầng routes / controllers / models / views |
| [02](Bai_hoc/02-khoi-tao-node-express.md) | Khởi tạo Node.js | Project npm và Nodemon |
| [03](Bai_hoc/03-express-router-controller.md) | Router và controller | Chạy route EJS |
| [04](Bai_hoc/04-ejs-layout-bootstrap.md) | EJS + Bootstrap | Layout và header tìm kiếm |
| [05](Bai_hoc/05-trang-chu-the-mon-an.md) | Trang chủ | Hero và các thẻ món |
| [06](Bai_hoc/06-mongodb-atlas-mongoose-schema.md) | Atlas + Mongoose | Kết nối DB, schema |
| [07](Bai_hoc/07-truy-van-du-lieu.md) | Seed và truy vấn | `find`, `sort`, `limit` |
| [08](Bai_hoc/08-danh-muc-va-loc-mon.md) | Trang danh mục | Lọc món theo category |
| [09](Bai_hoc/09-trang-chi-tiet-mon-an.md) | Chi tiết món | Render theo `_id` |
| [10](Bai_hoc/10-tim-kiem-mon-an.md) | Tìm kiếm | Từ khóa tên món |
| [11](Bai_hoc/11-moi-nhat-va-ngau-nhien.md) | Khám phá | Latest và `$sample` |
| [12](Bai_hoc/12-form-gui-cong-thuc.md) | Form gửi công thức | Input nguyên liệu động |
| [13](Bai_hoc/13-flash-validation-upload.md) | Flash + upload | Kiểm tra và lưu dữ liệu |
| [14](Bai_hoc/14-update-delete-review.md) | Update/Delete | Hoàn chỉnh CRUD |

Đọc tiếp: [Dự án cuối khóa](Bai_tap/du-an-cuoi-khoa.md) · [Thuật ngữ và các lệnh](Tham_khao/thuat-ngu-lenh.md) · [Sơ đồ tổng hợp](So_do/kien-truc-va-luong-du-lieu.md).

## 3. Học như thế nào?

Mỗi bài được thiết kế đọc độc lập: tóm tắt, mục tiêu, nội dung, code minh họa, bài thực hành có checkpoint, **5 câu trắc nghiệm kèm đáp án và giải thích**, và tổng kết. Các ví dụ minh họa có thể cần kết hợp nhiều bài để tạo ứng dụng hoàn chỉnh; không coi những đoạn mã ngắn là một repository production sẵn chạy.

Nên học theo thứ tự 01 → 14, tự code lại thay vì chỉ đọc, và hoàn thành dự án cuối khóa để tổng hợp kiến thức.

## 4. Chuẩn bị

- Node.js và npm đã cài; VS Code hoặc editor bất kỳ.
- Một tài khoản MongoDB Atlas hoặc MongoDB tương đương có thể kết nối.
- Kiến thức JavaScript, HTTP, HTML/CSS và terminal cơ bản.
- Git để quản lý thay đổi và `.gitignore` cho `.env`.

## 5. Lưu ý về tính tương thích

Một số hướng dẫn EJS/Bootstrap/Mongoose được viết ở nhiều thời điểm và tên phiên bản có thể thay đổi. Khóa học này tập trung vào cơ chế; khi chạy thực tế hãy đọc tài liệu của phiên bản đang cài, nhất là middleware upload, phiên bản Node.js và thiết lập phiên MongoDB. Không áp dụng demo upload/secret như cấu hình production nếu chưa hoàn thiện validation, authentication và CSRF protection.

## 6. Phạm vi

Khóa học này là **website quản lý công thức**, chưa phải AI Agent trò chuyện hay hệ thống gợi ý theo sở thích tự động. Phần tìm kiếm dạy keyword search đơn giản trên cơ sở dữ liệu; có ghi rõ hướng mở rộng sang Atlas Search/hybrid/semantic search nếu cần.
