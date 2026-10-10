# Bài 03 — Phối vật liệu cho khớp mắt cá, khớp đôi và bulông

## 1. Tóm tắt

Các khớp cơ khí chứa nhiều mặt khuất: vòng lõm, tấm lắp, ô vuông nhỏ và bu lông. Cách làm hiệu quả là để `Blue Metal` làm bề mặt chính, sau đó gán `Dark Metal` vào các hốc, viền và chi tiết gắn kết. Bài này chú trọng kỹ thuật chọn vùng chính xác khi topology phức tạp.

## 2. Mục tiêu học tập

- Gán vật liệu cho khớp có hai vùng chính là xanh và tối.
- Dùng chế độ `Wireframe` và `Box Select` để thao tác trên các mặt khó thấy.
- Lặp lại cùng quy tắc phối màu trên hai khớp tương tự.
- Kiểm soát lựa chọn trên cả hai phía của khớp.

## 3. Thiết lập phần khớp chính

Chọn object khớp mắt cá rồi chuyển material chính sang `Blue Metal`. Bổ sung slot `Dark Metal`. Trước khi chọn phần cần làm tối, chuyển vào `Edit Mode` và dùng `Face Select` để thao tác theo mặt, tránh vô tình chọn nguyên các chi tiết không liên quan.

Mục tiêu là giữ màu xanh ở phần vỏ khớp nhìn thấy rõ, còn các bộ phận gắn bên trong chuyển tối: vòng lõm, bu lông, gờ và phần chèn nhỏ.

## 4. Chọn các vùng khó quan sát

### 4.1. Sử dụng Wireframe và Box Select

Nhấn `Z`, chọn `Wireframe` để nhìn qua bề mặt bên ngoài. Dùng `B` tạo vùng chọn cho nhóm mặt cần đổi; xem kỹ cả mặt trước và phía sau vì `Wireframe` cho phép nhìn và có thể chọn xuyên nhiều vùng hình học.

Nếu chỉ cần chọn mặt nhìn thấy phía trước, chuyển lại `Solid` và chọn chúng trực tiếp. Sau mỗi đợt chọn, quay góc nhìn để phát hiện những mặt bị bỏ sót.

### 4.2. Chọn bu lông, vòng mặt và ô chèn

Đối với bu lông tách rời thành các đảo mesh, trỏ chuột vào từng bu lông và nhấn `L`. Đối với dải mặt chạy quanh mép, dùng lựa chọn loop khi cấu trúc mesh cho phép. Giữ `Shift` để bổ sung các mặt riêng lẻ. Tiếp tục với các hình vuông nhỏ và đường rãnh trong khớp.

Bấm vào slot `Dark Metal`, sau đó **Assign**. Chuyển `Object Mode` để kiểm tra tương phản trước khi kết luận hoàn tất.

## 5. Đồng bộ cặp khớp tương tự

Đối với khớp nằm phía đối diện hoặc khớp có cùng cấu tạo, bắt đầu bằng `Blue Metal`, thêm slot `Dark Metal` và lặp lại cách chọn bu lông, mặt trong, vòng cạnh. Các chi tiết cần giống nhau về chất liệu, nhưng không nên giả định hai object có cùng thứ tự mặt hoặc cách nối topology.

Bạn có thể lặp lại lựa chọn bằng mắt ở các vị trí tương ứng. Sau khi gán, hãy xoay model, so sánh hai bên và kiểm tra cả những mặt nằm sâu ở phía trong. Nếu còn vùng xanh lọt giữa cụm tối, quay lại `Edit Mode` và gán bổ sung đúng các mặt thiếu.

## 6. Quy trình kiểm tra chống bỏ sót

1. Quan sát vòng ngoài xanh trên từng khớp.
2. Kiểm tra vòng trong đã tối, không còn những mảng xanh không chủ ý.
3. Đếm bằng mắt các bulông đã đổi màu ở mỗi phía.
4. Nhìn khớp từ trước, sau và từ dưới lên.
5. Quay về `Object Mode`, ẩn tạm khớp vừa xong bằng `H`, rồi `Ctrl + S`.

## 7. Thực hành ngắn

Tự chọn và tô một cặp khớp cơ khí gồm vòng ngoài, vòng trong và bốn hoặc nhiều chi tiết gắn kết (nếu model có). Tất cả các mặt trong cần tối, còn phần khớp chịu trách nhiệm nhận diện màu sắc vẫn xanh.

## 8. Câu hỏi ôn tập

**Câu 1.** Công cụ nào hữu ích khi cần chọn mặt phía sau một vỏ đang che khuất?

A. Đổi tên object.  
B. Chuyển `Wireframe` và dùng `Box Select`.  
C. Chỉ tăng Metallic.  
D. Chọn camera khác.

**Đáp án:** B. **Giải thích:** Wireframe cho phép quan sát xuyên và hỗ trợ chọn các vùng mặt khuất.

**Câu 2.** Vì sao phải kiểm tra lựa chọn khi dùng `Wireframe`?

A. Vì Wireframe tự động xóa mesh.  
B. Vì Wireframe bỏ tất cả material slot.  
C. Vì thao tác có thể chạm tới hình học ở phía sau ngoài ý định.  
D. Vì không thể chuyển về Solid.

**Đáp án:** C. **Giải thích:** Chế độ xem xuyên khiến vùng chọn có thể gồm cả những mặt nằm sâu trong vật thể.

**Câu 3.** Sau khi chọn các bu lông, vòng trong và mặt lõm, bước đúng tiếp theo là gì?

A. Chọn `Dark Metal` và bấm `Assign`.  
B. Xóa object chứa khớp.  
C. Đổi tên mesh thành Dark.  
D. Xóa toàn bộ material slot.

**Đáp án:** A. **Giải thích:** Vùng mặt cần đổi đã được chọn; `Assign` áp vật liệu đang hoạt động cho vùng đó.

**Câu 4.** Hai khớp đối diện có hình dáng tương tự. Điều gì cần ưu tiên khi lặp quy trình?

A. Giả định mọi thứ tự vertex và mặt giống hệt.  
B. Chỉ quan sát một phía của robot.  
C. Chọn toàn bộ scene rồi Assign.  
D. Kiểm tra lại từng vùng vì topology của hai object có thể khác nhau.

**Đáp án:** D. **Giải thích:** Phối màu có thể giống nhau nhưng lựa chọn mặt vẫn phải được kiểm chứng độc lập.

**Câu 5.** Trong khớp dùng Blue Metal làm nền, những mặt nào phù hợp nhất với Dark Metal?

A. Toàn bộ vỏ ngoài.  
B. Mặt lõm, rãnh, bulông và lõi bên trong.  
C. Tất cả đèn trên đầu robot.  
D. Nền World của scene.

**Đáp án:** B. **Giải thích:** Phần tối phân biệt các kết cấu phụ và làm nổi khối xanh ở ngoài.

## 9. Tổng kết

Khớp máy dễ bị sai vật liệu tại các chi tiết nhỏ và mặt nằm sâu. Kết hợp `Wireframe`, `B`, `L`, chọn vòng mặt và quan sát nhiều góc sẽ giúp màu xanh–tối được đồng bộ, không lộ các mặt sai màu.
