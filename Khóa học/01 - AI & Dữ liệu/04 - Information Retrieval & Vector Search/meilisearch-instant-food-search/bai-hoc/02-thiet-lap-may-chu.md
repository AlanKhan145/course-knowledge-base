# Bài 02 — Thiết lập Meilisearch Cloud hoặc máy cục bộ

> **Loại:** Lab · **Chủ đề:** Instance, host, API key, môi trường phát triển.

## 1. Tổng quan

Để giao diện JavaScript có thể tìm kiếm, cần một **Meilisearch instance** đang chạy. Một instance có địa chỉ host cho các yêu cầu HTTP và có thể yêu cầu API key để phân quyền. Có thể dùng Cloud do Meilisearch quản lý hoặc chạy máy chủ riêng, chẳng hạn qua Docker trên máy cá nhân.

## 2. Mục tiêu

- Chọn được cách triển khai phù hợp cho việc học.
- Kiểm tra instance có phản hồi qua endpoint `/health`.
- Phân biệt master key, Admin API key và Search API key.
- Lưu cấu hình riêng theo môi trường, không chèn bí mật vào giao diện web.

## 3. Chuẩn bị

- Trình duyệt và VS Code.
- Node.js và npm (khuyến nghị Node.js 20.6+ cho mã thực hành).
- Nếu chạy local bằng Docker: Docker Desktop/Engine đã cài đặt.
- Một thư mục dự án trống hoặc thư mục `du-an/` được cung cấp.

## 4. Cách A — Tạo instance trên Meilisearch Cloud

1. Truy cập https://www.meilisearch.com/ và mở trang Cloud.
2. Đăng ký/đăng nhập, tạo project/instance mới, chọn khu vực gần người dùng và gói phù hợp.
3. Chờ instance chuyển sang trạng thái sẵn sàng; sao chép **host URL**.
4. Mở phần quản lý API keys. Lấy khóa dành cho tác vụ quản trị và một **Search API key** giới hạn đọc dữ liệu tìm kiếm.
5. Lưu host và khóa quản trị vào file `.env` ở thư mục server/script, không điền trực tiếp trong mã frontend.

Tên nút, chính sách thử nghiệm miễn phí và hạn mức Cloud có thể thay đổi. Không mặc định còn chính xác các hạn mức mô tả trong những demo cũ; xem thông tin ngay trong bảng điều khiển hiện tại.

## 5. Cách B — Chạy local bằng Docker

Lệnh minh họa (dùng terminal phù hợp với Docker đang cài):

```bash
docker run --rm \
  -p 127.0.0.1:7700:7700 \
  -e MEILI_ENV=development \
  -e MEILI_MASTER_KEY=change-this-local-secret-key \
  getmeili/meilisearch:latest
```

- `127.0.0.1:7700:7700` chỉ ánh xạ cổng vào loopback của máy phát triển.
- `MEILI_MASTER_KEY` bảo vệ các API. Giá trị trên chỉ để **minh họa**, hãy thay bằng một khóa ngẫu nhiên đủ mạnh do bạn tự tạo.
- `--rm` giúp xóa container sau khi dừng. Để duy trì dữ liệu qua phiên chạy, cần cấu hình volume và chính sách lưu trữ phù hợp; ví dụ trên phục vụ bài học nhanh.

Kiểm tra từ terminal khác:

```bash
curl http://127.0.0.1:7700/health
```

Một phản hồi có trạng thái `available` biểu thị instance đang phục vụ. Nếu máy bạn dùng PowerShell mà `curl` là alias, có thể dùng `Invoke-RestMethod http://127.0.0.1:7700/health`.

## 6. Thiết lập các loại key đúng vai trò

| Khóa | Quyền/ý nghĩa | Nơi sử dụng |
| --- | --- | --- |
| Master key | Bí mật gốc để bảo vệ/quản lý instance và các khóa | Lưu riêng trong môi trường server; không gắn vào web |
| Admin API key | Quyền quản lý index, cập nhật dữ liệu/cài đặt tùy chính sách | Script import/backend tin cậy |
| Search API key | Chỉ cho phép truy vấn tìm kiếm với index được cấp quyền | Frontend khi dữ liệu công khai hoặc backend proxy |

Một Search API key có thể xuất hiện trong mã frontend, vì thế vẫn cần giới hạn quyền và kiểm soát dữ liệu được index. **Search key không phải cơ chế để phân quyền từng tài liệu nhạy cảm giữa các người dùng.** Nếu mỗi người dùng nhìn thấy tập dữ liệu riêng, cần một thiết kế phân quyền ở backend hoặc cơ chế bảo mật thích hợp.

