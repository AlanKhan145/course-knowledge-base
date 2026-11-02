# Bài 04 — Kiểm tra kiến thức nhập môn phát triển AR

> **Tên bài:** Welcome to AR Development Quiz  
> **Lộ trình:** Mobile AR Development · **Học phần:** Get started with AR  
> **Môi trường tham chiếu:** Unity 2022.3  
> **Tính chất:** Bộ câu hỏi tự luyện được biên soạn từ phạm vi kiến thức nhập môn; **không phải đề quiz chính thức của Unity**.

## 1. Mục tiêu đánh giá

Bài kiểm tra giúp bạn tự xác nhận rằng mình có thể:

1. Giải thích nguyên lý AR di động và vai trò của hệ thống theo dõi.
2. Nhận biết các thành phần `AR Session`, `XR Origin` và loại trackable.
3. Xác định đúng bước cấu hình môi trường Unity và các package nền tảng.
4. Chọn quy trình build, kiểm thử và debug phù hợp cho iOS/Android.
5. Đưa ra bằng chứng thực hành thay vì chỉ trả lời lý thuyết.

## 2. Hướng dẫn làm bài

- Trả lời **12 câu trắc nghiệm**, mỗi câu có một đáp án đúng nhất trong bốn lựa chọn A, B, C, D.
- Nên tự chọn đáp án trước khi xem phần **Đáp án và giải thích** ở cuối.
- Hoàn thành bài thực hành ngắn để tự đánh giá khả năng áp dụng.
- Các câu hỏi hướng đến quyết định và quy trình trong dự án, không yêu cầu học thuộc tên menu của một bản Unity cụ thể.

## 3. Câu hỏi trắc nghiệm

### Câu 1. Bản chất của AR

Một mô hình 3D luôn xuất hiện ở góc màn hình dù người dùng xoay điện thoại. Điểm nào chưa được chứng minh trong trải nghiệm này?

A. Khả năng kết xuất màu.  
B. Khả năng gắn nội dung số vào không gian thật một cách có ý nghĩa.  
C. Việc mô hình có vật liệu.  
D. Việc ứng dụng có thể phát âm thanh.

### Câu 2. Vai trò của AR Session

Trong một scene Unity dùng AR, thành phần nào liên quan trực tiếp đến quản lý phiên theo dõi?

A. `Mesh Filter`.  
B. `Audio Source`.  
C. `Light`.  
D. `AR Session`.

### Câu 3. Chọn loại đối tượng theo dõi

Bạn cần hiển thị thông tin khi camera nhìn thấy một hình in cụ thể. Loại theo dõi nào phù hợp nhất?

A. `Tracked image`.  
B. `Plane detection` như lựa chọn duy nhất.  
C. `Face tracking`.  
D. `Audio listener`.

### Câu 4. Kiểm tra thiết bị

Vì sao phải kiểm tra khả năng AR của điện thoại trước khi chọn chức năng cho ứng dụng?

A. Vì mọi điện thoại hỗ trợ các loại tracking giống hệt nhau.  
B. Vì Unity không thể tạo scene khi chưa kết nối điện thoại.  
C. Vì một số tính năng phụ thuộc thiết bị và hệ điều hành.  
D. Vì tất cả chức năng chỉ chạy trên máy tính.

### Câu 5. Công cụ quản lý Editor

Muốn biết máy đã cài bản Unity Editor và Android Build Support hay chưa, nên xem ở đâu trước?

A. `Unity Hub` → `Installs`.  
B. `Game view`.  
C. `Animation`.  
D. `Scene Lighting`.

### Câu 6. Package cho Android

Dự án AR Foundation hướng đến điện thoại Android thường cần kiểm tra plugin nền tảng nào?

A. `ARKit XR Plugin` là lựa chọn duy nhất cho Android.  
B. `ARCore XR Plugin`.  
C. `Timeline`.  
D. `TextMeshPro` thay thế AR provider.

### Câu 7. Kiểm tra khả năng tái lập

Sau khi cấu hình môi trường AR, hành động nào giúp kiểm tra tính tái lập của dự án?

A. Xóa toàn bộ scene.  
B. Thay ngẫu nhiên các package.  
C. Chỉ đổi màu Inspector.  
D. Lưu scene, đóng và mở lại dự án rồi kiểm tra Console/package.

### Câu 8. Editor khác thiết bị thật

Ứng dụng hiển thị tốt trong Editor nhưng không nhận camera trên điện thoại. Bước đầu nào có giá trị nhất?

A. Thay tên dự án.  
B. Tăng số lượng mô hình.  
C. Kiểm tra quyền camera, hỗ trợ AR và cấu hình nền tảng.  
D. Bỏ qua sự cố vì Editor đã chạy được.

### Câu 9. Chuẩn bị trước build

Bản build không mở đúng scene chính. Điều gì cần kiểm tra?

A. Phiên bản bàn phím.  
B. Scene đã được thêm đúng vào danh sách build chưa.  
C. Kích thước cửa sổ Console trên máy tính.  
D. Vị trí chuột trong Unity Hub.

### Câu 10. Quy trình iOS

Đã cài iOS Build Support. Điều gì vẫn có thể cần thiết để chạy app lên iPhone?

A. Công cụ build/signing iOS phù hợp, thường qua Xcode trên macOS.  
B. Thay thế hoàn toàn ARKit bằng ARCore.  
C. Tắt camera của điện thoại vĩnh viễn.  
D. Không cần xác định thiết bị đích.

