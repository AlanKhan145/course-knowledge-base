# 003 - Thiết lập môi trường cho Documentation Assistant

## 1. Tổng quan

Trước khi triển khai ingestion và retrieval, dự án cần một môi trường làm việc có đủ mã nguồn ban đầu, dependency, biến môi trường và vector database.

Phần thiết lập gồm bốn nhóm công việc chính: lấy đúng nhánh mã nguồn, tạo Pinecone index, cấu hình API key trong `.env`, và cài dependency theo lock file của dự án.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Chuẩn bị mã nguồn từ đúng nhánh khởi đầu của repository.
- Cấu hình Pinecone index với kích thước vector và metric được yêu cầu.
- Giải thích được vai trò của cloud, region và serverless khi tạo index.
- Lưu API key trong `.env` thay vì đưa bí mật vào repository.
- Cài dependency từ cấu hình `Pipenv` của dự án.
- Chuẩn bị file `ingestion.py` cho bước đưa tài liệu vào vector database.

## 3. Chuẩn bị mã nguồn

Dự án bắt đầu từ một nhánh khởi đầu đã có sẵn phần mã mẫu cần thiết. Khi clone repository, cần chỉ định đúng nhánh thay vì mặc định lấy một nhánh khác.

Mẫu lệnh:

```bash
git clone -b <ten-nhanh> <repository-url>
```

Sau khi clone, chuyển vào thư mục dự án và kiểm tra cấu trúc hiện có trước khi tiếp tục. Mục tiêu của bước này là bảo đảm toàn bộ quá trình triển khai sau đó được thực hiện trên đúng baseline của khóa học.

## 4. Tạo Pinecone index

### 4.1. Cấu hình index

Pinecone được dùng làm vector database để lưu các embedding tạo ra từ tài liệu.

Trong phần thiết lập này, index được cấu hình với các thông tin chính:

- Tên index có ý nghĩa, ví dụ theo ngữ cảnh tài liệu LangChain.
- Kích thước vector: `1536`.
- Metric so sánh: cosine similarity.
- Kiểu triển khai: serverless.

Kích thước vector phải phù hợp với embedding được sử dụng. Metric cosine được dùng để so sánh mức độ tương đồng giữa các vector trong quá trình retrieval.

### 4.2. Cloud và region

Pinecone cho phép chọn nền tảng cloud và region cho index. Việc lựa chọn này có ảnh hưởng đến vị trí lưu trữ dữ liệu và độ trễ khi hệ thống truy cập vector database.

Trong môi trường doanh nghiệp, cloud và region còn có thể liên quan đến thỏa thuận hạ tầng và yêu cầu tuân thủ. Ví dụ, khi cần đáp ứng yêu cầu lưu trữ dữ liệu tại châu Âu, vị trí triển khai phải được chọn phù hợp với yêu cầu đó.

## 5. Cấu hình biến môi trường

Ứng dụng cần API key để làm việc với Pinecone và nhà cung cấp mô hình ngôn ngữ.

Các khóa bí mật được đặt trong file `.env`, thay vì ghi trực tiếp vào source code hoặc commit lên repository.

Cấu trúc minh họa:

```dotenv
PINECONE_API_KEY=<your-pinecone-api-key>
OPENAI_API_KEY=<your-openai-api-key>
```

Tên biến cụ thể cần khớp với code của dự án. Nguyên tắc quan trọng là tách secret khỏi mã nguồn và không commit file chứa khóa bí mật.

## 6. Cài dependency bằng Pipenv

Dự án đã có cấu hình package và lock file để xác định dependency cần thiết. Việc cài đặt từ lock file giúp môi trường local dùng các phiên bản đã được khóa cho phần dự án này.

Lệnh cài đặt:

```bash
pipenv install
```

Mục tiêu của bước này không phải chọn phiên bản thư viện theo cảm tính, mà là tái tạo môi trường dependency đã được chuẩn bị cho dự án.

Một số phiên bản có thể khác khi khóa học hoặc repository được cập nhật theo thời gian. Vì vậy, ưu tiên cấu hình đi kèm repository đang sử dụng thay vì tự suy đoán phiên bản.

## 7. Kiểm tra cấu trúc dự án

Trong baseline có thể xuất hiện một số file hoặc thư mục chưa được sử dụng ngay. Ví dụ, file logger được chuẩn bị để dùng ở các bước sau; các thư mục như backend hoặc nơi chứa tài liệu có thể chỉ thực sự được dùng khi dự án tiến sang các bài tiếp theo.

Ở giai đoạn thiết lập, không cần triển khai trước các phần đó. Mục tiêu là bảo đảm môi trường sẵn sàng cho pipeline ingestion.

## 8. Chuẩn bị `ingestion.py`

Sau khi môi trường và Pinecone đã sẵn sàng, tạo file:

```text
ingestion.py
```

File này sẽ chứa phần triển khai ingestion: xử lý tài liệu, tạo embedding từ nội dung và lưu các vector vào Pinecone.

Đây là điểm chuyển từ **thiết lập hạ tầng** sang **xây dựng pipeline dữ liệu**.

## 9. Kiểm tra kết quả

Trước khi sang phần ingestion, cần xác nhận:

- Repository đã được clone từ đúng nhánh khởi đầu.
- Pinecone index đã được tạo với kích thước `1536` và cosine similarity.
- Index sử dụng cấu hình serverless theo bài học.
- `.env` đã chứa các API key cần thiết và không được commit.
- Dependency của dự án đã được cài bằng `Pipenv`.
- `ingestion.py` đã được tạo để bắt đầu triển khai pipeline.

## 10. Tổng kết

Thiết lập môi trường là bước kết nối mã nguồn, dependency, secret và vector database trước khi viết logic ingestion. Sau khi hoàn tất, dự án đã có đủ nền tảng để đưa tài liệu qua bước embedding và lưu các vector vào Pinecone, chuẩn bị cho retrieval ở các phần tiếp theo.
