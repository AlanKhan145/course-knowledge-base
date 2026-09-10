# Bài 02 - Thiết kế nghiên cứu và phương pháp hình thái học

**Loại:** Lesson  
**Module:** 01 - Nền tảng labriform propulsion

## 1. Mục tiêu học tập

Sau bài này, người học có thể mô tả thiết kế mẫu của nghiên cứu, các phép đo hình dạng vây, quy trình giải phẫu cơ, cách thu dữ liệu xương và mục đích của PCA.

## 2. Thiết kế mẫu

Nghiên cứu khảo sát **12 loài** đại diện cho sự đa dạng vây ngực ở các cá perciform sử dụng labriform propulsion. Mục tiêu của việc chọn nhiều họ là tách hai lớp thông tin: đặc điểm nào là thiết kế chung của hệ vây ngực, và đặc điểm nào biến thiên theo loài hoặc chiến lược vận động.

Danh sách 12 loài cùng vị trí chèn cơ trên tia vây được lưu ở `../data/table-01-taxa-fin-rays.csv`.

## 3. Đo hình dạng vây

Vây được mở rộng, cố định và chụp ảnh số. Từ ảnh, nghiên cứu đo các biến có ý nghĩa chức năng, gồm:

- aspect ratio;
- tip area;
- mid area;
- base area;
- tip chord;
- mid chord;
- base chord.

Các biến này cho phép mô tả không chỉ kích thước tổng thể mà cả **cách diện tích phân bố dọc theo vây**.

## 4. Giải phẫu cơ và đo khối lượng

Đai vây được tách khỏi cơ thể, các cơ được phân tách dưới kính hiển vi giải phẫu, sau đó ghi nhận:

- vị trí nguyên ủy;
- vị trí bám tận;
- đường đi của gân;
- quan hệ giữa bó cơ và tia vây;
- khối lượng cơ.

Khối lượng cơ được dùng như một chỉ báo gián tiếp về **khả năng tạo lực tương đối** giữa các thành phần của hệ thống.

## 5. Dữ liệu xương

Dữ liệu xương lấy từ mẫu **cleared and stained**, cho phép quan sát rõ cleithrum, coracoid, scapula, radials và tia vây. Nhờ vậy, nghiên cứu có thể đặt hệ cơ lên một khung cơ học cụ thể thay vì xem cơ và xương riêng lẻ.

## 6. PCA dùng để làm gì?

Nghiên cứu áp dụng Principal Component Analysis trên tỷ lệ khối lượng của sáu nhóm cơ chính. Mục tiêu không phải “xếp hạng loài” mà là tìm những **trục biến thiên tổng hợp** giúp nhìn thấy nhóm cơ nào thay đổi cùng nhau và loài nào chiếm vùng khác nhau trong morphospace.

Ba thành phần đầu được bài báo báo cáo là giải thích **95,8%** phương sai của tập dữ liệu.

## 7. Điểm cần thận trọng khi đọc

Một nghiên cứu hình thái học có thể đề xuất vai trò chức năng từ vị trí bám, hướng kéo và kích thước cơ, nhưng nhiều dự đoán vẫn cần kiểm chứng bằng dữ liệu động học, EMG, lực hoặc thí nghiệm bơi sống. Bài báo cũng tự nhấn mạnh giới hạn này ở phần kết luận.

## 8. Tự kiểm tra

1. Vì sao cần đo cả tip area, mid area và base area thay vì chỉ diện tích vây tổng?
2. Vì sao khối lượng cơ có thể liên hệ với force capacity nhưng không đồng nghĩa trực tiếp với lực tức thời trong mọi điều kiện?
3. Cleared-and-stained preparation giúp trả lời câu hỏi nào?
4. PCA giúp giản lược dữ liệu như thế nào?

## 9. Bài tập

Dùng `../data/appendix-raw-muscle-masses.csv` và chọn ba specimen. Tính tổng khối lượng sáu nhóm cơ cho từng specimen, sau đó mô tả sự khác biệt. Chỉ mô tả dữ liệu; chưa suy diễn về hiệu suất bơi nếu chưa có bằng chứng đi kèm.

## 10. Tham chiếu học thuật

Nguồn chính: PDF trang 2-3, phần Materials and Methods.
