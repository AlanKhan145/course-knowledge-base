# Bài 05 — Xây dựng chain tóm tắt văn bản

## 1. Tóm tắt

Một ứng dụng tóm tắt cần nhận nội dung, đặt nội dung vào prompt một cách tường minh, gọi chat model và trả về kết quả để hiển thị. Tài liệu này xây dựng pipeline trên LangChain bằng LCEL, đồng thời mở rộng thành CLI đọc được tệp văn bản.

## 2. Mục tiêu học tập

- Tạo được chain bằng `ChatPromptTemplate` và `StrOutputParser`.
- Truyền đúng key `information` khi gọi `.invoke()`.
- Kiểm tra được đầu vào trống, dữ liệu thiếu và trường hợp thay model.

## 3. Chuẩn bị dữ liệu

Ví dụ một đoạn mô tả về Elon Musk có thể là đầu vào từ người sử dụng, miễn dữ liệu được cung cấp rõ ràng và có thể kiểm chứng. Để tránh cần truy cập web trong bài thực hành, dùng đoạn văn nội bộ sau:

> Một nhóm sinh viên xây dựng ứng dụng trợ lý học tập. Ứng dụng nhận văn bản, tóm tắt bằng tiếng Việt và có khả năng thay đổi model bằng cấu hình.

Prompt không được yêu cầu mô hình “bịa thêm hai sự thật thú vị”; thay vào đó, yêu cầu chỉ ghi chi tiết nổi bật khi có đủ dữ kiện.

## 4. Mã thực hành tối thiểu

```python
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI

load_dotenv()

prompt = ChatPromptTemplate.from_messages([
    ("system", "Tóm tắt trung thực bằng tiếng Việt. Không thêm thông tin ngoài dữ liệu."),
    ("human", "Tóm tắt thành 3 ý và 2 chi tiết đáng chú ý nếu có:\n{information}"),
])
model = ChatOpenAI(model="gpt-4o-mini")
chain = prompt | model | StrOutputParser()

information = "Một nhóm sinh viên xây dựng ứng dụng AI hỗ trợ tự học và ôn tập."
result = chain.invoke({"information": information})
print(result)
```

`load_dotenv()` nạp khóa API trước khi tạo model. `prompt` chuyển dict thành các message có vai trò; `model` gửi request; `StrOutputParser` chuyển thông điệp phản hồi thành `str`.

## 5. Tổ chức code để tái sử dụng

Trong thư mục thực hành, phương thức `make_summary_chain()` nằm ở `app/chains.py`. `app/models.py` đóng vai trò factory, có thể tạo `ChatOllama`, `ChatOpenAI` hoặc `ChatGroq` tùy `.env`. Vì vậy, `main.py` không phải biết cách xây dựng prompt.

Ví dụ gọi CLI:

```bash
uv run python main.py --text "LangChain kết nối prompt và LLM."
uv run python main.py --file data/van-ban-mau.txt
```

Tệp đầu vào được đọc UTF-8. Nếu đường dẫn không tồn tại hoặc nội dung trống, ứng dụng in lỗi; nếu API hết quota hoặc Ollama không chạy, lỗi được phân loại để người học kiểm tra môi trường.

## 6. Gỡ lỗi chain

Không phải cứ có đầu ra là đáp án chính xác. Hãy so sánh kết quả với dữ liệu gốc: mô hình có đưa thêm tên người, năm hoặc con số không có trong văn bản không? Có đủ 3 ý không? Nếu model nhỏ không tuân thủ định dạng, cân nhắc chia yêu cầu thành bước đơn giản hoặc dùng model mạnh hơn.

Khi cần in từng phần kết quả thay vì chờ hoàn tất, dùng `chain.stream({...})`. Streaming là tính năng của pipeline và provider, không có nghĩa mọi model đều cung cấp token/time-to-first-token giống nhau.

## 7. Thực hành ngắn

1. Chạy chain với văn bản mẫu ở `data/van-ban-mau.txt`.
2. Đổi `information` thành chuỗi rỗng để kiểm tra validation.
3. Thử `--stream`, ghi lại sự khác biệt về trải nghiệm hiển thị.
4. Điều chỉnh prompt yêu cầu “2 ý” và so sánh với “3 ý”, ghi rõ điều kiện thử nghiệm.

## 8. Câu hỏi ôn tập

**Câu 1.** `chain.invoke({"information": text})` có ý nghĩa gì?  
A. Huấn luyện model bằng `text`.  
B. Đưa `text` vào biến của prompt rồi chạy pipeline.  
C. Tạo file `text`.  
D. Đăng dữ liệu lên GitHub.  
**Đáp án: B.** Dict truyền giá trị cho biến trong template.

**Câu 2.** Nên xử lý đầu vào rỗng lúc nào?  
A. Sau khi nhận phản hồi thành công.  
B. Sau khi trả tiền API.  
C. Chỉ khi debug.  
D. Trước khi gửi request tới model.  
**Đáp án: D.** Validation sớm tránh request vô ích và lỗi khó hiểu.

**Câu 3.** `StrOutputParser` thường giúp gì?  
A. Chuyển kết quả chat model thành chuỗi.  
B. Tự thêm nguồn tham khảo.  
C. Tự xác minh tất cả sự thật.  
D. Cấp quyền gọi API.  
**Đáp án: A.** Nó chủ yếu chuẩn hóa kết quả văn bản.

**Câu 4.** Vì sao prompt nên nói “nếu có đủ dữ kiện”?  
A. Để tăng token.  
B. Để giảm cấu trúc code.  
C. Để hạn chế mô hình tự tạo chi tiết không tồn tại.  
D. Để loại bỏ parser.  
**Đáp án: C.** Không buộc model trả chi tiết thiếu bằng chứng.

**Câu 5.** Khi đổi provider, thành phần nào lý tưởng được giữ nguyên?  
A. Bí mật API key.  
B. Prompt và logic chain.  
C. Tên model provider.  
D. Tài khoản tính phí.  
**Đáp án: B.** Tách lớp model cho phép tái sử dụng workflow.

## 9. Tổng kết

Chain tốt phải có schema đầu vào rõ, xử lý lỗi trước request, ranh giới giữa thành phần dễ đọc và phương pháp kiểm chứng chất lượng trả lời sau khi chạy.
