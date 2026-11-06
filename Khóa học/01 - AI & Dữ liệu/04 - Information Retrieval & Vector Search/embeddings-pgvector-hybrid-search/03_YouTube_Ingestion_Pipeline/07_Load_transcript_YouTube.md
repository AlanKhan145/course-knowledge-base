# Dùng YoutubeLoader để lấy transcript và metadata

> **Khóa học:** YouTube Conversational RAG · **Bài 07/20** · **Module:** Nạp transcript, chunking và embeddings

## Tóm tắt

Giai đoạn ingestion biến URL YouTube thành đối tượng Document dùng chung trong LangChain.

## Mục tiêu học tập

- Kiểm tra URL và nêu giới hạn của transcript.
- Tải được Document gồm pageContent và metadata.
- Xử lý rõ các trường hợp không có phụ đề.

## 1. Từ URL đến Document

Một `Document` của LangChain thường có hai phần: `pageContent` là nội dung văn bản, `metadata` là thông tin mô tả. Với YouTube, `pageContent` thường là transcript; `metadata` có thể chứa video ID, title, description, author, tùy dữ liệu mà loader lấy được.

**Không phải video nào cũng có transcript truy cập được.** Video bị hạn chế quyền xem, video có phụ đề không hỗ trợ, mạng bị chặn hoặc loader thay đổi API có thể làm `load()` thất bại. Ingestion phải thể hiện lỗi cho người dùng thay vì ghi document rỗng vào vector store.

## 2. Kiểm tra link YouTube

Ví dụ hàm kiểm tra host hợp lệ trước khi tạo loader:

```ts
export function assertYoutubeUrl(value: string): string {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Invalid protocol');
  const host = url.hostname.toLowerCase();
  if (!['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'].includes(host)) {
    throw new Error('Only YouTube URLs are supported');
  }
  return url.toString();
}
```

Đây là lớp validation ban đầu. Ở production, tránh mở rộng thành tải URL bất kỳ vì có nguy cơ SSRF khi backend truy cập tài nguyên nội bộ.

## 3. Nạp dữ liệu bằng LangChain

```ts
import { YoutubeLoader } from '@langchain/community/document_loaders/web/youtube';

export async function loadYoutube(url: string) {
  const loader = YoutubeLoader.createFromUrl(url, {
    language: 'en',
    addVideoInfo: true,
  });
  const docs = await loader.load();
  if (!docs.length || !docs[0].pageContent.trim()) {
    throw new Error('Transcript not available');
  }
  return docs;
}
```

Tùy video, giá trị `language` có thể cần thay đổi hoặc bỏ đi. **Không** tự giả định phụ đề tiếng Việt luôn sẵn có. `addVideoInfo: true` đề nghị lấy title và thông tin mô tả; metadata thực tế phải được kiểm tra chứ không mặc định field nào cũng có.

## 4. Khám phá dữ liệu trả về

Trong giai đoạn phát triển, không cần log toàn bộ transcript dài hoặc thông tin nhạy cảm. Nên quan sát những trường cần thiết:

```ts
const docs = await loadYoutube(url);
console.log({
  count: docs.length,
  length: docs[0].pageContent.length,
  title: docs[0].metadata.title,
  source: docs[0].metadata.source,
});
```

Nếu transcript dài nhưng không có title, có thể dùng tiêu đề dự phòng từ document record. Nếu có metadata không ổn định, normalize về schema do ứng dụng kiểm soát: `source_type`, `source_url`, `video_id`, `title`, `document_id`, `chunk_index`.

## 5. Chống nhập trùng (mở rộng)

Rút ra `video_id` và ghi vào documents; trước khi tạo embedding mới, kiểm tra video đã `ready` chưa. Có thể cho người dùng tạo conversation mới và liên kết vào document cũ. Khi ingest đồng thời, cần unique constraint phù hợp và cơ chế idempotency để ngăn hai tiến trình cùng xử lý một video.

## 6. Lab kiểm tra

Thử ba liên kết: video có transcript, video không có phụ đề phù hợp và URL không thuộc YouTube. Ghi lại status HTTP mong muốn và dữ liệu database sau mỗi trường hợp. Kết quả đúng: chỉ video hợp lệ, tải được transcript mới tiến vào bước chunking.

## 7. Tổng kết

Chất lượng của RAG bắt đầu từ **nguồn dữ liệu**. Loader là điểm kết nối, không phải bảo đảm tuyệt đối rằng YouTube luôn cung cấp transcript chuẩn xác và đầy đủ.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Trường nào chứa transcript trong LangChain Document?

A. metadata  
B. pageContent  
C. embedding  
D. role  

**Đáp án:** B. **Giải thích:** pageContent lưu nội dung chính.

### Câu 2

Nếu video không có transcript truy cập được nên làm gì?

A. Ghi vector toàn số 0  
B. Tự nhận là thành công  
C. Báo lỗi trạng thái xử lý  
D. Lấy nội dung chat history thay thế  

**Đáp án:** C. **Giải thích:** Không tạo nguồn tri thức giả.

### Câu 3

`addVideoInfo: true` nhằm làm gì?

A. Bật RLS  
B. Bật streaming  
C. Chuyển tiếng nói thành video  
D. Lấy thêm metadata video khi khả dụng  

**Đáp án:** D. **Giải thích:** Title/description giúp tăng ngữ cảnh.

### Câu 4

Vì sao phải validate hostname URL?

A. Hạn chế link ngoài phạm vi và rủi ro SSRF  
B. Để sinh UUID  
C. Để chọn top-k  
D. Để ngăn trùng message  

**Đáp án:** A. **Giải thích:** Không được để backend fetch URL tùy ý.

### Câu 5

Một video nhập lại nên tối ưu theo hướng nào?

A. Xóa lịch sử chat  
B. Tái sử dụng document đã index nếu phù hợp  
C. Luôn tạo vector mới  
D. Gửi toàn transcript mỗi lần  

**Đáp án:** B. **Giải thích:** Tái sử dụng giảm số lượt embedding không cần thiết.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
