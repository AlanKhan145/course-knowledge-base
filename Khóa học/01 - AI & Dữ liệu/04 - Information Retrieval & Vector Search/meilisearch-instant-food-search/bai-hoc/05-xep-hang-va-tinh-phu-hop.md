# Bài 05 — Xếp hạng kết quả, typo tolerance và độ liên quan

> **Loại:** Lesson · **Chủ đề:** Search relevance, searchable attributes, typo tolerance, filters.

## 1. Tóm tắt

Một hệ thống tìm kiếm tốt phải trả về **đúng nội dung** chứ không chỉ thật nhanh. Với truy vấn có nhiều kết quả, hệ thống cần quyết định nên xếp mục nào trước. Meilisearch cung cấp các quy tắc xếp hạng mặc định và cho phép cấu hình trường được tìm, trường được lọc và những tiêu chí liên quan khác.

## 2. Mục tiêu học tập

- Diễn giải vì sao hai kết quả đều khớp nhưng có thể đứng thứ tự khác nhau.
- Phân biệt `searchableAttributes`, `filterableAttributes` và dữ liệu hiển thị.
- Dự đoán giới hạn của typo tolerance và prefix search.
- Đề xuất được thử nghiệm giúp đo chất lượng tìm kiếm.

## 3. Độ liên quan khác với tốc độ

Giả sử tìm từ `space`. Một phim có **title** là `Space Adventure` thường có lý do để được ưu tiên hơn phim chỉ nhắc `space` một lần trong phần mô tả, nếu thứ tự `searchableAttributes` được thiết lập ưu tiên tên trước mô tả. Tuy vậy, thứ tự cuối cùng cũng phụ thuộc những quy tắc xếp hạng khác. Không nên mặc định một trường luôn chiến thắng mọi trường hợp.

Các yếu tố liên quan thường bao gồm số lượng từ khớp, lỗi đánh máy, độ gần nhau của các từ, mức ưu tiên của trường và đặc điểm khớp chính xác. Việc điều chỉnh ranking cần thử trên dữ liệu thực tế thay vì cảm tính.

## 4. Thiết lập những trường nào được tìm kiếm?

Ví dụ JavaScript (chạy phía server với key có quyền quản lý settings):

```javascript
const task = await client.index('movies').updateSearchableAttributes([
  'title',
  'overview',
  'genres',
]);
await client.waitForTask(task.taskUid);
```

Thứ tự `title`, `overview`, `genres` thể hiện chủ ý ưu tiên các trường đối với quy tắc xếp hạng dựa trên thuộc tính. Nếu để mọi thuộc tính tự động được search, những trường nội bộ hoặc chuỗi không hữu ích có thể tạo nhiễu.

### 4.1. Trường tìm kiếm khác trường lọc

Ví dụ muốn tìm phim có `Adventure` và năm phát hành gần đây. Trường `genres` hoặc `releaseYear` phải được khai báo `filterableAttributes` trước khi đưa vào biểu thức lọc:

```javascript
const task = await client.index('movies').updateFilterableAttributes([
  'genres', 'releaseYear'
]);
await client.waitForTask(task.taskUid);

const result = await client.index('movies').search('adventure', {
  filter: 'releaseYear >= 2020',
});
```

`searchableAttributes` quyết định phần dữ liệu nào có thể khớp với từ khóa; `filterableAttributes` xác định những trường có thể tham gia điều kiện như `releaseYear >= 2020`. Cả hai cần thiết lập hợp lý trước khi nạp tập lớn để tránh nhiều lần lập chỉ mục lại.

## 5. Tolerance và prefix

Meilisearch được thiết kế để chấp nhận **một số** lỗi đánh máy và truy vấn đang nhập dở. Tuy nhiên không phải mọi từ đều cho phép một lỗi; số lỗi được chấp nhận phụ thuộc độ dài token và cấu hình. Với mặc định thông dụng, các token ngắn dưới năm ký tự thường không được dung sai lỗi, còn từ dài hơn có giới hạn nhất định. Vì thế nhập `mì` bị gõ thiếu không thể mặc định vẫn tìm được như từ `adventure`.

**Thực hành đúng:** Hãy thử một tập truy vấn sai chính tả có kiểm soát, ví dụ `adventur`, `adveture`, `island` và so sánh với truy vấn chuẩn. Đừng cam kết rằng gõ sai bao nhiêu ký tự cũng được tìm ra.

### 5.1. Lưu ý về tiếng Việt

Tìm kiếm tiếng Việt cần kiểm thử cả từ có dấu, không dấu, viết liền/cách và các tên gọi biến thể: `mì` / `mi`, `bún bò` / `bun bo`, `mỳ` / `mì`. Các trường hợp này không nhất thiết tương đương chỉ vì engine hỗ trợ typo tolerance. Có thể cần chuẩn hóa dữ liệu, synonyms hoặc cách biểu diễn tên thay thế phù hợp. Hãy dựa trên kết quả kiểm thử phiên bản engine đang dùng.

