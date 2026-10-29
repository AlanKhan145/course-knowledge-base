# Bài 05 — Phát triển nguyên mẫu cơ bản theo từng vòng lặp

> **Creative Core · Prototyping · Thực hành**

Khi cơ chế chính đã hoạt động, hãy cải tiến mức độ dễ hiểu và chất lượng tương tác trước khi đầu tư mạnh vào hình ảnh.

## 1. Mục tiêu và nguyên tắc

Sau bài học, người học biết đánh giá greybox theo tiêu chí, lập kế hoạch nâng cấp theo giai đoạn, lập danh mục asset, lựa chọn cải tiến phục vụ trải nghiệm. **Không đồng nhất mở rộng prototype với polish.** Mục tiêu vẫn là hiểu cách chơi và tính khả thi.

## 2. Phân biệt cải tiến chức năng với trang trí

Ví dụ cầu thoát hiểm: bản đầu dùng cầu biến mất ngay lập tức; bản nâng cấp sử dụng chuyển động hạ cầu có trạng thái rõ ràng. Việc bổ sung animation lúc này giúp người chơi hiểu hậu quả của thao tác, không đơn thuần để đẹp.

| Thay đổi | Vấn đề giải quyết | Thứ tự gợi ý |
|---|---|---|
| Nút đổi trạng thái khi bàn đạp bật | Người chơi không biết nút đã dùng được | Ưu tiên cao |
| Cầu hạ bằng Animation | Người chơi không nhận thấy tác động | Ưu tiên cao |
| Tách tường để hướng tuyến khám phá | Lối đi quá hiển nhiên | Sau khi kiểm chứng đường đi |
| Nhạc nền nhiều lớp | Chưa ảnh hưởng kiểm chứng chính | Để sau |

Chỉ thay đổi một hoặc vài yếu tố liên quan cho mỗi vòng, để biết điều gì tạo ra cải thiện.

## 3. Các vòng nâng cấp có chủ đích

**Vòng 1: làm rõ cơ chế.** Trong ví dụ Unity Learn, người làm sử dụng ProBuilder để dựng lại môi trường và cắt ô cửa; tạo hố bằng Terrain; thêm animation cho cầu; cải thiện phản hồi màu của nút và bàn đạp. `Rigidbody` có thể được cấu hình `isKinematic` khi chuyển động do animation điều khiển, nhưng cần tránh xung đột giữa animation, collider và physics.

**Vòng 2: làm rõ trải nghiệm khám phá.** Chỉnh bố cục tường/cửa, thêm một rào chắn cho người chơi nhìn thấy mục tiêu nhưng chưa tiếp cận được, di chuyển hoặc thu nhỏ bàn đạp để hướng sự chú ý vào sự thay đổi của nút. Lần thử tiếp theo phải kiểm chứng người chơi thật sự chú ý và suy luận được gì; không chỉ hỏi họ có “thấy đẹp” không.

## 4. Danh mục asset và giấy phép

Tạo `asset-inventory.md` hoặc CSV:

| Asset | Vai trò | Trạng thái | Nguồn / giấy phép |
|---|---|---|---|
| `Bridge_Greybox` | Cầu tạm | Placeholder | Tự tạo |
| `Button_Material` | Tín hiệu trạng thái | Dùng cho prototype | Tự tạo |
| `StoneWall_Model` | Model tường dự định | Chưa tích hợp | Cần xác minh giấy phép |

Luôn phân biệt vật thể thay thế tạm (*placeholder*) và asset cuối. Trước khi phát hành, xem quyền tác giả, điều khoản phân phối, attribution nếu có, cũng như hạn chế sử dụng asset mua/miễn phí. Không giả định “được tải miễn phí” đồng nghĩa “được tái phân phối”.

## 5. Bài lab: cải tiến theo hai bước

1. Quay một lượt chơi từ bản greybox, ghi điểm người chơi không nhận tín hiệu.
2. Tạo bản `v0.2`: chỉ thay đổi phản hồi nút + chuyển động cầu; kiểm thử lại.
3. Tạo bản `v0.3`: điều chỉnh lối đi, bổ sung rào nếu người chơi cần khám phá.
4. Với mỗi bản, ghi một câu **thay đổi – lý do – dấu hiệu cần kiểm chứng**.
5. Tạo danh mục asset với giấy phép và đánh dấu phần placeholder.
6. Chỉ giữ chỉnh sửa giúp trả lời câu hỏi kiểm chứng, phần còn lại ghi backlog.

## 6. Đánh giá kết quả và tài liệu

Điều kiện đạt: chuỗi tương tác được giữ nguyên; người thử nhận thấy trạng thái cầu/nút dễ hơn; có lịch sử thay đổi và danh mục asset. Nếu cải tiến làm tăng sự rối rắm, có thể hoàn nguyên.

- [Unity Learn – Build on your basic prototype](https://learn.unity.com/tutorial/build-on-your-basic-prototype-3?version=6.0)
- [Unity Docs – ProBuilder workflow](https://docs.unity.cn/Packages/com.unity.probuilder%406.1/manual/workflow-edit.html)

## 7. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Bước nâng cấp nào phục vụ khả năng hiểu cơ chế?

A. Thêm hàng trăm texture  
B. Đổi màu nút để biểu thị trạng thái kích hoạt  
C. Chỉ đổi tên project  
D. Tăng polygon tường  

**Đáp án:** B
**Giải thích:** Phản hồi trạng thái giúp người chơi nối hành động với kết quả.

**Câu 2.** Cách đánh giá hai vòng prototype hiệu quả là gì?

A. Chỉ so ảnh đẹp  
B. Cùng lúc thay mọi hệ thống  
C. Không ghi lịch sử  
D. Kiểm tra mục tiêu và hành vi sau từng thay đổi có chủ đích  

**Đáp án:** D
**Giải thích:** Kiểm chứng theo vòng giúp xác định tác động.

**Câu 3.** Ý nghĩa của placeholder trong asset inventory?

A. Asset tạm phải được xem xét thay thế ở giai đoạn phù hợp  
B. Asset luôn có thể bán lại  
C. Một script bắt buộc  
D. Đã là asset sản phẩm cuối  

**Đáp án:** A
**Giải thích:** Placeholder phục vụ thử nghiệm trước khi chọn tài nguyên cuối.

**Câu 4.** Khi dùng một model miễn phí từ mạng, cần làm gì?

A. Chỉ đổi tên file  
B. Xóa tác giả  
C. Kiểm tra giấy phép và phạm vi sử dụng  
D. Cho vào bản build bất kể điều khoản  

**Đáp án:** C
**Giải thích:** Quyền sử dụng và quyền phân phối có thể khác nhau.

**Câu 5.** Vì sao không nên polish quá sớm?

A. Unity không hỗ trợ texture  
B. Có thể tốn công hoàn thiện cơ chế chưa được chứng minh  
C. Vì polish gây lỗi luôn luôn  
D. Vì không thể sửa model  

**Đáp án:** B
**Giải thích:** Chức năng và trải nghiệm phải được kiểm chứng trước.
