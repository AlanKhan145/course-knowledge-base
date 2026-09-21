# 010 - Đánh giá: RAG với Vector Stores

## 1. Hướng dẫn

Bài đánh giá kiểm tra khả năng áp dụng các khái niệm:

- RAG pipeline;
- `TextLoader`;
- `RecursiveCharacterTextSplitter`;
- `OpenAIEmbeddings`;
- vector store;
- ingestion;
- naive retrieval;
- 2-step RAG.

Không sử dụng tài liệu trong phần đầu. Sau khi hoàn thành, có thể quay lại ghi chú để tự kiểm tra.

## 2. Phần A - Câu hỏi khái niệm

1. RAG giải quyết vấn đề gì khi LLM cần trả lời từ một tài liệu dài hoặc dữ liệu riêng tư?
2. Nêu bốn hạn chế của cách đưa toàn bộ tài liệu vào prompt.
3. Phân biệt retrieval, augmentation và generation.
4. `TextLoader` giải quyết trách nhiệm gì?
5. Vì sao cần text splitter trước khi embedding tài liệu lớn?
6. `chunk_size` quá nhỏ có thể gây hậu quả gì?
7. `chunk_overlap` có thể giúp giữ ngữ cảnh như thế nào?
8. Embedding khác với vector store ở điểm nào?
9. Metadata nguồn có ích gì trong hệ thống RAG?
10. `k` trong retriever ảnh hưởng đến context như thế nào?

## 3. Phần B - Sắp xếp pipeline

Sắp xếp các bước sau theo đúng thứ tự cho ingestion:

- lưu vào vector store;
- tải tài liệu;
- tạo embedding;
- chia thành chunk.

Sau đó sắp xếp các bước query-time:

- tạo câu trả lời;
- nhúng câu hỏi;
- truy xuất top-k chunk;
- ghép context vào prompt.

## 4. Phần C - Phân tích lỗi

Một hệ thống trả lời sai. Retriever trả về ba chunk không liên quan tới câu hỏi.

Hãy trả lời:

1. Có nên sửa prompt trước không? Giải thích.
2. Ba vị trí nào trong pipeline cần kiểm tra?
3. Bạn cần log dữ liệu gì để xác định nguyên nhân?

## 5. Phần D - Bài thực hành

Xây dựng một RAG mini pipeline cho một tệp văn bản.

Yêu cầu:

1. load tài liệu;
2. chia thành chunk;
3. giữ metadata nguồn;
4. tạo embedding;
5. lưu vào vector store;
6. tạo retriever;
7. truy xuất context cho một câu hỏi;
8. ghép context với câu hỏi;
9. gọi LLM;
10. ghi lại output của từng checkpoint.

## 6. Tiêu chí chấm

- Hiểu đúng kiến trúc: 30%.
- Giải thích rõ data flow: 25%.
- Phân tích lỗi có hệ thống: 20%.
- Bài thực hành chạy đúng các stage: 25%.

## 7. Điều kiện hoàn thành

- [ ] Trả lời toàn bộ phần A.
- [ ] Sắp xếp đúng hai pipeline ở phần B.
- [ ] Phân tích lỗi theo dữ liệu ở phần C.
- [ ] Hoàn thành bài thực hành phần D.
- [ ] Không bỏ qua kiểm tra retrieval output trước khi đánh giá câu trả lời cuối.
