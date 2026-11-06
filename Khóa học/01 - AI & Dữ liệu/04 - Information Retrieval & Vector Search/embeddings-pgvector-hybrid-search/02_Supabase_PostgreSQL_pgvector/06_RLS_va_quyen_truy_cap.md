# Supabase keys, Row Level Security và ranh giới tin cậy

> **Khóa học:** YouTube Conversational RAG · **Bài 06/20** · **Module:** Thiết kế cơ sở dữ liệu và vector search

## Tóm tắt

RLS là lớp bảo mật thiết yếu khi người dùng truy cập Supabase; service key có quyền cao và phải giữ ở backend.

## Mục tiêu học tập

- Phân biệt public publishable/anon key với secret/service-role key.
- Giải thích cách RLS tác động tới CRUD.
- Nhận diện được rủi ro để lộ khóa hoặc cho client ghi trực tiếp.

## 1. Hai loại khóa không thể dùng lẫn nhau

Khóa public (`anon` trong nhiều project cũ, `publishable` trong giao diện mới) có thể tồn tại ở client; **không phải** vì vậy mà có quyền đọc toàn database. Quyền thực sự phải đi qua Postgres RLS và danh tính phiên đăng nhập. Ngược lại, `service_role`/secret key dành cho server, thường có khả năng vượt qua RLS và thao tác dữ liệu rộng hơn.

Trong ứng dụng minh họa, backend Node giữ `SUPABASE_SECRET_KEY`; trình duyệt chỉ gọi API backend. Kiến trúc này cũng làm đơn giản phần kiểm soát đầu vào, rate limit và xác nhận ownership.

## 2. RLS hoạt động như thế nào?

Sau khi bật RLS, truy vấn từ các role client không được tự do đọc/ghi mọi hàng. Policy có thể ràng buộc `owner_user_id = auth.uid()` để mỗi người chỉ thấy dữ liệu của mình. Không có policy phù hợp, thao tác client bị từ chối dù mã JavaScript `insert()` hợp lệ.

```sql
alter table public.conversations enable row level security;
alter table public.documents enable row level security;
alter table public.conversation_documents enable row level security;
alter table public.conversation_messages enable row level security;
alter table public.document_embeddings enable row level security;
```

Đây **chưa** phải thiết lập public multi-user hoàn chỉnh. Với app thật, thêm cột `owner_user_id` cho dữ liệu người dùng, cấu hình Supabase Auth/JWT và policy trên tất cả bảng, kể cả RPC. Không vô hiệu hóa RLS để chữa lỗi `permission denied`.

## 3. Ba kịch bản cần phân biệt

| Trường hợp | Cách xử lý |
| --- | --- |
| Browser gọi API Node | Node xác thực user/session và kiểm tra ACL; khóa Supabase ở server |
| Browser gọi Supabase bằng public key | Bật RLS và viết policy dựa trên `auth.uid()` |
| Công việc background dùng secret key | Không đưa secret vào browser, log, repo hoặc đường link |

Với lab chỉ chạy ở localhost, có thể chưa hoàn thiện Auth. Tuy nhiên **không được public deployment** khi route trả dữ liệu theo ID tùy ý mà chưa xác thực và kiểm tra quyền.

## 4. Ví dụ quy tắc ownership (mẫu mở rộng)

Giả sử `conversations.owner_user_id uuid not null` đã được bổ sung và điền dữ liệu đúng:

```sql
create policy "read own conversations"
on public.conversations for select to authenticated
using (owner_user_id = auth.uid());
```

Chính sách này chưa tự động bảo vệ `conversation_messages`; các bảng con cần policy riêng có thể kiểm tra `exists` trên conversation mẹ. Đặc biệt phải bảo vệ các RPC `security definer` (nếu dùng) tránh bypass quyền sở hữu.

## 5. Checklist an toàn

- Không commit `.env` chứa secret.
- Chỉ trả cho web `id`, `status` và dữ liệu đã qua kiểm tra quyền.
- Giới hạn kích thước JSON body, timeout và số câu hỏi/phút.
- Kiểm tra URL thuộc YouTube hoặc youtu.be; tránh fetch tùy ý đến mạng nội bộ.
- Tài liệu bên ngoài là dữ liệu không đáng tin: prompt có thể chứa nội dung cố tình “bỏ qua chỉ dẫn”.

## 6. Thực hành

Thử bật RLS, gọi thao tác từ `anon` role không có policy và quan sát lỗi. Sau đó tạo policy dành cho test user có session thực, xác minh người dùng A không đọc được conversation của B.

## 7. Tổng kết

RLS và quyền ứng dụng là điều kiện để đưa hệ thống lên Internet an toàn. Bản demo có thể lược Auth; nhưng phải giữ server secret và không mở các API dữ liệu vô bảo vệ ra công khai.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Khóa nào có thể xuất hiện công khai ở browser kèm RLS đúng?

A. service_role key  
B. Supabase public/anon key  
C. Database password  
D. OPENAI_API_KEY  

**Đáp án:** B. **Giải thích:** Public key được thiết kế dùng phía client cùng policy.

### Câu 2

RLS làm gì?

A. Tăng tốc GPU  
B. Tạo embedding  
C. Giới hạn truy cập theo hàng  
D. Stream video  

**Đáp án:** C. **Giải thích:** Policy quyết định hàng nào được đọc/ghi.

### Câu 3

Giải pháp đúng khi client báo lỗi do thiếu policy?

A. Tắt RLS trên production  
B. Đưa service key vào browser  
C. Bỏ kiểm tra ownership  
D. Viết policy phù hợp và kiểm tra session  

**Đáp án:** D. **Giải thích:** Không bỏ bảo mật để làm CRUD thành công.

### Câu 4

Thành phần nào phải giữ OpenAI key?

A. Backend server  
B. React component  
C. Public asset  
D. File CSS  

**Đáp án:** A. **Giải thích:** API key nhạy cảm không được bundle.

### Câu 5

Khi route nhận document_id từ client cần làm gì?

A. Tin mọi ID  
B. Kiểm tra quyền và liên kết trước khi truy vấn  
C. Xóa toàn bộ metadata  
D. Thay bằng video khác  

**Đáp án:** B. **Giải thích:** Tránh truy cập dữ liệu không được phép.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
