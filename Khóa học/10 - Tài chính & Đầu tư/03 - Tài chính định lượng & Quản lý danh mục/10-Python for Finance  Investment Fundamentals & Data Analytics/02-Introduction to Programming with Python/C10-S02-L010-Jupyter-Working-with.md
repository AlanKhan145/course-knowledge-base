# 10. Jupyter - Working with Notebook Files — Bài học

**Khóa học:** Python for Finance: Investment Fundamentals & Data Analytics  
**Module 02:** Introduction to Programming with Python  
**Thứ tự:** 010 · **Loại mục:** `VIDEO_LECTURE` · **Thời lượng metadata:** 4.5 phút  
**Khóa học Udemy:** https://www.udemy.com/course/python-for-finance-investment-fundamentals-data-analytics

> **Ghi chú:** Tài liệu tự biên soạn phục vụ học tập bằng tiếng Việt, bám nội dung bài học được cung cấp. Các phần luyện tập là tự soạn và không đại diện cho đề kiểm tra gốc trên Udemy.

## 1. Vì sao cần quản lý tệp notebook?

Jupyter không chỉ là khu vực gõ mã. Mỗi notebook còn là một **tệp tài liệu** có thể lưu, sao chép, đổi tên, mở lại và chia sẻ. Tên tệp, vị trí lưu và cách xuất kết quả ảnh hưởng trực tiếp đến việc tìm lại phân tích cũng như trao đổi công việc với người khác.

## 2. Mục tiêu học tập

1. Nhận biết tệp `.ipynb` và phân biệt với `.py` hoặc `.html`.
2. Tạo, đổi tên, lưu và mở lại notebook từ thư mục làm việc.
3. Xuất notebook sang định dạng phù hợp với mục đích chia sẻ khi môi trường hỗ trợ.
4. Kiểm tra nội dung sau khi xuất và tránh nhầm file với kernel.

## 3. Các dạng tệp quan trọng

| Định dạng | Công dụng | Điểm cần nhớ |
|---|---|---|
| `.ipynb` | Lưu notebook gồm cell, nội dung và đầu ra | Thường là bản gốc để tiếp tục chỉnh sửa |
| `.py` | Lưu mã nguồn Python dưới dạng văn bản | Không giữ bố cục notebook theo cách tương đương |
| `.html` | Trình bày nội dung có thể xem trong trình duyệt | Thường phù hợp chia sẻ bản xem, không phải môi trường chạy tương tác |

Tên tệp nên thể hiện chủ đề, ví dụ `lai_suat_don.ipynb`, thay vì nhiều bản `Untitled1`, `Untitled2` khó phân biệt.

## 4. Quy trình quản lý notebook

1. **Tạo mới:** trong dashboard chọn notebook Python và nhập mã.
2. **Đổi tên:** dùng chức năng Rename; đặt tên dễ nhận diện.
3. **Lưu:** thực hiện thao tác Save hoặc phím tắt lưu phù hợp; quan sát trạng thái lưu.
4. **Đóng và mở lại:** quay về dashboard, tìm đúng đường dẫn và chọn tệp.
5. **Xuất bản xem:** khi giao diện có chức năng Download/Export, chọn định dạng được hỗ trợ và kiểm tra tệp tạo ra.
6. **Sao lưu:** giữ bản `.ipynb` trước khi chỉnh sửa lớn hoặc xóa.

Một số phiên bản Jupyter hỗ trợ xuất qua `nbconvert`. Ví dụ khi công cụ đã được cài trong môi trường:

```bash
jupyter nbconvert --to html lai_suat_don.ipynb
```

Lệnh trên minh họa cách tạo bản HTML từ notebook. Các tùy chọn và mức độ hỗ trợ phụ thuộc môi trường cài đặt; không nên coi việc xuất HTML là bước thiết yếu để học lập trình cơ bản.

## 5. Ví dụ quản lý một phân tích đơn giản

Tạo notebook `lai_suat_don.ipynb` với nội dung:

```python
gia_dau = 200
gia_cuoi = 214
print((gia_cuoi - gia_dau) / gia_dau)
```

Kết quả: `0.07`. Hãy lưu, đóng, mở lại và chạy lại để xác nhận kết quả. Nếu xuất thành HTML, hãy mở tệp kết quả trong trình duyệt và kiểm tra có cả nội dung mã lẫn phần đầu ra mong muốn.

## 6. Lỗi thường gặp

- Đổi tên nhầm tệp hoặc tạo nhiều bản có tên gần giống nhau.
- Chia sẻ HTML khi người nhận cần chỉnh sửa và chạy mã: nên cung cấp bản `.ipynb` cùng thông tin môi trường phù hợp.
- Tin vào kết quả đã được lưu mà không chạy lại notebook trên môi trường hiện tại.
- Cho rằng thoát khỏi trang trình duyệt đồng nghĩa đã tắt kernel.

## 7. Bài tập thực hành

Tạo `kiem_tra_luu.ipynb`, ghi một tiêu đề Markdown và đoạn mã `print(7 * 8)`. Lưu, đổi tên thành `kiem_tra_luu_v2.ipynb`, mở lại và kiểm tra `56`. Xuất sang `.py` hoặc `.html` nếu phiên bản Jupyter của bạn hỗ trợ, sau đó nêu sự khác biệt giữa bản xuất và notebook gốc.

## 8. Câu hỏi trắc nghiệm ôn tập

### Câu 1

Định dạng nào phù hợp nhất nếu người nhận muốn tiếp tục chỉnh sửa notebook tương tác?

A. `.jpg`  
B. `.ipynb`  
C. `.mp3`  
D. `.zip` chỉ chứa ảnh  


**Đáp án:** B.  
**Giải thích:** `.ipynb` giữ cấu trúc cell của notebook.

### Câu 2

Định dạng HTML xuất từ notebook thường phù hợp nhất với việc gì?

A. Thay kernel đang chạy.  
B. Thực thi trực tiếp mọi mã Python.  
C. Xem và chia sẻ bản trình bày.  
D. Cài hệ điều hành.  


**Đáp án:** C.  
**Giải thích:** HTML thường là bản xem nội dung trong trình duyệt.

### Câu 3

Sau khi đổi tên notebook và đóng, nên kiểm tra gì?

A. Số lượng icon.  
B. Màu nền.  
C. Mật khẩu Wi-Fi.  
D. Tệp có mở lại được ở đúng đường dẫn.  


**Đáp án:** D.  
**Giải thích:** Mở lại giúp kiểm tra tên và đường dẫn lưu.

### Câu 4

Lệnh `jupyter nbconvert --to html ten.ipynb` có mục đích nào?

A. Xuất notebook thành HTML khi môi trường hỗ trợ.  
B. Xóa toàn bộ kernel.  
C. Đổi ngôn ngữ Python thành R.  
D. Chạy một máy ảo.  


**Đáp án:** A.  
**Giải thích:** `nbconvert` chuyển định dạng notebook.

### Câu 5

Việc làm nào giúp tránh nhầm các bản notebook?

A. Luôn để tên Untitled.  
B. Dùng tên mô tả có quy tắc và lưu vào thư mục rõ ràng.  
C. Không bao giờ lưu.  
D. Chỉ giữ ảnh chụp màn hình.  


**Đáp án:** B.  
**Giải thích:** Tên và cấu trúc lưu trữ có ý nghĩa làm tệp dễ tìm.

## 9. Tổng kết

Hãy luôn giữ bản notebook gốc và kiểm tra bản xuất. Quản lý tên tệp và đường dẫn rõ ràng giúp dễ tái sử dụng công việc.
