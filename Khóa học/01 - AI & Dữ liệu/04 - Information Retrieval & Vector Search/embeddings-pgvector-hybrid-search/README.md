# Khóa học Fullstack YouTube Conversational RAG

**Stack:** React + Vite + TypeScript · Node.js + Express · Supabase PostgreSQL + pgvector · LangChain.js · OpenAI

**Mục tiêu:** Dán URL video YouTube để trích xuất transcript, tạo vector embeddings, truy xuất theo câu hỏi và duy trì hội thoại streaming có ngữ cảnh.

## Lộ trình 7 module, 20 bài

### [01_Kien_truc_RAG_va_Thiet_lap](https://drive.google.com/drive/folders/15tR_H18se_47MGrjFtTKuHF-uDDh1Sce): Nền tảng RAG và chuẩn bị môi trường

- [Xây dựng ứng dụng trò chuyện với video YouTube bằng RAG](https://drive.google.com/file/d/1Hy99UR07eLY2XwJdjPcSw6M8TyDjfh1C/view)
- [RAG, embeddings và lý do phải truy xuất theo đoạn](https://drive.google.com/file/d/1RKMP67VGtPQGW6u_-7ncP7ouYMBCPnXC/view)
- [Thiết lập Node, React, biến môi trường và cấu trúc dự án](https://drive.google.com/file/d/1i-DHpA2BunrZrzh4rzI8-W-hB0Yr3i_i/view)

### [02_Supabase_PostgreSQL_pgvector](https://drive.google.com/drive/folders/1Zl71KCQmjhlo2UOkMizZYnvP5g_TM6a6): Thiết kế cơ sở dữ liệu và vector search

- [Thiết kế Supabase: conversations, documents và bảng nối](https://drive.google.com/file/d/17HrAA6y0nj_Gevp0JVojk2UKcg2E1GZO/view)
- [pgvector, cột embedding 3072 chiều và hàm match_documents](https://drive.google.com/file/d/130C11wulo5ICX9xS3CWxDJH4Lkadu-z1/view)
- [Supabase keys, Row Level Security và ranh giới tin cậy](https://drive.google.com/file/d/1MQ81TU0qw2Fk28b6cbwiDG4UPKyea1rC/view)

### [03_YouTube_Ingestion_Pipeline](https://drive.google.com/drive/folders/1G9VUnDq8ZtxBVFJN5e751cwgDtCE_afL): Nạp transcript, chunking và embeddings

- [Dùng YoutubeLoader để lấy transcript và metadata](https://drive.google.com/file/d/1MhZhylGnnEeundK2rZPGD9LqA7Xilp01/view)
- [Chia transcript thành chunks, giữ title và document_id](https://drive.google.com/file/d/1A_yrHX7w6L4Tp8pek6ftOpPwqBat8eGF/view)
- [Lưu chunks vào pgvector và xây API ingestion](https://drive.google.com/file/d/1uKeYcV7tI9MXhvsgdXIc5L99Cx9MabFG/view)

### [04_Conversation_Data_Model](https://drive.google.com/drive/folders/1mnpcJRbXiem75X3vP_Xk2sOF5dX6yb7t): Quản lý cuộc trò chuyện và lịch sử

- [Tạo conversation, document và liên kết nhiều-nhiều](https://drive.google.com/file/d/1h1IaygpHdPDwXpHziXLcb-xDeL4Tmiwm/view)
- [Lưu message và phục hồi lịch sử hội thoại](https://drive.google.com/file/d/1_2pLnd09BDapF8drNcRHkdJ3UEG0uono/view)

### [05_Retrieval_va_LangChain](https://drive.google.com/drive/folders/1lAaK33jw2YP7U36qLA5ElQlYpXDeU-gf): Truy xuất theo ngữ cảnh và sinh câu trả lời

- [Truy xuất top-k chunks theo video đã chọn](https://drive.google.com/file/d/16hg6gul4Pxnee67AM46S0W9cPlMHDKIU/view)
- [Viết lại câu hỏi theo lịch sử bằng History-Aware Retriever](https://drive.google.com/file/d/1W4oLNpEcI08ljtrw-2JzBlxyrAczN5th/view)
- [Kết hợp documents và LLM thành chuỗi RAG hỏi đáp](https://drive.google.com/file/d/1nT1kZapBAMwVHqUuaA0dMJy68lw4Upik/view)

### [06_React_Vite_va_Streaming](https://drive.google.com/drive/folders/1PGzauYcDkIZkjJW3RNLZnbv70W0iWh9H): Xây giao diện React và streaming

- [Streaming câu trả lời từ Node.js qua Server-Sent Events](https://drive.google.com/file/d/1znX9oG24S4Ao6KQc4DW89yRq8sZxE0mb/view)
- [Frontend React: form URL, trạng thái ingestion và màn hình chat](https://drive.google.com/file/d/1qgHLnn0_3yn1qyDAgW8hj9pzcmr6i-nL/view)
- [React: hiển thị tin nhắn và đọc SSE bằng ReadableStream](https://drive.google.com/file/d/1eXl3uYMxV_pZL1cWXiLAfXG4FiroebWf/view)

### [07_Testing_Security_Deployment](https://drive.google.com/drive/folders/15U_0FJ6Iq_8wa8ESA1Hoqs1Rx6Sff6HQ): Kiểm thử, bảo mật và triển khai

- [Kiểm thử E2E, chất lượng retrieval và khả năng chat tiếp nối](https://drive.google.com/file/d/1bUyYjlZVQxekKF6dbwh3Cnr_iXZeURvR/view)
- [Triển khai Vercel/Fly.io, Auth và các cải tiến production](https://drive.google.com/file/d/1z5L21RFFs6akuw7AS8A6qYmMlWiejd-l/view)
- [Capstone: hoàn thiện ứng dụng YouTube Conversational RAG](https://drive.google.com/file/d/1zU4MFF7rQyqSGJGdP7phMmDi4Sr4rh3q/view)

## Cách học và thực hành

1. Đọc và thực hành tuần tự từ module 01 đến 07. Mỗi bài có giải thích, code hoặc SQL, checkpoint và 5 câu trắc nghiệm giải thích đáp án.
2. Dùng một video có transcript có thể truy xuất; chuẩn bị OpenAI API key và Supabase project. Tài khoản provider có thể phát sinh chi phí.
3. Mô hình dữ liệu minh họa dùng embedding `text-embedding-3-large` (3072 chiều), `chunkSize=1000`, `chunkOverlap=200` và retrieval `k=5` để bắt đầu thử nghiệm; không khẳng định đây là cấu hình tối ưu.
4. Tự ghép các hàm vào backend/server và frontend theo các bài. Những điểm API LangChain có thể thay đổi đã được ghi chú.
5. **Không đưa secret key lên frontend và không public ứng dụng khi chưa có Auth/authorization.**

## Phạm vi và cải tiến

**Nội dung cốt lõi:** kiến trúc 3 phần, vector store, loader YouTube, chunking, document ID, chat/document many-to-many, lưu message history, history-aware retriever, RAG chain, SSE và React. **Phần biên soạn mở rộng:** cấu trúc SQL đầy đủ, best practices RLS/Auth, test harness, multi-video và triển khai production. Những con số thời gian trong demo không phải benchmark được bảo đảm.

## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
