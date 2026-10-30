# Bài 06. Lab: Kiểm thử Text-to-SQL từ đơn giản đến `JOIN` nhiều bảng

## 1. Tổng quan

Bài thực hành kiểm tra khả năng chuyển câu hỏi tự nhiên thành SQL và biến dữ liệu thực thành câu trả lời dễ hiểu. Các ca kiểm thử được sắp xếp theo độ khó tăng dần: lấy một cột, lấy nhiều cột, lọc theo ID, nối hai bảng và nối ba bảng.

## 2. Mục tiêu

Sau bài thực hành, bạn có thể:

- Chạy workflow trên cơ sở dữ liệu Chinook SQLite.
- So sánh SQL sinh ra với câu SQL tham chiếu.
- Phát hiện lỗi sai schema, khóa nối, điều kiện lọc và đầu ra tự nhiên.
- Ghi nhận sự khác biệt khi thay đổi LLM mà không suy diễn từ một vài ví dụ rằng mô hình nào luôn tốt hơn.

## 3. Chuẩn bị

1. Tải một bản SQLite của Chinook và làm việc trên **bản sao**.
2. Cài dependency theo `examples/requirements.txt`.
3. Thiết lập `OPENAI_API_KEY` và `OPENAI_MODEL` có quyền truy cập.
4. Chạy chương trình `examples/text_to_sql_demo.py` với câu hỏi được truyền bằng đối số dòng lệnh.
5. Lưu SQL được in ra để đối chiếu, không chỉ kiểm tra câu trả lời cuối.

Ví dụ lệnh, giả sử đã ở thư mục `examples/` và `Chinook.db` nằm tại đây:

```bash
python text_to_sql_demo.py "Cho tôi tên của 10 nghệ sĩ"
```

Nếu đường dẫn file ở nơi khác, thiết lập biến môi trường `CHINOOK_DB_PATH` trỏ tới vị trí thực tế. Các giá trị trả về có thể khác tùy bản Chinook được tải và cách sắp xếp truy vấn.

## 4. Các ca kiểm thử

### 4.1. Ca 1 — Một bảng, một cột

**Yêu cầu:** “Cho tôi tên của 10 nghệ sĩ.”

SQL tham chiếu:

```sql
SELECT Name FROM Artist ORDER BY ArtistId LIMIT 10;
```

**Checkpoint:** Truy vấn chỉ dùng `Artist.Name`, có giới hạn số dòng; câu trả lời không thêm nghệ sĩ không nằm trong kết quả.

### 4.2. Ca 2 — Một bảng, nhiều cột

**Yêu cầu:** “Cho tôi tên và mã của 10 nghệ sĩ.”

```sql
SELECT ArtistId, Name
FROM Artist
ORDER BY ArtistId
LIMIT 10;
```

**Checkpoint:** Hai cột được trả về đúng ý định. Không nhầm mã nghệ sĩ `ArtistId` với mã album `AlbumId`.

### 4.3. Ca 3 — Lọc theo khóa

**Yêu cầu:** “Cho tôi tối đa 10 album của nghệ sĩ có mã 1.”

```sql
SELECT AlbumId, Title
FROM Album
WHERE ArtistId = 1
ORDER BY AlbumId
LIMIT 10;
```

**Checkpoint:** Có thể không đủ 10 album; `LIMIT 10` là cận trên, không phải yêu cầu database tạo thêm dữ liệu. Câu trả lời phải phản ánh số hàng thực tế.

### 4.4. Ca 4 — Hai bảng, lọc theo tên

**Yêu cầu:** “Các album của nghệ sĩ Audioslave là gì?”

```sql
SELECT al.Title
FROM Album AS al
JOIN Artist AS ar ON al.ArtistId = ar.ArtistId
WHERE ar.Name = 'Audioslave'
ORDER BY al.Title;
```

**Checkpoint:** SQL có liên kết `Album.ArtistId = Artist.ArtistId`; điều kiện theo tên nằm ở bảng `Artist`.

### 4.5. Ca 5 — Ba bảng, `JOIN` đa cấp

**Yêu cầu:** “Các bài hát của nghệ sĩ Audioslave là gì?”

```sql
SELECT t.Name
FROM Track AS t
JOIN Album AS al ON t.AlbumId = al.AlbumId
JOIN Artist AS ar ON al.ArtistId = ar.ArtistId
WHERE ar.Name = 'Audioslave'
ORDER BY t.Name;
```

**Checkpoint:** Có đủ ba bảng và hai điều kiện nối đúng khóa. Không được tạo quan hệ giả `Track.ArtistId` nếu schema không có trường đó.

## 5. Đánh giá đúng hơn là chỉ nhìn câu SQL

Hai câu SQL khác nhau về cách viết nhưng có thể cho **cùng kết quả và cùng ý nghĩa**. Do đó cần đánh giá theo nhiều mức:

| Mức | Câu hỏi kiểm chứng |
| --- | --- |
| Cú pháp | SQL có chạy trên SQLite không? |
| Cấu trúc | Có dùng bảng và cột tồn tại không? |
| Logic | `JOIN`, `WHERE`, `LIMIT` có phản ánh yêu cầu không? |
| Kết quả | Dữ liệu có tương đương truy vấn tham chiếu trong điều kiện phù hợp không? |
| Trình bày | Câu trả lời có bám sát dữ liệu không? |
| An toàn | SQL và quyền thực thi có tuân thủ chính sách chỉ đọc không? |

