# 002 - Pipenv và uv trong phần thiết lập môi trường

## 1. Tóm tắt

Trong phần dự án này, một số thao tác cài đặt dependency được thực hiện bằng `Pipenv`, trong khi các phần khác của khóa học sử dụng `uv` để quản lý package và môi trường Python.

Điểm quan trọng là sự khác biệt nằm ở **công cụ dùng để cài đặt và quản lý dependency**. Phần mã nguồn của dự án và logic triển khai không thay đổi chỉ vì công cụ quản lý môi trường thay đổi.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- Giải thích được vì sao cùng một dự án có thể xuất hiện cả `Pipenv` và `uv`.
- Phân biệt được công cụ quản lý môi trường với mã nguồn ứng dụng.
- Theo dõi đúng các bước cài đặt dependency mà không nhầm việc thay đổi công cụ với thay đổi logic chương trình.

## 3. Điểm khác biệt cần chú ý

`Pipenv` và `uv` đều được sử dụng trong ngữ cảnh quản lý package và môi trường Python của khóa học. Phần học hiện tại dùng `Pipenv`, còn phần còn lại của khóa học ưu tiên `uv`.

Khi chuyển từ công cụ này sang công cụ kia, điều cần thay đổi chủ yếu là cách cài đặt dependency và cách làm việc với môi trường. Các file Python và logic của Documentation Assistant vẫn giữ nguyên.

Vì vậy, khi đọc mã hoặc theo dõi phần triển khai, cần tách hai lớp sau:

- **Lớp môi trường**: công cụ nào được dùng để cài package và quản lý dependency.
- **Lớp ứng dụng**: code xử lý ingestion, embedding, retrieval, giao diện và memory.

## 4. Cách theo dõi phần học

Khi gặp lệnh hoặc file cấu hình liên quan đến `Pipenv`, hãy hiểu đó là cơ chế quản lý dependency của phần này. Không nên suy ra rằng các class, hàm hoặc luồng xử lý của ứng dụng phải thay đổi theo.

Nếu môi trường đã được cài đặt đúng các dependency cần thiết, phần code còn lại có thể được theo dõi theo cùng một logic triển khai.

## 5. Tổng kết

Sự xuất hiện của `Pipenv` và `uv` phản ánh khác biệt về công cụ quản lý môi trường, không phải khác biệt về kiến trúc của Documentation Assistant. Khi học phần này, hãy tập trung vào việc bảo đảm dependency được cài đúng, sau đó tiếp tục theo dõi code ứng dụng như bình thường.
