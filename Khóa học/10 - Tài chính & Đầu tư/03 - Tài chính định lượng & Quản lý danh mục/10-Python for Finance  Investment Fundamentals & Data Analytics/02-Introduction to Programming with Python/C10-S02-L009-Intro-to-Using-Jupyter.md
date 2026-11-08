# 09. Intro to Using Jupyter — Bài học

**Khóa học:** Python for Finance: Investment Fundamentals & Data Analytics  
**Module 02:** Introduction to Programming with Python  
**Thứ tự:** 009 · **Loại mục:** `VIDEO_LECTURE` · **Thời lượng metadata:** 4.9 phút  
**Khóa học Udemy:** https://www.udemy.com/course/python-for-finance-investment-fundamentals-data-analytics

> **Ghi chú:** Tài liệu tự biên soạn phục vụ học tập bằng tiếng Việt, bám nội dung bài học được cung cấp. Các phần luyện tập là tự soạn và không đại diện cho đề kiểm tra gốc trên Udemy.

## 1. Giới thiệu giao diện Jupyter

Khi khởi chạy Jupyter Notebook theo giao diện cổ điển, một trang quản lý tệp (*dashboard*) thường mở trong trình duyệt. Tại đây có thể duyệt thư mục, tạo notebook và quản lý những phiên đang hoạt động. Bản Jupyter Notebook và JupyterLab khác nhau về bố cục; tên nút hoặc cách sắp xếp có thể không giống ảnh minh họa.

## 2. Mục tiêu học tập

1. Xác định được thư mục làm việc hiện tại.
2. Tạo, đổi tên, mở, tải lên và xóa tệp/thư mục một cách có kiểm soát.
3. Phân biệt notebook đang lưu trên đĩa với kernel còn chạy.
4. Tạo và chạy các cell Markdown/Code trong notebook.
5. Biết cách tắt phiên notebook không còn dùng.

## 3. Dashboard và thao tác với tệp

### 3.1. Duyệt và quản lý thư mục

Trang quản lý tệp hiển thị **đường dẫn thư mục hiện hành** và các mục bên trong. Nhấn tên thư mục để đi vào; dùng đường dẫn phía trên để trở lại. Bạn có thể nhóm các notebook theo chuyên đề, tương tự cách quản lý thư mục trên máy.

Ở giao diện cổ điển, có thể chọn một hoặc nhiều mục bằng ô chọn ở bên trái. Sau khi chọn, những thao tác như đổi tên, di chuyển hoặc xóa có thể xuất hiện tùy loại tệp và phiên bản. **Trước khi xóa**, xác nhận lại tên và nội dung: thao tác này có thể ảnh hưởng tệp thật trên đĩa.

### 3.2. Tạo mới và tải tệp lên

- **New**: tạo thư mục hoặc notebook với kernel được hỗ trợ.
- **Upload**: chọn tệp từ máy để đưa vào thư mục đang làm việc; có thể cần xác nhận thao tác upload.
- **Rename**: đổi tên để phản ánh mục đích tệp, ví dụ `tinh_loi_suat.ipynb`.
- **Download**: tải một tệp notebook về máy khi giao diện cung cấp thao tác tương ứng.

Giao diện cổ điển có thể hiển thị biểu tượng notebook và dấu trạng thái cho phiên đang hoạt động. Trong một số phiên bản, tab **Running** cho phép xem những notebook/terminal còn đang chạy để đóng chúng.

## 4. Notebook, cell và kernel

Tạo notebook sử dụng kernel Python (`ipykernel` là tên thành phần thường gặp). Notebook thường được lưu bằng phần mở rộng `.ipynb`.

Trong notebook, làm việc với hai loại cell cơ bản:

| Loại cell | Dùng để | Ví dụ |
|---|---|---|
| Code | Thực thi lệnh Python | `print(3 + 4)` |
| Markdown | Tiêu đề, ghi chú, diễn giải | `# Phép tính đầu tiên` |

Một cell Code có thể trả về giá trị hoặc hiển thị văn bản:

