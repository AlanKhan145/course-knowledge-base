# 002 - Bài tập: Phân biệt công cụ môi trường và code ứng dụng

## 1. Mục tiêu

Bài tập kiểm tra khả năng phân biệt phần quản lý dependency với phần logic của Documentation Assistant.

## 2. Kiến thức cần dùng

Cần nắm được rằng phần dự án này dùng `Pipenv`, trong khi các phần khác của khóa học dùng `uv`, và sự khác biệt chủ yếu nằm ở công cụ quản lý package/môi trường.

## 3. Đề bài

Giả sử anh đang đọc một bài hướng dẫn sử dụng `Pipenv` nhưng môi trường học tập hiện tại của anh quen với `uv`. Hãy phân loại những nội dung nào thuộc lớp môi trường và những nội dung nào thuộc lớp ứng dụng.

## 4. Nhiệm vụ

1. Giải thích vì sao thay đổi công cụ quản lý dependency không đồng nghĩa với thay đổi kiến trúc RAG.
2. Liệt kê ba thành phần của ứng dụng vẫn giữ nguyên về mặt logic khi chuyển giữa `Pipenv` và `uv`.
3. Viết một đoạn ngắn mô tả cách anh sẽ theo dõi phần học mà không nhầm lẫn giữa lệnh cài đặt và code ứng dụng.

## 5. Yêu cầu

- Không cần viết lệnh `uv` nếu bài học không cung cấp lệnh tương ứng.
- Không suy đoán phiên bản package.
- Câu trả lời phải phân biệt rõ **môi trường** và **ứng dụng**.

## 6. Tiêu chí hoàn thành

Bài được xem là hoàn thành khi người học giải thích được rằng sự thay đổi công cụ quản lý dependency không làm thay đổi logic ingestion, retrieval, giao diện hoặc memory của ứng dụng.