Không chỉ so chuỗi SQL từng ký tự: bí danh, thứ tự `JOIN` hoặc khoảng trắng khác nhau vẫn có thể tương đương.

## 6. Phiếu kết quả thực hành

Sao chép bảng vào báo cáo cá nhân và điền sau khi thực nghiệm:

| Ca | SQL chạy được? | Đúng quan hệ? | Kết quả đúng? | Trả lời đúng dữ liệu? | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |

Nếu có điều kiện triển khai Qwen, hãy chạy cùng một bộ ca để so sánh số ca đạt và dạng lỗi. Để kết luận đáng tin, cần nhiều ca và nhiều lần lặp, chứ không chỉ một lượt chạy.

## 7. Khắc phục lỗi

- **Không thấy `Chinook.db`:** kiểm tra vị trí hiện tại, biến `CHINOOK_DB_PATH` và tên file.
- **Thiếu API key/model:** kiểm tra môi trường, quyền và tên model API.
- **Sinh tên cột sai:** in schema thực tế và đối chiếu cột từng bảng.
- **Lỗi `JOIN`:** vẽ đường khóa chính–khóa ngoại trước khi thay prompt.
- **Bị từ chối SQL:** kiểm tra xem truy vấn có vi phạm chính sách chỉ đọc hoặc nhiều câu lệnh; không tắt validator chỉ để “cho chạy qua”.
- **Câu trả lời có vẻ hợp lý nhưng sai:** chạy SQL tham chiếu trực tiếp, so kết quả thay vì tin vào lời kể của LLM.

## 8. Sản phẩm cần nộp

Một báo cáo Markdown có năm câu hỏi, SQL sinh bởi model, SQL tham chiếu, so sánh kết quả và nhận xét lỗi. Nếu thử hai mô hình, thêm bảng riêng cho kết quả từng mô hình và nêu rõ cấu hình chạy.

**Hoàn thành** khi tất cả ca đều được đánh giá bằng dữ liệu thực và bạn có thể giải thích hai liên kết trong ca `JOIN` ba bảng.

## 9. Câu hỏi ôn tập

### Câu 1

Nếu SQL dùng `LIMIT 10` nhưng chỉ trả về hai album thì suy luận đúng là gì?

A. Mô hình chắc chắn sai.  
B. Database phải tạo thêm tám album.  
C. Điều này có thể hoàn toàn đúng vì `LIMIT` là giới hạn trên.  
D. Phải thay bằng `DELETE`.

**Đáp án:** C. **Giải thích:** `LIMIT 10` không yêu cầu có đủ 10 bản ghi.

### Câu 2

Trong ca kiểm thử 4, điều kiện nào lọc nghệ sĩ theo tên?

A. `al.Title = 'Audioslave'`.  
B. `ar.Name = 'Audioslave'`.  
C. `t.Name = 'Audioslave'`.  
D. `ar.ArtistId = 'Audioslave'`.

**Đáp án:** B. **Giải thích:** Tên nghệ sĩ nằm ở `Artist.Name`.

### Câu 3

Vì sao không nên chỉ so khớp chuỗi SQL do model sinh với một truy vấn mẫu?

A. Vì SQL không thể so sánh bằng chuỗi.  
B. Vì SQL luôn trả về ngẫu nhiên.  
C. Vì chỉ cần đọc câu trả lời tự nhiên.  
D. Vì nhiều SQL khác cú pháp bề mặt vẫn có thể tương đương về ý nghĩa.

**Đáp án:** D. **Giải thích:** Cách đặt bí danh hay thứ tự trình bày có thể khác nhưng kết quả vẫn tương đương.

### Câu 4

Khi ca 5 trả về sai bài nhạc, kiểm tra ưu tiên là gì?

A. Hai cặp điều kiện khóa dùng cho `JOIN` và bộ lọc nghệ sĩ.  
B. Thêm ngay bảng bất kỳ để tăng số `JOIN`.  
C. Xóa database để dựng lại.  
D. Bỏ kết quả thật và hỏi LLM trí nhớ của nó.

**Đáp án:** A. **Giải thích:** Sai điều kiện nối hoặc lọc là nguyên nhân phổ biến khiến truy vấn đa bảng sai dữ liệu.

### Câu 5

Một lần chạy có đủ để khẳng định model A luôn tốt hơn model B không?

A. Có, nếu model A nhanh hơn.  
B. Có, nếu model A có nhiều tham số hơn.  
C. Không, cần tập kiểm thử rộng và kết quả lặp có kiểm soát.  
D. Có, nếu cả hai đều dùng SQL.

**Đáp án:** C. **Giải thích:** Chất lượng phụ thuộc câu hỏi, schema, cấu hình và biến động lần chạy.

## 10. Tổng kết

Kiểm thử Text-to-SQL phải đo cả **truy vấn**, **kết quả dữ liệu**, **phản hồi** và **an toàn**. Tăng dần độ khó từ một cột đến ba bảng giúp khoanh vùng lỗi và đánh giá khả năng hiểu schema của từng mô hình.