### Câu 11. Cách gỡ lỗi

Một đối tượng ảo không giữ vị trí ổn định. Cách tiếp cận nào giúp tìm nguyên nhân đáng tin cậy nhất?

A. Thay cùng lúc mọi tham số liên quan.  
B. Chỉ dựa vào ảnh trong Unity Editor.  
C. Coi đây luôn là lỗi mô hình 3D.  
D. Ghi nhận kịch bản, quan sát tracking/log và thử thay từng yếu tố.

### Câu 12. Tiêu chí bàn giao

Nhóm phát triển muốn người khác kiểm chứng bản AR thử nghiệm. Bộ tài liệu nào hữu ích nhất?

A. Chỉ ảnh logo ứng dụng.  
B. Chỉ số lượng GameObject.  
C. Bản build/quy trình chạy, hướng dẫn thiết bị, video thực tế, kết quả kiểm thử và lỗi còn biết.  
D. Chỉ bản chụp cửa sổ Scene view.

## 4. Bài thực hành đánh giá

**Tình huống:** Bạn được giao tạo một scene AR hiển thị một đối tượng 3D khi thiết bị nhận diện một mặt phẳng phù hợp, sau đó thử nghiệm trên một điện thoại.

**Yêu cầu:**

1. Nêu những thành phần Unity/AR cần kiểm tra để scene có thể hoạt động.
2. Liệt kê môi trường Editor, build modules và package cần xác minh trước khi chạy.
3. Trình bày tối thiểu **5 bước** từ khi cấu hình đến khi thử nghiệm trên thiết bị.
4. Xây dựng **3 trường hợp kiểm thử**: ứng dụng khởi động, nhận diện mặt phẳng và duy trì vị trí mô hình khi máy di chuyển.
5. Nếu mô hình không xuất hiện, đưa ra **hai giả thuyết nguyên nhân** và cách phân biệt chúng.

### Tiêu chí tự chấm (10 điểm)

| Tiêu chí | Điểm tối đa |
| --- | ---: |
| Xác định đúng thành phần AR và loại trackable | 2 |
| Kiểm tra môi trường, package và thiết bị | 2 |
| Quy trình triển khai có thứ tự và có checkpoint | 2 |
| Kịch bản kiểm thử có kết quả mong đợi rõ ràng | 2 |
| Debug dựa trên bằng chứng và thay đổi có kiểm soát | 2 |

**Gợi ý đánh giá:** Một bài làm tốt cần giải thích được **vì sao** chọn từng bước và nêu rõ **cách xác nhận** bước đó đã thành công.

## 5. Đáp án và giải thích

| Câu | Đáp án | Giải thích |
| --- | :---: | --- |
| 1 | **B** | AR cần có mối liên hệ giữa nội dung số và thế giới thực, không chỉ vẽ mô hình trên màn hình. |
| 2 | **D** | `AR Session` đảm nhiệm việc điều phối phiên AR. |
| 3 | **A** | `Tracked image` phù hợp với việc nhận diện một hình ảnh tham chiếu. |
| 4 | **C** | Khả năng theo dõi AR thay đổi theo thiết bị, hệ điều hành và tính năng. |
| 5 | **A** | Unity Hub quản lý Editor và mô-đun cài đặt. |
| 6 | **B** | ARCore là nền tảng AR cho Android. |
| 7 | **D** | Đóng/mở lại giúp phát hiện vấn đề lưu cấu hình và package. |
| 8 | **C** | Thiết bị thật có yêu cầu quyền và runtime riêng; Editor không kiểm chứng thay thế. |
| 9 | **B** | Scene cần được cấu hình để được đưa vào bản build. |
| 10 | **A** | Triển khai lên iOS có bước build và ký ứng dụng trong hệ sinh thái Apple. |
| 11 | **D** | Debug có log và biến thử nghiệm được kiểm soát giúp khoanh vùng lỗi. |
| 12 | **C** | Bằng chứng thiết bị, cách chạy và hạn chế giúp người khác đánh giá/tái lập. |

### Tự đánh giá kết quả

- **10–12 câu đúng:** Nắm tốt các quyết định nhập môn; ưu tiên hoàn thành bài thực hành trên thiết bị.
- **7–9 câu đúng:** Có nền tảng; nên ôn lại các câu sai và kiểm tra bằng scene thực tế.
- **Dưới 7 câu đúng:** Nên luyện lại nguyên lý tracking, cấu hình package và quy trình build trước khi triển khai ứng dụng lớn hơn.

Đây là thang tự luyện, không phải kết quả hay tiêu chuẩn chấm điểm chính thức của Unity Learn.

## 6. Checklist hoàn thành

- [ ] Trả lời đủ 12 câu mà không nhìn trước đáp án.
- [ ] Giải thích lại được ít nhất 3 câu sai hoặc còn phân vân.
- [ ] Hoàn thành quy trình và bảng kiểm thử cho bài thực hành.
- [ ] Có ít nhất một hình ảnh, video hoặc nhật ký thử nghiệm có thể dùng làm bằng chứng.
- [ ] Phân biệt được giới hạn Editor và điều kiện thiết bị AR thực tế.

**Tham khảo:** [Unity Learn — Get started with AR](https://learn.unity.com/pathway/mobile-ar-development/unit/get-started-with-ar?version=2022.3). Bộ câu hỏi ở đây phục vụ ôn tập độc lập và không thay thế bài kiểm tra chính thức trên nền tảng.