## 6. Thiết kế bộ test độ liên quan

| Truy vấn | Ý định cần kiểm tra | Kết quả mong đợi ở data mẫu |
| --- | --- | --- |
| `space` | Khớp tên phim | `Space Adventure` |
| `island` | Khớp tên phim | `Lost Island` |
| `mì` trên `recipes` | Tên hoặc nguyên liệu | Các món có mì |
| `trứng` trên `recipes` | Mô tả/ingredient | Các món có trứng |
| `không-có-trong-data` | Empty state | Thông báo không tìm thấy |

Chấm theo các tiêu chí: **relevant top results**, **không bỏ sót tình huống quan trọng**, **hiển thị đúng trường** và **không trả dữ liệu cấm hiển thị**. Nên ghi lại truy vấn, top hits, tình huống lỗi và thay đổi settings trước/sau tinh chỉnh.

## 7. Tránh các tối ưu chưa có cơ sở

Không khẳng định tốc độ tìm kiếm của mọi hệ thống là 0,05 giây hoặc quota Cloud cố định. Thời gian thực tế phụ thuộc quy mô dữ liệu, tài nguyên, index settings, mạng và lưu lượng truy cập. Hãy đo latency, kiểm tra bộ dữ liệu gần thực tế và theo dõi lỗi của tác vụ indexing.

## 8. Thực hành ngắn

1. Dùng `npm run search -- "space"` và ghi lại vị trí của `Space Adventure`.
2. Đổi truy vấn thành `adventure`, `adventur`, `adveture` để quan sát prefix và typo behavior.
3. Với index `recipes`, tìm `trứng` và `mì`; phân tích tài liệu khớp theo `title`, `overview` hay `ingredients`.
4. Ghi rõ các truy vấn không có kết quả rồi đề xuất ít nhất một thay đổi về dữ liệu hoặc cấu hình.

## 9. Câu hỏi ôn tập

**Câu 1.** Muốn ưu tiên khớp từ trong `title` khi so sánh trường, nên làm gì?

A. Đổi chữ của HTML thành màu đỏ.  
B. Cấu hình thứ tự `searchableAttributes` hợp lý và kiểm thử ranking.  
C. Dùng master key ở trình duyệt.  
D. Xóa trường `overview` khỏi mọi bản ghi.

**Đáp án:** B. **Giải thích:** Thứ tự thuộc tính là một thành phần ảnh hưởng mức ưu tiên tìm kiếm.

**Câu 2.** Muốn dùng `filter: 'releaseYear >= 2020'`, điều kiện cần là gì?

A. `releaseYear` phải nằm trong `filterableAttributes`.  
B. Phải đặt tên index là `2020`.  
C. Chỉ được nhập phim sau năm 2020.  
D. Phải chạy trong HTML.

**Đáp án:** A. **Giải thích:** Meilisearch yêu cầu khai báo trường được phép lọc trước.

**Câu 3.** Vì sao từ `mì` gõ sai có thể không được sửa tự động?

A. Vì SQL không cho phép từ tiếng Việt.  
B. Vì chưa có thẻ `<title>`.  
C. Vì JSON bắt buộc viết hoa.  
D. Dung sai lỗi bị giới hạn, đặc biệt với token rất ngắn.

**Đáp án:** D. **Giải thích:** Các luật typo tolerance phụ thuộc độ dài từ và settings.

**Câu 4.** Người dùng tìm thấy 8 tài liệu nhưng 3 tài liệu đầu không liên quan. Nên ưu tiên kiểm tra yếu tố nào?

A. Màu nền website.  
B. Dung lượng ảnh đại diện.  
C. Trường searchable, dữ liệu và ranking.  
D. Tên file CSS.

**Đáp án:** C. **Giải thích:** Chất lượng kết quả phụ thuộc những trường được lập chỉ mục và cách xếp hạng.

**Câu 5.** Cách đánh giá typo tolerance hợp lý là gì?

A. Khẳng định luôn tìm đúng mọi lỗi.  
B. Kiểm thử nhiều truy vấn chuẩn/sai và ghi lại kết quả thực tế.  
C. Chỉ thử một truy vấn.  
D. Xóa toàn bộ dữ liệu JSON.

**Đáp án:** B. **Giải thích:** Cần đánh giá theo ngôn ngữ, phiên bản và loại truy vấn thực tế.

## 10. Tổng kết

Một chức năng tìm kiếm tốt là sự kết hợp của dữ liệu có cấu trúc, cấu hình fields phù hợp, ranking có kiểm thử và giao diện truyền đạt rõ kết quả. Typo tolerance hỗ trợ trải nghiệm, không thay thế hiểu biết về người dùng và tập dữ liệu.
