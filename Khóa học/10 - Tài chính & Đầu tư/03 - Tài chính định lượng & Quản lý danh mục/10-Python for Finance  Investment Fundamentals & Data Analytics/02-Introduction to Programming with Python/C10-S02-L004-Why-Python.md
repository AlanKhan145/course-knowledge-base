# 04. Why Python? — Bài học

**Khóa học:** Python for Finance: Investment Fundamentals & Data Analytics  
**Module 02:** Introduction to Programming with Python  
**Thứ tự:** 004 · **Loại mục:** `VIDEO_LECTURE` · **Thời lượng metadata:** 5.2 phút  
**Khóa học Udemy:** https://www.udemy.com/course/python-for-finance-investment-fundamentals-data-analytics

> **Ghi chú:** Tài liệu tự biên soạn phục vụ học tập bằng tiếng Việt, bám nội dung bài học được cung cấp. Các phần luyện tập là tự soạn và không đại diện cho đề kiểm tra gốc trên Udemy.

## 1. Vì sao Python phù hợp cho phân tích tài chính?

Một bài toán tài chính có thể bắt đầu từ một bảng dữ liệu nhỏ, sau đó mở rộng thành nhiều tập dữ liệu, phép biến đổi và báo cáo. Python cung cấp cú pháp dễ đọc, đồng thời hỗ trợ tự động hóa và phát triển các phương pháp phân tích phức tạp. Ngôn ngữ này được dùng trong tài chính, kinh tế lượng, khoa học dữ liệu và học máy.

## 2. Mục tiêu học tập

1. Giải thích bốn đặc điểm của Python: **cấp cao, đa mục đích, mã nguồn mở, đa nền tảng**.
2. Nêu sự khác biệt thực tế giữa làm việc với Python và Excel.
3. Lựa chọn công cụ hợp lý cho một tình huống phân tích tài chính.
4. Viết và chạy một phép tính cơ bản bằng Python.

## 3. Các đặc điểm kỹ thuật

### 3.1. Ngôn ngữ cấp cao và cú pháp dễ đọc

Lập trình viên mô tả cách tính bằng những từ khóa, hàm và cấu trúc gần với cách tư duy của con người hơn mã máy. Hệ thống thực thi Python xử lý các bước cần thiết để chạy chương trình; người viết mã có thể tập trung nhiều hơn vào bài toán.

### 3.2. Mã nguồn mở và khả năng tiếp cận

Python được phân phối theo giấy phép mã nguồn mở, cho phép sử dụng, nghiên cứu và đóng góp phát triển. Bản thân ngôn ngữ có thể sử dụng miễn phí. Tuy nhiên, điều đó không có nghĩa mọi phần mềm, dữ liệu hoặc dịch vụ xây dựng bằng Python đều miễn phí.

### 3.3. Đa mục đích và đa nền tảng

Python chạy trên các hệ điều hành thông dụng như Windows, macOS và Linux. Cùng một ngôn ngữ có thể được dùng để xử lý dữ liệu, tự động hóa công việc, phát triển web, xây dựng mô hình dự báo hoặc lập trình những ứng dụng khác.

### 3.4. Hệ sinh thái thư viện

Người dùng không phải tự viết lại mọi phép tính. Các thư viện phổ biến gồm `NumPy` (mảng và tính toán số), `pandas` (dữ liệu dạng bảng), `Matplotlib` (biểu đồ). Đây là các ví dụ mở rộng để người học hình dung công việc, không phải điều kiện cần để chạy các đoạn mã cơ bản trong bài này.

## 4. Lựa chọn giữa Python và các công cụ khác

| Tiêu chí | Python | Excel | R |
|---|---|---|---|
| Phân tích nhanh dữ liệu nhỏ | Tốt, cần viết mã | Thuận tiện với bảng tính | Tốt nếu quen cú pháp |
| Tự động hóa quy trình lặp lại | Thuận lợi bằng script | Có thể dùng công thức và công cụ tự động hóa | Thuận lợi bằng script |
| Làm việc với phân tích thống kê | Có thư viện mở rộng | Hỗ trợ các thao tác thống kê phổ biến | Có hệ sinh thái thống kê chuyên sâu |
| Độ khó ban đầu | Cần học lập trình | Dễ tiếp cận với thao tác bảng | Cần học lập trình |

Không có công cụ nào tốt nhất cho mọi tình huống. Excel thường nhanh cho một báo cáo nhỏ mang tính trực quan; Python có lợi thế khi muốn tạo quy trình có thể lặp lại, kiểm thử, mở rộng hoặc kết hợp nhiều bước xử lý.

