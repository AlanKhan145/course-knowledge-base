---
title: "Bài 04 — Embedding và lập chỉ mục schema với Chroma"
course: "Text-to-SQL với RAG, Chroma, LangChain, FastAPI và Streamlit"
lesson_number: 4
language: vi
---

# Bài 04 — Embedding và lập chỉ mục schema với Chroma

> **Tóm tắt:** Biến các mô tả schema thành vector số, lưu trong Chroma và truy xuất theo độ tương đồng.

## 1. Mục tiêu học tập

- Giải thích cơ chế embedding và similarity search.
- Tạo được kế hoạch indexing metadata bảng.
- Đánh giá được trường hợp cần tái lập chỉ mục khi schema đổi.

## 2. Kiến thức và nguyên lý

### 2.1. Embedding là gì?

**Embedding** chuyển văn bản thành vector số sao cho hai chuỗi có ý nghĩa gần nhau thường nằm gần nhau trong không gian biểu diễn. Chẳng hạn “món có mì” và “món dùng nguyên liệu mì” có thể cùng liên quan tới mô tả `dish_ingredients`.

Embedding không phải công cụ xác nhận khóa ngoại hay phân tích logic phủ định. Vì thế kết quả similarity search chỉ là ứng viên ngữ cảnh cho bước tạo SQL.

### 2.2. Khởi tạo vector store

Một lựa chọn là `HuggingFaceEmbeddings` kết hợp `Chroma`. Ví dụ sau minh họa cách index một document thủ công; máy cần tải embedding model phù hợp khi chạy lần đầu.

```python
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.documents import Document

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)
store = Chroma(
    collection_name="recipe_schema",
    embedding_function=embeddings,
    persist_directory="./chroma_db"
)
store.add_documents([
    Document(
        page_content=(
            "Bảng dish_ingredients: liên kết món và nguyên liệu; "
            "dish_id -> dishes.id; ingredient_id -> ingredients.id"
        ),
        metadata={"table": "dish_ingredients"},
    )
], ids=["schema_dish_ingredients"])
```

Thao tác thực tế cần xử lý tài liệu đã tồn tại, cập nhật theo ID ổn định và chống tạo trùng. Phần code mẫu trong thư mục `demo/` minh họa làm mới toàn bộ index cho dữ liệu demo.

### 2.3. Truy xuất khi nhận câu hỏi

```python
hits = store.similarity_search("Món có mì", k=3)
for doc in hits:
    print(doc.metadata, doc.page_content)
```

Tăng `k` không đồng nghĩa luôn tốt hơn: context có thể thừa và làm lẫn bảng. Với câu hỏi nhiều bảng, có thể bổ sung các bảng nối kề với bảng được tìm thấy dựa trên foreign key.

### 2.4. Các điểm cần kiểm chứng

- Chọn embedding model xử lý tiếng Việt/ngôn ngữ truy vấn phù hợp.
- Dùng **cùng một model** cho indexing và truy vấn, tránh không gian vector không tương thích.
- Theo dõi `schema_version` hoặc hash của metadata.
- Không index dữ liệu nhạy cảm, nội dung người dùng riêng tư hoặc mọi dòng dữ liệu nếu không cần.
- Khi schema thay đổi, làm mới tài liệu và vector tương ứng.

Chroma là lựa chọn dễ thử nghiệm tại máy cá nhân. Với hệ thống lớn hơn, có thể đánh giá dịch vụ như Pinecone hoặc Qdrant, nhưng không cần đổi công cụ trước khi đo được nút thắt.

## 3. Thực hành ngắn

Chạy đoạn indexing mẫu, thử 3 câu hỏi về món, nguyên liệu và thời gian nấu. Ghi lại các document đứng đầu, giải thích khi retrieval thiếu bảng trung gian.

## 4. Tổng kết

Embedding giúp truy xuất theo ngữ nghĩa; Chroma lưu và tìm vector. Cần giám sát chất lượng truy xuất và đồng bộ schema để tránh sinh SQL trên metadata cũ.

## 5. Câu hỏi ôn tập

### Câu 1

Embedding thường dùng để làm gì trong khóa học này?

A. Tính thuế  
B. Biểu diễn mô tả schema bằng vector  
C. Khởi động FastAPI  
D. Thực thi SQL  

**Đáp án:** B. **Giải thích:** Vector giúp tìm tài liệu metadata có ý nghĩa gần câu hỏi.

### Câu 2

Hai giai đoạn index và hỏi nên dùng model embedding thế nào?

A. Dùng hai model tùy ý  
B. Không cần embedding khi hỏi  
C. Dùng cùng một model tương thích  
D. Dùng model sinh SQL thay thế  

**Đáp án:** C. **Giải thích:** Chung không gian biểu diễn là điều kiện quan trọng của similarity search.

### Câu 3

`persist_directory` của Chroma dùng cho mục đích nào?

A. Lưu index tại thư mục cục bộ  
B. Đặt tên API route  
C. Tạo SQL LIMIT  
D. Đổi encoding SQLite  

**Đáp án:** A. **Giải thích:** Chroma có thể lưu dữ liệu vector trên ổ đĩa.

### Câu 4

Sau khi thêm một cột mới, cần làm gì để RAG nhận biết?

A. Bỏ qua vì vector tự cập nhật  
B. Đổi màu giao diện  
C. Chỉ tải lại trang web  
D. Đồng bộ lại document/index liên quan  

**Đáp án:** D. **Giải thích:** Vector schema chỉ phản ánh nội dung lúc tạo hoặc cập nhật.

### Câu 5

Nếu truy vấn nhiều bảng, cách xử lý bổ sung hợp lý là gì?

A. Xóa foreign key  
B. Mở rộng context theo quan hệ khóa ngoại  
C. Luôn chỉ lấy một bảng  
D. Tạo dữ liệu mẫu bịa đặt  

**Đáp án:** B. **Giải thích:** Bổ sung bảng kề giúp giữ đủ đường JOIN.
