# Bài 1 - Text embedding và bài toán mà M3-Embedding giải quyết

## 1. Mục tiêu bài học

Sau bài này, bạn cần hiểu text embedding đang đóng vai trò gì trong information retrieval và vì sao tác giả cho rằng các embedding model trước đó thiếu tính linh hoạt.

## 2. Text embedding trong retrieval

Một text encoder biến văn bản thành biểu diễn trong **latent space**. Trong không gian này, quan hệ ngữ nghĩa giữa query và passage/document được biểu diễn thông qua các vector hoặc các đặc trưng sinh ra từ hidden states. Retrieval dựa trên embedding vì thế chuyển một phần bài toán “hai đoạn văn có liên quan không?” thành bài toán tính **relevance score**.

Paper phân biệt ba dạng retrieval quan trọng:

- **Dense retrieval**: mỗi query/document chủ yếu được đại diện bởi một vector tổng hợp, sau đó tính độ tương đồng.
- **Sparse/lexical retrieval**: mô hình học trọng số cho token/term và đối sánh theo các term xuất hiện ở cả query lẫn passage.
- **Multi-vector retrieval**: giữ nhiều embedding theo token và cho chúng tương tác chi tiết ở giai đoạn tính điểm.

Trước M3, các chức năng này thường được hiện thực bởi các model riêng biệt. Điều này làm pipeline retrieval trở nên phân mảnh: một model cho dense candidate retrieval, một cơ chế khác cho lexical, một model khác cho fine-grained reranking.

## 3. Ba giới hạn mà M3 nhắm đến

### 3.1 Giới hạn ngôn ngữ

Nhiều embedding model mạnh tập trung vào tiếng Anh. M3 đặt mục tiêu hỗ trợ **hơn 100 ngôn ngữ**, đồng thời học một không gian ngữ nghĩa chung để phục vụ cả:

- multilingual retrieval: query và tài liệu cùng ngôn ngữ;
- cross-lingual retrieval: query và tài liệu khác ngôn ngữ.

### 3.2 Giới hạn chức năng retrieval

Một model chỉ tối ưu cho dense retrieval không trực tiếp cung cấp lexical weights hay token-level late interaction. M3 chủ động thiết kế cùng một encoder để tạo ra ba loại tín hiệu: dense, sparse và multi-vector.

### 3.3 Giới hạn độ dài đầu vào

Train với chuỗi dài rất tốn bộ nhớ và compute. Nếu chỉ cắt ngắn dữ liệu để giữ throughput cao, model khó học long-document retrieval. M3 đặt mục tiêu xử lý từ câu ngắn, passage cho tới document dài **tối đa 8192 tokens**.

## 4. M3 = Multi-Linguality + Multi-Functionality + Multi-Granularity

![Ba trục của M3-Embedding](../assets/01_m3_three_dimensions.png)

Hình trên cô đọng triết lý thiết kế của paper:

| Trục | Ý nghĩa trong M3 |
|---|---|
| Multi-Linguality | 100+ ngôn ngữ; multilingual và cross-lingual |
| Multi-Functionality | dense, sparse, multi-vector retrieval |
| Multi-Granularity | sentence, passage, document tới 8192 tokens |

Điểm quan trọng là ba trục này không được xử lý như ba dự án riêng. Paper cố gắng tạo **một embedding model thống nhất**, sau đó dùng chiến lược training và batching để làm các mục tiêu hỗ trợ lẫn nhau.

## 5. Ba đóng góp kỹ thuật trung tâm

Paper nhấn mạnh ba nhóm đóng góp:

1. **Self-knowledge distillation**: tích hợp relevance score của các retrieval function để tạo teacher signal cho chính model.
2. **Efficient batching**: giảm padding, chia batch dài thành sub-batch, gradient checkpointing và broadcast embedding giữa GPU để giữ batch lớn.
3. **Data curation chất lượng cao**: kết hợp unsupervised multilingual data, supervised fine-tuning data và synthetic long-document data.

## 6. Mô hình tư duy cho toàn khóa học

Có thể xem toàn bộ hệ thống như chuỗi sau:

```text
Dữ liệu đa ngôn ngữ + dữ liệu dài
          ↓
Text encoder chung
          ↓
Dense score ─┐
Sparse score ├─> Integrated score ─> Hybrid retrieval
Multi-vec ───┘          │
                         └─> Teacher cho self-distillation
          ↑
Efficient batching giúp train được batch lớn + sequence dài
```

Đây là khung nên giữ trong đầu khi đọc các bài sau: **dữ liệu**, **representation**, **score**, **loss**, **batching**, **evaluation**.

## 7. Tự kiểm tra

1. Vì sao long-document retrieval tạo mâu thuẫn với mong muốn dùng batch lớn?
2. Multi-functionality của M3 có nghĩa là model có ba encoder độc lập hay một encoder cho nhiều loại score?
3. Cross-lingual retrieval khác multilingual retrieval ở điểm nào?
4. Ba đóng góp kỹ thuật chính của paper là gì?