## 5. Ví dụ: tính lợi suất một kỳ

Giả sử giá mua một tài sản là `100`, giá cuối kỳ là `106`, chưa xét cổ tức, phí, thuế và những yếu tố khác. Lợi suất đơn được tính:

$$
r=\frac{P_1-P_0}{P_0}
$$

Trong đó $P_0$ là giá đầu kỳ, $P_1$ là giá cuối kỳ.

```python
gia_dau_ky = 100
gia_cuoi_ky = 106
loi_suat = (gia_cuoi_ky - gia_dau_ky) / gia_dau_ky
print(f"Lợi suất: {loi_suat:.1%}")
```

Đầu ra: `Lợi suất: 6.0%`. Một đoạn mã ngắn có thể được sửa để tính cho nhiều cặp giá khác nhau; đó là bước đầu của tự động hóa.

## 6. Giới hạn và lỗi dễ gặp

- Python không tự động chính xác nếu dữ liệu đầu vào hoặc công thức sai.
- Dữ liệu lớn không đồng nghĩa rằng mọi thao tác Python đều nhanh; cần lựa chọn cấu trúc dữ liệu, thư viện và phương pháp tính phù hợp.
- Không nên so sánh tốc độ Python, Excel và R bằng kết luận tuyệt đối khi chưa biết khối lượng công việc.
- Ví dụ lợi suất trên không phải là dự báo giá hay lời khuyên đầu tư.

## 7. Bài tập tự luyện

Chọn một báo cáo cần cập nhật hằng tuần (ví dụ giá và lợi suất của ba tài sản). Trình bày ba lý do có thể dùng Python thay Excel; đồng thời nêu một tình huống Excel vẫn tiện hơn. Chạy lại ví dụ với giá cuối kỳ bằng `97` và giải thích dấu âm của kết quả.

## 8. Câu hỏi trắc nghiệm ôn tập

### Câu 1

Đặc điểm nào giải thích vì sao cú pháp Python thường dễ đọc hơn mã máy?

A. Python chỉ dùng cho tài chính.  
B. Python không cần máy tính.  
C. Python là ngôn ngữ cấp cao.  
D. Python luôn chạy mà không cần môi trường.  


**Đáp án:** C.  
**Giải thích:** Ngôn ngữ cấp cao cung cấp các cấu trúc gần với ý tưởng của con người.

### Câu 2

Mã nguồn mở của Python có nghĩa là gì?

A. Mọi dịch vụ dùng Python đều miễn phí.  
B. Chỉ chạy được trên Linux.  
C. Chỉ có nhà phát triển gốc xem được mã.  
D. Có thể truy cập và phát triển mã theo giấy phép phù hợp.  


**Đáp án:** D.  
**Giải thích:** Giấy phép mã nguồn mở của Python không đồng nghĩa mọi sản phẩm liên quan là miễn phí.

### Câu 3

Khi phải chạy lại cùng một phân tích cho hàng trăm tệp, lợi thế nổi bật của Python là gì?

A. Tự động hóa bằng chương trình.  
B. Bảo đảm mọi dữ liệu đều đúng.  
C. Không cần xác định đầu vào.  
D. Loại bỏ hoàn toàn nhu cầu kiểm tra.  


**Đáp án:** A.  
**Giải thích:** Code có thể tổ chức thành quy trình xử lý lặp lại cho nhiều tệp.

### Câu 4

Giá đầu kỳ 100, cuối kỳ 95: lợi suất đơn là bao nhiêu?

A. 5%  
B. -5%  
C. 95%  
D. -95%  


**Đáp án:** B.  
**Giải thích:** Lợi suất là `(95 - 100) / 100 = -0.05` hay -5%.

### Câu 5

Phát biểu nào phù hợp nhất khi chọn Python hay Excel?

A. Python luôn nhanh hơn trong mọi thao tác.  
B. Excel không thể làm tính toán.  
C. Tùy loại bài toán, quy mô và yêu cầu tự động hóa.  
D. Chỉ người làm khoa học máy tính mới dùng được Python.  


**Đáp án:** C.  
**Giải thích:** Lựa chọn công cụ phụ thuộc vào cách làm việc và mục tiêu cụ thể.

## 9. Tổng kết

Python được lựa chọn rộng rãi vì dễ đọc, linh hoạt và có hệ sinh thái lớn. Hãy ưu tiên mức độ phù hợp với bài toán hơn những nhận định công cụ nào luôn tốt nhất.