```python
gia_mua = 50
gia_ban = 55
loi_nhuan = gia_ban - gia_mua
print(loi_nhuan)
```

Đầu ra: `5`. Các biến này tồn tại trong bộ nhớ kernel của phiên, không phải chỉ bên trong cell đã tạo ra chúng.

## 5. Quy trình thực hành có kiểm soát

1. Tạo thư mục `thuc_hanh_jupyter`.
2. Vào thư mục đó và chọn tạo notebook Python.
3. Đổi tên notebook thành `buoi_01.ipynb`.
4. Thêm một cell Markdown mô tả nội dung, một cell Code chạy `print(3 + 4)`.
5. Thử thêm cell phía trên/bên dưới và xóa một cell không cần thiết.
6. Lưu notebook, quay lại danh sách tệp và mở lại để kiểm tra.
7. Nếu không còn sử dụng, đóng notebook và **shutdown kernel** qua giao diện phù hợp.

## 6. Phân biệt ba trạng thái dễ nhầm

- **Lưu tệp** ghi nội dung notebook xuống đĩa; không đồng nghĩa dừng Python.
- **Đóng tab trình duyệt** không phải lúc nào cũng kết thúc kernel.
- **Shutdown kernel** kết thúc tiến trình thực thi, giải phóng tài nguyên của phiên đó.

Do giao diện thay đổi, hãy đọc thông báo và kiểm tra danh sách phiên đang chạy thay vì dựa tuyệt đối vào vị trí hay màu biểu tượng.

## 7. Bài tập tự luyện

Tạo notebook ba cell (Markdown, Code, Markdown), lưu và mở lại. Sau đó mở danh sách tiến trình đang chạy nếu phiên bản của bạn hỗ trợ, xác định notebook hiện tại rồi tắt kernel khi hoàn thành.

## 8. Câu hỏi trắc nghiệm ôn tập

### Câu 1

Khi mở Jupyter dashboard, yếu tố nào giúp biết nơi tệp mới được tạo?

A. Màu cửa sổ.  
B. Tên hãng máy tính.  
C. Đường dẫn thư mục hiện hành.  
D. Số lượng tab trình duyệt khác.  


**Đáp án:** C.  
**Giải thích:** Notebook mới thường xuất hiện tại vị trí đang làm việc trên dashboard.

### Câu 2

Chức năng Upload được dùng để làm gì?

A. Xóa kernel.  
B. Tăng dung lượng RAM.  
C. Chuyển notebook sang Python 2.  
D. Đưa tệp từ máy lên thư mục đang mở trong Jupyter.  


**Đáp án:** D.  
**Giải thích:** Upload chuyển tệp vào không gian làm việc của Jupyter.

### Câu 3

Điểm khác biệt giữa lưu notebook và shutdown kernel là gì?

A. Một thao tác ghi tài liệu; thao tác kia dừng tiến trình chạy.  
B. Hai thao tác luôn giống nhau.  
C. Lưu notebook xóa mọi biến.  
D. Shutdown kernel đổi tên file.  


**Đáp án:** A.  
**Giải thích:** Tệp lưu trên đĩa và tiến trình thực thi là hai đối tượng riêng.

### Câu 4

Cell Markdown thích hợp nhất cho nội dung nào?

A. Chỉ gọi API Python.  
B. Tiêu đề và mô tả ý nghĩa phép tính.  
C. Chạy `print(1)`.  
D. Khai báo biến đang dùng.  


**Đáp án:** B.  
**Giải thích:** Markdown là loại cell cho phần diễn giải.

### Câu 5

Điều nên làm trước khi xóa thư mục trong dashboard?

A. Đóng toàn bộ hệ điều hành.  
B. Đổi loại cell.  
C. Kiểm tra đúng mục và dữ liệu bên trong.  
D. Bắt buộc restart notebook.  


**Đáp án:** C.  
**Giải thích:** Xóa nhầm có thể gây mất tệp học tập.

## 9. Tổng kết

Biết vị trí lưu tệp, cách tạo và quản lý notebook cũng như trạng thái kernel là nền tảng để làm việc độc lập với Jupyter.