### 6.1. File cấu hình

Tại `du-an/`, sao chép `.env.example` thành `.env` và sửa:

```dotenv
MEILI_HOST=http://127.0.0.1:7700
MEILI_ADMIN_KEY=your-private-admin-api-key
```

Máy chủ Cloud dùng URL HTTPS thực tế của instance. `web/config.js` được tải công khai bởi trình duyệt, nên chỉ lưu Search API key ở đó.

### 6.2. Vì sao không dùng khóa master trong HTML?

Mọi người có thể xem mã JavaScript và các yêu cầu mạng trên trình duyệt. Nếu một khóa cho phép ghi/chỉnh sửa index bị lộ, người khác có thể xóa tài liệu, thay đổi dữ liệu hoặc thực hiện các thao tác ngoài quyền của người tìm kiếm. Tách khóa chính là áp dụng nguyên tắc **least privilege**.

## 7. Checkpoint và kiểm tra

- [ ] Truy cập được `/health` từ máy sẽ chạy script.
- [ ] Ghi lại host của instance, nhưng không ghi mật khẩu hoặc API key vào tài liệu công khai.
- [ ] Có Admin key phục vụ nhập dữ liệu và Search key phục vụ tìm kiếm.
- [ ] `.env` không được commit lên Git.
- [ ] Biết cách đóng hoặc xóa instance thử nghiệm khi không còn cần.

## 8. Debug thường gặp

**Không kết nối được host:** Kiểm tra scheme `https://` với Cloud, `http://` local, cổng 7700, trạng thái container và firewall. **401 Unauthorized:** Key thiếu, sai hoặc header ủy quyền không hợp lệ. **403 Forbidden:** Key không có quyền thực hiện tác vụ hoặc index bị hạn chế. **Cloud báo quá quota:** Xem giới hạn của gói hiện hành; không nên suy luận từ ví dụ lịch sử.

## 9. Deliverable

Một file `.env` chỉ lưu trên máy (không nộp), một host có thể truy cập, và bản mô tả ngắn nêu loại triển khai đã chọn, cách bạn xác nhận `/health`, ranh giới sử dụng khóa quản trị/khóa tìm kiếm.

## 10. Câu hỏi ôn tập

**Câu 1.** Trình duyệt được phép nhận khóa nào để tìm trên index công khai?

A. Search API key giới hạn quyền.  
B. Master key.  
C. Admin API key.  
D. Bất kỳ khóa nào đều như nhau.

**Đáp án:** A. **Giải thích:** Frontend chỉ nên có khóa tìm kiếm với quyền tối thiểu.

**Câu 2.** `/health` thường giúp kiểm tra điều gì?

A. Phim nào có xếp hạng cao nhất.  
B. Instance có sẵn sàng phục vụ hay không.  
C. Giao diện CSS đã tải xong.  
D. Tài liệu nào mới nhập gần nhất.

**Đáp án:** B. **Giải thích:** Đây là endpoint tình trạng dịch vụ, không phải truy vấn nội dung.

**Câu 3.** Người học đặt Admin key trong `web/config.js`. Rủi ro chính là gì?

A. Truy vấn chạy chậm hơn.  
B. Chỉ gây lỗi màu chữ.  
C. Key trở thành công khai và có thể bị lạm dụng.  
D. Search box biến mất ngay.

**Đáp án:** C. **Giải thích:** File JavaScript được gửi nguyên nội dung cho trình duyệt.

**Câu 4.** Dùng Meilisearch Cloud có ý nghĩa gì?

A. Không cần Internet trong mọi trường hợp.  
B. Tất cả dữ liệu tự chuyển thành AI chatbot.  
C. Dữ liệu nhất thiết phải là SQL.  
D. Nhà cung cấp quản lý dịch vụ instance; ứng dụng vẫn phải cấu hình kết nối và bảo mật.

**Đáp án:** D. **Giải thích:** Cloud giảm công sức vận hành hạ tầng, không loại bỏ nhu cầu quản trị ứng dụng.

**Câu 5.** Tại sao nên dùng `.env` cho script nạp tài liệu?

A. Để tách cấu hình/khóa khỏi mã nguồn và hạn chế lộ bí mật.  
B. Vì mọi tập JSON bắt buộc là biến môi trường.  
C. Để trình duyệt tự biết Admin key.  
D. Vì `.env` là hệ quản trị cơ sở dữ liệu.

**Đáp án:** A. **Giải thích:** `.env` giúp quản lý cấu hình riêng, nhưng vẫn cần giữ tệp ở nơi an toàn.
