# 009 - Semantic Versioning trong LangChain

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lesson  
**Thời lượng:** 1 phút

---

## 1. Tóm tắt

Dependency của LangChain thay đổi theo thời gian, vì vậy cần biết project đang dùng phiên bản nào và hiểu ý nghĩa của version number. Bài học sử dụng LangChain `1.0.2` làm phiên bản tương thích tại thời điểm ghi nội dung và kiểm tra phiên bản thông qua `uv.lock`.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Xác định version LangChain đang được khóa trong project.
- Giải thích vì sao cài package ở thời điểm khác có thể nhận version khác.
- Nhận diện cấu trúc semantic versioning.
- Phân biệt thay đổi patch với breaking change ở mức khái niệm.
- Biết cách đối chiếu version khi code của khóa học và môi trường hiện tại không khớp.

## 3. Kiểm tra version trong uv.lock

Khi chạy:

```bash
uv add langchain
```

`uv` giải quyết dependency và ghi phiên bản đã chọn vào lock file. Trong ví dụ của bài, version được sử dụng là:

```text
1.0.2
```

Người học có thể mở `uv.lock` và tìm package LangChain để xác định chính xác version mà project đang khóa.

## 4. Ý nghĩa của Semantic Versioning

Semantic versioning thường được biểu diễn:

```text
MAJOR.MINOR.PATCH
```

Với ví dụ:

```text
1.0.2
```

ta có:

- `1`: major;
- `0`: minor;
- `2`: patch.

Ví dụ chuyển từ `1.0.2` sang `1.0.7` thay đổi thành phần thứ ba, tức patch version. Bài học dùng trường hợp này để minh họa các cập nhật nhỏ như bug fix hoặc thay đổi không nhằm phá vỡ code hiện có.

Breaking change cần được chú ý nhiều hơn vì API có thể thay đổi và code cũ có thể không còn chạy nguyên trạng.

## 5. Làm gì khi version không khớp?

Không nên giả định rằng code lỗi luôn do logic của chương trình. Khi học từ một ví dụ được ghi ở thời điểm khác, hãy kiểm tra:

1. Version trong `uv.lock`.
2. Version LangChain hiện đang được cài.
3. Package integration liên quan có cùng môi trường hay không.
4. API hoặc import path có thay đổi hay không.

Nếu project cần tái tạo đúng môi trường của bài, lock file là nguồn quan trọng để xác định dependency thực tế.

## 6. Điều cần ghi nhớ

Version là một phần của khả năng tái lập môi trường. Code, dependency và lock file cần được xem cùng nhau.

Mạch kiểm tra ngắn:

```text
Code không chạy như ví dụ
        ↓
Kiểm tra dependency
        ↓
Đọc uv.lock
        ↓
So version
        ↓
Xác định có thay đổi tương thích hay breaking change
```

Hiểu versioning giúp phân biệt lỗi do code của mình với lỗi do môi trường đã thay đổi theo thời gian.
