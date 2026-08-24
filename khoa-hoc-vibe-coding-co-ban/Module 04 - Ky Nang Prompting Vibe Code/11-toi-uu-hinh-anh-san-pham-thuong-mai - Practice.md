# Bài 11: Thực Chiến Vibe Coding — Tạo Ứng Dụng Tối Ưu Hình Ảnh Sản Phẩm Thương Mại

## Mục Tiêu Bài Học

Sau bài này, bạn sẽ:

- Build được một ứng dụng phục vụ mục đích **thương mại thực tế**: tối ưu hình ảnh sản phẩm để bán hàng online.
- Biết cách viết **PRD** cho một app có xử lý ảnh — dạng bài toán phức tạp hơn flashcard hay to-do list.
- Hiểu cách chia nhỏ một tính năng lớn, ví dụ **xử lý ảnh**, thành các bước prompt dễ kiểm soát.

---

## 1. Bài Toán Thực Tế: Vì Sao Cần App Tối Ưu Ảnh Sản Phẩm?

Người bán hàng online thường gặp các vấn đề như:

- Ảnh chụp sản phẩm có nền lộn xộn.
- Ánh sáng không đều.
- Kích thước ảnh không đồng nhất giữa các sản phẩm.
- Ảnh nhìn thiếu chuyên nghiệp khi đăng lên sàn thương mại điện tử.

Một ứng dụng tối ưu ảnh sản phẩm có thể giúp người bán xử lý nhanh các vấn đề này mà không cần biết dùng Photoshop hay các công cụ chỉnh sửa ảnh phức tạp.

| Vấn đề thực tế | Chức năng app cần có |
|---|---|
| Nền ảnh lộn xộn, không chuyên nghiệp | Xóa hoặc thay nền ảnh sản phẩm |
| Kích thước ảnh không đồng nhất | Resize ảnh về tỉ lệ chuẩn, ví dụ vuông 1:1 |
| Ảnh chưa tối ưu độ sáng, độ tương phản | Chỉnh sáng và tương phản tự động |

---

## 2. Viết PRD Cho App Tối Ưu Ảnh Sản Phẩm

Dưới đây là PRD mẫu cho ứng dụng:

```text
# PRD: Công Cụ Tối Ưu Ảnh Sản Phẩm Thương Mại

## 1. Tổng quan

Ứng dụng web giúp người bán hàng online tải ảnh sản phẩm lên và tự động tối ưu để sẵn sàng đăng bán.

## 2. Đối tượng người dùng

Người bán hàng online, shop nhỏ, cá nhân kinh doanh không có kỹ năng chỉnh sửa ảnh chuyên nghiệp.

## 3. Vấn đề cần giải quyết

Ảnh sản phẩm tự chụp thường có nền lộn xộn, kích thước không đồng nhất, làm giảm độ chuyên nghiệp khi đăng bán.

## 4. Danh sách chức năng

- Tải ảnh sản phẩm lên từ máy tính.
- Xem trước ảnh gốc trước khi xử lý.
- Tự động cắt ảnh về khung vuông 1:1, chuẩn cho sàn thương mại điện tử.
- Tải xuống ảnh đã xử lý.

## 5. Yêu cầu giao diện

- Bố cục: khu vực tải ảnh lên bên trái, xem trước kết quả bên phải.
- Phong cách: tối giản, chuyên nghiệp, tông màu trung tính.

## 6. Tiêu chí hoàn thành

- Người dùng tải được ảnh lên.
- Người dùng xem trước được ảnh gốc.
- Ảnh được cắt về khung vuông 1:1.
- Người dùng tải xuống được ảnh đã xử lý.
````

---

## 3. Chia Nhỏ Bài Toán Trước Khi Prompt

Xử lý ảnh là bài toán phức tạp hơn các app đơn giản như to-do list hoặc flashcard. Vì vậy, không nên yêu cầu AI làm toàn bộ app trong một lần prompt.

Thay vào đó, hãy chia thành từng bước nhỏ, prompt lần lượt và kiểm tra sau mỗi bước.

```mermaid
flowchart TD
    A["Bước 1: Tạo giao diện tải ảnh lên và xem trước"] --> B["Kiểm tra: Ảnh tải lên có hiển thị đúng không?"]
    B --> C["Bước 2: Thêm chức năng cắt ảnh về khung vuông"]
    C --> D["Kiểm tra: Ảnh có được cắt đúng tỉ lệ 1:1 không?"]
    D --> E["Bước 3: Thêm nút tải xuống ảnh đã xử lý"]
    E --> F["Kiểm tra: File tải xuống có đúng ảnh đã xử lý không?"]
    F --> G["App hoàn chỉnh"]
