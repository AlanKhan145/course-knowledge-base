# Chunk tài liệu và kiến trúc dữ liệu

> **Tóm tắt:** Chunk chia tài liệu thành đơn vị truy xuất có ngữ cảnh; một chunk tốt bao gồm nội dung và metadata đủ để nhận diện nguồn.

## 1. Mục tiêu học tập

- Mô tả được lý do phân đoạn tài liệu.
- Thiết kế cấu trúc content/metadata có breadcrumb.
- Phân tích trade-off của chunk quá dài hoặc quá ngắn.

## 2. Bài toán phân đoạn

Báo cáo dài có nhiều chủ đề: kết quả kinh doanh, doanh thu trung tâm dữ liệu, rủi ro vận hành. Nếu tìm cả tài liệu, câu trả lời phải sàng lọc nhiều đoạn nhiễu. Chunking tách tài liệu thành những đơn vị có thể tìm kiếm, đánh giá độ liên quan và đưa vào context LLM.

Một `chunk` không chỉ là số ký tự cố định. Với Markdown có cấu trúc, có thể ưu tiên cắt theo heading, sau đó giới hạn độ dài. Tránh cắt đứt giữa bảng dữ liệu và tiêu đề giải thích.

## 3. Thiết kế cấu trúc chunk

Ví dụ một bản ghi JSON dùng làm đầu vào ingestion:

```json
{
  "content": "The company reported record quarterly revenue.",
  "metadata": {
    "source": "report.md",
    "title": "Quarterly Results",
    "breadcrumb": ["Financials", "Quarterly Results"],
    "chunk_index": 3
  }
}
```

`content` là văn bản cần embedding; `metadata` lưu nguồn, tiêu đề, breadcrumb và có thể thêm ngày, loại tài liệu, trang. Breadcrumb phản ánh phân cấp tài liệu, ví dụ `Annual Report > Segment Performance > Data Center`. Nếu một phép gọi cần trích dẫn, metadata giúp dẫn lại vị trí nguồn.

## 4. Contextual enrichment và token budget

Có thể thêm một câu mô tả ngữ cảnh vào chunk trước khi embedding khi đoạn văn quá mơ hồ. Tuy nhiên không nên để câu ngữ cảnh mang nội dung chưa kiểm chứng hoặc thay thế văn bản nguồn. Video sử dụng chunk trung bình khoảng 1.100 token trong tập minh họa; đó là **quan sát cho dữ liệu của tác giả**, không phải giá trị tối ưu cố định.

Chunk quá ngắn dễ mất ý; chunk quá dài trộn nhiều ý khiến retrieval kém chính xác và tăng chi phí embedding. Dữ liệu production cần đánh giá kích thước trên tập câu hỏi thực tế.

## 5. Thực hành và tự kiểm tra

Tạo 3 chunk giả định từ một báo cáo có 2 đề mục, mỗi chunk có `content` khác rỗng, `source`, `title`, `breadcrumb`, `chunk_index`. Tự kiểm tra xem người khác có thể truy lại tiêu đề phần gốc chỉ từ metadata hay không.

## 6. Câu hỏi ôn tập

### Câu 1

Trường nào lưu văn bản được nhúng?

A. source  
B. embedding  
C. content  
D. id  

**Đáp án:** C

**Giải thích:** Mô hình embedding nhận nội dung văn bản.

### Câu 2

Breadcrumb hữu ích nhất để làm gì?

A. Xác định cấu trúc đường dẫn đề mục  
B. Mã hóa khóa API  
C. Tăng RAM  
D. Chuyển SQL thành JSON  

**Đáp án:** A

**Giải thích:** Breadcrumb cung cấp vị trí phân cấp của đoạn.

### Câu 3

Điều gì có thể xảy ra khi chunk quá dài?

A. Không thể lưu JSON  
B. Mất toàn bộ metadata  
C. HNSW tự xóa  
D. Nhiều chủ đề bị trộn vào một kết quả  

**Đáp án:** D

**Giải thích:** Một vector phải biểu diễn quá nhiều ý.

### Câu 4

Vì sao nên lưu source trong metadata?

A. Để thay thế embedding  
B. Để truy nguồn và dẫn chứng  
C. Để tạo index tự động  
D. Để tránh Docker  

**Đáp án:** B

**Giải thích:** Nguồn giúp kiểm tra bằng chứng khi retrieval.

### Câu 5

1.100 token có phải mức bắt buộc?

A. Có  
B. Là độ dài PostgreSQL tối đa  
C. Không, phụ thuộc tài liệu và mục tiêu  
D. Chỉ áp dụng cho ảnh  

**Đáp án:** C

**Giải thích:** Con số này là quan sát của ví dụ, không phải chuẩn chung.

## 7. Tổng kết

Chunk chia tài liệu thành đơn vị truy xuất có ngữ cảnh; một chunk tốt bao gồm nội dung và metadata đủ để nhận diện nguồn. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