```

---

## 4. Prompt Cho Từng Bước

### Bước 1 — Tạo Giao Diện Tải Ảnh

```text
Hãy build phần giao diện đầu tiên của ứng dụng web tối ưu ảnh sản phẩm:

- Có nút hoặc khu vực để kéo-thả hoặc chọn ảnh từ máy tính.
- Sau khi chọn ảnh, hiển thị ảnh xem trước ngay trên trang.
- Dùng HTML, CSS, JavaScript thuần.
```

### Bước 2 — Thêm Chức Năng Cắt Ảnh

```text
Dựa trên giao diện đã có, hãy thêm chức năng:

- Khi người dùng bấm nút "Cắt về khung vuông", ảnh được tự động cắt về tỉ lệ 1:1.
- Lấy phần trung tâm của ảnh gốc.
- Hiển thị kết quả sau khi cắt bên cạnh ảnh gốc để so sánh.
```

### Bước 3 — Thêm Chức Năng Tải Xuống

```text
Hãy thêm nút "Tải ảnh xuống" để người dùng lưu ảnh đã được cắt về máy tính dưới định dạng .jpg hoặc .png.
```

---

## 5. Vì Sao Nên Chia Nhỏ Thay Vì Prompt Một Lần?

| Prompt toàn bộ cùng lúc                                  | Prompt theo từng bước nhỏ                                           |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| Khó xác định lỗi nằm ở phần nào khi có sự cố             | Dễ khoanh vùng lỗi vì mỗi bước chỉ thêm một chức năng               |
| AI dễ bỏ sót chi tiết khi yêu cầu quá dài                | AI tập trung xử lý tốt hơn với yêu cầu ngắn, rõ ràng                |
| Khó kiểm tra từng phần trước khi đi tiếp                 | Có thể kiểm tra và xác nhận từng bước trước khi sang bước tiếp theo |
| Dễ sinh ra app nhìn có vẻ hoàn chỉnh nhưng lỗi chức năng | Dễ kiểm soát chất lượng từng phần của app                           |

---

## 6. Kết Quả Mong Đợi

Sau bài thực hành này, bạn sẽ có một ứng dụng web cơ bản cho phép:

* Tải ảnh sản phẩm lên.
* Xem trước ảnh gốc.
* Tự động cắt ảnh về khung vuông chuẩn 1:1.
* Tải ảnh đã xử lý xuống máy.
* Dùng thực tế cho việc đăng bán hàng online.

---

## Điều Cần Ghi Nhớ

* Với bài toán phức tạp hơn, như xử lý ảnh, nên viết PRD chi tiết trước khi bắt đầu.
* Không nên prompt toàn bộ app trong một lần nếu chức năng có nhiều bước xử lý.
* Hãy chia nhỏ yêu cầu thành các bước prompt tuần tự.
* Luôn kiểm tra từng bước hoạt động đúng trước khi chuyển sang bước tiếp theo.
* Chia nhỏ giúp dễ khoanh vùng lỗi và kiểm soát chất lượng sản phẩm tốt hơn.

---

## Tóm Tắt Bài Học

Bài này giúp bạn thực chiến với một bài toán thương mại thực tế: tạo ứng dụng tối ưu ảnh sản phẩm cho người bán hàng online.

Thông qua bài học, bạn không chỉ học cách tạo một app xử lý ảnh cơ bản, mà còn nắm được một kỹ thuật rất quan trọng trong Vibe Coding: **chia nhỏ yêu cầu phức tạp thành các bước prompt tuần tự, dễ kiểm soát**.

Trong bài tiếp theo, bạn sẽ tiếp tục hoàn chỉnh ứng dụng này với các tính năng nâng cao hơn để sẵn sàng đưa vào vận hành thực tế.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
